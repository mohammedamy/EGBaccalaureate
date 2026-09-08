import type { SolvedProblem } from '../../../types/curriculum';

export const dynCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "dyn_ch2_se_01",
    "titleEn": "MoE Example 1: Change in Linear Momentum of a Rebounding Ball",
    "titleAr": "مثال الوزارة ١: التغير في كمية حركة كرة مرتدة",
    "difficulty": "easy",
    "questionEn": "A rubber ball of mass $m = 200\\text{ g}$ falls vertically and hits the ground at a speed of $4.9\\text{ m/s}$, then rebounds vertically upwards at a speed of $2.1\\text{ m/s}$. Find the magnitude of change in its linear momentum due to the collision.",
    "questionAr": "سقطت كرة من المطاط كتلتها $m = 200\\text{ جم}$ رأسياً واصطدمت بالأرض بسرعة $4.9\\text{ م/ث}$ ثم ارتدت رأسياً لأعلى بسرعة $2.1\\text{ م/ث}$. احسب مقدار التغير في كمية حركة الكرة نتيجة التصادم.",
    "optionsEn": [
      "$1.4\\text{ kg}\\cdot\\text{m/s}$",
      "$0.56\\text{ kg}\\cdot\\text{m/s}$",
      "$1.4\\times 10^5\\text{ g}\\cdot\\text{cm/s}$",
      "$0.7\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "optionsAr": [
      "$1.4\\text{ كجم.م/ث}$",
      "$0.56\\text{ كجم.م/ث}$",
      "$1.4\\times 10^5\\text{ جم.سم/ث}$",
      "$0.7\\text{ كجم.م/ث}$"
    ],
    "correctAnswer": "$1.4\\text{ kg}\\cdot\\text{m/s}$",
    "correctIndex": 0,
    "hintEn": "When a body rebounds, velocities have opposite directions, so $\\Delta H = m(v_2 - (-v_1)) = m(v_2 + v_1)$.",
    "hintAr": "عند ارتداد الجسم تنعكس إشارة السرعة: $\\Delta H = m(v_2 + v_1)$.",
    "stepByStepSolutionEn": [
      "1. Convert mass to SI units: $m = 200\\text{ g} = 0.2\\text{ kg}$.",
      "2. Velocity before collision downwards: $v_1 = -4.9\\text{ m/s}$.",
      "3. Velocity after collision upwards: $v_2 = +2.1\\text{ m/s}$.",
      "4. Change in momentum: $\\Delta H = m(v_2 - v_1) = 0.2(2.1 - (-4.9)) = 0.2(7.0) = 1.4\\text{ kg}\\cdot\\text{m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. تحويل الكتلة إلى كيلوجرام: $m = 0.2\\text{ كجم}$.",
      "٢. سرعة الهبوط لأسفل: $v_1 = -4.9\\text{ م/ث}$. سرعة الارتداد لأعلى: $v_2 = +2.1\\text{ م/ث}$.",
      "٣. التغير في كمية الحركة: $\\Delta H = m(v_2 - v_1) = 0.2(2.1 - (-4.9)) = 0.2(7) = 1.4\\text{ كجم.م/ث}$."
    ],
    "teacherTipEn": "Rebounding means you ADD the speeds: Delta H = m(v1 + v2).",
    "teacherTipAr": "في الارتداد نجمع السرعتين لأن الاتجاه انعكس: دلتا كـ = ك (ع١ + ع٢)."
  },
  {
    "id": "dyn_ch2_se_02",
    "titleEn": "MoE Example 2: Newton's First Law (Resistance Proportional to Square of Velocity)",
    "titleAr": "مثال الوزارة ٢: قانون نيوتن الأول (المقاومة تتناسب مع مربع السرعة)",
    "difficulty": "medium",
    "questionEn": "A car of mass $2\\text{ tonnes}$ moves along a horizontal road at its maximum speed of $90\\text{ km/h}$. If the resistance to motion is proportional to the square of its speed and equals $40\\text{ kg-wt}$ when the speed is $30\\text{ km/h}$, find the engine driving force at maximum speed.",
    "questionAr": "سيارة كتلتها $2\\text{ طن}$ تتحرك على طريق أفقي بأقصى سرعة لها وقدرها $90\\text{ كم/س}$. إذا كانت المقاومة لحركتها تتناسب طردياً مع مربع السرعة، وكانت المقاومة $40\\text{ ث.كجم}$ عندما كانت سرعتها $30\\text{ كم/س}$، أوجد قوة محرك السيارة عند أقصى سرعة.",
    "optionsEn": [
      "$360\\text{ kg-wt}$",
      "$120\\text{ kg-wt}$",
      "$240\\text{ kg-wt}$",
      "$400\\text{ kg-wt}$"
    ],
    "optionsAr": [
      "$360\\text{ ث.كجم}$",
      "$120\\text{ ث.كجم}$",
      "$240\\text{ ث.كجم}$",
      "$400\\text{ ث.كجم}$"
    ],
    "correctAnswer": "$360\\text{ kg-wt}$",
    "correctIndex": 0,
    "hintEn": "At maximum speed, acceleration is zero, so $F = R_{\\max}$. Use the proportionality $\\frac{R_1}{R_2} = \\frac{v_1^2}{v_2^2}$.",
    "hintAr": "عند أقصى سرعة تنعدم العجلة وتكون القوة مساوية لأقصى مقاومة: $F = R_{\\max}$. استخدم التناسب: $\\frac{R_1}{R_2} = \\frac{v_1^2}{v_2^2}$.",
    "stepByStepSolutionEn": [
      "1. By Newton's First Law, at maximum speed acceleration $a = 0$, so driving force $F = R_{\\max}$.",
      "2. Proportionality relation: $\\frac{R_1}{R_{\\max}} = \\left(\\frac{v_1}{v_{\\max}}\\right)^2$.",
      "3. Substitute known values: $\\frac{40}{R_{\\max}} = \\left(\\frac{30}{90}\\right)^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$.",
      "4. Cross-multiply: $R_{\\max} = 40 \\times 9 = 360\\text{ kg-wt}$.",
      "5. Therefore, $F = 360\\text{ kg-wt}$."
    ],
    "stepByStepSolutionAr": [
      "١. من قانون نيوتن الأول: عند أقصى سرعة تكون العجلة $a = 0$، ومنها قوة المحرك $F = R_{\\max}$.",
      "٢. علاقة التناسب مع مربع السرعة: $\\frac{R_1}{R_{\\max}} = (\\frac{v_1}{v_{\\max}})^2$.",
      "٣. بالتعويض: $\\frac{40}{R_{\\max}} = (\\frac{30}{90})^2 = (\\frac{1}{3})^2 = \\frac{1}{9}$.",
      "٤. إذن $R_{\\max} = 40 \\times 9 = 360\\text{ ث.كجم}$.",
      "٥. القوة $F = 360\\text{ ث.كجم}$."
    ],
    "teacherTipEn": "Maximum speed always implies a = 0 and F = R.",
    "teacherTipAr": "أقصى سرعة تعني دائماً انعدام العجلة وتساوي القوة مع المقاومة."
  },
  {
    "id": "dyn_ch2_se_03",
    "titleEn": "MoE Example 3: Newton's Second Law on Horizontal Plane",
    "titleAr": "مثال الوزارة ٣: قانون نيوتن الثاني على مستوى أفقي",
    "difficulty": "easy",
    "questionEn": "A force of magnitude $F = 50\\text{ N}$ pulls a body of mass $m = 8\\text{ kg}$ along a rough horizontal plane against a constant resistance of $10\\text{ N}$. Find the acceleration of the body.",
    "questionAr": "تؤثر قوة مقدارها $F = 50\\text{ نيوتن}$ لتحريك جسم كتلته $m = 8\\text{ كجم}$ على مستوى أفقي ضد مقاومة ثابتة مقدارها $10\\text{ نيوتن}$. أوجد عجلة حركة الجسم.",
    "optionsEn": [
      "$5\\text{ m/s}^2$",
      "$6.25\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$7.5\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$5\\text{ م/ث}^2$",
      "$6.25\\text{ م/ث}^2$",
      "$4\\text{ م/ث}^2$",
      "$7.5\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$5\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Apply Newton's second law: $F - R = m a$.",
    "hintAr": "طبق قانون نيوتن الثاني: $F - R = m a$.",
    "stepByStepSolutionEn": [
      "1. Equation of motion along direction of motion: $F - R = m a$.",
      "2. Substitute values: $50 - 10 = 8 a \\implies 40 = 8 a$.",
      "3. Solve for acceleration: $a = \\frac{40}{8} = 5\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الحركة في اتجاه الحركة: $F - R = m a$.",
      "٢. بالتعويض: $50 - 10 = 8 a \\implies 40 = 8 a$.",
      "٣. إذن العجلة $a = \\frac{40}{8} = 5\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Net force in Newtons divided by mass in kilograms gives acceleration in m/s^2.",
    "teacherTipAr": "المحصلة بالنيوتن مقسومة على الكتلة بالكيلوجرام تعطي العجلة بـ م/ث²."
  },
  {
    "id": "dyn_ch2_se_04",
    "titleEn": "MoE Example 4: Variable Mass Newton's Second Law F = d(mv)/dt",
    "titleAr": "مثال الوزارة ٤: قانون نيوتن الثاني للكتلة المتغيرة ق = د(ك ع)/دن",
    "difficulty": "medium",
    "questionEn": "A raindrop falls vertically through a cloud gathering vapor such that its mass increases with time as $m(t) = 2 + 0.1t\\text{ g}$. If its displacement is $s(t) = 490t^2\\text{ cm}$, find the force acting on the raindrop at $t = 10\\text{ s}$.",
    "questionAr": "تسقط قطرة ماء رأسياً وتتجمع حولها قطرات البخار بحيث تزداد كتلتها مع الزمن بالعلاقة $m(t) = 2 + 0.1t\\text{ جم}$. فإذا كانت إزاحتها $s(t) = 490t^2\\text{ سم}$، أوجد مقدار القوة المؤثرة عليها عند $t = 10\\text{ ث}$.",
    "optionsEn": [
      "$3920\\text{ dynes}$",
      "$2940\\text{ dynes}$",
      "$1960\\text{ dynes}$",
      "$4900\\text{ dynes}$"
    ],
    "optionsAr": [
      "$3920\\text{ داين}$",
      "$2940\\text{ داين}$",
      "$1960\\text{ داين}$",
      "$4900\\text{ داين}$"
    ],
    "correctAnswer": "$3920\\text{ dynes}$",
    "correctIndex": 0,
    "hintEn": "When mass varies with time, use $F = \\frac{d}{dt}(m(t) \\cdot v(t))$, not $F = m a$.",
    "hintAr": "عندما تتغير الكتلة مع الزمن، استخدم الصيغة الأصلية $F = \\frac{d}{dt}(m(t) \\cdot v(t))$.",
    "stepByStepSolutionEn": [
      "1. Velocity: $v(t) = \\frac{ds}{dt} = 980t\\text{ cm/s}$.",
      "2. Momentum: $H(t) = m(t) \\cdot v(t) = (2 + 0.1t)(980t) = 1960t + 98t^2$.",
      "3. Force: $F = \\frac{dH}{dt} = 1960 + 196t$.",
      "4. At $t = 10\\text{ s}$:",
      "$$F = 1960 + 196(10) = 1960 + 1960 = 3920\\text{ dynes}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب السرعة: $v(t) = 980t\\text{ سم/ث}$.",
      "٢. كمية الحركة: $H(t) = (2 + 0.1t)(980t) = 1960t + 98t^2$.",
      "٣. القوة: $F = \\frac{dH}{dt} = 1960 + 196t$.",
      "٤. عند $t = 10\\text{ ث}$:",
      "$$F = 1960 + 1960 = 3920\\text{ داين}$$"
    ],
    "teacherTipEn": "Classic exam trick: when m depends on t, differentiate the product m*v.",
    "teacherTipAr": "خدعة امتحانية شهيرة: عندما تعتمد الكتلة على الزمن يجب اشتقاق حاصل ضرب ك × ع."
  },
  {
    "id": "dyn_ch2_se_05",
    "titleEn": "MoE Example 5: Apparent Weight in an Accelerating Elevator",
    "titleAr": "مثال الوزارة ٥: الوزن الظاهري داخل مصعد متحرك بعجلة",
    "difficulty": "easy",
    "questionEn": "A man of mass $m = 70\\text{ kg}$ stands on a spring balance inside an elevator. If the elevator is ascending vertically with a uniform acceleration of $a = 1.4\\text{ m/s}^2$, find the reading of the balance in kg-wt.",
    "questionAr": "رجل كتلته $m = 70\\text{ كجم}$ يقف على ميزان ضغط داخل مصعد. إذا كان المصعد صاعداً رأسياً بعجلة منتظمة $a = 1.4\\text{ م/ث}^2$، أوجد قراءة الميزان بالثقل كيلوجرام.",
    "optionsEn": [
      "$80\\text{ kg-wt}$",
      "$60\\text{ kg-wt}$",
      "$70\\text{ kg-wt}$",
      "$85\\text{ kg-wt}$"
    ],
    "optionsAr": [
      "$80\\text{ ث.كجم}$",
      "$60\\text{ ث.كجم}$",
      "$70\\text{ ث.كجم}$",
      "$85\\text{ ث.كجم}$"
    ],
    "correctAnswer": "$80\\text{ kg-wt}$",
    "correctIndex": 0,
    "hintEn": "For an ascending elevator with acceleration $a$: $N = m(g + a)$. Divide by $g = 9.8$ to get kg-wt.",
    "hintAr": "لمصعد صاعد بعجلة $a$: رد الفعل $N = m(g + a)$. اقسم على $9.8$ للحصول على ث.كجم.",
    "stepByStepSolutionEn": [
      "1. Equation of motion for ascending elevator: $N - mg = ma \\implies N = m(g + a)$.",
      "2. Calculate $N$ in Newtons: $N = 70(9.8 + 1.4) = 70(11.2) = 784\\text{ N}$.",
      "3. Convert to kg-wt by dividing by $g = 9.8\\text{ m/s}^2$:",
      "$$\\text{Reading} = \\frac{784}{9.8} = 80\\text{ kg-wt}$$"
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الحركة لمصعد صاعد بعجلة: $N - mg = ma \\implies N = m(g + a)$.",
      "٢. حساب رد الفعل بالنيوتن: $N = 70(9.8 + 1.4) = 70(11.2) = 784\\text{ نيوتن}$.",
      "٣. التحويل إلى ث.كجم بالقسمة على $9.8$:",
      "$$\\text{قراءة الميزان} = \\frac{784}{9.8} = 80\\text{ ث.كجم}$$"
    ],
    "teacherTipEn": "Ascending with acceleration: apparent weight > real weight (feels heavier).",
    "teacherTipAr": "المصعد الصاعد بعجلة تزيد فيه قراءة الميزان عن الوزن الحقيقي (يشعر الراكب بزيادة وزنه)."
  },
  {
    "id": "dyn_ch2_se_06",
    "titleEn": "MoE Example 6: Apparent Weight in a Descending Elevator",
    "titleAr": "مثال الوزارة ٦: الوزن الظاهري داخل مصعد هابط بعجلة",
    "difficulty": "easy",
    "questionEn": "A body of mass $m = 60\\text{ kg}$ is suspended from a spring scale fixed in the ceiling of an elevator descending with acceleration $a = 1.96\\text{ m/s}^2$. Find the reading of the scale in kg-wt.",
    "questionAr": "عُلق جسم كتلته $m = 60\\text{ كجم}$ في ميزان زنبركي مثبت في سقف مصعد يهبط لأسفل بعجلة $a = 1.96\\text{ م/ث}^2$. أوجد قراءة الميزان بالثقل كيلوجرام.",
    "optionsEn": [
      "$48\\text{ kg-wt}$",
      "$52\\text{ kg-wt}$",
      "$72\\text{ kg-wt}$",
      "$60\\text{ kg-wt}$"
    ],
    "optionsAr": [
      "$48\\text{ ث.كجم}$",
      "$52\\text{ ث.كجم}$",
      "$72\\text{ ث.كجم}$",
      "$60\\text{ ث.كجم}$"
    ],
    "correctAnswer": "$48\\text{ kg-wt}$",
    "correctIndex": 0,
    "hintEn": "For descending elevator: $T = m(g - a)$. Divide by $g = 9.8$ to get kg-wt.",
    "hintAr": "لمصعد هابط بعجلة: الشد $T = m(g - a)$. اقسم على $9.8$ للحصول على ث.كجم.",
    "stepByStepSolutionEn": [
      "1. Equation of motion for descending elevator: $mg - T = ma \\implies T = m(g - a)$.",
      "2. Calculate in Newtons: $T = 60(9.8 - 1.96) = 60(7.84) = 470.4\\text{ N}$.",
      "3. Divide by $9.8$: $\\text{Reading} = \\frac{470.4}{9.8} = 48\\text{ kg-wt}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الحركة لمصعد هابط: $mg - T = ma \\implies T = m(g - a)$.",
      "٢. بالنيوتن: $T = 60(9.8 - 1.96) = 60(7.84) = 470.4\\text{ نيوتن}$.",
      "٣. بالقسمة على $9.8$: $\\text{القراءة} = 48\\text{ ث.كجم}$."
    ],
    "teacherTipEn": "Descending with acceleration: apparent weight < real weight (feels lighter).",
    "teacherTipAr": "المصعد الهابط بعجلة ينقص فيه الوزن الظاهري عن الحقيقي."
  },
  {
    "id": "dyn_ch2_se_07",
    "titleEn": "MoE Example 7: Vertical Smooth Pulley System (Atwood Machine)",
    "titleAr": "مثال الوزارة ٧: حركة جسمين يتدليان رأسياً حول بكرة ملساء (آلة أتوود)",
    "difficulty": "medium",
    "questionEn": "Two bodies of masses $m_1 = 5\\text{ kg}$ and $m_2 = 3\\text{ kg}$ are connected by a light inextensible string passing over a small smooth pulley. If the system is released from rest, find the acceleration of the system (take $g = 9.8\\text{ m/s}^2$).",
    "questionAr": "ربط جسمان كتلتاهما $m_1 = 5\\text{ كجم}$ و $m_2 = 3\\text{ كجم}$ في طرفي خيط خفيف غير مرن يمر على بكرة ملساء. إذا بدأت المجموعة حركتها من السكون، أوجد عجلة حركة المجموعة (اعتبر $g = 9.8\\text{ م/ث}^2$).",
    "optionsEn": [
      "$2.45\\text{ m/s}^2$",
      "$4.9\\text{ m/s}^2$",
      "$1.225\\text{ m/s}^2$",
      "$3.675\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$2.45\\text{ م/ث}^2$",
      "$4.9\\text{ م/ث}^2$",
      "$1.225\\text{ م/ث}^2$",
      "$3.675\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$2.45\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Acceleration formula for two vertical hanging masses: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$.",
    "hintAr": "قانون العجلة لجسمين متدليين رأسياً: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$.",
    "stepByStepSolutionEn": [
      "1. Equation for heavier mass ($5\\text{ kg}$ moving down): $5g - T = 5a$.",
      "2. Equation for lighter mass ($3\\text{ kg}$ moving up): $T - 3g = 3a$.",
      "3. Add the two equations: $(5 - 3)g = (5 + 3)a \\implies 2g = 8a$.",
      "4. Acceleration: $a = \\frac{2}{8}g = \\frac{1}{4}(9.8) = 2.45\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة حركة الكتلة الكبرى (هابطة): $5g - T = 5a$.",
      "٢. معادلة حركة الكتلة الصغرى (صاعدة): $T - 3g = 3a$.",
      "٣. بجمع المعادلتين: $2g = 8a$.",
      "٤. إذن العجلة $a = \\frac{2}{8} \\times 9.8 = 2.45\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "a = (m1 - m2)g / (m1 + m2) is the standard Atwood acceleration formula.",
    "teacherTipAr": "قانون آلة أتوود: جـ = (ك١ - ك٢) د ÷ (ك١ + ك٢)."
  },
  {
    "id": "dyn_ch2_se_08",
    "titleEn": "MoE Example 8: Pressure on Pulley in Vertical System",
    "titleAr": "مثال الوزارة ٨: الضغط على محور البكرة في النظام الرأسي",
    "difficulty": "easy",
    "questionEn": "In an Atwood machine with two hanging masses, the tension in the string is $T = 36.75\\text{ N}$. Find the pressure on the pulley axle.",
    "questionAr": "في نظام بكرة ملساء يتدلى منها ثقلان رأسياً، كان الشد في الخيط $T = 36.75\\text{ نيوتن}$. أوجد مقدار الضغط الواقع على محور البكرة.",
    "optionsEn": [
      "$73.5\\text{ N}$",
      "$36.75\\text{ N}$",
      "$51.97\\text{ N}$",
      "$147.0\\text{ N}$"
    ],
    "optionsAr": [
      "$73.5\\text{ نيوتن}$",
      "$36.75\\text{ نيوتن}$",
      "$51.97\\text{ نيوتن}$",
      "$147.0\\text{ نيوتن}$"
    ],
    "correctAnswer": "$73.5\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a vertical pulley with both strings hanging vertically, pressure is $P = 2T$.",
    "hintAr": "لبكرة ملساء يتدلى فرعا خيطها رأسياً، الضغط على المحور هو $P = 2T$.",
    "stepByStepSolutionEn": [
      "1. Both segments of the string are vertical and parallel.",
      "2. The pressure on the pulley is the resultant of the two downward tensions:",
      "$$P = T + T = 2T$$",
      "3. Calculate: $P = 2(36.75) = 73.5\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. فرعا الخيط متوازيان ورأسيان لأسفل.",
      "٢. محصلة قوى الشد على البكرة: $P = 2T$.",
      "٣. الحساب: $P = 2 \\times 36.75 = 73.5\\text{ نيوتن}$."
    ],
    "teacherTipEn": "P = 2T for vertical pulley, but P = sqrt(2)*T for horizontal table pulley!",
    "teacherTipAr": "الضغط = ٢ ش للبكرة الرأسية، ولكن = جذر(٢) ش للبكرة على مستوى أفقي!"
  },
  {
    "id": "dyn_ch2_se_09",
    "titleEn": "MoE Example 9: Pulley on Smooth Horizontal Plane",
    "titleAr": "مثال الوزارة ٩: بكرة على مستوى أفقي أملس",
    "difficulty": "medium",
    "questionEn": "A body of mass $m_1 = 3\\text{ kg}$ rests on a smooth horizontal table and is attached to a light string passing over a smooth pulley at the edge of the table, carrying a hanging mass $m_2 = 1\\text{ kg}$. Find the acceleration of the system (take $g = 9.8\\text{ m/s}^2$).",
    "questionAr": "وضع جسم كتلته $m_1 = 3\\text{ كجم}$ على نضد أفقي أملس وربط بخيط يمر على بكرة ملساء عند حافة النضد ويتدلى منه ثقل $m_2 = 1\\text{ كجم}$. أوجد عجلة حركة المجموعة (اعتبر $g = 9.8\\text{ م/ث}^2$).",
    "optionsEn": [
      "$2.45\\text{ m/s}^2$",
      "$3.27\\text{ m/s}^2$",
      "$4.9\\text{ m/s}^2$",
      "$1.63\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$2.45\\text{ م/ث}^2$",
      "$3.27\\text{ م/ث}^2$",
      "$4.9\\text{ م/ث}^2$",
      "$1.63\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$2.45\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Acceleration formula: $a = \\frac{m_{\\text{hanging}}}{m_1 + m_2} g = \\frac{1}{3 + 1} g$.",
    "hintAr": "قانون العجلة للمستوى الأملس: $a = \\frac{m_2}{m_1 + m_2} g = \\frac{1}{3 + 1} g$.",
    "stepByStepSolutionEn": [
      "1. Horizontal body ($3\\text{ kg}$ on smooth table): $T = 3a$.",
      "2. Hanging body ($1\\text{ kg}$ vertical): $1g - T = 1a$.",
      "3. Add equations: $1g = (3 + 1)a = 4a$.",
      "4. Acceleration: $a = \\frac{g}{4} = \\frac{9.8}{4} = 2.45\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة حركة الجسم الأفقي: $T = 3a$.",
      "٢. معادلة حركة الجسم الرأسي المتدلي: $1g - T = 1a$.",
      "٣. بجمع المعادلتين: $1g = 4a$.",
      "٤. إذن العجلة $a = \\frac{9.8}{4} = 2.45\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Notice only the hanging mass causes acceleration in a smooth horizontal table system.",
    "teacherTipAr": "الكتلة المتدلية وحدها هي القوة المحركة في حالة المستوى الأفقي الأملس."
  },
  {
    "id": "dyn_ch2_se_10",
    "titleEn": "MoE Example 10: Cut String Kinematics in Pulley System",
    "titleAr": "مثال الوزارة ١٠: حركة الأجسام بعد انقطاع الخيط في نظام البكرة",
    "difficulty": "hots",
    "questionEn": "In an Atwood machine with two masses $5\\text{ kg}$ and $3\\text{ kg}$, the system starts from rest and moves for $2\\text{ seconds}$ (with $a = 2.45\\text{ m/s}^2$), at which instant the string is cut. How far will the lighter mass ($3\\text{ kg}$) continue to rise before coming to instantaneous rest? (Take $g = 9.8\\text{ m/s}^2$).",
    "questionAr": "في نظام بكرة ملساء يتدلى منه ثقلان $5\\text{ كجم}$ و $3\\text{ كجم}$، بدأت المجموعة من السكون وتحركت لمدة ثانيتين (بعجلة $a = 2.45\\text{ م/ث}^2$)، وعند هذه اللحظة قُطع الخيط. ما هي المسافة التي يواصل الجسم الأخف صعودها لأعلى بعد قطع الخيط حتى يسكن لحظياً؟",
    "optionsEn": [
      "$1.225\\text{ m}$",
      "$2.45\\text{ m}$",
      "$4.9\\text{ m}$",
      "$0.6125\\text{ m}$"
    ],
    "optionsAr": [
      "$1.225\\text{ م}$",
      "$2.45\\text{ م}$",
      "$4.9\\text{ م}$",
      "$0.6125\\text{ م}$"
    ],
    "correctAnswer": "$1.225\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Find speed at the moment string is cut ($v = a t$), then use free vertical projection under gravity: $s = \\frac{v^2}{2g}$.",
    "hintAr": "احسب السرعة لحظة قطع الخيط ($v = a t$)، ثم استخدم قانون المقذوف الرأسي الحر تحت الجاذبية: $s = \\frac{v^2}{2g}$.",
    "stepByStepSolutionEn": [
      "1. Speed acquired after $2\\text{ s}$: $v_1 = a t = 2.45 \\times 2 = 4.9\\text{ m/s}$ (directed upwards).",
      "2. After the string is cut, the tension vanishes and the body moves freely upwards under gravity ($a = -g = -9.8\\text{ m/s}^2$).",
      "3. Use kinematic relation $v^2 = v_1^2 - 2gs$ with final speed $v = 0$:",
      "$$0 = (4.9)^2 - 2(9.8)s \\implies 19.6s = 24.01$$",
      "4. Solve for additional height: $s = \\frac{24.01}{19.6} = 1.225\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. السرعة المكتسبة لحظة انقطاع الخيط: $v_1 = a t = 2.45 \\times 2 = 4.9\\text{ م/ث}$ متجهة لأعلى.",
      "٢. بعد قطع الخيط ينعدم الشد ويتحرك الجسم حراً لأعلى تحت الجاذبية ($g = 9.8\\text{ م/ث}^2$).",
      "٣. قانون الحركة: $0 = v_1^2 - 2gs \\implies s = \\frac{(4.9)^2}{2 \\times 9.8}$.",
      "٤. إذن أقصى ارتفاع إضافي: $s = \\frac{4.9}{4} = 1.225\\text{ م}$."
    ],
    "teacherTipEn": "When a string breaks, bodies keep moving with their current velocity under gravity!",
    "teacherTipAr": "عند قطع الخيط لا يتوقف الجسم فجأة، بل يواصل الحركة بالقصور الذاتي تحت الجاذبية."
  }
];

export const dynCh2Exercises: SolvedProblem[] = [
  {
    "id": "dyn_ch2_ex_01",
    "titleEn": "Exercise 1: Linear Momentum of a Bullet",
    "titleAr": "تمرين ١: كمية حركة رصاصة",
    "difficulty": "easy",
    "questionEn": "A bullet of mass $m = 20\\text{ g}$ is fired at a speed of $600\\text{ m/s}$. Find the magnitude of its linear momentum in SI units.",
    "questionAr": "أطلقت رصاصة كتلتها $m = 20\\text{ جم}$ بسرعة $600\\text{ م/ث}$. أوجد مقدار كمية حركتها بالوحدات الدولية.",
    "optionsEn": [
      "$12\\text{ kg}\\cdot\\text{m/s}$",
      "$12000\\text{ kg}\\cdot\\text{m/s}$",
      "$120\\text{ kg}\\cdot\\text{m/s}$",
      "$1.2\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "optionsAr": [
      "$12\\text{ كجم.م/ث}$",
      "$12000\\text{ كجم.م/ث}$",
      "$120\\text{ كجم.م/ث}$",
      "$1.2\\text{ كجم.م/ث}$"
    ],
    "correctAnswer": "$12\\text{ kg}\\cdot\\text{m/s}$",
    "correctIndex": 0,
    "hintEn": "Convert mass to kilograms ($m = 0.02\\text{ kg}$), then $H = mv$.",
    "hintAr": "حول الكتلة إلى كجم ($m = 0.02\\text{ كجم}$) ثم $H = mv$.",
    "stepByStepSolutionEn": [
      "1. $m = 20\\text{ g} = 0.02\\text{ kg}$.",
      "2. $H = m v = 0.02 \\times 600 = 12\\text{ kg}\\cdot\\text{m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. تحويل الكتلة: $m = 0.02\\text{ كجم}$.",
      "٢. كمية الحركة: $H = 0.02 \\times 600 = 12\\text{ كجم.م/ث}$."
    ],
    "teacherTipEn": "Always ensure mass is in kilograms for SI momentum units.",
    "teacherTipAr": "تأكد دائماً أن الكتلة بالكيلوجرام للحصول على وحدة كمية الحركة الدولية."
  },
  {
    "id": "dyn_ch2_ex_02",
    "titleEn": "Exercise 2: Newton's First Law Constant Speed Train",
    "titleAr": "تمرين ٢: قانون نيوتن الأول لقطار يتحرك بسرعة منتظمة",
    "difficulty": "easy",
    "questionEn": "A train moves on a horizontal track at a uniform speed under an engine tractive force of $4\\text{ tonnes-wt}$. What is the total resistance to motion?",
    "questionAr": "يتحرك قطار على خط أفقي بسرعة منتظمة تحت تأثير قوة جر من محركه قدرها $4\\text{ طن.ث}$. ما مقدار المقاومة الكلية للحركة؟",
    "optionsEn": [
      "$4\\text{ tonnes-wt}$",
      "$2\\text{ tonnes-wt}$",
      "$8\\text{ tonnes-wt}$",
      "$39.2\\text{ tonnes-wt}$"
    ],
    "optionsAr": [
      "$4\\text{ طن.ث}$",
      "$2\\text{ طن.ث}$",
      "$8\\text{ طن.ث}$",
      "$39.2\\text{ طن.ث}$"
    ],
    "correctAnswer": "$4\\text{ tonnes-wt}$",
    "correctIndex": 0,
    "hintEn": "By Newton's First Law, uniform speed means $a = 0 \\implies F = R$.",
    "hintAr": "وفق قانون نيوتن الأول: السرعة المنتظمة تعني انعدام العجلة وبالتالي $F = R$.",
    "stepByStepSolutionEn": [
      "1. Uniform speed implies acceleration $a = 0$.",
      "2. Equilibrium equation: $F - R = 0 \\implies R = F = 4\\text{ tonnes-wt}$."
    ],
    "stepByStepSolutionAr": [
      "١. السرعة المنتظمة تعني أن العجلة $a = 0$.",
      "٢. معادلة الاتزان: $F = R = 4\\text{ طن.ث}$."
    ],
    "teacherTipEn": "Uniform speed implies dynamic equilibrium: sum of forces = 0.",
    "teacherTipAr": "السرعة المنتظمة تعني اتزاناً ديناميكياً: القوة تساوي المقاومة."
  },
  {
    "id": "dyn_ch2_ex_03",
    "titleEn": "Exercise 3: Newton's Second Law Net Force F = ma",
    "titleAr": "تمرين ٣: قانون نيوتن الثاني وحساب القوة",
    "difficulty": "easy",
    "questionEn": "A force acts on a body of mass $m = 500\\text{ kg}$, accelerating it uniformly from rest to $18\\text{ km/h}$ in $5\\text{ seconds}$. Find the magnitude of the force in Newtons.",
    "questionAr": "أثرت قوة على جسم كتلته $m = 500\\text{ كجم}$ فحركته بعجلة منتظمة من السكون لتصل سرعته إلى $18\\text{ كم/س}$ في $5\\text{ ثوانٍ}$. أوجد مقدار القوة بالنيوتن.",
    "optionsEn": [
      "$500\\text{ N}$",
      "$250\\text{ N}$",
      "$1000\\text{ N}$",
      "$1800\\text{ N}$"
    ],
    "optionsAr": [
      "$500\\text{ نيوتن}$",
      "$250\\text{ نيوتن}$",
      "$1000\\text{ نيوتن}$",
      "$1800\\text{ نيوتن}$"
    ],
    "correctAnswer": "$500\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Convert speed to m/s: $18 \\times \\frac{5}{18} = 5\\text{ m/s}$. Find $a = \\frac{v}{t} = 1\\text{ m/s}^2$, then $F = ma$.",
    "hintAr": "حول السرعة إلى م/ث: $18 \\times \\frac{5}{18} = 5\\text{ م/ث}$. ثم $a = 1\\text{ م/ث}^2$ والقوة $F = ma$.",
    "stepByStepSolutionEn": [
      "1. Speed in m/s: $v = 18 \\times \\frac{5}{18} = 5\\text{ m/s}$.",
      "2. Acceleration: $a = \\frac{v - v_0}{t} = \\frac{5 - 0}{5} = 1\\text{ m/s}^2$.",
      "3. Force: $F = m a = 500 \\times 1 = 500\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. تحويل السرعة: $v = 18 \\times \\frac{5}{18} = 5\\text{ م/ث}$.",
      "٢. العجلة: $a = \\frac{5}{5} = 1\\text{ م/ث}^2$.",
      "٣. القوة: $F = 500 \\times 1 = 500\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Multiply by 5/18 to convert km/h to m/s.",
    "teacherTipAr": "اضرب في ٥/١٨ للتحويل من كم/س إلى م/ث."
  },
  {
    "id": "dyn_ch2_ex_04",
    "titleEn": "Exercise 4: Apparent Weight Equal to Real Weight",
    "titleAr": "تمرين ٤: تساوي الوزن الظاهري مع الحقيقي",
    "difficulty": "easy",
    "questionEn": "Under which condition does the reading of a spring balance in an elevator equal the real weight of a body?",
    "questionAr": "في أي حالة من الحالات التالية تساوي قراءة الميزان داخل المصعد الوزن الحقيقي للجسم؟",
    "optionsEn": [
      "Elevator moving with uniform velocity",
      "Elevator ascending with acceleration a",
      "Elevator descending with acceleration a",
      "Elevator in free fall"
    ],
    "optionsAr": [
      "المصعد يتحرك بسرعة منتظمة",
      "المصعد صاعد بعجلة منتظمة",
      "المصعد هابط بعجلة منتظمة",
      "المصعد في حالة سقوط حر"
    ],
    "correctAnswer": "Elevator moving with uniform velocity",
    "correctIndex": 0,
    "hintEn": "Apparent weight equals real weight when acceleration is zero ($a = 0$).",
    "hintAr": "يتساوى الوزن الظاهري مع الحقيقي عندما تنعدم العجلة ($a = 0$).",
    "stepByStepSolutionEn": [
      "1. Balance reading is $N = m(g \\pm a)$.",
      "2. When moving at uniform velocity or at rest, $a = 0$, so $N = mg$ (real weight)."
    ],
    "stepByStepSolutionAr": [
      "١. قراءة الميزان: $N = m(g \\pm a)$.",
      "٢. عند الحركة بسرعة منتظمة تكون $a = 0$ وبالتالي $N = mg$."
    ],
    "teacherTipEn": "Uniform velocity means zero acceleration: N = mg.",
    "teacherTipAr": "السرعة المنتظمة تعني انعدام العجلة وتساوي القراءة مع الوزن الحقيقي."
  },
  {
    "id": "dyn_ch2_ex_05",
    "titleEn": "Exercise 5: Free Fall Apparent Weightlessness",
    "titleAr": "تمرين ٥: انعدام الوزن الظاهري في السقوط الحر",
    "difficulty": "easy",
    "questionEn": "If the cable of an elevator snaps and it falls freely under gravity, what will the reading of a spring balance inside the elevator be?",
    "questionAr": "إذا انقطع كابل مصعد وهبط سقوطاً حراً تحت تأثير الجاذبية، فماذا تكون قراءة ميزان الضغط داخل المصعد؟",
    "optionsEn": [
      "$0$",
      "$mg$",
      "$2mg$",
      "$\\frac{1}{2}mg$"
    ],
    "optionsAr": [
      "$0$",
      "$mg$",
      "$2mg$",
      "$\\frac{1}{2}mg$"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "In free fall, the elevator descends with acceleration $a = g$, so $N = m(g - g) = 0$.",
    "hintAr": "في السقوط الحر يهبط المصعد بعجلة $a = g$، ومنها $N = m(g - g) = 0$.",
    "stepByStepSolutionEn": [
      "1. For descending elevator: $N = m(g - a)$.",
      "2. In free fall: $a = g$.",
      "3. $N = m(g - g) = 0\\text{ (apparent weightlessness)}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون المصعد الهابط: $N = m(g - a)$.",
      "٢. في السقوط الحر: $a = g$.",
      "٣. إذن $N = m(g - g) = 0$ (انعدام تام للوزن الظاهري)."
    ],
    "teacherTipEn": "Free fall creates apparent weightlessness.",
    "teacherTipAr": "السقوط الحر يولد انعداماً تاماً للوزن الظاهري."
  },
  {
    "id": "dyn_ch2_ex_06",
    "titleEn": "Exercise 6: Resistance on an Inclined Plane",
    "titleAr": "تمرين ٦: حركة جسم على مستوى مائل بعجلة منتظمة",
    "difficulty": "medium",
    "questionEn": "A car of mass $1\\text{ tonne}$ moves up a plane inclined at $\\sin\\theta = \\frac{1}{10}$ with a uniform acceleration of $0.2\\text{ m/s}^2$. If the engine force is $1400\\text{ N}$, find the resistance to motion (take $g = 9.8\\text{ m/s}^2$).",
    "questionAr": "سيارة كتلتها $1\\text{ طن}$ تصعد مستوى يميل على الأفقي بزاوية جيبها $\\sin\\theta = \\frac{1}{10}$ بعجلة منتظمة $0.2\\text{ م/ث}^2$. إذا كانت قوة المحرك $1400\\text{ نيوتن}$، أوجد مقدار المقاومة (اعتبر $g = 9.8\\text{ م/ث}^2$).",
    "optionsEn": [
      "$220\\text{ N}$",
      "$420\\text{ N}$",
      "$120\\text{ N}$",
      "$320\\text{ N}$"
    ],
    "optionsAr": [
      "$220\\text{ نيوتن}$",
      "$420\\text{ نيوتن}$",
      "$120\\text{ نيوتن}$",
      "$320\\text{ نيوتن}$"
    ],
    "correctAnswer": "$220\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Equation of ascending motion: $F - (mg\\sin\\theta + R) = ma$.",
    "hintAr": "معادلة الصعود لأعلى المستوى: $F - (mg\\sin\\theta + R) = ma$.",
    "stepByStepSolutionEn": [
      "1. $m = 1000\\text{ kg}$. Weight component down plane: $mg\\sin\\theta = 1000 \\times 9.8 \\times 0.1 = 980\\text{ N}$.",
      "2. Equation: $F - mg\\sin\\theta - R = ma$.",
      "3. $1400 - 980 - R = 1000(0.2) = 200$.",
      "4. $420 - R = 200 \\implies R = 220\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة الوزن لأسفل: $mg\\sin\\theta = 1000 \\times 9.8 \\times 0.1 = 980\\text{ نيوتن}$.",
      "٢. معادلة الحركة: $1400 - 980 - R = 1000 \\times 0.2 = 200$.",
      "٣. إذن المقاومة: $R = 420 - 200 = 220\\text{ نيوتن}$."
    ],
    "teacherTipEn": "When moving up an inclined plane, both gravity component and resistance oppose the motion.",
    "teacherTipAr": "عند الصعود لأعلى المستوى تعمل كل من مركبة الوزن والمقاومة ضد اتجاه الحركة."
  },
  {
    "id": "dyn_ch2_ex_07",
    "titleEn": "Exercise 7: Atwood Machine Equal Masses",
    "titleAr": "تمرين ٧: آلة أتوود بكتلتين متساويتين",
    "difficulty": "easy",
    "questionEn": "If two equal masses $m_1 = m_2 = 4\\text{ kg}$ are connected by a light string over a smooth pulley, what is the acceleration of the system?",
    "questionAr": "إذا علقت كتلتان متساويتان $m_1 = m_2 = 4\\text{ كجم}$ في طرفي خيط خفيف حول بكرة ملساء، فما هي عجلة حركة المجموعة؟",
    "optionsEn": [
      "$0$",
      "$9.8\\text{ m/s}^2$",
      "$4.9\\text{ m/s}^2$",
      "$19.6\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$0$",
      "$9.8\\text{ م/ث}^2$",
      "$4.9\\text{ م/ث}^2$",
      "$19.6\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "$a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{4 - 4}{8} g = 0$.",
    "hintAr": "$a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{4 - 4}{8} g = 0$.",
    "stepByStepSolutionEn": [
      "1. Equal masses balance each other: $m_1 - m_2 = 0$.",
      "2. Acceleration $a = \\frac{0}{8} g = 0\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. الكتلتان متساويتان: $m_1 - m_2 = 0$.",
      "٢. إذن العجلة تنعدم: $a = 0$."
    ],
    "teacherTipEn": "Equal masses are in static equilibrium or move at constant speed.",
    "teacherTipAr": "الكتل المتساوية تكون في حالة اتزان أو حركة بسرعة منتظمة."
  },
  {
    "id": "dyn_ch2_ex_08",
    "titleEn": "Exercise 8: Tension in Horizontal Pulley System",
    "titleAr": "تمرين ٨: الشد في خيط بكرة على طاولة أفقية",
    "difficulty": "medium",
    "questionEn": "A mass of $2\\text{ kg}$ on a smooth horizontal table is connected to a hanging mass of $3\\text{ kg}$. Find the tension in the string (take $g = 9.8\\text{ m/s}^2$).",
    "questionAr": "كتلة مقدارها $2\\text{ كجم}$ موضوعة على نضد أفقي أملس مربوطة بكتلة متدلية رأسياً مقدارها $3\\text{ كجم}$. أوجد مقدار الشد في الخيط (اعتبر $g = 9.8\\text{ م/ث}^2$).",
    "optionsEn": [
      "$11.76\\text{ N}$",
      "$29.4\\text{ N}$",
      "$19.6\\text{ N}$",
      "$14.7\\text{ N}$"
    ],
    "optionsAr": [
      "$11.76\\text{ نيوتن}$",
      "$29.4\\text{ نيوتن}$",
      "$19.6\\text{ نيوتن}$",
      "$14.7\\text{ نيوتن}$"
    ],
    "correctAnswer": "$11.76\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "First find $a = \\frac{3}{2 + 3} g = \\frac{3}{5}(9.8) = 5.88\\text{ m/s}^2$. Then $T = m_1 a = 2 \\times 5.88$.",
    "hintAr": "احسب العجلة أولاً: $a = \\frac{3}{5} \\times 9.8 = 5.88\\text{ م/ث}^2$. ثم الشد $T = 2 \\times 5.88$.",
    "stepByStepSolutionEn": [
      "1. System acceleration: $a = \\frac{m_2}{m_1 + m_2} g = \\frac{3}{5}(9.8) = 5.88\\text{ m/s}^2$.",
      "2. For horizontal body: $T = m_1 a = 2 \\times 5.88 = 11.76\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. عجلة المجموعة: $a = \\frac{3}{5} \\times 9.8 = 5.88\\text{ م/ث}^2$.",
      "٢. الشد في الخيط: $T = 2 \\times 5.88 = 11.76\\text{ نيوتن}$."
    ],
    "teacherTipEn": "T = (m1 * m2 / (m1 + m2)) * g for smooth table.",
    "teacherTipAr": "الشد = (ك١ × ك٢ ÷ (ك١ + ك٢)) × د للنضد الأملس."
  },
  {
    "id": "dyn_ch2_ex_09",
    "titleEn": "Exercise 9: Pressure on Pulley on Horizontal Table",
    "titleAr": "تمرين ٩: الضغط على محور بكرة عند حافة نضد أفقي",
    "difficulty": "medium",
    "questionEn": "If the tension in the string passing over a smooth pulley at the edge of a horizontal table is $T = 10\\sqrt{2}\\text{ N}$, find the pressure on the pulley axle.",
    "questionAr": "إذا كان الشد في خيط يمر على بكرة ملساء عند حافة نضد أفقي يساوي $T = 10\\sqrt{2}\\text{ نيوتن}$، فما مقدار الضغط على محور البكرة؟",
    "optionsEn": [
      "$20\\text{ N}$",
      "$10\\sqrt{2}\\text{ N}$",
      "$20\\sqrt{2}\\text{ N}$",
      "$10\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\text{ نيوتن}$",
      "$10\\sqrt{2}\\text{ نيوتن}$",
      "$20\\sqrt{2}\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For perpendicular strings (horizontal and vertical), $P = \\sqrt{T^2 + T^2} = \\sqrt{2} T$.",
    "hintAr": "لخيطين متعامدين، الضغط على البكرة هو $P = \\sqrt{2} T$.",
    "stepByStepSolutionEn": [
      "1. The two branches of the string are perpendicular ($90^\\circ$).",
      "2. Resultant pressure: $P = \\sqrt{T^2 + T^2} = \\sqrt{2} T$.",
      "3. $P = \\sqrt{2}(10\\sqrt{2}) = 10 \\times 2 = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. فرعا الخيط متعامدان ($90^\\circ$).",
      "٢. محصلة الشدين: $P = \\sqrt{2} T$.",
      "٣. الحساب: $P = \\sqrt{2} \\times 10\\sqrt{2} = 20\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Perpendicular tension forces give P = sqrt(2) * T.",
    "teacherTipAr": "قوتا الشد المتعامدتان محصلتهما تساوي جذر(٢) × الشد."
  },
  {
    "id": "dyn_ch2_ex_10",
    "titleEn": "Exercise 10: Momentum Change during Reflection",
    "titleAr": "تمرين ١٠: التغير في كمية الحركة لجسم يرتد أفقياً من حائط",
    "difficulty": "easy",
    "questionEn": "A ball of mass $m = 0.5\\text{ kg}$ hits a vertical wall horizontally at $10\\text{ m/s}$ and rebounds horizontally at $8\\text{ m/s}$. Find the change in its momentum.",
    "questionAr": "كرة كتلتها $m = 0.5\\text{ كجم}$ تصطدم بحائط رأسي أفقياً بسرعة $10\\text{ م/ث}$ وترتد أفقياً بسرعة $8\\text{ م/ث}$. أوجد مقدار التغير في كمية حركتها.",
    "optionsEn": [
      "$9\\text{ kg}\\cdot\\text{m/s}$",
      "$1\\text{ kg}\\cdot\\text{m/s}$",
      "$18\\text{ kg}\\cdot\\text{m/s}$",
      "$4.5\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "optionsAr": [
      "$9\\text{ كجم.م/ث}$",
      "$1\\text{ كجم.م/ث}$",
      "$18\\text{ كجم.م/ث}$",
      "$4.5\\text{ كجم.م/ث}$"
    ],
    "correctAnswer": "$9\\text{ kg}\\cdot\\text{m/s}$",
    "correctIndex": 0,
    "hintEn": "Velocities have opposite directions: $\\Delta H = m(v_2 + v_1) = 0.5(8 + 10)$.",
    "hintAr": "السرعتان في اتجاهين متضادين: $\\Delta H = m(v_2 + v_1) = 0.5(8 + 10)$.",
    "stepByStepSolutionEn": [
      "1. $\\Delta H = m(v_2 - (-v_1)) = m(v_2 + v_1)$.",
      "2. $\\Delta H = 0.5(8 + 10) = 0.5(18) = 9\\text{ kg}\\cdot\\text{m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. التغير في كمية الحركة: $\\Delta H = m(v_2 + v_1)$.",
      "٢. الحساب: $\\Delta H = 0.5(8 + 10) = 9\\text{ كجم.م/ث}$."
    ],
    "teacherTipEn": "Rebound implies adding speed magnitudes for momentum change.",
    "teacherTipAr": "الارتداد يقتضي جمع مقداري السرعتين لحساب التغير في كمية الحركة."
  },
  {
    "id": "dyn_ch2_ex_11",
    "titleEn": "Exercise 11: Elevator Scale Decelerating Ascent",
    "titleAr": "تمرين ١١: قراءة ميزان في مصعد صاعد بتقصير",
    "difficulty": "medium",
    "questionEn": "A man of mass $80\\text{ kg}$ stands on a scale in an elevator ascending with a deceleration (retardation) of $1.8\\text{ m/s}^2$. Find the reading of the scale in kg-wt.",
    "questionAr": "رجل كتلته $80\\text{ كجم}$ يقف على ميزان داخل مصعد صاعد بتقصير مقداره $1.8\\text{ م/ث}^2$. أوجد قراءة الميزان بالثقل كجم.",
    "optionsEn": [
      "$65.3\\text{ kg-wt}$",
      "$94.7\\text{ kg-wt}$",
      "$80.0\\text{ kg-wt}$",
      "$70.0\\text{ kg-wt}$"
    ],
    "optionsAr": [
      "$65.3\\text{ ث.كجم}$",
      "$94.7\\text{ ث.كجم}$",
      "$80.0\\text{ ث.كجم}$",
      "$70.0\\text{ ث.كجم}$"
    ],
    "correctAnswer": "$65.3\\text{ kg-wt}$",
    "correctIndex": 0,
    "hintEn": "Ascending with deceleration means acceleration is negative: $N = m(g - a) = 80(9.8 - 1.8) = 80(8) = 640\\text{ N} = 65.3\\text{ kg-wt}$.",
    "hintAr": "الصعود بتقصير يعني أن العجلة سالبة: $N = m(g - a) = 80(8) = 640\\text{ نيوتن}$.",
    "stepByStepSolutionEn": [
      "1. Ascending with deceleration of $1.8\\text{ m/s}^2$ means effective equation is $N = m(g - a)$.",
      "2. $N = 80(9.8 - 1.8) = 80(8.0) = 640\\text{ N}$.",
      "3. In kg-wt: $\\frac{640}{9.8} \\approx 65.3\\text{ kg-wt}$."
    ],
    "stepByStepSolutionAr": [
      "١. الصعود بتقصير يكافئ $N = m(g - a)$.",
      "٢. بالنيوتن: $N = 80(9.8 - 1.8) = 640\\text{ نيوتن}$.",
      "٣. بالثقل كجم: $\\frac{640}{9.8} \\approx 65.3\\text{ ث.كجم}$."
    ],
    "teacherTipEn": "Decelerating ascent reduces apparent weight, just like accelerating descent!",
    "teacherTipAr": "الصعود بتقصير ينقص الوزن الظاهري تماماً كالهبوط بتسارع!"
  },
  {
    "id": "dyn_ch2_ex_12",
    "titleEn": "Exercise 12: Ratio of Apparent Weights in Elevator",
    "titleAr": "تمرين ١٢: النسبة بين قراءتي الميزان صعوداً وهبوطاً",
    "difficulty": "medium",
    "questionEn": "The ratio between the scale reading of a man in an elevator ascending with acceleration $a$ to that when descending with the same acceleration $a$ is $5 : 3$. Find the value of $a$ (take $g = 9.8\\text{ m/s}^2$).",
    "questionAr": "النسبة بين قراءة ميزان لرجل داخل مصعد صاعد بعجلة $a$ إلى قراءته عند هبوطه بنفس العجلة $a$ هي $5 : 3$. أوجد قيمة العجلة $a$ (اعتبر $g = 9.8\\text{ م/ث}^2$).",
    "optionsEn": [
      "$2.45\\text{ m/s}^2$",
      "$1.96\\text{ m/s}^2$",
      "$4.9\\text{ m/s}^2$",
      "$3.27\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$2.45\\text{ م/ث}^2$",
      "$1.96\\text{ م/ث}^2$",
      "$4.9\\text{ م/ث}^2$",
      "$3.27\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$2.45\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Set up the ratio $\\frac{m(g + a)}{m(g - a)} = \\frac{5}{3}$, then cross-multiply.",
    "hintAr": "كون النسبة $\\frac{g + a}{g - a} = \\frac{5}{3}$ واضرب طرفين في وسطين.",
    "stepByStepSolutionEn": [
      "1. Ratio: $\\frac{g + a}{g - a} = \\frac{5}{3}$.",
      "2. Cross-multiply: $3(g + a) = 5(g - a) \\implies 3g + 3a = 5g - 5a$.",
      "3. $8a = 2g \\implies a = \\frac{g}{4} = \\frac{9.8}{4} = 2.45\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. النسبة: $\\frac{g + a}{g - a} = \\frac{5}{3}$.",
      "٢. طرفين في وسطين: $3g + 3a = 5g - 5a$.",
      "٣. $8a = 2g \\implies a = \\frac{9.8}{4} = 2.45\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Classic exam problem! (g+a)/(g-a) = ratio.",
    "teacherTipAr": "مسألة امتحانية شهيرة: (د + جـ) ÷ (د - جـ) = النسبة."
  },
  {
    "id": "dyn_ch2_ex_13",
    "titleEn": "Exercise 13: Resistance on a Rough Horizontal Plane",
    "titleAr": "تمرين ١٣: مقاومة الاحتكاك على مستوى أفقي خشن في الديناميكا",
    "difficulty": "medium",
    "questionEn": "A body of mass $m = 4\\text{ kg}$ is projected horizontally on a rough plane with initial speed $v_0 = 14\\text{ m/s}$ and comes to rest after traveling $20\\text{ m}$. Find the coefficient of friction $\\mu_k$ (take $g = 9.8\\text{ m/s}^2$).",
    "questionAr": "قذف جسم كتلته $m = 4\\text{ كجم}$ أفقياً على مستوى خشن بسرعة ابتدائية $v_0 = 14\\text{ م/ث}$ وسكن بعد أن قطع مسافة $20\\text{ م}$. أوجد معامل الاحتكاك الحركي $\\mu_k$ (اعتبر $g = 9.8\\text{ م/ث}^2$).",
    "optionsEn": [
      "$0.5$",
      "$0.25$",
      "$0.4$",
      "$0.6$"
    ],
    "optionsAr": [
      "$0.5$",
      "$0.25$",
      "$0.4$",
      "$0.6$"
    ],
    "correctAnswer": "$0.5$",
    "correctIndex": 0,
    "hintEn": "Find deceleration from $v^2 = v_0^2 - 2as \\implies a = \\frac{14^2}{2(20)} = 4.9\\text{ m/s}^2$. Then $a = \\mu_k g \\implies \\mu_k = \\frac{4.9}{9.8} = 0.5$.",
    "hintAr": "احسب العجلة: $a = \\frac{14^2}{40} = 4.9\\text{ م/ث}^2$. ثم $\\mu_k = \\frac{a}{g} = 0.5$.",
    "stepByStepSolutionEn": [
      "1. Deceleration: $0 = (14)^2 - 2a(20) \\implies 40a = 196 \\implies a = 4.9\\text{ m/s}^2$.",
      "2. Resisting force is friction: $-\\mu_k mg = -ma \\implies a = \\mu_k g$.",
      "3. Coefficient: $\\mu_k = \\frac{a}{g} = \\frac{4.9}{9.8} = 0.5$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب العجلة: $a = \\frac{196}{40} = 4.9\\text{ م/ث}^2$.",
      "٢. قوة الاحتكاك هي الوحيدة المسببة للتقصير: $a = \\mu_k g$.",
      "٣. معامل الاحتكاك: $\\mu_k = \\frac{4.9}{9.8} = 0.5$."
    ],
    "teacherTipEn": "On a rough horizontal plane under friction alone, deceleration is always mu_k * g regardless of mass!",
    "teacherTipAr": "على المستوى الخشن الأفقي تكون عجلة التباطؤ دائماً جـ = م_ك × د أياً كانت الكتلة!"
  },
  {
    "id": "dyn_ch2_ex_14",
    "titleEn": "Exercise 14: Distance Traveled by Two Masses in Atwood System",
    "titleAr": "تمرين ١٤: المسافة الرأسية بين كتلتين بعد ثانية من الحركة",
    "difficulty": "medium",
    "questionEn": "Two masses $m_1 = 3\\text{ kg}$ and $m_2 = 1\\text{ kg}$ hang over a smooth pulley. Starting from the same horizontal level from rest, what is the vertical distance between them after $1\\text{ second}$? (Take $g = 9.8\\text{ m/s}^2$).",
    "questionAr": "علقت كتلتان $m_1 = 3\\text{ كجم}$ و $m_2 = 1\\text{ كجم}$ في طرفي خيط حول بكرة ملساء. إذا بدأتا الحركة من السكون وكانتا في مستوى أفقي واحد، فما المسافة الرأسية بينهما بعد ثانية واحدة؟ (اعتبر $g = 9.8\\text{ م/ث}^2$).",
    "optionsEn": [
      "$4.9\\text{ m}$",
      "$2.45\\text{ m}$",
      "$1.225\\text{ m}$",
      "$9.8\\text{ m}$"
    ],
    "optionsAr": [
      "$4.9\\text{ م}$",
      "$2.45\\text{ م}$",
      "$1.225\\text{ م}$",
      "$9.8\\text{ م}$"
    ],
    "correctAnswer": "$4.9\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "One mass moves down by $s$ and the other moves up by $s$, so the vertical distance between them is $2s = 2 \\times \\frac{1}{2}at^2 = at^2$.",
    "hintAr": "تهبط كتلة مسافة $s$ وتصعد الأخرى مسافة $s$، فتكون المسافة الرأسية بينهما $2s = at^2$.",
    "stepByStepSolutionEn": [
      "1. Acceleration: $a = \\frac{3 - 1}{3 + 1} g = \\frac{2}{4}(9.8) = 4.9\\text{ m/s}^2$.",
      "2. Distance moved by each body in $1\\text{ s}$: $s = \\frac{1}{2}at^2 = \\frac{1}{2}(4.9)(1)^2 = 2.45\\text{ m}$.",
      "3. Since one descends $2.45\\text{ m}$ and the other ascends $2.45\\text{ m}$, the vertical separation is $2s = 4.9\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. العجلة: $a = \\frac{2}{4} \\times 9.8 = 4.9\\text{ م/ث}^2$.",
      "٢. مسافة تحرك كل جسم: $s = \\frac{1}{2} \\times 4.9 \\times 1 = 2.45\\text{ م}$.",
      "٣. المسافة الرأسية بينهما = $2s = 2 \\times 2.45 = 4.9\\text{ م}$."
    ],
    "teacherTipEn": "Vertical distance between the two bodies is 2s, not s!",
    "teacherTipAr": "المسافة الرأسية بين الجسمين هي ٢ ف وليست ف واحدة!"
  },
  {
    "id": "dyn_ch2_ex_15",
    "titleEn": "Exercise 15: Newton's Second Law with Variable Thrust",
    "titleAr": "تمرين ١٥: قانون نيوتن الثاني لقوة متغيرة مع الزمن",
    "difficulty": "hots",
    "questionEn": "A body of mass $m = 2\\text{ kg}$ starts from rest at the origin. A variable force $F(t) = 6t - 4\\text{ N}$ acts on it along the $x$-axis. Find its velocity at $t = 3\\text{ s}$.",
    "questionAr": "بدأ جسم كتلته $m = 2\\text{ كجم}$ حركته من السكون من نقطة الأصل، وأثرت عليه قوة متغيرة $F(t) = 6t - 4\\text{ نيوتن}$ في اتجاه المحور السيني. أوجد سرعته عند $t = 3\\text{ ث}$.",
    "optionsEn": [
      "$7.5\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$9\\text{ m/s}$",
      "$12\\text{ m/s}$"
    ],
    "optionsAr": [
      "$7.5\\text{ م/ث}$",
      "$15\\text{ م/ث}$",
      "$9\\text{ م/ث}$",
      "$12\\text{ م/ث}$"
    ],
    "correctAnswer": "$7.5\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "$F = ma \\implies a(t) = \\frac{F(t)}{m} = 3t - 2$. Then integrate $v = \\int_0^3 a dt$.",
    "hintAr": "$a(t) = \\frac{F(t)}{m} = 3t - 2$. ثم كامل السرعة $v = \\int_0^3 (3t - 2) dt$.",
    "stepByStepSolutionEn": [
      "1. Acceleration: $a(t) = \\frac{F(t)}{m} = \\frac{6t - 4}{2} = 3t - 2$.",
      "2. Integrate to find velocity: $v(t) = \\int_0^3 (3t - 2) dt = \\left[\\frac{3}{2}t^2 - 2t\\right]_0^3$.",
      "3. $v(3) = \\frac{3}{2}(9) - 2(3) = 13.5 - 6 = 7.5\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. العجلة: $a(t) = \\frac{F}{m} = 3t - 2$.",
      "٢. تكامل العجلة للحصول على السرعة: $v = [\\frac{3}{2}t^2 - 2t]_0^3$.",
      "٣. عند $t = 3$: $v = 13.5 - 6 = 7.5\\text{ م/ث}$."
    ],
    "teacherTipEn": "F = ma => a = F/m, then integrate with respect to time.",
    "teacherTipAr": "ق = ك جـ ومنها جـ = ق/ك ثم نكامل بالنسبة للزمن."
  }
];
