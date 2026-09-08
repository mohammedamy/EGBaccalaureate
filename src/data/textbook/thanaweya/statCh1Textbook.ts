import type { SolvedProblem } from '../../../types/curriculum';

export const statCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "stat_ch1_se_01",
    "titleEn": "MoE Example 1: Horizontal Force on Rough Horizontal Plane",
    "titleAr": "مثال الوزارة ١: قوة أفقية على مستوى أفقي خشن",
    "difficulty": "easy",
    "questionEn": "A body of weight $30\\text{ N}$ rests on a rough horizontal plane. If the coefficient of static friction is $\\mu_s = \\frac{1}{3}$, find the horizontal force $P$ required to make the body on the verge of motion.",
    "questionAr": "وضع جسم وزنه $30\\text{ نيوتن}$ على مستوى أفقي خشن. فإذا كان معامل الاحتكاك السكوني $\\mu_s = \\frac{1}{3}$، فأوجد القوة الأفقية $P$ اللازمة لجعل الجسم على وشك الحركة.",
    "optionsEn": [
      "$10\\text{ N}$",
      "$30\\text{ N}$",
      "$90\\text{ N}$",
      "$3\\text{ N}$"
    ],
    "optionsAr": [
      "10 نيوتن",
      "30 نيوتن",
      "90 نيوتن",
      "3 نيوتن"
    ],
    "correctAnswer": "$10\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "At the verge of motion, $P = F_s = \\mu_s R$, where $R = W$.",
    "hintAr": "عند وشك الحركة، تكون القوة $P = F_s = \\mu_s R$ حيث $R = W$.",
    "stepByStepSolutionEn": [
      "1. Vertical equilibrium: $R = W = 30\\text{ N}$.",
      "2. Limiting static friction: $F_s = \\mu_s R = \\frac{1}{3} \\times 30 = 10\\text{ N}$.",
      "3. Horizontal equilibrium at the verge of motion: $P = F_s = 10\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الاتزان الرأسي: رد الفعل العمودي $R = W = 30\\text{ نيوتن}$.",
      "٢. قوة الاحتكاك السكوني النهائي: $F_s = \\mu_s R = \\frac{1}{3} \\times 30 = 10\\text{ نيوتن}$.",
      "٣. معادلة الاتزان الأفقي عند وشك الحركة: $P = F_s = 10\\text{ نيوتن}$."
    ],
    "teacherTipEn": "On a horizontal plane with purely horizontal force, the normal reaction simply equals the weight ($R = W$).",
    "teacherTipAr": "على مستوى أفقي وتحت تأثير قوة أفقية فقط، رد الفعل العمودي يساوي الوزن مباشرة ($R = W$)."
  },
  {
    "id": "stat_ch1_se_02",
    "titleEn": "MoE Example 2: Inclined Pulling Force on Horizontal Plane",
    "titleAr": "مثال الوزارة ٢: قوة شد تميل بزاوية على المستوى الأفقي",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 20\\text{ N}$ rests on a rough horizontal plane where $\\mu_s = \\frac{\\sqrt{3}}{3}$. A pulling force $P$ inclined at $30^\\circ$ above the horizontal makes the body on the verge of motion. Find $P$.",
    "questionAr": "جسم وزنه $20\\text{ نيوتن}$ موضوع على مستوى أفقي خشن معامل احتكاكه السكوني $\\mu_s = \\frac{\\sqrt{3}}{3}$. أثرت عليه قوة شد $P$ تميل على الأفقي لأعلى بزاوية $30^\\circ$ فجعلته على وشك الحركة. أوجد قيمة $P$.",
    "optionsEn": [
      "$10\\text{ N}$",
      "$20\\text{ N}$",
      "$15\\text{ N}$",
      "$10\\sqrt{3}\\text{ N}$"
    ],
    "optionsAr": [
      "10 نيوتن",
      "20 نيوتن",
      "15 نيوتن",
      "10\\sqrt{3} نيوتن"
    ],
    "correctAnswer": "$10\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Resolve $P$ into $P\\cos 30^\\circ$ horizontally and $P\\sin 30^\\circ$ vertically. Normal reaction is $R = W - P\\sin 30^\\circ$.",
    "hintAr": "حلل $P$ إلى مركبتين: $P\\cos 30^\\circ$ أفقياً و $P\\sin 30^\\circ$ رأسياً، فيكون رد الفعل العمودي $R = W - P\\sin 30^\\circ$.",
    "stepByStepSolutionEn": [
      "1. Vertical equilibrium: $R + P \\sin 30^\\circ = W \\implies R = 20 - 0.5P$.",
      "2. Horizontal equilibrium at verge of motion: $P \\cos 30^\\circ = \\mu_s R$.",
      "3. Substitute $\\mu_s = \\frac{1}{\\sqrt{3}}$ and $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$:",
      "$$P \\frac{\\sqrt{3}}{2} = \\frac{1}{\\sqrt{3}} (20 - 0.5P) \\implies \\frac{3}{2}P = 20 - \\frac{1}{2}P \\implies 2P = 20 \\implies P = 10\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الاتزان الرأسي: $R + P \\sin 30^\\circ = 20 \\implies R = 20 - \\frac{1}{2}P$.",
      "٢. معادلة الاتزان الأفقي عند وشك الحركة: $P \\cos 30^\\circ = \\mu_s R$.",
      "٣. بالتعويض: $P \\frac{\\sqrt{3}}{2} = \\frac{1}{\\sqrt{3}} (20 - \\frac{1}{2}P) \\implies \\frac{3}{2}P + \\frac{1}{2}P = 20 \\implies 2P = 20 \\implies P = 10\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice the upward vertical component of the pulling force reduces the normal reaction: R = W - P sin(theta).",
    "teacherTipAr": "المركبة الرأسية لأعلى لقوة الشد تقلل من رد الفعل العمودي وبالتالي تقلل من قوة الاحتكاك."
  },
  {
    "id": "stat_ch1_se_03",
    "titleEn": "MoE Example 3: Resultant Reaction and Angle of Friction",
    "titleAr": "مثال الوزارة ٣: رد الفعل المحصل وزاوية الاحتكاك",
    "difficulty": "easy",
    "questionEn": "A body of weight $40\\text{ N}$ rests on a rough horizontal plane. If the angle of friction is $\\lambda = 30^\\circ$, find the magnitude of the resultant reaction $R'$ when the body is on the verge of motion.",
    "questionAr": "وضع جسم وزنه $40\\text{ نيوتن}$ على مستوى أفقي خشن. فإذا كانت زاوية الاحتكاك $\\lambda = 30^\\circ$، فأوجد مقدار رد الفعل المحصل $R'$ عندما يكون الجسم على وشك الحركة.",
    "optionsEn": [
      "$\\frac{80\\sqrt{3}}{3}\\text{ N}$",
      "$40\\sqrt{3}\\text{ N}$",
      "$80\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$"
    ],
    "optionsAr": [
      "\\frac{80\\sqrt{3}}{3} نيوتن",
      "40\\sqrt{3} نيوتن",
      "80 نيوتن",
      "20\\sqrt{3} نيوتن"
    ],
    "correctAnswer": "$\\frac{80\\sqrt{3}}{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The resultant reaction is given by $R' = R \\sec\\lambda = \\frac{R}{\\cos\\lambda}$.",
    "hintAr": "رد الفعل المحصل يعطى بالعلاقة: $R' = R \\sec\\lambda = \\frac{R}{\\cos\\lambda}$.",
    "stepByStepSolutionEn": [
      "1. On a horizontal plane with horizontal force: $R = W = 40\\text{ N}$.",
      "2. The formula for resultant reaction: $R' = R \\sec\\lambda = \\frac{R}{\\cos 30^\\circ}$.",
      "3. Substitute values: $R' = \\frac{40}{\\sqrt{3}/2} = \\frac{80}{\\sqrt{3}} = \\frac{80\\sqrt{3}}{3}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = W = 40\\text{ نيوتن}$.",
      "٢. قانون رد الفعل المحصل: $R' = R \\sec\\lambda = \\frac{R}{\\cos 30^\\circ}$.",
      "٣. الحساب: $R' = \\frac{40}{\\sqrt{3}/2} = \\frac{80\\sqrt{3}}{3}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Remember: R' is the hypotenuse of the right triangle with legs R and F_s.",
    "teacherTipAr": "رد الفعل المحصل هو وتر المثلث القائم الذي ضلعي قائمته هما رد الفعل العمودي وقوة الاحتكاك."
  },
  {
    "id": "stat_ch1_se_04",
    "titleEn": "MoE Example 4: Equilibrium on Rough Inclined Plane under Weight Alone",
    "titleAr": "مثال الوزارة ٤: اتزان جسم على مستوى مائل خشن تحت تأثير وزنه فقط",
    "difficulty": "easy",
    "questionEn": "A body of weight $W$ is placed on a rough inclined plane. If the body is on the verge of sliding down the plane under the action of its own weight alone when the plane is inclined at $30^\\circ$ to the horizontal, find the coefficient of static friction $\\mu_s$.",
    "questionAr": "وضع جسم وزنه $W$ على مستوى مائل خشن. فإذا كان الجسم على وشك الانزلاق إلى أسفل المستوى تحت تأثير وزنه فقط عندما كانت زاوية ميل المستوى على الأفقي $30^\\circ$، فما هو معامل الاحتكاك السكوني $\\mu_s$؟",
    "optionsEn": [
      "$\\frac{\\sqrt{3}}{3}$",
      "$\\sqrt{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "optionsAr": [
      "\\frac{\\sqrt{3}}{3}",
      "\\sqrt{3}",
      "\\frac{1}{2}",
      "\\frac{\\sqrt{3}}{2}"
    ],
    "correctAnswer": "$\\frac{\\sqrt{3}}{3}$",
    "correctIndex": 0,
    "hintEn": "When a body is on the verge of sliding down under its weight alone, the angle of inclination $\\theta$ equals the angle of friction $\\lambda$, so $\\mu_s = \\tan\\theta$.",
    "hintAr": "عندما يكون الجسم على وشك الانزلاق تحت تأثير وزنه فقط، تكون زاوية الميل $\\theta$ مساوية لزاوية الاحتكاك $\\lambda$، وبالتالي $\\mu_s = \\tan\\theta$.",
    "stepByStepSolutionEn": [
      "1. Resolving weight along and perpendicular to the plane:",
      "Along plane downward: $W \\sin 30^\\circ$.",
      "Perpendicular to plane: $R = W \\cos 30^\\circ$.",
      "2. Limiting friction opposes motion upward along plane: $F_s = \\mu_s R = \\mu_s W \\cos 30^\\circ$.",
      "3. At verge of slipping: $W \\sin 30^\\circ = \\mu_s W \\cos 30^\\circ \\implies \\mu_s = \\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. تحليل الوزن: في اتجاه المستوى لأسفل $W \\sin 30^\\circ$، وعمودي على المستوى $R = W \\cos 30^\\circ$.",
      "٢. قوة الاحتكاك لأعلى: $F_s = \\mu_s R = \\mu_s W \\cos 30^\\circ$.",
      "٣. عند وشك الانزلاق: $W \\sin 30^\\circ = \\mu_s W \\cos 30^\\circ \\implies \\mu_s = \\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$."
    ],
    "teacherTipEn": "A foundational theorem: theta = lambda <=> mu_s = tan(theta).",
    "teacherTipAr": "نظرية أساسية: زاوية الميل تساوي زاوية الاحتكاك إذا وفقط إذا كان الجسم على وشك الانزلاق بوزنه فقط."
  },
  {
    "id": "stat_ch1_se_05",
    "titleEn": "MoE Example 5: Least Force to Prevent Slipping Down Inclined Plane",
    "titleAr": "مثال الوزارة ٥: أقل قوة تمنع الجسم من الانزلاق لأسفل المستوى",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 60\\text{ N}$ rests on a rough plane inclined at $30^\\circ$ to the horizontal. The coefficient of static friction is $\\mu_s = \\frac{\\sqrt{3}}{3}$. Find the least force $P$ directed up along the line of greatest slope required to prevent the body from slipping down.",
    "questionAr": "جسم وزنه $60\\text{ نيوتن}$ موضوع على مستوى خشن يميل على الأفقي بزاوية $30^\\circ$. معامل الاحتكاك السكوني $\\mu_s = \\frac{\\sqrt{3}}{3}$. أوجد أقل قوة $P$ موجهة لأعلى في اتجاه خط أكبر ميل تمنع الجسم من الانزلاق.",
    "optionsEn": [
      "$0\\text{ N}$",
      "$30\\text{ N}$",
      "$15\\text{ N}$",
      "$30\\sqrt{3}\\text{ N}$"
    ],
    "optionsAr": [
      "0 نيوتن",
      "30 نيوتن",
      "15 نيوتن",
      "30\\sqrt{3} نيوتن"
    ],
    "correctAnswer": "$0\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "When the body is on the verge of slipping down, friction $F_s$ acts upwards: $P + F_s = W\\sin\\theta$.",
    "hintAr": "عندما يكون الجسم على وشك الانزلاق لأسفل، تعمل قوة الاحتكاك لأعلى: $P + F_s = W\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. Since $\\mu_s = \\frac{\\sqrt{3}}{3} = \\tan 30^\\circ$, the angle of friction is $\\lambda = 30^\\circ$.",
      "2. The inclination angle is $\\theta = 30^\\circ$. Since $\\theta = \\lambda$, the body is naturally on the verge of sliding under its weight alone.",
      "3. Therefore, the minimum force required to prevent it from slipping is $P = 0\\text{ N}$.",
      "Formula confirmation: $P = W(\\sin\\theta - \\mu_s \\cos\\theta) = 60(\\sin 30^\\circ - \\tan 30^\\circ \\cos 30^\\circ) = 60(0.5 - 0.5) = 0\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن معامل الاحتكاك $\\mu_s = \\frac{\\sqrt{3}}{3} = \\tan 30^\\circ$، إذن زاوية الاحتكاك $\\lambda = 30^\\circ$.",
      "٢. زاوية الميل $\\theta = 30^\\circ = \\lambda$، أي أن الجسم متزن طبيعياً وعلى وشك الانزلاق دون الحاجة لأي قوة.",
      "٣. إذن أقل قوة لمنع الانزلاق هي $P = 0\\text{ نيوتن}$."
    ],
    "teacherTipEn": "When theta <= lambda, the body does not slide on its own, so zero force is needed to prevent sliding.",
    "teacherTipAr": "عندما تكون زاوية الميل أصغر من أو تساوي زاوية الاحتكاك، لا ينزلق الجسم من تلقاء نفسه وتكون القوة اللازمة لمنع الانزلاق صفراً."
  },
  {
    "id": "stat_ch1_se_06",
    "titleEn": "MoE Example 6: Force to Put Body on Verge of Moving Up Inclined Plane",
    "titleAr": "مثال الوزارة ٦: القوة التي تجعل الجسم على وشك الحركة لأعلى المستوى",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 60\\text{ N}$ rests on a rough plane inclined at $30^\\circ$ to the horizontal with $\\mu_s = \\frac{\\sqrt{3}}{3}$. Find the force $P$ acting up along the line of greatest slope to make the body on the verge of moving up the plane.",
    "questionAr": "جسم وزنه $60\\text{ نيوتن}$ موضوع على مستوى خشن يميل على الأفقي بزاوية $30^\\circ$ ومعامل احتكاكه $\\mu_s = \\frac{\\sqrt{3}}{3}$. أوجد القوة $P$ التي تؤثر لأعلى في اتجاه خط أكبر ميل لتجعل الجسم على وشك الحركة لأعلى المستوى.",
    "optionsEn": [
      "$60\\text{ N}$",
      "$30\\text{ N}$",
      "$45\\text{ N}$",
      "$30\\sqrt{3}\\text{ N}$"
    ],
    "optionsAr": [
      "60 نيوتن",
      "30 نيوتن",
      "45 نيوتن",
      "30\\sqrt{3} نيوتن"
    ],
    "correctAnswer": "$60\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Impending motion is UP, so friction acts DOWN: $P = W\\sin\\theta + \\mu_s R$.",
    "hintAr": "الحركة الوشيكة لأعلى، إذن قوة الاحتكاك تعمل لأسفل: $P = W\\sin\\theta + \\mu_s R$.",
    "stepByStepSolutionEn": [
      "1. Perpendicular to plane: $R = W \\cos 30^\\circ = 60 \\times \\frac{\\sqrt{3}}{2} = 30\\sqrt{3}\\text{ N}$.",
      "2. Limiting friction acts down the plane: $F_s = \\mu_s R = \\frac{\\sqrt{3}}{3} \\times 30\\sqrt{3} = 30\\text{ N}$.",
      "3. Component of weight down the plane: $W \\sin 30^\\circ = 60 \\times 0.5 = 30\\text{ N}$.",
      "4. Along the plane for upward impending motion: $P = W \\sin 30^\\circ + F_s = 30 + 30 = 60\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 60 \\cos 30^\\circ = 30\\sqrt{3}\\text{ نيوتن}$.",
      "٢. قوة الاحتكاك لأسفل المستوى: $F_s = \\frac{\\sqrt{3}}{3} \\times 30\\sqrt{3} = 30\\text{ نيوتن}$.",
      "٣. مركبة الوزن لأسفل المستوى: $60 \\sin 30^\\circ = 30\\text{ نيوتن}$.",
      "٤. القوة المطلوبة لأعلى: $P = 30 + 30 = 60\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice the difference: P_min = 0 N (prevent sliding down) vs P_max = 60 N (verge of moving up). Any force between 0 and 60 maintains equilibrium!",
    "teacherTipAr": "أي قوة تقع بين ٠ و ٦٠ نيوتن تحفظ توازن الجسم على المستوى."
  },
  {
    "id": "stat_ch1_se_07",
    "titleEn": "MoE Example 7: Horizontal Force on Inclined Plane",
    "titleAr": "مثال الوزارة ٧: قوة أفقية تؤثر على جسم على مستوى مائل",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 40\\text{ N}$ rests on a rough plane inclined at $45^\\circ$ to the horizontal. If a horizontal force $P = 50\\text{ N}$ directed towards the plane puts the body on the verge of moving up the plane, find $\\mu_s$.",
    "questionAr": "جسم وزنه $40\\text{ نيوتن}$ موضوع على مستوى مائل خشن يميل على الأفقي بزاوية $45^\\circ$. أثرت عليه قوة أفقية $P = 50\\text{ نيوتن}$ نحو المستوى جعلته على وشك الحركة لأعلى. أوجد $\\mu_s$.",
    "optionsEn": [
      "$\\frac{1}{9}$",
      "$\\frac{1}{5}$",
      "$\\frac{1}{3}$",
      "$\\frac{2}{5}$"
    ],
    "optionsAr": [
      "\\frac{1}{9}",
      "\\frac{1}{5}",
      "\\frac{1}{3}",
      "\\frac{2}{5}"
    ],
    "correctAnswer": "$\\frac{1}{9}$",
    "correctIndex": 0,
    "hintEn": "Resolve horizontal force $P$ along the plane ($P\\cos 45^\\circ$) and perpendicular to it ($P\\sin 45^\\circ$).",
    "hintAr": "حلل القوة الأفقية في اتجاه المستوى ($P\\cos 45^\\circ$) والعمودي عليه ($P\\sin 45^\\circ$).",
    "stepByStepSolutionEn": [
      "1. Perpendicular to plane: $R = W \\cos 45^\\circ + P \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}(40 + 50) = 45\\sqrt{2}\\text{ N}$.",
      "2. Along the plane (verge of moving up => $F_s$ acts down):",
      "$$P \\cos 45^\\circ = W \\sin 45^\\circ + F_s \\implies 50 \\frac{\\sqrt{2}}{2} = 40 \\frac{\\sqrt{2}}{2} + F_s \\implies F_s = 5\\sqrt{2}\\text{ N}$$",
      "3. Coefficient of static friction: $\\mu_s = \\frac{F_s}{R} = \\frac{5\\sqrt{2}}{45\\sqrt{2}} = \\frac{1}{9}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الاتجاه العمودي: $R = 40 \\cos 45^\\circ + 50 \\sin 45^\\circ = 45\\sqrt{2}\\text{ نيوتن}$.",
      "٢. معادلة اتجاه المستوى (الحركة وشيكة لأعلى):",
      "$$50 \\cos 45^\\circ = 40 \\sin 45^\\circ + F_s \\implies F_s = 5\\sqrt{2}\\text{ نيوتن}$$",
      "٣. معامل الاحتكاك: $\\mu_s = \\frac{F_s}{R} = \\frac{5\\sqrt{2}}{45\\sqrt{2}} = \\frac{1}{9}$."
    ],
    "teacherTipEn": "A horizontal force directed towards the plane increases the normal reaction by P sin(theta).",
    "teacherTipAr": "القوة الأفقية نحو المستوى تزيد من رد الفعل العمودي بمقدار ق جا(هـ)."
  },
  {
    "id": "stat_ch1_se_08",
    "titleEn": "MoE Example 8: Least Force in Any Direction to Move a Body",
    "titleAr": "مثال الوزارة ٨: أقل قوة بأي اتجاه تلزم لتحريك جسم على مستوى أفقي",
    "difficulty": "hots",
    "questionEn": "A body of weight $W = 100\\text{ N}$ rests on a rough horizontal plane where the angle of friction is $\\lambda = 30^\\circ$. Find the minimum magnitude of force $P_{\\min}$ required to move the body.",
    "questionAr": "جسم وزنه $100\\text{ نيوتن}$ موضوع على مستوى أفقي خشن زاوية احتكاكه $\\lambda = 30^\\circ$. أوجد أقل مقدار للقوة $P_{\\min}$ يلزم لتحريك الجسم في أي اتجاه.",
    "optionsEn": [
      "$50\\text{ N}$",
      "$100\\text{ N}$",
      "$50\\sqrt{3}\\text{ N}$",
      "$25\\text{ N}$"
    ],
    "optionsAr": [
      "50 نيوتن",
      "100 نيوتن",
      "50\\sqrt{3} نيوتن",
      "25 نيوتن"
    ],
    "correctAnswer": "$50\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The minimum pulling force occurs when its angle of inclination equals the angle of friction: $P_{\\min} = W\\sin\\lambda$.",
    "hintAr": "أقل قوة شد تحدث عندما تكون زاوية ميلها مساوية لزاوية الاحتكاك: $P_{\\min} = W\\sin\\lambda$.",
    "stepByStepSolutionEn": [
      "1. Let force $P$ be inclined at angle $\\theta$ to the horizontal.",
      "2. Equilibrium equations: $R = W - P\\sin\\theta$ and $P\\cos\\theta = \\mu_s R = \\tan\\lambda (W - P\\sin\\theta)$.",
      "3. Multiply by $\\cos\\lambda$: $P(\\cos\\theta\\cos\\lambda + \\sin\\theta\\sin\\lambda) = W\\sin\\lambda \\implies P\\cos(\\theta - \\lambda) = W\\sin\\lambda$.",
      "4. For $P$ to be minimum, $\\cos(\\theta - \\lambda)$ must be maximum, which is $1$ (when $\\theta = \\lambda$):",
      "$$P_{\\min} = W \\sin\\lambda = 100 \\sin 30^\\circ = 100(0.5) = 50\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "١. بفرض أن القوة $P$ تميل بزاوية $\\theta$ على الأفقي.",
      "٢. بالتحليل وإعادة الترتيب: $P \\cos(\\theta - \\lambda) = W \\sin\\lambda$.",
      "٣. تكون $P$ أقل ما يمكن عندما يكون $\\cos(\\theta - \\lambda) = 1$ (أي $\\theta = \\lambda$):",
      "$$P_{\\min} = W \\sin\\lambda = 100 \\times 0.5 = 50\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "Key exam theorem: Least pulling force to move a body on horizontal ground is P_min = W sin(lambda), inclined at angle theta = lambda.",
    "teacherTipAr": "قاعدة امتحانية هامة: أقل قوة شد تحرك جسماً على مستوى أفقي هي و جا(ل) وتكون مائلة بزاوية هـ = ل."
  },
  {
    "id": "stat_ch1_se_09",
    "titleEn": "MoE Example 9: Ratio of Verge of Upward to Downward Forces",
    "titleAr": "مثال الوزارة ٩: النسبة بين قوتي وشك الحركة لأعلى ولأسفل",
    "difficulty": "hots",
    "questionEn": "A body of weight $W$ on an inclined plane of angle $\\theta = 30^\\circ$ requires a force $P_1$ along the line of greatest slope to make it on the verge of moving up, and a force $P_2$ to prevent it from slipping down. If $P_1 = 3 P_2$, find the coefficient of friction $\\mu_s$.",
    "questionAr": "جسم وزنه $W$ موضوع على مستوى مائل بزاوية $\\theta = 30^\\circ$، يحتاج إلى قوة $P_1$ لأعلى المستوى ليصبح على وشك الحركة لأعلى، وإلى قوة $P_2$ لأعلى المستوى لمنعه من الانزلاق. فإذا كان $P_1 = 3 P_2$، فأوجد $\\mu_s$.",
    "optionsEn": [
      "$\\frac{\\sqrt{3}}{6}$",
      "$\\frac{\\sqrt{3}}{3}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "\\frac{\\sqrt{3}}{6}",
      "\\frac{\\sqrt{3}}{3}",
      "\\frac{\\sqrt{3}}{2}",
      "\\frac{1}{3}"
    ],
    "correctAnswer": "$\\frac{\\sqrt{3}}{6}$",
    "correctIndex": 0,
    "hintEn": "$P_1 = W(\\sin\\theta + \\mu_s\\cos\\theta)$ and $P_2 = W(\\sin\\theta - \\mu_s\\cos\\theta)$.",
    "hintAr": "$P_1 = W(\\sin\\theta + \\mu_s\\cos\\theta)$ و $P_2 = W(\\sin\\theta - \\mu_s\\cos\\theta)$.",
    "stepByStepSolutionEn": [
      "1. $P_1 = W(\\sin 30^\\circ + \\mu_s \\cos 30^\\circ) = W(0.5 + \\mu_s \\frac{\\sqrt{3}}{2})$.",
      "2. $P_2 = W(\\sin 30^\\circ - \\mu_s \\cos 30^\\circ) = W(0.5 - \\mu_s \\frac{\\sqrt{3}}{2})$.",
      "3. Given $P_1 = 3 P_2$:",
      "$$0.5 + \\mu_s \\frac{\\sqrt{3}}{2} = 3(0.5 - \\mu_s \\frac{\\sqrt{3}}{2}) = 1.5 - 3\\mu_s \\frac{\\sqrt{3}}{2}$$",
      "$$4 \\mu_s \\frac{\\sqrt{3}}{2} = 1 \\implies 2\\sqrt{3} \\mu_s = 1 \\implies \\mu_s = \\frac{1}{2\\sqrt{3}} = \\frac{\\sqrt{3}}{6}$$"
    ],
    "stepByStepSolutionAr": [
      "١. $P_1 = W(\\sin 30^\\circ + \\mu_s \\cos 30^\\circ)$.",
      "٢. $P_2 = W(\\sin 30^\\circ - \\mu_s \\cos 30^\\circ)$.",
      "٣. بما أن $P_1 = 3 P_2$:",
      "$$0.5 + \\mu_s \\frac{\\sqrt{3}}{2} = 1.5 - 3\\mu_s \\frac{\\sqrt{3}}{2} \\implies 2\\sqrt{3}\\mu_s = 1 \\implies \\mu_s = \\frac{\\sqrt{3}}{6}$$"
    ],
    "teacherTipEn": "Set up the ratio P1/P2 = (sin theta + mu_s cos theta) / (sin theta - mu_s cos theta).",
    "teacherTipAr": "استخدم النسبة المباشرة بين القوتين وعوض بالزاوية."
  },
  {
    "id": "stat_ch1_se_10",
    "titleEn": "MoE Example 10: Connected Bodies on Rough Horizontal Plane",
    "titleAr": "مثال الوزارة ١٠: جسمان مربوطان بخيط على مستوى أفقي خشن",
    "difficulty": "medium",
    "questionEn": "Two bodies of weights $W_1 = 20\\text{ N}$ and $W_2 = 40\\text{ N}$ are connected by a light inextensible string on a rough horizontal plane with $\\mu_s = 0.25$. A horizontal force $P$ pulls the first body making both on the verge of motion. Find the tension $T$ in the string.",
    "questionAr": "جسمان وزناهما $W_1 = 20\\text{ نيوتن}$ و $W_2 = 40\\text{ نيوتن}$ مربوطان بخيط خفيف غير مرن على مستوى أفقي خشن معامل احتكاكه $\\mu_s = 0.25$. أثرت قوة أفقية $P$ على الجسم الأول فجعلت المجموعة على وشك الحركة. أوجد الشد $T$ في الخيط بين الجسمين.",
    "optionsEn": [
      "$10\\text{ N}$",
      "$5\\text{ N}$",
      "$15\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "10 نيوتن",
      "5 نيوتن",
      "15 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$10\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Consider the free body diagram of the second body ($W_2 = 40\\text{ N}$). It is pulled solely by tension $T$.",
    "hintAr": "ادرس اتزان الجسم الثاني ($W_2 = 40$) منفرداً، فالقوة الوحيدة التي تسحبه هي الشد $T$.",
    "stepByStepSolutionEn": [
      "1. For the second body ($W_2 = 40\\text{ N}$):",
      "Normal reaction: $R_2 = W_2 = 40\\text{ N}$.",
      "Limiting friction on body 2: $F_{s2} = \\mu_s R_2 = 0.25 \\times 40 = 10\\text{ N}$.",
      "2. For body 2 to be on the verge of motion: $T = F_{s2} = 10\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. دراسة اتزان الجسم الثاني ($W_2 = 40\\text{ نيوتن}$):",
      "رد الفعل: $R_2 = 40\\text{ نيوتن}$.",
      "قوة الاحتكاك: $F_{s2} = 0.25 \\times 40 = 10\\text{ نيوتن}$.",
      "٢. عند وشك الحركة يكون الشد: $T = F_{s2} = 10\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Isolating the trailing body directly reveals the tension T without needing the total pulling force P.",
    "teacherTipAr": "عزل الجسم الخلفي يكشف فوراً عن قيمة الشد T دون الحاجة لحساب القوة الكلية P."
  }
];

export const statCh1Exercises: SolvedProblem[] = [
  {
    "id": "stat_ch1_ex_01",
    "titleEn": "MoE Unit Exercise 1: Finding Coefficient of Static Friction",
    "titleAr": "تمرين الوحدة ١: إيجاد معامل الاحتكاك السكوني",
    "difficulty": "easy",
    "questionEn": "A body of weight $50\\text{ N}$ rests on a rough horizontal plane. If a horizontal force of $20\\text{ N}$ puts the body on the verge of motion, find $\\mu_s$.",
    "questionAr": "جسم وزنه $50\\text{ نيوتن}$ موضوع على مستوى أفقي خشن. فإذا جعلته قوة أفقية مقدارها $20\\text{ نيوتن}$ على وشك الحركة، فأوجد $\\mu_s$.",
    "optionsEn": [
      "$0.4$",
      "$0.25$",
      "$0.5$",
      "$2.5$"
    ],
    "optionsAr": [
      "0.4",
      "0.25",
      "0.5",
      "2.5"
    ],
    "correctAnswer": "$0.4$",
    "correctIndex": 0,
    "hintEn": "$\\mu_s = F_s / R = P / W$.",
    "hintAr": "$\\mu_s = F_s / R = P / W$.",
    "stepByStepSolutionEn": [
      "1. $R = W = 50\\text{ N}$.",
      "2. At verge of motion: $F_s = P = 20\\text{ N}$.",
      "3. $\\mu_s = \\frac{F_s}{R} = \\frac{20}{50} = 0.4$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل: $R = 50\\text{ نيوتن}$.",
      "٢. عند وشك الحركة: $F_s = 20\\text{ نيوتن}$.",
      "٣. $\\mu_s = \\frac{20}{50} = 0.4$."
    ],
    "teacherTipEn": "mu_s is dimensionless.",
    "teacherTipAr": "معامل الاحتكاك السكوني كمية عديمة الأبعاد."
  },
  {
    "id": "stat_ch1_ex_02",
    "titleEn": "MoE Unit Exercise 2: Angle of Friction from Coefficient",
    "titleAr": "تمرين الوحدة ٢: زاوية الاحتكاك من المعامل",
    "difficulty": "easy",
    "questionEn": "If the coefficient of static friction between a body and a plane is $\\mu_s = \\sqrt{3}$, what is the angle of friction $\\lambda$?",
    "questionAr": "إذا كان معامل الاحتكاك السكوني بين جسم ومستوى هو $\\mu_s = \\sqrt{3}$، فما هي زاوية الاحتكاك $\\lambda$؟",
    "optionsEn": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$75^\\circ$"
    ],
    "optionsAr": [
      "60^\\circ",
      "30^\\circ",
      "45^\\circ",
      "75^\\circ"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "$\\tan\\lambda = \\mu_s$.",
    "hintAr": "$\\tan\\lambda = \\mu_s$.",
    "stepByStepSolutionEn": [
      "$$\\tan\\lambda = \\mu_s = \\sqrt{3} \\implies \\lambda = 60^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\tan\\lambda = \\sqrt{3} \\implies \\lambda = 60^\\circ$$"
    ],
    "teacherTipEn": "tan(60) = sqrt(3) and tan(30) = 1/sqrt(3).",
    "teacherTipAr": "ظا ٦٠ = جذر ٣، وظا ٣٠ = ١ / جذر ٣."
  },
  {
    "id": "stat_ch1_ex_03",
    "titleEn": "MoE Unit Exercise 3: Components of Resultant Reaction",
    "titleAr": "تمرين الوحدة ٣: مركبات رد الفعل المحصل",
    "difficulty": "medium",
    "questionEn": "If the resultant reaction is $R' = 50\\text{ N}$ and the normal reaction is $R = 40\\text{ N}$, find the limiting friction force $F_s$.",
    "questionAr": "إذا كان رد الفعل المحصل $R' = 50\\text{ نيوتن}$ ورد الفعل العمودي $R = 40\\text{ نيوتن}$، فأوجد قوة الاحتكاك السكوني النهائي $F_s$.",
    "optionsEn": [
      "$30\\text{ N}$",
      "$10\\text{ N}$",
      "$45\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "30 نيوتن",
      "10 نيوتن",
      "45 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$30\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Pythagorean relation: $(R')^2 = R^2 + F_s^2$.",
    "hintAr": "علاقة فيثاغورس: $(R')^2 = R^2 + F_s^2$.",
    "stepByStepSolutionEn": [
      "$$F_s = \\sqrt{(R')^2 - R^2} = \\sqrt{50^2 - 40^2} = \\sqrt{2500 - 1600} = \\sqrt{900} = 30\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "$$F_s = \\sqrt{50^2 - 40^2} = 30\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "3-4-5 Pythagorean triple scaled by 10 (30-40-50).",
    "teacherTipAr": "ثلاثية فيثاغورس الشهيرة ٣-٤-٥ مضروبة في ١٠."
  },
  {
    "id": "stat_ch1_ex_04",
    "titleEn": "MoE Unit Exercise 4: Inclined Pulling Force",
    "titleAr": "تمرين الوحدة ٤: قوة شد مائلة على الأفقي",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 60\\text{ N}$ rests on a rough horizontal plane with $\\mu_s = 0.5$. A force $P$ inclined at $45^\\circ$ above horizontal makes the body on the verge of motion. Find $P$.",
    "questionAr": "جسم وزنه $60\\text{ نيوتن}$ موضوع على مستوى أفقي خشن معامل احتكاكه $\\mu_s = 0.5$. قوة $P$ تميل بزاوية $45^\\circ$ لأعلى جعلت الجسم على وشك الحركة. أوجد $P$.",
    "optionsEn": [
      "$20\\sqrt{2}\\text{ N}$",
      "$30\\sqrt{2}\\text{ N}$",
      "$40\\text{ N}$",
      "$15\\sqrt{2}\\text{ N}$"
    ],
    "optionsAr": [
      "20\\sqrt{2} نيوتن",
      "30\\sqrt{2} نيوتن",
      "40 نيوتن",
      "15\\sqrt{2} نيوتن"
    ],
    "correctAnswer": "$20\\sqrt{2}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$P\\cos 45^\\circ = \\mu_s(W - P\\sin 45^\\circ)$.",
    "hintAr": "$P\\cos 45^\\circ = \\mu_s(W - P\\sin 45^\\circ)$.",
    "stepByStepSolutionEn": [
      "1. $R = 60 - P\\sin 45^\\circ$.",
      "2. $P\\cos 45^\\circ = 0.5(60 - P\\sin 45^\\circ)$.",
      "3. Since $\\cos 45^\\circ = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$:",
      "$$P \\frac{\\sqrt{2}}{2} + 0.5 P \\frac{\\sqrt{2}}{2} = 30 \\implies 1.5 P \\frac{\\sqrt{2}}{2} = 30 \\implies P \\frac{3\\sqrt{2}}{4} = 30 \\implies P = \\frac{120}{3\\sqrt{2}} = 20\\sqrt{2}\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "١. $R = 60 - P\\sin 45^\\circ$.",
      "٢. $P\\cos 45^\\circ = 0.5(60 - P\\sin 45^\\circ)$.",
      "٣. بالتبسيط نجد أن: $P = 20\\sqrt{2}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Always isolate P terms on one side.",
    "teacherTipAr": "اجمع حدود القوة P في طرف واحد لحساب قيمتها بدقة."
  },
  {
    "id": "stat_ch1_ex_05",
    "titleEn": "MoE Unit Exercise 5: Critical Inclination Angle",
    "titleAr": "تمرين الوحدة ٥: زاوية الميل الحرجة",
    "difficulty": "easy",
    "questionEn": "A body rests on a plane inclined at $\\theta = 45^\\circ$. If the body is on the verge of sliding down under its weight alone, find $\\mu_s$.",
    "questionAr": "جسم موضوع على مستوى مائل بزاوية $45^\\circ$، وكان على وشك الانزلاق تحت تأثير وزنه فقط. ما قيمة $\\mu_s$؟",
    "optionsEn": [
      "$1$",
      "$\\frac{1}{2}$",
      "$\\sqrt{2}$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "optionsAr": [
      "1",
      "\\frac{1}{2}",
      "\\sqrt{2}",
      "\\frac{\\sqrt{2}}{2}"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "$\\mu_s = \\tan\\theta = \\tan 45^\\circ$.",
    "hintAr": "$\\mu_s = \\tan\\theta = \\tan 45^\\circ$.",
    "stepByStepSolutionEn": [
      "$$\\mu_s = \\tan 45^\\circ = 1$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\mu_s = \\tan 45^\\circ = 1$$"
    ],
    "teacherTipEn": "tan(45) = 1.",
    "teacherTipAr": "ظا ٤٥ = ١."
  },
  {
    "id": "stat_ch1_ex_06",
    "titleEn": "MoE Unit Exercise 6: Upward Force on 30 Degree Plane",
    "titleAr": "تمرين الوحدة ٦: قوة صاعدة على مستوى مائل ٣٠ درجة",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 20\\text{ N}$ is on a rough plane inclined at $30^\\circ$ with $\\mu_s = \\frac{\\sqrt{3}}{3}$. Find the force up along the line of greatest slope to make it on the verge of moving up.",
    "questionAr": "جسم وزنه $20\\text{ نيوتن}$ على مستوى خشن يميل بزاوية $30^\\circ$ ومعامل احتكاكه $\\mu_s = \\frac{\\sqrt{3}}{3}$. أوجد القوة لأعلى خط أكبر ميل لتجعله على وشك الحركة لأعلى.",
    "optionsEn": [
      "$20\\text{ N}$",
      "$10\\text{ N}$",
      "$30\\text{ N}$",
      "$10\\sqrt{3}\\text{ N}$"
    ],
    "optionsAr": [
      "20 نيوتن",
      "10 نيوتن",
      "30 نيوتن",
      "10\\sqrt{3} نيوتن"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$P = W(\\sin 30^\\circ + \\mu_s \\cos 30^\\circ)$.",
    "hintAr": "$P = W(\\sin 30^\\circ + \\mu_s \\cos 30^\\circ)$.",
    "stepByStepSolutionEn": [
      "1. $W \\sin 30^\\circ = 20(0.5) = 10\\text{ N}$.",
      "2. $F_s = \\mu_s W \\cos 30^\\circ = \\frac{\\sqrt{3}}{3} \\times 20 \\times \\frac{\\sqrt{3}}{2} = 10\\text{ N}$.",
      "3. $P = 10 + 10 = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة الوزن: $10\\text{ نيوتن}$.",
      "٢. قوة الاحتكاك لأسفل: $10\\text{ نيوتن}$.",
      "٣. القوة: $P = 10 + 10 = 20\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Weight component and friction are equal here.",
    "teacherTipAr": "مركبة الوزن وقوة الاحتكاك متساويتان في هذه المسألة."
  },
  {
    "id": "stat_ch1_ex_07",
    "titleEn": "MoE Unit Exercise 7: Force Inclined at Angle of Friction",
    "titleAr": "تمرين الوحدة ٧: قوة مائلة بزاوية تساوي زاوية الاحتكاك",
    "difficulty": "hots",
    "questionEn": "A force $P$ pulls a body of weight $W = 80\\text{ N}$ on a rough horizontal plane at an angle $\\theta = \\lambda = 30^\\circ$. What is the minimum pulling force required to move the body?",
    "questionAr": "قوة $P$ تشد جسماً وزنه $80\\text{ نيوتن}$ على مستوى أفقي خشن بزاوية $\\theta = \\lambda = 30^\\circ$. ما أقل قوة شد تلزم لتحريك الجسم؟",
    "optionsEn": [
      "$40\\text{ N}$",
      "$80\\text{ N}$",
      "$40\\sqrt{3}\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "40 نيوتن",
      "80 نيوتن",
      "40\\sqrt{3} نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$40\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$P_{\\min} = W \\sin\\lambda$.",
    "hintAr": "$P_{\\min} = W \\sin\\lambda$.",
    "stepByStepSolutionEn": [
      "$$P_{\\min} = W \\sin\\lambda = 80 \\sin 30^\\circ = 80(0.5) = 40\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "$$P_{\\min} = 80 \\sin 30^\\circ = 40\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "Minimum force theorem directly applies.",
    "teacherTipAr": "تطبيق مباشر لنظرية أقل قوة لتحريك الجسم."
  },
  {
    "id": "stat_ch1_ex_08",
    "titleEn": "MoE Unit Exercise 8: Friction State Classification",
    "titleAr": "تمرين الوحدة ٨: تحديد حالة الاحتكاك",
    "difficulty": "easy",
    "questionEn": "A body of weight $100\\text{ N}$ rests on a rough horizontal plane with $\\mu_s = 0.4$. If a horizontal force of $25\\text{ N}$ is applied, what is the friction force acting on the body?",
    "questionAr": "جسم وزنه $100\\text{ نيوتن}$ موضوع على مستوى أفقي خشن معامل احتكاكه $0.4$. إذا أثرت قوة أفقية مقدارها $25\\text{ نيوتن}$، فما هي قوة الاحتكاك المؤثرة على الجسم؟",
    "optionsEn": [
      "$25\\text{ N}$",
      "$40\\text{ N}$",
      "$100\\text{ N}$",
      "$0\\text{ N}$"
    ],
    "optionsAr": [
      "25 نيوتن",
      "40 نيوتن",
      "100 نيوتن",
      "0 نيوتن"
    ],
    "correctAnswer": "$25\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Compare applied force $P = 25\\text{ N}$ with limiting friction $F_s = \\mu_s R = 40\\text{ N}$.",
    "hintAr": "قارن القوة المؤثرة $25$ بأقصى احتكاك $F_s = 40$.",
    "stepByStepSolutionEn": [
      "1. Limiting static friction: $F_s = \\mu_s R = 0.4 \\times 100 = 40\\text{ N}$.",
      "2. Since applied force $P = 25\\text{ N} < F_s = 40\\text{ N}$, the body is in static equilibrium (not at verge of motion).",
      "3. Therefore, the actual friction force equals the applied force: $F = P = 25\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الاحتكاك النهائي: $F_s = 40\\text{ نيوتن}$.",
      "٢. بما أن القوة المؤثرة $25 < 40$، فالجسم متزن تماماً ولم يصل لوشك الحركة.",
      "٣. قوة الاحتكاك الفعلي تساوي القوة المؤثرة: $F = 25\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Classic trap! Actual friction equals applied force until limiting friction is reached.",
    "teacherTipAr": "فخ امتحاني شهير! الاحتكاك الفعلي يساوي القوة المؤثرة طالما لم يصل الجسم لوشك الحركة."
  },
  {
    "id": "stat_ch1_ex_09",
    "titleEn": "MoE Unit Exercise 9: Horizontal Force on Inclined Plane of 30 Degrees",
    "titleAr": "تمرين الوحدة ٩: قوة أفقية على مستوى مائل ٣٠ درجة",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 30\\text{ N}$ on a rough plane inclined at $30^\\circ$ with $\\mu_s = \\frac{\\sqrt{3}}{3}$ is kept in equilibrium by a horizontal force $P$ directed into the plane. If the body is on the verge of moving up, find $P$.",
    "questionAr": "جسم وزنه $30\\text{ نيوتن}$ على مستوى خشن يميل بزاوية $30^\\circ$ ومعامل احتكاكه $\\mu_s = \\frac{\\sqrt{3}}{3}$. حفظ في حالة اتزان بقوة أفقية $P$ نحو المستوى جعلته على وشك الحركة لأعلى. أوجد $P$.",
    "optionsEn": [
      "$30\\sqrt{3}\\text{ N}$",
      "$30\\text{ N}$",
      "$15\\sqrt{3}\\text{ N}$",
      "$60\\text{ N}$"
    ],
    "optionsAr": [
      "30\\sqrt{3} نيوتن",
      "30 نيوتن",
      "15\\sqrt{3} نيوتن",
      "60 نيوتن"
    ],
    "correctAnswer": "$30\\sqrt{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$R = W\\cos 30^\\circ + P\\sin 30^\\circ$ and $P\\cos 30^\\circ = W\\sin 30^\\circ + \\mu_s R$.",
    "hintAr": "$R = W\\cos 30^\\circ + P\\sin 30^\\circ$ و $P\\cos 30^\\circ = W\\sin 30^\\circ + \\mu_s R$.",
    "stepByStepSolutionEn": [
      "1. $R = 30 \\frac{\\sqrt{3}}{2} + 0.5 P = 15\\sqrt{3} + 0.5 P$.",
      "2. Along plane: $P \\frac{\\sqrt{3}}{2} = 30(0.5) + \\frac{1}{\\sqrt{3}}(15\\sqrt{3} + 0.5 P) = 15 + 15 + \\frac{P}{2\\sqrt{3}} = 30 + \\frac{P}{2\\sqrt{3}}$.",
      "3. Multiply by $2\\sqrt{3}$: $3P = 60\\sqrt{3} + P \\implies 2P = 60\\sqrt{3} \\implies P = 30\\sqrt{3}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. $R = 15\\sqrt{3} + 0.5 P$.",
      "٢. معادلة اتجاه المستوى: $P \\frac{\\sqrt{3}}{2} = 30 + \\frac{P}{2\\sqrt{3}}$.",
      "٣. بالتبسيط: $2P = 60\\sqrt{3} \\implies P = 30\\sqrt{3}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Multiply by common denominators to eliminate roots quickly.",
    "teacherTipAr": "اضرب في المقام المشترك للتخلص من الجذور سريعاً."
  },
  {
    "id": "stat_ch1_ex_10",
    "titleEn": "MoE Unit Exercise 10: Range of Equilibrium Forces",
    "titleAr": "تمرين الوحدة ١٠: فترة القوى التي تحفظ التوازن",
    "difficulty": "hots",
    "questionEn": "A body of weight $W = 20\\text{ N}$ is on a rough inclined plane with $\\theta = 30^\\circ$ and $\\mu_s = \\frac{\\sqrt{3}}{5}$. What is the range $[P_1, P_2]$ of forces directed up along the line of greatest slope for which the body remains in equilibrium?",
    "questionAr": "جسم وزنه $20\\text{ نيوتن}$ على مستوى مائل خشن زاوية ميله $30^\\circ$ ومعامل احتكاكه $\\mu_s = \\frac{\\sqrt{3}}{5}$. ما هي فترة القوى $[P_1, P_2]$ الموجهة لأعلى خط أكبر ميل التي يظل الجسم متزناً عندها؟",
    "optionsEn": [
      "$[4, 16]\\text{ N}$",
      "$[6, 14]\\text{ N}$",
      "$[0, 20]\\text{ N}$",
      "$[5, 15]\\text{ N}$"
    ],
    "optionsAr": [
      "[4, 16] نيوتن",
      "[6, 14] نيوتن",
      "[0, 20] نيوتن",
      "[5, 15] نيوتن"
    ],
    "correctAnswer": "$[4, 16]\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$P_1 = W\\sin\\theta - \\mu_s W\\cos\\theta$ and $P_2 = W\\sin\\theta + \\mu_s W\\cos\\theta$.",
    "hintAr": "$P_1 = W\\sin\\theta - \\mu_s W\\cos\\theta$ و $P_2 = W\\sin\\theta + \\mu_s W\\cos\\theta$.",
    "stepByStepSolutionEn": [
      "1. $W \\sin 30^\\circ = 20(0.5) = 10\\text{ N}$.",
      "2. $F_s = \\mu_s W \\cos 30^\\circ = \\frac{\\sqrt{3}}{5} \\times 20 \\times \\frac{\\sqrt{3}}{2} = \\frac{3}{10} \\times 20 = 6\\text{ N}$.",
      "3. Least force (prevent slipping): $P_1 = 10 - 6 = 4\\text{ N}$.",
      "4. Greatest force (verge of moving up): $P_2 = 10 + 6 = 16\\text{ N}$.",
      "5. Range: $[4, 16]\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة الوزن: $10\\text{ نيوتن}$.",
      "٢. الاحتكاك: $F_s = 6\\text{ نيوتن}$.",
      "٣. أقل قوة لمنع الانزلاق: $P_1 = 10 - 6 = 4\\text{ نيوتن}$.",
      "٤. أكبر قوة قبل الصعود: $P_2 = 10 + 6 = 16\\text{ نيوتن}$.",
      "٥. الفترة: $[4, 16]\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Equilibrium interval: [W sin theta - F_s, W sin theta + F_s].",
    "teacherTipAr": "فترة الاتزان: [مركبة الوزن - الاحتكاك، مركبة الوزن + الاحتكاك]."
  },
  {
    "id": "stat_ch1_ex_11",
    "titleEn": "MoE Unit Exercise 11: Equilibrium Condition Under Weight Alone",
    "titleAr": "تمرين الوحدة ١١: شرط الاتزان تحت تأثير الوزن فقط",
    "difficulty": "easy",
    "questionEn": "A body remains in equilibrium on a rough inclined plane of inclination angle $\\theta$ under its weight alone if and only if:",
    "questionAr": "يظل جسم في حالة اتزان على مستوى مائل خشن زاوية ميله $\\theta$ تحت تأثير وزنه فقط إذا وفقط إذا كان:",
    "optionsEn": [
      "$\\theta \\le \\lambda$",
      "$\\theta > \\lambda$",
      "$\\theta = 90^\\circ$",
      "$\\tan\\theta > \\mu_s$"
    ],
    "optionsAr": [
      "\\theta \\le \\lambda",
      "\\theta > \\lambda",
      "\\theta = 90^\\circ",
      "\\tan\\theta > \\mu_s"
    ],
    "correctAnswer": "$\\theta \\le \\lambda$",
    "correctIndex": 0,
    "hintEn": "The angle of inclination must not exceed the angle of friction.",
    "hintAr": "يجب ألا تزيد زاوية ميل المستوى عن زاوية الاحتكاك.",
    "stepByStepSolutionEn": [
      "For a body to rest without slipping under its own weight, $W \\sin\\theta \\le \\mu_s W \\cos\\theta \\implies \\tan\\theta \\le \\mu_s = \\tan\\lambda \\implies \\theta \\le \\lambda$."
    ],
    "stepByStepSolutionAr": [
      "لكي يستقر الجسم دون انزلاق بوزنه فقط: $W \\sin\\theta \\le \\mu_s W \\cos\\theta \\implies \\theta \\le \\lambda$."
    ],
    "teacherTipEn": "If theta > lambda, the body slides down.",
    "teacherTipAr": "إذا كانت هـ > ل، ينزلق الجسم لأسفل."
  },
  {
    "id": "stat_ch1_ex_12",
    "titleEn": "MoE Unit Exercise 12: Angle of Resultant Reaction with Horizontal",
    "titleAr": "تمرين الوحدة ١٢: زاوية ميل رد الفعل المحصل على الأفقي",
    "difficulty": "medium",
    "questionEn": "A body rests on a rough horizontal plane. If the resultant reaction $R'$ makes an angle of $60^\\circ$ with the horizontal plane when motion is impending, find $\\mu_s$.",
    "questionAr": "جسم موضوع على مستوى أفقي خشن. فإذا كان رد الفعل المحصل $R'$ يصنع زاوية قياسها $60^\\circ$ مع المستوى الأفقي عند وشك الحركة، فما هو معامل الاحتكاك $\\mu_s$؟",
    "optionsEn": [
      "$\\frac{\\sqrt{3}}{3}$",
      "$\\sqrt{3}$",
      "$1$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "\\frac{\\sqrt{3}}{3}",
      "\\sqrt{3}",
      "1",
      "\\frac{1}{2}"
    ],
    "correctAnswer": "$\\frac{\\sqrt{3}}{3}$",
    "correctIndex": 0,
    "hintEn": "The angle of friction $\\lambda$ is between $R'$ and the normal (vertical), so $\\lambda = 90^\\circ - 60^\\circ = 30^\\circ$.",
    "hintAr": "زاوية الاحتكاك $\\lambda$ تقاس مع العمودي (الرأسي)، إذن $\\lambda = 90^\\circ - 60^\\circ = 30^\\circ$.",
    "stepByStepSolutionEn": [
      "1. The angle between $R'$ and the horizontal is $60^\\circ$.",
      "2. The angle with the normal reaction $R$ (vertical) is $\\lambda = 90^\\circ - 60^\\circ = 30^\\circ$.",
      "3. Therefore: $\\mu_s = \\tan\\lambda = \\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. الزاوية مع الأفقي هي ٦٠ درجة.",
      "٢. زاوية الاحتكاك مع العمودي هي: $\\lambda = 90^\\circ - 60^\\circ = 30^\\circ$.",
      "٣. $\\mu_s = \\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$."
    ],
    "teacherTipEn": "Always check whether the angle is given with the vertical (normal) or the horizontal (plane)!",
    "teacherTipAr": "انتبه دائماً هل الزاوية معطاة مع المستوى الأفقي أم مع الخط العمودي عليه!"
  },
  {
    "id": "stat_ch1_ex_13",
    "titleEn": "MoE Unit Exercise 13: Push Force on Horizontal Plane",
    "titleAr": "تمرين الوحدة ١٣: قوة ضغط مائلة على مستوى أفقي",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 50\\text{ N}$ on a rough horizontal plane is pushed by a force $P$ inclined at $30^\\circ$ below the horizontal. If $\\mu_s = \\frac{\\sqrt{3}}{5}$ and the body is on the verge of motion, find $P$.",
    "questionAr": "جسم وزنه $50\\text{ نيوتن}$ على مستوى أفقي خشن، يؤثر عليه ضغط بقوة $P$ تميل لأسفل بزاوية $30^\\circ$ على الأفقي. إذا كان $\\mu_s = \\frac{\\sqrt{3}}{5}$ والجسم على وشك الحركة، فأوجد $P$.",
    "optionsEn": [
      "$25\\text{ N}$",
      "$20\\text{ N}$",
      "$15\\sqrt{3}\\text{ N}$",
      "$10\\sqrt{3}\\text{ N}$"
    ],
    "optionsAr": [
      "25 نيوتن",
      "20 نيوتن",
      "15\\sqrt{3} نيوتن",
      "10\\sqrt{3} نيوتن"
    ],
    "correctAnswer": "$25\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "A pushing force downward increases the normal reaction: $R = W + P\\sin 30^\\circ$.",
    "hintAr": "قوة الضغط لأسفل تزيد من رد الفعل العمودي: $R = W + P\\sin 30^\\circ$.",
    "stepByStepSolutionEn": [
      "1. Vertical equilibrium: $R = 50 + P \\sin 30^\\circ = 50 + 0.5P$.",
      "2. Horizontal equilibrium: $P \\cos 30^\\circ = \\mu_s R$.",
      "3. Substitute: $P \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{5}(50 + 0.5P)$.",
      "4. Divide by $\\sqrt{3}$: $\\frac{P}{2} = 10 + 0.1P \\implies 0.4P = 10 \\implies P = 25\\text{ N}$? Wait:",
      "Let's recalculate: P/2 - 0.1P = 0.4P = 10 => P = 25 N! Let's check: R = 50 + 12.5 = 62.5. Fs = (sqrt(3)/5) * 62.5 = 12.5 sqrt(3). P cos 30 = 25 * sqrt(3)/2 = 12.5 sqrt(3). Indeed P = 25 N!"
    ],
    "stepByStepSolutionAr": [
      "١. الاتزان الرأسي: $R = 50 + 0.5P$.",
      "٢. الاتزان الأفقي: $P \\cos 30^\\circ = \\mu_s R$.",
      "٣. $P \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{5}(50 + 0.5P) \\implies 0.4P = 10 \\implies P = 25\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Pushing down increases normal reaction and therefore increases friction.",
    "teacherTipAr": "الضغط لأسفل يزيد من رد الفعل العمودي ويزيد تالياً من قوة الاحتكاك."
  },
  {
    "id": "stat_ch1_ex_14",
    "titleEn": "MoE Unit Exercise 14: Pull vs Push Comparison",
    "titleAr": "تمرين الوحدة ١٤: مقارنة الشد بالدفع",
    "difficulty": "easy",
    "questionEn": "Pulling a body with a force inclined at angle $\\theta$ above the horizontal requires less effort than pushing it at the same angle below the horizontal because:",
    "questionAr": "سحب جسم بقوة تميل بزاوية $\\theta$ لأعلى يتطلب جهداً أقل من دفعه بنفس الزاوية لأسفل لأن:",
    "optionsEn": [
      "Pulling decreases normal reaction $R$, thereby reducing friction $F_s$.",
      "Pushing increases the weight of the body.",
      "The coefficient of friction changes.",
      "Pulling eliminates the friction entirely."
    ],
    "optionsAr": [
      "الشد يقلل من رد الفعل العمودي $R$ وبالتالي يقلل من قوة الاحتكاك.",
      "الدفع يزيد من وزن الجسم الحقيقي.",
      "معامل الاحتكاك يتغير بتغير اتجاه القوة.",
      "الشد يلغي الاحتكاك تماماً."
    ],
    "correctAnswer": "Pulling decreases normal reaction $R$, thereby reducing friction $F_s$.",
    "correctIndex": 0,
    "hintEn": "Compare $R_{pull} = W - P\\sin\\theta$ with $R_{push} = W + P\\sin\\theta$.",
    "hintAr": "قارن بين $R_{pull} = W - P\\sin\\theta$ و $R_{push} = W + P\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. When pulling upward at angle $\\theta$: $R = W - P\\sin\\theta$, which reduces $R$ and hence reduces $F_s = \\mu_s R$.",
      "2. When pushing downward at angle $\\theta$: $R = W + P\\sin\\theta$, which increases $R$ and increases $F_s$."
    ],
    "stepByStepSolutionAr": [
      "١. في حالة السحب: رد الفعل $R = W - P\\sin\\theta$ يقل، فتقل قوة الاحتكاك المقاومة.",
      "٢. في حالة الدفع: رد الفعل $R = W + P\\sin\\theta$ يزداد، فتزداد قوة الاحتكاك المقاومة."
    ],
    "teacherTipEn": "A classic conceptual reasoning question frequently tested in Thanaweya exams.",
    "teacherTipAr": "سؤال تعليل مفهومي شهير يكرر كثيراً في الامتحانات."
  },
  {
    "id": "stat_ch1_ex_15",
    "titleEn": "MoE Unit Exercise 15: Critical Angle for Rest",
    "titleAr": "تمرين الوحدة ١٥: الزاوية الحرجة للاستقرار",
    "difficulty": "easy",
    "questionEn": "If the angle of friction is $\\lambda = 25^\\circ$, what is the maximum angle of an inclined plane on which the body can rest under its weight alone?",
    "questionAr": "إذا كانت زاوية الاحتكاك $\\lambda = 25^\\circ$، فما هي أقصى زاوية ميل لمستوى يمكن أن يستقر عليه الجسم تحت تأثير وزنه فقط؟",
    "optionsEn": [
      "$25^\\circ$",
      "$50^\\circ$",
      "$65^\\circ$",
      "$12.5^\\circ$"
    ],
    "optionsAr": [
      "25^\\circ",
      "50^\\circ",
      "65^\\circ",
      "12.5^\\circ"
    ],
    "correctAnswer": "$25^\\circ$",
    "correctIndex": 0,
    "hintEn": "The maximum inclination angle for equilibrium under weight alone is $\\theta_{\\max} = \\lambda$.",
    "hintAr": "أقصى زاوية ميل للاستقرار تحت تأثير الوزن فقط هي $\\theta_{\\max} = \\lambda$.",
    "stepByStepSolutionEn": [
      "The condition for equilibrium under weight alone is $\\theta \\le \\lambda$. Therefore, the maximum angle is $\\theta_{\\max} = \\lambda = 25^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "شرط الاتزان تحت تأثير الوزن فقط هو $\\theta \\le \\lambda$، إذن أقصى زاوية ميل هي $\\lambda = 25^\\circ$."
    ],
    "teacherTipEn": "Maximum plane slope for self-retention equals friction angle lambda.",
    "teacherTipAr": "أقصى زاوية ميل يستقر عندها الجسم تلقائياً تساوي زاوية الاحتكاك."
  }
];
