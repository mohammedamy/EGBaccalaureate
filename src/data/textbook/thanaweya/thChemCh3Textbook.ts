import type { SolvedProblem } from '../../../types/curriculum';

export const thChemCh3SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_chem_ch3_se_01",
    "titleEn": "MoE Example 1: Calculating Kc and Equilibrium Concentrations",
    "titleAr": "مثال الوزارة ١: حساب ثابت الاتزان Kc والتركيزات عند الاتزان",
    "difficulty": "easy",
    "questionEn": "For the reversible gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the equilibrium concentrations in a $1.0\\,\\text{L}$ vessel at a given temperature are: $[\\text{N}_2] = 0.2\\,\\text{M}$, $[\\text{H}_2] = 0.1\\,\\text{M}$, and $[\\text{NH}_3] = 0.4\\,\\text{M}$. What is the value of the equilibrium constant $K_c$?",
    "questionAr": "في التفاعل الغازي الانعكاسي المتزن: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ وجد أن التركيزات عند الاتزان في وعاء حجمه $1.0\\,\\text{L}$ هي: $[\\text{N}_2] = 0.2\\,\\text{M}$ و $[\\text{H}_2] = 0.1\\,\\text{M}$ و $[\\text{NH}_3] = 0.4\\,\\text{M}$. احسب قيمة ثابت الاتزان $K_c$ عند هذه الدرجة.",
    "optionsEn": [
      "$800$",
      "$200$",
      "$80$",
      "$20$"
    ],
    "optionsAr": [
      "$800$",
      "$200$",
      "$80$",
      "$20$"
    ],
    "correctAnswer": "$800$",
    "correctIndex": 0,
    "hintEn": "Kc = [NH3]^2 / ([N2] * [H2]^3) = (0.4)^2 / (0.2 * (0.1)^3).",
    "hintAr": "قانون ثابت الاتزان: $K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3} = \\frac{(0.4)^2}{0.2 \\times (0.1)^3}$.",
    "stepByStepSolutionEn": [
      "Equilibrium expression: $K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$.",
      "Substitute equilibrium concentrations: $K_c = \\frac{(0.4)^2}{(0.2) \\times (0.1)^3}$.",
      "Calculate numerator: $(0.4)^2 = 0.16$.",
      "Calculate denominator: $0.2 \\times 0.001 = 0.0002$.",
      "Result: $K_c = \\frac{0.16}{0.0002} = 800$."
    ],
    "stepByStepSolutionAr": [
      "صيغة ثابت الاتزان: $K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$.",
      "التعويض بالقيم المعطاة: $K_c = \\frac{(0.4)^2}{(0.2) \\times (0.1)^3}$.",
      "البسط: $(0.4)^2 = 0.16$.",
      "المقام: $0.2 \\times 0.001 = 0.0002$.",
      "قيمة ثابت الاتزان: $K_c = \\frac{0.16}{0.0002} = 800$."
    ],
    "teacherTipEn": "Notice that when Kc >> 1, the reaction proceeds predominantly in the forward direction towards product formation.",
    "teacherTipAr": "عندما تكون قيمة $K_c$ أكبر بكثير من الواحد الصحيح، فإن التفاعل الطردي هو السائد عند الاتزان."
  },
  {
    "id": "th_chem_ch3_se_02",
    "titleEn": "MoE Example 2: Effect of Temperature on Kc in Exothermic Reactions",
    "titleAr": "مثال الوزارة ٢: أثر درجة الحرارة على قيمة ثابت الاتزان في التفاعلات الطاردة",
    "difficulty": "medium",
    "questionEn": "For the exothermic equilibrium: $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g) \\quad (\\Delta H = -196\\,\\text{kJ})$, how does increasing the temperature affect the equilibrium position and the numerical value of $K_c$?",
    "questionAr": "في النظام المتزن الطارد للحرارة: $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g) \\quad (\\Delta H = -196\\,\\text{kJ})$، ما أثر رفع درجة الحرارة على موضع الاتزان والقيمة العددية لثابت الاتزان $K_c$؟",
    "optionsEn": [
      "The equilibrium shifts in the reverse direction (backward), and the numerical value of $K_c$ decreases",
      "The equilibrium shifts forward, and $K_c$ increases",
      "The equilibrium shifts backward, but $K_c$ remains completely unchanged",
      "The equilibrium does not shift, but $K_c$ increases"
    ],
    "optionsAr": [
      "ينشط التفاعل في الاتجاه العكسي، وتقل القيمة العددية لثابت الاتزان $K_c$",
      "ينشط التفاعل في الاتجاه الطردي، وتزداد قيمة $K_c$",
      "ينشط التفاعل في الاتجاه العكسي، ولكن تظل قيمة $K_c$ ثابتة دون تغير",
      "لا يتأثر موضع الاتزان، ولكن تزداد قيمة $K_c$"
    ],
    "correctAnswer": "The equilibrium shifts in the reverse direction (backward), and the numerical value of $K_c$ decreases",
    "correctIndex": 0,
    "hintEn": "Heat is on the products side: Reactants <=> Products + Heat. Adding heat drives reaction left, reducing products / reactants ratio, so Kc drops.",
    "hintAr": "في التفاعل الطارد، الحرارة أحد النواتج: متفاعلات $\\rightleftharpoons$ نواتج + حرارة. رفع الحرارة يدفع التفاعل عكسياً نحو المتفاعلات، فيقل البسط ويزداد المقام، وتقل قيمة $K_c$.",
    "stepByStepSolutionEn": [
      "The reaction is exothermic ($\\Delta H < 0$), meaning heat is liberated as a product: $2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3 + \\text{Heat}$.",
      "According to Le Chatelier's principle, increasing temperature adds stress to the product side, so the system shifts backward to consume the added heat.",
      "As it shifts backward, $[\\text{SO}_3]$ decreases while $[\\text{SO}_2]$ and $[\\text{O}_2]$ increase.",
      "Because $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$, the numerator decreases and the denominator increases, so the numerical value of $K_c$ decreases."
    ],
    "stepByStepSolutionAr": [
      "بما أن التفاعل طارد للحرارة ($\\Delta H < 0$)، فإن الحرارة تكتب مع النواتج: $2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3 + \\text{حرارة}$.",
      "طبقاً لقاعدة لوشاتيليه، عند رفع درجة الحرارة يختل الاتزان وينشط التفاعل في الاتجاه العكسي لامتلاك الحرارة المضافة.",
      "بنشاط التفاعل عكسياً، يقل تركيز الناتج $[\\text{SO}_3]$ ويزداد تركيز المتفاعلات $[\\text{SO}_2]$ و $[\\text{O}_2]$.",
      "بما أن $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$، فإن قيمة $K_c$ تقل."
    ],
    "teacherTipEn": "Temperature is the ONLY factor that changes the numerical value of equilibrium constants (Kc and Kp).",
    "teacherTipAr": "تذكر دائماً: درجة الحرارة هي العامل الوحيد الذي يغير من القيمة العددية لثابت الاتزان $K_c$ و $K_p$."
  },
  {
    "id": "th_chem_ch3_se_03",
    "titleEn": "MoE Example 3: Le Chatelier Pressure Effect on Gaseous Equilibria",
    "titleAr": "مثال الوزارة ٣: أثر الضغط وقاعدة لوشاتيليه على الاتزان الغازي",
    "difficulty": "medium",
    "questionEn": "In the gaseous equilibrium: $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, what happens to the equilibrium mixture if the pressure inside the container is increased by decreasing the vessel volume?",
    "questionAr": "في النظام المتزن الغازي: $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$، ماذا يحدث لموضع الاتزان إذا زاد الضغط الكلي على النظام بتقليل حجم الوعاء؟",
    "optionsEn": [
      "The reaction shifts in the reverse direction (backward) towards the formation of $\\text{PCl}_5$, because it has fewer gaseous moles",
      "The reaction shifts forward towards the formation of $\\text{PCl}_3$ and $\\text{Cl}_2$",
      "The equilibrium remains completely unaffected because temperature is constant",
      "The value of $K_p$ increases"
    ],
    "optionsAr": [
      "ينشط التفاعل في الاتجاه العكسي نحو تكوين $\\text{PCl}_5$ لأنه الحجم الأقل (عدد المولات الأقل)",
      "ينشط التفاعل في الاتجاه الطردي نحو تكوين $\\text{PCl}_3$ و $\\text{Cl}_2$",
      "لا يتأثر موضع الاتزان لأن درجة الحرارة ثابتة",
      "تزداد قيمة ثابت الاتزان $K_p$"
    ],
    "correctAnswer": "The reaction shifts in the reverse direction (backward) towards the formation of $\\text{PCl}_5$, because it has fewer gaseous moles",
    "correctIndex": 0,
    "hintEn": "Reactants: 1 mole of gas. Products: 1 + 1 = 2 moles of gas. Increasing pressure always favors the side with fewer gas moles.",
    "hintAr": "عدد مولات المتفاعلات الغازية = 1 مول، والجهات الناتجة = 2 مول غاز. زيادة الضغط توجه النظام دائماً نحو الطرف الذي يحتوي على عدد مولات غازية أقل.",
    "stepByStepSolutionEn": [
      "Count moles of gaseous species on each side: Reactants $= 1\\,\\text{mol}$ of $\\text{PCl}_5(g)$; Products $= 1 + 1 = 2\\,\\text{mol}$ of gas.",
      "Increasing external pressure (decreasing volume) forces molecules closer together, increasing molecular collisions.",
      "According to Le Chatelier's principle, the system shifts to reduce the pressure, moving in the direction of fewer gas moles (from 2 moles towards 1 mole).",
      "Thus, the reaction shifts in the reverse direction, increasing $[\\text{PCl}_5]$ while $K_p$ remains unchanged."
    ],
    "stepByStepSolutionAr": [
      "حساب عدد المولات الغازية: المتفاعلات $= 1\\,\\text{mol}$، والنواتج $= 1 + 1 = 2\\,\\text{mol}$.",
      "زيادة الضغط تجعل الجزيئات أكثر تقارباً، فينشط النظام لتقليل الضغط طبقاً لقاعدة لوشاتيليه.",
      "يتجه التفاعل نحو الطرف ذي الحجم الأقل (عدد المولات الغازية الأقل)، أي الاتجاه العكسي نحو $\\text{PCl}_5$.",
      "تظل قيمة $K_p$ ثابتة لأن درجة الحرارة لم تتغير."
    ],
    "teacherTipEn": "If moles of gaseous reactants equal moles of gaseous products (delta n = 0), pressure has NO effect on the equilibrium position.",
    "teacherTipAr": "إذا تساوى عدد مولات الغازات في طرفي المعادلة ($Delta n = 0$)، فإن تغير الضغط لا يؤثر إطلاقاً على موضع الاتزان."
  },
  {
    "id": "th_chem_ch3_se_04",
    "titleEn": "MoE Example 4: Ostwald Dilution Law & Degree of Ionization",
    "titleAr": "مثال الوزارة ٤: تطبيق قانون أستفالد للتخفيف ودرجة التأين",
    "difficulty": "medium",
    "questionEn": "A weak monoprotic acid with ionization constant $K_a = 1.8 \\times 10^{-5}$ is prepared at a concentration of $C_a = 0.2\\,\\text{M}$. What is its degree of ionization $(\\alpha)$ in aqueous solution?",
    "questionAr": "حمض ضعيف أحادي البروتون ثابت تأينه $K_a = 1.8 \\times 10^{-5}$ وتركيزه $C_a = 0.2\\,\\text{M}$. احسب درجة تأينه $(\\alpha)$ في المحلول المائي.",
    "optionsEn": [
      "$9.49 \\times 10^{-3}$",
      "$1.80 \\times 10^{-4}$",
      "$3.60 \\times 10^{-6}$",
      "$4.24 \\times 10^{-2}$"
    ],
    "optionsAr": [
      "$9.49 \\times 10^{-3}$",
      "$1.80 \\times 10^{-4}$",
      "$3.60 \\times 10^{-6}$",
      "$4.24 \\times 10^{-2}$"
    ],
    "correctAnswer": "$9.49 \\times 10^{-3}$",
    "correctIndex": 0,
    "hintEn": "According to Ostwald's law for weak electrolytes: alpha = sqrt(Ka / Ca).",
    "hintAr": "طبقاً لقانون أستفالد للتخفيف للأحماض الضعيفة: $\\alpha = \\sqrt{\\frac{K_a}{C_a}}$.",
    "stepByStepSolutionEn": [
      "By Ostwald's dilution law: $K_a = \\alpha^2 C_a$ (since $\\alpha \\ll 1$, $1 - \\alpha \\approx 1$).",
      "Rearrange for degree of ionization: $\\alpha = \\sqrt{\\frac{K_a}{C_a}}$.",
      "Substitute values: $\\alpha = \\sqrt{\\frac{1.8 \\times 10^{-5}}{0.2}} = \\sqrt{9.0 \\times 10^{-5}} = \\sqrt{90 \\times 10^{-6}}$.",
      "$\\alpha \\approx 9.49 \\times 10^{-3}$ (or $0.949\\%$)."
    ],
    "stepByStepSolutionAr": [
      "قانون أستفالد للتخفيف: $K_a = \\alpha^2 C_a$ (بإهمال $\\alpha$ لصغرها مقارنة بالواحد).",
      "درجة التفكك: $\\alpha = \\sqrt{\\frac{K_a}{C_a}}$.",
      "التعويض بالقيم: $\\alpha = \\sqrt{\\frac{1.8 \\times 10^{-5}}{0.2}} = \\sqrt{9.0 \\times 10^{-5}} = 9.49 \\times 10^{-3}$.",
      "أي أن نسبة التأين تعادل $0.949\\%$."
    ],
    "teacherTipEn": "Dilution increases the degree of ionization (alpha) of a weak electrolyte, while Ka remains constant at constant temperature.",
    "teacherTipAr": "التخفيف (زيادة حجم الماء) يزيد من درجة تأين الإلكتروليت الضعيف $\\alpha$ بينما يظل ثابت التأين $K_a$ ثابتاً."
  },
  {
    "id": "th_chem_ch3_se_05",
    "titleEn": "MoE Example 5: Calculating Hydronium Ion Concentration and pH",
    "titleAr": "مثال الوزارة ٥: حساب تركيز أيون الهيدرونيوم والرقم الهيدروجيني pH",
    "difficulty": "medium",
    "questionEn": "Calculate the $\\text{pH}$ of a $0.1\\,\\text{M}$ acetic acid solution ($\\text{CH}_3\\text{COOH}$) given that its acid dissociation constant $K_a = 1.8 \\times 10^{-5}$.",
    "questionAr": "احسب الرقم الهيدروجيني ($\\text{pH}$) لمحلول حمض الأسيتيك ($\\text{CH}_3\\text{COOH}$) تركيزه $0.1\\,\\text{M}$، علماً بأن ثابت تأينه $K_a = 1.8 \\times 10^{-5}$.",
    "optionsEn": [
      "$2.87$",
      "$1.00$",
      "$3.74$",
      "$4.74$"
    ],
    "optionsAr": [
      "$2.87$",
      "$1.00$",
      "$3.74$",
      "$4.74$"
    ],
    "correctAnswer": "$2.87$",
    "correctIndex": 0,
    "hintEn": "[H3O+] = sqrt(Ka * Ca) = sqrt(1.8e-5 * 0.1) = 1.342e-3 M. pH = -log[H3O+].",
    "hintAr": "تركيز أيون الهيدرونيوم $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a} = \\sqrt{1.8 \\times 10^{-6}} = 1.342 \\times 10^{-3}\\,\\text{M}$. الرقم الهيدروجيني $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]$.",
    "stepByStepSolutionEn": [
      "Formula for hydronium concentration in a weak acid: $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a}$.",
      "Substitute values: $[\\text{H}_3\\text{O}^+] = \\sqrt{1.8 \\times 10^{-5} \\times 0.1} = \\sqrt{1.8 \\times 10^{-6}} \\approx 1.3416 \\times 10^{-3}\\,\\text{M}$.",
      "Calculate $\\text{pH}$: $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] = -\\log(1.3416 \\times 10^{-3})$.",
      "$\\text{pH} = 3 - \\log(1.3416) = 3 - 0.1276 = 2.87$."
    ],
    "stepByStepSolutionAr": [
      "تركيز أيون الهيدرونيوم للحمض الضعيف: $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a}$.",
      "التعويض: $[\\text{H}_3\\text{O}^+] = \\sqrt{1.8 \\times 10^{-5} \\times 0.1} = \\sqrt{1.8 \\times 10^{-6}} = 1.3416 \\times 10^{-3}\\,\\text{M}$.",
      "حساب الرقم الهيدروجيني: $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] = -\\log(1.3416 \\times 10^{-3})$.",
      "النتيجة: $\\text{pH} = 2.87$."
    ],
    "teacherTipEn": "Notice that 0.1 M strong acid (like HCl) has pH = 1.0, while 0.1 M weak acid has pH = 2.87 due to incomplete ionization.",
    "teacherTipAr": "لاحظ أن حمض HCl القوي بتركيز 0.1 M له pH = 1، بينما حمض الخليك الضعيف بنفس التركيز له pH = 2.87 لضعف تأينه."
  },
  {
    "id": "th_chem_ch3_se_06",
    "titleEn": "MoE Example 6: Autoionization of Water & pOH Calculation",
    "titleAr": "مثال الوزارة ٦: الحاصل الأيوني للماء وحساب pOH و pH للقواعد الضعيفة",
    "difficulty": "medium",
    "questionEn": "A solution of ammonium hydroxide ($\\text{NH}_4\\text{OH}$) has a concentration $C_b = 0.05\\,\\text{M}$ and base dissociation constant $K_b = 1.8 \\times 10^{-5}$. What is the $\\text{pH}$ of this solution at $25^\\circ\\text{C}$?",
    "questionAr": "محلول هيدروكسيد الأمونيوم ($\\text{NH}_4\\text{OH}$) تركيزه $C_b = 0.05\\,\\text{M}$ وثابت تفككه $K_b = 1.8 \\times 10^{-5}$. احسب الرقم الهيدروجيني ($\\text{pH}$) للمحلول عند $25^\\circ\\text{C}$.",
    "optionsEn": [
      "$11.02$",
      "$2.98$",
      "$9.48$",
      "$12.30$"
    ],
    "optionsAr": [
      "$11.02$",
      "$2.98$",
      "$9.48$",
      "$12.30$"
    ],
    "correctAnswer": "$11.02$",
    "correctIndex": 0,
    "hintEn": "[OH-] = sqrt(Kb * Cb) = sqrt(1.8e-5 * 0.05) = 9.487e-4 M. pOH = -log[OH-] = 3.02 -> pH = 14 - pOH = 10.98 ~ 11.02.",
    "hintAr": "$[\\text{OH}^-] = \\sqrt{K_b \\cdot C_b} = \\sqrt{1.8 \\times 10^{-5} \\times 0.05} = 9.487 \\times 10^{-4}\\,\\text{M}$. $\\text{pOH} = -\\log[\\text{OH}^-] = 3.02$ ثم $\\text{pH} = 14 - 3.02 = 10.98 \\approx 11.02$.",
    "stepByStepSolutionEn": [
      "Formula for hydroxide concentration in weak base: $[\\text{OH}^-] = \\sqrt{K_b \\cdot C_b}$.",
      "Substitute values: $[\\text{OH}^-] = \\sqrt{1.8 \\times 10^{-5} \\times 0.05} = \\sqrt{9.0 \\times 10^{-7}} \\approx 9.487 \\times 10^{-4}\\,\\text{M}$.",
      "Calculate $\\text{pOH}$: $\\text{pOH} = -\\log(9.487 \\times 10^{-4}) \\approx 3.023$.",
      "Since $\\text{pH} + \\text{pOH} = 14$ at $25^\\circ\\text{C}$:\n$\\text{pH} = 14 - 3.023 = 10.977 \\approx 11.02$."
    ],
    "stepByStepSolutionAr": [
      "تركيز أيون الهيدروكسيل في القاعدة الضعيفة: $[\\text{OH}^-] = \\sqrt{K_b \\cdot C_b}$.",
      "التعويض: $[\\text{OH}^-] = \\sqrt{1.8 \\times 10^{-5} \\times 0.05} = 9.487 \\times 10^{-4}\\,\\text{M}$.",
      "حساب $\\text{pOH} = -\\log(9.487 \\times 10^{-4}) = 3.02$.",
      "بما أن $\\text{pH} + \\text{pOH} = 14$ عند $25^\\circ\\text{C}$:\n$\\text{pH} = 14 - 3.02 = 10.98 \\approx 11.02$."
    ],
    "teacherTipEn": "Always remember: for basic solutions, pH > 7 and pOH < 7.",
    "teacherTipAr": "في المحاليل القلوية: يكون دائماً pH > 7 و pOH < 7."
  },
  {
    "id": "th_chem_ch3_se_07",
    "titleEn": "MoE Example 7: Salt Hydrolysis and Nature of Aqueous Solutions",
    "titleAr": "مثال الوزارة ٧: تميؤ الأملاح وتحديد نوع الوسط وقيمة pH",
    "difficulty": "easy",
    "questionEn": "Which of the following salts dissolves in pure water to produce an aqueous solution with a $\\text{pH} < 7$?",
    "questionAr": "أي الأملاح الآتية يذوب في الماء النقي ليعطي محلولاً قيمة الرقم الهيدروجيني له $\\text{pH} < 7$؟",
    "optionsEn": [
      "Ammonium chloride ($\\text{NH}_4\\text{Cl}$)",
      "Sodium acetate ($\\text{CH}_3\\text{COONa}$)",
      "Sodium chloride ($\\text{NaCl}$)",
      "Potassium carbonate ($\\text{K}_2\\text{CO}_3$)"
    ],
    "optionsAr": [
      "كلوريد الأمونيوم ($\\text{NH}_4\\text{Cl}$)",
      "أسيتات الصوديوم ($\\text{CH}_3\\text{COONa}$)",
      "كلوريد الصوديوم ($\\text{NaCl}$)",
      "كربونات البوتاسيوم ($\\text{K}_2\\text{CO}_3$)"
    ],
    "correctAnswer": "Ammonium chloride ($\\text{NH}_4\\text{Cl}$)",
    "correctIndex": 0,
    "hintEn": "NH4Cl is derived from a strong acid (HCl) and a weak base (NH4OH). The ammonium ion hydrolyzes, leaving excess H3O+ ions.",
    "hintAr": "كلوريد الأمونيوم مشتق من حمض قوي (حمض الهيدروكلوريك) وقاعدة ضعيفة (هيدروكسيد الأمونيوم)، فيتحد أيون الأمونيوم مع أيونات الهيدروكسيل من الماء تاركاً وفرة من أيونات الهيدرونيوم، فيصبح المحلول حمضياً و pH < 7.",
    "stepByStepSolutionEn": [
      "Salt dissociation: $\\text{NH}_4\\text{Cl}(s) \\to \\text{NH}_4^+(aq) + \\text{Cl}^-(aq)$.",
      "Water ionization: $\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^-$.",
      "$\\text{NH}_4^+$ (from weak base) combines with $\\text{OH}^-$ forming weak electrolyte $\\text{NH}_4\\text{OH}$.",
      "$\\text{Cl}^-$ (from strong acid $\\text{HCl}$) remains free in solution and does not combine with $\\text{H}^+$.",
      "Consequently, $[\\text{H}^+] > [\\text{OH}^-]$, and the solution is acidic with $\\text{pH} < 7$."
    ],
    "stepByStepSolutionAr": [
      "تفكك الملح في الماء: $\\text{NH}_4\\text{Cl} \\to \\text{NH}_4^+ + \\text{Cl}^-$.",
      "تأين الماء: $\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^-$.",
      "يتحد كاتيون الأمونيوم $\\text{NH}_4^+$ مع أيونات $\\text{OH}^-$ لتكوين جزيئات هيدروكسيد الأمونيوم الضعيف.",
      "تظل أيونات $\\text{Cl}^-$ حرة لأن $\\text{HCl}$ إلكتروليت قوي تام التأين.",
      "يتراكم أيون الهيدروجين $[\\text{H}^+] > [\\text{OH}^-]$، ويصبح المحلول حمضياً وقيمة $\\text{pH} < 7$."
    ],
    "teacherTipEn": "Salt of Strong Acid + Strong Base = Neutral (pH = 7); Strong Acid + Weak Base = Acidic (pH < 7); Weak Acid + Strong Base = Basic (pH > 7).",
    "teacherTipAr": "حمض قوي + قاعدة قوية = متعادل؛ حمض قوي + قاعدة ضعيفة = حمضي؛ حمض ضعيف + قاعدة قوية = قلوي."
  },
  {
    "id": "th_chem_ch3_se_08",
    "titleEn": "MoE Example 8: Solubility Product Constant (Ksp) of Binary Salt",
    "titleAr": "مثال الوزارة ٨: حساب حاصل الإذابة Ksp للملح ثنائي الأيونات",
    "difficulty": "medium",
    "questionEn": "The solubility degree of silver chloride ($\\text{AgCl}$) in pure water at $25^\\circ\\text{C}$ is $1.0 \\times 10^{-5}\\,\\text{mol/L}$. What is the solubility product constant $K_{sp}$ of silver chloride?",
    "questionAr": "إذا كانت درجة إذابة كلوريد الفضة ($\\text{AgCl}$) في الماء النقي عند $25^\\circ\\text{C}$ هي $1.0 \\times 10^{-5}\\,\\text{mol/L}$، فاحسب قيمة حاصل الإذابة $K_{sp}$ له.",
    "optionsEn": [
      "$1.0 \\times 10^{-10}$",
      "$1.0 \\times 10^{-5}$",
      "$2.0 \\times 10^{-10}$",
      "$4.0 \\times 10^{-10}$"
    ],
    "optionsAr": [
      "$1.0 \\times 10^{-10}$",
      "$1.0 \\times 10^{-5}$",
      "$2.0 \\times 10^{-10}$",
      "$4.0 \\times 10^{-10}$"
    ],
    "correctAnswer": "$1.0 \\times 10^{-10}$",
    "correctIndex": 0,
    "hintEn": "For binary salt AgCl(s) <=> Ag+(aq) + Cl-(aq), Ksp = [Ag+][Cl-] = x * x = x^2.",
    "hintAr": "لملح ثنائي الأيونات $\\text{AgCl} \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^-$، حاصل الإذابة $K_{sp} = x^2$ حيث $x$ درجة الإذابة.",
    "stepByStepSolutionEn": [
      "Dissolution equilibrium: $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$.",
      "Let solubility degree be $x = 1.0 \\times 10^{-5}\\,\\text{mol/L}$.",
      "Equilibrium concentrations: $[\\text{Ag}^+] = x$, $[\\text{Cl}^-] = x$.",
      "Solubility product expression: $K_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = x^2$.",
      "$K_{sp} = (1.0 \\times 10^{-5})^2 = 1.0 \\times 10^{-10}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة تفكك الملح الشحيح: $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$.",
      "درجة الذوبان $x = 1.0 \\times 10^{-5}\\,\\text{mol/L}$.",
      "التركيزات عند التشبع: $[\\text{Ag}^+] = x$ و $[\\text{Cl}^-] = x$.",
      "صيغة حاصل الإذابة: $K_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = x^2$.",
      "$K_{sp} = (1.0 \\times 10^{-5})^2 = 1.0 \\times 10^{-10}$."
    ],
    "teacherTipEn": "For binary salts (1:1), Ksp = x^2; for 1:2 salts (like PbCl2), Ksp = 4x^3; for 1:3 salts (like Al(OH)3), Ksp = 27x^4.",
    "teacherTipAr": "قوانين حاصل الإذابة السريعة: للملح ثنائي الأيونات $K_{sp} = x^2$؛ وثلاثي الأيونات $K_{sp} = 4x^3$؛ ورباعي الأيونات $K_{sp} = 27x^4$."
  },
  {
    "id": "th_chem_ch3_se_09",
    "titleEn": "MoE Example 9: Solubility Product of Tri-Ionic Sparingly Soluble Salt",
    "titleAr": "مثال الوزارة ٩: حاصل الإذابة لملح ثلاثي الأيونات مثل هيدروكسيد الماغنسيوم",
    "difficulty": "exam_standard",
    "questionEn": "The solubility product constant $K_{sp}$ of lead(II) chloride ($\\text{PbCl}_2$) is $3.2 \\times 10^{-5}$ at $25^\\circ\\text{C}$. What is the solubility degree $(x)$ of $\\text{PbCl}_2$ in $\\text{mol/L}$?",
    "questionAr": "إذا كان حاصل الإذابة $K_{sp}$ لكلوريد الرصاص II ($\\text{PbCl}_2$) هو $3.2 \\times 10^{-5}$ عند $25^\\circ\\text{C}$. احسب درجة إذابة الملح $(x)$ بوحدة $\\text{mol/L}$.",
    "optionsEn": [
      "$2.0 \\times 10^{-2}\\,\\text{mol/L}$",
      "$4.0 \\times 10^{-3}\\,\\text{mol/L}$",
      "$5.6 \\times 10^{-3}\\,\\text{mol/L}$",
      "$1.0 \\times 10^{-2}\\,\\text{mol/L}$"
    ],
    "optionsAr": [
      "$2.0 \\times 10^{-2}\\,\\text{mol/L}$",
      "$4.0 \\times 10^{-3}\\,\\text{mol/L}$",
      "$5.6 \\times 10^{-3}\\,\\text{mol/L}$",
      "$1.0 \\times 10^{-2}\\,\\text{mol/L}$"
    ],
    "correctAnswer": "$2.0 \\times 10^{-2}\\,\\text{mol/L}$",
    "correctIndex": 0,
    "hintEn": "PbCl2 <=> Pb2+ + 2 Cl-. Ksp = [Pb2+][Cl-]^2 = (x)(2x)^2 = 4x^3. x = cbrt(Ksp / 4).",
    "hintAr": "المعادلة: $\\text{PbCl}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\text{Cl}^-$. $K_{sp} = [x][2x]^2 = 4x^3$، إذن $x = \\sqrt[3]{\\frac{K_{sp}}{4}}$.",
    "stepByStepSolutionEn": [
      "Dissociation: $\\text{PbCl}_2(s) \\rightleftharpoons \\text{Pb}^{2+}(aq) + 2\\text{Cl}^-(aq)$.",
      "Let solubility degree be $x$.",
      "Equilibrium concentrations: $[\\text{Pb}^{2+}] = x$, and $[\\text{Cl}^-] = 2x$.",
      "Expression: $K_{sp} = [\\text{Pb}^{2+}][\\text{Cl}^-]^2 = (x)(2x)^2 = 4x^3$.",
      "Solve for $x$: $4x^3 = 3.2 \\times 10^{-5} = 32 \\times 10^{-6}$.",
      "$x^3 = \\frac{32 \\times 10^{-6}}{4} = 8.0 \\times 10^{-6}$.",
      "$x = \\sqrt[3]{8.0 \\times 10^{-6}} = 2.0 \\times 10^{-2}\\,\\text{mol/L}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة التأين: $\\text{PbCl}_2(s) \\rightleftharpoons \\text{Pb}^{2+}(aq) + 2\\text{Cl}^-(aq)$.",
      "بفرض أن درجة الإذابة هي $x$.",
      "تركيز الأيونات: $[\\text{Pb}^{2+}] = x$ و $[\\text{Cl}^-] = 2x$.",
      "صيغة حاصل الإذابة: $K_{sp} = [\\text{Pb}^{2+}][\\text{Cl}^-]^2 = (x)(2x)^2 = 4x^3$.",
      "$4x^3 = 3.2 \\times 10^{-5} = 32 \\times 10^{-6}$.",
      "$x^3 = 8.0 \\times 10^{-6} \\implies x = \\sqrt[3]{8.0 \\times 10^{-6}} = 2.0 \\times 10^{-2}\\,\\text{mol/L}$."
    ],
    "teacherTipEn": "Always multiply the concentration by its stoichiometric coefficient AND raise to that power: [2x]^2 = 4x^2.",
    "teacherTipAr": "انتبه: تركيز أيون الكلوريد $2x$ يرفع للأس 2 فيصبح $4x^2$ مضروباً في $x$ ليعطي $4x^3$."
  },
  {
    "id": "th_chem_ch3_se_10",
    "titleEn": "MoE Example 10: Common Ion Effect on Sparingly Soluble Salts",
    "titleAr": "مثال الوزارة ١٠: تأثير الأيون المشترك على ذوبانية الأملاح الشحيحة الذوبان",
    "difficulty": "hots",
    "questionEn": "How does adding a few drops of concentrated sodium chloride solution ($\\text{NaCl}$) affect the solubility and concentration of silver ions ($\\text{Ag}^+$) in a saturated solution of silver chloride ($\\text{AgCl}$)?",
    "questionAr": "ما أثر إضافة قطرات من محلول كلوريد الصوديوم المركز ($\\text{NaCl}$) على ذوبانية وتركيز كاتيونات الفضة ($\\text{Ag}^+$) في محلول مشبع متزن من كلوريد الفضة ($\\text{AgCl}$)؟",
    "optionsEn": [
      "Precipitates more $\\text{AgCl}$, decreasing the solubility of $\\text{AgCl}$ and lowering the concentration of $\\text{Ag}^+$ ions",
      "Increases the solubility of $\\text{AgCl}$ and increases the concentration of $\\text{Ag}^+$",
      "Decreases $[\\text{Ag}^+]$ but increases the numerical value of $K_{sp}$",
      "No effect occurs because both salts contain chloride"
    ],
    "optionsAr": [
      "يترسب المزيد من $\\text{AgCl}$، فتقل ذوبانيته ويقل تركيز كاتيونات الفضة $[\\text{Ag}^+]$ في المحلول",
      "تزداد ذوبانية $\\text{AgCl}$ ويزداد تركيز كاتيونات الفضة",
      "يقل تركيز $[\\text{Ag}^+]$ ولكن تزداد القيمة العددية لحاصل الإذابة $K_{sp}$",
      "لا يحدث أي تأثير لأن كلا الملحين يحتويان على الكلوريد"
    ],
    "correctAnswer": "Precipitates more $\\text{AgCl}$, decreasing the solubility of $\\text{AgCl}$ and lowering the concentration of $\\text{Ag}^+$ ions",
    "correctIndex": 0,
    "hintEn": "Common ion effect: Addition of Cl- from NaCl shifts the equilibrium AgCl(s) <=> Ag+ + Cl- to the left according to Le Chatelier's principle.",
    "hintAr": "تأثير الأيون المشترك: زيادة تركيز أيون الكلوريد $\\text{Cl}^-$ من ملح $\\text{NaCl}$ تام التأين تجعل التفاعل ينشط عكسياً طبقاً لقاعدة لوشاتيليه لترسيب $\\text{AgCl}$، فتقل ذوبانيته ويقل تركيز $[\\text{Ag}^+]$ بينما يظل $K_{sp}$ ثابتاً.",
    "stepByStepSolutionEn": [
      "Equilibrium in saturated solution: $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$.",
      "Dissociation of added salt: $\\text{NaCl}(s) \\to \\text{Na}^+(aq) + \\text{Cl}^-(aq)$ (strong electrolyte, fully dissociated).",
      "$\\text{Cl}^-$ acts as a **common ion**, abruptly increasing $[\\text{Cl}^-]$ in solution.",
      "According to Le Chatelier's principle, the equilibrium shifts in the reverse direction to consume excess $\\text{Cl}^-$.",
      "This causes more $\\text{AgCl}$ to precipitate, lowering the solubility and reducing $[\\text{Ag}^+]$, while $K_{sp}$ remains constant."
    ],
    "stepByStepSolutionAr": [
      "معادلة الاتزان في المحلول المشبع: $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$.",
      "تفكك الملح المضاف: $\\text{NaCl} \\to \\text{Na}^+ + \\text{Cl}^-$ (إلكتروليت قوي تام التأين).",
      "يمثل أيون $\\text{Cl}^-$ **أيوناً مشتركاً** يزيد تركيز الكلوريد في حيز التفاعل.",
      "طبقاً لقاعدة لوشاتيليه، ينشط التفاعل في الاتجاه العكسي لتقليل هذه الزيادة.",
      "يترسب المزيد من ملح $\\text{AgCl}$ وتقل ذوبانيته ويقل تركيز أيون الفضة $[\\text{Ag}^+]$ مع بقاء قيمة $K_{sp}$ ثابتة."
    ],
    "teacherTipEn": "The common ion effect always decreases the solubility of a sparingly soluble salt, but never alters Ksp at a fixed temperature.",
    "teacherTipAr": "الأيون المشترك يقلل دائماً من ذوبانية الملح الشحيح الذوبان، ولكنه لا يغير القيمة العددية لحاصل الإذابة $K_{sp}$."
  }
];

