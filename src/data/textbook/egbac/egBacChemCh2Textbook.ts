import type { SolvedProblem } from '../../../types/curriculum';

export const egBacChemCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_chem_ch2_se_01",
    "titleEn": "Calculation of Kc from Equilibrium Concentrations",
    "titleAr": "حساب ثابت الاتزان بدلالة التراكيز المولارية Kc",
    "difficulty": "easy",
    "questionEn": "For the homogeneous gas-phase equilibrium $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ at $448^\\circ\\text{C}$, the equilibrium concentrations inside a sealed $1.0\\text{ L}$ flask are found to be $[\\text{H}_2] = 0.020\\text{ M}$, $[\\text{I}_2] = 0.020\\text{ M}$, and $[\\text{HI}] = 0.140\\text{ M}$. Calculate the equilibrium constant $K_c$.",
    "questionAr": "للاتزان الغازي المتجانس $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ عند $448^\\circ\\text{C}$، وُجد أن التراكيز عند الاتزان داخل وعاء محكم سعته $1.0\\text{ L}$ هي $[\\text{H}_2] = 0.020\\text{ M}$ و $[\\text{I}_2] = 0.020\\text{ M}$ و $[\\text{HI}] = 0.140\\text{ M}$. احسب قيمة ثابت الاتزان $K_c$.",
    "optionsEn": [
      "$K_c = 49.0$",
      "$K_c = 7.0$",
      "$K_c = 350.0$",
      "$K_c = 24.5$"
    ],
    "optionsAr": [
      "$K_c = 49.0$",
      "$K_c = 7.0$",
      "$K_c = 350.0$",
      "$K_c = 24.5$"
    ],
    "correctAnswer": "$K_c = 49.0$",
    "correctIndex": 0,
    "hintEn": "Apply mass action law: Kc = [HI]^2 / ([H2] * [I2]).",
    "hintAr": "طبق قانون فعل الكتلة: Kc = [HI]^2 / ([H2] * [I2]).",
    "stepByStepSolutionEn": [
      "1. Write the equilibrium constant expression: $K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]}$.",
      "2. Substitute equilibrium concentrations: $K_c = \\frac{(0.140)^2}{(0.020)(0.020)} = \\frac{0.0196}{0.00040} = 49.0$.",
      "3. Notice that $\\Delta n = 2 - (1 + 1) = 0$, so $K_c$ is dimensionless and independent of volume."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة تعبير ثابت الاتزان: $K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]}$.",
      "٢. التعويض بالتراكيز: $K_c = \\frac{(0.140)^2}{0.020 \\times 0.020} = \\frac{0.0196}{0.0004} = 49.0$.",
      "٣. بما أن $\\Delta n = 2 - 2 = 0$، فإن قيمة $K_c$ تكون مجردة من الوحدات ولا تتأثر بتغير حجم الوعاء."
    ],
    "teacherTipEn": "Remember to square the HI concentration because its stoichiometric coefficient in the balanced equation is 2.",
    "teacherTipAr": "تذكر دائماً رفع تركيز HI إلى الأس 2 لأن معامله في المعادلة الموزونة يساوي 2."
  },
  {
    "id": "egbac_chem_ch2_se_02",
    "titleEn": "Relation Between Kp and Kc for Non-Zero Delta n",
    "titleAr": "العلاقة بين Kp و Kc لتفاعل مصحوب بتغير في عدد مولات الغازات",
    "difficulty": "medium",
    "questionEn": "For the synthesis of ammonia, $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the equilibrium constant is $K_c = 0.61\\text{ L}^2\\cdot\\text{mol}^{-2}$ at $T = 500\\text{ K}$. Calculate the value of $K_p$ in $\\text{atm}^{-2}$. (Use $R = 0.0821\\text{ L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "questionAr": "لتفاعل تكوين غاز النشادر: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$، تبلغ قيمة $K_c = 0.61\\text{ L}^2\\cdot\\text{mol}^{-2}$ عند درجة حرارة $T = 500\\text{ K}$. احسب قيمة $K_p$ بوحدة $\\text{atm}^{-2}$. (استخدم $R = 0.0821\\text{ L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "optionsEn": [
      "$K_p = 1.03 \\times 10^{3}\\text{ atm}^{-2}$",
      "$K_p = 3.62 \\times 10^{-4}\\text{ atm}^{-2}$",
      "$K_p = 0.0149\\text{ atm}^{-2}$",
      "$K_p = 0.61\\text{ atm}^{-2}$"
    ],
    "optionsAr": [
      "$K_p = 1.03 \\times 10^{3}\\text{ ضغط جوي}^{-2}$",
      "$K_p = 3.62 \\times 10^{-4}\\text{ ضغط جوي}^{-2}$",
      "$K_p = 0.0149\\text{ ضغط جوي}^{-2}$",
      "$K_p = 0.61\\text{ ضغط جوي}^{-2}$"
    ],
    "correctAnswer": "$K_p = 3.62 \\times 10^{-4}\\text{ atm}^{-2}$",
    "correctIndex": 1,
    "hintEn": "Formula: Kp = Kc * (R * T)^(Delta n_g). Here Delta n_g = 2 - (1 + 3) = -2.",
    "hintAr": "العلاقة: Kp = Kc * (R * T)^(Delta n_g). هنا Delta n_g = 2 - 4 = -2.",
    "stepByStepSolutionEn": [
      "1. Calculate change in gas moles: $\\Delta n_g = n_{\\text{products}} - n_{\\text{reactants}} = 2 - (1 + 3) = -2$.",
      "2. Thermal energy factor: $R T = (0.0821\\text{ L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1})(500\\text{ K}) = 41.05\\text{ L}\\cdot\\text{atm/mol}$.",
      "3. Calculate $K_p$: $K_p = K_c (R T)^{\\Delta n_g} = 0.61 \\times (41.05)^{-2} = \\frac{0.61}{(41.05)^2} = \\frac{0.61}{1685.1} \\approx 3.62 \\times 10^{-4}\\text{ atm}^{-2}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب الفرق في عدد مولات الغازات: $\\Delta n_g = 2 - (1 + 3) = -2$.",
      "٢. قيمة $RT = 0.0821 \\times 500 = 41.05$.",
      "٣. حساب $K_p$: $K_p = K_c (RT)^{-2} = \\frac{0.61}{(41.05)^2} = 3.62 \\times 10^{-4}\\text{ atm}^{-2}$."
    ],
    "teacherTipEn": "When Delta n_g < 0, Kp is numerically much smaller than Kc because pressure favors the higher mole side in concentration terms.",
    "teacherTipAr": "عندما تكون Delta n_g سالبة، تكون قيمة Kp أصغر عددياً بكثير من قيمة Kc."
  },
  {
    "id": "egbac_chem_ch2_se_03",
    "titleEn": "Predicting Direction of Spontaneous Shift Using Quotient Qc",
    "titleAr": "التنبؤ باتجاه الإزاحة التلقائية باستخدام حاصل التفاعل Qc",
    "difficulty": "medium",
    "questionEn": "At $700\\text{ K}$, the equilibrium constant for $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ is $K_c = 0.29$. A reaction vessel contains $[\\text{N}_2] = 0.10\\text{ M}$, $[\\text{H}_2] = 0.20\\text{ M}$, and $[\\text{NH}_3] = 0.30\\text{ M}$. Calculate the reaction quotient $Q_c$ and predict whether the forward or reverse reaction will occur to reach equilibrium.",
    "questionAr": "عند $700\\text{ K}$، يبلغ ثابت الاتزان للتفاعل $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ القيمة $K_c = 0.29$. يحتوي وعاء تفاعل على $[\\text{N}_2] = 0.10\\text{ M}$ و $[\\text{H}_2] = 0.20\\text{ M}$ و $[\\text{NH}_3] = 0.30\\text{ M}$. احسب حاصل التفاعل $Q_c$ وحدد في أي اتجاه سيزاح التفاعل لبلوغ الاتزان.",
    "optionsEn": [
      "$Q_c = 0.015$; $Q_c < K_c$, so the forward reaction proceeds spontaneously.",
      "$Q_c = 0.29$; $Q_c = K_c$, so the mixture is already at dynamic equilibrium.",
      "$Q_c = 112.5$; $Q_c > K_c$, so the reverse reaction proceeds spontaneously ($2\\text{NH}_3 \\to \\text{N}_2 + 3\\text{H}_2$).",
      "$Q_c = 15.0$; $Q_c > K_c$, so no reaction can occur."
    ],
    "optionsAr": [
      "$Q_c = 0.015$؛ وبما أن $Q_c < K_c$ يزاح التفاعل في الاتجاه الطردي.",
      "$Q_c = 0.29$؛ وبما أن $Q_c = K_c$ فالنظام في حالة اتزان ديناميكي بالفعل.",
      "$Q_c = 112.5$؛ وبما أن $Q_c > K_c$، يزاح التفاعل عكسياً لتكوين المتفاعلات ($2\\text{NH}_3 \\to \\text{N}_2 + 3\\text{H}_2$).",
      "$Q_c = 15.0$؛ وبما أن $Q_c > K_c$ فلا يمكن أن يحدث أي تفاعل."
    ],
    "correctAnswer": "$Q_c = 112.5$; $Q_c > K_c$, so the reverse reaction proceeds spontaneously ($2\\text{NH}_3 \\to \\text{N}_2 + 3\\text{H}_2$).",
    "correctIndex": 2,
    "hintEn": "Calculate Qc = [NH3]^2 / ([N2] * [H2]^3). If Qc > Kc, excess products exist and the system must shift in reverse.",
    "hintAr": "احسب Qc = [NH3]^2 / ([N2] * [H2]^3). إذا كان Qc > Kc، فهناك فائض من النواتج ويتحرك التفاعل في الاتجاه العكسي.",
    "stepByStepSolutionEn": [
      "1. Expression for reaction quotient: $Q_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$.",
      "2. Substitute given concentrations: $Q_c = \\frac{(0.30)^2}{(0.10)(0.20)^3} = \\frac{0.090}{(0.10)(0.0080)} = \\frac{0.090}{0.00080} = 112.5$.",
      "3. Compare with equilibrium constant: $Q_c = 112.5 \\gg K_c = 0.29$.",
      "4. Because $Q_c > K_c$, product concentration is too high relative to equilibrium; the system shifts in the reverse direction to consume $\\text{NH}_3$ until $Q_c = K_c$."
    ],
    "stepByStepSolutionAr": [
      "١. حاصل التفاعل: $Q_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$.",
      "٢. التعويض: $Q_c = \\frac{(0.30)^2}{0.10 \\times (0.20)^3} = \\frac{0.090}{0.00080} = 112.5$.",
      "٣. مقارنة $Q_c$ مع $K_c$: نجد أن $Q_c = 112.5 > K_c = 0.29$.",
      "٤. بما أن $Q_c > K_c$، فهناك فائض كبير في النواتج، ويزاح التفاعل عكسياً لاستهلاك النشادر وتكوين المتفاعلات حتى تتساوى القيمتان."
    ],
    "teacherTipEn": "Remember: If Q < K, shift right (forward). If Q = K, equilibrium. If Q > K, shift left (reverse).",
    "teacherTipAr": "قاعدة ذهبية: إذا كان Q < K ينزاح التفاعل يميناً (طردياً)، وإذا كان Q > K ينزاح يساراً (عكسياً)."
  },
  {
    "id": "egbac_chem_ch2_se_04",
    "titleEn": "ICE Table and Equilibrium Concentrations for Gas Decomposition",
    "titleAr": "جدول تقدم التفاعل وحساب تراكيز الاتزان لتفكك الغازات",
    "difficulty": "hots",
    "questionEn": "Phosphorus pentachloride decomposes at $250^\\circ\\text{C}$ according to: $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, with $K_c = 0.040\\text{ M}$. If $0.500\\text{ mol}$ of pure $\\text{PCl}_5$ is placed in a closed $2.0\\text{ L}$ flask and heated to $250^\\circ\\text{C}$, calculate the equilibrium concentration of $\\text{Cl}_2(g)$.",
    "questionAr": "يتفكك خامس كلوريد الفوسفور عند $250^\\circ\\text{C}$ وفق المعادلة: $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$، بثابت $K_c = 0.040\\text{ M}$. إذا وُضع $0.500\\text{ mol}$ من $\\text{PCl}_5$ النقي في وعاء مغلق سعته $2.0\\text{ L}$ وسُخن إلى $250^\\circ\\text{C}$، فما هو تركيز غاز الكلور $\\text{Cl}_2$ عند الاتزان؟",
    "optionsEn": [
      "$[\\text{Cl}_2]_{\\text{eq}} = 0.167\\text{ M}$",
      "$[\\text{Cl}_2]_{\\text{eq}} = 0.040\\text{ M}$",
      "$[\\text{Cl}_2]_{\\text{eq}} = 0.020\\text{ M}$",
      "$[\\text{Cl}_2]_{\\text{eq}} = 0.0828\\text{ M} \\approx 0.083\\text{ M}$"
    ],
    "optionsAr": [
      "$[\\text{Cl}_2]_{\\text{eq}} = 0.167\\text{ مولار}$",
      "$[\\text{Cl}_2]_{\\text{eq}} = 0.040\\text{ مولار}$",
      "$[\\text{Cl}_2]_{\\text{eq}} = 0.020\\text{ مولار}$",
      "$[\\text{Cl}_2]_{\\text{eq}} = 0.0828\\text{ M} \\approx 0.083\\text{ مولار}$"
    ],
    "correctAnswer": "$[\\text{Cl}_2]_{\\text{eq}} = 0.0828\\text{ M} \\approx 0.083\\text{ M}$",
    "correctIndex": 3,
    "hintEn": "Initial [PCl5] = 0.500 / 2.0 = 0.250 M. Set up ICE table: [PCl5] = 0.250 - x, [PCl3] = x, [Cl2] = x. Solve x^2 / (0.250 - x) = 0.040.",
    "hintAr": "التركيز الابتدائي: 0.500 / 2 = 0.250 M. جدول التقدم: [PCl5] = 0.250 - x، والكلور = x. حل المعادلة التربيعية x^2 + 0.040x - 0.010 = 0.",
    "stepByStepSolutionEn": [
      "1. Initial concentration: $[\\text{PCl}_5]_0 = \\frac{0.500\\text{ mol}}{2.0\\text{ L}} = 0.250\\text{ M}$.",
      "2. ICE table:\n   - Initial: $[\\text{PCl}_5] = 0.250$, $[\\text{PCl}_3] = 0$, $[\\text{Cl}_2] = 0$\n   - Change: $-x$, $+x$, $+x$\n   - Equilibrium: $0.250 - x$, $x$, $x$",
      "3. Equilibrium expression: $K_c = \\frac{x^2}{0.250 - x} = 0.040 \\implies x^2 + 0.040 x - 0.010 = 0$.",
      "4. Quadratic formula: $x = \\frac{-0.040 + \\sqrt{(0.040)^2 - 4(1)(-0.010)}}{2} = \\frac{-0.040 + \\sqrt{0.0016 + 0.040}}{2} = \\frac{-0.040 + \\sqrt{0.0416}}{2} = \\frac{-0.040 + 0.20396}{2} \\approx 0.0820 - 0.083\\text{ M}$.",
      "5. Therefore, $[\\text{Cl}_2]_{\\text{eq}} = x \\approx 0.083\\text{ M}$."
    ],
    "stepByStepSolutionAr": [
      "١. التركيز الابتدائي: $[\\text{PCl}_5]_0 = 0.500 / 2.0 = 0.250\\text{ M}$.",
      "٢. جدول تقدم التفاعل: عند الاتزان يكون $[\\text{PCl}_5] = 0.250 - x$ و $[\\text{PCl}_3] = x$ و $[\\text{Cl}_2] = x$.",
      "٣. التعويض في قانون فعل الكتلة: $\\frac{x^2}{0.250 - x} = 0.040 \\implies x^2 + 0.040x - 0.010 = 0$.",
      "٤. حل المعادلة التربيعية بالقانون العام: $x = \\frac{-0.040 + \\sqrt{0.0416}}{2} \\approx 0.083\\text{ M}$.",
      "٥. إذن تركيز الكلور عند الاتزان هو $0.083\\text{ مولار}$."
    ],
    "teacherTipEn": "Do not drop x when Kc is not significantly smaller than [PCl5]0 (Kc / [A]0 = 0.040 / 0.250 = 0.16 > 0.05); solve the exact quadratic.",
    "teacherTipAr": "لا تهمل x إذا كانت النسبة بين Kc والتركيز الابتدائي تتجاوز 5%؛ يجب حل المعادلة التربيعية بدقة كاملة."
  },
  {
    "id": "egbac_chem_ch2_se_05",
    "titleEn": "Heterogeneous Equilibrium: Solid Decomposition and Partial Pressure",
    "titleAr": "الاتزان غير المتجانس: تفكك المواد الصلبة والضغط الجزئي للغازات",
    "difficulty": "easy",
    "questionEn": "Solid ammonium hydrogen sulfide decomposes endothermically into two gases in an evacuated flask: $\\text{NH}_4\\text{HS}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{H}_2\\text{S}(g)$. At $25^\\circ\\text{C}$, the total equilibrium pressure is measured to be $P_{\\text{total}} = 0.660\\text{ atm}$. Calculate the equilibrium constant $K_p$.",
    "questionAr": "تتفكك كبريتيد أمونيوم الهيدروجين الصلبة في وعاء مفرغ إلى غازين: $\\text{NH}_4\\text{HS}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{H}_2\\text{S}(g)$. عند $25^\\circ\\text{C}$، بلغ الضغط الكلي المقاس عند الاتزان $P_{\\text{total}} = 0.660\\text{ atm}$. احسب ثابت الاتزان $K_p$.",
    "optionsEn": [
      "$K_p = 0.1089\\text{ atm}^2 \\approx 0.109\\text{ atm}^2$",
      "$K_p = 0.4356\\text{ atm}^2$",
      "$K_p = 0.330\\text{ atm}^2$",
      "$K_p = 0.660\\text{ atm}^2$"
    ],
    "optionsAr": [
      "$K_p = 0.1089\\text{ ضغط جوي}^2 \\approx 0.109\\text{ ضغط جوي}^2$",
      "$K_p = 0.4356\\text{ ضغط جوي}^2$",
      "$K_p = 0.330\\text{ ضغط جوي}^2$",
      "$K_p = 0.660\\text{ ضغط جوي}^2$"
    ],
    "correctAnswer": "$K_p = 0.1089\\text{ atm}^2 \\approx 0.109\\text{ atm}^2$",
    "correctIndex": 0,
    "hintEn": "Solid activity is 1. Equal moles of NH3 and H2S mean P(NH3) = P(H2S) = P_total / 2 = 0.330 atm. Then Kp = P(NH3) * P(H2S).",
    "hintAr": "نشاط المادة الصلبة = 1. تساوي المولات يعني أن ضغط كل غاز = نصف الضغط الكلي = 0.330 atm. إذن Kp = 0.330 * 0.330.",
    "stepByStepSolutionEn": [
      "1. Pure solids have constant thermodynamic activity equal to $1$ and do not appear in the equilibrium expression: $K_p = P_{\\text{NH}_3} \\cdot P_{\\text{H}_2\\text{S}}$.",
      "2. Because the gases are produced in a $1:1$ stoichiometric ratio in an evacuated flask, their partial pressures must be identical: $P_{\\text{NH}_3} = P_{\\text{H}_2\\text{S}} = \\frac{1}{2} P_{\\text{total}} = \\frac{0.660}{2} = 0.330\\text{ atm}$.",
      "3. Calculate $K_p$: $K_p = (0.330)(0.330) = 0.1089\\text{ atm}^2 \\approx 0.109\\text{ atm}^2$."
    ],
    "stepByStepSolutionAr": [
      "١. المواد الصلبة النقية لا تُدرج في تعبير ثابت الاتزان لأن نشاطها يساوي الوحدة: $K_p = P_{\\text{NH}_3} \\cdot P_{\\text{H}_2\\text{S}}$.",
      "٢. بما أن الغازين تكونا بنسبة مولية $1:1$ في وعاء مفرغ، فإن ضغطيهما متساويان: $P_{\\text{NH}_3} = P_{\\text{H}_2\\text{S}} = 0.660 / 2 = 0.330\\text{ atm}$.",
      "٣. حساب ثابت الاتزان: $K_p = (0.330)^2 = 0.1089\\text{ atm}^2$."
    ],
    "teacherTipEn": "Adding more pure solid NH4HS to the flask does NOT shift the equilibrium or change P_total, provided some solid remains present.",
    "teacherTipAr": "إضافة المزيد من المادة الصلبة النقية لا يزيح الاتزان ولا يغير الضغط الكلي طالما كانت المادة الصلبة موجودة في الوعاء."
  },
  {
    "id": "egbac_chem_ch2_se_06",
    "titleEn": "van 't Hoff Equation: Shift in K with Temperature",
    "titleAr": "معادلة فانت هوف: تغير ثابت الاتزان مع درجة الحرارة",
    "difficulty": "medium",
    "questionEn": "For the endothermic synthesis of nitric oxide: $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g), \\, \\Delta H^\\circ = +180.5\\text{ kJ/mol}$. The equilibrium constant at $T_1 = 2000\\text{ K}$ is $K_1 = 4.08 \\times 10^{-4}$. Using the van 't Hoff equation, calculate the equilibrium constant $K_2$ at $T_2 = 2500\\text{ K}$. ($R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "questionAr": "للتفاعل الماص للحرارة لتكوين أكسيد النيتريك: $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{NO}(g), \\, \\Delta H^\\circ = +180.5\\text{ kJ/mol}$. يبلغ ثابت الاتزان عند $T_1 = 2000\\text{ K}$ القيمة $K_1 = 4.08 \\times 10^{-4}$. باستخدام معادلة فانت هوف، احسب قيمة ثابت الاتزان $K_2$ عند $T_2 = 2500\\text{ K}$. ($R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "optionsEn": [
      "$K_2 = 4.62 \\times 10^{-5}$",
      "$K_2 = 3.60 \\times 10^{-3}$",
      "$K_2 = 1.25 \\times 10^{-2}$",
      "$K_2 = 8.16 \\times 10^{-4}$"
    ],
    "optionsAr": [
      "$K_2 = 4.62 \\times 10^{-5}$",
      "$K_2 = 3.60 \\times 10^{-3}$",
      "$K_2 = 1.25 \\times 10^{-2}$",
      "$K_2 = 8.16 \\times 10^{-4}$"
    ],
    "correctAnswer": "$K_2 = 3.60 \\times 10^{-3}$",
    "correctIndex": 1,
    "hintEn": "van 't Hoff: ln(K2 / K1) = -(Delta H / R) * (1/T2 - 1/T1). Since Delta H > 0 and T2 > T1, K2 must be larger than K1.",
    "hintAr": "معادلة فانت هوف: ln(K2 / K1) = (Delta H / R) * (1/T1 - 1/T2). وبما أن التفاعل ماص والحرارة ارتفعت، تزداد قيمة K2.",
    "stepByStepSolutionEn": [
      "1. Integrated van 't Hoff equation: $\\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.",
      "2. Temperature reciprocal difference: $\\frac{1}{2000} - \\frac{1}{2500} = 0.000500 - 0.000400 = 1.00 \\times 10^{-4}\\text{ K}^{-1}$.",
      "3. Exponent calculation: $\\frac{\\Delta H^\\circ}{R} \\times (1.00 \\times 10^{-4}) = \\frac{180500\\text{ J/mol}}{8.314\\text{ J/mol}\\cdot\\text{K}} \\times 10^{-4} = 21710 \\times 10^{-4} = 2.171$.",
      "4. Solve for $K_2$: $\\frac{K_2}{K_1} = e^{2.171} \\approx 8.767 \\implies K_2 = (4.08 \\times 10^{-4}) \\times 8.767 \\approx 3.58 \\times 10^{-3} - 3.60 \\times 10^{-3}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة فانت هوف التكاملية: $\\ln(K_2/K_1) = \\frac{\\Delta H^\\circ}{R} (1/T_1 - 1/T_2)$.",
      "٢. فرق مقلوب درجات الحرارة: $\\frac{1}{2000} - \\frac{1}{2500} = 1.00 \\times 10^{-4}\\text{ K}^{-1}$.",
      "٣. حساب الطرف الأيمن: $\\frac{180500}{8.314} \\times 10^{-4} = 2.171$.",
      "٤. حساب $K_2$: $K_2 / K_1 = e^{2.171} = 8.767 \\implies K_2 = 4.08 \\times 10^{-4} \\times 8.767 \\approx 3.60 \\times 10^{-3}$."
    ],
    "teacherTipEn": "Temperature is the ONLY operational factor that changes the numerical value of the equilibrium constant K.",
    "teacherTipAr": "درجة الحرارة هي العامل التشغيلي الوحيد الذي يغير القيمة العددية لثابت الاتزان K."
  },
  {
    "id": "egbac_chem_ch2_se_07",
    "titleEn": "Multi-Stress Le Chatelier Perturbations in Industrial Haber Reactor",
    "titleAr": "إزاحات لوشاتيليه لعدة عوامل متزامنة في مفاعل هابر الصناعي",
    "difficulty": "medium",
    "questionEn": "In the industrial synthesis of ammonia, $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g), \\, \\Delta H^\\circ = -92.4\\text{ kJ/mol}$, which combination of operational conditions maximizes the equilibrium mole fraction of ammonia $\\text{NH}_3$ at dynamic equilibrium?",
    "questionAr": "في عملية هابر الصناعية لإنتاج الأمونيا: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g), \\, \\Delta H^\\circ = -92.4\\text{ kJ/mol}$، أي توليفة من الظروف التشغيلية التالية تحقق أعلى نسبة مئوية للأمونيا عند الاتزان الديناميكي؟",
    "optionsEn": [
      "Low total pressure and high operating temperature.",
      "High total pressure and high operating temperature.",
      "High total pressure and low operating temperature.",
      "Low total pressure and low operating temperature."
    ],
    "optionsAr": [
      "الضغط الكلي المنخفض مع درجة الحرارة المرتفعة.",
      "الضغط الكلي المرتفع مع درجة الحرارة المرتفعة.",
      "الضغط الكلي المرتفع مع درجة الحرارة المنخفضة.",
      "الضغط الكلي المنخفض مع درجة الحرارة المنخفضة."
    ],
    "correctAnswer": "High total pressure and low operating temperature.",
    "correctIndex": 2,
    "hintEn": "Forward reaction reduces gas moles (4 -> 2, favored by high P) and is exothermic (releases heat, favored by low T).",
    "hintAr": "التفاعل الطردي يقلل عدد مولات الغاز (من 4 إلى 2، يفضله الضغط العالي) وهو طارد للحرارة (يفضله خفض الحرارة).",
    "stepByStepSolutionEn": [
      "1. Gas stoichiometry: $\\Delta n_g = 2 - (1 + 3) = -2$. By Le Chatelier's principle, increasing total pressure shifts the equilibrium toward the side with fewer gas moles (forward, producing more $\\text{NH}_3$).",
      "2. Reaction thermochemistry: $\\Delta H^\\circ = -92.4\\text{ kJ/mol} < 0$ (exothermic). Removing heat (lowering temperature) shifts equilibrium forward to release heat, increasing $K_c$ and equilibrium yield.",
      "3. In industrial practice, a compromise temperature ($400-450^\\circ\\text{C}$) is used because although lower temperatures thermodynamically favor ammonia yield, they render the reaction kinetics excessively slow."
    ],
    "stepByStepSolutionAr": [
      "١. ستوكيومترية الغازات: $\\Delta n_g = 2 - 4 = -2$. وفق قاعدة لوشاتيليه، زيادة الضغط تزيح الاتزان نحو الطرف ذي عدد المولات الأقل (الطردي، نحو تكوين النشادر).",
      "٢. الخواص الحرارية: التفاعل طارد للحرارة ($\\Delta H < 0$). خفض درجة الحرارة يزيح الاتزان في الاتجاه الطارد (الطردي) لتعويض النقص ويزيد قيمة ثابت الاتزان.",
      "٣. في الصناعة يُستخدم حل وسط ($400-450^\\circ\\text{C}$) لأن خفض الحرارة الشديد وإن كان يرفع المحصول نظرياً، إلا أنه يجعل سرعة التفاعل بطيئة جداً وغير اقتصادية."
    ],
    "teacherTipEn": "Remember the vital distinction between equilibrium thermodynamics (yield) and reaction kinetics (rate).",
    "teacherTipAr": "ميز دائماً بين الديناميكا الحرارية للاتزان (نسبة المحصول) وحركية التفاعل (السرعة الزمنية للوصول إليه)."
  },
  {
    "id": "egbac_chem_ch2_se_08",
    "titleEn": "Addition of Inert Gas: Constant Volume vs Constant Pressure",
    "titleAr": "إضافة غاز خامل: عند ثبوت الحجم مقابل ثبوت الضغط",
    "difficulty": "hots",
    "questionEn": "Consider the gaseous equilibrium in a cylinder fitted with a movable piston: $2\\text{SO}_3(g) \\rightleftharpoons 2\\text{SO}_2(g) + \\text{O}_2(g)$. An inert gas (Argon) is introduced. What is the effect on the equilibrium position under: (1) constant volume, and (2) constant total pressure?",
    "questionAr": "للاتزان الغازي داخل أسطوانة مزودة بمكبس متحرك: $2\\text{SO}_3(g) \\rightleftharpoons 2\\text{SO}_2(g) + \\text{O}_2(g)$. أُضيف غاز خامل (الأرجون). ما أثر هذه الإضافة على موضع الاتزان في الحالتين: (١) عند ثبوت الحجم، و (٢) عند ثبوت الضغط الكلي؟",
    "optionsEn": [
      "(1) Constant volume: Shifts forward; (2) Constant pressure: No shift.",
      "(1) Constant volume: Shifts reverse; (2) Constant pressure: Shifts reverse.",
      "In both cases, equilibrium shifts in the reverse direction to consume Argon.",
      "(1) Constant volume: No shift; (2) Constant pressure: Shifts in the forward direction ($2\\text{SO}_3 \\to 2\\text{SO}_2 + \\text{O}_2$)."
    ],
    "optionsAr": [
      "(١) عند ثبوت الحجم: يزاح طردياً؛ (٢) عند ثبوت الضغط: لا يحدث أي تغير.",
      "(١) عند ثبوت الحجم: يزاح عكسياً؛ (٢) عند ثبوت الضغط: يزاح عكسياً.",
      "في كلتا الحالتين يزاح التفاعل عكسياً لاستهلاك غاز الأرجون.",
      "(١) عند ثبوت الحجم: لا يحدث أي تغير؛ (٢) عند ثبوت الضغط: يزاح الاتزان في الاتجاه الطردي (نحو اليمين)."
    ],
    "correctAnswer": "(1) Constant volume: No shift; (2) Constant pressure: Shifts in the forward direction ($2\\text{SO}_3 \\to 2\\text{SO}_2 + \\text{O}_2$).",
    "correctIndex": 3,
    "hintEn": "At const V, partial pressures of reactants/products remain unchanged (no shift). At const P, total volume must expand to accommodate Ar, lowering all reactant/product partial pressures and shifting toward more gas moles (Delta n_g = +1).",
    "hintAr": "عند ثبوت الحجم: الضغوط الجزئية للمتفاعلات لا تتغير فلا يحدث انزياح. عند ثبوت الضغط: يتمدد الحجم وينخفض الضغط الجزئي فيزاح نحو المولات الأكثر (طردياً).",
    "stepByStepSolutionEn": [
      "1. At constant volume: Adding an inert gas increases total pressure $P_{\\text{total}}$, but individual partial pressures ($P_i = \\frac{n_i R T}{V}$) and concentrations ($[i] = \\frac{n_i}{V}$) remain strictly unchanged. Because $Q_p = K_p$, there is **zero shift** in equilibrium.",
      "2. At constant total pressure: To keep pressure constant when additional moles of inert gas enter, the movable piston must expand, increasing the vessel volume $V$.",
      "3. An increase in volume lowers the partial pressure of each reacting gas. By Le Chatelier's principle, the system shifts toward the side with **more moles of gas** ($\\Delta n_g = (2+1) - 2 = +1$, the forward direction)."
    ],
    "stepByStepSolutionAr": [
      "١. عند ثبوت الحجم: إضافة غاز خامل تزيد الضغط الكلي فقط دون المساس بالضغوط الجزئية أو تراكيز المواد المتفاعلة والناتجة، فيبقى $Q_p = K_p$ ولا يحدث أي انزياح.",
      "٢. عند ثبوت الضغط: لدخول جزيئات الأرجون مع ثبات الضغط الكلي، يتحرك المكبس ليزداد حجم الوعاء.",
      "٣. زيادة الحجم تخفض الضغوط الجزئية لجميع الغازات المتفاعلة، فينزاح الاتزان نحو الطرف ذي عدد المولات الأكبر لتعويض انخفاض الضغط (الاتجاه الطردي حيث $\\Delta n_g = +1$)."
    ],
    "teacherTipEn": "This is a classic high-rigor exam concept: inert gas at constant volume has no effect; at constant pressure, it acts like a volume expansion.",
    "teacherTipAr": "مفهوم امتحاني دقيق: إضافة الغاز الخامل مع ثبوت الحجم لا تؤثر مطلقاً، أما مع ثبوت الضغط فتكافئ زيادة حجم الوعاء."
  },
  {
    "id": "egbac_chem_ch2_se_09",
    "titleEn": "Degree of Dissociation alpha as a Function of Total Pressure",
    "titleAr": "درجة التفكك ألفا كدالة في الضغط الكلي للغاز",
    "difficulty": "hots",
    "questionEn": "Dinitrogen tetroxide dissociates into nitrogen dioxide according to: $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$. If $\\alpha$ is the degree of dissociation at equilibrium and $P$ is total pressure, the equilibrium constant in terms of partial pressures is $K_p = \\frac{4 \\alpha^2 P}{1 - \\alpha^2}$. If $K_p = 0.140\\text{ atm}$ at $25^\\circ\\text{C}$ and the total pressure is $P = 1.00\\text{ atm}$, calculate $\\alpha$.",
    "questionAr": "يتفكك رابع أكسيد ثنائي النيتروجين إلى ثاني أكسيد النيتروجين وفق: $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$. إذا كانت $\\alpha$ هي درجة التفكك عند الاتزان و $P$ هو الضغط الكلي، فإن $K_p = \\frac{4 \\alpha^2 P}{1 - \\alpha^2}$. إذا كان $K_p = 0.140\\text{ atm}$ عند $25^\\circ\\text{C}$ والضغط الكلي $P = 1.00\\text{ atm}$، فما قيمة درجة التفكك $\\alpha$؟",
    "optionsEn": [
      "$\\alpha = 0.184 \\; (18.4\\%)$",
      "$\\alpha = 0.374 \\; (37.4\\%)$",
      "$\\alpha = 0.035 \\; (3.5\\%)$",
      "$\\alpha = 0.500 \\; (50.0\\%)$"
    ],
    "optionsAr": [
      "$\\alpha = 0.184 \\; (18.4\\%)$",
      "$\\alpha = 0.374 \\; (37.4\\%)$",
      "$\\alpha = 0.035 \\; (3.5\\%)$",
      "$\\alpha = 0.500 \\; (50.0\\%)$"
    ],
    "correctAnswer": "$\\alpha = 0.184 \\; (18.4\\%)$",
    "correctIndex": 0,
    "hintEn": "Rearrange formula: 4 alpha^2 P = K_p (1 - alpha^2) => alpha^2 (4P + K_p) = K_p => alpha = sqrt(K_p / (4P + K_p)).",
    "hintAr": "أعد الترتيب: alpha^2 * (4P + K_p) = K_p => alpha = جذر(K_p / (4P + K_p)).",
    "stepByStepSolutionEn": [
      "1. Start with the relation: $K_p = \\frac{4\\alpha^2 P}{1 - \\alpha^2}$.",
      "2. Cross-multiply: $K_p (1 - \\alpha^2) = 4 P \\alpha^2 \\implies K_p = (4 P + K_p) \\alpha^2$.",
      "3. Solve for $\\alpha$: $\\alpha = \\sqrt{\\frac{K_p}{4 P + K_p}}$.",
      "4. Substitute $K_p = 0.140$ and $P = 1.00$: $\\alpha = \\sqrt{\\frac{0.140}{4(1.00) + 0.140}} = \\sqrt{\\frac{0.140}{4.140}} = \\sqrt{0.033816} \\approx 0.1839 \\approx 0.184$ ($18.4\\%$)."
    ],
    "stepByStepSolutionAr": [
      "١. من العلاقة: $K_p = \\frac{4\\alpha^2 P}{1 - \\alpha^2}$.",
      "٢. ضرب الطرفين في الوسطين: $K_p = (4P + K_p) \\alpha^2$.",
      "٣. عزل $\\alpha$: $\\alpha = \\sqrt{\\frac{K_p}{4P + K_p}}$.",
      "٤. التعويض: $\\alpha = \\sqrt{\\frac{0.140}{4 + 0.140}} = \\sqrt{0.0338} \\approx 0.184$ ($18.4\\%$)."
    ],
    "teacherTipEn": "Notice that as total pressure P increases, alpha decreases, conforming perfectly with Le Chatelier's principle favoring the single mole of N2O4.",
    "teacherTipAr": "لاحظ أنه كلما زاد الضغط الكلي P، قلت درجة التفكك ألفا، وهو ما يطابق قاعدة لوشاتيليه تماماً."
  },
  {
    "id": "egbac_chem_ch2_se_10",
    "titleEn": "Effect of Catalysts on Equilibrium State",
    "titleAr": "تأثير العوامل الحفازة على موضع وحالة الاتزان",
    "difficulty": "easy",
    "questionEn": "In the industrial Contact process for the manufacture of sulfuric acid, sulfur dioxide is converted to sulfur trioxide: $2\\text{SO}_2(g) + \\text{O}_2(g) \\xrightleftharpoons[\\Delta H < 0]{\\text{V}_2\\text{O}_5} 2\\text{SO}_3(g)$. What is the precise role of vanadium(V) oxide ($\\text{V}_2\\text{O}_5$) in this chemical equilibrium?",
    "questionAr": "في طريقة التلامس الصناعية لإنتاج حمض الكبريتيك، يتأكسد ثاني أكسيد الكبريت: $2\\text{SO}_2(g) + \\text{O}_2(g) \\xrightleftharpoons[\\Delta H < 0]{\\text{V}_2\\text{O}_5} 2\\text{SO}_3(g)$. ما هو الدور الدقيق لخامس أكسيد الفاناديوم ($\\text{V}_2\\text{O}_5$) في هذا الاتزان؟",
    "optionsEn": [
      "It shifts the equilibrium position to the right, increasing the equilibrium constant $K_p$.",
      "It speeds up the achievement of equilibrium by lowering activation energy, without altering the equilibrium constant $K_p$ or final yield.",
      "It absorbs sulfur dioxide to increase the forward reaction rate.",
      "It increases the reaction enthalpy $\\Delta H^\\circ$, making the reaction more exothermic."
    ],
    "optionsAr": [
      "يزيح موضع الاتزان نحو اليمين ويزيد من القيمة العددية لثابت الاتزان $K_p$.",
      "يُسرّع الوصول إلى حالة الاتزان بخفض طاقة التنشيط، دون أن يغير قيمة ثابت الاتزان $K_p$ أو النسبة المئوية للمحصول النهائي.",
      "يمتص غاز ثاني أكسيد الكبريت لزيادة سرعة التفاعل في الاتجاه الطردي.",
      "يزيد من إنثالبي التفاعل $\\Delta H^\\circ$ ويجعله أكثر طرداً للحرارة."
    ],
    "correctAnswer": "It speeds up the achievement of equilibrium by lowering activation energy, without altering the equilibrium constant $K_p$ or final yield.",
    "correctIndex": 1,
    "hintEn": "Catalysts accelerate forward and reverse reactions equally. They reduce the time needed to reach equilibrium, but cannot change K or yield.",
    "hintAr": "الحفاز يسرع التفاعلين الأمامي والعكسي بنفس النسبة تماماً، فيقلل زمن الوصول للاتزان دون التأثير على K أو المحصول.",
    "stepByStepSolutionEn": [
      "1. The catalyst provides an active surface containing $\\text{V}^{5+}/\\text{V}^{4+}$ redox cycles that lower activation energy for oxygen transfer.",
      "2. Because $k_{\\text{fwd}}$ and $k_{\\text{rev}}$ are increased by the exact same kinetic factor, their ratio $K = k_{\\text{fwd}} / k_{\\text{rev}}$ remains unchanged.",
      "3. Therefore, $\\text{V}_2\\text{O}_5$ allows commercial operation at a practical temperature ($450^\\circ\\text{C}$) while achieving equilibrium in seconds rather than days."
    ],
    "stepByStepSolutionAr": [
      "١. يوفر خامس أكسيد الفاناديوم مساراً بديلاً عبر دورة أكسدة واختزال لأيونات الفاناديوم تخفض طاقة التنشيط.",
      "٢. بما أن سرعتي التفاعل الأمامي والعكسي تتضاعفان بنفس المعامل الحركي تماماً، فإن النسبة بينهما $K = k_{\\text{fwd}} / k_{\\text{rev}}$ لا تتغير.",
      "٣. يتيح الحفاز تشغيل المفاعل عند $450^\\circ\\text{C}$ مع الوصول إلى الاتزان خلال ثوانٍ معدودة بدلاً من أيام."
    ],
    "teacherTipEn": "Never confuse reaction rate acceleration with equilibrium yield enhancement: catalysts only affect the former.",
    "teacherTipAr": "لا تخلط مطلقاً بين سرعة التفاعل وبين محصول الاتزان: فالعامل الحفاز يؤثر فقط على السرعة والزمن."
  }
];

export const egBacChemCh2Exercises: SolvedProblem[] = [
  {
    "id": "egbac_chem_ch2_ex_01",
    "titleEn": "Equilibrium Constant for the Reverse and Multiplied Reactions",
    "titleAr": "ثابت الاتزان للتفاعل المعكوس والمضروب في معامل عددي",
    "difficulty": "easy",
    "questionEn": "For the reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the equilibrium constant is $K_1 = 16$ at temperature $T$. What is the equilibrium constant $K_2$ for the reaction $\\text{NH}_3(g) \\rightleftharpoons \\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g)$ at the same temperature?",
    "questionAr": "للتفاعل $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$، يبلغ ثابت الاتزان $K_1 = 16$ عند درجة حرارة $T$. ما قيمة ثابت الاتزان $K_2$ للتفاعل $\\text{NH}_3(g) \\rightleftharpoons \\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g)$ عند نفس درجة الحرارة؟",
    "optionsEn": [
      "$K_2 = -16$",
      "$K_2 = 4.0$",
      "$K_2 = \\frac{1}{\\sqrt{16}} = 0.25$",
      "$K_2 = 0.0625$"
    ],
    "optionsAr": [
      "$K_2 = -16$",
      "$K_2 = 4.0$",
      "$K_2 = \\frac{1}{\\sqrt{16}} = 0.25$",
      "$K_2 = 0.0625$"
    ],
    "correctAnswer": "$K_2 = \\frac{1}{\\sqrt{16}} = 0.25$",
    "correctIndex": 2,
    "hintEn": "Reversing a reaction inverts K (1/K1). Multiplying coefficients by 1/2 raises K to power 1/2 (sqrt(1/K1)).",
    "hintAr": "عكس اتجاه التفاعل يقلب الثابت (1/K1). وضرب المعاملات في 1/2 يرفع الثابت للأس 1/2 (جذر 1/K1).",
    "stepByStepSolutionEn": [
      "1. When a chemical equation is reversed, its equilibrium constant is inverted: $K' = \\frac{1}{K_1}$.",
      "2. When all stoichiometric coefficients are multiplied by a factor $n = 1/2$, the new equilibrium constant is raised to the power $n$: $K_2 = (K')^{1/2} = \\left(\\frac{1}{K_1}\\right)^{1/2} = \\frac{1}{\\sqrt{K_1}}$.",
      "3. Calculate: $K_2 = \\frac{1}{\\sqrt{16}} = \\frac{1}{4} = 0.25$."
    ],
    "stepByStepSolutionAr": [
      "١. عند عكس اتجاه المعادلة، يُقلب ثابت الاتزان: $K' = 1 / K_1$.",
      "٢. عند ضرب معاملات المعادلة في المعامل $n = 1/2$، يُرفع الثابت إلى الأس $1/2$ (الجذر التربيعي): $K_2 = 1 / \\sqrt{K_1}$.",
      "٣. الحساب: $K_2 = 1 / \\sqrt{16} = 1 / 4 = 0.25$."
    ],
    "teacherTipEn": "Rules for manipulating K: Reversing -> 1/K; Multiplying by n -> K^n; Adding equations -> K1 * K2.",
    "teacherTipAr": "قواعد التعامل مع K: عكس المعادلة -> مقلوب K؛ ضرب المعادلة في n -> رفع K للأس n؛ جمع معادلتين -> حاصل ضرب الثابتين."
  },
  {
    "id": "egbac_chem_ch2_ex_02",
    "titleEn": "Equilibrium Constant of Combined Consecutive Reactions",
    "titleAr": "ثابت اتزان التفاعلات المتتالية المدمجة",
    "difficulty": "easy",
    "questionEn": "Given the two consecutive chemical equilibria at $1000\\text{ K}$:\n1. $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g), \\quad K_1 = 1.60$\n2. $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g), \\quad K_2 = 0.50$\nWhat is the equilibrium constant $K_3$ for the overall reaction: $\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}(g) + \\text{H}_2(g)$?",
    "questionAr": "بمعلومية الاتزانين الكيميائيين المتعاقبين عند $1000\\text{ K}$:\n١. $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g), \\quad K_1 = 1.60$\n٢. $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\text{CO}(g), \\quad K_2 = 0.50$\nما قيمة ثابت الاتزان $K_3$ للتفاعل الكلي المجمع: $\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}(g) + \\text{H}_2(g)$؟",
    "optionsEn": [
      "$K_3 = K_1 + K_2 = 2.10$",
      "$K_3 = \\frac{K_1}{K_2} = 3.20$",
      "$K_3 = \\frac{K_2}{K_1} = 0.31$",
      "$K_3 = K_1 \\times K_2 = 0.80$"
    ],
    "optionsAr": [
      "$K_3 = K_1 + K_2 = 2.10$",
      "$K_3 = \\frac{K_1}{K_2} = 3.20$",
      "$K_3 = \\frac{K_2}{K_1} = 0.31$",
      "$K_3 = K_1 \\times K_2 = 0.80$"
    ],
    "correctAnswer": "$K_3 = K_1 \\times K_2 = 0.80$",
    "correctIndex": 3,
    "hintEn": "When two chemical equations are summed, their equilibrium constants are multiplied: K3 = K1 * K2.",
    "hintAr": "عند جمع معادلتين كيميائيتين، يكون ثابت اتزان المعادلة الناتجة هو حاصل ضرب ثابتي الاتزان: K3 = K1 * K2.",
    "stepByStepSolutionEn": [
      "1. Add the two balanced chemical equations:\n   $\\text{CO} + \\text{H}_2\\text{O} + \\text{C} + \\text{CO}_2 \\rightleftharpoons \\text{CO}_2 + \\text{H}_2 + 2\\text{CO}$.",
      "2. Cancel species appearing on both sides ($\\text{CO}_2$ completely, and $1\\text{ CO}$):\n   $\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}(g) + \\text{H}_2(g)$.",
      "3. The equilibrium constant for the sum is the product of the individual constants: $K_3 = K_1 \\times K_2 = 1.60 \\times 0.50 = 0.80$."
    ],
    "stepByStepSolutionAr": [
      "١. جمع المعادلتين المتتابعتين مع حذف الأنواع المتشابهة من الطرفين ($\\text{CO}_2$ وجزيء $\\text{CO}$).",
      "٢. ينتج التفاعل المطلوب: $\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}(g) + \\text{H}_2(g)$.",
      "٣. ثابت اتزان المعادلة المجمعة يساوي حاصل ضرب الثابتين: $K_3 = 1.60 \\times 0.50 = 0.80$."
    ],
    "teacherTipEn": "Remember that while standard free energies add algebraically (Delta G3 = Delta G1 + Delta G2), equilibrium constants multiply (K3 = K1 * K2).",
    "teacherTipAr": "تذكر: طاقات جيبس الحرة تُجمع حسابياً، بينما ثوابت الاتزان تُضرب ضرباً."
  },
  {
    "id": "egbac_chem_ch2_ex_03",
    "titleEn": "Volume Compression Effect on Gas-Phase Reaction Position",
    "titleAr": "أثر ضغط الحجم على موضع الاتزان الغازي",
    "difficulty": "easy",
    "questionEn": "For the equilibrium system $2\\text{NO}_2(g) \\; (\\text{brown}) \\rightleftharpoons \\text{N}_2\\text{O}_4(g) \\; (\\text{colorless})$, what immediate and eventual color changes occur if the volume of the syringe containing this mixture is abruptly halved by pushing the plunger in?",
    "questionAr": "في نظام الاتزان الغازي: $2\\text{NO}_2(g) \\; (\\text{بني محمر}) \\rightleftharpoons \\text{N}_2\\text{O}_4(g) \\; (\\text{عديم اللون})$، ما التغير اللوني اللحظي والنهائي الذي يحدث إذا خُفّض حجم الحقنة إلى النصف فجأة بدفع المكبس للداخل؟",
    "optionsEn": [
      "The brown color immediately darkens due to compression of concentration, then gradually fades as the system shifts forward to form colorless $\\text{N}_2\\text{O}_4$.",
      "The brown color immediately vanishes and remains permanently clear.",
      "The brown color becomes permanently darker and never changes.",
      "The color changes instantly to bright yellow and does not shift."
    ],
    "optionsAr": [
      "يغمق اللون البني لحظياً لزيادة التركيز بالانضغاط، ثم يبهت تدريجياً لانزياح الاتزان طردياً نحو تكوين $\\text{N}_2\\text{O}_4$ عديم اللون.",
      "يختفي اللون البني تماماً وفورياً ويظل المحلول رائقاً.",
      "يصبح اللون البني داكناً بصورة دائمة ولا يتغير بعد ذلك.",
      "يتحول اللون فورياً إلى أصفر فاقع دون أي انزياح للاتزان."
    ],
    "correctAnswer": "The brown color immediately darkens due to compression of concentration, then gradually fades as the system shifts forward to form colorless $\\text{N}_2\\text{O}_4$.",
    "correctIndex": 0,
    "hintEn": "Halving volume instantly doubles all concentrations (darkening color). Then by Le Chatelier (2 moles -> 1 mole), equilibrium shifts right (color fades).",
    "hintAr": "ضغط الحجم يضاعف التراكيز فورياً فيغمق اللون، ثم وفق لوشاتيليه يزاح التفاعل نحو المولات الأقل (يميناً) فيهبط التركيز ويبهت اللون.",
    "stepByStepSolutionEn": [
      "1. Immediate physical effect: Halving volume $V \\to V/2$ doubles all instantaneous concentrations ($[\\text{NO}_2] \\to 2[\\text{NO}_2]$), which immediately darkens the visible brown appearance.",
      "2. Reaction quotient perturbation: $Q_c = \\frac{[\\text{N}_2\\text{O}_4]}{[\\text{NO}_2]^2} = \\frac{2[\\text{N}_2\\text{O}_4]_0}{(2[\\text{NO}_2]_0)^2} = \\frac{1}{2} K_c < K_c$.",
      "3. Le Chatelier response: Because $Q_c < K_c$, the system shifts forward ($2\\text{NO}_2 \\to \\text{N}_2\\text{O}_4$) toward fewer gas moles to relieve excess pressure, consuming colored $\\text{NO}_2$ and fading the brown tint until new equilibrium is established."
    ],
    "stepByStepSolutionAr": [
      "١. الأثر الفيزيائي الفوري: تقليل الحجم إلى النصف يضاعف تركيز جميع الغازات فورياً، مما يجعل اللون البني داكناً في اللحظة الأولى.",
      "٢. اختلال حاصل التفاعل: $Q_c = \\frac{2[\\text{N}_2\\text{O}_4]}{4[\\text{NO}_2]^2} = \\frac{1}{2} K_c < K_c$.",
      "٣. استجابة لوشاتيليه: بما أن $Q_c < K_c$، يزاح الاتزان في الاتجاه الطردي نحو الطرف ذي عدد المولات الأقل، فيُستهلك غاز $\\text{NO}_2$ البني ويبهت اللون تدريجياً."
    ],
    "teacherTipEn": "Distinguish between the instantaneous concentration spike and the subsequent thermodynamic equilibrium relaxation.",
    "teacherTipAr": "ميز دائماً بين الارتفاع اللحظي في التركيز الناتج عن الانضغاط الفيزيائي، وبين الانزياح الكيميائي اللاحق لاستعادة الاتزان."
  },
  {
    "id": "egbac_chem_ch2_ex_04",
    "titleEn": "Equilibrium Total Pressure for Gaseous Decomposition",
    "titleAr": "حساب الضغط الكلي عند الاتزان لتفكك غازي",
    "difficulty": "medium",
    "questionEn": "For the dissociation reaction $\\text{SO}_2\\text{Cl}_2(g) \\rightleftharpoons \\text{SO}_2(g) + \\text{Cl}_2(g)$, the equilibrium constant is $K_p = 2.40\\text{ atm}$ at $375\\text{ K}$. If pure $\\text{SO}_2\\text{Cl}_2$ is introduced into an empty chamber at an initial pressure of $P_0 = 1.00\\text{ atm}$, what is the total pressure $P_{\\text{total}}$ at dynamic equilibrium?",
    "questionAr": "لتفاعل تفكك كلوريد السلفوريل: $\\text{SO}_2\\text{Cl}_2(g) \\rightleftharpoons \\text{SO}_2(g) + \\text{Cl}_2(g)$، يبلغ ثابت الاتزان $K_p = 2.40\\text{ atm}$ عند $375\\text{ K}$. إذا أُدخل غاز $\\text{SO}_2\\text{Cl}_2$ النقي في وعاء فارغ بضغط ابتدائي $P_0 = 1.00\\text{ atm}$، فما هو الضغط الكلي $P_{\\text{total}}$ عند الاتزان؟",
    "optionsEn": [
      "$P_{\\text{total}} = 2.00\\text{ atm}$",
      "$P_{\\text{total}} = 1.73\\text{ atm}$",
      "$P_{\\text{total}} = 1.35\\text{ atm}$",
      "$P_{\\text{total}} = 3.40\\text{ atm}$"
    ],
    "optionsAr": [
      "$P_{\\text{total}} = 2.00\\text{ ضغط جوي}$",
      "$P_{\\text{total}} = 1.73\\text{ ضغط جوي}$",
      "$P_{\\text{total}} = 1.35\\text{ ضغط جوي}$",
      "$P_{\\text{total}} = 3.40\\text{ ضغط جوي}$"
    ],
    "correctAnswer": "$P_{\\text{total}} = 1.73\\text{ atm}$",
    "correctIndex": 1,
    "hintEn": "Let change in pressure be x: P(SO2Cl2) = 1.00 - x, P(SO2) = x, P(Cl2) = x. Kp = x^2 / (1.00 - x) = 2.40. Solve for x, then P_total = 1.00 + x.",
    "hintAr": "افرض التغير x: ضغط SO2Cl2 = 1 - x، والغازين الآخرين = x. Kp = x^2 / (1 - x) = 2.40. حل التربيعية ثم احسب الضغط الكلي = 1 + x.",
    "stepByStepSolutionEn": [
      "1. Set up ICE table in partial pressures (atm):\n   - Initial: $P_{\\text{SO}_2\\text{Cl}_2} = 1.00$, $P_{\\text{SO}_2} = 0$, $P_{\\text{Cl}_2} = 0$\n   - Change: $-x$, $+x$, $+x$\n   - Equilibrium: $1.00 - x$, $x$, $x$",
      "2. Total pressure at equilibrium: $P_{\\text{total}} = (1.00 - x) + x + x = 1.00 + x$.",
      "3. Equilibrium expression: $K_p = \\frac{x^2}{1.00 - x} = 2.40 \\implies x^2 + 2.40 x - 2.40 = 0$.",
      "4. Quadratic solution: $x = \\frac{-2.40 + \\sqrt{(2.40)^2 - 4(1)(-2.40)}}{2} = \\frac{-2.40 + \\sqrt{5.76 + 9.60}}{2} = \\frac{-2.40 + \\sqrt{15.36}}{2} = \\frac{-2.40 + 3.919}{2} \\approx 0.730\\text{ atm}$.",
      "5. Total equilibrium pressure: $P_{\\text{total}} = 1.00 + 0.730 = 1.73\\text{ atm}$."
    ],
    "stepByStepSolutionAr": [
      "١. جدول الضغوط الجزئية عند الاتزان: $P_{\\text{SO}_2\\text{Cl}_2} = 1.00 - x$ و $P_{\\text{SO}_2} = x$ و $P_{\\text{Cl}_2} = x$.",
      "٢. الضغط الكلي: $P_{\\text{total}} = (1 - x) + x + x = 1.00 + x$.",
      "٣. التعويض في تعبير $K_p$: $\\frac{x^2}{1.00 - x} = 2.40 \\implies x^2 + 2.40x - 2.40 = 0$.",
      "٤. حل المعادلة التربيعية: $x = \\frac{-2.40 + \\sqrt{15.36}}{2} = 0.730\\text{ atm}$.",
      "٥. الضغط الكلي: $P_{\\text{total}} = 1.00 + 0.730 = 1.73\\text{ ضغط جوي}$."
    ],
    "teacherTipEn": "Total pressure in a gas dissociation at constant volume always increases by exactly x * (Delta n_g).",
    "teacherTipAr": "يزداد الضغط الكلي في وعاء ثابت الحجم بمقدار حاصل ضرب x في التغير الصافي لعدد مولات الغازات."
  },
  {
    "id": "egbac_chem_ch2_ex_05",
    "titleEn": "Temperature Invariance of Equilibrium Constant Under Pressure Shifts",
    "titleAr": "ثبات قيمة ثابت الاتزان عند تغير الضغط والحجم",
    "difficulty": "easy",
    "questionEn": "For a gaseous equilibrium mixture of $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ at $400^\\circ\\text{C}$, the external pressure is suddenly increased from $50\\text{ atm}$ to $150\\text{ atm}$ at constant temperature. What happens to the numerical value of the equilibrium constant $K_p$?",
    "questionAr": "لخليط اتزان غازي للتفاعل $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ عند $400^\\circ\\text{C}$، رُفع الضغط الخارجي فجأة من $50\\text{ atm}$ إلى $150\\text{ atm}$ مع ثبوت درجة الحرارة. ماذا يحدث للقيمة العددية لثابت الاتزان $K_p$؟",
    "optionsEn": [
      "It triples ($3\\times$ larger) due to the three-fold pressure increase.",
      "It decreases by a factor of 9 because $\\Delta n_g = -2$.",
      "It remains strictly unchanged because temperature is constant.",
      "It drops to zero."
    ],
    "optionsAr": [
      "تتضاعف ثلاث مرات بسبب زيادة الضغط لثلاثة أمثاله.",
      "تقل بمقدار 9 أضعاف لأن $\\Delta n_g = -2$.",
      "تظل ثابتة تماماً دون أي تغيير لثبوت درجة الحرارة.",
      "تنخفض إلى الصفر."
    ],
    "correctAnswer": "It remains strictly unchanged because temperature is constant.",
    "correctIndex": 2,
    "hintEn": "Kp depends SOLELY on temperature. Changing pressure shifts the equilibrium concentrations/pressures, but their ratio Kp remains identical.",
    "hintAr": "يعتمد Kp على درجة الحرارة فقط. تغير الضغط يزيح موضع الاتزان والتراكيز لكن النسبة Kp تظل ثابتة تماماً.",
    "stepByStepSolutionEn": [
      "1. By thermodynamic definition, $\\Delta G^\\circ = -R T \\ln K_p$. Since $\\Delta G^\\circ$ and $T$ are constant, $K_p$ is strictly a constant at that temperature.",
      "2. Increasing total pressure shifts the equilibrium mixture composition toward products (higher $\\text{NH}_3$ fraction).",
      "3. However, the new equilibrium partial pressures adjust precisely such that the ratio $\\frac{(P_{\\text{NH}_3})^2}{(P_{\\text{N}_2})(P_{\\text{H}_2})^3}$ remains exactly equal to $K_p$."
    ],
    "stepByStepSolutionAr": [
      "١. من العلاقة الديناميكية الحرارية $\\Delta G^\\circ = -RT \\ln K_p$، بما أن $\\Delta G^\\circ$ و $T$ ثابتان، فإن $K_p$ يظل ثابتاً.",
      "٢. زيادة الضغط تزيح موضع الاتزان طردياً نحو تكوين المزيد من النشادر.",
      "٣. تتغير الضغوط الجزئية الفردية للمواد، ولكن النسبة الرياضية لقانون فعل الكتلة تظل مساوية تماماً لقيمة $K_p$ الأصلية."
    ],
    "teacherTipEn": "A universal rule: Only changing temperature can alter the numerical value of K. Pressure, volume, and catalysts NEVER alter K.",
    "teacherTipAr": "قاعدة قطعية: درجة الحرارة هي الوحيدة القادرة على تغيير القيمة العددية لثابت الاتزان؛ أما الضغط والحجم والحفاز فلا يغيرونها أبداً."
  },
  {
    "id": "egbac_chem_ch2_ex_06",
    "titleEn": "Calcium Carbonate Thermal Decomposition and Equilibrium CO2 Pressure",
    "titleAr": "التفكك الحراري لكربونات الكالسيوم وضغط غاز ثاني أكسيد الكربون",
    "difficulty": "easy",
    "questionEn": "Lime is produced by the calcination of limestone in industrial kilns: $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$. At $800^\\circ\\text{C}$, the equilibrium constant is $K_p = 0.220\\text{ atm}$. If a sample of $\\text{CaCO}_3$ is heated in an evacuated $10.0\\text{ L}$ closed vessel at $800^\\circ\\text{C}$ until equilibrium is established, what is the equilibrium partial pressure of $\\text{CO}_2(g)$?",
    "questionAr": "يُنتج الجير الحي بكلسنة الحجر الجيري في الأفران: $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$. عند $800^\\circ\\text{C}$، يبلغ ثابت الاتزان $K_p = 0.220\\text{ atm}$. إذا سُخنت عينة من كربونات الكالسيوم في وعاء مغلق مفرغ سعته $10.0\\text{ L}$ عند $800^\\circ\\text{C}$ حتى استقر الاتزان، فما هو الضغط الجزئي لغاز $\\text{CO}_2$ عند الاتزان؟",
    "optionsEn": [
      "$P_{\\text{CO}_2} = 2.20\\text{ atm}$",
      "$P_{\\text{CO}_2} = 0.022\\text{ atm}$",
      "$P_{\\text{CO}_2} = 0.440\\text{ atm}$",
      "$P_{\\text{CO}_2} = 0.220\\text{ atm}$"
    ],
    "optionsAr": [
      "$P_{\\text{CO}_2} = 2.20\\text{ ضغط جوي}$",
      "$P_{\\text{CO}_2} = 0.022\\text{ ضغط جوي}$",
      "$P_{\\text{CO}_2} = 0.440\\text{ ضغط جوي}$",
      "$P_{\\text{CO}_2} = 0.220\\text{ ضغط جوي}$"
    ],
    "correctAnswer": "$P_{\\text{CO}_2} = 0.220\\text{ atm}$",
    "correctIndex": 3,
    "hintEn": "For CaCO3(s) <=> CaO(s) + CO2(g), the solids have activity = 1. Therefore, Kp = P(CO2) = 0.220 atm.",
    "hintAr": "في هذا التفاعل غير المتجانس، نشاط المواد الصلبة = 1. وبالتالي فإن Kp = P(CO2) = 0.220 ضغط جوي مباشرة.",
    "stepByStepSolutionEn": [
      "1. Write the equilibrium expression for the heterogeneous reaction: $K_p = P_{\\text{CO}_2}$ (pure solids $\\text{CaCO}_3$ and $\\text{CaO}$ are omitted).",
      "2. By direct inspection: $P_{\\text{CO}_2} = K_p = 0.220\\text{ atm}$.",
      "3. As long as both solid phases are present, the equilibrium pressure of $\\text{CO}_2$ depends solely on temperature, independent of the mass of limestone or vessel volume."
    ],
    "stepByStepSolutionAr": [
      "١. كتابة تعبير ثابت الاتزان للتفاعل غير المتجانس: $K_p = P_{\\text{CO}_2}$ (تُحذف المواد الصلبة النقية).",
      "٢. بالتعويض المباشر: $P_{\\text{CO}_2} = K_p = 0.220\\text{ atm}$.",
      "٣. طالما بقيت المادتان الصلبتان موجودتين، فإن ضغط غاز ثاني أكسيد الكربون يتحدد بدرجة الحرارة فقط ولا يعتمد على كتلة الحجر الجيري أو حجم الإناء."
    ],
    "teacherTipEn": "In an open kiln where CO2 escapes, the system can never reach equilibrium and decomposition proceeds to 100% completion.",
    "teacherTipAr": "في الأفران المفتوحة حيث يتسرب غاز CO2، لا يصل النظام لحالة اتزان مطلقاً ويستمر التفكك حتى استهلاك الحجر الجيري بالكامل."
  },
  {
    "id": "egbac_chem_ch2_ex_07",
    "titleEn": "Sign of Enthalpy Change from Temperature Shift in K",
    "titleAr": "استنتاج إشارة التغير في الإنثالبي من تغير قيمة ثابت الاتزان مع الحرارة",
    "difficulty": "easy",
    "questionEn": "For a reversible reaction, experimental measurements reveal that the equilibrium constant is $K_c = 1.2 \\times 10^{-2}$ at $300\\text{ K}$ and decreases to $K_c = 4.5 \\times 10^{-4}$ at $450\\text{ K}$. What conclusion can be definitively drawn regarding the reaction's thermochemistry?",
    "questionAr": "لتفاعل كيميائي انعكاسي، أظهرت القياسات التجريبية أن ثابت الاتزان $K_c = 1.2 \\times 10^{-2}$ عند $300\\text{ K}$ وانخفض إلى $K_c = 4.5 \\times 10^{-4}$ عند $450\\text{ K}$. ما الاستنتاج القاطع بشأن الخواص الحرارية لهذا التفاعل؟",
    "optionsEn": [
      "The forward reaction is exothermic ($\\Delta H^\\circ < 0$).",
      "The forward reaction is endothermic ($\\Delta H^\\circ > 0$).",
      "The reaction occurs without any enthalpy change ($\\Delta H^\\circ = 0$).",
      "The activation energy of the forward reaction is zero."
    ],
    "optionsAr": [
      "التفاعل في الاتجاه الطردي طارد للحرارة ($\\Delta H^\\circ < 0$).",
      "التفاعل في الاتجاه الطردي ماص للحرارة ($\\Delta H^\\circ > 0$).",
      "التفاعل يحدث دون أي تغير في الإنثالبي ($\\Delta H^\\circ = 0$).",
      "طاقة تنشيط التفاعل الأمامي تساوي صفراً."
    ],
    "correctAnswer": "The forward reaction is exothermic ($\\Delta H^\\circ < 0$).",
    "correctIndex": 0,
    "hintEn": "If K decreases as T increases, the reaction is exothermic. Heating shifts the equilibrium in the endothermic (reverse) direction.",
    "hintAr": "إذا نقصت قيمة ثابت الاتزان K برفع درجة الحرارة T، فالتفاعل طارد للحرارة. لأن التسخين يزيح التفاعل عكسياً لامتصاص الحرارة.",
    "stepByStepSolutionEn": [
      "1. By the van 't Hoff relation, $\\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{\\Delta H^\\circ}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.",
      "2. Since $T_2 > T_1$, $\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) > 0$.",
      "3. Because $K_2 < K_1$, $\\ln\\left(\\frac{K_2}{K_1}\\right) < 0$.",
      "4. Therefore, $\\Delta H^\\circ$ must be negative ($\\Delta H^\\circ < 0$, exothermic)."
    ],
    "stepByStepSolutionAr": [
      "١. من معادلة فانت هوف: $\\ln(K_2/K_1) = \\frac{\\Delta H^\\circ}{R} (1/T_1 - 1/T_2)$.",
      "٢. بما أن $T_2 > T_1$، فإن المقدار بين القوسين موجب.",
      "٣. وبما أن $K_2 < K_1$، فإن لوغاريتم النسبة سالب.",
      "٤. إذن يجب أن تكون إشارة $\\Delta H^\\circ$ سالبة، أي أن التفاعل طارد للحرارة."
    ],
    "teacherTipEn": "Remember this mnemonic: Raising temperature always favors the endothermic direction. If raising T decreases K, reverse is endothermic => forward is exothermic.",
    "teacherTipAr": "قاعدة ذهبية: رفع الحرارة يرجح دائماً الاتجاه الماص؛ فإذا قل K بالحرارة، كان الاتجاه العكسي ماصاً والأمامي طارداً."
  },
  {
    "id": "egbac_chem_ch2_ex_08",
    "titleEn": "Industrial Contact Process: Maximizing SO3 Equilibrium Yield",
    "titleAr": "طريقة التلامس الصناعية: تعظيم محصول ثالث أكسيد الكبريت",
    "difficulty": "medium",
    "questionEn": "In the production of sulfuric acid, the key reversible step is $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g) + 198\\text{ kJ}$. To shift the equilibrium to maximize $\\text{SO}_3$ formation while maintaining safety and economics, what operational adjustments are applied?",
    "questionAr": "في إنتاج حمض الكبريتيك، الخطوة الانعكاسية الحاسمة هي $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g) + 198\\text{ kJ}$. لإزاحة الاتزان وتعظيم إنتاج $\\text{SO}_3$ بأمان واقتصادية، ما التعديل التشغيلي المطبق؟",
    "optionsEn": [
      "Drastically increasing the temperature to $1200^\\circ\\text{C}$ to speed up forward reaction.",
      "Using excess atmospheric air/oxygen and continuously scrubbing/removing $\\text{SO}_3$ by absorbing it into concentrated $\\text{H}_2\\text{SO}_4$.",
      "Decreasing the total pressure to high vacuum ($0.01\\text{ atm}$).",
      "Using pure nitrogen as a carrier gas to dilute the reactants."
    ],
    "optionsAr": [
      "رفع درجة الحرارة إلى $1200^\\circ\\text{C}$ لتسريع التفاعل الأمامي.",
      "استخدام فائض من هواء الأكسجين الجوي والسحب المستمر لغاز $\\text{SO}_3$ بامتصاصه في حمض الكبريتيك المركز.",
      "خفض الضغط الكلي إلى تفريغ شديد ($0.01\\text{ ضغط جوي}$).",
      "استخدام غاز نيتروجين نقي لتخفيف تركيز المتفاعلات."
    ],
    "correctAnswer": "Using excess atmospheric air/oxygen and continuously scrubbing/removing $\\text{SO}_3$ by absorbing it into concentrated $\\text{H}_2\\text{SO}_4$.",
    "correctIndex": 1,
    "hintEn": "By Le Chatelier, adding excess O2 reactant shifts forward, and removing SO3 product continuously pulls the reaction forward to 100% completion.",
    "hintAr": "وفق لوشاتيليه: زيادة تركيز الأكسجين المتفاعل تزاح طردياً، والسحب المستمر للناتج SO3 يجبر التفاعل على الاستمرار حتى الاكتمال.",
    "stepByStepSolutionEn": [
      "1. By Le Chatelier's principle, introducing an excess of inexpensive reactant ($\text{O}_2$ from purified air) shifts the equilibrium position forward, forcing nearly all expensive $\text{SO}_2$ to react.",
      "2. Continuously removing product $\text{SO}_3$ prevents back-reaction, maintaining $Q_c < K_c$ throughout the multi-stage converter beds.",
      "3. Moderate pressure ($1-2\text{ atm}$) is sufficient because equilibrium conversion at $450^\\circ\text{C}$ with $\text{V}_2\text{O}_5$ catalyst already exceeds $99.5\\%$, avoiding the massive capital expenditure of high-pressure compressors."
    ],
    "stepByStepSolutionAr": [
      "١. وفق لوشاتيليه: تزويد هواء وفير (فائض من $\\text{O}_2$ الرخيص) يدفع التفاعل طردياً لاستهلاك غاز $\\text{SO}_2$ الثمين.",
      "٢. السحب والإزالة المستمرة لثالث أكسيد الكبريت بالذوبان تضمن بقاء $Q < K$ واستمرار التفاعل للأمام.",
      "٣. لا تتطلب هذه الصناعة ضغوطاً فائقة لأن نسبة التحول عند ضغط جوي شبه عادي تصل إلى $99.5\\%$ على حفاز الفاناديوم."
    ],
    "teacherTipEn": "Continuous product removal is the most powerful industrial strategy to drive reversible equilibria to virtually 100% yield.",
    "teacherTipAr": "السحب المستمر للنواتج هو الإستراتيجية الصناعية الأقوى لتحويل التفاعلات الانعكاسية إلى تفاعلات شبه تامة بنسبة 100%."
  },
  {
    "id": "egbac_chem_ch2_ex_09",
    "titleEn": "Thermodynamic Standard Free Energy from Equilibrium Constant",
    "titleAr": "حساب طاقة جيبس الحرة القياسية من ثابت الاتزان",
    "difficulty": "medium",
    "questionEn": "The equilibrium constant for the water-gas shift reaction, $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$, is $K_p = 5.10$ at $T = 700\\text{ K}$. Calculate the standard Gibbs free energy change $\\Delta G^\\circ$ in $\\text{kJ/mol}$ at this temperature. ($R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "questionAr": "يبلغ ثابت الاتزان لتفاعل تحويل غاز الماء: $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$ القيمة $K_p = 5.10$ عند $T = 700\\text{ K}$. احسب التغير في طاقة جيبس الحرة القياسية $\\Delta G^\\circ$ بوحدة $\\text{kJ/mol}$ عند هذه الدرجة. ($R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "optionsEn": [
      "$\\Delta G^\\circ = +9.48\\text{ kJ/mol}$",
      "$\\Delta G^\\circ = -29.7\\text{ kJ/mol}$",
      "$\\Delta G^\\circ = -9.48\\text{ kJ/mol}$",
      "$\\Delta G^\\circ = -1.89\\text{ kJ/mol}$"
    ],
    "optionsAr": [
      "$\\Delta G^\\circ = +9.48\\text{ كيلوجول/مول}$",
      "$\\Delta G^\\circ = -29.7\\text{ كيلوجول/مول}$",
      "$\\Delta G^\\circ = -9.48\\text{ كيلوجول/مول}$",
      "$\\Delta G^\\circ = -1.89\\text{ كيلوجول/مول}$"
    ],
    "correctAnswer": "$\\Delta G^\\circ = -9.48\\text{ kJ/mol}$",
    "correctIndex": 2,
    "hintEn": "Formula: Delta G^circ = -R * T * ln(K_p). With K_p = 5.10 > 1, ln(5.10) > 0 and Delta G^circ is negative.",
    "hintAr": "القانون: Delta G^circ = -R * T * ln(K_p). بما أن K_p = 5.10 > 1 فإن ln(5.10) موجبة و Delta G^circ سالبة.",
    "stepByStepSolutionEn": [
      "1. Standard Gibbs free energy formula: $\\Delta G^\\circ = -R T \\ln K_p$.",
      "2. Natural log: $\\ln(5.10) \\approx 1.62924$.",
      "3. Calculate: $\\Delta G^\\circ = -(8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1})(700\\text{ K})(1.62924) = -9481.8\\text{ J/mol} \\approx -9.48\\text{ kJ/mol}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون طاقة جيبس الحرة القياسية: $\\Delta G^\\circ = -RT \\ln K_p$.",
      "٢. اللوغاريتم الطبيعي: $\\ln(5.10) \\approx 1.629$.",
      "٣. التعويض: $\\Delta G^\\circ = -8.314 \\times 700 \\times 1.629 = -9482\\text{ J/mol} = -9.48\\text{ kJ/mol}$."
    ],
    "teacherTipEn": "A negative Delta G^circ corresponds to K > 1 (products favored at standard conditions), while Delta G^circ = 0 means K = 1.",
    "teacherTipAr": "تدل القيمة السالبة لطاقة جيبس القياسية على أن K > 1 (النواتج مفضلة عند الحالة القياسية)."
  },
  {
    "id": "egbac_chem_ch2_ex_10",
    "titleEn": "Vapor Pressure of Water as an Equilibrium Constant",
    "titleAr": "الضغط البخاري للماء كحالة اتزان ديناميكي",
    "difficulty": "easy",
    "questionEn": "For the phase equilibrium of liquid water and steam: $\\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_2\\text{O}(g)$, what is the mathematical expression for the equilibrium constant $K_p$?",
    "questionAr": "للاتزان الفيزيائي بين الماء السائل وبخاره: $\\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_2\\text{O}(g)$، ما هو التعبير الرياضي الصحيح لثابت الاتزان $K_p$؟",
    "optionsEn": [
      "$K_p = \\frac{P_{\\text{H}_2\\text{O}(g)}}{[\\text{H}_2\\text{O}(l)]}$",
      "$K_p = \\frac{1}{P_{\\text{H}_2\\text{O}(g)}}$",
      "$K_p = P_{\\text{H}_2\\text{O}(g)} \\times [\\text{H}_2\\text{O}(l)]$",
      "$K_p = P_{\\text{H}_2\\text{O}(g)}$ (the equilibrium vapor pressure of water at that temperature)"
    ],
    "optionsAr": [
      "$K_p = \\frac{P_{\\text{H}_2\\text{O}(g)}}{[\\text{H}_2\\text{O}(l)]}$",
      "$K_p = \\frac{1}{P_{\\text{H}_2\\text{O}(g)}}$",
      "$K_p = P_{\\text{H}_2\\text{O}(g)} \\times [\\text{H}_2\\text{O}(l)]$",
      "$K_p = P_{\\text{H}_2\\text{O}(g)}$ (الضغط البخاري المشبع للماء عند تلك الدرجة)"
    ],
    "correctAnswer": "$K_p = P_{\\text{H}_2\\text{O}(g)}$ (the equilibrium vapor pressure of water at that temperature)",
    "correctIndex": 3,
    "hintEn": "Pure liquids have activity 1. Therefore, Kp equals the partial pressure of water vapor (equilibrium vapor pressure).",
    "hintAr": "السوائل النقية نشاطها يساوي 1، ولذلك فإن Kp يساوي الضغط الجزئي لبخار الماء فقط (الضغط البخاري المشبع).",
    "stepByStepSolutionEn": [
      "1. Pure liquid water $\\text{H}_2\\text{O}(l)$ is in its standard state with thermodynamic activity $a_{\\text{liquid}} = 1$.",
      "2. The equilibrium constant in partial pressures is simply the pressure of the gas phase: $K_p = P_{\\text{H}_2\\text{O}(g)}$.",
      "3. At $100^\\circ\\text{C}$ (normal boiling point), the equilibrium vapor pressure equals standard atmospheric pressure: $K_p = 1.00\\text{ atm}$."
    ],
    "stepByStepSolutionAr": [
      "١. الماء السائل النقي مادة نقية يكون نشاطها الكيميائي مساوياً للواحد الصحيح ($a = 1$).",
      "٢. تعبير ثابت الاتزان يقتصر على الطور الغازي: $K_p = P_{\\text{H}_2\\text{O}(g)}$.",
      "٣. عند $100^\\circ\\text{C}$ (درجة الغليان المعتادة)، يتساوى الضغط البخاري مع الضغط الجوي ويكون $K_p = 1.00\\text{ atm}$."
    ],
    "teacherTipEn": "Vapor pressure is nothing other than the equilibrium constant of a liquid-vapor phase transition.",
    "teacherTipAr": "الضغط البخاري المشبع لأي سائل ليس إلا تعبيراً عن ثابت الاتزان للتحول الفيزيائي بين السائل وبخاره."
  },
  {
    "id": "egbac_chem_ch2_ex_11",
    "titleEn": "Le Chatelier Shift Upon Endothermic Dissolution",
    "titleAr": "تغير الذوبانية بالحرارة وتطبيق قاعدة لوشاتيليه",
    "difficulty": "easy",
    "questionEn": "The dissolution of ammonium nitrate in water is strongly endothermic: $\\text{NH}_4\\text{NO}_3(s) + \\text{heat} \\rightleftharpoons \\text{NH}_4^+(aq) + \\text{NO}_3^-(aq)$. What happens to the solubility of ammonium nitrate if the water temperature is raised?",
    "questionAr": "تعد إذابة نترات الأمونيوم في الماء عملية ماصة للحرارة بشدة: $\\text{NH}_4\\text{NO}_3(s) + \\text{حرارة} \\rightleftharpoons \\text{NH}_4^+(aq) + \\text{NO}_3^-(aq)$. ماذا يحدث لذوبانية نترات الأمونيوم عند تسخين ورفع درجة حرارة الماء؟",
    "optionsEn": [
      "Its solubility increases significantly.",
      "Its solubility decreases and crystals precipitate out.",
      "Its solubility remains completely unaffected.",
      "The salt decomposes violently into ammonia gas."
    ],
    "optionsAr": [
      "تزداد ذوبانية نترات الأمونيوم في الماء بشكل ملحوظ.",
      "تقل ذوبانيته وتترسب بلورات الملح في القاع.",
      "تبقى الذوبانية ثابتة تماماً دون أي تأثر.",
      "يتفكك الملح فورياً ويتصاعد غاز الأمونيا."
    ],
    "correctAnswer": "Its solubility increases significantly.",
    "correctIndex": 0,
    "hintEn": "Heat acts as a reactant in endothermic processes. Adding heat (raising T) shifts the equilibrium forward to dissolve more solid.",
    "hintAr": "الحرارة بمثابة متفاعل في العمليات الماصة. إضافة الحرارة تزاح الاتزان طردياً لإذابة كمية أكبر من المادة الصلبة.",
    "stepByStepSolutionEn": [
      "1. In an endothermic process ($\\Delta H_{\\text{soln}} > 0$), heat is absorbed: $\\text{Solid} + \\text{Heat} \\rightleftharpoons \\text{Dissolved Ions}$.",
      "2. By Le Chatelier's principle, supplying thermal energy (heating) shifts the equilibrium in the direction that consumes heat (forward dissolution).",
      "3. Consequently, molar solubility increases with temperature, which is why instant cold packs (utilizing $\\text{NH}_4\\text{NO}_3$) absorb heat from the surroundings upon dissolving."
    ],
    "stepByStepSolutionAr": [
      "١. في العمليات الماصة للحرارة ($\\Delta H > 0$)، تُعامل الحرارة كأحد المتفاعلات.",
      "٢. وفق قاعدة لوشاتيليه، يؤدي تسخين المحلول إلى إزاحة موضع الاتزان في الاتجاه الذي يمتص الحرارة (الاتجاه الطردي).",
      "٣. تزداد كمية الملح الذائبة في المحلول المشبع بارتفاع درجة الحرارة."
    ],
    "teacherTipEn": "Salts with exothermic dissolution (e.g. Ce2(SO4)3, Li2SO4) show the opposite behavior: their solubility drops as temperature rises.",
    "teacherTipAr": "الأملاح ذات حرارة الذوبان الطاردة للحرارة تسلك سلوكاً عكسياً وتقل ذوبانيتها عند رفع درجة الحرارة."
  },
  {
    "id": "egbac_chem_ch2_ex_12",
    "titleEn": "Gas-Phase Equilibrium with Stoichiometric Multipliers",
    "titleAr": "اتزان غازي بمعاملات ستوكيومترية مضاعفة",
    "difficulty": "medium",
    "questionEn": "At $1000\\text{ K}$, the reaction $2\\text{NO}_2(g) \\rightleftharpoons 2\\text{NO}(g) + \\text{O}_2(g)$ has $K_c = 7.5 \\times 10^{-6}\\text{ M}$. If $[\\text{NO}_2]_{\\text{eq}} = 0.40\\text{ M}$ and $[\\text{O}_2]_{\\text{eq}} = 0.050\\text{ M}$, calculate the equilibrium concentration of $\\text{NO}(g)$.",
    "questionAr": "عند $1000\\text{ K}$، يمتلك التفاعل $2\\text{NO}_2(g) \\rightleftharpoons 2\\text{NO}(g) + \\text{O}_2(g)$ ثابت اتزان $K_c = 7.5 \\times 10^{-6}\\text{ M}$. إذا كان تركيز $[\\text{NO}_2]_{\\text{eq}} = 0.40\\text{ M}$ و $[\\text{O}_2]_{\\text{eq}} = 0.050\\text{ M}$ عند الاتزان، فما تركيز غاز $\\text{NO}$؟",
    "optionsEn": [
      "$[\\text{NO}]_{\\text{eq}} = 2.40 \\times 10^{-5}\\text{ M}$",
      "$[\\text{NO}]_{\\text{eq}} = 4.90 \\times 10^{-3}\\text{ M}$",
      "$[\\text{NO}]_{\\text{eq}} = 1.55 \\times 10^{-2}\\text{ M}$",
      "$[\\text{NO}]_{\\text{eq}} = 6.00 \\times 10^{-4}\\text{ M}$"
    ],
    "optionsAr": [
      "$[\\text{NO}]_{\\text{eq}} = 2.40 \\times 10^{-5}\\text{ مولار}$",
      "$[\\text{NO}]_{\\text{eq}} = 4.90 \\times 10^{-3}\\text{ مولار}$",
      "$[\\text{NO}]_{\\text{eq}} = 1.55 \\times 10^{-2}\\text{ مولار}$",
      "$[\\text{NO}]_{\\text{eq}} = 6.00 \\times 10^{-4}\\text{ مولار}$"
    ],
    "correctAnswer": "$[\\text{NO}]_{\\text{eq}} = 4.90 \\times 10^{-3}\\text{ M}$",
    "correctIndex": 1,
    "hintEn": "Rearrange Kc = [NO]^2 [O2] / [NO2]^2 => [NO]^2 = Kc * [NO2]^2 / [O2].",
    "hintAr": "أعد الترتيب: [NO]^2 = Kc * [NO2]^2 / [O2]. خذ الجذر التربيعي لحساب [NO].",
    "stepByStepSolutionEn": [
      "1. Equilibrium constant expression: $K_c = \\frac{[\\text{NO}]^2 [\\text{O}_2]}{[\\text{NO}_2]^2}$.",
      "2. Rearrange for $[\\text{NO}]^2$: $[\\text{NO}]^2 = \\frac{K_c [\\text{NO}_2]^2}{[\\text{O}_2]} = \\frac{(7.5 \\times 10^{-6})(0.40)^2}{0.050} = \\frac{(7.5 \\times 10^{-6})(0.16)}{0.050} = \\frac{1.20 \\times 10^{-6}}{0.050} = 2.40 \\times 10^{-5}\\text{ M}^2$.",
      "3. Take square root: $[\\text{NO}] = \\sqrt{2.40 \\times 10^{-5}} \\approx 4.899 \\times 10^{-3}\\text{ M} \\approx 4.90 \\times 10^{-3}\\text{ M}$."
    ],
    "stepByStepSolutionAr": [
      "١. تعبير ثابت الاتزان: $K_c = \\frac{[\\text{NO}]^2 [\\text{O}_2]}{[\\text{NO}_2]^2}$.",
      "٢. عزل $[\\text{NO}]^2$: $[\\text{NO}]^2 = \\frac{7.5 \\times 10^{-6} \\times (0.40)^2}{0.050} = 2.40 \\times 10^{-5}$.",
      "٣. أخذ الجذر التربيعي: $[\\text{NO}] = \\sqrt{2.40 \\times 10^{-5}} = 4.90 \\times 10^{-3}\\text{ مولار}$."
    ],
    "teacherTipEn": "Always remember to square the NO2 concentration in the denominator and take the square root of [NO]^2.",
    "teacherTipAr": "انتبه لتربيع تركيز NO2 في المقام وأخذ الجذر التربيعي لتركيز [NO]^2 في الخطوة الأخيرة."
  },
  {
    "id": "egbac_chem_ch2_ex_13",
    "titleEn": "Equilibrium Quotient Perturbation by Solvent Dilution",
    "titleAr": "اضطراب حاصل التفاعل عند تخفيف المحلول بالماء المقطر",
    "difficulty": "medium",
    "questionEn": "In an aqueous solution at dynamic equilibrium: $\\text{Fe}^{3+}(aq) \\; (\\text{yellow}) + \\text{SCN}^-(aq) \\; (\\text{colorless}) \\rightleftharpoons [\\text{Fe(SCN)}]^{2+}(aq) \\; (\\text{blood red})$. If pure distilled water is added to double the solution volume at constant temperature, what happens to the red color intensity?",
    "questionAr": "في محلول مائي عند حالة اتزان ديناميكي: $\\text{Fe}^{3+}(aq) \\; (\\text{أصفر}) + \\text{SCN}^-(aq) \\; (\\text{عديم اللون}) \\rightleftharpoons [\\text{Fe(SCN)}]^{2+}(aq) \\; (\\text{أحمر دموي})$. إذا أُضيف ماء مقطر لمضاعفة حجم المحلول إلى المثلين عند ثبوت الحرارة، ماذا يحدث لشدة اللون الأحمر؟",
    "optionsEn": [
      "The red color darkens dramatically because water complexes with iron.",
      "The red color stays perfectly identical in optical absorption.",
      "The red color lightens because dilution shifts the equilibrium in the reverse direction toward more dissociated ions.",
      "A blood-red precipitate falls out of solution."
    ],
    "optionsAr": [
      "تزداد شدة اللون الأحمر قتامة لأن الماء يكون متراكباً مع الحديد.",
      "تظل شدة اللون الأحمر ثابتة دون أي تغير في الامتصاص الضوئي.",
      "تخف شدة اللون الأحمر لأن التخفيف بالماء يزيح موضع الاتزان عكسياً نحو تفكك المعقد إلى أيونات منفصلة.",
      "يترسب راسب أحمر دموي في قاع الأنبوبة."
    ],
    "correctAnswer": "The red color lightens because dilution shifts the equilibrium in the reverse direction toward more dissociated ions.",
    "correctIndex": 2,
    "hintEn": "Dilution cuts all concentrations by 2. Q_c = (0.5 [FeSCN]) / (0.5 [Fe] * 0.5 [SCN]) = 2 K_c > K_c. System shifts left (reverse).",
    "hintAr": "التخفيف يخفض التراكيز للنصف: Q_c = (1/2) / ((1/2)*(1/2)) = 2 K_c. وبما أن Q_c > K_c يزاح التفاعل عكسياً نحو اليسار.",
    "stepByStepSolutionEn": [
      "1. Adding water doubles volume $V \\to 2V$, halving all molar concentrations: $c \\to c/2$.",
      "2. Evaluate reaction quotient: $Q_c = \\frac{[[\\text{Fe(SCN)}]^{2+}]/2}{([\\text{Fe}^{3+}]/2)([\\text{SCN}^-]/2)} = \\frac{1/2}{1/4} K_c = 2 K_c$.",
      "3. Because $Q_c > K_c$, the system shifts in the reverse direction to consume $[\\text{Fe(SCN)}]^{2+}$ and regenerate dissociated ions (shifting toward the side with more solute particles).",
      "4. Both the physical dilution and the chemical shift decrease $[[\\text{Fe(SCN)}]^{2+}]$, causing the blood-red color to become noticeably lighter."
    ],
    "stepByStepSolutionAr": [
      "١. مضاعفة حجم المحلول بالماء تخفض تراكيز جميع الأيونات إلى النصف.",
      "٢. حاصل التفاعل بعد التخفيف: $Q_c = \\frac{(1/2)}{(1/2)(1/2)} K_c = 2 K_c$.",
      "٣. بما أن $Q_c > K_c$، يزاح الاتزان عكسياً نحو تفكك المعقد (نحو الطرف ذي عدد الأيونات الأكثر في المحلول).",
      "٤. نتيجة للتخفيف الفيزيائي والانزياح الكيميائي معاً، يقل تركيز المعقد الأحمر ويصبح اللون أفتح بكثير."
    ],
    "teacherTipEn": "Diluting a solution equilibrium shifts the system toward the side with more dissolved solute particles (analogous to gas volume expansion).",
    "teacherTipAr": "تخفيف الاتزان في المحاليل المائية يزيح النظام دائماً نحو الطرف الذي يحتوي على عدد أكبر من الجسيمات المذابة."
  },
  {
    "id": "egbac_chem_ch2_ex_14",
    "titleEn": "Equilibrium Constant Kp and Total Pressure at High Dissociation",
    "titleAr": "حساب Kp للتفكك بنسبة مئوية محددة عند ضغط معلوم",
    "difficulty": "hots",
    "questionEn": "At $200^\\circ\\text{C}$ and a total pressure of $P = 2.00\\text{ atm}$, phosphorus pentachloride is $50.0\\%$ dissociated into phosphorus trichloride and chlorine: $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$. Calculate the value of $K_p$ at this temperature.",
    "questionAr": "عند $200^\\circ\\text{C}$ وتحت ضغط كلي $P = 2.00\\text{ atm}$، وُجد أن خامس كلوريد الفوسفور يتفكك بنسبة $50.0\\%$ إلى ثالث كلوريد الفوسفور وغاز الكلور: $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$. احسب قيمة ثابت الاتزان $K_p$ عند هذه الدرجة.",
    "optionsEn": [
      "$K_p = 1.333\\text{ atm}$",
      "$K_p = 0.333\\text{ atm}$",
      "$K_p = 2.000\\text{ atm}$",
      "$K_p = 0.667\\text{ atm} \\; (2/3\\text{ atm})$"
    ],
    "optionsAr": [
      "$K_p = 1.333\\text{ ضغط جوي}$",
      "$K_p = 0.333\\text{ ضغط جوي}$",
      "$K_p = 2.000\\text{ ضغط جوي}$",
      "$K_p = 0.667\\text{ ضغط جوي} \\; (2/3\\text{ ضغط جوي})$"
    ],
    "correctAnswer": "$K_p = 0.667\\text{ atm} \\; (2/3\\text{ atm})$",
    "correctIndex": 3,
    "hintEn": "Using alpha = 0.50: n_total = 1 + alpha = 1.50. Mole fractions: x(PCl5) = (1-alpha)/1.5 = 0.5/1.5 = 1/3, x(PCl3) = x(Cl2) = 0.5/1.5 = 1/3. Kp = (P*x1 * P*x2) / (P*x_PCl5).",
    "hintAr": "بدرجة تفكك alpha = 0.50: الكسر المولي لكل من الغازات الثلاثة = 1/3. الضغوط الجزئية = 2/3 atm لكل غاز. Kp = (2/3 * 2/3) / (2/3) = 2/3 atm.",
    "stepByStepSolutionEn": [
      "1. Let initial moles of $\\text{PCl}_5 = 1.00$. At $50\\%$ dissociation ($\\alpha = 0.50$):\n   - $n(\\text{PCl}_5) = 1 - 0.50 = 0.50\\text{ mol}$\n   - $n(\\text{PCl}_3) = 0.50\\text{ mol}$\n   - $n(\\text{Cl}_2) = 0.50\\text{ mol}$\n   - $n_{\\text{total}} = 0.50 + 0.50 + 0.50 = 1.50\\text{ mol}$.",
      "2. Mole fractions: $\\chi_{\\text{PCl}_5} = \\chi_{\\text{PCl}_3} = \\chi_{\\text{Cl}_2} = \\frac{0.50}{1.50} = \\frac{1}{3}$.",
      "3. Partial pressures at $P = 2.00\\text{ atm}$: $P_i = \\chi_i \\times P = \\frac{1}{3} \\times 2.00 = \\frac{2}{3}\\text{ atm}$ for each of the three gases.",
      "4. Calculate $K_p$: $K_p = \\frac{P_{\\text{PCl}_3} \\cdot P_{\\text{Cl}_2}}{P_{\\text{PCl}_5}} = \\frac{(2/3)(2/3)}{2/3} = \\frac{2}{3}\\text{ atm} \\approx 0.667\\text{ atm}$."
    ],
    "stepByStepSolutionAr": [
      "١. بفرض وجود مول واحد ابتدائياً وتفكك $50\\%$ ($\\alpha = 0.50$):\n   المولات عند الاتزان: $\\text{PCl}_5 = 0.50$، $\\text{PCl}_3 = 0.50$، $\\text{Cl}_2 = 0.50$؛ والمجموع $= 1.50\\text{ mol}$.",
      "٢. الكسور المولية: الكسر المولي لكل غاز $= 0.50 / 1.50 = 1/3$.",
      "٣. الضغوط الجزئية عند ضغط كلي $2.00\\text{ atm}$: ضغط كل غاز $= (1/3) \\times 2.00 = 2/3\\text{ atm}$.",
      "٤. حساب ثابت الاتزان: $K_p = \\frac{(2/3)(2/3)}{2/3} = 2/3 \\approx 0.667\\text{ atm}$."
    ],
    "teacherTipEn": "Expressing partial pressures as mole fraction times total pressure (Dalton's law) is the most robust method for gas dissociation equilibria.",
    "teacherTipAr": "التعبير عن الضغوط الجزئية بحاصل ضرب الكسر المولي في الضغط الكلي (قانون دالتون) هو الطريقة الأكثر موثوقية لحسابات اتزان الغازات."
  },
  {
    "id": "egbac_chem_ch2_ex_15",
    "titleEn": "Dynamic Nature of Chemical Equilibrium: Isotopic Tracer Proof",
    "titleAr": "الطبيعة الديناميكية للاتزان الكيميائي: الإثبات بالنظائر المشعة",
    "difficulty": "easy",
    "questionEn": "A closed flask contains the system $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ at dynamic equilibrium. A small quantity of radioactive iodine tracer $^{131}\\text{I}_2$ is injected without altering volume or temperature. What observation conclusively proves that chemical equilibrium is dynamic rather than static?",
    "questionAr": "يحتوي وعاء مغلق على نظام $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ في حالة اتزان ديناميكي. حُقنت كمية ضئيلة من اليود المشع $^{131}\\text{I}_2$ دون تغيير الحجم أو الحرارة. ما الملاحظة التي تثبت بصورة قاطعة أن الاتزان الكيميائي ديناميكي متحرك وليس ساكناً؟",
    "optionsEn": [
      "Radioactivity rapidly appears within the hydrogen iodide molecules ($\text{H}^{131}\\text{I}$) while total macroscopic concentrations remain completely constant.",
      "All the hydrogen iodide immediately decomposes into elements.",
      "Radioactivity remains permanently confined strictly to elemental iodine $\\text{I}_2$.",
      "The total pressure in the vessel doubles instantly."
    ],
    "optionsAr": [
      "ظهور النشاط الإشعاعي سريعاً داخل جزيئات يوديد الهيدروجين ($\text{H}^{131}\\text{I}$) مع بقاء التراكيز العيانية الكلية ثابتة تماماً دون تغير.",
      "تفكك جميع جزيئات يوديد الهيدروجين فورياً إلى عناصرها الأولية.",
      "بقاء النشاط الإشعاعي محصوراً فقط داخل جزيئات اليود $\\text{I}_2$ دون أن ينتقل إلى HI.",
      "تضاعف الضغط الكلي داخل الوعاء بشكل فوري."
    ],
    "correctAnswer": "Radioactivity rapidly appears within the hydrogen iodide molecules ($\text{H}^{131}\\text{I}$) while total macroscopic concentrations remain completely constant.",
    "correctIndex": 0,
    "hintEn": "If equilibrium were static, no reaction would occur and 131-I would stay in I2. In dynamic equilibrium, forward and reverse reactions continuously swap atoms.",
    "hintAr": "لو كان الاتزان ساكناً لما انتقل اليود المشع إلى HI. لكن في الاتزان الديناميكي تستمر التفاعلات الأمامية والعكسية بتبادل الذرات باستمرار.",
    "stepByStepSolutionEn": [
      "1. At dynamic equilibrium, the forward and reverse reaction rates are non-zero and exactly equal ($r_{\\text{fwd}} = r_{\\text{rev}} > 0$).",
      "2. If the equilibrium were static (reactions stopped), the injected $^{131}\\text{I}_2$ would never react, and no radioactivity would ever appear in $\\text{HI}$.",
      "3. The rapid detection of radioactive $^{131}\\text{I}$ in synthesized $\\text{H}^{131}\\text{I}$ molecules proves conclusively that forward and reverse chemical reactions continue to occur at equal rates on the microscopic molecular scale."
    ],
    "stepByStepSolutionAr": [
      "١. في الاتزان الديناميكي، تكون سرعتا التفاعل الطردي والعكسي متساويتين وغير منعدمتين ($r_{\\text{fwd}} = r_{\\text{rev}} > 0$).",
      "٢. لو كان الاتزان ساكناً ومتوقفاً، لبقي اليود المشع المحقون محصوراً في صورة جزيئات $\\text{I}_2$ فقط ولم يدخل في تركيب HI.",
      "٣. الانتقال السريع لذرات اليود المشع إلى جزيئات $\\text{H}^{131}\\text{I}$ يبرهن قاطعاً على استمرار حدوث التفاعلين الأمامي والعكسي مجهرياً على المستوى الجزيئي."
    ],
    "teacherTipEn": "This elegant isotopic exchange experiment provides direct empirical proof of the continuous dynamic nature of chemical equilibrium.",
    "teacherTipAr": "توفر تجربة التبادل النظائري المشع دليلاً تجريبياً مباشراً وقاطعاً على حركية وديناميكية الاتزان الكيميائي."
  }
];
