import type { SolvedProblem } from '../../../types/curriculum';

export const statCh4SolvedExamples: SolvedProblem[] = [
  {
    "id": "stat_ch4_se_01",
    "titleEn": "MoE Example 1: Conditions of General Equilibrium for Coplanar Forces",
    "titleAr": "مثال الوزارة ١: شروط الاتزان العام لمجموعة قوى مستوية",
    "difficulty": "easy",
    "questionEn": "A set of coplanar forces acts on a rigid body. The sum of the components along the horizontal axis is $X = 3a - 12$, along the vertical axis is $Y = 2b + 8$, and the algebraic sum of their moments about point $O$ is $M_O = 4c - 20$. If the body is in general equilibrium, find the values of $a, b,$ and $c$.",
    "questionAr": "تؤثر مجموعة من القوى المستوية على جسم متماسك، فكان مجموع المركبات في الاتجاه الأفقي $X = 3a - 12$، وفي الاتجاه الرأسي $Y = 2b + 8$، والمجموع الجبري لعزوم القوى حول نقطة الأصل $M_O = 4c - 20$. فإذا كانت المجموعة في حالة اتزان عام، فأوجد قيم $a$ و $b$ و $c$.",
    "optionsEn": [
      "$a = 4, b = -4, c = 5$",
      "$a = 4, b = 4, c = 5$",
      "$a = -4, b = -4, c = -5$",
      "$a = 12, b = -8, c = 20$"
    ],
    "optionsAr": [
      "$a = 4, b = -4, c = 5$",
      "$a = 4, b = 4, c = 5$",
      "$a = -4, b = -4, c = -5$",
      "$a = 12, b = -8, c = 20$"
    ],
    "correctAnswer": "$a = 4, b = -4, c = 5$",
    "correctIndex": 0,
    "hintEn": "The conditions for general equilibrium of a rigid body under coplanar forces are: $\\sum X = 0, \\sum Y = 0,$ and $\\sum M = 0$.",
    "hintAr": "شروط الاتزان العام لجسم متماسك تحت تأثير قوى مستوية هي: $\\sum X = 0$ و $\\sum Y = 0$ و $\\sum M = 0$.",
    "stepByStepSolutionEn": [
      "1. Equilibrium along horizontal axis:",
      "$$X = 0 \\implies 3a - 12 = 0 \\implies 3a = 12 \\implies a = 4$$",
      "2. Equilibrium along vertical axis:",
      "$$Y = 0 \\implies 2b + 8 = 0 \\implies 2b = -8 \\implies b = -4$$",
      "3. Equilibrium of moments about any point $O$:",
      "$$M_O = 0 \\implies 4c - 20 = 0 \\implies 4c = 20 \\implies c = 5$$"
    ],
    "stepByStepSolutionAr": [
      "١. شرط الاتزان الأفقي:",
      "$$X = 0 \\implies 3a - 12 = 0 \\implies a = 4$$",
      "٢. شرط الاتزان الرأسي:",
      "$$Y = 0 \\implies 2b + 8 = 0 \\implies b = -4$$",
      "٣. شرط انعدام مجموع العزوم حول أي نقطة:",
      "$$M_O = 0 \\implies 4c - 20 = 0 \\implies c = 5$$"
    ],
    "teacherTipEn": "For general equilibrium, both the resultant force must vanish (R = 0) and the total moment about any point must vanish (M = 0).",
    "teacherTipAr": "في الاتزان العام، يجب أن تنعدم المحصلة (ح = ٠) وينعدم عزم المحصلة حول أي نقطة (جـ = ٠)."
  },
  {
    "id": "stat_ch4_se_02",
    "titleEn": "MoE Example 2: Uniform Ladder on Smooth Vertical Wall & Rough Ground",
    "titleAr": "مثال الوزارة ٢: سلم منتظم يرتكز على حائط رأسي أملس وأرض أفقية خشنة",
    "difficulty": "medium",
    "questionEn": "A uniform ladder $AB$ of length $L = 5\\text{ m}$ and weight $W = 20\\text{ kg-wt}$ rests with its upper end $A$ against a smooth vertical wall and its lower end $B$ on a rough horizontal ground. The ladder is inclined at an angle $\\theta = 45^\\circ$ to the horizontal. Find: (1) the reaction of the vertical wall, and (2) the normal reaction and friction force exerted by the ground.",
    "questionAr": "سلم منتظم $AB$ طوله $L = 5\\text{ م}$ ووزنه $W = 20\\text{ ث.كجم}$ يستند بطرفه العلوي $A$ على حائط رأسي أملس وبطرفه السفلي $B$ على أرض أفقية خشنة ويميل على الأفقي بزاوية $\\theta = 45^\\circ$. احسب: (١) رد فعل الحائط الرأسي، (٢) رد الفعل العمودي وقوة الاحتكاك الواقعة من الأرض.",
    "optionsEn": [
      "Wall reaction $R_A = 10\\text{ kg-wt}$, Ground reactions: $R_B = 20\\text{ kg-wt}, F_f = 10\\text{ kg-wt}$",
      "Wall reaction $R_A = 20\\text{ kg-wt}$, Ground reactions: $R_B = 20\\text{ kg-wt}, F_f = 20\\text{ kg-wt}$",
      "Wall reaction $R_A = 10\\text{ kg-wt}$, Ground reactions: $R_B = 10\\text{ kg-wt}, F_f = 10\\text{ kg-wt}$",
      "Wall reaction $R_A = 5\\text{ kg-wt}$, Ground reactions: $R_B = 20\\text{ kg-wt}, F_f = 5\\text{ kg-wt}$"
    ],
    "optionsAr": [
      "رد فعل الحائط $R_A = 10\\text{ ث.كجم}$، قوى الأرض: $R_B = 20\\text{ ث.كجم}، F_f = 10\\text{ ث.كجم}$",
      "رد فعل الحائط $R_A = 20\\text{ ث.كجم}$، قوى الأرض: $R_B = 20\\text{ ث.كجم}، F_f = 20\\text{ ث.كجم}$",
      "رد فعل الحائط $R_A = 10\\text{ ث.كجم}$، قوى الأرض: $R_B = 10\\text{ ث.كجم}، F_f = 10\\text{ ث.كجم}$",
      "رد فعل الحائط $R_A = 5\\text{ ث.كجم}$، قوى الأرض: $R_B = 20\\text{ ث.كجم}، F_f = 5\\text{ ث.كجم}$"
    ],
    "correctAnswer": "Wall reaction $R_A = 10\\text{ kg-wt}$, Ground reactions: $R_B = 20\\text{ kg-wt}, F_f = 10\\text{ kg-wt}$",
    "correctIndex": 0,
    "hintEn": "Smooth wall reaction is perpendicular to the wall ($R_A$). Take moments about $B$: $\\sum M_B = 0$ to find $R_A$.",
    "hintAr": "رد فعل الحائط الأملس عمودي عليه ($R_A$). خذ العزوم حول النقطة $B$: $\\sum M_B = 0$ لحساب $R_A$.",
    "stepByStepSolutionEn": [
      "1. Resolve forces vertically:",
      "$$\\sum Y = 0 \\implies R_B = W = 20\\text{ kg-wt}$$",
      "2. Resolve forces horizontally:",
      "$$\\sum X = 0 \\implies F_f = R_A$$",
      "3. Take moments about base $B$ (ladder weight acts at midpoint $L/2$):",
      "$$\\sum M_B = 0 \\implies W \\left(\\frac{L}{2} \\cos(45^\\circ)\\right) - R_A (L \\sin(45^\\circ)) = 0$$",
      "$$20 \\left(\\frac{L}{2}\\right) \\frac{\\sqrt{2}}{2} = R_A L \\frac{\\sqrt{2}}{2}$$",
      "$$10 L = R_A L \\implies R_A = 10\\text{ kg-wt}$$",
      "4. Friction force at ground: $F_f = R_A = 10\\text{ kg-wt}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الاتزان الرأسي:",
      "$$\\sum Y = 0 \\implies R_B = 20\\text{ ث.كجم}$$",
      "٢. معادلة الاتزان الأفقي:",
      "$$\\sum X = 0 \\implies F_f = R_A$$",
      "٣. أخذ العزوم حول النقطة $B$:",
      "$$\\sum M_B = 0 \\implies 20 \\times \\frac{L}{2} \\cos(45^\\circ) - R_A L \\sin(45^\\circ) = 0$$",
      "بما أن $\\cos(45^\\circ) = \\sin(45^\\circ)$، وبالقسمة على $L$:",
      "$$R_A = 10\\text{ ث.كجم}$$",
      "٤. إذن قوة الاحتكاك مع الأرض: $F_f = 10\\text{ ث.كجم}$."
    ],
    "teacherTipEn": "Taking moments about point B eliminates both ground reaction components R_B and friction F_f, solving for R_A in a single step!",
    "teacherTipAr": "أخذ العزوم حول النقطة ب يلغي مجهولين (رد فعل الأرض وقوة الاحتكاك)، مما يتيح إيجاد رد فعل الحائط في خطوة واحدة!"
  },
  {
    "id": "stat_ch4_se_03",
    "titleEn": "MoE Example 3: Minimum Friction Coefficient for Ladder Equilibrium",
    "titleAr": "مثال الوزارة ٣: أقل معامل احتكاك لحفظ اتزان سلم على وشك الانزلاق",
    "difficulty": "medium",
    "questionEn": "A uniform ladder rests with one end on a smooth vertical wall and the other on a rough horizontal ground. If the ladder is inclined at angle $\\theta$ to the horizontal and is on the verge of slipping, find the coefficient of static friction $\\mu_s$ between the ladder and the ground in terms of $\\theta$.",
    "questionAr": "يستند سلم منتظم بأحد طرفيه على حائط رأسي أملس، وبطرفه الآخر على أرض أفقية خشنة. فإذا كان السلم يميل على الأفقي بزاوية $\\theta$ وكان على وشك الانزلاق، فأوجد معامل الاحتكاك السكوني $\\mu_s$ بين السلم والأرض بدلالة $\\theta$.",
    "optionsEn": [
      "$\\mu_s = \\frac{1}{2} \\cot\\theta$",
      "$\\mu_s = 2 \\cot\\theta$",
      "$\\mu_s = \\frac{1}{2} \\tan\\theta$",
      "$\\mu_s = \\cot\\theta$"
    ],
    "optionsAr": [
      "$\\mu_s = \\frac{1}{2} \\cot\\theta$",
      "$\\mu_s = 2 \\cot\\theta$",
      "$\\mu_s = \\frac{1}{2} \\tan\\theta$",
      "$\\mu_s = \\cot\\theta$"
    ],
    "correctAnswer": "$\\mu_s = \\frac{1}{2} \\cot\\theta$",
    "correctIndex": 0,
    "hintEn": "At limiting equilibrium, friction $F_s = \\mu_s R_B$. From horizontal equilibrium $R_A = F_s = \\mu_s W$. Take moments about $B$.",
    "hintAr": "عند وشك الانزلاق: الاحتكاك نهائي $F_s = \\mu_s R_B$. ومن الاتزان الأفقي $R_A = \\mu_s W$. خذ العزوم حول $B$.",
    "stepByStepSolutionEn": [
      "1. Let ladder length be $2l$ and weight $W$ at its center.",
      "2. Vertical equilibrium: $R_B = W$.",
      "3. Limiting friction: $F_s = \\mu_s R_B = \\mu_s W$.",
      "4. Horizontal equilibrium: $R_A = F_s = \\mu_s W$.",
      "5. Take moments about base $B$:",
      "$$\\sum M_B = 0 \\implies W(l \\cos\\theta) - R_A(2l \\sin\\theta) = 0$$",
      "$$W l \\cos\\theta = (\\mu_s W)(2l \\sin\\theta)$$",
      "$$\\cos\\theta = 2 \\mu_s \\sin\\theta \\implies \\mu_s = \\frac{\\cos\\theta}{2\\sin\\theta} = \\frac{1}{2} \\cot\\theta$$"
    ],
    "stepByStepSolutionAr": [
      "١. بفرض طول السلم $2l$ ووزنه $W$ يؤثر في المنتصف.",
      "٢. الاتزان الرأسي: $R_B = W$.",
      "٣. قوة الاحتكاك النهائي: $F_s = \\mu_s R_B = \\mu_s W$.",
      "٤. الاتزان الأفقي: $R_A = F_s = \\mu_s W$.",
      "٥. أخذ العزوم حول $B$:",
      "$$W (l \\cos\\theta) - R_A (2l \\sin\\theta) = 0$$",
      "$$W l \\cos\\theta = 2 \\mu_s W l \\sin\\theta$$",
      "$$\\mu_s = \\frac{\\cos\\theta}{2 \\sin\\theta} = \\frac{1}{2} \\cot\\theta$$"
    ],
    "teacherTipEn": "This is one of the most famous Thanaweya Amma standard results: for a uniform ladder on a smooth wall and rough floor on the verge of sliding, mu = (1/2) cot(theta).",
    "teacherTipAr": "هذه واحدة من أشهر نتائج امتحانات الثانوية العامة: لسلم منتظم على وشك الانزلاق على حائط أملس وأرض خشنة، م_س = نصف ظتا(هـ)."
  },
  {
    "id": "stat_ch4_se_04",
    "titleEn": "MoE Example 4: Man Climbing a Ladder on the Verge of Slipping",
    "titleAr": "مثال الوزارة ٤: رجل يصعد سلماً حتى يصبح السلم على وشك الانزلاق",
    "difficulty": "medium",
    "questionEn": "A uniform ladder $AB$ of length $4\\text{ m}$ and weight $15\\text{ kg-wt}$ rests on a rough horizontal floor ($\\mu_s = \\frac{1}{3}$) and leans against a smooth vertical wall at an angle $\\theta = 45^\\circ$. A man of weight $60\\text{ kg-wt}$ climbs the ladder. Find the maximum distance $x$ from the base $B$ that the man can climb before the ladder slips.",
    "questionAr": "سلم منتظم $AB$ طوله $4\\text{ م}$ ووزنه $15\\text{ ث.كجم}$ يرتكز على أرض أفقية خشنة معامل احتكاكها $\\mu_s = \\frac{1}{3}$ ويستند على حائط رأسي أملس بزاوية ميل $\\theta = 45^\\circ$. صعد رجل وزنه $60\\text{ ث.كجم}$ على السلم. احسب أقصى مسافة $x$ من طرفه السفلي $B$ يستطيع الرجل أن يصعدها دون أن ينزلق السلم.",
    "optionsEn": [
      "$x = 1.17\\text{ meters}$",
      "$x = 2.50\\text{ meters}$",
      "$x = 3.20\\text{ meters}$",
      "$x = 0.85\\text{ meters}$"
    ],
    "optionsAr": [
      "$x = 1.17\\text{ متراً}$",
      "$x = 2.50\\text{ متراً}$",
      "$x = 3.20\\text{ متراً}$",
      "$x = 0.85\\text{ متراً}$"
    ],
    "correctAnswer": "$x = 1.17\\text{ meters}$",
    "correctIndex": 0,
    "hintEn": "Vertical forces: $R_B = W_{ladder} + W_{man} = 15 + 60 = 75\\text{ kg-wt}$. Limiting friction $F_s = \\mu_s R_B = \\frac{1}{3}(75) = 25\\text{ kg-wt} = R_A$. Take moments about $B$.",
    "hintAr": "القوى الرأسية: رد فعل الأرض = وزن السلم + وزن الرجل = ٧٥ ث.كجم. أقصى احتكاك = ثلث × ٧٥ = ٢٥ ث.كجم وهو رد فعل الحائط. خذ العزوم حول $B$.",
    "stepByStepSolutionEn": [
      "1. Vertical equilibrium:",
      "$$\\sum Y = 0 \\implies R_B = 15 + 60 = 75\\text{ kg-wt}$$",
      "2. Limiting friction at verge of sliding:",
      "$$F_s = \\mu_s R_B = \\frac{1}{3} \\times 75 = 25\\text{ kg-wt}$$",
      "3. Horizontal equilibrium: $R_A = F_s = 25\\text{ kg-wt}$.",
      "4. Moments about $B$ with $\\theta = 45^\\circ$ (so $\\cos(45^\\circ) = \\sin(45^\\circ)$):",
      "$$\\sum M_B = 0 \\implies 15(2 \\cos(45^\\circ)) + 60(x \\cos(45^\\circ)) - R_A(4 \\sin(45^\\circ)) = 0$$",
      "Dividing through by $\\cos(45^\\circ)$:",
      "$$30 + 60x - 4(25) = 0$$",
      "$$30 + 60x - 100 = 0 \\implies 60x = 70 \\implies x = \\frac{70}{60} = \\frac{7}{6} \\approx 1.17\\text{ m}$$"
    ],
    "stepByStepSolutionAr": [
      "١. الاتزان الرأسي:",
      "$$R_B = 15 + 60 = 75\\text{ ث.كجم}$$",
      "٢. قوة الاحتكاك النهائي:",
      "$$F_s = \\mu_s R_B = \\frac{1}{3} \\times 75 = 25\\text{ ث.كجم}$$",
      "٣. رد فعل الحائط من الاتزان الأفقي: $R_A = 25\\text{ ث.كجم}$.",
      "٤. العزوم حول $B$ (حيث $\\cos(45^\\circ) = \\sin(45^\\circ)$):",
      "$$15 \\times 2 + 60 x - 25 \\times 4 = 0$$",
      "$$30 + 60x - 100 = 0 \\implies 60x = 70 \\implies x = \\frac{7}{6} \\approx 1.17\\text{ متراً}$$"
    ],
    "teacherTipEn": "Notice that as the man climbs higher (x increases), the overturning moment increases, requiring higher friction at the base.",
    "teacherTipAr": "كلما صعد الرجل لمسافة أكبر (زيادة س)، زاد عزم الدوران مما يتطلب احتكاكاً أكبر عند القاعدة لمنع الانزلاق."
  },
  {
    "id": "stat_ch4_se_05",
    "titleEn": "MoE Example 5: Rod Hinged at Vertical Wall and Supported by a Cable",
    "titleAr": "مثال الوزارة ٥: قضيب متصل بمفصل في حائط رأسي ومحفوظ باتزان بواسطة خيط",
    "difficulty": "medium",
    "questionEn": "A uniform rod $AB$ of length $L = 60\\text{ cm}$ and weight $W = 40\\text{ N}$ is attached to a vertical wall by a hinge at $A$. The rod is held horizontally by a light string connected between end $B$ and a point $C$ on the wall vertically above $A$, where $AC = 80\\text{ cm}$. Find: (1) the tension $T$ in the string, and (2) the magnitude and direction of the reaction force at hinge $A$.",
    "questionAr": "قضيب منتظم $AB$ طوله $L = 60\\text{ سم}$ ووزنه $W = 40\\text{ نيوتن}$ متصل بحائط رأسي بمفصل عند $A$. حُفظ القضيب في وضع أفقي بواسطة خيط خفيف طرفاه $B$ ونقطة $C$ على الحائط تقع رأسياً أعلى $A$ على بعد $AC = 80\\text{ سم}$. احسب: (١) الشد $T$ في الخيط، (٢) مقدار واتجاه رد فعل المفصل عند $A$.",
    "optionsEn": [
      "Tension $T = 25\\text{ N}$, Hinge reaction $R = 25\\text{ N}$ at $\\theta \\approx 53.13^\\circ$ above horizontal",
      "Tension $T = 50\\text{ N}$, Hinge reaction $R = 40\\text{ N}$ at $\\theta = 45^\\circ$",
      "Tension $T = 25\\text{ N}$, Hinge reaction $R = 20\\text{ N}$ at $\\theta = 90^\\circ$",
      "Tension $T = 40\\text{ N}$, Hinge reaction $R = 30\\text{ N}$ at $\\theta = 30^\\circ$"
    ],
    "optionsAr": [
      "الشد $T = 25\\text{ نيوتن}$، رد فعل المفصل $R = 25\\text{ نيوتن}$ بزاوية $\\theta \\approx 53.13^\\circ$ مع الأفقي",
      "الشد $T = 50\\text{ نيوتن}$، رد فعل المفصل $R = 40\\text{ نيوتن}$ بزاوية $\\theta = 45^\\circ$",
      "الشد $T = 25\\text{ نيوتن}$، رد فعل المفصل $R = 20\\text{ نيوتن}$ بزاوية $\\theta = 90^\\circ$",
      "الشد $T = 40\\text{ نيوتن}$، رد فعل المفصل $R = 30\\text{ نيوتن}$ بزاوية $\\theta = 30^\\circ$"
    ],
    "correctAnswer": "Tension $T = 25\\text{ N}$, Hinge reaction $R = 25\\text{ N}$ at $\\theta \\approx 53.13^\\circ$ above horizontal",
    "correctIndex": 0,
    "hintEn": "Triangle $ABC$ has sides $AB = 60, AC = 80$, so hypotenuse $BC = 100\\text{ cm}$. $\\sin\\alpha = \\frac{80}{100} = 0.8, \\cos\\alpha = \\frac{60}{100} = 0.6$. Take moments about $A$.",
    "hintAr": "المثلث $ABC$ قائم في $A$ وأضلاعه ٦٠، ٨٠، فالوتر $BC = 100\\text{ سم}$. $\\sin\\alpha = 0.8, \\cos\\alpha = 0.6$. خذ العزوم حول المفصل $A$.",
    "stepByStepSolutionEn": [
      "1. Hypotenuse $BC = \\sqrt{60^2 + 80^2} = 100\\text{ cm}$.",
      "Angle $\\alpha$ of the string with the rod $AB$ satisfies $\\sin\\alpha = \\frac{80}{100} = 0.8$ and $\\cos\\alpha = 0.6$.",
      "2. Take moments about hinge $A$:",
      "$$\\sum M_A = 0 \\implies 40(30) - (T \\sin\\alpha)(60) = 0$$",
      "$$1200 = 60(0.8) T = 48 T \\implies T = \\frac{1200}{48} = 25\\text{ N}$$",
      "3. Resolve forces at hinge $A$ into $X$ (horizontal) and $Y$ (vertical):",
      "$$\\sum X = 0 \\implies X - T \\cos\\alpha = 0 \\implies X = 25 \\times 0.6 = 15\\text{ N}$$",
      "$$\\sum Y = 0 \\implies Y + T \\sin\\alpha - 40 = 0 \\implies Y + 25(0.8) - 40 = 0 \\implies Y = 40 - 20 = 20\\text{ N}$$",
      "4. Magnitude of hinge reaction:",
      "$$R = \\sqrt{X^2 + Y^2} = \\sqrt{15^2 + 20^2} = \\sqrt{225 + 400} = \\sqrt{625} = 25\\text{ N}$$",
      "Direction: $\\tan\\theta = \\frac{Y}{X} = \\frac{20}{15} = \\frac{4}{3} \\implies \\theta \\approx 53.13^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. طول الوتر في المثلث القائم: $BC = \\sqrt{60^2 + 80^2} = 100\\text{ سم}$.",
      "زاوية ميل الخيط $\\alpha$: $\\sin\\alpha = \\frac{80}{100} = 0.8$ و $\\cos\\alpha = 0.6$.",
      "٢. أخذ العزوم حول المفصل $A$:",
      "$$40 \\times 30 - T \\sin\\alpha \\times 60 = 0 \\implies 1200 = 48 T \\implies T = 25\\text{ نيوتن}$$",
      "٣. إيجاد مركبتي رد فعل المفصل:",
      "$$X = T \\cos\\alpha = 25 \\times 0.6 = 15\\text{ نيوتن}$$",
      "$$Y = 40 - T \\sin\\alpha = 40 - 25(0.8) = 20\\text{ نيوتن}$$",
      "٤. مقدار رد فعل المفصل: $R = \\sqrt{15^2 + 20^2} = 25\\text{ نيوتن}$.",
      "اتجاهه: $\\tan\\theta = \\frac{20}{15} = \\frac{4}{3} \\implies \\theta \\approx 53.13^\\circ$ مع الأفقي."
    ],
    "teacherTipEn": "Always represent hinge reaction as two unknown perpendicular components X and Y. Never assume hinge reaction is perpendicular to the wall!",
    "teacherTipAr": "مثل رد فعل المفصل دائماً بمركبتين تعامدتين س و ص؛ لا تفترض أبداً أن رد فعل المفصل عمودي على الحائط!"
  },
  {
    "id": "stat_ch4_se_06",
    "titleEn": "MoE Example 6: Ladder on Rough Vertical Wall & Rough Floor",
    "titleAr": "مثال الوزارة ٦: سلم يرتكز على حائط رأسي خشن وأرض أفقية خشنة",
    "difficulty": "hots",
    "questionEn": "A uniform ladder rests with its upper end against a rough vertical wall ($\\mu_2 = \\frac{1}{3}$) and its lower end on a rough horizontal floor ($\\mu_1 = \\frac{1}{2}$). If the ladder is on the verge of slipping down, find the angle of inclination $\\theta$ of the ladder to the horizontal.",
    "questionAr": "يستند سلم منتظم بطرفه العلوي على حائط رأسي خشن معامل احتكاكه $\\mu_2 = \\frac{1}{3}$ وبطرفه السفلي على أرض أفقية خشنة معامل احتكاكها $\\mu_1 = \\frac{1}{2}$. فإذا كان السلم على وشك الانزلاق، احسب زاوية ميل السلم $\\theta$ على الأفقي.",
    "optionsEn": [
      "$\\tan\\theta = \\frac{5}{6} \\implies \\theta \\approx 39.81^\\circ$",
      "$\\tan\\theta = \\frac{6}{5} \\implies \\theta \\approx 50.19^\\circ$",
      "$\\tan\\theta = \\frac{2}{3} \\implies \\theta \\approx 33.69^\\circ$",
      "$\\tan\\theta = 1 \\implies \\theta = 45^\\circ$"
    ],
    "optionsAr": [
      "$\\tan\\theta = \\frac{5}{6} \\implies \\theta \\approx 39.81^\\circ$",
      "$\\tan\\theta = \\frac{6}{5} \\implies \\theta \\approx 50.19^\\circ$",
      "$\\tan\\theta = \\frac{2}{3} \\implies \\theta \\approx 33.69^\\circ$",
      "$\\tan\\theta = 1 \\implies \\theta = 45^\\circ$"
    ],
    "correctAnswer": "$\\tan\\theta = \\frac{5}{6} \\implies \\theta \\approx 39.81^\\circ$",
    "correctIndex": 0,
    "hintEn": "When the ladder slips down, friction at wall acts UPWARDS: $F_2 = \\mu_2 R_2$, and friction at floor opposes outward motion: $F_1 = \\mu_1 R_1$.",
    "hintAr": "عند انزلاق السلم لأسفل: احتكاك الحائط يتجه لأعلى $F_2 = \\mu_2 R_2$، واحتكاك الأرض يقاوم الحركة للخارج $F_1 = \\mu_1 R_1$.",
    "stepByStepSolutionEn": [
      "1. Let ladder length be $2L$ and weight $W$ at center.",
      "2. Horizontal equilibrium: $R_2 = F_1 = \\mu_1 R_1 = \\frac{1}{2} R_1$.",
      "3. Vertical equilibrium (friction at wall acts upwards):",
      "$$R_1 + F_2 = W \\implies R_1 + \\mu_2 R_2 = W$$",
      "$$R_1 + \\frac{1}{3} \\left(\\frac{1}{2} R_1\\right) = W \\implies R_1 \\left(1 + \\frac{1}{6}\\right) = W \\implies \\frac{7}{6} R_1 = W \\implies R_1 = \\frac{6}{7} W$$",
      "$$R_2 = \\frac{1}{2} R_1 = \\frac{3}{7} W, \\quad F_2 = \\frac{1}{3} R_2 = \\frac{1}{7} W$$",
      "4. Take moments about the base $B$ on the floor:",
      "$$\\sum M_B = 0 \\implies W (L \\cos\\theta) - R_2 (2L \\sin\\theta) - F_2 (2L \\cos\\theta) = 0$$",
      "Divide by $L$:",
      "$$W \\cos\\theta - 2 R_2 \\sin\\theta - 2 F_2 \\cos\\theta = 0$$",
      "Substitute $R_2 = \\frac{3}{7} W$ and $F_2 = \\frac{1}{7} W$:",
      "$$W \\cos\\theta - 2\\left(\\frac{3}{7} W\\right) \\sin\\theta - 2\\left(\\frac{1}{7} W\\right) \\cos\\theta = 0$$",
      "$$\\left(1 - \\frac{2}{7}\\right) W \\cos\\theta = \\frac{6}{7} W \\sin\\theta$$",
      "$$\\frac{5}{7} \\cos\\theta = \\frac{6}{7} \\sin\\theta \\implies 5 \\cos\\theta = 6 \\sin\\theta$$",
      "$$\\tan\\theta = \\frac{5}{6} \\implies \\theta \\approx 39.81^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "١. بفرض طول السلم $2L$ ووزنه $W$ يؤثر في المنتصف.",
      "٢. الاتزان الأفقي: $R_2 = F_1 = \\mu_1 R_1 = \\frac{1}{2} R_1$.",
      "٣. الاتزان الرأسي (احتكاك الحائط لأعلى لمقاومة الهبوط):",
      "$$R_1 + \\mu_2 R_2 = W \\implies R_1 + \\frac{1}{6} R_1 = W \\implies R_1 = \\frac{6}{7} W$$",
      "$$R_2 = \\frac{3}{7} W، \\quad F_2 = \\frac{1}{7} W$$",
      "٤. أخذ العزوم حول قاعدة السلم $B$:",
      "$$W (L \\cos\\theta) - R_2 (2L \\sin\\theta) - F_2 (2L \\cos\\theta) = 0$$",
      "بالقسمة على $W L$ والتعويض:",
      "$$\\cos\\theta - \\frac{6}{7} \\sin\\theta - \\frac{2}{7} \\cos\\theta = 0 \\implies \\frac{5}{7} \\cos\\theta = \\frac{6}{7} \\sin\\theta$$",
      "$$\\tan\\theta = \\frac{5}{6} \\implies \\theta \\approx 39.81^\\circ$$"
    ],
    "teacherTipEn": "Notice that the friction force at the wall F2 has a clockwise moment about B, so its arm is 2L cos(theta).",
    "teacherTipAr": "لاحظ أن قوة احتكاك الحائط ق٢ عزمها مع عقارب الساعة حول ب وذراع عزمها هو ٢ ل جتا(هـ)."
  },
  {
    "id": "stat_ch4_se_07",
    "titleEn": "MoE Example 7: Horizontal Rod on Knife-Edge Peg & Wall Contact",
    "titleAr": "مثال الوزارة ٧: قضيب أفقي يرتكز على وتد حاد وحائط رأسي",
    "difficulty": "medium",
    "questionEn": "A uniform rod $AB$ of weight $W = 30\\text{ N}$ and length $L = 120\\text{ cm}$ rests horizontally with end $A$ touching a smooth vertical wall and is supported at point $C$ by a smooth peg, where $AC = 40\\text{ cm}$. Find the reaction of the peg at $C$ and the horizontal reaction at wall $A$.",
    "questionAr": "قضيب منتظم $AB$ وزنه $W = 30\\text{ نيوتن}$ وطوله $L = 120\\text{ سم}$ يرتكز في وضع أفقي بحيث يرتكز طرفه $A$ على حائط رأسي أملس ويرتكز عند نقطة $C$ على وتد أملس حيث $AC = 40\\text{ سم}$. احسب رد فعل الوتد عند $C$ ورد فعل الحائط عند $A$.",
    "optionsEn": [
      "Peg Reaction $R_C = 45\\text{ N}$, Wall Reaction $R_A = 0\\text{ N}$",
      "Peg Reaction $R_C = 30\\text{ N}$, Wall Reaction $R_A = 15\\text{ N}$",
      "Peg Reaction $R_C = 60\\text{ N}$, Wall Reaction $R_A = 30\\text{ N}$",
      "Peg Reaction $R_C = 45\\text{ N}$, Wall Reaction $R_A = 15\\text{ N}$"
    ],
    "optionsAr": [
      "رد فعل الوتد $R_C = 45\\text{ نيوتن}$، رد فعل الحائط $R_A = 0\\text{ نيوتن}$",
      "رد فعل الوتد $R_C = 30\\text{ نيوتن}$، رد فعل الحائط $R_A = 15\\text{ نيوتن}$",
      "رد فعل الوتد $R_C = 60\\text{ نيوتن}$، رد فعل الحائط $R_A = 30\\text{ نيوتن}$",
      "رد فعل الوتد $R_C = 45\\text{ نيوتن}$، رد فعل الحائط $R_A = 15\\text{ نيوتن}$"
    ],
    "correctAnswer": "Peg Reaction $R_C = 45\\text{ N}$, Wall Reaction $R_A = 0\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The peg reaction at C is perpendicular to the rod (vertical). Take moments about A: $R_C \\times 40 = 30 \\times 60$.",
    "hintAr": "رد فعل الوتد عند C عمودي على القضيب (رأسي). خذ العزوم حول A: $R_C \\times 40 = 30 \\times 60$.",
    "stepByStepSolutionEn": [
      "1. The rod is horizontal, so the smooth peg reaction $R_C$ is purely vertical.",
      "2. The wall is smooth and vertical, so reaction $R_A$ would be horizontal.",
      "3. Since there are no other horizontal forces, $\\sum X = 0 \\implies R_A = 0$.",
      "4. Weight acts at midpoint of rod: distance from $A$ to center is $60\\text{ cm}$.",
      "5. Take moments about $A$:",
      "$$\\sum M_A = 0 \\implies R_C (40) - 30(60) = 0$$",
      "$$40 R_C = 1800 \\implies R_C = \\frac{1800}{40} = 45\\text{ N}$$",
      "6. A downward force at $A$ or support from above would be needed if $R_C$ exceeds weight, but here peg acts as fulcrum with $R_C = 45\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. القضيب أفقي، إذن رد فعل الوتد الأملس عمودي على القضيب وهو رأسي لأعلى.",
      "٢. الحائط أملس ورأسي، لذا رد فعله إن وجد يكون أفقياً.",
      "٣. لعدم وجود قوى أفقية أخرى، فإن $\\sum X = 0 \\implies R_A = 0$.",
      "٤. يؤثر الوزن في المنتصف على بعد ٦٠ سم من $A$.",
      "٥. أخذ العزوم حول $A$:",
      "$$R_C \\times 40 = 30 \\times 60 = 1800 \\implies R_C = 45\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "Pay close attention: if there is no other horizontal force acting on the body, the normal reaction from a vertical wall must be zero.",
    "teacherTipAr": "انتبه دائماً: إذا لم توجد أي قوة أفقية أخرى تؤثر على الجسم، فإن رد الفعل العمودي من الحائط الرأسي ينعدم حتماً."
  },
  {
    "id": "stat_ch4_se_08",
    "titleEn": "MoE Example 8: Equilibrium of a Rod Supported by Two Strings",
    "titleAr": "مثال الوزارة ٨: اتزان قضيب معلق بخيطين مائلين",
    "difficulty": "medium",
    "questionEn": "A uniform rod $AB$ of weight $W = 60\\text{ N}$ and length $L$ is suspended horizontally by two light strings attached to its ends $A$ and $B$. The strings make angles $30^\\circ$ and $60^\\circ$ with the vertical respectively. Find the tensions $T_A$ and $T_B$ in the two strings.",
    "questionAr": "قضيب منتظم $AB$ وزنه $W = 60\\text{ نيوتن}$ معلق في وضع أفقي بواسطة خيطين خفيفين مثبتين في طرفيه $A$ و $B$. يميل الخيطان على الرأسي بزاويتين قياسهما $30^\\circ$ و $60^\\circ$ على الترتيب. احسب مقدار الشد في كل من الخيطين $T_A$ و $T_B$.",
    "optionsEn": [
      "$T_A = 30\\sqrt{3}\\text{ N}, T_B = 30\\text{ N}$",
      "$T_A = 30\\text{ N}, T_B = 30\\sqrt{3}\\text{ N}$",
      "$T_A = 40\\text{ N}, T_B = 20\\text{ N}$",
      "$T_A = 60\\text{ N}, T_B = 60\\text{ N}$"
    ],
    "optionsAr": [
      "$T_A = 30\\sqrt{3}\\text{ نيوتن}، T_B = 30\\text{ نيوتن}$",
      "$T_A = 30\\text{ نيوتن}، T_B = 30\\sqrt{3}\\text{ نيوتن}$",
      "$T_A = 40\\text{ نيوتن}، T_B = 20\\text{ نيوتن}$",
      "$T_A = 60\\text{ نيوتن}، T_B = 60\\text{ نيوتن}$"
    ],
    "correctAnswer": "$T_A = 30\\sqrt{3}\\text{ N}, T_B = 30\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Notice that strings make angles with horizontal: $60^\\circ$ and $30^\\circ$. Horizontal equilibrium: $T_A \\sin(30^\\circ) = T_B \\sin(60^\\circ)$. Vertical: $T_A \\cos(30^\\circ) + T_B \\cos(60^\\circ) = 60$.",
    "hintAr": "الاتزان الأفقي: $T_A \\sin(30^\\circ) = T_B \\sin(60^\\circ)$. الاتزان الرأسي: $T_A \\cos(30^\\circ) + T_B \\cos(60^\\circ) = 60$.",
    "stepByStepSolutionEn": [
      "1. Resolve horizontally:",
      "$$\\sum X = 0 \\implies T_A \\sin(30^\\circ) = T_B \\sin(60^\\circ)$$",
      "$$T_A \\left(\\frac{1}{2}\\right) = T_B \\left(\\frac{\\sqrt{3}}{2}\\right) \\implies T_A = \\sqrt{3} T_B$$",
      "2. Resolve vertically:",
      "$$\\sum Y = 0 \\implies T_A \\cos(30^\\circ) + T_B \\cos(60^\\circ) = 60$$",
      "Substitute $T_A = \\sqrt{3} T_B$:",
      "$$(\\sqrt{3} T_B)\\left(\\frac{\\sqrt{3}}{2}\\right) + T_B \\left(\\frac{1}{2}\\right) = 60$$",
      "$$\\frac{3}{2} T_B + \\frac{1}{2} T_B = 60 \\implies 2 T_B = 60 \\implies T_B = 30\\text{ N}$$",
      "3. Then $T_A = \\sqrt{3}(30) = 30\\sqrt{3}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الاتزان الأفقي:",
      "$$T_A \\sin(30^\\circ) = T_B \\sin(60^\\circ) \\implies \\frac{1}{2} T_A = \\frac{\\sqrt{3}}{2} T_B \\implies T_A = \\sqrt{3} T_B$$",
      "٢. معادلة الاتزان الرأسي:",
      "$$T_A \\cos(30^\\circ) + T_B \\cos(60^\\circ) = 60$$",
      "بالتعويض عن $T_A$:",
      "$$\\sqrt{3} T_B \\times \\frac{\\sqrt{3}}{2} + \\frac{1}{2} T_B = 60 \\implies 2 T_B = 60 \\implies T_B = 30\\text{ نيوتن}$$",
      "٣. إذن الشد الأول: $T_A = 30\\sqrt{3}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice the angle sum: 30° + 60° = 90°, so the two strings are perpendicular to each other!",
    "teacherTipAr": "لاحظ أن مجموع الزاويتين ٣٠° + ٦٠° = ٩٠°، مما يعني أن الخيطين متعامدان!"
  },
  {
    "id": "stat_ch4_se_09",
    "titleEn": "MoE Example 9: Non-Uniform Rod Equilibrium on Rough Incline",
    "titleAr": "مثال الوزارة ٩: اتزان قضيب غير منتظم يستند على مستوى مائل خشن",
    "difficulty": "hots",
    "questionEn": "A non-uniform rod $AB$ of weight $W = 50\\text{ N}$ and length $L = 100\\text{ cm}$ has its center of gravity at a distance of $40\\text{ cm}$ from $A$. The rod is hinged at $A$ to a vertical wall and held in equilibrium at an angle of $30^\\circ$ above the horizontal by a vertical upward force $F$ applied at end $B$. Find: (1) the magnitude of force $F$, and (2) the reaction of the hinge at $A$.",
    "questionAr": "قضيب غير منتظم $AB$ وزنه $W = 50\\text{ نيوتن}$ وطوله $L = 100\\text{ سم}$ يقع مركز ثقله على بعد $40\\text{ سم}$ من $A$. متصل بمفصل عند $A$ في حائط رأسي وحُفظ في حالة اتزان مائلاً بزاوية $30^\\circ$ أعلى الأفقي بواسطة قوة رأسية لأعلى $F$ تؤثر عند الطرف $B$. احسب: (١) مقدار القوة $F$، (٢) رد فعل المفصل عند $A$.",
    "optionsEn": [
      "Force $F = 20\\text{ N}$, Hinge reaction $R = 30\\text{ N}$ vertically upwards",
      "Force $F = 25\\text{ N}$, Hinge reaction $R = 25\\text{ N}$ vertically upwards",
      "Force $F = 20\\text{ N}$, Hinge reaction $R = 20\\text{ N}$ horizontally",
      "Force $F = 30\\text{ N}$, Hinge reaction $R = 20\\text{ N}$ vertically upwards"
    ],
    "optionsAr": [
      "القوة $F = 20\\text{ نيوتن}$، رد فعل المفصل $R = 30\\text{ نيوتن}$ رأسياً لأعلى",
      "القوة $F = 25\\text{ نيوتن}$، رد فعل المفصل $R = 25\\text{ نيوتن}$ رأسياً لأعلى",
      "القوة $F = 20\\text{ نيوتن}$، رد فعل المفصل $R = 20\\text{ نيوتن}$ أفقياً",
      "القوة $F = 30\\text{ نيوتن}$، رد فعل المفصل $R = 20\\text{ نيوتن}$ رأسياً لأعلى"
    ],
    "correctAnswer": "Force $F = 20\\text{ N}$, Hinge reaction $R = 30\\text{ N}$ vertically upwards",
    "correctIndex": 0,
    "hintEn": "Take moments about hinge A: $\\sum M_A = 0 \\implies F(100 \\cos(30^\\circ)) - 50(40 \\cos(30^\\circ)) = 0$.",
    "hintAr": "خذ العزوم حول المفصل A: $F(100 \\cos(30^\\circ)) - 50(40 \\cos(30^\\circ)) = 0$.",
    "stepByStepSolutionEn": [
      "1. Moments about hinge $A$:",
      "$$\\sum M_A = 0 \\implies F (100 \\cos(30^\\circ)) - 50 (40 \\cos(30^\\circ)) = 0$$",
      "Cancelling $\\cos(30^\\circ)$:",
      "$$100 F = 2000 \\implies F = 20\\text{ N}$$",
      "2. Horizontal equilibrium: since $W$ and $F$ are purely vertical, $X_A = 0$.",
      "3. Vertical equilibrium:",
      "$$\\sum Y = 0 \\implies Y_A + F - W = 0 \\implies Y_A + 20 - 50 = 0 \\implies Y_A = 30\\text{ N}$$",
      "4. Total hinge reaction: $R = \\sqrt{X_A^2 + Y_A^2} = Y_A = 30\\text{ N}$ vertically upwards."
    ],
    "stepByStepSolutionAr": [
      "١. أخذ العزوم حول المفصل $A$:",
      "$$F (100 \\cos(30^\\circ)) = 50 (40 \\cos(30^\\circ))$$",
      "بالقسمة على $\\cos(30^\\circ)$:",
      "$$100 F = 2000 \\implies F = 20\\text{ نيوتن}$$",
      "٢. الاتزان الأفقي: لعدم وجود قوى أفقية فإن $X_A = 0$.",
      "٣. الاتزان الرأسي:",
      "$$Y_A + F - 50 = 0 \\implies Y_A + 20 - 50 = 0 \\implies Y_A = 30\\text{ نيوتن}$$",
      "٤. رد فعل المفصل رأسي لأعلى ومقداره ۳۰ نيوتن."
    ],
    "teacherTipEn": "Notice that since all external applied forces are vertical, the hinge reaction has no horizontal component.",
    "teacherTipAr": "بما أن جميع القوى الخارجية المؤثرة رأسية، فإن رد فعل المفصل لا يحتوي على أي مركبة أفقية."
  },
  {
    "id": "stat_ch4_se_10",
    "titleEn": "MoE Example 10: General Equilibrium with Three Non-Parallel Coplanar Forces",
    "titleAr": "مثال الوزارة ١٠: اتزان جسم متماسك تحت تأثير ثلاث قوى مستوية غير متوازية",
    "difficulty": "hots",
    "questionEn": "A uniform rod $AB$ of weight $W = 12\\text{ kg-wt}$ is hinged at end $A$ to a vertical wall. A horizontal force $P$ acts at end $B$ such that the rod is kept in equilibrium inclined at an angle $\\theta = 60^\\circ$ to the vertical wall. Find: (1) the magnitude of force $P$, and (2) the magnitude and direction of the reaction force at hinge $A$.",
    "questionAr": "قضيب منتظم $AB$ وزنه $W = 12\\text{ ث.كجم}$ متصل بمفصل عند $A$ في حائط رأسي. تؤثر قوة أفقية $P$ عند الطرف $B$ بحيث حفظت القضيب في حالة اتزان مائلاً بزاوية $\\theta = 60^\\circ$ مع الحائط الرأسي. احسب: (١) مقدار القوة $P$، (٢) مقدار واتجاه رد فعل المفصل عند $A$.",
    "optionsEn": [
      "Force $P = 6\\sqrt{3}\\text{ kg-wt}$, Hinge reaction $R = 6\\sqrt{7}\\text{ kg-wt}$",
      "Force $P = 12\\text{ kg-wt}$, Hinge reaction $R = 12\\sqrt{3}\\text{ kg-wt}$",
      "Force $P = 6\\text{ kg-wt}$, Hinge reaction $R = 12\\text{ kg-wt}$",
      "Force $P = 4\\sqrt{3}\\text{ kg-wt}$, Hinge reaction $R = 8\\sqrt{3}\\text{ kg-wt}$"
    ],
    "optionsAr": [
      "القوة $P = 6\\sqrt{3}\\text{ ث.كجم}$، رد فعل المفصل $R = 6\\sqrt{7}\\text{ ث.كجم}$",
      "القوة $P = 12\\text{ ث.كجم}$، رد فعل المفصل $R = 12\\sqrt{3}\\text{ ث.كجم}$",
      "القوة $P = 6\\text{ ث.كجم}$، رد فعل المفصل $R = 12\\text{ ث.كجم}$",
      "القوة $P = 4\\sqrt{3}\\text{ ث.كجم}$، رد فعل المفصل $R = 8\\sqrt{3}\\text{ ث.كجم}$"
    ],
    "correctAnswer": "Force $P = 6\\sqrt{3}\\text{ kg-wt}$, Hinge reaction $R = 6\\sqrt{7}\\text{ kg-wt}$",
    "correctIndex": 0,
    "hintEn": "The angle with the vertical is 60°, so the angle with horizontal is 30°. Take moments about A: $P(2L\\cos(60^\\circ)) = W(L\\sin(60^\\circ))$.",
    "hintAr": "زاوية الميل مع الرأسي ٦٠°. أخذ العزوم حول A: ذراع القوة P هو $2L\\cos(60^\\circ)$ وذراع الوزن هو $L\\sin(60^\\circ)$.",
    "stepByStepSolutionEn": [
      "1. Let length of rod be $2L$. The rod makes angle $60^\\circ$ with the vertical wall.",
      "Vertical distance from $A$ to $B$: $2L \\cos(60^\\circ) = 2L(0.5) = L$.",
      "Horizontal distance from $A$ to line of weight: $L \\sin(60^\\circ) = L \\frac{\\sqrt{3}}{2}$.",
      "2. Take moments about hinge $A$:",
      "$$\\sum M_A = 0 \\implies P(2L \\cos(60^\\circ)) - W(L \\sin(60^\\circ)) = 0$$",
      "$$P(L) = 12 \\left(L \\frac{\\sqrt{3}}{2}\\right) = 6\\sqrt{3} L \\implies P = 6\\sqrt{3}\\text{ kg-wt}$$",
      "3. Hinge reaction components:",
      "$$\\sum X = 0 \\implies X_A = P = 6\\sqrt{3}\\text{ kg-wt}$$",
      "$$\\sum Y = 0 \\implies Y_A = W = 12\\text{ kg-wt}$$",
      "4. Resultant hinge reaction:",
      "$$R = \\sqrt{X_A^2 + Y_A^2} = \\sqrt{(6\\sqrt{3})^2 + 12^2} = \\sqrt{108 + 144} = \\sqrt{252} = \\sqrt{36 \\times 7} = 6\\sqrt{7}\\text{ kg-wt}$$"
    ],
    "stepByStepSolutionAr": [
      "١. بفرض طول القضيب $2L$. زاوية ميله على الرأسي $60^\\circ$.",
      "ذراع القوة الأفقية $P$ بالنسبة لـ $A$ هو $2L \\cos(60^\\circ) = L$.",
      "ذراع الوزن بالنسبة لـ $A$ هو $L \\sin(60^\\circ) = L \\frac{\\sqrt{3}}{2}$.",
      "٢. أخذ العزوم حول المفصل $A$:",
      "$$P \\times L = 12 \\times L \\frac{\\sqrt{3}}{2} \\implies P = 6\\sqrt{3}\\text{ ث.كجم}$$",
      "٣. مركبتا رد فعل المفصل:",
      "$$X_A = P = 6\\sqrt{3}\\text{ ث.كجم}، \\quad Y_A = W = 12\\text{ ث.كجم}$$",
      "٤. معيار رد فعل المفصل:",
      "$$R = \\sqrt{(6\\sqrt{3})^2 + 12^2} = \\sqrt{108 + 144} = \\sqrt{252} = 6\\sqrt{7}\\text{ ث.كجم}$$"
    ],
    "teacherTipEn": "By the Three Forces Theorem, the lines of action of weight W, horizontal force P, and hinge reaction R must intersect at a single concurrent point!",
    "teacherTipAr": "وفقاً لنظرية اتزان ثلاث قوى، فإن خطوط عمل الوزن والقوة الأفقية ورد فعل المفصل يجب أن تلتقي جميعها في نقطة واحدة مشتركة!"
  }
];

export const statCh4Exercises: SolvedProblem[] = [
  {
    "id": "stat_ch4_ex_01",
    "titleEn": "Exercise 1: Basic Equilibrium of Coplanar Forces",
    "titleAr": "تمرين ١: الاتزان البسيط لمجموعة قوى مستوية",
    "difficulty": "easy",
    "questionEn": "Three horizontal and vertical forces act on a body: $F_1 = 20\\text{ N}$ to the right, $F_2$ to the left, $F_3 = 35\\text{ N}$ upwards, and $F_4 = 35\\text{ N}$ downwards. For horizontal equilibrium, what must be the magnitude of $F_2$?",
    "questionAr": "تؤثر قوى أفقية ورأسية على جسم: $F_1 = 20\\text{ ن}$ لليمين، $F_2$ لليسار، $F_3 = 35\\text{ ن}$ لأعلى، $F_4 = 35\\text{ ن}$ لأسفل. لتحقيق الاتزان، ما مقدار $F_2$؟",
    "optionsEn": [
      "$20\\text{ N}$",
      "$35\\text{ N}$",
      "$15\\text{ N}$",
      "$55\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\text{ ن}$",
      "$35\\text{ ن}$",
      "$15\\text{ ن}$",
      "$55\\text{ ن}$"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Sum of horizontal forces must be zero: $\\sum X = 0 \\implies F_1 - F_2 = 0$.",
    "hintAr": "مجموع القوى الأفقية يساوي صفراً: $F_1 - F_2 = 0$.",
    "stepByStepSolutionEn": [
      "$$F_2 = F_1 = 20\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "$$F_2 = F_1 = 20\\text{ ن}$$"
    ],
    "teacherTipEn": "Horizontal forces balance independently of vertical forces.",
    "teacherTipAr": "القوى الأفقية تتزن باستقلال تام عن القوى الرأسية."
  },
  {
    "id": "stat_ch4_ex_02",
    "titleEn": "Exercise 2: Normal Reaction of Ground on a Ladder",
    "titleAr": "تمرين ٢: رد الفعل العمودي للأرض على سلم",
    "difficulty": "easy",
    "questionEn": "A ladder of weight $W = 18\\text{ kg-wt}$ rests on a rough horizontal ground and against a smooth vertical wall. Find the normal reaction of the ground on the ladder.",
    "questionAr": "سلم وزنه $W = 18\\text{ ث.كجم}$ يرتكز على أرض أفقية خشنة ويستند على حائط رأسي أملس. احسب رد الفعل العمودي للأرض على السلم.",
    "optionsEn": [
      "$18\\text{ kg-wt}$",
      "$9\\text{ kg-wt}$",
      "$36\\text{ kg-wt}$",
      "$18\\sqrt{2}\\text{ kg-wt}$"
    ],
    "optionsAr": [
      "$18\\text{ ث.كجم}$",
      "$9\\text{ ث.كجم}$",
      "$36\\text{ ث.كجم}$",
      "$18\\sqrt{2}\\text{ ث.كجم}$"
    ],
    "correctAnswer": "$18\\text{ kg-wt}$",
    "correctIndex": 0,
    "hintEn": "Vertical forces: $R_{ground} = W$. Smooth wall exerts only a horizontal normal reaction.",
    "hintAr": "القوى الرأسية: رد فعل الأرض = الوزن، لأن الحائط الأملس رد فعله أفقي فقط.",
    "stepByStepSolutionEn": [
      "$$\\sum Y = 0 \\implies R_B = W = 18\\text{ kg-wt}$$"
    ],
    "stepByStepSolutionAr": [
      "$$R_B = W = 18\\text{ ث.كجم}$$"
    ],
    "teacherTipEn": "Because the wall is smooth, it has no vertical friction component.",
    "teacherTipAr": "لأن الحائط أملس، فإنه لا يولد أي مركبة احتكاك رأسية."
  },
  {
    "id": "stat_ch4_ex_03",
    "titleEn": "Exercise 3: Limiting Angle for a Ladder on Rough Floor",
    "titleAr": "تمرين ٣: زاوية الميل الحرجة لسلم على أرض خشنة",
    "difficulty": "easy",
    "questionEn": "A uniform ladder rests on a smooth vertical wall and a rough floor with $\\mu_s = \\frac{1}{2}$. If the ladder is on the verge of sliding, find $\\cot\\theta$ where $\\theta$ is the angle of the ladder with the horizontal.",
    "questionAr": "يستند سلم منتظم على حائط رأسي أملس وأرض خشنة معامل احتكاكها $\\mu_s = \\frac{1}{2}$. فإذا كان السلم على وشك الانزلاق، فما قيمة $\\cot\\theta$ حيث $\\theta$ زاوية ميل السلم على الأفقي؟",
    "optionsEn": [
      "$\\cot\\theta = 1$",
      "$\\cot\\theta = 2$",
      "$\\cot\\theta = 0.5$",
      "$\\cot\\theta = 0.25$"
    ],
    "optionsAr": [
      "$\\cot\\theta = 1$",
      "$\\cot\\theta = 2$",
      "$\\cot\\theta = 0.5$",
      "$\\cot\\theta = 0.25$"
    ],
    "correctAnswer": "$\\cot\\theta = 1$",
    "correctIndex": 0,
    "hintEn": "Standard result: $\\mu_s = \\frac{1}{2} \\cot\\theta \\implies \\cot\\theta = 2 \\mu_s$.",
    "hintAr": "العلاقة القياسية: $\\mu_s = \\frac{1}{2} \\cot\\theta \\implies \\cot\\theta = 2 \\mu_s$.",
    "stepByStepSolutionEn": [
      "$$\\cot\\theta = 2 \\mu_s = 2 \\left(\\frac{1}{2}\\right) = 1 \\implies \\theta = 45^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\cot\\theta = 2 \\mu_s = 2 \\left(\\frac{1}{2}\\right) = 1 \\implies \\theta = 45^\\circ$$"
    ],
    "teacherTipEn": "cot(theta) = 1 means theta = 45 degrees.",
    "teacherTipAr": "ظتا(هـ) = ١ تعني أن زاوية الميل هـ = ٤٥°."
  },
  {
    "id": "stat_ch4_ex_04",
    "titleEn": "Exercise 4: Reaction of a Smooth Horizontal Peg on a Beam",
    "titleAr": "تمرين ٤: رد فعل وتد أفقي أملس على قضيب",
    "difficulty": "easy",
    "questionEn": "A uniform beam $AB$ of length $2\\text{ m}$ and weight $50\\text{ N}$ rests horizontally on two smooth pegs at its ends. Find the reaction at each peg.",
    "questionAr": "قضيب منتظم $AB$ طوله $2\\text{ م}$ ووزنه $50\\text{ نيوتن}$ يستند أفقياً على وتدين أملسين عند طرفيه. احسب رد الفعل عند كل وتد.",
    "optionsEn": [
      "$25\\text{ N}$",
      "$50\\text{ N}$",
      "$12.5\\text{ N}$",
      "$30\\text{ N}$"
    ],
    "optionsAr": [
      "$25\\text{ نيوتن}$",
      "$50\\text{ نيوتن}$",
      "$12.5\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$"
    ],
    "correctAnswer": "$25\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "By symmetry, the weight of 50 N is shared equally between the two supports.",
    "hintAr": "بالتماثل، يتوزع الوزن البالغ ٥٠ نيوتن بالتساوي بين الركيزتين.",
    "stepByStepSolutionEn": [
      "$$R_A = R_B = \\frac{50}{2} = 25\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "$$R_A = R_B = \\frac{50}{2} = 25\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "Symmetry directly halves the total downward load.",
    "teacherTipAr": "التماثل ينصف الحمل الهابط الكلي مباشرة."
  },
  {
    "id": "stat_ch4_ex_05",
    "titleEn": "Exercise 5: Hinge Reaction with Purely Vertical Loading",
    "titleAr": "تمرين ٥: رد فعل مفصل عند خضوع القضيب لأحمال رأسية فقط",
    "difficulty": "medium",
    "questionEn": "A uniform rod $AB$ of weight $40\\text{ N}$ is hinged at $A$ to a vertical wall and supported horizontally by a vertical cable at end $B$. Find the reaction of the hinge at $A$.",
    "questionAr": "قضيب منتظم $AB$ وزنه $40\\text{ نيوتن}$ متصل بمفصل عند $A$ في حائط رأسي ومحفوظ أفقياً بواسطة حبل رأسي عند الطرف $B$. احسب رد فعل المفصل عند $A$.",
    "optionsEn": [
      "$20\\text{ N}$",
      "$40\\text{ N}$",
      "$10\\text{ N}$",
      "$30\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\text{ نيوتن}$",
      "$40\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Take moments about A: $T \\times L = 40 \\times (L/2) \\implies T = 20\\text{ N}$. Vertical equilibrium: $R_A + T = 40$.",
    "hintAr": "العزوم حول A تعطي الشد T = 20 نيوتن، ومن الاتزان الرأسي رد فعل المفصل = 20 نيوتن.",
    "stepByStepSolutionEn": [
      "1. $T \\cdot L = 40 \\cdot (L/2) \\implies T = 20\\text{ N}$.",
      "2. $R_A + T = 40 \\implies R_A = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. $T \\cdot L = 40 \\cdot (L/2) \\implies T = 20\\text{ نيوتن}$.",
      "٢. $R_A + 20 = 40 \\implies R_A = 20\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Since all forces are vertical, the hinge reaction is vertical and equals half the weight.",
    "teacherTipAr": "بما أن جميع القوى رأسية فإن رد فعل المفصل رأسي ويساوي نصف الوزن."
  },
  {
    "id": "stat_ch4_ex_06",
    "titleEn": "Exercise 6: Reaction Components of Hinge on Angled Cable Support",
    "titleAr": "تمرين ٦: مركبتا رد فعل مفصل لقضيب مدعوم بخيط مائل",
    "difficulty": "medium",
    "questionEn": "A horizontal rod of weight $W = 60\\text{ N}$ is hinged at $A$ and supported at end $B$ by a cable making $30^\\circ$ with the horizontal rod. If tension in the cable is $T = 60\\text{ N}$, find the horizontal component $X$ of the hinge reaction.",
    "questionAr": "قضيب أفقي وزنه $W = 60\\text{ نيوتن}$ مثبت بمفصل عند $A$ ومدعوم عند طرفه $B$ بخيط يميل بزاوية $30^\\circ$ على القضيب الأفقي. فإذا كان الشد في الخيط $T = 60\\text{ نيوتن}$، فما مقدار المركبة الأفقية $X$ لرد فعل المفصل؟",
    "optionsEn": [
      "$30\\sqrt{3}\\text{ N}$",
      "$30\\text{ N}$",
      "$60\\text{ N}$",
      "$15\\sqrt{3}\\text{ N}$"
    ],
    "optionsAr": [
      "$30\\sqrt{3}\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$60\\text{ نيوتن}$",
      "$15\\sqrt{3}\\text{ نيوتن}$"
    ],
    "correctAnswer": "$30\\sqrt{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Horizontal equilibrium: $X - T \\cos(30^\\circ) = 0$.",
    "hintAr": "الاتزان الأفقي: $X = T \\cos(30^\\circ)$.",
    "stepByStepSolutionEn": [
      "$$X = T \\cos(30^\\circ) = 60 \\times \\frac{\\sqrt{3}}{2} = 30\\sqrt{3}\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "$$X = T \\cos(30^\\circ) = 60 \\times \\frac{\\sqrt{3}}{2} = 30\\sqrt{3}\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "The horizontal component of the hinge balances the horizontal component of the cable tension.",
    "teacherTipAr": "المركبة الأفقية للمفصل توازن المركبة الأفقية لشد الخيط."
  },
  {
    "id": "stat_ch4_ex_07",
    "titleEn": "Exercise 7: Ladder Reaction at Smooth Wall with Known Weight and Angle",
    "titleAr": "تمرين ٧: رد فعل الحائط الأملس على سلم معلوم الوزن وزاوية الميل",
    "difficulty": "medium",
    "questionEn": "A uniform ladder of weight $W = 30\\text{ kg-wt}$ rests on a rough floor and leans against a smooth wall at an angle $\\theta = 60^\\circ$ to the horizontal. Find the wall reaction $R_A$.",
    "questionAr": "سلم منتظم وزنه $W = 30\\text{ ث.كجم}$ يرتكز على أرض خشنة ويستند على حائط أملس بزاوية ميل $\\theta = 60^\\circ$ مع الأفقي. احسب رد فعل الحائط $R_A$.",
    "optionsEn": [
      "$\\frac{15}{\\sqrt{3}} = 5\\sqrt{3}\\text{ kg-wt}$",
      "$15\\sqrt{3}\\text{ kg-wt}$",
      "$15\\text{ kg-wt}$",
      "$30\\text{ kg-wt}$"
    ],
    "optionsAr": [
      "$\\frac{15}{\\sqrt{3}} = 5\\sqrt{3}\\text{ ث.كجم}$",
      "$15\\sqrt{3}\\text{ ث.كجم}$",
      "$15\\text{ ث.كجم}$",
      "$30\\text{ ث.كجم}$"
    ],
    "correctAnswer": "$\\frac{15}{\\sqrt{3}} = 5\\sqrt{3}\\text{ kg-wt}$",
    "correctIndex": 0,
    "hintEn": "Moments about base: $R_A (L \\sin(60^\\circ)) = W (\\frac{L}{2} \\cos(60^\\circ))$. $R_A = \\frac{W}{2} \\cot(60^\\circ)$.",
    "hintAr": "العزوم حول القاعدة: $R_A = \\frac{W}{2} \\cot(60^\\circ) = 15 \\times \\frac{1}{\\sqrt{3}} = 5\\sqrt{3}$.",
    "stepByStepSolutionEn": [
      "$$R_A = \\frac{W}{2} \\cot\\theta = \\frac{30}{2} \\times \\frac{1}{\\sqrt{3}} = \\frac{15}{\\sqrt{3}} = 5\\sqrt{3}\\text{ kg-wt}$$"
    ],
    "stepByStepSolutionAr": [
      "$$R_A = \\frac{30}{2} \\times \\frac{1}{\\sqrt{3}} = 5\\sqrt{3}\\text{ ث.كجم}$$"
    ],
    "teacherTipEn": "Wall reaction R_A = (W/2) cot(theta) holds for any uniform ladder resting on a smooth vertical wall.",
    "teacherTipAr": "القاعدة: رد فعل الحائط الأملس = (نصف الوزن) × ظتا(زاوية الميل مع الأفقي)."
  },
  {
    "id": "stat_ch4_ex_08",
    "titleEn": "Exercise 8: Friction Force Required to Keep Ladder in Equilibrium",
    "titleAr": "تمرين ٨: قوة الاحتكاك المطلوبة لحفظ اتزان سلم",
    "difficulty": "medium",
    "questionEn": "A ladder of weight $40\\text{ N}$ leans at an angle where $\\cot\\theta = 0.75$ against a smooth vertical wall. Find the friction force $F$ at the ground required to maintain equilibrium.",
    "questionAr": "سلم وزنه $40\\text{ نيوتن}$ يستند على حائط رأسي أملس بحيث $\\cot\\theta = 0.75$. احسب قوة الاحتكاك $F$ عند الأرض المطلوبة لحفظ الاتزان.",
    "optionsEn": [
      "$15\\text{ N}$",
      "$30\\text{ N}$",
      "$20\\text{ N}$",
      "$10\\text{ N}$"
    ],
    "optionsAr": [
      "$15\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$20\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$"
    ],
    "correctAnswer": "$15\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$F = R_{wall} = \\frac{W}{2} \\cot\\theta$.",
    "hintAr": "قوة الاحتكاك = رد فعل الحائط = نصف الوزن × ظتا(هـ).",
    "stepByStepSolutionEn": [
      "$$F = \\frac{40}{2} \\times 0.75 = 20 \\times 0.75 = 15\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "$$F = 20 \\times 0.75 = 15\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "By horizontal equilibrium, the ground friction always equals the smooth wall reaction.",
    "teacherTipAr": "بالاتزان الأفقي، قوة احتكاك الأرض تساوي دائماً رد فعل الحائط الأملس."
  },
  {
    "id": "stat_ch4_ex_09",
    "titleEn": "Exercise 9: Tension in String Holding a Non-Uniform Beam",
    "titleAr": "تمرين ٩: الشد في خيط يحفظ اتزان عارضة غير منتظمة",
    "difficulty": "medium",
    "questionEn": "A non-uniform beam $AB$ of length $3\\text{ m}$ and weight $90\\text{ N}$ has its center of gravity $1\\text{ m}$ from $A$. It is hinged at $A$ and supported horizontally by a vertical wire at $B$. Find the tension $T$ in the wire.",
    "questionAr": "عارضة غير منتظمة $AB$ طولها $3\\text{ م}$ ووزنها $90\\text{ نيوتن}$ مركز ثقلها على بعد $1\\text{ م}$ من $A$. مثبتة بمفصل عند $A$ ومدعومة أفقياً بسلك رأسي عند $B$. احسب الشد $T$ في السلك.",
    "optionsEn": [
      "$30\\text{ N}$",
      "$45\\text{ N}$",
      "$60\\text{ N}$",
      "$15\\text{ N}$"
    ],
    "optionsAr": [
      "$30\\text{ نيوتن}$",
      "$45\\text{ نيوتن}$",
      "$60\\text{ نيوتن}$",
      "$15\\text{ نيوتن}$"
    ],
    "correctAnswer": "$30\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Take moments about A: $T \\times 3 = 90 \\times 1$.",
    "hintAr": "العزوم حول A: الشد × ٣ = ٩٠ × ١.",
    "stepByStepSolutionEn": [
      "$$T \\times 3 = 90 \\times 1 \\implies T = 30\\text{ N}$$"
    ],
    "stepByStepSolutionAr": [
      "$$3 T = 90 \\implies T = 30\\text{ نيوتن}$$"
    ],
    "teacherTipEn": "The fraction of weight carried by the end support equals (distance of CG from hinge) / (total length).",
    "teacherTipAr": "نسبة الحمل المحمول بالطرف = (بعد مركز الثقل عن المفصل) / (الطول الكلي)."
  },
  {
    "id": "stat_ch4_ex_10",
    "titleEn": "Exercise 10: Resultant Reaction on a Ladder at Limiting State",
    "titleAr": "تمرين ١٠: رد الفعل المحصل للأرض على سلم عند وشك الانزلاق",
    "difficulty": "medium",
    "questionEn": "A ladder resting on rough ground with coefficient of friction $\\mu_s = 0.75$ has a normal reaction $R_N = 40\\text{ N}$ and is on the verge of sliding. Find the magnitude of the resultant reaction $R'$ of the ground.",
    "questionAr": "سلم يستند على أرض خشنة معامل احتكاكها $\\mu_s = 0.75$ ورد فعلها العمودي $R_N = 40\\text{ نيوتن}$ وهو على وشك الانزلاق. احسب مقدار رد الفعل المحصل $R'$ للأرض.",
    "optionsEn": [
      "$50\\text{ N}$",
      "$70\\text{ N}$",
      "$30\\text{ N}$",
      "$45\\text{ N}$"
    ],
    "optionsAr": [
      "$50\\text{ نيوتن}$",
      "$70\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$45\\text{ نيوتن}$"
    ],
    "correctAnswer": "$50\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Limiting friction $F_s = \\mu_s R_N = 30\\text{ N}$. Resultant reaction $R' = \\sqrt{R_N^2 + F_s^2}$.",
    "hintAr": "الاحتكاك النهائي $F_s = 0.75 \\times 40 = 30\\text{ نيوتن}$. رد الفعل المحصل $R' = \\sqrt{40^2 + 30^2} = 50\\text{ نيوتن}$.",
    "stepByStepSolutionEn": [
      "1. $F_s = 0.75 \\times 40 = 30\\text{ N}$.",
      "2. $R' = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. $F_s = 0.75 \\times 40 = 30\\text{ نيوتن}$.",
      "٢. $R' = \\sqrt{1600 + 900} = 50\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice the 3-4-5 right triangle: 30, 40, 50.",
    "teacherTipAr": "لاحظ أضلاع مثلث فيثاغورس الشهير ٣ - ٤ - ٥: ٣٠، ٤٠، ٥٠."
  },
  {
    "id": "stat_ch4_ex_11",
    "titleEn": "Exercise 11: Ladder Leaning at 45° with Person at Midpoint",
    "titleAr": "تمرين ١١: سلم مائل بزاوية ٤٥° وعليه شخص في المنتصف",
    "difficulty": "medium",
    "questionEn": "A ladder of weight $W = 20\\text{ kg-wt}$ and a person of weight $w = 60\\text{ kg-wt}$ stands at the midpoint of the ladder. The ladder leans at $45^\\circ$ against a smooth vertical wall. Find the reaction of the wall.",
    "questionAr": "سلم وزنه $W = 20\\text{ ث.كجم}$ يقف عليه شخص وزنه $w = 60\\text{ ث.كجم}$ في منتصفه، ويستند السلم بزاوية $45^\\circ$ على حائط رأسي أملس. احسب رد فعل الحائط.",
    "optionsEn": [
      "$40\\text{ kg-wt}$",
      "$80\\text{ kg-wt}$",
      "$20\\text{ kg-wt}$",
      "$60\\text{ kg-wt}$"
    ],
    "optionsAr": [
      "$40\\text{ ث.كجم}$",
      "$80\\text{ ث.كجم}$",
      "$20\\text{ ث.كجم}$",
      "$60\\text{ ث.كجم}$"
    ],
    "correctAnswer": "$40\\text{ kg-wt}$",
    "correctIndex": 0,
    "hintEn": "Total weight at midpoint is $20 + 60 = 80\\text{ kg-wt}$. Wall reaction $R_A = \\frac{W_{total}}{2} \\cot(45^\\circ)$.",
    "hintAr": "الوزن الكلي في المنتصف = ٨٠ ث.كجم. رد فعل الحائط = نصف الوزن الكلي × ظتا(٤٥°).",
    "stepByStepSolutionEn": [
      "$$R_A = \\frac{80}{2} \\cot(45^\\circ) = 40 \\times 1 = 40\\text{ kg-wt}$$"
    ],
    "stepByStepSolutionAr": [
      "$$R_A = \\frac{80}{2} \\times 1 = 40\\text{ ث.كجم}$$"
    ],
    "teacherTipEn": "When the weight is concentrated at the midpoint, simply add weights: R_wall = (W_total / 2) cot(theta).",
    "teacherTipAr": "إذا تركزت الأوزان في المنتصف، اجمعها وطبق: رد فعل الحائط = (الوزن الكلي / ٢) ظتا(هـ)."
  },
  {
    "id": "stat_ch4_ex_12",
    "titleEn": "Exercise 12: Direction of Hinge Reaction under Equal Components",
    "titleAr": "تمرين ١٢: اتجاه رد فعل مفصل عند تساوي مركبتيه",
    "difficulty": "hots",
    "questionEn": "A rod hinged at $A$ has hinge reaction components $X = 25\\text{ N}$ to the right and $Y = 25\\text{ N}$ upwards. What is the angle $\\theta$ that the hinge reaction makes with the horizontal?",
    "questionAr": "قضيب متصل بمفصل عند $A$ مركبتا رد فعله $X = 25\\text{ ن}$ لليمين و $Y = 25\\text{ ن}$ لأعلى. ما قياس زاوية ميل رد فعل المفصل على الأفقي؟",
    "optionsEn": [
      "$45^\\circ$",
      "$30^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "$45^\\circ$",
      "$30^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "correctAnswer": "$45^\\circ$",
    "correctIndex": 0,
    "hintEn": "$\\tan\\theta = \\frac{Y}{X} = \\frac{25}{25} = 1$.",
    "hintAr": "$\\tan\\theta = \\frac{Y}{X} = 1 \\implies \\theta = 45^\\circ$.",
    "stepByStepSolutionEn": [
      "$$\\tan\\theta = \\frac{25}{25} = 1 \\implies \\theta = 45^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "$$\\tan\\theta = 1 \\implies \\theta = 45^\\circ$$"
    ],
    "teacherTipEn": "When X = Y, the vector bisects the quadrant at 45 degrees.",
    "teacherTipAr": "عند تساوي المركبتين المتعامدتين، ينصف المتجه الربع بزاوية ٤٥°."
  },
  {
    "id": "stat_ch4_ex_13",
    "titleEn": "Exercise 13: Maximum Fraction of Ladder Length a Climber Can Ascend",
    "titleAr": "تمرين ١٣: أقصى نسبة من طول السلم يمكن لشخص صعودها",
    "difficulty": "hots",
    "questionEn": "A light ladder of negligible weight leans at $\\theta = 45^\\circ$ against a smooth wall with rough floor coefficient $\\mu_s = 0.6$. What maximum fraction of the ladder length can a person climb before slipping occurs?",
    "questionAr": "سلم خفيف مهمل الوزن يميل بزاوية $\\theta = 45^\\circ$ على حائط أملس ومعامل احتكاك الأرض $\\mu_s = 0.6$. ما أقصى نسبة من طول السلم يمكن لشخص صعودها دون انزلاق؟",
    "optionsEn": [
      "$0.60$ (or $60\\%$)",
      "$0.30$ (or $30\\%$)",
      "$0.80$ (or $80\\%$)",
      "$0.50$ (or $50\\%$)"
    ],
    "optionsAr": [
      "$0.60$ (أو $60\\%$)",
      "$0.30$ (أو $30\\%$)",
      "$0.80$ (أو $80\\%$)",
      "$0.50$ (أو $50\\%$)"
    ],
    "correctAnswer": "$0.60$ (or $60\\%$)",
    "correctIndex": 0,
    "hintEn": "For a weightless ladder, $R_B = w, R_A = \\mu_s w$. Take moments about B: $w(x L \\cos(45^\\circ)) = R_A(L \\sin(45^\\circ)) \\implies x = \\mu_s$.",
    "hintAr": "لسلم مهمل الوزن: العزوم حول B تعطي نسبة الصعود $x = \\mu_s = 0.60$.",
    "stepByStepSolutionEn": [
      "1. Vertical equilibrium: $R_B = w$.",
      "2. Limiting friction: $R_A = F_s = \\mu_s R_B = \\mu_s w$.",
      "3. Moments about $B$: $w (x L \\cos(45^\\circ)) = R_A (L \\sin(45^\\circ))$.",
      "4. Since $\\cos(45^\\circ) = \\sin(45^\\circ)$: $w \\cdot x = \\mu_s w \\implies x = \\mu_s = 0.60$ (or $60\\%$)."
    ],
    "stepByStepSolutionAr": [
      "١. $R_B = w$.",
      "٢. $R_A = \\mu_s w$.",
      "٣. العزوم حول $B$: $w \\cdot x = R_A = \\mu_s w \\implies x = \\mu_s = 0.60$."
    ],
    "teacherTipEn": "For a light ladder inclined at 45 degrees, the maximum climbing fraction is exactly equal to the friction coefficient mu_s!",
    "teacherTipAr": "في السلم مهمل الوزن المائل بـ ٤٥°، أقصى نسبة صعود تساوي تماماً معامل الاحتكاك م_س!"
  },
  {
    "id": "stat_ch4_ex_14",
    "titleEn": "Exercise 14: Ladder with Tension Cable to Prevent Slipping",
    "titleAr": "تمرين ١٤: سلم مربوط بحبل لمنع انزلاقه على أرض ملساء",
    "difficulty": "hots",
    "questionEn": "A uniform ladder $AB$ of weight $W = 50\\text{ N}$ rests on a smooth floor and leans against a smooth vertical wall at $\\theta = 60^\\circ$ to the horizontal. A horizontal cable connects the base $B$ to the vertical wall to prevent slipping. Find the tension $T$ in the cable.",
    "questionAr": "سلم منتظم $AB$ وزنه $W = 50\\text{ نيوتن}$ يرتكز على أرض ملساء ويستند على حائط رأسي أملس بزاوية $\\theta = 60^\\circ$ مع الأفقي. رُبطت قاعدته $B$ بحبل أفقي متصل بأسفل الحائط لمنع انزلاقه. احسب الشد $T$ في الحبل.",
    "optionsEn": [
      "$\\frac{25}{\\sqrt{3}} \\approx 14.43\\text{ N}$",
      "$25\\sqrt{3} \\approx 43.30\\text{ N}$",
      "$25\\text{ N}$",
      "$50\\text{ N}$"
    ],
    "optionsAr": [
      "$\\frac{25}{\\sqrt{3}} \\approx 14.43\\text{ نيوتن}$",
      "$25\\sqrt{3} \\approx 43.30\\text{ نيوتن}$",
      "$25\\text{ نيوتن}$",
      "$50\\text{ نيوتن}$"
    ],
    "correctAnswer": "$\\frac{25}{\\sqrt{3}} \\approx 14.43\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The tension replaces friction: $T = R_A = \\frac{W}{2} \\cot(60^\\circ) = \\frac{25}{\\sqrt{3}}$.",
    "hintAr": "شد الحبل يحل محل قوة الاحتكاك: $T = R_A = \\frac{W}{2} \\cot(60^\\circ) = \\frac{25}{\\sqrt{3}}$.",
    "stepByStepSolutionEn": [
      "1. Horizontal equilibrium: $T = R_A$.",
      "2. Wall reaction from moments about $B$: $R_A = \\frac{W}{2} \\cot(60^\\circ) = \\frac{50}{2} \\frac{1}{\\sqrt{3}} = \\frac{25}{\\sqrt{3}}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الاتزان الأفقي: الشد في الحبل = رد فعل الحائط $R_A$.",
      "٢. $R_A = \\frac{50}{2} \\cot(60^\\circ) = \\frac{25}{\\sqrt{3}}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "The cable tension provides the horizontal restraining force when the ground is smooth.",
    "teacherTipAr": "شد الحبل يوفر القوة الأفقية المانعة للحركة عندما تكون الأرض ملساء."
  },
  {
    "id": "stat_ch4_ex_15",
    "titleEn": "Exercise 15: Heavy Rod Hinged at Bottom and Supported by Wall Friction",
    "titleAr": "تمرين ١٥: قضيب ثقيل متصل بمفصل عند قاعدته ويستند على حائط خشن",
    "difficulty": "hots",
    "questionEn": "A uniform rod $AB$ of weight $W = 100\\text{ N}$ is hinged at floor level $A$ and leans against a rough vertical wall at $B$ with inclination $\\theta = 45^\\circ$. The wall coefficient is $\\mu = 0.5$. If the rod is on the verge of sliding down the wall, find the normal reaction of the wall $R_B$.",
    "questionAr": "قضيب منتظم $AB$ وزنه $W = 100\\text{ نيوتن}$ مثبت بمفصل عند الأرض عند $A$ ويستند بطرفه $B$ على حائط رأسي خشن معامل احتكاكه $\\mu = 0.5$ بزاوية ميل $\\theta = 45^\\circ$. فإذا كان الطرف $B$ على وشك الانزلاق لأسفل، احسب رد الفعل العمودي للحائط $R_B$.",
    "optionsEn": [
      "$\\frac{100}{3} \\approx 33.33\\text{ N}$",
      "$50\\text{ N}$",
      "$25\\text{ N}$",
      "$40\\text{ N}$"
    ],
    "optionsAr": [
      "$\\frac{100}{3} \\approx 33.33\\text{ نيوتن}$",
      "$50\\text{ نيوتن}$",
      "$25\\text{ نيوتن}$",
      "$40\\text{ نيوتن}$"
    ],
    "correctAnswer": "$\\frac{100}{3} \\approx 33.33\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "At wall B: normal reaction is horizontal $R_B$ (to the left), friction is upwards $\\mu R_B = 0.5 R_B$. Take moments about A.",
    "hintAr": "عند الحائط B: رد الفعل العمودي $R_B$ أفقي لليسار، والاحتكاك لأعلى $0.5 R_B$. خذ العزوم حول المفصل A.",
    "stepByStepSolutionEn": [
      "1. Moments about hinge $A$ with rod length $2L$ and $\\theta = 45^\\circ$ (so $\\cos(45^\\circ) = \\sin(45^\\circ)$):",
      "$$\\sum M_A = 0 \\implies W (L \\cos(45^\\circ)) - R_B (2L \\sin(45^\\circ)) - (\\mu R_B)(2L \\cos(45^\\circ)) = 0$$",
      "2. Divide by $L \\cos(45^\\circ)$:",
      "$$W - 2 R_B - 2 \\mu R_B = 0 \\implies W = 2 R_B (1 + \\mu)$$",
      "3. Substitute $W = 100\\text{ N}$ and $\\mu = 0.5$:",
      "$$100 = 2 R_B (1 + 0.5) = 3 R_B \\implies R_B = \\frac{100}{3} \\approx 33.33\\text{ N}$$."
    ],
    "stepByStepSolutionAr": [
      "١. العزوم حول المفصل $A$:",
      "$$W (L \\cos(45^\\circ)) - R_B (2L \\sin(45^\\circ)) - \\mu R_B (2L \\cos(45^\\circ)) = 0$$",
      "٢. بالقسمة على $L \\cos(45^\\circ)$:",
      "$$100 = 2 R_B (1 + 0.5) = 3 R_B \\implies R_B = \\frac{100}{3} \\approx 33.33\\text{ نيوتن}$$."
    ],
    "teacherTipEn": "Taking moments about hinge A eliminates the two unknown hinge reactions instantly!",
    "teacherTipAr": "أخذ العزوم حول المفصل أ يلغي مجهولي رد فعل المفصل فوراً!"
  }
];
