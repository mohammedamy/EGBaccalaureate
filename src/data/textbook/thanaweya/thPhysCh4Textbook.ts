import type { SolvedProblem } from '../../../types/curriculum';

export const thPhysCh4SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_phys_ch4_se_01",
    "titleEn": "MoE Example 1: Inductive Reactance & Frequency Doubling",
    "titleAr": "مثال الوزارة ١: المفاعلة الحثية وأثر مضاعفة التردد",
    "difficulty": "easy",
    "questionEn": "A pure inductor of self-inductance $L = 0.07\\text{ H}$ is connected to an alternating voltage source of frequency $f = 50\\text{ Hz}$. Find its inductive reactance $X_L$, and determine what happens to $X_L$ if the source frequency is doubled. (Use $\\pi \\approx \\frac{22}{7}$)",
    "questionAr": "ملف حث مهمل المقاومة الأومية معامل حثه الذاتي $0.07\\text{ هنري}$ وُصل بمصدر تيار متردد تردده $50\\text{ هرتز}$. احسب مفاعلته الحثية $X_L$، وماذا يحدث لقيمتها إذا تضاعف تردد المصدر؟",
    "optionsEn": [
      "$X_L = 22\\,\\Omega$, and it doubles to $44\\,\\Omega$",
      "$X_L = 11\\,\\Omega$, and it doubles to $22\\,\\Omega$",
      "$X_L = 22\\,\\Omega$, and it halves to $11\\,\\Omega$",
      "$X_L = 44\\,\\Omega$, and it doubles to $88\\,\\Omega$"
    ],
    "optionsAr": [
      "$X_L = 22\\,\\Omega$، وتتضاعف إلى $44\\,\\Omega$",
      "$X_L = 11\\,\\Omega$، وتتضاعف إلى $22\\,\\Omega$",
      "$X_L = 22\\,\\Omega$، وتقل للنصف إلى $11\\,\\Omega$",
      "$X_L = 44\\,\\Omega$، وتتضاعف إلى $88\\,\\Omega$"
    ],
    "correctAnswer": "$X_L = 22\\,\\Omega$, and it doubles to $44\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance: XL = 2 * pi * f * L. XL is directly proportional to frequency.",
    "hintAr": "المفاعلة الحثية: $X_L = 2\\pi f L$. تتناسب $X_L$ طردياً مع التردد.",
    "stepByStepSolutionEn": [
      "Inductive reactance: XL = 2 * pi * f * L. XL is directly proportional to frequency.",
      "Therefore, the correct answer is: $X_L = 22\\,\\Omega$, and it doubles to $44\\,\\Omega$"
    ],
    "stepByStepSolutionAr": [
      "المفاعلة الحثية: $X_L = 2\\pi f L$. تتناسب $X_L$ طردياً مع التردد.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $X_L = 22\\,\\Omega$، وتتضاعف إلى $44\\,\\Omega$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_se_02",
    "titleEn": "MoE Example 2: Capacitive Reactance of an AC Capacitor",
    "titleAr": "مثال الوزارة ٢: المفاعلة السعوية لمكثف في دائرة تيار متردد",
    "difficulty": "easy",
    "questionEn": "A capacitor of capacitance $C = \\frac{7}{22} \\times 10^{-4}\\text{ F}$ is connected to an AC source of frequency $f = 50\\text{ Hz}$. Calculate its capacitive reactance $X_C$. (Use $\\pi \\approx \\frac{22}{7}$)",
    "questionAr": "مكثف سعته $C = \\frac{7}{22} \\times 10^{-4}\\text{ فاراد}$ وُصل بمصدر تيار متردد تردده $50\\text{ هرتز}$. احسب مفاعلته السعوية $X_C$.",
    "optionsEn": [
      "$10\\,\\Omega$",
      "$20\\,\\Omega$",
      "$5\\,\\Omega$",
      "$50\\,\\Omega$"
    ],
    "optionsAr": [
      "$10\\,\\Omega$",
      "$20\\,\\Omega$",
      "$5\\,\\Omega$",
      "$50\\,\\Omega$"
    ],
    "correctAnswer": "$10\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "XC = 1 / (2 * pi * f * C) = 1 / (2 * (22/7) * 50 * (7/22 * 10^-4)) = 1 / (100 * 10^-4) = 1 / 0.1 = 10 ohms.",
    "hintAr": "المفاعلة السعوية: $X_C = \\frac{1}{2\\pi f C} = 10\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "XC = 1 / (2 * pi * f * C) = 1 / (2 * (22/7) * 50 * (7/22 * 10^-4)) = 1 / (100 * 10^-4) = 1 / 0.1 = 10 ohms.",
      "Therefore, the correct answer is: $10\\,\\Omega$"
    ],
    "stepByStepSolutionAr": [
      "المفاعلة السعوية: $X_C = \\frac{1}{2\\pi f C} = 10\\,\\Omega$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $10\\,\\Omega$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_se_03",
    "titleEn": "MoE Example 3: RL Series Circuit Impedance & Phase Angle",
    "titleAr": "مثال الوزارة ٣: المعاوقة وزاوية الطور في دائرة RL على التوالي",
    "difficulty": "medium",
    "questionEn": "An AC series circuit consists of a resistor $R = 30\\,\\Omega$ and an inductive coil having $X_L = 40\\,\\Omega$ connected across a $V = 100\\text{ V}$ AC supply. Calculate the total circuit impedance $Z$, the circuit current $I$, and the phase angle $\\phi$.",
    "questionAr": "دائرة تيار متردد تتكون من مقاومة أومية $R = 30\\,\\Omega$ وملف حث مفاعلته $X_L = 40\\,\\Omega$ متصلين على التوالي بمصدر جهده $100\\text{ فولت}$. احسب المعاوقة الكلية $Z$، وشدة التيار $I$، وزاوية الطور $\\phi$.",
    "optionsEn": [
      "$Z = 50\\,\\Omega,\\, I = 2\\text{ A},\\, \\phi \\approx 53.13^\\circ$",
      "$Z = 70\\,\\Omega,\\, I = 1.43\\text{ A},\\, \\phi = 45^\\circ$",
      "$Z = 50\\,\\Omega,\\, I = 2\\text{ A},\\, \\phi \\approx 36.87^\\circ$",
      "$Z = 10\\,\\Omega,\\, I = 10\\text{ A},\\, \\phi = 90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega,\\, I = 2\\text{ A},\\, \\phi \\approx 53.13^\\circ$",
      "$Z = 70\\,\\Omega,\\, I = 1.43\\text{ A},\\, \\phi = 45^\\circ$",
      "$Z = 50\\,\\Omega,\\, I = 2\\text{ A},\\, \\phi \\approx 36.87^\\circ$",
      "$Z = 10\\,\\Omega,\\, I = 10\\text{ A},\\, \\phi = 90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega,\\, I = 2\\text{ A},\\, \\phi \\approx 53.13^\\circ$",
    "correctIndex": 0,
    "hintEn": "Z = sqrt(R^2 + XL^2) = sqrt(30^2 + 40^2) = 50 ohms. I = V / Z = 2 A. tan(phi) = XL / R = 40/30 = 4/3 => phi = 53.13 degrees.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + X_L^2} = 50\\,\\Omega$. التيار: $I = 100/50 = 2\\text{ A}$. زاوية الطور: $\\tan\\phi = \\frac{40}{30} \\implies \\phi = 53.13^\\circ$.",
    "stepByStepSolutionEn": [
      "Z = sqrt(R^2 + XL^2) = sqrt(30^2 + 40^2) = 50 ohms. I = V / Z = 2 A. tan(phi) = XL / R = 40/30 = 4/3 => phi = 53.13 degrees.",
      "Therefore, the correct answer is: $Z = 50\\,\\Omega,\\, I = 2\\text{ A},\\, \\phi \\approx 53.13^\\circ$"
    ],
    "stepByStepSolutionAr": [
      "المعاوقة: $Z = \\sqrt{R^2 + X_L^2} = 50\\,\\Omega$. التيار: $I = 100/50 = 2\\text{ A}$. زاوية الطور: $\\tan\\phi = \\frac{40}{30} \\implies \\phi = 53.13^\\circ$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $Z = 50\\,\\Omega,\\, I = 2\\text{ A},\\, \\phi \\approx 53.13^\\circ$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_se_04",
    "titleEn": "MoE Example 4: Vector Addition of Voltages in RC Circuit",
    "titleAr": "مثال الوزارة ٤: الجمع الاتجاهي لفروق الجهد في دائرة RC",
    "difficulty": "medium",
    "questionEn": "In an RC series circuit connected to an AC source, a voltmeter across the resistor reads $V_R = 60\\text{ V}$ and across the capacitor reads $V_C = 80\\text{ V}$. What is the total voltage $V$ of the AC source?",
    "questionAr": "في دائرة تيار متردد تحتوي على مقاومة ومكثف على التوالي، قرأ فولتميتر عبر المقاومة $V_R = 60\\text{ فولت}$ وقرأ فولتميتر عبر المكثف $V_C = 80\\text{ فولت}$. ما مقدار فرق الجهد الكلي لمصدر التيار المتردد؟",
    "optionsEn": [
      "$100\\text{ V}$",
      "$140\\text{ V}$",
      "$20\\text{ V}$",
      "$70\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ فولت}$",
      "$140\\text{ فولت}$",
      "$20\\text{ فولت}$",
      "$70\\text{ فولت}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "AC voltages across R and C are perpendicular in phase: V = sqrt(V_R^2 + V_C^2) = sqrt(60^2 + 80^2) = 100 V.",
    "hintAr": "فروق الجهد في التيار المتردد تُجمع اتجاهياً لتعامد الطور: $V = \\sqrt{V_R^2 + V_C^2} = \\sqrt{60^2 + 80^2} = 100\\text{ V}$.",
    "stepByStepSolutionEn": [
      "AC voltages across R and C are perpendicular in phase: V = sqrt(V_R^2 + V_C^2) = sqrt(60^2 + 80^2) = 100 V.",
      "Therefore, the correct answer is: $100\\text{ V}$"
    ],
    "stepByStepSolutionAr": [
      "فروق الجهد في التيار المتردد تُجمع اتجاهياً لتعامد الطور: $V = \\sqrt{V_R^2 + V_C^2} = \\sqrt{60^2 + 80^2} = 100\\text{ V}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $100\\text{ فولت}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_se_05",
    "titleEn": "MoE Example 5: RLC Series Circuit Full Analysis",
    "titleAr": "مثال الوزارة ٥: التحليل الشامل لدائرة RLC على التوالي",
    "difficulty": "medium",
    "questionEn": "An RLC series circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$, connected across $V = 200\\text{ V}$. Determine whether the circuit is inductive or capacitive, its impedance $Z$, and the active power dissipated.",
    "questionAr": "دائرة RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$ متصلة بمصدر $200\\text{ فولت}$. حدد الخواص الغالبة على الدائرة (حثية أم سعوية)، ومعاوقتها $Z$، والقدرة الفعالة المستهلكة.",
    "optionsEn": [
      "Inductive, $Z = 50\\,\\Omega$, $P = 640\\text{ W}$",
      "Capacitive, $Z = 50\\,\\Omega$, $P = 640\\text{ W}$",
      "Inductive, $Z = 70\\,\\Omega$, $P = 320\\text{ W}$",
      "Resonant, $Z = 40\\,\\Omega$, $P = 1000\\text{ W}$"
    ],
    "optionsAr": [
      "خواص حثية، $Z = 50\\,\\Omega$، والقدرة $P = 640\\text{ واط}$",
      "خواص سعوية، $Z = 50\\,\\Omega$، والقدرة $P = 640\\text{ واط}$",
      "خواص حثية، $Z = 70\\,\\Omega$، والقدرة $P = 320\\text{ واط}$",
      "حالة رنين، $Z = 40\\,\\Omega$، والقدرة $P = 1000\\text{ واط}$"
    ],
    "correctAnswer": "Inductive, $Z = 50\\,\\Omega$, $P = 640\\text{ W}$",
    "correctIndex": 0,
    "hintEn": "Since XL > XC (100 > 70), it is inductive. Net reactance X = 30 ohms. Z = sqrt(40^2 + 30^2) = 50 ohms. I = 200/50 = 4 A. Power is only dissipated in R: P = I^2 * R = 4^2 * 40 = 640 W.",
    "hintAr": "بما أن $X_L > X_C$ فالدائرة لها خواص حثية والجهد يسبق التيار. $Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$. $I = 4\\text{ A}$. القدرة تُستهلك فقط في المقاومة الأومية: $P = I^2 R = 16 \\times 40 = 640\\text{ W}$.",
    "stepByStepSolutionEn": [
      "Since XL > XC (100 > 70), it is inductive. Net reactance X = 30 ohms. Z = sqrt(40^2 + 30^2) = 50 ohms. I = 200/50 = 4 A. Power is only dissipated in R: P = I^2 * R = 4^2 * 40 = 640 W.",
      "Therefore, the correct answer is: Inductive, $Z = 50\\,\\Omega$, $P = 640\\text{ W}$"
    ],
    "stepByStepSolutionAr": [
      "بما أن $X_L > X_C$ فالدائرة لها خواص حثية والجهد يسبق التيار. $Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$. $I = 4\\text{ A}$. القدرة تُستهلك فقط في المقاومة الأومية: $P = I^2 R = 16 \\times 40 = 640\\text{ W}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: خواص حثية، $Z = 50\\,\\Omega$، والقدرة $P = 640\\text{ واط}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_se_06",
    "titleEn": "MoE Example 6: Resonant Frequency Calculation",
    "titleAr": "مثال الوزارة ٦: حساب تردد الرنين لدائرة RLC",
    "difficulty": "medium",
    "questionEn": "An RLC circuit has an induction coil of $L = \\frac{1}{\\pi^2}\\text{ H}$ and a capacitor of capacitance $C = 1\\,\\mu\\text{F}$. What is the resonant frequency $f_0$ of this circuit?",
    "questionAr": "دائرة RLC تحتوي على ملف حث معامل حثه الذاتي $L = \\frac{1}{\\pi^2}\\text{ هنري}$ ومكثف سعته $C = 1\\,\\mu\\text{F}$. ما هو تردد الرنين $f_0$ لهذه الدائرة؟",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$100\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ هرتز}$",
      "$250\\text{ هرتز}$",
      "$1000\\text{ هرتز}$",
      "$100\\text{ هرتز}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "Resonant frequency: f0 = 1 / (2 * pi * sqrt(L * C)). With L = 1/pi^2 and C = 10^-6: sqrt(LC) = 10^-3 / pi, so f0 = 1 / (2 * 10^-3) = 500 Hz.",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{1}{2\\pi \\times (10^{-3}/\\pi)} = 500\\text{ هرتز}$.",
    "stepByStepSolutionEn": [
      "Resonant frequency: f0 = 1 / (2 * pi * sqrt(L * C)). With L = 1/pi^2 and C = 10^-6: sqrt(LC) = 10^-3 / pi, so f0 = 1 / (2 * 10^-3) = 500 Hz.",
      "Therefore, the correct answer is: $500\\text{ Hz}$"
    ],
    "stepByStepSolutionAr": [
      "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}} = \\frac{1}{2\\pi \\times (10^{-3}/\\pi)} = 500\\text{ هرتز}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $500\\text{ هرتز}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_se_07",
    "titleEn": "MoE Example 7: Characteristics of Electrical Resonance State",
    "titleAr": "مثال الوزارة ٧: خصائص حالة الرنين في دائرة التيار المتردد",
    "difficulty": "medium",
    "questionEn": "When an RLC circuit is in the state of electrical resonance, which of the following conditions is strictly satisfied?",
    "questionAr": "عندما تكون دائرة RLC في حالة رنين كهربي، أي الشروط الآتية يتحقق بدقة؟",
    "optionsEn": [
      "The total impedance equals the ohmic resistance ($Z = R$), and current is maximum and in phase with voltage",
      "The capacitive reactance is greater than the inductive reactance",
      "The total impedance is infinite and current is zero",
      "The phase angle between total voltage and current is $90^\\circ$"
    ],
    "optionsAr": [
      "تكون المعاوقة الكلية أقل ما يمكن وتساوي المقاومة الأومية ($Z = R$)، وشدة التيار نهاية عظمى ومتفقة في الطور مع الجهد",
      "تكون المفاعلة السعوية أكبر من المفاعلة الحثية",
      "تكون المعاوقة لا نهائية وينعدم التيار في الدائرة",
      "تكون زاوية الطور بين الجهد الكلي والتيار $90^\\circ$"
    ],
    "correctAnswer": "The total impedance equals the ohmic resistance ($Z = R$), and current is maximum and in phase with voltage",
    "correctIndex": 0,
    "hintEn": "At resonance: XL = XC, Z_min = R, I_max = V/R, phi = 0.",
    "hintAr": "في حالة الرنين: $X_L = X_C$، فتلغي كل منهما الأخرى، وتصبح المعاوقة أقل ما يمكن $Z = R$ والتيار نهاية عظمى وزاوية الطور صفراً.",
    "stepByStepSolutionEn": [
      "At resonance: XL = XC, Z_min = R, I_max = V/R, phi = 0.",
      "Therefore, the correct answer is: The total impedance equals the ohmic resistance ($Z = R$), and current is maximum and in phase with voltage"
    ],
    "stepByStepSolutionAr": [
      "في حالة الرنين: $X_L = X_C$، فتلغي كل منهما الأخرى، وتصبح المعاوقة أقل ما يمكن $Z = R$ والتيار نهاية عظمى وزاوية الطور صفراً.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تكون المعاوقة الكلية أقل ما يمكن وتساوي المقاومة الأومية ($Z = R$)، وشدة التيار نهاية عظمى ومتفقة في الطور مع الجهد"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_se_08",
    "titleEn": "MoE Example 8: Hot-Wire Ammeter Non-Linear Scale",
    "titleAr": "مثال الوزارة ٨: عدم انتظام تدريج الأميتر الحراري",
    "difficulty": "hots",
    "questionEn": "In a hot-wire ammeter, when a current $I$ passes, the pointer deflects by an angle $\\theta_1$. If the current is increased to $3I$, what will be the new deflection angle $\\theta_2$?",
    "questionAr": "في الأميتر الحراري، عندما يمر تيار $I$ ينحرف المؤشر بزاوية $\\theta_1$. فإذا زادت شدة التيار إلى $3I$، فما قيمة زاوية الانحراف الجديدة $\\theta_2$؟",
    "optionsEn": [
      "$9 \\theta_1$",
      "$3 \\theta_1$",
      "$6 \\theta_1$",
      "$\\sqrt{3} \\theta_1$"
    ],
    "optionsAr": [
      "$9 \\theta_1$",
      "$3 \\theta_1$",
      "$6 \\theta_1$",
      "$\\sqrt{3} \\theta_1$"
    ],
    "correctAnswer": "$9 \\theta_1$",
    "correctIndex": 0,
    "hintEn": "Thermal energy generated per second is proportional to I^2. Thus pointer deflection angle is proportional to I^2: theta2 = 3^2 * theta1 = 9 theta1.",
    "hintAr": "كمية الحرارة المتولدة في الثانية تتناسب طردياً مع مربع شدة التيار ($Q \\propto I^2$)، فتكون زاوية الانحراف $\\theta \\propto I^2$ وتزداد إلى $9\\theta_1$.",
    "stepByStepSolutionEn": [
      "Thermal energy generated per second is proportional to I^2. Thus pointer deflection angle is proportional to I^2: theta2 = 3^2 * theta1 = 9 theta1.",
      "Therefore, the correct answer is: $9 \\theta_1$"
    ],
    "stepByStepSolutionAr": [
      "كمية الحرارة المتولدة في الثانية تتناسب طردياً مع مربع شدة التيار ($Q \\propto I^2$)، فتكون زاوية الانحراف $\\theta \\propto I^2$ وتزداد إلى $9\\theta_1$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $9 \\theta_1$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_se_09",
    "titleEn": "MoE Example 9: Current Independence from Frequency in Pure Inductor Connected to Dynamo",
    "titleAr": "مثال الوزارة ٩: ثبوت شدة تيار ملف نقي متصل بدينامو عند تغيير التردد",
    "difficulty": "hots",
    "questionEn": "An AC dynamo with negligible internal resistance is connected to a pure inductive coil ($R = 0$). If the rotational frequency of the dynamo armature is doubled, how does the maximum current in the circuit change?",
    "questionAr": "دينامو تيار متردد مهمل المقاومة الداخلية متصل بملف حث نقي عديم المقاومة الأومية. إذا تضاعف تردد دوران ملف الدينامو، فكيف تتغير القيمة العظمى لشدة التيار في الدائرة؟",
    "optionsEn": [
      "Remains constant (unchanged)",
      "Doubles",
      "Quadruples",
      "Halves"
    ],
    "optionsAr": [
      "تظل ثابتة دون تغيير",
      "تتضاعف",
      "تزداد إلى أربعة أمثالها",
      "تقل إلى النصف"
    ],
    "correctAnswer": "Remains constant (unchanged)",
    "correctIndex": 0,
    "hintEn": "I_max = V_max / XL = (2 * pi * f * N * B * A) / (2 * pi * f * L) = (N * B * A) / L, which is completely independent of frequency f.",
    "hintAr": "$I_{\\max} = \\frac{V_{\\max}}{X_L} = \\frac{2\\pi f NBA}{2\\pi f L} = \\frac{NBA}{L}$، وهو مقدار ثابت لا يعتمد على التردد لأن زيادة الجهد يُعادلها تماماً زيادة المفاعلة الحثية.",
    "stepByStepSolutionEn": [
      "I_max = V_max / XL = (2 * pi * f * N * B * A) / (2 * pi * f * L) = (N * B * A) / L, which is completely independent of frequency f.",
      "Therefore, the correct answer is: Remains constant (unchanged)"
    ],
    "stepByStepSolutionAr": [
      "$I_{\\max} = \\frac{V_{\\max}}{X_L} = \\frac{2\\pi f NBA}{2\\pi f L} = \\frac{NBA}{L}$، وهو مقدار ثابت لا يعتمد على التردد لأن زيادة الجهد يُعادلها تماماً زيادة المفاعلة الحثية.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تظل ثابتة دون تغيير"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_se_10",
    "titleEn": "MoE Example 10: Damped Oscillations in LC Oscillating Circuit",
    "titleAr": "مثال الوزارة ١٠: الاهتزازات المضمحلة في الدائرة المهتزة",
    "difficulty": "hots",
    "questionEn": "In an LC tank oscillating circuit, why do electromagnetic oscillations gradually decay and die out over time unless energy is continuously supplied?",
    "questionAr": "في الدائرة المهتزة، لماذا تضمحل الشحنة وتتلاشى التذبذبات الكهرومغناطيسية تدريجياً بمرور الوقت إذا لم يتم تغذيتها بالطاقة دورياً؟",
    "optionsEn": [
      "Because part of the energy is continuously dissipated as heat due to the unavoidable ohmic resistance of connecting wires and the coil",
      "Because the capacitor loses its charge through dielectric radiation breakdown",
      "Because self-inductance decreases continuously with time",
      "Because magnetic flux escapes into surrounding space"
    ],
    "optionsAr": [
      "لأن جزءاً من الطاقة يتحول باستمرار إلى طاقة حرارية مستهلكة في المقاومة الأومية لأسلاك الدائرة وملف الحث",
      "لأن المكثف يفقد شحنته عبر الانهيار العازل للإشعاع",
      "لأن الحث الذاتي للملف يتناقص باستمرار مع مرور الزمن",
      "بسبب تسرب الفيض المغناطيسي بالكامل إلى الوسط الخارجي"
    ],
    "correctAnswer": "Because part of the energy is continuously dissipated as heat due to the unavoidable ohmic resistance of connecting wires and the coil",
    "correctIndex": 0,
    "hintEn": "Energy is lost as I^2 * R heating in every oscillation cycle, resulting in damped harmonic oscillations.",
    "hintAr": "يتحول جزء من الطاقة الكهربية والمغناطيسية في كل دورة إلى حرارة في أسلاك التوصيل بفعل المقاومة الأومية ($I^2 R$).",
    "stepByStepSolutionEn": [
      "Energy is lost as I^2 * R heating in every oscillation cycle, resulting in damped harmonic oscillations.",
      "Therefore, the correct answer is: Because part of the energy is continuously dissipated as heat due to the unavoidable ohmic resistance of connecting wires and the coil"
    ],
    "stepByStepSolutionAr": [
      "يتحول جزء من الطاقة الكهربية والمغناطيسية في كل دورة إلى حرارة في أسلاك التوصيل بفعل المقاومة الأومية ($I^2 R$).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن جزءاً من الطاقة يتحول باستمرار إلى طاقة حرارية مستهلكة في المقاومة الأومية لأسلاك الدائرة وملف الحث"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];

export const thPhysCh4Exercises: SolvedProblem[] = [
  {
    "id": "th_phys_ch4_ex_01",
    "titleEn": "Exercise 1: Phase Relationship in Pure Ohmic Resistor",
    "titleAr": "تمرين ١: العلاقة الطورية في مقاومة أومية عديمة الحث",
    "difficulty": "easy",
    "questionEn": "When alternating current flows through a pure ohmic resistor, what is the phase relationship between current and potential difference?",
    "questionAr": "عند مرور تيار متردد في مقاومة أومية عديمة الحث، ما هي العلاقة الطورية بين شدة التيار وفرق الجهد؟",
    "optionsEn": [
      "Current and voltage are in phase (phase difference is zero)",
      "Voltage leads current by $90^\\circ$",
      "Current leads voltage by $90^\\circ$",
      "Current and voltage are in antiphase ($180^\\circ$ difference)"
    ],
    "optionsAr": [
      "يتفق الجهد والتيار في الطور (فرق الطور يساوي صفراً)",
      "يتقدم الجهد على التيار في الطور بزاوية $90^\\circ$",
      "يتقدم التيار على الجهد في الطور بزاوية $90^\\circ$",
      "يتعاكسان في الطور بفرق طور قدره $180^\\circ$"
    ],
    "correctAnswer": "Current and voltage are in phase (phase difference is zero)",
    "correctIndex": 0,
    "hintEn": "In a pure resistor, V and I reach maximum and zero values simultaneously (phi = 0).",
    "hintAr": "في المقاومة الأومية يتفق الجهد والتيار في الطور ويصلان إلى الصفر والنهاية العظمى معاً.",
    "stepByStepSolutionEn": [
      "In a pure resistor, V and I reach maximum and zero values simultaneously (phi = 0).",
      "Therefore, the correct answer is: Current and voltage are in phase (phase difference is zero)"
    ],
    "stepByStepSolutionAr": [
      "في المقاومة الأومية يتفق الجهد والتيار في الطور ويصلان إلى الصفر والنهاية العظمى معاً.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: يتفق الجهد والتيار في الطور (فرق الطور يساوي صفراً)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_02",
    "titleEn": "Exercise 2: Phase in Pure Inductor",
    "titleAr": "تمرين ٢: تقدم الجهد على التيار في ملف حث نقي",
    "difficulty": "easy",
    "questionEn": "In an alternating current circuit containing only a pure inductor with zero resistance, the potential difference:",
    "questionAr": "في دائرة تيار متردد تحتوي على ملف حث نقي مهمل المقاومة الأومية، فإن فرق الجهد:",
    "optionsEn": [
      "Leads current by a phase angle of $90^\\circ$ ($\\pi/2$)",
      "Lags current by a phase angle of $90^\\circ$ ($\\pi/2$)",
      "Is in phase with current",
      "Leads current by $180^\\circ$"
    ],
    "optionsAr": [
      "يتقدم على التيار في الطور بزاوية قدرها $90^\\circ$ ($\\pi/2$)",
      "يتأخر عن التيار في الطور بزاوية قدرها $90^\\circ$ ($\\pi/2$)",
      "يتفق مع التيار في الطور تماماً",
      "يتقدم على التيار بزاوية $180^\\circ$"
    ],
    "correctAnswer": "Leads current by a phase angle of $90^\\circ$ ($\\pi/2$)",
    "correctIndex": 0,
    "hintEn": "In a pure inductor, back EMF opposes current rise, so voltage reaches its maximum a quarter-cycle ahead of current.",
    "hintAr": "في ملف الحث يتولد جهد مستحث عكسي يؤخر نمو التيار، فيسبق فرق الجهد التيار بربع دورة ($90^\\circ$).",
    "stepByStepSolutionEn": [
      "In a pure inductor, back EMF opposes current rise, so voltage reaches its maximum a quarter-cycle ahead of current.",
      "Therefore, the correct answer is: Leads current by a phase angle of $90^\\circ$ ($\\pi/2$)"
    ],
    "stepByStepSolutionAr": [
      "في ملف الحث يتولد جهد مستحث عكسي يؤخر نمو التيار، فيسبق فرق الجهد التيار بربع دورة ($90^\\circ$).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: يتقدم على التيار في الطور بزاوية قدرها $90^\\circ$ ($\\pi/2$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_03",
    "titleEn": "Exercise 3: Phase in Pure Capacitor",
    "titleAr": "تمرين ٣: تقدم التيار على الجهد في مكثف",
    "difficulty": "easy",
    "questionEn": "In an AC circuit containing only an ideal capacitor, the electric current:",
    "questionAr": "في دائرة تيار متردد تحتوي على مكثف مثالي فقط، فإن شدة التيار الكهربي:",
    "optionsEn": [
      "Leads potential difference by a phase angle of $90^\\circ$",
      "Lags potential difference by a phase angle of $90^\\circ$",
      "Is in phase with potential difference",
      "Lags potential difference by $45^\\circ$"
    ],
    "optionsAr": [
      "تتقدم على فرق الجهد في الطور بزاوية قدرها $90^\\circ$",
      "تتأخر عن فرق الجهد في الطور بزاوية قدرها $90^\\circ$",
      "تتفق مع فرق الجهد في الطور",
      "تتأخر عن فرق الجهد بزاوية $45^\\circ$"
    ],
    "correctAnswer": "Leads potential difference by a phase angle of $90^\\circ$",
    "correctIndex": 0,
    "hintEn": "Current flows to charge the plates before potential difference can build up across them, so I leads V by 90 degrees.",
    "hintAr": "يمر التيار أولاً لشحن اللوحين قبل أن ينشأ فرق الجهد بينهما، لذا يسبق التيار الجهد بربع دورة ($90^\\circ$).",
    "stepByStepSolutionEn": [
      "Current flows to charge the plates before potential difference can build up across them, so I leads V by 90 degrees.",
      "Therefore, the correct answer is: Leads potential difference by a phase angle of $90^\\circ$"
    ],
    "stepByStepSolutionAr": [
      "يمر التيار أولاً لشحن اللوحين قبل أن ينشأ فرق الجهد بينهما، لذا يسبق التيار الجهد بربع دورة ($90^\\circ$).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تتقدم على فرق الجهد في الطور بزاوية قدرها $90^\\circ$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_04",
    "titleEn": "Exercise 4: Frequency quadrupled in pure capacitor connected to dynamo",
    "titleAr": "تمرين ٤: أثر زيادة تردد الدينامو على تيار مكثف",
    "difficulty": "medium",
    "questionEn": "An AC dynamo is connected to a capacitor of constant capacitance. If the rotation frequency of the dynamo is doubled, how does the maximum current in the circuit change?",
    "questionAr": "دينامو تيار متردد وُصل بمكثف ثابت السعة. إذا تضاعف تردد دوران الدينامو، فكيف تتغير القيمة العظمى لشدة التيار في الدائرة؟",
    "optionsEn": [
      "Increases to four times its original value ($4I_{\\max}$)",
      "Doubles ($2I_{\\max}$)",
      "Remains constant",
      "Halves"
    ],
    "optionsAr": [
      "تزداد إلى أربعة أمثالها ($4I_{\\max}$)",
      "تتضاعف ($2I_{\\max}$)",
      "تظل ثابتة",
      "تقل للنصف"
    ],
    "correctAnswer": "Increases to four times its original value ($4I_{\\max}$)",
    "correctIndex": 0,
    "hintEn": "I_max = V_max / X_C = (V_max) * (2 * pi * f * C). Since V_max is proportional to f, I_max is proportional to f^2. Doubling f quadruples I_max.",
    "hintAr": "$I_{\\max} = \\frac{V_{\\max}}{X_C} = (2\\pi f NBA) \\times (2\\pi f C) \\propto f^2$. بمضاعفة التردد، يزداد التيار إلى 4 أمثاله.",
    "stepByStepSolutionEn": [
      "I_max = V_max / X_C = (V_max) * (2 * pi * f * C). Since V_max is proportional to f, I_max is proportional to f^2. Doubling f quadruples I_max.",
      "Therefore, the correct answer is: Increases to four times its original value ($4I_{\\max}$)"
    ],
    "stepByStepSolutionAr": [
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} = (2\\pi f NBA) \\times (2\\pi f C) \\propto f^2$. بمضاعفة التردد، يزداد التيار إلى 4 أمثاله.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تزداد إلى أربعة أمثالها ($4I_{\\max}$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_05",
    "titleEn": "Exercise 5: Direct Current (DC) Blocks Capacitor",
    "titleAr": "تمرين ٥: سلوك المكثف عند توصيله ببطارية تيار مستمر",
    "difficulty": "easy",
    "questionEn": "Why does an electric capacitor completely block direct current (DC) after a very brief initial moment?",
    "questionAr": "علل: يمنع المكثف مرور التيار المستمر في الدائرة بعد لحظة وجيزة من غلقها؟",
    "optionsEn": [
      "Because when fully charged, the potential difference across its plates equals the battery EMF and opposes it",
      "Because the capacitance drops to zero when connected to DC",
      "Because dielectric breakdown always occurs with DC sources",
      "Because direct current has an infinite frequency"
    ],
    "optionsAr": [
      "لأنه عندما يتم شحن المكثف تماماً يتساوى فرق الجهد بين لوحيه مع القوة الدافعة للبطارية ويعاكسها فينعدم التيار",
      "لأن سعة المكثف تنعدم عند توصيله بالتيار المستمر",
      "لحدوث انهيار دائم للعازل بين لوحي المكثف",
      "لأن تردد التيار المستمر لا نهائي"
    ],
    "correctAnswer": "Because when fully charged, the potential difference across its plates equals the battery EMF and opposes it",
    "correctIndex": 0,
    "hintEn": "When Q = C * V_B, net driving voltage is zero and current ceases (or XC = 1 / (2*pi*0*C) = infinity).",
    "hintAr": "لأن $X_C = \\frac{1}{2\\pi f C} = \\infty$ لثبوت تردد المستمر ($f = 0$)، فيتشبع المكثف بالشحنة ويتوقف سريان التيار.",
    "stepByStepSolutionEn": [
      "When Q = C * V_B, net driving voltage is zero and current ceases (or XC = 1 / (2*pi*0*C) = infinity).",
      "Therefore, the correct answer is: Because when fully charged, the potential difference across its plates equals the battery EMF and opposes it"
    ],
    "stepByStepSolutionAr": [
      "لأن $X_C = \\frac{1}{2\\pi f C} = \\infty$ لثبوت تردد المستمر ($f = 0$)، فيتشبع المكثف بالشحنة ويتوقف سريان التيار.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأنه عندما يتم شحن المكثف تماماً يتساوى فرق الجهد بين لوحيه مع القوة الدافعة للبطارية ويعاكسها فينعدم التيار"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_06",
    "titleEn": "Exercise 6: Platinum-Iridium Wire in Hot-Wire Ammeter",
    "titleAr": "تمرين ٦: سبب استخدام سلك من البلاتين والإيريديوم في الأميتر الحراري",
    "difficulty": "medium",
    "questionEn": "Why is the stretched thermal wire in a hot-wire ammeter made specifically of a platinum-iridium alloy?",
    "questionAr": "علل: يُصنع السلك المتمدد في الأميتر الحراري تحديداً من سبيكة البلاتين والإيريديوم؟",
    "optionsEn": [
      "Because it has a noticeable and sensitive thermal expansion upon small temperature increases",
      "Because its electrical resistance is strictly zero at all temperatures",
      "Because it is strongly ferromagnetic and attracted by magnets",
      "Because it prevents any heat transfer to the surrounding air"
    ],
    "optionsAr": [
      "لأنها تتمدد بالحرارة بمقدار محسوس وملحوظ ويمكن قياسه بدقة عند ارتفاع درجات الحرارة",
      "لأن مقاومتها الأومية منعدمة تماماً عند جميع درجات الحرارة",
      "لأنها مادة فيرومغناطيسية تنجذب للمجالات المغناطيسية",
      "لأنها تمنع انتقال الحرارة للهواء المحيط تماماً"
    ],
    "correctAnswer": "Because it has a noticeable and sensitive thermal expansion upon small temperature increases",
    "correctIndex": 0,
    "hintEn": "Platinum-iridium has a uniform, high coefficient of thermal expansion that provides detectable elongation.",
    "hintAr": "سبيكة البلاتين والإيريديوم تتميز بالتمدد المحسوس عند مرور التيارات الكهربية وتوليد الطاقة الحرارية.",
    "stepByStepSolutionEn": [
      "Platinum-iridium has a uniform, high coefficient of thermal expansion that provides detectable elongation.",
      "Therefore, the correct answer is: Because it has a noticeable and sensitive thermal expansion upon small temperature increases"
    ],
    "stepByStepSolutionAr": [
      "سبيكة البلاتين والإيريديوم تتميز بالتمدد المحسوس عند مرور التيارات الكهربية وتوليد الطاقة الحرارية.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأنها تتمدد بالحرارة بمقدار محسوس وملحوظ ويمكن قياسه بدقة عند ارتفاع درجات الحرارة"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_07",
    "titleEn": "Exercise 7: Shunt in Hot-Wire Ammeter",
    "titleAr": "تمرين ٧: وظيفة مجزئ التيار في الأميتر الحراري",
    "difficulty": "medium",
    "questionEn": "What is the primary role of the shunt resistor connected in parallel with the hot wire in an ammeter?",
    "questionAr": "ما الوظيفة الأساسية لمقاومة مجزئ التيار المتصلة على التوازي مع السلك الساخن في الأميتر الحراري؟",
    "optionsEn": [
      "To protect the delicate platinum-iridium wire from fusing and increase the measurable current range",
      "To eliminate the zero error caused by room temperature variations",
      "To make the scale divisions completely uniform",
      "To convert the device into an ohmmeter"
    ],
    "optionsAr": [
      "حماية سلك البلاتين والإيريديوم الرفيع من الانصهار وزيادة مدى قياس شدة التيار",
      "إلغاء الخطأ الصفري الناتج عن تغير حرارة الجو",
      "جعل تدريج الجهاز منتظماً تماماً",
      "تحويل الجهاز إلى أوميتر لقياس المقاومات"
    ],
    "correctAnswer": "To protect the delicate platinum-iridium wire from fusing and increase the measurable current range",
    "correctIndex": 0,
    "hintEn": "The shunt carries the bulk of large currents, preventing overheating of the fine wire and extending full-scale range.",
    "hintAr": "يمر عبر مجزئ التيار الجزء الأكبر من التيار، فيحمي السلك من الانصهار ويتيح قياس تيارات عالية الشدة.",
    "stepByStepSolutionEn": [
      "The shunt carries the bulk of large currents, preventing overheating of the fine wire and extending full-scale range.",
      "Therefore, the correct answer is: To protect the delicate platinum-iridium wire from fusing and increase the measurable current range"
    ],
    "stepByStepSolutionAr": [
      "يمر عبر مجزئ التيار الجزء الأكبر من التيار، فيحمي السلك من الانصهار ويتيح قياس تيارات عالية الشدة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: حماية سلك البلاتين والإيريديوم الرفيع من الانصهار وزيادة مدى قياس شدة التيار"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_08",
    "titleEn": "Exercise 8: Resonant Circuit Impedance at Variable Frequency",
    "titleAr": "تمرين ٨: منحنى المعاوقة والتردد في دائرة الرنين",
    "difficulty": "medium",
    "questionEn": "In an RLC series circuit, as the source frequency is gradually increased from zero to above the resonance frequency, how does the circuit impedance $Z$ behave?",
    "questionAr": "في دائرة RLC على التوالي، عند زيادة تردد المصدر تدريجياً من الصفر إلى ما بعد تردد الرنين، كيف تتغير معاوقة الدائرة $Z$؟",
    "optionsEn": [
      "It decreases until it reaches a minimum ($Z = R$) at resonance, then increases continuously",
      "It increases continuously from zero to infinity",
      "It remains constant and equal to R throughout",
      "It starts at a maximum and drops to zero at resonance"
    ],
    "optionsAr": [
      "تتناقص حتى تصل إلى أقل قيمة لها ($Z = R$) عند تردد الرنين، ثم تتزايد بعد ذلك باستمرار",
      "تتزايد باستمرار من الصفر إلى ما لا نهاية",
      "تظل ثابتة وتساوي المقاومة الأومية عند جميع الترددات",
      "تبدأ من قيمة عظمى وتصل إلى الصفر تماماً عند الرنين"
    ],
    "correctAnswer": "It decreases until it reaches a minimum ($Z = R$) at resonance, then increases continuously",
    "correctIndex": 0,
    "hintEn": "At low frequencies XC is dominant and huge. At resonance XL = XC and Z = R is minimal. At high frequencies XL dominates and rises.",
    "hintAr": "عند الترددات المنخفضة تسود $X_C$ الضخمة، وعند الرنين تتلاشى المفاعلة وتصل المعاوقة لأقل قيمة ($Z = R$)، ثم تسود $X_L$ وتزداد المعاوقة.",
    "stepByStepSolutionEn": [
      "At low frequencies XC is dominant and huge. At resonance XL = XC and Z = R is minimal. At high frequencies XL dominates and rises.",
      "Therefore, the correct answer is: It decreases until it reaches a minimum ($Z = R$) at resonance, then increases continuously"
    ],
    "stepByStepSolutionAr": [
      "عند الترددات المنخفضة تسود $X_C$ الضخمة، وعند الرنين تتلاشى المفاعلة وتصل المعاوقة لأقل قيمة ($Z = R$)، ثم تسود $X_L$ وتزداد المعاوقة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تتناقص حتى تصل إلى أقل قيمة لها ($Z = R$) عند تردد الرنين، ثم تتزايد بعد ذلك باستمرار"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_09",
    "titleEn": "Exercise 9: Effect of Doubling L and C on Resonant Frequency",
    "titleAr": "تمرين ٩: أثر مضاعفة سعة المكثف وحث الملف على تردد الرنين",
    "difficulty": "medium",
    "questionEn": "If the self-inductance $L$ of the coil and the capacitance $C$ of the capacitor in an RLC resonant circuit are both doubled, the resonant frequency becomes:",
    "questionAr": "إذا تضاعف معامل الحث الذاتي للملف وتضاعفت سعة المكثف في دائرة رنين، فإن تردد الرنين يصبح:",
    "optionsEn": [
      "Half its original value ($f_0 / 2$)",
      "One fourth of its original value ($f_0 / 4$)",
      "Twice its original value ($2 f_0$)",
      "Unchanged"
    ],
    "optionsAr": [
      "نصف قيمته الأصلية ($f_0 / 2$)",
      "ربع قيمته الأصلية ($f_0 / 4$)",
      "ضعف قيمته الأصلية ($2 f_0$)",
      "لا يتغير"
    ],
    "correctAnswer": "Half its original value ($f_0 / 2$)",
    "correctIndex": 0,
    "hintEn": "f0 = 1 / (2 * pi * sqrt(L * C)). Doubling both makes the denominator sqrt(2L * 2C) = 2 sqrt(LC), so f0 is halved.",
    "hintAr": "$f_0 \\propto \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{2 \\times 2}} = \\frac{1}{2}$ من قيمته الأصلية.",
    "stepByStepSolutionEn": [
      "f0 = 1 / (2 * pi * sqrt(L * C)). Doubling both makes the denominator sqrt(2L * 2C) = 2 sqrt(LC), so f0 is halved.",
      "Therefore, the correct answer is: Half its original value ($f_0 / 2$)"
    ],
    "stepByStepSolutionAr": [
      "$f_0 \\propto \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{2 \\times 2}} = \\frac{1}{2}$ من قيمته الأصلية.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: نصف قيمته الأصلية ($f_0 / 2$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_10",
    "titleEn": "Exercise 10: Equal Reactances in Series Circuit",
    "titleAr": "تمرين ١٠: تساوي المفاعلة الحثية والسعوية في دائرة RLC",
    "difficulty": "medium",
    "questionEn": "In an RLC series circuit, $R = 25\\,\\Omega$, $X_L = 60\\,\\Omega$, and $X_C = 60\\,\\Omega$. What is the phase angle between the total voltage and the current?",
    "questionAr": "في دائرة RLC متصلة على التوالي، $R = 25\\,\\Omega$ و $X_L = 60\\,\\Omega$ و $X_C = 60\\,\\Omega$. ما هي زاوية الطور بين الجهد الكلي والتيار؟",
    "optionsEn": [
      "$0^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$",
      "$-90^\\circ$"
    ],
    "optionsAr": [
      "$0^\\circ$",
      "$45^\\circ$",
      "$90^\\circ$",
      "$-90^\\circ$"
    ],
    "correctAnswer": "$0^\\circ$",
    "correctIndex": 0,
    "hintEn": "tan(phi) = (XL - XC) / R = (60 - 60) / 25 = 0 => phi = 0 degrees (Resonance).",
    "hintAr": "$\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{0}{25} = 0 \\implies \\phi = 0^\\circ$.",
    "stepByStepSolutionEn": [
      "tan(phi) = (XL - XC) / R = (60 - 60) / 25 = 0 => phi = 0 degrees (Resonance).",
      "Therefore, the correct answer is: $0^\\circ$"
    ],
    "stepByStepSolutionAr": [
      "$\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{0}{25} = 0 \\implies \\phi = 0^\\circ$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $0^\\circ$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_11",
    "titleEn": "Exercise 11: Zero Error in Hot-Wire Ammeter",
    "titleAr": "تمرين ١١: علاج الخطأ الصفري في الأميتر الحراري",
    "difficulty": "hots",
    "questionEn": "How is the zero error (pointer drifting from zero due to atmospheric weather temperature changes) overcome in a hot-wire ammeter?",
    "questionAr": "كيف يتم التغلب على الخطأ الصفري (تأثر المؤشر بتغير درجة حرارة الجو) في الأميتر الحراري؟",
    "optionsEn": [
      "By mounting the platinum-iridium wire on a metal plate made of the same thermal expansion coefficient, insulated from it",
      "By using a permanent horseshoe magnet",
      "By connecting an additional variable rheostat in series",
      "By filling the instrument case with insulating oil"
    ],
    "optionsAr": [
      "بشد سلك البلاتين والإيريديوم على لوحة لها نفس معامل تمدده الحراري مع عزله عنها",
      "باستخدام مغناطيس دائم على شكل حذاء فرس",
      "بتوصيل مقاومة عيارية متغيرة على التوالي",
      "بملء هيكل الجهاز بزيت عازل للحرارة"
    ],
    "correctAnswer": "By mounting the platinum-iridium wire on a metal plate made of the same thermal expansion coefficient, insulated from it",
    "correctIndex": 0,
    "hintEn": "When ambient temperature changes, both plate and wire expand equally, keeping the wire taut and the pointer at zero.",
    "hintAr": "تثبيت السلك على لوحة لها نفس معامل تمدده يجعل اللوحة تتمدد بنفس مقدار تمدد السلك عند تغير حرارة الجو فيظل مشدوداً عند الصفر.",
    "stepByStepSolutionEn": [
      "When ambient temperature changes, both plate and wire expand equally, keeping the wire taut and the pointer at zero.",
      "Therefore, the correct answer is: By mounting the platinum-iridium wire on a metal plate made of the same thermal expansion coefficient, insulated from it"
    ],
    "stepByStepSolutionAr": [
      "تثبيت السلك على لوحة لها نفس معامل تمدده يجعل اللوحة تتمدد بنفس مقدار تمدد السلك عند تغير حرارة الجو فيظل مشدوداً عند الصفر.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: بشد سلك البلاتين والإيريديوم على لوحة لها نفس معامل تمدده الحراري مع عزله عنها"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_12",
    "titleEn": "Exercise 12: Voltage Across Inductor in Resonance",
    "titleAr": "تمرين ١٢: فرق الجهد عبر الملف في دائرة رنين مقارنة بجهد المصدر",
    "difficulty": "hots",
    "questionEn": "In a series RLC resonant circuit connected to an AC source of $V = 10\\text{ V}$, $R = 5\\,\\Omega$ and $X_L = X_C = 50\\,\\Omega$. What is the potential difference across the coil alone ($V_L$)?",
    "questionAr": "في دائرة رنين RLC متصلة بمصدر تيار متردد $V = 10\\text{ فولت}$، وكانت $R = 5\\,\\Omega$ و $X_L = X_C = 50\\,\\Omega$. ما مقدار فرق الجهد عبر ملف الحث وحده ($V_L$)؟",
    "optionsEn": [
      "$100\\text{ V}$",
      "$10\\text{ V}$",
      "$50\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ فولت}$",
      "$10\\text{ فولت}$",
      "$50\\text{ فولت}$",
      "$0\\text{ فولت}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "At resonance, current is I = V / R = 10 / 5 = 2 A. Then VL = I * XL = 2 * 50 = 100 V (10 times the source voltage!).",
    "hintAr": "عند الرنين: التيار $I = \\frac{V}{R} = \\frac{10}{5} = 2\\text{ A}$. فرق الجهد عبر الملف: $V_L = I X_L = 2 \\times 50 = 100\\text{ فولت}$ (ظاهرة تضخيم الجهد بالرنين!).",
    "stepByStepSolutionEn": [
      "At resonance, current is I = V / R = 10 / 5 = 2 A. Then VL = I * XL = 2 * 50 = 100 V (10 times the source voltage!).",
      "Therefore, the correct answer is: $100\\text{ V}$"
    ],
    "stepByStepSolutionAr": [
      "عند الرنين: التيار $I = \\frac{V}{R} = \\frac{10}{5} = 2\\text{ A}$. فرق الجهد عبر الملف: $V_L = I X_L = 2 \\times 50 = 100\\text{ فولت}$ (ظاهرة تضخيم الجهد بالرنين!).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $100\\text{ فولت}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_13",
    "titleEn": "Exercise 13: Power Factor in AC Circuits",
    "titleAr": "تمرين ١٣: معامل القدرة في دوائر التيار المتردد",
    "difficulty": "hots",
    "questionEn": "The power factor in an AC series circuit is defined as $\\cos\\phi = R / Z$. What is the power factor when the circuit is in electrical resonance?",
    "questionAr": "معامل القدرة في دوائر التيار المتردد يُعرف بـ $\\cos\\phi = \\frac{R}{Z}$. ما هي قيمة معامل القدرة عندما تكون الدائرة في حالة رنين كهربي؟",
    "optionsEn": [
      "$1.0$",
      "$0.5$",
      "$0$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "optionsAr": [
      "$1.0$",
      "$0.5$",
      "$0$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "correctAnswer": "$1.0$",
    "correctIndex": 0,
    "hintEn": "At resonance Z = R, so cos(phi) = R / R = 1.0 (unity power factor).",
    "hintAr": "في حالة الرنين تكون المعاوقة $Z = R$، وبالتالي يكون معامل القدرة $\\cos\\phi = \\frac{R}{R} = 1$ (أقصى استهلاك مفيد للقدرة).",
    "stepByStepSolutionEn": [
      "At resonance Z = R, so cos(phi) = R / R = 1.0 (unity power factor).",
      "Therefore, the correct answer is: $1.0$"
    ],
    "stepByStepSolutionAr": [
      "في حالة الرنين تكون المعاوقة $Z = R$، وبالتالي يكون معامل القدرة $\\cos\\phi = \\frac{R}{R} = 1$ (أقصى استهلاك مفيد للقدرة).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $1.0$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_14",
    "titleEn": "Exercise 14: Parallel Combination of Capacitors Reactance",
    "titleAr": "تمرين ١٤: المفاعلة السعوية الكلية لمكثفين متصلين على التوازي",
    "difficulty": "hots",
    "questionEn": "Two identical capacitors each of capacitance $C$ are connected in parallel to an AC source of frequency $f$. If their individual capacitive reactance is $X_C$, what is the equivalent capacitive reactance of the parallel combination?",
    "questionAr": "مكثفان متماثلان سعة كل منهما $C$ وُصلا على التوازي بمصدر تيار متردد تردده $f$. فإذا كانت المفاعلة السعوية لكل منهما $X_C$، فما هي المفاعلة السعوية المكافئة للمجموعة؟",
    "optionsEn": [
      "$\\frac{1}{2} X_C$",
      "$2 X_C$",
      "$X_C$",
      "$\\frac{1}{4} X_C$"
    ],
    "optionsAr": [
      "$\\frac{1}{2} X_C$",
      "$2 X_C$",
      "$X_C$",
      "$\\frac{1}{4} X_C$"
    ],
    "correctAnswer": "$\\frac{1}{2} X_C$",
    "correctIndex": 0,
    "hintEn": "In parallel, equivalent capacitance doubles (C_eq = 2C), so capacitive reactance halves: X_C,eq = 1 / (2*pi*f*2C) = X_C / 2.",
    "hintAr": "في التوازي تتضاعف السعة المكافئة ($C_{\\text{eq}} = 2C$)، فتقل المفاعلة السعوية المكافئة إلى النصف: $\\frac{1}{2} X_C$.",
    "stepByStepSolutionEn": [
      "In parallel, equivalent capacitance doubles (C_eq = 2C), so capacitive reactance halves: X_C,eq = 1 / (2*pi*f*2C) = X_C / 2.",
      "Therefore, the correct answer is: $\\frac{1}{2} X_C$"
    ],
    "stepByStepSolutionAr": [
      "في التوازي تتضاعف السعة المكافئة ($C_{\\text{eq}} = 2C$)، فتقل المفاعلة السعوية المكافئة إلى النصف: $\\frac{1}{2} X_C$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $\\frac{1}{2} X_C$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_phys_ch4_ex_15",
    "titleEn": "Exercise 15: Frequency Tuning in Radio Receiver Circuit",
    "titleAr": "تمرين ١٥: مبدأ موالفة المحطات في دائرة الاستقبال اللاسلكي",
    "difficulty": "hots",
    "questionEn": "How does a radio receiver select a specific radio station broadcast among countless radio waves received by the antenna?",
    "questionAr": "كيف تختار دائرة الاستقبال اللاسلكي (الراديو) محطة إذاعية معينة من بين آلاف الموجات الكهرومغناطيسية التي يستقبلها الهوائي؟",
    "optionsEn": [
      "By altering the variable capacitor until the resonant frequency of the tuning circuit matches the broadcasting frequency of the desired station",
      "By changing the turns ratio of the power transformer",
      "By increasing the temperature of the antenna wire",
      "By replacing the coil with an iron bar"
    ],
    "optionsAr": [
      "بتغيير سعة المكثف المتغير حتى يتساوى تردد رنين الدائرة مع تردد محطة الإذاعة المراد سماعها، فيمر تيارها بأقصى شدة",
      "بتغيير نسبة عدد لفات محول الطاقة",
      "برفع درجة حرارة سلك الهوائي",
      "باستبدال ملف الاستقبال بقضيب من الحديد"
    ],
    "correctAnswer": "By altering the variable capacitor until the resonant frequency of the tuning circuit matches the broadcasting frequency of the desired station",
    "correctIndex": 0,
    "hintEn": "Adjusting C makes f_0 = f_station, generating resonance where that specific signal has maximum current while others are rejected.",
    "hintAr": "تغيير سعة المكثف يجعل $f_0 = f_{\\text{محطة}}$، فتحدث حالة الرنين وتسمح بمرور إشارة هذه المحطة بأعلى تيار ويتم فصلها وتكبيرها.",
    "stepByStepSolutionEn": [
      "Adjusting C makes f_0 = f_station, generating resonance where that specific signal has maximum current while others are rejected.",
      "Therefore, the correct answer is: By altering the variable capacitor until the resonant frequency of the tuning circuit matches the broadcasting frequency of the desired station"
    ],
    "stepByStepSolutionAr": [
      "تغيير سعة المكثف يجعل $f_0 = f_{\\text{محطة}}$، فتحدث حالة الرنين وتسمح بمرور إشارة هذه المحطة بأعلى تيار ويتم فصلها وتكبيرها.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: بتغيير سعة المكثف المتغير حتى يتساوى تردد رنين الدائرة مع تردد محطة الإذاعة المراد سماعها، فيمر تيارها بأقصى شدة"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];
