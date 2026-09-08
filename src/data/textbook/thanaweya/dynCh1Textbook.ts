import type { SolvedProblem } from '../../../types/curriculum';

export const dynCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "dyn_ch1_se_01",
    "titleEn": "MoE Example 1: Velocity and Acceleration from Position Function",
    "titleAr": "مثال الوزارة ١: إيجاد السرعة والعجلة من دالة الموضع",
    "difficulty": "easy",
    "questionEn": "A particle moves in a straight line such that its position coordinate is given by $x(t) = 2t^3 - 9t^2 + 12t - 5$ (where $x$ is in meters and $t$ is in seconds). Find the velocity and acceleration of the particle at $t = 2\\text{ s}$.",
    "questionAr": "يتحرك جسيم في خط مستقيم بحيث كان موقعه $x(t) = 2t^3 - 9t^2 + 12t - 5$ (حيث $x$ بالأمتار و $t$ بالثواني). أوجد سرعة وعجلة الجسيم عند اللحظة $t = 2\\text{ ث}$.",
    "optionsEn": [
      "$v = 0\\text{ m/s}, \\quad a = 6\\text{ m/s}^2$",
      "$v = 4\\text{ m/s}, \\quad a = 12\\text{ m/s}^2$",
      "$v = -2\\text{ m/s}, \\quad a = 6\\text{ m/s}^2$",
      "$v = 0\\text{ m/s}, \\quad a = -6\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$v = 0\\text{ م/ث}, \\quad a = 6\\text{ م/ث}^2$",
      "$v = 4\\text{ م/ث}, \\quad a = 12\\text{ م/ث}^2$",
      "$v = -2\\text{ م/ث}, \\quad a = 6\\text{ م/ث}^2$",
      "$v = 0\\text{ م/ث}, \\quad a = -6\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$v = 0\\text{ m/s}, \\quad a = 6\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Differentiate $x(t)$ with respect to $t$ to get $v(t)$, and differentiate $v(t)$ to get $a(t)$.",
    "hintAr": "اشتق $x(t)$ بالنسبة إلى $t$ للحصول على السرعة $v(t)$، ثم اشتق $v(t)$ للحصول على العجلة $a(t)$.",
    "stepByStepSolutionEn": [
      "1. Differentiate position $x(t)$ to find velocity $v(t)$:",
      "$$v(t) = \\frac{dx}{dt} = 6t^2 - 18t + 12$$",
      "2. At $t = 2\\text{ s}$:",
      "$$v(2) = 6(2)^2 - 18(2) + 12 = 24 - 36 + 12 = 0\\text{ m/s}$$",
      "3. Differentiate velocity $v(t)$ to find acceleration $a(t)$:",
      "$$a(t) = \\frac{dv}{dt} = 12t - 18$$",
      "4. At $t = 2\\text{ s}$:",
      "$$a(2) = 12(2) - 18 = 24 - 18 = 6\\text{ m/s}^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. اشتقاق دالة الموضع بالنسبة للزمن لإيجاد السرعة:",
      "$$v(t) = \\frac{dx}{dt} = 6t^2 - 18t + 12$$",
      "٢. عند $t = 2\\text{ ث}$:",
      "$$v(2) = 6(4) - 18(2) + 12 = 0\\text{ م/ث}$$",
      "٣. اشتقاق دالة السرعة لإيجاد العجلة:",
      "$$a(t) = \\frac{dv}{dt} = 12t - 18$$",
      "٤. عند $t = 2\\text{ ث}$:",
      "$$a(2) = 12(2) - 18 = 6\\text{ م/ث}^2$$"
    ],
    "teacherTipEn": "At t = 2, v = 0 and a != 0, which means the particle is momentarily at rest.",
    "teacherTipAr": "انعدام السرعة مع وجود عجلة يعني أن الجسيم يسكن لحظياً."
  },
  {
    "id": "dyn_ch1_se_02",
    "titleEn": "MoE Example 2: Accelerated and Decelerated Motion Intervals",
    "titleAr": "مثال الوزارة ٢: فترات الحركة المتسارعة والتقصيرية",
    "difficulty": "medium",
    "questionEn": "A particle moves in a straight line with position $x(t) = t^3 - 6t^2 + 9t$. On which time interval is the motion accelerated ($v \\cdot a > 0$) for $t > 0$?",
    "questionAr": "يتحرك جسيم في خط مستقيم بحيث كان موضعه $x(t) = t^3 - 6t^2 + 9t$. في أي فترة زمنية تكون الحركة متسارعة ($v \\cdot a > 0$) لجميع $t > 0$؟",
    "optionsEn": [
      "$(1, 2) \\cup (3, \\infty)$",
      "$(0, 1) \\cup (2, 3)$",
      "$(0, 2) \\cup (3, \\infty)$",
      "$(2, 3)$"
    ],
    "optionsAr": [
      "$(1, 2) \\cup (3, \\infty)$",
      "$(0, 1) \\cup (2, 3)$",
      "$(0, 2) \\cup (3, \\infty)$",
      "$(2, 3)$"
    ],
    "correctAnswer": "$(1, 2) \\cup (3, \\infty)$",
    "correctIndex": 0,
    "hintEn": "Find the roots of $v(t) = 0$ and $a(t) = 0$, then make a sign chart for $v(t) \\cdot a(t)$.",
    "hintAr": "أوجد أصفار السرعة $v(t) = 0$ وأصفار العجلة $a(t) = 0$، ثم ادرس إشارة حاصل الضرب $v(t) \\cdot a(t)$.",
    "stepByStepSolutionEn": [
      "1. Velocity: $v(t) = \\frac{dx}{dt} = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)$.",
      "Roots of $v(t)$: $t = 1, 3$. Signs of $v$: positive on $(0, 1) \\cup (3, \\infty)$, negative on $(1, 3)$.",
      "2. Acceleration: $a(t) = \\frac{dv}{dt} = 6t - 12 = 6(t - 2)$.",
      "Root of $a(t)$: $t = 2$. Signs of $a$: negative on $(0, 2)$, positive on $(2, \\infty)$.",
      "3. Sign of $v(t) \\cdot a(t)$:",
      "- On $(0, 1)$: $v > 0, a < 0 \\implies v \\cdot a < 0$ (decelerated).",
      "- On $(1, 2)$: $v < 0, a < 0 \\implies v \\cdot a > 0$ (accelerated).",
      "- On $(2, 3)$: $v < 0, a > 0 \\implies v \\cdot a < 0$ (decelerated).",
      "- On $(3, \\infty)$: $v > 0, a > 0 \\implies v \\cdot a > 0$ (accelerated).",
      "4. Therefore, motion is accelerated on $(1, 2) \\cup (3, \\infty)$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب السرعة: $v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)$. الأصفار عند $t = 1, 3$.",
      "٢. حساب العجلة: $a(t) = 6t - 12 = 6(t - 2)$. الصفر عند $t = 2$.",
      "٣. دراسة إشارة $v \\cdot a$ على خط الأعداد:",
      "- في الفترة $(0, 1)$: $v > 0$ و $a < 0 \\implies v \\cdot a < 0$ (تقصيرية).",
      "- في الفترة $(1, 2)$: $v < 0$ و $a < 0 \\implies v \\cdot a > 0$ (متسارعة).",
      "- في الفترة $(2, 3)$: $v < 0$ و $a > 0 \\implies v \\cdot a < 0$ (تقصيرية).",
      "- في الفترة $(3, \\infty)$: $v > 0$ و $a > 0 \\implies v \\cdot a > 0$ (متسارعة).",
      "٤. إذن الحركة متسارعة في $(1, 2) \\cup (3, \\infty)$."
    ],
    "teacherTipEn": "Motion is accelerated when speed increases: v and a share the same sign.",
    "teacherTipAr": "الحركة المتسارعة تعني أن معيار السرعة يزداد، أي أن للسرعة والعجلة نفس الإشارة."
  },
  {
    "id": "dyn_ch1_se_03",
    "titleEn": "MoE Example 3: Acceleration from Velocity as Function of Position",
    "titleAr": "مثال الوزارة ٣: حساب العجلة عندما تكون السرعة دالة في الموضع",
    "difficulty": "easy",
    "questionEn": "A particle moves in a straight line such that its velocity $v$ and position $x$ satisfy $v^2 = 16 - 9x^2$. Find the acceleration $a$ of the particle in terms of $x$.",
    "questionAr": "يتحرك جسيم في خط مستقيم بحيث ترتبط سرعته $v$ بموضعه $x$ بالعلاقة $v^2 = 16 - 9x^2$. أوجد عجلة الجسيم $a$ بدلالة $x$.",
    "optionsEn": [
      "$a = -9x$",
      "$a = -18x$",
      "$a = 9x$",
      "$a = -9x^2$"
    ],
    "optionsAr": [
      "$a = -9x$",
      "$a = -18x$",
      "$a = 9x$",
      "$a = -9x^2$"
    ],
    "correctAnswer": "$a = -9x$",
    "correctIndex": 0,
    "hintEn": "Differentiate both sides with respect to $x$ using $\\frac{d}{dx}(v^2) = 2v \\frac{dv}{dx} = 2a$.",
    "hintAr": "اشتق الطرفين بالنسبة إلى $x$ مستخدماً $\\frac{d}{dx}(v^2) = 2v \\frac{dv}{dx} = 2a$.",
    "stepByStepSolutionEn": [
      "1. Given equation: $v^2 = 16 - 9x^2$.",
      "2. Differentiate both sides with respect to position $x$:",
      "$$\\frac{d}{dx}(v^2) = \\frac{d}{dx}(16 - 9x^2)$$",
      "$$2v \\frac{dv}{dx} = -18x$$",
      "3. Recall the acceleration relation $a = v \\frac{dv}{dx}$:",
      "$$2a = -18x \\implies a = -9x$$"
    ],
    "stepByStepSolutionAr": [
      "١. العلاقة المعطاة: $v^2 = 16 - 9x^2$.",
      "٢. بالاشتقاق الضمني بالنسبة إلى $x$:",
      "$$2v \\frac{dv}{dx} = -18x$$",
      "٣. بما أن العجلة $a = v \\frac{dv}{dx}$:",
      "$$2a = -18x \\implies a = -9x$$"
    ],
    "teacherTipEn": "d(v^2)/dx = 2a is the fastest way to solve this type of question!",
    "teacherTipAr": "مشتقة ع² بالنسبة لـ س تساوي ٢ جـ، وهي أسرع طريقة للحل في الامتحان!"
  },
  {
    "id": "dyn_ch1_se_04",
    "titleEn": "MoE Example 4: Maximum Velocity of a Particle",
    "titleAr": "مثال الوزارة ٤: أقصى سرعة يبلغها الجسيم",
    "difficulty": "easy",
    "questionEn": "A particle moves in a straight line with displacement $s(t) = 3t^2 - \\frac{1}{3}t^3$ (in meters). Find the maximum velocity reached by the particle.",
    "questionAr": "يتحرك جسيم في خط مستقيم بحيث كانت إزاحته $s(t) = 3t^2 - \\frac{1}{3}t^3$ (بالأمتار). أوجد أقصى سرعة يبلغها الجسيم.",
    "optionsEn": [
      "$9\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$18\\text{ m/s}$"
    ],
    "optionsAr": [
      "$9\\text{ م/ث}$",
      "$6\\text{ م/ث}$",
      "$12\\text{ م/ث}$",
      "$18\\text{ م/ث}$"
    ],
    "correctAnswer": "$9\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Velocity is maximum when acceleration is zero: $a(t) = 0$.",
    "hintAr": "تبلغ السرعة قيمتها العظمى عندما تنعدم العجلة: $a(t) = 0$.",
    "stepByStepSolutionEn": [
      "1. Find velocity: $v(t) = \\frac{ds}{dt} = 6t - t^2$.",
      "2. Find acceleration: $a(t) = \\frac{dv}{dt} = 6 - 2t$.",
      "3. For maximum velocity, set $a(t) = 0$:",
      "$$6 - 2t = 0 \\implies t = 3\\text{ s}$$",
      "4. Calculate maximum velocity: $v(3) = 6(3) - (3)^2 = 18 - 9 = 9\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب السرعة: $v(t) = 6t - t^2$.",
      "٢. حساب العجلة: $a(t) = 6 - 2t$.",
      "٣. لأقصى سرعة نضع العجلة مساوية للصفر: $6 - 2t = 0 \\implies t = 3\\text{ ث}$.",
      "٤. التعويض في دالة السرعة: $v(3) = 6(3) - 9 = 9\\text{ م/ث}$."
    ],
    "teacherTipEn": "Maximum velocity occurs when a = 0 and da/dt < 0.",
    "teacherTipAr": "أقصى سرعة تحدث عند انعدام العجلة."
  },
  {
    "id": "dyn_ch1_se_05",
    "titleEn": "MoE Example 5: Displacement vs. Total Distance Traveled",
    "titleAr": "مثال الوزارة ٥: الفرق بين الإزاحة والمسافة الكلية المقطوعة",
    "difficulty": "medium",
    "questionEn": "A particle moves in a straight line with velocity $v(t) = 3t^2 - 12\\text{ m/s}$. Find the total distance traveled by the particle in the time interval $[0, 3]$.",
    "questionAr": "يتحرك جسيم في خط مستقيم بسرعة $v(t) = 3t^2 - 12\\text{ م/ث}$. أوجد المسافة الكلية التي قطعها الجسيم في الفترة الزمنية $[0, 3]$.",
    "optionsEn": [
      "$23\\text{ m}$",
      "$-9\\text{ m}$",
      "$16\\text{ m}$",
      "$27\\text{ m}$"
    ],
    "optionsAr": [
      "$23\\text{ م}$",
      "$-9\\text{ م}$",
      "$16\\text{ م}$",
      "$27\\text{ م}$"
    ],
    "correctAnswer": "$23\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Find when $v(t) = 0$ to split the integral of $|v(t)|$. Here $v(t) = 0$ at $t = 2$.",
    "hintAr": "ابحث عن أصفار السرعة لتجزئة تكامل مقياس السرعة. هنا $v(t) = 0$ عند $t = 2$.",
    "stepByStepSolutionEn": [
      "1. Find when particle stops: $3t^2 - 12 = 0 \\implies t^2 = 4 \\implies t = 2\\text{ s} \\in [0, 3]$.",
      "2. For $t \\in [0, 2]$, $v(t) \\le 0$, so $|v(t)| = -(3t^2 - 12) = 12 - 3t^2$.",
      "$$\\text{Distance}_1 = \\int_0^2 (12 - 3t^2) dt = [12t - t^3]_0^2 = 24 - 8 = 16\\text{ m}$$",
      "3. For $t \\in [2, 3]$, $v(t) \\ge 0$, so $|v(t)| = 3t^2 - 12$.",
      "$$\\text{Distance}_2 = \\int_2^3 (3t^2 - 12) dt = [t^3 - 12t]_2^3 = (27 - 36) - (8 - 24) = -9 - (-16) = 7\\text{ m}$$",
      "4. Total distance: $d = 16 + 7 = 23\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. إيجاد لحظات السكون: $3t^2 - 12 = 0 \\implies t = 2\\text{ ث} \\in [0, 3]$.",
      "٢. في الفترة $[0, 2]$ السرعة سالبة: المسافة الأولى = $|\\int_0^2 (3t^2 - 12)dt| = |[t^3 - 12t]_0^2| = |8 - 24| = 16\\text{ م}$.",
      "٣. في الفترة $[2, 3]$ السرعة موجبة: المسافة الثانية = $\\int_2^3 (3t^2 - 12)dt = [t^3 - 12t]_2^3 = -9 - (-16) = 7\\text{ م}$.",
      "٤. المسافة الكلية = $16 + 7 = 23\\text{ م}$."
    ],
    "teacherTipEn": "Displacement is integral of v dt (-9 m), but total distance is integral of |v| dt (23 m)!",
    "teacherTipAr": "الإزاحة هي تكامل ع مباشرة (-٩ م)، بينما المسافة الكلية هي تكامل |ع| (٢٣ م)!"
  },
  {
    "id": "dyn_ch1_se_06",
    "titleEn": "MoE Example 6: Integrating Acceleration with Initial Conditions",
    "titleAr": "مثال الوزارة ٦: تكامل العجلة مع الشروط الابتدائية",
    "difficulty": "easy",
    "questionEn": "A particle moves in a straight line with acceleration $a(t) = 6t - 4\\text{ m/s}^2$. If $v(0) = 3\\text{ m/s}$ and $x(0) = 2\\text{ m}$, find the position $x(t)$ at $t = 2\\text{ s}$.",
    "questionAr": "يتحرك جسيم في خط مستقيم بعجلة $a(t) = 6t - 4\\text{ م/ث}^2$. إذا كان $v(0) = 3\\text{ م/ث}$ و $x(0) = 2\\text{ م}$، أوجد موضع الجسيم $x(t)$ عند $t = 2\\text{ ث}$.",
    "optionsEn": [
      "$8\\text{ m}$",
      "$10\\text{ m}$",
      "$6\\text{ m}$",
      "$12\\text{ m}$"
    ],
    "optionsAr": [
      "$8\\text{ م}$",
      "$10\\text{ م}$",
      "$6\\text{ م}$",
      "$12\\text{ م}$"
    ],
    "correctAnswer": "$8\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Integrate acceleration once to get velocity, and integrate velocity to get position, applying initial conditions.",
    "hintAr": "كامل العجلة للحصول على السرعة، ثم كامل السرعة للحصول على الموضع مع تطبيق الشروط الابتدائية.",
    "stepByStepSolutionEn": [
      "1. Velocity: $v(t) = \\int (6t - 4) dt = 3t^2 - 4t + C_1$.",
      "Since $v(0) = 3 \\implies C_1 = 3$, so $v(t) = 3t^2 - 4t + 3$.",
      "2. Position: $x(t) = \\int (3t^2 - 4t + 3) dt = t^3 - 2t^2 + 3t + C_2$.",
      "Since $x(0) = 2 \\implies C_2 = 2$, so $x(t) = t^3 - 2t^2 + 3t + 2$.",
      "3. At $t = 2\\text{ s}$:",
      "$$x(2) = (2)^3 - 2(2)^2 + 3(2) + 2 = 8 - 8 + 6 + 2 = 8\\text{ m}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب السرعة: $v(t) = \\int (6t - 4)dt = 3t^2 - 4t + C_1$. بما أن $v(0) = 3$ فإن $C_1 = 3$.",
      "٢. حساب الموضع: $x(t) = \\int (3t^2 - 4t + 3)dt = t^3 - 2t^2 + 3t + C_2$. بما أن $x(0) = 2$ فإن $C_2 = 2$.",
      "٣. عند $t = 2\\text{ ث}$:",
      "$$x(2) = 8 - 8 + 6 + 2 = 8\\text{ م}$$"
    ],
    "teacherTipEn": "Always determine integration constants from initial conditions.",
    "teacherTipAr": "احسب ثوابت التكامل دائماً من الشروط الابتدائية بدقة."
  },
  {
    "id": "dyn_ch1_se_07",
    "titleEn": "MoE Example 7: Integrating a(x) Using Separation of Variables",
    "titleAr": "مثال الوزارة ٧: تكامل العجلة كدالة في الموضع بفصل المتغيرات",
    "difficulty": "medium",
    "questionEn": "A particle moves in a straight line with acceleration $a = 2x + 1\\text{ m/s}^2$. If the particle starts from $x = 0$ with initial velocity $v = 2\\text{ m/s}$, find $v^2$ when $x = 3\\text{ m}$.",
    "questionAr": "يتحرك جسيم في خط مستقيم بعجلة $a = 2x + 1\\text{ م/ث}^2$. إذا بدأ الجسيم حركته من $x = 0$ بسرعة ابتدائية $v = 2\\text{ م/ث}$، أوجد $v^2$ عندما $x = 3\\text{ م}$.",
    "optionsEn": [
      "$28\\text{ m}^2/\\text{s}^2$",
      "$24\\text{ m}^2/\\text{s}^2$",
      "$32\\text{ m}^2/\\text{s}^2$",
      "$16\\text{ m}^2/\\text{s}^2$"
    ],
    "optionsAr": [
      "$28\\text{ م}^2/\\text{ث}^2$",
      "$24\\text{ م}^2/\\text{ث}^2$",
      "$32\\text{ م}^2/\\text{ث}^2$",
      "$16\\text{ م}^2/\\text{ث}^2$"
    ],
    "correctAnswer": "$28\\text{ m}^2/\\text{s}^2$",
    "correctIndex": 0,
    "hintEn": "Use the relationship $a = v \\frac{dv}{dx} \\implies \\int v dv = \\int a dx$.",
    "hintAr": "استخدم العلاقة $a = v \\frac{dv}{dx} \\implies \\int v dv = \\int a dx$.",
    "stepByStepSolutionEn": [
      "1. Separation of variables: $v dv = a dx = (2x + 1) dx$.",
      "2. Integrate from initial state $(x_0 = 0, v_0 = 2)$ to $(x = 3, v)$:",
      "$$\\int_2^v v dv = \\int_0^3 (2x + 1) dx$$",
      "3. Left side: $\\left[\\frac{1}{2}v^2\\right]_2^v = \\frac{1}{2}(v^2 - 4)$.",
      "4. Right side: $\\left[x^2 + x\\right]_0^3 = (9 + 3) - 0 = 12$.",
      "5. Solve for $v^2$: $\\frac{1}{2}(v^2 - 4) = 12 \\implies v^2 - 4 = 24 \\implies v^2 = 28\\text{ m}^2/\\text{s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. فصل المتغيرات: $v dv = a dx = (2x + 1) dx$.",
      "٢. التكامل من الشروط الابتدائية $(x = 0, v = 2)$ إلى $x = 3$:",
      "$$\\int_2^v v dv = \\int_0^3 (2x + 1) dx$$",
      "٣. الطرف الأيمن: $\\frac{1}{2}(v^2 - 4)$.",
      "٤. الطرف الأيسر: $[x^2 + x]_0^3 = 9 + 3 = 12$.",
      "٥. إذن $\\frac{1}{2}(v^2 - 4) = 12 \\implies v^2 = 28\\text{ م}^2/\\text{ث}^2$."
    ],
    "teacherTipEn": "v dv = a dx is the standard method whenever acceleration is given in terms of position x.",
    "teacherTipAr": "تكامل ع د(ع) = جـ د(س) هو القانون المعياري كلما كانت العجلة بدلالة الموضع س."
  },
  {
    "id": "dyn_ch1_se_08",
    "titleEn": "MoE Example 8: Momentary Rest and Direction of Motion",
    "titleAr": "مثال الوزارة ٨: السكون اللحظي وعكس اتجاه الحركة",
    "difficulty": "easy",
    "questionEn": "A particle moves in a straight line with position $x(t) = t^3 - 3t^2 - 9t + 5$. At what positive time $t$ does the particle change its direction of motion?",
    "questionAr": "يتحرك جسيم في خط مستقيم بحيث كان موضعه $x(t) = t^3 - 3t^2 - 9t + 5$. عند أي لحظة زمنية موجبة $t$ يعكس الجسيم اتجاه حركته؟",
    "optionsEn": [
      "$t = 3\\text{ s}$",
      "$t = 1\\text{ s}$",
      "$t = 2\\text{ s}$",
      "$t = 4\\text{ s}$"
    ],
    "optionsAr": [
      "$t = 3\\text{ ث}$",
      "$t = 1\\text{ ث}$",
      "$t = 2\\text{ ث}$",
      "$t = 4\\text{ ث}$"
    ],
    "correctAnswer": "$t = 3\\text{ s}$",
    "correctIndex": 0,
    "hintEn": "The particle changes its direction of motion when $v(t) = 0$ and $v(t)$ changes sign.",
    "hintAr": "يعكس الجسيم اتجاه حركته عندما تنعدم السرعة $v(t) = 0$ وتتغير إشارتها قبلها وبعدها.",
    "stepByStepSolutionEn": [
      "1. Find velocity: $v(t) = \\frac{dx}{dt} = 3t^2 - 6t - 9 = 3(t^2 - 2t - 3)$.",
      "2. Factor: $v(t) = 3(t - 3)(t + 1)$.",
      "3. Setting $v(t) = 0$ gives $t = 3$ or $t = -1$.",
      "4. Since $t > 0$, the particle stops at $t = 3\\text{ s}$.",
      "5. Sign check: For $0 < t < 3$, $v(t) < 0$; for $t > 3$, $v(t) > 0$. Thus, it reverses direction at $t = 3\\text{ s}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب السرعة: $v(t) = 3t^2 - 6t - 9 = 3(t - 3)(t + 1)$.",
      "٢. أصفار السرعة: $t = 3$ أو $t = -1$ (مرفوض لأن $t > 0$).",
      "٣. بحث الإشارة: قبل $t = 3$ كانت السرعة سالبة، وبعدها أصبحت موجبة.",
      "٤. إذن يعكس الجسيم اتجاه حركته عند $t = 3\\text{ ث}$."
    ],
    "teacherTipEn": "Reversal of motion requires v(t) = 0 and a change of sign.",
    "teacherTipAr": "عكس اتجاه الحركة يتطلب انعدام السرعة وتغير إشارتها."
  },
  {
    "id": "dyn_ch1_se_09",
    "titleEn": "MoE Example 9: Graphical Kinematics (Area Under v-t Curve)",
    "titleAr": "مثال الوزارة ٩: الكينماتيكا البيانية (المساحة تحت منحنى السرعة والزمن)",
    "difficulty": "medium",
    "questionEn": "A particle starts from origin and moves in a straight line. Its velocity-time graph is a triangle with vertices at $(0, 0)$, $(2, 6)$, and $(6, 0)$. Find the displacement of the particle at $t = 6\\text{ s}$.",
    "questionAr": "بدأ جسيم حركته من نقطة الأصل وتحرك في خط مستقيم. كان منحنى (السرعة - الزمن) مثلثاً رؤوسه $(0, 0)$ و $(2, 6)$ و $(6, 0)$. أوجد إزاحة الجسيم عند $t = 6\\text{ ث}$.",
    "optionsEn": [
      "$18\\text{ m}$",
      "$12\\text{ m}$",
      "$24\\text{ m}$",
      "$36\\text{ m}$"
    ],
    "optionsAr": [
      "$18\\text{ م}$",
      "$12\\text{ م}$",
      "$24\\text{ م}$",
      "$36\\text{ م}$"
    ],
    "correctAnswer": "$18\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "The displacement from $t = 0$ to $t = 6$ is the area under the velocity-time graph.",
    "hintAr": "الإزاحة من $t = 0$ إلى $t = 6$ تساوي المساحة تحت منحنى السرعة والزمن.",
    "stepByStepSolutionEn": [
      "1. In a velocity-time graph, displacement is the definite integral $s = \\int_0^6 v(t) dt$.",
      "2. Geometrically, this is the area of the triangle with base $b = 6 - 0 = 6$ and height $h = 6$.",
      "3. Area $= \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 6 \\times 6 = 18\\text{ m}$.",
      "4. Therefore, the displacement at $t = 6\\text{ s}$ is $18\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. في منحنى (السرعة - الزمن)، الإزاحة تساوي التكامل المحدد $s = \\int_0^6 v(t)dt$.",
      "٢. هندسياً، يمثل هذا مساحة المثلث الذي قاعدته $b = 6$ وارتفاعه $h = 6$.",
      "٣. المساحة $= \\frac{1}{2} \\times 6 \\times 6 = 18\\text{ م}$.",
      "٤. إذن إزاحة الجسيم تساوي $18\\text{ م}$."
    ],
    "teacherTipEn": "Area under v-t graph = displacement; slope of v-t graph = acceleration.",
    "teacherTipAr": "المساحة تحت منحنى (ع - ن) تمثل الإزاحة، وميل المنحنى يمثل العجلة."
  },
  {
    "id": "dyn_ch1_se_10",
    "titleEn": "MoE Example 10: 2D Vector Kinematics and Cartesian Trajectory",
    "titleAr": "مثال الوزارة ١٠: حركة جسيم في المستوى والمعادلة الكارتيزية للمسار",
    "difficulty": "medium",
    "questionEn": "The position vector of a particle moving in a plane is $\\vec{r}(t) = (3t + 2)\\hat{i} + (4t - 1)\\hat{j}$. Find the magnitude of the velocity vector and the Cartesian equation of the trajectory.",
    "questionAr": "متجه موضع جسيم يتحرك في المستوى هو $\\vec{r}(t) = (3t + 2)\\hat{i} + (4t - 1)\\hat{j}$. أوجد معيار متجه السرعة والمعادلة الكارتيزية لمسار الجسيم.",
    "optionsEn": [
      "$\\|\\vec{v}\\| = 5\\text{ m/s}, \\quad 4x - 3y - 11 = 0$",
      "$\\|\\vec{v}\\| = 7\\text{ m/s}, \\quad 3x + 4y - 11 = 0$",
      "$\\|\\vec{v}\\| = 5\\text{ m/s}, \\quad 4x + 3y + 11 = 0$",
      "$\\|\\vec{v}\\| = 1\\text{ m/s}, \\quad 3x - 4y - 11 = 0$"
    ],
    "optionsAr": [
      "$\\|\\vec{v}\\| = 5\\text{ م/ث}, \\quad 4x - 3y - 11 = 0$",
      "$\\|\\vec{v}\\| = 7\\text{ م/ث}, \\quad 3x + 4y - 11 = 0$",
      "$\\|\\vec{v}\\| = 5\\text{ م/ث}, \\quad 4x + 3y + 11 = 0$",
      "$\\|\\vec{v}\\| = 1\\text{ م/ث}, \\quad 3x - 4y - 11 = 0$"
    ],
    "correctAnswer": "$\\|\\vec{v}\\| = 5\\text{ m/s}, \\quad 4x - 3y - 11 = 0$",
    "correctIndex": 0,
    "hintEn": "Differentiate $\\vec{r}(t)$ to get $\\vec{v}(t)$, then eliminate parameter $t$ between $x = 3t + 2$ and $y = 4t - 1$.",
    "hintAr": "اشتق $\\vec{r}(t)$ لإيجاد السرعة، ثم احذف الوسيط $t$ بين معادلتي $x = 3t + 2$ و $y = 4t - 1$.",
    "stepByStepSolutionEn": [
      "1. Velocity vector: $\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = 3\\hat{i} + 4\\hat{j}$.",
      "2. Magnitude of velocity: $\\|\\vec{v}\\| = \\sqrt{3^2 + 4^2} = 5\\text{ m/s}$.",
      "3. Parametric equations of motion: $x = 3t + 2 \\implies t = \\frac{x - 2}{3}$.",
      "4. Substitute into $y$: $y = 4\\left(\\frac{x - 2}{3}\\right) - 1 = \\frac{4x - 8 - 3}{3} = \\frac{4x - 11}{3}$.",
      "5. Multiply by 3: $3y = 4x - 11 \\implies 4x - 3y - 11 = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. متجه السرعة: $\\vec{v} = 3\\hat{i} + 4\\hat{j}$.",
      "٢. معيار السرعة: $\\|\\vec{v}\\| = \\sqrt{9 + 16} = 5\\text{ م/ث}$.",
      "٣. المعادلتان البارامتريتان: $x = 3t + 2 \\implies t = \\frac{x - 2}{3}$.",
      "٤. بالتعويض في $y$: $y = 4(\\frac{x - 2}{3}) - 1 = \\frac{4x - 11}{3}$.",
      "٥. إذن معادلة المسار هي $4x - 3y - 11 = 0$."
    ],
    "teacherTipEn": "Constant velocity vector indicates rectilinear motion with constant speed.",
    "teacherTipAr": "ثبات متجه السرعة يعني أن الحركة في خط مستقيم وبسرعة منتظمة."
  }
];

