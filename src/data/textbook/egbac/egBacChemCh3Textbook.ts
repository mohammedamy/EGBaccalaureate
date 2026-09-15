import type { SolvedProblem } from '../../../types/curriculum';

export const egBacChemCh3SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_chem_ch3_se_01",
    "titleEn": "pH and Ionization Degree of a Weak Monoprotic Acid",
    "titleAr": "حساب الرقم الهيدروجيني ودرجة التأين لحمض أحادي البروتون ضعيف",
    "difficulty": "easy",
    "questionEn": "A $0.100\\text{ M}$ aqueous solution of acetic acid ($\\text{CH}_3\\text{COOH}$) has an acid dissociation constant $K_a = 1.80 \\times 10^{-5}$ at $25^\\circ\\text{C}$. Calculate the hydronium ion concentration $[\\text{H}_3\\text{O}^+]$, the $\\text{pH}$, and the percent degree of ionization $\\alpha$.",
    "questionAr": "محلول مائي من حمض الأسيتيك (الخل) $\\text{CH}_3\\text{COOH}$ تركيزه $0.100\\text{ M}$ يمتلك ثابت تفكك $K_a = 1.80 \\times 10^{-5}$ عند $25^\\circ\\text{C}$. احسب تركيز أيون الهيدرونيوم $[\\text{H}_3\\text{O}^+]$، والرقم الهيدروجيني $\\text{pH}$، والنسبة المئوية لدرجة التأين $\\alpha$.",
    "optionsEn": [
      "$[\\text{H}_3\\text{O}^+] = 1.34 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 2.87, \\quad \\alpha = 1.34\\%$",
      "$[\\text{H}_3\\text{O}^+] = 1.80 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 2.74, \\quad \\alpha = 1.80\\%$",
      "$[\\text{H}_3\\text{O}^+] = 4.24 \\times 10^{-4}\\text{ M}, \\quad \\text{pH} = 3.37, \\quad \\alpha = 0.42\\%$",
      "$[\\text{H}_3\\text{O}^+] = 1.00 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 3.00, \\quad \\alpha = 1.00\\%$"
    ],
    "optionsAr": [
      "$[\\text{H}_3\\text{O}^+] = 1.34 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 2.87, \\quad \\alpha = 1.34\\%$",
      "$[\\text{H}_3\\text{O}^+] = 1.80 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 2.74, \\quad \\alpha = 1.80\\%$",
      "$[\\text{H}_3\\text{O}^+] = 4.24 \\times 10^{-4}\\text{ M}, \\quad \\text{pH} = 3.37, \\quad \\alpha = 0.42\\%$",
      "$[\\text{H}_3\\text{O}^+] = 1.00 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 3.00, \\quad \\alpha = 1.00\\%$"
    ],
    "correctAnswer": "$[\\text{H}_3\\text{O}^+] = 1.34 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 2.87, \\quad \\alpha = 1.34\\%$",
    "correctIndex": 0,
    "hintEn": "Use weak acid approximation: [H3O+] = sqrt(Ka * c). Check if alpha < 5%. Then pH = -log[H3O+].",
    "hintAr": "استخدم قانون تقريب الحمض الضعيف: [H3O+] = جذر(Ka * c). تأكد أن درجة التأين أقل من 5%، ثم pH = -log[H3O+].",
    "stepByStepSolutionEn": [
      "1. Equilibrium expression for $\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{CH}_3\\text{COO}^-$: $K_a = \\frac{[\\text{H}_3\\text{O}^+][\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]_0 - x} = \\frac{x^2}{c - x}$.",
      "2. Since $c/K_a = 0.100 / (1.8 \\times 10^{-5}) \\approx 5555 \\gg 400$, the $5\\%$ approximation holds ($c - x \\approx c$): $x = \\sqrt{K_a \\cdot c} = \\sqrt{(1.80 \\times 10^{-5})(0.100)} = \\sqrt{1.80 \\times 10^{-6}} \\approx 1.3416 \\times 10^{-3}\\text{ M}$.",
      "3. Calculate $\\text{pH}$: $\\text{pH} = -\\log(1.3416 \\times 10^{-3}) = 3 - 0.1276 = 2.87$.",
      "4. Percent ionization: $\\alpha = \\frac{x}{c} \\times 100\\% = \\frac{1.3416 \\times 10^{-3}}{0.100} \\times 100\\% = 1.34\\%$ (valid since $1.34\\% < 5\\%$)."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة تفكك حمض الخليك: $K_a = \\frac{x^2}{c - x}$.",
      "٢. بما أن نسبة $c / K_a > 400$، نهمل $x$ في المقام: $x = \\sqrt{K_a \\cdot c} = \\sqrt{1.80 \\times 10^{-5} \\times 0.100} = 1.34 \\times 10^{-3}\\text{ M}$.",
      "٣. حساب الرقم الهيدروجيني: $\\text{pH} = -\\log(1.34 \\times 10^{-3}) = 2.87$.",
      "٤. النسبة المئوية للتأين: $\\alpha = \\frac{1.34 \\times 10^{-3}}{0.100} \\times 100\\% = 1.34\\%$ (صحيحة لأنها أقل من $5\\%$)."
    ],
    "teacherTipEn": "Always verify that percent ionization is strictly below 5% before accepting the simplified square root approximation.",
    "teacherTipAr": "تأكد دائماً من أن نسبة التأين أقل من 5% للتحقق من دقة وصحة قانون الجذر التربيعي التقريبي."
  },
  {
    "id": "egbac_chem_ch3_se_02",
    "titleEn": "Water Autoionization and pH of Neutral Water at Elevated Temperature",
    "titleAr": "التأين الذاتي للماء والرقم الهيدروجيني للماء النقي عند التسخين",
    "difficulty": "medium",
    "questionEn": "At physiological human body temperature ($37.0^\\circ\\text{C} = 310\\text{ K}$), the autoionization ion product constant of pure water increases to $K_w = 2.42 \\times 10^{-14}$. Calculate the hydronium ion concentration $[\\text{H}_3\\text{O}^+]$ and the neutral $\\text{pH}$ of pure water at $37^\\circ\\text{C}$. Is pure water at $37^\\circ\\text{C}$ acidic, basic, or neutral?",
    "questionAr": "عند درجة حرارة جسم الإنسان الطبيعية ($37.0^\\circ\\text{C}$)، يزداد ثابت الحاصل الأيوني للماء النقي إلى $K_w = 2.42 \\times 10^{-14}$. احسب تركيز أيون الهيدرونيوم $[\\text{H}_3\\text{O}^+]$ وقيمة الرقم الهيدروجيني $\\text{pH}$ للماء النقي عند هذه الدرجة. وهل يُعتبر الماء النقي حينئذ حمضياً أم قاعدياً أم متعادلاً؟",
    "optionsEn": [
      "$[\\text{H}_3\\text{O}^+] = 1.00 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 7.00$; the water is neutral.",
      "$[\\text{H}_3\\text{O}^+] = 1.56 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 6.81$; the water remains strictly neutral.",
      "$[\\text{H}_3\\text{O}^+] = 2.42 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 6.62$; the water becomes acidic.",
      "$[\\text{H}_3\\text{O}^+] = 1.56 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 6.81$; the water becomes acidic."
    ],
    "optionsAr": [
      "$[\\text{H}_3\\text{O}^+] = 1.00 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 7.00$؛ والماء متعادل.",
      "$[\\text{H}_3\\text{O}^+] = 1.56 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 6.81$؛ ويظل الماء متعادلاً تماماً.",
      "$[\\text{H}_3\\text{O}^+] = 2.42 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 6.62$؛ ويصبح الماء حمضياً.",
      "$[\\text{H}_3\\text{O}^+] = 1.56 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 6.81$؛ ويصبح الماء حمضياً."
    ],
    "correctAnswer": "$[\\text{H}_3\\text{O}^+] = 1.56 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 6.81$; the water remains strictly neutral.",
    "correctIndex": 1,
    "hintEn": "In pure water, [H3O+] = [OH-] = sqrt(K_w). Water is neutral whenever [H3O+] = [OH-], regardless of numerical pH value.",
    "hintAr": "في الماء النقي: [H3O+] = [OH-] = جذر(Kw). يُعرف المحلول المتعادل بتساوي تركيزي أيوني الهيدرونيوم والهيدروكسيد دائماً.",
    "stepByStepSolutionEn": [
      "1. Autoionization equilibrium of water: $2\\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_3\\text{O}^+(aq) + \\text{OH}^-(aq), \\quad \\Delta H^\\circ > 0$ (endothermic).",
      "2. In pure water, stoichiometry requires $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-] = \\sqrt{K_w} = \\sqrt{2.42 \\times 10^{-14}} \\approx 1.5556 \\times 10^{-7}\\text{ M}$.",
      "3. Calculate $\\text{pH}$: $\\text{pH} = -\\log(1.5556 \\times 10^{-7}) = 7 - \\log(1.5556) = 7 - 0.1919 = 6.81$.",
      "4. Acid-base neutrality is defined by $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-]$, NOT by the arbitrary number $7.00$. Since $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-]$, water at $37^\\circ\\text{C}$ is strictly neutral."
    ],
    "stepByStepSolutionAr": [
      "١. التأين الذاتي للماء عملية ماصة للحرارة، لذا يزداد $K_w$ بارتفاع درجة الحرارة.",
      "٢. في الماء النقي يتساوى تركيز الهيدرونيوم والهيدروكسيد: $[\\text{H}_3\\text{O}^+] = \\sqrt{K_w} = \\sqrt{2.42 \\times 10^{-14}} = 1.56 \\times 10^{-7}\\text{ M}$.",
      "٣. حساب $\\text{pH}$: $\\text{pH} = -\\log(1.56 \\times 10^{-7}) = 6.81$.",
      "٤. يُعرّف التعادل الكيميائي بتساوي تركيز أيونات $[\\text{H}_3\\text{O}^+]$ مع $[\\text{OH}^-]$، وليس بالرقم 7 بالضرورة؛ لذا فالماء متعادل تماماً عند $37^\\circ\\text{C}$."
    ],
    "teacherTipEn": "Remember: pH = 7 represents neutrality ONLY at exactly 25 degrees Celsius (where Kw = 1.00 x 10^-14).",
    "teacherTipAr": "تذكر دائماً: الرقم الهيدروجيني 7 يمثل نقطة التعادل فقط عند درجة حرارة 25 مئوية تحديداً."
  },
  {
    "id": "egbac_chem_ch3_se_03",
    "titleEn": "Polyprotic Acid Equilibrium: Phosphoric Acid Intermediate Ions",
    "titleAr": "اتزان الأحماض عديدة البروتون: حمض الفوسفوريك وتراكيز الأيونات الوسيطة",
    "difficulty": "hots",
    "questionEn": "Phosphoric acid ($\\text{H}_3\\text{PO}_4$) is a triprotic acid with successive dissociation constants at $25^\\circ\\text{C}$:\n$K_{a1} = 7.5 \\times 10^{-3}, \\quad K_{a2} = 6.2 \\times 10^{-8}, \\quad K_{a3} = 4.8 \\times 10^{-13}$.\nIn a $0.100\\text{ M } \\text{H}_3\\text{PO}_4$ aqueous solution, what is the equilibrium concentration of the monohydrogen phosphate ion $[\\text{HPO}_4^{2-}]$?",
    "questionAr": "حمض الفوسفوريك $\\text{H}_3\\text{PO}_4$ حمض ثلاثي البروتون يمتلك ثوابت تفكك متعاقبة عند $25^\\circ\\text{C}$:\n$K_{a1} = 7.5 \\times 10^{-3}, \\quad K_{a2} = 6.2 \\times 10^{-8}, \\quad K_{a3} = 4.8 \\times 10^{-13}$.\nفي محلول مائي من $\\text{H}_3\\text{PO}_4$ تركيزه $0.100\\text{ M}$، ما هو تركيز أيون الفوسفات أحادي الهيدروجين $[\\text{HPO}_4^{2-}]$ عند الاتزان؟",
    "optionsEn": [
      "$[\\text{HPO}_4^{2-}] = 7.5 \\times 10^{-3}\\text{ M}$",
      "$[\\text{HPO}_4^{2-}] = 2.4 \\times 10^{-5}\\text{ M}$",
      "$[\\text{HPO}_4^{2-}] = K_{a2} = 6.2 \\times 10^{-8}\\text{ M}$",
      "$[\\text{HPO}_4^{2-}] = 4.8 \\times 10^{-13}\\text{ M}$"
    ],
    "optionsAr": [
      "$[\\text{HPO}_4^{2-}] = 7.5 \\times 10^{-3}\\text{ M}$",
      "$[\\text{HPO}_4^{2-}] = 2.4 \\times 10^{-5}\\text{ M}$",
      "$[\\text{HPO}_4^{2-}] = K_{a2} = 6.2 \\times 10^{-8}\\text{ M}$",
      "$[\\text{HPO}_4^{2-}] = 4.8 \\times 10^{-13}\\text{ M}$"
    ],
    "correctAnswer": "$[\\text{HPO}_4^{2-}] = K_{a2} = 6.2 \\times 10^{-8}\\text{ M}$",
    "correctIndex": 2,
    "hintEn": "For any polyprotic acid where Ka1 >> Ka2, [H3O+] approx [H2A-]. Then Ka2 = ([H3O+][A^2-]) / [H2A-] = [A^2-].",
    "hintAr": "في أي حمض عديد البروتون حيث Ka1 >> Ka2، يكون تركيز [H3O+] مساوياً لتركيز [H2A-]، فيختصران ويبقى [A^2-] = Ka2.",
    "stepByStepSolutionEn": [
      "1. First dissociation step dominates hydronium production: $\\text{H}_3\\text{PO}_4 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{H}_2\\text{PO}_4^-$.\n   Here $[\\text{H}_3\\text{O}^+] \\approx [\\text{H}_2\\text{PO}_4^-]$.",
      "2. Second dissociation step: $\\text{H}_2\\text{PO}_4^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{HPO}_4^{2-}$, with $K_{a2} = \\frac{[\\text{H}_3\\text{O}^+][\\text{HPO}_4^{2-}]}{[\\text{H}_2\\text{PO}_4^-]}$.",
      "3. Since virtually all $\\text{H}_3\\text{O}^+$ comes from step 1, $[\\text{H}_3\\text{O}^+] \\approx [\\text{H}_2\\text{PO}_4^-]$.",
      "4. Substituting into the $K_{a2}$ expression: $K_{a2} = \\frac{[\\text{H}_3\\text{O}^+][\\text{HPO}_4^{2-}]}{[\\text{H}_2\\text{PO}_4^-]} \\approx [\\text{HPO}_4^{2-}] = 6.2 \\times 10^{-8}\\text{ M}$."
    ],
    "stepByStepSolutionAr": [
      "١. الخطوة الأولى هي المصدر الرئيسي لأيونات الهيدرونيوم: $[\\text{H}_3\\text{O}^+] \\approx [\\text{H}_2\\text{PO}_4^-]$.",
      "٢. الخطوة الثانية لتأين الفوسفات أحادي البروتون: $K_{a2} = \\frac{[\\text{H}_3\\text{O}^+][\\text{HPO}_4^{2-}]}{[\\text{H}_2\\text{PO}_4^-]}$.",
      "٣. بما أن تركيزي الهيدرونيوم وثنائي هيدروجين الفوسفات متساويان تقريباً من الخطوة الأولى، فإنهما يختصران معاً من بسط ومقام التعبير.",
      "٤. يتبقى: $[\\text{HPO}_4^{2-}] = K_{a2} = 6.2 \\times 10^{-8}\\text{ مولار}$."
    ],
    "teacherTipEn": "This is a fundamental theorem in analytical chemistry: for any weak diprotic or polyprotic acid, the concentration of the divalent conjugate ion equals Ka2, regardless of initial acid molarity.",
    "teacherTipAr": "قاعدة أساسية: في أي حمض ثنائي أو عديد البروتون ذي خطوات تفكك متباعدة، يساوي تركيز الأيون ثنائي الشحنة قيمة Ka2 دائماً وبشكل مستقل عن التركيز الابتدائي للحمض."
  },
  {
    "id": "egbac_chem_ch3_se_04",
    "titleEn": "Salt Hydrolysis: pH of Ammonium Chloride Solution",
    "titleAr": "تميؤ الأملاح: حساب الرقم الهيدروجيني لمحلول كلوريد الأمونيوم",
    "difficulty": "medium",
    "questionEn": "Ammonium chloride ($\\text{NH}_4\\text{Cl}$) is a salt formed from a weak base ($\\text{NH}_3, K_b = 1.80 \\times 10^{-5}$) and a strong acid ($\\text{HCl}$). Calculate the hydrolysis constant $K_h$, $[\\text{H}_3\\text{O}^+]$, and the $\\text{pH}$ of a $0.200\\text{ M } \\text{NH}_4\\text{Cl}$ aqueous solution at $25^\\circ\\text{C}$. ($K_w = 1.00 \\times 10^{-14}$).",
    "questionAr": "كلوريد الأمونيوم $\\text{NH}_4\\text{Cl}$ ملح مشتق من قاعدة ضعيفة (الأمونيا $K_b = 1.80 \\times 10^{-5}$) وحمض قوي ($\\text{HCl}$). احسب ثابت التميؤ $K_h$، وتركيز أيون الهيدرونيوم $[\\text{H}_3\\text{O}^+]$، والرقم الهيدروجيني $\\text{pH}$ لمحلول كلوريد الأمونيوم تركيزه $0.200\\text{ M}$ عند $25^\\circ\\text{C}$.",
    "optionsEn": [
      "$K_h = 5.56 \\times 10^{-10}, \\quad [\\text{H}_3\\text{O}^+] = 1.05 \\times 10^{-5}\\text{ M}, \\quad \\text{pH} = 4.98$",
      "$K_h = 1.80 \\times 10^{-5}, \\quad [\\text{H}_3\\text{O}^+] = 1.90 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 2.72$",
      "$K_h = 5.56 \\times 10^{-10}, \\quad [\\text{H}_3\\text{O}^+] = 3.33 \\times 10^{-6}\\text{ M}, \\quad \\text{pH} = 5.48$",
      "$K_h = 1.00 \\times 10^{-7}, \\quad [\\text{H}_3\\text{O}^+] = 1.00 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 7.00$"
    ],
    "optionsAr": [
      "$K_h = 5.56 \\times 10^{-10}, \\quad [\\text{H}_3\\text{O}^+] = 1.05 \\times 10^{-5}\\text{ M}, \\quad \\text{pH} = 4.98$",
      "$K_h = 1.80 \\times 10^{-5}, \\quad [\\text{H}_3\\text{O}^+] = 1.90 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 2.72$",
      "$K_h = 5.56 \\times 10^{-10}, \\quad [\\text{H}_3\\text{O}^+] = 3.33 \\times 10^{-6}\\text{ M}, \\quad \\text{pH} = 5.48$",
      "$K_h = 1.00 \\times 10^{-7}, \\quad [\\text{H}_3\\text{O}^+] = 1.00 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 7.00$"
    ],
    "correctAnswer": "$K_h = 5.56 \\times 10^{-10}, \\quad [\\text{H}_3\\text{O}^+] = 1.05 \\times 10^{-5}\\text{ M}, \\quad \\text{pH} = 4.98$",
    "correctIndex": 0,
    "hintEn": "Hydrolysis constant: Kh = Kw / Kb = Ka(NH4+). Then [H3O+] = sqrt(Kh * c). Then pH = -log[H3O+].",
    "hintAr": "ثابت التميؤ: Kh = Kw / Kb. ثم تركيز الهيدرونيوم: [H3O+] = جذر(Kh * c)، وأخيراً pH = -log[H3O+].",
    "stepByStepSolutionEn": [
      "1. Cation hydrolysis reaction: $\\text{NH}_4^+(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{NH}_3(aq) + \\text{H}_3\\text{O}^+(aq)$. Chloride ion does not hydrolyze.",
      "2. Hydrolysis constant: $K_h = \\frac{K_w}{K_b} = \\frac{1.00 \\times 10^{-14}}{1.80 \\times 10^{-5}} \\approx 5.556 \\times 10^{-10}$.",
      "3. Hydronium concentration: $[\\text{H}_3\\text{O}^+] = \\sqrt{K_h \\cdot c} = \\sqrt{(5.556 \\times 10^{-10})(0.200)} = \\sqrt{1.111 \\times 10^{-10}} \\approx 1.054 \\times 10^{-5}\\text{ M}$.",
      "4. Calculate $\\text{pH}$: $\\text{pH} = -\\log(1.054 \\times 10^{-5}) = 5 - 0.0229 = 4.98$ (acidic salt solution, $\\text{pH} < 7$)."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة تميؤ كاتيون الأمونيوم: $\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^+$ (أيون الكلوريد لا يتميأ).",
      "٢. ثابت التميؤ: $K_h = \\frac{K_w}{K_b} = \\frac{10^{-14}}{1.80 \\times 10^{-5}} = 5.56 \\times 10^{-10}$.",
      "٣. تركيز الهيدرونيوم: $[\\text{H}_3\\text{O}^+] = \\sqrt{K_h \\cdot c} = \\sqrt{5.56 \\times 10^{-10} \\times 0.200} = 1.05 \\times 10^{-5}\\text{ M}$.",
      "٤. حساب الرقم الهيدروجيني: $\\text{pH} = -\\log(1.05 \\times 10^{-5}) = 4.98$ (محلول حمضي التأثير لأن الحمض الأصلي قوي والقاعدة ضعيفة)."
    ],
    "teacherTipEn": "Salts of strong acid + weak base are always acidic (pH < 7); salts of weak acid + strong base are always basic (pH > 7).",
    "teacherTipAr": "أملاح الحمض القوي والقاعدة الضعيفة تكون محاليلها حمضية (pH < 7)، وأملاح الحمض الضعيف والقاعدة القوية قاعدية (pH > 7)."
  },
  {
    "id": "egbac_chem_ch3_se_05",
    "titleEn": "Acidic Buffer Solution: Henderson-Hasselbalch Formulation",
    "titleAr": "المحلول المنظم الحمضي: معادلة هندرسون-هاسلبالخ",
    "difficulty": "easy",
    "questionEn": "A buffer solution is prepared by mixing $0.250\\text{ M}$ acetic acid ($\\text{CH}_3\\text{COOH}, K_a = 1.80 \\times 10^{-5}, \\text{p}K_a = 4.74$) and $0.150\\text{ M}$ sodium acetate ($\\text{CH}_3\\text{COONa}$) in a $1.0\\text{ L}$ volume. Calculate the $\\text{pH}$ of this buffer.",
    "questionAr": "حُضّر محلول منظم بخلط $0.250\\text{ M}$ من حمض الخليك ($\\text{p}K_a = 4.74$) مع $0.150\\text{ M}$ من أسيتات الصوديوم في حجم مقداره $1.0\\text{ L}$. احسب الرقم الهيدروجيني $\\text{pH}$ لهذا المحلول المنظم.",
    "optionsEn": [
      "$\\text{pH} = 4.74$",
      "$\\text{pH} = 4.52$",
      "$\\text{pH} = 4.96$",
      "$\\text{pH} = 5.22$"
    ],
    "optionsAr": [
      "$\\text{pH} = 4.74$",
      "$\\text{pH} = 4.52$",
      "$\\text{pH} = 4.96$",
      "$\\text{pH} = 5.22$"
    ],
    "correctAnswer": "$\\text{pH} = 4.52$",
    "correctIndex": 1,
    "hintEn": "Apply Henderson-Hasselbalch: pH = pKa + log([Conjugate Base] / [Weak Acid]) = 4.74 + log(0.150 / 0.250).",
    "hintAr": "طبق معادلة هندرسون-هاسلبالخ: pH = pKa + log([القاعدة المقترنة] / [الحمض الضعيف]) = 4.74 + log(0.150 / 0.250).",
    "stepByStepSolutionEn": [
      "1. Henderson-Hasselbalch buffer equation: $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right)$.",
      "2. Ratio of conjugate base to weak acid: $\\frac{[\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]} = \\frac{0.150\\text{ M}}{0.250\\text{ M}} = 0.600$.",
      "3. Logarithm of ratio: $\\log(0.600) = -0.2218$.",
      "4. Calculate $\\text{pH}$: $\\text{pH} = 4.74 - 0.2218 \\approx 4.52$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة هندرسون-هاسلبالخ للمحلول المنظم: $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{الملح القاعدة}]}{[\\text{الحمض}]}\\right)$.",
      "٢. نسبة القاعدة المقترنة إلى الحمض: $0.150 / 0.250 = 0.600$.",
      "٣. لوغاريتم النسبة: $\\log(0.600) = -0.222$.",
      "٤. حساب الرقم الهيدروجيني: $\\text{pH} = 4.74 - 0.222 = 4.52$."
    ],
    "teacherTipEn": "When [conjugate base] < [weak acid], the buffer pH is strictly less than pKa; when equal, pH = pKa.",
    "teacherTipAr": "عندما يكون تركيز القاعدة المقترنة أقل من تركيز الحمض الضعيف، تكون قيمة pH المحلول المنظم أقل من pKa حتماً."
  },
  {
    "id": "egbac_chem_ch3_se_06",
    "titleEn": "Buffer Action and pH Shift Upon Strong Acid Addition",
    "titleAr": "آلية عمل المحلول المنظم ومقاومة التغير في الرقم الهيدروجيني عند إضافة حمض قوي",
    "difficulty": "medium",
    "questionEn": "To $1.00\\text{ L}$ of the buffer solution from the previous problem ($0.250\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.150\\text{ M } \\text{CH}_3\\text{COONa}, \\text{pH} = 4.52$), $0.020\\text{ mol}$ of gaseous hydrogen chloride ($\\text{HCl}$) is added with negligible volume change. Calculate the new $\\text{pH}$ of the buffer and the net $\\text{pH}$ change $\\Delta \\text{pH}$.",
    "questionAr": "أُضيف $0.020\\text{ mol}$ من غاز كلوريد الهيدروجين $\\text{HCl}$ إلى لتر واحد من المحلول المنظم السابق ($0.250\\text{ M}$ حمض و $0.150\\text{ M}$ ملح، $\\text{pH} = 4.52$) دون تغير في الحجم. احسب الرقم الهيدروجيني الجديد للمحلول المنظم ومقدار التغير $\\Delta \\text{pH}$.",
    "optionsEn": [
      "$\\text{pH}_{\\text{new}} = 1.70, \\quad \\Delta \\text{pH} = -2.82$",
      "$\\text{pH}_{\\text{new}} = 4.30, \\quad \\Delta \\text{pH} = -0.22$",
      "$\\text{pH}_{\\text{new}} = 4.42, \\quad \\Delta \\text{pH} = -0.10$",
      "$\\text{pH}_{\\text{new}} = 4.52, \\quad \\Delta \\text{pH} = 0.00$"
    ],
    "optionsAr": [
      "$\\text{pH}_{\\text{new}} = 1.70, \\quad \\Delta \\text{pH} = -2.82$",
      "$\\text{pH}_{\\text{new}} = 4.30, \\quad \\Delta \\text{pH} = -0.22$",
      "$\\text{pH}_{\\text{new}} = 4.42, \\quad \\Delta \\text{pH} = -0.10$",
      "$\\text{pH}_{\\text{new}} = 4.52, \\quad \\Delta \\text{pH} = 0.00$"
    ],
    "correctAnswer": "$\\text{pH}_{\\text{new}} = 4.42, \\quad \\Delta \\text{pH} = -0.10$",
    "correctIndex": 2,
    "hintEn": "Added H+ reacts with CH3COO-: base decreases by 0.020 (0.150 - 0.020 = 0.130), acid increases by 0.020 (0.250 + 0.020 = 0.270). New pH = 4.74 + log(0.130 / 0.270).",
    "hintAr": "أيونات H+ المضافة تتفاعل مع القاعدة المقترنة: يقل الملح بمقدار 0.020 (يصبح 0.130) ويزداد الحمض بمقدار 0.020 (يصبح 0.270).",
    "stepByStepSolutionEn": [
      "1. Neutralization stoichiometry: Strong acid $\\text{H}^+$ is quantitatively consumed by the buffer conjugate base:\n   $\\text{CH}_3\\text{COO}^- + \\text{H}^+ \\to \\text{CH}_3\\text{COOH}$.",
      "2. New amounts: $[\\text{CH}_3\\text{COO}^-] = 0.150 - 0.020 = 0.130\\text{ M}$, and $[\\text{CH}_3\\text{COOH}] = 0.250 + 0.020 = 0.270\\text{ M}$.",
      "3. Apply Henderson-Hasselbalch: $\\text{pH}_{\\text{new}} = 4.74 + \\log\\left(\\frac{0.130}{0.270}\\right) = 4.74 + \\log(0.4815) = 4.74 - 0.317 = 4.423 \\approx 4.42$.",
      "4. Net change: $\\Delta \\text{pH} = 4.42 - 4.52 = -0.10$. (In pure unbuffered water, adding $0.020\\text{ mol HCl}$ drops pH from $7.00$ to $1.70$, a massive drop of $5.3$ units!)."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة التعادل: تتفاعل أيونات البروتون القادمة من الحمض القوي مع القاعدة المقترنة: $\\text{CH}_3\\text{COO}^- + \\text{H}^+ \\to \\text{CH}_3\\text{COOH}$.",
      "٢. التراكيز الجديدة: $[\\text{الملح}] = 0.150 - 0.020 = 0.130\\text{ M}$، و $[\\text{الحمض}] = 0.250 + 0.020 = 0.270\\text{ M}$.",
      "٣. حساب $\\text{pH}$ الجديد: $\\text{pH} = 4.74 + \\log(0.130 / 0.270) = 4.74 - 0.317 = 4.42$.",
      "٤. مقدار التغير الطفيف: $\\Delta \\text{pH} = 4.42 - 4.52 = -0.10$، مما يبرهن على كفاءة المحلول المنظم في مقاومة التغير مقارنة بالماء النقي."
    ],
    "teacherTipEn": "This problem demonstrates the protective buffer capacity: a pH drop of merely 0.10 instead of a catastrophic drop to 1.70.",
    "teacherTipAr": "توضح هذه المسألة أهمية السعة المنظمة الحيوية: تغير طفيف بمقدار 0.10 فقط مقارنة بانهيار الرقم الهيدروجيني إلى 1.70 في غياب المنظم."
  },
  {
    "id": "egbac_chem_ch3_se_07",
    "titleEn": "Solubility Product Ksp and Common-Ion Suppression",
    "titleAr": "حاصل الإذابة Ksp وأثر الأيون المشترك على تقليل الذوبانية",
    "difficulty": "medium",
    "questionEn": "The solubility product constant of silver chloride ($\\text{AgCl}$) is $K_{sp} = 1.80 \\times 10^{-10}$ at $25^\\circ\\text{C}$. Calculate the molar solubility $s$ of $\\text{AgCl}$ in: (1) pure water, and (2) a $0.050\\text{ M } \\text{NaCl}$ aqueous solution.",
    "questionAr": "يبلغ حاصل إذابة كلوريد الفضة $\\text{AgCl}$ القيمة $K_{sp} = 1.80 \\times 10^{-10}$ عند $25^\\circ\\text{C}$. احسب الذوبانية المولارية $s$ لكلوريد الفضة في: (١) الماء النقي، و (٢) محلول مائي من كلوريد الصوديوم $\\text{NaCl}$ تركيزه $0.050\\text{ M}$.",
    "optionsEn": [
      "(1) $s_{\\text{water}} = 1.34 \\times 10^{-5}\\text{ M}$; (2) $s_{\\text{NaCl}} = 3.60 \\times 10^{-9}\\text{ M}$ (suppressed by $\\approx 3700\\times$)",
      "(1) $s = 1.80 \\times 10^{-5}\\text{ M}$; (2) $s = 1.80 \\times 10^{-9}\\text{ M}$",
      "(1) $s = 1.34 \\times 10^{-5}\\text{ M}$; (2) $s = 1.34 \\times 10^{-5}\\text{ M}$ (no change)",
      "(1) $s = 3.24 \\times 10^{-10}\\text{ M}$; (2) $s = 9.00 \\times 10^{-12}\\text{ M}$"
    ],
    "optionsAr": [
      "(١) في الماء النقي: $s = 1.34 \\times 10^{-5}\\text{ M}$؛ (٢) في محلول $\\text{NaCl}$: $s = 3.60 \\times 10^{-9}\\text{ M}$ (انخفضت بنحو 3700 ضعف)",
      "(١) $s = 1.80 \\times 10^{-5}\\text{ M}$؛ (٢) $s = 1.80 \\times 10^{-9}\\text{ M}$",
      "(١) $s = 1.34 \\times 10^{-5}\\text{ M}$؛ (٢) $s = 1.34 \\times 10^{-5}\\text{ M}$ (لا تتغير)",
      "(١) $s = 3.24 \\times 10^{-10}\\text{ M}$؛ (٢) $s = 9.00 \\times 10^{-12}\\text{ M}$"
    ],
    "correctAnswer": "(1) $s_{\\text{water}} = 1.34 \\times 10^{-5}\\text{ M}$; (2) $s_{\\text{NaCl}} = 3.60 \\times 10^{-9}\\text{ M}$ (suppressed by $\\approx 3700\\times$)",
    "correctIndex": 0,
    "hintEn": "In pure water: Ksp = s^2 => s = sqrt(Ksp). In 0.050 M NaCl: [Cl-] = 0.050 M, so s = Ksp / [Cl-] = 1.80e-10 / 0.050.",
    "hintAr": "في الماء النقي: s = جذر(Ksp). في وجود كلوريد الصوديوم: [Cl-] = 0.050 M، وبالتالي s = Ksp / [Cl-] = 1.80e-10 / 0.050.",
    "stepByStepSolutionEn": [
      "1. In pure water: $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$, so $K_{sp} = s^2$.\n   $s = \\sqrt{1.80 \\times 10^{-10}} \\approx 1.342 \\times 10^{-5}\\text{ M}$.",
      "2. In $0.050\\text{ M } \\text{NaCl}$: Common ion $\\text{Cl}^-$ is contributed primarily by strong electrolyte $\\text{NaCl}$ ($[\\text{Cl}^-] = 0.050 + s \\approx 0.050\\text{ M}$).",
      "3. Substitute into $K_{sp}$: $K_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = s \\times (0.050) = 1.80 \\times 10^{-10}$.",
      "4. Calculate suppressed solubility: $s = \\frac{1.80 \\times 10^{-10}}{0.050} = 3.60 \\times 10^{-9}\\text{ M}$ (a massive $3700$-fold reduction due to common-ion effect!)."
    ],
    "stepByStepSolutionAr": [
      "١. في الماء النقي: تفكك كلوريد الفضة يعطي $K_{sp} = s^2 \\implies s = \\sqrt{1.80 \\times 10^{-10}} = 1.34 \\times 10^{-5}\\text{ M}$.",
      "٢. في محلول $0.050\\text{ M } \\text{NaCl}$: يوفر ملح الطعام وفرة من أيونات الكلوريد المشتركة، فيكون $[\\text{Cl}^-] \\approx 0.050\\text{ M}$.",
      "٣. بالتعويض في حاصل الإذابة: $s \\times 0.050 = 1.80 \\times 10^{-10}$.",
      "٤. الذوبانية المنخفضة: $s = \\frac{1.80 \\times 10^{-10}}{0.050} = 3.60 \\times 10^{-9}\\text{ M}$ (انخفاض هائل بفعل الأيون المشترك)."
    ],
    "teacherTipEn": "The common-ion effect is utilized in gravimetric analysis to precipitate virtually 100% of an analyte by adding an excess of precipitating agent.",
    "teacherTipAr": "يُستغل تأثير الأيون المشترك في التحليل الكيميائي الوزني لترسيب كامل الأيونات المستهدفة بإضافة فائض من كاشف الترسيب."
  },
  {
    "id": "egbac_chem_ch3_se_08",
    "titleEn": "Precipitation Criterion via Ion Product Quotient Qsp",
    "titleAr": "معيار الترسيب والمقارنة بين حاصل الإذابة والحاصل الأيوني Qsp",
    "difficulty": "medium",
    "questionEn": "A chemist mixes $100\\text{ mL}$ of $0.0020\\text{ M } \\text{BaCl}_2$ with $100\\text{ mL}$ of $0.0040\\text{ M } \\text{K}_2\\text{SO}_4$. Given that $K_{sp}(\\text{BaSO}_4) = 1.10 \\times 10^{-10}$ at $25^\\circ\\text{C}$, calculate the reaction quotient $Q_{sp}$ and determine whether a precipitate of barium sulfate forms.",
    "questionAr": "خلط كيميائي $100\\text{ mL}$ من محلول كلوريد الباريوم $\\text{BaCl}_2$ تركيزه $0.0020\\text{ M}$ مع $100\\text{ mL}$ من كبريتات البوتاسيوم $\\text{K}_2\\text{SO}_4$ تركيزه $0.0040\\text{ M}$. إذا كان حاصل إذابة كبريتات الباريوم $K_{sp} = 1.10 \\times 10^{-10}$، فاحسب الحاصل الأيوني $Q_{sp}$ وحدد ما إذا كان سيتكون راسب.",
    "optionsEn": [
      "$Q_{sp} = 8.00 \\times 10^{-6}$; $Q_{sp} < K_{sp}$, so no precipitate forms.",
      "$Q_{sp} = 2.00 \\times 10^{-6}$; $Q_{sp} > K_{sp}$, so a white precipitate of $\\text{BaSO}_4$ precipitates immediately.",
      "$Q_{sp} = 1.10 \\times 10^{-10}$; $Q_{sp} = K_{sp}$, saturated solution with no precipitation.",
      "$Q_{sp} = 4.00 \\times 10^{-8}$; $Q_{sp} < K_{sp}$, solution remains clear."
    ],
    "optionsAr": [
      "$Q_{sp} = 8.00 \\times 10^{-6}$؛ وبما أن $Q_{sp} < K_{sp}$ فلا يتكون راسب.",
      "$Q_{sp} = 2.00 \\times 10^{-6}$؛ وبما أن $Q_{sp} > K_{sp}$، يتكون راسب أبيض من كبريتات الباريوم فوراً.",
      "$Q_{sp} = 1.10 \\times 10^{-10}$؛ وبما أن $Q_{sp} = K_{sp}$ فالمحلول مشبع دون ترسيب.",
      "$Q_{sp} = 4.00 \\times 10^{-8}$؛ وبما أن $Q_{sp} < K_{sp}$ يظل المحلول رائقاً."
    ],
    "correctAnswer": "$Q_{sp} = 2.00 \\times 10^{-6}$; $Q_{sp} > K_{sp}$, so a white precipitate of $\\text{BaSO}_4$ precipitates immediately.",
    "correctIndex": 1,
    "hintEn": "Calculate diluted concentrations after mixing (total volume = 200 mL): [Ba2+] = 0.0020 * (100/200) = 0.0010 M; [SO4 2-] = 0.0040 * (100/200) = 0.0020 M. Qsp = [Ba2+][SO4 2-].",
    "hintAr": "احسب التراكيز بعد التخفيف لمضاعفة الحجم إلى 200 مل: تركيز الباريوم = 0.0010 M، والكبريتات = 0.0020 M. احسب Qsp = [Ba2+][SO4 2-].",
    "stepByStepSolutionEn": [
      "1. Total volume after mixing: $V_{\\text{total}} = 100\\text{ mL} + 100\\text{ mL} = 200\\text{ mL}$.",
      "2. Diluted ion concentrations:\n   $[\\text{Ba}^{2+}] = (0.0020\\text{ M}) \\times \\frac{100\\text{ mL}}{200\\text{ mL}} = 1.00 \\times 10^{-3}\\text{ M}$,\n   $[\\text{SO}_4^{2-}] = (0.0040\\text{ M}) \\times \\frac{100\\text{ mL}}{200\\text{ mL}} = 2.00 \\times 10^{-3}\\text{ M}$.",
      "3. Calculate ion product: $Q_{sp} = [\\text{Ba}^{2+}][\\text{SO}_4^{2-}] = (1.00 \\times 10^{-3})(2.00 \\times 10^{-3}) = 2.00 \\times 10^{-6}$.",
      "4. Compare with $K_{sp}$: $Q_{sp} = 2.00 \\times 10^{-6} \\gg K_{sp} = 1.10 \\times 10^{-10}$. Since $Q_{sp} > K_{sp}$, the solution is supersaturated and $\\text{BaSO}_4(s)$ precipitates until ion concentrations satisfy $K_{sp}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحجم الكلي بعد الخلط: $100 + 100 = 200\\text{ mL}$.",
      "٢. التراكيز المخففة: $[\\text{Ba}^{2+}] = 0.0020 \\times (100/200) = 1.00 \\times 10^{-3}\\text{ M}$، و $[\\text{SO}_4^{2-}] = 0.0040 \\times (100/200) = 2.00 \\times 10^{-3}\\text{ M}$.",
      "٣. الحاصل الأيوني: $Q_{sp} = [\\text{Ba}^{2+}][\\text{SO}_4^{2-}] = 10^{-3} \\times (2 \\times 10^{-3}) = 2.00 \\times 10^{-6}$.",
      "٤. المقارنة مع $K_{sp}$: نجد أن $Q_{sp} > K_{sp}$ بكثير، مما يعني أن المحلول فوق مشبع ويترسب ملح كبريتات الباريوم الأبيض فورياً."
    ],
    "teacherTipEn": "Always account for dilution when mixing two solutions before calculating the ion product Qsp.",
    "teacherTipAr": "احرص دائماً على حساب التخفيف الناتج عن خلط حجمي المحلولين قبل التعويض في الحاصل الأيوني Qsp."
  },
  {
    "id": "egbac_chem_ch3_se_09",
    "titleEn": "Complex Ion Formation: Dissolution of Insoluble AgCl in Aqueous Ammonia",
    "titleAr": "تكوين الأيونات المعقدة: إذابة راسب كلوريد الفضة في محلول النشادر",
    "difficulty": "hots",
    "questionEn": "Insoluble silver chloride dissolves in aqueous ammonia by forming the diamminesilver(I) complex ion:\n1. $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq), \\quad K_{sp} = 1.80 \\times 10^{-10}$\n2. $\\text{Ag}^+(aq) + 2\\text{NH}_3(aq) \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+(aq), \\quad K_f = 1.70 \\times 10^7$\nCalculate the net equilibrium constant $K_{\\text{net}}$ for the dissolution of $\\text{AgCl}$ in ammonia, and find the molar solubility $s$ of $\\text{AgCl}$ in $1.00\\text{ M } \\text{NH}_3$.",
    "questionAr": "يذوب راسب كلوريد الفضة شحيح الذوبان في محلول النشادر المائي بتكوين أيون الفضة الأمونياكي المعقد:\n١. $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq), \\quad K_{sp} = 1.80 \\times 10^{-10}$\n٢. $\\text{Ag}^+(aq) + 2\\text{NH}_3(aq) \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+(aq), \\quad K_f = 1.70 \\times 10^7$\nاحسب ثابت الاتزان الكلي $K_{\\text{net}}$ لذوبان الراسب في النشادر، واحسب الذوبانية المولارية $s$ لكلوريد الفضة في محلول نشادر تركيزه $1.00\\text{ M}$.",
    "optionsEn": [
      "$K_{\\text{net}} = 3.06 \\times 10^{-3}, \\quad s = 0.050\\text{ M}$",
      "$K_{\\text{net}} = 1.06 \\times 10^{-17}, \\quad s = 3.25 \\times 10^{-9}\\text{ M}$",
      "$K_{\\text{net}} = 9.44 \\times 10^{16}, \\quad s = 0.970\\text{ M}$",
      "$K_{\\text{net}} = 1.80 \\times 10^{-10}, \\quad s = 1.34 \\times 10^{-5}\\text{ M}$"
    ],
    "optionsAr": [
      "$K_{\\text{net}} = 3.06 \\times 10^{-3}, \\quad s = 0.050\\text{ مولار}$",
      "$K_{\\text{net}} = 1.06 \\times 10^{-17}, \\quad s = 3.25 \\times 10^{-9}\\text{ M}$",
      "$K_{\\text{net}} = 9.44 \\times 10^{16}, \\quad s = 0.970\\text{ M}$",
      "$K_{\\text{net}} = 1.80 \\times 10^{-10}, \\quad s = 1.34 \\times 10^{-5}\\text{ M}$"
    ],
    "correctAnswer": "$K_{\\text{net}} = 3.06 \\times 10^{-3}, \\quad s = 0.050\\text{ M}$",
    "correctIndex": 0,
    "hintEn": "Net equation: AgCl + 2NH3 <=> [Ag(NH3)2]+ + Cl-. K_net = Ksp * Kf = 1.80e-10 * 1.70e7 = 3.06e-3. Set up s^2 / (1.00 - 2s)^2 = K_net.",
    "hintAr": "المعادلة المجمعة: K_net = Ksp * Kf = 3.06e-3. جدول التقدم: s^2 / (1 - 2s)^2 = K_net. خذ الجذر: s / (1 - 2s) = sqrt(K_net).",
    "stepByStepSolutionEn": [
      "1. Add the dissolution and complexation equations:\n   $\\text{AgCl}(s) + 2\\text{NH}_3(aq) \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+(aq) + \\text{Cl}^-(aq)$.",
      "2. Net equilibrium constant is the product: $K_{\\text{net}} = K_{sp} \\times K_f = (1.80 \\times 10^{-10})(1.70 \\times 10^7) = 3.06 \\times 10^{-3}$.",
      "3. Equilibrium expression: $K_{\\text{net}} = \\frac{[[\\text{Ag(NH}_3)_2]^+][\\text{Cl}^-]}{[\\text{NH}_3]^2} = \\frac{s^2}{(1.00 - 2s)^2} = 3.06 \\times 10^{-3}$.",
      "4. Take square root of both sides: $\\frac{s}{1.00 - 2s} = \\sqrt{3.06 \\times 10^{-3}} \\approx 0.05532$.",
      "5. Solve for $s$: $s = 0.05532 (1.00 - 2s) = 0.05532 - 0.1106 s \\implies 1.1106 s = 0.05532 \\implies s \\approx 0.0498\\text{ M} \\approx 0.050\\text{ M}$."
    ],
    "stepByStepSolutionAr": [
      "١. بجمع معادلتي الذوبان وتكوين المعقد: $\\text{AgCl}(s) + 2\\text{NH}_3(aq) \\rightleftharpoons [\\text{Ag(NH}_3)_2]^+(aq) + \\text{Cl}^-(aq)$.",
      "٢. ثابت الاتزان الكلي حاصل ضرب الثابتين: $K_{\\text{net}} = K_{sp} \\times K_f = 1.80 \\times 10^{-10} \\times 1.70 \\times 10^7 = 3.06 \\times 10^{-3}$.",
      "٣. قانون فعل الكتلة: $\\frac{s^2}{(1.00 - 2s)^2} = 3.06 \\times 10^{-3}$.",
      "٤. أخذ الجذر التربيعي للطرفين: $\\frac{s}{1.00 - 2s} = 0.0553$.",
      "٥. حل المعادلة جبرياً: $s = 0.0553 / 1.11 = 0.050\\text{ مولار}$."
    ],
    "teacherTipEn": "Formation of a stable complex ion consumes free metal cations, pulling the dissolution equilibrium strongly forward by Le Chatelier's principle.",
    "teacherTipAr": "يعمل تكوين الأيون المعقد المستقر على استهلاك الكاتيونات الحرة باستمرار، مما يسحب اتزان الترسيب طردياً ويذيب الراسب تماماً."
  },
  {
    "id": "egbac_chem_ch3_se_10",
    "titleEn": "Amphoteric Hydroxides: Dual Solubility in Acid and Base",
    "titleAr": "الهيدروكسيدات المترددة: الذوبان المزدوج في الأحماض والقواعد",
    "difficulty": "easy",
    "questionEn": "Aluminum hydroxide, $\\text{Al(OH)}_3(s)$, is an amphoteric hydroxide that is virtually insoluble in pure water. When either a strong acid ($\\text{HCl}$) or an excess of a strong base ($\\text{NaOH}$) is added, the white precipitate completely dissolves. What chemical species are responsible for its dissolution in (1) strong acid, and (2) excess strong base?",
    "questionAr": "هيدروكسيد الألومنيوم $\\text{Al(OH)}_3$ هيدروكسيد متردد شحيح الذوبان في الماء النقي. عند إضافة حمض قوي ($\\text{HCl}$) أو فائض من قاعدة قوية ($\\text{NaOH}$)، يذوب الراسب الأبيض تماماً في الحالتين. ما الأنواع الكيميائية المسؤولة عن ذوبانه في: (١) الحمض القوي، و (٢) فائض القاعدة القوية؟",
    "optionsEn": [
      "(1) In acid: $\\text{AlCl}_3$ precipitate; (2) In base: metallic aluminum.",
      "(1) In acid: hexaaquaaluminum ion $[\\text{Al(H}_2\\text{O})_6]^{3+}$ (or hydrated $\\text{Al}^{3+}$); (2) In base: aluminate complex $[\\text{Al(OH)}_4]^-$ (tetrahydroxoaluminate).",
      "(1) In acid: $[\\text{Al(OH)}_4]^-$; (2) In base: $[\\text{Al(H}_2\\text{O})_6]^{3+}$.",
      "(1) In acid: elemental $\\text{H}_2$ gas; (2) In base: $\\text{NaAlO}_2$ precipitate."
    ],
    "optionsAr": [
      "(١) في الحمض: راسب $\\text{AlCl}_3$؛ (٢) في القاعدة: فلز الألومنيوم.",
      "(١) في الحمض: كاتيون الألومنيوم المائي $[\\text{Al(H}_2\\text{O})_6]^{3+}$ (أو $\\text{Al}^{3+}$)؛ (٢) في القاعدة: معقد الألومينات الذائب $[\\text{Al(OH)}_4]^-$ (رباعي هيدروكسو ألومينات).",
      "(١) في الحمض: $[\\text{Al(OH)}_4]^-$؛ (٢) في القاعدة: $[\\text{Al(H}_2\\text{O})_6]^{3+}$.",
      "(١) في الحمض: غاز $\\text{H}_2$؛ (٢) في القاعدة: راسب $\\text{NaAlO}_2$."
    ],
    "correctAnswer": "(1) In acid: hexaaquaaluminum ion $[\\text{Al(H}_2\\text{O})_6]^{3+}$ (or hydrated $\\text{Al}^{3+}$); (2) In base: aluminate complex $[\\text{Al(OH)}_4]^-$ (tetrahydroxoaluminate).",
    "correctIndex": 1,
    "hintEn": "Al(OH)3 acts as a base in acid: Al(OH)3 + 3H+ -> Al^3+ + 3H2O. It acts as a Lewis acid in base: Al(OH)3 + OH- -> [Al(OH)4]-.",
    "hintAr": "يسلك Al(OH)3 كقاعدة مع الحمض ليعطي ملحاً ذائباً Al^3+، ويسلك كحمض لويس مع القاعدة مكوناً معقد الألومينات الذائب [Al(OH)4]-.",
    "stepByStepSolutionEn": [
      "1. Reaction with strong acid (basic behavior): $\\text{Al(OH)}_3(s) + 3\\text{H}^+(aq) \\to \\text{Al}^{3+}(aq) + 3\\text{H}_2\\text{O}(l)$. Hydroxide ligands are neutralized, freeing soluble aluminum cations.",
      "2. Reaction with excess strong base (acidic behavior): $\\text{Al(OH)}_3(s) + \\text{OH}^-(aq) \\rightleftharpoons [\\text{Al(OH)}_4]^-(aq)$ (tetrahydroxoaluminate). The vacant $3p$ orbital on aluminum accepts an electron pair from a fourth hydroxide ligand, forming a soluble complex anion.",
      "3. This dual reactivity is the hallmark definition of an amphoteric substance in inorganic chemistry."
    ],
    "stepByStepSolutionAr": [
      "١. التفاعل مع الحمض القوي (سلوك قاعدي): $\\text{Al(OH)}_3 + 3\\text{H}^+ \\to \\text{Al}^{3+} + 3\\text{H}_2\\text{O}$ حيث تتعادل مجموعات الهيدروكسيد ويتكون ملح ذائب.",
      "٢. التفاعل مع فائض القاعدة (سلوك حمضي): $\\text{Al(OH)}_3 + \\text{OH}^- \\to [\\text{Al(OH)}_4]^-$ (أيون رباعي هيدروكسيد الألومينات الذائب في الماء).",
      "٣. هذا التفاعل المزدوج يمثل التعريف الدقيق للسلوك المتردد (الأمفوتيري) في الكيمياء غير العضوية."
    ],
    "teacherTipEn": "Other common amphoteric hydroxides include Zn(OH)2 (forming [Zn(OH)4]^2-), Cr(OH)3, and Sn(OH)2.",
    "teacherTipAr": "تشمل الهيدروكسيدات المترددة الشائعة أيضاً كلاً من Zn(OH)2 و Cr(OH)3 و Sn(OH)2."
  }
];

