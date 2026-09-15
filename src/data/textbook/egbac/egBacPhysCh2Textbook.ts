import type { SolvedProblem } from '../../../types/curriculum';

export const egBacPhysCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_phys_ch2_se_01",
    "titleEn": "Bohr Quantization of Orbital Angular Momentum",
    "titleAr": "تكميم كمية التحرك الزاوي المداري وفق نموذج بور",
    "difficulty": "easy",
    "questionEn": "According to Niels Bohr's first quantum postulate, the orbital angular momentum $L$ of an electron in a stable hydrogen orbit is quantized as $L = n\\hbar = \\frac{n h}{2\\pi}$. Calculate the angular momentum of an electron occupying the third stationary energy level ($n = 3$). (Given $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$).",
    "questionAr": "وفق الفرض الكمي الأول لنيلز بور، تتكمم كمية التحرك الزاوي المداري $L$ للإلكترون في المدارات المستقرة لذرة الهيدروجين بالعلاقة $L = n\\hbar = \\frac{n h}{2\\pi}$. احسب كمية التحرك الزاوي لإلكترون يشغل مستوى الطاقة المستقر الثالث ($n = 3$). (بمعلومية $h = 6.625 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$).",
    "optionsEn": [
      "$3.16 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$",
      "$1.05 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$",
      "$2.11 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$",
      "$4.22 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$"
    ],
    "optionsAr": [
      "$3.16 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$",
      "$1.05 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$",
      "$2.11 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$",
      "$4.22 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$"
    ],
    "correctAnswer": "$3.16 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$",
    "correctIndex": 0,
    "hintEn": "Formula: L = n * h / (2 * pi). Substitute n = 3.",
    "hintAr": "القانون: L = n * h / (2 * pi). عوض بـ n = 3.",
    "stepByStepSolutionEn": [
      "1. Bohr's quantization condition states $L = m_e v r = \\frac{n h}{2\\pi}$.",
      "2. For principal quantum number $n = 3$: $L = \\frac{3 \\times 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}}{2\\pi}$.",
      "3. Calculate: $L = \\frac{1.9875 \\times 10^{-33}}{6.283} \\approx 3.163 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط بور لتكميم كمية التحرك الزاوي: $L = m_e v r = \\frac{n h}{2\\pi}$.",
      "٢. لرقم الكم الرئيسي $n = 3$: $L = \\frac{3 \\times 6.625 \\times 10^{-34}}{2\\pi}$.",
      "٣. الحساب: $L \\approx 3.163 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$."
    ],
    "teacherTipEn": "Angular momentum is quantized in integer multiples of Dirac's constant ħ = h / (2π) ≈ 1.055 * 10^-34 J·s.",
    "teacherTipAr": "كمية التحرك الزاوي تتكمم دائماً في صورة مضاعفات صحيحة لثابت ديراك ħ = h / (2π)."
  },
  {
    "id": "egbac_phys_ch2_se_02",
    "titleEn": "Orbital Radii in the Bohr Hydrogen Model",
    "titleAr": "أنصاف أقطار المدارات في نموذج بور لذرة الهيدروجين",
    "difficulty": "easy",
    "questionEn": "The radius of the first Bohr orbit (Bohr radius) in a hydrogen atom is $r_1 = 0.529\\text{ Å} = 0.0529\\text{ nm}$. Given that orbit radius scales quadratically with principal quantum number ($r_n = n^2 r_1$), calculate the radius of the fourth orbit ($n = 4$).",
    "questionAr": "نصف قطر المدار الأول لبور (نصف قطر بور) في ذرة الهيدروجين يساوي $r_1 = 0.529\\text{ Å} = 0.0529\\text{ نانومتر}$. إذا كان نصف قطر المدار يتناسب طردياً مع مربع رقم الكم الرئيسي ($r_n = n^2 r_1$)، فاحسب نصف قطر المدار الرابع ($n = 4$).",
    "optionsEn": [
      "$0.212\\text{ nm}$",
      "$0.846\\text{ nm} \\; (8.464\\text{ Å})$",
      "$0.423\\text{ nm}$",
      "$1.693\\text{ nm}$"
    ],
    "optionsAr": [
      "$0.212\\text{ نانومتر}$",
      "$0.846\\text{ نانومتر} \\; (8.464\\text{ Å})$",
      "$0.423\\text{ نانومتر}$",
      "$1.693\\text{ نانومتر}$"
    ],
    "correctAnswer": "$0.846\\text{ nm} \\; (8.464\\text{ Å})$",
    "correctIndex": 1,
    "hintEn": "Use r_n = n^2 * r_1 with n = 4, so r_4 = 16 * r_1.",
    "hintAr": "طبق القانون r_n = n^2 * r_1 مع n = 4، فتكون r_4 = 16 * r_1.",
    "stepByStepSolutionEn": [
      "1. Relation for Bohr orbit radii: $r_n = n^2 \\cdot r_1$.",
      "2. For $n = 4$: $r_4 = 4^2 \\times 0.0529\\text{ nm} = 16 \\times 0.0529\\text{ nm}$.",
      "3. Compute: $r_4 = 0.8464\\text{ nm} = 8.464\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون نصف قطر مدار بور: $r_n = n^2 \\cdot r_1$.",
      "٢. للمستوى $n = 4$: $r_4 = 16 \\times 0.0529\\text{ نانومتر}$.",
      "٣. إذن: $r_4 = 0.8464\\text{ نانومتر} = 8.464\\text{ أنجستروم}$."
    ],
    "teacherTipEn": "The quadratic expansion of orbital radius explains why highly excited Rydberg atoms balloon to macroscopic diameters.",
    "teacherTipAr": "الزيادة التربيعية لنصف القطر تفسر كبر أحجام الذرات المثارة جداً (ذرات ريدبيرج)."
  },
  {
    "id": "egbac_phys_ch2_se_03",
    "titleEn": "Hydrogen Energy Levels and Ground State Ionization Energy",
    "titleAr": "مستويات طاقة الهيدروجين وطاقة تأين الحالة الأرضية",
    "difficulty": "medium",
    "questionEn": "The energy of the stationary orbit $n$ in atomic hydrogen is given by $E_n = -\\frac{13.6}{n^2}\\text{ eV}$. What is the energy of the first excited state ($n = 2$), and what minimum energy is required to ionize an electron from the ground state ($n = 1$) to infinity?",
    "questionAr": "تُعطى طاقة المدار المستقر $n$ في ذرة الهيدروجين بالعلاقة $E_n = -\\frac{13.6}{n^2}\\text{ إلكترون فولت}$. ما طاقة مستوى الإثارة الأول ($n = 2$)، وما الحد الأدنى من الطاقة اللازم لتأين الذرة بانتزاع إلكترونها من المستوى الأرضي ($n = 1$) إلى ما لا نهاية؟",
    "optionsEn": [
      "$E_2 = -6.80\\text{ eV}, \\quad E_{\\text{ion}} = +6.80\\text{ eV}$",
      "$E_2 = -1.51\\text{ eV}, \\quad E_{\\text{ion}} = +10.2\\text{ eV}$",
      "$E_2 = -3.40\\text{ eV}, \\quad E_{\\text{ion}} = +13.6\\text{ eV}$",
      "$E_2 = -3.40\\text{ eV}, \\quad E_{\\text{ion}} = +3.40\\text{ eV}$"
    ],
    "optionsAr": [
      "$E_2 = -6.80\\text{ إلكترون فولت}، \\quad E_{\\text{ion}} = +6.80\\text{ إلكترون فولت}$",
      "$E_2 = -1.51\\text{ إلكترون فولت}، \\quad E_{\\text{ion}} = +10.2\\text{ إلكترون فولت}$",
      "$E_2 = -3.40\\text{ إلكترون فولت}، \\quad E_{\\text{ion}} = +13.6\\text{ إلكترون فولت}$",
      "$E_2 = -3.40\\text{ إلكترون فولت}، \\quad E_{\\text{ion}} = +3.40\\text{ إلكترون فولت}$"
    ],
    "correctAnswer": "$E_2 = -3.40\\text{ eV}, \\quad E_{\\text{ion}} = +13.6\\text{ eV}$",
    "correctIndex": 2,
    "hintEn": "Calculate E_2 = -13.6 / 4 = -3.40 eV. Ionization energy is E_inf - E_1 = 0 - (-13.6) = +13.6 eV.",
    "hintAr": "احسب E_2 = -13.6 / 4 = -3.40 إلكترون فولت. طاقة التأين هي E_inf - E_1 = 0 - (-13.6) = +13.6 إلكترون فولت.",
    "stepByStepSolutionEn": [
      "1. Ground state energy: $E_1 = -\\frac{13.6}{1^2} = -13.6\\text{ eV}$.",
      "2. First excited state ($n = 2$): $E_2 = -\\frac{13.6}{2^2} = -\\frac{13.6}{4} = -3.40\\text{ eV}$.",
      "3. Ionization energy is the energy required to remove the electron completely ($n \\to \\infty$ where $E_\\infty = 0$): $E_{\\text{ion}} = E_\\infty - E_1 = 0 - (-13.6\\text{ eV}) = +13.6\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "١. طاقة المستوى الأرضي: $E_1 = -13.6\\text{ إلكترون فولت}$.",
      "٢. طاقة مستوى الإثارة الأول ($n = 2$): $E_2 = -\\frac{13.6}{4} = -3.40\\text{ إلكترون فولت}$.",
      "٣. طاقة التأين من المستوى الأرضي: $E_{\\text{ion}} = E_\\infty - E_1 = 0 - (-13.6) = +13.6\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "The negative sign indicates that the electron is bound to the nucleus by Coulomb electrostatic attraction.",
    "teacherTipAr": "الإشارة السالبة تعني أن الإلكترون مقيد داخل بئر الجهد الكهروستاتيكي للنواة."
  },
  {
    "id": "egbac_phys_ch2_se_04",
    "titleEn": "Ratio of Series Limit Wavelengths: Lyman vs Balmer",
    "titleAr": "نسبة الطول الموجي لأقصر خط في متسلسلة ليمان إلى بالمر",
    "difficulty": "medium",
    "questionEn": "The series limit (shortest wavelength $\\lambda_{\\min}$) corresponds to an electron transition from infinity ($n = \\infty$) to the series base level. Determine the ratio of the Lyman series limit to the Balmer series limit $\\frac{\\lambda_{\\text{Lyman},\\min}}{\\lambda_{\\text{Balmer},\\min}}$.",
    "questionAr": "يمثل حد المتسلسلة (أقصر طول موجي $\\lambda_{\\min}$) انتقال الإلكترون من ما لا نهاية ($n = \\infty$) إلى مستوى استقرار المتسلسلة. احسب النسبة بين أقصر طول موجي في متسلسلة ليمان إلى أقصر طول موجي في متسلسلة بالمر $\\frac{\\lambda_{\\text{Lyman},\\min}}{\\lambda_{\\text{Balmer},\\min}}$.",
    "optionsEn": [
      "$1 : 2$",
      "$4 : 1$",
      "$1 : 16$",
      "$1 : 4$"
    ],
    "optionsAr": [
      "$1 : 2$",
      "$4 : 1$",
      "$1 : 16$",
      "$1 : 4$"
    ],
    "correctAnswer": "$1 : 4$",
    "correctIndex": 3,
    "hintEn": "Rydberg formula: 1 / lambda = R_H * (1/n_1^2 - 1/n_2^2). For series limit, n_2 = inf.",
    "hintAr": "صيغة ريدبيرج: 1 / lambda = R_H * (1/n_1^2 - 1/n_2^2). لحد المتسلسلة ضع n_2 = ما لا نهاية.",
    "stepByStepSolutionEn": [
      "1. Rydberg formula for series limit: $\\frac{1}{\\lambda_{\\min}} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{\\infty}\\right) = \\frac{R_H}{n_1^2} \\implies \\lambda_{\\min} = \\frac{n_1^2}{R_H}$.",
      "2. For Lyman series, base level $n_1 = 1$: $\\lambda_{\\text{Lyman},\\min} = \\frac{1^2}{R_H} = \\frac{1}{R_H}$.",
      "3. For Balmer series, base level $n_1 = 2$: $\\lambda_{\\text{Balmer},\\min} = \\frac{2^2}{R_H} = \\frac{4}{R_H}$.",
      "4. Form the ratio: $\\frac{\\lambda_{\\text{Lyman},\\min}}{\\lambda_{\\text{Balmer},\\min}} = \\frac{1/R_H}{4/R_H} = \\frac{1}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة ريدبيرج لحد المتسلسلة: $\\frac{1}{\\lambda_{\\min}} = \\frac{R_H}{n_1^2} \\implies \\lambda_{\\min} = \\frac{n_1^2}{R_H}$.",
      "٢. لمتسلسلة ليمان ($n_1 = 1$): $\\lambda_{\\text{Lyman},\\min} = \\frac{1}{R_H}$.",
      "٣. لمتسلسلة بالمر ($n_1 = 2$): $\\lambda_{\\text{Balmer},\\min} = \\frac{4}{R_H}$.",
      "٤. إذن النسبة: $\\frac{\\lambda_{\\text{Lyman},\\min}}{\\lambda_{\\text{Balmer},\\min}} = \\frac{1}{4}$."
    ],
    "teacherTipEn": "Because Lyman transitions involve higher energy drops, all Lyman lines reside in the ultraviolet band, whereas Balmer lines are visible/near-UV.",
    "teacherTipAr": "نظراً لكبر فروق الطاقة في متسلسلة ليمان، تقع خطوطها جميعاً في نطاق الأشعة فوق البنفسجية، بينما تقع خطوط بالمر في نطاق الضوء المرئي."
  },
  {
    "id": "egbac_phys_ch2_se_05",
    "titleEn": "Longest Wavelength in the Paschen Series of Hydrogen",
    "titleAr": "أطول طول موجي في متسلسلة باشن لطيف ذرة الهيدروجين",
    "difficulty": "medium",
    "questionEn": "The longest wavelength (first line) in any hydrogen spectral series occurs for the transition from the adjacent higher level ($n_2 = n_1 + 1$). Given the Rydberg constant $R_H = 1.097 \\times 10^7\\text{ m}^{-1}$, calculate the wavelength of the first line of the Paschen series ($n_1 = 3, n_2 = 4$).",
    "questionAr": "يحدث أطول طول موجي (الخط الأول) في أي متسلسلة طيفية للهيدروجين عند انتقال الإلكترون من المستوى المجاور مباشرة ($n_2 = n_1 + 1$). بمعلومية ثابت ريدبيرج $R_H = 1.097 \\times 10^7\\text{ م}^{-1}$، احسب الطول الموجي للخط الأول في متسلسلة باشن ($n_1 = 3, n_2 = 4$).",
    "optionsEn": [
      "$1875\\text{ nm} \\; (1.875\\text{ μm})$",
      "$1282\\text{ nm}$",
      "$820\\text{ nm}$",
      "$656\\text{ nm}$"
    ],
    "optionsAr": [
      "$1875\\text{ نانومتر} \\; (1.875\\text{ ميكرومتر})$",
      "$1282\\text{ نانومتر}$",
      "$820\\text{ نانومتر}$",
      "$656\\text{ نانومتر}$"
    ],
    "correctAnswer": "$1875\\text{ nm} \\; (1.875\\text{ μm})$",
    "correctIndex": 0,
    "hintEn": "Use 1/lambda = R_H * (1/9 - 1/16) = R_H * 7 / 144, then invert.",
    "hintAr": "طبق صيغة ريدبيرج: 1/lambda = R_H * (1/9 - 1/16) = R_H * 7 / 144، ثم اقلب الكسر.",
    "stepByStepSolutionEn": [
      "1. Rydberg formula: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{3^2} - \\frac{1}{4^2}\\right) = R_H \\left(\\frac{1}{9} - \\frac{1}{16}\\right) = R_H \\left(\\frac{7}{144}\\right)$.",
      "2. Substitute $R_H = 1.097 \\times 10^7\\text{ m}^{-1}$: $\\frac{1}{\\lambda} = 1.097 \\times 10^7 \\times \\frac{7}{144} = 5.3326 \\times 10^5\\text{ m}^{-1}$.",
      "3. Invert to find wavelength: $\\lambda = \\frac{1}{5.3326 \\times 10^5} \\approx 1.875 \\times 10^{-6}\\text{ m} = 1875\\text{ nm}$ (Infrared region)."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة ريدبيرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{9} - \\frac{1}{16}\\right) = R_H \\left(\\frac{7}{144}\\right)$.",
      "٢. التعويض بثابت ريدبيرج: $\\frac{1}{\\lambda} = 1.097 \\times 10^7 \\times \\frac{7}{144} \\approx 5.333 \\times 10^5\\text{ م}^{-1}$.",
      "٣. إذن الطول الموجي: $\\lambda \\approx 1.875 \\times 10^{-6}\\text{ م} = 1875\\text{ نانومتر}$ (في نطاق الأشعة تحت الحمراء)."
    ],
    "teacherTipEn": "Paschen, Brackett, and Pfund series all lie entirely within the infrared spectrum.",
    "teacherTipAr": "تقع متسلسلات باشن وبراكت وفوند جميعها في نطاق الأشعة تحت الحمراء."
  },
  {
    "id": "egbac_phys_ch2_se_06",
    "titleEn": "Duane-Hunt Cutoff Wavelength in a Coolidge Tube",
    "titleAr": "الطول الموجي الأدنى الحرج (دوان - هنت) في أنبوبة كوليدج للأشعة السينية",
    "difficulty": "easy",
    "questionEn": "A Coolidge X-ray tube operates under an accelerating potential difference of $V = 40\\text{ kV}$. Given $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.0 \\times 10^8\\text{ m/s}$, and $e = 1.6 \\times 10^{-19}\\text{ C}$, determine the minimum cutoff wavelength $\\lambda_{\\min}$ of the continuous Bremsstrahlung spectrum.",
    "questionAr": "تعمل أنبوبة كوليدج لتوليد الأشعة السينية بفرق جهد معجل $V = 40\\text{ كيلو فولت}$. بمعلومية الثوابت الفيزيائية، احسب أقصر طول موجي $\\lambda_{\\min}$ لطيف الأشعة السينية المستمر (إشعاع الكبح أو الفرملة).",
    "optionsEn": [
      "$0.062\\text{ nm}$",
      "$0.031\\text{ nm} \\; (3.11 \\times 10^{-11}\\text{ m})$",
      "$0.124\\text{ nm}$",
      "$0.015\\text{ nm}$"
    ],
    "optionsAr": [
      "$0.062\\text{ نانومتر}$",
      "$0.031\\text{ نانومتر} \\; (3.11 \\times 10^{-11}\\text{ م})$",
      "$0.124\\text{ نانومتر}$",
      "$0.015\\text{ نانومتر}$"
    ],
    "correctAnswer": "$0.031\\text{ nm} \\; (3.11 \\times 10^{-11}\\text{ m})$",
    "correctIndex": 1,
    "hintEn": "Apply the Duane-Hunt law: lambda_min = hc / (e * V) or lambda_min(nm) = 1.24 / V(kV).",
    "hintAr": "طبق قانون دوان وهنت: lambda_min = hc / (e * V) أو الصيغة السريعة lambda_min(nm) = 1.24 / V(kV).",
    "stepByStepSolutionEn": [
      "1. Duane-Hunt relation for maximum photon energy: $h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}} = e V$.",
      "2. Solve for minimum wavelength: $\\lambda_{\\min} = \\frac{hc}{e V} = \\frac{(6.625 \\times 10^{-34})(3.0 \\times 10^8)}{(1.6 \\times 10^{-19})(40 \\times 10^3)}$.",
      "3. Calculate: $\\lambda_{\\min} = \\frac{1.9875 \\times 10^{-25}}{6.4 \\times 10^{-15}} \\approx 3.105 \\times 10^{-11}\\text{ m} \\approx 0.031\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "١. علاقة دوان وهنت لتحول طاقة الإلكترون المعجل بالكامل إلى فوتون واحد: $\\frac{hc}{\\lambda_{\\min}} = e V$.",
      "٢. حساب الطول الموجي الأدنى: $\\lambda_{\\min} = \\frac{hc}{e V} = \\frac{6.625 \\times 10^{-34} \\times 3.0 \\times 10^8}{1.6 \\times 10^{-19} \\times 40000}$.",
      "٣. الناتج: $\\lambda_{\\min} \\approx 3.105 \\times 10^{-11}\\text{ م} \\approx 0.031\\text{ نانومتر}$."
    ],
    "teacherTipEn": "Notice that λ_min depends solely on the accelerating voltage V and is completely independent of the anode target material!",
    "teacherTipAr": "لاحظ أن الحد الأدنى للطول الموجي المستمر يعتمد حصرياً على فرق الجهد المعجل ولا يتأثر إطلاقاً بنوع مادة الهدف!"
  },
  {
    "id": "egbac_phys_ch2_se_07",
    "titleEn": "Characteristic K-alpha X-Ray Wavelength for Molybdenum Target",
    "titleAr": "الطول الموجي للأشعة السينية المميزة K-alpha لهدف الموليبدينوم",
    "difficulty": "hots",
    "questionEn": "In a Coolidge tube with a molybdenum target ($Z = 42$), an electron transition from the $L$-shell to a vacancy in the $K$-shell produces a characteristic $K_\\alpha$ X-ray photon. The binding energy of the $K$-shell is $E_K = -20.00\\text{ keV}$ and for the $L$-shell is $E_L = -2.52\\text{ keV}$. Calculate the wavelength of the emitted $K_\\alpha$ spectral line.",
    "questionAr": "في أنبوبة كوليدج ذات هدف من الموليبدينوم ($Z = 42$)، أدى انتقال إلكترون من المستوى $L$ لملء فجوة في المستوى $K$ إلى انبعاث فوتون أشعة سينية مميزة $K_\\alpha$. إذا كانت طاقة ربط إلكترون المستوى $K$ هي $E_K = -20.00\\text{ keV}$ وللمستوى $L$ هي $E_L = -2.52\\text{ keV}$، فاحسب الطول الموجي لخط $K_\\alpha$ المنبعث.",
    "optionsEn": [
      "$0.035\\text{ nm}$",
      "$0.142\\text{ nm}$",
      "$0.071\\text{ nm} \\; (0.71\\text{ Å})$",
      "$0.284\\text{ nm}$"
    ],
    "optionsAr": [
      "$0.035\\text{ نانومتر}$",
      "$0.142\\text{ نانومتر}$",
      "$0.071\\text{ نانومتر} \\; (0.71\\text{ Å})$",
      "$0.284\\text{ نانومتر}$"
    ],
    "correctAnswer": "$0.071\\text{ nm} \\; (0.71\\text{ Å})$",
    "correctIndex": 2,
    "hintEn": "Calculate photon energy ΔE = E_L - E_K in eV, then use λ = 1240 / ΔE(eV) nm.",
    "hintAr": "احسب طاقة الفوتون ΔE = E_L - E_K بالإلكترون فولت، ثم طبق λ = 1240 / ΔE(eV) نانومتر.",
    "stepByStepSolutionEn": [
      "1. Photon energy released in transition: $\\Delta E = E_L - E_K = -2.52 - (-20.00) = 17.48\\text{ keV} = 17,480\\text{ eV}$.",
      "2. Calculate wavelength using $hc = 1240\\text{ eV}\\cdot\\text{nm}$: $\\lambda_{K_\\alpha} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{17,480\\text{ eV}} \\approx 0.07094\\text{ nm} \\approx 0.071\\text{ nm}$ ($0.71\\text{ \\AA}$)."
    ],
    "stepByStepSolutionAr": [
      "١. طاقة الفوتون المنبعث من انتقال $L \\to K$: $\\Delta E = -2.52 - (-20.00) = 17.48\\text{ كيلو إلكترون فولت}$.",
      "٢. حساب الطول الموجي: $\\lambda_{K_\\alpha} = \\frac{1240}{17480} \\approx 0.0709\\text{ نانومتر} \\approx 0.071\\text{ نانومتر}$."
    ],
    "teacherTipEn": "Characteristic line X-rays depend strictly on the atomic number Z of the target material, unlike the continuous spectrum.",
    "teacherTipAr": "الأشعة السينية المميزة (الخطية) تعتمد حصرياً على العدد الذري Z لمادة مادة الهدف بعكس الطيف المستمر."
  },
  {
    "id": "egbac_phys_ch2_se_08",
    "titleEn": "Moseley's Law for Characteristic X-Ray Frequencies",
    "titleAr": "قانون موزلي للترددات المميزة للأشعة السينية",
    "difficulty": "hots",
    "questionEn": "Moseley's law states that the square root of the characteristic $K_\\alpha$ X-ray frequency is directly proportional to $(Z - 1)$: $\\sqrt{\\nu} = a(Z - 1)$. If target element $A$ with $Z_A = 29$ (Copper) emits $K_\\alpha$ X-rays of frequency $\\nu_A = 1.94 \\times 10^{18}\\text{ Hz}$, what is the atomic number $Z_B$ of an unknown target element that emits $K_\\alpha$ X-rays of frequency $\\nu_B = 3.96 \\times 10^{18}\\text{ Hz}$?",
    "questionAr": "ينص قانون موزلي على أن الجذر التربيعي لتردد أشعة $K_\\alpha$ المميزة يتناسب طردياً مع $(Z - 1)$: $\\sqrt{\\nu} = a(Z - 1)$. إذا كان عنصر الهدف $A$ ذو العدد الذري $Z_A = 29$ (النحاس) يبعث أشعة $K_\\alpha$ بتردد $\\nu_A = 1.94 \\times 10^{18}\\text{ هرتز}$، فما العدد الذري $Z_B$ لعنصر هدف مجهول يبعث أشعة $K_\\alpha$ بتردد $\\nu_B = 3.96 \\times 10^{18}\\text{ هرتز}$؟",
    "optionsEn": [
      "$Z_B = 35$",
      "$Z_B = 49$",
      "$Z_B = 58$",
      "$Z_B = 41$"
    ],
    "optionsAr": [
      "$Z_B = 35$",
      "$Z_B = 49$",
      "$Z_B = 58$",
      "$Z_B = 41$"
    ],
    "correctAnswer": "$Z_B = 41$",
    "correctIndex": 3,
    "hintEn": "Form the ratio: √(nu_B / nu_A) = (Z_B - 1) / (Z_A - 1).",
    "hintAr": "كون النسبة: √(nu_B / nu_A) = (Z_B - 1) / (Z_A - 1).",
    "stepByStepSolutionEn": [
      "1. By Moseley's law: $\\frac{\\sqrt{\\nu_B}}{\\sqrt{\\nu_A}} = \\frac{Z_B - 1}{Z_A - 1}$.",
      "2. Compute frequency ratio: $\\frac{\\nu_B}{\\nu_A} = \\frac{3.96 \\times 10^{18}}{1.94 \\times 10^{18}} \\approx 2.0412$.",
      "3. Take the square root: $\\sqrt{2.0412} \\approx 1.4287$.",
      "4. Solve for $Z_B$: $\\frac{Z_B - 1}{29 - 1} = 1.4287 \\implies Z_B - 1 = 28 \\times 1.4287 = 40.0 \\implies Z_B = 41$ (Niobium)."
    ],
    "stepByStepSolutionAr": [
      "١. من قانون موزلي: $\\frac{\\sqrt{\\nu_B}}{\\sqrt{\\nu_A}} = \\frac{Z_B - 1}{Z_A - 1}$.",
      "٢. نسبة الترددين: $\\frac{\\nu_B}{\\nu_A} \\approx 2.0412$.",
      "٣. أخذ الجذر التربيعي: $\\sqrt{2.0412} \\approx 1.4287$.",
      "٤. إيجاد $Z_B$: $\\frac{Z_B - 1}{28} = 1.4287 \\implies Z_B - 1 = 40 \\implies Z_B = 41$ (عنصر النيوبيوم)."
    ],
    "teacherTipEn": "Moseley's historic discovery proved that atomic number Z (nuclear charge) determines the periodic ordering of elements, replacing atomic mass.",
    "teacherTipAr": "أثبت اكتشاف موزلي التاريخي أن العدد الذري Z (شحنة النواة) هو الأساس الحقيقي لترتيب العناصر دورياً وليس الوزن الذري."
  },
  {
    "id": "egbac_phys_ch2_se_09",
    "titleEn": "Bragg Diffraction of Monochromatic X-Rays in a Crystal",
    "titleAr": "حيود براغ للأشعة السينية أحادية اللون في بلورة",
    "difficulty": "medium",
    "questionEn": "A monochromatic X-ray beam of wavelength $\\lambda = 0.154\\text{ nm}$ undergoes first-order ($n = 1$) constructive Bragg diffraction from rock salt crystal planes at a glancing angle of $\\theta = 15.8^\\circ$. Using Bragg's law $2d\\sin\\theta = n\\lambda$, determine the interplanar spacing $d$ of the crystal.",
    "questionAr": "تسقط حزمة أشعة سينية أحادية اللون طولها الموجي $\\lambda = 0.154\\text{ نانومتر}$ على بلورة ملح صخري، فيحدث حيود بناء من الرتبة الأولى ($n = 1$) عند زاوية سقوط مماسية $\\theta = 15.8^\\circ$. باستخدام قانون براغ $2d\\sin\\theta = n\\lambda$، احسب المسافة البينية بين مستويات البلورة $d$.",
    "optionsEn": [
      "$0.283\\text{ nm} \\; (2.83\\text{ Å})$",
      "$0.141\\text{ nm}$",
      "$0.565\\text{ nm}$",
      "$0.385\\text{ nm}$"
    ],
    "optionsAr": [
      "$0.283\\text{ نانومتر} \\; (2.83\\text{ Å})$",
      "$0.141\\text{ نانومتر}$",
      "$0.565\\text{ نانومتر}$",
      "$0.385\\text{ نانومتر}$"
    ],
    "correctAnswer": "$0.283\\text{ nm} \\; (2.83\\text{ Å})$",
    "correctIndex": 0,
    "hintEn": "Formula: d = n * lambda / (2 * sin theta). Note that sin(15.8°) ≈ 0.2723.",
    "hintAr": "القانون: d = n * lambda / (2 * sin theta). علم أن جا(١٥٫٨°) ≈ ٠٫٢٧٢٣.",
    "stepByStepSolutionEn": [
      "1. Bragg's law: $2 d \\sin\\theta = n \\lambda \\implies d = \\frac{n \\lambda}{2 \\sin\\theta}$.",
      "2. For $n = 1$: $d = \\frac{0.154\\text{ nm}}{2 \\sin(15.8^\\circ)} = \\frac{0.154}{2 \\times 0.2723}$.",
      "3. Compute: $d = \\frac{0.154}{0.5446} \\approx 0.2828\\text{ nm} \\approx 0.283\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون براغ للحيود: $d = \\frac{n \\lambda}{2 \\sin\\theta}$.",
      "٢. للرتبة الأولى: $d = \\frac{0.154}{2 \\times 0.2723}$.",
      "٣. الحساب: $d \\approx 0.283\\text{ نانومتر} = 2.83\\text{ أنجستروم}$."
    ],
    "teacherTipEn": "X-ray crystallography relies on the fact that X-ray wavelengths are strictly comparable to interatomic lattice spacings.",
    "teacherTipAr": "يعتمد التحليل البلوري بالأشعة السينية على أن أطوالها الموجية تماثل بدقة أبعاد المسافات بين الذرات في الشبكة البلورية."
  },
  {
    "id": "egbac_phys_ch2_se_10",
    "titleEn": "Orbital Velocity and Kinetic Energy of Electron in Ground State Hydrogen",
    "titleAr": "السرعة المدارية وطاقة الحركة لإلكترون في المدار الأرضي للهيدروجين",
    "difficulty": "hots",
    "questionEn": "In the ground state ($n = 1$) of atomic hydrogen, the total energy is $E_1 = -13.6\\text{ eV}$. According to the virial theorem for Coulomb electrostatic central forces, the kinetic energy is $KE = -E_1 = +13.6\\text{ eV}$. Given $m_e = 9.1 \\times 10^{-31}\\text{ kg}$ and $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$, calculate the orbital speed $v_1$ of the electron and its ratio to the speed of light $c$.",
    "questionAr": "في الحالة الأرضية ($n = 1$) لذرة الهيدروجين، الطاقة الكلية هي $E_1 = -13.6\\text{ إلكترون فولت}$. وفق نظرية فيريال للقوى الكهروستاتيكية المركزية، طاقة الحركة تساوي $KE = -E_1 = +13.6\\text{ إلكترون فولت}$. بمعلومية كتلة الإلكترون وشحنته، احسب السرعة المدارية $v_1$ للإلكترون ونسبتها إلى سرعة الضوء $c$.",
    "optionsEn": [
      "$v_1 = 4.38 \\times 10^6\\text{ m/s} \\; \\left(\\frac{v_1}{c} \\approx \\frac{1}{68}\\right)$",
      "$v_1 = 2.19 \\times 10^6\\text{ m/s} \\; \\left(\\frac{v_1}{c} \\approx \\frac{1}{137}\\right)$",
      "$v_1 = 1.09 \\times 10^6\\text{ m/s} \\; \\left(\\frac{v_1}{c} \\approx \\frac{1}{274}\\right)$",
      "$v_1 = 3.00 \\times 10^7\\text{ m/s} \\; \\left(\\frac{v_1}{c} \\approx \\frac{1}{10}\\right)$"
    ],
    "optionsAr": [
      "$v_1 = 4.38 \\times 10^6\\text{ م/ث} \\; \\left(\\frac{v_1}{c} \\approx \\frac{1}{68}\\right)$",
      "$v_1 = 2.19 \\times 10^6\\text{ م/ث} \\; \\left(\\frac{v_1}{c} \\approx \\frac{1}{137}\\right)$",
      "$v_1 = 1.09 \\times 10^6\\text{ م/ث} \\; \\left(\\frac{v_1}{c} \\approx \\frac{1}{274}\\right)$",
      "$v_1 = 3.00 \\times 10^7\\text{ م/ث} \\; \\left(\\frac{v_1}{c} \\approx \\frac{1}{10}\\right)$"
    ],
    "correctAnswer": "$v_1 = 2.19 \\times 10^6\\text{ m/s} \\; \\left(\\frac{v_1}{c} \\approx \\frac{1}{137}\\right)$",
    "correctIndex": 1,
    "hintEn": "Convert KE = 13.6 eV to Joules (2.176 * 10^-18 J), then v = √(2 * KE / m_e).",
    "hintAr": "حول طاقة الحركة إلى جول (2.176 * 10^-18 جول)، ثم احسب السرعة v = √(2 * KE / m_e).",
    "stepByStepSolutionEn": [
      "1. Convert kinetic energy: $KE = 13.6 \\times (1.6 \\times 10^{-19}\\text{ J}) = 2.176 \\times 10^{-18}\\text{ J}$.",
      "2. Relate to speed: $v_1 = \\sqrt{\\frac{2 KE}{m_e}} = \\sqrt{\\frac{2(2.176 \\times 10^{-18})}{9.1 \\times 10^{-31}}} = \\sqrt{4.782 \\times 10^{12}} \\approx 2.187 \\times 10^6\\text{ m/s}$.",
      "3. Ratio to $c$: $\\frac{v_1}{c} = \\frac{2.187 \\times 10^6}{3.0 \\times 10^8} \\approx \\frac{1}{137.1} = \\alpha$ (the fine-structure constant)."
    ],
    "stepByStepSolutionAr": [
      "١. تحويل طاقة الحركة إلى جول: $KE = 13.6 \\times 1.6 \\times 10^{-19} = 2.176 \\times 10^{-18}\\text{ جول}$.",
      "٢. حساب السرعة: $v_1 = \\sqrt{\\frac{2 KE}{m_e}} = \\sqrt{\\frac{2 \\times 2.176 \\times 10^{-18}}{9.1 \\times 10^{-31}}} \\approx 2.187 \\times 10^6\\text{ م/ث}$.",
      "٣. النسبة لسرعة الضوء: $\\frac{v_1}{c} \\approx \\frac{1}{137}$ (ثابت البناء الدقيق في فيزياء الكم)."
    ],
    "teacherTipEn": "The ratio v_1 / c is equal to the fundamental fine-structure constant α ≈ 1/137, confirming that relativistic corrections for hydrogen ground state are very small (~0.005%).",
    "teacherTipAr": "نسبة سرعة الإلكترون إلى سرعة الضوء تساوي ثابت البناء الدقيق α ≈ 1/137، مما يوضح دقة نموذج بور الكلاسيكي للهيدروجين."
  }
];