export const thChemCh3Exercises: SolvedProblem[] = [
  {
    "id": "th_chem_ch3_ex_01",
    "titleEn": "Exercise 1: Dynamic Equilibrium Characteristics",
    "titleAr": "تمرين ١: شروط ومفهوم الاتزان الكيميائي الديناميكي",
    "difficulty": "easy",
    "questionEn": "Which of the following conditions is required for a reversible chemical reaction to reach a state of dynamic chemical equilibrium?",
    "questionAr": "أي الشروط الآتية يلزم توافرها حتى يصل التفاعل الكيميائي الانعكاسي إلى حالة الاتزان الديناميكي؟",
    "optionsEn": [
      "The forward reaction rate equals the reverse reaction rate, and reactant and product concentrations remain constant in a closed system",
      "All reactants are completely converted into products",
      "The concentrations of reactants and products become exactly equal",
      "The reaction completely stops and all molecular motion ceases"
    ],
    "optionsAr": [
      "تتساوى سرعة التفاعل الطردي مع سرعة التفاعل العكسي، وتثبت تركيزات المتفاعلات والنواتج في نظام مغلق",
      "تتحول جميع المتفاعلات تماماً إلى نواتج",
      "تتساوى تركيزات المتفاعلات والنواتج عددياً بدقة",
      "يتوقف التفاعل تماماً وتسكن حركة الجزيئات"
    ],
    "correctAnswer": "The forward reaction rate equals the reverse reaction rate, and reactant and product concentrations remain constant in a closed system",
    "correctIndex": 0,
    "hintEn": "Equilibrium is dynamic (r1 = r2), not static; concentrations remain constant but are not necessarily equal.",
    "hintAr": "الاتزان نظام ديناميكي مستمر تتساوى فيه سرعة التفاعل الطردي مع سرعة التفاعل العكسي ($r_1 = r_2$) وتثبت التركيزات.",
    "stepByStepSolutionEn": [
      "Equilibrium is dynamic (r1 = r2), not static; concentrations remain constant but are not necessarily equal.",
      "Therefore, the correct answer is: The forward reaction rate equals the reverse reaction rate, and reactant and product concentrations remain constant in a closed system"
    ],
    "stepByStepSolutionAr": [
      "الاتزان نظام ديناميكي مستمر تتساوى فيه سرعة التفاعل الطردي مع سرعة التفاعل العكسي ($r_1 = r_2$) وتثبت التركيزات.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تتساوى سرعة التفاعل الطردي مع سرعة التفاعل العكسي، وتثبت تركيزات المتفاعلات والنواتج في نظام مغلق"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_02",
    "titleEn": "Exercise 2: Omission of Pure Solids and Liquids in Kc",
    "titleAr": "تمرين ٢: سبب حذف المواد الصلبة والسائلة النقية من معادلة Kc",
    "difficulty": "easy",
    "questionEn": "Why are pure solid substances and liquid water omitted from the mathematical expression of the equilibrium constant ($K_c$)?",
    "questionAr": "علل: لا يكتب تركيز المواد الصلبة النقية أو الماء النقي السائل في معادلة حساب ثابت الاتزان ($K_c$)؟",
    "optionsEn": [
      "Because their effective concentrations remain virtually constant regardless of their quantities",
      "Because their concentrations are always equal to zero",
      "Because they do not participate in the chemical reaction",
      "Because their temperature fluctuates rapidly"
    ],
    "optionsAr": [
      "لأن تركيزها الفعلي يظل ثابتاً مهما اختلفت كميتها لأنها نقية",
      "لأن تركيزها يساوي صفراً دائماً",
      "لأنها لا تشترك في التفاعل الكيميائي",
      "لأن درجة حرارتها تتغير باستمرار"
    ],
    "correctAnswer": "Because their effective concentrations remain virtually constant regardless of their quantities",
    "correctIndex": 0,
    "hintEn": "The concentration of a pure solid or liquid is fixed because its density and molar mass are constants.",
    "hintAr": "تركيز المادة الصلبة أو السائل النقي يظل ثابتاً لأن كتلته وحجمه يرتبطان بكثافة ثابتة مميزة للمادة.",
    "stepByStepSolutionEn": [
      "The concentration of a pure solid or liquid is fixed because its density and molar mass are constants.",
      "Therefore, the correct answer is: Because their effective concentrations remain virtually constant regardless of their quantities"
    ],
    "stepByStepSolutionAr": [
      "تركيز المادة الصلبة أو السائل النقي يظل ثابتاً لأن كتلته وحجمه يرتبطان بكثافة ثابتة مميزة للمادة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن تركيزها الفعلي يظل ثابتاً مهما اختلفت كميتها لأنها نقية"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_03",
    "titleEn": "Exercise 3: Kp Expression for Heterogeneous Equilibrium",
    "titleAr": "تمرين ٣: كتابة صيغة Kp لتفاعل كربونات الكالسيوم غير المتجانس",
    "difficulty": "medium",
    "questionEn": "What is the correct equilibrium expression for $K_p$ in the thermal decomposition of limestone: $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$?",
    "questionAr": "ما هي الصيغة الرياضية الصحيحة لثابت الاتزان $K_p$ للتفكك الحراري للحجر الجيري: $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$؟",
    "optionsEn": [
      "$K_p = P_{\\text{CO}_2}$",
      "$K_p = \\frac{P_{\\text{CaO}} \\cdot P_{\\text{CO}_2}}{P_{\\text{CaCO}_3}}$",
      "$K_p = \\frac{1}{P_{\\text{CO}_2}}$",
      "$K_p = \\frac{P_{\\text{CO}_2}}{P_{\\text{CaCO}_3}}$"
    ],
    "optionsAr": [
      "$K_p = P_{\\text{CO}_2}$",
      "$K_p = \\frac{P_{\\text{CaO}} \\cdot P_{\\text{CO}_2}}{P_{\\text{CaCO}_3}}$",
      "$K_p = \\frac{1}{P_{\\text{CO}_2}}$",
      "$K_p = \\frac{P_{\\text{CO}_2}}{P_{\\text{CaCO}_3}}$"
    ],
    "correctAnswer": "$K_p = P_{\\text{CO}_2}$",
    "correctIndex": 0,
    "hintEn": "CaCO3 and CaO are pure solids and are omitted from Kp. Only the partial pressure of gaseous CO2 appears.",
    "hintAr": "كربونات الكالسيوم وأكسيد الكالسيوم مواد صلبة تحذف من علاقة $K_p$، فيتبقى فقط الضغط الجزئي لغاز $\\text{CO}_2$.",
    "stepByStepSolutionEn": [
      "CaCO3 and CaO are pure solids and are omitted from Kp. Only the partial pressure of gaseous CO2 appears.",
      "Therefore, the correct answer is: $K_p = P_{\\text{CO}_2}$"
    ],
    "stepByStepSolutionAr": [
      "كربونات الكالسيوم وأكسيد الكالسيوم مواد صلبة تحذف من علاقة $K_p$، فيتبقى فقط الضغط الجزئي لغاز $\\text{CO}_2$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $K_p = P_{\\text{CO}_2}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_04",
    "titleEn": "Exercise 4: Catalyst Effect on Reaction Equilibrium",
    "titleAr": "تمرين ٤: دور العامل الحفاز في التفاعلات الانعكاسية المتزنة",
    "difficulty": "easy",
    "questionEn": "What is the specific effect of adding a catalyst to a reversible chemical reaction at equilibrium?",
    "questionAr": "ما التأثير الدقيق لإضافة عامل حفاز إلى نظام كيميائي انعكاسي متزن؟",
    "optionsEn": [
      "Lowers activation energy and accelerates reaching equilibrium without shifting equilibrium position or changing $K_c$",
      "Shifts the equilibrium towards the products side and increases $K_c$",
      "Increases the yield of products by shifting the reaction forward",
      "Increases the activation energy of the reverse reaction"
    ],
    "optionsAr": [
      "يقلل من طاقة التنشيط ويسرع الوصول لحالة الاتزان دون تغيير موضع الاتزان أو قيمة $K_c$",
      "يزيح موضع الاتزان نحو النواتج ويزيد من قيمة $K_c$",
      "يزيد من كمية النواتج بإزاحة التفاعل طردياً",
      "يزيد من طاقة تنشيط التفاعل العكسي"
    ],
    "correctAnswer": "Lowers activation energy and accelerates reaching equilibrium without shifting equilibrium position or changing $K_c$",
    "correctIndex": 0,
    "hintEn": "A catalyst speeds up forward and reverse rates by the exact same factor, lowering Ea equally for both paths.",
    "hintAr": "العامل الحفاز يقلل طاقة التنشيط ويزيد سرعة التفاعلين الطردي والعكسي بنفس المقدار دون التأثير على موضع الاتزان أو قيمة $K_c$.",
    "stepByStepSolutionEn": [
      "A catalyst speeds up forward and reverse rates by the exact same factor, lowering Ea equally for both paths.",
      "Therefore, the correct answer is: Lowers activation energy and accelerates reaching equilibrium without shifting equilibrium position or changing $K_c$"
    ],
    "stepByStepSolutionAr": [
      "العامل الحفاز يقلل طاقة التنشيط ويزيد سرعة التفاعلين الطردي والعكسي بنفس المقدار دون التأثير على موضع الاتزان أو قيمة $K_c$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: يقلل من طاقة التنشيط ويسرع الوصول لحالة الاتزان دون تغيير موضع الاتزان أو قيمة $K_c$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_05",
    "titleEn": "Exercise 5: Calculating Hydronium from pH",
    "titleAr": "تمرين ٥: حساب تركيز أيون الهيدرونيوم من الرقم الهيدروجيني pH",
    "difficulty": "easy",
    "questionEn": "If a fruit juice solution has a $\\text{pH} = 3.3$, what is the concentration of hydronium ions ($[\\text{H}_3\\text{O}^+]$) in the juice?",
    "questionAr": "إذا كان الرقم الهيدروجيني لعصير فواكه هو $\\text{pH} = 3.3$، فما هو تركيز أيونات الهيدرونيوم ($[\\text{H}_3\\text{O}^+]$) في هذا العصير؟",
    "optionsEn": [
      "$5.01 \\times 10^{-4}\\,\\text{M}$",
      "$2.00 \\times 10^{-3}\\,\\text{M}$",
      "$1.00 \\times 10^{-3}\\,\\text{M}$",
      "$3.30 \\times 10^{-4}\\,\\text{M}$"
    ],
    "optionsAr": [
      "$5.01 \\times 10^{-4}\\,\\text{M}$",
      "$2.00 \\times 10^{-3}\\,\\text{M}$",
      "$1.00 \\times 10^{-3}\\,\\text{M}$",
      "$3.30 \\times 10^{-4}\\,\\text{M}$"
    ],
    "correctAnswer": "$5.01 \\times 10^{-4}\\,\\text{M}$",
    "correctIndex": 0,
    "hintEn": "[H3O+] = 10^(-pH) = 10^(-3.3) = 5.01 * 10^(-4) M.",
    "hintAr": "العلاقة: $[\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}} = 10^{-3.3} = 5.01 \\times 10^{-4}\\,\\text{M}$.",
    "stepByStepSolutionEn": [
      "[H3O+] = 10^(-pH) = 10^(-3.3) = 5.01 * 10^(-4) M.",
      "Therefore, the correct answer is: $5.01 \\times 10^{-4}\\,\\text{M}$"
    ],
    "stepByStepSolutionAr": [
      "العلاقة: $[\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}} = 10^{-3.3} = 5.01 \\times 10^{-4}\\,\\text{M}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $5.01 \\times 10^{-4}\\,\\text{M}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_06",
    "titleEn": "Exercise 6: Hydrolysis of Sodium Acetate Solution",
    "titleAr": "تمرين ٦: تميؤ أسيتات الصوديوم والأساس العلمي لقلويته",
    "difficulty": "medium",
    "questionEn": "Why is an aqueous solution of sodium acetate ($\\text{CH}_3\\text{COONa}$) alkaline (turns litmus paper blue with $\\text{pH} > 7$)?",
    "questionAr": "علل: المحلول المائي لملح أسيتات الصوديوم ($\\text{CH}_3\\text{COONa}$) يزرق ورقة عباد الشمس وقيمة $\\text{pH} > 7$؟",
    "optionsEn": [
      "Because acetate ions ($\\text{CH}_3\\text{COO}^-$) combine with $\\text{H}^+$ from water to form undissociated acetic acid, leaving excess $\\text{OH}^-$ ions",
      "Because sodium ions combine with $\\text{OH}^-$ to precipitate sodium hydroxide",
      "Because both sodium and acetate ions hydrolyze completely",
      "Because acetic acid is a strong electrolyte"
    ],
    "optionsAr": [
      "لأن أيونات الأسيتات تتحد مع أيونات الهيدروجين من الماء لتكوين حمض الأسيتيك الضعيف غير التام التأين، فتتراكم أيونات الهيدروكسيل $\\text{OH}^-$ الزائدة",
      "لأن أيونات الصوديوم تتحد مع $\\text{OH}^-$ وترسب هيدروكسيد الصوديوم",
      "لأن كلا من أيونات الصوديوم والأسيتات تتميأ تماماً",
      "لأن حمض الأسيتيك إلكتروليت قوي"
    ],
    "correctAnswer": "Because acetate ions ($\\text{CH}_3\\text{COO}^-$) combine with $\\text{H}^+$ from water to form undissociated acetic acid, leaving excess $\\text{OH}^-$ ions",
    "correctIndex": 0,
    "hintEn": "Acetate is the conjugate base of weak acetic acid and pulls H+ from water, driving water dissociation and generating free OH-.",
    "hintAr": "أيون الأسيتات شق لحمض ضعيف يتحد مع $\\text{H}^+$ من الماء ويسحبها، فيختل اتزان الماء ويتأين المزيد منه مولداً وفرة من أيونات $\\text{OH}^-$ فيصبح المحلول قلوياً.",
    "stepByStepSolutionEn": [
      "Acetate is the conjugate base of weak acetic acid and pulls H+ from water, driving water dissociation and generating free OH-.",
      "Therefore, the correct answer is: Because acetate ions ($\\text{CH}_3\\text{COO}^-$) combine with $\\text{H}^+$ from water to form undissociated acetic acid, leaving excess $\\text{OH}^-$ ions"
    ],
    "stepByStepSolutionAr": [
      "أيون الأسيتات شق لحمض ضعيف يتحد مع $\\text{H}^+$ من الماء ويسحبها، فيختل اتزان الماء ويتأين المزيد منه مولداً وفرة من أيونات $\\text{OH}^-$ فيصبح المحلول قلوياً.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن أيونات الأسيتات تتحد مع أيونات الهيدروجين من الماء لتكوين حمض الأسيتيك الضعيف غير التام التأين، فتتراكم أيونات الهيدروكسيل $\\text{OH}^-$ الزائدة"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_07",
    "titleEn": "Exercise 7: Endothermic Equilibrium Shift with Temperature",
    "titleAr": "تمرين ٧: أثر التسخين على التفاعل الماص للحرارة وثابت الاتزان",
    "difficulty": "medium",
    "questionEn": "For the endothermic gaseous reaction: $\\text{N}_2\\text{O}_4(g) + \\text{Heat} \\rightleftharpoons 2\\text{NO}_2(g)$ (colorless to reddish-brown), what happens when the flask is placed in hot boiling water?",
    "questionAr": "في التفاعل الغازي الماص للحرارة: $\\text{N}_2\\text{O}_4(g) + \\text{حرارة} \\rightleftharpoons 2\\text{NO}_2(g)$ (من عديم اللون إلى بني محمر)، ماذا يحدث عند وضع الدورق في ماء مغلي ساخن؟",
    "optionsEn": [
      "The equilibrium shifts forward, increasing the reddish-brown color intensity and increasing $K_c$",
      "The equilibrium shifts backward, decolorizing the mixture and increasing $K_c$",
      "The reddish-brown color disappears completely because $K_c$ decreases",
      "The equilibrium does not shift because temperature only alters reaction rate"
    ],
    "optionsAr": [
      "ينشط التفاعل في الاتجاه الطردي وتزداد شدة اللون البني المحمر وتزداد قيمة $K_c$",
      "ينشط التفاعل في الاتجاه العكسي ويزول اللون وتزداد قيمة $K_c$",
      "يزول اللون البني المحمر تماماً لأن قيمة $K_c$ تقل",
      "لا يتغير موضع الاتزان لأن الحرارة تؤثر فقط على سرعة التفاعل"
    ],
    "correctAnswer": "The equilibrium shifts forward, increasing the reddish-brown color intensity and increasing $K_c$",
    "correctIndex": 0,
    "hintEn": "Endothermic reaction (Delta H > 0): raising T shifts forward to consume added heat, producing more NO2 (reddish brown) and increasing Kc.",
    "hintAr": "التفاعل ماص للحرارة: رفع درجة الحرارة يوجه التفاعل في الاتجاه الطردي لامتصاص الحرارة، فتزداد كثافة غاز $\\text{NO}_2$ البني المحمر وتزداد قيمة $K_c$.",
    "stepByStepSolutionEn": [
      "Endothermic reaction (Delta H > 0): raising T shifts forward to consume added heat, producing more NO2 (reddish brown) and increasing Kc.",
      "Therefore, the correct answer is: The equilibrium shifts forward, increasing the reddish-brown color intensity and increasing $K_c$"
    ],
    "stepByStepSolutionAr": [
      "التفاعل ماص للحرارة: رفع درجة الحرارة يوجه التفاعل في الاتجاه الطردي لامتصاص الحرارة، فتزداد كثافة غاز $\\text{NO}_2$ البني المحمر وتزداد قيمة $K_c$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: ينشط التفاعل في الاتجاه الطردي وتزداد شدة اللون البني المحمر وتزداد قيمة $K_c$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_08",
    "titleEn": "Exercise 8: Ksp Calculation for 1:3 Salt",
    "titleAr": "تمرين ٨: حساب حاصل الإذابة لملح هيدروكسيد الألومنيوم Al(OH)3",
    "difficulty": "exam_standard",
    "questionEn": "If the solubility degree of aluminium hydroxide ($\\text{Al(OH)}_3$) in water is $x\\,\\text{mol/L}$, what is the correct formula for its solubility product constant $K_{sp}$?",
    "questionAr": "إذا كانت درجة إذابة هيدروكسيد الألومنيوم ($\\text{Al(OH)}_3$) في الماء هي $x\\,\\text{mol/L}$، فما هي الصيغة الرياضية الصحيحة لحاصل الإذابة $K_{sp}$؟",
    "optionsEn": [
      "$K_{sp} = 27x^4$",
      "$K_{sp} = 4x^3$",
      "$K_{sp} = x^2$",
      "$K_{sp} = 108x^5$"
    ],
    "optionsAr": [
      "$K_{sp} = 27x^4$",
      "$K_{sp} = 4x^3$",
      "$K_{sp} = x^2$",
      "$K_{sp} = 108x^5$"
    ],
    "correctAnswer": "$K_{sp} = 27x^4$",
    "correctIndex": 0,
    "hintEn": "Al(OH)3 <=> Al3+ + 3 OH-. [Al3+] = x, [OH-] = 3x. Ksp = (x)(3x)^3 = 27x^4.",
    "hintAr": "المعادلة: $\\text{Al(OH)}_3 \\rightleftharpoons \\text{Al}^{3+} + 3\\text{OH}^-$. $K_{sp} = [x][3x]^3 = 27x^4$.",
    "stepByStepSolutionEn": [
      "Al(OH)3 <=> Al3+ + 3 OH-. [Al3+] = x, [OH-] = 3x. Ksp = (x)(3x)^3 = 27x^4.",
      "Therefore, the correct answer is: $K_{sp} = 27x^4$"
    ],
    "stepByStepSolutionAr": [
      "المعادلة: $\\text{Al(OH)}_3 \\rightleftharpoons \\text{Al}^{3+} + 3\\text{OH}^-$. $K_{sp} = [x][3x]^3 = 27x^4$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $K_{sp} = 27x^4$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_09",
    "titleEn": "Exercise 9: Effect of Inert Gas at Constant Volume",
    "titleAr": "تمرين ٩: أثر إضافة غاز خامل عند ثبوت الحجم على الاتزان",
    "difficulty": "hots",
    "questionEn": "An inert gas (such as argon, $\\text{Ar}$) is added to a gaseous equilibrium mixture $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ at constant volume and temperature. How does this affect the equilibrium position?",
    "questionAr": "أضيف غاز خامل (مثل الأرجون $\\text{Ar}$) إلى وعاء مغلق يحتوي على نظام متزن: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ عند ثبوت الحجم ودرجة الحرارة. ما تأثير ذلك على موضع الاتزان؟",
    "optionsEn": [
      "The equilibrium position does not shift at all, because the partial pressures and concentrations of reactants and products remain unchanged",
      "The equilibrium shifts forward towards ammonia formation",
      "The equilibrium shifts backward towards nitrogen and hydrogen",
      "The equilibrium constant $K_c$ decreases"
    ],
    "optionsAr": [
      "لا يتأثر موضع الاتزان إطلاقاً، لأن التركيزات والضغوط الجزئية للغازات المتفاعلة والناتجة تظل ثابتة تماماً",
      "ينشط التفاعل في الاتجاه الطردي نحو تكوين النشادر",
      "ينشط التفاعل في الاتجاه العكسي نحو المتفاعلات",
      "تقل قيمة ثابت الاتزان $K_c$"
    ],
    "correctAnswer": "The equilibrium position does not shift at all, because the partial pressures and concentrations of reactants and products remain unchanged",
    "correctIndex": 0,
    "hintEn": "At constant volume, adding an inert gas increases total pressure, but does NOT change the partial pressure or molar concentration (n/V) of any reacting gas.",
    "hintAr": "عند ثبوت الحجم، إضافة غاز خامل تزيد الضغط الكلي فقط ولكنها لا تغير من التركيز المولاري أو الضغط الجزئي لأي من الغازات المتفاعلة أو الناتجة فلا يختل الاتزان.",
    "stepByStepSolutionEn": [
      "At constant volume, adding an inert gas increases total pressure, but does NOT change the partial pressure or molar concentration (n/V) of any reacting gas.",
      "Therefore, the correct answer is: The equilibrium position does not shift at all, because the partial pressures and concentrations of reactants and products remain unchanged"
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الحجم، إضافة غاز خامل تزيد الضغط الكلي فقط ولكنها لا تغير من التركيز المولاري أو الضغط الجزئي لأي من الغازات المتفاعلة أو الناتجة فلا يختل الاتزان.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لا يتأثر موضع الاتزان إطلاقاً، لأن التركيزات والضغوط الجزئية للغازات المتفاعلة والناتجة تظل ثابتة تماماً"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_10",
    "titleEn": "Exercise 10: Comparison of Acid Strengths using Ka",
    "titleAr": "تمرين ١٠: المقارنة بين قوة الأحماض بمعلومية Ka",
    "difficulty": "easy",
    "questionEn": "Four weak acids have the following dissociation constants: Acid A ($K_a = 1.8 \\times 10^{-4}$), Acid B ($K_a = 1.3 \\times 10^{-10}$), Acid C ($K_a = 6.8 \\times 10^{-4}$), Acid D ($K_a = 1.8 \\times 10^{-5}$). Which of these acids is the strongest and has the highest electrical conductivity at identical concentrations?",
    "questionAr": "أربعة أحماض ضعيفة ثوابت تأينها كالآتي: الحمض A ($K_a = 1.8 \\times 10^{-4}$)، الحمض B ($K_a = 1.3 \\times 10^{-10}$)، الحمض C ($K_a = 6.8 \\times 10^{-4}$)، الحمض D ($K_a = 1.8 \\times 10^{-5}$). أي هذه الأحماض هو الأقوى والأعلى توصيلاً للكهرباء عند نفس التركيز؟",
    "optionsEn": [
      "Acid C ($K_a = 6.8 \\times 10^{-4}$)",
      "Acid A ($K_a = 1.8 \\times 10^{-4}$)",
      "Acid B ($K_a = 1.3 \\times 10^{-10}$)",
      "Acid D ($K_a = 1.8 \\times 10^{-5}$)"
    ],
    "optionsAr": [
      "الحمض C ($K_a = 6.8 \\times 10^{-4}$)",
      "الحمض A ($K_a = 1.8 \\times 10^{-4}$)",
      "الحمض B ($K_a = 1.3 \\times 10^{-10}$)",
      "الحمض D ($K_a = 1.8 \\times 10^{-5}$)"
    ],
    "correctAnswer": "Acid C ($K_a = 6.8 \\times 10^{-4}$)",
    "correctIndex": 0,
    "hintEn": "The greater the Ka value, the greater the degree of ionization and the stronger the acid.",
    "hintAr": "كلما زادت قيمة ثابت التأين $K_a$ للحمض زادت درجة تأينه وزادت قوة الحمض وقدرته على توصيل التيار الكهربي.",
    "stepByStepSolutionEn": [
      "The greater the Ka value, the greater the degree of ionization and the stronger the acid.",
      "Therefore, the correct answer is: Acid C ($K_a = 6.8 \\times 10^{-4}$)"
    ],
    "stepByStepSolutionAr": [
      "كلما زادت قيمة ثابت التأين $K_a$ للحمض زادت درجة تأينه وزادت قوة الحمض وقدرته على توصيل التيار الكهربي.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: الحمض C ($K_a = 6.8 \\times 10^{-4}$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_11",
    "titleEn": "Exercise 11: Effect of Adding Strong Base to Acetic Acid Equilibrium",
    "titleAr": "تمرين ١١: أثر إضافة محلول الصودا الكاوية إلى اتزان حمض الخليك",
    "difficulty": "medium",
    "questionEn": "In the equilibrium system: $\\text{CH}_3\\text{COOH}(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{CH}_3\\text{COO}^-(aq) + \\text{H}_3\\text{O}^+(aq)$, what happens if sodium hydroxide pellets ($\\text{NaOH}$) are added to the solution?",
    "questionAr": "في النظام المتزن لحمض الخليك: $\\text{CH}_3\\text{COOH}(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{CH}_3\\text{COO}^-(aq) + \\text{H}_3\\text{O}^+(aq)$، ماذا يحدث عند إضافة حبيبات من هيدروكسيد الصوديوم ($\\text{NaOH}$)؟",
    "optionsEn": [
      "$\\text{OH}^-$ ions neutralize $\\text{H}_3\\text{O}^+$, shifting the equilibrium forward and increasing the concentration of acetate ions",
      "The equilibrium shifts backward, increasing acetic acid concentration",
      "The concentration of hydronium ions increases",
      "The value of $K_a$ increases"
    ],
    "optionsAr": [
      "تتحد أيونات $\\text{OH}^-$ مع $\\text{H}_3\\text{O}^+$ فتتعادل معها، فينشط التفاعل طردياً لتعويض النقص ويزداد تركيز أيونات الأسيتات",
      "ينشط التفاعل عكسياً ويزداد تركيز حمض الخليك",
      "يزداد تركيز أيونات الهيدرونيوم",
      "تزداد قيمة ثابت التأين $K_a$"
    ],
    "correctAnswer": "$\\text{OH}^-$ ions neutralize $\\text{H}_3\\text{O}^+$, shifting the equilibrium forward and increasing the concentration of acetate ions",
    "correctIndex": 0,
    "hintEn": "Adding OH- removes H3O+ by forming water: H3O+ + OH- -> 2 H2O. Le Chatelier drives the reaction forward.",
    "hintAr": "أيونات الهيدروكسيل تسحب أيونات الهيدرونيوم بتفاعل التعادل، وطبقاً للوشاتيليه ينشط تأين الحمض طردياً لتعويض النقص.",
    "stepByStepSolutionEn": [
      "Adding OH- removes H3O+ by forming water: H3O+ + OH- -> 2 H2O. Le Chatelier drives the reaction forward.",
      "Therefore, the correct answer is: $\\text{OH}^-$ ions neutralize $\\text{H}_3\\text{O}^+$, shifting the equilibrium forward and increasing the concentration of acetate ions"
    ],
    "stepByStepSolutionAr": [
      "أيونات الهيدروكسيل تسحب أيونات الهيدرونيوم بتفاعل التعادل، وطبقاً للوشاتيليه ينشط تأين الحمض طردياً لتعويض النقص.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تتحد أيونات $\\text{OH}^-$ مع $\\text{H}_3\\text{O}^+$ فتتعادل معها، فينشط التفاعل طردياً لتعويض النقص ويزداد تركيز أيونات الأسيتات"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_12",
    "titleEn": "Exercise 12: Relationship Between Kc and Kp",
    "titleAr": "تمرين ١٢: العلاقة وتساوي قيمتي Kc و Kp",
    "difficulty": "easy",
    "questionEn": "Under which condition does the numerical value of the concentration equilibrium constant ($K_c$) equal the pressure equilibrium constant ($K_p$)?",
    "questionAr": "متى تتساوى القيمة العددية لثابت الاتزان بدلالة التركيز ($K_c$) مع ثابت الاتزان بدلالة الضغوط الجزئية ($K_p$)؟",
    "optionsEn": [
      "When the number of moles of gaseous reactants equals the number of moles of gaseous products ($\\Delta n_g = 0$)",
      "When the temperature is $0^\\circ\\text{C}$",
      "When all reactants and products are liquids",
      "When the reaction is endothermic"
    ],
    "optionsAr": [
      "عندما يتساوى عدد مولات الغازات المتفاعلة مع عدد مولات الغازات الناتجة ($\\Delta n_g = 0$)",
      "عندما تكون درجة الحرارة صفراً مئوياً",
      "عندما تكون جميع المواد في الحالة السائلة",
      "عندما يكون التفاعل ماصاً للحرارة"
    ],
    "correctAnswer": "When the number of moles of gaseous reactants equals the number of moles of gaseous products ($\\Delta n_g = 0$)",
    "correctIndex": 0,
    "hintEn": "Kp = Kc(RT)^(Delta n). When Delta n = 0, (RT)^0 = 1, so Kp = Kc.",
    "hintAr": "العلاقة: $K_p = K_c (RT)^{\\Delta n}$. عندما يكون $\\Delta n = 0$، فإن $(RT)^0 = 1$ وتتساوى قيمتا $K_p$ و $K_c$.",
    "stepByStepSolutionEn": [
      "Kp = Kc(RT)^(Delta n). When Delta n = 0, (RT)^0 = 1, so Kp = Kc.",
      "Therefore, the correct answer is: When the number of moles of gaseous reactants equals the number of moles of gaseous products ($\\Delta n_g = 0$)"
    ],
    "stepByStepSolutionAr": [
      "العلاقة: $K_p = K_c (RT)^{\\Delta n}$. عندما يكون $\\Delta n = 0$، فإن $(RT)^0 = 1$ وتتساوى قيمتا $K_p$ و $K_c$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: عندما يتساوى عدد مولات الغازات المتفاعلة مع عدد مولات الغازات الناتجة ($\\Delta n_g = 0$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_13",
    "titleEn": "Exercise 13: Neutral Salt Solution from Strong Acid and Base",
    "titleAr": "تمرين ١٣: التعادل التام لمحلول كلوريد الصوديوم في الماء",
    "difficulty": "easy",
    "questionEn": "Why does dissolving sodium chloride ($\\text{NaCl}$) in pure water produce a neutral solution with $\\text{pH} = 7$ at $25^\\circ\\text{C}$?",
    "questionAr": "علل: ذوبان كلوريد الصوديوم ($\\text{NaCl}$) في الماء يعطي محلولاً متعادل التأثير ورقم هيدروجيني $\\text{pH} = 7$ عند $25^\\circ\\text{C}$؟",
    "optionsEn": [
      "Because neither $\\text{Na}^+$ nor $\\text{Cl}^-$ ions can combine with water ions, leaving $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-] = 10^{-7}\\,\\text{M}$",
      "Because $\\text{NaCl}$ reacts with water to form chlorine gas",
      "Because it contains equal masses of sodium and chlorine",
      "Because $\\text{NaCl}$ is insoluble in water"
    ],
    "optionsAr": [
      "لأن كلاً من أيونات الصوديوم والكلوريد مشتقة من إلكتروليتات قوية فلا تتحد مع أيونات الماء، ويظل $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-] = 10^{-7}\\,\\text{M}$",
      "لأن ملح الطعام يتفاعل مع الماء لإنتاج غاز الكلور",
      "لأنه يحتوي على كتل متساوية من الصوديوم والكلور",
      "لأن كلوريد الصوديوم لا يذوب في الماء"
    ],
    "correctAnswer": "Because neither $\\text{Na}^+$ nor $\\text{Cl}^-$ ions can combine with water ions, leaving $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-] = 10^{-7}\\,\\text{M}$",
    "correctIndex": 0,
    "hintEn": "Both NaOH and HCl are strong electrolytes. Na+ and Cl- are spectator ions that do not hydrolyze.",
    "hintAr": "هيدروكسيد الصوديوم وحمض الهيدروكلوريك كلاهما تام التأين، فلا تتحد أيونات $\\text{Na}^+$ مع $\\text{OH}^-$ ولا تتحد $\\text{Cl}^-$ مع $\\text{H}^+$، فيظل الماء محتفظاً بتوازنه ومتعادلاً.",
    "stepByStepSolutionEn": [
      "Both NaOH and HCl are strong electrolytes. Na+ and Cl- are spectator ions that do not hydrolyze.",
      "Therefore, the correct answer is: Because neither $\\text{Na}^+$ nor $\\text{Cl}^-$ ions can combine with water ions, leaving $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-] = 10^{-7}\\,\\text{M}$"
    ],
    "stepByStepSolutionAr": [
      "هيدروكسيد الصوديوم وحمض الهيدروكلوريك كلاهما تام التأين، فلا تتحد أيونات $\\text{Na}^+$ مع $\\text{OH}^-$ ولا تتحد $\\text{Cl}^-$ مع $\\text{H}^+$، فيظل الماء محتفظاً بتوازنه ومتعادلاً.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن كلاً من أيونات الصوديوم والكلوريد مشتقة من إلكتروليتات قوية فلا تتحد مع أيونات الماء، ويظل $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-] = 10^{-7}\\,\\text{M}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_14",
    "titleEn": "Exercise 14: Rate Law and Law of Mass Action",
    "titleAr": "تمرين ١٤: سرعة التفاعل وقانون فعل الكتلة لجلبرج وفاج",
    "difficulty": "medium",
    "questionEn": "According to the Law of Mass Action, if the concentration of reactant A is doubled in the elementary reaction: $2\\text{A} + \\text{B} \\to \\text{Products}$, by what factor does the initial reaction rate increase?",
    "questionAr": "طبقاً لقانون فعل الكتلة، إذا تضاعف تركيز المادة المتفاعلة A في التفاعل الأولي: $2\\text{A} + \\text{B} \\to \\text{نواتج}$، فبأي معامل تزداد السرعة الابتدائية للتفاعل؟",
    "optionsEn": [
      "Increases by a factor of $4$",
      "Increases by a factor of $2$",
      "Increases by a factor of $8$",
      "Remains unchanged"
    ],
    "optionsAr": [
      "تزداد بمقدار ٤ أضعاف ($4$)",
      "تزداد بمقدار الضعف ($2$)",
      "تزداد بمقدار ٨ أضعاف ($8$)",
      "تظل ثابتة دون تغيير"
    ],
    "correctAnswer": "Increases by a factor of $4$",
    "correctIndex": 0,
    "hintEn": "Rate = k [A]^2 [B]. Doubling [A] results in (2)^2 = 4 times the rate.",
    "hintAr": "معادلة السرعة: $r = k [\\text{A}]^2 [\\text{B}]$، مضاعفة $[\\text{A}]$ ترفع للأس 2: $(2)^2 = 4$ أضعاف.",
    "stepByStepSolutionEn": [
      "Rate = k [A]^2 [B]. Doubling [A] results in (2)^2 = 4 times the rate.",
      "Therefore, the correct answer is: Increases by a factor of $4$"
    ],
    "stepByStepSolutionAr": [
      "معادلة السرعة: $r = k [\\text{A}]^2 [\\text{B}]$، مضاعفة $[\\text{A}]$ ترفع للأس 2: $(2)^2 = 4$ أضعاف.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تزداد بمقدار ٤ أضعاف ($4$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch3_ex_15",
    "titleEn": "Exercise 15: Le Chatelier and Haber-Bosch Ammonia Production",
    "titleAr": "تمرين ١٥: الشروط الصناعية المثلى لإنتاج النشادر بطريقة هابر-بوش",
    "difficulty": "hots",
    "questionEn": "In the Haber-Bosch industrial synthesis of ammonia: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) \\quad (\\Delta H = -92\\,\\text{kJ})$, which combination of industrial conditions maximizes the percentage yield of $\\text{NH}_3$ at equilibrium?",
    "questionAr": "في تحضير النشادر صناعياً بطريقة هابر-بوش: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) \\quad (\\Delta H = -92\\,\\text{kJ})$، أي التوليفات الآتية تزيد نسبة الناتج المتزن من غاز النشادر لأقصى حد؟",
    "optionsEn": [
      "High pressure and low temperature (with continuous removal of produced $\\text{NH}_3$)",
      "Low pressure and high temperature",
      "Low pressure and low temperature",
      "High pressure and high temperature without a catalyst"
    ],
    "optionsAr": [
      "الضغط العالي ودرجة الحرارة المنخفضة (مع التبريد والتسييل لسحب النشادر المتكون باستمرار)",
      "الضغط المنخفض ودرجة الحرارة المرتفعة",
      "الضغط المنخفض ودرجة الحرارة المنخفضة",
      "الضغط العالي ودرجة الحرارة المرتفعة بدون عامل حفاز"
    ],
    "correctAnswer": "High pressure and low temperature (with continuous removal of produced $\\text{NH}_3$)",
    "correctIndex": 0,
    "hintEn": "Reactants: 4 moles of gas -> Products: 2 moles of gas (high pressure favors forward). Exothermic: low temperature favors forward. Continuous removal drives reaction right.",
    "hintAr": "التفاعل مصحوب بنقص في الحجم (من 4 مول إلى 2 مول) فيفضله الضغط العالي؛ والتفاعل طارد للحرارة فيفضله خفض الحرارة؛ وسحب الناتج يوجه التفاعل طردياً دائماً.",
    "stepByStepSolutionEn": [
      "Reactants: 4 moles of gas -> Products: 2 moles of gas (high pressure favors forward). Exothermic: low temperature favors forward. Continuous removal drives reaction right.",
      "Therefore, the correct answer is: High pressure and low temperature (with continuous removal of produced $\\text{NH}_3$)"
    ],
    "stepByStepSolutionAr": [
      "التفاعل مصحوب بنقص في الحجم (من 4 مول إلى 2 مول) فيفضله الضغط العالي؛ والتفاعل طارد للحرارة فيفضله خفض الحرارة؛ وسحب الناتج يوجه التفاعل طردياً دائماً.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: الضغط العالي ودرجة الحرارة المنخفضة (مع التبريد والتسييل لسحب النشادر المتكون باستمرار)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];