export const dynCh1Exercises: SolvedProblem[] = [
  {
    "id": "dyn_ch1_ex_01",
    "titleEn": "Exercise 1: Displacement from Position Vector",
    "titleAr": "تمرين ١: حساب الإزاحة من متجه الموضع",
    "difficulty": "easy",
    "questionEn": "A particle moves such that its position vector is $\\vec{r}(t) = (t^2 + 3t - 2)\\hat{c}$. Find the displacement vector $\\vec{s}(t)$.",
    "questionAr": "يتحرك جسيم بحيث كان متجه موضعه $\\vec{r}(t) = (t^2 + 3t - 2)\\hat{c}$. أوجد متجه الإزاحة $\\vec{s}(t)$.",
    "optionsEn": [
      "$(t^2 + 3t)\\hat{c}$",
      "$(t^2 + 3t - 2)\\hat{c}$",
      "$(2t + 3)\\hat{c}$",
      "$(t^2 - 2)\\hat{c}$"
    ],
    "optionsAr": [
      "$(t^2 + 3t)\\hat{c}$",
      "$(t^2 + 3t - 2)\\hat{c}$",
      "$(2t + 3)\\hat{c}$",
      "$(t^2 - 2)\\hat{c}$"
    ],
    "correctAnswer": "$(t^2 + 3t)\\hat{c}$",
    "correctIndex": 0,
    "hintEn": "Displacement is $\\vec{s}(t) = \\vec{r}(t) - \\vec{r}(0)$.",
    "hintAr": "الإزاحة هي $\\vec{s}(t) = \\vec{r}(t) - \\vec{r}(0)$.",
    "stepByStepSolutionEn": [
      "1. Find initial position: $\\vec{r}(0) = (0^2 + 3(0) - 2)\\hat{c} = -2\\hat{c}$.",
      "2. Compute displacement: $\\vec{s}(t) = \\vec{r}(t) - \\vec{r}(0) = (t^2 + 3t - 2 - (-2))\\hat{c} = (t^2 + 3t)\\hat{c}$."
    ],
    "stepByStepSolutionAr": [
      "١. الموضع الابتدائي: $\\vec{r}(0) = -2\\hat{c}$.",
      "٢. متجه الإزاحة: $\\vec{s}(t) = \\vec{r}(t) - \\vec{r}(0) = (t^2 + 3t)\\hat{c}$."
    ],
    "teacherTipEn": "Displacement vector always equals zero at t = 0.",
    "teacherTipAr": "متجه الإزاحة ينعدم دائماً عند ن = ٠."
  },
  {
    "id": "dyn_ch1_ex_02",
    "titleEn": "Exercise 2: Acceleration of Harmonic Motion",
    "titleAr": "تمرين ٢: عجلة الحركة التوافقية",
    "difficulty": "medium",
    "questionEn": "A particle moves such that its velocity is $v = \\sin(2t) + \\cos(2t)$. Find its acceleration $a$ when $t = \\frac{\\pi}{4}$.",
    "questionAr": "يتحرك جسيم بحيث كانت سرعته $v = \\sin(2t) + \\cos(2t)$. أوجد عجلته $a$ عند $t = \\frac{\\pi}{4}$.",
    "optionsEn": [
      "$-2$",
      "$2$",
      "$0$",
      "$-4$"
    ],
    "optionsAr": [
      "$-2$",
      "$2$",
      "$0$",
      "$-4$"
    ],
    "correctAnswer": "$-2$",
    "correctIndex": 0,
    "hintEn": "Differentiate $v(t)$: $a = \\frac{dv}{dt} = 2\\cos(2t) - 2\\sin(2t)$.",
    "hintAr": "اشتق السرعة: $a = 2\\cos(2t) - 2\\sin(2t)$.",
    "stepByStepSolutionEn": [
      "1. Differentiate velocity: $a(t) = \\frac{dv}{dt} = 2\\cos(2t) - 2\\sin(2t)$.",
      "2. Substitute $t = \\frac{\\pi}{4}$:",
      "$$a\\left(\\frac{\\pi}{4}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) - 2\\sin\\left(\\frac{\\pi}{2}\\right) = 2(0) - 2(1) = -2$$"
    ],
    "stepByStepSolutionAr": [
      "١. اشتقاق السرعة: $a(t) = 2\\cos(2t) - 2\\sin(2t)$.",
      "٢. عند $t = \\frac{\\pi}{4}$ تكون $2t = \\frac{\\pi}{2}$:",
      "$$a = 2(0) - 2(1) = -2$$"
    ],
    "teacherTipEn": "Multiply by the derivative of the angle when differentiating trigonometric functions.",
    "teacherTipAr": "اضرب في مشتقة الزاوية عند اشتقاق الدوال المثلثية."
  },
  {
    "id": "dyn_ch1_ex_03",
    "titleEn": "Exercise 3: Chain Rule Acceleration with Square Root Velocity",
    "titleAr": "تمرين ٣: عجلة قاعدة السلسلة لسرعة جذرية",
    "difficulty": "medium",
    "questionEn": "A particle moves in a straight line such that $v = \\sqrt{4x + 1}$. What is its acceleration $a$?",
    "questionAr": "يتحرك جسيم في خط مستقيم بحيث $v = \\sqrt{4x + 1}$. ما هي عجلته $a$؟",
    "optionsEn": [
      "$2\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$1\\text{ m/s}^2$",
      "$\\frac{2}{\\sqrt{4x+1}}\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$2\\text{ م/ث}^2$",
      "$4\\text{ م/ث}^2$",
      "$1\\text{ م/ث}^2$",
      "$\\frac{2}{\\sqrt{4x+1}}\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$2\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Square both sides: $v^2 = 4x + 1$, then differentiate with respect to $x$: $2a = 4$.",
    "hintAr": "ربع الطرفين: $v^2 = 4x + 1$، ثم اشتق بالنسبة إلى $x$: $2a = 4$.",
    "stepByStepSolutionEn": [
      "1. Square both sides: $v^2 = 4x + 1$.",
      "2. Differentiate with respect to $x$:",
      "$$2v \\frac{dv}{dx} = 4 \\implies 2a = 4 \\implies a = 2\\text{ m/s}^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. بتربيع الطرفين: $v^2 = 4x + 1$.",
      "٢. بالاشتقاق بالنسبة إلى $x$:",
      "$$2v \\frac{dv}{dx} = 4 \\implies 2a = 4 \\implies a = 2\\text{ م/ث}^2$$"
    ],
    "teacherTipEn": "A constant acceleration motion! v^2 = v_0^2 + 2as with a = 2.",
    "teacherTipAr": "حركة بعجلة منتظمة جـ = ٢ م/ث²."
  },
  {
    "id": "dyn_ch1_ex_04",
    "titleEn": "Exercise 4: Decelerated Motion Condition",
    "titleAr": "تمرين ٤: شرط الحركة التقصيرية",
    "difficulty": "easy",
    "questionEn": "A particle moves with position $x(t) = t^2 - 4t + 3$. For what time interval is the motion decelerated ($v \\cdot a < 0$) for $t > 0$?",
    "questionAr": "يتحرك جسيم بموضع $x(t) = t^2 - 4t + 3$. في أي فترة زمنية تكون الحركة تقصيرية ($v \\cdot a < 0$) لجميع $t > 0$؟",
    "optionsEn": [
      "$(0, 2)$",
      "$(2, \\infty)$",
      "$(1, 3)$",
      "$(0, 1)$"
    ],
    "optionsAr": [
      "$(0, 2)$",
      "$(2, \\infty)$",
      "$(1, 3)$",
      "$(0, 1)$"
    ],
    "correctAnswer": "$(0, 2)$",
    "correctIndex": 0,
    "hintEn": "$v(t) = 2t - 4$ and $a(t) = 2$. Find when $v(t) \\cdot a(t) < 0$.",
    "hintAr": "$v(t) = 2t - 4$ و $a(t) = 2$. ابحث عن الفترة التي فيها $v \\cdot a < 0$.",
    "stepByStepSolutionEn": [
      "1. Velocity: $v(t) = 2t - 4$. Acceleration: $a(t) = 2$.",
      "2. Product: $v \\cdot a = 2(2t - 4) = 4(t - 2)$.",
      "3. For decelerated motion: $v \\cdot a < 0 \\implies 4(t - 2) < 0 \\implies t < 2$.",
      "4. Since $t > 0$, the interval is $(0, 2)$."
    ],
    "stepByStepSolutionAr": [
      "١. السرعة: $v(t) = 2t - 4$. العجلة: $a(t) = 2$.",
      "٢. حاصل الضرب: $v \\cdot a = 4(t - 2)$.",
      "٣. للحركة التقصيرية: $v \\cdot a < 0 \\implies t < 2$.",
      "٤. مع شرط $t > 0$ تكون الفترة هي $(0, 2)$."
    ],
    "teacherTipEn": "Since acceleration is positive constant, motion is decelerated whenever velocity is negative.",
    "teacherTipAr": "بما أن العجلة موجبة دائماً، فالحركة تقصيرية كلما كانت السرعة سالبة."
  },
  {
    "id": "dyn_ch1_ex_05",
    "titleEn": "Exercise 5: Average Velocity vs. Average Speed",
    "titleAr": "تمرين ٥: السرعة المتوسطة ومتجه السرعة المتوسطة",
    "difficulty": "medium",
    "questionEn": "A particle moves in a straight line with $x(t) = t^2 - 2t$. Find its average speed in the time interval $[0, 4]$.",
    "questionAr": "يتحرك جسيم في خط مستقيم بحيث $x(t) = t^2 - 2t$. أوجد سرعته المتوسطة في الفترة الزمنية $[0, 4]$.",
    "optionsEn": [
      "$2.5\\text{ m/s}$",
      "$2.0\\text{ m/s}$",
      "$3.0\\text{ m/s}$",
      "$1.5\\text{ m/s}$"
    ],
    "optionsAr": [
      "$2.5\\text{ م/ث}$",
      "$2.0\\text{ م/ث}$",
      "$3.0\\text{ م/ث}$",
      "$1.5\\text{ م/ث}$"
    ],
    "correctAnswer": "$2.5\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Average speed = Total distance / Total time. Find when $v = 0$ to get total distance.",
    "hintAr": "السرعة المتوسطة = المسافة الكلية / الزمن الكلي. أوجد لحظة السكون لتجزئة المسافة.",
    "stepByStepSolutionEn": [
      "1. Velocity: $v(t) = 2t - 2 = 0 \\implies t = 1\\text{ s}$.",
      "2. At $t = 0$: $x(0) = 0$.",
      "3. At $t = 1$: $x(1) = 1 - 2 = -1$. Distance in $[0, 1] = | -1 - 0 | = 1\\text{ m}$.",
      "4. At $t = 4$: $x(4) = 16 - 8 = 8$. Distance in $[1, 4] = | 8 - (-1) | = 9\\text{ m}$.",
      "5. Total distance: $d = 1 + 9 = 10\\text{ m}$.",
      "6. Average speed: $v_{\\text{avg}} = \\frac{10}{4 - 0} = 2.5\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. السرعة: $v(t) = 2t - 2 = 0 \\implies t = 1\\text{ ث}$.",
      "٢. المواضع: $x(0) = 0$ و $x(1) = -1$ و $x(4) = 8$.",
      "٣. المسافة في $[0, 1]$ هي $1\\text{ م}$. المسافة في $[1, 4]$ هي $|8 - (-1)| = 9\\text{ م}$.",
      "٤. المسافة الكلية = $10\\text{ م}$.",
      "٥. السرعة المتوسطة = $\\frac{10}{4} = 2.5\\text{ م/ث}$."
    ],
    "teacherTipEn": "Average velocity is displacement/time = 8/4 = 2 m/s, but average speed is distance/time = 2.5 m/s!",
    "teacherTipAr": "متجه السرعة المتوسطة هو الإزاحة/الزمن = ٢ م/ث، بينما السرعة المتوسطة القياسية هي المسافة/الزمن = ٢٫٥ م/ث!"
  },
  {
    "id": "dyn_ch1_ex_06",
    "titleEn": "Exercise 6: Velocity from Acceleration a = -4x",
    "titleAr": "تمرين ٦: إيجاد السرعة من العجلة جـ = -٤س",
    "difficulty": "medium",
    "questionEn": "A particle moves with acceleration $a = -4x$. If $v = 6\\text{ m/s}$ at $x = 0$, find $v^2$ when $x = 2\\text{ m}$.",
    "questionAr": "يتحرك جسيم بعجلة $a = -4x$. إذا كانت $v = 6\\text{ م/ث}$ عند $x = 0$، أوجد $v^2$ عندما $x = 2\\text{ م}$.",
    "optionsEn": [
      "$20\\text{ m}^2/\\text{s}^2$",
      "$16\\text{ m}^2/\\text{s}^2$",
      "$24\\text{ m}^2/\\text{s}^2$",
      "$28\\text{ m}^2/\\text{s}^2$"
    ],
    "optionsAr": [
      "$20\\text{ م}^2/\\text{ث}^2$",
      "$16\\text{ م}^2/\\text{ث}^2$",
      "$24\\text{ م}^2/\\text{ث}^2$",
      "$28\\text{ م}^2/\\text{ث}^2$"
    ],
    "correctAnswer": "$20\\text{ m}^2/\\text{s}^2$",
    "correctIndex": 0,
    "hintEn": "Integrate $v dv = a dx = -4x dx$.",
    "hintAr": "كامل $v dv = a dx = -4x dx$.",
    "stepByStepSolutionEn": [
      "1. $\\int_6^v v dv = \\int_0^2 (-4x) dx$.",
      "2. $\\frac{1}{2}(v^2 - 36) = [-2x^2]_0^2 = -2(4) = -8$.",
      "3. $v^2 - 36 = -16 \\implies v^2 = 20\\text{ m}^2/\\text{s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\int_6^v v dv = \\int_0^2 (-4x) dx$.",
      "٢. $\\frac{1}{2}(v^2 - 36) = -8 \\implies v^2 - 36 = -16$.",
      "٣. إذن $v^2 = 20\\text{ م}^2/\\text{ث}^2$."
    ],
    "teacherTipEn": "Simple harmonic oscillator equation: a = -omega^2 * x with omega = 2.",
    "teacherTipAr": "معادلة الحركة التوافقية البسيطة: جـ = -ω² س."
  },
  {
    "id": "dyn_ch1_ex_07",
    "titleEn": "Exercise 7: Total Distance from Velocity Function",
    "titleAr": "تمرين ٧: المسافة الكلية من دالة السرعة",
    "difficulty": "easy",
    "questionEn": "A particle moves with velocity $v(t) = 2t - 4\\text{ m/s}$. Find the total distance traveled during $t \\in [1, 4]$.",
    "questionAr": "يتحرك جسيم بسرعة $v(t) = 2t - 4\\text{ م/ث}$. أوجد المسافة الكلية المقطوعة خلال الفترة $t \\in [1, 4]$.",
    "optionsEn": [
      "$5\\text{ m}$",
      "$3\\text{ m}$",
      "$4\\text{ m}$",
      "$7\\text{ m}$"
    ],
    "optionsAr": [
      "$5\\text{ م}$",
      "$3\\text{ م}$",
      "$4\\text{ م}$",
      "$7\\text{ م}$"
    ],
    "correctAnswer": "$5\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Particle stops at $t = 2\\text{ s} \\in [1, 4]$. Distance is $\\int_1^2 |v| dt + \\int_2^4 |v| dt$.",
    "hintAr": "يسكن الجسيم عند $t = 2\\text{ ث}$. جزئ التكامل إلى فترتين.",
    "stepByStepSolutionEn": [
      "1. Root of velocity: $2t - 4 = 0 \\implies t = 2\\text{ s}$.",
      "2. For $[1, 2]$: $d_1 = |\\int_1^2 (2t - 4) dt| = |[t^2 - 4t]_1^2| = |(4 - 8) - (1 - 4)| = |-4 - (-3)| = 1\\text{ m}$.",
      "3. For $[2, 4]$: $d_2 = \\int_2^4 (2t - 4) dt = [t^2 - 4t]_2^4 = (16 - 16) - (4 - 8) = 0 - (-4) = 4\\text{ m}$.",
      "4. Total distance: $d = 1 + 4 = 5\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. لحظة السكون: $t = 2\\text{ ث} \\in [1, 4]$.",
      "٢. المسافة في $[1, 2]$: $|(-4) - (-3)| = 1\\text{ م}$.",
      "٣. المسافة في $[2, 4]$: $0 - (-4) = 4\\text{ م}$.",
      "٤. المسافة الكلية = $1 + 4 = 5\\text{ م}$."
    ],
    "teacherTipEn": "Always check if the stationary point lies within the given time interval.",
    "teacherTipAr": "تحقق دائماً مما إذا كانت لحظة السكون تقع داخل الفترة الزمنية المطلوبة."
  },
  {
    "id": "dyn_ch1_ex_08",
    "titleEn": "Exercise 8: Vertical Projection Maximum Height",
    "titleAr": "تمرين ٨: أقصى ارتفاع للمقذوف الرأسي",
    "difficulty": "easy",
    "questionEn": "A projectile is launched vertically with velocity $v(t) = 29.4 - 9.8t\\text{ m/s}$. Find the maximum height reached.",
    "questionAr": "قذف جسيم رأسياً لأعلى بسرعة $v(t) = 29.4 - 9.8t\\text{ م/ث}$. أوجد أقصى ارتفاع يبلغه الجسيم.",
    "optionsEn": [
      "$44.1\\text{ m}$",
      "$39.2\\text{ m}$",
      "$58.8\\text{ m}$",
      "$29.4\\text{ m}$"
    ],
    "optionsAr": [
      "$44.1\\text{ م}$",
      "$39.2\\text{ م}$",
      "$58.8\\text{ م}$",
      "$29.4\\text{ م}$"
    ],
    "correctAnswer": "$44.1\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "At maximum height, velocity is zero: $v = 0 \\implies t = 3\\text{ s}$. Then integrate or use $s = \\int_0^3 v dt$.",
    "hintAr": "عند أقصى ارتفاع تنعدم السرعة: $v = 0 \\implies t = 3\\text{ ث}$.",
    "stepByStepSolutionEn": [
      "1. Time to reach maximum height: $29.4 - 9.8t = 0 \\implies t = \\frac{29.4}{9.8} = 3\\text{ s}$.",
      "2. Height: $s = \\int_0^3 (29.4 - 9.8t) dt = [29.4t - 4.9t^2]_0^3 = 29.4(3) - 4.9(9) = 88.2 - 44.1 = 44.1\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. زمن أقصى ارتفاع: $29.4 - 9.8t = 0 \\implies t = 3\\text{ ث}$.",
      "٢. أقصى ارتفاع: $s = [29.4t - 4.9t^2]_0^3 = 88.2 - 44.1 = 44.1\\text{ م}$."
    ],
    "teacherTipEn": "Can also verify with v_0^2 / (2g) = 29.4^2 / (2 * 9.8) = 44.1 m.",
    "teacherTipAr": "يمكن التحقق بالقانون الكلاسيكي: ع₀² ÷ (٢ د) = ٤٤٫١ م."
  },
  {
    "id": "dyn_ch1_ex_09",
    "titleEn": "Exercise 9: Exponential Velocity Acceleration",
    "titleAr": "تمرين ٩: عجلة سرعة أسية",
    "difficulty": "medium",
    "questionEn": "A particle moves such that its velocity is $v = e^{2x}$. Find its acceleration $a$ when $x = 0$.",
    "questionAr": "يتحرك جسيم بحيث كانت سرعته $v = e^{2x}$. أوجد عجلته $a$ عندما $x = 0$.",
    "optionsEn": [
      "$2\\text{ m/s}^2$",
      "$1\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$e^2\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$2\\text{ م/ث}^2$",
      "$1\\text{ م/ث}^2$",
      "$4\\text{ م/ث}^2$",
      "$e^2\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$2\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Acceleration $a = v \\frac{dv}{dx} = e^{2x} \\cdot (2e^{2x}) = 2e^{4x}$.",
    "hintAr": "العجلة $a = v \\frac{dv}{dx} = e^{2x} \\cdot (2e^{2x}) = 2e^{4x}$.",
    "stepByStepSolutionEn": [
      "1. Find derivative: $\\frac{dv}{dx} = 2e^{2x}$.",
      "2. Acceleration: $a = v \\frac{dv}{dx} = (e^{2x})(2e^{2x}) = 2e^{4x}$.",
      "3. At $x = 0$: $a = 2e^0 = 2\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة بالنسبة للموضع: $\\frac{dv}{dx} = 2e^{2x}$.",
      "٢. العجلة: $a = v \\frac{dv}{dx} = 2e^{4x}$.",
      "٣. عند $x = 0$: $a = 2(1) = 2\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "d(v^2)/dx = 2a: (e^{4x})' = 4e^{4x} = 2a => a = 2e^{4x}.",
    "teacherTipAr": "مشتقة ع² بالنسبة لـ س تساوي ٢ جـ."
  },
  {
    "id": "dyn_ch1_ex_10",
    "titleEn": "Exercise 10: Position from Quadratic Acceleration",
    "titleAr": "تمرين ١٠: حساب الموضع من عجلة تربيعية",
    "difficulty": "medium",
    "questionEn": "A particle starts from rest ($v_0 = 0$) at $x = 1\\text{ m}$ with acceleration $a(t) = 12t^2 - 4$. Find its position at $t = 2\\text{ s}$.",
    "questionAr": "بدأ جسيم حركته من السكون ($v_0 = 0$) من الموضع $x = 1\\text{ م}$ بعجلة $a(t) = 12t^2 - 4$. أوجد موقعه عند $t = 2\\text{ ث}$.",
    "optionsEn": [
      "$9\\text{ m}$",
      "$8\\text{ m}$",
      "$11\\text{ m}$",
      "$7\\text{ m}$"
    ],
    "optionsAr": [
      "$9\\text{ م}$",
      "$8\\text{ م}$",
      "$11\\text{ م}$",
      "$7\\text{ م}$"
    ],
    "correctAnswer": "$9\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Integrate twice: $v(t) = 4t^3 - 4t$, then $x(t) = t^4 - 2t^2 + 1$.",
    "hintAr": "كامل مرتين: $v(t) = 4t^3 - 4t$، ثم $x(t) = t^4 - 2t^2 + 1$.",
    "stepByStepSolutionEn": [
      "1. Velocity: $v(t) = \\int (12t^2 - 4) dt = 4t^3 - 4t + v_0 = 4t^3 - 4t$.",
      "2. Position: $x(t) = \\int (4t^3 - 4t) dt = t^4 - 2t^2 + x_0 = t^4 - 2t^2 + 1$.",
      "3. At $t = 2\\text{ s}$:",
      "$$x(2) = (2)^4 - 2(2)^2 + 1 = 16 - 8 + 1 = 9\\text{ m}$$"
    ],
    "stepByStepSolutionAr": [
      "١. السرعة: $v(t) = 4t^3 - 4t$.",
      "٢. الموضع: $x(t) = t^4 - 2t^2 + 1$.",
      "٣. عند $t = 2\\text{ ث}$:",
      "$$x(2) = 16 - 8 + 1 = 9\\text{ م}$$"
    ],
    "teacherTipEn": "Double integration: check constants at each stage.",
    "teacherTipAr": "في التكامل الثنائي تأكد من حساب الثوابت في كل مرحلة."
  },
  {
    "id": "dyn_ch1_ex_11",
    "titleEn": "Exercise 11: Particle Returning to Starting Position",
    "titleAr": "تمرين ١١: عودة الجسيم إلى نقطة البداية",
    "difficulty": "easy",
    "questionEn": "A particle moves with displacement $s(t) = 24t - 3t^2$. After how many seconds does it return to its starting position?",
    "questionAr": "يتحرك جسيم بإزاحة $s(t) = 24t - 3t^2$. بعد كم ثانية يعود الجسيم إلى موضع بدايته؟",
    "optionsEn": [
      "$8\\text{ s}$",
      "$4\\text{ s}$",
      "$6\\text{ s}$",
      "$12\\text{ s}$"
    ],
    "optionsAr": [
      "$8\\text{ ث}$",
      "$4\\text{ ث}$",
      "$6\\text{ ث}$",
      "$12\\text{ ث}$"
    ],
    "correctAnswer": "$8\\text{ s}$",
    "correctIndex": 0,
    "hintEn": "The particle returns to starting position when displacement is zero: $s(t) = 0$.",
    "hintAr": "يعود الجسيم لنقطة البداية عندما تنعدم الإزاحة: $s(t) = 0$.",
    "stepByStepSolutionEn": [
      "1. Set $s(t) = 0$:",
      "$$24t - 3t^2 = 0 \\implies 3t(8 - t) = 0$$",
      "2. The non-zero solution is $t = 8\\text{ s}$."
    ],
    "stepByStepSolutionAr": [
      "١. وضع الإزاحة مساوية للصفر: $3t(8 - t) = 0$.",
      "٢. الحل غير الصفري هو $t = 8\\text{ ث}$."
    ],
    "teacherTipEn": "s(t) = 0 means net displacement is zero, i.e., returned to start.",
    "teacherTipAr": "انعدام الإزاحة يعني العودة لنقطة الانطلاق."
  },
  {
    "id": "dyn_ch1_ex_12",
    "titleEn": "Exercise 12: Motion under Resistive Acceleration a = -2v",
    "titleAr": "تمرين ١٢: الحركة تحت مقاومة جـ = -٢ع",
    "difficulty": "medium",
    "questionEn": "A particle moves with acceleration $a = -2v\\text{ m/s}^2$ with initial velocity $v_0 = 10\\text{ m/s}$. Find its velocity as a function of time $t$.",
    "questionAr": "يتحرك جسيم بعجلة $a = -2v\\text{ م/ث}^2$ وسرعة ابتدائية $v_0 = 10\\text{ م/ث}$. أوجد سرعته كدالة في الزمن $t$.",
    "optionsEn": [
      "$v(t) = 10 e^{-2t}$",
      "$v(t) = 10 - 2t$",
      "$v(t) = 10 e^{2t}$",
      "$v(t) = \\frac{10}{1 + 2t}$"
    ],
    "optionsAr": [
      "$v(t) = 10 e^{-2t}$",
      "$v(t) = 10 - 2t$",
      "$v(t) = 10 e^{2t}$",
      "$v(t) = \\frac{10}{1 + 2t}$"
    ],
    "correctAnswer": "$v(t) = 10 e^{-2t}$",
    "correctIndex": 0,
    "hintEn": "Separate variables: $\\frac{dv}{dt} = -2v \\implies \\frac{dv}{v} = -2 dt$.",
    "hintAr": "افصل المتغيرات: $\\frac{dv}{v} = -2 dt$.",
    "stepByStepSolutionEn": [
      "1. $\\frac{dv}{dt} = -2v \\implies \\int_{10}^v \\frac{1}{v} dv = \\int_0^t -2 dt$.",
      "2. $\\ln\\left(\\frac{v}{10}\\right) = -2t$.",
      "3. $v(t) = 10 e^{-2t}$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\frac{dv}{v} = -2 dt$.",
      "٢. $\\ln(v/10) = -2t$.",
      "٣. إذن $v(t) = 10 e^{-2t}$."
    ],
    "teacherTipEn": "Exponential decay of velocity under linear viscous resistance.",
    "teacherTipAr": "اضمحلال أسي للسرعة تحت مقاومة خطية."
  },
  {
    "id": "dyn_ch1_ex_13",
    "titleEn": "Exercise 13: Inflection Point of Position Curve",
    "titleAr": "تمرين ١٣: نقطة انقلاب منحنى الموضع والزمن",
    "difficulty": "medium",
    "questionEn": "For a particle moving with $x(t) = t^3 - 6t^2 + 12t$, find the time $t$ at which the acceleration is zero.",
    "questionAr": "لجسيم يتحرك بحيث $x(t) = t^3 - 6t^2 + 12t$، أوجد اللحظة الزمنية $t$ التي تنعدم عندها العجلة.",
    "optionsEn": [
      "$t = 2\\text{ s}$",
      "$t = 1\\text{ s}$",
      "$t = 3\\text{ s}$",
      "$t = 4\\text{ s}$"
    ],
    "optionsAr": [
      "$t = 2\\text{ ث}$",
      "$t = 1\\text{ ث}$",
      "$t = 3\\text{ ث}$",
      "$t = 4\\text{ ث}$"
    ],
    "correctAnswer": "$t = 2\\text{ s}$",
    "correctIndex": 0,
    "hintEn": "Acceleration is the second derivative of position: $a(t) = x''(t) = 0$.",
    "hintAr": "العجلة هي المشتقة الثانية للموضع: $a(t) = x''(t) = 0$.",
    "stepByStepSolutionEn": [
      "1. $v(t) = 3t^2 - 12t + 12$.",
      "2. $a(t) = 6t - 12$.",
      "3. $a(t) = 0 \\implies 6t = 12 \\implies t = 2\\text{ s}$."
    ],
    "stepByStepSolutionAr": [
      "١. $v(t) = 3t^2 - 12t + 12$.",
      "٢. $a(t) = 6t - 12$.",
      "٣. $6t - 12 = 0 \\implies t = 2\\text{ ث}$."
    ],
    "teacherTipEn": "An inflection point on the x-t graph corresponds to zero acceleration.",
    "teacherTipAr": "نقطة الانقلاب في منحنى (الموضع - الزمن) تقابل انعدام العجلة."
  },
  {
    "id": "dyn_ch1_ex_14",
    "titleEn": "Exercise 14: Integrating Rational Acceleration a = 1 / (x + 1)",
    "titleAr": "تمرين ١٤: تكامل عجلة كسرية جـ = ١ / (س + ١)",
    "difficulty": "medium",
    "questionEn": "A particle starts from $x = 0$ with $v = 1\\text{ m/s}$ and acceleration $a = \\frac{1}{x + 1}$. Find $v^2$ when $x = e^2 - 1$.",
    "questionAr": "بدأ جسيم حركته من $x = 0$ بسرعة $v = 1\\text{ م/ث}$ وبعجلة $a = \\frac{1}{x + 1}$. أوجد $v^2$ عندما $x = e^2 - 1$.",
    "optionsEn": [
      "$5\\text{ m}^2/\\text{s}^2$",
      "$4\\text{ m}^2/\\text{s}^2$",
      "$3\\text{ m}^2/\\text{s}^2$",
      "$6\\text{ m}^2/\\text{s}^2$"
    ],
    "optionsAr": [
      "$5\\text{ م}^2/\\text{ث}^2$",
      "$4\\text{ م}^2/\\text{ث}^2$",
      "$3\\text{ م}^2/\\text{ث}^2$",
      "$6\\text{ م}^2/\\text{ث}^2$"
    ],
    "correctAnswer": "$5\\text{ m}^2/\\text{s}^2$",
    "correctIndex": 0,
    "hintEn": "Integrate $v dv = \\frac{1}{x+1} dx$. Recall $\\int \\frac{1}{x+1} dx = \\ln(x+1)$.",
    "hintAr": "كامل $v dv = \\frac{1}{x+1} dx$. تذكر أن تكامل $\\frac{1}{x+1}$ هو $\\ln(x+1)$.",
    "stepByStepSolutionEn": [
      "1. $\\int_1^v v dv = \\int_0^{e^2 - 1} \\frac{1}{x+1} dx$.",
      "2. $\\frac{1}{2}(v^2 - 1) = [\\ln(x+1)]_0^{e^2 - 1} = \\ln(e^2) - \\ln(1) = 2 - 0 = 2$.",
      "3. $v^2 - 1 = 4 \\implies v^2 = 5\\text{ m}^2/\\text{s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\int_1^v v dv = \\int_0^{e^2 - 1} \\frac{1}{x+1} dx$.",
      "٢. $\\frac{1}{2}(v^2 - 1) = \\ln(e^2) = 2$.",
      "٣. إذن $v^2 - 1 = 4 \\implies v^2 = 5\\text{ م}^2/\\text{ث}^2$."
    ],
    "teacherTipEn": "Integration connects calculus techniques directly with kinematic dynamics.",
    "teacherTipAr": "التكامل يربط مهارات التفاضل والتكامل بمسائل الديناميكا مباشرة."
  },
  {
    "id": "dyn_ch1_ex_15",
    "titleEn": "Exercise 15: Relative Motion of Two Particles",
    "titleAr": "تمرين ١٥: الحركة النسبية لجسيمين",
    "difficulty": "hots",
    "questionEn": "Two particles $A$ and $B$ move along the same straight line with positions $x_A(t) = 2t^2 + 3$ and $x_B(t) = t^3 - t + 3$. At what time $t > 0$ do they meet?",
    "questionAr": "يتحرك جسيمان $A$ و $B$ على نفس الخط المستقيم بموضعين $x_A(t) = 2t^2 + 3$ و $x_B(t) = t^3 - t + 3$. عند أي لحظة زمنية $t > 0$ يلتقي الجسيمان؟",
    "optionsEn": [
      "$t = 1 + \\sqrt{2}\\text{ s}$",
      "$t = 2\\text{ s}$",
      "$t = 3\\text{ s}$",
      "$t = 1\\text{ s}$"
    ],
    "optionsAr": [
      "$t = 1 + \\sqrt{2}\\text{ ث}$",
      "$t = 2\\text{ ث}$",
      "$t = 3\\text{ ث}$",
      "$t = 1\\text{ ث}$"
    ],
    "correctAnswer": "$t = 1 + \\sqrt{2}\\text{ s}$",
    "correctIndex": 0,
    "hintEn": "Set $x_A(t) = x_B(t) \\implies t^3 - 2t^2 - t = 0$.",
    "hintAr": "ضع $x_A(t) = x_B(t) \\implies t^3 - 2t^2 - t = 0$.",
    "stepByStepSolutionEn": [
      "1. Equal positions: $2t^2 + 3 = t^3 - t + 3$.",
      "2. Simplify: $t^3 - 2t^2 - t = 0 \\implies t(t^2 - 2t - 1) = 0$.",
      "3. Since $t > 0$, solve $t^2 - 2t - 1 = 0$:",
      "$$t = \\frac{2 \\pm \\sqrt{4 - 4(1)(-1)}}{2} = \\frac{2 \\pm \\sqrt{8}}{2} = 1 \\pm \\sqrt{2}$$",
      "4. Since time must be positive, $t = 1 + \\sqrt{2}\\text{ s}$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط اللقاء هو تساوي الموضعين: $2t^2 + 3 = t^3 - t + 3$.",
      "٢. بالتبسيط: $t(t^2 - 2t - 1) = 0$.",
      "٣. لـ $t > 0$ نحل المعادلة التربيعية: $t = 1 + \\sqrt{2}\\text{ ث}$."
    ],
    "teacherTipEn": "Meeting of particles means equal position coordinates x_A = x_B.",
    "teacherTipAr": "لقاء جسيمين يعني تساوي إحداثيات موضعيهما."
  }
];
