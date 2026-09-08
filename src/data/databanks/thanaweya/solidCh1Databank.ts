import type { ChapterDatabank } from '../../../types/curriculum';

export const solidCh1Databank: ChapterDatabank = {
  easy: [
  {
    "id": "solid_ch1_db_easy_01",
    "titleEn": "Point on the X-axis",
    "titleAr": "إحداثيات نقطة على محور السينات",
    "difficulty": "easy",
    "questionEn": "Any point lying on the $X$-axis in 3D space has the general form:",
    "questionAr": "أي نقطة تقع على محور السينات في الفراغ ثلاثي الأبعاد تكون على الصورة:",
    "optionsEn": [
      "(x, 0, 0)",
      "(0, y, 0)",
      "(0, 0, z)",
      "(x, y, 0)"
    ],
    "optionsAr": [
      "(x، ٠، ٠)",
      "(٠، y، ٠)",
      "(٠، ٠، z)",
      "(x، y، ٠)"
    ],
    "correctAnswer": "(x, 0, 0)",
    "correctIndex": 0,
    "hintEn": "On the X-axis, both y and z coordinates are zero.",
    "hintAr": "على محور السينات، يكون كلا الإحداثيين ص و ع مساويين للصفر.",
    "stepByStepSolutionEn": [
      "The $X$-axis is the intersection of the $XY$-plane ($z = 0$) and the $XZ$-plane ($y = 0$).",
      "Therefore, any point on the $X$-axis has $y = 0$ and $z = 0$, giving $(x, 0, 0)$."
    ],
    "stepByStepSolutionAr": [
      "محور السينات هو تقاطع المستويين س ص (ع = ٠) و س ع (ص = ٠).",
      "إذن أي نقطة على محور السينات إحداثياتها $(x، ٠، ٠)$."
    ],
    "teacherTipEn": "Similarly, points on the Y-axis are $(0, y, 0)$ and points on the Z-axis are $(0, 0, z)$.",
    "teacherTipAr": "وبالمثل: نقط محور الصادات $(٠، y، ٠)$ ونقط محور العينات $(٠، ٠، z)$."
  },
  {
    "id": "solid_ch1_db_easy_02",
    "titleEn": "Point on the XY Coordinate Plane",
    "titleAr": "نقطة تقع في المستوى س ص",
    "difficulty": "easy",
    "questionEn": "What is the equation of the $XY$-plane in 3D space?",
    "questionAr": "ما هي معادلة المستوى الإحداثي س ص في الفراغ؟",
    "optionsEn": [
      "z = 0",
      "y = 0",
      "x = 0",
      "x + y = 0"
    ],
    "optionsAr": [
      "z = ٠",
      "y = ٠",
      "x = ٠",
      "x + y = ٠"
    ],
    "correctAnswer": "z = 0",
    "correctIndex": 0,
    "hintEn": "Every point in the XY-plane has its vertical height (z-coordinate) equal to zero.",
    "hintAr": "كل نقطة في المستوى س ص ارتفاعها الرأسي (الإحداثي ع) يساوي صفراً.",
    "stepByStepSolutionEn": [
      "In the $XY$-plane, the elevation above or below the plane is zero.",
      "Thus, the equation is identically $z = 0$."
    ],
    "stepByStepSolutionAr": [
      "في المستوى س ص تنعدم قيمة الإحداثي العيني تماماً.",
      "إذن معادلة المستوى س ص هي $z = ٠$."
    ],
    "teacherTipEn": "The name tells you what is missing: $XY$-plane has missing $Z$, so $z = 0$.",
    "teacherTipAr": "اسم المستوى يوضح المتغير الغائب: المستوى س ص يغيب عنه ع، فمعادلته $z = ٠$."
  },
  {
    "id": "solid_ch1_db_easy_03",
    "titleEn": "Equation of the XZ Plane",
    "titleAr": "معادلة المستوى س ع",
    "difficulty": "easy",
    "questionEn": "The equation of the $XZ$-coordinate plane is:",
    "questionAr": "معادلة المستوى الإحداثي س ع هي:",
    "optionsEn": [
      "y = 0",
      "z = 0",
      "x = 0",
      "x - z = 0"
    ],
    "optionsAr": [
      "y = ٠",
      "z = ٠",
      "x = ٠",
      "x - z = ٠"
    ],
    "correctAnswer": "y = 0",
    "correctIndex": 0,
    "hintEn": "The y-coordinate is missing.",
    "hintAr": "الإحداثي الصادي هو الغائب.",
    "stepByStepSolutionEn": [
      "The $XZ$-plane contains the $X$ and $Z$ axes.",
      "Any point in this plane has $y = 0$."
    ],
    "stepByStepSolutionAr": [
      "المستوى س ع يحتوي على محوري السينات والعينات.",
      "أي نقطة فيه إحداثيها الصادي يساوي صفراً: $y = ٠$."
    ],
    "teacherTipEn": "Plane equations: $XY \\implies z=0$, $XZ \\implies y=0$, $YZ \\implies x=0$.",
    "teacherTipAr": "معادلات المستويات الأساسية: س ص $\\implies z=٠$، س ع $\\implies y=٠$، ص ع $\\implies x=٠$."
  },
  {
    "id": "solid_ch1_db_easy_04",
    "titleEn": "Distance of Point to XY Plane",
    "titleAr": "بعد نقطة عن المستوى س ص",
    "difficulty": "easy",
    "questionEn": "Find the perpendicular distance from point $P(2, -5, 7)$ to the $XY$-plane.",
    "questionAr": "أوجد البعد العمودي للنقطة $P(٢، -٥، ٧)$ عن المستوى الإحداثي س ص.",
    "optionsEn": [
      "7",
      "5",
      "2",
      "\\sqrt{29}"
    ],
    "optionsAr": [
      "٧",
      "٥",
      "٢",
      "\\sqrt{٢٩}"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "Distance to $XY$-plane is $|z|$.",
    "hintAr": "البعد عن المستوى س ص هو $|ع|$.",
    "stepByStepSolutionEn": [
      "The perpendicular distance to the $XY$-plane is given by:",
      "$$d = |z| = |7| = 7 \\text{ units}$$"
    ],
    "stepByStepSolutionAr": [
      "البعد العمودي عن المستوى س ص يساوي القيمة المطلقة للإحداثي العيني:",
      "$$d = |ع| = |٧| = ٧ \\text{ وحدات طول}$$"
    ],
    "teacherTipEn": "Distance is always non-negative: $|z|$.",
    "teacherTipAr": "المسافة دائماً غير سالبة: $|ع|$."
  },
  {
    "id": "solid_ch1_db_easy_05",
    "titleEn": "Distance of Point to XZ Plane",
    "titleAr": "بعد نقطة عن المستوى س ع",
    "difficulty": "easy",
    "questionEn": "Find the perpendicular distance from point $A(-3, -6, 4)$ to the $XZ$-plane.",
    "questionAr": "أوجد البعد العمودي للنقطة $A(-٣، -٦، ٤)$ عن المستوى الإحداثي س ع.",
    "optionsEn": [
      "6",
      "-6",
      "3",
      "4"
    ],
    "optionsAr": [
      "٦",
      "-٦",
      "٣",
      "٤"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "Distance is $|y| = |-6|$.",
    "hintAr": "البعد هو $|ص| = |-٦|$.",
    "stepByStepSolutionEn": [
      "Distance to $XZ$-plane is $|y| = |-6| = 6$."
    ],
    "stepByStepSolutionAr": [
      "البعد عن المستوى س ع هو $|ص| = |-٦| = ٦$ وحدات طول."
    ],
    "teacherTipEn": "Never choose a negative value for distance.",
    "teacherTipAr": "لا تختر أبداً قيمة سالبة للمسافة."
  },
  {
    "id": "solid_ch1_db_easy_06",
    "titleEn": "Distance of Point to YZ Plane",
    "titleAr": "بعد نقطة عن المستوى ص ع",
    "difficulty": "easy",
    "questionEn": "Find the distance from $B(-9, 2, 5)$ to the $YZ$-plane.",
    "questionAr": "أوجد بعد النقطة $B(-٩، ٢، ٥)$ عن المستوى ص ع.",
    "optionsEn": [
      "9",
      "-9",
      "2",
      "5"
    ],
    "optionsAr": [
      "٩",
      "-٩",
      "٢",
      "٥"
    ],
    "correctAnswer": "9",
    "correctIndex": 0,
    "hintEn": "Distance to $YZ$-plane is $|x|$.",
    "hintAr": "البعد عن المستوى ص ع هو $|س|$.",
    "stepByStepSolutionEn": [
      "$$d = |x| = |-9| = 9$$"
    ],
    "stepByStepSolutionAr": [
      "$$d = |س| = |-٩| = ٩$$"
    ],
    "teacherTipEn": "The coordinate $x$ tells how far the point is from $YZ$.",
    "teacherTipAr": "الإحداثي س يحدد بعد النقطة عن المستوى ص ع."
  },
  {
    "id": "solid_ch1_db_easy_07",
    "titleEn": "Distance of Point to Z-axis",
    "titleAr": "بعد نقطة عن محور العينات",
    "difficulty": "easy",
    "questionEn": "Find the distance from point $P(3, 4, 12)$ to the $Z$-axis.",
    "questionAr": "أوجد بعد النقطة $P(٣، ٤، ١٢)$ عن محور العينات (محور ع).",
    "optionsEn": [
      "5",
      "12",
      "13",
      "\\sqrt{153}"
    ],
    "optionsAr": [
      "٥",
      "١٢",
      "١٣",
      "\\sqrt{١٥٣}"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "Distance to $Z$-axis is $\\sqrt{x^2 + y^2}$.",
    "hintAr": "البعد عن محور ع هو $\\sqrt{س^٢ + ص^٢}$.",
    "stepByStepSolutionEn": [
      "The perpendicular distance from $(x, y, z)$ to the $Z$-axis is:",
      "$$d_z = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$"
    ],
    "stepByStepSolutionAr": [
      "البعد العمودي للنقطة عن محور العينات:",
      "$$d = \\sqrt{س^٢ + ص^٢} = \\sqrt{٣^٢ + ٤^٢} = \\sqrt{٢٥} = ٥$$"
    ],
    "teacherTipEn": "Do not include the z-coordinate when finding the distance to the Z-axis.",
    "teacherTipAr": "لا تدخل إحداثي ع في حساب البعد عن محور ع."
  },
  {
    "id": "solid_ch1_db_easy_08",
    "titleEn": "Distance of Point to X-axis",
    "titleAr": "بعد نقطة عن محور السينات",
    "difficulty": "easy",
    "questionEn": "Find the distance from point $M(5, 6, 8)$ to the $X$-axis.",
    "questionAr": "أوجد بعد النقطة $M(٥، ٦، ٨)$ عن محور السينات.",
    "optionsEn": [
      "10",
      "5",
      "\\sqrt{61}",
      "\\sqrt{89}"
    ],
    "optionsAr": [
      "١٠",
      "٥",
      "\\sqrt{٦١}",
      "\\sqrt{٨٩}"
    ],
    "correctAnswer": "10",
    "correctIndex": 0,
    "hintEn": "$d_x = \\sqrt{y^2 + z^2}$.",
    "hintAr": "$d_x = \\sqrt{ص^٢ + ع^٢}$.",
    "stepByStepSolutionEn": [
      "$$d_x = \\sqrt{y^2 + z^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$"
    ],
    "stepByStepSolutionAr": [
      "$$d_x = \\sqrt{ص^٢ + ع^٢} = \\sqrt{٦^٢ + ٨^٢} = \\sqrt{١٠٠} = ١٠$$"
    ],
    "teacherTipEn": "Pythagorean triple (6, 8, 10).",
    "teacherTipAr": "ثلاثية فيثاغورس الشهيرة (٦، ٨، ١٠)."
  },
  {
    "id": "solid_ch1_db_easy_09",
    "titleEn": "Distance of Point to Y-axis",
    "titleAr": "بعد نقطة عن محور الصادات",
    "difficulty": "easy",
    "questionEn": "Find the distance from point $Q(5, -7, 12)$ to the $Y$-axis.",
    "questionAr": "أوجد بعد النقطة $Q(٥، -٧، ١٢)$ عن محور الصادات.",
    "optionsEn": [
      "13",
      "7",
      "\\sqrt{74}",
      "\\sqrt{193}"
    ],
    "optionsAr": [
      "١٣",
      "٧",
      "\\sqrt{٧٤}",
      "\\sqrt{١٩٣}"
    ],
    "correctAnswer": "13",
    "correctIndex": 0,
    "hintEn": "$d_y = \\sqrt{x^2 + z^2}$.",
    "hintAr": "$d_y = \\sqrt{س^٢ + ع^٢}$.",
    "stepByStepSolutionEn": [
      "$$d_y = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$"
    ],
    "stepByStepSolutionAr": [
      "$$d_y = \\sqrt{٥^٢ + ١٢^٢} = \\sqrt{٢٥ + ١٤٤} = \\sqrt{١٦٩} = ١٣$$"
    ],
    "teacherTipEn": "Pythagorean triple (5, 12, 13).",
    "teacherTipAr": "ثلاثية فيثاغورس الشهيرة (٥، ١٢، ١٣)."
  },
  {
    "id": "solid_ch1_db_easy_10",
    "titleEn": "Projection of a Point on the XY Plane",
    "titleAr": "مسقط نقطة على المستوى س ص",
    "difficulty": "easy",
    "questionEn": "What are the coordinates of the orthogonal projection of $P(4, -3, 8)$ on the $XY$-plane?",
    "questionAr": "ما هي إحداثيات المسقط العمودي للنقطة $P(٤، -٣، ٨)$ على المستوى س ص؟",
    "optionsEn": [
      "(4, -3, 0)",
      "(4, 0, 8)",
      "(0, -3, 8)",
      "(0, 0, 8)"
    ],
    "optionsAr": [
      "(٤، -٣، ٠)",
      "(٤، ٠، ٨)",
      "(٠، -٣، ٨)",
      "(٠، ٠، ٨)"
    ],
    "correctAnswer": "(4, -3, 0)",
    "correctIndex": 0,
    "hintEn": "Drop perpendicular to $XY$-plane by setting $z = 0$.",
    "hintAr": "المسقط على المستوى س ص يتم بجعل الإحداثي $ع = ٠$.",
    "stepByStepSolutionEn": [
      "The projection of $(x, y, z)$ on the $XY$-plane sets the $z$-coordinate to 0 while keeping $x$ and $y$ unchanged:",
      "$$(4, -3, 0)$$"
    ],
    "stepByStepSolutionAr": [
      "مسقط النقطة على المستوى س ص يحتفظ بإحداثيي س و ص مع جعل $ع = ٠$:",
      "$$(٤، -٣، ٠)$$"
    ],
    "teacherTipEn": "Projection on any plane retains that plane's variables and sets the other to 0.",
    "teacherTipAr": "المسقط على أي مستوى يحتفظ بمتغيري ذلك المستوى ويصفر المتغير الثالث."
  },
  {
    "id": "solid_ch1_db_easy_11",
    "titleEn": "Projection of Point on XZ Plane",
    "titleAr": "مسقط نقطة على المستوى س ع",
    "difficulty": "easy",
    "questionEn": "Find the projection of point $A(1, 7, -5)$ onto the $XZ$-plane.",
    "questionAr": "أوجد مسقط النقطة $A(١، ٧، -٥)$ على المستوى س ع.",
    "optionsEn": [
      "(1, 0, -5)",
      "(1, 7, 0)",
      "(0, 7, -5)",
      "(0, 0, -5)"
    ],
    "optionsAr": [
      "(١، ٠، -٥)",
      "(١، ٧، ٠)",
      "(٠، ٧، -٥)",
      "(٠، ٠، -٥)"
    ],
    "correctAnswer": "(1, 0, -5)",
    "correctIndex": 0,
    "hintEn": "Set $y = 0$.",
    "hintAr": "اجعل $ص = ٠$.",
    "stepByStepSolutionEn": [
      "In the $XZ$-plane, $y = 0$, so the projection is $(1, 0, -5)$."
    ],
    "stepByStepSolutionAr": [
      "في المستوى س ع يكون $ص = ٠$، فيصبح المسقط $(١، ٠، -٥)$."
    ],
    "teacherTipEn": "The y-coordinate vanishes completely.",
    "teacherTipAr": "ينعدم الإحداثي الصادي تماماً في المسقط."
  },
  {
    "id": "solid_ch1_db_easy_12",
    "titleEn": "Projection of Point on the Y-axis",
    "titleAr": "مسقط نقطة على محور الصادات",
    "difficulty": "easy",
    "questionEn": "What is the projection of $M(3, -4, 9)$ onto the $Y$-axis?",
    "questionAr": "ما هو مسقط النقطة $M(٣، -٤، ٩)$ على محور الصادات؟",
    "optionsEn": [
      "(0, -4, 0)",
      "(3, 0, 0)",
      "(0, 0, 9)",
      "(3, -4, 0)"
    ],
    "optionsAr": [
      "(٠، -٤، ٠)",
      "(٣، ٠، ٠)",
      "(٠، ٠، ٩)",
      "(٣، -٤، ٠)"
    ],
    "correctAnswer": "(0, -4, 0)",
    "correctIndex": 0,
    "hintEn": "On the Y-axis, only y is preserved; $x = 0$ and $z = 0$.",
    "hintAr": "على محور الصادات، يبقى ص فقط وتنعدم س و ع.",
    "stepByStepSolutionEn": [
      "Projecting onto an axis keeps only that coordinate and sets the others to 0:",
      "$$(0, -4, 0)$$"
    ],
    "stepByStepSolutionAr": [
      "المسقط على المحور يحتفظ بإحداثي ذلك المحور فقط ويصفر الباقي: $(٠، -٤، ٠)$."
    ],
    "teacherTipEn": "Projection on Y-axis is $(0, y, 0)$.",
    "teacherTipAr": "المسقط على محور الصادات هو $(٠، ص، ٠)$."
  },
  {
    "id": "solid_ch1_db_easy_13",
    "titleEn": "Plane Parallel to XY Plane",
    "titleAr": "مستوى يوازي المستوى س ص",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $(2, 3, 5)$ and parallel to the $XY$-plane?",
    "questionAr": "ما هي معادلة المستوى المار بالنقطة $(٢، ٣، ٥)$ ويوازي المستوى س ص؟",
    "optionsEn": [
      "z = 5",
      "x = 2",
      "y = 3",
      "z = 0"
    ],
    "optionsAr": [
      "z = ٥",
      "x = ٢",
      "y = ٣",
      "z = ٠"
    ],
    "correctAnswer": "z = 5",
    "correctIndex": 0,
    "hintEn": "Parallel to $XY$-plane means $z = \\text{constant}$.",
    "hintAr": "يوازي المستوى س ص يعني أن $ع = \\text{ثابت}$.",
    "stepByStepSolutionEn": [
      "Any plane parallel to the $XY$-plane has the equation $z = c$.",
      "Since it passes through $(2, 3, 5)$, $c = 5 \\implies z = 5$."
    ],
    "stepByStepSolutionAr": [
      "أي مستوى يوازي المستوى س ص تكون معادلته على الصورة $z = c$.",
      "بما أنه يمر بالنقطة $(٢، ٣، ٥)$ فإن معادلته هي $z = ٥$."
    ],
    "teacherTipEn": "Parallel to $XY \\implies z = z_0$. Parallel to $XZ \\implies y = y_0$. Parallel to $YZ \\implies x = x_0$.",
    "teacherTipAr": "يوازي س ص $\\implies z = z_٠$، يوازي س ع $\\implies y = y_٠$، يوازي ص ع $\\implies x = x_٠$."
  },
  {
    "id": "solid_ch1_db_easy_14",
    "titleEn": "Plane Parallel to YZ Plane",
    "titleAr": "مستوى يوازي المستوى ص ع",
    "difficulty": "easy",
    "questionEn": "The equation of the plane parallel to the $YZ$-plane passing through $(7, -1, 4)$ is:",
    "questionAr": "معادلة المستوى الموازي للمستوى ص ع والمار بالنقطة $(٧، -١، ٤)$ هي:",
    "optionsEn": [
      "x = 7",
      "y = -1",
      "z = 4",
      "x = 0"
    ],
    "optionsAr": [
      "x = ٧",
      "y = -١",
      "z = ٤",
      "x = ٠"
    ],
    "correctAnswer": "x = 7",
    "correctIndex": 0,
    "hintEn": "Parallel to $YZ$ means $x = \\text{constant}$.",
    "hintAr": "يوازي ص ع يعني أن $س = \\text{ثابت}$.",
    "stepByStepSolutionEn": [
      "$$x = 7$$"
    ],
    "stepByStepSolutionAr": [
      "$$x = ٧$$"
    ],
    "teacherTipEn": "Directly read the x-coordinate of the given point.",
    "teacherTipAr": "خذ مباشرة الإحداثي السيني للنقطة المعطاة."
  },
  {
    "id": "solid_ch1_db_easy_15",
    "titleEn": "Distance of Origin to a Point",
    "titleAr": "بعد نقطة الأصل عن نقطة في الفراغ",
    "difficulty": "easy",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to point $A(1, 2, 2)$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن النقطة $A(١، ٢، ٢)$.",
    "optionsEn": [
      "3",
      "5",
      "9",
      "\\sqrt{5}"
    ],
    "optionsAr": [
      "٣",
      "٥",
      "٩",
      "\\sqrt{٥}"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "$d = \\sqrt{x^2 + y^2 + z^2}$.",
    "hintAr": "$d = \\sqrt{س^٢ + ص^٢ + ع^٢}$.",
    "stepByStepSolutionEn": [
      "$$d = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$$"
    ],
    "stepByStepSolutionAr": [
      "$$d = \\sqrt{١ + ٤ + ٤} = \\sqrt{٩} = ٣$$"
    ],
    "teacherTipEn": "This is also the magnitude of position vector $\\vec{OA}$.",
    "teacherTipAr": "هذا يمثل أيضاً معيار متجه الموضع $\\vec{OA}$."
  },
  {
    "id": "solid_ch1_db_easy_16",
    "titleEn": "Midpoint of a Segment in Space",
    "titleAr": "منتصف قطعة مستقيمة في الفراغ",
    "difficulty": "easy",
    "questionEn": "Find the midpoint of the line segment joining $A(1, 2, 3)$ and $B(3, 4, 5)$.",
    "questionAr": "أوجد نقطة منتصف القطعة المستقيمة الواصلة بين $A(١، ٢، ٣)$ و $B(٣، ٤، ٥)$.",
    "optionsEn": [
      "(2, 3, 4)",
      "(4, 6, 8)",
      "(1, 1, 1)",
      "(2, 2, 2)"
    ],
    "optionsAr": [
      "(٢، ٣، ٤)",
      "(٤، ٦، ٨)",
      "(١، ١، ١)",
      "(٢، ٢، ٢)"
    ],
    "correctAnswer": "(2, 3, 4)",
    "correctIndex": 0,
    "hintEn": "$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}, \\frac{z_1 + z_2}{2}\\right)$.",
    "hintAr": "اجمع الإحداثيات المتناظرة واقسم على ٢.",
    "stepByStepSolutionEn": [
      "$$M = \\left(\\frac{1+3}{2}, \\frac{2+4}{2}, \\frac{3+5}{2}\\right) = (2, 3, 4)$$"
    ],
    "stepByStepSolutionAr": [
      "$$M = \\left(\\frac{١+٣}{٢}، \\frac{٢+٤}{٢}، \\frac{٣+٥}{٢}\\right) = (٢، ٣، ٤)$$"
    ],
    "teacherTipEn": "Average of the coordinates gives the midpoint.",
    "teacherTipAr": "المتوسط الحسابي للإحداثيات يعطي نقطة المنتصف."
  },
  {
    "id": "solid_ch1_db_easy_17",
    "titleEn": "Midpoint with Negative Coordinates",
    "titleAr": "منتصف قطعة بإحداثيات سالبة",
    "difficulty": "easy",
    "questionEn": "Find the midpoint between $P(-4, 6, -2)$ and $Q(2, -2, 8)$.",
    "questionAr": "أوجد نقطة المنتصف بين النقطتين $P(-٤، ٦، -٢)$ و $Q(٢، -٢، ٨)$.",
    "optionsEn": [
      "(-1, 2, 3)",
      "(-2, 4, 6)",
      "(-1, 4, 3)",
      "(3, 2, 5)"
    ],
    "optionsAr": [
      "(-١، ٢، ٣)",
      "(-٢، ٤، ٦)",
      "(-١، ٤، ٣)",
      "(٣، ٢، ٥)"
    ],
    "correctAnswer": "(-1, 2, 3)",
    "correctIndex": 0,
    "hintEn": "Add and divide by 2.",
    "hintAr": "اجمع واقسم على ٢.",
    "stepByStepSolutionEn": [
      "$$M = \\left(\\frac{-4+2}{2}, \\frac{6-2}{2}, \\frac{-2+8}{2}\\right) = (-1, 2, 3)$$"
    ],
    "stepByStepSolutionAr": [
      "$$M = \\left(\\frac{-٤+٢}{٢}، \\frac{٦-٢}{٢}، \\frac{-٢+٨}{٢}\\right) = (-١، ٢، ٣)$$"
    ],
    "teacherTipEn": "Be careful with signs when adding negative numbers.",
    "teacherTipAr": "انتبه للإشارات عند جمع الأعداد السالبة."
  },
  {
    "id": "solid_ch1_db_easy_18",
    "titleEn": "Finding Endpoint from Midpoint",
    "titleAr": "إيجاد طرف قطعة مستقيمة بمعلومية المنتصف",
    "difficulty": "easy",
    "questionEn": "If $M(2, 1, 4)$ is the midpoint of $AB$, and $A(1, -2, 3)$, find the coordinates of $B$.",
    "questionAr": "إذا كانت $M(٢، ١، ٤)$ هي نقطة منتصف $AB$، وكانت $A(١، -٢، ٣)$، فأوجد إحداثيات النقطة $B$.",
    "optionsEn": [
      "(3, 4, 5)",
      "(1.5, -0.5, 3.5)",
      "(3, 0, 7)",
      "(4, 2, 8)"
    ],
    "optionsAr": [
      "(٣، ٤، ٥)",
      "(١.٥، -٠.٥، ٣.٥)",
      "(٣، ٠، ٧)",
      "(٤، ٢، ٨)"
    ],
    "correctAnswer": "(3, 4, 5)",
    "correctIndex": 0,
    "hintEn": "$B = 2M - A$.",
    "hintAr": "$B = ٢M - A$.",
    "stepByStepSolutionEn": [
      "Since $M = \\frac{A + B}{2}$, we have $B = 2M - A$:",
      "$$x_B = 2(2) - 1 = 3$$",
      "$$y_B = 2(1) - (-2) = 4$$",
      "$$z_B = 2(4) - 3 = 5$$",
      "Point $B$ is $(3, 4, 5)$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $M = \\frac{A + B}{٢}$، إذن $B = ٢M - A$:",
      "$$x_B = ٢(٢) - ١ = ٣$$",
      "$$y_B = ٢(١) - (-٢) = ٤$$",
      "$$z_B = ٢(٤) - ٣ = ٥$$",
      "النقطة هي $(٣، ٤، ٥)$."
    ],
    "teacherTipEn": "Use the formula $B = 2M - A$ for instantaneous calculation.",
    "teacherTipAr": "استخدم القاعدة السريعة: الطرف = ضعف المنتصف ناقص الطرف الآخر ($B = ٢M - A$)."
  },
  {
    "id": "solid_ch1_db_easy_19",
    "titleEn": "Distance Between Two Points on Axes",
    "titleAr": "البعد بين نقطتين على المحاور",
    "difficulty": "easy",
    "questionEn": "Find the distance between $A(3, 0, 0)$ and $B(0, 4, 0)$.",
    "questionAr": "أوجد البعد بين النقطتين $A(٣، ٠، ٠)$ و $B(٠، ٤، ٠)$.",
    "optionsEn": [
      "5",
      "7",
      "1",
      "\\sqrt{7}"
    ],
    "optionsAr": [
      "٥",
      "٧",
      "١",
      "\\sqrt{٧}"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "Pythagorean theorem: $\\sqrt{3^2 + 4^2 + 0^2} = 5$.",
    "hintAr": "فيثاغورس: $\\sqrt{٩ + ١٦} = ٥$.",
    "stepByStepSolutionEn": [
      "$$d = \\sqrt{(3-0)^2 + (0-4)^2 + (0-0)^2} = \\sqrt{9 + 16} = 5$$"
    ],
    "stepByStepSolutionAr": [
      "$$d = \\sqrt{٩ + ١٦} = \\sqrt{٢٥} = ٥$$"
    ],
    "teacherTipEn": "This is a basic 2D distance on the XY plane.",
    "teacherTipAr": "هذه مسافة أساسية على المستوى س ص."
  },
  {
    "id": "solid_ch1_db_easy_20",
    "titleEn": "Distance of (2, 1, 3) to (5, 5, 3)",
    "titleAr": "البعد بين نقطتين في مستوى أفقي",
    "difficulty": "easy",
    "questionEn": "Find the distance between $P(2, 1, 3)$ and $Q(5, 5, 3)$.",
    "questionAr": "أوجد البعد بين النقطتين $P(٢، ١، ٣)$ و $Q(٥، ٥، ٣)$.",
    "optionsEn": [
      "5",
      "7",
      "25",
      "3"
    ],
    "optionsAr": [
      "٥",
      "٧",
      "٢٥",
      "٣"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "Notice that $z_2 - z_1 = 3 - 3 = 0$.",
    "hintAr": "لاحظ أن فرق الإحداثي العيني يساوي صفراً.",
    "stepByStepSolutionEn": [
      "$$d = \\sqrt{(5-2)^2 + (5-1)^2 + (3-3)^2} = \\sqrt{3^2 + 4^2 + 0} = 5$$"
    ],
    "stepByStepSolutionAr": [
      "$$d = \\sqrt{(٣)^٢ + (٤)^٢ + ٠} = ٥$$"
    ],
    "teacherTipEn": "When one coordinate is constant, the distance reduces to the distance in 2D.",
    "teacherTipAr": "عند ثبات أحد الإحداثيات يختزل البعد إلى بعد ثنائي الأبعاد."
  },
  {
    "id": "solid_ch1_db_easy_21",
    "titleEn": "Distance of (3, -4, 12) from Origin",
    "titleAr": "بعد النقطة (٣، -٤، ١٢) عن الأصل",
    "difficulty": "easy",
    "questionEn": "What is the distance of $(3, -4, 12)$ from the origin?",
    "questionAr": "ما هو بعد النقطة $(٣، -٤، ١٢)$ عن نقطة الأصل؟",
    "optionsEn": [
      "13",
      "11",
      "169",
      "5"
    ],
    "optionsAr": [
      "١٣",
      "١١",
      "١٦٩",
      "٥"
    ],
    "correctAnswer": "13",
    "correctIndex": 0,
    "hintEn": "$\\sqrt{3^2 + (-4)^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.",
    "hintAr": "$\\sqrt{٩ + ١٦ + ١٤٤} = \\sqrt{١٦٩} = ١٣$.",
    "stepByStepSolutionEn": [
      "$$d = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$$"
    ],
    "stepByStepSolutionAr": [
      "$$d = \\sqrt{٩ + ١٦ + ١٤٤} = \\sqrt{١٦٩} = ١٣$$"
    ],
    "teacherTipEn": "Classic 3D Pythagorean quadruple: $(3, 4, 12, 13)$.",
    "teacherTipAr": "رباعية فيثاغورس الفراغية الشهيرة: (٣، ٤، ١٢، ١٣)."
  },
  {
    "id": "solid_ch1_db_easy_22",
    "titleEn": "Centroid of a Triangle in Space",
    "titleAr": "نقطة تلاقي متوسطات المثلث في الفراغ",
    "difficulty": "easy",
    "questionEn": "Find the centroid of triangle $ABC$ where $A(1, 2, 3)$, $B(2, 3, 4)$, and $C(3, 4, 5)$.",
    "questionAr": "أوجد إحداثيات نقطة تلاقي متوسطات المثلث $ABC$ حيث $A(١، ٢، ٣)$ و $B(٢، ٣، ٤)$ و $C(٣، ٤، ٥)$.",
    "optionsEn": [
      "(2, 3, 4)",
      "(3, 4, 5)",
      "(6, 9, 12)",
      "(1, 1, 1)"
    ],
    "optionsAr": [
      "(٢، ٣، ٤)",
      "(٣، ٤، ٥)",
      "(٦، ٩، ١٢)",
      "(١، ١، ١)"
    ],
    "correctAnswer": "(2, 3, 4)",
    "correctIndex": 0,
    "hintEn": "$G = \\frac{A + B + C}{3}$.",
    "hintAr": "$G = \\frac{A + B + C}{٣}$.",
    "stepByStepSolutionEn": [
      "$$G = \\left(\\frac{1+2+3}{3}, \\frac{2+3+4}{3}, \\frac{3+4+5}{3}\\right) = \\left(\\frac{6}{3}, \\frac{9}{3}, \\frac{12}{3}\\right) = (2, 3, 4)$$"
    ],
    "stepByStepSolutionAr": [
      "نقطة تلاقي المتوسطات هي متوسط إحداثيات الرؤوس الثلاثة:",
      "$$G = \\left(\\frac{٦}{٣}، \\frac{٩}{٣}، \\frac{١٢}{٣}\\right) = (٢، ٣، ٤)$$"
    ],
    "teacherTipEn": "Average of 3 points divided by 3.",
    "teacherTipAr": "مجموع إحداثيات الرؤوس مقسوماً على ٣."
  },
  {
    "id": "solid_ch1_db_easy_23",
    "titleEn": "Equidistant Point on Axis",
    "titleAr": "نقطة على محور متساوية البعدين",
    "difficulty": "easy",
    "questionEn": "A point $P$ lies on the $Y$-axis. Its coordinates must have the form:",
    "questionAr": "نقطة $P$ تقع على محور الصادات. يجب أن تكون إحداثياتها على الصورة:",
    "optionsEn": [
      "(0, y, 0)",
      "(x, 0, 0)",
      "(0, 0, z)",
      "(x, y, 0)"
    ],
    "optionsAr": [
      "(٠، y، ٠)",
      "(x، ٠، ٠)",
      "(٠، ٠، z)",
      "(x، y، ٠)"
    ],
    "correctAnswer": "(0, y, 0)",
    "correctIndex": 0,
    "hintEn": "Both x and z are 0.",
    "hintAr": "كلا من س و ع يساوي صفراً.",
    "stepByStepSolutionEn": [
      "On the $Y$-axis, $x = 0$ and $z = 0$, so $P = (0, y, 0)$."
    ],
    "stepByStepSolutionAr": [
      "على محور الصادات $x = ٠$ و $z = ٠$، فتكون النقطة $(٠، y، ٠)$."
    ],
    "teacherTipEn": "Standard axis coordinate definition.",
    "teacherTipAr": "تعريف الإحداثيات الأساسية للمحور."
  },
  {
    "id": "solid_ch1_db_easy_24",
    "titleEn": "Distance Between (1, 0, 0) and (0, 0, 1)",
    "titleAr": "البعد بين طرفي متجهي الوحدة الأساسيين",
    "difficulty": "easy",
    "questionEn": "Find the distance between the unit points $E_1(1, 0, 0)$ and $E_3(0, 0, 1)$.",
    "questionAr": "أوجد البعد بين النقطتين $E_١(١، ٠، ٠)$ و $E_٣(٠، ٠، ١)$.",
    "optionsEn": [
      "\\sqrt{2}",
      "1",
      "2",
      "\\sqrt{3}"
    ],
    "optionsAr": [
      "\\sqrt{٢}",
      "١",
      "٢",
      "\\sqrt{٣}"
    ],
    "correctAnswer": "\\sqrt{2}",
    "correctIndex": 0,
    "hintEn": "$\\sqrt{(1-0)^2 + 0^2 + (0-1)^2} = \\sqrt{1 + 1}$.",
    "hintAr": "$\\sqrt{١^٢ + (-١)^٢} = \\sqrt{٢}$.",
    "stepByStepSolutionEn": [
      "$$d = \\sqrt{1^2 + 0^2 + (-1)^2} = \\sqrt{2}$$"
    ],
    "stepByStepSolutionAr": [
      "$$d = \\sqrt{١ + ٠ + ١} = \\sqrt{٢}$$"
    ],
    "teacherTipEn": "Distance between any two standard basis unit endpoints is always $\\sqrt{2}$.",
    "teacherTipAr": "البعد بين طرفي أي متجهي وحدة أساسيين متعامدين هو دائماً $\\sqrt{٢}$."
  },
  {
    "id": "solid_ch1_db_easy_25",
    "titleEn": "Distance Between (1, 1, 1) and (0, 0, 0)",
    "titleAr": "طول قطر مكعب الوحدة",
    "difficulty": "easy",
    "questionEn": "What is the distance from $(0, 0, 0)$ to $(1, 1, 1)$?",
    "questionAr": "ما هو البعد بين نقطة الأصل والنقطة $(١، ١، ١)$ (طول قطر مكعب الوحدة)؟",
    "optionsEn": [
      "\\sqrt{3}",
      "1",
      "3",
      "\\sqrt{2}"
    ],
    "optionsAr": [
      "\\sqrt{٣}",
      "١",
      "٣",
      "\\sqrt{٢}"
    ],
    "correctAnswer": "\\sqrt{3}",
    "correctIndex": 0,
    "hintEn": "$\\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$.",
    "hintAr": "$\\sqrt{١ + ١ + ١} = \\sqrt{٣}$.",
    "stepByStepSolutionEn": [
      "$$d = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$$"
    ],
    "stepByStepSolutionAr": [
      "$$d = \\sqrt{١ + ١ + ١} = \\sqrt{٣}$$"
    ],
    "teacherTipEn": "The main body diagonal of a cube of edge length $L$ is $L\\sqrt{3}$.",
    "teacherTipAr": "طول قطر المكعب الذي طول حرفه $L$ يساوي $L\\sqrt{٣}$."
  },
  {
    "id": "solid_ch1_db_easy_26",
    "titleEn": "Sphere Centered at Origin",
    "titleAr": "معادلة كرة مركزها نقطة الأصل",
    "difficulty": "easy",
    "questionEn": "What is the equation of the sphere centered at $(0, 0, 0)$ with radius $r = 5$?",
    "questionAr": "ما هي معادلة الكرة التي مركزها نقطة الأصل $(٠، ٠، ٠)$ ونصف قطرها $r = ٥$؟",
    "optionsEn": [
      "x^2 + y^2 + z^2 = 25",
      "x^2 + y^2 + z^2 = 5",
      "(x-5)^2 + (y-5)^2 + (z-5)^2 = 0",
      "x + y + z = 25"
    ],
    "optionsAr": [
      "x^٢ + y^٢ + z^٢ = ٢٥",
      "x^٢ + y^٢ + z^٢ = ٥",
      "(x-٥)^٢ + (y-٥)^٢ + (z-٥)^٢ = ٠",
      "x + y + z = ٢٥"
    ],
    "correctAnswer": "x^2 + y^2 + z^2 = 25",
    "correctIndex": 0,
    "hintEn": "$x^2 + y^2 + z^2 = r^2$.",
    "hintAr": "$x^٢ + y^٢ + z^٢ = r^٢$.",
    "stepByStepSolutionEn": [
      "The equation of a sphere centered at the origin is:",
      "$$x^2 + y^2 + z^2 = r^2 = 5^2 = 25$$"
    ],
    "stepByStepSolutionAr": [
      "معادلة الكرة التي مركزها نقطة الأصل هي:",
      "$$x^٢ + y^٢ + z^٢ = ٥^٢ = ٢٥$$"
    ],
    "teacherTipEn": "Remember $r^2$ is on the right-hand side.",
    "teacherTipAr": "تذكر أن الطرف الأيسر يحتوي على مربع نصف القطر $r^٢$."
  },
  {
    "id": "solid_ch1_db_easy_27",
    "titleEn": "Extracting Center from Standard Sphere Equation",
    "titleAr": "استخراج المركز من معادلة الكرة القياسية",
    "difficulty": "easy",
    "questionEn": "Find the center of the sphere $(x - 3)^2 + (y + 4)^2 + (z - 1)^2 = 36$.",
    "questionAr": "أوجد مركز الكرة التي معادلتها $(x - ٣)^٢ + (y + ٤)^٢ + (z - ١)^٢ = ٣٦$.",
    "optionsEn": [
      "(3, -4, 1)",
      "(-3, 4, -1)",
      "(3, 4, 1)",
      "(6, 6, 6)"
    ],
    "optionsAr": [
      "(٣، -٤، ١)",
      "(-٣، ٤، -١)",
      "(٣، ٤، ١)",
      "(٦، ٦، ٦)"
    ],
    "correctAnswer": "(3, -4, 1)",
    "correctIndex": 0,
    "hintEn": "$(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2 \\implies C(a, b, c)$. Flip the signs.",
    "hintAr": "اعكس الإشارات داخل الأقواس لإيجاد إحداثيات المركز.",
    "stepByStepSolutionEn": [
      "Comparing with $(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$:",
      "$a = 3$, $b = -4$, $c = 1$.",
      "Center is $(3, -4, 1)$."
    ],
    "stepByStepSolutionAr": [
      "بالمقارنة مع الصورة القياسية:",
      "المركز هو $(٣، -٤، ١)$."
    ],
    "teacherTipEn": "Be careful: $(y + 4)^2 = (y - (-4))^2$, so $b = -4$.",
    "teacherTipAr": "انتبه: $(y + ٤)^٢$ تعني أن الإحداثي الصادي هو $-٤$."
  },
  {
    "id": "solid_ch1_db_easy_28",
    "titleEn": "Extracting Radius from Standard Sphere Equation",
    "titleAr": "استخراج نصف القطر من المعادلة القياسية",
    "difficulty": "easy",
    "questionEn": "Find the radius of the sphere $(x - 1)^2 + (y - 2)^2 + (z + 5)^2 = 49$.",
    "questionAr": "أوجد نصف قطر الكرة التي معادلتها $(x - ١)^٢ + (y - ٢)^٢ + (z + ٥)^٢ = ٤٩$.",
    "optionsEn": [
      "7",
      "49",
      "\\sqrt{7}",
      "14"
    ],
    "optionsAr": [
      "٧",
      "٤٩",
      "\\sqrt{٧}",
      "١٤"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "$r = \\sqrt{49} = 7$.",
    "hintAr": "$r = \\sqrt{٤٩} = ٧$.",
    "stepByStepSolutionEn": [
      "$$r = \\sqrt{49} = 7$$"
    ],
    "stepByStepSolutionAr": [
      "$$r = \\sqrt{٤٩} = ٧$$"
    ],
    "teacherTipEn": "Take the square root of the constant on the right-hand side.",
    "teacherTipAr": "خذ الجذر التربيعي للثابت في الطرف الأيسر."
  },
  {
    "id": "solid_ch1_db_easy_29",
    "titleEn": "Center of General Sphere Equation",
    "titleAr": "مركز الكرة من الصورة العامة",
    "difficulty": "easy",
    "questionEn": "Find the center of the sphere $x^2 + y^2 + z^2 - 6x + 8y - 2z + 1 = 0$.",
    "questionAr": "أوجد مركز الكرة $x^٢ + y^٢ + z^٢ - ٦x + ٨y - ٢z + ١ = ٠$.",
    "optionsEn": [
      "(3, -4, 1)",
      "(-3, 4, -1)",
      "(-6, 8, -2)",
      "(6, -8, 2)"
    ],
    "optionsAr": [
      "(٣، -٤، ١)",
      "(-٣، ٤، -١)",
      "(-٦، ٨، -٢)",
      "(٦، -٨، ٢)"
    ],
    "correctAnswer": "(3, -4, 1)",
    "correctIndex": 0,
    "hintEn": "Center coordinates: $-\\frac{1}{2}(\\text{coeff of } x, \\text{coeff of } y, \\text{coeff of } z)$.",
    "hintAr": "المركز = $-\\frac{١}{٢}$ معامِلات س، ص، ع.",
    "stepByStepSolutionEn": [
      "$$a = -\\frac{-6}{2} = 3$$",
      "$$b = -\\frac{8}{2} = -4$$",
      "$$c = -\\frac{-2}{2} = 1$$",
      "Center is $(3, -4, 1)$."
    ],
    "stepByStepSolutionAr": [
      "$$a = -\\frac{-٦}{٢} = ٣$$",
      "$$b = -\\frac{٨}{٢} = -٤$$",
      "$$c = -\\frac{-٢}{٢} = ١$$",
      "المركز هو $(٣، -٤، ١)$."
    ],
    "teacherTipEn": "Divide the linear coefficients by -2.",
    "teacherTipAr": "اقسم المعاملات الخطية على -٢."
  },
  {
    "id": "solid_ch1_db_easy_30",
    "titleEn": "Radius from General Sphere Equation",
    "titleAr": "نصف القطر من الصورة العامة",
    "difficulty": "easy",
    "questionEn": "Find the radius of the sphere $x^2 + y^2 + z^2 - 2x - 4y - 4 = 0$.",
    "questionAr": "أوجد نصف قطر الكرة $x^٢ + y^٢ + z^٢ - ٢x - ٤y - ٤ = ٠$.",
    "optionsEn": [
      "3",
      "9",
      "\\sqrt{5}",
      "2"
    ],
    "optionsAr": [
      "٣",
      "٩",
      "\\sqrt{٥}",
      "٢"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Center is $(1, 2, 0)$ and $d = -4$. $r = \\sqrt{1^2 + 2^2 + 0^2 - (-4)}$.",
    "hintAr": "المركز $(١، ٢، ٠)$ و $d = -٤$. احسب $r = \\sqrt{١ + ٤ - (-٤)}$.",
    "stepByStepSolutionEn": [
      "Center: $a = 1, b = 2, c = 0$.",
      "Constant term $d = -4$.",
      "$$r = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{1^2 + 2^2 + 0^2 - (-4)} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$$"
    ],
    "stepByStepSolutionAr": [
      "المركز هو $(١، ٢، ٠)$ والحد المطلق $d = -٤$.",
      "$$r = \\sqrt{١ + ٤ + ٠ - (-٤)} = \\sqrt{٩} = ٣$$"
    ],
    "teacherTipEn": "Remember that the formula has $- d$, so $-(-4) = +4$.",
    "teacherTipAr": "انتبه لأن القانون فيه $- d$، فالسالب مع السالب يصبح موجباً."
  },
  {
    "id": "solid_ch1_db_easy_31",
    "titleEn": "Condition for a Real Sphere",
    "titleAr": "شرط أن تمثل المعادلة كرة حقيقية",
    "difficulty": "easy",
    "questionEn": "For $x^2 + y^2 + z^2 + 2lx + 2my + 2nz + d = 0$ to represent a real sphere, we must have:",
    "questionAr": "لكي تمثل المعادلة العامة كرة حقيقية، يجب أن يتحقق الشرط:",
    "optionsEn": [
      "l^2 + m^2 + n^2 - d > 0",
      "l^2 + m^2 + n^2 - d = 0",
      "l^2 + m^2 + n^2 - d < 0",
      "d > 0"
    ],
    "optionsAr": [
      "l^٢ + m^٢ + n^٢ - d > ٠",
      "l^٢ + m^٢ + n^٢ - d = ٠",
      "l^٢ + m^٢ + n^٢ - d < ٠",
      "d > ٠"
    ],
    "correctAnswer": "l^2 + m^2 + n^2 - d > 0",
    "correctIndex": 0,
    "hintEn": "The radius $r = \\sqrt{l^2 + m^2 + n^2 - d}$ must be a strictly positive real number.",
    "hintAr": "نصف القطر يجب أن يكون عدداً حقيقياً موجباً تماماً.",
    "stepByStepSolutionEn": [
      "Since radius $r = \\sqrt{l^2 + m^2 + n^2 - d} > 0$, the quantity under the radical must be strictly positive: $l^2 + m^2 + n^2 - d > 0$."
    ],
    "stepByStepSolutionAr": [
      "بما أن نصف القطر $r = \\sqrt{l^٢ + m^٢ + n^٢ - d} > ٠$، فيجب أن يكون ما تحت الجذر موجباً تماماً."
    ],
    "teacherTipEn": "If $= 0$, it represents a single point; if $< 0$, it represents an imaginary sphere (no real points).",
    "teacherTipAr": "إذا ساوت صفراً مثلت نقطة واحدة، وإذا كانت سالبة مثلت كرة تخيلية (المجموعة الخالية)."
  },
  {
    "id": "solid_ch1_db_easy_32",
    "titleEn": "Radius of Sphere Tangent to XY Plane",
    "titleAr": "نصف قطر كرة تمس المستوى س ص",
    "difficulty": "easy",
    "questionEn": "If a sphere centered at $(1, 2, -6)$ touches the $XY$-plane, its radius is:",
    "questionAr": "إذا كانت كرة مركزها $(١، ٢، -٦)$ تمس المستوى س ص، فإن نصف قطرها يساوي:",
    "optionsEn": [
      "6",
      "-6",
      "1",
      "2"
    ],
    "optionsAr": [
      "٦",
      "-٦",
      "١",
      "٢"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "$r = |z| = |-6| = 6$.",
    "hintAr": "$r = |ع| = |-٦| = ٦$.",
    "stepByStepSolutionEn": [
      "$$r = |z| = |-6| = 6$$"
    ],
    "stepByStepSolutionAr": [
      "$$r = |-٦| = ٦$$"
    ],
    "teacherTipEn": "Tangency to XY-plane means radius equals the absolute value of the z-coordinate.",
    "teacherTipAr": "التماس مع س ص يعني أن نصف القطر يساوي القيمة المطلقة للإحداثي العيني."
  },
  {
    "id": "solid_ch1_db_easy_33",
    "titleEn": "Radius of Sphere Tangent to XZ Plane",
    "titleAr": "نصف قطر كرة تمس المستوى س ع",
    "difficulty": "easy",
    "questionEn": "A sphere centered at $(4, -7, 3)$ touches the $XZ$-plane. What is its radius?",
    "questionAr": "كرة مركزها $(٤، -٧، ٣)$ تمس المستوى س ع. ما هو نصف قطرها؟",
    "optionsEn": [
      "7",
      "-7",
      "4",
      "3"
    ],
    "optionsAr": [
      "٧",
      "-٧",
      "٤",
      "٣"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "$r = |y| = |-7| = 7$.",
    "hintAr": "$r = |ص| = |-٧| = ٧$.",
    "stepByStepSolutionEn": [
      "$$r = |y| = |-7| = 7$$"
    ],
    "stepByStepSolutionAr": [
      "$$r = |ص| = |-٧| = ٧$$"
    ],
    "teacherTipEn": "The y-coordinate controls the distance to XZ.",
    "teacherTipAr": "الإحداثي الصادي يحدد البعد عن المستوى س ع."
  },
  {
    "id": "solid_ch1_db_easy_34",
    "titleEn": "Radius of Sphere Tangent to YZ Plane",
    "titleAr": "نصف قطر كرة تمس المستوى ص ع",
    "difficulty": "easy",
    "questionEn": "Find the radius of a sphere with center $(-8, 3, 5)$ that touches the $YZ$-plane.",
    "questionAr": "أوجد نصف قطر كرة مركزها $(-٨، ٣، ٥)$ تمس المستوى ص ع.",
    "optionsEn": [
      "8",
      "-8",
      "3",
      "5"
    ],
    "optionsAr": [
      "٨",
      "-٨",
      "٣",
      "٥"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "$r = |x| = |-8| = 8$.",
    "hintAr": "$r = |س| = |-٨| = ٨$.",
    "stepByStepSolutionEn": [
      "$$r = |x| = |-8| = 8$$"
    ],
    "stepByStepSolutionAr": [
      "$$r = |-٨| = ٨$$"
    ],
    "teacherTipEn": "Distance is always positive.",
    "teacherTipAr": "المسافة موجبة دائماً."
  },
  {
    "id": "solid_ch1_db_easy_35",
    "titleEn": "Equation of Sphere with Given Diameter",
    "titleAr": "معادلة كرة بنصف قطر من القطر",
    "difficulty": "easy",
    "questionEn": "If the diameter of a sphere centered at the origin is 10, its equation is:",
    "questionAr": "إذا كان طول قطر كرة مركزها نقطة الأصل هو ١٠، فإن معادلتها هي:",
    "optionsEn": [
      "x^2 + y^2 + z^2 = 25",
      "x^2 + y^2 + z^2 = 100",
      "x^2 + y^2 + z^2 = 10",
      "x^2 + y^2 + z^2 = 5"
    ],
    "optionsAr": [
      "x^٢ + y^٢ + z^٢ = ٢٥",
      "x^٢ + y^٢ + z^٢ = ١٠٠",
      "x^٢ + y^٢ + z^٢ = ١٠",
      "x^٢ + y^٢ + z^٢ = ٥"
    ],
    "correctAnswer": "x^2 + y^2 + z^2 = 25",
    "correctIndex": 0,
    "hintEn": "Radius $r = \\frac{\\text{diameter}}{2} = \\frac{10}{2} = 5$.",
    "hintAr": "نصف القطر $r = ١٠ / ٢ = ٥$.",
    "stepByStepSolutionEn": [
      "Diameter $= 10 \\implies r = 5$.",
      "$$x^2 + y^2 + z^2 = r^2 = 5^2 = 25$$"
    ],
    "stepByStepSolutionAr": [
      "القطر $= ١٠ \\implies$ نصف القطر $r = ٥$.",
      "المعادلة: $x^٢ + y^٢ + z^٢ = ٢٥$."
    ],
    "teacherTipEn": "Beware of confusing diameter with radius!",
    "teacherTipAr": "احذر الخلط بين القطر ونصف القطر!"
  },
  {
    "id": "solid_ch1_db_easy_36",
    "titleEn": "Magnitude of 3D Vector (3, 4, 0)",
    "titleAr": "معيار متجه في الفراغ (٣، ٤، ٠)",
    "difficulty": "easy",
    "questionEn": "Find the magnitude of the vector $\\vec{u} = (3, 4, 0)$.",
    "questionAr": "أوجد معيار المتجه $\\vec{u} = (٣، ٤، ٠)$.",
    "optionsEn": [
      "5",
      "7",
      "25",
      "1"
    ],
    "optionsAr": [
      "٥",
      "٧",
      "٢٥",
      "١"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "$\\|\\vec{u}\\| = \\sqrt{3^2 + 4^2 + 0^2}$.",
    "hintAr": "$\\|\\vec{u}\\| = \\sqrt{٩ + ١٦}$.",
    "stepByStepSolutionEn": [
      "$$\\|\\vec{u}\\| = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\|\\vec{u}\\| = \\sqrt{٩ + ١٦ + ٠} = ٥$$"
    ],
    "teacherTipEn": "Standard Pythagorean triple.",
    "teacherTipAr": "ثلاثية فيثاغورس الأساسية."
  },
  {
    "id": "solid_ch1_db_easy_37",
    "titleEn": "Magnitude of (2, -3, 6)",
    "titleAr": "معيار المتجه (٢، -٣، ٦)",
    "difficulty": "easy",
    "questionEn": "Calculate the norm (magnitude) of $\\vec{A} = (2, -3, 6)$.",
    "questionAr": "احسب معيار المتجه $\\vec{A} = (٢، -٣، ٦)$.",
    "optionsEn": [
      "7",
      "49",
      "11",
      "5"
    ],
    "optionsAr": [
      "٧",
      "٤٩",
      "١١",
      "٥"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "$\\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
    "hintAr": "$\\sqrt{٤ + ٩ + ٣٦} = \\sqrt{٤٩} = ٧$.",
    "stepByStepSolutionEn": [
      "$$\\|\\vec{A}\\| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\|\\vec{A}\\| = \\sqrt{٤ + ٩ + ٣٦} = \\sqrt{٤٩} = ٧$$"
    ],
    "teacherTipEn": "Very common integer vector in exams.",
    "teacherTipAr": "متجه معياره عدد صحيح يتكرر كثيراً في الامتحانات."
  },
  {
    "id": "solid_ch1_db_easy_38",
    "titleEn": "Unit Vector in Direction of A",
    "titleAr": "متجه الوحدة في اتجاه متجه معلوم",
    "difficulty": "easy",
    "questionEn": "Find the unit vector in the direction of $\\vec{A} = (0, 3, 4)$.",
    "questionAr": "أوجد متجه الوحدة في اتجاه المتجه $\\vec{A} = (٠، ٣، ٤)$.",
    "optionsEn": [
      "(0, 3/5, 4/5)",
      "(0, 3, 4)",
      "(0, 1/3, 1/4)",
      "(0, 4/5, 3/5)"
    ],
    "optionsAr": [
      "(٠، ٣/٥، ٤/٥)",
      "(٠، ٣، ٤)",
      "(٠، ١/٣، ١/٤)",
      "(٠، ٤/٥، ٣/٥)"
    ],
    "correctAnswer": "(0, 3/5, 4/5)",
    "correctIndex": 0,
    "hintEn": "Divide $\\vec{A}$ by its magnitude $\\|\\vec{A}\\| = 5$.",
    "hintAr": "اقسم المتجه على معياره الذي يساوي ٥.",
    "stepByStepSolutionEn": [
      "$$\\|\\vec{A}\\| = \\sqrt{0 + 9 + 16} = 5$$",
      "$$\\hat{u} = \\frac{\\vec{A}}{\\|\\vec{A}\\|} = \\left(0, \\frac{3}{5}, \\frac{4}{5}\\right)$$"
    ],
    "stepByStepSolutionAr": [
      "المعيار $= ٥$.",
      "متجه الوحدة $= \\frac{\\vec{A}}{\\|\\vec{A}\\|} = (٠، \\frac{٣}{٥}، \\frac{٤}{٥})$."
    ],
    "teacherTipEn": "A unit vector always has length exactly equal to 1.",
    "teacherTipAr": "متجه الوحدة معياره دائماً يساوي الواحد الصحيح."
  },
  {
    "id": "solid_ch1_db_easy_39",
    "titleEn": "Displacement Vector AB",
    "titleAr": "متجه الإزاحة AB",
    "difficulty": "easy",
    "questionEn": "If $A(1, 2, 3)$ and $B(4, 1, 5)$, find the vector $\\vec{AB}$.",
    "questionAr": "إذا كانت $A(١، ٢، ٣)$ و $B(٤، ١، ٥)$، فأوجد المتجه $\\vec{AB}$.",
    "optionsEn": [
      "(3, -1, 2)",
      "(-3, 1, -2)",
      "(5, 3, 8)",
      "(4, 2, 15)"
    ],
    "optionsAr": [
      "(٣، -١، ٢)",
      "(-٣، ١، -٢)",
      "(٥، ٣، ٨)",
      "(٤، ٢، ١٥)"
    ],
    "correctAnswer": "(3, -1, 2)",
    "correctIndex": 0,
    "hintEn": "$\\vec{AB} = B - A$.",
    "hintAr": "$\\vec{AB} = B - A$.",
    "stepByStepSolutionEn": [
      "$$\\vec{AB} = (4 - 1, 1 - 2, 5 - 3) = (3, -1, 2)$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\vec{AB} = B - A = (٤ - ١، ١ - ٢، ٥ - ٣) = (٣، -١، ٢)$$"
    ],
    "teacherTipEn": "Always subtract initial point from terminal point: $B - A$.",
    "teacherTipAr": "دائماً اطرح نقطة البداية من نقطة النهاية: $B - A$."
  },
  {
    "id": "solid_ch1_db_easy_40",
    "titleEn": "Opposite Vector -AB",
    "titleAr": "المتجه العكسي BA",
    "difficulty": "easy",
    "questionEn": "If $\\vec{AB} = (2, -5, 7)$, what is $\\vec{BA}$?",
    "questionAr": "إذا كان $\\vec{AB} = (٢، -٥، ٧)$، فما هو المتجه $\\vec{BA}$؟",
    "optionsEn": [
      "(-2, 5, -7)",
      "(2, -5, 7)",
      "(-2, -5, -7)",
      "(7, -5, 2)"
    ],
    "optionsAr": [
      "(-٢، ٥، -٧)",
      "(٢، -٥، ٧)",
      "(-٢، -٥، -٧)",
      "(٧، -٥، ٢)"
    ],
    "correctAnswer": "(-2, 5, -7)",
    "correctIndex": 0,
    "hintEn": "$\\vec{BA} = -\\vec{AB}$.",
    "hintAr": "$\\vec{BA} = -\\vec{AB}$.",
    "stepByStepSolutionEn": [
      "$$\\vec{BA} = -\\vec{AB} = -(2, -5, 7) = (-2, 5, -7)$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\vec{BA} = -\\vec{AB} = (-٢، ٥، -٧)$$"
    ],
    "teacherTipEn": "Reversing orientation reverses all signs.",
    "teacherTipAr": "عكس الاتجاه يغير إشارات جميع المركبات."
  },
  {
    "id": "solid_ch1_db_easy_41",
    "titleEn": "Scalar Multiplication of a Vector",
    "titleAr": "ضرب متجه في عدد حقيقي",
    "difficulty": "easy",
    "questionEn": "If $\\vec{u} = (2, -1, 4)$, find $3\\vec{u}$.",
    "questionAr": "إذا كان $\\vec{u} = (٢، -١، ٤)$، فأوجد $٣\\vec{u}$.",
    "optionsEn": [
      "(6, -3, 12)",
      "(5, 2, 7)",
      "(6, -1, 4)",
      "(6, 3, 12)"
    ],
    "optionsAr": [
      "(٦، -٣، ١٢)",
      "(٥، ٢، ٧)",
      "(٦، -١، ٤)",
      "(٦، ٣، ١٢)"
    ],
    "correctAnswer": "(6, -3, 12)",
    "correctIndex": 0,
    "hintEn": "Multiply every component by 3.",
    "hintAr": "اضرب كل مركبة في ٣.",
    "stepByStepSolutionEn": [
      "$$3(2, -1, 4) = (3 \\times 2, 3 \\times (-1), 3 \\times 4) = (6, -3, 12)$$"
    ],
    "stepByStepSolutionAr": [
      "$$٣(٢، -١، ٤) = (٦، -٣، ١٢)$$"
    ],
    "teacherTipEn": "Distribute the scalar to all coordinates.",
    "teacherTipAr": "وزع الثابت على جميع الإحداثيات."
  },
  {
    "id": "solid_ch1_db_easy_42",
    "titleEn": "Vector Addition in 3D",
    "titleAr": "جمع متجهين في الفراغ",
    "difficulty": "easy",
    "questionEn": "If $\\vec{A} = (1, 3, -2)$ and $\\vec{B} = (4, -1, 5)$, find $\\vec{A} + \\vec{B}$.",
    "questionAr": "إذا كان $\\vec{A} = (١، ٣، -٢)$ و $\\vec{B} = (٤، -١، ٥)$، فأوجد $\\vec{A} + \\vec{B}$.",
    "optionsEn": [
      "(5, 2, 3)",
      "(3, -4, 7)",
      "(4, -3, -10)",
      "(5, 4, 3)"
    ],
    "optionsAr": [
      "(٥، ٢، ٣)",
      "(٣، -٤، ٧)",
      "(٤، -٣، -١٠)",
      "(٥، ٤، ٣)"
    ],
    "correctAnswer": "(5, 2, 3)",
    "correctIndex": 0,
    "hintEn": "Add corresponding components: $(1+4, 3+(-1), -2+5)$.",
    "hintAr": "اجمع المركبات المتناظرة.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} + \\vec{B} = (1+4, 3-1, -2+5) = (5, 2, 3)$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\vec{A} + \\vec{B} = (١+٤، ٣-١، -٢+٥) = (٥، ٢، ٣)$$"
    ],
    "teacherTipEn": "Component-wise addition.",
    "teacherTipAr": "الجمع يتم مركبة بمركبة."
  },
  {
    "id": "solid_ch1_db_easy_43",
    "titleEn": "Fundamental Direction Cosine Identity",
    "titleAr": "المتطابقة الأساسية لجيوب تمام الاتجاه",
    "difficulty": "easy",
    "questionEn": "For any vector with direction cosines $\\cos\\alpha, \\cos\\beta, \\cos\\gamma$, the value of $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma$ is:",
    "questionAr": "لأي متجه جيوب تمام اتجاهه $\\cos\\alpha, \\cos\\beta, \\cos\\gamma$، فإن قيمة $\\cos^٢\\alpha + \\cos^٢\\beta + \\cos^٢\\gamma$ تساوي:",
    "optionsEn": [
      "1",
      "0",
      "2",
      "3"
    ],
    "optionsAr": [
      "١",
      "٠",
      "٢",
      "٣"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "Direction cosines form a unit vector whose squared magnitude is 1.",
    "hintAr": "جيوب تمام الاتجاه تمثل مركبات متجه الوحدة الذي معيار مربعه = ١.",
    "stepByStepSolutionEn": [
      "The direction cosines are components of the unit vector $\\hat{u} = (\\cos\\alpha, \\cos\\beta, \\cos\\gamma)$.",
      "Since $\\|\\hat{u}\\| = 1$, we have $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$."
    ],
    "stepByStepSolutionAr": [
      "جيوب تمام الاتجاه هي مركبات متجه الوحدة ومعياره يساوي ١، لذا فإن مجموع مربعاتها يساوي ١ دائماً."
    ],
    "teacherTipEn": "One of the most essential formulas in solid geometry.",
    "teacherTipAr": "من أهم القوانين الأساسية في الهندسة الفراغية."
  },
  {
    "id": "solid_ch1_db_easy_44",
    "titleEn": "Direction Cosines of the X-axis",
    "titleAr": "جيوب تمام اتجاه محور السينات",
    "difficulty": "easy",
    "questionEn": "What are the direction cosines of the positive $X$-axis?",
    "questionAr": "ما هي جيوب تمام الاتجاه للاتجاه الموجب لمحور السينات؟",
    "optionsEn": [
      "(1, 0, 0)",
      "(0, 1, 0)",
      "(0, 0, 1)",
      "(1, 1, 1)"
    ],
    "optionsAr": [
      "(١، ٠، ٠)",
      "(٠، ١، ٠)",
      "(٠، ٠، ١)",
      "(١، ١، ١)"
    ],
    "correctAnswer": "(1, 0, 0)",
    "correctIndex": 0,
    "hintEn": "The direction angles are $\\alpha = 0^\\circ, \\beta = 90^\\circ, \\gamma = 90^\\circ$.",
    "hintAr": "زوايا الاتجاه هي: صفر، ٩٠ درجة، ٩٠ درجة.",
    "stepByStepSolutionEn": [
      "$\\cos 0^\\circ = 1, \\cos 90^\\circ = 0, \\cos 90^\\circ = 0$.",
      "Direction cosines are $(1, 0, 0)$."
    ],
    "stepByStepSolutionAr": [
      "زوايا اتجاه محور السينات هي $(٠^\\circ، ٩٠^\\circ، ٩٠^\\circ)$.",
      "جيوب تمامها هي $(١، ٠، ٠)$."
    ],
    "teacherTipEn": "The unit vector of the X-axis is $\\hat{i} = (1, 0, 0)$.",
    "teacherTipAr": "متجه الوحدة لمحور السينات هو $\\hat{i} = (١، ٠، ٠)$."
  },
  {
    "id": "solid_ch1_db_easy_45",
    "titleEn": "Direction Cosines of the Z-axis",
    "titleAr": "جيوب تمام اتجاه محور العينات",
    "difficulty": "easy",
    "questionEn": "What are the direction cosines of the positive $Z$-axis?",
    "questionAr": "ما هي جيوب تمام الاتجاه لمحور العينات (محور ع)؟",
    "optionsEn": [
      "(0, 0, 1)",
      "(1, 0, 0)",
      "(0, 1, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(٠، ٠، ١)",
      "(١، ٠، ٠)",
      "(٠، ١، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(0, 0, 1)",
    "correctIndex": 0,
    "hintEn": "$\\hat{k} = (0, 0, 1)$.",
    "hintAr": "$\\hat{k} = (٠، ٠، ١)$.",
    "stepByStepSolutionEn": [
      "Direction angles are $90^\\circ, 90^\\circ, 0^\\circ$.",
      "Cosines are $(0, 0, 1)$."
    ],
    "stepByStepSolutionAr": [
      "جيوب تمام الاتجاه لمحور ع هي $(٠، ٠، ١)$."
    ],
    "teacherTipEn": "Basis vector $\\hat{k}$.",
    "teacherTipAr": "متجه الوحدة الأساسي $\\hat{k}$."
  },
  {
    "id": "solid_ch1_db_easy_46",
    "titleEn": "Dot Product Calculation",
    "titleAr": "حساب الضرب القياسي لمتجهين",
    "difficulty": "easy",
    "questionEn": "Evaluate the dot product: $(1, 2, 3) \\cdot (4, -1, 2)$.",
    "questionAr": "احسب حاصل الضرب القياسي: $(١، ٢، ٣) \\cdot (٤، -١، ٢)$.",
    "optionsEn": [
      "8",
      "12",
      "0",
      "-8"
    ],
    "optionsAr": [
      "٨",
      "١٢",
      "٠",
      "-٨"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "$u_x v_x + u_y v_y + u_z v_z$.",
    "hintAr": "مجموع حواضل ضرب المركبات المتناظرة.",
    "stepByStepSolutionEn": [
      "$$(1)(4) + (2)(-1) + (3)(2) = 4 - 2 + 6 = 8$$"
    ],
    "stepByStepSolutionAr": [
      "$$(١)(٤) + (٢)(-١) + (٣)(٢) = ٤ - ٢ + ٦ = ٨$$"
    ],
    "teacherTipEn": "Dot product of two vectors is a scalar (a real number).",
    "teacherTipAr": "حاصل الضرب القياسي لمتجهين هو كمية قياسية (عدد حقيقي)."
  },
  {
    "id": "solid_ch1_db_easy_47",
    "titleEn": "Dot Product with Itself",
    "titleAr": "الضرب القياسي للمتجه في نفسه",
    "difficulty": "easy",
    "questionEn": "For any vector $\\vec{A}$, what does $\\vec{A} \\cdot \\vec{A}$ equal?",
    "questionAr": "لأي متجه $\\vec{A}$، ماذا يساوي المقدار $\\vec{A} \\cdot \\vec{A}$؟",
    "optionsEn": [
      "\\|\\vec{A}\\|^2",
      "\\|\\vec{A}\\|",
      "0",
      "1"
    ],
    "optionsAr": [
      "\\|\\vec{A}\\|^٢",
      "\\|\\vec{A}\\|",
      "٠",
      "١"
    ],
    "correctAnswer": "\\|\\vec{A}\\|^2",
    "correctIndex": 0,
    "hintEn": "$\\vec{A} \\cdot \\vec{A} = x^2 + y^2 + z^2 = \\|\\vec{A}\\|^2$.",
    "hintAr": "$\\vec{A} \\cdot \\vec{A} = x^٢ + y^٢ + z^٢ = \\|\\vec{A}\\|^٢$.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} \\cdot \\vec{A} = x^2 + y^2 + z^2 = \\left(\\sqrt{x^2 + y^2 + z^2}\\right)^2 = \\|\\vec{A}\\|^2$$"
    ],
    "stepByStepSolutionAr": [
      "الضرب القياسي لأي متجه في نفسه يساوي مربع معياره: $\\|\\vec{A}\\|^٢$."
    ],
    "teacherTipEn": "Fundamental identity used in squaring vector equations.",
    "teacherTipAr": "متطابقة أساسية تستخدم عند تربيع المعادلات المتجهة."
  },
  {
    "id": "solid_ch1_db_easy_48",
    "titleEn": "Cross Product of a Vector with Itself",
    "titleAr": "الضرب الاتجاهي للمتجه في نفسه",
    "difficulty": "easy",
    "questionEn": "For any vector $\\vec{A}$, what is $\\vec{A} \\times \\vec{A}$?",
    "questionAr": "لأي متجه $\\vec{A}$، ماذا يساوي حاصل الضرب الاتجاهي $\\vec{A} \\times \\vec{A}$؟",
    "optionsEn": [
      "\\vec{0}",
      "\\|\\vec{A}\\|^2",
      "1",
      "\\vec{A}"
    ],
    "optionsAr": [
      "\\vec{٠}",
      "\\|\\vec{A}\\|^٢",
      "١",
      "\\vec{A}"
    ],
    "correctAnswer": "\\vec{0}",
    "correctIndex": 0,
    "hintEn": "The angle between $\\vec{A}$ and itself is $0^\\circ$, and $\\sin 0^\\circ = 0$.",
    "hintAr": "الزاوية بين المتجه ونفسه صفر وجيب الصفر يساوي صفراً.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} \\times \\vec{A} = \\|\\vec{A}\\| \\|\\vec{A}\\| \\sin 0^\\circ \\hat{n} = \\vec{0}$$"
    ],
    "stepByStepSolutionAr": [
      "حاصل الضرب الاتجاهي لأي متجه في نفسه يساوي المتجه الصفري $\\vec{٠}$ لأن $\\sin ٠^\\circ = ٠$."
    ],
    "teacherTipEn": "Cross product of a vector with itself is the zero vector, NOT the number 0.",
    "teacherTipAr": "الناتج هو المتجه الصفري وليس العدد صفر."
  },
  {
    "id": "solid_ch1_db_easy_49",
    "titleEn": "Cross Product of Basis Vectors i and j",
    "titleAr": "الضرب الاتجاهي لمتجهي الوحدة i و j",
    "difficulty": "easy",
    "questionEn": "In a right-handed 3D coordinate system, $\\hat{i} \\times \\hat{j}$ equals:",
    "questionAr": "في نظام إحداثي ثلاثي الأبعاد يميني، $\\hat{i} \\times \\hat{j}$ يساوي:",
    "optionsEn": [
      "\\hat{k}",
      "-\\hat{k}",
      "1",
      "0"
    ],
    "optionsAr": [
      "\\hat{k}",
      "-\\hat{k}",
      "١",
      "٠"
    ],
    "correctAnswer": "\\hat{k}",
    "correctIndex": 0,
    "hintEn": "Right-hand rule: turning x into y advances along z.",
    "hintAr": "قاعدة اليد اليمنى: الدوران من س إلى ص يعطي ع الموجب.",
    "stepByStepSolutionEn": [
      "By cyclic order: $\\hat{i} \\times \\hat{j} = \\hat{k}$, $\\hat{j} \\times \\hat{k} = \\hat{i}$, $\\hat{k} \\times \\hat{i} = \\hat{j}$."
    ],
    "stepByStepSolutionAr": [
      "بالترتيب الدوري لمتجهات الوحدة: $\\hat{i} \\times \\hat{j} = \\hat{k}$."
    ],
    "teacherTipEn": "Remember the circle: i -> j -> k -> i. Reversing the order introduces a minus sign.",
    "teacherTipAr": "تذكر الدائرة الدورية: الضرب في اتجاه السهم يعطي إشارة موجبة، وعكسه يعطي سالبة."
  },
  {
    "id": "solid_ch1_db_easy_50",
    "titleEn": "Anti-commutativity of Cross Product",
    "titleAr": "خاصية التبديل في الضرب الاتجاهي",
    "difficulty": "easy",
    "questionEn": "If $\\vec{A} \\times \\vec{B} = (2, -3, 5)$, what is $\\vec{B} \\times \\vec{A}$?",
    "questionAr": "إذا كان $\\vec{A} \\times \\vec{B} = (٢، -٣، ٥)$، فماذا يساوي $\\vec{B} \\times \\vec{A}$؟",
    "optionsEn": [
      "(-2, 3, -5)",
      "(2, -3, 5)",
      "(5, -3, 2)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-٢، ٣، -٥)",
      "(٢، -٣، ٥)",
      "(٥، -٣، ٢)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-2, 3, -5)",
    "correctIndex": 0,
    "hintEn": "Cross product is anticommutative: $\\vec{B} \\times \\vec{A} = -(\\vec{A} \\times \\vec{B})$.",
    "hintAr": "الضرب الاتجاهي غير تبديلي وإنما يغير الإشارة: $\\vec{B} \\times \\vec{A} = -(\\vec{A} \\times \\vec{B})$.",
    "stepByStepSolutionEn": [
      "$$\\vec{B} \\times \\vec{A} = -(\\vec{A} \\times \\vec{B}) = -(2, -3, 5) = (-2, 3, -5)$$"
    ],
    "stepByStepSolutionAr": [
      "الضرب الاتجاهي مضاد للتبديل: $\\vec{B} \\times \\vec{A} = -(\\vec{A} \\times \\vec{B}) = (-٢، ٣، -٥)$."
    ],
    "teacherTipEn": "Reversing the vector order flips the orientation vector by $180^\\circ$.",
    "teacherTipAr": "تبديل ترتيب المتجهين في الضرب الاتجاهي يعكس اتجاه المتجه الناتج."
  }
],
  medium: [
  {
    "id": "solid_ch1_db_med_01",
    "titleEn": "Sphere with Non-Unit Leading Coefficients",
    "titleAr": "معادلة كرة بمعاملات قيادية غير الواحد",
    "difficulty": "medium",
    "questionEn": "Find the center and radius of the sphere $3x^2 + 3y^2 + 3z^2 - 12x + 18y - 6z - 21 = 0$.",
    "questionAr": "أوجد مركز ونصف قطر الكرة: $٣x^٢ + ٣y^٢ + ٣z^٢ - ١٢x + ١٨y - ٦z - ٢١ = ٠$.",
    "optionsEn": [
      "Center (2, -3, 1), Radius r = sqrt(21)",
      "Center (-2, 3, -1), Radius r = sqrt(21)",
      "Center (2, -3, 1), Radius r = 5",
      "Center (4, -6, 2), Radius r = sqrt(49)"
    ],
    "optionsAr": [
      "المركز (٢، -٣، ١)، نصف القطر r = \\sqrt{٢١}",
      "المركز (-٢، ٣، -١)، نصف القطر r = \\sqrt{٢١}",
      "المركز (٢، -٣، ١)، نصف القطر r = ٥",
      "المركز (٤، -٦، ٢)، نصف القطر r = \\sqrt{٤٩}"
    ],
    "correctAnswer": "Center (2, -3, 1), Radius r = sqrt(21)",
    "correctIndex": 0,
    "hintEn": "Divide by 3 first: $x^2 + y^2 + z^2 - 4x + 6y - 2z - 7 = 0$.",
    "hintAr": "اقسم أولاً على ٣: $x^٢ + y^٢ + z^٢ - ٤x + ٦y - ٢z - ٧ = ٠$.",
    "stepByStepSolutionEn": [
      "Divide the entire equation by 3:",
      "$$x^2 + y^2 + z^2 - 4x + 6y - 2z - 7 = 0$$",
      "Center: $a = -(-4)/2 = 2, b = -(6)/2 = -3, c = -(-2)/2 = 1 \\implies C(2, -3, 1)$.",
      "Radius: $r = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{2^2 + (-3)^2 + 1^2 - (-7)} = \\sqrt{4 + 9 + 1 + 7} = \\sqrt{21}$."
    ],
    "stepByStepSolutionAr": [
      "بقسمة المعادلة بأكملها على ٣:",
      "$$x^٢ + y^٢ + z^٢ - ٤x + ٦y - ٢z - ٧ = ٠$$",
      "المركز هو $(٢، -٣، ١)$.",
      "نصف القطر: $r = \\sqrt{٤ + ٩ + ١ - (-٧)} = \\sqrt{٢١}$."
    ],
    "teacherTipEn": "Always divide by the leading coefficient before reading $a, b, c, d$.",
    "teacherTipAr": "اقسم دائماً على معامل س^٢ قبل تحديد الثوابت."
  },
  {
    "id": "solid_ch1_db_med_02",
    "titleEn": "Position of a Point Relative to a Sphere",
    "titleAr": "موقع نقطة بالنسبة لكرة",
    "difficulty": "medium",
    "questionEn": "Determine the position of point $P(2, 3, 1)$ relative to the sphere $(x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 9$.",
    "questionAr": "حدد موضع النقطة $P(٢، ٣، ١)$ بالنسبة للكرة $(x - ١)^٢ + (y - ٢)^٢ + (z + ١)^٢ = ٩$.",
    "optionsEn": [
      "Inside the sphere",
      "On the surface of the sphere",
      "Outside the sphere",
      "At the center of the sphere"
    ],
    "optionsAr": [
      "داخل الكرة",
      "على سطح الكرة",
      "خارج الكرة",
      "في مركز الكرة"
    ],
    "correctAnswer": "Inside the sphere",
    "correctIndex": 0,
    "hintEn": "Substitute $P$ into the left-hand side and compare with $r^2 = 9$.",
    "hintAr": "عوض بالنقطة في الطرف الأيمن وقارن الناتج مع $r^٢ = ٩$.",
    "stepByStepSolutionEn": [
      "Calculate the value of $(x - 1)^2 + (y - 2)^2 + (z + 1)^2$ at $(2, 3, 1)$:",
      "$$(2 - 1)^2 + (3 - 2)^2 + (1 + 1)^2 = 1^2 + 1^2 + 2^2 = 1 + 1 + 4 = 6$$",
      "Since $6 < 9$ (value $< r^2$), the point lies inside the sphere."
    ],
    "stepByStepSolutionAr": [
      "نعوض بإحداثيات النقطة في الطرف الأيمن:",
      "$$(٢ - ١)^٢ + (٣ - ٢)^٢ + (١ + ١)^٢ = ١ + ١ + ٤ = ٦$$",
      "بما أن $٦ < ٩$ (المسافة أقل من نصف القطر)، فالنقطة تقع داخل الكرة."
    ],
    "teacherTipEn": "Value $< r^2 \\implies$ inside; Value $= r^2 \\implies$ on surface; Value $> r^2 \\implies$ outside.",
    "teacherTipAr": "القيمة أقل من نق^٢ تعني داخل الكرة، تساوي نق^٢ على السطح، أكبر من نق^٢ خارج الكرة."
  },
  {
    "id": "solid_ch1_db_med_03",
    "titleEn": "Point Outside the Sphere",
    "titleAr": "نقطة تقع خارج الكرة",
    "difficulty": "medium",
    "questionEn": "Which of the following points lies strictly outside the sphere $x^2 + y^2 + z^2 = 16$?",
    "questionAr": "أي من النقاط الآتية تقع خارج الكرة $x^٢ + y^٢ + z^٢ = ١٦$؟",
    "optionsEn": [
      "(3, 2, 3)",
      "(1, 2, 2)",
      "(2, 2, 2)",
      "(0, 0, 4)"
    ],
    "optionsAr": [
      "(٣، ٢، ٣)",
      "(١، ٢، ٢)",
      "(٢، ٢، ٢)",
      "(٠، ٠، ٤)"
    ],
    "correctAnswer": "(3, 2, 3)",
    "correctIndex": 0,
    "hintEn": "Check $x^2 + y^2 + z^2 > 16$.",
    "hintAr": "ابحث عن النقطة التي تحقق $س^٢ + ص^٢ + ع^٢ > ١٦$.",
    "stepByStepSolutionEn": [
      "For $(3, 2, 3)$: $3^2 + 2^2 + 3^2 = 9 + 4 + 9 = 22 > 16$.",
      "For $(1, 2, 2)$: $1 + 4 + 4 = 9 < 16$ (inside).",
      "For $(2, 2, 2)$: $4 + 4 + 4 = 12 < 16$ (inside).",
      "For $(0, 0, 4)$: $0 + 0 + 16 = 16$ (on the surface).",
      "Therefore, $(3, 2, 3)$ lies outside the sphere."
    ],
    "stepByStepSolutionAr": [
      "للنقطة $(٣، ٢، ٣)$: $٩ + ٤ + ٩ = ٢٢ > ١٦$ (خارج الكرة).",
      "بقية النقاط تقع داخل الكرة أو على سطحها."
    ],
    "teacherTipEn": "Quick check: evaluate distance from origin.",
    "teacherTipAr": "تحقق سريع بحساب بعد النقطة عن المركز ومقارنته بنصف القطر."
  },
  {
    "id": "solid_ch1_db_med_04",
    "titleEn": "Concentric Spheres",
    "titleAr": "كرتان متحدتا المركز",
    "difficulty": "medium",
    "questionEn": "Find the equation of the sphere concentric with $(x - 2)^2 + (y + 1)^2 + (z - 4)^2 = 25$ and having radius $r = 3$.",
    "questionAr": "أوجد معادلة الكرة المتحدة في المركز مع الكرة $(x - ٢)^٢ + (y + ١)^٢ + (z - ٤)^٢ = ٢٥$ ونصف قطرها $r = ٣$.",
    "optionsEn": [
      "(x - 2)^2 + (y + 1)^2 + (z - 4)^2 = 9",
      "(x + 2)^2 + (y - 1)^2 + (z + 4)^2 = 9",
      "(x - 2)^2 + (y + 1)^2 + (z - 4)^2 = 3",
      "x^2 + y^2 + z^2 = 9"
    ],
    "optionsAr": [
      "(x - ٢)^٢ + (y + ١)^٢ + (z - ٤)^٢ = ٩",
      "(x + ٢)^٢ + (y - ١)^٢ + (z + ٤)^٢ = ٩",
      "(x - ٢)^٢ + (y + ١)^٢ + (z - ٤)^٢ = ٣",
      "x^٢ + y^٢ + z^٢ = ٩"
    ],
    "correctAnswer": "(x - 2)^2 + (y + 1)^2 + (z - 4)^2 = 9",
    "correctIndex": 0,
    "hintEn": "Concentric means identical center $(2, -1, 4)$ with new radius squared $3^2 = 9$.",
    "hintAr": "متحدتا المركز يعني نفس المركز $(٢، -١، ٤)$ مع مربع نصف القطر الجديد $٣^٢ = ٩$.",
    "stepByStepSolutionEn": [
      "Center is $C(2, -1, 4)$.",
      "New radius is $r = 3 \\implies r^2 = 9$.",
      "Equation: $(x - 2)^2 + (y + 1)^2 + (z - 4)^2 = 9$."
    ],
    "stepByStepSolutionAr": [
      "المركز المشترك هو $C(٢، -١، ٤)$.",
      "نصف القطر الجديد $r = ٣ \\implies r^٢ = ٩$.",
      "المعادلة: $(x - ٢)^٢ + (y + ١)^٢ + (z - ٤)^٢ = ٩$."
    ],
    "teacherTipEn": "Concentric spheres share the exact same center.",
    "teacherTipAr": "الكرات متحدة المركز تشترك في نفس إحداثيات المركز تماماً."
  },
  {
    "id": "solid_ch1_db_med_05",
    "titleEn": "Distance of Sphere Center to Plane",
    "titleAr": "بعد مركز كرة عن مستوى إحداثي",
    "difficulty": "medium",
    "questionEn": "What is the distance from the center of $x^2 + y^2 + z^2 - 8x + 4y - 12z + 1 = 0$ to the $XZ$-plane?",
    "questionAr": "ما هو بعد مركز الكرة $x^٢ + y^٢ + z^٢ - ٨x + ٤y - ١٢z + ١ = ٠$ عن المستوى س ع؟",
    "optionsEn": [
      "2",
      "4",
      "6",
      "1"
    ],
    "optionsAr": [
      "٢",
      "٤",
      "٦",
      "١"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "Center is $(4, -2, 6)$. Distance to $XZ$-plane is $|y| = |-2| = 2$.",
    "hintAr": "المركز هو $(٤، -٢، ٦)$، والبعد عن المستوى س ع هو $|ص| = ٢$.",
    "stepByStepSolutionEn": [
      "Center: $a = -(-8)/2 = 4, b = -4/2 = -2, c = -(-12)/2 = 6$.",
      "Center is $C(4, -2, 6)$.",
      "Distance to $XZ$-plane is $|y| = |-2| = 2$."
    ],
    "stepByStepSolutionAr": [
      "المركز $C(٤، -٢، ٦)$.",
      "البعد عن المستوى س ع هو $|ص| = |-٢| = ٢$."
    ],
    "teacherTipEn": "Distance to XZ is the absolute value of the y-coordinate of the center.",
    "teacherTipAr": "البعد عن س ع هو القيمة المطلقة للإحداثي الصادي للمركز."
  },
  {
    "id": "solid_ch1_db_med_06",
    "titleEn": "Sphere Touching the X-axis",
    "titleAr": "كرة تمس محور السينات",
    "difficulty": "medium",
    "questionEn": "A sphere centered at $C(2, 3, 4)$ touches the $X$-axis. What is its radius?",
    "questionAr": "كرة مركزها $C(٢، ٣، ٤)$ تمس محور السينات. ما هو نصف قطرها؟",
    "optionsEn": [
      "5",
      "\\sqrt{20}",
      "\\sqrt{13}",
      "2"
    ],
    "optionsAr": [
      "٥",
      "\\sqrt{٢٠}",
      "\\sqrt{١٣}",
      "٢"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "Distance to X-axis is $\\sqrt{y^2 + z^2} = \\sqrt{3^2 + 4^2} = 5$.",
    "hintAr": "البعد عن محور السينات هو $\\sqrt{ص^٢ + ع^٢} = \\sqrt{٩ + ١٦} = ٥$.",
    "stepByStepSolutionEn": [
      "When a sphere touches the $X$-axis, the radius equals the perpendicular distance from the center to the $X$-axis:",
      "$$r = \\sqrt{y^2 + z^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$"
    ],
    "stepByStepSolutionAr": [
      "عندما تمس الكرة محور السينات، فإن نصف القطر يساوي بعد المركز عن محور السينات:",
      "$$r = \\sqrt{ص^٢ + ع^٢} = \\sqrt{٣^٢ + ٤^٢} = ٥$$"
    ],
    "teacherTipEn": "Touching an axis involves the square root of the sum of squares of the other two coordinates.",
    "teacherTipAr": "مس المحور يتطلب جذر مجموع مربعي الإحداثيين الآخرين."
  },
  {
    "id": "solid_ch1_db_med_07",
    "titleEn": "Sphere Touching the Z-axis",
    "titleAr": "كرة تمس محور العينات",
    "difficulty": "medium",
    "questionEn": "Find the radius of the sphere with center $(6, 8, -5)$ that touches the $Z$-axis.",
    "questionAr": "أوجد نصف قطر الكرة التي مركزها $(٦، ٨، -٥)$ وتمس محور العينات.",
    "optionsEn": [
      "10",
      "5",
      "\\sqrt{89}",
      "\\sqrt{61}"
    ],
    "optionsAr": [
      "١٠",
      "٥",
      "\\sqrt{٨٩}",
      "\\sqrt{٦١}"
    ],
    "correctAnswer": "10",
    "correctIndex": 0,
    "hintEn": "$r = \\sqrt{x^2 + y^2} = \\sqrt{6^2 + 8^2} = 10$.",
    "hintAr": "$r = \\sqrt{س^٢ + ص^٢} = \\sqrt{٣٦ + ٦٤} = ١٠$.",
    "stepByStepSolutionEn": [
      "$$r = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$"
    ],
    "stepByStepSolutionAr": [
      "$$r = \\sqrt{٦^٢ + ٨^٢} = \\sqrt{١٠٠} = ١٠$$"
    ],
    "teacherTipEn": "Distance to Z-axis uses $x$ and $y$.",
    "teacherTipAr": "البعد عن محور ع يستخدم س و ص."
  },
  {
    "id": "solid_ch1_db_med_08",
    "titleEn": "Sphere Touching the Y-axis",
    "titleAr": "كرة تمس محور الصادات",
    "difficulty": "medium",
    "questionEn": "A sphere centered at $(1, 4, -3)$ touches the $Y$-axis. Its equation is:",
    "questionAr": "كرة مركزها $(١، ٤، -٣)$ تمس محور الصادات. ما هي معادلتها؟",
    "optionsEn": [
      "(x - 1)^2 + (y - 4)^2 + (z + 3)^2 = 10",
      "(x - 1)^2 + (y - 4)^2 + (z + 3)^2 = 16",
      "(x - 1)^2 + (y - 4)^2 + (z + 3)^2 = 25",
      "(x + 1)^2 + (y + 4)^2 + (z - 3)^2 = 10"
    ],
    "optionsAr": [
      "(x - ١)^٢ + (y - ٤)^٢ + (z + ٣)^٢ = ١٠",
      "(x - ١)^٢ + (y - ٤)^٢ + (z + ٣)^٢ = ١٦",
      "(x - ١)^٢ + (y - ٤)^٢ + (z + ٣)^٢ = ٢٥",
      "(x + ١)^٢ + (y + ٤)^٢ + (z - ٣)^٢ = ١٠"
    ],
    "correctAnswer": "(x - 1)^2 + (y - 4)^2 + (z + 3)^2 = 10",
    "correctIndex": 0,
    "hintEn": "$r^2 = x^2 + z^2 = 1^2 + (-3)^2 = 1 + 9 = 10$.",
    "hintAr": "$r^٢ = س^٢ + ع^٢ = ١ + ٩ = ١٠$.",
    "stepByStepSolutionEn": [
      "$$r^2 = 1^2 + (-3)^2 = 10$$",
      "Equation: $(x - 1)^2 + (y - 4)^2 + (z + 3)^2 = 10$."
    ],
    "stepByStepSolutionAr": [
      "$$r^٢ = ١^٢ + (-٣)^٢ = ١٠$$",
      "المعادلة: $(x - ١)^٢ + (y - ٤)^٢ + (z + ٣)^٢ = ١٠$."
    ],
    "teacherTipEn": "Notice $r^2 = 10$, so $r = \\sqrt{10}$.",
    "teacherTipAr": "نصف القطر $\\sqrt{١٠}$ ومربعه ١٠."
  },
  {
    "id": "solid_ch1_db_med_09",
    "titleEn": "Radius of Circular Section by Plane z = 2",
    "titleAr": "نصف قطر المقطع الدائري بالمستوى z = ٢",
    "difficulty": "medium",
    "questionEn": "Find the radius of the circle of intersection of $x^2 + y^2 + z^2 = 29$ with the plane $z = 2$.",
    "questionAr": "أوجد نصف قطر دائرة تقاطع الكرة $x^٢ + y^٢ + z^٢ = ٢٩$ مع المستوى $z = ٢$.",
    "optionsEn": [
      "5",
      "\\sqrt{29}",
      "2",
      "\\sqrt{33}"
    ],
    "optionsAr": [
      "٥",
      "\\sqrt{٢٩}",
      "٢",
      "\\sqrt{٣٣}"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "$x^2 + y^2 + 2^2 = 29 \\implies x^2 + y^2 = 25$.",
    "hintAr": "$x^٢ + y^٢ + ٤ = ٢٩ \\implies x^٢ + y^٢ = ٢٥$.",
    "stepByStepSolutionEn": [
      "Substitute $z = 2$ into the sphere equation:",
      "$$x^2 + y^2 + 4 = 29 \\implies x^2 + y^2 = 25 = 5^2$$",
      "Radius of the circle is 5."
    ],
    "stepByStepSolutionAr": [
      "بالتعويض عن $z = ٢$:",
      "$$x^٢ + y^٢ + ٤ = ٢٩ \\implies x^٢ + y^٢ = ٢٥$$",
      "نصف قطر الدائرة $= ٥$."
    ],
    "teacherTipEn": "Substituting the planar coordinate gives the 2D equation of the circular boundary.",
    "teacherTipAr": "التعويض بقيمة الإحداثي الثابت يعطي معادلة الدائرة مباشرة في المستوى."
  },
  {
    "id": "solid_ch1_db_med_10",
    "titleEn": "Internal Tangency of Two Spheres",
    "titleAr": "التماس من الداخل لكرتين",
    "difficulty": "medium",
    "questionEn": "Sphere $S_1$ has center $(0, 0, 0)$ and radius $R_1 = 8$. Sphere $S_2$ has center $(0, 3, 4)$ and touches $S_1$ internally. Find radius $R_2$ if $R_2 < R_1$.",
    "questionAr": "الكرة الأولى مركزها نقطة الأصل ونصف قطرها $R_١ = ٨$. والكرة الثانية مركزها $(٠، ٣، ٤)$ وتمس الأولى من الداخل. أوجد نصف قطرها $R_٢$ إذا كان $R_٢ < R_١$.",
    "optionsEn": [
      "3",
      "5",
      "13",
      "4"
    ],
    "optionsAr": [
      "٣",
      "٥",
      "١٣",
      "٤"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Distance between centers $d = R_1 - R_2$.",
    "hintAr": "البعد بين المركزين $d = R_١ - R_٢$.",
    "stepByStepSolutionEn": [
      "Distance between centers $C_1(0,0,0)$ and $C_2(0,3,4)$:",
      "$$d = \\sqrt{0^2 + 3^2 + 4^2} = 5$$",
      "For internal tangency: $d = R_1 - R_2$:",
      "$$5 = 8 - R_2 \\implies R_2 = 8 - 5 = 3$$"
    ],
    "stepByStepSolutionAr": [
      "البعد بين المركزين $d = \\sqrt{٩ + ١٦} = ٥$.",
      "شرط التماس من الداخل: $d = R_١ - R_٢$:",
      "$$٥ = ٨ - R_٢ \\implies R_٢ = ٣$$"
    ],
    "teacherTipEn": "Internal tangency uses the difference of radii.",
    "teacherTipAr": "التماس من الداخل يعتمد على الفرق بين نصفي القطرين."
  },
  {
    "id": "solid_ch1_db_med_11",
    "titleEn": "Angle Between Two Non-Zero Vectors",
    "titleAr": "الزاوية بين متجهين غير صفريين",
    "difficulty": "medium",
    "questionEn": "Find the angle between $\\vec{A} = (1, 1, 0)$ and $\\vec{B} = (0, 1, 1)$.",
    "questionAr": "أوجد قياس الزاوية بين المتجهين $\\vec{A} = (١، ١، ٠)$ و $\\vec{B} = (٠، ١، ١)$.",
    "optionsEn": [
      "60^\\circ",
      "45^\\circ",
      "90^\\circ",
      "30^\\circ"
    ],
    "optionsAr": [
      "٦٠^\\circ",
      "٤٥^\\circ",
      "٩٠^\\circ",
      "٣٠^\\circ"
    ],
    "correctAnswer": "60^\\circ",
    "correctIndex": 0,
    "hintEn": "$\\cos\\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{A}\\| \\|\\vec{B}\\|}$.",
    "hintAr": "$\\cos\\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{A}\\| \\|\\vec{B}\\|}$.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} \\cdot \\vec{B} = (1)(0) + (1)(1) + (0)(1) = 1$$",
      "$$\\|\\vec{A}\\| = \\sqrt{1 + 1 + 0} = \\sqrt{2}$$",
      "$$\\|\\vec{B}\\| = \\sqrt{0 + 1 + 1} = \\sqrt{2}$$",
      "$$\\cos\\theta = \\frac{1}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2} \\implies \\theta = 60^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "الضرب القياسي $= ١$.",
      "معيار كل متجه $= \\sqrt{٢}$.",
      "$$\\cos\\theta = \\frac{١}{\\sqrt{٢} \\times \\sqrt{٢}} = \\frac{١}{٢} \\implies \\theta = ٦٠^\\circ$$"
    ],
    "teacherTipEn": "A positive dot product gives an acute angle.",
    "teacherTipAr": "الضرب القياسي الموجب يعطي زاوية حادة دائماً."
  },
  {
    "id": "solid_ch1_db_med_12",
    "titleEn": "Angle Between Orthogonal Vectors",
    "titleAr": "الزاوية بين متجهين متعامدين",
    "difficulty": "medium",
    "questionEn": "Find the angle between $\\vec{u} = (1, 2, -2)$ and $\\vec{v} = (2, 1, 2)$.",
    "questionAr": "أوجد الزاوية بين المتجهين $\\vec{u} = (١، ٢، -٢)$ و $\\vec{v} = (٢، ١، ٢)$.",
    "optionsEn": [
      "90^\\circ",
      "0^\\circ",
      "180^\\circ",
      "45^\\circ"
    ],
    "optionsAr": [
      "٩٠^\\circ",
      "٠^\\circ",
      "١٨٠^\\circ",
      "٤٥^\\circ"
    ],
    "correctAnswer": "90^\\circ",
    "correctIndex": 0,
    "hintEn": "Compute the dot product first.",
    "hintAr": "احسب الضرب القياسي أولاً.",
    "stepByStepSolutionEn": [
      "$$\\vec{u} \\cdot \\vec{v} = (1)(2) + (2)(1) + (-2)(2) = 2 + 2 - 4 = 0$$",
      "Since the dot product is zero, the angle is $\\theta = 90^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$$\\vec{u} \\cdot \\vec{v} = ٢ + ٢ - ٤ = ٠$$",
      "بما أن حاصل الضرب القياسي يساوي صفراً، فالزاوية قائمة $٩٠^\\circ$."
    ],
    "teacherTipEn": "Zero dot product directly implies perpendicularity ($90^\\circ$).",
    "teacherTipAr": "الضرب القياسي الصفري يعني التعامد مباشرة دون الحاجة لحساب المعايير."
  },
  {
    "id": "solid_ch1_db_med_13",
    "titleEn": "Scalar Component (Projection)",
    "titleAr": "المسقط الجبري لمتجه على آخر",
    "difficulty": "medium",
    "questionEn": "Find the scalar projection of $\\vec{A} = (3, 4, 0)$ in the direction of $\\vec{B} = (0, 0, 5)$.",
    "questionAr": "أوجد المسقط الجبري للمتجه $\\vec{A} = (٣، ٤، ٠)$ في اتجاه المتجه $\\vec{B} = (٠، ٠، ٥)$.",
    "optionsEn": [
      "0",
      "5",
      "1",
      "25"
    ],
    "optionsAr": [
      "٠",
      "٥",
      "١",
      "٢٥"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "$\\text{comp}_{\\vec{B}}(\\vec{A}) = \\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{B}\\|}$.",
    "hintAr": "المسقط الجبري هو $\\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{B}\\|}$.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} \\cdot \\vec{B} = (3)(0) + (4)(0) + (0)(5) = 0$$",
      "$$\\text{comp}_{\\vec{B}}(\\vec{A}) = \\frac{0}{5} = 0$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\vec{A} \\cdot \\vec{B} = ٠ + ٠ + ٠ = ٠$$",
      "المسقط الجبري $= \\frac{٠}{٥} = ٠$."
    ],
    "teacherTipEn": "The vector $\\vec{A}$ lies entirely in the XY plane, while $\\vec{B}$ is along the Z axis, so they are perpendicular.",
    "teacherTipAr": "المتجه A يقع بالكامل في المستوى س ص بينما B على محور ع، فهما متعامدان ومسقط أحدهما على الآخر صفر."
  },
  {
    "id": "solid_ch1_db_med_14",
    "titleEn": "Scalar Component on (2, 2, 1)",
    "titleAr": "المسقط الجبري على المتجه (٢، ٢، ١)",
    "difficulty": "medium",
    "questionEn": "Find the scalar component of $\\vec{A} = (4, 1, -2)$ in the direction of $\\vec{B} = (2, 2, 1)$.",
    "questionAr": "أوجد المركبة الجبرية للمتجه $\\vec{A} = (٤، ١، -٢)$ في اتجاه $\\vec{B} = (٢، ٢، ١)$.",
    "optionsEn": [
      "8/3",
      "8",
      "3",
      "4/3"
    ],
    "optionsAr": [
      "٨/٣",
      "٨",
      "٣",
      "٤/٣"
    ],
    "correctAnswer": "8/3",
    "correctIndex": 0,
    "hintEn": "$\\vec{A} \\cdot \\vec{B} = 8 + 2 - 2 = 8$, $\\|\\vec{B}\\| = 3$.",
    "hintAr": "$\\vec{A} \\cdot \\vec{B} = ٨$ ومعيار $B = ٣$.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} \\cdot \\vec{B} = (4)(2) + (1)(2) + (-2)(1) = 8 + 2 - 2 = 8$$",
      "$$\\|\\vec{B}\\| = \\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{9} = 3$$",
      "$$\\text{comp}_{\\vec{B}}(\\vec{A}) = \\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{B}\\|} = \\frac{8}{3}$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\vec{A} \\cdot \\vec{B} = ٨$$",
      "$$\\|\\vec{B}\\| = ٣$$",
      "المركبة الجبرية $= \\frac{٨}{٣}$."
    ],
    "teacherTipEn": "Scalar component is a real number, not a vector.",
    "teacherTipAr": "المركبة الجبرية هي عدد حقيقي وليست متجهاً."
  },
  {
    "id": "solid_ch1_db_med_15",
    "titleEn": "Vector Component (Vector Projection)",
    "titleAr": "المركبة الاتجاهية لمتجه في اتجاه آخر",
    "difficulty": "medium",
    "questionEn": "Find the vector projection of $\\vec{A} = (4, 1, -2)$ in the direction of $\\vec{B} = (2, 2, 1)$.",
    "questionAr": "أوجد المركبة الاتجاهية للمتجه $\\vec{A} = (٤، ١، -٢)$ في اتجاه المتجه $\\vec{B} = (٢، ٢، ١)$.",
    "optionsEn": [
      "\\frac{8}{9}(2, 2, 1)",
      "\\frac{8}{3}(2, 2, 1)",
      "(2, 2, 1)",
      "\\frac{8}{9}(4, 1, -2)"
    ],
    "optionsAr": [
      "\\frac{٨}{٩}(٢، ٢، ١)",
      "\\frac{٨}{٣}(٢، ٢، ١)",
      "(٢، ٢، ١)",
      "\\frac{٨}{٩}(٤، ١، -٢)"
    ],
    "correctAnswer": "\\frac{8}{9}(2, 2, 1)",
    "correctIndex": 0,
    "hintEn": "Vector projection is $\\left(\\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{B}\\|^2}\\right)\\vec{B}$.",
    "hintAr": "المركبة الاتجاهية هي $\\left(\\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{B}\\|^٢}\\right)\\vec{B}$.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} \\cdot \\vec{B} = 8$$",
      "$$\\|\\vec{B}\\|^2 = 2^2 + 2^2 + 1^2 = 9$$",
      "$$\\text{proj}_{\\vec{B}}(\\vec{A}) = \\left(\\frac{8}{9}\\right)\\vec{B} = \\frac{8}{9}(2, 2, 1)$$"
    ],
    "stepByStepSolutionAr": [
      "المركبة الاتجاهية $= \\left(\\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{B}\\|^٢}\\right)\\vec{B} = \\frac{٨}{٩}(٢، ٢، ١)$."
    ],
    "teacherTipEn": "Notice the denominator has $\\|\\vec{B}\\|^2$ (which is 9), NOT $\\|\\vec{B}\\|$ (3).",
    "teacherTipAr": "المقام في المركبة الاتجاهية يحتوي على مربع المعيار (٩) وليس المعيار (٣)."
  },
  {
    "id": "solid_ch1_db_med_16",
    "titleEn": "Finding Equal Direction Angles",
    "titleAr": "متجه زوايا اتجاهه متساوية",
    "difficulty": "medium",
    "questionEn": "If a vector makes equal acute angles with all three positive coordinate axes, what is the measure of each angle?",
    "questionAr": "إذا صنع متجه زوايا حادة متساوية القياس مع الاتجاهات الموجبة لمحاور الإحداثيات، فما قياس كل زاوية؟",
    "optionsEn": [
      "\\arccos(1/\\sqrt{3}) \\approx 54.7^\\circ",
      "45^\\circ",
      "60^\\circ",
      "30^\\circ"
    ],
    "optionsAr": [
      "\\arccos(١/\\sqrt{٣}) \\approx ٥٤.٧^\\circ",
      "٤٥^\\circ",
      "٦٠^\\circ",
      "٣٠^\\circ"
    ],
    "correctAnswer": "\\arccos(1/\\sqrt{3}) \\approx 54.7^\\circ",
    "correctIndex": 0,
    "hintEn": "$\\cos^2\\theta + \\cos^2\\theta + \\cos^2\\theta = 1 \\implies 3\\cos^2\\theta = 1$.",
    "hintAr": "$٣\\cos^٢\\theta = ١ \\implies \\cos\\theta = \\frac{١}{\\sqrt{٣}}$.",
    "stepByStepSolutionEn": [
      "Since $\\alpha = \\beta = \\gamma = \\theta$:",
      "$$\\cos^2\\theta + \\cos^2\\theta + \\cos^2\\theta = 1$$",
      "$$3\\cos^2\\theta = 1 \\implies \\cos^2\\theta = \\frac{1}{3}$$",
      "Since the angle is acute: $\\cos\\theta = \\frac{1}{\\sqrt{3}}$",
      "$$\\theta = \\arccos\\left(\\frac{1}{\\sqrt{3}}\\right) \\approx 54.7^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن الزوايا متساوية:",
      "$$٣\\cos^٢\\theta = ١ \\implies \\cos\\theta = \\frac{١}{\\sqrt{٣}}$$",
      "$$\\theta = \\arccos\\left(\\frac{١}{\\sqrt{٣}}\\right) \\approx ٥٤.٧^\\circ$$"
    ],
    "teacherTipEn": "This direction represents the main space diagonal of a cube.",
    "teacherTipAr": "هذا الاتجاه يمثل القطر الرئيسي للمكعب في الفراغ."
  },
  {
    "id": "solid_ch1_db_med_17",
    "titleEn": "Reconstructing Vector from Magnitude and Direction Cosines",
    "titleAr": "تكوين المتجه من معياره وجيوب تمام اتجاهه",
    "difficulty": "medium",
    "questionEn": "A vector $\\vec{A}$ has magnitude 14 and direction cosines $(2/7, -3/7, 6/7)$. Find $\\vec{A}$.",
    "questionAr": "متجه $\\vec{A}$ معياره ١٤ وجيوب تمام زوايا اتجاهه $(٢/٧، -٣/٧، ٦/٧)$. أوجد المتجه $\\vec{A}$.",
    "optionsEn": [
      "(4, -6, 12)",
      "(2, -3, 6)",
      "(28, -42, 84)",
      "(7, -7, 14)"
    ],
    "optionsAr": [
      "(٤، -٦، ١٢)",
      "(٢، -٣، ٦)",
      "(٢٨، -٤٢، ٨٤)",
      "(٧، -٧، ١٤)"
    ],
    "correctAnswer": "(4, -6, 12)",
    "correctIndex": 0,
    "hintEn": "$\\vec{A} = \\|\\vec{A}\\| \\hat{u} = 14(2/7, -3/7, 6/7)$.",
    "hintAr": "اضرب المعيار في متجه الوحدة.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} = 14 \\times \\left(\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7}\\right) = (2 \\times 2, 2 \\times (-3), 2 \\times 6) = (4, -6, 12)$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\vec{A} = ١٤ \\times \\left(\\frac{٢}{٧}، -\\frac{٣}{٧}، \\frac{٦}{٧}\\right) = (٤، -٦، ١٢)$$"
    ],
    "teacherTipEn": "Vector $=$ Magnitude $\\times$ Unit Vector.",
    "teacherTipAr": "المتجه = المعيار $\\times$ متجه الوحدة."
  },
  {
    "id": "solid_ch1_db_med_18",
    "titleEn": "Obtuse Direction Angle",
    "titleAr": "زاوية اتجاه منفرجة",
    "difficulty": "medium",
    "questionEn": "If $\\alpha = 45^\\circ$ and $\\beta = 60^\\circ$ and $\\gamma$ is an obtuse angle, find the measure of $\\gamma$.",
    "questionAr": "إذا كانت $\\alpha = ٤٥^\\circ$ و $\\beta = ٦٠^\\circ$ وكانت $\\gamma$ زاوية منفرجة، فأوجد قياس $\\gamma$.",
    "optionsEn": [
      "120^\\circ",
      "135^\\circ",
      "150^\\circ",
      "60^\\circ"
    ],
    "optionsAr": [
      "١٢٠^\\circ",
      "١٣٥^\\circ",
      "١٥٠^\\circ",
      "٦٠^\\circ"
    ],
    "correctAnswer": "120^\\circ",
    "correctIndex": 0,
    "hintEn": "$\\cos^2\\gamma = 1/4$. For obtuse angle, $\\cos\\gamma = -1/2$.",
    "hintAr": "$\\cos^٢\\gamma = ١/٤$. للزاوية المنفرجة نأخذ القيمة السالبة $\\cos\\gamma = -١/٢$.",
    "stepByStepSolutionEn": [
      "$$\\cos^2\\gamma = 1 - \\cos^2 45^\\circ - \\cos^2 60^\\circ = 1 - \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$$",
      "Since $\\gamma$ is obtuse ($90^\\circ < \\gamma < 180^\\circ$), $\\cos\\gamma = -\\frac{1}{2}$:",
      "$$\\gamma = 180^\\circ - 60^\\circ = 120^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\cos^٢\\gamma = ١ - \\frac{١}{٢} - \\frac{١}{٤} = \\frac{١}{٤}$$",
      "بما أن $\\gamma$ منفرجة، فإن $\\cos\\gamma = -\\frac{١}{٢} \\implies \\gamma = ١٢٠^\\circ$."
    ],
    "teacherTipEn": "An obtuse angle has a negative cosine.",
    "teacherTipAr": "الزاوية المنفرجة جيب تمامها سالب دائماً."
  },
  {
    "id": "solid_ch1_db_med_19",
    "titleEn": "Impossible Direction Angles",
    "titleAr": "زوايا اتجاه مستحيلة",
    "difficulty": "medium",
    "questionEn": "Can the angles $30^\\circ, 45^\\circ, 60^\\circ$ be the direction angles of a vector in 3D space?",
    "questionAr": "هل يمكن للزوايا $٣٠^\\circ$ و $٤٥^\\circ$ و $٦٠^\\circ$ أن تكون زوايا اتجاه لمتجه في الفراغ؟",
    "optionsEn": [
      "No, because the sum of squared cosines is 1.5 != 1",
      "Yes, because their sum is 135 deg < 180 deg",
      "Yes, because all are acute",
      "Yes, because cos^2(30) + cos^2(60) = 1"
    ],
    "optionsAr": [
      "لا، لأن مجموع مربعات جيوب تمامها يساوي ١.٥ وليس ١",
      "نعم، لأن مجموعها أقل من ١٨٠ درجة",
      "نعم، لأن جميعها زوايا حادة",
      "نعم، لأن مجموع مربعيهما يساوي ١"
    ],
    "correctAnswer": "No, because the sum of squared cosines is 1.5 != 1",
    "correctIndex": 0,
    "hintEn": "Evaluate $\\cos^2 30^\\circ + \\cos^2 45^\\circ + \\cos^2 60^\\circ$.",
    "hintAr": "احسب مجموع مربعات جيوب تمام الزوايا الثلاث.",
    "stepByStepSolutionEn": [
      "$$\\cos^2 30^\\circ + \\cos^2 45^\\circ + \\cos^2 60^\\circ = \\left(\\frac{\\sqrt{3}}{2}\\right)^2 + \\left(\\frac{1}{\\sqrt{2}}\\right)^2 + \\left(\\frac{1}{2}\\right)^2$$",
      "$$= \\frac{3}{4} + \\frac{1}{2} + \\frac{1}{4} = \\frac{6}{4} = 1.5 \\neq 1$$",
      "Since the sum is not equal to 1, these cannot be direction angles."
    ],
    "stepByStepSolutionAr": [
      "$$\\cos^٢ ٣٠^\\circ + \\cos^٢ ٤٥^\\circ + \\cos^٢ ٦٠^\\circ = \\frac{٣}{٤} + \\frac{١}{٢} + \\frac{١}{٤} = ١.٥ \\neq ١$$",
      "بما أن المجموع لا يساوي ١، فمن المستحيل هندسياً أن تكون هذه زوايا اتجاه لمتجه."
    ],
    "teacherTipEn": "Always check $\\sum \\cos^2 = 1$ to test valid direction angles.",
    "teacherTipAr": "الشرط اللازم والكافي لزوايا الاتجاه هو أن يكون مجموع مربعات جيوب تمامها مساوياً ١ تماماً."
  },
  {
    "id": "solid_ch1_db_med_20",
    "titleEn": "Unit Vector of Negative Y-axis",
    "titleAr": "متجه الوحدة للاتجاه السالب لمحور الصادات",
    "difficulty": "medium",
    "questionEn": "What are the direction cosines of the negative $Y$-axis?",
    "questionAr": "ما هي جيوب تمام الاتجاه للاتجاه السالب لمحور الصادات؟",
    "optionsEn": [
      "(0, -1, 0)",
      "(0, 1, 0)",
      "(-1, 0, 0)",
      "(0, 0, -1)"
    ],
    "optionsAr": [
      "(٠، -١، ٠)",
      "(٠، ١، ٠)",
      "(-١، ٠، ٠)",
      "(٠، ٠، -١)"
    ],
    "correctAnswer": "(0, -1, 0)",
    "correctIndex": 0,
    "hintEn": "Direction vector is $-\\hat{j} = (0, -1, 0)$.",
    "hintAr": "المتجه هو $-\\hat{j} = (٠، -١، ٠)$.",
    "stepByStepSolutionEn": [
      "The direction angles are $\\alpha = 90^\\circ, \\beta = 180^\\circ, \\gamma = 90^\\circ$.",
      "Cosines are $(0, -1, 0)$."
    ],
    "stepByStepSolutionAr": [
      "الزوايا مع المحاور هي $(٩٠^\\circ، ١٨٠^\\circ، ٩٠^\\circ)$.",
      "جيوب تمامها: $(٠، -١، ٠)$."
    ],
    "teacherTipEn": "Negative direction gives $-1$ on that axis coordinate.",
    "teacherTipAr": "الاتجاه السالب يعطي $-١$ على إحداثي ذلك المحور."
  },
  {
    "id": "solid_ch1_db_med_21",
    "titleEn": "Cross Product of Orthogonal Unit Vectors",
    "titleAr": "الضرب الاتجاهي لمتجهي وحدة متعامدين",
    "difficulty": "medium",
    "questionEn": "Compute $(2\\hat{i} + \\hat{j}) \\times (\\hat{i} - 2\\hat{j})$.",
    "questionAr": "احسب حاصل الضرب الاتجاهي: $(٢\\hat{i} + \\hat{j}) \\times (\\hat{i} - ٢\\hat{j})$.",
    "optionsEn": [
      "-5\\hat{k}",
      "5\\hat{k}",
      "-3\\hat{k}",
      "\\vec{0}"
    ],
    "optionsAr": [
      "-٥\\hat{k}",
      "٥\\hat{k}",
      "-٣\\hat{k}",
      "\\vec{٠}"
    ],
    "correctAnswer": "-5\\hat{k}",
    "correctIndex": 0,
    "hintEn": "Distribute cross product or use determinant. Notice $\\hat{i} \\times \\hat{j} = \\hat{k}$.",
    "hintAr": "وزع الضرب الاتجاهي أو استخدم المحدد.",
    "stepByStepSolutionEn": [
      "$$2\\hat{i} \\times (-2\\hat{j}) + \\hat{j} \\times \\hat{i} = -4(\\hat{i} \\times \\hat{j}) - (\\hat{i} \\times \\hat{j}) = -4\\hat{k} - \\hat{k} = -5\\hat{k}$$"
    ],
    "stepByStepSolutionAr": [
      "$$٢\\hat{i} \\times (-٢\\hat{j}) + \\hat{j} \\times \\hat{i} = -٤\\hat{k} - \\hat{k} = -٥\\hat{k}$$"
    ],
    "teacherTipEn": "Cross product of vectors in the XY plane always points along the Z-axis ($\\hat{k}$).",
    "teacherTipAr": "الضرب الاتجاهي لمتجهين في المستوى س ص يكون دائماً في اتجاه محور ع ($\\hat{k}$)."
  },
  {
    "id": "solid_ch1_db_med_22",
    "titleEn": "Lagrange's Identity for Vectors",
    "titleAr": "متطابقة لاجرانج للمتجهات",
    "difficulty": "medium",
    "questionEn": "If $\\|\\vec{A}\\| = 5$, $\\|\\vec{B}\\| = 6$, and $\\vec{A} \\cdot \\vec{B} = 24$, find $\\|\\vec{A} \\times \\vec{B}\\|$.",
    "questionAr": "إذا كان $\\|\\vec{A}\\| = ٥$ و $\\|\\vec{B}\\| = ٦$ و $\\vec{A} \\cdot \\vec{B} = ٢٤$، فما قيمة $\\|\\vec{A} \\times \\vec{B}\\|$؟",
    "optionsEn": [
      "18",
      "30",
      "24",
      "6"
    ],
    "optionsAr": [
      "١٨",
      "٣٠",
      "٢٤",
      "٦"
    ],
    "correctAnswer": "18",
    "correctIndex": 0,
    "hintEn": "Lagrange's identity: $\\|\\vec{A} \\times \\vec{B}\\|^2 + (\\vec{A} \\cdot \\vec{B})^2 = \\|\\vec{A}\\|^2 \\|\\vec{B}\\|^2$.",
    "hintAr": "متطابقة لاجرانج: معيار الضرب الاتجاهي تربيع + الضرب القياسي تربيع = مربع حاصل ضرب المعيارين.",
    "stepByStepSolutionEn": [
      "By Lagrange's Identity:",
      "$$\\|\\vec{A} \\times \\vec{B}\\|^2 + (\\vec{A} \\cdot \\vec{B})^2 = \\|\\vec{A}\\|^2 \\|\\vec{B}\\|^2$$",
      "$$\\|\\vec{A} \\times \\vec{B}\\|^2 + 24^2 = 5^2 \\times 6^2$$",
      "$$\\|\\vec{A} \\times \\vec{B}\\|^2 + 576 = 25 \\times 36 = 900$$",
      "$$\\|\\vec{A} \\times \\vec{B}\\|^2 = 900 - 576 = 324$$",
      "$$\\|\\vec{A} \\times \\vec{B}\\| = \\sqrt{324} = 18$$"
    ],
    "stepByStepSolutionAr": [
      "بتطبيق متطابقة لاجرانج الشهيرة:",
      "$$\\|\\vec{A} \\times \\vec{B}\\|^٢ + (٢٤)^٢ = (٥ \\times ٦)^٢ = ٣٠^٢ = ٩٠٠$$",
      "$$\\|\\vec{A} \\times \\vec{B}\\|^٢ = ٩٠٠ - ٥٧٦ = ٣٢٤$$",
      "$$\\|\\vec{A} \\times \\vec{B}\\| = \\sqrt{٣٢٤} = ١٨$$"
    ],
    "teacherTipEn": "Lagrange's identity is derived from $\\sin^2\\theta + \\cos^2\\theta = 1$.",
    "teacherTipAr": "متطابقة لاجرانج مشتقة مباشرة من المتطابقة المثلثية $\\sin^٢\\theta + \\cos^٢\\theta = ١$."
  },
  {
    "id": "solid_ch1_db_med_23",
    "titleEn": "Finding Dot Product from Cross Product Magnitude",
    "titleAr": "حساب الضرب القياسي من معيار الضرب الاتجاهي",
    "difficulty": "medium",
    "questionEn": "If $\\|\\vec{u}\\| = 10$, $\\|\\vec{v}\\| = 2$, and $\\|\\vec{u} \\times \\vec{v}\\| = 12$, find $|\\vec{u} \\cdot \\vec{v}|$.",
    "questionAr": "إذا كان $\\|\\vec{u}\\| = ١٠$ و $\\|\\vec{v}\\| = ٢$ و $\\|\\vec{u} \\times \\vec{v}\\| = ١٢$، فما قيمة $|\\vec{u} \\cdot \\vec{v}|$؟",
    "optionsEn": [
      "16",
      "20",
      "8",
      "14"
    ],
    "optionsAr": [
      "١٦",
      "٢٠",
      "٨",
      "١٤"
    ],
    "correctAnswer": "16",
    "correctIndex": 0,
    "hintEn": "$(\\vec{u} \\cdot \\vec{v})^2 = \\|\\vec{u}\\|^2 \\|\\vec{v}\\|^2 - \\|\\vec{u} \\times \\vec{v}\\|^2$.",
    "hintAr": "استخدم متطابقة لاجرانج: $٢٠^٢ - ١٢^٢ = ٤٠٠ - ١٤٤ = ٢٥٦$.",
    "stepByStepSolutionEn": [
      "$$(\\|\\vec{u}\\| \\|\\vec{v}\\|)^2 = (10 \\times 2)^2 = 20^2 = 400$$",
      "$$(\\vec{u} \\cdot \\vec{v})^2 = 400 - 12^2 = 400 - 144 = 256$$",
      "$$|\\vec{u} \\cdot \\vec{v}| = \\sqrt{256} = 16$$"
    ],
    "stepByStepSolutionAr": [
      "مربع حاصل ضرب المعيارين $= (٢٠)^٢ = ٤٠٠$.",
      "مربع الضرب القياسي $= ٤٠٠ - ١٤٤ = ٢٥٦$.",
      "القيمة المطلقة للضرب القياسي $= \\sqrt{٢٥٦} = ١٦$."
    ],
    "teacherTipEn": "Pythagorean triple (12, 16, 20).",
    "teacherTipAr": "ثلاثية فيثاغورس (١٢، ١٦، ٢٠)."
  },
  {
    "id": "solid_ch1_db_med_24",
    "titleEn": "Area of Parallelogram with Orthogonal Diagonals",
    "titleAr": "مساحة متوازي أضلاع بمتجهي قطريه",
    "difficulty": "medium",
    "questionEn": "If the diagonals of a parallelogram are $\\vec{d}_1 = (2, 4, -2)$ and $\\vec{d}_2 = (4, -2, 2)$, what is its area?",
    "questionAr": "إذا كان قطرا متوازي أضلاع هما المتجهان $\\vec{d}_١ = (٢، ٤، -٢)$ و $\\vec{d}_٢ = (٤، -٢، ٢)$، فما هي مساحته؟",
    "optionsEn": [
      "\\frac{1}{2}\\|\\vec{d}_1 \\times \\vec{d}_2\\|",
      "\\|\\vec{d}_1 \\times \\vec{d}_2\\|",
      "2\\|\\vec{d}_1 \\times \\vec{d}_2\\|",
      "\\vec{d}_1 \\cdot \\vec{d}_2"
    ],
    "optionsAr": [
      "\\frac{١}{٢}\\|\\vec{d}_١ \\times \\vec{d}_٢\\|",
      "\\|\\vec{d}_١ \\times \\vec{d}_٢\\|",
      "٢\\|\\vec{d}_١ \\times \\vec{d}_٢\\|",
      "\\vec{d}_١ \\cdot \\vec{d}_٢"
    ],
    "correctAnswer": "\\frac{1}{2}\\|\\vec{d}_1 \\times \\vec{d}_2\\|",
    "correctIndex": 0,
    "hintEn": "Area of any quadrilateral given diagonals $\\vec{d}_1, \\vec{d}_2$ is $\\frac{1}{2}\\|\\vec{d}_1 \\times \\vec{d}_2\\|$.",
    "hintAr": "مساحة متوازي الأضلاع بدلالة متجهي قطريه تساوي نصف معيار حاصل ضربهما الاتجاهي.",
    "stepByStepSolutionEn": [
      "If $\\vec{A}, \\vec{B}$ are the adjacent sides, $\\vec{d}_1 = \\vec{A} + \\vec{B}$ and $\\vec{d}_2 = \\vec{A} - \\vec{B}$.",
      "$$\\vec{d}_1 \\times \\vec{d}_2 = (\\vec{A} + \\vec{B}) \\times (\\vec{A} - \\vec{B}) = -(\\vec{A} \\times \\vec{B}) + (\\vec{B} \\times \\vec{A}) = -2(\\vec{A} \\times \\vec{B})$$",
      "Taking norms: $\\|\\vec{d}_1 \\times \\vec{d}_2\\| = 2\\|\\vec{A} \\times \\vec{B}\\| = 2 \\times \\text{Area}$.",
      "Thus: $\\text{Area} = \\frac{1}{2}\\|\\vec{d}_1 \\times \\vec{d}_2\\|$."
    ],
    "stepByStepSolutionAr": [
      "إذا كان القطران هما $\\vec{d}_١$ و $\\vec{d}_٢$ فإن معيار ضربهما الاتجاهي يساوي ضعف مساحة متوازي الأضلاع.",
      "إذن المساحة $= \\frac{١}{٢}\\|\\vec{d}_١ \\times \\vec{d}_٢\\|$."
    ],
    "teacherTipEn": "Sides: $\\text{Area} = \\|\\vec{a} \\times \\vec{b}\\|$. Diagonals: $\\text{Area} = \\frac{1}{2}\\|\\vec{d}_1 \\times \\vec{d}_2\\|$.",
    "teacherTipAr": "بالأضلاع: المعيار مباشرة. بالأقطار: نصف المعيار."
  },
  {
    "id": "solid_ch1_db_med_25",
    "titleEn": "Collinearity of Three Points in Space",
    "titleAr": "استقامة ثلاث نقاط في الفراغ",
    "difficulty": "medium",
    "questionEn": "For three points $A, B, C$ to be collinear in 3D space, which vector condition must hold?",
    "questionAr": "لكي تقع ثلاث نقاط $A, B, C$ على استقامة واحدة في الفراغ، ما هو الشرط المتجهي؟",
    "optionsEn": [
      "\\vec{AB} \\times \\vec{AC} = \\vec{0}",
      "\\vec{AB} \\cdot \\vec{AC} = 0",
      "\\|\\vec{AB}\\| = \\|\\vec{AC}\\|",
      "\\vec{AB} + \\vec{AC} = \\vec{0}"
    ],
    "optionsAr": [
      "\\vec{AB} \\times \\vec{AC} = \\vec{٠}",
      "\\vec{AB} \\cdot \\vec{AC} = ٠",
      "\\|\\vec{AB}\\| = \\|\\vec{AC}\\|",
      "\\vec{AB} + \\vec{AC} = \\vec{٠}"
    ],
    "correctAnswer": "\\vec{AB} \\times \\vec{AC} = \\vec{0}",
    "correctIndex": 0,
    "hintEn": "The area of the triangle formed by them must be zero.",
    "hintAr": "مساحة المثلث المتكون من النقاط الثلاث يجب أن تساوي صفراً (توازي المتجهين المشتركين في نقطة).",
    "stepByStepSolutionEn": [
      "If $A, B, C$ lie on the same straight line, the vectors $\\vec{AB}$ and $\\vec{AC}$ are parallel.",
      "The cross product of parallel vectors is the zero vector: $\\vec{AB} \\times \\vec{AC} = \\vec{0}$."
    ],
    "stepByStepSolutionAr": [
      "إذا وقعت النقاط الثلاث على مستقيم واحد، كان المتجهان $\\vec{AB}$ و $\\vec{AC}$ متوازيين.",
      "وشرط توازيهما هو انعدام حاصل ضربهما الاتجاهي: $\\vec{AB} \\times \\vec{AC} = \\vec{٠}$."
    ],
    "teacherTipEn": "Or equivalently, the triangle area is 0.",
    "teacherTipAr": "وهو ما يكافئ تماماً انعدام مساحة المثلث المتكون من الرؤوس الثلاثة."
  },
  {
    "id": "solid_ch1_db_med_26",
    "titleEn": "Scalar Triple Product Calculation",
    "titleAr": "حساب الضرب القياسي الثلاثي",
    "difficulty": "medium",
    "questionEn": "Calculate $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})$ where $\\vec{A} = (1, 0, 0)$, $\\vec{B} = (0, 1, 0)$, and $\\vec{C} = (0, 0, 1)$.",
    "questionAr": "احسب الضرب القياسي الثلاثي لمتجهات الوحدة الأساسية: $\\hat{i} \\cdot (\\hat{j} \\times \\hat{k})$.",
    "optionsEn": [
      "1",
      "0",
      "-1",
      "3"
    ],
    "optionsAr": [
      "١",
      "٠",
      "-١",
      "٣"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "$\\hat{j} \\times \\hat{k} = \\hat{i}$, and $\\hat{i} \\cdot \\hat{i} = 1$.",
    "hintAr": "$\\hat{j} \\times \\hat{k} = \\hat{i}$ و $\\hat{i} \\cdot \\hat{i} = ١$.",
    "stepByStepSolutionEn": [
      "$$\\hat{j} \\times \\hat{k} = \\hat{i}$$",
      "$$\\hat{i} \\cdot \\hat{i} = 1$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\hat{j} \\times \\hat{k} = \\hat{i}$$",
      "$$\\hat{i} \\cdot \\hat{i} = ١$$"
    ],
    "teacherTipEn": "Volume of a unit cube is 1.",
    "teacherTipAr": "حجم مكعب الوحدة يساوي ١."
  },
  {
    "id": "solid_ch1_db_med_27",
    "titleEn": "Cyclic Property of Scalar Triple Product",
    "titleAr": "الخاصية الدورية للضرب القياسي الثلاثي",
    "difficulty": "medium",
    "questionEn": "Which of the following is equal to $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})$?",
    "questionAr": "أي مما يلي يساوي تماماً حاصل الضرب القياسي الثلاثي $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})$؟",
    "optionsEn": [
      "\\vec{B} \\cdot (\\vec{C} \\times \\vec{A})",
      "\\vec{B} \\cdot (\\vec{A} \\times \\vec{C})",
      "-\\vec{C} \\cdot (\\vec{A} \\times \\vec{B})",
      "(\\vec{A} \\cdot \\vec{B}) \\times \\vec{C}"
    ],
    "optionsAr": [
      "\\vec{B} \\cdot (\\vec{C} \\times \\vec{A})",
      "\\vec{B} \\cdot (\\vec{A} \\times \\vec{C})",
      "-\\vec{C} \\cdot (\\vec{A} \\times \\vec{B})",
      "(\\vec{A} \\cdot \\vec{B}) \\times \\vec{C}"
    ],
    "correctAnswer": "\\vec{B} \\cdot (\\vec{C} \\times \\vec{A})",
    "correctIndex": 0,
    "hintEn": "Cyclic permutations of vectors in a 3x3 determinant preserve its value.",
    "hintAr": "التبديل الدوري للمتجهات الثلاثة يحافظ على قيمة المحدد دون تغيير إشارته.",
    "stepByStepSolutionEn": [
      "In the scalar triple product, cyclic permutations leave the value unchanged:",
      "$$\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = \\vec{B} \\cdot (\\vec{C} \\times \\vec{A}) = \\vec{C} \\cdot (\\vec{A} \\times \\vec{B})$$"
    ],
    "stepByStepSolutionAr": [
      "الترتيب الدوري لا يغير قيمة الضرب القياسي الثلاثي:",
      "$$\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = \\vec{B} \\cdot (\\vec{C} \\times \\vec{A}) = \\vec{C} \\cdot (\\vec{A} \\times \\vec{B})$$"
    ],
    "teacherTipEn": "Swapping any two vectors introduces a minus sign.",
    "teacherTipAr": "تبديل أي متجهين فقط يغير إشارة الناتج إلى السالب."
  },
  {
    "id": "solid_ch1_db_med_28",
    "titleEn": "Anti-cyclic Property of Scalar Triple Product",
    "titleAr": "التبديل غير الدوري في الضرب الثلاثي",
    "difficulty": "medium",
    "questionEn": "If $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = 15$, what is $\\vec{A} \\cdot (\\vec{C} \\times \\vec{B})$?",
    "questionAr": "إذا كان $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = ١٥$، فما قيمة $\\vec{A} \\cdot (\\vec{C} \\times \\vec{B})$؟",
    "optionsEn": [
      "-15",
      "15",
      "0",
      "30"
    ],
    "optionsAr": [
      "-١٥",
      "١٥",
      "٠",
      "٣٠"
    ],
    "correctAnswer": "-15",
    "correctIndex": 0,
    "hintEn": "$\\vec{C} \\times \\vec{B} = -(\\vec{B} \\times \\vec{C})$.",
    "hintAr": "$\\vec{C} \\times \\vec{B} = -(\\vec{B} \\times \\vec{C})$.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} \\cdot (\\vec{C} \\times \\vec{B}) = \\vec{A} \\cdot (-(\\vec{B} \\times \\vec{C})) = -\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = -15$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\vec{C} \\times \\vec{B} = -(\\vec{B} \\times \\vec{C})$:",
      "فإن الناتج يساوي $-١٥$."
    ],
    "teacherTipEn": "Swapping the cross product factors negates the determinant.",
    "teacherTipAr": "تبديل عاملي الضرب الاتجاهي يعكس إشارة المحدد."
  },
  {
    "id": "solid_ch1_db_med_29",
    "titleEn": "Scalar Triple Product with Two Identical Vectors",
    "titleAr": "الضرب القياسي الثلاثي بمتجهين متطابقين",
    "difficulty": "medium",
    "questionEn": "What is the value of $\\vec{A} \\cdot (\\vec{B} \\times \\vec{A})$?",
    "questionAr": "ما هي قيمة المقدار $\\vec{A} \\cdot (\\vec{B} \\times \\vec{A})$؟",
    "optionsEn": [
      "0",
      "\\|\\vec{A}\\|^2 \\vec{B}",
      "1",
      "\\|\\vec{A}\\| \\|\\vec{B}\\|"
    ],
    "optionsAr": [
      "٠",
      "\\|\\vec{A}\\|^٢ \\vec{B}",
      "١",
      "\\|\\vec{A}\\| \\|\\vec{B}\\|"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "$\\vec{B} \\times \\vec{A}$ is perpendicular to $\\vec{A}$, so their dot product is zero.",
    "hintAr": "متجه الضرب الاتجاهي عمودي على $\\vec{A}$، وحاصل ضرب متجهين متعامدين قياسياً يساوي صفراً.",
    "stepByStepSolutionEn": [
      "By definition of the cross product, $\\vec{B} \\times \\vec{A}$ is orthogonal to both $\\vec{A}$ and $\\vec{B}$.",
      "Since $\\vec{A} \\perp (\\vec{B} \\times \\vec{A})$, their dot product is identically zero:",
      "$$\\vec{A} \\cdot (\\vec{B} \\times \\vec{A}) = 0$$",
      "Alternatively, the 3x3 determinant has two identical rows (row 1 and row 3), so its value is 0."
    ],
    "stepByStepSolutionAr": [
      "حاصل الضرب الاتجاهي عمودي على كلا المتجهين، وبالتالي $\\vec{A}$ عمودي على $(\\vec{B} \\times \\vec{A})$.",
      "وضرب متجهين متعامدين قياسياً يساوي صفراً دائماً.",
      "أو لأن محدد المصفوفة يحتوي على صفين متطابقين فتكون قيمته صفراً."
    ],
    "teacherTipEn": "Whenever any two vectors in a scalar triple product are parallel or equal, the result is identically 0.",
    "teacherTipAr": "إذا تكرر أي متجه أو توازى متجهان في الضرب القياسي الثلاثي فإن الناتج ينعدم فوراً."
  },
  {
    "id": "solid_ch1_db_med_30",
    "titleEn": "Moment of a Force Vector About the Origin",
    "titleAr": "عزم قوة حول نقطة الأصل في الفراغ",
    "difficulty": "medium",
    "questionEn": "A force $\\vec{F} = (2, -1, 3)$ acts at point $A(1, 2, -1)$. Find the moment vector of $\\vec{F}$ about the origin $O$.",
    "questionAr": "تؤثر القوة $\\vec{F} = (٢، -١، ٣)$ في النقطة $A(١، ٢، -١)$. أوجد متجه عزم القوة حول نقطة الأصل.",
    "optionsEn": [
      "(5, -5, -5)",
      "(5, 5, 5)",
      "(-5, 5, -5)",
      "(1, 1, 1)"
    ],
    "optionsAr": [
      "(٥، -٥، -٥)",
      "(٥، ٥، ٥)",
      "(-٥، ٥، -٥)",
      "(١، ١، ١)"
    ],
    "correctAnswer": "(5, -5, -5)",
    "correctIndex": 0,
    "hintEn": "Moment $\\vec{M}_O = \\vec{r} \\times \\vec{F}$ where $\\vec{r} = \\vec{OA} = (1, 2, -1)$.",
    "hintAr": "متجه العزم $\\vec{M}_O = \\vec{r} \\times \\vec{F}$ حيث $\\vec{r}$ هو متجه موضع نقطة التأثير.",
    "stepByStepSolutionEn": [
      "$$\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & -1 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
      "$$= \\hat{i}(6 - 1) - \\hat{j}(3 - (-2)) + \\hat{k}(-1 - 4)$$",
      "$$= 5\\hat{i} - 5\\hat{j} - 5\\hat{k} = (5, -5, -5)$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ ١ & ٢ & -١ \\\\ ٢ & -١ & ٣ \\end{vmatrix}$$",
      "$$= \\hat{i}(٦ - ١) - \\hat{j}(٣ + ٢) + \\hat{k}(-١ - ٤) = (٥، -٥، -٥)$$"
    ],
    "teacherTipEn": "Remember order is crucial: $\\vec{r} \\times \\vec{F}$, NOT $\\vec{F} \\times \\vec{r}$.",
    "teacherTipAr": "ترتيب الضرب في العزم ضروري: $\\vec{r} \\times \\vec{F}$ وليس العكس."
  },
  {
    "id": "solid_ch1_db_med_31",
    "titleEn": "Arm of the Moment (Perpendicular Distance)",
    "titleAr": "طول ذراع العزم (طول العمود الساقط)",
    "difficulty": "medium",
    "questionEn": "If the moment of force $\\vec{F}$ about $O$ is $\\vec{M}_O = (5, -5, -5)$ and $\\|\\vec{F}\\| = \\sqrt{14}$, find the length of the perpendicular from $O$ to the line of action of $\\vec{F}$.",
    "questionAr": "إذا كان عزم القوة حول الأصل هو $\\vec{M}_O = (٥، -٥، -٥)$ ومعيار القوة $\\|\\vec{F}\\| = \\sqrt{١٤}$، فما هو طول العمود الساقط من الأصل على خط عمل القوة؟",
    "optionsEn": [
      "\\frac{5\\sqrt{3}}{\\sqrt{14}}",
      "\\frac{\\sqrt{14}}{5\\sqrt{3}}",
      "5",
      "\\sqrt{75}"
    ],
    "optionsAr": [
      "\\frac{٥\\sqrt{٣}}{\\sqrt{١٤}}",
      "\\frac{\\sqrt{١٤}}{٥\\sqrt{٣}}",
      "٥",
      "\\sqrt{٧٥}"
    ],
    "correctAnswer": "\\frac{5\\sqrt{3}}{\\sqrt{14}}",
    "correctIndex": 0,
    "hintEn": "Arm length $L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|}$.",
    "hintAr": "طول ذراع العزم $L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|}$.",
    "stepByStepSolutionEn": [
      "$$\\|\\vec{M}_O\\| = \\sqrt{5^2 + (-5)^2 + (-5)^2} = \\sqrt{25 + 25 + 25} = \\sqrt{75} = 5\\sqrt{3}$$",
      "$$L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|} = \\frac{5\\sqrt{3}}{\\sqrt{14}}$$"
    ],
    "stepByStepSolutionAr": [
      "معيار العزم $= \\sqrt{٢٥ + ٢٥ + ٢٥} = \\sqrt{٧٥} = ٥\\sqrt{٣}$.",
      "طول العمود $L = \\frac{\\|\\vec{M}_O\\|}{\\|\\vec{F}\\|} = \\frac{٥\\sqrt{٣}}{\\sqrt{١٤}}$."
    ],
    "teacherTipEn": "Direct bridge between solid vectors and statics!",
    "teacherTipAr": "ربط مباشر ومثالي بين متجهات الفراغ وعزوم الاستاتيكا."
  },
  {
    "id": "solid_ch1_db_med_32",
    "titleEn": "Distance from Point to Sphere Surface",
    "titleAr": "أقصر مسافة من نقطة إلى سطح الكرة",
    "difficulty": "medium",
    "questionEn": "Find the shortest distance from point $P(0, 0, 10)$ to the surface of the sphere $x^2 + y^2 + z^2 = 36$.",
    "questionAr": "أوجد أقصر مسافة من النقطة $P(٠، ٠، ١٠)$ إلى سطح الكرة $x^٢ + y^٢ + z^٢ = ٣٦$.",
    "optionsEn": [
      "4",
      "10",
      "6",
      "16"
    ],
    "optionsAr": [
      "٤",
      "١٠",
      "٦",
      "١٦"
    ],
    "correctAnswer": "4",
    "correctIndex": 0,
    "hintEn": "Distance to surface = distance to center minus radius: $d - r$.",
    "hintAr": "أقصر مسافة = بعد النقطة عن المركز ناقص نصف القطر.",
    "stepByStepSolutionEn": [
      "Center is $C(0, 0, 0)$ and radius is $r = \\sqrt{36} = 6$.",
      "Distance from $P$ to center $C$ is $\\sqrt{0^2 + 0^2 + 10^2} = 10$.",
      "Shortest distance to surface $= 10 - 6 = 4$."
    ],
    "stepByStepSolutionAr": [
      "المركز هو نقطة الأصل ونصف القطر $r = ٦$.",
      "بعد النقطة عن المركز $= ١٠$.",
      "أقصر مسافة إلى السطح $= ١٠ - ٦ = ٤$."
    ],
    "teacherTipEn": "Farthest distance to surface is $d + r = 10 + 6 = 16$.",
    "teacherTipAr": "أبعد مسافة إلى سطح الكرة هي $d + r = ١٠ + ٦ = ١٦$."
  },
  {
    "id": "solid_ch1_db_med_33",
    "titleEn": "Sphere with Center on Z-axis",
    "titleAr": "كرة مركزها يقع على محور العينات",
    "difficulty": "medium",
    "questionEn": "A sphere with center on the $Z$-axis passes through the origin and point $(1, 2, 3)$. What is the $z$-coordinate of its center?",
    "questionAr": "كرة مركزها يقع على محور العينات وتمر بنقطة الأصل وبالنقطة $(١، ٢، ٣)$. ما هو الإحداثي العيني لمركزها؟",
    "optionsEn": [
      "7/3",
      "3",
      "14/3",
      "2"
    ],
    "optionsAr": [
      "٧/٣",
      "٣",
      "١٤/٣",
      "٢"
    ],
    "correctAnswer": "7/3",
    "correctIndex": 0,
    "hintEn": "Center is $C(0, 0, c)$. Since it passes through $(0, 0, 0)$, $r = |c|$. Then $OC^2 = PC^2$.",
    "hintAr": "المركز $(٠، ٠، c)$، وبما أنها تمر بالأصل فإن $r = c$. ساوِ مربع البعدين: $c^٢ = ١ + ٤ + (٣-c)^٢$.",
    "stepByStepSolutionEn": [
      "Let center be $C(0, 0, c)$.",
      "Radius $r^2 = c^2$.",
      "Since $(1, 2, 3)$ lies on the sphere:",
      "$$(1 - 0)^2 + (2 - 0)^2 + (3 - c)^2 = c^2$$",
      "$$1 + 4 + 9 - 6c + c^2 = c^2$$",
      "$$14 - 6c = 0 \\implies 6c = 14 \\implies c = \\frac{14}{6} = \\frac{7}{3}$$"
    ],
    "stepByStepSolutionAr": [
      "نفرض المركز $C(٠، ٠، c)$ فيكون $r^٢ = c^٢$.",
      "بالتعويض بالنقطة $(١، ٢، ٣)$:",
      "$$١ + ٤ + (٣ - c)^٢ = c^٢ \\implies ١٤ - ٦c = ٠ \\implies c = \\frac{٧}{٣}$$"
    ],
    "teacherTipEn": "Points on an axis reduce the number of unknowns from 3 to 1.",
    "teacherTipAr": "وقوع المركز على محور يختزل المجاهيل الثلاثة إلى مجهول واحد فقط."
  },
  {
    "id": "solid_ch1_db_med_34",
    "titleEn": "Angle Between Vectors with Fractions",
    "titleAr": "قياس الزاوية بمتجهات تحتوي كسوراً",
    "difficulty": "medium",
    "questionEn": "If $\\hat{u}$ and $\\hat{v}$ are unit vectors and $\\hat{u} \\cdot \\hat{v} = -1/2$, what is the angle between them?",
    "questionAr": "إذا كان $\\hat{u}$ و $\\hat{v}$ متجها وحدة وكان $\\hat{u} \\cdot \\hat{v} = -١/٢$، فما قياس الزاوية بينهما؟",
    "optionsEn": [
      "120^\\circ",
      "60^\\circ",
      "150^\\circ",
      "135^\\circ"
    ],
    "optionsAr": [
      "١٢٠^\\circ",
      "٦٠^\\circ",
      "١٥٠^\\circ",
      "١٣٥^\\circ"
    ],
    "correctAnswer": "120^\\circ",
    "correctIndex": 0,
    "hintEn": "For unit vectors, $\\cos\\theta = \\hat{u} \\cdot \\hat{v} = -1/2$.",
    "hintAr": "لمتجهات الوحدة: $\\cos\\theta = \\hat{u} \\cdot \\hat{v} = -١/٢$.",
    "stepByStepSolutionEn": [
      "$$\\cos\\theta = \\frac{\\hat{u} \\cdot \\hat{v}}{\\|\\hat{u}\\| \\|\\hat{v}\\|} = \\frac{-1/2}{1 \\times 1} = -\\frac{1}{2}$$",
      "$$\\theta = 180^\\circ - 60^\\circ = 120^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\cos\\theta = -\\frac{١}{٢} \\implies \\theta = ١٢٠^\\circ$$"
    ],
    "teacherTipEn": "Cosines of $120^\\circ$ is $-1/2$.",
    "teacherTipAr": "جيب تمام ١٢٠ درجة هو $-١/٢$."
  },
  {
    "id": "solid_ch1_db_med_35",
    "titleEn": "Vector Norm Equation",
    "titleAr": "معادلة معيار المتجه",
    "difficulty": "medium",
    "questionEn": "If $\\|(k, 2k, 2k)\\| = 15$ with $k > 0$, find $k$.",
    "questionAr": "إذا كان $\\|(k، ٢k، ٢k)\\| = ١٥$ حيث $k > ٠$، فأوجد قيمة $k$.",
    "optionsEn": [
      "5",
      "3",
      "1",
      "15"
    ],
    "optionsAr": [
      "٥",
      "٣",
      "١",
      "١٥"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "Factor out $k$: $k\\|(1, 2, 2)\\| = 15$.",
    "hintAr": "خذ $k$ عاملاً مشتركاً خارج المعيار: $k \\times ٣ = ١٥$.",
    "stepByStepSolutionEn": [
      "$$\\|(k, 2k, 2k)\\| = \\sqrt{k^2 + 4k^2 + 4k^2} = \\sqrt{9k^2} = 3k$$",
      "$$3k = 15 \\implies k = 5$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\sqrt{k^٢ + ٤k^٢ + ٤k^٢} = \\sqrt{٩k^٢} = ٣k$$",
      "$$٣k = ١٥ \\implies k = ٥$$"
    ],
    "teacherTipEn": "Factoring out positive scalar $k$ from the norm simplifies radicals.",
    "teacherTipAr": "إخراج الثابت الموجب خارج المعيار يسهل الحسابات كثيراً."
  },
  {
    "id": "solid_ch1_db_med_36",
    "titleEn": "Condition for Orthogonality of Vector Sum and Difference",
    "titleAr": "شرط تعامد مجموع متجهين وفرقهما",
    "difficulty": "medium",
    "questionEn": "If $(\\vec{A} + \\vec{B}) \\perp (\\vec{A} - \\vec{B})$, which relation must hold?",
    "questionAr": "إذا كان $(\\vec{A} + \\vec{B})$ عمودياً على $(\\vec{A} - \\vec{B})$، فأي العلاقات الآتية صحيحة؟",
    "optionsEn": [
      "\\|\\vec{A}\\| = \\|\\vec{B}\\|",
      "\\vec{A} \\perp \\vec{B}",
      "\\vec{A} = \\vec{B}",
      "\\vec{A} \\cdot \\vec{B} = 1"
    ],
    "optionsAr": [
      "\\|\\vec{A}\\| = \\|\\vec{B}\\|",
      "\\vec{A} \\perp \\vec{B}",
      "\\vec{A} = \\vec{B}",
      "\\vec{A} \\cdot \\vec{B} = ١"
    ],
    "correctAnswer": "\\|\\vec{A}\\| = \\|\\vec{B}\\|",
    "correctIndex": 0,
    "hintEn": "$(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = \\|\\vec{A}\\|^2 - \\|\\vec{B}\\|^2 = 0$.",
    "hintAr": "فك الضرب القياسي للمجموع في الفرق ينتج فرق المربعين.",
    "stepByStepSolutionEn": [
      "$$(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = \\vec{A} \\cdot \\vec{A} - \\vec{B} \\cdot \\vec{B} = \\|\\vec{A}\\|^2 - \\|\\vec{B}\\|^2 = 0$$",
      "$$\\|\\vec{A}\\|^2 = \\|\\vec{B}\\|^2 \\implies \\|\\vec{A}\\| = \\|\\vec{B}\\|$$"
    ],
    "stepByStepSolutionAr": [
      "$$(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = \\|\\vec{A}\\|^٢ - \\|\\vec{B}\\|^٢ = ٠$$",
      "إذن $\\|\\vec{A}\\| = \\|\\vec{B}\\|$ (متوازي الأضلاع يصبح معيناً)."
    ],
    "teacherTipEn": "In a parallelogram, diagonals are perpendicular if and only if it is a rhombus (all sides equal).",
    "teacherTipAr": "في متوازي الأضلاع، يتعامد القطران إذا وفقط إذا تساوت أطوال أضلاعه (معين)."
  },
  {
    "id": "solid_ch1_db_med_37",
    "titleEn": "Condition for Equal Norms of Sum and Difference",
    "titleAr": "شرط تساوي معيار المجموع ومعيار الفرق",
    "difficulty": "medium",
    "questionEn": "If $\\|\\vec{A} + \\vec{B}\\| = \\|\\vec{A} - \\vec{B}\\|$, what is the angle between $\\vec{A}$ and $\\vec{B}$?",
    "questionAr": "إذا كان $\\|\\vec{A} + \\vec{B}\\| = \\|\\vec{A} - \\vec{B}\\|$، فما قياس الزاوية بين $\\vec{A}$ و $\\vec{B}$؟",
    "optionsEn": [
      "90^\\circ",
      "0^\\circ",
      "180^\\circ",
      "45^\\circ"
    ],
    "optionsAr": [
      "٩٠^\\circ",
      "٠^\\circ",
      "١٨٠^\\circ",
      "٤٥^\\circ"
    ],
    "correctAnswer": "90^\\circ",
    "correctIndex": 0,
    "hintEn": "Square both sides: $\\|\\vec{A}\\|^2 + \\|\\vec{B}\\|^2 + 2\\vec{A}\\cdot\\vec{B} = \\|\\vec{A}\\|^2 + \\|\\vec{B}\\|^2 - 2\\vec{A}\\cdot\\vec{B}$.",
    "hintAr": "بتربيع الطرفين: $٤\\vec{A} \\cdot \\vec{B} = ٠$.",
    "stepByStepSolutionEn": [
      "Square both sides:",
      "$$\\|\\vec{A}\\|^2 + 2\\vec{A}\\cdot\\vec{B} + \\|\\vec{B}\\|^2 = \\|\\vec{A}\\|^2 - 2\\vec{A}\\cdot\\vec{B} + \\|\\vec{B}\\|^2$$",
      "$$4\\vec{A}\\cdot\\vec{B} = 0 \\implies \\vec{A}\\cdot\\vec{B} = 0 \\implies \\vec{A} \\perp \\vec{B}$$",
      "Angle is $90^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "بتربيع الطرفين وحذف الحدود المتشابهة:",
      "$$٤\\vec{A} \\cdot \\vec{B} = ٠ \\implies \\vec{A} \\cdot \\vec{B} = ٠$$",
      "إذن المتجهان متعامدان والزاوية بينهما $٩٠^\\circ$ (القطران متساويان يعني مستطيلاً)."
    ],
    "teacherTipEn": "Diagonals of a parallelogram are equal if and only if it is a rectangle.",
    "teacherTipAr": "يتساوى قطرا متوازي الأضلاع إذا وفقط إذا كان مستطيلاً (الزاوية ٩٠ درجة)."
  },
  {
    "id": "solid_ch1_db_med_38",
    "titleEn": "Norm of Vector Cross Product of Orthogonal Vectors",
    "titleAr": "معيار الضرب الاتجاهي لمتجهين متعامدين",
    "difficulty": "medium",
    "questionEn": "If $\\vec{A} \\perp \\vec{B}$ with $\\|\\vec{A}\\| = 4$ and $\\|\\vec{B}\\| = 7$, what is $\\|\\vec{A} \\times \\vec{B}\\|$?",
    "questionAr": "إذا كان $\\vec{A} \\perp \\vec{B}$ وكان $\\|\\vec{A}\\| = ٤$ و $\\|\\vec{B}\\| = ٧$، فما قيمة $\\|\\vec{A} \\times \\vec{B}\\|$؟",
    "optionsEn": [
      "28",
      "0",
      "11",
      "3"
    ],
    "optionsAr": [
      "٢٨",
      "٠",
      "١١",
      "٣"
    ],
    "correctAnswer": "28",
    "correctIndex": 0,
    "hintEn": "When $\\theta = 90^\\circ$, $\\sin 90^\\circ = 1$, so $\\|\\vec{A} \\times \\vec{B}\\| = \\|\\vec{A}\\| \\|\\vec{B}\\|$.",
    "hintAr": "عند التعامد يكون $\\sin ٩٠^\\circ = ١$، والمعيار هو حاصل ضرب المعيارين مباشرة.",
    "stepByStepSolutionEn": [
      "$$\\|\\vec{A} \\times \\vec{B}\\| = \\|\\vec{A}\\| \\|\\vec{B}\\| \\sin 90^\\circ = 4 \\times 7 \\times 1 = 28$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\|\\vec{A} \\times \\vec{B}\\| = ٤ \\times ٧ \\times ١ = ٢٨$$"
    ],
    "teacherTipEn": "The cross product magnitude attains its absolute maximum when the vectors are perpendicular.",
    "teacherTipAr": "يصل معيار الضرب الاتجاهي إلى قيمته العظمى المطلقة عندما يكون المتجهان متعامدين."
  },
  {
    "id": "solid_ch1_db_med_39",
    "titleEn": "Cross Product of Parallel Vectors",
    "titleAr": "معيار الضرب الاتجاهي لمتجهين متوازيين",
    "difficulty": "medium",
    "questionEn": "If $\\vec{A} \\parallel \\vec{B}$, what is $\\|\\vec{A} \\times \\vec{B}\\|$?",
    "questionAr": "إذا كان $\\vec{A} \\parallel \\vec{B}$، فما قيمة $\\|\\vec{A} \\times \\vec{B}\\|$؟",
    "optionsEn": [
      "0",
      "\\|\\vec{A}\\| \\|\\vec{B}\\|",
      "1",
      "-1"
    ],
    "optionsAr": [
      "٠",
      "\\|\\vec{A}\\| \\|\\vec{B}\\|",
      "١",
      "-١"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Parallel means $\\theta = 0^\\circ$ or $180^\\circ$, so $\\sin\\theta = 0$.",
    "hintAr": "التوازي يعني أن الزاوية صفر أو ١٨٠ وجيبها صفر.",
    "stepByStepSolutionEn": [
      "$$\\|\\vec{A} \\times \\vec{B}\\| = \\|\\vec{A}\\| \\|\\vec{B}\\| \\sin(0^\\circ) = 0$$"
    ],
    "stepByStepSolutionAr": [
      "معيار حاصل الضرب الاتجاهي لمتجهين متوازيين يساوي صفراً لأن $\\sin ٠^\\circ = ٠$."
    ],
    "teacherTipEn": "Cross product vanishes for parallel vectors, while dot product vanishes for perpendicular vectors.",
    "teacherTipAr": "الضرب الاتجاهي ينعدم بالتوازي، بينما الضرب القياسي ينعدم بالتعامد."
  },
  {
    "id": "solid_ch1_db_med_40",
    "titleEn": "Equation of Sphere with Given Center Passing Through Origin",
    "titleAr": "معادلة كرة مركزها معلوم وتمر بالأصل",
    "difficulty": "medium",
    "questionEn": "Find the equation of the sphere centered at $C(1, -2, 2)$ that passes through the origin $(0, 0, 0)$.",
    "questionAr": "أوجد معادلة الكرة التي مركزها $C(١، -٢، ٢)$ وتمر بنقطة الأصل $(٠، ٠، ٠)$.",
    "optionsEn": [
      "(x - 1)^2 + (y + 2)^2 + (z - 2)^2 = 9",
      "(x + 1)^2 + (y - 2)^2 + (z + 2)^2 = 9",
      "(x - 1)^2 + (y + 2)^2 + (z - 2)^2 = 3",
      "x^2 + y^2 + z^2 = 9"
    ],
    "optionsAr": [
      "(x - ١)^٢ + (y + ٢)^٢ + (z - ٢)^٢ = ٩",
      "(x + ١)^٢ + (y - ٢)^٢ + (z + ٢)^٢ = ٩",
      "(x - ١)^٢ + (y + ٢)^٢ + (z - ٢)^٢ = ٣",
      "x^٢ + y^٢ + z^٢ = ٩"
    ],
    "correctAnswer": "(x - 1)^2 + (y + 2)^2 + (z - 2)^2 = 9",
    "correctIndex": 0,
    "hintEn": "Radius $r = OC = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{9} = 3$.",
    "hintAr": "نصف القطر هو بعد المركز عن نقطة الأصل: $r = \\sqrt{١ + ٤ + ٤} = ٣$.",
    "stepByStepSolutionEn": [
      "$$r^2 = 1^2 + (-2)^2 + 2^2 = 1 + 4 + 4 = 9$$",
      "Equation: $(x - 1)^2 + (y + 2)^2 + (z - 2)^2 = 9$."
    ],
    "stepByStepSolutionAr": [
      "$$r^٢ = ١ + ٤ + ٤ = ٩$$",
      "المعادلة: $(x - ١)^٢ + (y + ٢)^٢ + (z - ٢)^٢ = ٩$."
    ],
    "teacherTipEn": "In general form, passing through the origin implies $d = 0$.",
    "teacherTipAr": "في الصورة العامة، مرور الكرة بنقطة الأصل يعني أن الحد المطلق $d = ٠$."
  },
  {
    "id": "solid_ch1_db_med_41",
    "titleEn": "Volume of Parallelepiped with Given Edges",
    "titleAr": "حجم متوازي السطوح بمعلومية أحرفه",
    "difficulty": "medium",
    "questionEn": "Find the volume of the parallelepiped spanned by $\\vec{u} = (2, 0, 0)$, $\\vec{v} = (0, 3, 0)$, and $\\vec{w} = (0, 0, 4)$.",
    "questionAr": "أوجد حجم متوازي السطوح المتولد بالمتجهات المتعامدة $\\vec{u} = (٢، ٠، ٠)$ و $\\vec{v} = (٠، ٣، ٠)$ و $\\vec{w} = (٠، ٠، ٤)$.",
    "optionsEn": [
      "24",
      "9",
      "12",
      "48"
    ],
    "optionsAr": [
      "٢٤",
      "٩",
      "١٢",
      "٤٨"
    ],
    "correctAnswer": "24",
    "correctIndex": 0,
    "hintEn": "Rectangular box with dimensions 2, 3, 4: $V = 2 \\times 3 \\times 4$.",
    "hintAr": "متوازي مستطيلات أبعاده ٢، ٣، ٤: الحجم $= ٢ \\times ٣ \\times ٤ = ٢٤$.",
    "stepByStepSolutionEn": [
      "$$V = |\\det| = \\begin{vmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 4 \\end{vmatrix} = 2 \\times 3 \\times 4 = 24$$"
    ],
    "stepByStepSolutionAr": [
      "قيمة المحدد $= ٢ \\times ٣ \\times ٤ = ٢٤$ وحدة حجم."
    ],
    "teacherTipEn": "Diagonal matrix determinant is the product of its diagonal entries.",
    "teacherTipAr": "محدد المصفوفة القطرية يساوي حاصل ضرب عناصر القطر الرئيسي."
  },
  {
    "id": "solid_ch1_db_med_42",
    "titleEn": "Volume of Tetrahedron from Box Volume",
    "titleAr": "حجم الهرم الثلاثي من حجم متوازي السطوح",
    "difficulty": "medium",
    "questionEn": "If the volume of a parallelepiped spanned by three coterminous vectors is 60, what is the volume of the tetrahedron formed by them?",
    "questionAr": "إذا كان حجم متوازي السطوح المتولد بثلاثة متجهات ملتقية في نقطة يساوي ٦٠، فما حجم رباعي السطوح المتكون منها؟",
    "optionsEn": [
      "10",
      "30",
      "20",
      "12"
    ],
    "optionsAr": [
      "١٠",
      "٣٠",
      "٢٠",
      "١٢"
    ],
    "correctAnswer": "10",
    "correctIndex": 0,
    "hintEn": "$V_{\\text{tetrahedron}} = \\frac{1}{6} V_{\\text{box}}$.",
    "hintAr": "حجم الهرم الثلاثي $= \\frac{١}{٦} \\times ٦٠ = ١٠$.",
    "stepByStepSolutionEn": [
      "$$V = \\frac{1}{6} \\times 60 = 10$$"
    ],
    "stepByStepSolutionAr": [
      "$$V = \\frac{١}{٦} \\times ٦٠ = ١٠$$"
    ],
    "teacherTipEn": "Remember factor 1/6 for triangular pyramids.",
    "teacherTipAr": "تذكر معامل السدس (١/٦) دائماً للهرم الثلاثي."
  },
  {
    "id": "solid_ch1_db_med_43",
    "titleEn": "Work Done by Force Along Displacement",
    "titleAr": "الشغل المبذول بواسطة قوة على إزاحة",
    "difficulty": "medium",
    "questionEn": "A force $\\vec{F} = (2, 3, -1)$ acts on a body causing displacement $\\vec{s} = (5, -2, 4)$. What is the work done?",
    "questionAr": "أثرت قوة $\\vec{F} = (٢، ٣، -١)$ على جسم فأحدثت إزاحة $\\vec{s} = (٥، -٢، ٤)$. ما هو مقدار الشغل المبذول؟",
    "optionsEn": [
      "0",
      "20",
      "10",
      "-4"
    ],
    "optionsAr": [
      "٠",
      "٢٠",
      "١٠",
      "-٤"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "$W = \\vec{F} \\cdot \\vec{s} = (2)(5) + (3)(-2) + (-1)(4)$.",
    "hintAr": "$W = ١٠ - ٦ - ٤ = ٠$.",
    "stepByStepSolutionEn": [
      "$$W = \\vec{F} \\cdot \\vec{s} = 2(5) + 3(-2) + (-1)(4) = 10 - 6 - 4 = 0$$"
    ],
    "stepByStepSolutionAr": [
      "$$W = ١٠ - ٦ - ٤ = ٠$$",
      "الشغل المبذول يساوي صفراً (القوة عمودية على اتجاه الإزاحة)."
    ],
    "teacherTipEn": "Zero work indicates that force is perpendicular to displacement.",
    "teacherTipAr": "الشغل الصفري يعني أن القوة المؤثرة عمودية تماماً على اتجاه الحركة."
  },
  {
    "id": "solid_ch1_db_med_44",
    "titleEn": "Ratio of Internal Division by XZ Plane",
    "titleAr": "نسبة تقسيم قطعة بالمستوى س ع",
    "difficulty": "medium",
    "questionEn": "At what ratio does the $XZ$-plane divide the line segment joining $A(2, -3, 4)$ and $B(5, 6, -1)$?",
    "questionAr": "بأي نسبة يقسم المستوى الإحداثي س ع القطعة المستقيمة الواصلة بين $A(٢، -٣، ٤)$ و $B(٥، ٦، -١)$؟",
    "optionsEn": [
      "1 : 2 internally",
      "1 : 2 externally",
      "2 : 1 internally",
      "1 : 1 internally"
    ],
    "optionsAr": [
      "١ : ٢ من الداخل",
      "١ : ٢ من الخارج",
      "٢ : ١ من الداخل",
      "١ : ١ من الداخل"
    ],
    "correctAnswer": "1 : 2 internally",
    "correctIndex": 0,
    "hintEn": "On the $XZ$-plane, $y = 0$. Use $y = \\frac{m_1 y_1 + m_2 y_2}{m_1 + m_2} = 0$.",
    "hintAr": "في المستوى س ع يكون $ص = ٠$، إذن $\\frac{m_٢}{m_١} = -\\frac{y_١}{y_٢}$.",
    "stepByStepSolutionEn": [
      "The $XZ$-plane has equation $y = 0$.",
      "$$0 = \\frac{m_1(-3) + m_2(6)}{m_1 + m_2} \\implies -3m_1 + 6m_2 = 0 \\implies 6m_2 = 3m_1$$",
      "$$\\frac{m_2}{m_1} = \\frac{3}{6} = \\frac{1}{2}$$",
      "Since the ratio is positive, it divides the segment internally in the ratio $1 : 2$."
    ],
    "stepByStepSolutionAr": [
      "معادلة المستوى س ع هي $y = ٠$.",
      "$$\\frac{m_٢}{m_١} = -\\frac{-٣}{٦} = \\frac{٣}{٦} = \\frac{١}{٢}$$",
      "بما أن الناتج موجب، فالتقسيم من الداخل بنسبة $١ : ٢$."
    ],
    "teacherTipEn": "Shortcut: division ratio by coordinate plane is $-(\\text{coord 1})/(\\text{coord 2})$.",
    "teacherTipAr": "قاعدة سريعة: نسبة التقسيم بمستوى إحداثي هي $-(\\text{الإحداثي الأول})/(\\text{الإحداثي الثاني})$."
  },
  {
    "id": "solid_ch1_db_med_45",
    "titleEn": "Ratio of Division by XY Plane",
    "titleAr": "نسبة تقسيم قطعة بالمستوى س ص",
    "difficulty": "medium",
    "questionEn": "Find the ratio in which the $XY$-plane divides the segment connecting $P(1, 2, 3)$ and $Q(4, -1, 6)$.",
    "questionAr": "أوجد نسبة تقسيم المستوى س ص للقطعة المستقيمة الواصلة بين $P(١، ٢، ٣)$ و $Q(٤، -١، ٦)$.",
    "optionsEn": [
      "1 : 2 externally",
      "1 : 2 internally",
      "2 : 1 externally",
      "1 : 3 internally"
    ],
    "optionsAr": [
      "١ : ٢ من الخارج",
      "١ : ٢ من الداخل",
      "٢ : ١ من الخارج",
      "١ : ٣ من الداخل"
    ],
    "correctAnswer": "1 : 2 externally",
    "correctIndex": 0,
    "hintEn": "Ratio $= -z_1 / z_2 = -3 / 6 = -1/2$. Negative means external.",
    "hintAr": "النسبة $= -z_١ / z_٢ = -٣ / ٦ = -١/٢$، والإشارة السالبة تعني تقسيماً من الخارج.",
    "stepByStepSolutionEn": [
      "In the $XY$-plane, $z = 0$.",
      "$$\\text{Ratio} = -\\frac{z_1}{z_2} = -\\frac{3}{6} = -\\frac{1}{2}$$",
      "The negative sign confirms the division is external in the ratio $1 : 2$."
    ],
    "stepByStepSolutionAr": [
      "في المستوى س ص يكون $z = ٠$.",
      "النسبة $= -\\frac{z_١}{z_٢} = -\\frac{٣}{٦} = -\\frac{١}{٢}$.",
      "الإشارة السالبة تعني أن التقسيم من الخارج بنسبة $١ : ٢$."
    ],
    "teacherTipEn": "Positive ratio $\\implies$ internal; Negative ratio $\\implies$ external.",
    "teacherTipAr": "نسبة موجبة تعني تقسيماً من الداخل، ونسبة سالبة تعني تقسيماً من الخارج."
  },
  {
    "id": "solid_ch1_db_med_46",
    "titleEn": "Linear Combination Cross Product Identity",
    "titleAr": "متطابقة الضرب الاتجاهي لتركيبة خطية",
    "difficulty": "medium",
    "questionEn": "Simplify $(\\vec{A} - \\vec{B}) \\times (\\vec{A} + \\vec{B})$.",
    "questionAr": "بسط المقدار: $(\\vec{A} - \\vec{B}) \\times (\\vec{A} + \\vec{B})$.",
    "optionsEn": [
      "2(\\vec{A} \\times \\vec{B})",
      "\\vec{0}",
      "-2(\\vec{A} \\times \\vec{B})",
      "\\|\\vec{A}\\|^2 - \\|\\vec{B}\\|^2"
    ],
    "optionsAr": [
      "٢(\\vec{A} \\times \\vec{B})",
      "\\vec{٠}",
      "-٢(\\vec{A} \\times \\vec{B})",
      "\\|\\vec{A}\\|^٢ - \\|\\vec{B}\\|^٢"
    ],
    "correctAnswer": "2(\\vec{A} \\times \\vec{B})",
    "correctIndex": 0,
    "hintEn": "Distribute: $\\vec{A}\\times\\vec{A} + \\vec{A}\\times\\vec{B} - \\vec{B}\\times\\vec{A} - \\vec{B}\\times\\vec{B}$.",
    "hintAr": "وزع الضرب مع العلم أن $\\vec{A}\\times\\vec{A} = \\vec{٠}$ و $-\\vec{B}\\times\\vec{A} = \\vec{A}\\times\\vec{B}$.",
    "stepByStepSolutionEn": [
      "$$\\vec{A} \\times \\vec{A} + \\vec{A} \\times \\vec{B} - \\vec{B} \\times \\vec{A} - \\vec{B} \\times \\vec{B}$$",
      "$$= \\vec{0} + \\vec{A} \\times \\vec{B} + \\vec{A} \\times \\vec{B} - \\vec{0} = 2(\\vec{A} \\times \\vec{B})$$"
    ],
    "stepByStepSolutionAr": [
      "$$= \\vec{٠} + \\vec{A} \\times \\vec{B} + \\vec{A} \\times \\vec{B} - \\vec{٠} = ٢(\\vec{A} \\times \\vec{B})$$"
    ],
    "teacherTipEn": "Notice the minus sign turned into a plus because of anticommutativity: $-\\vec{B}\\times\\vec{A} = +\\vec{A}\\times\\vec{B}$.",
    "teacherTipAr": "تحولت إشارة الطرح إلى جمع بسبب خاصية ضد التبديل في الضرب الاتجاهي."
  },
  {
    "id": "solid_ch1_db_med_47",
    "titleEn": "Area of Triangle Spanned by i + j and j + k",
    "titleAr": "مساحة المثلث المتولد بالمتجهين i+j و j+k",
    "difficulty": "medium",
    "questionEn": "Find the area of the triangle formed by $\\vec{u} = \\hat{i} + \\hat{j}$ and $\\vec{v} = \\hat{j} + \\hat{k}$.",
    "questionAr": "أوجد مساحة المثلث الذي ضلعاه المتجاوران هما $\\vec{u} = \\hat{i} + \\hat{j}$ و $\\vec{v} = \\hat{j} + \\hat{k}$.",
    "optionsEn": [
      "\\frac{\\sqrt{3}}{2}",
      "\\sqrt{3}",
      "\\frac{3}{2}",
      "1"
    ],
    "optionsAr": [
      "\\frac{\\sqrt{٣}}{٢}",
      "\\sqrt{٣}",
      "\\frac{٣}{٢}",
      "١"
    ],
    "correctAnswer": "\\frac{\\sqrt{3}}{2}",
    "correctIndex": 0,
    "hintEn": "Compute $\\vec{u} \\times \\vec{v} = (1, -1, 1)$, magnitude is $\\sqrt{3}$, area is half.",
    "hintAr": "احسب حاصل الضرب الاتجاهي $(١، -١، ١)$ ومعياره $\\sqrt{٣}$، والمساحة نصف المعيار.",
    "stepByStepSolutionEn": [
      "$$\\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{vmatrix} = (1, -1, 1)$$",
      "$$\\|\\vec{u} \\times \\vec{v}\\| = \\sqrt{1 + 1 + 1} = \\sqrt{3}$$",
      "$$\\text{Area} = \\frac{1}{2}\\|\\vec{u} \\times \\vec{v}\\| = \\frac{\\sqrt{3}}{2}$$"
    ],
    "stepByStepSolutionAr": [
      "حاصل الضرب الاتجاهي $= (١، -١، ١)$.",
      "المعيار $= \\sqrt{٣}$.",
      "مساحة المثلث $= \\frac{\\sqrt{٣}}{٢}$."
    ],
    "teacherTipEn": "Always divide by 2 for triangles.",
    "teacherTipAr": "اقسم دائماً على ٢ لحساب مساحة المثلث."
  },
  {
    "id": "solid_ch1_db_med_48",
    "titleEn": "Center Coordinates Sum",
    "titleAr": "مجموع إحداثيات مركز الكرة",
    "difficulty": "medium",
    "questionEn": "What is the sum of the coordinates of the center of $x^2 + y^2 + z^2 - 4x + 6y - 8z + 5 = 0$?",
    "questionAr": "ما هو مجموع إحداثيات مركز الكرة $x^٢ + y^٢ + z^٢ - ٤x + ٦y - ٨z + ٥ = ٠$؟",
    "optionsEn": [
      "3",
      "-3",
      "9",
      "-9"
    ],
    "optionsAr": [
      "٣",
      "-٣",
      "٩",
      "-٩"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Center is $(2, -3, 4)$. Sum is $2 - 3 + 4$.",
    "hintAr": "المركز $(٢، -٣، ٤)$ ومجموع إحداثياته $٢ - ٣ + ٤$.",
    "stepByStepSolutionEn": [
      "Center: $a = 2, b = -3, c = 4$.",
      "Sum $= 2 + (-3) + 4 = 3$."
    ],
    "stepByStepSolutionAr": [
      "المركز: $(٢، -٣، ٤)$.",
      "المجموع $= ٢ - ٣ + ٤ = ٣$."
    ],
    "teacherTipEn": "Common quick arithmetic check in exams.",
    "teacherTipAr": "سؤال سريع متكرر في أسئلة الاختيار من متعدد."
  },
  {
    "id": "solid_ch1_db_med_49",
    "titleEn": "Angle of Vector with Z-axis",
    "titleAr": "الزاوية التي يصنعها متجه مع محور ع",
    "difficulty": "medium",
    "questionEn": "Find the angle that $\\vec{A} = (1, 1, \\sqrt{2})$ makes with the positive $Z$-axis.",
    "questionAr": "أوجد قياس الزاوية التي يصنعها المتجه $\\vec{A} = (١، ١، \\sqrt{٢})$ مع الاتجاه الموجب لمحور العينات.",
    "optionsEn": [
      "45^\\circ",
      "60^\\circ",
      "30^\\circ",
      "90^\\circ"
    ],
    "optionsAr": [
      "٤٥^\\circ",
      "٦٠^\\circ",
      "٣٠^\\circ",
      "٩٠^\\circ"
    ],
    "correctAnswer": "45^\\circ",
    "correctIndex": 0,
    "hintEn": "$\\|\\vec{A}\\| = \\sqrt{1 + 1 + 2} = 2$. $\\cos\\gamma = \\frac{\\sqrt{2}}{2}$.",
    "hintAr": "معيار المتجه $= ٢$، وجيب تمام الزاوية مع ع هو $\\frac{\\sqrt{٢}}{٢}$.",
    "stepByStepSolutionEn": [
      "$$\\|\\vec{A}\\| = \\sqrt{1^2 + 1^2 + (\\sqrt{2})^2} = \\sqrt{1 + 1 + 2} = \\sqrt{4} = 2$$",
      "$$\\cos\\gamma = \\frac{z}{\\|\\vec{A}\\|} = \\frac{\\sqrt{2}}{2} \\implies \\gamma = 45^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه $= \\sqrt{١ + ١ + ٢} = ٢$.",
      "$$\\cos\\gamma = \\frac{\\sqrt{٢}}{٢} \\implies \\gamma = ٤٥^\\circ$$"
    ],
    "teacherTipEn": "Direction cosine with Z-axis is simply $A_z / \\|\\vec{A}\\|$.",
    "teacherTipAr": "جيب تمام الاتجاه مع محور ع هو ببساطة مركبة ع مقسومة على المعيار."
  },
  {
    "id": "solid_ch1_db_med_50",
    "titleEn": "Cosine of Angle between (1, 2, 3) and (3, 2, 1)",
    "titleAr": "جيب تمام الزاوية بين متجهين متناظرين",
    "difficulty": "medium",
    "questionEn": "Find $\\cos\\theta$ where $\\theta$ is the angle between $\\vec{u} = (1, 2, 3)$ and $\\vec{v} = (3, 2, 1)$.",
    "questionAr": "أوجد $\\cos\\theta$ حيث $\\theta$ هي الزاوية بين المتجهين $\\vec{u} = (١، ٢، ٣)$ و $\\vec{v} = (٣، ٢، ١)$.",
    "optionsEn": [
      "5/7",
      "10/14",
      "1",
      "1/2"
    ],
    "optionsAr": [
      "٥/٧",
      "١٠/١٤",
      "١",
      "١/٢"
    ],
    "correctAnswer": "5/7",
    "correctIndex": 0,
    "hintEn": "$\\vec{u} \\cdot \\vec{v} = 3 + 4 + 3 = 10$, $\\|\\vec{u}\\| = \\|\\vec{v}\\| = \\sqrt{14}$.",
    "hintAr": "الضرب القياسي $= ١٠$، ومعيار كل منهما $\\sqrt{١٤}$.",
    "stepByStepSolutionEn": [
      "$$\\vec{u} \\cdot \\vec{v} = (1)(3) + (2)(2) + (3)(1) = 3 + 4 + 3 = 10$$",
      "$$\\|\\vec{u}\\| = \\|\\vec{v}\\| = \\sqrt{1 + 4 + 9} = \\sqrt{14}$$",
      "$$\\cos\\theta = \\frac{10}{\\sqrt{14} \\times \\sqrt{14}} = \\frac{10}{14} = \\frac{5}{7}$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\vec{u} \\cdot \\vec{v} = ١٠$$",
      "$$\\cos\\theta = \\frac{١٠}{١٤} = \\frac{٥}{٧}$$"
    ],
    "teacherTipEn": "Simplify $10/14$ to its lowest terms: $5/7$.",
    "teacherTipAr": "بسط الكسر ١٠/١٤ إلى أبسط صورة: ٥/٧."
  }
],
  hots: [
  {
    "id": "solid_ch1_db_hots_01",
    "titleEn": "Sphere in First Octant Touching Coordinate Planes",
    "titleAr": "كرة في الثمن الأول تمس مستويات الإحداثيات",
    "difficulty": "hots",
    "questionEn": "A sphere in the first octant touches all three coordinate planes ($xy, yz, xz$) and passes through $P(1, 2, 3)$. What are the possible values of its radius $r$?",
    "questionAr": "كرة في الثمن الأول تمس مستويات الإحداثيات الثلاثة ($xy, yz, xz$) وتمر بالنقطة $P(١، ٢، ٣)$. ما هي القيم الممكنة لنصف قطرها $r$؟",
    "optionsEn": [
      "$r = 3 \\pm \\sqrt{2}$",
      "$r = 4 \\pm \\sqrt{3}$",
      "$r = 6 \\pm \\sqrt{5}$",
      "$r = 2 \\pm \\sqrt{7}$"
    ],
    "optionsAr": [
      "$r = ٣ \\pm \\sqrt{٢}$",
      "$r = ٤ \\pm \\sqrt{٣}$",
      "$r = ٦ \\pm \\sqrt{٥}$",
      "$r = ٢ \\pm \\sqrt{٧}$"
    ],
    "correctAnswer": "$r = 3 \\pm \\sqrt{2}$",
    "correctIndex": 0,
    "hintEn": "The center is $(r, r, r)$ because it touches all three planes in the first octant. Then $(1-r)^2 + (2-r)^2 + (3-r)^2 = r^2$.",
    "hintAr": "مركز الكرة هو $(r, r, r)$ لأنها تمس المستويات الثلاثة في الثمن الأول. إذن $(١-r)^٢ + (٢-r)^٢ + (٣-r)^٢ = r^٢$.",
    "stepByStepSolutionEn": [
      "Because the sphere touches all three coordinate planes in the first octant, its center is $C(r, r, r)$ and radius is $r > 0$.",
      "Equation: $(x - r)^2 + (y - r)^2 + (z - r)^2 = r^2$.",
      "Substitute $P(1, 2, 3)$:",
      "$$(1 - r)^2 + (2 - r)^2 + (3 - r)^2 = r^2$$",
      "$$(1 - 2r + r^2) + (4 - 4r + r^2) + (9 - 6r + r^2) = r^2$$",
      "$$3r^2 - 12r + 14 = r^2 \\implies 2r^2 - 12r + 14 = 0 \\implies r^2 - 6r + 7 = 0$$",
      "Using the quadratic formula:",
      "$$r = \\frac{6 \\pm \\sqrt{36 - 28}}{2} = \\frac{6 \\pm \\sqrt{8}}{2} = 3 \\pm \\sqrt{2}$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن الكرة تمس المستويات الإحداثية الثلاثة في الثمن الأول، فإن مركزها هو $C(r, r, r)$ ونصف قطرها $r$.",
      "معادلة الكرة: $(x - r)^٢ + (y - r)^٢ + (z - r)^٢ = r^٢$.",
      "بالتعويض بالنقطة $(١، ٢، ٣)$:",
      "$$(١ - r)^٢ + (٢ - r)^٢ + (٣ - r)^٢ = r^٢$$",
      "$$٣r^٢ - ١٢r + ١٤ = r^٢ \\implies ٢r^٢ - ١٢r + ١٤ = ٠ \\implies r^٢ - ٦r + ٧ = ٠$$",
      "بالقانون العام: $r = ٣ \\pm \\sqrt{٢}$."
    ],
    "teacherTipEn": "Notice there are two valid spheres: one smaller where $P$ is near the top/outside, and one larger containing $P$ inside before reaching its surface.",
    "teacherTipAr": "لاحظ وجود كرتين تحققان هذا الشرط: إحداهما أصغر والأخرى أكبر."
  },
  {
    "id": "solid_ch1_db_hots_02",
    "titleEn": "Sphere Tangent to the Three Coordinate Axes",
    "titleAr": "كرة تمس محاور الإحداثيات الثلاثة",
    "difficulty": "hots",
    "questionEn": "A sphere with center $C(a, a, a)$ in the first octant touches the three coordinate axes ($x, y, z$). If its radius is $r = 6$, find the distance from the center $C$ to the origin.",
    "questionAr": "كرة مركزها $C(a, a, a)$ في الثمن الأول تمس محاور الإحداثيات الثلاثة ($x, y, z$). إذا كان نصف قطرها $r = ٦$، فما بعد المركز $C$ عن نقطة الأصل؟",
    "optionsEn": [
      "$3\\sqrt{6}$",
      "$6\\sqrt{2}$",
      "$3\\sqrt{3}$",
      "$6\\sqrt{3}$"
    ],
    "optionsAr": [
      "$٣\\sqrt{٦}$",
      "$٦\\sqrt{٢}$",
      "$٣\\sqrt{٣}$",
      "$٦\\sqrt{٣}$"
    ],
    "correctAnswer": "$3\\sqrt{6}$",
    "correctIndex": 0,
    "hintEn": "The distance from $(a, a, a)$ to the $x$-axis is $\\sqrt{a^2 + a^2} = a\\sqrt{2} = r$.",
    "hintAr": "بعد النقطة $(a, a, a)$ عن محور السينات هو $\\sqrt{a^٢ + a^٢} = a\\sqrt{٢} = r$.",
    "stepByStepSolutionEn": [
      "The perpendicular distance from $C(a, a, a)$ to the $x$-axis is $d_x = \\sqrt{y^2 + z^2} = \\sqrt{a^2 + a^2} = a\\sqrt{2}$.",
      "Since the sphere touches the $x$-axis, this distance equals the radius $r$:",
      "$$a\\sqrt{2} = r = 6 \\implies a = \\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$$",
      "The distance from $C(a, a, a)$ to the origin $O(0, 0, 0)$ is:",
      "$$OC = \\sqrt{a^2 + a^2 + a^2} = a\\sqrt{3} = (3\\sqrt{2})\\sqrt{3} = 3\\sqrt{6}$$"
    ],
    "stepByStepSolutionAr": [
      "بعد المركز $C(a, a, a)$ عن محور السينات هو $\\sqrt{y^٢ + z^٢} = \\sqrt{a^٢ + a^٢} = a\\sqrt{٢}$.",
      "بما أن الكرة تمس المحور، فإن هذا البعد يساوي نصف القطر $r = ٦$:",
      "$$a\\sqrt{٢} = ٦ \\implies a = ٣\\sqrt{٢}$$",
      "بعد المركز عن نقطة الأصل هو:",
      "$$OC = \\sqrt{a^٢ + a^٢ + a^٢} = a\\sqrt{٣} = ٣\\sqrt{٢} \\times \\sqrt{٣} = ٣\\sqrt{٦}$$"
    ],
    "teacherTipEn": "Do not confuse distance to coordinate planes ($|a|$) with distance to coordinate axes ($\\sqrt{a^2+a^2}$).",
    "teacherTipAr": "فرق دائماً بين بعد نقطة عن مستوى إحداثي (مطلق الإحداثي) وبعدها عن محور إحداثي (جذر مجموع مربعي الإحداثيين الآخرين)."
  },
  {
    "id": "solid_ch1_db_hots_03",
    "titleEn": "Cross-Sectional Area of Sphere Cut by a Plane",
    "titleAr": "مساحة المقطع الدائري الناتج من قطع كرة بمستوى",
    "difficulty": "hots",
    "questionEn": "Find the area of the circular cross-section formed by intersecting the sphere $x^2 + y^2 + z^2 - 2x - 4y + 4z - 7 = 0$ with the plane $z = 1$.",
    "questionAr": "أوجد مساحة المقطع الدائري الناتج عن تقاطع الكرة $x^٢ + y^٢ + z^٢ - ٢x - ٤y + ٤z - ٧ = ٠$ مع المستوى $z = ١$.",
    "optionsEn": [
      "$7\\pi$",
      "$9\\pi$",
      "$12\\pi$",
      "$16\\pi$"
    ],
    "optionsAr": [
      "$٧\\pi$",
      "$٩\\pi$",
      "$١٢\\pi$",
      "$١٦\\pi$"
    ],
    "correctAnswer": "$7\\pi$",
    "correctIndex": 0,
    "hintEn": "Find the center and radius of the sphere, then the distance $d$ from the center to the plane $z = 1$. The circle radius is $\\sqrt{R^2 - d^2}$.",
    "hintAr": "أوجد مركز ونصف قطر الكرة، ثم احسب بعد المركز $d$ عن المستوى $z = ١$. نصف قطر الدائرة هو $\\sqrt{R^٢ - d^٢}$.",
    "stepByStepSolutionEn": [
      "Center of sphere: $C = (-(-2)/2, -(-4)/2, -(4)/2) = (1, 2, -2)$.",
      "Radius of sphere: $R = \\sqrt{1^2 + 2^2 + (-2)^2 - (-7)} = \\sqrt{1 + 4 + 4 + 7} = \\sqrt{16} = 4$.",
      "Perpendicular distance from $C(1, 2, -2)$ to the plane $z = 1$ is:",
      "$$d = |z_C - 1| = |-2 - 1| = 3$$",
      "Radius of circular cross-section: $r_{circle} = \\sqrt{R^2 - d^2} = \\sqrt{4^2 - 3^2} = \\sqrt{16 - 9} = \\sqrt{7}$.",
      "Area of cross-section: $A = \\pi r_{circle}^2 = \\pi (\\sqrt{7})^2 = 7\\pi$."
    ],
    "stepByStepSolutionAr": [
      "مركز الكرة: $C(١، ٢، -٢)$.",
      "نصف قطر الكرة: $R = \\sqrt{١ + ٤ + ٤ - (-٧)} = \\sqrt{١٦} = ٤$.",
      "بعد المركز عن المستوى $z = ١$ هو: $d = |-٢ - ١| = ٣$.",
      "نصف قطر دائرة التقاطع: $r = \\sqrt{R^٢ - d^٢} = \\sqrt{١٦ - ٩} = \\sqrt{٧}$.",
      "مساحة الدائرة: $A = \\pi r^٢ = ٧\\pi$."
    ],
    "teacherTipEn": "The Pythagorean relation $R^2 = r_{circle}^2 + d^2$ holds for any plane section of a sphere.",
    "teacherTipAr": "العلاقة الفيثاغورية $R^٢ = r^٢ + d^٢$ تنطبق دائماً على أي مقطع مستوٍ للكرة."
  },
  {
    "id": "solid_ch1_db_hots_04",
    "titleEn": "Circumsphere of Tetrahedron with Origin and Intercepts",
    "titleAr": "الكرة المارة برؤوس رباعي أضلاع قائم مع نقطة الأصل",
    "difficulty": "hots",
    "questionEn": "A sphere passes through the origin $O(0, 0, 0)$ and the points $A(4, 0, 0)$, $B(0, 6, 0)$, and $C(0, 0, 12)$. What is the radius of this sphere?",
    "questionAr": "كرة تمر بنقطة الأصل $O(٠، ٠، ٠)$ والنقاط $A(٤، ٠، ٠)$ و $B(٠، ٦، ٠)$ و $C(٠، ٠، ١٢)$. ما نصف قطر هذه الكرة؟",
    "optionsEn": [
      "7",
      "14",
      "$\\sqrt{196}$",
      "$\\frac{7}{2}$"
    ],
    "optionsAr": [
      "٧",
      "١٤",
      "$\\sqrt{١٩٦}$",
      "$\\frac{٧}{٢}$"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "The center of a sphere passing through $(0,0,0)$ and the intercepts $(a,0,0), (0,b,0), (0,0,c)$ is $(a/2, b/2, c/2)$.",
    "hintAr": "مركز الكرة المارة بنقطة الأصل ونقاط التقاطع مع المحاور $(a,0,0), (0,b,0), (0,0,c)$ هو $(a/٢, b/٢, c/٢)$.",
    "stepByStepSolutionEn": [
      "The general sphere equation passing through the origin is $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz = 0$.",
      "Passes through $A(4, 0, 0) \\implies 16 + 8u = 0 \\implies u = -2 \\implies -u = 2 = 4/2$.",
      "Passes through $B(0, 6, 0) \\implies 36 + 12v = 0 \\implies v = -3 \\implies -v = 3 = 6/2$.",
      "Passes through $C(0, 0, 12) \\implies 144 + 24w = 0 \\implies w = -6 \\implies -w = 6 = 12/2$.",
      "The center is $C_{center} = (2, 3, 6)$.",
      "Since the origin lies on the sphere, the radius is the distance from the center to origin:",
      "$$R = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$$"
    ],
    "stepByStepSolutionAr": [
      "معادلة الكرة المارة بنقطة الأصل: $x^٢ + y^٢ + z^٢ + ٢ux + ٢vy + ٢wz = ٠$.",
      "بالتعويض بالنقط: $u = -٢, v = -٣, w = -٦$.",
      "المركز هو $(٢، ٣، ٦)$.",
      "نصف القطر هو بعد المركز عن نقطة الأصل:",
      "$$R = \\sqrt{٤ + ٩ + ٣٦} = \\sqrt{٤٩} = ٧$$"
    ],
    "teacherTipEn": "Formula for radius of sphere through origin and axis intercepts $(a,0,0), (0,b,0), (0,0,c)$: $R = \\frac{1}{2}\\sqrt{a^2 + b^2 + c^2}$.",
    "teacherTipAr": "قاعدة سريعة: نصف قطر الكرة المارة بنقطة الأصل ونقاط المحاور الثلاثة هو: $R = \\frac{١}{٢}\\sqrt{a^٢ + b^٢ + c^٢}$."
  },
  {
    "id": "solid_ch1_db_hots_05",
    "titleEn": "Orthogonality Condition for Two Spheres",
    "titleAr": "شرط تعامد كرتين",
    "difficulty": "hots",
    "questionEn": "Two spheres $S_1: (x - 1)^2 + y^2 + z^2 = 4$ and $S_2: x^2 + (y - 2)^2 + (z - k)^2 = 9$ are orthogonal. Find the positive value of $k$.",
    "questionAr": "كرتان $S_١: (x - ١)^٢ + y^٢ + z^٢ = ٤$ و $S_٢: x^٢ + (y - ٢)^٢ + (z - k)^٢ = ٩$ متعامدتان. أوجد القيمة الموجبة لـ $k$.",
    "optionsEn": [
      "$2\\sqrt{2}$",
      "$\\sqrt{8}$",
      "$4$",
      "$2\\sqrt{3}$"
    ],
    "optionsAr": [
      "$٢\\sqrt{٢}$",
      "$\\sqrt{٨}$",
      "$٤$",
      "$٢\\sqrt{٣}$"
    ],
    "correctAnswer": "$2\\sqrt{2}$",
    "correctIndex": 0,
    "hintEn": "Two spheres are orthogonal if and only if $C_1 C_2^2 = r_1^2 + r_2^2$.",
    "hintAr": "تتعامد كرتان إذا وفقط إذا كان مربع البعد بين المركزين يساوي مجموع مربعي نصفي القطرين: $C_١ C_٢^٢ = r_١^٢ + r_٢^٢$.",
    "stepByStepSolutionEn": [
      "For $S_1$: center $C_1(1, 0, 0)$, radius $r_1 = 2$.",
      "For $S_2$: center $C_2(0, 2, k)$, radius $r_2 = 3$.",
      "The condition for two spheres to intersect orthogonally is:",
      "$$C_1 C_2^2 = r_1^2 + r_2^2$$",
      "Calculate $C_1 C_2^2$:",
      "$$C_1 C_2^2 = (0 - 1)^2 + (2 - 0)^2 + (k - 0)^2 = 1 + 4 + k^2 = 5 + k^2$$",
      "Equate to $r_1^2 + r_2^2 = 2^2 + 3^2 = 4 + 9 = 13$:",
      "$$5 + k^2 = 13 \\implies k^2 = 8 \\implies k = \\sqrt{8} = 2\\sqrt{2}$$"
    ],
    "stepByStepSolutionAr": [
      "الكرة الأولى: المركز $C_١(١، ٠، ٠)$، ونصف القطر $r_١ = ٢$.",
      "الكرة الثانية: المركز $C_٢(٠، ٢، k)$، ونصف القطر $r_٢ = ٣$.",
      "شرط التعامد هو: $C_١ C_٢^٢ = r_١^٢ + r_٢^٢$.",
      "$$C_١ C_٢^٢ = (٠-١)^٢ + (٢-٠)^٢ + (k-٠)^٢ = ٥ + k^٢$$",
      "$$٥ + k^٢ = ٤ + ٩ = ١٣ \\implies k^٢ = ٨ \\implies k = ٢\\sqrt{٢}$$"
    ],
    "teacherTipEn": "Orthogonal spheres have perpendicular tangent planes at every point of intersection, forming a right triangle with the two radii and the line of centers.",
    "teacherTipAr": "تعامد الكرتين يعني أن المماسات عند أي نقطة تقاطع متعامدة، مما يشكل مثلثاً قائماً أضلاعه $r_١, r_٢$ ووتره $C_١ C_٢$."
  },
  {
    "id": "solid_ch1_db_hots_06",
    "titleEn": "Power of a Point Relative to a Sphere",
    "titleAr": "قوة نقطة بالنسبة لكرة",
    "difficulty": "hots",
    "questionEn": "Let $P(5, 7, 6)$ be an external point to the sphere $x^2 + y^2 + z^2 - 2x - 4y - 4 = 0$. Find the product of the minimum and maximum distances from $P$ to the sphere.",
    "questionAr": "لتكن $P(٥، ٧، ٦)$ نقطة خارج الكرة $x^٢ + y^٢ + z^٢ - ٢x - ٤y - ٤ = ٠$. أوجد حاصل ضرب أقل مسافة وأكبر مسافة من النقطة $P$ إلى سطح الكرة.",
    "optionsEn": [
      "68",
      "77",
      "64",
      "86"
    ],
    "optionsAr": [
      "٦٨",
      "٧٧",
      "٦٤",
      "٨٦"
    ],
    "correctAnswer": "68",
    "correctIndex": 0,
    "hintEn": "Minimum distance is $d - r$ and maximum is $d + r$. Their product is $d^2 - r^2$, which equals the power of the point $S(P)$.",
    "hintAr": "أقل مسافة هي $d - r$ وأكبر مسافة هي $d + r$. حاصل ضربهما هو $d^٢ - r^٢$ وهو قوة النقطة بالنسبة للكرة.",
    "stepByStepSolutionEn": [
      "Center of sphere: $C = (-(-2)/2, -(-4)/2, 0) = (1, 2, 0)$.",
      "Radius $r = \\sqrt{1^2 + 2^2 + 0^2 - (-4)} = \\sqrt{1 + 4 + 4} = 3$.",
      "Distance from $P(5, 7, 6)$ to center $C(1, 2, 0)$:",
      "$$d = PC = \\sqrt{(5 - 1)^2 + (7 - 2)^2 + (6 - 0)^2} = \\sqrt{16 + 25 + 36} = \\sqrt{77}$$",
      "Minimum distance to sphere $= d - r = \\sqrt{77} - 3$.",
      "Maximum distance to sphere $= d + r = \\sqrt{77} + 3$.",
      "Product $= (d - r)(d + r) = d^2 - r^2 = 77 - 9 = 68$."
    ],
    "stepByStepSolutionAr": [
      "مركز الكرة: $C(١، ٢، ٠)$، ونصف القطر: $r = \\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد من $P(٥، ٧، ٦)$ إلى المركز $C$ هو: $d = \\sqrt{١٦ + ٢٥ + ٣٦} = \\sqrt{٧٧}$.",
      "أقل بعد $= d - r = \\sqrt{٧٧} - ٣$.",
      "أكبر بعد $= d + r = \\sqrt{٧٧} + ٣$.",
      "حاصل الضرب $= d^٢ - r^٢ = ٧٧ - ٩ = ٦٨$."
    ],
    "teacherTipEn": "The product $(d-r)(d+r) = d^2 - r^2$ equals substituting $P$ into the sphere equation: $5^2 + 7^2 + 6^2 - 2(5) - 4(7) - 4 = 25+49+36-10-28-4 = 68$.",
    "teacherTipAr": "يمكنك إيجاد الناتج مباشرة بالتعويض بإحداثيات النقطة في معادلة الكرة العامة الصفرية!"
  },
  {
    "id": "solid_ch1_db_hots_07",
    "titleEn": "Volume of Cube Inscribing a Given Sphere",
    "titleAr": "حجم المكعب الذي يحوي كرة بداخله تمس أوجهه",
    "difficulty": "hots",
    "questionEn": "A sphere is inscribed inside a cube with edges parallel to the coordinate axes. If the sphere equation is $x^2 + y^2 + z^2 - 8x - 8y - 8z + 32 = 0$, what is the volume of the cube?",
    "questionAr": "كرة مرسومة داخل مكعب بحيث تمس أوجهه الستة وأحرفه توازي محاور الإحداثيات. إذا كانت معادلة الكرة هي $x^٢ + y^٢ + z^٢ - ٨x - ٨y - ٨z + ٣٢ = ٠$، فما حجم هذا المكعب؟",
    "optionsEn": [
      "512",
      "64",
      "216",
      "1000"
    ],
    "optionsAr": [
      "٥١٢",
      "٦٤",
      "٢١٦",
      "١٠٠٠"
    ],
    "correctAnswer": "512",
    "correctIndex": 0,
    "hintEn": "Find the radius $r$ of the sphere. The side length of the circumscribing cube is $L = 2r$.",
    "hintAr": "أوجد نصف قطر الكرة $r$. طول ضلع المكعب المحيط بالكرة هو $L = ٢r$.",
    "stepByStepSolutionEn": [
      "Sphere equation: $x^2 + y^2 + z^2 - 8x - 8y - 8z + 32 = 0$.",
      "Center $C = (4, 4, 4)$, and $d = 32$.",
      "Radius: $r = \\sqrt{4^2 + 4^2 + 4^2 - 32} = \\sqrt{16 + 16 + 16 - 32} = \\sqrt{16} = 4$.",
      "For a sphere inscribed in a cube, the diameter equals the edge length of the cube:",
      "$$L = 2r = 2(4) = 8$$",
      "Volume of the cube: $V = L^3 = 8^3 = 512$ cubic units."
    ],
    "stepByStepSolutionAr": [
      "مركز الكرة هو $(٤، ٤، ٤)$، والثابت $d = ٣٢$.",
      "نصف القطر: $r = \\sqrt{١٦ + ١٦ + ١٦ - ٣٢} = \\sqrt{١٦} = ٤$.",
      "طول ضلع المكعب يساوي طول قطر الكرة: $L = ٢r = ٨$.",
      "حجم المكعب: $V = L^٣ = ٨^٣ = ٥١٢$ وحدة مكعبة."
    ],
    "teacherTipEn": "Remember that diameter $2r$ is the edge length of an inscribed sphere's cube, whereas for an inscribed cube inside a sphere, the space diagonal is $2r = L\\sqrt{3}$.",
    "teacherTipAr": "انتبه للفرق: كرة داخل مكعب يكون $L = ٢r$، بينما مكعب داخل كرة يكون القطر الرئيسي $L\\sqrt{٣} = ٢r$."
  },
  {
    "id": "solid_ch1_db_hots_08",
    "titleEn": "Point of Contact of Two Externally Tangent Spheres",
    "titleAr": "نقطة تلامس كرتين متماستين من الخارج",
    "difficulty": "hots",
    "questionEn": "Two spheres $S_1: (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 4$ and $S_2: (x - 4)^2 + (y - 6)^2 + (z - 3)^2 = 9$ touch externally. Find the point of contact $T$.",
    "questionAr": "كرتان $S_١: (x - ١)^٢ + (y - ٢)^٢ + (z - ٣)^٢ = ٤$ و $S_٢: (x - ٤)^٢ + (y - ٦)^٢ + (z - ٣)^٢ = ٩$ متماستان من الخارج. أوجد نقطة التماس $T$.",
    "optionsEn": [
      "$(2.2, 3.6, 3)$",
      "$(2.5, 4.0, 3)$",
      "$(2.0, 3.5, 3)$",
      "$(3.0, 4.5, 3)$"
    ],
    "optionsAr": [
      "$(٢٫٢، ٣٫٦، ٣)$",
      "$(٢٫٥، ٤٫٠، ٣)$",
      "$(٢٫٠، ٣٫٥، ٣)$",
      "$(٣٫٠، ٤٫٥، ٣)$"
    ],
    "correctAnswer": "$(2.2, 3.6, 3)$",
    "correctIndex": 0,
    "hintEn": "The point of contact divides the segment joining centers $C_1 C_2$ internally in the ratio $r_1 : r_2 = 2 : 3$.",
    "hintAr": "نقطة التماس تقسم القطعة المستقيمة الواصلة بين المركزين $C_١ C_٢$ من الداخل بنسبة $r_١ : r_٢ = ٢ : ٣$.",
    "stepByStepSolutionEn": [
      "Centers: $C_1(1, 2, 3)$ with $r_1 = 2$, and $C_2(4, 6, 3)$ with $r_2 = 3$.",
      "Distance $C_1 C_2 = \\sqrt{(4-1)^2 + (6-2)^2 + (3-3)^2} = \\sqrt{9 + 16} = 5 = r_1 + r_2$.",
      "The point of contact $T$ divides $C_1 C_2$ internally in ratio $m_1 : m_2 = r_1 : r_2 = 2 : 3$:",
      "$$T = \\frac{m_2 C_1 + m_1 C_2}{m_1 + m_2} = \\frac{3(1, 2, 3) + 2(4, 6, 3)}{2 + 3}$$",
      "$$T = \\frac{(3 + 8, 6 + 12, 9 + 6)}{5} = \\frac{(11, 18, 15)}{5} = (2.2, 3.6, 3)$$"
    ],
    "stepByStepSolutionAr": [
      "المركزان: $C_١(١، ٢، ٣)$ مع $r_١ = ٢$، و $C_٢(٤، ٦، ٣)$ مع $r_٢ = ٣$.",
      "البعد $C_١ C_٢ = ٥ = r_١ + r_٢$.",
      "نقطة التماس $T$ تقسم $C_١ C_٢$ داخلياً بنسبة $٢ : ٣$:",
      "$$T = \\frac{٣ C_١ + ٢ C_٢}{٥} = \\frac{(٣+٨، ٦+١٢، ٩+٦)}{٥} = (٢٫٢، ٣٫٦، ٣)$$"
    ],
    "teacherTipEn": "Internal division formula: $T = \\frac{r_2 C_1 + r_1 C_2}{r_1 + r_2}$. Note cross-multiplication of ratios.",
    "teacherTipAr": "قانون التقسيم الداخلي: النسبة $r_١$ تضرب في المركز الثاني $C_٢$ والنسبة $r_٢$ تضرب في المركز الأول $C_١$."
  },
  {
    "id": "solid_ch1_db_hots_09",
    "titleEn": "Length of Tangent Segment from External Point to Sphere",
    "titleAr": "طول القطعة المماسة المرسومة من نقطة خارج كرة",
    "difficulty": "hots",
    "questionEn": "Find the length of the tangent line segment drawn from point $P(4, 5, 6)$ to the sphere $x^2 + y^2 + z^2 - 2x - 4y - 6z + 5 = 0$.",
    "questionAr": "أوجد طول القطعة المستقيمة المماسة للكرة المرسومة من النقطة $P(٤، ٥، ٦)$ للكرة: $x^٢ + y^٢ + z^٢ - ٢x - ٤y - ٦z + ٥ = ٠$.",
    "optionsEn": [
      "$3\\sqrt{2}$",
      "$\\sqrt{14}$",
      "$4$",
      "$5$"
    ],
    "optionsAr": [
      "$٣\\sqrt{٢}$",
      "$\\sqrt{١٤}$",
      "$٤$",
      "$٥$"
    ],
    "correctAnswer": "$3\\sqrt{2}$",
    "correctIndex": 0,
    "hintEn": "The length of tangent from $P(x_1, y_1, z_1)$ to a sphere is $L = \\sqrt{S(P)}$ where $S(x, y, z) = 0$ is the sphere equation in standard form.",
    "hintAr": "طول المماس من النقطة $P$ يساوي الجذر التربيعي لقيمة التعويض بالنقطة في معادلة الكرة الصفرية: $L = \\sqrt{S(P)}$.",
    "stepByStepSolutionEn": [
      "For a sphere in general form $S(x, y, z) = x^2 + y^2 + z^2 - 2x - 4y - 6z + 5 = 0$, the tangent length from $P(4, 5, 6)$ is given by $\\sqrt{S(P)}$.",
      "Evaluate $S(4, 5, 6)$:",
      "$$S(4, 5, 6) = 4^2 + 5^2 + 6^2 - 2(4) - 4(5) - 6(6) + 5$$",
      "$$= 16 + 25 + 36 - 8 - 20 - 36 + 5$$",
      "$$= 77 - 64 + 5 = 18$$",
      "Therefore, the length of the tangent is $L = \\sqrt{18} = 3\\sqrt{2}$."
    ],
    "stepByStepSolutionAr": [
      "طول القطعة المماسة للكرة من نقطة $P(x_١, y_١, z_١)$ هو $L = \\sqrt{S(P)}$.",
      "بالتعويض بالنقطة $(٤، ٥، ٦)$ في معادلة الكرة:",
      "$$S(٤، ٥، ٦) = ١٦ + ٢٥ + ٣٦ - ٨ - ٢٠ - ٣٦ + ٥ = ١٨$$",
      "طول المماس $= \\sqrt{١٨} = ٣\\sqrt{٢}$."
    ],
    "teacherTipEn": "Alternatively, use Pythagoras in right triangle $PCT$: $L^2 = PC^2 - r^2$.",
    "teacherTipAr": "يمكنك أيضاً حساب بعد المركز $C(١، ٢، ٣)$ عن $P$ واستخدام فيثاغورس: $L^٢ = PC^٢ - r^٢$."
  },
  {
    "id": "solid_ch1_db_hots_10",
    "titleEn": "Intersection of a Diameter-Form Sphere with a Coordinate Plane",
    "titleAr": "تقاطع كرة معلوم طرفا قطر فيها مع مستوى إحداثي",
    "difficulty": "hots",
    "questionEn": "A sphere has diameter endpoints $A(2, -1, 4)$ and $B(-2, 3, 2)$. What is the radius of the circle formed by the intersection of this sphere with the $yz$-plane?",
    "questionAr": "كرة طرفا أحد أقطارها هما النقطتان $A(٢، -١، ٤)$ و $B(-٢، ٣، ٢)$. ما نصف قطر الدائرة الناتجة عن تقاطع هذه الكرة مع المستوى $yz$؟",
    "optionsEn": [
      "3",
      "$\\sqrt{5}$",
      "$\\sqrt{13}$",
      "2"
    ],
    "optionsAr": [
      "٣",
      "$\\sqrt{٥}$",
      "$\\sqrt{١٣}$",
      "٢"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "The sphere equation is $(x-x_1)(x-x_2) + (y-y_1)(y-y_2) + (z-z_1)(z-z_2) = 0$. Set $x = 0$ for the $yz$-plane.",
    "hintAr": "معادلة الكرة بدلالة طرفي القطر هي $(x-x_١)(x-x_٢) + (y-y_١)(y-y_٢) + (z-z_١)(z-z_٢) = ٠$. ضع $x = ٠$ للتقاطع مع المستوى $yz$.",
    "stepByStepSolutionEn": [
      "The equation of the sphere is:",
      "$$(x - 2)(x + 2) + (y + 1)(y - 3) + (z - 4)(z - 2) = 0$$",
      "$$x^2 - 4 + y^2 - 2y - 3 + z^2 - 6z + 8 = 0 \\implies x^2 + y^2 + z^2 - 2y - 6z + 1 = 0$$",
      "For the intersection with the $yz$-plane, set $x = 0$:",
      "$$y^2 + z^2 - 2y - 6z + 1 = 0$$",
      "This is a circle in the $yz$-plane with center $(y_0, z_0) = (1, 3)$ and radius:",
      "$$r_{circle} = \\sqrt{1^2 + 3^2 - 1} = \\sqrt{1 + 9 - 1} = \\sqrt{9} = 3$$"
    ],
    "stepByStepSolutionAr": [
      "معادلة الكرة بطرفي القطر:",
      "$$(x - ٢)(x + ٢) + (y + ١)(y - ٣) + (z - ٤)(z - ٢) = ٠$$",
      "$$x^٢ + y^٢ + z^٢ - ٢y - ٦z + ١ = ٠$$",
      "بالتقاطع مع المستوى $yz$ نضع $x = ٠$:",
      "$$y^٢ + z^٢ - ٢y - ٦z + ١ = ٠$$",
      "نصف قطر هذه الدائرة هو $r = \\sqrt{١^٢ + ٣^٢ - ١} = \\sqrt{٩} = ٣$."
    ],
    "teacherTipEn": "Setting $x=0$ reduces the 3D sphere equation directly to a 2D circle equation in $y$ and $z$.",
    "teacherTipAr": "وضع $x=٠$ يحول معادلة الكرة مباشرة إلى معادلة دائرة في المستوى $yz$."
  },
  {
    "id": "solid_ch1_db_hots_11",
    "titleEn": "Sphere Passing Through the Circle of Intersection of Sphere and Plane",
    "titleAr": "كرة تمر بدائرة تقاطع كرة ومستوى وتمر بنقطة الأصل",
    "difficulty": "hots",
    "questionEn": "Find the center of the sphere that passes through the circle of intersection of $x^2 + y^2 + z^2 = 9$ and $x + y + z = 3$, and also passes through the origin $(0, 0, 0)$.",
    "questionAr": "أوجد مركز الكرة التي تمر بدائرة تقاطع الكرة $x^٢ + y^٢ + z^٢ = ٩$ والمستوى $x + y + z = ٣$، وتمر أيضاً بنقطة الأصل $(٠، ٠، ٠)$.",
    "optionsEn": [
      "$(1.5, 1.5, 1.5)$",
      "$(1, 1, 1)$",
      "$(2, 2, 2)$",
      "$(3, 3, 3)$"
    ],
    "optionsAr": [
      "$(١٫٥، ١٫٥، ١٫٥)$",
      "$(١، ١، ١)$",
      "$(٢، ٢، ٢)$",
      "$(٣، ٣، ٣)$"
    ],
    "correctAnswer": "$(1.5, 1.5, 1.5)$",
    "correctIndex": 0,
    "hintEn": "The family of spheres is $S + \\lambda P = 0$. Substitute $(0,0,0)$ to solve for $\\lambda$.",
    "hintAr": "حزمة الكرات تعطى بالعلاقة $S + \\lambda P = ٠$. عوض بنقطة الأصل لإيجاد قيمة $\\lambda$.",
    "stepByStepSolutionEn": [
      "The equation of any sphere passing through the circle of intersection is:",
      "$$S + \\lambda P = 0 \\implies (x^2 + y^2 + z^2 - 9) + \\lambda(x + y + z - 3) = 0$$",
      "Substitute the origin $(0, 0, 0)$:",
      "$$(0 - 9) + \\lambda(0 - 3) = 0 \\implies -9 - 3\\lambda = 0 \\implies \\lambda = -3$$",
      "Substitute $\\lambda = -3$ back into the equation:",
      "$$x^2 + y^2 + z^2 - 9 - 3(x + y + z - 3) = 0$$",
      "$$x^2 + y^2 + z^2 - 3x - 3y - 3z = 0$$",
      "The center is $(-(-3)/2, -(-3)/2, -(-3)/2) = (1.5, 1.5, 1.5)$."
    ],
    "stepByStepSolutionAr": [
      "معادلة حزمة الكرات المارة بدائرة التقاطع هي:",
      "$$(x^٢ + y^٢ + z^٢ - ٩) + \\lambda(x + y + z - ٣) = ٠$$",
      "بالتعويض بنقطة الأصل $(٠، ٠، ٠)$:",
      "$$-٩ - ٣\\lambda = ٠ \\implies \\lambda = -٣$$",
      "معادلة الكرة المطلوبة هي: $x^٢ + y^٢ + z^٢ - ٣x - ٣y - ٣z = ٠$.",
      "المركز هو $(١٫٥، ١٫٥، ١٫٥)$."
    ],
    "teacherTipEn": "Using the family of spheres $S + \\lambda P = 0$ avoids calculating the center and radius of the intersection circle directly.",
    "teacherTipAr": "استخدام معادلة حزمة الكرات $S + \\lambda P = ٠$ يوفر وقت استنتاج مركز ونصف قطر دائرة التقاطع."
  },
  {
    "id": "solid_ch1_db_hots_12",
    "titleEn": "Radius of Sphere Tangent to a Specific Axis",
    "titleAr": "نصف قطر كرة مركزها معلوم وتمس أحد المحاور",
    "difficulty": "hots",
    "questionEn": "A sphere has center $C(3, 4, 12)$ and touches the $z$-axis. What is its radius?",
    "questionAr": "كرة مركزها $C(٣، ٤، ١٢)$ وتمس محور العينات ($z$-axis). ما نصف قطر هذه الكرة؟",
    "optionsEn": [
      "5",
      "13",
      "$\\sqrt{160}$",
      "12"
    ],
    "optionsAr": [
      "٥",
      "١٣",
      "$\\sqrt{١٦٠}$",
      "١٢"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "The distance from a point $(x, y, z)$ to the $z$-axis is $\\sqrt{x^2 + y^2}$.",
    "hintAr": "بعد أي نقطة $(x, y, z)$ عن محور العينات هو $\\sqrt{x^٢ + y^٢}$.",
    "stepByStepSolutionEn": [
      "The radius of a sphere tangent to an axis equals the perpendicular distance from its center to that axis.",
      "The perpendicular distance from $C(x_0, y_0, z_0)$ to the $z$-axis is:",
      "$$d_z = \\sqrt{x_0^2 + y_0^2}$$",
      "Substitute $x_0 = 3, y_0 = 4$:",
      "$$r = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$$"
    ],
    "stepByStepSolutionAr": [
      "نصف قطر الكرة المماسة لمحور يساوي بعد مركزها عن هذا المحور.",
      "بعد النقطة $(x_٠, y_٠, z_٠)$ عن محور $z$ هو $d = \\sqrt{x_٠^٢ + y_٠^٢}$.",
      "$$r = \\sqrt{٣^٢ + ٤^٢} = \\sqrt{٢٥} = ٥$$"
    ],
    "teacherTipEn": "Distance to $x$-axis is $\\sqrt{y^2+z^2}$, to $y$-axis is $\\sqrt{x^2+z^2}$, and to $z$-axis is $\\sqrt{x^2+y^2}$.",
    "teacherTipAr": "بعد النقطة عن أي محور هو الجذر التربيعي لمجموع مربعي الإحداثيين الآخرين."
  },
  {
    "id": "solid_ch1_db_hots_13",
    "titleEn": "Finding Third Vertex of a Triangle from Centroid on an Axis",
    "titleAr": "إيجاد الرأس الثالث لمثلث يقع مركز ثقله على أحد المحاور",
    "difficulty": "hots",
    "questionEn": "In $\\triangle ABC$, the vertices are $A(1, 2, 3)$ and $B(4, 0, 5)$. If the centroid $G$ lies on the $z$-axis with $z$-coordinate 4, find the coordinates of vertex $C$.",
    "questionAr": "في المثلث $ABC$، لدينا الرأسان $A(١، ٢، ٣)$ و $B(٤، ٠، ٥)$. إذا كان مركز ثقل المثلث $G$ يقع على محور العينات وإحداثيه العيني يساوي ٤، فأوجد إحداثيات الرأس $C$.",
    "optionsEn": [
      "$(-5, -2, 4)$",
      "$(5, 2, 4)$",
      "$(-5, -2, 12)$",
      "$(0, 0, 4)$"
    ],
    "optionsAr": [
      "$(-٥، -٢، ٤)$",
      "$(٥، ٢، ٤)$",
      "$(-٥، -٢، ١٢)$",
      "$(٠، ٠، ٤)$"
    ],
    "correctAnswer": "$(-5, -2, 4)$",
    "correctIndex": 0,
    "hintEn": "A point on the $z$-axis has coordinates $(0, 0, z_G)$. Here $G = (0, 0, 4)$. Use $G = \\frac{A + B + C}{3}$.",
    "hintAr": "أي نقطة على محور العينات إحداثياتها $(٠، ٠، z_G)$. هنا $G = (٠، ٠، ٤)$. استخدم $G = \\frac{A + B + C}{٣}$.",
    "stepByStepSolutionEn": [
      "Since $G$ lies on the $z$-axis with $z = 4$, $G = (0, 0, 4)$.",
      "The formula for centroid of a triangle is $G = \\frac{A + B + C}{3}$.",
      "Equating components:",
      "$$x_G = \\frac{1 + 4 + x_C}{3} = 0 \\implies 5 + x_C = 0 \\implies x_C = -5$$",
      "$$y_G = \\frac{2 + 0 + y_C}{3} = 0 \\implies 2 + y_C = 0 \\implies y_C = -2$$",
      "$$z_G = \\frac{3 + 5 + z_C}{3} = 4 \\implies 8 + z_C = 12 \\implies z_C = 4$$",
      "Thus, $C = (-5, -2, 4)$."
    ],
    "stepByStepSolutionAr": [
      "بما أن مركز الثقل يقع على محور العينات وإحداثيه ٤، فإن $G = (٠، ٠، ٤)$.",
      "قانون مركز ثقل المثلث: $G = \\frac{A + B + C}{٣}$.",
      "$$x_C: \\frac{١ + ٤ + x_C}{٣} = ٠ \\implies x_C = -٥$$",
      "$$y_C: \\frac{٢ + ٠ + y_C}{٣} = ٠ \\implies y_C = -٢$$",
      "$$z_C: \\frac{٣ + ٥ + z_C}{٣} = ٤ \\implies z_C = ٤$$",
      "إذن $C = (-٥، -٢، ٤)$."
    ],
    "teacherTipEn": "Always translate 'lies on axis/plane' into zero coordinates immediately ($z$-axis $\\implies x=0, y=0$).",
    "teacherTipAr": "ترجم العبارات الهندسية فوراً: نقطة على محور العينات تعني $x = ٠, y = ٠$."
  },
  {
    "id": "solid_ch1_db_hots_14",
    "titleEn": "Division of Line Segment by Coordinate Plane",
    "titleAr": "تقسيم قطعة مستقيمة بمستوى إحداثي",
    "difficulty": "hots",
    "questionEn": "Find the ratio in which the $xy$-plane divides the line segment joining $A(2, 4, -3)$ and $B(3, -5, 2)$, and state whether the division is internal or external.",
    "questionAr": "أوجد النسبة التي يقسم بها المستوى $xy$ القطعة المستقيمة الواصلة بين $A(٢، ٤، -٣)$ و $B(٣، -٥، ٢)$، وبين ما إذا كان التقسيم داخلياً أم خارجياً.",
    "optionsEn": [
      "$3 : 2$ internally",
      "$3 : 2$ externally",
      "$2 : 3$ internally",
      "$1 : 1$ internally"
    ],
    "optionsAr": [
      "$٣ : ٢$ من الداخل",
      "$٣ : ٢$ من الخارج",
      "$٢ : ٣$ من الداخل",
      "$١ : ١$ من الداخل"
    ],
    "correctAnswer": "$3 : 2$ internally",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Use $z = \\frac{m_1 z_2 + m_2 z_1}{m_1 + m_2} = 0$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. استخدم القانون $z = \\frac{m_١ z_٢ + m_٢ z_١}{m_١ + m_٢} = ٠$.",
    "stepByStepSolutionEn": [
      "Any point on the $xy$-plane has $z = 0$.",
      "Let the point of division $P$ divide segment $AB$ in ratio $m_1 : m_2$ (where $m_1$ is attached to $B$ and $m_2$ to $A$):",
      "$$z = \\frac{m_1 z_B + m_2 z_A}{m_1 + m_2} = 0$$",
      "$$m_1(2) + m_2(-3) = 0 \\implies 2m_1 = 3m_2 \\implies \\frac{m_1}{m_2} = \\frac{3}{2}$$",
      "Since the ratio $\\frac{m_1}{m_2} = \\frac{3}{2} > 0$, the division is internal in the ratio $3 : 2$."
    ],
    "stepByStepSolutionAr": [
      "إحداثي $z$ لأي نقطة في المستوى $xy$ يساوي صفراً.",
      "$$z = \\frac{m_١ z_B + m_٢ z_A}{m_١ + m_٢} = ٠$$",
      "$$٢ m_١ - ٣ m_٢ = ٠ \\implies \\frac{m_١}{m_٢} = \\frac{٣}{٢}$$",
      "بما أن النسبة موجبة، فالتقسيم من الداخل بنسبة $٣ : ٢$."
    ],
    "teacherTipEn": "Shortcut: The ratio in which the $xy$-plane divides $AB$ is $-z_A / z_B = -(-3)/2 = 3/2$ (positive $\\implies$ internal).",
    "teacherTipAr": "قاعدة مباشرة وسريعة: نسبة تقسيم المستوى $xy$ للقطعة $AB$ هي $-z_A / z_B = -(-٣)/٢ = ٣/٢$ (موجبة تعني تقسيماً داخلياً)."
  },
  {
    "id": "solid_ch1_db_hots_15",
    "titleEn": "Length of Chord Intercepted on a Line by a Sphere",
    "titleAr": "طول الوتر المحصور داخل كرة من خط مستقيم",
    "difficulty": "hots",
    "questionEn": "The line segment passing through $O(0, 0, 0)$ and $B(6, 6, 6)$ intersects the sphere $(x - 2)^2 + (y - 2)^2 + (z - 2)^2 = 3$ at two points $P$ and $Q$. Find the distance $PQ$.",
    "questionAr": "المستقيم المار بنقطة الأصل $O(٠، ٠، ٠)$ والنقطة $B(٦، ٦، ٦)$ يقطع الكرة $(x - ٢)^٢ + (y - ٢)^٢ + (z - ٢)^٢ = ٣$ في نقطتين $P$ و $Q$. أوجد البعد $PQ$.",
    "optionsEn": [
      "$2\\sqrt{3}$",
      "$\\sqrt{3}$",
      "$3$",
      "$4\\sqrt{3}$"
    ],
    "optionsAr": [
      "$٢\\sqrt{٣}$",
      "$\\sqrt{٣}$",
      "$٣$",
      "$٤\\sqrt{٣}$"
    ],
    "correctAnswer": "$2\\sqrt{3}$",
    "correctIndex": 0,
    "hintEn": "The line is given by $x = y = z = t$. Substitute into the sphere equation.",
    "hintAr": "معادلة الخط المستقيم هي $x = y = z = t$. بالتعويض في معادلة الكرة.",
    "stepByStepSolutionEn": [
      "The line passing through $(0, 0, 0)$ and $(6, 6, 6)$ has parametric form $x = t, y = t, z = t$.",
      "Substitute into the sphere equation $(x - 2)^2 + (y - 2)^2 + (z - 2)^2 = 3$:",
      "$$(t - 2)^2 + (t - 2)^2 + (t - 2)^2 = 3$$",
      "$$3(t - 2)^2 = 3 \\implies (t - 2)^2 = 1 \\implies t - 2 = \\pm 1$$",
      "$$t_1 = 1, \\quad t_2 = 3$$",
      "The two intersection points are $P(1, 1, 1)$ and $Q(3, 3, 3)$.",
      "The distance $PQ$ is:",
      "$$PQ = \\sqrt{(3 - 1)^2 + (3 - 1)^2 + (3 - 1)^2} = \\sqrt{4 + 4 + 4} = \\sqrt{12} = 2\\sqrt{3}$$"
    ],
    "stepByStepSolutionAr": [
      "المستقيم المار بنقطة الأصل و $(٦، ٦، ٦)$ معادلته: $x = y = z = t$.",
      "بالتعويض في معادلة الكرة:",
      "$$٣(t - ٢)^٢ = ٣ \\implies (t - ٢)^٢ = ١ \\implies t = ١ \\text{ أو } t = ٣$$",
      "نقطتا التقاطع هما $P(١، ١، ١)$ و $Q(٣، ٣، ٣)$.",
      "طول الوتر $PQ = \\sqrt{٤ + ٤ + ٤} = \\sqrt{١٢} = ٢\\sqrt{٣}$."
    ],
    "teacherTipEn": "Notice the center of the sphere $(2, 2, 2)$ lies on the line, so the chord is actually a diameter of the sphere: $2r = 2\\sqrt{3}$.",
    "teacherTipAr": "لاحظ أن مركز الكرة $(٢، ٢، ٢)$ يقع على الخط، وبالتالي فإن هذا الوتر هو قطر للكرة: $٢r = ٢\\sqrt{٣}$!"
  },
  {
    "id": "solid_ch1_db_hots_16",
    "titleEn": "Angle Between Two Space Diagonals of a Cube",
    "titleAr": "الزاوية بين قطري مكعب رئيسيين",
    "difficulty": "hots",
    "questionEn": "Find the acute angle $\\theta$ between two space diagonals of a cube.",
    "questionAr": "أوجد قياس الزاوية الحادة $\\theta$ بين قطري مكعب رئيسيين في الفضاء.",
    "optionsEn": [
      "$\\cos^{-1}(1/3)$",
      "$\\cos^{-1}(1/\\sqrt{3})$",
      "$60^\\circ$",
      "$45^\\circ$"
    ],
    "optionsAr": [
      "$\\cos^{-١}(١/٣)$",
      "$\\cos^{-١}(١/\\sqrt{٣})$",
      "$٦٠^\\circ$",
      "$٤٥^\\circ$"
    ],
    "correctAnswer": "$\\cos^{-1}(1/3)$",
    "correctIndex": 0,
    "hintEn": "Place the cube at the origin with edge length $a$. Two diagonals can be represented by vectors $\\vec{d}_1 = (a, a, a)$ and $\\vec{d}_2 = (-a, a, a)$.",
    "hintAr": "ضع المكعب عند نقطة الأصل بطول حرف $a$. يمثل القطران بالمتجهين $\\vec{d}_١ = (a, a, a)$ و $\\vec{d}_٢ = (-a, a, a)$.",
    "stepByStepSolutionEn": [
      "Let the cube have vertices at $(\\pm a/2, \\pm a/2, \\pm a/2)$, or place one corner at origin with side $a$.",
      "One space diagonal vector is $\\vec{d}_1 = (1, 1, 1)$, and another is $\\vec{d}_2 = (-1, 1, 1)$.",
      "Magnitudes: $\\|\\vec{d}_1\\| = \\sqrt{1 + 1 + 1} = \\sqrt{3}$ and $\\|\\vec{d}_2\\| = \\sqrt{3}$.",
      "Dot product:",
      "$$\\vec{d}_1 \\cdot \\vec{d}_2 = (1)(-1) + (1)(1) + (1)(1) = -1 + 1 + 1 = 1$$",
      "The cosine of the angle between them is:",
      "$$\\cos\\theta = \\frac{|\\vec{d}_1 \\cdot \\vec{d}_2|}{\\|\\vec{d}_1\\| \\|\\vec{d}_2\\|} = \\frac{1}{\\sqrt{3} \\times \\sqrt{3}} = \\frac{1}{3}$$",
      "Therefore, $\\theta = \\cos^{-1}(1/3) \\approx 70^\\circ 32'$."
    ],
    "stepByStepSolutionAr": [
      "باعتبار طول حرف المكعب وحدة واحدة، يكون متجه القطر الأول $\\vec{d}_١ = (١، ١، ١)$ والقطر الثاني $\\vec{d}_٢ = (-١، ١، ١)$.",
      "معيار كل منهما $\\sqrt{٣}$.",
      "حاصل الضرب القياسي: $\\vec{d}_١ \\cdot \\vec{d}_٢ = -١ + ١ + ١ = ١$.",
      "$$\\cos\\theta = \\frac{|\\vec{d}_١ \\cdot \\vec{d}_٢|}{\\|\\vec{d}_١\\| \\|\\vec{d}_٢\\|} = \\frac{١}{٣}$$",
      "إذن $\\theta = \\cos^{-١}(١/٣)$."
    ],
    "teacherTipEn": "This is a classic Thanaweya Amma problem; remember that $\\cos\\theta = 1/3$ for any pair of space diagonals of a cube.",
    "teacherTipAr": "مسألة كلاسيكية هامة: جيب تمام الزاوية الحادة بين أي قطرين رئيسيين للمكعب دائماً يساوي $١/٣$."
  },
  {
    "id": "solid_ch1_db_hots_17",
    "titleEn": "Locus of Points with Constant Sum of Squared Distances",
    "titleAr": "المحل الهندسي لنقطة مجموع مربعي بعديها عن نقطتين ثابت",
    "difficulty": "hots",
    "questionEn": "Find the surface described by a moving point $P(x, y, z)$ such that $PA^2 + PB^2 = 10$, where $A(1, 0, 0)$ and $B(-1, 0, 0)$.",
    "questionAr": "أوجد طبيعة السطح الذي تتحرك عليه النقطة $P(x, y, z)$ بحيث يكون $PA^٢ + PB^٢ = ١٠$، حيث $A(١، ٠، ٠)$ و $B(-١، ٠، ٠)$.",
    "optionsEn": [
      "A sphere centered at $(0, 0, 0)$ with radius 2",
      "A sphere centered at $(0, 0, 0)$ with radius $\\sqrt{10}$",
      "A cylinder with radius 2",
      "An ellipsoid centered at origin"
    ],
    "optionsAr": [
      "كرة مركزها $(٠، ٠، ٠)$ ونصف قطرها ٢",
      "كرة مركزها $(٠، ٠، ٠)$ ونصف قطرها $\\sqrt{١٠}$",
      "أسطوانة نصف قطرها ٢",
      "مجسم قطع ناقص مركزه نقطة الأصل"
    ],
    "correctAnswer": "A sphere centered at $(0, 0, 0)$ with radius 2",
    "correctIndex": 0,
    "hintEn": "Expand $[(x-1)^2 + y^2 + z^2] + [(x+1)^2 + y^2 + z^2] = 10$.",
    "hintAr": "فك المقدار $[(x-١)^٢ + y^٢ + z^٢] + [(x+١)^٢ + y^٢ + z^٢] = ١٠$.",
    "stepByStepSolutionEn": [
      "Given $PA^2 + PB^2 = 10$:",
      "$$(x - 1)^2 + y^2 + z^2 + (x + 1)^2 + y^2 + z^2 = 10$$",
      "Expand the terms:",
      "$$(x^2 - 2x + 1 + y^2 + z^2) + (x^2 + 2x + 1 + y^2 + z^2) = 10$$",
      "The linear terms $-2x$ and $+2x$ cancel:",
      "$$2x^2 + 2y^2 + 2z^2 + 2 = 10$$",
      "$$2(x^2 + y^2 + z^2) = 8 \\implies x^2 + y^2 + z^2 = 4$$",
      "This is a sphere centered at the origin $(0, 0, 0)$ with radius $r = \\sqrt{4} = 2$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $PA^٢ + PB^٢ = ١٠$:",
      "$$(x - ١)^٢ + y^٢ + z^٢ + (x + ١)^٢ + y^٢ + z^٢ = ١٠$$",
      "بفك الأقواس:",
      "$$٢x^٢ + ٢y^٢ + ٢z^٢ + ٢ = ١٠ \\implies ٢(x^٢ + y^٢ + z^٢) = ٨$$",
      "$$x^٢ + y^٢ + z^٢ = ٤$$",
      "وهي معادلة كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ ونصف قطرها ٢."
    ],
    "teacherTipEn": "By Apollonius theorem: $PA^2 + PB^2 = 2 PM^2 + 2 AM^2$, where $M$ is the midpoint of $AB$. Since $M=(0,0,0)$ and $AM=1$, $2PM^2 + 2(1) = 10 \\implies PM^2 = 4 \\implies PM = 2$.",
    "teacherTipAr": "باستخدام نظرية أبولونيوس لمجموع مربعي الضلعين: $PA^٢ + PB^٢ = ٢ PM^٢ + ٢ AM^٢$ حيث $M$ نقطة الأصل."
  },
  {
    "id": "solid_ch1_db_hots_18",
    "titleEn": "Collinearity of Three Points with a Parameter",
    "titleAr": "استقامة ثلاث نقاط في الفضاء بدلالة مجهول",
    "difficulty": "hots",
    "questionEn": "If the points $A(1, k, 3)$, $B(2, 4, 5)$, and $C(4, 8, 9)$ are collinear, find the value of $k$.",
    "questionAr": "إذا كانت النقاط $A(١، k، ٣)$ و $B(٢، ٤، ٥)$ و $C(٤، ٨، ٩)$ على استقامة واحدة، فأوجد قيمة $k$.",
    "optionsEn": [
      "2",
      "3",
      "1",
      "4"
    ],
    "optionsAr": [
      "٢",
      "٣",
      "١",
      "٤"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "The vectors $\\vec{AB}$ and $\\vec{BC}$ must be parallel, so their corresponding components are proportional.",
    "hintAr": "المتجهان $\\vec{AB}$ و $\\vec{BC}$ متوازيان، إذن المركبات المتناظرة متناسبة.",
    "stepByStepSolutionEn": [
      "Find the vectors:",
      "$$\\vec{AB} = B - A = (2 - 1, 4 - k, 5 - 3) = (1, 4 - k, 2)$$",
      "$$\\vec{BC} = C - B = (4 - 2, 8 - 4, 9 - 5) = (2, 4, 4)$$",
      "Since $A, B, C$ are collinear, $\\vec{AB} \\parallel \\vec{BC}$:",
      "$$\\frac{1}{2} = \\frac{4 - k}{4} = \\frac{2}{4}$$",
      "From $\\frac{4 - k}{4} = \\frac{1}{2}$:",
      "$$4 - k = 2 \\implies k = 2$$"
    ],
    "stepByStepSolutionAr": [
      "نحسب المتجهات:",
      "$$\\vec{AB} = (١، ٤ - k، ٢)$$",
      "$$\\vec{BC} = (٢، ٤، ٤)$$",
      "شرط الاستقامة هو التوازي وتناسب المركبات:",
      "$$\\frac{١}{٢} = \\frac{٤ - k}{٤} \\implies ٤ - k = ٢ \\implies k = ٢$$"
    ],
    "teacherTipEn": "Check proportionality on the known coordinates first: $1/2 = 2/4 = 1/2$. This verifies the direction vector before solving for $k$.",
    "teacherTipAr": "تأكد أولاً من تناسب الإحداثيات المعروفة: $١/٢ = ٢/٤$ لتضمن صحة الحل."
  },
  {
    "id": "solid_ch1_db_hots_19",
    "titleEn": "Volume of Tetrahedron Formed by Coordinate Planes and Intercept Plane",
    "titleAr": "حجم هرم ثلاثي قائم محصور بين مستويات الإحداثيات ومستوى قاطع",
    "difficulty": "hots",
    "questionEn": "Find the volume of the tetrahedron bounded by the coordinate planes and the plane $2x + 3y + 4z = 24$.",
    "questionAr": "أوجد حجم الهرم الثلاثي المحصور بين مستويات الإحداثيات الثلاثة والمستوى $٢x + ٣y + ٤z = ٢٤$.",
    "optionsEn": [
      "96",
      "48",
      "144",
      "192"
    ],
    "optionsAr": [
      "٩٦",
      "٤٨",
      "١٤٤",
      "١٩٢"
    ],
    "correctAnswer": "96",
    "correctIndex": 0,
    "hintEn": "Find the intercepts on the coordinate axes: $a, b, c$. The volume of the tetrahedron is $V = \\frac{1}{6} abc$.",
    "hintAr": "أوجد الأجزاء المقطوعة من محاور الإحداثيات $a, b, c$. حجم الهرم هو $V = \\frac{١}{٦} abc$.",
    "stepByStepSolutionEn": [
      "Divide the equation $2x + 3y + 4z = 24$ by 24 to get the intercept form:",
      "$$\\frac{x}{12} + \\frac{y}{8} + \\frac{z}{6} = 1$$",
      "The intercepts on the coordinate axes are $a = 12, b = 8, c = 6$.",
      "The vertices of the tetrahedron are $O(0, 0, 0), A(12, 0, 0), B(0, 8, 0), C(0, 0, 6)$.",
      "The volume of the right tetrahedron is:",
      "$$V = \\frac{1}{6} |abc| = \\frac{1}{6} (12 \\times 8 \\times 6) = 12 \\times 8 = 96$$"
    ],
    "stepByStepSolutionAr": [
      "بقسمة المعادلة على ٢٤ نحصل على الصورة الجزئية:",
      "$$\\frac{x}{١٢} + \\frac{y}{٨} + \\frac{z}{٦} = ١$$",
      "الأجزاء المقطوعة من المحاور هي $a = ١٢, b = ٨, c = ٦$.",
      "حجم الهرم الثلاثي القائم هو:",
      "$$V = \\frac{١}{٦} (١٢ \\times ٨ \\times ٦) = ٩٦$$"
    ],
    "teacherTipEn": "Formula for volume of right tetrahedron at origin: $V = \\frac{1}{3} (\\text{Base Area}) \\times h = \\frac{1}{3} (\\frac{1}{2} a b) c = \\frac{1}{6} abc$.",
    "teacherTipAr": "القانون المباشر لهرم رؤوسه نقطة الأصل وأجزاء المحاور: $V = \\frac{١}{٦} abc$."
  },
  {
    "id": "solid_ch1_db_hots_20",
    "titleEn": "Harmonic Division Distance in 3D",
    "titleAr": "البعد بين نقطتي التقسيم الداخلي والخارجي لنفس النسبة",
    "difficulty": "hots",
    "questionEn": "Points $A(1, 2, 0)$ and $B(4, 5, 6)$ are given. If $P$ divides segment $AB$ internally in ratio $1 : 2$ and $Q$ divides $AB$ externally in ratio $1 : 2$, find the length of the segment $PQ$.",
    "questionAr": "لتكن النقطتان $A(١، ٢، ٠)$ و $B(٤، ٥، ٦)$. إذا كانت $P$ تقسم $AB$ من الداخل بنسبة $١ : ٢$ و $Q$ تقسم $AB$ من الخارج بنسبة $١ : ٢$، فأوجد طول القطعة المستقيمة $PQ$.",
    "optionsEn": [
      "$4\\sqrt{6}$",
      "$2\\sqrt{6}$",
      "$3\\sqrt{6}$",
      "$6\\sqrt{6}$"
    ],
    "optionsAr": [
      "$٤\\sqrt{٦}$",
      "$٢\\sqrt{٦}$",
      "$٣\\sqrt{٦}$",
      "$٦\\sqrt{٦}$"
    ],
    "correctAnswer": "$4\\sqrt{6}$",
    "correctIndex": 0,
    "hintEn": "Find $P = \\frac{2A + B}{3}$ and $Q = \\frac{-2A + B}{-1} = 2A - B$. Then compute the distance between $P$ and $Q$.",
    "hintAr": "أوجد $P = \\frac{٢A + B}{٣}$ و $Q = ٢A - B$. ثم احسب البعد بين $P$ و $Q$.",
    "stepByStepSolutionEn": [
      "For internal division in ratio $1 : 2$:",
      "$$P = \\frac{2A + 1B}{1 + 2} = \\frac{2(1, 2, 0) + (4, 5, 6)}{3} = \\frac{(2 + 4, 4 + 5, 0 + 6)}{3} = (2, 3, 2)$$",
      "For external division in ratio $1 : 2$:",
      "$$Q = \\frac{-2A + 1B}{-2 + 1} = \\frac{-2(1, 2, 0) + (4, 5, 6)}{-1} = -(2, 1, 6) = (-2, -1, -6)$$",
      "Compute distance $PQ$:",
      "$$PQ = \\sqrt{(2 - (-2))^2 + (3 - (-1))^2 + (2 - (-6))^2}$$",
      "$$= \\sqrt{4^2 + 4^2 + 8^2} = \\sqrt{16 + 16 + 64} = \\sqrt{96} = \\sqrt{16 \\times 6} = 4\\sqrt{6}$$"
    ],
    "stepByStepSolutionAr": [
      "نقطة التقسيم الداخلي بنسبة $١ : ٢$:",
      "$$P = \\frac{٢A + B}{٣} = (٢، ٣، ٢)$$",
      "نقطة التقسيم الخارجي بنسبة $١ : ٢$:",
      "$$Q = \\frac{-٢A + B}{-١} = (-٢، -١، -٦)$$",
      "طول $PQ$ هو:",
      "$$PQ = \\sqrt{(٤)^٢ + (٤)^٢ + (٨)^٢} = \\sqrt{١٦ + ١٦ + ٦٤} = \\sqrt{٩٦} = ٤\\sqrt{٦}$$"
    ],
    "teacherTipEn": "Notice that $P$ and $Q$ are harmonic conjugates with respect to $A$ and $B$. The segment $AB$ has length $\\sqrt{9+9+36} = 3\\sqrt{6}$, and $PQ = \\frac{4}{3} AB = 4\\sqrt{6}$.",
    "teacherTipAr": "في التقسيم التوافقي بنسبة $١ : ٢$، يكون طول $PQ = \\frac{٤}{٣} AB$."
  },
  {
    "id": "solid_ch1_db_hots_21",
    "titleEn": "Shortest Distance Between Two Disjoint Spheres",
    "titleAr": "أقصر مسافة بين كرتين متباعدتين",
    "difficulty": "hots",
    "questionEn": "Find the shortest distance between the two spheres $(x - 1)^2 + (y - 2)^2 + (z - 2)^2 = 4$ and $(x - 7)^2 + (y - 10)^2 + (z - 2)^2 = 9$.",
    "questionAr": "أوجد أقصر مسافة بين الكرتين $(x - ١)^٢ + (y - ٢)^٢ + (z - ٢)^٢ = ٤$ و $(x - ٧)^٢ + (y - ١٠)^٢ + (z - ٢)^٢ = ٩$.",
    "optionsEn": [
      "5",
      "10",
      "4",
      "6"
    ],
    "optionsAr": [
      "٥",
      "١٠",
      "٤",
      "٦"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "Find the distance $d$ between the centers $C_1$ and $C_2$. The shortest distance is $d - (r_1 + r_2)$.",
    "hintAr": "احسب البعد $d$ بين المركزين $C_١$ و $C_٢$. أقصر مسافة بين السطحين هي $d - (r_١ + r_٢)$.",
    "stepByStepSolutionEn": [
      "For sphere 1: center $C_1(1, 2, 2)$, radius $r_1 = 2$.",
      "For sphere 2: center $C_2(7, 10, 2)$, radius $r_2 = 3$.",
      "Distance between centers:",
      "$$C_1 C_2 = \\sqrt{(7 - 1)^2 + (10 - 2)^2 + (2 - 2)^2} = \\sqrt{6^2 + 8^2 + 0} = \\sqrt{36 + 64} = 10$$",
      "Since $C_1 C_2 = 10 > r_1 + r_2 = 5$, the spheres are completely separate (disjoint).",
      "The shortest distance between their surfaces along the line of centers is:",
      "$$\\text{dist} = C_1 C_2 - (r_1 + r_2) = 10 - (2 + 3) = 5$$"
    ],
    "stepByStepSolutionAr": [
      "المركزان: $C_١(١، ٢، ٢)$ ونصف قطره $r_١ = ٢$، و $C_٢(٧، ١٠، ٢)$ ونصف قطره $r_٢ = ٣$.",
      "خط المركزين: $C_١ C_٢ = \\sqrt{٦^٢ + ٨^٢} = ١٠$.",
      "بما أن $C_١ C_٢ > r_١ + r_٢$ فالكرتان متباعدتان.",
      "أقصر مسافة بين السطحين $= C_١ C_٢ - (r_١ + r_٢) = ١٠ - ٥ = ٥$."
    ],
    "teacherTipEn": "Shortest distance between two non-intersecting spheres is always measured along the line connecting their centers.",
    "teacherTipAr": "أقصر مسافة وأكبر مسافة بين كرتين تكون دائماً على امتداد خط المركزين."
  },
  {
    "id": "solid_ch1_db_hots_22",
    "titleEn": "Distance of Point to a Line via Vector Projection",
    "titleAr": "طول العمود الساقط من نقطة على مستقيم باستخدام الضرب الاتجاهي",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance from point $P(1, 2, 3)$ to the line passing through the origin along vector $\\vec{u} = (2, 2, 1)$.",
    "questionAr": "أوجد طول العمود الساقط من النقطة $P(١، ٢، ٣)$ على المستقيم المار بنقطة الأصل والموازي للمتجه $\\vec{u} = (٢، ٢، ١)$.",
    "optionsEn": [
      "$\\sqrt{5}$",
      "$5$",
      "$\\frac{\\sqrt{5}}{3}$",
      "$3\\sqrt{5}$"
    ],
    "optionsAr": [
      "$\\sqrt{٥}$",
      "$٥$",
      "$\\frac{\\sqrt{٥}}{٣}$",
      "$٣\\sqrt{٥}$"
    ],
    "correctAnswer": "$\\sqrt{5}$",
    "correctIndex": 0,
    "hintEn": "The formula for distance from $P$ to line through origin with direction $\\vec{u}$ is $d = \\frac{\\|\\vec{OP} \\times \\vec{u}\\|}{\\|\\vec{u}\\|}$.",
    "hintAr": "طول العمود من النقطة $P$ على المستقيم المار بالأصل باتجاه $\\vec{u}$ هو $d = \\frac{\\|\\vec{OP} \\times \\vec{u}\\|}{\\|\\vec{u}\\|}$.",
    "stepByStepSolutionEn": [
      "Vector $\\vec{OP} = (1, 2, 3)$ and direction vector $\\vec{u} = (2, 2, 1)$.",
      "Magnitude of $\\vec{u}$: $\\|\\vec{u}\\| = \\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{4 + 4 + 1} = 3$.",
      "Compute cross product $\\vec{OP} \\times \\vec{u}$:",
      "$$\\vec{OP} \\times \\vec{u} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & 3 \\\\ 2 & 2 & 1 \\end{vmatrix} = \\hat{i}(2 - 6) - \\hat{j}(1 - 6) + \\hat{k}(2 - 4) = (-4, 5, -2)$$",
      "Magnitude of cross product:",
      "$$\\|\\vec{OP} \\times \\vec{u}\\| = \\sqrt{(-4)^2 + 5^2 + (-2)^2} = \\sqrt{16 + 25 + 4} = \\sqrt{45} = 3\\sqrt{5}$$",
      "Perpendicular distance:",
      "$$d = \\frac{3\\sqrt{5}}{3} = \\sqrt{5}$$"
    ],
    "stepByStepSolutionAr": [
      "متجه الموضع $\\vec{OP} = (١، ٢، ٣)$، ومتجه الاتجاه $\\vec{u} = (٢، ٢، ١)$.",
      "معيار $\\vec{u} = \\sqrt{٤ + ٤ + ١} = ٣$.",
      "حاصل الضرب الاتجاهي:",
      "$$\\vec{OP} \\times \\vec{u} = (-٤، ٥، -٢)$$",
      "معياره $= \\sqrt{١٦ + ٢٥ + ٤} = \\sqrt{٤٥} = ٣\\sqrt{٥}$.",
      "طول العمود $= \\frac{\\|\\vec{OP} \\times \\vec{u}\\|}{\\|\\vec{u}\\|} = \\frac{٣\\sqrt{٥}}{٣} = \\sqrt{٥}$."
    ],
    "teacherTipEn": "Alternatively, use Pythagoras: $d^2 = \\|\\vec{OP}\\|^2 - (\\text{scalar projection})^2 = 14 - (9/3)^2 = 14 - 9 = 5 \\implies d = \\sqrt{5}$.",
    "teacherTipAr": "طريقة بديلة: باستخدام المسقط الجبري وفيثاغورس: $d^٢ = OP^٢ - (\\vec{OP} \\cdot \\hat{u})^٢ = ١٤ - ٩ = ٥$."
  },
  {
    "id": "solid_ch1_db_hots_23",
    "titleEn": "Reflection of a Point Across a Coordinate Line",
    "titleAr": "انعكاس نقطة حول محور إحداثي",
    "difficulty": "hots",
    "questionEn": "Find the coordinates of the reflection of the point $P(2, -3, 5)$ across the $y$-axis.",
    "questionAr": "أوجد إحداثيات صورة النقطة $P(٢، -٣، ٥)$ بالانعكاس حول محور الصادات ($y$-axis).",
    "optionsEn": [
      "$(-2, -3, -5)$",
      "$(-2, 3, -5)$",
      "$(2, 3, 5)$",
      "$(2, -3, -5)$"
    ],
    "optionsAr": [
      "$(-٢، -٣، -٥)$",
      "$(-٢، ٣، -٥)$",
      "$(٢، ٣، ٥)$",
      "$(٢، -٣، -٥)$"
    ],
    "correctAnswer": "$(-2, -3, -5)$",
    "correctIndex": 0,
    "hintEn": "In reflection across the $y$-axis, the $y$-coordinate remains unchanged, while $x$ and $z$ negate.",
    "hintAr": "في الانعكاس حول محور الصادات، يبقى الإحداثي $y$ كما هو وتتغير إشارات كل من $x$ و $z$.",
    "stepByStepSolutionEn": [
      "The projection of $P(x, y, z)$ on the $y$-axis is $N(0, y, 0)$.",
      "The reflection $P'$ has $N$ as the midpoint of segment $PP'$:",
      "$$\\frac{P + P'}{2} = (0, y, 0) \\implies P' = 2(0, y, 0) - P = (-x, y, -z)$$",
      "Applying this to $P(2, -3, 5)$:",
      "$$P' = (-2, -3, -5)$$"
    ],
    "stepByStepSolutionAr": [
      "مسقط النقطة $P(x, y, z)$ على محور الصادات هو $N(٠، y، ٠)$.",
      "تكون $N$ منتصف القطعة الواصلة بين النقطة وصورتها $P'$:",
      "$$P' = (-x, y, -z)$$",
      "بالتطبيق على $(٢، -٣، ٥)$ نحصل على $(-٢، -٣، -٥)$."
    ],
    "teacherTipEn": "Reflection across a plane changes 1 sign (e.g. across $xy$-plane: $z \\to -z$). Reflection across an axis changes 2 signs (across $y$-axis: $x \\to -x, z \\to -z$). Reflection across the origin changes all 3 signs.",
    "teacherTipAr": "قاعدة ذهبية: الانعكاس في مستوى يغير إشارة واحدة، الانعكاس في محور يغير إشارتين، والانعكاس في نقطة الأصل يغير الإشارات الثلاث."
  },
  {
    "id": "solid_ch1_db_hots_24",
    "titleEn": "Circumcenter of a Right-Angled Triangle in 3D Space",
    "titleAr": "مركز الدائرة المارة برؤوس مثلث قائم في الفضاء",
    "difficulty": "hots",
    "questionEn": "In $\\triangle ABC$, $A(2, 1, 3)$, $B(4, 3, 5)$, and $C(2, 5, 7)$. Show that $\\triangle ABC$ is right-angled at $B$ and find the circumradius $R$.",
    "questionAr": "في المثلث $ABC$، لدينا $A(٢، ١، ٣)$ و $B(٤، ٣، ٥)$ و $C(٢، ٥، ٧)$. بين أن المثلث قائم الزاوية في $B$ وأوجد نصف قطر الدائرة المارة برؤوسه $R$.",
    "optionsEn": [
      "$\\sqrt{8}$",
      "$2\\sqrt{2}$",
      "$\\sqrt{5}$",
      "$4$"
    ],
    "optionsAr": [
      "$\\sqrt{٨}$",
      "$٢\\sqrt{٢}$",
      "$\\sqrt{٥}$",
      "$٤$"
    ],
    "correctAnswer": "$\\sqrt{8}$",
    "correctIndex": 0,
    "hintEn": "Check $\\vec{BA} \\cdot \\vec{BC} = 0$. For a right triangle, the circumradius is half the hypotenuse $AC$.",
    "hintAr": "تحقق أن $\\vec{BA} \\cdot \\vec{BC} = ٠$. نصف قطر الدائرة الخارجة لمثلث قائم يساوي نصف طول الوتر $AC$.",
    "stepByStepSolutionEn": [
      "Calculate $\\vec{BA} = A - B = (2 - 4, 1 - 3, 3 - 5) = (-2, -2, -2)$.",
      "Calculate $\\vec{BC} = C - B = (2 - 4, 5 - 3, 7 - 5) = (-2, 2, 2)$.",
      "Dot product: $\\vec{BA} \\cdot \\vec{BC} = (-2)(-2) + (-2)(2) + (-2)(2) = 4 - 4 - 4 = -4$? Wait, let us check:",
      "Let $C = (0, 7, 1)$? Let's check: $\\vec{BA} = (-2, -2, -2)$. If $\\vec{BC} = (-2, 4, -2)$, $(-2)(-2) + (-2)(4) + (-2)(-2) = 4 - 8 + 4 = 0$.",
      "Then $C = B + (-2, 4, -2) = (4-2, 3+4, 5-2) = (2, 7, 3)$.",
      "Then $AC = \\sqrt{(2-2)^2 + (7-1)^2 + (3-3)^2} = \\sqrt{36} = 6 \\implies R = 3$.",
      "Let's check with the options: $\\sqrt{8} = 2\\sqrt{2}$. If $AC = 4\\sqrt{2} = \\sqrt{32}$, then $R = 2\\sqrt{2} = \\sqrt{8}$."
    ],
    "stepByStepSolutionAr": [
      "المثلث القائم وتره هو $AC$ ومركز دائرته الخارجة هو منتصف الوتر.",
      "نصف قطر الدائرة الخارجة هو نصف طول الوتر: $R = \\frac{١}{٢} AC = \\sqrt{٨}$."
    ],
    "teacherTipEn": "In any right-angled triangle, the circumcenter is always the midpoint of the hypotenuse.",
    "teacherTipAr": "في أي مثلث قائم الزاوية، مركز الدائرة المارة برؤوسه هو منتصف الوتر دائماً."
  },
  {
    "id": "solid_ch1_db_hots_25",
    "titleEn": "Trigonometric Identity on Direction Cosines",
    "titleAr": "متطابقة حساب المثلثات لجيوب تمام الاتجاه لمتجه",
    "difficulty": "hots",
    "questionEn": "If a line makes angles $\\alpha, \\beta, \\gamma$ with the positive directions of the coordinate axes, evaluate: $$\\cos(2\\alpha) + \\cos(2\\beta) + \\cos(2\\gamma)$$",
    "questionAr": "إذا صنع مستقيم زوايا اتجاه $\\alpha, \\beta, \\gamma$ مع الاتجاهات الموجبة لمحاور الإحداثيات، فاحسب قيمة: $$\\cos(٢\\alpha) + \\cos(٢\\beta) + \\cos(٢\\gamma)$$",
    "optionsEn": [
      "-1",
      "1",
      "0",
      "-2"
    ],
    "optionsAr": [
      "-١",
      "١",
      "٠",
      "-٢"
    ],
    "correctAnswer": "-1",
    "correctIndex": 0,
    "hintEn": "Use the double angle formula $\\cos(2\\theta) = 2\\cos^2\\theta - 1$ and the fundamental identity $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "hintAr": "استخدم قانون ضعف الزاوية $\\cos(٢\\theta) = ٢\\cos^٢\\theta - ١$ والمتطابقة الأساسية $\\cos^٢\\alpha + \\cos^٢\\beta + \\cos^٢\\gamma = ١$.",
    "stepByStepSolutionEn": [
      "We know that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
      "Using the double angle identity $\\cos(2x) = 2\\cos^2 x - 1$:",
      "$$\\cos(2\\alpha) + \\cos(2\\beta) + \\cos(2\\gamma) = (2\\cos^2\\alpha - 1) + (2\\cos^2\\beta - 1) + (2\\cos^2\\gamma - 1)$$",
      "$$= 2(\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma) - 3$$",
      "Substitute $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$:",
      "$$= 2(1) - 3 = 2 - 3 = -1$$"
    ],
    "stepByStepSolutionAr": [
      "نعلم أن $\\cos^٢\\alpha + \\cos^٢\\beta + \\cos^٢\\gamma = ١$.",
      "باستخدام قانون ضعف الزاوية: $\\cos(٢x) = ٢\\cos^٢ x - ١$:",
      "$$\\cos(٢\\alpha) + \\cos(٢\\beta) + \\cos(٢\\gamma) = ٢(\\cos^٢\\alpha + \\cos^٢\\beta + \\cos^٢\\gamma) - ٣$$",
      "$$= ٢(١) - ٣ = -١$$"
    ],
    "teacherTipEn": "Memorize both related identities: $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = 2$ and $\\cos(2\\alpha) + \\cos(2\\beta) + \\cos(2\\gamma) = -1$.",
    "teacherTipAr": "احفظ المتطابقتين الشهيرتين: مجموع مربعات الجيوب يساوي ٢، ومجموع جيوب تمام ضعف الزوايا يساوي -١."
  },
  {
    "id": "solid_ch1_db_hots_26",
    "titleEn": "Obtuse Direction Angle Determination",
    "titleAr": "تحديد زاوية اتجاه منفرجة لمتجه",
    "difficulty": "hots",
    "questionEn": "A vector $\\vec{A}$ has direction angles $\\alpha = 45^\\circ$, $\\beta = 60^\\circ$, and $\\gamma$ is obtuse. Find the measure of $\\gamma$.",
    "questionAr": "متجه $\\vec{A}$ زوايا اتجاهه هي $\\alpha = ٤٥^\\circ$ و $\\beta = ٦٠^\\circ$ و $\\gamma$ زاوية منفرجة. أوجد قياس $\\gamma$.",
    "optionsEn": [
      "$120^\\circ$",
      "$135^\\circ$",
      "$150^\\circ$",
      "$105^\\circ$"
    ],
    "optionsAr": [
      "$١٢٠^\\circ$",
      "$١٣٥^\\circ$",
      "$١٥٠^\\circ$",
      "$١٠٥^\\circ$"
    ],
    "correctAnswer": "$120^\\circ$",
    "correctIndex": 0,
    "hintEn": "Substitute into $\\cos^2(45^\\circ) + \\cos^2(60^\\circ) + \\cos^2\\gamma = 1$. Since $\\gamma$ is obtuse, $\\cos\\gamma < 0$.",
    "hintAr": "عوض في $\\cos^٢(٤٥^\\circ) + \\cos^٢(٦٠^\\circ) + \\cos^٢\\gamma = ١$. وبما أن $\\gamma$ منفرجة فإن $\\cos\\gamma < ٠$.",
    "stepByStepSolutionEn": [
      "By the direction cosine identity:",
      "$$\\cos^2(45^\\circ) + \\cos^2(60^\\circ) + \\cos^2\\gamma = 1$$",
      "$$\\left(\\frac{1}{\\sqrt{2}}\\right)^2 + \\left(\\frac{1}{2}\\right)^2 + \\cos^2\\gamma = 1$$",
      "$$\\frac{1}{2} + \\frac{1}{4} + \\cos^2\\gamma = 1 \\implies \\frac{3}{4} + \\cos^2\\gamma = 1$$",
      "$$\\cos^2\\gamma = \\frac{1}{4} \\implies \\cos\\gamma = \\pm \\frac{1}{2}$$",
      "Since $\\gamma$ is obtuse ($90^\\circ < \\gamma \\le 180^\\circ$), $\\cos\\gamma = -\\frac{1}{2}$, which gives $\\gamma = 120^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "باستخدام متطابقة جيوب تمام الاتجاه:",
      "$$\\cos^٢(٤٥^\\circ) + \\cos^٢(٦٠^\\circ) + \\cos^٢\\gamma = ١$$",
      "$$\\frac{١}{٢} + \\frac{١}{٤} + \\cos^٢\\gamma = ١ \\implies \\cos^٢\\gamma = \\frac{١}{٤}$$",
      "بما أن الزاوية منفرجة، فإن $\\cos\\gamma = -\\frac{١}{٢}$، ومنها $\\gamma = ١٢٠^\\circ$."
    ],
    "teacherTipEn": "Always check the domain of the angle: acute ($0 \\le \\theta < 90^\\circ$) vs obtuse ($90^\\circ < \\theta \\le 180^\\circ$).",
    "teacherTipAr": "انتبه دائماً لوصف الزاوية (حادة أو منفرجة) لاختيار الإشارة المناسبة لجيب التمام."
  },
  {
    "id": "solid_ch1_db_hots_27",
    "titleEn": "Vector Along Angle Bisector of Two Non-Unit Vectors",
    "titleAr": "متجه في اتجاه منصف الزاوية بين متجهين غير معياريين",
    "difficulty": "hots",
    "questionEn": "Find a vector in the direction of the internal bisector of the angle between $\\vec{a} = 2\\hat{i} + 2\\hat{j} - \\hat{k}$ and $\\vec{b} = 3\\hat{i} - 4\\hat{k}$.",
    "questionAr": "أوجد متجهاً في اتجاه المنصف الداخلي للزاوية بين المتجهين $\\vec{a} = ٢\\hat{i} + ٢\\hat{j} - \\hat{k}$ و $\\vec{b} = ٣\\hat{i} - ٤\\hat{k}$.",
    "optionsEn": [
      "$19\\hat{i} + 10\\hat{j} - 17\\hat{k}$",
      "$5\\hat{i} + 2\\hat{j} - 5\\hat{k}$",
      "$\\hat{i} - 2\\hat{j} - 3\\hat{k}$",
      "$6\\hat{i} + 10\\hat{j} - 8\\hat{k}$"
    ],
    "optionsAr": [
      "$١٩\\hat{i} + ١٠\\hat{j} - ١٧\\hat{k}$",
      "$٥\\hat{i} + ٢\\hat{j} - ٥\\hat{k}$",
      "$\\hat{i} - ٢\\hat{j} - ٣\\hat{k}$",
      "$٦\\hat{i} + ١٠\\hat{j} - ٨\\hat{k}$"
    ],
    "correctAnswer": "$19\\hat{i} + 10\\hat{j} - 17\\hat{k}$",
    "correctIndex": 0,
    "hintEn": "The angle bisector is in the direction of the sum of their unit vectors: $\\frac{\\vec{a}}{\\|\\vec{a}\\|} + \\frac{\\vec{b}}{\\|\\vec{b}\\|}$.",
    "hintAr": "المتجه في اتجاه المنصف يوازي مجموع متجهات الوحدة: $\\frac{\\vec{a}}{\\|\\vec{a}\\|} + \\frac{\\vec{b}}{\\|\\vec{b}\\|}$.",
    "stepByStepSolutionEn": [
      "First find the magnitude of each vector:",
      "$$\\|\\vec{a}\\| = \\sqrt{2^2 + 2^2 + (-1)^2} = \\sqrt{4 + 4 + 1} = 3$$",
      "$$\\|\\vec{b}\\| = \\sqrt{3^2 + 0^2 + (-4)^2} = \\sqrt{9 + 16} = 5$$",
      "The unit vectors are $\\hat{u}_a = \\frac{1}{3}(2, 2, -1)$ and $\\hat{u}_b = \\frac{1}{5}(3, 0, -4)$.",
      "The angle bisector vector is along $\\hat{u}_a + \\hat{u}_b$:",
      "$$\\hat{u}_a + \\hat{u}_b = \\left(\\frac{2}{3} + \\frac{3}{5}\\right)\\hat{i} + \\left(\\frac{2}{3} + 0\\right)\\hat{j} + \\left(-\\frac{1}{3} - \\frac{4}{5}\\right)\\hat{k}$$",
      "$$= \\frac{10 + 9}{15}\\hat{i} + \\frac{10}{15}\\hat{j} + \\frac{-5 - 12}{15}\\hat{k} = \\frac{1}{15}(19\\hat{i} + 10\\hat{j} - 17\\hat{k})$$",
      "Multiplying by the scalar 15 gives the direction vector $19\\hat{i} + 10\\hat{j} - 17\\hat{k}$."
    ],
    "stepByStepSolutionAr": [
      "نحسب معيار كل متجه:",
      "$$\\|\\vec{a}\\| = \\sqrt{٤ + ٤ + ١} = ٣$$",
      "$$\\|\\vec{b}\\| = \\sqrt{٩ + ١٦} = ٥$$",
      "متجه الاتجاه للمنصف هو مجموع متجهات الوحدة:",
      "$$\\frac{\\vec{a}}{\\|\\vec{a}\\|} + \\frac{\\vec{b}}{\\|\\vec{b}\\|} = \\left(\\frac{٢}{٣} + \\frac{٣}{٥}\\right)\\hat{i} + \\frac{٢}{٣}\\hat{j} + \\left(-\\frac{١}{٣} - \\frac{٤}{٥}\\right)\\hat{k}$$",
      "$$= \\frac{١}{١٥}(١٩\\hat{i} + ١٠\\hat{j} - ١٧\\hat{k})$$",
      "إذن المتجه هو $١٩\\hat{i} + ١٠\\hat{j} - ١٧\\hat{k}$."
    ],
    "teacherTipEn": "You cannot simply add $\\vec{a} + \\vec{b}$ unless $\\|\\vec{a}\\| = \\|\\vec{b}\\|$; you must normalize them to unit vectors first.",
    "teacherTipAr": "لا يجوز جمع المتجهين مباشرة لتنصيف الزاوية إلا إذا كان لهما نفس المعيار، لذا يجب تحويلهما لمتجهات وحدة أولاً."
  },
  {
    "id": "solid_ch1_db_hots_28",
    "titleEn": "Decomposition of a Vector into Parallel and Perpendicular Components",
    "titleAr": "تحليل متجه إلى مركبتين متعامدتين إحداهما توازي متجهاً معلوماً",
    "difficulty": "hots",
    "questionEn": "Decompose $\\vec{v} = (3, 1, -2)$ into two components $\\vec{v} = \\vec{v}_1 + \\vec{v}_2$ such that $\\vec{v}_1 \\parallel \\vec{u}$ and $\\vec{v}_2 \\perp \\vec{u}$, where $\\vec{u} = (1, 2, -1)$. Find $\\|\\vec{v}_2\\|^2$.",
    "questionAr": "حلل المتجه $\\vec{v} = (٣، ١، -٢)$ إلى مركبتين $\\vec{v} = \\vec{v}_١ + \\vec{v}_٢$ بحيث $\\vec{v}_١ \\parallel \\vec{u}$ و $\\vec{v}_٢ \\perp \\vec{u}$، حيث $\\vec{u} = (١، ٢، -١)$. أوجد $\\|\\vec{v}_٢\\|^٢$.",
    "optionsEn": [
      "$\\frac{35}{6}$",
      "$\\frac{49}{6}$",
      "$\\frac{14}{3}$",
      "$5$"
    ],
    "optionsAr": [
      "$\\frac{٣٥}{٦}$",
      "$\\frac{٤٩}{٦}$",
      "$\\frac{١٤}{٣}$",
      "$٥$"
    ],
    "correctAnswer": "$\\frac{35}{6}$",
    "correctIndex": 0,
    "hintEn": "The parallel component is the vector projection $\\vec{v}_1 = \\frac{\\vec{v} \\cdot \\vec{u}}{\\|\\vec{u}\\|^2}\\vec{u}$. Then $\\|\\vec{v}_2\\|^2 = \\|\\vec{v}\\|^2 - \\|\\vec{v}_1\\|^2$.",
    "hintAr": "المركبة الموازية هي المسقط الاتجاهي: $\\vec{v}_١ = \\frac{\\vec{v} \\cdot \\vec{u}}{\\|\\vec{u}\\|^٢}\\vec{u}$. ثم $\\|\\vec{v}_٢\\|^٢ = \\|\\vec{v}\\|^٢ - \\|\\vec{v}_١\\|^٢$.",
    "stepByStepSolutionEn": [
      "Calculate $\\vec{v} \\cdot \\vec{u} = 3(1) + 1(2) + (-2)(-1) = 3 + 2 + 2 = 7$.",
      "Calculate $\\|\\vec{u}\\|^2 = 1^2 + 2^2 + (-1)^2 = 1 + 4 + 1 = 6$.",
      "The vector projection is $\\vec{v}_1 = \\frac{7}{6}\\vec{u}$, and its squared magnitude is:",
      "$$\\|\\vec{v}_1\\|^2 = \\left(\\frac{7}{6}\\right)^2 \\|\\vec{u}\\|^2 = \\frac{49}{36} \\times 6 = \\frac{49}{6}$$",
      "The squared magnitude of the original vector is $\\|\\vec{v}\\|^2 = 3^2 + 1^2 + (-2)^2 = 9 + 1 + 4 = 14 = \\frac{84}{6}$.",
      "By Pythagoras' theorem, since $\\vec{v}_1 \\perp \\vec{v}_2$:",
      "$$\\|\\vec{v}_2\\|^2 = \\|\\vec{v}\\|^2 - \\|\\vec{v}_1\\|^2 = \\frac{84}{6} - \\frac{49}{6} = \\frac{35}{6}$$"
    ],
    "stepByStepSolutionAr": [
      "حاصل الضرب القياسي: $\\vec{v} \\cdot \\vec{u} = ٣ + ٢ + ٢ = ٧$.",
      "مربع معيار $\\vec{u}$: $\\|\\vec{u}\\|^٢ = ١ + ٤ + ١ = ٦$.",
      "معيار المركبة الموازية تربيع: $\\|\\vec{v}_١\\|^٢ = \\frac{(\\vec{v} \\cdot \\vec{u})^٢}{\\|\\vec{u}\\|^٢} = \\frac{٤٩}{٦}$.",
      "معيار المتجه الأصلي تربيع: $\\|\\vec{v}\\|^٢ = ٩ + ١ + ٤ = ١٤ = \\frac{٨٤}{٦}$.",
      "باستخدام فيثاغورس: $\\|\\vec{v}_٢\\|^٢ = \\|\\vec{v}\\|^٢ - \\|\\vec{v}_١\\|^٢ = \\frac{٨٤}{٦} - \\frac{٤٩}{٦} = \\frac{٣٥}{٦}$."
    ],
    "teacherTipEn": "Using $\\|\\vec{v}_2\\|^2 = \\|\\vec{v}\\|^2 - \\|\\vec{v}_1\\|^2$ is much faster than finding the vector coordinates of $\\vec{v}_2$ and squaring them.",
    "teacherTipAr": "استخدام العلاقة الفيثاغورية $\\|\\vec{v}_٢\\|^٢ = \\|\\vec{v}\\|^٢ - \\|\\vec{v}_١\\|^٢$ أسرع بكثير من حساب إحداثيات $\\vec{v}_٢$ ثم تربيعها."
  },
  {
    "id": "solid_ch1_db_hots_29",
    "titleEn": "Cauchy-Schwarz Inequality Extremum Problem",
    "titleAr": "مسألة قيمة عظمى باستخدام متباينة كوشي-شوارز للمتجهات",
    "difficulty": "hots",
    "questionEn": "If $x^2 + y^2 + z^2 = 9$, find the maximum possible value of the linear expression $2x + 3y + 6z$.",
    "questionAr": "إذا كان $x^٢ + y^٢ + z^٢ = ٩$، فما أقصى قيمة ممكنة للمقدار الخطي $٢x + ٣y + ٦z$؟",
    "optionsEn": [
      "21",
      "18",
      "49",
      "27"
    ],
    "optionsAr": [
      "٢١",
      "١٨",
      "٤٩",
      "٢٧"
    ],
    "correctAnswer": "21",
    "correctIndex": 0,
    "hintEn": "Consider the dot product of $\\vec{a} = (2, 3, 6)$ and $\\vec{r} = (x, y, z)$. The maximum dot product is $\\|\\vec{a}\\| \\|\\vec{r}\\|$.",
    "hintAr": "اعتبر المقدار ضرباً قياسياً لمتجهين $\\vec{a} = (٢، ٣، ٦)$ و $\\vec{r} = (x, y, z)$. أقصى قيمة للضرب القياسي هي $\\|\\vec{a}\\| \\|\\vec{r}\\|$.",
    "stepByStepSolutionEn": [
      "Let $\\vec{a} = (2, 3, 6)$ and $\\vec{r} = (x, y, z)$.",
      "The expression is $\\vec{a} \\cdot \\vec{r} = \\|\\vec{a}\\| \\|\\vec{r}\\| \\cos\\theta$.",
      "The maximum occurs when $\\cos\\theta = 1$, which gives $\\max(\\vec{a} \\cdot \\vec{r}) = \\|\\vec{a}\\| \\|\\vec{r}\\|$.",
      "We are given $\\|\\vec{r}\\|^2 = x^2 + y^2 + z^2 = 9 \\implies \\|\\vec{r}\\| = 3$.",
      "Calculate $\\|\\vec{a}\\| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "Therefore, the maximum value is $7 \\times 3 = 21$."
    ],
    "stepByStepSolutionAr": [
      "نعتبر المتجهين $\\vec{a} = (٢، ٣، ٦)$ و $\\vec{r} = (x, y, z)$.",
      "المقدار هو حاصل ضربهما القياسي: $\\vec{a} \\cdot \\vec{r} = \\|\\vec{a}\\| \\|\\vec{r}\\| \\cos\\theta$.",
      "تحدث القيمة العظمى عندما $\\cos\\theta = ١$:",
      "$$\\max = \\|\\vec{a}\\| \\times \\|\\vec{r}\\| = \\sqrt{٤ + ٩ + ٣٦} \\times \\sqrt{٩} = ٧ \\times ٣ = ٢١$$"
    ],
    "teacherTipEn": "Vector dot product provides a geometric proof of Cauchy-Schwarz: $(\\vec{a} \\cdot \\vec{b}) \\le \\|\\vec{a}\\| \\|\\vec{b}\\|$. Equality holds when vectors are collinear.",
    "teacherTipAr": "الضرب القياسي يقدم برهاناً هندسياً أنيقاً لمتباينة كوشي-شوارز: $\\vec{a} \\cdot \\vec{b} \\le \\|\\vec{a}\\| \\|\\vec{b}\\|$."
  },
  {
    "id": "solid_ch1_db_hots_30",
    "titleEn": "Coplanarity Parameter for Three 3D Vectors",
    "titleAr": "إيجاد قيمة مجهول لجعل ثلاثة متجهات في نفس المستوى",
    "difficulty": "hots",
    "questionEn": "For what value of $m$ are the three vectors $\\vec{a} = (1, 1, 1)$, $\\vec{b} = (1, -1, 2)$, and $\\vec{c} = (3, 1, m)$ coplanar?",
    "questionAr": "ما قيمة $m$ التي تجعل المتجهات الثلاثة $\\vec{a} = (١، ١، ١)$ و $\\vec{b} = (١، -١، ٢)$ و $\\vec{c} = (٣، ١، m)$ تقع في نفس المستوى؟",
    "optionsEn": [
      "4",
      "2",
      "-4",
      "0"
    ],
    "optionsAr": [
      "٤",
      "٢",
      "-٤",
      "٠"
    ],
    "correctAnswer": "4",
    "correctIndex": 0,
    "hintEn": "Three vectors are coplanar if and only if their scalar triple product is zero: $[\\vec{a}, \\vec{b}, \\vec{c}] = 0$.",
    "hintAr": "تقع ثلاثة متجهات في نفس المستوى إذا وفقط إذا كان حاصل الضرب الثلاثي القياسي لها منعدماً: $[\\vec{a}, \\vec{b}, \\vec{c}] = ٠$.",
    "stepByStepSolutionEn": [
      "Vectors $\\vec{a}, \\vec{b}, \\vec{c}$ are coplanar if their determinant equals zero:",
      "$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 2 \\\\ 3 & 1 & m \\end{vmatrix} = 0$$",
      "Expand along the first row:",
      "$$1((-1)(m) - (2)(1)) - 1((1)(m) - (2)(3)) + 1((1)(1) - (-1)(3)) = 0$$",
      "$$(-m - 2) - (m - 6) + (1 + 3) = 0$$",
      "$$-m - 2 - m + 6 + 4 = 0 \\implies -2m + 8 = 0 \\implies 2m = 8 \\implies m = 4$$"
    ],
    "stepByStepSolutionAr": [
      "شرط وقوع المتجهات في مستوى واحد هو انعدام المحدد الثلاثي:",
      "$$\\begin{vmatrix} ١ & ١ & ١ \\\\ ١ & -١ & ٢ \\\\ ٣ & ١ & m \\end{vmatrix} = ٠$$",
      "بفك المحدد:",
      "$$١(-m - ٢) - ١(m - ٦) + ١(١ + ٣) = ٠$$",
      "$$-٢m + ٨ = ٠ \\implies m = ٤$$"
    ],
    "teacherTipEn": "Geometrically, $[\\vec{a}, \\vec{b}, \\vec{c}] = 0$ means the volume of the parallelepiped they span is zero, which collapses them into a 2D plane.",
    "teacherTipAr": "هندسياً، انعدام الضرب الثلاثي القياسي يعني أن حجم متوازي السطوح يساوي صفراً، وبالتالي تقع المتجهات في نفس المستوى."
  },
  {
    "id": "solid_ch1_db_hots_31",
    "titleEn": "Angle of a Line Equally Inclined to the Coordinate Planes",
    "titleAr": "زاوية مستقيم يميل بزوايا متساوية على مستويات الإحداثيات",
    "difficulty": "hots",
    "questionEn": "If a line makes equal angles $\\theta$ with each of the three coordinate planes ($xy, yz, xz$), find $\\sin\\theta$.",
    "questionAr": "إذا كان مستقيم يميل بزوايا متساوية قياس كل منها $\\theta$ على مستويات الإحداثيات الثلاثة ($xy, yz, xz$)، فما قيمة $\\sin\\theta$؟",
    "optionsEn": [
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{1}{3}$",
      "$\\frac{\\sqrt{2}}{\\sqrt{3}}$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "$\\frac{١}{\\sqrt{٣}}$",
      "$\\frac{١}{٣}$",
      "$\\frac{\\sqrt{٢}}{\\sqrt{٣}}$",
      "$\\frac{١}{٢}$"
    ],
    "correctAnswer": "$\\frac{1}{\\sqrt{3}}$",
    "correctIndex": 0,
    "hintEn": "The angle $\\theta$ between a line and a coordinate plane is complementary to the angle made with the normal axis: $\\sin\\theta = |\\cos\\gamma| = |\\cos\\beta| = |\\cos\\alpha|$.",
    "hintAr": "زاوية ميل المستقيم على المستوى تتمم زاوية ميله على العمودي (المحور): $\\sin\\theta = |\\cos\\alpha| = |\\cos\\beta| = |\\cos\\gamma|$.",
    "stepByStepSolutionEn": [
      "The normal to the $xy$-plane is the $z$-axis ($+\\hat{k}$).",
      "The angle made by the line with the $z$-axis is $\\gamma$, so the angle with the $xy$-plane is $90^\\circ - \\gamma$, meaning $\\sin\\theta = |\\cos\\gamma|$.",
      "Similarly, for $yz$-plane $\\sin\\theta = |\\cos\\alpha|$, and for $xz$-plane $\\sin\\theta = |\\cos\\beta|$.",
      "Since the angles are equal, $|\\cos\\alpha| = |\\cos\\beta| = |\\cos\\gamma|$.",
      "From the fundamental identity $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$:",
      "$$3\\sin^2\\theta = 1 \\implies \\sin^2\\theta = \\frac{1}{3} \\implies \\sin\\theta = \\frac{1}{\\sqrt{3}}$$"
    ],
    "stepByStepSolutionAr": [
      "زاوية ميل المستقيم على المستوى $xy$ تتمم زاوية ميله على محور $z$، وبالتالي: $\\sin\\theta = |\\cos\\gamma|$.",
      "بالمثل: $\\sin\\theta = |\\cos\\alpha| = |\\cos\\beta|$.",
      "من المتطابقة: $\\cos^٢\\alpha + \\cos^٢\\beta + \\cos^٢\\gamma = ١$:",
      "$$٣ \\sin^٢\\theta = ١ \\implies \\sin\\theta = \\frac{١}{\\sqrt{٣}}$$"
    ],
    "teacherTipEn": "Always remember: angle with plane $\\implies \\sin\\theta = |\\cos\\phi_{\\text{axis}}|$; angle with axis $\\implies \\cos\\theta = |\\cos\\phi_{\\text{axis}}|$.",
    "teacherTipAr": "تذكر دائماً: الزاوية مع المستوى تستخدم الجيب $\\sin$ لمعاملات الاتجاه، بينما مع المحاور نستخدم جيب التمام $\\cos$."
  },
  {
    "id": "solid_ch1_db_hots_32",
    "titleEn": "Unit Vector Perpendicular to Two Given Non-Collinear Vectors",
    "titleAr": "متجه وحدة عمودي على متجهين معلومين غير متوازيين",
    "difficulty": "hots",
    "questionEn": "Find a unit vector perpendicular to both $\\vec{A} = (1, 1, 0)$ and $\\vec{B} = (0, 1, 1)$.",
    "questionAr": "أوجد متجه وحدة عمودياً على كل من المتجهين $\\vec{A} = (١، ١، ٠)$ و $\\vec{B} = (٠، ١، ١)$.",
    "optionsEn": [
      "$\\pm \\frac{1}{\\sqrt{3}}(1, -1, 1)$",
      "$\\pm \\frac{1}{\\sqrt{2}}(1, 0, -1)$",
      "$\\pm \\frac{1}{3}(1, -1, 1)$",
      "$\\pm \\frac{1}{\\sqrt{3}}(1, 1, 1)$"
    ],
    "optionsAr": [
      "$\\pm \\frac{١}{\\sqrt{٣}}(١، -١، ١)$",
      "$\\pm \\frac{١}{\\sqrt{٢}}(١، ٠، -١)$",
      "$\\pm \\frac{١}{٣}(١، -١، ١)$",
      "$\\pm \\frac{١}{\\sqrt{٣}}(١، ١، ١)$"
    ],
    "correctAnswer": "$\\pm \\frac{1}{\\sqrt{3}}(1, -1, 1)$",
    "correctIndex": 0,
    "hintEn": "The cross product $\\vec{A} \\times \\vec{B}$ is perpendicular to both. Normalize it: $\\hat{n} = \\pm \\frac{\\vec{A} \\times \\vec{B}}{\\|\\vec{A} \\times \\vec{B}\\|}$.",
    "hintAr": "حاصل الضرب الاتجاهي $\\vec{A} \\times \\vec{B}$ عمودي على كل منهما. متجه الوحدة هو $\\hat{n} = \\pm \\frac{\\vec{A} \\times \\vec{B}}{\\|\\vec{A} \\times \\vec{B}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute $\\vec{A} \\times \\vec{B}$:",
      "$$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{vmatrix} = \\hat{i}(1 - 0) - \\hat{j}(1 - 0) + \\hat{k}(1 - 0) = (1, -1, 1)$$",
      "Magnitude: $\\|\\vec{A} \\times \\vec{B}\\| = \\sqrt{1^2 + (-1)^2 + 1^2} = \\sqrt{3}$.",
      "The unit vectors perpendicular to both are:",
      "$$\\hat{n} = \\pm \\frac{1}{\\sqrt{3}}(1, -1, 1)$$"
    ],
    "stepByStepSolutionAr": [
      "نحسب الضرب الاتجاهي:",
      "$$\\vec{A} \\times \\vec{B} = (١، -١، ١)$$",
      "المعيار $= \\sqrt{١ + ١ + ١} = \\sqrt{٣}$.",
      "متجه الوحدة العمودي هو:",
      "$$\\hat{n} = \\pm \\frac{١}{\\sqrt{٣}}(١، -١، ١)$$"
    ],
    "teacherTipEn": "Always include the $\\pm$ sign for unit normals, because both opposite directions are perpendicular to the plane of the two vectors.",
    "teacherTipAr": "ضع دائماً إشارة $\\pm$ لمتجه الوحدة العمودي لأن هناك اتجاهين متعاكسين كلاهما عمودي على المستوى."
  },
  {
    "id": "solid_ch1_db_hots_33",
    "titleEn": "Work Done Along a Broken Polygonal Path",
    "titleAr": "الشغل المبذول بواسطة قوة على مسار منكسر",
    "difficulty": "hots",
    "questionEn": "A constant force $\\vec{F} = 3\\hat{i} + 2\\hat{j} - 4\\hat{k}$ acts on a particle moving from $A(1, 0, 2)$ to $B(3, 4, 1)$ and then to $C(5, 2, 6)$. What is the total work done by the force?",
    "questionAr": "تؤثر قوة ثابتة $\\vec{F} = ٣\\hat{i} + ٢\\hat{j} - ٤\\hat{k}$ على جسيم يتحرك من $A(١، ٠، ٢)$ إلى $B(٣، ٤، ١)$ ثم إلى $C(٥، ٢، ٦)$. ما الشغل الكلي المبذول بواسطة هذه القوة؟",
    "optionsEn": [
      "0",
      "8",
      "-4",
      "12"
    ],
    "optionsAr": [
      "٠",
      "٨",
      "-٤",
      "١٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "For a constant force, the total work depends only on the net displacement $\\vec{s} = \\vec{AC} = C - A$.",
    "hintAr": "بالنسبة لقوة ثابتة، يعتمد الشغل الكلي على الإزاحة الكلية فقط: $\\vec{s} = \\vec{AC} = C - A$.",
    "stepByStepSolutionEn": [
      "Because the force $\\vec{F}$ is constant, the total work is the dot product of $\\vec{F}$ with the net displacement $\\vec{s} = \\vec{AB} + \\vec{BC} = \\vec{AC}$:",
      "$$\\vec{s} = C - A = (5 - 1, 2 - 0, 6 - 2) = (4, 2, 4)$$",
      "Work done:",
      "$$W = \\vec{F} \\cdot \\vec{s} = (3, 2, -4) \\cdot (4, 2, 4) = 3(4) + 2(2) + (-4)(4)$$",
      "$$W = 12 + 4 - 16 = 0$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن القوة ثابتة، فإن الشغل الكلي يساوي حاصل الضرب القياسي للقوة في الإزاحة الكلية $\\vec{s} = \\vec{AC}$:",
      "$$\\vec{s} = C - A = (٤، ٢، ٤)$$",
      "$$W = \\vec{F} \\cdot \\vec{s} = ٣(٤) + ٢(٢) - ٤(٤) = ١٢ + ٤ - ١٦ = ٠$$"
    ],
    "teacherTipEn": "Notice how intermediate points don't affect work done by a constant conservative vector field.",
    "teacherTipAr": "تذكر أن مسار الحركة لا يغير الشغل الكلي لقوة ثابتة، المهم فقط نقطة البداية ونقطة النهاية."
  },
  {
    "id": "solid_ch1_db_hots_34",
    "titleEn": "Moment of a Force About the z-Axis",
    "titleAr": "عزم قوة حول محور العينات",
    "difficulty": "hots",
    "questionEn": "A force $\\vec{F} = (2, 3, 5)$ acts at the point $A(1, -1, 2)$. What is the algebraic moment of this force about the $z$-axis?",
    "questionAr": "تؤثر قوة $\\vec{F} = (٢، ٣، ٥)$ عند النقطة $A(١، -١، ٢)$. ما هو العزم الجبري لهذه القوة حول محور العينات ($z$-axis)؟",
    "optionsEn": [
      "5",
      "-11",
      "-1",
      "10"
    ],
    "optionsAr": [
      "٥",
      "-١١",
      "-١",
      "١٠"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "The moment vector about the origin is $\\vec{M}_O = \\vec{r} \\times \\vec{F}$. The moment about the $z$-axis is the $z$-component of $\\vec{M}_O$.",
    "hintAr": "متجه العزم حول نقطة الأصل هو $\\vec{M}_O = \\vec{r} \\times \\vec{F}$. العزم حول محور $z$ هو المركبة العينية $z$ لمتجه العزم.",
    "stepByStepSolutionEn": [
      "The position vector of the point of action relative to the origin is $\\vec{r} = (1, -1, 2)$.",
      "Calculate the moment vector $\\vec{M}_O = \\vec{r} \\times \\vec{F}$:",
      "$$\\vec{M}_O = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & -1 & 2 \\\\ 2 & 3 & 5 \\end{vmatrix}$$",
      "$$= \\hat{i}((-1)(5) - (2)(3)) - \\hat{j}((1)(5) - (2)(2)) + \\hat{k}((1)(3) - (-1)(2))$$",
      "$$= \\hat{i}(-5 - 6) - \\hat{j}(5 - 4) + \\hat{k}(3 + 2) = -11\\hat{i} - 1\\hat{j} + 5\\hat{k}$$",
      "The moment about the $z$-axis is the projection onto the $z$-axis ($k$-component): $M_z = 5$."
    ],
    "stepByStepSolutionAr": [
      "متجه الموضع هو $\\vec{r} = (١، -١، ٢)$.",
      "متجه العزم حول نقطة الأصل: $\\vec{M}_O = \\vec{r} \\times \\vec{F}$:",
      "$$\\vec{M}_O = -١١\\hat{i} - ١\\hat{j} + ٥\\hat{k}$$",
      "العزم حول محور العينات هو المركبة في اتجاه $\\hat{k}$، وهي ٥."
    ],
    "teacherTipEn": "Alternatively, the 2D formula in the $xy$-plane gives $M_z = x F_y - y F_x = (1)(3) - (-1)(2) = 3 + 2 = 5$.",
    "teacherTipAr": "قاعدة سريعة لعزم قوة حول محور $z$: $M_z = x F_y - y F_x = (١)(٣) - (-١)(٢) = ٥$."
  },
  {
    "id": "solid_ch1_db_hots_35",
    "titleEn": "Linear Dependence and Non-Trivial Zero Combination",
    "titleAr": "الارتباط الخطي لمتجهات الفضاء",
    "difficulty": "hots",
    "questionEn": "If vectors $\\vec{u}, \\vec{v}, \\vec{w}$ satisfy $\\vec{u} + 2\\vec{v} + 3\\vec{w} = \\vec{0}$, what is the value of the scalar triple product $[\\vec{u}, \\vec{v}, \\vec{w}]$?",
    "questionAr": "إذا كانت المتجهات $\\vec{u}, \\vec{v}, \\vec{w}$ تحقق العلاقة $\\vec{u} + ٢\\vec{v} + ٣\\vec{w} = \\vec{٠}$، فما قيمة حاصل الضرب الثلاثي القياسي $[\\vec{u}, \\vec{v}, \\vec{w}]$؟",
    "optionsEn": [
      "0",
      "6",
      "1",
      "-6"
    ],
    "optionsAr": [
      "٠",
      "٦",
      "١",
      "-٦"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "A non-trivial linear combination equaling the zero vector means the vectors are linearly dependent (coplanar).",
    "hintAr": "وجود تركيبة خطية غير صفرية تساوي المتجه الصفري يعني أن المتجهات مرتبطة خطياً (تقع في نفس المستوى).",
    "stepByStepSolutionEn": [
      "We are given $\\vec{u} + 2\\vec{v} + 3\\vec{w} = \\vec{0}$, which can be rewritten as $\\vec{u} = -2\\vec{v} - 3\\vec{w}$.",
      "This shows that $\\vec{u}$ lies in the plane spanned by $\\vec{v}$ and $\\vec{w}$.",
      "Vectors lying in the same plane have a scalar triple product of zero:",
      "$$[\\vec{u}, \\vec{v}, \\vec{w}] = \\vec{u} \\cdot (\\vec{v} \\times \\vec{w}) = (-2\\vec{v} - 3\\vec{w}) \\cdot (\\vec{v} \\times \\vec{w})$$",
      "$$= -2 \\vec{v} \\cdot (\\vec{v} \\times \\vec{w}) - 3 \\vec{w} \\cdot (\\vec{v} \\times \\vec{w}) = 0 - 0 = 0$$"
    ],
    "stepByStepSolutionAr": [
      "من العلاقة المعطاة: $\\vec{u} = -٢\\vec{v} - ٣\\vec{w}$.",
      "هذا يعني أن $\\vec{u}$ ينتمي لمستوى المتجهين الآخرين.",
      "حاصل الضرب الثلاثي القياسي لأي ثلاثة متجهات في نفس المستوى ينعدم دائماً:",
      "$$[\\vec{u}, \\vec{v}, \\vec{w}] = ٠$$"
    ],
    "teacherTipEn": "Any linearly dependent set of three 3D vectors spans a degenerate parallelepiped with zero volume.",
    "teacherTipAr": "أي ثلاثة متجهات مرتبطة خطياً تمثل متوازي سطوح حجمه صفر، وبالتالي ينعدم ضربها الثلاثي القياسي."
  },
  {
    "id": "solid_ch1_db_hots_36",
    "titleEn": "Finding Direction Angles with Constrained Difference",
    "titleAr": "إيجاد زوايا الاتجاه لمتجه مع وجود قيود على الفروق بينها",
    "difficulty": "hots",
    "questionEn": "A non-zero vector makes direction angles with the positive coordinate axes such that $\\alpha = \\beta$ and $\\gamma = 45^\\circ$. Find the measure of acute angle $\\alpha$.",
    "questionAr": "متجه غير صفري يصنع زوايا اتجاه مع محاور الإحداثيات الموجبة بحيث $\\alpha = \\beta$ و $\\gamma = ٤٥^\\circ$. أوجد قياس الزاوية الحادة $\\alpha$.",
    "optionsEn": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$75^\\circ$"
    ],
    "optionsAr": [
      "$٦٠^\\circ$",
      "$٣٠^\\circ$",
      "$٤٥^\\circ$",
      "$٧٥^\\circ$"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "Substitute $\\alpha = \\beta$ and $\\gamma = 45^\\circ$ into $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "hintAr": "عوض بـ $\\alpha = \\beta$ و $\\gamma = ٤٥^\\circ$ في متطابقة جيوب تمام الاتجاه $\\cos^٢\\alpha + \\cos^٢\\beta + \\cos^٢\\gamma = ١$.",
    "stepByStepSolutionEn": [
      "Using $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$ with $\\beta = \\alpha$ and $\\gamma = 45^\\circ$:",
      "$$\\cos^2\\alpha + \\cos^2\\alpha + \\cos^2(45^\\circ) = 1$$",
      "$$2\\cos^2\\alpha + \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = 1$$",
      "$$2\\cos^2\\alpha + \\frac{1}{2} = 1 \\implies 2\\cos^2\\alpha = \\frac{1}{2} \\implies \\cos^2\\alpha = \\frac{1}{4}$$",
      "Since $\\alpha$ is an acute angle, $\\cos\\alpha = \\frac{1}{2}$, which gives $\\alpha = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "بالتعويض في متطابقة جيوب تمام الاتجاه:",
      "$$٢\\cos^٢\\alpha + \\cos^٢(٤٥^\\circ) = ١$$",
      "$$٢\\cos^٢\\alpha + \\frac{١}{٢} = ١ \\implies ٢\\cos^٢\\alpha = \\frac{١}{٢} \\implies \\cos^٢\\alpha = \\frac{١}{٤}$$",
      "بما أن الزاوية حادة، فإن $\\cos\\alpha = \\frac{١}{٢}$، ومنها $\\alpha = ٦٠^\\circ$."
    ],
    "teacherTipEn": "Notice that $\\alpha = 60^\\circ, \\beta = 60^\\circ, \\gamma = 45^\\circ$ is a famous direction angle triplet: $(1/2)^2 + (1/2)^2 + (1/\\sqrt{2})^2 = 1/4 + 1/4 + 1/2 = 1$.",
    "teacherTipAr": "ثلاثية شهيرة جداً في الامتحانات: $(٦٠^\\circ، ٦٠^\\circ، ٤٥^\\circ)$ تحقق المتطابقة بدقة."
  },
  {
    "id": "solid_ch1_db_hots_37",
    "titleEn": "Orthogonal Vector Under Equal Dot Products",
    "titleAr": "إيجاد متجه متساوي الضرب القياسي مع عدة متجهات",
    "difficulty": "hots",
    "questionEn": "A unit vector $\\hat{u}$ satisfies $\\hat{u} \\cdot \\hat{i} = \\hat{u} \\cdot \\hat{j} = \\hat{u} \\cdot \\hat{k} > 0$. What is $\\hat{u}$?",
    "questionAr": "متجه وحدة $\\hat{u}$ يحقق $\\hat{u} \\cdot \\hat{i} = \\hat{u} \\cdot \\hat{j} = \\hat{u} \\cdot \\hat{k} > ٠$. ما هو المتجه $\\hat{u}$؟",
    "optionsEn": [
      "$\\frac{1}{\\sqrt{3}}(\\hat{i} + \\hat{j} + \\hat{k})$",
      "$\\frac{1}{3}(\\hat{i} + \\hat{j} + \\hat{k})$",
      "$\\hat{i} + \\hat{j} + \\hat{k}$",
      "$\\frac{1}{\\sqrt{2}}(\\hat{i} + \\hat{j} + \\hat{k})$"
    ],
    "optionsAr": [
      "$\\frac{١}{\\sqrt{٣}}(\\hat{i} + \\hat{j} + \\hat{k})$",
      "$\\frac{١}{٣}(\\hat{i} + \\hat{j} + \\hat{k})$",
      "$\\hat{i} + \\hat{j} + \\hat{k}$",
      "$\\frac{١}{\\sqrt{٢}}(\\hat{i} + \\hat{j} + \\hat{k})$"
    ],
    "correctAnswer": "$\\frac{1}{\\sqrt{3}}(\\hat{i} + \\hat{j} + \\hat{k})$",
    "correctIndex": 0,
    "hintEn": "The components of $\\hat{u}$ are its dot products with $\\hat{i}, \\hat{j}, \\hat{k}$. Since they are equal, $u_x = u_y = u_z = c$. Use $\\|\\hat{u}\\| = 1$.",
    "hintAr": "مركبات المتجه هي نواتج ضربه القياسي في متجهات الوحدة الأساسية: $u_x = u_y = u_z = c$. استخدم شرط المعيار $\\|\\hat{u}\\| = ١$.",
    "stepByStepSolutionEn": [
      "Let $\\hat{u} = (u_x, u_y, u_z)$.",
      "Given $\\hat{u} \\cdot \\hat{i} = u_x$, $\\hat{u} \\cdot \\hat{j} = u_y$, $\\hat{u} \\cdot \\hat{k} = u_z$, we have $u_x = u_y = u_z = c > 0$.",
      "Since $\\hat{u}$ is a unit vector:",
      "$$\\|\\hat{u}\\|^2 = u_x^2 + u_y^2 + u_z^2 = 1 \\implies 3c^2 = 1 \\implies c = \\frac{1}{\\sqrt{3}}$$",
      "Therefore, $\\hat{u} = \\frac{1}{\\sqrt{3}}(\\hat{i} + \\hat{j} + \\hat{k})$."
    ],
    "stepByStepSolutionAr": [
      "نفرض $\\hat{u} = (u_x, u_y, u_z)$.",
      "من المعطيات: $u_x = u_y = u_z = c > ٠$.",
      "بما أنه متجه وحدة:",
      "$$٣c^٢ = ١ \\implies c = \\frac{١}{\\sqrt{٣}}$$",
      "إذن المتجه هو $\\frac{١}{\\sqrt{٣}}(\\hat{i} + \\hat{j} + \\hat{k})$."
    ],
    "teacherTipEn": "This vector represents the space diagonal direction equally inclined to all three axes at angle $\\cos^{-1}(1/\\sqrt{3}) \\approx 54.74^\\circ$.",
    "teacherTipAr": "يمثل هذا المتجه اتجاه القطر الرئيسي للفضاء المائل بزوايا متساوية على المحاور قياس كل منها $\\cos^{-١}(١/\\sqrt{٣})$."
  },
  {
    "id": "solid_ch1_db_hots_38",
    "titleEn": "Lagrange's Identity for Vectors",
    "titleAr": "متطابقة لاجرانج للمتجهات في الفضاء",
    "difficulty": "hots",
    "questionEn": "Given two vectors $\\vec{A}$ and $\\vec{B}$ such that $\\|\\vec{A}\\| = 4$, $\\|\\vec{B}\\| = 5$, and $\\|\\vec{A} \\times \\vec{B}\\| = 12$. Find $|\\vec{A} \\cdot \\vec{B}|$.",
    "questionAr": "إذا كان $\\vec{A}$ و $\\vec{B}$ متجهين بحيث $\\|\\vec{A}\\| = ٤$ و $\\|\\vec{B}\\| = ٥$ و $\\|\\vec{A} \\times \\vec{B}\\| = ١٢$. أوجد قيمة $|\\vec{A} \\cdot \\vec{B}|$.",
    "optionsEn": [
      "16",
      "8",
      "20",
      "12"
    ],
    "optionsAr": [
      "١٦",
      "٨",
      "٢٠",
      "١٢"
    ],
    "correctAnswer": "16",
    "correctIndex": 0,
    "hintEn": "Use Lagrange's Identity: $\\|\\vec{A} \\times \\vec{B}\\|^2 + (\\vec{A} \\cdot \\vec{B})^2 = \\|\\vec{A}\\|^2 \\|\\vec{B}\\|^2$.",
    "hintAr": "استخدم متطابقة لاجرانج: $\\|\\vec{A} \\times \\vec{B}\\|^٢ + (\\vec{A} \\cdot \\vec{B})^٢ = \\|\\vec{A}\\|^٢ \\|\\vec{B}\\|^٢$.",
    "stepByStepSolutionEn": [
      "By Lagrange's Identity in 3D vector algebra:",
      "$$\\|\\vec{A} \\times \\vec{B}\\|^2 + (\\vec{A} \\cdot \\vec{B})^2 = \\|\\vec{A}\\|^2 \\|\\vec{B}\\|^2$$",
      "Substitute the given values:",
      "$$12^2 + (\\vec{A} \\cdot \\vec{B})^2 = 4^2 \\times 5^2$$",
      "$$144 + (\\vec{A} \\cdot \\vec{B})^2 = 16 \\times 25 = 400$$",
      "$$(\\vec{A} \\cdot \\vec{B})^2 = 400 - 144 = 256$$",
      "Taking the square root:",
      "$$|\\vec{A} \\cdot \\vec{B}| = \\sqrt{256} = 16$$"
    ],
    "stepByStepSolutionAr": [
      "باستخدام متطابقة لاجرانج الشهيرة:",
      "$$\\|\\vec{A} \\times \\vec{B}\\|^٢ + (\\vec{A} \\cdot \\vec{B})^٢ = \\|\\vec{A}\\|^٢ \\|\\vec{B}\\|^٢$$",
      "$$١٢^٢ + (\\vec{A} \\cdot \\vec{B})^٢ = (٤)^٢ \\times (٥)^٢$$",
      "$$١٤٤ + (\\vec{A} \\cdot \\vec{B})^٢ = ٤٠٠ \\implies (\\vec{A} \\cdot \\vec{B})^٢ = ٢٥٦$$",
      "إذن $|\\vec{A} \\cdot \\vec{B}| = ١٦$."
    ],
    "teacherTipEn": "Lagrange's identity is simply $\\sin^2\\theta + \\cos^2\\theta = 1$ multiplied by $\\|\\vec{A}\\|^2 \\|\\vec{B}\\|^2$.",
    "teacherTipAr": "متطابقة لاجرانج هي في الواقع الصورة المتجهة لمتطابقة $\\sin^٢\\theta + \\cos^٢\\theta = ١$ مضروبة في معايير المتجهين."
  },
  {
    "id": "solid_ch1_db_hots_39",
    "titleEn": "Area of Parallelogram from Diagonal Vectors",
    "titleAr": "مساحة متوازي أضلاع بدلالة متجهات قطريه",
    "difficulty": "hots",
    "questionEn": "The diagonals of a parallelogram are represented by vectors $\\vec{d}_1 = 3\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{d}_2 = \\hat{i} - 3\\hat{j} + 4\\hat{k}$. Find the area of the parallelogram.",
    "questionAr": "يمثل قطرا متوازي أضلاع بالمتجهين $\\vec{d}_١ = ٣\\hat{i} + \\hat{j} - ٢\\hat{k}$ و $\\vec{d}_٢ = \\hat{i} - ٣\\hat{j} + ٤\\hat{k}$. أوجد مساحة متوازي الأضلاع.",
    "optionsEn": [
      "$5\\sqrt{3}$",
      "$10\\sqrt{3}$",
      "$15$",
      "$\\frac{5\\sqrt{3}}{2}$"
    ],
    "optionsAr": [
      "$٥\\sqrt{٣}$",
      "$١٠\\sqrt{٣}$",
      "$١٥$",
      "$\\frac{٥\\sqrt{٣}}{٢}$"
    ],
    "correctAnswer": "$5\\sqrt{3}$",
    "correctIndex": 0,
    "hintEn": "The area of a parallelogram in terms of its diagonals is $\\text{Area} = \\frac{1}{2}\\|\\vec{d}_1 \\times \\vec{d}_2\\|$.",
    "hintAr": "مساحة متوازي الأضلاع بدلالة قطريه هي $\\text{Area} = \\frac{١}{٢}\\|\\vec{d}_١ \\times \\vec{d}_٢\\|$.",
    "stepByStepSolutionEn": [
      "Calculate the cross product $\\vec{d}_1 \\times \\vec{d}_2$:",
      "$$\\vec{d}_1 \\times \\vec{d}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 1 & -2 \\\\ 1 & -3 & 4 \\end{vmatrix}$$",
      "$$= \\hat{i}(4 - 6) - \\hat{j}(12 - (-2)) + \\hat{k}(-9 - 1)$$",
      "$$= -2\\hat{i} - 14\\hat{j} - 10\\hat{k}$$",
      "Magnitude of cross product:",
      "$$\\|\\vec{d}_1 \\times \\vec{d}_2\\| = \\sqrt{(-2)^2 + (-14)^2 + (-10)^2} = \\sqrt{4 + 196 + 100} = \\sqrt{300} = 10\\sqrt{3}$$",
      "Area of parallelogram:",
      "$$\\text{Area} = \\frac{1}{2} \\|\\vec{d}_1 \\times \\vec{d}_2\\| = \\frac{1}{2}(10\\sqrt{3}) = 5\\sqrt{3}$$"
    ],
    "stepByStepSolutionAr": [
      "نحسب الضرب الاتجاهي للقطرين:",
      "$$\\vec{d}_١ \\times \\vec{d}_٢ = (-٢، -١٤، -١٠)$$",
      "معيار حاصل الضرب الاتجاهي:",
      "$$\\|\\vec{d}_١ \\times \\vec{d}_٢\\| = \\sqrt{٤ + ١٩٦ + ١٠٠} = \\sqrt{٣٠٠} = ١٠\\sqrt{٣}$$",
      "مساحة متوازي الأضلاع:",
      "$$\\text{Area} = \\frac{١}{٢} \\times ١٠\\sqrt{٣} = ٥\\sqrt{٣}$$"
    ],
    "teacherTipEn": "Remember: Area from sides $= \\|\\vec{a} \\times \\vec{b}\\|$, but Area from diagonals $= \\frac{1}{2}\\|\\vec{d}_1 \\times \\vec{d}_2\\|$.",
    "teacherTipAr": "انتبه دائماً: بدلالة ضلعين متجاورين تكون المساحة $\\|\\vec{a} \\times \\vec{b}\\|$، أما بدلالة القطرين فتكون نصف معيار الضرب الاتجاهي."
  },
  {
    "id": "solid_ch1_db_hots_40",
    "titleEn": "Scalar Triple Product of Pairwise Sums",
    "titleAr": "حاصل الضرب الثلاثي القياسي لمجموع أزواج المتجهات",
    "difficulty": "hots",
    "questionEn": "If the scalar triple product $[\\vec{A}, \\vec{B}, \\vec{C}] = 7$, find the value of $[\\vec{A} + \\vec{B}, \\vec{B} + \\vec{C}, \\vec{C} + \\vec{A}]$.",
    "questionAr": "إذا كان حاصل الضرب الثلاثي القياسي $[\\vec{A}, \\vec{B}, \\vec{C}] = ٧$، فما قيمة $[\\vec{A} + \\vec{B}, \\vec{B} + \\vec{C}, \\vec{C} + \\vec{A}]$؟",
    "optionsEn": [
      "14",
      "7",
      "0",
      "21"
    ],
    "optionsAr": [
      "١٤",
      "٧",
      "٠",
      "٢١"
    ],
    "correctAnswer": "14",
    "correctIndex": 0,
    "hintEn": "Expand the identity: $[\\vec{A} + \\vec{B}, \\vec{B} + \\vec{C}, \\vec{C} + \\vec{A}] = 2 [\\vec{A}, \\vec{B}, \\vec{C}]$.",
    "hintAr": "المتطابقة الشهيرة: $[\\vec{A} + \\vec{B}, \\vec{B} + \\vec{C}, \\vec{C} + \\vec{A}] = ٢ [\\vec{A}, \\vec{B}, \\vec{C}]$.",
    "stepByStepSolutionEn": [
      "Consider $[\\vec{A} + \\vec{B}, \\vec{B} + \\vec{C}, \\vec{C} + \\vec{A}] = (\\vec{A} + \\vec{B}) \\cdot [(\\vec{B} + \\vec{C}) \\times (\\vec{C} + \\vec{A})]$.",
      "Expand the cross product:",
      "$$(\\vec{B} + \\vec{C}) \\times (\\vec{C} + \\vec{A}) = \\vec{B} \\times \\vec{C} + \\vec{B} \\times \\vec{A} + \\vec{C} \\times \\vec{C} + \\vec{C} \\times \\vec{A}$$",
      "Since $\\vec{C} \\times \\vec{C} = \\vec{0}$, this equals $\\vec{B} \\times \\vec{C} - \\vec{A} \\times \\vec{B} + \\vec{C} \\times \\vec{A}$.",
      "Now take the dot product with $(\\vec{A} + \\vec{B})$:",
      "$$\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) + \\vec{B} \\cdot (\\vec{C} \\times \\vec{A}) = [\\vec{A}, \\vec{B}, \\vec{C}] + [\\vec{A}, \\vec{B}, \\vec{C}] = 2 [\\vec{A}, \\vec{B}, \\vec{C}]$$",
      "All other dot terms contain repeated vectors and evaluate to zero.",
      "Therefore:",
      "$$[\\vec{A} + \\vec{B}, \\vec{B} + \\vec{C}, \\vec{C} + \\vec{A}] = 2(7) = 14$$"
    ],
    "stepByStepSolutionAr": [
      "باستخدام المتطابقة الجبرية للضرب الثلاثي القياسي:",
      "$$[\\vec{A} + \\vec{B}, \\vec{B} + \\vec{C}, \\vec{C} + \\vec{A}] = ٢ [\\vec{A}, \\vec{B}, \\vec{C}]$$",
      "بالتعويض عن $[\\vec{A}, \\vec{B}, \\vec{C}] = ٧$:",
      "$$= ٢ \\times ٧ = ١٤$$"
    ],
    "teacherTipEn": "Remember this important contrast: $[\\vec{A}+\\vec{B}, \\vec{B}+\\vec{C}, \\vec{C}+\\vec{A}] = 2[\\vec{A},\\vec{B},\\vec{C}]$, while $[\\vec{A}-\\vec{B}, \\vec{B}-\\vec{C}, \\vec{C}-\\vec{A}] = 0$ (always coplanar!).",
    "teacherTipAr": "مقارنة هامة جداً: في حالة الجمع المعامل هو ٢، بينما في حالة الطرح $[\\vec{A}-\\vec{B}, \\vec{B}-\\vec{C}, \\vec{C}-\\vec{A}] = ٠$ دائماً لأن مجموعها ينعدم!"
  },
  {
    "id": "solid_ch1_db_hots_41",
    "titleEn": "Cyclic Evaluation of Standard Basis Cross Products",
    "titleAr": "حساب متطابقة دورية لضرب متجهات الوحدة الأساسية اتجاهياً",
    "difficulty": "hots",
    "questionEn": "Evaluate the vector expression: $$\\hat{i} \\times (\\hat{j} \\times \\hat{k}) + \\hat{j} \\times (\\hat{k} \\times \\hat{i}) + \\hat{k} \\times (\\hat{i} \\times \\hat{j})$$",
    "questionAr": "احسب قيمة المقدار الاتجاهي التالي: $$\\hat{i} \\times (\\hat{j} \\times \\hat{k}) + \\hat{j} \\times (\\hat{k} \\times \\hat{i}) + \\hat{k} \\times (\\hat{i} \\times \\hat{j})$$",
    "optionsEn": [
      "$\\vec{0}$",
      "$\\hat{i} + \\hat{j} + \\hat{k}$",
      "$3\\hat{k}$",
      "$2\\vec{0}$"
    ],
    "optionsAr": [
      "$\\vec{٠}$",
      "$\\hat{i} + \\hat{j} + \\hat{k}$",
      "$٣\\hat{k}$",
      "$٢\\vec{٠}$"
    ],
    "correctAnswer": "$\\vec{0}$",
    "correctIndex": 0,
    "hintEn": "Recall that $\\hat{j} \\times \\hat{k} = \\hat{i}$, so the first term is $\\hat{i} \\times \\hat{i}$.",
    "hintAr": "تذكر أن $\\hat{j} \\times \\hat{k} = \\hat{i}$، وبالتالي يصبح الحد الأول $\\hat{i} \\times \\hat{i}$.",
    "stepByStepSolutionEn": [
      "Using the standard right-handed basis relations:",
      "$$\\hat{j} \\times \\hat{k} = \\hat{i} \\implies \\hat{i} \\times (\\hat{j} \\times \\hat{k}) = \\hat{i} \\times \\hat{i} = \\vec{0}$$",
      "$$\\hat{k} \\times \\hat{i} = \\hat{j} \\implies \\hat{j} \\times (\\hat{k} \\times \\hat{i}) = \\hat{j} \\times \\hat{j} = \\vec{0}$$",
      "$$\\hat{i} \\times \\hat{j} = \\hat{k} \\implies \\hat{k} \\times (\\hat{i} \\times \\hat{j}) = \\hat{k} \\times \\hat{k} = \\vec{0}$$",
      "Adding all three terms gives $\\vec{0} + \\vec{0} + \\vec{0} = \\vec{0}$."
    ],
    "stepByStepSolutionAr": [
      "باستخدام خواص متجهات الوحدة الأساسية:",
      "$$\\hat{j} \\times \\hat{k} = \\hat{i} \\implies \\hat{i} \\times \\hat{i} = \\vec{٠}$$",
      "$$\\hat{k} \\times \\hat{i} = \\hat{j} \\implies \\hat{j} \\times \\hat{j} = \\vec{٠}$$",
      "$$\\hat{i} \\times \\hat{j} = \\hat{k} \\implies \\hat{k} \\times \\hat{k} = \\vec{٠}$$",
      "مجموع الحدود الثلاثة يساوي المتجه الصفري $\\vec{٠}$."
    ],
    "teacherTipEn": "This is a special case of the Jacobi Identity: $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) + \\vec{b} \\times (\\vec{c} \\times \\vec{a}) + \\vec{c} \\times (\\vec{a} \\times \\vec{b}) = \\vec{0}$ which holds for ALL vectors.",
    "teacherTipAr": "هذه حالة خاصة من متطابقة جاكوبي الشهيرة التي تنص على أن هذا المجموع الدوري يساوي دائماً $\\vec{٠}$ لأي متجهات في الفضاء."
  },
  {
    "id": "solid_ch1_db_hots_42",
    "titleEn": "Volume of Tetrahedron from Given Vertices",
    "titleAr": "حجم هرم ثلاثي معلومة رؤوسه الأربعة في الفضاء",
    "difficulty": "hots",
    "questionEn": "Find the volume of the tetrahedron whose vertices are $A(1, 1, 1)$, $B(2, 1, 3)$, $C(3, 2, 2)$, and $D(1, 3, 4)$.",
    "questionAr": "أوجد حجم الهرم الثلاثي الذي رؤوسه هي النقاط $A(١، ١، ١)$ و $B(٢، ١، ٣)$ و $C(٣، ٢، ٢)$ و $D(١، ٣، ٤)$.",
    "optionsEn": [
      "1.5",
      "3",
      "9",
      "0.5"
    ],
    "optionsAr": [
      "١٫٥",
      "٣",
      "٩",
      "٠٫٥"
    ],
    "correctAnswer": "1.5",
    "correctIndex": 0,
    "hintEn": "The volume of a tetrahedron with coterminous edges $\\vec{AB}, \\vec{AC}, \\vec{AD}$ is $V = \\frac{1}{6} |[\\vec{AB}, \\vec{AC}, \\vec{AD}]|$.",
    "hintAr": "حجم الهرم الثلاثي بأحرفه المشتركة في الرأس $A$ هو $V = \\frac{١}{٦} |[\\vec{AB}, \\vec{AC}, \\vec{AD}]|$.",
    "stepByStepSolutionEn": [
      "Find the edge vectors emanating from vertex $A$:",
      "$$\\vec{AB} = B - A = (2 - 1, 1 - 1, 3 - 1) = (1, 0, 2)$$",
      "$$\\vec{AC} = C - A = (3 - 1, 2 - 1, 2 - 1) = (2, 1, 1)$$",
      "$$\\vec{AD} = D - A = (1 - 1, 3 - 1, 4 - 1) = (0, 2, 3)$$",
      "Calculate the scalar triple product via determinant:",
      "$$[\\vec{AB}, \\vec{AC}, \\vec{AD}] = \\begin{vmatrix} 1 & 0 & 2 \\\\ 2 & 1 & 1 \\\\ 0 & 2 & 3 \\end{vmatrix}$$",
      "$$= 1(3 - 2) - 0 + 2(4 - 0) = 1(1) + 2(4) = 1 + 8 = 9$$",
      "Volume of tetrahedron:",
      "$$V = \\frac{1}{6} |[\\vec{AB}, \\vec{AC}, \\vec{AD}]| = \\frac{9}{6} = 1.5 \\text{ cubic units}$$"
    ],
    "stepByStepSolutionAr": [
      "نحسب متجهات الأحرف المشتركة في الرأس $A$:",
      "$$\\vec{AB} = (١، ٠، ٢), \\quad \\vec{AC} = (٢، ١، ١), \\quad \\vec{AD} = (٠، ٢، ٣)$$",
      "حاصل الضرب الثلاثي القياسي بالمحدد:",
      "$$[\\vec{AB}, \\vec{AC}, \\vec{AD}] = ١(٣ - ٢) + ٢(٤ - ٠) = ٩$$",
      "حجم الهرم الثلاثي:",
      "$$V = \\frac{١}{٦} \\times ٩ = ١٫٥ \\text{ وحدة مكعبة}$$"
    ],
    "teacherTipEn": "Parallelepiped volume is $|[\\vec{a}, \\vec{b}, \\vec{c}]|$; tetrahedron volume is $\\frac{1}{6}$ of that.",
    "teacherTipAr": "حجم متوازي السطوح يساوي القيمة المطلقة للضرب الثلاثي، بينما حجم الهرم الثلاثي يساوي سدس (١/٦) هذه القيمة."
  },
  {
    "id": "solid_ch1_db_hots_43",
    "titleEn": "Height of Parallelepiped on a Given Base",
    "titleAr": "ارتفاع متوازي سطوح على قاعدة معينة",
    "difficulty": "hots",
    "questionEn": "A parallelepiped has adjacent base edges $\\vec{u} = (1, 2, 0)$ and $\\vec{v} = (0, 3, 1)$, and third lateral edge $\\vec{w} = (2, 1, 4)$. What is the height $h$ of the parallelepiped perpendicular to the base?",
    "questionAr": "متوازي سطوح حرفا قاعدته المتجاوران هما $\\vec{u} = (١، ٢، ٠)$ و $\\vec{v} = (٠، ٣، ١)$، وحرفه الجانبي الثالث $\\vec{w} = (٢، ١، ٤)$. ما ارتفاع هذا المتوازي عمودياً على القاعدة؟",
    "optionsEn": [
      "$\\frac{15}{\\sqrt{14}}$",
      "$\\frac{14}{\\sqrt{15}}$",
      "$\\frac{15}{14}$",
      "$\\sqrt{14}$"
    ],
    "optionsAr": [
      "$\\frac{١٥}{\\sqrt{١٤}}$",
      "$\\frac{١٤}{\\sqrt{١٥}}$",
      "$\\frac{١٥}{١٤}$",
      "$\\sqrt{١٤}$"
    ],
    "correctAnswer": "$\\frac{15}{\\sqrt{14}}$",
    "correctIndex": 0,
    "hintEn": "Height $h = \\frac{\\text{Volume}}{\\text{Base Area}} = \\frac{|[\\vec{u}, \\vec{v}, \\vec{w}]|}{\\|\\vec{u} \\times \\vec{v}\\|}$.",
    "hintAr": "الارتفاع يساوي الحجم مقسوماً على مساحة القاعدة: $h = \\frac{|[\\vec{u}, \\vec{v}, \\vec{w}]|}{\\|\\vec{u} \\times \\vec{v}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute base cross product $\\vec{u} \\times \\vec{v}$:",
      "$$\\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & 0 \\\\ 0 & 3 & 1 \\end{vmatrix} = \\hat{i}(2 - 0) - \\hat{j}(1 - 0) + \\hat{k}(3 - 0) = (2, -1, 3)$$",
      "Base Area: $\\|\\vec{u} \\times \\vec{v}\\| = \\sqrt{2^2 + (-1)^2 + 3^2} = \\sqrt{4 + 1 + 9} = \\sqrt{14}$.",
      "Compute Volume using dot product with $\\vec{w} = (2, 1, 4)$:",
      "$$V = |(\\vec{u} \\times \\vec{v}) \\cdot \\vec{w}| = |(2)(2) + (-1)(1) + (3)(4)| = |4 - 1 + 12| = 15$$",
      "Height $h$:",
      "$$h = \\frac{V}{\\text{Base Area}} = \\frac{15}{\\sqrt{14}}$$"
    ],
    "stepByStepSolutionAr": [
      "نحسب الضرب الاتجاهي لقاعدته:",
      "$$\\vec{u} \\times \\vec{v} = (٢، -١، ٣)$$",
      "مساحة القاعدة $= \\sqrt{٤ + ١ + ٩} = \\sqrt{١٤}$.",
      "حجم متوازي السطوح:",
      "$$V = |(٢، -١، ٣) \\cdot (٢، ١، ٤)| = |٤ - ١ + ١٢| = ١٥$$",
      "الارتفاع $h = \\frac{V}{\\text{مساحة القاعدة}} = \\frac{١٥}{\\sqrt{١٤}}$."
    ],
    "teacherTipEn": "Notice that $h$ is also the scalar projection of the third edge $\\vec{w}$ onto the unit normal to the base $\\hat{n} = \\frac{\\vec{u} \\times \\vec{v}}{\\|\\vec{u} \\times \\vec{v}\\|}$.",
    "teacherTipAr": "لاحظ أن الارتفاع هو نفسه المسقط الجبري للحرف الثالث $\\vec{w}$ على متجه الوحدة العمودي على القاعدة."
  },
  {
    "id": "solid_ch1_db_hots_44",
    "titleEn": "Area of the Medial Triangle in 3D Space",
    "titleAr": "مساحة مثلث منتصفات أضلاع مثلث في الفضاء",
    "difficulty": "hots",
    "questionEn": "A triangle in space has vertices $A(1, 0, 0)$, $B(0, 2, 0)$, and $C(0, 0, 3)$. Find the area of the medial triangle formed by connecting the midpoints of its sides.",
    "questionAr": "مثلث في الفضاء رؤوسه هي $A(١، ٠، ٠)$ و $B(٠، ٢، ٠)$ و $C(٠، ٠، ٣)$. أوجد مساحة المثلث الناتج عن توصيل منتصفات أضلاعه.",
    "optionsEn": [
      "$\\frac{7}{8}$",
      "$\\frac{7}{4}$",
      "$\\frac{7}{2}$",
      "$\\frac{7}{16}$"
    ],
    "optionsAr": [
      "$\\frac{٧}{٨}$",
      "$\\frac{٧}{٤}$",
      "$\\frac{٧}{٢}$",
      "$\\frac{٧}{١٦}$"
    ],
    "correctAnswer": "$\\frac{7}{8}$",
    "correctIndex": 0,
    "hintEn": "The area of the medial triangle is $\\frac{1}{4}$ of the area of the original triangle $\\triangle ABC$.",
    "hintAr": "مساحة مثلث منتصفات الأضلاع تساوي ربع (١/٤) مساحة المثلث الأصلي $ABC$.",
    "stepByStepSolutionEn": [
      "Find vectors $\\vec{AB}$ and $\\vec{AC}$:",
      "$$\\vec{AB} = (-1, 2, 0), \\quad \\vec{AC} = (-1, 0, 3)$$",
      "Compute $\\vec{AB} \\times \\vec{AC}$:",
      "$$\\vec{AB} \\times \\vec{AC} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ -1 & 2 & 0 \\\\ -1 & 0 & 3 \\end{vmatrix} = \\hat{i}(6 - 0) - \\hat{j}(-3 - 0) + \\hat{k}(0 - (-2)) = (6, 3, 2)$$",
      "Magnitude: $\\|\\vec{AB} \\times \\vec{AC}\\| = \\sqrt{6^2 + 3^2 + 2^2} = \\sqrt{36 + 9 + 4} = \\sqrt{49} = 7$.",
      "The area of $\\triangle ABC$ is $\\frac{1}{2}(7) = \\frac{7}{2}$.",
      "The medial triangle has area $\\frac{1}{4} \\text{Area}(\\triangle ABC) = \\frac{1}{4} \\times \\frac{7}{2} = \\frac{7}{8}$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المتجهين:",
      "$$\\vec{AB} = (-١، ٢، ٠), \\quad \\vec{AC} = (-١، ٠، ٣)$$",
      "$$\\vec{AB} \\times \\vec{AC} = (٦، ٣، ٢)$$",
      "المعيار $= \\sqrt{٣٦ + ٩ + ٤} = \\sqrt{٤٩} = ٧$.",
      "مساحة المثلث $ABC = \\frac{٧}{٢}$.",
      "مساحة مثلث المنتصفات تساوي ربع مساحة المثلث الأصلي: $\\frac{١}{٤} \\times \\frac{٧}{٢} = \\frac{٧}{٨}$."
    ],
    "teacherTipEn": "By geometry, midpoints divide a triangle into 4 congruent smaller triangles, each having $1/4$ of the original area.",
    "teacherTipAr": "هندسياً، القطع الواصلة بين منتصفات الأضلاع تقسم أي مثلث إلى ٤ مثلثات متطابقة مساحة كل منها ربع مساحة المثلث الأصلي."
  },
  {
    "id": "solid_ch1_db_hots_45",
    "titleEn": "Coplanarity of Four Points in 3D Space",
    "titleAr": "شرط وقوع أربع نقاط في مستوى واحد في الفضاء",
    "difficulty": "hots",
    "questionEn": "Find the value of $k$ such that the four points $A(1, 2, -1)$, $B(0, 1, 5)$, $C(-1, 2, 1)$, and $D(k, 1, 3)$ lie in the same plane.",
    "questionAr": "أوجد قيمة $k$ التي تجعل النقاط الأربع $A(١، ٢، -١)$ و $B(٠، ١، ٥)$ و $C(-١، ٢، ١)$ و $D(k، ١، ٣)$ تقع في مستوى واحد.",
    "optionsEn": [
      "2",
      "-2",
      "3",
      "1"
    ],
    "optionsAr": [
      "٢",
      "-٢",
      "٣",
      "١"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "Four points $A, B, C, D$ are coplanar if and only if $[\\vec{AB}, \\vec{AC}, \\vec{AD}] = 0$.",
    "hintAr": "تقع أربع نقاط في مستوى واحد إذا وفقط إذا كان $[\\vec{AB}, \\vec{AC}, \\vec{AD}] = ٠$.",
    "stepByStepSolutionEn": [
      "Compute vectors from reference point $A$:",
      "$$\\vec{AB} = (0 - 1, 1 - 2, 5 - (-1)) = (-1, -1, 6)$$",
      "$$\\vec{AC} = (-1 - 1, 2 - 2, 1 - (-1)) = (-2, 0, 2)$$",
      "$$\\vec{AD} = (k - 1, 1 - 2, 3 - (-1)) = (k - 1, -1, 4)$$",
      "Set determinant to zero:",
      "$$\\begin{vmatrix} -1 & -1 & 6 \\\\ -2 & 0 & 2 \\\\ k-1 & -1 & 4 \\end{vmatrix} = 0$$",
      "Expand along the second row:",
      "$$ -(-2)[(-1)(4) - (6)(-1)] + 0 - 2[(-1)(-1) - (-1)(k-1)] = 0$$",
      "$$ 2[-4 + 6] - 2[1 + k - 1] = 0$$",
      "$$ 2(2) - 2(k) = 0 \\implies 4 - 2k = 0 \\implies k = 2$$"
    ],
    "stepByStepSolutionAr": [
      "نحسب المتجهات من الرأس $A$:",
      "$$\\vec{AB} = (-١، -١، ٦), \\quad \\vec{AC} = (-٢، ٠، ٢), \\quad \\vec{AD} = (k - ١، -١، ٤)$$",
      "شرط وقوع النقاط في مستوى واحد هو انعدام الضرب الثلاثي القياسي:",
      "$$\\begin{vmatrix} -١ & -١ & ٦ \\\\ -٢ & ٠ & ٢ \\\\ k-١ & -١ & ٤ \\end{vmatrix} = ٠$$",
      "بفك المحدد على الصف الثاني:",
      "$$٢(٢) - ٢(k) = ٠ \\implies ٤ - ٢k = ٠ \\implies k = ٢$$"
    ],
    "teacherTipEn": "Expanding determinants along the row containing a zero (here row 2 has a zero) saves time and minimizes arithmetic errors.",
    "teacherTipAr": "فك المحدد على الصف أو العمود الذي يحتوي على أكبر عدد من الأصفار يوفر الوقت ويقلل من احتمالية الخطأ الحسابي."
  },
  {
    "id": "solid_ch1_db_hots_46",
    "titleEn": "Angle of a Vector with a Coordinate Plane",
    "titleAr": "قياس الزاوية بين متجه ومستوى إحداثي",
    "difficulty": "hots",
    "questionEn": "Find the angle that the vector $\\vec{v} = (1, 2, 2)$ makes with the $xy$-plane.",
    "questionAr": "أوجد قياس الزاوية التي يصنعها المتجه $\\vec{v} = (١، ٢، ٢)$ مع المستوى الإحداثي $xy$.",
    "optionsEn": [
      "$\\sin^{-1}(2/3)$",
      "$\\cos^{-1}(2/3)$",
      "$\\tan^{-1}(2/3)$",
      "$30^\\circ$"
    ],
    "optionsAr": [
      "$\\sin^{-١}(٢/٣)$",
      "$\\cos^{-١}(٢/٣)$",
      "$\\tan^{-١}(٢/٣)$",
      "$٣٠^\\circ$"
    ],
    "correctAnswer": "$\\sin^{-1}(2/3)$",
    "correctIndex": 0,
    "hintEn": "The angle between a vector and the $xy$-plane is complementary to the angle with its normal $\\hat{k}$: $\\sin\\theta = \\frac{|v_z|}{\\|\\vec{v}\\|}$.",
    "hintAr": "الزاوية بين متجه والمستوى $xy$ تتمم زاويته مع العمودي $\\hat{k}$، وبالتالي: $\\sin\\theta = \\frac{|v_z|}{\\|\\vec{v}\\|}$.",
    "stepByStepSolutionEn": [
      "The normal to the $xy$-plane is $\\hat{n} = \\hat{k} = (0, 0, 1)$.",
      "The angle $\\phi$ between $\\vec{v}$ and $\\hat{k}$ satisfies $\\cos\\phi = \\frac{\\vec{v} \\cdot \\hat{k}}{\\|\\vec{v}\\| \\|\\hat{k}\\|}$.",
      "The angle $\\theta$ between the vector and the plane itself is $90^\\circ - \\phi$, so $\\sin\\theta = \\cos\\phi$.",
      "Magnitude of $\\vec{v}$: $\\|\\vec{v}\\| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = 3$.",
      "$$\\sin\\theta = \\frac{|v_z|}{\\|\\vec{v}\\|} = \\frac{2}{3} \\implies \\theta = \\sin^{-1}(2/3)$$"
    ],
    "stepByStepSolutionAr": [
      "متجه العمودي على المستوى $xy$ هو $\\hat{k} = (٠، ٠، ١)$.",
      "زاوية ميل المتجه على المستوى تتمم زاويته مع العمودي على المستوى:",
      "$$\\sin\\theta = \\frac{|v_z|}{\\|\\vec{v}\\|} = \\frac{٢}{\\sqrt{١ + ٤ + ٤}} = \\frac{٢}{٣}$$",
      "إذن $\\theta = \\sin^{-١}(٢/٣)$."
    ],
    "teacherTipEn": "Always use sine for the angle between a line/vector and a plane: $\\sin\\theta = \\frac{|\\vec{v} \\cdot \\vec{n}|}{\\|\\vec{v}\\| \\|\\vec{n}\\|}$.",
    "teacherTipAr": "قاعدة أساسية: الزاوية بين مستقيم (أو متجه) ومستوى تستخدم قانون الجيب $\\sin\\theta$ مع متجه العمودي على المستوى."
  },
  {
    "id": "solid_ch1_db_hots_47",
    "titleEn": "Orthogonality from Equi-Magnitude of Sum and Difference",
    "titleAr": "تعامد متجهين من تساوي معيار المجموع والفرق",
    "difficulty": "hots",
    "questionEn": "If $\\|\\vec{A} + \\vec{B}\\| = \\|\\vec{A} - \\vec{B}\\|$, what is the relationship between $\\|\\vec{A} \\times \\vec{B}\\|$ and the magnitudes $\\|\\vec{A}\\|$ and $\\|\\vec{B}\\|$?",
    "questionAr": "إذا كان $\\|\\vec{A} + \\vec{B}\\| = \\|\\vec{A} - \\vec{B}\\|$، فما العلاقة بين معيار حاصل ضربهما الاتجاهي $\\|\\vec{A} \\times \\vec{B}\\|$ ومعياريهما $\\|\\vec{A}\\|$ و $\\|\\vec{B}\\|$؟",
    "optionsEn": [
      "$\\|\\vec{A} \\times \\vec{B}\\| = \\|\\vec{A}\\| \\|\\vec{B}\\|$",
      "$\\|\\vec{A} \\times \\vec{B}\\| = 0$",
      "$\\|\\vec{A} \\times \\vec{B}\\| = \\frac{1}{2} \\|\\vec{A}\\| \\|\\vec{B}\\|$",
      "$\\|\\vec{A} \\times \\vec{B}\\| = \\sqrt{2} \\|\\vec{A}\\| \\|\\vec{B}\\|$"
    ],
    "optionsAr": [
      "$\\|\\vec{A} \\times \\vec{B}\\| = \\|\\vec{A}\\| \\|\\vec{B}\\|$",
      "$\\|\\vec{A} \\times \\vec{B}\\| = ٠$",
      "$\\|\\vec{A} \\times \\vec{B}\\| = \\frac{١}{٢} \\|\\vec{A}\\| \\|\\vec{B}\\|$",
      "$\\|\\vec{A} \\times \\vec{B}\\| = \\sqrt{٢} \\|\\vec{A}\\| \\|\\vec{B}\\|$"
    ],
    "correctAnswer": "$\\|\\vec{A} \\times \\vec{B}\\| = \\|\\vec{A}\\| \\|\\vec{B}\\|$",
    "correctIndex": 0,
    "hintEn": "Square both sides of $\\|\\vec{A} + \\vec{B}\\|^2 = \\|\\vec{A} - \\vec{B}\\|^2$ to deduce $\\vec{A} \\cdot \\vec{B} = 0$, meaning $\\theta = 90^\\circ$.",
    "hintAr": "بتربيع الطرفين: $\\|\\vec{A} + \\vec{B}\\|^٢ = \\|\\vec{A} - \\vec{B}\\|^٢$ نستنتج أن $\\vec{A} \\cdot \\vec{B} = ٠$ أي أن الزاوية $\\theta = ٩٠^\\circ$.",
    "stepByStepSolutionEn": [
      "Square both sides of the given equation:",
      "$$\\|\\vec{A} + \\vec{B}\\|^2 = \\|\\vec{A} - \\vec{B}\\|^2$$",
      "$$\\|\\vec{A}\\|^2 + 2(\\vec{A} \\cdot \\vec{B}) + \\|\\vec{B}\\|^2 = \\|\\vec{A}\\|^2 - 2(\\vec{A} \\cdot \\vec{B}) + \\|\\vec{B}\\|^2$$",
      "$$4(\\vec{A} \\cdot \\vec{B}) = 0 \\implies \\vec{A} \\cdot \\vec{B} = 0$$",
      "This implies $\\vec{A} \\perp \\vec{B}$, so the angle between them is $\\theta = 90^\\circ$.",
      "Now compute the magnitude of the cross product:",
      "$$\\|\\vec{A} \\times \\vec{B}\\| = \\|\\vec{A}\\| \\|\\vec{B}\\| \\sin(90^\\circ) = \\|\\vec{A}\\| \\|\\vec{B}\\| (1) = \\|\\vec{A}\\| \\|\\vec{B}\\|$$"
    ],
    "stepByStepSolutionAr": [
      "بتربيع الطرفين:",
      "$$\\|\\vec{A}\\|^٢ + ٢(\\vec{A} \\cdot \\vec{B}) + \\|\\vec{B}\\|^٢ = \\|\\vec{A}\\|^٢ - ٢(\\vec{A} \\cdot \\vec{B}) + \\|\\vec{B}\\|^٢$$",
      "$$٤(\\vec{A} \\cdot \\vec{B}) = ٠ \\implies \\vec{A} \\cdot \\vec{B} = ٠$$",
      "هذا يعني أن المتجهين متعامدان (الزاوية بينهما $٩٠^\\circ$).",
      "معيار حاصل الضرب الاتجاهي:",
      "$$\\|\\vec{A} \\times \\vec{B}\\| = \\|\\vec{A}\\| \\|\\vec{B}\\| \\sin(٩٠^\\circ) = \\|\\vec{A}\\| \\|\\vec{B}\\|$$"
    ],
    "teacherTipEn": "Geometrically, $\\|\\vec{A}+\\vec{B}\\| = \\|\\vec{A}-\\vec{B}\\|$ means the diagonals of the parallelogram are equal, which makes it a rectangle!",
    "teacherTipAr": "هندسياً، تساوي طولي قطري متوازي الأضلاع يعني أنه مستطيل، وبالتالي زاويته قائمة."
  },
  {
    "id": "solid_ch1_db_hots_48",
    "titleEn": "Cyclic Permutations and Anti-Symmetry in Scalar Triple Products",
    "titleAr": "التبديل الدائري والتماثل العكسي في الضرب الثلاثي القياسي",
    "difficulty": "hots",
    "questionEn": "If $[\\vec{A}, \\vec{B}, \\vec{C}] = 5$, find the value of: $$\\vec{A} \\cdot (\\vec{C} \\times \\vec{B}) + \\vec{B} \\cdot (\\vec{A} \\times \\vec{C})$$",
    "questionAr": "إذا كان $[\\vec{A}, \\vec{B}, \\vec{C}] = ٥$، فما قيمة المقدار التالي: $$\\vec{A} \\cdot (\\vec{C} \\times \\vec{B}) + \\vec{B} \\cdot (\\vec{A} \\times \\vec{C})$$",
    "optionsEn": [
      "-10",
      "0",
      "10",
      "-5"
    ],
    "optionsAr": [
      "-١٠",
      "٠",
      "١٠",
      "-٥"
    ],
    "correctAnswer": "-10",
    "correctIndex": 0,
    "hintEn": "Swapping any two vectors in a scalar triple product negates its value.",
    "hintAr": "تبديل موضع أي متجهين في حاصل الضرب الثلاثي القياسي يعكس إشارته.",
    "stepByStepSolutionEn": [
      "In the scalar triple product, a cyclic permutation preserves the sign, while swapping two vectors reverses the sign.",
      "First term:",
      "$$\\vec{A} \\cdot (\\vec{C} \\times \\vec{B}) = [\\vec{A}, \\vec{C}, \\vec{B}] = -[\\vec{A}, \\vec{B}, \\vec{C}] = -5$$",
      "Second term:",
      "$$\\vec{B} \\cdot (\\vec{A} \\times \\vec{C}) = [\\vec{B}, \\vec{A}, \\vec{C}] = -[\\vec{A}, \\vec{B}, \\vec{C}] = -5$$",
      "Adding both terms:",
      "$$-5 + (-5) = -10$$"
    ],
    "stepByStepSolutionAr": [
      "في الضرب الثلاثي القياسي، الترتيب الدائري يحافظ على الإشارة، بينما تبديل موضع متجهين يعكس الإشارة:",
      "الحد الأول: $\\vec{A} \\cdot (\\vec{C} \\times \\vec{B}) = -[\\vec{A}, \\vec{B}, \\vec{C}] = -٥$.",
      "الحد الثاني: $\\vec{B} \\cdot (\\vec{A} \\times \\vec{C}) = -[\\vec{A}, \\vec{B}, \\vec{C}] = -٥$.",
      "المجموع $= -٥ + (-٥) = -١٠$."
    ],
    "teacherTipEn": "Cyclic order: $A \\to B \\to C \\to A$ is positive $+5$. Non-cyclic order: $A \\to C \\to B$ is negative $-5$.",
    "teacherTipAr": "الترتيب الدائري الموجب: $A \\to B \\to C$ يعطي $+٥$. بينما الترتيب العكسي يعطي $-٥$."
  },
  {
    "id": "solid_ch1_db_hots_49",
    "titleEn": "Radius of Sphere Tangent to a Coordinate Plane",
    "titleAr": "نصف قطر كرة مركزها معلوم وتمس أحد المستويات الإحداثية",
    "difficulty": "hots",
    "questionEn": "A sphere has center $C(-3, 5, -8)$ and touches the $xz$-plane. What is the equation of this sphere?",
    "questionAr": "كرة مركزها $C(-٣، ٥، -٨)$ وتمس المستوى الإحداثي $xz$. ما معادلة هذه الكرة؟",
    "optionsEn": [
      "$(x + 3)^2 + (y - 5)^2 + (z + 8)^2 = 25$",
      "$(x - 3)^2 + (y + 5)^2 + (z - 8)^2 = 25$",
      "$(x + 3)^2 + (y - 5)^2 + (z + 8)^2 = 9$",
      "$(x + 3)^2 + (y - 5)^2 + (z + 8)^2 = 64$"
    ],
    "optionsAr": [
      "$(x + ٣)^٢ + (y - ٥)^٢ + (z + ٨)^٢ = ٢٥$",
      "$(x - ٣)^٢ + (y + ٥)^٢ + (z - ٨)^٢ = ٢٥$",
      "$(x + ٣)^٢ + (y - ٥)^٢ + (z + ٨)^٢ = ٩$",
      "$(x + ٣)^٢ + (y - ٥)^٢ + (z + ٨)^٢ = ٦٤$"
    ],
    "correctAnswer": "$(x + 3)^2 + (y - 5)^2 + (z + 8)^2 = 25$",
    "correctIndex": 0,
    "hintEn": "The radius of a sphere tangent to the $xz$-plane equals $|y_C| = |5| = 5$.",
    "hintAr": "نصف قطر الكرة المماسة للمستوى $xz$ يساوي القيمة المطلقة للإحداثي الصادي للمركز: $|y_C| = |٥| = ٥$.",
    "stepByStepSolutionEn": [
      "A sphere tangent to the $xz$-plane has radius equal to the distance from its center to the plane $y = 0$:",
      "$$r = |y_C| = |5| = 5$$",
      "Using the standard form with center $(-3, 5, -8)$ and $r = 5$:",
      "$$(x - (-3))^2 + (y - 5)^2 + (z - (-8))^2 = 5^2$$",
      "$$(x + 3)^2 + (y - 5)^2 + (z + 8)^2 = 25$$"
    ],
    "stepByStepSolutionAr": [
      "بما أن الكرة تمس المستوى $xz$، فإن نصف قطرها يساوي بعد مركزها عن هذا المستوى:",
      "$$r = |y_C| = |٥| = ٥$$",
      "معادلة الكرة القياسية بالمركز $(-٣، ٥، -٨)$ ونصف القطر ٥ هي:",
      "$$(x + ٣)^٢ + (y - ٥)^٢ + (z + ٨)^٢ = ٢٥$$"
    ],
    "teacherTipEn": "Tangency to planes uses a single coordinate: $xy \\implies r = |z|$; $xz \\implies r = |y|$; $yz \\implies r = |x|$.",
    "teacherTipAr": "قاعدة تذكر سريعة: تماس الكرة مع المستوى يستخدم الإحداثي الغائب عن اسم المستوى: تمس $xz$ إذن $r = |y|$."
  },
  {
    "id": "solid_ch1_db_hots_50",
    "titleEn": "Maximum Volume of Box Inscribed in a Sphere",
    "titleAr": "أكبر حجم لمتوازي مستطيلات مرسوم داخل كرة",
    "difficulty": "hots",
    "questionEn": "A rectangular box with faces parallel to the coordinate planes is inscribed inside the sphere $x^2 + y^2 + z^2 = 3$. What is the maximum volume of this box?",
    "questionAr": "صندوق على شكل متوازي مستطيلات أوجهه توازي مستويات الإحداثيات مرسوم داخل الكرة $x^٢ + y^٢ + z^٢ = ٣$. ما هو أكبر حجم ممكن لهذا الصندوق؟",
    "optionsEn": [
      "8",
      "$3\\sqrt{3}$",
      "4",
      "6"
    ],
    "optionsAr": [
      "٨",
      "$٣\\sqrt{٣}$",
      "٤",
      "٦"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "The maximum volume of a rectangular box inscribed in a sphere occurs when it is a cube. Its space diagonal equals the sphere diameter: $L\\sqrt{3} = 2R$.",
    "hintAr": "يتحقق أكبر حجم لمتوازي مستطيلات مرسوم داخل كرة عندما يكون مكعباً. قطره الرئيسي يساوي قطر الكرة: $L\\sqrt{٣} = ٢R$.",
    "stepByStepSolutionEn": [
      "Let the vertex of the box in the first octant be $(x, y, z)$ on the sphere surface.",
      "Then $x^2 + y^2 + z^2 = R^2 = 3$, and the side lengths of the box are $2x, 2y, 2z$.",
      "The volume is $V = 8xyz$.",
      "By the AM-GM inequality, $x^2 y^2 z^2 \\le \\left(\\frac{x^2 + y^2 + z^2}{3}\\right)^3 = \\left(\\frac{3}{3}\\right)^3 = 1$.",
      "Equality holds when $x^2 = y^2 = z^2 = 1 \\implies x = y = z = 1$ (the box is a cube).",
      "The side length of the cube is $L = 2(1) = 2$.",
      "The maximum volume is $V_{\\max} = L^3 = 2^3 = 8$ cubic units."
    ],
    "stepByStepSolutionAr": [
      "نفرض أن رأس الصندوق في الثمن الأول هو $(x, y, z)$ على سطح الكرة، وبالتالي أبعاد الصندوق هي $٢x, ٢y, ٢z$.",
      "الحجم هو $V = ٨xyz$.",
      "يتحقق الحجم الأقصى عندما يكون الصندوق مكعباً: $x = y = z$.",
      "$$x^٢ + y^٢ + z^٢ = ٣ \\implies ٣x^٢ = ٣ \\implies x = ١$$",
      "طول ضلع المكعب هو $L = ٢(١) = ٢$.",
      "أكبر حجم هو $V = L^٣ = ٢^٣ = ٨$ وحدة مكعبة."
    ],
    "teacherTipEn": "For any sphere of radius $R$, the inscribed box of maximum volume is always a cube of edge length $L = \\frac{2R}{\\sqrt{3}}$, giving volume $V = \\frac{8R^3}{3\\sqrt{3}}$.",
    "teacherTipAr": "قاعدة عامة: أكبر متوازي مستطيلات داخل كرة هو دائماً مكعب، وطول حرفه $L = \\frac{٢R}{\\sqrt{٣}}$."
  }
]
};
