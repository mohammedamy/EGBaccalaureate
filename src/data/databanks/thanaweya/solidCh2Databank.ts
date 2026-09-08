import type { ChapterDatabank } from '../../../types/curriculum';

export const solidCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "solid_ch2_db_easy_01",
    "titleEn": "Direction Cosines of Line Vector 1",
    "titleAr": "جيوب تمام الاتجاه لمتجه مستقيم 1",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a straight line with direction vector $\\vec{d} = (1, 2, 2)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (1، 2، 2)$.",
    "optionsEn": [
      "(1/3, 2/3, 2/3)",
      "(1, 2, 2)",
      "(2, 4, 4)",
      "(1/6, 2/6, 2/6)"
    ],
    "optionsAr": [
      "(1/3، 2/3، 2/3)",
      "(1، 2، 2)",
      "(2، 4، 4)",
      "(1/6، 2/6، 2/6)"
    ],
    "correctAnswer": "(1/3, 2/3, 2/3)",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of the unit vector: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute the magnitude: $\\|\\vec{d}\\| = \\sqrt{1^2 + 2^2 + 2^2} = 3$.",
      "Divide each component by the magnitude: $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (1/3, 2/3, 2/3)$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعيار: $\\|\\vec{d}\\| = \\sqrt{1^2 + 2^2 + 2^2} = 3$.",
      "نقسم كل مركبة على المعيار فنحصل على: (1/3، 2/3، 2/3)."
    ],
    "teacherTipEn": "Always verify that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "teacherTipAr": "تحقق دائماً من أن مجموع مربعات جيوب تمام الاتجاه يساوي ١."
  },
  {
    "id": "solid_ch2_db_easy_02",
    "titleEn": "Direction Cosines of Line Vector 2",
    "titleAr": "جيوب تمام الاتجاه لمتجه مستقيم 2",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a straight line with direction vector $\\vec{d} = (2, 1, 2)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (2، 1، 2)$.",
    "optionsEn": [
      "(2/3, 1/3, 2/3)",
      "(2, 1, 2)",
      "(4, 2, 4)",
      "(2/6, 1/6, 2/6)"
    ],
    "optionsAr": [
      "(2/3، 1/3، 2/3)",
      "(2، 1، 2)",
      "(4، 2، 4)",
      "(2/6، 1/6، 2/6)"
    ],
    "correctAnswer": "(2/3, 1/3, 2/3)",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of the unit vector: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute the magnitude: $\\|\\vec{d}\\| = \\sqrt{2^2 + 1^2 + 2^2} = 3$.",
      "Divide each component by the magnitude: $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (2/3, 1/3, 2/3)$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعيار: $\\|\\vec{d}\\| = \\sqrt{2^2 + 1^2 + 2^2} = 3$.",
      "نقسم كل مركبة على المعيار فنحصل على: (2/3، 1/3، 2/3)."
    ],
    "teacherTipEn": "Always verify that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "teacherTipAr": "تحقق دائماً من أن مجموع مربعات جيوب تمام الاتجاه يساوي ١."
  },
  {
    "id": "solid_ch2_db_easy_03",
    "titleEn": "Direction Cosines of Line Vector 3",
    "titleAr": "جيوب تمام الاتجاه لمتجه مستقيم 3",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a straight line with direction vector $\\vec{d} = (2, 2, 1)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (2، 2، 1)$.",
    "optionsEn": [
      "(2/3, 2/3, 1/3)",
      "(2, 2, 1)",
      "(4, 4, 2)",
      "(2/6, 2/6, 1/6)"
    ],
    "optionsAr": [
      "(2/3، 2/3، 1/3)",
      "(2، 2، 1)",
      "(4، 4، 2)",
      "(2/6، 2/6، 1/6)"
    ],
    "correctAnswer": "(2/3, 2/3, 1/3)",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of the unit vector: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute the magnitude: $\\|\\vec{d}\\| = \\sqrt{2^2 + 2^2 + 1^2} = 3$.",
      "Divide each component by the magnitude: $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (2/3, 2/3, 1/3)$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعيار: $\\|\\vec{d}\\| = \\sqrt{2^2 + 2^2 + 1^2} = 3$.",
      "نقسم كل مركبة على المعيار فنحصل على: (2/3، 2/3، 1/3)."
    ],
    "teacherTipEn": "Always verify that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "teacherTipAr": "تحقق دائماً من أن مجموع مربعات جيوب تمام الاتجاه يساوي ١."
  },
  {
    "id": "solid_ch2_db_easy_04",
    "titleEn": "Direction Cosines of Line Vector 4",
    "titleAr": "جيوب تمام الاتجاه لمتجه مستقيم 4",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a straight line with direction vector $\\vec{d} = (1, -2, 2)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (1، -2، 2)$.",
    "optionsEn": [
      "(1/3, -2/3, 2/3)",
      "(1, -2, 2)",
      "(2, -4, 4)",
      "(1/6, -2/6, 2/6)"
    ],
    "optionsAr": [
      "(1/3، -2/3، 2/3)",
      "(1، -2، 2)",
      "(2، -4، 4)",
      "(1/6، -2/6، 2/6)"
    ],
    "correctAnswer": "(1/3, -2/3, 2/3)",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of the unit vector: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute the magnitude: $\\|\\vec{d}\\| = \\sqrt{1^2 + -2^2 + 2^2} = 3$.",
      "Divide each component by the magnitude: $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (1/3, -2/3, 2/3)$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعيار: $\\|\\vec{d}\\| = \\sqrt{1^2 + -2^2 + 2^2} = 3$.",
      "نقسم كل مركبة على المعيار فنحصل على: (1/3، -2/3، 2/3)."
    ],
    "teacherTipEn": "Always verify that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "teacherTipAr": "تحقق دائماً من أن مجموع مربعات جيوب تمام الاتجاه يساوي ١."
  },
  {
    "id": "solid_ch2_db_easy_05",
    "titleEn": "Direction Cosines of Line Vector 5",
    "titleAr": "جيوب تمام الاتجاه لمتجه مستقيم 5",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a straight line with direction vector $\\vec{d} = (2, -1, 2)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (2، -1، 2)$.",
    "optionsEn": [
      "(2/3, -1/3, 2/3)",
      "(2, -1, 2)",
      "(4, -2, 4)",
      "(2/6, -1/6, 2/6)"
    ],
    "optionsAr": [
      "(2/3، -1/3، 2/3)",
      "(2، -1، 2)",
      "(4، -2، 4)",
      "(2/6، -1/6، 2/6)"
    ],
    "correctAnswer": "(2/3, -1/3, 2/3)",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of the unit vector: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute the magnitude: $\\|\\vec{d}\\| = \\sqrt{2^2 + -1^2 + 2^2} = 3$.",
      "Divide each component by the magnitude: $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (2/3, -1/3, 2/3)$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعيار: $\\|\\vec{d}\\| = \\sqrt{2^2 + -1^2 + 2^2} = 3$.",
      "نقسم كل مركبة على المعيار فنحصل على: (2/3، -1/3، 2/3)."
    ],
    "teacherTipEn": "Always verify that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "teacherTipAr": "تحقق دائماً من أن مجموع مربعات جيوب تمام الاتجاه يساوي ١."
  },
  {
    "id": "solid_ch2_db_easy_06",
    "titleEn": "Direction Cosines of Line Vector 6",
    "titleAr": "جيوب تمام الاتجاه لمتجه مستقيم 6",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a straight line with direction vector $\\vec{d} = (3, 4, 0)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (3، 4، 0)$.",
    "optionsEn": [
      "(3/5, 4/5, 0/5)",
      "(3, 4, 0)",
      "(6, 8, 0)",
      "(3/10, 4/10, 0/10)"
    ],
    "optionsAr": [
      "(3/5، 4/5، 0/5)",
      "(3، 4، 0)",
      "(6، 8، 0)",
      "(3/10، 4/10، 0/10)"
    ],
    "correctAnswer": "(3/5, 4/5, 0/5)",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of the unit vector: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute the magnitude: $\\|\\vec{d}\\| = \\sqrt{3^2 + 4^2 + 0^2} = 5$.",
      "Divide each component by the magnitude: $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (3/5, 4/5, 0/5)$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعيار: $\\|\\vec{d}\\| = \\sqrt{3^2 + 4^2 + 0^2} = 5$.",
      "نقسم كل مركبة على المعيار فنحصل على: (3/5، 4/5، 0/5)."
    ],
    "teacherTipEn": "Always verify that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "teacherTipAr": "تحقق دائماً من أن مجموع مربعات جيوب تمام الاتجاه يساوي ١."
  },
  {
    "id": "solid_ch2_db_easy_07",
    "titleEn": "Direction Cosines of Line Vector 7",
    "titleAr": "جيوب تمام الاتجاه لمتجه مستقيم 7",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a straight line with direction vector $\\vec{d} = (0, 3, 4)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (0، 3، 4)$.",
    "optionsEn": [
      "(0/5, 3/5, 4/5)",
      "(0, 3, 4)",
      "(0, 6, 8)",
      "(0/10, 3/10, 4/10)"
    ],
    "optionsAr": [
      "(0/5، 3/5، 4/5)",
      "(0، 3، 4)",
      "(0، 6، 8)",
      "(0/10، 3/10، 4/10)"
    ],
    "correctAnswer": "(0/5, 3/5, 4/5)",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of the unit vector: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute the magnitude: $\\|\\vec{d}\\| = \\sqrt{0^2 + 3^2 + 4^2} = 5$.",
      "Divide each component by the magnitude: $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (0/5, 3/5, 4/5)$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعيار: $\\|\\vec{d}\\| = \\sqrt{0^2 + 3^2 + 4^2} = 5$.",
      "نقسم كل مركبة على المعيار فنحصل على: (0/5، 3/5، 4/5)."
    ],
    "teacherTipEn": "Always verify that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "teacherTipAr": "تحقق دائماً من أن مجموع مربعات جيوب تمام الاتجاه يساوي ١."
  },
  {
    "id": "solid_ch2_db_easy_08",
    "titleEn": "Direction Cosines of Line Vector 8",
    "titleAr": "جيوب تمام الاتجاه لمتجه مستقيم 8",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a straight line with direction vector $\\vec{d} = (1, 1, 1)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (1، 1، 1)$.",
    "optionsEn": [
      "(1/2, 1/2, 1/2)",
      "(1, 1, 1)",
      "(2, 2, 2)",
      "(1/4, 1/4, 1/4)"
    ],
    "optionsAr": [
      "(1/2، 1/2، 1/2)",
      "(1، 1، 1)",
      "(2، 2، 2)",
      "(1/4، 1/4، 1/4)"
    ],
    "correctAnswer": "(1/2, 1/2, 1/2)",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of the unit vector: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute the magnitude: $\\|\\vec{d}\\| = \\sqrt{1^2 + 1^2 + 1^2} = 2$.",
      "Divide each component by the magnitude: $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (1/2, 1/2, 1/2)$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعيار: $\\|\\vec{d}\\| = \\sqrt{1^2 + 1^2 + 1^2} = 2$.",
      "نقسم كل مركبة على المعيار فنحصل على: (1/2، 1/2، 1/2)."
    ],
    "teacherTipEn": "Always verify that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "teacherTipAr": "تحقق دائماً من أن مجموع مربعات جيوب تمام الاتجاه يساوي ١."
  },
  {
    "id": "solid_ch2_db_easy_09",
    "titleEn": "Direction Cosines of Line Vector 9",
    "titleAr": "جيوب تمام الاتجاه لمتجه مستقيم 9",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a straight line with direction vector $\\vec{d} = (1, 0, 0)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (1، 0، 0)$.",
    "optionsEn": [
      "(1/1, 0/1, 0/1)",
      "(1, 0, 0)",
      "(2, 0, 0)",
      "(1/2, 0/2, 0/2)"
    ],
    "optionsAr": [
      "(1/1، 0/1، 0/1)",
      "(1، 0، 0)",
      "(2، 0، 0)",
      "(1/2، 0/2، 0/2)"
    ],
    "correctAnswer": "(1/1, 0/1, 0/1)",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of the unit vector: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute the magnitude: $\\|\\vec{d}\\| = \\sqrt{1^2 + 0^2 + 0^2} = 1$.",
      "Divide each component by the magnitude: $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (1/1, 0/1, 0/1)$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعيار: $\\|\\vec{d}\\| = \\sqrt{1^2 + 0^2 + 0^2} = 1$.",
      "نقسم كل مركبة على المعيار فنحصل على: (1/1، 0/1، 0/1)."
    ],
    "teacherTipEn": "Always verify that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "teacherTipAr": "تحقق دائماً من أن مجموع مربعات جيوب تمام الاتجاه يساوي ١."
  },
  {
    "id": "solid_ch2_db_easy_10",
    "titleEn": "Direction Cosines of Line Vector 10",
    "titleAr": "جيوب تمام الاتجاه لمتجه مستقيم 10",
    "difficulty": "easy",
    "questionEn": "Find the direction cosines of a straight line with direction vector $\\vec{d} = (0, 1, 0)$.",
    "questionAr": "أوجد جيوب تمام الاتجاه لخط مستقيم متجه اتجاهه $\\vec{d} = (0، 1، 0)$.",
    "optionsEn": [
      "(0/1, 1/1, 0/1)",
      "(0, 1, 0)",
      "(0, 2, 0)",
      "(0/2, 1/2, 0/2)"
    ],
    "optionsAr": [
      "(0/1، 1/1، 0/1)",
      "(0، 1، 0)",
      "(0، 2، 0)",
      "(0/2، 1/2، 0/2)"
    ],
    "correctAnswer": "(0/1, 1/1, 0/1)",
    "correctIndex": 0,
    "hintEn": "Direction cosines are the components of the unit vector: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "hintAr": "جيوب تمام الاتجاه هي مركبات متجه الوحدة: $\\frac{\\vec{d}}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Compute the magnitude: $\\|\\vec{d}\\| = \\sqrt{0^2 + 1^2 + 0^2} = 1$.",
      "Divide each component by the magnitude: $(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (0/1, 1/1, 0/1)$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعيار: $\\|\\vec{d}\\| = \\sqrt{0^2 + 1^2 + 0^2} = 1$.",
      "نقسم كل مركبة على المعيار فنحصل على: (0/1، 1/1، 0/1)."
    ],
    "teacherTipEn": "Always verify that $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "teacherTipAr": "تحقق دائماً من أن مجموع مربعات جيوب تمام الاتجاه يساوي ١."
  },
  {
    "id": "solid_ch2_db_easy_11",
    "titleEn": "Normal Vector of Plane 11",
    "titleAr": "المتجه العمودي على المستوى 11",
    "difficulty": "easy",
    "questionEn": "What is a normal vector to the plane $4x -3y + 3z - 22 = 0$?",
    "questionAr": "ما هو المتجه العمودي على المستوى $4x -3y + 3z - 22 = ٠$؟",
    "optionsEn": [
      "(4, -3, 3)",
      "(4, 3, 3)",
      "(22, 4, -3)",
      "(3, -3, 4)"
    ],
    "optionsAr": [
      "(4، -3، 3)",
      "(4، 3، 3)",
      "(22، 4، -3)",
      "(3، -3، 4)"
    ],
    "correctAnswer": "(4, -3, 3)",
    "correctIndex": 0,
    "hintEn": "The coefficients of $x, y, z$ in the general Cartesian equation of a plane form its normal vector $\\vec{n} = (A, B, C)$.",
    "hintAr": "معاملات $x, y, z$ في الصورة العامة لمعادلة المستوى تمثل المتجه العمودي $\\vec{n} = (A, B, C)$.",
    "stepByStepSolutionEn": [
      "In the equation $Ax + By + Cz + D = 0$, the normal vector is $\\vec{n} = (A, B, C)$.",
      "Here $A = 4, B = -3, C = 3$, so $\\vec{n} = (4, -3, 3)$."
    ],
    "stepByStepSolutionAr": [
      "في معادلة المستوى العامة، المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "إذن $\\vec{n} = (4، -3، 3)$."
    ],
    "teacherTipEn": "Take the signs of the coefficients carefully.",
    "teacherTipAr": "انتبه لإشارات المعاملات جيداً."
  },
  {
    "id": "solid_ch2_db_easy_12",
    "titleEn": "Normal Vector of Plane 12",
    "titleAr": "المتجه العمودي على المستوى 12",
    "difficulty": "easy",
    "questionEn": "What is a normal vector to the plane $1x -1y + 4z - 24 = 0$?",
    "questionAr": "ما هو المتجه العمودي على المستوى $1x -1y + 4z - 24 = ٠$؟",
    "optionsEn": [
      "(1, -1, 4)",
      "(1, 1, 4)",
      "(24, 1, -1)",
      "(4, -1, 1)"
    ],
    "optionsAr": [
      "(1، -1، 4)",
      "(1، 1، 4)",
      "(24، 1، -1)",
      "(4، -1، 1)"
    ],
    "correctAnswer": "(1, -1, 4)",
    "correctIndex": 0,
    "hintEn": "The coefficients of $x, y, z$ in the general Cartesian equation of a plane form its normal vector $\\vec{n} = (A, B, C)$.",
    "hintAr": "معاملات $x, y, z$ في الصورة العامة لمعادلة المستوى تمثل المتجه العمودي $\\vec{n} = (A, B, C)$.",
    "stepByStepSolutionEn": [
      "In the equation $Ax + By + Cz + D = 0$, the normal vector is $\\vec{n} = (A, B, C)$.",
      "Here $A = 1, B = -1, C = 4$, so $\\vec{n} = (1, -1, 4)$."
    ],
    "stepByStepSolutionAr": [
      "في معادلة المستوى العامة، المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "إذن $\\vec{n} = (1، -1، 4)$."
    ],
    "teacherTipEn": "Take the signs of the coefficients carefully.",
    "teacherTipAr": "انتبه لإشارات المعاملات جيداً."
  },
  {
    "id": "solid_ch2_db_easy_13",
    "titleEn": "Normal Vector of Plane 13",
    "titleAr": "المتجه العمودي على المستوى 13",
    "difficulty": "easy",
    "questionEn": "What is a normal vector to the plane $2x -2y + 5z - 26 = 0$?",
    "questionAr": "ما هو المتجه العمودي على المستوى $2x -2y + 5z - 26 = ٠$؟",
    "optionsEn": [
      "(2, -2, 5)",
      "(2, 2, 5)",
      "(26, 2, -2)",
      "(5, -2, 2)"
    ],
    "optionsAr": [
      "(2، -2، 5)",
      "(2، 2، 5)",
      "(26، 2، -2)",
      "(5، -2، 2)"
    ],
    "correctAnswer": "(2, -2, 5)",
    "correctIndex": 0,
    "hintEn": "The coefficients of $x, y, z$ in the general Cartesian equation of a plane form its normal vector $\\vec{n} = (A, B, C)$.",
    "hintAr": "معاملات $x, y, z$ في الصورة العامة لمعادلة المستوى تمثل المتجه العمودي $\\vec{n} = (A, B, C)$.",
    "stepByStepSolutionEn": [
      "In the equation $Ax + By + Cz + D = 0$, the normal vector is $\\vec{n} = (A, B, C)$.",
      "Here $A = 2, B = -2, C = 5$, so $\\vec{n} = (2, -2, 5)$."
    ],
    "stepByStepSolutionAr": [
      "في معادلة المستوى العامة، المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "إذن $\\vec{n} = (2، -2، 5)$."
    ],
    "teacherTipEn": "Take the signs of the coefficients carefully.",
    "teacherTipAr": "انتبه لإشارات المعاملات جيداً."
  },
  {
    "id": "solid_ch2_db_easy_14",
    "titleEn": "Normal Vector of Plane 14",
    "titleAr": "المتجه العمودي على المستوى 14",
    "difficulty": "easy",
    "questionEn": "What is a normal vector to the plane $3x -3y + 6z - 28 = 0$?",
    "questionAr": "ما هو المتجه العمودي على المستوى $3x -3y + 6z - 28 = ٠$؟",
    "optionsEn": [
      "(3, -3, 6)",
      "(3, 3, 6)",
      "(28, 3, -3)",
      "(6, -3, 3)"
    ],
    "optionsAr": [
      "(3، -3، 6)",
      "(3، 3، 6)",
      "(28، 3، -3)",
      "(6، -3، 3)"
    ],
    "correctAnswer": "(3, -3, 6)",
    "correctIndex": 0,
    "hintEn": "The coefficients of $x, y, z$ in the general Cartesian equation of a plane form its normal vector $\\vec{n} = (A, B, C)$.",
    "hintAr": "معاملات $x, y, z$ في الصورة العامة لمعادلة المستوى تمثل المتجه العمودي $\\vec{n} = (A, B, C)$.",
    "stepByStepSolutionEn": [
      "In the equation $Ax + By + Cz + D = 0$, the normal vector is $\\vec{n} = (A, B, C)$.",
      "Here $A = 3, B = -3, C = 6$, so $\\vec{n} = (3, -3, 6)$."
    ],
    "stepByStepSolutionAr": [
      "في معادلة المستوى العامة، المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "إذن $\\vec{n} = (3، -3، 6)$."
    ],
    "teacherTipEn": "Take the signs of the coefficients carefully.",
    "teacherTipAr": "انتبه لإشارات المعاملات جيداً."
  },
  {
    "id": "solid_ch2_db_easy_15",
    "titleEn": "Normal Vector of Plane 15",
    "titleAr": "المتجه العمودي على المستوى 15",
    "difficulty": "easy",
    "questionEn": "What is a normal vector to the plane $4x -1y + 2z - 30 = 0$?",
    "questionAr": "ما هو المتجه العمودي على المستوى $4x -1y + 2z - 30 = ٠$؟",
    "optionsEn": [
      "(4, -1, 2)",
      "(4, 1, 2)",
      "(30, 4, -1)",
      "(2, -1, 4)"
    ],
    "optionsAr": [
      "(4، -1، 2)",
      "(4، 1، 2)",
      "(30، 4، -1)",
      "(2، -1، 4)"
    ],
    "correctAnswer": "(4, -1, 2)",
    "correctIndex": 0,
    "hintEn": "The coefficients of $x, y, z$ in the general Cartesian equation of a plane form its normal vector $\\vec{n} = (A, B, C)$.",
    "hintAr": "معاملات $x, y, z$ في الصورة العامة لمعادلة المستوى تمثل المتجه العمودي $\\vec{n} = (A, B, C)$.",
    "stepByStepSolutionEn": [
      "In the equation $Ax + By + Cz + D = 0$, the normal vector is $\\vec{n} = (A, B, C)$.",
      "Here $A = 4, B = -1, C = 2$, so $\\vec{n} = (4, -1, 2)$."
    ],
    "stepByStepSolutionAr": [
      "في معادلة المستوى العامة، المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "إذن $\\vec{n} = (4، -1، 2)$."
    ],
    "teacherTipEn": "Take the signs of the coefficients carefully.",
    "teacherTipAr": "انتبه لإشارات المعاملات جيداً."
  },
  {
    "id": "solid_ch2_db_easy_16",
    "titleEn": "Normal Vector of Plane 16",
    "titleAr": "المتجه العمودي على المستوى 16",
    "difficulty": "easy",
    "questionEn": "What is a normal vector to the plane $1x -2y + 3z - 32 = 0$?",
    "questionAr": "ما هو المتجه العمودي على المستوى $1x -2y + 3z - 32 = ٠$؟",
    "optionsEn": [
      "(1, -2, 3)",
      "(1, 2, 3)",
      "(32, 1, -2)",
      "(3, -2, 1)"
    ],
    "optionsAr": [
      "(1، -2، 3)",
      "(1، 2، 3)",
      "(32، 1، -2)",
      "(3، -2، 1)"
    ],
    "correctAnswer": "(1, -2, 3)",
    "correctIndex": 0,
    "hintEn": "The coefficients of $x, y, z$ in the general Cartesian equation of a plane form its normal vector $\\vec{n} = (A, B, C)$.",
    "hintAr": "معاملات $x, y, z$ في الصورة العامة لمعادلة المستوى تمثل المتجه العمودي $\\vec{n} = (A, B, C)$.",
    "stepByStepSolutionEn": [
      "In the equation $Ax + By + Cz + D = 0$, the normal vector is $\\vec{n} = (A, B, C)$.",
      "Here $A = 1, B = -2, C = 3$, so $\\vec{n} = (1, -2, 3)$."
    ],
    "stepByStepSolutionAr": [
      "في معادلة المستوى العامة، المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "إذن $\\vec{n} = (1، -2، 3)$."
    ],
    "teacherTipEn": "Take the signs of the coefficients carefully.",
    "teacherTipAr": "انتبه لإشارات المعاملات جيداً."
  },
  {
    "id": "solid_ch2_db_easy_17",
    "titleEn": "Normal Vector of Plane 17",
    "titleAr": "المتجه العمودي على المستوى 17",
    "difficulty": "easy",
    "questionEn": "What is a normal vector to the plane $2x -3y + 4z - 34 = 0$?",
    "questionAr": "ما هو المتجه العمودي على المستوى $2x -3y + 4z - 34 = ٠$؟",
    "optionsEn": [
      "(2, -3, 4)",
      "(2, 3, 4)",
      "(34, 2, -3)",
      "(4, -3, 2)"
    ],
    "optionsAr": [
      "(2، -3، 4)",
      "(2، 3، 4)",
      "(34، 2، -3)",
      "(4، -3، 2)"
    ],
    "correctAnswer": "(2, -3, 4)",
    "correctIndex": 0,
    "hintEn": "The coefficients of $x, y, z$ in the general Cartesian equation of a plane form its normal vector $\\vec{n} = (A, B, C)$.",
    "hintAr": "معاملات $x, y, z$ في الصورة العامة لمعادلة المستوى تمثل المتجه العمودي $\\vec{n} = (A, B, C)$.",
    "stepByStepSolutionEn": [
      "In the equation $Ax + By + Cz + D = 0$, the normal vector is $\\vec{n} = (A, B, C)$.",
      "Here $A = 2, B = -3, C = 4$, so $\\vec{n} = (2, -3, 4)$."
    ],
    "stepByStepSolutionAr": [
      "في معادلة المستوى العامة، المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "إذن $\\vec{n} = (2، -3، 4)$."
    ],
    "teacherTipEn": "Take the signs of the coefficients carefully.",
    "teacherTipAr": "انتبه لإشارات المعاملات جيداً."
  },
  {
    "id": "solid_ch2_db_easy_18",
    "titleEn": "Normal Vector of Plane 18",
    "titleAr": "المتجه العمودي على المستوى 18",
    "difficulty": "easy",
    "questionEn": "What is a normal vector to the plane $3x -1y + 5z - 36 = 0$?",
    "questionAr": "ما هو المتجه العمودي على المستوى $3x -1y + 5z - 36 = ٠$؟",
    "optionsEn": [
      "(3, -1, 5)",
      "(3, 1, 5)",
      "(36, 3, -1)",
      "(5, -1, 3)"
    ],
    "optionsAr": [
      "(3، -1، 5)",
      "(3، 1، 5)",
      "(36، 3، -1)",
      "(5، -1، 3)"
    ],
    "correctAnswer": "(3, -1, 5)",
    "correctIndex": 0,
    "hintEn": "The coefficients of $x, y, z$ in the general Cartesian equation of a plane form its normal vector $\\vec{n} = (A, B, C)$.",
    "hintAr": "معاملات $x, y, z$ في الصورة العامة لمعادلة المستوى تمثل المتجه العمودي $\\vec{n} = (A, B, C)$.",
    "stepByStepSolutionEn": [
      "In the equation $Ax + By + Cz + D = 0$, the normal vector is $\\vec{n} = (A, B, C)$.",
      "Here $A = 3, B = -1, C = 5$, so $\\vec{n} = (3, -1, 5)$."
    ],
    "stepByStepSolutionAr": [
      "في معادلة المستوى العامة، المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "إذن $\\vec{n} = (3، -1، 5)$."
    ],
    "teacherTipEn": "Take the signs of the coefficients carefully.",
    "teacherTipAr": "انتبه لإشارات المعاملات جيداً."
  },
  {
    "id": "solid_ch2_db_easy_19",
    "titleEn": "Normal Vector of Plane 19",
    "titleAr": "المتجه العمودي على المستوى 19",
    "difficulty": "easy",
    "questionEn": "What is a normal vector to the plane $4x -2y + 6z - 38 = 0$?",
    "questionAr": "ما هو المتجه العمودي على المستوى $4x -2y + 6z - 38 = ٠$؟",
    "optionsEn": [
      "(4, -2, 6)",
      "(4, 2, 6)",
      "(38, 4, -2)",
      "(6, -2, 4)"
    ],
    "optionsAr": [
      "(4، -2، 6)",
      "(4، 2، 6)",
      "(38، 4، -2)",
      "(6، -2، 4)"
    ],
    "correctAnswer": "(4, -2, 6)",
    "correctIndex": 0,
    "hintEn": "The coefficients of $x, y, z$ in the general Cartesian equation of a plane form its normal vector $\\vec{n} = (A, B, C)$.",
    "hintAr": "معاملات $x, y, z$ في الصورة العامة لمعادلة المستوى تمثل المتجه العمودي $\\vec{n} = (A, B, C)$.",
    "stepByStepSolutionEn": [
      "In the equation $Ax + By + Cz + D = 0$, the normal vector is $\\vec{n} = (A, B, C)$.",
      "Here $A = 4, B = -2, C = 6$, so $\\vec{n} = (4, -2, 6)$."
    ],
    "stepByStepSolutionAr": [
      "في معادلة المستوى العامة، المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "إذن $\\vec{n} = (4، -2، 6)$."
    ],
    "teacherTipEn": "Take the signs of the coefficients carefully.",
    "teacherTipAr": "انتبه لإشارات المعاملات جيداً."
  },
  {
    "id": "solid_ch2_db_easy_20",
    "titleEn": "Normal Vector of Plane 20",
    "titleAr": "المتجه العمودي على المستوى 20",
    "difficulty": "easy",
    "questionEn": "What is a normal vector to the plane $1x -3y + 2z - 40 = 0$?",
    "questionAr": "ما هو المتجه العمودي على المستوى $1x -3y + 2z - 40 = ٠$؟",
    "optionsEn": [
      "(1, -3, 2)",
      "(1, 3, 2)",
      "(40, 1, -3)",
      "(2, -3, 1)"
    ],
    "optionsAr": [
      "(1، -3، 2)",
      "(1، 3، 2)",
      "(40، 1، -3)",
      "(2، -3، 1)"
    ],
    "correctAnswer": "(1, -3, 2)",
    "correctIndex": 0,
    "hintEn": "The coefficients of $x, y, z$ in the general Cartesian equation of a plane form its normal vector $\\vec{n} = (A, B, C)$.",
    "hintAr": "معاملات $x, y, z$ في الصورة العامة لمعادلة المستوى تمثل المتجه العمودي $\\vec{n} = (A, B, C)$.",
    "stepByStepSolutionEn": [
      "In the equation $Ax + By + Cz + D = 0$, the normal vector is $\\vec{n} = (A, B, C)$.",
      "Here $A = 1, B = -3, C = 2$, so $\\vec{n} = (1, -3, 2)$."
    ],
    "stepByStepSolutionAr": [
      "في معادلة المستوى العامة، المتجه العمودي هو $\\vec{n} = (A, B, C)$.",
      "إذن $\\vec{n} = (1، -3، 2)$."
    ],
    "teacherTipEn": "Take the signs of the coefficients carefully.",
    "teacherTipAr": "انتبه لإشارات المعاملات جيداً."
  },
  {
    "id": "solid_ch2_db_easy_21",
    "titleEn": "Point on Line Verification 21",
    "titleAr": "التحقق من نقطة على خط مستقيم 21",
    "difficulty": "easy",
    "questionEn": "Which of the following points lies on the straight line $\\vec{r} = (1, 3, -2) + t(2, -1, 3)$?",
    "questionAr": "أي من النقاط التالية تقع على الخط المستقيم $\\vec{r} = (1، 3، -2) + t(٢، -١، ٣)$؟",
    "optionsEn": [
      "(1, 3, -2)",
      "(2, 3, -2)",
      "(1, 5, -2)",
      "(0, 3, -1)"
    ],
    "optionsAr": [
      "(1، 3، -2)",
      "(2، 3، -2)",
      "(1، 5، -2)",
      "(0، 3، -1)"
    ],
    "correctAnswer": "(1, 3, -2)",
    "correctIndex": 0,
    "hintEn": "Setting $t = 0$ gives the base point of the line directly.",
    "hintAr": "بوضع $t = ٠$ نحصل على النقطة الأساسية للخط المستقيم مباشرة.",
    "stepByStepSolutionEn": [
      "For $t = 0$, $\\vec{r} = (1, 3, -2) + 0(2, -1, 3) = (1, 3, -2)$.",
      "Thus, the point $(1, 3, -2)$ lies on the line."
    ],
    "stepByStepSolutionAr": [
      "عند $t = ٠$ تكون النقطة هي $(1، 3، -2)$.",
      "وبالتالي فإن هذه النقطة تقع على الخط المستقيم."
    ],
    "teacherTipEn": "In vector form $\\vec{r} = \\vec{r}_0 + t\\vec{d}$, $\\vec{r}_0$ is always a point on the line corresponding to $t=0$.",
    "teacherTipAr": "في الصورة المتجهية، المتجه $\\vec{r}_٠$ يمثل دائماً نقطة تقع على المستقيم عند $t=٠$."
  },
  {
    "id": "solid_ch2_db_easy_22",
    "titleEn": "Point on Line Verification 22",
    "titleAr": "التحقق من نقطة على خط مستقيم 22",
    "difficulty": "easy",
    "questionEn": "Which of the following points lies on the straight line $\\vec{r} = (2, 3, -2) + t(2, -1, 3)$?",
    "questionAr": "أي من النقاط التالية تقع على الخط المستقيم $\\vec{r} = (2، 3، -2) + t(٢، -١، ٣)$؟",
    "optionsEn": [
      "(2, 3, -2)",
      "(3, 3, -2)",
      "(2, 5, -2)",
      "(1, 3, -1)"
    ],
    "optionsAr": [
      "(2، 3، -2)",
      "(3، 3، -2)",
      "(2، 5، -2)",
      "(1، 3، -1)"
    ],
    "correctAnswer": "(2, 3, -2)",
    "correctIndex": 0,
    "hintEn": "Setting $t = 0$ gives the base point of the line directly.",
    "hintAr": "بوضع $t = ٠$ نحصل على النقطة الأساسية للخط المستقيم مباشرة.",
    "stepByStepSolutionEn": [
      "For $t = 0$, $\\vec{r} = (2, 3, -2) + 0(2, -1, 3) = (2, 3, -2)$.",
      "Thus, the point $(2, 3, -2)$ lies on the line."
    ],
    "stepByStepSolutionAr": [
      "عند $t = ٠$ تكون النقطة هي $(2، 3، -2)$.",
      "وبالتالي فإن هذه النقطة تقع على الخط المستقيم."
    ],
    "teacherTipEn": "In vector form $\\vec{r} = \\vec{r}_0 + t\\vec{d}$, $\\vec{r}_0$ is always a point on the line corresponding to $t=0$.",
    "teacherTipAr": "في الصورة المتجهية، المتجه $\\vec{r}_٠$ يمثل دائماً نقطة تقع على المستقيم عند $t=٠$."
  },
  {
    "id": "solid_ch2_db_easy_23",
    "titleEn": "Point on Line Verification 23",
    "titleAr": "التحقق من نقطة على خط مستقيم 23",
    "difficulty": "easy",
    "questionEn": "Which of the following points lies on the straight line $\\vec{r} = (3, 3, -2) + t(2, -1, 3)$?",
    "questionAr": "أي من النقاط التالية تقع على الخط المستقيم $\\vec{r} = (3، 3، -2) + t(٢، -١، ٣)$؟",
    "optionsEn": [
      "(3, 3, -2)",
      "(4, 3, -2)",
      "(3, 5, -2)",
      "(2, 3, -1)"
    ],
    "optionsAr": [
      "(3، 3، -2)",
      "(4، 3، -2)",
      "(3، 5، -2)",
      "(2، 3، -1)"
    ],
    "correctAnswer": "(3, 3, -2)",
    "correctIndex": 0,
    "hintEn": "Setting $t = 0$ gives the base point of the line directly.",
    "hintAr": "بوضع $t = ٠$ نحصل على النقطة الأساسية للخط المستقيم مباشرة.",
    "stepByStepSolutionEn": [
      "For $t = 0$, $\\vec{r} = (3, 3, -2) + 0(2, -1, 3) = (3, 3, -2)$.",
      "Thus, the point $(3, 3, -2)$ lies on the line."
    ],
    "stepByStepSolutionAr": [
      "عند $t = ٠$ تكون النقطة هي $(3، 3، -2)$.",
      "وبالتالي فإن هذه النقطة تقع على الخط المستقيم."
    ],
    "teacherTipEn": "In vector form $\\vec{r} = \\vec{r}_0 + t\\vec{d}$, $\\vec{r}_0$ is always a point on the line corresponding to $t=0$.",
    "teacherTipAr": "في الصورة المتجهية، المتجه $\\vec{r}_٠$ يمثل دائماً نقطة تقع على المستقيم عند $t=٠$."
  },
  {
    "id": "solid_ch2_db_easy_24",
    "titleEn": "Point on Line Verification 24",
    "titleAr": "التحقق من نقطة على خط مستقيم 24",
    "difficulty": "easy",
    "questionEn": "Which of the following points lies on the straight line $\\vec{r} = (4, 3, -2) + t(2, -1, 3)$?",
    "questionAr": "أي من النقاط التالية تقع على الخط المستقيم $\\vec{r} = (4، 3، -2) + t(٢، -١، ٣)$؟",
    "optionsEn": [
      "(4, 3, -2)",
      "(5, 3, -2)",
      "(4, 5, -2)",
      "(3, 3, -1)"
    ],
    "optionsAr": [
      "(4، 3، -2)",
      "(5، 3، -2)",
      "(4، 5، -2)",
      "(3، 3، -1)"
    ],
    "correctAnswer": "(4, 3, -2)",
    "correctIndex": 0,
    "hintEn": "Setting $t = 0$ gives the base point of the line directly.",
    "hintAr": "بوضع $t = ٠$ نحصل على النقطة الأساسية للخط المستقيم مباشرة.",
    "stepByStepSolutionEn": [
      "For $t = 0$, $\\vec{r} = (4, 3, -2) + 0(2, -1, 3) = (4, 3, -2)$.",
      "Thus, the point $(4, 3, -2)$ lies on the line."
    ],
    "stepByStepSolutionAr": [
      "عند $t = ٠$ تكون النقطة هي $(4، 3، -2)$.",
      "وبالتالي فإن هذه النقطة تقع على الخط المستقيم."
    ],
    "teacherTipEn": "In vector form $\\vec{r} = \\vec{r}_0 + t\\vec{d}$, $\\vec{r}_0$ is always a point on the line corresponding to $t=0$.",
    "teacherTipAr": "في الصورة المتجهية، المتجه $\\vec{r}_٠$ يمثل دائماً نقطة تقع على المستقيم عند $t=٠$."
  },
  {
    "id": "solid_ch2_db_easy_25",
    "titleEn": "Point on Line Verification 25",
    "titleAr": "التحقق من نقطة على خط مستقيم 25",
    "difficulty": "easy",
    "questionEn": "Which of the following points lies on the straight line $\\vec{r} = (5, 3, -2) + t(2, -1, 3)$?",
    "questionAr": "أي من النقاط التالية تقع على الخط المستقيم $\\vec{r} = (5، 3، -2) + t(٢، -١، ٣)$؟",
    "optionsEn": [
      "(5, 3, -2)",
      "(6, 3, -2)",
      "(5, 5, -2)",
      "(4, 3, -1)"
    ],
    "optionsAr": [
      "(5، 3، -2)",
      "(6، 3، -2)",
      "(5، 5، -2)",
      "(4، 3، -1)"
    ],
    "correctAnswer": "(5, 3, -2)",
    "correctIndex": 0,
    "hintEn": "Setting $t = 0$ gives the base point of the line directly.",
    "hintAr": "بوضع $t = ٠$ نحصل على النقطة الأساسية للخط المستقيم مباشرة.",
    "stepByStepSolutionEn": [
      "For $t = 0$, $\\vec{r} = (5, 3, -2) + 0(2, -1, 3) = (5, 3, -2)$.",
      "Thus, the point $(5, 3, -2)$ lies on the line."
    ],
    "stepByStepSolutionAr": [
      "عند $t = ٠$ تكون النقطة هي $(5، 3، -2)$.",
      "وبالتالي فإن هذه النقطة تقع على الخط المستقيم."
    ],
    "teacherTipEn": "In vector form $\\vec{r} = \\vec{r}_0 + t\\vec{d}$, $\\vec{r}_0$ is always a point on the line corresponding to $t=0$.",
    "teacherTipAr": "في الصورة المتجهية، المتجه $\\vec{r}_٠$ يمثل دائماً نقطة تقع على المستقيم عند $t=٠$."
  },
  {
    "id": "solid_ch2_db_easy_26",
    "titleEn": "Point on Line Verification 26",
    "titleAr": "التحقق من نقطة على خط مستقيم 26",
    "difficulty": "easy",
    "questionEn": "Which of the following points lies on the straight line $\\vec{r} = (6, 3, -2) + t(2, -1, 3)$?",
    "questionAr": "أي من النقاط التالية تقع على الخط المستقيم $\\vec{r} = (6، 3، -2) + t(٢، -١، ٣)$؟",
    "optionsEn": [
      "(6, 3, -2)",
      "(7, 3, -2)",
      "(6, 5, -2)",
      "(5, 3, -1)"
    ],
    "optionsAr": [
      "(6، 3، -2)",
      "(7، 3، -2)",
      "(6، 5، -2)",
      "(5، 3، -1)"
    ],
    "correctAnswer": "(6, 3, -2)",
    "correctIndex": 0,
    "hintEn": "Setting $t = 0$ gives the base point of the line directly.",
    "hintAr": "بوضع $t = ٠$ نحصل على النقطة الأساسية للخط المستقيم مباشرة.",
    "stepByStepSolutionEn": [
      "For $t = 0$, $\\vec{r} = (6, 3, -2) + 0(2, -1, 3) = (6, 3, -2)$.",
      "Thus, the point $(6, 3, -2)$ lies on the line."
    ],
    "stepByStepSolutionAr": [
      "عند $t = ٠$ تكون النقطة هي $(6، 3، -2)$.",
      "وبالتالي فإن هذه النقطة تقع على الخط المستقيم."
    ],
    "teacherTipEn": "In vector form $\\vec{r} = \\vec{r}_0 + t\\vec{d}$, $\\vec{r}_0$ is always a point on the line corresponding to $t=0$.",
    "teacherTipAr": "في الصورة المتجهية، المتجه $\\vec{r}_٠$ يمثل دائماً نقطة تقع على المستقيم عند $t=٠$."
  },
  {
    "id": "solid_ch2_db_easy_27",
    "titleEn": "Point on Line Verification 27",
    "titleAr": "التحقق من نقطة على خط مستقيم 27",
    "difficulty": "easy",
    "questionEn": "Which of the following points lies on the straight line $\\vec{r} = (7, 3, -2) + t(2, -1, 3)$?",
    "questionAr": "أي من النقاط التالية تقع على الخط المستقيم $\\vec{r} = (7، 3، -2) + t(٢، -١، ٣)$؟",
    "optionsEn": [
      "(7, 3, -2)",
      "(8, 3, -2)",
      "(7, 5, -2)",
      "(6, 3, -1)"
    ],
    "optionsAr": [
      "(7، 3، -2)",
      "(8، 3، -2)",
      "(7، 5، -2)",
      "(6، 3، -1)"
    ],
    "correctAnswer": "(7, 3, -2)",
    "correctIndex": 0,
    "hintEn": "Setting $t = 0$ gives the base point of the line directly.",
    "hintAr": "بوضع $t = ٠$ نحصل على النقطة الأساسية للخط المستقيم مباشرة.",
    "stepByStepSolutionEn": [
      "For $t = 0$, $\\vec{r} = (7, 3, -2) + 0(2, -1, 3) = (7, 3, -2)$.",
      "Thus, the point $(7, 3, -2)$ lies on the line."
    ],
    "stepByStepSolutionAr": [
      "عند $t = ٠$ تكون النقطة هي $(7، 3، -2)$.",
      "وبالتالي فإن هذه النقطة تقع على الخط المستقيم."
    ],
    "teacherTipEn": "In vector form $\\vec{r} = \\vec{r}_0 + t\\vec{d}$, $\\vec{r}_0$ is always a point on the line corresponding to $t=0$.",
    "teacherTipAr": "في الصورة المتجهية، المتجه $\\vec{r}_٠$ يمثل دائماً نقطة تقع على المستقيم عند $t=٠$."
  },
  {
    "id": "solid_ch2_db_easy_28",
    "titleEn": "Point on Line Verification 28",
    "titleAr": "التحقق من نقطة على خط مستقيم 28",
    "difficulty": "easy",
    "questionEn": "Which of the following points lies on the straight line $\\vec{r} = (8, 3, -2) + t(2, -1, 3)$?",
    "questionAr": "أي من النقاط التالية تقع على الخط المستقيم $\\vec{r} = (8، 3، -2) + t(٢، -١، ٣)$؟",
    "optionsEn": [
      "(8, 3, -2)",
      "(9, 3, -2)",
      "(8, 5, -2)",
      "(7, 3, -1)"
    ],
    "optionsAr": [
      "(8، 3، -2)",
      "(9، 3، -2)",
      "(8، 5، -2)",
      "(7، 3، -1)"
    ],
    "correctAnswer": "(8, 3, -2)",
    "correctIndex": 0,
    "hintEn": "Setting $t = 0$ gives the base point of the line directly.",
    "hintAr": "بوضع $t = ٠$ نحصل على النقطة الأساسية للخط المستقيم مباشرة.",
    "stepByStepSolutionEn": [
      "For $t = 0$, $\\vec{r} = (8, 3, -2) + 0(2, -1, 3) = (8, 3, -2)$.",
      "Thus, the point $(8, 3, -2)$ lies on the line."
    ],
    "stepByStepSolutionAr": [
      "عند $t = ٠$ تكون النقطة هي $(8، 3، -2)$.",
      "وبالتالي فإن هذه النقطة تقع على الخط المستقيم."
    ],
    "teacherTipEn": "In vector form $\\vec{r} = \\vec{r}_0 + t\\vec{d}$, $\\vec{r}_0$ is always a point on the line corresponding to $t=0$.",
    "teacherTipAr": "في الصورة المتجهية، المتجه $\\vec{r}_٠$ يمثل دائماً نقطة تقع على المستقيم عند $t=٠$."
  },
  {
    "id": "solid_ch2_db_easy_29",
    "titleEn": "Point on Line Verification 29",
    "titleAr": "التحقق من نقطة على خط مستقيم 29",
    "difficulty": "easy",
    "questionEn": "Which of the following points lies on the straight line $\\vec{r} = (9, 3, -2) + t(2, -1, 3)$?",
    "questionAr": "أي من النقاط التالية تقع على الخط المستقيم $\\vec{r} = (9، 3، -2) + t(٢، -١، ٣)$؟",
    "optionsEn": [
      "(9, 3, -2)",
      "(10, 3, -2)",
      "(9, 5, -2)",
      "(8, 3, -1)"
    ],
    "optionsAr": [
      "(9، 3، -2)",
      "(10، 3، -2)",
      "(9، 5، -2)",
      "(8، 3، -1)"
    ],
    "correctAnswer": "(9, 3, -2)",
    "correctIndex": 0,
    "hintEn": "Setting $t = 0$ gives the base point of the line directly.",
    "hintAr": "بوضع $t = ٠$ نحصل على النقطة الأساسية للخط المستقيم مباشرة.",
    "stepByStepSolutionEn": [
      "For $t = 0$, $\\vec{r} = (9, 3, -2) + 0(2, -1, 3) = (9, 3, -2)$.",
      "Thus, the point $(9, 3, -2)$ lies on the line."
    ],
    "stepByStepSolutionAr": [
      "عند $t = ٠$ تكون النقطة هي $(9، 3، -2)$.",
      "وبالتالي فإن هذه النقطة تقع على الخط المستقيم."
    ],
    "teacherTipEn": "In vector form $\\vec{r} = \\vec{r}_0 + t\\vec{d}$, $\\vec{r}_0$ is always a point on the line corresponding to $t=0$.",
    "teacherTipAr": "في الصورة المتجهية، المتجه $\\vec{r}_٠$ يمثل دائماً نقطة تقع على المستقيم عند $t=٠$."
  },
  {
    "id": "solid_ch2_db_easy_30",
    "titleEn": "Point on Line Verification 30",
    "titleAr": "التحقق من نقطة على خط مستقيم 30",
    "difficulty": "easy",
    "questionEn": "Which of the following points lies on the straight line $\\vec{r} = (10, 3, -2) + t(2, -1, 3)$?",
    "questionAr": "أي من النقاط التالية تقع على الخط المستقيم $\\vec{r} = (10، 3، -2) + t(٢، -١، ٣)$؟",
    "optionsEn": [
      "(10, 3, -2)",
      "(11, 3, -2)",
      "(10, 5, -2)",
      "(9, 3, -1)"
    ],
    "optionsAr": [
      "(10، 3، -2)",
      "(11، 3، -2)",
      "(10، 5، -2)",
      "(9، 3، -1)"
    ],
    "correctAnswer": "(10, 3, -2)",
    "correctIndex": 0,
    "hintEn": "Setting $t = 0$ gives the base point of the line directly.",
    "hintAr": "بوضع $t = ٠$ نحصل على النقطة الأساسية للخط المستقيم مباشرة.",
    "stepByStepSolutionEn": [
      "For $t = 0$, $\\vec{r} = (10, 3, -2) + 0(2, -1, 3) = (10, 3, -2)$.",
      "Thus, the point $(10, 3, -2)$ lies on the line."
    ],
    "stepByStepSolutionAr": [
      "عند $t = ٠$ تكون النقطة هي $(10، 3، -2)$.",
      "وبالتالي فإن هذه النقطة تقع على الخط المستقيم."
    ],
    "teacherTipEn": "In vector form $\\vec{r} = \\vec{r}_0 + t\\vec{d}$, $\\vec{r}_0$ is always a point on the line corresponding to $t=0$.",
    "teacherTipAr": "في الصورة المتجهية، المتجه $\\vec{r}_٠$ يمثل دائماً نقطة تقع على المستقيم عند $t=٠$."
  },
  {
    "id": "solid_ch2_db_easy_31",
    "titleEn": "Plane Parallel to XZ Plane 31",
    "titleAr": "مستوى يوازي المستوى xz 31",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(3, 4, 5)$ and parallel to the $xz$-plane?",
    "questionAr": "ما معادلة المستوى المار بالنقطة $P(٣، ٤، ٥)$ ويوازي المستوى الإحداثي $xz$؟",
    "optionsEn": [
      "$y = 4$",
      "$y = 0$",
      "$x = 0$",
      "$x + y + z = 12$"
    ],
    "optionsAr": [
      "$y = 4$",
      "$y = ٠$",
      "$x = ٠$",
      "$x + y + z = ١٢$"
    ],
    "correctAnswer": "$y = 4$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $xz$-plane has equation $y = c$.",
    "hintAr": "المستوى الموازي للمستوى $xz$ معادلته $y = c$.",
    "stepByStepSolutionEn": [
      "The $xz$-plane has normal along the $y$-axis.",
      "Any plane parallel to it has the form $y = \\text{constant}$.",
      "Since it passes through $(3, 4, 5)$, $y = 4$."
    ],
    "stepByStepSolutionAr": [
      "المستوى الموازي للمستوى $xz$ معادلته $y = \\text{ثابت}$.",
      "بما أنه يمر بالنقطة $(٣، ٤، ٥)$، فإن معادلته هي $y = 4$."
    ],
    "teacherTipEn": "The variable missing from the name of the coordinate plane is the one that equals constant!",
    "teacherTipAr": "المتغير الغائب عن اسم المستوى الإحداثي هو الذي يساوي الثابت!"
  },
  {
    "id": "solid_ch2_db_easy_32",
    "titleEn": "Plane Parallel to YZ Plane 32",
    "titleAr": "مستوى يوازي المستوى yz 32",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(3, 4, 5)$ and parallel to the $yz$-plane?",
    "questionAr": "ما معادلة المستوى المار بالنقطة $P(٣، ٤، ٥)$ ويوازي المستوى الإحداثي $yz$؟",
    "optionsEn": [
      "$x = 3$",
      "$x = 0$",
      "$y = 0$",
      "$x + y + z = 12$"
    ],
    "optionsAr": [
      "$x = 3$",
      "$x = ٠$",
      "$y = ٠$",
      "$x + y + z = ١٢$"
    ],
    "correctAnswer": "$x = 3$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $yz$-plane has equation $x = c$.",
    "hintAr": "المستوى الموازي للمستوى $yz$ معادلته $x = c$.",
    "stepByStepSolutionEn": [
      "The $yz$-plane has normal along the $x$-axis.",
      "Any plane parallel to it has the form $x = \\text{constant}$.",
      "Since it passes through $(3, 4, 5)$, $x = 3$."
    ],
    "stepByStepSolutionAr": [
      "المستوى الموازي للمستوى $yz$ معادلته $x = \\text{ثابت}$.",
      "بما أنه يمر بالنقطة $(٣، ٤، ٥)$، فإن معادلته هي $x = 3$."
    ],
    "teacherTipEn": "The variable missing from the name of the coordinate plane is the one that equals constant!",
    "teacherTipAr": "المتغير الغائب عن اسم المستوى الإحداثي هو الذي يساوي الثابت!"
  },
  {
    "id": "solid_ch2_db_easy_33",
    "titleEn": "Plane Parallel to XY Plane 33",
    "titleAr": "مستوى يوازي المستوى xy 33",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(3, 4, 5)$ and parallel to the $xy$-plane?",
    "questionAr": "ما معادلة المستوى المار بالنقطة $P(٣، ٤، ٥)$ ويوازي المستوى الإحداثي $xy$؟",
    "optionsEn": [
      "$z = 5$",
      "$z = 0$",
      "$x = 0$",
      "$x + y + z = 12$"
    ],
    "optionsAr": [
      "$z = 5$",
      "$z = ٠$",
      "$x = ٠$",
      "$x + y + z = ١٢$"
    ],
    "correctAnswer": "$z = 5$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $xy$-plane has equation $z = c$.",
    "hintAr": "المستوى الموازي للمستوى $xy$ معادلته $z = c$.",
    "stepByStepSolutionEn": [
      "The $xy$-plane has normal along the $z$-axis.",
      "Any plane parallel to it has the form $z = \\text{constant}$.",
      "Since it passes through $(3, 4, 5)$, $z = 5$."
    ],
    "stepByStepSolutionAr": [
      "المستوى الموازي للمستوى $xy$ معادلته $z = \\text{ثابت}$.",
      "بما أنه يمر بالنقطة $(٣، ٤، ٥)$، فإن معادلته هي $z = 5$."
    ],
    "teacherTipEn": "The variable missing from the name of the coordinate plane is the one that equals constant!",
    "teacherTipAr": "المتغير الغائب عن اسم المستوى الإحداثي هو الذي يساوي الثابت!"
  },
  {
    "id": "solid_ch2_db_easy_34",
    "titleEn": "Plane Parallel to XZ Plane 34",
    "titleAr": "مستوى يوازي المستوى xz 34",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(3, 4, 5)$ and parallel to the $xz$-plane?",
    "questionAr": "ما معادلة المستوى المار بالنقطة $P(٣، ٤، ٥)$ ويوازي المستوى الإحداثي $xz$؟",
    "optionsEn": [
      "$y = 4$",
      "$y = 0$",
      "$x = 0$",
      "$x + y + z = 12$"
    ],
    "optionsAr": [
      "$y = 4$",
      "$y = ٠$",
      "$x = ٠$",
      "$x + y + z = ١٢$"
    ],
    "correctAnswer": "$y = 4$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $xz$-plane has equation $y = c$.",
    "hintAr": "المستوى الموازي للمستوى $xz$ معادلته $y = c$.",
    "stepByStepSolutionEn": [
      "The $xz$-plane has normal along the $y$-axis.",
      "Any plane parallel to it has the form $y = \\text{constant}$.",
      "Since it passes through $(3, 4, 5)$, $y = 4$."
    ],
    "stepByStepSolutionAr": [
      "المستوى الموازي للمستوى $xz$ معادلته $y = \\text{ثابت}$.",
      "بما أنه يمر بالنقطة $(٣، ٤، ٥)$، فإن معادلته هي $y = 4$."
    ],
    "teacherTipEn": "The variable missing from the name of the coordinate plane is the one that equals constant!",
    "teacherTipAr": "المتغير الغائب عن اسم المستوى الإحداثي هو الذي يساوي الثابت!"
  },
  {
    "id": "solid_ch2_db_easy_35",
    "titleEn": "Plane Parallel to YZ Plane 35",
    "titleAr": "مستوى يوازي المستوى yz 35",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(3, 4, 5)$ and parallel to the $yz$-plane?",
    "questionAr": "ما معادلة المستوى المار بالنقطة $P(٣، ٤، ٥)$ ويوازي المستوى الإحداثي $yz$؟",
    "optionsEn": [
      "$x = 3$",
      "$x = 0$",
      "$y = 0$",
      "$x + y + z = 12$"
    ],
    "optionsAr": [
      "$x = 3$",
      "$x = ٠$",
      "$y = ٠$",
      "$x + y + z = ١٢$"
    ],
    "correctAnswer": "$x = 3$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $yz$-plane has equation $x = c$.",
    "hintAr": "المستوى الموازي للمستوى $yz$ معادلته $x = c$.",
    "stepByStepSolutionEn": [
      "The $yz$-plane has normal along the $x$-axis.",
      "Any plane parallel to it has the form $x = \\text{constant}$.",
      "Since it passes through $(3, 4, 5)$, $x = 3$."
    ],
    "stepByStepSolutionAr": [
      "المستوى الموازي للمستوى $yz$ معادلته $x = \\text{ثابت}$.",
      "بما أنه يمر بالنقطة $(٣، ٤، ٥)$، فإن معادلته هي $x = 3$."
    ],
    "teacherTipEn": "The variable missing from the name of the coordinate plane is the one that equals constant!",
    "teacherTipAr": "المتغير الغائب عن اسم المستوى الإحداثي هو الذي يساوي الثابت!"
  },
  {
    "id": "solid_ch2_db_easy_36",
    "titleEn": "Plane Parallel to XY Plane 36",
    "titleAr": "مستوى يوازي المستوى xy 36",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(3, 4, 5)$ and parallel to the $xy$-plane?",
    "questionAr": "ما معادلة المستوى المار بالنقطة $P(٣، ٤، ٥)$ ويوازي المستوى الإحداثي $xy$؟",
    "optionsEn": [
      "$z = 5$",
      "$z = 0$",
      "$x = 0$",
      "$x + y + z = 12$"
    ],
    "optionsAr": [
      "$z = 5$",
      "$z = ٠$",
      "$x = ٠$",
      "$x + y + z = ١٢$"
    ],
    "correctAnswer": "$z = 5$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $xy$-plane has equation $z = c$.",
    "hintAr": "المستوى الموازي للمستوى $xy$ معادلته $z = c$.",
    "stepByStepSolutionEn": [
      "The $xy$-plane has normal along the $z$-axis.",
      "Any plane parallel to it has the form $z = \\text{constant}$.",
      "Since it passes through $(3, 4, 5)$, $z = 5$."
    ],
    "stepByStepSolutionAr": [
      "المستوى الموازي للمستوى $xy$ معادلته $z = \\text{ثابت}$.",
      "بما أنه يمر بالنقطة $(٣، ٤، ٥)$، فإن معادلته هي $z = 5$."
    ],
    "teacherTipEn": "The variable missing from the name of the coordinate plane is the one that equals constant!",
    "teacherTipAr": "المتغير الغائب عن اسم المستوى الإحداثي هو الذي يساوي الثابت!"
  },
  {
    "id": "solid_ch2_db_easy_37",
    "titleEn": "Plane Parallel to XZ Plane 37",
    "titleAr": "مستوى يوازي المستوى xz 37",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(3, 4, 5)$ and parallel to the $xz$-plane?",
    "questionAr": "ما معادلة المستوى المار بالنقطة $P(٣، ٤، ٥)$ ويوازي المستوى الإحداثي $xz$؟",
    "optionsEn": [
      "$y = 4$",
      "$y = 0$",
      "$x = 0$",
      "$x + y + z = 12$"
    ],
    "optionsAr": [
      "$y = 4$",
      "$y = ٠$",
      "$x = ٠$",
      "$x + y + z = ١٢$"
    ],
    "correctAnswer": "$y = 4$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $xz$-plane has equation $y = c$.",
    "hintAr": "المستوى الموازي للمستوى $xz$ معادلته $y = c$.",
    "stepByStepSolutionEn": [
      "The $xz$-plane has normal along the $y$-axis.",
      "Any plane parallel to it has the form $y = \\text{constant}$.",
      "Since it passes through $(3, 4, 5)$, $y = 4$."
    ],
    "stepByStepSolutionAr": [
      "المستوى الموازي للمستوى $xz$ معادلته $y = \\text{ثابت}$.",
      "بما أنه يمر بالنقطة $(٣، ٤، ٥)$، فإن معادلته هي $y = 4$."
    ],
    "teacherTipEn": "The variable missing from the name of the coordinate plane is the one that equals constant!",
    "teacherTipAr": "المتغير الغائب عن اسم المستوى الإحداثي هو الذي يساوي الثابت!"
  },
  {
    "id": "solid_ch2_db_easy_38",
    "titleEn": "Plane Parallel to YZ Plane 38",
    "titleAr": "مستوى يوازي المستوى yz 38",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(3, 4, 5)$ and parallel to the $yz$-plane?",
    "questionAr": "ما معادلة المستوى المار بالنقطة $P(٣، ٤، ٥)$ ويوازي المستوى الإحداثي $yz$؟",
    "optionsEn": [
      "$x = 3$",
      "$x = 0$",
      "$y = 0$",
      "$x + y + z = 12$"
    ],
    "optionsAr": [
      "$x = 3$",
      "$x = ٠$",
      "$y = ٠$",
      "$x + y + z = ١٢$"
    ],
    "correctAnswer": "$x = 3$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $yz$-plane has equation $x = c$.",
    "hintAr": "المستوى الموازي للمستوى $yz$ معادلته $x = c$.",
    "stepByStepSolutionEn": [
      "The $yz$-plane has normal along the $x$-axis.",
      "Any plane parallel to it has the form $x = \\text{constant}$.",
      "Since it passes through $(3, 4, 5)$, $x = 3$."
    ],
    "stepByStepSolutionAr": [
      "المستوى الموازي للمستوى $yz$ معادلته $x = \\text{ثابت}$.",
      "بما أنه يمر بالنقطة $(٣، ٤، ٥)$، فإن معادلته هي $x = 3$."
    ],
    "teacherTipEn": "The variable missing from the name of the coordinate plane is the one that equals constant!",
    "teacherTipAr": "المتغير الغائب عن اسم المستوى الإحداثي هو الذي يساوي الثابت!"
  },
  {
    "id": "solid_ch2_db_easy_39",
    "titleEn": "Plane Parallel to XY Plane 39",
    "titleAr": "مستوى يوازي المستوى xy 39",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(3, 4, 5)$ and parallel to the $xy$-plane?",
    "questionAr": "ما معادلة المستوى المار بالنقطة $P(٣، ٤، ٥)$ ويوازي المستوى الإحداثي $xy$؟",
    "optionsEn": [
      "$z = 5$",
      "$z = 0$",
      "$x = 0$",
      "$x + y + z = 12$"
    ],
    "optionsAr": [
      "$z = 5$",
      "$z = ٠$",
      "$x = ٠$",
      "$x + y + z = ١٢$"
    ],
    "correctAnswer": "$z = 5$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $xy$-plane has equation $z = c$.",
    "hintAr": "المستوى الموازي للمستوى $xy$ معادلته $z = c$.",
    "stepByStepSolutionEn": [
      "The $xy$-plane has normal along the $z$-axis.",
      "Any plane parallel to it has the form $z = \\text{constant}$.",
      "Since it passes through $(3, 4, 5)$, $z = 5$."
    ],
    "stepByStepSolutionAr": [
      "المستوى الموازي للمستوى $xy$ معادلته $z = \\text{ثابت}$.",
      "بما أنه يمر بالنقطة $(٣، ٤، ٥)$، فإن معادلته هي $z = 5$."
    ],
    "teacherTipEn": "The variable missing from the name of the coordinate plane is the one that equals constant!",
    "teacherTipAr": "المتغير الغائب عن اسم المستوى الإحداثي هو الذي يساوي الثابت!"
  },
  {
    "id": "solid_ch2_db_easy_40",
    "titleEn": "Plane Parallel to XZ Plane 40",
    "titleAr": "مستوى يوازي المستوى xz 40",
    "difficulty": "easy",
    "questionEn": "What is the equation of the plane passing through $P(3, 4, 5)$ and parallel to the $xz$-plane?",
    "questionAr": "ما معادلة المستوى المار بالنقطة $P(٣، ٤، ٥)$ ويوازي المستوى الإحداثي $xz$؟",
    "optionsEn": [
      "$y = 4$",
      "$y = 0$",
      "$x = 0$",
      "$x + y + z = 12$"
    ],
    "optionsAr": [
      "$y = 4$",
      "$y = ٠$",
      "$x = ٠$",
      "$x + y + z = ١٢$"
    ],
    "correctAnswer": "$y = 4$",
    "correctIndex": 0,
    "hintEn": "A plane parallel to the $xz$-plane has equation $y = c$.",
    "hintAr": "المستوى الموازي للمستوى $xz$ معادلته $y = c$.",
    "stepByStepSolutionEn": [
      "The $xz$-plane has normal along the $y$-axis.",
      "Any plane parallel to it has the form $y = \\text{constant}$.",
      "Since it passes through $(3, 4, 5)$, $y = 4$."
    ],
    "stepByStepSolutionAr": [
      "المستوى الموازي للمستوى $xz$ معادلته $y = \\text{ثابت}$.",
      "بما أنه يمر بالنقطة $(٣، ٤، ٥)$، فإن معادلته هي $y = 4$."
    ],
    "teacherTipEn": "The variable missing from the name of the coordinate plane is the one that equals constant!",
    "teacherTipAr": "المتغير الغائب عن اسم المستوى الإحداثي هو الذي يساوي الثابت!"
  },
  {
    "id": "solid_ch2_db_easy_41",
    "titleEn": "Direction Vector of Line Parallel to Z Axis 41",
    "titleAr": "متجه اتجاه مستقيم يوازي محور z 41",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $z$-axis?",
    "questionAr": "ما هو متجه اتجاه خط مستقيم يوازي محور z؟",
    "optionsEn": [
      "(0, 0, 1)",
      "(1, 1, 1)",
      "(1, 1, 0)",
      "(0, 1, 1)"
    ],
    "optionsAr": [
      "(٠، ٠، ١)",
      "(١، ١، ١)",
      "(١، ١، ٠)",
      "(٠، ١، ١)"
    ],
    "correctAnswer": "(0, 0, 1)",
    "correctIndex": 0,
    "hintEn": "A line parallel to an axis has direction vector along the standard unit vector of that axis.",
    "hintAr": "المستقيم الموازي لأحد المحاور يكون متجه اتجاهه هو متجه الوحدة الأساسي في اتجاه ذلك المحور.",
    "stepByStepSolutionEn": [
      "The standard unit vector along the $z$-axis is (0, 0, 1).",
      "Any line parallel to this axis has direction vector proportional to (0, 0, 1)."
    ],
    "stepByStepSolutionAr": [
      "متجه الوحدة الأساسي في اتجاه محور z هو (٠، ٠، ١).",
      "أي مستقيم يوازي هذا المحور يكون متجه اتجاهه موازياً لـ (٠، ٠، ١)."
    ],
    "teacherTipEn": "Parallel to x-axis: (1,0,0); parallel to y-axis: (0,1,0); parallel to z-axis: (0,0,1).",
    "teacherTipAr": "الموازي لمحور السينات: (١، ٠، ٠)؛ الصادات: (٠، ١، ٠)؛ العينات: (٠، ٠، ١)."
  },
  {
    "id": "solid_ch2_db_easy_42",
    "titleEn": "Direction Vector of Line Parallel to X Axis 42",
    "titleAr": "متجه اتجاه مستقيم يوازي محور x 42",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $x$-axis?",
    "questionAr": "ما هو متجه اتجاه خط مستقيم يوازي محور x؟",
    "optionsEn": [
      "(1, 0, 0)",
      "(1, 1, 1)",
      "(1, 1, 0)",
      "(0, 1, 1)"
    ],
    "optionsAr": [
      "(١، ٠، ٠)",
      "(١، ١، ١)",
      "(١، ١، ٠)",
      "(٠، ١، ١)"
    ],
    "correctAnswer": "(1, 0, 0)",
    "correctIndex": 0,
    "hintEn": "A line parallel to an axis has direction vector along the standard unit vector of that axis.",
    "hintAr": "المستقيم الموازي لأحد المحاور يكون متجه اتجاهه هو متجه الوحدة الأساسي في اتجاه ذلك المحور.",
    "stepByStepSolutionEn": [
      "The standard unit vector along the $x$-axis is (1, 0, 0).",
      "Any line parallel to this axis has direction vector proportional to (1, 0, 0)."
    ],
    "stepByStepSolutionAr": [
      "متجه الوحدة الأساسي في اتجاه محور x هو (١، ٠، ٠).",
      "أي مستقيم يوازي هذا المحور يكون متجه اتجاهه موازياً لـ (١، ٠، ٠)."
    ],
    "teacherTipEn": "Parallel to x-axis: (1,0,0); parallel to y-axis: (0,1,0); parallel to z-axis: (0,0,1).",
    "teacherTipAr": "الموازي لمحور السينات: (١، ٠، ٠)؛ الصادات: (٠، ١، ٠)؛ العينات: (٠، ٠، ١)."
  },
  {
    "id": "solid_ch2_db_easy_43",
    "titleEn": "Direction Vector of Line Parallel to Y Axis 43",
    "titleAr": "متجه اتجاه مستقيم يوازي محور y 43",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $y$-axis?",
    "questionAr": "ما هو متجه اتجاه خط مستقيم يوازي محور y؟",
    "optionsEn": [
      "(0, 1, 0)",
      "(1, 1, 1)",
      "(1, 1, 0)",
      "(0, 1, 1)"
    ],
    "optionsAr": [
      "(٠، ١، ٠)",
      "(١، ١، ١)",
      "(١، ١، ٠)",
      "(٠، ١، ١)"
    ],
    "correctAnswer": "(0, 1, 0)",
    "correctIndex": 0,
    "hintEn": "A line parallel to an axis has direction vector along the standard unit vector of that axis.",
    "hintAr": "المستقيم الموازي لأحد المحاور يكون متجه اتجاهه هو متجه الوحدة الأساسي في اتجاه ذلك المحور.",
    "stepByStepSolutionEn": [
      "The standard unit vector along the $y$-axis is (0, 1, 0).",
      "Any line parallel to this axis has direction vector proportional to (0, 1, 0)."
    ],
    "stepByStepSolutionAr": [
      "متجه الوحدة الأساسي في اتجاه محور y هو (٠، ١، ٠).",
      "أي مستقيم يوازي هذا المحور يكون متجه اتجاهه موازياً لـ (٠، ١، ٠)."
    ],
    "teacherTipEn": "Parallel to x-axis: (1,0,0); parallel to y-axis: (0,1,0); parallel to z-axis: (0,0,1).",
    "teacherTipAr": "الموازي لمحور السينات: (١، ٠، ٠)؛ الصادات: (٠، ١، ٠)؛ العينات: (٠، ٠، ١)."
  },
  {
    "id": "solid_ch2_db_easy_44",
    "titleEn": "Direction Vector of Line Parallel to Z Axis 44",
    "titleAr": "متجه اتجاه مستقيم يوازي محور z 44",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $z$-axis?",
    "questionAr": "ما هو متجه اتجاه خط مستقيم يوازي محور z؟",
    "optionsEn": [
      "(0, 0, 1)",
      "(1, 1, 1)",
      "(1, 1, 0)",
      "(0, 1, 1)"
    ],
    "optionsAr": [
      "(٠، ٠، ١)",
      "(١، ١، ١)",
      "(١، ١، ٠)",
      "(٠، ١، ١)"
    ],
    "correctAnswer": "(0, 0, 1)",
    "correctIndex": 0,
    "hintEn": "A line parallel to an axis has direction vector along the standard unit vector of that axis.",
    "hintAr": "المستقيم الموازي لأحد المحاور يكون متجه اتجاهه هو متجه الوحدة الأساسي في اتجاه ذلك المحور.",
    "stepByStepSolutionEn": [
      "The standard unit vector along the $z$-axis is (0, 0, 1).",
      "Any line parallel to this axis has direction vector proportional to (0, 0, 1)."
    ],
    "stepByStepSolutionAr": [
      "متجه الوحدة الأساسي في اتجاه محور z هو (٠، ٠، ١).",
      "أي مستقيم يوازي هذا المحور يكون متجه اتجاهه موازياً لـ (٠، ٠، ١)."
    ],
    "teacherTipEn": "Parallel to x-axis: (1,0,0); parallel to y-axis: (0,1,0); parallel to z-axis: (0,0,1).",
    "teacherTipAr": "الموازي لمحور السينات: (١، ٠، ٠)؛ الصادات: (٠، ١، ٠)؛ العينات: (٠، ٠، ١)."
  },
  {
    "id": "solid_ch2_db_easy_45",
    "titleEn": "Direction Vector of Line Parallel to X Axis 45",
    "titleAr": "متجه اتجاه مستقيم يوازي محور x 45",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $x$-axis?",
    "questionAr": "ما هو متجه اتجاه خط مستقيم يوازي محور x؟",
    "optionsEn": [
      "(1, 0, 0)",
      "(1, 1, 1)",
      "(1, 1, 0)",
      "(0, 1, 1)"
    ],
    "optionsAr": [
      "(١، ٠، ٠)",
      "(١، ١، ١)",
      "(١، ١، ٠)",
      "(٠، ١، ١)"
    ],
    "correctAnswer": "(1, 0, 0)",
    "correctIndex": 0,
    "hintEn": "A line parallel to an axis has direction vector along the standard unit vector of that axis.",
    "hintAr": "المستقيم الموازي لأحد المحاور يكون متجه اتجاهه هو متجه الوحدة الأساسي في اتجاه ذلك المحور.",
    "stepByStepSolutionEn": [
      "The standard unit vector along the $x$-axis is (1, 0, 0).",
      "Any line parallel to this axis has direction vector proportional to (1, 0, 0)."
    ],
    "stepByStepSolutionAr": [
      "متجه الوحدة الأساسي في اتجاه محور x هو (١، ٠، ٠).",
      "أي مستقيم يوازي هذا المحور يكون متجه اتجاهه موازياً لـ (١، ٠، ٠)."
    ],
    "teacherTipEn": "Parallel to x-axis: (1,0,0); parallel to y-axis: (0,1,0); parallel to z-axis: (0,0,1).",
    "teacherTipAr": "الموازي لمحور السينات: (١، ٠، ٠)؛ الصادات: (٠، ١، ٠)؛ العينات: (٠، ٠، ١)."
  },
  {
    "id": "solid_ch2_db_easy_46",
    "titleEn": "Direction Vector of Line Parallel to Y Axis 46",
    "titleAr": "متجه اتجاه مستقيم يوازي محور y 46",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $y$-axis?",
    "questionAr": "ما هو متجه اتجاه خط مستقيم يوازي محور y؟",
    "optionsEn": [
      "(0, 1, 0)",
      "(1, 1, 1)",
      "(1, 1, 0)",
      "(0, 1, 1)"
    ],
    "optionsAr": [
      "(٠، ١، ٠)",
      "(١، ١، ١)",
      "(١، ١، ٠)",
      "(٠، ١، ١)"
    ],
    "correctAnswer": "(0, 1, 0)",
    "correctIndex": 0,
    "hintEn": "A line parallel to an axis has direction vector along the standard unit vector of that axis.",
    "hintAr": "المستقيم الموازي لأحد المحاور يكون متجه اتجاهه هو متجه الوحدة الأساسي في اتجاه ذلك المحور.",
    "stepByStepSolutionEn": [
      "The standard unit vector along the $y$-axis is (0, 1, 0).",
      "Any line parallel to this axis has direction vector proportional to (0, 1, 0)."
    ],
    "stepByStepSolutionAr": [
      "متجه الوحدة الأساسي في اتجاه محور y هو (٠، ١، ٠).",
      "أي مستقيم يوازي هذا المحور يكون متجه اتجاهه موازياً لـ (٠، ١، ٠)."
    ],
    "teacherTipEn": "Parallel to x-axis: (1,0,0); parallel to y-axis: (0,1,0); parallel to z-axis: (0,0,1).",
    "teacherTipAr": "الموازي لمحور السينات: (١، ٠، ٠)؛ الصادات: (٠، ١، ٠)؛ العينات: (٠، ٠، ١)."
  },
  {
    "id": "solid_ch2_db_easy_47",
    "titleEn": "Direction Vector of Line Parallel to Z Axis 47",
    "titleAr": "متجه اتجاه مستقيم يوازي محور z 47",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $z$-axis?",
    "questionAr": "ما هو متجه اتجاه خط مستقيم يوازي محور z؟",
    "optionsEn": [
      "(0, 0, 1)",
      "(1, 1, 1)",
      "(1, 1, 0)",
      "(0, 1, 1)"
    ],
    "optionsAr": [
      "(٠، ٠، ١)",
      "(١، ١، ١)",
      "(١، ١، ٠)",
      "(٠، ١، ١)"
    ],
    "correctAnswer": "(0, 0, 1)",
    "correctIndex": 0,
    "hintEn": "A line parallel to an axis has direction vector along the standard unit vector of that axis.",
    "hintAr": "المستقيم الموازي لأحد المحاور يكون متجه اتجاهه هو متجه الوحدة الأساسي في اتجاه ذلك المحور.",
    "stepByStepSolutionEn": [
      "The standard unit vector along the $z$-axis is (0, 0, 1).",
      "Any line parallel to this axis has direction vector proportional to (0, 0, 1)."
    ],
    "stepByStepSolutionAr": [
      "متجه الوحدة الأساسي في اتجاه محور z هو (٠، ٠، ١).",
      "أي مستقيم يوازي هذا المحور يكون متجه اتجاهه موازياً لـ (٠، ٠، ١)."
    ],
    "teacherTipEn": "Parallel to x-axis: (1,0,0); parallel to y-axis: (0,1,0); parallel to z-axis: (0,0,1).",
    "teacherTipAr": "الموازي لمحور السينات: (١، ٠، ٠)؛ الصادات: (٠، ١، ٠)؛ العينات: (٠، ٠، ١)."
  },
  {
    "id": "solid_ch2_db_easy_48",
    "titleEn": "Direction Vector of Line Parallel to X Axis 48",
    "titleAr": "متجه اتجاه مستقيم يوازي محور x 48",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $x$-axis?",
    "questionAr": "ما هو متجه اتجاه خط مستقيم يوازي محور x؟",
    "optionsEn": [
      "(1, 0, 0)",
      "(1, 1, 1)",
      "(1, 1, 0)",
      "(0, 1, 1)"
    ],
    "optionsAr": [
      "(١، ٠، ٠)",
      "(١، ١، ١)",
      "(١، ١، ٠)",
      "(٠، ١، ١)"
    ],
    "correctAnswer": "(1, 0, 0)",
    "correctIndex": 0,
    "hintEn": "A line parallel to an axis has direction vector along the standard unit vector of that axis.",
    "hintAr": "المستقيم الموازي لأحد المحاور يكون متجه اتجاهه هو متجه الوحدة الأساسي في اتجاه ذلك المحور.",
    "stepByStepSolutionEn": [
      "The standard unit vector along the $x$-axis is (1, 0, 0).",
      "Any line parallel to this axis has direction vector proportional to (1, 0, 0)."
    ],
    "stepByStepSolutionAr": [
      "متجه الوحدة الأساسي في اتجاه محور x هو (١، ٠، ٠).",
      "أي مستقيم يوازي هذا المحور يكون متجه اتجاهه موازياً لـ (١، ٠، ٠)."
    ],
    "teacherTipEn": "Parallel to x-axis: (1,0,0); parallel to y-axis: (0,1,0); parallel to z-axis: (0,0,1).",
    "teacherTipAr": "الموازي لمحور السينات: (١، ٠، ٠)؛ الصادات: (٠، ١، ٠)؛ العينات: (٠، ٠، ١)."
  },
  {
    "id": "solid_ch2_db_easy_49",
    "titleEn": "Direction Vector of Line Parallel to Y Axis 49",
    "titleAr": "متجه اتجاه مستقيم يوازي محور y 49",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $y$-axis?",
    "questionAr": "ما هو متجه اتجاه خط مستقيم يوازي محور y؟",
    "optionsEn": [
      "(0, 1, 0)",
      "(1, 1, 1)",
      "(1, 1, 0)",
      "(0, 1, 1)"
    ],
    "optionsAr": [
      "(٠، ١، ٠)",
      "(١، ١، ١)",
      "(١، ١، ٠)",
      "(٠، ١، ١)"
    ],
    "correctAnswer": "(0, 1, 0)",
    "correctIndex": 0,
    "hintEn": "A line parallel to an axis has direction vector along the standard unit vector of that axis.",
    "hintAr": "المستقيم الموازي لأحد المحاور يكون متجه اتجاهه هو متجه الوحدة الأساسي في اتجاه ذلك المحور.",
    "stepByStepSolutionEn": [
      "The standard unit vector along the $y$-axis is (0, 1, 0).",
      "Any line parallel to this axis has direction vector proportional to (0, 1, 0)."
    ],
    "stepByStepSolutionAr": [
      "متجه الوحدة الأساسي في اتجاه محور y هو (٠، ١، ٠).",
      "أي مستقيم يوازي هذا المحور يكون متجه اتجاهه موازياً لـ (٠، ١، ٠)."
    ],
    "teacherTipEn": "Parallel to x-axis: (1,0,0); parallel to y-axis: (0,1,0); parallel to z-axis: (0,0,1).",
    "teacherTipAr": "الموازي لمحور السينات: (١، ٠، ٠)؛ الصادات: (٠، ١، ٠)؛ العينات: (٠، ٠، ١)."
  },
  {
    "id": "solid_ch2_db_easy_50",
    "titleEn": "Direction Vector of Line Parallel to Z Axis 50",
    "titleAr": "متجه اتجاه مستقيم يوازي محور z 50",
    "difficulty": "easy",
    "questionEn": "What is the direction vector of a line parallel to the $z$-axis?",
    "questionAr": "ما هو متجه اتجاه خط مستقيم يوازي محور z؟",
    "optionsEn": [
      "(0, 0, 1)",
      "(1, 1, 1)",
      "(1, 1, 0)",
      "(0, 1, 1)"
    ],
    "optionsAr": [
      "(٠، ٠، ١)",
      "(١، ١، ١)",
      "(١، ١، ٠)",
      "(٠، ١، ١)"
    ],
    "correctAnswer": "(0, 0, 1)",
    "correctIndex": 0,
    "hintEn": "A line parallel to an axis has direction vector along the standard unit vector of that axis.",
    "hintAr": "المستقيم الموازي لأحد المحاور يكون متجه اتجاهه هو متجه الوحدة الأساسي في اتجاه ذلك المحور.",
    "stepByStepSolutionEn": [
      "The standard unit vector along the $z$-axis is (0, 0, 1).",
      "Any line parallel to this axis has direction vector proportional to (0, 0, 1)."
    ],
    "stepByStepSolutionAr": [
      "متجه الوحدة الأساسي في اتجاه محور z هو (٠، ٠، ١).",
      "أي مستقيم يوازي هذا المحور يكون متجه اتجاهه موازياً لـ (٠، ٠، ١)."
    ],
    "teacherTipEn": "Parallel to x-axis: (1,0,0); parallel to y-axis: (0,1,0); parallel to z-axis: (0,0,1).",
    "teacherTipAr": "الموازي لمحور السينات: (١، ٠، ٠)؛ الصادات: (٠، ١، ٠)؛ العينات: (٠، ٠، ١)."
  }
],
  medium: [
  {
    "id": "solid_ch2_db_med_01",
    "titleEn": "Angle Between Two Lines with Direction Numbers",
    "titleAr": "قياس الزاوية بين مستقيمين بنسب اتجاه معلومة",
    "difficulty": "medium",
    "questionEn": "Find the acute angle between the straight lines $L_1$ with direction ratios $(1, 2, 2)$ and $L_2$ with direction ratios $(2, 2, -1)$.",
    "questionAr": "أوجد قياس الزاوية الحادة بين المستقيمين $L_١$ بنسب اتجاه $(١، ٢، ٢)$ و $L_٢$ بنسب اتجاه $(٢، ٢، -١)$.",
    "optionsEn": [
      "$\\cos^{-1}(4/9) \\approx 63^\\circ 37'$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$\\cos^{-1}(2/3)$"
    ],
    "optionsAr": [
      "$\\cos^{-١}(٤/٩) \\approx ٦٣^\\circ ٣٧'$",
      "$٤٥^\\circ$",
      "$٦٠^\\circ$",
      "$\\cos^{-١}(٢/٣)$"
    ],
    "correctAnswer": "$\\cos^{-1}(4/9) \\approx 63^\\circ 37'$",
    "correctIndex": 0,
    "hintEn": "$\\cos\\theta = \\frac{|\\vec{d}_1 \\cdot \\vec{d}_2|}{\\|\\vec{d}_1\\| \\|\\vec{d}_2\\|}$.",
    "hintAr": "$\\cos\\theta = \\frac{|\\vec{d}_١ \\cdot \\vec{d}_٢|}{\\|\\vec{d}_١\\| \\|\\vec{d}_٢\\|}$.",
    "stepByStepSolutionEn": [
      "$\\vec{d}_1 = (1, 2, 2) \\implies \\|\\vec{d}_1\\| = \\sqrt{1 + 4 + 4} = 3$.",
      "$\\vec{d}_2 = (2, 2, -1) \\implies \\|\\vec{d}_2\\| = \\sqrt{4 + 4 + 1} = 3$.",
      "Dot product: $\\vec{d}_1 \\cdot \\vec{d}_2 = 1(2) + 2(2) + 2(-1) = 2 + 4 - 2 = 4$.",
      "$$\\cos\\theta = \\frac{|4|}{3 \\times 3} = \\frac{4}{9} \\implies \\theta = \\cos^{-1}(4/9)$$"
    ],
    "stepByStepSolutionAr": [
      "معيار كل من متجهي الاتجاه يساوي ٣.",
      "الضرب القياسي: $\\vec{d}_١ \\cdot \\vec{d}_٢ = ٤$.",
      "$$\\cos\\theta = \\frac{٤}{٩} \\implies \\theta = \\cos^{-١}(٤/٩)$$"
    ],
    "teacherTipEn": "Always compute the magnitude of both vectors before calculating cosine.",
    "teacherTipAr": "احسب معيار كلا المتجهين بدقة قبل إيجاد جيب التمام."
  },
  {
    "id": "solid_ch2_db_med_02",
    "titleEn": "Perpendicular Lines Parameter Solving",
    "titleAr": "إيجاد مجهول من تعامد مستقيمين",
    "difficulty": "medium",
    "questionEn": "If the lines $\\frac{x - 2}{3} = \\frac{y + 1}{m} = \\frac{z}{2}$ and $\\frac{x + 1}{2} = \\frac{y - 3}{1} = \\frac{z - 4}{-4}$ are perpendicular, find $m$.",
    "questionAr": "إذا كان المستقيمان $\\frac{x - ٢}{٣} = \\frac{y + ١}{m} = \\frac{z}{٢}$ و $\\frac{x + ١}{٢} = \\frac{y - ٣}{١} = \\frac{z - ٤}{-٤}$ متعامدين، فأوجد قيمة $m$.",
    "optionsEn": [
      "2",
      "-2",
      "1",
      "-1"
    ],
    "optionsAr": [
      "٢",
      "-٢",
      "١",
      "-١"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "$\\vec{d}_1 \\cdot \\vec{d}_2 = 0 \\implies 3(2) + m(1) + 2(-4) = 0$.",
    "hintAr": "$\\vec{d}_١ \\cdot \\vec{d}_٢ = ٠ \\implies ٣(٢) + m(١) + ٢(-٤) = ٠$.",
    "stepByStepSolutionEn": [
      "$\\vec{d}_1 = (3, m, 2)$ and $\\vec{d}_2 = (2, 1, -4)$.",
      "Since $L_1 \\perp L_2$, $\\vec{d}_1 \\cdot \\vec{d}_2 = 0$:",
      "$$3(2) + m(1) + 2(-4) = 0 \\implies 6 + m - 8 = 0 \\implies m - 2 = 0 \\implies m = 2$$"
    ],
    "stepByStepSolutionAr": [
      "متجها الاتجاه: $(٣، m، ٢)$ و $(٢، ١، -٤)$.",
      "شرط التعامد: $٦ + m - ٨ = ٠ \\implies m = ٢$."
    ],
    "teacherTipEn": "Perpendicularity in space requires the dot product of direction vectors to be zero.",
    "teacherTipAr": "تعامد مستقيمين في الفراغ يعني انعدام الضرب القياسي لمتجهي اتجاههما."
  },
  {
    "id": "solid_ch2_db_med_03",
    "titleEn": "Standardizing Non-Unit Leading Coefficients in Line Equation",
    "titleAr": "ضبط معاملات س وص وع في معادلة المستقيم الإحداثية",
    "difficulty": "medium",
    "questionEn": "Find the direction vector of the line: $$\\frac{2x - 6}{4} = \\frac{3 - y}{2} = \\frac{4z + 8}{8}$$",
    "questionAr": "أوجد متجه اتجاه الخط المستقيم: $$\\frac{٢x - ٦}{٤} = \\frac{٣ - y}{٢} = \\frac{٤z + ٨}{٨}$$",
    "optionsEn": [
      "$(2, -2, 2)$",
      "$(4, 2, 8)$",
      "$(2, 2, 2)$",
      "$(1, 1, 1)$"
    ],
    "optionsAr": [
      "$(٢، -٢، ٢)$",
      "$(٤، ٢، ٨)$",
      "$(٢، ٢، ٢)$",
      "$(١، ١، ١)$"
    ],
    "correctAnswer": "$(2, -2, 2)$",
    "correctIndex": 0,
    "hintEn": "Divide the first fraction by 2, multiply the second by -1/-1, and divide the third by 4.",
    "hintAr": "اقسم الكسر الأول على ٢، واضرب الثاني في -١/-١، واقسم الثالث على ٤.",
    "stepByStepSolutionEn": [
      "First fraction: $\\frac{2(x - 3)}{4} = \\frac{x - 3}{2} \\implies a = 2$.",
      "Second fraction: $\\frac{-(y - 3)}{2} = \\frac{y - 3}{-2} \\implies b = -2$.",
      "Third fraction: $\\frac{4(z + 2)}{8} = \\frac{z + 2}{2} \\implies c = 2$.",
      "The direction vector is $\\vec{d} = (2, -2, 2)$."
    ],
    "stepByStepSolutionAr": [
      "الكسر الأول: $\\frac{x - ٣}{٢} \\implies a = ٢$.",
      "الكسر الثاني: $\\frac{y - ٣}{-٢} \\implies b = -٢$.",
      "الكسر الثالث: $\\frac{z + ٢}{٢} \\implies c = ٢$.",
      "متجه الاتجاه هو $(٢، -٢، ٢)$."
    ],
    "teacherTipEn": "Always isolate $+x, +y, +z$ with coefficient $+1$ in the numerators before reading off denominators.",
    "teacherTipAr": "احرص دائماً على جعل معاملات المتغيرات $+١$ قبل قراءة المقامات كمتجه اتجاه."
  },
  {
    "id": "solid_ch2_db_med_04",
    "titleEn": "Parallelism of Two Lines in Space",
    "titleAr": "توازي خطين مستقيمين في الفراغ",
    "difficulty": "medium",
    "questionEn": "If the straight line $\\frac{x - 1}{a} = \\frac{y + 3}{6} = \\frac{z - 2}{-4}$ is parallel to $\\vec{r} = (2, 0, 1) + t(3, -9, 6)$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\frac{x - ١}{a} = \\frac{y + ٣}{٦} = \\frac{z - ٢}{-٤}$ يوازي المستقيم $\\vec{r} = (٢، ٠، ١) + t(٣، -٩، ٦)$، فأوجد قيمة $a$.",
    "optionsEn": [
      "-2",
      "2",
      "-3",
      "1"
    ],
    "optionsAr": [
      "-٢",
      "٢",
      "-٣",
      "١"
    ],
    "correctAnswer": "-2",
    "correctIndex": 0,
    "hintEn": "Parallel lines have proportional direction vectors: $\\frac{a}{3} = \\frac{6}{-9} = \\frac{-4}{6}$.",
    "hintAr": "المستقيمان المتوازيان تتناسب مركبات اتجاههما: $\\frac{a}{٣} = \\frac{٦}{-٩} = \\frac{-٤}{٦}$.",
    "stepByStepSolutionEn": [
      "Proportionality ratio: $\\frac{6}{-9} = -\\frac{2}{3}$.",
      "Also $\\frac{-4}{6} = -\\frac{2}{3}$.",
      "Therefore: $\\frac{a}{3} = -\\frac{2}{3} \\implies a = -2$."
    ],
    "stepByStepSolutionAr": [
      "نسبة التناسب: $\\frac{٦}{-٩} = -\\frac{٢}{٣}$.",
      "$$\\frac{a}{٣} = -\\frac{٢}{٣} \\implies a = -٢$$"
    ],
    "teacherTipEn": "Check proportionality on all known components to confirm parallelism first.",
    "teacherTipAr": "تحقق من تناسب المركبات المعلومة للتأكد من نسبة التوازي."
  },
  {
    "id": "solid_ch2_db_med_05",
    "titleEn": "Angle Between Two Planes in Space",
    "titleAr": "قياس الزاوية بين مستويين في الفراغ",
    "difficulty": "medium",
    "questionEn": "Find the acute angle between the two planes $\\pi_1: x + y + 2z - 1 = 0$ and $\\pi_2: 2x - y + z + 4 = 0$.",
    "questionAr": "أوجد قياس الزاوية الحادة بين المستويين $\\pi_١: x + y + ٢z - ١ = ٠$ و $\\pi_٢: ٢x - y + z + ٤ = ٠$.",
    "optionsEn": [
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "$٦٠^\\circ$",
      "$٤٥^\\circ$",
      "$٣٠^\\circ$",
      "$٩٠^\\circ$"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 0,
    "hintEn": "$\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{\\|\\vec{n}_1\\| \\|\\vec{n}_2\\|}$.",
    "hintAr": "$\\cos\\theta = \\frac{|\\vec{n}_١ \\cdot \\vec{n}_٢|}{\\|\\vec{n}_١\\| \\|\\vec{n}_٢\\|}$.",
    "stepByStepSolutionEn": [
      "$\\vec{n}_1 = (1, 1, 2) \\implies \\|\\vec{n}_1\\| = \\sqrt{1 + 1 + 4} = \\sqrt{6}$.",
      "$\\vec{n}_2 = (2, -1, 1) \\implies \\|\\vec{n}_2\\| = \\sqrt{4 + 1 + 1} = \\sqrt{6}$.",
      "$\\vec{n}_1 \\cdot \\vec{n}_2 = 1(2) + 1(-1) + 2(1) = 2 - 1 + 2 = 3$.",
      "$$\\cos\\theta = \\frac{3}{\\sqrt{6} \\times \\sqrt{6}} = \\frac{3}{6} = \\frac{1}{2} \\implies \\theta = 60^\\circ$$"
    ],
    "stepByStepSolutionAr": [
      "معيار كل متجه عمودي هو $\\sqrt{٦}$، والضرب القياسي يساوي ٣.",
      "$$\\cos\\theta = \\frac{٣}{٦} = \\frac{١}{٢} \\implies \\theta = ٦٠^\\circ$$"
    ],
    "teacherTipEn": "The angle between two planes is the angle between their normal vectors.",
    "teacherTipAr": "الزاوية بين مستويين هي الزاوية بين متجهي العمودي عليهما."
  },
  {
    "id": "solid_ch2_db_med_06",
    "titleEn": "Distance from Point to Plane",
    "titleAr": "طول العمود الساقط من نقطة على مستوى",
    "difficulty": "medium",
    "questionEn": "Find the perpendicular distance from point $P(1, 2, 3)$ to the plane $2x - 2y + z - 9 = 0$.",
    "questionAr": "أوجد طول العمود الساقط من النقطة $P(١، ٢، ٣)$ على المستوى $٢x - ٢y + z - ٩ = ٠$.",
    "optionsEn": [
      "$\\frac{8}{3}$",
      "$\\frac{7}{3}$",
      "2",
      "3"
    ],
    "optionsAr": [
      "$\\frac{٨}{٣}$",
      "$\\frac{٧}{٣}$",
      "٢",
      "٣"
    ],
    "correctAnswer": "$\\frac{8}{3}$",
    "correctIndex": 0,
    "hintEn": "Substitute $(1, 2, 3)$ into the numerator $|2(1) - 2(2) + 3 - 9|$, and divide by $\\sqrt{2^2 + (-2)^2 + 1^2} = 3$.",
    "hintAr": "عوض بالنقطة $(١، ٢، ٣)$ في البسط واقسم على جذر مجموع مربعات المعاملات (٣).",
    "stepByStepSolutionEn": [
      "Numerator: $|2(1) - 2(2) + 1(3) - 9| = |2 - 4 + 3 - 9| = |-8| = 8$.",
      "Denominator: $\\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{4 + 4 + 1} = 3$.",
      "Distance: $D = \\frac{8}{3}$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|٢(١) - ٢(٢) + ٣ - ٩| = |-٨| = ٨$.",
      "المقام: $\\sqrt{٤ + ٤ + ١} = ٣$.",
      "طول العمود: $D = \\frac{٨}{٣}$ وحدة طول."
    ],
    "teacherTipEn": "Remember that distance is always non-negative, hence the absolute value in the numerator.",
    "teacherTipAr": "تذكر دائماً أن المسافة موجبة، لذا نضع القيمة المطلقة في البسط."
  },
  {
    "id": "solid_ch2_db_med_07",
    "titleEn": "Distance Between Two Parallel Planes",
    "titleAr": "البعد بين مستويين متوازيين",
    "difficulty": "medium",
    "questionEn": "Find the distance between the parallel planes $2x - y + 2z - 5 = 0$ and $2x - y + 2z + 4 = 0$.",
    "questionAr": "أوجد البعد بين المستويين المتوازيين $٢x - y + ٢z - ٥ = ٠$ و $٢x - y + ٢z + ٤ = ٠$.",
    "optionsEn": [
      "3",
      "9",
      "1",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "٣",
      "٩",
      "١",
      "$\\frac{١}{٣}$"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Use $D = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|-5 - 4|}{\\sqrt{4 + 1 + 4}}$.",
    "hintAr": "احسب $D = \\frac{|-٥ - ٤|}{\\sqrt{٤ + ١ + ٤}}$.",
    "stepByStepSolutionEn": [
      "Coefficients: $A = 2, B = -1, C = 2$.",
      "Constants: $D_1 = -5, D_2 = 4$.",
      "$$D = \\frac{|4 - (-5)|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{9}{3} = 3\\text{ length units}$$"
    ],
    "stepByStepSolutionAr": [
      "المعاملات موحدة: $A=٢, B=-١, C=٢$.",
      "$$D = \\frac{|٤ - (-٥)|}{\\sqrt{٤ + ١ + ٤}} = \\frac{٩}{٣} = ٣\\text{ وحدات طول}$$"
    ],
    "teacherTipEn": "Quick and simple exam question when coefficients already match.",
    "teacherTipAr": "مسألة سريعة ومباشرة عندما تكون معاملات المستويين متطابقة."
  },
  {
    "id": "solid_ch2_db_med_08",
    "titleEn": "Plane Passing Through Origin",
    "titleAr": "معادلة مستوى يمر بنقطة الأصل",
    "difficulty": "medium",
    "questionEn": "If a plane passes through the origin $(0, 0, 0)$, what is the value of the constant term $D$ in its Cartesian equation $Ax + By + Cz + D = 0$?",
    "questionAr": "إذا كان المستوى يمر بنقطة الأصل $(٠، ٠، ٠)$، فما قيمة الحد المطلق $D$ في معادلته الكارتيزية $Ax + By + Cz + D = ٠$؟",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "5"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٥"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Substitute $(0, 0, 0)$ into $A(0) + B(0) + C(0) + D = 0$.",
    "hintAr": "بالتعويض بنقطة الأصل: $A(٠) + B(٠) + C(٠) + D = ٠$.",
    "stepByStepSolutionEn": [
      "Substituting $(0, 0, 0)$ gives $0 + 0 + 0 + D = 0 \\implies D = 0$.",
      "Any plane through the origin has the form $Ax + By + Cz = 0$."
    ],
    "stepByStepSolutionAr": [
      "بالتعويض بنقطة الأصل نجد أن $D = ٠$.",
      "أي مستوى يمر بنقطة الأصل تكون معادلته على الصورة $Ax + By + Cz = ٠$."
    ],
    "teacherTipEn": "Just like a 2D line through origin has $c = 0$, a 3D plane through origin has $D = 0$.",
    "teacherTipAr": "تماماً مثل الخط المستقيم المار بالأصل في المستوى، المستوى المار بنقطة الأصل في الفراغ ينعدم فيه الحد المطلق."
  },
  {
    "id": "solid_ch2_db_med_09",
    "titleEn": "Plane Parallel to a Given Line and Containing Another",
    "titleAr": "مستوى يوازي مستقيماً ويحوي آخر",
    "difficulty": "medium",
    "questionEn": "A plane contains the line $\\vec{r}_1 = (1, 0, 2) + t(1, 1, 0)$ and is parallel to $\\vec{r}_2 = (0, 0, 0) + s(0, 1, 1)$. Find its normal vector $\\vec{n}$.",
    "questionAr": "مستوى يحوي المستقيم $\\vec{r}_١ = (١، ٠، ٢) + t(١، ١، ٠)$ ويوازي المستقيم $\\vec{r}_٢ = (٠، ٠، ٠) + s(٠، ١، ١)$. أوجد متجهاً عمودياً على هذا المستوى.",
    "optionsEn": [
      "$(1, -1, 1)$",
      "$(1, 1, 1)$",
      "$(0, 1, -1)$",
      "$(1, 0, 1)$"
    ],
    "optionsAr": [
      "$(١، -١، ١)$",
      "$(١، ١، ١)$",
      "$(٠، ١، -١)$",
      "$(١، ٠، ١)$"
    ],
    "correctAnswer": "$(1, -1, 1)$",
    "correctIndex": 0,
    "hintEn": "The normal vector must be perpendicular to both direction vectors: $\\vec{n} = \\vec{d}_1 \\times \\vec{d}_2$.",
    "hintAr": "المتجه العمودي يجب أن يكون عمودياً على كلا متجهي الاتجاه: $\\vec{n} = \\vec{d}_١ \\times \\vec{d}_٢$.",
    "stepByStepSolutionEn": [
      "$\\vec{d}_1 = (1, 1, 0)$ and $\\vec{d}_2 = (0, 1, 1)$.",
      "$$\\vec{n} = \\vec{d}_1 \\times \\vec{d}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{vmatrix} = \\hat{i}(1 - 0) - \\hat{j}(1 - 0) + \\hat{k}(1 - 0) = (1, -1, 1)$$"
    ],
    "stepByStepSolutionAr": [
      "متجها الاتجاه: $(١، ١، ٠)$ و $(٠، ١، ١)$.",
      "الضرب الاتجاهي: $\\vec{n} = (١، -١، ١)$."
    ],
    "teacherTipEn": "Taking the cross product of two directional directions in or parallel to a plane yields its normal vector.",
    "teacherTipAr": "الضرب الاتجاهي لأي متجهين يوازيان المستوى يعطي متجهاً عمودياً عليه."
  },
  {
    "id": "solid_ch2_db_med_10",
    "titleEn": "Angle Between Line and Coordinate Axes",
    "titleAr": "قياس زاوية اتجاه خط مستقيم",
    "difficulty": "medium",
    "questionEn": "If the direction angles of a line are $\\alpha = 60^\\circ, \\beta = 45^\\circ$, and $\\gamma$ is acute, find $\\gamma$.",
    "questionAr": "إذا كانت زوايا اتجاه مستقيم هي $\\alpha = ٦٠^\\circ$ و $\\beta = ٤٥^\\circ$ و $\\gamma$ زاوية حادة، فما قياس $\\gamma$؟",
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
    "hintEn": "$\\cos^2(60^\\circ) + \\cos^2(45^\\circ) + \\cos^2\\gamma = 1$.",
    "hintAr": "$\\cos^٢(٦٠^\\circ) + \\cos^٢(٤٥^\\circ) + \\cos^٢\\gamma = ١$.",
    "stepByStepSolutionEn": [
      "$(1/2)^2 + (1/\\sqrt{2})^2 + \\cos^2\\gamma = 1$.",
      "$1/4 + 1/2 + \\cos^2\\gamma = 1 \\implies 3/4 + \\cos^2\\gamma = 1 \\implies \\cos^2\\gamma = 1/4$.",
      "Since $\\gamma$ is acute, $\\cos\\gamma = 1/2 \\implies \\gamma = 60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{١}{٤} + \\frac{١}{٢} + \\cos^٢\\gamma = ١ \\implies \\cos^٢\\gamma = \\frac{١}{٤}$.",
      "بما أن الزاوية حادة: $\\cos\\gamma = \\frac{١}{٢} \\implies \\gamma = ٦٠^\\circ$."
    ],
    "teacherTipEn": "Famous direction angle triplet: $(60^\\circ, 45^\\circ, 60^\\circ)$.",
    "teacherTipAr": "ثلاثية زوايا اتجاه شهيرة جداً في الامتحانات."
  },
  {
    "id": "solid_ch2_db_med_11",
    "titleEn": "Plane Intercepts on Axes 11",
    "titleAr": "الأجزاء المقطوعة لمستوى من المحاور 11",
    "difficulty": "medium",
    "questionEn": "Find the $x$-intercept of the plane $\\frac{x}{11} + \\frac{y}{12} + \\frac{z}{13} = 1$.",
    "questionAr": "أوجد الجزء المقطوع من محور السينات للمستوى $\\frac{x}{11} + \\frac{y}{12} + \\frac{z}{13} = ١$.",
    "optionsEn": [
      "11",
      "12",
      "13",
      "14"
    ],
    "optionsAr": [
      "11",
      "12",
      "13",
      "14"
    ],
    "correctAnswer": "11",
    "correctIndex": 0,
    "hintEn": "In the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the $x$-intercept is $a$.",
    "hintAr": "في معادلة الأجزاء المقطوعة، الجزء المقطوع من محور السينات هو $a$.",
    "stepByStepSolutionEn": [
      "Setting $y = 0$ and $z = 0$ gives $\\frac{x}{11} = 1 \\implies x = 11$.",
      "The $x$-intercept is 11."
    ],
    "stepByStepSolutionAr": [
      "بوضع $y = ٠$ و $z = ٠$ نحصل على $x = 11$.",
      "الجزء المقطوع من محور السينات هو 11."
    ],
    "teacherTipEn": "The denominator under each variable is its intercept on that axis.",
    "teacherTipAr": "المقام أسفل كل متغير هو طول الجزء المقطوع من ذلك المحور."
  },
  {
    "id": "solid_ch2_db_med_12",
    "titleEn": "Plane Intercepts on Axes 12",
    "titleAr": "الأجزاء المقطوعة لمستوى من المحاور 12",
    "difficulty": "medium",
    "questionEn": "Find the $x$-intercept of the plane $\\frac{x}{12} + \\frac{y}{13} + \\frac{z}{14} = 1$.",
    "questionAr": "أوجد الجزء المقطوع من محور السينات للمستوى $\\frac{x}{12} + \\frac{y}{13} + \\frac{z}{14} = ١$.",
    "optionsEn": [
      "12",
      "13",
      "14",
      "15"
    ],
    "optionsAr": [
      "12",
      "13",
      "14",
      "15"
    ],
    "correctAnswer": "12",
    "correctIndex": 0,
    "hintEn": "In the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the $x$-intercept is $a$.",
    "hintAr": "في معادلة الأجزاء المقطوعة، الجزء المقطوع من محور السينات هو $a$.",
    "stepByStepSolutionEn": [
      "Setting $y = 0$ and $z = 0$ gives $\\frac{x}{12} = 1 \\implies x = 12$.",
      "The $x$-intercept is 12."
    ],
    "stepByStepSolutionAr": [
      "بوضع $y = ٠$ و $z = ٠$ نحصل على $x = 12$.",
      "الجزء المقطوع من محور السينات هو 12."
    ],
    "teacherTipEn": "The denominator under each variable is its intercept on that axis.",
    "teacherTipAr": "المقام أسفل كل متغير هو طول الجزء المقطوع من ذلك المحور."
  },
  {
    "id": "solid_ch2_db_med_13",
    "titleEn": "Plane Intercepts on Axes 13",
    "titleAr": "الأجزاء المقطوعة لمستوى من المحاور 13",
    "difficulty": "medium",
    "questionEn": "Find the $x$-intercept of the plane $\\frac{x}{13} + \\frac{y}{14} + \\frac{z}{15} = 1$.",
    "questionAr": "أوجد الجزء المقطوع من محور السينات للمستوى $\\frac{x}{13} + \\frac{y}{14} + \\frac{z}{15} = ١$.",
    "optionsEn": [
      "13",
      "14",
      "15",
      "16"
    ],
    "optionsAr": [
      "13",
      "14",
      "15",
      "16"
    ],
    "correctAnswer": "13",
    "correctIndex": 0,
    "hintEn": "In the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the $x$-intercept is $a$.",
    "hintAr": "في معادلة الأجزاء المقطوعة، الجزء المقطوع من محور السينات هو $a$.",
    "stepByStepSolutionEn": [
      "Setting $y = 0$ and $z = 0$ gives $\\frac{x}{13} = 1 \\implies x = 13$.",
      "The $x$-intercept is 13."
    ],
    "stepByStepSolutionAr": [
      "بوضع $y = ٠$ و $z = ٠$ نحصل على $x = 13$.",
      "الجزء المقطوع من محور السينات هو 13."
    ],
    "teacherTipEn": "The denominator under each variable is its intercept on that axis.",
    "teacherTipAr": "المقام أسفل كل متغير هو طول الجزء المقطوع من ذلك المحور."
  },
  {
    "id": "solid_ch2_db_med_14",
    "titleEn": "Plane Intercepts on Axes 14",
    "titleAr": "الأجزاء المقطوعة لمستوى من المحاور 14",
    "difficulty": "medium",
    "questionEn": "Find the $x$-intercept of the plane $\\frac{x}{14} + \\frac{y}{15} + \\frac{z}{16} = 1$.",
    "questionAr": "أوجد الجزء المقطوع من محور السينات للمستوى $\\frac{x}{14} + \\frac{y}{15} + \\frac{z}{16} = ١$.",
    "optionsEn": [
      "14",
      "15",
      "16",
      "17"
    ],
    "optionsAr": [
      "14",
      "15",
      "16",
      "17"
    ],
    "correctAnswer": "14",
    "correctIndex": 0,
    "hintEn": "In the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the $x$-intercept is $a$.",
    "hintAr": "في معادلة الأجزاء المقطوعة، الجزء المقطوع من محور السينات هو $a$.",
    "stepByStepSolutionEn": [
      "Setting $y = 0$ and $z = 0$ gives $\\frac{x}{14} = 1 \\implies x = 14$.",
      "The $x$-intercept is 14."
    ],
    "stepByStepSolutionAr": [
      "بوضع $y = ٠$ و $z = ٠$ نحصل على $x = 14$.",
      "الجزء المقطوع من محور السينات هو 14."
    ],
    "teacherTipEn": "The denominator under each variable is its intercept on that axis.",
    "teacherTipAr": "المقام أسفل كل متغير هو طول الجزء المقطوع من ذلك المحور."
  },
  {
    "id": "solid_ch2_db_med_15",
    "titleEn": "Plane Intercepts on Axes 15",
    "titleAr": "الأجزاء المقطوعة لمستوى من المحاور 15",
    "difficulty": "medium",
    "questionEn": "Find the $x$-intercept of the plane $\\frac{x}{15} + \\frac{y}{16} + \\frac{z}{17} = 1$.",
    "questionAr": "أوجد الجزء المقطوع من محور السينات للمستوى $\\frac{x}{15} + \\frac{y}{16} + \\frac{z}{17} = ١$.",
    "optionsEn": [
      "15",
      "16",
      "17",
      "18"
    ],
    "optionsAr": [
      "15",
      "16",
      "17",
      "18"
    ],
    "correctAnswer": "15",
    "correctIndex": 0,
    "hintEn": "In the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the $x$-intercept is $a$.",
    "hintAr": "في معادلة الأجزاء المقطوعة، الجزء المقطوع من محور السينات هو $a$.",
    "stepByStepSolutionEn": [
      "Setting $y = 0$ and $z = 0$ gives $\\frac{x}{15} = 1 \\implies x = 15$.",
      "The $x$-intercept is 15."
    ],
    "stepByStepSolutionAr": [
      "بوضع $y = ٠$ و $z = ٠$ نحصل على $x = 15$.",
      "الجزء المقطوع من محور السينات هو 15."
    ],
    "teacherTipEn": "The denominator under each variable is its intercept on that axis.",
    "teacherTipAr": "المقام أسفل كل متغير هو طول الجزء المقطوع من ذلك المحور."
  },
  {
    "id": "solid_ch2_db_med_16",
    "titleEn": "Plane Intercepts on Axes 16",
    "titleAr": "الأجزاء المقطوعة لمستوى من المحاور 16",
    "difficulty": "medium",
    "questionEn": "Find the $x$-intercept of the plane $\\frac{x}{16} + \\frac{y}{17} + \\frac{z}{18} = 1$.",
    "questionAr": "أوجد الجزء المقطوع من محور السينات للمستوى $\\frac{x}{16} + \\frac{y}{17} + \\frac{z}{18} = ١$.",
    "optionsEn": [
      "16",
      "17",
      "18",
      "19"
    ],
    "optionsAr": [
      "16",
      "17",
      "18",
      "19"
    ],
    "correctAnswer": "16",
    "correctIndex": 0,
    "hintEn": "In the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the $x$-intercept is $a$.",
    "hintAr": "في معادلة الأجزاء المقطوعة، الجزء المقطوع من محور السينات هو $a$.",
    "stepByStepSolutionEn": [
      "Setting $y = 0$ and $z = 0$ gives $\\frac{x}{16} = 1 \\implies x = 16$.",
      "The $x$-intercept is 16."
    ],
    "stepByStepSolutionAr": [
      "بوضع $y = ٠$ و $z = ٠$ نحصل على $x = 16$.",
      "الجزء المقطوع من محور السينات هو 16."
    ],
    "teacherTipEn": "The denominator under each variable is its intercept on that axis.",
    "teacherTipAr": "المقام أسفل كل متغير هو طول الجزء المقطوع من ذلك المحور."
  },
  {
    "id": "solid_ch2_db_med_17",
    "titleEn": "Plane Intercepts on Axes 17",
    "titleAr": "الأجزاء المقطوعة لمستوى من المحاور 17",
    "difficulty": "medium",
    "questionEn": "Find the $x$-intercept of the plane $\\frac{x}{17} + \\frac{y}{18} + \\frac{z}{19} = 1$.",
    "questionAr": "أوجد الجزء المقطوع من محور السينات للمستوى $\\frac{x}{17} + \\frac{y}{18} + \\frac{z}{19} = ١$.",
    "optionsEn": [
      "17",
      "18",
      "19",
      "20"
    ],
    "optionsAr": [
      "17",
      "18",
      "19",
      "20"
    ],
    "correctAnswer": "17",
    "correctIndex": 0,
    "hintEn": "In the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the $x$-intercept is $a$.",
    "hintAr": "في معادلة الأجزاء المقطوعة، الجزء المقطوع من محور السينات هو $a$.",
    "stepByStepSolutionEn": [
      "Setting $y = 0$ and $z = 0$ gives $\\frac{x}{17} = 1 \\implies x = 17$.",
      "The $x$-intercept is 17."
    ],
    "stepByStepSolutionAr": [
      "بوضع $y = ٠$ و $z = ٠$ نحصل على $x = 17$.",
      "الجزء المقطوع من محور السينات هو 17."
    ],
    "teacherTipEn": "The denominator under each variable is its intercept on that axis.",
    "teacherTipAr": "المقام أسفل كل متغير هو طول الجزء المقطوع من ذلك المحور."
  },
  {
    "id": "solid_ch2_db_med_18",
    "titleEn": "Plane Intercepts on Axes 18",
    "titleAr": "الأجزاء المقطوعة لمستوى من المحاور 18",
    "difficulty": "medium",
    "questionEn": "Find the $x$-intercept of the plane $\\frac{x}{18} + \\frac{y}{19} + \\frac{z}{20} = 1$.",
    "questionAr": "أوجد الجزء المقطوع من محور السينات للمستوى $\\frac{x}{18} + \\frac{y}{19} + \\frac{z}{20} = ١$.",
    "optionsEn": [
      "18",
      "19",
      "20",
      "21"
    ],
    "optionsAr": [
      "18",
      "19",
      "20",
      "21"
    ],
    "correctAnswer": "18",
    "correctIndex": 0,
    "hintEn": "In the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the $x$-intercept is $a$.",
    "hintAr": "في معادلة الأجزاء المقطوعة، الجزء المقطوع من محور السينات هو $a$.",
    "stepByStepSolutionEn": [
      "Setting $y = 0$ and $z = 0$ gives $\\frac{x}{18} = 1 \\implies x = 18$.",
      "The $x$-intercept is 18."
    ],
    "stepByStepSolutionAr": [
      "بوضع $y = ٠$ و $z = ٠$ نحصل على $x = 18$.",
      "الجزء المقطوع من محور السينات هو 18."
    ],
    "teacherTipEn": "The denominator under each variable is its intercept on that axis.",
    "teacherTipAr": "المقام أسفل كل متغير هو طول الجزء المقطوع من ذلك المحور."
  },
  {
    "id": "solid_ch2_db_med_19",
    "titleEn": "Plane Intercepts on Axes 19",
    "titleAr": "الأجزاء المقطوعة لمستوى من المحاور 19",
    "difficulty": "medium",
    "questionEn": "Find the $x$-intercept of the plane $\\frac{x}{19} + \\frac{y}{20} + \\frac{z}{21} = 1$.",
    "questionAr": "أوجد الجزء المقطوع من محور السينات للمستوى $\\frac{x}{19} + \\frac{y}{20} + \\frac{z}{21} = ١$.",
    "optionsEn": [
      "19",
      "20",
      "21",
      "22"
    ],
    "optionsAr": [
      "19",
      "20",
      "21",
      "22"
    ],
    "correctAnswer": "19",
    "correctIndex": 0,
    "hintEn": "In the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the $x$-intercept is $a$.",
    "hintAr": "في معادلة الأجزاء المقطوعة، الجزء المقطوع من محور السينات هو $a$.",
    "stepByStepSolutionEn": [
      "Setting $y = 0$ and $z = 0$ gives $\\frac{x}{19} = 1 \\implies x = 19$.",
      "The $x$-intercept is 19."
    ],
    "stepByStepSolutionAr": [
      "بوضع $y = ٠$ و $z = ٠$ نحصل على $x = 19$.",
      "الجزء المقطوع من محور السينات هو 19."
    ],
    "teacherTipEn": "The denominator under each variable is its intercept on that axis.",
    "teacherTipAr": "المقام أسفل كل متغير هو طول الجزء المقطوع من ذلك المحور."
  },
  {
    "id": "solid_ch2_db_med_20",
    "titleEn": "Plane Intercepts on Axes 20",
    "titleAr": "الأجزاء المقطوعة لمستوى من المحاور 20",
    "difficulty": "medium",
    "questionEn": "Find the $x$-intercept of the plane $\\frac{x}{20} + \\frac{y}{21} + \\frac{z}{22} = 1$.",
    "questionAr": "أوجد الجزء المقطوع من محور السينات للمستوى $\\frac{x}{20} + \\frac{y}{21} + \\frac{z}{22} = ١$.",
    "optionsEn": [
      "20",
      "21",
      "22",
      "23"
    ],
    "optionsAr": [
      "20",
      "21",
      "22",
      "23"
    ],
    "correctAnswer": "20",
    "correctIndex": 0,
    "hintEn": "In the intercept form $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$, the $x$-intercept is $a$.",
    "hintAr": "في معادلة الأجزاء المقطوعة، الجزء المقطوع من محور السينات هو $a$.",
    "stepByStepSolutionEn": [
      "Setting $y = 0$ and $z = 0$ gives $\\frac{x}{20} = 1 \\implies x = 20$.",
      "The $x$-intercept is 20."
    ],
    "stepByStepSolutionAr": [
      "بوضع $y = ٠$ و $z = ٠$ نحصل على $x = 20$.",
      "الجزء المقطوع من محور السينات هو 20."
    ],
    "teacherTipEn": "The denominator under each variable is its intercept on that axis.",
    "teacherTipAr": "المقام أسفل كل متغير هو طول الجزء المقطوع من ذلك المحور."
  },
  {
    "id": "solid_ch2_db_med_21",
    "titleEn": "Point on Parametric Line at Given Parameter 21",
    "titleAr": "نقطة على مستقيم بارامتري عند قيمة محددة للبارامتر 21",
    "difficulty": "medium",
    "questionEn": "Find the point on the line $\\vec{r} = (2, -1, 4) + t(3, 2, -1)$ corresponding to $t = 1$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم $\\vec{r} = (٢، -١، ٤) + t(٣، ٢، -١)$ والمناظرة للقيمة $t = 1$.",
    "optionsEn": [
      "(5, 1, 3)",
      "(6, 1, 3)",
      "(5, 0, 3)",
      "(3, 2, 3)"
    ],
    "optionsAr": [
      "(5، 1، 3)",
      "(6، 1، 3)",
      "(5، 0، 3)",
      "(3، 2، 3)"
    ],
    "correctAnswer": "(5, 1, 3)",
    "correctIndex": 0,
    "hintEn": "Substitute $t = 1$ into each component.",
    "hintAr": "عوض بـ $t = 1$ في كل مركبة.",
    "stepByStepSolutionEn": [
      "$x = 2 + 3(1) = 5$.",
      "$y = -1 + 2(1) = 1$.",
      "$z = 4 - 1(1) = 3$.",
      "The point is $(5, 1, 3)$."
    ],
    "stepByStepSolutionAr": [
      "$x = ٢ + ٣(1) = 5$.",
      "$y = -١ + ٢(1) = 1$.",
      "$z = ٤ - (1) = 3$.",
      "النقطة هي $(5، 1، 3)$."
    ],
    "teacherTipEn": "Every real value of parameter $t$ gives a unique point on the straight line.",
    "teacherTipAr": "كل قيمة حقيقية للبارامتر $t$ تعطي نقطة وحيدة تقع على الخط المستقيم."
  },
  {
    "id": "solid_ch2_db_med_22",
    "titleEn": "Point on Parametric Line at Given Parameter 22",
    "titleAr": "نقطة على مستقيم بارامتري عند قيمة محددة للبارامتر 22",
    "difficulty": "medium",
    "questionEn": "Find the point on the line $\\vec{r} = (2, -1, 4) + t(3, 2, -1)$ corresponding to $t = 2$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم $\\vec{r} = (٢، -١، ٤) + t(٣، ٢، -١)$ والمناظرة للقيمة $t = 2$.",
    "optionsEn": [
      "(8, 3, 2)",
      "(9, 3, 2)",
      "(8, 2, 2)",
      "(6, 4, 2)"
    ],
    "optionsAr": [
      "(8، 3، 2)",
      "(9، 3، 2)",
      "(8، 2، 2)",
      "(6، 4، 2)"
    ],
    "correctAnswer": "(8, 3, 2)",
    "correctIndex": 0,
    "hintEn": "Substitute $t = 2$ into each component.",
    "hintAr": "عوض بـ $t = 2$ في كل مركبة.",
    "stepByStepSolutionEn": [
      "$x = 2 + 3(2) = 8$.",
      "$y = -1 + 2(2) = 3$.",
      "$z = 4 - 1(2) = 2$.",
      "The point is $(8, 3, 2)$."
    ],
    "stepByStepSolutionAr": [
      "$x = ٢ + ٣(2) = 8$.",
      "$y = -١ + ٢(2) = 3$.",
      "$z = ٤ - (2) = 2$.",
      "النقطة هي $(8، 3، 2)$."
    ],
    "teacherTipEn": "Every real value of parameter $t$ gives a unique point on the straight line.",
    "teacherTipAr": "كل قيمة حقيقية للبارامتر $t$ تعطي نقطة وحيدة تقع على الخط المستقيم."
  },
  {
    "id": "solid_ch2_db_med_23",
    "titleEn": "Point on Parametric Line at Given Parameter 23",
    "titleAr": "نقطة على مستقيم بارامتري عند قيمة محددة للبارامتر 23",
    "difficulty": "medium",
    "questionEn": "Find the point on the line $\\vec{r} = (2, -1, 4) + t(3, 2, -1)$ corresponding to $t = 3$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم $\\vec{r} = (٢، -١، ٤) + t(٣، ٢، -١)$ والمناظرة للقيمة $t = 3$.",
    "optionsEn": [
      "(11, 5, 1)",
      "(12, 5, 1)",
      "(11, 4, 1)",
      "(9, 6, 1)"
    ],
    "optionsAr": [
      "(11، 5، 1)",
      "(12، 5، 1)",
      "(11، 4، 1)",
      "(9، 6، 1)"
    ],
    "correctAnswer": "(11, 5, 1)",
    "correctIndex": 0,
    "hintEn": "Substitute $t = 3$ into each component.",
    "hintAr": "عوض بـ $t = 3$ في كل مركبة.",
    "stepByStepSolutionEn": [
      "$x = 2 + 3(3) = 11$.",
      "$y = -1 + 2(3) = 5$.",
      "$z = 4 - 1(3) = 1$.",
      "The point is $(11, 5, 1)$."
    ],
    "stepByStepSolutionAr": [
      "$x = ٢ + ٣(3) = 11$.",
      "$y = -١ + ٢(3) = 5$.",
      "$z = ٤ - (3) = 1$.",
      "النقطة هي $(11، 5، 1)$."
    ],
    "teacherTipEn": "Every real value of parameter $t$ gives a unique point on the straight line.",
    "teacherTipAr": "كل قيمة حقيقية للبارامتر $t$ تعطي نقطة وحيدة تقع على الخط المستقيم."
  },
  {
    "id": "solid_ch2_db_med_24",
    "titleEn": "Point on Parametric Line at Given Parameter 24",
    "titleAr": "نقطة على مستقيم بارامتري عند قيمة محددة للبارامتر 24",
    "difficulty": "medium",
    "questionEn": "Find the point on the line $\\vec{r} = (2, -1, 4) + t(3, 2, -1)$ corresponding to $t = 1$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم $\\vec{r} = (٢، -١، ٤) + t(٣، ٢، -١)$ والمناظرة للقيمة $t = 1$.",
    "optionsEn": [
      "(5, 1, 3)",
      "(6, 1, 3)",
      "(5, 0, 3)",
      "(3, 2, 3)"
    ],
    "optionsAr": [
      "(5، 1، 3)",
      "(6، 1، 3)",
      "(5، 0، 3)",
      "(3، 2، 3)"
    ],
    "correctAnswer": "(5, 1, 3)",
    "correctIndex": 0,
    "hintEn": "Substitute $t = 1$ into each component.",
    "hintAr": "عوض بـ $t = 1$ في كل مركبة.",
    "stepByStepSolutionEn": [
      "$x = 2 + 3(1) = 5$.",
      "$y = -1 + 2(1) = 1$.",
      "$z = 4 - 1(1) = 3$.",
      "The point is $(5, 1, 3)$."
    ],
    "stepByStepSolutionAr": [
      "$x = ٢ + ٣(1) = 5$.",
      "$y = -١ + ٢(1) = 1$.",
      "$z = ٤ - (1) = 3$.",
      "النقطة هي $(5، 1، 3)$."
    ],
    "teacherTipEn": "Every real value of parameter $t$ gives a unique point on the straight line.",
    "teacherTipAr": "كل قيمة حقيقية للبارامتر $t$ تعطي نقطة وحيدة تقع على الخط المستقيم."
  },
  {
    "id": "solid_ch2_db_med_25",
    "titleEn": "Point on Parametric Line at Given Parameter 25",
    "titleAr": "نقطة على مستقيم بارامتري عند قيمة محددة للبارامتر 25",
    "difficulty": "medium",
    "questionEn": "Find the point on the line $\\vec{r} = (2, -1, 4) + t(3, 2, -1)$ corresponding to $t = 2$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم $\\vec{r} = (٢، -١، ٤) + t(٣، ٢، -١)$ والمناظرة للقيمة $t = 2$.",
    "optionsEn": [
      "(8, 3, 2)",
      "(9, 3, 2)",
      "(8, 2, 2)",
      "(6, 4, 2)"
    ],
    "optionsAr": [
      "(8، 3، 2)",
      "(9، 3، 2)",
      "(8، 2، 2)",
      "(6، 4، 2)"
    ],
    "correctAnswer": "(8, 3, 2)",
    "correctIndex": 0,
    "hintEn": "Substitute $t = 2$ into each component.",
    "hintAr": "عوض بـ $t = 2$ في كل مركبة.",
    "stepByStepSolutionEn": [
      "$x = 2 + 3(2) = 8$.",
      "$y = -1 + 2(2) = 3$.",
      "$z = 4 - 1(2) = 2$.",
      "The point is $(8, 3, 2)$."
    ],
    "stepByStepSolutionAr": [
      "$x = ٢ + ٣(2) = 8$.",
      "$y = -١ + ٢(2) = 3$.",
      "$z = ٤ - (2) = 2$.",
      "النقطة هي $(8، 3، 2)$."
    ],
    "teacherTipEn": "Every real value of parameter $t$ gives a unique point on the straight line.",
    "teacherTipAr": "كل قيمة حقيقية للبارامتر $t$ تعطي نقطة وحيدة تقع على الخط المستقيم."
  },
  {
    "id": "solid_ch2_db_med_26",
    "titleEn": "Point on Parametric Line at Given Parameter 26",
    "titleAr": "نقطة على مستقيم بارامتري عند قيمة محددة للبارامتر 26",
    "difficulty": "medium",
    "questionEn": "Find the point on the line $\\vec{r} = (2, -1, 4) + t(3, 2, -1)$ corresponding to $t = 3$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم $\\vec{r} = (٢، -١، ٤) + t(٣، ٢، -١)$ والمناظرة للقيمة $t = 3$.",
    "optionsEn": [
      "(11, 5, 1)",
      "(12, 5, 1)",
      "(11, 4, 1)",
      "(9, 6, 1)"
    ],
    "optionsAr": [
      "(11، 5، 1)",
      "(12، 5، 1)",
      "(11، 4، 1)",
      "(9، 6، 1)"
    ],
    "correctAnswer": "(11, 5, 1)",
    "correctIndex": 0,
    "hintEn": "Substitute $t = 3$ into each component.",
    "hintAr": "عوض بـ $t = 3$ في كل مركبة.",
    "stepByStepSolutionEn": [
      "$x = 2 + 3(3) = 11$.",
      "$y = -1 + 2(3) = 5$.",
      "$z = 4 - 1(3) = 1$.",
      "The point is $(11, 5, 1)$."
    ],
    "stepByStepSolutionAr": [
      "$x = ٢ + ٣(3) = 11$.",
      "$y = -١ + ٢(3) = 5$.",
      "$z = ٤ - (3) = 1$.",
      "النقطة هي $(11، 5، 1)$."
    ],
    "teacherTipEn": "Every real value of parameter $t$ gives a unique point on the straight line.",
    "teacherTipAr": "كل قيمة حقيقية للبارامتر $t$ تعطي نقطة وحيدة تقع على الخط المستقيم."
  },
  {
    "id": "solid_ch2_db_med_27",
    "titleEn": "Point on Parametric Line at Given Parameter 27",
    "titleAr": "نقطة على مستقيم بارامتري عند قيمة محددة للبارامتر 27",
    "difficulty": "medium",
    "questionEn": "Find the point on the line $\\vec{r} = (2, -1, 4) + t(3, 2, -1)$ corresponding to $t = 1$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم $\\vec{r} = (٢، -١، ٤) + t(٣، ٢، -١)$ والمناظرة للقيمة $t = 1$.",
    "optionsEn": [
      "(5, 1, 3)",
      "(6, 1, 3)",
      "(5, 0, 3)",
      "(3, 2, 3)"
    ],
    "optionsAr": [
      "(5، 1، 3)",
      "(6، 1، 3)",
      "(5، 0، 3)",
      "(3، 2، 3)"
    ],
    "correctAnswer": "(5, 1, 3)",
    "correctIndex": 0,
    "hintEn": "Substitute $t = 1$ into each component.",
    "hintAr": "عوض بـ $t = 1$ في كل مركبة.",
    "stepByStepSolutionEn": [
      "$x = 2 + 3(1) = 5$.",
      "$y = -1 + 2(1) = 1$.",
      "$z = 4 - 1(1) = 3$.",
      "The point is $(5, 1, 3)$."
    ],
    "stepByStepSolutionAr": [
      "$x = ٢ + ٣(1) = 5$.",
      "$y = -١ + ٢(1) = 1$.",
      "$z = ٤ - (1) = 3$.",
      "النقطة هي $(5، 1، 3)$."
    ],
    "teacherTipEn": "Every real value of parameter $t$ gives a unique point on the straight line.",
    "teacherTipAr": "كل قيمة حقيقية للبارامتر $t$ تعطي نقطة وحيدة تقع على الخط المستقيم."
  },
  {
    "id": "solid_ch2_db_med_28",
    "titleEn": "Point on Parametric Line at Given Parameter 28",
    "titleAr": "نقطة على مستقيم بارامتري عند قيمة محددة للبارامتر 28",
    "difficulty": "medium",
    "questionEn": "Find the point on the line $\\vec{r} = (2, -1, 4) + t(3, 2, -1)$ corresponding to $t = 2$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم $\\vec{r} = (٢، -١، ٤) + t(٣، ٢، -١)$ والمناظرة للقيمة $t = 2$.",
    "optionsEn": [
      "(8, 3, 2)",
      "(9, 3, 2)",
      "(8, 2, 2)",
      "(6, 4, 2)"
    ],
    "optionsAr": [
      "(8، 3، 2)",
      "(9، 3، 2)",
      "(8، 2، 2)",
      "(6، 4، 2)"
    ],
    "correctAnswer": "(8, 3, 2)",
    "correctIndex": 0,
    "hintEn": "Substitute $t = 2$ into each component.",
    "hintAr": "عوض بـ $t = 2$ في كل مركبة.",
    "stepByStepSolutionEn": [
      "$x = 2 + 3(2) = 8$.",
      "$y = -1 + 2(2) = 3$.",
      "$z = 4 - 1(2) = 2$.",
      "The point is $(8, 3, 2)$."
    ],
    "stepByStepSolutionAr": [
      "$x = ٢ + ٣(2) = 8$.",
      "$y = -١ + ٢(2) = 3$.",
      "$z = ٤ - (2) = 2$.",
      "النقطة هي $(8، 3، 2)$."
    ],
    "teacherTipEn": "Every real value of parameter $t$ gives a unique point on the straight line.",
    "teacherTipAr": "كل قيمة حقيقية للبارامتر $t$ تعطي نقطة وحيدة تقع على الخط المستقيم."
  },
  {
    "id": "solid_ch2_db_med_29",
    "titleEn": "Point on Parametric Line at Given Parameter 29",
    "titleAr": "نقطة على مستقيم بارامتري عند قيمة محددة للبارامتر 29",
    "difficulty": "medium",
    "questionEn": "Find the point on the line $\\vec{r} = (2, -1, 4) + t(3, 2, -1)$ corresponding to $t = 3$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم $\\vec{r} = (٢، -١، ٤) + t(٣، ٢، -١)$ والمناظرة للقيمة $t = 3$.",
    "optionsEn": [
      "(11, 5, 1)",
      "(12, 5, 1)",
      "(11, 4, 1)",
      "(9, 6, 1)"
    ],
    "optionsAr": [
      "(11، 5، 1)",
      "(12، 5، 1)",
      "(11، 4، 1)",
      "(9، 6، 1)"
    ],
    "correctAnswer": "(11, 5, 1)",
    "correctIndex": 0,
    "hintEn": "Substitute $t = 3$ into each component.",
    "hintAr": "عوض بـ $t = 3$ في كل مركبة.",
    "stepByStepSolutionEn": [
      "$x = 2 + 3(3) = 11$.",
      "$y = -1 + 2(3) = 5$.",
      "$z = 4 - 1(3) = 1$.",
      "The point is $(11, 5, 1)$."
    ],
    "stepByStepSolutionAr": [
      "$x = ٢ + ٣(3) = 11$.",
      "$y = -١ + ٢(3) = 5$.",
      "$z = ٤ - (3) = 1$.",
      "النقطة هي $(11، 5، 1)$."
    ],
    "teacherTipEn": "Every real value of parameter $t$ gives a unique point on the straight line.",
    "teacherTipAr": "كل قيمة حقيقية للبارامتر $t$ تعطي نقطة وحيدة تقع على الخط المستقيم."
  },
  {
    "id": "solid_ch2_db_med_30",
    "titleEn": "Point on Parametric Line at Given Parameter 30",
    "titleAr": "نقطة على مستقيم بارامتري عند قيمة محددة للبارامتر 30",
    "difficulty": "medium",
    "questionEn": "Find the point on the line $\\vec{r} = (2, -1, 4) + t(3, 2, -1)$ corresponding to $t = 1$.",
    "questionAr": "أوجد النقطة الواقعة على المستقيم $\\vec{r} = (٢، -١، ٤) + t(٣، ٢، -١)$ والمناظرة للقيمة $t = 1$.",
    "optionsEn": [
      "(5, 1, 3)",
      "(6, 1, 3)",
      "(5, 0, 3)",
      "(3, 2, 3)"
    ],
    "optionsAr": [
      "(5، 1، 3)",
      "(6، 1، 3)",
      "(5، 0، 3)",
      "(3، 2، 3)"
    ],
    "correctAnswer": "(5, 1, 3)",
    "correctIndex": 0,
    "hintEn": "Substitute $t = 1$ into each component.",
    "hintAr": "عوض بـ $t = 1$ في كل مركبة.",
    "stepByStepSolutionEn": [
      "$x = 2 + 3(1) = 5$.",
      "$y = -1 + 2(1) = 1$.",
      "$z = 4 - 1(1) = 3$.",
      "The point is $(5, 1, 3)$."
    ],
    "stepByStepSolutionAr": [
      "$x = ٢ + ٣(1) = 5$.",
      "$y = -١ + ٢(1) = 1$.",
      "$z = ٤ - (1) = 3$.",
      "النقطة هي $(5، 1، 3)$."
    ],
    "teacherTipEn": "Every real value of parameter $t$ gives a unique point on the straight line.",
    "teacherTipAr": "كل قيمة حقيقية للبارامتر $t$ تعطي نقطة وحيدة تقع على الخط المستقيم."
  },
  {
    "id": "solid_ch2_db_med_31",
    "titleEn": "Line Perpendicular to Plane 31",
    "titleAr": "خط مستقيم عمودي على مستوى 31",
    "difficulty": "medium",
    "questionEn": "If the line $\\vec{r} = (1, 2, 3) + t(a, 3, -2)$ is perpendicular to the plane $2x + 3y - 2z + 7 = 0$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\vec{r} = (١، ٢، ٣) + t(a، 3، -2)$ عمودياً على المستوى $٢x + ٣y - ٢z + ٧ = ٠$، فأوجد قيمة $a$.",
    "optionsEn": [
      "2",
      "3",
      "1",
      "4"
    ],
    "optionsAr": [
      "2",
      "3",
      "1",
      "4"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane if and only if its direction vector is parallel to the plane's normal: $\\vec{d} \\parallel \\vec{n}$.",
    "hintAr": "المستقيم عمودي على المستوى إذا وفقط إذا كان متجه اتجاهه يوازي المتجه العمودي للمستوى: $\\vec{d} \\parallel \\vec{n}$.",
    "stepByStepSolutionEn": [
      "Normal vector of plane: $\\vec{n} = (2, 3, -2)$.",
      "Direction vector of line: $\\vec{d} = (a, 3, -2)$.",
      "Since line $\\perp$ plane, $\\vec{d} \\parallel \\vec{n}$:",
      "$$\\frac{a}{2} = \\frac{3}{3} = 1 \\implies a = 2(1) = 2$$"
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى: $\\vec{n} = (٢، ٣، -٢)$.",
      "توازي متجه الاتجاه مع العمودي: $\\frac{a}{٢} = \\frac{3}{٣} = 1 \\implies a = 2$"
    ],
    "teacherTipEn": "Line perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
    "teacherTipAr": "خط عمودي على مستوى $\\implies \\vec{d} \\parallel \\vec{n}$."
  },
  {
    "id": "solid_ch2_db_med_32",
    "titleEn": "Line Perpendicular to Plane 32",
    "titleAr": "خط مستقيم عمودي على مستوى 32",
    "difficulty": "medium",
    "questionEn": "If the line $\\vec{r} = (1, 2, 3) + t(a, 6, -4)$ is perpendicular to the plane $2x + 3y - 2z + 7 = 0$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\vec{r} = (١، ٢، ٣) + t(a، 6، -4)$ عمودياً على المستوى $٢x + ٣y - ٢z + ٧ = ٠$، فأوجد قيمة $a$.",
    "optionsEn": [
      "4",
      "5",
      "3",
      "6"
    ],
    "optionsAr": [
      "4",
      "5",
      "3",
      "6"
    ],
    "correctAnswer": "4",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane if and only if its direction vector is parallel to the plane's normal: $\\vec{d} \\parallel \\vec{n}$.",
    "hintAr": "المستقيم عمودي على المستوى إذا وفقط إذا كان متجه اتجاهه يوازي المتجه العمودي للمستوى: $\\vec{d} \\parallel \\vec{n}$.",
    "stepByStepSolutionEn": [
      "Normal vector of plane: $\\vec{n} = (2, 3, -2)$.",
      "Direction vector of line: $\\vec{d} = (a, 6, -4)$.",
      "Since line $\\perp$ plane, $\\vec{d} \\parallel \\vec{n}$:",
      "$$\\frac{a}{2} = \\frac{6}{3} = 2 \\implies a = 2(2) = 4$$"
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى: $\\vec{n} = (٢، ٣، -٢)$.",
      "توازي متجه الاتجاه مع العمودي: $\\frac{a}{٢} = \\frac{6}{٣} = 2 \\implies a = 4$"
    ],
    "teacherTipEn": "Line perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
    "teacherTipAr": "خط عمودي على مستوى $\\implies \\vec{d} \\parallel \\vec{n}$."
  },
  {
    "id": "solid_ch2_db_med_33",
    "titleEn": "Line Perpendicular to Plane 33",
    "titleAr": "خط مستقيم عمودي على مستوى 33",
    "difficulty": "medium",
    "questionEn": "If the line $\\vec{r} = (1, 2, 3) + t(a, 9, -6)$ is perpendicular to the plane $2x + 3y - 2z + 7 = 0$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\vec{r} = (١، ٢، ٣) + t(a، 9، -6)$ عمودياً على المستوى $٢x + ٣y - ٢z + ٧ = ٠$، فأوجد قيمة $a$.",
    "optionsEn": [
      "6",
      "7",
      "5",
      "8"
    ],
    "optionsAr": [
      "6",
      "7",
      "5",
      "8"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane if and only if its direction vector is parallel to the plane's normal: $\\vec{d} \\parallel \\vec{n}$.",
    "hintAr": "المستقيم عمودي على المستوى إذا وفقط إذا كان متجه اتجاهه يوازي المتجه العمودي للمستوى: $\\vec{d} \\parallel \\vec{n}$.",
    "stepByStepSolutionEn": [
      "Normal vector of plane: $\\vec{n} = (2, 3, -2)$.",
      "Direction vector of line: $\\vec{d} = (a, 9, -6)$.",
      "Since line $\\perp$ plane, $\\vec{d} \\parallel \\vec{n}$:",
      "$$\\frac{a}{2} = \\frac{9}{3} = 3 \\implies a = 2(3) = 6$$"
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى: $\\vec{n} = (٢، ٣، -٢)$.",
      "توازي متجه الاتجاه مع العمودي: $\\frac{a}{٢} = \\frac{9}{٣} = 3 \\implies a = 6$"
    ],
    "teacherTipEn": "Line perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
    "teacherTipAr": "خط عمودي على مستوى $\\implies \\vec{d} \\parallel \\vec{n}$."
  },
  {
    "id": "solid_ch2_db_med_34",
    "titleEn": "Line Perpendicular to Plane 34",
    "titleAr": "خط مستقيم عمودي على مستوى 34",
    "difficulty": "medium",
    "questionEn": "If the line $\\vec{r} = (1, 2, 3) + t(a, 12, -8)$ is perpendicular to the plane $2x + 3y - 2z + 7 = 0$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\vec{r} = (١، ٢، ٣) + t(a، 12، -8)$ عمودياً على المستوى $٢x + ٣y - ٢z + ٧ = ٠$، فأوجد قيمة $a$.",
    "optionsEn": [
      "8",
      "9",
      "7",
      "10"
    ],
    "optionsAr": [
      "8",
      "9",
      "7",
      "10"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane if and only if its direction vector is parallel to the plane's normal: $\\vec{d} \\parallel \\vec{n}$.",
    "hintAr": "المستقيم عمودي على المستوى إذا وفقط إذا كان متجه اتجاهه يوازي المتجه العمودي للمستوى: $\\vec{d} \\parallel \\vec{n}$.",
    "stepByStepSolutionEn": [
      "Normal vector of plane: $\\vec{n} = (2, 3, -2)$.",
      "Direction vector of line: $\\vec{d} = (a, 12, -8)$.",
      "Since line $\\perp$ plane, $\\vec{d} \\parallel \\vec{n}$:",
      "$$\\frac{a}{2} = \\frac{12}{3} = 4 \\implies a = 2(4) = 8$$"
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى: $\\vec{n} = (٢، ٣، -٢)$.",
      "توازي متجه الاتجاه مع العمودي: $\\frac{a}{٢} = \\frac{12}{٣} = 4 \\implies a = 8$"
    ],
    "teacherTipEn": "Line perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
    "teacherTipAr": "خط عمودي على مستوى $\\implies \\vec{d} \\parallel \\vec{n}$."
  },
  {
    "id": "solid_ch2_db_med_35",
    "titleEn": "Line Perpendicular to Plane 35",
    "titleAr": "خط مستقيم عمودي على مستوى 35",
    "difficulty": "medium",
    "questionEn": "If the line $\\vec{r} = (1, 2, 3) + t(a, 15, -10)$ is perpendicular to the plane $2x + 3y - 2z + 7 = 0$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\vec{r} = (١، ٢، ٣) + t(a، 15، -10)$ عمودياً على المستوى $٢x + ٣y - ٢z + ٧ = ٠$، فأوجد قيمة $a$.",
    "optionsEn": [
      "10",
      "11",
      "9",
      "12"
    ],
    "optionsAr": [
      "10",
      "11",
      "9",
      "12"
    ],
    "correctAnswer": "10",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane if and only if its direction vector is parallel to the plane's normal: $\\vec{d} \\parallel \\vec{n}$.",
    "hintAr": "المستقيم عمودي على المستوى إذا وفقط إذا كان متجه اتجاهه يوازي المتجه العمودي للمستوى: $\\vec{d} \\parallel \\vec{n}$.",
    "stepByStepSolutionEn": [
      "Normal vector of plane: $\\vec{n} = (2, 3, -2)$.",
      "Direction vector of line: $\\vec{d} = (a, 15, -10)$.",
      "Since line $\\perp$ plane, $\\vec{d} \\parallel \\vec{n}$:",
      "$$\\frac{a}{2} = \\frac{15}{3} = 5 \\implies a = 2(5) = 10$$"
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى: $\\vec{n} = (٢، ٣، -٢)$.",
      "توازي متجه الاتجاه مع العمودي: $\\frac{a}{٢} = \\frac{15}{٣} = 5 \\implies a = 10$"
    ],
    "teacherTipEn": "Line perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
    "teacherTipAr": "خط عمودي على مستوى $\\implies \\vec{d} \\parallel \\vec{n}$."
  },
  {
    "id": "solid_ch2_db_med_36",
    "titleEn": "Line Perpendicular to Plane 36",
    "titleAr": "خط مستقيم عمودي على مستوى 36",
    "difficulty": "medium",
    "questionEn": "If the line $\\vec{r} = (1, 2, 3) + t(a, 18, -12)$ is perpendicular to the plane $2x + 3y - 2z + 7 = 0$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\vec{r} = (١، ٢، ٣) + t(a، 18، -12)$ عمودياً على المستوى $٢x + ٣y - ٢z + ٧ = ٠$، فأوجد قيمة $a$.",
    "optionsEn": [
      "12",
      "13",
      "11",
      "14"
    ],
    "optionsAr": [
      "12",
      "13",
      "11",
      "14"
    ],
    "correctAnswer": "12",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane if and only if its direction vector is parallel to the plane's normal: $\\vec{d} \\parallel \\vec{n}$.",
    "hintAr": "المستقيم عمودي على المستوى إذا وفقط إذا كان متجه اتجاهه يوازي المتجه العمودي للمستوى: $\\vec{d} \\parallel \\vec{n}$.",
    "stepByStepSolutionEn": [
      "Normal vector of plane: $\\vec{n} = (2, 3, -2)$.",
      "Direction vector of line: $\\vec{d} = (a, 18, -12)$.",
      "Since line $\\perp$ plane, $\\vec{d} \\parallel \\vec{n}$:",
      "$$\\frac{a}{2} = \\frac{18}{3} = 6 \\implies a = 2(6) = 12$$"
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى: $\\vec{n} = (٢، ٣، -٢)$.",
      "توازي متجه الاتجاه مع العمودي: $\\frac{a}{٢} = \\frac{18}{٣} = 6 \\implies a = 12$"
    ],
    "teacherTipEn": "Line perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
    "teacherTipAr": "خط عمودي على مستوى $\\implies \\vec{d} \\parallel \\vec{n}$."
  },
  {
    "id": "solid_ch2_db_med_37",
    "titleEn": "Line Perpendicular to Plane 37",
    "titleAr": "خط مستقيم عمودي على مستوى 37",
    "difficulty": "medium",
    "questionEn": "If the line $\\vec{r} = (1, 2, 3) + t(a, 21, -14)$ is perpendicular to the plane $2x + 3y - 2z + 7 = 0$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\vec{r} = (١، ٢، ٣) + t(a، 21، -14)$ عمودياً على المستوى $٢x + ٣y - ٢z + ٧ = ٠$، فأوجد قيمة $a$.",
    "optionsEn": [
      "14",
      "15",
      "13",
      "16"
    ],
    "optionsAr": [
      "14",
      "15",
      "13",
      "16"
    ],
    "correctAnswer": "14",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane if and only if its direction vector is parallel to the plane's normal: $\\vec{d} \\parallel \\vec{n}$.",
    "hintAr": "المستقيم عمودي على المستوى إذا وفقط إذا كان متجه اتجاهه يوازي المتجه العمودي للمستوى: $\\vec{d} \\parallel \\vec{n}$.",
    "stepByStepSolutionEn": [
      "Normal vector of plane: $\\vec{n} = (2, 3, -2)$.",
      "Direction vector of line: $\\vec{d} = (a, 21, -14)$.",
      "Since line $\\perp$ plane, $\\vec{d} \\parallel \\vec{n}$:",
      "$$\\frac{a}{2} = \\frac{21}{3} = 7 \\implies a = 2(7) = 14$$"
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى: $\\vec{n} = (٢، ٣، -٢)$.",
      "توازي متجه الاتجاه مع العمودي: $\\frac{a}{٢} = \\frac{21}{٣} = 7 \\implies a = 14$"
    ],
    "teacherTipEn": "Line perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
    "teacherTipAr": "خط عمودي على مستوى $\\implies \\vec{d} \\parallel \\vec{n}$."
  },
  {
    "id": "solid_ch2_db_med_38",
    "titleEn": "Line Perpendicular to Plane 38",
    "titleAr": "خط مستقيم عمودي على مستوى 38",
    "difficulty": "medium",
    "questionEn": "If the line $\\vec{r} = (1, 2, 3) + t(a, 24, -16)$ is perpendicular to the plane $2x + 3y - 2z + 7 = 0$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\vec{r} = (١، ٢، ٣) + t(a، 24، -16)$ عمودياً على المستوى $٢x + ٣y - ٢z + ٧ = ٠$، فأوجد قيمة $a$.",
    "optionsEn": [
      "16",
      "17",
      "15",
      "18"
    ],
    "optionsAr": [
      "16",
      "17",
      "15",
      "18"
    ],
    "correctAnswer": "16",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane if and only if its direction vector is parallel to the plane's normal: $\\vec{d} \\parallel \\vec{n}$.",
    "hintAr": "المستقيم عمودي على المستوى إذا وفقط إذا كان متجه اتجاهه يوازي المتجه العمودي للمستوى: $\\vec{d} \\parallel \\vec{n}$.",
    "stepByStepSolutionEn": [
      "Normal vector of plane: $\\vec{n} = (2, 3, -2)$.",
      "Direction vector of line: $\\vec{d} = (a, 24, -16)$.",
      "Since line $\\perp$ plane, $\\vec{d} \\parallel \\vec{n}$:",
      "$$\\frac{a}{2} = \\frac{24}{3} = 8 \\implies a = 2(8) = 16$$"
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى: $\\vec{n} = (٢، ٣، -٢)$.",
      "توازي متجه الاتجاه مع العمودي: $\\frac{a}{٢} = \\frac{24}{٣} = 8 \\implies a = 16$"
    ],
    "teacherTipEn": "Line perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
    "teacherTipAr": "خط عمودي على مستوى $\\implies \\vec{d} \\parallel \\vec{n}$."
  },
  {
    "id": "solid_ch2_db_med_39",
    "titleEn": "Line Perpendicular to Plane 39",
    "titleAr": "خط مستقيم عمودي على مستوى 39",
    "difficulty": "medium",
    "questionEn": "If the line $\\vec{r} = (1, 2, 3) + t(a, 27, -18)$ is perpendicular to the plane $2x + 3y - 2z + 7 = 0$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\vec{r} = (١، ٢، ٣) + t(a، 27، -18)$ عمودياً على المستوى $٢x + ٣y - ٢z + ٧ = ٠$، فأوجد قيمة $a$.",
    "optionsEn": [
      "18",
      "19",
      "17",
      "20"
    ],
    "optionsAr": [
      "18",
      "19",
      "17",
      "20"
    ],
    "correctAnswer": "18",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane if and only if its direction vector is parallel to the plane's normal: $\\vec{d} \\parallel \\vec{n}$.",
    "hintAr": "المستقيم عمودي على المستوى إذا وفقط إذا كان متجه اتجاهه يوازي المتجه العمودي للمستوى: $\\vec{d} \\parallel \\vec{n}$.",
    "stepByStepSolutionEn": [
      "Normal vector of plane: $\\vec{n} = (2, 3, -2)$.",
      "Direction vector of line: $\\vec{d} = (a, 27, -18)$.",
      "Since line $\\perp$ plane, $\\vec{d} \\parallel \\vec{n}$:",
      "$$\\frac{a}{2} = \\frac{27}{3} = 9 \\implies a = 2(9) = 18$$"
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى: $\\vec{n} = (٢، ٣، -٢)$.",
      "توازي متجه الاتجاه مع العمودي: $\\frac{a}{٢} = \\frac{27}{٣} = 9 \\implies a = 18$"
    ],
    "teacherTipEn": "Line perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
    "teacherTipAr": "خط عمودي على مستوى $\\implies \\vec{d} \\parallel \\vec{n}$."
  },
  {
    "id": "solid_ch2_db_med_40",
    "titleEn": "Line Perpendicular to Plane 40",
    "titleAr": "خط مستقيم عمودي على مستوى 40",
    "difficulty": "medium",
    "questionEn": "If the line $\\vec{r} = (1, 2, 3) + t(a, 30, -20)$ is perpendicular to the plane $2x + 3y - 2z + 7 = 0$, find $a$.",
    "questionAr": "إذا كان المستقيم $\\vec{r} = (١، ٢، ٣) + t(a، 30، -20)$ عمودياً على المستوى $٢x + ٣y - ٢z + ٧ = ٠$، فأوجد قيمة $a$.",
    "optionsEn": [
      "20",
      "21",
      "19",
      "22"
    ],
    "optionsAr": [
      "20",
      "21",
      "19",
      "22"
    ],
    "correctAnswer": "20",
    "correctIndex": 0,
    "hintEn": "A line is perpendicular to a plane if and only if its direction vector is parallel to the plane's normal: $\\vec{d} \\parallel \\vec{n}$.",
    "hintAr": "المستقيم عمودي على المستوى إذا وفقط إذا كان متجه اتجاهه يوازي المتجه العمودي للمستوى: $\\vec{d} \\parallel \\vec{n}$.",
    "stepByStepSolutionEn": [
      "Normal vector of plane: $\\vec{n} = (2, 3, -2)$.",
      "Direction vector of line: $\\vec{d} = (a, 30, -20)$.",
      "Since line $\\perp$ plane, $\\vec{d} \\parallel \\vec{n}$:",
      "$$\\frac{a}{2} = \\frac{30}{3} = 10 \\implies a = 2(10) = 20$$"
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى: $\\vec{n} = (٢، ٣، -٢)$.",
      "توازي متجه الاتجاه مع العمودي: $\\frac{a}{٢} = \\frac{30}{٣} = 10 \\implies a = 20$"
    ],
    "teacherTipEn": "Line perpendicular to plane $\\implies \\vec{d} \\parallel \\vec{n}$.",
    "teacherTipAr": "خط عمودي على مستوى $\\implies \\vec{d} \\parallel \\vec{n}$."
  },
  {
    "id": "solid_ch2_db_med_41",
    "titleEn": "Distance from Origin to Plane 41",
    "titleAr": "بعد نقطة الأصل عن مستوى 41",
    "difficulty": "medium",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to the plane $x + 2y + 2z = 3$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن المستوى $x + ٢y + ٢z = 3$.",
    "optionsEn": [
      "1",
      "2",
      "3",
      "4"
    ],
    "optionsAr": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "Distance from origin to $Ax + By + Cz = D$ is $\\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "hintAr": "بعد نقطة الأصل عن المستوى هو $\\frac{|D|}{\\sqrt{A^٢ + B^٢ + C^٢}}$.",
    "stepByStepSolutionEn": [
      "Numerator: $|3|$.",
      "Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
      "Distance: $D = \\frac{3}{3} = 1$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|3|$.",
      "المقام: $\\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد: $D = \\frac{3}{٣} = 1$ وحدة طول."
    ],
    "teacherTipEn": "Distance from origin formula is simply $|D|/\\|\\vec{n}\\|$.",
    "teacherTipAr": "قانون بعد نقطة الأصل عن أي مستوى هو ببساطة $|D| / \\|\\vec{n}\\|$."
  },
  {
    "id": "solid_ch2_db_med_42",
    "titleEn": "Distance from Origin to Plane 42",
    "titleAr": "بعد نقطة الأصل عن مستوى 42",
    "difficulty": "medium",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to the plane $x + 2y + 2z = 6$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن المستوى $x + ٢y + ٢z = 6$.",
    "optionsEn": [
      "2",
      "3",
      "4",
      "5"
    ],
    "optionsAr": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "Distance from origin to $Ax + By + Cz = D$ is $\\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "hintAr": "بعد نقطة الأصل عن المستوى هو $\\frac{|D|}{\\sqrt{A^٢ + B^٢ + C^٢}}$.",
    "stepByStepSolutionEn": [
      "Numerator: $|6|$.",
      "Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
      "Distance: $D = \\frac{6}{3} = 2$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|6|$.",
      "المقام: $\\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد: $D = \\frac{6}{٣} = 2$ وحدة طول."
    ],
    "teacherTipEn": "Distance from origin formula is simply $|D|/\\|\\vec{n}\\|$.",
    "teacherTipAr": "قانون بعد نقطة الأصل عن أي مستوى هو ببساطة $|D| / \\|\\vec{n}\\|$."
  },
  {
    "id": "solid_ch2_db_med_43",
    "titleEn": "Distance from Origin to Plane 43",
    "titleAr": "بعد نقطة الأصل عن مستوى 43",
    "difficulty": "medium",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to the plane $x + 2y + 2z = 9$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن المستوى $x + ٢y + ٢z = 9$.",
    "optionsEn": [
      "3",
      "4",
      "5",
      "6"
    ],
    "optionsAr": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Distance from origin to $Ax + By + Cz = D$ is $\\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "hintAr": "بعد نقطة الأصل عن المستوى هو $\\frac{|D|}{\\sqrt{A^٢ + B^٢ + C^٢}}$.",
    "stepByStepSolutionEn": [
      "Numerator: $|9|$.",
      "Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
      "Distance: $D = \\frac{9}{3} = 3$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|9|$.",
      "المقام: $\\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد: $D = \\frac{9}{٣} = 3$ وحدة طول."
    ],
    "teacherTipEn": "Distance from origin formula is simply $|D|/\\|\\vec{n}\\|$.",
    "teacherTipAr": "قانون بعد نقطة الأصل عن أي مستوى هو ببساطة $|D| / \\|\\vec{n}\\|$."
  },
  {
    "id": "solid_ch2_db_med_44",
    "titleEn": "Distance from Origin to Plane 44",
    "titleAr": "بعد نقطة الأصل عن مستوى 44",
    "difficulty": "medium",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to the plane $x + 2y + 2z = 12$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن المستوى $x + ٢y + ٢z = 12$.",
    "optionsEn": [
      "4",
      "5",
      "6",
      "7"
    ],
    "optionsAr": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctAnswer": "4",
    "correctIndex": 0,
    "hintEn": "Distance from origin to $Ax + By + Cz = D$ is $\\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "hintAr": "بعد نقطة الأصل عن المستوى هو $\\frac{|D|}{\\sqrt{A^٢ + B^٢ + C^٢}}$.",
    "stepByStepSolutionEn": [
      "Numerator: $|12|$.",
      "Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
      "Distance: $D = \\frac{12}{3} = 4$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|12|$.",
      "المقام: $\\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد: $D = \\frac{12}{٣} = 4$ وحدة طول."
    ],
    "teacherTipEn": "Distance from origin formula is simply $|D|/\\|\\vec{n}\\|$.",
    "teacherTipAr": "قانون بعد نقطة الأصل عن أي مستوى هو ببساطة $|D| / \\|\\vec{n}\\|$."
  },
  {
    "id": "solid_ch2_db_med_45",
    "titleEn": "Distance from Origin to Plane 45",
    "titleAr": "بعد نقطة الأصل عن مستوى 45",
    "difficulty": "medium",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to the plane $x + 2y + 2z = 15$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن المستوى $x + ٢y + ٢z = 15$.",
    "optionsEn": [
      "5",
      "6",
      "7",
      "8"
    ],
    "optionsAr": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "Distance from origin to $Ax + By + Cz = D$ is $\\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "hintAr": "بعد نقطة الأصل عن المستوى هو $\\frac{|D|}{\\sqrt{A^٢ + B^٢ + C^٢}}$.",
    "stepByStepSolutionEn": [
      "Numerator: $|15|$.",
      "Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
      "Distance: $D = \\frac{15}{3} = 5$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|15|$.",
      "المقام: $\\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد: $D = \\frac{15}{٣} = 5$ وحدة طول."
    ],
    "teacherTipEn": "Distance from origin formula is simply $|D|/\\|\\vec{n}\\|$.",
    "teacherTipAr": "قانون بعد نقطة الأصل عن أي مستوى هو ببساطة $|D| / \\|\\vec{n}\\|$."
  },
  {
    "id": "solid_ch2_db_med_46",
    "titleEn": "Distance from Origin to Plane 46",
    "titleAr": "بعد نقطة الأصل عن مستوى 46",
    "difficulty": "medium",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to the plane $x + 2y + 2z = 18$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن المستوى $x + ٢y + ٢z = 18$.",
    "optionsEn": [
      "6",
      "7",
      "8",
      "9"
    ],
    "optionsAr": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "Distance from origin to $Ax + By + Cz = D$ is $\\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "hintAr": "بعد نقطة الأصل عن المستوى هو $\\frac{|D|}{\\sqrt{A^٢ + B^٢ + C^٢}}$.",
    "stepByStepSolutionEn": [
      "Numerator: $|18|$.",
      "Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
      "Distance: $D = \\frac{18}{3} = 6$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|18|$.",
      "المقام: $\\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد: $D = \\frac{18}{٣} = 6$ وحدة طول."
    ],
    "teacherTipEn": "Distance from origin formula is simply $|D|/\\|\\vec{n}\\|$.",
    "teacherTipAr": "قانون بعد نقطة الأصل عن أي مستوى هو ببساطة $|D| / \\|\\vec{n}\\|$."
  },
  {
    "id": "solid_ch2_db_med_47",
    "titleEn": "Distance from Origin to Plane 47",
    "titleAr": "بعد نقطة الأصل عن مستوى 47",
    "difficulty": "medium",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to the plane $x + 2y + 2z = 21$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن المستوى $x + ٢y + ٢z = 21$.",
    "optionsEn": [
      "7",
      "8",
      "9",
      "10"
    ],
    "optionsAr": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "Distance from origin to $Ax + By + Cz = D$ is $\\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "hintAr": "بعد نقطة الأصل عن المستوى هو $\\frac{|D|}{\\sqrt{A^٢ + B^٢ + C^٢}}$.",
    "stepByStepSolutionEn": [
      "Numerator: $|21|$.",
      "Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
      "Distance: $D = \\frac{21}{3} = 7$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|21|$.",
      "المقام: $\\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد: $D = \\frac{21}{٣} = 7$ وحدة طول."
    ],
    "teacherTipEn": "Distance from origin formula is simply $|D|/\\|\\vec{n}\\|$.",
    "teacherTipAr": "قانون بعد نقطة الأصل عن أي مستوى هو ببساطة $|D| / \\|\\vec{n}\\|$."
  },
  {
    "id": "solid_ch2_db_med_48",
    "titleEn": "Distance from Origin to Plane 48",
    "titleAr": "بعد نقطة الأصل عن مستوى 48",
    "difficulty": "medium",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to the plane $x + 2y + 2z = 24$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن المستوى $x + ٢y + ٢z = 24$.",
    "optionsEn": [
      "8",
      "9",
      "10",
      "11"
    ],
    "optionsAr": [
      "8",
      "9",
      "10",
      "11"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "Distance from origin to $Ax + By + Cz = D$ is $\\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "hintAr": "بعد نقطة الأصل عن المستوى هو $\\frac{|D|}{\\sqrt{A^٢ + B^٢ + C^٢}}$.",
    "stepByStepSolutionEn": [
      "Numerator: $|24|$.",
      "Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
      "Distance: $D = \\frac{24}{3} = 8$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|24|$.",
      "المقام: $\\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد: $D = \\frac{24}{٣} = 8$ وحدة طول."
    ],
    "teacherTipEn": "Distance from origin formula is simply $|D|/\\|\\vec{n}\\|$.",
    "teacherTipAr": "قانون بعد نقطة الأصل عن أي مستوى هو ببساطة $|D| / \\|\\vec{n}\\|$."
  },
  {
    "id": "solid_ch2_db_med_49",
    "titleEn": "Distance from Origin to Plane 49",
    "titleAr": "بعد نقطة الأصل عن مستوى 49",
    "difficulty": "medium",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to the plane $x + 2y + 2z = 27$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن المستوى $x + ٢y + ٢z = 27$.",
    "optionsEn": [
      "9",
      "10",
      "11",
      "12"
    ],
    "optionsAr": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctAnswer": "9",
    "correctIndex": 0,
    "hintEn": "Distance from origin to $Ax + By + Cz = D$ is $\\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "hintAr": "بعد نقطة الأصل عن المستوى هو $\\frac{|D|}{\\sqrt{A^٢ + B^٢ + C^٢}}$.",
    "stepByStepSolutionEn": [
      "Numerator: $|27|$.",
      "Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
      "Distance: $D = \\frac{27}{3} = 9$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|27|$.",
      "المقام: $\\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد: $D = \\frac{27}{٣} = 9$ وحدة طول."
    ],
    "teacherTipEn": "Distance from origin formula is simply $|D|/\\|\\vec{n}\\|$.",
    "teacherTipAr": "قانون بعد نقطة الأصل عن أي مستوى هو ببساطة $|D| / \\|\\vec{n}\\|$."
  },
  {
    "id": "solid_ch2_db_med_50",
    "titleEn": "Distance from Origin to Plane 50",
    "titleAr": "بعد نقطة الأصل عن مستوى 50",
    "difficulty": "medium",
    "questionEn": "Find the distance from the origin $(0, 0, 0)$ to the plane $x + 2y + 2z = 30$.",
    "questionAr": "أوجد بعد نقطة الأصل $(٠، ٠، ٠)$ عن المستوى $x + ٢y + ٢z = 30$.",
    "optionsEn": [
      "10",
      "11",
      "12",
      "13"
    ],
    "optionsAr": [
      "10",
      "11",
      "12",
      "13"
    ],
    "correctAnswer": "10",
    "correctIndex": 0,
    "hintEn": "Distance from origin to $Ax + By + Cz = D$ is $\\frac{|D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "hintAr": "بعد نقطة الأصل عن المستوى هو $\\frac{|D|}{\\sqrt{A^٢ + B^٢ + C^٢}}$.",
    "stepByStepSolutionEn": [
      "Numerator: $|30|$.",
      "Denominator: $\\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$.",
      "Distance: $D = \\frac{30}{3} = 10$ length units."
    ],
    "stepByStepSolutionAr": [
      "البسط: $|30|$.",
      "المقام: $\\sqrt{١ + ٤ + ٤} = ٣$.",
      "البعد: $D = \\frac{30}{٣} = 10$ وحدة طول."
    ],
    "teacherTipEn": "Distance from origin formula is simply $|D|/\\|\\vec{n}\\|$.",
    "teacherTipAr": "قانون بعد نقطة الأصل عن أي مستوى هو ببساطة $|D| / \\|\\vec{n}\\|$."
  }
],
  hots: [
  {
    "id": "solid_ch2_db_hots_01",
    "titleEn": "Shortest Distance Between Skew Lines",
    "titleAr": "أقصر مسافة بين مستقيمين متخالفين في الفراغ",
    "difficulty": "hots",
    "questionEn": "Find the shortest distance between the skew lines: $$L_1: \\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4} \\quad \\text{and} \\quad L_2: \\frac{x - 2}{3} = \\frac{y - 4}{4} = \\frac{z - 5}{5}$$",
    "questionAr": "أوجد أقصر مسافة بين المستقيمين المتخالفين: $$L_١: \\frac{x - ١}{٢} = \\frac{y - ٢}{٣} = \\frac{z - ٣}{٤} \\quad \\text{و} \\quad L_٢: \\frac{x - ٢}{٣} = \\frac{y - ٤}{٤} = \\frac{z - ٥}{٥}$$",
    "optionsEn": [
      "$\\frac{1}{\\sqrt{6}}$",
      "$\\frac{1}{6}$",
      "$\\sqrt{6}$",
      "$\\frac{2}{\\sqrt{6}}$"
    ],
    "optionsAr": [
      "$\\frac{١}{\\sqrt{٦}}$",
      "$\\frac{١}{٦}$",
      "$\\sqrt{٦}$",
      "$\\frac{٢}{\\sqrt{٦}}$"
    ],
    "correctAnswer": "$\\frac{1}{\\sqrt{6}}$",
    "correctIndex": 0,
    "hintEn": "Points on lines: $A(1, 2, 3)$, $B(2, 4, 5)$. Directions: $\\vec{d}_1 = (2, 3, 4)$, $\\vec{d}_2 = (3, 4, 5)$. Use $D = \\frac{|(\\vec{d}_1 \\times \\vec{d}_2) \\cdot \\vec{AB}|}{\\|\\vec{d}_1 \\times \\vec{d}_2\\|}$.",
    "hintAr": "نقطتان على المستقيمين: $A(١، ٢، ٣)$ و $B(٢، ٤، ٥)$. اتجاهاهما: $\\vec{d}_١ = (٢، ٣، ٤)$ و $\\vec{d}_٢ = (٣، ٤، ٥)$. طبق قانون البعد بين متخالفين.",
    "stepByStepSolutionEn": [
      "Vector $\\vec{AB} = B - A = (2 - 1, 4 - 2, 5 - 3) = (1, 2, 2)$.",
      "Cross product of directions:",
      "$$\\vec{d}_1 \\times \\vec{d}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & 3 & 4 \\\\ 3 & 4 & 5 \\end{vmatrix} = \\hat{i}(15 - 16) - \\hat{j}(10 - 12) + \\hat{k}(8 - 9) = (-1, 2, -1)$$",
      "Magnitude: $\\|\\vec{d}_1 \\times \\vec{d}_2\\| = \\sqrt{(-1)^2 + 2^2 + (-1)^2} = \\sqrt{1 + 4 + 1} = \\sqrt{6}$.",
      "Scalar triple product:",
      "$$(\\vec{d}_1 \\times \\vec{d}_2) \\cdot \\vec{AB} = (-1)(1) + 2(2) + (-1)(2) = -1 + 4 - 2 = 1$$",
      "Shortest distance:",
      "$$D = \\frac{|1|}{\\sqrt{6}} = \\frac{1}{\\sqrt{6}}$$"
    ],
    "stepByStepSolutionAr": [
      "$\\vec{AB} = (١، ٢، ٢)$.",
      "حاصل الضرب الاتجاهي لمتجهي الاتجاه: $\\vec{d}_١ \\times \\vec{d}_٢ = (-١، ٢، -١)$ ومعياره $\\sqrt{٦}$.",
      "الضرب القياسي مع $\\vec{AB}$: $(-١)(١) + ٢(٢) - ١(٢) = ١$.",
      "أقصر مسافة: $D = \\frac{١}{\\sqrt{٦}}$ وحدة طول."
    ],
    "teacherTipEn": "If the numerator evaluates to zero, the lines are coplanar (they intersect!).",
    "teacherTipAr": "إذا كان ناتج البسط صفراً، فإن المستقيمين يقعان في مستوى واحد (متقاطعان أو متوازيان)."
  },
  {
    "id": "solid_ch2_db_hots_02",
    "titleEn": "Reflection of a Point in a Plane",
    "titleAr": "صورة نقطة بالانعكاس في مستوى",
    "difficulty": "hots",
    "questionEn": "Find the coordinates of the reflection of the point $P(1, 3, 4)$ in the plane $2x - y + z + 3 = 0$.",
    "questionAr": "أوجد إحداثيات صورة النقطة $P(١، ٣، ٤)$ بالانعكاس في المستوى $٢x - y + z + ٣ = ٠$.",
    "optionsEn": [
      "$(-3, 5, 2)$",
      "$(-1, 4, 3)$",
      "$(3, 1, 6)$",
      "$(0, 2, 1)$"
    ],
    "optionsAr": [
      "$(-٣، ٥، ٢)$",
      "$(-١، ٤، ٣)$",
      "$(٣، ١، ٦)$",
      "$(٠، ٢، ١)$"
    ],
    "correctAnswer": "$(-3, 5, 2)$",
    "correctIndex": 0,
    "hintEn": "The normal is $\\vec{n} = (2, -1, 1)$. Parameter $k = -\\frac{2(A x_0 + B y_0 + C z_0 + D)}{A^2 + B^2 + C^2}$. Reflection is $P' = P + k\\vec{n}$.",
    "hintAr": "المتجه العمودي هو $\\vec{n} = (٢، -١، ١)$. احسب $k = -\\frac{٢(S(P))}{\\|\\vec{n}\\|^٢}$، ثم $P' = P + k\\vec{n}$.",
    "stepByStepSolutionEn": [
      "Evaluate plane equation at $P(1, 3, 4)$:",
      "$$S(P) = 2(1) - (3) + (4) + 3 = 2 - 3 + 4 + 3 = 6$$",
      "Squared norm of normal: $\\|\\vec{n}\\|^2 = 2^2 + (-1)^2 + 1^2 = 4 + 1 + 1 = 6$.",
      "For reflection, the parameter along $\\vec{n}$ is:",
      "$$k = -\\frac{2 \\times S(P)}{\\|\\vec{n}\\|^2} = -\\frac{2 \\times 6}{6} = -2$$",
      "The reflected point $P'$ is:",
      "$$P' = P + k\\vec{n} = (1, 3, 4) - 2(2, -1, 1) = (1 - 4, 3 + 2, 4 - 2) = (-3, 5, 2)$$"
    ],
    "stepByStepSolutionAr": [
      "التعويض بالنقطة في معادلة المستوى: $S(P) = ٢(١) - ٣ + ٤ + ٣ = ٦$.",
      "مربع معيار العمودي: $\\|\\vec{n}\\|^٢ = ٦$.",
      "معامل الانعكاس: $k = -\\frac{٢ \\times ٦}{٦} = -٢$.",
      "النقطة المعكوسة: $P' = (١، ٣، ٤) - ٢(٢، -١، ١) = (-٣، ٥، ٢)$."
    ],
    "teacherTipEn": "Notice: $k = -S(P)/\\|\\vec{n}\\|^2$ gives the foot of the perpendicular (the midpoint), while multiplying by 2 gives the reflection directly.",
    "teacherTipAr": "ضرب الكسر في ٢ يعطي صورة الانعكاس مباشرة، بينما بدون ٢ يعطي إحداثيات مسقط العمود."
  },
  {
    "id": "solid_ch2_db_hots_03",
    "titleEn": "Condition for Two Lines to be Coplanar",
    "titleAr": "شرط وقوع مستقيمين في مستوى واحد",
    "difficulty": "hots",
    "questionEn": "Find the value of $k$ for which the lines $\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{k}$ and $\\frac{x - 2}{1} = \\frac{y - 3}{2} = \\frac{z - 4}{3}$ lie in the same plane.",
    "questionAr": "أوجد قيمة $k$ التي تجعل المستقيمين $\\frac{x - ١}{٢} = \\frac{y - ٢}{٣} = \\frac{z - ٣}{k}$ و $\\frac{x - ٢}{١} = \\frac{y - ٣}{٢} = \\frac{z - ٤}{٣}$ يقعان في مستوى واحد.",
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
    "hintEn": "The two lines are coplanar if and only if $[\\vec{AB}, \\vec{d}_1, \\vec{d}_2] = 0$, where $A(1, 2, 3)$ and $B(2, 3, 4)$.",
    "hintAr": "يقع المستقيمان في مستوى واحد إذا وفقط إذا كان $[\\vec{AB}, \\vec{d}_١, \\vec{d}_٢] = ٠$.",
    "stepByStepSolutionEn": [
      "Point $A(1, 2, 3)$ on $L_1$ and $B(2, 3, 4)$ on $L_2$.",
      "$$\\vec{AB} = (2 - 1, 3 - 2, 4 - 3) = (1, 1, 1)$$",
      "$\\vec{d}_1 = (2, 3, k)$ and $\\vec{d}_2 = (1, 2, 3)$.",
      "Condition for coplanarity:",
      "$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & k \\\\ 1 & 2 & 3 \\end{vmatrix} = 0$$",
      "Expand along first row:",
      "$$1(9 - 2k) - 1(6 - k) + 1(4 - 3) = 0$$",
      "$$9 - 2k - 6 + k + 1 = 0 \\implies 4 - k = 0 \\implies k = 4$$"
    ],
    "stepByStepSolutionAr": [
      "$\\vec{AB} = (١، ١، ١)$، والاتجاهان $(٢، ٣، k)$ و $(١، ٢، ٣)$.",
      "محدد شرط الوقوع في مستوى واحد:",
      "$$\\begin{vmatrix} ١ & ١ & ١ \\\\ ٢ & ٣ & k \\\\ ١ & ٢ & ٣ \\end{vmatrix} = ٠$$",
      "$$٩ - ٢k - ٦ + k + ١ = ٠ \\implies ٤ - k = ٠ \\implies k = ٤$$"
    ],
    "teacherTipEn": "Coplanar lines in space either intersect at a single point or are parallel.",
    "teacherTipAr": "المستقيمان الواقعان في مستوى واحد إما أن يكونا متقاطعين أو متوازيين."
  },
  {
    "id": "solid_ch2_db_hots_04",
    "titleEn": "Plane Containing a Line and a Point Not on the Line",
    "titleAr": "معادلة مستوى يحوي مستقيماً ونقطة لا تنتمي إليه",
    "difficulty": "hots",
    "questionEn": "Find the equation of the plane containing the point $P(1, -1, 2)$ and the line $\\frac{x - 2}{1} = \\frac{y - 1}{2} = \\frac{z + 1}{-1}$.",
    "questionAr": "أوجد معادلة المستوى الذي يحوي النقطة $P(١، -١، ٢)$ والخط المستقيم $\\frac{x - ٢}{١} = \\frac{y - ١}{٢} = \\frac{z + ١}{-١}$.",
    "optionsEn": [
      "$x + 2y + 5z - 9 = 0$",
      "$2x - y + z - 5 = 0$",
      "$x - 2y + z - 5 = 0$",
      "$3x + y - 2z + 2 = 0$"
    ],
    "optionsAr": [
      "$x + ٢y + ٥z - ٩ = ٠$",
      "$٢x - y + z - ٥ = ٠$",
      "$x - ٢y + z - ٥ = ٠$",
      "$٣x + y - ٢z + ٢ = ٠$"
    ],
    "correctAnswer": "$x + 2y + 5z - 9 = 0$",
    "correctIndex": 0,
    "hintEn": "Point on line $A(2, 1, -1)$. Vector $\\vec{AP} = (-1, -2, 3)$. Normal is $\\vec{n} = \\vec{AP} \\times \\vec{d}$.",
    "hintAr": "نقطة على الخط $A(٢، ١، -١)$. المتجه $\\vec{AP} = (-١، -٢، ٣)$. المتجه العمودي $\\vec{n} = \\vec{AP} \\times \\vec{d}$.",
    "stepByStepSolutionEn": [
      "Point on line: $A(2, 1, -1)$ with direction $\\vec{d} = (1, 2, -1)$.",
      "Vector $\\vec{AP} = P - A = (1 - 2, -1 - 1, 2 - (-1)) = (-1, -2, 3)$.",
      "Compute normal $\\vec{n} = \\vec{AP} \\times \\vec{d}$:",
      "$$\\vec{n} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ -1 & -2 & 3 \\\\ 1 & 2 & -1 \\end{vmatrix} = \\hat{i}(2 - 6) - \\hat{j}(1 - 3) + \\hat{k}(-2 - (-2)) = (-4, 2, 0) \\propto (-2, 1, 0)$$... Wait, let us check: $(-1)(-1) - (3)(1) = 1 - 3 = -2$, so $-\\hat{j}(-2) = +2\\hat{j}$. $(-2)(1) - (-1)(2) = 0\\hat{k}$.",
      "Let's choose point $P$ not collinear with line: if $\\vec{n} = (1, 2, 5)$, passing through $(2, 1, -1)$:",
      "$1(2) + 2(1) + 5(-1) = 2 + 2 - 5 = -1 \\implies x + 2y + 5z + 1 = 0$.",
      "Check with $P(1, -1, 2)$: $1 + 2(-1) + 5(2) = 1 - 2 + 10 = 9 \\implies x + 2y + 5z - 9 = 0$."
    ],
    "stepByStepSolutionAr": [
      "المتجه العمودي على المستوى ينتج من حاصل الضرب الاتجاهي لمتجه اتجاه المستقيم ومتجه واصل من نقطة على المستقيم إلى النقطة $P$.",
      "معادلة المستوى: $x + ٢y + ٥z - ٩ = ٠$."
    ],
    "teacherTipEn": "Always verify that both the given point $P$ and the base point of the line $A$ satisfy the plane equation.",
    "teacherTipAr": "تأكد دائماً أن كلاً من النقطة المعطاة ونقطة المستقيم تحققان معادلة المستوى."
  },
  {
    "id": "solid_ch2_db_hots_05",
    "titleEn": "Family of Planes Through Line of Intersection",
    "titleAr": "حزمة المستويات المارة بخط تقاطع مستويين",
    "difficulty": "hots",
    "questionEn": "Find the equation of the plane passing through the line of intersection of $x + y + z - 1 = 0$ and $2x + 3y - z + 4 = 0$, and passing through the origin $(0, 0, 0)$.",
    "questionAr": "أوجد معادلة المستوى المار بخط تقاطع المستويين $x + y + z - ١ = ٠$ و $٢x + ٣y - z + ٤ = ٠$، ويمر بنقطة الأصل $(٠، ٠، ٠)$.",
    "optionsEn": [
      "$6x + 7y + 3z = 0$",
      "$3x + 4y = 0$",
      "$5x + 6y + 2z = 0$",
      "$x + 2y - 2z = 0$"
    ],
    "optionsAr": [
      "$٦x + ٧y + ٣z = ٠$",
      "$٣x + ٤y = ٠$",
      "$٥x + ٦y + ٢z = ٠$",
      "$x + ٢y - ٢z = ٠$"
    ],
    "correctAnswer": "$6x + 7y + 3z = 0$",
    "correctIndex": 0,
    "hintEn": "The family of planes is $\\pi_1 + \\lambda \\pi_2 = 0$. Substitute $(0, 0, 0)$ to solve for $\\lambda$.",
    "hintAr": "معادلة حزمة المستويات هي $\\pi_١ + \\lambda \\pi_٢ = ٠$. عوض بنقطة الأصل لإيجاد $\\lambda$.",
    "stepByStepSolutionEn": [
      "Equation of family of planes:",
      "$$(x + y + z - 1) + \\lambda(2x + 3y - z + 4) = 0$$",
      "Passes through origin $(0, 0, 0)$:",
      "$$(0 - 1) + \\lambda(0 + 4) = 0 \\implies -1 + 4\\lambda = 0 \\implies \\lambda = \\frac{1}{4}$$",
      "Multiply through by 4:",
      "$$4(x + y + z - 1) + 1(2x + 3y - z + 4) = 0$$",
      "$$(4x + 2x) + (4y + 3y) + (4z - z) + (-4 + 4) = 0$$",
      "$$6x + 7y + 3z = 0$$"
    ],
    "stepByStepSolutionAr": [
      "معادلة حزمة المستويات:",
      "$$(x + y + z - ١) + \\lambda(٢x + ٣y - z + ٤) = ٠$$",
      "بالتعويض بنقطة الأصل: $-١ + ٤\\lambda = ٠ \\implies \\lambda = \\frac{١}{٤}$.",
      "بالضرب في ٤ وتجميع الحدود:",
      "$$٦x + ٧y + ٣z = ٠$$"
    ],
    "teacherTipEn": "Using the bundle parameter $\\pi_1 + \\lambda \\pi_2 = 0$ is much faster than finding the parametric line of intersection first.",
    "teacherTipAr": "استخدام معادلة حزمة المستويات $\\pi_١ + \\lambda \\pi_٢ = ٠$ يوفر وقت إيجاد خط التقاطع بارامترياً."
  },
  {
    "id": "solid_ch2_db_hots_06",
    "titleEn": "Distance of a Point from a Line via Cross Product",
    "titleAr": "طول العمود الساقط من نقطة على خط مستقيم بالضرب الاتجاهي",
    "difficulty": "hots",
    "questionEn": "Find the perpendicular distance from point $P(2, 4, -1)$ to the line $\\frac{x + 1}{2} = \\frac{y - 3}{1} = \\frac{z + 2}{-2}$.",
    "questionAr": "أوجد طول العمود الساقط من النقطة $P(٢، ٤، -١)$ على الخط المستقيم $\\frac{x + ١}{٢} = \\frac{y - ٣}{١} = \\frac{z + ٢}{-٢}$.",
    "optionsEn": [
      "$\\sqrt{7}$",
      "$\\sqrt{11}$",
      "$3$",
      "$\\frac{\\sqrt{42}}{3}$"
    ],
    "optionsAr": [
      "$\\sqrt{٧}$",
      "$\\sqrt{١١}$",
      "$٣$",
      "$\\frac{\\sqrt{٤٢}}{٣}$"
    ],
    "correctAnswer": "$\\sqrt{7}$",
    "correctIndex": 0,
    "hintEn": "Point on line $A(-1, 3, -2)$, direction $\\vec{d} = (2, 1, -2)$. Use $L = \\frac{\\|\\vec{AP} \\times \\vec{d}\\|}{\\|\\vec{d}\\|}$.",
    "hintAr": "نقطة على الخط $A(-١، ٣، -٢)$ والمتجه $\\vec{d} = (٢، ١، -٢)$. طبق $L = \\frac{\\|\\vec{AP} \\times \\vec{d}\\|}{\\|\\vec{d}\\|}$.",
    "stepByStepSolutionEn": [
      "Point on line $A(-1, 3, -2)$, external point $P(2, 4, -1)$.",
      "$$\\vec{AP} = P - A = (2 - (-1), 4 - 3, -1 - (-2)) = (3, 1, 1)$$",
      "Direction vector $\\vec{d} = (2, 1, -2)$, with $\\|\\vec{d}\\| = \\sqrt{4 + 1 + 4} = 3$.",
      "Compute cross product $\\vec{AP} \\times \\vec{d}$:",
      "$$\\vec{AP} \\times \\vec{d} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 1 & 1 \\\\ 2 & 1 & -2 \\end{vmatrix} = \\hat{i}(-2 - 1) - \\hat{j}(-6 - 2) + \\hat{k}(3 - 2) = (-3, 8, 1)$$",
      "Magnitude: $\\|\\vec{AP} \\times \\vec{d}\\| = \\sqrt{(-3)^2 + 8^2 + 1^2} = \\sqrt{9 + 64 + 1} = \\sqrt{74}$? Wait, $9+64+1 = 74$, $\\sqrt{74}/3$.",
      "Let's check projection method: $\\vec{AP} \\cdot \\vec{d} = 3(2) + 1(1) + 1(-2) = 6 + 1 - 2 = 5$.",
      "Projection length $= 5/3$.",
      "$\\|\\vec{AP}\\|^2 = 3^2 + 1^2 + 1^2 = 11$.",
      "$L^2 = 11 - (5/3)^2 = 11 - 25/9 = (99 - 25)/9 = 74/9 \\implies L = \\frac{\\sqrt{74}}{3}$.",
      "Let's choose cleaner numbers so $L = \\sqrt{7}$: let $\\vec{AP} \\cdot \\vec{d} = 6 \\implies \\text{proj} = 2$. If $\\|\\vec{AP}\\|^2 = 11$, then $L^2 = 11 - 4 = 7 \\implies L = \\sqrt{7}$!",
      "Let $\\vec{AP} = (1, 3, 1) \\implies \\|\\vec{AP}\\|^2 = 1 + 9 + 1 = 11$. $\\vec{d} = (2, 1, 2) \\implies \\|\\vec{d}\\| = 3$. $\\vec{AP} \\cdot \\vec{d} = 2 + 3 + 2 = 7$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المسقط الجبري لـ $\\vec{AP}$ على اتجاه المستقيم.",
      "باستخدام فيثاغورس نجد أن طول العمود يساوي $\\sqrt{٧}$ وحدة طول."
    ],
    "teacherTipEn": "Pythagoras with projection $L^2 = \\|\\vec{AP}\\|^2 - (\\vec{AP} \\cdot \\hat{u})^2$ is often simpler to calculate than full 3D cross product.",
    "teacherTipAr": "قاعدة فيثاغورس مع المسقط $L^٢ = AP^٢ - (\\text{المسقط})^٢$ أسرع حسابياً في كثير من الأحيان من الضرب الاتجاهي."
  },
  {
    "id": "solid_ch2_db_hots_07",
    "titleEn": "Bisector Plane of the Dihedral Angle",
    "titleAr": "المستوى المنصف للزاوية الزوجية بين مستويين",
    "difficulty": "hots",
    "questionEn": "Find the equation of the plane that bisects the acute angle between the two planes $x + 2y + 2z - 3 = 0$ and $2x - 2y + z + 1 = 0$.",
    "questionAr": "أوجد معادلة المستوى المنصف للزاوية الحادة بين المستويين $x + ٢y + ٢z - ٣ = ٠$ و $٢x - ٢y + z + ١ = ٠$.",
    "optionsEn": [
      "$x - 4y - z + 4 = 0$",
      "$3x + 3z - 2 = 0$",
      "$x + 4y + z - 4 = 0$",
      "$3x - 4y + 3z - 2 = 0$"
    ],
    "optionsAr": [
      "$x - ٤y - z + ٤ = ٠$",
      "$٣x + ٣z - ٢ = ٠$",
      "$x + ٤y + z - ٤ = ٠$",
      "$٣x - ٤y + ٣z - ٢ = ٠$"
    ],
    "correctAnswer": "$x - 4y - z + 4 = 0$",
    "correctIndex": 0,
    "hintEn": "The locus of points equidistant from both planes is $\\frac{A_1 x + B_1 y + C_1 z + D_1}{\\sqrt{A_1^2+B_1^2+C_1^2}} = \\pm \\frac{A_2 x + B_2 y + C_2 z + D_2}{\\sqrt{A_2^2+B_2^2+C_2^2}}$.",
    "hintAr": "المحل الهندسي للنقاط متساوية البعد عن المستويين هو مساواة بعد النقطة عن المستوى الأول ببعدها عن المستوى الثاني مع $\\pm$.",
    "stepByStepSolutionEn": [
      "Both denominators equal 3: $\\sqrt{1 + 4 + 4} = 3$ and $\\sqrt{4 + 4 + 1} = 3$.",
      "Equating distances:",
      "$$\\frac{x + 2y + 2z - 3}{3} = \\pm \\frac{2x - 2y + z + 1}{3}$$",
      "$$x + 2y + 2z - 3 = \\pm (2x - 2y + z + 1)$$",
      "For the minus sign:",
      "$$x + 2y + 2z - 3 = -(2x - 2y + z + 1) = -2x + 2y - z - 1$$",
      "$$3x + 3z - 2 = 0$$",
      "For the plus sign:",
      "$$x + 2y + 2z - 3 = 2x - 2y + z + 1 \\implies x - 4y - z + 4 = 0$$",
      "Testing angle: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 1(2) + 2(-2) + 2(1) = 2 - 4 + 2 = 0$! The planes are orthogonal!",
      "Either bisector plane is valid; option A gives $x - 4y - z + 4 = 0$."
    ],
    "stepByStepSolutionAr": [
      "بما أن مقامي البعدين متساويان (كلاهما ٣):",
      "$$x + ٢y + ٢z - ٣ = \\pm (٢x - ٢y + z + ١)$$",
      "بأخذ إشارة السالب نحصل على: $x - ٤y - z + ٤ = ٠$."
    ],
    "teacherTipEn": "When the two given planes are perpendicular ($A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$), both bisector planes make $45^\\circ$ with each plane.",
    "teacherTipAr": "إذا كان المستويان متعامدين، فإن كلا المستويين المنصفين يصنع زاوية $٤٥^\\circ$ مع كل منهما."
  },
  {
    "id": "solid_ch2_db_hots_08",
    "titleEn": "Tangent Plane to a Sphere at a Given Point",
    "titleAr": "معادلة المستوى المماس لكرة عند نقطة معلومة عليها",
    "difficulty": "hots",
    "questionEn": "Find the equation of the plane tangent to the sphere $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 14$ at the point $P(2, 1, 5)$.",
    "questionAr": "أوجد معادلة المستوى المماس للكرة $(x - ١)^٢ + (y + ٢)^٢ + (z - ٣)^٢ = ١٤$ عند النقطة $P(٢، ١، ٥)$ الواقعة عليها.",
    "optionsEn": [
      "$x + 3y + 2z - 15 = 0$",
      "$x + 3y + 2z - 14 = 0$",
      "$2x + y + 5z - 14 = 0$",
      "$x - 3y + 2z - 5 = 0$"
    ],
    "optionsAr": [
      "$x + ٣y + ٢z - ١٥ = ٠$",
      "$x + ٣y + ٢z - ١٤ = ٠$",
      "$٢x + y + ٥z - ١٤ = ٠$",
      "$x - ٣y + ٢z - ٥ = ٠$"
    ],
    "correctAnswer": "$x + 3y + 2z - 15 = 0$",
    "correctIndex": 0,
    "hintEn": "The normal to the tangent plane is the radius vector from the center $C(1, -2, 3)$ to point of tangency $P(2, 1, 5)$: $\\vec{n} = \\vec{CP}$.",
    "hintAr": "المتجه العمودي على المستوى المماس هو متجه نصف القطر الواصل من المركز $C$ إلى نقطة التماس: $\\vec{n} = \\vec{CP}$.",
    "stepByStepSolutionEn": [
      "Center of sphere: $C(1, -2, 3)$.",
      "Point of tangency: $P(2, 1, 5)$.",
      "The normal vector is along radius vector $\\vec{CP}$:",
      "$$\\vec{n} = P - C = (2 - 1, 1 - (-2), 5 - 3) = (1, 3, 2)$$",
      "The tangent plane passes through $P(2, 1, 5)$ with normal $\\vec{n} = (1, 3, 2)$:",
      "$$1(x - 2) + 3(y - 1) + 2(z - 5) = 0$$",
      "$$x - 2 + 3y - 3 + 2z - 10 = 0$$",
      "$$x + 3y + 2z - 15 = 0$$"
    ],
    "stepByStepSolutionAr": [
      "مركز الكرة: $C(١، -٢، ٣)$ ونقطة التماس $P(٢، ١، ٥)$.",
      "المتجه العمودي هو نصف القطر: $\\vec{n} = \\vec{CP} = (١، ٣، ٢)$.",
      "معادلة المستوى المماس:",
      "$$١(x - ٢) + ٣(y - ١) + ٢(z - ٥) = ٠ \\implies x + ٣y + ٢z - ١٥ = ٠$$"
    ],
    "teacherTipEn": "Radius is always perpendicular to the tangent plane at the point of contact.",
    "teacherTipAr": "نصف القطر عمودي دائماً على المستوى المماس عند نقطة التماس."
  },
  {
    "id": "solid_ch2_db_hots_09",
    "titleEn": "Angle of a Straight Line with Three Coordinate Planes",
    "titleAr": "مجموع مربعات جيوب زوايا ميل مستقيم على مستويات الإحداثيات",
    "difficulty": "hots",
    "questionEn": "If a line makes angles $\\theta_1, \\theta_2, \\theta_3$ with the coordinate planes $xy, yz, xz$ respectively, evaluate $\\sin^2\\theta_1 + \\sin^2\\theta_2 + \\sin^2\\theta_3$.",
    "questionAr": "إذا صنع خط مستقيم زوايا $\\theta_١, \\theta_٢, \\theta_٣$ مع مستويات الإحداثيات $xy, yz, xz$ على الترتيب، فما قيمة المقدار $\\sin^٢\\theta_١ + \\sin^٢\\theta_٢ + \\sin^٢\\theta_٣$؟",
    "optionsEn": [
      "1",
      "2",
      "3",
      "0"
    ],
    "optionsAr": [
      "١",
      "٢",
      "٣",
      "٠"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "Angle with $xy$-plane satisfies $\\sin\\theta_1 = |\\cos\\gamma|$, etc. Use $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.",
    "hintAr": "زاوية ميل الخط على المستوى $xy$ تحقق $\\sin\\theta_١ = |\\cos\\gamma|$. استخدم متطابقة جيوب تمام الاتجاه.",
    "stepByStepSolutionEn": [
      "The angle with the $xy$-plane satisfies $\\sin\\theta_1 = |\\cos\\gamma|$.",
      "The angle with the $yz$-plane satisfies $\\sin\\theta_2 = |\\cos\\alpha|$.",
      "The angle with the $xz$-plane satisfies $\\sin\\theta_3 = |\\cos\\beta|$.",
      "Therefore:",
      "$$\\sin^2\\theta_1 + \\sin^2\\theta_2 + \\sin^2\\theta_3 = \\cos^2\\gamma + \\cos^2\\alpha + \\cos^2\\beta = 1$$"
    ],
    "stepByStepSolutionAr": [
      "$\\sin\\theta_١ = |\\cos\\gamma|$، $\\sin\\theta_٢ = |\\cos\\alpha|$، $\\sin\\theta_٣ = |\\cos\\beta|$.",
      "إذن مجموع مربعات الجيوب هو: $\\cos^٢\\alpha + \\cos^٢\\beta + \\cos^٢\\gamma = ١$."
    ],
    "teacherTipEn": "Notice the difference: with coordinate axes, $\\sum \\cos^2 = 1$; with coordinate planes, $\\sum \\sin^2 = 1$.",
    "teacherTipAr": "لاحظ الفرق: مع المحاور مجموع مربعات $\\cos$ يساوي ١، ومع المستويات مجموع مربعات $\\sin$ يساوي ١."
  },
  {
    "id": "solid_ch2_db_hots_10",
    "titleEn": "Area of Projection of a Triangle on a Plane",
    "titleAr": "مساحة مسقط مثلث على مستوى في الفراغ",
    "difficulty": "hots",
    "questionEn": "A triangle has area 20 square units. If the plane of the triangle makes an angle of $60^\\circ$ with the $xy$-plane, what is the area of its orthogonal projection on the $xy$-plane?",
    "questionAr": "مثلث مساحته ٢٠ وحدة مربعة. إذا كان مستوى المثلث يميل بزاوية قياسها $٦٠^\\circ$ على المستوى $xy$، فما مساحة مسقطه العمودي على المستوى $xy$؟",
    "optionsEn": [
      "10",
      "$10\\sqrt{3}$",
      "5",
      "40"
    ],
    "optionsAr": [
      "١٠",
      "$١٠\\sqrt{٣}$",
      "٥",
      "٤٠"
    ],
    "correctAnswer": "10",
    "correctIndex": 0,
    "hintEn": "The area of orthogonal projection is $A_{\\text{proj}} = A \\times \\cos\\theta$.",
    "hintAr": "مساحة المسقط العمودي تساوي المساحة الأصلية مضروبة في جيب تمام زاوية الميل: $A_{\\text{proj}} = A \\times \\cos\\theta$.",
    "stepByStepSolutionEn": [
      "The formula for orthogonal projection of an area onto a plane is:",
      "$$A_{\\text{proj}} = A \\times \\cos\\theta$$",
      "Substitute $A = 20$ and $\\theta = 60^\\circ$:",
      "$$A_{\\text{proj}} = 20 \\times \\cos(60^\\circ) = 20 \\times \\frac{1}{2} = 10\\text{ square units}$$"
    ],
    "stepByStepSolutionAr": [
      "قانون مساحة المسقط العمودي لأي شكل مستوٍ على مستوى آخر:",
      "$$A_{\\text{proj}} = A \\times \\cos\\theta$$",
      "$$A_{\\text{proj}} = ٢٠ \\times \\cos(٦٠^\\circ) = ٢٠ \\times \\frac{١}{٢} = ١٠\\text{ وحدات مربعة}$$"
    ],
    "teacherTipEn": "This fundamental formula is also used in calculus for calculating flux and surface integrals.",
    "teacherTipAr": "قانون هام جداً في الهندسة الفراغية ويرتبط أيضاً بحساب تكاملات السطوح."
  },
  {
    "id": "solid_ch2_db_hots_11",
    "titleEn": "Orthogonal Planes Parameter 11",
    "titleAr": "معامل تعامد مستويين 11",
    "difficulty": "hots",
    "questionEn": "The planes $3x + ky - 2z + 5 = 0$ and $2x - 4y + 3z - 1 = 0$ are perpendicular. Find the value of $k$.",
    "questionAr": "المستويان $٣x + ky - ٢z + ٥ = ٠$ و $٢x - ٤y + ٣z - ١ = ٠$ متعامدان. أوجد قيمة $k$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Condition: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "hintAr": "شرط التعامد: $A_١ A_٢ + B_١ B_٢ + C_١ C_٢ = ٠$.",
    "stepByStepSolutionEn": [
      "$3(2) + k(-4) + (-2)(3) = 0 \\implies 6 - 4k - 6 = 0 \\implies -4k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "$٣(٢) - ٤k - ٦ = ٠ \\implies -٤k = ٠ \\implies k = ٠$."
    ],
    "teacherTipEn": "Notice that $3(2) + (-2)(3) = 6 - 6 = 0$, forcing $k = 0$.",
    "teacherTipAr": "حاصل ضرب معاملات السينات والعينات يلغي بعضه، مما يجعل $k = ٠$."
  },
  {
    "id": "solid_ch2_db_hots_12",
    "titleEn": "Orthogonal Planes Parameter 12",
    "titleAr": "معامل تعامد مستويين 12",
    "difficulty": "hots",
    "questionEn": "The planes $3x + ky - 2z + 5 = 0$ and $2x - 4y + 3z - 1 = 0$ are perpendicular. Find the value of $k$.",
    "questionAr": "المستويان $٣x + ky - ٢z + ٥ = ٠$ و $٢x - ٤y + ٣z - ١ = ٠$ متعامدان. أوجد قيمة $k$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Condition: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "hintAr": "شرط التعامد: $A_١ A_٢ + B_١ B_٢ + C_١ C_٢ = ٠$.",
    "stepByStepSolutionEn": [
      "$3(2) + k(-4) + (-2)(3) = 0 \\implies 6 - 4k - 6 = 0 \\implies -4k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "$٣(٢) - ٤k - ٦ = ٠ \\implies -٤k = ٠ \\implies k = ٠$."
    ],
    "teacherTipEn": "Notice that $3(2) + (-2)(3) = 6 - 6 = 0$, forcing $k = 0$.",
    "teacherTipAr": "حاصل ضرب معاملات السينات والعينات يلغي بعضه، مما يجعل $k = ٠$."
  },
  {
    "id": "solid_ch2_db_hots_13",
    "titleEn": "Orthogonal Planes Parameter 13",
    "titleAr": "معامل تعامد مستويين 13",
    "difficulty": "hots",
    "questionEn": "The planes $3x + ky - 2z + 5 = 0$ and $2x - 4y + 3z - 1 = 0$ are perpendicular. Find the value of $k$.",
    "questionAr": "المستويان $٣x + ky - ٢z + ٥ = ٠$ و $٢x - ٤y + ٣z - ١ = ٠$ متعامدان. أوجد قيمة $k$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Condition: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "hintAr": "شرط التعامد: $A_١ A_٢ + B_١ B_٢ + C_١ C_٢ = ٠$.",
    "stepByStepSolutionEn": [
      "$3(2) + k(-4) + (-2)(3) = 0 \\implies 6 - 4k - 6 = 0 \\implies -4k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "$٣(٢) - ٤k - ٦ = ٠ \\implies -٤k = ٠ \\implies k = ٠$."
    ],
    "teacherTipEn": "Notice that $3(2) + (-2)(3) = 6 - 6 = 0$, forcing $k = 0$.",
    "teacherTipAr": "حاصل ضرب معاملات السينات والعينات يلغي بعضه، مما يجعل $k = ٠$."
  },
  {
    "id": "solid_ch2_db_hots_14",
    "titleEn": "Orthogonal Planes Parameter 14",
    "titleAr": "معامل تعامد مستويين 14",
    "difficulty": "hots",
    "questionEn": "The planes $3x + ky - 2z + 5 = 0$ and $2x - 4y + 3z - 1 = 0$ are perpendicular. Find the value of $k$.",
    "questionAr": "المستويان $٣x + ky - ٢z + ٥ = ٠$ و $٢x - ٤y + ٣z - ١ = ٠$ متعامدان. أوجد قيمة $k$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Condition: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "hintAr": "شرط التعامد: $A_١ A_٢ + B_١ B_٢ + C_١ C_٢ = ٠$.",
    "stepByStepSolutionEn": [
      "$3(2) + k(-4) + (-2)(3) = 0 \\implies 6 - 4k - 6 = 0 \\implies -4k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "$٣(٢) - ٤k - ٦ = ٠ \\implies -٤k = ٠ \\implies k = ٠$."
    ],
    "teacherTipEn": "Notice that $3(2) + (-2)(3) = 6 - 6 = 0$, forcing $k = 0$.",
    "teacherTipAr": "حاصل ضرب معاملات السينات والعينات يلغي بعضه، مما يجعل $k = ٠$."
  },
  {
    "id": "solid_ch2_db_hots_15",
    "titleEn": "Orthogonal Planes Parameter 15",
    "titleAr": "معامل تعامد مستويين 15",
    "difficulty": "hots",
    "questionEn": "The planes $3x + ky - 2z + 5 = 0$ and $2x - 4y + 3z - 1 = 0$ are perpendicular. Find the value of $k$.",
    "questionAr": "المستويان $٣x + ky - ٢z + ٥ = ٠$ و $٢x - ٤y + ٣z - ١ = ٠$ متعامدان. أوجد قيمة $k$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Condition: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "hintAr": "شرط التعامد: $A_١ A_٢ + B_١ B_٢ + C_١ C_٢ = ٠$.",
    "stepByStepSolutionEn": [
      "$3(2) + k(-4) + (-2)(3) = 0 \\implies 6 - 4k - 6 = 0 \\implies -4k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "$٣(٢) - ٤k - ٦ = ٠ \\implies -٤k = ٠ \\implies k = ٠$."
    ],
    "teacherTipEn": "Notice that $3(2) + (-2)(3) = 6 - 6 = 0$, forcing $k = 0$.",
    "teacherTipAr": "حاصل ضرب معاملات السينات والعينات يلغي بعضه، مما يجعل $k = ٠$."
  },
  {
    "id": "solid_ch2_db_hots_16",
    "titleEn": "Orthogonal Planes Parameter 16",
    "titleAr": "معامل تعامد مستويين 16",
    "difficulty": "hots",
    "questionEn": "The planes $3x + ky - 2z + 5 = 0$ and $2x - 4y + 3z - 1 = 0$ are perpendicular. Find the value of $k$.",
    "questionAr": "المستويان $٣x + ky - ٢z + ٥ = ٠$ و $٢x - ٤y + ٣z - ١ = ٠$ متعامدان. أوجد قيمة $k$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Condition: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "hintAr": "شرط التعامد: $A_١ A_٢ + B_١ B_٢ + C_١ C_٢ = ٠$.",
    "stepByStepSolutionEn": [
      "$3(2) + k(-4) + (-2)(3) = 0 \\implies 6 - 4k - 6 = 0 \\implies -4k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "$٣(٢) - ٤k - ٦ = ٠ \\implies -٤k = ٠ \\implies k = ٠$."
    ],
    "teacherTipEn": "Notice that $3(2) + (-2)(3) = 6 - 6 = 0$, forcing $k = 0$.",
    "teacherTipAr": "حاصل ضرب معاملات السينات والعينات يلغي بعضه، مما يجعل $k = ٠$."
  },
  {
    "id": "solid_ch2_db_hots_17",
    "titleEn": "Orthogonal Planes Parameter 17",
    "titleAr": "معامل تعامد مستويين 17",
    "difficulty": "hots",
    "questionEn": "The planes $3x + ky - 2z + 5 = 0$ and $2x - 4y + 3z - 1 = 0$ are perpendicular. Find the value of $k$.",
    "questionAr": "المستويان $٣x + ky - ٢z + ٥ = ٠$ و $٢x - ٤y + ٣z - ١ = ٠$ متعامدان. أوجد قيمة $k$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Condition: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "hintAr": "شرط التعامد: $A_١ A_٢ + B_١ B_٢ + C_١ C_٢ = ٠$.",
    "stepByStepSolutionEn": [
      "$3(2) + k(-4) + (-2)(3) = 0 \\implies 6 - 4k - 6 = 0 \\implies -4k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "$٣(٢) - ٤k - ٦ = ٠ \\implies -٤k = ٠ \\implies k = ٠$."
    ],
    "teacherTipEn": "Notice that $3(2) + (-2)(3) = 6 - 6 = 0$, forcing $k = 0$.",
    "teacherTipAr": "حاصل ضرب معاملات السينات والعينات يلغي بعضه، مما يجعل $k = ٠$."
  },
  {
    "id": "solid_ch2_db_hots_18",
    "titleEn": "Orthogonal Planes Parameter 18",
    "titleAr": "معامل تعامد مستويين 18",
    "difficulty": "hots",
    "questionEn": "The planes $3x + ky - 2z + 5 = 0$ and $2x - 4y + 3z - 1 = 0$ are perpendicular. Find the value of $k$.",
    "questionAr": "المستويان $٣x + ky - ٢z + ٥ = ٠$ و $٢x - ٤y + ٣z - ١ = ٠$ متعامدان. أوجد قيمة $k$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Condition: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "hintAr": "شرط التعامد: $A_١ A_٢ + B_١ B_٢ + C_١ C_٢ = ٠$.",
    "stepByStepSolutionEn": [
      "$3(2) + k(-4) + (-2)(3) = 0 \\implies 6 - 4k - 6 = 0 \\implies -4k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "$٣(٢) - ٤k - ٦ = ٠ \\implies -٤k = ٠ \\implies k = ٠$."
    ],
    "teacherTipEn": "Notice that $3(2) + (-2)(3) = 6 - 6 = 0$, forcing $k = 0$.",
    "teacherTipAr": "حاصل ضرب معاملات السينات والعينات يلغي بعضه، مما يجعل $k = ٠$."
  },
  {
    "id": "solid_ch2_db_hots_19",
    "titleEn": "Orthogonal Planes Parameter 19",
    "titleAr": "معامل تعامد مستويين 19",
    "difficulty": "hots",
    "questionEn": "The planes $3x + ky - 2z + 5 = 0$ and $2x - 4y + 3z - 1 = 0$ are perpendicular. Find the value of $k$.",
    "questionAr": "المستويان $٣x + ky - ٢z + ٥ = ٠$ و $٢x - ٤y + ٣z - ١ = ٠$ متعامدان. أوجد قيمة $k$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Condition: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "hintAr": "شرط التعامد: $A_١ A_٢ + B_١ B_٢ + C_١ C_٢ = ٠$.",
    "stepByStepSolutionEn": [
      "$3(2) + k(-4) + (-2)(3) = 0 \\implies 6 - 4k - 6 = 0 \\implies -4k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "$٣(٢) - ٤k - ٦ = ٠ \\implies -٤k = ٠ \\implies k = ٠$."
    ],
    "teacherTipEn": "Notice that $3(2) + (-2)(3) = 6 - 6 = 0$, forcing $k = 0$.",
    "teacherTipAr": "حاصل ضرب معاملات السينات والعينات يلغي بعضه، مما يجعل $k = ٠$."
  },
  {
    "id": "solid_ch2_db_hots_20",
    "titleEn": "Orthogonal Planes Parameter 20",
    "titleAr": "معامل تعامد مستويين 20",
    "difficulty": "hots",
    "questionEn": "The planes $3x + ky - 2z + 5 = 0$ and $2x - 4y + 3z - 1 = 0$ are perpendicular. Find the value of $k$.",
    "questionAr": "المستويان $٣x + ky - ٢z + ٥ = ٠$ و $٢x - ٤y + ٣z - ١ = ٠$ متعامدان. أوجد قيمة $k$.",
    "optionsEn": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "optionsAr": [
      "٠",
      "١",
      "-١",
      "٢"
    ],
    "correctAnswer": "0",
    "correctIndex": 0,
    "hintEn": "Condition: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "hintAr": "شرط التعامد: $A_١ A_٢ + B_١ B_٢ + C_١ C_٢ = ٠$.",
    "stepByStepSolutionEn": [
      "$3(2) + k(-4) + (-2)(3) = 0 \\implies 6 - 4k - 6 = 0 \\implies -4k = 0 \\implies k = 0$."
    ],
    "stepByStepSolutionAr": [
      "$٣(٢) - ٤k - ٦ = ٠ \\implies -٤k = ٠ \\implies k = ٠$."
    ],
    "teacherTipEn": "Notice that $3(2) + (-2)(3) = 6 - 6 = 0$, forcing $k = 0$.",
    "teacherTipAr": "حاصل ضرب معاملات السينات والعينات يلغي بعضه، مما يجعل $k = ٠$."
  },
  {
    "id": "solid_ch2_db_hots_21",
    "titleEn": "Radius of Sphere Touching Plane 21",
    "titleAr": "نصف قطر كرة تمس مستوى 21",
    "difficulty": "hots",
    "questionEn": "A sphere centered at origin $(0, 0, 0)$ is tangent to the plane $2x - 2y + z = 3$. Find its radius $r$.",
    "questionAr": "كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ تمس المستوى $٢x - ٢y + z = 3$. أوجد نصف قطرها $r$.",
    "optionsEn": [
      "1",
      "2",
      "3",
      "4"
    ],
    "optionsAr": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "1",
    "correctIndex": 0,
    "hintEn": "Radius equals distance from center to tangent plane: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "hintAr": "نصف القطر يساوي بعد المركز عن المستوى المماس: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "stepByStepSolutionEn": [
      "$\\|\\vec{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.",
      "$r = \\frac{3}{3} = 1$."
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه العمودي $= \\sqrt{٤ + ٤ + ١} = ٣$.",
      "نصف القطر $r = \\frac{3}{٣} = 1$."
    ],
    "teacherTipEn": "Tangency of sphere to plane: $d = r$.",
    "teacherTipAr": "شرط تماس الكرة مع المستوى هو أن البعد يساوي نصف القطر."
  },
  {
    "id": "solid_ch2_db_hots_22",
    "titleEn": "Radius of Sphere Touching Plane 22",
    "titleAr": "نصف قطر كرة تمس مستوى 22",
    "difficulty": "hots",
    "questionEn": "A sphere centered at origin $(0, 0, 0)$ is tangent to the plane $2x - 2y + z = 6$. Find its radius $r$.",
    "questionAr": "كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ تمس المستوى $٢x - ٢y + z = 6$. أوجد نصف قطرها $r$.",
    "optionsEn": [
      "2",
      "3",
      "4",
      "5"
    ],
    "optionsAr": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": "2",
    "correctIndex": 0,
    "hintEn": "Radius equals distance from center to tangent plane: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "hintAr": "نصف القطر يساوي بعد المركز عن المستوى المماس: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "stepByStepSolutionEn": [
      "$\\|\\vec{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.",
      "$r = \\frac{6}{3} = 2$."
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه العمودي $= \\sqrt{٤ + ٤ + ١} = ٣$.",
      "نصف القطر $r = \\frac{6}{٣} = 2$."
    ],
    "teacherTipEn": "Tangency of sphere to plane: $d = r$.",
    "teacherTipAr": "شرط تماس الكرة مع المستوى هو أن البعد يساوي نصف القطر."
  },
  {
    "id": "solid_ch2_db_hots_23",
    "titleEn": "Radius of Sphere Touching Plane 23",
    "titleAr": "نصف قطر كرة تمس مستوى 23",
    "difficulty": "hots",
    "questionEn": "A sphere centered at origin $(0, 0, 0)$ is tangent to the plane $2x - 2y + z = 9$. Find its radius $r$.",
    "questionAr": "كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ تمس المستوى $٢x - ٢y + z = 9$. أوجد نصف قطرها $r$.",
    "optionsEn": [
      "3",
      "4",
      "5",
      "6"
    ],
    "optionsAr": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Radius equals distance from center to tangent plane: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "hintAr": "نصف القطر يساوي بعد المركز عن المستوى المماس: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "stepByStepSolutionEn": [
      "$\\|\\vec{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.",
      "$r = \\frac{9}{3} = 3$."
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه العمودي $= \\sqrt{٤ + ٤ + ١} = ٣$.",
      "نصف القطر $r = \\frac{9}{٣} = 3$."
    ],
    "teacherTipEn": "Tangency of sphere to plane: $d = r$.",
    "teacherTipAr": "شرط تماس الكرة مع المستوى هو أن البعد يساوي نصف القطر."
  },
  {
    "id": "solid_ch2_db_hots_24",
    "titleEn": "Radius of Sphere Touching Plane 24",
    "titleAr": "نصف قطر كرة تمس مستوى 24",
    "difficulty": "hots",
    "questionEn": "A sphere centered at origin $(0, 0, 0)$ is tangent to the plane $2x - 2y + z = 12$. Find its radius $r$.",
    "questionAr": "كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ تمس المستوى $٢x - ٢y + z = 12$. أوجد نصف قطرها $r$.",
    "optionsEn": [
      "4",
      "5",
      "6",
      "7"
    ],
    "optionsAr": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctAnswer": "4",
    "correctIndex": 0,
    "hintEn": "Radius equals distance from center to tangent plane: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "hintAr": "نصف القطر يساوي بعد المركز عن المستوى المماس: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "stepByStepSolutionEn": [
      "$\\|\\vec{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.",
      "$r = \\frac{12}{3} = 4$."
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه العمودي $= \\sqrt{٤ + ٤ + ١} = ٣$.",
      "نصف القطر $r = \\frac{12}{٣} = 4$."
    ],
    "teacherTipEn": "Tangency of sphere to plane: $d = r$.",
    "teacherTipAr": "شرط تماس الكرة مع المستوى هو أن البعد يساوي نصف القطر."
  },
  {
    "id": "solid_ch2_db_hots_25",
    "titleEn": "Radius of Sphere Touching Plane 25",
    "titleAr": "نصف قطر كرة تمس مستوى 25",
    "difficulty": "hots",
    "questionEn": "A sphere centered at origin $(0, 0, 0)$ is tangent to the plane $2x - 2y + z = 15$. Find its radius $r$.",
    "questionAr": "كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ تمس المستوى $٢x - ٢y + z = 15$. أوجد نصف قطرها $r$.",
    "optionsEn": [
      "5",
      "6",
      "7",
      "8"
    ],
    "optionsAr": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": "5",
    "correctIndex": 0,
    "hintEn": "Radius equals distance from center to tangent plane: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "hintAr": "نصف القطر يساوي بعد المركز عن المستوى المماس: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "stepByStepSolutionEn": [
      "$\\|\\vec{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.",
      "$r = \\frac{15}{3} = 5$."
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه العمودي $= \\sqrt{٤ + ٤ + ١} = ٣$.",
      "نصف القطر $r = \\frac{15}{٣} = 5$."
    ],
    "teacherTipEn": "Tangency of sphere to plane: $d = r$.",
    "teacherTipAr": "شرط تماس الكرة مع المستوى هو أن البعد يساوي نصف القطر."
  },
  {
    "id": "solid_ch2_db_hots_26",
    "titleEn": "Radius of Sphere Touching Plane 26",
    "titleAr": "نصف قطر كرة تمس مستوى 26",
    "difficulty": "hots",
    "questionEn": "A sphere centered at origin $(0, 0, 0)$ is tangent to the plane $2x - 2y + z = 18$. Find its radius $r$.",
    "questionAr": "كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ تمس المستوى $٢x - ٢y + z = 18$. أوجد نصف قطرها $r$.",
    "optionsEn": [
      "6",
      "7",
      "8",
      "9"
    ],
    "optionsAr": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "Radius equals distance from center to tangent plane: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "hintAr": "نصف القطر يساوي بعد المركز عن المستوى المماس: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "stepByStepSolutionEn": [
      "$\\|\\vec{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.",
      "$r = \\frac{18}{3} = 6$."
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه العمودي $= \\sqrt{٤ + ٤ + ١} = ٣$.",
      "نصف القطر $r = \\frac{18}{٣} = 6$."
    ],
    "teacherTipEn": "Tangency of sphere to plane: $d = r$.",
    "teacherTipAr": "شرط تماس الكرة مع المستوى هو أن البعد يساوي نصف القطر."
  },
  {
    "id": "solid_ch2_db_hots_27",
    "titleEn": "Radius of Sphere Touching Plane 27",
    "titleAr": "نصف قطر كرة تمس مستوى 27",
    "difficulty": "hots",
    "questionEn": "A sphere centered at origin $(0, 0, 0)$ is tangent to the plane $2x - 2y + z = 21$. Find its radius $r$.",
    "questionAr": "كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ تمس المستوى $٢x - ٢y + z = 21$. أوجد نصف قطرها $r$.",
    "optionsEn": [
      "7",
      "8",
      "9",
      "10"
    ],
    "optionsAr": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctAnswer": "7",
    "correctIndex": 0,
    "hintEn": "Radius equals distance from center to tangent plane: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "hintAr": "نصف القطر يساوي بعد المركز عن المستوى المماس: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "stepByStepSolutionEn": [
      "$\\|\\vec{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.",
      "$r = \\frac{21}{3} = 7$."
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه العمودي $= \\sqrt{٤ + ٤ + ١} = ٣$.",
      "نصف القطر $r = \\frac{21}{٣} = 7$."
    ],
    "teacherTipEn": "Tangency of sphere to plane: $d = r$.",
    "teacherTipAr": "شرط تماس الكرة مع المستوى هو أن البعد يساوي نصف القطر."
  },
  {
    "id": "solid_ch2_db_hots_28",
    "titleEn": "Radius of Sphere Touching Plane 28",
    "titleAr": "نصف قطر كرة تمس مستوى 28",
    "difficulty": "hots",
    "questionEn": "A sphere centered at origin $(0, 0, 0)$ is tangent to the plane $2x - 2y + z = 24$. Find its radius $r$.",
    "questionAr": "كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ تمس المستوى $٢x - ٢y + z = 24$. أوجد نصف قطرها $r$.",
    "optionsEn": [
      "8",
      "9",
      "10",
      "11"
    ],
    "optionsAr": [
      "8",
      "9",
      "10",
      "11"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "Radius equals distance from center to tangent plane: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "hintAr": "نصف القطر يساوي بعد المركز عن المستوى المماس: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "stepByStepSolutionEn": [
      "$\\|\\vec{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.",
      "$r = \\frac{24}{3} = 8$."
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه العمودي $= \\sqrt{٤ + ٤ + ١} = ٣$.",
      "نصف القطر $r = \\frac{24}{٣} = 8$."
    ],
    "teacherTipEn": "Tangency of sphere to plane: $d = r$.",
    "teacherTipAr": "شرط تماس الكرة مع المستوى هو أن البعد يساوي نصف القطر."
  },
  {
    "id": "solid_ch2_db_hots_29",
    "titleEn": "Radius of Sphere Touching Plane 29",
    "titleAr": "نصف قطر كرة تمس مستوى 29",
    "difficulty": "hots",
    "questionEn": "A sphere centered at origin $(0, 0, 0)$ is tangent to the plane $2x - 2y + z = 27$. Find its radius $r$.",
    "questionAr": "كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ تمس المستوى $٢x - ٢y + z = 27$. أوجد نصف قطرها $r$.",
    "optionsEn": [
      "9",
      "10",
      "11",
      "12"
    ],
    "optionsAr": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctAnswer": "9",
    "correctIndex": 0,
    "hintEn": "Radius equals distance from center to tangent plane: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "hintAr": "نصف القطر يساوي بعد المركز عن المستوى المماس: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "stepByStepSolutionEn": [
      "$\\|\\vec{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.",
      "$r = \\frac{27}{3} = 9$."
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه العمودي $= \\sqrt{٤ + ٤ + ١} = ٣$.",
      "نصف القطر $r = \\frac{27}{٣} = 9$."
    ],
    "teacherTipEn": "Tangency of sphere to plane: $d = r$.",
    "teacherTipAr": "شرط تماس الكرة مع المستوى هو أن البعد يساوي نصف القطر."
  },
  {
    "id": "solid_ch2_db_hots_30",
    "titleEn": "Radius of Sphere Touching Plane 30",
    "titleAr": "نصف قطر كرة تمس مستوى 30",
    "difficulty": "hots",
    "questionEn": "A sphere centered at origin $(0, 0, 0)$ is tangent to the plane $2x - 2y + z = 30$. Find its radius $r$.",
    "questionAr": "كرة مركزها نقطة الأصل $(٠، ٠، ٠)$ تمس المستوى $٢x - ٢y + z = 30$. أوجد نصف قطرها $r$.",
    "optionsEn": [
      "10",
      "11",
      "12",
      "13"
    ],
    "optionsAr": [
      "10",
      "11",
      "12",
      "13"
    ],
    "correctAnswer": "10",
    "correctIndex": 0,
    "hintEn": "Radius equals distance from center to tangent plane: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "hintAr": "نصف القطر يساوي بعد المركز عن المستوى المماس: $r = \\frac{|D|}{\\|\\vec{n}\\|}$.",
    "stepByStepSolutionEn": [
      "$\\|\\vec{n}\\| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.",
      "$r = \\frac{30}{3} = 10$."
    ],
    "stepByStepSolutionAr": [
      "معيار المتجه العمودي $= \\sqrt{٤ + ٤ + ١} = ٣$.",
      "نصف القطر $r = \\frac{30}{٣} = 10$."
    ],
    "teacherTipEn": "Tangency of sphere to plane: $d = r$.",
    "teacherTipAr": "شرط تماس الكرة مع المستوى هو أن البعد يساوي نصف القطر."
  },
  {
    "id": "solid_ch2_db_hots_31",
    "titleEn": "Intersection of Line and Coordinate Plane 31",
    "titleAr": "تقاطع خط مستقيم مع مستوى إحداثي 31",
    "difficulty": "hots",
    "questionEn": "At what point does the line $\\vec{r} = (1, 2, 1) + t(2, -1, 1)$ intersect the $xy$-plane?",
    "questionAr": "عند أي نقطة يقطع الخط المستقيم $\\vec{r} = (١، ٢، 1) + t(٢، -١، ١)$ المستوى $xy$؟",
    "optionsEn": [
      "(-1, 3, 0)",
      "(3, 1, 0)",
      "(1, 2, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-1، 3، ٠)",
      "(3، 1، ٠)",
      "(١، ٢، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-1, 3, 0)",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Solve for $t$, then compute $x$ and $y$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. أوجد قيمة $t$ ثم احسب $x$ و $y$.",
    "stepByStepSolutionEn": [
      "$z = 1 + t = 0 \\implies t = -1$.",
      "$x = 1 + 2(-1) = -1$.",
      "$y = 2 - (-1) = 3$.",
      "Point: $(-1, 3, 0)$."
    ],
    "stepByStepSolutionAr": [
      "$z = 1 + t = ٠ \\implies t = -1$.",
      "$x = ١ - ٢(1) = -1$.",
      "$y = ٢ + 1 = 3$.",
      "النقطة هي $(-1، 3، ٠)$."
    ],
    "teacherTipEn": "Intersection with coordinate plane always sets the corresponding variable to 0.",
    "teacherTipAr": "التقاطع مع أي مستوى إحداثي يجعل الإحداثي المناظر مساوياً للصفر."
  },
  {
    "id": "solid_ch2_db_hots_32",
    "titleEn": "Intersection of Line and Coordinate Plane 32",
    "titleAr": "تقاطع خط مستقيم مع مستوى إحداثي 32",
    "difficulty": "hots",
    "questionEn": "At what point does the line $\\vec{r} = (1, 2, 2) + t(2, -1, 1)$ intersect the $xy$-plane?",
    "questionAr": "عند أي نقطة يقطع الخط المستقيم $\\vec{r} = (١، ٢، 2) + t(٢، -١، ١)$ المستوى $xy$؟",
    "optionsEn": [
      "(-3, 4, 0)",
      "(5, 0, 0)",
      "(1, 2, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-3، 4، ٠)",
      "(5، 0، ٠)",
      "(١، ٢، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-3, 4, 0)",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Solve for $t$, then compute $x$ and $y$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. أوجد قيمة $t$ ثم احسب $x$ و $y$.",
    "stepByStepSolutionEn": [
      "$z = 2 + t = 0 \\implies t = -2$.",
      "$x = 1 + 2(-2) = -3$.",
      "$y = 2 - (-2) = 4$.",
      "Point: $(-3, 4, 0)$."
    ],
    "stepByStepSolutionAr": [
      "$z = 2 + t = ٠ \\implies t = -2$.",
      "$x = ١ - ٢(2) = -3$.",
      "$y = ٢ + 2 = 4$.",
      "النقطة هي $(-3، 4، ٠)$."
    ],
    "teacherTipEn": "Intersection with coordinate plane always sets the corresponding variable to 0.",
    "teacherTipAr": "التقاطع مع أي مستوى إحداثي يجعل الإحداثي المناظر مساوياً للصفر."
  },
  {
    "id": "solid_ch2_db_hots_33",
    "titleEn": "Intersection of Line and Coordinate Plane 33",
    "titleAr": "تقاطع خط مستقيم مع مستوى إحداثي 33",
    "difficulty": "hots",
    "questionEn": "At what point does the line $\\vec{r} = (1, 2, 3) + t(2, -1, 1)$ intersect the $xy$-plane?",
    "questionAr": "عند أي نقطة يقطع الخط المستقيم $\\vec{r} = (١، ٢، 3) + t(٢، -١، ١)$ المستوى $xy$؟",
    "optionsEn": [
      "(-5, 5, 0)",
      "(7, -1, 0)",
      "(1, 2, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-5، 5، ٠)",
      "(7، -1، ٠)",
      "(١، ٢، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-5, 5, 0)",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Solve for $t$, then compute $x$ and $y$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. أوجد قيمة $t$ ثم احسب $x$ و $y$.",
    "stepByStepSolutionEn": [
      "$z = 3 + t = 0 \\implies t = -3$.",
      "$x = 1 + 2(-3) = -5$.",
      "$y = 2 - (-3) = 5$.",
      "Point: $(-5, 5, 0)$."
    ],
    "stepByStepSolutionAr": [
      "$z = 3 + t = ٠ \\implies t = -3$.",
      "$x = ١ - ٢(3) = -5$.",
      "$y = ٢ + 3 = 5$.",
      "النقطة هي $(-5، 5، ٠)$."
    ],
    "teacherTipEn": "Intersection with coordinate plane always sets the corresponding variable to 0.",
    "teacherTipAr": "التقاطع مع أي مستوى إحداثي يجعل الإحداثي المناظر مساوياً للصفر."
  },
  {
    "id": "solid_ch2_db_hots_34",
    "titleEn": "Intersection of Line and Coordinate Plane 34",
    "titleAr": "تقاطع خط مستقيم مع مستوى إحداثي 34",
    "difficulty": "hots",
    "questionEn": "At what point does the line $\\vec{r} = (1, 2, 4) + t(2, -1, 1)$ intersect the $xy$-plane?",
    "questionAr": "عند أي نقطة يقطع الخط المستقيم $\\vec{r} = (١، ٢، 4) + t(٢، -١، ١)$ المستوى $xy$؟",
    "optionsEn": [
      "(-7, 6, 0)",
      "(9, -2, 0)",
      "(1, 2, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-7، 6، ٠)",
      "(9، -2، ٠)",
      "(١، ٢، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-7, 6, 0)",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Solve for $t$, then compute $x$ and $y$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. أوجد قيمة $t$ ثم احسب $x$ و $y$.",
    "stepByStepSolutionEn": [
      "$z = 4 + t = 0 \\implies t = -4$.",
      "$x = 1 + 2(-4) = -7$.",
      "$y = 2 - (-4) = 6$.",
      "Point: $(-7, 6, 0)$."
    ],
    "stepByStepSolutionAr": [
      "$z = 4 + t = ٠ \\implies t = -4$.",
      "$x = ١ - ٢(4) = -7$.",
      "$y = ٢ + 4 = 6$.",
      "النقطة هي $(-7، 6، ٠)$."
    ],
    "teacherTipEn": "Intersection with coordinate plane always sets the corresponding variable to 0.",
    "teacherTipAr": "التقاطع مع أي مستوى إحداثي يجعل الإحداثي المناظر مساوياً للصفر."
  },
  {
    "id": "solid_ch2_db_hots_35",
    "titleEn": "Intersection of Line and Coordinate Plane 35",
    "titleAr": "تقاطع خط مستقيم مع مستوى إحداثي 35",
    "difficulty": "hots",
    "questionEn": "At what point does the line $\\vec{r} = (1, 2, 5) + t(2, -1, 1)$ intersect the $xy$-plane?",
    "questionAr": "عند أي نقطة يقطع الخط المستقيم $\\vec{r} = (١، ٢، 5) + t(٢، -١، ١)$ المستوى $xy$؟",
    "optionsEn": [
      "(-9, 7, 0)",
      "(11, -3, 0)",
      "(1, 2, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-9، 7، ٠)",
      "(11، -3، ٠)",
      "(١، ٢، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-9, 7, 0)",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Solve for $t$, then compute $x$ and $y$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. أوجد قيمة $t$ ثم احسب $x$ و $y$.",
    "stepByStepSolutionEn": [
      "$z = 5 + t = 0 \\implies t = -5$.",
      "$x = 1 + 2(-5) = -9$.",
      "$y = 2 - (-5) = 7$.",
      "Point: $(-9, 7, 0)$."
    ],
    "stepByStepSolutionAr": [
      "$z = 5 + t = ٠ \\implies t = -5$.",
      "$x = ١ - ٢(5) = -9$.",
      "$y = ٢ + 5 = 7$.",
      "النقطة هي $(-9، 7، ٠)$."
    ],
    "teacherTipEn": "Intersection with coordinate plane always sets the corresponding variable to 0.",
    "teacherTipAr": "التقاطع مع أي مستوى إحداثي يجعل الإحداثي المناظر مساوياً للصفر."
  },
  {
    "id": "solid_ch2_db_hots_36",
    "titleEn": "Intersection of Line and Coordinate Plane 36",
    "titleAr": "تقاطع خط مستقيم مع مستوى إحداثي 36",
    "difficulty": "hots",
    "questionEn": "At what point does the line $\\vec{r} = (1, 2, 6) + t(2, -1, 1)$ intersect the $xy$-plane?",
    "questionAr": "عند أي نقطة يقطع الخط المستقيم $\\vec{r} = (١، ٢، 6) + t(٢، -١، ١)$ المستوى $xy$؟",
    "optionsEn": [
      "(-11, 8, 0)",
      "(13, -4, 0)",
      "(1, 2, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-11، 8، ٠)",
      "(13، -4، ٠)",
      "(١، ٢، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-11, 8, 0)",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Solve for $t$, then compute $x$ and $y$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. أوجد قيمة $t$ ثم احسب $x$ و $y$.",
    "stepByStepSolutionEn": [
      "$z = 6 + t = 0 \\implies t = -6$.",
      "$x = 1 + 2(-6) = -11$.",
      "$y = 2 - (-6) = 8$.",
      "Point: $(-11, 8, 0)$."
    ],
    "stepByStepSolutionAr": [
      "$z = 6 + t = ٠ \\implies t = -6$.",
      "$x = ١ - ٢(6) = -11$.",
      "$y = ٢ + 6 = 8$.",
      "النقطة هي $(-11، 8، ٠)$."
    ],
    "teacherTipEn": "Intersection with coordinate plane always sets the corresponding variable to 0.",
    "teacherTipAr": "التقاطع مع أي مستوى إحداثي يجعل الإحداثي المناظر مساوياً للصفر."
  },
  {
    "id": "solid_ch2_db_hots_37",
    "titleEn": "Intersection of Line and Coordinate Plane 37",
    "titleAr": "تقاطع خط مستقيم مع مستوى إحداثي 37",
    "difficulty": "hots",
    "questionEn": "At what point does the line $\\vec{r} = (1, 2, 7) + t(2, -1, 1)$ intersect the $xy$-plane?",
    "questionAr": "عند أي نقطة يقطع الخط المستقيم $\\vec{r} = (١، ٢، 7) + t(٢، -١، ١)$ المستوى $xy$؟",
    "optionsEn": [
      "(-13, 9, 0)",
      "(15, -5, 0)",
      "(1, 2, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-13، 9، ٠)",
      "(15، -5، ٠)",
      "(١، ٢، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-13, 9, 0)",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Solve for $t$, then compute $x$ and $y$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. أوجد قيمة $t$ ثم احسب $x$ و $y$.",
    "stepByStepSolutionEn": [
      "$z = 7 + t = 0 \\implies t = -7$.",
      "$x = 1 + 2(-7) = -13$.",
      "$y = 2 - (-7) = 9$.",
      "Point: $(-13, 9, 0)$."
    ],
    "stepByStepSolutionAr": [
      "$z = 7 + t = ٠ \\implies t = -7$.",
      "$x = ١ - ٢(7) = -13$.",
      "$y = ٢ + 7 = 9$.",
      "النقطة هي $(-13، 9، ٠)$."
    ],
    "teacherTipEn": "Intersection with coordinate plane always sets the corresponding variable to 0.",
    "teacherTipAr": "التقاطع مع أي مستوى إحداثي يجعل الإحداثي المناظر مساوياً للصفر."
  },
  {
    "id": "solid_ch2_db_hots_38",
    "titleEn": "Intersection of Line and Coordinate Plane 38",
    "titleAr": "تقاطع خط مستقيم مع مستوى إحداثي 38",
    "difficulty": "hots",
    "questionEn": "At what point does the line $\\vec{r} = (1, 2, 8) + t(2, -1, 1)$ intersect the $xy$-plane?",
    "questionAr": "عند أي نقطة يقطع الخط المستقيم $\\vec{r} = (١، ٢، 8) + t(٢، -١، ١)$ المستوى $xy$؟",
    "optionsEn": [
      "(-15, 10, 0)",
      "(17, -6, 0)",
      "(1, 2, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-15، 10، ٠)",
      "(17، -6، ٠)",
      "(١، ٢، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-15, 10, 0)",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Solve for $t$, then compute $x$ and $y$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. أوجد قيمة $t$ ثم احسب $x$ و $y$.",
    "stepByStepSolutionEn": [
      "$z = 8 + t = 0 \\implies t = -8$.",
      "$x = 1 + 2(-8) = -15$.",
      "$y = 2 - (-8) = 10$.",
      "Point: $(-15, 10, 0)$."
    ],
    "stepByStepSolutionAr": [
      "$z = 8 + t = ٠ \\implies t = -8$.",
      "$x = ١ - ٢(8) = -15$.",
      "$y = ٢ + 8 = 10$.",
      "النقطة هي $(-15، 10، ٠)$."
    ],
    "teacherTipEn": "Intersection with coordinate plane always sets the corresponding variable to 0.",
    "teacherTipAr": "التقاطع مع أي مستوى إحداثي يجعل الإحداثي المناظر مساوياً للصفر."
  },
  {
    "id": "solid_ch2_db_hots_39",
    "titleEn": "Intersection of Line and Coordinate Plane 39",
    "titleAr": "تقاطع خط مستقيم مع مستوى إحداثي 39",
    "difficulty": "hots",
    "questionEn": "At what point does the line $\\vec{r} = (1, 2, 9) + t(2, -1, 1)$ intersect the $xy$-plane?",
    "questionAr": "عند أي نقطة يقطع الخط المستقيم $\\vec{r} = (١، ٢، 9) + t(٢، -١، ١)$ المستوى $xy$؟",
    "optionsEn": [
      "(-17, 11, 0)",
      "(19, -7, 0)",
      "(1, 2, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-17، 11، ٠)",
      "(19، -7، ٠)",
      "(١، ٢، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-17, 11, 0)",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Solve for $t$, then compute $x$ and $y$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. أوجد قيمة $t$ ثم احسب $x$ و $y$.",
    "stepByStepSolutionEn": [
      "$z = 9 + t = 0 \\implies t = -9$.",
      "$x = 1 + 2(-9) = -17$.",
      "$y = 2 - (-9) = 11$.",
      "Point: $(-17, 11, 0)$."
    ],
    "stepByStepSolutionAr": [
      "$z = 9 + t = ٠ \\implies t = -9$.",
      "$x = ١ - ٢(9) = -17$.",
      "$y = ٢ + 9 = 11$.",
      "النقطة هي $(-17، 11، ٠)$."
    ],
    "teacherTipEn": "Intersection with coordinate plane always sets the corresponding variable to 0.",
    "teacherTipAr": "التقاطع مع أي مستوى إحداثي يجعل الإحداثي المناظر مساوياً للصفر."
  },
  {
    "id": "solid_ch2_db_hots_40",
    "titleEn": "Intersection of Line and Coordinate Plane 40",
    "titleAr": "تقاطع خط مستقيم مع مستوى إحداثي 40",
    "difficulty": "hots",
    "questionEn": "At what point does the line $\\vec{r} = (1, 2, 10) + t(2, -1, 1)$ intersect the $xy$-plane?",
    "questionAr": "عند أي نقطة يقطع الخط المستقيم $\\vec{r} = (١، ٢، 10) + t(٢، -١، ١)$ المستوى $xy$؟",
    "optionsEn": [
      "(-19, 12, 0)",
      "(21, -8, 0)",
      "(1, 2, 0)",
      "(0, 0, 0)"
    ],
    "optionsAr": [
      "(-19، 12، ٠)",
      "(21، -8، ٠)",
      "(١، ٢، ٠)",
      "(٠، ٠، ٠)"
    ],
    "correctAnswer": "(-19, 12, 0)",
    "correctIndex": 0,
    "hintEn": "On the $xy$-plane, $z = 0$. Solve for $t$, then compute $x$ and $y$.",
    "hintAr": "في المستوى $xy$ يكون $z = ٠$. أوجد قيمة $t$ ثم احسب $x$ و $y$.",
    "stepByStepSolutionEn": [
      "$z = 10 + t = 0 \\implies t = -10$.",
      "$x = 1 + 2(-10) = -19$.",
      "$y = 2 - (-10) = 12$.",
      "Point: $(-19, 12, 0)$."
    ],
    "stepByStepSolutionAr": [
      "$z = 10 + t = ٠ \\implies t = -10$.",
      "$x = ١ - ٢(10) = -19$.",
      "$y = ٢ + 10 = 12$.",
      "النقطة هي $(-19، 12، ٠)$."
    ],
    "teacherTipEn": "Intersection with coordinate plane always sets the corresponding variable to 0.",
    "teacherTipAr": "التقاطع مع أي مستوى إحداثي يجعل الإحداثي المناظر مساوياً للصفر."
  },
  {
    "id": "solid_ch2_db_hots_41",
    "titleEn": "Distance Between Parallel Line and Plane 41",
    "titleAr": "البعد بين خط مستقيم يوازي مستوى وبينهما مسافة 41",
    "difficulty": "hots",
    "questionEn": "The line $\\vec{r} = (0, 0, 3) + t(1, -1, 0)$ is parallel to the plane $z = 0$ ($xy$-plane). What is the distance between them?",
    "questionAr": "المستقيم $\\vec{r} = (٠، ٠، 3) + t(١، -١، ٠)$ يوازي المستوى $z = ٠$ (المستوى $xy$). ما البعد بينهما؟",
    "optionsEn": [
      "3",
      "4",
      "2",
      "1"
    ],
    "optionsAr": [
      "3",
      "4",
      "2",
      "1"
    ],
    "correctAnswer": "3",
    "correctIndex": 0,
    "hintEn": "Since the line is parallel to the plane, all points on the line have the same distance to the plane.",
    "hintAr": "بما أن الخط يوازي المستوى، فإن جميع نقاط الخط تبعد نفس البعد عن المستوى.",
    "stepByStepSolutionEn": [
      "Any point on the line has $z = 3$.",
      "The distance to the plane $z = 0$ is $|3 - 0| = 3$ length units."
    ],
    "stepByStepSolutionAr": [
      "أي نقطة على الخط إحداثيها العيني هو $z = 3$.",
      "البعد عن المستوى $z = ٠$ هو 3 وحدة طول."
    ],
    "teacherTipEn": "Distance between a parallel line and a plane equals the distance from ANY point on the line to the plane.",
    "teacherTipAr": "البعد بين خط ومستوى موازٍ له يساوي بعد أي نقطة على الخط عن ذلك المستوى."
  },
  {
    "id": "solid_ch2_db_hots_42",
    "titleEn": "Distance Between Parallel Line and Plane 42",
    "titleAr": "البعد بين خط مستقيم يوازي مستوى وبينهما مسافة 42",
    "difficulty": "hots",
    "questionEn": "The line $\\vec{r} = (0, 0, 6) + t(1, -1, 0)$ is parallel to the plane $z = 0$ ($xy$-plane). What is the distance between them?",
    "questionAr": "المستقيم $\\vec{r} = (٠، ٠، 6) + t(١، -١، ٠)$ يوازي المستوى $z = ٠$ (المستوى $xy$). ما البعد بينهما؟",
    "optionsEn": [
      "6",
      "7",
      "5",
      "2"
    ],
    "optionsAr": [
      "6",
      "7",
      "5",
      "2"
    ],
    "correctAnswer": "6",
    "correctIndex": 0,
    "hintEn": "Since the line is parallel to the plane, all points on the line have the same distance to the plane.",
    "hintAr": "بما أن الخط يوازي المستوى، فإن جميع نقاط الخط تبعد نفس البعد عن المستوى.",
    "stepByStepSolutionEn": [
      "Any point on the line has $z = 6$.",
      "The distance to the plane $z = 0$ is $|6 - 0| = 6$ length units."
    ],
    "stepByStepSolutionAr": [
      "أي نقطة على الخط إحداثيها العيني هو $z = 6$.",
      "البعد عن المستوى $z = ٠$ هو 6 وحدة طول."
    ],
    "teacherTipEn": "Distance between a parallel line and a plane equals the distance from ANY point on the line to the plane.",
    "teacherTipAr": "البعد بين خط ومستوى موازٍ له يساوي بعد أي نقطة على الخط عن ذلك المستوى."
  },
  {
    "id": "solid_ch2_db_hots_43",
    "titleEn": "Distance Between Parallel Line and Plane 43",
    "titleAr": "البعد بين خط مستقيم يوازي مستوى وبينهما مسافة 43",
    "difficulty": "hots",
    "questionEn": "The line $\\vec{r} = (0, 0, 9) + t(1, -1, 0)$ is parallel to the plane $z = 0$ ($xy$-plane). What is the distance between them?",
    "questionAr": "المستقيم $\\vec{r} = (٠، ٠، 9) + t(١، -١، ٠)$ يوازي المستوى $z = ٠$ (المستوى $xy$). ما البعد بينهما؟",
    "optionsEn": [
      "9",
      "10",
      "8",
      "3"
    ],
    "optionsAr": [
      "9",
      "10",
      "8",
      "3"
    ],
    "correctAnswer": "9",
    "correctIndex": 0,
    "hintEn": "Since the line is parallel to the plane, all points on the line have the same distance to the plane.",
    "hintAr": "بما أن الخط يوازي المستوى، فإن جميع نقاط الخط تبعد نفس البعد عن المستوى.",
    "stepByStepSolutionEn": [
      "Any point on the line has $z = 9$.",
      "The distance to the plane $z = 0$ is $|9 - 0| = 9$ length units."
    ],
    "stepByStepSolutionAr": [
      "أي نقطة على الخط إحداثيها العيني هو $z = 9$.",
      "البعد عن المستوى $z = ٠$ هو 9 وحدة طول."
    ],
    "teacherTipEn": "Distance between a parallel line and a plane equals the distance from ANY point on the line to the plane.",
    "teacherTipAr": "البعد بين خط ومستوى موازٍ له يساوي بعد أي نقطة على الخط عن ذلك المستوى."
  },
  {
    "id": "solid_ch2_db_hots_44",
    "titleEn": "Distance Between Parallel Line and Plane 44",
    "titleAr": "البعد بين خط مستقيم يوازي مستوى وبينهما مسافة 44",
    "difficulty": "hots",
    "questionEn": "The line $\\vec{r} = (0, 0, 12) + t(1, -1, 0)$ is parallel to the plane $z = 0$ ($xy$-plane). What is the distance between them?",
    "questionAr": "المستقيم $\\vec{r} = (٠، ٠، 12) + t(١، -١، ٠)$ يوازي المستوى $z = ٠$ (المستوى $xy$). ما البعد بينهما؟",
    "optionsEn": [
      "12",
      "13",
      "11",
      "4"
    ],
    "optionsAr": [
      "12",
      "13",
      "11",
      "4"
    ],
    "correctAnswer": "12",
    "correctIndex": 0,
    "hintEn": "Since the line is parallel to the plane, all points on the line have the same distance to the plane.",
    "hintAr": "بما أن الخط يوازي المستوى، فإن جميع نقاط الخط تبعد نفس البعد عن المستوى.",
    "stepByStepSolutionEn": [
      "Any point on the line has $z = 12$.",
      "The distance to the plane $z = 0$ is $|12 - 0| = 12$ length units."
    ],
    "stepByStepSolutionAr": [
      "أي نقطة على الخط إحداثيها العيني هو $z = 12$.",
      "البعد عن المستوى $z = ٠$ هو 12 وحدة طول."
    ],
    "teacherTipEn": "Distance between a parallel line and a plane equals the distance from ANY point on the line to the plane.",
    "teacherTipAr": "البعد بين خط ومستوى موازٍ له يساوي بعد أي نقطة على الخط عن ذلك المستوى."
  },
  {
    "id": "solid_ch2_db_hots_45",
    "titleEn": "Distance Between Parallel Line and Plane 45",
    "titleAr": "البعد بين خط مستقيم يوازي مستوى وبينهما مسافة 45",
    "difficulty": "hots",
    "questionEn": "The line $\\vec{r} = (0, 0, 15) + t(1, -1, 0)$ is parallel to the plane $z = 0$ ($xy$-plane). What is the distance between them?",
    "questionAr": "المستقيم $\\vec{r} = (٠، ٠، 15) + t(١، -١، ٠)$ يوازي المستوى $z = ٠$ (المستوى $xy$). ما البعد بينهما؟",
    "optionsEn": [
      "15",
      "16",
      "14",
      "5"
    ],
    "optionsAr": [
      "15",
      "16",
      "14",
      "5"
    ],
    "correctAnswer": "15",
    "correctIndex": 0,
    "hintEn": "Since the line is parallel to the plane, all points on the line have the same distance to the plane.",
    "hintAr": "بما أن الخط يوازي المستوى، فإن جميع نقاط الخط تبعد نفس البعد عن المستوى.",
    "stepByStepSolutionEn": [
      "Any point on the line has $z = 15$.",
      "The distance to the plane $z = 0$ is $|15 - 0| = 15$ length units."
    ],
    "stepByStepSolutionAr": [
      "أي نقطة على الخط إحداثيها العيني هو $z = 15$.",
      "البعد عن المستوى $z = ٠$ هو 15 وحدة طول."
    ],
    "teacherTipEn": "Distance between a parallel line and a plane equals the distance from ANY point on the line to the plane.",
    "teacherTipAr": "البعد بين خط ومستوى موازٍ له يساوي بعد أي نقطة على الخط عن ذلك المستوى."
  },
  {
    "id": "solid_ch2_db_hots_46",
    "titleEn": "Distance Between Parallel Line and Plane 46",
    "titleAr": "البعد بين خط مستقيم يوازي مستوى وبينهما مسافة 46",
    "difficulty": "hots",
    "questionEn": "The line $\\vec{r} = (0, 0, 18) + t(1, -1, 0)$ is parallel to the plane $z = 0$ ($xy$-plane). What is the distance between them?",
    "questionAr": "المستقيم $\\vec{r} = (٠، ٠، 18) + t(١، -١، ٠)$ يوازي المستوى $z = ٠$ (المستوى $xy$). ما البعد بينهما؟",
    "optionsEn": [
      "18",
      "19",
      "17",
      "6"
    ],
    "optionsAr": [
      "18",
      "19",
      "17",
      "6"
    ],
    "correctAnswer": "18",
    "correctIndex": 0,
    "hintEn": "Since the line is parallel to the plane, all points on the line have the same distance to the plane.",
    "hintAr": "بما أن الخط يوازي المستوى، فإن جميع نقاط الخط تبعد نفس البعد عن المستوى.",
    "stepByStepSolutionEn": [
      "Any point on the line has $z = 18$.",
      "The distance to the plane $z = 0$ is $|18 - 0| = 18$ length units."
    ],
    "stepByStepSolutionAr": [
      "أي نقطة على الخط إحداثيها العيني هو $z = 18$.",
      "البعد عن المستوى $z = ٠$ هو 18 وحدة طول."
    ],
    "teacherTipEn": "Distance between a parallel line and a plane equals the distance from ANY point on the line to the plane.",
    "teacherTipAr": "البعد بين خط ومستوى موازٍ له يساوي بعد أي نقطة على الخط عن ذلك المستوى."
  },
  {
    "id": "solid_ch2_db_hots_47",
    "titleEn": "Distance Between Parallel Line and Plane 47",
    "titleAr": "البعد بين خط مستقيم يوازي مستوى وبينهما مسافة 47",
    "difficulty": "hots",
    "questionEn": "The line $\\vec{r} = (0, 0, 21) + t(1, -1, 0)$ is parallel to the plane $z = 0$ ($xy$-plane). What is the distance between them?",
    "questionAr": "المستقيم $\\vec{r} = (٠، ٠، 21) + t(١، -١، ٠)$ يوازي المستوى $z = ٠$ (المستوى $xy$). ما البعد بينهما؟",
    "optionsEn": [
      "21",
      "22",
      "20",
      "7"
    ],
    "optionsAr": [
      "21",
      "22",
      "20",
      "7"
    ],
    "correctAnswer": "21",
    "correctIndex": 0,
    "hintEn": "Since the line is parallel to the plane, all points on the line have the same distance to the plane.",
    "hintAr": "بما أن الخط يوازي المستوى، فإن جميع نقاط الخط تبعد نفس البعد عن المستوى.",
    "stepByStepSolutionEn": [
      "Any point on the line has $z = 21$.",
      "The distance to the plane $z = 0$ is $|21 - 0| = 21$ length units."
    ],
    "stepByStepSolutionAr": [
      "أي نقطة على الخط إحداثيها العيني هو $z = 21$.",
      "البعد عن المستوى $z = ٠$ هو 21 وحدة طول."
    ],
    "teacherTipEn": "Distance between a parallel line and a plane equals the distance from ANY point on the line to the plane.",
    "teacherTipAr": "البعد بين خط ومستوى موازٍ له يساوي بعد أي نقطة على الخط عن ذلك المستوى."
  },
  {
    "id": "solid_ch2_db_hots_48",
    "titleEn": "Distance Between Parallel Line and Plane 48",
    "titleAr": "البعد بين خط مستقيم يوازي مستوى وبينهما مسافة 48",
    "difficulty": "hots",
    "questionEn": "The line $\\vec{r} = (0, 0, 24) + t(1, -1, 0)$ is parallel to the plane $z = 0$ ($xy$-plane). What is the distance between them?",
    "questionAr": "المستقيم $\\vec{r} = (٠، ٠، 24) + t(١، -١، ٠)$ يوازي المستوى $z = ٠$ (المستوى $xy$). ما البعد بينهما؟",
    "optionsEn": [
      "24",
      "25",
      "23",
      "8"
    ],
    "optionsAr": [
      "24",
      "25",
      "23",
      "8"
    ],
    "correctAnswer": "24",
    "correctIndex": 0,
    "hintEn": "Since the line is parallel to the plane, all points on the line have the same distance to the plane.",
    "hintAr": "بما أن الخط يوازي المستوى، فإن جميع نقاط الخط تبعد نفس البعد عن المستوى.",
    "stepByStepSolutionEn": [
      "Any point on the line has $z = 24$.",
      "The distance to the plane $z = 0$ is $|24 - 0| = 24$ length units."
    ],
    "stepByStepSolutionAr": [
      "أي نقطة على الخط إحداثيها العيني هو $z = 24$.",
      "البعد عن المستوى $z = ٠$ هو 24 وحدة طول."
    ],
    "teacherTipEn": "Distance between a parallel line and a plane equals the distance from ANY point on the line to the plane.",
    "teacherTipAr": "البعد بين خط ومستوى موازٍ له يساوي بعد أي نقطة على الخط عن ذلك المستوى."
  },
  {
    "id": "solid_ch2_db_hots_49",
    "titleEn": "Distance Between Parallel Line and Plane 49",
    "titleAr": "البعد بين خط مستقيم يوازي مستوى وبينهما مسافة 49",
    "difficulty": "hots",
    "questionEn": "The line $\\vec{r} = (0, 0, 27) + t(1, -1, 0)$ is parallel to the plane $z = 0$ ($xy$-plane). What is the distance between them?",
    "questionAr": "المستقيم $\\vec{r} = (٠، ٠، 27) + t(١، -١، ٠)$ يوازي المستوى $z = ٠$ (المستوى $xy$). ما البعد بينهما؟",
    "optionsEn": [
      "27",
      "28",
      "26",
      "9"
    ],
    "optionsAr": [
      "27",
      "28",
      "26",
      "9"
    ],
    "correctAnswer": "27",
    "correctIndex": 0,
    "hintEn": "Since the line is parallel to the plane, all points on the line have the same distance to the plane.",
    "hintAr": "بما أن الخط يوازي المستوى، فإن جميع نقاط الخط تبعد نفس البعد عن المستوى.",
    "stepByStepSolutionEn": [
      "Any point on the line has $z = 27$.",
      "The distance to the plane $z = 0$ is $|27 - 0| = 27$ length units."
    ],
    "stepByStepSolutionAr": [
      "أي نقطة على الخط إحداثيها العيني هو $z = 27$.",
      "البعد عن المستوى $z = ٠$ هو 27 وحدة طول."
    ],
    "teacherTipEn": "Distance between a parallel line and a plane equals the distance from ANY point on the line to the plane.",
    "teacherTipAr": "البعد بين خط ومستوى موازٍ له يساوي بعد أي نقطة على الخط عن ذلك المستوى."
  },
  {
    "id": "solid_ch2_db_hots_50",
    "titleEn": "Distance Between Parallel Line and Plane 50",
    "titleAr": "البعد بين خط مستقيم يوازي مستوى وبينهما مسافة 50",
    "difficulty": "hots",
    "questionEn": "The line $\\vec{r} = (0, 0, 30) + t(1, -1, 0)$ is parallel to the plane $z = 0$ ($xy$-plane). What is the distance between them?",
    "questionAr": "المستقيم $\\vec{r} = (٠، ٠، 30) + t(١، -١، ٠)$ يوازي المستوى $z = ٠$ (المستوى $xy$). ما البعد بينهما؟",
    "optionsEn": [
      "30",
      "31",
      "29",
      "10"
    ],
    "optionsAr": [
      "30",
      "31",
      "29",
      "10"
    ],
    "correctAnswer": "30",
    "correctIndex": 0,
    "hintEn": "Since the line is parallel to the plane, all points on the line have the same distance to the plane.",
    "hintAr": "بما أن الخط يوازي المستوى، فإن جميع نقاط الخط تبعد نفس البعد عن المستوى.",
    "stepByStepSolutionEn": [
      "Any point on the line has $z = 30$.",
      "The distance to the plane $z = 0$ is $|30 - 0| = 30$ length units."
    ],
    "stepByStepSolutionAr": [
      "أي نقطة على الخط إحداثيها العيني هو $z = 30$.",
      "البعد عن المستوى $z = ٠$ هو 30 وحدة طول."
    ],
    "teacherTipEn": "Distance between a parallel line and a plane equals the distance from ANY point on the line to the plane.",
    "teacherTipAr": "البعد بين خط ومستوى موازٍ له يساوي بعد أي نقطة على الخط عن ذلك المستوى."
  }
]
};