export const egBacChemCh3Exercises: SolvedProblem[] = [
  {
    "id": "egbac_chem_ch3_ex_01",
    "titleEn": "pH of Strong Base Solutions and pOH Calculation",
    "titleAr": "حساب الرقم الهيدروجيني والهيدروكسيدي لقاعدة قوية ثنائية الهيدروكسيد",
    "difficulty": "easy",
    "questionEn": "Calculate the $\\text{pOH}$ and $\\text{pH}$ of a $0.0050\\text{ M}$ aqueous solution of barium hydroxide, $\\text{Ba(OH)}_2$, at $25^\\circ\\text{C}$, assuming complete dissociation.",
    "questionAr": "احسب كلاً من $\\text{pOH}$ و $\\text{pH}$ لمحلول مائي من هيدروكسيد الباريوم $\\text{Ba(OH)}_2$ تركيزه $0.0050\\text{ M}$ عند $25^\\circ\\text{C}$، بفرض التفكك التام.",
    "optionsEn": [
      "$\\text{pOH} = 2.30, \\quad \\text{pH} = 11.70$",
      "$\\text{pOH} = 1.00, \\quad \\text{pH} = 13.00$",
      "$\\text{pOH} = 2.00, \\quad \\text{pH} = 12.00$",
      "$\\text{pOH} = 2.00, \\quad \\text{pH} = 2.00$"
    ],
    "optionsAr": [
      "$\\text{pOH} = 2.30, \\quad \\text{pH} = 11.70$",
      "$\\text{pOH} = 1.00, \\quad \\text{pH} = 13.00$",
      "$\\text{pOH} = 2.00, \\quad \\text{pH} = 12.00$",
      "$\\text{pOH} = 2.00, \\quad \\text{pH} = 2.00$"
    ],
    "correctAnswer": "$\\text{pOH} = 2.00, \\quad \\text{pH} = 12.00$",
    "correctIndex": 2,
    "hintEn": "Ba(OH)2 yields 2 OH- per formula unit: [OH-] = 2 * 0.0050 = 0.010 M = 10^-2 M. pOH = -log(10^-2) = 2.00, pH = 14 - 2 = 12.",
    "hintAr": "كل مول من Ba(OH)2 يعطي 2 مول من OH-: [OH-] = 2 * 0.0050 = 0.010 M. إذن pOH = 2 و pH = 14 - 2 = 12.",
    "stepByStepSolutionEn": [
      "1. Dissociation of strong diprotic base: $\\text{Ba(OH)}_2(aq) \\to \\text{Ba}^{2+}(aq) + 2\\text{OH}^-(aq)$.",
      "2. Hydroxide ion concentration: $[\\text{OH}^-] = 2 \\times [\\text{Ba(OH)}_2] = 2 \\times (0.0050\\text{ M}) = 0.010\\text{ M} = 1.0 \\times 10^{-2}\\text{ M}$.",
      "3. Calculate $\\text{pOH}$: $\\text{pOH} = -\\log(1.0 \\times 10^{-2}) = 2.00$.",
      "4. Calculate $\\text{pH}$: $\\text{pH} = 14.00 - \\text{pOH} = 14.00 - 2.00 = 12.00$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة تفكك القاعدة القوية: $\\text{Ba(OH)}_2 \\to \\text{Ba}^{2+} + 2\\text{OH}^-$.",
      "٢. تركيز أيونات الهيدروكسيد: $[\\text{OH}^-] = 2 \\times 0.0050 = 0.010\\text{ M} = 10^{-2}\\text{ M}$.",
      "٣. حساب $\\text{pOH}$: $\\text{pOH} = -\\log(10^{-2}) = 2.00$.",
      "٤. حساب $\\text{pH}$: $\\text{pH} = 14.00 - 2.00 = 12.00$."
    ],
    "teacherTipEn": "Always check the stoichiometric ratio: group 2 metal hydroxides (Ca(OH)2, Ba(OH)2) produce TWO moles of OH- per mole of dissolved base.",
    "teacherTipAr": "انتبه لعدد مجموعات الهيدروكسيد: هيدروكسيدات فلزات المجموعة الثانية تطلق مولين من OH- لكل مول من القاعدة."
  },
  {
    "id": "egbac_chem_ch3_ex_02",
    "titleEn": "Ostwald Dilution Law for Weak Electrolytes",
    "titleAr": "قانون أوستفالد للتخفيف في الإلكتروليتات الضعيفة",
    "difficulty": "easy",
    "questionEn": "According to Ostwald's dilution law for a weak binary electrolyte, $\\alpha = \\sqrt{\\frac{K_a}{c}}$. If an aqueous solution of a weak acid is diluted with pure water such that its molar concentration decreases by a factor of $16$, what happens to its degree of ionization $\\alpha$?",
    "questionAr": "وفق قانون أوستفالد لتخفيف الإلكتروليت الضعيف: $\\alpha = \\sqrt{\\frac{K_a}{c}}$. إذا خُفف محلول حمض ضعيف بالماء المقطر بحيث انخفض تركيزه المولي بمقدار $16$ ضعفاً، فماذا يحدث لدرجة تأينه $\\alpha$؟",
    "optionsEn": [
      "The degree of ionization $\\alpha$ decreases by a factor of 4.",
      "The degree of ionization $\\alpha$ increases by a factor of 16.",
      "The degree of ionization $\\alpha$ remains strictly constant.",
      "The degree of ionization $\\alpha$ increases by a factor of $4$ (quadruples)."
    ],
    "optionsAr": [
      "تقل درجة التأين $\\alpha$ بمقدار 4 أضعاف.",
      "تزداد درجة التأين $\\alpha$ بمقدار 16 ضعفاً.",
      "تظل درجة التأين $\\alpha$ ثابتة دون أي تغير.",
      "تزداد درجة التأين $\\alpha$ بمقدار $4$ أضعاف (تتضاعف 4 مرات)."
    ],
    "correctAnswer": "The degree of ionization $\\alpha$ increases by a factor of $4$ (quadruples).",
    "correctIndex": 3,
    "hintEn": "alpha proportional to 1 / sqrt(c). If c becomes c/16, alpha becomes sqrt(16) * alpha = 4 * alpha.",
    "hintAr": "درجة التأين تتناسب عكسياً مع جذر التركيز: alpha تتناسب مع 1 / جذر(c). إذا أصبح c / 16، تزداد ألفا بمقدار جذر(16) = 4.",
    "stepByStepSolutionEn": [
      "1. Ostwald's dilution law: $\\alpha = \\sqrt{\\frac{K_a}{c}} \\propto \\frac{1}{\\sqrt{c}}$.",
      "2. When concentration is reduced to $c' = \\frac{c}{16}$:\n   $\\alpha' = \\sqrt{\\frac{K_a}{c/16}} = \\sqrt{16} \\times \\sqrt{\\frac{K_a}{c}} = 4 \\alpha$.",
      "3. Dilution increases the separation between ions, decreasing the recombination rate and driving the equilibrium toward higher dissociation (Le Chatelier's principle)."
    ],
    "stepByStepSolutionAr": [
      "١. قانون أوستفالد للتخفيف: $\\alpha = \\sqrt{K_a / c}$، أي أن درجة التأين تتناسب عكسياً مع الجذر التربيعي للتركيز.",
      "٢. عند انخفاض التركيز إلى $c / 16$: $\\alpha' = \\sqrt{16} \\times \\alpha = 4\\alpha$.",
      "٣. التخفيف يزيد المسافات البينية بين الأيونات ويقلل احتمالية اتحادها، مما يزيح الاتزان طردياً نحو مزيد من التأين."
    ],
    "teacherTipEn": "Dilution increases the degree of ionization (alpha), but DECREASES total [H3O+] because the volume expansion outweighs the increase in alpha.",
    "teacherTipAr": "التخفيف يزيد درجة التأين ألفا، ولكنه يخفض التركيز الكلي لأيونات الهيدرونيوم [H3O+] في المحلول نظراً لتمدد الحجم."
  },
  {
    "id": "egbac_chem_ch3_ex_03",
    "titleEn": "Hydrolysis of Basic Salt: Sodium Acetate Solution pH",
    "titleAr": "تميؤ ملح قاعدي: حساب الرقم الهيدروجيني لمحلول أسيتات الصوديوم",
    "difficulty": "medium",
    "questionEn": "Sodium acetate ($\\text{CH}_3\\text{COONa}$) is dissolved in water to make a $0.100\\text{ M}$ solution. Given $K_a(\\text{CH}_3\\text{COOH}) = 1.80 \\times 10^{-5}$ and $K_w = 1.00 \\times 10^{-14}$ at $25^\\circ\\text{C}$, calculate the hydroxide ion concentration $[\\text{OH}^-]$ and the $\\text{pH}$ of the solution.",
    "questionAr": "أُذيبت أسيتات الصوديوم $\\text{CH}_3\\text{COONa}$ في الماء لتحضير محلول تركيزه $0.100\\text{ M}$. بمعلومية $K_a = 1.80 \\times 10^{-5}$ و $K_w = 1.00 \\times 10^{-14}$ عند $25^\\circ\\text{C}$، احسب تركيز أيون الهيدروكسيد $[\\text{OH}^-]$ والرقم الهيدروجيني $\\text{pH}$.",
    "optionsEn": [
      "$[\\text{OH}^-] = 7.45 \\times 10^{-6}\\text{ M}, \\quad \\text{pH} = 8.87$",
      "$[\\text{OH}^-] = 1.34 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 11.13$",
      "$[\\text{OH}^-] = 5.56 \\times 10^{-10}\\text{ M}, \\quad \\text{pH} = 4.74$",
      "$[\\text{OH}^-] = 1.00 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 7.00$"
    ],
    "optionsAr": [
      "$[\\text{OH}^-] = 7.45 \\times 10^{-6}\\text{ M}, \\quad \\text{pH} = 8.87$",
      "$[\\text{OH}^-] = 1.34 \\times 10^{-3}\\text{ M}, \\quad \\text{pH} = 11.13$",
      "$[\\text{OH}^-] = 5.56 \\times 10^{-10}\\text{ M}, \\quad \\text{pH} = 4.74$",
      "$[\\text{OH}^-] = 1.00 \\times 10^{-7}\\text{ M}, \\quad \\text{pH} = 7.00$"
    ],
    "correctAnswer": "$[\\text{OH}^-] = 7.45 \\times 10^{-6}\\text{ M}, \\quad \\text{pH} = 8.87$",
    "correctIndex": 0,
    "hintEn": "Kh = Kw / Ka = 10^-14 / 1.8e-5 = 5.56e-10. [OH-] = sqrt(Kh * c) = sqrt(5.56e-10 * 0.100). pOH = -log[OH-], pH = 14 - pOH.",
    "hintAr": "ثابت التميؤ: Kh = Kw / Ka = 5.56e-10. تركيز [OH-] = جذر(Kh * c). احسب pOH ثم pH = 14 - pOH.",
    "stepByStepSolutionEn": [
      "1. Anion hydrolysis: $\\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{OH}^-$.",
      "2. Base hydrolysis constant: $K_b = \\frac{K_w}{K_a} = \\frac{1.00 \\times 10^{-14}}{1.80 \\times 10^{-5}} \\approx 5.556 \\times 10^{-10}$.",
      "3. Hydroxide concentration: $[\\text{OH}^-] = \\sqrt{K_b \\cdot c} = \\sqrt{(5.556 \\times 10^{-10})(0.100)} = \\sqrt{5.556 \\times 10^{-11}} \\approx 7.454 \\times 10^{-6}\\text{ M}$.",
      "4. Calculate $\\text{pOH} = -\\log(7.454 \\times 10^{-6}) = 6 - 0.8724 = 5.13$.",
      "5. Calculate $\\text{pH} = 14.00 - 5.13 = 8.87$ (basic solution, $\\text{pH} > 7$)."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة تميؤ أنيون الأسيتات: $\\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{OH}^-$.",
      "٢. ثابت التميؤ القاعدي: $K_b = \\frac{K_w}{K_a} = 5.56 \\times 10^{-10}$.",
      "٣. تركيز الهيدروكسيد: $[\\text{OH}^-] = \\sqrt{5.56 \\times 10^{-10} \\times 0.100} = 7.45 \\times 10^{-6}\\text{ M}$.",
      "٤. حساب $\\text{pOH}$: $\\text{pOH} = -\\log(7.45 \\times 10^{-6}) = 5.13$.",
      "٥. حساب $\\text{pH}$: $\\text{pH} = 14.00 - 5.13 = 8.87$ (محلول قاعدي لأن القاعدة الأصلية NaOH قوية والحمض ضعيف)."
    ],
    "teacherTipEn": "The hydrolysis of the conjugate base of a weak acid produces an alkaline solution with pH > 7.",
    "teacherTipAr": "ينتج عن تميؤ القاعدة المقترنة لحمض ضعيف محلول قلوي ذو رقم هيدروجيني أكبر من 7."
  },
  {
    "id": "egbac_chem_ch3_ex_04",
    "titleEn": "Basic Buffer Solution: Ammonia and Ammonium Chloride",
    "titleAr": "المحلول المنظم القاعدي: الأمونيا وكلوريد الأمونيوم",
    "difficulty": "medium",
    "questionEn": "A basic buffer is made of $0.200\\text{ M } \\text{NH}_3$ (aqueous ammonia, $K_b = 1.80 \\times 10^{-5}, \\text{p}K_b = 4.74$) and $0.300\\text{ M } \\text{NH}_4\\text{Cl}$ at $25^\\circ\\text{C}$. Calculate the $\\text{pOH}$ and the $\\text{pH}$ of this buffer.",
    "questionAr": "حُضّر محلول منظم قاعدي من $0.200\\text{ M}$ أمونيا ($K_b = 1.80 \\times 10^{-5}, \\text{p}K_b = 4.74$) مع $0.300\\text{ M}$ كلوريد أمونيوم عند $25^\\circ\\text{C}$. احسب $\\text{pOH}$ و $\\text{pH}$ لهذا المحلول المنظم.",
    "optionsEn": [
      "$\\text{pOH} = 4.56, \\quad \\text{pH} = 9.44$",
      "$\\text{pOH} = 4.92, \\quad \\text{pH} = 9.08$",
      "$\\text{pOH} = 4.74, \\quad \\text{pH} = 9.26$",
      "$\\text{pOH} = 5.22, \\quad \\text{pH} = 8.78$"
    ],
    "optionsAr": [
      "$\\text{pOH} = 4.56, \\quad \\text{pH} = 9.44$",
      "$\\text{pOH} = 4.92, \\quad \\text{pH} = 9.08$",
      "$\\text{pOH} = 4.74, \\quad \\text{pH} = 9.26$",
      "$\\text{pOH} = 5.22, \\quad \\text{pH} = 8.78$"
    ],
    "correctAnswer": "$\\text{pOH} = 4.92, \\quad \\text{pH} = 9.08$",
    "correctIndex": 1,
    "hintEn": "Henderson-Hasselbalch for bases: pOH = pKb + log([Conjugate Acid] / [Weak Base]) = 4.74 + log(0.300 / 0.200). Then pH = 14 - pOH.",
    "hintAr": "معادلة القواعد: pOH = pKb + log([الملح الحمضي] / [القاعدة]) = 4.74 + log(0.300 / 0.200). ثم pH = 14 - pOH.",
    "stepByStepSolutionEn": [
      "1. Henderson-Hasselbalch equation for basic buffer: $\\text{pOH} = \\text{p}K_b + \\log\\left(\\frac{[\\text{BH}^+]}{[\\text{B}]}\\right)$.",
      "2. Ratio of conjugate acid to base: $\\frac{[\\text{NH}_4^+]}{[\\text{NH}_3]} = \\frac{0.300}{0.200} = 1.50$.",
      "3. Calculate $\\text{pOH}$: $\\text{pOH} = 4.74 + \\log(1.50) = 4.74 + 0.1761 = 4.916 \\approx 4.92$.",
      "4. Calculate $\\text{pH}$: $\\text{pH} = 14.00 - \\text{pOH} = 14.00 - 4.92 = 9.08$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة هندرسون-هاسلبالخ للمنظم القاعدي: $\\text{pOH} = \\text{p}K_b + \\log\\left(\\frac{[\\text{الملح}]}{[\\text{القاعدة}]}\\right)$.",
      "٢. نسبة الملح إلى القاعدة: $0.300 / 0.200 = 1.50$.",
      "٣. حساب $\\text{pOH}$: $\\text{pOH} = 4.74 + \\log(1.50) = 4.74 + 0.176 = 4.92$.",
      "٤. حساب الرقم الهيدروجيني: $\\text{pH} = 14.00 - 4.92 = 9.08$."
    ],
    "teacherTipEn": "Take care: for basic buffers, the Henderson-Hasselbalch equation directly yields pOH, which must then be subtracted from 14 to find pH.",
    "teacherTipAr": "انتبه جيداً: تطبق معادلة هندرسون-هاسلبالخ للقواعد لحساب pOH أولاً، ثم يُطرح الناتج من 14 للحصول على pH."
  },
  {
    "id": "egbac_chem_ch3_ex_05",
    "titleEn": "Buffer Capacity and the Optimal Ratio for Maximum Resistance",
    "titleAr": "السعة المنظمة والنسبة المثالية لأقصى كفاءة تنظيمية",
    "difficulty": "easy",
    "questionEn": "Under what conditions does a buffer solution exhibit its maximum buffer capacity (highest resistance against $\\text{pH}$ shifts upon addition of either acid or base)?",
    "questionAr": "تحت أي ظرف من الظروف التالية يُظهر المحلول المنظم أقصى سعة تنظيمية (أعلى مقاومة لتغير الرقم الهيدروجيني عند إضافة حمض أو قاعدة)؟",
    "optionsEn": [
      "When the concentration of weak acid is 10 times higher than the conjugate base.",
      "When the buffer solution is diluted with pure water to an extremely low molarity.",
      "When the concentrations of the weak acid and its conjugate base are high and exactly equal ($[\\text{HA}] = [\\text{A}^-]$), so that $\\text{pH} = \\text{p}K_a$.",
      "When the solution $\\text{pH}$ is exactly equal to $7.00$ at all temperatures."
    ],
    "optionsAr": [
      "عندما يكون تركيز الحمض الضعيف أكبر 10 مرات من تركيز القاعدة المقترنة.",
      "عند تخفيف المحلول المنظم بالماء النقي إلى تركيز مولي منخفض للغاية.",
      "عندما تكون تراكيز الحمض الضعيف وقاعدته المقترنة مرتفعة ومتساوية تماماً ($[\\text{HA}] = [\\text{A}^-]$)، بحيث يكون $\\text{pH} = \\text{p}K_a$.",
      "عندما تكون قيمة الرقم الهيدروجيني مساوية 7.00 تماماً عند جميع درجات الحرارة."
    ],
    "correctAnswer": "When the concentrations of the weak acid and its conjugate base are high and exactly equal ($[\\text{HA}] = [\\text{A}^-]$), so that $\\text{pH} = \\text{p}K_a$.",
    "correctIndex": 2,
    "hintEn": "Buffer capacity is maximized when [acid] = [conjugate base] (pH = pKa) and total concentration is as high as possible.",
    "hintAr": "تبلغ السعة المنظمة أقصاها عندما يتساوى تركيز الحمض مع قاعدته المقترنة (pH = pKa) مع كبر التركيز الكلي للمحلول.",
    "stepByStepSolutionEn": [
      "1. Buffer capacity ($\\beta$) measures the moles of strong acid or base required to change the $\\text{pH}$ of $1\\text{ L}$ of buffer by $1$ unit.",
      "2. Analytically, $\\beta = 2.303 \\frac{[\\text{HA}][\\text{A}^-]}{[\\text{HA}] + [\\text{A}^-]}$. This mathematical function reaches a global maximum when $[\\text{HA}] = [\\text{A}^-]$.",
      "3. At this equimolar condition, $\\frac{[\\text{A}^-]}{[\\text{HA}]} = 1 \\implies \\log(1) = 0 \\implies \\text{pH} = \\text{p}K_a$, offering equal reserve neutralizing capacity against both incoming acid and base."
    ],
    "stepByStepSolutionAr": [
      "١. تقيس السعة المنظمة $\\beta$ عدد مولات الحمض القوي أو القاعدة القوية اللازمة لتغيير الرقم الهيدروجيني للتر من المحلول بمقدار وحدة واحدة.",
      "٢. رياضياً، تبلغ هذه الدالة نهايتها العظمى عندما يتساوى تركيز الحمض الضعيف مع قاعدته المقترنة: $[\\text{HA}] = [\\text{A}^-]$.",
      "٣. عند هذا التساوي يكون $\\log(1) = 0$ وتكون $\\text{pH} = \\text{p}K_a$، مما يوفر قدرة متكافئة للتعامل مع الأحماض والقواعد المضافة."
    ],
    "teacherTipEn": "The effective operating range of any buffer system is practically limited to pH = pKa +/- 1.",
    "teacherTipAr": "المدى التشغيلي الفعال لأي محلول منظم ينحصر عملياً في النطاق: pH = pKa +/- 1."
  },
  {
    "id": "egbac_chem_ch3_ex_06",
    "titleEn": "Solubility Product for Sparingly Soluble Salt of Type A2B3",
    "titleAr": "حاصل الإذابة لملح شحيح الذوبان من النوع A2B3",
    "difficulty": "medium",
    "questionEn": "Bismuth(III) sulfide, $\\text{Bi}_2\\text{S}_3$, is a sparingly soluble salt that dissociates as: $\\text{Bi}_2\\text{S}_3(s) \\rightleftharpoons 2\\text{Bi}^{3+}(aq) + 3\\text{S}^{2-}(aq)$. If its molar solubility in pure water is $s$, what is the mathematical expression for its solubility product constant $K_{sp}$ in terms of $s$?",
    "questionAr": "كبريتيد البزموت $\\text{Bi}_2\\text{S}_3$ ملح شحيح الذوبان يتفكك وفق المعادلة: $\\text{Bi}_2\\text{S}_3(s) \\rightleftharpoons 2\\text{Bi}^{3+}(aq) + 3\\text{S}^{2-}(aq)$. إذا كانت ذوبانيته المولارية في الماء النقي هي $s$، فما هو التعبير الرياضي لحاصل الإذابة $K_{sp}$ بدلالة $s$؟",
    "optionsEn": [
      "$K_{sp} = 6 s^5$",
      "$K_{sp} = 54 s^5$",
      "$K_{sp} = 27 s^4$",
      "$K_{sp} = 108 s^5$"
    ],
    "optionsAr": [
      "$K_{sp} = 6 s^5$",
      "$K_{sp} = 54 s^5$",
      "$K_{sp} = 27 s^4$",
      "$K_{sp} = 108 s^5$"
    ],
    "correctAnswer": "$K_{sp} = 108 s^5$",
    "correctIndex": 3,
    "hintEn": "[Bi3+] = 2s, [S2-] = 3s. Ksp = [Bi3+]^2 * [S2-]^3 = (2s)^2 * (3s)^3 = 4s^2 * 27s^3 = 108 s^5.",
    "hintAr": "[Bi3+] = 2s، و [S2-] = 3s. حاصل الإذابة Ksp = (2s)^2 * (3s)^3 = 4s^2 * 27s^3 = 108 s^5.",
    "stepByStepSolutionEn": [
      "1. Stoichiometric dissociation: $\\text{Bi}_2\\text{S}_3(s) \\rightleftharpoons 2\\text{Bi}^{3+}(aq) + 3\\text{S}^{2-}(aq)$.",
      "2. At equilibrium, $[\\text{Bi}^{3+}] = 2s$ and $[\\text{S}^{2-}] = 3s$.",
      "3. Substitute into $K_{sp}$ expression: $K_{sp} = [\\text{Bi}^{3+}]^2 [\\text{S}^{2-}]^3 = (2s)^2 (3s)^3$.",
      "4. Expand: $(4 s^2)(27 s^3) = 108 s^5$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة تفكك الملح: $\\text{Bi}_2\\text{S}_3 \\rightleftharpoons 2\\text{Bi}^{3+} + 3\\text{S}^{2-}$.",
      "٢. عند الاتزان: $[\\text{Bi}^{3+}] = 2s$ و $[\\text{S}^{2-}] = 3s$.",
      "٣. التعويض في حاصل الإذابة: $K_{sp} = [\\text{Bi}^{3+}]^2 [\\text{S}^{2-}]^3 = (2s)^2 (3s)^3$.",
      "٤. فك الأقواس: $4s^2 \\times 27s^3 = 108 s^5$."
    ],
    "teacherTipEn": "General rule for salt A_x B_y: Ksp = x^x * y^y * s^(x+y). Here 2^2 * 3^3 * s^(2+3) = 4 * 27 * s^5 = 108 s^5.",
    "teacherTipAr": "القاعدة العامة لأي ملح A_x B_y هي: Ksp = x^x * y^y * s^(x+y). هنا 2^2 * 3^3 * s^5 = 108 s^5."
  },
  {
    "id": "egbac_chem_ch3_ex_07",
    "titleEn": "Molar Solubility Calculation for Hydroxides with Low Ksp",
    "titleAr": "حساب الذوبانية المولارية لهيدروكسيد شحيح الذوبان",
    "difficulty": "medium",
    "questionEn": "The solubility product of magnesium hydroxide, $\\text{Mg(OH)}_2$, is $K_{sp} = 1.80 \\times 10^{-11}$ at $25^\\circ\\text{C}$. Calculate its molar solubility $s$ in pure water and the $\\text{pH}$ of a saturated $\\text{Mg(OH)}_2$ solution.",
    "questionAr": "يبلغ حاصل إذابة هيدروكسيد المغنيسيوم $\\text{Mg(OH)}_2$ القيمة $K_{sp} = 1.80 \\times 10^{-11}$ عند $25^\\circ\\text{C}$. احسب ذوبانيته المولارية $s$ في الماء النقي والرقم الهيدروجيني $\\text{pH}$ لمحلوله المشبع.",
    "optionsEn": [
      "$s = 1.65 \\times 10^{-4}\\text{ M}, \\quad \\text{pH} = 10.52$",
      "$s = 4.24 \\times 10^{-6}\\text{ M}, \\quad \\text{pH} = 8.63$",
      "$s = 1.65 \\times 10^{-4}\\text{ M}, \\quad \\text{pH} = 10.22$",
      "$s = 3.30 \\times 10^{-4}\\text{ M}, \\quad \\text{pH} = 10.82$"
    ],
    "optionsAr": [
      "$s = 1.65 \\times 10^{-4}\\text{ M}, \\quad \\text{pH} = 10.52$",
      "$s = 4.24 \\times 10^{-6}\\text{ M}, \\quad \\text{pH} = 8.63$",
      "$s = 1.65 \\times 10^{-4}\\text{ M}, \\quad \\text{pH} = 10.22$",
      "$s = 3.30 \\times 10^{-4}\\text{ M}, \\quad \\text{pH} = 10.82$"
    ],
    "correctAnswer": "$s = 1.65 \\times 10^{-4}\\text{ M}, \\quad \\text{pH} = 10.52$",
    "correctIndex": 0,
    "hintEn": "Ksp = [Mg2+][OH-]^2 = s * (2s)^2 = 4s^3. Solve s = (Ksp / 4)^(1/3). [OH-] = 2s, pOH = -log[OH-], pH = 14 - pOH.",
    "hintAr": "Ksp = 4s^3 => s = الجذر التكعيبي لـ (Ksp / 4). تركيز الهيدروكسيد [OH-] = 2s. احسب pOH ثم pH = 14 - pOH.",
    "stepByStepSolutionEn": [
      "1. Dissociation: $\\text{Mg(OH)}_2(s) \\rightleftharpoons \\text{Mg}^{2+}(aq) + 2\\text{OH}^-(aq)$.",
      "2. Solubility product expression: $K_{sp} = [\\text{Mg}^{2+}][\\text{OH}^-]^2 = s (2s)^2 = 4 s^3$.",
      "3. Calculate $s$: $s = \\sqrt[3]{\\frac{K_{sp}}{4}} = \\sqrt[3]{\\frac{1.80 \\times 10^{-11}}{4}} = \\sqrt[3]{4.50 \\times 10^{-12}} \\approx 1.651 \\times 10^{-4}\\text{ M}$.",
      "4. Hydroxide concentration: $[\\text{OH}^-] = 2 s = 2(1.651 \\times 10^{-4}) = 3.302 \\times 10^{-4}\\text{ M}$.",
      "5. Calculate $\\text{pOH} = -\\log(3.302 \\times 10^{-4}) = 3.481 \\implies \\text{pH} = 14.00 - 3.48 = 10.52$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة التفكك: $\\text{Mg(OH)}_2 \\rightleftharpoons \\text{Mg}^{2+} + 2\\text{OH}^-$.",
      "٢. حاصل الإذابة: $K_{sp} = s \\times (2s)^2 = 4s^3$.",
      "٣. حساب $s$: $s = \\sqrt[3]{1.80 \\times 10^{-11} / 4} = 1.65 \\times 10^{-4}\\text{ M}$.",
      "٤. تركيز أيونات الهيدروكسيد: $[\\text{OH}^-] = 2s = 3.30 \\times 10^{-4}\\text{ M}$.",
      "٥. حساب الرقم الهيدروجيني: $\\text{pOH} = 3.48 \\implies \\text{pH} = 14.00 - 3.48 = 10.52$."
    ],
    "teacherTipEn": "Remember to double the solubility s when computing [OH-] because magnesium hydroxide produces two hydroxide ions per formula unit.",
    "teacherTipAr": "تذكر دائماً ضرب الذوبانية s في 2 لحساب تركيز [OH-] لأن كل وحدة صيغة تطلق أيوني هيدروكسيد."
  },
  {
    "id": "egbac_chem_ch3_ex_08",
    "titleEn": "Selective Fractional Precipitation of Halides by Silver Ion",
    "titleAr": "الترسيب التجزيئي الانتقائي للهاليدات بأيونات الفضة",
    "difficulty": "hots",
    "questionEn": "A solution contains $0.010\\text{ M } \\text{Cl}^-$ and $0.010\\text{ M } \\text{I}^-$. Solid $\\text{AgNO}_3$ is added dropwise with stirring. Given $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$ and $K_{sp}(\\text{AgI}) = 8.5 \\times 10^{-17}$ at $25^\\circ\\text{C}$:\n(1) Which salt precipitates first?\n(2) What is $[\\text{I}^-]$ in solution just as $\\text{AgCl}$ begins to precipitate?",
    "questionAr": "محلول يحتوي على خليط من أيونات الكلوريد $[\\text{Cl}^-] = 0.010\\text{ M}$ واليوديد $[\\text{I}^-] = 0.010\\text{ M}$. أُضيف نترات الفضة تدريجياً. بمعلومية $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$ و $K_{sp}(\\text{AgI}) = 8.5 \\times 10^{-17}$:\n(١) أي الملحين يترسب أولاً؟\n(٢) كم يبلغ تركيز $[\\text{I}^-]$ المتبقي في المحلول لحظة بدء ترسيب كلوريد الفضة؟",
    "optionsEn": [
      "$\\text{AgCl}$ precipitates first; $[\\text{I}^-] = 0.010\\text{ M}$",
      "$\\text{AgI}$ precipitates first; $[\\text{I}^-] = 4.72 \\times 10^{-9}\\text{ M}$ ($99.9995\\%$ of iodide has precipitated)",
      "Both salts precipitate simultaneously; $[\\text{I}^-] = 1.8 \\times 10^{-10}\\text{ M}$",
      "$\\text{AgI}$ precipitates first; $[\\text{I}^-] = 8.5 \\times 10^{-15}\\text{ M}$"
    ],
    "optionsAr": [
      "$\\text{AgCl}$ يترسب أولاً؛ وتركيز $[\\text{I}^-] = 0.010\\text{ M}$",
      "$\\text{AgI}$ يترسب أولاً؛ وتركيز $[\\text{I}^-] = 4.72 \\times 10^{-9}\\text{ M}$ (ترسب أكثر من 99.999% من اليوديد)",
      "يترسب الملحان معاً في نفس اللحظة؛ وتركيز $[\\text{I}^-] = 1.8 \\times 10^{-10}\\text{ M}$",
      "$\\text{AgI}$ يترسب أولاً؛ وتركيز $[\\text{I}^-] = 8.5 \\times 10^{-15}\\text{ M}$"
    ],
    "correctAnswer": "$\\text{AgI}$ precipitates first; $[\\text{I}^-] = 4.72 \\times 10^{-9}\\text{ M}$ ($99.9995\\%$ of iodide has precipitated)",
    "correctIndex": 1,
    "hintEn": "Calculate [Ag+] needed to start precipitation: for AgI, [Ag+] = 8.5e-17 / 0.010 = 8.5e-15 M. For AgCl, [Ag+] = 1.8e-10 / 0.010 = 1.8e-8 M. AgI starts far earlier. When AgCl starts, [Ag+] = 1.8e-8 M, so [I-] = 8.5e-17 / 1.8e-8.",
    "hintAr": "احسب [Ag+] اللازم لبدء الترسيب: لـ AgI يلزم 8.5e-15 M، ولـ AgCl يلزم 1.8e-8 M. إذن يترسب AgI أولاً. عند بدء ترسيب AgCl يكون [I-] = Ksp(AgI) / [Ag+].",
    "stepByStepSolutionEn": [
      "1. Minimum $[\\text{Ag}^+]$ to precipitate $\\text{AgI}$: $[\\text{Ag}^+] = \\frac{K_{sp}(\\text{AgI})}{[\\text{I}^-]} = \\frac{8.5 \\times 10^{-17}}{0.010} = 8.5 \\times 10^{-15}\\text{ M}$.",
      "2. Minimum $[\\text{Ag}^+]$ to precipitate $\\text{AgCl}$: $[\\text{Ag}^+] = \\frac{K_{sp}(\\text{AgCl})}{[\\text{Cl}^-]} = \\frac{1.8 \\times 10^{-10}}{0.010} = 1.8 \\times 10^{-8}\\text{ M}$.",
      "3. Because $8.5 \\times 10^{-15}\\text{ M} \\ll 1.8 \\times 10^{-8}\\text{ M}$, $\\text{AgI}$ precipitates first at vastly lower silver concentration.",
      "4. When $\\text{AgCl}$ begins precipitating, $[\\text{Ag}^+] = 1.8 \\times 10^{-8}\\text{ M}$. At that instant, remaining iodide in solution is:\n   $[\\text{I}^-] = \\frac{K_{sp}(\\text{AgI})}{[\\text{Ag}^+]} = \\frac{8.5 \\times 10^{-17}}{1.8 \\times 10^{-8}} \\approx 4.72 \\times 10^{-9}\\text{ M}$ (virtually $100\\%$ quantitative separation)."
    ],
    "stepByStepSolutionAr": [
      "١. تركيز الفضة اللازم لبدء ترسيب $\\text{AgI}$: $[\\text{Ag}^+] = 8.5 \\times 10^{-17} / 0.010 = 8.5 \\times 10^{-15}\\text{ M}$.",
      "٢. تركيز الفضة اللازم لبدء ترسيب $\\text{AgCl}$: $[\\text{Ag}^+] = 1.8 \\times 10^{-10} / 0.010 = 1.8 \\times 10^{-8}\\text{ M}$.",
      "٣. بما أن $\\text{AgI}$ يتطلب تركيز فضة أقل بمليون مرة، فإنه يترسب أولاً.",
      "٤. عند بدء ترسيب كلوريد الفضة يكون $[\\text{Ag}^+] = 1.8 \\times 10^{-8}\\text{ M}$. تركيز اليوديد المتبقي: $[\\text{I}^-] = \\frac{8.5 \\times 10^{-17}}{1.8 \\times 10^{-8}} = 4.72 \\times 10^{-9}\\text{ M}$ (فصل كيميائي تام بنسبة 99.9995%)."
    ],
    "teacherTipEn": "Fractional precipitation exploits huge disparities in Ksp values to cleanly separate ions in qualitative chemical analysis.",
    "teacherTipAr": "يستغل الترسيب التجزيئي الفروق الهائلة في قيم حاصل الإذابة لفصل الأيونات كمياً في التحليل الكيميائي الوصفي."
  },
  {
    "id": "egbac_chem_ch3_ex_09",
    "titleEn": "Lewis Acid-Base Definition and Coordinate Covalent Bonding",
    "titleAr": "مفهوم لويس للأحماض والقواعد والرابطة التناسقية",
    "difficulty": "easy",
    "questionEn": "In the gas-phase reaction between boron trifluoride and ammonia: $\\text{BF}_3(g) + :\\text{NH}_3(g) \\to \\text{F}_3\\text{B}\\leftarrow\\text{NH}_3(s)$, which species acts as the Lewis acid and which as the Lewis base?",
    "questionAr": "في التفاعل الغازي بين ثالث فلوريد البورون والأمونيا: $\\text{BF}_3(g) + :\\text{NH}_3(g) \\to \\text{F}_3\\text{B}\\leftarrow\\text{NH}_3(s)$، أي المادتين تسلك كحمض لويس وأيهما كقاعدة لويس؟",
    "optionsEn": [
      "$\\text{NH}_3$ is the Lewis acid; $\\text{BF}_3$ is the Lewis base.",
      "Both $\\text{BF}_3$ and $\\text{NH}_3$ act as Brønsted-Lowry proton donors.",
      "$\\text{BF}_3$ is the Lewis acid (electron-pair acceptor); $\\text{NH}_3$ is the Lewis base (electron-pair donor).",
      "Neither species acts as an acid or base because no protons are transferred."
    ],
    "optionsAr": [
      "$\\text{NH}_3$ هي حمض لويس؛ و $\\text{BF}_3$ هو قاعدة لويس.",
      "كلا المركبين يسلك كمانح للبروتونات وفق مفهوم برونشتد-لوري.",
      "$\\text{BF}_3$ هو حمض لويس (مستقبل زوج الإلكترونات)؛ و $\\text{NH}_3$ هي قاعدة لويس (مانحة زوج الإلكترونات).",
      "لا يسلك أي منهما كحمض أو قاعدة لعدم حدوث انتقال للبروتونات."
    ],
    "correctAnswer": "$\\text{BF}_3$ is the Lewis acid (electron-pair acceptor); $\\text{NH}_3$ is the Lewis base (electron-pair donor).",
    "correctIndex": 2,
    "hintEn": "Lewis acid = electron pair acceptor (BF3 has vacant 2p orbital, incomplete octet of 6 e-). Lewis base = electron pair donor (:NH3 has lone pair).",
    "hintAr": "حمض لويس: مستقبل لزوج الإلكترونات (البورون لديه أوربيتال 2p فارغ). قاعدة لويس: مانح لزوج الإلكترونات (النيتروجين لديه زوج حر).",
    "stepByStepSolutionEn": [
      "1. In $\\text{BF}_3$, the central boron atom has only $6$ valence electrons ($sp^2$ hybridized) with an empty unhybridized $2p_z$ orbital.",
      "2. In $\\text{NH}_3$, nitrogen possesses a non-bonding lone pair of electrons in an $sp^3$ hybrid orbital.",
      "3. Nitrogen donates its lone pair into boron's empty orbital, forming a coordinate covalent (dative) bond. Therefore, $\\text{BF}_3$ is a Lewis acid and $\\text{NH}_3$ is a Lewis base."
    ],
    "stepByStepSolutionAr": [
      "١. في جزيء $\\text{BF}_3$، تحاط ذرة البورون بـ 6 إلكترونات فقط وتمتلك أوربيتال $2p$ فارغاً غير مهجن.",
      "٢. في جزيء النشادر $\\text{NH}_3$، تمتلك ذرة النيتروجين زوج إلكترونات حراً غير رابط.",
      "٣. يمنح النيتروجين زوج الإلكترونات إلى الأوربيتال الفارغ للبورون مكوناً رابطة تناسقية، فيكون $\\text{BF}_3$ حمض لويس و $\\text{NH}_3$ قاعدة لويس."
    ],
    "teacherTipEn": "The Lewis concept extends acid-base chemistry far beyond proton transfer to include coordination complexes and organometallics.",
    "teacherTipAr": "يوسع مفهوم لويس كيمياء الأحماض والقواعد ليشمل المركبات التناسقية وتفاعلات تكوين الروابط التناسقية دون اشتراط وجود بروتونات."
  },
  {
    "id": "egbac_chem_ch3_ex_10",
    "titleEn": "Equilibrium Constant of Acid-Base Neutralization",
    "titleAr": "ثابت اتزان تفاعل التعادل بين حمض ضعيف وقاعدة قوية",
    "difficulty": "medium",
    "questionEn": "Calculate the numerical value of the equilibrium constant $K_n$ for the neutralization reaction between acetic acid and sodium hydroxide: $\\text{CH}_3\\text{COOH}(aq) + \\text{OH}^-(aq) \\rightleftharpoons \\text{CH}_3\\text{COO}^-(aq) + \\text{H}_2\\text{O}(l)$ at $25^\\circ\\text{C}$. ($K_a = 1.80 \\times 10^{-5}, \\, K_w = 1.00 \\times 10^{-14}$).",
    "questionAr": "احسب القيمة العددية لثابت الاتزان $K_n$ لتفاعل التعادل بين حمض الأسيتيك وهيدروكسيد الصوديوم: $\\text{CH}_3\\text{COOH}(aq) + \\text{OH}^-(aq) \\rightleftharpoons \\text{CH}_3\\text{COO}^-(aq) + \\text{H}_2\\text{O}(l)$ عند $25^\\circ\\text{C}$. ($K_a = 1.80 \\times 10^{-5}, \\, K_w = 1.00 \\times 10^{-14}$).",
    "optionsEn": [
      "$K_n = K_a \\times K_w = 1.80 \\times 10^{-19}$",
      "$K_n = \\frac{K_w}{K_a} = 5.56 \\times 10^{-10}$",
      "$K_n = 1.00 \\times 10^{14}$",
      "$K_n = \\frac{K_a}{K_w} = 1.80 \\times 10^9$"
    ],
    "optionsAr": [
      "$K_n = K_a \\times K_w = 1.80 \\times 10^{-19}$",
      "$K_n = \\frac{K_w}{K_a} = 5.56 \\times 10^{-10}$",
      "$K_n = 1.00 \\times 10^{14}$",
      "$K_n = \\frac{K_a}{K_w} = 1.80 \\times 10^9$"
    ],
    "correctAnswer": "$K_n = \\frac{K_a}{K_w} = 1.80 \\times 10^9$",
    "correctIndex": 3,
    "hintEn": "Combine: CH3COOH <=> H+ + CH3COO- (Ka) and H+ + OH- <=> H2O (1/Kw). Kn = Ka / Kw = 1.80e-5 / 1.00e-14 = 1.80e9.",
    "hintAr": "اجمع معادلة تفكك الحمض (Ka) مع عكس تفكك الماء (1/Kw): Kn = Ka / Kw = 1.80e9.",
    "stepByStepSolutionEn": [
      "1. The neutralization reaction can be written as the sum of two equilibria:\n   - $\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{H}^+ + \\text{CH}_3\\text{COO}^- \\quad (K_a = 1.80 \\times 10^{-5})$\n   - $\\text{H}^+ + \\text{OH}^- \\rightleftharpoons \\text{H}_2\\text{O} \\quad (K = 1/K_w = 1.00 \\times 10^{14})$",
      "2. The equilibrium constant of the combined equation is the product: $K_n = K_a \\times \\frac{1}{K_w} = \\frac{K_a}{K_w}$.",
      "3. Calculate: $K_n = \\frac{1.80 \\times 10^{-5}}{1.00 \\times 10^{-14}} = 1.80 \\times 10^9$.",
      "4. The enormous magnitude of $K_n$ ($1.8 \\times 10^9 \\gg 1$) proves that the neutralization of a weak acid by a strong base goes to $99.999999\\%$ quantitative completion."
    ],
    "stepByStepSolutionAr": [
      "١. تفاعل التعادل هو ناتج جمع معادلتين:\n   - تفكك الحمض الضعيف: $K_a = 1.80 \\times 10^{-5}$.\n   - اتحاد أيونات الماء: $1/K_w = 1.00 \\times 10^{14}$.",
      "٢. ثابت اتزان التفاعل المجمع حاصل ضربهما: $K_n = K_a / K_w$.",
      "٣. الحساب: $K_n = \\frac{1.80 \\times 10^{-5}}{10^{-14}} = 1.80 \\times 10^9$.",
      "٤. تدل هذه القيمة الهائلة لثابت الاتزان ($1.8 \\times 10^9$) على أن تفاعل التعادل يسير إلى الاكتمال التام تقريباً."
    ],
    "teacherTipEn": "Because Kn >> 1, titrations of weak acids with strong bases have sharp, well-defined equivalence points suitable for analytical assays.",
    "teacherTipAr": "نظراً لأن Kn أكبر بكثير من 1، فإن معايرة الأحماض الضعيفة بالقواعد القوية تمتلك نقطة تكافؤ حادة ودقيقة صالحة للتحليل الكمي."
  },
  {
    "id": "egbac_chem_ch3_ex_11",
    "titleEn": "Effect of pH on Sparingly Soluble Salts of Weak Acids",
    "titleAr": "أثر الرقم الهيدروجيني على ذوبانية أملاح الأحماض الضعيفة",
    "difficulty": "easy",
    "questionEn": "Why does calcium carbonate, $\\text{CaCO}_3(s)$, readily dissolve in acidic aqueous solution (such as dilute hydrochloric acid), whereas silver chloride, $\\text{AgCl}(s)$, does not dissolve in strong acid?",
    "questionAr": "لماذا تذوب كربونات الكالسيوم $\\text{CaCO}_3$ بسهولة في الأحماض المخففة (مثل حمض الهيدروكلوريك)، بينما لا يذوب كلوريد الفضة $\\text{AgCl}$ في الأحماض القوية؟",
    "optionsEn": [
      "Because the carbonate ion $\\text{CO}_3^{2-}$ is the conjugate base of a weak acid ($\\text{HCO}_3^-$) and reacts with $\\text{H}^+$ to form $\\text{CO}_2$, whereas $\\text{Cl}^-$ is the conjugate base of a strong acid and does not react with $\\text{H}^+$.",
      "Because calcium is an alkali metal that reacts violently with water.",
      "Because silver chloride is an amphoteric covalent network solid.",
      "Because hydrochloric acid contains common chloride ions that dissolve silver."
    ],
    "optionsAr": [
      "لأن أنيون الكربونات $\\text{CO}_3^{2-}$ قاعدة مقترنة لحمض ضعيف يتحد مع $\\text{H}^+$ ويزاح الاتزان طردياً، بينما $\\text{Cl}^-$ قاعدة مقترنة لحمض قوي ولا تتفاعل مع $\\text{H}^+$.",
      "لأن الكالسيوم فلز قلوي يتفاعل بشدة مع الماء مطلقاً غاز الهيدروجين.",
      "لأن كلوريد الفضة مادة مترددة تتكون من شبكة تساهمية عملاقة.",
      "لأن حمض الهيدروكلوريك يحتوي على أيونات كلوريد مشتركة تذيب الفضة."
    ],
    "correctAnswer": "Because the carbonate ion $\\text{CO}_3^{2-}$ is the conjugate base of a weak acid ($\\text{HCO}_3^-$) and reacts with $\\text{H}^+$ to form $\\text{CO}_2$, whereas $\\text{Cl}^-$ is the conjugate base of a strong acid and does not react with $\\text{H}^+$.",
    "correctIndex": 0,
    "hintEn": "Salts whose anions are basic (conjugate bases of weak acids like CO3^2-, F-, S^2-) dissolve in acid. Salts of strong acids (Cl-, Br-, I-, SO4^2-) do not.",
    "hintAr": "أملاح الأحماض الضعيفة تذوب في الأحماض لأن بروتونات الحمض تستهلك الأنيون وتزيح التفكك للأمام؛ أما أملاح الأحماض القوية فلا تتأثر.",
    "stepByStepSolutionEn": [
      "1. For $\\text{CaCO}_3(s) \\rightleftharpoons \\text{Ca}^{2+}(aq) + \\text{CO}_3^{2-}(aq)$:\n   Added $\\text{H}^+$ reacts with $\\text{CO}_3^{2-}$: $\\text{CO}_3^{2-} + 2\\text{H}^+ \\to \\text{H}_2\\text{CO}_3 \\to \\text{H}_2\\text{O} + \\text{CO}_2(g)$.",
      "2. By Le Chatelier's principle, removing $\\text{CO}_3^{2-}$ pulls the dissolution equilibrium completely to the right, dissolving the limestone solid.",
      "3. For $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^-$: $\\text{Cl}^-$ is the conjugate base of the strong acid $\\text{HCl}$ ($K_a \\approx 10^7$), so $\\text{H}^+$ has zero affinity to bind $\\text{Cl}^-$ in water, leaving the equilibrium unaffected."
    ],
    "stepByStepSolutionAr": [
      "١. في كربونات الكالسيوم: تتحد أيونات الهيدروجين مع أيون الكربونات: $\\text{CO}_3^{2-} + 2\\text{H}^+ \\to \\text{H}_2\\text{O} + \\text{CO}_2$.",
      "٢. استهلاك أنيون الكربونات يخفض تركيزه، فينزاح اتزان الذوبان طردياً وفق قاعدة لوشاتيليه ويذوب الراسب بالكامل.",
      "٣. في كلوريد الفضة: أيون الكلوريد قاعدة مقترنة لحمض الهيدروكلوريك القوي جداً، فلا يتحد مع البروتون ولا يطرأ أي انزياح للاتزان."
    ],
    "teacherTipEn": "Universal rule: Sparingly soluble salts containing basic anions (carbonate, phosphate, sulfide, fluoride) dissolve in acid; salts of strong acids do not.",
    "teacherTipAr": "قاعدة عامة: تذوب أملاح الأحماض الضعيفة (كربونات، فوسفات، كبريتيد، فلوريد) في الأحماض، بينما لا تتأثر أملاح الأحماض القوية (كلوريدات، نترات)."
  },
  {
    "id": "egbac_chem_ch3_ex_12",
    "titleEn": "Titration Equivalence Point pH of Weak Acid with Strong Base",
    "titleAr": "الرقم الهيدروجيني عند نقطة تكافؤ معايرة حمض ضعيف مع قاعدة قوية",
    "difficulty": "medium",
    "questionEn": "When $50.0\\text{ mL}$ of $0.100\\text{ M}$ formic acid ($\\text{HCOOH}, K_a = 1.80 \\times 10^{-4}$) is titrated to the exact equivalence point with $0.100\\text{ M } \\text{NaOH}$, what is the $\\text{pH}$ of the solution at the equivalence point at $25^\\circ\\text{C}$?",
    "questionAr": "عند معايرة $50.0\\text{ mL}$ من حمض الفورميك $\\text{HCOOH}$ تركيزه $0.100\\text{ M}$ ($K_a = 1.80 \\times 10^{-4}$) حتى نقطة التكافؤ التامة مع $0.100\\text{ M } \\text{NaOH}$، ما قيمة الرقم الهيدروجيني $\\text{pH}$ عند نقطة التكافؤ عند $25^\\circ\\text{C}$؟",
    "optionsEn": [
      "$\\text{pH} = 7.00$",
      "$\\text{pH} = 8.22$",
      "$\\text{pH} = 5.78$",
      "$\\text{pH} = 9.45$"
    ],
    "optionsAr": [
      "$\\text{pH} = 7.00$",
      "$\\text{pH} = 8.22$",
      "$\\text{pH} = 5.78$",
      "$\\text{pH} = 9.45$"
    ],
    "correctAnswer": "$\\text{pH} = 8.22$",
    "correctIndex": 1,
    "hintEn": "At equivalence, volume doubles to 100 mL, so [HCOO-] = 0.050 M. Kb = Kw / Ka = 10^-14 / 1.8e-4 = 5.56e-11. [OH-] = sqrt(Kb * c) = sqrt(5.56e-11 * 0.050) = 1.67e-6. pOH = 5.78, pH = 8.22.",
    "hintAr": "عند التكافؤ يتضاعف الحجم إلى 100 مل، فيصبح تركيز فورمات الصوديوم 0.050 M. احسب [OH-] = جذر(Kb * c) = 1.67e-6 M. إذن pOH = 5.78 و pH = 8.22.",
    "stepByStepSolutionEn": [
      "1. At the equivalence point, all $\\text{HCOOH}$ is converted to sodium formate ($\\text{HCOONa}$): $V_{\\text{NaOH}} = 50.0\\text{ mL}$, so total volume $V_{\\text{total}} = 100.0\\text{ mL}$.",
      "2. Salt concentration: $c_{\\text{salt}} = \\frac{0.0050\\text{ mol}}{0.100\\text{ L}} = 0.0500\\text{ M}$.",
      "3. Hydrolysis of formate ion: $\\text{HCOO}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HCOOH} + \\text{OH}^-$, with $K_b = \\frac{K_w}{K_a} = \\frac{1.00 \\times 10^{-14}}{1.80 \\times 10^{-4}} \\approx 5.556 \\times 10^{-11}$.",
      "4. Hydroxide concentration: $[\\text{OH}^-] = \\sqrt{K_b \\cdot c} = \\sqrt{(5.556 \\times 10^{-11})(0.0500)} = \\sqrt{2.778 \\times 10^{-12}} \\approx 1.667 \\times 10^{-6}\\text{ M}$.",
      "5. $\\text{pOH} = -\\log(1.667 \\times 10^{-6}) = 5.78 \\implies \\text{pH} = 14.00 - 5.78 = 8.22$ (alkaline equivalence point, $\\text{pH} > 7$)."
    ],
    "stepByStepSolutionAr": [
      "١. عند نقطة التكافؤ يتحول الحمض كاملاً إلى ملح فورمات الصوديوم، ويصبح الحجم الكلي $100\\text{ mL}$.",
      "٢. تركيز الملح: $c = 0.050\\text{ M}$.",
      "٣. ثابت تميؤ أنيون الفورمات: $K_b = K_w / K_a = 5.56 \\times 10^{-11}$.",
      "٤. تركيز الهيدروكسيد: $[\\text{OH}^-] = \\sqrt{5.56 \\times 10^{-11} \\times 0.050} = 1.67 \\times 10^{-6}\\text{ M}$.",
      "٥. حساب الرقم الهيدروجيني: $\\text{pOH} = 5.78 \\implies \\text{pH} = 14.00 - 5.78 = 8.22$."
    ],
    "teacherTipEn": "The equivalence point of a weak acid titration with a strong base is always in the basic region (pH > 7); phenolphthalein is the indicator of choice.",
    "teacherTipAr": "تقع نقطة تكافؤ معايرة حمض ضعيف مع قاعدة قوية دائماً في المنطقة القاعدية (pH > 7)، ودليل الفينولفثالين هو الكاشف الأمثل لها."
  },
  {
    "id": "egbac_chem_ch3_ex_13",
    "titleEn": "Complex Formation Constant Kf and Free Metal Ion Suppression",
    "titleAr": "ثابت تكوين الأيون المعقد Kf وخفض تركيز الفلز الحر",
    "difficulty": "hots",
    "questionEn": "Copper(II) ions form a deep-blue tetraammine complex with ammonia:\n$\\text{Cu}^{2+}(aq) + 4\\text{NH}_3(aq) \\rightleftharpoons [\\text{Cu(NH}_3)_4]^{2+}(aq), \\quad K_f = 2.10 \\times 10^{13}$.\nIf $0.010\\text{ mol}$ of $\\text{CuSO}_4$ is dissolved in $1.00\\text{ L}$ of $1.00\\text{ M } \\text{NH}_3$, what is the concentration of uncomplexed, free copper(II) ions $[\\text{Cu}^{2+}]$ remaining at equilibrium?",
    "questionAr": "تكون أيونات النحاس الثنائية معقداً أزرق داكناً مع الأمونيا:\n$\\text{Cu}^{2+}(aq) + 4\\text{NH}_3(aq) \\rightleftharpoons [\\text{Cu(NH}_3)_4]^{2+}(aq), \\quad K_f = 2.10 \\times 10^{13}$.\nإذا أُذيب $0.010\\text{ mol}$ من كبريتات النحاس في لتر من محلول النشادر تركيزه $1.00\\text{ M}$، فما تركيز أيونات النحاس الحرة $[\\text{Cu}^{2+}]$ المتبقية دون ارتباط عند الاتزان؟",
    "optionsEn": [
      "$[\\text{Cu}^{2+}] = 4.76 \\times 10^{-14}\\text{ M}$",
      "$[\\text{Cu}^{2+}] = 1.00 \\times 10^{-6}\\text{ M}$",
      "$[\\text{Cu}^{2+}] = 5.56 \\times 10^{-16}\\text{ M}$",
      "$[\\text{Cu}^{2+}] = 2.10 \\times 10^{-11}\\text{ M}$"
    ],
    "optionsAr": [
      "$[\\text{Cu}^{2+}] = 4.76 \\times 10^{-14}\\text{ M}$",
      "$[\\text{Cu}^{2+}] = 1.00 \\times 10^{-6}\\text{ M}$",
      "$[\\text{Cu}^{2+}] = 5.56 \\times 10^{-16}\\text{ M}$",
      "$[\\text{Cu}^{2+}] = 2.10 \\times 10^{-11}\\text{ M}$"
    ],
    "correctAnswer": "$[\\text{Cu}^{2+}] = 5.56 \\times 10^{-16}\\text{ M}$",
    "correctIndex": 2,
    "hintEn": "Since Kf is huge (2.1e13), virtually all Cu2+ converts to complex: [[Cu(NH3)4]^2+] approx 0.010 M. NH3 remaining = 1.00 - 4(0.010) = 0.96 M. Then [Cu2+] = [[Cu(NH3)4]^2+] / (Kf * [NH3]^4).",
    "hintAr": "نظراً لكبر Kf الهائل، يتحول كل النحاس تقريباً إلى المعقد (0.010 M)، والأمونيا المتبقية = 1.00 - 4(0.010) = 0.96 M. احسب [Cu2+] = 0.010 / (Kf * (0.96)^4).",
    "stepByStepSolutionEn": [
      "1. Because $K_f = 2.10 \\times 10^{13} \\gg 1$, essentially all $\\text{Cu}^{2+}$ is converted to the complex: $[[\\text{Cu(NH}_3)_4]^{2+}] \\approx 0.010\\text{ M}$.",
      "2. Unreacted ammonia: $[\\text{NH}_3] = 1.00 - 4(0.010) = 1.00 - 0.040 = 0.960\\text{ M}$.",
      "3. Formation constant expression: $K_f = \\frac{[[\\text{Cu(NH}_3)_4]^{2+}]}{[\\text{Cu}^{2+}][\\text{NH}_3]^4}$.",
      "4. Rearrange for free $[\\text{Cu}^{2+}]$:\n   $[\\text{Cu}^{2+}] = \\frac{[[\\text{Cu(NH}_3)_4]^{2+}]}{K_f [\\text{NH}_3]^4} = \\frac{0.010}{(2.10 \\times 10^{13})(0.960)^4} = \\frac{0.010}{(2.10 \\times 10^{13})(0.8493)} = \\frac{0.010}{1.7836 \\times 10^{13}} \\approx 5.56 \\times 10^{-16}\\text{ M}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن ثابت التكوين $K_f$ كبير جداً ($2.10 \\times 10^{13}$)، يتحول النحاس بالكامل تقريباً إلى الأيون المعقد: $[[\\text{Cu(NH}_3)_4]^{2+}] \\approx 0.010\\text{ M}$.",
      "٢. تركيز الأمونيا المتبقية غير المتفاعلة: $[\\text{NH}_3] = 1.00 - 4(0.010) = 0.960\\text{ M}$.",
      "٣. بالتعويض في قانون ثابت التكوين: $2.10 \\times 10^{13} = \\frac{0.010}{[\\text{Cu}^{2+}] (0.960)^4}$.",
      "٤. تركيز أيونات النحاس الحرة: $[\\text{Cu}^{2+}] = 5.56 \\times 10^{-16}\\text{ M}$ (انخفاض مذهل إلى ما يقرب من الصفر المطلق)."
    ],
    "teacherTipEn": "Chelating and complexing agents suppress free metal ion concentrations by many orders of magnitude, preventing unwanted precipitation in industrial formulations.",
    "teacherTipAr": "تخفض العوامل المخلبية والمعقدة تركيز أيونات الفلز الحرة بدرجة مذهلة، مما يمنع ترسبها في التطبيقات الصناعية والطبية."
  },
  {
    "id": "egbac_chem_ch3_ex_14",
    "titleEn": "Buffer Solution Design: Selecting the Optimum Conjugate Pair",
    "titleAr": "تصميم المحلول المنظم: اختيار الزوج المقترن الأمثل لتثبيت قيمة pH مستهدفة",
    "difficulty": "easy",
    "questionEn": "A biochemist needs to prepare a biological buffer solution to maintain a constant physiological $\\text{pH} = 7.40$ for an enzymatic reaction. Which of the following weak acid systems is the best choice?",
    "questionAr": "يحتاج عالم كيمياء حيوية لتحضير محلول منظم بيولوجي لتثبيت الرقم الهيدروجيني عند $\\text{pH} = 7.40$ لتفاعل إنزيمي. أي من أنظمة الأحماض الضعيفة التالية يمثل الاختيار الأمثل علمياً؟",
    "optionsEn": [
      "$\\text{CH}_3\\text{COOH} / \\text{CH}_3\\text{COONa}$ system ($\\text{p}K_a = 4.74$)",
      "$\\text{HCOOH} / \\text{HCOONa}$ system ($\\text{p}K_a = 3.74$)",
      "$\\text{NH}_4^+ / \\text{NH}_3$ system ($\\text{p}K_a = 9.25$)",
      "$\\text{H}_2\\text{PO}_4^- / \\text{HPO}_4^{2-}$ system ($\\text{p}K_{a2} = 7.21$)"
    ],
    "optionsAr": [
      "نظام حمض الأسيتيك وأسيتات الصوديوم ($\\text{p}K_a = 4.74$)",
      "نظام حمض الفورميك وفورمات الصوديوم ($\\text{p}K_a = 3.74$)",
      "نظام أيون الأمونيوم والأمونيا ($\\text{p}K_a = 9.25$)",
      "نظام فوسفات ثنائي الهيدروجين / فوسفات أحادي الهيدروجين $\\text{H}_2\\text{PO}_4^- / \\text{HPO}_4^{2-}$ ($\\text{p}K_{a2} = 7.21$)"
    ],
    "correctAnswer": "$\\text{H}_2\\text{PO}_4^- / \\text{HPO}_4^{2-}$ system ($\\text{p}K_{a2} = 7.21$)",
    "correctIndex": 3,
    "hintEn": "Select the weak acid whose pKa is closest to the desired pH (target pH = 7.40, pKa2 of phosphate = 7.21 is within 0.19 units).",
    "hintAr": "اختر الحمض الضعيف الذي تكون قيمة pKa له الأقرب إلى الرقم الهيدروجيني المستهدف (الهدف 7.40، وأقرب قيمة هي 7.21 لنظام الفوسفات).",
    "stepByStepSolutionEn": [
      "1. To maximize buffer capacity, a buffer should be chosen such that $\\text{p}K_a \\approx \\text{pH}_{\\text{target}}$.",
      "2. For target $\\text{pH} = 7.40$:\n   - Acetic acid: $|4.74 - 7.40| = 2.66$ (far outside range)\n   - Formic acid: $|3.74 - 7.40| = 3.66$ (far outside range)\n   - Ammonium: $|9.25 - 7.40| = 1.85$ (outside range)\n   - Dihydrogen phosphate: $|7.21 - 7.40| = 0.19$ (virtually optimal!).",
      "3. The dihydrogen phosphate/monohydrogen phosphate conjugate pair is indeed the primary intracellular buffer in mammalian erythrocytes."
    ],
    "stepByStepSolutionAr": [
      "١. للحصول على أقصى سعة تنظيمية، يجب اختيار نظام منظم تكون قيمة $\\text{p}K_a$ لحمضه أقرب ما يمكن إلى الرقم المستهدف.",
      "٢. للهدف $\\text{pH} = 7.40$، نجد أن الفارق بين 7.40 و 7.21 هو 0.19 وحدة فقط، وهو أقرب اختيار من بين جميع البدائل.",
      "٣. يُعد نظام الفوسفات المنظم بالفعل النظام المنظم الرئيسي داخل خلايا الكائنات الحية والدم."
    ],
    "teacherTipEn": "General rule: Always select a buffer system where |pH_target - pKa| <= 1.0, preferably as close to zero as possible.",
    "teacherTipAr": "قاعدة عامة: اختر دائماً نظاماً منظم يكون فيه الفارق المطلق بين الرقم المستهدف وقيمة pKa أقل من 1، ويفضل أن يكون قريباً من الصفر."
  },
  {
    "id": "egbac_chem_ch3_ex_15",
    "titleEn": "Leveling Effect of Water on Strong Acids",
    "titleAr": "التأثير التسويتي (المسوّي) للماء على الأحماض القوية",
    "difficulty": "easy",
    "questionEn": "In dilute aqueous solutions, hydrochloric acid ($\\text{HCl}$), nitric acid ($\\text{HNO}_3$), and perchloric acid ($\\text{HClO}_4$) all appear to possess identical acidic strengths, despite having vastly different intrinsic acidities in non-aqueous solvents. What thermodynamic phenomenon causes this, and what is the strongest acid that can exist in liquid water?",
    "questionAr": "في المحاليل المائية المخففة، تتساوى القوة الحمضية لكل من حمض الهيدروكلوريك $\\text{HCl}$ وحمض النيتريك $\\text{HNO}_3$ وحمض البيركلوريك $\\text{HClO}_4$، على الرغم من تباين قوتها الذاتية في المذيبات غير المائية. ما الظاهرة المسببة لذلك، وما أقوى حمض يمكن أن يتواجد في الماء السائل؟",
    "optionsEn": [
      "The leveling effect of water; the hydronium ion ($\\text{H}_3\\text{O}^+$) is the strongest acid that can exist in aqueous solution.",
      "The common-ion effect; perchlorate ion ($\\text{ClO}_4^-$) is the strongest acid.",
      "The Ostwald dilution law; molecular hydrogen gas ($\\text{H}_2$) is the strongest acid.",
      "Hydrolysis of salts; the hydroxide ion ($\\text{OH}^-$) is the strongest acid."
    ],
    "optionsAr": [
      "التأثير التسويتي للماء؛ وأيون الهيدرونيوم ($\\text{H}_3\\text{O}^+$) هو أقوى حمض يمكن أن يتواجد في المحاليل المائية.",
      "تأثير الأيون المشترك؛ وأيون البيركلورات هو أقوى حمض.",
      "قانون أوستفالد للتخفيف؛ وغاز الهيدروجين الجزيئي هو أقوى حمض.",
      "تميؤ الأملاح؛ وأيون الهيدروكسيد هو أقوى حمض."
    ],
    "correctAnswer": "The leveling effect of water; the hydronium ion ($\\text{H}_3\\text{O}^+$) is the strongest acid that can exist in aqueous solution.",
    "correctIndex": 0,
    "hintEn": "Water levels all strong acids to H3O+ because water is sufficiently basic to accept 100% of their protons: HA + H2O -> H3O+ + A-.",
    "hintAr": "يقوم الماء بتسوية قوة جميع الأحماض القوية إلى قوة أيون الهيدرونيوم H3O+ لأنه يتفاعل معها جميعاً بنسبة 100% ويحولها إلى H3O+.",
    "stepByStepSolutionEn": [
      "1. Any acid stronger than $\\text{H}_3\\text{O}^+$ reacts completely and quantitatively with water: $\\text{HA} + \\text{H}_2\\text{O} \\to \\text{H}_3\\text{O}^+ + \\text{A}^-$.",
      "2. Because dissociation is $100\\%$ for all strong acids, the actual acid species present in solution is always the hydronium ion $\\text{H}_3\\text{O}^+$. This is called the **leveling effect** of the solvent.",
      "3. To differentiate their intrinsic acidities (where $\\text{HClO}_4 > \\text{HCl} > \\text{HNO}_3$), a weaker base than water (such as glacial acetic acid) must be used as the solvent."
    ],
    "stepByStepSolutionAr": [
      "١. أي حمض أقوى من أيون الهيدرونيوم يتفاعل تماماً وبنسبة $100\\%$ مع الماء: $\\text{HA} + \\text{H}_2\\text{O} \\to \\text{H}_3\\text{O}^+ + \\text{A}^-$.",
      "٢. نتيجة للتأين التام، يصبح الحمض الفعلي الموجود في المحلول دائماً هو أيون الهيدرونيوم $\\text{H}_3\\text{O}^+$، وتتساوى جميع الأحماض القوية في قوتها الظاهرية (التأثير المسوي للماء).",
      "٣. للتمييز بين قوتها الذاتية الحقيقية (حيث البيركلوريك هو الأقوى)، يجب استخدام مذيب أقل قاعدية من الماء مثل حمض الأسيتيك النقي الثلجي."
    ],
    "teacherTipEn": "The leveling effect dictates that no acid stronger than H3O+ and no base stronger than OH- can exist in aqueous solution.",
    "teacherTipAr": "وفق التأثير المسوي، لا يمكن لأي حمض أقوى من الهيدرونيوم أو قاعدة أقوى من الهيدروكسيد التواجد بحرية في المحاليل المائية."
  }
];
