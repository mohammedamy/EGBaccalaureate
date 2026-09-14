import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacPhysCh5Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_phys_ch5_db_easy_01",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (1)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (1)",
    "difficulty": "easy",
    "questionEn": "James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_02",
    "titleEn": "Poynting Vector Energy Flux (2)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (2)",
    "difficulty": "easy",
    "questionEn": "The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_03",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (3)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (3)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 3] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 3] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_04",
    "titleEn": "Poynting Vector Energy Flux (4)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (4)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 4] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 4] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_05",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (5)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (5)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 5] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 5] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_06",
    "titleEn": "Poynting Vector Energy Flux (6)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (6)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 6] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 6] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_07",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (7)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 7] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_08",
    "titleEn": "Poynting Vector Energy Flux (8)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 8] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_09",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (9)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 9] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_10",
    "titleEn": "Poynting Vector Energy Flux (10)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 10] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_11",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (11)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 11] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_12",
    "titleEn": "Poynting Vector Energy Flux (12)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 12] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_13",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (13)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 13] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_14",
    "titleEn": "Poynting Vector Energy Flux (14)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 14] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_15",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (15)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 15] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_16",
    "titleEn": "Poynting Vector Energy Flux (16)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 16] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_17",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (17)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 17] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_18",
    "titleEn": "Poynting Vector Energy Flux (18)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 18] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_19",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (19)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 19] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_20",
    "titleEn": "Poynting Vector Energy Flux (20)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 20] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_21",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (21)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 21] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_22",
    "titleEn": "Poynting Vector Energy Flux (22)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 22] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_23",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (23)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 23] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_24",
    "titleEn": "Poynting Vector Energy Flux (24)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 24] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_25",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (25)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 25] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_26",
    "titleEn": "Poynting Vector Energy Flux (26)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 26] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_27",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (27)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 27] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_28",
    "titleEn": "Poynting Vector Energy Flux (28)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 28] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_29",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (29)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 29] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_30",
    "titleEn": "Poynting Vector Energy Flux (30)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 30] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_31",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (31)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 31] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_32",
    "titleEn": "Poynting Vector Energy Flux (32)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 32] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_33",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (33)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 33] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_34",
    "titleEn": "Poynting Vector Energy Flux (34)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 34] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_35",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (35)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 35] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_36",
    "titleEn": "Poynting Vector Energy Flux (36)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 36] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_37",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (37)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 37] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_38",
    "titleEn": "Poynting Vector Energy Flux (38)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 38] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_39",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (39)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 39] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_40",
    "titleEn": "Poynting Vector Energy Flux (40)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 40] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_41",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (41)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 41] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_42",
    "titleEn": "Poynting Vector Energy Flux (42)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 42] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_43",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (43)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 43] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_44",
    "titleEn": "Poynting Vector Energy Flux (44)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 44] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_45",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (45)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 45] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_46",
    "titleEn": "Poynting Vector Energy Flux (46)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 46] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_47",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (47)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 47] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_48",
    "titleEn": "Poynting Vector Energy Flux (48)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 48] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_49",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (49)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 49] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_50",
    "titleEn": "Poynting Vector Energy Flux (50)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 50] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_51",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (51)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 51] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_52",
    "titleEn": "Poynting Vector Energy Flux (52)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 52] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_53",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (53)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 53] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_54",
    "titleEn": "Poynting Vector Energy Flux (54)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 54] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_55",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (55)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 55] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_56",
    "titleEn": "Poynting Vector Energy Flux (56)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 56] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_57",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (57)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 57] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_easy_58",
    "titleEn": "Poynting Vector Energy Flux (58)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 58] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  }
],
  medium: [
  {
    "id": "egbac_phys_ch5_db_medium_01",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (1)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (1)",
    "difficulty": "medium",
    "questionEn": "James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_02",
    "titleEn": "Poynting Vector Energy Flux (2)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (2)",
    "difficulty": "medium",
    "questionEn": "The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_03",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (3)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (3)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 3] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 3] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_04",
    "titleEn": "Poynting Vector Energy Flux (4)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 4] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_05",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (5)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 5] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_06",
    "titleEn": "Poynting Vector Energy Flux (6)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 6] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_07",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (7)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 7] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_08",
    "titleEn": "Poynting Vector Energy Flux (8)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 8] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_09",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (9)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 9] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_10",
    "titleEn": "Poynting Vector Energy Flux (10)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 10] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_11",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (11)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 11] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_12",
    "titleEn": "Poynting Vector Energy Flux (12)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 12] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_13",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (13)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 13] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_14",
    "titleEn": "Poynting Vector Energy Flux (14)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 14] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_15",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (15)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 15] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_16",
    "titleEn": "Poynting Vector Energy Flux (16)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 16] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_17",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (17)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 17] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_18",
    "titleEn": "Poynting Vector Energy Flux (18)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 18] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_19",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (19)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 19] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_20",
    "titleEn": "Poynting Vector Energy Flux (20)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 20] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_21",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (21)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 21] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_22",
    "titleEn": "Poynting Vector Energy Flux (22)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 22] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_23",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (23)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 23] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_24",
    "titleEn": "Poynting Vector Energy Flux (24)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 24] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_25",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (25)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 25] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_26",
    "titleEn": "Poynting Vector Energy Flux (26)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 26] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_27",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (27)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 27] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_28",
    "titleEn": "Poynting Vector Energy Flux (28)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 28] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_29",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (29)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 29] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_30",
    "titleEn": "Poynting Vector Energy Flux (30)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 30] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_31",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (31)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 31] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_32",
    "titleEn": "Poynting Vector Energy Flux (32)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 32] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_33",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (33)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 33] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_34",
    "titleEn": "Poynting Vector Energy Flux (34)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 34] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_35",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (35)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 35] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_36",
    "titleEn": "Poynting Vector Energy Flux (36)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 36] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_37",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (37)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 37] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_38",
    "titleEn": "Poynting Vector Energy Flux (38)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 38] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_39",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (39)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 39] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_40",
    "titleEn": "Poynting Vector Energy Flux (40)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 40] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_41",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (41)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 41] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_42",
    "titleEn": "Poynting Vector Energy Flux (42)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 42] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_43",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (43)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 43] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_44",
    "titleEn": "Poynting Vector Energy Flux (44)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 44] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_45",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (45)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 45] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_46",
    "titleEn": "Poynting Vector Energy Flux (46)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 46] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_47",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (47)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 47] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_48",
    "titleEn": "Poynting Vector Energy Flux (48)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 48] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_49",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (49)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 49] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_50",
    "titleEn": "Poynting Vector Energy Flux (50)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 50] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_51",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (51)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 51] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_52",
    "titleEn": "Poynting Vector Energy Flux (52)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 52] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_53",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (53)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 53] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_54",
    "titleEn": "Poynting Vector Energy Flux (54)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 54] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_55",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (55)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 55] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_56",
    "titleEn": "Poynting Vector Energy Flux (56)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 56] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_57",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (57)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 57] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_58",
    "titleEn": "Poynting Vector Energy Flux (58)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 58] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_medium_59",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (59)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 59] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  }
],
  hots: [
  {
    "id": "egbac_phys_ch5_db_hots_01",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (1)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (1)",
    "difficulty": "hots",
    "questionEn": "James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_02",
    "titleEn": "Poynting Vector Energy Flux (2)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (2)",
    "difficulty": "hots",
    "questionEn": "The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_03",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (3)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 3] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_04",
    "titleEn": "Poynting Vector Energy Flux (4)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 4] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_05",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (5)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 5] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_06",
    "titleEn": "Poynting Vector Energy Flux (6)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 6] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_07",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (7)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 7] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_08",
    "titleEn": "Poynting Vector Energy Flux (8)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 8] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_09",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (9)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 9] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_10",
    "titleEn": "Poynting Vector Energy Flux (10)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 10] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_11",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (11)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 11] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_12",
    "titleEn": "Poynting Vector Energy Flux (12)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 12] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_13",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (13)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 13] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_14",
    "titleEn": "Poynting Vector Energy Flux (14)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 14] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_15",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (15)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 15] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_16",
    "titleEn": "Poynting Vector Energy Flux (16)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 16] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_17",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (17)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 17] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_18",
    "titleEn": "Poynting Vector Energy Flux (18)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 18] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_19",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (19)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 19] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_20",
    "titleEn": "Poynting Vector Energy Flux (20)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 20] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_21",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (21)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 21] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_22",
    "titleEn": "Poynting Vector Energy Flux (22)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 22] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_23",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (23)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 23] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_24",
    "titleEn": "Poynting Vector Energy Flux (24)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 24] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_25",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (25)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 25] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_26",
    "titleEn": "Poynting Vector Energy Flux (26)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 26] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_27",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (27)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 27] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_28",
    "titleEn": "Poynting Vector Energy Flux (28)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 28] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_29",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (29)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 29] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_30",
    "titleEn": "Poynting Vector Energy Flux (30)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 30] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_31",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (31)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 31] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_32",
    "titleEn": "Poynting Vector Energy Flux (32)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 32] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_33",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (33)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 33] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_34",
    "titleEn": "Poynting Vector Energy Flux (34)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 34] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_35",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (35)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 35] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_36",
    "titleEn": "Poynting Vector Energy Flux (36)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 36] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_37",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (37)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 37] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_38",
    "titleEn": "Poynting Vector Energy Flux (38)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 38] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_39",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (39)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 39] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_40",
    "titleEn": "Poynting Vector Energy Flux (40)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 40] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_41",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (41)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 41] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_42",
    "titleEn": "Poynting Vector Energy Flux (42)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 42] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_43",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (43)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 43] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_44",
    "titleEn": "Poynting Vector Energy Flux (44)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 44] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_45",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (45)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 45] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_46",
    "titleEn": "Poynting Vector Energy Flux (46)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 46] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_47",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (47)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 47] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_48",
    "titleEn": "Poynting Vector Energy Flux (48)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 48] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_49",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (49)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 49] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_50",
    "titleEn": "Poynting Vector Energy Flux (50)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 50] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_51",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (51)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 51] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_52",
    "titleEn": "Poynting Vector Energy Flux (52)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 52] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_53",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (53)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 53] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_54",
    "titleEn": "Poynting Vector Energy Flux (54)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 54] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_55",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (55)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 55] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_56",
    "titleEn": "Poynting Vector Energy Flux (56)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 56] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_57",
    "titleEn": "Ampere-Maxwell Law with Displacement Current (57)",
    "titleAr": "قانون أمبير-ماكسويل وتيار الإزاحة (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
    "questionAr": "[مسألة متدرجة 57] عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
    "optionsEn": [
      "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "The decay of stationary gravitational waves in empty space",
      "The mechanical compression of conductor lattice atoms",
      "The total ionization of noble gases in cold tubes"
    ],
    "optionsAr": [
      "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
      "اضمحلال موجات الجاذبية في الفضاء الفارغ",
      "الانضغاط الميكانيكي لذرات الشبكة البلورية",
      "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
    ],
    "correctAnswer": "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
    "correctIndex": 0,
    "hintEn": "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
    "hintAr": "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
    "stepByStepSolutionEn": [
      "Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."
    ],
    "stepByStepSolutionAr": [
      "أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."
    ],
    "teacherTipEn": "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
    "teacherTipAr": "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
  },
  {
    "id": "egbac_phys_ch5_db_hots_58",
    "titleEn": "Poynting Vector Energy Flux (58)",
    "titleAr": "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
    "questionAr": "[مسألة متدرجة 58] يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
    "optionsEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "optionsAr": [
      "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
      "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
      "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
    ],
    "correctAnswer": "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
    "correctIndex": 0,
    "hintEn": "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
    "hintAr": "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
    "stepByStepSolutionEn": [
      "$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."
    ],
    "stepByStepSolutionAr": [
      "متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."
    ],
    "teacherTipEn": "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
    "teacherTipAr": "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
  }
]
};