export const egBacPhysCh2Exercises: SolvedProblem[] = [
  {
    "id": "egbac_phys_ch2_ex_01",
    "titleEn": "Orbital Electron Magnetic Dipole Moment (Bohr Magneton)",
    "titleAr": "عزم ثنائي القطب المغناطيسي المداري للإلكترون (مغناطون بور)",
    "difficulty": "medium",
    "questionEn": "An electron circulating in orbit $n$ forms an equivalent tiny current loop. The magnetic dipole moment associated with orbital angular momentum $L = n\\hbar$ is $\\mu_L = \\frac{e}{2 m_e} L$. For the ground state $n = 1$, calculate the value of the Bohr magneton $\\mu_B = \\frac{e \\hbar}{2 m_e}$.",
    "questionAr": "يشكل دوران الإلكترون في مداره حلقة تيار دائرية مكافئة. يُعطى عزم ثنائي القطب المغناطيسي المداري المصاحب لكمية التحرك الزاوي بالعلاقة $\\mu_L = \\frac{e}{2 m_e} L$. للحالة الأرضية $n = 1$، احسب قيمة مغناطون بور $\\mu_B = \\frac{e \\hbar}{2 m_e}$.",
    "optionsEn": [
      "$1.85 \\times 10^{-23}\\text{ J/T}$",
      "$4.64 \\times 10^{-24}\\text{ J/T}$",
      "$9.27 \\times 10^{-24}\\text{ J/T}$",
      "$1.60 \\times 10^{-19}\\text{ J/T}$"
    ],
    "optionsAr": [
      "$1.85 \\times 10^{-23}\\text{ جول/تسلا}$",
      "$4.64 \\times 10^{-24}\\text{ جول/تسلا}$",
      "$9.27 \\times 10^{-24}\\text{ جول/تسلا}$",
      "$1.60 \\times 10^{-19}\\text{ جول/تسلا}$"
    ],
    "correctAnswer": "$9.27 \\times 10^{-24}\\text{ J/T}$",
    "correctIndex": 2,
    "hintEn": "Substitute constants: e = 1.6 * 10^-19 C, ħ = 1.055 * 10^-34 J·s, m_e = 9.1 * 10^-31 kg.",
    "hintAr": "عوض بالثوابت: e = 1.6 * 10^-19، ħ = 1.055 * 10^-34، m_e = 9.1 * 10^-31.",
    "stepByStepSolutionEn": [
      "1. Formula for Bohr magneton: $\\mu_B = \\frac{e \\hbar}{2 m_e}$.",
      "2. Substitute: $\\mu_B = \\frac{(1.6 \\times 10^{-19}\\text{ C})(1.055 \\times 10^{-34}\\text{ J}\\cdot\\text{s})}{2(9.1 \\times 10^{-31}\\text{ kg})}$.",
      "3. Compute: $\\mu_B = \\frac{1.688 \\times 10^{-53}}{1.82 \\times 10^{-30}} \\approx 9.275 \\times 10^{-24}\\text{ J/T}$ (or $\\text{A}\\cdot\\text{m}^2$)."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة مغناطون بور: $\\mu_B = \\frac{e \\hbar}{2 m_e}$.",
      "٢. التعويض بالقيم: $\\mu_B = \\frac{1.6 \\times 10^{-19} \\times 1.055 \\times 10^{-34}}{2 \\times 9.1 \\times 10^{-31}}$.",
      "٣. الناتج: $\\mu_B \\approx 9.275 \\times 10^{-24}\\text{ جول/تسلا}$ (أو أمبير$\\cdot$م$^2$)."
    ],
    "teacherTipEn": "The Bohr magneton is the natural quantum unit for measuring atomic and electronic magnetic moments.",
    "teacherTipAr": "مغناطون بور هو الوحدة الكمية الطبيعية لقياس العزوم المغناطيسية الذرية والإلكترونية."
  },
  {
    "id": "egbac_phys_ch2_ex_02",
    "titleEn": "Wavelength of the H-alpha Spectral Line in the Balmer Series",
    "titleAr": "الطول الموجي لخط H-alpha الأحمر في متسلسلة بالمر",
    "difficulty": "easy",
    "questionEn": "The prominent red $H_\\alpha$ line in the emission spectrum of glowing hydrogen gas corresponds to the transition from $n = 3$ to $n = 2$. Given $R_H = 1.097 \\times 10^7\\text{ m}^{-1}$, determine the wavelength of the $H_\\alpha$ line in nanometers.",
    "questionAr": "خط $H_\\alpha$ الأحمر البارز في طيف انبعاث غاز الهيدروجين المتوهج ينتج عن انتقال الإلكترون من المستوى $n = 3$ إلى المستوى $n = 2$. بمعلومية ثابت ريدبيرج $R_H = 1.097 \\times 10^7\\text{ م}^{-1}$، احسب الطول الموجي لخط $H_\\alpha$ بوحدة النانومتر.",
    "optionsEn": [
      "$486.1\\text{ nm}$",
      "$434.0\\text{ nm}$",
      "$410.2\\text{ nm}$",
      "$656.3\\text{ nm}$"
    ],
    "optionsAr": [
      "$486.1\\text{ نانومتر}$",
      "$434.0\\text{ نانومتر}$",
      "$410.2\\text{ نانومتر}$",
      "$656.3\\text{ نانومتر}$"
    ],
    "correctAnswer": "$656.3\\text{ nm}$",
    "correctIndex": 3,
    "hintEn": "Rydberg formula: 1/lambda = R_H * (1/4 - 1/9) = R_H * (5/36). Invert to find lambda.",
    "hintAr": "صيغة ريدبيرج: 1/lambda = R_H * (1/4 - 1/9) = R_H * (5/36). اقلب الكسر لإيجاد الطول الموجي.",
    "stepByStepSolutionEn": [
      "1. Rydberg formula: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{2^2} - \\frac{1}{3^2}\\right) = R_H \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = \\frac{5}{36} R_H$.",
      "2. Invert: $\\lambda = \\frac{36}{5 R_H} = \\frac{36}{5 \\times 1.097 \\times 10^7} = \\frac{36}{5.485 \\times 10^7} \\approx 6.563 \\times 10^{-7}\\text{ m} = 656.3\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة ريدبيرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = \\frac{5}{36} R_H$.",
      "٢. قلب الكسر: $\\lambda = \\frac{36}{5 \\times 1.097 \\times 10^7} \\approx 6.563 \\times 10^{-7}\\text{ م} = 656.3\\text{ نانومتر}$."
    ],
    "teacherTipEn": "This bright red line gives interstellar hydrogen nebulae their characteristic crimson glow in astronomical photography.",
    "teacherTipAr": "هذا الخط الأحمر الساطع هو المسؤول عن التوهج القرمزي المميز لسدم الهيدروجين في الفضاء."
  },
  {
    "id": "egbac_phys_ch2_ex_03",
    "titleEn": "Number of Possible Spectral Lines from Excited Level n = 4",
    "titleAr": "عدد الخطوط الطيفية المحتمل انبعاثها من ذرات مثارة في المستوى الرابع",
    "difficulty": "easy",
    "questionEn": "A sample of hydrogen atoms is excited to the stationary energy level $n = 4$. As these atoms cascade back down to the ground state through spontaneous emission, what is the maximum number of distinct spectral lines that can be observed?",
    "questionAr": "أثيرت عينة من ذرات الهيدروجين إلى مستوى الطاقة المستقر الرابع ($n = 4$). عند عودة الإلكترونات في هذه الذرات إلى المستوى الأرضي عبر الانبعاث التلقائي، ما أقصى عدد من الخطوط الطيفية المميزة التي يمكن رصدها؟",
    "optionsEn": [
      "$6\\text{ spectral lines}$",
      "$4\\text{ spectral lines}$",
      "$3\\text{ spectral lines}$",
      "$10\\text{ spectral lines}$"
    ],
    "optionsAr": [
      "$6\\text{ خطوط طيفية}$",
      "$4\\text{ خطوط طيفية}$",
      "$3\\text{ خطوط طيفية}$",
      "$10\\text{ خطوط طيفية}$"
    ],
    "correctAnswer": "$6\\text{ spectral lines}$",
    "correctIndex": 0,
    "hintEn": "Formula for number of emission transitions: N = n * (n - 1) / 2.",
    "hintAr": "قانون عدد احتمالات الانتقال الطيفي: N = n * (n - 1) / 2.",
    "stepByStepSolutionEn": [
      "1. Use combination formula: $N = \\binom{n}{2} = \\frac{n(n - 1)}{2}$.",
      "2. For $n = 4$: $N = \\frac{4(4 - 1)}{2} = \\frac{12}{2} = 6$.",
      "3. The 6 transitions are: $4 \\to 3, 4 \\to 2, 4 \\to 1, 3 \\to 2, 3 \\to 1$, and $2 \\to 1$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون التوافيق لعدد خطوط الانبعاث: $N = \\frac{n(n - 1)}{2}$.",
      "٢. عند $n = 4$: $N = \\frac{4 \\times 3}{2} = 6$.",
      "٣. الانتقالات الستة هي: $4 \\to 3$، $4 \\to 2$، $4 \\to 1$، $3 \\to 2$، $3 \\to 1$، و $2 \\to 1$."
    ],
    "teacherTipEn": "Of these 6 lines: 3 belong to Lyman (UV), 2 belong to Balmer (visible), and 1 belongs to Paschen (IR).",
    "teacherTipAr": "من هذه الخطوط الستة: 3 تنتمي لمتسلسلة ليمان، وخطان لبالمر، وخط واحد لباسن."
  },
  {
    "id": "egbac_phys_ch2_ex_04",
    "titleEn": "Independence of X-Ray Cutoff Wavelength from Anode Material",
    "titleAr": "عدم اعتماد الطول الموجي الأدنى للأشعة السينية على مادة المصعد",
    "difficulty": "easy",
    "questionEn": "In an X-ray Coolidge tube, which parameter determines the minimum cutoff wavelength $\\lambda_{\\min}$ of the continuous spectrum?",
    "questionAr": "في أنبوبة كوليدج لإنتاج الأشعة السينية، ما العامل الذي يحدد الطول الموجي الأدنى $\\lambda_{\\min}$ للطيف المستمر؟",
    "optionsEn": [
      "The atomic number of the target anode material.",
      "The potential difference applied between cathode and anode exclusively.",
      "The heating current flowing through the cathode filament.",
      "The distance separating the filament and target."
    ],
    "optionsAr": [
      "العدد الذري لمادة هدف المصعد.",
      "فرق الجهد المطبق بين المهبط والمصعد حصرياً.",
      "شدة تيار تسخين فتيلة المهبط.",
      "المسافة الفاصلة بين الفتيلة والهدف."
    ],
    "correctAnswer": "The potential difference applied between cathode and anode exclusively.",
    "correctIndex": 1,
    "hintEn": "Continuous X-ray cutoff is given by lambda_min = hc / (eV), which depends only on accelerating voltage V.",
    "hintAr": "الحد الأدنى للطيف المستمر يُعطى بالعلاقة lambda_min = hc / (eV)، والتي تعتمد حصرياً على فرق الجهد V.",
    "stepByStepSolutionEn": [
      "1. By the Duane-Hunt law: $\\lambda_{\\min} = \\frac{hc}{e V}$.",
      "2. The formula contains only fundamental constants ($h, c, e$) and accelerating voltage $V$.",
      "3. Therefore, altering the anode material from copper to tungsten does not change $\\lambda_{\\min}$ if voltage $V$ is kept constant."
    ],
    "stepByStepSolutionAr": [
      "١. من قانون دوان - هنت: $\\lambda_{\\min} = \\frac{hc}{e V}$.",
      "٢. المعادلة تحتوي فقط على ثوابت فيزيائية وفرق الجهد المعجل $V$.",
      "٣. ولذلك فإن تغيير مادة الهدف لا يغير $\\lambda_{\\min}$ إطلاقاً طالما ظل فرق الجهد ثابتاً."
    ],
    "teacherTipEn": "Target atomic number Z shifts the characteristic line spectrum, but NOT the continuous spectrum cutoff.",
    "teacherTipAr": "العدد الذري للهدف Z يغير أطوال الطيف الخطي المميز، ولكنه لا يغير الحد الأدنى للطيف المستمر."
  },
  {
    "id": "egbac_phys_ch2_ex_05",
    "titleEn": "Operating Voltage for a Hard X-Ray Tube",
    "titleAr": "فرق الجهد التشغيلي لأنبوبة أشعة سينية نافذة",
    "difficulty": "medium",
    "questionEn": "A medical diagnostic X-ray machine requires a minimum continuous wavelength of $\\lambda_{\\min} = 0.025\\text{ nm}$ ($0.25\\text{ Å}$). Calculate the necessary high voltage $V$ across the Coolidge tube.",
    "questionAr": "تتطلب آلة أشعة سينية للتشخيص الطبي أن يكون أقصر طول موجي لطيفها المستمر $\\lambda_{\\min} = 0.025\\text{ نانومتر}$. احسب فرق الجهد العالي $V$ اللازم تطبيقه بين طرفي أنبوبة كوليدج.",
    "optionsEn": [
      "$24.8\\text{ kV}$",
      "$99.2\\text{ kV}$",
      "$49.6\\text{ kV}$",
      "$12.4\\text{ kV}$"
    ],
    "optionsAr": [
      "$24.8\\text{ كيلو فولت}$",
      "$99.2\\text{ كيلو فولت}$",
      "$49.6\\text{ كيلو فولت}$",
      "$12.4\\text{ كيلو فولت}$"
    ],
    "correctAnswer": "$49.6\\text{ kV}$",
    "correctIndex": 2,
    "hintEn": "Use V = hc / (e * lambda_min) or V = 1240 / lambda_min(nm) in volts.",
    "hintAr": "استخدم V = hc / (e * lambda_min) أو V = 1240 / lambda_min(nm) بالفولت.",
    "stepByStepSolutionEn": [
      "1. From the Duane-Hunt equation: $e V = \\frac{hc}{\\lambda_{\\min}} \\implies V = \\frac{hc}{e \\lambda_{\\min}}$.",
      "2. Using $hc / e \\approx 1240\\text{ V}\\cdot\\text{nm}$: $V = \\frac{1240\\text{ V}\\cdot\\text{nm}}{0.025\\text{ nm}} = 49,600\\text{ V} = 49.6\\text{ kV}$."
    ],
    "stepByStepSolutionAr": [
      "١. من معادلة دوان وهنت: $V = \\frac{hc}{e \\lambda_{\\min}}$.",
      "٢. باستخدام الثابت التقريبي $hc/e \\approx 1240$: $V = \\frac{1240}{0.025} = 49600\\text{ فولت} = 49.6\\text{ كيلو فولت}$."
    ],
    "teacherTipEn": "Higher voltages produce harder, more penetrating X-rays with smaller minimum wavelengths.",
    "teacherTipAr": "كلما زاد فرق الجهد المعجل، زادت طاقة الأشعة السينية وقدرتها على النفاذ وقل طولها الموجي الأدنى."
  },
  {
    "id": "egbac_phys_ch2_ex_06",
    "titleEn": "Energy Separation Between K and L Shells in Tungsten Target",
    "titleAr": "فرق الطاقة بين المستويين K و L في ذرة هدف التنجستن",
    "difficulty": "medium",
    "questionEn": "A tungsten target ($Z = 74$) in an industrial tube emits characteristic $K_\\alpha$ radiation of wavelength $\\lambda = 0.0210\\text{ nm}$. Determine the energy difference $\\Delta E = E_L - E_K$ between the $K$ and $L$ electron shells in electron-volts ($\\text{eV}$).",
    "questionAr": "يبعث هدف تنجستن ($Z = 74$) في أنبوبة صناعية إشعاع $K_\\alpha$ المميز بطول موجي $\\lambda = 0.0210\\text{ نانومتر}$. احسب فرق الطاقة $\\Delta E = E_L - E_K$ بين المستويين $K$ و $L$ بوحدة الإلكترون فولت ($\\text{eV}$).",
    "optionsEn": [
      "$29.52\\text{ keV}$",
      "$118.1\\text{ keV}$",
      "$12.40\\text{ keV}$",
      "$59.05\\text{ keV}$"
    ],
    "optionsAr": [
      "$29.52\\text{ كيلو إلكترون فولت}$",
      "$118.1\\text{ كيلو إلكترون فولت}$",
      "$12.40\\text{ كيلو إلكترون فولت}$",
      "$59.05\\text{ كيلو إلكترون فولت}$"
    ],
    "correctAnswer": "$59.05\\text{ keV}$",
    "correctIndex": 3,
    "hintEn": "Calculate photon energy E = hc / lambda = 1240 / 0.0210 eV.",
    "hintAr": "احسب طاقة الفوتون E = hc / lambda = 1240 / 0.0210 إلكترون فولت.",
    "stepByStepSolutionEn": [
      "1. The $K_\\alpha$ line is produced by a transition from $L \\to K$, so photon energy equals the shell energy difference.",
      "2. Apply energy-wavelength relation: $\\Delta E = \\frac{hc}{\\lambda} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{0.0210\\text{ nm}} \\approx 59,048\\text{ eV} \\approx 59.05\\text{ keV}$."
    ],
    "stepByStepSolutionAr": [
      "١. ينتج خط $K_\\alpha$ عن انتقال إلكترون من المستوى $L$ إلى $K$، فطاقة الفوتون تساوي فرق طاقتي المستويين.",
      "٢. حساب الطاقة: $\\Delta E = \\frac{1240}{0.0210} \\approx 59048\\text{ إلكترون فولت} \\approx 59.05\\text{ كيلو إلكترون فولت}$."
    ],
    "teacherTipEn": "To excite this characteristic line, the tube accelerating voltage must exceed 59.05 kV.",
    "teacherTipAr": "لظهور هذا الخط المميز يجب أن يتجاوز فرق الجهد المعجل للأنبوبة 59.05 كيلو فولت."
  },
  {
    "id": "egbac_phys_ch2_ex_07",
    "titleEn": "Physical Mechanism of Fraunhofer Absorption Lines in Sunlight",
    "titleAr": "الآلية الفيزيائية لخطوط فرانهوفر الامتصاصية في ضوء الشمس",
    "difficulty": "easy",
    "questionEn": "What physical process creates the dark Fraunhofer lines observed across the continuous spectrum of sunlight?",
    "questionAr": "ما العملية الفيزيائية المسؤولة عن تكون خطوط فرانهوفر المعتمة في طيف ضوء الشمس المستمر؟",
    "optionsEn": [
      "Selective absorption of specific wavelengths by vaporized elements in the cooler solar atmosphere.",
      "Total internal reflection of light inside dense plasma layers of the Sun.",
      "Diffraction of sunlight by cosmic dust particles in outer space.",
      "Doppler shifts caused by the rotation of the Sun on its axis."
    ],
    "optionsAr": [
      "الامتصاص الانتقائي لأطوال موجية محددة بواسطة بخار العناصر في الغلاف الجوي الشمسي الأقل حرارة.",
      "الانعكاس الكلي الداخلي للضوء داخل طبقات البلازما الكثيفة للشمس.",
      "حيود ضوء الشمس بواسطة دقائق الغبار الكوني في الفضاء.",
      "إزاحات دوبلر الناتجة عن دوران الشمس حول محورها."
    ],
    "correctAnswer": "Selective absorption of specific wavelengths by vaporized elements in the cooler solar atmosphere.",
    "correctIndex": 0,
    "hintEn": "Fraunhofer lines are line absorption spectra resulting from gases absorbing the exact wavelengths they would emit when hot.",
    "hintAr": "خطوط فرانهوفر هي أطياف امتصاص خطية تنتج عن امتصاص غازات الغلاف الشمسي لنفس أطوال الموجات التي تشعها عند تسخينها.",
    "stepByStepSolutionEn": [
      "1. The core of the Sun radiates a continuous blackbody spectrum.",
      "2. As this radiation passes through the cooler outer solar atmosphere (chromosphere), vaporized gases (such as helium and hydrogen) absorb their specific resonance frequencies.",
      "3. These appear as dark absorption lines against the bright continuous background, known as Fraunhofer lines."
    ],
    "stepByStepSolutionAr": [
      "١. يشع باطن الشمس طيفاً مستمراً كإشعاع جسم أسود.",
      "٢. عند مرور هذا الطيف بغازات الغلاف الجوي الشمسي الأبرد، تمتص هذه الغازات (كالهيليوم والهيدروجين) أطوالها الموجية المميزة.",
      "٣. تظهر هذه النطاقات كخطوط معتمة تُعرف بخطوط فرانهوفر، وهي أطياف امتصاص خطية."
    ],
    "teacherTipEn": "Analyzing Fraunhofer lines enabled scientists to discover the element Helium on the Sun before it was ever found on Earth!",
    "teacherTipAr": "أتاح تحليل خطوط فرانهوفر للعلماء اكتشاف عنصر الهيليوم في الشمس قبل اكتشافه على الأرض!"
  },
  {
    "id": "egbac_phys_ch2_ex_08",
    "titleEn": "Ratio of Orbital Speeds in Bohr Energy Levels",
    "titleAr": "نسبة السرعات المدارية للإلكترون بين مستويي بور",
    "difficulty": "medium",
    "questionEn": "In the Bohr model of the hydrogen atom, how does the electron's orbital velocity $v_n$ scale with the principal quantum number $n$, and what is the ratio of speeds $\\frac{v_1}{v_2}$ between the first and second orbits?",
    "questionAr": "في نموذج بور لذرة الهيدروجين، كيف تتناسب السرعة المدارية للإلكترون $v_n$ مع رقم الكم الرئيسي $n$، وما نسبة السرعتين $\\frac{v_1}{v_2}$ بين المدارين الأول والثاني؟",
    "optionsEn": [
      "$v_n \\propto n, \\quad \\frac{v_1}{v_2} = 1 : 2$",
      "$v_n \\propto \\frac{1}{n}, \\quad \\frac{v_1}{v_2} = 2 : 1$",
      "$v_n \\propto \\frac{1}{n^2}, \\quad \\frac{v_1}{v_2} = 4 : 1$",
      "$v_n \\propto n^2, \\quad \\frac{v_1}{v_2} = 1 : 4$"
    ],
    "optionsAr": [
      "$v_n \\propto n، \\quad \\frac{v_1}{v_2} = 1 : 2$",
      "$v_n \\propto \\frac{1}{n}، \\quad \\frac{v_1}{v_2} = 2 : 1$",
      "$v_n \\propto \\frac{1}{n^2}، \\quad \\frac{v_1}{v_2} = 4 : 1$",
      "$v_n \\propto n^2، \\quad \\frac{v_1}{v_2} = 1 : 4$"
    ],
    "correctAnswer": "$v_n \\propto \\frac{1}{n}, \\quad \\frac{v_1}{v_2} = 2 : 1$",
    "correctIndex": 1,
    "hintEn": "From L = m v r = n ħ and r ∝ n^2, we get v ∝ n / r ∝ n / n^2 = 1/n.",
    "hintAr": "من قانون بور L = m v r = n ħ وبما أن r ∝ n^2، إذن v ∝ n / r = 1/n.",
    "stepByStepSolutionEn": [
      "1. Angular momentum quantization: $m_e v_n r_n = \\frac{n h}{2\\pi} \\implies v_n = \\frac{n h}{2\\pi m_e r_n}$.",
      "2. Since orbit radius scales as $r_n = n^2 r_1$, substitute: $v_n \\propto \\frac{n}{n^2} = \\frac{1}{n}$.",
      "3. Therefore: $\\frac{v_1}{v_2} = \\frac{1/1}{1/2} = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. تكميم كمية التحرك الزاوي: $v_n = \\frac{n h}{2\\pi m_e r_n}$.",
      "٢. بما أن نصف القطر يتناسب مع $n^2$: إذن $v_n \\propto \\frac{n}{n^2} = \\frac{1}{n}$.",
      "٣. النسبة: $\\frac{v_1}{v_2} = \\frac{2}{1} = 2$."
    ],
    "teacherTipEn": "Electrons move fastest in the lowest ground orbit closest to the positively charged nucleus.",
    "teacherTipAr": "يتحرك الإلكترون بأكبر سرعة في المدار الأرضي الأقرب للنواة ذات الجذب الأقوى."
  },
  {
    "id": "egbac_phys_ch2_ex_09",
    "titleEn": "Excitation Energy from Ground State to n = 3 in Hydrogen",
    "titleAr": "طاقة الإثارة لنقل إلكترون الهيدروجين من المستوى الأرضي إلى المستوى الثالث",
    "difficulty": "easy",
    "questionEn": "Given the energy formula $E_n = -\\frac{13.6}{n^2}\\text{ eV}$, what photon energy $\\Delta E$ must a hydrogen atom absorb to elevate its electron from the ground state ($n = 1$) to the second excited state ($n = 3$)?",
    "questionAr": "بمعلومية طاقة المدار $E_n = -\\frac{13.6}{n^2}\\text{ إلكترون فولت}$، ما طاقة الفوتون $\\Delta E$ التي يجب أن تمتصها ذرة الهيدروجين لترقية إلكترونها من المستوى الأرضي ($n = 1$) إلى مستوى الإثارة الثاني ($n = 3$)؟",
    "optionsEn": [
      "$10.20\\text{ eV}$",
      "$13.60\\text{ eV}$",
      "$12.09\\text{ eV}$",
      "$1.51\\text{ eV}$"
    ],
    "optionsAr": [
      "$10.20\\text{ إلكترون فولت}$",
      "$13.60\\text{ إلكترون فولت}$",
      "$12.09\\text{ إلكترون فولت}$",
      "$1.51\\text{ إلكترون فولت}$"
    ],
    "correctAnswer": "$12.09\\text{ eV}$",
    "correctIndex": 2,
    "hintEn": "Calculate E_1 = -13.6 eV, E_3 = -13.6 / 9 = -1.51 eV, then ΔE = E_3 - E_1.",
    "hintAr": "احسب E_1 = -13.6 إلكترون فولت، E_3 = -13.6 / 9 = -1.51 إلكترون فولت، ثم ΔE = E_3 - E_1.",
    "stepByStepSolutionEn": [
      "1. Ground state energy: $E_1 = -13.6\\text{ eV}$.",
      "2. Energy of level $n = 3$: $E_3 = -\\frac{13.6}{3^2} = -\\frac{13.6}{9} \\approx -1.511\\text{ eV}$.",
      "3. Required excitation energy: $\\Delta E = E_3 - E_1 = -1.511 - (-13.6) = 12.089\\text{ eV} \\approx 12.09\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "١. طاقة المستوى الأرضي: $E_1 = -13.6\\text{ إلكترون فولت}$.",
      "٢. طاقة المستوى الثالث: $E_3 = -1.511\\text{ إلكترون فولت}$.",
      "٣. طاقة الإثارة المطلوبة: $\\Delta E = -1.511 - (-13.6) = 12.09\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "Notice that the atom will only absorb photons whose energy matches this transition gap EXACTLY (resonant absorption).",
    "teacherTipAr": "تمتص الذرة فقط الفوتونات التي تطابق طاقتها فرق المستويين بدقة متناهية (امتصاص رنيني)."
  },
  {
    "id": "egbac_phys_ch2_ex_10",
    "titleEn": "Recoil Momentum of a Hydrogen Atom Emitting a Lyman-Alpha Photon",
    "titleAr": "كمية تحرك الارتداد لذرة هيدروجين عند انبعاث فوتون ليمان-ألفا",
    "difficulty": "hots",
    "questionEn": "A stationary hydrogen atom emits a Lyman-$\\alpha$ photon ($n = 2 \\to n = 1$, with transition energy $\\Delta E = 10.2\\text{ eV}$). By momentum conservation, the recoil momentum acquired by the hydrogen atom is equal in magnitude to the photon's linear momentum. Calculate this recoil momentum.",
    "questionAr": "ذرة هيدروجين ساكنة انبعث منها فوتون ليمان-ألفا ($n = 2 \\to n = 1$، بطاقة انتقال $\\Delta E = 10.2\\text{ إلكترون فولت}$). وفق قانون بقاء كمية التحرك، تكتسب الذرة كمية تحرك ارتداد مساوية لكمية تحرك الفوتون المنبعث. احسب مقدار كمية التحرك هذه.",
    "optionsEn": [
      "$1.09 \\times 10^{-26}\\text{ kg}\\cdot\\text{m/s}$",
      "$2.72 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$",
      "$3.40 \\times 10^{-28}\\text{ kg}\\cdot\\text{m/s}$",
      "$5.44 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "optionsAr": [
      "$1.09 \\times 10^{-26}\\text{ كجم}\\cdot\\text{م/ث}$",
      "$2.72 \\times 10^{-27}\\text{ كجم}\\cdot\\text{م/ث}$",
      "$3.40 \\times 10^{-28}\\text{ كجم}\\cdot\\text{م/ث}$",
      "$5.44 \\times 10^{-27}\\text{ كجم}\\cdot\\text{م/ث}$"
    ],
    "correctAnswer": "$5.44 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$",
    "correctIndex": 3,
    "hintEn": "Recoil momentum p = E_photon / c. Convert 10.2 eV to Joules first.",
    "hintAr": "كمية تحرك الارتداد p = E_photon / c مع تحويل 10.2 إلكترون فولت إلى جول أولاً.",
    "stepByStepSolutionEn": [
      "1. Photon energy in Joules: $E = 10.2 \\times 1.6 \\times 10^{-19}\\text{ J} = 1.632 \\times 10^{-18}\\text{ J}$.",
      "2. Photon momentum: $p = \\frac{E}{c} = \\frac{1.632 \\times 10^{-18}\\text{ J}}{3.0 \\times 10^8\\text{ m/s}} = 5.44 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$.",
      "3. By Newton's third law and momentum conservation: $p_{\\text{atom}} = p = 5.44 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$."
    ],
    "stepByStepSolutionAr": [
      "١. طاقة الفوتون بالجول: $E = 10.2 \\times 1.6 \\times 10^{-19} = 1.632 \\times 10^{-18}\\text{ جول}$.",
      "٢. كمية تحرك الفوتون: $p = \\frac{E}{c} = \\frac{1.632 \\times 10^{-18}}{3.0 \\times 10^8} = 5.44 \\times 10^{-27}\\text{ كجم}\\cdot\\text{م/ث}$.",
      "٣. حفظ كمية التحرك: كمية تحرك ارتداد الذرة تساوي تماماً كمية تحرك الفوتون المنبعث."
    ],
    "teacherTipEn": "This recoil causes a tiny Doppler shift in the emitted wavelength, an effect critical in precision spectroscopy and Mössbauer physics.",
    "teacherTipAr": "يؤدي هذا الارتداد إلى إزاحة ضئيلة جداً في الطول الموجي، وهو تأثير جوهري في مطيافية موسباور عالية الدقة."
  },
  {
    "id": "egbac_phys_ch2_ex_11",
    "titleEn": "Efficiency of X-Ray Generation and Target Anode Cooling",
    "titleAr": "كفاءة توليد الأشعة السينية وتبريد هدف المصعد",
    "difficulty": "medium",
    "questionEn": "In a standard medical Coolidge tube operating at $V = 100\\text{ kV}$ and current $I = 20\\text{ mA}$, only $1.0\\%$ of the electron beam energy is converted into X-rays, while the remaining $99\\%$ is dissipated as thermal heat in the copper/tungsten anode. What is the rate of heat generation in the anode target?",
    "questionAr": "في أنبوبة كوليدج طبية تعمل بفرق جهد $V = 100\\text{ كيلو فولت}$ وتيار $I = 20\\text{ مللي أمبير}$، يتحول فقط $1.0\\%$ من طاقة حزمة الإلكترونات إلى أشعة سينية، بينما يتبدد $99\\%$ الباقية كحرارة في المصعد. ما معدل توليد الحرارة في مادة الهدف؟",
    "optionsEn": [
      "$1980\\text{ W} \\; (1.98\\text{ kW})$",
      "$2000\\text{ W}$",
      "$20\\text{ W}$",
      "$500\\text{ W}$"
    ],
    "optionsAr": [
      "$1980\\text{ واط} \\; (1.98\\text{ كيلو واط})$",
      "$2000\\text{ واط}$",
      "$20\\text{ واط}$",
      "$500\\text{ واط}$"
    ],
    "correctAnswer": "$1980\\text{ W} \\; (1.98\\text{ kW})$",
    "correctIndex": 0,
    "hintEn": "Total electrical power is P = V * I. Rate of heat dissipation is 0.99 * P.",
    "hintAr": "القدرة الكهربائية الكلية P = V * I. معدل تبدد الحرارة يساوي 0.99 * P.",
    "stepByStepSolutionEn": [
      "1. Total input electrical power: $P = V \\cdot I = (100 \\times 10^3\\text{ V})(20 \\times 10^{-3}\\text{ A}) = 2000\\text{ W} = 2.0\\text{ kW}$.",
      "2. Fraction converted to heat: $99\\% = 0.99$.",
      "3. Heat generation rate: $P_{\\text{heat}} = 0.99 \\times 2000\\text{ W} = 1980\\text{ W} = 1.98\\text{ kW}$."
    ],
    "stepByStepSolutionAr": [
      "١. القدرة الكهربائية الكلية: $P = V \\cdot I = 100000 \\times 0.020 = 2000\\text{ واط}$.",
      "٢. نسبة الحرارة المتبددة: $99\\%$.",
      "٣. معدل انبعاث الحرارة: $P_{\\text{heat}} = 0.99 \\times 2000 = 1980\\text{ واط}$."
    ],
    "teacherTipEn": "This massive thermal load explains why high-power X-ray tubes require rotating tungsten targets and circulating oil/water cooling jackets.",
    "teacherTipAr": "هذا التوليد الهائل للحرارة هو سبب استخدام أهداف دوارة من التنجستن وأرياش نحاسية للتبريد السريع بالزيت والماء."
  },
  {
    "id": "egbac_phys_ch2_ex_12",
    "titleEn": "Second-Order Bragg Reflection Angle",
    "titleAr": "زاوية انعكاس براغ للرتبة الثانية",
    "difficulty": "medium",
    "questionEn": "X-rays of wavelength $\\lambda = 0.071\\text{ nm}$ strike crystal lattice planes spaced by $d = 0.282\\text{ nm}$. At what glancing Bragg angle $\\theta_2$ will second-order ($n = 2$) constructive interference occur?",
    "questionAr": "أشعة سينية طولها الموجي $\\lambda = 0.071\\text{ نانومتر}$ تسقط على مستويات بلورية المسافة البينية بينها $d = 0.282\\text{ نانومتر}$. عند أي زاوية براغ $\\theta_2$ يحدث تداخل بناء من الرتبة الثانية ($n = 2$)؟",
    "optionsEn": [
      "$\\theta_2 \\approx 7.2^\\circ$",
      "$\\theta_2 \\approx 14.6^\\circ$",
      "$\\theta_2 \\approx 29.5^\\circ$",
      "$\\theta_2 \\approx 45.0^\\circ$"
    ],
    "optionsAr": [
      "$\\theta_2 \\approx 7.2^\\circ$",
      "$\\theta_2 \\approx 14.6^\\circ$",
      "$\\theta_2 \\approx 29.5^\\circ$",
      "$\\theta_2 \\approx 45.0^\\circ$"
    ],
    "correctAnswer": "$\\theta_2 \\approx 14.6^\\circ$",
    "correctIndex": 1,
    "hintEn": "Apply Bragg's formula: sin(theta) = n * lambda / (2 * d) with n = 2.",
    "hintAr": "طبق قانون براغ: sin(theta) = n * lambda / (2 * d) مع n = 2.",
    "stepByStepSolutionEn": [
      "1. Bragg's condition: $2 d \\sin\\theta_2 = 2 \\lambda \\implies \\sin\\theta_2 = \\frac{\\lambda}{d}$.",
      "2. Substitute values: $\\sin\\theta_2 = \\frac{0.071\\text{ nm}}{0.282\\text{ nm}} \\approx 0.2518$.",
      "3. Take the inverse sine: $\\theta_2 = \\arcsin(0.2518) \\approx 14.58^\\circ \\approx 14.6^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون براغ للرتبة الثانية ($n = 2$): $2 d \\sin\\theta_2 = 2 \\lambda \\implies \\sin\\theta_2 = \\frac{\\lambda}{d}$.",
      "٢. التعويض: $\\sin\\theta_2 = \\frac{0.071}{0.282} \\approx 0.2518$.",
      "٣. إيجاد الزاوية: $\\theta_2 = \\arcsin(0.2518) \\approx 14.6^\\circ$."
    ],
    "teacherTipEn": "Higher diffraction orders require steeper angles and exhibit reduced intensity.",
    "teacherTipAr": "رتب الحيود الأعلى تتطلب زوايا أكبر وتكون شدتها الإشعاعية أقل."
  },
  {
    "id": "egbac_phys_ch2_ex_13",
    "titleEn": "Classification of X-Ray Spectra: Bremsstrahlung vs Characteristic",
    "titleAr": "تصنيف أطياف الأشعة السينية: طيف الكبح المستمر مقابل الطيف الخطي المميز",
    "difficulty": "easy",
    "questionEn": "Which of the following correctly pairs the origin of the continuous X-ray spectrum and the characteristic X-ray spectrum?",
    "questionAr": "أي من العبارات التالية تصف بدقة مصدر كل من طيف الأشعة السينية المستمر والطيف المميز؟",
    "optionsEn": [
      "Continuous: nuclear fission inside target atoms; Characteristic: thermionic emission from cathode.",
      "Continuous: Compton scattering from target surface; Characteristic: blackbody thermal radiation.",
      "Continuous: decelerated colliding electrons (Bremsstrahlung); Characteristic: inner electron shell transitions.",
      "Continuous: inner electron transitions; Characteristic: decelerating projectile electrons."
    ],
    "optionsAr": [
      "المستمر: انشطار نووي داخل ذرات الهدف؛ المميز: انبعاث كهروحراري من المهبط.",
      "المستمر: تشتت كومتون من سطح الهدف؛ المميز: إشعاع حراري كالجسم الأسود.",
      "المستمر: فرملة وتباطؤ الإلكترونات المصطدمة (إشعاع الكبح)؛ المميز: انتقالات إلكترونات المستويات الداخلية.",
      "المستمر: انتقالات المستويات الداخلية؛ المميز: تباطؤ الإلكترونات المقذوفة."
    ],
    "correctAnswer": "Continuous: decelerated colliding electrons (Bremsstrahlung); Characteristic: inner electron shell transitions.",
    "correctIndex": 2,
    "hintEn": "Continuous radiation arises from sudden deceleration of electrons in the nuclear electric field; characteristic lines arise when an outer electron fills an inner core vacancy.",
    "hintAr": "ينشأ الطيف المستمر من التباطؤ التدريجي للإلكترونات في المجال الكهربي للنواة، بينما ينشأ الطيف الخطي عند ملء فجوة في مستوى داخلي.",
    "stepByStepSolutionEn": [
      "1. Continuous X-rays (Bremsstrahlung or braking radiation) occur when incident energetic electrons pass close to target nuclei, losing kinetic energy as continuous electromagnetic radiation.",
      "2. Characteristic X-rays occur when an incident electron ejects an inner-shell electron (e.g. from K or L shell), and a higher-shell electron transitions into the vacancy, emitting a photon equal to the discrete energy gap."
    ],
    "stepByStepSolutionAr": [
      "١. تنشأ الأشعة السينية المستمرة (إشعاع الفرملة أو الكبح) عند اقتراب الإلكترونات المعجلة من مجال أنوية ذرات مادة الهدف، فتتباطأ وتفقد طاقتها على شكل طيف كهرومغناطيسي مستمر.",
      "٢. تنشأ الأشعة السينية المميزة عند انتزاع إلكترون من مستوى داخلي عميق (مثل K أو L) ويهبط إلكترون من مستوى أعلى ليحل محله، مطلقاً فوتوناً يحمل فرق الطاقة المحدد بدقة."
    ],
    "teacherTipEn": "Remember: Continuous spectrum depends on accelerating voltage V; characteristic spectrum depends on target atomic number Z.",
    "teacherTipAr": "تذكر دائماً: الطيف المستمر يعتمد على فرق الجهد المعجل V، بينما الطيف المميز يعتمد على العدد الذري لمادة الهدف Z."
  },
  {
    "id": "egbac_phys_ch2_ex_14",
    "titleEn": "Determining Target Element from Characteristic X-Ray Frequency",
    "titleAr": "تحديد عنصر الهدف من تردد خط الأشعة السينية المميز",
    "difficulty": "hots",
    "questionEn": "Using Moseley's empirical formula for the $K_\\alpha$ transition $\\nu = C (Z - 1)^2$ with constant $C = 2.47 \\times 10^{15}\\text{ Hz}$, an unknown metal target emits $K_\\alpha$ radiation of frequency $\\nu = 5.56 \\times 10^{18}\\text{ Hz}$. Identify the atomic number $Z$ of this target metal.",
    "questionAr": "باستخدام صيغة موزلي لخط $K_\\alpha$: $\\nu = C (Z - 1)^2$ حيث الثابت $C = 2.47 \\times 10^{15}\\text{ هرتز}$، لوحظ أن هدفاً فلزياً مجهولاً يبعث إشعاع $K_\\alpha$ بتردد $\\nu = 5.56 \\times 10^{18}\\text{ هرتز}$. حدد العدد الذري $Z$ لمعدن هذا الهدف.",
    "optionsEn": [
      "$Z = 42$",
      "$Z = 52$",
      "$Z = 30$",
      "$Z = 48$"
    ],
    "optionsAr": [
      "$Z = 42$",
      "$Z = 52$",
      "$Z = 30$",
      "$Z = 48$"
    ],
    "correctAnswer": "$Z = 48$",
    "correctIndex": 3,
    "hintEn": "Solve for (Z - 1) = √(nu / C), then Z = √(nu / C) + 1.",
    "hintAr": "أوجد (Z - 1) = √(nu / C)، ثم Z = √(nu / C) + 1.",
    "stepByStepSolutionEn": [
      "1. Rearrange formula: $(Z - 1)^2 = \\frac{\\nu}{C} = \\frac{5.56 \\times 10^{18}\\text{ Hz}}{2.47 \\times 10^{15}\\text{ Hz}} \\approx 2251$.",
      "2. Take square root: $Z - 1 = \\sqrt{2251} \\approx 47.45 \\approx 47$.",
      "3. Add 1: $Z = 47 + 1 = 48$ (Cadmium, $\\text{Cd}$)."
    ],
    "stepByStepSolutionAr": [
      "١. إعادة ترتيب المعادلة: $(Z - 1)^2 = \\frac{5.56 \\times 10^{18}}{2.47 \\times 10^{15}} \\approx 2251$.",
      "٢. أخذ الجذر التربيعي: $Z - 1 = \\sqrt{2251} \\approx 47$.",
      "٣. إذن: $Z = 47 + 1 = 48$ (عنصر الكادميوم)."
    ],
    "teacherTipEn": "Moseley's formula provides a powerful nondestructive analytical technique (XRF) to identify chemical elements in archaeological and metallurgical samples.",
    "teacherTipAr": "تعد علاقة موزلي أساس تقنية التحليل الطيفي الفلوروسي للأشعة السينية (XRF) لتحديد مكونات الآثار والسبائك."
  },
  {
    "id": "egbac_phys_ch2_ex_15",
    "titleEn": "Longest Wavelength in the Pfund Spectral Series",
    "titleAr": "أطول طول موجي في متسلسلة فوند لطيف الهيدروجين",
    "difficulty": "medium",
    "questionEn": "In the Pfund series of atomic hydrogen, electron transitions terminate on the fifth energy level ($n_1 = 5$). What is the wavelength of the first line (longest wavelength, transition $n_2 = 6 \\to n_1 = 5$)? (Given $R_H = 1.097 \\times 10^7\\text{ m}^{-1}$).",
    "questionAr": "في متسلسلة فوند لذرة الهيدروجين، تنتهي انتقالات الإلكترون في المستوى الخامس ($n_1 = 5$). ما الطول الموجي لأطول خط (الخط الأول الناتج عن انتقال $n_2 = 6 \\to n_1 = 5$)؟ (بمعلومية ثابت ريدبيرج $R_H = 1.097 \\times 10^7\\text{ م}^{-1}$).",
    "optionsEn": [
      "$7460\\text{ nm} \\; (7.46\\text{ μm})$",
      "$4050\\text{ nm}$",
      "$2280\\text{ nm}$",
      "$1460\\text{ nm}$"
    ],
    "optionsAr": [
      "$7460\\text{ نانومتر} \\; (7.46\\text{ ميكرومتر})$",
      "$4050\\text{ نانومتر}$",
      "$2280\\text{ نانومتر}$",
      "$1460\\text{ نانومتر}$"
    ],
    "correctAnswer": "$7460\\text{ nm} \\; (7.46\\text{ μm})$",
    "correctIndex": 0,
    "hintEn": "Use 1/lambda = R_H * (1/25 - 1/36) = R_H * 11 / 900. Invert to get lambda.",
    "hintAr": "طبق صيغة ريدبيرج: 1/lambda = R_H * (1/25 - 1/36) = R_H * 11 / 900، ثم اقلب الكسر.",
    "stepByStepSolutionEn": [
      "1. Rydberg formula: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{5^2} - \\frac{1}{6^2}\\right) = R_H \\left(\\frac{1}{25} - \\frac{1}{36}\\right) = R_H \\left(\\frac{11}{900}\\right)$.",
      "2. Invert to solve for $\\lambda$: $\\lambda = \\frac{900}{11 R_H} = \\frac{900}{11 \\times 1.097 \\times 10^7} = \\frac{900}{1.2067 \\times 10^8} \\approx 7.458 \\times 10^{-6}\\text{ m} = 7460\\text{ nm}$ (Far Infrared)."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة ريدبيرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{25} - \\frac{1}{36}\\right) = R_H \\left(\\frac{11}{900}\\right)$.",
      "٢. قلب الكسر: $\\lambda = \\frac{900}{11 \\times 1.097 \\times 10^7} \\approx 7.458 \\times 10^{-6}\\text{ م} = 7460\\text{ نانومتر}$ (الأشعة تحت الحمراء البعيدة)."
    ],
    "teacherTipEn": "All lines of the Pfund series reside deep in the far-infrared region.",
    "teacherTipAr": "تقع جميع خطوط متسلسلة فوند في أقصى نطاق الأشعة تحت الحمراء البعيدة."
  }
];
