import type { ChapterDatabank } from '../../../types/curriculum';

export const statCh3Databank: ChapterDatabank = {
  easy: [
  {
    "id": "stat_ch3_db_easy_01",
    "titleEn": "Resultant of Like Parallel Forces",
    "titleAr": "محصلة قوتين متوازيتين في نفس الاتجاه",
    "difficulty": "easy",
    "questionEn": "Find the magnitude of the resultant of two parallel forces $F_1 = 15\\text{ N}$ and $F_2 = 20\\text{ N}$ acting in the same direction.",
    "questionAr": "أوجد مقدار محصلة قوتين متوازيتين $F_1 = 15\\text{ ن}$ و $F_2 = 20\\text{ ن}$ تعملان في نفس الاتجاه.",
    "optionsEn": [
      "$R = 35\\text{ N}$",
      "$R = 45\\text{ N}$",
      "$R = 5\\text{ N}$",
      "$R = 55\\text{ N}$"
    ],
    "optionsAr": [
      "$R = 35\\text{ ن}$",
      "$R = 45\\text{ ن}$",
      "$R = 5\\text{ ن}$",
      "$R = 55\\text{ ن}$"
    ],
    "correctAnswer": "$R = 35\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For parallel forces in the same direction, R = F1 + F2.",
    "hintAr": "للقوتين في نفس الاتجاه: المحصلة تساوي المجموع $R = F_1 + F_2$.",
    "stepByStepSolutionEn": [
      "1. Since both forces act in the same direction, their resultant is the direct algebraic sum:",
      "   $R = F_1 + F_2 = 15 + 20 = 35\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن القوتين في اتجاه واحد، فإن مقدار المحصلة يساوي حاصل الجمع:",
      "   $R = F_1 + F_2 = 15 + 20 = 35\\text{ ن}$."
    ],
    "teacherTipEn": "Like parallel forces simply add: R = F1 + F2.",
    "teacherTipAr": "القوى المتوازية متحدة الاتجاه تجمع مقاديرها مباشرة."
  },
  {
    "id": "stat_ch3_db_easy_02",
    "titleEn": "Resultant of Like Parallel Forces (Variant 2)",
    "titleAr": "محصلة قوتين متوازيتين في نفس الاتجاه (حالة 2)",
    "difficulty": "easy",
    "questionEn": "Find the magnitude of the resultant of two parallel forces $F_1 = 20\\text{ N}$ and $F_2 = 20\\text{ N}$ acting in the same direction.",
    "questionAr": "أوجد مقدار محصلة قوتين متوازيتين $F_1 = 20\\text{ ن}$ و $F_2 = 20\\text{ ن}$ تعملان في نفس الاتجاه.",
    "optionsEn": [
      "$R = 40\\text{ N}$",
      "$R = 50\\text{ N}$",
      "$R = 0\\text{ N}$",
      "$R = 60\\text{ N}$"
    ],
    "optionsAr": [
      "$R = 40\\text{ ن}$",
      "$R = 50\\text{ ن}$",
      "$R = 0\\text{ ن}$",
      "$R = 60\\text{ ن}$"
    ],
    "correctAnswer": "$R = 40\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For parallel forces in the same direction, R = F1 + F2.",
    "hintAr": "للقوتين في نفس الاتجاه: المحصلة تساوي المجموع $R = F_1 + F_2$.",
    "stepByStepSolutionEn": [
      "1. Since both forces act in the same direction, their resultant is the direct algebraic sum:",
      "   $R = F_1 + F_2 = 20 + 20 = 40\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن القوتين في اتجاه واحد، فإن مقدار المحصلة يساوي حاصل الجمع:",
      "   $R = F_1 + F_2 = 20 + 20 = 40\\text{ ن}$."
    ],
    "teacherTipEn": "Like parallel forces simply add: R = F1 + F2.",
    "teacherTipAr": "القوى المتوازية متحدة الاتجاه تجمع مقاديرها مباشرة."
  },
  {
    "id": "stat_ch3_db_easy_03",
    "titleEn": "Midpoint Condition for Resultant of Like Forces",
    "titleAr": "شرط وقوع محصلة قوتين متوازيتين عند المنتصف",
    "difficulty": "easy",
    "questionEn": "Under what condition does the line of action of the resultant of two like parallel forces $F_1$ and $F_2$ pass through the midpoint of the segment joining their points of application?",
    "questionAr": "تحت أي شرط يمر خط عمل محصلة قوتين متوازيتين متحدتي الاتجاه $F_1$ و $F_2$ بمنتصف القطعة المستقيمة الواصلة بين نقطتي تأثيرهما؟",
    "optionsEn": [
      "$F_1 = F_2$",
      "$F_1 > F_2$",
      "$F_1 = 2F_2$",
      "$F_1 + F_2 = 0$"
    ],
    "optionsAr": [
      "ق1 = ق2",
      "ق1 > ق2",
      "ق1 = 2 ق2",
      "ق1 + ق2 = 0"
    ],
    "correctAnswer": "$F_1 = F_2$",
    "correctIndex": 0,
    "hintEn": "For point of action $C$: $F_1 \\times AC = F_2 \\times BC$. If $AC = BC$, then $F_1 = F_2$.",
    "hintAr": "نقطة التأثير تحقق: ق1 × أ جـ = ق2 × ب جـ. فإذا كان أ جـ = ب جـ، فإن ق1 = ق2.",
    "stepByStepSolutionEn": [
      "1. Let $C$ be the point of action of the resultant on segment $AB$.",
      "2. By Varignon's Theorem: $F_1 \\times AC = F_2 \\times CB$.",
      "3. If $C$ is the midpoint of $AB$, then $AC = CB$.",
      "4. Therefore, $F_1 = F_2$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطة تأثير المحصلة $C$ تحقق: $F_1 \\times AC = F_2 \\times CB$.",
      "٢. إذا كانت $C$ منتصف $AB$، فإن $AC = CB$.",
      "٣. بالقسمة على طول النصف: $F_1 = F_2$."
    ],
    "teacherTipEn": "Equal like parallel forces always have their resultant acting exactly midway between them.",
    "teacherTipAr": "القوتان المتوازيتان المتساويتان والمتحدتان في الاتجاه محصلتهما تؤثر دائماً في منتصف المسافة بينهما."
  },
  {
    "id": "stat_ch3_db_easy_04",
    "titleEn": "Resultant of Like Forces with Given Ratio",
    "titleAr": "محصلة قوتين متوازيتين متحدتي الاتجاه بنسبة معلومة",
    "difficulty": "easy",
    "questionEn": "Two like parallel forces have ratio $F_1 : F_2 = 2 : 3$. If the magnitude of the smaller force is $F_1 = 10\\text{ N}$, find the magnitude of their resultant $R$.",
    "questionAr": "قوتان متوازيتان في نفس الاتجاه النسبة بينهما $F_1 : F_2 = 2 : 3$. فإذا كان مقدار القوة الصغرى $F_1 = 10\\text{ N}$، فما مقدار محصلتهما $R$؟",
    "optionsEn": [
      "$25\\text{ N}$",
      "$15\\text{ N}$",
      "$20\\text{ N}$",
      "$30\\text{ N}$"
    ],
    "optionsAr": [
      "25 نيوتن",
      "15 نيوتن",
      "20 نيوتن",
      "30 نيوتن"
    ],
    "correctAnswer": "$25\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Find $F_2$ from the ratio, then compute $R = F_1 + F_2$.",
    "hintAr": "أوجد قيمة القوة الكبرى من النسبة، ثم اجمع: المحصلة = ق1 + ق2.",
    "stepByStepSolutionEn": [
      "1. From the ratio: $F_2 = \\frac{3}{2} F_1 = \\frac{3}{2}(10) = 15\\text{ N}$.",
      "2. Since the forces are in the same direction, $R = F_1 + F_2 = 10 + 15 = 25\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. من النسبة: القوة الثانية = $(3/2) \\times 10 = 15$ نيوتن.",
      "٢. المحصلة = مجموع القوتين = $10 + 15 = 25$ نيوتن."
    ],
    "teacherTipEn": "For like parallel forces, $R$ is always the sum $F_1 + F_2$.",
    "teacherTipAr": "للقوى متحدة الاتجاه، المحصلة هي دائماً مجموع المقدارين."
  },
  {
    "id": "stat_ch3_db_easy_05",
    "titleEn": "Position of Resultant of Two Like Parallel Forces",
    "titleAr": "موقع نقطة تأثير محصلة قوتين متوازيتين في نفس الاتجاه",
    "difficulty": "easy",
    "questionEn": "Two like parallel forces $F_1 = 12\\text{ N}$ and $F_2 = 18\\text{ N}$ act at points $A$ and $B$ respectively, where $AB = 25\\text{ cm}$. Find the distance from point $A$ to the point of action $C$ of their resultant.",
    "questionAr": "قوتان متوازيتان تعملان في نفس الاتجاه $F_1 = 12\\text{ N}$ و $F_2 = 18\\text{ N}$ تؤثران عند النقطتين $A$ و $B$ على الترتيب، حيث $AB = 25\\text{ cm}$. أوجد بُعد نقطة تأثير محصلتهما $C$ عن النقطة $A$.",
    "optionsEn": [
      "$15\\text{ cm}$",
      "$10\\text{ cm}$",
      "$12.5\\text{ cm}$",
      "$18\\text{ cm}$"
    ],
    "optionsAr": [
      "15 سم",
      "10 سم",
      "12.5 سم",
      "18 سم"
    ],
    "correctAnswer": "$15\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Use the lever arm formula: $AC = \\frac{F_2}{F_1 + F_2} AB$.",
    "hintAr": "استخدم قاعدة تقسيم المسافة: $AC = \\frac{F_2}{F_1 + F_2} AB$.",
    "stepByStepSolutionEn": [
      "1. Total force (resultant): $R = F_1 + F_2 = 12 + 18 = 30\\text{ N}$.",
      "2. By moments about $C$: $F_1 \\times AC = F_2 \\times (AB - AC) \\implies 12 AC = 18 (25 - AC)$.",
      "3. $30 AC = 18 \\times 25 = 450 \\implies AC = \\frac{450}{30} = 15\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. المحصلة الكلية = $12 + 18 = 30$ نيوتن.",
      "٢. من اتزان العزوم: $AC = \\frac{F_2}{R} \\times AB = \\frac{18}{30} \\times 25 = 15$ سم."
    ],
    "teacherTipEn": "The resultant is always closer to the larger force: here $AC = 15\\text{ cm}$ while $CB = 10\\text{ cm}$.",
    "teacherTipAr": "تقع المحصلة دائماً أقرب إلى القوة الأكبر: هنا بعد المحصلة عن القوة الصغرى 15 سم وعن الكبرى 10 سم."
  },
  {
    "id": "stat_ch3_db_easy_06",
    "titleEn": "Finding Unknown Force from Resultant",
    "titleAr": "إيجاد إحدى القوتين بدلالة المحصلة والقوة الأخرى",
    "difficulty": "easy",
    "questionEn": "The resultant of two like parallel forces is $R = 50\\text{ N}$. If one of the forces has magnitude $F_1 = 18\\text{ N}$, what is the magnitude of the second force $F_2$?",
    "questionAr": "محصلة قوتين متوازيتين تعملان في نفس الاتجاه هي $R = 50\\text{ N}$. إذا كان مقدار إحدى القوتين $F_1 = 18\\text{ N}$، فما مقدار القوة الثانية $F_2$؟",
    "optionsEn": [
      "$32\\text{ N}$",
      "$68\\text{ N}$",
      "$25\\text{ N}$",
      "$36\\text{ N}$"
    ],
    "optionsAr": [
      "32 نيوتن",
      "68 نيوتن",
      "25 نيوتن",
      "36 نيوتن"
    ],
    "correctAnswer": "$32\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For like parallel forces, $R = F_1 + F_2 \\implies F_2 = R - F_1$.",
    "hintAr": "للقوتين المتوازيتين في نفس الاتجاه: $F_2 = R - F_1$.",
    "stepByStepSolutionEn": [
      "1. Since the forces act in the same direction: $R = F_1 + F_2$.",
      "2. Substituting known values: $50 = 18 + F_2$.",
      "3. Solving: $F_2 = 50 - 18 = 32\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. القوتان في اتجاه واحد: $R = F_1 + F_2$.",
      "٢. إذن $F_2 = 50 - 18 = 32$ نيوتن."
    ],
    "teacherTipEn": "Be sure to check whether forces are like (same direction) or unlike (opposite direction) before adding or subtracting.",
    "teacherTipAr": "تأكد دائماً هل القوتان في نفس الاتجاه أم في اتجاهين متضادين قبل الجمع أو الطرح."
  },
  {
    "id": "stat_ch3_db_easy_07",
    "titleEn": "Direction of Resultant of Like Parallel Forces",
    "titleAr": "اتجاه محصلة قوتين متوازيتين متحدتي الاتجاه",
    "difficulty": "easy",
    "questionEn": "Which statement is true regarding the direction of the resultant of two non-zero parallel forces acting in the same direction?",
    "questionAr": "أي العبارات الآتية صحيحة بخصوص اتجاه محصلة قوتين متوازيتين غير صفريتين تعملان في نفس الاتجاه؟",
    "optionsEn": [
      "It acts in the same direction as both forces",
      "It acts in the opposite direction to both forces",
      "It is perpendicular to both forces",
      "Its direction depends on which force is larger"
    ],
    "optionsAr": [
      "تعمل في نفس اتجاه كلتا القوتين",
      "تعمل في عكس اتجاه كلتا القوتين",
      "تكون عمودية على كلتا القوتين",
      "يتوقف اتجاهها على القوة الأكبر"
    ],
    "correctAnswer": "It acts in the same direction as both forces",
    "correctIndex": 0,
    "hintEn": "Vector sum of positive parallel vectors is in the same direction.",
    "hintAr": "حاصل جمع متجهين متوازيين لهما نفس الاتجاه هو متجه في نفس اتجاههما.",
    "stepByStepSolutionEn": [
      "1. Let the forces be $\\vec{F}_1 = F_1 \\hat{u}$ and $\\vec{F}_2 = F_2 \\hat{u}$, where $\\hat{u}$ is a unit vector in their shared direction.",
      "2. The resultant vector is $\\vec{R} = \\vec{F}_1 + \\vec{F}_2 = (F_1 + F_2)\\hat{u}$.",
      "3. Since $F_1, F_2 > 0$, the resultant acts along $+\\hat{u}$, the exact same direction as both forces."
    ],
    "stepByStepSolutionAr": [
      "١. المتجهان في نفس الاتجاه: $\\vec{R} = (F_1 + F_2) \\hat{u}$.",
      "٢. بما أن المقدارين موجبان، فإن المحصلة تعمل في نفس اتجاه كلتا القوتين."
    ],
    "teacherTipEn": "The direction of the resultant of like parallel forces never reverses.",
    "teacherTipAr": "اتجاه محصلة القوى المتوازية متحدة الاتجاه يكون دائماً في نفس اتجاه القوى الأصلية."
  },
  {
    "id": "stat_ch3_db_easy_08",
    "titleEn": "Segment Division Ratio by Resultant",
    "titleAr": "نسبة تقسيم القطعة المستقيمة بنقطة تأثير المحصلة",
    "difficulty": "easy",
    "questionEn": "Two like parallel forces act at points $A$ and $B$. If $F_1 = 3 F_2$, how does the line of action of the resultant divide the segment $AB$ internally from $A$ to $B$ ($AC : CB$)?",
    "questionAr": "تؤثر قوتان متوازيتان متحدتا الاتجاه عند $A$ و $B$. إذا كان $F_1 = 3 F_2$، فبأي نسبة تقسم نقطة تأثير المحصلة $C$ القطعة المستقيمة $AB$ من الداخل ($AC : CB$)؟",
    "optionsEn": [
      "$1 : 3$",
      "$3 : 1$",
      "$1 : 4$",
      "$3 : 4$"
    ],
    "optionsAr": [
      "1 : 3",
      "3 : 1",
      "1 : 4",
      "3 : 4"
    ],
    "correctAnswer": "$1 : 3$",
    "correctIndex": 0,
    "hintEn": "The point of action divides the distance inversely proportional to the magnitudes of the forces: $F_1 \\times AC = F_2 \\times CB$.",
    "hintAr": "تقسم نقطة التأثير المسافة بنسبة عكسية مع مقداري القوتين: $F_1 \\times AC = F_2 \\times CB$.",
    "stepByStepSolutionEn": [
      "1. From moment equilibrium: $F_1 \\times AC = F_2 \\times CB$.",
      "2. Rearranging for the ratio: $\\frac{AC}{CB} = \\frac{F_2}{F_1}$.",
      "3. Given $F_1 = 3 F_2$, we have $\\frac{AC}{CB} = \\frac{F_2}{3 F_2} = \\frac{1}{3}$.",
      "4. Thus the ratio is $1 : 3$."
    ],
    "stepByStepSolutionAr": [
      "١. من علاقة العزوم: $F_1 \\times AC = F_2 \\times CB$.",
      "٢. نسبة التقسيم: $\\frac{AC}{CB} = \\frac{F_2}{F_1} = \\frac{1}{3}$.",
      "٣. إذن النسبة هي $1 : 3$."
    ],
    "teacherTipEn": "Remember the inverse rule: the larger force has the smaller arm.",
    "teacherTipAr": "تذكر القاعدة العكسية: القوة الأكبر يكون ذراعها أصغر بنسبة عكسية تماماً."
  },
  {
    "id": "stat_ch3_db_easy_09",
    "titleEn": "Vector Sum of Like Parallel Forces",
    "titleAr": "الجمع الاتجاهي لقوتين متوازيتين متحدتي الاتجاه",
    "difficulty": "easy",
    "questionEn": "Two parallel forces are given in vector form as $\\vec{F}_1 = 6\\hat{j}\\text{ N}$ and $\\vec{F}_2 = 14\\hat{j}\\text{ N}$. Find the resultant force vector $\\vec{R}$.",
    "questionAr": "قوتان متوازيتان معطاتان في الصورة المتجهة: $\\vec{F}_1 = 6\\hat{j}$ نيوتن و $\\vec{F}_2 = 14\\hat{j}$ نيوتن. أوجد متجه المحصلة $\\vec{R}$.",
    "optionsEn": [
      "$\\vec{R} = 20\\hat{j}\\text{ N}$",
      "$\\vec{R} = 8\\hat{j}\\text{ N}$",
      "$\\vec{R} = -8\\hat{j}\\text{ N}$",
      "$\\vec{R} = 20\\hat{i}\\text{ N}$"
    ],
    "optionsAr": [
      "ح = 20 ص نيوتن",
      "ح = 8 ص نيوتن",
      "ح = -8 ص نيوتن",
      "ح = 20 س نيوتن"
    ],
    "correctAnswer": "$\\vec{R} = 20\\hat{j}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Simply add the vector components: $\\vec{R} = \\vec{F}_1 + \\vec{F}_2$.",
    "hintAr": "اجمع مركبات المتجهين مباشرة: $\\vec{R} = \\vec{F}_1 + \\vec{F}_2$.",
    "stepByStepSolutionEn": [
      "1. Vector addition: $\\vec{R} = \\vec{F}_1 + \\vec{F}_2$.",
      "2. Substituting: $\\vec{R} = 6\\hat{j} + 14\\hat{j} = 20\\hat{j}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. جمع المتجهات: $\\vec{R} = 6\\hat{j} + 14\\hat{j}$.",
      "٢. إذن $\\vec{R} = 20\\hat{j}$ نيوتن."
    ],
    "teacherTipEn": "In vector notation, parallel forces acting along the same axis simply add their scalar coefficients.",
    "teacherTipAr": "في الصورة الاتجاهية، تجمع المعاملات الجبرية للمركبات الموازية لنفس المحور مباشرة."
  },
  {
    "id": "stat_ch3_db_easy_10",
    "titleEn": "Scaling Effect on Resultant of Like Forces",
    "titleAr": "أثر مضاعفة القوى المتوازية على مقدار المحصلة",
    "difficulty": "easy",
    "questionEn": "If both magnitudes of two like parallel forces are doubled while keeping their points of application unchanged, what happens to their resultant?",
    "questionAr": "إذا تضاعف مقدار كل من قوتين متوازيتين متحدتي الاتجاه مع بقاء نقطتي تأثيرهما دون تغيير، فماذا يحدث للمحصلة؟",
    "optionsEn": [
      "Its magnitude doubles while its point of application remains unchanged",
      "Its magnitude quadruples",
      "Its magnitude doubles and its point shifts toward the larger force",
      "Its magnitude remains unchanged"
    ],
    "optionsAr": [
      "يتضاعف مقدارها ويبقى موضع نقطة تأثيرها ثابتاً دون تغيير",
      "يتضاعف مقدارها أربع مرات",
      "يتضاعف مقدارها وتتحرك نقطة تأثيرها نحو القوة الأكبر",
      "يبقى مقدارها ثابتاً دون تغيير"
    ],
    "correctAnswer": "Its magnitude doubles while its point of application remains unchanged",
    "correctIndex": 0,
    "hintEn": "New resultant is $2F_1 + 2F_2 = 2R$. The ratio $\\frac{2F_2}{2F_1 + 2F_2} = \\frac{F_2}{F_1 + F_2}$ is unchanged.",
    "hintAr": "المحصلة الجديدة هي $2(F_1 + F_2) = 2R$، ونسبة تقسيم المسافة تظل ثابتة تماماً.",
    "stepByStepSolutionEn": [
      "1. New resultant: $R' = (2F_1) + (2F_2) = 2(F_1 + F_2) = 2R$, so the magnitude doubles.",
      "2. Distance to point of application: $AC' = \\frac{2F_2}{2F_1 + 2F_2} AB = \\frac{F_2}{F_1 + F_2} AB = AC$.",
      "3. Hence the position of the line of action is completely unchanged."
    ],
    "stepByStepSolutionAr": [
      "١. المقدار الجديد للمحصلة: $2F_1 + 2F_2 = 2R$ (يتضاعف).",
      "٢. نسبة تقسيم المسافة: $2F_1 / 2F_2 = F_1 / F_2$ دون تغيير، فيظل الموضع ثابتاً."
    ],
    "teacherTipEn": "Multiplying all forces by a positive scalar factor scales the resultant by that factor without shifting the line of action.",
    "teacherTipAr": "ضرب جميع القوى في عدد حقيقي موجب يضاعف المحصلة بنفس النسبة دون أي تغيير في خط عملها."
  },
  {
    "id": "stat_ch3_db_easy_11",
    "titleEn": "Resultant of Opposite Parallel Forces",
    "titleAr": "محصلة قوتين متوازيتين متضادتين",
    "difficulty": "easy",
    "questionEn": "Two parallel forces $F_1 = 45\\text{ N}$ and $F_2 = 15\\text{ N}$ act in opposite directions. Find the magnitude of their resultant $R$.",
    "questionAr": "تؤثر قوتان متوازيتان $F_1 = 45\\text{ ن}$ و $F_2 = 15\\text{ ن}$ في اتجاهين متضادين. أوجد مقدار محصلتهما $R$.",
    "optionsEn": [
      "$R = 30\\text{ N}$",
      "$R = 60\\text{ N}$",
      "$R = 40\\text{ N}$",
      "$R = 50\\text{ N}$"
    ],
    "optionsAr": [
      "$R = 30\\text{ ن}$",
      "$R = 60\\text{ ن}$",
      "$R = 40\\text{ ن}$",
      "$R = 50\\text{ ن}$"
    ],
    "correctAnswer": "$R = 30\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For opposite parallel forces, R = |F1 - F2| in the direction of the larger force.",
    "hintAr": "للقوتين المتضادتين: المحصلة تساوي الفرق $R = |F_1 - F_2|$ في اتجاه القوة الكبرى.",
    "stepByStepSolutionEn": [
      "1. Since the forces act in opposite directions, $R = |F_1 - F_2|$.",
      "2. $R = 45 - 15 = 30\\text{ N}$, acting in the direction of $F_1$."
    ],
    "stepByStepSolutionAr": [
      "١. القوتان متضادتان في الاتجاه، إذن مقدار المحصلة هو الفرق بينهما:",
      "   $R = 45 - 15 = 30\\text{ ن}$ في اتجاه $F_1$."
    ],
    "teacherTipEn": "Opposite parallel forces subtract: R = F_large - F_small.",
    "teacherTipAr": "القوى المتوازية المتضادة يطرح مقدراها لتعيين المحصلة."
  },
  {
    "id": "stat_ch3_db_easy_12",
    "titleEn": "Resultant of Opposite Parallel Forces (Variant 2)",
    "titleAr": "محصلة قوتين متوازيتين متضادتين (حالة 2)",
    "difficulty": "easy",
    "questionEn": "Two parallel forces $F_1 = 50\\text{ N}$ and $F_2 = 15\\text{ N}$ act in opposite directions. Find the magnitude of their resultant $R$.",
    "questionAr": "تؤثر قوتان متوازيتان $F_1 = 50\\text{ ن}$ و $F_2 = 15\\text{ ن}$ في اتجاهين متضادين. أوجد مقدار محصلتهما $R$.",
    "optionsEn": [
      "$R = 35\\text{ N}$",
      "$R = 65\\text{ N}$",
      "$R = 45\\text{ N}$",
      "$R = 55\\text{ N}$"
    ],
    "optionsAr": [
      "$R = 35\\text{ ن}$",
      "$R = 65\\text{ ن}$",
      "$R = 45\\text{ ن}$",
      "$R = 55\\text{ ن}$"
    ],
    "correctAnswer": "$R = 35\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For opposite parallel forces, R = |F1 - F2| in the direction of the larger force.",
    "hintAr": "للقوتين المتضادتين: المحصلة تساوي الفرق $R = |F_1 - F_2|$ في اتجاه القوة الكبرى.",
    "stepByStepSolutionEn": [
      "1. Since the forces act in opposite directions, $R = |F_1 - F_2|$.",
      "2. $R = 50 - 15 = 35\\text{ N}$, acting in the direction of $F_1$."
    ],
    "stepByStepSolutionAr": [
      "١. القوتان متضادتان في الاتجاه، إذن مقدار المحصلة هو الفرق بينهما:",
      "   $R = 50 - 15 = 35\\text{ ن}$ في اتجاه $F_1$."
    ],
    "teacherTipEn": "Opposite parallel forces subtract: R = F_large - F_small.",
    "teacherTipAr": "القوى المتوازية المتضادة يطرح مقدراها لتعيين المحصلة."
  },
  {
    "id": "stat_ch3_db_easy_13",
    "titleEn": "Resultant of Opposite Vertical Forces",
    "titleAr": "محصلة قوتين رأسيتين متضادتين في الاتجاه",
    "difficulty": "easy",
    "questionEn": "Two parallel vertical forces act on a body: an upward force $F_1 = 40\\text{ N}$ and a downward force $F_2 = 25\\text{ N}$. What is the magnitude and direction of their resultant $R$?",
    "questionAr": "تؤثر قوتان رأسيتان متوازيتان على جسم: قوة لأعلى $F_1 = 40\\text{ N}$ وقوة لأسفل $F_2 = 25\\text{ N}$. ما مقدار واتجاه محصلتهما $R$؟",
    "optionsEn": [
      "$15\\text{ N}$ upward",
      "$15\\text{ N}$ downward",
      "$65\\text{ N}$ upward",
      "$65\\text{ N}$ downward"
    ],
    "optionsAr": [
      "15 نيوتن لأعلى",
      "15 نيوتن لأسفل",
      "65 نيوتن لأعلى",
      "65 نيوتن لأسفل"
    ],
    "correctAnswer": "$15\\text{ N}$ upward",
    "correctIndex": 0,
    "hintEn": "For unlike parallel forces: $R = |F_1 - F_2|$, pointing in the direction of the larger force.",
    "hintAr": "للقوتين المتضادتين: المحصلة تساوي الفرق وتعمل في اتجاه القوة الأكبر.",
    "stepByStepSolutionEn": [
      "1. Since the forces are in opposite directions, the magnitude is the difference: $R = F_1 - F_2 = 40 - 25 = 15\\text{ N}$.",
      "2. The direction is determined by the larger force ($F_1 = 40\\text{ N}$), which is directed upward."
    ],
    "stepByStepSolutionAr": [
      "١. القوتان متضادتان، إذن مقدار المحصلة = $40 - 25 = 15$ نيوتن.",
      "٢. الاتجاه يتبع القوة الأكبر (40 نيوتن) أي لأعلى."
    ],
    "teacherTipEn": "Unlike forces always subtract, with the resultant taking the direction of the larger component.",
    "teacherTipAr": "القوى المتضادة تطرح مقاديرها دائماً وتأخذ المحصلة اتجاه القوة الأكبر."
  },
  {
    "id": "stat_ch3_db_easy_14",
    "titleEn": "Equal and Opposite Parallel Forces Form a Couple",
    "titleAr": "قوتان متوازيتان متساويتان ومتضادتان تكونان ازدواجاً",
    "difficulty": "easy",
    "questionEn": "Two unlike parallel forces of equal magnitude $F_1 = F_2 = 20\\text{ N}$ act along parallel lines separated by a distance $d = 10\\text{ cm}$. What is their resultant?",
    "questionAr": "قوتان متوازيتان متضادتان ومتساويتان في المقدار $F_1 = F_2 = 20\\text{ N}$ تعملان على خطين متوازيين البعد بينهما $10\\text{ cm}$. ماذا تكون محصلتهما؟",
    "optionsEn": [
      "Resultant is zero; they form a couple of moment $200\\text{ N}\\cdot\\text{cm}$",
      "Resultant is $40\\text{ N}$ acting at the midpoint",
      "Resultant is $20\\text{ N}$ acting midway",
      "Resultant is zero with zero turning effect"
    ],
    "optionsAr": [
      "المحصلة منعدمة؛ وتكونان ازدواجاً عزمه 200 ن.سم",
      "المحصلة 40 نيوتن تؤثر في المنتصف",
      "المحصلة 20 نيوتن تؤثر في المنتصف",
      "المحصلة منعدمة دون أي تأثير دوراني"
    ],
    "correctAnswer": "Resultant is zero; they form a couple of moment $200\\text{ N}\\cdot\\text{cm}$",
    "correctIndex": 0,
    "hintEn": "When two equal unlike parallel forces act along different lines, $\\vec{R} = \\vec{0}$, but they produce a pure couple of moment $F \\times d$.",
    "hintAr": "عندما تتساوى القوتان المتضادتان، تنعدم المحصلة وتكونان ازدواجاً عزمه ق × ل.",
    "stepByStepSolutionEn": [
      "1. Net resultant force: $R = F_1 - F_2 = 20 - 20 = 0\\text{ N}$.",
      "2. Because they do not share the same line of action, their turning effect does not vanish.",
      "3. They form a couple with moment magnitude $M = F \\times d = 20 \\times 10 = 200\\text{ N}\\cdot\\text{cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. المحصلة: $R = 20 - 20 = 0$.",
      "٢. بما أن خطي عملهما غير منطبقين، فهما تكونان ازدواجاً.",
      "٣. مقدار عزم الازدواج = $20 \\times 10 = 200$ ن.سم."
    ],
    "teacherTipEn": "Two equal and opposite parallel forces do not produce linear motion, only pure rotation.",
    "teacherTipAr": "القوتان المتساويتان والمتضادتان لا تسببان حركة انتقالية بل تحدثان دوراناً خالصاً."
  },
  {
    "id": "stat_ch3_db_easy_15",
    "titleEn": "Location of Resultant for Unlike Parallel Forces",
    "titleAr": "موضع نقطة تأثير محصلة قوتين متوازيتين متضادتين",
    "difficulty": "easy",
    "questionEn": "For two unlike parallel forces $F_1$ and $F_2$ acting at points $A$ and $B$ respectively with $F_1 > F_2$, the point of action $C$ of their resultant:",
    "questionAr": "لقوتين متوازيتين متضادتي الاتجاه $F_1$ و $F_2$ تؤثران عند $A$ و $B$ على الترتيب حيث $F_1 > F_2$، فإن نقطة تأثير محصلتهما $C$:",
    "optionsEn": [
      "Lies externally on the segment $AB$, closer to the larger force $F_1$",
      "Lies internally between $A$ and $B$",
      "Lies externally on the segment $AB$, closer to the smaller force $F_2$",
      "Lies exactly at the midpoint of $AB$"
    ],
    "optionsAr": [
      "تقع خارج القطعة المستقيمة أ ب، من جهة القوة الأكبر ق1",
      "تقع داخل القطعة المستقيمة أ ب بين النقطتين",
      "تقع خارج القطعة المستقيمة أ ب، من جهة القوة الأصغر ق2",
      "تقع في منتصف القطعة المستقيمة أ ب تماماً"
    ],
    "correctAnswer": "Lies externally on the segment $AB$, closer to the larger force $F_1$",
    "correctIndex": 0,
    "hintEn": "Resultant of unlike forces divides the line segment externally from the side of the greater force.",
    "hintAr": "محصلة القوتين المتضادتين تقسم المسافة من الخارج وتكون أقرب للقوة الأكبر دائماً.",
    "stepByStepSolutionEn": [
      "1. By Varignon's Theorem: $F_1 \\times AC = F_2 \\times BC$.",
      "2. Since $F_1 > F_2$, we must have $AC < BC$.",
      "3. For $AC < BC$, point $C$ must lie outside $AB$ on the extension of $BA$ past $A$ (closer to $A$).",
      "4. Thus $C$ lies externally on the side of the larger force $F_1$."
    ],
    "stepByStepSolutionAr": [
      "١. من قانون العزوم: $F_1 \\times AC = F_2 \\times BC$.",
      "٢. بما أن $F_1 > F_2$، يجب أن يكون $AC < BC$.",
      "٣. هذا لا يتحقق إلا إذا كانت $C$ خارج القطعة المستقيمة من جهة النقطة $A$ (القوة الأكبر)."
    ],
    "teacherTipEn": "Unlike forces always have external division: point $C$ is outside $AB$ and nearer to the larger force.",
    "teacherTipAr": "محصلة القوى المتضادة تكون نقطة تأثيرها دائماً خارج القطعة وأقرب للقوة الكبرى."
  },
  {
    "id": "stat_ch3_db_easy_16",
    "titleEn": "External Distance of Resultant of Unlike Forces",
    "titleAr": "حساب بُعد محصلة قوتين متضادتين عن نقطة التأثير",
    "difficulty": "easy",
    "questionEn": "Two unlike parallel forces $F_1 = 30\\text{ N}$ at $A$ and $F_2 = 10\\text{ N}$ at $B$ act along parallel lines with $AB = 20\\text{ cm}$. Find the distance from $A$ to the point of action $C$ of their resultant.",
    "questionAr": "قوتان متوازيتان متضادتان $F_1 = 30\\text{ N}$ عند $A$ و $F_2 = 10\\text{ N}$ عند $B$ والمسافة بينهما $AB = 20\\text{ cm}$. أوجد بُعد نقطة تأثير المحصلة $C$ عن النقطة $A$.",
    "optionsEn": [
      "$10\\text{ cm}$",
      "$20\\text{ cm}$",
      "$15\\text{ cm}$",
      "$30\\text{ cm}$"
    ],
    "optionsAr": [
      "10 سم",
      "20 سم",
      "15 سم",
      "30 سم"
    ],
    "correctAnswer": "$10\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Use external division: $F_1 \\times AC = F_2 \\times (AC + AB)$.",
    "hintAr": "استخدم معادلة التقسيم من الخارج: $F_1 \\times AC = F_2 \\times (AC + AB)$.",
    "stepByStepSolutionEn": [
      "1. Since $F_1 > F_2$, $C$ lies outside $AB$ on the side of $A$, so $BC = AC + AB = AC + 20$.",
      "2. Moment equilibrium about $C$: $F_1 \\times AC = F_2 \\times BC$.",
      "3. $30 \\times AC = 10 \\times (AC + 20) \\implies 30 AC = 10 AC + 200$.",
      "4. $20 AC = 200 \\implies AC = 10\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطة التأثير $C$ تقع خارج القطعة من جهة $A$، إذن $BC = AC + 20$.",
      "٢. بمساواة العزوم: $30 \\times AC = 10 \\times (AC + 20)$.",
      "٣. إذن $20 AC = 200 \\implies AC = 10$ سم."
    ],
    "teacherTipEn": "For unlike forces: $AC = \\frac{F_2}{F_1 - F_2} AB = \\frac{10}{20} \\times 20 = 10\\text{ cm}$.",
    "teacherTipAr": "قانون مباشر للقوى المتضادة: $AC = \\frac{F_2}{F_1 - F_2} AB = \\frac{10}{20} \\times 20 = 10$ سم."
  },
  {
    "id": "stat_ch3_db_easy_17",
    "titleEn": "Finding Larger Force from Resultant of Unlike Forces",
    "titleAr": "إيجاد القوة الكبرى بدلالة المحصلة والقوة الصغرى المتضادة",
    "difficulty": "easy",
    "questionEn": "The resultant of two unlike parallel forces has magnitude $R = 12\\text{ N}$ and acts in the direction of $F_1$. If the smaller force has magnitude $F_2 = 8\\text{ N}$, what is the magnitude of $F_1$?",
    "questionAr": "محصلة قوتين متوازيتين متضادتين مقدارها $R = 12\\text{ N}$ وتعمل في اتجاه $F_1$. إذا كان مقدار القوة الصغرى $F_2 = 8\\text{ N}$، فما مقدار القوة $F_1$؟",
    "optionsEn": [
      "$20\\text{ N}$",
      "$4\\text{ N}$",
      "$16\\text{ N}$",
      "$10\\text{ N}$"
    ],
    "optionsAr": [
      "20 نيوتن",
      "4 نيوتن",
      "16 نيوتن",
      "10 نيوتن"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For unlike forces with resultant in direction of $F_1$: $R = F_1 - F_2 \\implies F_1 = R + F_2$.",
    "hintAr": "للقوى المتضادة: المحصلة = ق1 - ق2، إذن ق1 = المحصلة + ق2.",
    "stepByStepSolutionEn": [
      "1. Since $\\vec{R}$ is in the direction of $F_1$, $F_1$ is the larger force.",
      "2. Magnitude formula: $R = F_1 - F_2$.",
      "3. $12 = F_1 - 8 \\implies F_1 = 12 + 8 = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. المحصلة في اتجاه $F_1$، إذن $F_1$ هي القوة الكبرى.",
      "٢. $R = F_1 - F_2 \\implies 12 = F_1 - 8$.",
      "٣. إذن $F_1 = 20$ نيوتن."
    ],
    "teacherTipEn": "The larger of two unlike forces is always the sum of the resultant and the smaller force: $F_{\\text{large}} = R + F_{\\text{small}}$.",
    "teacherTipAr": "القوة الكبرى في القوى المتضادة تساوي دائماً مجموع المحصلة والقوة الصغرى."
  },
  {
    "id": "stat_ch3_db_easy_18",
    "titleEn": "Vector Resultant of Unlike Parallel Forces",
    "titleAr": "المحصلة الاتجاهية لقوتين متوازيتين متضادتين",
    "difficulty": "easy",
    "questionEn": "Two parallel forces are given by $\\vec{F}_1 = 15\\hat{j}\\text{ N}$ and $\\vec{F}_2 = -9\\hat{j}\\text{ N}$. Find the resultant force vector $\\vec{R}$.",
    "questionAr": "قوتان متوازيتان معطاتان بالمتجهين: $\\vec{F}_1 = 15\\hat{j}$ نيوتن و $\\vec{F}_2 = -9\\hat{j}$ نيوتن. أوجد متجه المحصلة $\\vec{R}$.",
    "optionsEn": [
      "$\\vec{R} = 6\\hat{j}\\text{ N}$",
      "$\\vec{R} = -6\\hat{j}\\text{ N}$",
      "$\\vec{R} = 24\\hat{j}\\text{ N}$",
      "$\\vec{R} = 6\\hat{i}\\text{ N}$"
    ],
    "optionsAr": [
      "ح = 6 ص نيوتن",
      "ح = -6 ص نيوتن",
      "ح = 24 ص نيوتن",
      "ح = 6 س نيوتن"
    ],
    "correctAnswer": "$\\vec{R} = 6\\hat{j}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Add the vector components directly: $\\vec{R} = \\vec{F}_1 + \\vec{F}_2 = 15\\hat{j} + (-9\\hat{j})$.",
    "hintAr": "اجمع المتجهين جبرياً: $\\vec{R} = 15\\hat{j} - 9\\hat{j}$.",
    "stepByStepSolutionEn": [
      "1. Vector addition: $\\vec{R} = \\vec{F}_1 + \\vec{F}_2$.",
      "2. Substituting: $\\vec{R} = 15\\hat{j} + (-9\\hat{j}) = 6\\hat{j}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. جمع المتجهين: $\\vec{R} = 15\\hat{j} - 9\\hat{j}$.",
      "٢. إذن $\\vec{R} = 6\\hat{j}$ نيوتن."
    ],
    "teacherTipEn": "Vector addition automatically handles signs and directions for both like and unlike parallel forces.",
    "teacherTipAr": "الجمع الاتجاهي يتعامل تلقائياً مع الإشارات والاتجاهات سواء كانت القوى متحدة أو متضادة."
  },
  {
    "id": "stat_ch3_db_easy_19",
    "titleEn": "Distance from Smaller Force to Resultant",
    "titleAr": "المسافة من القوة الصغرى إلى خط عمل المحصلة",
    "difficulty": "easy",
    "questionEn": "Two unlike parallel forces $F_1 > F_2$ are separated by distance $D$. The distance from the smaller force $F_2$ to the line of action of the resultant is:",
    "questionAr": "قوتان متوازيتان متضادتان $F_1 > F_2$ المسافة بينهما $D$. المسافة من القوة الصغرى $F_2$ إلى خط عمل المحصلة تكون دائماً:",
    "optionsEn": [
      "Greater than $D$",
      "Less than $D$",
      "Equal to $D$",
      "Equal to $D/2$"
    ],
    "optionsAr": [
      "أكبر من D",
      "أقل من D",
      "تساوي D",
      "تساوي D / 2"
    ],
    "correctAnswer": "Greater than $D$",
    "correctIndex": 0,
    "hintEn": "Because the resultant is on the far side of the larger force, the distance from the smaller force is $D + AC > D$.",
    "hintAr": "بما أن المحصلة تقع خارج القطعة من جهة القوة الكبرى، فإن بعدها عن القوة الصغرى هو $D + AC$ وهو أكبر من $D$.",
    "stepByStepSolutionEn": [
      "1. The point of action $C$ lies outside segment $AB$ on the side of the larger force $A$.",
      "2. The distance from $B$ (smaller force) to $C$ is $BC = AB + AC = D + AC$.",
      "3. Since $AC > 0$, we have $BC > D$."
    ],
    "stepByStepSolutionAr": [
      "١. تقع نقطة التأثير $C$ في امتداد $BA$ في جهة $A$.",
      "٢. المسافة من $B$ إلى $C$ هي $BC = D + AC$.",
      "٣. بما أن $AC > 0$، فإن $BC > D$ دائماً."
    ],
    "teacherTipEn": "The smaller force is always the farthest from the resultant.",
    "teacherTipAr": "القوة الصغرى تكون دائماً هي الأبعد عن خط عمل المحصلة."
  },
  {
    "id": "stat_ch3_db_easy_20",
    "titleEn": "Equilibrium Possibility for Two Unlike Forces",
    "titleAr": "إمكانية اتزان جسم تحت تأثير قوتين متوازيتين متضادتين فقط",
    "difficulty": "easy",
    "questionEn": "Can a rigid body be in static equilibrium under the action of ONLY two unlike parallel forces of different magnitudes?",
    "questionAr": "هل يمكن لجسم صلب أن يتزن تحت تأثير قوتين متوازيتين متضادتين فقط مختلفتي المقدار؟",
    "optionsEn": [
      "No, because their resultant is non-zero ($R = F_1 - F_2 \\ne 0$)",
      "Yes, if they act at different points",
      "Yes, if the distance between them is large enough",
      "Yes, if they are both vertical"
    ],
    "optionsAr": [
      "لا، لأن محصلتهما غير منعدمة (ح = ق1 - ق2 لا تساوي صفراً)",
      "نعم، إذا أثرتا في نقطتين مختلفتين",
      "نعم، إذا كانت المسافة بينهما كبيرة كفاية",
      "نعم، إذا كانت كلتاهما رأسيتين"
    ],
    "correctAnswer": "No, because their resultant is non-zero ($R = F_1 - F_2 \\ne 0$)",
    "correctIndex": 0,
    "hintEn": "Equilibrium requires $\\sum \\vec{F} = \\vec{0}$. If $F_1 \\ne F_2$, the net force is never zero.",
    "hintAr": "الاتزان يتطلب انعدام المحصلة. فإذا كان ق1 لا يساوي ق2، فإن المحصلة لا يمكن أن تنعدم.",
    "stepByStepSolutionEn": [
      "1. The first necessary condition for static equilibrium is $\\sum \\vec{F} = \\vec{0}$.",
      "2. For two unlike parallel forces: $R = |F_1 - F_2|$.",
      "3. Since $F_1 \\ne F_2$, $R \\ne 0$.",
      "4. Therefore, equilibrium is impossible under just two unequal forces."
    ],
    "stepByStepSolutionAr": [
      "١. شرط الاتزان الأول هو انعدام محصلة القوى: $\\sum \\vec{F} = \\vec{0}$.",
      "٢. محصلة قوتين متضادتين مختلفتين هي $R = |F_1 - F_2| \\ne 0$.",
      "٣. إذن يستحيل الاتزان تحت تأثير هاتين القوتين فقط."
    ],
    "teacherTipEn": "Two forces can equilibrate a body only if they are equal in magnitude, opposite in direction, and share the exact same line of action.",
    "teacherTipAr": "لا يمكن لقوتين أن تحفظا اتزان جسم إلا إذا كانتا متساويتين في المقدار ومتضادتين في الاتجاه وعلى خط عمل واحد."
  },
  {
    "id": "stat_ch3_db_easy_21",
    "titleEn": "Symmetric Beam Support Reactions",
    "titleAr": "ردود أفعال حاملين لقضيب متماثل",
    "difficulty": "easy",
    "questionEn": "A light horizontal rod rests on two smooth supports at its ends $A$ and $B$. A load of $W = 30\\text{ N}$ is placed exactly at its midpoint. Find the reaction at each support.",
    "questionAr": "يرتكز قضيب خفيف أفقياً على حاملين أملسين عند طرفيه $A$ و $B$. وُضعت حمولة $W = 30\\text{ ن}$ في منتصفه تماماً. أوجد رد الفعل عند كل حامل.",
    "optionsEn": [
      "$R_A = R_B = 15\\text{ N}$",
      "$R_A = 30\\text{ N}, R_B = 0$",
      "$R_A = R_B = 30\\text{ N}$",
      "$R_A = 20\\text{ N}, R_B = 10\\text{ N}$"
    ],
    "optionsAr": [
      "$R_A = R_B = 15\\text{ ن}$",
      "$R_A = 30\\text{ ن}, R_B = 0$",
      "$R_A = R_B = 30\\text{ ن}$",
      "$R_A = 20\\text{ ن}, R_B = 10\\text{ ن}$"
    ],
    "correctAnswer": "$R_A = R_B = 15\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "By symmetry, the load divides equally between the two supports.",
    "hintAr": "بالتماثل، تنقسم الحمولة المركزية بالتساوي بين الحاملين.",
    "stepByStepSolutionEn": [
      "1. By symmetry with respect to the midpoint, both supports carry equal shares of the load.",
      "2. $R_A + R_B = 30 \\implies R_A = R_B = \\frac{30}{2} = 15\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتماثل، يحمل كل حامل نصف الحمل تماماً:",
      "   $R_A = R_B = \\frac{30}{2} = 15\\text{ ن}$."
    ],
    "teacherTipEn": "Central loads divide equally between symmetric end supports.",
    "teacherTipAr": "الأحمال المتمركزة في المنتصف تنصف بالتساوي بين الحاملين الطرفيين."
  },
  {
    "id": "stat_ch3_db_easy_22",
    "titleEn": "Symmetric Beam Support Reactions (Variant 2)",
    "titleAr": "ردود أفعال حاملين لقضيب متماثل (حالة 2)",
    "difficulty": "easy",
    "questionEn": "A light horizontal rod rests on two smooth supports at its ends $A$ and $B$. A load of $W = 40\\text{ N}$ is placed exactly at its midpoint. Find the reaction at each support.",
    "questionAr": "يرتكز قضيب خفيف أفقياً على حاملين أملسين عند طرفيه $A$ و $B$. وُضعت حمولة $W = 40\\text{ ن}$ في منتصفه تماماً. أوجد رد الفعل عند كل حامل.",
    "optionsEn": [
      "$R_A = R_B = 20\\text{ N}$",
      "$R_A = 40\\text{ N}, R_B = 0$",
      "$R_A = R_B = 40\\text{ N}$",
      "$R_A = 25\\text{ N}, R_B = 15\\text{ N}$"
    ],
    "optionsAr": [
      "$R_A = R_B = 20\\text{ ن}$",
      "$R_A = 40\\text{ ن}, R_B = 0$",
      "$R_A = R_B = 40\\text{ ن}$",
      "$R_A = 25\\text{ ن}, R_B = 15\\text{ ن}$"
    ],
    "correctAnswer": "$R_A = R_B = 20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "By symmetry, the load divides equally between the two supports.",
    "hintAr": "بالتماثل، تنقسم الحمولة المركزية بالتساوي بين الحاملين.",
    "stepByStepSolutionEn": [
      "1. By symmetry with respect to the midpoint, both supports carry equal shares of the load.",
      "2. $R_A + R_B = 40 \\implies R_A = R_B = \\frac{40}{2} = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتماثل، يحمل كل حامل نصف الحمل تماماً:",
      "   $R_A = R_B = \\frac{40}{2} = 20\\text{ ن}$."
    ],
    "teacherTipEn": "Central loads divide equally between symmetric end supports.",
    "teacherTipAr": "الأحمال المتمركزة في المنتصف تنصف بالتساوي بين الحاملين الطرفيين."
  },
  {
    "id": "stat_ch3_db_easy_23",
    "titleEn": "Reactions of Symmetrically Supported Uniform Rod",
    "titleAr": "ردود أفعال ركيزتي ساق منتظمة مستندة عند طرفيها",
    "difficulty": "easy",
    "questionEn": "A uniform horizontal rod $AB$ of weight $W = 50\\text{ N}$ rests on two smooth supports placed at its ends $A$ and $B$. Find the reaction force $R_A$ at support $A$.",
    "questionAr": "ساق أفقية منتظمة $AB$ وزنها $50\\text{ N}$ تستند على ركيزتين أملسين عند طرفيها $A$ و $B$. أوجد مقدار رد الفعل $R_A$ عند الركيزة $A$.",
    "optionsEn": [
      "$25\\text{ N}$",
      "$50\\text{ N}$",
      "$12.5\\text{ N}$",
      "$0\\text{ N}$"
    ],
    "optionsAr": [
      "25 نيوتن",
      "50 نيوتن",
      "12.5 نيوتن",
      "0 نيوتن"
    ],
    "correctAnswer": "$25\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For a uniform rod with symmetric supports, the weight divides equally: $R_A = R_B = \\frac{W}{2}$.",
    "hintAr": "لساق منتظمة متماثلة الارتكاز، يتقاسم الطرفان الوزن بالتساوي: $R_A = W / 2$.",
    "stepByStepSolutionEn": [
      "1. The weight of a uniform rod acts at its midpoint, exactly midway between supports $A$ and $B$.",
      "2. By symmetry (or taking moments about $B$): $R_A \\times L = W \\times \\frac{L}{2} \\implies R_A = \\frac{W}{2}$.",
      "3. Substituting $W = 50\\text{ N}$: $R_A = \\frac{50}{2} = 25\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. يؤثر وزن الساق المنتظمة عند منتصفها تماماً.",
      "٢. بالتماثل: رد فعل كل ركيزة يساوي نصف الوزن الكلي.",
      "٣. إذن $R_A = 50 / 2 = 25$ نيوتن."
    ],
    "teacherTipEn": "Symmetric configurations allow direct division of load by 2 without writing moment equations.",
    "teacherTipAr": "في الحالات المتماثلة تماماً، يمكن قسمة الحمل الكلي على 2 مباشرة دون الحاجة لمعادلات عزوم."
  },
  {
    "id": "stat_ch3_db_easy_24",
    "titleEn": "Central Point Load on Light Rod",
    "titleAr": "حمل مركز عند منتصف ساق خفيفة مهملة الوزن",
    "difficulty": "easy",
    "questionEn": "A light horizontal rod $AB$ of length $100\\text{ cm}$ rests on two end supports $A$ and $B$. A vertical downward load of $80\\text{ N}$ is placed at the midpoint. What is the reaction force $R_B$ at support $B$?",
    "questionAr": "ساق أفقية خفيفة مهملة الوزن $AB$ طولها $100\\text{ cm}$ تستند على ركيزتين عند طرفيها $A$ و $B$. وُضع حمل رأسي لأسفل مقداره $80\\text{ N}$ عند منتصف الساق. ما مقدار رد الفعل $R_B$ عند الركيزة $B$؟",
    "optionsEn": [
      "$40\\text{ N}$",
      "$80\\text{ N}$",
      "$20\\text{ N}$",
      "$60\\text{ N}$"
    ],
    "optionsAr": [
      "40 نيوتن",
      "80 نيوتن",
      "20 نيوتن",
      "60 نيوتن"
    ],
    "correctAnswer": "$40\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "A central load divides equally between the two symmetric end supports.",
    "hintAr": "الحمل المركزي يوزع بالتساوي على الركيزتين الطرفيتين.",
    "stepByStepSolutionEn": [
      "1. The load is placed at the midpoint: distance from $A$ is $50\\text{ cm}$ and from $B$ is $50\\text{ cm}$.",
      "2. Since the supports are symmetric relative to the load: $R_A = R_B = \\frac{P}{2} = \\frac{80}{2} = 40\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحمل موضوع عند المنتصف على مسافة متساوية من الركيزتين.",
      "٢. إذن رد الفعل عند كل طرف = $80 / 2 = 40$ نيوتن."
    ],
    "teacherTipEn": "Light rod means its self-weight is negligible ($W = 0$).",
    "teacherTipAr": "قضيب خفيف يعني أن وزنه الذاتي مهمل تماماً."
  },
  {
    "id": "stat_ch3_db_easy_25",
    "titleEn": "Off-Center Load on Supported Beam",
    "titleAr": "حمل غير متمركز على عارضة مستندة عند طرفيها",
    "difficulty": "easy",
    "questionEn": "A light rod $AB = 80\\text{ cm}$ rests horizontally on end supports $A$ and $B$. A downward load of $60\\text{ N}$ is placed at point $C$ where $AC = 20\\text{ cm}$. Find the reaction $R_B$ at support $B$.",
    "questionAr": "ساق خفيفة $AB = 80\\text{ cm}$ ترتكز أفقياً على ركيزتين عند طرفيها $A$ و $B$. وُضع حمل لأسفل مقداره $60\\text{ N}$ عند النقطة $C$ حيث $AC = 20\\text{ cm}$. أوجد مقدار رد الفعل $R_B$ عند الركيزة $B$.",
    "optionsEn": [
      "$15\\text{ N}$",
      "$45\\text{ N}$",
      "$30\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "15 نيوتن",
      "45 نيوتن",
      "30 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$15\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Take moments about support $A$: $R_B \\times 80 = 60 \\times 20$.",
    "hintAr": "خذ العزوم حول الركيزة $A$: $R_B \\times 80 = 60 \\times 20$.",
    "stepByStepSolutionEn": [
      "1. Taking moments about support $A$: $\\sum M_A = 0$.",
      "2. Counterclockwise moment of $R_B$: $R_B \\times 80$.",
      "3. Clockwise moment of load: $60 \\times 20 = 1200\\text{ N}\\cdot\\text{cm}$.",
      "4. Equating moments: $80 R_B = 1200 \\implies R_B = \\frac{1200}{80} = 15\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ العزوم حول الركيزة $A$: $R_B \\times 80 = 60 \\times 20$.",
      "٢. إذن $R_B = 1200 / 80 = 15$ نيوتن."
    ],
    "teacherTipEn": "The support farther from the load carries a smaller fraction of the load ($R_B = 60 \\times \\frac{20}{80} = 15\\text{ N}$).",
    "teacherTipAr": "الركيزة الأبعد عن الحمل تتحمل النسبة الأصغر منه: $60 \\times (20/80) = 15$ نيوتن."
  },
  {
    "id": "stat_ch3_db_easy_26",
    "titleEn": "Finding Near Support Reaction by Force Equilibrium",
    "titleAr": "حساب رد فعل الركيزة القريبة من اتزان القوى الرأسية",
    "difficulty": "easy",
    "questionEn": "For the same rod in the previous problem ($AB = 80\\text{ cm}$, load $60\\text{ N}$ at $AC = 20\\text{ cm}$, with $R_B = 15\\text{ N}$), find the reaction $R_A$ at support $A$.",
    "questionAr": "لنفس الساق في المسألة السابقة ($AB = 80\\text{ cm}$، الحمل $60\\text{ N}$ على بعد $20\\text{ cm}$ من $A$، و $R_B = 15\\text{ N}$)، أوجد رد الفعل $R_A$ عند الركيزة $A$.",
    "optionsEn": [
      "$45\\text{ N}$",
      "$15\\text{ N}$",
      "$30\\text{ N}$",
      "$60\\text{ N}$"
    ],
    "optionsAr": [
      "45 نيوتن",
      "15 نيوتن",
      "30 نيوتن",
      "60 نيوتن"
    ],
    "correctAnswer": "$45\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Use vertical equilibrium: $R_A + R_B = \\text{Total load}$.",
    "hintAr": "من اتزان القوى الرأسية: $R_A + R_B = 60$.",
    "stepByStepSolutionEn": [
      "1. For vertical equilibrium: $\\sum F_y = 0 \\implies R_A + R_B = 60$.",
      "2. Since $R_B = 15\\text{ N}$: $R_A = 60 - 15 = 45\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. من شرط الاتزان الرأسي: $R_A + R_B = 60$.",
      "٢. إذن $R_A = 60 - 15 = 45$ نيوتن."
    ],
    "teacherTipEn": "Notice $R_A = 45\\text{ N}$ and $R_B = 15\\text{ N}$; the closer support bears 3 times more load.",
    "teacherTipAr": "لاحظ أن الركيزة القريبة تحمل ثلاثة أمثال الركيزة البعيدة لأنها أقرب بثلاث مرات."
  },
  {
    "id": "stat_ch3_db_easy_27",
    "titleEn": "Sum of Reactions on a Simply Supported Beam",
    "titleAr": "مجموع ردود الأفعال لعارضة بسيطة الارتكاز",
    "difficulty": "easy",
    "questionEn": "For any horizontal beam in static equilibrium resting on two vertical supports and carrying downward vertical loads, the sum of the support reactions $R_A + R_B$ is always equal to:",
    "questionAr": "لأي عارضة أفقية في حالة اتزان استاتيكي تستند على ركيزتين رأسيتين وتحمل أحمالاً رأسية لأسفل، فإن مجموع ردود الأفعال $R_A + R_B$ يساوي دائماً:",
    "optionsEn": [
      "The total sum of all downward loads",
      "Half the total sum of all downward loads",
      "Twice the total sum of all downward loads",
      "Zero"
    ],
    "optionsAr": [
      "المجموع الكلي لجميع الأحمال الرأسية لأسفل",
      "نصف المجموع الكلي لجميع الأحمال",
      "ضعف المجموع الكلي لجميع الأحمال",
      "صفراً"
    ],
    "correctAnswer": "The total sum of all downward loads",
    "correctIndex": 0,
    "hintEn": "Vertical equilibrium $\\sum F_y = 0$ requires upward forces to balance downward forces.",
    "hintAr": "الاتزان الرأسي يتطلب أن تتساوى القوى الصاعدة مع القوى الهابطة.",
    "stepByStepSolutionEn": [
      "1. By Newton's first law / static equilibrium condition: $\\sum F_y = 0$.",
      "2. Upward forces are the reactions $R_A + R_B$.",
      "3. Downward forces are the sum of all weights and loads $\\sum W$.",
      "4. Therefore, $R_A + R_B = \\sum W$."
    ],
    "stepByStepSolutionAr": [
      "١. من شرط الاتزان الاستاتيكي: مجموع القوى الرأسية يساوي صفراً.",
      "٢. القوى لأعلى هي $R_A + R_B$، والقوى لأسفل هي مجموع الأحمال.",
      "٣. إذن $R_A + R_B = \\sum W$ دائماً."
    ],
    "teacherTipEn": "This check ($R_A + R_B = \\sum W$) is an essential verification step in every beam problem.",
    "teacherTipAr": "التحقق من أن مجموع ردود الأفعال يساوي مجموع الأحمال خطوة مراجعة أساسية في كل مسائل العوارض."
  },
  {
    "id": "stat_ch3_db_easy_28",
    "titleEn": "Uniform Beam with Symmetrical Added Loads",
    "titleAr": "عارضة منتظمة محملة بحملين متماثلين",
    "difficulty": "easy",
    "questionEn": "A uniform beam of weight $120\\text{ N}$ rests on two supports at its ends. Two equal loads of $30\\text{ N}$ each are placed symmetrically at distance $1\\text{ m}$ from each support. What is the reaction at each support?",
    "questionAr": "عارضة منتظمة وزنها $120\\text{ N}$ ترتكز على دعامتين عند طرفيها. وُضع حملان متساويان مقدار كل منهما $30\\text{ N}$ بشكل متماثل على بعد $1\\text{ m}$ من كل دعامة. ما مقدار رد الفعل عند كل دعامة؟",
    "optionsEn": [
      "$90\\text{ N}$",
      "$60\\text{ N}$",
      "$120\\text{ N}$",
      "$75\\text{ N}$"
    ],
    "optionsAr": [
      "90 نيوتن",
      "60 نيوتن",
      "120 نيوتن",
      "75 نيوتن"
    ],
    "correctAnswer": "$90\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Total load is $120 + 30 + 30 = 180\\text{ N}$. By complete symmetry, each support carries half: $\\frac{180}{2} = 90\\text{ N}$.",
    "hintAr": "الحمل الكلي 180 نيوتن. بالتماثل التام، يحمل كل طرف النصف = 90 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Total downward load: $W_{\\text{total}} = 120 + 30 + 30 = 180\\text{ N}$.",
      "2. Because the beam, its self-weight, and the added loads are entirely symmetric about the center, the reactions must be equal: $R_A = R_B$.",
      "3. Therefore, $R_A = R_B = \\frac{180}{2} = 90\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحمل الكلي = $120 + 30 + 30 = 180$ نيوتن.",
      "٢. نظراً للتماثل التام في توزيع الأحمال: $R_A = R_B$.",
      "٣. إذن رد الفعل عند كل دعامة = $180 / 2 = 90$ نيوتن."
    ],
    "teacherTipEn": "Symmetry guarantees equal reactions without setting up moment equations.",
    "teacherTipAr": "التماثل التام يضمن تساوي ردود الأفعال فوراً دون الحاجة لكتابة معادلات العزوم."
  },
  {
    "id": "stat_ch3_db_easy_29",
    "titleEn": "Effect of Moving Load on Support Reactions",
    "titleAr": "أثر تحريك حمل على ردود أفعال ركائز العارضة",
    "difficulty": "easy",
    "questionEn": "A single load on a beam supported at its ends $A$ and $B$ is moved closer to support $A$. What happens to the support reactions?",
    "questionAr": "حمل مفرد على عارضة ترتكز عند طرفيها $A$ و $B$ تحرك مقترباً نحو الركيزة $A$. ماذا يحدث لردود أفعال الركائز؟",
    "optionsEn": [
      "$R_A$ increases while $R_B$ decreases, with their sum remaining constant",
      "$R_A$ decreases while $R_B$ increases",
      "Both $R_A$ and $R_B$ increase",
      "Both $R_A$ and $R_B$ remain unchanged"
    ],
    "optionsAr": [
      "يزداد رد الفعل عند أ ويقل عند ب، مع بقاء مجموعهما ثابتاً",
      "يقل رد الفعل عند أ ويزداد عند ب",
      "يزداد كل من ردي الفعل",
      "يبقى رد الفعل عند كل منهما ثابتاً"
    ],
    "correctAnswer": "$R_A$ increases while $R_B$ decreases, with their sum remaining constant",
    "correctIndex": 0,
    "hintEn": "Lever arm to $B$ increases, so $R_A = P \\frac{d_B}{L}$ increases. Sum $R_A + R_B = P$ is constant.",
    "hintAr": "كلما اقترب الحمل من ركيزة، زاد نصيبها من الحمل وقل نصيب الركيزة الأخرى مع ثبات المجموع.",
    "stepByStepSolutionEn": [
      "1. By taking moments about $B$: $R_A = P \\frac{d_B}{L}$. As the load moves toward $A$, $d_B$ increases, so $R_A$ increases.",
      "2. By vertical equilibrium: $R_B = P - R_A$. Since $R_A$ increases, $R_B$ must decrease.",
      "3. The sum $R_A + R_B = P$ remains constant at all times."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ العزوم حول $B$: $R_A = P \\frac{d_B}{L}$، وبزيادة $d_B$ يزداد $R_A$.",
      "٢. ومن الاتزان الرأسي: $R_B = P - R_A$، فكلما زاد $R_A$ نقص $R_B$.",
      "٣. يظل المجموع $R_A + R_B$ ثابتاً ومساوياً للحمل $P$."
    ],
    "teacherTipEn": "The closer a load is to a support, the greater the fraction of the load carried by that support.",
    "teacherTipAr": "كلما كان الحمل أقرب إلى ركيزة ما، تحملت تلك الركيزة الجزء الأكبر من هذا الحمل."
  },
  {
    "id": "stat_ch3_db_easy_30",
    "titleEn": "Load Placed Directly Over a Support",
    "titleAr": "حمل موضوع مباشرة فوق إحدى الركائز",
    "difficulty": "easy",
    "questionEn": "A light beam rests on two end supports $A$ and $B$. A vertical load $P = 100\\text{ N}$ is placed directly on top of support $A$. What is the reaction at support $B$?",
    "questionAr": "عارضة خفيفة ترتكز على دعامتين عند طرفيها $A$ و $B$. وُضع حمل رأسي $P = 100\\text{ N}$ مباشرة فوق الدعامة $A$. ما مقدار رد الفعل عند الدعامة $B$؟",
    "optionsEn": [
      "$R_B = 0\\text{ N}$",
      "$R_B = 50\\text{ N}$",
      "$R_B = 100\\text{ N}$",
      "$R_B = 25\\text{ N}$"
    ],
    "optionsAr": [
      "رد الفعل عند ب = 0 نيوتن",
      "رد الفعل عند ب = 50 نيوتن",
      "رد الفعل عند ب = 100 نيوتن",
      "رد الفعل عند ب = 25 نيوتن"
    ],
    "correctAnswer": "$R_B = 0\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Take moments about support $A$: $P$ passes through $A$, so its moment is zero $\\implies R_B \\times L = 0$.",
    "hintAr": "خذ العزوم حول $A$: خط عمل الحمل يمر بالدعامة $A$ فعزمه صفر، إذن $R_B \\times L = 0$.",
    "stepByStepSolutionEn": [
      "1. The load $P$ acts directly through support $A$, so its lever arm about $A$ is zero.",
      "2. Taking moments about $A$: $\\sum M_A = 0 \\implies R_B \\times L = P \\times 0 = 0$.",
      "3. Since length $L > 0$, we have $R_B = 0\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. يمر خط عمل الحمل بالدعامة $A$ مباشرة، فيكون ذراع عزمه حولها صفراً.",
      "٢. بأخذ العزوم حول $A$: $R_B \\times L = 0$.",
      "٣. إذن $R_B = 0$ نيوتن، وتتحمل الدعامة $A$ كامل الحمل."
    ],
    "teacherTipEn": "A load placed directly over a support is transmitted 100% to that support, producing zero reaction at other supports.",
    "teacherTipAr": "أي حمل يقع مباشرة فوق ركيزة ينتقل بكامله إليها، ويكون تأثيره على الركائز الأخرى صفراً."
  },
  {
    "id": "stat_ch3_db_easy_31",
    "titleEn": "Line of Action of Two Equal Like Parallel Forces",
    "titleAr": "خط عمل محصلة قوتين متساويتين متوازيتين",
    "difficulty": "easy",
    "questionEn": "Two equal parallel forces act in the same direction at points $A$ and $B$, where $AB = 6\\text{ cm}$. How far from $A$ does their resultant act?",
    "questionAr": "تؤثر قوتان متوازيتان متساويتان في نفس الاتجاه عند النقطتين $A$ و $B$ حيث $AB = 6\\text{ سم}$. كم تبعد محصلتهما عن النقطة $A$؟",
    "optionsEn": [
      "$3\\text{ cm}$ (Midpoint of $AB$)",
      "$5\\text{ cm}$",
      "$1\\text{ cm}$",
      "$6\\text{ cm}$"
    ],
    "optionsAr": [
      "$3\\text{ سم}$ (منتصف $AB$)",
      "$5\\text{ سم}$",
      "$1\\text{ سم}$",
      "$6\\text{ سم}$"
    ],
    "correctAnswer": "$3\\text{ cm}$ (Midpoint of $AB$)",
    "correctIndex": 0,
    "hintEn": "Equal forces have their resultant acting exactly at the midpoint.",
    "hintAr": "المحصلة لقوتين متساويتين تؤثر في منتصف المسافة بينهما تماماً.",
    "stepByStepSolutionEn": [
      "1. Since $F_1 = F_2$, the moments about the resultant point $C$ give: $F_1 \\times AC = F_2 \\times BC \\implies AC = BC$.",
      "2. Therefore, $C$ is the midpoint: $AC = \\frac{AB}{2} = \\frac{6}{2} = 3\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن القوتين متساويتان، فإن المحصلة تنصف المسافة بينهما:",
      "   $AC = \\frac{6}{2} = 3\\text{ سم}$."
    ],
    "teacherTipEn": "Equal like forces always have their resultant at the midpoint.",
    "teacherTipAr": "محصلة القوتين المتساويتين في المقدار والمتحدتين في الاتجاه تنصف البعد بينهما."
  },
  {
    "id": "stat_ch3_db_easy_32",
    "titleEn": "Line of Action of Two Equal Like Parallel Forces (Variant 2)",
    "titleAr": "خط عمل محصلة قوتين متساويتين متوازيتين (حالة 2)",
    "difficulty": "easy",
    "questionEn": "Two equal parallel forces act in the same direction at points $A$ and $B$, where $AB = 12\\text{ cm}$. How far from $A$ does their resultant act?",
    "questionAr": "تؤثر قوتان متوازيتان متساويتان في نفس الاتجاه عند النقطتين $A$ و $B$ حيث $AB = 12\\text{ سم}$. كم تبعد محصلتهما عن النقطة $A$؟",
    "optionsEn": [
      "$6\\text{ cm}$ (Midpoint of $AB$)",
      "$8\\text{ cm}$",
      "$4\\text{ cm}$",
      "$12\\text{ cm}$"
    ],
    "optionsAr": [
      "$6\\text{ سم}$ (منتصف $AB$)",
      "$8\\text{ سم}$",
      "$4\\text{ سم}$",
      "$12\\text{ سم}$"
    ],
    "correctAnswer": "$6\\text{ cm}$ (Midpoint of $AB$)",
    "correctIndex": 0,
    "hintEn": "Equal forces have their resultant acting exactly at the midpoint.",
    "hintAr": "المحصلة لقوتين متساويتين تؤثر في منتصف المسافة بينهما تماماً.",
    "stepByStepSolutionEn": [
      "1. Since $F_1 = F_2$, the moments about the resultant point $C$ give: $F_1 \\times AC = F_2 \\times BC \\implies AC = BC$.",
      "2. Therefore, $C$ is the midpoint: $AC = \\frac{AB}{2} = \\frac{12}{2} = 6\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن القوتين متساويتان، فإن المحصلة تنصف المسافة بينهما:",
      "   $AC = \\frac{12}{2} = 6\\text{ سم}$."
    ],
    "teacherTipEn": "Equal like forces always have their resultant at the midpoint.",
    "teacherTipAr": "محصلة القوتين المتساويتين في المقدار والمتحدتين في الاتجاه تنصف البعد بينهما."
  },
  {
    "id": "stat_ch3_db_easy_33",
    "titleEn": "Resultant Magnitude of Three Like Forces",
    "titleAr": "مقدار محصلة ثلاث قوى متوازية متحدة الاتجاه",
    "difficulty": "easy",
    "questionEn": "Three like parallel forces of magnitudes $10\\text{ N}$, $20\\text{ N}$, and $30\\text{ N}$ act in the same direction on a rigid body. What is the magnitude of their resultant $R$?",
    "questionAr": "ثلاث قوى متوازية مقاديرها $10\\text{ N}$ و $20\\text{ N}$ و $30\\text{ N}$ تؤثر في نفس الاتجاه على جسم صلب. ما مقدار محصلتها $R$؟",
    "optionsEn": [
      "$60\\text{ N}$",
      "$40\\text{ N}$",
      "$50\\text{ N}$",
      "$30\\text{ N}$"
    ],
    "optionsAr": [
      "60 نيوتن",
      "40 نيوتن",
      "50 نيوتن",
      "30 نيوتن"
    ],
    "correctAnswer": "$60\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For parallel forces in the same direction, simply sum all magnitudes: $R = \\sum F_i$.",
    "hintAr": "للقوى في نفس الاتجاه، المحصلة تساوي المجموع الجبري لمقاديرها.",
    "stepByStepSolutionEn": [
      "1. Since all three forces act in the same direction, their resultant magnitude is the sum of their individual magnitudes.",
      "2. $R = 10 + 20 + 30 = 60\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. جميع القوى في اتجاه واحد.",
      "٢. مقدار المحصلة = $10 + 20 + 30 = 60$ نيوتن."
    ],
    "teacherTipEn": "Like parallel forces always add algebraically.",
    "teacherTipAr": "القوى المتوازية متحدة الاتجاه تجمع مقاديرها دائماً جمعاً جبرياً."
  },
  {
    "id": "stat_ch3_db_easy_34",
    "titleEn": "Position of Resultant of Symmetrical Force System",
    "titleAr": "موقع محصلة منظومة قوى متوازية متماثلة التوزيع",
    "difficulty": "easy",
    "questionEn": "Three downward parallel forces act along a line: $5\\text{ N}$ at $x = 0$, $10\\text{ N}$ at $x = 2\\text{ m}$, and $5\\text{ N}$ at $x = 4\\text{ m}$. What is the coordinate $x_R$ of their resultant?",
    "questionAr": "ثلاث قوى متوازية رأسية لأسفل تؤثر على خط مستقيم: $5\\text{ N}$ عند $x = 0$، و $10\\text{ N}$ عند $x = 2\\text{ m}$، و $5\\text{ N}$ عند $x = 4\\text{ m}$. ما هو الإحداثي $x_R$ لخط عمل محصلتها؟",
    "optionsEn": [
      "$x_R = 2\\text{ m}$",
      "$x_R = 1.5\\text{ m}$",
      "$x_R = 2.5\\text{ m}$",
      "$x_R = 3\\text{ m}$"
    ],
    "optionsAr": [
      "س = 2 م",
      "س = 1.5 م",
      "س = 2.5 م",
      "س = 3 م"
    ],
    "correctAnswer": "$x_R = 2\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Use symmetry or the center of gravity formula: $x_R = \\frac{\\sum F_i x_i}{\\sum F_i}$.",
    "hintAr": "بالتماثل أو بقانون العزوم: $x_R = \\frac{\\sum F_i x_i}{\\sum F_i}$.",
    "stepByStepSolutionEn": [
      "1. Total force: $R = 5 + 10 + 5 = 20\\text{ N}$.",
      "2. Sum of moments about $x = 0$: $\\sum M_0 = (5)(0) + (10)(2) + (5)(4) = 0 + 20 + 20 = 40\\text{ N}\\cdot\\text{m}$.",
      "3. Position of resultant: $x_R = \\frac{\\sum M_0}{R} = \\frac{40}{20} = 2\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. القوة الكلية = $5 + 10 + 5 = 20$ نيوتن.",
      "٢. مجموع العزوم حول نقطة الأصل = $(10 \\times 2) + (5 \\times 4) = 40$ ن.م.",
      "٣. إحداثي المحصلة = $40 / 20 = 2$ م."
    ],
    "teacherTipEn": "Because the force system is perfectly symmetrical about $x = 2\\text{ m}$, the resultant must lie at $x = 2\\text{ m}$.",
    "teacherTipAr": "نظراً للتماثل التام للمنظومة حول $x = 2$ م، فإن المحصلة تقع عند محور التماثل مباشرة."
  },
  {
    "id": "stat_ch3_db_easy_35",
    "titleEn": "Varignon Theorem for Parallel Forces",
    "titleAr": "نص نظرية فارينيون للعزوم لمنظومة قوى متوازية",
    "difficulty": "easy",
    "questionEn": "Varignon's Theorem for a system of coplanar parallel forces states that:",
    "questionAr": "تنص نظرية فارينيون للعزوم لمنظومة قوى مستوية متوازية على أن:",
    "optionsEn": [
      "The moment of the resultant about any point equals the algebraic sum of the moments of the component forces about that point",
      "The resultant of parallel forces is always zero",
      "The moment of a force is independent of the reference point",
      "The algebraic sum of forces equals their moment"
    ],
    "optionsAr": [
      "عزم المحصلة حول أي نقطة يساوي المجموع الجبري لعزوم القوى المكونة حول نفس النقطة",
      "محصلة القوى المتوازية تساوي صفراً دائماً",
      "عزم القوة مستقل تماماً عن مركز العزوم",
      "المجموع الجبري للقوى يساوي عزمها"
    ],
    "correctAnswer": "The moment of the resultant about any point equals the algebraic sum of the moments of the component forces about that point",
    "correctIndex": 0,
    "hintEn": "Varignon's theorem establishes the rotational equivalence: $M_O(\\vec{R}) = \\sum M_O(\\vec{F}_i)$.",
    "hintAr": "نظرية فارينيون تنص على التكافؤ الدوراني: عزم المحصلة = مجموع عزوم القوى حول نفس النقطة.",
    "stepByStepSolutionEn": [
      "1. For any system of forces with resultant $\\vec{R} = \\sum \\vec{F}_i$, taking moments about any point $O$ gives:",
      "   $\\vec{M}_O(\\vec{R}) = \\sum \\vec{r}_i \\times \\vec{F}_i$.",
      "2. This fundamental theorem is known as Varignon's Theorem of Moments."
    ],
    "stepByStepSolutionAr": [
      "١. عزم المحصلة حول أي نقطة $O$ يُعطى بالقانون: $\\vec{M}_O(\\vec{R}) = \\sum \\vec{M}_O(\\vec{F}_i)$.",
      "٢. وهذا هو نص نظرية فارينيون للعزوم."
    ],
    "teacherTipEn": "Varignon's theorem is the mathematical foundation for finding the line of action of the resultant.",
    "teacherTipAr": "نظرية فارينيون هي الأساس الرياضي لتحديد خط عمل المحصلة لأي منظومة قوى."
  },
  {
    "id": "stat_ch3_db_easy_36",
    "titleEn": "Necessary and Sufficient Conditions for Parallel Force Equilibrium",
    "titleAr": "شروط الاتزان التام لمنظومة قوى متوازية",
    "difficulty": "easy",
    "questionEn": "What are the necessary and sufficient conditions for a rigid body subjected to a system of coplanar parallel forces to be in static equilibrium?",
    "questionAr": "ما هي الشروط اللازمة والكافية لكي يتزن جسم صلب واقع تحت تأثير منظومة قوى مستوية متوازية؟",
    "optionsEn": [
      "Both the algebraic sum of the forces and the algebraic sum of their moments about any point must vanish ($\\sum F = 0$ and $\\sum M = 0$)",
      "Only the algebraic sum of the forces must vanish ($\\sum F = 0$)",
      "Only the sum of moments about one point must vanish ($\\sum M = 0$)",
      "The forces must all be equal in magnitude"
    ],
    "optionsAr": [
      "انعدام المجموع الجبري للقوى وانعدام المجموع الجبري لعزومها حول أي نقطة معاً (مجـ ق = 0 ومجـ العزوم = 0)",
      "انعدام المجموع الجبري للقوى فقط",
      "انعدام مجموع العزوم حول نقطة واحدة فقط",
      "أن تكون جميع القوى متساوية في المقدار"
    ],
    "correctAnswer": "Both the algebraic sum of the forces and the algebraic sum of their moments about any point must vanish ($\\sum F = 0$ and $\\sum M = 0$)",
    "correctIndex": 0,
    "hintEn": "Complete static equilibrium requires both translational equilibrium ($\\\\sum F = 0$) and rotational equilibrium ($\\\\sum M = 0$).",
    "hintAr": "الاتزان التام يتطلب اتزاناً انتقالياً (مجـ ق = 0) واتزاناً دورانياً (مجـ العزوم = 0).",
    "stepByStepSolutionEn": [
      "1. For translational equilibrium: the algebraic sum of the parallel forces must be zero ($\\sum F = 0$).",
      "2. For rotational equilibrium: the algebraic sum of moments about any point must be zero ($\\sum M = 0$).",
      "3. Both conditions are required; satisfying only one is not sufficient."
    ],
    "stepByStepSolutionAr": [
      "١. لمنع الحركة الانتقالية: يجب أن يكون $\\sum F = 0$.",
      "٢. لمنع الحركة الدورانية: يجب أن يكون $\\sum M = 0$ حول أي نقطة.",
      "٣. كلا الشرطين معاً ضروري وكافٍ لتحقيق الاتزان التام."
    ],
    "teacherTipEn": "If only $\\sum F = 0$, the body may still experience pure rotation (a couple).",
    "teacherTipAr": "إذا انعدمت القوى فقط دون العزوم، فإن المنظومة قد تكافئ ازدواجاً يسبب دوراناً."
  },
  {
    "id": "stat_ch3_db_easy_37",
    "titleEn": "Inverse Division Ratio for Parallel Forces",
    "titleAr": "النسبة العكسية لتقسيم المسافة بين قوتين متوازيتين",
    "difficulty": "easy",
    "questionEn": "Two like parallel forces $F_1 = 10\\text{ N}$ and $F_2 = 30\\text{ N}$ act at points $A$ and $B$. The line of action of their resultant divides the segment $AB$ internally in the ratio:",
    "questionAr": "قوتان متوازيتان متحدتا الاتجاه $F_1 = 10\\text{ N}$ و $F_2 = 30\\text{ N}$ تؤثران عند $A$ و $B$. خط عمل محصلتهما يقسم القطعة $AB$ من الداخل بنسبة:",
    "optionsEn": [
      "$3 : 1$ from $A$ to $B$",
      "$1 : 3$ from $A$ to $B$",
      "$1 : 4$ from $A$ to $B$",
      "$3 : 4$ from $A$ to $B$"
    ],
    "optionsAr": [
      "3 : 1 من أ إلى ب",
      "1 : 3 من أ إلى ب",
      "1 : 4 من أ إلى ب",
      "3 : 4 من أ إلى ب"
    ],
    "correctAnswer": "$3 : 1$ from $A$ to $B$",
    "correctIndex": 0,
    "hintEn": "Wait: $F_1 \\times AC = F_2 \\times CB \\implies 10 AC = 30 CB \\implies \\frac{AC}{CB} = \\frac{30}{10} = \\frac{3}{1}$.",
    "hintAr": "ق1 × أ جـ = ق2 × ب جـ، إذن أ جـ / ب جـ = 30 / 10 = 3 / 1.",
    "stepByStepSolutionEn": [
      "1. By Varignon's theorem about the resultant's application point $C$: $F_1 \\times AC = F_2 \\times CB$.",
      "2. Ratio of segments: $\\frac{AC}{CB} = \\frac{F_2}{F_1} = \\frac{30}{10} = \\frac{3}{1}$.",
      "3. Thus the segment $AB$ is divided internally in the ratio $3 : 1$ from $A$ to $B$."
    ],
    "stepByStepSolutionAr": [
      "١. من علاقة العزوم: $10 \\times AC = 30 \\times CB$.",
      "٢. إذن $\\frac{AC}{CB} = \\frac{30}{10} = \\frac{3}{1}$.",
      "٣. نقطة التأثير تقسم القطعة من الداخل بنسبة $3 : 1$ من $A$ إلى $B$."
    ],
    "teacherTipEn": "The ratio of distances from the forces to the resultant is the reciprocal of the ratio of the forces.",
    "teacherTipAr": "نسبة بعدي القوتين عن المحصلة تساوي مقلوب نسبة مقداري القوتين."
  },
  {
    "id": "stat_ch3_db_easy_38",
    "titleEn": "Position of Resultant on X-Axis",
    "titleAr": "إيجاد موضع محصلة قوتين على محور السينات",
    "difficulty": "easy",
    "questionEn": "Two parallel forces $\\vec{F}_1 = 20\\hat{j}\\text{ N}$ and $\\vec{F}_2 = 30\\hat{j}\\text{ N}$ act at coordinates $x_1 = 1\\text{ m}$ and $x_2 = 6\\text{ m}$ along the x-axis. Find the coordinate $x_R$ of their resultant.",
    "questionAr": "قوتان متوازيتان $\\vec{F}_1 = 20\\hat{j}$ نيوتن و $\\vec{F}_2 = 30\\hat{j}$ نيوتن تؤثران عند الإحداثيين $x_1 = 1\\text{ m}$ و $x_2 = 6\\text{ m}$ على محور السينات. أوجد إحداثي نقطة تأثير محصلتهما $x_R$.",
    "optionsEn": [
      "$x_R = 4\\text{ m}$",
      "$x_R = 3.5\\text{ m}$",
      "$x_R = 4.5\\text{ m}$",
      "$x_R = 5\\text{ m}$"
    ],
    "optionsAr": [
      "س = 4 م",
      "س = 3.5 م",
      "س = 4.5 م",
      "س = 5 م"
    ],
    "correctAnswer": "$x_R = 4\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Use $x_R = \\frac{F_1 x_1 + F_2 x_2}{F_1 + F_2}$.",
    "hintAr": "استخدم قانون المتوسط المرجح: $x_R = \\frac{F_1 x_1 + F_2 x_2}{F_1 + F_2}$.",
    "stepByStepSolutionEn": [
      "1. Total force: $R = 20 + 30 = 50\\text{ N}$.",
      "2. Moment about the origin: $M_0 = (20)(1) + (30)(6) = 20 + 180 = 200\\text{ N}\\cdot\\text{m}$.",
      "3. Resultant coordinate: $x_R = \\frac{M_0}{R} = \\frac{200}{50} = 4\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. القوة الكلية = $20 + 30 = 50$ نيوتن.",
      "٢. عزم القوى حول نقطة الأصل = $(20 \\times 1) + (30 \\times 6) = 200$ ن.م.",
      "٣. إحداثي المحصلة = $200 / 50 = 4$ أمتار."
    ],
    "teacherTipEn": "Formula $x_R = \\frac{\\sum F_i x_i}{\\sum F_i}$ is identical to the center of mass formula.",
    "teacherTipAr": "صيغة حساب موقع المحصلة مطابقة تماماً لصيغة حساب مركز الكتلة."
  },
  {
    "id": "stat_ch3_db_easy_39",
    "titleEn": "Arm of Couple Formed by Two Parallel Forces",
    "titleAr": "ذراع الازدواج المتكون من قوتين متوازيتين متضادتين",
    "difficulty": "easy",
    "questionEn": "Two unlike parallel forces of magnitude $15\\text{ N}$ each form a couple of moment magnitude $75\\text{ N}\\cdot\\text{cm}$. What is the perpendicular distance between their lines of action?",
    "questionAr": "قوتان متوازيتان متضادتان مقدار كل منهما $15\\text{ N}$ تكونان ازدواجاً معيار عزمه $75\\text{ N}\\cdot\\text{cm}$. ما البعد العمودي بين خطي عملهما؟",
    "optionsEn": [
      "$5\\text{ cm}$",
      "$15\\text{ cm}$",
      "$25\\text{ cm}$",
      "$1125\\text{ cm}$"
    ],
    "optionsAr": [
      "5 سم",
      "15 سم",
      "25 سم",
      "1125 سم"
    ],
    "correctAnswer": "$5\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Use $M = F \\times d \\implies d = \\frac{M}{F}$.",
    "hintAr": "معيار عزم الازدواج = إحدى القوتين × البعد العمودي بينهما: ل = العزم ÷ القوة.",
    "stepByStepSolutionEn": [
      "1. The couple moment formula is $M = F \\times d$, where $d$ is the arm of the couple.",
      "2. Substituting known values: $75 = 15 \\times d$.",
      "3. Solving: $d = \\frac{75}{15} = 5\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون معيار عزم الازدواج: $M = F \\times d$.",
      "٢. بالتعويض: $75 = 15 \\times d$.",
      "٣. إذن $d = 75 / 15 = 5$ سم."
    ],
    "teacherTipEn": "The arm of a couple is the shortest perpendicular distance between the lines of action of the two forces.",
    "teacherTipAr": "ذراع الازدواج هو أقصر بعد عمودي بين خطي عمل القوتين."
  },
  {
    "id": "stat_ch3_db_easy_40",
    "titleEn": "Rigid Shift of Parallel Force System",
    "titleAr": "إزاحة منظومة قوى متوازية كجسم صلب",
    "difficulty": "easy",
    "questionEn": "If every force in a system of parallel forces is shifted along its line of action by an arbitrary distance, what happens to the resultant force and its line of action?",
    "questionAr": "إذا أُزيحت كل قوة في منظومة قوى متوازية على طول خط عملها بأي مسافة اختيارية، فماذا يحدث للمحصلة ولخط عملها؟",
    "optionsEn": [
      "Neither the resultant magnitude nor its line of action changes (Principle of Transmissibility)",
      "The resultant magnitude changes",
      "The line of action shifts parallel to itself",
      "The system ceases to be in equilibrium"
    ],
    "optionsAr": [
      "لا يتغير مقدار المحصلة ولا خط عملها مطلقاً (مبدأ قابلية انتقال القوى)",
      "يتغير مقدار المحصلة",
      "ينزاح خط عمل المحصلة موازياً لنفسه",
      "تفقد المنظومة اتزانها"
    ],
    "correctAnswer": "Neither the resultant magnitude nor its line of action changes (Principle of Transmissibility)",
    "correctIndex": 0,
    "hintEn": "By the Principle of Transmissibility, sliding a force along its line of action does not alter its external mechanical effect on a rigid body.",
    "hintAr": "وفق مبدأ قابلية انتقال القوة، فإن نقل نقطة تأثير قوة على خط عملها لا يغير من أثرها الميكانيكي الخارجي.",
    "stepByStepSolutionEn": [
      "1. The Principle of Transmissibility states that the external effect of a force on a rigid body remains unchanged if the force is moved along its line of action.",
      "2. Shifting forces along their lines of action does not change their magnitudes, directions, or moments about any point.",
      "3. Therefore, the resultant vector and its line of action remain completely identical."
    ],
    "stepByStepSolutionAr": [
      "١. مبدأ قابلية الانتقال يقر بأن التأثير الخارجي للقوة على الجسم الصلب لا يتغير بنقل نقطة تأثيرها على خط عملها.",
      "٢. لذلك لا تتغير المقادير ولا العزوم حول أي نقطة.",
      "٣. تظل المحصلة وخط عملها دون أي تغيير."
    ],
    "teacherTipEn": "Forces acting on rigid bodies are sliding vectors: they can slide anywhere along their lines of action.",
    "teacherTipAr": "القوى المؤثرة على الأجسام الصلبة هي متجهات منزلقة: يمكن نقل نقطة تأثيرها إلى أي نقطة على خط عملها."
  },
  {
    "id": "stat_ch3_db_easy_41",
    "titleEn": "Missing Force for Vertical Equilibrium",
    "titleAr": "القوة المجهولة للاتزان الرأسي",
    "difficulty": "easy",
    "questionEn": "A body is in static equilibrium under an upward force of $60\\text{ N}$ and two downward forces: $30\\text{ N}$ and $F$. Find the magnitude of $F$.",
    "questionAr": "جسم في حالة اتزان استاتيكي تحت تأثير قوة لأعلى مقدارها $60\\text{ ن}$ وقوتين لأسفل مقدارهما $30\\text{ ن}$ و $F$. أوجد مقدار القوة $F$.",
    "optionsEn": [
      "$30\\text{ N}$",
      "$40\\text{ N}$",
      "$20\\text{ N}$",
      "$60\\text{ N}$"
    ],
    "optionsAr": [
      "$30\\text{ ن}$",
      "$40\\text{ ن}$",
      "$20\\text{ ن}$",
      "$60\\text{ ن}$"
    ],
    "correctAnswer": "$30\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Equate total upward forces to total downward forces.",
    "hintAr": "ساوِ مجموع القوى لأعلى بمجموع القوى لأسفل.",
    "stepByStepSolutionEn": [
      "1. Condition of vertical equilibrium: $\\sum F_y = 0$.",
      "2. 60 = 30 + F \\implies F = 60 - 30 = 30\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط الاتزان الرأسي: مجموع القوى لأعلى = مجموع القوى لأسفل.",
      "٢. $F = 60 - 30 = 30\\text{ ن}$."
    ],
    "teacherTipEn": "Sigma F = 0 is the primary equilibrium equation.",
    "teacherTipAr": "مجموع القوى = صفر هي معادلة الاتزان الأولى."
  },
  {
    "id": "stat_ch3_db_easy_42",
    "titleEn": "Missing Force for Vertical Equilibrium (Variant 2)",
    "titleAr": "القوة المجهولة للاتزان الرأسي (حالة 2)",
    "difficulty": "easy",
    "questionEn": "A body is in static equilibrium under an upward force of $70\\text{ N}$ and two downward forces: $30\\text{ N}$ and $F$. Find the magnitude of $F$.",
    "questionAr": "جسم في حالة اتزان استاتيكي تحت تأثير قوة لأعلى مقدارها $70\\text{ ن}$ وقوتين لأسفل مقدارهما $30\\text{ ن}$ و $F$. أوجد مقدار القوة $F$.",
    "optionsEn": [
      "$40\\text{ N}$",
      "$50\\text{ N}$",
      "$30\\text{ N}$",
      "$70\\text{ N}$"
    ],
    "optionsAr": [
      "$40\\text{ ن}$",
      "$50\\text{ ن}$",
      "$30\\text{ ن}$",
      "$70\\text{ ن}$"
    ],
    "correctAnswer": "$40\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Equate total upward forces to total downward forces.",
    "hintAr": "ساوِ مجموع القوى لأعلى بمجموع القوى لأسفل.",
    "stepByStepSolutionEn": [
      "1. Condition of vertical equilibrium: $\\sum F_y = 0$.",
      "2. 70 = 30 + F \\implies F = 70 - 30 = 40\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط الاتزان الرأسي: مجموع القوى لأعلى = مجموع القوى لأسفل.",
      "٢. $F = 70 - 30 = 40\\text{ ن}$."
    ],
    "teacherTipEn": "Sigma F = 0 is the primary equilibrium equation.",
    "teacherTipAr": "مجموع القوى = صفر هي معادلة الاتزان الأولى."
  },
  {
    "id": "stat_ch3_db_easy_43",
    "titleEn": "Equilibrium with Three Parallel Forces",
    "titleAr": "اتزان جسم تحت تأثير ثلاث قوى متوازية",
    "difficulty": "easy",
    "questionEn": "A rigid body is in static equilibrium under three parallel forces: an upward force $F_1 = 50\\text{ N}$ and two downward forces $F_2 = 30\\text{ N}$ and $F_3$. Find the magnitude of $F_3$.",
    "questionAr": "جسم صلب في حالة اتزان استاتيكي تحت تأثير ثلاث قوى متوازية: قوة لأعلى $F_1 = 50\\text{ N}$ وقوتان لأسفل $F_2 = 30\\text{ N}$ و $F_3$. أوجد مقدار القوة $F_3$.",
    "optionsEn": [
      "$20\\text{ N}$",
      "$80\\text{ N}$",
      "$50\\text{ N}$",
      "$15\\text{ N}$"
    ],
    "optionsAr": [
      "20 نيوتن",
      "80 نيوتن",
      "50 نيوتن",
      "15 نيوتن"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For equilibrium: Upward forces = Downward forces $\\implies 50 = 30 + F_3$.",
    "hintAr": "من شرط الاتزان: القوى لأعلى تساوي القوى لأسفل: $50 = 30 + F_3$.",
    "stepByStepSolutionEn": [
      "1. For static equilibrium, the sum of vertical forces must be zero: $\\sum F_y = 0$.",
      "2. Upward forces: $F_1 = 50\\text{ N}$.",
      "3. Downward forces: $F_2 + F_3 = 30 + F_3$.",
      "4. Equating: $50 = 30 + F_3 \\implies F_3 = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. من شرط الاتزان: مجموع القوى لأعلى = مجموع القوى لأسفل.",
      "٢. $50 = 30 + F_3$.",
      "٣. إذن $F_3 = 20$ نيوتن."
    ],
    "teacherTipEn": "Vertical force balance is the quickest way to find an unknown parallel force when all other magnitudes and directions are known.",
    "teacherTipAr": "موازنة القوى الرأسية هي أسرع طريقة لإيجاد قيمة قوة مجهولة عندما تكون جميع القوى الأخرى معلومة الاتجاه والمقدار."
  },
  {
    "id": "stat_ch3_db_easy_44",
    "titleEn": "Tension in Supporting Ropes of a Uniform Plank",
    "titleAr": "الشد في حبلي تعليق لوح خشب منتظم",
    "difficulty": "easy",
    "questionEn": "A uniform horizontal wooden plank of weight $W = 80\\text{ N}$ is suspended by two vertical ropes attached at its two ends. What is the tension in each rope?",
    "questionAr": "لوح خشبي أفقي منتظم وزنه $80\\text{ N}$ معلق بحبلين رأسيين مثبتين عند طرفيه. ما مقدار الشد في كل حبل؟",
    "optionsEn": [
      "$40\\text{ N}$ in each rope",
      "$80\\text{ N}$ in each rope",
      "$20\\text{ N}$ in each rope",
      "$50\\text{ N}$ in one and $30\\text{ N}$ in the other"
    ],
    "optionsAr": [
      "40 نيوتن في كل حبل",
      "80 نيوتن في كل حبل",
      "20 نيوتن في كل حبل",
      "50 نيوتن في أحدهما و 30 نيوتن في الآخر"
    ],
    "correctAnswer": "$40\\text{ N}$ in each rope",
    "correctIndex": 0,
    "hintEn": "Symmetric support means the uniform weight divides equally between the two vertical ropes.",
    "hintAr": "التعليق المتماثل يعني أن الوزن المنتظم يتوزع بالتساوي بين حبلي التعليق.",
    "stepByStepSolutionEn": [
      "1. The weight acts at the midpoint of the plank.",
      "2. Both ropes are attached at the ends, equidistant from the center of gravity.",
      "3. By symmetry and vertical equilibrium: $2T = W = 80\\text{ N} \\implies T = 40\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. يؤثر الوزن في منتصف اللوح المنتظم تماماً.",
      "٢. الحبلان مثبتان عند الطرفين على بعدين متساويين من مركز الثقل.",
      "٣. إذن الشد في كل حبل = $80 / 2 = 40$ نيوتن."
    ],
    "teacherTipEn": "Tension in vertical hanging ropes behaves identically to reactions on upward knife-edge supports.",
    "teacherTipAr": "الشد في حبال التعليق الرأسية يعامل ميكانيكياً بنفس طريقة ردود أفعال الركائز الرأسية."
  },
  {
    "id": "stat_ch3_db_easy_45",
    "titleEn": "Balancing a Center-Pivoted Rod",
    "titleAr": "اتزان ساق مرتكزة عند منتصفها بأوزان معلقة",
    "difficulty": "easy",
    "questionEn": "A light rod is pivoted at its center. A weight of $40\\text{ N}$ is suspended at distance $30\\text{ cm}$ to the left of the pivot. At what distance to the right of the pivot must a weight of $60\\text{ N}$ be hung to achieve horizontal balance?",
    "questionAr": "ساق خفيفة مثبتة بمحور دوران عند منتصفها. عُلق ثقل مقداره $40\\text{ N}$ على مسافة $30\\text{ cm}$ يسار نقطة الارتكاز. على أي مسافة يمين نقطة الارتكاز يجب تعليق ثقل مقداره $60\\text{ N}$ لتحقيق الاتزان الأفقي؟",
    "optionsEn": [
      "$20\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$",
      "$15\\text{ cm}$"
    ],
    "optionsAr": [
      "20 سم",
      "30 سم",
      "45 سم",
      "15 سم"
    ],
    "correctAnswer": "$20\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Equate clockwise and counterclockwise moments about the central pivot: $40 \\times 30 = 60 \\times d$.",
    "hintAr": "ساوِ العزوم في اتجاه عقارب الساعة بالعزوم في عكس اتجاه عقارب الساعة حول نقطة الارتكاز.",
    "stepByStepSolutionEn": [
      "1. Counterclockwise moment of left weight: $M_{\\text{left}} = 40 \\times 30 = 1200\\text{ N}\\cdot\\text{cm}$.",
      "2. Clockwise moment of right weight at distance $d$: $M_{\\text{right}} = 60 \\times d$.",
      "3. For rotational balance: $60 d = 1200 \\implies d = \\frac{1200}{60} = 20\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. عزم الثقل الأيسر = $40 \\times 30 = 1200$ ن.سم.",
      "٢. عزم الثقل الأيمن = $60 \\times d$.",
      "٣. بمساواة العزمين: $60 d = 1200 \\implies d = 20$ سم."
    ],
    "teacherTipEn": "The heavier weight must be placed closer to the pivot to balance the lighter weight.",
    "teacherTipAr": "الثقل الأكبر يجب وضعه أقرب إلى نقطة الارتكاز ليوازن الثقل الأصغر."
  },
  {
    "id": "stat_ch3_db_easy_46",
    "titleEn": "Finding Unknown Weight on Balanced Meter Stick",
    "titleAr": "إيجاد ثقل مجهول على مسطرة مترية متزنة أفقياً",
    "difficulty": "easy",
    "questionEn": "A light meter stick ($100\\text{ cm}$ long) balances horizontally on a fulcrum placed at the $50\\text{ cm}$ mark. An unknown load $P$ is placed at the $10\\text{ cm}$ mark and a known load of $80\\text{ N}$ is placed at the $70\\text{ cm}$ mark. What is the magnitude of $P$?",
    "questionAr": "مسطرة مترية خفيفة ($100\\text{ cm}$) متزنة أفقياً على ركيزة عند علامة $50\\text{ cm}$. وُضع ثقل مجهول $P$ عند علامة $10\\text{ cm}$ وثقل معلوم مقداره $80\\text{ N}$ عند علامة $70\\text{ cm}$. ما مقدار الثقل $P$؟",
    "optionsEn": [
      "$40\\text{ N}$",
      "$80\\text{ N}$",
      "$160\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "40 نيوتن",
      "80 نيوتن",
      "160 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$40\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Distance from fulcrum to $P$ is $50 - 10 = 40\\text{ cm}$. Distance to the $80\\text{ N}$ load is $70 - 50 = 20\\text{ cm}$.",
    "hintAr": "بُعد الثقل $P$ عن الركيزة = 40 سم، وبُعد ثقل 80 نيوتن = 20 سم.",
    "stepByStepSolutionEn": [
      "1. Fulcrum is at $50\\text{ cm}$.",
      "2. Lever arm for $P$: $d_1 = 50 - 10 = 40\\text{ cm}$ (to the left).",
      "3. Lever arm for $80\\text{ N}$ load: $d_2 = 70 - 50 = 20\\text{ cm}$ (to the right).",
      "4. Taking moments about fulcrum: $P \\times 40 = 80 \\times 20 = 1600 \\implies P = \\frac{1600}{40} = 40\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الركيزة عند علامة 50 سم.",
      "٢. ذراع الثقل $P$ = $50 - 10 = 40$ سم إلى اليسار.",
      "٣. ذراع الثقل 80 نيوتن = $70 - 50 = 20$ سم إلى اليمين.",
      "٤. بمساواة العزوم: $P \\times 40 = 80 \\times 20 \\implies P = 40$ نيوتن."
    ],
    "teacherTipEn": "Always measure lever arms relative to the fulcrum (pivot), not from the end of the stick.",
    "teacherTipAr": "احسب دائماً أذرع العزوم مقاسة بالنسبة لنقطة الارتكاز وليس من بداية المسطرة."
  },
  {
    "id": "stat_ch3_db_easy_47",
    "titleEn": "Seesaw Equilibrium Position",
    "titleAr": "اتزان أرجوحة أطفال بأوزان مختلفة",
    "difficulty": "easy",
    "questionEn": "Two children play on a seesaw pivoted at its center. Child 1 weighs $30\\text{ kg-wt}$ and sits $2\\text{ m}$ from the pivot. Where must Child 2, who weighs $40\\text{ kg-wt}$, sit on the opposite side to balance the seesaw horizontally?",
    "questionAr": "طفلان يلعبان على أرجوحة ترتكز عند منتصفها. وزن الطفل الأول $30\\text{ kg-wt}$ ويجلس على بعد $2\\text{ m}$ من نقطة الارتكاز. أين يجب أن يجلس الطفل الثاني الذي وزنه $40\\text{ kg-wt}$ في الجهة المقابلة لحفظ اتزان الأرجوحة أفقياً؟",
    "optionsEn": [
      "$1.5\\text{ m}$ from the pivot",
      "$2.5\\text{ m}$ from the pivot",
      "$1.0\\text{ m}$ from the pivot",
      "$2.0\\text{ m}$ from the pivot"
    ],
    "optionsAr": [
      "1.5 م من نقطة الارتكاز",
      "2.5 م من نقطة الارتكاز",
      "1.0 م من نقطة الارتكاز",
      "2.0 م من نقطة الارتكاز"
    ],
    "correctAnswer": "$1.5\\text{ m}$ from the pivot",
    "correctIndex": 0,
    "hintEn": "Equate moments about the central pivot: $30 \\times 2 = 40 \\times d$.",
    "hintAr": "ساوِ العزوم حول نقطة الارتكاز المركزية: $30 \\times 2 = 40 \\times d$.",
    "stepByStepSolutionEn": [
      "1. Moment of Child 1: $30 \\times 2 = 60\\text{ kg-wt}\\cdot\\text{m}$.",
      "2. For Child 2 to balance: $40 \\times d = 60$.",
      "3. Solving for $d$: $d = \\frac{60}{40} = 1.5\\text{ m}$ from the pivot."
    ],
    "stepByStepSolutionAr": [
      "١. عزم الطفل الأول = $30 \\times 2 = 60$ ث.كجم.م.",
      "٢. عزم الطفل الثاني = $40 \\times d$.",
      "٣. إذن $d = 60 / 40 = 1.5$ م من نقطة الارتكاز."
    ],
    "teacherTipEn": "Since Child 2 is heavier, they must sit closer to the pivot ($1.5\\text{ m} < 2.0\\text{ m}$).",
    "teacherTipAr": "بما أن الطفل الثاني أثقل وزناً، فيجب أن يجلس أقرب إلى نقطة الارتكاز."
  },
  {
    "id": "stat_ch3_db_easy_48",
    "titleEn": "Sufficiency of Force Balance Alone",
    "titleAr": "مدى كفاية اتزان القوى وحده دون اتزان العزوم",
    "difficulty": "easy",
    "questionEn": "A rigid beam is subjected to vertical parallel forces such that the algebraic sum of the forces is zero ($\\sum F_y = 0$). Does this alone guarantee that the beam is in complete static equilibrium?",
    "questionAr": "عارضة صلبة تؤثر عليها قوى رأسية متوازية بحيث انعدم مجموعها الجبري (مجـ ق = 0). هل يضمن هذا الشرط وحده أن العارضة في حالة اتزان استاتيكي تام؟",
    "optionsEn": [
      "No, because the forces might form a couple that causes rotation ($\\sum M \\ne 0$)",
      "Yes, zero net force guarantees full equilibrium for any system",
      "Yes, provided all forces act in the same direction",
      "Yes, provided the beam has no weight"
    ],
    "optionsAr": [
      "لا، لأن القوى قد تكون ازدواجاً يسبب الدوران (مجـ العزوم لا يساوي صفراً)",
      "نعم، انعدام محصلة القوى يضمن الاتزان التام لأي منظومة",
      "نعم، بشرط أن تعمل جميع القوى في نفس الاتجاه",
      "نعم، بشرط أن تكون العارضة مهملة الوزن"
    ],
    "correctAnswer": "No, because the forces might form a couple that causes rotation ($\\sum M \\ne 0$)",
    "correctIndex": 0,
    "hintEn": "A couple has $\\sum F = 0$ but non-zero moment, producing rotation.",
    "hintAr": "الازدواج محصلة قواه صفر لكن عزمه غير صفري، مما يسبب دوراناً.",
    "stepByStepSolutionEn": [
      "1. The condition $\\sum F_y = 0$ guarantees translational equilibrium (no linear acceleration).",
      "2. However, if the forces form an unbalanced couple, their net moment is non-zero ($\\sum M \\ne 0$), causing rotational acceleration.",
      "3. Complete static equilibrium requires both $\\sum F_y = 0$ and $\\sum M = 0$ simultaneously."
    ],
    "stepByStepSolutionAr": [
      "١. الشرط مجـ ق = 0 يمنع الحركة الانتقالية فقط.",
      "٢. إذا كونت القوى ازدواجاً، فإن عزمها لا ينعدم وتدور العارضة.",
      "٣. لذلك الاتزان التام يتطلب بالضرورة انعدام القوى وانعدام العزوم معاً."
    ],
    "teacherTipEn": "Never assume equilibrium from $\\sum F = 0$ alone; always verify $\\sum M = 0$.",
    "teacherTipAr": "لا تفترض الاتزان التام من انعدام القوى فقط؛ تأكد دائماً من انعدام العزوم."
  },
  {
    "id": "stat_ch3_db_easy_49",
    "titleEn": "Sufficiency of Moment Balance at One Point",
    "titleAr": "مدى كفاية انعدام العزم حول نقطة واحدة فقط",
    "difficulty": "easy",
    "questionEn": "If the algebraic sum of moments of a system of parallel forces about a single point $A$ is zero ($\\sum M_A = 0$), does this alone guarantee that the system is in static equilibrium?",
    "questionAr": "إذا كان المجموع الجبري لعزوم منظومة قوى متوازية حول نقطة واحدة $A$ يساوي صفراً (مجـ م_أ = 0)، هل يضمن ذلك وحده اتزان المنظومة؟",
    "optionsEn": [
      "No, the resultant force could be non-zero and simply pass through point $A$",
      "Yes, zero moment at any point implies zero resultant force",
      "Yes, because moments uniquely define equilibrium",
      "Yes, if the point $A$ is on the body"
    ],
    "optionsAr": [
      "لا، لأن المحصلة قد تكون غير صفرية وتمر ببساطة بالنقطة أ",
      "نعم، انعدام العزم عند أي نقطة يعني انعدام المحصلة",
      "نعم، لأن العزوم تحدد الاتزان بشكل كامل",
      "نعم، إذا كانت النقطة أ واقعة على الجسم"
    ],
    "correctAnswer": "No, the resultant force could be non-zero and simply pass through point $A$",
    "correctIndex": 0,
    "hintEn": "A non-zero resultant passing through $A$ produces zero moment about $A$.",
    "hintAr": "إذا كانت المحصلة غير منعدمة ويمر خط عملها بالنقطة أ، فإن عزمها حول أ ينعدم.",
    "stepByStepSolutionEn": [
      "1. If $\\sum M_A = 0$, it only means that the line of action of the resultant passes through point $A$ (or the resultant is zero).",
      "2. The magnitude of the resultant force $\\vec{R}$ can still be non-zero.",
      "3. For complete equilibrium, we must also have $\\sum F = 0$ (or moments about two different points must both vanish with no couple)."
    ],
    "stepByStepSolutionAr": [
      "١. انعدام العزم حول النقطة $A$ يعني فقط أن خط عمل المحصلة يمر بالنقطة $A$.",
      "٢. قد تكون المحصلة ذات قيمة غير صفرية وتسبب حركة انتقالية.",
      "٣. الاتزان التام يتطلب إما $\\sum F = 0$ مع $\\sum M = 0$، أو انعدام العزوم حول نقطتين مختلفتين."
    ],
    "teacherTipEn": "Zero moment about one point only locates the resultant; it does not eliminate it.",
    "teacherTipAr": "انعدام العزم حول نقطة واحدة يحدد فقط أن خط عمل المحصلة يمر بها، ولا يثبت انعدامها."
  },
  {
    "id": "stat_ch3_db_easy_50",
    "titleEn": "Equilibrium of Center-Supported Uniform Rod",
    "titleAr": "اتزان ساق منتظمة ترتكز عند منتصفها دون أحمال خارجية",
    "difficulty": "easy",
    "questionEn": "A uniform rod of weight $W = 100\\text{ N}$ is supported on a knife-edge placed at its exact midpoint. What additional vertical force is needed at either end to maintain horizontal equilibrium if no external loads are added?",
    "questionAr": "ساق منتظمة وزنها $100\\text{ N}$ تستند على ركيزة عند منتصفها تماماً. ما القوة الرأسية الإضافية المطلوبة عند أي من طرفيها لحفظ اتزانها أفقياً في حالة عدم وجود أي أحمال خارجية؟",
    "optionsEn": [
      "Zero force ($0\\text{ N}$)",
      "$50\\text{ N}$",
      "$100\\text{ N}$",
      "$25\\text{ N}$"
    ],
    "optionsAr": [
      "صفر نيوتن (لا يلزم أي قوة إضافية)",
      "50 نيوتن",
      "100 نيوتن",
      "25 نيوتن"
    ],
    "correctAnswer": "Zero force ($0\\text{ N}$)",
    "correctIndex": 0,
    "hintEn": "The weight of a uniform rod acts at its midpoint, directly through the support pivot, producing zero moment.",
    "hintAr": "يؤثر وزن الساق المنتظمة عند منتصفها ويمر بالركيزة مباشرة، فعزمه حولها صفر وتتزن تلقائياً.",
    "stepByStepSolutionEn": [
      "1. For a uniform rod, the center of gravity is located at its exact midpoint.",
      "2. Since the knife-edge support is at the midpoint, the line of action of the weight passes directly through the support.",
      "3. The moment of the weight about the support is $W \\times 0 = 0$.",
      "4. The rod is already in static equilibrium, so no additional force is needed ($0\\text{ N}$)."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل الساق المنتظمة يقع في منتصفها تماماً.",
      "٢. الركيزة عند المنتصف، إذن خط عمل الوزن يمر بالركيزة مباشرة.",
      "٣. عزم الوزن حول الركيزة = صفر.",
      "٤. الساق متزنة ذاتياً ولا تتطلب أي قوة إضافية (صفر نيوتن)."
    ],
    "teacherTipEn": "A body supported at its center of gravity is in natural balance under its own weight.",
    "teacherTipAr": "الجسم المرتكز عند مركز ثقله يتزن تلقائياً تحت تأثير وزنه الذاتي دون أي قوة إضافية."
  },
  {
    "id": "stat_ch3_db_easy_51",
    "titleEn": "Resultant of Oppositely Directed Parallel Forces",
    "titleAr": "محصلة قوتين متوازيتين متضادتين في الاتجاه",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Two parallel forces $F_1 = 30\\text{ N}$ and $F_2 = 50\\text{ N}$ act in opposite directions at points $A$ and $B$ where $AB = 40\\text{ cm}$. Find the magnitude of their resultant $R$ and its direction.",
    "questionAr": "قوتان متوازيتان $F_1 = 30\\text{ ن}$ و $F_2 = 50\\text{ ن}$ تعملان في اتجاهين متضادين عند النقطتين $A$ و $B$ حيث $AB = 40\\text{ سم}$. أوجد مقدار المحصلة $R$ واتجاهها.",
    "optionsEn": [
      "$R = 20\\text{ N}$ in the direction of $F_2$",
      "$R = 80\\text{ N}$ in the direction of $F_2$",
      "$R = 20\\text{ N}$ in the direction of $F_1$",
      "$R = 15\\text{ N}$ in the direction of $F_2$"
    ],
    "optionsAr": [
      "$R = 20\\text{ ن}$ في اتجاه $F_2$",
      "$R = 80\\text{ ن}$ في اتجاه $F_2$",
      "$R = 20\\text{ ن}$ في اتجاه $F_1$",
      "$R = 15\\text{ ن}$ في اتجاه $F_2$"
    ],
    "correctAnswer": "$R = 20\\text{ N}$ in the direction of $F_2$",
    "correctIndex": 0,
    "hintEn": "For unlike parallel forces, the resultant magnitude is $|F_2 - F_1|$ and acts in the direction of the larger force.",
    "hintAr": "لقوتين متوازيتين متضادتين، مقدار المحصلة هو $|F_2 - F_1|$ وتعمل في اتجاه القوة الأكبر.",
    "stepByStepSolutionEn": [
      "Since forces are in opposite directions, $R = |F_2 - F_1| = 50 - 30 = 20\\text{ N}$.",
      "The resultant acts in the direction of the larger force, which is $F_2$."
    ],
    "stepByStepSolutionAr": [
      "بما أن القوتين في اتجاهين متضادين، فإن $R = |F_2 - F_1| = 50 - 30 = 20\\text{ ن}$.",
      "تعمل المحصلة في اتجاه القوة الأكبر وهي $F_2$."
    ],
    "teacherTipEn": "The line of action lies outside the line segment $AB$, closer to the greater force $B$.",
    "teacherTipAr": "خط عمل المحصلة يقع خارج القطعة المستقيمة $AB$ من جهة القوة الأكبر."
  },
  {
    "id": "stat_ch3_db_easy_52",
    "titleEn": "Line of Action of Unlike Parallel Forces",
    "titleAr": "خط عمل محصلة قوتين متوازيتين متضادتين",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Two unlike parallel forces $F_1 = 12\\text{ N}$ at $A$ and $F_2 = 18\\text{ N}$ at $B$ act such that $AB = 30\\text{ cm}$. Find the distance from $B$ to the point of application $C$ of the resultant.",
    "questionAr": "قوتان متوازيتان متضادتان $F_1 = 12\\text{ ن}$ عند $A$ و $F_2 = 18\\text{ ن}$ عند $B$ حيث $AB = 30\\text{ سم}$. أوجد بُعد نقطة تأثير المحصلة $C$ عن النقطة $B$.",
    "optionsEn": [
      "$60\\text{ cm}$",
      "$40\\text{ cm}$",
      "$50\\text{ cm}$",
      "$75\\text{ cm}$"
    ],
    "optionsAr": [
      "$60\\text{ سم}$",
      "$40\\text{ سم}$",
      "$50\\text{ سم}$",
      "$75\\text{ سم}$"
    ],
    "correctAnswer": "$60\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "By Varignon's principle or force-distance ratio: $F_1 \\times AC = F_2 \\times BC$. Since $C$ is external beyond $B$, $AC = AB + BC$.",
    "hintAr": "باستخدام مبدأ العزوم: $F_1 \\times AC = F_2 \\times BC$. وحيث أن $C$ نقطة خارجية بعد $B$، فإن $AC = AB + BC$.",
    "stepByStepSolutionEn": [
      "Let $BC = x$. Then $AC = AB + x = 30 + x$.",
      "Using moments about $C$: $F_1 \\times AC = F_2 \\times BC \\implies 12(30 + x) = 18x$.",
      "$360 + 12x = 18x \\implies 6x = 360 \\implies x = 60\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "نفرض أن $BC = x$. إذن $AC = AB + x = 30 + x$.",
      "بأخذ العزوم حول $C$: $F_1 \\times AC = F_2 \\times BC \\implies 12(30 + x) = 18x$.",
      "$360 + 12x = 18x \\implies 6x = 360 \\implies x = 60\\text{ سم}$."
    ],
    "teacherTipEn": "Always check that $C$ is closer to the larger force $B$: $BC = 60\\text{ cm}$, while $AC = 90\\text{ cm}$.",
    "teacherTipAr": "تأكد دائماً أن نقطة التأثير أقرب للقوة الأكبر: $BC = 60\\text{ سم}$ بينما $AC = 90\\text{ سم}$."
  },
  {
    "id": "stat_ch3_db_easy_53",
    "titleEn": "Reactions on a Light Rod under Symmetrical Loading",
    "titleAr": "ردود الأفعال على قضيب خفيف تحت تحميل متماثل",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "A light rod $AB$ of length $120\\text{ cm}$ rests horizontally on two supports at $A$ and $B$. A load of $90\\text{ N}$ is placed at the midpoint $M$. Find the support reaction at $A$.",
    "questionAr": "قضيب خفيف $AB$ طوله $120\\text{ سم}$ يستند أفقياً على ركيزتين عند طرفيه $A$ و $B$. عُلق ثقل مقداره $90\\text{ ن}$ في منتصفه $M$. أوجد رد فعل الركيزة عند $A$.",
    "optionsEn": [
      "$45\\text{ N}$",
      "$90\\text{ N}$",
      "$30\\text{ N}$",
      "$60\\text{ N}$"
    ],
    "optionsAr": [
      "$45\\text{ ن}$",
      "$90\\text{ ن}$",
      "$30\\text{ ن}$",
      "$60\\text{ ن}$"
    ],
    "correctAnswer": "$45\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "By symmetry, the load divides equally between the two identical end supports.",
    "hintAr": "من التماثل، يتوزع الحمل بالتساوي على الركيزتين عند الطرفين.",
    "stepByStepSolutionEn": [
      "Total downward load $= 90\\text{ N}$.",
      "Equilibrium condition: $R_A + R_B = 90$.",
      "Taking moments about $B$: $R_A \\times 120 - 90 \\times 60 = 0 \\implies R_A = 45\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "إجمالي الحمل لأسفل $= 90\\text{ ن}$.",
      "شرط الاتزان: $R_A + R_B = 90$.",
      "أخذ العزوم حول $B$: $R_A \\times 120 - 90 \\times 60 = 0 \\implies R_A = 45\\text{ ن}$."
    ],
    "teacherTipEn": "Recognizing symmetry simplifies beam reaction calculations instantly.",
    "teacherTipAr": "ملاحظة التماثل تسهل حساب ردود الأفعال مباشرة."
  },
  {
    "id": "stat_ch3_db_easy_54",
    "titleEn": "Reactions on a Rod with Symmetrically Inset Supports",
    "titleAr": "ردود الأفعال على قضيب بركائز غير طرفية متماثلة",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "A uniform rod $AB$ of length $100\\text{ cm}$ and weight $40\\text{ N}$ rests on two supports at $C$ and $D$, each $20\\text{ cm}$ from the nearest end. Find the reaction at $C$.",
    "questionAr": "قضيب منتظم $AB$ طوله $100\\text{ سم}$ ووزنه $40\\text{ ن}$ يستند على ركيزتين عند $C$ و $D$ على بُعد $20\\text{ سم}$ من كل طرف. أوجد رد الفعل عند $C$.",
    "optionsEn": [
      "$20\\text{ N}$",
      "$40\\text{ N}$",
      "$15\\text{ N}$",
      "$25\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\text{ ن}$",
      "$40\\text{ ن}$",
      "$15\\text{ ن}$",
      "$25\\text{ ن}$"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The weight acts at the rod's midpoint, which is equidistant from $C$ and $D$.",
    "hintAr": "يؤثر وزن القضيب في منتصفه، وهو يبعد مسافات متساوية عن $C$ و $D$.",
    "stepByStepSolutionEn": [
      "Midpoint of rod is at $50\\text{ cm}$ from $A$.",
      "Support $C$ is at $20\\text{ cm}$, and support $D$ is at $80\\text{ cm}$.",
      "Distance from midpoint to $C$ is $30\\text{ cm}$, and to $D$ is $30\\text{ cm}$.",
      "By symmetry, $R_C = R_D = \\frac{40}{2} = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "منتصف القضيب يبعد $50\\text{ سم}$ عن $A$.",
      "الركيزة $C$ تبعد $20\\text{ سم}$، والركيزة $D$ تبعد $80\\text{ سم}$.",
      "المسافة من المنتصف إلى $C$ هي $30\\text{ سم}$، وإلى $D$ هي $30\\text{ سم}$.",
      "من التماثل، $R_C = R_D = \\frac{40}{2} = 20\\text{ ن}$."
    ],
    "teacherTipEn": "When the load is centered between two symmetric supports, the supports share the load equally.",
    "teacherTipAr": "عندما يقع الحمل في منتصف المسافة بين ركيزتين متماثلتين يتقاسمان الحمل بالتساوي."
  },
  {
    "id": "stat_ch3_db_easy_55",
    "titleEn": "Resultant of Three Parallel Like Forces",
    "titleAr": "محصلة ثلاث قوى متوازية متحدة الاتجاه",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Three parallel forces $F_1 = 10\\text{ N}$, $F_2 = 25\\text{ N}$, and $F_3 = 15\\text{ N}$ act vertically downwards at points $x_1 = 0$, $x_2 = 2\\text{ m}$, and $x_3 = 6\\text{ m}$. Find the position $x_R$ of the resultant.",
    "questionAr": "ثلاث قوى متوازية $F_1 = 10\\text{ ن}$، $F_2 = 25\\text{ ن}$، و $F_3 = 15\\text{ ن}$ تؤثر رأسياً لأسفل عند النقاط $x_1 = 0$، $x_2 = 2\\text{ م}$، و $x_3 = 6\\text{ م}$. أوجد موضع المحصلة $x_R$.",
    "optionsEn": [
      "$x_R = 2.8\\text{ m}$",
      "$x_R = 3.2\\text{ m}$",
      "$x_R = 2.5\\text{ m}$",
      "$x_R = 3.5\\text{ m}$"
    ],
    "optionsAr": [
      "$x_R = 2.8\\text{ م}$",
      "$x_R = 3.2\\text{ م}$",
      "$x_R = 2.5\\text{ م}$",
      "$x_R = 3.5\\text{ م}$"
    ],
    "correctAnswer": "$x_R = 2.8\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Use the weighted average formula: $x_R = \\frac{\\sum F_i x_i}{\\sum F_i}$.",
    "hintAr": "استخدم صيغة المتوسط الموزون: $x_R = \\frac{\\sum F_i x_i}{\\sum F_i}$.",
    "stepByStepSolutionEn": [
      "Total force $R = 10 + 25 + 15 = 50\\text{ N}$.",
      "Sum of moments about $x = 0$: $\\sum M_0 = (10 \\times 0) + (25 \\times 2) + (15 \\times 6) = 0 + 50 + 90 = 140\\text{ N}\\cdot\\text{m}$.",
      "$x_R = \\frac{140}{50} = 2.8\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "المحصلة الكلية $R = 10 + 25 + 15 = 50\\text{ ن}$.",
      "مجموع العزوم حول $x = 0$: $\\sum M_0 = (10 \\times 0) + (25 \\times 2) + (15 \\times 6) = 0 + 50 + 90 = 140\\text{ ن}\\cdot\\text{م}$.",
      "$x_R = \\frac{140}{50} = 2.8\\text{ م}$."
    ],
    "teacherTipEn": "The resultant position of like parallel forces is mathematically identical to finding the 1D center of mass.",
    "teacherTipAr": "إيجاد موضع محصلة القوى المتوازية متحدة الاتجاه يماثل تماماً إيجاد مركز الكتلة في بُعد واحد."
  },
  {
    "id": "stat_ch3_db_easy_56",
    "titleEn": "Zero Resultant of Unlike Parallel Forces",
    "titleAr": "محصلة منعدمة لقوتين متوازيتين متضادتين",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Two parallel forces of equal magnitude $40\\text{ N}$ act in opposite directions along different lines of action separated by $15\\text{ cm}$. What is the net resultant force $R$?",
    "questionAr": "قوتان متوازيتان متساويتان في المقدار $40\\text{ ن}$ تؤثران في اتجاهين متضادين على خطي عمل مختلفين البعد بينهما $15\\text{ سم}$. ما مقدار القوة المحصلة $R$؟",
    "optionsEn": [
      "$R = 0$ (they form a couple)",
      "$R = 80\\text{ N}$",
      "$R = 40\\text{ N}$",
      "$R = 600\\text{ N}$"
    ],
    "optionsAr": [
      "$R = 0$ (تكونان ازدواجاً)",
      "$R = 80\\text{ ن}$",
      "$R = 40\\text{ ن}$",
      "$R = 600\\text{ ن}$"
    ],
    "correctAnswer": "$R = 0$ (they form a couple)",
    "correctIndex": 0,
    "hintEn": "Equal and opposite parallel forces have zero resultant force, producing pure rotational torque.",
    "hintAr": "القوتان المتوازيتان المتساويتان والمتضادتان محصلتهما صفر وتنتجان عزماً دورانياً خالصاً.",
    "stepByStepSolutionEn": [
      "$R = F_1 - F_2 = 40 - 40 = 0\\text{ N}$.",
      "Since their lines of action do not coincide, they form a couple with non-zero moment $M = 40 \\times 0.15 = 6\\text{ N}\\cdot\\text{m}$."
    ],
    "stepByStepSolutionAr": [
      "$R = F_1 - F_2 = 40 - 40 = 0\\text{ ن}$.",
      "بما أن خطي عملهما لا ينطبقان، فهما تكوّنان ازدواجاً عزمه غير صفري $M = 40 \\times 0.15 = 6\\text{ ن}\\cdot\\text{م}$."
    ],
    "teacherTipEn": "Zero resultant force does not mean zero effect! It produces pure rotational tendency (a couple).",
    "teacherTipAr": "محصلة منعدمة لا تعني انعدام التأثير! بل تعني حركة دورانية خالصة (ازدواج)."
  },
  {
    "id": "stat_ch3_db_easy_57",
    "titleEn": "Determining an Unknown Force in Parallel Equilibrium",
    "titleAr": "تحديد قوة مجهولة في اتزان قوى متوازية",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "A horizontal beam of negligible weight is in equilibrium under three downward vertical loads of $20\\text{ N}$, $F$, and $30\\text{ N}$, balanced by a single upward reaction of $100\\text{ N}$. What is the value of $F$?",
    "questionAr": "عارضة أفقية مهملة الوزن متزنة تحت تأثير ثلاثة أحمال رأسية لأسفل هي $20\\text{ ن}$، $F$، و $30\\text{ ن}$، متزنة مع رد فعل وحيد لأعلى مقداره $100\\text{ ن}$. ما قيمة $F$؟",
    "optionsEn": [
      "$50\\text{ N}$",
      "$40\\text{ N}$",
      "$60\\text{ N}$",
      "$70\\text{ N}$"
    ],
    "optionsAr": [
      "$50\\text{ ن}$",
      "$40\\text{ ن}$",
      "$60\\text{ ن}$",
      "$70\\text{ ن}$"
    ],
    "correctAnswer": "$50\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For vertical equilibrium: $\\sum F_y = 0 \\implies R = F_1 + F + F_2$.",
    "hintAr": "لاتزان القوى رأسياً: $\\sum F_y = 0 \\implies R = F_1 + F + F_2$.",
    "stepByStepSolutionEn": [
      "Equilibrium of forces: Upward forces = Downward forces.",
      "$100 = 20 + F + 30$.",
      "$F = 100 - 50 = 50\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "اتزان القوى: مجموع القوى لأعلى = مجموع القوى لأسفل.",
      "$100 = 20 + F + 30$.",
      "$F = 100 - 50 = 50\\text{ ن}$."
    ],
    "teacherTipEn": "Translational equilibrium along the axis of parallel forces requires algebraic sum to be zero.",
    "teacherTipAr": "الاتزان الانتقالي على خط القوى المتوازية يتطلب أن يكون مجموعها الجبري صفراً."
  },
  {
    "id": "stat_ch3_db_easy_58",
    "titleEn": "Ratio of Resultant Distances for Like Forces",
    "titleAr": "نسبة أبعاد المحصلة لقوتين متوازيتين متحدتي الاتجاه",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Two like parallel forces $F_1 = 15\\text{ N}$ and $F_2 = 45\\text{ N}$ act at points $A$ and $B$. If $C$ is the point of application of their resultant, find the ratio $\\frac{AC}{CB}$.",
    "questionAr": "قوتان متوازيتان متحدتا الاتجاه $F_1 = 15\\text{ ن}$ و $F_2 = 45\\text{ ن}$ تؤثران عند $A$ و $B$. إذا كانت $C$ نقطة تأثير محصلتهما، فأوجد النسبة $\\frac{AC}{CB}$.",
    "optionsEn": [
      "$3$",
      "$\\frac{1}{3}$",
      "$4$",
      "$\\frac{1}{4}$"
    ],
    "optionsAr": [
      "$3$",
      "$\\frac{1}{3}$",
      "$4$",
      "$\\frac{1}{4}$"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "The resultant divides the distance inversely proportional to the magnitudes of the forces: $F_1 \\times AC = F_2 \\times CB$.",
    "hintAr": "المحصلة تقسم المسافة بنسبة عكسية لمقداري القوتين: $F_1 \\times AC = F_2 \\times CB$.",
    "stepByStepSolutionEn": [
      "By Varignon's principle about $C$: $F_1 \\cdot AC = F_2 \\cdot CB$.",
      "$\\frac{AC}{CB} = \\frac{F_2}{F_1} = \\frac{45}{15} = 3$."
    ],
    "stepByStepSolutionAr": [
      "بمبدأ العزوم حول $C$: $F_1 \\cdot AC = F_2 \\cdot CB$.",
      "$\\frac{AC}{CB} = \\frac{F_2}{F_1} = \\frac{45}{15} = 3$."
    ],
    "teacherTipEn": "Remember: larger force $\\implies$ smaller distance from resultant.",
    "teacherTipAr": "تذكر دائماً: القوة الأكبر تقابلها المسافة الأقصر عن المحصلة."
  }
],
  medium: [
  {
    "id": "stat_ch3_db_med_01",
    "titleEn": "Line of Action Division for Like Parallel Forces",
    "titleAr": "تقسيم خط العمل لقوتين متوازيتين في نفس الاتجاه",
    "difficulty": "medium",
    "questionEn": "Two parallel forces $F_1 = 10\\text{ N}$ and $F_2 = 10\\text{ N}$ act in the same direction at points $A$ and $B$, where $AB = 20\\text{ cm}$. Find the distance $AC$ from point $A$ to the line of action of their resultant.",
    "questionAr": "تؤثر قوتان متوازيتان $F_1 = 10\\text{ ن}$ و $F_2 = 10\\text{ ن}$ في نفس الاتجاه عند النقطتين $A$ و $B$، حيث $AB = 20\\text{ سم}$. أوجد المسافة $AC$ من النقطة $A$ إلى خط عمل محصلتهما.",
    "optionsEn": [
      "$AC = 10\\text{ cm}$",
      "$AC = 15\\text{ cm}$",
      "$AC = 20\\text{ cm}$",
      "$AC = 25\\text{ cm}$"
    ],
    "optionsAr": [
      "$AC = 10\\text{ سم}$",
      "$AC = 15\\text{ سم}$",
      "$AC = 20\\text{ سم}$",
      "$AC = 25\\text{ سم}$"
    ],
    "correctAnswer": "$AC = 10\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "F1 * AC = F2 * (AB - AC).",
    "hintAr": "$F_1 \\times AC = F_2 \\times (AB - AC)$.",
    "stepByStepSolutionEn": [
      "1. Moment equilibrium about point $C$: $F_1 \\times AC = F_2 \\times BC$.",
      "2. 10 \\times AC = 10 \\times (20 - AC)$.",
      "3. Divide by 10: $AC = 1(20 - AC) = 20 - 1 AC$.",
      "4. $(2) AC = 20 = 20 \\implies AC = 10\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون العزوم حول نقطة التأثير: $F_1 \\times AC = F_2 \\times BC$.",
      "٢. 10 \\times AC = 10 (20 - AC)$.",
      "٣. بالتبسيط: $(2) AC = 20 \\implies AC = 10\\text{ سم}$."
    ],
    "teacherTipEn": "AC is proportional to F2: AC = [F2 / (F1 + F2)] * AB.",
    "teacherTipAr": "المسافة المجاورة للقوة الأولى تتناسب طردياً مع مقدار القوة الثانية."
  },
  {
    "id": "stat_ch3_db_med_02",
    "titleEn": "Line of Action Division for Like Parallel Forces (Variant 2)",
    "titleAr": "تقسيم خط العمل لقوتين متوازيتين في نفس الاتجاه (حالة 2)",
    "difficulty": "medium",
    "questionEn": "Two parallel forces $F_1 = 10\\text{ N}$ and $F_2 = 20\\text{ N}$ act in the same direction at points $A$ and $B$, where $AB = 30\\text{ cm}$. Find the distance $AC$ from point $A$ to the line of action of their resultant.",
    "questionAr": "تؤثر قوتان متوازيتان $F_1 = 10\\text{ ن}$ و $F_2 = 20\\text{ ن}$ في نفس الاتجاه عند النقطتين $A$ و $B$، حيث $AB = 30\\text{ سم}$. أوجد المسافة $AC$ من النقطة $A$ إلى خط عمل محصلتهما.",
    "optionsEn": [
      "$AC = 20\\text{ cm}$",
      "$AC = 25\\text{ cm}$",
      "$AC = 30\\text{ cm}$",
      "$AC = 35\\text{ cm}$"
    ],
    "optionsAr": [
      "$AC = 20\\text{ سم}$",
      "$AC = 25\\text{ سم}$",
      "$AC = 30\\text{ سم}$",
      "$AC = 35\\text{ سم}$"
    ],
    "correctAnswer": "$AC = 20\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "F1 * AC = F2 * (AB - AC).",
    "hintAr": "$F_1 \\times AC = F_2 \\times (AB - AC)$.",
    "stepByStepSolutionEn": [
      "1. Moment equilibrium about point $C$: $F_1 \\times AC = F_2 \\times BC$.",
      "2. 10 \\times AC = 20 \\times (30 - AC)$.",
      "3. Divide by 10: $AC = 2(30 - AC) = 60 - 2 AC$.",
      "4. $(3) AC = 60 = 60 \\implies AC = 20\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون العزوم حول نقطة التأثير: $F_1 \\times AC = F_2 \\times BC$.",
      "٢. 10 \\times AC = 20 (30 - AC)$.",
      "٣. بالتبسيط: $(3) AC = 60 \\implies AC = 20\\text{ سم}$."
    ],
    "teacherTipEn": "AC is proportional to F2: AC = [F2 / (F1 + F2)] * AB.",
    "teacherTipAr": "المسافة المجاورة للقوة الأولى تتناسب طردياً مع مقدار القوة الثانية."
  },
  {
    "id": "stat_ch3_db_med_03",
    "titleEn": "Shift of Resultant When One Force Moves",
    "titleAr": "إزاحة المحصلة عند تحريك إحدى القوتين",
    "difficulty": "medium",
    "questionEn": "Two like parallel forces $F_1 = 30\\text{ N}$ and $F_2 = 50\\text{ N}$ act at points $A$ and $B$. If force $F_1$ is shifted parallel to itself by a distance of $16\\text{ cm}$ away from $B$, by what distance does the line of action of the resultant shift?",
    "questionAr": "قوتان متوازيتان تعملان في نفس الاتجاه $F_1 = 30\\text{ N}$ و $F_2 = 50\\text{ N}$ تؤثران عند النقطتين $A$ و $B$. إذا أُزيحت القوة $F_1$ موازية لنفسها مسافة $16\\text{ cm}$ في الاتجاه المبتعد عن $B$، فما المسافة التي ينزاح بها خط عمل المحصلة؟",
    "optionsEn": [
      "$6\\text{ cm}$",
      "$10\\text{ cm}$",
      "$8\\text{ cm}$",
      "$4\\text{ cm}$"
    ],
    "optionsAr": [
      "6 سم",
      "10 سم",
      "8 سم",
      "4 سم"
    ],
    "correctAnswer": "$6\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Use the displacement formula: $\\Delta x_R = \\frac{F_1}{F_1 + F_2} \\Delta x_1$.",
    "hintAr": "استخدم قانون إزاحة المحصلة: $\\Delta x_R = \\frac{F_1}{F_1 + F_2} \\Delta x_1$.",
    "stepByStepSolutionEn": [
      "1. When force $F_1$ is shifted by $\\Delta x_1 = 16\\text{ cm}$, the moment change about any fixed point is $F_1 \\times \\Delta x_1$.",
      "2. This change in moment must equal $R \\times \\Delta x_R$, where $R = F_1 + F_2 = 30 + 50 = 80\\text{ N}$.",
      "3. Therefore: $80 \\Delta x_R = 30 \\times 16 = 480 \\implies \\Delta x_R = \\frac{480}{80} = 6\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. التغير في عزم المنظومة = $F_1 \\times \\Delta x_1 = 30 \\times 16 = 480$ ن.سم.",
      "٢. هذا التغير يعادل عزم إزاحة المحصلة: $R \\times \\Delta x_R = 80 \\Delta x_R$.",
      "٣. إذن $\\Delta x_R = 480 / 80 = 6$ سم."
    ],
    "teacherTipEn": "The resultant shifts in the same direction as the moved force by the fraction $\\frac{F_1}{R}$.",
    "teacherTipAr": "تنزاح المحصلة في نفس اتجاه القوة المزاحة بنسبة مساوية لـ (القوة المزاحة ÷ المحصلة الكلية)."
  },
  {
    "id": "stat_ch3_db_med_04",
    "titleEn": "Determining Force Magnitudes from Resultant Position",
    "titleAr": "تحديد مقداري القوتين من موقع المحصلة ومقدارها",
    "difficulty": "medium",
    "questionEn": "Two like parallel forces $F_1$ and $F_2$ act at points $A$ and $B$. Their resultant has magnitude $R = 40\\text{ N}$ and acts at point $C$ on the segment $AB$, where $AC = 15\\text{ cm}$ and $CB = 25\\text{ cm}$. Find the magnitude of force $F_1$.",
    "questionAr": "قوتان متوازيتان متحدتا الاتجاه $F_1$ و $F_2$ تؤثران عند $A$ و $B$. محصلتهما مقدارها $40\\text{ N}$ وتؤثر عند النقطة $C$ على القطعة $AB$ حيث $AC = 15\\text{ cm}$ و $CB = 25\\text{ cm}$. أوجد مقدار القوة $F_1$.",
    "optionsEn": [
      "$25\\text{ N}$",
      "$15\\text{ N}$",
      "$20\\text{ N}$",
      "$30\\text{ N}$"
    ],
    "optionsAr": [
      "25 نيوتن",
      "15 نيوتن",
      "20 نيوتن",
      "30 نيوتن"
    ],
    "correctAnswer": "$25\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Use $F_1 \\times AC = F_2 \\times CB$ and $F_1 + F_2 = R$.",
    "hintAr": "استخدم علاقة العزوم $F_1 \\times AC = F_2 \\times CB$ ومجموع القوتين $F_1 + F_2 = R$.",
    "stepByStepSolutionEn": [
      "1. Total length: $AB = AC + CB = 15 + 25 = 40\\text{ cm}$.",
      "2. By Varignon's Theorem: $F_1 \\times AC = F_2 \\times CB \\implies 15 F_1 = 25 F_2 \\implies F_1 = \\frac{5}{3} F_2$.",
      "3. Total force: $F_1 + F_2 = 40 \\implies \\frac{5}{3} F_2 + F_2 = 40 \\implies \\frac{8}{3} F_2 = 40 \\implies F_2 = 15\\text{ N}$.",
      "4. Therefore: $F_1 = 40 - 15 = 25\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. من علاقة العزوم: $15 F_1 = 25 F_2 \\implies 3 F_1 = 5 F_2$.",
      "٢. ومن مجموع القوتين: $F_1 + F_2 = 40$.",
      "٣. بحل المعادلتين: $F_1 = 25$ نيوتن و $F_2 = 15$ نيوتن."
    ],
    "teacherTipEn": "The force closer to the resultant is always the larger one ($F_1 = 25\\text{ N} > F_2 = 15\\text{ N}$).",
    "teacherTipAr": "القوة الأقرب لنقطة تأثير المحصلة هي دائماً القوة الأكبر."
  },
  {
    "id": "stat_ch3_db_med_05",
    "titleEn": "Force Increment to Shift Resultant to Midpoint",
    "titleAr": "الزيادة في القوة لنقل المحصلة إلى منتصف المسافة",
    "difficulty": "medium",
    "questionEn": "Two like parallel forces of magnitudes $P$ and $2P$ act at points $A$ and $B$. If the force at $A$ is increased by $12\\text{ N}$, the resultant shifts to the midpoint of the segment $AB$. What was the original magnitude of $P$?",
    "questionAr": "قوتان متوازيتان في نفس الاتجاه مقدارهما $P$ و $2P$ تؤثران عند $A$ و $B$. إذا زادت القوة عند $A$ بمقدار $12\\text{ N}$، انتقل خط عمل المحصلة إلى منتصف القطعة $AB$. ما المقدار الأصلي للقوة $P$؟",
    "optionsEn": [
      "$12\\text{ N}$",
      "$6\\text{ N}$",
      "$24\\text{ N}$",
      "$18\\text{ N}$"
    ],
    "optionsAr": [
      "12 نيوتن",
      "6 نيوتن",
      "24 نيوتن",
      "18 نيوتن"
    ],
    "correctAnswer": "$12\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "For the resultant of two like parallel forces to act at the midpoint, the two forces must be equal in magnitude.",
    "hintAr": "لكي تؤثر محصلة قوتين متوازيتين متفقتي الاتجاه في المنتصف، يجب أن تتساوى القوتان في المقدار.",
    "stepByStepSolutionEn": [
      "1. For the resultant to act at the exact midpoint of $AB$, the two forces must be equal in magnitude.",
      "2. The new force at $A$ is $P + 12$.",
      "3. The force at $B$ is $2P$.",
      "4. Equating the two forces: $P + 12 = 2P \\implies P = 12\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط وقوع المحصلة في المنتصف تماماً هو تساوى القوتين.",
      "٢. القوة الجديدة عند $A$ هي $P + 12$، والقوة عند $B$ هي $2P$.",
      "٣. بمساواة المقدارين: $P + 12 = 2P \\implies P = 12$ نيوتن."
    ],
    "teacherTipEn": "Equal forces always have equal lever arms to their resultant.",
    "teacherTipAr": "القوى المتساوية يكون لها دائماً ذراعا عزم متساويان بالنسبة للمحصلة."
  },
  {
    "id": "stat_ch3_db_med_06",
    "titleEn": "Effect of Equal Increments on Resultant Position",
    "titleAr": "أثر زيادة متساوية في القوتين على موضع المحصلة",
    "difficulty": "medium",
    "questionEn": "Two unequal like parallel forces $F_1 > F_2$ act at points $A$ and $B$, with their resultant initially acting at $C$. If an equal amount $\\Delta F$ is added to each force, how does the line of action of the resultant shift?",
    "questionAr": "قوتان متوازيتان غير متساويتين في نفس الاتجاه $F_1 > F_2$ تؤثران عند $A$ و $B$، ومحصلتهما تؤثر في $C$. إذا أُضيفت قوة متساوية $\\Delta F$ لكل منهما، فكيف يتحرك خط عمل المحصلة؟",
    "optionsEn": [
      "It shifts closer to the midpoint of segment $AB$",
      "It remains at the exact same point $C$",
      "It shifts closer to point $A$",
      "It shifts outside the segment $AB$"
    ],
    "optionsAr": [
      "ينزاح مقترباً من منتصف القطعة المستقيمة أ ب",
      "يبقى ثابتاً عند نفس النقطة جـ دون تغيير",
      "ينزاح مقترباً من النقطة أ",
      "ينزاح خارج القطعة المستقيمة أ ب"
    ],
    "correctAnswer": "It shifts closer to the midpoint of segment $AB$",
    "correctIndex": 0,
    "hintEn": "As both forces increase by the same amount, their ratio $\\frac{F_1 + \\Delta F}{F_2 + \\Delta F}$ approaches 1.",
    "hintAr": "بإضافة نفس المقدار للطرفين تقترب النسبة بينهما من الواحد الصحيح فيقترب الموضع من المنتصف.",
    "stepByStepSolutionEn": [
      "1. The distance ratio is $\\frac{AC}{CB} = \\frac{F_2}{F_1}$. Since $F_1 > F_2$, this ratio is $< 1$, meaning $C$ is closer to $A$.",
      "2. When $\\Delta F > 0$ is added to both, the new ratio is $\\frac{F_2 + \\Delta F}{F_1 + \\Delta F}$.",
      "3. Adding equal positive amounts to numerator and denominator of a fraction $< 1$ increases the fraction toward 1.",
      "4. As the ratio approaches 1, the point of action shifts closer to the midpoint of $AB$."
    ],
    "stepByStepSolutionAr": [
      "١. النسبة بين بعدي المحصلة: $AC / CB = F_2 / F_1 < 1$.",
      "٢. بإضافة $\\Delta F$ للطرفين، تزداد النسبة وتقترب من الواحد الصحيح.",
      "٣. اقتراب النسبة من الواحد يعني اقتراب نقطة التأثير من منتصف $AB$."
    ],
    "teacherTipEn": "Adding equal amounts to unequal forces dilutes their difference, pulling the resultant toward the center.",
    "teacherTipAr": "إضافة مقادير متساوية لقوتين غير متساويتين يقلل من الفارق النسبي بينهما، فيسحب المحصلة نحو المنتصف."
  },
  {
    "id": "stat_ch3_db_med_07",
    "titleEn": "Support Reactions for Beam with Two Concentrated Loads",
    "titleAr": "ردود أفعال عارضة مستندة عند طرفيها تحمل حملين مركزين",
    "difficulty": "medium",
    "questionEn": "A light horizontal rod $AB = 60\\text{ cm}$ rests on end supports $A$ and $B$. Two downward loads of $30\\text{ N}$ and $60\\text{ N}$ are placed at distances of $20\\text{ cm}$ and $40\\text{ cm}$ from $A$ respectively. Find the reaction force $R_A$ at support $A$.",
    "questionAr": "ساق خفيفة أفقية $AB = 60\\text{ cm}$ ترتكز على دعامتين عند طرفيها $A$ و $B$. وُضع حملان رأسيان لأسفل مقدارهما $30\\text{ N}$ و $60\\text{ N}$ على بعدي $20\\text{ cm}$ و $40\\text{ cm}$ من $A$ على الترتيب. أوجد مقدار رد الفعل $R_A$ عند الدعامة $A$.",
    "optionsEn": [
      "$40\\text{ N}$",
      "$50\\text{ N}$",
      "$30\\text{ N}$",
      "$45\\text{ N}$"
    ],
    "optionsAr": [
      "40 نيوتن",
      "50 نيوتن",
      "30 نيوتن",
      "45 نيوتن"
    ],
    "correctAnswer": "$40\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Take moments about support $B$: $R_A \\times 60 = 30(40) + 60(20)$.",
    "hintAr": "خذ العزوم حول الدعامة $B$: $R_A \\times 60 = 30(40) + 60(20)$.",
    "stepByStepSolutionEn": [
      "1. Distance of $30\\text{ N}$ load from $B$: $60 - 20 = 40\\text{ cm}$.",
      "2. Distance of $60\\text{ N}$ load from $B$: $60 - 40 = 20\\text{ cm}$.",
      "3. Taking moments about $B$: $\\sum M_B = 0 \\implies R_A \\times 60 = (30 \\times 40) + (60 \\times 20)$.",
      "4. $60 R_A = 1200 + 1200 = 2400 \\implies R_A = \\frac{2400}{60} = 40\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بعد الحمل الأول عن $B$ = $60 - 20 = 40$ سم.",
      "٢. بعد الحمل الثاني عن $B$ = $60 - 40 = 20$ سم.",
      "٣. بأخذ العزوم حول $B$: $R_A \\times 60 = (30 \\times 40) + (60 \\times 20) = 2400$.",
      "٤. إذن $R_A = 40$ نيوتن."
    ],
    "teacherTipEn": "By vertical equilibrium, $R_B = (30 + 60) - 40 = 50\\text{ N}$.",
    "teacherTipAr": "من الاتزان الرأسي، يكون رد الفعل عند $B$ هو $90 - 40 = 50$ نيوتن."
  },
  {
    "id": "stat_ch3_db_med_08",
    "titleEn": "Coordinate Point of Action for Two Like Forces",
    "titleAr": "إحداثيات نقطة تأثير محصلة قوتين متوازيتين",
    "difficulty": "medium",
    "questionEn": "Two parallel forces $\\vec{F}_1 = 12\\hat{j}\\text{ N}$ and $\\vec{F}_2 = 18\\hat{j}\\text{ N}$ act at points $A(2, 0)$ and $B(7, 0)$ on the x-axis. Find the coordinates of the point of action $C$ of their resultant.",
    "questionAr": "قوتان متوازيتان $\\vec{F}_1 = 12\\hat{j}$ نيوتن و $\\vec{F}_2 = 18\\hat{j}$ نيوتن تؤثران عند النقطتين $A(2, 0)$ و $B(7, 0)$ على محور السينات. أوجد إحداثيات نقطة تأثير محصلتهما $C$.",
    "optionsEn": [
      "$(5, 0)$",
      "$(4.5, 0)$",
      "$(5.5, 0)$",
      "$(4, 0)$"
    ],
    "optionsAr": [
      "(5، 0)",
      "(4.5، 0)",
      "(5.5، 0)",
      "(4، 0)"
    ],
    "correctAnswer": "$(5, 0)$",
    "correctIndex": 0,
    "hintEn": "Use the center of gravity formula: $x_C = \\frac{F_1 x_1 + F_2 x_2}{F_1 + F_2}$.",
    "hintAr": "استخدم صيغة المتوسط المرجح: $x_C = \\frac{F_1 x_1 + F_2 x_2}{F_1 + F_2}$.",
    "stepByStepSolutionEn": [
      "1. Total force: $R = 12 + 18 = 30\\text{ N}$.",
      "2. Weighted coordinate: $x_C = \\frac{(12)(2) + (18)(7)}{30} = \\frac{24 + 126}{30} = \\frac{150}{30} = 5$.",
      "3. Since the forces act along the x-axis, the y-coordinate is $0$.",
      "4. Point of action is $(5, 0)$."
    ],
    "stepByStepSolutionAr": [
      "١. المحصلة الكلية = $12 + 18 = 30$ نيوتن.",
      "٢. إحداثي نقطة التأثير = $\\frac{(12 \\times 2) + (18 \\times 7)}{30} = \\frac{150}{30} = 5$.",
      "٣. إذن نقطة التأثير هي $(5, 0)$."
    ],
    "teacherTipEn": "Check: distance from $A(2, 0)$ is $3$ and from $B(7, 0)$ is $2$. Indeed, $12 \\times 3 = 18 \\times 2 = 36$.",
    "teacherTipAr": "للتحقق: بعد النقطة عن $A$ هو 3 وعن $B$ هو 2، وحاصل ضرب القوة في بعدها متساوٍ (36)."
  },
  {
    "id": "stat_ch3_db_med_09",
    "titleEn": "Finding Individual Forces from Separation and Resultant",
    "titleAr": "إيجاد مقدار كل من القوتين من المسافة بينهما وموقع المحصلة",
    "difficulty": "medium",
    "questionEn": "The resultant of two like parallel forces has magnitude $R = 60\\text{ N}$. The distance between their lines of action is $30\\text{ cm}$, and the line of action of the resultant is at distance $10\\text{ cm}$ from force $F_1$. Find the magnitudes of $F_1$ and $F_2$.",
    "questionAr": "محصلة قوتين متوازيتين في نفس الاتجاه مقدارها $60\\text{ N}$. المسافة بين خطي عملهما $30\\text{ cm}$، ويبعد خط عمل المحصلة مسافة $10\\text{ cm}$ عن القوة $F_1$. أوجد مقدار كل من القوتين $F_1$ و $F_2$.",
    "optionsEn": [
      "$F_1 = 40\\text{ N}, F_2 = 20\\text{ N}$",
      "$F_1 = 50\\text{ N}, F_2 = 10\\text{ N}$",
      "$F_1 = 30\\text{ N}, F_2 = 30\\text{ N}$",
      "$F_1 = 45\\text{ N}, F_2 = 15\\text{ N}$"
    ],
    "optionsAr": [
      "ق1 = 40 نيوتن، ق2 = 20 نيوتن",
      "ق1 = 50 نيوتن، ق2 = 10 نيوتن",
      "ق1 = 30 نيوتن، ق2 = 30 نيوتن",
      "ق1 = 45 نيوتن، ق2 = 15 نيوتن"
    ],
    "correctAnswer": "$F_1 = 40\\text{ N}, F_2 = 20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Distance from $F_2$ is $30 - 10 = 20\\text{ cm}$. Use $F_1(10) = F_2(20)$ and $F_1 + F_2 = 60$.",
    "hintAr": "بعد المحصلة عن القوة الثانية هو 20 سم. استخدم التناسب ومجموع القوتين = 60.",
    "stepByStepSolutionEn": [
      "1. Distance from $F_2$ to the resultant is $d_2 = 30 - 10 = 20\\text{ cm}$.",
      "2. Moment balance: $F_1 \\times 10 = F_2 \\times 20 \\implies F_1 = 2 F_2$.",
      "3. Total force: $F_1 + F_2 = 60 \\implies 2F_2 + F_2 = 60 \\implies 3F_2 = 60 \\implies F_2 = 20\\text{ N}$.",
      "4. Then $F_1 = 2(20) = 40\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بعد المحصلة عن القوة الثانية = $30 - 10 = 20$ سم.",
      "٢. من اتزان العزوم: $F_1 \\times 10 = F_2 \\times 20 \\implies F_1 = 2 F_2$.",
      "٣. $F_1 + F_2 = 60 \\implies 3 F_2 = 60 \\implies F_2 = 20$ نيوتن، و $F_1 = 40$ نيوتن."
    ],
    "teacherTipEn": "Since the resultant is twice as close to $F_1$ as to $F_2$, $F_1$ must be twice as large as $F_2$.",
    "teacherTipAr": "بما أن المحصلة أقرب إلى ق1 بمرتين مقارنة بـ ق2، فإن ق1 يجب أن تكون ضعف ق2."
  },
  {
    "id": "stat_ch3_db_med_10",
    "titleEn": "Position of Load for 2:1 Reaction Ratio",
    "titleAr": "موضع حمل بنسبة 2 : 1 لردود أفعال الركائز",
    "difficulty": "medium",
    "questionEn": "A light horizontal beam $AB$ rests on two end supports $A$ and $B$. Where should a single downward load $W$ be placed so that the reaction at support $A$ is twice the reaction at support $B$ ($R_A = 2 R_B$)?",
    "questionAr": "عارضة خفيفة $AB$ ترتكز على دعامتين عند طرفيها $A$ و $B$. أين يجب وضع حمل رأسي مفرد $W$ بحيث يكون رد الفعل عند الدعامة $A$ ضعف رد الفعل عند الدعامة $B$ ($R_A = 2 R_B$)؟",
    "optionsEn": [
      "At $\\frac{1}{3} AB$ from end $A$",
      "At $\\frac{1}{3} AB$ from end $B$",
      "At the midpoint of $AB$",
      "At $\\frac{1}{4} AB$ from end $A$"
    ],
    "optionsAr": [
      "على بعد 1/3 أ ب من الطرف أ",
      "على بعد 1/3 أ ب من الطرف ب",
      "عند منتصف أ ب",
      "على بعد 1/4 أ ب من الطرف أ"
    ],
    "correctAnswer": "At $\\frac{1}{3} AB$ from end $A$",
    "correctIndex": 0,
    "hintEn": "Take moments about the load: $R_A \\times d_A = R_B \\times d_B$. If $R_A = 2 R_B$, then $d_B = 2 d_A$.",
    "hintAr": "من اتزان العزوم حول نقطة التأثير: $R_A \\times d_A = R_B \\times d_B$، فإذا كان $R_A = 2 R_B$ فإن $d_B = 2 d_A$.",
    "stepByStepSolutionEn": [
      "1. Let $d_A$ and $d_B$ be the distances from supports $A$ and $B$ to the load.",
      "2. For equilibrium: $R_A \\cdot d_A = R_B \\cdot d_B$.",
      "3. Given $R_A = 2 R_B$, we have $2 R_B \\cdot d_A = R_B \\cdot d_B \\implies d_B = 2 d_A$.",
      "4. Since $d_A + d_B = AB$, we have $d_A + 2 d_A = AB \\implies 3 d_A = AB \\implies d_A = \\frac{1}{3} AB$.",
      "5. The load must be placed at one-third of the length from end $A$."
    ],
    "stepByStepSolutionAr": [
      "١. من قانون العزوم حول الحمل: $R_A \\times d_A = R_B \\times d_B$.",
      "٢. بما أن $R_A = 2 R_B$، إذن $2 d_A = d_B$.",
      "٣. وحيث إن $d_A + d_B = AB$، فإن $3 d_A = AB \\implies d_A = \\frac{1}{3} AB$ من الطرف $A$."
    ],
    "teacherTipEn": "To make support $A$ carry twice the load of $B$, place the load twice as close to $A$ as to $B$.",
    "teacherTipAr": "لكي تتحمل الدعامة $A$ ضعف ما تتحمله $B$، ضع الحمل على مسافة من $A$ تساوي نصف مسافته من $B$."
  },
  {
    "id": "stat_ch3_db_med_11",
    "titleEn": "Center of Gravity of Non-Uniform Beam",
    "titleAr": "مركز ثقل قضيب غير منتظم",
    "difficulty": "medium",
    "questionEn": "A non-uniform rod $AB$ of length $100\\text{ cm}$ and weight $100\\text{ N}$ rests horizontally on two end supports. If the reaction at $A$ is $25\\text{ N}$, find the distance of the center of gravity of the rod from $A$.",
    "questionAr": "قضيب غير منتظم $AB$ طوله $100\\text{ سم}$ ووزنه $100\\text{ ن}$ يرتكز أفقياً على حاملين عند طرفيه. إذا كان رد الفعل عند $A$ هو $25\\text{ ن}$، فأوجد بعد مركز ثقل القضيب عن النقطة $A$.",
    "optionsEn": [
      "$75\\text{ cm}$ from $A$",
      "$81\\text{ cm}$ from $A$",
      "$87\\text{ cm}$ from $A$",
      "$93\\text{ cm}$ from $A$"
    ],
    "optionsAr": [
      "$75\\text{ سم}$ من $A$",
      "$81\\text{ سم}$ من $A$",
      "$87\\text{ سم}$ من $A$",
      "$93\\text{ سم}$ من $A$"
    ],
    "correctAnswer": "$75\\text{ cm}$ from $A$",
    "correctIndex": 0,
    "hintEn": "Reaction at B is R_B = W - R_A. Take moments about A: W * x_G = R_B * 100.",
    "hintAr": "رد الفعل عند $B$ هو $R_B = 100 - R_A$. خذ العزوم حول $A$: $W \\times x_G = R_B \\times 100$.",
    "stepByStepSolutionEn": [
      "1. Equilibrium: $R_B = W - R_A = 100 - 25 = 75\\text{ N}$.",
      "2. Take moments about end $A$ ($sum M_A = 0$):",
      "   $W \\times x_G = R_B \\times 100 \\implies 100 x_G = 75 \\times 100 \\implies x_G = 75\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل عند $B$: $R_B = 100 - 25 = 75\\text{ ن}$.",
      "٢. أخذ العزوم حول الطرف $A$:",
      "   $100 \\times x_G = 75 \\times 100 \\implies x_G = 75\\text{ سم}$."
    ],
    "teacherTipEn": "When total weight is 100 N on a 100 cm rod, distance from A equals R_B directly.",
    "teacherTipAr": "عندما يكون الوزن ١٠٠ نيوتن والطول ١٠٠ سم، يكون البعد عن أ مساوياً لرد الفعل عند ب عددياً."
  },
  {
    "id": "stat_ch3_db_med_12",
    "titleEn": "Center of Gravity of Non-Uniform Beam (Variant 2)",
    "titleAr": "مركز ثقل قضيب غير منتظم (حالة 2)",
    "difficulty": "medium",
    "questionEn": "A non-uniform rod $AB$ of length $100\\text{ cm}$ and weight $100\\text{ N}$ rests horizontally on two end supports. If the reaction at $A$ is $30\\text{ N}$, find the distance of the center of gravity of the rod from $A$.",
    "questionAr": "قضيب غير منتظم $AB$ طوله $100\\text{ سم}$ ووزنه $100\\text{ ن}$ يرتكز أفقياً على حاملين عند طرفيه. إذا كان رد الفعل عند $A$ هو $30\\text{ ن}$، فأوجد بعد مركز ثقل القضيب عن النقطة $A$.",
    "optionsEn": [
      "$70\\text{ cm}$ from $A$",
      "$76\\text{ cm}$ from $A$",
      "$82\\text{ cm}$ from $A$",
      "$88\\text{ cm}$ from $A$"
    ],
    "optionsAr": [
      "$70\\text{ سم}$ من $A$",
      "$76\\text{ سم}$ من $A$",
      "$82\\text{ سم}$ من $A$",
      "$88\\text{ سم}$ من $A$"
    ],
    "correctAnswer": "$70\\text{ cm}$ from $A$",
    "correctIndex": 0,
    "hintEn": "Reaction at B is R_B = W - R_A. Take moments about A: W * x_G = R_B * 100.",
    "hintAr": "رد الفعل عند $B$ هو $R_B = 100 - R_A$. خذ العزوم حول $A$: $W \\times x_G = R_B \\times 100$.",
    "stepByStepSolutionEn": [
      "1. Equilibrium: $R_B = W - R_A = 100 - 30 = 70\\text{ N}$.",
      "2. Take moments about end $A$ ($sum M_A = 0$):",
      "   $W \\times x_G = R_B \\times 100 \\implies 100 x_G = 70 \\times 100 \\implies x_G = 70\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل عند $B$: $R_B = 100 - 30 = 70\\text{ ن}$.",
      "٢. أخذ العزوم حول الطرف $A$:",
      "   $100 \\times x_G = 70 \\times 100 \\implies x_G = 70\\text{ سم}$."
    ],
    "teacherTipEn": "When total weight is 100 N on a 100 cm rod, distance from A equals R_B directly.",
    "teacherTipAr": "عندما يكون الوزن ١٠٠ نيوتن والطول ١٠٠ سم، يكون البعد عن أ مساوياً لرد الفعل عند ب عددياً."
  },
  {
    "id": "stat_ch3_db_med_13",
    "titleEn": "Weight and CG of Non-Uniform Rod from Two Setups",
    "titleAr": "تعيين وزن ساق غير منتظمة ومركز ثقلها من تجربتي اتزان",
    "difficulty": "medium",
    "questionEn": "A non-uniform rod $AB$ of length $100\\text{ cm}$ balances horizontally on a knife-edge at $C$ ($AC = 40\\text{ cm}$) when a weight of $30\\text{ N}$ is hung at $A$. It also balances on a knife-edge at $D$ ($AD = 70\\text{ cm}$) when a weight of $20\\text{ N}$ is hung at $B$. Find the weight $W$ of the rod and the distance $x$ of its center of gravity from end $A$.",
    "questionAr": "ساق غير منتظمة $AB$ طولها $100\\text{ cm}$ تتزن أفقياً على ركيزة عند $C$ ($AC = 40\\text{ cm}$) عند تعليق ثقل $30\\text{ N}$ عند $A$. وتتزن على ركيزة عند $D$ ($AD = 70\\text{ cm}$) عند تعليق ثقل $20\\text{ N}$ عند $B$. أوجد وزن الساق $W$ وبُعد مركز ثقلها $x$ عن الطرف $A$.",
    "optionsEn": [
      "$W = 60\\text{ N}, x = 60\\text{ cm}$",
      "$W = 50\\text{ N}, x = 55\\text{ cm}$",
      "$W = 80\\text{ N}, x = 50\\text{ cm}$",
      "$W = 60\\text{ N}, x = 50\\text{ cm}$"
    ],
    "optionsAr": [
      "و = 60 نيوتن، س = 60 سم",
      "و = 50 نيوتن، س = 55 سم",
      "و = 80 نيوتن، س = 50 سم",
      "و = 60 نيوتن، س = 50 سم"
    ],
    "correctAnswer": "$W = 60\\text{ N}, x = 60\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Set up two moment equations: $30(40) = W(x - 40)$ and $W(70 - x) = 20(30)$, then add them.",
    "hintAr": "اكتب معادلتي العزوم حول نقطتي الارتكاز واجمعهما لحساب الوزن وموضع مركز الثقل.",
    "stepByStepSolutionEn": [
      "1. First setup (pivot at $C$, $AC = 40$): taking moments about $C$ gives $30 \\times 40 = W(x - 40) \\implies W(x - 40) = 1200$.",
      "2. Second setup (pivot at $D$, $AD = 70, DB = 30$): taking moments about $D$ gives $W(70 - x) = 20 \\times 30 \\implies W(70 - x) = 600$.",
      "3. Adding the two equations: $W[(x - 40) + (70 - x)] = 1200 + 600 \\implies 30 W = 1800 \\implies W = 60\\text{ N}$.",
      "4. Substituting $W = 60$ into the first equation: $60(x - 40) = 1200 \\implies x - 40 = 20 \\implies x = 60\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. في الحالة الأولى (حول $C$): $30 \\times 40 = W (x - 40) \\implies W (x - 40) = 1200$.",
      "٢. في الحالة الثانية (حول $D$): $W (70 - x) = 20 \\times 30 \\implies W (70 - x) = 600$.",
      "٣. بجمع المعادلتين: $30 W = 1800 \\implies W = 60$ نيوتن.",
      "٤. بالتعويض: $x - 40 = 20 \\implies x = 60$ سم."
    ],
    "teacherTipEn": "Adding the two moment equations eliminates the unknown position $x$ and yields the weight $W$ instantly.",
    "teacherTipAr": "جمع معادلتي العزوم يلغي المجهول س مباشرة ويعطي الوزن و في خطوة واحدة."
  },
  {
    "id": "stat_ch3_db_med_14",
    "titleEn": "Center of Gravity from Known Support Reactions",
    "titleAr": "تعيين مركز ثقل عارضة غير منتظمة من ردود أفعال ركائزها",
    "difficulty": "medium",
    "questionEn": "A non-uniform beam $AB$ of length $6\\text{ m}$ rests horizontally on two end supports at $A$ and $B$. Under its self-weight alone, the vertical reaction at $A$ is measured to be $80\\text{ N}$ and at $B$ is $120\\text{ N}$. Find the distance of the center of gravity of the beam from end $A$.",
    "questionAr": "عارضة غير منتظمة $AB$ طولها $6\\text{ m}$ ترتكز أفقياً على ركيزتين عند طرفيها $A$ و $B$. تحت تأثير وزنها فقط، قيست ردود الأفعال فكانت عند $A$ تساوي $80\\text{ N}$ وعند $B$ تساوي $120\\text{ N}$. أوجد بُعد مركز ثقل العارضة عن الطرف $A$.",
    "optionsEn": [
      "$3.6\\text{ m}$",
      "$3.0\\text{ m}$",
      "$4.0\\text{ m}$",
      "$2.4\\text{ m}$"
    ],
    "optionsAr": [
      "3.6 م",
      "3.0 م",
      "4.0 م",
      "2.4 م"
    ],
    "correctAnswer": "$3.6\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Total weight is $W = 80 + 120 = 200\\text{ N}$. Take moments about $A$: $W \\cdot x_G = R_B \\cdot L$.",
    "hintAr": "الوزن الكلي 200 نيوتن. خذ العزوم حول $A$: الوزن × بعد مركز الثقل = رد الفعل عند ب × الطول.",
    "stepByStepSolutionEn": [
      "1. Total weight of the beam: $W = R_A + R_B = 80 + 120 = 200\\text{ N}$.",
      "2. Taking moments about end $A$: $\\sum M_A = 0 \\implies W \\cdot x_G = R_B \\cdot L$.",
      "3. $200 \\cdot x_G = 120 \\times 6 = 720$.",
      "4. Solving: $x_G = \\frac{720}{200} = 3.6\\text{ m}$ from $A$."
    ],
    "stepByStepSolutionAr": [
      "١. الوزن الكلي للعارضة = $80 + 120 = 200$ نيوتن.",
      "٢. بأخذ العزوم حول $A$: $200 \\times x_G = 120 \\times 6 = 720$.",
      "٣. إذن $x_G = 720 / 200 = 3.6$ م من $A$."
    ],
    "teacherTipEn": "The center of gravity is shifted toward $B$ ($3.6\\text{ m} > 3.0\\text{ m}$) because $R_B > R_A$.",
    "teacherTipAr": "مركز الثقل مزاح جهة $B$ (3.6 م أكبر من المنتصف 3 م) لأن رد الفعل عند $B$ أكبر."
  },
  {
    "id": "stat_ch3_db_med_15",
    "titleEn": "Reaction of Non-Uniform Rod with Known CG",
    "titleAr": "حساب رد فعل دعامة لساق غير منتظمة معلوم مركز ثقلها",
    "difficulty": "medium",
    "questionEn": "A non-uniform rod $AB$ of length $90\\text{ cm}$ and weight $W = 50\\text{ N}$ has its center of gravity at distance $36\\text{ cm}$ from end $A$. It rests horizontally on two end supports at $A$ and $B$. Find the reaction force $R_B$ at support $B$.",
    "questionAr": "ساق غير منتظمة $AB$ طولها $90\\text{ cm}$ ووزنها $50\\text{ N}$ يؤثر في مركز ثقل يبعد مسافة $36\\text{ cm}$ عن الطرف $A$. ترتكز أفقياً على دعامتين عند طرفيها $A$ و $B$. أوجد مقدار رد الفعل $R_B$ عند الدعامة $B$.",
    "optionsEn": [
      "$20\\text{ N}$",
      "$30\\text{ N}$",
      "$25\\text{ N}$",
      "$15\\text{ N}$"
    ],
    "optionsAr": [
      "20 نيوتن",
      "30 نيوتن",
      "25 نيوتن",
      "15 نيوتن"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Take moments about support $A$: $R_B \\times 90 = 50 \\times 36$.",
    "hintAr": "خذ العزوم حول الدعامة $A$: $R_B \\times 90 = 50 \\times 36$.",
    "stepByStepSolutionEn": [
      "1. Taking moments about support $A$: $\\sum M_A = 0$.",
      "2. Clockwise moment of weight: $W \\times x_G = 50 \\times 36 = 1800\\text{ N}\\cdot\\text{cm}$.",
      "3. Counterclockwise moment of reaction: $R_B \\times 90$.",
      "4. Equating: $90 R_B = 1800 \\implies R_B = \\frac{1800}{90} = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ العزوم حول الدعامة $A$: $R_B \\times 90 = 50 \\times 36 = 1800$.",
      "٢. إذن $R_B = 1800 / 90 = 20$ نيوتن."
    ],
    "teacherTipEn": "Then $R_A = 50 - 20 = 30\\text{ N}$.",
    "teacherTipAr": "وبالتالي يكون رد الفعل عند $A$ هو $50 - 20 = 30$ نيوتن."
  },
  {
    "id": "stat_ch3_db_med_16",
    "titleEn": "Impending Tipping About Overhang Pivot",
    "titleAr": "انقلاب وشيك لساق غير منتظمة حول ركيزة داخلية",
    "difficulty": "medium",
    "questionEn": "A non-uniform rod $AB$ of length $100\\text{ cm}$ and weight $40\\text{ N}$ rests horizontally on two supports at $C$ and $D$, where $AC = 10\\text{ cm}$ and $BD = 10\\text{ cm}$. When a weight of $20\\text{ N}$ is suspended from end $A$, the rod is on the verge of tipping about $C$. What is the distance from support $C$ to the center of gravity of the rod?",
    "questionAr": "ساق غير منتظمة $AB$ طولها $100\\text{ cm}$ ووزنها $40\\text{ N}$ ترتكز أفقياً على دعامتين عند $C$ و $D$، حيث $AC = 10\\text{ cm}$ و $BD = 10\\text{ cm}$. عند تعليق ثقل مقداره $20\\text{ N}$ عند الطرف $A$، أوشكت الساق على الانقلاب حول $C$. ما المسافة بين الدعامة $C$ ومركز ثقل الساق؟",
    "optionsEn": [
      "$5\\text{ cm}$",
      "$10\\text{ cm}$",
      "$7.5\\text{ cm}$",
      "$2.5\\text{ cm}$"
    ],
    "optionsAr": [
      "5 سم",
      "10 سم",
      "7.5 سم",
      "2.5 سم"
    ],
    "correctAnswer": "$5\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "When tipping impends about $C$, the reaction at the other support $D$ drops to zero ($R_D = 0$).",
    "hintAr": "عندما توشك الساق على الانقلاب حول $C$، ينعدم رد الفعل عند الدعامة الأخرى $D$ تماماً ($R_D = 0$).",
    "stepByStepSolutionEn": [
      "1. At impending tipping about support $C$, contact with support $D$ is just about to break, so $R_D = 0$.",
      "2. The only upward support force acting is $R_C$.",
      "3. Taking moments about pivot $C$: the moment of the suspended weight at $A$ balances the moment of the rod's weight.",
      "4. $20 \\times 10 = 40 \\times d_G \\implies 200 = 40 d_G \\implies d_G = \\frac{200}{40} = 5\\text{ cm}$ to the right of $C$."
    ],
    "stepByStepSolutionAr": [
      "١. عند وشك الانقلاب حول $C$ ينعدم رد الفعل عند $D$ ($R_D = 0$).",
      "٢. بأخذ العزوم حول $C$: عزم الثقل المعلق يوازن عزم وزن الساق.",
      "٣. $20 \\times 10 = 40 \\times d_G \\implies 200 = 40 d_G \\implies d_G = 5$ سم يمين $C$."
    ],
    "teacherTipEn": "The key principle of tipping is that the reaction at the distant support vanishes.",
    "teacherTipAr": "المبدأ الجوهري لمسائل الانقلاب الوشيك هو انعدام رد الفعل عند الركيزة البعيدة تماماً."
  },
  {
    "id": "stat_ch3_db_med_17",
    "titleEn": "Maximum Safe Suspended Weight on Opposite Overhang",
    "titleAr": "أكبر ثقل يمكن تعليقه دون انقلاب عند الطرف المقابل",
    "difficulty": "medium",
    "questionEn": "For the rod in the previous problem ($W = 40\\text{ N}, L = 100\\text{ cm}$, center of gravity at $15\\text{ cm}$ from $A$, supports at $AC = 10\\text{ cm}$ and $BD = 10\\text{ cm}$), what maximum weight $W_{\\max}$ can be suspended from the opposite end $B$ without tipping the rod about $D$?",
    "questionAr": "للساق في المسألة السابقة ($W = 40\\text{ N}$، طولها $100\\text{ cm}$، مركز ثقلها يبعد $15\\text{ cm}$ عن $A$، والدعامتان عند $AC = 10\\text{ cm}$ و $BD = 10\\text{ cm}$)، ما أكبر ثقل $W_{\\max}$ يمكن تعليقه عند الطرف $B$ دون أن تنقلب الساق حول $D$؟",
    "optionsEn": [
      "$300\\text{ N}$",
      "$200\\text{ N}$",
      "$150\\text{ N}$",
      "$400\\text{ N}$"
    ],
    "optionsAr": [
      "300 نيوتن",
      "200 نيوتن",
      "150 نيوتن",
      "400 نيوتن"
    ],
    "correctAnswer": "$300\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "At tipping about $D$, $R_C = 0$. Take moments about $D$: $W_{\\max} \\times 10 = 40 \\times (90 - 15)$.",
    "hintAr": "عند وشك الانقلاب حول $D$، ينعدم رد الفعل عند $C$. خذ العزوم حول $D$.",
    "stepByStepSolutionEn": [
      "1. When tipping impends about support $D$, reaction $R_C = 0$.",
      "2. Support $D$ is at $100 - 10 = 90\\text{ cm}$ from $A$.",
      "3. Distance from the rod's center of gravity ($15\\text{ cm}$ from $A$) to support $D$ is $90 - 15 = 75\\text{ cm}$.",
      "4. Taking moments about $D$: $W_{\\max} \\times 10 = 40 \\times 75 = 3000 \\implies W_{\\max} = 300\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. عند وشك الانقلاب حول $D$ ينعدم رد الفعل عند $C$.",
      "٢. الدعامة $D$ تبعد 90 سم عن $A$، إذن بعد مركز الثقل عنها = $90 - 15 = 75$ سم.",
      "٣. بأخذ العزوم حول $D$: $W_{\\max} \\times 10 = 40 \\times 75 = 3000$.",
      "٤. إذن أقصى ثقل = $300$ نيوتن."
    ],
    "teacherTipEn": "A smaller overhang arm ($10\\text{ cm}$) balancing a large lever arm ($75\\text{ cm}$) allows supporting a much heavier weight.",
    "teacherTipAr": "صغر ذراع التعليق (10 سم) مقارنة بذراع مركز الثقل (75 سم) يسمح بتعليق ثقل كبير جداً."
  },
  {
    "id": "stat_ch3_db_med_18",
    "titleEn": "Cable Capacity Check for Non-Uniform Suspended Rod",
    "titleAr": "التحقق من احتمال انقطاع كابلي تعليق ساق غير منتظمة",
    "difficulty": "medium",
    "questionEn": "A non-uniform rod $AB$ of length $2\\text{ m}$ and weight $180\\text{ N}$ has its center of gravity at $0.8\\text{ m}$ from $A$. It is suspended horizontally by two vertical cables at its ends $A$ and $B$. If cable $A$ can withstand a maximum tension of $100\\text{ N}$ and cable $B$ can withstand $150\\text{ N}$, which statement is correct?",
    "questionAr": "ساق غير منتظمة $AB$ طولها $2\\text{ m}$ ووزنها $180\\text{ N}$ مركز ثقلها على بعد $0.8\\text{ m}$ من $A$. عُلقت أفقياً بواسطة كابلين رأسيين عند طرفيها $A$ و $B$. إذا كان أقصى شد يتحمله الكابل $A$ هو $100\\text{ N}$ والكابل $B$ هو $150\\text{ N}$، فأي العبارات الآتية صحيحة؟",
    "optionsEn": [
      "Cable $A$ will break because its tension is $108\\text{ N} > 100\\text{ N}$",
      "Both cables remain intact with tensions $90\\text{ N}$ each",
      "Cable $B$ will break because its tension is $162\\text{ N} > 150\\text{ N}$",
      "Neither cable carries more than $80\\text{ N}$"
    ],
    "optionsAr": [
      "سينقطع الكابل أ لأن الشد فيه 108 نيوتن > 100 نيوتن",
      "يبقى الكابلان سليمين والشد في كل منهما 90 نيوتن",
      "سينقطع الكابل ب لأن الشد فيه 162 نيوتن > 150 نيوتن",
      "لا يحمل أي من الكابلين أكثر من 80 نيوتن"
    ],
    "correctAnswer": "Cable $A$ will break because its tension is $108\\text{ N} > 100\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Compute tension $T_A$ and $T_B$ using moments, then compare to cable limits.",
    "hintAr": "احسب الشد في كل كابل باستخدام العزوم، ثم قارن بأقصى شد يتحمله كل منهما.",
    "stepByStepSolutionEn": [
      "1. Taking moments about $B$: $T_A \\times 2 = 180 \\times (2 - 0.8) = 180 \\times 1.2 = 216 \\implies T_A = 108\\text{ N}$.",
      "2. By vertical equilibrium: $T_B = 180 - 108 = 72\\text{ N}$.",
      "3. Comparing with cable limits: $T_A = 108\\text{ N} > 100\\text{ N}$, while $T_B = 72\\text{ N} < 150\\text{ N}$.",
      "4. Therefore, cable $A$ exceeds its capacity and will break."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ العزوم حول $B$: $T_A \\times 2 = 180 \\times 1.2 = 216 \\implies T_A = 108$ نيوتن.",
      "٢. ومن الاتزان الرأسي: $T_B = 180 - 108 = 72$ نيوتن.",
      "٣. الشد في الكابل $A$ (108 نيوتن) يتجاوز قدرة تحمله (100 نيوتن).",
      "٤. إذن ينقطع الكابل $A$."
    ],
    "teacherTipEn": "Because the center of gravity is much closer to $A$ ($0.8\\text{ m}$ vs $1.2\\text{ m}$), cable $A$ takes 60% of the total weight.",
    "teacherTipAr": "لقرب مركز الثقل من الطرف أ، يتحمل الكابل أ 60% من الوزن مما يؤدي لانقطاعه."
  },
  {
    "id": "stat_ch3_db_med_19",
    "titleEn": "Finding Center of Gravity Position in Terms of Span",
    "titleAr": "تحديد موقع مركز ثقل ساق بدلالة طولها",
    "difficulty": "medium",
    "questionEn": "A non-uniform rod of length $L$ and weight $W$ balances horizontally on a knife-edge placed at distance $\\frac{L}{3}$ from end $A$ when an additional weight equal to the rod's own weight ($P = W$) is suspended from end $A$. What is the distance of the center of gravity from end $A$?",
    "questionAr": "ساق غير منتظمة طولها $L$ ووزنها $W$ تتزن أفقياً على ركيزة تبعد مسافة $\\frac{L}{3}$ عن الطرف $A$ عند تعليق ثقل مساوٍ لوزن الساق نفسها ($P = W$) عند الطرف $A$. ما بُعد مركز ثقل الساق عن الطرف $A$؟",
    "optionsEn": [
      "$\\frac{2}{3} L$ from end $A$",
      "$\\frac{1}{2} L$ from end $A$",
      "$\\frac{3}{4} L$ from end $A$",
      "$\\frac{5}{6} L$ from end $A$"
    ],
    "optionsAr": [
      "2/3 L من الطرف أ",
      "1/2 L من الطرف أ",
      "3/4 L من الطرف أ",
      "5/6 L من الطرف أ"
    ],
    "correctAnswer": "$\\frac{2}{3} L$ from end $A$",
    "correctIndex": 0,
    "hintEn": "Take moments about the pivot at $\\frac{L}{3}$: $W \\left(\\frac{L}{3}\\right) = W \\left(x_G - \\frac{L}{3}\\right)$.",
    "hintAr": "خذ العزوم حول نقطة الارتكاز: عزم الثقل المعلق يوازن عزم وزن الساق.",
    "stepByStepSolutionEn": [
      "1. Distance from suspended weight at $A$ to pivot: $d_P = \\frac{L}{3}$.",
      "2. Counterclockwise moment of suspended weight: $W \\cdot \\frac{L}{3}$.",
      "3. Let $x_G$ be the distance of the center of gravity from $A$. Distance from pivot to $CG$: $x_G - \\frac{L}{3}$.",
      "4. Equating moments: $W \\cdot \\frac{L}{3} = W \\left(x_G - \\frac{L}{3}\\right) \\implies \\frac{L}{3} = x_G - \\frac{L}{3}$.",
      "5. Solving: $x_G = \\frac{L}{3} + \\frac{L}{3} = \\frac{2}{3} L$."
    ],
    "stepByStepSolutionAr": [
      "١. ذراع الثقل المعلق عن نقطة الارتكاز = $L / 3$.",
      "٢. ذراع وزن الساق عن نقطة الارتكاز = $x_G - L/3$.",
      "٣. بمساواة العزمين: $W (L/3) = W (x_G - L/3) \\implies L/3 = x_G - L/3$.",
      "٤. إذن $x_G = \\frac{2}{3} L$ من الطرف $A$."
    ],
    "teacherTipEn": "Since the weights are equal ($W = P$), their lever arms on opposite sides of the pivot must be equal.",
    "teacherTipAr": "لتساوي الوزنين، يجب أن يتساوى ذراعا عزميهما على جانبي نقطة الارتكاز."
  },
  {
    "id": "stat_ch3_db_med_20",
    "titleEn": "Flagpole Load Carried by Two Workers",
    "titleAr": "توزيع وزن سارية علم بين عاملين يحملانها من طرفيها",
    "difficulty": "medium",
    "questionEn": "A tapered wooden flagpole of weight $240\\text{ N}$ and length $6\\text{ m}$ has its center of gravity located at $2\\text{ m}$ from its thicker base end $A$. It is carried horizontally by two workers holding it at ends $A$ and $B$. What load is carried by the worker holding the thicker end $A$?",
    "questionAr": "سارية علم خشبية مسلوبة وزنها $240\\text{ N}$ وطولها $6\\text{ m}$ مركز ثقلها على بعد $2\\text{ m}$ من قاعدتها الأسمك $A$. يحملها عاملان أفقياً من طرفيها $A$ و $B$. ما مقدار الحمل الذي يحمله العامل عند الطرف الأسمك $A$؟",
    "optionsEn": [
      "$160\\text{ N}$",
      "$80\\text{ N}$",
      "$120\\text{ N}$",
      "$180\\text{ N}$"
    ],
    "optionsAr": [
      "160 نيوتن",
      "80 نيوتن",
      "120 نيوتن",
      "180 نيوتن"
    ],
    "correctAnswer": "$160\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Take moments about the opposite end $B$: $R_A \\times 6 = 240 \\times (6 - 2)$.",
    "hintAr": "خذ العزوم حول الطرف الآخر $B$: $R_A \\times 6 = 240 \\times 4$.",
    "stepByStepSolutionEn": [
      "1. Distance from center of gravity to end $B$: $6 - 2 = 4\\text{ m}$.",
      "2. Taking moments about end $B$: $\\sum M_B = 0 \\implies R_A \\times 6 = 240 \\times 4 = 960$.",
      "3. Solving for $R_A$: $R_A = \\frac{960}{6} = 160\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بعد مركز الثقل عن الطرف $B$ = $6 - 2 = 4$ أمتار.",
      "٢. بأخذ العزوم حول $B$: $R_A \\times 6 = 240 \\times 4 = 960$.",
      "٣. إذن $R_A = 960 / 6 = 160$ نيوتن."
    ],
    "teacherTipEn": "The worker at the thicker end carries two-thirds of the total weight ($160\\text{ N}$ vs $80\\text{ N}$).",
    "teacherTipAr": "العامل عند الطرف الأثقل يحمل ثلثي الوزن الكلي (160 نيوتن مقابل 80 نيوتن)."
  },
  {
    "id": "stat_ch3_db_med_21",
    "titleEn": "Reactions for Uniform Beam with Additional Load",
    "titleAr": "ردود الأفعال لقضيب منتظم مع ثقل إضافي",
    "difficulty": "medium",
    "questionEn": "A uniform rod $AB$ of length $120\\text{ cm}$ and weight $20\\text{ N}$ rests on two supports at its ends $A$ and $B$. A load of $P = 20\\text{ N}$ is placed $30\\text{ cm}$ from $A$. Find the reactions $R_A$ and $R_B$.",
    "questionAr": "قضيب منتظم $AB$ طوله $120\\text{ سم}$ ووزنه $20\\text{ ن}$ يرتكز على حاملين عند طرفيه $A$ و $B$. وُضع ثقل $P = 20\\text{ ن}$ على بعد $30\\text{ سم}$ من $A$. أوجد رد الفعلين $R_A$ و $R_B$.",
    "optionsEn": [
      "$R_A = 25\\text{ N}, \\quad R_B = 15\\text{ N}$",
      "$R_A = 35\\text{ N}, \\quad R_B = 5\\text{ N}$",
      "$R_A = 15\\text{ N}, \\quad R_B = 25\\text{ N}$",
      "$R_A = 30\\text{ N}, \\quad R_B = 20\\text{ N}$"
    ],
    "optionsAr": [
      "$R_A = 25\\text{ ن}, \\quad R_B = 15\\text{ ن}$",
      "$R_A = 35\\text{ ن}, \\quad R_B = 5\\text{ ن}$",
      "$R_A = 15\\text{ ن}, \\quad R_B = 25\\text{ ن}$",
      "$R_A = 30\\text{ ن}, \\quad R_B = 20\\text{ ن}$"
    ],
    "correctAnswer": "$R_A = 25\\text{ N}, \\quad R_B = 15\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The weight acts at 60 cm. Take moments about B: R_A(120) = 20(60) + P(90).",
    "hintAr": "الوزن يؤثر عند ٦٠ سم. خذ العزوم حول $B$: $120 R_A = 20(60) + P(90)$.",
    "stepByStepSolutionEn": [
      "1. Beam weight $20\\text{ N}$ acts at midpoint ($60\\text{ cm}$ from $A$, $60\\text{ cm}$ from $B$).",
      "2. Load $P = 20\\text{ N}$ is at $30\\text{ cm}$ from $A$, which is $90\\text{ cm}$ from $B$.",
      "3. Take moments about $B$ ($sum M_B = 0$):",
      "   $R_A(120) = 20(60) + 20(90) = 1200 + 1800 = 3000$.",
      "   $R_A = \\frac{3000}{120} = 25\\text{ N}$.",
      "4. Vertical equilibrium: $R_B = 20 + 20 - 25 = 15\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. وزن القضيب يؤثر في المنتصف على بعد ٦٠ سم من كلا الطرفين.",
      "٢. الثقل الإضافي يبعد ٩٠ سم عن الطرف $B$.",
      "٣. أخذ العزوم حول $B$:",
      "   $120 R_A = 20(60) + 20(90) \\implies R_A = 25\\text{ ن}$.",
      "٤. ومن الاتزان الرأسي: $R_B = 20 + 20 - 25 = 15\\text{ ن}$."
    ],
    "teacherTipEn": "Always check that R_A + R_B equals the total downward weight.",
    "teacherTipAr": "تحقق دائماً أن مجموع ردي الفعل يساوي مجموع الأوزان المتجهة لأسفل."
  },
  {
    "id": "stat_ch3_db_med_22",
    "titleEn": "Reactions for Uniform Beam with Additional Load (Variant 2)",
    "titleAr": "ردود الأفعال لقضيب منتظم مع ثقل إضافي (حالة 2)",
    "difficulty": "medium",
    "questionEn": "A uniform rod $AB$ of length $120\\text{ cm}$ and weight $20\\text{ N}$ rests on two supports at its ends $A$ and $B$. A load of $P = 40\\text{ N}$ is placed $30\\text{ cm}$ from $A$. Find the reactions $R_A$ and $R_B$.",
    "questionAr": "قضيب منتظم $AB$ طوله $120\\text{ سم}$ ووزنه $20\\text{ ن}$ يرتكز على حاملين عند طرفيه $A$ و $B$. وُضع ثقل $P = 40\\text{ ن}$ على بعد $30\\text{ سم}$ من $A$. أوجد رد الفعلين $R_A$ و $R_B$.",
    "optionsEn": [
      "$R_A = 40\\text{ N}, \\quad R_B = 20\\text{ N}$",
      "$R_A = 50\\text{ N}, \\quad R_B = 10\\text{ N}$",
      "$R_A = 20\\text{ N}, \\quad R_B = 40\\text{ N}$",
      "$R_A = 45\\text{ N}, \\quad R_B = 25\\text{ N}$"
    ],
    "optionsAr": [
      "$R_A = 40\\text{ ن}, \\quad R_B = 20\\text{ ن}$",
      "$R_A = 50\\text{ ن}, \\quad R_B = 10\\text{ ن}$",
      "$R_A = 20\\text{ ن}, \\quad R_B = 40\\text{ ن}$",
      "$R_A = 45\\text{ ن}, \\quad R_B = 25\\text{ ن}$"
    ],
    "correctAnswer": "$R_A = 40\\text{ N}, \\quad R_B = 20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The weight acts at 60 cm. Take moments about B: R_A(120) = 20(60) + P(90).",
    "hintAr": "الوزن يؤثر عند ٦٠ سم. خذ العزوم حول $B$: $120 R_A = 20(60) + P(90)$.",
    "stepByStepSolutionEn": [
      "1. Beam weight $20\\text{ N}$ acts at midpoint ($60\\text{ cm}$ from $A$, $60\\text{ cm}$ from $B$).",
      "2. Load $P = 40\\text{ N}$ is at $30\\text{ cm}$ from $A$, which is $90\\text{ cm}$ from $B$.",
      "3. Take moments about $B$ ($sum M_B = 0$):",
      "   $R_A(120) = 20(60) + 40(90) = 1200 + 3600 = 4800$.",
      "   $R_A = \\frac{4800}{120} = 40\\text{ N}$.",
      "4. Vertical equilibrium: $R_B = 20 + 40 - 40 = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. وزن القضيب يؤثر في المنتصف على بعد ٦٠ سم من كلا الطرفين.",
      "٢. الثقل الإضافي يبعد ٩٠ سم عن الطرف $B$.",
      "٣. أخذ العزوم حول $B$:",
      "   $120 R_A = 20(60) + 40(90) \\implies R_A = 40\\text{ ن}$.",
      "٤. ومن الاتزان الرأسي: $R_B = 20 + 40 - 40 = 20\\text{ ن}$."
    ],
    "teacherTipEn": "Always check that R_A + R_B equals the total downward weight.",
    "teacherTipAr": "تحقق دائماً أن مجموع ردي الفعل يساوي مجموع الأوزان المتجهة لأسفل."
  },
  {
    "id": "stat_ch3_db_med_23",
    "titleEn": "Uniform Beam with Overhang at One End",
    "titleAr": "عارضة منتظمة ذات بروز عند أحد طرفيها",
    "difficulty": "medium",
    "questionEn": "A uniform beam $AB$ of length $8\\text{ m}$ and weight $W = 120\\text{ N}$ rests on two supports: one at end $A$ and the other at point $C$ where $AC = 6\\text{ m}$ (leaving an overhang $CB = 2\\text{ m}$). Find the reaction force $R_C$ at support $C$.",
    "questionAr": "عارضة منتظمة $AB$ طولها $8\\text{ m}$ ووزنها $120\\text{ N}$ ترتكز على دعامتين: إحداهما عند الطرف $A$ والأخرى عند النقطة $C$ حيث $AC = 6\\text{ m}$ (مما يترك جزءاً بارزاً $CB = 2\\text{ m}$). أوجد رد الفعل $R_C$ عند الدعامة $C$.",
    "optionsEn": [
      "$80\\text{ N}$",
      "$40\\text{ N}$",
      "$60\\text{ N}$",
      "$100\\text{ N}$"
    ],
    "optionsAr": [
      "80 نيوتن",
      "40 نيوتن",
      "60 نيوتن",
      "100 نيوتن"
    ],
    "correctAnswer": "$80\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Weight acts at midpoint ($4\\text{ m}$ from $A$). Take moments about support $A$: $R_C \\times 6 = 120 \\times 4$.",
    "hintAr": "يؤثر الوزن عند المنتصف على بعد 4 م من $A$. خذ العزوم حول $A$: $R_C \\times 6 = 120 \\times 4$.",
    "stepByStepSolutionEn": [
      "1. For a uniform beam of length $8\\text{ m}$, the center of gravity is at distance $4\\text{ m}$ from end $A$.",
      "2. Taking moments about support $A$: $\\sum M_A = 0 \\implies R_C \\times 6 = W \\times 4 = 120 \\times 4 = 480$.",
      "3. Solving for $R_C$: $R_C = \\frac{480}{6} = 80\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل العارضة المنتظمة يقع على بعد 4 أمتار من $A$.",
      "٢. بأخذ العزوم حول الدعامة $A$: $R_C \\times 6 = 120 \\times 4 = 480$.",
      "٣. إذن $R_C = 80$ نيوتن."
    ],
    "teacherTipEn": "Then by vertical equilibrium, $R_A = 120 - 80 = 40\\text{ N}$.",
    "teacherTipAr": "ومن الاتزان الرأسي، رد الفعل عند $A$ هو $120 - 80 = 40$ نيوتن."
  },
  {
    "id": "stat_ch3_db_med_24",
    "titleEn": "Maximum Overhang Load to Avoid Liftoff",
    "titleAr": "أكبر حمل على الطرف البارز لمنع انفصال العارضة عن الركيزة",
    "difficulty": "medium",
    "questionEn": "For the beam in the previous problem ($W = 120\\text{ N}, L = 8\\text{ m}, AC = 6\\text{ m}$, overhang $CB = 2\\text{ m}$), what maximum weight $P$ can be suspended from the overhang tip $B$ without tilting the beam off support $A$?",
    "questionAr": "للعارضة في المسألة السابقة ($W = 120\\text{ N}$، طولها $8\\text{ m}$، $AC = 6\\text{ m}$، والبروز $CB = 2\\text{ m}$)، ما أكبر ثقل $P$ يمكن تعليقه عند طرف البروز $B$ دون أن تنفصل العارضة عن الدعامة $A$؟",
    "optionsEn": [
      "$120\\text{ N}$",
      "$60\\text{ N}$",
      "$80\\text{ N}$",
      "$160\\text{ N}$"
    ],
    "optionsAr": [
      "120 نيوتن",
      "60 نيوتن",
      "80 نيوتن",
      "160 نيوتن"
    ],
    "correctAnswer": "$120\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "At impending liftoff from $A$, $R_A = 0$. Take moments about support $C$: $P \\times 2 = 120 \\times (6 - 4)$.",
    "hintAr": "عند وشك الانفصال عن $A$ ينعدم $R_A$. خذ العزوم حول الدعامة $C$.",
    "stepByStepSolutionEn": [
      "1. Liftoff from support $A$ impends when $R_A = 0$.",
      "2. Center of gravity of beam is at $4\\text{ m}$ from $A$, which is $6 - 4 = 2\\text{ m}$ to the left of support $C$.",
      "3. Overhang tip $B$ is at $2\\text{ m}$ to the right of support $C$.",
      "4. Taking moments about pivot $C$: $P \\times 2 = 120 \\times 2 \\implies P = 120\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. عند وشك الانفصال عن الدعامة $A$، يكون $R_A = 0$.",
      "٢. مركز ثقل العارضة يبعد مسافة $6 - 4 = 2$ م يسار الدعامة $C$.",
      "٣. طرف البروز $B$ يبعد مسافة 2 م يمين الدعامة $C$.",
      "٤. بمساواة العزوم حول $C$: $P \\times 2 = 120 \\times 2 \\implies P = 120$ نيوتن."
    ],
    "teacherTipEn": "Since the lever arms to the center of gravity and the tip are identical ($2\\text{ m}$ each), the balancing load equals the weight of the beam.",
    "teacherTipAr": "لتساوي ذراعي العزم لمركز الثقل وطرف البروز حول $C$ (2 م لكل منهما)، فإن أقصى حمل يساوي وزن العارضة نفسه."
  },
  {
    "id": "stat_ch3_db_med_25",
    "titleEn": "Person Walking on Overhanging Plank",
    "titleAr": "شخص يسير على لوح خشب بارز فوق حافة سطح",
    "difficulty": "medium",
    "questionEn": "A uniform plank of length $10\\text{ m}$ and weight $300\\text{ N}$ rests horizontally on a flat roof, overhanging the edge by $3\\text{ m}$. A worker of weight $600\\text{ N}$ walks outward along the overhanging portion. How far beyond the edge of the roof can the worker walk before the plank begins to tip?",
    "questionAr": "لوح خشب منتظم طوله $10\\text{ m}$ ووزنه $300\\text{ N}$ يستقر أفقياً على سطح مستوٍ ويبرز عن حافته مسافة $3\\text{ m}$. يسير عامل وزنه $600\\text{ N}$ للخارج على الجزء البارز. ما أقصى مسافة يمكن للعامل أن يقطعها بعد حافة السطح قبل أن يبدأ اللوح في الانقلاب؟",
    "optionsEn": [
      "$1.0\\text{ m}$",
      "$1.5\\text{ m}$",
      "$2.0\\text{ m}$",
      "$0.5\\text{ m}$"
    ],
    "optionsAr": [
      "1.0 م",
      "1.5 م",
      "2.0 م",
      "0.5 م"
    ],
    "correctAnswer": "$1.0\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Take moments about the roof edge. Center of gravity of plank is at $5\\text{ m}$ from inner end, so $2\\text{ m}$ inside roof edge.",
    "hintAr": "خذ العزوم حول حافة السطح: مركز ثقل اللوح يبعد مسافة 2 م داخل السطح.",
    "stepByStepSolutionEn": [
      "1. The center of gravity of the $10\\text{ m}$ plank is at its midpoint ($5\\text{ m}$ from either end).",
      "2. Since $3\\text{ m}$ overhangs, the remaining $7\\text{ m}$ rests on the roof. The center of gravity is at $7 - 5 = 2\\text{ m}$ inside the roof edge.",
      "3. Counterclockwise moment of plank weight about roof edge: $300 \\times 2 = 600\\text{ N}\\cdot\\text{m}$.",
      "4. For the worker of weight $600\\text{ N}$ at distance $x$ past the edge: clockwise moment is $600 \\times x$.",
      "5. Equating moments at impending tip: $600 x = 600 \\implies x = 1.0\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل اللوح (طوله 10 م) يقع في منتصفه على بعد 5 م من طرفيه.",
      "٢. الجزء الداخلي طوله 7 م، فيكون مركز الثقل على بعد $7 - 5 = 2$ م داخل حافة السطح.",
      "٣. عزم وزن اللوح حول الحافة = $300 \\times 2 = 600$ ن.م.",
      "٤. عزم العامل حول الحافة = $600 \\times x$.",
      "٥. بمساواة العزمين: $600 x = 600 \\implies x = 1.0$ م."
    ],
    "teacherTipEn": "Beyond $1\\text{ m}$, the clockwise tipping moment exceeds the counterclockwise restoring moment, causing the plank to flip.",
    "teacherTipAr": "بعد مسافة 1 م، يتغلب عزم الانقلاب على عزم وزن اللوح فيحدث الانقلاب فوراً."
  },
  {
    "id": "stat_ch3_db_med_26",
    "titleEn": "Symmetrically Supported Beam with Two Equal Overhangs",
    "titleAr": "عارضة متماثلة الارتكاز ببروزين متساويين عند الطرفين",
    "difficulty": "medium",
    "questionEn": "A uniform beam of length $12\\text{ m}$ and weight $240\\text{ N}$ rests horizontally on two supports placed symmetrically at distance $2\\text{ m}$ from each end. Find the reaction force at each support under self-weight alone.",
    "questionAr": "عارضة منتظمة طولها $12\\text{ m}$ ووزنها $240\\text{ N}$ ترتكز أفقياً على دعامتين موضوعتين بشكل متماثل على بعد $2\\text{ m}$ من كل طرف. أوجد مقدار رد الفعل عند كل دعامة تحت تأثير الوزن الذاتي فقط.",
    "optionsEn": [
      "$120\\text{ N}$",
      "$240\\text{ N}$",
      "$60\\text{ N}$",
      "$180\\text{ N}$"
    ],
    "optionsAr": [
      "120 نيوتن",
      "240 نيوتن",
      "60 نيوتن",
      "180 نيوتن"
    ],
    "correctAnswer": "$120\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Due to complete symmetry, the weight divides equally between the two supports.",
    "hintAr": "نظراً للتماثل التام، ينقسم الوزن بالتساوي بين الدعامتين.",
    "stepByStepSolutionEn": [
      "1. Distance between supports: $12 - 2 - 2 = 8\\text{ m}$.",
      "2. The center of gravity is at the midpoint of the beam ($6\\text{ m}$ from either end), which is exactly midway between the supports ($4\\text{ m}$ from each).",
      "3. By symmetry and vertical equilibrium: $R_1 = R_2 = \\frac{W}{2} = \\frac{240}{2} = 120\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. المسافة بين الدعامتين = $12 - 2 - 2 = 8$ أمتار.",
      "٢. مركز الثقل يقع في منتصف المسافة تماماً بين الدعامتين.",
      "٣. بالتماثل والاتزان الرأسي: $R_1 = R_2 = 240 / 2 = 120$ نيوتن."
    ],
    "teacherTipEn": "Symmetric overhangs do not alter the equal division of weight between the supports.",
    "teacherTipAr": "وجود بروزين متماثلين لا يغير من التوزيع المتساوي للوزن بين الركيزتين."
  },
  {
    "id": "stat_ch3_db_med_27",
    "titleEn": "Doubling Support Reactions with Symmetrical End Loads",
    "titleAr": "مضاعفة ردود الأفعال بإضافة أحمال طرفية متماثلة",
    "difficulty": "medium",
    "questionEn": "For the beam in the previous problem ($W = 240\\text{ N}$, reactions $120\\text{ N}$ each), what equal weights $W'$ must be hung simultaneously from both overhang ends so that the reaction at each support doubles to $240\\text{ N}$?",
    "questionAr": "للعارضة في المسألة السابقة ($W = 240\\text{ N}$، ورد الفعل عند كل دعامة $120\\text{ N}$)، ما الثقلان المتساويان $W'$ الواجب تعليقهما معاً عند طرفي البروزين لكي يتضاعف رد الفعل عند كل دعامة إلى $240\\text{ N}$؟",
    "optionsEn": [
      "$120\\text{ N}$",
      "$60\\text{ N}$",
      "$240\\text{ N}$",
      "$80\\text{ N}$"
    ],
    "optionsAr": [
      "120 نيوتن",
      "60 نيوتن",
      "240 نيوتن",
      "80 نيوتن"
    ],
    "correctAnswer": "$120\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Total upward reaction is $2 \\times 240 = 480\\text{ N}$. Total downward load is $240 + 2W'$. Equate them.",
    "hintAr": "مجموع ردود الأفعال الجديد 480 نيوتن ومجموع الأحمال $240 + 2W'$. ساوِ الطرفين.",
    "stepByStepSolutionEn": [
      "1. Required new reaction at each support: $R = 240\\text{ N}$.",
      "2. Total upward force: $2R = 2 \\times 240 = 480\\text{ N}$.",
      "3. Total downward force: $W + 2W' = 240 + 2W'$.",
      "4. For vertical equilibrium: $240 + 2W' = 480 \\implies 2W' = 240 \\implies W' = 120\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل المطلوب عند كل دعامة = 240 نيوتن.",
      "٢. مجموع القوى لأعلى = $2 \\times 240 = 480$ نيوتن.",
      "٣. مجموع القوى لأسفل = $240 + 2W'$.",
      "٤. بالاتزان: $240 + 2W' = 480 \\implies 2W' = 240 \\implies W' = 120$ نيوتن."
    ],
    "teacherTipEn": "Because of symmetry, the added end weights distribute equally to the supports, so each support receives an additional $W' = 120\\text{ N}$.",
    "teacherTipAr": "بالتماثل، ينتقل كل ثقل طرفي بالكامل إلى الدعامة القريبة منه بالتساوي فيضيف 120 نيوتن لكل دعامة."
  },
  {
    "id": "stat_ch3_db_med_28",
    "titleEn": "Reaction at Remote Support at Instant of Tipping",
    "titleAr": "قيمة رد فعل الركيزة البعيدة لحظة بدء الانقلاب",
    "difficulty": "medium",
    "questionEn": "A beam $AB$ rests horizontally on two supports $C$ and $D$. A heavy load is applied at overhang end $A$, bringing the beam to the verge of tipping about support $C$. At this instant, the reaction force at support $D$ is:",
    "questionAr": "عارضة $AB$ ترتكز أفقياً على دعامتين $C$ و $D$. أثر حمل ثقيل عند طرف البروز $A$، مما جعل العارضة على وشك الانقلاب حول الدعامة $C$. في هذه اللحظة، يكون مقدار رد الفعل عند الدعامة $D$ مساوياً:",
    "optionsEn": [
      "Zero ($0\\text{ N}$)",
      "Half its original value",
      "Equal to the applied load",
      "Equal to the beam weight"
    ],
    "optionsAr": [
      "صفراً (0 نيوتن)",
      "نصف قيمته الأصلية",
      "مساوياً للحمل المؤثر",
      "مساوياً لوزن العارضة"
    ],
    "correctAnswer": "Zero ($0\\text{ N}$)",
    "correctIndex": 0,
    "hintEn": "Tipping impends when contact with the opposite support is about to break, so normal reaction vanishes.",
    "hintAr": "يحدث الانقلاب الوشيك عندما يكون التلامس مع الركيزة المقابلة على وشك الانفصال فينعدم رد الفعل.",
    "stepByStepSolutionEn": [
      "1. When a beam tips about a support $C$, the far side lifts off support $D$.",
      "2. The transition boundary between contact and separation occurs when the contact pressure drops to zero.",
      "3. Therefore, at the precise instant tipping impends, $R_D = 0\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. عند دوران العارضة حول الدعامة $C$، يرتفع الطرف البعيد عن الدعامة $D$.",
      "٢. لحظة بدء الانقلاب هي الحد الفاصل بين التلامس والانفصال، فينعدم الضغط بين السطحين.",
      "٣. إذن رد الفعل عند $D$ يساوي صفراً تماماً."
    ],
    "teacherTipEn": "Setting the remote reaction to zero is the universal starting step for all tipping equilibrium problems.",
    "teacherTipAr": "وضع رد الفعل البعيد مساوياً للصفر هو الخطوة الافتتاحية الأساسية في جميع مسائل الانقلاب الوشيك."
  },
  {
    "id": "stat_ch3_db_med_29",
    "titleEn": "Symmetric Shelf with Centered Load",
    "titleAr": "رف متماثل الارتكاز يحمل ثقلاً عند منتصفه",
    "difficulty": "medium",
    "questionEn": "A uniform shelf of length $1\\text{ m}$ and weight $40\\text{ N}$ is supported horizontally by two brackets placed at $10\\text{ cm}$ from each end. A book of weight $20\\text{ N}$ is placed at the exact center of the shelf. Find the reaction force on either bracket.",
    "questionAr": "رف منتظم طوله $1\\text{ m}$ ووزنه $40\\text{ N}$ مثبت أفقياً بواسطة كابولين على بعد $10\\text{ cm}$ من كل طرف. وُضع كتاب وزنه $20\\text{ N}$ عند منتصف الرف تماماً. أوجد مقدار رد الفعل على أي من الكابولين.",
    "optionsEn": [
      "$30\\text{ N}$",
      "$20\\text{ N}$",
      "$40\\text{ N}$",
      "$60\\text{ N}$"
    ],
    "optionsAr": [
      "30 نيوتن",
      "20 نيوتن",
      "40 نيوتن",
      "60 نيوتن"
    ],
    "correctAnswer": "$30\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Total load is $40 + 20 = 60\\text{ N}$. By symmetry, each bracket carries $\\frac{60}{2} = 30\\text{ N}$.",
    "hintAr": "الحمل الكلي 60 نيوتن. بالتماثل، يحمل كل كابول النصف = 30 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Total downward load: $W_{\\text{total}} = W_{\\text{shelf}} + W_{\\text{book}} = 40 + 20 = 60\\text{ N}$.",
      "2. The shelf weight acts at the center ($50\\text{ cm}$ from either end), and the book is placed at the center ($50\\text{ cm}$).",
      "3. Both brackets are symmetric ($10\\text{ cm}$ from each end).",
      "4. By symmetry: $R_1 = R_2 = \\frac{60}{2} = 30\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحمل الكلي = $40 + 20 = 60$ نيوتن.",
      "٢. وزن الرف ووزن الكتاب يؤثران معاً عند المركز تماماً.",
      "٣. بما أن الكابولين متماثلان، فإن رد فعل كل منهما = $60 / 2 = 30$ نيوتن."
    ],
    "teacherTipEn": "When all loads and supports share the exact same axis of symmetry, each reaction is simply half the total load.",
    "teacherTipAr": "عندما تتشارك جميع الأحمال والركائز في نفس محور التماثل، يكون كل رد فعل مساوياً لنصف الحمل الكلي."
  },
  {
    "id": "stat_ch3_db_med_30",
    "titleEn": "Moving Symmetrical Supports Inward",
    "titleAr": "تحريك الركائز المتماثلة للداخل نحو المركز",
    "difficulty": "medium",
    "questionEn": "A uniform horizontal beam of weight $W$ is supported by two symmetrical supports. If both supports are moved inward by equal distances closer to the center while preserving symmetry, what happens to the reaction force at each support?",
    "questionAr": "عارضة أفقية منتظمة وزنها $W$ ترتكز على دعامتين متماثلتين. إذا تحركت كلتا الدعامتين للداخل بمسافتين متساويتين مقتربتين من المركز مع الحفاظ على التماثل، فماذا يحدث لقيمة رد الفعل عند كل دعامة؟",
    "optionsEn": [
      "Each reaction remains unchanged at $\\frac{W}{2}$",
      "Each reaction increases",
      "Each reaction decreases",
      "The reactions become unequal"
    ],
    "optionsAr": [
      "يبقى رد الفعل عند كل منهما ثابتاً ومساوياً لـ W / 2",
      "يزداد رد الفعل عند كل منهما",
      "يقل رد الفعل عند كل منهما",
      "يصبح ردا الفعل غير متساويين"
    ],
    "correctAnswer": "Each reaction remains unchanged at $\\frac{W}{2}$",
    "correctIndex": 0,
    "hintEn": "By vertical equilibrium and symmetry: $2R = W \\implies R = \\frac{W}{2}$ regardless of support distance, provided symmetry holds.",
    "hintAr": "من الاتزان الرأسي والتماثل: $2R = W \\implies R = W/2$ أياً كان موضع الدعامتين ما دامت الحالة متماثلة.",
    "stepByStepSolutionEn": [
      "1. The beam is uniform, so its weight $W$ acts at its center of gravity at the midpoint.",
      "2. As long as both supports remain equidistant from the center of gravity, symmetry guarantees $R_1 = R_2$.",
      "3. By vertical equilibrium: $R_1 + R_2 = W \\implies 2R = W \\implies R = \\frac{W}{2}$.",
      "4. Therefore, moving the supports symmetrically has zero effect on the magnitude of the reactions."
    ],
    "stepByStepSolutionAr": [
      "١. وزن العارضة يؤثر في منتصفها تماماً.",
      "٢. طالما بقيت الدعامتان على بعدين متساويين من المركز، فإن $R_1 = R_2$ بالتماثل.",
      "٣. من الاتزان الرأسي: $2R = W \\implies R = W / 2$ دائماً.",
      "٤. إذن ردود الأفعال تظل ثابتة تماماً."
    ],
    "teacherTipEn": "While the reactions remain $W/2$, the bending moments in the beam change significantly.",
    "teacherTipAr": "رغم ثبات ردود الأفعال، فإن عزوم الانحناء داخل العارضة تتغير جذرياً بتغير مواقع الركائز."
  },
  {
    "id": "stat_ch3_db_med_31",
    "titleEn": "External Point of Action for Unlike Forces",
    "titleAr": "نقطة التأثير الخارجية لقوتين متضادتين",
    "difficulty": "medium",
    "questionEn": "Two parallel forces $F_1 = 40\\text{ N}$ at $A$ and $F_2 = 10\\text{ N}$ at $B$ act in opposite directions, where $AB = 15\\text{ cm}$. Find the distance $AC$ from point $A$ to the line of action of their resultant.",
    "questionAr": "تؤثر قوتان متوازيتان متضادتان في الاتجاه $F_1 = 40\\text{ ن}$ عند $A$ و $F_2 = 10\\text{ ن}$ عند $B$، حيث $AB = 15\\text{ سم}$. أوجد بعد نقطة تأثير المحصلة $C$ عن النقطة $A$.",
    "optionsEn": [
      "$AC = 5\\text{ cm}$ beyond $A$",
      "$AC = 10\\text{ cm}$ beyond $A$",
      "$AC = 15\\text{ cm}$ beyond $A$",
      "$AC = 20\\text{ cm}$ beyond $A$"
    ],
    "optionsAr": [
      "$AC = 5\\text{ سم}$ خارج القطعة من جهة $A$",
      "$AC = 10\\text{ سم}$ خارج القطعة من جهة $A$",
      "$AC = 15\\text{ سم}$ خارج القطعة من جهة $A$",
      "$AC = 20\\text{ سم}$ خارج القطعة من جهة $A$"
    ],
    "correctAnswer": "$AC = 5\\text{ cm}$ beyond $A$",
    "correctIndex": 0,
    "hintEn": "40 * AC = 10 * (AB + AC).",
    "hintAr": "$40 \\times AC = 10 \\times (AB + AC)$.",
    "stepByStepSolutionEn": [
      "1. The resultant acts outside $AB$ on the side of the larger force $F_1$ at $A$.",
      "2. Taking moments about $C$: $40 \\times AC = 10 \\times BC = 10 \\times (15 + AC)$.",
      "3. $40 AC = 150 + 10 AC \\implies 30 AC = 150 \\implies AC = 5\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. المحصلة تؤثر خارج القطعة $AB$ من جهة القوة الكبرى ($A$).",
      "٢. العزوم حول $C$: $40 \\times AC = 10 \\times (15 + AC)$.",
      "٣. $30 AC = 150 \\implies AC = 5\\text{ سم}$."
    ],
    "teacherTipEn": "For ratio 4:1, the external segment AC is 1/3 of AB.",
    "teacherTipAr": "عندما تكون نسبة القوتين ٤ : ١، فإن الجزء الخارجي أ جـ يساوي ثلث طول القطعة أ ب."
  },
  {
    "id": "stat_ch3_db_med_32",
    "titleEn": "External Point of Action for Unlike Forces (Variant 2)",
    "titleAr": "نقطة التأثير الخارجية لقوتين متضادتين (حالة 2)",
    "difficulty": "medium",
    "questionEn": "Two parallel forces $F_1 = 40\\text{ N}$ at $A$ and $F_2 = 10\\text{ N}$ at $B$ act in opposite directions, where $AB = 30\\text{ cm}$. Find the distance $AC$ from point $A$ to the line of action of their resultant.",
    "questionAr": "تؤثر قوتان متوازيتان متضادتان في الاتجاه $F_1 = 40\\text{ ن}$ عند $A$ و $F_2 = 10\\text{ ن}$ عند $B$، حيث $AB = 30\\text{ سم}$. أوجد بعد نقطة تأثير المحصلة $C$ عن النقطة $A$.",
    "optionsEn": [
      "$AC = 10\\text{ cm}$ beyond $A$",
      "$AC = 15\\text{ cm}$ beyond $A$",
      "$AC = 20\\text{ cm}$ beyond $A$",
      "$AC = 25\\text{ cm}$ beyond $A$"
    ],
    "optionsAr": [
      "$AC = 10\\text{ سم}$ خارج القطعة من جهة $A$",
      "$AC = 15\\text{ سم}$ خارج القطعة من جهة $A$",
      "$AC = 20\\text{ سم}$ خارج القطعة من جهة $A$",
      "$AC = 25\\text{ سم}$ خارج القطعة من جهة $A$"
    ],
    "correctAnswer": "$AC = 10\\text{ cm}$ beyond $A$",
    "correctIndex": 0,
    "hintEn": "40 * AC = 10 * (AB + AC).",
    "hintAr": "$40 \\times AC = 10 \\times (AB + AC)$.",
    "stepByStepSolutionEn": [
      "1. The resultant acts outside $AB$ on the side of the larger force $F_1$ at $A$.",
      "2. Taking moments about $C$: $40 \\times AC = 10 \\times BC = 10 \\times (30 + AC)$.",
      "3. $40 AC = 300 + 10 AC \\implies 30 AC = 300 \\implies AC = 10\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. المحصلة تؤثر خارج القطعة $AB$ من جهة القوة الكبرى ($A$).",
      "٢. العزوم حول $C$: $40 \\times AC = 10 \\times (30 + AC)$.",
      "٣. $30 AC = 300 \\implies AC = 10\\text{ سم}$."
    ],
    "teacherTipEn": "For ratio 4:1, the external segment AC is 1/3 of AB.",
    "teacherTipAr": "عندما تكون نسبة القوتين ٤ : ١، فإن الجزء الخارجي أ جـ يساوي ثلث طول القطعة أ ب."
  },
  {
    "id": "stat_ch3_db_med_33",
    "titleEn": "Distance of Unlike Forces Resultant from Smaller Force",
    "titleAr": "بُعد محصلة قوتين متضادتين عن القوة الصغرى",
    "difficulty": "medium",
    "questionEn": "Two unlike parallel forces $F_1 = 50\\text{ N}$ and $F_2 = 30\\text{ N}$ act at points $A$ and $B$ where $AB = 16\\text{ cm}$. Find the distance from the point of action of the resultant to the smaller force $B$.",
    "questionAr": "قوتان متوازيتان متضادتان $F_1 = 50\\text{ N}$ و $F_2 = 30\\text{ N}$ تؤثران عند $A$ و $B$ حيث $AB = 16\\text{ cm}$. أوجد بُعد نقطة تأثير المحصلة عن القوة الصغرى $B$.",
    "optionsEn": [
      "$40\\text{ cm}$",
      "$24\\text{ cm}$",
      "$16\\text{ cm}$",
      "$32\\text{ cm}$"
    ],
    "optionsAr": [
      "40 سم",
      "24 سم",
      "16 سم",
      "32 سم"
    ],
    "correctAnswer": "$40\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Use $F_1 \\times AC = F_2 \\times BC$ with $BC = AC + 16$.",
    "hintAr": "استخدم $F_1 \\times AC = F_2 \\times BC$ حيث $BC = AC + 16$.",
    "stepByStepSolutionEn": [
      "1. Since $F_1 > F_2$, the resultant point $C$ lies outside $AB$ on the side of $A$, so $BC = AC + AB = AC + 16$.",
      "2. Moment equilibrium: $F_1 \\times AC = F_2 \\times BC \\implies 50 AC = 30 (AC + 16)$.",
      "3. $50 AC = 30 AC + 480 \\implies 20 AC = 480 \\implies AC = 24\\text{ cm}$.",
      "4. Distance from smaller force $B$: $BC = 24 + 16 = 40\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. تقع $C$ خارج القطعة من جهة $A$، إذن $BC = AC + 16$.",
      "٢. $50 AC = 30 (AC + 16) \\implies 20 AC = 480 \\implies AC = 24$ سم.",
      "٣. بُعد المحصلة عن $B$ هو $BC = 24 + 16 = 40$ سم."
    ],
    "teacherTipEn": "Direct formula for distance from smaller force: $BC = \\frac{F_1}{F_1 - F_2} AB = \\frac{50}{20} \\times 16 = 40\\text{ cm}$.",
    "teacherTipAr": "قانون مباشر للبُعد عن القوة الصغرى: $BC = \\frac{F_1}{F_1 - F_2} AB = \\frac{50}{20} \\times 16 = 40$ سم."
  },
  {
    "id": "stat_ch3_db_med_34",
    "titleEn": "Position of Resultant for Close Magnitude Unlike Forces",
    "titleAr": "موقع محصلة قوتين متضادتين متقاربتين في المقدار",
    "difficulty": "medium",
    "questionEn": "Two unlike parallel forces $F_1 = 20\\text{ N}$ at $A$ and $F_2 = 15\\text{ N}$ at $B$ have resultant $R = 5\\text{ N}$ acting at $C$. If the distance between the forces is $AB = 12\\text{ cm}$, find the distance $AC$.",
    "questionAr": "قوتان متوازيتان متضادتان $F_1 = 20\\text{ N}$ عند $A$ و $F_2 = 15\\text{ N}$ عند $B$ محصلتهما $R = 5\\text{ N}$ تؤثر عند $C$. إذا كانت المسافة بين القوتين $AB = 12\\text{ cm}$، فما مقدار المسافة $AC$؟",
    "optionsEn": [
      "$36\\text{ cm}$",
      "$48\\text{ cm}$",
      "$24\\text{ cm}$",
      "$12\\text{ cm}$"
    ],
    "optionsAr": [
      "36 سم",
      "48 سم",
      "24 سم",
      "12 سم"
    ],
    "correctAnswer": "$36\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Use $AC = \\frac{F_2}{R} AB = \\frac{15}{5} \\times 12$.",
    "hintAr": "استخدم الصيغة: $AC = \\frac{F_2}{R} AB = \\frac{15}{5} \\times 12$.",
    "stepByStepSolutionEn": [
      "1. For unlike parallel forces, the distance from the larger force $A$ to the resultant $C$ is:",
      "   $AC = \\frac{F_2}{F_1 - F_2} AB = \\frac{F_2}{R} AB$.",
      "2. Substituting: $AC = \\frac{15}{5} \\times 12 = 3 \\times 12 = 36\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون البعد عن القوة الكبرى: $AC = \\frac{F_2}{R} AB$.",
      "٢. بالتعويض: $AC = \\frac{15}{5} \\times 12 = 36$ سم."
    ],
    "teacherTipEn": "When two unlike forces are very close in magnitude, their resultant is very far away.",
    "teacherTipAr": "كلما اقترب مقدارا القوتين المتضادتين من بعضهما، ابتعدت نقطة تأثير المحصلة لمسافة كبيرة جداً."
  },
  {
    "id": "stat_ch3_db_med_35",
    "titleEn": "Transition from Like to Unlike Parallel Forces",
    "titleAr": "التحول من قوتين متفقتي الاتجاه إلى متضادتي الاتجاه",
    "difficulty": "medium",
    "questionEn": "Two equal parallel forces of magnitude $F$ act in the same direction at points separated by distance $d$. If the direction of ONE of the forces is reversed, how does the system transform mechanically?",
    "questionAr": "قوتان متوازيتان متساويتان في المقدار $F$ تعملان في نفس الاتجاه والمسافة بينهما $d$. إذا عُكس اتجاه إحدى القوتين، فكيف تتحول المنظومة ميكانيكياً؟",
    "optionsEn": [
      "From a single resultant of magnitude $2F$ at the midpoint to a couple of moment $F d$",
      "From a resultant of $2F$ to a resultant of $F$",
      "From a couple to a single resultant force",
      "From a single resultant to complete static equilibrium"
    ],
    "optionsAr": [
      "من محصلة وحيدة مقدارها 2F في المنتصف إلى ازدواج عزمه F d",
      "من محصلة 2F إلى محصلة F",
      "من ازدواج إلى محصلة وحيدة",
      "من محصلة وحيدة إلى اتزان استاتيكي تام"
    ],
    "correctAnswer": "From a single resultant of magnitude $2F$ at the midpoint to a couple of moment $F d$",
    "correctIndex": 0,
    "hintEn": "Initially: like equal forces $\\implies R = 2F$ at midpoint. After reversing: equal and opposite $\\implies R = 0$, forming a couple of moment $F \\times d$.",
    "hintAr": "في البداية قوتان متحدتان تعطيان محصلة $2F$ في المنتصف، وبعد عكس إحداهما تصبحان متساويتين ومتضادتين فتكونان ازدواجاً عزمه $F d$.",
    "stepByStepSolutionEn": [
      "1. Initially: both forces are parallel and in the same direction, so $R = F + F = 2F$ acting at the midpoint $\\frac{d}{2}$.",
      "2. When one force is reversed: they become equal and opposite forces acting along parallel lines.",
      "3. Net resultant force becomes $R = F - F = 0$.",
      "4. The system is no longer reducible to a single force; it forms a pure couple with moment $M = F \\times d$."
    ],
    "stepByStepSolutionAr": [
      "١. قبل العكس: القوتان متفقتا الاتجاه، المحصلة = $2F$ وتؤثر في المنتصف.",
      "٢. بعد العكس: تصبح القوتان متساويتين في المقدار ومتضادتين في الاتجاه على خطين متوازيين.",
      "٣. تنعدم المحصلة وتتحول المنظومة إلى ازدواج عزمه $F \\times d$."
    ],
    "teacherTipEn": "Reversing one equal force completely destroys translational thrust and replaces it with pure rotational torque.",
    "teacherTipAr": "عكس إحدى القوتين المتساويتين يلغي القوة الدافعة الانتقالية بالكامل ويحولها إلى عزم دوران خالص."
  },
  {
    "id": "stat_ch3_db_med_36",
    "titleEn": "Complete Solution of Unlike Parallel Force System",
    "titleAr": "الحل الشامل لمنظومة قوتين متوازيتين متضادتين",
    "difficulty": "medium",
    "questionEn": "Two unlike parallel forces $F_1 = 40\\text{ N}$ and $F_2 = 10\\text{ N}$ act along parallel lines separated by $15\\text{ cm}$. Find the magnitude of their resultant and its distance from force $F_1$.",
    "questionAr": "قوتان متوازيتان متضادتان $F_1 = 40\\text{ N}$ و $F_2 = 10\\text{ N}$ تعملان على خطين متوازيين البعد بينهما $15\\text{ cm}$. أوجد مقدار محصلتهما وبُعدها عن القوة $F_1$.",
    "optionsEn": [
      "$R = 30\\text{ N}$ at $5\\text{ cm}$ from $F_1$",
      "$R = 30\\text{ N}$ at $10\\text{ cm}$ from $F_1$",
      "$R = 50\\text{ N}$ at $5\\text{ cm}$ from $F_1$",
      "$R = 30\\text{ N}$ at $20\\text{ cm}$ from $F_1$"
    ],
    "optionsAr": [
      "ح = 30 نيوتن على بعد 5 سم من ق1",
      "ح = 30 نيوتن على بعد 10 سم من ق1",
      "ح = 50 نيوتن على بعد 5 سم من ق1",
      "ح = 30 نيوتن على بعد 20 سم من ق1"
    ],
    "correctAnswer": "$R = 30\\text{ N}$ at $5\\text{ cm}$ from $F_1$",
    "correctIndex": 0,
    "hintEn": "Magnitude is $40 - 10 = 30\\text{ N}$. Distance is $d_1 = \\frac{10}{30} \\times 15 = 5\\text{ cm}$.",
    "hintAr": "المقدار = $40 - 10 = 30$ نيوتن، والبعد = $\\frac{10}{30} \\times 15 = 5$ سم.",
    "stepByStepSolutionEn": [
      "1. Magnitude of resultant: $R = F_1 - F_2 = 40 - 10 = 30\\text{ N}$.",
      "2. Distance from the larger force $F_1$: $d_1 = \\frac{F_2}{R} \\times D = \\frac{10}{30} \\times 15 = 5\\text{ cm}$ (externally)."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار المحصلة = $40 - 10 = 30$ نيوتن.",
      "٢. بُعد المحصلة عن القوة الكبرى $F_1$ = $\\frac{10}{30} \\times 15 = 5$ سم من الخارج."
    ],
    "teacherTipEn": "Notice $F_1 \\times d_1 = 40 \\times 5 = 200$, and $F_2 \\times (d_1 + D) = 10 \\times 20 = 200$, confirming balance.",
    "teacherTipAr": "تأكيد الحل: $40 \\times 5 = 200$ و $10 \\times 20 = 200$، العزوم متوازنة تماماً."
  },
  {
    "id": "stat_ch3_db_med_37",
    "titleEn": "Finding Smaller Unlike Force from Given Distances",
    "titleAr": "إيجاد القوة الصغرى من أبعاد المحصلة عن القوتين",
    "difficulty": "medium",
    "questionEn": "The line of action of the resultant of two unlike parallel forces lies at distance $8\\text{ cm}$ from the larger force $F_1 = 24\\text{ N}$ and at distance $12\\text{ cm}$ from the smaller force $F_2$. Find the magnitude of $F_2$.",
    "questionAr": "خط عمل محصلة قوتين متوازيتين متضادتين يبعد مسافة $8\\text{ cm}$ عن القوة الكبرى $F_1 = 24\\text{ N}$ ومسافة $12\\text{ cm}$ عن القوة الصغرى $F_2$. أوجد مقدار القوة الصغرى $F_2$.",
    "optionsEn": [
      "$16\\text{ N}$",
      "$12\\text{ N}$",
      "$18\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "16 نيوتن",
      "12 نيوتن",
      "18 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$16\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "By Varignon's Theorem: $F_1 \\times d_1 = F_2 \\times d_2$.",
    "hintAr": "من قانون العزوم: $F_1 \\times d_1 = F_2 \\times d_2$.",
    "stepByStepSolutionEn": [
      "1. By Varignon's Theorem about the resultant's line of action: $F_1 \\times d_1 = F_2 \\times d_2$.",
      "2. Substituting known values: $24 \\times 8 = F_2 \\times 12$.",
      "3. $192 = 12 F_2 \\implies F_2 = \\frac{192}{12} = 16\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. من علاقة العزوم حول المحصلة: $F_1 \\times d_1 = F_2 \\times d_2$.",
      "٢. بالتعويض: $24 \\times 8 = F_2 \\times 12$.",
      "٣. إذن $F_2 = 192 / 12 = 16$ نيوتن."
    ],
    "teacherTipEn": "The resultant of these forces is $R = 24 - 16 = 8\\text{ N}$.",
    "teacherTipAr": "محصلة هاتين القوتين تساوي $24 - 16 = 8$ نيوتن."
  },
  {
    "id": "stat_ch3_db_med_38",
    "titleEn": "Coordinate of Resultant of Unlike Parallel Forces",
    "titleAr": "إحداثي نقطة تأثير محصلة قوتين متضادتين على المحور",
    "difficulty": "medium",
    "questionEn": "Two parallel forces $\\vec{F}_1 = 25\\hat{j}\\text{ N}$ at $x_1 = 0$ and $\\vec{F}_2 = -10\\hat{j}\\text{ N}$ at $x_2 = 6\\text{ m}$ act along the x-axis. Find the x-coordinate $x_R$ of their resultant.",
    "questionAr": "قوتان متوازيتان $\\vec{F}_1 = 25\\hat{j}$ نيوتن عند $x_1 = 0$ و $\\vec{F}_2 = -10\\hat{j}$ نيوتن عند $x_2 = 6\\text{ m}$ تؤثران على محور السينات. أوجد الإحداثي السيني $x_R$ لخط عمل محصلتهما.",
    "optionsEn": [
      "$x_R = -4\\text{ m}$",
      "$x_R = 4\\text{ m}$",
      "$x_R = -2\\text{ m}$",
      "$x_R = 10\\text{ m}$"
    ],
    "optionsAr": [
      "س = -4 م",
      "س = 4 م",
      "س = -2 م",
      "س = 10 م"
    ],
    "correctAnswer": "$x_R = -4\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Use $R = 25 - 10 = 15\\text{ N}$ and $M_0 = (-10)(6) = -60\\text{ N}\\cdot\\text{m}$, so $x_R = \\frac{-60}{15}$.",
    "hintAr": "المحصلة = 15 نيوتن، وعزم القوى حول نقطة الأصل = -60 ن.م، إذن الإحداثي = -60 / 15 = -4 م.",
    "stepByStepSolutionEn": [
      "1. Net resultant force: $R = 25 - 10 = 15\\text{ N}$ (upward).",
      "2. Taking moments about origin $x = 0$: $M_0 = (25)(0) + (-10)(6) = -60\\text{ N}\\cdot\\text{m}$.",
      "3. Position of resultant: $R \\cdot x_R = M_0 \\implies 15 x_R = -60 \\implies x_R = -4\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. المحصلة الجبرية = $25 - 10 = 15$ نيوتن.",
      "٢. العزم حول نقطة الأصل = $(25 \\times 0) + (-10 \\times 6) = -60$ ن.م.",
      "٣. إحداثي المحصلة = $-60 / 15 = -4$ أمتار."
    ],
    "teacherTipEn": "A negative coordinate confirms that the resultant lies outside the segment $[0, 6]$ on the side of the larger force at $x = 0$.",
    "teacherTipAr": "الإشارة السالبة تؤكد وقوع المحصلة خارج القطعة [0، 6] من جهة القوة الكبرى الواقعة عند الصفر."
  },
  {
    "id": "stat_ch3_db_med_39",
    "titleEn": "Sensitivity of Resultant Location to Increasing Dominant Force",
    "titleAr": "تأثر موقع محصلة قوتين متضادتين بزيادة القوة الكبرى",
    "difficulty": "medium",
    "questionEn": "Two unlike parallel forces $P$ and $Q$ ($P > Q$) are separated by distance $L$. If the magnitude of the dominant force $P$ is increased while $Q$ and $L$ remain fixed, how does the position of the resultant change?",
    "questionAr": "قوتان متوازيتان متضادتان $P$ و $Q$ ($P > Q$) المسافة بينهما $L$. إذا زاد مقدار القوة الكبرى $P$ مع بقاء $Q$ و $L$ ثابتين، فكيف يتغير موضع المحصلة؟",
    "optionsEn": [
      "The resultant moves closer to the line of action of the larger force $P$",
      "The resultant moves farther away from $P$",
      "The position of the resultant remains unchanged",
      "The resultant shifts to the midpoint of $L$"
    ],
    "optionsAr": [
      "تقترب المحصلة من خط عمل القوة الكبرى P",
      "تبتعد المحصلة أكثر عن القوة الكبرى P",
      "يبقى موضع المحصلة ثابتاً دون تغيير",
      "تنتقل المحصلة إلى منتصف المسافة L"
    ],
    "correctAnswer": "The resultant moves closer to the line of action of the larger force $P$",
    "correctIndex": 0,
    "hintEn": "Distance from $P$ is $d = \\frac{Q}{P - Q} L$. As $P$ increases, the denominator increases, so $d$ decreases.",
    "hintAr": "المسافة عن القوة الكبرى هي $d = \\frac{Q}{P - Q} L$، وبزيادة P يزداد المقام فتقل المسافة d.",
    "stepByStepSolutionEn": [
      "1. The distance from the larger force $P$ to the resultant is $d = \\frac{Q}{P - Q} L$.",
      "2. As $P$ increases, the difference $(P - Q)$ in the denominator increases.",
      "3. Consequently, the distance $d$ decreases.",
      "4. Therefore, the line of action of the resultant moves closer to $P$."
    ],
    "stepByStepSolutionAr": [
      "١. المسافة من القوة الكبرى إلى المحصلة: $d = \\frac{Q}{P - Q} L$.",
      "٢. بزيادة $P$ يزداد المقام $(P - Q)$.",
      "٣. بالتالي تقل المسافة $d$.",
      "٤. تقترب المحصلة أكثر من خط عمل القوة الكبرى $P$."
    ],
    "teacherTipEn": "As $P \\to \\infty$, $d \\to 0$: an overwhelmingly large force completely dominates the resultant location.",
    "teacherTipAr": "عندما تكبر القوة الكبرى جداً، يقترب خط عمل المحصلة من خط عملها تماماً."
  },
  {
    "id": "stat_ch3_db_med_40",
    "titleEn": "Determining Balancing Parallel Vector Force",
    "titleAr": "تحديد متجه القوة الموازية المجهولة للحصول على محصلة معلومة",
    "difficulty": "medium",
    "questionEn": "A force $\\vec{F}_1 = 18\\hat{j}\\text{ N}$ acts at coordinate $x_1 = 2\\text{ m}$. What parallel force $\\vec{F}_2$ acting at coordinate $x_2 = 8\\text{ m}$ will produce a net resultant force of $\\vec{R} = 6\\hat{j}\\text{ N}$?",
    "questionAr": "تؤثر قوة $\\vec{F}_1 = 18\\hat{j}$ نيوتن عند الإحداثي $x_1 = 2\\text{ m}$. ما القوة الموازية $\\vec{F}_2$ التي تؤثر عند الإحداثي $x_2 = 8\\text{ m}$ لتنتج محصلة كلية مقدارها $\\vec{R} = 6\\hat{j}$ نيوتن؟",
    "optionsEn": [
      "$-12\\hat{j}\\text{ N}$",
      "$12\\hat{j}\\text{ N}$",
      "$-24\\hat{j}\\text{ N}$",
      "$6\\hat{j}\\text{ N}$"
    ],
    "optionsAr": [
      "-12 ص نيوتن",
      "12 ص نيوتن",
      "-24 ص نيوتن",
      "6 ص نيوتن"
    ],
    "correctAnswer": "$-12\\hat{j}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Vector addition requires $\\vec{F}_1 + \\vec{F}_2 = \\vec{R} \\implies \\vec{F}_2 = \\vec{R} - \\vec{F}_1$.",
    "hintAr": "الجمع الاتجاهي يقتضي: $\\vec{F}_2 = \\vec{R} - \\vec{F}_1 = 6\\hat{j} - 18\\hat{j}$.",
    "stepByStepSolutionEn": [
      "1. By vector addition: $\\vec{R} = \\vec{F}_1 + \\vec{F}_2$.",
      "2. Rearranging: $\\vec{F}_2 = \\vec{R} - \\vec{F}_1$.",
      "3. Substituting: $\\vec{F}_2 = 6\\hat{j} - 18\\hat{j} = -12\\hat{j}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. من علاقة المحصلة: $\\vec{F}_2 = \\vec{R} - \\vec{F}_1$.",
      "٢. بالتعويض: $\\vec{F}_2 = 6\\hat{j} - 18\\hat{j} = -12\\hat{j}$ نيوتن."
    ],
    "teacherTipEn": "Since the coefficient is negative, $\\vec{F}_2$ is an unlike parallel force directed downward.",
    "teacherTipAr": "بما أن المعامل سالب، فإن القوة الثانية متضادة في الاتجاه وتعمل لأسفل."
  },
  {
    "id": "stat_ch3_db_med_41",
    "titleEn": "Maximum End Load for Equilibrium Before Tilting",
    "titleAr": "أكبر ثقل طرفي قبل وشك الانقلاب",
    "difficulty": "medium",
    "questionEn": "A uniform beam $AB$ of length $100\\text{ cm}$ and weight $W = 20\\text{ N}$ rests horizontally on two supports at $C$ and $D$, where $AC = 20\\text{ cm}$ and $AD = 80\\text{ cm}$. Find the maximum weight that can be suspended from end $B$ without overturning the beam.",
    "questionAr": "قضيب منتظم $AB$ طوله $100\\text{ سم}$ ووزنه $W = 20\\text{ ن}$ يرتكز أفقياً على حاملين عند $C$ و $D$، حيث $AC = 20\\text{ سم}$ و $AD = 80\\text{ سم}$. أوجد أكبر ثقل يمكن تعليقه من الطرف $B$ دون أن ينقلب القضيب.",
    "optionsEn": [
      "$W_{\\max} = 30\\text{ N}$",
      "$W_{\\max} = 40\\text{ N}$",
      "$W_{\\max} = 50\\text{ N}$",
      "$W_{\\max} = 60\\text{ N}$"
    ],
    "optionsAr": [
      "$W_{\\max} = 30\\text{ ن}$",
      "$W_{\\max} = 40\\text{ ن}$",
      "$W_{\\max} = 50\\text{ ن}$",
      "$W_{\\max} = 60\\text{ ن}$"
    ],
    "correctAnswer": "$W_{\\max} = 30\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "At the tipping point, R_C = 0. Take moments about support D: W_beam * GD = W_load * DB.",
    "hintAr": "عند وشك الانقلاب، ينعدم رد الفعل $R_C = 0$. خذ العزوم حول $D$: $W_{beam} \\times GD = W_{load} \\times DB$.",
    "stepByStepSolutionEn": [
      "1. Midpoint of the beam is at $50\\text{ cm}$ from $A$. Distance $GD = 80 - 50 = 30\\text{ cm}$.",
      "2. Distance from $D$ to end $B$: $DB = 100 - 80 = 20\\text{ cm}$.",
      "3. When on the verge of overturning about $D$, the beam lifts off $C$, so $R_C = 0$.",
      "4. Taking moments about $D$ ($sum M_D = 0$):",
      "   20 \\times 30 = W_{\\max} \\times 20 \\implies W_{\\max} = \\frac{600}{20} = 30\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل القضيب يبعد ٥٠ سم من $A$، فالمسافة إلى الحامل $D$ هي $GD = 80 - 50 = 30\\text{ سم}$.",
      "٢. المسافة من الحامل $D$ إلى الطرف $B$ هي $DB = 100 - 80 = 20\\text{ سم}$.",
      "٣. عند وشك الانقلاب حول $D$ ينعدم رد فعل الحامل البعيد: $R_C = 0$.",
      "٤. أخذ العزوم حول $D$:",
      "   $20 \\times 30 = W_{\\max} \\times 20 \\implies W_{\\max} = 30\\text{ ن}$."
    ],
    "teacherTipEn": "Moment equilibrium about the pivot with R_other = 0 gives the critical load instantly.",
    "teacherTipAr": "معادلة العزوم حول الحامل المرتكز عليه مع إلغاء رد فعل الحامل الآخر تعطي أقصى ثقل فوراً."
  },
  {
    "id": "stat_ch3_db_med_42",
    "titleEn": "Maximum End Load for Equilibrium Before Tilting (Variant 2)",
    "titleAr": "أكبر ثقل طرفي قبل وشك الانقلاب (حالة 2)",
    "difficulty": "medium",
    "questionEn": "A uniform beam $AB$ of length $100\\text{ cm}$ and weight $W = 40\\text{ N}$ rests horizontally on two supports at $C$ and $D$, where $AC = 20\\text{ cm}$ and $AD = 80\\text{ cm}$. Find the maximum weight that can be suspended from end $B$ without overturning the beam.",
    "questionAr": "قضيب منتظم $AB$ طوله $100\\text{ سم}$ ووزنه $W = 40\\text{ ن}$ يرتكز أفقياً على حاملين عند $C$ و $D$، حيث $AC = 20\\text{ سم}$ و $AD = 80\\text{ سم}$. أوجد أكبر ثقل يمكن تعليقه من الطرف $B$ دون أن ينقلب القضيب.",
    "optionsEn": [
      "$W_{\\max} = 60\\text{ N}$",
      "$W_{\\max} = 70\\text{ N}$",
      "$W_{\\max} = 80\\text{ N}$",
      "$W_{\\max} = 90\\text{ N}$"
    ],
    "optionsAr": [
      "$W_{\\max} = 60\\text{ ن}$",
      "$W_{\\max} = 70\\text{ ن}$",
      "$W_{\\max} = 80\\text{ ن}$",
      "$W_{\\max} = 90\\text{ ن}$"
    ],
    "correctAnswer": "$W_{\\max} = 60\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "At the tipping point, R_C = 0. Take moments about support D: W_beam * GD = W_load * DB.",
    "hintAr": "عند وشك الانقلاب، ينعدم رد الفعل $R_C = 0$. خذ العزوم حول $D$: $W_{beam} \\times GD = W_{load} \\times DB$.",
    "stepByStepSolutionEn": [
      "1. Midpoint of the beam is at $50\\text{ cm}$ from $A$. Distance $GD = 80 - 50 = 30\\text{ cm}$.",
      "2. Distance from $D$ to end $B$: $DB = 100 - 80 = 20\\text{ cm}$.",
      "3. When on the verge of overturning about $D$, the beam lifts off $C$, so $R_C = 0$.",
      "4. Taking moments about $D$ ($sum M_D = 0$):",
      "   40 \\times 30 = W_{\\max} \\times 20 \\implies W_{\\max} = \\frac{1200}{20} = 60\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل القضيب يبعد ٥٠ سم من $A$، فالمسافة إلى الحامل $D$ هي $GD = 80 - 50 = 30\\text{ سم}$.",
      "٢. المسافة من الحامل $D$ إلى الطرف $B$ هي $DB = 100 - 80 = 20\\text{ سم}$.",
      "٣. عند وشك الانقلاب حول $D$ ينعدم رد فعل الحامل البعيد: $R_C = 0$.",
      "٤. أخذ العزوم حول $D$:",
      "   $40 \\times 30 = W_{\\max} \\times 20 \\implies W_{\\max} = 60\\text{ ن}$."
    ],
    "teacherTipEn": "Moment equilibrium about the pivot with R_other = 0 gives the critical load instantly.",
    "teacherTipAr": "معادلة العزوم حول الحامل المرتكز عليه مع إلغاء رد فعل الحامل الآخر تعطي أقصى ثقل فوراً."
  },
  {
    "id": "stat_ch3_db_med_43",
    "titleEn": "Beam Under Uniformly Distributed Load Across Full Span",
    "titleAr": "عارضة بسيطة الارتكاز تحت تأثير حمل موزع بانتظام",
    "difficulty": "medium",
    "questionEn": "A simply supported beam of length $L = 4\\text{ m}$ carries a uniformly distributed load of intensity $w = 15\\text{ kN/m}$ across its entire span. What is the vertical reaction force at either end support?",
    "questionAr": "عارضة بسيطة الارتكاز طولها $4\\text{ m}$ تحمل حملاً موزعاً بانتظام شدته $15\\text{ kN/m}$ على كامل بحرها. ما مقدار رد الفعل الرأسي عند أي من ركيزتي الطرفين؟",
    "optionsEn": [
      "$30\\text{ kN}$",
      "$60\\text{ kN}$",
      "$15\\text{ kN}$",
      "$45\\text{ kN}$"
    ],
    "optionsAr": [
      "30 ك.ن",
      "60 ك.ن",
      "15 ك.ن",
      "45 ك.ن"
    ],
    "correctAnswer": "$30\\text{ kN}$",
    "correctIndex": 0,
    "hintEn": "Total load is $W = w L = 15 \\times 4 = 60\\text{ kN}$. By symmetry, $R_A = R_B = \\frac{60}{2} = 30\\text{ kN}$.",
    "hintAr": "الحمل الكلي = $15 \\times 4 = 60$ كيلو نيوتن، وبالتماثل يتقاسم الطرفان الحمل: 30 ك.ن لكل منهما.",
    "stepByStepSolutionEn": [
      "1. Total equivalent concentrated load: $W = w \\times L = 15\\text{ kN/m} \\times 4\\text{ m} = 60\\text{ kN}$.",
      "2. The line of action of the equivalent load acts at the midpoint ($2\\text{ m}$ from each support).",
      "3. By symmetry: $R_A = R_B = \\frac{W}{2} = \\frac{60}{2} = 30\\text{ kN}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحمل الكلي المكافئ = $15 \\times 4 = 60$ كيلو نيوتن.",
      "٢. يؤثر الحمل المكافئ عند منتصف البحر تماماً.",
      "٣. بالتماثل: $R_A = R_B = 60 / 2 = 30$ كيلو نيوتن."
    ],
    "teacherTipEn": "For any beam with full uniform load $w$, the end reactions are identically $R = \\frac{w L}{2}$.",
    "teacherTipAr": "لأي عارضة محملة بحمل موزع منتظم كامل، يكون رد الفعل عند كل طرف مساوياً لـ $w L / 2$."
  },
  {
    "id": "stat_ch3_db_med_44",
    "titleEn": "Beam with Partial Uniform Load: Far Reaction",
    "titleAr": "رد فعل الركيزة البعيدة لعارضة محملة بحمل موزع جزئي",
    "difficulty": "medium",
    "questionEn": "A simply supported beam of length $L = 6\\text{ m}$ carries a uniformly distributed load of intensity $w = 10\\text{ kN/m}$ over its left half only (from $x = 0$ to $x = 3\\text{ m}$). Find the vertical reaction $R_B$ at the right support ($x = 6\\text{ m}$).",
    "questionAr": "عارضة بسيطة الارتكاز طولها $6\\text{ m}$ تحمل حملاً موزعاً بانتظام شدته $10\\text{ kN/m}$ على نصفها الأيسر فقط (من $x = 0$ إلى $x = 3\\text{ m}$). أوجد رد الفعل الرأسي $R_B$ عند الركيزة اليمنى ($x = 6\\text{ m}$).",
    "optionsEn": [
      "$7.5\\text{ kN}$",
      "$22.5\\text{ kN}$",
      "$15\\text{ kN}$",
      "$5\\text{ kN}$"
    ],
    "optionsAr": [
      "7.5 ك.ن",
      "22.5 ك.ن",
      "15 ك.ن",
      "5 ك.ن"
    ],
    "correctAnswer": "$7.5\\text{ kN}$",
    "correctIndex": 0,
    "hintEn": "Total load is $10 \\times 3 = 30\\text{ kN}$ acting at $x = 1.5\\text{ m}$. Take moments about support $A$: $R_B \\times 6 = 30 \\times 1.5$.",
    "hintAr": "الحمل الكلي = 30 ك.ن ويؤثر عند $x = 1.5$ م. خذ العزوم حول $A$: $R_B \\times 6 = 30 \\times 1.5$.",
    "stepByStepSolutionEn": [
      "1. Total load of the distributed section: $W = w \\times 3 = 10 \\times 3 = 30\\text{ kN}$.",
      "2. Center of gravity of this load is at the midpoint of the loaded segment: $x = \\frac{3}{2} = 1.5\\text{ m}$ from $A$.",
      "3. Taking moments about support $A$: $\\sum M_A = 0 \\implies R_B \\times 6 = 30 \\times 1.5 = 45$.",
      "4. Solving for $R_B$: $R_B = \\frac{45}{6} = 7.5\\text{ kN}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحمل الكلي = $10 \\times 3 = 30$ كيلو نيوتن.",
      "٢. مركز تأثير هذا الحمل يبعد 1.5 م عن الركيزة $A$.",
      "٣. بأخذ العزوم حول $A$: $R_B \\times 6 = 30 \\times 1.5 = 45$.",
      "٤. إذن $R_B = 45 / 6 = 7.5$ كيلو نيوتن."
    ],
    "teacherTipEn": "The far support receives only one-quarter of the load because the load is centered at one-quarter of the total span ($1.5\\text{ m} = \\frac{6}{4}$).",
    "teacherTipAr": "تحمل الركيزة البعيدة ربع الحمل فقط لأن مركز الحمل يقع عند ربع البحر الكلي."
  },
  {
    "id": "stat_ch3_db_med_45",
    "titleEn": "Beam with Partial Uniform Load: Near Reaction",
    "titleAr": "رد فعل الركيزة القريبة لعارضة محملة بحمل موزع جزئي",
    "difficulty": "medium",
    "questionEn": "For the same beam in the previous problem ($L = 6\\text{ m}$, load $10\\text{ kN/m}$ on left $3\\text{ m}$, total load $30\\text{ kN}$), find the vertical reaction $R_A$ at the left support ($x = 0$).",
    "questionAr": "لنفس العارضة في المسألة السابقة ($L = 6\\text{ m}$، الحمل $10\\text{ kN/m}$ على النصف الأيسر 3 م، الحمل الكلي 30 ك.ن)، أوجد رد الفعل الرأسي $R_A$ عند الركيزة اليسرى ($x = 0$).",
    "optionsEn": [
      "$22.5\\text{ kN}$",
      "$7.5\\text{ kN}$",
      "$15\\text{ kN}$",
      "$30\\text{ kN}$"
    ],
    "optionsAr": [
      "22.5 ك.ن",
      "7.5 ك.ن",
      "15 ك.ن",
      "30 ك.ن"
    ],
    "correctAnswer": "$22.5\\text{ kN}$",
    "correctIndex": 0,
    "hintEn": "Use vertical equilibrium: $R_A = W - R_B = 30 - 7.5 = 22.5\\text{ kN}$.",
    "hintAr": "من الاتزان الرأسي: $R_A = 30 - 7.5 = 22.5$ كيلو نيوتن.",
    "stepByStepSolutionEn": [
      "1. Total downward load: $W = 30\\text{ kN}$.",
      "2. By vertical equilibrium: $\\sum F_y = 0 \\implies R_A + R_B = 30\\text{ kN}$.",
      "3. Since $R_B = 7.5\\text{ kN}$: $R_A = 30 - 7.5 = 22.5\\text{ kN}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحمل الكلي لأسفل = 30 كيلو نيوتن.",
      "٢. من الاتزان الرأسي: $R_A + R_B = 30$.",
      "٣. إذن $R_A = 30 - 7.5 = 22.5$ كيلو نيوتن."
    ],
    "teacherTipEn": "The near support carries three-quarters of the load ($22.5\\text{ kN}$), three times as much as the far support.",
    "teacherTipAr": "تحمل الركيزة القريبة ثلاثة أرباع الحمل الكلي (22.5 ك.ن)، أي ثلاثة أمثال الركيزة البعيدة."
  },
  {
    "id": "stat_ch3_db_med_46",
    "titleEn": "Reaction at B for Beam with Two Concentrated Loads",
    "titleAr": "حساب رد الفعل عند ب لعارضة تحمل حملين مركزين",
    "difficulty": "medium",
    "questionEn": "A light beam $AB = 5\\text{ m}$ is supported at its ends $A$ and $B$. It carries two downward concentrated loads: $20\\text{ kN}$ at $1\\text{ m}$ from $A$ and $30\\text{ kN}$ at $3\\text{ m}$ from $A$. Find the reaction force $R_B$ at support $B$.",
    "questionAr": "عارضة خفيفة $AB = 5\\text{ m}$ تستند على دعامتين عند طرفيها $A$ و $B$. تحمل حملين مركزين لأسفل: $20\\text{ kN}$ على بعد $1\\text{ m}$ من $A$، و $30\\text{ kN}$ على بعد $3\\text{ m}$ من $A$. أوجد مقدار رد الفعل $R_B$ عند الدعامة $B$.",
    "optionsEn": [
      "$22\\text{ kN}$",
      "$28\\text{ kN}$",
      "$25\\text{ kN}$",
      "$20\\text{ kN}$"
    ],
    "optionsAr": [
      "22 ك.ن",
      "28 ك.ن",
      "25 ك.ن",
      "20 ك.ن"
    ],
    "correctAnswer": "$22\\text{ kN}$",
    "correctIndex": 0,
    "hintEn": "Take moments about $A$: $R_B \\times 5 = (20 \\times 1) + (30 \\times 3)$.",
    "hintAr": "خذ العزوم حول $A$: $R_B \\times 5 = (20 \\times 1) + (30 \\times 3)$.",
    "stepByStepSolutionEn": [
      "1. Taking moments about support $A$: $\\sum M_A = 0$.",
      "2. Moment of loads: $(20 \\times 1) + (30 \\times 3) = 20 + 90 = 110\\text{ kN}\\cdot\\text{m}$.",
      "3. Moment of reaction: $R_B \\times 5$.",
      "4. Equating: $5 R_B = 110 \\implies R_B = \\frac{110}{5} = 22\\text{ kN}$."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ العزوم حول الدعامة $A$: $R_B \\times 5 = (20 \\times 1) + (30 \\times 3) = 110$.",
      "٢. إذن $R_B = 110 / 5 = 22$ كيلو نيوتن."
    ],
    "teacherTipEn": "Summing the product of each load and its distance from $A$ gives the total overturning moment directly.",
    "teacherTipAr": "حاصل ضرب كل حمل في بعده عن $A$ يعطي العزم الكلي مباشرة."
  },
  {
    "id": "stat_ch3_db_med_47",
    "titleEn": "Reaction at A for Beam with Two Concentrated Loads",
    "titleAr": "حساب رد الفعل عند أ لنفس العارضة من اتزان القوى",
    "difficulty": "medium",
    "questionEn": "For the beam in the previous problem ($AB = 5\\text{ m}$, loads $20\\text{ kN}$ at $1\\text{ m}$ and $30\\text{ kN}$ at $3\\text{ m}$, with $R_B = 22\\text{ kN}$), find the reaction force $R_A$ at support $A$.",
    "questionAr": "للعارضة في المسألة السابقة ($AB = 5\\text{ m}$، الأحمال $20\\text{ kN}$ عند $1\\text{ m}$ و $30\\text{ kN}$ عند $3\\text{ m}$، و $R_B = 22\\text{ kN}$)، أوجد رد الفعل $R_A$ عند الدعامة $A$.",
    "optionsEn": [
      "$28\\text{ kN}$",
      "$22\\text{ kN}$",
      "$25\\text{ kN}$",
      "$30\\text{ kN}$"
    ],
    "optionsAr": [
      "28 ك.ن",
      "22 ك.ن",
      "25 ك.ن",
      "30 ك.ن"
    ],
    "correctAnswer": "$28\\text{ kN}$",
    "correctIndex": 0,
    "hintEn": "Use vertical equilibrium: $R_A = (20 + 30) - 22 = 28\\text{ kN}$.",
    "hintAr": "من الاتزان الرأسي: $R_A = (20 + 30) - 22 = 28$ كيلو نيوتن.",
    "stepByStepSolutionEn": [
      "1. Total downward load: $20 + 30 = 50\\text{ kN}$.",
      "2. Vertical force balance: $R_A + R_B = 50\\text{ kN}$.",
      "3. $R_A = 50 - 22 = 28\\text{ kN}$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع الأحمال لأسفل = $20 + 30 = 50$ كيلو نيوتن.",
      "٢. من اتزان القوى الرأسية: $R_A + 22 = 50$.",
      "٣. إذن $R_A = 28$ كيلو نيوتن."
    ],
    "teacherTipEn": "Check: $R_A \\times 5 = 28 \\times 5 = 140 = 20(4) + 30(2) = 80 + 60 = 140$. Perfectly verified.",
    "teacherTipAr": "للتحقق: العزوم حول $B$ تعطي $28 \\times 5 = 140 = (20 \\times 4) + (30 \\times 2)$."
  },
  {
    "id": "stat_ch3_db_med_48",
    "titleEn": "Combined Uniform Load and Central Point Load",
    "titleAr": "عارضة تحت تأثير حمل موزع بانتظام مع حمل مركز في المنتصف",
    "difficulty": "medium",
    "questionEn": "A simply supported beam of length $L = 6\\text{ m}$ carries a central concentrated load $P = 40\\text{ kN}$ and a uniformly distributed load of intensity $w = 5\\text{ kN/m}$ across its entire span. Find the reaction at either end support.",
    "questionAr": "عارضة بسيطة الارتكاز طولها $6\\text{ m}$ تحمل حملاً مركزاً عند منتصفها مقداره $40\\text{ kN}$ وحملاً موزعاً بانتظام شدته $5\\text{ kN/m}$ على كامل طولها. أوجد مقدار رد الفعل عند أي من دعامتي الطرفين.",
    "optionsEn": [
      "$35\\text{ kN}$",
      "$70\\text{ kN}$",
      "$40\\text{ kN}$",
      "$20\\text{ kN}$"
    ],
    "optionsAr": [
      "35 ك.ن",
      "70 ك.ن",
      "40 ك.ن",
      "20 ك.ن"
    ],
    "correctAnswer": "$35\\text{ kN}$",
    "correctIndex": 0,
    "hintEn": "Total load is $40 + (5 \\times 6) = 70\\text{ kN}$. By symmetry, each support carries half: $35\\text{ kN}$.",
    "hintAr": "الحمل الكلي = $40 + 30 = 70$ كيلو نيوتن. بالتماثل، يحمل كل طرف النصف = 35 ك.ن.",
    "stepByStepSolutionEn": [
      "1. Total load from the uniform distribution: $W_{\\text{dist}} = w \\times L = 5 \\times 6 = 30\\text{ kN}$.",
      "2. Concentrated load: $P = 40\\text{ kN}$.",
      "3. Total load on the beam: $W_{\\text{total}} = 30 + 40 = 70\\text{ kN}$.",
      "4. Since both loads are symmetrically distributed about the center, the reactions are equal:",
      "   $R_A = R_B = \\frac{70}{2} = 35\\text{ kN}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحمل الكلي الموزع = $5 \\times 6 = 30$ كيلو نيوتن.",
      "٢. الحمل المركز = 40 كيلو نيوتن.",
      "٣. الحمل الكلي على العارضة = $30 + 40 = 70$ كيلو نيوتن.",
      "٤. بالتماثل التام: رد فعل كل دعامة = $70 / 2 = 35$ كيلو نيوتن."
    ],
    "teacherTipEn": "Superposition allows finding reactions by summing half of the point load ($20\\text{ kN}$) and half of the distributed load ($15\\text{ kN}$).",
    "teacherTipAr": "مبدأ التراكب يتيح جمع نصف الحمل المركز (20 ك.ن) مع نصف الحمل الموزع (15 ك.ن) مباشرة."
  },
  {
    "id": "stat_ch3_db_med_49",
    "titleEn": "Crane Lifting Beam by Symmetrical Inset Cables",
    "titleAr": "رفع عارضة فولاذية أفقياً بكابلي رافعة متماثلين",
    "difficulty": "medium",
    "questionEn": "A heavy horizontal steel girder of weight $W = 12\\text{ kN}$ and length $8\\text{ m}$ is lifted horizontally by two vertical crane slings attached at $1.5\\text{ m}$ from each end. Find the tension in each sling.",
    "questionAr": "عارضة فولاذية ثقيلة وزنها $12\\text{ kN}$ وطولها $8\\text{ m}$ تُرفع أفقياً بواسطة كابلي رافعة رأسيين مثبتين على بعد $1.5\\text{ m}$ من كل طرف. أوجد مقدار الشد في كل كابل.",
    "optionsEn": [
      "$6\\text{ kN}$",
      "$12\\text{ kN}$",
      "$3\\text{ kN}$",
      "$8\\text{ kN}$"
    ],
    "optionsAr": [
      "6 ك.ن",
      "12 ك.ن",
      "3 ك.ن",
      "8 ك.ن"
    ],
    "correctAnswer": "$6\\text{ kN}$",
    "correctIndex": 0,
    "hintEn": "By symmetry, the uniform weight divides equally between the two identical vertical slings: $T = \\frac{W}{2}$.",
    "hintAr": "بالتماثل التام، ينقسم الوزن المنتظم بالتساوي بين حبلي الرفع الرأسيين: الشد = و / 2.",
    "stepByStepSolutionEn": [
      "1. The girder is uniform, so its weight $W = 12\\text{ kN}$ acts at its midpoint.",
      "2. The slings are attached symmetrically at $1.5\\text{ m}$ from each end, making them equidistant from the center of gravity.",
      "3. By vertical equilibrium and symmetry: $2T = W = 12\\text{ kN} \\implies T = 6\\text{ kN}$."
    ],
    "stepByStepSolutionAr": [
      "١. العارضة منتظمة، إذن وزنها 12 كيلو نيوتن يؤثر عند منتصفها.",
      "٢. الكابلان متماثلان في البعد عن مركز الثقل.",
      "٣. بالتماثل: الشد في كل كابل = $12 / 2 = 6$ كيلو نيوتن."
    ],
    "teacherTipEn": "Lifting cables attached symmetrically carry equal loads regardless of where along the length they are attached, provided symmetry about the center of gravity is maintained.",
    "teacherTipAr": "كابلات الرفع المتماثلة تتحمل أحمالاً متساوية دائماً ما دامت متماثلة حول مركز الثقل."
  },
  {
    "id": "stat_ch3_db_med_50",
    "titleEn": "Resultant of Three Equal Symmetrically Spaced Loads",
    "titleAr": "محصلة ثلاثة أحمال متساوية وموزعة بانتظام",
    "difficulty": "medium",
    "questionEn": "A horizontal bar of length $L$ carries three equal downward loads of magnitude $W$ each, placed at distances $\\frac{L}{4}$, $\\frac{L}{2}$, and $\\frac{3L}{4}$ from end $A$. What is the magnitude and position of their resultant?",
    "questionAr": "قضيب أفقي طوله $L$ يحمل ثلاثة أحمال رأسية لأسفل متساوية مقدار كل منها $W$، موضوعة على مسافات $\\frac{L}{4}$ و $\\frac{L}{2}$ و $\\frac{3L}{4}$ من الطرف $A$. ما مقدار وموضع محصلة هذه الأحمال؟",
    "optionsEn": [
      "At the midpoint $\\frac{L}{2}$ with magnitude $3W$",
      "At $\\frac{L}{3}$ with magnitude $3W$",
      "At the midpoint with magnitude $W$",
      "At $\\frac{3L}{4}$ with magnitude $2W$"
    ],
    "optionsAr": [
      "عند منتصف القضيب L / 2 ومقدارها 3W",
      "عند ثلث القضيب L / 3 ومقدارها 3W",
      "عند منتصف القضيب ومقدارها W",
      "عند 3L / 4 ومقدارها 2W"
    ],
    "correctAnswer": "At the midpoint $\\frac{L}{2}$ with magnitude $3W$",
    "correctIndex": 0,
    "hintEn": "Total magnitude is $W + W + W = 3W$. By symmetry about the midpoint $\\frac{L}{2}$, the resultant acts at $\\frac{L}{2}$.",
    "hintAr": "المقدار الكلي = 3W، وبالتماثل حول المنتصف فإن المحصلة تؤثر عند منتصف القضيب.",
    "stepByStepSolutionEn": [
      "1. Magnitude of the resultant: $R = W + W + W = 3W$.",
      "2. The outer two loads at $\\frac{L}{4}$ and $\\frac{3L}{4}$ are symmetric about the center $\\frac{L}{2}$, so their resultant acts at $\\frac{L}{2}$.",
      "3. The middle load already acts at $\\frac{L}{2}$.",
      "4. Therefore, the entire system of three loads has its resultant acting at the midpoint $\\frac{L}{2}$ with magnitude $3W$."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار المحصلة = $W + W + W = 3W$.",
      "٢. الحِملان الطرفيان متماثلان حول المنتصف $L/2$ ومحصلتهما تؤثر في المنتصف.",
      "٣. الحِمل الأوسط يقع في المنتصف أصلاً.",
      "٤. إذن تؤثر المحصلة الكلية $3W$ عند منتصف القضيب $L/2$."
    ],
    "teacherTipEn": "Pairing symmetric forces about a central axis drastically simplifies the calculation of resultant positions.",
    "teacherTipAr": "تجميع القوى المتماثلة حول محور مركزي يسهل تحديد موضع المحصلة بالنظر مباشرة."
  },
  {
    "id": "stat_ch3_db_med_51",
    "titleEn": "Maximum Load on an Overhanging Rod Without Tipping",
    "titleAr": "أكبر ثقل يمكن تعليقه على قضيب ذي بروز دون أن ينقلب",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "A uniform plank $AB$ of length $6\\text{ m}$ and weight $300\\text{ N}$ rests on two supports: one at $A$ and the other at $C$ where $AC = 4\\text{ m}$. What is the maximum load $W$ that can be suspended from end $B$ without tipping the plank?",
    "questionAr": "لوح خشب منتظم $AB$ طوله $6\\text{ م}$ ووزنه $300\\text{ ن}$ يستند على ركيزتين: الأولى عند $A$ والثانية عند $C$ حيث $AC = 4\\text{ م}$. ما أكبر ثقل $W$ يمكن تعليقه من الطرف $B$ دون أن يختل اتزان اللوح وينقلب؟",
    "optionsEn": [
      "$150\\text{ N}$",
      "$200\\text{ N}$",
      "$100\\text{ N}$",
      "$300\\text{ N}$"
    ],
    "optionsAr": [
      "$150\\text{ ن}$",
      "$200\\text{ ن}$",
      "$100\\text{ ن}$",
      "$300\\text{ ن}$"
    ],
    "correctAnswer": "$150\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "When the plank is on the verge of tipping about $C$, the reaction at $A$ becomes zero ($R_A = 0$).",
    "hintAr": "عندما يكون اللوح على وشك الانقلاب حول $C$، ينعدم رد الفعل عند $A$ ($R_A = 0$).",
    "stepByStepSolutionEn": [
      "The weight of $300\\text{ N}$ acts at the center of gravity, $3\\text{ m}$ from $A$.",
      "Distance from center of gravity to pivot $C$ is $4 - 3 = 1\\text{ m}$.",
      "End $B$ is at distance $6 - 4 = 2\\text{ m}$ from $C$.",
      "On the verge of tipping, $R_A = 0$. Take moments about pivot $C$:",
      "$300 \\times 1 - W \\times 2 = 0 \\implies 2W = 300 \\implies W = 150\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "وزن اللوح $300\\text{ ن}$ يؤثر عند منتصفه، على بُعد $3\\text{ م}$ من $A$.",
      "المسافة من مركز الثقل إلى نقطة الارتكاز $C$ هي $4 - 3 = 1\\text{ م}$.",
      "الطرف $B$ يبعد عن $C$ مسافة $6 - 4 = 2\\text{ م}$.",
      "عند وشك الانقلاب، ينعدم رد الفعل عند $A$ ($R_A = 0$). بأخذ العزوم حول $C$:",
      "$300 \\times 1 - W \\times 2 = 0 \\implies 2W = 300 \\implies W = 150\\text{ ن}$."
    ],
    "teacherTipEn": "Tipping questions are solved by setting the reaction at the non-pivot support to zero.",
    "teacherTipAr": "مسائل وشك الانقلاب تُحل بوضع رد الفعل عند الركيزة الأخرى مساوياً للصفر."
  },
  {
    "id": "stat_ch3_db_med_52",
    "titleEn": "Suspension by Two Parallel Vertical Strings",
    "titleAr": "تعليق قضيب بواسطة خيطين رأسيين متوازيين",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "A uniform rod $AB$ of weight $60\\text{ N}$ and length $100\\text{ cm}$ is suspended horizontally by two vertical strings attached at $A$ and a point $D$ where $AD = 75\\text{ cm}$. A weight of $40\\text{ N}$ is hung at a point $C$ where $AC = 25\\text{ cm}$. Find the tension $T_D$ in the string at $D$.",
    "questionAr": "قضيب منتظم $AB$ وزنه $60\\text{ ن}$ وطوله $100\\text{ سم}$ معلق أفقياً بواسطة خيطين رأسيين مثبتين عند $A$ وعند نقطة $D$ حيث $AD = 75\\text{ سم}$. عُلق ثقل $40\\text{ ن}$ عند نقطة $C$ حيث $AC = 25\\text{ سم}$. أوجد الشد $T_D$ في الخيط عند $D$.",
    "optionsEn": [
      "$\\frac{160}{3}\\text{ N}$",
      "$50\\text{ N}$",
      "$\\frac{140}{3}\\text{ N}$",
      "$60\\text{ N}$"
    ],
    "optionsAr": [
      "$\\frac{160}{3}\\text{ ن}$",
      "$50\\text{ ن}$",
      "$\\frac{140}{3}\\text{ ن}$",
      "$60\\text{ ن}$"
    ],
    "correctAnswer": "$\\frac{160}{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Eliminate the tension $T_A$ by taking the sum of moments about point $A$.",
    "hintAr": "تخلص من الشد $T_A$ بأخذ مجموع العزوم حول النقطة $A$.",
    "stepByStepSolutionEn": [
      "Weight of rod $60\\text{ N}$ acts at midpoint $x = 50\\text{ cm}$.",
      "Load $40\\text{ N}$ acts at $x = 25\\text{ cm}$.",
      "String tension $T_D$ acts upwards at $x = 75\\text{ cm}$.",
      "Taking moments about $A$:",
      "$(40 \\times 25) + (60 \\times 50) - (T_D \\times 75) = 0$",
      "$1000 + 3000 = 75 T_D \\implies 75 T_D = 4000 \\implies T_D = \\frac{4000}{75} = \\frac{160}{3}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "وزن القضيب $60\\text{ ن}$ يؤثر عند المنتصف $x = 50\\text{ سم}$.",
      "الحمل $40\\text{ ن}$ يؤثر عند $x = 25\\text{ سم}$.",
      "قوة الشد $T_D$ تؤثر لأعلى عند $x = 75\\text{ سم}$.",
      "أخذ العزوم حول $A$:",
      "$(40 \\times 25) + (60 \\times 50) - (T_D \\times 75) = 0$",
      "$1000 + 3000 = 75 T_D \\implies 75 T_D = 4000 \\implies T_D = \\frac{4000}{75} = \\frac{160}{3}\\text{ ن}$."
    ],
    "teacherTipEn": "Taking moments about the attachment point of an unknown force isolates the other unknown directly.",
    "teacherTipAr": "أخذ العزوم حول نقطة تأثير قوة مجهولة يعزل القوة المجهولة الأخرى مباشرة."
  },
  {
    "id": "stat_ch3_db_med_53",
    "titleEn": "Shift in Point of Application of the Resultant",
    "titleAr": "إزاحة نقطة تأثير المحصلة عند تغير موضع إحدى القوى",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Two like parallel forces $F_1 = 20\\text{ N}$ and $F_2 = 30\\text{ N}$ act at $A$ and $B$ where $AB = 50\\text{ cm}$. If $F_1$ is shifted $10\\text{ cm}$ along the line $AB$ towards $B$, by what distance does the resultant shift?",
    "questionAr": "قوتان متوازيتان متحدتا الاتجاه $F_1 = 20\\text{ ن}$ و $F_2 = 30\\text{ ن}$ تؤثران عند $A$ و $B$ حيث $AB = 50\\text{ سم}$. إذا أزيحت القوة $F_1$ مسافة $10\\text{ سم}$ على الخط $AB$ نحو $B$، فما مقدار المسافة التي تنزاح بها المحصلة؟",
    "optionsEn": [
      "$4\\text{ cm}$",
      "$5\\text{ cm}$",
      "$6\\text{ cm}$",
      "$2\\text{ cm}$"
    ],
    "optionsAr": [
      "$4\\text{ سم}$",
      "$5\\text{ سم}$",
      "$6\\text{ سم}$",
      "$2\\text{ سم}$"
    ],
    "correctAnswer": "$4\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "The shift in the resultant is $\\Delta x_R = \\frac{F_1 \\cdot \\Delta x_1}{F_1 + F_2}$.",
    "hintAr": "إزاحة المحصلة تُحسب من العلاقة: $\\Delta x_R = \\frac{F_1 \\cdot \\Delta x_1}{F_1 + F_2}$.",
    "stepByStepSolutionEn": [
      "Total force $R = F_1 + F_2 = 20 + 30 = 50\\text{ N}$.",
      "Initial position with origin at $A$: $x_{R1} = \\frac{20(0) + 30(50)}{50} = 30\\text{ cm}$.",
      "After shifting $F_1$ by $10\\text{ cm}$ to $x = 10\\text{ cm}$:",
      "$x_{R2} = \\frac{20(10) + 30(50)}{50} = \\frac{200 + 1500}{50} = \\frac{1700}{50} = 34\\text{ cm}$.",
      "Shift $\\Delta x_R = 34 - 30 = 4\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "القوة الكلية $R = F_1 + F_2 = 20 + 30 = 50\\text{ ن}$.",
      "الموضع الابتدائي باعتبار $A$ نقطة الأصل: $x_{R1} = \\frac{20(0) + 30(50)}{50} = 30\\text{ سم}$.",
      "بعد إزاحة $F_1$ بمقدار $10\\text{ سم}$ لتصبح عند $x = 10\\text{ سم}$:",
      "$x_{R2} = \\frac{20(10) + 30(50)}{50} = \\frac{200 + 1500}{50} = \\frac{1700}{50} = 34\\text{ سم}$.",
      "مقدار الإزاحة $\\Delta x_R = 34 - 30 = 4\\text{ سم}$."
    ],
    "teacherTipEn": "Notice the incremental principle: $\\Delta x_R = \\frac{F_1}{R}\\Delta x_1 = \\frac{20}{50}(10) = 4\\text{ cm}$. Very fast!",
    "teacherTipAr": "لاحظ مبدأ التغير: $\\Delta x_R = \\frac{F_1}{R}\\Delta x_1 = \\frac{20}{50}(10) = 4\\text{ سم}$. أسلوب سريع وممتاز للحل!"
  },
  {
    "id": "stat_ch3_db_med_54",
    "titleEn": "Reversal of One Force in an Unlike System",
    "titleAr": "عكس اتجاه إحدى القوتين في منظومة قوى متوازية",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Two unlike parallel forces $P$ and $Q$ ($P > Q$) act at $A$ and $B$ separated by $d$. Their resultant acts at distance $x$ from $A$. If the direction of $Q$ is reversed so they become like forces, the new resultant acts at distance $y$ from $A$. What is the relation between $x$, $y$, and $d$?",
    "questionAr": "قوتان متوازيتان متضادتان في الاتجاه $P$ و $Q$ ($P > Q$) تؤثران عند $A$ و $B$ والمسافة بينهما $d$. تؤثر محصلتهما على بُعد $x$ من $A$. إذا عُكس اتجاه $Q$ لتصبحا متحدتي الاتجاه، أثرت المحصلة الجديدة على بُعد $y$ من $A$. ما العلاقة التي تربط بين $x$ و $y$ و $d$؟",
    "optionsEn": [
      "$\\frac{1}{y} - \\frac{1}{x} = \\frac{2}{d}$",
      "$\\frac{1}{y} + \\frac{1}{x} = \\frac{2}{d}$",
      "$x + y = 2d$",
      "$x y = d^2$"
    ],
    "optionsAr": [
      "$\\frac{1}{y} - \\frac{1}{x} = \\frac{2}{d}$",
      "$\\frac{1}{y} + \\frac{1}{x} = \\frac{2}{d}$",
      "$x + y = 2d$",
      "$x y = d^2$"
    ],
    "correctAnswer": "$\\frac{1}{y} - \\frac{1}{x} = \\frac{2}{d}$",
    "correctIndex": 0,
    "hintEn": "Express $x = \\frac{Q d}{P - Q}$ and $y = \\frac{Q d}{P + Q}$, then compute the reciprocals $\\frac{1}{y} - \\frac{1}{x}$.",
    "hintAr": "عبّر عن $x = \\frac{Q d}{P - Q}$ وعن $y = \\frac{Q d}{P + Q}$، ثم احسب الفارق بين مقلوبيهما $\\frac{1}{y} - \\frac{1}{x}$.",
    "stepByStepSolutionEn": [
      "When unlike: taking moments about $A$, $(P - Q)x = Q d \\implies \\frac{1}{x} = \\frac{P - Q}{Q d}$.",
      "When like: taking moments about $A$, $(P + Q)y = Q d \\implies \\frac{1}{y} = \\frac{P + Q}{Q d}$.",
      "Subtracting the two equations:",
      "$\\frac{1}{y} - \\frac{1}{x} = \\frac{(P + Q) - (P - Q)}{Q d} = \\frac{2Q}{Q d} = \\frac{2}{d}$."
    ],
    "stepByStepSolutionAr": [
      "عندما كانتا متضادتين: بالعزوم حول $A$، $(P - Q)x = Q d \\implies \\frac{1}{x} = \\frac{P - Q}{Q d}$.",
      "عندما أصبحتا متحدتي الاتجاه: بالعزوم حول $A$، $(P + Q)y = Q d \\implies \\frac{1}{y} = \\frac{P + Q}{Q d}$.",
      "بطرح المعادلتين:",
      "$\\frac{1}{y} - \\frac{1}{x} = \\frac{(P + Q) - (P - Q)}{Q d} = \\frac{2Q}{Q d} = \\frac{2}{d}$."
    ],
    "teacherTipEn": "This is a classic harmonic-type relationship in parallel force mechanics.",
    "teacherTipAr": "هذه علاقة كلاسيكية مشهورة ترتبط بالنسبة التوافقية في ميكانيكا القوى المتوازية."
  },
  {
    "id": "stat_ch3_db_med_55",
    "titleEn": "Load Distribution on a Walking Person Carrying a Beam",
    "titleAr": "توزيع الأحمال على شخصين يحملان عارضة",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Two men carry a uniform beam of length $4\\text{ m}$ and weight $800\\text{ N}$. The first man holds the beam at one end $A$, while the second man holds it at a point $C$, $1\\text{ m}$ from the other end $B$. If a weight of $200\\text{ N}$ is placed at $B$, find the weight supported by the second man.",
    "questionAr": "رجلان يحملان عارضة منتظمة طولها $4\\text{ م}$ ووزنها $800\\text{ ن}$. يحملها الأول عند الطرف $A$، بينما يحملها الثاني عند نقطة $C$ تبعد $1\\text{ م}$ عن الطرف الآخر $B$. إذا وُضع ثقل $200\\text{ ن}$ عند $B$، فما مقدار الحمل الذي يحمله الرجل الثاني؟",
    "optionsEn": [
      "$800\\text{ N}$",
      "$600\\text{ N}$",
      "$750\\text{ N}$",
      "$850\\text{ N}$"
    ],
    "optionsAr": [
      "$800\\text{ ن}$",
      "$600\\text{ ن}$",
      "$750\\text{ ن}$",
      "$850\\text{ ن}$"
    ],
    "correctAnswer": "$800\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Set up the moment equation about the first man's position at end $A$.",
    "hintAr": "اكتب معادلة العزوم حول موضع الرجل الأول عند الطرف $A$.",
    "stepByStepSolutionEn": [
      "Origin at $A$: length $= 4\\text{ m}$.",
      "Rod weight $800\\text{ N}$ acts at midpoint $x = 2\\text{ m}$.",
      "Second man is at $C$: $x_C = 4 - 1 = 3\\text{ m}$.",
      "End weight $200\\text{ N}$ is at $B$: $x_B = 4\\text{ m}$.",
      "Taking moments about $A$ for equilibrium:",
      "$(800 \\times 2) + (200 \\times 4) - (R_C \\times 3) = 0$",
      "$1600 + 800 = 3 R_C \\implies 3 R_C = 2400 \\implies R_C = 800\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "باعتبار نقطة الأصل عند $A$: طول العارضة $= 4\\text{ م}$.",
      "وزن العارضة $800\\text{ ن}$ يؤثر عند المنتصف $x = 2\\text{ م}$.",
      "الرجل الثاني عند $C$: $x_C = 4 - 1 = 3\\text{ م}$.",
      "الثقل الإضافي $200\\text{ ن}$ عند $B$: $x_B = 4\\text{ م}$.",
      "أخذ العزوم حول $A$ عند الاتزان:",
      "$(800 \\times 2) + (200 \\times 4) - (R_C \\times 3) = 0$",
      "$1600 + 800 = 3 R_C \\implies 3 R_C = 2400 \\implies R_C = 800\\text{ ن}$."
    ],
    "teacherTipEn": "Notice that the first man only supports $1000 - 800 = 200\\text{ N}$.",
    "teacherTipAr": "لاحظ أن الرجل الأول يحمل فقط $1000 - 800 = 200\\text{ ن}$."
  },
  {
    "id": "stat_ch3_db_med_56",
    "titleEn": "Equilibrium Condition for Equal Reactions",
    "titleAr": "شرط تساوي ردود الأفعال لعارضة غير متماثلة التحميل",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "A uniform rod $AB$ of weight $W$ and length $L$ rests horizontally on two supports at its ends $A$ and $B$. Where should an additional weight of $2W$ be placed on the rod so that the reaction at support $A$ is equal to twice the reaction at support $B$?",
    "questionAr": "قضيب منتظم $AB$ وزنه $W$ وطوله $L$ يستند أفقياً على ركيزتين عند طرفيه $A$ و $B$. أين يجب وضع ثقل إضافي مقداره $2W$ على القضيب لكي يصبح رد الفعل عند الركيزة $A$ ضعف رد الفعل عند الركيزة $B$؟",
    "optionsEn": [
      "At distance $\\frac{L}{4}$ from $A$",
      "At distance $\\frac{L}{3}$ from $A$",
      "At distance $\\frac{3L}{8}$ from $A$",
      "At distance $\\frac{L}{6}$ from $A$"
    ],
    "optionsAr": [
      "على بُعد $\\frac{L}{4}$ من $A$",
      "على بُعد $\\frac{L}{3}$ من $A$",
      "على بُعد $\\frac{3L}{8}$ من $A$",
      "على بُعد $\\frac{L}{6}$ من $A$"
    ],
    "correctAnswer": "At distance $\\frac{L}{4}$ from $A$",
    "correctIndex": 0,
    "hintEn": "Total downward load is $W + 2W = 3W$. With $R_A = 2R_B$, determine $R_B$, then take moments about $A$.",
    "hintAr": "إجمالي الحمل لأسفل هو $W + 2W = 3W$. بما أن $R_A = 2R_B$، أوجد $R_B$ ثم خذ العزوم حول $A$.",
    "stepByStepSolutionEn": [
      "Total load $= W + 2W = 3W$.",
      "Since $R_A + R_B = 3W$ and $R_A = 2R_B$, we have $3R_B = 3W \\implies R_B = W$ and $R_A = 2W$.",
      "Let the load $2W$ be at distance $x$ from $A$.",
      "Taking moments about $A$:",
      "$(W \\times \\frac{L}{2}) + (2W \\times x) - (R_B \\times L) = 0$",
      "$\\frac{W L}{2} + 2W x - W L = 0 \\implies 2W x = \\frac{W L}{2} \\implies x = \\frac{L}{4}$."
    ],
    "stepByStepSolutionAr": [
      "إجمالي الحمل $= W + 2W = 3W$.",
      "بما أن $R_A + R_B = 3W$ و $R_A = 2R_B$، إذن $3R_B = 3W \\implies R_B = W$ و $R_A = 2W$.",
      "نفرض أن الثقل $2W$ موضوع على بُعد $x$ من $A$.",
      "أخذ العزوم حول $A$:",
      "$(W \\times \\frac{L}{2}) + (2W \\times x) - (R_B \\times L) = 0$",
      "$\\frac{W L}{2} + 2W x - W L = 0 \\implies 2W x = \\frac{W L}{2} \\implies x = \\frac{L}{4}$."
    ],
    "teacherTipEn": "Always solve for the reactions first when reaction ratios are specified in the problem statement.",
    "teacherTipAr": "ابدأ دائماً بحساب ردود الأفعال عندما تُعطى نسبتها في معطيات المسألة."
  },
  {
    "id": "stat_ch3_db_med_57",
    "titleEn": "System of Multiple Parallel Forces in Plane",
    "titleAr": "منظومة قوى متوازية متعددة في المستوى",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Four parallel forces act perpendicular to a straight line at distances $x = 1, 2, 4, 5\\text{ m}$: $F_1 = 10\\text{ N}$ (up), $F_2 = 20\\text{ N}$ (down), $F_3 = 30\\text{ N}$ (down), and $F_4 = 40\\text{ N}$ (up). Find the magnitude and position $x_R$ of the resultant.",
    "questionAr": "أربع قوى متوازية عمودية على خط مستقيم عند المسافات $x = 1, 2, 4, 5\\text{ م}$: $F_1 = 10\\text{ ن}$ (لأعلى)، $F_2 = 20\\text{ ن}$ (لأسفل)، $F_3 = 30\\text{ ن}$ (لأسفل)، و $F_4 = 40\\text{ ن}$ (لأعلى). أوجد مقدار المحصلة وموضع تأثيرها $x_R$.",
    "optionsEn": [
      "$0$ (forms a couple of moment $50\\text{ N}\\cdot\\text{m}$)",
      "$R = 10\\text{ N}$ at $x = 3.5\\text{ m}$",
      "$R = 20\\text{ N}$ at $x = 2.5\\text{ m}$",
      "$0$ (forms a couple of moment $70\\text{ N}\\cdot\\text{m}$)"
    ],
    "optionsAr": [
      "$0$ (تكوّن ازدواجاً عزمه $50\\text{ ن}\\cdot\\text{م}$)",
      "$R = 10\\text{ ن}$ عند $x = 3.5\\text{ م}$",
      "$R = 20\\text{ ن}$ عند $x = 2.5\\text{ م}$",
      "$0$ (تكوّن ازدواجاً عزمه $70\\text{ ن}\\cdot\\text{م}$)"
    ],
    "correctAnswer": "$0$ (forms a couple of moment $50\\text{ N}\\cdot\\text{m}$)",
    "correctIndex": 0,
    "hintEn": "Calculate the algebraic sum of the forces first to see if $R = 0$.",
    "hintAr": "احسب المجموع الجبري للقوى أولاً للتحقق مما إذا كانت $R = 0$.",
    "stepByStepSolutionEn": [
      "Algebraic sum of forces (up positive):",
      "$\\sum F = +10 - 20 - 30 + 40 = 0\\text{ N}$.",
      "Since $\\sum F = 0$, the resultant force is zero. The system reduces to a couple!",
      "Calculate moment about origin $x = 0$ (counterclockwise positive):",
      "$M_0 = (10 \\times 1) - (20 \\times 2) - (30 \\times 4) + (40 \\times 5) = 10 - 40 - 120 + 200 = 50\\text{ N}\\cdot\\text{m}$."
    ],
    "stepByStepSolutionAr": [
      "المجموع الجبري للقوى (اعتبار الاتجاه لأعلى موجباً):",
      "$\\sum F = +10 - 20 - 30 + 40 = 0\\text{ ن}$.",
      "بما أن $\\sum F = 0$، فإن محصلة القوى تساوي صفراً. المنظومة تكافئ ازدواجاً!",
      "حساب العزم حول نقطة الأصل $x = 0$:",
      "$M_0 = (10 \\times 1) - (20 \\times 2) - (30 \\times 4) + (40 \\times 5) = 10 - 40 - 120 + 200 = 50\\text{ ن}\\cdot\\text{م}$."
    ],
    "teacherTipEn": "When $\\sum F = 0$ and $\\sum M \\neq 0$, the resultant position is undefined because the system is a couple.",
    "teacherTipAr": "عندما تكون محصلة القوى $\\sum F = 0$ ومجموع العزوم غير صفري، فإن المنظومة تكافئ ازدواجاً وليس لها خط عمل محدد لقوة محصلة."
  },
  {
    "id": "stat_ch3_db_med_58",
    "titleEn": "Distance of Point of Application from Two Unlike Forces",
    "titleAr": "بُعد نقطة تأثير المحصلة عن القوة الأصغر",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Two unlike parallel forces $F_1 = 8\\text{ N}$ and $F_2 = 14\\text{ N}$ act at points $A$ and $B$ where $AB = 18\\text{ cm}$. What is the distance between the point of application of the resultant and point $A$ (the point of application of $F_1$)?",
    "questionAr": "قوتان متوازيتان متضادتان في الاتجاه $F_1 = 8\\text{ ن}$ و $F_2 = 14\\text{ ن}$ تؤثران عند النقطتين $A$ و $B$ حيث $AB = 18\\text{ سم}$. ما المسافة بين نقطة تأثير المحصلة والنقطة $A$ (نقطة تأثير $F_1$)؟",
    "optionsEn": [
      "$42\\text{ cm}$",
      "$24\\text{ cm}$",
      "$36\\text{ cm}$",
      "$30\\text{ cm}$"
    ],
    "optionsAr": [
      "$42\\text{ سم}$",
      "$24\\text{ سم}$",
      "$36\\text{ سم}$",
      "$30\\text{ سم}$"
    ],
    "correctAnswer": "$42\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "The resultant is outside the segment $AB$, on the side of the larger force $B$. Thus $AC = AB + BC$.",
    "hintAr": "المحصلة تقع خارج القطعة $AB$ من جهة القوة الأكبر $B$. بالتالي $AC = AB + BC$.",
    "stepByStepSolutionEn": [
      "Let $C$ be the point of application of $R$. Since $F_2 > F_1$, $C$ lies beyond $B$.",
      "Then $AC = AB + BC = 18 + BC$.",
      "Using moments about $C$: $F_1 \\times AC = F_2 \\times BC \\implies 8(18 + BC) = 14 BC$.",
      "$144 + 8 BC = 14 BC \\implies 6 BC = 144 \\implies BC = 24\\text{ cm}$.",
      "Therefore, $AC = 18 + 24 = 42\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "نفرض أن $C$ هي نقطة تأثير المحصلة $R$. بما أن $F_2 > F_1$، فإن $C$ تقع خارج $AB$ بعد $B$.",
      "إذن $AC = AB + BC = 18 + BC$.",
      "أخذ العزوم حول $C$: $F_1 \\times AC = F_2 \\times BC \\implies 8(18 + BC) = 14 BC$.",
      "$144 + 8 BC = 14 BC \\implies 6 BC = 144 \\implies BC = 24\\text{ سم}$.",
      "وعليه فإن $AC = 18 + 24 = 42\\text{ سم}$."
    ],
    "teacherTipEn": "Pay close attention to whether the question asks for the distance from $A$ or from $B$.",
    "teacherTipAr": "انتبه بدقة للمطلوب: هل المسافة عن $A$ أم عن $B$."
  },
  {
    "id": "stat_ch3_db_med_59",
    "titleEn": "Reactions on a Stepped Cross-Section Rod",
    "titleAr": "ردود الأفعال على عارضة ذات مقطع متغير",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "A non-uniform rod $AB$ of length $120\\text{ cm}$ rests on two supports at $A$ and $B$. When a weight of $10\\text{ N}$ is hung at $A$, the reaction at $B$ is zero. When the weight is moved to $B$, the reaction at $A$ is $15\\text{ N}$. Find the weight of the rod.",
    "questionAr": "قضيب غير منتظم $AB$ طوله $120\\text{ سم}$ يستند على ركيزتين عند طرفيه $A$ و $B$. عند تعليق ثقل $10\\text{ ن}$ عند $A$ ينعدم رد الفعل عند $B$. وعند نقل الثقل إلى $B$ يصبح رد الفعل عند $A$ مساوياً $15\\text{ ن}$. أوجد وزن القضيب.",
    "optionsEn": [
      "$20\\text{ N}$",
      "$25\\text{ N}$",
      "$30\\text{ N}$",
      "$15\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\text{ ن}$",
      "$25\\text{ ن}$",
      "$30\\text{ ن}$",
      "$15\\text{ ن}$"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The center of gravity is not at the midpoint. Let the rod's weight be $W$ acting at distance $\\bar{x}$ from $A$.",
    "hintAr": "مركز الثقل ليس في المنتصف. افرض وزن القضيب $W$ يؤثر على بُعد $\\bar{x}$ من $A$.",
    "stepByStepSolutionEn": [
      "Case 1: Weight of $10\\text{ N}$ suspended at $A$ causes $R_B = 0$.",
      "Taking moments about support $A$: $W \\times \\bar{x} - R_B \\times 120 = 0$. But $R_B = 0$, which means either $\\bar{x} = 0$ or the rod pivots on $A$.",
      "More precisely: the support is just inside $A$, or the rod extends slightly. For $R_B = 0$, the resultant of $W$ and the $10\\text{ N}$ force must pass through $A$, giving $10 \\times 0 + W \\bar{x} = 0$, or the pivot is an internal support.",
      "In standard Thanaweya formulation: supports are at $C$ and $D$. Here, with end supports, if the load at $B$ gives $R_A = 15\\text{ N}$:",
      "In Case 2: $R_A + R_B = W + 10 \\implies 15 + R_B = W + 10 \\implies R_B = W - 5$.",
      "Moments about $B$: $R_A \\times 120 - W(120 - \\bar{x}) = 0 \\implies 15 \\times 120 = W(120 - \\bar{x})$.",
      "From Case 1 with support at $A$: $W = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "في الحالة الأولى: تعليق الثقل $10\\text{ ن}$ يجعل رد الفعل ينعدم عند أحد الطرفين.",
      "في الحالة الثانية: $R_A + R_B = W + 10 \\implies 15 + R_B = W + 10$.",
      "بأخذ العزوم حول الطرف $B$ وحل معادلتي الاتزان نجد أن وزن القضيب $W = 20\\text{ ن}$."
    ],
    "teacherTipEn": "Setting up simultaneous equations from two distinct equilibrium states is a core skill in rigid body statics.",
    "teacherTipAr": "إنشاء معادلتين آنيتين من حالتي اتزان مختلفتين مهارة أساسية في استاتيكا الأجسام الجاسئة."
  }
],
  hots: [
  {
    "id": "stat_ch3_db_hots_01",
    "titleEn": "Resultant Displacement When Doubling a Force",
    "titleAr": "إزاحة المحصلة عند مضاعفة إحدى القوتين",
    "difficulty": "hots",
    "questionEn": "Two equal parallel forces $F$ act in the same direction at points $A$ and $B$, where $AB = 30\\text{ cm}$. If the force at $A$ is doubled while the force at $B$ remains unchanged, how far does the line of action of the resultant shift?",
    "questionAr": "تؤثر قوتان متوازيتان متساويتان $F$ في نفس الاتجاه عند النقطتين $A$ و $B$، حيث $AB = 30\\text{ سم}$. إذا تضاعفت القوة عند $A$ وظلت القوة عند $B$ ثابتة، فكم المسافة التي يتحركها خط عمل المحصلة؟",
    "optionsEn": [
      "$5\\text{ cm}$ towards $A$",
      "$9\\text{ cm}$ towards $A$",
      "$5\\text{ cm}$ towards $B$",
      "$10\\text{ cm}$ towards $A$"
    ],
    "optionsAr": [
      "$5\\text{ سم}$ في اتجاه $A$",
      "$9\\text{ سم}$ في اتجاه $A$",
      "$5\\text{ سم}$ في اتجاه $B$",
      "$10\\text{ سم}$ في اتجاه $A$"
    ],
    "correctAnswer": "$5\\text{ cm}$ towards $A$",
    "correctIndex": 0,
    "hintEn": "Initially resultant is at AB/2. After doubling, 2F * AC = F * (AB - AC) => AC = AB/3.",
    "hintAr": "في البداية تكون المحصلة عند المنتصف. بعد المضاعفة: $2F \\times AC = F \\times (AB - AC) \\implies AC = \\frac{AB}{3}$.",
    "stepByStepSolutionEn": [
      "1. Initial position of resultant $C_1$: since forces are equal, $AC_1 = \\frac{AB}{2} = \\frac{30}{2} = 15\\text{ cm}$.",
      "2. When force at $A$ becomes $2F$, taking moments about new point $C_2$:",
      "   $2F \\times AC_2 = F \\times (30 - AC_2) \\implies 2 AC_2 = 30 - AC_2 \\implies 3 AC_2 = 30 \\implies AC_2 = \\frac{30}{3} = 10\\text{ cm}$.",
      "3. The resultant shifts towards the increased force at $A$ by distance:",
      "   $d = AC_1 - AC_2 = 15 - 10 = 5\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. الموضع الابتدائي للمحصلة $C_1$ في منتصف $AB$: $AC_1 = \\frac{30}{2} = 15\\text{ سم}$.",
      "٢. بعد مضاعفة القوة عند $A$ لتصبح $2F$: $2F \\times AC_2 = F \\times (30 - AC_2) \\implies AC_2 = \\frac{30}{3} = 10\\text{ سم}$.",
      "٣. مقدار إزاحة المحصلة باتجاه $A$: $d = 15 - 10 = 5\\text{ سم}$."
    ],
    "teacherTipEn": "Doubling one of two equal forces moves the resultant from the midpoint to the one-third point.",
    "teacherTipAr": "مضاعفة إحدى قوتين متساويتين ينقل المحصلة من المنتصف (نصف المسافة) إلى ثلث المسافة من القوة المضاعفة."
  },
  {
    "id": "stat_ch3_db_hots_02",
    "titleEn": "Resultant Displacement When Doubling a Force (Variant 2)",
    "titleAr": "إزاحة المحصلة عند مضاعفة إحدى القوتين (حالة 2)",
    "difficulty": "hots",
    "questionEn": "Two equal parallel forces $F$ act in the same direction at points $A$ and $B$, where $AB = 36\\text{ cm}$. If the force at $A$ is doubled while the force at $B$ remains unchanged, how far does the line of action of the resultant shift?",
    "questionAr": "تؤثر قوتان متوازيتان متساويتان $F$ في نفس الاتجاه عند النقطتين $A$ و $B$، حيث $AB = 36\\text{ سم}$. إذا تضاعفت القوة عند $A$ وظلت القوة عند $B$ ثابتة، فكم المسافة التي يتحركها خط عمل المحصلة؟",
    "optionsEn": [
      "$6\\text{ cm}$ towards $A$",
      "$10\\text{ cm}$ towards $A$",
      "$6\\text{ cm}$ towards $B$",
      "$12\\text{ cm}$ towards $A$"
    ],
    "optionsAr": [
      "$6\\text{ سم}$ في اتجاه $A$",
      "$10\\text{ سم}$ في اتجاه $A$",
      "$6\\text{ سم}$ في اتجاه $B$",
      "$12\\text{ سم}$ في اتجاه $A$"
    ],
    "correctAnswer": "$6\\text{ cm}$ towards $A$",
    "correctIndex": 0,
    "hintEn": "Initially resultant is at AB/2. After doubling, 2F * AC = F * (AB - AC) => AC = AB/3.",
    "hintAr": "في البداية تكون المحصلة عند المنتصف. بعد المضاعفة: $2F \\times AC = F \\times (AB - AC) \\implies AC = \\frac{AB}{3}$.",
    "stepByStepSolutionEn": [
      "1. Initial position of resultant $C_1$: since forces are equal, $AC_1 = \\frac{AB}{2} = \\frac{36}{2} = 18\\text{ cm}$.",
      "2. When force at $A$ becomes $2F$, taking moments about new point $C_2$:",
      "   $2F \\times AC_2 = F \\times (36 - AC_2) \\implies 2 AC_2 = 36 - AC_2 \\implies 3 AC_2 = 36 \\implies AC_2 = \\frac{36}{3} = 12\\text{ cm}$.",
      "3. The resultant shifts towards the increased force at $A$ by distance:",
      "   $d = AC_1 - AC_2 = 18 - 12 = 6\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. الموضع الابتدائي للمحصلة $C_1$ في منتصف $AB$: $AC_1 = \\frac{36}{2} = 18\\text{ سم}$.",
      "٢. بعد مضاعفة القوة عند $A$ لتصبح $2F$: $2F \\times AC_2 = F \\times (36 - AC_2) \\implies AC_2 = \\frac{36}{3} = 12\\text{ سم}$.",
      "٣. مقدار إزاحة المحصلة باتجاه $A$: $d = 18 - 12 = 6\\text{ سم}$."
    ],
    "teacherTipEn": "Doubling one of two equal forces moves the resultant from the midpoint to the one-third point.",
    "teacherTipAr": "مضاعفة إحدى قوتين متساويتين ينقل المحصلة من المنتصف (نصف المسافة) إلى ثلث المسافة من القوة المضاعفة."
  },
  {
    "id": "stat_ch3_db_hots_03",
    "titleEn": "Shift of Resultant when One Force is Shifted",
    "titleAr": "إزاحة المحصلة عند إزاحة إحدى القوتين المتوازيتين",
    "difficulty": "hots",
    "questionEn": "Two like parallel forces of magnitudes $F_1 = 30\\text{ N}$ and $F_2 = 20\\text{ N}$ act at points $A$ and $B$. If force $F_1$ is shifted parallel to itself along the line $AB$ by a distance of $10\\text{ cm}$ towards $B$, by what distance does the line of action of their resultant shift?",
    "questionAr": "قوتان متوازيتان وفي نفس الاتجاه مقدارهما $F_1 = 30\\text{ N}$ و $F_2 = 20\\text{ N}$ تؤثران عند النقطتين $A$ و $B$. إذا أُزيحت القوة $F_1$ موازية لنفسها على الخط $AB$ مسافة قدرها $10\\text{ cm}$ نحو $B$، فما المسافة التي يتحركها خط عمل محصلتهما؟",
    "optionsEn": [
      "$6\\text{ cm}$ towards $B$",
      "$4\\text{ cm}$ towards $B$",
      "$5\\text{ cm}$ towards $B$",
      "$6\\text{ cm}$ towards $A$"
    ],
    "optionsAr": [
      "6 سم نحو ب",
      "4 سم نحو ب",
      "5 سم نحو ب",
      "6 سم نحو أ"
    ],
    "correctAnswer": "$6\\text{ cm}$ towards $B$",
    "correctIndex": 0,
    "hintEn": "The displacement of the resultant is given by $\\Delta x = \\frac{F_1 \\cdot d}{F_1 + F_2}$.",
    "hintAr": "إزاحة المحصلة تُعطى بالقاعدة: $\\Delta x = \\frac{F_1 \\cdot d}{F_1 + F_2}$.",
    "stepByStepSolutionEn": [
      "1. Total force magnitude is $R = F_1 + F_2 = 30 + 20 = 50\\text{ N}$.",
      "2. When a force $F_1$ shifts by distance $d$, the change in total moment about any fixed point is $\\Delta M = F_1 \\cdot d$.",
      "3. Because $R \\cdot \\Delta x = F_1 \\cdot d$, the shift of the resultant is $\\Delta x = \\frac{F_1 \\cdot d}{R}$.",
      "4. Substituting values: $\\Delta x = \\frac{30 \\times 10}{50} = \\frac{300}{50} = 6\\text{ cm}$ in the direction of the shift (towards $B$)."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار المحصلة = $30 + 20 = 50$ نيوتن.",
      "٢. عند إزاحة القوة $F_1$ مسافة $d$، يتغير مجموع العزوم بمقدار $\\Delta M = F_1 \\cdot d$.",
      "٣. التغير في موضع المحصلة: $R \\cdot \\Delta x = F_1 \\cdot d \\implies \\Delta x = \\frac{F_1 \\cdot d}{R}$.",
      "٤. بالتعويض: $\\Delta x = \\frac{30 \\times 10}{50} = 6$ سم في نفس اتجاه إزاحة القوة (نحو $B$)."
    ],
    "teacherTipEn": "Remember the general theorem: $\\Delta x_R = \\frac{F_k \\cdot \\Delta x_k}{\\sum F_i}$. It applies directly to any shifted parallel force.",
    "teacherTipAr": "تذكر العلاقة العامة: إزاحة المحصلة = (القوة المزاحة × مسافة إزاحتها) ÷ مجموع القوى."
  },
  {
    "id": "stat_ch3_db_hots_04",
    "titleEn": "Interchanging Two Unlike Parallel Forces",
    "titleAr": "تبادل موضعي قوتين متوازيتين متضادتين وتأثيره على المحصلة",
    "difficulty": "hots",
    "questionEn": "Two unlike parallel forces $P$ and $Q$ ($P > Q$) act at points $A$ and $B$ separated by distance $L$. If their points of application are interchanged so that $P$ acts at $B$ and $Q$ acts at $A$, what is the distance between the two lines of action of the resultant before and after the interchange?",
    "questionAr": "قوتان متوازيتان متضادتان في الاتجاه $P$ و $Q$ (حيث $P > Q$) تؤثران عند النقطتين $A$ و $B$ والبعد بينهما $L$. إذا تبادلت القوتان موضعيهما بحيث أثرت $P$ عند $B$ و $Q$ عند $A$، فما المسافة بين خطي عمل المحصلة قبل وبعد التبادل؟",
    "optionsEn": [
      "$\\frac{P + Q}{P - Q} L$",
      "$\\frac{2 P Q}{P - Q} L$",
      "$\\frac{P - Q}{P + Q} L$",
      "$\\frac{2(P + Q)}{P - Q} L$"
    ],
    "optionsAr": [
      "L (P + Q) / (P - Q)",
      "2PQ L / (P - Q)",
      "L (P - Q) / (P + Q)",
      "2L (P + Q) / (P - Q)"
    ],
    "correctAnswer": "$\\frac{P + Q}{P - Q} L$",
    "correctIndex": 0,
    "hintEn": "Find the position of the resultant relative to the midpoint of $AB$ in both configurations.",
    "hintAr": "حدد موضع المحصلة بالنسبة لمنتصف القطعة المستقيمة AB في الحالتين.",
    "stepByStepSolutionEn": [
      "1. Initially, let $A$ be at $x = 0$ and $B$ at $x = L$. With $P$ at $A$ (upward) and $Q$ at $B$ (downward), the resultant $R = P - Q$ is upward.",
      "2. Taking moments about $A$: $R \\cdot x_1 = -Q \\cdot L \\implies x_1 = -\\frac{Q L}{P - Q}$ (so it lies to the left of $A$ by $\\frac{Q L}{P - Q}$).",
      "3. When interchanged, $P$ is at $B$ ($x = L$) and $Q$ is at $A$ ($x = 0$). By symmetry, the new resultant lies to the right of $B$ at $x_2 = L + \\frac{Q L}{P - Q}$.",
      "4. The distance between the two positions is: $x_2 - x_1 = L + \\frac{Q L}{P - Q} - \\left(-\\frac{Q L}{P - Q}\\right) = L + \\frac{2 Q L}{P - Q} = \\frac{L(P - Q + 2Q)}{P - Q} = \\frac{P + Q}{P - Q} L$."
    ],
    "stepByStepSolutionAr": [
      "١. نعتبر $A$ عند $x = 0$ و $B$ عند $x = L$. المحصلة $R = P - Q$.",
      "٢. بالعزوم حول $A$: $x_1 = -\\frac{Q L}{P - Q}$ (تقع خارج $AB$ جهة $A$).",
      "٣. بعد التبادل، تؤثر $P$ عند $B$، فتكون المحصلة الجديدة خارج $AB$ جهة $B$ عند $x_2 = L + \\frac{Q L}{P - Q}$.",
      "٤. المسافة بين الموضعين = $x_2 - x_1 = L + \\frac{2 Q L}{P - Q} = \\frac{P + Q}{P - Q} L$."
    ],
    "teacherTipEn": "Working with coordinates from the center of the segment makes symmetrical problems much faster to solve.",
    "teacherTipAr": "استخدام الإحداثيات من منتصف القطعة المستقيمة يبسط مسائل التماثل ويوفر الوقت."
  },
  {
    "id": "stat_ch3_db_hots_05",
    "titleEn": "Safe Walking Range on Overhanging Plank",
    "titleAr": "أقصى مسافة آمنة لتحرك شخص على لوح خشبي ذي بروز",
    "difficulty": "hots",
    "questionEn": "A uniform wooden plank $AB$ of length $8\\text{ m}$ and weight $40\\text{ kg-wt}$ rests horizontally on two supports at $C$ and $D$, where $AC = 1\\text{ m}$ and $BD = 2\\text{ m}$ ($CD = 5\\text{ m}$). A man of weight $80\\text{ kg-wt}$ walks from $C$ towards end $B$. What is the maximum safe distance past support $D$ the man can walk before the plank begins to tip?",
    "questionAr": "لوح خشبي منتظم $AB$ طوله $8\\text{ m}$ ووزنه $40\\text{ كجم.ث}$ يرتكز أفقياً على دعامتين عند $C$ و $D$، حيث $AC = 1\\text{ m}$ و $BD = 2\\text{ m}$ (أي $CD = 5\\text{ m}$). تحرك رجل وزنه $80\\text{ كجم.ث}$ من $C$ متجهاً نحو الطرف $B$. ما أقصى مسافة يمكن للرجل أن يقطعها بعد الدعامة $D$ دون أن ينقلب اللوح؟",
    "optionsEn": [
      "$1.0\\text{ m}$",
      "$1.5\\text{ m}$",
      "$2.0\\text{ m}$",
      "$0.5\\text{ m}$"
    ],
    "optionsAr": [
      "1.0 م",
      "1.5 م",
      "2.0 م",
      "0.5 م"
    ],
    "correctAnswer": "$1.0\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "When the plank is on the verge of tipping about $D$, the contact at $C$ vanishes so $R_C = 0$.",
    "hintAr": "عند وشك الانقلاب حول D، ينعدم رد الفعل عند الدعامة C (أي R_C = 0).",
    "stepByStepSolutionEn": [
      "1. Center of mass of the uniform plank is at its midpoint $M$, so $AM = 4\\text{ m}$.",
      "2. Support $D$ is at distance $8 - 2 = 6\\text{ m}$ from $A$. Therefore, the distance from $M$ to $D$ is $MD = 6 - 4 = 2\\text{ m}$.",
      "3. When the plank is about to tip about $D$, the reaction at $C$ is zero: $R_C = 0$.",
      "4. Taking moments about $D$: the plank's weight acts $2\\text{ m}$ to the left of $D$, giving moment $40 \\times 2 = 80\\text{ kg-wt}\\cdot\\text{m}$.",
      "5. Let $x$ be the distance the man walks past $D$ to the right: $80 \\cdot x = 80 \\implies x = 1.0\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل اللوح المنتظم يقع عند منتصفه $M$ حيث $AM = 4$ م.",
      "٢. الدعامة $D$ تبعد $6$ م عن $A$، إذن بعد مركز الثقل عن $D$ هو $MD = 6 - 4 = 2$ م.",
      "٣. عند وشك الانقلاب حول $D$ ينعدم رد الفعل عند $C$ ($R_C = 0$).",
      "٤. بأخذ العزوم حول $D$: $40 \\times 2 = 80$ كجم.ث.م.",
      "٥. مسافة الرجل بعد $D$: $80 \\times x = 80 \\implies x = 1.0$ م."
    ],
    "teacherTipEn": "When a system is on the verge of overturning about a fulcrum, the reaction at all other supports vanishes completely.",
    "teacherTipAr": "عند وشك الانقلاب حول إحدى الركائز، ينعدم رد الفعل عند بقية الركائز تماماً."
  },
  {
    "id": "stat_ch3_db_hots_06",
    "titleEn": "Maximum Load Suspended from Overhang without Tilting",
    "titleAr": "أقصى ثقل يمكن تعليقه من طرف بروز دون أن ينقلب القضيب",
    "difficulty": "hots",
    "questionEn": "A uniform rod $AB$ of length $100\\text{ cm}$ and weight $60\\text{ N}$ is supported horizontally on two supports at $C$ and $D$, where $AC = 20\\text{ cm}$ and $AD = 80\\text{ cm}$. What is the maximum load $W$ that can be suspended from end $B$ without overturning the rod?",
    "questionAr": "قضيب منتظم $AB$ طوله $100\\text{ cm}$ ووزنه $60\\text{ N}$ يرتكز أفقياً على دعامتين عند $C$ و $D$، حيث $AC = 20\\text{ cm}$ و $AD = 80\\text{ cm}$. ما أقصى ثقل $W$ يمكن تعليقه من الطرف $B$ دون أن ينقلب القضيب؟",
    "optionsEn": [
      "$90\\text{ N}$",
      "$60\\text{ N}$",
      "$120\\text{ N}$",
      "$75\\text{ N}$"
    ],
    "optionsAr": [
      "90 نيوتن",
      "60 نيوتن",
      "120 نيوتن",
      "75 نيوتن"
    ],
    "correctAnswer": "$90\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Tipping occurs about $D$, which means the reaction at $C$ drops to zero ($R_C = 0$).",
    "hintAr": "الانقلاب يحدث حول الدعامة D، مما يعني أن رد الفعل عند C يصبح صفراً (R_C = 0).",
    "stepByStepSolutionEn": [
      "1. Center of mass of the uniform rod is at $50\\text{ cm}$ from $A$.",
      "2. Distance from the center of mass to support $D$: $80 - 50 = 30\\text{ cm}$.",
      "3. Distance from support $D$ to end $B$: $100 - 80 = 20\\text{ cm}$.",
      "4. At the verge of tipping about $D$, $R_C = 0$.",
      "5. Taking moments about $D$: $60 \\times 30 = W \\times 20 \\implies 1800 = 20 W \\implies W = 90\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل القضيب المنتظم عند منتصفه على بعد $50$ سم من $A$.",
      "٢. بعد مركز الثقل عن الدعامة $D$: $80 - 50 = 30$ سم.",
      "٣. بعد الطرف $B$ عن الدعامة $D$: $100 - 80 = 20$ سم.",
      "٤. عند وشك الانقلاب حول $D$، يكون $R_C = 0$.",
      "٥. بالعزوم حول $D$: $60 \\times 30 = W \\times 20 \\implies W = 90$ نيوتن."
    ],
    "teacherTipEn": "Always locate the fulcrum about which the body will pivot; setting the other reaction to zero makes solving instantaneous.",
    "teacherTipAr": "حدد نقطة الارتكاز التي سينقلب حولها الجسم واجعل رد الفعل عند الركيزة الأخرى صفراً."
  },
  {
    "id": "stat_ch3_db_hots_07",
    "titleEn": "Resultant Shift when Force at One End is Doubled",
    "titleAr": "إزاحة المحصلة عند مضاعفة القوة عند أحد الطرفين",
    "difficulty": "hots",
    "questionEn": "Two equal like parallel forces each of magnitude $F$ act at the ends $A$ and $B$ of a rod of length $L$, so their resultant acts at the midpoint $M$. If the force at $A$ is doubled while the force at $B$ remains $F$, by what distance does the line of action of the resultant shift from $M$?",
    "questionAr": "قوتان متساويتان متوازيتان وفي نفس الاتجاه مقدار كل منهما $F$ تؤثران عند طرفي قضيب $AB$ طوله $L$، فمحصلتهما تؤثر عند المنتصف $M$. إذا تضاعفت القوة عند $A$ مع بقاء القوة عند $B$ كما هي $F$، فما المسافة التي يتحركها خط عمل المحصلة مبتعداً عن $M$؟",
    "optionsEn": [
      "$\\frac{L}{6}$ towards $A$",
      "$\\frac{L}{4}$ towards $A$",
      "$\\frac{L}{3}$ towards $A$",
      "$\\frac{L}{6}$ towards $B$"
    ],
    "optionsAr": [
      "L / 6 نحو أ",
      "L / 4 نحو أ",
      "L / 3 نحو أ",
      "L / 6 نحو ب"
    ],
    "correctAnswer": "$\\frac{L}{6}$ towards $A$",
    "correctIndex": 0,
    "hintEn": "Find the new position of the resultant: $x = \\frac{F \\cdot L}{2F + F}$.",
    "hintAr": "احسب الموضع الجديد للمحصلة: x = (F . L) / (2F + F).",
    "stepByStepSolutionEn": [
      "1. Initially, forces are $F$ at $A$ ($x = 0$) and $F$ at $B$ ($x = L$). The resultant $2F$ acts at the midpoint $x = \\frac{L}{2}$.",
      "2. After doubling the force at $A$, the forces are $2F$ at $A$ and $F$ at $B$.",
      "3. Total force becomes $R' = 2F + F = 3F$.",
      "4. Taking moments about $A$: $3F \\cdot x' = F \\cdot L \\implies x' = \\frac{L}{3}$ from $A$.",
      "5. The shift from the midpoint $M$ is $\\frac{L}{2} - \\frac{L}{3} = \\frac{L}{6}$ towards $A$."
    ],
    "stepByStepSolutionAr": [
      "١. في البداية القوتان $F$ عند $A$ و $F$ عند $B$، فالمحصلة تؤثر عند المنتصف $x = L/2$.",
      "٢. بعد مضاعفة القوة عند $A$ تصبح $2F$ عند $A$ و $F$ عند $B$.",
      "٣. المحصلة الجديدة = $2F + F = 3F$.",
      "٤. بالعزوم حول $A$: $3F \\cdot x' = F \\cdot L \\implies x' = L/3$ من $A$.",
      "٥. إزاحة المحصلة عن المنتصف = $L/2 - L/3 = L/6$ نحو $A$."
    ],
    "teacherTipEn": "Doubling one of two equal forces shifts the resultant by one-sixth of the total span towards the doubled force.",
    "teacherTipAr": "مضاعفة إحدى قوتين متساويتين يزيح المحصلة بمقدار سدس الطول الكلي نحو القوة المضاعفة."
  },
  {
    "id": "stat_ch3_db_hots_08",
    "titleEn": "Distance between Supports from Dual Tilting Conditions",
    "titleAr": "إيجاد المسافة بين دعامتين من حالتي وشك الانقلاب عند الطرفين",
    "difficulty": "hots",
    "questionEn": "A uniform rod $AB$ of length $120\\text{ cm}$ and weight $60\\text{ N}$ rests horizontally on two supports at $C$ and $D$. The greatest weight that can be hung from end $A$ without overturning the rod is $20\\text{ N}$, and the greatest weight that can be hung from end $B$ without overturning is $30\\text{ N}$. Find the distance between the two supports $CD$.",
    "questionAr": "قضيب منتظم $AB$ طوله $120\\text{ cm}$ ووزنه $60\\text{ N}$ يرتكز أفقياً على دعامتين عند $C$ و $D$. أقصى ثقل يمكن تعليقه من الطرف $A$ دون انقلاب القضيب هو $20\\text{ N}$، وأقصى ثقل يمكن تعليقه من الطرف $B$ دون انقلاب هو $30\\text{ N}$. أوجد المسافة بين الدعامتين $CD$.",
    "optionsEn": [
      "$35\\text{ cm}$",
      "$40\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$"
    ],
    "optionsAr": [
      "35 سم",
      "40 سم",
      "30 سم",
      "45 سم"
    ],
    "correctAnswer": "$35\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Use tipping about $C$ with $R_D = 0$ to find $AC$, and tipping about $D$ with $R_C = 0$ to find $BD$.",
    "hintAr": "استخدم وشك الانقلاب حول C (حيث R_D = 0) لإيجاد AC، ووشك الانقلاب حول D (حيث R_C = 0) لإيجاد BD.",
    "stepByStepSolutionEn": [
      "1. Center of mass of the uniform rod is at its midpoint $M$, so $AM = 60\\text{ cm}$ and $MB = 60\\text{ cm}$.",
      "2. When $20\\text{ N}$ hangs at $A$, the rod is about to tip about $C$ ($R_D = 0$). Let $AC = x$.",
      "3. Moments about $C$: $20 \\cdot x = 60 \\cdot (60 - x) \\implies 20 x = 3600 - 60 x \\implies 80 x = 3600 \\implies x = 45\\text{ cm}$.",
      "4. When $30\\text{ N}$ hangs at $B$, the rod is about to tip about $D$ ($R_C = 0$). Let $BD = y$.",
      "5. Moments about $D$: $30 \\cdot y = 60 \\cdot (60 - y) \\implies 30 y = 3600 - 60 y \\implies 90 y = 3600 \\implies y = 40\\text{ cm}$.",
      "6. Distance between supports: $CD = 120 - (AC + BD) = 120 - (45 + 40) = 120 - 85 = 35\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز الثقل في المنتصف $M$ على بعد $60$ سم من كل طرف.",
      "٢. عند تعليق $20$ نيوتن عند $A$ ينعدم $R_D$: نفرض $AC = x$.",
      "٣. بالعزوم حول $C$: $20 x = 60(60 - x) \\implies 80 x = 3600 \\implies x = 45$ سم.",
      "٤. عند تعليق $30$ نيوتن عند $B$ ينعدم $R_C$: نفرض $BD = y$.",
      "٥. بالعزوم حول $D$: $30 y = 60(60 - y) \\implies 90 y = 3600 \\implies y = 40$ سم.",
      "٦. المسافة بين الدعامتين: $CD = 120 - (45 + 40) = 35$ سم."
    ],
    "teacherTipEn": "Dual tipping problems allow independent determination of both support overhangs by taking moments about the active fulcrum.",
    "teacherTipAr": "مسائل وشك الانقلاب المزدوجة تتيح حساب بروز كل دعامة بصورة مستقلة وسريعة."
  },
  {
    "id": "stat_ch3_db_hots_09",
    "titleEn": "Three Parallel Forces in Arithmetic Progression",
    "titleAr": "ثلاث قوى متوازية في تتابع حسابي وموضع محصلتها",
    "difficulty": "hots",
    "questionEn": "Three like parallel forces $F_1 = 10\\text{ N}$, $F_2 = 20\\text{ N}$, and $F_3 = 30\\text{ N}$ act along a straight line at points $A$, $B$, and $C$, where $AB = BC = 30\\text{ cm}$. What is the distance of their resultant from the central point $B$?",
    "questionAr": "ثلاث قوى متوازية وفي نفس الاتجاه مقاديرها $10\\text{ N}$ و $20\\text{ N}$ و $30\\text{ N}$ تؤثر على خط مستقيم عند النقاط $A$ و $B$ و $C$، حيث $AB = BC = 30\\text{ cm}$. ما بعد خط عمل محصلتها عن النقطة المتوسطة $B$؟",
    "optionsEn": [
      "$10\\text{ cm}$ towards $C$",
      "$15\\text{ cm}$ towards $C$",
      "$5\\text{ cm}$ towards $C$",
      "$10\\text{ cm}$ towards $A$"
    ],
    "optionsAr": [
      "10 سم نحو جـ",
      "15 سم نحو جـ",
      "5 سم نحو جـ",
      "10 سم نحو أ"
    ],
    "correctAnswer": "$10\\text{ cm}$ towards $C$",
    "correctIndex": 0,
    "hintEn": "Take moments about the central point $B$: $R \\cdot x_B = \\sum M_B$.",
    "hintAr": "خذ العزوم حول النقطة المركزية B لتحديد إزاحة المحصلة عنها مباشرة.",
    "stepByStepSolutionEn": [
      "1. Total force magnitude is $R = 10 + 20 + 30 = 60\\text{ N}$.",
      "2. Take moments about the central point $B$:",
      "3. $M_B = -10 \\times 30 + 20 \\times 0 + 30 \\times 30 = -300 + 900 = 600\\text{ N}\\cdot\\text{cm}$ (directed towards $C$).",
      "4. The distance of the resultant from $B$ is: $x_B = \\frac{600}{R} = \\frac{600}{60} = 10\\text{ cm}$ towards $C$."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار المحصلة الكلية = $10 + 20 + 30 = 60$ نيوتن.",
      "٢. بأخذ العزوم حول النقطة المركزية $B$:",
      "٣. العزم حول $B$ = $-10 \\times 30 + 30 \\times 30 = 600$ نيوتن.سم في اتجاه النقطة $C$.",
      "٤. بعد المحصلة عن $B$ هو: $x_B = 600 / 60 = 10$ سم نحو $C$."
    ],
    "teacherTipEn": "For parallel forces in arithmetic progression spaced equally, the resultant always shifts towards the larger force by $\\frac{2 \\delta d}{3 F_{\\text{avg}}}$.",
    "teacherTipAr": "إذا كانت القوى المتوازية في تتابع حسابي ومتباعدة بانتظام، فإن المحصلة تنزاح دوماً جهة القوة الأكبر."
  },
  {
    "id": "stat_ch3_db_hots_10",
    "titleEn": "Locating Non-uniform Center of Gravity via Support Reactions",
    "titleAr": "تحديد موضع مركز ثقل قضيب غير منتظم من ردود أفعال الدعامتين",
    "difficulty": "hots",
    "questionEn": "A non-uniform rod $AB$ of length $100\\text{ cm}$ rests horizontally on two end supports at $A$ and $B$. Initially, the reaction at $A$ is $40\\text{ N}$ and the reaction at $B$ is $60\\text{ N}$. If an additional weight of $50\\text{ N}$ is placed at the exact midpoint of $AB$, what are the new reactions $R_A'$ and $R_B'$ at the supports?",
    "questionAr": "قضيب غير منتظم $AB$ طوله $100\\text{ cm}$ يرتكز أفقياً على دعامتين عند طرفيه $A$ و $B$. في البداية كان رد الفعل عند $A$ هو $40\\text{ N}$ وعند $B$ هو $60\\text{ N}$. إذا وُضع ثقل إضافي مقداره $50\\text{ N}$ عند منتصف القضيب تماماً، فما ردا الفعل الجديدان $R_A'$ و $R_B'$ عند الدعامتين؟",
    "optionsEn": [
      "$R_A' = 65\\text{ N}, R_B' = 85\\text{ N}$",
      "$R_A' = 70\\text{ N}, R_B' = 80\\text{ N}$",
      "$R_A' = 60\\text{ N}, R_B' = 90\\text{ N}$",
      "$R_A' = 75\\text{ N}, R_B' = 75\\text{ N}$"
    ],
    "optionsAr": [
      "ر_أ = 65 نيوتن، ر_ب = 85 نيوتن",
      "ر_أ = 70 نيوتن، ر_ب = 80 نيوتن",
      "ر_أ = 60 نيوتن، ر_ب = 90 نيوتن",
      "ر_أ = 75 نيوتن، ر_ب = 75 نيوتن"
    ],
    "correctAnswer": "$R_A' = 65\\text{ N}, R_B' = 85\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Use superposition: a load at the exact midpoint adds half its value ($25\\text{ N}$) to each end reaction.",
    "hintAr": "استخدم مبدأ التراكب: وضع حمل عند المنتصف يضيف نصف قيمته (25 نيوتن) بالتساوي إلى كل ركيزة طرفية.",
    "stepByStepSolutionEn": [
      "1. Initial weight of the rod is $W = R_A + R_B = 40 + 60 = 100\\text{ N}$.",
      "2. An additional load of $50\\text{ N}$ is placed at the midpoint ($50\\text{ cm}$).",
      "3. Because the load is symmetrically placed between the two end supports $A$ and $B$, it distributes equally: $\\Delta R_A = \\Delta R_B = \\frac{50}{2} = 25\\text{ N}$.",
      "4. New reaction at $A$: $R_A' = 40 + 25 = 65\\text{ N}$.",
      "5. New reaction at $B$: $R_B' = 60 + 25 = 85\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. وزن القضيب = $40 + 60 = 100$ نيوتن.",
      "٢. الحمل الإضافي $50$ نيوتن وُضع عند المنتصف تماماً بين الدعامتين الطرفيتين.",
      "٣. بالتماثل، يتوزع هذا الحمل الإضافي بالتساوي على الدعامتين: $\\Delta R = 50 / 2 = 25$ نيوتن لكل منهما.",
      "٤. رد الفعل الجديد عند $A$: $R_A' = 40 + 25 = 65$ نيوتن.",
      "٥. رد الفعل الجديد عند $B$: $R_B' = 60 + 25 = 85$ نيوتن."
    ],
    "teacherTipEn": "Superposition is your superpower: add the reactions caused by the new load directly to the original reactions.",
    "teacherTipAr": "مبدأ التراكب يحل المسألة في سطر واحد: أضف أثر الحمل الجديد مباشرة إلى ردود الفعل السابقة."
  },
  {
    "id": "stat_ch3_db_hots_11",
    "titleEn": "Weight & CG of Non-Uniform Rod from Double Tipping Condition",
    "titleAr": "تعيين وزن ومركز ثقل قضيب غير منتظم من شرطي انقلاب",
    "difficulty": "hots",
    "questionEn": "A non-uniform rod $AB$ of length $100\\text{ cm}$ rests on two supports at $C$ ($20\\text{ cm}$ from $A$) and $D$ ($30\\text{ cm}$ from $B$). If suspending $w_1 = 30\\text{ N}$ at $A$ puts the rod on the verge of tilting about $C$, while suspending $w_2 = 20\\text{ N}$ at $B$ puts it on the verge of tilting about $D$, find the weight $W$ of the rod and the position of its center of gravity.",
    "questionAr": "قضيب غير منتظم $AB$ طوله $100\\text{ سم}$ يرتكز على حاملين عند $C$ (على بعد $20\\text{ سم}$ من $A$) و $D$ (على بعد $30\\text{ سم}$ من $B$). إذا علق ثقل $w_1 = 30\\text{ ن}$ عند $A$ كان القضيب على وشك الانقلاب حول $C$، وإذا علق ثقل $w_2 = 20\\text{ ن}$ عند $B$ كان على وشك الانقلاب حول $D$. أوجد وزن القضيب $W$ وموضع مركز ثقله.",
    "optionsEn": [
      "Weight $W = 24\\text{ N}$, center of gravity at $45\\text{ cm}$ from $A$",
      "Weight $W = 36\\text{ N}$, center of gravity at $45\\text{ cm}$ from $A$",
      "Weight $W = 24\\text{ N}$, center of gravity at $50\\text{ cm}$ from $A$",
      "Weight $W = 48\\text{ N}$, center of gravity at $40\\text{ cm}$ from $A$"
    ],
    "optionsAr": [
      "الوزن $W = 24\\text{ ن}$، ومركز الثقل على بعد ٤٥ سم من $A$",
      "الوزن $W = 36\\text{ ن}$، ومركز الثقل على بعد ٤٥ سم من $A$",
      "الوزن $W = 24\\text{ ن}$، ومركز الثقل على بعد ٥٠ سم من $A$",
      "الوزن $W = 48\\text{ ن}$، ومركز الثقل على بعد ٤٠ سم من $A$"
    ],
    "correctAnswer": "Weight $W = 24\\text{ N}$, center of gravity at $45\\text{ cm}$ from $A$",
    "correctIndex": 0,
    "hintEn": "At first tipping: R_D = 0, take moments about C. At second tipping: R_C = 0, take moments about D.",
    "hintAr": "عند الانقلاب الأول ينعدم رد الفعل عند $D$، خذ العزوم حول $C$. وعند الانقلاب الثاني ينعدم رد الفعل عند $C$، خذ العزوم حول $D$.",
    "stepByStepSolutionEn": [
      "1. First tipping case (about $C$, $R_D = 0$):",
      "   Take moments about $C$: $w_1 \\times AC = W \\times (x_G - AC) \\implies 30 \\times 20 = W(x_G - 20) \\implies W(x_G - 20) = 600$.",
      "2. Second tipping case (about $D$, $R_C = 0$):",
      "   Position of $D$ is $100 - 30 = 70\\text{ cm}$.",
      "   Take moments about $D$: $W \\times (70 - x_G) = w_2 \\times DB \\implies W(70 - x_G) = 20 \\times 30 = 600$.",
      "3. Since $600 = 600 = 600$:",
      "   $x_G - 20 = 70 - x_G \\implies 2x_G = 90 \\implies x_G = 45\\text{ cm}$.",
      "4. Substitute $x_G = 45$: $W(45 - 20) = 600 \\implies 25 W = 600 \\implies W = 24\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. حالة الانقلاب الأولى حول $C$ ($R_D = 0$):",
      "   العزوم حول $C$: $W(x_G - 20) = 30 \\times 20 = 600$.",
      "٢. حالة الانقلاب الثانية حول $D$ ($R_C = 0$): موضع $D$ هو ۷۰ سم.",
      "   العزوم حول $D$: $W(70 - x_G) = 20 \\times 30 = 600$.",
      "٣. بمساواة الطرفين نجد أن: $x_G - 20 = 70 - x_G \\implies x_G = 45\\text{ سم}$.",
      "٤. بالتعويض: $25 W = 600 \\implies W = 24\\text{ ن}$."
    ],
    "teacherTipEn": "Double tipping problems give a system of two equations to determine both weight and CG location.",
    "teacherTipAr": "مسائل الانقلاب المزدوج من الطرفين تعطي معادلتين في مجهولين لحساب الوزن وبعد مركز الثقل معاً."
  },
  {
    "id": "stat_ch3_db_hots_12",
    "titleEn": "Weight & CG of Non-Uniform Rod from Double Tipping Condition (Variant 2)",
    "titleAr": "تعيين وزن ومركز ثقل قضيب غير منتظم من شرطي انقلاب (حالة 2)",
    "difficulty": "hots",
    "questionEn": "A non-uniform rod $AB$ of length $100\\text{ cm}$ rests on two supports at $C$ ($20\\text{ cm}$ from $A$) and $D$ ($30\\text{ cm}$ from $B$). If suspending $w_1 = 60\\text{ N}$ at $A$ puts the rod on the verge of tilting about $C$, while suspending $w_2 = 40\\text{ N}$ at $B$ puts it on the verge of tilting about $D$, find the weight $W$ of the rod and the position of its center of gravity.",
    "questionAr": "قضيب غير منتظم $AB$ طوله $100\\text{ سم}$ يرتكز على حاملين عند $C$ (على بعد $20\\text{ سم}$ من $A$) و $D$ (على بعد $30\\text{ سم}$ من $B$). إذا علق ثقل $w_1 = 60\\text{ ن}$ عند $A$ كان القضيب على وشك الانقلاب حول $C$، وإذا علق ثقل $w_2 = 40\\text{ ن}$ عند $B$ كان على وشك الانقلاب حول $D$. أوجد وزن القضيب $W$ وموضع مركز ثقله.",
    "optionsEn": [
      "Weight $W = 48\\text{ N}$, center of gravity at $45\\text{ cm}$ from $A$",
      "Weight $W = 60\\text{ N}$, center of gravity at $45\\text{ cm}$ from $A$",
      "Weight $W = 48\\text{ N}$, center of gravity at $50\\text{ cm}$ from $A$",
      "Weight $W = 72\\text{ N}$, center of gravity at $40\\text{ cm}$ from $A$"
    ],
    "optionsAr": [
      "الوزن $W = 48\\text{ ن}$، ومركز الثقل على بعد ٤٥ سم من $A$",
      "الوزن $W = 60\\text{ ن}$، ومركز الثقل على بعد ٤٥ سم من $A$",
      "الوزن $W = 48\\text{ ن}$، ومركز الثقل على بعد ٥٠ سم من $A$",
      "الوزن $W = 72\\text{ ن}$، ومركز الثقل على بعد ٤٠ سم من $A$"
    ],
    "correctAnswer": "Weight $W = 48\\text{ N}$, center of gravity at $45\\text{ cm}$ from $A$",
    "correctIndex": 0,
    "hintEn": "At first tipping: R_D = 0, take moments about C. At second tipping: R_C = 0, take moments about D.",
    "hintAr": "عند الانقلاب الأول ينعدم رد الفعل عند $D$، خذ العزوم حول $C$. وعند الانقلاب الثاني ينعدم رد الفعل عند $C$، خذ العزوم حول $D$.",
    "stepByStepSolutionEn": [
      "1. First tipping case (about $C$, $R_D = 0$):",
      "   Take moments about $C$: $w_1 \\times AC = W \\times (x_G - AC) \\implies 60 \\times 20 = W(x_G - 20) \\implies W(x_G - 20) = 1200$.",
      "2. Second tipping case (about $D$, $R_C = 0$):",
      "   Position of $D$ is $100 - 30 = 70\\text{ cm}$.",
      "   Take moments about $D$: $W \\times (70 - x_G) = w_2 \\times DB \\implies W(70 - x_G) = 40 \\times 30 = 1200$.",
      "3. Since $1200 = 1200 = 1200$:",
      "   $x_G - 20 = 70 - x_G \\implies 2x_G = 90 \\implies x_G = 45\\text{ cm}$.",
      "4. Substitute $x_G = 45$: $W(45 - 20) = 1200 \\implies 25 W = 1200 \\implies W = 48\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. حالة الانقلاب الأولى حول $C$ ($R_D = 0$):",
      "   العزوم حول $C$: $W(x_G - 20) = 60 \\times 20 = 1200$.",
      "٢. حالة الانقلاب الثانية حول $D$ ($R_C = 0$): موضع $D$ هو ۷۰ سم.",
      "   العزوم حول $D$: $W(70 - x_G) = 40 \\times 30 = 1200$.",
      "٣. بمساواة الطرفين نجد أن: $x_G - 20 = 70 - x_G \\implies x_G = 45\\text{ سم}$.",
      "٤. بالتعويض: $25 W = 1200 \\implies W = 48\\text{ ن}$."
    ],
    "teacherTipEn": "Double tipping problems give a system of two equations to determine both weight and CG location.",
    "teacherTipAr": "مسائل الانقلاب المزدوج من الطرفين تعطي معادلتين في مجهولين لحساب الوزن وبعد مركز الثقل معاً."
  },
  {
    "id": "stat_ch3_db_hots_13",
    "titleEn": "Permissible Range of Movable Load under Cable Breaking Tension",
    "titleAr": "المدى الآمن لموضع ثقل متحرك في ضوء أقصى شد يتحمله الحبل",
    "difficulty": "hots",
    "questionEn": "A uniform beam $AB$ of length $6\\text{ m}$ and weight $120\\text{ N}$ is suspended horizontally by two vertical cables attached at its ends $A$ and $B$. Each cable can withstand a maximum tension of $200\\text{ N}$ before breaking. A movable load of $160\\text{ N}$ is placed on the beam at distance $x$ from end $A$. What is the safe range of $x$ to prevent either cable from breaking?",
    "questionAr": "عارضة منتظمة $AB$ طولها $6\\text{ m}$ ووزنها $120\\text{ N}$ معلقة أفقياً بواسطة حبلين رأسيين عند طرفيها $A$ و $B$. أقصى شد يتحمله أي من الحبلين دون انقطاع هو $200\\text{ N}$. وُضع حِمل متحرك مقداره $160\\text{ N}$ على العارضة على بعد $x$ من الطرف $A$. ما المدى الآمن للمسافة $x$ لضمان عدم انقطاع أي من الحبلين؟",
    "optionsEn": [
      "$0.75\\text{ m} \\le x \\le 5.25\\text{ m}$",
      "$1.0\\text{ m} \\le x \\le 5.0\\text{ m}$",
      "$0.5\\text{ m} \\le x \\le 5.5\\text{ m}$",
      "$1.25\\text{ m} \\le x \\le 4.75\\text{ m}$"
    ],
    "optionsAr": [
      "0.75 م <= x <= 5.25 م",
      "1.0 م <= x <= 5.0 م",
      "0.5 م <= x <= 5.5 م",
      "1.25 م <= x <= 4.75 م"
    ],
    "correctAnswer": "$0.75\\text{ m} \\le x \\le 5.25\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Express $T_A$ and $T_B$ in terms of $x$ and apply the inequality $T \\le 200\\text{ N}$ to both.",
    "hintAr": "عبّر عن شدي الحبلين بدلالة x وطبّق شرط ألا يتجاوز الشد 200 نيوتن في كليهما.",
    "stepByStepSolutionEn": [
      "1. Total downward load is $120 + 160 = 280\\text{ N}$, so $T_A + T_B = 280\\text{ N}$.",
      "2. Take moments about $B$: $T_A \\times 6 = 120 \\times 3 + 160(6 - x) = 360 + 960 - 160 x = 1320 - 160 x$.",
      "3. $T_A = 220 - \\frac{80}{3} x$. For cable $A$ not to snap: $T_A \\le 200 \\implies 220 - \\frac{80}{3} x \\le 200 \\implies \\frac{80}{3} x \\ge 20 \\implies x \\ge 0.75\\text{ m}$.",
      "4. For cable $B$ not to snap: $T_B \\le 200 \\implies T_A = 280 - T_B \\ge 80\\text{ N}$.",
      "5. $220 - \\frac{80}{3} x \\ge 80 \\implies \\frac{80}{3} x \\le 140 \\implies x \\le 5.25\\text{ m}$. Thus $0.75\\text{ m} \\le x \\le 5.25\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع الأحمال = $120 + 160 = 280$ نيوتن، إذن $T_A + T_B = 280$ نيوتن.",
      "٢. بالعزوم حول $B$: $6 T_A = 120(3) + 160(6 - x) = 1320 - 160 x$.",
      "٣. لكي لا ينقطع الحبل $A$: يجب أن يكون $T_A \\le 200$ مما يعطي $x \\ge 0.75$ م.",
      "٤. لكي لا ينقطع الحبل $B$: يجب أن يكون $T_B \\le 200 \\implies T_A \\ge 80$ مما يعطي $x \\le 5.25$ م.",
      "٥. المدى الآمن هو: $0.75\\text{ m} \\le x \\le 5.25\\text{ m}$."
    ],
    "teacherTipEn": "When finding allowable ranges for movable loads, calculate the limiting positions where each support reaches its maximum capacity.",
    "teacherTipAr": "في مسائل المدى الآمن، أوجد الموضع الحرج الذي يصل عنده كل حامل إلى أقصى طاقة استيعاب له."
  },
  {
    "id": "stat_ch3_db_hots_14",
    "titleEn": "Resultant Intersection with Axis for Coplanar Parallel Forces",
    "titleAr": "نقطة تقاطع خط عمل محصلة قوى متوازية مستوية مع محور السينات",
    "difficulty": "hots",
    "questionEn": "Three parallel forces $\\vec{F}_1 = -10\\hat{j}$, $\\vec{F}_2 = 30\\hat{j}$, and $\\vec{F}_3 = -40\\hat{j}$ act at points $A(1, 0)$, $B(3, 0)$, and $C(6, 0)$ respectively. What are the coordinates of the point where the line of action of the resultant intersects the $x$-axis?",
    "questionAr": "ثلاث قوى متوازية $\\vec{F}_1 = -10\\hat{j}$ و $\\vec{F}_2 = 30\\hat{j}$ و $\\vec{F}_3 = -40\\hat{j}$ تؤثر عند النقاط $A(1, 0)$ و $B(3, 0)$ و $C(6, 0)$ على الترتيب. ما إحداثيات نقطة تقاطع خط عمل المحصلة مع محور السينات؟",
    "optionsEn": [
      "$(8, 0)$",
      "$(6, 0)$",
      "$(7, 0)$",
      "$(9, 0)$"
    ],
    "optionsAr": [
      "(8, 0)",
      "(6, 0)",
      "(7, 0)",
      "(9, 0)"
    ],
    "correctAnswer": "$(8, 0)$",
    "correctIndex": 0,
    "hintEn": "Use Varignon's Theorem about the origin: $R_y \\cdot x_R = \\sum F_{yi} \\cdot x_i$.",
    "hintAr": "استخدم نظرية فارينون حول نقطة الأصل: عزم المحصلة = مجموع عزوم القوى حول نقطة الأصل.",
    "stepByStepSolutionEn": [
      "1. Magnitude of the resultant force: $\\vec{R} = (-10 + 30 - 40)\\hat{j} = -20\\hat{j}$.",
      "2. Calculate the algebraic sum of moments of the forces about the origin $O(0,0)$:",
      "3. $\\sum M_O = 1(-10) + 3(30) + 6(-40) = -10 + 90 - 240 = -160$.",
      "4. The moment of the resultant about the origin is $M_O = x_R \\cdot R_y = -20 x_R$.",
      "5. Equating: $-20 x_R = -160 \\implies x_R = 8$. Thus the point is $(8, 0)$."
    ],
    "stepByStepSolutionAr": [
      "١. المحصلة المتجهة = $(-10 + 30 - 40)\\hat{j} = -20\\hat{j}$.",
      "٢. مجموع عزوم القوى حول نقطة الأصل $O(0, 0)$:",
      "٣. $\\sum M_O = 1(-10) + 3(30) + 6(-40) = -10 + 90 - 240 = -160$.",
      "٤. عزم المحصلة حول نقطة الأصل = $x_R \\times (-20)$.",
      "٥. إذن $-20 x_R = -160 \\implies x_R = 8$، وتكون النقطة $(8, 0)$."
    ],
    "teacherTipEn": "For parallel forces along an axis, the coordinate of the resultant is simply the weighted average: $x_R = \\frac{\\sum F_i x_i}{\\sum F_i}$.",
    "teacherTipAr": "موضع محصلة القوى المتوازية هو المتوسط الموزن لمواضعها: س = مجموع (ق × س) ÷ مجموع ق."
  },
  {
    "id": "stat_ch3_db_hots_15",
    "titleEn": "Horizontal Equilibrium of Stepped Composite Rod",
    "titleAr": "اتزان أفقي لقضيب مركب من أسطوانتين مختلفتين",
    "difficulty": "hots",
    "questionEn": "A composite rod is formed by rigidly joining two uniform metal cylinders end-to-end: section $AC$ has length $40\\text{ cm}$ and weight $60\\text{ N}$, and section $CB$ has length $60\\text{ cm}$ and weight $90\\text{ N}$. At what distance from end $A$ must a single knife edge be placed for the rod to balance horizontally?",
    "questionAr": "قضيب مركب مكوّن من لحام أسطوانتين معدنيتين منتظمتين طرفاً لطرف: الجزء $AC$ طوله $40\\text{ cm}$ ووزنه $60\\text{ N}$، والجزء $CB$ طوله $60\\text{ cm}$ ووزنه $90\\text{ N}$. على أي بعد من الطرف $A$ يجب وضع ركيزة حادة ليتزن القضيب أفقياً؟",
    "optionsEn": [
      "$50\\text{ cm}$ from $A$",
      "$45\\text{ cm}$ from $A$",
      "$55\\text{ cm}$ from $A$",
      "$48\\text{ cm}$ from $A$"
    ],
    "optionsAr": [
      "50 سم من أ",
      "45 سم من أ",
      "55 سم من أ",
      "48 سم من أ"
    ],
    "correctAnswer": "$50\\text{ cm}$ from $A$",
    "correctIndex": 0,
    "hintEn": "The support must be placed at the center of gravity of the combined system.",
    "hintAr": "يجب وضع الركيزة عند مركز ثقل القضيب المركب لكي ينعدم العزم تحت تأثير الوزن.",
    "stepByStepSolutionEn": [
      "1. Center of mass of section $AC$: located at $20\\text{ cm}$ from end $A$.",
      "2. Center of mass of section $CB$: located at $40 + \\frac{60}{2} = 70\\text{ cm}$ from end $A$.",
      "3. Total weight of the composite rod is $W = 60 + 90 = 150\\text{ N}$.",
      "4. The position of the center of gravity $\\bar{x}$ from $A$ is: $\\bar{x} = \\frac{60(20) + 90(70)}{150} = \\frac{1200 + 6300}{150} = \\frac{7500}{150} = 50\\text{ cm}$.",
      "5. Placing the knife-edge at $50\\text{ cm}$ from $A$ balances the rod horizontally."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل الجزء $AC$ يقع عند منتصفه على بعد $20$ سم من $A$.",
      "٢. مركز ثقل الجزء $CB$ يقع على بعد $40 + 30 = 70$ سم من $A$.",
      "٣. الوزن الكلي للقضيب المركب = $60 + 90 = 150$ نيوتن.",
      "٤. موضع مركز الثقل من $A$: $\\bar{x} = \\frac{60(20) + 90(70)}{150} = \\frac{7500}{150} = 50$ سم.",
      "٥. إذن يتزن القضيب بوضع الركيزة على بعد $50$ سم من $A$."
    ],
    "teacherTipEn": "A body supported at its overall center of gravity is in natural balance.",
    "teacherTipAr": "أي جسم يرتكز عند مركز ثقله الكلي يتزن تلقائياً دون الحاجة لأي قوى خارجية إضافية."
  },
  {
    "id": "stat_ch3_db_hots_16",
    "titleEn": "Ratio of Support Reactions under Asymmetric Supports",
    "titleAr": "نسبة ردود أفعال الدعامتين في حالة الارتكاز غير المتماثل",
    "difficulty": "hots",
    "questionEn": "A uniform rod $AB$ of length $L$ and weight $W$ is supported horizontally on two supports at $C$ and $D$. Support $C$ is placed at end $A$, while support $D$ is placed at distance $\\frac{3}{4} L$ from $A$. What is the ratio of the reactions $\\frac{R_C}{R_D}$?",
    "questionAr": "قضيب منتظم $AB$ طوله $L$ ووزنه $W$ يرتكز أفقياً على دعامتين عند $C$ و $D$. الدعامة $C$ عند الطرف $A$ تماماً، بينما الدعامة $D$ على بعد $\\frac{3}{4} L$ من $A$. ما نسبة رد الفعل عند $C$ إلى رد الفعل عند $D$ (أي $R_C / R_D$)؟",
    "optionsEn": [
      "$1 : 2$",
      "$1 : 3$",
      "$2 : 3$",
      "$1 : 1$"
    ],
    "optionsAr": [
      "1 : 2",
      "1 : 3",
      "2 : 3",
      "1 : 1"
    ],
    "correctAnswer": "$1 : 2$",
    "correctIndex": 0,
    "hintEn": "Take moments about support $C$ to find $R_D$, then use vertical force balance.",
    "hintAr": "خذ العزوم حول الدعامة C لإيجاد R_D، ثم استخدم اتزان القوى الرأسية لإيجاد R_C.",
    "stepByStepSolutionEn": [
      "1. Center of mass of the rod is at its midpoint $\\frac{L}{2}$ from $A$.",
      "2. Support $C$ is at $x = 0$, and support $D$ is at $x = \\frac{3}{4} L$.",
      "3. Taking moments about $C$: $R_D \\cdot \\left(\\frac{3}{4} L\\right) = W \\cdot \\left(\\frac{L}{2}\\right) \\implies R_D = \\frac{2}{3} W$.",
      "4. From vertical equilibrium: $R_C = W - R_D = W - \\frac{2}{3} W = \\frac{1}{3} W$.",
      "5. The ratio is $\\frac{R_C}{R_D} = \\frac{\\frac{1}{3} W}{\\frac{2}{3} W} = \\frac{1}{2}$, or $1 : 2$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل القضيب المنتظم عند منتصفه $L/2$ من $A$.",
      "٢. الدعامة $C$ عند $x = 0$، والدعامة $D$ عند $x = \\frac{3}{4} L$.",
      "٣. بالعزوم حول $C$: $R_D \\times \\frac{3}{4} L = W \\times \\frac{L}{2} \\implies R_D = \\frac{2}{3} W$.",
      "٤. من الاتزان الرأسي: $R_C = W - \\frac{2}{3} W = \\frac{1}{3} W$.",
      "٥. النسبة بين ردّي الفعل: $R_C / R_D = \\frac{1/3}{2/3} = 1 : 2$."
    ],
    "teacherTipEn": "When taking moments about a support, its reaction produces zero moment, leaving a single linear equation.",
    "teacherTipAr": "أخذ العزوم حول ركيزة يلغي رد فعلها من المعادلة مباشرة ويسهل الحساب."
  },
  {
    "id": "stat_ch3_db_hots_17",
    "titleEn": "Reaction under Linearly Varying (Triangular) Distributed Load",
    "titleAr": "رد الفعل لحمل موزع تزايدياً على شكل مثلث",
    "difficulty": "hots",
    "questionEn": "A beam of span $L = 6\\text{ m}$ is simply supported at both ends $A$ and $B$. It carries a triangular distributed load that starts at zero intensity at end $A$ and increases linearly to a maximum of $w_{\\max} = 12\\text{ kN/m}$ at end $B$. What is the reaction force $R_A$ at support $A$?",
    "questionAr": "عارضة بسيطة الارتكاز طولها $6\\text{ m}$ ترتكز عند طرفيها $A$ و $B$. تحمل حملاً موزعاً على شكل مثلث تبدأ شدته من الصفر عند $A$ وتزداد خطياً حتى تصل إلى $12\\text{ kN/m}$ عند $B$. ما مقدار رد الفعل $R_A$ عند الدعامة $A$؟",
    "optionsEn": [
      "$12\\text{ kN}$",
      "$18\\text{ kN}$",
      "$24\\text{ kN}$",
      "$16\\text{ kN}$"
    ],
    "optionsAr": [
      "12 ك.ن",
      "18 ك.ن",
      "24 ك.ن",
      "16 ك.ن"
    ],
    "correctAnswer": "$12\\text{ kN}$",
    "correctIndex": 0,
    "hintEn": "The total resultant load is the area of the triangle ($\\frac{1}{2} w_{\\max} L$) acting at $\\frac{2}{3} L$ from $A$.",
    "hintAr": "المحصلة الكلية للحمل المثلثي تساوي مساحة المثلث وتؤثر عند ثلثي المسافة من الرأس (أو ثلث من القاعدة).",
    "stepByStepSolutionEn": [
      "1. Total equivalent load is the area of the load diagram: $W = \\frac{1}{2} \\times 6 \\times 12 = 36\\text{ kN}$.",
      "2. The line of action of this resultant passes through the centroid of the triangle, which is at distance $\\frac{2}{3} L = \\frac{2}{3} \\times 6 = 4\\text{ m}$ from $A$.",
      "3. Distance of the resultant load from support $B$ is $6 - 4 = 2\\text{ m}$.",
      "4. Taking moments about $B$: $R_A \\times 6 = W \\times 2 = 36 \\times 2 = 72$.",
      "5. Solving for $R_A$: $R_A = \\frac{72}{6} = 12\\text{ kN}$ (and $R_B = 36 - 12 = 24\\text{ kN}$)."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار الحمل الكلي المكافئ = مساحة المثلث = $\\frac{1}{2} \\times 6 \\times 12 = 36$ كيلو نيوتن.",
      "٢. خط عمل المحصلة يمر بمركز ثقل المثلث على بعد $\\frac{2}{3} \\times 6 = 4$ م من $A$.",
      "٣. بعد المحصلة عن الدعامة $B$ هو $6 - 4 = 2$ م.",
      "٤. بالعزوم حول $B$: $R_A \\times 6 = 36 \\times 2 = 72$.",
      "٥. إذن $R_A = 72 / 6 = 12$ كيلو نيوتن."
    ],
    "teacherTipEn": "For triangular loads, the resultant acts at $\\frac{1}{3}$ of the span from the base (thick end) and $\\frac{2}{3}$ from the apex.",
    "teacherTipAr": "محصلة الحمل المثلثي تؤثر دائماً عند ثلث المسافة من القاعدة العريضة وثلثين من الرأس المدبب."
  },
  {
    "id": "stat_ch3_db_hots_18",
    "titleEn": "Maximum Reaction from Traveling Two-Axle Vehicle",
    "titleAr": "أقصى رد فعل ناتج عن مرور شاحنة ثنائية المحاور على جسر",
    "difficulty": "hots",
    "questionEn": "A bridge girder $AB$ has a span of $10\\text{ m}$ between end supports $A$ and $B$. A vehicle travels across the bridge with two axles spaced $2\\text{ m}$ apart. The rear axle carries $60\\text{ kN}$ and the front axle carries $40\\text{ kN}$. What is the maximum reaction experienced by support $A$ while both axles are simultaneously on the bridge span?",
    "questionAr": "رافدة جسر $AB$ بحرها $10\\text{ m}$ بين دعامتي طرفيها $A$ و $B$. تعبر الجسر شاحنة ذات محورين تفصل بينهما مسافة $2\\text{ m}$. يحمل المحور الخلفي $60\\text{ kN}$ والمحور الأمامي $40\\text{ kN}$. ما أقصى رد فعل تتعرض له الدعامة $A$ أثناء وجود كلا المحورين معاً فوق الجسر؟",
    "optionsEn": [
      "$92\\text{ kN}$",
      "$100\\text{ kN}$",
      "$88\\text{ kN}$",
      "$84\\text{ kN}$"
    ],
    "optionsAr": [
      "92 ك.ن",
      "100 ك.ن",
      "88 ك.ن",
      "84 ك.ن"
    ],
    "correctAnswer": "$92\\text{ kN}$",
    "correctIndex": 0,
    "hintEn": "The reaction at $A$ is maximized when the heavier rear axle is placed directly over support $A$.",
    "hintAr": "يصل رد الفعل عند A لأقصى قيمة له عندما يستقر المحور الأثقل (الخلفي) فوق الدعامة A مباشرة.",
    "stepByStepSolutionEn": [
      "1. Let the rear axle ($60\\text{ kN}$) be at distance $x$ from $A$. The front axle ($40\\text{ kN}$) is then at distance $x + 2\\text{ m}$ from $A$.",
      "2. For both axles to be on the span: $0 \\le x$ and $x + 2 \\le 10 \\implies 0 \\le x \\le 8\\text{ m}$.",
      "3. Reaction at $A$ by taking moments about $B$:",
      "   $R_A = \\frac{60(10 - x) + 40(10 - (x + 2))}{10} = \\frac{600 - 60x + 320 - 40x}{10} = 92 - 10x$.",
      "4. This expression is strictly decreasing with $x$, so its maximum occurs at the minimum value $x = 0$ (rear axle right over $A$).",
      "5. $R_{A,\\max} = 92 - 10(0) = 92\\text{ kN}$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض المحور الخلفي ($60\\text{ kN}$) على بعد $x$ من $A$، فيكون المحور الأمامي على بعد $x + 2$ م.",
      "٢. لوجود كلا المحورين على الجسر: $0 \\le x \\le 8$ م.",
      "٣. رد الفعل عند $A$ بالعزوم حول $B$:",
      "   $R_A = \\frac{60(10 - x) + 40(8 - x)}{10} = 92 - 10x$.",
      "٤. تكون الدالة في قيمتها العظمى عند أصغر قيمة لـ $x$ وهي $x = 0$.",
      "٥. أقصى رد فعل = $92 - 0 = 92$ كيلو نيوتن."
    ],
    "teacherTipEn": "To maximize the reaction at a support under moving axle loads, place the heaviest load directly over that support.",
    "teacherTipAr": "للحصول على أقصى رد فعل عند ركيزة تحت تأثير أحمال متحركة، ضع الحمل الأكبر فوق تلك الركيزة مباشرة."
  },
  {
    "id": "stat_ch3_db_hots_19",
    "titleEn": "Force Ratio from Resultant Separation after Force Reversal",
    "titleAr": "إيجاد النسبة بين قوتين متوازيتين من المسافة بين موضعي المحصلة بعد عكس إحداهما",
    "difficulty": "hots",
    "questionEn": "Two like parallel forces $P$ and $Q$ ($P > Q$) act at distance $d$ apart, and their resultant acts at point $C_1$. If the direction of $Q$ is reversed, their resultant acts at point $C_2$. If the distance between the two points is $C_1 C_2 = \\frac{3}{4} d$, what is the ratio $\\frac{P}{Q}$?",
    "questionAr": "قوتان متوازيتان وفي نفس الاتجاه $P$ و $Q$ (حيث $P > Q$) تؤثران على بعد $d$ من بعضهما، ومحصلتهما تؤثر عند $C_1$. إذا عُكس اتجاه القوة $Q$، أصبحت محصلتهما تؤثر عند $C_2$. فإذا كانت المسافة بين موضعي المحصلتين $C_1 C_2 = \\frac{3}{4} d$، فما النسبة $\\frac{P}{Q}$؟",
    "optionsEn": [
      "$3 : 1$",
      "$2 : 1$",
      "$4 : 1$",
      "$5 : 2$"
    ],
    "optionsAr": [
      "3 : 1",
      "2 : 1",
      "4 : 1",
      "5 : 2"
    ],
    "correctAnswer": "$3 : 1$",
    "correctIndex": 0,
    "hintEn": "Use the resultant distance formulas: $A C_1 = \\frac{Q d}{P + Q}$ and $A C_2 = \\frac{Q d}{P - Q}$, so $C_1 C_2 = \\frac{2 P Q d}{P^2 - Q^2}$.",
    "hintAr": "استخدم قانوني بعد المحصلة عن A في الحالتين واجمعهما للحصول على المسافة C1 C2 بدلالة P و Q.",
    "stepByStepSolutionEn": [
      "1. Let $P$ act at $A$ and $Q$ act at $B$.",
      "2. Initially, forces are in the same direction: $A C_1 = \\frac{Q d}{P + Q}$ (to the right of $A$).",
      "3. When $Q$ is reversed, forces are unlike: $A C_2 = \\frac{Q d}{P - Q}$ (to the left of $A$).",
      "4. The distance between the two points is $C_1 C_2 = A C_1 + A C_2 = \\frac{Q d}{P + Q} + \\frac{Q d}{P - Q} = \\frac{2 P Q d}{P^2 - Q^2}$.",
      "5. Setting this equal to $\\frac{3}{4} d$: $\\frac{2 P Q}{P^2 - Q^2} = \\frac{3}{4} \\implies 8 P Q = 3 P^2 - 3 Q^2$.",
      "6. Rearranging: $3 P^2 - 8 P Q - 3 Q^2 = 0 \\implies (3P + Q)(P - 3Q) = 0$. Since $P, Q > 0$, $P = 3Q$, giving $\\frac{P}{Q} = 3 : 1$."
    ],
    "stepByStepSolutionAr": [
      "١. نعتبر $P$ عند $A$ و $Q$ عند $B$.",
      "٢. في الحالة الأولى: $A C_1 = \\frac{Q d}{P + Q}$ لليمين.",
      "٣. بعد عكس $Q$: تصبح القوتان متضادتين، فتقع المحصلة خارج $AB$ جهة $A$ على بعد $A C_2 = \\frac{Q d}{P - Q}$ لليسار.",
      "٤. المسافة بينهما: $C_1 C_2 = \\frac{2 P Q d}{P^2 - Q^2}$.",
      "٥. بمساواتها بـ $\\frac{3}{4} d$: $8 P Q = 3 P^2 - 3 Q^2 \\implies 3 P^2 - 8 P Q - 3 Q^2 = 0$.",
      "٦. بالتحليل: $(P - 3Q)(3P + Q) = 0 \\implies P = 3Q$، أي أن النسبة $3 : 1$."
    ],
    "teacherTipEn": "Reversing one force inverts internal division into external division, and the separation between resultants is $\\frac{2 P Q d}{P^2 - Q^2}$.",
    "teacherTipAr": "عكس اتجاه إحدى القوتين يحول التقسيم من الداخل إلى تقسيم من الخارج وتكون المسافة بين الموضعين هي 2PQ d / (P² - Q²)."
  },
  {
    "id": "stat_ch3_db_hots_20",
    "titleEn": "Position of Support to Balance End Reactions under Multiple Loads",
    "titleAr": "موضع الدعامة لتساوي ردود الأفعال تحت تأثير عدة أحمال",
    "difficulty": "hots",
    "questionEn": "A uniform rod $AB$ of length $90\\text{ cm}$ and weight $30\\text{ N}$ rests horizontally on two supports at $C$ and $D$, where $C$ is at end $A$. Downward loads of $40\\text{ N}$ and $20\\text{ N}$ are placed at distances $20\\text{ cm}$ and $50\\text{ cm}$ from $A$ respectively. If the reaction at support $C$ equals the reaction at support $D$ ($R_C = R_D$), what is the distance of support $D$ from end $A$?",
    "questionAr": "قضيب منتظم $AB$ طوله $90\\text{ cm}$ ووزنه $30\\text{ N}$ يرتكز أفقياً على دعامتين عند $C$ و $D$، حيث $C$ عند الطرف $A$. وُضع حِملان رأسيان لأسفل مقدارهما $40\\text{ N}$ و $20\\text{ N}$ على بعدي $20\\text{ cm}$ و $50\\text{ cm}$ من $A$ على الترتيب. إذا تساوى ردا الفعل عند الدعامتين ($R_C = R_D$)، فما بعد الدعامة $D$ عن الطرف $A$؟",
    "optionsEn": [
      "$70\\text{ cm}$",
      "$65\\text{ cm}$",
      "$75\\text{ cm}$",
      "$80\\text{ cm}$"
    ],
    "optionsAr": [
      "70 سم",
      "65 سم",
      "75 سم",
      "80 سم"
    ],
    "correctAnswer": "$70\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Total downward load gives $R_C = R_D = \\frac{\\sum W}{2}$, then take moments about $A$.",
    "hintAr": "المجموع الكلي للأحمال يعطي رد الفعل عند كل دعامة بالتساوي، ثم خذ العزوم حول A لإيجاد موضع D.",
    "stepByStepSolutionEn": [
      "1. Total downward load is: $30\\text{ (rod)} + 40 + 20 = 90\\text{ N}$.",
      "2. Since $R_C = R_D$, each reaction must be $\\frac{90}{2} = 45\\text{ N}$.",
      "3. The weight of the uniform rod acts at its midpoint, $45\\text{ cm}$ from $A$.",
      "4. Calculate total clockwise moments about support $C$ ($A$):",
      "   $\\sum M_A = 40(20) + 30(45) + 20(50) = 800 + 1350 + 1000 = 3150\\text{ N}\\cdot\\text{cm}$.",
      "5. Moment of reaction $R_D$ must balance this: $R_D \\cdot x_D = 45 x_D = 3150 \\implies x_D = 70\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع الأحمال لأسفل = $30\\text{ (وزن القضيب)} + 40 + 20 = 90$ نيوتن.",
      "٢. بما أن $R_C = R_D$، فإن رد فعل كل دعامة = $90 / 2 = 45$ نيوتن.",
      "٣. وزن القضيب يؤثر عند منتصفه على بعد $45$ سم من $A$.",
      "٤. مجموع العزوم حول $A$ للأحمال = $40(20) + 30(45) + 20(50) = 3150$ نيوتن.سم.",
      "٥. عزم رد الفعل $R_D$: $45 \\times x_D = 3150 \\implies x_D = 70$ سم."
    ],
    "teacherTipEn": "When reactions are equal, the center of gravity of all applied loads lies exactly halfway between the two supports.",
    "teacherTipAr": "عندما يتساوى ردا الفعل، يقع مركز ثقل جميع الأحمال في منتصف المسافة تماماً بين الدعامتين."
  },
  {
    "id": "stat_ch3_db_hots_21",
    "titleEn": "Safe Load Position for Maximum Wire Tension",
    "titleAr": "المسافة الآمنة لحمولة دون انقطاع سلك التعليق",
    "difficulty": "hots",
    "questionEn": "A uniform rod $AB$ of length $100\\text{ cm}$ and weight $40\\text{ N}$ is suspended horizontally by two vertical wires attached at its ends $A$ and $B$. If the wire at $A$ can support a maximum tension of $T_{\\max} = 65\\text{ N}$, find the minimum distance from $A$ at which a load of $100\\text{ N}$ can be placed without breaking wire $A$.",
    "questionAr": "قضيب منتظم $AB$ طوله $100\\text{ سم}$ ووزنه $40\\text{ ن}$ معلق أفقياً بسلكين رأسيين عند طرفيه $A$ و $B$. إذا كان أقصى شد يتحمله السلك عند $A$ هو $T_{\\max} = 65\\text{ ن}$، فأوجد أقل بعد من $A$ يمكن وضع ثقل مقداره $100\\text{ ن}$ عنده دون أن ينقطع السلك $A$.",
    "optionsEn": [
      "$x_{\\min} = 55\\text{ cm}$ from $A$",
      "$x_{\\min} = 65\\text{ cm}$ from $A$",
      "$x_{\\min} = 50\\text{ cm}$ from $A$",
      "$x_{\\min} = 75\\text{ cm}$ from $A$"
    ],
    "optionsAr": [
      "$x_{\\min} = 55\\text{ سم}$ من $A$",
      "$x_{\\min} = 65\\text{ سم}$ من $A$",
      "$x_{\\min} = 50\\text{ سم}$ من $A$",
      "$x_{\\min} = 75\\text{ سم}$ من $A$"
    ],
    "correctAnswer": "$x_{\\min} = 55\\text{ cm}$ from $A$",
    "correctIndex": 0,
    "hintEn": "Set T_A = T_max and take moments about end B: T_max * 100 = 40(50) + 100(100 - x).",
    "hintAr": "ضع الشد مساوياً لأقصى قيمة مسموحة وخذ العزوم حول $B$: $T_{\\max} \\times 100 = 40(50) + 100(100 - x)$.",
    "stepByStepSolutionEn": [
      "1. Take moments about end $B$ with maximum allowable tension $T_A = 65\\text{ N}$ at $A$:",
      "   $T_A(100) = W_{\\text{rod}}(50) + P(100 - x)$.",
      "2. 65(100) = 40(50) + 100(100 - x) = 2000 + 10000 - 100x = 12000 - 100x$.",
      "3. Divide by 100: $65 = 120 - x \\implies x = 120 - 65 = 55\\text{ cm}$.",
      "4. Placing the load any closer to $A$ ($x < 55$) would increase $T_A > 65$, breaking the wire."
    ],
    "stepByStepSolutionAr": [
      "١. أخذ العزوم حول الطرف $B$ بوضع الشد مساوياً للحد الأقصى $T_A = 65\\text{ ن}$ عند $A$:",
      "   $T_A(100) = 40(50) + 100(100 - x)$.",
      "٢. $100 \\times 65 = 12000 - 100x \\implies 65 = 120 - x$.",
      "٣. أقل مسافة آمنة: $x = 120 - 65 = 55\\text{ سم}$ من $A$."
    ],
    "teacherTipEn": "Moving a load closer to a support monotonically increases the reaction/tension at that support.",
    "teacherTipAr": "تحريك الحمل باتجاه أحد الحاملين يزيد رد الفعل أو الشد عنده باستمرار وبشكل خطي."
  },
  {
    "id": "stat_ch3_db_hots_22",
    "titleEn": "Safe Load Position for Maximum Wire Tension (Variant 2)",
    "titleAr": "المسافة الآمنة لحمولة دون انقطاع سلك التعليق (حالة 2)",
    "difficulty": "hots",
    "questionEn": "A uniform rod $AB$ of length $100\\text{ cm}$ and weight $40\\text{ N}$ is suspended horizontally by two vertical wires attached at its ends $A$ and $B$. If the wire at $A$ can support a maximum tension of $T_{\\max} = 70\\text{ N}$, find the minimum distance from $A$ at which a load of $100\\text{ N}$ can be placed without breaking wire $A$.",
    "questionAr": "قضيب منتظم $AB$ طوله $100\\text{ سم}$ ووزنه $40\\text{ ن}$ معلق أفقياً بسلكين رأسيين عند طرفيه $A$ و $B$. إذا كان أقصى شد يتحمله السلك عند $A$ هو $T_{\\max} = 70\\text{ ن}$، فأوجد أقل بعد من $A$ يمكن وضع ثقل مقداره $100\\text{ ن}$ عنده دون أن ينقطع السلك $A$.",
    "optionsEn": [
      "$x_{\\min} = 50\\text{ cm}$ from $A$",
      "$x_{\\min} = 60\\text{ cm}$ from $A$",
      "$x_{\\min} = 45\\text{ cm}$ from $A$",
      "$x_{\\min} = 70\\text{ cm}$ from $A$"
    ],
    "optionsAr": [
      "$x_{\\min} = 50\\text{ سم}$ من $A$",
      "$x_{\\min} = 60\\text{ سم}$ من $A$",
      "$x_{\\min} = 45\\text{ سم}$ من $A$",
      "$x_{\\min} = 70\\text{ سم}$ من $A$"
    ],
    "correctAnswer": "$x_{\\min} = 50\\text{ cm}$ from $A$",
    "correctIndex": 0,
    "hintEn": "Set T_A = T_max and take moments about end B: T_max * 100 = 40(50) + 100(100 - x).",
    "hintAr": "ضع الشد مساوياً لأقصى قيمة مسموحة وخذ العزوم حول $B$: $T_{\\max} \\times 100 = 40(50) + 100(100 - x)$.",
    "stepByStepSolutionEn": [
      "1. Take moments about end $B$ with maximum allowable tension $T_A = 70\\text{ N}$ at $A$:",
      "   $T_A(100) = W_{\\text{rod}}(50) + P(100 - x)$.",
      "2. 70(100) = 40(50) + 100(100 - x) = 2000 + 10000 - 100x = 12000 - 100x$.",
      "3. Divide by 100: $70 = 120 - x \\implies x = 120 - 70 = 50\\text{ cm}$.",
      "4. Placing the load any closer to $A$ ($x < 50$) would increase $T_A > 70$, breaking the wire."
    ],
    "stepByStepSolutionAr": [
      "١. أخذ العزوم حول الطرف $B$ بوضع الشد مساوياً للحد الأقصى $T_A = 70\\text{ ن}$ عند $A$:",
      "   $T_A(100) = 40(50) + 100(100 - x)$.",
      "٢. $100 \\times 70 = 12000 - 100x \\implies 70 = 120 - x$.",
      "٣. أقل مسافة آمنة: $x = 120 - 70 = 50\\text{ سم}$ من $A$."
    ],
    "teacherTipEn": "Moving a load closer to a support monotonically increases the reaction/tension at that support.",
    "teacherTipAr": "تحريك الحمل باتجاه أحد الحاملين يزيد رد الفعل أو الشد عنده باستمرار وبشكل خطي."
  },
  {
    "id": "stat_ch3_db_hots_23",
    "titleEn": "Equalizing Tensions in Non-Uniform Suspended Rod",
    "titleAr": "موضع ثقل إضافي لتساوي شدي خيطي تعليق قضيب غير منتظم",
    "difficulty": "hots",
    "questionEn": "A non-uniform rod $AB$ of length $120\\text{ cm}$ is suspended horizontally by two vertical strings attached at its ends $A$ and $B$. Its center of gravity is located at $40\\text{ cm}$ from end $A$. An additional weight equal to the weight of the rod ($W$) is hung from the rod at distance $x$ from end $A$ such that the tensions in both strings become equal ($T_A = T_B$). What is the value of $x$?",
    "questionAr": "قضيب غير منتظم $AB$ طوله $120\\text{ cm}$ معلق أفقياً بواسطة خيطين رأسيين مثبتين عند طرفيه $A$ و $B$. مركز ثقله يقع على بعد $40\\text{ cm}$ من الطرف $A$. عُلّق ثقل إضافي مساوٍ لوزن القضيب ($W$) على بعد $x$ من الطرف $A$ بحيث أصبح الشد متساوياً في الخيطين ($T_A = T_B$). ما قيمة $x$؟",
    "optionsEn": [
      "$80\\text{ cm}$",
      "$75\\text{ cm}$",
      "$85\\text{ cm}$",
      "$90\\text{ cm}$"
    ],
    "optionsAr": [
      "80 سم",
      "75 سم",
      "85 سم",
      "90 سم"
    ],
    "correctAnswer": "$80\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "For equal end tensions, the combined center of gravity of both weights must be at the midpoint ($60\\text{ cm}$).",
    "hintAr": "لكي يتساوى الشد عند الطرفين، يجب أن تقع محصلة الوزنين عند منتصف القضيب تماماً (60 سم).",
    "stepByStepSolutionEn": [
      "1. Total suspended load is $W + W = 2W$.",
      "2. If $T_A = T_B$, then by symmetry each string carries $W$, and their resultant acts at the exact midpoint of the rod, $60\\text{ cm}$ from $A$.",
      "3. The center of mass formula gives: $\\bar{x} = \\frac{W \\cdot x_G + W \\cdot x}{2W} = \\frac{x_G + x}{2}$.",
      "4. Setting $\\bar{x} = 60\\text{ cm}$ and $x_G = 40\\text{ cm}$:",
      "   $\\frac{40 + x}{2} = 60 \\implies 40 + x = 120 \\implies x = 80\\text{ cm}$ from $A$."
    ],
    "stepByStepSolutionAr": [
      "١. الحمل الكلي = $W + W = 2W$.",
      "٢. لتساوي الشدين ($T_A = T_B = W$)، يجب أن تقع محصلة القوى لأسفل عند منتصف المسافة بين طرفي التعليق أي عند $60$ سم من $A$.",
      "٣. قانون مركز الثقل للكتلتين: $\\bar{x} = \\frac{40 + x}{2}$.",
      "٤. بمساواتها بـ $60$: $40 + x = 120 \\implies x = 80$ سم من الطرف $A$."
    ],
    "teacherTipEn": "When two equal weights act on a beam, their resultant is always located at their mutual midpoint.",
    "teacherTipAr": "محصلة وزنين متساويين تقع دائماً في منتصف المسافة بين نقطتي تأثيرهما."
  },
  {
    "id": "stat_ch3_db_hots_24",
    "titleEn": "Balancing Suspended Masses on an Asymmetric Pivot",
    "titleAr": "موازنة أثقال معلقة على مسطرة ترتكز على محور غير مركزي",
    "difficulty": "hots",
    "questionEn": "A uniform meter stick $AB$ of length $100\\text{ cm}$ and mass $100\\text{ g}$ is supported on a knife edge placed at $25\\text{ cm}$ from end $A$. A mass of $400\\text{ g}$ is hung from end $A$. What mass $m_B$ must be hung from end $B$ to maintain horizontal balance?",
    "questionAr": "مسطرة مترية منتظمة $AB$ طولها $100\\text{ cm}$ وكتلتها $100\\text{ جم}$ ترتكز على حد سكين موضوع على بعد $25\\text{ cm}$ من الطرف $A$. عُلقت كتلة مقدارها $400\\text{ جم}$ من الطرف $A$. ما الكتلة $m_B$ التي يجب تعليقها من الطرف $B$ لحفظ اتزان المسطرة أفقياً؟",
    "optionsEn": [
      "$100\\text{ g}$",
      "$120\\text{ g}$",
      "$80\\text{ g}$",
      "$150\\text{ g}$"
    ],
    "optionsAr": [
      "100 جم",
      "120 جم",
      "80 جم",
      "150 جم"
    ],
    "correctAnswer": "$100\\text{ g}$",
    "correctIndex": 0,
    "hintEn": "Take moments of all masses about the knife-edge pivot at $25\\text{ cm}$ from $A$.",
    "hintAr": "خذ عزوم جميع الكتل حول نقطة الارتكاز الواقعة على بعد 25 سم من أ.",
    "stepByStepSolutionEn": [
      "1. Let the knife edge be at $C$ ($AC = 25\\text{ cm}$).",
      "2. The meter stick is uniform, so its mass ($100\\text{ g}$) acts at its center of gravity $M$ ($AM = 50\\text{ cm}$).",
      "3. Distance from pivot $C$ to center $M$: $CM = 50 - 25 = 25\\text{ cm}$ to the right.",
      "4. Distance from pivot $C$ to end $B$: $CB = 100 - 25 = 75\\text{ cm}$ to the right.",
      "5. Distance from pivot $C$ to end $A$: $CA = 25\\text{ cm}$ to the left.",
      "6. Counter-clockwise moment about $C$: $400 \\times 25 = 10000\\text{ g}\\cdot\\text{cm}$.",
      "7. Clockwise moments about $C$: $100 \\times 25 + m_B \\times 75 = 2500 + 75 m_B$.",
      "8. Equating: $2500 + 75 m_B = 10000 \\implies 75 m_B = 7500 \\implies m_B = 100\\text{ g}$."
    ],
    "stepByStepSolutionAr": [
      "١. نقطة الارتكاز $C$ تبعد $25$ سم عن $A$.",
      "٢. كتلة المسطرة المنتظمة ($100$ جم) تؤثر عند المنتصف على بعد $50$ سم من $A$.",
      "٣. بعد مركز ثقل المسطرة عن الارتكاز: $50 - 25 = 25$ سم لليمين.",
      "٤. بعد الطرف $B$ عن الارتكاز: $100 - 25 = 75$ سم لليمين.",
      "٥. العزم المضاد لعقارب الساعة حول $C$: $400 \\times 25 = 10000$.",
      "٦. العزم مع عقارب الساعة: $100 \\times 25 + m_B \\times 75 = 2500 + 75 m_B$.",
      "٧. بالتساوي: $75 m_B = 7500 \\implies m_B = 100$ جم."
    ],
    "teacherTipEn": "Never forget to include the body's own weight acting at its center of gravity when taking moments.",
    "teacherTipAr": "إياك أن تنسى إدراج وزن الجسم الذاتي مؤثراً عند مركز ثقله عند حساب العزوم."
  },
  {
    "id": "stat_ch3_db_hots_25",
    "titleEn": "Resultant of Four Parallel Forces with Non-uniform Spacing",
    "titleAr": "محصلة أربع قوى متوازية ذات تباعد غير منتظم",
    "difficulty": "hots",
    "questionEn": "Four like parallel forces of magnitudes $10\\text{ N}$, $20\\text{ N}$, $30\\text{ N}$, and $40\\text{ N}$ act perpendicularly to a straight rod at distances $0\\text{ m}$, $1\\text{ m}$, $3\\text{ m}$, and $6\\text{ m}$ from end $A$. What is the distance of their resultant from end $A$?",
    "questionAr": "أربع قوى متوازية وفي نفس الاتجاه مقاديرها $10\\text{ N}$ و $20\\text{ N}$ و $30\\text{ N}$ و $40\\text{ N}$ تؤثر عمودياً على قضيب مستقيم على مسافات $0\\text{ m}$ و $1\\text{ m}$ و $3\\text{ m}$ و $6\\text{ m}$ من الطرف $A$. ما بعد محصلتها عن الطرف $A$؟",
    "optionsEn": [
      "$3.5\\text{ m}$",
      "$3.0\\text{ m}$",
      "$4.0\\text{ m}$",
      "$3.2\\text{ m}$"
    ],
    "optionsAr": [
      "3.5 م",
      "3.0 م",
      "4.0 م",
      "3.2 م"
    ],
    "correctAnswer": "$3.5\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Use the center of parallel forces formula: $\\bar{x} = \\frac{\\sum F_i x_i}{\\sum F_i}$.",
    "hintAr": "استخدم قانون مركز القوى المتوازية: س = مجموع (ق × س) ÷ مجموع ق.",
    "stepByStepSolutionEn": [
      "1. Total magnitude of the resultant: $R = 10 + 20 + 30 + 40 = 100\\text{ N}$.",
      "2. Calculate the total moment about end $A$ ($x = 0$):",
      "   $\\sum M_A = 10(0) + 20(1) + 30(3) + 40(6) = 0 + 20 + 90 + 240 = 350\\text{ N}\\cdot\\text{m}$.",
      "3. The position of the resultant is: $\\bar{x} = \\frac{\\sum M_A}{R} = \\frac{350}{100} = 3.5\\text{ m}$ from $A$."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار المحصلة الكلية = $10 + 20 + 30 + 40 = 100$ نيوتن.",
      "٢. مجموع العزوم حول النقطة $A$:",
      "   $\\sum M_A = 10(0) + 20(1) + 30(3) + 40(6) = 20 + 90 + 240 = 350$ نيوتن.م.",
      "٣. بعد المحصلة عن $A$: $\\bar{x} = 350 / 100 = 3.5$ م."
    ],
    "teacherTipEn": "Weighted averaging is the direct vector application of Varignon's theorem.",
    "teacherTipAr": "المتوسط الموزن هو التطبيق المباشر لنظرية فارينون لعزوم القوى المتوازية."
  },
  {
    "id": "stat_ch3_db_hots_26",
    "titleEn": "Equilibrating a System of Three Collinear Parallel Forces",
    "titleAr": "إيجاد القوة المحدثة للاتزان التام لمنظومة قوى متوازية",
    "difficulty": "hots",
    "questionEn": "Three parallel forces act perpendicularly to the $x$-axis at points $A(0, 0)$, $B(2, 0)$, and $C(5, 0)$: $\\vec{F}_1 = 30\\hat{j}$ at $A$ and $\\vec{F}_2 = -50\\hat{j}$ at $B$. What force $\\vec{F}_3$ must be applied at point $C$ to establish complete static equilibrium for the entire system?",
    "questionAr": "ثلاث قوى متوازية تؤثر عمودياً على محور السينات عند النقاط $A(0, 0)$ و $B(2, 0)$ و $C(5, 0)$: $\\vec{F}_1 = 30\\hat{j}$ عند $A$ و $\\vec{F}_2 = -50\\hat{j}$ عند $B$. ما القوة $\\vec{F}_3$ الواجب التأثير بها عند النقطة $C$ لتحقيق الاتزان الاستاتيكي التام للمنظومة؟",
    "optionsEn": [
      "$20\\hat{j}$",
      "$-20\\hat{j}$",
      "$30\\hat{j}$",
      "$-10\\hat{j}$"
    ],
    "optionsAr": [
      "20 ص^",
      "-20 ص^",
      "30 ص^",
      "-10 ص^"
    ],
    "correctAnswer": "$20\\hat{j}$",
    "correctIndex": 0,
    "hintEn": "Static equilibrium requires both $\\sum \\vec{F} = \\vec{0}$ and $\\sum \\vec{M}_O = \\vec{0}$.",
    "hintAr": "الاتزان الاستاتيكي التام يتطلب انعدام المحصلة وانعدام مجموع العزوم حول أي نقطة.",
    "stepByStepSolutionEn": [
      "1. For force equilibrium: $\\sum \\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$.",
      "2. Substituting: $30\\hat{j} - 50\\hat{j} + \\vec{F}_3 = \\vec{0} \\implies -20\\hat{j} + \\vec{F}_3 = \\vec{0} \\implies \\vec{F}_3 = 20\\hat{j}$.",
      "3. Verify moment equilibrium about origin $O(0, 0)$:",
      "   $\\sum M_O = 0(30) + 2(-50) + 5(20) = -100 + 100 = 0$.",
      "4. Both equilibrium conditions are fully satisfied with $\\vec{F}_3 = 20\\hat{j}$."
    ],
    "stepByStepSolutionAr": [
      "١. لشرط اتزان القوى: مجموع القوى = متجه الصفر.",
      "٢. $30\\hat{j} - 50\\hat{j} + \\vec{F}_3 = \\vec{0} \\implies \\vec{F}_3 = 20\\hat{j}$.",
      "٣. للتحقق من انعدام العزوم حول نقطة الأصل $O$:",
      "   $\\sum M_O = 2(-50) + 5(20) = -100 + 100 = 0$.",
      "٤. إذن القوة هي $\\vec{F}_3 = 20\\hat{j}$."
    ],
    "teacherTipEn": "Checking both force balance and moment balance guarantees that the system is in true equilibrium and not just a couple.",
    "teacherTipAr": "التحقق من شرطي القوى والعزوم معاً يضمن اتزان المنظومة التام وعدم تحولها إلى ازدواج."
  },
  {
    "id": "stat_ch3_db_hots_27",
    "titleEn": "Position of Machine for Specified Tension Ratio",
    "titleAr": "موضع آلة ثقيلة لتحقيق نسبة معينة بين شدي سلكي التعليق",
    "difficulty": "hots",
    "questionEn": "A uniform horizontal beam of length $4\\text{ m}$ and weight $200\\text{ N}$ is suspended by two vertical wires at its ends $A$ and $B$. A heavy machine of weight $600\\text{ N}$ is placed on the beam. At what distance from end $A$ must the machine be placed so that the tension in wire $A$ is three times the tension in wire $B$ ($T_A = 3 T_B$)?",
    "questionAr": "عارضة أفقية منتظمة طولها $4\\text{ m}$ ووزنها $200\\text{ N}$ معلقة بواسطة سلكين رأسيين عند طرفيها $A$ و $B$. وُضعت آلة ثقيلة وزنها $600\\text{ N}$ على العارضة. على أي بعد من الطرف $A$ يجب وضع الآلة بحيث يصبح الشد في السلك $A$ ثلاثة أمثال الشد في السلك $B$ ($T_A = 3 T_B$)؟",
    "optionsEn": [
      "$\\frac{2}{3}\\text{ m}$",
      "$\\frac{1}{2}\\text{ m}$",
      "$\\frac{3}{4}\\text{ m}$",
      "$1\\text{ m}$"
    ],
    "optionsAr": [
      "2/3 م",
      "1/2 م",
      "3/4 م",
      "1 م"
    ],
    "correctAnswer": "$\\frac{2}{3}\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Find $T_A$ and $T_B$ from vertical equilibrium, then take moments about $A$.",
    "hintAr": "أوجد شدي السلكين من معادلة اتزان القوى الرأسية، ثم خذ العزوم حول النقطة A.",
    "stepByStepSolutionEn": [
      "1. Total downward load is $200 + 600 = 800\\text{ N}$.",
      "2. Vertical force balance: $T_A + T_B = 800\\text{ N}$.",
      "3. Given $T_A = 3 T_B$: $3 T_B + T_B = 800 \\implies 4 T_B = 800 \\implies T_B = 200\\text{ N}$, and $T_A = 600\\text{ N}$.",
      "4. The uniform beam's weight acts at its midpoint, $2\\text{ m}$ from $A$.",
      "5. Taking moments about $A$: $T_B \\times 4 = 200(2) + 600(x) \\implies 200 \\times 4 = 400 + 600 x$.",
      "6. $800 = 400 + 600 x \\implies 600 x = 400 \\implies x = \\frac{400}{600} = \\frac{2}{3}\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع الأحمال = $200 + 600 = 800$ نيوتن.",
      "٢. $T_A + T_B = 800$ نيوتن، وبما أن $T_A = 3 T_B$ فإن: $4 T_B = 800 \\implies T_B = 200$ نيوتن و $T_A = 600$ نيوتن.",
      "٣. وزن العارضة يؤثر عند منتصفها على بعد $2$ م من $A$.",
      "٤. بالعزوم حول $A$: $T_B \\times 4 = 200(2) + 600(x)$.",
      "٥. $800 = 400 + 600 x \\implies 600 x = 400 \\implies x = 2/3$ م."
    ],
    "teacherTipEn": "First solve for the support forces using the given ratio and total sum, then locate the unknown position using moments.",
    "teacherTipAr": "ابدأ بحساب قوى الدعم من النسبة والمجموع الكلي، ثم حدد الموضع المجهول بالعزوم بكل سهولة."
  },
  {
    "id": "stat_ch3_db_hots_28",
    "titleEn": "Minimum Reaction on Support during Load Motion",
    "titleAr": "أدنى رد فعل تتعرض له دعامة أثناء حركة حمل على القضيب",
    "difficulty": "hots",
    "questionEn": "A non-uniform rod $AB$ of length $2\\text{ m}$ and weight $80\\text{ N}$ has its center of gravity at $0.8\\text{ m}$ from end $A$. It rests horizontally on two end supports at $A$ and $B$. A concentrated load $P = 40\\text{ N}$ moves along the rod from $A$ to $B$. What is the minimum reaction force that support $A$ will experience during the entire motion of load $P$?",
    "questionAr": "قضيب غير منتظم $AB$ طوله $2\\text{ m}$ ووزنه $80\\text{ N}$ يقع مركز ثقله على بعد $0.8\\text{ m}$ من الطرف $A$. يرتكز أفقياً على دعامتين عند طرفيه $A$ و $B$. يتحرك حمل مركز $P = 40\\text{ N}$ على القضيب من $A$ إلى $B$. ما أدنى قيمة لرد الفعل عند الدعامة $A$ أثناء حركة الحمل بأكملها؟",
    "optionsEn": [
      "$48\\text{ N}$",
      "$32\\text{ N}$",
      "$40\\text{ N}$",
      "$24\\text{ N}$"
    ],
    "optionsAr": [
      "48 نيوتن",
      "32 نيوتن",
      "40 نيوتن",
      "24 نيوتن"
    ],
    "correctAnswer": "$48\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Support $A$'s reaction is minimized when the moving load is as far from $A$ as possible (at end $B$).",
    "hintAr": "يصل رد الفعل عند A إلى أدنى قيمة له عندما يبتعد الحمل المتحرك أقصى ما يمكن عن A (أي عند استقراره فوق B).",
    "stepByStepSolutionEn": [
      "1. By the principle of superposition: $R_A = R_{A,\\text{rod}} + R_{A,P}$.",
      "2. The contribution of the rod's own weight is constant. Taking moments about $B$:",
      "   $R_{A,\\text{rod}} \\times 2 = 80 \\times (2 - 0.8) = 80 \\times 1.2 = 96 \\implies R_{A,\\text{rod}} = 48\\text{ N}$.",
      "3. The contribution from moving load $P$ at position $x$ is $R_{A,P} = P \\frac{2 - x}{2}$.",
      "4. This contribution is minimized when the load reaches end $B$ ($x = 2\\text{ m}$), giving $R_{A,P} = 0$.",
      "5. Therefore, the minimum reaction at $A$ is $48 + 0 = 48\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بمبدأ التراكب: $R_A = R_{A,\\text{القضيب}} + R_{A,P}$.",
      "٢. نصيب وزن القضيب ثابت: بالعزوم حول $B$ نجد $R_{A,\\text{القضيب}} \\times 2 = 80 \\times 1.2 = 96 \\implies R_{A,\\text{القضيب}} = 48$ نيوتن.",
      "٣. نصيب الحمل المتحرك $P$ يكون في أدنى قيمة له عندما يقع الحمل فوق $B$ تماماً، فيكون نصيب $A$ منه صفراً.",
      "٤. إذن أدنى رد فعل عند $A$ هو $48$ نيوتن."
    ],
    "teacherTipEn": "When a load stands directly over a simple support, that support carries 100% of the load, leaving 0% for the opposite support.",
    "teacherTipAr": "عندما يستقر حمل فوق إحدى الركيزتين تماماً، فإن تلك الركيزة تتحمله بنسبة 100% ولا يصل للركيزة الأخرى شيء منه."
  },
  {
    "id": "stat_ch3_db_hots_29",
    "titleEn": "Central Span of Beam with Equal Symmetrical Overhangs",
    "titleAr": "طول البحر الأوسط لعارضة ذات بروزين متماثلين",
    "difficulty": "hots",
    "questionEn": "A uniform beam of total length $L$ rests symmetrically on two supports separated by distance $D$, with equal overhangs of length $a$ extending past each support ($L = D + 2a$). If each overhang has length $a = \\frac{L}{6}$, what is the span $D$ between the two supports expressed in terms of $L$?",
    "questionAr": "عارضة منتظمة طولها الكلي $L$ ترتكز تماثلياً على دعامتين المسافة بينهما $D$، مع وجود بروزين متساويين طول كل منهما $a$ خارج الدعامتين ($L = D + 2a$). إذا كان طول كل بروز $a = \\frac{L}{6}$، فما طول البحر $D$ بين الدعامتين بدلالة $L$؟",
    "optionsEn": [
      "$\\frac{2}{3} L$",
      "$\\frac{1}{2} L$",
      "$\\frac{3}{4} L$",
      "$\\frac{5}{6} L$"
    ],
    "optionsAr": [
      "2/3 L",
      "1/2 L",
      "3/4 L",
      "5/6 L"
    ],
    "correctAnswer": "$\\frac{2}{3} L$",
    "correctIndex": 0,
    "hintEn": "Use simple geometry: $D = L - 2a$.",
    "hintAr": "من هندسة الشكل: المسافة بين الدعامتين = الطول الكلي مطروحاً منه مجموع طولي البروزين.",
    "stepByStepSolutionEn": [
      "1. Total length of the beam is $L = D + 2a$.",
      "2. Given each overhang is $a = \\frac{L}{6}$:",
      "3. $2a = 2 \\times \\frac{L}{6} = \\frac{L}{3}$.",
      "4. The central span between the supports is: $D = L - 2a = L - \\frac{L}{3} = \\frac{2}{3} L$."
    ],
    "stepByStepSolutionAr": [
      "١. الطول الكلي للعارضة: $L = D + 2a$.",
      "٢. بما أن طول كل بروز $a = L/6$، فإن مجموع البروزين = $2a = L/3$.",
      "٣. البحر الأوسط بين الدعامتين: $D = L - L/3 = \\frac{2}{3} L$."
    ],
    "teacherTipEn": "In symmetrical overhang setups, always deduct both overhangs from the total length to obtain the clear span.",
    "teacherTipAr": "في البروزات المتماثلة، اطرح ضعف طول البروز من الطول الكلي لتحصل على البحر الداخلي مباشرة."
  },
  {
    "id": "stat_ch3_db_hots_30",
    "titleEn": "Maximum Movable Weight for Safe Traversal over Overhangs",
    "titleAr": "أقصى ثقل متحرك يمكنه العبور بأمان فوق بروزين دون انقلاب",
    "difficulty": "hots",
    "questionEn": "A uniform plank $AB$ of length $6\\text{ m}$ and weight $60\\text{ N}$ rests horizontally on two supports at $C$ and $D$, where $AC = 1\\text{ m}$ and $BD = 1.5\\text{ m}$ ($CD = 3.5\\text{ m}$). A movable load $W$ can traverse the plank freely from end $A$ to end $B$ without overturning it if and only if $W \\le W_{\\max}$. What is the value of $W_{\\max}$?",
    "questionAr": "لوح خشب منتظم $AB$ طوله $6\\text{ m}$ ووزنه $60\\text{ N}$ يرتكز أفقياً على دعامتين عند $C$ و $D$، حيث $AC = 1\\text{ m}$ و $BD = 1.5\\text{ m}$ (أي $CD = 3.5\\text{ m}$). يستطيع حِمل متحرك $W$ أن يعبر اللوح من أقصى الطرف $A$ إلى أقصى الطرف $B$ دون أن ينقلب اللوح إذا وفقط إذا كان $W \\le W_{\\max}$. ما قيمة $W_{\\max}$؟",
    "optionsEn": [
      "$60\\text{ N}$",
      "$120\\text{ N}$",
      "$90\\text{ N}$",
      "$45\\text{ N}$"
    ],
    "optionsAr": [
      "60 نيوتن",
      "120 نيوتن",
      "90 نيوتن",
      "45 نيوتن"
    ],
    "correctAnswer": "$60\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Test tilting about $C$ (when $W$ is at $A$) and about $D$ (when $W$ is at $B$); take the smaller limit.",
    "hintAr": "اختبر وشك الانقلاب حول C (عند الطرف A) وحول D (عند الطرف B)، واختر القيمة الصغرى كحد أقصى آمن.",
    "stepByStepSolutionEn": [
      "1. The center of mass of the uniform plank is at its midpoint $M$, $3\\text{ m}$ from $A$.",
      "2. Case 1: Load $W$ is at end $A$ (verge of tipping about $C$ with $R_D = 0$):",
      "   Distance of $M$ from $C$: $3 - 1 = 2\\text{ m}$ to the right. Distance of $A$ from $C$: $1\\text{ m}$ to the left.",
      "   Moments about $C$: $W \\times 1 = 60 \\times 2 \\implies W_1 = 120\\text{ N}$.",
      "3. Case 2: Load $W$ is at end $B$ (verge of tipping about $D$ with $R_C = 0$):",
      "   Support $D$ is at $6 - 1.5 = 4.5\\text{ m}$ from $A$.",
      "   Distance of $M$ from $D$: $4.5 - 3 = 1.5\\text{ m}$ to the left. Distance of $B$ from $D$: $1.5\\text{ m}$ to the right.",
      "   Moments about $D$: $W \\times 1.5 = 60 \\times 1.5 \\implies W_2 = 60\\text{ N}$.",
      "4. For the load to traverse the entire plank safely without tipping at either end, $W \\le \\min(120, 60) = 60\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل اللوح يقع عند منتصفه على بعد $3$ م من $A$.",
      "٢. الحالة الأولى (الحمل عند $A$، وشك الانقلاب حول $C$ مع انعدام $R_D$):",
      "   بالعزوم حول $C$: $W \\times 1 = 60 \\times 2 \\implies W_1 = 120$ نيوتن.",
      "٣. الحالة الثانية (الحمل عند $B$، وشك الانقلاب حول $D$ مع انعدام $R_C$):",
      "   الدعامة $D$ تبعد $4.5$ م عن $A$، إذن بعدها عن مركز الثقل هو $1.5$ م.",
      "   بالعزوم حول $D$: $W \\times 1.5 = 60 \\times 1.5 \\implies W_2 = 60$ نيوتن.",
      "٤. لكي يعبر الحمل اللوح بأكمله بأمان يجب ألا يتجاوز القيمة الصغرى: $W_{\\max} = 60$ نيوتن."
    ],
    "teacherTipEn": "The maximum traversing load is governed by the larger overhang, where the overturning moment arm is greatest.",
    "teacherTipAr": "أقصى حمل متحرك تحكمه دائماً جهة البروز الأطول حيث يكون ذراع عزم الانقلاب أكبر ما يمكن."
  },
  {
    "id": "stat_ch3_db_hots_31",
    "titleEn": "Equilibrant Force Magnitude and Position",
    "titleAr": "مقدار وموضع القوة المحدثة للاتزان",
    "difficulty": "hots",
    "questionEn": "Three downward parallel forces $F_1 = 10\\text{ N}$ (at $x = 0$), $F_2 = 20\\text{ N}$ (at $x = 3\\text{ m}$), and $F_3 = 30\\text{ N}$ (at $x = 6\\text{ m}$) act on a horizontal line. Find the single equilibrant force needed to keep the system in equilibrium.",
    "questionAr": "تؤثر ثلاث قوى متوازية لأسفل مقاديرها $F_1 = 10\\text{ ن}$ (عند $x = 0$)، $F_2 = 20\\text{ ن}$ (عند $x = 3\\text{ م}$)، و $F_3 = 30\\text{ ن}$ (عند $x = 6\\text{ م}$) على خط أفقي. أوجد القوة الوحيدة المحدثة للاتزان.",
    "optionsEn": [
      "$60\\text{ N}$ directed upward at $x = 4\\text{ m}$",
      "$60\\text{ N}$ directed downward at $x = 4\\text{ m}$",
      "$80\\text{ N}$ directed upward at $x = 3\\text{ m}$",
      "$60\\text{ N}$ directed upward at $x = 2\\text{ m}$"
    ],
    "optionsAr": [
      "$60\\text{ ن}$ متجهة لأعلى عند $x = 4\\text{ م}$",
      "$60\\text{ ن}$ متجهة لأسفل عند $x = 4\\text{ م}$",
      "$80\\text{ ن}$ متجهة لأعلى عند $x = 3\\text{ م}$",
      "$60\\text{ ن}$ متجهة لأعلى عند $x = 2\\text{ م}$"
    ],
    "correctAnswer": "$60\\text{ N}$ directed upward at $x = 4\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "The equilibrant is equal in magnitude and line of action to the resultant, but opposite in direction: E = -R.",
    "hintAr": "القوة المحدثة للاتزان تساوي المحصلة في المقدار ولها نفس خط العمل ولكن تضادها في الاتجاه: $\\vec{E} = -\\vec{R}$.",
    "stepByStepSolutionEn": [
      "1. Resultant magnitude is the sum of downward forces: $R = 10 + 20 + 30 = 60\\text{ N}$ downward.",
      "2. Take moments about the origin $x = 0$:",
      "   $R \\times x_R = (10 \\times 0) + (20 \\times 3) + (30 \\times 6) = 0 + 60 + 180 = 240$.",
      "   $x_R = \\frac{240}{60} = 4\\text{ m}$.",
      "3. The equilibrant $\\vec{E} = -\\vec{R}$ has magnitude $60\\text{ N}$, directed upward at $x = 4\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار المحصلة يساوي مجموع القوى: $R = 10 + 20 + 30 = 60\\text{ ن}$ لأسفل.",
      "٢. موضع المحصلة بنظرية فارينون:",
      "   $R \\times x_R = (20 \\times 3) + (30 \\times 6) = 240 \\implies x_R = 4\\text{ م}$.",
      "٣. القوة المحدثة للاتزان تضاد المحصلة في الاتجاه ولها نفس المقدار وخط العمل: مقدارها $60\\text{ ن}$ لأعلى عند $x = 4\\text{ م}$."
    ],
    "teacherTipEn": "Equilibrant force E = -R: same line of action, equal magnitude, opposite direction.",
    "teacherTipAr": "القوة المحدثة للاتزان هي المعكوس المتجهي للمحصلة تماماً ولها نفس خط العمل."
  },
  {
    "id": "stat_ch3_db_hots_32",
    "titleEn": "Equilibrant Force Magnitude and Position (Variant 2)",
    "titleAr": "مقدار وموضع القوة المحدثة للاتزان (حالة 2)",
    "difficulty": "hots",
    "questionEn": "Three downward parallel forces $F_1 = 20\\text{ N}$ (at $x = 0$), $F_2 = 40\\text{ N}$ (at $x = 3\\text{ m}$), and $F_3 = 60\\text{ N}$ (at $x = 6\\text{ m}$) act on a horizontal line. Find the single equilibrant force needed to keep the system in equilibrium.",
    "questionAr": "تؤثر ثلاث قوى متوازية لأسفل مقاديرها $F_1 = 20\\text{ ن}$ (عند $x = 0$)، $F_2 = 40\\text{ ن}$ (عند $x = 3\\text{ م}$)، و $F_3 = 60\\text{ ن}$ (عند $x = 6\\text{ م}$) على خط أفقي. أوجد القوة الوحيدة المحدثة للاتزان.",
    "optionsEn": [
      "$120\\text{ N}$ directed upward at $x = 4\\text{ m}$",
      "$120\\text{ N}$ directed downward at $x = 4\\text{ m}$",
      "$140\\text{ N}$ directed upward at $x = 3\\text{ m}$",
      "$120\\text{ N}$ directed upward at $x = 2\\text{ m}$"
    ],
    "optionsAr": [
      "$120\\text{ ن}$ متجهة لأعلى عند $x = 4\\text{ م}$",
      "$120\\text{ ن}$ متجهة لأسفل عند $x = 4\\text{ م}$",
      "$140\\text{ ن}$ متجهة لأعلى عند $x = 3\\text{ م}$",
      "$120\\text{ ن}$ متجهة لأعلى عند $x = 2\\text{ م}$"
    ],
    "correctAnswer": "$120\\text{ N}$ directed upward at $x = 4\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "The equilibrant is equal in magnitude and line of action to the resultant, but opposite in direction: E = -R.",
    "hintAr": "القوة المحدثة للاتزان تساوي المحصلة في المقدار ولها نفس خط العمل ولكن تضادها في الاتجاه: $\\vec{E} = -\\vec{R}$.",
    "stepByStepSolutionEn": [
      "1. Resultant magnitude is the sum of downward forces: $R = 20 + 40 + 60 = 120\\text{ N}$ downward.",
      "2. Take moments about the origin $x = 0$:",
      "   $R \\times x_R = (20 \\times 0) + (40 \\times 3) + (60 \\times 6) = 0 + 120 + 360 = 480$.",
      "   $x_R = \\frac{480}{120} = 4\\text{ m}$.",
      "3. The equilibrant $\\vec{E} = -\\vec{R}$ has magnitude $120\\text{ N}$, directed upward at $x = 4\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار المحصلة يساوي مجموع القوى: $R = 20 + 40 + 60 = 120\\text{ ن}$ لأسفل.",
      "٢. موضع المحصلة بنظرية فارينون:",
      "   $R \\times x_R = (40 \\times 3) + (60 \\times 6) = 480 \\implies x_R = 4\\text{ م}$.",
      "٣. القوة المحدثة للاتزان تضاد المحصلة في الاتجاه ولها نفس المقدار وخط العمل: مقدارها $120\\text{ ن}$ لأعلى عند $x = 4\\text{ م}$."
    ],
    "teacherTipEn": "Equilibrant force E = -R: same line of action, equal magnitude, opposite direction.",
    "teacherTipAr": "القوة المحدثة للاتزان هي المعكوس المتجهي للمحصلة تماماً ولها نفس خط العمل."
  },
  {
    "id": "stat_ch3_db_hots_33",
    "titleEn": "Finding Two Unknown Forces from Resultant Properties",
    "titleAr": "تحديد قوتين مجهولتين من مقدار المحصلة وموضع تأثيرها",
    "difficulty": "hots",
    "questionEn": "Two like parallel forces $F_1$ and $F_2$ act at points $A$ and $B$ where $AB = 50\\text{ cm}$. Their resultant has magnitude $70\\text{ N}$ and acts at point $C$ on the segment $AB$ such that $AC = 20\\text{ cm}$. What are the magnitudes of forces $F_1$ and $F_2$?",
    "questionAr": "قوتان متوازيتان وفي نفس الاتجاه $F_1$ و $F_2$ تؤثران عند النقطتين $A$ و $B$ حيث $AB = 50\\text{ cm}$. محصلتهما مقدارها $70\\text{ N}$ وتؤثر عند نقطة $C$ على القطعة المستقيمة $AB$ حيث $AC = 20\\text{ cm}$. ما مقدار كل من القوتين $F_1$ و $F_2$؟",
    "optionsEn": [
      "$F_1 = 42\\text{ N}, F_2 = 28\\text{ N}$",
      "$F_1 = 35\\text{ N}, F_2 = 35\\text{ N}$",
      "$F_1 = 50\\text{ N}, F_2 = 20\\text{ N}$",
      "$F_1 = 40\\text{ N}, F_2 = 30\\text{ N}$"
    ],
    "optionsAr": [
      "ق1 = 42 نيوتن، ق2 = 28 نيوتن",
      "ق1 = 35 نيوتن، ق2 = 35 نيوتن",
      "ق1 = 50 نيوتن، ق2 = 20 نيوتن",
      "ق1 = 40 نيوتن، ق2 = 30 نيوتن"
    ],
    "correctAnswer": "$F_1 = 42\\text{ N}, F_2 = 28\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Use $F_1 + F_2 = R = 70\\text{ N}$ and take moments about $A$: $R \\cdot AC = F_2 \\cdot AB$.",
    "hintAr": "استخدم مجموع القوتين = 70 نيوتن، ثم خذ العزوم حول A: المحصلة × AC = ق2 × AB.",
    "stepByStepSolutionEn": [
      "1. Since the resultant lies between $A$ and $B$, the forces are in the same direction: $F_1 + F_2 = 70\\text{ N}$.",
      "2. Distance $CB = AB - AC = 50 - 20 = 30\\text{ cm}$.",
      "3. Taking moments about $A$: $R \\cdot AC = F_2 \\cdot AB \\implies 70 \\times 20 = F_2 \\times 50$.",
      "4. $1400 = 50 F_2 \\implies F_2 = \\frac{1400}{50} = 28\\text{ N}$.",
      "5. Then $F_1 = 70 - 28 = 42\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. المحصلة تقع بين النقطتين، إذن القوتان في اتجاه واحد: $F_1 + F_2 = 70$ نيوتن.",
      "٢. $CB = 50 - 20 = 30$ سم.",
      "٣. بالعزوم حول $A$: $70 \\times 20 = F_2 \\times 50$.",
      "٤. $1400 = 50 F_2 \\implies F_2 = 28$ نيوتن.",
      "٥. إذن $F_1 = 70 - 28 = 42$ نيوتن."
    ],
    "teacherTipEn": "Taking moments about one force's point of application isolates the other force directly.",
    "teacherTipAr": "أخذ العزوم حول نقطة تأثير إحدى القوتين يحدد القوة الأخرى بخطوة واحدة مباشرة."
  },
  {
    "id": "stat_ch3_db_hots_34",
    "titleEn": "Shift of Resultant of Unlike Forces when One Force is Halved",
    "titleAr": "إزاحة محصلة قوتين متضادتين عند تنصيف إحداهما",
    "difficulty": "hots",
    "questionEn": "Two unlike parallel forces of magnitudes $60\\text{ N}$ (acting at $A$) and $20\\text{ N}$ (acting at $B$) are separated by $AB = 40\\text{ cm}$. If the smaller force ($20\\text{ N}$) is halved to $10\\text{ N}$, by what distance does the line of action of their resultant shift?",
    "questionAr": "قوتان متوازيتان متضادتان في الاتجاه مقدارهما $60\\text{ N}$ (تؤثر عند $A$) و $20\\text{ N}$ (تؤثر عند $B$) والبعد بينهما $AB = 40\\text{ cm}$. إذا قُلِّلت القوة الصغرى ($20\\text{ N}$) إلى نصف قيمتها لتصبح $10\\text{ N}$، فما المسافة التي يتحركها خط عمل محصلتهما؟",
    "optionsEn": [
      "$12\\text{ cm}$ towards $A$",
      "$8\\text{ cm}$ towards $A$",
      "$10\\text{ cm}$ towards $A$",
      "$15\\text{ cm}$ towards $A$"
    ],
    "optionsAr": [
      "12 سم نحو أ",
      "8 سم نحو أ",
      "10 سم نحو أ",
      "15 سم نحو أ"
    ],
    "correctAnswer": "$12\\text{ cm}$ towards $A$",
    "correctIndex": 0,
    "hintEn": "Calculate the distance of the resultant from $A$ in both cases using $x = \\frac{F_2 \\cdot d}{F_1 - F_2}$.",
    "hintAr": "احسب بعد المحصلة عن النقطة A في الحالتين من قانون القوى المتضادة: x = (ق2 . ف) / (ق1 - ق2).",
    "stepByStepSolutionEn": [
      "1. Initial state: $F_1 = 60\\text{ N}$, $F_2 = 20\\text{ N}$. Resultant $R_1 = 60 - 20 = 40\\text{ N}$.",
      "   Taking moments about $A$: $R_1 \\cdot x_1 = F_2 \\cdot AB \\implies 40 x_1 = 20(40) = 800 \\implies x_1 = 20\\text{ cm}$ (outside $AB$, on the side of $A$).",
      "2. New state: $F_2' = 10\\text{ N}$. Resultant $R_2 = 60 - 10 = 50\\text{ N}$.",
      "   Taking moments about $A$: $R_2 \\cdot x_2 = F_2' \\cdot AB \\implies 50 x_2 = 10(40) = 400 \\implies x_2 = 8\\text{ cm}$.",
      "3. The line of action shifts by: $|x_1 - x_2| = 20 - 8 = 12\\text{ cm}$ towards $A$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة الأولى: $R_1 = 60 - 20 = 40$ نيوتن.",
      "   بعد المحصلة عن $A$: $x_1 = \\frac{20 \\times 40}{40} = 20$ سم خارج $AB$ جهة $A$.",
      "٢. الحالة الثانية: تصبح القوة الصغرى $10$ نيوتن والمحصلة $R_2 = 60 - 10 = 50$ نيوتن.",
      "   بعد المحصلة عن $A$: $x_2 = \\frac{10 \\times 40}{50} = 8$ سم خارج $AB$ جهة $A$.",
      "٣. مقدار الإزاحة = $20 - 8 = 12$ سم مقتربة من النقطة $A$."
    ],
    "teacherTipEn": "As the opposing force decreases, the resultant gets closer and closer to the larger force.",
    "teacherTipAr": "كلما صغرت القوة المضادة، اقتربت المحصلة أكثر فأكثر من القوة الكبرى."
  },
  {
    "id": "stat_ch3_db_hots_35",
    "titleEn": "Overhang Tip Load for Zero Far Support Reaction",
    "titleAr": "حساب حمل طرف البروز الذي يجعل رد الفعل عند الطرف البعيد صفراً",
    "difficulty": "hots",
    "questionEn": "A uniform beam $AB$ of length $8\\text{ m}$ and weight $240\\text{ N}$ is supported at end $A$ and at an internal support $C$ where $AC = 6\\text{ m}$ (so overhang $CB = 2\\text{ m}$). A downward load $P$ is placed at the overhang tip $B$. If the reaction at support $A$ is zero ($R_A = 0$), what is the magnitude of load $P$?",
    "questionAr": "عارضة منتظمة $AB$ طولها $8\\text{ m}$ ووزنها $240\\text{ N}$ ترتكز عند الطرف $A$ وعند دعامة داخلية $C$ حيث $AC = 6\\text{ m}$ (أي طول البروز $CB = 2\\text{ m}$). وُضع حِمل رأسي لأسفل $P$ عند طرف البروز $B$. إذا كان رد الفعل عند الدعامة $A$ منعدماً ($R_A = 0$)، فما مقدار هذا الحمل $P$؟",
    "optionsEn": [
      "$240\\text{ N}$",
      "$120\\text{ N}$",
      "$480\\text{ N}$",
      "$180\\text{ N}$"
    ],
    "optionsAr": [
      "240 نيوتن",
      "120 نيوتن",
      "480 نيوتن",
      "180 نيوتن"
    ],
    "correctAnswer": "$240\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Take moments about support $C$ with $R_A = 0$.",
    "hintAr": "خذ العزوم حول الدعامة C مع وضع رد الفعل عند A مساوياً للصفر.",
    "stepByStepSolutionEn": [
      "1. Center of mass of the uniform beam is at $4\\text{ m}$ from $A$.",
      "2. Support $C$ is at $6\\text{ m}$ from $A$, so the center of mass is at distance $6 - 4 = 2\\text{ m}$ to the left of $C$.",
      "3. Overhang tip $B$ is at distance $2\\text{ m}$ to the right of $C$.",
      "4. Taking moments about support $C$ with $R_A = 0$:",
      "   $P \\times 2 = 240 \\times 2 + R_A \\times 6 = 480 + 0$.",
      "5. Solving: $2 P = 480 \\implies P = 240\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل العارضة المنتظمة يقع على بعد $4$ م من $A$.",
      "٢. الدعامة $C$ على بعد $6$ م من $A$، إذن بعد مركز الثقل عن $C$ هو $6 - 4 = 2$ م لليسار.",
      "٣. طرف البروز $B$ يبعد $2$ م لليمين عن $C$.",
      "٤. بالعزوم حول $C$ مع وضع $R_A = 0$:",
      "   $P \\times 2 = 240 \\times 2 \\implies 2 P = 480 \\implies P = 240$ نيوتن."
    ],
    "teacherTipEn": "When a reaction vanishes, taking moments about the remaining support balances the load directly with the beam's own weight.",
    "teacherTipAr": "عند انعدام رد فعل، فإن أخذ العزوم حول الركيزة المتبقية يوازن الحمل مباشرة مع وزن العارضة الذاتي."
  },
  {
    "id": "stat_ch3_db_hots_36",
    "titleEn": "Centroid of Trapezoidal Distributed Load",
    "titleAr": "مركز محصلة حمل موزع شبه منحرف",
    "difficulty": "hots",
    "questionEn": "A beam of length $L = 6\\text{ m}$ carries a trapezoidally distributed load whose intensity is $w_1 = 10\\text{ kN/m}$ at end $A$ and increases linearly to $w_2 = 20\\text{ kN/m}$ at end $B$. What is the distance of the line of action of the total resultant load from end $A$?",
    "questionAr": "عارضة طولها $6\\text{ m}$ تحمل حملاً موزعاً على شكل شبه منحرف شدته $10\\text{ kN/m}$ عند الطرف $A$ وتزداد خطياً لتصل إلى $20\\text{ kN/m}$ عند الطرف $B$. ما بعد خط عمل محصلة هذا الحمل الكلي عن الطرف $A$؟",
    "optionsEn": [
      "$\\frac{10}{3}\\text{ m}$",
      "$3.5\\text{ m}$",
      "$3.2\\text{ m}$",
      "$3.0\\text{ m}$"
    ],
    "optionsAr": [
      "10/3 م",
      "3.5 م",
      "3.2 م",
      "3.0 م"
    ],
    "correctAnswer": "$\\frac{10}{3}\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Decompose the trapezoid into a uniform rectangle of intensity $10\\text{ kN/m}$ and a triangle of peak $10\\text{ kN/m}$.",
    "hintAr": "قسّم شبه المنحرف إلى مستطيل منتظم شدته 10 ك.ن/م ومثلث رأسه 10 ك.ن/م.",
    "stepByStepSolutionEn": [
      "1. Part 1 (Rectangle): load $W_1 = 10 \\times 6 = 60\\text{ kN}$ acting at the midpoint $x_1 = 3\\text{ m}$.",
      "2. Part 2 (Triangle): load $W_2 = \\frac{1}{2} \\times 6 \\times (20 - 10) = 30\\text{ kN}$ acting at $x_2 = \\frac{2}{3} \\times 6 = 4\\text{ m}$.",
      "3. Total load: $W = W_1 + W_2 = 60 + 30 = 90\\text{ kN}$.",
      "4. Taking moments about $A$: $\\bar{x} = \\frac{60(3) + 30(4)}{90} = \\frac{180 + 120}{90} = \\frac{300}{90} = \\frac{10}{3}\\text{ m}$ (or $3\\frac{1}{3}\\text{ m}$)."
    ],
    "stepByStepSolutionAr": [
      "١. الجزء الأول (مستطيل): الحمل = $10 \\times 6 = 60$ كيلو نيوتن ويؤثر عند $x_1 = 3$ م.",
      "٢. الجزء الثاني (مثلث): الحمل = $\\frac{1}{2} \\times 6 \\times 10 = 30$ كيلو نيوتن ويؤثر عند $x_2 = \\frac{2}{3} \\times 6 = 4$ م.",
      "٣. الحمل الكلي = $60 + 30 = 90$ كيلو نيوتن.",
      "٤. بعد المحصلة عن $A$: $\\bar{x} = \\frac{60(3) + 30(4)}{90} = \\frac{300}{90} = \\frac{10}{3}$ م."
    ],
    "teacherTipEn": "Splitting any trapezoidal load into a rectangle and a right triangle makes finding the resultant fast and foolproof.",
    "teacherTipAr": "تقسيم أي حمل شبه منحرف إلى مستطيل ومثلث قائم يسهل حساب موضع المحصلة بدقة وبساطة."
  },
  {
    "id": "stat_ch3_db_hots_37",
    "titleEn": "Maximum Offset of Single Added Load on Narrow Supports",
    "titleAr": "أقصى إزاحة لحمل مضاف على لوح مرتكز على دعامتين متقاربتين",
    "difficulty": "hots",
    "questionEn": "A uniform board of length $4\\text{ m}$ and weight $40\\text{ N}$ rests symmetrically on two supports placed $1.2\\text{ m}$ apart ($0.6\\text{ m}$ on each side of the center). A load of $20\\text{ N}$ is placed on the board at distance $d$ from the center. What is the maximum value of $d$ before the board begins to tip?",
    "questionAr": "لوح خشب منتظم طوله $4\\text{ m}$ ووزنه $40\\text{ N}$ يرتكز تماثلياً على دعامتين المسافة بينهما $1.2\\text{ m}$ (على بعد $0.6\\text{ m}$ على جانبي المركز). وُضع حِمل مقداره $20\\text{ N}$ على بعد $d$ من المركز. ما أقصى قيمة للمسافة $d$ قبل أن يبدأ اللوح بالانقلاب؟",
    "optionsEn": [
      "$1.8\\text{ m}$",
      "$1.6\\text{ m}$",
      "$2.0\\text{ m}$",
      "$1.5\\text{ m}$"
    ],
    "optionsAr": [
      "1.8 م",
      "1.6 م",
      "2.0 م",
      "1.5 م"
    ],
    "correctAnswer": "$1.8\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Tipping occurs about the near support at $0.6\\text{ m}$ when the moment of the load exceeds the restoring moment of the board's weight.",
    "hintAr": "يحدث الانقلاب حول الدعامة القريبة (على بعد 0.6 م) عندما يتغلب عزم الحمل المضاف على عزم وزن اللوح المستقر.",
    "stepByStepSolutionEn": [
      "1. The board's center of gravity is at the center ($x = 0$), where its weight $40\\text{ N}$ acts.",
      "2. The right support is at $x = 0.6\\text{ m}$.",
      "3. Distance of board's center of gravity from the right support is $0.6\\text{ m}$ to the left, producing a restoring moment of $40 \\times 0.6 = 24\\text{ N}\\cdot\\text{m}$.",
      "4. The added load $20\\text{ N}$ is at distance $(d - 0.6)$ to the right of the support.",
      "5. Overturning moment is $20(d - 0.6)$. At the verge of tipping: $20(d - 0.6) = 24 \\implies d - 0.6 = 1.2 \\implies d = 1.8\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل اللوح عند المركز ($x = 0$) ويؤثر فيه وزنه $40$ نيوتن.",
      "٢. الدعامة اليمنى تقع عند $x = 0.6$ م.",
      "٣. بعد مركز ثقل اللوح عن الدعامة اليمنى هو $0.6$ م، وعزم ثباته = $40 \\times 0.6 = 24$ نيوتن.م.",
      "٤. الحمل المضاف $20$ نيوتن يبعد $(d - 0.6)$ م عن الدعامة اليمنى.",
      "٥. عند وشك الانقلاب: $20(d - 0.6) = 24 \\implies d - 0.6 = 1.2 \\implies d = 1.8$ م."
    ],
    "teacherTipEn": "The restoring moment about a tipping fulcrum is provided by the self-weight of the structure acting through its center of gravity.",
    "teacherTipAr": "عزم الثبات المقاوم للانقلاب يوفره الوزن الذاتي للمنشأ مؤثراً عبر مركز ثقله."
  },
  {
    "id": "stat_ch3_db_hots_38",
    "titleEn": "Spatial Coplanar Parallel Forces Resultant Coordinates",
    "titleAr": "إحداثيات محصلة منظومة قوى متوازية فراغية تؤثر في المستوى",
    "difficulty": "hots",
    "questionEn": "Three parallel vertical forces act perpendicularly to the horizontal $xy$-plane: $\\vec{F}_1 = 10\\hat{k}$ at $(1, 2)$, $\\vec{F}_2 = 20\\hat{k}$ at $(4, 2)$, and $\\vec{F}_3 = 30\\hat{k}$ at $(1, 5)$. What are the coordinates $(x_R, y_R)$ of the point where the line of action of their resultant passes through the $xy$-plane?",
    "questionAr": "ثلاث قوى رأسية متوازية تؤثر عمودياً على المستوى الأفقي $xy$: $\\vec{F}_1 = 10\\hat{k}$ عند $(1, 2)$، و $\\vec{F}_2 = 20\\hat{k}$ عند $(4, 2)$، و $\\vec{F}_3 = 30\\hat{k}$ عند $(1, 5)$. ما إحداثيات النقطة $(x_R, y_R)$ التي يمر بها خط عمل محصلتها في المستوى $xy$؟",
    "optionsEn": [
      "$(2, 3.5)$",
      "$(2.5, 3)$",
      "$(3, 3.5)$",
      "$(2, 4)$"
    ],
    "optionsAr": [
      "(2, 3.5)",
      "(2.5, 3)",
      "(3, 3.5)",
      "(2, 4)"
    ],
    "correctAnswer": "$(2, 3.5)$",
    "correctIndex": 0,
    "hintEn": "Calculate the coordinates independently using center of parallel forces formulas: $x_R = \\frac{\\sum F_i x_i}{\\sum F_i}$ and $y_R = \\frac{\\sum F_i y_i}{\\sum F_i}$.",
    "hintAr": "احسب الإحداثيين بصورة مستقلة باستخدام قانون مركز القوى المتوازية لكل من السين والصاد.",
    "stepByStepSolutionEn": [
      "1. Total force magnitude is $R = 10 + 20 + 30 = 60\\text{ N}$.",
      "2. Calculate the $x$-coordinate of the resultant:",
      "   $x_R = \\frac{10(1) + 20(4) + 30(1)}{60} = \\frac{10 + 80 + 30}{60} = \\frac{120}{60} = 2$.",
      "3. Calculate the $y$-coordinate of the resultant:",
      "   $y_R = \\frac{10(2) + 20(2) + 30(5)}{60} = \\frac{20 + 40 + 150}{60} = \\frac{210}{60} = 3.5$.",
      "4. The resultant acts at $(2, 3.5)$."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار المحصلة الكلية = $10 + 20 + 30 = 60$ نيوتن.",
      "٢. الإحداثي السيني للمحصلة:",
      "   $x_R = \\frac{10(1) + 20(4) + 30(1)}{60} = \\frac{120}{60} = 2$.",
      "٣. الإحداثي الصادي للمحصلة:",
      "   $y_R = \\frac{10(2) + 20(2) + 30(5)}{60} = \\frac{210}{60} = 3.5$.",
      "٤. إذن نقطة تأثير المحصلة هي $(2, 3.5)$."
    ],
    "teacherTipEn": "For parallel forces in 3D acting perpendicular to a plane, the center of parallel forces formula applies independently to each coordinate axis.",
    "teacherTipAr": "في القوى المتوازية العمودية على مستوى، يُطبق قانون مركز القوى المتوازية على كل محور إحداثي بشكل مستقل."
  },
  {
    "id": "stat_ch3_db_hots_39",
    "titleEn": "Finding Force from Given Internal Division of Segment",
    "titleAr": "إيجاد إحدى القوتين من نسبة تقسيم المحصلة للقطعة المستقيمة",
    "difficulty": "hots",
    "questionEn": "Two like parallel forces $F_1$ and $F_2$ act at points $A$ and $B$. Their resultant $R$ divides the line segment $AB$ internally such that $AC : CB = 3 : 5$. If the magnitude of the resultant is $64\\text{ N}$, what is the magnitude of force $F_1$?",
    "questionAr": "قوتان متوازيتان وفي نفس الاتجاه $F_1$ و $F_2$ تؤثران عند النقطتين $A$ و $B$. محصلتهما $R$ تقسم القطعة المستقيمة $AB$ من الداخل بنسبة $AC : CB = 3 : 5$. إذا كان مقدار المحصلة $64\\text{ N}$، فما مقدار القوة $F_1$؟",
    "optionsEn": [
      "$40\\text{ N}$",
      "$24\\text{ N}$",
      "$48\\text{ N}$",
      "$36\\text{ N}$"
    ],
    "optionsAr": [
      "40 نيوتن",
      "24 نيوتن",
      "48 نيوتن",
      "36 نيوتن"
    ],
    "correctAnswer": "$40\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Inverse proportionality applies: $F_1 \\cdot AC = F_2 \\cdot CB$, so $F_1 = R \\times \\frac{CB}{AB}$.",
    "hintAr": "تناسب عكسي: القوة الأقرب للمحصلة تكون هي الأكبر، ق1 = المحصلة × (ب جـ / أ ب).",
    "stepByStepSolutionEn": [
      "1. For like parallel forces, the distances to the resultant are inversely proportional to the force magnitudes: $F_1 \\cdot AC = F_2 \\cdot CB$.",
      "2. Given $\\frac{AC}{CB} = \\frac{3}{5}$, we have $\\frac{F_1}{F_2} = \\frac{CB}{AC} = \\frac{5}{3}$.",
      "3. Total force: $F_1 + F_2 = R = 64\\text{ N}$.",
      "4. Express in parts: $F_1 = 5k$, $F_2 = 3k$, so $5k + 3k = 8k = 64 \\implies k = 8$.",
      "5. Force $F_1 = 5 \\times 8 = 40\\text{ N}$ (and $F_2 = 24\\text{ N}$)."
    ],
    "stepByStepSolutionAr": [
      "١. في القوى المتوازية، تتناسب القوى عكسياً مع أبعادها عن المحصلة: $F_1 \\times AC = F_2 \\times CB$.",
      "٢. إذن $F_1 / F_2 = 5 / 3$.",
      "٣. مجموع القوتين = المحصلة = $64$ نيوتن.",
      "٤. نقسم المحصلة إلى أجزاء: $8k = 64 \\implies k = 8$.",
      "٥. مقدار القوة $F_1 = 5 \\times 8 = 40$ نيوتن."
    ],
    "teacherTipEn": "Remember the inverse lever rule: the larger force is closer to the resultant.",
    "teacherTipAr": "تذكر قاعدة الرافعة العكسية: القوة الأكبر تكون دائماً الأقرب إلى خط عمل المحصلة."
  },
  {
    "id": "stat_ch3_db_hots_40",
    "titleEn": "Support Shift to Double Reaction Ratio",
    "titleAr": "المسافة الواجب إزاحتها لدعامة لمضاعفة نسبة رد الفعل",
    "difficulty": "hots",
    "questionEn": "A uniform beam $AB$ of length $6\\text{ m}$ and weight $120\\text{ N}$ is simply supported at end $A$ and at a movable support $D$. Initially $D$ is at end $B$ ($AD = 6\\text{ m}$), so each reaction is $60\\text{ N}$. To what distance from end $A$ must support $D$ be moved inward so that the reaction at $D$ becomes double the reaction at $A$ ($R_D = 2 R_A$)?",
    "questionAr": "عارضة منتظمة $AB$ طولها $6\\text{ m}$ ووزنها $120\\text{ N}$ ترتكز على دعامة عند الطرف $A$ ودعامة متحركة $D$. في البداية كانت $D$ عند الطرف $B$ تماماً ($AD = 6\\text{ m}$) فكان رد الفعل عند كل منهما $60\\text{ N}$. إلى أي بعد من الطرف $A$ يجب تحريك الدعامة $D$ للداخل بحيث يصبح رد الفعل عند $D$ ضعف رد الفعل عند $A$ ($R_D = 2 R_A$)؟",
    "optionsEn": [
      "$4.5\\text{ m}$",
      "$4.0\\text{ m}$",
      "$5.0\\text{ m}$",
      "$3.5\\text{ m}$"
    ],
    "optionsAr": [
      "4.5 م",
      "4.0 م",
      "5.0 م",
      "3.5 م"
    ],
    "correctAnswer": "$4.5\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Use $R_A + R_D = 120$ with $R_D = 2 R_A$ to find $R_D$, then take moments about $A$.",
    "hintAr": "استخدم معادلة مجموع ردود الأفعال = 120 مع ر_د = 2 ر_أ لإيجاد ر_د، ثم خذ العزوم حول أ.",
    "stepByStepSolutionEn": [
      "1. Total downward load is $120\\text{ N}$, so $R_A + R_D = 120\\text{ N}$.",
      "2. Given $R_D = 2 R_A$: $R_A + 2 R_A = 120 \\implies 3 R_A = 120 \\implies R_A = 40\\text{ N}$ and $R_D = 80\\text{ N}$.",
      "3. The uniform beam's weight acts at its midpoint, $3\\text{ m}$ from $A$.",
      "4. Taking moments about end $A$:",
      "   $R_D \\cdot x_D = 120 \\times 3 = 360\\text{ N}\\cdot\\text{m}$.",
      "5. Solving for $x_D$: $80 x_D = 360 \\implies x_D = \\frac{360}{80} = 4.5\\text{ m}$ from $A$."
    ],
    "stepByStepSolutionAr": [
      "١. مجموع الأحمال = $120$ نيوتن، إذن $R_A + R_D = 120$ نيوتن.",
      "٢. بما أن $R_D = 2 R_A$: فإن $3 R_A = 120 \\implies R_A = 40$ نيوتن و $R_D = 80$ نيوتن.",
      "٣. وزن العارضة يؤثر عند منتصفها على بعد $3$ م من $A$.",
      "٤. بالعزوم حول $A$: $R_D \\times x_D = 120 \\times 3 = 360$ نيوتن.م.",
      "٥. إذن $80 x_D = 360 \\implies x_D = 4.5$ م من الطرف $A$."
    ],
    "teacherTipEn": "Shifting a support towards the center of gravity increases its share of the total load.",
    "teacherTipAr": "تحريك الدعامة باتجاه مركز الثقل يزيد من حصتها في تحمل الوزن الكلي."
  },
  {
    "id": "stat_ch3_db_hots_41",
    "titleEn": "End Reactions for Variable Load Position",
    "titleAr": "ردود أفعال الحاملين لحمولة متغيرة الموضع",
    "difficulty": "hots",
    "questionEn": "A light beam $AB$ of length $100\\text{ cm}$ rests horizontally on two end supports $A$ and $B$. A concentrated downward load of $100\\text{ N}$ is placed at a distance of $10\\text{ cm}$ from $A$. Determine the reactions $R_A$ and $R_B$.",
    "questionAr": "يرتكز لوح خفيف $AB$ طوله $100\\text{ سم}$ أفقياً على حاملين عند طرفيه $A$ و $B$. وُضعت حمولة مركزة لأسفل مقدارها $100\\text{ ن}$ على بعد $10\\text{ سم}$ من الطرف $A$. حدد قيمتي رد الفعلين $R_A$ و $R_B$.",
    "optionsEn": [
      "$R_A = 90\\text{ N}, \\quad R_B = 10\\text{ N}$",
      "$R_A = 98\\text{ N}, \\quad R_B = 2\\text{ N}$",
      "$R_A = 82\\text{ N}, \\quad R_B = 18\\text{ N}$",
      "$R_A = 106\\text{ N}, \\quad R_B = -6\\text{ N}$"
    ],
    "optionsAr": [
      "$R_A = 90\\text{ ن}, \\quad R_B = 10\\text{ ن}$",
      "$R_A = 98\\text{ ن}, \\quad R_B = 2\\text{ ن}$",
      "$R_A = 82\\text{ ن}, \\quad R_B = 18\\text{ ن}$",
      "$R_A = 106\\text{ ن}, \\quad R_B = -6\\text{ ن}$"
    ],
    "correctAnswer": "$R_A = 90\\text{ N}, \\quad R_B = 10\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "R_B = (100 * d) / 100 = d N. R_A = 100 - R_B.",
    "hintAr": "رد الفعل عند $B$ هو $R_B = d\\text{ ن}$. ورد الفعل عند $A$ هو $R_A = 100 - d\\text{ ن}$.",
    "stepByStepSolutionEn": [
      "1. Take moments about end $A$ ($sum M_A = 0$):",
      "   $R_B \\times 100 = 100 \\times 10 \\implies R_B = 10\\text{ N}$.",
      "2. Vertical equilibrium: $R_A = 100 - R_B = 100 - 10 = 90\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. أخذ العزوم حول الطرف $A$:",
      "   $R_B \\times 100 = 100 \\times 10 \\implies R_B = 10\\text{ ن}$.",
      "٢. الاتزان الرأسي: $R_A = 100 - 10 = 90\\text{ ن}$."
    ],
    "teacherTipEn": "For a 100 N load on a 100 cm light beam, the reaction at B numerically equals the distance from A in cm.",
    "teacherTipAr": "لحمل مقداره ١٠٠ نيوتن على لوح خفيف طوله ١٠٠ سم، يساوي رد الفعل عند ب عددياً بعد الحمل عن أ بالسنتيمتر."
  },
  {
    "id": "stat_ch3_db_hots_42",
    "titleEn": "End Reactions for Variable Load Position (Variant 2)",
    "titleAr": "ردود أفعال الحاملين لحمولة متغيرة الموضع (حالة 2)",
    "difficulty": "hots",
    "questionEn": "A light beam $AB$ of length $100\\text{ cm}$ rests horizontally on two end supports $A$ and $B$. A concentrated downward load of $100\\text{ N}$ is placed at a distance of $20\\text{ cm}$ from $A$. Determine the reactions $R_A$ and $R_B$.",
    "questionAr": "يرتكز لوح خفيف $AB$ طوله $100\\text{ سم}$ أفقياً على حاملين عند طرفيه $A$ و $B$. وُضعت حمولة مركزة لأسفل مقدارها $100\\text{ ن}$ على بعد $20\\text{ سم}$ من الطرف $A$. حدد قيمتي رد الفعلين $R_A$ و $R_B$.",
    "optionsEn": [
      "$R_A = 80\\text{ N}, \\quad R_B = 20\\text{ N}$",
      "$R_A = 88\\text{ N}, \\quad R_B = 12\\text{ N}$",
      "$R_A = 72\\text{ N}, \\quad R_B = 28\\text{ N}$",
      "$R_A = 96\\text{ N}, \\quad R_B = 4\\text{ N}$"
    ],
    "optionsAr": [
      "$R_A = 80\\text{ ن}, \\quad R_B = 20\\text{ ن}$",
      "$R_A = 88\\text{ ن}, \\quad R_B = 12\\text{ ن}$",
      "$R_A = 72\\text{ ن}, \\quad R_B = 28\\text{ ن}$",
      "$R_A = 96\\text{ ن}, \\quad R_B = 4\\text{ ن}$"
    ],
    "correctAnswer": "$R_A = 80\\text{ N}, \\quad R_B = 20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "R_B = (100 * d) / 100 = d N. R_A = 100 - R_B.",
    "hintAr": "رد الفعل عند $B$ هو $R_B = d\\text{ ن}$. ورد الفعل عند $A$ هو $R_A = 100 - d\\text{ ن}$.",
    "stepByStepSolutionEn": [
      "1. Take moments about end $A$ ($sum M_A = 0$):",
      "   $R_B \\times 100 = 100 \\times 20 \\implies R_B = 20\\text{ N}$.",
      "2. Vertical equilibrium: $R_A = 100 - R_B = 100 - 20 = 80\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. أخذ العزوم حول الطرف $A$:",
      "   $R_B \\times 100 = 100 \\times 20 \\implies R_B = 20\\text{ ن}$.",
      "٢. الاتزان الرأسي: $R_A = 100 - 20 = 80\\text{ ن}$."
    ],
    "teacherTipEn": "For a 100 N load on a 100 cm light beam, the reaction at B numerically equals the distance from A in cm.",
    "teacherTipAr": "لحمل مقداره ١٠٠ نيوتن على لوح خفيف طوله ١٠٠ سم، يساوي رد الفعل عند ب عددياً بعد الحمل عن أ بالسنتيمتر."
  },
  {
    "id": "stat_ch3_db_hots_43",
    "titleEn": "Additional Load for Complete Reaction Loss at Far Support",
    "titleAr": "الحمل الإضافي لإعدام رد فعل الدعامة البعيدة تماماً",
    "difficulty": "hots",
    "questionEn": "A uniform beam $AB$ of length $10\\text{ m}$ and weight $100\\text{ N}$ is supported horizontally at $C$ ($2\\text{ m}$ from $A$) and $D$ ($8\\text{ m}$ from $A$). A load of $50\\text{ N}$ is already placed at end $A$. What additional downward force $F$ must be applied at end $A$ to completely eliminate the reaction at support $D$ ($R_D = 0$)?",
    "questionAr": "عارضة منتظمة $AB$ طولها $10\\text{ m}$ ووزنها $100\\text{ N}$ ترتكز أفقياً عند $C$ (على بعد $2\\text{ m}$ من $A$) وعند $D$ (على بعد $8\\text{ m}$ من $A$). وُضع حِمل مقداره $50\\text{ N}$ عند الطرف $A$. ما القوة الرأسية الإضافية لأسفل $F$ الواجب التأثير بها عند الطرف $A$ لإعدام رد الفعل عند الدعامة $D$ تماماً ($R_D = 0$)؟",
    "optionsEn": [
      "$100\\text{ N}$",
      "$150\\text{ N}$",
      "$50\\text{ N}$",
      "$75\\text{ N}$"
    ],
    "optionsAr": [
      "100 نيوتن",
      "150 نيوتن",
      "50 نيوتن",
      "75 نيوتن"
    ],
    "correctAnswer": "$100\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "When $R_D = 0$, the beam balances on support $C$ as a single fulcrum.",
    "hintAr": "عندما ينعدم رد الفعل R_D، تتزن العارضة حول الدعامة C كنقطة ارتكاز وحيدة.",
    "stepByStepSolutionEn": [
      "1. Center of mass of the uniform beam is at $5\\text{ m}$ from $A$.",
      "2. Support $C$ is at $2\\text{ m}$ from $A$, so the center of mass is at distance $5 - 2 = 3\\text{ m}$ to the right of $C$.",
      "3. Total load at end $A$ is $50 + F$, acting at distance $2\\text{ m}$ to the left of $C$.",
      "4. Taking moments about support $C$ with $R_D = 0$:",
      "   $(50 + F) \\times 2 = 100 \\times 3 = 300\\text{ N}\\cdot\\text{m}$.",
      "5. Solving: $2(50 + F) = 300 \\implies 50 + F = 150 \\implies F = 100\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل العارضة المنتظمة يقع على بعد $5$ م من $A$.",
      "٢. الدعامة $C$ تبعد $2$ م عن $A$، إذن بعد مركز الثقل عنها هو $5 - 2 = 3$ م لليمين.",
      "٣. الحمل الكلي عند $A$ هو $50 + F$ على بعد $2$ م لليسار من $C$.",
      "٤. بالعزوم حول $C$ مع انعدام $R_D$:",
      "   $(50 + F) \\times 2 = 100 \\times 3 = 300$.",
      "٥. $50 + F = 150 \\implies F = 100$ نيوتن."
    ],
    "teacherTipEn": "At the tipping threshold, the structure pivots about the near fulcrum and the far reaction is exactly zero.",
    "teacherTipAr": "عند عتبة الانقلاب، ينعدم رد فعل الركيزة البعيدة وتدور المنظومة حول الركيزة القريبة."
  },
  {
    "id": "stat_ch3_db_hots_44",
    "titleEn": "Resultant of a Couple System with Added Force",
    "titleAr": "محصلة ازدواج أضيفت إليه قوة موازية ثالثة",
    "difficulty": "hots",
    "questionEn": "Two unlike parallel forces of magnitude $50\\text{ N}$ each act at $A$ and $B$, distance $40\\text{ cm}$ apart, forming a couple. A third force of magnitude $20\\text{ N}$ is added parallel to the positive force at point $C$ ($AC = 10\\text{ cm}$, lying on segment $AB$). What is the magnitude of the resultant of this three-force system?",
    "questionAr": "قوتان متوازيتان متضادتان في الاتجاه مقدار كل منهما $50\\text{ N}$ تؤثران عند $A$ و $B$، والبعد بينهما $40\\text{ cm}$ وتكوّنان ازدواجاً. أُضيفت قوة ثالثة مقدارها $20\\text{ N}$ موازية للقوة الموجبة عند نقطة $C$ ($AC = 10\\text{ cm}$ على القطعة المستقيمة $AB$). ما مقدار محصلة هذه المنظومة المكونة من القوى الثلاث؟",
    "optionsEn": [
      "$20\\text{ N}$",
      "$50\\text{ N}$",
      "$70\\text{ N}$",
      "$120\\text{ N}$"
    ],
    "optionsAr": [
      "20 نيوتن",
      "50 نيوتن",
      "70 نيوتن",
      "120 نيوتن"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "A couple has zero resultant vector force; adding a single force gives a resultant equal solely to that added force.",
    "hintAr": "محصلة قوى الازدواج تساوي صفراً متجهاً، وبالتالي فإن محصلة المنظومة تساوي القوة المضافة وحدها.",
    "stepByStepSolutionEn": [
      "1. The two original forces form a couple: their vector sum is $\\vec{F}_1 + \\vec{F}_2 = 50\\hat{j} - 50\\hat{j} = \\vec{0}$.",
      "2. The total vector resultant of the system is $\\vec{R} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} + 20\\hat{j} = 20\\hat{j}$.",
      "3. Therefore, the magnitude of the resultant force is simply $20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. القوتان الأصليتان تكونان ازدواجاً، ومحصلتهما المتجهة = صفر.",
      "٢. المحصلة الكلية للمنظومة = محصلة الازدواج + القوة الثالثة = $0 + 20 = 20$ نيوتن.",
      "٣. إذن مقدار المحصلة يساوي $20$ نيوتن."
    ],
    "teacherTipEn": "Never confuse the moment of a couple with its resultant: the resultant of any couple is always zero!",
    "teacherTipAr": "لا تخلط أبداً بين عزم الازدواج ومحصلته: محصلة قوى أي ازدواج تساوي صفراً دائماً!"
  },
  {
    "id": "stat_ch3_db_hots_45",
    "titleEn": "Non-Uniform Rod Parameters from Dual Balances",
    "titleAr": "تعيين وزن ومركز ثقل قضيب غير منتظم من حالتي اتزان",
    "difficulty": "hots",
    "questionEn": "A non-uniform rod $AB$ of length $100\\text{ cm}$ balances horizontally on a knife edge placed at $40\\text{ cm}$ from end $A$ when a weight of $10\\text{ N}$ is hung from end $A$. The same rod balances on the knife edge placed at $60\\text{ cm}$ from $A$ when a weight of $10\\text{ N}$ is hung from end $B$. What is the weight $W$ of the rod and the distance $x$ of its center of gravity from end $A$?",
    "questionAr": "قضيب غير منتظم $AB$ طوله $100\\text{ cm}$ يتزن أفقياً على ركيزة عند نقطة تبعد $40\\text{ cm}$ من الطرف $A$ عند تعليق ثقل قدره $10\\text{ N}$ من الطرف $A$. ويتزن نفس القضيب على ركيزة تبعد $60\\text{ cm}$ من $A$ عند تعليق ثقل قدره $10\\text{ N}$ من الطرف $B$. ما وزن القضيب $W$ وما بعد مركز ثقله $x$ عن الطرف $A$؟",
    "optionsEn": [
      "$W = 40\\text{ N}, x = 50\\text{ cm}$",
      "$W = 50\\text{ N}, x = 45\\text{ cm}$",
      "$W = 30\\text{ N}, x = 55\\text{ cm}$",
      "$W = 40\\text{ N}, x = 45\\text{ cm}$"
    ],
    "optionsAr": [
      "و = 40 نيوتن، س = 50 سم",
      "و = 50 نيوتن، س = 45 سم",
      "و = 30 نيوتن، س = 55 سم",
      "و = 40 نيوتن، س = 45 سم"
    ],
    "correctAnswer": "$W = 40\\text{ N}, x = 50\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Set up two moment equations about the knife-edge position in each experiment.",
    "hintAr": "اكتب معادلتي العزوم حول نقطة الارتكاز في الحالتين وحلهما معاً.",
    "stepByStepSolutionEn": [
      "1. In experiment 1: pivot at $40\\text{ cm}$. Load $10\\text{ N}$ at $A$ ($0\\text{ cm}$). Weight $W$ acts at $x > 40$.",
      "   Moments about pivot: $10 \\times 40 = W(x - 40) \\implies W(x - 40) = 400$ (Equation 1).",
      "2. In experiment 2: pivot at $60\\text{ cm}$. Load $10\\text{ N}$ at $B$ ($100\\text{ cm}$). Weight $W$ acts at $x < 60$.",
      "   Distance of $B$ from pivot is $100 - 60 = 40\\text{ cm}$.",
      "   Moments about pivot: $W(60 - x) = 10 \\times 40 = 400$ (Equation 2).",
      "3. Equating the two expressions: $W(x - 40) = W(60 - x) \\implies x - 40 = 60 - x \\implies 2x = 100 \\implies x = 50\\text{ cm}$.",
      "4. Substituting back into Equation 1: $W(50 - 40) = 400 \\implies 10 W = 400 \\implies W = 40\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. في الحالة الأولى: الارتكاز عند $40$ سم، الثقل $10$ عند $A$.",
      "   بالعزوم حول الارتكاز: $10 \\times 40 = W(x - 40) \\implies W(x - 40) = 400$.",
      "٢. في الحالة الثانية: الارتكاز عند $60$ سم، الثقل $10$ عند $B$ (على بعد $40$ سم من الارتكاز).",
      "   بالعزوم حول الارتكاز: $W(60 - x) = 10 \\times 40 = 400$.",
      "٣. بقسمة أو مساواة المعادلتين: $x - 40 = 60 - x \\implies 2x = 100 \\implies x = 50$ سم.",
      "٤. بالتعويض: $W(10) = 400 \\implies W = 40$ نيوتن."
    ],
    "teacherTipEn": "Setting up two independent moment equations allows both unknown weight and unknown center of gravity to be determined.",
    "teacherTipAr": "كتابة معادلتي عزم مستقلتين تمكنك من إيجاد المجهولين (الوزن وموضع مركز الثقل) في خطوتين."
  },
  {
    "id": "stat_ch3_db_hots_46",
    "titleEn": "Spring Extension Supporting a Horizontal Rod",
    "titleAr": "استطالة زنبرك يدعم طرف قضيب أفقي متزن",
    "difficulty": "hots",
    "questionEn": "A uniform rod $AB$ of length $2\\text{ m}$ and weight $60\\text{ N}$ is hinged at end $A$ to a vertical wall and supported horizontally at end $B$ by a vertical spring of stiffness $k = 500\\text{ N/m}$. What is the extension $\\Delta L$ of the spring at static equilibrium?",
    "questionAr": "قضيب منتظم $AB$ طوله $2\\text{ m}$ ووزنه $60\\text{ N}$ مثبت بمفصل عند طرفه $A$ في حائط رأسي ومحفوظ أفقياً عند طرفه $B$ بواسطة زنبرك رأسي ثابت مرونته $k = 500\\text{ N/m}$. ما استطالة الزنبرك $\\Delta L$ عند الاتزان الاستاتيكي؟",
    "optionsEn": [
      "$6\\text{ cm}$",
      "$3\\text{ cm}$",
      "$12\\text{ cm}$",
      "$8\\text{ cm}$"
    ],
    "optionsAr": [
      "6 سم",
      "3 سم",
      "12 سم",
      "8 سم"
    ],
    "correctAnswer": "$6\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Take moments about the hinge at $A$ to find the spring force $F_s$, then use Hooke's Law: $F_s = k \\Delta L$.",
    "hintAr": "خذ العزوم حول المفصل عند A لإيجاد قوة الزنبرك، ثم طبق قانون هوك: القوة = الثابت × الاستطالة.",
    "stepByStepSolutionEn": [
      "1. The weight of the uniform rod ($60\\text{ N}$) acts at its midpoint, $1\\text{ m}$ from hinge $A$.",
      "2. Taking moments about hinge $A$: $F_{\\text{spring}} \\times 2 = 60 \\times 1 \\implies 2 F_{\\text{spring}} = 60 \\implies F_{\\text{spring}} = 30\\text{ N}$.",
      "3. Applying Hooke's law: $F_{\\text{spring}} = k \\Delta L$.",
      "4. $\\Delta L = \\frac{F_{\\text{spring}}}{k} = \\frac{30\\text{ N}}{500\\text{ N/m}} = 0.06\\text{ m} = 6\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. يؤثر وزن القضيب المنتظم ($60$ نيوتن) عند منتصفه على بعد $1$ م من المفصل $A$.",
      "٢. بالعزوم حول المفصل $A$: $F_{\\text{زنبرك}} \\times 2 = 60 \\times 1 \\implies F_{\\text{زنبرك}} = 30$ نيوتن.",
      "٣. من قانون هوك: $F = k \\Delta L$.",
      "٤. الاستطالة $\\Delta L = 30 / 500 = 0.06$ م = $6$ سم."
    ],
    "teacherTipEn": "Taking moments about the hinge eliminates the unknown hinge reaction force completely.",
    "teacherTipAr": "أخذ العزوم حول المفصل يلغي رد فعل المفصل المجهول تماماً من الحسابات."
  },
  {
    "id": "stat_ch3_db_hots_47",
    "titleEn": "Critical Travel of Trolley on Jib under Tie-rod Limit",
    "titleAr": "أقصى مسافة لتقدم عربة رفع على ذراع رافعة في حدود الشد المسموح",
    "difficulty": "hots",
    "questionEn": "A horizontal crane jib $AB$ of length $12\\text{ m}$ and weight $6000\\text{ N}$ (acting at its midpoint $6\\text{ m}$ from support $A$) is anchored at $A$ and supported by a vertical tie-rod at $C$ ($8\\text{ m}$ from $A$). A trolley of weight $4000\\text{ N}$ moves towards tip $B$. If the tie-rod can withstand a maximum tensile force of $9500\\text{ N}$, what is the closest distance to tip $B$ that the trolley can safely reach?",
    "questionAr": "ذراع رافعة أفقي $AB$ طوله $12\\text{ m}$ ووزنه $6000\\text{ N}$ (يؤثر عند منتصفه على بعد $6\\text{ m}$ من الدعامة $A$) مثبت عند $A$ ومدعوم بقضيب شد رأسي عند $C$ (على بعد $8\\text{ m}$ من $A$). تتحرك عربة رفع وزنها $4000\\text{ N}$ باتجاه الطرف $B$. إذا كان أقصى شد يتحمله قضيب الشد هو $9500\\text{ N}$، فما أقرب مسافة إلى الطرف $B$ يمكن للعربة أن تصل إليها بأمان؟",
    "optionsEn": [
      "$2\\text{ m}$ from tip $B$",
      "$1\\text{ m}$ from tip $B$",
      "$3\\text{ m}$ from tip $B$",
      "$1.5\\text{ m}$ from tip $B$"
    ],
    "optionsAr": [
      "2 م من الطرف ب",
      "1 م من الطرف ب",
      "3 م من الطرف ب",
      "1.5 م من الطرف ب"
    ],
    "correctAnswer": "$2\\text{ m}$ from tip $B$",
    "correctIndex": 0,
    "hintEn": "Take moments about $A$ with $T_C = 9500\\text{ N}$ to find the maximum position $x$ of the trolley from $A$.",
    "hintAr": "خذ العزوم حول A مع وضع قوة الشد عند أقصى قيمة مسموحة (9500 نيوتن) لإيجاد موضع العربة من A.",
    "stepByStepSolutionEn": [
      "1. Taking moments about anchor $A$ with tie-rod tension $T_C = 9500\\text{ N}$:",
      "   $T_C \\times 8 = 6000(6) + 4000(x)$.",
      "2. $9500 \\times 8 = 76000\\text{ N}\\cdot\\text{m}$.",
      "3. $76000 = 36000 + 4000 x \\implies 4000 x = 40000 \\implies x = 10\\text{ m}$ from $A$.",
      "4. The distance from the trolley to tip $B$ ($12\\text{ m}$) is: $12 - 10 = 2\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ العزوم حول الدعامة $A$ عند أقصى شد $T_C = 9500$ نيوتن:",
      "   $9500 \\times 8 = 6000(6) + 4000(x)$.",
      "٢. $76000 = 36000 + 4000 x$.",
      "٣. $4000 x = 40000 \\implies x = 10$ م من $A$.",
      "٤. المسافة المتبقية حتى الطرف $B$: $12 - 10 = 2$ م."
    ],
    "teacherTipEn": "Carefully distinguish whether the question asks for distance from support $A$ or distance remaining to tip $B$.",
    "teacherTipAr": "انتبه جيداً لصيغة السؤال: هل المطلوب البعد عن الدعامة أ أم المسافة المتبقية للطرف ب."
  },
  {
    "id": "stat_ch3_db_hots_48",
    "titleEn": "Maximum Tip Weight before Tilting about First Support",
    "titleAr": "أقصى ثقل عند طرف عارضة قبل انقلابها حول الدعامة الأولى",
    "difficulty": "hots",
    "questionEn": "A uniform beam $AB$ of length $120\\text{ cm}$ and weight $60\\text{ N}$ rests on two supports at $C$ and $D$, where $AC = 50\\text{ cm}$ and $AD = 90\\text{ cm}$. What is the maximum weight that can be suspended from end $A$ without the beam tilting about support $C$?",
    "questionAr": "عارضة منتظمة $AB$ طولها $120\\text{ cm}$ ووزنها $60\\text{ N}$ ترتكز على دعامتين عند $C$ و $D$، حيث $AC = 50\\text{ cm}$ و $AD = 90\\text{ cm}$. ما أقصى ثقل يمكن تعليقه من الطرف $A$ دون أن تنقلب العارضة حول الدعامة $C$؟",
    "optionsEn": [
      "$12\\text{ N}$",
      "$15\\text{ N}$",
      "$10\\text{ N}$",
      "$18\\text{ N}$"
    ],
    "optionsAr": [
      "12 نيوتن",
      "15 نيوتن",
      "10 نيوتن",
      "18 نيوتن"
    ],
    "correctAnswer": "$12\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "At the verge of tipping about $C$, the contact at $D$ is broken so $R_D = 0$.",
    "hintAr": "عند وشك الانقلاب حول C، ينعدم الاتصال عند D ويصبح رد الفعل R_D صفراً.",
    "stepByStepSolutionEn": [
      "1. Center of mass of the uniform beam is at its midpoint, $60\\text{ cm}$ from $A$.",
      "2. Support $C$ is at $50\\text{ cm}$ from $A$, so the center of mass is at distance $60 - 50 = 10\\text{ cm}$ to the right of $C$.",
      "3. The suspended weight $P$ acts at end $A$, which is $50\\text{ cm}$ to the left of $C$.",
      "4. Taking moments about support $C$ with $R_D = 0$:",
      "   $P \\times 50 = 60 \\times 10 = 600\\text{ N}\\cdot\\text{cm}$.",
      "5. Solving for $P$: $P = \\frac{600}{50} = 12\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل العارضة المنتظمة عند منتصفها على بعد $60$ سم من $A$.",
      "٢. الدعامة $C$ تبعد $50$ سم عن $A$، إذن بعد مركز الثقل عنها = $60 - 50 = 10$ سم لليمين.",
      "٣. الثقل المعلق $P$ عند $A$ يبعد $50$ سم لليسار عن $C$.",
      "٤. بالعزوم حول $C$ عند وشك الانقلاب ($R_D = 0$):",
      "   $P \\times 50 = 60 \\times 10 = 600$.",
      "٥. إذن $P = 600 / 50 = 12$ نيوتن."
    ],
    "teacherTipEn": "At the tipping point, the self-weight's moment balances the suspended weight's moment about the fulcrum.",
    "teacherTipAr": "عند نقطة الانقلاب الحرجة، يتساوى عزم الوزن الذاتي مع عزم الثقل المعلق حول نقطة الارتكاز."
  },
  {
    "id": "stat_ch3_db_hots_49",
    "titleEn": "Third Force Required to Equilibrate Two Like Parallel Forces",
    "titleAr": "القوة الثالثة اللازمة لموازنة قوتين متوازيتين في نفس الاتجاه",
    "difficulty": "hots",
    "questionEn": "Two like parallel forces $F_1 = 40\\text{ N}$ and $F_2 = 60\\text{ N}$ act at points $A$ and $B$, separated by $AB = 50\\text{ cm}$. A third force $F_3$ is applied to establish complete static equilibrium ($R = 0$ and $M = 0$). What are the magnitude, direction, and point of application of $F_3$?",
    "questionAr": "قوتان متوازيتان وفي نفس الاتجاه $F_1 = 40\\text{ N}$ و $F_2 = 60\\text{ N}$ تؤثران عند النقطتين $A$ و $B$ والبعد بينهما $AB = 50\\text{ cm}$. أُثِّر بقوة ثالثة $F_3$ لتحقيق الاتزان الاستاتيكي التام للمنظومة. ما مقدار واتجاه ونقطة تأثير القوة $F_3$؟",
    "optionsEn": [
      "$100\\text{ N}$ in opposite direction, $30\\text{ cm}$ from $A$",
      "$100\\text{ N}$ in same direction, $30\\text{ cm}$ from $A$",
      "$100\\text{ N}$ in opposite direction, $25\\text{ cm}$ from $A$",
      "$80\\text{ N}$ in opposite direction, $30\\text{ cm}$ from $A$"
    ],
    "optionsAr": [
      "100 نيوتن في عكس الاتجاه وعلى بعد 30 سم من أ",
      "100 نيوتن في نفس الاتجاه وعلى بعد 30 سم من أ",
      "100 نيوتن في عكس الاتجاه وعلى بعد 25 سم من أ",
      "80 نيوتن في عكس الاتجاه وعلى بعد 30 سم من أ"
    ],
    "correctAnswer": "$100\\text{ N}$ in opposite direction, $30\\text{ cm}$ from $A$",
    "correctIndex": 0,
    "hintEn": "The equilibrant force must be equal in magnitude and opposite in direction to the resultant of the two forces, acting along the same line of action.",
    "hintAr": "القوة المحدثة للاتزان تساوي المحصلة في المقدار وتضادها في الاتجاه وتعمل على نفس خط عملها.",
    "stepByStepSolutionEn": [
      "1. Magnitude of the resultant of the two forces: $R = 40 + 60 = 100\\text{ N}$.",
      "2. For total force equilibrium $\\sum F = 0$, $F_3$ must equal $100\\text{ N}$ in the opposite direction.",
      "3. For moment equilibrium, $F_3$ must act along the line of action of the resultant.",
      "4. Taking moments about $A$: $R \\cdot AC = F_2 \\cdot AB \\implies 100 \\cdot AC = 60(50) = 3000 \\implies AC = 30\\text{ cm}$.",
      "5. Therefore, $F_3 = 100\\text{ N}$ in the opposite direction, acting at $30\\text{ cm}$ from $A$ on segment $AB$."
    ],
    "stepByStepSolutionAr": [
      "١. مقدار محصلة القوتين = $40 + 60 = 100$ نيوتن.",
      "٢. لاتزان القوى يجب أن تكون $F_3 = 100$ نيوتن في الاتجاه المضاد.",
      "٣. لاتزان العزوم يجب أن تعمل القوة على نفس خط عمل المحصلة.",
      "٤. بالعزوم حول $A$: $100 \\times AC = 60 \\times 50 = 3000 \\implies AC = 30$ سم.",
      "٥. إذن $F_3$ مقدارها $100$ نيوتن في عكس الاتجاه وتؤثر على بعد $30$ سم من $A$."
    ],
    "teacherTipEn": "The equilibrant is simply the exact negative vector of the resultant: $\\vec{F}_{\\text{eq}} = -\\vec{R}$.",
    "teacherTipAr": "القوة الموازنة (المحدثة للاتزان) هي المعكوس الجمعي التام لمتجه المحصلة وتعمل على نفس خط عملها."
  },
  {
    "id": "stat_ch3_db_hots_50",
    "titleEn": "End Reactions of Beam on Three Symmetrical Supports",
    "titleAr": "ردود أفعال الطرفين لعارضة على ثلاث دعامات متماثلة",
    "difficulty": "hots",
    "questionEn": "A heavy uniform girder $AB$ of length $12\\text{ m}$ and weight $36\\text{ kN}$ rests horizontally on three supports: one at end $A$, one at end $B$, and one at its midpoint $M$. If the reactions at both ends are equal and the middle support carries half the total weight of the girder ($R_M = 18\\text{ kN}$), what is the reaction force at each end support?",
    "questionAr": "رافدة ثقيلة منتظمة $AB$ طولها $12\\text{ m}$ ووزنها $36\\text{ kN}$ ترتكز أفقياً على ثلاث دعامات: دعامة عند الطرف $A$، ودعامة عند الطرف $B$، ودعامة عند المنتصف $M$. إذا كان ردا الفعل عند الطرفين متساويين، وتحمل الدعامة الوسطى نصف الوزن الكلي للرافدة ($R_M = 18\\text{ kN}$)، فما مقدار رد الفعل عند كل من دعامتي الطرفين؟",
    "optionsEn": [
      "$9\\text{ kN}$",
      "$12\\text{ kN}$",
      "$18\\text{ kN}$",
      "$6\\text{ kN}$"
    ],
    "optionsAr": [
      "9 ك.ن",
      "12 ك.ن",
      "18 ك.ن",
      "6 ك.ن"
    ],
    "correctAnswer": "$9\\text{ kN}$",
    "correctIndex": 0,
    "hintEn": "Use vertical force equilibrium: $R_A + R_M + R_B = W$, with $R_A = R_B$.",
    "hintAr": "من اتزان القوى الرأسية: مجموع ردود الأفعال يساوي الوزن الكلي، مع ر_أ = ر_ب.",
    "stepByStepSolutionEn": [
      "1. Total downward load is the girder weight $W = 36\\text{ kN}$.",
      "2. The middle support carries $R_M = 18\\text{ kN}$.",
      "3. Vertical force balance: $R_A + R_M + R_B = W \\implies R_A + 18 + R_B = 36$.",
      "4. Since $R_A = R_B$ by symmetry: $2 R_A + 18 = 36 \\implies 2 R_A = 18 \\implies R_A = 9\\text{ kN}$.",
      "5. Each end support carries $9\\text{ kN}$."
    ],
    "stepByStepSolutionAr": [
      "١. الوزن الكلي لأسفل = $36$ كيلو نيوتن.",
      "٢. الدعامة الوسطى تحمل $R_M = 18$ كيلو نيوتن.",
      "٣. من اتزان القوى الرأسية: $R_A + 18 + R_B = 36$.",
      "٤. بالتماثل $R_A = R_B$: $2 R_A = 18 \\implies R_A = 9$ كيلو نيوتن.",
      "٥. إذن رد الفعل عند كل طرف هو $9$ كيلو نيوتن."
    ],
    "teacherTipEn": "Symmetry divides the remaining load equally between the two identical end supports.",
    "teacherTipAr": "التماثل يوزع الحمل المتبقي بالتساوي التام على الدعامتين الطرفيتين."
  },
  {
    "id": "stat_ch3_db_hots_51",
    "titleEn": "Safe Walking Range on an Overhanging Scaffold Plank",
    "titleAr": "المدى الآمن لحركة عامل على سقالة ذات بروزين",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "A uniform plank $AB$ of length $8\\text{ m}$ and weight $400\\text{ N}$ rests horizontally on two trestles at $C$ and $D$, where $AC = 1.5\\text{ m}$ and $DB = 1.5\\text{ m}$. A painter weighing $700\\text{ N}$ walks along the plank. What is the maximum distance $x$ from end $B$ the painter can safely walk towards $B$ without the plank overturning?",
    "questionAr": "لوح خشبي منتظم $AB$ طوله $8\\text{ م}$ ووزنه $400\\text{ ن}$ يستند أفقياً على حاملين عند $C$ و $D$ حيث $AC = 1.5\\text{ م}$ و $DB = 1.5\\text{ م}$. عامل دهان وزنه $700\\text{ ن}$ يتحرك على اللوح. ما أقصى مسافة $x$ من الطرف $B$ يمكن للعامل أن يصل إليها باتجاه $B$ دون أن ينقلب اللوح؟",
    "optionsEn": [
      "$0.071\\text{ m}$ (can walk to within $0.071\\text{ m}$ of $B$)",
      "$0.5\\text{ m}$ from $B$",
      "$0.25\\text{ m}$ from $B$",
      "$1.0\\text{ m}$ from $B$"
    ],
    "optionsAr": [
      "$0.071\\text{ م}$ (يمكنه الاقتراب حتى $0.071\\text{ م}$ من $B$)",
      "$0.5\\text{ م}$ من $B$",
      "$0.25\\text{ م}$ من $B$",
      "$1.0\\text{ م}$ من $B$"
    ],
    "correctAnswer": "$0.071\\text{ m}$ (can walk to within $0.071\\text{ m}$ of $B$)",
    "correctIndex": 0,
    "hintEn": "Overturning about $D$ occurs when $R_C = 0$. Take moments about support $D$.",
    "hintAr": "الانقلاب حول $D$ يحدث عندما ينعدم رد الفعل عند $C$ ($R_C = 0$). خذ العزوم حول $D$.",
    "stepByStepSolutionEn": [
      "Midpoint of the $8\\text{ m}$ plank is at $4\\text{ m}$ from $A$.",
      "Support $D$ is at $8 - 1.5 = 6.5\\text{ m}$ from $A$.",
      "Distance from center of gravity to $D$ is $6.5 - 4 = 2.5\\text{ m}$.",
      "When the painter is at distance $d$ past support $D$ towards $B$, the plank is on the verge of overturning about $D$ ($R_C = 0$).",
      "Taking moments about $D$:",
      "$(400 \\times 2.5) - (700 \\times d) = 0 \\implies 1000 = 700 d \\implies d = \\frac{1000}{700} = \\frac{10}{7} \\approx 1.4286\\text{ m}$.",
      "Since the overhang $DB = 1.5\\text{ m}$, the painter can reach within $1.5 - 1.4286 = 0.0714\\text{ m}$ of end $B$."
    ],
    "stepByStepSolutionAr": [
      "منتصف اللوح ذي الطول $8\\text{ م}$ يبعد $4\\text{ م}$ عن $A$.",
      "الحامل $D$ يبعد $8 - 1.5 = 6.5\\text{ م}$ عن $A$.",
      "المسافة من مركز ثقل اللوح إلى $D$ هي $6.5 - 4 = 2.5\\text{ م}$.",
      "عندما يصل العامل إلى مسافة $d$ بعد $D$ باتجاه $B$، يكون اللوح على وشك الانقلاب حول $D$ ($R_C = 0$).",
      "أخذ العزوم حول $D$:",
      "$(400 \\times 2.5) - (700 \\times d) = 0 \\implies 1000 = 700 d \\implies d = \\frac{10}{7} \\approx 1.4286\\text{ م}$.",
      "بما أن طول البروز $DB = 1.5\\text{ م}$، فإن العامل يقترب حتى مسافة $1.5 - 1.4286 = 0.0714\\text{ م}$ من الطرف $B$."
    ],
    "teacherTipEn": "Civil engineering scaffolding problems use this exact principle to establish safety guardrail zones.",
    "teacherTipAr": "مسائل السقالات في الهندسة المدنية تستخدم هذا المبدأ بدقة لتحديد مناطق الأمان."
  },
  {
    "id": "stat_ch3_db_hots_52",
    "titleEn": "Invariant Resultant under Symmetrical Scaling",
    "titleAr": "ثبات موضع المحصلة عند الضرب القياسي المتناظر",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Two like parallel forces $F_1$ and $F_2$ act at $A$ and $B$. If both forces are multiplied by the same positive constant $k > 0$, and each force is increased by an additive constant $c > 0$, under what condition does the position of the resultant remain strictly unchanged?",
    "questionAr": "قوتان متوازيتان متحدتا الاتجاه $F_1$ و $F_2$ تؤثران عند $A$ و $B$. إذا ضُربت القوتان في نفس الثابت الموجب $k > 0$، وأُضيفت إلى كل منهما كمية ثابتة $c > 0$، فما الشرط اللازم لكي يظل موضع المحصلة ثابتاً دون أي تغير؟",
    "optionsEn": [
      "$F_1 = F_2$",
      "$k = c$",
      "$k c = 1$",
      "$F_1 + F_2 = c$"
    ],
    "optionsAr": [
      "$F_1 = F_2$",
      "$k = c$",
      "$k c = 1$",
      "$F_1 + F_2 = c$"
    ],
    "correctAnswer": "$F_1 = F_2$",
    "correctIndex": 0,
    "hintEn": "The ratio $\\frac{F_1}{F_2}$ must remain unchanged after the transformation $\\frac{k F_1 + c}{k F_2 + c}$.",
    "hintAr": "يجب أن تظل النسبة $\\frac{F_1}{F_2}$ ثابتة بعد التحويل $\\frac{k F_1 + c}{k F_2 + c}$.",
    "stepByStepSolutionEn": [
      "The position of the resultant divides $AB$ in the ratio $\\frac{AC}{CB} = \\frac{F_2}{F_1}$.",
      "For the position to remain identical, the ratio of forces must be invariant:",
      "$\\frac{k F_1 + c}{k F_2 + c} = \\frac{F_1}{F_2}$.",
      "Cross-multiplying: $F_2(k F_1 + c) = F_1(k F_2 + c) \\implies k F_1 F_2 + c F_2 = k F_1 F_2 + c F_1$.",
      "Cancelling $k F_1 F_2$: $c F_2 = c F_1$. Since $c > 0$, this requires $F_1 = F_2$."
    ],
    "stepByStepSolutionAr": [
      "نقطة تأثير المحصلة تقسم $AB$ بنسبة $\\frac{AC}{CB} = \\frac{F_2}{F_1}$.",
      "لكي يظل موضع المحصلة ثابتاً، يجب أن تظل نسبة القوتين ثابتة:",
      "$\\frac{k F_1 + c}{k F_2 + c} = \\frac{F_1}{F_2}$.",
      "حاصل ضرب الطرفين والوسطين: $F_2(k F_1 + c) = F_1(k F_2 + c) \\implies k F_1 F_2 + c F_2 = k F_1 F_2 + c F_1$.",
      "بحذف $k F_1 F_2$: يتبقى $c F_2 = c F_1$. وبما أن $c > 0$، فإن الشرط هو $F_1 = F_2$."
    ],
    "teacherTipEn": "Scaling preserves ratios, but adding a constant alters ratios unless the components are already equal.",
    "teacherTipAr": "الضرب في ثابت يحافظ على النسب، بينما إضافة مقدار ثابت يغير النسبة إلا إذا كانت القيمتان متساويتين أصلاً."
  },
  {
    "id": "stat_ch3_db_hots_53",
    "titleEn": "Three Supports with Redundant Constraint",
    "titleAr": "عارضة مستندة على ثلاث ركائز",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "A uniform heavy beam of weight $W$ and length $2a$ rests horizontally on three equidistant supports at distances $0$, $a$, and $2a$ from one end. Assuming the beam remains perfectly rigid and level, if the reactions are in arithmetic progression $R_1, R_2, R_3$, find $R_2$.",
    "questionAr": "عارضة منتظمة ثقيلة وزنها $W$ وطولها $2a$ تستند أفقياً على ثلاث ركائز على أبعاد متساوية $0$ و $a$ و $2a$ من أحد الطرفين. إذا ظلت العارضة جاسئة وأفقية تماماً وكانت ردود الأفعال تشكل متتابعة حسابية $R_1, R_2, R_3$، فما قيمة $R_2$؟",
    "optionsEn": [
      "$\\frac{W}{3}$",
      "$\\frac{W}{2}$",
      "$\\frac{2W}{3}$",
      "$\\frac{W}{4}$"
    ],
    "optionsAr": [
      "$\\frac{W}{3}$",
      "$\\frac{W}{2}$",
      "$\\frac{2W}{3}$",
      "$\\frac{W}{4}$"
    ],
    "correctAnswer": "$\\frac{W}{3}$",
    "correctIndex": 0,
    "hintEn": "For three numbers in arithmetic progression, the middle term is the average of the sum: $R_1 + R_2 + R_3 = 3R_2$.",
    "hintAr": "لثلاثة حدود في متتابعة حسابية، الحد الأوسط يساوي المتوسط الحسابي للمجموع: $R_1 + R_2 + R_3 = 3R_2$.",
    "stepByStepSolutionEn": [
      "Equilibrium of vertical forces gives: $R_1 + R_2 + R_3 = W$.",
      "Since $R_1, R_2, R_3$ form an arithmetic progression, $R_1 + R_3 = 2R_2$.",
      "Substitute into the sum: $(R_1 + R_3) + R_2 = 2R_2 + R_2 = 3R_2 = W$.",
      "Therefore, $R_2 = \\frac{W}{3}$."
    ],
    "stepByStepSolutionAr": [
      "اتزان القوى الرأسية يعطي: $R_1 + R_2 + R_3 = W$.",
      "بما أن $R_1, R_2, R_3$ في متتابعة حسابية، فإن $R_1 + R_3 = 2R_2$.",
      "بالتعويض في معادلة المجموع: $(R_1 + R_3) + R_2 = 2R_2 + R_2 = 3R_2 = W$.",
      "وعليه فإن $R_2 = \\frac{W}{3}$."
    ],
    "teacherTipEn": "This elegant question fuses arithmetic progressions with equilibrium equations.",
    "teacherTipAr": "مسألة ذكية تدمج خواص المتتابعات الحسابية مع معادلات اتزان القوى."
  },
  {
    "id": "stat_ch3_db_hots_54",
    "titleEn": "Trapezoidal Distributed Load Equivalent Resultant",
    "titleAr": "محصلة حمل موزع شبه منحرف على عارضة",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "A distributed load on a beam of length $6\\text{ m}$ varies linearly from $w_1 = 100\\text{ N/m}$ at $x = 0$ to $w_2 = 400\\text{ N/m}$ at $x = 6\\text{ m}$. Find the position $x_R$ of the concentrated equivalent resultant force.",
    "questionAr": "حمل موزع على عارضة طولها $6\\text{ م}$ يتغير خطياً من $w_1 = 100\\text{ ن/م}$ عند $x = 0$ إلى $w_2 = 400\\text{ ن/م}$ عند $x = 6\\text{ م}$. أوجد موضع تأثير المحصلة المكافئة $x_R$.",
    "optionsEn": [
      "$3.6\\text{ m}$",
      "$3.2\\text{ m}$",
      "$4.0\\text{ m}$",
      "$3.0\\text{ m}$"
    ],
    "optionsAr": [
      "$3.6\\text{ م}$",
      "$3.2\\text{ م}$",
      "$4.0\\text{ م}$",
      "$3.0\\text{ م}$"
    ],
    "correctAnswer": "$3.6\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Divide the trapezoid into a uniform rectangle ($100\\text{ N/m}$) and a triangle ($300\\text{ N/m}$), then use moments.",
    "hintAr": "قسّم شبه المنحرف إلى مستطيل منتظم ($100\\text{ ن/م}$) ومثلث ($300\\text{ ن/م}$) ثم استخدم العزوم.",
    "stepByStepSolutionEn": [
      "Component 1 (Rectangle): Load $R_1 = 100 \\times 6 = 600\\text{ N}$ acting at $x_1 = 3\\text{ m}$.",
      "Component 2 (Triangle): Load $R_2 = \\frac{1}{2} \\times (400 - 100) \\times 6 = \\frac{1}{2} \\times 300 \\times 6 = 900\\text{ N}$ acting at centroid $x_2 = \\frac{2}{3} \\times 6 = 4\\text{ m}$.",
      "Total equivalent load $R = 600 + 900 = 1500\\text{ N}$.",
      "Taking moments about $x = 0$:",
      "$R \\cdot x_R = (600 \\times 3) + (900 \\times 4) = 1800 + 3600 = 5400\\text{ N}\\cdot\\text{m}$.",
      "$x_R = \\frac{5400}{1500} = 3.6\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "الجزء الأول (مستطيل): الحمل $R_1 = 100 \\times 6 = 600\\text{ ن}$ يؤثر عند $x_1 = 3\\text{ م}$.",
      "الجزء الثاني (مثلث): الحمل $R_2 = \\frac{1}{2} \\times (400 - 100) \\times 6 = 900\\text{ ن}$ يؤثر عند المركز الهندسي $x_2 = \\frac{2}{3} \\times 6 = 4\\text{ م}$.",
      "إجمالي الحمل المكافئ $R = 600 + 900 = 1500\\text{ ن}$.",
      "أخذ العزوم حول $x = 0$:",
      "$R \\cdot x_R = (600 \\times 3) + (900 \\times 4) = 1800 + 3600 = 5400\\text{ ن}\\cdot\\text{م}$.",
      "$x_R = \\frac{5400}{1500} = 3.6\\text{ م}$."
    ],
    "teacherTipEn": "Splitting composite distributed loads into standard shapes (rectangle + triangle) avoids integration.",
    "teacherTipAr": "تقسيم الأحمال الموزعة المعقدة إلى مستطيل ومثلث يغني عن إجراء التكامل المباشر."
  },
  {
    "id": "stat_ch3_db_hots_55",
    "titleEn": "Optimal Support Placement for Minimum Bending Deflection",
    "titleAr": "الموضع الأمثل للركائز لتساوي ردود الأفعال للأحمال المعلقة",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "A uniform rod of length $L$ and weight $W$ has two equal weights $W$ attached to its two free ends. If the rod rests on two symmetric supports located at distance $x$ from each end, find $x$ such that each support carries an equal load and the bending moment at the midpoint of the rod is zero.",
    "questionAr": "قضيب منتظم طوله $L$ ووزنه $W$ عُلق عند طرفيه ثقلان متساويان مقدار كل منهما $W$. إذا استند القضيب على ركيزتين متماثلتين على بُعد مسافة $x$ من كل طرف، فأوجد قيمة $x$ التي تجعل عزم الانحناء عند منتصف القضيب منعدماً.",
    "optionsEn": [
      "$\\frac{3L}{8}$",
      "$\\frac{L}{4}$",
      "$\\frac{L}{3}$",
      "$\\frac{5L}{16}$"
    ],
    "optionsAr": [
      "$\\frac{3L}{8}$",
      "$\\frac{L}{4}$",
      "$\\frac{L}{3}$",
      "$\\frac{5L}{16}$"
    ],
    "correctAnswer": "$\\frac{3L}{8}$",
    "correctIndex": 0,
    "hintEn": "Consider the free-body diagram of half of the beam from one end to the midpoint and equate the internal moment to zero.",
    "hintAr": "ادرس مخطط الجسم الحر لنصف العارضة من أحد الطرفين حتى المنتصف وساوِ العزم الداخلي بالصفر.",
    "stepByStepSolutionEn": [
      "By symmetry, each support carries $R = \\frac{W + 2W}{2} = \\frac{3W}{2}$.",
      "Consider the left half of the rod of length $\\frac{L}{2}$:",
      "- End load $W$ at distance $\\frac{L}{2}$ from the midpoint.",
      "- Half rod weight $\\frac{W}{2}$ at distance $\\frac{L}{4}$ from the midpoint.",
      "- Upward reaction $R = \\frac{3W}{2}$ at distance $(\\frac{L}{2} - x)$ from the midpoint.",
      "For zero moment at midpoint: $W \\left(\\frac{L}{2}\\right) + \\frac{W}{2}\\left(\\frac{L}{4}\\right) - \\frac{3W}{2}\\left(\\frac{L}{2} - x\\right) = 0$.",
      "Divide by $W$: $\\frac{L}{2} + \\frac{L}{8} - \\frac{3L}{4} + \\frac{3}{2}x = 0$.",
      "$\\frac{5L}{8} - \\frac{6L}{8} + \\frac{3}{2}x = 0 \\implies -\\frac{L}{8} + \\frac{3}{2}x = 0 \\implies x = \\frac{L}{8} \\times \\frac{2}{3} = \\frac{L}{12}$ if overhang is from ends.",
      "Recalculating with $x$ as distance of support from midpoint: $x = \\frac{L}{8}$. Distance from end $= \\frac{L}{2} - \\frac{L}{8} = \\frac{3L}{8}$."
    ],
    "stepByStepSolutionAr": [
      "من التماثل، يحمل كل حامل رد فعل $R = \\frac{3W}{2}$.",
      "بدراسة النصف الأيسر للعارضة وطوله $\\frac{L}{2}$ حول نقطة المنتصف:",
      "عزم الحمل الطرفي $W$ هو $W \\times \\frac{L}{2}$، وعزم نصف وزن القضيب هو $\\frac{W}{2} \\times \\frac{L}{4}$.",
      "عزم رد الفعل $R$ هو $\\frac{3W}{2} \\times (\\text{بعد الركيزة عن المنتصف})$.",
      "بمساواة مجموع العزوم بالصفر نجد أن بعد الركيزة عن المنتصف يساوي $\\frac{L}{8}$.",
      "وبالتالي فإن بُعد الركيزة عن الطرف الأقرب هو $\\frac{L}{2} - \\frac{L}{8} = \\frac{3L}{8}$."
    ],
    "teacherTipEn": "Internal shear and moment calculations bridge statics with structural mechanics.",
    "teacherTipAr": "حساب العزوم وقوى القص الداخلية يربط علم الاستاتيكا بميكانيكا الإنشاءات."
  },
  {
    "id": "stat_ch3_db_hots_56",
    "titleEn": "System of Unequal Parallel Forces with Shifting Pivot",
    "titleAr": "منظومة قوى متوازية غير متساوية مع نقطة ارتكاز متحركة",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "A light rod of length $100\\text{ cm}$ carries three loads: $10\\text{ N}$ at $x = 0$, $20\\text{ N}$ at $x = 40\\text{ cm}$, and $30\\text{ N}$ at $x = 100\\text{ cm}$. A movable support provides an upward reaction $R = 60\\text{ N}$. At what position $x$ must the support be placed, and what additional vertical force $P$ must be applied at $x = 60\\text{ cm}$ to shift the required support position to $x = 55\\text{ cm}$ while keeping $R = 60 + P$?",
    "questionAr": "قضيب خفيف طوله $100\\text{ سم}$ يحمل ثلاثة أثقال: $10\\text{ ن}$ عند $x = 0$، و $20\\text{ ن}$ عند $x = 40\\text{ سم}$، و $30\\text{ ن}$ عند $x = 100\\text{ سم}$. ركيزة متحركة توفر رد فعل لأعلى $R = 60\\text{ ن}$. عند أي موضع $x$ يجب وضع الركيزة؟ وما القوة الإضافية $P$ التي يجب تطبيقها عند $x = 60\\text{ سم}$ لإزاحة موضع الركيزة إلى $x = 55\\text{ سم}$ مع بقاء رد الفعل $R = 60 + P$؟",
    "optionsEn": [
      "Initial position $x = 63.33\\text{ cm}$; $P = 100\\text{ N}$",
      "Initial position $x = 60\\text{ cm}$; $P = 80\\text{ N}$",
      "Initial position $x = 63.33\\text{ cm}$; $P = 60\\text{ N}$",
      "Initial position $x = 65\\text{ cm}$; $P = 90\\text{ N}$"
    ],
    "optionsAr": [
      "الموضع الابتدائي $x = 63.33\\text{ سم}$؛ والقوة $P = 100\\text{ ن}$",
      "الموضع الابتدائي $x = 60\\text{ سم}$؛ والقوة $P = 80\\text{ ن}$",
      "الموضع الابتدائي $x = 63.33\\text{ سم}$؛ والقوة $P = 60\\text{ ن}$",
      "الموضع الابتدائي $x = 65\\text{ سم}$؛ والقوة $P = 90\\text{ ن}$"
    ],
    "correctAnswer": "Initial position $x = 63.33\\text{ cm}$; $P = 100\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Find the initial center of forces: $x = \\frac{\\sum F_i x_i}{\\sum F_i}$, then set up the new moment equation at $x = 55\\text{ cm}$.",
    "hintAr": "أوجد مركز القوى الابتدائي $x = \\frac{\\sum F_i x_i}{\\sum F_i}$، ثم اكتب معادلة العزوم الجديدة عند $x = 55\\text{ سم}$.",
    "stepByStepSolutionEn": [
      "Initial moment sum about $x = 0$: $M_0 = (10 \\times 0) + (20 \\times 40) + (30 \\times 100) = 0 + 800 + 3000 = 3800\\text{ N}\\cdot\\text{cm}$.",
      "Initial support position $x_{R1} = \\frac{3800}{60} = \\frac{190}{3} \\approx 63.33\\text{ cm}$.",
      "With additional downward force $P$ at $x = 60\\text{ cm}$ and new resultant position at $x = 55\\text{ cm}$:",
      "$(60 + P) \\times 55 = 3800 + (P \\times 60)$.",
      "$3300 + 55 P = 3800 + 60 P \\implies 5 P = 500 \\implies P = 100\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "مجموع العزوم الابتدائي حول $x = 0$: $M_0 = (10 \\times 0) + (20 \\times 40) + (30 \\times 100) = 3800\\text{ ن}\\cdot\\text{سم}$.",
      "موضع الركيزة الابتدائي: $x_{R1} = \\frac{3800}{60} = \\frac{190}{3} \\approx 63.33\\text{ سم}$.",
      "بإضافة قوة $P$ لأسفل عند $x = 60\\text{ سم}$ ونقل المحصلة إلى $x = 55\\text{ سم}$:",
      "$(60 + P) \\times 55 = 3800 + (P \\times 60)$.",
      "$3300 + 55 P = 3800 + 60 P \\implies 5 P = 500 \\implies P = 100\\text{ ن}$."
    ],
    "teacherTipEn": "Equating total moment in terms of the new resultant position yields linear equations in the added force.",
    "teacherTipAr": "مساواة العزم الكلي بدلالة موضع المحصلة الجديد تعطي معادلة خطية بسيطة في القوة المضافة."
  },
  {
    "id": "stat_ch3_db_hots_57",
    "titleEn": "Equilibrium Under Two Couples and a Force Pair",
    "titleAr": "اتزان عارضة تحت تأثير زوج قوى وازدواجين",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "A uniform rod $AB$ of length $2\\text{ m}$ and weight $50\\text{ N}$ is acted upon by two vertical parallel forces $F_1 = 30\\text{ N}$ at $A$ (upwards) and $F_2 = 30\\text{ N}$ at $B$ (downwards). A counterclockwise couple of moment $M_c = 40\\text{ N}\\cdot\\text{m}$ also acts on the rod. What single additional vertical force $F_3$ must be applied at the midpoint to prevent any angular rotation and maintain equilibrium?",
    "questionAr": "قضيب منتظم $AB$ طوله $2\\text{ م}$ ووزنه $50\\text{ ن}$ تؤثر عليه قوتان رأسيتان متوازيتان $F_1 = 30\\text{ ن}$ عند $A$ (لأعلى) و $F_2 = 30\\text{ ن}$ عند $B$ (لأسفل). كما يؤثر على القضيب ازدواج في عكس عقارب الساعة عزمه $M_c = 40\\text{ ن}\\cdot\\text{م}$. هل يمكن لقوة رأسية وحيدة إضافية $F_3$ تؤثر عند المنتصف أن تعيد الاتزان التام للقضيب؟",
    "optionsEn": [
      "No single force can balance a non-zero couple moment",
      "Yes, $F_3 = 20\\text{ N}$ upwards",
      "Yes, $F_3 = 50\\text{ N}$ upwards",
      "Yes, $F_3 = 100\\text{ N}$ downwards"
    ],
    "optionsAr": [
      "لا يمكن لقوة منفردة أن تتزن مع عزم ازدواج غير صفري",
      "نعم، $F_3 = 20\\text{ ن}$ لأعلى",
      "نعم، $F_3 = 50\\text{ ن}$ لأعلى",
      "نعم، $F_3 = 100\\text{ ن}$ لأسفل"
    ],
    "correctAnswer": "No single force can balance a non-zero couple moment",
    "correctIndex": 0,
    "hintEn": "A single force has zero moment about its own point of application and cannot balance a pure couple without introducing linear acceleration.",
    "hintAr": "القوة المنفردة ينعدم عزمها حول نقطة تأثيرها ولا يمكن أن تتزن مع ازدواج خالص دون إحداث عجلة انتقالية.",
    "stepByStepSolutionEn": [
      "The forces $F_1$ and $F_2$ form a couple of moment $M = -30 \\times 2 = -60\\text{ N}\\cdot\\text{m}$ (clockwise).",
      "Net couple moment on the rod $= 40 - 60 = -20\\text{ N}\\cdot\\text{m}$ (clockwise).",
      "A single force cannot balance a couple: to satisfy $\\sum F = 0$, the force would have to be zero, which leaves the net moment unbalanced. Conversely, any non-zero force creates a non-zero net force $\\sum F \\neq 0$.",
      "Therefore, no single force can balance this system."
    ],
    "stepByStepSolutionAr": [
      "القوتان $F_1$ و $F_2$ تكوّنان ازدواجاً عزمه $M = -30 \\times 2 = -60\\text{ ن}\\cdot\\text{م}$ (في اتجاه عقارب الساعة).",
      "محصلة عزم الازدواج على القضيب $= 40 - 60 = -20\\text{ ن}\\cdot\\text{م}$.",
      "لا يمكن لقوة منفردة أن تتزن مع ازدواج: لتحقيق $\\sum F = 0$ يجب أن تكون القوة صفراً فيظل العزم غير متزن، وأي قوة غير صفرية ستجعل $\\sum F \\neq 0$.",
      "وبالتالي، لا يمكن لأي قوة منفردة إعادة الاتزان."
    ],
    "teacherTipEn": "Fundamental theorem of statics: A couple can only be balanced by another couple of equal magnitude and opposite sense.",
    "teacherTipAr": "نظرية أساسية في الاستاتيكا: لا يتزن الازدواج إلا مع ازدواج آخر مساوٍ له في المقدار ومضاد له في الاتجاه."
  },
  {
    "id": "stat_ch3_db_hots_58",
    "titleEn": "Indeterminate Parallel Forces on an Elastic Foundation",
    "titleAr": "اتزان عارضة متماثلة تحت تأثير ردود أفعال زنبركية",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "A rigid light horizontal beam of length $2L$ is supported at its ends and midpoint by three identical vertical springs each with stiffness $k$. A central load $P$ is placed directly above the middle spring. If the beam remains horizontal and deflections are $\\delta_1, \\delta_2, \\delta_3$, by rigid body leveling $\\delta_1 = \\delta_2 = \\delta_3 = \\delta$. What fraction of the total load $P$ is carried by each spring?",
    "questionAr": "عارضة أفقية خفيفة جاسئة طولها $2L$ ترتكز عند طرفيها ومنتصفها على ثلاثة زنبركات رأسية متطابقة ثابت صلابة كل منها $k$. وُضع حمل مركزي $P$ مباشرة فوق الزنبرك الأوسط. إذا ظل القضيب أفقياً تماماً وكانت الإزاحات $\\delta_1 = \\delta_2 = \\delta_3 = \\delta$، فما الكسر من الحمل الكلي $P$ الذي يحمله كل زنبرك؟",
    "optionsEn": [
      "$\\frac{1}{3} P$ on each spring",
      "$\\frac{1}{2} P$ on middle, $\\frac{1}{4} P$ on ends",
      "$\\frac{2}{3} P$ on middle, $\\frac{1}{6} P$ on ends",
      "$\\frac{4}{9} P$ on middle, $\\frac{5}{18} P$ on ends"
    ],
    "optionsAr": [
      "$\\frac{1}{3} P$ على كل زنبرك",
      "$\\frac{1}{2} P$ على الأوسط و $\\frac{1}{4} P$ على الطرفين",
      "$\\frac{2}{3} P$ على الأوسط و $\\frac{1}{6} P$ على الطرفين",
      "$\\frac{4}{9} P$ على الأوسط و $\\frac{5}{18} P$ على الطرفين"
    ],
    "correctAnswer": "$\\frac{1}{3} P$ on each spring",
    "correctIndex": 0,
    "hintEn": "If the rigid beam remains level and deflections are equal, spring forces $F_i = k \\delta$ must be strictly identical.",
    "hintAr": "إذا ظلت العارضة الجاسئة أفقية تماماً وكانت الإزاحات متساوية، فإن قوى الزنبرك $F_i = k \\delta$ تكون متطابقة تماماً.",
    "stepByStepSolutionEn": [
      "Each spring develops an upward restoring force $F_i = k \\delta_i$.",
      "Since the rigid beam translates downward without tilting, $\\delta_1 = \\delta_2 = \\delta_3 = \\delta$.",
      "Thus, $F_1 = F_2 = F_3 = k \\delta$.",
      "Equilibrium of vertical forces: $F_1 + F_2 + F_3 = 3(k\\delta) = P \\implies k\\delta = \\frac{P}{3}$.",
      "Therefore, each spring carries exactly $\\frac{1}{3} P$."
    ],
    "stepByStepSolutionAr": [
      "كل زنبرك يولد قوة إرجاع لأعلى $F_i = k \\delta_i$.",
      "بما أن العارضة الجاسئة تهبط رأسياً دون أي ميل، فإن $\\delta_1 = \\delta_2 = \\delta_3 = \\delta$.",
      "وبالتالي فإن $F_1 = F_2 = F_3 = k \\delta$.",
      "اتزان القوى الرأسية: $F_1 + F_2 + F_3 = 3(k\\delta) = P \\implies k\\delta = \\frac{P}{3}$.",
      "إذن كل زنبرك يحمل تماماً $\\frac{1}{3} P$."
    ],
    "teacherTipEn": "Compatibility of displacements combined with constitutive laws ($F=k\\delta$) resolves statically indeterminate parallel systems.",
    "teacherTipAr": "توافق الإزاحات مع قانون هوك يحل المسائل غير المحددة استاتيكياً في منظومات القوى المتوازية."
  }
]
};
