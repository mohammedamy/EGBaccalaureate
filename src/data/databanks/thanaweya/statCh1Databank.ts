import type { ChapterDatabank } from '../../../types/curriculum';

export const statCh1Databank: ChapterDatabank = {
  easy: [
  {
    "id": "stat_ch1_db_easy_01",
    "titleEn": "Definition of Angle of Friction",
    "titleAr": "تعريف زاوية الاحتكاك",
    "difficulty": "easy",
    "questionEn": "The angle of friction $\\lambda$ is defined as the angle between:",
    "questionAr": "تُعرف زاوية الاحتكاك $\\lambda$ بأنها الزاوية المحصورة بين:",
    "optionsEn": [
      "The normal reaction $R$ and the resultant reaction $R'$ at limiting equilibrium",
      "The plane and the resultant reaction $R'$",
      "The applied force $P$ and the friction force $F$",
      "The weight $W$ and the friction force $F$"
    ],
    "optionsAr": [
      "رد الفعل العمودي ر ورد الفعل المحصل ر' عند الاحتكاك النهائي",
      "المستوى ورد الفعل المحصل ر'",
      "القوة المؤثرة ق وقوة الاحتكاك ح",
      "الوزن و وقوة الاحتكاك ح"
    ],
    "correctAnswer": "The normal reaction $R$ and the resultant reaction $R'$ at limiting equilibrium",
    "correctIndex": 0,
    "hintEn": "Standard definition: tan lambda = F_s / R = mu_s.",
    "hintAr": "التعريف القياسي لزاوية الاحتكاك: ظا ل = م_س.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_02",
    "titleEn": "Relation between Friction Coefficient and Friction Angle",
    "titleAr": "العلاقة بين معامل الاحتكاك وزاوية الاحتكاك",
    "difficulty": "easy",
    "questionEn": "The relation between the coefficient of static friction $\\mu_s$ and the angle of friction $\\lambda$ is:",
    "questionAr": "العلاقة بين معامل الاحتكاك السكوني $\\mu_s$ وزاوية الاحتكاك $\\lambda$ هي:",
    "optionsEn": [
      "$\\mu_s = \\tan \\lambda$",
      "$\\mu_s = \\sin \\lambda$",
      "$\\mu_s = \\cos \\lambda$",
      "$\\mu_s = \\cot \\lambda$"
    ],
    "optionsAr": [
      "م_س = ظا ل",
      "م_س = جا ل",
      "م_س = جتا ل",
      "م_س = ظتا ل"
    ],
    "correctAnswer": "$\\mu_s = \\tan \\lambda$",
    "correctIndex": 0,
    "hintEn": "mu_s = tan lambda.",
    "hintAr": "معامل الاحتكاك السكوني يساوي ظل زاوية الاحتكاك.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_03",
    "titleEn": "Resultant Reaction Formula in Terms of Friction Angle",
    "titleAr": "صيغة رد الفعل المحصل بدلالة زاوية الاحتكاك",
    "difficulty": "easy",
    "questionEn": "The resultant reaction $R'$ in terms of the normal reaction $R$ and angle of friction $\\lambda$ is:",
    "questionAr": "يُعبر عن مقدار رد الفعل المحصل $R'$ بدلالة رد الفعل العمودي $R$ وزاوية الاحتكاك $\\lambda$ بالقانون:",
    "optionsEn": [
      "$R' = R \\sec \\lambda$",
      "$R' = R \\cos \\lambda$",
      "$R' = R \\sin \\lambda$",
      "$R' = R \\tan \\lambda$"
    ],
    "optionsAr": [
      "ر' = ر قا ل",
      "ر' = ر جتا ل",
      "ر' = ر جا ل",
      "ر' = ر ظا ل"
    ],
    "correctAnswer": "$R' = R \\sec \\lambda$",
    "correctIndex": 0,
    "hintEn": "R' = sqrt(R^2 + (mu_s R)^2) = R sqrt(1 + tan^2 lambda) = R sec lambda.",
    "hintAr": "ر' = ر √(1 + ظا² ل) = ر قا ل.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_04",
    "titleEn": "Horizontal Force for Limiting Equilibrium",
    "titleAr": "القوة الأفقية لجعل الجسم على وشك الحركة",
    "difficulty": "easy",
    "questionEn": "A body of weight $W = 40\\text{ N}$ rests on a rough horizontal plane with $\\mu_s = 0.25$. Find the horizontal force required to place the body on the verge of motion.",
    "questionAr": "وضع جسم وزنه $W = 40\\text{ نيوتن}$ على مستوى أفقي خشن معامل احتكاكه $\\mu_s = 0.25$. أوجد القوة الأفقية التي تجعل الجسم على وشك الحركة.",
    "optionsEn": [
      "$10\\text{ N}$",
      "$16\\text{ N}$",
      "$4\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "10 نيوتن",
      "16 نيوتن",
      "4 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$10\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "P = mu_s * W = 0.25 * 40 = 10 N.",
    "hintAr": "ق = م_س × و = 0.25 × 40 = 10 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_05",
    "titleEn": "Friction Angle when Coefficient is 1",
    "titleAr": "زاوية الاحتكاك عندما يكون المعامل 1",
    "difficulty": "easy",
    "questionEn": "If the coefficient of static friction between a body and a plane is $\\mu_s = 1$, find the angle of friction $\\lambda$.",
    "questionAr": "إذا كان معامل الاحتكاك السكوني بين جسم ومستوى $\\mu_s = 1$، فما قياس زاوية الاحتكاك $\\lambda$؟",
    "optionsEn": [
      "$45^\\circ$",
      "$30^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "45°",
      "30°",
      "60°",
      "90°"
    ],
    "correctAnswer": "$45^\\circ$",
    "correctIndex": 0,
    "hintEn": "tan lambda = 1 => lambda = 45 deg.",
    "hintAr": "ظا ل = 1 ومنها ل = 45°.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_06",
    "titleEn": "Friction Angle when Coefficient is 1/sqrt(3)",
    "titleAr": "زاوية الاحتكاك عندما يكون المعامل 1/√3",
    "difficulty": "easy",
    "questionEn": "If $\\mu_s = \\frac{1}{\\sqrt{3}}$, find the angle of friction $\\lambda$.",
    "questionAr": "إذا كان معامل الاحتكاك السكوني $\\mu_s = \\frac{1}{\\sqrt{3}}$، فما قياس زاوية الاحتكاك $\\lambda$؟",
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
    "hintEn": "tan lambda = 1/sqrt(3) => lambda = 30 deg.",
    "hintAr": "ظا ل = 1/√3 إذن ل = 30°.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_07",
    "titleEn": "Friction Angle when Coefficient is sqrt(3)",
    "titleAr": "زاوية الاحتكاك عندما يكون المعامل √3",
    "difficulty": "easy",
    "questionEn": "If $\\mu_s = \\sqrt{3}$, find the angle of friction $\\lambda$.",
    "questionAr": "إذا كان معامل الاحتكاك السكوني $\\mu_s = \\sqrt{3}$، فما قياس زاوية الاحتكاك $\\lambda$؟",
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
    "hintEn": "tan lambda = sqrt(3) => lambda = 60 deg.",
    "hintAr": "ظا ل = √3 إذن ل = 60°.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_08",
    "titleEn": "Resultant Reaction for Given Normal Reaction and mu",
    "titleAr": "رد الفعل المحصل بمعلومية رد الفعل العمودي والمعامل",
    "difficulty": "easy",
    "questionEn": "If the normal reaction is $R = 20\\text{ N}$ and $\\mu_s = 0.75$, find the resultant reaction $R'$ at limiting equilibrium.",
    "questionAr": "إذا كان رد الفعل العمودي $R = 20\\text{ نيوتن}$ ومعامل الاحتكاك $\\mu_s = 0.75$، فما مقدار رد الفعل المحصل $R'$ عند الاحتكاك النهائي؟",
    "optionsEn": [
      "$25\\text{ N}$",
      "$15\\text{ N}$",
      "$35\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "25 نيوتن",
      "15 نيوتن",
      "35 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$25\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "R' = R sqrt(1 + mu_s^2) = 20 sqrt(1 + 0.5625) = 20 * 1.25 = 25 N.",
    "hintAr": "ر' = ر √(1 + م_س²) = 20 × 1.25 = 25 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_09",
    "titleEn": "Nature of Friction Force Before Verge of Motion",
    "titleAr": "طبيعة قوة الاحتكاك قبل وشك الحركة",
    "difficulty": "easy",
    "questionEn": "When a body of weight $W = 50\\text{ N}$ rests on a rough horizontal plane with $\\mu_s = 0.4$, a horizontal force $P = 12\\text{ N}$ acts on it. What is the magnitude of the friction force $F$?",
    "questionAr": "وضع جسم وزنه $W = 50\\text{ نيوتن}$ على مستوى أفقي خشن معامل احتكاكه $\\mu_s = 0.4$ وأثرت عليه قوة أفقية $P = 12\\text{ نيوتن}$. ما مقدار قوة الاحتكاك $F$ المتولدة؟",
    "optionsEn": [
      "$12\\text{ N}$",
      "$20\\text{ N}$",
      "$50\\text{ N}$",
      "$8\\text{ N}$"
    ],
    "optionsAr": [
      "12 نيوتن",
      "20 نيوتن",
      "50 نيوتن",
      "8 نيوتن"
    ],
    "correctAnswer": "$12\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Limiting friction is F_s = 0.4 * 50 = 20 N. Since P = 12 < 20, body is in equilibrium and F = P = 12 N.",
    "hintAr": "الاحتكاك النهائي 20 نيوتن، وبما أن القوة 12 < 20 فإن الجسم متزن وقوة الاحتكاك تعادل القوة المؤثرة = 12 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_10",
    "titleEn": "Static vs Kinetic Friction Comparison",
    "titleAr": "مقارنة الاحتكاك السكوني والحركي",
    "difficulty": "easy",
    "questionEn": "For any given two contact surfaces, which statement is always true regarding the static coefficient $\\mu_s$ and kinetic coefficient $\\mu_k$?",
    "questionAr": "لأي سطحي تلامس معطيين، أي العبارات الآتية صحيحة دائماً بخصوص معامل الاحتكاك السكوني $\\mu_s$ والحركي $\\mu_k$؟",
    "optionsEn": [
      "$\\mu_s > \\mu_k$",
      "$\\mu_s < \\mu_k$",
      "$\\mu_s = \\mu_k$",
      "$\\mu_s \\cdot \\mu_k = 1$"
    ],
    "optionsAr": [
      "م_س > م_ح",
      "م_س < م_ح",
      "م_س = م_ح",
      "م_س × م_ح = 1"
    ],
    "correctAnswer": "$\\mu_s > \\mu_k$",
    "correctIndex": 0,
    "hintEn": "Static friction coefficient is always strictly greater than kinetic friction coefficient.",
    "hintAr": "معامل الاحتكاك السكوني أكبر دائماً من معامل الاحتكاك الحركي.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_11",
    "titleEn": "Limiting Friction Value for W=60 N",
    "titleAr": "الاحتكاك النهائي لجسم وزنه 60 نيوتن",
    "difficulty": "easy",
    "questionEn": "A body of weight $W = 60\\text{ N}$ is on a rough horizontal plane. If the angle of friction is $\\lambda = 30^\\circ$, find the limiting static friction $F_s$.",
    "questionAr": "جسم وزنه $W = 60\\text{ نيوتن}$ موضوع على مستوى أفقي خشن. إذا كانت زاوية الاحتكاك $\\lambda = 30^\\circ$، فما مقدار قوة الاحتكاك النهائي $F_s$؟",
    "optionsEn": [
      "$20\\sqrt{3}\\text{ N}$",
      "$30\\text{ N}$",
      "$30\\sqrt{3}\\text{ N}$",
      "$60\\text{ N}$"
    ],
    "optionsAr": [
      "20√3 نيوتن",
      "30 نيوتن",
      "30√3 نيوتن",
      "60 نيوتن"
    ],
    "correctAnswer": "$20\\sqrt{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "F_s = W * tan(30) = 60 * (1/sqrt(3)) = 20 sqrt(3) N.",
    "hintAr": "ح_س = و ظا 30 = 60 / √3 = 20√3 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_12",
    "titleEn": "Condition for Body on Inclined Plane on Verge of Motion",
    "titleAr": "شرط وشك الحركة على مستوى مائل تحت تأثير وزنه فقط",
    "difficulty": "easy",
    "questionEn": "A body is placed on a rough plane inclined at angle $\\theta$ to the horizontal. If the body is on the verge of sliding down under gravity alone, then:",
    "questionAr": "وضع جسم على مستوى خشن يميل على الأفقي بزاوية $\\theta$. إذا كان الجسم على وشك الانزلاق لأسفل تحت تأثير وزنه فقط، فإن:",
    "optionsEn": [
      "$\\theta = \\lambda$",
      "$\\theta > \\lambda$",
      "$\\theta < \\lambda$",
      "$\\theta + \\lambda = 90^\\circ$"
    ],
    "optionsAr": [
      "هـ = ل",
      "هـ > ل",
      "هـ < ل",
      "هـ + ل = 90°"
    ],
    "correctAnswer": "$\\theta = \\lambda$",
    "correctIndex": 0,
    "hintEn": "W sin theta = mu_s W cos theta => tan theta = mu_s = tan lambda => theta = lambda.",
    "hintAr": "شرط وشك الانزلاق تحت تأثير الوزن فقط هو أن تكون زاوية الميل مساوية لزاوية الاحتكاك: هـ = ل.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_13",
    "titleEn": "Body Remains at Rest on Rough Inclined Plane",
    "titleAr": "استقرار الجسم على مستوى مائل خشن",
    "difficulty": "easy",
    "questionEn": "If a body placed on a rough plane inclined at angle $\\theta$ remains at rest in non-limiting equilibrium under gravity alone, then:",
    "questionAr": "إذا استقر جسم على مستوى خشن يميل بزاوية $\\theta$ في حالة اتزان غير نهائي تحت تأثير وزنه فقط، فإن:",
    "optionsEn": [
      "$\\theta < \\lambda$",
      "$\\theta = \\lambda$",
      "$\\theta > \\lambda$",
      "$\\theta = 2\\lambda$"
    ],
    "optionsAr": [
      "هـ < ل",
      "هـ = ل",
      "هـ > ل",
      "هـ = 2ل"
    ],
    "correctAnswer": "$\\theta < \\lambda$",
    "correctIndex": 0,
    "hintEn": "When theta < lambda, W sin theta < mu_s W cos theta, so the body remains securely at rest.",
    "hintAr": "عندما تكون زاوية الميل أصغر من زاوية الاحتكاك (هـ < ل) يظل الجسم متزناً ولا ينزلق.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_14",
    "titleEn": "Normal Reaction on Inclined Plane",
    "titleAr": "رد الفعل العمودي على مستوى مائل",
    "difficulty": "easy",
    "questionEn": "A body of weight $W = 50\\text{ N}$ rests on a plane inclined at $30^\\circ$ to the horizontal. What is the normal reaction $R$?",
    "questionAr": "جسم وزنه $W = 50\\text{ نيوتن}$ موضوع على مستوى يميل بزاوية $30^\\circ$ على الأفقي. ما مقدار رد الفعل العمودي $R$؟",
    "optionsEn": [
      "$25\\sqrt{3}\\text{ N}$",
      "$25\\text{ N}$",
      "$50\\text{ N}$",
      "$50\\sqrt{3}\\text{ N}$"
    ],
    "optionsAr": [
      "25√3 نيوتن",
      "25 نيوتن",
      "50 نيوتن",
      "50√3 نيوتن"
    ],
    "correctAnswer": "$25\\sqrt{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "R = W cos(30) = 50 * (sqrt(3)/2) = 25 sqrt(3) N.",
    "hintAr": "ر = و جتا 30 = 50 × (√3/2) = 25√3 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_15",
    "titleEn": "Weight Component Along Greatest Slope",
    "titleAr": "مركبة الوزن في اتجاه خط أكبر ميل",
    "difficulty": "easy",
    "questionEn": "A body of weight $W = 80\\text{ N}$ rests on a plane inclined at $30^\\circ$ to the horizontal. The component of weight along the line of greatest slope is:",
    "questionAr": "جسم وزنه $W = 80\\text{ نيوتن}$ موضوع على مستوى يميل بزاوية $30^\\circ$ على الأفقي. مركبة الوزن في اتجاه خط أكبر ميل لأسفل هي:",
    "optionsEn": [
      "$40\\text{ N}$",
      "$40\\sqrt{3}\\text{ N}$",
      "$80\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "40 نيوتن",
      "40√3 نيوتن",
      "80 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$40\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "W_parallel = W sin(30) = 80 * 0.5 = 40 N.",
    "hintAr": "مركبة الوزن = و جا 30 = 80 × 0.5 = 40 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Draw free body diagram.",
      "2. Resolve forces along and perpendicular to plane."
    ],
    "stepByStepSolutionAr": [
      "١. رسم مخطط الجسم الحر.",
      "٢. تحليل القوى في اتجاه المستوى والاتجاه العمودي عليه."
    ],
    "teacherTipEn": "Direct question from Ministry Statics textbook.",
    "teacherTipAr": "سؤال مباشر من كتاب الاستاتيكا للثانوية العامة."
  },
  {
    "id": "stat_ch1_db_easy_16",
    "titleEn": "Range of Static Friction Force",
    "titleAr": "مجال قوة الاحتكاك السكوني",
    "difficulty": "easy",
    "questionEn": "For a body resting on a rough plane, the static friction force $F$ always belongs to the interval:",
    "questionAr": "لجسم متزن على مستوى خشن، تنتمي قوة الاحتكاك السكوني $F$ دائماً إلى الفترة:",
    "optionsEn": [
      "$[0, \\mu_s R]$",
      "$[0, R]$",
      "$[\\mu_s R, R]$",
      "$[0, \\infty)$"
    ],
    "optionsAr": [
      "$[0, \\mu_s R]$",
      "$[0, R]$",
      "$[\\mu_s R, R]$",
      "$[0, \\infty)$"
    ],
    "correctAnswer": "$[0, \\mu_s R]$",
    "correctIndex": 0,
    "hintEn": "Friction starts at zero when no force is applied and reaches maximum $\\mu_s R$ at impending motion.",
    "hintAr": "يبدأ الاحتكاك من الصفر عند انعدام القوة المؤثرة ويصل لقيمته القصوى $\\mu_s R$ عند وشك الحركة.",
    "stepByStepSolutionEn": [
      "1. When no external force tends to move the body, $F = 0$.",
      "2. As external force increases, friction matches it until limiting equilibrium where $F_s = \\mu_s R$.",
      "3. Therefore, $0 \\le F \\le \\mu_s R$, meaning $F \\in [0, \\mu_s R]$."
    ],
    "stepByStepSolutionAr": [
      "١. عند عدم وجود قوة موازية للمستوى، يكون الاحتكاك صفراً.",
      "٢. بزيادة القوة يزداد الاحتكاك تلقائياً حتى يبلغ قيمته النهائية $F_s = \\mu_s R$.",
      "٣. إذن $F \\in [0, \\mu_s R]$."
    ],
    "teacherTipEn": "Static friction is self-adjusting: it only equals $\\mu_s R$ at the exact verge of motion.",
    "teacherTipAr": "الاحتكاك السكوني قوة متغيرة ذاتياً، ولا تساوي $\\mu_s R$ إلا عند وشك الحركة فقط."
  },
  {
    "id": "stat_ch1_db_easy_17",
    "titleEn": "Range of Resultant Reaction",
    "titleAr": "مجال مقدار رد الفعل المحصل",
    "difficulty": "easy",
    "questionEn": "If the normal reaction is $R$ and the friction angle is $\\lambda$, the magnitude of the resultant reaction $R'$ belongs to:",
    "questionAr": "إذا كان رد الفعل العمودي $R$ وزاوية الاحتكاك $\\lambda$، فإن مقدار رد الفعل المحصل $R'$ ينتمي إلى الفترة:",
    "optionsEn": [
      "$[R, R\\sec\\lambda]$",
      "$[0, R\\sec\\lambda]$",
      "$[R, R\\tan\\lambda]$",
      "$[R\\tan\\lambda, R\\sec\\lambda]$"
    ],
    "optionsAr": [
      "$[R, R\\sec\\lambda]$",
      "$[0, R\\sec\\lambda]$",
      "$[R, R\\tan\\lambda]$",
      "$[R\\tan\\lambda, R\\sec\\lambda]$"
    ],
    "correctAnswer": "$[R, R\\sec\\lambda]$",
    "correctIndex": 0,
    "hintEn": "$R' = \\sqrt{R^2 + F^2}$. Since $0 \\le F \\le \\mu_s R$, evaluate at bounds.",
    "hintAr": "$R' = \\sqrt{R^2 + F^2}$. بما أن $F$ بين 0 و $\\mu_s R$، عوض بالطرفين.",
    "stepByStepSolutionEn": [
      "1. When $F = 0$, $R' = \\sqrt{R^2 + 0} = R$.",
      "2. At limiting friction $F_s = \\mu_s R = R\\tan\\lambda$, $R' = \\sqrt{R^2 + R^2\\tan^2\\lambda} = R\\sqrt{1 + \\tan^2\\lambda} = R\\sec\\lambda$.",
      "3. Therefore, $R' \\in [R, R\\sec\\lambda]$."
    ],
    "stepByStepSolutionAr": [
      "١. عند انعدام الاحتكاك: $R' = R$.",
      "٢. عند الاحتكاك النهائي: $R' = R\\sqrt{1 + \\mu_s^2} = R\\sec\\lambda$.",
      "٣. إذن $R' \\in [R, R\\sec\\lambda]$."
    ],
    "teacherTipEn": "The resultant reaction is never less than the normal reaction $R$.",
    "teacherTipAr": "رد الفعل المحصل لا يمكن أن يقل أبداً عن رد الفعل العمودي $R$."
  },
  {
    "id": "stat_ch1_db_easy_18",
    "titleEn": "Variation of Angle of Resultant Reaction",
    "titleAr": "تغير زاوية ميل رد الفعل المحصل",
    "difficulty": "easy",
    "questionEn": "A body rests on a rough horizontal plane. As an applied horizontal force increases from zero to the verge of motion, the angle between the resultant reaction $R'$ and the normal reaction $R$ varies from:",
    "questionAr": "جسم متزن على مستوى أفقي خشن. بزيادة القوة الأفقية المؤثرة تدريجياً من الصفر حتى وشك الحركة، فإن الزاوية بين رد الفعل المحصل $R'$ والعمودي $R$ تتغير من:",
    "optionsEn": [
      "$0\\text{ to }\\lambda$",
      "$\\lambda\\text{ to }90^\\circ$",
      "$0\\text{ to }90^\\circ$",
      "$\\lambda\\text{ to }0$"
    ],
    "optionsAr": [
      "$0\\text{ إلى }\\lambda$",
      "$\\lambda\\text{ إلى }90^\\circ$",
      "$0\\text{ إلى }90^\\circ$",
      "$\\lambda\\text{ إلى }0$"
    ],
    "correctAnswer": "$0\\text{ to }\\lambda$",
    "correctIndex": 0,
    "hintEn": "The angle $\\theta$ satisfies $\\tan\\theta = F/R$. As $F$ goes from $0$ to $\\mu_s R$, $\\tan\\theta$ goes from $0$ to $\\tan\\lambda$.",
    "hintAr": "ظل زاوية ميل رد الفعل المحصل يساوي $F/R$.",
    "stepByStepSolutionEn": [
      "1. Let $\\theta$ be the angle between $R'$ and $R$. Then $\\tan\\theta = \\frac{F}{R}$.",
      "2. When $F = 0$, $\\tan\\theta = 0 \\implies \\theta = 0$.",
      "3. At limiting equilibrium, $F = \\mu_s R = R\\tan\\lambda \\implies \\tan\\theta = \\tan\\lambda \\implies \\theta = \\lambda$.",
      "4. The angle varies continuously from $0$ to $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\tan\\theta = F/R$ حيث $\\theta$ الزاوية بين المحصل والعمودي.",
      "٢. عندما $F = 0$ تكون $\\theta = 0$.",
      "٣. عند وشك الحركة $F = \\mu R \\implies \\theta = \\lambda$.",
      "٤. إذن تتغير الزاوية من $0$ إلى $\\lambda$."
    ],
    "teacherTipEn": "The angle of friction $\\lambda$ is the MAXIMUM angle that the resultant reaction makes with the normal.",
    "teacherTipAr": "زاوية الاحتكاك $\\lambda$ هي أقصى زاوية يمكن أن يصنعها رد الفعل المحصل مع رد الفعل العمودي."
  },
  {
    "id": "stat_ch1_db_easy_19",
    "titleEn": "Normal Reaction under Inclined Upward Pull",
    "titleAr": "رد الفعل العمودي تحت تأثير قوة شد مائلة لأعلى",
    "difficulty": "easy",
    "questionEn": "A body of weight $W$ rests on a rough horizontal plane. A pulling force $P$ inclined at angle $\\alpha$ above the horizontal acts on it. The normal reaction $R$ is:",
    "questionAr": "جسم وزنه $W$ موضوع على مستوى أفقي خشن، تؤثر عليه قوة شد $P$ تميل بزاوية $\\alpha$ لأعلى على الأفقي. فإن رد الفعل العمودي $R$ يساوي:",
    "optionsEn": [
      "$W - P\\sin\\alpha$",
      "$W + P\\sin\\alpha$",
      "$W - P\\cos\\alpha$",
      "$W/\\cos\\alpha$"
    ],
    "optionsAr": [
      "$W - P\\sin\\alpha$",
      "$W + P\\sin\\alpha$",
      "$W - P\\cos\\alpha$",
      "$W/\\cos\\alpha$"
    ],
    "correctAnswer": "$W - P\\sin\\alpha$",
    "correctIndex": 0,
    "hintEn": "Resolve forces vertically: $R + P\\sin\\alpha = W$.",
    "hintAr": "حلل القوى رأسياً: $R + P\\sin\\alpha = W$.",
    "stepByStepSolutionEn": [
      "1. Vertical equilibrium condition: $\\sum F_y = 0$.",
      "2. Upward forces: $R + P\\sin\\alpha$. Downward forces: $W$.",
      "3. $R + P\\sin\\alpha = W \\implies R = W - P\\sin\\alpha$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط الاتزان الرأسي: مجموع القوى الرأسية = صفر.",
      "٢. $R + P\\sin\\alpha = W$.",
      "٣. إذن $R = W - P\\sin\\alpha$."
    ],
    "teacherTipEn": "An upward-inclined pull reduces the normal reaction and thus reduces the required friction force.",
    "teacherTipAr": "الشد المائل لأعلى يخفف ضغط الجسم على المستوى وبالتالي يقلل قوة الاحتكاك المطلوبة للحركة."
  },
  {
    "id": "stat_ch1_db_easy_20",
    "titleEn": "Normal Reaction under Inclined Downward Push",
    "titleAr": "رد الفعل العمودي تحت تأثير قوة ضغط مائلة لأسفل",
    "difficulty": "easy",
    "questionEn": "A body of weight $W$ rests on a rough horizontal plane. A pushing force $P$ inclined at angle $\\alpha$ below the horizontal acts on it. The normal reaction $R$ is:",
    "questionAr": "جسم وزنه $W$ موضوع على مستوى أفقي خشن، تؤثر عليه قوة دفع $P$ تميل بزاوية $\\alpha$ لأسفل على الأفقي. فإن رد الفعل العمودي $R$ يساوي:",
    "optionsEn": [
      "$W + P\\sin\\alpha$",
      "$W - P\\sin\\alpha$",
      "$W + P\\cos\\alpha$",
      "$P\\sin\\alpha$"
    ],
    "optionsAr": [
      "$W + P\\sin\\alpha$",
      "$W - P\\sin\\alpha$",
      "$W + P\\cos\\alpha$",
      "$P\\sin\\alpha$"
    ],
    "correctAnswer": "$W + P\\sin\\alpha$",
    "correctIndex": 0,
    "hintEn": "Resolve forces vertically: downward forces are $W + P\\sin\\alpha$.",
    "hintAr": "حلل القوى رأسياً: القوى لأسفل هي الوزن ومركبة الدفع.",
    "stepByStepSolutionEn": [
      "1. Vertical equilibrium condition: $\\sum F_y = 0$.",
      "2. Upward force: $R$. Downward forces: $W + P\\sin\\alpha$.",
      "3. Therefore, $R = W + P\\sin\\alpha$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط الاتزان الرأسي: $R = W + P\\sin\\alpha$.",
      "٢. إذن رد الفعل العمودي يزداد بمقدار المركبة الرأسية لقوة الدفع."
    ],
    "teacherTipEn": "Pushing downward increases normal reaction, making it much harder to move the body than pulling!",
    "teacherTipAr": "الدفع لأسفل يزيد من رد الفعل العمودي مما يزيد الاحتكاك ويجعل تحريك الجسم أصعب بكثير من شده!"
  },
  {
    "id": "stat_ch1_db_easy_21",
    "titleEn": "Finding Friction Angle from Limiting Force",
    "titleAr": "حساب زاوية الاحتكاك من قوة وشك الحركة",
    "difficulty": "easy",
    "questionEn": "If a horizontal force of $15\\text{ N}$ puts a body of weight $30\\text{ N}$ on the verge of motion on a rough horizontal plane, the angle of friction $\\lambda$ is:",
    "questionAr": "إذا جعلت قوة أفقية مقدارها $15\\text{ نيوتن}$ جسماً وزنه $30\\text{ نيوتن}$ على وشك الحركة على مستوى أفقي خشن، فإن زاوية الاحتكاك $\\lambda$ تساوي:",
    "optionsEn": [
      "$\\arctan(0.5)$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$\\arctan(2)$"
    ],
    "optionsAr": [
      "$\\arctan(0.5)$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$\\arctan(2)$"
    ],
    "correctAnswer": "$\\arctan(0.5)$",
    "correctIndex": 0,
    "hintEn": "$F_s = \\mu_s R \\implies \\mu_s = \\tan\\lambda = F_s / R$.",
    "hintAr": "معامل الاحتكاك $\\mu_s = \\tan\\lambda = F_s / R$.",
    "stepByStepSolutionEn": [
      "1. At limiting equilibrium on horizontal plane: $R = W = 30\\text{ N}$ and $F_s = P = 15\\text{ N}$.",
      "2. $\\mu_s = \\frac{F_s}{R} = \\frac{15}{30} = 0.5$.",
      "3. Since $\\mu_s = \\tan\\lambda$, we have $\\tan\\lambda = 0.5 \\implies \\lambda = \\arctan(0.5)$."
    ],
    "stepByStepSolutionAr": [
      "١. عند وشك الحركة: $R = 30\\text{ نيوتن}$ و $F_s = 15\\text{ نيوتن}$.",
      "٢. معامل الاحتكاك $\\mu_s = \\frac{15}{30} = 0.5$.",
      "٣. بما أن $\\tan\\lambda = \\mu_s$، إذن $\\lambda = \\arctan(0.5)$."
    ],
    "teacherTipEn": "Always check that $\\tan\\lambda = \\mu_s$, so $\\lambda = \\arctan(\\mu_s)$.",
    "teacherTipAr": "تذكر أن ظل زاوية الاحتكاك يساوي دائماً معامل الاحتكاك السكوني."
  },
  {
    "id": "stat_ch1_db_easy_22",
    "titleEn": "Resultant Reaction Magnitude in Non-Limiting Equilibrium",
    "titleAr": "مقدار رد الفعل المحصل في حالة اتزان غير نهائي",
    "difficulty": "easy",
    "questionEn": "A body of weight $W = 100\\text{ N}$ on a rough horizontal plane with $\\mu_s = 0.3$ is acted upon by a horizontal force of $20\\text{ N}$. The magnitude of the resultant reaction $R'$ is:",
    "questionAr": "جسم وزنه $W = 100\\text{ نيوتن}$ موضوع على مستوى أفقي خشن معامل احتكاكه $\\mu_s = 0.3$، أثرت عليه قوة أفقية مقدارها $20\\text{ نيوتن}$. فإن مقدار رد الفعل المحصل $R'$ يساوي:",
    "optionsEn": [
      "$20\\sqrt{26}\\text{ N}$",
      "$100\\text{ N}$",
      "$120\\text{ N}$",
      "$10\\sqrt{109}\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\sqrt{26}\\text{ نيوتن}$",
      "$100\\text{ نيوتن}$",
      "$120\\text{ نيوتن}$",
      "$10\\sqrt{109}\\text{ نيوتن}$"
    ],
    "correctAnswer": "$20\\sqrt{26}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Check limiting friction first: $F_s = 0.3(100) = 30\\text{ N}$. Since $P = 20 < 30$, actual friction is $F = 20\\text{ N}$.",
    "hintAr": "تأكد أولاً من نوع الاتزان: القوة 20 أقل من الاحتكاك النهائي 30، إذن الاحتكاك الفعلي 20 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Maximum static friction: $F_s = \\mu_s R = 0.3(100) = 30\\text{ N}$.",
      "2. Since applied force $P = 20\\text{ N} < 30\\text{ N}$, the body is in equilibrium and actual friction is $F = 20\\text{ N}$.",
      "3. Resultant reaction: $R' = \\sqrt{R^2 + F^2} = \\sqrt{100^2 + 20^2} = \\sqrt{10000 + 400} = \\sqrt{10400} = 20\\sqrt{26}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الاحتكاك النهائي $F_s = 0.3 \\times 100 = 30\\text{ نيوتن}$.",
      "٢. القوة الأفقية 20 نيوتن أقل من 30، فالاحتكاك الفعلي المتولد هو $F = 20\\text{ نيوتن}$.",
      "٣. رد الفعل المحصل $R' = \\sqrt{100^2 + 20^2} = \\sqrt{10400} = 20\\sqrt{26}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Do NOT use $F_s$ when the applied force is smaller than the limiting friction threshold!",
    "teacherTipAr": "إياك أن تستخدم الاحتكاك النهائي $F_s$ إذا كان الجسم في اتزان غير نهائي!"
  },
  {
    "id": "stat_ch1_db_easy_23",
    "titleEn": "Angle between Resultant Reaction and Friction",
    "titleAr": "الزاوية بين رد الفعل المحصل وقوة الاحتكاك النهائي",
    "difficulty": "easy",
    "questionEn": "If the angle between the resultant reaction $R'$ and the limiting friction force $F_s$ is $60^\\circ$, find the angle of friction $\\lambda$.",
    "questionAr": "إذا كان قياس الزاوية بين رد الفعل المحصل $R'$ وقوة الاحتكاك السكوني النهائي $F_s$ يساوي $60^\\circ$، فإن زاوية الاحتكاك $\\lambda$ تساوي:",
    "optionsEn": [
      "$30^\\circ$",
      "$60^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "$30^\\circ$",
      "$60^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$"
    ],
    "correctAnswer": "$30^\\circ$",
    "correctIndex": 0,
    "hintEn": "The normal reaction and friction force are perpendicular ($90^\\circ$), so $\\lambda + 60^\\circ = 90^\\circ$.",
    "hintAr": "رد الفعل العمودي وقوة الاحتكاك متعامدان، إذن $\\lambda + 60^\\circ = 90^\\circ$.",
    "stepByStepSolutionEn": [
      "1. The angle between normal reaction $R$ and friction force $F_s$ is always $90^\\circ$.",
      "2. By definition, $\\lambda$ is the angle between $R'$ and $R$.",
      "3. Therefore, $\\lambda + 60^\\circ = 90^\\circ \\implies \\lambda = 90^\\circ - 60^\\circ = 30^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. الزاوية بين العمودي $R$ والاحتكاك $F$ هي $90^\\circ$ دائماً.",
      "٢. زاوية الاحتكاك $\\lambda$ هي الزاوية بين المحصل $R'$ والعمودي $R$.",
      "٣. إذن $\\lambda = 90^\\circ - 60^\\circ = 30^\\circ$."
    ],
    "teacherTipEn": "Watch the definition carefully: $\\lambda$ is measured with the NORMAL, not with the friction force!",
    "teacherTipAr": "انتبه لتعريف زاوية الاحتكاك: هي الزاوية مع العمودي وليس مع قوة الاحتكاك!"
  },
  {
    "id": "stat_ch1_db_easy_24",
    "titleEn": "Resultant Reaction for 45 Degree Friction Angle",
    "titleAr": "رد الفعل المحصل عند زاوية احتكاك 45 درجة",
    "difficulty": "easy",
    "questionEn": "If the angle of friction is $\\lambda = 45^\\circ$ and the normal reaction is $R = 10\\sqrt{2}\\text{ N}$, find the resultant reaction $R'$ at limiting equilibrium.",
    "questionAr": "إذا كانت زاوية الاحتكاك $\\lambda = 45^\\circ$ ورد الفعل العمودي $R = 10\\sqrt{2}\\text{ نيوتن}$، فما مقدار رد الفعل المحصل $R'$ عند الاتزان النهائي؟",
    "optionsEn": [
      "$20\\text{ N}$",
      "$10\\text{ N}$",
      "$10\\sqrt{2}\\text{ N}$",
      "$40\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$",
      "$10\\sqrt{2}\\text{ نيوتن}$",
      "$40\\text{ نيوتن}$"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$R' = R\\sec\\lambda = R\\sec(45^\\circ) = R\\sqrt{2}$.",
    "hintAr": "$R' = R\\sec\\lambda = R\\sec(45^\\circ) = R\\sqrt{2}$.",
    "stepByStepSolutionEn": [
      "1. Formula for resultant reaction at limiting equilibrium: $R' = R\\sec\\lambda$.",
      "2. At $\\lambda = 45^\\circ$, $\\sec(45^\\circ) = \\sqrt{2}$.",
      "3. $R' = (10\\sqrt{2})(\\sqrt{2}) = 10(2) = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون رد الفعل المحصل: $R' = R\\sec\\lambda$.",
      "٢. عند $\\lambda = 45^\\circ$ تكون $\\sec 45^\\circ = \\sqrt{2}$.",
      "٣. $R' = 10\\sqrt{2} \\times \\sqrt{2} = 20\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Simple mental formula: at $\\lambda = 45^\\circ$, $R' = \\sqrt{2} R$.",
    "teacherTipAr": "قاعدة ذهبية: عندما $\\lambda = 45^\\circ$ يكون $R' = \\sqrt{2} R$ دائماً."
  },
  {
    "id": "stat_ch1_db_easy_25",
    "titleEn": "Block Pressed against Rough Vertical Wall",
    "titleAr": "جسم مضغوط على حائط رأسي خشن",
    "difficulty": "easy",
    "questionEn": "A body of weight $W$ is held against a rough vertical wall by a horizontal pushing force $P$. If the body is on the verge of sliding down, then:",
    "questionAr": "جسم وزنه $W$ يستند على حائط رأسي خشن بتأثير قوة أفقية $P$. إذا كان الجسم على وشك الانزلاق لأسفل، فإن:",
    "optionsEn": [
      "$W = \\mu_s P$",
      "$P = \\mu_s W$",
      "$W = P$",
      "$W = P\\sin\\lambda$"
    ],
    "optionsAr": [
      "$W = \\mu_s P$",
      "$P = \\mu_s W$",
      "$W = P$",
      "$W = P\\sin\\lambda$"
    ],
    "correctAnswer": "$W = \\mu_s P$",
    "correctIndex": 0,
    "hintEn": "Normal reaction is $R = P$, and friction balances weight: $F_s = W = \\mu_s R = \\mu_s P$.",
    "hintAr": "رد الفعل العمودي من الحائط هو $R = P$، وقوة الاحتكاك لأعلى توازن الوزن: $F_s = W = \\mu_s P$.",
    "stepByStepSolutionEn": [
      "1. Horizontal equilibrium: normal reaction from wall equals pushing force: $R = P$.",
      "2. Vertical equilibrium: friction acts upward to oppose sliding down: $F_s = W$.",
      "3. At limiting equilibrium, $F_s = \\mu_s R = \\mu_s P$.",
      "4. Equating gives $W = \\mu_s P$."
    ],
    "stepByStepSolutionAr": [
      "١. الاتزان الأفقي: رد فعل الحائط يساوي قوة الضغط $R = P$.",
      "٢. الاتزان الرأسي: قوة الاحتكاك لأعلى توازن الوزن $F_s = W$.",
      "٣. بما أن الاحتكاك نهائي: $F_s = \\mu_s R = \\mu_s P$.",
      "٤. إذن $W = \\mu_s P$."
    ],
    "teacherTipEn": "On a vertical wall, the normal reaction is provided by the horizontal force, not the weight!",
    "teacherTipAr": "على الحائط الرأسي، رد الفعل العمودي مصدره القوة الأفقية وليس وزن الجسم!"
  },
  {
    "id": "stat_ch1_db_easy_26",
    "titleEn": "Horizontal Force to Support Block on Vertical Wall",
    "titleAr": "القوة الأفقية لحفظ توازن جسم على حائط رأسي",
    "difficulty": "easy",
    "questionEn": "If $\\mu_s = 0.4$, what horizontal force $P$ is needed to hold a block of weight $W = 20\\text{ N}$ against a rough vertical wall from slipping down?",
    "questionAr": "إذا كان $\\mu_s = 0.4$، فما مقدار القوة الأفقية $P$ اللازمة لحفظ توازن جسم وزنه $20\\text{ نيوتن}$ على حائط رأسي خشن من الانزلاق؟",
    "optionsEn": [
      "$50\\text{ N}$",
      "$8\\text{ N}$",
      "$20\\text{ N}$",
      "$25\\text{ N}$"
    ],
    "optionsAr": [
      "$50\\text{ نيوتن}$",
      "$8\\text{ نيوتن}$",
      "$20\\text{ نيوتن}$",
      "$25\\text{ نيوتن}$"
    ],
    "correctAnswer": "$50\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$W = \\mu_s P \\implies P = W / \\mu_s$.",
    "hintAr": "$W = \\mu_s P \\implies P = W / \\mu_s$.",
    "stepByStepSolutionEn": [
      "1. Friction must balance the downward weight: $F_s = W = 20\\text{ N}$.",
      "2. Limiting friction condition: $F_s = \\mu_s R = \\mu_s P$.",
      "3. $20 = 0.4 P \\implies P = \\frac{20}{0.4} = 50\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. قوة الاحتكاك المطلوبة توازن الوزن: $F_s = 20\\text{ نيوتن}$.",
      "٢. $F_s = \\mu_s P \\implies 20 = 0.4 P$.",
      "٣. إذن $P = \\frac{20}{0.4} = 50\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice that the required horizontal pushing force is larger than the weight itself when $\\mu < 1$.",
    "teacherTipAr": "لاحظ أن قوة الضغط الأفقية أكبر من وزن الجسم لأن معامل الاحتكاك أقل من الواحد الصحيح."
  },
  {
    "id": "stat_ch1_db_easy_27",
    "titleEn": "Angle of Resultant Reaction when No External Force Acts",
    "titleAr": "زاوية رد الفعل المحصل عند انعدام القوة المؤثرة",
    "difficulty": "easy",
    "questionEn": "When no horizontal external force acts on a body resting on a rough horizontal plane, what is the angle between the resultant reaction $R'$ and the normal reaction $R$?",
    "questionAr": "عندما لا تؤثر أي قوة أفقية على جسم مستقر على مستوى أفقي خشن، فما قياس الزاوية بين رد الفعل المحصل $R'$ ورد الفعل العمودي $R$؟",
    "optionsEn": [
      "$0^\\circ$",
      "$\\lambda$",
      "$90^\\circ$",
      "$45^\\circ$"
    ],
    "optionsAr": [
      "$0^\\circ$",
      "$\\lambda$",
      "$90^\\circ$",
      "$45^\\circ$"
    ],
    "correctAnswer": "$0^\\circ$",
    "correctIndex": 0,
    "hintEn": "Without an applied force, friction $F = 0$, so $R' = R$ along the normal.",
    "hintAr": "عند انعدام القوة المؤثرة، ينعدم الاحتكاك $F = 0$ فيتطابق رد الفعل المحصل مع العمودي.",
    "stepByStepSolutionEn": [
      "1. When no external force tends to move the body, static friction is $F = 0$.",
      "2. Resultant reaction: $R' = \\sqrt{R^2 + F^2} = \\sqrt{R^2 + 0} = R$.",
      "3. The inclination angle satisfies $\\tan\\theta = F/R = 0/R = 0 \\implies \\theta = 0^\\circ$.",
      "4. Thus $R'$ is coincident with $R$, making an angle of $0^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. عند عدم وجود قوة موازية، قوة الاحتكاك $F = 0$.",
      "٢. رد الفعل المحصل: $R' = \\sqrt{R^2 + 0} = R$.",
      "٣. $\\tan\\theta = F/R = 0 \\implies \\theta = 0^\\circ$.",
      "٤. إذن رد الفعل المحصل ينطبق تماماً على رد الفعل العمودي بزاوية $0^\\circ$."
    ],
    "teacherTipEn": "Resultant reaction coincides with normal reaction until external forces induce friction.",
    "teacherTipAr": "ينطبق رد الفعل المحصل على العمودي تماماً ما لم توجد قوة أفقية تحفز ظهور الاحتكاك."
  },
  {
    "id": "stat_ch1_db_easy_28",
    "titleEn": "Independence of Friction on Area of Contact",
    "titleAr": "عدم اعتماد معامل الاحتكاك على مساحة التلامس",
    "difficulty": "easy",
    "questionEn": "For two given contact surfaces in Coulomb friction, does the coefficient of static friction $\\mu_s$ depend on the area of contact?",
    "questionAr": "لأي سطحي تلامس معينين في قانون كولوم للاحتكاك، هل يعتمد معامل الاحتكاك السكوني $\\mu_s$ على مساحة سطحي التلامس؟",
    "optionsEn": [
      "No, it is independent of the contact area",
      "Yes, it is directly proportional to the area",
      "Yes, it is inversely proportional to the area",
      "Only if the normal reaction is small"
    ],
    "optionsAr": [
      "لا، فهو مستقل تماماً عن مساحة التلامس",
      "نعم، يتناسب طردياً مع المساحة",
      "نعم، يتناسب عكسياً مع المساحة",
      "فقط إذا كان رد الفعل صغيراً"
    ],
    "correctAnswer": "No, it is independent of the contact area",
    "correctIndex": 0,
    "hintEn": "Amontons-Coulomb laws of friction: friction depends only on nature of materials and normal force, not area.",
    "hintAr": "قوانين أمونتون وكولوم: الاحتكاك يعتمد على طبيعة المادتين والضغط العمودي فقط، ولا يعتمد على مساحة السطح.",
    "stepByStepSolutionEn": [
      "1. By Coulomb's empirical laws of dry friction, $\\mu_s$ depends only on the nature and roughness of the contacting materials.",
      "2. It is independent of the apparent macroscopic area of contact."
    ],
    "stepByStepSolutionAr": [
      "١. وفق قوانين كولوم للاحتكاك الجاف، يعتمد المعامل فقط على طبيعة ونوع مادتي التلامس.",
      "٢. لا يتأثر المعامل بالمساحة الظاهرية للتلامس."
    ],
    "teacherTipEn": "A classic theoretical question from the Egyptian Ministry textbooks.",
    "teacherTipAr": "سؤال نظري مشهور في كتاب الوزارة يختبر المفاهيم الأساسية."
  },
  {
    "id": "stat_ch1_db_easy_29",
    "titleEn": "State of Equilibrium for Inclined Pull",
    "titleAr": "تحديد حالة اتزان جسم تحت تأثير شد مائل",
    "difficulty": "easy",
    "questionEn": "A body of weight $W = 60\\text{ N}$ on a rough horizontal plane ($\\mu_s = 0.25$) is pulled by $P = 20\\text{ N}$ inclined at $30^\\circ$ above the horizontal. Is the body in equilibrium?",
    "questionAr": "جسم وزنه $W = 60\\text{ نيوتن}$ على مستوى أفقي خشن ($\\mu_s = 0.25$) أثرت عليه قوة شد $P = 20\\text{ نيوتن}$ تميل بزاوية $30^\\circ$ لأعلى. هل يظل الجسم متزناً؟",
    "optionsEn": [
      "No, because the pulling component exceeds limiting friction",
      "Yes, in limiting equilibrium",
      "Yes, in non-limiting equilibrium",
      "The body lifts off the plane"
    ],
    "optionsAr": [
      "لا، لأن مركبة الشد تتجاوز قوة الاحتكاك النهائي",
      "نعم، في اتزان نهائي",
      "نعم، في اتزان غير نهائي",
      "يرتفع الجسم عن المستوى"
    ],
    "correctAnswer": "No, because the pulling component exceeds limiting friction",
    "correctIndex": 0,
    "hintEn": "Calculate $P_x = 20\\cos 30^\\circ = 10\\sqrt{3} \\approx 17.32\\text{ N}$ and compare to $\\mu_s R = 0.25(60 - 20\\sin 30^\\circ) = 12.5\\text{ N}$.",
    "hintAr": "احسب المركبة الأفقية وقارنها بالاحتكاك النهائي $\\mu_s R$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = W - P\\sin(30^\\circ) = 60 - 20(0.5) = 50\\text{ N}$.",
      "2. Limiting friction: $F_s = \\mu_s R = 0.25(50) = 12.5\\text{ N}$.",
      "3. Horizontal pulling component: $P\\cos(30^\\circ) = 20\\left(\\frac{\\sqrt{3}}{2}\\right) = 10\\sqrt{3} \\approx 17.32\\text{ N}$.",
      "4. Since $P_x = 17.32 > F_s = 12.5$, the friction cannot prevent motion and the body moves."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 60 - 10 = 50\\text{ نيوتن}$.",
      "٢. أقصى قوة احتكاك سكوني: $F_s = 0.25 \\times 50 = 12.5\\text{ نيوتن}$.",
      "٣. مركبة الشد الأفقية: $20\\cos 30^\\circ = 10\\sqrt{3} \\approx 17.32\\text{ نيوتن}$.",
      "٤. بما أن المركبة الأفقية أكبر من $F_s$، فإن الجسم يتحرك ولا يمكنه البقاء متزناً."
    ],
    "teacherTipEn": "Always compare the disturbing force component with the limiting friction capacity $\\mu_s R$.",
    "teacherTipAr": "قارن دائماً مركبة القوة المسببة للحركة بأقصى طاقة احتكاك سكوني يتحملها السطح."
  },
  {
    "id": "stat_ch1_db_easy_30",
    "titleEn": "Direction of Friction Force",
    "titleAr": "اتجاه قوة الاحتكاك",
    "difficulty": "easy",
    "questionEn": "The direction of the friction force acting on a body on a rough plane is ALWAYS:",
    "questionAr": "اتجاه قوة الاحتكاك المؤثرة على جسم على مستوى خشن يكون دائماً:",
    "optionsEn": [
      "Opposite to the direction of impending relative motion",
      "In the same direction as the applied force",
      "Vertically upward",
      "Along the normal reaction"
    ],
    "optionsAr": [
      "عكس اتجاه الحركة النسبية الوشيكة",
      "في نفس اتجاه القوة المؤثرة",
      "رأسياً لأعلى",
      "في اتجاه رد الفعل العمودي"
    ],
    "correctAnswer": "Opposite to the direction of impending relative motion",
    "correctIndex": 0,
    "hintEn": "Friction is a resistive force that opposes motion or the tendency of motion.",
    "hintAr": "الاحتكاك قوة ممانعة تعاكس دائماً اتجاه الحركة أو اتجاه وشك الحركة.",
    "stepByStepSolutionEn": [
      "1. Friction arises from microscopic surface interactions resisting relative displacement.",
      "2. Its direction is always tangent to the contact plane and opposite to the impending direction of motion."
    ],
    "stepByStepSolutionAr": [
      "١. ينشأ الاحتكاك لممانعة الانزلاق النسبي بين السطحين.",
      "٢. اتجاهه دائماً مماس لمستوى التلامس وعكس اتجاه وشك الحركة."
    ],
    "teacherTipEn": "Fundamental definition: friction resists motion, so it points opposite to impending displacement.",
    "teacherTipAr": "مبدأ أساسي: الاحتكاك قوة مقاومة تتجه دائماً عكس اتجاه وشك الانزلاق."
  },
  {
    "id": "stat_ch1_db_easy_31",
    "titleEn": "Condition for Limiting Equilibrium",
    "titleAr": "شرط وصول الاتزان لحالة وشك الحركة",
    "difficulty": "easy",
    "questionEn": "If $\\theta$ is the angle between the normal reaction $R$ and the resultant reaction $R'$, equilibrium is limiting if and only if:",
    "questionAr": "إذا كانت $\\theta$ هي الزاوية بين رد الفعل العمودي $R$ ورد الفعل المحصل $R'$، فإن الاتزان يكون نهائياً (على وشك الحركة) إذا وفقط إذا كان:",
    "optionsEn": [
      "$\\theta = \\lambda$",
      "$\\theta < \\lambda$",
      "$\\theta > \\lambda$",
      "$\\theta = 0$"
    ],
    "optionsAr": [
      "$\\theta = \\lambda$",
      "$\\theta < \\lambda$",
      "$\\theta > \\lambda$",
      "$\\theta = 0$"
    ],
    "correctAnswer": "$\\theta = \\lambda$",
    "correctIndex": 0,
    "hintEn": "Limiting equilibrium means friction has reached maximum, which occurs when $\\theta$ reaches $\\lambda$.",
    "hintAr": "الاتزان النهائي يتحقق عندما تبلغ الزاوية أقصى اتساع لها مساوية لزاوية الاحتكاك $\\lambda$.",
    "stepByStepSolutionEn": [
      "1. In non-limiting equilibrium, $\\theta < \\lambda$.",
      "2. At the exact verge of motion (limiting equilibrium), $\\theta = \\lambda$.",
      "3. If $\\theta > \\lambda$, equilibrium is broken and motion occurs."
    ],
    "stepByStepSolutionAr": [
      "١. في الاتزان غير النهائي: $\\theta < \\lambda$.",
      "٢. عند وشك الحركة تماماً: $\\theta = \\lambda$.",
      "٣. إذا تجاوزت $\\lambda$ ينعدم الاتزان ويتحرك الجسم."
    ],
    "teacherTipEn": "$\\theta = \\lambda$ is the definitive geometric criterion for limiting equilibrium.",
    "teacherTipAr": "$\\theta = \\lambda$ هو المعيار الهندسي الدقيق لحالة وشك الحركة."
  },
  {
    "id": "stat_ch1_db_easy_32",
    "titleEn": "Finding mu from Inclined Pull",
    "titleAr": "تعيين معامل الاحتكاك من قوة شد مائلة بزاوية 45",
    "difficulty": "easy",
    "questionEn": "A body of weight $W = 24\\text{ N}$ on a rough horizontal plane is on the verge of motion under a pull $P = 12\\sqrt{2}\\text{ N}$ inclined at $45^\\circ$ above the horizontal. Find $\\mu_s$.",
    "questionAr": "جسم وزنه $W = 24\\text{ نيوتن}$ موضوع على مستوى أفقي خشن، أصبح على وشك الحركة تحت تأثير قوة شد $P = 12\\sqrt{2}\\text{ نيوتن}$ تميل بزاوية $45^\\circ$ لأعلى. أوجد $\\mu_s$.",
    "optionsEn": [
      "$1$",
      "$0.5$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$0.75$"
    ],
    "optionsAr": [
      "$1$",
      "$0.5$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$0.75$"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "$R = 24 - 12\\sqrt{2}\\sin 45^\\circ = 12\\text{ N}$, $F_s = 12\\sqrt{2}\\cos 45^\\circ = 12\\text{ N}$.",
    "hintAr": "احسب كلاً من $R$ و $F_s$ بعد تحليل القوة.",
    "stepByStepSolutionEn": [
      "1. Vertical resolution: $R = W - P\\sin(45^\\circ) = 24 - 12\\sqrt{2}\\left(\\frac{1}{\\sqrt{2}}\\right) = 24 - 12 = 12\\text{ N}$.",
      "2. Horizontal resolution: $F_s = P\\cos(45^\\circ) = 12\\sqrt{2}\\left(\\frac{1}{\\sqrt{2}}\\right) = 12\\text{ N}$.",
      "3. Coefficient: $\\mu_s = \\frac{F_s}{R} = \\frac{12}{12} = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. $R = 24 - 12 = 12\\text{ نيوتن}$.",
      "٢. $F_s = 12\\text{ نيوتن}$.",
      "٣. معامل الاحتكاك $\\mu_s = \\frac{F_s}{R} = \\frac{12}{12} = 1$."
    ],
    "teacherTipEn": "When $F_s = R$, the coefficient of friction is exactly $1$ and the friction angle is $45^\\circ$.",
    "teacherTipAr": "عندما يتساوى الاحتكاك مع رد الفعل العمودي، يكون معامل الاحتكاك مساوياً 1 وزاوية الاحتكاك $45^\\circ$."
  },
  {
    "id": "stat_ch1_db_easy_33",
    "titleEn": "Direction of Friction on Inclined Plane",
    "titleAr": "اتجاه الاحتكاك على مستوى مائل مستقر",
    "difficulty": "easy",
    "questionEn": "A block of weight $W$ rests on an inclined plane of inclination $\\theta = 30^\\circ$. If the angle of friction is $\\lambda = 45^\\circ$, in which direction does the friction force act when no external force is applied?",
    "questionAr": "جسم وزنه $W$ موضوع على مستوى مائل يميل على الأفقي بزاوية $\\theta = 30^\\circ$. إذا كانت زاوية الاحتكاك $\\lambda = 45^\\circ$، في أي اتجاه تؤثر قوة الاحتكاك عند عدم وجود أي قوة خارجية؟",
    "optionsEn": [
      "Up the plane along the line of greatest slope",
      "Down the plane along the line of greatest slope",
      "Perpendicular to the plane",
      "The friction force is zero"
    ],
    "optionsAr": [
      "لأعلى المستوى في اتجاه خط أكبر ميل",
      "لأسفل المستوى في اتجاه خط أكبر ميل",
      "عمودياً على المستوى",
      "قوة الاحتكاك تساوي صفراً"
    ],
    "correctAnswer": "Up the plane along the line of greatest slope",
    "correctIndex": 0,
    "hintEn": "Gravity pulls down the plane ($W\\sin\\theta$), so friction opposes by pointing up the plane.",
    "hintAr": "مركبة الوزن تميل لتحريك الجسم لأسفل المستوى، فالاحتكاك يقاومها متجهاً لأعلى المستوى.",
    "stepByStepSolutionEn": [
      "1. The component of weight along the plane is $W\\sin(30^\\circ)$ directed downwards.",
      "2. Since $\\theta = 30^\\circ < \\lambda = 45^\\circ$, the body is in equilibrium.",
      "3. The friction force opposes the tendency of gravity to pull the body down, so it acts UP the plane."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة الوزن المؤثرة لأسفل المستوى هي $W\\sin 30^\\circ$.",
      "٢. بما أن $\\theta < \\lambda$ فإن الجسم متزن.",
      "٣. قوة الاحتكاك تعاكس ميل الانزلاق لأسفل، فتتجه لأعلى المستوى."
    ],
    "teacherTipEn": "Friction acts up the incline to balance the downward gravity component $W\\sin\\theta$.",
    "teacherTipAr": "تعمل قوة الاحتكاك لأعلى المستوى لمعادلة مركبة الوزن $W\\sin\\theta$ الساحبة لأسفل."
  },
  {
    "id": "stat_ch1_db_easy_34",
    "titleEn": "Friction Magnitude when theta is less than lambda",
    "titleAr": "مقدار قوة الاحتكاك عندما تكون زاوية الميل أقل من زاوية الاحتكاك",
    "difficulty": "easy",
    "questionEn": "A body of weight $W$ rests on an inclined plane of inclination $\\theta$. If $\\theta < \\lambda$ and no external force acts on the body, the magnitude of the friction force $F$ is:",
    "questionAr": "جسم وزنه $W$ موضوع على مستوى مائل بزاوية $\\theta$. إذا كان $\\theta < \\lambda$ ولا تؤثر عليه أي قوى خارجية، فإن مقدار قوة الاحتكاك $F$ يساوي:",
    "optionsEn": [
      "$W\\sin\\theta$",
      "$\\mu_s W\\cos\\theta$",
      "$W\\cos\\theta$",
      "$W\\tan\\theta$"
    ],
    "optionsAr": [
      "$W\\sin\\theta$",
      "$\\mu_s W\\cos\\theta$",
      "$W\\cos\\theta$",
      "$W\\tan\\theta$"
    ],
    "correctAnswer": "$W\\sin\\theta$",
    "correctIndex": 0,
    "hintEn": "The body is in non-limiting equilibrium, so friction exactly balances the component of weight along the incline.",
    "hintAr": "الجسم في اتزان عادي، فقوة الاحتكاك توازن مركبة الوزن بالضبط: $F = W\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. Equilibrium condition along the plane: $\\sum F_{\\parallel} = 0$.",
      "2. $F - W\\sin\\theta = 0 \\implies F = W\\sin\\theta$.",
      "3. Since $\\theta < \\lambda$, $W\\sin\\theta < \\mu_s W\\cos\\theta$, so friction has NOT reached limiting value."
    ],
    "stepByStepSolutionAr": [
      "١. شرط الاتزان في اتجاه المستوى: $F - W\\sin\\theta = 0$.",
      "٢. إذن $F = W\\sin\\theta$.",
      "٣. بما أن $\\theta < \\lambda$، فالاحتكاك غير نهائي ولا يساوي $\\mu_s R$."
    ],
    "teacherTipEn": "Common exam trap: do NOT answer $\\mu_s R$ when equilibrium is non-limiting!",
    "teacherTipAr": "فخ امتحاني متكرر: لا تختر $\\mu_s R$ عندما يكون الجسم في اتزان مستقر غير نهائي!"
  },
  {
    "id": "stat_ch1_db_easy_35",
    "titleEn": "Resultant Reaction under Gravity Alone at Limiting Angle",
    "titleAr": "رد الفعل المحصل تحت تأثير الجاذبية وحدها عند زاوية وشك الحركة",
    "difficulty": "easy",
    "questionEn": "When a body of weight $W$ is placed on a rough inclined plane of inclination $\\theta = \\lambda$ and is on the verge of sliding down under gravity alone, the resultant reaction $R'$ is:",
    "questionAr": "عندما يوضع جسم وزنه $W$ على مستوى مائل خشن يميل بزاوية $\\theta = \\lambda$ ويكون على وشك الانزلاق تحت تأثير وزنه فقط، فإن رد الفعل المحصل $R'$:",
    "optionsEn": [
      "Equals $W$ in magnitude and is directed vertically upward",
      "Equals $W\\cos\\lambda$",
      "Equals $W\\sin\\lambda$",
      "Acts along the plane"
    ],
    "optionsAr": [
      "يساوي $W$ مقداراً ويتجه رأسياً لأعلى",
      "يساوي $W\\cos\\lambda$",
      "يساوي $W\\sin\\lambda$",
      "يؤثر في اتجاه المستوى"
    ],
    "correctAnswer": "Equals $W$ in magnitude and is directed vertically upward",
    "correctIndex": 0,
    "hintEn": "Only two forces act on the body: weight $W$ vertically downward, and resultant reaction $R'$.",
    "hintAr": "لا يؤثر على الجسم سوى قوتين فقط: وزنه ورد الفعل المحصل من المستوى، فيتزنان مباشرة.",
    "stepByStepSolutionEn": [
      "1. The only forces acting on the body are its weight $\\vec{W}$ and the reaction of the plane $\\vec{R'}$.",
      "2. For equilibrium under two forces, they must be equal in magnitude, opposite in direction, and collinear.",
      "3. Therefore, $R' = W$ and is directed vertically upward."
    ],
    "stepByStepSolutionAr": [
      "١. القوتان الوحيدتان المؤثرتان هما الوزن $\\vec{W}$ ورد الفعل المحصل $\\vec{R'}$.",
      "٢. لكي يتزن الجسم تحت تأثير قوتين، يجب أن تتساويا مقداراً وتتضادا اتجاهاً.",
      "٣. إذن $R' = W$ في المقدار واتجاهه رأسي لأعلى تماماً."
    ],
    "teacherTipEn": "Two-force equilibrium: $\\vec{R'} + \\vec{W} = \\vec{0} \\implies \\vec{R'} = -\\vec{W}$.",
    "teacherTipAr": "اتزان قوتين: رد الفعل المحصل يلغي الوزن رأسياً لأعلى."
  },
  {
    "id": "stat_ch1_db_easy_36",
    "titleEn": "Non-limiting Friction Calculation on Incline",
    "titleAr": "حساب الاحتكاك غير النهائي على مستوى مائل",
    "difficulty": "easy",
    "questionEn": "A block of weight $W = 10\\text{ N}$ rests on a rough plane inclined at $30^\\circ$ with $\\mu_s = \\frac{\\sqrt{3}}{2}$. Find the magnitude of friction force $F$ with no external force applied.",
    "questionAr": "جسم وزنه $W = 10\\text{ نيوتن}$ مستقر على مستوى مائل بزاوية $30^\\circ$ ومعامل احتكاكه $\\mu_s = \\frac{\\sqrt{3}}{2}$. ما هو مقدار قوة الاحتكاك $F$ عند عدم وجود قوة خارجية؟",
    "optionsEn": [
      "$5\\text{ N}$",
      "$7.5\\text{ N}$",
      "$5\\sqrt{3}\\text{ N}$",
      "$10\\text{ N}$"
    ],
    "optionsAr": [
      "$5\\text{ نيوتن}$",
      "$7.5\\text{ نيوتن}$",
      "$5\\sqrt{3}\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$"
    ],
    "correctAnswer": "$5\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Check $\\tan(30^\\circ) = 1/\\sqrt{3} \\approx 0.577 < \\mu_s \\approx 0.866$. The body is in non-limiting equilibrium, so $F = W\\sin(30^\\circ)$.",
    "hintAr": "بما أن $\\tan 30^\\circ < \\mu_s$ فالجسم مستقر، والاحتكاك يساوي مركبة الوزن $W\\sin 30^\\circ$.",
    "stepByStepSolutionEn": [
      "1. $\\tan(30^\\circ) = \\frac{1}{\\sqrt{3}} \\approx 0.577$.",
      "2. Since $\\tan(30^\\circ) < \\mu_s = \\frac{\\sqrt{3}}{2} \\approx 0.866$, the body does not slip.",
      "3. Friction force balances weight component: $F = W\\sin(30^\\circ) = 10(0.5) = 5\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\tan 30^\\circ = 1/\\sqrt{3} < \\sqrt{3}/2 = \\mu_s$، إذن الجسم مستقر تماماً.",
      "٢. قوة الاحتكاك تعادل مركبة الوزن: $F = 10\\sin 30^\\circ = 5\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Limiting friction $\\mu_s R = \\frac{\\sqrt{3}}{2}(5\\sqrt{3}) = 7.5\\text{ N}$, but actual friction is only $5\\text{ N}$.",
    "teacherTipAr": "أقصى احتكاك ممكن هو 7.5 نيوتن، لكن المتولد فعلياً لمنع الانزلاق هو 5 نيوتن فقط."
  },
  {
    "id": "stat_ch1_db_easy_37",
    "titleEn": "Minimum Force for Connected Bodies on Horizontal Plane",
    "titleAr": "أقل قوة لتحريك جسمين مربوطين على مستوى أفقي",
    "difficulty": "easy",
    "questionEn": "Two bodies of weights $W_1$ and $W_2$ connected by a light taut string rest on a rough horizontal plane with friction coefficients $\\mu_1$ and $\\mu_2$. The minimum horizontal force applied to $W_1$ to move the system is:",
    "questionAr": "جسمان وزناهما $W_1$ و $W_2$ متصلان بخيط خفيف مشدود وموضوعان على مستوى أفقي خشن معاملا احتكاكهما $\\mu_1$ و $\\mu_2$. أقل قوة أفقية تؤثر على $W_1$ لتحريك المجموعة هي:",
    "optionsEn": [
      "$\\mu_1 W_1 + \\mu_2 W_2$",
      "(\\mu_1 + \\mu_2)(W_1 + W_2)",
      "$\\mu_1 W_1$",
      "$\\mu_2(W_1 + W_2)$"
    ],
    "optionsAr": [
      "$\\mu_1 W_1 + \\mu_2 W_2$",
      "(\\mu_1 + \\mu_2)(W_1 + W_2)",
      "$\\mu_1 W_1$",
      "$\\mu_2(W_1 + W_2)$"
    ],
    "correctAnswer": "$\\mu_1 W_1 + \\mu_2 W_2$",
    "correctIndex": 0,
    "hintEn": "To move both bodies, the force must overcome the sum of both limiting friction forces.",
    "hintAr": "لتحريك المجموعة، يجب أن تتغلب القوة على مجموع قوتي الاحتكاك النهائي للجسمين.",
    "stepByStepSolutionEn": [
      "1. The first body experiences limiting friction $F_{s1} = \\mu_1 W_1$.",
      "2. The second body experiences limiting friction $F_{s2} = \\mu_2 W_2$.",
      "3. For impending motion of the entire system: $P = F_{s1} + F_{s2} = \\mu_1 W_1 + \\mu_2 W_2$."
    ],
    "stepByStepSolutionAr": [
      "١. الاحتكاك النهائي للجسم الأول: $\\mu_1 W_1$.",
      "٢. الاحتكاك النهائي للجسم الثاني: $\\mu_2 W_2$.",
      "٣. القوة اللازمة لتحريك المجموعة ككتلة واحدة: $P = \\mu_1 W_1 + \\mu_2 W_2$."
    ],
    "teacherTipEn": "Treating the connected bodies as a single system eliminates internal string tension.",
    "teacherTipAr": "اعتبار الجسمين كنظام واحد يلغي قوة الشد الداخلية في الخيط."
  },
  {
    "id": "stat_ch1_db_easy_38",
    "titleEn": "Ratio of Limiting Friction to Normal Reaction",
    "titleAr": "النسبة بين الاحتكاك النهائي ورد الفعل العمودي",
    "difficulty": "easy",
    "questionEn": "The ratio of the limiting static friction force $F_s$ to the normal reaction $R$ is equal to:",
    "questionAr": "النسبة بين قوة الاحتكاك السكوني النهائي $F_s$ ورد الفعل العمودي $R$ تساوي:",
    "optionsEn": [
      "$\\mu_s = \\tan\\lambda$",
      "$\\sin\\lambda$",
      "$\\cos\\lambda$",
      "$\\sec\\lambda$"
    ],
    "optionsAr": [
      "$\\mu_s = \\tan\\lambda$",
      "$\\sin\\lambda$",
      "$\\cos\\lambda$",
      "$\\sec\\lambda$"
    ],
    "correctAnswer": "$\\mu_s = \\tan\\lambda$",
    "correctIndex": 0,
    "hintEn": "$F_s = \\mu_s R \\implies F_s / R = \\mu_s = \\tan\\lambda$.",
    "hintAr": "من تعريف معامل الاحتكاك: $F_s / R = \\mu_s = \\tan\\lambda$.",
    "stepByStepSolutionEn": [
      "1. By definition of the coefficient of static friction, $F_s = \\mu_s R$.",
      "2. Therefore, $\\frac{F_s}{R} = \\mu_s$.",
      "3. Since $\\mu_s = \\tan\\lambda$, the ratio is $\\tan\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "١. من تعريف معامل الاحتكاك: $F_s = \\mu_s R$.",
      "٢. إذن $\\frac{F_s}{R} = \\mu_s = \\tan\\lambda$."
    ],
    "teacherTipEn": "This fundamental ratio defines both the coefficient of friction and the tangent of the friction angle.",
    "teacherTipAr": "هذه النسبة الأساسية هي تعريف معامل الاحتكاك وظل زاوية الاحتكاك."
  },
  {
    "id": "stat_ch1_db_easy_39",
    "titleEn": "Possible Static Friction Values",
    "titleAr": "القيم الممكنة لقوة الاحتكاك السكوني",
    "difficulty": "easy",
    "questionEn": "If $\\mu_s = 0.6$ and the normal reaction is $R = 50\\text{ N}$, which of the following could be the magnitude of a static friction force?",
    "questionAr": "إذا كان $\\mu_s = 0.6$ ورد الفعل العمودي $R = 50\\text{ نيوتن}$، فأي مما يلي يمكن أن يمثل مقدار قوة احتكاك سكوني؟",
    "optionsEn": [
      "$18\\text{ N}$",
      "$35\\text{ N}$",
      "$40\\text{ N}$",
      "$50\\text{ N}$"
    ],
    "optionsAr": [
      "$18\\text{ نيوتن}$",
      "$35\\text{ نيوتن}$",
      "$40\\text{ نيوتن}$",
      "$50\\text{ نيوتن}$"
    ],
    "correctAnswer": "$18\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Calculate maximum: $F_s = 0.6(50) = 30\\text{ N}$. Any static friction must be $\\le 30\\text{ N}$.",
    "hintAr": "أقصى احتكاك هو 30 نيوتن، فأي قيمة ممكنة يجب ألا تزيد عن 30 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Maximum static friction: $F_s = \\mu_s R = 0.6 \\times 50 = 30\\text{ N}$.",
      "2. For static equilibrium, $0 \\le F \\le 30\\text{ N}$.",
      "3. Among the choices, only $18\\text{ N}$ is $\\le 30\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. أقصى احتكاك سكوني $F_s = 0.6 \\times 50 = 30\\text{ نيوتن}$.",
      "٢. يجب أن تكون قوة الاحتكاك السكوني $\\le 30\\text{ نيوتن}$.",
      "٣. القيمة الوحيدة المقبولة بين الخيارات هي $18\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Any value strictly greater than $\\mu_s R$ cannot be a static friction force.",
    "teacherTipAr": "أي قيمة تتجاوز $\\mu_s R$ يستحيل أن تكون قوة احتكاك سكوني."
  },
  {
    "id": "stat_ch1_db_easy_40",
    "titleEn": "Friction Force when Tilt Angle Matches Friction Angle",
    "titleAr": "قوة الاحتكاك عندما تميل زاوية السطح بزاوية الاحتكاك",
    "difficulty": "easy",
    "questionEn": "A body of weight $40\\text{ N}$ rests on a rough plane with $\\lambda = 30^\\circ$. When the plane is tilted to $\\theta = 30^\\circ$, what is the magnitude of the friction force?",
    "questionAr": "جسم وزنه $40\\text{ نيوتن}$ موضوع على مستوى خشن زاوية احتكاكه $\\lambda = 30^\\circ$. عندما يميل المستوى بزاوية $\\theta = 30^\\circ$، ما هو مقدار قوة الاحتكاك؟",
    "optionsEn": [
      "$20\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$",
      "$40\\text{ N}$",
      "$10\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\text{ نيوتن}$",
      "$20\\sqrt{3}\\text{ نيوتن}$",
      "$40\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Since $\\theta = \\lambda$, motion is impending and $F = W\\sin(30^\\circ) = 20\\text{ N}$.",
    "hintAr": "بما أن $\\theta = \\lambda$ فالاحتكاك نهائي ويساوي مركبة الوزن $W\\sin 30^\\circ$.",
    "stepByStepSolutionEn": [
      "1. When $\\theta = \\lambda = 30^\\circ$, the body is on the verge of sliding down.",
      "2. Friction balances the weight component: $F_s = W\\sin(30^\\circ) = 40 \\times 0.5 = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. عندما $\\theta = \\lambda$ يكون الجسم على وشك الانزلاق لأسفل.",
      "٢. قوة الاحتكاك توازن مركبة الوزن: $F_s = 40\\sin 30^\\circ = 20\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice that $\\mu_s R = (1/\\sqrt{3})(40\\cos 30^\\circ) = (1/\\sqrt{3})(20\\sqrt{3}) = 20\\text{ N}$, identical to $W\\sin\\theta$.",
    "teacherTipAr": "لاحظ تطابق $\\mu_s R$ مع $W\\sin\\theta$ عند زاوية وشك الحركة."
  },
  {
    "id": "stat_ch1_db_easy_41",
    "titleEn": "Horizontal Equation of Equilibrium for Inclined Pull",
    "titleAr": "معادلة الاتزان الأفقي لقوة شد مائلة",
    "difficulty": "easy",
    "questionEn": "If a force $P$ inclined at angle $\\alpha$ above the horizontal pulls a body of weight $W$ on a rough horizontal plane at impending motion, the horizontal equilibrium equation is:",
    "questionAr": "إذا كانت قوة $P$ تميل بزاوية $\\alpha$ لأعلى على الأفقي وتشد جسماً وزنه $W$ على مستوى أفقي خشن عند وشك الحركة، فإن معادلة الاتزان الأفقي هي:",
    "optionsEn": [
      "$P\\cos\\alpha = \\mu_s(W - P\\sin\\alpha)$",
      "$P\\cos\\alpha = \\mu_s W$",
      "$P\\cos\\alpha = \\mu_s(W + P\\sin\\alpha)$",
      "$P\\sin\\alpha = \\mu_s W$"
    ],
    "optionsAr": [
      "$P\\cos\\alpha = \\mu_s(W - P\\sin\\alpha)$",
      "$P\\cos\\alpha = \\mu_s W$",
      "$P\\cos\\alpha = \\mu_s(W + P\\sin\\alpha)$",
      "$P\\sin\\alpha = \\mu_s W$"
    ],
    "correctAnswer": "$P\\cos\\alpha = \\mu_s(W - P\\sin\\alpha)$",
    "correctIndex": 0,
    "hintEn": "Substitute $R = W - P\\sin\\alpha$ into $P\\cos\\alpha = \\mu_s R$.",
    "hintAr": "عوض عن $R = W - P\\sin\\alpha$ في معادلة الاتزان الأفقي $P\\cos\\alpha = \\mu_s R$.",
    "stepByStepSolutionEn": [
      "1. Vertical resolution: $R = W - P\\sin\\alpha$.",
      "2. Horizontal resolution at limiting equilibrium: $P\\cos\\alpha = F_s = \\mu_s R$.",
      "3. Substitute $R$: $P\\cos\\alpha = \\mu_s(W - P\\sin\\alpha)$."
    ],
    "stepByStepSolutionAr": [
      "١. الاتزان الرأسي: $R = W - P\\sin\\alpha$.",
      "٢. الاتزان الأفقي: $P\\cos\\alpha = \\mu_s R$.",
      "٣. بالتعويض عن $R$: $P\\cos\\alpha = \\mu_s(W - P\\sin\\alpha)$."
    ],
    "teacherTipEn": "This fundamental equation enables solving for $P = \\frac{\\mu_s W}{\\cos\\alpha + \\mu_s\\sin\\alpha}$.",
    "teacherTipAr": "هذه المعادلة الأساسية تمكنك من إيجاد القوة $P$ بدلالة زاوية ميلها."
  },
  {
    "id": "stat_ch1_db_easy_42",
    "titleEn": "Dimension of Friction Coefficient",
    "titleAr": "معادلة أبعاد معامل الاحتكاك",
    "difficulty": "easy",
    "questionEn": "The physical dimension of the coefficient of static friction $\\mu_s$ is:",
    "questionAr": "معادلة الأبعاد لمعامل الاحتكاك السكوني $\\mu_s$ هي:",
    "optionsEn": [
      "Dimensionless (pure number)",
      "$\\text{Newton}$",
      "$\\text{N} \\cdot \\text{m}$",
      "$\\text{m/s}^2$"
    ],
    "optionsAr": [
      "كمية عديمة الأبعاد (نسبة عددية مجردة)",
      "نيوتن",
      "نيوتن · متر",
      "م/ث²"
    ],
    "correctAnswer": "Dimensionless (pure number)",
    "correctIndex": 0,
    "hintEn": "$\\mu_s = F_s / R$ is the ratio of two forces, so its units cancel completely.",
    "hintAr": "معامل الاحتكاك هو نسبة بين قوتين (نيوتن / نيوتن)، فتختصر الوحدات تماماً.",
    "stepByStepSolutionEn": [
      "1. $\\mu_s = \\frac{F_s}{R}$.",
      "2. Both $F_s$ and $R$ are forces measured in Newtons.",
      "3. Ratio of two identical dimensions is dimensionless ($M^0 L^0 T^0$)."
    ],
    "stepByStepSolutionAr": [
      "١. $\\mu_s = \\frac{F_s}{R}$.",
      "٢. كلاهما قوة تقاس بالنيوتن.",
      "٣. النسبة بين كميتين من نفس النوع هي كمية مجردة من الأبعاد."
    ],
    "teacherTipEn": "Pure ratios have no physical units.",
    "teacherTipAr": "النسب الرياضية الخالصة لا تحمل وحدات فيزيائية."
  },
  {
    "id": "stat_ch1_db_easy_43",
    "titleEn": "Friction Angle when Resultant Reaction is Double Normal",
    "titleAr": "زاوية الاحتكاك عندما يكون رد الفعل المحصل ضعف العمودي",
    "difficulty": "easy",
    "questionEn": "If the resultant reaction is twice the normal reaction ($R' = 2R$) at limiting equilibrium, find the angle of friction $\\lambda$.",
    "questionAr": "إذا كان رد الفعل المحصل ضعف رد الفعل العمودي ($R' = 2R$) عند الاتزان النهائي، فما هي زاوية الاحتكاك $\\lambda$؟",
    "optionsEn": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$75^\\circ$"
    ],
    "optionsAr": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$75^\\circ$"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "$R' = R\\sec\\lambda \\implies \\sec\\lambda = 2 \\implies \\cos\\lambda = 1/2$.",
    "hintAr": "$R' = R\\sec\\lambda \\implies \\sec\\lambda = 2 \\implies \\cos\\lambda = 1/2$.",
    "stepByStepSolutionEn": [
      "1. Formula: $R' = R\\sec\\lambda$.",
      "2. Given $R' = 2R$, we have $R\\sec\\lambda = 2R \\implies \\sec\\lambda = 2$.",
      "3. $\\cos\\lambda = \\frac{1}{2} \\implies \\lambda = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. $R' = R\\sec\\lambda$.",
      "٢. $R\\sec\\lambda = 2R \\implies \\sec\\lambda = 2$.",
      "٣. $\\cos\\lambda = 1/2 \\implies \\lambda = 60^\\circ$."
    ],
    "teacherTipEn": "$\\cos(60^\\circ) = 1/2$, so $\\sec(60^\\circ) = 2$.",
    "teacherTipAr": "جيب تمام 60 درجة هو نصف، ومقلوبه القاطع يساوي 2."
  },
  {
    "id": "stat_ch1_db_easy_44",
    "titleEn": "Coefficient when Resultant is Root Two Times Normal",
    "titleAr": "معامل الاحتكاك عندما يكون رد الفعل المحصل جذر 2 في العمودي",
    "difficulty": "easy",
    "questionEn": "If the resultant reaction is $R' = \\sqrt{2}R$ at limiting equilibrium, find the coefficient of static friction $\\mu_s$.",
    "questionAr": "إذا كان رد الفعل المحصل $R' = \\sqrt{2}R$ عند الاتزان النهائي، فما قيمة معامل الاحتكاك السكوني $\\mu_s$؟",
    "optionsEn": [
      "$1$",
      "$\\sqrt{3}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$0.5$"
    ],
    "optionsAr": [
      "$1$",
      "$\\sqrt{3}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$0.5$"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "$(R')^2 = R^2 + F_s^2 \\implies 2R^2 = R^2 + F_s^2 \\implies F_s = R \\implies \\mu_s = 1$.",
    "hintAr": "$(R')^2 = R^2 + F_s^2 \\implies 2R^2 = R^2 + F_s^2 \\implies F_s = R \\implies \\mu_s = 1$.",
    "stepByStepSolutionEn": [
      "1. $(R')^2 = R^2 + F_s^2$.",
      "2. Substitute $R' = \\sqrt{2}R$: $(\\sqrt{2}R)^2 = R^2 + F_s^2 \\implies 2R^2 = R^2 + F_s^2$.",
      "3. $F_s^2 = R^2 \\implies F_s = R$.",
      "4. $\\mu_s = \\frac{F_s}{R} = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. $(R')^2 = R^2 + F_s^2$.",
      "٢. $2R^2 = R^2 + F_s^2 \\implies F_s = R$.",
      "٣. $\\mu_s = F_s / R = 1$."
    ],
    "teacherTipEn": "An essential benchmark: $R' = \\sqrt{2}R \\iff \\lambda = 45^\\circ \\iff \\mu_s = 1$.",
    "teacherTipAr": "علاقة قياسية: رد الفعل المحصل يساوي $\\sqrt{2}R$ إذا وفقط إذا كان $\\mu_s = 1$."
  },
  {
    "id": "stat_ch1_db_easy_45",
    "titleEn": "Angle between Resultant Reaction and Horizontal Pull",
    "titleAr": "الزاوية بين رد الفعل المحصل وقوة الشد الأفقية",
    "difficulty": "easy",
    "questionEn": "A body of weight $W$ on a rough horizontal plane is pulled by a horizontal force $P$ at limiting equilibrium. If the friction angle is $\\lambda$, the angle between the resultant reaction $R'$ and the pulling force $P$ is:",
    "questionAr": "جسم وزنه $W$ موضوع على مستوى أفقي خشن تؤثر عليه قوة أفقية $P$ تجعله على وشك الحركة. إذا كانت زاوية الاحتكاك $\\lambda$، فإن قياس الزاوية بين رد الفعل المحصل $R'$ وقوة الشد $P$ يساوي:",
    "optionsEn": [
      "$90^\\circ + \\lambda$",
      "$180^\\circ - \\lambda$",
      "$90^\\circ - \\lambda$",
      "$\\lambda$"
    ],
    "optionsAr": [
      "$90^\\circ + \\lambda$",
      "$180^\\circ - \\lambda$",
      "$90^\\circ - \\lambda$",
      "$\\lambda$"
    ],
    "correctAnswer": "$90^\\circ + \\lambda$",
    "correctIndex": 0,
    "hintEn": "Friction force $F_s$ opposes $P$ ($180^\\circ$ to $P$). $R'$ makes angle $90^\\circ - \\lambda$ with $F_s$, so with $P$ it is $180^\\circ - (90^\\circ - \\lambda) = 90^\\circ + \\lambda$.",
    "hintAr": "قوة الاحتكاك في عكس اتجاه $P$. الزاوية بين $R'$ والعمودي هي $\\lambda$، وبين العمودي و $P$ هي $90^\\circ$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction $R$ is perpendicular to pulling force $P$ (angle $90^\\circ$).",
      "2. Resultant reaction $R'$ tilts backwards towards the friction force by angle $\\lambda$ from the normal.",
      "3. Therefore, the angle between $R'$ and $P$ is $90^\\circ + \\lambda$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي $R$ يصنع زاوية $90^\\circ$ مع قوة الشد الأفقية $P$.",
      "٢. رد الفعل المحصل $R'$ يميل جهة الاحتكاك بزاوية $\\lambda$ عن العمودي.",
      "٣. إذن قياس الزاوية بين $R'$ و $P$ هو $90^\\circ + \\lambda$."
    ],
    "teacherTipEn": "Very useful when applying Lami's Theorem for equilibrium under three coplanar forces.",
    "teacherTipAr": "مفتاح أساسي عند تطبيق قاعدة لامي للاتزان تحت تأثير 3 قوى مستوية."
  },
  {
    "id": "stat_ch1_db_easy_46",
    "titleEn": "Determining Horizontal Limiting Force from Critical Incline",
    "titleAr": "حساب القوة الأفقية من زاوية الانزلاق الحرج",
    "difficulty": "easy",
    "questionEn": "A block rests on a board. When tilted to $30^\\circ$, the block is on the verge of sliding down under its own weight. What horizontal force is required to move the block when placed on the horizontal board if $W = 60\\text{ N}$?",
    "questionAr": "جسم موضوع على لوح خشن، فعندما أميل اللوح بزاوية $30^\\circ$ كان الجسم على وشك الانزلاق لأسفل تحت تأثير وزنه فقط. فما مقدار القوة الأفقية اللازمة لتحريك الجسم عندما يوضع على نفس اللوح أفقياً إذا كان وزنه $60\\text{ نيوتن}$؟",
    "optionsEn": [
      "$20\\sqrt{3}\\text{ N}$",
      "$30\\text{ N}$",
      "$30\\sqrt{3}\\text{ N}$",
      "$15\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\sqrt{3}\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$30\\sqrt{3}\\text{ نيوتن}$",
      "$15\\text{ نيوتن}$"
    ],
    "correctAnswer": "$20\\sqrt{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Tilting gives $\\mu_s = \\tan(30^\\circ) = 1/\\sqrt{3}$. On horizontal plane, $P = \\mu_s W$.",
    "hintAr": "زاوية وشك الانزلاق تعطي معامل الاحتكاك: $\\mu_s = \\tan 30^\\circ = 1/\\sqrt{3}$.",
    "stepByStepSolutionEn": [
      "1. Since the body is on the verge of sliding under gravity at $30^\\circ$, $\\mu_s = \\tan(30^\\circ) = \\frac{1}{\\sqrt{3}}$.",
      "2. On the horizontal plane, normal reaction is $R = W = 60\\text{ N}$.",
      "3. Required horizontal force: $P = \\mu_s R = \\frac{1}{\\sqrt{3}} \\times 60 = \\frac{60\\sqrt{3}}{3} = 20\\sqrt{3}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. من تجربة إمالة اللوح: $\\mu_s = \\tan 30^\\circ = 1/\\sqrt{3}$.",
      "٢. على السطح الأفقي: $R = 60\\text{ نيوتن}$.",
      "٣. القوة الأفقية $P = \\mu_s R = \\frac{60}{\\sqrt{3}} = 20\\sqrt{3}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "The incline test is the standard experimental method to measure $\\mu_s$.",
    "teacherTipAr": "تجربة إمالة السطح هي الطريقة المعملية القياسية لتعيين معامل الاحتكاك السكوني."
  },
  {
    "id": "stat_ch1_db_easy_47",
    "titleEn": "Kinetic Friction Force Formula",
    "titleAr": "قانون قوة الاحتكاك الحركي",
    "difficulty": "easy",
    "questionEn": "When a body moves across a rough surface with normal reaction $R$, the magnitude of the kinetic friction force $F_k$ is:",
    "questionAr": "عند حركة جسم على سطح خشن برد فعل عمودي $R$، فإن مقدار قوة الاحتكاك الحركي $F_k$ يساوي:",
    "optionsEn": [
      "$\\mu_k R$",
      "$\\mu_s R$",
      "$R\\tan\\lambda$",
      "$R\\sin\\lambda$"
    ],
    "optionsAr": [
      "$\\mu_k R$",
      "$\\mu_s R$",
      "$R\\tan\\lambda$",
      "$R\\sin\\lambda$"
    ],
    "correctAnswer": "$\\mu_k R$",
    "correctIndex": 0,
    "hintEn": "Kinetic friction is given by $F_k = \\mu_k R$, with $\\mu_k < \\mu_s$.",
    "hintAr": "الاحتكاك الحركي هو حاصل ضرب معامل الاحتكاك الحركي في رد الفعل العمودي.",
    "stepByStepSolutionEn": [
      "1. Once relative motion begins, static friction drops to kinetic friction.",
      "2. The kinetic friction force is constant and given by $F_k = \\mu_k R$."
    ],
    "stepByStepSolutionAr": [
      "١. عند بدء الحركة، يتحول الاحتكاك السكوني إلى احتكاك حركي.",
      "٢. قوة الاحتكاك الحركي ثابتة وتساوي $F_k = \\mu_k R$."
    ],
    "teacherTipEn": "Remember that $\\mu_k$ is always strictly less than $\\mu_s$ for dry friction.",
    "teacherTipAr": "تذكر أن معامل الاحتكاك الحركي أقل دائماً من معامل الاحتكاك السكوني."
  },
  {
    "id": "stat_ch1_db_easy_48",
    "titleEn": "Added Weight inside Box on Rough Floor",
    "titleAr": "تأثير زيادة الوزن داخل صندوق على قوة الاحتكاك",
    "difficulty": "easy",
    "questionEn": "An open box of weight $W = 15\\text{ N}$ rests on a rough floor with $\\mu_s = 0.4$. A mass of weight $25\\text{ N}$ is placed inside the box. Find the new horizontal force required to place the system on the verge of motion.",
    "questionAr": "صندوق وزنه $15\\text{ نيوتن}$ موضوع على أرضية خشنة معامل احتكاكها $0.4$. وُضع داخل الصندوق ثقل وزنه $25\\text{ نيوتن}$. ما مقدار القوة الأفقية اللازمة لجعل المجموعة على وشك الحركة؟",
    "optionsEn": [
      "$16\\text{ N}$",
      "$10\\text{ N}$",
      "$6\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "$16\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$",
      "$6\\text{ نيوتن}$",
      "$20\\text{ نيوتن}$"
    ],
    "correctAnswer": "$16\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Total weight $W_{total} = 15 + 25 = 40\\text{ N}$, so $P = 0.4(40) = 16\\text{ N}$.",
    "hintAr": "الوزن الكلي = $15 + 25 = 40\\text{ نيوتن}$، إذن $P = 0.4 \\times 40 = 16\\text{ نيوتن}$.",
    "stepByStepSolutionEn": [
      "1. Total weight of the system: $W_{total} = 15 + 25 = 40\\text{ N}$.",
      "2. Normal reaction: $R = W_{total} = 40\\text{ N}$.",
      "3. Required horizontal force: $P = \\mu_s R = 0.4 \\times 40 = 16\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الوزن الكلي الجديد: $W = 15 + 25 = 40\\text{ نيوتن}$.",
      "٢. رد الفعل العمودي $R = 40\\text{ نيوتن}$.",
      "٣. القوة الأفقية المطلوبة $P = 0.4 \\times 40 = 16\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Adding mass increases normal reaction linearly, increasing limiting friction proportionally.",
    "teacherTipAr": "زيادة الكتلة تزيد رد الفعل العمودي خطياً فيزيد الاحتكاك بنفس النسبة."
  },
  {
    "id": "stat_ch1_db_easy_49",
    "titleEn": "Angle between Normal Reaction and Friction Force",
    "titleAr": "الزاوية بين رد الفعل العمودي وقوة الاحتكاك",
    "difficulty": "easy",
    "questionEn": "The angle between the normal reaction $R$ and the friction force $F$ on any plane is ALWAYS:",
    "questionAr": "قياس الزاوية بين رد الفعل العمودي $R$ وقوة الاحتكاك $F$ على أي مستوى يساوي دائماً:",
    "optionsEn": [
      "$90^\\circ$",
      "$\\lambda$",
      "$180^\\circ$",
      "$45^\\circ$"
    ],
    "optionsAr": [
      "$90^\\circ$",
      "$\\lambda$",
      "$180^\\circ$",
      "$45^\\circ$"
    ],
    "correctAnswer": "$90^\\circ$",
    "correctIndex": 0,
    "hintEn": "Friction lies in the tangent plane, while normal reaction is perpendicular to the plane.",
    "hintAr": "قوة الاحتكاك تقع دائماً في مستوى التلامس بينما رد الفعل العمودي عمودي على هذا المستوى.",
    "stepByStepSolutionEn": [
      "1. The normal reaction $R$ is by definition perpendicular to the surface.",
      "2. The friction force $F$ acts tangentially along the surface.",
      "3. Therefore, the angle between them is always exactly $90^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي يعامد سطح التلامس.",
      "٢. قوة الاحتكاك تقع في اتجاه مماس للسطح.",
      "٣. إذن الزاوية بينهما قائمة وتساوي $90^\\circ$ دائماً."
    ],
    "teacherTipEn": "This orthogonality is why the resultant reaction is calculated via Pythagorean theorem: $R' = \\sqrt{R^2 + F^2}$.",
    "teacherTipAr": "هذا التعامد هو السبب في حساب رد الفعل المحصل بفيثاغورس: $R' = \\sqrt{R^2 + F^2}$."
  },
  {
    "id": "stat_ch1_db_easy_50",
    "titleEn": "External Downward Force on Horizontal Plane",
    "titleAr": "تأثير قوة ضغط رأسية إضافية لأسفل",
    "difficulty": "easy",
    "questionEn": "A body rests on a rough horizontal plane with $\\mu_s = 0.5$. If a vertical downward force of $20\\text{ N}$ is applied to the body in addition to its weight $W = 30\\text{ N}$, what horizontal force puts it on the verge of motion?",
    "questionAr": "جسم موضوع على مستوى أفقي خشن معامل احتكاكه $\\mu_s = 0.5$. إذا أثرت على الجسم قوة رأسية لأسفل مقدارها $20\\text{ نيوتن}$ بالإضافة لوزنه $W = 30\\text{ نيوتن}$، فما هي القوة الأفقية التي تجعله على وشك الحركة؟",
    "optionsEn": [
      "$25\\text{ N}$",
      "$15\\text{ N}$",
      "$10\\text{ N}$",
      "$50\\text{ N}$"
    ],
    "optionsAr": [
      "$25\\text{ نيوتن}$",
      "$15\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$",
      "$50\\text{ نيوتن}$"
    ],
    "correctAnswer": "$25\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Normal reaction is $R = 30 + 20 = 50\\text{ N} \\implies P = 0.5(50) = 25\\text{ N}$.",
    "hintAr": "رد الفعل العمودي يوازن الوزن والقوة معاً: $R = 30 + 20 = 50\\text{ نيوتن}$.",
    "stepByStepSolutionEn": [
      "1. Vertical equilibrium: $R = W + F_{down} = 30 + 20 = 50\\text{ N}$.",
      "2. Limiting friction: $F_s = \\mu_s R = 0.5 \\times 50 = 25\\text{ N}$.",
      "3. Required horizontal force: $P = F_s = 25\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الاتزان الرأسي: $R = 30 + 20 = 50\\text{ نيوتن}$.",
      "٢. قوة الاحتكاك النهائي: $F_s = 0.5 \\times 50 = 25\\text{ نيوتن}$.",
      "٣. القوة الأفقية المطلوبة: $P = 25\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Vertical downward forces directly increase the normal reaction.",
    "teacherTipAr": "القوى الرأسية لأسفل تزيد مباشرة من رد الفعل العمودي وتضاعف الاحتكاك."
  }
],
  medium: [
  {
    "id": "stat_ch1_db_med_51",
    "titleEn": "Pulling Force Inclined Above Horizontal",
    "titleAr": "قوة شد تميل لأعلى على الأفقي",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 30\\text{ N}$ on a rough horizontal plane with $\\mu_s = \\frac{1}{3}$ is pulled by a force $P$ inclined at $30^\\circ$ above the horizontal. Find $P$ when motion is impending.",
    "questionAr": "جسم وزنه $W = 30\\text{ نيوتن}$ موضوع على مستوى أفقي خشن معامل احتكاكه $\\mu_s = \\frac{1}{3}$. شدته قوة $P$ تميل على الأفقي بزاوية $30^\\circ$ لأعلى وجعلته على وشك الحركة. أوجد $P$.",
    "optionsEn": [
      "$\\frac{30}{\\sqrt{3} + 1/3}\\text{ N}$",
      "$10\\text{ N}$",
      "$15\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "30 / (جتا 30 + 1/3 جا 30)",
      "10 نيوتن",
      "15 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$\\frac{30}{\\sqrt{3} + 1/3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "P cos 30 = mu_s (W - P sin 30) => P(cos 30 + mu_s sin 30) = mu_s W.",
    "hintAr": "ق جتا 30 = م_س (و - ق جا 30).",
    "stepByStepSolutionEn": [
      "1. Apply equilibrium equations.",
      "2. Solve for unknown force."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق معادلتي الاتزان في اتجاهي الحركة والعمودي عليها.",
      "٢. حل المعادلتين لحساب القوة المجهولة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "stat_ch1_db_med_52",
    "titleEn": "Pushing Force Inclined Below Horizontal",
    "titleAr": "قوة دفع تميل لأسفل على الأفقي",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 40\\text{ N}$ on a horizontal plane with $\\mu_s = 0.5$ is pushed by a force $P$ inclined at $45^\\circ$ below the horizontal. Find $P$ to cause impending motion.",
    "questionAr": "جسم وزنه $W = 40\\text{ نيوتن}$ على مستوى أفقي معامل احتكاكه $\\mu_s = 0.5$، دُفع بقوة $P$ تميل على الأفقي بزاوية $45^\\circ$ لأسفل. أوجد $P$ لجعل الجسم على وشك الحركة.",
    "optionsEn": [
      "$40\\sqrt{2}\\text{ N}$",
      "$20\\sqrt{2}\\text{ N}$",
      "$40\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "40√2 نيوتن",
      "20√2 نيوتن",
      "40 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$40\\sqrt{2}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "P cos 45 = mu_s (W + P sin 45) => P (sqrt(2)/2)(1 - 0.5) = 0.5 * 40 = 20 => P * sqrt(2)/4 = 20 => P = 80/sqrt(2) = 40 sqrt(2) N.",
    "hintAr": "ق جتا 45 = م_س (و + ق جا 45) ومنها ق = 40√2 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Apply equilibrium equations.",
      "2. Solve for unknown force."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق معادلتي الاتزان في اتجاهي الحركة والعمودي عليها.",
      "٢. حل المعادلتين لحساب القوة المجهولة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "stat_ch1_db_med_53",
    "titleEn": "Minimum Force to Move Body on Horizontal Plane",
    "titleAr": "أقل قوة تلزم لتحريك جسم على مستوى أفقي",
    "difficulty": "medium",
    "questionEn": "The minimum force required to put a body of weight $W$ on the verge of motion on a rough horizontal plane with friction angle $\\lambda$ is:",
    "questionAr": "أقل قوة لازمة لجعل جسم وزنه $W$ على وشك الحركة على مستوى أفقي خشن زاوية احتكاكه $\\lambda$ تساوي:",
    "optionsEn": [
      "$W \\sin \\lambda$",
      "$W \\tan \\lambda$",
      "$W \\cos \\lambda$",
      "$W \\sec \\lambda$"
    ],
    "optionsAr": [
      "و جا ل",
      "و ظا ل",
      "و جتا ل",
      "و قا ل"
    ],
    "correctAnswer": "$W \\sin \\lambda$",
    "correctIndex": 0,
    "hintEn": "P = W sin lambda / cos(theta - lambda). Minimum when theta = lambda => P_min = W sin lambda.",
    "hintAr": "أقل قوة تحدث عندما تميل القوة بزاوية تساوي زاوية الاحتكاك: ق_صغرى = و جا ل.",
    "stepByStepSolutionEn": [
      "1. Apply equilibrium equations.",
      "2. Solve for unknown force."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق معادلتي الاتزان في اتجاهي الحركة والعمودي عليها.",
      "٢. حل المعادلتين لحساب القوة المجهولة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "stat_ch1_db_med_54",
    "titleEn": "Direction of Minimum Pulling Force",
    "titleAr": "اتجاه أقل قوة شد لازمة للتحريك",
    "difficulty": "medium",
    "questionEn": "To move a body on a rough horizontal plane with coefficient $\\mu_s = \\frac{1}{\\sqrt{3}}$ with the minimum possible pulling force, the force must be inclined at:",
    "questionAr": "لتحريك جسم على مستوى أفقي خشن معامل احتكاكه $\\mu_s = \\frac{1}{\\sqrt{3}}$ بأقل قوة ممكنة، يجب أن تميل القوة على الأفقي بزاوية:",
    "optionsEn": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$0^\\circ$"
    ],
    "optionsAr": [
      "30°",
      "45°",
      "60°",
      "0°"
    ],
    "correctAnswer": "$30^\\circ$",
    "correctIndex": 0,
    "hintEn": "Force must be inclined at the friction angle lambda: tan lambda = 1/sqrt(3) => lambda = 30 deg.",
    "hintAr": "تميل القوة بزاوية تساوي زاوية الاحتكاك ل = 30°.",
    "stepByStepSolutionEn": [
      "1. Apply equilibrium equations.",
      "2. Solve for unknown force."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق معادلتي الاتزان في اتجاهي الحركة والعمودي عليها.",
      "٢. حل المعادلتين لحساب القوة المجهولة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "stat_ch1_db_med_55",
    "titleEn": "Force Up an Inclined Plane for Upward Motion",
    "titleAr": "قوة موازية للمستوى تجعل الجسم على وشك الحركة لأعلى",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 60\\text{ N}$ rests on a plane inclined at $30^\\circ$ with $\\mu_s = \\frac{1}{\\sqrt{3}}$. Find the force $P$ parallel to the plane to make it on the verge of moving up.",
    "questionAr": "جسم وزنه $W = 60\\text{ نيوتن}$ موضوع على مستوى يميل بزاوية $30^\\circ$ ومعامل احتكاكه $\\mu_s = \\frac{1}{\\sqrt{3}}$. أوجد القوة الموازية للمستوى $P$ التي تجعله على وشك الحركة لأعلى.",
    "optionsEn": [
      "$60\\text{ N}$",
      "$30\\text{ N}$",
      "$30\\sqrt{3}\\text{ N}$",
      "$45\\text{ N}$"
    ],
    "optionsAr": [
      "60 نيوتن",
      "30 نيوتن",
      "30√3 نيوتن",
      "45 نيوتن"
    ],
    "correctAnswer": "$60\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "P = W sin 30 + mu_s W cos 30 = 60(0.5) + (1/sqrt(3))(60 * sqrt(3)/2) = 30 + 30 = 60 N.",
    "hintAr": "ق = و جا 30 + م_س و جتا 30 = 30 + 30 = 60 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Apply equilibrium equations.",
      "2. Solve for unknown force."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق معادلتي الاتزان في اتجاهي الحركة والعمودي عليها.",
      "٢. حل المعادلتين لحساب القوة المجهولة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "stat_ch1_db_med_56",
    "titleEn": "Force Up an Inclined Plane Just Preventing Sliding",
    "titleAr": "أقل قوة موازية تمنع الجسم من الانزلاق لأسفل",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 60\\text{ N}$ rests on a plane inclined at $30^\\circ$ with $\\mu_s = \\frac{1}{2\\sqrt{3}}$. Find the force $P$ directed up the plane that just prevents it from sliding down.",
    "questionAr": "جسم وزنه $W = 60\\text{ نيوتن}$ على مستوى يميل بزاوية $30^\\circ$ ومعامل احتكاكه $\\mu_s = \\frac{1}{2\\sqrt{3}}$. أوجد القوة $P$ الموازية للمستوى لأعلى التي تمنعه من الانزلاق لأسفل.",
    "optionsEn": [
      "$15\\text{ N}$",
      "$30\\text{ N}$",
      "$45\\text{ N}$",
      "$0\\text{ N}$"
    ],
    "optionsAr": [
      "15 نيوتن",
      "30 نيوتن",
      "45 نيوتن",
      "0 نيوتن"
    ],
    "correctAnswer": "$15\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "P = W sin 30 - mu_s W cos 30 = 30 - (1/(2sqrt(3)))(30 sqrt(3)) = 30 - 15 = 15 N.",
    "hintAr": "ق = و جا 30 - م_س و جتا 30 = 30 - 15 = 15 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Apply equilibrium equations.",
      "2. Solve for unknown force."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق معادلتي الاتزان في اتجاهي الحركة والعمودي عليها.",
      "٢. حل المعادلتين لحساب القوة المجهولة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "stat_ch1_db_med_57",
    "titleEn": "Range of Forces Maintaining Equilibrium on Inclined Plane",
    "titleAr": "فترة القوة التي تحافظ على اتزان الجسم على مستوى مائل",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 40\\text{ N}$ on a plane inclined at $30^\\circ$ has $\\mu_s = \\frac{1}{2\\sqrt{3}}$. Find the interval $[P_{\\min}, P_{\\max}]$ of forces parallel to the plane that keep the body in equilibrium.",
    "questionAr": "جسم وزنه $W = 40\\text{ نيوتن}$ على مستوى يميل بزاوية $30^\\circ$ ومعامل احتكاكه $\\mu_s = \\frac{1}{2\\sqrt{3}}$. أوجد فترة القوة $P$ الموازية لخط أكبر ميل التي تحافظ على توازن الجسم.",
    "optionsEn": [
      "$[10, 30]\\text{ N}$",
      "$[0, 40]\\text{ N}$",
      "$[20, 40]\\text{ N}$",
      "$[15, 25]\\text{ N}$"
    ],
    "optionsAr": [
      "[10، 30] نيوتن",
      "[0، 40] نيوتن",
      "[20، 40] نيوتن",
      "[15، 25] نيوتن"
    ],
    "correctAnswer": "$[10, 30]\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "P_min = 40 sin 30 - mu_s 40 cos 30 = 20 - 10 = 10 N; P_max = 20 + 10 = 30 N. Interval is [10, 30].",
    "hintAr": "ق_صغرى تمنع الانزلاق = 10 نيوتن، وق_عظمى تجعله على وشك الصعود = 30 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Apply equilibrium equations.",
      "2. Solve for unknown force."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق معادلتي الاتزان في اتجاهي الحركة والعمودي عليها.",
      "٢. حل المعادلتين لحساب القوة المجهولة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "stat_ch1_db_med_58",
    "titleEn": "Horizontal Force Acting on Body on Inclined Plane",
    "titleAr": "قوة أفقية تؤثر على جسم موضوع على مستوى مائل",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 20\\text{ N}$ on a plane inclined at $45^\\circ$ with $\\mu_s = 0.5$ is acted upon by a horizontal force $P$ pushing it toward the plane. If motion is impending upward, find $P$.",
    "questionAr": "جسم وزنه $W = 20\\text{ نيوتن}$ موضوع على مستوى يميل بزاوية $45^\\circ$ ومعامل احتكاكه $\\mu_s = 0.5$. أثرت عليه قوة أفقية $P$ نحو المستوى جعلته على وشك الحركة لأعلى. أوجد $P$.",
    "optionsEn": [
      "$60\\text{ N}$",
      "$40\\text{ N}$",
      "$30\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "60 نيوتن",
      "40 نيوتن",
      "30 نيوتن",
      "20 نيوتن"
    ],
    "correctAnswer": "$60\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "P cos 45 = W sin 45 + mu_s (W cos 45 + P sin 45) => P(1 - 0.5) = 20(1 + 0.5) => 0.5 P = 30 => P = 60 N.",
    "hintAr": "ق جتا 45 = و جا 45 + م_س (و جتا 45 + ق جا 45) ومنها 0.5 ق = 30 إذن ق = 60 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Apply equilibrium equations.",
      "2. Solve for unknown force."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق معادلتي الاتزان في اتجاهي الحركة والعمودي عليها.",
      "٢. حل المعادلتين لحساب القوة المجهولة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "stat_ch1_db_med_59",
    "titleEn": "Ratio of Pushing to Pulling Force on Horizontal Plane",
    "titleAr": "النسبة بين قوتي الدفع والشد لنفس زاوية الميل",
    "difficulty": "medium",
    "questionEn": "A body of weight $W$ on a rough plane with friction angle $\\lambda$ is moved by force inclined at $\\alpha$. Pulling force $P_1$ vs pushing force $P_2$ satisfies:",
    "questionAr": "لتحريك جسم على مستوى أفقي بقوة تميل بزاوية $\\alpha$، النسبة بين قوة الشد $P_1$ وقوة الدفع $P_2$ تحقق:",
    "optionsEn": [
      "$P_1 < P_2$",
      "$P_1 > P_2$",
      "$P_1 = P_2$",
      "$P_1 P_2 = W^2$"
    ],
    "optionsAr": [
      "ق_شد < ق_دفع",
      "ق_شد > ق_دفع",
      "ق_شد = ق_دفع",
      "ق_شد × ق_دفع = و²"
    ],
    "correctAnswer": "$P_1 < P_2$",
    "correctIndex": 0,
    "hintEn": "Pulling reduces normal reaction (R = W - P sin alpha), while pushing increases it (R = W + P sin alpha), so P_1 < P_2.",
    "hintAr": "قوة الشد تقلل رد الفعل العمودي بينما الدفع يزيده، لذلك قوة الشد دائماً أقل من قوة الدفع.",
    "stepByStepSolutionEn": [
      "1. Apply equilibrium equations.",
      "2. Solve for unknown force."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق معادلتي الاتزان في اتجاهي الحركة والعمودي عليها.",
      "٢. حل المعادلتين لحساب القوة المجهولة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "stat_ch1_db_med_60",
    "titleEn": "Resultant Reaction Bounds",
    "titleAr": "مدى تغير رد الفعل المحصل",
    "difficulty": "medium",
    "questionEn": "If a body of weight $W = 20\\text{ N}$ is on a rough horizontal plane with $\\mu_s = 0.75$, the magnitude of the resultant reaction $R'$ belongs to the interval:",
    "questionAr": "وضع جسم وزنه $W = 20\\text{ نيوتن}$ على مستوى أفقي خشن معامل احتكاكه $\\mu_s = 0.75$. مقدار رد الفعل المحصل $R'$ ينتمي إلى الفترة:",
    "optionsEn": [
      "$[20, 25]\\text{ N}$",
      "$[0, 20]\\text{ N}$",
      "$[15, 25]\\text{ N}$",
      "$[0, 25]\\text{ N}$"
    ],
    "optionsAr": [
      "[20، 25] نيوتن",
      "[0، 20] نيوتن",
      "[15، 25] نيوتن",
      "[0، 25] نيوتن"
    ],
    "correctAnswer": "$[20, 25]\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "When no force acts, F = 0 => R' = R = 20. At limiting equilibrium, R' = 20 sqrt(1 + 0.75^2) = 25 N. So R' in [20, 25].",
    "hintAr": "أقل قيمة لرد الفعل المحصل عندما لا تؤثر قوى وتساوي 20، وأقصاها عند الاحتكاك النهائي وتساوي 25 نيوتن.",
    "stepByStepSolutionEn": [
      "1. Apply equilibrium equations.",
      "2. Solve for unknown force."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق معادلتي الاتزان في اتجاهي الحركة والعمودي عليها.",
      "٢. حل المعادلتين لحساب القوة المجهولة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "stat_ch1_db_med_61",
    "titleEn": "Inclined Plane: Least Force to Prevent Slipping",
    "titleAr": "المستوى المائل: أقل قوة لمنع الانزلاق",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 60\\text{ N}$ rests on a rough plane inclined at $30^\\circ$ to the horizontal. If $\\mu_s = \\frac{\\sqrt{3}}{6}$, find the minimum force $P$ acting along the line of greatest slope directed up the plane to prevent the body from sliding down.",
    "questionAr": "جسم وزنه $60\\text{ نيوتن}$ موضوع على مستوى خشن يميل بزاوية $30^\\circ$ على الأفقي. إذا كان $\\mu_s = \\frac{\\sqrt{3}}{6}$، فما أقل قوة $P$ تؤثر في اتجاه خط أكبر ميل لأعلى تمنع الجسم من الانزلاق لأسفل؟",
    "optionsEn": [
      "$15\\text{ N}$",
      "$30\\text{ N}$",
      "$45\\text{ N}$",
      "$10\\text{ N}$"
    ],
    "optionsAr": [
      "$15\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$45\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$"
    ],
    "correctAnswer": "$15\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Impending downward motion implies limiting friction acts UP the plane: $P + F_s = W\\sin\\theta$.",
    "hintAr": "وشك الانزلاق لأسفل يعني أن قوة الاحتكاك لأعلى: $P + F_s = W\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = W\\cos(30^\\circ) = 60 \\times \\frac{\\sqrt{3}}{2} = 30\\sqrt{3}\\text{ N}$.",
      "2. Maximum static friction: $F_s = \\mu_s R = \\frac{\\sqrt{3}}{6} \\times 30\\sqrt{3} = 15\\text{ N}$.",
      "3. Component of weight down the plane: $W\\sin(30^\\circ) = 60 \\times 0.5 = 30\\text{ N}$.",
      "4. For impending downward motion, $P + F_s = W\\sin(30^\\circ) \\implies P = 30 - 15 = 15\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 60\\cos 30^\\circ = 30\\sqrt{3}\\text{ نيوتن}$.",
      "٢. قوة الاحتكاك النهائي: $F_s = \\mu_s R = \\frac{\\sqrt{3}}{6} \\times 30\\sqrt{3} = 15\\text{ نيوتن}$.",
      "٣. مركبة الوزن لأسفل المستوى: $W\\sin 30^\\circ = 30\\text{ نيوتن}$.",
      "٤. لمنع الانزلاق: $P + F_s = 30 \\implies P = 15\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Always verify the direction of friction: when preventing downward slip, friction acts up the plane.",
    "teacherTipAr": "تأكد دائماً من اتجاه الاحتكاك: عند منع الانزلاق لأسفل، تعمل قوة الاحتكاك لأعلى المستوى."
  },
  {
    "id": "stat_ch1_db_med_62",
    "titleEn": "Inclined Plane: Force to Cause Impending Upward Motion",
    "titleAr": "المستوى المائل: قوة تجعل الجسم على وشك الحركة لأعلى",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 60\\text{ N}$ rests on a rough plane inclined at $30^\\circ$ to the horizontal. If $\\mu_s = \\frac{\\sqrt{3}}{6}$, find the force $P$ acting along the line of greatest slope directed up the plane to put the body on the verge of moving up the plane.",
    "questionAr": "جسم وزنه $60\\text{ نيوتن}$ موضوع على مستوى خشن يميل بزاوية $30^\\circ$ على الأفقي. إذا كان $\\mu_s = \\frac{\\sqrt{3}}{6}$، فما القوة $P$ في اتجاه خط أكبر ميل لأعلى التي تجعل الجسم على وشك الحركة لأعلى المستوى؟",
    "optionsEn": [
      "$45\\text{ N}$",
      "$30\\text{ N}$",
      "$15\\text{ N}$",
      "$60\\text{ N}$"
    ],
    "optionsAr": [
      "$45\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$15\\text{ نيوتن}$",
      "$60\\text{ نيوتن}$"
    ],
    "correctAnswer": "$45\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Impending upward motion means limiting friction opposes motion, acting DOWN the plane: $P = W\\sin\\theta + F_s$.",
    "hintAr": "وشك الحركة لأعلى يعني أن الاحتكاك النهائي يعمل لأسفل المستوى: $P = W\\sin\\theta + F_s$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = 60\\cos(30^\\circ) = 30\\sqrt{3}\\text{ N}$.",
      "2. Maximum static friction: $F_s = \\mu_s R = 15\\text{ N}$.",
      "3. Impending motion is up the plane, so friction acts down the plane.",
      "4. Along the incline: $P = W\\sin(30^\\circ) + F_s = 30 + 15 = 45\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 30\\sqrt{3}\\text{ نيوتن}$.",
      "٢. قوة الاحتكاك النهائي: $F_s = 15\\text{ نيوتن}$.",
      "٣. اتجاه الحركة وشيك لأعلى، إذن الاحتكاك يعمل لأسفل.",
      "٤. معادلة الاتجاه الموازي: $P = W\\sin 30^\\circ + F_s = 30 + 15 = 45\\text{ نيوتن}$."
    ],
    "teacherTipEn": "The equilibrium range along the plane is $[15\\text{ N}, 45\\text{ N}]$. Any force in this interval keeps the body at rest.",
    "teacherTipAr": "مجال اتزان القوة الموازية هو $[15, 45]\\text{ نيوتن}$. أي قوة داخل هذه الفترة تضمن سكون الجسم."
  },
  {
    "id": "stat_ch1_db_med_63",
    "titleEn": "Horizontal Force on an Inclined Plane",
    "titleAr": "قوة أفقية على مستوى مائل خشن",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 40\\text{ N}$ rests on a rough plane inclined at $45^\\circ$ to the horizontal. A horizontal force $P$ pushes the body such that it is on the verge of moving up the plane. If $\\mu_s = \\frac{1}{3}$, find $P$.",
    "questionAr": "جسم وزنه $40\\text{ نيوتن}$ على مستوى خشن يميل بزاوية $45^\\circ$ على الأفقي. تؤثر عليه قوة أفقية $P$ تجعله على وشك الحركة لأعلى. إذا كان $\\mu_s = \\frac{1}{3}$، فما مقدار $P$؟",
    "optionsEn": [
      "$80\\text{ N}$",
      "$60\\text{ N}$",
      "$50\\text{ N}$",
      "$40\\text{ N}$"
    ],
    "optionsAr": [
      "$80\\text{ نيوتن}$",
      "$60\\text{ نيوتن}$",
      "$50\\text{ نيوتن}$",
      "$40\\text{ نيوتن}$"
    ],
    "correctAnswer": "$80\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Resolve $P$ and $W$ along and perpendicular to the incline. Remember $R = W\\cos\\theta + P\\sin\\theta$.",
    "hintAr": "حلل القوة الأفقية $P$ والوزن في اتجاه المستوى والعمودي عليه: $R = W\\cos\\theta + P\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. Perpendicular to plane: $R = W\\cos(45^\\circ) + P\\sin(45^\\circ) = \\frac{\\sqrt{2}}{2}(40 + P)$.",
      "2. Parallel to plane (impending upward motion): $P\\cos(45^\\circ) = W\\sin(45^\\circ) + \\mu_s R$.",
      "3. Substitute $\\sin(45^\\circ) = \\cos(45^\\circ) = \\frac{\\sqrt{2}}{2}$: $P = 40 + \\frac{1}{3}(40 + P)$.",
      "4. Multiply by 3: $3P = 120 + 40 + P \\implies 2P = 160 \\implies P = 80\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. في الاتجاه العمودي: $R = \\frac{\\sqrt{2}}{2}(40 + P)$.",
      "٢. في اتجاه المستوى (وشك الحركة لأعلى): $P\\cos 45^\\circ = 40\\sin 45^\\circ + \\mu_s R$.",
      "٣. بالقسمة على $\\frac{\\sqrt{2}}{2}$: $P = 40 + \\frac{1}{3}(40 + P)$.",
      "٤. $3P = 160 + P \\implies 2P = 160 \\implies P = 80\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Horizontal forces increase the normal reaction on an incline because the component $P\\sin\\theta$ presses the body into the surface.",
    "teacherTipAr": "القوة الأفقية تزيد رد الفعل العمودي على المستوى المائل لأن مركبتها $P\\sin\\theta$ تضغط الجسم على السطح."
  },
  {
    "id": "stat_ch1_db_med_64",
    "titleEn": "Horizontal Force to Prevent Downward Slipping on Incline",
    "titleAr": "قوة أفقية تمنع الانزلاق لأسفل المستوى",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 40\\text{ N}$ rests on a rough plane inclined at $45^\\circ$ to the horizontal, with $\\mu_s = \\frac{1}{3}$. Find the horizontal force $P$ acting towards the plane to prevent the body from slipping down.",
    "questionAr": "جسم وزنه $40\\text{ نيوتن}$ على مستوى خشن يميل بزاوية $45^\\circ$ على الأفقي، ومعامل الاحتكاك $\\mu_s = \\frac{1}{3}$. ما مقدار القوة الأفقية $P$ الموجهة نحو المستوى التي تمنع الجسم من الانزلاق لأسفل؟",
    "optionsEn": [
      "$20\\text{ N}$",
      "$30\\text{ N}$",
      "$15\\text{ N}$",
      "$25\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$15\\text{ نيوتن}$",
      "$25\\text{ نيوتن}$"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Friction acts UP the plane: $P\\cos\\theta + \\mu_s R = W\\sin\\theta$, with $R = W\\cos\\theta + P\\sin\\theta$.",
    "hintAr": "الاحتكاك لأعلى لمنع الانزلاق: $P\\cos\\theta + \\mu_s R = W\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = 40\\cos(45^\\circ) + P\\sin(45^\\circ) = \\frac{\\sqrt{2}}{2}(40 + P)$.",
      "2. Impending downward slip: $P\\cos(45^\\circ) + \\mu_s R = W\\sin(45^\\circ)$.",
      "3. Substitute $\\cos(45^\\circ) = \\sin(45^\\circ)$: $P + \\frac{1}{3}(40 + P) = 40$.",
      "4. Multiply by 3: $3P + 40 + P = 120 \\implies 4P = 80 \\implies P = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = \\frac{\\sqrt{2}}{2}(40 + P)$.",
      "٢. شرط منع الانزلاق: $P\\cos 45^\\circ + \\mu_s R = 40\\sin 45^\\circ$.",
      "٣. $P + \\frac{1}{3}(40 + P) = 40 \\implies 4P + 40 = 120 \\implies 4P = 80 \\implies P = 20\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Compare with Q63: the horizontal force range for equilibrium is $[20\\text{ N}, 80\\text{ N}]$.",
    "teacherTipAr": "قارن بالسؤال السابق: مدى القوة الأفقية للاتزان هو $[20, 80]\\text{ نيوتن}$."
  },
  {
    "id": "stat_ch1_db_med_65",
    "titleEn": "Angle of Friction in Terms of Plane Angle",
    "titleAr": "تعيين زاوية الاحتكاك بدلالة زاوية ميل المستوى",
    "difficulty": "medium",
    "questionEn": "A body is on the verge of sliding down a plane inclined at angle $\\alpha$ under the action of its weight alone. When the angle of inclination is increased to $\\beta$, a force $P$ directed along the line of greatest slope up the plane keeps it in limiting equilibrium. The coefficient of static friction is:",
    "questionAr": "جسم على وشك الانزلاق على مستوى مائل بزاوية $\\alpha$ تحت تأثير وزنه فقط. عند زيادة ميل المستوى إلى $\\beta$، حفظ توازنه بقوة موازية للمستوى لأعلى. فإن معامل الاحتكاك السكوني هو:",
    "optionsEn": [
      "$\\tan\\alpha$",
      "$\\tan\\beta$",
      "$\\tan(\\beta - \\alpha)$",
      "$\\sin\\alpha$"
    ],
    "optionsAr": [
      "$\\tan\\alpha$",
      "$\\tan\\beta$",
      "$\\tan(\\beta - \\alpha)$",
      "$\\sin\\alpha$"
    ],
    "correctAnswer": "$\\tan\\alpha$",
    "correctIndex": 0,
    "hintEn": "Verge of sliding under gravity alone means the angle of friction equals the angle of inclination: $\\lambda = \\alpha$.",
    "hintAr": "الانزلاق تحت تأثير الوزن فقط يعني أن زاوية الاحتكاك تساوي زاوية ميل المستوى: $\\lambda = \\alpha$.",
    "stepByStepSolutionEn": [
      "1. When the body slides under its weight alone, $W\\sin\\alpha = \\mu_s W\\cos\\alpha \\implies \\mu_s = \\tan\\alpha$.",
      "2. Hence, the angle of friction is $\\lambda = \\alpha$.",
      "3. The coefficient of static friction depends solely on the surfaces, so $\\mu_s = \\tan\\alpha$."
    ],
    "stepByStepSolutionAr": [
      "١. اتزان الجسم على وشك الانزلاق تحت وزنه يعطي $\\mu_s = \\tan\\alpha$.",
      "٢. زاوية الاحتكاك هي $\\lambda = \\alpha$.",
      "٣. معامل الاحتكاك خاصية للسطحين ولا تتغير بتغير زاوية إمالة المستوى، إذن $\\mu_s = \\tan\\alpha$."
    ],
    "teacherTipEn": "$\\mu_s$ is a property of the contact materials, independent of the incline angle.",
    "teacherTipAr": "معامل الاحتكاك السكوني خاصية لسطحي التلامس ولا يتغير بتغير زاوية ميل المستوى."
  },
  {
    "id": "stat_ch1_db_med_66",
    "titleEn": "Pushing a Block against a Rough Vertical Wall",
    "titleAr": "ضغط جسم على حائط رأسي خشن",
    "difficulty": "medium",
    "questionEn": "A block of weight $W = 30\\text{ N}$ is pressed against a rough vertical wall by a horizontal force $P$. If $\\mu_s = 0.6$, find the minimum force $P$ required to prevent the block from sliding down.",
    "questionAr": "جسم وزنه $30\\text{ نيوتن}$ يُضغط به على حائط رأسي خشن بقوة أفقية $P$. إذا كان $\\mu_s = 0.6$، فما أقل قيمة للقوة $P$ تمنع الجسم من الانزلاق لأسفل؟",
    "optionsEn": [
      "$50\\text{ N}$",
      "$18\\text{ N}$",
      "$30\\text{ N}$",
      "$75\\text{ N}$"
    ],
    "optionsAr": [
      "$50\\text{ نيوتن}$",
      "$18\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$75\\text{ نيوتن}$"
    ],
    "correctAnswer": "$50\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "On a vertical wall, horizontal force provides the normal reaction: $R = P$. Vertical friction supports weight: $F_s = W$.",
    "hintAr": "على الحائط الرأسي، القوة الأفقية تمثل رد الفعل العمودي: $R = P$. وقوة الاحتكاك الرأسية توازن الوزن: $F_s = W$.",
    "stepByStepSolutionEn": [
      "1. Horizontal equilibrium: normal reaction of wall is $R = P$.",
      "2. To prevent sliding down, friction acts upward: $F_s = W = 30\\text{ N}$.",
      "3. Limiting friction condition: $F_s \\le \\mu_s R \\implies 30 \\le 0.6 P$.",
      "4. Minimum force: $P = \\frac{30}{0.6} = 50\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الاتزان الأفقي: رد فعل الحائط العمودي $R = P$.",
      "٢. لمنع الانزلاق لأسفل، الاحتكاك لأعلى ويوازن الوزن: $F_s = 30\\text{ نيوتن}$.",
      "٣. شرط الاتزان السكوني: $F_s \\le \\mu_s R \\implies 30 \\le 0.6 P$.",
      "٤. أقل قوة $P = \\frac{30}{0.6} = 50\\text{ نيوتن}$."
    ],
    "teacherTipEn": "On vertical walls, normal reaction is created by the pushing force, not gravity.",
    "teacherTipAr": "على الحوائط الرأسية، رد الفعل العمودي ينشأ من قوة الضغط الأفقية وليس من الجاذبية."
  },
  {
    "id": "stat_ch1_db_med_67",
    "titleEn": "Block Pressed to Vertical Wall: Force to Move Up",
    "titleAr": "ضغط جسم على حائط رأسي: القوة لتحريكه لأعلى",
    "difficulty": "medium",
    "questionEn": "A block of weight $W = 30\\text{ N}$ is pressed against a rough vertical wall with $\\mu_s = 0.6$ by a horizontal force $P = 100\\text{ N}$. Find the vertical upward force $Q$ required to place the block on the verge of moving up the wall.",
    "questionAr": "جسم وزنه $30\\text{ نيوتن}$ يُضغط به على حائط رأسي خشن معامل احتكاكه $0.6$ بقوة أفقية $P = 100\\text{ نيوتن}$. فما مقدار القوة الرأسية لأعلى $Q$ اللازمة لجعل الجسم على وشك الحركة لأعلى الحائط؟",
    "optionsEn": [
      "$90\\text{ N}$",
      "$60\\text{ N}$",
      "$30\\text{ N}$",
      "$120\\text{ N}$"
    ],
    "optionsAr": [
      "$90\\text{ نيوتن}$",
      "$60\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$120\\text{ نيوتن}$"
    ],
    "correctAnswer": "$90\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Friction acts downward opposing upward motion: $Q = W + F_s = W + \\mu_s R$.",
    "hintAr": "الاحتكاك يعمل لأسفل لمقاومة الحركة لأعلى: $Q = W + F_s = W + \\mu_s R$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = P = 100\\text{ N}$.",
      "2. Maximum friction force: $F_s = \\mu_s R = 0.6 \\times 100 = 60\\text{ N}$.",
      "3. For impending upward motion, both weight and friction act downward.",
      "4. Vertical equilibrium: $Q = W + F_s = 30 + 60 = 90\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 100\\text{ نيوتن}$.",
      "٢. الاحتكاك النهائي: $F_s = 0.6 \\times 100 = 60\\text{ نيوتن}$.",
      "٣. الحركة وشيكة لأعلى، فالاحتكاك والوزن كلاهما لأسفل.",
      "٤. معادلة الاتزان الرأسي: $Q = W + F_s = 30 + 60 = 90\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice that to move a body up a wall, the applied force must overcome both weight AND limiting friction.",
    "teacherTipAr": "لتحريك جسم لأعلى حائط، يجب أن تتغلب القوة على الوزن والاحتكاك معاً."
  },
  {
    "id": "stat_ch1_db_med_68",
    "titleEn": "Sum of Max and Min Force on Incline",
    "titleAr": "مجموع أكبر وأقل قوة موازية لحفظ اتزان جسم على مستوى مائل",
    "difficulty": "medium",
    "questionEn": "A body of weight $W$ rests on a rough plane inclined at angle $\\theta$ with friction angle $\\lambda$ (where $\\theta > \\lambda$). If $P_1$ is the least force up the plane to prevent sliding down, and $P_2$ is the least force up the plane to cause impending upward motion, then $P_1 + P_2$ equals:",
    "questionAr": "جسم وزنه $W$ على مستوى خشن يميل بزاوية $\\theta$ وزاوية احتكاكه $\\lambda$ (حيث $\\theta > \\lambda$). إذا كانت $P_1$ أقل قوة لأعلى تمنع الانزلاق، و $P_2$ أقل قوة تجعله على وشك الحركة لأعلى، فإن $P_1 + P_2$ تساوي:",
    "optionsEn": [
      "$2W\\sin\\theta$",
      "$2W\\cos\\theta$",
      "$2\\mu_s W\\cos\\theta$",
      "$W\\sin\\theta$"
    ],
    "optionsAr": [
      "$2W\\sin\\theta$",
      "$2W\\cos\\theta$",
      "$2\\mu_s W\\cos\\theta$",
      "$W\\sin\\theta$"
    ],
    "correctAnswer": "$2W\\sin\\theta$",
    "correctIndex": 0,
    "hintEn": "$P_1 = W\\sin\\theta - F_s$ and $P_2 = W\\sin\\theta + F_s$. Add the two expressions.",
    "hintAr": "$P_1 = W\\sin\\theta - F_s$ و $P_2 = W\\sin\\theta + F_s$. اجمع المعادلتين.",
    "stepByStepSolutionEn": [
      "1. Downward slip prevention: $P_1 = W\\sin\\theta - \\mu_s R$.",
      "2. Upward motion verge: $P_2 = W\\sin\\theta + \\mu_s R$.",
      "3. Sum: $P_1 + P_2 = (W\\sin\\theta - \\mu_s R) + (W\\sin\\theta + \\mu_s R) = 2W\\sin\\theta$."
    ],
    "stepByStepSolutionAr": [
      "١. لمنع الانزلاق لأسفل: $P_1 = W\\sin\\theta - \\mu_s R$.",
      "٢. لتحريك الجسم لأعلى: $P_2 = W\\sin\\theta + \\mu_s R$.",
      "٣. الجمع: $P_1 + P_2 = 2W\\sin\\theta$."
    ],
    "teacherTipEn": "The gravity component $W\\sin\\theta$ is exactly the midpoint of the equilibrium force interval $[P_1, P_2]$.",
    "teacherTipAr": "مركبة الوزن $W\\sin\\theta$ تمثل نقطة منتصف فترة قوى الاتزان $[P_1, P_2]$ دائماً."
  },
  {
    "id": "stat_ch1_db_med_69",
    "titleEn": "Difference of Max and Min Force on Incline",
    "titleAr": "الفرق بين أكبر وأقل قوة موازية لحفظ اتزان جسم على مستوى مائل",
    "difficulty": "medium",
    "questionEn": "Under the same conditions as Q68, the difference $P_2 - P_1$ between the maximum and minimum forces directed along the plane equals:",
    "questionAr": "تحت نفس شروط السؤال السابق، فإن الفرق $P_2 - P_1$ بين أكبر وأقل قوة موازية لحفظ الاتزان يساوي:",
    "optionsEn": [
      "$2\\mu_s W\\cos\\theta$",
      "$2W\\sin\\theta$",
      "$\\mu_s W\\cos\\theta$",
      "$2W\\cos\\theta$"
    ],
    "optionsAr": [
      "$2\\mu_s W\\cos\\theta$",
      "$2W\\sin\\theta$",
      "$\\mu_s W\\cos\\theta$",
      "$2W\\cos\\theta$"
    ],
    "correctAnswer": "$2\\mu_s W\\cos\\theta$",
    "correctIndex": 0,
    "hintEn": "$P_2 - P_1 = (W\\sin\\theta + \\mu_s R) - (W\\sin\\theta - \\mu_s R) = 2\\mu_s R = 2\\mu_s W\\cos\\theta$.",
    "hintAr": "اطرح $P_1$ من $P_2$ لتحصل على ضعف قوة الاحتكاك النهائي.",
    "stepByStepSolutionEn": [
      "1. $P_2 = W\\sin\\theta + \\mu_s W\\cos\\theta$.",
      "2. $P_1 = W\\sin\\theta - \\mu_s W\\cos\\theta$.",
      "3. Subtract: $P_2 - P_1 = 2\\mu_s W\\cos\\theta$."
    ],
    "stepByStepSolutionAr": [
      "١. $P_2 = W\\sin\\theta + \\mu_s W\\cos\\theta$.",
      "٢. $P_1 = W\\sin\\theta - \\mu_s W\\cos\\theta$.",
      "٣. بالطرح: $P_2 - P_1 = 2\\mu_s W\\cos\\theta$ وهو ضعف الاحتكاك النهائي."
    ],
    "teacherTipEn": "The width of the equilibrium interval is $2F_s$.",
    "teacherTipAr": "طول فترة قوى الاتزان الموازية للمستوى يساوي ضعف قوة الاحتكاك النهائي $2F_s$."
  },
  {
    "id": "stat_ch1_db_med_70",
    "titleEn": "Inclined Force on Inclined Plane",
    "titleAr": "قوة تميل بزاوية على خط أكبر ميل لمستوى مائل",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 50\\text{ N}$ rests on a rough plane inclined at $30^\\circ$ to the horizontal with $\\mu_s = \\frac{1}{\\sqrt{3}}$. A force $P$ acting at an angle $30^\\circ$ above the line of greatest slope puts the body on the verge of moving up the plane. Find $P$.",
    "questionAr": "جسم وزنه $50\\text{ نيوتن}$ على مستوى خشن يميل بزاوية $30^\\circ$ على الأفقي ومعامل احتكاكه $\\frac{1}{\\sqrt{3}}$. تؤثر عليه قوة $P$ تميل بزاوية $30^\\circ$ لأعلى على خط أكبر ميل وتجعله على وشك الحركة لأعلى المستوى. ما مقدار $P$؟",
    "optionsEn": [
      "$25\\sqrt{3}\\text{ N}$",
      "$50\\text{ N}$",
      "$25\\text{ N}$",
      "$50\\sqrt{3}\\text{ N}$"
    ],
    "optionsAr": [
      "$25\\sqrt{3}\\text{ نيوتن}$",
      "$50\\text{ نيوتن}$",
      "$25\\text{ نيوتن}$",
      "$50\\sqrt{3}\\text{ نيوتن}$"
    ],
    "correctAnswer": "$25\\sqrt{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Resolve $P$ along ($P\\cos 30^\\circ$) and perpendicular ($P\\sin 30^\\circ$) to the plane.",
    "hintAr": "حلل القوة $P$ إلى مركبتين: $P\\cos 30^\\circ$ موازية و $P\\sin 30^\\circ$ عمودية.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = W\\cos(30^\\circ) - P\\sin(30^\\circ) = 25\\sqrt{3} - 0.5 P$.",
      "2. Impending upward motion: $P\\cos(30^\\circ) = W\\sin(30^\\circ) + \\mu_s R$.",
      "3. Substitute: $P \\frac{\\sqrt{3}}{2} = 25 + \\frac{1}{\\sqrt{3}}(25\\sqrt{3} - 0.5 P) = 50 - \\frac{P}{2\\sqrt{3}}$.",
      "4. $P(\\frac{\\sqrt{3}}{2} + \\frac{1}{2\\sqrt{3}}) = P(\\frac{2}{\\sqrt{3}}) = 50 \\implies P = 25\\sqrt{3}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 25\\sqrt{3} - 0.5 P$.",
      "٢. معادلة الحركة لأعلى: $P\\cos 30^\\circ = 25 + \\mu_s R$.",
      "٣. بالتعويض: $P\\frac{\\sqrt{3}}{2} = 50 - \\frac{P}{2\\sqrt{3}}$.",
      "٤. $P(\\frac{2}{\\sqrt{3}}) = 50 \\implies P = 25\\sqrt{3}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "An upward inclination reduces the normal reaction, lowering friction.",
    "teacherTipAr": "ميل القوة لأعلى يخفف من رد الفعل العمودي وبالتالي يقلل من الاحتكاك."
  },
  {
    "id": "stat_ch1_db_med_71",
    "titleEn": "Two Blocks Connected by a String on Horizontal Floor",
    "titleAr": "كتلتان متصلتان بخيط على أرضية أفقية خشنة",
    "difficulty": "medium",
    "questionEn": "Two blocks of weights $W_1 = 20\\text{ N}$ and $W_2 = 40\\text{ N}$ rest on a rough horizontal floor with $\\mu_s = 0.25$. They are connected by a light taut string. A horizontal pull $P$ is applied to $W_2$ away from $W_1$. Find the minimum force $P$ to initiate motion of the system.",
    "questionAr": "كتلتان وزناهما $20\\text{ نيوتن}$ و $40\\text{ نيوتن}$ على أرضية أفقية خشنة معامل احتكاكها $0.25$، متصلتان بخيط خفيف مشدود. أثرت قوة شد أفقية $P$ على الكتلة الثانية في اتجاه مبتعد عن الأولى. ما أقل قوة $P$ لبدء حركة المجموعة؟",
    "optionsEn": [
      "$15\\text{ N}$",
      "$10\\text{ N}$",
      "$5\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "$15\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$",
      "$5\\text{ نيوتن}$",
      "$20\\text{ نيوتن}$"
    ],
    "correctAnswer": "$15\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Total limiting friction of the entire system must be overcome: $P = \\mu_s(W_1 + W_2)$.",
    "hintAr": "يجب التغلب على مجموع قوتي الاحتكاك النهائي للكتلتين: $P = \\mu_s(W_1 + W_2)$.",
    "stepByStepSolutionEn": [
      "1. Normal reactions: $R_1 = 20\\text{ N}$, $R_2 = 40\\text{ N}$.",
      "2. Limiting friction forces: $F_{s1} = 0.25 \\times 20 = 5\\text{ N}$, $F_{s2} = 0.25 \\times 40 = 10\\text{ N}$.",
      "3. For the entire system to be on the verge of motion, $P = F_{s1} + F_{s2} = 5 + 10 = 15\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. ردا الفعل العموديان: $R_1 = 20\\text{ نيوتن}$، $R_2 = 40\\text{ نيوتن}$.",
      "٢. قوتا الاحتكاك السكوني الأقصى: $F_{s1} = 5\\text{ نيوتن}$، $F_{s2} = 10\\text{ نيوتن}$.",
      "٣. القوة الأفقية لبدء حركة النظام: $P = 5 + 10 = 15\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Treat connected rigid bodies in limiting equilibrium as a single system to find external required force.",
    "teacherTipAr": "اعتبر الأجسام المتصلة نظاماً واحداً لحساب القوة الخارجية الكلية المطلوبة لبدء الحركة."
  },
  {
    "id": "stat_ch1_db_med_72",
    "titleEn": "Tension in String between Connected Blocks",
    "titleAr": "الشد في الخيط بين كتلتين متصلتين",
    "difficulty": "medium",
    "questionEn": "In the setup of Q71, what is the tension $T$ in the connecting string when the system is on the verge of motion?",
    "questionAr": "في نفس تجربة السؤال السابق، ما مقدار الشد $T$ في الخيط الواصل بين الكتلتين عند وشك الحركة؟",
    "optionsEn": [
      "$5\\text{ N}$",
      "$10\\text{ N}$",
      "$15\\text{ N}$",
      "$2.5\\text{ N}$"
    ],
    "optionsAr": [
      "$5\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$",
      "$15\\text{ نيوتن}$",
      "$2.5\\text{ نيوتن}$"
    ],
    "correctAnswer": "$5\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Isolate the trailing block $W_1$: tension balances its limiting friction $T = \\mu_s W_1$.",
    "hintAr": "افصل الكتلة الخلفية $W_1$: الشد يوازن احتكاكها النهائي $T = \\mu_s W_1$.",
    "stepByStepSolutionEn": [
      "1. Considering block $W_1$ alone at limiting equilibrium: horizontal forces are tension $T$ to the right and friction $F_{s1}$ to the left.",
      "2. Therefore, $T = F_{s1} = \\mu_s W_1 = 0.25 \\times 20 = 5\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بدراسة اتزان الكتلة الأولى $W_1$ بمفردها: القوى الأفقية هي الشد $T$ يميناً وقوة الاحتكاك $F_{s1}$ يساراً.",
      "٢. إذن $T = F_{s1} = 0.25 \\times 20 = 5\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Isolating sub-elements is the standard method to expose internal forces like string tension.",
    "teacherTipAr": "فصل أجزاء النظام هو الأسلوب المنهجي لحساب القوى الداخلية مثل الشد في الخيوط."
  },
  {
    "id": "stat_ch1_db_med_73",
    "titleEn": "Friction when Incline Angle is Less than Friction Angle",
    "titleAr": "الاحتكاك عندما تكون زاوية الميل أقل من زاوية الاحتكاك",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 50\\text{ N}$ rests on a rough plane inclined at $\\theta = 30^\\circ$ to the horizontal. If $\\mu_s = 0.8$, find the magnitude of the friction force $F$ acting on the body when no external forces act on it.",
    "questionAr": "جسم وزنه $50\\text{ نيوتن}$ مستقر على مستوى خشن يميل بزاوية $30^\\circ$ على الأفقي. إذا كان $\\mu_s = 0.8$، فما مقدار قوة الاحتكاك $F$ المؤثرة على الجسم عند عدم وجود أي قوى خارجية؟",
    "optionsEn": [
      "$25\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$",
      "$40\\text{ N}$",
      "$34.6\\text{ N}$"
    ],
    "optionsAr": [
      "$25\\text{ نيوتن}$",
      "$20\\sqrt{3}\\text{ نيوتن}$",
      "$40\\text{ نيوتن}$",
      "$34.6\\text{ نيوتن}$"
    ],
    "correctAnswer": "$25\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Check if $\\tan\\theta \\le \\mu_s$. Here $\\tan(30^\\circ) \\approx 0.577 < 0.8$, so the body is in stable equilibrium, not limiting! Friction equals $W\\sin\\theta$.",
    "hintAr": "قارن بين $\\tan\\theta$ و $\\mu_s$: بما أن $\\tan 30^\\circ < 0.8$ فالجسم في اتزان غير نهائي، وقوة الاحتكاك تساوي $W\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. Angle of inclination: $\\tan(30^\\circ) = \\frac{1}{\\sqrt{3}} \\approx 0.577$.",
      "2. Since $\\tan\\theta < \\mu_s$ ($0.577 < 0.8$), the body is safely at rest and NOT on the verge of sliding.",
      "3. Therefore, friction is static (non-limiting): $F = W\\sin(30^\\circ) = 50 \\times 0.5 = 25\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. $\\tan 30^\\circ \\approx 0.577 < 0.8 = \\mu_s$.",
      "٢. الجسم في حالة اتزان مستقر وليس على وشك الحركة إطلاقاً.",
      "٣. إذن قوة الاحتكاك غير نهائية وتساوي مركبة الوزن الموازية: $F = 50\\sin 30^\\circ = 25\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Common trap: do NOT calculate $\\mu_s R$ unless the body is explicitly stated to be on the verge of motion!",
    "teacherTipAr": "فخ شائع: لا تحسب $\\mu_s R$ إلا إذا كان الجسم على وشك الحركة صراحة! هنا $F = W\\sin\\theta$ فقط."
  },
  {
    "id": "stat_ch1_db_med_74",
    "titleEn": "Critical Condition for Impending Motion Down Incline",
    "titleAr": "الشرط الحرج لوشك الانزلاق لأسفل المستوى",
    "difficulty": "medium",
    "questionEn": "A body rests on a rough inclined plane under the action of its weight alone. Which condition guarantees that the body is on the exact verge of sliding down?",
    "questionAr": "جسم مستقر على مستوى مائل خشن تحت تأثير وزنه فقط. أي من الشروط الآتية يضمن أن الجسم على وشك الانزلاق لأسفل تماماً؟",
    "optionsEn": [
      "$\\theta = \\lambda$",
      "$\\theta < \\lambda$",
      "$\\theta > \\lambda$",
      "$\\theta = 90^\\circ - \\lambda$"
    ],
    "optionsAr": [
      "$\\theta = \\lambda$",
      "$\\theta < \\lambda$",
      "$\\theta > \\lambda$",
      "$\\theta = 90^\\circ - \\lambda$"
    ],
    "correctAnswer": "$\\theta = \\lambda$",
    "correctIndex": 0,
    "hintEn": "At limiting equilibrium under gravity alone: $W\\sin\\theta = \\mu_s W\\cos\\theta \\implies \\tan\\theta = \\mu_s = \\tan\\lambda \\implies \\theta = \\lambda$.",
    "hintAr": "عند وشك الانزلاق تحت الوزن وحده: $\\tan\\theta = \\tan\\lambda \\implies \\theta = \\lambda$.",
    "stepByStepSolutionEn": [
      "1. Force down plane: $W\\sin\\theta$.",
      "2. Maximum friction force: $F_s = \\mu_s R = \\mu_s W\\cos\\theta$.",
      "3. Impending motion requires $W\\sin\\theta = \\mu_s W\\cos\\theta \\implies \\tan\\theta = \\mu_s$.",
      "4. Since $\\mu_s = \\tan\\lambda$, this gives $\\theta = \\lambda$."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة الوزن لأسفل: $W\\sin\\theta$.",
      "٢. الاحتكاك النهائي: $\\mu_s W\\cos\\theta$.",
      "٣. عند وشك الانزلاق: $W\\sin\\theta = \\mu_s W\\cos\\theta \\implies \\tan\\theta = \\mu_s$.",
      "٤. بما أن $\\mu_s = \\tan\\lambda$، إذن $\\theta = \\lambda$."
    ],
    "teacherTipEn": "If $\\theta < \\lambda$ the body stays at rest; if $\\theta > \\lambda$ it slides down accelerated.",
    "teacherTipAr": "إذا كان $\\theta < \\lambda$ فالجسم ساكن، وإذا كان $\\theta > \\lambda$ ينزلق الجسم متسارعاً."
  },
  {
    "id": "stat_ch1_db_med_75",
    "titleEn": "Resultant Reaction on Verge of Sliding under Gravity",
    "titleAr": "رد الفعل المحصل عند وشك الانزلاق تحت الوزن فقط",
    "difficulty": "medium",
    "questionEn": "A body of weight $W$ is on the verge of sliding down a rough plane inclined at angle $\\theta$ under its weight alone. What is the magnitude of the resultant reaction $R'$ of the plane on the body?",
    "questionAr": "جسم وزنه $W$ على وشك الانزلاق لأسفل مستوى مائل بزاوية $\\theta$ تحت تأثير وزنه فقط. ما مقدار رد الفعل المحصل $R'$ للمستوى على الجسم؟",
    "optionsEn": [
      "$W$",
      "$W\\cos\\theta$",
      "$W\\sin\\theta$",
      "$W\\sec\\theta$"
    ],
    "optionsAr": [
      "$W$",
      "$W\\cos\\theta$",
      "$W\\sin\\theta$",
      "$W\\sec\\theta$"
    ],
    "correctAnswer": "$W$",
    "correctIndex": 0,
    "hintEn": "The body is in equilibrium under only TWO forces: its weight $W$ and the resultant reaction $R'$. Hence $R' = W$.",
    "hintAr": "الجسم متزن تحت تأثير قوتين فقط: وزنه $W$ ورد الفعل المحصل $R'$. إذن $R' = W$.",
    "stepByStepSolutionEn": [
      "1. The only forces acting on the body are gravity (weight $W$ vertically downward) and the plane reaction $R'$.",
      "2. For two-force equilibrium, the two forces must be equal in magnitude and opposite in direction.",
      "3. Therefore, $R' = W$, and $R'$ acts vertically upward."
    ],
    "stepByStepSolutionAr": [
      "١. القوتان المؤثرتان على الجسم هما الوزن $W$ رأسياً لأسفل ورد فعل السطح الكلي $R'$.",
      "٢. لاتزان جسم تحت تأثير قوتين فقط، يجب أن تكونا متساويتين في المقدار ومتضادتين في الاتجاه وعلى خط عمل واحد.",
      "٣. إذن $R' = W$ رأسياً لأعلى."
    ],
    "teacherTipEn": "Alternatively, $R' = \\sqrt{R^2 + F_s^2} = \\sqrt{(W\\cos\\theta)^2 + (W\\sin\\theta)^2} = W$. Beautiful result!",
    "teacherTipAr": "طريقة بديلة: $R' = \\sqrt{(W\\cos\\theta)^2 + (W\\sin\\theta)^2} = W$ دائماً!"
  },
  {
    "id": "stat_ch1_db_med_76",
    "titleEn": "Pushing a Block Upward against a Ceiling",
    "titleAr": "ضغط جسم رأسياً لأعلى ضد سقف حجرة خشن",
    "difficulty": "medium",
    "questionEn": "A block of weight $W = 20\\text{ N}$ is pressed vertically upward against a horizontal ceiling by a vertical force $F_v = 50\\text{ N}$. If the coefficient of static friction between block and ceiling is $\\mu_s = 0.4$, find the horizontal force $P$ required to put the block on the verge of motion.",
    "questionAr": "جسم وزنه $20\\text{ نيوتن}$ يُضغط به رأسياً لأعلى ضد سقف أفقي بقوة رأسية $50\\text{ نيوتن}$. إذا كان معامل الاحتكاك السكوني $0.4$، فما القوة الأفقية $P$ اللازمة لجعل الجسم على وشك الحركة؟",
    "optionsEn": [
      "$12\\text{ N}$",
      "$20\\text{ N}$",
      "$8\\text{ N}$",
      "$28\\text{ N}$"
    ],
    "optionsAr": [
      "$12\\text{ نيوتن}$",
      "$20\\text{ نيوتن}$",
      "$8\\text{ نيوتن}$",
      "$28\\text{ نيوتن}$"
    ],
    "correctAnswer": "$12\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Vertical equilibrium gives normal reaction against ceiling: $R = F_v - W = 50 - 20 = 30\\text{ N}$.",
    "hintAr": "الاتزان الرأسي يحدد رد الفعل ضد السقف: $R = F_v - W = 30\\text{ نيوتن}$.",
    "stepByStepSolutionEn": [
      "1. Vertical forces: upward push $F_v = 50\\text{ N}$, downward weight $W = 20\\text{ N}$, downward ceiling normal reaction $R$.",
      "2. Vertical equilibrium: $R + W = F_v \\implies R = 50 - 20 = 30\\text{ N}$.",
      "3. Required horizontal force for impending motion: $P = \\mu_s R = 0.4 \\times 30 = 12\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الاتزان الرأسي: رد فعل السقف لأسفل $R$ مع الوزن $W$ يوازنان القوة الرافعة $F_v$.",
      "٢. $R = 50 - 20 = 30\\text{ نيوتن}$.",
      "٣. القوة الأفقية المطلوبة: $P = \\mu_s R = 0.4 \\times 30 = 12\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice that weight opposes the push against a ceiling, reducing the normal reaction.",
    "teacherTipAr": "الوزن هنا يعمل ضد قوة الرفع، مما يقلل من رد الفعل العمودي ضد السقف."
  },
  {
    "id": "stat_ch1_db_med_77",
    "titleEn": "Equilibrium on Incline with Pulley and Hanging Mass",
    "titleAr": "اتزان كتلة على مستوى مائل متصلة بكتلة متدلية عبر بكرة",
    "difficulty": "medium",
    "questionEn": "A body of weight $W_1 = 30\\text{ N}$ on a rough plane inclined at $30^\\circ$ to horizontal ($\\mu_s = \\frac{\\sqrt{3}}{3}$) is connected by a light string passing over a smooth pulley at the top of the incline to a hanging mass of weight $W_2$. What is the MAXIMUM value of $W_2$ for which the system remains in equilibrium?",
    "questionAr": "جسم وزنه $W_1 = 30\\text{ نيوتن}$ على مستوى خشن يميل بزاوية $30^\\circ$ على الأفقي ($\\mu_s = \\frac{\\sqrt{3}}{3}$)، متصل بخيط خفيف يمر على بكرة ملساء عند قمة المستوى بكتلة متدلية وزنها $W_2$. ما أقصى قيمة للوزن $W_2$ تظل معها المجموعة متزنة؟",
    "optionsEn": [
      "$30\\text{ N}$",
      "$15\\text{ N}$",
      "$45\\text{ N}$",
      "$25\\text{ N}$"
    ],
    "optionsAr": [
      "$30\\text{ نيوتن}$",
      "$15\\text{ نيوتن}$",
      "$45\\text{ نيوتن}$",
      "$25\\text{ نيوتن}$"
    ],
    "correctAnswer": "$30\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Maximum $W_2$ causes impending motion UP the incline, so friction acts down: $T = W_1\\sin\\theta + \\mu_s R_1$.",
    "hintAr": "أقصى وزن $W_2$ يجعل الجسم على وشك الحركة لأعلى المستوى: $T = W_1\\sin\\theta + \\mu_s R_1$.",
    "stepByStepSolutionEn": [
      "1. For hanging mass: $T = W_2$.",
      "2. Normal reaction on incline: $R_1 = 30\\cos(30^\\circ) = 15\\sqrt{3}\\text{ N}$.",
      "3. Maximum friction force: $F_s = \\frac{\\sqrt{3}}{3} \\times 15\\sqrt{3} = 15\\text{ N}$.",
      "4. At max $W_2$, $W_1$ is on the verge of moving up: $T = W_1\\sin(30^\\circ) + F_s = 15 + 15 = 30\\text{ N} \\implies W_2 = 30\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. شد الخيط يساوي وزن الكتلة المعلقة: $T = W_2$.",
      "٢. رد الفعل العمودي: $R_1 = 30\\cos 30^\\circ = 15\\sqrt{3}\\text{ نيوتن}$.",
      "٣. أقصى احتكاك: $F_s = \\frac{\\sqrt{3}}{3} \\times 15\\sqrt{3} = 15\\text{ نيوتن}$.",
      "٤. أقصى وزن يجعل الكتلة الأولى على وشك الصعود لأعلى: $W_2 = 30\\sin 30^\\circ + 15 = 15 + 15 = 30\\text{ نيوتن}$."
    ],
    "teacherTipEn": "The minimum value of $W_2$ would correspond to impending downward motion: $W_{2,min} = 15 - 15 = 0\\text{ N}$.",
    "teacherTipAr": "أقل قيمة لـ $W_2$ لمنع الانزلاق لأسفل هي $15 - 15 = 0\\text{ نيوتن}$ (متزن بذاته)."
  },
  {
    "id": "stat_ch1_db_med_78",
    "titleEn": "Two Perpendicular Horizontal Forces on Horizontal Plane",
    "titleAr": "قوتان أفقيتان متعامدتان على مستوى أفقي",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 50\\text{ N}$ rests on a rough horizontal plane with $\\mu_s = 0.5$. Two horizontal forces of magnitudes $F_1 = 15\\text{ N}$ and $F_2 = 20\\text{ N}$ act on the body at a right angle ($90^\\circ$). Which statement is correct?",
    "questionAr": "جسم وزنه $50\\text{ نيوتن}$ على مستوى أفقي خشن معامل احتكاكه $0.5$. تؤثر عليه قوتان أفقيتان متعامدتان مقدارهما $15\\text{ نيوتن}$ و $20\\text{ نيوتن}$. أي العبارات الآتية صحيحة؟",
    "optionsEn": [
      "The body is in limiting equilibrium ($F = 25\\text{ N} = F_s$)",
      "The body is accelerating",
      "The body is in non-limiting equilibrium with $F = 20\\text{ N}$",
      "The body cannot remain in equilibrium"
    ],
    "optionsAr": [
      "الجسم في حالة اتزان نهائي على وشك الحركة ($F = 25\\text{ نيوتن} = F_s$)",
      "الجسم يتحرك بعجلة متسارعة",
      "الجسم متزن اتزاناً غير نهائي",
      "لا يمكن للجسم أن يتزن"
    ],
    "correctAnswer": "The body is in limiting equilibrium ($F = 25\\text{ N} = F_s$)",
    "correctIndex": 0,
    "hintEn": "Find resultant of applied forces: $R_{applied} = \\sqrt{15^2 + 20^2} = 25\\text{ N}$. Compare with $F_s = \\mu_s W$.",
    "hintAr": "محصلة القوتين = $\\sqrt{15^2 + 20^2} = 25\\text{ نيوتن}$. قارن مع $F_s = \\mu_s W$.",
    "stepByStepSolutionEn": [
      "1. Resultant horizontal applied force: $R_H = \\sqrt{F_1^2 + F_2^2} = \\sqrt{15^2 + 20^2} = \\sqrt{225 + 400} = 25\\text{ N}$.",
      "2. Maximum static friction: $F_s = \\mu_s W = 0.5 \\times 50 = 25\\text{ N}$.",
      "3. Since $R_H = F_s$, the body is in limiting equilibrium, on the verge of moving in the direction of the resultant horizontal force."
    ],
    "stepByStepSolutionAr": [
      "١. محصلة القوتين الأفقيتين: $R_H = \\sqrt{15^2 + 20^2} = 25\\text{ نيوتن}$.",
      "٢. قوة الاحتكاك السكوني النهائي: $F_s = 0.5 \\times 50 = 25\\text{ نيوتن}$.",
      "٣. بما أن المحصلة تساوي تماماً قوة الاحتكاك النهائي، فالجسم في اتزان نهائي على وشك الحركة."
    ],
    "teacherTipEn": "Static friction always opposes the resultant of all coplanar external forces tending to cause motion.",
    "teacherTipAr": "قوة الاحتكاك تعاكس دائماً محصلة جميع القوى الخارجية المؤثرة في مستوى الحركة."
  },
  {
    "id": "stat_ch1_db_med_79",
    "titleEn": "Two Horizontal Forces Enclosing Angle 60 Degrees",
    "titleAr": "قوتان أفقيتان بينهما زاوية 60 درجة",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 100\\text{ N}$ rests on a rough horizontal plane. Two horizontal forces of magnitudes $30\\text{ N}$ and $50\\text{ N}$ enclose an angle of $60^\\circ$ act on it. If the body is on the verge of motion, what is $\\mu_s$?",
    "questionAr": "جسم وزنه $100\\text{ نيوتن}$ موضوع على مستوى أفقي خشن. تؤثر عليه قوتان أفقيتان مقدارهما $30\\text{ نيوتن}$ و $50\\text{ نيوتن}$ بينهما زاوية $60^\\circ$. فإذا كان الجسم على وشك الحركة، فما معامل الاحتكاك السكوني $\\mu_s$؟",
    "optionsEn": [
      "$0.7$",
      "$0.8$",
      "$0.65$",
      "$0.75$"
    ],
    "optionsAr": [
      "$0.7$",
      "$0.8$",
      "$0.65$",
      "$0.75$"
    ],
    "correctAnswer": "$0.7$",
    "correctIndex": 0,
    "hintEn": "Use resultant formula: $R^2 = F_1^2 + F_2^2 + 2F_1 F_2\\cos(60^\\circ)$.",
    "hintAr": "محصلة القوتين: $R^2 = F_1^2 + F_2^2 + 2F_1 F_2\\cos 60^\\circ$.",
    "stepByStepSolutionEn": [
      "1. Resultant of horizontal forces: $R_H = \\sqrt{30^2 + 50^2 + 2(30)(50)\\cos(60^\\circ)} = \\sqrt{900 + 2500 + 1500} = \\sqrt{4900} = 70\\text{ N}$.",
      "2. Normal reaction: $R = W = 100\\text{ N}$.",
      "3. Limiting equilibrium condition: $F_s = R_H \\implies \\mu_s \\times 100 = 70 \\implies \\mu_s = 0.7$."
    ],
    "stepByStepSolutionAr": [
      "١. محصلة القوتين الأفقيتين: $R_H = \\sqrt{30^2 + 50^2 + 2(30)(50)\\cos 60^\\circ} = \\sqrt{4900} = 70\\text{ نيوتن}$.",
      "٢. رد الفعل العمودي: $R = W = 100\\text{ نيوتن}$.",
      "٣. عند وشك الحركة: $\\mu_s \\times 100 = 70 \\implies \\mu_s = 0.7$."
    ],
    "teacherTipEn": "Classic question testing the vector resultant of forces combined with friction equilibrium.",
    "teacherTipAr": "سؤال كلاسيكي يربط بين محصلة القوى المتلاقية والاتزان مع الاحتكاك."
  },
  {
    "id": "stat_ch1_db_med_80",
    "titleEn": "Force Inclined Below Horizontal: Impossible Motion Condition",
    "titleAr": "قوة دفع مائلة لأسفل: شرط استحالة الحركة",
    "difficulty": "medium",
    "questionEn": "A body rests on a rough horizontal plane with friction angle $\\lambda$. A pushing force $P$ acts at an angle $\\theta$ below the horizontal. If $\\theta \\ge 90^\\circ - \\lambda$, then:",
    "questionAr": "جسم على مستوى أفقي خشن زاوية احتكاكه $\\lambda$. تؤثر عليه قوة ضغط $P$ تميل بزاوية $\\theta$ لأسفل على الأفقي. إذا كانت $\\theta \\ge 90^\\circ - \\lambda$، فإن:",
    "optionsEn": [
      "The body cannot move, no matter how large $P$ is",
      "The body will always move for any $P > 0$",
      "The body moves with constant velocity",
      "Friction becomes zero"
    ],
    "optionsAr": [
      "يستحيل تحريك الجسم مهما بلغت قيمة القوة $P$",
      "يتحرك الجسم دائماً لأي قيمة $P > 0$",
      "يتحرك الجسم بسرعة منتظمة",
      "تنعدم قوة الاحتكاك"
    ],
    "correctAnswer": "The body cannot move, no matter how large $P$ is",
    "correctIndex": 0,
    "hintEn": "Horizontal pushing component is $P\\cos\\theta$; friction limit is $\\mu_s(W + P\\sin\\theta)$. At large $P$, compare $\\cos\\theta$ and $\\mu_s\\sin\\theta$.",
    "hintAr": "قارن بين المركبة الأفقية $P\\cos\\theta$ والاحتكاك الناتج عن ضغط القوة $\\mu_s P\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = W + P\\sin\\theta$.",
      "2. Horizontal driving force: $F_D = P\\cos\\theta$.",
      "3. Limiting friction: $F_s = \\mu_s R = \\mu_s W + \\mu_s P\\sin\\theta$.",
      "4. For motion to be possible, $P\\cos\\theta > \\mu_s W + \\mu_s P\\sin\\theta \\implies P(\\cos\\theta - \\mu_s\\sin\\theta) > \\mu_s W$.",
      "5. If $\\cos\\theta - \\mu_s\\sin\\theta \\le 0 \\implies \\cot\\theta \\le \\mu_s = \\tan\\lambda = \\cot(90^\\circ - \\lambda) \\implies \\theta \\ge 90^\\circ - \\lambda$, the coefficient of $P$ is non-positive, making motion impossible for any finite $P$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي يزداد بالقوة: $R = W + P\\sin\\theta$.",
      "٢. القوة المحركة الأفقية: $P\\cos\\theta$.",
      "٣. أقصى احتكاك: $\\mu_s W + \\mu_s P\\sin\\theta$.",
      "٤. لتحريك الجسم يلزم $P(\\cos\\theta - \\mu_s\\sin\\theta) > \\mu_s W$.",
      "٥. إذا كان $\\theta \\ge 90^\\circ - \\lambda$ يكون القوس سالباً أو صفراً، فيستحيل تحريك الجسم مهما زادت القوة."
    ],
    "teacherTipEn": "This is the self-locking push phenomenon: pushing harder increases friction faster than the driving component.",
    "teacherTipAr": "هذه ظاهرة القفل الذاتي: الضغط بقوة أكبر يزيد الاحتكاك بمعدل أسرع من زيادة المركبة الأفقية المحركة!"
  },
  {
    "id": "stat_ch1_db_med_81",
    "titleEn": "Minimum Pull on Horizontal Plane",
    "titleAr": "أقل قوة شد لتحريك جسم على مستوى أفقي",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 60\\text{ N}$ rests on a rough horizontal plane with $\\mu_s = \\frac{1}{\\sqrt{3}}$ (so $\\lambda = 30^\\circ$). What is the minimum pulling force $P$ acting in ANY direction that can put the body on the verge of motion?",
    "questionAr": "جسم وزنه $60\\text{ نيوتن}$ موضوع على مستوى أفقي خشن معامل احتكاكه $\\frac{1}{\\sqrt{3}}$ (أي $\\lambda = 30^\\circ$). ما هي أقل قوة شد $P$ في أي اتجاه يمكن أن تجعل الجسم على وشك الحركة؟",
    "optionsEn": [
      "$30\\text{ N}$",
      "$60\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$",
      "$15\\text{ N}$"
    ],
    "optionsAr": [
      "$30\\text{ نيوتن}$",
      "$60\\text{ نيوتن}$",
      "$20\\sqrt{3}\\text{ نيوتن}$",
      "$15\\text{ نيوتن}$"
    ],
    "correctAnswer": "$30\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The minimum force is $P_{min} = W\\sin\\lambda$, occurring when the pull is inclined at angle $\\lambda$ to the horizontal.",
    "hintAr": "أقل قوة شد هي $P_{min} = W\\sin\\lambda$ وتحدث عندما تصنع زاوية $\\lambda$ مع الأفقي.",
    "stepByStepSolutionEn": [
      "1. For a pull at angle $\\alpha$ above horizontal: $P\\cos\\alpha = \\mu_s(W - P\\sin\\alpha) \\implies P = \\frac{\\mu_s W}{\\cos\\alpha + \\mu_s\\sin\\alpha} = \\frac{W\\sin\\lambda}{\\cos(\\alpha - \\lambda)}$.",
      "2. This expression is minimized when the denominator equals 1, i.e., $\\alpha = \\lambda$.",
      "3. $P_{min} = W\\sin\\lambda = 60\\sin(30^\\circ) = 60 \\times 0.5 = 30\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتحليل، نجد أن $P = \\frac{W\\sin\\lambda}{\\cos(\\alpha - \\lambda)}$.",
      "٢. تصل القوة لأدنى قيمة عندما يكون المقام أقصى ما يمكن (يساوي 1)، أي $\\alpha = \\lambda$.",
      "٣. $P_{min} = W\\sin\\lambda = 60\\sin 30^\\circ = 30\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Memorize $P_{min} = W\\sin\\lambda$ at angle $\\alpha = \\lambda$; it is tested frequently in the Egyptian curriculum.",
    "teacherTipAr": "احفظ القانون الذهبي: أقل قوة شد على الأفقي هي $W\\sin\\lambda$ عند زاوية ميل $\\alpha = \\lambda$."
  },
  {
    "id": "stat_ch1_db_med_82",
    "titleEn": "Angle of Minimum Pull with Plane",
    "titleAr": "زاوية ميل أقل قوة شد على المستوى الأفقي",
    "difficulty": "medium",
    "questionEn": "In Q81, at what angle above the horizontal must the minimum force $P = 30\\text{ N}$ be inclined?",
    "questionAr": "في السؤال السابق، ما هي زاوية ميل أقل قوة شد $P = 30\\text{ نيوتن}$ على الأفقي؟",
    "optionsEn": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$0^\\circ$"
    ],
    "optionsAr": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$0^\\circ$"
    ],
    "correctAnswer": "$30^\\circ$",
    "correctIndex": 0,
    "hintEn": "The minimum force is achieved when the angle of inclination $\\alpha$ equals the angle of friction $\\lambda$.",
    "hintAr": "تتحقق أقل قوة عندما تساوي زاوية ميل القوة زاوية الاحتكاك: $\\alpha = \\lambda$.",
    "stepByStepSolutionEn": [
      "1. The force expression is $P(\\alpha) = \\frac{W\\sin\\lambda}{\\cos(\\alpha - \\lambda)}$.",
      "2. For $P$ to be minimal, the denominator $\\cos(\\alpha - \\lambda)$ must be maximized.",
      "3. Maximum of $\\cos(\\alpha - \\lambda)$ is 1, occurring when $\\alpha - \\lambda = 0 \\implies \\alpha = \\lambda$.",
      "4. Since $\\lambda = 30^\\circ$, $\\alpha = 30^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القوة $P = \\frac{W\\sin\\lambda}{\\cos(\\alpha - \\lambda)}$.",
      "٢. المقام يصل لأقصى قيمة (1) عندما $\\alpha - \\lambda = 0$.",
      "٣. إذن $\\alpha = \\lambda = 30^\\circ$."
    ],
    "teacherTipEn": "Notice that $\\alpha = \\lambda$ means the applied force $P$ is perpendicular to the resultant reaction $R'$.",
    "teacherTipAr": "لاحظ أن $\\alpha = \\lambda$ تجعل القوة المؤثرة $P$ عمودية على رد الفعل المحصل $R'$."
  },
  {
    "id": "stat_ch1_db_med_83",
    "titleEn": "Ratio of Upward to Downward Limiting Force",
    "titleAr": "النسبة بين قوتي وشك الحركة لأعلى ولأسفل على مستوى مائل",
    "difficulty": "medium",
    "questionEn": "A body on a rough plane inclined at $30^\\circ$ to the horizontal requires a force $P_2$ along the plane to make it on the verge of moving up that is TWICE the force $P_1$ along the plane required to prevent it from sliding down. Find $\\mu_s$.",
    "questionAr": "جسم على مستوى خشن يميل بزاوية $30^\\circ$ على الأفقي. القوة الموازية لخط أكبر ميل لأعلى اللازمة لجعله على وشك الحركة لأعلى ($P_2$) تساوي ضعف القوة اللازمة لمنعه من الانزلاق لأسفل ($P_1$). ما قيمة $\\mu_s$؟",
    "optionsEn": [
      "$\\frac{\\sqrt{3}}{9}$",
      "$\\frac{\\sqrt{3}}{3}$",
      "$\\frac{\\sqrt{3}}{6}$",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "$\\frac{\\sqrt{3}}{9}$",
      "$\\frac{\\sqrt{3}}{3}$",
      "$\\frac{\\sqrt{3}}{6}$",
      "$\\frac{1}{3}$"
    ],
    "correctAnswer": "$\\frac{\\sqrt{3}}{9}$",
    "correctIndex": 0,
    "hintEn": "$P_2 = W\\sin\\theta + \\mu_s W\\cos\\theta$, $P_1 = W\\sin\\theta - \\mu_s W\\cos\\theta$. Set $P_2 = 2P_1$.",
    "hintAr": "عوض في $P_2 = 2P_1$ وحل بالنسبة لـ $\\mu_s$.",
    "stepByStepSolutionEn": [
      "1. $P_2 = W\\sin(30^\\circ) + \\mu_s W\\cos(30^\\circ)$.",
      "2. $P_1 = W\\sin(30^\\circ) - \\mu_s W\\cos(30^\\circ)$.",
      "3. Given $P_2 = 2P_1 \\implies \\sin(30^\\circ) + \\mu_s\\cos(30^\\circ) = 2(\\sin(30^\\circ) - \\mu_s\\cos(30^\\circ))$.",
      "4. $\\sin(30^\\circ) + \\mu_s\\cos(30^\\circ) = 2\\sin(30^\\circ) - 2\\mu_s\\cos(30^\\circ) \\implies 3\\mu_s\\cos(30^\\circ) = \\sin(30^\\circ)$.",
      "5. $\\mu_s = \\frac{1}{3}\\tan(30^\\circ) = \\frac{1}{3} \\times \\frac{1}{\\sqrt{3}} = \\frac{1}{3\\sqrt{3}} = \\frac{\\sqrt{3}}{9}$."
    ],
    "stepByStepSolutionAr": [
      "١. $P_2 = W(\\sin 30^\\circ + \\mu_s\\cos 30^\\circ)$.",
      "٢. $P_1 = W(\\sin 30^\\circ - \\mu_s\\cos 30^\\circ)$.",
      "٣. $P_2 = 2P_1 \\implies 3\\mu_s\\cos 30^\\circ = \\sin 30^\\circ$.",
      "٤. $\\mu_s = \\frac{1}{3}\\tan 30^\\circ = \\frac{\\sqrt{3}}{9}$."
    ],
    "teacherTipEn": "Notice that $\\mu_s = \\frac{1}{3}\\tan\\theta$ when $P_2 = 2P_1$.",
    "teacherTipAr": "قاعدة سريعة: عندما تكون القوة الكبرى ضعف الصغرى، فإن $\\mu_s = \\frac{1}{3}\\tan\\theta$."
  },
  {
    "id": "stat_ch1_db_med_84",
    "titleEn": "Force Parallel to Incline when Friction is Non-Limiting",
    "titleAr": "قوة موازية للمستوى عندما يكون الاحتكاك غير نهائي",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 50\\text{ N}$ rests on a rough plane inclined at $30^\\circ$ to the horizontal with $\\mu_s = 0.5$. An upward force along the line of greatest slope $P = 20\\text{ N}$ is applied. What is the magnitude and direction of the static friction force $F$?",
    "questionAr": "جسم وزنه $50\\text{ نيوتن}$ على مستوى خشن يميل بزاوية $30^\\circ$ ومعامل احتكاكه $0.5$. أثرت قوة موازية لخط أكبر ميل لأعلى $P = 20\\text{ نيوتن}$. ما مقدار واتجاه قوة الاحتكاك $F$؟",
    "optionsEn": [
      "$5\\text{ N}$ up the plane",
      "$5\\text{ N}$ down the plane",
      "$25\\text{ N}$ up the plane",
      "$21.65\\text{ N}$ down the plane"
    ],
    "optionsAr": [
      "$5\\text{ نيوتن}$ لأعلى المستوى",
      "$5\\text{ نيوتن}$ لأسفل المستوى",
      "$25\\text{ نيوتن}$ لأعلى المستوى",
      "$21.65\\text{ نيوتن}$ لأسفل المستوى"
    ],
    "correctAnswer": "$5\\text{ N}$ up the plane",
    "correctIndex": 0,
    "hintEn": "Compare the applied pull $P = 20\\text{ N}$ with the gravity component $W\\sin(30^\\circ) = 25\\text{ N}$.",
    "hintAr": "قارن بين قوة الشد $20\\text{ نيوتن}$ ومركبة الوزن $25\\text{ نيوتن}$.",
    "stepByStepSolutionEn": [
      "1. Downward component of weight: $W\\sin(30^\\circ) = 50 \\times 0.5 = 25\\text{ N}$.",
      "2. Upward applied force: $P = 20\\text{ N}$.",
      "3. Since $W\\sin(30^\\circ) > P$, gravity tends to pull the body down.",
      "4. Friction must act UP the plane to maintain equilibrium: $P + F = W\\sin(30^\\circ) \\implies 20 + F = 25 \\implies F = 5\\text{ N}$ up the plane.",
      "5. Check limiting value: $F_s = 0.5 \\times 50\\cos(30^\\circ) = 21.65\\text{ N}$. Since $5 < 21.65$, the body is in static equilibrium."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة الوزن لأسفل: $50\\sin 30^\\circ = 25\\text{ نيوتن}$.",
      "٢. قوة الشد لأعلى: $20\\text{ نيوتن}$.",
      "٣. القوة لأسفل أكبر، إذن الاحتكاك يعمل لأعلى لحفظ الاتزان.",
      "٤. $P + F = 25 \\implies F = 5\\text{ نيوتن}$ لأعلى المستوى.",
      "٥. بما أن $5 < F_s = 21.65\\text{ نيوتن}$، فالجسم ساكن."
    ],
    "teacherTipEn": "Friction always opposes the net tendency of motion, not necessarily the applied force alone.",
    "teacherTipAr": "الاحتكاك يقاوم دائماً اتجاه الحركة المحتملة، وفي هذه الحالة يعمل لأعلى لمعادلة نقص قوة الشد."
  },
  {
    "id": "stat_ch1_db_med_85",
    "titleEn": "Equilibrium when Force Exceeds Gravity on Incline",
    "titleAr": "اتجاه الاحتكاك عندما تتغلب القوة على مركبة الوزن",
    "difficulty": "medium",
    "questionEn": "Under the same conditions as Q84 ($W = 50\\text{ N}, \\theta = 30^\\circ, \\mu_s = 0.5$), if the upward force is increased to $P = 35\\text{ N}$, what is the magnitude and direction of the friction force $F$?",
    "questionAr": "تحت نفس شروط السؤال السابق، إذا زادت القوة لأعلى لتصبح $P = 35\\text{ نيوتن}$، فما مقدار واتجاه قوة الاحتكاك $F$؟",
    "optionsEn": [
      "$10\\text{ N}$ down the plane",
      "$10\\text{ N}$ up the plane",
      "$25\\text{ N}$ down the plane",
      "$21.65\\text{ N}$ up the plane"
    ],
    "optionsAr": [
      "$10\\text{ نيوتن}$ لأسفل المستوى",
      "$10\\text{ نيوتن}$ لأعلى المستوى",
      "$25\\text{ نيوتن}$ لأسفل المستوى",
      "$21.65\\text{ نيوتن}$ لأعلى المستوى"
    ],
    "correctAnswer": "$10\\text{ N}$ down the plane",
    "correctIndex": 0,
    "hintEn": "$P = 35\\text{ N}$ is greater than $W\\sin(30^\\circ) = 25\\text{ N}$, so tendency of motion is UP the plane.",
    "hintAr": "$P = 35\\text{ نيوتن}$ أكبر من مركبة الوزن ($25\\text{ نيوتن}$)، فالحركة المتوقعة لأعلى.",
    "stepByStepSolutionEn": [
      "1. Upward force $P = 35\\text{ N}$ exceeds downward gravity component $W\\sin(30^\\circ) = 25\\text{ N}$.",
      "2. Hence the body tends to move up the plane.",
      "3. Static friction acts DOWN the plane: $P = W\\sin(30^\\circ) + F \\implies 35 = 25 + F \\implies F = 10\\text{ N}$ down the plane.",
      "4. Since $10 < F_s = 21.65\\text{ N}$, the body remains in equilibrium."
    ],
    "stepByStepSolutionAr": [
      "١. القوة لأعلى $35\\text{ نيوتن}$ أكبر من مركبة الوزن لأسفل $25\\text{ نيوتن}$.",
      "٢. إذن يميل الجسم للحركة لأعلى، فيعمل الاحتكاك لأسفل.",
      "٣. $35 = 25 + F \\implies F = 10\\text{ نيوتن}$ لأسفل المستوى.",
      "٤. بما أن $10 < F_s = 21.65\\text{ نيوتن}$ فالجسم متزن."
    ],
    "teacherTipEn": "Notice how friction reversed direction from $+5\\text{ N}$ (up) to $-10\\text{ N}$ (down) as $P$ grew.",
    "teacherTipAr": "لاحظ كيف انعكس اتجاه الاحتكاك من أعلى إلى أسفل عندما تجاوزت القوة مركبة الوزن."
  },
  {
    "id": "stat_ch1_db_med_86",
    "titleEn": "Normal Reaction under Upward Force at Angle",
    "titleAr": "رد الفعل العمودي تحت تأثير قوة شد مائلة على الأفقي",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 80\\text{ N}$ rests on a rough horizontal plane. A force $P = 50\\text{ N}$ pulls the body at an angle $\\theta$ above the horizontal where $\\sin\\theta = \\frac{3}{5}$. Find the normal reaction $R$.",
    "questionAr": "جسم وزنه $80\\text{ نيوتن}$ على مستوى أفقي خشن. تؤثر عليه قوة شد $P = 50\\text{ نيوتن}$ تميل على الأفقي لأعلى بزاوية $\\theta$ حيث $\\sin\\theta = \\frac{3}{5}$. ما مقدار رد الفعل العمودي $R$؟",
    "optionsEn": [
      "$50\\text{ N}$",
      "$40\\text{ N}$",
      "$80\\text{ N}$",
      "$110\\text{ N}$"
    ],
    "optionsAr": [
      "$50\\text{ نيوتن}$",
      "$40\\text{ نيوتن}$",
      "$80\\text{ نيوتن}$",
      "$110\\text{ نيوتن}$"
    ],
    "correctAnswer": "$50\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Vertical equilibrium: $R + P\\sin\\theta = W \\implies R = W - P\\sin\\theta$.",
    "hintAr": "الاتزان الرأسي: $R = W - P\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. Vertical forces: upward normal reaction $R$, upward component of pull $P\\sin\\theta = 50 \\times \\frac{3}{5} = 30\\text{ N}$, downward weight $W = 80\\text{ N}$.",
      "2. Vertical equilibrium: $R + 30 = 80 \\implies R = 50\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة الشد الرأسية: $50 \\times \\frac{3}{5} = 30\\text{ نيوتن}$ لأعلى.",
      "٢. معادلة الاتزان الرأسي: $R + 30 = 80 \\implies R = 50\\text{ نيوتن}$."
    ],
    "teacherTipEn": "The normal reaction is reduced by exactly the vertical component of the pulling force.",
    "teacherTipAr": "يقل رد الفعل العمودي بمقدار المركبة الرأسية لقوة الشد بالضبط."
  },
  {
    "id": "stat_ch1_db_med_87",
    "titleEn": "Coefficient of Friction from Limiting Angle",
    "titleAr": "حساب معامل الاحتكاك من قوة الشد المائلة",
    "difficulty": "medium",
    "questionEn": "In the setup of Q86 ($W = 80\\text{ N}, P = 50\\text{ N}, \\sin\\theta = 3/5, \\cos\\theta = 4/5$), if the body is on the verge of motion, find $\\mu_s$.",
    "questionAr": "في تجربة السؤال السابق ($W = 80\\text{ N}, P = 50\\text{ N}, \\sin\\theta = 3/5, \\cos\\theta = 4/5$)، إذا كان الجسم على وشك الحركة، فما قيمة معامل الاحتكاك $\\mu_s$؟",
    "optionsEn": [
      "$0.8$",
      "$0.6$",
      "$0.75$",
      "$0.5$"
    ],
    "optionsAr": [
      "$0.8$",
      "$0.6$",
      "$0.75$",
      "$0.5$"
    ],
    "correctAnswer": "$0.8$",
    "correctIndex": 0,
    "hintEn": "Horizontal equilibrium: $P\\cos\\theta = \\mu_s R$.",
    "hintAr": "الاتزان الأفقي: $P\\cos\\theta = \\mu_s R$.",
    "stepByStepSolutionEn": [
      "1. Horizontal driving force: $P\\cos\\theta = 50 \\times \\frac{4}{5} = 40\\text{ N}$.",
      "2. Normal reaction was found to be $R = 50\\text{ N}$.",
      "3. Limiting friction: $F_s = P\\cos\\theta = 40\\text{ N}$.",
      "4. Therefore, $\\mu_s = \\frac{F_s}{R} = \\frac{40}{50} = 0.8$."
    ],
    "stepByStepSolutionAr": [
      "١. القوة الأفقية: $50 \\times \\frac{4}{5} = 40\\text{ نيوتن}$.",
      "٢. رد الفعل العمودي: $R = 50\\text{ نيوتن}$.",
      "٣. معامل الاحتكاك: $\\mu_s = \\frac{40}{50} = 0.8$."
    ],
    "teacherTipEn": "Always resolve first vertically to obtain $R$, then equate the horizontal forces to find $\\mu_s$.",
    "teacherTipAr": "ابدأ دائماً بمعادلة الاتزان الرأسي لإيجاد $R$، ثم عوض في معادلة الاتزان الأفقي لحساب $\\mu_s$."
  },
  {
    "id": "stat_ch1_db_med_88",
    "titleEn": "Equilibrium on Incline under Horizontal Pull across Incline",
    "titleAr": "قوة أفقية متعامدة مع خط أكبر ميل لمستوى مائل",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 30\\text{ N}$ rests on a rough plane inclined at $30^\\circ$ to horizontal with $\\mu_s = \\frac{\\sqrt{3}}{2}$. A force $P$ acts on the body in the plane of the incline but perpendicular to the line of greatest slope (horizontally across the incline). What is the maximum value of $P$ for which equilibrium is maintained?",
    "questionAr": "جسم وزنه $30\\text{ نيوتن}$ على مستوى خشن يميل بزاوية $30^\\circ$ على الأفقي ومعامل احتكاكه $\\frac{\\sqrt{3}}{2}$. تؤثر عليه قوة $P$ في مستوى السطح ولكن في اتجاه عمودي على خط أكبر ميل. ما أقصى قيمة للقوة $P$ تحفظ توازن الجسم؟",
    "optionsEn": [
      "$7.5\\sqrt{5}\\text{ N}$",
      "$15\\text{ N}$",
      "$22.5\\text{ N}$",
      "$18\\text{ N}$"
    ],
    "optionsAr": [
      "$7.5\\sqrt{5}\\text{ نيوتن}$",
      "$15\\text{ نيوتن}$",
      "$22.5\\text{ نيوتن}$",
      "$18\\text{ نيوتن}$"
    ],
    "correctAnswer": "$7.5\\sqrt{5}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The forces in the plane are perpendicular: $W\\sin(30^\\circ)$ down the incline, and $P$ across the incline. Resultant friction must not exceed $\\mu_s R$.",
    "hintAr": "القوتان في مستوى السطح متعامدتان: مركبة الوزن لأسفل والقوة $P$ عرضياً. المحصلة لا تتجاوز $\\mu_s R$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = W\\cos(30^\\circ) = 30 \\times \\frac{\\sqrt{3}}{2} = 15\\sqrt{3}\\text{ N}$.",
      "2. Maximum available friction: $F_s = \\mu_s R = \\frac{\\sqrt{3}}{2} \\times 15\\sqrt{3} = \\frac{45}{2} = 22.5\\text{ N}$.",
      "3. Net in-plane force tending to cause motion: $\\sqrt{(W\\sin(30^\\circ))^2 + P^2} = \\sqrt{15^2 + P^2}$.",
      "4. At limiting equilibrium: $15^2 + P^2 = F_s^2 = (22.5)^2 = 506.25$.",
      "5. $P^2 = 506.25 - 225 = 281.25 = \\frac{1125}{4} = \\frac{225 \\times 5}{4} \\implies P = \\frac{15\\sqrt{5}}{2} = 7.5\\sqrt{5}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 30\\cos 30^\\circ = 15\\sqrt{3}\\text{ نيوتن}$.",
      "٢. أقصى احتكاك متاح: $F_s = \\mu_s R = 22.5\\text{ نيوتن}$.",
      "٣. القوى في مستوى السطح متعامدة، فالمحصلة = $\\sqrt{(30\\sin 30^\\circ)^2 + P^2} = \\sqrt{15^2 + P^2}$.",
      "٤. شرط الاتزان: $15^2 + P^2 = 22.5^2 = 506.25$.",
      "٥. $P^2 = 281.25 \\implies P = 7.5\\sqrt{5}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Two-dimensional friction problems on inclines combine orthogonal components: along the slope and across the slope.",
    "teacherTipAr": "مسائل الاحتكاك ثنائي الأبعاد على المستوى المائل تجمع مركبتين متعامدتين في مستوى السطح."
  },
  {
    "id": "stat_ch1_db_med_89",
    "titleEn": "Inclined Push at Angle Below Incline",
    "titleAr": "قوة ضغط تميل بزاوية لأسفل على خط أكبر ميل",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 40\\text{ N}$ rests on a rough horizontal plane with $\\mu_s = 0.5$. A pushing force $P = 20\\text{ N}$ acts downward at an angle $37^\\circ$ below the horizontal ($\\cos 37^\\circ = 0.8, \\sin 37^\\circ = 0.6$). Find the static friction force $F$ developed.",
    "questionAr": "جسم وزنه $40\\text{ نيوتن}$ على مستوى أفقي خشن معامل احتكاكه $0.5$. تؤثر عليه قوة ضغط $P = 20\\text{ نيوتن}$ تميل لأسفل بزاوية $37^\\circ$ على الأفقي ($\\cos 37^\\circ = 0.8, \\sin 37^\\circ = 0.6$). ما مقدار قوة الاحتكاك $F$ المتولدة؟",
    "optionsEn": [
      "$16\\text{ N}$",
      "$26\\text{ N}$",
      "$20\\text{ N}$",
      "$12\\text{ N}$"
    ],
    "optionsAr": [
      "$16\\text{ نيوتن}$",
      "$26\\text{ نيوتن}$",
      "$20\\text{ نيوتن}$",
      "$12\\text{ نيوتن}$"
    ],
    "correctAnswer": "$16\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Check if the driving force exceeds limiting friction: $P\\cos 37^\\circ$ vs $\\mu_s(W + P\\sin 37^\\circ)$.",
    "hintAr": "تحقق هل تحرك القوة الجسم أم لا بمقارنة المركبة الأفقية بأقصى احتكاك.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = W + P\\sin(37^\\circ) = 40 + 20(0.6) = 40 + 12 = 52\\text{ N}$.",
      "2. Maximum possible static friction: $F_s = \\mu_s R = 0.5 \\times 52 = 26\\text{ N}$.",
      "3. Horizontal driving force: $F_H = P\\cos(37^\\circ) = 20(0.8) = 16\\text{ N}$.",
      "4. Since $F_H = 16\\text{ N} < 26\\text{ N}$, the body does NOT move.",
      "5. The static friction force exactly matches the applied force: $F = 16\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 40 + 20\\sin 37^\\circ = 52\\text{ نيوتن}$.",
      "٢. أقصى احتكاك ممكن: $F_s = 0.5 \\times 52 = 26\\text{ نيوتن}$.",
      "٣. القوة الأفقية المحركة: $20\\cos 37^\\circ = 16\\text{ نيوتن}$.",
      "٤. بما أن $16 < 26\\text{ نيوتن}$، فالجسم في حالة سكون تام.",
      "٥. إذن قوة الاحتكاك الفعلية توازن القوة الأفقية: $F = 16\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Do not confuse the actual friction force $F = 16\\text{ N}$ with the limiting friction $F_s = 26\\text{ N}$.",
    "teacherTipAr": "لا تخلط بين قوة الاحتكاك الفعلية $16\\text{ نيوتن}$ وقوة الاحتكاك النهائي $26\\text{ نيوتن}$."
  },
  {
    "id": "stat_ch1_db_med_90",
    "titleEn": "Friction Angle when Body Remains at Rest on Incline",
    "titleAr": "زاوية الاحتكاك عندما يظل جسم متزناً على مستوى مائل",
    "difficulty": "medium",
    "questionEn": "A body rests on a plane inclined at $25^\\circ$ to the horizontal. If the body remains stationary without any external forces acting on it, what must be true about the friction angle $\\lambda$?",
    "questionAr": "جسم مستقر على مستوى يميل بزاوية $25^\\circ$ على الأفقي. إذا ظل الجسم ساكناً بدون أي قوى خارجية، فما الشرط اللازم لزاوية الاحتكاك $\\lambda$؟",
    "optionsEn": [
      "$\\lambda \\ge 25^\\circ$",
      "$\\lambda \\le 25^\\circ$",
      "$\\lambda = 25^\\circ$",
      "$\\lambda \\ge 65^\\circ$"
    ],
    "optionsAr": [
      "$\\lambda \\ge 25^\\circ$",
      "$\\lambda \\le 25^\\circ$",
      "$\\lambda = 25^\\circ$",
      "$\\lambda \\ge 65^\\circ$"
    ],
    "correctAnswer": "$\\lambda \\ge 25^\\circ$",
    "correctIndex": 0,
    "hintEn": "For a body to rest under its weight alone on an incline, $\\tan\\theta \\le \\mu_s = \\tan\\lambda \\implies \\lambda \\ge \\theta$.",
    "hintAr": "ليظل الجسم ساكناً تحت وزنه، يجب أن تكون زاوية الاحتكاك أكبر من أو تساوي زاوية ميل المستوى.",
    "stepByStepSolutionEn": [
      "1. Gravity component down the incline: $W\\sin\\theta$.",
      "2. Maximum friction available: $\\mu_s W\\cos\\theta = W\\cos\\theta\\tan\\lambda$.",
      "3. Equilibrium condition: $W\\sin\\theta \\le W\\cos\\theta\\tan\\lambda \\implies \\tan\\theta \\le \\tan\\lambda$.",
      "4. Since tangent is an increasing function on $[0, 90^\\circ)$, this requires $\\lambda \\ge \\theta = 25^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة الوزن لأسفل: $W\\sin\\theta$.",
      "٢. أقصى احتكاك: $\\mu_s W\\cos\\theta = W\\cos\\theta\\tan\\lambda$.",
      "٣. لكي لا ينزلق الجسم: $W\\sin\\theta \\le \\mu_s W\\cos\\theta \\implies \\tan\\theta \\le \\tan\\lambda$.",
      "٤. بالتالي $\\lambda \\ge 25^\\circ$."
    ],
    "teacherTipEn": "If $\\lambda < 25^\\circ$, the body would accelerate down the plane unless held by an external force.",
    "teacherTipAr": "لو كانت $\\lambda < 25^\\circ$ لانزلق الجسم لأسفل المستوى متسارعاً."
  },
  {
    "id": "stat_ch1_db_med_91",
    "titleEn": "Relation between Friction and Normal Force for Contact Pair",
    "titleAr": "العلاقة بين الاحتكاك والعمودي لزوج تلامس",
    "difficulty": "medium",
    "questionEn": "Two bodies of weights $W_1$ and $W_2$ ($W_1 \\ne W_2$) are made of the exact same material and placed on the same rough horizontal table. Which quantity is IDENTICAL for both bodies?",
    "questionAr": "جسمان وزناهما $W_1$ و $W_2$ ($W_1 \\ne W_2$) مصنوعان من نفس المادة ووضعا على نفس المنضدة الأفقية الخشنة. أي الكميات الآتية متطابقة للجسمين؟",
    "optionsEn": [
      "The coefficient of static friction $\\mu_s$",
      "The limiting friction force $F_s$",
      "The normal reaction $R$",
      "The resultant reaction $R'$"
    ],
    "optionsAr": [
      "معامل الاحتكاك السكوني $\\mu_s$",
      "قوة الاحتكاك النهائي $F_s$",
      "رد الفعل العمودي $R$",
      "رد الفعل المحصل $R'$"
    ],
    "correctAnswer": "The coefficient of static friction $\\mu_s$",
    "correctIndex": 0,
    "hintEn": "$\\mu_s$ depends only on the nature and roughness of the two contact surfaces, independent of weight.",
    "hintAr": "معامل الاحتكاك يتوقف فقط على طبيعة ومادة السطحين المتلامسين.",
    "stepByStepSolutionEn": [
      "1. The normal reaction $R = W$ is different because $W_1 \\ne W_2$.",
      "2. The limiting friction force $F_s = \\mu_s W$ is different because the weights differ.",
      "3. The coefficient of friction $\\mu_s$ depends solely on the nature of the materials in contact and their surface finish.",
      "4. Therefore, $\\mu_s$ is identical for both bodies."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي يختلف لاختلاف الوزنين.",
      "٢. قوة الاحتكاك النهائي تختلف لاختلاف رد الفعل العمودي.",
      "٣. معامل الاحتكاك خاصية لطبيعة المادتين المتلامستين وحالة صقلهما فقط.",
      "٤. إذن $\\mu_s$ متطابق للجسمين."
    ],
    "teacherTipEn": "A fundamental conceptual question from the Egyptian Ministry curriculum.",
    "teacherTipAr": "سؤال مفاهيمي أساسي من كتاب الوزارة."
  },
  {
    "id": "stat_ch1_db_med_92",
    "titleEn": "Equilibrium on Incline under Horizontal Pushing Force",
    "titleAr": "اتزان جسم على مستوى مائل تحت تأثير قوة دفع أفقية",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 60\\text{ N}$ rests on a rough plane inclined at $30^\\circ$ to the horizontal with $\\mu_s = \\frac{\\sqrt{3}}{3}$. A horizontal force $P$ directed towards the plane acts on the body. If the body is on the verge of moving UP the plane, find $P$.",
    "questionAr": "جسم وزنه $60\\text{ نيوتن}$ على مستوى خشن يميل بزاوية $30^\\circ$ على الأفقي ومعامل احتكاكه $\\frac{\\sqrt{3}}{3}$. تؤثر عليه قوة أفقية $P$ في اتجاه المستوى. إذا كان الجسم على وشك الحركة لأعلى المستوى، فما مقدار $P$؟",
    "optionsEn": [
      "$60\\sqrt{3}\\text{ N}$",
      "$30\\sqrt{3}\\text{ N}$",
      "$60\\text{ N}$",
      "$45\\text{ N}$"
    ],
    "optionsAr": [
      "$60\\sqrt{3}\\text{ نيوتن}$",
      "$30\\sqrt{3}\\text{ نيوتن}$",
      "$60\\text{ نيوتن}$",
      "$45\\text{ نيوتن}$"
    ],
    "correctAnswer": "$60\\sqrt{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Equate parallel forces: $P\\cos(30^\\circ) = W\\sin(30^\\circ) + \\mu_s(W\\cos(30^\\circ) + P\\sin(30^\\circ))$.",
    "hintAr": "معادلة الاتجاه الموازي: $P\\cos 30^\\circ = W\\sin 30^\\circ + \\mu_s R$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = 60\\cos(30^\\circ) + P\\sin(30^\\circ) = 30\\sqrt{3} + 0.5 P$.",
      "2. Along the plane: $P\\cos(30^\\circ) = 60\\sin(30^\\circ) + \\frac{\\sqrt{3}}{3} R$.",
      "3. $P \\frac{\\sqrt{3}}{2} = 30 + \\frac{\\sqrt{3}}{3}(30\\sqrt{3} + 0.5 P) = 30 + 30 + \\frac{\\sqrt{3}}{6} P = 60 + \\frac{\\sqrt{3}}{6} P$.",
      "4. $P(\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{3}}{6}) = P \\frac{\\sqrt{3}}{3} = 60 \\implies P = \\frac{180}{\\sqrt{3}} = 60\\sqrt{3}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 30\\sqrt{3} + 0.5 P$.",
      "٢. معادلة وشك الحركة لأعلى: $P\\cos 30^\\circ = 30 + \\mu_s R$.",
      "٣. $P\\frac{\\sqrt{3}}{2} = 30 + 30 + \\frac{\\sqrt{3}}{6} P = 60 + \\frac{\\sqrt{3}}{6} P$.",
      "٤. $P(\\frac{\\sqrt{3}}{3}) = 60 \\implies P = 60\\sqrt{3}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice that $\\lambda = 30^\\circ$ here since $\\tan\\lambda = \\mu_s = 1/\\sqrt{3}$. Using Lami's theorem or resolution both yield $60\\sqrt{3}\\text{ N}$.",
    "teacherTipAr": "يمكن حلها أيضاً بقاعدة لامي باعتبار الزوايا بين القوى."
  },
  {
    "id": "stat_ch1_db_med_93",
    "titleEn": "Ratio of Kinetic to Static Friction",
    "titleAr": "النسبة بين معاملي الاحتكاك الحركي والسكوني",
    "difficulty": "medium",
    "questionEn": "For two given contact surfaces in dry friction, which relationship between the static friction coefficient $\\mu_s$ and kinetic friction coefficient $\\mu_k$ is universally true?",
    "questionAr": "لأي سطحي تلامس في حالة الاحتكاك الجاف، أي العلاقات الآتية صحيحة دائماً بين معاملي الاحتكاك السكوني $\\mu_s$ والحركي $\\mu_k$؟",
    "optionsEn": [
      "$\\mu_k < \\mu_s$",
      "$\\mu_k > \\mu_s$",
      "$\\mu_k = \\mu_s$",
      "$\\mu_k = \\mu_s^2$"
    ],
    "optionsAr": [
      "$\\mu_k < \\mu_s$",
      "$\\mu_k > \\mu_s$",
      "$\\mu_k = \\mu_s$",
      "$\\mu_k = \\mu_s^2$"
    ],
    "correctAnswer": "$\\mu_k < \\mu_s$",
    "correctIndex": 0,
    "hintEn": "It always takes more force to initiate relative motion from rest than to sustain it.",
    "hintAr": "القوة اللازمة لبدء الحركة من السكون أكبر دائماً من القوة اللازمة لاستمرارها.",
    "stepByStepSolutionEn": [
      "1. Static friction arises from microscopic interlocking of surface asperities and local bonding.",
      "2. Once motion starts, asperities ride over each other without forming full bonds.",
      "3. Therefore, experimental measurements always show $\\mu_k < \\mu_s$."
    ],
    "stepByStepSolutionAr": [
      "١. ينشأ الاحتكاك السكوني من تداخل النتوءات المجهرية للسطحين والروابط الجزيئية.",
      "٢. عند بدء الحركة لا تجد هذه النتوءات وقتاً كافياً للترابط الكامل.",
      "٣. إذن معامل الاحتكاك الحركي أقل دائماً من معامل الاحتكاك السكوني: $\\mu_k < \\mu_s$."
    ],
    "teacherTipEn": "This difference is responsible for the 'stick-slip' phenomenon and brake squeal.",
    "teacherTipAr": "هذا الفارق هو المسؤول عن ظاهرة التوقف والانزلاق (stick-slip) وصرير المكابح."
  },
  {
    "id": "stat_ch1_db_med_94",
    "titleEn": "Equilibrium on Incline with Horizontal Force of Weight/Sqrt(3)",
    "titleAr": "اتزان على مستوى مائل بزاوية 60 درجة",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 120\\text{ N}$ is placed on a rough plane inclined at $60^\\circ$ to the horizontal. If $\\mu_s = \\frac{\\sqrt{3}}{3}$, find the force $P$ parallel to the plane directed upwards to keep the body in equilibrium with impending downward motion.",
    "questionAr": "جسم وزنه $120\\text{ نيوتن}$ موضوع على مستوى خشن يميل بزاوية $60^\\circ$ على الأفقي. إذا كان $\\mu_s = \\frac{\\sqrt{3}}{3}$، فما القوة $P$ الموازية لخط أكبر ميل لأعلى التي تحفظ اتزان الجسم وهو على وشك الانزلاق لأسفل؟",
    "optionsEn": [
      "$40\\sqrt{3}\\text{ N}$",
      "$60\\sqrt{3}\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$",
      "$60\\text{ N}$"
    ],
    "optionsAr": [
      "$40\\sqrt{3}\\text{ نيوتن}$",
      "$60\\sqrt{3}\\text{ نيوتن}$",
      "$20\\sqrt{3}\\text{ نيوتن}$",
      "$60\\text{ نيوتن}$"
    ],
    "correctAnswer": "$40\\sqrt{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$P = W\\sin(60^\\circ) - \\mu_s W\\cos(60^\\circ)$.",
    "hintAr": "$P = W\\sin 60^\\circ - \\mu_s W\\cos 60^\\circ$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = 120\\cos(60^\\circ) = 60\\text{ N}$.",
      "2. Maximum friction: $F_s = \\frac{\\sqrt{3}}{3} \\times 60 = 20\\sqrt{3}\\text{ N}$.",
      "3. Gravity component down the plane: $W\\sin(60^\\circ) = 120 \\times \\frac{\\sqrt{3}}{2} = 60\\sqrt{3}\\text{ N}$.",
      "4. Downward impending motion implies friction is up: $P + F_s = W\\sin(60^\\circ) \\implies P = 60\\sqrt{3} - 20\\sqrt{3} = 40\\sqrt{3}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 120\\cos 60^\\circ = 60\\text{ نيوتن}$.",
      "٢. الاحتكاك النهائي لأعلى: $F_s = \\frac{\\sqrt{3}}{3} \\times 60 = 20\\sqrt{3}\\text{ نيوتن}$.",
      "٣. مركبة الوزن لأسفل: $120\\sin 60^\\circ = 60\\sqrt{3}\\text{ نيوتن}$.",
      "٤. $P = 60\\sqrt{3} - 20\\sqrt{3} = 40\\sqrt{3}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Always subtract friction when preventing downward motion.",
    "teacherTipAr": "تطرح قوة الاحتكاك النهائي من مركبة الوزن عند منع الانزلاق لأسفل."
  },
  {
    "id": "stat_ch1_db_med_95",
    "titleEn": "Equilibrium on Incline with Impending Upward Motion at 60 deg",
    "titleAr": "قوة وشك الحركة لأعلى على مستوى مائل بزاوية 60 درجة",
    "difficulty": "medium",
    "questionEn": "Under the exact conditions of Q94 ($W = 120\\text{ N}, \\theta = 60^\\circ, \\mu_s = \\frac{\\sqrt{3}}{3}$), what force $P$ along the plane is required to put the body on the verge of moving UP the plane?",
    "questionAr": "تحت نفس شروط السؤال السابق، ما مقدار القوة $P$ الموازية لخط أكبر ميل لأعلى التي تجعل الجسم على وشك الحركة لأعلى المستوى؟",
    "optionsEn": [
      "$80\\sqrt{3}\\text{ N}$",
      "$60\\sqrt{3}\\text{ N}$",
      "$40\\sqrt{3}\\text{ N}$",
      "$100\\sqrt{3}\\text{ N}$"
    ],
    "optionsAr": [
      "$80\\sqrt{3}\\text{ نيوتن}$",
      "$60\\sqrt{3}\\text{ نيوتن}$",
      "$40\\sqrt{3}\\text{ نيوتن}$",
      "$100\\sqrt{3}\\text{ نيوتن}$"
    ],
    "correctAnswer": "$80\\sqrt{3}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$P = W\\sin(60^\\circ) + \\mu_s W\\cos(60^\\circ)$.",
    "hintAr": "$P = W\\sin 60^\\circ + \\mu_s W\\cos 60^\\circ$.",
    "stepByStepSolutionEn": [
      "1. Downward gravity component: $60\\sqrt{3}\\text{ N}$.",
      "2. Opposing limiting friction (acting down the plane): $F_s = 20\\sqrt{3}\\text{ N}$.",
      "3. Total force to move up: $P = 60\\sqrt{3} + 20\\sqrt{3} = 80\\sqrt{3}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة الوزن لأسفل: $60\\sqrt{3}\\text{ نيوتن}$.",
      "٢. الاحتكاك النهائي لأسفل: $20\\sqrt{3}\\text{ نيوتن}$.",
      "٣. القوة اللازمة للتحريك لأعلى: $P = 60\\sqrt{3} + 20\\sqrt{3} = 80\\sqrt{3}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice the symmetry around $60\\sqrt{3}\\text{ N}$: the equilibrium interval is $[40\\sqrt{3}, 80\\sqrt{3}]\\text{ N}$.",
    "teacherTipAr": "لاحظ التماثل حول مركبة الوزن: فترة الاتزان هي $[40\\sqrt{3}, 80\\sqrt{3}]\\text{ نيوتن}$."
  },
  {
    "id": "stat_ch1_db_med_96",
    "titleEn": "Horizontal Incline Test to Determine Mu",
    "titleAr": "تجربة المستوى لتحديد معامل الاحتكاك",
    "difficulty": "medium",
    "questionEn": "A body requires a horizontal force of $24\\text{ N}$ to be on the verge of motion on a rough horizontal plane. When placed on the same plane inclined at $45^\\circ$, it is on the verge of sliding down under its weight alone. Find the weight $W$ of the body.",
    "questionAr": "جسم يحتاج لقوة أفقية $24\\text{ نيوتن}$ ليكون على وشك الحركة على مستوى أفقي خشن. وعند وضعه على نفس المستوى بعد إمالته بزاوية $45^\\circ$، كان على وشك الانزلاق تحت وزنه فقط. ما وزن الجسم $W$؟",
    "optionsEn": [
      "$24\\text{ N}$",
      "$24\\sqrt{2}\\text{ N}$",
      "$12\\sqrt{2}\\text{ N}$",
      "$48\\text{ N}$"
    ],
    "optionsAr": [
      "$24\\text{ نيوتن}$",
      "$24\\sqrt{2}\\text{ نيوتن}$",
      "$12\\sqrt{2}\\text{ نيوتن}$",
      "$48\\text{ نيوتن}$"
    ],
    "correctAnswer": "$24\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "From incline test: $\\mu_s = \\tan(45^\\circ) = 1$. Then on horizontal plane: $P = \\mu_s W \\implies 24 = 1 \\times W$.",
    "hintAr": "من تجربة الإمالة: $\\mu_s = \\tan 45^\\circ = 1$. ثم على السطح الأفقي: $P = \\mu_s W$.",
    "stepByStepSolutionEn": [
      "1. Incline at verge of sliding: $\\mu_s = \\tan(45^\\circ) = 1$.",
      "2. On horizontal plane: limiting friction is $F_s = \\mu_s R = \\mu_s W = 1 \\times W = W$.",
      "3. Applied horizontal force is $P = 24\\text{ N} = F_s \\implies W = 24\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. من وشك الانزلاق على المستوى المائل: $\\mu_s = \\tan 45^\\circ = 1$.",
      "٢. على المستوى الأفقي: $P = \\mu_s W \\implies 24 = 1 \\times W$.",
      "٣. إذن $W = 24\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Clever question combining horizontal friction and inclined plane experiments.",
    "teacherTipAr": "سؤال يدمج فكرتي المستوى الأفقي والمستوى المائل بذكاء."
  },
  {
    "id": "stat_ch1_db_med_97",
    "titleEn": "Friction on a Block with Decreasing Horizontal Force",
    "titleAr": "تغير الاحتكاك بنقصان القوة الأفقية",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 50\\text{ N}$ rests on a rough horizontal floor with $\\mu_s = 0.4$. A horizontal force of $15\\text{ N}$ is applied to it. The magnitude of the friction force is:",
    "questionAr": "جسم وزنه $50\\text{ نيوتن}$ موضوع على أرضية أفقية خشنة معامل احتكاكها $0.4$. أثرت عليه قوة أفقية مقدارها $15\\text{ نيوتن}$. فإن مقدار قوة الاحتكاك هو:",
    "optionsEn": [
      "$15\\text{ N}$",
      "$20\\text{ N}$",
      "$0\\text{ N}$",
      "$35\\text{ N}$"
    ],
    "optionsAr": [
      "$15\\text{ نيوتن}$",
      "$20\\text{ نيوتن}$",
      "$0\\text{ نيوتن}$",
      "$35\\text{ نيوتن}$"
    ],
    "correctAnswer": "$15\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Compare applied force $15\\text{ N}$ with limiting friction $F_s = 0.4(50) = 20\\text{ N}$.",
    "hintAr": "قارن القوة المؤثرة $15\\text{ نيوتن}$ بأقصى احتكاك $20\\text{ نيوتن}$.",
    "stepByStepSolutionEn": [
      "1. Limiting friction: $F_s = \\mu_s R = 0.4 \\times 50 = 20\\text{ N}$.",
      "2. The applied force is $15\\text{ N} < 20\\text{ N}$, so the body does not move.",
      "3. Static friction is self-adjusting and matches the applied force: $F = 15\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. الاحتكاك النهائي: $F_s = 0.4 \\times 50 = 20\\text{ نيوتن}$.",
      "٢. القوة المؤثرة $15 < 20\\text{ نيوتن}$، فالجسم ساكن في اتزان غير نهائي.",
      "٣. قوة الاحتكاك تضبط نفسها ذاتياً لتوازن القوة تماماً: $F = 15\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Do not pick $20\\text{ N}$! Limiting friction is a maximum threshold, not the active friction force.",
    "teacherTipAr": "إياك واختيار $20\\text{ نيوتن}$! قوة الاحتكاك تساوي القوة المؤثرة مادام الجسم ساكناً."
  },
  {
    "id": "stat_ch1_db_med_98",
    "titleEn": "Resultant Reaction for Intermediate Friction",
    "titleAr": "رد الفعل المحصل لقوة احتكاك غير نهائية",
    "difficulty": "medium",
    "questionEn": "In the situation of Q97 ($W = 50\\text{ N}, R = 50\\text{ N}, F = 15\\text{ N}$), find the magnitude of the resultant reaction $R'$.",
    "questionAr": "في حالة السؤال السابق ($W = 50\\text{ N}, R = 50\\text{ N}, F = 15\\text{ N}$)، ما مقدار رد الفعل المحصل $R'$؟",
    "optionsEn": [
      "$5\\sqrt{109}\\text{ N}$",
      "$50\\text{ N}$",
      "$20\\sqrt{7}\\text{ N}$",
      "$65\\text{ N}$"
    ],
    "optionsAr": [
      "$5\\sqrt{109}\\text{ نيوتن}$",
      "$50\\text{ نيوتن}$",
      "$20\\sqrt{7}\\text{ نيوتن}$",
      "$65\\text{ نيوتن}$"
    ],
    "correctAnswer": "$5\\sqrt{109}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$R' = \\sqrt{R^2 + F^2} = \\sqrt{50^2 + 15^2}$.",
    "hintAr": "$R' = \\sqrt{R^2 + F^2} = \\sqrt{50^2 + 15^2}$.",
    "stepByStepSolutionEn": [
      "1. The normal reaction is $R = 50\\text{ N}$.",
      "2. The actual friction force is $F = 15\\text{ N}$.",
      "3. The resultant reaction is $R' = \\sqrt{R^2 + F^2} = \\sqrt{2500 + 225} = \\sqrt{2725} = \\sqrt{25 \\times 109} = 5\\sqrt{109}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 50\\text{ نيوتن}$.",
      "٢. قوة الاحتكاك الفعلية: $F = 15\\text{ نيوتن}$.",
      "٣. رد الفعل المحصل: $R' = \\sqrt{50^2 + 15^2} = \\sqrt{2725} = 5\\sqrt{109}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice that $5\\sqrt{109} \\approx 52.2\\text{ N}$, which lies strictly inside $[R, R\\sec\\lambda] = [50, 53.85]$.",
    "teacherTipAr": "لاحظ أن القيمة تقع دائماً بين $R$ و $R\\sec\\lambda$."
  },
  {
    "id": "stat_ch1_db_med_99",
    "titleEn": "Two Blocks Stacked on Incline",
    "titleAr": "كتلتان متراصتان على مستوى مائل خشن",
    "difficulty": "medium",
    "questionEn": "A block $A$ of weight $20\\text{ N}$ and a block $B$ of weight $30\\text{ N}$ are placed on a rough inclined plane. If the coefficient of static friction is the same for both blocks, which block has the greater tendency to slip?",
    "questionAr": "كتلة $A$ وزنها $20\\text{ نيوتن}$ وكتلة $B$ وزنها $30\\text{ نيوتن}$ وضعتا على مستوى مائل خشن. إذا كان معامل الاحتكاك السكوني متماثلاً للكتلتين، فأي الكتلتين لديها قابلية أكبر للانزلاق؟",
    "optionsEn": [
      "Both blocks have the exact same tendency to slip",
      "Block B because it is heavier",
      "Block A because it is lighter",
      "Cannot be determined without the angle"
    ],
    "optionsAr": [
      "الكتلتان لهما نفس القابلية تماماً للانزلاق",
      "الكتلة B لأنها أثقل",
      "الكتلة A لأنها أخف",
      "لا يمكن التحديد بدون معرفة الزاوية"
    ],
    "correctAnswer": "Both blocks have the exact same tendency to slip",
    "correctIndex": 0,
    "hintEn": "The impending slip condition under gravity alone is $\\tan\\theta = \\mu_s$, which is independent of mass and weight.",
    "hintAr": "شرط وشك الانزلاق تحت الوزن وحده هو $\\tan\\theta = \\mu_s$ وهو مستقل تماماً عن الكتلة والوزن.",
    "stepByStepSolutionEn": [
      "1. For any body on an incline under gravity alone, the downward force is $W\\sin\\theta$.",
      "2. The maximum resisting friction is $\\mu_s W\\cos\\theta$.",
      "3. The ratio is $\\frac{W\\sin\\theta}{\\mu_s W\\cos\\theta} = \\frac{\\tan\\theta}{\\mu_s}$, which is completely independent of weight $W$.",
      "4. Therefore, both blocks begin sliding at the exact same critical inclination angle $\\theta = \\lambda$."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة الوزن لأسفل: $W\\sin\\theta$.",
      "٢. أقصى احتكاك مقاوم: $\\mu_s W\\cos\\theta$.",
      "٣. النسبة بينهما $\\frac{\\tan\\theta}{\\mu_s}$ مستقلة تماماً عن الوزن $W$.",
      "٤. إذن تبدأ الكتلتان في الانزلاق عند نفس الزاوية تماماً."
    ],
    "teacherTipEn": "Crucial conceptual insight: weight cancels out in single-body gravity friction equilibrium.",
    "teacherTipAr": "مفهوم فيزيائي جوهري: الوزن يختصر في معادلة وشك الانزلاق تحت تأثير الجاذبية وحدها."
  },
  {
    "id": "stat_ch1_db_med_100",
    "titleEn": "Equilibrium on Incline under Horizontal Pulling Force",
    "titleAr": "اتزان جسم على مستوى مائل تحت تأثير قوة شد أفقية مبتعدة",
    "difficulty": "medium",
    "questionEn": "A body of weight $W = 60\\text{ N}$ rests on a rough plane inclined at $30^\\circ$ to horizontal. If $\\mu_s = \\frac{\\sqrt{3}}{3}$, find the horizontal force $P$ directed away from the incline required to put the body on the verge of sliding DOWN the plane.",
    "questionAr": "جسم وزنه $60\\text{ نيوتن}$ على مستوى خشن يميل بزاوية $30^\\circ$ على الأفقي ومعامل احتكاكه $\\frac{\\sqrt{3}}{3}$. ما مقدار القوة الأفقية $P$ الموجهة بعيداً عن المستوى اللازمة لجعل الجسم على وشك الانزلاق لأسفل؟",
    "optionsEn": [
      "$0\\text{ N}$",
      "$30\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$",
      "$15\\text{ N}$"
    ],
    "optionsAr": [
      "$0\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$20\\sqrt{3}\\text{ نيوتن}$",
      "$15\\text{ نيوتن}$"
    ],
    "correctAnswer": "$0\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Since $\\tan(30^\\circ) = 1/\\sqrt{3} = \\mu_s$, the body is ALREADY on the verge of sliding down under gravity alone!",
    "hintAr": "بما أن $\\tan 30^\\circ = \\mu_s$، فإن الجسم على وشك الانزلاق بذاته دون الحاجة لأي قوة أفقية!",
    "stepByStepSolutionEn": [
      "1. The angle of inclination is $\\theta = 30^\\circ$.",
      "2. The friction angle is $\\tan\\lambda = \\mu_s = \\frac{\\sqrt{3}}{3} \\implies \\lambda = 30^\\circ$.",
      "3. Since $\\theta = \\lambda$, the body is on the verge of sliding down under its weight alone.",
      "4. Therefore, no additional horizontal force is needed to cause impending downward motion: $P = 0\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. زاوية ميل المستوى $\\theta = 30^\\circ$.",
      "٢. زاوية الاحتكاك $\\tan\\lambda = \\mu_s = \\frac{\\sqrt{3}}{3} \\implies \\lambda = 30^\\circ$.",
      "٣. بما أن $\\theta = \\lambda$، فالجسم على وشك الانزلاق لأسفل تحت وزنه فقط.",
      "٤. بالتالي القوة الإضافية المطلوبة هي $0\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Recognizing $\\theta = \\lambda$ immediately saves calculation time.",
    "teacherTipAr": "ملاحظة تساوي زاوية الميل مع زاوية الاحتكاك توفر وقت الحسابات الطويلة."
  }
],
  hots: [
  {
    "id": "stat_ch1_db_hots_101",
    "titleEn": "Least Force Up Inclined Plane to Cause Motion",
    "titleAr": "أقل قوة تجعل الجسم على وشك الحركة لأعلى المستوى المائل",
    "difficulty": "hots",
    "questionEn": "A body of weight $W$ rests on a rough plane inclined at angle $\\theta$ with friction angle $\\lambda$. What is the least force $P$ capable of pulling the body up the plane?",
    "questionAr": "جسم وزنه $W$ موضوع على مستوى خشن يميل بزاوية $\\theta$ على الأفقي وزاوية احتكاكه $\\lambda$. ما مقدار أقل قوة $P$ قادرة على سحب الجسم لأعلى المستوى؟",
    "optionsEn": [
      "$W \\sin(\\theta + \\lambda)$",
      "$W \\cos(\\theta + \\lambda)$",
      "$W \\sin(\\theta - \\lambda)$",
      "$W \\tan(\\theta + \\lambda)$"
    ],
    "optionsAr": [
      "و جا(هـ + ل)",
      "و جتا(هـ + ل)",
      "و جا(هـ - ل)",
      "و ظا(هـ + ل)"
    ],
    "correctAnswer": "$W \\sin(\\theta + \\lambda)$",
    "correctIndex": 0,
    "hintEn": "By Lami's theorem on W, P, and R': P = W sin(theta + lambda) / sin(90) = W sin(theta + lambda).",
    "hintAr": "بتطبيق قاعدة لامي أو مثلث القوى: أقل قوة تلزم لتحريك الجسم لأعلى هي و جا(هـ + ل).",
    "stepByStepSolutionEn": [
      "1. Apply advanced Lami's theorem or force polygon.",
      "2. Deduce exact minimum conditions."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قاعدة لامي أو مضلع القوى المتزن مع رد الفعل المحصل.",
      "٢. استنتاج الشروط الصغرى بدقة."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "stat_ch1_db_hots_102",
    "titleEn": "Direction of Least Force to Move Body Up Inclined Plane",
    "titleAr": "اتجاه أقل قوة لتحريك الجسم لأعلى المستوى المائل",
    "difficulty": "hots",
    "questionEn": "For the least force $P = W \\sin(\\theta + \\lambda)$ to pull a body up a rough plane inclined at $\\theta$, the force must be inclined to the PLANE at angle:",
    "questionAr": "لكي تكون القوة $P = W \\sin(\\theta + \\lambda)$ أقل ما يمكن لتحريك الجسم لأعلى مستوى مائل يميل بزاوية $\\theta$، يجب أن تميل القوة على المستوى بزاوية:",
    "optionsEn": [
      "$\\lambda$ above the plane",
      "$\\theta$ above the plane",
      "$0^\\circ$ (parallel to plane)",
      "$\\theta + \\lambda$"
    ],
    "optionsAr": [
      "ل لأعلى المستوى",
      "هـ لأعلى المستوى",
      "0° (موازية للمستوى)",
      "هـ + ل"
    ],
    "correctAnswer": "$\\lambda$ above the plane",
    "correctIndex": 0,
    "hintEn": "The force must make an angle equal to the friction angle lambda with the plane.",
    "hintAr": "تميل القوة على المستوى المائل بزاوية قياسها يساوي زاوية الاحتكاك ل.",
    "stepByStepSolutionEn": [
      "1. Apply advanced Lami's theorem or force polygon.",
      "2. Deduce exact minimum conditions."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قاعدة لامي أو مضلع القوى المتزن مع رد الفعل المحصل.",
      "٢. استنتاج الشروط الصغرى بدقة."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "stat_ch1_db_hots_103",
    "titleEn": "Tipping vs Slipping Criterion for Block on Incline",
    "titleAr": "شرط الانقلاب قبل الانزلاق لقالب مستطيل على مستوى مائل",
    "difficulty": "hots",
    "questionEn": "A uniform rectangular block of base width $b$ and height $h$ rests on a rough plane inclined at $\\theta$. The block will TIP over before SLIPPING if:",
    "questionAr": "قالب مستطيل متجانس قاعدته $b$ وارتفاعه $h$ موضوع على مستوى خشن يميل بزاوية $\\theta$. ينقلب القالب قبل أن ينزلق إذا وفقط إذا كان:",
    "optionsEn": [
      "$\\frac{b}{h} < \\mu_s$",
      "$\\frac{b}{h} > \\mu_s$",
      "$\\frac{b}{h} = \\mu_s$",
      "$\\mu_s > 1$"
    ],
    "optionsAr": [
      "ب / ع < م_س",
      "ب / ع > م_س",
      "ب / ع = م_س",
      "م_س > 1"
    ],
    "correctAnswer": "$\\frac{b}{h} < \\mu_s$",
    "correctIndex": 0,
    "hintEn": "Tipping occurs when tan theta > b/h, while slipping occurs when tan theta > mu_s. Thus tipping precedes slipping if b/h < mu_s.",
    "hintAr": "يحدث الانقلاب عندما ظا هـ > ب/ع، ويحدث الانزلاق عندما ظا هـ > م_س، فينقلب أولاً إذا كان ب/ع < م_س.",
    "stepByStepSolutionEn": [
      "1. Apply advanced Lami's theorem or force polygon.",
      "2. Deduce exact minimum conditions."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قاعدة لامي أو مضلع القوى المتزن مع رد الفعل المحصل.",
      "٢. استنتاج الشروط الصغرى بدقة."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "stat_ch1_db_hots_104",
    "titleEn": "Cone of Friction Semi-Vertical Angle",
    "titleAr": "نصف زاوية رأس مخروط الاحتكاك",
    "difficulty": "hots",
    "questionEn": "The cone of friction is a right circular cone whose vertex is at the contact point. Its semi-vertical angle is:",
    "questionAr": "مخروط الاحتكاك هو مخروط دائري قائم رأسه عند نقطة التلامس ومحوره رد الفعل العمودي. نصف قياس زاوية رأسه يساوي:",
    "optionsEn": [
      "The angle of friction $\\lambda$",
      "$2\\lambda$",
      "$90^\\circ - \\lambda$",
      "$\\frac{\\lambda}{2}$"
    ],
    "optionsAr": [
      "زاوية الاحتكاك ل",
      "2 ل",
      "90° - ل",
      "ل / 2"
    ],
    "correctAnswer": "The angle of friction $\\lambda$",
    "correctIndex": 0,
    "hintEn": "By definition, the semi-vertical angle of the cone of friction is the friction angle lambda.",
    "hintAr": "نصف زاوية رأس مخروط الاحتكاك يساوي زاوية الاحتكاك ل.",
    "stepByStepSolutionEn": [
      "1. Apply advanced Lami's theorem or force polygon.",
      "2. Deduce exact minimum conditions."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قاعدة لامي أو مضلع القوى المتزن مع رد الفعل المحصل.",
      "٢. استنتاج الشروط الصغرى بدقة."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "stat_ch1_db_hots_105",
    "titleEn": "Capstan Belt Friction Formula (STEM Engineering)",
    "titleAr": "معادلة احتكاك السير والحبال حول أسطوانة كابستان",
    "difficulty": "hots",
    "questionEn": "A rope wrapped around a rough post with coefficient $\\mu$ through angle $\\beta$ (in radians) has tensions $T_2 > T_1$. The limiting ratio is:",
    "questionAr": "حبل ملفوف حول عامود أسطواني خشن معامل احتكاكه $\\mu$ بزاوية تماس $\\beta$ (بالراديان). النسبة بين قوتي الشد $T_2$ و $T_1$ عند وشك الحركة هي:",
    "optionsEn": [
      "$\\frac{T_2}{T_1} = e^{\\mu \\beta}$",
      "$\\frac{T_2}{T_1} = \\mu \\beta$",
      "$\\frac{T_2}{T_1} = 1 + \\mu \\beta$",
      "$\\frac{T_2}{T_1} = \\ln(\\mu \\beta)$"
    ],
    "optionsAr": [
      "ش₂ / ش₁ = هـ^(م_س ب)",
      "ش₂ / ش₁ = م_س ب",
      "ش₂ / ش₁ = 1 + م_س ب",
      "ش₂ / ش₁ = لو(م_س ب)"
    ],
    "correctAnswer": "$\\frac{T_2}{T_1} = e^{\\mu \\beta}$",
    "correctIndex": 0,
    "hintEn": "Famous Euler-Eytelwein (Capstan) formula: T2 / T1 = exp(mu * beta).",
    "hintAr": "معادلة أويلر القياسية لاحتكاك الأحزمة والسيور: ش₂ / ش₁ = هـ^(م ب).",
    "stepByStepSolutionEn": [
      "1. Apply advanced Lami's theorem or force polygon.",
      "2. Deduce exact minimum conditions."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قاعدة لامي أو مضلع القوى المتزن مع رد الفعل المحصل.",
      "٢. استنتاج الشروط الصغرى بدقة."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "stat_ch1_db_hots_106",
    "titleEn": "Efficiency of a Screw Jack",
    "titleAr": "كفاءة المرفع اللولبي الميكانيكي",
    "difficulty": "hots",
    "questionEn": "The mechanical efficiency $\\eta$ of a square-threaded screw jack with lead angle $\\alpha$ and friction angle $\\lambda$ is:",
    "questionAr": "الكفاءة الميكانيكية $\\eta$ لمرفع لولبي ذي أسنان مربعة زاوية سنته $\\alpha$ وزاوية احتكاكه $\\lambda$ تُعطى بالقانون:",
    "optionsEn": [
      "$\\frac{\\tan \\alpha}{\\tan(\\alpha + \\lambda)}$",
      "$\\frac{\\tan(\\alpha + \\lambda)}{\\tan \\alpha}$",
      "$\\frac{\\sin \\alpha}{\\sin(\\alpha + \\lambda)}$",
      "$\\frac{\\cos \\alpha}{\\cos(\\alpha + \\lambda)}$"
    ],
    "optionsAr": [
      "ظا أ / ظا(أ + ل)",
      "ظا(أ + ل) / ظا أ",
      "جا أ / جا(أ + ل)",
      "جتا أ / جتا(أ + ل)"
    ],
    "correctAnswer": "$\\frac{\\tan \\alpha}{\\tan(\\alpha + \\lambda)}$",
    "correctIndex": 0,
    "hintEn": "Standard engineering mechanics formula: eta = tan(alpha) / tan(alpha + lambda).",
    "hintAr": "القانون الهندسي لكفاءة المرفع اللولبي: الكفاءة = ظا أ / ظا(أ + ل).",
    "stepByStepSolutionEn": [
      "1. Apply advanced Lami's theorem or force polygon.",
      "2. Deduce exact minimum conditions."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قاعدة لامي أو مضلع القوى المتزن مع رد الفعل المحصل.",
      "٢. استنتاج الشروط الصغرى بدقة."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "stat_ch1_db_hots_107",
    "titleEn": "Self-Locking Condition of a Wedge or Screw",
    "titleAr": "شرط القفل الذاتي للمخرطة أو الوتد الميكانيكي",
    "difficulty": "hots",
    "questionEn": "A screw jack or wedge is self-locking (cannot reverse motion under load alone) if and only if:",
    "questionAr": "يكون المرفع اللولبي أو الوتد ذاتي الغلق (لا يرجع للوراء تحت تأثير الحمل وحده) إذا وفقط إذا كان:",
    "optionsEn": [
      "$\\alpha \\leq \\lambda$",
      "$\\alpha > \\lambda$",
      "$\\alpha = 2\\lambda$",
      "$\\lambda = 0$"
    ],
    "optionsAr": [
      "أ ≤ ل",
      "أ > ل",
      "أ = 2ل",
      "ل = 0"
    ],
    "correctAnswer": "$\\alpha \\leq \\lambda$",
    "correctIndex": 0,
    "hintEn": "Self-locking occurs when lead angle alpha is less than or equal to friction angle lambda.",
    "hintAr": "يحدث القفل الذاتي عندما تكون زاوية الميل أقل من أو تساوي زاوية الاحتكاك: أ ≤ ل.",
    "stepByStepSolutionEn": [
      "1. Apply advanced Lami's theorem or force polygon.",
      "2. Deduce exact minimum conditions."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قاعدة لامي أو مضلع القوى المتزن مع رد الفعل المحصل.",
      "٢. استنتاج الشروط الصغرى بدقة."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "stat_ch1_db_hots_108",
    "titleEn": "Two Connected Bodies on Inclined Plane",
    "titleAr": "جسمان متصلان بخيط على مستوى مائل خشن",
    "difficulty": "hots",
    "questionEn": "Two bodies of weights $W_1$ and $W_2$ with friction coefficients $\\mu_1 < \\mu_2$ are placed on a rough inclined plane connected by a taut string. Which body must be lower for the string to remain taut?",
    "questionAr": "جسمان وزناهما $W_1$ و $W_2$ معاملا احتكاكهما $\\mu_1 < \\mu_2$ موضوعان على مستوى مائل خشن ومتصلان بخيط مشدود. أي الجسمين يجب وضعه لأسفل لكي يظل الخيط مشدوداً؟",
    "optionsEn": [
      "The body with the smaller coefficient $\\mu_1$",
      "The body with the larger coefficient $\\mu_2$",
      "Either body",
      "The heavier body"
    ],
    "optionsAr": [
      "الجسم ذو معامل الاحتكاك الأصغر م_١",
      "الجسم ذو معامل الاحتكاك الأكبر م_٢",
      "أيٌّ منهما",
      "الجسم الأثقل وزناً"
    ],
    "correctAnswer": "The body with the smaller coefficient $\\mu_1$",
    "correctIndex": 0,
    "hintEn": "The body with less friction tends to accelerate faster down the plane, keeping the string taut if it is lower.",
    "hintAr": "الجسم ذو الاحتكاك الأقل يتحرك أسرع لأسفل، فيجب أن يكون في الأسفل ليشد الخيط.",
    "stepByStepSolutionEn": [
      "1. Apply advanced Lami's theorem or force polygon.",
      "2. Deduce exact minimum conditions."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قاعدة لامي أو مضلع القوى المتزن مع رد الفعل المحصل.",
      "٢. استنتاج الشروط الصغرى بدقة."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "stat_ch1_db_hots_109",
    "titleEn": "Horizontal Force in Non-Symmetric Plane on Inclined Plane",
    "titleAr": "قوة أفقية في اتجاه غير خط أكبر ميل",
    "difficulty": "hots",
    "questionEn": "A body on a rough plane is acted upon by a force perpendicular to the line of greatest slope. The resulting direction of impending motion is determined by:",
    "questionAr": "أثرت على جسم موضوع على مستوى مائل خشن قوة أفقية توازي خط المستوى الأفقي (عمودية على خط أكبر ميل). اتجاه وشك الحركة يتحدد بـ:",
    "optionsEn": [
      "The vector resultant of the force and the downhill weight component",
      "Down the line of greatest slope only",
      "Along the force only",
      "Up the plane"
    ],
    "optionsAr": [
      "المحصلة الاتجاهية للقوة ومركبة الوزن لأسفل المستوى",
      "اتجاه خط أكبر ميل لأسفل فقط",
      "اتجاه القوة فقط",
      "لأعلى المستوى"
    ],
    "correctAnswer": "The vector resultant of the force and the downhill weight component",
    "correctIndex": 0,
    "hintEn": "Friction opposes the resultant of all external applied forces in the plane.",
    "hintAr": "قوة الاحتكاك تعمل دائماً في عكس اتجاه محصلة القوى المؤثرة في المستوى.",
    "stepByStepSolutionEn": [
      "1. Apply advanced Lami's theorem or force polygon.",
      "2. Deduce exact minimum conditions."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قاعدة لامي أو مضلع القوى المتزن مع رد الفعل المحصل.",
      "٢. استنتاج الشروط الصغرى بدقة."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "stat_ch1_db_hots_110",
    "titleEn": "Minimum Horizontal Force to Prevent Downhill Sliding",
    "titleAr": "أقل قوة أفقية تمنع انزلاق الجسم لأسفل المستوى المائل",
    "difficulty": "hots",
    "questionEn": "A body of weight $W$ on an incline $\\theta$ with friction angle $\\lambda$ (where $\\theta > \\lambda$) is prevented from sliding down by a horizontal force $P$. The minimum $P$ is:",
    "questionAr": "جسم وزنه $W$ على مستوى مائل بزاوية $\\theta$ وزاوية احتكاكه $\\lambda$ (حيث $\\theta > \\lambda$). أقل قوة أفقية $P$ تمنعه من الانزلاق لأسفل هي:",
    "optionsEn": [
      "$W \\tan(\\theta - \\lambda)$",
      "$W \\tan(\\theta + \\lambda)$",
      "$W \\sin(\\theta - \\lambda)$",
      "$W \\cos(\\theta - \\lambda)$"
    ],
    "optionsAr": [
      "و ظا(هـ - ل)",
      "و ظا(هـ + ل)",
      "و جا(هـ - ل)",
      "و جتا(هـ - ل)"
    ],
    "correctAnswer": "$W \\tan(\\theta - \\lambda)$",
    "correctIndex": 0,
    "hintEn": "By resolving or using triangle of forces with R' at angle lambda: P = W tan(theta - lambda).",
    "hintAr": "أقل قوة أفقية تمنع الانزلاق لأسفل هي و ظا(هـ - ل).",
    "stepByStepSolutionEn": [
      "1. Apply advanced Lami's theorem or force polygon.",
      "2. Deduce exact minimum conditions."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق قاعدة لامي أو مضلع القوى المتزن مع رد الفعل المحصل.",
      "٢. استنتاج الشروط الصغرى بدقة."
    ],
    "teacherTipEn": "STEM Baccalaureate and Ministry High-Order Thinking Problem.",
    "teacherTipAr": "مسألة متقدمة من بنك أسئلة الوزارة ومدارس المتفوقين STEM."
  },
  {
    "id": "stat_ch1_db_hots_111",
    "titleEn": "Least Force to Pull Body Up an Incline",
    "titleAr": "أقل قوة لشد جسم لأعلى مستوى مائل",
    "difficulty": "hots",
    "questionEn": "A body of weight $W = 100\\text{ N}$ rests on a rough plane inclined at $\\theta = 30^\\circ$ to the horizontal, with friction angle $\\lambda = 15^\\circ$. What is the absolute MINIMUM force $P$ (acting at the optimal angle) required to pull the body up the plane?",
    "questionAr": "جسم وزنه $100\\text{ نيوتن}$ مستقر على مستوى خشن يميل بزاوية $\\theta = 30^\\circ$ على الأفقي وزاوية احتكاكه $\\lambda = 15^\\circ$. ما أقل قوة $P$ مطلقاً (تعمل في الاتجاه الأمثل) تلزم لشد الجسم لأعلى المستوى؟",
    "optionsEn": [
      "$50\\sqrt{2}\\text{ N}$",
      "$50\\text{ N}$",
      "$100\\sin(15^\\circ)\\text{ N}$",
      "$25\\sqrt{6}\\text{ N}$"
    ],
    "optionsAr": [
      "$50\\sqrt{2}\\text{ نيوتن}$",
      "$50\\text{ نيوتن}$",
      "$100\\sin 15^\\circ\\text{ نيوتن}$",
      "$25\\sqrt{6}\\text{ نيوتن}$"
    ],
    "correctAnswer": "$50\\sqrt{2}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The formula for least force up an incline is $P_{min} = W\\sin(\\theta + \\lambda)$.",
    "hintAr": "القانون العام لأقل قوة لأعلى مستوى: $P_{min} = W\\sin(\\theta + \\lambda)$.",
    "stepByStepSolutionEn": [
      "1. By Lami's theorem or force resolution, pulling at angle $\\alpha$ to the plane gives $P = \\frac{W\\sin(\\theta + \\lambda)}{\\cos(\\alpha - \\lambda)}$.",
      "2. The minimum occurs when $\\cos(\\alpha - \\lambda) = 1 \\implies \\alpha = \\lambda = 15^\\circ$.",
      "3. $P_{min} = W\\sin(\\theta + \\lambda) = 100\\sin(30^\\circ + 15^\\circ) = 100\\sin(45^\\circ) = 50\\sqrt{2}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام قاعدة لامي بين القوى الثلاث: $P = \\frac{W\\sin(\\theta + \\lambda)}{\\cos(\\alpha - \\lambda)}$.",
      "٢. أقل قوة عندما يكون المقام 1، أي $\\alpha = \\lambda = 15^\\circ$.",
      "٣. $P_{min} = 100\\sin(30^\\circ + 15^\\circ) = 100\\sin 45^\\circ = 50\\sqrt{2}\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Memorize $P_{min} = W\\sin(\\theta + \\lambda)$ for upward pull and $P_{min} = W\\sin(\\theta - \\lambda)$ for preventing slip down.",
    "teacherTipAr": "احفظ: أقل قوة للتحريك لأعلى هي $W\\sin(\\theta + \\lambda)$، وأقل قوة لمنع الانزلاق لأسفل هي $W\\sin(\\theta - \\lambda)$."
  },
  {
    "id": "stat_ch1_db_hots_112",
    "titleEn": "Optimal Direction of Least Force on Incline",
    "titleAr": "الاتجاه الأمثل لأقل قوة على مستوى مائل",
    "difficulty": "hots",
    "questionEn": "In the setup of Q111, what angle does the line of action of the minimum force $P$ make with the line of greatest slope of the plane?",
    "questionAr": "في السؤال السابق، ما الزاوية التي يصنعها خط عمل أقل قوة $P$ مع خط أكبر ميل للمستوى؟",
    "optionsEn": [
      "$15^\\circ$ above the plane",
      "$30^\\circ$ above the plane",
      "$45^\\circ$ above the plane",
      "$0^\\circ$ (parallel to plane)"
    ],
    "optionsAr": [
      "$15^\\circ$ لأعلى المستوى",
      "$30^\\circ$ لأعلى المستوى",
      "$45^\\circ$ لأعلى المستوى",
      "$0^\\circ$ (موازية للمستوى)"
    ],
    "correctAnswer": "$15^\\circ$ above the plane",
    "correctIndex": 0,
    "hintEn": "The optimal pulling angle is $\\alpha = \\lambda$ above the plane.",
    "hintAr": "زاوية الشد المثلى هي $\\alpha = \\lambda$ لأعلى المستوى.",
    "stepByStepSolutionEn": [
      "1. The force required is $P(\\alpha) = \\frac{W\\sin(\\theta + \\lambda)}{\\cos(\\alpha - \\lambda)}$.",
      "2. For $P$ to be minimized, $\\cos(\\alpha - \\lambda)$ must attain its maximum value of 1.",
      "3. This requires $\\alpha - \\lambda = 0 \\implies \\alpha = \\lambda = 15^\\circ$ above the inclined plane."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة القوة بدلالة زاوية ميلها: $P = \\frac{W\\sin(\\theta + \\lambda)}{\\cos(\\alpha - \\lambda)}$.",
      "٢. تصل القوة لأدنى قيمة عندما $\\cos(\\alpha - \\lambda) = 1$.",
      "٣. أي $\\alpha = \\lambda = 15^\\circ$ لأعلى المستوى المائل."
    ],
    "teacherTipEn": "This optimal angle ensures that the applied force is perpendicular to the resultant reaction $R'$.",
    "teacherTipAr": "هذه الزاوية تجعل القوة المؤثرة عمودية تماماً على رد الفعل المحصل $R'$."
  },
  {
    "id": "stat_ch1_db_hots_113",
    "titleEn": "Toppling versus Sliding of a Cube on Incline",
    "titleAr": "الانقلاب مقابل الانزلاق لمكعب على مستوى مائل",
    "difficulty": "hots",
    "questionEn": "A uniform solid cube of side length $a$ rests on a rough inclined plane. As the angle of inclination $\\theta$ is gradually increased from $0^\\circ$, the cube will TOPPLE before it slides if and only if:",
    "questionAr": "مكعب مصمت منتظم طول ضلعه $a$ مستقر على مستوى مائل خشن. عند زيادة زاوية ميل المستوى $\\theta$ تدريجياً بدءاً من الصفر، فإن المكعب سينقلب قبل أن ينزلق إذا وفقط إذا كان:",
    "optionsEn": [
      "$\\mu_s > 1$",
      "$\\mu_s < 1$",
      "$\\mu_s > 0.5$",
      "$\\mu_s < 0.5$"
    ],
    "optionsAr": [
      "$\\mu_s > 1$",
      "$\\mu_s < 1$",
      "$\\mu_s > 0.5$",
      "$\\mu_s < 0.5$"
    ],
    "correctAnswer": "$\\mu_s > 1$",
    "correctIndex": 0,
    "hintEn": "Sliding occurs when $\\tan\\theta = \\mu_s$. Toppling occurs when the line of action of weight passes outside the base: $\\tan\\theta = 1$.",
    "hintAr": "الانزلاق يحدث عند $\\tan\\theta = \\mu_s$. والانقلاب يحدث عندما يخرج خط عمل الوزن عن حافة القاعدة: $\\tan\\theta = 1$.",
    "stepByStepSolutionEn": [
      "1. The center of mass is at $(a/2, a/2)$.",
      "2. The line of action of gravity passes through the lower edge when $\\tan\\theta_{topple} = 1 \\implies \\theta_{topple} = 45^\\circ$.",
      "3. Sliding begins when $\\tan\\theta_{slide} = \\mu_s$.",
      "4. For toppling to happen before sliding, $\\theta_{topple} < \\theta_{slide} \\implies 1 < \\mu_s \\implies \\mu_s > 1$."
    ],
    "stepByStepSolutionAr": [
      "١. مركز ثقل المكعب يقع عند $(a/2, a/2)$.",
      "٢. يمر خط عمل الوزن بالحافة السفلية عندما $\\tan\\theta = 1 \\implies \\theta = 45^\\circ$.",
      "٣. يحدث وشك الانزلاق عندما $\\tan\\theta = \\mu_s$.",
      "٤. لكي ينقلب قبل أن ينزلق، يلزم أن يكون $1 < \\mu_s \\implies \\mu_s > 1$."
    ],
    "teacherTipEn": "If $\\mu_s < 1$, the cube slides at $\\theta = \\arctan(\\mu_s) < 45^\\circ$ without toppling.",
    "teacherTipAr": "إذا كان $\\mu_s < 1$ ينزلق المكعب عند زاوية أقل من $45^\\circ$ دون أن ينقلب."
  },
  {
    "id": "stat_ch1_db_hots_114",
    "titleEn": "Maximum Height of Applied Pull to Prevent Toppling",
    "titleAr": "أقصى ارتفاع لنقطة تأثير القوة لتجنب الانقلاب",
    "difficulty": "hots",
    "questionEn": "A uniform rectangular block of weight $W$, base width $b = 40\\text{ cm}$, and height $h = 100\\text{ cm}$ rests on a rough horizontal floor with $\\mu_s = 0.4$. A horizontal force $P$ is applied at a height $y$ above the base. What is the maximum height $y_{max}$ at which $P$ can act such that the block slides without toppling?",
    "questionAr": "متوازي مستطيلات منتظم وزنه $W$ وعرض قاعدته $b = 40\\text{ سم}$ وارتفاعه $h = 100\\text{ سم}$ على أرضية أفقية خشنة معامل احتكاكها $0.4$. أثرت قوة أفقية $P$ على ارتفاع $y$ من القاعدة. ما أقصى ارتفاع $y_{max}$ يمكن أن تؤثر عنده القوة بحيث ينزلق الجسم دون أن ينقلب؟",
    "optionsEn": [
      "$50\\text{ cm}$",
      "$40\\text{ cm}$",
      "$25\\text{ cm}$",
      "$60\\text{ cm}$"
    ],
    "optionsAr": [
      "$50\\text{ سم}$",
      "$40\\text{ سم}$",
      "$25\\text{ سم}$",
      "$60\\text{ سم}$"
    ],
    "correctAnswer": "$50\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "To slide without toppling, taking moments about the tipping edge: $P y \\le W(b/2)$ at sliding force $P = \\mu_s W$.",
    "hintAr": "لكي ينزلق دون انقلاب: $P y \\le W(b/2)$ عند قوة الانزلاق $P = \\mu_s W$.",
    "stepByStepSolutionEn": [
      "1. At impending sliding, $P = \\mu_s W = 0.4 W$.",
      "2. Taking moments about the front tipping corner: tipping moment is $P y$, stabilizing moment of weight is $W \\times \\frac{b}{2} = 20 W$.",
      "3. For sliding before tipping: $P y \\le 20 W \\implies (0.4 W) y \\le 20 W$.",
      "4. Dividing by $0.4 W$: $y \\le \\frac{20}{0.4} = 50\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "١. عند وشك الانزلاق: $P = \\mu_s W = 0.4 W$.",
      "٢. بأخذ العزوم حول الحافة الأمامية: عزم الانقلاب $P y$، وعزم الوزن $20 W$.",
      "٣. شرط حدوث الانزلاق دون انقلاب: $0.4 W y \\le 20 W$.",
      "٤. $y \\le \\frac{20}{0.4} = 50\\text{ سم}$."
    ],
    "teacherTipEn": "If $y > 50\\text{ cm}$, the block will tip over around its front edge before sliding starts.",
    "teacherTipAr": "إذا تجاوز ارتفاع القوة $50\\text{ سم}$ فإن الجسم ينقلب حول حافته قبل أن ينزلق."
  },
  {
    "id": "stat_ch1_db_hots_115",
    "titleEn": "Horizontal Force Perpendicular to Line of Greatest Slope",
    "titleAr": "قوة أفقية متعامدة مع خط أكبر ميل لمستوى مائل",
    "difficulty": "hots",
    "questionEn": "A body of weight $W$ rests on a rough plane inclined at angle $\\theta$ to the horizontal with static friction coefficient $\\mu_s$ (where $\\mu_s > \\tan\\theta$). A force $P$ is applied in the plane of the incline perpendicular to the line of greatest slope. What is the maximum value of $P$ for which equilibrium is maintained?",
    "questionAr": "جسم وزنه $W$ على مستوى خشن يميل بزاوية $\\theta$ على الأفقي ومعامل احتكاكه $\\mu_s$ (حيث $\\mu_s > \\tan\\theta$). تؤثر عليه قوة $P$ في مستوى السطح متعامدة مع خط أكبر ميل. ما أقصى قيمة للقوة $P$ تحفظ توازن الجسم؟",
    "optionsEn": [
      "$W\\sqrt{\\mu_s^2\\cos^2\\theta - \\sin^2\\theta}$",
      "$W(\\mu_s\\cos\\theta - \\sin\\theta)$",
      "$W\\sqrt{\\mu_s^2\\cos^2\\theta + \\sin^2\\theta}$",
      "$\\mu_s W\\cos\\theta$"
    ],
    "optionsAr": [
      "$W\\sqrt{\\mu_s^2\\cos^2\\theta - \\sin^2\\theta}$",
      "$W(\\mu_s\\cos\\theta - \\sin\\theta)$",
      "$W\\sqrt{\\mu_s^2\\cos^2\\theta + \\sin^2\\theta}$",
      "$\\mu_s W\\cos\\theta$"
    ],
    "correctAnswer": "$W\\sqrt{\\mu_s^2\\cos^2\\theta - \\sin^2\\theta}$",
    "correctIndex": 0,
    "hintEn": "The resultant in-plane force is $\\sqrt{P^2 + (W\\sin\\theta)^2}$. At limiting equilibrium, this equals $\\mu_s R = \\mu_s W\\cos\\theta$.",
    "hintAr": "محصلة القوى في مستوى السطح هي $\\sqrt{P^2 + (W\\sin\\theta)^2}$ وتساوي $\\mu_s W\\cos\\theta$ عند وشك الحركة.",
    "stepByStepSolutionEn": [
      "1. The force down the slope is $F_1 = W\\sin\\theta$.",
      "2. The transverse force in the plane is $F_2 = P$.",
      "3. Orthogonal resultant: $F_{res} = \\sqrt{P^2 + W^2\\sin^2\\theta}$.",
      "4. Limiting friction: $F_s = \\mu_s W\\cos\\theta$.",
      "5. Setting $F_{res} = F_s$: $P^2 + W^2\\sin^2\\theta = \\mu_s^2 W^2\\cos^2\\theta \\implies P = W\\sqrt{\\mu_s^2\\cos^2\\theta - \\sin^2\\theta}$."
    ],
    "stepByStepSolutionAr": [
      "١. مركبة القوة لأسفل في اتجاه خط أكبر ميل: $W\\sin\\theta$.",
      "٢. القوة العرضية: $P$.",
      "٣. المحصلة في مستوى السطح: $\\sqrt{P^2 + W^2\\sin^2\\theta}$.",
      "٤. أقصى احتكاك متاح: $\\mu_s W\\cos\\theta$.",
      "٥. عند وشك الحركة: $P = W\\sqrt{\\mu_s^2\\cos^2\\theta - \\sin^2\\theta}$."
    ],
    "teacherTipEn": "Real-world application: lateral side-wind force needed to blow a parked car sideways down an icy mountain road.",
    "teacherTipAr": "تطبيق هندسي: قوة الرياح الجانبية اللازمة لزحزحة سيارة متوقفة على طريق جبلي مائل."
  },
  {
    "id": "stat_ch1_db_hots_116",
    "titleEn": "Critical Incline Angle for Two Connected Unequal Blocks",
    "titleAr": "زاوية الميل الحرجة لكتلتين متصلتين بمعاملي احتكاك مختلفين",
    "difficulty": "hots",
    "questionEn": "Two bodies of weights $W_1$ and $W_2$ with static friction coefficients $\\mu_1$ and $\\mu_2$ respectively (with $\\mu_1 < \\mu_2$) are tied by a light string and placed on a rough inclined plane with $W_1$ lower down the incline. At what angle of inclination $\\theta$ is the combined system on the verge of sliding down?",
    "questionAr": "جسمان وزناهما $W_1$ و $W_2$ ومعاملا احتكاكهما $\\mu_1$ و $\\mu_2$ على الترتيب (حيث $\\mu_1 < \\mu_2$) متصلان بخيط خفيف وموضوعان على مستوى مائل خشن بحيث $W_1$ لأسفل المستوى. عند أي زاوية ميل $\\theta$ تكون المجموعة على وشك الانزلاق لأسفل؟",
    "optionsEn": [
      "$\\tan\\theta = \\frac{\\mu_1 W_1 + \\mu_2 W_2}{W_1 + W_2}$",
      "$\\tan\\theta = \\frac{\\mu_1 + \\mu_2}{2}$",
      "$\\tan\\theta = \\mu_1$",
      "$\\tan\\theta = \\mu_2$"
    ],
    "optionsAr": [
      "$\\tan\\theta = \\frac{\\mu_1 W_1 + \\mu_2 W_2}{W_1 + W_2}$",
      "$\\tan\\theta = \\frac{\\mu_1 + \\mu_2}{2}$",
      "$\\tan\\theta = \\mu_1$",
      "$\\tan\\theta = \\mu_2$"
    ],
    "correctAnswer": "$\\tan\\theta = \\frac{\\mu_1 W_1 + \\mu_2 W_2}{W_1 + W_2}$",
    "correctIndex": 0,
    "hintEn": "Equate total gravity component along the plane to total limiting friction: $(W_1 + W_2)\\sin\\theta = (\\mu_1 W_1 + \\mu_2 W_2)\\cos\\theta$.",
    "hintAr": "ساوِ مجموع مركبات الوزن بمجموع قوى الاحتكاك النهائي للكتلتين.",
    "stepByStepSolutionEn": [
      "1. Downward gravity component: $(W_1 + W_2)\\sin\\theta$.",
      "2. Total limiting friction: $\\mu_1 W_1\\cos\\theta + \\mu_2 W_2\\cos\\theta$.",
      "3. Impending motion: $(W_1 + W_2)\\sin\\theta = (\\mu_1 W_1 + \\mu_2 W_2)\\cos\\theta$.",
      "4. Dividing by $(W_1 + W_2)\\cos\\theta$: $\\tan\\theta = \\frac{\\mu_1 W_1 + \\mu_2 W_2}{W_1 + W_2}$."
    ],
    "stepByStepSolutionAr": [
      "١. القوة المحركة لأسفل: $(W_1 + W_2)\\sin\\theta$.",
      "٢. الاحتكاك النهائي الكلي المقاوم: $(\\mu_1 W_1 + \\mu_2 W_2)\\cos\\theta$.",
      "٣. عند وشك الانزلاق: $\\tan\\theta = \\frac{\\mu_1 W_1 + \\mu_2 W_2}{W_1 + W_2}$."
    ],
    "teacherTipEn": "The effective coefficient of friction of the system is the weighted average of the two individual coefficients.",
    "teacherTipAr": "معامل الاحتكاك الفعال للمجموعة هو المتوسط المرجح لمعاملي الاحتكاك بأوزانهما."
  },
  {
    "id": "stat_ch1_db_hots_117",
    "titleEn": "Tension in String between Connected Blocks on Incline",
    "titleAr": "الشد في الخيط بين الكتلتين على المستوى المائل",
    "difficulty": "hots",
    "questionEn": "In the setup of Q116, at the critical inclination angle $\\tan\\theta = \\frac{\\mu_1 W_1 + \\mu_2 W_2}{W_1 + W_2}$, what is the tension $T$ in the connecting string?",
    "questionAr": "في السؤال السابق، عند زاوية الميل الحرجة، ما مقدار الشد $T$ في الخيط الواصل بين الكتلتين؟",
    "optionsEn": [
      "$\\frac{W_1 W_2(\\mu_2 - \\mu_1)\\cos\\theta}{W_1 + W_2}$",
      "$\\frac{W_1 W_2(\\mu_1 + \\mu_2)\\cos\\theta}{W_1 + W_2}$",
      "$0$",
      "$W_1\\sin\\theta$"
    ],
    "optionsAr": [
      "$\\frac{W_1 W_2(\\mu_2 - \\mu_1)\\cos\\theta}{W_1 + W_2}$",
      "$\\frac{W_1 W_2(\\mu_1 + \\mu_2)\\cos\\theta}{W_1 + W_2}$",
      "$0$",
      "$W_1\\sin\\theta$"
    ],
    "correctAnswer": "$\\frac{W_1 W_2(\\mu_2 - \\mu_1)\\cos\\theta}{W_1 + W_2}$",
    "correctIndex": 0,
    "hintEn": "Isolate block 1: $T = W_1\\cos\\theta(\\tan\\theta - \\mu_1)$. Substitute $\\tan\\theta$.",
    "hintAr": "ادرس اتزان الكتلة السفلية وعوض عن $\\tan\\theta$.",
    "stepByStepSolutionEn": [
      "1. Equilibrium of lower block 1: $T = W_1\\sin\\theta - \\mu_1 W_1\\cos\\theta = W_1\\cos\\theta(\\tan\\theta - \\mu_1)$.",
      "2. Since $\\tan\\theta = \\frac{\\mu_1 W_1 + \\mu_2 W_2}{W_1 + W_2}$, $\\tan\\theta - \\mu_1 = \\frac{W_2(\\mu_2 - \\mu_1)}{W_1 + W_2}$.",
      "3. Therefore, $T = \\frac{W_1 W_2(\\mu_2 - \\mu_1)\\cos\\theta}{W_1 + W_2}$."
    ],
    "stepByStepSolutionAr": [
      "١. للكتلة السفلية: $T = W_1\\cos\\theta(\\tan\\theta - \\mu_1)$.",
      "٢. بالتعويض عن $\\tan\\theta$: ينتج القوس مساوياً $\\frac{W_2(\\mu_2 - \\mu_1)}{W_1 + W_2}$.",
      "٣. ينتج: $T = \\frac{W_1 W_2(\\mu_2 - \\mu_1)\\cos\\theta}{W_1 + W_2}$."
    ],
    "teacherTipEn": "Notice that since $\\mu_2 > \\mu_1$, $T > 0$, confirming the string is indeed taut!",
    "teacherTipAr": "بما أن $\\mu_2 > \\mu_1$ فإن الشد موجب، مما يؤكد أن الخيط مشدود بالفعل."
  },
  {
    "id": "stat_ch1_db_hots_118",
    "titleEn": "Rope Wrapped Around a Rough Bollard (Capstan Equation)",
    "titleAr": "احتكاك الحبال على أسطوانة خشنة (معادلة كابستان)",
    "difficulty": "hots",
    "questionEn": "A light flexible rope passes around a fixed rough circular bollard with friction coefficient $\\mu = \\frac{\\ln(2)}{\\pi}$. What is the ratio of tensions $T_2 / T_1$ at impending slip when the rope makes exactly TWO full turns ($4\\pi\\text{ radians}$) around the bollard?",
    "questionAr": "حبل خفيف مرن يلتف حول أسطوانة دائرية خشنة معامل احتكاكها $\\mu = \\frac{\\ln 2}{\\pi}$. ما النسبة بين الشدين $T_2 / T_1$ عند وشك الانزلاق عندما يلتف الحبل دورتين كاملتين ($4\\pi\\text{ راديان}$) حول الأسطوانة؟",
    "optionsEn": [
      "$16$",
      "$8$",
      "$4$",
      "$32$"
    ],
    "optionsAr": [
      "$16$",
      "$8$",
      "$4$",
      "$32$"
    ],
    "correctAnswer": "$16$",
    "correctIndex": 0,
    "hintEn": "Use the capstan formula: $T_2 = T_1 e^{\\mu \\beta}$.",
    "hintAr": "استخدم قانون الحبال: $T_2 = T_1 e^{\\mu \\beta}$.",
    "stepByStepSolutionEn": [
      "1. Total angle of lap: $\\beta = 4\\pi\\text{ radians}$.",
      "2. Capstan exponent: $\\mu \\beta = \\frac{\\ln 2}{\\pi} \\times 4\\pi = 4\\ln 2 = \\ln(16)$.",
      "3. Ratio of tensions: $\\frac{T_2}{T_1} = e^{\\ln 16} = 16$."
    ],
    "stepByStepSolutionAr": [
      "١. زاوية الالتفاف: $\\beta = 4\\pi\\text{ راديان}$.",
      "٢. الأس في معادلة كابستان: $\\mu \\beta = 4\\ln 2 = \\ln 16$.",
      "٣. النسبة: $T_2 / T_1 = e^{\\ln 16} = 16$."
    ],
    "teacherTipEn": "This exponential amplification is why a single dock worker can hold a massive ship with just a few turns of rope.",
    "teacherTipAr": "هذا التضاعف الأسي يفسر قدرة بحار واحد على تثبيت سفينة ضخمة بلف الحبل بضع دورات حول المربط."
  },
  {
    "id": "stat_ch1_db_hots_119",
    "titleEn": "Orthogonal Horizontal Forces at Limiting Equilibrium",
    "titleAr": "قوتان أفقيتان متعامدتان عند الاتزان النهائي",
    "difficulty": "hots",
    "questionEn": "A body of weight $W = 50\\text{ N}$ rests on a rough horizontal plane with $\\mu_s = 0.6$. A horizontal force $F_1 = 18\\text{ N}$ acts on the body. A second horizontal force $F_2$ perpendicular to $F_1$ is applied. What is the MAXIMUM magnitude of $F_2$ such that the body remains in equilibrium?",
    "questionAr": "جسم وزنه $50\\text{ نيوتن}$ مستقر على مستوى أفقي خشن معامل احتكاكه $0.6$. تؤثر عليه قوة أفقية $F_1 = 18\\text{ نيوتن}$، وقوة أفقية أخرى $F_2$ متعامدة مع $F_1$. ما أقصى مقدار للقوة $F_2$ يحفظ اتزان الجسم؟",
    "optionsEn": [
      "$24\\text{ N}$",
      "$12\\text{ N}$",
      "$30\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "optionsAr": [
      "$24\\text{ نيوتن}$",
      "$12\\text{ نيوتن}$",
      "$30\\text{ نيوتن}$",
      "$20\\text{ نيوتن}$"
    ],
    "correctAnswer": "$24\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The resultant applied force $\\sqrt{F_1^2 + F_2^2}$ must not exceed limiting friction $F_s = \\mu_s W = 30\\text{ N}$.",
    "hintAr": "محصلة القوتين المتعامدتين لا تتجاوز الاحتكاك النهائي $F_s = \\mu_s W = 30\\text{ نيوتن}$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = W = 50\\text{ N}$.",
      "2. Maximum static friction: $F_s = \\mu_s R = 0.6 \\times 50 = 30\\text{ N}$.",
      "3. The two applied horizontal forces are perpendicular, so their resultant is $R_{net} = \\sqrt{F_1^2 + F_2^2} = \\sqrt{18^2 + F_2^2}$.",
      "4. For equilibrium: $R_{net} \\le F_s \\implies 18^2 + F_2^2 \\le 30^2 \\implies 324 + F_2^2 \\le 900$.",
      "5. $F_2^2 \\le 576 \\implies F_2 \\le 24\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 50\\text{ نيوتن}$.",
      "٢. أقصى قوة احتكاك نهائي: $F_s = 0.6 \\times 50 = 30\\text{ نيوتن}$.",
      "٣. محصلة القوتين المتعامدتين: $\\sqrt{18^2 + F_2^2}$.",
      "٤. شرط الاتزان: $18^2 + F_2^2 \\le 30^2 = 900$.",
      "٥. $F_2^2 \\le 900 - 324 = 576 \\implies F_2 \\le 24\\text{ نيوتن}$."
    ],
    "teacherTipEn": "A classic 3-4-5 Pythagorean triangle scaled by 6: (18, 24, 30).",
    "teacherTipAr": "تطبيق مباشر لمثلث فيثاغورس الشهير مضاعفاً في 6: (18، 24، 30)."
  },
  {
    "id": "stat_ch1_db_hots_120",
    "titleEn": "Optimal Lead Angle for Maximum Efficiency of a Screw Jack",
    "titleAr": "زاوية الخطوة المثلى لأقصى كفاءة لمرفاع لولبي",
    "difficulty": "hots",
    "questionEn": "A square-threaded screw jack has friction angle $\\lambda$. Its mechanical efficiency is given by $\\eta = \\frac{\\tan\\alpha}{\\tan(\\alpha + \\lambda)}$, where $\\alpha$ is the helix (lead) angle. The value of $\\alpha$ that maximizes the efficiency is:",
    "questionAr": "مرفاع لولبي زاوية احتكاكه $\\lambda$ وكفاءته الميكانيكية تُعطى بالعلاقة $\\eta = \\frac{\\tan\\alpha}{\\tan(\\alpha + \\lambda)}$ حيث $\\alpha$ زاوية خطوة اللولب. القيمة التي تجعل الكفاءة أقصى ما يمكن هي:",
    "optionsEn": [
      "$45^\\circ - \\frac{\\lambda}{2}$",
      "$45^\\circ + \\frac{\\lambda}{2}$",
      "$\\frac{\\lambda}{2}$",
      "$90^\\circ - \\lambda$"
    ],
    "optionsAr": [
      "$45^\\circ - \\frac{\\lambda}{2}$",
      "$45^\\circ + \\frac{\\lambda}{2}$",
      "$\\frac{\\lambda}{2}$",
      "$90^\\circ - \\lambda$"
    ],
    "correctAnswer": "$45^\\circ - \\frac{\\lambda}{2}$",
    "correctIndex": 0,
    "hintEn": "Express $\\eta$ in terms of sines and maximize: requires $2\\alpha + \\lambda = 90^\\circ$.",
    "hintAr": "أعد كتابة الكفاءة بدلالة الجيب وضع $2\\alpha + \\lambda = 90^\\circ$.",
    "stepByStepSolutionEn": [
      "1. Efficiency: $\\eta = 1 - \\frac{2\\sin\\lambda}{\\sin(2\\alpha + \\lambda) + \\sin\\lambda}$.",
      "2. Maximum occurs when $\\sin(2\\alpha + \\lambda) = 1$.",
      "3. $2\\alpha + \\lambda = 90^\\circ \\implies \\alpha = 45^\\circ - \\frac{\\lambda}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. كفاءة المرفاع: $\\eta = 1 - \\frac{2\\sin\\lambda}{\\sin(2\\alpha + \\lambda) + \\sin\\lambda}$.",
      "٢. أقصى كفاءة عندما $\\sin(2\\alpha + \\lambda) = 1$.",
      "٣. بالحل ينتج: $\\alpha = 45^\\circ - \\frac{\\lambda}{2}$."
    ],
    "teacherTipEn": "At this optimal angle, the maximum efficiency is $\\eta_{max} = \\frac{1 - \\sin\\lambda}{1 + \\sin\\lambda}$.",
    "teacherTipAr": "أقصى كفاءة للمرفاع اللولبي تساوي $\\frac{1 - \\sin\\lambda}{1 + \\sin\\lambda}$."
  },
  {
    "id": "stat_ch1_db_hots_121",
    "titleEn": "Limiting Equilibrium of a Ladder against Rough Wall and Floor",
    "titleAr": "الاتزان النهائي لسلم يستند على أرض وحائط خشنين",
    "difficulty": "hots",
    "questionEn": "A uniform ladder of length $L$ and weight $W$ rests with its upper end against a rough vertical wall ($\\mu_2$) and its lower end on a rough horizontal floor ($\\mu_1$). If the ladder is on the verge of slipping at both ends, what is the angle of inclination $\\theta$ of the ladder to the horizontal floor?",
    "questionAr": "سلم منتظم طوله $L$ ووزنه $W$ يستند بطرفه العلوي على حائط رأسي خشن (معامل احتكاكه $\\mu_2$) وبطرفه السفلي على أرض أفقية خشنة (معامل احتكاكها $\\mu_1$). إذا كان السلم على وشك الانزلاق عند الطرفين، فما زاوية ميل السلم $\\theta$ على الأرض الأفقية؟",
    "optionsEn": [
      "$\\tan\\theta = \\frac{1 - \\mu_1 \\mu_2}{2\\mu_1}$",
      "$\\tan\\theta = \\frac{1}{2\\mu_1}$",
      "$\\tan\\theta = \\frac{1 + \\mu_1 \\mu_2}{2\\mu_1}$",
      "$\\tan\\theta = \\frac{2\\mu_1}{1 - \\mu_1 \\mu_2}$"
    ],
    "optionsAr": [
      "$\\tan\\theta = \\frac{1 - \\mu_1 \\mu_2}{2\\mu_1}$",
      "$\\tan\\theta = \\frac{1}{2\\mu_1}$",
      "$\\tan\\theta = \\frac{1 + \\mu_1 \\mu_2}{2\\mu_1}$",
      "$\\tan\\theta = \\frac{2\\mu_1}{1 - \\mu_1 \\mu_2}$"
    ],
    "correctAnswer": "$\\tan\\theta = \\frac{1 - \\mu_1 \\mu_2}{2\\mu_1}$",
    "correctIndex": 0,
    "hintEn": "Resolve vertically and horizontally, then take moments about the base.",
    "hintAr": "معادلات الاتزان: $\\Sigma X = 0$ و $\\Sigma Y = 0$ ومجموع العزوم حول القاعدة يساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Horizontal equilibrium: $R_2 = \\mu_1 R_1$.",
      "2. Vertical equilibrium: $R_1 + \\mu_2 R_2 = W \\implies R_1(1 + \\mu_1 \\mu_2) = W$.",
      "3. Moments about base: $W \\frac{L}{2}\\cos\\theta = R_2 L\\sin\\theta + (\\mu_2 R_2) L\\cos\\theta$.",
      "4. Dividing by $L\\cos\\theta$ and substituting gives: $\\tan\\theta = \\frac{1 - \\mu_1 \\mu_2}{2\\mu_1}$."
    ],
    "stepByStepSolutionAr": [
      "١. الاتزان الأفقي: $R_2 = \\mu_1 R_1$.",
      "٢. الاتزان الرأسي: $R_1(1 + \\mu_1 \\mu_2) = W$.",
      "٣. العزوم حول القاعدة: $W \\frac{L}{2}\\cos\\theta = R_2 L\\sin\\theta + \\mu_2 R_2 L\\cos\\theta$.",
      "٤. بالتبسيط ينتج: $\\tan\\theta = \\frac{1 - \\mu_1 \\mu_2}{2\\mu_1}$."
    ],
    "teacherTipEn": "Notice that if the wall is smooth ($\\mu_2 = 0$), this reduces to the well-known formula $\\tan\\theta = \\frac{1}{2\\mu_1}$.",
    "teacherTipAr": "إذا كان الحائط أملس ($\\mu_2 = 0$)، يؤول القانون للصيغة الشهيرة $\\tan\\theta = \\frac{1}{2\\mu_1}$."
  },
  {
    "id": "stat_ch1_db_hots_122",
    "titleEn": "Ladder on Smooth Wall: Limiting Angle with Floor",
    "titleAr": "سلم يستند على حائط أملس وأرض خشنة",
    "difficulty": "hots",
    "questionEn": "A uniform ladder rests with its upper end against a smooth vertical wall and its lower end on a rough horizontal floor with $\\mu_s = \\frac{\\sqrt{3}}{6}$. What is the angle of inclination $\\theta$ to the horizontal when the ladder is on the verge of slipping?",
    "questionAr": "سلم منتظم يستند بطرفه العلوي على حائط رأسي أملس وبطرفه السفلي على أرض أفقية خشنة معامل احتكاكها $\\frac{\\sqrt{3}}{6}$. ما قياس زاوية ميل السلم $\\theta$ على الأفقي عندما يكون على وشك الانزلاق؟",
    "optionsEn": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$75^\\circ$"
    ],
    "optionsAr": [
      "$60^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$75^\\circ$"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "For a smooth vertical wall, $\\tan\\theta = \\frac{1}{2\\mu_s}$.",
    "hintAr": "لحائط رأسي أملس، زاوية الميل الحرجة تحقق $\\tan\\theta = \\frac{1}{2\\mu_s}$.",
    "stepByStepSolutionEn": [
      "1. For a smooth wall, $\\mu_2 = 0$.",
      "2. Formula: $\\tan\\theta = \\frac{1}{2\\mu_s} = \\frac{1}{2 \\times \\frac{\\sqrt{3}}{6}} = \\sqrt{3}$.",
      "3. Therefore, $\\theta = \\arctan(\\sqrt{3}) = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. الحائط أملس يعني $\\mu_2 = 0$.",
      "٢. $\\tan\\theta = \\frac{1}{2\\mu_s} = \\frac{1}{2 \\times \\frac{\\sqrt{3}}{6}} = \\sqrt{3}$.",
      "٣. إذن $\\theta = 60^\\circ$."
    ],
    "teacherTipEn": "If $\\theta < 60^\\circ$, the ladder slips. It must be inclined at $\\ge 60^\\circ$ to remain standing.",
    "teacherTipAr": "إذا قلت الزاوية عن $60^\\circ$ ينزلق السلم حتماً."
  },
  {
    "id": "stat_ch1_db_hots_123",
    "titleEn": "Frictional Torque on Flat Pivot Bearing (Uniform Pressure)",
    "titleAr": "عزم الاحتكاك في محمل ارتكاز مسطح (توزيع ضغط منتظم)",
    "difficulty": "hots",
    "questionEn": "A vertical shaft of weight $W$ rotates on a flat circular footstep bearing of radius $R$ with coefficient of friction $\\mu$. Assuming UNIFORM PRESSURE over the contact area, the frictional torque $T_f$ resisting rotation is:",
    "questionAr": "عمود دوران رأسي وزنه $W$ يرتكز على محمل مسطح دائري نصف قطره $R$ ومعامل احتكاكه $\\mu$. بافتراض ثبوت الضغط على مساحة التلامس، فإن عزم الاحتكاك $T_f$ المقاوم للدوران يساوي:",
    "optionsEn": [
      "$\\frac{2}{3}\\mu W R$",
      "$\\frac{1}{2}\\mu W R$",
      "$\\mu W R$",
      "$\\frac{3}{4}\\mu W R$"
    ],
    "optionsAr": [
      "$\\frac{2}{3}\\mu W R$",
      "$\\frac{1}{2}\\mu W R$",
      "$\\mu W R$",
      "$\\frac{3}{4}\\mu W R$"
    ],
    "correctAnswer": "$\\frac{2}{3}\\mu W R$",
    "correctIndex": 0,
    "hintEn": "Integrate friction torque over concentric rings: $T = \\frac{2}{3}\\mu W R$.",
    "hintAr": "كامل عزم الاحتكاك على حلقات دائرية: $\\int_0^R r \\cdot \\mu p \\cdot 2\\pi r dr = \\frac{2}{3}\\mu W R$.",
    "stepByStepSolutionEn": [
      "1. Uniform pressure: $p = \\frac{W}{\\pi R^2}$.",
      "2. Ring friction torque: $dT = r \\cdot \\mu (p \\cdot 2\\pi r dr) = 2\\pi \\mu p r^2 dr$.",
      "3. Integrating from $0$ to $R$: $T = 2\\pi \\mu p \\frac{R^3}{3} = \\frac{2}{3}\\mu W R$."
    ],
    "stepByStepSolutionAr": [
      "١. الضغط منتظم: $p = \\frac{W}{\\pi R^2}$.",
      "٢. عزم قوة الاحتكاك على حلقة دائرية: $dT = 2\\pi \\mu p r^2 dr$.",
      "٣. التكامل من $0$ إلى $R$: $T = \\frac{2}{3}\\mu W R$."
    ],
    "teacherTipEn": "Under the alternative uniform wear theory, the torque is $\\frac{1}{2}\\mu W R$.",
    "teacherTipAr": "تحت نظرية التآكل المنتظم (للمحامل القديمة)، يكون العزم $\\frac{1}{2}\\mu W R$."
  },
  {
    "id": "stat_ch1_db_hots_124",
    "titleEn": "Frictional Torque under Uniform Wear Theory",
    "titleAr": "عزم الاحتكاك في محمل ارتكاز مسطح (نظرية التآكل المنتظم)",
    "difficulty": "hots",
    "questionEn": "In the pivot bearing of Q123, if the UNIFORM WEAR assumption is used (where $p \\cdot r = C$), the resisting frictional torque $T_f$ is:",
    "questionAr": "في محمل الارتكاز للسؤال السابق، إذا استُخدم فرض التآكل المنتظم ($p \\cdot r = C$)، فإن عزم الاحتكاك المقاوم $T_f$ يساوي:",
    "optionsEn": [
      "$\\frac{1}{2}\\mu W R$",
      "$\\frac{2}{3}\\mu W R$",
      "$\\frac{1}{3}\\mu W R$",
      "$\\mu W R$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}\\mu W R$",
      "$\\frac{2}{3}\\mu W R$",
      "$\\frac{1}{3}\\mu W R$",
      "$\\mu W R$"
    ],
    "correctAnswer": "$\\frac{1}{2}\\mu W R$",
    "correctIndex": 0,
    "hintEn": "Under uniform wear, $p r = C \\implies W = 2\\pi C R$. Then $T = \\pi \\mu C R^2 = \\frac{1}{2}\\mu W R$.",
    "hintAr": "في التآكل المنتظم، $p r = \\text{ثابت}$، مما يعطي $T = \\frac{1}{2}\\mu W R$.",
    "stepByStepSolutionEn": [
      "1. Uniform wear condition: $p \\cdot r = C$, so $p = C/r$.",
      "2. Total load: $W = \\int_0^R p (2\\pi r dr) = 2\\pi C \\int_0^R dr = 2\\pi C R \\implies C = \\frac{W}{2\\pi R}$.",
      "3. Frictional torque: $T = \\int_0^R \\mu (p \\cdot 2\\pi r dr) r = 2\\pi \\mu C \\int_0^R r dr = 2\\pi \\mu C \\frac{R^2}{2} = \\pi \\mu C R^2$.",
      "4. Substitute $C$: $T = \\pi \\mu (\\frac{W}{2\\pi R}) R^2 = \\frac{1}{2}\\mu W R$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط التآكل المنتظم: $p \\cdot r = C$.",
      "٢. الحمل الكلي: $W = 2\\pi C R \\implies C = \\frac{W}{2\\pi R}$.",
      "٣. عزم الاحتكاك: $T = \\pi \\mu C R^2$.",
      "٤. بالتعويض: $T = \\frac{1}{2}\\mu W R$."
    ],
    "teacherTipEn": "Uniform wear theory is considered more realistic for run-in mechanical bearings.",
    "teacherTipAr": "تعتبر نظرية التآكل المنتظم أكثر دقة وواقعية للمحامل بعد فترة التشغيل الأولى."
  },
  {
    "id": "stat_ch1_db_hots_125",
    "titleEn": "Collar Bearing Frictional Torque",
    "titleAr": "عزم الاحتكاك لمحمل طوقي (عنقي)",
    "difficulty": "hots",
    "questionEn": "A hollow collar bearing has inner radius $R_1$ and outer radius $R_2$, supporting axial load $W$. Assuming uniform pressure, the frictional torque is:",
    "questionAr": "محمل طوقي (عنقي) نصف قطره الداخلي $R_1$ والخارجي $R_2$ يحمل حملاً محورياً $W$. بافتراض ثبوت الضغط، فإن عزم الاحتكاك يساوي:",
    "optionsEn": [
      "$\\frac{2}{3}\\mu W \\frac{R_2^3 - R_1^3}{R_2^2 - R_1^2}$",
      "$\\frac{1}{2}\\mu W (R_1 + R_2)$",
      "$\\frac{2}{3}\\mu W (R_2 - R_1)$",
      "$\\mu W \\frac{R_1 + R_2}{2}$"
    ],
    "optionsAr": [
      "$\\frac{2}{3}\\mu W \\frac{R_2^3 - R_1^3}{R_2^2 - R_1^2}$",
      "$\\frac{1}{2}\\mu W (R_1 + R_2)$",
      "$\\frac{2}{3}\\mu W (R_2 - R_1)$",
      "$\\mu W \\frac{R_1 + R_2}{2}$"
    ],
    "correctAnswer": "$\\frac{2}{3}\\mu W \\frac{R_2^3 - R_1^3}{R_2^2 - R_1^2}$",
    "correctIndex": 0,
    "hintEn": "Integrate torque from $R_1$ to $R_2$ divided by contact area $\\pi(R_2^2 - R_1^2)$.",
    "hintAr": "كامل عزم الاحتكاك من $R_1$ إلى $R_2$ مع قسمة الحمل على المساحة الطوقية.",
    "stepByStepSolutionEn": [
      "1. Area of collar: $A = \\pi(R_2^2 - R_1^2)$.",
      "2. Pressure: $p = \\frac{W}{\\pi(R_2^2 - R_1^2)}$.",
      "3. Frictional torque: $T = \\int_{R_1}^{R_2} r \\mu p (2\\pi r dr) = 2\\pi \\mu p \\frac{R_2^3 - R_1^3}{3}$.",
      "4. Substitute $p$: $T = \\frac{2}{3}\\mu W \\frac{R_2^3 - R_1^3}{R_2^2 - R_1^2}$."
    ],
    "stepByStepSolutionAr": [
      "١. مساحة الطوق: $A = \\pi(R_2^2 - R_1^2)$.",
      "٢. الضغط المنتظم: $p = \\frac{W}{\\pi(R_2^2 - R_1^2)}$.",
      "٣. عزم الاحتكاك: $T = 2\\pi \\mu p \\frac{R_2^3 - R_1^3}{3}$.",
      "٤. بالتعويض ينتج: $T = \\frac{2}{3}\\mu W \\frac{R_2^3 - R_1^3}{R_2^2 - R_1^2}$."
    ],
    "teacherTipEn": "Notice that when $R_1 \\to 0$, this smoothly reduces to the solid pivot formula $\\frac{2}{3}\\mu W R_2$.",
    "teacherTipAr": "عندما يؤول نصف القطر الداخلي للصفر يؤول القانون لمحمل الارتكاز المصمت."
  },
  {
    "id": "stat_ch1_db_hots_126",
    "titleEn": "Two Stacked Blocks: Maximum Force on Bottom Block",
    "titleAr": "كتلتان متراصتان: أقصى قوة على الكتلة السفلى دون انزلاق",
    "difficulty": "hots",
    "questionEn": "A block $A$ of mass $m_1 = 4\\text{ kg}$ rests on top of block $B$ of mass $m_2 = 6\\text{ kg}$. Block $B$ sits on a smooth horizontal table. The coefficient of static friction between block $A$ and block $B$ is $\\mu_s = 0.3$. What is the maximum horizontal force $P$ that can be applied to block $B$ such that block $A$ does not slip on $B$ (taking $g = 9.8\\text{ m/s}^2$)?",
    "questionAr": "كتلة $A$ مقدارها $4\\text{ كجم}$ موضوعة فوق كتلة $B$ مقدارها $6\\text{ كجم}$. الكتلة $B$ تستقر على طاولة أفقية ملساء. معامل الاحتكاك السكوني بين الكتلتين هو $0.3$. ما أقصى قوة أفقية $P$ يمكن التأثير بها على الكتلة $B$ بحيث لا تنزلق الكتلة $A$ فوقها (اعتبر $g = 9.8\\text{ م/ث}^2$)؟",
    "optionsEn": [
      "$29.4\\text{ N}$",
      "$11.76\\text{ N}$",
      "$17.64\\text{ N}$",
      "$49.0\\text{ N}$"
    ],
    "optionsAr": [
      "$29.4\\text{ نيوتن}$",
      "$11.76\\text{ نيوتن}$",
      "$17.64\\text{ نيوتن}$",
      "$49.0\\text{ نيوتن}$"
    ],
    "correctAnswer": "$29.4\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "The only force accelerating $A$ is friction from $B$: $a_{max} = \\mu_s g$. Then $P_{max} = (m_1 + m_2) a_{max}$.",
    "hintAr": "القوة الوحيدة التي تكسب الكتلة العليا عجلة هي الاحتكاك: $a_{max} = \\mu_s g$. ثم $P_{max} = (m_1 + m_2) a_{max}$.",
    "stepByStepSolutionEn": [
      "1. Maximum acceleration of block $A$ without slipping: $a_{max} = \\mu_s g = 0.3 \\times 9.8 = 2.94\\text{ m/s}^2$.",
      "2. For both blocks to move together at this acceleration, the force on block $B$ is $P = (m_1 + m_2) a_{max} = 10 \\times 2.94 = 29.4\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. أقصى عجلة للكتلة العليا دون انزلاق: $a_{max} = \\mu_s g = 0.3 \\times 9.8 = 2.94\\text{ م/ث}^2$.",
      "٢. القوة الكلية لتحريك الكتلتين معاً: $P = (4 + 6) \\times 2.94 = 29.4\\text{ نيوتن}$."
    ],
    "teacherTipEn": "If $P > 29.4\\text{ N}$, block $B$ accelerates faster and block $A$ slips backward relative to $B$.",
    "teacherTipAr": "إذا تجاوزت القوة $29.4\\text{ نيوتن}$ تنزلق الكتلة العليا للخلف بالنسبة للسفلى."
  },
  {
    "id": "stat_ch1_db_hots_127",
    "titleEn": "Two Stacked Blocks: Minimum Force on Top Block",
    "titleAr": "كتلتان متراصتان: أقل قوة على الكتلة العليا لبدء انزلاقها",
    "difficulty": "hots",
    "questionEn": "In the setup of Q126 ($m_1 = 4\\text{ kg}, m_2 = 6\\text{ kg}, \\mu_s = 0.3$), if the horizontal force $P$ is applied directly to the TOP block $A$, while block $B$ is fixed to the table, what force $P$ puts block $A$ on the verge of sliding?",
    "questionAr": "في تجربة السؤال السابق، إذا أثرت القوة الأفقية $P$ مباشرة على الكتلة العليا $A$ بينما الكتلة السفلى $B$ مثبتة بالطاولة، فما أقل قوة تجعل الكتلة العليا على وشك الانزلاق؟",
    "optionsEn": [
      "$11.76\\text{ N}$",
      "$29.4\\text{ N}$",
      "$17.64\\text{ N}$",
      "$8.82\\text{ N}$"
    ],
    "optionsAr": [
      "$11.76\\text{ نيوتن}$",
      "$29.4\\text{ نيوتن}$",
      "$17.64\\text{ نيوتن}$",
      "$8.82\\text{ نيوتن}$"
    ],
    "correctAnswer": "$11.76\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Normal reaction between blocks is $R = m_1 g$. Force to slide is $P = \\mu_s m_1 g$.",
    "hintAr": "رد الفعل بين الكتلتين هو $R = m_1 g$. وقوة وشك الانزلاق هي $P = \\mu_s m_1 g$.",
    "stepByStepSolutionEn": [
      "1. Normal force acting on block $A$: $R = m_1 g = 4 \\times 9.8 = 39.2\\text{ N}$.",
      "2. Limiting friction force between the two blocks: $F_s = \\mu_s R = 0.3 \\times 39.2 = 11.76\\text{ N}$.",
      "3. Therefore, $P = F_s = 11.76\\text{ N}$ puts block $A$ on the verge of sliding."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي على الكتلة $A$: $R = 4 \\times 9.8 = 39.2\\text{ نيوتن}$.",
      "٢. قوة الاحتكاك النهائي بين الكتلتين: $F_s = 0.3 \\times 39.2 = 11.76\\text{ نيوتن}$.",
      "٣. القوة الأفقية المطلوبة: $P = 11.76\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice the difference: applying force to top vs bottom yields completely different threshold mechanics.",
    "teacherTipAr": "لاحظ الفارق الجوهري بين التأثير على الكتلة العليا والتأثير على الكتلة السفلى."
  },
  {
    "id": "stat_ch1_db_hots_128",
    "titleEn": "Pure Rolling vs Slipping Condition on an Incline",
    "titleAr": "شرط التدحرج الصرف لأسطوانة على مستوى مائل",
    "difficulty": "hots",
    "questionEn": "A uniform solid circular cylinder of mass $m$ and radius $r$ is placed on a rough plane inclined at angle $\\theta$ to the horizontal. The minimum coefficient of static friction $\\mu_s$ required to ensure pure rolling without slipping under gravity is:",
    "questionAr": "أسطوانة دائرية مصمتة منتظمة كتلتها $m$ ونصف قطرها $r$ موضوعة على مستوى خشن يميل بزاوية $\\theta$ على الأفقي. ما أقل معامل احتكاك سكوني $\\mu_s$ يلزم لضمان تدحرج الأسطوانة صرفاً دون انزلاق تحت تأثير الجاذبية؟",
    "optionsEn": [
      "$\\frac{1}{3}\\tan\\theta$",
      "$\\frac{1}{2}\\tan\\theta$",
      "$\\frac{2}{3}\\tan\\theta$",
      "$\\tan\\theta$"
    ],
    "optionsAr": [
      "$\\frac{1}{3}\\tan\\theta$",
      "$\\frac{1}{2}\\tan\\theta$",
      "$\\frac{2}{3}\\tan\\theta$",
      "$\\tan\\theta$"
    ],
    "correctAnswer": "$\\frac{1}{3}\\tan\\theta$",
    "correctIndex": 0,
    "hintEn": "From rotational dynamics: $I = \\frac{1}{2}mr^2$. The required friction is $F = \\frac{1}{3}mg\\sin\\theta \\le \\mu_s mg\\cos\\theta$.",
    "hintAr": "عزم القصور الذاتي للأسطوانة المصمتة هو $\\frac{1}{2}mr^2$. قوة الاحتكاك اللازمة للتدحرج الصرف هي $\\frac{1}{3}mg\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. Equation of motion down incline: $mg\\sin\\theta - F = ma$.",
      "2. Rotational torque about center: $F r = I \\alpha = (\\frac{1}{2}mr^2)(a/r) \\implies F = \\frac{1}{2}ma$.",
      "3. Eliminating $a$: $F = \\frac{1}{3}mg\\sin\\theta$.",
      "4. Condition for no slipping: $F \\le \\mu_s mg\\cos\\theta \\implies \\mu_s \\ge \\frac{1}{3}\\tan\\theta$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة الحركة الموازية: $mg\\sin\\theta - F = ma$.",
      "٢. عزم الدوران حول المركز: $F r = \\frac{1}{2}mr^2 (a/r) \\implies F = \\frac{1}{2}ma$.",
      "٣. بالتعويض: $F = \\frac{1}{3}mg\\sin\\theta$.",
      "٤. شرط عدم الانزلاق: $F \\le \\mu_s mg\\cos\\theta \\implies \\mu_s \\ge \\frac{1}{3}\\tan\\theta$."
    ],
    "teacherTipEn": "For a solid sphere, the corresponding condition is $\\mu_s \\ge \\frac{2}{7}\\tan\\theta$.",
    "teacherTipAr": "للكرة المصمتة يكون الشرط $\\mu_s \\ge \\frac{2}{7}\\tan\\theta$."
  },
  {
    "id": "stat_ch1_db_hots_129",
    "titleEn": "Pure Rolling Condition for Solid Sphere",
    "titleAr": "شرط التدحرج الصرف لكرة مصمتة على مستوى مائل",
    "difficulty": "hots",
    "questionEn": "A uniform solid sphere of mass $m$ and radius $r$ ($I = \\frac{2}{5}mr^2$) rolls down a rough plane inclined at angle $\\theta$. The minimum coefficient of friction $\\mu_s$ to prevent slipping is:",
    "questionAr": "كرة مصمتة منتظمة كتلتها $m$ ونصف قطرها $r$ ($I = \\frac{2}{5}mr^2$) تتدحرج على مستوى خشن يميل بزاوية $\\theta$. أقل معامل احتكاك $\\mu_s$ يمنع الانزلاق هو:",
    "optionsEn": [
      "$\\frac{2}{7}\\tan\\theta$",
      "$\\frac{1}{3}\\tan\\theta$",
      "$\\frac{5}{7}\\tan\\theta$",
      "$\\frac{2}{5}\\tan\\theta$"
    ],
    "optionsAr": [
      "$\\frac{2}{7}\\tan\\theta$",
      "$\\frac{1}{3}\\tan\\theta$",
      "$\\frac{5}{7}\\tan\\theta$",
      "$\\frac{2}{5}\\tan\\theta$"
    ],
    "correctAnswer": "$\\frac{2}{7}\\tan\\theta$",
    "correctIndex": 0,
    "hintEn": "Friction force for sphere rolling is $F = \\frac{2}{7}mg\\sin\\theta$.",
    "hintAr": "قوة الاحتكاك اللازمة لتدحرج الكرة هي $\\frac{2}{7}mg\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "1. $mg\\sin\\theta - F = ma$.",
      "2. Torque about center: $F r = (\\frac{2}{5}mr^2)(a/r) \\implies F = \\frac{2}{5}ma$.",
      "3. Substitute $a = \\frac{5}{2m}F$: $mg\\sin\\theta - F = \\frac{5}{2}F \\implies F = \\frac{2}{7}mg\\sin\\theta$.",
      "4. Slip prevention: $F \\le \\mu_s mg\\cos\\theta \\implies \\mu_s \\ge \\frac{2}{7}\\tan\\theta$."
    ],
    "stepByStepSolutionAr": [
      "١. $mg\\sin\\theta - F = ma$.",
      "٢. عزم الدوران: $F r = \\frac{2}{5}mr^2 (a/r) \\implies F = \\frac{2}{5}ma$.",
      "٣. بالتعويض ينتج: $F = \\frac{2}{7}mg\\sin\\theta$.",
      "٤. شرط عدم الانزلاق: $\\mu_s \\ge \\frac{2}{7}\\tan\\theta$."
    ],
    "teacherTipEn": "Since $\\frac{2}{7} \\approx 0.286 < \\frac{1}{3} \\approx 0.333$, a sphere requires LESS friction to roll than a cylinder.",
    "teacherTipAr": "الكرة تحتاج احتكاكاً أقل من الأسطوانة للتدحرج الصرف لأن عزم قصورها الذاتي أصغر."
  },
  {
    "id": "stat_ch1_db_hots_130",
    "titleEn": "Equilibrium of a Wedge Raising a Heavy Load",
    "titleAr": "اتزان إسفين لرفع حمل ثقيل",
    "difficulty": "hots",
    "questionEn": "A wedge with wedge angle $\\alpha$ is driven horizontally under a load $W$ guided to move vertically. If the friction angle at all contacting surfaces is $\\lambda$, the horizontal force $P$ required to raise the load is:",
    "questionAr": "إسفين زاوية رأسه $\\alpha$ يُدفع أفقياً لرفع حمل وزنه $W$ يتحرك رأسياً. إذا كانت زاوية الاحتكاك عند جميع أسطح التلامس هي $\\lambda$، فإن القوة الأفقية $P$ اللازمة لرفع الحمل تساوي:",
    "optionsEn": [
      "$W\\tan(\\alpha + 2\\lambda)$",
      "$W\\tan(\\alpha + \\lambda)$",
      "$W\\tan(2\\alpha + \\lambda)$",
      "$W(\\tan\\alpha + 2\\tan\\lambda)$"
    ],
    "optionsAr": [
      "$W\\tan(\\alpha + 2\\lambda)$",
      "$W\\tan(\\alpha + \\lambda)$",
      "$W\\tan(2\\alpha + \\lambda)$",
      "$W(\\tan\\alpha + 2\\tan\\lambda)$"
    ],
    "correctAnswer": "$W\\tan(\\alpha + 2\\lambda)$",
    "correctIndex": 0,
    "hintEn": "Combine friction angles at the two surfaces: $P = W\\tan(\\alpha + 2\\lambda)$.",
    "hintAr": "تتراكم زوايا الاحتكاك عند سطحي الإسفين السفلي والمائل: $P = W\\tan(\\alpha + 2\\lambda)$.",
    "stepByStepSolutionEn": [
      "1. At the floor: reaction tilts by $\\lambda$ to the vertical.",
      "2. At the wedge face: reaction tilts by $\\alpha + \\lambda$ to the vertical.",
      "3. Force equilibrium between wedge and block yields: $P = W\\tan(\\alpha + 2\\lambda)$."
    ],
    "stepByStepSolutionAr": [
      "١. عند الأرض: يميل رد الفعل بزاوية $\\lambda$ عن الرأسي.",
      "٢. عند السطح المائل: يميل رد الفعل بزاوية $\\alpha + \\lambda$ عن الرأسي.",
      "٣. الاتزان المشترك يعطي: $P = W\\tan(\\alpha + 2\\lambda)$."
    ],
    "teacherTipEn": "Wedges amplify force tremendously when $\\alpha + 2\\lambda$ is small.",
    "teacherTipAr": "توفر الإسفينات ميزة ميكانيكية هائلة عندما تكون زوايا الرأس والاحتكاك صغيرة."
  },
  {
    "id": "stat_ch1_db_hots_131",
    "titleEn": "Self-Locking Condition of a Wedge",
    "titleAr": "شرط القفل الذاتي للإسفين",
    "difficulty": "hots",
    "questionEn": "In Q130, what condition guarantees that the wedge is SELF-LOCKING (i.e., will not slip backward when the horizontal driving force $P$ is removed)?",
    "questionAr": "في السؤال السابق، ما الشرط الذي يضمن أن الإسفين مقفل ذاتياً (لا يرتد للخلف عند إزالة قوة الدفع $P$)؟",
    "optionsEn": [
      "$\\alpha \\le 2\\lambda$",
      "$\\alpha \\ge 2\\lambda$",
      "$\\alpha \\le \\lambda$",
      "$\\lambda \\le \\frac{\\alpha}{2}$"
    ],
    "optionsAr": [
      "$\\alpha \\le 2\\lambda$",
      "$\\alpha \\ge 2\\lambda$",
      "$\\alpha \\le \\lambda$",
      "$\\lambda \\le \\frac{\\alpha}{2}$"
    ],
    "correctAnswer": "$\\alpha \\le 2\\lambda$",
    "correctIndex": 0,
    "hintEn": "To prevent backward ejection under load $W$, the total friction angle must overcome the wedge angle: $\\alpha \\le 2\\lambda$.",
    "hintAr": "لمنع ارتداد الإسفين تحت تأثير الوزن، يجب أن تتغلب قوى الاحتكاك: $\\alpha \\le 2\\lambda$.",
    "stepByStepSolutionEn": [
      "1. Driving force to extract the wedge is $P_{extract} = W\\tan(\\alpha - 2\\lambda)$.",
      "2. For self-locking, $P_{extract} \\le 0 \\implies \\alpha - 2\\lambda \\le 0 \\implies \\alpha \\le 2\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "١. القوة اللازمة لسحب الإسفين للخارج تصبح $W\\tan(\\alpha - 2\\lambda)$.",
      "٢. لكي يقفل ذاتياً ولا يرتد، يلزم أن تكون القوة سالبة أو صفراً: $\\alpha \\le 2\\lambda$."
    ],
    "teacherTipEn": "Self-locking wedges are fundamental safety elements in engineering design.",
    "teacherTipAr": "القفل الذاتي للإسفين مبدأ أمان أساسي في التصميم الهندسي."
  },
  {
    "id": "stat_ch1_db_hots_132",
    "titleEn": "Climber on Ladder at Limiting Equilibrium",
    "titleAr": "موضع شخص يصعد سلماً عند وشك الانزلاق",
    "difficulty": "hots",
    "questionEn": "A uniform ladder of weight $W$ and length $L$ rests at angle $\\theta = 45^\\circ$ against a smooth vertical wall and a rough horizontal floor with $\\mu_s = 0.5$. A person of weight $W_p = W$ starts climbing up the ladder. What fraction $x/L$ of the ladder's length can the person climb before the ladder begins to slip?",
    "questionAr": "سلم منتظم وزنه $W$ وطوله $L$ يميل بزاوية $\\theta = 45^\\circ$ على حائط رأسي أملس وأرض أفقية خشنة معامل احتكاكها $0.5$. بدأ شخص وزنه مساوٍ لوزن السلم ($W_p = W$) بصعود السلم. ما النسبة $x/L$ من طول السلم التي يمكن للشخص صعودها قبل أن يبدأ السلم في الانزلاق؟",
    "optionsEn": [
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "$\\frac{2}{3}$",
      "$1$ (can reach top)"
    ],
    "optionsAr": [
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "$\\frac{2}{3}$",
      "$1$ (يصل للقمة)"
    ],
    "correctAnswer": "$\\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "Vertical reaction: $R_1 = 2W$. Max floor friction: $F_1 = 0.5(2W) = W$. Wall reaction: $R_2 = W$. Moments about base give $x/L = 1/2$.",
    "hintAr": "رد الفعل عند الأرض: $2W$. أقصى احتكاك: $W$. رد فعل الحائط: $W$. العزوم تعطي $x/L = 1/2$.",
    "stepByStepSolutionEn": [
      "1. Vertical equilibrium: $R_1 = W + W_p = 2W$.",
      "2. Maximum floor friction: $F_{s1} = \\mu_s R_1 = 0.5 \\times 2W = W$.",
      "3. Smooth wall reaction: $R_2 = F_{s1} = W$.",
      "4. Moments about base: $W(\\frac{L}{2}\\cos 45^\\circ) + W(x\\cos 45^\\circ) = R_2(L\\sin 45^\\circ)$.",
      "5. Divide by $W\\cos 45^\\circ$: $\\frac{L}{2} + x = L \\implies x = \\frac{L}{2} \\implies \\frac{x}{L} = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. الاتزان الرأسي: $R_1 = 2W$.",
      "٢. أقصى احتكاك عند الأرض: $F_1 = 0.5 \\times 2W = W$.",
      "٣. رد فعل الحائط الأفقي: $R_2 = F_1 = W$.",
      "٤. العزوم حول القاعدة: $W \\frac{L}{2}\\cos 45^\\circ + W x\\cos 45^\\circ = R_2 L\\sin 45^\\circ$.",
      "٥. بالقسمة على $W\\cos 45^\\circ$: $\\frac{L}{2} + x = L \\implies x/L = 1/2$."
    ],
    "teacherTipEn": "The climber can only reach halfway before the ladder begins to slip.",
    "teacherTipAr": "يستطيع الشخص الوصول لمنتصف السلم فقط قبل أن يبدأ السلم بالانزلاق."
  },
  {
    "id": "stat_ch1_db_hots_133",
    "titleEn": "Friction Circle of a Journal Bearing",
    "titleAr": "دائرة الاحتكاك لمحمل ارتكاز أسطواني",
    "difficulty": "hots",
    "questionEn": "In a journal bearing of radius $r$, the resultant reaction $R'$ of the bearing on the shaft is tangent to a small circle centered at the bearing axis. The radius $\\rho$ of this FRICTION CIRCLE is:",
    "questionAr": "في محمل ارتكاز أسطواني نصف قطره $r$، يكون رد الفعل المحصل $R'$ مماساً لدائرة صغيرة مركزها محور المحمل. نصف قطر دائرة الاحتكاك هذه $\\rho$ يساوي:",
    "optionsEn": [
      "$r\\sin\\lambda$",
      "$r\\cos\\lambda$",
      "$r\\tan\\lambda$",
      "$\\frac{r}{\\sin\\lambda}$"
    ],
    "optionsAr": [
      "$r\\sin\\lambda$",
      "$r\\cos\\lambda$",
      "$r\\tan\\lambda$",
      "$\\frac{r}{\\sin\\lambda}$"
    ],
    "correctAnswer": "$r\\sin\\lambda$",
    "correctIndex": 0,
    "hintEn": "At the contact point, the angle between $R'$ and the normal radius $r$ is $\\lambda$. The perpendicular distance from the center to the line of action of $R'$ is $r\\sin\\lambda$.",
    "hintAr": "الزاوية بين $R'$ ونصف القطر العمودي هي $\\lambda$. البعد العمودي من المركز إلى خط عمل $R'$ هو $r\\sin\\lambda$.",
    "stepByStepSolutionEn": [
      "1. At limiting friction, the resultant reaction $R'$ makes an angle $\\lambda$ with the normal (radial line).",
      "2. The perpendicular distance from the shaft center to the line of action of $R'$ is $\\rho = r\\sin\\lambda$.",
      "3. Therefore, $R'$ is always tangent to a circle of radius $\\rho = r\\sin\\lambda$ called the friction circle."
    ],
    "stepByStepSolutionAr": [
      "١. عند الاتزان النهائي، يصنع رد الفعل المحصل زاوية $\\lambda$ مع نصف القطر العمودي.",
      "٢. البعد العمودي من مركز العمود إلى خط عمل رد الفعل المحصل هو $\\rho = r\\sin\\lambda$.",
      "٣. إذن رد الفعل المحصل يمس دائماً دائرة نصف قطرها $r\\sin\\lambda$ تُعرف بدائرة الاحتكاك."
    ],
    "teacherTipEn": "For small coefficients of friction, $\\sin\\lambda \\approx \\tan\\lambda = \\mu$, so $\\rho \\approx \\mu r$.",
    "teacherTipAr": "للقيم الصغيرة لمعامل الاحتكاك، $\\sin\\lambda \\approx \\mu$ وتكون $\\rho \\approx \\mu r$."
  },
  {
    "id": "stat_ch1_db_hots_134",
    "titleEn": "Work Done against Friction on Arbitrary Planar Curve",
    "titleAr": "الشغل المبذول ضد الاحتكاك على مسار منحنٍ",
    "difficulty": "hots",
    "questionEn": "A body of weight $W$ is moved slowly along an arbitrary curved path of total arc length $s$ on a rough horizontal floor with kinetic friction coefficient $\\mu_k$. The total work done against friction is:",
    "questionAr": "جسم وزنه $W$ حُرِّك ببطء على مسار منحنٍ عشوائي طوله الكلي $s$ على أرضية أفقية خشنة معامل احتكاكها الحركي $\\mu_k$. الشغل الكلي المبذول ضد الاحتكاك يساوي:",
    "optionsEn": [
      "$\\mu_k W s$",
      "$\\mu_k W d$ (where $d$ is displacement)",
      "$0$ (if path is closed)",
      "$\\frac{1}{2}\\mu_k W s$"
    ],
    "optionsAr": [
      "$\\mu_k W s$",
      "$\\mu_k W d$ (حيث $d$ الإزاحة)",
      "$0$ (إذا كان المسار مغلقاً)",
      "$\\frac{1}{2}\\mu_k W s$"
    ],
    "correctAnswer": "$\\mu_k W s$",
    "correctIndex": 0,
    "hintEn": "Friction is non-conservative: work depends on total path length $s$, NOT on displacement $d$.",
    "hintAr": "الاحتكاك قوة غير محافظة: الشغل يعتمد على طول المسار الفعلي $s$ وليس الإزاحة.",
    "stepByStepSolutionEn": [
      "1. Kinetic friction force is tangential and opposes motion at every instant: $F_k = \\mu_k R = \\mu_k W$.",
      "2. Elementary work done against friction: $dW = F_k ds = \\mu_k W ds$.",
      "3. Integrating along the entire path: $W_{friction} = \\int \\mu_k W ds = \\mu_k W s$."
    ],
    "stepByStepSolutionAr": [
      "١. قوة الاحتكاك الحركي مماسية وتعاكس اتجاه الحركة لحظياً: $F_k = \\mu_k W$.",
      "٢. الشغل التفاضلي ضد الاحتكاك: $dW = F_k ds = \\mu_k W ds$.",
      "٣. بالتكامل على طول المسار الكلي: $W_{friction} = \\mu_k W s$."
    ],
    "teacherTipEn": "Friction is a non-conservative (dissipative) force, so work is strictly positive and path-dependent.",
    "teacherTipAr": "الاحتكاك قوة مبددة غير محافظة، لذا فإن الشغل موجب دائماً ويتناسب طردياً مع طول المسار."
  },
  {
    "id": "stat_ch1_db_hots_135",
    "titleEn": "Minimum Pull to Pull Wheel over a Curb",
    "titleAr": "أقل قوة لسحب عجلة فوق حافة رصيف",
    "difficulty": "hots",
    "questionEn": "A heavy wheel of weight $W$ and radius $R$ rests against a rectangular step of height $h$ ($h < R$). What is the minimum force $P$ applied at the center of the wheel required to lift it over the step?",
    "questionAr": "عجلة ثقيلة وزنها $W$ ونصف قطرها $R$ تستند إلى حافة رصيف ارتفاعها $h$ ($h < R$). ما أقل قوة $P$ تؤثر في مركز العجلة تلزم لرفعها فوق حافة الرصيف؟",
    "optionsEn": [
      "$W\\frac{\\sqrt{2Rh - h^2}}{R}$",
      "$W\\frac{\\sqrt{2Rh - h^2}}{R - h}$",
      "$W\\frac{R - h}{R}$",
      "$W\\frac{h}{R}$"
    ],
    "optionsAr": [
      "$W\\frac{\\sqrt{2Rh - h^2}}{R}$",
      "$W\\frac{\\sqrt{2Rh - h^2}}{R - h}$",
      "$W\\frac{R - h}{R}$",
      "$W\\frac{h}{R}$"
    ],
    "correctAnswer": "$W\\frac{\\sqrt{2Rh - h^2}}{R}$",
    "correctIndex": 0,
    "hintEn": "Take moments about the corner of the step. The minimum force acts perpendicular to the radius connecting the center to the corner.",
    "hintAr": "خذ العزوم حول حافة الرصيف. أقل قوة تؤثر عمودياً على نصف القطر الواصل للحافة.",
    "stepByStepSolutionEn": [
      "1. Let $A$ be the corner of the step. The distance from the center $O$ to $A$ is $R$.",
      "2. The horizontal distance from $A$ to the vertical line of gravity through $O$ is $d = \\sqrt{R^2 - (R - h)^2} = \\sqrt{2Rh - h^2}$.",
      "3. Moment of weight about $A$: $M_W = W \\sqrt{2Rh - h^2}$.",
      "4. To minimize $P$, its line of action must be perpendicular to $OA$, giving lever arm $R$: $P_{min} R = W\\sqrt{2Rh - h^2} \\implies P_{min} = W\\frac{\\sqrt{2Rh - h^2}}{R}$."
    ],
    "stepByStepSolutionAr": [
      "١. لتكن $A$ حافة الرصيف، المسافة من مركز العجلة $O$ إلى $A$ هي $R$.",
      "٢. ذراع عزم الوزن حول $A$ أفقياً: $d = \\sqrt{R^2 - (R-h)^2} = \\sqrt{2Rh - h^2}$.",
      "٣. عزم الوزن حول $A$: $M_W = W\\sqrt{2Rh - h^2}$.",
      "٤. للحصول على أقل قوة، يجب أن يكون ذراعها أقصى ما يمكن (يساوي $R$) أي عمودية على $OA$: $P_{min} = W\\frac{\\sqrt{2Rh - h^2}}{R}$."
    ],
    "teacherTipEn": "If the force must be horizontal, the lever arm is $R - h$, so $P_{horizontal} = W\\frac{\\sqrt{2Rh - h^2}}{R - h}$.",
    "teacherTipAr": "لو طُلبت القوة في الاتجاه الأفقي لكانت $W\\frac{\\sqrt{2Rh - h^2}}{R - h}$ لأن ذراعها يصبح $R - h$."
  },
  {
    "id": "stat_ch1_db_hots_136",
    "titleEn": "Equilibrium Range for Counterweight on Incline",
    "titleAr": "مجال اتزان كتلة معلقة متصلة بجسم على مستوى مائل",
    "difficulty": "hots",
    "questionEn": "A body of weight $W_1$ on a plane inclined at angle $\\theta$ ($\\mu_s < \\tan\\theta$) is connected via a smooth apex pulley to a hanging counterweight $W_2$. The range of values of $W_2$ for which the system remains at rest is:",
    "questionAr": "جسم وزنه $W_1$ على مستوى يميل بزاوية $\\theta$ ($\\mu_s < \\tan\\theta$) متصل عبر بكرة ملساء بثقل متدلٍ $W_2$. مجال قيم $W_2$ التي تحفظ سكون المجموعة هو:",
    "optionsEn": [
      "$[W_1(\\sin\\theta - \\mu_s\\cos\\theta), W_1(\\sin\\theta + \\mu_s\\cos\\theta)]$",
      "$[0, W_1\\sin\\theta]$",
      "$[W_1\\sin\\theta, W_1(\\sin\\theta + \\mu_s\\cos\\theta)]$",
      "$[W_1(\\cos\\theta - \\mu_s\\sin\\theta), W_1(\\cos\\theta + \\mu_s\\sin\\theta)]$"
    ],
    "optionsAr": [
      "$[W_1(\\sin\\theta - \\mu_s\\cos\\theta), W_1(\\sin\\theta + \\mu_s\\cos\\theta)]$",
      "$[0, W_1\\sin\\theta]$",
      "$[W_1\\sin\\theta, W_1(\\sin\\theta + \\mu_s\\cos\\theta)]$",
      "$[W_1(\\cos\\theta - \\mu_s\\sin\\theta), W_1(\\cos\\theta + \\mu_s\\sin\\theta)]$"
    ],
    "correctAnswer": "$[W_1(\\sin\\theta - \\mu_s\\cos\\theta), W_1(\\sin\\theta + \\mu_s\\cos\\theta)]$",
    "correctIndex": 0,
    "hintEn": "Tension is $W_2$. Minimum $W_2$ prevents downward slide; maximum $W_2$ causes impending upward motion.",
    "hintAr": "الشد يساوي $W_2$. أقل وزن يمنع الانزلاق لأسفل، وأكبر وزن يسبب وشك الحركة لأعلى.",
    "stepByStepSolutionEn": [
      "1. When $W_2$ is minimal, $W_1$ tends to slide down, so friction acts up the plane: $W_2 = W_1\\sin\\theta - \\mu_s W_1\\cos\\theta$.",
      "2. When $W_2$ is maximal, $W_1$ tends to move up, so friction acts down the plane: $W_2 = W_1\\sin\\theta + \\mu_s W_1\\cos\\theta$.",
      "3. Therefore, equilibrium requires $W_2 \\in [W_1(\\sin\\theta - \\mu_s\\cos\\theta), W_1(\\sin\\theta + \\mu_s\\cos\\theta)]$."
    ],
    "stepByStepSolutionAr": [
      "١. عند أقل قيمة لـ $W_2$: يوشك الجسم على الانزلاق لأسفل فيعمل الاحتكاك لأعلى: $W_{2,min} = W_1\\sin\\theta - \\mu_s W_1\\cos\\theta$.",
      "٢. عند أكبر قيمة لـ $W_2$: يوشك الجسم على الصعود لأعلى فيعمل الاحتكاك لأسفل: $W_{2,max} = W_1\\sin\\theta + \\mu_s W_1\\cos\\theta$.",
      "٣. فترة الاتزان: $[W_1(\\sin\\theta - \\mu_s\\cos\\theta), W_1(\\sin\\theta + \\mu_s\\cos\\theta)]$."
    ],
    "teacherTipEn": "The width of this interval is $2\\mu_s W_1\\cos\\theta = 2F_s$.",
    "teacherTipAr": "طول فترة الاتزان يساوي دائماً ضعف قوة الاحتكاك النهائي."
  },
  {
    "id": "stat_ch1_db_hots_137",
    "titleEn": "Block Squeezed between Two Vertical Rough Walls",
    "titleAr": "جسم مضغوط بين حائطين رأسيين متوازيين",
    "difficulty": "hots",
    "questionEn": "A block of weight $W = 60\\text{ N}$ is squeezed between two rough vertical parallel walls by a horizontal compressive force $N$. If the coefficient of static friction at BOTH walls is $\\mu_s = 0.3$, what is the minimum compressive force $N$ required to prevent the block from falling?",
    "questionAr": "جسم وزنه $60\\text{ نيوتن}$ مضغوط بين حائطين رأسيين متوازيين خشنين بقوة ضغط أفقية $N$. إذا كان معامل الاحتكاك السكوني عند كلا الحائطين هو $0.3$، فما أقل قوة ضغط $N$ تلزم لمنع الجسم من السقوط؟",
    "optionsEn": [
      "$100\\text{ N}$",
      "$200\\text{ N}$",
      "$50\\text{ N}$",
      "$18\\text{ N}$"
    ],
    "optionsAr": [
      "$100\\text{ نيوتن}$",
      "$200\\text{ نيوتن}$",
      "$50\\text{ نيوتن}$",
      "$18\\text{ نيوتن}$"
    ],
    "correctAnswer": "$100\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Both walls provide upward friction: $2 F_s = W \\implies 2(\\mu_s N) = W$.",
    "hintAr": "كلا الحائطين يقدم قوة احتكاك لأعلى: $2(\\mu_s N) = W$.",
    "stepByStepSolutionEn": [
      "1. The normal force on the block from each wall is $N$.",
      "2. Each wall exerts a maximum upward friction force: $F_{s1} = F_{s2} = \\mu_s N$.",
      "3. Vertical equilibrium: $2(\\mu_s N) = W$.",
      "4. Solving for $N$: $N = \\frac{W}{2\\mu_s} = \\frac{60}{2 \\times 0.3} = \\frac{60}{0.6} = 100\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. القوة العمودية من كل حائط تساوي $N$.",
      "٢. قوة الاحتكاك النهائي عند كل حائط لأعلى: $\\mu_s N$.",
      "٣. الاتزان الرأسي: $2\\mu_s N = W$.",
      "٤. $N = \\frac{60}{2 \\times 0.3} = 100\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Do not forget to count the friction on BOTH walls! Each wall carries half the weight.",
    "teacherTipAr": "تذكر أن الاحتكاك يعمل على كلا السطحين، فكل حائط يحمل نصف الوزن."
  },
  {
    "id": "stat_ch1_db_hots_138",
    "titleEn": "Uniform Heavy Chain Overhanging Rough Table",
    "titleAr": "سلسلة ثقيلة تتدلى حافتها من منضدة خشنة",
    "difficulty": "hots",
    "questionEn": "A uniform flexible heavy chain of total length $L$ lies in a straight line on a rough horizontal table with a portion of length $x$ hanging over the edge. If $\\mu_s = 0.25$, what is the maximum fraction $x/L$ that can hang over the edge without the chain sliding off?",
    "questionAr": "سلسلة ثقيلة منتظمة طولها الكلي $L$ موضوعة على منضدة أفقية خشنة ويتدلى منها جزء طوله $x$ من حافة المنضدة. إذا كان $\\mu_s = 0.25$، فما أقصى نسبة $x/L$ يمكن أن تتدلى دون أن تنزلق السلسلة وتسقط؟",
    "optionsEn": [
      "$\\frac{1}{5}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{5}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$"
    ],
    "correctAnswer": "$\\frac{1}{5}$",
    "correctIndex": 0,
    "hintEn": "Weight of hanging portion $w x$ equals limiting friction of table portion $\\mu_s w (L - x)$.",
    "hintAr": "وزن الجزء المتدلي $w x$ يعادل الاحتكاك النهائي للجزء المستقر على المنضدة $\\mu_s w(L - x)$.",
    "stepByStepSolutionEn": [
      "1. Let $w$ be the weight per unit length of the chain.",
      "2. Downward pulling force of hanging part: $W_{hang} = w x$.",
      "3. Weight of chain on table: $W_{table} = w(L - x)$.",
      "4. Normal reaction on table: $R = w(L - x)$, so limiting friction is $F_s = \\mu_s w(L - x)$.",
      "5. At limiting equilibrium: $w x = \\mu_s w(L - x) \\implies x = \\mu_s(L - x) \\implies x(1 + \\mu_s) = \\mu_s L$.",
      "6. Therefore, $\\frac{x}{L} = \\frac{\\mu_s}{1 + \\mu_s} = \\frac{0.25}{1 + 0.25} = \\frac{0.25}{1.25} = \\frac{1}{5}$."
    ],
    "stepByStepSolutionAr": [
      "١. بفرض وزن وحدة الأطوال $w$.",
      "٢. وزن الجزء المتدلي: $w x$.",
      "٣. وزن الجزء على المنضدة: $w(L - x)$.",
      "٤. أقصى احتكاك للجزء على المنضدة: $\\mu_s w(L - x)$.",
      "٥. عند وشك الانزلاق: $w x = \\mu_s w(L - x) \\implies x(1 + \\mu_s) = \\mu_s L$.",
      "٦. النسبة: $\\frac{x}{L} = \\frac{\\mu_s}{1 + \\mu_s} = \\frac{0.25}{1.25} = \\frac{1}{5}$."
    ],
    "teacherTipEn": "General rule for overhanging chain: $\\frac{x}{L} = \\frac{\\mu_s}{1 + \\mu_s}$.",
    "teacherTipAr": "قاعدة عامة لمسائل السلسلة المتدلية: $\\frac{x}{L} = \\frac{\\mu_s}{1 + \\mu_s}$."
  },
  {
    "id": "stat_ch1_db_hots_139",
    "titleEn": "Three Connected Blocks on Rough Floor",
    "titleAr": "ثلاث كتل متصلة بخيوط على أرضية خشنة",
    "difficulty": "hots",
    "questionEn": "Three blocks $A, B, C$ of weights $10\\text{ N}, 20\\text{ N}, 30\\text{ N}$ are placed in a line on a rough horizontal floor with $\\mu_s = 0.4$, connected by light taut strings $AB$ and $BC$. A horizontal force $P$ pulls block $C$ away from $B$. When the system is on the verge of motion, what is the ratio of tensions $T_{AB} : T_{BC}$?",
    "questionAr": "ثلاث كتل $A, B, C$ أوزانها $10\\text{ N}, 20\\text{ N}, 30\\text{ N}$ موضوعة في خط مستقيم على أرضية خشنة معامل احتكاكها $0.4$، متصلة بخيطين مشدودين $AB$ و $BC$. أثرت قوة أفقية $P$ على الكتلة $C$ مبتعدة عن $B$. عند وشك الحركة، ما النسبة بين شدي الخيطين $T_{AB} : T_{BC}$؟",
    "optionsEn": [
      "$1 : 3$",
      "$1 : 2$",
      "$1 : 4$",
      "$2 : 3$"
    ],
    "optionsAr": [
      "$1 : 3$",
      "$1 : 2$",
      "$1 : 4$",
      "$2 : 3$"
    ],
    "correctAnswer": "$1 : 3$",
    "correctIndex": 0,
    "hintEn": "Isolate $A$ for $T_{AB} = \\mu_s W_A = 4\\text{ N}$. Isolate $A+B$ for $T_{BC} = \\mu_s(W_A + W_B) = 12\\text{ N}$.",
    "hintAr": "افصل الكتلة $A$ لحساب $T_{AB}$، وافصل الكتلتين $A+B$ لحساب $T_{BC}$.",
    "stepByStepSolutionEn": [
      "1. String $AB$ accelerates/pulls only block $A$: $T_{AB} = \\mu_s W_A = 0.4 \\times 10 = 4\\text{ N}$.",
      "2. String $BC$ pulls both blocks $A$ and $B$: $T_{BC} = \\mu_s(W_A + W_B) = 0.4 \\times (10 + 20) = 0.4 \\times 30 = 12\\text{ N}$.",
      "3. Ratio of tensions: $\\frac{T_{AB}}{T_{BC}} = \\frac{4}{12} = \\frac{1}{3}$, meaning $1 : 3$."
    ],
    "stepByStepSolutionAr": [
      "١. الخيط $AB$ يجر الكتلة $A$ فقط: $T_{AB} = 0.4 \\times 10 = 4\\text{ نيوتن}$.",
      "٢. الخيط $BC$ يجر الكتلتين $A$ و $B$ معاً: $T_{BC} = 0.4 \\times (10 + 20) = 12\\text{ نيوتن}$.",
      "٣. النسبة بين الشدين: $4 : 12 = 1 : 3$."
    ],
    "teacherTipEn": "Internal tensions accumulate from the tail of the train to the head.",
    "teacherTipAr": "تتراكم الشدود الداخلية بدءاً من ذيل القطار حتى مقدمته."
  },
  {
    "id": "stat_ch1_db_hots_140",
    "titleEn": "Stepladder with Horizontal Tie Rope",
    "titleAr": "سلم مزدوج برباط أفقي عند وشك الانزلاق",
    "difficulty": "hots",
    "questionEn": "Two identical uniform legs of a stepladder, each of weight $W$ and length $L$, are smoothly hinged at the top. They rest on a smooth floor and are held from spreading by a horizontal light tie-rope connecting their bases. If each leg makes angle $\\theta$ with the horizontal floor, the tension in the tie-rope is:",
    "questionAr": "ساقا سلم مزدوج متماثلتان منتظمتان، وزن كل منهما $W$ وطولها $L$، متصلتان بمفصل أملس عند القمة، وتستندان على أرضية ملساء، ويربط بين قاعدتيهما حبل أفقي خفيف يمنع انفراجهما. إذا كانت كل ساق تميل بزاوية $\\theta$ على الأرض، فإن الشد في الحبل يساوي:",
    "optionsEn": [
      "$\\frac{W}{2}\\cot\\theta$",
      "$W\\cot\\theta$",
      "$\\frac{W}{2}\\tan\\theta$",
      "$W\\sin\\theta$"
    ],
    "optionsAr": [
      "$\\frac{W}{2}\\cot\\theta$",
      "$W\\cot\\theta$",
      "$\\frac{W}{2}\\tan\\theta$",
      "$W\\sin\\theta$"
    ],
    "correctAnswer": "$\\frac{W}{2}\\cot\\theta$",
    "correctIndex": 0,
    "hintEn": "Total vertical reaction at each floor contact is $W$. Take moments about the apex for one leg.",
    "hintAr": "رد الفعل العمودي عند كل طرف أرضي هو $W$. خذ العزوم حول المفصل العلوي لساق واحدة.",
    "stepByStepSolutionEn": [
      "1. By symmetry, the vertical upward reaction of the smooth floor on each leg is $R = W$.",
      "2. Consider the equilibrium of one leg alone, taking moments about the apex hinge $C$:",
      "3. Overturning moment from floor reaction: $R \\times (L\\cos\\theta) = W L\\cos\\theta$.",
      "4. Restoring moments about $C$: weight $W \\times (\\frac{L}{2}\\cos\\theta)$ and tie-rope tension $T \\times (L\\sin\\theta)$.",
      "5. Moment equilibrium about $C$: $W L\\cos\\theta = W \\frac{L}{2}\\cos\\theta + T L\\sin\\theta \\implies T L\\sin\\theta = \\frac{1}{2}W L\\cos\\theta$.",
      "6. Dividing by $L\\sin\\theta$: $T = \\frac{W}{2}\\frac{\\cos\\theta}{\\sin\\theta} = \\frac{W}{2}\\cot\\theta$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتماثل، رد الفعل الرأسي للأرضية الملساء عند كل طرف هو $R = W$.",
      "٢. بدراسة اتزان ساق واحدة وأخذ العزوم حول المفصل العلوي $C$:",
      "٣. عزم رد فعل الأرض: $W \\times L\\cos\\theta$.",
      "٤. عزوم الوزن والشد: $W \\times \\frac{L}{2}\\cos\\theta + T \\times L\\sin\\theta$.",
      "٥. بمساواة العزوم: $T L\\sin\\theta = \\frac{1}{2}W L\\cos\\theta \\implies T = \\frac{W}{2}\\cot\\theta$."
    ],
    "teacherTipEn": "As $\\theta \\to 0$ (flatter ladder), the tension tends to infinity, highlighting the risk of overloading tie ropes.",
    "teacherTipAr": "كلما اقتربت الساقان من الانبساط (صغرت $\\theta$)، تضاعف الشد بصورة هائلة."
  },
  {
    "id": "stat_ch1_db_hots_141",
    "titleEn": "Impending Motion Down Incline when Incline is Flatter than Friction Angle",
    "titleAr": "قوة جعل جسم على وشك الحركة لأسفل عندما تكون زاوية الميل صغيرة",
    "difficulty": "hots",
    "questionEn": "A body of weight $W = 80\\text{ N}$ rests on an incline of angle $\\theta = 30^\\circ$ with $\\mu_s = \\frac{\\sqrt{3}}{2}$. Since $\\theta < \\lambda$, gravity alone cannot cause downward motion. What force $P$ directed DOWN the plane along the line of greatest slope is required to put the body on the verge of moving DOWN?",
    "questionAr": "جسم وزنه $80\\text{ نيوتن}$ على مستوى يميل بزاوية $30^\\circ$ على الأفقي ومعامل احتكاكه $\\frac{\\sqrt{3}}{2}$. بما أن $\\theta < \\lambda$ فالجاذبية وحدها لا تكفي لتحريكه. ما القوة $P$ الموجهة لأسفل المستوى في اتجاه خط أكبر ميل اللازمة لجعله على وشك الحركة لأسفل؟",
    "optionsEn": [
      "$20\\text{ N}$",
      "$40\\text{ N}$",
      "$60\\text{ N}$",
      "$10\\text{ N}$"
    ],
    "optionsAr": [
      "$20\\text{ نيوتن}$",
      "$40\\text{ نيوتن}$",
      "$60\\text{ نيوتن}$",
      "$10\\text{ نيوتن}$"
    ],
    "correctAnswer": "$20\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Friction acts UP the plane: $P + W\\sin\\theta = \\mu_s W\\cos\\theta$.",
    "hintAr": "الاحتكاك يعمل لأعلى: $P + W\\sin\\theta = \\mu_s W\\cos\\theta$.",
    "stepByStepSolutionEn": [
      "1. Normal reaction: $R = 80\\cos(30^\\circ) = 40\\sqrt{3}\\text{ N}$.",
      "2. Maximum limiting friction (opposing downward motion, hence acting up): $F_s = \\frac{\\sqrt{3}}{2} \\times 40\\sqrt{3} = 60\\text{ N}$.",
      "3. Component of gravity acting down: $W\\sin(30^\\circ) = 80 \\times 0.5 = 40\\text{ N}$.",
      "4. Downward equilibrium equation: $P + W\\sin(30^\\circ) = F_s \\implies P + 40 = 60 \\implies P = 20\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي: $R = 80\\cos 30^\\circ = 40\\sqrt{3}\\text{ نيوتن}$.",
      "٢. الاحتكاك النهائي لأعلى: $F_s = \\frac{\\sqrt{3}}{2} \\times 40\\sqrt{3} = 60\\text{ نيوتن}$.",
      "٣. مركبة الوزن لأسفل: $80\\sin 30^\\circ = 40\\text{ نيوتن}$.",
      "٤. معادلة الاتجاه الموازي لأسفل: $P + 40 = 60 \\implies P = 20\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Notice that the applied force assists gravity to overcome the strong static friction.",
    "teacherTipAr": "تساعد القوة هنا مركبة الوزن للتغلب على الاحتكاك القوي."
  },
  {
    "id": "stat_ch1_db_hots_142",
    "titleEn": "Torsional Resistance of Flat Annular Contact Area",
    "titleAr": "المقاومة الالتوائية لمساحة تلامس حلقية",
    "difficulty": "hots",
    "questionEn": "A hollow circular shaft with inner radius $r_1$ and outer radius $r_2$ carries axial compressive load $N$ against a rough flat surface with friction coefficient $\\mu$. Under the UNIFORM WEAR model ($p \\cdot r = C$), the resisting frictional torque $M_t$ is:",
    "questionAr": "عمود دوران مجوف نصف قطره الداخلي $r_1$ والخارجي $r_2$ ينقل حملاً محورياً $N$ ضد سطح أفقي خشن معامل احتكاكه $\\mu$. طبقاً لنموذج التآكل المنتظم ($p \\cdot r = C$)، فإن عزم المقاومة الالتوائي $M_t$ يساوي:",
    "optionsEn": [
      "$\\frac{1}{2}\\mu N (r_1 + r_2)$",
      "$\\frac{2}{3}\\mu N \\frac{r_2^3 - r_1^3}{r_2^2 - r_1^2}$",
      "$\\mu N (r_2 - r_1)$",
      "$\\frac{1}{3}\\mu N (r_1 + r_2)$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}\\mu N (r_1 + r_2)$",
      "$\\frac{2}{3}\\mu N \\frac{r_2^3 - r_1^3}{r_2^2 - r_1^2}$",
      "$\\mu N (r_2 - r_1)$",
      "$\\frac{1}{3}\\mu N (r_1 + r_2)$"
    ],
    "correctAnswer": "$\\frac{1}{2}\\mu N (r_1 + r_2)$",
    "correctIndex": 0,
    "hintEn": "Under uniform wear, the mean effective friction radius is the simple arithmetic mean: $r_{eff} = \\frac{r_1 + r_2}{2}$.",
    "hintAr": "تحت فرض التآكل المنتظم، نصف القطر الفعال هو المتوسط الحسابي البسيط: $\\frac{r_1 + r_2}{2}$.",
    "stepByStepSolutionEn": [
      "1. Axial load: $N = \\int_{r_1}^{r_2} p (2\\pi r dr) = 2\\pi C(r_2 - r_1) \\implies C = \\frac{N}{2\\pi(r_2 - r_1)}$.",
      "2. Resisting torque: $M_t = \\int_{r_1}^{r_2} \\mu (p \\cdot 2\\pi r dr) r = 2\\pi \\mu C \\int_{r_1}^{r_2} r dr = 2\\pi \\mu C \\frac{r_2^2 - r_1^2}{2} = \\pi \\mu C (r_2^2 - r_1^2)$.",
      "3. Substitute $C$: $M_t = \\pi \\mu [\\frac{N}{2\\pi(r_2 - r_1)}] (r_2 - r_1)(r_2 + r_1) = \\frac{1}{2}\\mu N(r_1 + r_2)$."
    ],
    "stepByStepSolutionAr": [
      "١. الحمل المحوري: $N = 2\\pi C(r_2 - r_1)$.",
      "٢. عزم الاحتكاك: $M_t = \\pi \\mu C(r_2^2 - r_1^2)$.",
      "٣. بالتعويض عن $C$: $M_t = \\frac{1}{2}\\mu N(r_1 + r_2)$."
    ],
    "teacherTipEn": "The effective friction radius under uniform wear is simply the average radius: $R_{mean} = \\frac{r_1 + r_2}{2}$.",
    "teacherTipAr": "نصف القطر الفعال للاحتكاك في التآكل المنتظم هو المتوسط الحسابي لنصفي القطر."
  },
  {
    "id": "stat_ch1_db_hots_143",
    "titleEn": "Mechanical Advantage of Differential Screw",
    "titleAr": "الفائدة الميكانيكية للولب تفاضلي",
    "difficulty": "hots",
    "questionEn": "A differential screw has two threads with pitches $p_1 = 6\\text{ mm}$ and $p_2 = 4\\text{ mm}$. In one complete revolution of the screw, the net advance of the jaw is:",
    "questionAr": "لولب تفاضلي له سنتان خطوتاهما $p_1 = 6\\text{ مم}$ و $p_2 = 4\\text{ مم}$. في دورة كاملة واحدة للولب، فإن التقدم الصافي لفك التثبيت يساوي:",
    "optionsEn": [
      "$2\\text{ mm}$",
      "$10\\text{ mm}$",
      "$5\\text{ mm}$",
      "$1.5\\text{ mm}$"
    ],
    "optionsAr": [
      "$2\\text{ مم}$",
      "$10\\text{ مم}$",
      "$5\\text{ مم}$",
      "$1.5\\text{ مم}$"
    ],
    "correctAnswer": "$2\\text{ mm}$",
    "correctIndex": 0,
    "hintEn": "Net axial displacement per revolution is the difference of pitches: $\\Delta p = p_1 - p_2$.",
    "hintAr": "الإزاحة المحورية الصافية في الدورة هي الفرق بين الخطوتين: $p_1 - p_2$.",
    "stepByStepSolutionEn": [
      "1. In a differential screw, one thread advances the shaft by $p_1$ while the second thread retracts the nut by $p_2$.",
      "2. Net displacement per revolution: $\\Delta x = p_1 - p_2 = 6 - 4 = 2\\text{ mm}$."
    ],
    "stepByStepSolutionAr": [
      "١. في اللولب التفاضلي، تقدم السنة الأولى المحور بمقدار $p_1$ وترجع السنة الثانية الصامولة بمقدار $p_2$.",
      "٢. التقدم الصافي في كل دورة كاملة: $\\Delta x = 6 - 4 = 2\\text{ مم}$."
    ],
    "teacherTipEn": "Differential screws allow ultra-fine adjustments while using robust, thick threads.",
    "teacherTipAr": "تتيح اللوالب التفاضلية ضبطاً ميكانيكياً فائق الدقة مع استخدام أسنان قوية وسميكة."
  },
  {
    "id": "stat_ch1_db_hots_144",
    "titleEn": "Equilibrium of Uniform Rod on Hemispherical Bowl",
    "titleAr": "اتزان ساق داخل إناء نصف كروي أملس",
    "difficulty": "hots",
    "questionEn": "A uniform rod of length $2L$ rests in equilibrium with one end inside a smooth hemispherical bowl of radius $R$ and the other end projecting outside. If the rod makes angle $\\theta$ with the horizontal, the relation between $L, R$ and $\\theta$ is:",
    "questionAr": "ساق منتظمة طولها $2L$ تستقر في وضع اتزان بحيث يقع أحد طرفيها داخل إناء نصف كروي أملس نصف قطره $R$ ويبرز الطرف الآخر للخارج. إذا كانت الساق تميل بزاوية $\\theta$ على الأفقي، فإن العلاقة بين $L, R, \\theta$ هي:",
    "optionsEn": [
      "$\\cos(2\\theta) = \\frac{L}{2R}\\cos\\theta$",
      "$\\cos\\theta = \\frac{L}{R}$",
      "$\\sin(2\\theta) = \\frac{L}{R}$",
      "$\\cos^2\\theta = \\frac{L}{2R}$"
    ],
    "optionsAr": [
      "$\\cos(2\\theta) = \\frac{L}{2R}\\cos\\theta$",
      "$\\cos\\theta = \\frac{L}{R}$",
      "$\\sin(2\\theta) = \\frac{L}{R}$",
      "$\\cos^2\\theta = \\frac{L}{2R}$"
    ],
    "correctAnswer": "$\\cos(2\\theta) = \\frac{L}{2R}\\cos\\theta$",
    "correctIndex": 0,
    "hintEn": "Take moments about the rim of the bowl and use the geometry of the chord $2R\\cos\\theta$.",
    "hintAr": "خذ العزوم حول حافة الإناء واستخدم طول الوتر $2R\\cos\\theta$.",
    "stepByStepSolutionEn": [
      "1. The normal reaction at the bowl surface passes through the center of the sphere.",
      "2. The chord length between the contact point and the rim is $2R\\cos\\theta$.",
      "3. Moment balance between the center of gravity and the normal reactions yields $\\cos(2\\theta) = \\frac{L}{2R}\\cos\\theta$."
    ],
    "stepByStepSolutionAr": [
      "١. رد الفعل العمودي عند قاع الإناء يمر بمركز الكرة.",
      "٢. طول وتر التلامس بين نقطة الارتكاز والحافة هو $2R\\cos\\theta$.",
      "٣. بموازنة العزوم ينتج القانون الهندسي: $\\cos(2\\theta) = \\frac{L}{2R}\\cos\\theta$."
    ],
    "teacherTipEn": "A famous classical Cambridge Tripos and Egyptian Olympiad mechanics problem.",
    "teacherTipAr": "مسألة ميكانيكا كلاسيكية مشهورة من التراث الرياضي."
  },
  {
    "id": "stat_ch1_db_hots_145",
    "titleEn": "Equilibrium of Two Blocks Connected Over Incline Vertex",
    "titleAr": "اتزان كتلتين على مستويين مائلين متقابلين",
    "difficulty": "hots",
    "questionEn": "Two rough inclined planes of inclinations $\\alpha = 30^\\circ$ and $\\beta = 60^\\circ$ meet at a common vertex with a smooth pulley. Two bodies of weights $W_1$ and $W_2$ rest on the respective planes, connected by a light string over the pulley. If both planes have the same friction angle $\\lambda = 15^\\circ$, find the ratio $W_1 / W_2$ when $W_1$ is on the verge of moving UP plane $\\alpha$.",
    "questionAr": "مستويان مائلان خشنان ميلاهما $\\alpha = 30^\\circ$ و $\\beta = 60^\\circ$ يتقابلان عند قمة مشتركة بها بكرة ملساء. يستقر على المستويين جسمان وزناهما $W_1$ و $W_2$ متصلان بخيط خفيف يمر على البكرة. إذا كان للمستويين نفس زاوية الاحتكاك $\\lambda = 15^\\circ$، فما النسبة $W_1 / W_2$ عندما يكون الجسم الأول على وشك الحركة لأعلى مستواه؟",
    "optionsEn": [
      "$\\frac{\\sin(45^\\circ)}{\\sin(45^\\circ)} = 1$",
      "$\\frac{\\sin(45^\\circ)}{\\sin(75^\\circ)}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "$\\frac{\\sin(45^\\circ)}{\\sin(45^\\circ)} = 1$",
      "$\\frac{\\sin(45^\\circ)}{\\sin(75^\\circ)}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{1}{2}$"
    ],
    "correctAnswer": "$\\frac{\\sin(45^\\circ)}{\\sin(45^\\circ)} = 1$",
    "correctIndex": 0,
    "hintEn": "Tension $T = W_1\\frac{\\sin(\\alpha + \\lambda)}{\\cos\\lambda} = W_2\\frac{\\sin(\\beta - \\lambda)}{\\cos\\lambda}$.",
    "hintAr": "معادلة الشد المشترك: $W_1\\sin(\\alpha + \\lambda) = W_2\\sin(\\beta - \\lambda)$.",
    "stepByStepSolutionEn": [
      "1. For $W_1$ moving UP: $T = W_1\\sin(\\alpha + \\lambda) / \\cos\\lambda = W_1\\sin(30^\\circ + 15^\\circ)/\\cos(15^\\circ) = W_1\\sin(45^\\circ)/\\cos(15^\\circ)$.",
      "2. For $W_2$ moving DOWN: $T = W_2\\sin(\\beta - \\lambda) / \\cos\\lambda = W_2\\sin(60^\\circ - 15^\\circ)/\\cos(15^\\circ) = W_2\\sin(45^\\circ)/\\cos(15^\\circ)$.",
      "3. Equating the two expressions for tension $T$: $W_1\\sin(45^\\circ) = W_2\\sin(45^\\circ) \\implies \\frac{W_1}{W_2} = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. للكتلة الأولى (وشك الصعود): $T = W_1\\sin(30^\\circ + 15^\\circ) / \\cos 15^\\circ = W_1\\sin 45^\\circ / \\cos 15^\\circ$.",
      "٢. للكتلة الثانية (وشك الهبوط): $T = W_2\\sin(60^\\circ - 15^\\circ) / \\cos 15^\\circ = W_2\\sin 45^\\circ / \\cos 15^\\circ$.",
      "٣. بمساواة الشدين: $W_1\\sin 45^\\circ = W_2\\sin 45^\\circ \\implies W_1 / W_2 = 1$."
    ],
    "teacherTipEn": "Symmetry in the modified sine arguments $(\\alpha + \\lambda = 45^\\circ = \\beta - \\lambda)$ makes the ratio exactly 1.",
    "teacherTipAr": "تساوي الزاويتين المعدلتين ($30+15 = 45$ و $60-15 = 45$) جعل النسبة 1 تماماً."
  },
  {
    "id": "stat_ch1_db_hots_146",
    "titleEn": "Frictional Loss in Belt Transmission",
    "titleAr": "القدرة الضائعة في الاحتكاك لسير ناقل للحركة",
    "difficulty": "hots",
    "questionEn": "A flat belt drives a pulley of radius $r = 0.5\\text{ m}$ at angular speed $\\omega = 20\\text{ rad/s}$. If the tight side tension is $T_1 = 800\\text{ N}$ and the slack side tension is $T_2 = 300\\text{ N}$, what is the power transmitted by the belt without slip?",
    "questionAr": "سير ناقل للحركة يدير طارة نصف قطرها $0.5\\text{ م}$ بسرعة زاوية $20\\text{ راد/ث}$. إذا كان الشد في الجانب المشدود $800\\text{ نيوتن}$ وفي الجانب المرتخي $300\\text{ نيوتن}$، فما القدرة المنقولة بالسير دون انزلاق؟",
    "optionsEn": [
      "$5000\\text{ W}$",
      "$8000\\text{ W}$",
      "$3000\\text{ W}$",
      "$11000\\text{ W}$"
    ],
    "optionsAr": [
      "$5000\\text{ واط}$",
      "$8000\\text{ واط}$",
      "$3000\\text{ واط}$",
      "$11000\\text{ واط}$"
    ],
    "correctAnswer": "$5000\\text{ W}$",
    "correctIndex": 0,
    "hintEn": "Power transmitted is $P = (T_1 - T_2) v = (T_1 - T_2)(\\omega r)$.",
    "hintAr": "القدرة المنقولة: $P = (T_1 - T_2) v = (T_1 - T_2)(\\omega r)$.",
    "stepByStepSolutionEn": [
      "1. Belt linear speed: $v = \\omega r = 20 \\times 0.5 = 10\\text{ m/s}$.",
      "2. Net driving force: $F_{net} = T_1 - T_2 = 800 - 300 = 500\\text{ N}$.",
      "3. Power transmitted: $P = F_{net} \\times v = 500 \\times 10 = 5000\\text{ W} = 5\\text{ kW}$."
    ],
    "stepByStepSolutionAr": [
      "١. السرعة الخطية للسير: $v = \\omega r = 20 \\times 0.5 = 10\\text{ م/ث}$.",
      "٢. قوة الشد الصافية المحركة: $T_1 - T_2 = 800 - 300 = 500\\text{ نيوتن}$.",
      "٣. القدرة: $P = (T_1 - T_2) v = 500 \\times 10 = 5000\\text{ واط}$."
    ],
    "teacherTipEn": "Tension difference $(T_1 - T_2)$ is bounded by the Capstan formula $T_1 / T_2 \\le e^{\\mu \\beta}$.",
    "teacherTipAr": "أقصى فرق بين الشدين محكوم بمعادلة كابستان $T_1 / T_2 \\le e^{\\mu \\beta}$."
  },
  {
    "id": "stat_ch1_db_hots_147",
    "titleEn": "Critical Acceleration of a Braking Vehicle",
    "titleAr": "أقصى عجلة تقصيرية لكبح سيارة دون انزلاق",
    "difficulty": "hots",
    "questionEn": "A car moves along a level horizontal road with tire-road coefficient of static friction $\\mu_s = 0.8$. What is the MAXIMUM possible deceleration $a_{max}$ of the car under braking without skidding (taking $g = 9.8\\text{ m/s}^2$)?",
    "questionAr": "سيارة تسير على طريق أفقي مستوٍ معامل الاحتكاك السكوني بين إطاراتها والطريق $0.8$. ما أقصى عجلة تقصيرية (تباطؤ) $a_{max}$ يمكن أن تفرمل بها السيارة دون انزلاق (اعتبر $g = 9.8\\text{ م/ث}^2$)؟",
    "optionsEn": [
      "$7.84\\text{ m/s}^2$",
      "$9.8\\text{ m/s}^2$",
      "$4.9\\text{ m/s}^2$",
      "$6.25\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$7.84\\text{ م/ث}^2$",
      "$9.8\\text{ م/ث}^2$",
      "$4.9\\text{ م/ث}^2$",
      "$6.25\\text{ م/ث}^2$"
    ],
    "correctAnswer": "$7.84\\text{ m/s}^2$",
    "correctIndex": 0,
    "hintEn": "Maximum retarding force is all-wheel friction: $F_{max} = \\mu_s m g \\implies a_{max} = \\mu_s g$.",
    "hintAr": "أقصى قوة فرملة هي احتكاك العجلات: $F_{max} = \\mu_s m g \\implies a_{max} = \\mu_s g$.",
    "stepByStepSolutionEn": [
      "1. When all wheels are on the verge of locking (anti-lock braking system ABS operating at peak): $F_{brake} = \\mu_s R = \\mu_s m g$.",
      "2. From Newton's second law: $m a_{max} = \\mu_s m g \\implies a_{max} = \\mu_s g$.",
      "3. Calculate: $a_{max} = 0.8 \\times 9.8 = 7.84\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. عند كبح جميع العجلات عند حد الانزلاق: $F_{brake} = \\mu_s m g$.",
      "٢. من قانون نيوتن الثاني: $m a_{max} = \\mu_s m g \\implies a_{max} = \\mu_s g$.",
      "٣. الحساب: $a_{max} = 0.8 \\times 9.8 = 7.84\\text{ م/ث}^2$."
    ],
    "teacherTipEn": "Notice that vehicle mass cancels out completely; stopping capability depends solely on $\\mu_s$ and $g$.",
    "teacherTipAr": "كتلة السيارة تختصر تماماً، فأقصى تباطؤ يعتمد فقط على معامل الاحتكاك وعجلة الجاذبية."
  },
  {
    "id": "stat_ch1_db_hots_148",
    "titleEn": "Stopping Distance on Level Road",
    "titleAr": "مسافة التوقف على طريق أفقي",
    "difficulty": "hots",
    "questionEn": "If the car in Q147 is traveling at $v_0 = 72\\text{ km/h} = 20\\text{ m/s}$, what is the minimum stopping distance $d_{min}$ on the dry level road ($a = 7.84\\text{ m/s}^2$)?",
    "questionAr": "إذا كانت السيارة في السؤال السابق تسير بسرعة $v_0 = 72\\text{ كم/س} = 20\\text{ م/ث}$، فما أقل مسافة توقف $d_{min}$ على هذا الطريق الأفقي؟",
    "optionsEn": [
      "$25.5\\text{ m}$",
      "$51.0\\text{ m}$",
      "$20.0\\text{ m}$",
      "$15.3\\text{ m}$"
    ],
    "optionsAr": [
      "$25.5\\text{ م}$",
      "$51.0\\text{ م}$",
      "$20.0\\text{ م}$",
      "$15.3\\text{ م}$"
    ],
    "correctAnswer": "$25.5\\text{ m}$",
    "correctIndex": 0,
    "hintEn": "Use kinematics: $v^2 = v_0^2 - 2 a d \\implies d = \\frac{v_0^2}{2 a}$.",
    "hintAr": "معادلة الحركة: $v^2 = v_0^2 - 2 a d \\implies d = \\frac{v_0^2}{2 a}$.",
    "stepByStepSolutionEn": [
      "1. Final velocity is $v = 0$, initial velocity is $v_0 = 20\\text{ m/s}$.",
      "2. Kinematic relation: $0 = v_0^2 - 2 a d \\implies d = \\frac{v_0^2}{2 a}$.",
      "3. Substitute: $d = \\frac{20^2}{2 \\times 7.84} = \\frac{400}{15.68} \\approx 25.51\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "١. السرعة النهائية صفر، والابتدائية $20\\text{ م/ث}$.",
      "٢. $d = \\frac{v_0^2}{2 a}$.",
      "٣. بالتعويض: $d = \\frac{400}{2 \\times 7.84} \\approx 25.5\\text{ م}$."
    ],
    "teacherTipEn": "Stopping distance grows quadratically with initial speed: doubling speed quadruples stopping distance.",
    "teacherTipAr": "مسافة التوقف تتناسب طردياً مع مربع السرعة: مضاعفة السرعة تضاعف مسافة الفرملة أربع مرات."
  },
  {
    "id": "stat_ch1_db_hots_149",
    "titleEn": "Coulomb Friction Angle and Mohr Circle Relation",
    "titleAr": "علاقة زاوية احتكاك كولوم بدائرة مور للإجهادات",
    "difficulty": "hots",
    "questionEn": "In soil and granular mechanics, Coulomb's dry friction law $\\tau \\le \\mu_s \\sigma_n$ corresponds to a straight failure envelope on the Mohr stress diagram. The angle of internal friction $\\phi$ satisfies:",
    "questionAr": "في ميكانيكا التربة والمواد الحبيبية، قانون احتكاك كولوم $\\tau \\le \\mu_s \\sigma_n$ يمثل خط انهيار مستقيم على دائرة مور للإجهادات. زاوية الاحتكاك الداخلي $\\phi$ تحقق العلاقة:",
    "optionsEn": [
      "$\\tan\\phi = \\mu_s$",
      "$\\sin\\phi = \\mu_s$",
      "$\\cos\\phi = \\mu_s$",
      "$\\phi = 2\\lambda$"
    ],
    "optionsAr": [
      "$\\tan\\phi = \\mu_s$",
      "$\\sin\\phi = \\mu_s$",
      "$\\cos\\phi = \\mu_s$",
      "$\\phi = 2\\lambda$"
    ],
    "correctAnswer": "$\\tan\\phi = \\mu_s$",
    "correctIndex": 0,
    "hintEn": "The Coulomb failure envelope has slope $\\tau / \\sigma_n = \\mu_s = \\tan\\phi$.",
    "hintAr": "ميل خط انهيار كولوم على رسم الإجهادات هو $\\tau / \\sigma_n = \\tan\\phi = \\mu_s$.",
    "stepByStepSolutionEn": [
      "1. On the $(\\sigma_n, \\tau)$ plane, Coulomb's failure criterion for cohesionless materials is $\\tau = \\sigma_n \\tan\\phi$.",
      "2. For rigid body dry friction, the tangential friction force is $F = \\mu_s R$.",
      "3. Dividing by contact area gives shear stress $\\tau = \\mu_s \\sigma_n$.",
      "4. Equating the two forms shows directly that $\\tan\\phi = \\mu_s$, meaning $\\phi = \\lambda$."
    ],
    "stepByStepSolutionAr": [
      "١. على مستوى الإجهادات $(\\sigma_n, \\tau)$، معيار انهيار كولوم هو $\\tau = \\sigma_n \\tan\\phi$.",
      "٢. إجهاد الاحتكاك الجاف: $\\tau = \\mu_s \\sigma_n$.",
      "٣. بمقارنة الصيغتين يتضح مباشرة أن $\\tan\\phi = \\mu_s$، أي أن زاوية الاحتكاك الداخلي هي نفسها زاوية الاحتكاك $\\lambda$."
    ],
    "teacherTipEn": "This fundamental correspondence bridges rigid body statics with continuum and geotechnical mechanics.",
    "teacherTipAr": "هذا الربط يمثل الجسر النظري بين استاتيكا الجسيمات الجاسئة وميكانيكا التربة والاتصال."
  },
  {
    "id": "stat_ch1_db_hots_150",
    "titleEn": "Principle of Virtual Work with Friction",
    "titleAr": "مبدأ الشغل الافتراضي مع قوى الاحتكاك",
    "difficulty": "hots",
    "questionEn": "When applying the Principle of Virtual Work to a system in LIMITING equilibrium involving dry friction with coefficient $\\mu_s$, which statement is correct?",
    "questionAr": "عند تطبيق مبدأ الشغل الافتراضي على نظام في حالة اتزان نهائي يشتمل على احتكاك جاف بمعامل $\\mu_s$، أي العبارات الآتية صحيحة؟",
    "optionsEn": [
      "Friction force must be treated as an active external force doing virtual work $\\delta W = -F_s \\delta s$",
      "Friction does zero virtual work because reactions are always workless",
      "The normal reaction does negative virtual work",
      "Virtual work principle cannot be applied to systems with friction"
    ],
    "optionsAr": [
      "يجب معاملة قوة الاحتكاك كقوة خارجية فعالة تبذل شغلاً افتراضياً $\\delta W = -F_s \\delta s$",
      "قوة الاحتكاك لا تبذل أي شغل افتراضي لأن ردود الأفعال لا تبذل شغلاً",
      "رد الفعل العمودي يبذل شغلاً افتراضياً سالباً",
      "لا يمكن تطبيق مبدأ الشغل الافتراضي على أنظمة بها احتكاك"
    ],
    "correctAnswer": "Friction force must be treated as an active external force doing virtual work $\\delta W = -F_s \\delta s$",
    "correctIndex": 0,
    "hintEn": "Unlike frictionless smooth constraints, dry friction dissipates energy and does work on virtual displacements.",
    "hintAr": "بخلاف القيود الملساء، قوى الاحتكاك غير حافظة وتبذل شغلاً سالباً مع أي إزاحة افتراضية في اتجاه الحركة الوشيكة.",
    "stepByStepSolutionEn": [
      "1. In ideal smooth constraints, reactions are normal to virtual displacements, so $\\delta W = 0$.",
      "2. At limiting friction, the friction force $F_s = \\mu_s R$ acts tangentially along the contact surface.",
      "3. For a virtual displacement $\\delta s$ in the direction of impending motion, friction opposes motion and does virtual work $\\delta W_{friction} = -F_s \\delta s$.",
      "4. Therefore, friction forces must be included in the virtual work equation as active dissipative forces."
    ],
    "stepByStepSolutionAr": [
      "١. في القيود الملساء المثالية، تكون ردود الأفعال عمودية على الإزاحة الافتراضية وشغلها صفر.",
      "٢. عند الاحتكاك النهائي، تعمل قوة الاحتكاك $F_s = \\mu_s R$ مماسياً في اتجاه الحركة الوشيكة.",
      "٣. لأي إزاحة افتراضية $\\delta s$ في اتجاه الحركة الوشيكة، تبذل قوة الاحتكاك شغلاً افتراضياً سالباً $\\delta W = -F_s \\delta s$.",
      "٤. لذلك يجب إدراج قوى الاحتكاك كقوى خارجية فعالة مبددة للطاقة في معادلة الشغل الافتراضي."
    ],
    "teacherTipEn": "Virtual work remains valid with friction as long as limiting friction forces are treated as active external forces.",
    "teacherTipAr": "يظل مبدأ الشغل الافتراضي صالحاً مع الاحتكاك بشرط معاملة قوى الاحتكاك كقوى خارجية فعالة."
  }
]
};
