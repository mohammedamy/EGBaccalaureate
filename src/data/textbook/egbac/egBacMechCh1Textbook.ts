import type { SolvedProblem } from '../../../types/curriculum';

export const egBacMechCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_mech_ch1_se_01",
    "titleEn": "EG-Bac Model Example 1: Tangential and Normal Acceleration Decomposition",
    "titleAr": "مثال البكالوريا النموذجي ١: تحليل العجلة إلى مركبتين مماسية وعمودية",
    "difficulty": "easy",
    "questionEn": "A particle moves along a circular path of radius $R = 20\\text{ m}$. At a certain instant, its speed is $v = 10\\text{ m/s}$ and its speed is increasing at a rate of $2\\text{ m/s}^2$. Find the magnitude of its total acceleration vector.",
    "questionAr": "يتحرك جسيم على مسار دائري نصف قطره $R = 20\\text{ م}$. في لحظة معينة، كانت سرعته $v = 10\\text{ م/ث}$ وتتزايد بمعدل $2\\text{ م/ث}^2$. احسب معيار متجه العجلة الكلية للجسيم.",
    "optionsEn": [
      "$\\|\\vec{a}\\| = \\sqrt{29}\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 7\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 5\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = \\sqrt{21}\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$\\|\\vec{a}\\| = \\sqrt{29}\\text{ م/ث}^2$",
      "$\\|\\vec{a}\\| = 7\\text{ م/ث}^2$",
      "$\\|\\vec{a}\\| = 5\\text{ م/ث}^2$",
      "$\\|\\vec{a}\\| = \\sqrt{21}\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$\\|\\vec{a}\\| = \\sqrt{29}\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Tangential acceleration a_t = dv/dt = 2. Normal acceleration a_n = v^2 / R = 100 / 20 = 5.",
    "hintAr": "العجلة المماسية تساوي معدل تغير السرعة = 2. العجلة العمودية = v^2 / R = 100 / 20 = 5.",
    "stepByStepSolutionEn": [
      "1. Tangential acceleration (rate of change of speed): $a_t = \\frac{dv}{dt} = 2\\text{ m/s}^2$.",
      "2. Normal (centripetal) acceleration: $a_n = \\frac{v^2}{R} = \\frac{10^2}{20} = \\frac{100}{20} = 5\\text{ m/s}^2$.",
      "3. Total acceleration magnitude in the Frenet frame:",
      "   $$\\|\\vec{a}\\| = \\sqrt{a_t^2 + a_n^2} = \\sqrt{2^2 + 5^2} = \\sqrt{4 + 25} = \\sqrt{29}\\text{ m/s}^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. العجلة المماسية (معدل تغير السرعة القياسية): $a_t = \\frac{dv}{dt} = 2\\text{ م/ث}^2$.",
      "٢. العجلة العمودية المركزية: $a_n = \\frac{v^2}{R} = \\frac{100}{20} = 5\\text{ م/ث}^2$.",
      "٣. معيار العجلة الكلية في إطار فرينيه:",
      "   $$\\|\\vec{a}\\| = \\sqrt{2^2 + 5^2} = \\sqrt{29}\\text{ م/ث}^2$$"
    ],
    "teacherTipEn": "Tangential acceleration alters speed magnitude; normal acceleration alters direction of motion.",
    "teacherTipAr": "العجلة المماسية مسؤولة عن تغيير مقدار السرعة، بينما العمودية مسؤولة عن تغيير اتجاه الحركة."
  },
  {
    "id": "egbac_mech_ch1_se_02",
    "titleEn": "EG-Bac Model Example 2: Radius of Curvature for a Parabolic Trajectory",
    "titleAr": "مثال البكالوريا النموذجي ٢: حساب نصف قطر الانحناء لمسار قطع مكافئ",
    "difficulty": "medium",
    "questionEn": "A projectile travels along the parabolic path $y = 8x - x^2$. Calculate the radius of curvature $\\rho$ of the trajectory at its vertex (highest point).",
    "questionAr": "تتحرك قذيفة على مسار قطع مكافئ معادلته $y = 8x - x^2$. احسب نصف قطر الانحناء $\\rho$ للمسار عند قمة المسار (نقطة الرأس).",
    "optionsEn": [
      "$\\rho = \\frac{1}{2}\\text{ m}$",
      "$\\rho = 2\\text{ m}$",
      "$\\rho = 4\\text{ m}$",
      "$\\rho = 1\\text{ m}$"
    ],
    "optionsAr": [
      "$\\rho = \\frac{1}{2}\\text{ م}$",
      "$\\rho = 2\\text{ م}$",
      "$\\rho = 4\\text{ م}$",
      "$\\rho = 1\\text{ م}$"
    ],
    "correctAnswer": "$\\rho = \\frac{1}{2}\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "At the vertex, y' = 0. Use rho = [1 + (y')^2]^(3/2) / |y''|.",
    "hintAr": "عند رأس المنحنى، المشتقة الأولى y' = 0. استخدم قانون نصف قطر الانحناء: rho = [1 + (y')^2]^(3/2) / |y''|.",
    "stepByStepSolutionEn": [
      "1. Find first derivative: $y' = 8 - 2x$. At vertex: $y' = 0 \\implies x = 4$.",
      "2. Find second derivative: $y'' = -2$, so $|y''| = 2$.",
      "3. Apply radius of curvature formula at $x = 4$ where $y' = 0$:",
      "   $$\\rho = \\frac{\\left[1 + (y')^2\\right]^{3/2}}{|y''|} = \\frac{[1 + 0]^{3/2}}{2} = \\frac{1}{2}\\text{ m}$$"
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $y' = 8 - 2x = 0 \\implies x = 4$.",
      "٢. المشتقة الثانية: $y'' = -2 \\implies |y''| = 2$.",
      "٣. قانون نصف قطر الانحناء عند الرأس:",
      "   $$\\rho = \\frac{[1 + 0]^{3/2}}{2} = \\frac{1}{2}\\text{ م}$$"
    ],
    "teacherTipEn": "At any stationary point where y' = 0, the radius of curvature is simply 1 / |y''|.",
    "teacherTipAr": "عند أي نقطة حرجة ينعدم عندها المماس الأفقي (y'=0)، يكون نصف قطر الانحناء ببساطة 1 / |y''|."
  },
  {
    "id": "egbac_mech_ch1_se_03",
    "titleEn": "EG-Bac Model Example 3: Polar Velocity and Acceleration Decomposition",
    "titleAr": "مثال البكالوريا النموذجي ٣: تحليل السرعة والعجلة في الإحداثيات القطبية",
    "difficulty": "medium",
    "questionEn": "A particle moves in a plane with polar coordinates given by $r(t) = 3t\\text{ m}$ and $\\theta(t) = 2t\\text{ rad}$. At $t = 1\\text{ s}$, find its radial acceleration component $a_r$.",
    "questionAr": "يتحرك جسيم في المستوى بإحداثيات قطبية معطاة بالمعادلتين $r(t) = 3t\\text{ م}$ و $\\theta(t) = 2t\\text{ راديان}$. عند اللحظة $t = 1\\text{ ث}$، احسب مركبة العجلة القطرية $a_r$.",
    "optionsEn": [
      "$a_r = -12\\text{ m/s}^2$",
      "$a_r = 12\\text{ m/s}^2$",
      "$a_r = -6\\text{ m/s}^2$",
      "$a_r = 0\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$a_r = -12\\text{ م/ث}^2$",
      "$a_r = 12\\text{ م/ث}^2$",
      "$a_r = -6\\text{ م/ث}^2$",
      "$a_r = 0\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$a_r = -12\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Radial acceleration in polar coordinates is a_r = r'' - r * (theta')^2.",
    "hintAr": "مركبة العجلة القطرية في الإحداثيات القطبية: a_r = r'' - r * (theta')^2.",
    "stepByStepSolutionEn": [
      "1. Given $r(t) = 3t \\implies \\dot{r} = 3$ and $\\ddot{r} = 0$.",
      "2. Given $\\theta(t) = 2t \\implies \\dot{\\theta} = 2$.",
      "3. At $t = 1\\text{ s}$, $r(1) = 3\\text{ m}$.",
      "4. Radial acceleration formula: $a_r = \\ddot{r} - r \\dot{\\theta}^2$.",
      "5. Substitute values: $a_r = 0 - (3)(2^2) = - (3)(4) = -12\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. $r = 3t \\implies \\dot{r} = 3$ و $\\ddot{r} = 0$.",
      "٢. $\\theta = 2t \\implies \\dot{\\theta} = 2$.",
      "٣. عند $t = 1\\text{ ث}$: $r = 3\\text{ م}$.",
      "٤. قانون العجلة القطرية: $a_r = \\ddot{r} - r \\dot{\\theta}^2 = 0 - 3(4) = -12\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Notice that a_r is negative because the centripetal-like term -r*(theta')^2 pulls inward toward the pole.",
    "teacherTipAr": "المركبة القطرية سالبة لأن الحد -r*(theta')^2 يسحب الجسيم للداخل باتجاه القطب."
  },
  {
    "id": "egbac_mech_ch1_se_04",
    "titleEn": "EG-Bac Model Example 4: Transverse Acceleration in Polar Coordinates",
    "titleAr": "مثال البكالوريا النموذجي ٤: مركبة العجلة المستعرضة في الإحداثيات القطبية",
    "difficulty": "medium",
    "questionEn": "For the particle in Example 3 with $r(t) = 3t$ and $\\theta(t) = 2t$, find the transverse acceleration component $a_\\theta$ at $t = 1\\text{ s}$.",
    "questionAr": "للجسيم في المثال السابق حيث $r(t) = 3t$ و $\\theta(t) = 2t$، احسب مركبة العجلة المستعرضة $a_\\theta$ عند اللحظة $t = 1\\text{ ث}$.",
    "optionsEn": [
      "$a_\\theta = 12\\text{ m/s}^2$",
      "$a_\\theta = 6\\text{ m/s}^2$",
      "$a_\\theta = 0\\text{ m/s}^2$",
      "$a_\\theta = 24\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$a_\\theta = 12\\text{ م/ث}^2$",
      "$a_\\theta = 6\\text{ م/ث}^2$",
      "$a_\\theta = 0\\text{ م/ث}^2$",
      "$a_\\theta = 24\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$a_\\theta = 12\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Transverse acceleration in polar coordinates is a_theta = r * theta'' + 2 * r' * theta'.",
    "hintAr": "مركبة العجلة المستعرضة في الإحداثيات القطبية: a_theta = r * theta'' + 2 * r' * theta'.",
    "stepByStepSolutionEn": [
      "1. From previous values: $r = 3$, $\\dot{r} = 3$, $\\dot{\\theta} = 2$, and $\\ddot{\\theta} = 0$.",
      "2. Transverse acceleration formula: $a_\\theta = r \\ddot{\\theta} + 2\\dot{r}\\dot{\\theta}$.",
      "3. Substitute: $a_\\theta = 3(0) + 2(3)(2) = 0 + 12 = 12\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. القيم السابقة: $r = 3$ و $\\dot{r} = 3$ و $\\dot{\\theta} = 2$ و $\\ddot{\\theta} = 0$.",
      "٢. قانون العجلة المستعرضة: $a_\\theta = r \\ddot{\\theta} + 2\\dot{r}\\dot{\\theta}$.",
      "٣. بالتعويض: $a_\\theta = 0 + 2(3)(2) = 12\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "The term 2 * r' * theta' is the Coriolis acceleration component in polar coordinates.",
    "teacherTipAr": "الحد 2 r' theta' يمثل عجلة كوريوليس في الإحداثيات القطبية."
  },
  {
    "id": "egbac_mech_ch1_se_05",
    "titleEn": "EG-Bac Model Example 5: Speed Function via Intrinsic Tangential Acceleration",
    "titleAr": "مثال البكالوريا النموذجي ٥: حساب السرعة من العجلة المماسية بدلالة المسافة",
    "difficulty": "hots",
    "questionEn": "A particle starts from rest ($v = 0$ at $s = 0$) and moves along a curved path with tangential acceleration $a_t = 4s\\text{ m/s}^2$. What is its speed $v$ when it has traversed an arc length of $s = 3\\text{ m}$?",
    "questionAr": "بدأ جسيم حركته من السكون ($v = 0$ عند $s = 0$) على مسار منحنٍ بعجلة مماسية $a_t = 4s\\text{ م/ث}^2$. ما سرعة الجسيم $v$ بعد أن يقطع مسافة قوسية $s = 3\\text{ م}$؟",
    "optionsEn": [
      "$v = 6\\text{ m/s}$",
      "$v = 12\\text{ m/s}$",
      "$v = 36\\text{ m/s}$",
      "$v = 3\\sqrt{2}\\text{ m/s}$"
    ],
    "optionsAr": [
      "$v = 6\\text{ م/ث}$",
      "$v = 12\\text{ م/ث}$",
      "$v = 36\\text{ م/ث}$",
      "$v = 3\\sqrt{2}\\text{ م/ث}$"
    ],
    "correctAnswer": "$v = 6\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Express tangential acceleration as a_t = v * (dv/ds). Separate variables and integrate.",
    "hintAr": "عبر عن العجلة المماسية بدلالة المسافة: a_t = v (dv/ds)، ثم افصل المتغيرات وكامل الطرفين.",
    "stepByStepSolutionEn": [
      "1. Tangential acceleration relation: $a_t = v \\frac{dv}{ds} = 4s$.",
      "2. Separate variables: $v \\, dv = 4s \\, ds$.",
      "3. Integrate from $v = 0, s = 0$ to $v, s$:",
      "   $$\\int_0^v v \\, dv = \\int_0^s 4s \\, ds \\implies \\frac{v^2}{2} = 2s^2 \\implies v^2 = 4s^2 \\implies v = 2s$$",
      "4. At $s = 3\\text{ m}$: $v = 2(3) = 6\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. العلاقة الذاتية للعجلة المماسية: $a_t = v \\frac{dv}{ds} = 4s$.",
      "٢. فصل المتغيرات: $v \\, dv = 4s \\, ds$.",
      "٣. التكامل: $\\frac{v^2}{2} = 2s^2 \\implies v = 2s$.",
      "٤. عند $s = 3\\text{ م}$: $v = 2(3) = 6\\text{ م/ث}$."
    ],
    "teacherTipEn": "a_t = v dv/ds is the chain-rule form of acceleration when expressed as a function of position.",
    "teacherTipAr": "العلاقة a_t = v dv/ds هي صورة قاعدة السلسلة للعجلة عندما تكون معطاة بدلالة الموضع."
  },
  {
    "id": "egbac_mech_ch1_se_06",
    "titleEn": "EG-Bac Model Example 6: Curvature of an Elliptical Path",
    "titleAr": "مثال البكالوريا النموذجي ٦: تقوس مسار قطع ناقص عند الرأس الأكبر",
    "difficulty": "hots",
    "questionEn": "An elliptical trajectory is parameterized by $x = 5\\cos(t)$, $y = 3\\sin(t)$. Find the radius of curvature $\\rho$ at the vertex $(5, 0)$ where $t = 0$.",
    "questionAr": "يتحرك جسيم على مسار قطع ناقص معادلاته البارامترية $x = 5\\cos(t)$ و $y = 3\\sin(t)$. احسب نصف قطر الانحناء $\\rho$ عند الرأس $(5, 0)$ المناظر لـ $t = 0$.",
    "optionsEn": [
      "$\\rho = \\frac{9}{5}\\text{ units}$",
      "$\\rho = \\frac{25}{3}\\text{ units}$",
      "$\\rho = 3\\text{ units}$",
      "$\\rho = 5\\text{ units}$"
    ],
    "optionsAr": [
      "$\\rho = \\frac{9}{5}\\text{ وحدة}$",
      "$\\rho = \\frac{25}{3}\\text{ وحدة}$",
      "$\\rho = 3\\text{ وحدة}$",
      "$\\rho = 5\\text{ وحدة}$"
    ],
    "correctAnswer": "$\\rho = \\frac{9}{5}\\text{ units}$",
    "correctIndex": 0,
    "hintEn": "For an ellipse x^2/a^2 + y^2/b^2 = 1, the radius of curvature at the major vertex (a, 0) is rho = b^2 / a.",
    "hintAr": "للقطع الناقص، نصف قطر الانحناء عند رأس المحور الأكبر (a, 0) يساوي b^2 / a.",
    "stepByStepSolutionEn": [
      "1. Parametric derivatives:",
      "   $\\dot{x} = -5\\sin(t)$, $\\ddot{x} = -5\\cos(t)$.",
      "   $\\dot{y} = 3\\cos(t)$, $\\ddot{y} = -3\\sin(t)$.",
      "2. At $t = 0$:",
      "   $\\dot{x} = 0$, $\\ddot{x} = -5$.",
      "   $\\dot{y} = 3$, $\\ddot{y} = 0$.",
      "3. Speed: $v = \\sqrt{\\dot{x}^2 + \\dot{y}^2} = \\sqrt{0 + 9} = 3$.",
      "4. Cross product magnitude: $|\\dot{x}\\ddot{y} - \\dot{y}\\ddot{x}| = |(0)(0) - (3)(-5)| = 15$.",
      "5. Radius of curvature formula: $\\rho = \\frac{v^3}{|\\dot{x}\\ddot{y} - \\dot{y}\\ddot{x}|} = \\frac{3^3}{15} = \\frac{27}{15} = \\frac{9}{5}$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقات البارامترية عند $t = 0$:",
      "   $\\dot{x} = 0$, $\\ddot{x} = -5$, $\\dot{y} = 3$, $\\ddot{y} = 0$.",
      "٢. السرعة: $v = 3$.",
      "٣. بسط التقوس: $|\\dot{x}\\ddot{y} - \\dot{y}\\ddot{x}| = 15$.",
      "٤. نصف قطر الانحناء: $\\rho = \\frac{3^3}{15} = \\frac{27}{15} = \\frac{9}{5}$ وحدة طول."
    ],
    "teacherTipEn": "At major vertices, rho = b^2/a; at minor vertices, rho = a^2/b.",
    "teacherTipAr": "عند طرفي المحور الأكبر تكون rho = b^2/a، وعند طرفي المحور الأصغر تكون rho = a^2/b."
  },
  {
    "id": "egbac_mech_ch1_se_07",
    "titleEn": "EG-Bac Model Example 7: Constant Tangential Acceleration Kinematics",
    "titleAr": "مثال البكالوريا النموذجي ٧: معادلات الحركة المنحنية بعجلة مماسية ثابتة",
    "difficulty": "easy",
    "questionEn": "A racecar moves along a circular track of radius $100\\text{ m}$ with constant tangential acceleration $a_t = 3\\text{ m/s}^2$, starting from rest. Find the time $t$ when the normal acceleration equals the tangential acceleration.",
    "questionAr": "تتحرك سيارة سباق على مضمار دائري نصف قطره $100\\text{ م}$ بعجلة مماسية ثابتة $a_t = 3\\text{ م/ث}^2$ انطلاقاً من السكون. احسب الزمن $t$ الذي تصبح عنده العجلة العمودية مساوية للعجلة المماسية.",
    "optionsEn": [
      "$t = \\frac{10}{\\sqrt{3}}\\text{ s}$",
      "$t = 10\\text{ s}$",
      "$t = \\frac{100}{3}\\text{ s}$",
      "$t = 5\\text{ s}$"
    ],
    "optionsAr": [
      "$t = \\frac{10}{\\sqrt{3}}\\text{ ث}$",
      "$t = 10\\text{ ث}$",
      "$t = \\frac{100}{3}\\text{ ث}$",
      "$t = 5\\text{ ث}$"
    ],
    "correctAnswer": "$t = \\frac{10}{\\sqrt{3}}\\text{ s}$",
    "correctIndex": 0,
    "hintEn": "Speed is v = a_t * t = 3t. Set a_n = v^2 / R = a_t.",
    "hintAr": "السرعة v = a_t * t = 3t. ضع العجلة العمودية a_n = v^2 / R مساوية للعجلة المماسية.",
    "stepByStepSolutionEn": [
      "1. Since $a_t = 3\\text{ m/s}^2$ is constant and $v_0 = 0$, speed is $v(t) = a_t t = 3t$.",
      "2. Normal acceleration: $a_n = \\frac{v^2}{R} = \\frac{(3t)^2}{100} = \\frac{9t^2}{100}$.",
      "3. Equate $a_n = a_t$:",
      "   $$\\frac{9t^2}{100} = 3 \\implies 9t^2 = 300 \\implies t^2 = \\frac{300}{9} = \\frac{100}{3}$$",
      "4. Taking positive square root: $t = \\frac{10}{\\sqrt{3}}\\text{ s}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن العجلة المماسية ثابتة والسرعة الابتدائية صفر: $v(t) = 3t$.",
      "٢. العجلة العمودية: $a_n = \\frac{9t^2}{100}$.",
      "٣. بمساواة $a_n = a_t$: نجد $\\frac{9t^2}{100} = 3 \\implies t^2 = \\frac{100}{3}$.",
      "٤. إذن: $t = \\frac{10}{\\sqrt{3}}\\text{ ث}$."
    ],
    "teacherTipEn": "When a_n = a_t, the total acceleration vector makes exactly a 45-degree angle with the tangent direction.",
    "teacherTipAr": "عندما تتساوى العجلتان المماسية والعمودية، يصنع متجه العجلة الكلية زاوية ٤٥ درجة مع المماس."
  },
  {
    "id": "egbac_mech_ch1_se_08",
    "titleEn": "EG-Bac Model Example 8: Osculating Circle & Center of Curvature",
    "titleAr": "مثال البكالوريا النموذجي ٨: إحداثيات مركز دائرة الانحناء (الدائرة اللامسة)",
    "difficulty": "hots",
    "questionEn": "Find the coordinates of the center of curvature $C(x_c, y_c)$ for the parabola $y = x^2$ at the origin $(0, 0)$.",
    "questionAr": "أوجد إحداثيات مركز دائرة الانحناء $C(x_c, y_c)$ لمنحنى القطع المكافئ $y = x^2$ عند نقطة الأصل $(0, 0)$.",
    "optionsEn": [
      "$(0, 0.5)$",
      "$(0, 1)$",
      "$(0, 2)$",
      "$(0, 0.25)$"
    ],
    "optionsAr": [
      "$(0, 0.5)$",
      "$(0, 1)$",
      "$(0, 2)$",
      "$(0, 0.25)$"
    ],
    "correctAnswer": "$(0, 0.5)$",
    "correctIndex": 0,
    "hintEn": "At (0, 0), y' = 0, y'' = 2. The radius of curvature is rho = 1/2, directed along the normal vector (0, 1).",
    "hintAr": "عند نقطة الأصل: المشتقة الأولى صفر والثانية ٢، نصف القطر ١/٢ باتجاه العمودي للأعلى.",
    "stepByStepSolutionEn": [
      "1. Derivatives: $y' = 2x \\implies y'(0) = 0$; $y'' = 2$.",
      "2. Radius of curvature: $\\rho = \\frac{[1 + 0]^{3/2}}{2} = \\frac{1}{2} = 0.5\\text{ units}$.",
      "3. Unit normal vector $\\hat{N}$ points in direction of increasing concavity (upward along $+y$ axis): $\\hat{N} = (0, 1)$.",
      "4. Center of curvature: $\\vec{r}_c = \\vec{r} + \\rho \\hat{N} = (0, 0) + 0.5(0, 1) = (0, 0.5)$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقات عند نقطة الأصل: $y' = 0$ و $y'' = 2$.",
      "٢. نصف قطر الانحناء: $\\rho = 1/2 = 0.5$.",
      "٣. متجه الوحدة العمودي يتجه نحو التقعر: $\\hat{N} = (0, 1)$.",
      "٤. إحداثيات المركز: $C = (0, 0.5)$."
    ],
    "teacherTipEn": "The center of curvature lies at distance rho along the principal normal vector.",
    "teacherTipAr": "يقع مركز دائرة الانحناء على مسافة rho على امتداد متجه الوحدة العمودي الرئيسي."
  },
  {
    "id": "egbac_mech_ch1_se_09",
    "titleEn": "EG-Bac Model Example 9: Angle Between Total Acceleration and Velocity",
    "titleAr": "مثال البكالوريا النموذجي ٩: الزاوية بين متجه العجلة الكلية ومتجه السرعة",
    "difficulty": "medium",
    "questionEn": "At a given instant, a particle in planar motion has speed $v = 12\\text{ m/s}$, radius of curvature $\\rho = 36\\text{ m}$, and tangential acceleration $a_t = 4\\sqrt{3}\\text{ m/s}^2$. Find the angle $\\phi$ between the total acceleration vector and the velocity vector.",
    "questionAr": "في لحظة ما، كانت سرعة جسيم $v = 12\\text{ م/ث}$ ونصف قطر الانحناء لمساره $\\rho = 36\\text{ م}$ وعجلته المماسية $a_t = 4\\sqrt{3}\\text{ م/ث}^2$. احسب قياس الزاوية $\\phi$ بين متجه العجلة الكلية ومتجه السرعة.",
    "optionsEn": [
      "$\\phi = 30^\\circ$",
      "$\\phi = 60^\\circ$",
      "$\\phi = 45^\\circ$",
      "$\\phi = 90^\\circ$"
    ],
    "optionsAr": [
      "$\\phi = 30^\\circ$",
      "$\\phi = 60^\\circ$",
      "$\\phi = 45^\\circ$",
      "$\\phi = 90^\\circ$"
    ],
    "correctAnswer": "$\\phi = 30^\\circ$",
    "correctIndex": 0,
    "hintEn": "Velocity is along T. The angle phi satisfies tan(phi) = a_n / a_t.",
    "hintAr": "متجه السرعة في اتجاه المماس T. زاوية ميل العجلة الكلية تحقق ظا(phi) = a_n / a_t.",
    "stepByStepSolutionEn": [
      "1. Compute normal acceleration: $a_n = \\frac{v^2}{\\rho} = \\frac{12^2}{36} = \\frac{144}{36} = 4\\text{ m/s}^2$.",
      "2. Tangential acceleration is $a_t = 4\\sqrt{3}\\text{ m/s}^2$.",
      "3. The velocity vector is collinear with the unit tangent vector $\\hat{T}$.",
      "4. The angle between $\\vec{a} = a_t \\hat{T} + a_n \\hat{N}$ and $\\hat{T}$ satisfies:",
      "   $$\\tan(\\phi) = \\frac{a_n}{a_t} = \\frac{4}{4\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$$ ",
      "5. Therefore, $\\phi = 30^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. العجلة العمودية: $a_n = \\frac{144}{36} = 4\\text{ م/ث}^2$.",
      "٢. العجلة المماسية: $a_t = 4\\sqrt{3}\\text{ م/ث}^2$.",
      "٣. متجه السرعة يقع على المماس، إذن:",
      "   $$\\tan(\\phi) = \\frac{a_n}{a_t} = \\frac{4}{4\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\implies \\phi = 30^\\circ$$"
    ],
    "teacherTipEn": "tan(phi) = a_n / a_t relates intrinsic acceleration components to the directional steering angle.",
    "teacherTipAr": "العلاقة ظا(phi) = a_n / a_t تربط مركبات العجلة بزاوية انحراف العجلة الكلية عن اتجاه الحركة."
  },
  {
    "id": "egbac_mech_ch1_se_10",
    "titleEn": "EG-Bac Model Example 10: Curvilinear Motion on a Helix in 3D Space",
    "titleAr": "مثال البكالوريا النموذجي ١٠: الحركة المنحنية على مسار لولبي (حلزوني) فراغي",
    "difficulty": "hots",
    "questionEn": "A particle traces the circular helix $\\vec{r}(t) = (4\\cos t, 4\\sin t, 3t)$ in meters. Find its constant speed $v$ and the magnitude of its acceleration $\\|\\vec{a}\\|$.",
    "questionAr": "يتحرك جسيم على مسار حلزوني فراغي $\\vec{r}(t) = (4\\cos t, 4\\sin t, 3t)$ بالأمتار. أوجد سرعته القياسية الثابتة $v$ ومعيار عجلته $\\|\\vec{a}\\|$.",
    "optionsEn": [
      "$v = 5\\text{ m/s}, \\; \\|\\vec{a}\\| = 4\\text{ m/s}^2$",
      "$v = 5\\text{ m/s}, \\; \\|\\vec{a}\\| = 5\\text{ m/s}^2$",
      "$v = 4\\text{ m/s}, \\; \\|\\vec{a}\\| = 3\\text{ m/s}^2$",
      "$v = 7\\text{ m/s}, \\; \\|\\vec{a}\\| = 4\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$v = 5\\text{ م/ث}, \\; \\|\\vec{a}\\| = 4\\text{ م/ث}^2$",
      "$v = 5\\text{ م/ث}, \\; \\|\\vec{a}\\| = 5\\text{ م/ث}^2$",
      "$v = 4\\text{ م/ث}, \\; \\|\\vec{a}\\| = 3\\text{ م/ث}^2$",
      "$v = 7\\text{ م/ث}, \\; \\|\\vec{a}\\| = 4\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$v = 5\\text{ m/s}, \\; \\|\\vec{a}\\| = 4\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "v(t) = r'(t) = (-4 sin t, 4 cos t, 3). a(t) = r''(t) = (-4 cos t, -4 sin t, 0).",
    "hintAr": "متجه السرعة r' = (-4 sin t, 4 cos t, 3)، ومتجه العجلة r'' = (-4 cos t, -4 sin t, 0).",
    "stepByStepSolutionEn": [
      "1. Differentiate position vector: $\\vec{v}(t) = \\dot{\\vec{r}}(t) = (-4\\sin t, 4\\cos t, 3)$.",
      "2. Speed: $v = \\|\\vec{v}\\| = \\sqrt{(-4\\sin t)^2 + (4\\cos t)^2 + 3^2} = \\sqrt{16(\\sin^2 t + \\cos^2 t) + 9} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ m/s}$.",
      "3. Differentiate velocity vector: $\\vec{a}(t) = \\ddot{\\vec{r}}(t) = (-4\\cos t, -4\\sin t, 0)$.",
      "4. Acceleration magnitude: $\\|\\vec{a}\\| = \\sqrt{(-4\\cos t)^2 + (-4\\sin t)^2 + 0} = \\sqrt{16(1)} = 4\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. متجه السرعة: $\\vec{v}(t) = (-4\\sin t, 4\\cos t, 3)$.",
      "٢. معيار السرعة: $v = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ م/ث}$.",
      "٣. متجه العجلة: $\\vec{a}(t) = (-4\\cos t, -4\\sin t, 0)$.",
      "٤. معيار العجلة: $\\|\\vec{a}\\| = \\sqrt{16} = 4\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "On a uniform helix, speed is constant (a_t = 0), and all acceleration is normal (a_n = 4).",
    "teacherTipAr": "في الحركة الحلزونية المنتظمة، تكون السرعة ثابتة (العجلة المماسية صفر)، والعجلة بأكملها عمودية مركزية."
  }
];

export const egBacMechCh1Exercises: SolvedProblem[] = [
  {
    "id": "egbac_mech_ch1_ex_01",
    "titleEn": "Exercise 1: Total Acceleration Magnitude in Curvilinear Motion",
    "titleAr": "تمرين 1: معيار العجلة الكلية في الحركة المنحنية",
    "difficulty": "easy",
    "questionEn": "A body moving on a curve has tangential acceleration $a_t = 3\\text{ m/s}^2$ and normal acceleration $a_n = 4\\text{ m/s}^2$. Calculate its total acceleration magnitude $\\|\\vec{a}\\|$.",
    "questionAr": "جسيم يتحرك على مسار منحنٍ له عجلة مماسية $a_t = 3\\text{ م/ث}^2$ وعجلة عمودية $a_n = 4\\text{ م/ث}^2$. احسب معيار العجلة الكلية $\\|\\vec{a}\\|$.",
    "optionsEn": [
      "$\\|\\vec{a}\\| = 5\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 7\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 9\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 4\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$\\|\\vec{a}\\| = 5\\text{ م/ث}^2$",
      "$\\|\\vec{a}\\| = 7\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 9\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 4\\text{ m/s}^2$"
    ],
    "correctAnswer": "$\\|\\vec{a}\\| = 5\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "||a|| = sqrt(a_t^2 + a_n^2). Use Pythagorean theorem.",
    "hintAr": "المعيار = جذر(العجلة المماسية تربيع + العجلة العمودية تربيع).",
    "stepByStepSolutionEn": [
      "1. $\\|\\vec{a}\\|^2 = a_t^2 + a_n^2 = (3)^2 + (4)^2 = 9 + 16 = 25$.",
      "2. $\\|\\vec{a}\\| = \\sqrt{25} = 5\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. مربع المعيار: $(3)^2 + (4)^2 = 25$.",
      "٢. المعيار: $\\sqrt{25} = 5\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Tangential and normal vectors are mutually perpendicular unit vectors in the Frenet-Serret frame.",
    "teacherTipAr": "متجها الوحدة المماسي والعمودي متعامدان تماماً في إطار فرينيه."
  },
  {
    "id": "egbac_mech_ch1_ex_02",
    "titleEn": "Exercise 2: Total Acceleration Magnitude in Curvilinear Motion",
    "titleAr": "تمرين 2: معيار العجلة الكلية في الحركة المنحنية",
    "difficulty": "easy",
    "questionEn": "A body moving on a curve has tangential acceleration $a_t = 6\\text{ m/s}^2$ and normal acceleration $a_n = 8\\text{ m/s}^2$. Calculate its total acceleration magnitude $\\|\\vec{a}\\|$.",
    "questionAr": "جسيم يتحرك على مسار منحنٍ له عجلة مماسية $a_t = 6\\text{ م/ث}^2$ وعجلة عمودية $a_n = 8\\text{ م/ث}^2$. احسب معيار العجلة الكلية $\\|\\vec{a}\\|$.",
    "optionsEn": [
      "$\\|\\vec{a}\\| = 12\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 10\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 14\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 9\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$\\|\\vec{a}\\| = 12\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 10\\text{ م/ث}^2$",
      "$\\|\\vec{a}\\| = 14\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 9\\text{ m/s}^2$"
    ],
    "correctAnswer": "$\\|\\vec{a}\\| = 10\\text{ m/s}^2$",
    "correctIndex": 1,
    "hintEn": "||a|| = sqrt(a_t^2 + a_n^2). Use Pythagorean theorem.",
    "hintAr": "المعيار = جذر(العجلة المماسية تربيع + العجلة العمودية تربيع).",
    "stepByStepSolutionEn": [
      "1. $\\|\\vec{a}\\|^2 = a_t^2 + a_n^2 = (6)^2 + (8)^2 = 36 + 64 = 100$.",
      "2. $\\|\\vec{a}\\| = \\sqrt{100} = 10\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. مربع المعيار: $(6)^2 + (8)^2 = 100$.",
      "٢. المعيار: $\\sqrt{100} = 10\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Tangential and normal vectors are mutually perpendicular unit vectors in the Frenet-Serret frame.",
    "teacherTipAr": "متجها الوحدة المماسي والعمودي متعامدان تماماً في إطار فرينيه."
  },
  {
    "id": "egbac_mech_ch1_ex_03",
    "titleEn": "Exercise 3: Total Acceleration Magnitude in Curvilinear Motion",
    "titleAr": "تمرين 3: معيار العجلة الكلية في الحركة المنحنية",
    "difficulty": "easy",
    "questionEn": "A body moving on a curve has tangential acceleration $a_t = 9\\text{ m/s}^2$ and normal acceleration $a_n = 12\\text{ m/s}^2$. Calculate its total acceleration magnitude $\\|\\vec{a}\\|$.",
    "questionAr": "جسيم يتحرك على مسار منحنٍ له عجلة مماسية $a_t = 9\\text{ م/ث}^2$ وعجلة عمودية $a_n = 12\\text{ م/ث}^2$. احسب معيار العجلة الكلية $\\|\\vec{a}\\|$.",
    "optionsEn": [
      "$\\|\\vec{a}\\| = 17\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 19\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 15\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 14\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$\\|\\vec{a}\\| = 17\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 19\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 15\\text{ م/ث}^2$",
      "$\\|\\vec{a}\\| = 14\\text{ m/s}^2$"
    ],
    "correctAnswer": "$\\|\\vec{a}\\| = 15\\text{ m/s}^2$",
    "correctIndex": 2,
    "hintEn": "||a|| = sqrt(a_t^2 + a_n^2). Use Pythagorean theorem.",
    "hintAr": "المعيار = جذر(العجلة المماسية تربيع + العجلة العمودية تربيع).",
    "stepByStepSolutionEn": [
      "1. $\\|\\vec{a}\\|^2 = a_t^2 + a_n^2 = (9)^2 + (12)^2 = 81 + 144 = 225$.",
      "2. $\\|\\vec{a}\\| = \\sqrt{225} = 15\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. مربع المعيار: $(9)^2 + (12)^2 = 225$.",
      "٢. المعيار: $\\sqrt{225} = 15\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Tangential and normal vectors are mutually perpendicular unit vectors in the Frenet-Serret frame.",
    "teacherTipAr": "متجها الوحدة المماسي والعمودي متعامدان تماماً في إطار فرينيه."
  },
  {
    "id": "egbac_mech_ch1_ex_04",
    "titleEn": "Exercise 4: Total Acceleration Magnitude in Curvilinear Motion",
    "titleAr": "تمرين 4: معيار العجلة الكلية في الحركة المنحنية",
    "difficulty": "easy",
    "questionEn": "A body moving on a curve has tangential acceleration $a_t = 12\\text{ m/s}^2$ and normal acceleration $a_n = 16\\text{ m/s}^2$. Calculate its total acceleration magnitude $\\|\\vec{a}\\|$.",
    "questionAr": "جسيم يتحرك على مسار منحنٍ له عجلة مماسية $a_t = 12\\text{ م/ث}^2$ وعجلة عمودية $a_n = 16\\text{ م/ث}^2$. احسب معيار العجلة الكلية $\\|\\vec{a}\\|$.",
    "optionsEn": [
      "$\\|\\vec{a}\\| = 22\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 24\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 19\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 20\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$\\|\\vec{a}\\| = 22\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 24\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 19\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 20\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$\\|\\vec{a}\\| = 20\\text{ m/s}^2$",
    "correctIndex": 3,
    "hintEn": "||a|| = sqrt(a_t^2 + a_n^2). Use Pythagorean theorem.",
    "hintAr": "المعيار = جذر(العجلة المماسية تربيع + العجلة العمودية تربيع).",
    "stepByStepSolutionEn": [
      "1. $\\|\\vec{a}\\|^2 = a_t^2 + a_n^2 = (12)^2 + (16)^2 = 144 + 256 = 400$.",
      "2. $\\|\\vec{a}\\| = \\sqrt{400} = 20\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. مربع المعيار: $(12)^2 + (16)^2 = 400$.",
      "٢. المعيار: $\\sqrt{400} = 20\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Tangential and normal vectors are mutually perpendicular unit vectors in the Frenet-Serret frame.",
    "teacherTipAr": "متجها الوحدة المماسي والعمودي متعامدان تماماً في إطار فرينيه."
  },
  {
    "id": "egbac_mech_ch1_ex_05",
    "titleEn": "Exercise 5: Total Acceleration Magnitude in Curvilinear Motion",
    "titleAr": "تمرين 5: معيار العجلة الكلية في الحركة المنحنية",
    "difficulty": "easy",
    "questionEn": "A body moving on a curve has tangential acceleration $a_t = 15\\text{ m/s}^2$ and normal acceleration $a_n = 20\\text{ m/s}^2$. Calculate its total acceleration magnitude $\\|\\vec{a}\\|$.",
    "questionAr": "جسيم يتحرك على مسار منحنٍ له عجلة مماسية $a_t = 15\\text{ م/ث}^2$ وعجلة عمودية $a_n = 20\\text{ م/ث}^2$. احسب معيار العجلة الكلية $\\|\\vec{a}\\|$.",
    "optionsEn": [
      "$\\|\\vec{a}\\| = 25\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 27\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 29\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 24\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$\\|\\vec{a}\\| = 25\\text{ م/ث}^2$",
      "$\\|\\vec{a}\\| = 27\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 29\\text{ m/s}^2$",
      "$\\|\\vec{a}\\| = 24\\text{ m/s}^2$"
    ],
    "correctAnswer": "$\\|\\vec{a}\\| = 25\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "||a|| = sqrt(a_t^2 + a_n^2). Use Pythagorean theorem.",
    "hintAr": "المعيار = جذر(العجلة المماسية تربيع + العجلة العمودية تربيع).",
    "stepByStepSolutionEn": [
      "1. $\\|\\vec{a}\\|^2 = a_t^2 + a_n^2 = (15)^2 + (20)^2 = 225 + 400 = 625$.",
      "2. $\\|\\vec{a}\\| = \\sqrt{625} = 25\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. مربع المعيار: $(15)^2 + (20)^2 = 625$.",
      "٢. المعيار: $\\sqrt{625} = 25\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Tangential and normal vectors are mutually perpendicular unit vectors in the Frenet-Serret frame.",
    "teacherTipAr": "متجها الوحدة المماسي والعمودي متعامدان تماماً في إطار فرينيه."
  },
  {
    "id": "egbac_mech_ch1_ex_06",
    "titleEn": "Exercise 6: Centripetal Normal Acceleration Computation",
    "titleAr": "تمرين 6: حساب العجلة العمودية المركزية",
    "difficulty": "medium",
    "questionEn": "A particle moves at speed $v = 10\\text{ m/s}$ along a curve of radius of curvature $\\rho = 50\\text{ m}$. Find its normal acceleration $a_n$.",
    "questionAr": "يتحرك جسيم بسرعة $v = 10\\text{ م/ث}$ على مسار منحنٍ نصف قطر انحنائه $\\rho = 50\\text{ م}$. احسب عجلته العمودية $a_n$.",
    "optionsEn": [
      "$a_n = 4\\text{ m/s}^2$",
      "$a_n = 2\\text{ m/s}^2$",
      "$a_n = 6\\text{ m/s}^2$",
      "$a_n = 3\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$a_n = 4\\text{ m/s}^2$",
      "$a_n = 2\\text{ م/ث}^2$",
      "$a_n = 6\\text{ m/s}^2$",
      "$a_n = 3\\text{ m/s}^2$"
    ],
    "correctAnswer": "$a_n = 2\\text{ m/s}^2$",
    "correctIndex": 1,
    "hintEn": "a_n = v^2 / rho.",
    "hintAr": "العجلة العمودية = السرعة تربيع مقسومة على نصف قطر الانحناء.",
    "stepByStepSolutionEn": [
      "1. $a_n = \\frac{v^2}{\\rho} = \\frac{(10)^2}{50} = \\frac{100}{50} = 2\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. $a_n = \\frac{(10)^2}{50} = \\frac{100}{50} = 2\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Normal acceleration scales with speed squared and inversely with curve radius.",
    "teacherTipAr": "تتناسب العجلة العمودية طردياً مع مربع السرعة وعكسياً مع نصف قطر الانحناء."
  },
  {
    "id": "egbac_mech_ch1_ex_07",
    "titleEn": "Exercise 7: Centripetal Normal Acceleration Computation",
    "titleAr": "تمرين 7: حساب العجلة العمودية المركزية",
    "difficulty": "medium",
    "questionEn": "A particle moves at speed $v = 20\\text{ m/s}$ along a curve of radius of curvature $\\rho = 100\\text{ m}$. Find its normal acceleration $a_n$.",
    "questionAr": "يتحرك جسيم بسرعة $v = 20\\text{ م/ث}$ على مسار منحنٍ نصف قطر انحنائه $\\rho = 100\\text{ م}$. احسب عجلته العمودية $a_n$.",
    "optionsEn": [
      "$a_n = 6\\text{ m/s}^2$",
      "$a_n = 8\\text{ m/s}^2$",
      "$a_n = 4\\text{ m/s}^2$",
      "$a_n = 5\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$a_n = 6\\text{ m/s}^2$",
      "$a_n = 8\\text{ m/s}^2$",
      "$a_n = 4\\text{ م/ث}^2$",
      "$a_n = 5\\text{ m/s}^2$"
    ],
    "correctAnswer": "$a_n = 4\\text{ m/s}^2$",
    "correctIndex": 2,
    "hintEn": "a_n = v^2 / rho.",
    "hintAr": "العجلة العمودية = السرعة تربيع مقسومة على نصف قطر الانحناء.",
    "stepByStepSolutionEn": [
      "1. $a_n = \\frac{v^2}{\\rho} = \\frac{(20)^2}{100} = \\frac{400}{100} = 4\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. $a_n = \\frac{(20)^2}{100} = \\frac{400}{100} = 4\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Normal acceleration scales with speed squared and inversely with curve radius.",
    "teacherTipAr": "تتناسب العجلة العمودية طردياً مع مربع السرعة وعكسياً مع نصف قطر الانحناء."
  },
  {
    "id": "egbac_mech_ch1_ex_08",
    "titleEn": "Exercise 8: Centripetal Normal Acceleration Computation",
    "titleAr": "تمرين 8: حساب العجلة العمودية المركزية",
    "difficulty": "medium",
    "questionEn": "A particle moves at speed $v = 30\\text{ m/s}$ along a curve of radius of curvature $\\rho = 150\\text{ m}$. Find its normal acceleration $a_n$.",
    "questionAr": "يتحرك جسيم بسرعة $v = 30\\text{ م/ث}$ على مسار منحنٍ نصف قطر انحنائه $\\rho = 150\\text{ م}$. احسب عجلته العمودية $a_n$.",
    "optionsEn": [
      "$a_n = 8\\text{ m/s}^2$",
      "$a_n = 10\\text{ m/s}^2$",
      "$a_n = 7\\text{ m/s}^2$",
      "$a_n = 6\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$a_n = 8\\text{ m/s}^2$",
      "$a_n = 10\\text{ m/s}^2$",
      "$a_n = 7\\text{ m/s}^2$",
      "$a_n = 6\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$a_n = 6\\text{ m/s}^2$",
    "correctIndex": 3,
    "hintEn": "a_n = v^2 / rho.",
    "hintAr": "العجلة العمودية = السرعة تربيع مقسومة على نصف قطر الانحناء.",
    "stepByStepSolutionEn": [
      "1. $a_n = \\frac{v^2}{\\rho} = \\frac{(30)^2}{150} = \\frac{900}{150} = 6\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. $a_n = \\frac{(30)^2}{150} = \\frac{900}{150} = 6\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Normal acceleration scales with speed squared and inversely with curve radius.",
    "teacherTipAr": "تتناسب العجلة العمودية طردياً مع مربع السرعة وعكسياً مع نصف قطر الانحناء."
  },
  {
    "id": "egbac_mech_ch1_ex_09",
    "titleEn": "Exercise 9: Centripetal Normal Acceleration Computation",
    "titleAr": "تمرين 9: حساب العجلة العمودية المركزية",
    "difficulty": "medium",
    "questionEn": "A particle moves at speed $v = 40\\text{ m/s}$ along a curve of radius of curvature $\\rho = 200\\text{ m}$. Find its normal acceleration $a_n$.",
    "questionAr": "يتحرك جسيم بسرعة $v = 40\\text{ م/ث}$ على مسار منحنٍ نصف قطر انحنائه $\\rho = 200\\text{ م}$. احسب عجلته العمودية $a_n$.",
    "optionsEn": [
      "$a_n = 8\\text{ m/s}^2$",
      "$a_n = 10\\text{ m/s}^2$",
      "$a_n = 12\\text{ m/s}^2$",
      "$a_n = 9\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$a_n = 8\\text{ م/ث}^2$",
      "$a_n = 10\\text{ m/s}^2$",
      "$a_n = 12\\text{ m/s}^2$",
      "$a_n = 9\\text{ m/s}^2$"
    ],
    "correctAnswer": "$a_n = 8\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "a_n = v^2 / rho.",
    "hintAr": "العجلة العمودية = السرعة تربيع مقسومة على نصف قطر الانحناء.",
    "stepByStepSolutionEn": [
      "1. $a_n = \\frac{v^2}{\\rho} = \\frac{(40)^2}{200} = \\frac{1600}{200} = 8\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. $a_n = \\frac{(40)^2}{200} = \\frac{1600}{200} = 8\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Normal acceleration scales with speed squared and inversely with curve radius.",
    "teacherTipAr": "تتناسب العجلة العمودية طردياً مع مربع السرعة وعكسياً مع نصف قطر الانحناء."
  },
  {
    "id": "egbac_mech_ch1_ex_10",
    "titleEn": "Exercise 10: Centripetal Normal Acceleration Computation",
    "titleAr": "تمرين 10: حساب العجلة العمودية المركزية",
    "difficulty": "medium",
    "questionEn": "A particle moves at speed $v = 50\\text{ m/s}$ along a curve of radius of curvature $\\rho = 250\\text{ m}$. Find its normal acceleration $a_n$.",
    "questionAr": "يتحرك جسيم بسرعة $v = 50\\text{ م/ث}$ على مسار منحنٍ نصف قطر انحنائه $\\rho = 250\\text{ م}$. احسب عجلته العمودية $a_n$.",
    "optionsEn": [
      "$a_n = 12\\text{ m/s}^2$",
      "$a_n = 10\\text{ m/s}^2$",
      "$a_n = 14\\text{ m/s}^2$",
      "$a_n = 11\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$a_n = 12\\text{ m/s}^2$",
      "$a_n = 10\\text{ م/ث}^2$",
      "$a_n = 14\\text{ m/s}^2$",
      "$a_n = 11\\text{ m/s}^2$"
    ],
    "correctAnswer": "$a_n = 10\\text{ m/s}^2$",
    "correctIndex": 1,
    "hintEn": "a_n = v^2 / rho.",
    "hintAr": "العجلة العمودية = السرعة تربيع مقسومة على نصف قطر الانحناء.",
    "stepByStepSolutionEn": [
      "1. $a_n = \\frac{v^2}{\\rho} = \\frac{(50)^2}{250} = \\frac{2500}{250} = 10\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. $a_n = \\frac{(50)^2}{250} = \\frac{2500}{250} = 10\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Normal acceleration scales with speed squared and inversely with curve radius.",
    "teacherTipAr": "تتناسب العجلة العمودية طردياً مع مربع السرعة وعكسياً مع نصف قطر الانحناء."
  },
  {
    "id": "egbac_mech_ch1_ex_11",
    "titleEn": "Exercise 11: Velocity Magnitude in Polar Coordinates",
    "titleAr": "تمرين 11: معيار السرعة في الإحداثيات القطبية",
    "difficulty": "hots",
    "questionEn": "A particle has radial velocity $v_r = \\dot{r} = 3\\text{ m/s}$ and transverse velocity $v_\\theta = r\\dot{\\theta} = 4\\text{ m/s}$. Find its total speed $v$.",
    "questionAr": "لجسيم سرعة قطرية $v_r = \\dot{r} = 3\\text{ م/ث}$ وسرعة مستعرضة $v_\\theta = r\\dot{\\theta} = 4\\text{ م/ث}$. احسب سرعته القياسية الكلية $v$.",
    "optionsEn": [
      "$v = 7\\text{ m/s}$",
      "$v = 9\\text{ m/s}$",
      "$v = 5\\text{ m/s}$",
      "$v = 6\\text{ m/s}$"
    ],
    "optionsAr": [
      "$v = 7\\text{ m/s}$",
      "$v = 9\\text{ m/s}$",
      "$v = 5\\text{ م/ث}$",
      "$v = 6\\text{ m/s}$"
    ],
    "correctAnswer": "$v = 5\\text{ m/s}$",
    "correctIndex": 2,
    "hintEn": "v = sqrt(v_r^2 + v_theta^2).",
    "hintAr": "السرعة = جذر(السرعة القطرية تربيع + السرعة المستعرضة تربيع).",
    "stepByStepSolutionEn": [
      "1. $v^2 = v_r^2 + v_\\theta^2 = (3)^2 + (4)^2 = 9 + 16 = 25$.",
      "2. $v = \\sqrt{25} = 5\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. $v^2 = (3)^2 + (4)^2 = 25$.",
      "٢. $v = \\sqrt{25} = 5\\text{ م/ث}$."
    ],
    "teacherTipEn": "Radial and transverse unit vectors u_r and u_theta form an orthogonal curvilinear basis.",
    "teacherTipAr": "متجها الوحدة القطري والمستعرض يشكلان أساساً متعامداً دائماً."
  },
  {
    "id": "egbac_mech_ch1_ex_12",
    "titleEn": "Exercise 12: Velocity Magnitude in Polar Coordinates",
    "titleAr": "تمرين 12: معيار السرعة في الإحداثيات القطبية",
    "difficulty": "hots",
    "questionEn": "A particle has radial velocity $v_r = \\dot{r} = 6\\text{ m/s}$ and transverse velocity $v_\\theta = r\\dot{\\theta} = 8\\text{ m/s}$. Find its total speed $v$.",
    "questionAr": "لجسيم سرعة قطرية $v_r = \\dot{r} = 6\\text{ م/ث}$ وسرعة مستعرضة $v_\\theta = r\\dot{\\theta} = 8\\text{ م/ث}$. احسب سرعته القياسية الكلية $v$.",
    "optionsEn": [
      "$v = 12\\text{ m/s}$",
      "$v = 14\\text{ m/s}$",
      "$v = 11\\text{ m/s}$",
      "$v = 10\\text{ m/s}$"
    ],
    "optionsAr": [
      "$v = 12\\text{ m/s}$",
      "$v = 14\\text{ m/s}$",
      "$v = 11\\text{ m/s}$",
      "$v = 10\\text{ م/ث}$"
    ],
    "correctAnswer": "$v = 10\\text{ m/s}$",
    "correctIndex": 3,
    "hintEn": "v = sqrt(v_r^2 + v_theta^2).",
    "hintAr": "السرعة = جذر(السرعة القطرية تربيع + السرعة المستعرضة تربيع).",
    "stepByStepSolutionEn": [
      "1. $v^2 = v_r^2 + v_\\theta^2 = (6)^2 + (8)^2 = 36 + 64 = 100$.",
      "2. $v = \\sqrt{100} = 10\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. $v^2 = (6)^2 + (8)^2 = 100$.",
      "٢. $v = \\sqrt{100} = 10\\text{ م/ث}$."
    ],
    "teacherTipEn": "Radial and transverse unit vectors u_r and u_theta form an orthogonal curvilinear basis.",
    "teacherTipAr": "متجها الوحدة القطري والمستعرض يشكلان أساساً متعامداً دائماً."
  },
  {
    "id": "egbac_mech_ch1_ex_13",
    "titleEn": "Exercise 13: Velocity Magnitude in Polar Coordinates",
    "titleAr": "تمرين 13: معيار السرعة في الإحداثيات القطبية",
    "difficulty": "hots",
    "questionEn": "A particle has radial velocity $v_r = \\dot{r} = 9\\text{ m/s}$ and transverse velocity $v_\\theta = r\\dot{\\theta} = 12\\text{ m/s}$. Find its total speed $v$.",
    "questionAr": "لجسيم سرعة قطرية $v_r = \\dot{r} = 9\\text{ م/ث}$ وسرعة مستعرضة $v_\\theta = r\\dot{\\theta} = 12\\text{ م/ث}$. احسب سرعته القياسية الكلية $v$.",
    "optionsEn": [
      "$v = 15\\text{ m/s}$",
      "$v = 17\\text{ m/s}$",
      "$v = 19\\text{ m/s}$",
      "$v = 16\\text{ m/s}$"
    ],
    "optionsAr": [
      "$v = 15\\text{ م/ث}$",
      "$v = 17\\text{ m/s}$",
      "$v = 19\\text{ m/s}$",
      "$v = 16\\text{ m/s}$"
    ],
    "correctAnswer": "$v = 15\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "v = sqrt(v_r^2 + v_theta^2).",
    "hintAr": "السرعة = جذر(السرعة القطرية تربيع + السرعة المستعرضة تربيع).",
    "stepByStepSolutionEn": [
      "1. $v^2 = v_r^2 + v_\\theta^2 = (9)^2 + (12)^2 = 81 + 144 = 225$.",
      "2. $v = \\sqrt{225} = 15\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. $v^2 = (9)^2 + (12)^2 = 225$.",
      "٢. $v = \\sqrt{225} = 15\\text{ م/ث}$."
    ],
    "teacherTipEn": "Radial and transverse unit vectors u_r and u_theta form an orthogonal curvilinear basis.",
    "teacherTipAr": "متجها الوحدة القطري والمستعرض يشكلان أساساً متعامداً دائماً."
  },
  {
    "id": "egbac_mech_ch1_ex_14",
    "titleEn": "Exercise 14: Velocity Magnitude in Polar Coordinates",
    "titleAr": "تمرين 14: معيار السرعة في الإحداثيات القطبية",
    "difficulty": "hots",
    "questionEn": "A particle has radial velocity $v_r = \\dot{r} = 12\\text{ m/s}$ and transverse velocity $v_\\theta = r\\dot{\\theta} = 16\\text{ m/s}$. Find its total speed $v$.",
    "questionAr": "لجسيم سرعة قطرية $v_r = \\dot{r} = 12\\text{ م/ث}$ وسرعة مستعرضة $v_\\theta = r\\dot{\\theta} = 16\\text{ م/ث}$. احسب سرعته القياسية الكلية $v$.",
    "optionsEn": [
      "$v = 22\\text{ m/s}$",
      "$v = 20\\text{ m/s}$",
      "$v = 24\\text{ m/s}$",
      "$v = 21\\text{ m/s}$"
    ],
    "optionsAr": [
      "$v = 22\\text{ m/s}$",
      "$v = 20\\text{ م/ث}$",
      "$v = 24\\text{ m/s}$",
      "$v = 21\\text{ m/s}$"
    ],
    "correctAnswer": "$v = 20\\text{ m/s}$",
    "correctIndex": 1,
    "hintEn": "v = sqrt(v_r^2 + v_theta^2).",
    "hintAr": "السرعة = جذر(السرعة القطرية تربيع + السرعة المستعرضة تربيع).",
    "stepByStepSolutionEn": [
      "1. $v^2 = v_r^2 + v_\\theta^2 = (12)^2 + (16)^2 = 144 + 256 = 400$.",
      "2. $v = \\sqrt{400} = 20\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. $v^2 = (12)^2 + (16)^2 = 400$.",
      "٢. $v = \\sqrt{400} = 20\\text{ م/ث}$."
    ],
    "teacherTipEn": "Radial and transverse unit vectors u_r and u_theta form an orthogonal curvilinear basis.",
    "teacherTipAr": "متجها الوحدة القطري والمستعرض يشكلان أساساً متعامداً دائماً."
  },
  {
    "id": "egbac_mech_ch1_ex_15",
    "titleEn": "Exercise 15: Velocity Magnitude in Polar Coordinates",
    "titleAr": "تمرين 15: معيار السرعة في الإحداثيات القطبية",
    "difficulty": "hots",
    "questionEn": "A particle has radial velocity $v_r = \\dot{r} = 15\\text{ m/s}$ and transverse velocity $v_\\theta = r\\dot{\\theta} = 20\\text{ m/s}$. Find its total speed $v$.",
    "questionAr": "لجسيم سرعة قطرية $v_r = \\dot{r} = 15\\text{ م/ث}$ وسرعة مستعرضة $v_\\theta = r\\dot{\\theta} = 20\\text{ م/ث}$. احسب سرعته القياسية الكلية $v$.",
    "optionsEn": [
      "$v = 27\\text{ m/s}$",
      "$v = 29\\text{ m/s}$",
      "$v = 25\\text{ m/s}$",
      "$v = 26\\text{ m/s}$"
    ],
    "optionsAr": [
      "$v = 27\\text{ m/s}$",
      "$v = 29\\text{ m/s}$",
      "$v = 25\\text{ م/ث}$",
      "$v = 26\\text{ m/s}$"
    ],
    "correctAnswer": "$v = 25\\text{ m/s}$",
    "correctIndex": 2,
    "hintEn": "v = sqrt(v_r^2 + v_theta^2).",
    "hintAr": "السرعة = جذر(السرعة القطرية تربيع + السرعة المستعرضة تربيع).",
    "stepByStepSolutionEn": [
      "1. $v^2 = v_r^2 + v_\\theta^2 = (15)^2 + (20)^2 = 225 + 400 = 625$.",
      "2. $v = \\sqrt{625} = 25\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. $v^2 = (15)^2 + (20)^2 = 625$.",
      "٢. $v = \\sqrt{625} = 25\\text{ م/ث}$."
    ],
    "teacherTipEn": "Radial and transverse unit vectors u_r and u_theta form an orthogonal curvilinear basis.",
    "teacherTipAr": "متجها الوحدة القطري والمستعرض يشكلان أساساً متعامداً دائماً."
  }
];
