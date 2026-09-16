import type { SolvedProblem } from '../../../types/curriculum';

export const thPhysCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_phys_ch2_se_01",
    "titleEn": "MoE Example 1: Magnetic Flux Linked with a Rotated Coil",
    "titleAr": "مثال الوزارة ١: الفيض المغناطيسي المخترق لملف يدور في مجال منتظم",
    "difficulty": "easy",
    "questionEn": "A rectangular coil of area $A = 0.04\\text{ m}^2$ is placed in a uniform magnetic field of flux density $B = 0.5\\text{ T}$. Calculate the magnetic flux $\\Phi_m$ when the coil plane is inclined at an angle of $30^\\circ$ to the magnetic field lines.",
    "questionAr": "ملف مستطيل مساحته $A = 0.04\\text{ م}^2$ وُضع في مجال مغناطيسي منتظم كثافة فيضه $B = 0.5\\text{ تسلا}$. احسب الفيض المغناطيسي $\\Phi_m$ الذي يخترق الملف عندما يميل مستوى الملف بزاوية $30^\\circ$ على خطوط المجال.",
    "optionsEn": [
      "$0.01\\text{ Wb}$",
      "$0.02\\text{ Wb}$",
      "$0.0173\\text{ Wb}$",
      "$0.04\\text{ Wb}$"
    ],
    "optionsAr": [
      "$0.01\\text{ وبر}$",
      "$0.02\\text{ وبر}$",
      "$0.0173\\text{ وبر}$",
      "$0.04\\text{ وبر}$"
    ],
    "correctAnswer": "$0.01\\text{ Wb}$",
    "correctIndex": 0,
    "hintEn": "Magnetic flux formula: $\\Phi_m = B A \\sin\\theta$, where $\\theta$ is the angle between the coil plane and field lines.",
    "hintAr": "قانون الفيض المغناطيسي: $\\Phi_m = B \\cdot A \\sin\\theta$، حيث $\\theta$ هي الزاوية بين مستوى الملف وخطوط الفيض.",
    "stepByStepSolutionEn": [
      "1. Identify given values: $B = 0.5\\text{ T}$, $A = 0.04\\text{ m}^2$, $\\theta = 30^\\circ$.",
      "2. Apply formula: $\\Phi_m = B A \\sin(30^\\circ) = 0.5 \\times 0.04 \\times 0.5 = 0.01\\text{ Wb}$."
    ],
    "stepByStepSolutionAr": [
      "١. المعطيات: $B = 0.5\\text{ T}$، $A = 0.04\\text{ m}^2$، $\\theta = 30^\\circ$.",
      "٢. التعويض: $\\Phi_m = B \\cdot A \\sin 30^\\circ = 0.5 \\times 0.04 \\times 0.5 = 0.01\\text{ وبر}$."
    ],
    "teacherTipEn": "Note: Egyptian curriculum defines flux using sin(theta) where theta is between the plane of the coil and the field lines.",
    "teacherTipAr": "تنبيه هام: في منهج الثانوية العامة المصرية، $\\theta$ في قانون الفيض هي الزاوية المحصورة بين مستوى الملف وخطوط الفيض."
  },
  {
    "id": "th_phys_ch2_se_02",
    "titleEn": "MoE Example 2: Neutral Point Between Two Parallel Current Wires",
    "titleAr": "مثال الوزارة ٢: موضع نقطة التعادل بين سلكين مستقيمين متوازيين",
    "difficulty": "easy",
    "questionEn": "Two long straight parallel wires carry electric currents of $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction, separated by a distance of $d = 20\\text{ cm}$. At what distance from wire 1 does the neutral point lie?",
    "questionAr": "سلكان مستقيمان متوازيان يمر بهما تياران في نفس الاتجاه شدتهما $I_1 = 2\\text{ أمبير}$ و $I_2 = 6\\text{ أمبير}$، والمسافة بينهما $20\\text{ سم}$. على أي بعد من السلك الأول تقع نقطة التعادل؟",
    "optionsEn": [
      "$5\\text{ cm}$",
      "$10\\text{ cm}$",
      "$15\\text{ cm}$",
      "$4\\text{ cm}$"
    ],
    "optionsAr": [
      "$5\\text{ سم}$",
      "$10\\text{ سم}$",
      "$15\\text{ سم}$",
      "$4\\text{ سم}$"
    ],
    "correctAnswer": "$5\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "For currents in the same direction, the neutral point lies between the wires closer to the weaker current: I1 / d1 = I2 / (d - d1).",
    "hintAr": "إذا كان التياران في نفس الاتجاه تقع نقطة التعادل بين السلكين بالقرب من التيار الأصغر: $\\frac{I_1}{d_1} = \\frac{I_2}{d - d_1}$.",
    "stepByStepSolutionEn": [
      "For currents in the same direction, the neutral point lies between the wires closer to the weaker current: I1 / d1 = I2 / (d - d1).",
      "Therefore, the correct answer is: $5\\text{ cm}$"
    ],
    "stepByStepSolutionAr": [
      "إذا كان التياران في نفس الاتجاه تقع نقطة التعادل بين السلكين بالقرب من التيار الأصغر: $\\frac{I_1}{d_1} = \\frac{I_2}{d - d_1}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $5\\text{ سم}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_se_03",
    "titleEn": "MoE Example 3: Circular Coil Rewound into a Smaller Radius",
    "titleAr": "مثال الوزارة ٣: إعادة لف ملف دائري بنصف قطر أصغر مع ثبوت شدة التيار",
    "difficulty": "medium",
    "questionEn": "A circular coil of $N_1$ turns and radius $r_1$ produces magnetic flux density $B_1$ at its center for a current $I$. If the same wire is rewound into a circular coil of radius $r_2 = \\frac{1}{3} r_1$ and carries the same current, what is the new magnetic flux density $B_2$?",
    "questionAr": "ملف دائري عدد لفاته $N_1$ ونصف قطره $r_1$ ينشأ عند مركزه فيض كثافته $B_1$ عند مرور تيار $I$. إذا أعيد لف نفس السلك ليصبح ملفاً دائرياً نصف قطره $r_2 = \\frac{1}{3} r_1$ ومَر به نفس التيار، فما قيمة كثافة الفيض الجديدة $B_2$؟",
    "optionsEn": [
      "$3 B_1$",
      "$6 B_1$",
      "$9 B_1$",
      "$\\frac{1}{9} B_1$"
    ],
    "optionsAr": [
      "$3 B_1$",
      "$6 B_1$",
      "$9 B_1$",
      "$\\frac{1}{9} B_1$"
    ],
    "correctAnswer": "$9 B_1$",
    "correctIndex": 2,
    "hintEn": "Total wire length L = 2 * pi * r * N is constant, so reducing radius to 1/3 triples the turns (N2 = 3 N1). Then B proportional to N / r proportional to N^2.",
    "hintAr": "طول السلك ثابت: $L = 2\\pi r N$، إذن نقص نصف القطر للثلث يجعل عدد اللفات يزداد لثلاثة أمثال ($N_2 = 3N_1$). فتكون $B_2 / B_1 = (N_2 / N_1)^2 = 9$.",
    "stepByStepSolutionEn": [
      "Total wire length L = 2 * pi * r * N is constant, so reducing radius to 1/3 triples the turns (N2 = 3 N1). Then B proportional to N / r proportional to N^2.",
      "Therefore, the correct answer is: $9 B_1$"
    ],
    "stepByStepSolutionAr": [
      "طول السلك ثابت: $L = 2\\pi r N$، إذن نقص نصف القطر للثلث يجعل عدد اللفات يزداد لثلاثة أمثال ($N_2 = 3N_1$). فتكون $B_2 / B_1 = (N_2 / N_1)^2 = 9$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $9 B_1$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_se_04",
    "titleEn": "MoE Example 4: Mutual Magnetic Force Between Two Conductors",
    "titleAr": "مثال الوزارة ٤: القوة المغناطيسية المتبادلة بين سلكين متوازيين",
    "difficulty": "medium",
    "questionEn": "Two parallel straight wires in vacuum separated by $10\\text{ cm}$ carry currents of $4\\text{ A}$ and $5\\text{ A}$ in opposite directions. Calculate the magnitude and nature of the mutual magnetic force per meter length of either wire. ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
    "questionAr": "سلكان مستقيمان متوازيان في الهواء تفصل بينهما مسافة $10\\text{ سم}$ يمر بهما تياران $4\\text{ أمبير}$ و $5\\text{ أمبير}$ في اتجاهين متضادين. احسب مقدار ونوع القوة المتبادلة لكل وحدة أطول ($1\\text{ م}$) من أي منهما. ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
    "optionsEn": [
      "$4 \\times 10^{-5}\\text{ N/m}$, Repulsive",
      "$4 \\times 10^{-5}\\text{ N/m}$, Attractive",
      "$2 \\times 10^{-5}\\text{ N/m}$, Repulsive",
      "$8 \\times 10^{-5}\\text{ N/m}$, Attractive"
    ],
    "optionsAr": [
      "$4 \\times 10^{-5}\\text{ نيوتن/م}$، تنافر",
      "$4 \\times 10^{-5}\\text{ نيوتن/م}$، تجاذب",
      "$2 \\times 10^{-5}\\text{ نيوتن/م}$، تنافر",
      "$8 \\times 10^{-5}\\text{ نيوتن/م}$، تجاذب"
    ],
    "correctAnswer": "$4 \\times 10^{-5}\\text{ N/m}$, Repulsive",
    "correctIndex": 0,
    "hintEn": "Opposite currents repel. Formula: F / L = (mu0 * I1 * I2) / (2 * pi * d).",
    "hintAr": "التياران المتضادان يتنافران. القوة لكل وحدة أطوال: $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$.",
    "stepByStepSolutionEn": [
      "Opposite currents repel. Formula: F / L = (mu0 * I1 * I2) / (2 * pi * d).",
      "Therefore, the correct answer is: $4 \\times 10^{-5}\\text{ N/m}$, Repulsive"
    ],
    "stepByStepSolutionAr": [
      "التياران المتضادان يتنافران. القوة لكل وحدة أطوال: $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $4 \\times 10^{-5}\\text{ نيوتن/م}$، تنافر"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_se_05",
    "titleEn": "MoE Example 5: Maximum Torque on a Rectangular Coil",
    "titleAr": "مثال الوزارة ٥: عزم الازدواج المغناطيسي المؤثر على ملف مستطيل",
    "difficulty": "medium",
    "questionEn": "A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ consisting of $50\\text{ turns}$ carries a current of $3\\text{ A}$ and is placed parallel to a uniform magnetic field of $B = 0.4\\text{ T}$. Calculate the magnetic torque acting on the coil.",
    "questionAr": "ملف مستطيل أبعاده $10\\text{ سم} \\times 20\\text{ سم}$ مكون من $50\\text{ لفة}$ يمر به تيار $3\\text{ أمبير}$، موضوع موازياً لفيض مغناطيسي منتظم كثافته $B = 0.4\\text{ تسلا}$. احسب عزم الازدواج المغناطيسي المؤثر على الملف.",
    "optionsEn": [
      "$1.2\\text{ N}\\cdot\\text{m}$",
      "$0.6\\text{ N}\\cdot\\text{m}$",
      "$2.4\\text{ N}\\cdot\\text{m}$",
      "$0\\text{ N}\\cdot\\text{m}$"
    ],
    "optionsAr": [
      "$1.2\\text{ نيوتن}\\cdot\\text{متر}$",
      "$0.6\\text{ نيوتن}\\cdot\\text{متر}$",
      "$2.4\\text{ نيوتن}\\cdot\\text{متر}$",
      "$0\\text{ نيوتن}\\cdot\\text{متر}$"
    ],
    "correctAnswer": "$1.2\\text{ N}\\cdot\\text{m}$",
    "correctIndex": 0,
    "hintEn": "When the coil plane is parallel to field lines, torque is maximum: tau = B * I * A * N.",
    "hintAr": "عندما يكون مستوى الملف موازياً لخطوط الفيض، يكون عزم الازدواج نهاية عظمى: $\\tau = B \\cdot I \\cdot A \\cdot N$.",
    "stepByStepSolutionEn": [
      "When the coil plane is parallel to field lines, torque is maximum: tau = B * I * A * N.",
      "Therefore, the correct answer is: $1.2\\text{ N}\\cdot\\text{m}$"
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف موازياً لخطوط الفيض، يكون عزم الازدواج نهاية عظمى: $\\tau = B \\cdot I \\cdot A \\cdot N$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $1.2\\text{ نيوتن}\\cdot\\text{متر}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_se_06",
    "titleEn": "MoE Example 6: Galvanometer Shunt Resistance for Ammeter Conversion",
    "titleAr": "مثال الوزارة ٦: حساب مجزئ التيار لتحويل الجلفانومتر إلى أميتر",
    "difficulty": "medium",
    "questionEn": "A moving coil galvanometer has an internal resistance $R_g = 54\\,\\Omega$ and full scale deflection current $I_g = 10\\text{ mA}$. Calculate the shunt resistance $R_s$ required to convert it into an ammeter capable of measuring up to $I = 1\\text{ A}$.",
    "questionAr": "جلفانومتر حساس مقاومة ملفه $R_g = 54\\,\\Omega$ ينحرف مؤشره إلى نهاية التدريج عند مرور تيار $I_g = 10\\text{ mA}$. احسب قيمة مقاومة مجزئ التيار $R_s$ اللازمة لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$.",
    "optionsEn": [
      "$0.545\\,\\Omega$",
      "$0.600\\,\\Omega$",
      "$1.000\\,\\Omega$",
      "$5.400\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.545\\,\\Omega$",
      "$0.600\\,\\Omega$",
      "$1.000\\,\\Omega$",
      "$5.400\\,\\Omega$"
    ],
    "correctAnswer": "$0.545\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "Shunt formula: Rs = (Ig * Rg) / (I - Ig). Remember Ig = 0.01 A.",
    "hintAr": "قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. انتبه: $I_g = 10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "Shunt formula: Rs = (Ig * Rg) / (I - Ig). Remember Ig = 0.01 A.",
      "Therefore, the correct answer is: $0.545\\,\\Omega$"
    ],
    "stepByStepSolutionAr": [
      "قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. انتبه: $I_g = 10\\text{ mA} = 0.01\\text{ A}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0.545\\,\\Omega$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_se_07",
    "titleEn": "MoE Example 7: Galvanometer Multiplier for Voltmeter Conversion",
    "titleAr": "مثال الوزارة ٧: حساب مضاعف الجهد لتحويل الجلفانومتر إلى فولتميتر",
    "difficulty": "medium",
    "questionEn": "A galvanometer with resistance $R_g = 20\\,\\Omega$ deflects full scale at $I_g = 2\\text{ mA}$. What multiplier resistance $R_m$ must be connected in series to enable it to measure voltages up to $V = 10\\text{ V}$?",
    "questionAr": "جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 2\\text{ mA}$. ما قيمة مقاومة مضاعف الجهد $R_m$ التي يجب توصيلها على التوالي معه ليقيس فرق جهد أقصاه $V = 10\\text{ V}$؟",
    "optionsEn": [
      "$4980\\,\\Omega$",
      "$5000\\,\\Omega$",
      "$5020\\,\\Omega$",
      "$2500\\,\\Omega$"
    ],
    "optionsAr": [
      "$4980\\,\\Omega$",
      "$5000\\,\\Omega$",
      "$5020\\,\\Omega$",
      "$2500\\,\\Omega$"
    ],
    "correctAnswer": "$4980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "Multiplier formula: Rm = (V - Vg) / Ig = (V - Ig * Rg) / Ig.",
    "hintAr": "قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "Multiplier formula: Rm = (V - Vg) / Ig = (V - Ig * Rg) / Ig.",
      "Therefore, the correct answer is: $4980\\,\\Omega$"
    ],
    "stepByStepSolutionAr": [
      "قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $4980\\,\\Omega$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_se_08",
    "titleEn": "MoE Example 8: Ohmmeter Scale Calibration & Unknown Resistance",
    "titleAr": "مثال الوزارة ٨: تدريج الأوميتر وحساب المقاومة المجهولة",
    "difficulty": "hots",
    "questionEn": "An ohmmeter has a total internal resistance of $R_{\\text{total}} = 3000\\,\\Omega$. When an unknown resistance $R_x$ is connected between its terminals, the pointer deflects to $\\frac{1}{4}$ of its full-scale current. Calculate the value of $R_x$.",
    "questionAr": "أوميتر مقاومته الكلية الداخلية $R_{\\text{total}} = 3000\\,\\Omega$. عندما وُصلت بين طرفيه مقاومة مجهولة $R_x$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج. احسب قيمة المقاومة $R_x$.",
    "optionsEn": [
      "$6000\\,\\Omega$",
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$1000\\,\\Omega$"
    ],
    "optionsAr": [
      "$6000\\,\\Omega$",
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$1000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 1,
    "hintEn": "Pointer deflection ratio: I / Ig = R_total / (R_total + Rx) = 1/4 => R_total + Rx = 4 * R_total => Rx = 3 * R_total.",
    "hintAr": "قاعدة تدريج الأوميتر: نسبة الانحراف $\\frac{I}{I_g} = \\frac{R_{\\text{total}}}{R_{\\text{total}} + R_x} = \\frac{1}{4}$، ومنها $R_x = 3 R_{\\text{total}}$.",
    "stepByStepSolutionEn": [
      "Pointer deflection ratio: I / Ig = R_total / (R_total + Rx) = 1/4 => R_total + Rx = 4 * R_total => Rx = 3 * R_total.",
      "Therefore, the correct answer is: $9000\\,\\Omega$"
    ],
    "stepByStepSolutionAr": [
      "قاعدة تدريج الأوميتر: نسبة الانحراف $\\frac{I}{I_g} = \\frac{R_{\\text{total}}}{R_{\\text{total}} + R_x} = \\frac{1}{4}$، ومنها $R_x = 3 R_{\\text{total}}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $9000\\,\\Omega$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_se_09",
    "titleEn": "MoE Example 9: Superposition of Magnetic Fields at Coil Center",
    "titleAr": "مثال الوزارة ٩: محصلة كثافة الفيض لملفين دائريين متعامدين",
    "difficulty": "hots",
    "questionEn": "Two concentric circular coils with the same center have their planes perpendicular to each other. Coil 1 produces $B_1 = 0.03\\text{ T}$ and coil 2 produces $B_2 = 0.04\\text{ T}$ at their common center. Find the net magnetic flux density $B_{\\text{net}}$ at the center.",
    "questionAr": "ملفان دائريان متحد المركز ومستواهما متعامدان. ينشأ عن الملف الأول فيض كثافته $B_1 = 0.03\\text{ تسلا}$ وعن الثاني فيض كثافته $B_2 = 0.04\\text{ تسلا}$ عند المركز المشترك. احسب كثافة الفيض المغناطيسي المحصلة $B_{\\text{net}}$ عند المركز.",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ تسلا}$",
      "$0.07\\text{ تسلا}$",
      "$0.01\\text{ تسلا}$",
      "$0.12\\text{ تسلا}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Because the planes of the coils are perpendicular, their magnetic field vectors at the center are perpendicular: B_net = sqrt(B1^2 + B2^2).",
    "hintAr": "بما أن مستويي الملفين متعامدان، فإن مجاليهما عند المركز متعامدان: $B_{\\text{net}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "Because the planes of the coils are perpendicular, their magnetic field vectors at the center are perpendicular: B_net = sqrt(B1^2 + B2^2).",
      "Therefore, the correct answer is: $0.05\\text{ T}$"
    ],
    "stepByStepSolutionAr": [
      "بما أن مستويي الملفين متعامدان، فإن مجاليهما عند المركز متعامدان: $B_{\\text{net}} = \\sqrt{B_1^2 + B_2^2}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0.05\\text{ تسلا}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_se_10",
    "titleEn": "MoE Example 10: Solenoid Turns Compression",
    "titleAr": "مثال الوزارة ١٠: ضغط لفات ملف لولبي بانتظام",
    "difficulty": "hots",
    "questionEn": "A solenoid of length $L = 20\\text{ cm}$ carries a current producing flux density $B = 0.2\\text{ T}$ along its axis. If its turns are compressed uniformly so its length becomes $5\\text{ cm}$ while keeping the current constant, what is the new magnetic flux density?",
    "questionAr": "ملف لولبي طوله $L = 20\\text{ سم}$ يمر به تيار ينتج فيضاً مغناطيسياً كثافته $B = 0.2\\text{ تسلا}$ عند نقطة على محوره. إذا ضُغطت لفاته بانتظام ليصبح طوله $5\\text{ سم}$ مع بقاء شدة التيار ثابتة، فما قيمة كثافة الفيض الجديدة؟",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.4\\text{ T}$",
      "$0.8\\text{ T}$",
      "$1.6\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ تسلا}$",
      "$0.4\\text{ تسلا}$",
      "$0.8\\text{ تسلا}$",
      "$1.6\\text{ تسلا}$"
    ],
    "correctAnswer": "$0.8\\text{ T}$",
    "correctIndex": 2,
    "hintEn": "For a solenoid: B = (mu * N * I) / L. With N and I constant, B is inversely proportional to L: B2 / B1 = L1 / L2.",
    "hintAr": "كثافة الفيض للملف اللولبي $B = \\frac{\\mu N I}{L}$. بثبوت $N$ و $I$، تتناسب $B$ عكسياً مع الطول $L$.",
    "stepByStepSolutionEn": [
      "For a solenoid: B = (mu * N * I) / L. With N and I constant, B is inversely proportional to L: B2 / B1 = L1 / L2.",
      "Therefore, the correct answer is: $0.8\\text{ T}$"
    ],
    "stepByStepSolutionAr": [
      "كثافة الفيض للملف اللولبي $B = \\frac{\\mu N I}{L}$. بثبوت $N$ و $I$، تتناسب $B$ عكسياً مع الطول $L$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0.8\\text{ تسلا}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];

export const thPhysCh2Exercises: SolvedProblem[] = [
  {
    "id": "th_phys_ch2_ex_01",
    "titleEn": "Exercise 1: Magnetic Field of Straight Wire at Given Distance",
    "titleAr": "تمرين ١: كثافة الفيض المغناطيسي لسلك مستقيم",
    "difficulty": "easy",
    "questionEn": "Calculate the magnetic flux density at a perpendicular distance $d = 5\\text{ cm}$ from a long straight wire carrying a current $I = 10\\text{ A}$ in air. ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
    "questionAr": "احسب كثافة الفيض المغناطيسي عند نقطة تبعد عمودياً مسافة $d = 5\\text{ سم}$ عن سلك مستقيم طويل يمر به تيار $10\\text{ أمبير}$ في الهواء.",
    "optionsEn": [
      "$4 \\times 10^{-5}\\text{ T}$",
      "$2 \\times 10^{-5}\\text{ T}$",
      "$1 \\times 10^{-5}\\text{ T}$",
      "$8 \\times 10^{-5}\\text{ T}$"
    ],
    "optionsAr": [
      "$4 \\times 10^{-5}\\text{ تسلا}$",
      "$2 \\times 10^{-5}\\text{ تسلا}$",
      "$1 \\times 10^{-5}\\text{ تسلا}$",
      "$8 \\times 10^{-5}\\text{ تسلا}$"
    ],
    "correctAnswer": "$4 \\times 10^{-5}\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "B = (mu0 * I) / (2 * pi * d) = (2 * 10^-7 * I) / d.",
    "hintAr": "طبق قانون أمبير الدائري: $B = \\frac{\\mu_0 I}{2\\pi d} = \\frac{2 \\times 10^{-7} \\times I}{d}$.",
    "stepByStepSolutionEn": [
      "B = (mu0 * I) / (2 * pi * d) = (2 * 10^-7 * I) / d.",
      "Therefore, the correct answer is: $4 \\times 10^{-5}\\text{ T}$"
    ],
    "stepByStepSolutionAr": [
      "طبق قانون أمبير الدائري: $B = \\frac{\\mu_0 I}{2\\pi d} = \\frac{2 \\times 10^{-7} \\times I}{d}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $4 \\times 10^{-5}\\text{ تسلا}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_02",
    "titleEn": "Exercise 2: Direction of Magnetic Field by Right-Hand Rule",
    "titleAr": "تمرين ٢: تحديد اتجاه المجال المغناطيسي بقاعدة اليد اليمنى لأمبير",
    "difficulty": "easy",
    "questionEn": "A vertical wire carries an electric current flowing upwards. What is the direction of the magnetic field at a point directly East of the wire?",
    "questionAr": "سلك رأسي يمر به تيار كهربي اتجاهه إلى أعلى. ما اتجاه المجال المغناطيسي عند نقطة تقع شرق السلك مباشرة؟",
    "optionsEn": [
      "Towards the North",
      "Towards the South",
      "Towards the West",
      "Vertically downwards"
    ],
    "optionsAr": [
      "نحو الشمال",
      "نحو الجنوب",
      "نحو الغرب",
      "عمودياً لأسفل"
    ],
    "correctAnswer": "Towards the North",
    "correctIndex": 0,
    "hintEn": "Point right thumb upwards along the current; your curled fingers at the eastern side point North.",
    "hintAr": "اجعل إبهام اليد اليمنى يشير لأعلى باتجاه التيار؛ فتشير الأصابع عند النقطة الواقعة شرق السلك نحو الشمال الجغرافي.",
    "stepByStepSolutionEn": [
      "Point right thumb upwards along the current; your curled fingers at the eastern side point North.",
      "Therefore, the correct answer is: Towards the North"
    ],
    "stepByStepSolutionAr": [
      "اجعل إبهام اليد اليمنى يشير لأعلى باتجاه التيار؛ فتشير الأصابع عند النقطة الواقعة شرق السلك نحو الشمال الجغرافي.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: نحو الشمال"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_03",
    "titleEn": "Exercise 3: Magnetic Force on Conductor Placed in Field",
    "titleAr": "تمرين ٣: القوة المغناطيسية المؤثرة على سلك في مجال منتظم",
    "difficulty": "easy",
    "questionEn": "A straight wire of length $L = 0.5\\text{ m}$ carries a current of $4\\text{ A}$ perpendicular to a magnetic field of $B = 0.3\\text{ T}$. Calculate the magnetic force acting on the wire.",
    "questionAr": "سلك مستقيم طوله $0.5\\text{ م}$ يمر به تيار $4\\text{ أمبير}$ موضوع عمودياً على مجال مغناطيسي كثافته $0.3\\text{ تسلا}$. احسب القوة المغناطيسية المؤثرة على السلك.",
    "optionsEn": [
      "$0.6\\text{ N}$",
      "$1.2\\text{ N}$",
      "$0.3\\text{ N}$",
      "$0.15\\text{ N}$"
    ],
    "optionsAr": [
      "$0.6\\text{ نيوتن}$",
      "$1.2\\text{ نيوتن}$",
      "$0.3\\text{ نيوتن}$",
      "$0.15\\text{ نيوتن}$"
    ],
    "correctAnswer": "$0.6\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "F = B * I * L * sin(90) = 0.3 * 4 * 0.5 * 1.",
    "hintAr": "القوة المغناطيسية: $F = B I L \\sin 90^\\circ = 0.3 \\times 4 \\times 0.5 = 0.6\\text{ نيوتن}$.",
    "stepByStepSolutionEn": [
      "F = B * I * L * sin(90) = 0.3 * 4 * 0.5 * 1.",
      "Therefore, the correct answer is: $0.6\\text{ N}$"
    ],
    "stepByStepSolutionAr": [
      "القوة المغناطيسية: $F = B I L \\sin 90^\\circ = 0.3 \\times 4 \\times 0.5 = 0.6\\text{ نيوتن}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0.6\\text{ نيوتن}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_04",
    "titleEn": "Exercise 4: Circular Coil Magnetic Flux Density",
    "titleAr": "تمرين ٤: كثافة الفيض عند مركز ملف دائري",
    "difficulty": "easy",
    "questionEn": "A circular coil of $N = 100\\text{ turns}$ and radius $r = 10\\text{ cm}$ carries a current $I = 7\\text{ A}$. What is the magnetic flux density at its center? (Use $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$ and $\\pi \\approx \\frac{22}{7}$)",
    "questionAr": "ملف دائري عدد لفاته $100\\text{ لفة}$ ونصف قطره $10\\text{ سم}$ يمر به تيار $7\\text{ أمبير}$. ما كثافة الفيض المغناطيسي عند مركزه؟",
    "optionsEn": [
      "$4.4 \\times 10^{-3}\\text{ T}$",
      "$2.2 \\times 10^{-3}\\text{ T}$",
      "$8.8 \\times 10^{-3}\\text{ T}$",
      "$1.1 \\times 10^{-3}\\text{ T}$"
    ],
    "optionsAr": [
      "$4.4 \\times 10^{-3}\\text{ تسلا}$",
      "$2.2 \\times 10^{-3}\\text{ تسلا}$",
      "$8.8 \\times 10^{-3}\\text{ تسلا}$",
      "$1.1 \\times 10^{-3}\\text{ تسلا}$"
    ],
    "correctAnswer": "$4.4 \\times 10^{-3}\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "B = (mu0 * N * I) / (2 * r).",
    "hintAr": "كثافة الفيض لملف دائري: $B = \\frac{\\mu_0 N I}{2r}$.",
    "stepByStepSolutionEn": [
      "B = (mu0 * N * I) / (2 * r).",
      "Therefore, the correct answer is: $4.4 \\times 10^{-3}\\text{ T}$"
    ],
    "stepByStepSolutionAr": [
      "كثافة الفيض لملف دائري: $B = \\frac{\\mu_0 N I}{2r}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $4.4 \\times 10^{-3}\\text{ تسلا}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_05",
    "titleEn": "Exercise 5: Solenoid Magnetic Flux Density",
    "titleAr": "تمرين ٥: كثافة الفيض المغناطيسي لملف حلزوني (لولبي)",
    "difficulty": "medium",
    "questionEn": "A solenoid has $n = 500\\text{ turns per meter}$ and carries a current $I = 2\\text{ A}$. Find the magnetic flux density along its axis inside the core. ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
    "questionAr": "ملف لولبي يحتوي على $500\\text{ لفة لكل متر}$ من طوله ويمر به تيار $2\\text{ أمبير}$. احسب كثافة الفيض المغناطيسي عند نقطة على محوره داخل الملف.",
    "optionsEn": [
      "$1.26 \\times 10^{-3}\\text{ T}$",
      "$2.51 \\times 10^{-3}\\text{ T}$",
      "$6.28 \\times 10^{-4}\\text{ T}$",
      "$3.14 \\times 10^{-3}\\text{ T}$"
    ],
    "optionsAr": [
      "$1.26 \\times 10^{-3}\\text{ تسلا}$",
      "$2.51 \\times 10^{-3}\\text{ تسلا}$",
      "$6.28 \\times 10^{-4}\\text{ تسلا}$",
      "$3.14 \\times 10^{-3}\\text{ تسلا}$"
    ],
    "correctAnswer": "$1.26 \\times 10^{-3}\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "B = mu0 * n * I = 4 * pi * 10^-7 * 500 * 2 = 4 * pi * 10^-4 T.",
    "hintAr": "القانون: $B = \\mu_0 n I = 4\\pi \\times 10^{-7} \\times 500 \\times 2 = 1.256 \\times 10^{-3}\\text{ T}$.",
    "stepByStepSolutionEn": [
      "B = mu0 * n * I = 4 * pi * 10^-7 * 500 * 2 = 4 * pi * 10^-4 T.",
      "Therefore, the correct answer is: $1.26 \\times 10^{-3}\\text{ T}$"
    ],
    "stepByStepSolutionAr": [
      "القانون: $B = \\mu_0 n I = 4\\pi \\times 10^{-7} \\times 500 \\times 2 = 1.256 \\times 10^{-3}\\text{ T}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $1.26 \\times 10^{-3}\\text{ تسلا}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_06",
    "titleEn": "Exercise 6: Magnetic Dipole Moment of a Current Loop",
    "titleAr": "تمرين ٦: عزم ثنائي القطب المغناطيسي لملف يمر به تيار",
    "difficulty": "medium",
    "questionEn": "A circular loop of radius $r = 7\\text{ cm}$ consists of $20\\text{ turns}$ and carries a current of $5\\text{ A}$. Determine its magnetic dipole moment $m_d$. (Use $\\pi \\approx \\frac{22}{7}$)",
    "questionAr": "ملف دائري نصف قطره $7\\text{ سم}$ مكون من $20\\text{ لفة}$ ويمر به تيار $5\\text{ أمبير}$. احسب قيمة عزم ثنائي القطب المغناطيسي له $m_d$.",
    "optionsEn": [
      "$1.54\\text{ A}\\cdot\\text{m}^2$",
      "$3.08\\text{ A}\\cdot\\text{m}^2$",
      "$0.77\\text{ A}\\cdot\\text{m}^2$",
      "$2.20\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$1.54\\text{ A}\\cdot\\text{m}^2$",
      "$3.08\\text{ A}\\cdot\\text{m}^2$",
      "$0.77\\text{ A}\\cdot\\text{m}^2$",
      "$2.20\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$1.54\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "m_d = I * A * N = I * (pi * r^2) * N.",
    "hintAr": "عزم ثنائي القطب: $m_d = I \\cdot A \\cdot N = 5 \\times \\left(\\frac{22}{7} \\times 0.07^2\\right) \\times 20 = 1.54\\text{ A}\\cdot\\text{m}^2$.",
    "stepByStepSolutionEn": [
      "m_d = I * A * N = I * (pi * r^2) * N.",
      "Therefore, the correct answer is: $1.54\\text{ A}\\cdot\\text{m}^2$"
    ],
    "stepByStepSolutionAr": [
      "عزم ثنائي القطب: $m_d = I \\cdot A \\cdot N = 5 \\times \\left(\\frac{22}{7} \\times 0.07^2\\right) \\times 20 = 1.54\\text{ A}\\cdot\\text{m}^2$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $1.54\\text{ A}\\cdot\\text{m}^2$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_07",
    "titleEn": "Exercise 7: Ammeter Total Resistance",
    "titleAr": "تمرين ٧: المقاومة الكلية لجهاز الأميتر",
    "difficulty": "medium",
    "questionEn": "A galvanometer of resistance $R_g = 18\\,\\Omega$ is shunted by a resistor $R_s = 2\\,\\Omega$ to form an ammeter. What is the total equivalent resistance of this ammeter?",
    "questionAr": "جلفانومتر مقاومة ملفه $18\\,\\Omega$ وُصل معه مجزئ تيار مقاومته $2\\,\\Omega$ لتحويله إلى أميتر. ما هي المقاومة الكلية لجهاز الأميتر؟",
    "optionsEn": [
      "$1.8\\,\\Omega$",
      "$2.0\\,\\Omega$",
      "$9.0\\,\\Omega$",
      "$20.0\\,\\Omega$"
    ],
    "optionsAr": [
      "$1.8\\,\\Omega$",
      "$2.0\\,\\Omega$",
      "$9.0\\,\\Omega$",
      "$20.0\\,\\Omega$"
    ],
    "correctAnswer": "$1.8\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "Galvanometer and shunt are in parallel: R_total = (Rg * Rs) / (Rg + Rs).",
    "hintAr": "ملف الجلفانومتر ومجزئ التيار متصلان على التوازي: $R_{\\text{ammeter}} = \\frac{18 \\times 2}{18 + 2} = 1.8\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "Galvanometer and shunt are in parallel: R_total = (Rg * Rs) / (Rg + Rs).",
      "Therefore, the correct answer is: $1.8\\,\\Omega$"
    ],
    "stepByStepSolutionAr": [
      "ملف الجلفانومتر ومجزئ التيار متصلان على التوازي: $R_{\\text{ammeter}} = \\frac{18 \\times 2}{18 + 2} = 1.8\\,\\Omega$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $1.8\\,\\Omega$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_08",
    "titleEn": "Exercise 8: Sensitivity Decrease in Shunted Galvanometer",
    "titleAr": "تمرين ٨: نسبة نقص حساسية الجلفانومتر عند توصيل مجزئ",
    "difficulty": "medium",
    "questionEn": "When a shunt resistance $R_s$ is connected to a galvanometer of resistance $R_g = 45\\,\\Omega$, the sensitivity of the instrument decreases to $\\frac{1}{10}$ of its original value. Find the value of $R_s$.",
    "questionAr": "عند توصيل مجزئ تيار مقاومته $R_s$ بجلفانومتر مقاومة ملفه $R_g = 45\\,\\Omega$، تقل حساسية الجهاز إلى $\\frac{1}{10}$ من قيمتها الأصلية. احسب قيمة $R_s$.",
    "optionsEn": [
      "$4.5\\,\\Omega$",
      "$5.0\\,\\Omega$",
      "$9.0\\,\\Omega$",
      "$50.0\\,\\Omega$"
    ],
    "optionsAr": [
      "$4.5\\,\\Omega$",
      "$5.0\\,\\Omega$",
      "$9.0\\,\\Omega$",
      "$50.0\\,\\Omega$"
    ],
    "correctAnswer": "$5.0\\,\\Omega$",
    "correctIndex": 1,
    "hintEn": "Sensitivity ratio Ig / I = Rs / (Rg + Rs) = 1/10 => Rg + Rs = 10 Rs => 9 Rs = Rg => Rs = 45/9 = 5 ohms.",
    "hintAr": "نسبة الحساسية: $\\frac{I_g}{I} = \\frac{R_s}{R_g + R_s} = \\frac{1}{10}$، ومنها $9 R_s = R_g \\implies R_s = \\frac{45}{9} = 5\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "Sensitivity ratio Ig / I = Rs / (Rg + Rs) = 1/10 => Rg + Rs = 10 Rs => 9 Rs = Rg => Rs = 45/9 = 5 ohms.",
      "Therefore, the correct answer is: $5.0\\,\\Omega$"
    ],
    "stepByStepSolutionAr": [
      "نسبة الحساسية: $\\frac{I_g}{I} = \\frac{R_s}{R_g + R_s} = \\frac{1}{10}$، ومنها $9 R_s = R_g \\implies R_s = \\frac{45}{9} = 5\\,\\Omega$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $5.0\\,\\Omega$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_09",
    "titleEn": "Exercise 9: Voltmeter Range Extension",
    "titleAr": "تمرين ٩: مدى قياس الفولتميتر بعد مضاعفة المقاومة",
    "difficulty": "medium",
    "questionEn": "A voltmeter of internal resistance $R_V = 1000\\,\\Omega$ has a maximum range of $V_1 = 10\\text{ V}$. What additional series resistance must be added to increase its measuring range to $V_2 = 100\\text{ V}$?",
    "questionAr": "فولتميتر مقاومته الكلية $R_V = 1000\\,\\Omega$ وأقصى قراءة له $V_1 = 10\\text{ فولت}$. ما المقاومة الإضافية التي يجب توصيلها على التوالي معه لزيادة مدى قياسه إلى $100\\text{ فولت}$؟",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$10000\\,\\Omega$",
      "$8000\\,\\Omega$",
      "$900\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$10000\\,\\Omega$",
      "$8000\\,\\Omega$",
      "$900\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "Current capacity is constant: I_max = 10 / 1000 = 0.01 A. New total R = 100 / 0.01 = 10,000 ohms. Added Rm = 10,000 - 1,000 = 9,000 ohms.",
    "hintAr": "أقصى تيار يتحمله: $I = \\frac{10}{1000} = 0.01\\text{ A}$. المقاومة الكلية الجديدة = $\\frac{100}{0.01} = 10000\\,\\Omega$، فالمقاومة المضافة = $9000\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "Current capacity is constant: I_max = 10 / 1000 = 0.01 A. New total R = 100 / 0.01 = 10,000 ohms. Added Rm = 10,000 - 1,000 = 9,000 ohms.",
      "Therefore, the correct answer is: $9000\\,\\Omega$"
    ],
    "stepByStepSolutionAr": [
      "أقصى تيار يتحمله: $I = \\frac{10}{1000} = 0.01\\text{ A}$. المقاومة الكلية الجديدة = $\\frac{100}{0.01} = 10000\\,\\Omega$، فالمقاومة المضافة = $9000\\,\\Omega$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $9000\\,\\Omega$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_10",
    "titleEn": "Exercise 10: Ohmmeter Deflection to Half Scale",
    "titleAr": "تمرين ١٠: انحراف مؤشر الأوميتر إلى نصف التدريج",
    "difficulty": "medium",
    "questionEn": "In an ohmmeter circuit, the pointer deflects to half-scale when an external resistance $R_x = 2500\\,\\Omega$ is connected. What is the total internal resistance of the ohmmeter?",
    "questionAr": "في دائرة أوميتر، ينحرف المؤشر إلى منتصف التدريج عند توصيل مقاومة خارجية $R_x = 2500\\,\\Omega$ بين طرفيه. ما هي المقاومة الداخلية الكلية للأوميتر؟",
    "optionsEn": [
      "$1250\\,\\Omega$",
      "$2500\\,\\Omega$",
      "$5000\\,\\Omega$",
      "$7500\\,\\Omega$"
    ],
    "optionsAr": [
      "$1250\\,\\Omega$",
      "$2500\\,\\Omega$",
      "$5000\\,\\Omega$",
      "$7500\\,\\Omega$"
    ],
    "correctAnswer": "$2500\\,\\Omega$",
    "correctIndex": 1,
    "hintEn": "At half-scale deflection, external resistance equals the total internal resistance: Rx = R_total.",
    "hintAr": "عند انحراف مؤشر الأوميتر إلى نصف التدريج، تتساوى المقاومة المجهولة مع المقاومة الداخلية للجهاز: $R_x = R_{\\text{total}} = 2500\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "At half-scale deflection, external resistance equals the total internal resistance: Rx = R_total.",
      "Therefore, the correct answer is: $2500\\,\\Omega$"
    ],
    "stepByStepSolutionAr": [
      "عند انحراف مؤشر الأوميتر إلى نصف التدريج، تتساوى المقاومة المجهولة مع المقاومة الداخلية للجهاز: $R_x = R_{\\text{total}} = 2500\\,\\Omega$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $2500\\,\\Omega$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_11",
    "titleEn": "Exercise 11: Magnetic Field of Two Parallel Wires at Midpoint",
    "titleAr": "تمرين ١١: كثافة الفيض في منتصف المسافة بين سلكين متعاكسي التيار",
    "difficulty": "medium",
    "questionEn": "Two parallel long straight wires carry equal currents of $5\\text{ A}$ in opposite directions. If the distance between them is $20\\text{ cm}$, find the net magnetic flux density at the midpoint between the two wires.",
    "questionAr": "سلكان مستقيمان متوازيان يمر بكل منهما تيار شدته $5\\text{ أمبير}$ في اتجاهين متضادين. فإذا كانت المسافة بينهما $20\\text{ سم}$، فاحسب كثافة الفيض المغناطيسي المحصلة عند نقطة في منتصف المسافة بينهما.",
    "optionsEn": [
      "$2 \\times 10^{-5}\\text{ T}$",
      "$0\\text{ T}$",
      "$1 \\times 10^{-5}\\text{ T}$",
      "$4 \\times 10^{-5}\\text{ T}$"
    ],
    "optionsAr": [
      "$2 \\times 10^{-5}\\text{ تسلا}$",
      "$0\\text{ تسلا}$",
      "$1 \\times 10^{-5}\\text{ تسلا}$",
      "$4 \\times 10^{-5}\\text{ تسلا}$"
    ],
    "correctAnswer": "$2 \\times 10^{-5}\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "For opposite currents, the magnetic fields between the wires are in the same direction and add up: B_net = B1 + B2 = 2 * ((2 * 10^-7 * 5) / 0.1).",
    "hintAr": "للتيارات المتضادة يكون اتجاه المجالين بين السلكين متماثلاً فتُجمع كثافتا الفيض: $B_{\\text{net}} = B_1 + B_2 = 2 \\times \\frac{2 \\times 10^{-7} \\times 5}{0.1} = 2 \\times 10^{-5}\\text{ T}$.",
    "stepByStepSolutionEn": [
      "For opposite currents, the magnetic fields between the wires are in the same direction and add up: B_net = B1 + B2 = 2 * ((2 * 10^-7 * 5) / 0.1).",
      "Therefore, the correct answer is: $2 \\times 10^{-5}\\text{ T}$"
    ],
    "stepByStepSolutionAr": [
      "للتيارات المتضادة يكون اتجاه المجالين بين السلكين متماثلاً فتُجمع كثافتا الفيض: $B_{\\text{net}} = B_1 + B_2 = 2 \\times \\frac{2 \\times 10^{-7} \\times 5}{0.1} = 2 \\times 10^{-5}\\text{ T}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $2 \\times 10^{-5}\\text{ تسلا}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_12",
    "titleEn": "Exercise 12: Force on Three Parallel Wires",
    "titleAr": "تمرين ١٢: القوة المغناطيسية المؤثرة على السلك الأوسط بين ثلاثة أسلاك",
    "difficulty": "hots",
    "questionEn": "Three long parallel wires $A$, $B$, and $C$ lie in the same plane with equal spacing $d = 10\\text{ cm}$. They carry currents $I_A = 2\\text{ A}$, $I_B = 3\\text{ A}$, and $I_C = 2\\text{ A}$, all in the same direction. What is the net magnetic force per unit length on the middle wire $B$?",
    "questionAr": "ثلاثة أسلاك متوازية $A$ و $B$ و $C$ تقع في نفس المستوى وتفصل بين كل سلكين متجاورين مسافة متساوية $d = 10\\text{ سم}$. يمر بها تيارات في نفس الاتجاه: $I_A = 2\\text{ A}$، $I_B = 3\\text{ A}$، $I_C = 2\\text{ A}$. ما مقدار القوة المغناطيسية المحصلة المؤثرة على وحدة الأطوال من السلك الأوسط $B$؟",
    "optionsEn": [
      "$0\\text{ N/m}$",
      "$1.2 \\times 10^{-5}\\text{ N/m}$",
      "$2.4 \\times 10^{-5}\\text{ N/m}$",
      "$6.0 \\times 10^{-6}\\text{ N/m}$"
    ],
    "optionsAr": [
      "$0\\text{ نيوتن/م}$",
      "$1.2 \\times 10^{-5}\\text{ نيوتن/م}$",
      "$2.4 \\times 10^{-5}\\text{ نيوتن/م}$",
      "$6.0 \\times 10^{-6}\\text{ نيوتن/م}$"
    ],
    "correctAnswer": "$0\\text{ N/m}$",
    "correctIndex": 0,
    "hintEn": "Wires A and C exert equal and opposite attractive forces on wire B because IA = IC and both are at distance d, so net force is zero.",
    "hintAr": "السلكان $A$ و $C$ يجذبان السلك الأوسط بقوتين متساويتين في المقدار ومتعاكستين في الاتجاه لأن التيارين متساويان والمسافتين متساويتان، فتكون القوة المحصلة صفراً.",
    "stepByStepSolutionEn": [
      "Wires A and C exert equal and opposite attractive forces on wire B because IA = IC and both are at distance d, so net force is zero.",
      "Therefore, the correct answer is: $0\\text{ N/m}$"
    ],
    "stepByStepSolutionAr": [
      "السلكان $A$ و $C$ يجذبان السلك الأوسط بقوتين متساويتين في المقدار ومتعاكستين في الاتجاه لأن التيارين متساويان والمسافتين متساويتان، فتكون القوة المحصلة صفراً.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0\\text{ نيوتن/م}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_13",
    "titleEn": "Exercise 13: Torque Angle with Normal to Coil Plane",
    "titleAr": "تمرين ١٣: زاوية عزم الازدواج مع العمودي على مستوى الملف",
    "difficulty": "hots",
    "questionEn": "A current-carrying coil placed in a magnetic field experiences a torque equal to half of its maximum possible torque ($\\tau = 0.5\\,\\tau_{\\max}$). What is the angle between the coil plane and the magnetic field lines?",
    "questionAr": "ملف يمر به تيار موضوع في مجال مغناطيسي، تأثر بعزم ازدواج يساوي نصف قيمته العظمى ($\\tau = 0.5\\,\\tau_{\\max}$). ما هي الزاوية المحصورة بين مستوى الملف وخطوط المجال المغناطيسي؟",
    "optionsEn": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "correctAnswer": "$60^\\circ$",
    "correctIndex": 2,
    "hintEn": "Torque is tau = tau_max * sin(theta) where theta is the angle with the normal. Here sin(theta) = 0.5 => theta = 30 degrees with normal, so angle with coil plane is 90 - 30 = 60 degrees.",
    "hintAr": "عزم الازدواج $\\tau = \\tau_{\\max} \\sin\\theta$ حيث $\\theta$ الزاوية مع العمودي على الملف. $\\sin\\theta = 0.5 \\implies \\theta = 30^\\circ$ مع العمودي، إذن زاوية مستوى الملف مع المجال هي $90^\\circ - 30^\\circ = 60^\\circ$.",
    "stepByStepSolutionEn": [
      "Torque is tau = tau_max * sin(theta) where theta is the angle with the normal. Here sin(theta) = 0.5 => theta = 30 degrees with normal, so angle with coil plane is 90 - 30 = 60 degrees.",
      "Therefore, the correct answer is: $60^\\circ$"
    ],
    "stepByStepSolutionAr": [
      "عزم الازدواج $\\tau = \\tau_{\\max} \\sin\\theta$ حيث $\\theta$ الزاوية مع العمودي على الملف. $\\sin\\theta = 0.5 \\implies \\theta = 30^\\circ$ مع العمودي، إذن زاوية مستوى الملف مع المجال هي $90^\\circ - 30^\\circ = 60^\\circ$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $60^\\circ$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_14",
    "titleEn": "Exercise 14: Non-Uniform Ohmmeter Scale Interpretation",
    "titleAr": "تمرين ١٤: تدريج الأوميتر غير المنتظم",
    "difficulty": "hots",
    "questionEn": "Why is the resistance scale of an ohmmeter non-uniform, with divisions becoming crowded at the high-resistance end?",
    "questionAr": "علل: تدريج الأوميتر غير منتظم وأقسامه تتقارب كلما اقتربنا من نهاية التدريج (المقاومة اللانهائية)؟",
    "optionsEn": [
      "Because current is inversely proportional to total circuit resistance (R_total + Rx), not to Rx alone",
      "Because the galvanometer coil spring constant increases non-linearly",
      "Because the battery electromotive force decreases during measurement",
      "Because the magnetic field in the galvanometer is non-uniform"
    ],
    "optionsAr": [
      "لأن شدة التيار تتناسب عكسياً مع المقاومة الكلية للدائرة $(R_{\\text{total}} + R_x)$ وليس مع $R_x$ فقط",
      "لأن ثابت مرونة زوج الملفات الزنبركية يزداد بشكل غير خطي",
      "لأن القوة الدافعة للبطارية تتناقص أثناء القياس",
      "لأن المجال المغناطيسي بين قطبي المغناطيس غير منتظم"
    ],
    "correctAnswer": "Because current is inversely proportional to total circuit resistance (R_total + Rx), not to Rx alone",
    "correctIndex": 0,
    "hintEn": "I = V_B / (R_total + R_x), which is a reciprocal function of R_x, causing unequal increments.",
    "hintAr": "شدة التيار $I = \\frac{V_B}{R_{\\text{total}} + R_x}$ تتناسب عكسياً مع مجموع المقاومتين، مما يجعل أقسام التدريج غير متساوية.",
    "stepByStepSolutionEn": [
      "I = V_B / (R_total + R_x), which is a reciprocal function of R_x, causing unequal increments.",
      "Therefore, the correct answer is: Because current is inversely proportional to total circuit resistance (R_total + Rx), not to Rx alone"
    ],
    "stepByStepSolutionAr": [
      "شدة التيار $I = \\frac{V_B}{R_{\\text{total}} + R_x}$ تتناسب عكسياً مع مجموع المقاومتين، مما يجعل أقسام التدريج غير متساوية.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن شدة التيار تتناسب عكسياً مع المقاومة الكلية للدائرة $(R_{\\text{total}} + R_x)$ وليس مع $R_x$ فقط"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch2_ex_15",
    "titleEn": "Exercise 15: Cylindrical Soft Iron Core in Galvanometer",
    "titleAr": "تمرين ١٥: وظيفة أسطوانة الحديد المطاوع في الجلفانومتر",
    "difficulty": "hots",
    "questionEn": "In a moving-coil galvanometer, what is the combined function of the cylindrical soft-iron core and the concave magnetic pole pieces?",
    "questionAr": "في الجلفانومتر ذي الملف المتحرك، ما الوظيفة المشتركة لأسطوانة الحديد المطاوع مع قطبي المغناطيس المقعرين؟",
    "optionsEn": [
      "To concentrate and make the magnetic field lines radial, ensuring torque is independent of coil deflection angle",
      "To increase the restoring torque of the spiral hairsprings",
      "To completely eliminate eddy currents in the suspension wire",
      "To protect the galvanometer coil from mechanical shocks"
    ],
    "optionsAr": [
      "تركيز خطوط الفيض وجعلها على هيئة أنصاف أقطار بحيث يكون عزم الازدواج ثابتاً ومستقلاً عن زاوية انحراف الملف",
      "زيادة عزم الازدواج الميكانيكي للملفات الزنبركية",
      "إلغاء التيارات الدوامية تماماً في سلك التعليق",
      "حماية ملف الجلفانومتر من الصدمات الميكانيكية"
    ],
    "correctAnswer": "To concentrate and make the magnetic field lines radial, ensuring torque is independent of coil deflection angle",
    "correctIndex": 0,
    "hintEn": "Radial field lines ensure the coil plane is always parallel to the field lines in any position, making torque directly proportional to current.",
    "hintAr": "المجال المغناطيسي على هيئة أنصاف أقطار يجعل مستوى الملف دائماً موازياً لخطوط الفيض فتكون كثافة الفيض ثابتة وعزم الازدواج متناسباً طردياً مع شدة التيار فقط.",
    "stepByStepSolutionEn": [
      "Radial field lines ensure the coil plane is always parallel to the field lines in any position, making torque directly proportional to current.",
      "Therefore, the correct answer is: To concentrate and make the magnetic field lines radial, ensuring torque is independent of coil deflection angle"
    ],
    "stepByStepSolutionAr": [
      "المجال المغناطيسي على هيئة أنصاف أقطار يجعل مستوى الملف دائماً موازياً لخطوط الفيض فتكون كثافة الفيض ثابتة وعزم الازدواج متناسباً طردياً مع شدة التيار فقط.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تركيز خطوط الفيض وجعلها على هيئة أنصاف أقطار بحيث يكون عزم الازدواج ثابتاً ومستقلاً عن زاوية انحراف الملف"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];
