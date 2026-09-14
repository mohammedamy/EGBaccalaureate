import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacPhysCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_phys_ch2_db_easy_01",
    "titleEn": "Bohr Quantization of Angular Momentum (1)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (1)",
    "difficulty": "easy",
    "questionEn": "In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_02",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (2)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (2)",
    "difficulty": "easy",
    "questionEn": "The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_03",
    "titleEn": "Bohr Quantization of Angular Momentum (3)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (3)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 3] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 3] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_04",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (4)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (4)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 4] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 4] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_05",
    "titleEn": "Bohr Quantization of Angular Momentum (5)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (5)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 5] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 5] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_06",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (6)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (6)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 6] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 6] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_07",
    "titleEn": "Bohr Quantization of Angular Momentum (7)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 7] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_08",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (8)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 8] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_09",
    "titleEn": "Bohr Quantization of Angular Momentum (9)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 9] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_10",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (10)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 10] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_11",
    "titleEn": "Bohr Quantization of Angular Momentum (11)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 11] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_12",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (12)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 12] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_13",
    "titleEn": "Bohr Quantization of Angular Momentum (13)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 13] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_14",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (14)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 14] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_15",
    "titleEn": "Bohr Quantization of Angular Momentum (15)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 15] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_16",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (16)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 16] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_17",
    "titleEn": "Bohr Quantization of Angular Momentum (17)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 17] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_18",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (18)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 18] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_19",
    "titleEn": "Bohr Quantization of Angular Momentum (19)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 19] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_20",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (20)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 20] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_21",
    "titleEn": "Bohr Quantization of Angular Momentum (21)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 21] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_22",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (22)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 22] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_23",
    "titleEn": "Bohr Quantization of Angular Momentum (23)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 23] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_24",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (24)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 24] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_25",
    "titleEn": "Bohr Quantization of Angular Momentum (25)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 25] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_26",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (26)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 26] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_27",
    "titleEn": "Bohr Quantization of Angular Momentum (27)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 27] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_28",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (28)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 28] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_29",
    "titleEn": "Bohr Quantization of Angular Momentum (29)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 29] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_30",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (30)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 30] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_31",
    "titleEn": "Bohr Quantization of Angular Momentum (31)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 31] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_32",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (32)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 32] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_33",
    "titleEn": "Bohr Quantization of Angular Momentum (33)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 33] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_34",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (34)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 34] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_35",
    "titleEn": "Bohr Quantization of Angular Momentum (35)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 35] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_36",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (36)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 36] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_37",
    "titleEn": "Bohr Quantization of Angular Momentum (37)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 37] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_38",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (38)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 38] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_39",
    "titleEn": "Bohr Quantization of Angular Momentum (39)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 39] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_40",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (40)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 40] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_41",
    "titleEn": "Bohr Quantization of Angular Momentum (41)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 41] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_42",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (42)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 42] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_43",
    "titleEn": "Bohr Quantization of Angular Momentum (43)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 43] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_44",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (44)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 44] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_45",
    "titleEn": "Bohr Quantization of Angular Momentum (45)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 45] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_46",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (46)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 46] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_47",
    "titleEn": "Bohr Quantization of Angular Momentum (47)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 47] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_48",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (48)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 48] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_49",
    "titleEn": "Bohr Quantization of Angular Momentum (49)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 49] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_50",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (50)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 50] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_51",
    "titleEn": "Bohr Quantization of Angular Momentum (51)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 51] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_52",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (52)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 52] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_53",
    "titleEn": "Bohr Quantization of Angular Momentum (53)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 53] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_54",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (54)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 54] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_55",
    "titleEn": "Bohr Quantization of Angular Momentum (55)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 55] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_56",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (56)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 56] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_57",
    "titleEn": "Bohr Quantization of Angular Momentum (57)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 57] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_58",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (58)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 58] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  }
],
  medium: [
  {
    "id": "egbac_phys_ch2_db_medium_01",
    "titleEn": "Bohr Quantization of Angular Momentum (1)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (1)",
    "difficulty": "medium",
    "questionEn": "In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_02",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (2)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (2)",
    "difficulty": "medium",
    "questionEn": "The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_03",
    "titleEn": "Bohr Quantization of Angular Momentum (3)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (3)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 3] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 3] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_04",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (4)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 4] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_05",
    "titleEn": "Bohr Quantization of Angular Momentum (5)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 5] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_06",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (6)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 6] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_07",
    "titleEn": "Bohr Quantization of Angular Momentum (7)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 7] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_08",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (8)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 8] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_09",
    "titleEn": "Bohr Quantization of Angular Momentum (9)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 9] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_10",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (10)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 10] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_11",
    "titleEn": "Bohr Quantization of Angular Momentum (11)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 11] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_12",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (12)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 12] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_13",
    "titleEn": "Bohr Quantization of Angular Momentum (13)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 13] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_14",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (14)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 14] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_15",
    "titleEn": "Bohr Quantization of Angular Momentum (15)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 15] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_16",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (16)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 16] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_17",
    "titleEn": "Bohr Quantization of Angular Momentum (17)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 17] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_18",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (18)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 18] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_19",
    "titleEn": "Bohr Quantization of Angular Momentum (19)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 19] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_20",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (20)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 20] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_21",
    "titleEn": "Bohr Quantization of Angular Momentum (21)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 21] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_22",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (22)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 22] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_23",
    "titleEn": "Bohr Quantization of Angular Momentum (23)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 23] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_24",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (24)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 24] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_25",
    "titleEn": "Bohr Quantization of Angular Momentum (25)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 25] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_26",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (26)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 26] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_27",
    "titleEn": "Bohr Quantization of Angular Momentum (27)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 27] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_28",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (28)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 28] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_29",
    "titleEn": "Bohr Quantization of Angular Momentum (29)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 29] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_30",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (30)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 30] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_31",
    "titleEn": "Bohr Quantization of Angular Momentum (31)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 31] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_32",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (32)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 32] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_33",
    "titleEn": "Bohr Quantization of Angular Momentum (33)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 33] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_34",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (34)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 34] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_35",
    "titleEn": "Bohr Quantization of Angular Momentum (35)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 35] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_36",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (36)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 36] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_37",
    "titleEn": "Bohr Quantization of Angular Momentum (37)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 37] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_38",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (38)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 38] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_39",
    "titleEn": "Bohr Quantization of Angular Momentum (39)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 39] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_40",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (40)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 40] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_41",
    "titleEn": "Bohr Quantization of Angular Momentum (41)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 41] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_42",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (42)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 42] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_43",
    "titleEn": "Bohr Quantization of Angular Momentum (43)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 43] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_44",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (44)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 44] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_45",
    "titleEn": "Bohr Quantization of Angular Momentum (45)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 45] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_46",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (46)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 46] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_47",
    "titleEn": "Bohr Quantization of Angular Momentum (47)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 47] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_48",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (48)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 48] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_49",
    "titleEn": "Bohr Quantization of Angular Momentum (49)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 49] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_50",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (50)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 50] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_51",
    "titleEn": "Bohr Quantization of Angular Momentum (51)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 51] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_52",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (52)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 52] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_53",
    "titleEn": "Bohr Quantization of Angular Momentum (53)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 53] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_54",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (54)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 54] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_55",
    "titleEn": "Bohr Quantization of Angular Momentum (55)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 55] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_56",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (56)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 56] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_57",
    "titleEn": "Bohr Quantization of Angular Momentum (57)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 57] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_58",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (58)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 58] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_59",
    "titleEn": "Bohr Quantization of Angular Momentum (59)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 59] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  }
],
  hots: [
  {
    "id": "egbac_phys_ch2_db_hots_01",
    "titleEn": "Bohr Quantization of Angular Momentum (1)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (1)",
    "difficulty": "hots",
    "questionEn": "In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_02",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (2)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (2)",
    "difficulty": "hots",
    "questionEn": "The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_03",
    "titleEn": "Bohr Quantization of Angular Momentum (3)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 3] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_04",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (4)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 4] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_05",
    "titleEn": "Bohr Quantization of Angular Momentum (5)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 5] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_06",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (6)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 6] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_07",
    "titleEn": "Bohr Quantization of Angular Momentum (7)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 7] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_08",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (8)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 8] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_09",
    "titleEn": "Bohr Quantization of Angular Momentum (9)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 9] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_10",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (10)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 10] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_11",
    "titleEn": "Bohr Quantization of Angular Momentum (11)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 11] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_12",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (12)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 12] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_13",
    "titleEn": "Bohr Quantization of Angular Momentum (13)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 13] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_14",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (14)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 14] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_15",
    "titleEn": "Bohr Quantization of Angular Momentum (15)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 15] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_16",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (16)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 16] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_17",
    "titleEn": "Bohr Quantization of Angular Momentum (17)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 17] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_18",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (18)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 18] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_19",
    "titleEn": "Bohr Quantization of Angular Momentum (19)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 19] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_20",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (20)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 20] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_21",
    "titleEn": "Bohr Quantization of Angular Momentum (21)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 21] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_22",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (22)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 22] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_23",
    "titleEn": "Bohr Quantization of Angular Momentum (23)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 23] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_24",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (24)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 24] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_25",
    "titleEn": "Bohr Quantization of Angular Momentum (25)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 25] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_26",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (26)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 26] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_27",
    "titleEn": "Bohr Quantization of Angular Momentum (27)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 27] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_28",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (28)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 28] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_29",
    "titleEn": "Bohr Quantization of Angular Momentum (29)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 29] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_30",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (30)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 30] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_31",
    "titleEn": "Bohr Quantization of Angular Momentum (31)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 31] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_32",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (32)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 32] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_33",
    "titleEn": "Bohr Quantization of Angular Momentum (33)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 33] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_34",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (34)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 34] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_35",
    "titleEn": "Bohr Quantization of Angular Momentum (35)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 35] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_36",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (36)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 36] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_37",
    "titleEn": "Bohr Quantization of Angular Momentum (37)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 37] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_38",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (38)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 38] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_39",
    "titleEn": "Bohr Quantization of Angular Momentum (39)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 39] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_40",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (40)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 40] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_41",
    "titleEn": "Bohr Quantization of Angular Momentum (41)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 41] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_42",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (42)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 42] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_43",
    "titleEn": "Bohr Quantization of Angular Momentum (43)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 43] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_44",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (44)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 44] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_45",
    "titleEn": "Bohr Quantization of Angular Momentum (45)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 45] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_46",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (46)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 46] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_47",
    "titleEn": "Bohr Quantization of Angular Momentum (47)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 47] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_48",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (48)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 48] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_49",
    "titleEn": "Bohr Quantization of Angular Momentum (49)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 49] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_50",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (50)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 50] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_51",
    "titleEn": "Bohr Quantization of Angular Momentum (51)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 51] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_52",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (52)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 52] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_53",
    "titleEn": "Bohr Quantization of Angular Momentum (53)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 53] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_54",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (54)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 54] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_55",
    "titleEn": "Bohr Quantization of Angular Momentum (55)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 55] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_56",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (56)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 56] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_57",
    "titleEn": "Bohr Quantization of Angular Momentum (57)",
    "titleAr": "تكميم كمية الحركة الزاوية لبور (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
    "questionAr": "[مسألة متدرجة 57] في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
    "optionsEn": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "optionsAr": [
      "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
      "$L = \\frac{n^2 h}{2\\pi}$",
      "$L = \\frac{h}{2\\pi n r}$",
      "$L = n^2 \\hbar r$"
    ],
    "correctAnswer": "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
    "correctIndex": 0,
    "hintEn": "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
    "hintAr": "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
    "stepByStepSolutionEn": [
      "$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."
    ],
    "stepByStepSolutionAr": [
      "فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."
    ],
    "teacherTipEn": "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "teacherTipAr": "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_58",
    "titleEn": "Rydberg Formula for Hydrogen Transitions (58)",
    "titleAr": "قانون ريدبرج لانتقالات ذرة الهيدروجين (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
    "questionAr": "[مسألة متدرجة 58] يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
    "optionsEn": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
      "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
      "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
    ],
    "correctAnswer": "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
    "correctIndex": 0,
    "hintEn": "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
    "hintAr": "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
    "stepByStepSolutionEn": [
      "Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."
    ],
    "teacherTipEn": "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
    "teacherTipAr": "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
  }
]
};
