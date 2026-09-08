import type { SolvedProblem } from '../../../types/curriculum';

export const dynCh3SolvedExamples: SolvedProblem[] = [
  {
    "id": "dyn_ch3_se_01",
    "titleEn": "MoE Example 1: Constant Force Impulse on Particle",
    "titleAr": "مثال الوزارة ١: دفع قوة ثابتة على جسيم",
    "difficulty": "easy",
    "questionEn": "A constant force of magnitude $F = 40\\text{ N}$ acts on a body of mass $m = 5\\text{ kg}$ initially at rest on a smooth horizontal plane for a duration of $\\Delta t = 0.25\\text{ seconds}$. Find the magnitude of the impulse exerted on the body and the final velocity acquired.",
    "questionAr": "أثرت قوة ثابتة مقدارها $F = 40\\text{ نيوتن}$ على جسم كتلته $m = 5\\text{ كجم}$ ساكن موضوع على مستوى أفقي أملس لمدة زمنية $\\Delta t = 0.25\\text{ ثانية}$. أوجد مقدار الدفع المؤثر على الجسم، والسرعة النهائية التي اكتسبها الجسم.",
    "optionsEn": [
      "Impulse = $10\\text{ N}\\cdot\\text{s}$, Velocity = $2\\text{ m/s}$",
      "Impulse = $160\\text{ N}\\cdot\\text{s}$, Velocity = $32\\text{ m/s}$",
      "Impulse = $10\\text{ N}\\cdot\\text{s}$, Velocity = $4\\text{ m/s}$",
      "Impulse = $8\\text{ N}\\cdot\\text{s}$, Velocity = $1.6\\text{ m/s}$"
    ],
    "optionsAr": [
      "الدفع = $10\\text{ نيوتن.ث}$، السرعة = $2\\text{ م/ث}$",
      "الدفع = $160\\text{ نيوتن.ث}$، السرعة = $32\\text{ م/ث}$",
      "الدفع = $10\\text{ نيوتن.ث}$، السرعة = $4\\text{ م/ث}$",
      "الدفع = $8\\text{ نيوتن.ث}$، السرعة = $1.6\\text{ م/ث}$"
    ],
    "correctAnswer": "Impulse = $10\\text{ N}\\cdot\\text{s}$, Velocity = $2\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Use the impulse formula $I = F \\Delta t$, then equate impulse to the change in momentum $I = m(v - v_0)$.",
    "hintAr": "استخدم قانون الدفع $I = F \\Delta t$، ثم ساوِ الدفع بالتغير في كمية الحركة $I = m(v - v_0)$.",
    "stepByStepSolutionEn": [
      "1. Calculate the magnitude of the impulse:",
      "$$I = F \\Delta t = 40 \\times 0.25 = 10\\text{ N}\\cdot\\text{s}$$",
      "2. Apply the impulse-momentum theorem:",
      "$$I = \\Delta p = m(v - v_0)$$",
      "Since the body was initially at rest ($v_0 = 0$):",
      "$$10 = 5(v - 0) \\implies v = \\frac{10}{5} = 2\\text{ m/s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب مقدار الدفع:",
      "$$I = F \\Delta t = 40 \\times 0.25 = 10\\text{ نيوتن.ث}$$",
      "٢. تطبيق نظرية الدفع وكمية الحركة:",
      "$$I = \\Delta p = m(v - v_0)$$",
      "بما أن الجسم كان ساكناً ($v_0 = 0$):",
      "$$10 = 5(v - 0) \\implies v = \\frac{10}{5} = 2\\text{ م/ث}$$"
    ],
    "teacherTipEn": "Always remember: Impulse = Force × Time = Change in Momentum: I = F Δt = m(v - v₀).",
    "teacherTipAr": "تذكر دائماً: الدفع = القوة × زمن التأثير = التغير في كمية الحركة: د = ق × ن = ك (ع - ع٠)."
  },
  {
    "id": "dyn_ch3_se_02",
    "titleEn": "MoE Example 2: Ball Rebounding from Floor & Total Thrust",
    "titleAr": "مثال الوزارة ٢: ارتداد كرة من الأرض والضغط الكلي على الأرض",
    "difficulty": "medium",
    "questionEn": "A ball of mass $m = 400\\text{ g}$ falls from rest from a height of $h_1 = 2.5\\text{ m}$ onto a horizontal floor and rebounds vertically to a height of $h_2 = 0.9\\text{ m}$. If the contact duration with the floor is $\\Delta t = 0.05\\text{ s}$, find: (1) the impulse exerted by the floor on the ball, (2) the average impulsive force, and (3) the total thrust force exerted on the floor ($g = 9.8\\text{ m/s}^2$).",
    "questionAr": "سقطت كرة كتلتها $m = 400\\text{ جم}$ من السكون من ارتفاع $h_1 = 2.5\\text{ م}$ على أرض أفقية فارتدت رأسياً لأعلى إلى ارتفاع $h_2 = 0.9\\text{ م}$. فإذا كان زمن تلامس الكرة بالأرض $\\Delta t = 0.05\\text{ ث}$، احسب: (١) دفع الأرض على الكرة، (٢) القوة الدفعية المتوسطة، (٣) الضغط الكلي الواقع على الأرض ($g = 9.8\\text{ م/ث²}$).",
    "optionsEn": [
      "Impulse = $4.48\\text{ N}\\cdot\\text{s}$, Force = $89.6\\text{ N}$, Thrust = $93.52\\text{ N}$",
      "Impulse = $1.12\\text{ N}\\cdot\\text{s}$, Force = $22.4\\text{ N}$, Thrust = $26.32\\text{ N}$",
      "Impulse = $4.48\\text{ N}\\cdot\\text{s}$, Force = $89.6\\text{ N}$, Thrust = $85.68\\text{ N}$",
      "Impulse = $2.24\\text{ N}\\cdot\\text{s}$, Force = $44.8\\text{ N}$, Thrust = $48.72\\text{ N}$"
    ],
    "optionsAr": [
      "الدفع = $4.48\\text{ نيوتن.ث}$، القوة = $89.6\\text{ نيوتن}$، الضغط = $93.52\\text{ نيوتن}$",
      "الدفع = $1.12\\text{ نيوتن.ث}$، القوة = $22.4\\text{ نيوتن}$، الضغط = $26.32\\text{ نيوتن}$",
      "الدفع = $4.48\\text{ نيوتن.ث}$، القوة = $89.6\\text{ نيوتن}$، الضغط = $85.68\\text{ نيوتن}$",
      "الدفع = $2.24\\text{ نيوتن.ث}$، القوة = $44.8\\text{ نيوتن}$، الضغط = $48.72\\text{ نيوتن}$"
    ],
    "correctAnswer": "Impulse = $4.48\\text{ N}\\cdot\\text{s}$, Force = $89.6\\text{ N}$, Thrust = $93.52\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Compute impact speed $v_1 = \\sqrt{2gh_1}$ downwards and rebound speed $v_2 = \\sqrt{2gh_2}$ upwards. The total pressure on the floor includes the ball's weight: $N = F + mg$.",
    "hintAr": "احسب سرعة الوصول للأرض $v_1 = \\sqrt{2gh_1}$ لأسفل وسرعة الارتداد $v_2 = \\sqrt{2gh_2}$ لأعلى. الضغط على الأرض يضاف إليه وزن الكرة: $N = F + mg$.",
    "stepByStepSolutionEn": [
      "1. Speed before impact (falling from $h_1 = 2.5\\text{ m}$):",
      "$$v_1 = \\sqrt{2 g h_1} = \\sqrt{2 \\times 9.8 \\times 2.5} = \\sqrt{49} = 7\\text{ m/s (downwards)}$$",
      "2. Speed immediately after rebound (reaches $h_2 = 0.9\\text{ m}$):",
      "$$v_2 = \\sqrt{2 g h_2} = \\sqrt{2 \\times 9.8 \\times 0.9} = \\sqrt{17.64} = 4.2\\text{ m/s (upwards)}$$",
      "3. Impulse exerted on the ball ($m = 0.4\\text{ kg}$, velocities in opposite directions):",
      "$$I = m(v_2 - (-v_1)) = 0.4(4.2 + 7) = 0.4(11.2) = 4.48\\text{ N}\\cdot\\text{s}$$",
      "4. Average impulsive force:",
      "$$F = \\frac{I}{\\Delta t} = \\frac{4.48}{0.05} = 89.6\\text{ N}$$",
      "5. Total thrust (reaction) on the horizontal floor:",
      "$$N = F + W = F + mg = 89.6 + (0.4 \\times 9.8) = 89.6 + 3.92 = 93.52\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "١. سرعة الكرة قبل الاصطدام بالأرض مباشرة (سقوط من ارتفاع $2.5\\text{ م}$):",
      "$$v_1 = \\sqrt{2 g h_1} = \\sqrt{2 \\times 9.8 \\times 2.5} = \\sqrt{49} = 7\\text{ م/ث (لأسفل)}$$",
      "٢. سرعة الكرة بعد الارتداد مباشرة (صعود لأقصى ارتفاع $0.9\\text{ م}$):",
      "$$v_2 = \\sqrt{2 g h_2} = \\sqrt{2 \\times 9.8 \\times 0.9} = \\sqrt{17.64} = 4.2\\text{ م/ث (لأعلى)}$$",
      "٣. دفع الأرض على الكرة ($m = 0.4\\text{ كجم}$، السرعتان متضادتان):",
      "$$I = m(v_2 - (-v_1)) = 0.4(4.2 + 7) = 0.4 \\times 11.2 = 4.48\\text{ نيوتن.ث}$$",
      "٤. القوة الدفعية المتوسطة:",
      "$$F = \\frac{I}{\\Delta t} = \\frac{4.48}{0.05} = 89.6\\text{ نيوتن}$$",
      "٥. الضغط الكلي المؤثر على الأرض (رد فعل الأرض):",
      "$$N = F + W = F + mg = 89.6 + (0.4 \\times 9.8) = 89.6 + 3.92 = 93.52\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "Critical distinction: on a horizontal floor, thrust = F + mg. On a vertical wall, thrust = F. On a ceiling, thrust = F - mg.",
    "teacherTipAr": "قاعدة جوهرية: الضغط على الأرض الأفقية = ق + ك د. على الحائط الرأسي = ق. على السقف = ق - ك د."
  },
  {
    "id": "dyn_ch3_se_03",
    "titleEn": "MoE Example 3: Ball Striking a Vertical Wall Horizontally",
    "titleAr": "مثال الوزارة ٣: اصطدام كرة أفقياً بحائط رأسي",
    "difficulty": "medium",
    "questionEn": "A ball of mass $m = 500\\text{ g}$ moves horizontally at a speed of $12\\text{ m/s}$ and strikes a smooth vertical wall normally, rebounding horizontally at a speed of $8\\text{ m/s}$. If the duration of impact is $\\Delta t = 0.04\\text{ s}$, find the impulse of the wall on the ball and the average thrust force exerted on the wall.",
    "questionAr": "تتحرك كرة كتلتها $m = 500\\text{ جم}$ أفقياً بسرعة $12\\text{ م/ث}$ واصطدمت عمودياً بحائط رأسي أملس، فارتدت أفقياً بسرعة $8\\text{ م/ث}$. فإذا كان زمن التلامس $\\Delta t = 0.04\\text{ ث}$، أوجد دفع الحائط على الكرة ومتوسط قوة الضغط على الحائط.",
    "optionsEn": [
      "Impulse = $10\\text{ N}\\cdot\\text{s}$, Force = $250\\text{ N}$",
      "Impulse = $2\\text{ N}\\cdot\\text{s}$, Force = $50\\text{ N}$",
      "Impulse = $10\\text{ N}\\cdot\\text{s}$, Force = $125\\text{ N}$",
      "Impulse = $6\\text{ N}\\cdot\\text{s}$, Force = $150\\text{ N}$"
    ],
    "optionsAr": [
      "الدفع = $10\\text{ نيوتن.ث}$، القوة = $250\\text{ نيوتن}$",
      "الدفع = $2\\text{ نيوتن.ث}$، القوة = $50\\text{ نيوتن}$",
      "الدفع = $10\\text{ نيوتن.ث}$، القوة = $125\\text{ نيوتن}$",
      "الدفع = $6\\text{ نيوتن.ث}$، القوة = $150\\text{ نيوتن}$"
    ],
    "correctAnswer": "Impulse = $10\\text{ N}\\cdot\\text{s}$, Force = $250\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Mass is $0.5\\text{ kg}$. Rebound reverses velocity direction: $\\Delta v = 8 - (-12) = 20\\text{ m/s}$. The thrust on a vertical wall is simply $F$.",
    "hintAr": "الكتلة $0.5\\text{ كجم}$. الارتداد يعكس الاتجاه: $\\Delta v = 8 - (-12) = 20\\text{ م/ث}$. والضغط على الحائط الرأسي يساوي $F$ فقط.",
    "stepByStepSolutionEn": [
      "1. Convert mass to kilograms: $m = 500\\text{ g} = 0.5\\text{ kg}$.",
      "2. Calculate the change in velocity: taking rebound direction as positive:",
      "$$v_1 = -12\\text{ m/s}, \\quad v_2 = +8\\text{ m/s} \\implies \\Delta v = v_2 - v_1 = 8 - (-12) = 20\\text{ m/s}$$",
      "3. Impulse of the wall on the ball:",
      "$$I = m \\Delta v = 0.5 \\times 20 = 10\\text{ N}\\cdot\\text{s}$$",
      "4. Average thrust force exerted on the wall:",
      "$$F = \\frac{I}{\\Delta t} = \\frac{10}{0.04} = 250\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "١. تحويل الكتلة لكيلوجرام: $m = 0.5\\text{ كجم}$.",
      "٢. حساب التغير في السرعة بافتراض اتجاه الارتداد موجباً:",
      "$$v_1 = -12\\text{ م/ث}, \\quad v_2 = +8\\text{ م/ث} \\implies \\Delta v = 8 - (-12) = 20\\text{ م/ث}$$",
      "٣. دفع الحائط على الكرة:",
      "$$I = m \\Delta v = 0.5 \\times 20 = 10\\text{ نيوتن.ث}$$",
      "٤. متوسط قوة الضغط على الحائط:",
      "$$F = \\frac{I}{\\Delta t} = \\frac{10}{0.04} = 250\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "Notice that gravity acts vertically, perpendicular to the horizontal impact, so weight does not enter the wall's normal reaction equation.",
    "teacherTipAr": "لاحظ أن وزن الكرة رأسي بينما التصادم أفقي، لذلك لا يدخل وزن الكرة في معادلة رد فعل الحائط الرأسي."
  },
  {
    "id": "dyn_ch3_se_04",
    "titleEn": "MoE Example 4: Ball Striking the Ceiling of a Room",
    "titleAr": "مثال الوزارة ٤: اصطدام كرة بسقف حجرة والضغط على السقف",
    "difficulty": "medium",
    "questionEn": "A ball of mass $m = 300\\text{ g}$ is projected vertically upwards with speed $u = 11.2\\text{ m/s}$ from a point $3.9\\text{ m}$ below the ceiling of a room. It strikes the ceiling and rebounds downwards with speed $v_2 = 3\\text{ m/s}$. If the duration of contact is $\\Delta t = 0.02\\text{ s}$, find: (1) the impulse exerted by the ceiling on the ball, and (2) the total pressure exerted on the ceiling ($g = 9.8\\text{ m/s}^2$).",
    "questionAr": "قُذفت كرة كتلتها $m = 300\\text{ جم}$ رأسياً لأعلى بسرعة $u = 11.2\\text{ م/ث}$ من نقطة تقع على بعد $3.9\\text{ م}$ أسفل سقف حجرة. فاصطدمت بالسقف وارتدت لأسفل بسرعة $v_2 = 3\\text{ م/ث}$. فإذا كان زمن التلامس $\\Delta t = 0.02\\text{ ث}$، احسب: (١) دفع السقف على الكرة، (٢) الضغط الكلي المؤثر على السقف ($g = 9.8\\text{ م/ث²}$).",
    "optionsEn": [
      "Impulse = $3\\text{ N}\\cdot\\text{s}$, Pressure = $147.06\\text{ N}$",
      "Impulse = $3\\text{ N}\\cdot\\text{s}$, Pressure = $152.94\\text{ N}$",
      "Impulse = $1.2\\text{ N}\\cdot\\text{s}$, Pressure = $57.06\\text{ N}$",
      "Impulse = $2.4\\text{ N}\\cdot\\text{s}$, Pressure = $117.06\\text{ N}$"
    ],
    "optionsAr": [
      "الدفع = $3\\text{ نيوتن.ث}$، الضغط = $147.06\\text{ نيوتن}$",
      "الدفع = $3\\text{ نيوتن.ث}$، الضغط = $152.94\\text{ نيوتن}$",
      "الدفع = $1.2\\text{ نيوتن.ث}$، الضغط = $57.06\\text{ نيوتن}$",
      "الدفع = $2.4\\text{ نيوتن.ث}$، الضغط = $117.06\\text{ نيوتن}$"
    ],
    "correctAnswer": "Impulse = $3\\text{ N}\\cdot\\text{s}$, Pressure = $147.06\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Find velocity just before hitting the ceiling using $v_1^2 = u^2 - 2gs$. At the ceiling, the pressure is $N = F - mg$.",
    "hintAr": "احسب سرعة الوصول للسقف بالقانون $v_1^2 = u^2 - 2gs$. وعند السقف يكون الضغط $N = F - mg$.",
    "stepByStepSolutionEn": [
      "1. Calculate speed $v_1$ just before striking the ceiling:",
      "$$v_1^2 = u^2 - 2 g s = (11.2)^2 - 2(9.8)(3.9) = 125.44 - 76.44 = 49 \\implies v_1 = 7\\text{ m/s (upwards)}$$",
      "2. Calculate the impulse on the ball ($m = 0.3\\text{ kg}$, rebound speed $v_2 = 3\\text{ m/s}$ downwards):",
      "$$I = m(v_2 - (-v_1)) = 0.3(3 + 7) = 0.3(10) = 3\\text{ N}\\cdot\\text{s}$$",
      "3. Average impulsive force:",
      "$$F = \\frac{I}{\\Delta t} = \\frac{3}{0.02} = 150\\text{ N}$$",
      "4. Total pressure on the ceiling:",
      "The ball pushes upwards with force $F$, while gravity pulls the ball downwards with weight $W = mg = 0.3 \\times 9.8 = 2.94\\text{ N}$:",
      "$$N = F - mg = 150 - 2.94 = 147.06\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب سرعة الكرة لحظة وصولها للسقف:",
      "$$v_1^2 = u^2 - 2 g s = (11.2)^2 - 2(9.8)(3.9) = 125.44 - 76.44 = 49 \\implies v_1 = 7\\text{ م/ث (لأعلى)}$$",
      "٢. حساب دفع السقف على الكرة ($m = 0.3\\text{ كجم}$، ارتدت لأسفل بسرعة $3\\text{ م/ث}$):",
      "$$I = m(v_2 - (-v_1)) = 0.3(3 + 7) = 0.3 \\times 10 = 3\\text{ نيوتن.ث}$$",
      "٣. القوة الدفعية المتوسطة:",
      "$$F = \\frac{I}{\\Delta t} = \\frac{3}{0.02} = 150\\text{ نيوتن}$$",
      "٤. الضغط الكلي المؤثر على السقف:",
      "الكرة تضغط لأعلى بقوة $F$ والجاذبية تجذبها لأسفل بوزنها $W = mg = 0.3 \\times 9.8 = 2.94\\text{ نيوتن}$:",
      "$$N = F - mg = 150 - 2.94 = 147.06\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "At the ceiling, the ball's weight pulls AWAY from the ceiling, so the net thrust is reduced: N = F - mg.",
    "teacherTipAr": "في السقف يجذب الوزن الكرة لأسفل بعيداً عن السقف، لذا يقل الضغط بمقدار الوزن: الضغط = ق - ك د."
  },
  {
    "id": "dyn_ch3_se_05",
    "titleEn": "MoE Example 5: Impulse of a Variable Force via Integration",
    "titleAr": "مثال الوزارة ٥: دفع قوة متغيرة بالتكامل",
    "difficulty": "medium",
    "questionEn": "A force $F(t) = (3t^2 - 4t + 5)\\text{ N}$ acts on a body of mass $m = 2\\text{ kg}$ moving in a straight line during the time interval from $t = 1\\text{ s}$ to $t = 3\\text{ s}$. If the initial velocity at $t = 1\\text{ s}$ was $4\\text{ m/s}$, find the impulse of the force and the velocity of the body at $t = 3\\text{ s}$.",
    "questionAr": "أثرت قوة $F(t) = (3t^2 - 4t + 5)\\text{ نيوتن}$ على جسم كتلته $m = 2\\text{ كجم}$ يتحرك في خط مستقيم خلال الفترة الزمنية من $t = 1\\text{ ث}$ إلى $t = 3\\text{ ث}$. فإذا كانت سرعة الجسم عند $t = 1\\text{ ث}$ تساوي $4\\text{ م/ث}$، أوجد دفع القوة وسرعة الجسم عند $t = 3\\text{ ث}$.",
    "optionsEn": [
      "Impulse = $20\\text{ N}\\cdot\\text{s}$, Velocity = $14\\text{ m/s}$",
      "Impulse = $24\\text{ N}\\cdot\\text{s}$, Velocity = $16\\text{ m/s}$",
      "Impulse = $20\\text{ N}\\cdot\\text{s}$, Velocity = $10\\text{ m/s}$",
      "Impulse = $18\\text{ N}\\cdot\\text{s}$, Velocity = $13\\text{ m/s}$"
    ],
    "optionsAr": [
      "الدفع = $20\\text{ نيوتن.ث}$، السرعة = $14\\text{ م/ث}$",
      "الدفع = $24\\text{ نيوتن.ث}$، السرعة = $16\\text{ م/ث}$",
      "الدفع = $20\\text{ نيوتن.ث}$، السرعة = $10\\text{ م/ث}$",
      "الدفع = $18\\text{ نيوتن.ث}$، السرعة = $13\\text{ م/ث}$"
    ],
    "correctAnswer": "Impulse = $20\\text{ N}\\cdot\\text{s}$, Velocity = $14\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "When force is a function of time, impulse is given by the definite integral: $I = \\int_{t_1}^{t_2} F(t) dt = m(v_2 - v_1)$.",
    "hintAr": "عندما تكون القوة دالة في الزمن، يكون الدفع هو التكامل المحدد: $I = \\int_{t_1}^{t_2} F(t) dt = m(v_2 - v_1)$.",
    "stepByStepSolutionEn": [
      "1. Calculate the impulse via definite integration:",
      "$$I = \\int_1^3 (3t^2 - 4t + 5) dt = \\left[ t^3 - 2t^2 + 5t \\right]_1^3$$",
      "$$I = (27 - 18 + 15) - (1 - 2 + 5) = 24 - 4 = 20\\text{ N}\\cdot\\text{s}$$",
      "2. Apply the impulse-momentum theorem:",
      "$$I = m(v_2 - v_1) \\implies 20 = 2(v_2 - 4)$$",
      "$$10 = v_2 - 4 \\implies v_2 = 14\\text{ m/s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب الدفع بالتكامل المحدد للقوة:",
      "$$I = \\int_1^3 (3t^2 - 4t + 5) dt = \\left[ t^3 - 2t^2 + 5t \\right]_1^3$$",
      "$$I = (27 - 18 + 15) - (1 - 2 + 5) = 24 - 4 = 20\\text{ نيوتن.ث}$$",
      "٢. تطبيق علاقة الدفع بكمية الحركة:",
      "$$I = m(v_2 - v_1) \\implies 20 = 2(v_2 - 4)$$",
      "$$10 = v_2 - 4 \\implies v_2 = 14\\text{ م/ث}$$"
    ],
    "teacherTipEn": "Impulse of variable force F(t) is always the area under the F-t curve from t1 to t2.",
    "teacherTipAr": "دفع القوة المتغيرة ق(ن) هو المساحة تحت منحنى (القوة - الزمن) بين ن١ و ن٢."
  },
  {
    "id": "dyn_ch3_se_06",
    "titleEn": "MoE Example 6: Inelastic Direct Collision (Spheres Coalescing)",
    "titleAr": "مثال الوزارة ٦: التصادم غير المرن والتحام كرتين في جسم واحد",
    "difficulty": "easy",
    "questionEn": "A smooth sphere of mass $m_1 = 200\\text{ g}$ moves with speed $u_1 = 8\\text{ m/s}$ on a smooth horizontal table and collides directly with another sphere of mass $m_2 = 300\\text{ g}$ moving in the same direction with speed $u_2 = 3\\text{ m/s}$. The two spheres coalesce and move as a single body after collision. Find their common velocity.",
    "questionAr": "كرة ملساء كتلتها $m_1 = 200\\text{ جم}$ تتحرك بسرعة $u_1 = 8\\text{ م/ث}$ على نضد أفقي أملس واصطدمت تصادماً مباشراً بكرة أخرى كتلتها $m_2 = 300\\text{ جم}$ تتحرك في نفس الاتجاه بسرعة $u_2 = 3\\text{ م/ث}$. فالتحمت الكرتان وكونتا جسماً واحداً بعد التصادم. أوجد السرعة المشتركة للجسم.",
    "optionsEn": [
      "$5\\text{ m/s}$",
      "$5.5\\text{ m/s}$",
      "$4.6\\text{ m/s}$",
      "$6\\text{ m/s}$"
    ],
    "optionsAr": [
      "$5\\text{ م/ث}$",
      "$5.5\\text{ م/ث}$",
      "$4.6\\text{ م/ث}$",
      "$6\\text{ م/ث}$"
    ],
    "correctAnswer": "$5\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Apply conservation of linear momentum: $m_1 u_1 + m_2 u_2 = (m_1 + m_2) v'$.",
    "hintAr": "طبق مبدأ ثبوت كمية الحركة: $m_1 u_1 + m_2 u_2 = (m_1 + m_2) v'$.",
    "stepByStepSolutionEn": [
      "1. Total momentum before collision (both moving in the same positive direction):",
      "$$p_{initial} = m_1 u_1 + m_2 u_2 = 200(8) + 300(3) = 1600 + 900 = 2500\\text{ g}\\cdot\\text{m/s}$$",
      "2. Total momentum after collision of the coalesced body of mass $(m_1 + m_2) = 500\\text{ g}$:",
      "$$p_{final} = (m_1 + m_2) v' = 500 v'$$",
      "3. By conservation of linear momentum:",
      "$$500 v' = 2500 \\implies v' = \\frac{2500}{500} = 5\\text{ m/s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. كمية الحركة الكلية قبل التصادم (الحركة في نفس الاتجاه الموجب):",
      "$$p_{initial} = m_1 u_1 + m_2 u_2 = 200(8) + 300(3) = 1600 + 900 = 2500\\text{ جم.م/ث}$$",
      "٢. كمية الحركة بعد التصادم للكتلة المشتركة $(200 + 300 = 500\\text{ جم})$:",
      "$$p_{final} = (m_1 + m_2) v' = 500 v'$$",
      "٣. بتطبيق مبدأ ثبوت كمية الحركة:",
      "$$500 v' = 2500 \\implies v' = \\frac{2500}{500} = 5\\text{ م/ث}$$"
    ],
    "teacherTipEn": "Notice that when both masses are given in grams, you do not need to convert to kg if all masses are kept in grams.",
    "teacherTipAr": "لاحظ أنه إذا كانت كل الكتل بالجرام يمكنك التعويض بها مباشرة دون الحاجة للتحويل لكيلوجرام."
  },
  {
    "id": "dyn_ch3_se_07",
    "titleEn": "MoE Example 7: Direct Collision - Opposite Directions & Rebound",
    "titleAr": "مثال الوزارة ٧: تصادم مباشر في اتجاهين متضادين والارتداد",
    "difficulty": "medium",
    "questionEn": "Two smooth spheres of masses $m_1 = 400\\text{ g}$ and $m_2 = 200\\text{ g}$ move towards each other on a smooth horizontal table at speeds $u_1 = 6\\text{ m/s}$ and $u_2 = 9\\text{ m/s}$ respectively. After direct collision, the first sphere rebounds with speed $v_1' = 2\\text{ m/s}$. Find: (1) the speed and direction of the second sphere after collision, and (2) the impulse of the first sphere on the second sphere.",
    "questionAr": "تتحرك كرتان ملساوان كتلتاهما $m_1 = 400\\text{ جم}$ و $m_2 = 200\\text{ جم}$ على نضد أفقي أملس في اتجاهين متضادين بسرعتين $u_1 = 6\\text{ م/ث}$ و $u_2 = 9\\text{ م/ث}$ على الترتيب. وبعد التصادم المباشر ارتدت الكرة الأولى بسرعة $v_1' = 2\\text{ م/ث}$. أوجد: (١) سرعة واتجاه الكرة الثانية بعد التصادم، (٢) دفع الكرة الأولى على الكرة الثانية.",
    "optionsEn": [
      "Speed = $7\\text{ m/s}$ (in initial direction of first sphere), Impulse = $3.2\\text{ N}\\cdot\\text{s}$",
      "Speed = $5\\text{ m/s}$ (in initial direction of first sphere), Impulse = $2.8\\text{ N}\\cdot\\text{s}$",
      "Speed = $7\\text{ m/s}$ (in initial direction of second sphere), Impulse = $3.2\\text{ N}\\cdot\\text{s}$",
      "Speed = $9\\text{ m/s}$ (in initial direction of first sphere), Impulse = $3.6\\text{ N}\\cdot\\text{s}$"
    ],
    "optionsAr": [
      "السرعة = $7\\text{ م/ث}$ (في نفس الاتجاه الأصلي للأولى)، الدفع = $3.2\\text{ نيوتن.ث}$",
      "السرعة = $5\\text{ م/ث}$ (في نفس الاتجاه الأصلي للأولى)، الدفع = $2.8\\text{ نيوتن.ث}$",
      "السرعة = $7\\text{ م/ث}$ (في الاتجاه الأصلي للثانية)، الدفع = $3.2\\text{ نيوتن.ث}$",
      "السرعة = $9\\text{ م/ث}$ (في نفس الاتجاه الأصلي للأولى)، الدفع = $3.6\\text{ نيوتن.ث}$"
    ],
    "correctAnswer": "Speed = $7\\text{ m/s}$ (in initial direction of first sphere), Impulse = $3.2\\text{ N}\\cdot\\text{s}$",
    "correctIndex": 0,
    "hintEn": "Set a positive unit vector in the direction of motion of the first sphere: $u_1 = +6$, $u_2 = -9$, and $v_1' = -2$.",
    "hintAr": "افرض اتجاه حركة الكرة الأولى هو الاتجاه الموجب: $u_1 = +6$، $u_2 = -9$، و $v_1' = -2$.",
    "stepByStepSolutionEn": [
      "1. Choose positive direction along the initial velocity of the first sphere:",
      "$$u_1 = +6\\text{ m/s}, \\quad u_2 = -9\\text{ m/s}$$",
      "Since the first sphere rebounds, its velocity after impact is $v_1' = -2\\text{ m/s}$.",
      "2. Apply conservation of linear momentum:",
      "$$m_1 u_1 + m_2 u_2 = m_1 v_1' + m_2 v_2'$$",
      "$$400(6) + 200(-9) = 400(-2) + 200(v_2')$$",
      "$$2400 - 1800 = -800 + 200 v_2'$$",
      "$$600 = -800 + 200 v_2' \\implies 200 v_2' = 1400 \\implies v_2' = +7\\text{ m/s}$$",
      "Since $v_2' > 0$, the second sphere moves in the initial direction of the first sphere.",
      "3. Impulse of first sphere on the second sphere:",
      "$$I = m_2 (v_2' - u_2) = 0.2\\text{ kg} \\times (7 - (-9)) = 0.2 \\times 16 = 3.2\\text{ N}\\cdot\\text{s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. نفرض متجه الوحدة الموجب في اتجاه حركة الكرة الأولى:",
      "$$u_1 = +6\\text{ م/ث}, \\quad u_2 = -9\\text{ م/ث}$$",
      "بما أن الأولى ارتدت، فإن سرعتها بعد التصادم: $v_1' = -2\\text{ م/ث}$.",
      "٢. تطبيق قانون بقاء كمية الحركة:",
      "$$m_1 u_1 + m_2 u_2 = m_1 v_1' + m_2 v_2'$$",
      "$$400(6) + 200(-9) = 400(-2) + 200(v_2')$$",
      "$$2400 - 1800 = -800 + 200 v_2'$$",
      "$$600 + 800 = 200 v_2' \\implies 200 v_2' = 1400 \\implies v_2' = +7\\text{ م/ث}$$",
      "وبما أن الإشارة موجبة، فإن الكرة الثانية تتحرك في نفس الاتجاه الابتدائي للكرة الأولى.",
      "٣. دفع الكرة الأولى على الثانية:",
      "$$I = m_2 (v_2' - u_2) = 0.2\\text{ كجم} \\times (7 - (-9)) = 0.2 \\times 16 = 3.2\\text{ نيوتن.ث}$$"
    ],
    "teacherTipEn": "By Newton's Third Law, the impulse of A on B is equal and opposite to the impulse of B on A: I_AB = -I_BA.",
    "teacherTipAr": "وفق قانون نيوتن الثالث، دفع الأولى على الثانية يساوي دفع الثانية على الأولى مقداراً ويضاده اتجاهاً."
  },
  {
    "id": "dyn_ch3_se_08",
    "titleEn": "MoE Example 8: Loss in Kinetic Energy Due to Inelastic Collision",
    "titleAr": "مثال الوزارة ٨: طاقة الحركة المفقودة نتيجة التصادم غير المرن",
    "difficulty": "medium",
    "questionEn": "Two spheres of masses $m_1 = 100\\text{ g}$ and $m_2 = 300\\text{ g}$ move in opposite directions along a straight line on a smooth horizontal surface with speeds $u_1 = 8\\text{ m/s}$ and $u_2 = 4\\text{ m/s}$ respectively. They collide directly and coalesce into a single body. Calculate the loss in kinetic energy resulting from the collision.",
    "questionAr": "تتحرك كرتان كتلتاهما $m_1 = 100\\text{ جم}$ و $m_2 = 300\\text{ جم}$ في اتجاهين متضادين على خط مستقيم على سطح أفقي أملس بسرعتين $u_1 = 8\\text{ م/ث}$ و $u_2 = 4\\text{ م/ث}$ على الترتيب. اصطدمت الكرتان والتحمتا في جسم واحد. احسب طاقة الحركة المفقودة نتيجة هذا التصادم.",
    "optionsEn": [
      "$5.4\\text{ Joules}$",
      "$4.8\\text{ Joules}$",
      "$5.6\\text{ Joules}$",
      "$0.2\\text{ Joules}$"
    ],
    "optionsAr": [
      "$5.4\\text{ جول}$",
      "$4.8\\text{ جول}$",
      "$5.6\\text{ جول}$",
      "$0.2\\text{ جول}$"
    ],
    "correctAnswer": "$5.4\\text{ Joules}$",
    "correctIndex": 0,
    "hintEn": "Find common velocity $v'$ using momentum conservation, then compute $\\Delta T = T_{before} - T_{after}$, where $T = \\frac{1}{2} m v^2$.",
    "hintAr": "احسب السرعة المشتركة $v'$ ببقاء كمية الحركة، ثم احسب الفقد في طاقة الحركة $\\Delta T = T_{before} - T_{after}$، حيث $T = \\frac{1}{2} m v^2$.",
    "stepByStepSolutionEn": [
      "1. Convert masses to kg: $m_1 = 0.1\\text{ kg}$, $m_2 = 0.3\\text{ kg}$.",
      "2. Set positive direction along $u_1$: $u_1 = +8\\text{ m/s}$, $u_2 = -4\\text{ m/s}$.",
      "3. Common velocity $v'$ from momentum conservation:",
      "$$m_1 u_1 + m_2 u_2 = (m_1 + m_2) v'$$",
      "$$0.1(8) + 0.3(-4) = (0.1 + 0.3) v' \\implies 0.8 - 1.2 = 0.4 v'$$",
      "$$-0.4 = 0.4 v' \\implies v' = -1\\text{ m/s} \\implies |v'| = 1\\text{ m/s}$$",
      "4. Total kinetic energy before collision:",
      "$$T_{before} = \\frac{1}{2} m_1 u_1^2 + \\frac{1}{2} m_2 u_2^2 = \\frac{1}{2}(0.1)(8^2) + \\frac{1}{2}(0.3)(4^2)$$",
      "$$T_{before} = 0.05(64) + 0.15(16) = 3.2 + 2.4 = 5.6\\text{ Joules}$$",
      "5. Kinetic energy after collision:",
      "$$T_{after} = \\frac{1}{2}(m_1 + m_2)(v')^2 = \\frac{1}{2}(0.4)(1^2) = 0.2\\text{ Joules}$$",
      "6. Loss in kinetic energy:",
      "$$\\text{Loss} = T_{before} - T_{after} = 5.6 - 0.2 = 5.4\\text{ Joules}$$"
    ],
    "stepByStepSolutionAr": [
      "١. تحويل الكتل: $m_1 = 0.1\\text{ كجم}$, $m_2 = 0.3\\text{ كجم}$.",
      "٢. فرض الاتجاه الموجب مع الأولى: $u_1 = +8\\text{ م/ث}$, $u_2 = -4\\text{ م/ث}$.",
      "٣. إيجاد السرعة المشتركة $v'$ ببقاء كمية الحركة:",
      "$$m_1 u_1 + m_2 u_2 = (m_1 + m_2) v'$$",
      "$$0.1(8) + 0.3(-4) = 0.4 v' \\implies 0.8 - 1.2 = 0.4 v'$$",
      "$$-0.4 = 0.4 v' \\implies v' = -1\\text{ م/ث (في اتجاه الكرة الثانية)}$$",
      "٤. طاقة الحركة الكلية قبل التصادم:",
      "$$T_{before} = \\frac{1}{2}(0.1)(8^2) + \\frac{1}{2}(0.3)(4^2) = 3.2 + 2.4 = 5.6\\text{ جول}$$",
      "٥. طاقة الحركة بعد التصادم للكتلة الملتصقة:",
      "$$T_{after} = \\frac{1}{2}(0.4)(1^2) = 0.2\\text{ جول}$$",
      "٦. الفقد في طاقة الحركة:",
      "$$\\text{طاقة الحركة المفقودة} = 5.6 - 0.2 = 5.4\\text{ جول}$$"
    ],
    "teacherTipEn": "In inelastic collisions, kinetic energy is always lost and dissipated into internal energy/heat, so Loss = T_before - T_after > 0.",
    "teacherTipAr": "في التصادم غير المرن تفقد طاقة حركة دائماً وتتحول لحرارة وتشوه، لذا الفقد = ط قبل - ط بعد > ٠."
  },
  {
    "id": "dyn_ch3_se_09",
    "titleEn": "MoE Example 9: Ballistic Pendulum (Bullet Embedded in Suspended Block)",
    "titleAr": "مثال الوزارة ٩: البندول القذفي (استقرار رصاصة في كتلة معلقة)",
    "difficulty": "hots",
    "questionEn": "A bullet of mass $m_1 = 20\\text{ g}$ is fired horizontally with velocity $u = 400\\text{ m/s}$ into a stationary wooden block of mass $m_2 = 1.98\\text{ kg}$ suspended by a light vertical string. The bullet embeds itself in the block. Find: (1) the common speed immediately after impact, and (2) the maximum vertical height $h$ to which the block and bullet rise ($g = 9.8\\text{ m/s}^2$).",
    "questionAr": "أُطلقت رصاصة كتلتها $m_1 = 20\\text{ جم}$ أفقياً بسرعة $u = 400\\text{ م/ث}$ على قطعة خشبية ساكنة كتلتها $m_2 = 1.98\\text{ كجم}$ معلقة بخيط رأسي خفيف، فاستقرت الرصاصة داخل القطعة الخشبية. احسب: (١) السرعة المشتركة للقطعة والرصاصة فور التصادم مباشرة، (٢) أقصى ارتفاع رأسي $h$ تصعد إليه المجموعة ($g = 9.8\\text{ م/ث²}$).",
    "optionsEn": [
      "Common Speed = $4\\text{ m/s}$, Height = $\\frac{40}{49}\\text{ m} \\approx 0.816\\text{ m}$",
      "Common Speed = $8\\text{ m/s}$, Height = $3.27\\text{ m}$",
      "Common Speed = $4\\text{ m/s}$, Height = $1.63\\text{ m}$",
      "Common Speed = $2\\text{ m/s}$, Height = $0.204\\text{ m}$"
    ],
    "optionsAr": [
      "السرعة المشتركة = $4\\text{ م/ث}$، الارتفاع = $\\frac{40}{49}\\text{ م} \\approx 0.816\\text{ م}$",
      "السرعة المشتركة = $8\\text{ م/ث}$، الارتفاع = $3.27\\text{ م}$",
      "السرعة المشتركة = $4\\text{ م/ث}$، الارتفاع = $1.63\\text{ م}$",
      "السرعة المشتركة = $2\\text{ م/ث}$، الارتفاع = $0.204\\text{ م}$"
    ],
    "correctAnswer": "Common Speed = $4\\text{ m/s}$, Height = $\\frac{40}{49}\\text{ m} \\approx 0.816\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "During collision, apply conservation of momentum to find $v'$. After collision, mechanical energy is conserved: $v'^2 = 2gh$.",
    "hintAr": "أثناء التصادم نطبق بقاء كمية الحركة لإيجاد $v'$. بعد التصادم تصعد المجموعة تحت الجاذبية: $v'^2 = 2gh$.",
    "stepByStepSolutionEn": [
      "1. Mass conversions:",
      "$$m_1 = 20\\text{ g} = 0.02\\text{ kg}, \\quad m_2 = 1.98\\text{ kg} \\implies M = m_1 + m_2 = 2.0\\text{ kg}$$",
      "2. Conservation of linear momentum during the bullet's penetration:",
      "$$m_1 u + m_2(0) = (m_1 + m_2) v'$$",
      "$$0.02 \\times 400 = 2.0 \\times v' \\implies 8 = 2 v' \\implies v' = 4\\text{ m/s}$$",
      "3. Maximum vertical height reached by the pendulum:",
      "By conservation of mechanical energy as kinetic energy converts to potential energy:",
      "$$\\frac{1}{2} M (v')^2 = M g h \\implies h = \\frac{v'^2}{2g} = \\frac{4^2}{2 \\times 9.8} = \\frac{16}{19.6} = \\frac{40}{49}\\text{ m} \\approx 0.816\\text{ m}$$"
    ],
    "stepByStepSolutionAr": [
      "١. تحويل الكتل:",
      "$$m_1 = 0.02\\text{ كجم}, \\quad m_2 = 1.98\\text{ كجم} \\implies M = m_1 + m_2 = 2.0\\text{ كجم}$$",
      "٢. مبدأ بقاء كمية الحركة أثناء انغراس الرصاصة:",
      "$$m_1 u + 0 = (m_1 + m_2) v'$$",
      "$$0.02 \\times 400 = 2.0 v' \\implies 8 = 2 v' \\implies v' = 4\\text{ م/ث}$$",
      "٣. أقصى ارتفاع رأسي تبلغه المجموعة:",
      "بتطبيق قانون بقاء الطاقة الميكانيكية (تحول طاقة الحركة لطاقة وضع):",
      "$$h = \\frac{v'^2}{2g} = \\frac{4^2}{2 \\times 9.8} = \\frac{16}{19.6} = \\frac{40}{49}\\text{ م} \\approx 0.816\\text{ م}$$"
    ],
    "teacherTipEn": "Classic exam problem! Momentum is conserved during the instantaneous impact, but mechanical energy is only conserved during the subsequent swing.",
    "teacherTipAr": "مسألة امتحانات نموذجية! كمية الحركة محفوظة أثناء لحظة التصادم والانغراس، بينما الطاقة الميكانيكية محفوظة أثناء التأرجح فقط."
  },
  {
    "id": "dyn_ch3_se_10",
    "titleEn": "MoE Example 10: Two-Stage Motion (Direct Collision Followed by Wall Rebound)",
    "titleAr": "مثال الوزارة ١٠: حركة من مرحلتين (تصادم مباشر يليه ارتداد من حائل)",
    "difficulty": "hots",
    "questionEn": "A smooth sphere $A$ of mass $m_1 = 200\\text{ g}$ moving at $u_1 = 10\\text{ m/s}$ collides directly with a stationary smooth sphere $B$ of mass $m_2 = 300\\text{ g}$. After collision, sphere $B$ moves at $8\\text{ m/s}$ towards a smooth vertical barrier $1.6\\text{ m}$ away. Sphere $B$ rebounds from the barrier with speed $6\\text{ m/s}$. Find: (1) the velocity of sphere $A$ after the first collision, and (2) the impulse of the barrier on sphere $B$.",
    "questionAr": "كرة ملساء $A$ كتلتها $m_1 = 200\\text{ جم}$ تتحرك بسرعة $u_1 = 10\\text{ م/ث}$ اصطدمت تصادماً مباشراً بكرة ملساء ساكنة $B$ كتلتها $m_2 = 300\\text{ جم}$. فتحركت الكرة $B$ بعد التصادم بسرعة $8\\text{ م/ث}$ نحو حائل رأسي أملس يبعد عنها $1.6\\text{ م}$ وارتدت من الحائل بسرعة $6\\text{ م/ث}$. أوجد: (١) سرعة الكرة $A$ بعد التصادم الأول، (٢) دفع الحائل على الكرة $B$.",
    "optionsEn": [
      "Velocity of A = $-2\\text{ m/s}$ (rebounds), Barrier Impulse = $4.2\\text{ N}\\cdot\\text{s}$",
      "Velocity of A = $+2\\text{ m/s}$, Barrier Impulse = $0.6\\text{ N}\\cdot\\text{s}$",
      "Velocity of A = $-2\\text{ m/s}$ (rebounds), Barrier Impulse = $2.1\\text{ N}\\cdot\\text{s}$",
      "Velocity of A = $-1\\text{ m/s}$ (rebounds), Barrier Impulse = $4.2\\text{ N}\\cdot\\text{s}$"
    ],
    "optionsAr": [
      "سرعة A = $-2\\text{ م/ث}$ (ارتدت)، دفع الحائل = $4.2\\text{ نيوتن.ث}$",
      "سرعة A = $+2\\text{ م/ث}$، دفع الحائل = $0.6\\text{ نيوتن.ث}$",
      "سرعة A = $-2\\text{ م/ث}$ (ارتدت)، دفع الحائل = $2.1\\text{ نيوتن.ث}$",
      "سرعة A = $-1\\text{ م/ث}$ (ارتدت)، دفع الحائل = $4.2\\text{ نيوتن.ث}$"
    ],
    "correctAnswer": "Velocity of A = $-2\\text{ m/s}$ (rebounds), Barrier Impulse = $4.2\\text{ N}\\cdot\\text{s}$",
    "correctIndex": 0,
    "hintEn": "Use conservation of momentum for the sphere-sphere collision: $m_1 u_1 = m_1 v_1' + m_2 v_2'$. Then for the barrier impact, $I = m_2(v_{rebound} - (-v_{approach}))$.",
    "hintAr": "استخدم بقاء كمية الحركة لتصادم الكرتين: $m_1 u_1 = m_1 v_1' + m_2 v_2'$. ثم لتصادم الحائل: $I = m_2(v_{rebound} - (-v_{approach}))$.",
    "stepByStepSolutionEn": [
      "1. First collision (between spheres $A$ and $B$):",
      "$$m_1 u_1 + m_2(0) = m_1 v_1' + m_2 v_2'$$",
      "$$200(10) + 0 = 200(v_1') + 300(8)$$",
      "$$2000 = 200 v_1' + 2400 \\implies 200 v_1' = -400 \\implies v_1' = -2\\text{ m/s}$$",
      "Thus, sphere $A$ rebounds in the opposite direction at $2\\text{ m/s}$.",
      "2. Collision of sphere $B$ with the vertical barrier:",
      "Sphere $B$ approaches the barrier at $8\\text{ m/s}$ and rebounds at $6\\text{ m/s}$.",
      "$$I_{barrier} = m_2(v_2'' - (-v_2')) = 0.3\\text{ kg} \\times (6 + 8) = 0.3 \\times 14 = 4.2\\text{ N}\\cdot\\text{s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. التصادم الأول بين الكرتين $A$ و $B$:",
      "$$m_1 u_1 + 0 = m_1 v_1' + m_2 v_2'$$",
      "$$200(10) = 200 v_1' + 300(8)$$",
      "$$2000 = 200 v_1' + 2400 \\implies 200 v_1' = -400 \\implies v_1' = -2\\text{ م/ث}$$",
      "إذن ترتد الكرة $A$ في الاتجاه المعاكس بسرعة $2\\text{ م/ث}$.",
      "٢. تصادم الكرة $B$ بالحائل الرأسي:",
      "تقترب الكرة $B$ من الحائل بسرعة $8\\text{ م/ث}$ وترتد بسرعة $6\\text{ م/ث}$:",
      "$$I_{barrier} = m_2(v_2'' - (-v_2')) = 0.3\\text{ كجم} \\times (6 + 8) = 0.3 \\times 14 = 4.2\\text{ نيوتن.ث}$$"
    ],
    "teacherTipEn": "Notice the sign change: v1' = -2 m/s means sphere A reverses its direction of motion. In the barrier collision, the two velocities also have opposite signs.",
    "teacherTipAr": "لاحظ الإشارة السالبة لـ ع١' تعني أن الكرة A عكست اتجاه حركتها، وفي تصادم الحائل تنعكس إشارة السرعة أيضاً."
  }
];

export const dynCh3Exercises: SolvedProblem[] = [
  {
    "id": "dyn_ch3_ex_01",
    "titleEn": "Exercise 1: Basic Impulse and Unit Conversion",
    "titleAr": "تمرين ١: الدفع الأساسي وتحويل الوحدات",
    "difficulty": "easy",
    "questionEn": "A force of magnitude $F = 50\\text{ N}$ acts on a body for a time interval $\\Delta t = 0.1\\text{ seconds}$. Find the impulse in $\\text{N}\\cdot\\text{s}$ and in $\\text{dyne}\\cdot\\text{s}$.",
    "questionAr": "أثرت قوة مقدارها $F = 50\\text{ نيوتن}$ على جسم لفترة زمنية $\\Delta t = 0.1\\text{ ثانية}$. أوجد مقدار الدفع بوحدة $\\text{نيوتن.ث}$ وبوحدة $\\text{داين.ث}$.",
    "optionsEn": [
      "$5\\text{ N}\\cdot\\text{s} = 5\\times 10^5\\text{ dyne}\\cdot\\text{s}$",
      "$50\\text{ N}\\cdot\\text{s} = 5\\times 10^6\\text{ dyne}\\cdot\\text{s}$",
      "$0.5\\text{ N}\\cdot\\text{s} = 5\\times 10^4\\text{ dyne}\\cdot\\text{s}$",
      "$5\\text{ N}\\cdot\\text{s} = 5\\times 10^3\\text{ dyne}\\cdot\\text{s}$"
    ],
    "optionsAr": [
      "$5\\text{ نيوتن.ث} = 5\\times 10^5\\text{ داين.ث}$",
      "$50\\text{ نيوتن.ث} = 5\\times 10^6\\text{ داين.ث}$",
      "$0.5\\text{ نيوتن.ث} = 5\\times 10^4\\text{ داين.ث}$",
      "$5\\text{ نيوتن.ث} = 5\\times 10^3\\text{ داين.ث}$"
    ],
    "correctAnswer": "$5\\text{ N}\\cdot\\text{s} = 5\\times 10^5\\text{ dyne}\\cdot\\text{s}$",
    "correctIndex": 0,
    "hintEn": "$1\\text{ N} = 10^5\\text{ dynes}$. Therefore, $1\\text{ N}\\cdot\\text{s} = 10^5\\text{ dyne}\\cdot\\text{s}$.",
    "hintAr": "$1\\text{ نيوتن} = 10^5\\text{ داين}$. وبالتالي فإن $1\\text{ نيوتن.ث} = 10^5\\text{ داين.ث}$.",
    "stepByStepSolutionEn": [
      "1. Calculate impulse in SI units:",
      "$$I = F \\Delta t = 50 \\times 0.1 = 5\\text{ N}\\cdot\\text{s}$$",
      "2. Convert to dynes.second:",
      "$$I = 5 \\times 10^5\\text{ dyne}\\cdot\\text{s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب الدفع بالنظام الدولي:",
      "$$I = F \\Delta t = 50 \\times 0.1 = 5\\text{ نيوتن.ث}$$",
      "٢. التحويل لوحدة داين.ثانية:",
      "$$I = 5 \\times 10^5\\text{ داين.ث}$$"
    ],
    "teacherTipEn": "1 Newton = 10^5 dynes, 1 Joule = 10^7 ergs. Master these conversions for Thanaweya exams.",
    "teacherTipAr": "١ نيوتن = ١٠^٥ داين، ١ جول = ١٠^٧ إرج. احفظ هذه التحويلات جيداً."
  },
  {
    "id": "dyn_ch3_ex_02",
    "titleEn": "Exercise 2: Powder Impulse on a Bullet in Gun Barrel",
    "titleAr": "تمرين ٢: دفع الغاز على رصاصة داخل ماسورة البندقية",
    "difficulty": "easy",
    "questionEn": "A bullet of mass $m = 50\\text{ g}$ is fired from a rifle barrel, emerging with muzzle velocity $v = 300\\text{ m/s}$. Assuming the bullet started from rest, find the magnitude of the impulse exerted by the expanding gases on the bullet.",
    "questionAr": "أُطلقت رصاصة كتلتها $m = 50\\text{ جم}$ من ماسورة بندقية فخرجت منها بسرعة $v = 300\\text{ م/ث}$. بافتراض أن الرصاصة بدأت حركتها من السكون، احسب مقدار دفع الغازات المتمددة على الرصاصة.",
    "optionsEn": [
      "$15\\text{ N}\\cdot\\text{s}$",
      "$15000\\text{ N}\\cdot\\text{s}$",
      "$1.5\\text{ N}\\cdot\\text{s}$",
      "$30\\text{ N}\\cdot\\text{s}$"
    ],
    "optionsAr": [
      "$15\\text{ نيوتن.ث}$",
      "$15000\\text{ نيوتن.ث}$",
      "$1.5\\text{ نيوتن.ث}$",
      "$30\\text{ نيوتن.ث}$"
    ],
    "correctAnswer": "$15\\text{ N}\\cdot\\text{s}$",
    "correctIndex": 0,
    "hintEn": "Convert mass to kg: $m = 0.05\\text{ kg}$. Impulse is the change in momentum: $I = m(v - 0)$.",
    "hintAr": "حول الكتلة إلى كجم: $m = 0.05\\text{ كجم}$. الدفع هو التغير في كمية الحركة: $I = m(v - 0)$.",
    "stepByStepSolutionEn": [
      "1. Convert mass to kilograms: $m = 50\\text{ g} = 0.05\\text{ kg}$.",
      "2. Calculate the impulse from change in momentum:",
      "$$I = \\Delta p = m(v - v_0) = 0.05(300 - 0) = 15\\text{ kg}\\cdot\\text{m/s} = 15\\text{ N}\\cdot\\text{s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. تحويل الكتلة لكيلوجرام: $m = 0.05\\text{ كجم}$.",
      "٢. حساب الدفع من التغير في كمية الحركة:",
      "$$I = \\Delta p = m(v - v_0) = 0.05(300 - 0) = 15\\text{ كجم.م/ث} = 15\\text{ نيوتن.ث}$$"
    ],
    "teacherTipEn": "Impulse units N.s and momentum units kg.m/s are dimensionally identical: 1 N.s = 1 kg.m/s.",
    "teacherTipAr": "وحدة الدفع (نيوتن.ث) تكافئ تماماً وحدة كمية الحركة (كجم.م/ث)."
  },
  {
    "id": "dyn_ch3_ex_03",
    "titleEn": "Exercise 3: Coalescing Bodies Moving in the Same Direction",
    "titleAr": "تمرين ٣: التحام جسمين يتحركان في نفس الاتجاه",
    "difficulty": "easy",
    "questionEn": "Two bodies of masses $m_1 = 1\\text{ kg}$ and $m_2 = 2\\text{ kg}$ move along a smooth horizontal line in the same direction with speeds $u_1 = 6\\text{ m/s}$ and $u_2 = 3\\text{ m/s}$ respectively. They collide and move together as one body. Find their common speed after collision.",
    "questionAr": "يتحرك جسمان كتلتاهما $m_1 = 1\\text{ كجم}$ و $m_2 = 2\\text{ كجم}$ على خط مستقيم أفقي أملس في نفس الاتجاه بسرعتين $u_1 = 6\\text{ م/ث}$ و $u_2 = 3\\text{ م/ث}$ على الترتيب. اصطدم الجسمان وتحركا معاً كجسم واحد. أوجد سرعتهما المشتركة بعد التصادم.",
    "optionsEn": [
      "$4\\text{ m/s}$",
      "$4.5\\text{ m/s}$",
      "$3.5\\text{ m/s}$",
      "$5\\text{ m/s}$"
    ],
    "optionsAr": [
      "$4\\text{ م/ث}$",
      "$4.5\\text{ م/ث}$",
      "$3.5\\text{ م/ث}$",
      "$5\\text{ م/ث}$"
    ],
    "correctAnswer": "$4\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "$m_1 u_1 + m_2 u_2 = (m_1 + m_2) v'$.",
    "hintAr": "$m_1 u_1 + m_2 u_2 = (m_1 + m_2) v'$.",
    "stepByStepSolutionEn": [
      "1. Conservation of momentum:",
      "$$m_1 u_1 + m_2 u_2 = (m_1 + m_2) v'$$",
      "$$1(6) + 2(3) = (1 + 2) v' \\implies 6 + 6 = 3 v'$$",
      "$$12 = 3 v' \\implies v' = 4\\text{ m/s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قانون بقاء كمية الحركة:",
      "$$m_1 u_1 + m_2 u_2 = (m_1 + m_2) v'$$",
      "$$1(6) + 2(3) = (1 + 2) v' \\implies 6 + 6 = 3 v'$$",
      "$$12 = 3 v' \\implies v' = 4\\text{ م/ث}$$"
    ],
    "teacherTipEn": "Because both are moving in the same direction, both initial velocities have the same sign (+).",
    "teacherTipAr": "بما أن الجسمين يتحركان في نفس الاتجاه، فإن لكلتا السرعتين الابتدائيتين نفس الإشارة الموجبة."
  },
  {
    "id": "dyn_ch3_ex_04",
    "titleEn": "Exercise 4: Constant Retarding Force and Final Velocity",
    "titleAr": "تمرين ٤: قوة مقاومة ثابتة وتعيين السرعة النهائية",
    "difficulty": "medium",
    "questionEn": "A body of mass $m = 4\\text{ kg}$ is moving in a straight line with speed $u = 15\\text{ m/s}$. A constant opposing force $F = 20\\text{ N}$ acts on it for $\\Delta t = 2\\text{ s}$. Find the final velocity of the body.",
    "questionAr": "جسم كتلته $m = 4\\text{ كجم}$ يتحرك في خط مستقيم بسرعة $u = 15\\text{ م/ث}$. أثرت عليه قوة مقاومة ثابتة مقدارها $F = 20\\text{ نيوتن}$ في عكس اتجاه حركته لمدة $\\Delta t = 2\\text{ ثانية}$. أوجد السرعة النهائية للجسم.",
    "optionsEn": [
      "$5\\text{ m/s}$ in the original direction",
      "$10\\text{ m/s}$ in the original direction",
      "$-5\\text{ m/s}$ (reversed)",
      "$0\\text{ m/s}$ (at rest)"
    ],
    "optionsAr": [
      "$5\\text{ م/ث}$ في نفس الاتجاه الأصلي",
      "$10\\text{ م/ث}$ في نفس الاتجاه الأصلي",
      "$-5\\text{ م/ث}$ (عكس الاتجاه)",
      "$0\\text{ م/ث}$ (يسكن تماماً)"
    ],
    "correctAnswer": "$5\\text{ m/s}$ in the original direction",
    "correctIndex": 0,
    "hintEn": "The opposing force exerts negative impulse: $I = -F \\Delta t = m(v - u)$.",
    "hintAr": "القوة المضادة تحدث دفعاً سالباً: $I = -F \\Delta t = m(v - u)$.",
    "stepByStepSolutionEn": [
      "1. Opposing force impulse:",
      "$$I = -F \\Delta t = -20 \\times 2 = -40\\text{ N}\\cdot\\text{s}$$",
      "2. Apply impulse-momentum theorem:",
      "$$I = m(v - u) \\implies -40 = 4(v - 15)$$",
      "$$-10 = v - 15 \\implies v = 15 - 10 = 5\\text{ m/s}$$",
      "The body continues in its original direction with reduced speed $5\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب الدفع المضاد:",
      "$$I = -F \\Delta t = -20 \\times 2 = -40\\text{ نيوتن.ث}$$",
      "٢. تطبيق نظرية الدفع وكمية الحركة:",
      "$$I = m(v - u) \\implies -40 = 4(v - 15)$$",
      "$$-10 = v - 15 \\implies v = 15 - 10 = 5\\text{ م/ث}$$",
      "يواصل الجسم حركته في نفس الاتجاه بسرعة متناقصة قدرها $5\\text{ م/ث}$."
    ],
    "teacherTipEn": "Always keep track of signs: opposing forces cause negative acceleration and negative impulse.",
    "teacherTipAr": "انتبه دائماً للإشارات: القوة المعاكسة تحدث عجلة سالبة ودفعاً سالباً."
  },
  {
    "id": "dyn_ch3_ex_05",
    "titleEn": "Exercise 5: Ball Dropped onto Ground and Clean Rebound",
    "titleAr": "تمرين ٥: ارتداد كرة ساقطة وحساب الدفع وقوة التصادم",
    "difficulty": "medium",
    "questionEn": "A ball of mass $m = 250\\text{ g}$ falls from rest from a height of $4.9\\text{ m}$ onto horizontal ground and rebounds to a height of $1.225\\text{ m}$. If the contact time is $\\Delta t = 0.05\\text{ s}$, find the impulse exerted by the ground on the ball and the average impulsive force ($g = 9.8\\text{ m/s}^2$).",
    "questionAr": "سقطت كرة كتلتها $m = 250\\text{ جم}$ من السكون من ارتفاع $4.9\\text{ م}$ على أرض أفقية فارتدت إلى ارتفاع $1.225\\text{ م}$. فإذا كان زمن التلامس $\\Delta t = 0.05\\text{ ث}$، احسب دفع الأرض على الكرة ومتوسط القوة الدفعية ($g = 9.8\\text{ م/ث²}$).",
    "optionsEn": [
      "Impulse = $3.675\\text{ N}\\cdot\\text{s}$, Force = $73.5\\text{ N}$",
      "Impulse = $1.225\\text{ N}\\cdot\\text{s}$, Force = $24.5\\text{ N}$",
      "Impulse = $3.675\\text{ N}\\cdot\\text{s}$, Force = $75.95\\text{ N}$",
      "Impulse = $2.45\\text{ N}\\cdot\\text{s}$, Force = $49\\text{ N}$"
    ],
    "optionsAr": [
      "الدفع = $3.675\\text{ نيوتن.ث}$، القوة = $73.5\\text{ نيوتن}$",
      "الدفع = $1.225\\text{ نيوتن.ث}$، القوة = $24.5\\text{ نيوتن}$",
      "الدفع = $3.675\\text{ نيوتن.ث}$، القوة = $75.95\\text{ نيوتن}$",
      "الدفع = $2.45\\text{ نيوتن.ث}$، القوة = $49\\text{ نيوتن}$"
    ],
    "correctAnswer": "Impulse = $3.675\\text{ N}\\cdot\\text{s}$, Force = $73.5\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Impact speed $v_1 = \\sqrt{2gh_1} = 9.8\\text{ m/s}$. Rebound speed $v_2 = \\sqrt{2gh_2} = 4.9\\text{ m/s}$. Impulse $I = m(v_2 + v_1)$.",
    "hintAr": "سرعة السقوط $v_1 = \\sqrt{2gh_1} = 9.8\\text{ م/ث}$. سرعة الارتداد $v_2 = \\sqrt{2gh_2} = 4.9\\text{ م/ث}$. الدفع $I = m(v_2 + v_1)$.",
    "stepByStepSolutionEn": [
      "1. Velocity just before impact:",
      "$$v_1 = \\sqrt{2 \\times 9.8 \\times 4.9} = \\sqrt{96.04} = 9.8\\text{ m/s (downwards)}$$",
      "2. Velocity just after rebound:",
      "$$v_2 = \\sqrt{2 \\times 9.8 \\times 1.225} = \\sqrt{24.01} = 4.9\\text{ m/s (upwards)}$$",
      "3. Impulse of ground on ball ($m = 0.25\\text{ kg}$):",
      "$$I = m(v_2 - (-v_1)) = 0.25(4.9 + 9.8) = 0.25(14.7) = 3.675\\text{ N}\\cdot\\text{s}$$",
      "4. Average impulsive force:",
      "$$F = \\frac{I}{\\Delta t} = \\frac{3.675}{0.05} = 73.5\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "١. سرعة الوصول للأرض قبل التصادم:",
      "$$v_1 = \\sqrt{2 \\times 9.8 \\times 4.9} = \\sqrt{96.04} = 9.8\\text{ م/ث (لأسفل)}$$",
      "٢. سرعة الارتداد لأعلى:",
      "$$v_2 = \\sqrt{2 \\times 9.8 \\times 1.225} = \\sqrt{24.01} = 4.9\\text{ م/ث (لأعلى)}$$",
      "٣. دفع الأرض على الكرة ($m = 0.25\\text{ كجم}$):",
      "$$I = m(v_2 - (-v_1)) = 0.25(4.9 + 9.8) = 0.25 \\times 14.7 = 3.675\\text{ نيوتن.ث}$$",
      "٤. متوسط القوة الدفعية:",
      "$$F = \\frac{I}{\\Delta t} = \\frac{3.675}{0.05} = 73.5\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "Notice the exact arithmetic: 2 * 9.8 * 4.9 = 96.04, whose square root is precisely 9.8 m/s.",
    "teacherTipAr": "لاحظ الأرقام بدقة: ٢ × ٩٫٨ × ٤٫٩ = ٩٦٫٠٤ وجذرها الدقيق هو ٩٫٨ م/ث."
  },
  {
    "id": "dyn_ch3_ex_06",
    "titleEn": "Exercise 6: Variable Force with Linear Time Function",
    "titleAr": "تمرين ٦: قوة متغيرة دالة خطية في الزمن",
    "difficulty": "medium",
    "questionEn": "A force $F = (6t - 2)\\text{ N}$ acts on a body of mass $m = 5\\text{ kg}$ from $t = 0$ to $t = 4\\text{ s}$. Find the impulse of this force over this interval and the change in velocity of the body.",
    "questionAr": "أثرت قوة $F = (6t - 2)\\text{ نيوتن}$ على جسم كتلته $m = 5\\text{ كجم}$ في الفترة من $t = 0$ إلى $t = 4\\text{ ث}$. احسب دفع هذه القوة خلال هذه الفترة والتغير في سرعة الجسم.",
    "optionsEn": [
      "Impulse = $40\\text{ N}\\cdot\\text{s}$, $\\Delta v = 8\\text{ m/s}$",
      "Impulse = $48\\text{ N}\\cdot\\text{s}$, $\\Delta v = 9.6\\text{ m/s}$",
      "Impulse = $40\\text{ N}\\cdot\\text{s}$, $\\Delta v = 200\\text{ m/s}$",
      "Impulse = $32\\text{ N}\\cdot\\text{s}$, $\\Delta v = 6.4\\text{ m/s}$"
    ],
    "optionsAr": [
      "الدفع = $40\\text{ نيوتن.ث}$، $\\Delta v = 8\\text{ م/ث}$",
      "الدفع = $48\\text{ نيوتن.ث}$، $\\Delta v = 9.6\\text{ م/ث}$",
      "الدفع = $40\\text{ نيوتن.ث}$، $\\Delta v = 200\\text{ م/ث}$",
      "الدفع = $32\\text{ نيوتن.ث}$، $\\Delta v = 6.4\\text{ م/ث}$"
    ],
    "correctAnswer": "Impulse = $40\\text{ N}\\cdot\\text{s}$, $\\Delta v = 8\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "$I = \\int_0^4 (6t - 2) dt = [3t^2 - 2t]_0^4$, then $\\Delta v = I / m$.",
    "hintAr": "$I = \\int_0^4 (6t - 2) dt = [3t^2 - 2t]_0^4$، ثم $\\Delta v = I / m$.",
    "stepByStepSolutionEn": [
      "1. Evaluate the definite integral for impulse:",
      "$$I = \\int_0^4 (6t - 2) dt = \\left[ 3t^2 - 2t \\right]_0^4 = (3(16) - 2(4)) - 0 = 48 - 8 = 40\\text{ N}\\cdot\\text{s}$$",
      "2. Calculate the change in velocity:",
      "$$\\Delta v = \\frac{I}{m} = \\frac{40}{5} = 8\\text{ m/s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب التكامل المحدد لإيجاد الدفع:",
      "$$I = \\int_0^4 (6t - 2) dt = \\left[ 3t^2 - 2t \\right]_0^4 = 3(16) - 2(4) = 48 - 8 = 40\\text{ نيوتن.ث}$$",
      "٢. حساب التغير في سرعة الجسم:",
      "$$\\Delta v = \\frac{I}{m} = \\frac{40}{5} = 8\\text{ م/ث}$$"
    ],
    "teacherTipEn": "Whenever F is given in terms of t, immediately integrate with respect to t to find impulse.",
    "teacherTipAr": "كلما أعطيت القوة كدالة في الزمن ن، كامل مباشرة بالنسبة إلى ن لإيجاد الدفع."
  },
  {
    "id": "dyn_ch3_ex_07",
    "titleEn": "Exercise 7: Rebound from Ceiling and Thrust Force",
    "titleAr": "تمرين ٧: ارتداد من السقف وحساب قوة الضغط على السقف",
    "difficulty": "medium",
    "questionEn": "A ball of mass $m = 200\\text{ g}$ strikes the ceiling of a room moving vertically upwards at $6\\text{ m/s}$ and rebounds downwards at $4\\text{ m/s}$. If the collision lasts $\\Delta t = 0.05\\text{ s}$, find the total thrust on the ceiling ($g = 9.8\\text{ m/s}^2$).",
    "questionAr": "اصطدمت كرة كتلتها $m = 200\\text{ جم}$ بسقف حجرة وهي تتحرك رأسياً لأعلى بسرعة $6\\text{ م/ث}$ وارتدت لأسفل بسرعة $4\\text{ م/ث}$. فإذا استغرق التصادم $\\Delta t = 0.05\\text{ ث}$، احسب الضغط الكلي على السقف ($g = 9.8\\text{ م/ث²}$).",
    "optionsEn": [
      "$38.04\\text{ N}$",
      "$41.96\\text{ N}$",
      "$40\\text{ N}$",
      "$19.04\\text{ N}$"
    ],
    "optionsAr": [
      "$38.04\\text{ نيوتن}$",
      "$41.96\\text{ نيوتن}$",
      "$40\\text{ نيوتن}$",
      "$19.04\\text{ نيوتن}$"
    ],
    "correctAnswer": "$38.04\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Find impulsive force $F = I / \\Delta t$, then at the ceiling, thrust is $N = F - mg$.",
    "hintAr": "احسب القوة الدفعية $F = I / \\Delta t$، ثم عند السقف يكون الضغط $N = F - mg$.",
    "stepByStepSolutionEn": [
      "1. Impulse on the ball ($m = 0.2\\text{ kg}$):",
      "$$I = m(v_2 - (-v_1)) = 0.2(4 + 6) = 0.2(10) = 2\\text{ N}\\cdot\\text{s}$$",
      "2. Average impulsive force:",
      "$$F = \\frac{I}{\\Delta t} = \\frac{2}{0.05} = 40\\text{ N}$$",
      "3. Total thrust on ceiling ($N = F - mg$):",
      "$$N = 40 - (0.2 \\times 9.8) = 40 - 1.96 = 38.04\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب دفع السقف على الكرة ($m = 0.2\\text{ كجم}$):",
      "$$I = m(v_2 - (-v_1)) = 0.2(4 + 6) = 0.2 \\times 10 = 2\\text{ نيوتن.ث}$$",
      "٢. القوة الدفعية المتوسطة:",
      "$$F = \\frac{I}{\\Delta t} = \\frac{2}{0.05} = 40\\text{ نيوتن}$$",
      "٣. الضغط الكلي على السقف ($N = F - mg$):",
      "$$N = 40 - (0.2 \\times 9.8) = 40 - 1.96 = 38.04\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "Common pitfall: Adding the weight on the ceiling! Remember weight acts downwards away from the ceiling, so subtract mg.",
    "teacherTipAr": "خطأ شائع: جمع الوزن عند السقف! تذكر أن الوزن لأسفل بعيداً عن السقف، فيُطرح من القوة الدفعية."
  },
  {
    "id": "dyn_ch3_ex_08",
    "titleEn": "Exercise 8: Rebound Velocity in Head-On Collision",
    "titleAr": "تمرين ٨: تعيين سرعة الارتداد في تصادم رأسي مباشر",
    "difficulty": "medium",
    "questionEn": "Two spheres of masses $m_1 = 300\\text{ g}$ and $m_2 = 500\\text{ g}$ move towards each other at speeds $u_1 = 4\\text{ m/s}$ and $u_2 = 2\\text{ m/s}$. After direct collision, the first sphere rebounds with speed $v_1' = 1\\text{ m/s}$. Find the velocity of the second sphere after collision.",
    "questionAr": "تتحرك كرتان كتلتاهما $m_1 = 300\\text{ جم}$ و $m_2 = 500\\text{ جم}$ في اتجاهين متضادين بسرعتين $u_1 = 4\\text{ م/ث}$ و $u_2 = 2\\text{ م/ث}$. وبعد التصادم المباشر ارتدت الكرة الأولى بسرعة $v_1' = 1\\text{ م/ث}$. أوجد سرعة الكرة الثانية بعد التصادم.",
    "optionsEn": [
      "$1\\text{ m/s}$ in original direction of the first sphere",
      "$2\\text{ m/s}$ in original direction of the first sphere",
      "$1\\text{ m/s}$ in original direction of the second sphere",
      "$0.6\\text{ m/s}$ in original direction of the first sphere"
    ],
    "optionsAr": [
      "$1\\text{ م/ث}$ في الاتجاه الأصلي للأولى",
      "$2\\text{ م/ث}$ في الاتجاه الأصلي للأولى",
      "$1\\text{ م/ث}$ في الاتجاه الأصلي للثانية",
      "$0.6\\text{ م/ث}$ في الاتجاه الأصلي للأولى"
    ],
    "correctAnswer": "$1\\text{ m/s}$ in original direction of the first sphere",
    "correctIndex": 0,
    "hintEn": "Set positive direction along $u_1$: $u_1 = +4$, $u_2 = -2$, $v_1' = -1$. Apply $m_1 u_1 + m_2 u_2 = m_1 v_1' + m_2 v_2'$.",
    "hintAr": "افرض الاتجاه الموجب مع الأولى: $u_1 = +4$، $u_2 = -2$، $v_1' = -1$. طبق $m_1 u_1 + m_2 u_2 = m_1 v_1' + m_2 v_2'$.",
    "stepByStepSolutionEn": [
      "1. Conservation of momentum:",
      "$$300(4) + 500(-2) = 300(-1) + 500(v_2')$$",
      "$$1200 - 1000 = -300 + 500 v_2'$$",
      "$$200 = -300 + 500 v_2' \\implies 500 v_2' = 500 \\implies v_2' = +1\\text{ m/s}$$",
      "The positive sign indicates motion in the original direction of the first sphere."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قانون بقاء كمية الحركة:",
      "$$300(4) + 500(-2) = 300(-1) + 500(v_2')$$",
      "$$1200 - 1000 = -300 + 500 v_2'$$",
      "$$200 = -300 + 500 v_2' \\implies 500 v_2' = 500 \\implies v_2' = +1\\text{ م/ث}$$",
      "الإشارة الموجبة تدل على أنها تحركت في نفس الاتجاه الأصلي للكرة الأولى."
    ],
    "teacherTipEn": "Always specify the direction relative to a chosen reference direction.",
    "teacherTipAr": "حدد دائماً الاتجاه بدقة نسبة إلى الاتجاه المرجعي المختار."
  },
  {
    "id": "dyn_ch3_ex_09",
    "titleEn": "Exercise 9: Kinetic Energy Lost When Striking a Body at Rest",
    "titleAr": "تمرين ٩: الطاقة المفقودة عند اصطدام جسم بجسم ساكن والتحامهما",
    "difficulty": "medium",
    "questionEn": "A body of mass $m_1 = 2\\text{ kg}$ moving at $u_1 = 6\\text{ m/s}$ collides with a stationary body of mass $m_2 = 3\\text{ kg}$. They coalesce into a single body. Find the kinetic energy lost due to collision.",
    "questionAr": "جسم كتلته $m_1 = 2\\text{ كجم}$ يتحرك بسرعة $u_1 = 6\\text{ م/ث}$ اصطدم بجسم ساكن كتلته $m_2 = 3\\text{ كجم}$ والتحما معاً. أوجد طاقة الحركة المفقودة نتيجة التصادم.",
    "optionsEn": [
      "$21.6\\text{ Joules}$",
      "$14.4\\text{ Joules}$",
      "$36\\text{ Joules}$",
      "$18\\text{ Joules}$"
    ],
    "optionsAr": [
      "$21.6\\text{ جول}$",
      "$14.4\\text{ جول}$",
      "$36\\text{ جول}$",
      "$18\\text{ جول}$"
    ],
    "correctAnswer": "$21.6\\text{ Joules}$",
    "correctIndex": 0,
    "hintEn": "Common velocity $v' = \\frac{m_1 u_1}{m_1 + m_2}$. Loss $= \\frac{1}{2} m_1 u_1^2 - \\frac{1}{2} (m_1 + m_2) v'^2$.",
    "hintAr": "السرعة المشتركة $v' = \\frac{m_1 u_1}{m_1 + m_2}$. الفقد $= \\frac{1}{2} m_1 u_1^2 - \\frac{1}{2} (m_1 + m_2) v'^2$.",
    "stepByStepSolutionEn": [
      "1. Common velocity:",
      "$$v' = \\frac{2 \\times 6}{2 + 3} = \\frac{12}{5} = 2.4\\text{ m/s}$$",
      "2. Kinetic energy before collision:",
      "$$T_1 = \\frac{1}{2}(2)(6^2) = 36\\text{ J}$$",
      "3. Kinetic energy after collision:",
      "$$T_2 = \\frac{1}{2}(5)(2.4^2) = 2.5 \\times 5.76 = 14.4\\text{ J}$$",
      "4. Loss in kinetic energy:",
      "$$\\text{Loss} = T_1 - T_2 = 36 - 14.4 = 21.6\\text{ Joules}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب السرعة المشتركة:",
      "$$v' = \\frac{2 \\times 6}{2 + 3} = \\frac{12}{5} = 2.4\\text{ م/ث}$$",
      "٢. طاقة الحركة قبل التصادم:",
      "$$T_1 = \\frac{1}{2}(2)(6^2) = 36\\text{ جول}$$",
      "٣. طاقة الحركة بعد التصادم:",
      "$$T_2 = \\frac{1}{2}(5)(2.4^2) = 2.5 \\times 5.76 = 14.4\\text{ جول}$$",
      "٤. الفقد في طاقة الحركة:",
      "$$\\text{الفقد} = 36 - 14.4 = 21.6\\text{ جول}$$"
    ],
    "teacherTipEn": "A shortcut formula for coalescing when second body is at rest: Loss = (1/2) * (m1*m2 / (m1+m2)) * u1^2 = (1/2) * (6/5) * 36 = 21.6 J.",
    "teacherTipAr": "قانون سريع لفقد طاقة الحركة عند سكون الثاني: الفقد = ٠٫٥ × (ك١ × ك٢ / (ك١ + ك٢)) × ع١² = ٠٫٥ × (٦ / ٥) × ٣٦ = ٢١٫٦ جول."
  },
  {
    "id": "dyn_ch3_ex_10",
    "titleEn": "Exercise 10: Mutual Impulse Between Colliding Spheres",
    "titleAr": "تمرين ١٠: الدفع المتبادل بين كرتين متصادمتين",
    "difficulty": "medium",
    "questionEn": "A sphere of mass $m_1 = 400\\text{ g}$ moving at $5\\text{ m/s}$ collides directly with a stationary sphere of mass $m_2 = 600\\text{ g}$. If the second sphere moves at $4\\text{ m/s}$ after collision, find the impulse exerted on the second sphere and the velocity of the first sphere after collision.",
    "questionAr": "كرة كتلتها $m_1 = 400\\text{ جم}$ تتحرك بسرعة $5\\text{ م/ث}$ اصطدمت مباشرة بكرة ساكنة كتلتها $m_2 = 600\\text{ جم}$. فإذا تحركت الكرة الثانية بسرعة $4\\text{ م/ث}$ بعد التصادم، أوجد الدفع المؤثر على الكرة الثانية وسرعة الكرة الأولى بعد التصادم.",
    "optionsEn": [
      "Impulse = $2.4\\text{ N}\\cdot\\text{s}$, Velocity of first = $-1\\text{ m/s}$ (rebounds)",
      "Impulse = $2.4\\text{ N}\\cdot\\text{s}$, Velocity of first = $+1\\text{ m/s}$",
      "Impulse = $1.2\\text{ N}\\cdot\\text{s}$, Velocity of first = $-1\\text{ m/s}$",
      "Impulse = $3.6\\text{ N}\\cdot\\text{s}$, Velocity of first = $-2\\text{ m/s}$"
    ],
    "optionsAr": [
      "الدفع = $2.4\\text{ نيوتن.ث}$، سرعة الأولى = $-1\\text{ م/ث}$ (ارتدت)",
      "الدفع = $2.4\\text{ نيوتن.ث}$، سرعة الأولى = $+1\\text{ م/ث}$",
      "الدفع = $1.2\\text{ نيوتن.ث}$، سرعة الأولى = $-1\\text{ م/ث}$",
      "الدفع = $3.6\\text{ نيوتن.ث}$، سرعة الأولى = $-2\\text{ م/ث}$"
    ],
    "correctAnswer": "Impulse = $2.4\\text{ N}\\cdot\\text{s}$, Velocity of first = $-1\\text{ m/s}$ (rebounds)",
    "correctIndex": 0,
    "hintEn": "Impulse on second sphere is $I = m_2(v_2' - 0)$. Conservation of momentum gives $v_1'$.",
    "hintAr": "الدفع على الكرة الثانية $I = m_2(v_2' - 0)$. وبقاء كمية الحركة يعطي $v_1'$.",
    "stepByStepSolutionEn": [
      "1. Impulse on second sphere:",
      "$$I = m_2(v_2' - u_2) = 0.6(4 - 0) = 2.4\\text{ N}\\cdot\\text{s}$$",
      "2. Velocity of first sphere from momentum conservation:",
      "$$m_1 u_1 + m_2(0) = m_1 v_1' + m_2 v_2'$$",
      "$$400(5) = 400 v_1' + 600(4) \\implies 2000 = 400 v_1' + 2400$$",
      "$$400 v_1' = -400 \\implies v_1' = -1\\text{ m/s}$$",
      "The first sphere rebounds at $1\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب الدفع الواقع على الكرة الثانية:",
      "$$I = m_2(v_2' - u_2) = 0.6(4 - 0) = 2.4\\text{ نيوتن.ث}$$",
      "٢. إيجاد سرعة الكرة الأولى ببقاء كمية الحركة:",
      "$$400(5) = 400 v_1' + 600(4) \\implies 2000 = 400 v_1' + 2400$$",
      "$$400 v_1' = -400 \\implies v_1' = -1\\text{ م/ث}$$",
      "إذن ارتدت الكرة الأولى بسرعة $1\\text{ م/ث}$ في الاتجاه المعاكس."
    ],
    "teacherTipEn": "Check: The impulse on the first sphere is I1 = m1(v1' - u1) = 0.4(-1 - 5) = -2.4 N.s = -I2.",
    "teacherTipAr": "تحقق: دفع الثانية على الأولى = ٠٫٤(-١ - ٥) = -٢٫٤ نيوتن.ث = - د٢."
  },
  {
    "id": "dyn_ch3_ex_11",
    "titleEn": "Exercise 11: Quadratic Time-Dependent Force Impulse",
    "titleAr": "تمرين ١١: دفع قوة تربيعية متغيرة في الزمن",
    "difficulty": "hots",
    "questionEn": "A force $F(t) = (4 - t^2)\\text{ N}$ acts on a particle of mass $m = 1\\text{ kg}$ initially at rest from $t = 0$ to $t = 2\\text{ s}$. Find the impulse of the force and the speed of the particle at $t = 2\\text{ s}$.",
    "questionAr": "أثرت قوة $F(t) = (4 - t^2)\\text{ نيوتن}$ على جسيم كتلته $m = 1\\text{ كجم}$ بدأ حركته من السكون في الفترة من $t = 0$ إلى $t = 2\\text{ ث}$. احسب دفع القوة وسرعة الجسيم عند $t = 2\\text{ ث}$.",
    "optionsEn": [
      "Impulse = $\\frac{16}{3}\\text{ N}\\cdot\\text{s}$, Speed = $\\frac{16}{3}\\text{ m/s}$",
      "Impulse = $4\\text{ N}\\cdot\\text{s}$, Speed = $4\\text{ m/s}$",
      "Impulse = $8\\text{ N}\\cdot\\text{s}$, Speed = $8\\text{ m/s}$",
      "Impulse = $\\frac{8}{3}\\text{ N}\\cdot\\text{s}$, Speed = $\\frac{8}{3}\\text{ m/s}$"
    ],
    "optionsAr": [
      "الدفع = $\\frac{16}{3}\\text{ نيوتن.ث}$، السرعة = $\\frac{16}{3}\\text{ م/ث}$",
      "الدفع = $4\\text{ نيوتن.ث}$، السرعة = $4\\text{ م/ث}$",
      "الدفع = $8\\text{ نيوتن.ث}$، السرعة = $8\\text{ م/ث}$",
      "الدفع = $\\frac{8}{3}\\text{ نيوتن.ث}$، السرعة = $\\frac{8}{3}\\text{ م/ث}$"
    ],
    "correctAnswer": "Impulse = $\\frac{16}{3}\\text{ N}\\cdot\\text{s}$, Speed = $\\frac{16}{3}\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "$I = \\int_0^2 (4 - t^2) dt = [4t - \\frac{t^3}{3}]_0^2$.",
    "hintAr": "$I = \\int_0^2 (4 - t^2) dt = [4t - \\frac{t^3}{3}]_0^2$.",
    "stepByStepSolutionEn": [
      "1. Evaluate the definite integral:",
      "$$I = \\int_0^2 (4 - t^2) dt = \\left[ 4t - \\frac{t^3}{3} \\right]_0^2 = 4(2) - \\frac{8}{3} = 8 - \\frac{8}{3} = \\frac{16}{3}\\text{ N}\\cdot\\text{s}$$",
      "2. Since $m = 1\\text{ kg}$ and $v_0 = 0$:",
      "$$v = \\frac{I}{m} = \\frac{16/3}{1} = \\frac{16}{3}\\text{ m/s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب التكامل المحدد لإيجاد الدفع:",
      "$$I = \\int_0^2 (4 - t^2) dt = \\left[ 4t - \\frac{t^3}{3} \\right]_0^2 = 8 - \\frac{8}{3} = \\frac{16}{3}\\text{ نيوتن.ث}$$",
      "٢. بما أن الكتلة $1\\text{ كجم}$ والبداية من السكون:",
      "$$v = \\frac{I}{m} = \\frac{16}{3}\\text{ م/ث}$$"
    ],
    "teacherTipEn": "Definite integrals of polynomial forces are frequent exam items; ensure accurate fractional arithmetic.",
    "teacherTipAr": "التكاملات المحددة لدوال القوى كثيرة الحدود تتكرر بكثرة في الامتحانات؛ دقق في العمليات الحسابية للكسور."
  },
  {
    "id": "dyn_ch3_ex_12",
    "titleEn": "Exercise 12: Bullet Embedded in Block on Rough Horizontal Plane",
    "titleAr": "تمرين ١٢: انغراس رصاصة في كتلة على مستوى أفقي خشن",
    "difficulty": "hots",
    "questionEn": "A bullet of mass $m_1 = 10\\text{ g}$ moving horizontally at $u = 500\\text{ m/s}$ strikes a stationary wooden block of mass $m_2 = 990\\text{ g}$ resting on a rough horizontal plane with coefficient of friction $\\mu = 0.25$. If the bullet embeds itself into the block, find the distance the combined mass travels before coming to rest ($g = 9.8\\text{ m/s}^2$).",
    "questionAr": "أُطلقت رصاصة كتلتها $m_1 = 10\\text{ جم}$ أفقياً بسرعة $u = 500\\text{ م/ث}$ على كتلة خشبية ساكنة كتلتها $m_2 = 990\\text{ جم}$ موضوعة على مستوى أفقي خشن معامل احتكاكه $\\mu = 0.25$. فإذا استقرت الرصاصة داخل الكتلة، احسب المسافة التي تقطعها المجموعة حتى تسكن ($g = 9.8\\text{ م/ث²}$).",
    "optionsEn": [
      "$\\frac{250}{49}\\text{ m} \\approx 5.10\\text{ m}$",
      "$\\frac{125}{49}\\text{ m} \\approx 2.55\\text{ m}$",
      "$10.20\\text{ m}$",
      "$4.08\\text{ m}$"
    ],
    "optionsAr": [
      "$\\frac{250}{49}\\text{ م} \\approx 5.10\\text{ م}$",
      "$\\frac{125}{49}\\text{ م} \\approx 2.55\\text{ م}$",
      "$10.20\\text{ م}$",
      "$4.08\\text{ م}$"
    ],
    "correctAnswer": "$\\frac{250}{49}\\text{ m} \\approx 5.10\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Find common velocity $v'$ by momentum conservation, then find deceleration $a = -\\mu g$ and use $v_f^2 = v'^2 - 2as$.",
    "hintAr": "احسب السرعة المشتركة $v'$ ببقاء كمية الحركة، ثم احسب العجلة التقصيرية $a = -\\mu g$ واستخدم $v_f^2 = v'^2 - 2as$.",
    "stepByStepSolutionEn": [
      "1. Common speed immediately after impact:",
      "$$m_1 = 0.01\\text{ kg}, \\quad m_2 = 0.99\\text{ kg} \\implies M = 1.0\\text{ kg}$$",
      "$$v' = \\frac{m_1 u}{m_1 + m_2} = \\frac{0.01 \\times 500}{1.0} = 5\\text{ m/s}$$",
      "2. Friction deceleration on the rough plane:",
      "$$a = -\\mu g = -0.25 \\times 9.8 = -2.45\\text{ m/s}^2$$",
      "3. Distance traveled until coming to rest ($v_f = 0$):",
      "$$v_f^2 = v'^2 + 2 a s \\implies 0 = 5^2 - 2(2.45) s = 25 - 4.9 s$$",
      "$$s = \\frac{25}{4.9} = \\frac{250}{49}\\text{ m} \\approx 5.10\\text{ m}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب السرعة المشتركة بعد الانغراس:",
      "$$m_1 = 0.01\\text{ كجم}, \\quad m_2 = 0.99\\text{ كجم} \\implies M = 1.0\\text{ كجم}$$",
      "$$v' = \\frac{0.01 \\times 500}{1.0} = 5\\text{ م/ث}$$",
      "٢. العجلة التقصيرية الناتجة عن الاحتكاك:",
      "$$a = -\\mu g = -0.25 \\times 9.8 = -2.45\\text{ م/ث²}$$",
      "٣. المسافة حتى السكون ($v_f = 0$):",
      "$$0 = v'^2 - 2 a s \\implies 0 = 25 - 2(2.45) s \\implies 4.9 s = 25$$",
      "$$s = \\frac{25}{4.9} = \\frac{250}{49}\\text{ م} \\approx 5.10\\text{ م}$$"
    ],
    "teacherTipEn": "This problem beautifully connects Chapter 3 (Impulse & Momentum) with Chapter 1 of Statics (Friction) and Chapter 2 of Dynamics (Newton's 2nd Law).",
    "teacherTipAr": "هذه المسألة تربط ببراعة بين الدفع والتصادم وقوانين نيوتن واحتكاك الاستاتيكا."
  },
  {
    "id": "dyn_ch3_ex_13",
    "titleEn": "Exercise 13: Geometric Area of Force-Time Graph (Triangular Pulse)",
    "titleAr": "تمرين ١٣: المساحة الهندسية لمنحنى (القوة - الزمن) ونبضة مثلثة",
    "difficulty": "hots",
    "questionEn": "A triangular impulsive force acts on a particle of mass $m = 0.45\\text{ kg}$ initially at rest. The force rises linearly from $0$ to a maximum of $F_{max} = 600\\text{ N}$ at $t = 0.01\\text{ s}$, then falls linearly back to $0$ at $t = 0.03\\text{ s}$. Find the impulse of the force and the speed acquired by the particle.",
    "questionAr": "أثرت قوة دفعية مثلثة الشكل على جسيم كتلته $m = 0.45\\text{ كجم}$ كان ساكناً في البداية. تتزايد القوة خطياً من الصفر إلى قيمة عظمى $F_{max} = 600\\text{ نيوتن}$ عند $t = 0.01\\text{ ث}$، ثم تتناقص خطياً حتى تنعدم عند $t = 0.03\\text{ ث}$. احسب دفع القوة والسرعة التي اكتسبها الجسيم.",
    "optionsEn": [
      "Impulse = $9\\text{ N}\\cdot\\text{s}$, Speed = $20\\text{ m/s}$",
      "Impulse = $18\\text{ N}\\cdot\\text{s}$, Speed = $40\\text{ m/s}$",
      "Impulse = $9\\text{ N}\\cdot\\text{s}$, Speed = $10\\text{ m/s}$",
      "Impulse = $6\\text{ N}\\cdot\\text{s}$, Speed = $13.33\\text{ m/s}$"
    ],
    "optionsAr": [
      "الدفع = $9\\text{ نيوتن.ث}$، السرعة = $20\\text{ م/ث}$",
      "الدفع = $18\\text{ نيوتن.ث}$، السرعة = $40\\text{ م/ث}$",
      "الدفع = $9\\text{ نيوتن.ث}$، السرعة = $10\\text{ م/ث}$",
      "الدفع = $6\\text{ نيوتن.ث}$، السرعة = $13.33\\text{ م/ث}$"
    ],
    "correctAnswer": "Impulse = $9\\text{ N}\\cdot\\text{s}$, Speed = $20\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "Impulse equals the area under the $(F-t)$ curve: $\\text{Area of triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$.",
    "hintAr": "الدفع يساوي المساحة تحت منحنى (ق - ن): مساحة المثلث = $\\frac{1}{2} \\times \\text{القاعدة} \\times \\text{الارتفاع}$.",
    "stepByStepSolutionEn": [
      "1. Calculate the impulse from the area of the triangle:",
      "$$\\text{Base} = 0.03 - 0 = 0.03\\text{ s}, \\quad \\text{Height} = 600\\text{ N}$$",
      "$$I = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times 0.03 \\times 600 = 9\\text{ N}\\cdot\\text{s}$$",
      "2. Calculate the velocity acquired ($m = 0.45\\text{ kg}$):",
      "$$v = \\frac{I}{m} = \\frac{9}{0.45} = 20\\text{ m/s}$$"
    ],
    "stepByStepSolutionAr": [
      "١. حساب الدفع من مساحة المثلث أسفل منحنى (ق - ن):",
      "$$\\text{القاعدة} = 0.03\\text{ ث}, \\quad \\text{الارتفاع} = 600\\text{ نيوتن}$$",
      "$$I = \\frac{1}{2} \\times 0.03 \\times 600 = 9\\text{ نيوتن.ث}$$",
      "٢. حساب السرعة المكتسبة ($m = 0.45\\text{ كجم}$):",
      "$$v = \\frac{I}{m} = \\frac{9}{0.45} = 20\\text{ م/ث}$$"
    ],
    "teacherTipEn": "When a graph of F against t is provided in exams, the area between the curve and the time axis is ALWAYS the impulse.",
    "teacherTipAr": "عند إعطاء منحنى بياني لـ (ق - ن) في الامتحان، فإن المساحة المحصورة مع محور الزمن هي دائماً الدفع."
  },
  {
    "id": "dyn_ch3_ex_14",
    "titleEn": "Exercise 14: Three Identical Spheres in Succession",
    "titleAr": "تمرين ١٤: تصادم ثلاث كرات متماثلة على التوالي",
    "difficulty": "hots",
    "questionEn": "Three identical smooth spheres $A$, $B$, and $C$, each of mass $m$, lie in a straight line on a smooth horizontal table, with $B$ and $C$ at rest. Sphere $A$ is projected towards $B$ with speed $u$. After collision, $A$ and $B$ coalesce into a single mass $2m$, which then moves on to collide and coalesce with sphere $C$. Find the final speed of the combined mass of the three spheres.",
    "questionAr": "ثلاث كرات ملساء متماثلة $A$ و $B$ و $C$ كتلة كل منها $m$ موضوعة في خط مستقيم على نضد أفقي أملس، وكانت الكرتان $B$ و $C$ ساكنتين. قُذفت الكرة $A$ نحو الكرة $B$ بسرعة $u$. فالتحمت الكرتان $A$ و $B$ في كتلة واحدة مقدارها $2m$، ثم تحركت واصطدمت بالكرة $C$ والتحمت معها. أوجد السرعة النهائية للكتلة المشتركة للكرات الثلاث.",
    "optionsEn": [
      "$\\frac{1}{3} u$",
      "$\\frac{1}{2} u$",
      "$\\frac{1}{4} u$",
      "$\\frac{2}{3} u$"
    ],
    "optionsAr": [
      "$\\frac{1}{3} u$",
      "$\\frac{1}{2} u$",
      "$\\frac{1}{4} u$",
      "$\\frac{2}{3} u$"
    ],
    "correctAnswer": "$\\frac{1}{3} u$",
    "correctIndex": 0,
    "hintEn": "Total initial momentum is $m u$. Since all internal forces cancel, total momentum of the entire 3-sphere system is conserved: $p_{total} = (3m) v_{final}$.",
    "hintAr": "كمية الحركة الابتدائية الكلية $m u$. وبما أن القوى داخلية، فإن كمية الحركة الكلية للمجموعة محفوظة: $p_{total} = (3m) v_{final}$.",
    "stepByStepSolutionEn": [
      "1. By conservation of linear momentum for the entire system:",
      "Initial momentum of the three spheres:",
      "$$p_{initial} = m(u) + m(0) + m(0) = m u$$",
      "2. Final mass of the coalesced body: $M = m + m + m = 3m$.",
      "3. Setting initial momentum equal to final momentum:",
      "$$3m v_{final} = m u \\implies v_{final} = \\frac{1}{3} u$$",
      "4. (Verification via intermediate collision):",
      "- After first impact between $A$ and $B$: $v_1' = \\frac{m u}{2m} = \\frac{1}{2} u$.",
      "- After second impact with $C$: $v_2' = \\frac{(2m)(\\frac{1}{2} u)}{2m + m} = \\frac{m u}{3m} = \\frac{1}{3} u$."
    ],
    "stepByStepSolutionAr": [
      "١. بتطبيق قانون بقاء كمية الحركة على المنظومة ككل:",
      "كمية الحركة الابتدائية للكرات الثلاث:",
      "$$p_{initial} = m(u) + m(0) + m(0) = m u$$",
      "٢. الكتلة النهائية للجسم الملتصق: $M = 3m$.",
      "٣. مساواة كمية الحركة الابتدائية بالنهائية:",
      "$$3m v_{final} = m u \\implies v_{final} = \\frac{1}{3} u$$",
      "٤. (تحقق عبر التصادم المرحلي):",
      "- بعد تصادم A و B: $v_1' = \\frac{m u}{2m} = \\frac{1}{2} u$.",
      "- بعد تصادم الكتلة مع C: $v_2' = \\frac{(2m)(\\frac{1}{2} u)}{3m} = \\frac{1}{3} u$."
    ],
    "teacherTipEn": "A powerful principle: whenever multiple internal collisions occur without external horizontal forces, the overall system momentum remains strictly conserved from start to finish.",
    "teacherTipAr": "مبدأ فيزيائي عظيم: في غياب أي قوى خارجية أفقية، كمية حركة المنظومة محفوظة من البداية حتى النهاية أياً كان عدد التصادمات."
  },
  {
    "id": "dyn_ch3_ex_15",
    "titleEn": "Exercise 15: Pile Driver Impact & Ground Penetration Resistance",
    "titleAr": "تمرين ١٥: صدم مطرقة الدق لعمود ومقاومة الأرض للغوص",
    "difficulty": "hots",
    "questionEn": "A pile-driver hammer of mass $M = 400\\text{ kg}$ falls freely from a height of $h = 4.9\\text{ m}$ onto a pile of mass $m = 100\\text{ kg}$. The hammer and pile move together after impact and penetrate $s = 10\\text{ cm} = 0.1\\text{ m}$ vertically into the ground. Find the common speed immediately after impact and the average ground resistance force ($g = 9.8\\text{ m/s}^2$).",
    "questionAr": "سقطت مطرقة لآلة دق أوتاد كتلتها $M = 400\\text{ كجم}$ سقوطاً حراً من ارتفاع $h = 4.9\\text{ م}$ على وتد كتلته $m = 100\\text{ كجم}$. تحركت المطرقة والوتد معاً بعد التصادم كجسم واحد وغاصا رأسياً في الأرض مسافة $s = 10\\text{ سم} = 0.1\\text{ م}$. احسب السرعة المشتركة فور التصادم مباشرة، ومتوسط قوة مقاومة الأرض للغوص ($g = 9.8\\text{ م/ث²}$).",
    "optionsEn": [
      "Common speed = $7.84\\text{ m/s}$, Resistance = $158564\\text{ N}$",
      "Common speed = $9.8\\text{ m/s}$, Resistance = $240100\\text{ N}$",
      "Common speed = $7.84\\text{ m/s}$, Resistance = $153664\\text{ N}$",
      "Common speed = $3.92\\text{ m/s}$, Resistance = $43400\\text{ N}$"
    ],
    "optionsAr": [
      "السرعة المشتركة = $7.84\\text{ م/ث}$، المقاومة = $158564\\text{ نيوتن}$",
      "السرعة المشتركة = $9.8\\text{ م/ث}$، المقاومة = $240100\\text{ نيوتن}$",
      "السرعة المشتركة = $7.84\\text{ م/ث}$، المقاومة = $153664\\text{ نيوتن}$",
      "السرعة المشتركة = $3.92\\text{ م/ث}$، المقاومة = $43400\\text{ نيوتن}$"
    ],
    "correctAnswer": "Common speed = $7.84\\text{ m/s}$, Resistance = $158564\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Speed of hammer before impact $u = \\sqrt{2gh} = 9.8\\text{ m/s}$. Common speed $v' = \\frac{400 \\times 9.8}{500} = 7.84\\text{ m/s}$. Deceleration in ground: $0 = v'^2 + 2as$. Then $(M+m)g - R = (M+m)a$.",
    "hintAr": "سرعة المطرقة قبل الصدم $u = \\sqrt{2gh} = 9.8\\text{ م/ث}$. السرعة المشتركة $v' = \\frac{400 \\times 9.8}{500} = 7.84\\text{ م/ث}$. العجلة في الأرض: $0 = v'^2 + 2as$. ثم $(M+m)g - R = (M+m)a$.",
    "stepByStepSolutionEn": [
      "1. Velocity of hammer just before impact:",
      "$$u = \\sqrt{2 g h} = \\sqrt{2 \\times 9.8 \\times 4.9} = \\sqrt{96.04} = 9.8\\text{ m/s}$$",
      "2. Common velocity of hammer and pile immediately after collision:",
      "$$M u = (M + m) v' \\implies 400(9.8) = (400 + 100) v'$$",
      "$$3920 = 500 v' \\implies v' = 7.84\\text{ m/s}$$",
      "3. Deceleration $a$ while penetrating the ground ($s = 0.1\\text{ m}$, $v_f = 0$):",
      "$$v_f^2 = v'^2 + 2 a s \\implies 0 = (7.84)^2 + 2 a (0.1)$$",
      "$$0 = 61.4656 + 0.2 a \\implies a = -\\frac{61.4656}{0.2} = -307.328\\text{ m/s}^2$$",
      "4. Equation of vertical motion in the ground:",
      "$$(M + m) g - R = (M + m) a$$",
      "$$500(9.8) - R = 500(-307.328)$$",
      "$$4900 - R = -153664 \\implies R = 4900 + 153664 = 158564\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "١. سرعة المطرقة لحظة وصولها للوتد:",
      "$$u = \\sqrt{2 g h} = \\sqrt{2 \\times 9.8 \\times 4.9} = 9.8\\text{ م/ث}$$",
      "٢. السرعة المشتركة للمطرقة والوتد فور التصادم مباشرة:",
      "$$400 \\times 9.8 = (400 + 100) v' \\implies 3920 = 500 v' \\implies v' = 7.84\\text{ م/ث}$$",
      "٣. العجلة التقصيرية داخل الأرض ($s = 0.1\\text{ م}$ حتى يسكن $v_f = 0$):",
      "$$0 = (7.84)^2 + 2 a (0.1) \\implies 0.2 a = -61.4656 \\implies a = -307.328\\text{ م/ث²}$$",
      "٤. معادلة الحركة الرأسية داخل الأرض (الوزن لأسفل والمقاومة لأعلى):",
      "$$(M + m) g - R = (M + m) a$$",
      "$$500(9.8) - R = 500(-307.328) \\implies 4900 - R = -153664$$",
      "$$R = 4900 + 153664 = 158564\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "A top-tier MoE exam classic! When calculating ground resistance, do not forget the weight force (M+m)g acting downwards alongside the deceleration inertia.",
    "teacherTipAr": "مسألة كلاسيكية في قمة امتحانات الوزارة! عند حساب مقاومة الأرض للغوص، لا تنسَ إضافة وزن المجموعة (ك كلي × د) إلى قوة القصور."
  }
];
