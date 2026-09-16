import type { SolvedProblem } from '../../../types/curriculum';

export const thPhysCh3SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_phys_ch3_se_01",
    "titleEn": "MoE Example 1: Faraday's Law & Flux Change in a Coil",
    "titleAr": "مثال الوزارة ١: قانون فاراداي وتغير الفيض في ملف",
    "difficulty": "easy",
    "questionEn": "A circular coil of $N = 200\\text{ turns}$ is subjected to a magnetic field that decreases uniformly from $\\Phi_{m1} = 6 \\times 10^{-3}\\text{ Wb}$ to $\\Phi_{m2} = 1 \\times 10^{-3}\\text{ Wb}$ in a time interval of $\\Delta t = 0.05\\text{ s}$. Find the induced electromotive force (EMF) generated in the coil.",
    "questionAr": "ملف دائري مكون من $200\\text{ لفة}$ تعرض لفيض مغناطيسي تناقص بانتظام من $6 \\times 10^{-3}\\text{ وبر}$ إلى $1 \\times 10^{-3}\\text{ وبر}$ خلال زمن قدره $0.05\\text{ ثانية}$. احسب مقدار القوة الدافعة الكهربية المستحثة المتولدة في الملف.",
    "optionsEn": [
      "$20\\text{ V}$",
      "$10\\text{ V}$",
      "$40\\text{ V}$",
      "$5\\text{ V}$"
    ],
    "optionsAr": [
      "$20\\text{ فولت}$",
      "$10\\text{ فولت}$",
      "$40\\text{ فولت}$",
      "$5\\text{ فولت}$"
    ],
    "correctAnswer": "$20\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "Faraday's Law: EMF = -N * (Delta Phi_m / Delta t).",
    "hintAr": "قانون فاراداي: $\\mathcal{E} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "Faraday's Law: EMF = -N * (Delta Phi_m / Delta t).",
      "Therefore, the correct answer is: $20\\text{ V}$"
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\mathcal{E} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $20\\text{ فولت}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_se_02",
    "titleEn": "MoE Example 2: Motional EMF in a Moving Straight Conductor",
    "titleAr": "مثال الوزارة ٢: القوة الدافعة المستحثة في سلك مستقيم متحرك",
    "difficulty": "easy",
    "questionEn": "A straight copper rod of length $L = 0.4\\text{ m}$ moves at a steady speed of $v = 5\\text{ m/s}$ perpendicular to a uniform magnetic field of $B = 0.25\\text{ T}$. Calculate the induced EMF across the rod terminals.",
    "questionAr": "سلك نحاسي مستقيم طوله $0.4\\text{ م}$ يتحرك بسرعة منتظمة قدرها $5\\text{ م/ث}$ عمودياً على مجال مغناطيسي منتظم كثافة فيضه $0.25\\text{ تسلا}$. احسب القوة الدافعة الكهربية المستحثة المتولدة بين طرفي السلك.",
    "optionsEn": [
      "$0.5\\text{ V}$",
      "$1.0\\text{ V}$",
      "$0.25\\text{ V}$",
      "$0.05\\text{ V}$"
    ],
    "optionsAr": [
      "$0.5\\text{ فولت}$",
      "$1.0\\text{ فولت}$",
      "$0.25\\text{ فولت}$",
      "$0.05\\text{ فولت}$"
    ],
    "correctAnswer": "$0.5\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "EMF = -B * L * v * sin(90).",
    "hintAr": "القوة الدافعة المستحثة في سلك: $\\mathcal{E} = -B L v \\sin 90^\\circ$.",
    "stepByStepSolutionEn": [
      "EMF = -B * L * v * sin(90).",
      "Therefore, the correct answer is: $0.5\\text{ V}$"
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك: $\\mathcal{E} = -B L v \\sin 90^\\circ$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0.5\\text{ فولت}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_se_03",
    "titleEn": "MoE Example 3: Mutual Inductance Between Two Coils",
    "titleAr": "مثال الوزارة ٣: معامل الحث المتبادل بين ملفين متجاورين",
    "difficulty": "medium",
    "questionEn": "Two adjacent coils: when the primary current changes uniformly from $10\\text{ A}$ to $0\\text{ A}$ in $\\Delta t = 0.02\\text{ s}$, an average EMF of $50\\text{ V}$ is induced in the secondary coil. What is the mutual inductance $M$ of the system?",
    "questionAr": "ملفان متجاوران: عندما تغيرت شدة التيار في الملف الابتدائي من $10\\text{ أمبير}$ إلى الصفر في زمن قدره $0.02\\text{ ثانية}$، تولدت قوة دافعة كهربية مستحثة في الملف الثانوي مقدارها $50\\text{ فولت}$. ما قيمة معامل الحث المتبادل $M$ بين الملفين؟",
    "optionsEn": [
      "$0.1\\text{ H}$",
      "$0.2\\text{ H}$",
      "$0.05\\text{ H}$",
      "$1.0\\text{ H}$"
    ],
    "optionsAr": [
      "$0.1\\text{ هنري}$",
      "$0.2\\text{ هنري}$",
      "$0.05\\text{ هنري}$",
      "$1.0\\text{ هنري}$"
    ],
    "correctAnswer": "$0.1\\text{ H}$",
    "correctIndex": 0,
    "hintEn": "EMF_2 = M * (Delta I_1 / Delta t) => M = (EMF_2 * Delta t) / Delta I_1.",
    "hintAr": "معامل الحث المتبادل: $M = \\frac{\\mathcal{E}_2 \\cdot \\Delta t}{\\Delta I_1}$.",
    "stepByStepSolutionEn": [
      "EMF_2 = M * (Delta I_1 / Delta t) => M = (EMF_2 * Delta t) / Delta I_1.",
      "Therefore, the correct answer is: $0.1\\text{ H}$"
    ],
    "stepByStepSolutionAr": [
      "معامل الحث المتبادل: $M = \\frac{\\mathcal{E}_2 \\cdot \\Delta t}{\\Delta I_1}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0.1\\text{ هنري}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_se_04",
    "titleEn": "MoE Example 4: AC Dynamo Generator Peak and Effective Values",
    "titleAr": "مثال الوزارة ٤: القيمة العظمى والفعالة للقوة الدافعة لدينامو التيار المتردد",
    "difficulty": "medium",
    "questionEn": "An AC dynamo coil of area $A = 0.05\\text{ m}^2$ and $N = 140\\text{ turns}$ rotates at a frequency of $f = 50\\text{ Hz}$ in a magnetic field of $B = 0.1\\text{ T}$. Calculate the maximum EMF ($\\mathcal{E}_{\\max}$) and the effective EMF ($\\mathcal{E}_{\\text{eff}}$). (Use $\\pi \\approx \\frac{22}{7}$)",
    "questionAr": "ملف دينامو تيار متردد مساحته $A = 0.05\\text{ م}^2$ وعدد لفاته $140\\text{ لفة}$ يدور بتردد $50\\text{ هرتز}$ في مجال مغناطيسي كثافته $0.1\\text{ تسلا}$. احسب القيمة العظمى للقوة الدافعة ($\\mathcal{E}_{\\max}$) والقيمة الفعالة لها ($\\mathcal{E}_{\\text{eff}}$).",
    "optionsEn": [
      "$\\mathcal{E}_{\\max} = 220\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 155.56\\text{ V}$",
      "$\\mathcal{E}_{\\max} = 311.12\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 220\\text{ V}$",
      "$\\mathcal{E}_{\\max} = 440\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 311.12\\text{ V}$",
      "$\\mathcal{E}_{\\max} = 110\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 77.78\\text{ V}$"
    ],
    "optionsAr": [
      "$\\mathcal{E}_{\\max} = 220\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 155.56\\text{ V}$",
      "$\\mathcal{E}_{\\max} = 311.12\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 220\\text{ V}$",
      "$\\mathcal{E}_{\\max} = 440\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 311.12\\text{ V}$",
      "$\\mathcal{E}_{\\max} = 110\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 77.78\\text{ V}$"
    ],
    "correctAnswer": "$\\mathcal{E}_{\\max} = 220\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 155.56\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "EMF_max = 2 * pi * f * N * B * A = 2 * (22/7) * 50 * 140 * 0.1 * 0.05 = 220 V. Then EMF_eff = EMF_max / sqrt(2) = 220 * 0.7071.",
    "hintAr": "القيمة العظمى: $\\mathcal{E}_{\\max} = 2\\pi f N B A = 220\\text{ فولت}$. والقيمة الفعالة: $\\mathcal{E}_{\\text{eff}} = \\frac{\\mathcal{E}_{\\max}}{\\sqrt{2}} \\approx 155.56\\text{ فولت}$.",
    "stepByStepSolutionEn": [
      "EMF_max = 2 * pi * f * N * B * A = 2 * (22/7) * 50 * 140 * 0.1 * 0.05 = 220 V. Then EMF_eff = EMF_max / sqrt(2) = 220 * 0.7071.",
      "Therefore, the correct answer is: $\\mathcal{E}_{\\max} = 220\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 155.56\\text{ V}$"
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى: $\\mathcal{E}_{\\max} = 2\\pi f N B A = 220\\text{ فولت}$. والقيمة الفعالة: $\\mathcal{E}_{\\text{eff}} = \\frac{\\mathcal{E}_{\\max}}{\\sqrt{2}} \\approx 155.56\\text{ فولت}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $\\mathcal{E}_{\\max} = 220\\text{ V},\\, \\mathcal{E}_{\\text{eff}} = 155.56\\text{ V}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_se_05",
    "titleEn": "MoE Example 5: Dynamo Average EMF over Quarter and Half Cycles",
    "titleAr": "مثال الوزارة ٥: القوة الدافعة المتوسطة للدينامو خلال ربع ونصف دورة",
    "difficulty": "medium",
    "questionEn": "If the maximum electromotive force of an AC dynamo is $\\mathcal{E}_{\\max} = 100\\text{ V}$, what is the average EMF generated during a quarter of a rotation starting from the zero position?",
    "questionAr": "إذا كانت القوة الدافعة الكهربية العظمى لدينامو تيار متردد $\\mathcal{E}_{\\max} = 100\\text{ فولت}$، فما مقدار متوسط القوة الدافعة الكهربية المستحثة خلال ربع دورة بدءاً من الوضع العمودي (وضع الصفر)؟",
    "optionsEn": [
      "$63.64\\text{ V}$",
      "$70.71\\text{ V}$",
      "$50.00\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$63.64\\text{ فولت}$",
      "$70.71\\text{ فولت}$",
      "$50.00\\text{ فولت}$",
      "$0\\text{ فولت}$"
    ],
    "correctAnswer": "$63.64\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "EMF_avg (quarter cycle) = (2 / pi) * EMF_max = 0.6364 * 100 V = 63.64 V.",
    "hintAr": "متوسط القوة الدافعة خلال ربع دورة: $\\mathcal{E}_{\\text{avg}} = \\frac{2}{\\pi} \\mathcal{E}_{\\max} = \\frac{2}{3.1416} \\times 100 \\approx 63.64\\text{ فولت}$.",
    "stepByStepSolutionEn": [
      "EMF_avg (quarter cycle) = (2 / pi) * EMF_max = 0.6364 * 100 V = 63.64 V.",
      "Therefore, the correct answer is: $63.64\\text{ V}$"
    ],
    "stepByStepSolutionAr": [
      "متوسط القوة الدافعة خلال ربع دورة: $\\mathcal{E}_{\\text{avg}} = \\frac{2}{\\pi} \\mathcal{E}_{\\max} = \\frac{2}{3.1416} \\times 100 \\approx 63.64\\text{ فولت}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $63.64\\text{ فولت}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_se_06",
    "titleEn": "MoE Example 6: Ideal Step-Down Transformer Calculations",
    "titleAr": "مثال الوزارة ٦: حسابات المحول الكهربي الخافض للجهد المثالي",
    "difficulty": "medium",
    "questionEn": "An ideal transformer is used to step down $V_p = 240\\text{ V}$ to $V_s = 12\\text{ V}$. If the primary coil has $N_p = 1200\\text{ turns}$ and supplies a load current of $I_s = 5\\text{ A}$, determine the secondary turns $N_s$ and the primary current $I_p$.",
    "questionAr": "محول كهربي مثالي خافض للجهد يعمل على خفض الجهد من $240\\text{ فولت}$ إلى $12\\text{ فولت}$. إذا كان عدد لفات الملف الابتدائي $1200\\text{ لفة}$ ويمر في دائرة الملف الثانوي تيار $5\\text{ أمبير}$، فاحسب عدد لفات الملف الثانوي $N_s$ وشدة تيار الملف الابتدائي $I_p$.",
    "optionsEn": [
      "$N_s = 60\\text{ turns},\\, I_p = 0.25\\text{ A}$",
      "$N_s = 60\\text{ turns},\\, I_p = 4.0\\text{ A}$",
      "$N_s = 120\\text{ turns},\\, I_p = 0.5\\text{ A}$",
      "$N_s = 30\\text{ turns},\\, I_p = 0.125\\text{ A}$"
    ],
    "optionsAr": [
      "$N_s = 60\\text{ لفة},\\, I_p = 0.25\\text{ أمبير}$",
      "$N_s = 60\\text{ لفة},\\, I_p = 4.0\\text{ أمبير}$",
      "$N_s = 120\\text{ لفة},\\, I_p = 0.5\\text{ أمبير}$",
      "$N_s = 30\\text{ لفة},\\, I_p = 0.125\\text{ أمبير}$"
    ],
    "correctAnswer": "$N_s = 60\\text{ turns},\\, I_p = 0.25\\text{ A}$",
    "correctIndex": 0,
    "hintEn": "In ideal transformer: Vs / Vp = Ns / Np and Ip / Is = Vs / Vp.",
    "hintAr": "في المحول المثالي: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$ و $\\frac{I_p}{I_s} = \\frac{V_s}{V_p}$.",
    "stepByStepSolutionEn": [
      "In ideal transformer: Vs / Vp = Ns / Np and Ip / Is = Vs / Vp.",
      "Therefore, the correct answer is: $N_s = 60\\text{ turns},\\, I_p = 0.25\\text{ A}$"
    ],
    "stepByStepSolutionAr": [
      "في المحول المثالي: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$ و $\\frac{I_p}{I_s} = \\frac{V_s}{V_p}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $N_s = 60\\text{ لفة},\\, I_p = 0.25\\text{ أمبير}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_se_07",
    "titleEn": "MoE Example 7: Non-Ideal Transformer Efficiency",
    "titleAr": "مثال الوزارة ٧: كفاءة المحول الكهربي غير المثالي",
    "difficulty": "medium",
    "questionEn": "A transformer operates on a primary voltage of $220\\text{ V}$ with a primary current of $0.5\\text{ A}$. Its secondary delivers $11\\text{ V}$ at a current of $8\\text{ A}$. What is the efficiency $\\eta$ of this transformer?",
    "questionAr": "محول كهربي يعمل على جهد ابتدائي $220\\text{ فولت}$ ويسحب تياراً $0.5\\text{ أمبير}$. ويعطي ملفه الثانوي فرق جهد $11\\text{ فولت}$ بتيار $8\\text{ أمبير}$. ما هي كفاءة المحول $\\eta$؟",
    "optionsEn": [
      "$80\\%$",
      "$85\\%$",
      "$90\\%$",
      "$95\\%$"
    ],
    "optionsAr": [
      "$80\\%$",
      "$85\\%$",
      "$90\\%$",
      "$95\\%$"
    ],
    "correctAnswer": "$80\\%$",
    "correctIndex": 0,
    "hintEn": "Efficiency eta = (P_s / P_p) * 100% = (Vs * Is) / (Vp * Ip) * 100%.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\% = \\frac{11 \\times 8}{220 \\times 0.5} \\times 100\\% = 80\\%$.",
    "stepByStepSolutionEn": [
      "Efficiency eta = (P_s / P_p) * 100% = (Vs * Is) / (Vp * Ip) * 100%.",
      "Therefore, the correct answer is: $80\\%$"
    ],
    "stepByStepSolutionAr": [
      "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\% = \\frac{11 \\times 8}{220 \\times 0.5} \\times 100\\% = 80\\%$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $80\\%$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_se_08",
    "titleEn": "MoE Example 8: Self-Inductance & Stored Magnetic Energy",
    "titleAr": "مثال الوزارة ٨: معامل الحث الذاتي والطاقة المغناطيسية المختزنة",
    "difficulty": "hots",
    "questionEn": "A solenoid has length $\\ell = 0.5\\text{ m}$, cross-sectional area $A = 20\\text{ cm}^2$, and $N = 500\\text{ turns}$. If it carries a steady current $I = 4\\text{ A}$, calculate its self-inductance $L$ and the magnetic energy $U_m$ stored in its field. ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
    "questionAr": "ملف لولبي طوله $0.5\\text{ م}$ ومساحة مقطعه $20\\text{ سم}^2$ وعدد لفاته $500\\text{ لفة}$. إذا مر به تيار مستمر $4\\text{ أمبير}$، فاحسب معامل حثه الذاتي $L$ والطاقة المغناطيسية المختزنة فيه $U_m$.",
    "optionsEn": [
      "$L = 1.257\\text{ mH},\\, U_m = 10.05\\text{ mJ}$",
      "$L = 2.514\\text{ mH},\\, U_m = 20.10\\text{ mJ}$",
      "$L = 0.628\\text{ mH},\\, U_m = 5.03\\text{ mJ}$",
      "$L = 1.257\\text{ H},\\, U_m = 10.05\\text{ J}$"
    ],
    "optionsAr": [
      "$L = 1.257\\text{ mH},\\, U_m = 10.05\\text{ mJ}$",
      "$L = 2.514\\text{ mH},\\, U_m = 20.10\\text{ mJ}$",
      "$L = 0.628\\text{ mH},\\, U_m = 5.03\\text{ mJ}$",
      "$L = 1.257\\text{ H},\\, U_m = 10.05\\text{ J}$"
    ],
    "correctAnswer": "$L = 1.257\\text{ mH},\\, U_m = 10.05\\text{ mJ}$",
    "correctIndex": 0,
    "hintEn": "L = (mu0 * N^2 * A) / ell, and stored energy U_m = 0.5 * L * I^2.",
    "hintAr": "معامل الحث الذاتي: $L = \\frac{\\mu_0 N^2 A}{\\ell}$، والطاقة المختزنة: $U_m = \\frac{1}{2} L I^2$.",
    "stepByStepSolutionEn": [
      "L = (mu0 * N^2 * A) / ell, and stored energy U_m = 0.5 * L * I^2.",
      "Therefore, the correct answer is: $L = 1.257\\text{ mH},\\, U_m = 10.05\\text{ mJ}$"
    ],
    "stepByStepSolutionAr": [
      "معامل الحث الذاتي: $L = \\frac{\\mu_0 N^2 A}{\\ell}$، والطاقة المختزنة: $U_m = \\frac{1}{2} L I^2$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $L = 1.257\\text{ mH},\\, U_m = 10.05\\text{ mJ}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_se_09",
    "titleEn": "MoE Example 9: Electrical Power Transmission Line Losses",
    "titleAr": "مثال الوزارة ٩: كفاءة نقل الطاقة الكهربية عبر خطوط النقل",
    "difficulty": "hots",
    "questionEn": "A power station generates $200\\text{ kW}$ of electrical power. The power is transmitted across transmission cables of total resistance $R = 5\\,\\Omega$ under a transmission voltage of $V = 10\\text{ kV}$. Calculate the power loss $\\Delta P$ in the cables and the transmission efficiency.",
    "questionAr": "محطة لتوليد الكهرباء تنتج قدرة مقدارها $200\\text{ كيلوواط}$. تُنقل هذه القدرة عبر خطوط نقل مقاومتها الكلية $5\\,\\Omega$ بفرق جهد قدره $10\\text{ كيلو فولت}$. احسب القدرة المفقودة في الأسلاك $\\Delta P$ وكفاءة النقل.",
    "optionsEn": [
      "$\\Delta P = 2\\text{ kW},\\, \\eta = 99\\%$",
      "$\\Delta P = 10\\text{ kW},\\, \\eta = 95\\%$",
      "$\\Delta P = 20\\text{ kW},\\, \\eta = 90\\%$",
      "$\\Delta P = 4\\text{ kW},\\, \\eta = 98\\%$"
    ],
    "optionsAr": [
      "$\\Delta P = 2\\text{ kW},\\, \\eta = 99\\%$",
      "$\\Delta P = 10\\text{ kW},\\, \\eta = 95\\%$",
      "$\\Delta P = 20\\text{ kW},\\, \\eta = 90\\%$",
      "$\\Delta P = 4\\text{ kW},\\, \\eta = 98\\%$"
    ],
    "correctAnswer": "$\\Delta P = 2\\text{ kW},\\, \\eta = 99\\%$",
    "correctIndex": 0,
    "hintEn": "Transmission current I = P_station / V = 200,000 / 10,000 = 20 A. Power loss = I^2 * R = 20^2 * 5 = 2000 W = 2 kW. Efficiency = (200 - 2) / 200 = 99%.",
    "hintAr": "تيار النقل: $I = \\frac{200000}{10000} = 20\\text{ A}$. القدرة المفقودة: $\\Delta P = I^2 R = 20^2 \\times 5 = 2000\\text{ W} = 2\\text{ kW}$. كفاءة النقل = $99\\%$.",
    "stepByStepSolutionEn": [
      "Transmission current I = P_station / V = 200,000 / 10,000 = 20 A. Power loss = I^2 * R = 20^2 * 5 = 2000 W = 2 kW. Efficiency = (200 - 2) / 200 = 99%.",
      "Therefore, the correct answer is: $\\Delta P = 2\\text{ kW},\\, \\eta = 99\\%$"
    ],
    "stepByStepSolutionAr": [
      "تيار النقل: $I = \\frac{200000}{10000} = 20\\text{ A}$. القدرة المفقودة: $\\Delta P = I^2 R = 20^2 \\times 5 = 2000\\text{ W} = 2\\text{ kW}$. كفاءة النقل = $99\\%$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $\\Delta P = 2\\text{ kW},\\, \\eta = 99\\%$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_se_10",
    "titleEn": "MoE Example 10: Role of Split-Ring Commutator in DC Generator",
    "titleAr": "مثال الوزارة ١٠: دور المقوم المعدني (نصفي الأسطوانة) في الدينامو والموتور",
    "difficulty": "hots",
    "questionEn": "When the two slip rings of an AC dynamo are replaced by a single copper cylinder split longitudinally into two isolated halves (commutator), what is the resulting nature of the output current in the external circuit?",
    "questionAr": "عند استبدال حلقتي الانزلاق في دينامو التيار المتردد بأسطوانة معدنية مشقوقة طولياً إلى نصفين معزولين (المقوم المعدني)، ما طبيعة التيار الناتج في الدائرة الخارجية؟",
    "optionsEn": [
      "Unidirectional current with pulsating (variable) intensity",
      "Constant direct current (pure DC) with fixed intensity",
      "Alternating sinusoidal current with doubled frequency",
      "Zero current because induced EMF is cancelled"
    ],
    "optionsAr": [
      "تيار موحد الاتجاه متغير الشدة (نبضي)",
      "تيار مستمر ثابت الشدة والاتجاه تماماً",
      "تيار متردد جيبي بتردد مضاعف",
      "ينعدم التيار لتلاشي القوة الدافعة المستحثة"
    ],
    "correctAnswer": "Unidirectional current with pulsating (variable) intensity",
    "correctIndex": 0,
    "hintEn": "The commutator swaps brush connections every half cycle, keeping the external current in one direction while its magnitude still pulsates from 0 to max.",
    "hintAr": "يعمل نصفي الأسطوانة على تبديل موضعيهما بالنسبة للفرشتين كل نصف دورة، فيسري التيار في الدائرة الخارجية في اتجاه واحد مع بقاء شدته متغيرة نبضياً.",
    "stepByStepSolutionEn": [
      "The commutator swaps brush connections every half cycle, keeping the external current in one direction while its magnitude still pulsates from 0 to max.",
      "Therefore, the correct answer is: Unidirectional current with pulsating (variable) intensity"
    ],
    "stepByStepSolutionAr": [
      "يعمل نصفي الأسطوانة على تبديل موضعيهما بالنسبة للفرشتين كل نصف دورة، فيسري التيار في الدائرة الخارجية في اتجاه واحد مع بقاء شدته متغيرة نبضياً.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تيار موحد الاتجاه متغير الشدة (نبضي)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];

export const thPhysCh3Exercises: SolvedProblem[] = [
  {
    "id": "th_phys_ch3_ex_01",
    "titleEn": "Exercise 1: Lenz's Law on Magnet Approaching Coil",
    "titleAr": "تمرين ١: اتجاه التيار المستحث عند تقريب مغناطيس من ملف",
    "difficulty": "easy",
    "questionEn": "When the North pole of a bar magnet approaches a solenoid, what magnetic pole is formed at the near end of the solenoid, and does it attract or repel the magnet?",
    "questionAr": "عند تقريب القطب الشمالي لمغناطيس من أحد طرفي ملف لولبي، ما نوع القطب المغناطيسي المتولد عند هذا الطرف، وهل تنشأ قوة تجاذب أم تنافر؟",
    "optionsEn": [
      "North pole, causing repulsive force",
      "South pole, causing attractive force",
      "North pole, causing attractive force",
      "South pole, causing repulsive force"
    ],
    "optionsAr": [
      "قطب شمالي، فتنشأ قوة تنافر",
      "قطب جنوبي، فتنشأ قوة تجاذب",
      "قطب شمالي، فتنشأ قوة تجاذب",
      "قطب جنوبي، فتنشأ قوة تنافر"
    ],
    "correctAnswer": "North pole, causing repulsive force",
    "correctIndex": 0,
    "hintEn": "By Lenz's law, the induced field opposes the motion that produces it. Approaching North creates North to repel.",
    "hintAr": "وفق قاعدة لينز: اتجاه التيار المستحث يعاكس التغير المسبب له. تقريب قطب شمالي يولد قطباً شمالياً مشابهاً لمقاومة التقريب (تنافر).",
    "stepByStepSolutionEn": [
      "By Lenz's law, the induced field opposes the motion that produces it. Approaching North creates North to repel.",
      "Therefore, the correct answer is: North pole, causing repulsive force"
    ],
    "stepByStepSolutionAr": [
      "وفق قاعدة لينز: اتجاه التيار المستحث يعاكس التغير المسبب له. تقريب قطب شمالي يولد قطباً شمالياً مشابهاً لمقاومة التقريب (تنافر).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: قطب شمالي، فتنشأ قوة تنافر"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_02",
    "titleEn": "Exercise 2: Average EMF in Full Cycle of Dynamo",
    "titleAr": "تمرين ٢: متوسط القوة الدافعة للدينامو خلال دورة كاملة",
    "difficulty": "easy",
    "questionEn": "What is the average electromotive force ($\\mathcal{E}_{\\text{avg}}$) induced in a dynamo coil over one complete revolution ($360^\\circ$)?",
    "questionAr": "ما مقدار متوسط القوة الدافعة الكهربية المستحثة المتولدة في ملف دينامو خلال دورة كاملة واحدة ($360^\\circ$)؟",
    "optionsEn": [
      "$0\\text{ V}$",
      "$\\mathcal{E}_{\\max}$",
      "$\\frac{2}{\\pi} \\mathcal{E}_{\\max}$",
      "$\\frac{\\mathcal{E}_{\\max}}{\\sqrt{2}}$"
    ],
    "optionsAr": [
      "$0\\text{ فولت}$",
      "$\\mathcal{E}_{\\max}$",
      "$\\frac{2}{\\pi} \\mathcal{E}_{\\max}$",
      "$\\frac{\\mathcal{E}_{\\max}}{\\sqrt{2}}$"
    ],
    "correctAnswer": "$0\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "The positive half-cycle exactly cancels the negative half-cycle in average value: EMF_avg = 0.",
    "hintAr": "متوسط القوة الدافعة في النصف الموجب للدورة يلغي تماماً متوسطها في النصف السالب: $\\mathcal{E}_{\\text{avg}} = 0$.",
    "stepByStepSolutionEn": [
      "The positive half-cycle exactly cancels the negative half-cycle in average value: EMF_avg = 0.",
      "Therefore, the correct answer is: $0\\text{ V}$"
    ],
    "stepByStepSolutionAr": [
      "متوسط القوة الدافعة في النصف الموجب للدورة يلغي تماماً متوسطها في النصف السالب: $\\mathcal{E}_{\\text{avg}} = 0$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0\\text{ فولت}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_03",
    "titleEn": "Exercise 3: Fleming's Right-Hand Rule",
    "titleAr": "تمرين ٣: تطبيق قاعدة اليد اليمنى لفلمنج",
    "difficulty": "easy",
    "questionEn": "Which physical rule is specifically used to determine the direction of induced current in a straight wire moving perpendicular to a magnetic field?",
    "questionAr": "أي القواعد الفيزيائية الآتية تُستخدم خصيصاً لتحديد اتجاه التيار الكهربي المستحث في سلك مستقيم يتحرك عمودياً على مجال مغناطيسي؟",
    "optionsEn": [
      "Fleming's Right-Hand Rule",
      "Fleming's Left-Hand Rule",
      "Ampere's Right-Hand Grip Rule",
      "Maxwell's Corkscrew Rule"
    ],
    "optionsAr": [
      "قاعدة اليد اليمنى لفلمنج",
      "قاعدة اليد اليسرى لفلمنج",
      "قاعدة اليد اليمنى لأمبير",
      "قاعدة البريمة اليمنى لماكسويل"
    ],
    "correctAnswer": "Fleming's Right-Hand Rule",
    "correctIndex": 0,
    "hintEn": "Right hand for induced current (dynamo/wire motion), left hand for magnetic motor force.",
    "hintAr": "قاعدة اليد اليمنى لفلمنج للتيار المستحث، وقاعدة اليد اليسرى لفلمنج للقوة المؤثرة على سلك يمر به تيار.",
    "stepByStepSolutionEn": [
      "Right hand for induced current (dynamo/wire motion), left hand for magnetic motor force.",
      "Therefore, the correct answer is: Fleming's Right-Hand Rule"
    ],
    "stepByStepSolutionAr": [
      "قاعدة اليد اليمنى لفلمنج للتيار المستحث، وقاعدة اليد اليسرى لفلمنج للقوة المؤثرة على سلك يمر به تيار.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: قاعدة اليد اليمنى لفلمنج"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_04",
    "titleEn": "Exercise 4: Lamination of Iron Core Against Eddy Currents",
    "titleAr": "تمرين ٤: تقسيم القلب الحديدي إلى شرائح معزولة للحد من التيارات الدوامية",
    "difficulty": "easy",
    "questionEn": "Why is the soft iron core in electric transformers made of thin sheets (laminations) insulated from each other?",
    "questionAr": "علل: يُصنع القلب الحديدي في المحولات الكهربية على شكل شرائح رقيقة معزولة عن بعضها البعض؟",
    "optionsEn": [
      "To increase electrical resistance and significantly minimize energy loss due to eddy currents",
      "To increase the secondary voltage of the transformer",
      "To prevent magnetic hysteresis losses entirely",
      "To convert alternating current into direct current"
    ],
    "optionsAr": [
      "لزيادة المقاومة الكهربية للقلب والحد من الطاقة المفقودة في صورة حرارة بفعل التيارات الدوامية",
      "لزيادة فرق الجهد المتولد في الملف الثانوي",
      "لمنع الفقد في الطاقة الميكانيكية لجزيئات القلب المغناطيسي تماماً",
      "لتحويل التيار المتردد إلى تيار مستمر"
    ],
    "correctAnswer": "To increase electrical resistance and significantly minimize energy loss due to eddy currents",
    "correctIndex": 0,
    "hintEn": "Thin laminations perpendicular to eddy current paths increase resistance, reducing I^2 R heating.",
    "hintAr": "التقسيم إلى شرائح معزولة موازية لخطوط الفيض يزيد من مقاومة مسار التيارات الدوامية فيقلل الطاقة الحرارية المفقودة.",
    "stepByStepSolutionEn": [
      "Thin laminations perpendicular to eddy current paths increase resistance, reducing I^2 R heating.",
      "Therefore, the correct answer is: To increase electrical resistance and significantly minimize energy loss due to eddy currents"
    ],
    "stepByStepSolutionAr": [
      "التقسيم إلى شرائح معزولة موازية لخطوط الفيض يزيد من مقاومة مسار التيارات الدوامية فيقلل الطاقة الحرارية المفقودة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لزيادة المقاومة الكهربية للقلب والحد من الطاقة المفقودة في صورة حرارة بفعل التيارات الدوامية"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_05",
    "titleEn": "Exercise 5: Instantaneous EMF at 30 Degrees",
    "titleAr": "تمرين ٥: القيمة اللحظية للقوة الدافعة عندما يصنع العمودي زاوية ٣٠ درجة",
    "difficulty": "medium",
    "questionEn": "In an AC dynamo producing $\\mathcal{E}_{\\max} = 200\\text{ V}$, what is the instantaneous EMF when the normal to the coil plane makes an angle of $30^\\circ$ with the magnetic field lines?",
    "questionAr": "في دينامو تيار متردد يعطي قوة دافعة عظمى $200\\text{ فولت}$، ما القيمة اللحظية للقوة الدافعة عندما يصنع العمودي على مستوى الملف زاوية $30^\\circ$ مع خطوط الفيض؟",
    "optionsEn": [
      "$100\\text{ V}$",
      "$173.2\\text{ V}$",
      "$141.4\\text{ V}$",
      "$50\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ فولت}$",
      "$173.2\\text{ فولت}$",
      "$141.4\\text{ فولت}$",
      "$50\\text{ فولت}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "EMF_inst = EMF_max * sin(theta) where theta is the angle of the normal to the field lines: 200 * sin(30) = 100 V.",
    "hintAr": "القيمة اللحظية للدينامو: $\\mathcal{E}_{\\text{inst}} = \\mathcal{E}_{\\max} \\sin\\theta$ حيث $\\theta$ هي زاوية العمودي على مستوى الملف مع الفيض: $200 \\sin 30^\\circ = 100\\text{ V}$.",
    "stepByStepSolutionEn": [
      "EMF_inst = EMF_max * sin(theta) where theta is the angle of the normal to the field lines: 200 * sin(30) = 100 V.",
      "Therefore, the correct answer is: $100\\text{ V}$"
    ],
    "stepByStepSolutionAr": [
      "القيمة اللحظية للدينامو: $\\mathcal{E}_{\\text{inst}} = \\mathcal{E}_{\\max} \\sin\\theta$ حيث $\\theta$ هي زاوية العمودي على مستوى الملف مع الفيض: $200 \\sin 30^\\circ = 100\\text{ V}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $100\\text{ فولت}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_06",
    "titleEn": "Exercise 6: Step-Up Transformer Secondary Current",
    "titleAr": "تمرين ٦: شدة تيار الملف الثانوي في محول رافع للجهد",
    "difficulty": "medium",
    "questionEn": "An ideal step-up transformer has a turns ratio of $N_s / N_p = 5$. If the primary current is $I_p = 10\\text{ A}$, what is the secondary current $I_s$?",
    "questionAr": "محول كهربي مثالي رافع للجهد، نسبة عدد لفاته $\\frac{N_s}{N_p} = 5$. فإذا كانت شدة تيار الملف الابتدائي $10\\text{ أمبير}$، فما شدة تيار الملف الثانوي $I_s$؟",
    "optionsEn": [
      "$2\\text{ A}$",
      "$50\\text{ A}$",
      "$5\\text{ A}$",
      "$1\\text{ A}$"
    ],
    "optionsAr": [
      "$2\\text{ أمبير}$",
      "$50\\text{ أمبير}$",
      "$5\\text{ أمبير}$",
      "$1\\text{ أمبير}$"
    ],
    "correctAnswer": "$2\\text{ A}$",
    "correctIndex": 0,
    "hintEn": "For an ideal transformer: Is / Ip = Np / Ns = 1/5 => Is = 10 / 5 = 2 A.",
    "hintAr": "المحول الرافع للجهد يكون خافضاً لشدة التيار: $I_s = I_p \\times \\frac{N_p}{N_s} = 10 \\times \\frac{1}{5} = 2\\text{ A}$.",
    "stepByStepSolutionEn": [
      "For an ideal transformer: Is / Ip = Np / Ns = 1/5 => Is = 10 / 5 = 2 A.",
      "Therefore, the correct answer is: $2\\text{ A}$"
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يكون خافضاً لشدة التيار: $I_s = I_p \\times \\frac{N_p}{N_s} = 10 \\times \\frac{1}{5} = 2\\text{ A}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $2\\text{ أمبير}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_07",
    "titleEn": "Exercise 7: Sparking on Breaking an Inductive Circuit",
    "titleAr": "تمرين ٧: حدوث شرر كهربي عند فتح دائرة مغناطيس كهربي",
    "difficulty": "medium",
    "questionEn": "Why is an intense electric spark observed across the switch terminals at the instant of opening an inductive circuit (such as a large electromagnet)?",
    "questionAr": "علل: ظهور شرر كهربي شديد بين طرفي المفتاح عند لحظة فتح دائرة كهرومغناطيسية كبيرة؟",
    "optionsEn": [
      "Due to a huge forward self-induced EMF caused by the rapid collapse of magnetic flux",
      "Due to a reverse self-induced EMF that opposes the battery voltage",
      "Because the battery voltage increases at the instant of breaking the circuit",
      "Due to rapid heat dissipation from eddy currents in the wires"
    ],
    "optionsAr": [
      "لتولد قوة دافعة مستحثة طردية هائلة في نفس اتجاه تيار البطارية نتيجة الانهيار السريع للفيض المغناطيسي",
      "لتولد قوة دافعة مستحثة عكسية تعاكس جهد البطارية",
      "لأن القوة الدافعة للبطارية تتضاعف لحظة فتح الدائرة",
      "بسبب التبديد الحراري المفاجئ للتيارات الدوامية في الأسلاك"
    ],
    "correctAnswer": "Due to a huge forward self-induced EMF caused by the rapid collapse of magnetic flux",
    "correctIndex": 0,
    "hintEn": "At breaking, Delta t is very small, generating a massive forward induced EMF that ionizes the air gap.",
    "hintAr": "لحظة الفتح يتلاشى التيار سريعاً جداً في زمن صغير جداً $\\Delta t$ فتتولد $\\mathcal{E}$ طردية هائلة تؤين الهواء وتحدث شرارة كهربية.",
    "stepByStepSolutionEn": [
      "At breaking, Delta t is very small, generating a massive forward induced EMF that ionizes the air gap.",
      "Therefore, the correct answer is: Due to a huge forward self-induced EMF caused by the rapid collapse of magnetic flux"
    ],
    "stepByStepSolutionAr": [
      "لحظة الفتح يتلاشى التيار سريعاً جداً في زمن صغير جداً $\\Delta t$ فتتولد $\\mathcal{E}$ طردية هائلة تؤين الهواء وتحدث شرارة كهربية.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لتولد قوة دافعة مستحثة طردية هائلة في نفس اتجاه تيار البطارية نتيجة الانهيار السريع للفيض المغناطيسي"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_08",
    "titleEn": "Exercise 8: Transformer Connected to a DC Battery",
    "titleAr": "تمرين ٨: توصيل المحول الكهربي بمصدر تيار مستمر (بطارية)",
    "difficulty": "medium",
    "questionEn": "If the primary coil of a transformer is connected to a $12\\text{ V}$ direct current (DC) battery, what is the steady secondary voltage?",
    "questionAr": "إذا وُصل الملف الابتدائي لمحول كهربي ببطارية تيار مستمر قوتها الدافعة $12\\text{ فولت}$، فما مقدار فرق الجهد المستحث الثابت بين طرفي الملف الثانوي؟",
    "optionsEn": [
      "$0\\text{ V}$",
      "$12\\text{ V}$",
      "Higher than $12\\text{ V}$",
      "Depends on the turns ratio"
    ],
    "optionsAr": [
      "$0\\text{ فولت}$",
      "$12\\text{ فولت}$",
      "أكبر من $12\\text{ فولت}$",
      "يعتمد على نسبة عدد اللفات"
    ],
    "correctAnswer": "$0\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "Transformers operate solely on alternating flux (Delta Phi / Delta t). DC produces constant flux, so steady induced EMF in the secondary is zero.",
    "hintAr": "المحول لا يعمل بالتيار المستمر لأن فيضه ثابت ($\\Delta \\Phi_m / \\Delta t = 0$)، فلا يتولد جهد مستحث في الملف الثانوي.",
    "stepByStepSolutionEn": [
      "Transformers operate solely on alternating flux (Delta Phi / Delta t). DC produces constant flux, so steady induced EMF in the secondary is zero.",
      "Therefore, the correct answer is: $0\\text{ V}$"
    ],
    "stepByStepSolutionAr": [
      "المحول لا يعمل بالتيار المستمر لأن فيضه ثابت ($\\Delta \\Phi_m / \\Delta t = 0$)، فلا يتولد جهد مستحث في الملف الثانوي.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0\\text{ فولت}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_09",
    "titleEn": "Exercise 9: Induction Coil Turns Doubled",
    "titleAr": "تمرين ٩: مضاعفة عدد لفات ملف الحث الذاتي",
    "difficulty": "medium",
    "questionEn": "If the number of turns of a solenoid is doubled while keeping its length and cross-sectional area unchanged, its self-inductance coefficient $L$ becomes:",
    "questionAr": "إذا زاد عدد لفات ملف لولبي إلى الضعف مع ثبوت طوله ومساحة مقطعه، فإن معامل حثه الذاتي $L$ يصبح:",
    "optionsEn": [
      "$4$ times its original value",
      "$2$ times its original value",
      "Half its original value",
      "Unchanged"
    ],
    "optionsAr": [
      "$4$ أمثال قيمته الأصلية",
      "ضعف قيمته الأصلية",
      "نصف قيمته الأصلية",
      "لا يتغير"
    ],
    "correctAnswer": "$4$ times its original value",
    "correctIndex": 0,
    "hintEn": "L is proportional to N^2: (2N)^2 = 4 N^2.",
    "hintAr": "معامل الحث الذاتي يتناسب طردياً مع مربع عدد اللفات: $L \\propto N^2$، إذن يزداد إلى 4 أمثال.",
    "stepByStepSolutionEn": [
      "L is proportional to N^2: (2N)^2 = 4 N^2.",
      "Therefore, the correct answer is: $4$ times its original value"
    ],
    "stepByStepSolutionAr": [
      "معامل الحث الذاتي يتناسب طردياً مع مربع عدد اللفات: $L \\propto N^2$، إذن يزداد إلى 4 أمثال.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $4$ أمثال قيمته الأصلية"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_10",
    "titleEn": "Exercise 10: Terminal Induced EMF in Rapidly Pulled Loop",
    "titleAr": "تمرين ١٠: القوة المغناطيسية المعاكسة لسحب حلقة موصلة",
    "difficulty": "medium",
    "questionEn": "A closed square conducting loop of resistance $R$ is pulled at speed $v$ out of a perpendicular magnetic field $B$. What is the external mechanical force required to maintain its constant velocity?",
    "questionAr": "حلقة موصلة مربعة مغلقة مقاومتها $R$ وطول ضلعها $L$ تُسحب بسرعة $v$ إلى خارج مجال مغناطيسي منتظم $B$. ما القوة الميكانيكية الخارجية اللازمة للحفاظ على سرعتها المنتظمة؟",
    "optionsEn": [
      "$\\frac{B^2 L^2 v}{R}$",
      "$\\frac{B L v}{R}$",
      "$\\frac{B^2 L v^2}{R}$",
      "$B I L$"
    ],
    "optionsAr": [
      "$\\frac{B^2 L^2 v}{R}$",
      "$\\frac{B L v}{R}$",
      "$\\frac{B^2 L v^2}{R}$",
      "$B I L$"
    ],
    "correctAnswer": "$\\frac{B^2 L^2 v}{R}$",
    "correctIndex": 0,
    "hintEn": "EMF = B L v => I = B L v / R => F = B I L = B^2 L^2 v / R.",
    "hintAr": "القوة المغناطيسية المعاكسة: $F = B I L = B \\left(\\frac{B L v}{R}\\right) L = \\frac{B^2 L^2 v}{R}$، وتتساوى معها القوة الخارجية للحركة بسرعة منتظمة.",
    "stepByStepSolutionEn": [
      "EMF = B L v => I = B L v / R => F = B I L = B^2 L^2 v / R.",
      "Therefore, the correct answer is: $\\frac{B^2 L^2 v}{R}$"
    ],
    "stepByStepSolutionAr": [
      "القوة المغناطيسية المعاكسة: $F = B I L = B \\left(\\frac{B L v}{R}\\right) L = \\frac{B^2 L^2 v}{R}$، وتتساوى معها القوة الخارجية للحركة بسرعة منتظمة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $\\frac{B^2 L^2 v}{R}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_11",
    "titleEn": "Exercise 11: Electric Motor Back EMF Function",
    "titleAr": "تمرين ١١: وظيفة القوة الدافعة الكهربية العكسية في المحرك الكهربي",
    "difficulty": "hots",
    "questionEn": "What is the vital role of the back (reverse) electromotive force generated in the armature of an electric DC motor during operation?",
    "questionAr": "ما هو الدور الحيوي للقوة الدافعة الكهربية المستحثة العكسية المتولدة في ملف المحرك الكهربي (الموتور) أثناء دورانه؟",
    "optionsEn": [
      "It regulates and stabilizes the rotational speed of the armature at a steady rate",
      "It doubles the torque output of the motor",
      "It converts direct current into alternating current",
      "It prevents the split ring from sparking"
    ],
    "optionsAr": [
      "تعمل على انتظام واستقرار سرعة دوران ملف المحرك عند معدل ثابت",
      "تضاعف من عزم الازدواج الميكانيكي الخارج من المحرك",
      "تحول التيار المستمر إلى تيار متردد داخل الملف",
      "تمنع تكون الشرر الكهربي عند نصفي الأسطوانة"
    ],
    "correctAnswer": "It regulates and stabilizes the rotational speed of the armature at a steady rate",
    "correctIndex": 0,
    "hintEn": "If speed drops, back EMF decreases, so net voltage (V_B - E_back) rises, driving more current and increasing torque back to equilibrium.",
    "hintAr": "إذا زادت السرعة زادت $\\mathcal{E}$ العكسية فيقل التيار ويقل العزم، وإذا قلت السرعة تقل $\\mathcal{E}$ العكسية فيزداد التيار والعزم، مما يحافظ على سرعة ثابتة.",
    "stepByStepSolutionEn": [
      "If speed drops, back EMF decreases, so net voltage (V_B - E_back) rises, driving more current and increasing torque back to equilibrium.",
      "Therefore, the correct answer is: It regulates and stabilizes the rotational speed of the armature at a steady rate"
    ],
    "stepByStepSolutionAr": [
      "إذا زادت السرعة زادت $\\mathcal{E}$ العكسية فيقل التيار ويقل العزم، وإذا قلت السرعة تقل $\\mathcal{E}$ العكسية فيزداد التيار والعزم، مما يحافظ على سرعة ثابتة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تعمل على انتظام واستقرار سرعة دوران ملف المحرك عند معدل ثابت"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_12",
    "titleEn": "Exercise 12: Ratio of Effective to Average Half-Cycle EMF",
    "titleAr": "تمرين ١٢: النسبة بين القيمة الفعالة ومتوسط نصف الدورة للدينامو",
    "difficulty": "hots",
    "questionEn": "For an AC dynamo, what is the exact numerical ratio of the effective EMF to the average EMF over half a cycle starting from the zero position ($\\mathcal{E}_{\\text{eff}} / \\mathcal{E}_{\\text{avg}}$)?",
    "questionAr": "في دينامو التيار المتردد، ما هي النسبة العددية الدقيقة بين القيمة الفعالة للقوة الدافعة إلى القيمة المتوسطة خلال نصف دورة بدءاً من وضع الصفر؟",
    "optionsEn": [
      "$\\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$",
      "$\\frac{\\sqrt{2}}{\\pi} \\approx 0.45$",
      "$\\frac{\\pi}{\\sqrt{2}} \\approx 2.22$",
      "$1.00$"
    ],
    "optionsAr": [
      "$\\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$",
      "$\\frac{\\sqrt{2}}{\\pi} \\approx 0.45$",
      "$\\frac{\\pi}{\\sqrt{2}} \\approx 2.22$",
      "$1.00$"
    ],
    "correctAnswer": "$\\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$",
    "correctIndex": 0,
    "hintEn": "EMF_eff = EMF_max / sqrt(2) and EMF_avg = (2 / pi) * EMF_max. Ratio = (1 / sqrt(2)) / (2 / pi) = pi / (2 * sqrt(2)) = 1.11.",
    "hintAr": "$\\frac{\\mathcal{E}_{\\text{eff}}}{\\mathcal{E}_{\\text{avg}}} = \\frac{\\mathcal{E}_{\\max} / \\sqrt{2}}{2 \\mathcal{E}_{\\max} / \\pi} = \\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$ (معامل الشكل الموجي).",
    "stepByStepSolutionEn": [
      "EMF_eff = EMF_max / sqrt(2) and EMF_avg = (2 / pi) * EMF_max. Ratio = (1 / sqrt(2)) / (2 / pi) = pi / (2 * sqrt(2)) = 1.11.",
      "Therefore, the correct answer is: $\\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$"
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\mathcal{E}_{\\text{eff}}}{\\mathcal{E}_{\\text{avg}}} = \\frac{\\mathcal{E}_{\\max} / \\sqrt{2}}{2 \\mathcal{E}_{\\max} / \\pi} = \\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$ (معامل الشكل الموجي).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $\\frac{\\pi}{2\\sqrt{2}} \\approx 1.11$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_13",
    "titleEn": "Exercise 13: Non-Ideal Transformer Secondary Resistance Drop",
    "titleAr": "تمرين ١٣: الهبوط في الجهد عبر مقاومة أسلاك الملف الثانوي",
    "difficulty": "hots",
    "questionEn": "A transformer with efficiency $90\\%$ connects to a $200\\text{ V}$ AC supply with primary current $1\\text{ A}$. If the secondary terminal voltage under full load is $36\\text{ V}$, what is the secondary load current delivered?",
    "questionAr": "محول كهربي كفاءته $90\\%$ متصل بمصدر تيار متردد $200\\text{ فولت}$ ويسحب تياراً ابتدائياً $1\\text{ أمبير}$. فإذا كان فرق الجهد بين طرفي ملفه الثانوي تحت الحمل الكامل $36\\text{ فولت}$، فما هي شدة التيار المار في دائرة الملف الثانوي؟",
    "optionsEn": [
      "$5\\text{ A}$",
      "$4.5\\text{ A}$",
      "$5.55\\text{ A}$",
      "$4\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ أمبير}$",
      "$4.5\\text{ أمبير}$",
      "$5.55\\text{ أمبير}$",
      "$4\\text{ أمبير}$"
    ],
    "correctAnswer": "$5\\text{ A}$",
    "correctIndex": 0,
    "hintEn": "Secondary power = 0.90 * (200 * 1) = 180 W. Then I_s = P_s / V_s = 180 / 36 = 5 A.",
    "hintAr": "قدرة الثانوي: $P_s = 0.90 \\times (200 \\times 1) = 180\\text{ W}$. شدة تيار الثانوي: $I_s = \\frac{180}{36} = 5\\text{ A}$.",
    "stepByStepSolutionEn": [
      "Secondary power = 0.90 * (200 * 1) = 180 W. Then I_s = P_s / V_s = 180 / 36 = 5 A.",
      "Therefore, the correct answer is: $5\\text{ A}$"
    ],
    "stepByStepSolutionAr": [
      "قدرة الثانوي: $P_s = 0.90 \\times (200 \\times 1) = 180\\text{ W}$. شدة تيار الثانوي: $I_s = \\frac{180}{36} = 5\\text{ A}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $5\\text{ أمبير}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_14",
    "titleEn": "Exercise 14: Aircraft Wing Induced EMF in Earth's Magnetic Field",
    "titleAr": "تمرين ١٤: القوة الدافعة المستحثة عبر جناحي طائرة تحلق في المجال الأرضي",
    "difficulty": "hots",
    "questionEn": "An airplane with wingspan $L = 40\\text{ m}$ flies horizontally at $v = 250\\text{ m/s}$ in a region where the vertical component of Earth's magnetic field is $B_v = 4 \\times 10^{-5}\\text{ T}$. What potential difference is induced across its wingtips?",
    "questionAr": "طائرة المسافة بين طرفي جناحيها $40\\text{ م}$ تحلق أفقياً بسرعة $250\\text{ م/ث}$ في منطقة المركبة الرأسية للمجال المغناطيسي للأرض فيها $B_v = 4 \\times 10^{-5}\\text{ تسلا}$. ما فرق الجهد المستحث المتولد بين طرفي الجناحين؟",
    "optionsEn": [
      "$0.4\\text{ V}$",
      "$0.8\\text{ V}$",
      "$0.2\\text{ V}$",
      "$1.0\\text{ V}$"
    ],
    "optionsAr": [
      "$0.4\\text{ فولت}$",
      "$0.8\\text{ فولت}$",
      "$0.2\\text{ فولت}$",
      "$1.0\\text{ فولت}$"
    ],
    "correctAnswer": "$0.4\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "The horizontal wings cut the vertical component of the field: EMF = B_v * L * v = 4 * 10^-5 * 40 * 250 = 0.4 V.",
    "hintAr": "تقطع الأجنحة الأفقية المركبة الرأسية للمجال: $\\mathcal{E} = B_v L v = 4 \\times 10^{-5} \\times 40 \\times 250 = 0.4\\text{ V}$.",
    "stepByStepSolutionEn": [
      "The horizontal wings cut the vertical component of the field: EMF = B_v * L * v = 4 * 10^-5 * 40 * 250 = 0.4 V.",
      "Therefore, the correct answer is: $0.4\\text{ V}$"
    ],
    "stepByStepSolutionAr": [
      "تقطع الأجنحة الأفقية المركبة الرأسية للمجال: $\\mathcal{E} = B_v L v = 4 \\times 10^{-5} \\times 40 \\times 250 = 0.4\\text{ V}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0.4\\text{ فولت}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch3_ex_15",
    "titleEn": "Exercise 15: Steady Current in Multi-Coil Dynamo System",
    "titleAr": "تمرين ١٥: الحصول على تيار شبه ثابت الشدة باستخدام عدة ملفات",
    "difficulty": "hots",
    "questionEn": "How is an AC dynamo modified to produce an almost constant direct current (DC) in the external circuit?",
    "questionAr": "كيف يمكن تعديل دينامو التيار المتردد للحصول على تيار مستمر موحد الاتجاه وثابت الشدة تقريباً في الدائرة الخارجية؟",
    "optionsEn": [
      "Using multiple coils with small equal angles between them, and dividing the commutator cylinder into twice as many segments as coils",
      "Using a single coil rotating at extremely high frequency",
      "Connecting a high resistance in series with the external circuit",
      "Using curved pole pieces without a commutator"
    ],
    "optionsAr": [
      "استخدام عدة ملفات بين مستوياتها زوايا صغيرة متساوية وتقسيم أسطوانة المقوم إلى ضعف عدد الملفات",
      "استخدام ملف واحد يدور بتردد فائق السرعة",
      "توصيل مقاومة عيارية كبيرة على التوالي مع الدائرة الخارجية",
      "استخدام قطبين مقعرين للمغناطيس بدون مقوم أسطواني"
    ],
    "correctAnswer": "Using multiple coils with small equal angles between them, and dividing the commutator cylinder into twice as many segments as coils",
    "correctIndex": 0,
    "hintEn": "Multiple coils ensure one coil is always in the maximum EMF position (parallel to field), with its commutator segment contacting the brushes.",
    "hintAr": "استخدام عدة ملفات يضمن أن يكون أحد الملفات دائماً موازياً لخطوط الفيض (في وضع النهاية العظمى)، فيكون التيار الخارجي ثابتاً تقريباً.",
    "stepByStepSolutionEn": [
      "Multiple coils ensure one coil is always in the maximum EMF position (parallel to field), with its commutator segment contacting the brushes.",
      "Therefore, the correct answer is: Using multiple coils with small equal angles between them, and dividing the commutator cylinder into twice as many segments as coils"
    ],
    "stepByStepSolutionAr": [
      "استخدام عدة ملفات يضمن أن يكون أحد الملفات دائماً موازياً لخطوط الفيض (في وضع النهاية العظمى)، فيكون التيار الخارجي ثابتاً تقريباً.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: استخدام عدة ملفات بين مستوياتها زوايا صغيرة متساوية وتقسيم أسطوانة المقوم إلى ضعف عدد الملفات"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];
