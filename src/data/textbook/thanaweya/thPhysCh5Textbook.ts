import type { SolvedProblem } from '../../../types/curriculum';

export const thPhysCh5SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_phys_ch5_se_01",
    "titleEn": "MoE Example 1: Photon Energy & Fundamental Quantum Parameters",
    "titleAr": "مثال الوزارة ١: طاقة الفوتون وثابت بلانك والتحويل للإلكترون فولت",
    "difficulty": "easy",
    "questionEn": "A monochromatic light photon has a wavelength $\\lambda = 400\\text{ nm}$. Given $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.0 \\times 10^8\\text{ m/s}$, and $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$, find the energy of the photon in Joules and in electron-volts ($\\text{eV}$).",
    "questionAr": "فوتون ضوء أحادي اللون طوله الموجي $400\\text{ نانومتر}$. بمعلومية $h = 6.625 \\times 10^{-34}\\text{ جول}\\cdot\\text{ث}$ و $c = 3.0 \\times 10^8\\text{ م/ث}$ و $1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ جول}$، احسب طاقة الفوتون بالجول وبالإلكترون فولت.",
    "optionsEn": [
      "$E = 4.969 \\times 10^{-19}\\text{ J} \\approx 3.106\\text{ eV}$",
      "$E = 2.484 \\times 10^{-19}\\text{ J} \\approx 1.553\\text{ eV}$",
      "$E = 9.938 \\times 10^{-19}\\text{ J} \\approx 6.212\\text{ eV}$",
      "$E = 1.600 \\times 10^{-19}\\text{ J} \\approx 1.000\\text{ eV}$"
    ],
    "optionsAr": [
      "$E = 4.969 \\times 10^{-19}\\text{ جول} \\approx 3.106\\text{ إلكترون فولت}$",
      "$E = 2.484 \\times 10^{-19}\\text{ جول} \\approx 1.553\\text{ إلكترون فولت}$",
      "$E = 9.938 \\times 10^{-19}\\text{ جول} \\approx 6.212\\text{ إلكترون فولت}$",
      "$E = 1.600 \\times 10^{-19}\\text{ جول} \\approx 1.000\\text{ إلكترون فولت}$"
    ],
    "correctAnswer": "$E = 4.969 \\times 10^{-19}\\text{ J} \\approx 3.106\\text{ eV}$",
    "correctIndex": 0,
    "hintEn": "E = h * c / lambda in Joules, then divide by 1.6 * 10^-19 to convert to eV.",
    "hintAr": "الطاقة $E = \\frac{hc}{\\lambda}$ بالجول، ثم اقسم على شحنة الإلكترون للتحويل لإلكترون فولت.",
    "stepByStepSolutionEn": [
      "E = h * c / lambda in Joules, then divide by 1.6 * 10^-19 to convert to eV.",
      "Therefore, the correct answer is: $E = 4.969 \\times 10^{-19}\\text{ J} \\approx 3.106\\text{ eV}$"
    ],
    "stepByStepSolutionAr": [
      "الطاقة $E = \\frac{hc}{\\lambda}$ بالجول، ثم اقسم على شحنة الإلكترون للتحويل لإلكترون فولت.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $E = 4.969 \\times 10^{-19}\\text{ جول} \\approx 3.106\\text{ إلكترون فولت}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_se_02",
    "titleEn": "MoE Example 2: Wien's Displacement Law for Stars",
    "titleAr": "مثال الوزارة ٢: قانون فين للإزاحة والمقارنة بين إشعاع الشمس ونجم",
    "difficulty": "easy",
    "questionEn": "The wavelength corresponding to maximum radiation intensity for the Sun is $\\lambda_{\\max,1} = 0.5\\,\\mu\\text{m}$ at temperature $T_1 = 6000\\text{ K}$. If another star has its peak radiation at $\\lambda_{\\max,2} = 0.6\\,\\mu\\text{m}$, determine its surface temperature $T_2$.",
    "questionAr": "الطول الموجي المصاحب لأقصى شدة إشعاع للشمس هو $0.5\\,\\mu\\text{m}$ عند درجة حرارة سطحها $6000\\text{ كلفن}$. إذا كان الطول الموجي لأقصى إشعاع لنجم آخر هو $0.6\\,\\mu\\text{m}$، فاحسب درجة حرارة سطح هذا النجم.",
    "optionsEn": [
      "$5000\\text{ K}$",
      "$7200\\text{ K}$",
      "$4500\\text{ K}$",
      "$3000\\text{ K}$"
    ],
    "optionsAr": [
      "$5000\\text{ كلفن}$",
      "$7200\\text{ كلفن}$",
      "$4500\\text{ كلفن}$",
      "$3000\\text{ كلفن}$"
    ],
    "correctAnswer": "$5000\\text{ K}$",
    "correctIndex": 0,
    "hintEn": "Wien's law: lambda_max1 * T1 = lambda_max2 * T2 => T2 = (0.5 * 6000) / 0.6 = 5000 K.",
    "hintAr": "قانون فين: $\\frac{\\lambda_{\\max,1}}{\\lambda_{\\max,2}} = \\frac{T_2}{T_1} \\implies T_2 = \\frac{0.5 \\times 6000}{0.6} = 5000\\text{ K}$.",
    "stepByStepSolutionEn": [
      "Wien's law: lambda_max1 * T1 = lambda_max2 * T2 => T2 = (0.5 * 6000) / 0.6 = 5000 K.",
      "Therefore, the correct answer is: $5000\\text{ K}$"
    ],
    "stepByStepSolutionAr": [
      "قانون فين: $\\frac{\\lambda_{\\max,1}}{\\lambda_{\\max,2}} = \\frac{T_2}{T_1} \\implies T_2 = \\frac{0.5 \\times 6000}{0.6} = 5000\\text{ K}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $5000\\text{ كلفن}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_se_03",
    "titleEn": "MoE Example 3: Einstein's Photoelectric Equation",
    "titleAr": "مثال الوزارة ٣: معادلة أينشتاين للظاهرة الكهروضوئية",
    "difficulty": "medium",
    "questionEn": "Light of frequency $\\nu = 8 \\times 10^{14}\\text{ Hz}$ falls on a metal surface whose critical threshold frequency is $\\nu_c = 5 \\times 10^{14}\\text{ Hz}$. Calculate the maximum kinetic energy $K_{\\max}$ of the emitted photoelectrons. ($h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$)",
    "questionAr": "سقط ضوء تردده $8 \\times 10^{14}\\text{ هرتز}$ على سطح فلز تردده الحرج $5 \\times 10^{14}\\text{ هرتز}$. احسب أقصى طاقة حركة $K_{\\max}$ تخرج بها الإلكترونات الكهروضوئية.",
    "optionsEn": [
      "$1.988 \\times 10^{-19}\\text{ J}$",
      "$3.313 \\times 10^{-19}\\text{ J}$",
      "$5.300 \\times 10^{-19}\\text{ J}$",
      "$9.938 \\times 10^{-20}\\text{ J}$"
    ],
    "optionsAr": [
      "$1.988 \\times 10^{-19}\\text{ جول}$",
      "$3.313 \\times 10^{-19}\\text{ جول}$",
      "$5.300 \\times 10^{-19}\\text{ جول}$",
      "$9.938 \\times 10^{-20}\\text{ جول}$"
    ],
    "correctAnswer": "$1.988 \\times 10^{-19}\\text{ J}$",
    "correctIndex": 0,
    "hintEn": "K_max = h * (nu - nu_c) = 6.625 * 10^-34 * (8 - 5) * 10^14 = 1.988 * 10^-19 J.",
    "hintAr": "أقصى طاقة حركة: $K_{\\max} = h(\\nu - \\nu_c) = 6.625 \\times 10^{-34} \\times (3 \\times 10^{14}) = 1.9875 \\times 10^{-19}\\text{ J}$.",
    "stepByStepSolutionEn": [
      "K_max = h * (nu - nu_c) = 6.625 * 10^-34 * (8 - 5) * 10^14 = 1.988 * 10^-19 J.",
      "Therefore, the correct answer is: $1.988 \\times 10^{-19}\\text{ J}$"
    ],
    "stepByStepSolutionAr": [
      "أقصى طاقة حركة: $K_{\\max} = h(\\nu - \\nu_c) = 6.625 \\times 10^{-34} \\times (3 \\times 10^{14}) = 1.9875 \\times 10^{-19}\\text{ J}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $1.988 \\times 10^{-19}\\text{ جول}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_se_04",
    "titleEn": "MoE Example 4: Threshold Wavelength & Emission Condition",
    "titleAr": "مثال الوزارة ٤: الطول الموجي الحرج وشرط انبعاث الإلكترونات",
    "difficulty": "medium",
    "questionEn": "The work function of a metal surface is $\\Phi = 2.48\\text{ eV}$. Which of the following light wavelengths will be able to liberate photoelectrons from this metal surface? ($h c \\approx 1240\\text{ eV}\\cdot\\text{nm}$)",
    "questionAr": "دالة الشغل لسطح فلز تساوي $2.48\\text{ إلكترون فولت}$. أي الأطوال الموجية الآتية للضوء الساقط يكون قادراً على تحرير إلكترونات كهروضوئية من سطح هذا الفلز؟",
    "optionsEn": [
      "$400\\text{ nm}$",
      "$600\\text{ nm}$",
      "$700\\text{ nm}$",
      "$800\\text{ nm}$"
    ],
    "optionsAr": [
      "$400\\text{ نانومتر}$",
      "$600\\text{ نانومتر}$",
      "$700\\text{ نانومتر}$",
      "$800\\text{ نانومتر}$"
    ],
    "correctAnswer": "$400\\text{ nm}$",
    "correctIndex": 0,
    "hintEn": "Threshold wavelength lambda_c = hc / Phi = 1240 / 2.48 = 500 nm. For emission, the incident wavelength must be strictly less than or equal to lambda_c (lambda <= 500 nm).",
    "hintAr": "الطول الموجي الحرج: $\\lambda_c = \\frac{hc}{\\Phi} = \\frac{1240}{2.48} = 500\\text{ نانومتر}$. ويشترط للانبعاث أن يكون الطول الموجي للضوء الساقط أصغر من أو يساوي الطول الموجي الحرج ($\\lambda \\le 500\\text{ nm}$).",
    "stepByStepSolutionEn": [
      "Threshold wavelength lambda_c = hc / Phi = 1240 / 2.48 = 500 nm. For emission, the incident wavelength must be strictly less than or equal to lambda_c (lambda <= 500 nm).",
      "Therefore, the correct answer is: $400\\text{ nm}$"
    ],
    "stepByStepSolutionAr": [
      "الطول الموجي الحرج: $\\lambda_c = \\frac{hc}{\\Phi} = \\frac{1240}{2.48} = 500\\text{ نانومتر}$. ويشترط للانبعاث أن يكون الطول الموجي للضوء الساقط أصغر من أو يساوي الطول الموجي الحرج ($\\lambda \\le 500\\text{ nm}$).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $400\\text{ نانومتر}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_se_05",
    "titleEn": "MoE Example 5: De Broglie Wavelength of an Accelerated Electron",
    "titleAr": "مثال الوزارة ٥: طول موجة دي برولي لإلكترون معجل بفرق جهد",
    "difficulty": "medium",
    "questionEn": "An electron is accelerated through an electric potential difference of $V = 100\\text{ V}$. Calculate the de Broglie matter wavelength associated with the accelerated electron. ($e = 1.6 \\times 10^{-19}\\text{ C}$, $m_e = 9.1 \\times 10^{-31}\\text{ kg}$, $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$)",
    "questionAr": "عُجل إلكترون تحت تأثير فرق جهد كهربي قدره $100\\text{ فولت}$. احسب طول موجة دي برولي المادية المصاحبة لحركة الإلكترون المعجل.",
    "optionsEn": [
      "$1.23 \\times 10^{-10}\\text{ m} = 0.123\\text{ nm}$",
      "$2.46 \\times 10^{-10}\\text{ m} = 0.246\\text{ nm}$",
      "$0.61 \\times 10^{-10}\\text{ m} = 0.061\\text{ nm}$",
      "$5.00 \\times 10^{-10}\\text{ m} = 0.500\\text{ nm}$"
    ],
    "optionsAr": [
      "$1.23 \\times 10^{-10}\\text{ م} = 0.123\\text{ نانومتر}$",
      "$2.46 \\times 10^{-10}\\text{ م} = 0.246\\text{ نانومتر}$",
      "$0.61 \\times 10^{-10}\\text{ م} = 0.061\\text{ نانومتر}$",
      "$5.00 \\times 10^{-10}\\text{ م} = 0.500\\text{ نانومتر}$"
    ],
    "correctAnswer": "$1.23 \\times 10^{-10}\\text{ m} = 0.123\\text{ nm}$",
    "correctIndex": 0,
    "hintEn": "Kinetic energy K = e * V = 0.5 * m_e * v^2 => v = sqrt(2 e V / m_e) => lambda = h / (m_e * v).",
    "hintAr": "طاقة الحركة: $e V = \\frac{1}{2} m_e v^2 \\implies v = \\sqrt{\\frac{2eV}{m_e}}$، ثم طول موجة دي برولي $\\lambda = \\frac{h}{m_e v}$.",
    "stepByStepSolutionEn": [
      "Kinetic energy K = e * V = 0.5 * m_e * v^2 => v = sqrt(2 e V / m_e) => lambda = h / (m_e * v).",
      "Therefore, the correct answer is: $1.23 \\times 10^{-10}\\text{ m} = 0.123\\text{ nm}$"
    ],
    "stepByStepSolutionAr": [
      "طاقة الحركة: $e V = \\frac{1}{2} m_e v^2 \\implies v = \\sqrt{\\frac{2eV}{m_e}}$، ثم طول موجة دي برولي $\\lambda = \\frac{h}{m_e v}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $1.23 \\times 10^{-10}\\text{ م} = 0.123\\text{ نانومتر}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_se_06",
    "titleEn": "MoE Example 6: Compton Scattering Conservation Laws",
    "titleAr": "مثال الوزارة ٦: ظاهرة كومتون وقوانين بقاء الطاقة وكمية التحرك",
    "difficulty": "medium",
    "questionEn": "In a Compton scattering event, a high-energy X-ray photon collides with a stationary free electron. Which of the following statements correctly describes the properties of the scattered photon compared to the incident photon?",
    "questionAr": "في ظاهرة كومتون، اصطدم فوتون أشعة سينية عالي الطاقة بإلكترون حر ساكن. أي العبارات الآتية تصف بدقة خواص الفوتون المشتت مقارنة بالفوتون الساقط؟",
    "optionsEn": [
      "Its wavelength increases, frequency decreases, energy decreases, but its speed remains strictly constant ($c$)",
      "Its wavelength decreases and its speed decreases",
      "Its frequency increases and energy increases",
      "Both its speed and wavelength decrease"
    ],
    "optionsAr": [
      "يزداد طوله الموجي، ويقل تردده وطاقته وكمية تحركه، بينما تظل سرعته ثابتة تماماً في الفراغ ($c$)",
      "يقل طوله الموجي وتقل سرعته",
      "يزداد تردده وتزداد طاقته",
      "تقل سرعته ويقل طوله الموجي"
    ],
    "correctAnswer": "Its wavelength increases, frequency decreases, energy decreases, but its speed remains strictly constant ($c$)",
    "correctIndex": 0,
    "hintEn": "The photon transfers part of its energy to the electron, so E' < E, nu' < nu, lambda' > lambda, while photon speed in vacuum is an invariant constant c.",
    "hintAr": "يفقد الفوتون جزءاً من طاقته للإلكترون فتقل طاقته وتردده ويزداد طوله الموجي، وتظل سرعته في الفراغ ثابتة ($c = 3 \\times 10^8\\text{ m/s}$).",
    "stepByStepSolutionEn": [
      "The photon transfers part of its energy to the electron, so E' < E, nu' < nu, lambda' > lambda, while photon speed in vacuum is an invariant constant c.",
      "Therefore, the correct answer is: Its wavelength increases, frequency decreases, energy decreases, but its speed remains strictly constant ($c$)"
    ],
    "stepByStepSolutionAr": [
      "يفقد الفوتون جزءاً من طاقته للإلكترون فتقل طاقته وتردده ويزداد طوله الموجي، وتظل سرعته في الفراغ ثابتة ($c = 3 \\times 10^8\\text{ m/s}$).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: يزداد طوله الموجي، ويقل تردده وطاقته وكمية تحركه، بينما تظل سرعته ثابتة تماماً في الفراغ ($c$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_se_07",
    "titleEn": "MoE Example 7: Radiation Pressure Force of a Light Beam",
    "titleAr": "مثال الوزارة ٧: القوة الكلية التي يؤثر بها شعاع ضوئي على سطح عاكس",
    "difficulty": "medium",
    "questionEn": "A laser beam of power $P = 300\\text{ W}$ strikes a completely reflecting flat mirror perpendicularly. Calculate the net force exerted by the radiation beam on the mirror. ($c = 3 \\times 10^8\\text{ m/s}$)",
    "questionAr": "حزمة ضوئية من الليزر قدرتها $300\\text{ واط}$ تسقط عمودياً على مرآة مستوية عاكسة تماماً للضوء. احسب مقدار القوة التي تؤثر بها هذه الحزمة الضوئية على سطح المرآة.",
    "optionsEn": [
      "$2 \\times 10^{-6}\\text{ N}$",
      "$1 \\times 10^{-6}\\text{ N}$",
      "$4 \\times 10^{-6}\\text{ N}$",
      "$6 \\times 10^{-6}\\text{ N}$"
    ],
    "optionsAr": [
      "$2 \\times 10^{-6}\\text{ نيوتن}$",
      "$1 \\times 10^{-6}\\text{ نيوتن}$",
      "$4 \\times 10^{-6}\\text{ نيوتن}$",
      "$6 \\times 10^{-6}\\text{ نيوتن}$"
    ],
    "correctAnswer": "$2 \\times 10^{-6}\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "Force on totally reflecting surface: F = 2P / c = (2 * 300) / (3 * 10^8) = 2 * 10^-6 N.",
    "hintAr": "قوة الإشعاع لسطح عاكس تماماً: $F = \\frac{2P}{c} = \\frac{2 \\times 300}{3 \\times 10^8} = 2 \\times 10^{-6}\\text{ نيوتن}$.",
    "stepByStepSolutionEn": [
      "Force on totally reflecting surface: F = 2P / c = (2 * 300) / (3 * 10^8) = 2 * 10^-6 N.",
      "Therefore, the correct answer is: $2 \\times 10^{-6}\\text{ N}$"
    ],
    "stepByStepSolutionAr": [
      "قوة الإشعاع لسطح عاكس تماماً: $F = \\frac{2P}{c} = \\frac{2 \\times 300}{3 \\times 10^8} = 2 \\times 10^{-6}\\text{ نيوتن}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $2 \\times 10^{-6}\\text{ نيوتن}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_se_08",
    "titleEn": "MoE Example 8: Slope and Intercept of Photoelectric Graph",
    "titleAr": "مثال الوزارة ٨: دلالة الميل ونقط التقاطع في منحنى الظاهرة الكهروضوئية",
    "difficulty": "hots",
    "questionEn": "In the graph representing the relationship between maximum kinetic energy $K_{\\max}$ of emitted photoelectrons on the y-axis and frequency of incident light $\\nu$ on the x-axis, what do the slope and the negative y-intercept represent?",
    "questionAr": "في الرسم البياني المعبر عن العلاقة بين أقصى طاقة حركة للإلكترونات الكهروضوئية ($K_{\\max}$) على المحور الرأسي وتردد الضوء الساقط ($\\nu$) على المحور الأفقي، ما الذي يمثله ميل الخط المستقيم والجزء المقطوع من المحور الرأسي السالب؟",
    "optionsEn": [
      "The slope represents Planck's constant ($h$), and the negative y-intercept represents the work function ($-\\Phi$)",
      "The slope represents the speed of light ($c$), and the y-intercept is threshold frequency",
      "The slope represents electron charge ($e$), and the y-intercept is threshold wavelength",
      "The slope represents the mass of the electron ($m_e$), and the y-intercept is work function"
    ],
    "optionsAr": [
      "الميل يمثل ثابت بلانك ($h$)، والجزء المقطوع من المحور الرأسي السالب يمثل دالة الشغل ($-\\Phi$)",
      "الميل يمثل سرعة الضوء ($c$)، والجزء المقطوع يمثل التردد الحرج",
      "الميل يمثل شحنة الإلكترون ($e$)، والجزء المقطوع يمثل الطول الموجي الحرج",
      "الميل يمثل كتلة الإلكترون ($m_e$)، والجزء المقطوع يمثل دالة الشغل"
    ],
    "correctAnswer": "The slope represents Planck's constant ($h$), and the negative y-intercept represents the work function ($-\\Phi$)",
    "correctIndex": 0,
    "hintEn": "K_max = h * nu - Phi matches linear equation y = m * x + c, where slope m = h, x-intercept = nu_c, and y-intercept = -Phi.",
    "hintAr": "معادلة أينشتاين: $K_{\\max} = h\\nu - \\Phi$. الميل = $h$ وهو ثابت لجميع الفلزات، ونقطة التقاطع مع الأفقي هي التردد الحرج $\\nu_c$، ومع الرأسي السالب هي $-\\Phi$.",
    "stepByStepSolutionEn": [
      "K_max = h * nu - Phi matches linear equation y = m * x + c, where slope m = h, x-intercept = nu_c, and y-intercept = -Phi.",
      "Therefore, the correct answer is: The slope represents Planck's constant ($h$), and the negative y-intercept represents the work function ($-\\Phi$)"
    ],
    "stepByStepSolutionAr": [
      "معادلة أينشتاين: $K_{\\max} = h\\nu - \\Phi$. الميل = $h$ وهو ثابت لجميع الفلزات، ونقطة التقاطع مع الأفقي هي التردد الحرج $\\nu_c$، ومع الرأسي السالب هي $-\\Phi$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: الميل يمثل ثابت بلانك ($h$)، والجزء المقطوع من المحور الرأسي السالب يمثل دالة الشغل ($-\\Phi$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_se_09",
    "titleEn": "MoE Example 9: Electron Microscope Resolving Power Criterion",
    "titleAr": "مثال الوزارة ٩: شرط الرؤية والتكبير الفائق في الميكروسكوب الإلكتروني",
    "difficulty": "hots",
    "questionEn": "To view and distinguish the internal structure of a microscopic virus of dimension $d = 0.2\\text{ nm}$, what condition must be satisfied by the de Broglie wavelength $\\lambda$ of the electron beam in an electron microscope?",
    "questionAr": "لرؤية ودراسة التفاصيل الدقيقة لفيروس أبعاده $d = 0.2\\text{ نانومتر}$، ما هو الشرط الواجب توافره في طول موجة دي برولي ($\\lambda$) المصاحبة لشعاع الإلكترونات في الميكروسكوب الإلكتروني؟",
    "optionsEn": [
      "The de Broglie wavelength must be smaller than or equal to the dimension of the virus ($\\lambda \\le d$)",
      "The de Broglie wavelength must be much larger than the virus dimension ($\\lambda \\gg d$)",
      "The velocity of electrons must equal the speed of light",
      "The virus must absorb all incident electrons"
    ],
    "optionsAr": [
      "يجب أن يكون طول موجة دي برولي المصاحبة لحركة الإلكترونات أصغر من أو يساوي أبعاد الفيروس ($\\lambda \\le d$)",
      "يجب أن يكون طول موجة دي برولي أكبر بكثير من أبعاد الفيروس",
      "يجب أن تكون سرعة الإلكترونات مساوية لسرعة الضوء",
      "يجب أن يمتص الفيروس كل الإلكترونات الساقطة عليه"
    ],
    "correctAnswer": "The de Broglie wavelength must be smaller than or equal to the dimension of the virus ($\\lambda \\le d$)",
    "correctIndex": 0,
    "hintEn": "Diffraction occurs and obscures imaging unless the probing wavelength is smaller than the object details (lambda <= d). This is achieved by applying a high accelerating voltage V.",
    "hintAr": "شرط التكبير والرؤية: $\\lambda \\le d$. ويتم ذلك بزيادة فرق الجهد المعجل للإلكترونات لزيادة سرعتها وتقليل طول موجة دي برولي المصاحبة لها.",
    "stepByStepSolutionEn": [
      "Diffraction occurs and obscures imaging unless the probing wavelength is smaller than the object details (lambda <= d). This is achieved by applying a high accelerating voltage V.",
      "Therefore, the correct answer is: The de Broglie wavelength must be smaller than or equal to the dimension of the virus ($\\lambda \\le d$)"
    ],
    "stepByStepSolutionAr": [
      "شرط التكبير والرؤية: $\\lambda \\le d$. ويتم ذلك بزيادة فرق الجهد المعجل للإلكترونات لزيادة سرعتها وتقليل طول موجة دي برولي المصاحبة لها.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: يجب أن يكون طول موجة دي برولي المصاحبة لحركة الإلكترونات أصغر من أو يساوي أبعاد الفيروس ($\\lambda \\le d$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_se_10",
    "titleEn": "MoE Example 10: Linear Momentum of a Photon",
    "titleAr": "مثال الوزارة ١٠: كمية تحرك وكتلة فوتون أثناء حركته",
    "difficulty": "hots",
    "questionEn": "A photon has an energy of $E = 3.3125 \\times 10^{-19}\\text{ J}$. Determine its linear momentum $p_L$ and its equivalent relativistic mass $m$. ($h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.0 \\times 10^8\\text{ m/s}$)",
    "questionAr": "فوتون طاقته $E = 3.3125 \\times 10^{-19}\\text{ جول}$. احسب كمية تحركه $p_L$ وكتلته المكافئة أثناء حركته $m$.",
    "optionsEn": [
      "$p_L = 1.104 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s},\\, m = 3.681 \\times 10^{-36}\\text{ kg}$",
      "$p_L = 2.208 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s},\\, m = 7.362 \\times 10^{-36}\\text{ kg}$",
      "$p_L = 0.552 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s},\\, m = 1.840 \\times 10^{-36}\\text{ kg}$",
      "$p_L = 1.104 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s},\\, m = 0\\text{ kg}$"
    ],
    "optionsAr": [
      "$p_L = 1.104 \\times 10^{-27}\\text{ كجم}\\cdot\\text{م/ث},\\, m = 3.681 \\times 10^{-36}\\text{ كجم}$",
      "$p_L = 2.208 \\times 10^{-27}\\text{ كجم}\\cdot\\text{م/ث},\\, m = 7.362 \\times 10^{-36}\\text{ كجم}$",
      "$p_L = 0.552 \\times 10^{-27}\\text{ كجم}\\cdot\\text{م/ث},\\, m = 1.840 \\times 10^{-36}\\text{ كجم}$",
      "$p_L = 1.104 \\times 10^{-27}\\text{ كجم}\\cdot\\text{م/ث},\\, m = 0\\text{ كجم}$"
    ],
    "correctAnswer": "$p_L = 1.104 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s},\\, m = 3.681 \\times 10^{-36}\\text{ kg}$",
    "correctIndex": 0,
    "hintEn": "p_L = E / c = (3.3125 * 10^-19) / (3 * 10^8) = 1.104 * 10^-27 kg m/s. m = E / c^2 = 3.681 * 10^-36 kg.",
    "hintAr": "كمية التحرك: $p_L = \\frac{E}{c} = 1.104 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$. الكتلة المكافئة أثناء الحركة: $m = \\frac{E}{c^2} = 3.681 \\times 10^{-36}\\text{ kg}$.",
    "stepByStepSolutionEn": [
      "p_L = E / c = (3.3125 * 10^-19) / (3 * 10^8) = 1.104 * 10^-27 kg m/s. m = E / c^2 = 3.681 * 10^-36 kg.",
      "Therefore, the correct answer is: $p_L = 1.104 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s},\\, m = 3.681 \\times 10^{-36}\\text{ kg}$"
    ],
    "stepByStepSolutionAr": [
      "كمية التحرك: $p_L = \\frac{E}{c} = 1.104 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$. الكتلة المكافئة أثناء الحركة: $m = \\frac{E}{c^2} = 3.681 \\times 10^{-36}\\text{ kg}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $p_L = 1.104 \\times 10^{-27}\\text{ كجم}\\cdot\\text{م/ث},\\, m = 3.681 \\times 10^{-36}\\text{ كجم}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];

export const thPhysCh5Exercises: SolvedProblem[] = [
  {
    "id": "th_phys_ch5_ex_01",
    "titleEn": "Exercise 1: Classical Physics Assumption Regarding Light",
    "titleAr": "تمرين ١: قصور الفيزياء الكلاسيكية في تفسير إشعاع الجسم الأسود",
    "difficulty": "easy",
    "questionEn": "Why did classical wave theory fail to explain the blackbody radiation spectrum at very high frequencies (ultraviolet region)?",
    "questionAr": "علل: فشلت النظرية الكلاسيكية الموجية في تفسير منحنى إشعاع الجسم الأسود عند الترددات العالية جداً (منطقة فوق البنفسجية)؟",
    "optionsEn": [
      "Because classical physics assumed radiation is emitted as continuous waves whose intensity increases indefinitely with frequency",
      "Because classical physics assumed radiation consists of discrete photons",
      "Because classical physics neglected the speed of light",
      "Because classical physics assumed the atom does not contain electrons"
    ],
    "optionsAr": [
      "لأنها افترضت أن الإشعاع موجات متصلة تزداد شدتها باستمرار كلما زاد التردد، بينما أثبتت التجربة اقتراب الشدة من الصفر عند الترددات العالية",
      "لأنها افترضت أن الإشعاع كمات منفصلة تسمى فوتونات",
      "لأنها أهملت سرعة الضوء في الفراغ",
      "لأنها افترضت عدم احتواء الذرة على شحنات"
    ],
    "correctAnswer": "Because classical physics assumed radiation is emitted as continuous waves whose intensity increases indefinitely with frequency",
    "correctIndex": 0,
    "hintEn": "Classical theory predicted infinite intensity at ultraviolet frequencies (ultraviolet catastrophe).",
    "hintAr": "الفيزياء الكلاسيكية اعتبرت الإشعاع سيلاً متصلاً من الطاقة تزداد شدته بزيادة التردد، ولم تتوقع انخفاض شدة الإشعاع عند الترددات الفائقة.",
    "stepByStepSolutionEn": [
      "Classical theory predicted infinite intensity at ultraviolet frequencies (ultraviolet catastrophe).",
      "Therefore, the correct answer is: Because classical physics assumed radiation is emitted as continuous waves whose intensity increases indefinitely with frequency"
    ],
    "stepByStepSolutionAr": [
      "الفيزياء الكلاسيكية اعتبرت الإشعاع سيلاً متصلاً من الطاقة تزداد شدته بزيادة التردد، ولم تتوقع انخفاض شدة الإشعاع عند الترددات الفائقة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأنها افترضت أن الإشعاع موجات متصلة تزداد شدتها باستمرار كلما زاد التردد، بينما أثبتت التجربة اقتراب الشدة من الصفر عند الترددات العالية"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_02",
    "titleEn": "Exercise 2: Increasing Light Intensity in Photoelectric Effect",
    "titleAr": "تمرين ٢: أثر زيادة شدة الضوء الساقط في الظاهرة الكهروضوئية",
    "difficulty": "easy",
    "questionEn": "When the intensity of incident light with frequency $\\nu > \\nu_c$ falling on a photocathode is doubled, what happens to the maximum kinetic energy of the emitted photoelectrons and the photoelectric current?",
    "questionAr": "عند مضاعفة شدة الضوء الساقط بتردد أكبر من التردد الحرج ($\\nu > \\nu_c$) على مهبط خلية كهروضوئية، ماذا يحدث لأقصى طاقة حركة ولشدة التيار الكهروضوئي؟",
    "optionsEn": [
      "Maximum kinetic energy remains constant, while photoelectric current doubles",
      "Both maximum kinetic energy and photoelectric current double",
      "Maximum kinetic energy doubles, while photoelectric current remains constant",
      "Both remain constant"
    ],
    "optionsAr": [
      "تظل أقصى طاقة حركة للإلكترونات ثابتة، بينما تتضاعف شدة التيار الكهروضوئي",
      "تتضاعف كل من أقصى طاقة حركة وشدة التيار الكهروضوئي",
      "تتضاعف أقصى طاقة حركة بينما تظل شدة التيار ثابتة",
      "تظل كلتاهما ثابتة دون تغير"
    ],
    "correctAnswer": "Maximum kinetic energy remains constant, while photoelectric current doubles",
    "correctIndex": 0,
    "hintEn": "Energy depends only on photon frequency (E = h*nu - Phi). Intensity means more photons per second, producing more photoelectrons per second.",
    "hintAr": "طاقة حركة الإلكترون تعتمد على تردد الفوتون فقط، بينما شدة الضوء تعني عدد فوتونات أكبر فتحرر عدداً أكبر من الإلكترونات ويتضاعف التيار.",
    "stepByStepSolutionEn": [
      "Energy depends only on photon frequency (E = h*nu - Phi). Intensity means more photons per second, producing more photoelectrons per second.",
      "Therefore, the correct answer is: Maximum kinetic energy remains constant, while photoelectric current doubles"
    ],
    "stepByStepSolutionAr": [
      "طاقة حركة الإلكترون تعتمد على تردد الفوتون فقط، بينما شدة الضوء تعني عدد فوتونات أكبر فتحرر عدداً أكبر من الإلكترونات ويتضاعف التيار.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تظل أقصى طاقة حركة للإلكترونات ثابتة، بينما تتضاعف شدة التيار الكهروضوئي"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_03",
    "titleEn": "Exercise 3: Electron Rest Mass vs Photon Rest Mass",
    "titleAr": "تمرين ٣: كتلة سكون الفوتون مقارنة بكتلة سكون الإلكترون",
    "difficulty": "easy",
    "questionEn": "What is the rest mass ($m_0$) of a photon when it is brought to rest by complete absorption?",
    "questionAr": "ما هي كتلة السكون ($m_0$) للفوتون عند توقفه وامتصاصه بالكامل؟",
    "optionsEn": [
      "Zero ($m_0 = 0$)",
      "$9.1 \\times 10^{-31}\\text{ kg}$",
      "$1.67 \\times 10^{-27}\\text{ kg}$",
      "Infinite"
    ],
    "optionsAr": [
      "تساوي صفراً تماماً ($m_0 = 0$)",
      "$9.1 \\times 10^{-31}\\text{ كجم}$",
      "$1.67 \\times 10^{-27}\\text{ كجم}$",
      "لا نهائية"
    ],
    "correctAnswer": "Zero ($m_0 = 0$)",
    "correctIndex": 0,
    "hintEn": "A photon exists only while moving at the speed of light c; its rest mass is strictly zero.",
    "hintAr": "الفوتون يوجد فقط أثناء حركته بسرعة الضوء $c$، وإذا توقف عن الحركة يتلاشى وتتحول طاقته للوسط، فكتلة سكونه صفر.",
    "stepByStepSolutionEn": [
      "A photon exists only while moving at the speed of light c; its rest mass is strictly zero.",
      "Therefore, the correct answer is: Zero ($m_0 = 0$)"
    ],
    "stepByStepSolutionAr": [
      "الفوتون يوجد فقط أثناء حركته بسرعة الضوء $c$، وإذا توقف عن الحركة يتلاشى وتتحول طاقته للوسط، فكتلة سكونه صفر.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تساوي صفراً تماماً ($m_0 = 0$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_04",
    "titleEn": "Exercise 4: De Broglie Wavelength and Momentum",
    "titleAr": "تمرين ٤: العلاقة العكسية بين كمية التحرك وطول موجة دي برولي",
    "difficulty": "easy",
    "questionEn": "If the linear momentum $p$ of a moving body is doubled, its associated de Broglie matter wavelength becomes:",
    "questionAr": "إذا زادت كمية تحرك جسم متحرك إلى الضعف، فإن طول موجة دي برولي المصاحبة لحركته تصبح:",
    "optionsEn": [
      "Half its original value ($\\lambda / 2$)",
      "Twice its original value ($2\\lambda$)",
      "Four times its original value ($4\\lambda$)",
      "Unchanged"
    ],
    "optionsAr": [
      "نصف قيمتها الأصلية ($\\lambda / 2$)",
      "ضعف قيمتها الأصلية ($2\\lambda$)",
      "أربعة أمثال قيمتها الأصلية ($4\\lambda$)",
      "لا تتغير"
    ],
    "correctAnswer": "Half its original value ($\\lambda / 2$)",
    "correctIndex": 0,
    "hintEn": "lambda = h / p, so lambda is inversely proportional to momentum p.",
    "hintAr": "علاقة دي برولي: $\\lambda = \\frac{h}{p}$، تتناسب عكسياً مع كمية التحرك، فإذا زادت كمية التحرك للضعف يقل الطول الموجي للنصف.",
    "stepByStepSolutionEn": [
      "lambda = h / p, so lambda is inversely proportional to momentum p.",
      "Therefore, the correct answer is: Half its original value ($\\lambda / 2$)"
    ],
    "stepByStepSolutionAr": [
      "علاقة دي برولي: $\\lambda = \\frac{h}{p}$، تتناسب عكسياً مع كمية التحرك، فإذا زادت كمية التحرك للضعف يقل الطول الموجي للنصف.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: نصف قيمتها الأصلية ($\\lambda / 2$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_05",
    "titleEn": "Exercise 5: Maximum Kinetic Energy from Stopping Potential",
    "titleAr": "تمرين ٥: جهد الإيقاف وعلاقته بأقصى طاقة حركة",
    "difficulty": "medium",
    "questionEn": "In a photoelectric experiment, the stopping potential required to reduce the photocurrent to zero is $V_0 = 1.5\\text{ V}$. What is the maximum kinetic energy of the emitted photoelectrons in Joules? ($e = 1.6 \\times 10^{-19}\\text{ C}$)",
    "questionAr": "في تجربة كهروضوئية، وُجد أن جهد الإيقاف اللازم لقطع التيار تماماً هو $1.5\\text{ فولت}$. ما مقدار أقصى طاقة حركة للإلكترونات المنبعثة بالجول؟",
    "optionsEn": [
      "$2.4 \\times 10^{-19}\\text{ J}$",
      "$1.5 \\times 10^{-19}\\text{ J}$",
      "$3.6 \\times 10^{-19}\\text{ J}$",
      "$4.8 \\times 10^{-19}\\text{ J}$"
    ],
    "optionsAr": [
      "$2.4 \\times 10^{-19}\\text{ جول}$",
      "$1.5 \\times 10^{-19}\\text{ جول}$",
      "$3.6 \\times 10^{-19}\\text{ جول}$",
      "$4.8 \\times 10^{-19}\\text{ جول}$"
    ],
    "correctAnswer": "$2.4 \\times 10^{-19}\\text{ J}$",
    "correctIndex": 0,
    "hintEn": "K_max = e * V_0 = 1.6 * 10^-19 * 1.5 = 2.4 * 10^-19 J.",
    "hintAr": "طاقة الحركة القصوى: $K_{\\max} = e V_0 = 1.6 \\times 10^{-19} \\times 1.5 = 2.4 \\times 10^{-19}\\text{ جول}$.",
    "stepByStepSolutionEn": [
      "K_max = e * V_0 = 1.6 * 10^-19 * 1.5 = 2.4 * 10^-19 J.",
      "Therefore, the correct answer is: $2.4 \\times 10^{-19}\\text{ J}$"
    ],
    "stepByStepSolutionAr": [
      "طاقة الحركة القصوى: $K_{\\max} = e V_0 = 1.6 \\times 10^{-19} \\times 1.5 = 2.4 \\times 10^{-19}\\text{ جول}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $2.4 \\times 10^{-19}\\text{ جول}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_06",
    "titleEn": "Exercise 6: Ratio of Radiation Wavelengths for Earth and Sun",
    "titleAr": "تمرين ٦: النسبة بين الطول الموجي لإشعاع الأرض وإشعاع الشمس",
    "difficulty": "medium",
    "questionEn": "The Sun emits peak radiation at $\\lambda_{\\odot} = 0.5\\,\\mu\\text{m}$ ($T_{\\odot} = 6000\\text{ K}$). If the Earth emits peak radiation at $\\lambda_{\\oplus} = 10\\,\\mu\\text{m}$, estimate the average absolute surface temperature of the Earth using Wien's law.",
    "questionAr": "تشع الشمس أقصى طاقة عند طول موجي $0.5\\,\\mu\\text{m}$ (حرارة سطحها $6000\\text{ K}$). فإذا كان الطول الموجي لأقصى إشعاع للأرض $10\\,\\mu\\text{m}$، فاحسب متوسط درجة حرارة سطح الأرض المطلقة باستخدام قانون فين.",
    "optionsEn": [
      "$300\\text{ K}$",
      "$273\\text{ K}$",
      "$373\\text{ K}$",
      "$150\\text{ K}$"
    ],
    "optionsAr": [
      "$300\\text{ كلفن}$",
      "$273\\text{ كلفن}$",
      "$373\\text{ كلفن}$",
      "$150\\text{ كلفن}$"
    ],
    "correctAnswer": "$300\\text{ K}$",
    "correctIndex": 0,
    "hintEn": "T_Earth = T_Sun * (lambda_Sun / lambda_Earth) = 6000 * (0.5 / 10) = 300 K.",
    "hintAr": "درجة حرارة الأرض: $T_{\\text{Earth}} = 6000 \\times \\frac{0.5}{10} = 300\\text{ كلفن}$.",
    "stepByStepSolutionEn": [
      "T_Earth = T_Sun * (lambda_Sun / lambda_Earth) = 6000 * (0.5 / 10) = 300 K.",
      "Therefore, the correct answer is: $300\\text{ K}$"
    ],
    "stepByStepSolutionAr": [
      "درجة حرارة الأرض: $T_{\\text{Earth}} = 6000 \\times \\frac{0.5}{10} = 300\\text{ كلفن}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $300\\text{ كلفن}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_07",
    "titleEn": "Exercise 7: Electron Microscope vs Optical Microscope",
    "titleAr": "تمرين ٧: مقارنة القدرة التحليلية للميكروسكوب الإلكتروني والضوئي",
    "difficulty": "medium",
    "questionEn": "Why does an electron microscope possess a resolving power that is thousands of times higher than that of an optical microscope?",
    "questionAr": "علل: يمتلك الميكروسكوب الإلكتروني قدرة تحليلية وتكبيرية تفوق الميكروسكوب الضوئي بآلاف المرات؟",
    "optionsEn": [
      "Because the de Broglie wavelength associated with high-speed electrons can be made thousands of times shorter than visible light wavelengths",
      "Because electrons travel faster than light",
      "Because glass lenses can focus electrons without diffraction",
      "Because electrons do not experience scattering"
    ],
    "optionsAr": [
      "لأن طول موجة دي برولي المصاحبة لحركة الإلكترونات المعجلة صغير جداً مقارنة بالطول الموجي للضوء المرئي",
      "لأن سرعة الإلكترونات تفوق سرعة الضوء",
      "لأن العدسات الزجاجية تركز الإلكترونات دون أي حيود",
      "لأن الإلكترونات لا تعاني من أي تشتت"
    ],
    "correctAnswer": "Because the de Broglie wavelength associated with high-speed electrons can be made thousands of times shorter than visible light wavelengths",
    "correctIndex": 0,
    "hintEn": "High accelerating voltage yields very high momentum p, resulting in ultra-short wavelength lambda = h/p, permitting detection of microscopic details.",
    "hintAr": "بزيادة فرق الجهد المعجل تزداد سرعة وكمية تحرك الإلكترون فيقصر طول موجة دي برولي جداً، وتتحقق قاعدة تكبير الأجسام متناهية الصغر.",
    "stepByStepSolutionEn": [
      "High accelerating voltage yields very high momentum p, resulting in ultra-short wavelength lambda = h/p, permitting detection of microscopic details.",
      "Therefore, the correct answer is: Because the de Broglie wavelength associated with high-speed electrons can be made thousands of times shorter than visible light wavelengths"
    ],
    "stepByStepSolutionAr": [
      "بزيادة فرق الجهد المعجل تزداد سرعة وكمية تحرك الإلكترون فيقصر طول موجة دي برولي جداً، وتتحقق قاعدة تكبير الأجسام متناهية الصغر.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن طول موجة دي برولي المصاحبة لحركة الإلكترونات المعجلة صغير جداً مقارنة بالطول الموجي للضوء المرئي"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_08",
    "titleEn": "Exercise 8: Photon Frequency Ratio from Kinetic Energies",
    "titleAr": "تمرين ٨: حساب النسبة بين ترددي ضوء ساقط على نفس الفلز",
    "difficulty": "medium",
    "questionEn": "Monochromatic light of frequency $\\nu_1 = 2 \\nu_c$ produces photoelectrons with maximum kinetic energy $K_1$. If light of frequency $\\nu_2 = 4 \\nu_c$ falls on the same metal, what is the new maximum kinetic energy $K_2$?",
    "questionAr": "سقط ضوء أحادي اللون تردده $\\nu_1 = 2\\nu_c$ على فلز فانبعثت إلكترونات بأقصى طاقة حركة $K_1$. فإذا سقط ضوء آخر تردده $\\nu_2 = 4\\nu_c$ على نفس الفلز، فما أقصى طاقة حركة للإلكترونات $K_2$؟",
    "optionsEn": [
      "$3 K_1$",
      "$2 K_1$",
      "$4 K_1$",
      "$1.5 K_1$"
    ],
    "optionsAr": [
      "$3 K_1$",
      "$2 K_1$",
      "$4 K_1$",
      "$1.5 K_1$"
    ],
    "correctAnswer": "$3 K_1$",
    "correctIndex": 0,
    "hintEn": "K1 = h(2 nu_c) - h nu_c = h nu_c. K2 = h(4 nu_c) - h nu_c = 3 h nu_c = 3 K1.",
    "hintAr": "$K_1 = 2h\\nu_c - h\\nu_c = h\\nu_c$، و $K_2 = 4h\\nu_c - h\\nu_c = 3h\\nu_c = 3K_1$.",
    "stepByStepSolutionEn": [
      "K1 = h(2 nu_c) - h nu_c = h nu_c. K2 = h(4 nu_c) - h nu_c = 3 h nu_c = 3 K1.",
      "Therefore, the correct answer is: $3 K_1$"
    ],
    "stepByStepSolutionAr": [
      "$K_1 = 2h\\nu_c - h\\nu_c = h\\nu_c$، و $K_2 = 4h\\nu_c - h\\nu_c = 3h\\nu_c = 3K_1$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $3 K_1$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_09",
    "titleEn": "Exercise 9: Photon Mass during Motion",
    "titleAr": "تمرين ٩: الكتلة المكافئة للفوتون أثناء حركته",
    "difficulty": "medium",
    "questionEn": "Which formula accurately expresses the equivalent mass $m$ of a photon of frequency $\\nu$ while moving at speed $c$ in vacuum?",
    "questionAr": "أي الصيغ الفيزيائية الآتية تعبر بدقة عن الكتلة المكافئة للفوتون أثناء حركته بسرعة $c$ في الفراغ؟",
    "optionsEn": [
      "$m = \\frac{h \\nu}{c^2}$",
      "$m = \\frac{h c}{\\nu}$",
      "$m = \\frac{h}{\\nu c^2}$",
      "$m = h \\nu c^2$"
    ],
    "optionsAr": [
      "$m = \\frac{h \\nu}{c^2}$",
      "$m = \\frac{h c}{\\nu}$",
      "$m = \\frac{h}{\\nu c^2}$",
      "$m = h \\nu c^2$"
    ],
    "correctAnswer": "$m = \\frac{h \\nu}{c^2}$",
    "correctIndex": 0,
    "hintEn": "From Einstein's mass-energy equivalence: E = m c^2 = h nu => m = h nu / c^2.",
    "hintAr": "من علاقة أينشتاين لتكافؤ الكتلة والطاقة: $E = mc^2 = h\\nu \\implies m = \\frac{h\\nu}{c^2}$.",
    "stepByStepSolutionEn": [
      "From Einstein's mass-energy equivalence: E = m c^2 = h nu => m = h nu / c^2.",
      "Therefore, the correct answer is: $m = \\frac{h \\nu}{c^2}$"
    ],
    "stepByStepSolutionAr": [
      "من علاقة أينشتاين لتكافؤ الكتلة والطاقة: $E = mc^2 = h\\nu \\implies m = \\frac{h\\nu}{c^2}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $m = \\frac{h \\nu}{c^2}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_10",
    "titleEn": "Exercise 10: Ratio of Velocities of Two Particles with Equal De Broglie Wavelength",
    "titleAr": "تمرين ١٠: النسبة بين سرعتي جسيمين لهما نفس طول موجة دي برولي",
    "difficulty": "medium",
    "questionEn": "An alpha particle has a mass that is approximately four times that of a proton ($m_\\alpha \\approx 4 m_p$). If both particles have the exact same de Broglie matter wavelength, what is the ratio of their velocities ($v_p / v_\\alpha$)?",
    "questionAr": "كتلة جسيم ألفا تساوي أربعة أمثال كتلة البروتون ($m_\\alpha \\approx 4 m_p$). إذا كان للجسيمين نفس طول موجة دي برولي المصاحبة للحركة، فما النسبة بين سرعتيهما ($v_p / v_\\alpha$)؟",
    "optionsEn": [
      "$4 : 1$",
      "$1 : 4$",
      "$2 : 1$",
      "$1 : 1$"
    ],
    "optionsAr": [
      "$4 : 1$",
      "$1 : 4$",
      "$2 : 1$",
      "$1 : 1$"
    ],
    "correctAnswer": "$4 : 1$",
    "correctIndex": 0,
    "hintEn": "lambda = h / (m * v) is equal, so m_p * v_p = m_alpha * v_alpha => v_p / v_alpha = m_alpha / m_p = 4.",
    "hintAr": "بما أن الطول الموجي متساوٍ، فإن كميتي التحرك متساويتان: $m_p v_p = m_\\alpha v_\\alpha \\implies \\frac{v_p}{v_\\alpha} = \\frac{m_\\alpha}{m_p} = 4$.",
    "stepByStepSolutionEn": [
      "lambda = h / (m * v) is equal, so m_p * v_p = m_alpha * v_alpha => v_p / v_alpha = m_alpha / m_p = 4.",
      "Therefore, the correct answer is: $4 : 1$"
    ],
    "stepByStepSolutionAr": [
      "بما أن الطول الموجي متساوٍ، فإن كميتي التحرك متساويتان: $m_p v_p = m_\\alpha v_\\alpha \\implies \\frac{v_p}{v_\\alpha} = \\frac{m_\\alpha}{m_p} = 4$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $4 : 1$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_11",
    "titleEn": "Exercise 11: Electric and Magnetic Fields in Cathode Ray Tube",
    "titleAr": "تمرين ١١: وظيفة الألواح الكهروستاتيكية والمغناطيسية في أنبوبة أشعة الكاثود",
    "difficulty": "hots",
    "questionEn": "In a Cathode Ray Tube (CRT), what is the function of the mutually perpendicular electric or magnetic deflection fields?",
    "questionAr": "في أنبوبة أشعة الكاثود (CRT)، ما وظيفة الألواح الحارفة التي تولد مجالات كهربية أو مغناطيسية متعامدة؟",
    "optionsEn": [
      "To deflect the electron beam horizontally and vertically to scan and sweep the entire fluorescent screen point by point",
      "To accelerate the electrons from the cathode to the anode",
      "To emit electrons by thermionic effect",
      "To control the brightness and intensity of the electron beam"
    ],
    "optionsAr": [
      "توجيه ومسح حزمة الإلكترونات أفقياً ورأسياً عبر الشاشة الفلوروسية نقطة بنقطة لتكوين الصورة الكاملة",
      "تعجيل الإلكترونات من الكاثود نحو الأنود",
      "تحرير الإلكترونات بالانبعاث الأيوني الحراري",
      "التحكم في شدة إضاءة النقطة وتيار الإلكترونات"
    ],
    "correctAnswer": "To deflect the electron beam horizontally and vertically to scan and sweep the entire fluorescent screen point by point",
    "correctIndex": 0,
    "hintEn": "The X and Y deflection plates sweep the beam across the screen in a raster scan pattern.",
    "hintAr": "نظام توجيه الشعاع يمسح الشاشة أفقياً ورأسياً (مسحاً نقطياً) لتكتمل إضاءة الشاشة وظهور الصورة.",
    "stepByStepSolutionEn": [
      "The X and Y deflection plates sweep the beam across the screen in a raster scan pattern.",
      "Therefore, the correct answer is: To deflect the electron beam horizontally and vertically to scan and sweep the entire fluorescent screen point by point"
    ],
    "stepByStepSolutionAr": [
      "نظام توجيه الشعاع يمسح الشاشة أفقياً ورأسياً (مسحاً نقطياً) لتكتمل إضاءة الشاشة وظهور الصورة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: توجيه ومسح حزمة الإلكترونات أفقياً ورأسياً عبر الشاشة الفلوروسية نقطة بنقطة لتكوين الصورة الكاملة"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_12",
    "titleEn": "Exercise 12: Ratio of Accelerated Electron Wavelengths",
    "titleAr": "تمرين ١٢: النسبة بين طولي موجتي دي برولي عند تغيير الجهد المعجل",
    "difficulty": "hots",
    "questionEn": "When the accelerating voltage applied to an electron in an electron microscope is increased from $V_1 = 25\\text{ V}$ to $V_2 = 100\\text{ V}$, by what factor does its associated de Broglie wavelength change?",
    "questionAr": "عند زيادة فرق الجهد المعجل للإلكترونات في ميكروسكوب إلكتروني من $25\\text{ فولت}$ إلى $100\\text{ فولت}$، كم تصبح النسبة بين طول موجة دي برولي الجديدة إلى القديمة ($\\lambda_2 / \\lambda_1$)؟",
    "optionsEn": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$2$",
      "$4$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$2$",
      "$4$"
    ],
    "correctAnswer": "$\\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "lambda is inversely proportional to sqrt(V): lambda2 / lambda1 = sqrt(V1 / V2) = sqrt(25 / 100) = 1/2.",
    "hintAr": "طول موجة دي برولي يتناسب عكسياً مع الجذر التربيعي لفرق الجهد المعجل: $\\frac{\\lambda_2}{\\lambda_1} = \\sqrt{\\frac{V_1}{V_2}} = \\sqrt{\\frac{25}{100}} = \\frac{1}{2}$.",
    "stepByStepSolutionEn": [
      "lambda is inversely proportional to sqrt(V): lambda2 / lambda1 = sqrt(V1 / V2) = sqrt(25 / 100) = 1/2.",
      "Therefore, the correct answer is: $\\frac{1}{2}$"
    ],
    "stepByStepSolutionAr": [
      "طول موجة دي برولي يتناسب عكسياً مع الجذر التربيعي لفرق الجهد المعجل: $\\frac{\\lambda_2}{\\lambda_1} = \\sqrt{\\frac{V_1}{V_2}} = \\sqrt{\\frac{25}{100}} = \\frac{1}{2}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $\\frac{1}{2}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_13",
    "titleEn": "Exercise 13: Photon Radiation Force on Single Electron vs Mirror",
    "titleAr": "تمرين ١٣: أثر قوة الفوتونات على الإلكترون مقارنة بقطعة ورق",
    "difficulty": "hots",
    "questionEn": "Why does the radiation force of a light beam cause a noticeable deflection in a single microscopic electron (as in Compton effect), while having no noticeable effect on a suspended piece of paper?",
    "questionAr": "علل: تُحدث قوة الإشعاع الضوئي تأثيراً محسوساً ومشاهداً على إلكترون مفرد (كما في كومتون)، بينما لا يظهر لها أي أثر محسوس على قطعة ورق معلقة؟",
    "optionsEn": [
      "Because the mass of the electron is infinitesimally small, producing huge acceleration ($a = F / m_e$), whereas a sheet of paper has immense mass and inertia",
      "Because paper absorbs light while electrons reflect it",
      "Because photons lose their energy when striking paper",
      "Because the force on an electron is multiplied by Avogadro's number"
    ],
    "optionsAr": [
      "لأن كتلة الإلكترون متناهية في الصغر فتكتسب عجلة هائلة ($a = F / m_e$)، بينما كتلة الورقة وقصورها الذاتي ضخمان جداً مقارنة بالقوة الضئيلة",
      "لأن الورق يمتص الضوء بينما الإلكترون يعكسه",
      "لأن الفوتونات تفقد طاقتها وتتلاشى فور ملامسة الورق",
      "لأن قوة الفوتون على الإلكترون تتضاعف بعدد أفوجادرو"
    ],
    "correctAnswer": "Because the mass of the electron is infinitesimally small, producing huge acceleration ($a = F / m_e$), whereas a sheet of paper has immense mass and inertia",
    "correctIndex": 0,
    "hintEn": "F = 2P / c is very tiny (around 10^-6 N). For macroscopic masses, acceleration is imperceptible, but for m_e = 9.1 * 10^-31 kg, acceleration is astronomical.",
    "hintAr": "القوة الضوئية صغيرة جداً، فلا تحرك الأجسام العيانية لضخامة كتلتها، بينما تحرك الإلكترون الحر بشدة لضآلة كتلته البالغة $9.1 \\times 10^{-31}\\text{ kg}$.",
    "stepByStepSolutionEn": [
      "F = 2P / c is very tiny (around 10^-6 N). For macroscopic masses, acceleration is imperceptible, but for m_e = 9.1 * 10^-31 kg, acceleration is astronomical.",
      "Therefore, the correct answer is: Because the mass of the electron is infinitesimally small, producing huge acceleration ($a = F / m_e$), whereas a sheet of paper has immense mass and inertia"
    ],
    "stepByStepSolutionAr": [
      "القوة الضوئية صغيرة جداً، فلا تحرك الأجسام العيانية لضخامة كتلتها، بينما تحرك الإلكترون الحر بشدة لضآلة كتلته البالغة $9.1 \\times 10^{-31}\\text{ kg}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن كتلة الإلكترون متناهية في الصغر فتكتسب عجلة هائلة ($a = F / m_e$)، بينما كتلة الورقة وقصورها الذاتي ضخمان جداً مقارنة بالقوة الضئيلة"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_14",
    "titleEn": "Exercise 14: Linear Momentum Conservation in Compton Scattering",
    "titleAr": "تمرين ١٤: بقاء كمية التحرك الزاوية والخطية في ظاهرة كومتون",
    "difficulty": "hots",
    "questionEn": "Compton's scattering experiment provides definitive experimental proof of:",
    "questionAr": "تُعد ظاهرة كومتون دليلاً قاطعاً وتجريبياً على:",
    "optionsEn": [
      "The particle nature of photons, demonstrating they possess localized mass and linear momentum that obey classical collision conservation laws",
      "The wave nature of electrons alone",
      "The continuous nature of blackbody radiation",
      "The failure of energy conservation in microscopic atomic interactions"
    ],
    "optionsAr": [
      "الصفة الجسيمية للإشعاع الكهرومغناطيسي (الفوتونات) وامتلاكها كتلة وكمية تحرك تخضع لقوانين التصادم وبقاء الطاقة والتحرك",
      "الطبيعة الموجية للإلكترونات فقط",
      "الطبيعة المتصلة لإشعاع الأجسام الساخنة",
      "عدم انطباق قانون بقاء الطاقة في التفاعلات الذرية"
    ],
    "correctAnswer": "The particle nature of photons, demonstrating they possess localized mass and linear momentum that obey classical collision conservation laws",
    "correctIndex": 0,
    "hintEn": "Compton treated the interaction as a relativistic elastic collision between two particles (photon and electron).",
    "hintAr": "أثبت كومتون أن الفوتون جسيم يتصادم تصادماً مرناً مع الإلكترون وتنطبق عليهما قوانين بقاء كمية التحرك وبقاء الطاقة.",
    "stepByStepSolutionEn": [
      "Compton treated the interaction as a relativistic elastic collision between two particles (photon and electron).",
      "Therefore, the correct answer is: The particle nature of photons, demonstrating they possess localized mass and linear momentum that obey classical collision conservation laws"
    ],
    "stepByStepSolutionAr": [
      "أثبت كومتون أن الفوتون جسيم يتصادم تصادماً مرناً مع الإلكترون وتنطبق عليهما قوانين بقاء كمية التحرك وبقاء الطاقة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: الصفة الجسيمية للإشعاع الكهرومغناطيسي (الفوتونات) وامتلاكها كتلة وكمية تحرك تخضع لقوانين التصادم وبقاء الطاقة والتحرك"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch5_ex_15",
    "titleEn": "Exercise 15: Critical Incident Frequency Condition for Emission",
    "titleAr": "تمرين ١٥: انعدام طاقة الحركة عند سقوط فوتون بتردده الحرج",
    "difficulty": "hots",
    "questionEn": "When light of frequency exactly equal to the critical threshold frequency ($\\nu = \\nu_c$) strikes a clean metal surface in vacuum, the emitted photoelectrons will:",
    "questionAr": "عند سقوط ضوء تردده مساوٍ تماماً للتردد الحرج لمعدن ($\\nu = \\nu_c$) في الفراغ، فإن الإلكترونات الكهروضوئية:",
    "optionsEn": [
      "Be liberated from the surface with zero kinetic energy ($K_{\\max} = 0$)",
      "Be emitted with speed equal to the speed of light",
      "Remain completely bound inside the metal without liberation",
      "Reflect back the incident light with double frequency"
    ],
    "optionsAr": [
      "تتحرر من سطح المعدن بالكاد وبطاقة حركة منعدمة ($K_{\\max} = 0$)",
      "تنبعث بسرعة مساوية لسرعة الضوء",
      "تظل مقيدة تماماً داخل المعدن دون أن تتحرر",
      "تعكس الضوء الساقط بتردد مضاعف"
    ],
    "correctAnswer": "Be liberated from the surface with zero kinetic energy ($K_{\\max} = 0$)",
    "correctIndex": 0,
    "hintEn": "K_max = h nu - Phi = h nu_c - h nu_c = 0. The energy of the photon is entirely consumed in breaking the surface potential barrier.",
    "hintAr": "$K_{\\max} = h\\nu - \\Phi = h\\nu_c - h\\nu_c = 0$، فتتحرر الإلكترونات من حاجز جهد السطح دون أن تكتسب أي طاقة حركة.",
    "stepByStepSolutionEn": [
      "K_max = h nu - Phi = h nu_c - h nu_c = 0. The energy of the photon is entirely consumed in breaking the surface potential barrier.",
      "Therefore, the correct answer is: Be liberated from the surface with zero kinetic energy ($K_{\\max} = 0$)"
    ],
    "stepByStepSolutionAr": [
      "$K_{\\max} = h\\nu - \\Phi = h\\nu_c - h\\nu_c = 0$، فتتحرر الإلكترونات من حاجز جهد السطح دون أن تكتسب أي طاقة حركة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تتحرر من سطح المعدن بالكاد وبطاقة حركة منعدمة ($K_{\\max} = 0$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];
