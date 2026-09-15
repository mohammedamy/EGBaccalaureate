import type { SolvedProblem } from '../../../types/curriculum';

export const egBacChemCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_chem_ch1_se_01",
    "titleEn": "Stoichiometric Rate of Reaction and Disappearance",
    "titleAr": "المعدل الستوكيومتري لسرعة التفاعل ومعدل الاختفاء",
    "difficulty": "easy",
    "questionEn": "For the gas-phase synthesis of ammonia: $\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$, if molecular hydrogen is consumed at a rate of $-\\frac{d[\\text{H}_2]}{dt} = 0.060\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$, what is the rate of formation of ammonia $\\frac{d[\\text{NH}_3]}{dt}$ and the unique reaction rate $r$?",
    "questionAr": "في تفاعل تحضير غاز النشادر: $\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$، إذا كان معدل استهلاك غاز الهيدروجين هو $-\\frac{d[\\text{H}_2]}{dt} = 0.060\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$، فما معدل تكوّن النشادر $\\frac{d[\\text{NH}_3]}{dt}$ والسرعة الموحدة للتفاعل $r$؟",
    "optionsEn": [
      "$\\frac{d[\\text{NH}_3]}{dt} = 0.040\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}, \\quad r = 0.020\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$\\frac{d[\\text{NH}_3]}{dt} = 0.060\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}, \\quad r = 0.060\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$\\frac{d[\\text{NH}_3]}{dt} = 0.090\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}, \\quad r = 0.030\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$\\frac{d[\\text{NH}_3]}{dt} = 0.020\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}, \\quad r = 0.010\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$"
    ],
    "optionsAr": [
      "$\\frac{d[\\text{NH}_3]}{dt} = 0.040\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}, \\quad r = 0.020\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$\\frac{d[\\text{NH}_3]}{dt} = 0.060\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}, \\quad r = 0.060\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$\\frac{d[\\text{NH}_3]}{dt} = 0.090\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}, \\quad r = 0.030\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$\\frac{d[\\text{NH}_3]}{dt} = 0.020\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}, \\quad r = 0.010\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$"
    ],
    "correctAnswer": "$\\frac{d[\\text{NH}_3]}{dt} = 0.040\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}, \\quad r = 0.020\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
    "correctIndex": 0,
    "hintEn": "Use the rate relation: r = -(1/3) d[H2]/dt = +(1/2) d[NH3]/dt.",
    "hintAr": "استخدم العلاقة الستوكيومترية الموحدة: r = -(1/3) d[H2]/dt = +(1/2) d[NH3]/dt.",
    "stepByStepSolutionEn": [
      "1. By IUPAC definition, reaction rate $r = -\\frac{1}{1}\\frac{d[\\text{N}_2]}{dt} = -\\frac{1}{3}\\frac{d[\\text{H}_2]}{dt} = +\\frac{1}{2}\\frac{d[\\text{NH}_3]}{dt}$.",
      "2. Reaction rate $r = \\frac{1}{3}(0.060) = 0.020\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$.",
      "3. Ammonia formation rate: $\\frac{d[\\text{NH}_3]}{dt} = 2 \\times r = 2(0.020) = 0.040\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$."
    ],
    "stepByStepSolutionAr": [
      "١. وفق تعريف الاتحاد الدولي (IUPAC): $r = -\\frac{1}{3}\\frac{d[\\text{H}_2]}{dt} = +\\frac{1}{2}\\frac{d[\\text{NH}_3]}{dt}$.",
      "٢. سرعة التفاعل العامة: $r = \\frac{1}{3} \\times 0.060 = 0.020\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$.",
      "٣. معدل تكوّن النشادر: $\\frac{d[\\text{NH}_3]}{dt} = 2 \\times r = 2 \\times 0.020 = 0.040\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$."
    ],
    "teacherTipEn": "Always divide the rate of disappearance or appearance by the species' stoichiometric coefficient to find the unique reaction rate.",
    "teacherTipAr": "قسّم دائماً معدل اختفاء أو ظهور أي مادة على معاملها الستوكيومتري للحصول على السرعة العامة للتفاعل."
  },
  {
    "id": "egbac_chem_ch1_se_02",
    "titleEn": "Determination of Partial Reaction Orders via Initial Rates",
    "titleAr": "تعيين رتب التفاعل الجزئية بطريقة السرعات الابتدائية",
    "difficulty": "medium",
    "questionEn": "For the reaction $2\\text{NO}(g) + \\text{O}_2(g) \\to 2\\text{NO}_2(g)$, initial rate measurements yielded:\n- Exp 1: $[\\text{NO}] = 0.010\\text{ M}, [\\text{O}_2] = 0.010\\text{ M} \\implies r_0 = 2.5 \\times 10^{-5}\\text{ M/s}$\n- Exp 2: $[\\text{NO}] = 0.020\\text{ M}, [\\text{O}_2] = 0.010\\text{ M} \\implies r_0 = 1.0 \\times 10^{-4}\\text{ M/s}$\n- Exp 3: $[\\text{NO}] = 0.010\\text{ M}, [\\text{O}_2] = 0.020\\text{ M} \\implies r_0 = 5.0 \\times 10^{-5}\\text{ M/s}$\nWhat is the differential rate law and the overall reaction order?",
    "questionAr": "للتفاعل $2\\text{NO}(g) + \\text{O}_2(g) \\to 2\\text{NO}_2(g)$، أعطت قياسات السرعة الابتدائية:\n- التجربة ١: $[\\text{NO}] = 0.010\\text{ M}, [\\text{O}_2] = 0.010\\text{ M} \\implies r_0 = 2.5 \\times 10^{-5}\\text{ M/s}$\n- التجربة ٢: $[\\text{NO}] = 0.020\\text{ M}, [\\text{O}_2] = 0.010\\text{ M} \\implies r_0 = 1.0 \\times 10^{-4}\\text{ M/s}$\n- التجربة ٣: $[\\text{NO}] = 0.010\\text{ M}, [\\text{O}_2] = 0.020\\text{ M} \\implies r_0 = 5.0 \\times 10^{-5}\\text{ M/s}$\nما هو قانون سرعة التفاعل التفاضلي والرتبة الكلية للتفاعل؟",
    "optionsEn": [
      "$r = k [\\text{NO}] [\\text{O}_2]$, overall order = 2",
      "$r = k [\\text{NO}]^2 [\\text{O}_2]$, overall order = 3",
      "$r = k [\\text{NO}]^2 [\\text{O}_2]^2$, overall order = 4",
      "$r = k [\\text{NO}] [\\text{O}_2]^2$, overall order = 3"
    ],
    "optionsAr": [
      "$r = k [\\text{NO}] [\\text{O}_2]$، والرتبة الكلية = 2",
      "$r = k [\\text{NO}]^2 [\\text{O}_2]$، والرتبة الكلية = 3",
      "$r = k [\\text{NO}]^2 [\\text{O}_2]^2$، والرتبة الكلية = 4",
      "$r = k [\\text{NO}] [\\text{O}_2]^2$، والرتبة الكلية = 3"
    ],
    "correctAnswer": "$r = k [\\text{NO}]^2 [\\text{O}_2]$, overall order = 3",
    "correctIndex": 1,
    "hintEn": "Compare Exp 2/Exp 1: doubling [NO] quadruples rate (order 2). Compare Exp 3/Exp 1: doubling [O2] doubles rate (order 1).",
    "hintAr": "قارن التجربة ٢ بالتجربة ١: مضاعفة [NO] ضاعفت السرعة 4 مرات (رتبة ثانية). قارن ٣ بـ ١: مضاعفة [O2] ضاعفت السرعة مرتين (رتبة أولى).",
    "stepByStepSolutionEn": [
      "1. Order with respect to $\\text{NO}$ (from Exp 1 and 2 where $[\\text{O}_2]$ is constant):\n   $\\frac{r_2}{r_1} = \\frac{1.0 \\times 10^{-4}}{2.5 \\times 10^{-5}} = 4 = \\left(\\frac{0.020}{0.010}\\right)^m = 2^m \\implies m = 2$.",
      "2. Order with respect to $\\text{O}_2$ (from Exp 1 and 3 where $[\\text{NO}]$ is constant):\n   $\\frac{r_3}{r_1} = \\frac{5.0 \\times 10^{-5}}{2.5 \\times 10^{-5}} = 2 = \\left(\\frac{0.020}{0.010}\\right)^n = 2^n \\implies n = 1$.",
      "3. Rate law: $r = k[\\text{NO}]^2[\\text{O}_2]$. Overall order $= m + n = 2 + 1 = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. رتبة التفاعل بالنسبة لـ $\\text{NO}$ (من التجربتين ١ و ٢ حيث تركيز الأكسجين ثابت):\n   $\\frac{r_2}{r_1} = \\frac{1.0 \\times 10^{-4}}{2.5 \\times 10^{-5}} = 4 = 2^m \\implies m = 2$.",
      "٢. رتبة التفاعل بالنسبة لـ $\\text{O}_2$ (من التجربتين ١ و ٣ حيث تركيز NO ثابت):\n   $\\frac{r_3}{r_1} = \\frac{5.0 \\times 10^{-5}}{2.5 \\times 10^{-5}} = 2 = 2^n \\implies n = 1$.",
      "٣. قانون السرعة: $r = k[\\text{NO}]^2[\\text{O}_2]$، والرتبة الكلية $= 2 + 1 = 3$."
    ],
    "teacherTipEn": "Reaction orders cannot be deduced from stoichiometric coefficients; they must be measured empirically from initial rate data.",
    "teacherTipAr": "رتب التفاعل لا تُستنتج من المعاملات الستوكيومترية للمعادلة الموزونة بل تُعيّن عملياً من جداول التجارب."
  },
  {
    "id": "egbac_chem_ch1_se_03",
    "titleEn": "Rate Constant Calculation and Dimensional Units",
    "titleAr": "حساب قيمة ثابت السرعة ووحداته الفيزيائية",
    "difficulty": "medium",
    "questionEn": "Using the data from Exp 1 of the previous problem ($[\\text{NO}] = 0.010\\text{ M}, [\\text{O}_2] = 0.010\\text{ M}, r_0 = 2.5 \\times 10^{-5}\\text{ M/s}$ with $r = k[\\text{NO}]^2[\\text{O}_2]$), calculate the numerical value and dimensional units of the rate constant $k$.",
    "questionAr": "باستخدام بيانات التجربة ١ من المسألة السابقة ($[\\text{NO}] = 0.010\\text{ M}, [\\text{O}_2] = 0.010\\text{ M}, r_0 = 2.5 \\times 10^{-5}\\text{ M/s}$ مع قانون السرعة $r = k[\\text{NO}]^2[\\text{O}_2]$)، احسب القيمة العددية والوحدات الفيزيائية لثابت السرعة $k$.",
    "optionsEn": [
      "$k = 2.5 \\times 10^{-3}\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$",
      "$k = 250\\text{ L}^3\\cdot\\text{mol}^{-3}\\cdot\\text{s}^{-1}$",
      "$k = 25\\text{ L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1} \\; (25\\text{ M}^{-2}\\cdot\\text{s}^{-1})$",
      "$k = 0.25\\text{ s}^{-1}$"
    ],
    "optionsAr": [
      "$k = 2.5 \\times 10^{-3}\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$",
      "$k = 250\\text{ L}^3\\cdot\\text{mol}^{-3}\\cdot\\text{s}^{-1}$",
      "$k = 25\\text{ L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1} \\; (25\\text{ M}^{-2}\\cdot\\text{s}^{-1})$",
      "$k = 0.25\\text{ s}^{-1}$"
    ],
    "correctAnswer": "$k = 25\\text{ L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1} \\; (25\\text{ M}^{-2}\\cdot\\text{s}^{-1})$",
    "correctIndex": 2,
    "hintEn": "Rearrange k = r / ([NO]^2 [O2]). For overall order n = 3, units of k are M^(1-n) s^(-1) = M^(-2) s^(-1) = L^2 mol^(-2) s^(-1).",
    "hintAr": "أعد الترتيب: k = r / ([NO]^2 [O2]). لوحدة الرتبة الثالثة n=3: M^(1-3) s^(-1) = M^(-2) s^(-1) = L^2 mol^(-2) s^(-1).",
    "stepByStepSolutionEn": [
      "1. Rearrange rate law: $k = \\frac{r}{[\\text{NO}]^2 [\\text{O}_2]}$.",
      "2. Numerical calculation: $k = \\frac{2.5 \\times 10^{-5}\\text{ M/s}}{(0.010\\text{ M})^2 (0.010\\text{ M})} = \\frac{2.5 \\times 10^{-5}}{1.0 \\times 10^{-6}} = 25$.",
      "3. Units for order $n = 3$: $\\frac{\\text{M}/\\text{s}}{\\text{M}^3} = \\text{M}^{-2}\\cdot\\text{s}^{-1} = \\text{L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1}$."
    ],
    "stepByStepSolutionAr": [
      "١. إعادة ترتيب قانون السرعة: $k = \\frac{r}{[\\text{NO}]^2 [\\text{O}_2]}$.",
      "٢. الحساب العددي: $k = \\frac{2.5 \\times 10^{-5}}{(0.010)^2 \\times 0.010} = \\frac{2.5 \\times 10^{-5}}{10^{-6}} = 25$.",
      "٣. وحدات الرتبة الثالثة: $\\text{M}^{-2}\\cdot\\text{s}^{-1} = \\text{L}^2\\cdot\\text{mol}^{-2}\\cdot\\text{s}^{-1}$."
    ],
    "teacherTipEn": "General rule: the units of k are always M^(1-n) s^(-1), where n is the overall reaction order.",
    "teacherTipAr": "قاعدة عامة: وحدة ثابت السرعة هي دائماً M^(1-n) s^(-1) حيث n هي الرتبة الكلية للتفاعل."
  },
  {
    "id": "egbac_chem_ch1_se_04",
    "titleEn": "First-Order Integrated Rate Law & Radioactive-Analogue Half-Life",
    "titleAr": "القانون التكاملي لسرعة تفاعل الرتبة الأولى وفترة عمر النصف",
    "difficulty": "easy",
    "questionEn": "The thermal decomposition of dinitrogen pentoxide in carbon tetrachloride, $2\\text{N}_2\\text{O}_5 \\to 4\\text{NO}_2 + \\text{O}_2$, is first-order with rate constant $k = 6.20 \\times 10^{-4}\\text{ s}^{-1}$ at $45^\\circ\\text{C}$. Calculate the half-life $t_{1/2}$ and the time required for $75\\%$ of $\\text{N}_2\\text{O}_5$ to decompose.",
    "questionAr": "التفكك الحراري لخامس أكسيد ثنائي النيتروجين في رابع كلوريد الكربون: $2\\text{N}_2\\text{O}_5 \\to 4\\text{NO}_2 + \\text{O}_2$ هو تفاعل من الرتبة الأولى بثابت سرعة $k = 6.20 \\times 10^{-4}\\text{ s}^{-1}$ عند $45^\\circ\\text{C}$. احسب فترة عمر النصف $t_{1/2}$ والزمن اللازم لتفكك $75\\%$ من العينة الابتدائية.",
    "optionsEn": [
      "$t_{1/2} = 559\\text{ s}, \\quad t_{75\\%} = 1118\\text{ s}$",
      "$t_{1/2} = 1613\\text{ s}, \\quad t_{75\\%} = 3226\\text{ s}$",
      "$t_{1/2} = 806\\text{ s}, \\quad t_{75\\%} = 2419\\text{ s}$",
      "$t_{1/2} = 1118\\text{ s}, \\quad t_{75\\%} = 2236\\text{ s}$"
    ],
    "optionsAr": [
      "$t_{1/2} = 559\\text{ ثانية}, \\quad t_{75\\%} = 1118\\text{ ثانية}$",
      "$t_{1/2} = 1613\\text{ ثانية}, \\quad t_{75\\%} = 3226\\text{ ثانية}$",
      "$t_{1/2} = 806\\text{ ثانية}, \\quad t_{75\\%} = 2419\\text{ ثانية}$",
      "$t_{1/2} = 1118\\text{ ثانية}, \\quad t_{75\\%} = 2236\\text{ ثانية}$"
    ],
    "correctAnswer": "$t_{1/2} = 1118\\text{ s}, \\quad t_{75\\%} = 2236\\text{ s}$",
    "correctIndex": 3,
    "hintEn": "For 1st order, t_1/2 = ln(2) / k. Decomposing 75% leaves 25% (1/4), which requires exactly 2 half-lives: t_75% = 2 * t_1/2.",
    "hintAr": "لرتبة أولى: t_1/2 = ln(2)/k. استهلاك 75% يترك 25% (الربع)، وهو ما يستغرق فترتي عمر نصف بالضبط: t_75% = 2 * t_1/2.",
    "stepByStepSolutionEn": [
      "1. First-order half-life: $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.69315}{6.20 \\times 10^{-4}\\text{ s}^{-1}} \\approx 1118\\text{ s}$ ($18.6\\text{ min}$).",
      "2. Remaining fraction when $75\\%$ decomposes: $[A]_t / [A]_0 = 1 - 0.75 = 0.25 = \\frac{1}{4} = (1/2)^2$.",
      "3. Number of half-lives is $2$, so $t_{75\\%} = 2 \\times t_{1/2} = 2 \\times 1118 = 2236\\text{ s}$ ($37.3\\text{ min}$)."
    ],
    "stepByStepSolutionAr": [
      "١. فترة عمر النصف لتفاعل الرتبة الأولى: $t_{1/2} = \\frac{0.693}{k} = \\frac{0.69315}{6.20 \\times 10^{-4}} = 1118\\text{ ثانية}$.",
      "٢. الجزء المتبقي بعد تفكك $75\\%$ هو $25\\% = \\frac{1}{4} = (1/2)^2$.",
      "٣. الزمن المطلوب يمثل فترتي عمر نصف: $t = 2 \\times 1118 = 2236\\text{ ثانية}$."
    ],
    "teacherTipEn": "In first-order kinetics, half-life is completely independent of initial reactant concentration.",
    "teacherTipAr": "في حركية الرتبة الأولى، تكون فترة عمر النصف مستقلة تماماً عن التركيز الابتدائي للمادة المتفاعلة."
  },
  {
    "id": "egbac_chem_ch1_se_05",
    "titleEn": "Second-Order Kinetics: Concentration Decay and Half-Life",
    "titleAr": "حركية الرتبة الثانية: تناقص التركيز واعتماد فترة عمر النصف",
    "difficulty": "medium",
    "questionEn": "The dimerization of butadiene, $2\\text{C}_4\\text{H}_6(g) \\to \\text{C}_8\\text{H}_{12}(g)$, follows second-order kinetics with $k = 0.014\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$ at $500\\text{ K}$. If the initial concentration is $[\\text{C}_4\\text{H}_6]_0 = 0.050\\text{ M}$, calculate the initial half-life $t_{1/2}$ and the concentration remaining after $t = 1000\\text{ s}$.",
    "questionAr": "تفاعل بلمرة البيوتادايين الثنائية $2\\text{C}_4\\text{H}_6(g) \\to \\text{C}_8\\text{H}_{12}(g)$ يتبع حركية الرتبة الثانية بثابت $k = 0.014\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$ عند $500\\text{ K}$. إذا كان التركيز الابتدائي $[\\text{C}_4\\text{H}_6]_0 = 0.050\\text{ M}$، فما فترة عمر النصف الابتدائية $t_{1/2}$ وما التركيز المتبقي بعد مرور $t = 1000\\text{ s}$؟",
    "optionsEn": [
      "$t_{1/2} = 1429\\text{ s}, \\quad [\\text{C}_4\\text{H}_6]_{1000} = 0.0294\\text{ M}$",
      "$t_{1/2} = 714\\text{ s}, \\quad [\\text{C}_4\\text{H}_6]_{1000} = 0.0150\\text{ M}$",
      "$t_{1/2} = 2857\\text{ s}, \\quad [\\text{C}_4\\text{H}_6]_{1000} = 0.0420\\text{ M}$",
      "$t_{1/2} = 1000\\text{ s}, \\quad [\\text{C}_4\\text{H}_6]_{1000} = 0.0250\\text{ M}$"
    ],
    "optionsAr": [
      "$t_{1/2} = 1429\\text{ ثانية}, \\quad [\\text{C}_4\\text{H}_6]_{1000} = 0.0294\\text{ مولار}$",
      "$t_{1/2} = 714\\text{ ثانية}, \\quad [\\text{C}_4\\text{H}_6]_{1000} = 0.0150\\text{ مولار}$",
      "$t_{1/2} = 2857\\text{ ثانية}, \\quad [\\text{C}_4\\text{H}_6]_{1000} = 0.0420\\text{ مولار}$",
      "$t_{1/2} = 1000\\text{ ثانية}, \\quad [\\text{C}_4\\text{H}_6]_{1000} = 0.0250\\text{ مولار}$"
    ],
    "correctAnswer": "$t_{1/2} = 1429\\text{ s}, \\quad [\\text{C}_4\\text{H}_6]_{1000} = 0.0294\\text{ M}$",
    "correctIndex": 0,
    "hintEn": "Second-order integrated rate law: 1/[A]_t = kt + 1/[A]_0, and t_1/2 = 1 / (k [A]_0).",
    "hintAr": "القانون التكاملي للرتبة الثانية: 1/[A]_t = kt + 1/[A]_0، وفترة عمر النصف t_1/2 = 1 / (k [A]_0).",
    "stepByStepSolutionEn": [
      "1. Second-order half-life: $t_{1/2} = \\frac{1}{k [A]_0} = \\frac{1}{(0.014)(0.050)} = \\frac{1}{0.00070} \\approx 1428.6\\text{ s} \\approx 1429\\text{ s}$.",
      "2. Second-order integrated rate law: $\\frac{1}{[A]_t} = k t + \\frac{1}{[A]_0}$.",
      "3. Substitute $t = 1000\\text{ s}$: $\\frac{1}{[A]_{1000}} = (0.014)(1000) + \\frac{1}{0.050} = 14 + 20 = 34\\text{ M}^{-1}$.",
      "4. Concentration remaining: $[A]_{1000} = \\frac{1}{34} \\approx 0.0294\\text{ M}$."
    ],
    "stepByStepSolutionAr": [
      "١. فترة عمر النصف للرتبة الثانية: $t_{1/2} = \\frac{1}{k [A]_0} = \\frac{1}{0.014 \\times 0.050} = 1429\\text{ ثانية}$.",
      "٢. القانون التكاملي للرتبة الثانية: $\\frac{1}{[A]_t} = k t + \\frac{1}{[A]_0}$.",
      "٣. عند $t = 1000\\text{ ثانية}$: $\\frac{1}{[A]_{1000}} = (0.014 \\times 1000) + \\frac{1}{0.050} = 14 + 20 = 34\\text{ M}^{-1}$.",
      "٤. التركيز المتبقي: $[A]_{1000} = \\frac{1}{34} \\approx 0.0294\\text{ مولار}$."
    ],
    "teacherTipEn": "Unlike first-order reactions, a second-order half-life is inversely proportional to initial concentration: doubling [A]_0 cuts t_1/2 in half.",
    "teacherTipAr": "بخلاف الرتبة الأولى، تتناسب فترة عمر النصف للرتبة الثانية عكسياً مع التركيز الابتدائي: مضاعفة التركيز تخفض عمر النصف إلى النصف."
  },
  {
    "id": "egbac_chem_ch1_se_06",
    "titleEn": "Arrhenius Activation Energy from Two-Temperature Data",
    "titleAr": "حساب طاقة التنشيط لأرينيوس من بيانات درجتي حرارة",
    "difficulty": "medium",
    "questionEn": "The rate constant for the gas-phase decomposition of acetaldehyde, $\\text{CH}_3\\text{CHO} \\to \\text{CH}_4 + \\text{CO}$, increases from $k_1 = 1.05 \\times 10^{-3}\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$ at $T_1 = 700\\text{ K}$ to $k_2 = 2.14 \\times 10^{-2}\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$ at $T_2 = 760\\text{ K}$. Calculate the activation energy $E_a$ for this reaction. (Use $R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "questionAr": "يزداد ثابت السرعة للتفكك الغازي للأسيتالدهيد $\\text{CH}_3\\text{CHO} \\to \\text{CH}_4 + \\text{CO}$ من $k_1 = 1.05 \\times 10^{-3}\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$ عند $T_1 = 700\\text{ K}$ إلى $k_2 = 2.14 \\times 10^{-2}\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{s}^{-1}$ عند $T_2 = 760\\text{ K}$. احسب طاقة التنشيط $E_a$ لهذا التفاعل بوحدة $\\text{kJ/mol}$. (استخدم $R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "optionsEn": [
      "$E_a = 110.8\\text{ kJ/mol}$",
      "$E_a = 221.7\\text{ kJ/mol}$",
      "$E_a = 345.2\\text{ kJ/mol}$",
      "$E_a = 52.4\\text{ kJ/mol}$"
    ],
    "optionsAr": [
      "$E_a = 110.8\\text{ كيلوجول/مول}$",
      "$E_a = 221.7\\text{ كيلوجول/مول}$",
      "$E_a = 345.2\\text{ كيلوجول/مول}$",
      "$E_a = 52.4\\text{ كيلوجول/مول}$"
    ],
    "correctAnswer": "$E_a = 221.7\\text{ kJ/mol}$",
    "correctIndex": 1,
    "hintEn": "Use two-point Arrhenius equation: ln(k2 / k1) = (E_a / R) * (1/T1 - 1/T2).",
    "hintAr": "استخدم صيغة أرينيوس لدرجتي حرارة: ln(k2 / k1) = (E_a / R) * (1/T1 - 1/T2).",
    "stepByStepSolutionEn": [
      "1. Two-temperature Arrhenius equation: $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.",
      "2. Left side: $\\ln\\left(\\frac{2.14 \\times 10^{-2}}{1.05 \\times 10^{-3}}\\right) = \\ln(20.381) \\approx 3.0146$.",
      "3. Temperature factor: $\\frac{1}{700} - \\frac{1}{760} = \\frac{760 - 700}{700 \\times 760} = \\frac{60}{532000} \\approx 1.1278 \\times 10^{-4}\\text{ K}^{-1}$.",
      "4. Calculate $E_a$: $E_a = \\frac{3.0146 \\times 8.314}{1.1278 \\times 10^{-4}} \\approx 222,230\\text{ J/mol} \\approx 221.7 - 222\\text{ kJ/mol}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة أرينيوس لدرجتي حرارة: $\\ln(k_2/k_1) = \\frac{E_a}{R} (1/T_1 - 1/T_2)$.",
      "٢. الطرف الأيسر: $\\ln(2.14 \\times 10^{-2} / 1.05 \\times 10^{-3}) = \\ln(20.38) \\approx 3.015$.",
      "٣. فرق مقلوب درجات الحرارة: $\\frac{1}{700} - \\frac{1}{760} \\approx 1.128 \\times 10^{-4}\\text{ K}^{-1}$.",
      "٤. طاقة التنشيط: $E_a = \\frac{3.015 \\times 8.314}{1.128 \\times 10^{-4}} \\approx 221.7\\text{ كيلوجول/مول}$."
    ],
    "teacherTipEn": "Remember that temperature T in the Arrhenius equation must always be expressed in absolute Kelvin (K), never Celsius.",
    "teacherTipAr": "تذكر دائماً تحويل درجات الحرارة إلى مقياس كلفن المطلق (K) قبل التعويض في معادلة أرينيوس."
  },
  {
    "id": "egbac_chem_ch1_se_07",
    "titleEn": "Catalyzed vs Uncatalyzed Reaction Rate Acceleration",
    "titleAr": "معدل تسارع التفاعل باستخدام عامل حفاز مقارنة بالتفاعل غير المحفز",
    "difficulty": "hots",
    "questionEn": "At $T = 300\\text{ K}$, a biological enzyme lowers the activation barrier of a metabolic hydrolysis from $E_{a,\\text{uncat}} = 84.0\\text{ kJ/mol}$ to $E_{a,\\text{cat}} = 34.0\\text{ kJ/mol}$. Assuming the pre-exponential frequency factor $A$ remains identical, by what factor does the reaction rate increase in the presence of the enzyme? ($R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "questionAr": "عند درجة حرارة $T = 300\\text{ K}$، يخفض إنزيم حيوي حاجز طاقة التنشيط لتفاعل تحلل مائي من $E_{a,\\text{uncat}} = 84.0\\text{ kJ/mol}$ إلى $E_{a,\\text{cat}} = 34.0\\text{ kJ/mol}$. بفرض بقاء معامل التردد $A$ ثابتاً، كم تبلغ نسبة تضاعف سرعة التفاعل في وجود الإنزيم؟ ($R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "optionsEn": [
      "$\\approx 50\\text{ times faster}$",
      "$\\approx 2.47 \\times 10^4\\text{ times faster}$",
      "$\\approx 5.06 \\times 10^8\\text{ times faster}$",
      "$\\approx 1.05 \\times 10^6\\text{ times faster}$"
    ],
    "optionsAr": [
      "$\\approx 50\\text{ مرة أسرع}$",
      "$\\approx 2.47 \\times 10^4\\text{ مرة أسرع}$",
      "$\\approx 5.06 \\times 10^8\\text{ مرة أسرع (نصف مليار ضعف)}$",
      "$\\approx 1.05 \\times 10^6\\text{ مرة أسرع}$"
    ],
    "correctAnswer": "$\\approx 5.06 \\times 10^8\\text{ times faster}$",
    "correctIndex": 2,
    "hintEn": "Rate ratio = k_cat / k_uncat = exp(Delta E_a / (R * T)) where Delta E_a = 84.0 - 34.0 = 50.0 kJ/mol = 50,000 J/mol.",
    "hintAr": "نسبة السرعتين: k_cat / k_uncat = exp(Delta E_a / (R * T)) حيث Delta E_a = 50000 J/mol.",
    "stepByStepSolutionEn": [
      "1. Using Arrhenius ratio: $\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = \\frac{A e^{-E_{a,\\text{cat}}/(RT)}}{A e^{-E_{a,\\text{uncat}}/(RT)}} = e^{\\frac{\\Delta E_a}{RT}}$.",
      "2. Reduction in activation energy: $\\Delta E_a = 84,000 - 34,000 = 50,000\\text{ J/mol}$.",
      "3. Exponent calculation: $\\frac{\\Delta E_a}{RT} = \\frac{50,000}{(8.314)(300)} = \\frac{50,000}{2494.2} \\approx 20.0465$.",
      "4. Rate acceleration: $\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = e^{20.0465} \\approx 5.06 \\times 10^8$ (over half a billion times faster!)."
    ],
    "stepByStepSolutionAr": [
      "١. النسبة بين ثابتي السرعة: $\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = e^{\\frac{\\Delta E_a}{RT}}$.",
      "٢. مقدار الانخفاض في طاقة التنشيط: $\\Delta E_a = 84000 - 34000 = 50000\\text{ J/mol}$.",
      "٣. حساب الأس: $\\frac{50000}{8.314 \\times 300} = \\frac{50000}{2494.2} \\approx 20.046$.",
      "٤. نسبة التسارع: $e^{20.046} \\approx 5.06 \\times 10^8$ (أكثر من نصف مليار ضعف!)."
    ],
    "teacherTipEn": "Enzymes and industrial catalysts achieve dramatic rate increases through exponential amplification by lowering activation barriers.",
    "teacherTipAr": "تحقق الإنزيمات والعوامل الحفازة تسارعاً هائلاً لأن خفض طاقة التنشيط يدخل في أس دالة أرينيوس الأسية."
  },
  {
    "id": "egbac_chem_ch1_se_08",
    "titleEn": "Elementary Reaction Mechanisms and Rate-Determining Step",
    "titleAr": "آليات التفاعل الأولية والخطوة المحددة للسرعة",
    "difficulty": "medium",
    "questionEn": "The reaction between nitrogen dioxide and carbon monoxide, $\\text{NO}_2(g) + \\text{CO}(g) \\to \\text{NO}(g) + \\text{CO}_2(g)$, is proposed to proceed via a two-step mechanism below $500\\text{ K}$:\n- Step 1 (slow): $\\text{NO}_2 + \\text{NO}_2 \\xrightarrow{k_1} \\text{NO}_3 + \\text{NO}$\n- Step 2 (fast): $\\text{NO}_3 + \\text{CO} \\xrightarrow{k_2} \\text{NO}_2 + \\text{CO}_2$\nIdentify the intermediate and deduce the theoretical differential rate law.",
    "questionAr": "يُعتقد أن التفاعل بين ثاني أكسيد النيتروجين وأول أكسيد الكربون: $\\text{NO}_2(g) + \\text{CO}(g) \\to \\text{NO}(g) + \\text{CO}_2(g)$، يتم عبر آلية من خطوتين أدنى من $500\\text{ K}$:\n- الخطوة ١ (بطيئة): $\\text{NO}_2 + \\text{NO}_2 \\xrightarrow{k_1} \\text{NO}_3 + \\text{NO}$\n- الخطوة ٢ (سريعة): $\\text{NO}_3 + \\text{CO} \\xrightarrow{k_2} \\text{NO}_2 + \\text{CO}_2$\nحدد المركب الوسطي واستنتج قانون سرعة التفاعل التفاضلي النظري.",
    "optionsEn": [
      "Intermediate: $\\text{CO}$; Rate law: $r = k [\\text{NO}_2][\\text{CO}]$",
      "Intermediate: $\\text{NO}$; Rate law: $r = k_1 [\\text{NO}_2]$",
      "Intermediate: $\\text{NO}_3$; Rate law: $r = k [\\text{NO}_2]^2[\\text{CO}]$",
      "Intermediate: $\\text{NO}_3$; Rate law: $r = k_1 [\\text{NO}_2]^2$"
    ],
    "optionsAr": [
      "المركب الوسطي: $\\text{CO}$؛ قانون السرعة: $r = k [\\text{NO}_2][\\text{CO}]$",
      "المركب الوسطي: $\\text{NO}$؛ قانون السرعة: $r = k_1 [\\text{NO}_2]$",
      "المركب الوسطي: $\\text{NO}_3$؛ قانون السرعة: $r = k [\\text{NO}_2]^2[\\text{CO}]$",
      "المركب الوسطي: $\\text{NO}_3$؛ قانون السرعة: $r = k_1 [\\text{NO}_2]^2$"
    ],
    "correctAnswer": "Intermediate: $\\text{NO}_3$; Rate law: $r = k_1 [\\text{NO}_2]^2$",
    "correctIndex": 3,
    "hintEn": "The slowest elementary step is the rate-determining step (RDS). For Step 1: r = k1 [NO2][NO2] = k1 [NO2]^2. NO3 is produced in Step 1 and consumed in Step 2, so it is the intermediate.",
    "hintAr": "الخطوة الأبطأ هي المحددة للسرعة (RDS): r = k1 [NO2]^2. ينتج NO3 في الخطوة ١ ويستهلك في الخطوة ٢، فهو مركب وسطي.",
    "stepByStepSolutionEn": [
      "1. An intermediate is a species formed in an earlier step and consumed in a later step; here $\\text{NO}_3$ is produced in Step 1 and completely consumed in Step 2.",
      "2. The rate-determining step (RDS) is the slowest elementary step (Step 1).",
      "3. For an elementary step, molecularity equals reaction order: $r = k_1 [\\text{NO}_2][\\text{NO}_2] = k_1 [\\text{NO}_2]^2$. Carbon monoxide does not appear in the rate law because it participates only after the rate-determining step."
    ],
    "stepByStepSolutionAr": [
      "١. المركب الوسطي يتكون في خطوة مبكرة ويُستهلك في خطوة لاحقة دون أن يظهر في المعادلة الكلية؛ هنا $\\text{NO}_3$ هو المركب الوسطي.",
      "٢. الخطوة المحددة لسرعة التفاعل (RDS) هي الخطوة الأبطأ (الخطوة ١).",
      "٣. بالنسبة للتفاعل الأولي، تكون الرتبة مساوية للوزن الجزيئي: $r = k_1 [\\text{NO}_2]^2$، ولا يظهر أول أكسيد الكربون لأنه يدخل في خطوة تالية للخطوة البطيئة."
    ],
    "teacherTipEn": "If a reactant appears only in steps following the rate-determining step, its concentration has zero effect on the overall initial reaction rate (zero-order).",
    "teacherTipAr": "إذا شاركت مادة متفاعلة في خطوات تالية للخطوة المحددة لسرعة التفاعل، فإن رتبتها في قانون السرعة تكون صفراً."
  },
  {
    "id": "egbac_chem_ch1_se_09",
    "titleEn": "Pre-Equilibrium Approximation in Multi-Step Kinetics",
    "titleAr": "تقريب الاتزان السريع المسبق في حركية التفاعلات متعددة الخطوات",
    "difficulty": "hots",
    "questionEn": "The gas-phase reaction $2\\text{NO}(g) + \\text{Br}_2(g) \\to 2\\text{NOBr}(g)$ proceeds by the following mechanism:\n- Step 1 (fast reversible): $\\text{NO} + \\text{Br}_2 \\xrightleftharpoons[k_{-1}]{k_1} \\text{NOBr}_2 \\quad (\\text{fast equilibrium}, K_1 = k_1 / k_{-1})$\n- Step 2 (slow): $\\text{NOBr}_2 + \\text{NO} \\xrightarrow{k_2} 2\\text{NOBr}$\nDerive the overall rate law in terms of measurable reactant concentrations.",
    "questionAr": "يتم التفاعل الغازي $2\\text{NO}(g) + \\text{Br}_2(g) \\to 2\\text{NOBr}(g)$ وفق الآلية التالية:\n- الخطوة ١ (اتزان سريع): $\\text{NO} + \\text{Br}_2 \\xrightleftharpoons[k_{-1}]{k_1} \\text{NOBr}_2 \\quad (\\text{اتزان سريع}, K_1 = k_1 / k_{-1})$\n- الخطوة ٢ (بطيئة): $\\text{NOBr}_2 + \\text{NO} \\xrightarrow{k_2} 2\\text{NOBr}$\nاستنتج قانون سرعة التفاعل الكلي بدلالة تراكيز المواد المتفاعلة المقاسة.",
    "optionsEn": [
      "$r = k_{\\text{obs}} [\\text{NO}]^2 [\\text{Br}_2], \\quad \\text{where } k_{\\text{obs}} = \\frac{k_1 k_2}{k_{-1}}$",
      "$r = k_2 [\\text{NO}][\\text{Br}_2]$",
      "$r = k_1 [\\text{NO}][\\text{Br}_2]^2$",
      "$r = k_{\\text{obs}} [\\text{NO}][\\text{Br}_2]$"
    ],
    "optionsAr": [
      "$r = k_{\\text{obs}} [\\text{NO}]^2 [\\text{Br}_2]، \\quad \\text{حيث } k_{\\text{obs}} = \\frac{k_1 k_2}{k_{-1}}$",
      "$r = k_2 [\\text{NO}][\\text{Br}_2]$",
      "$r = k_1 [\\text{NO}][\\text{Br}_2]^2$",
      "$r = k_{\\text{obs}} [\\text{NO}][\\text{Br}_2]$"
    ],
    "correctAnswer": "$r = k_{\\text{obs}} [\\text{NO}]^2 [\\text{Br}_2], \\quad \\text{where } k_{\\text{obs}} = \\frac{k_1 k_2}{k_{-1}}$",
    "correctIndex": 0,
    "hintEn": "From slow step: r = k2 [NOBr2][NO]. From equilibrium Step 1: [NOBr2] = (k1 / k-1) [NO][Br2]. Substitute to eliminate the intermediate.",
    "hintAr": "من الخطوة البطيئة: r = k2 [NOBr2][NO]. ومن اتزان الخطوة ١: [NOBr2] = (k1 / k-1) [NO][Br2]. عوّض للتخلص من المركب الوسطي.",
    "stepByStepSolutionEn": [
      "1. The rate is governed by the slow step: $r = k_2 [\\text{NOBr}_2] [\\text{NO}]$.",
      "2. Since $\\text{NOBr}_2$ is an unstable intermediate, express its concentration using the fast pre-equilibrium: $k_1 [\\text{NO}][\\text{Br}_2] = k_{-1} [\\text{NOBr}_2] \\implies [\\text{NOBr}_2] = \\frac{k_1}{k_{-1}} [\\text{NO}][\\text{Br}_2]$.",
      "3. Substitute into the rate expression: $r = k_2 \\left(\\frac{k_1}{k_{-1}} [\\text{NO}][\\text{Br}_2]\\right) [\\text{NO}] = \\left(\\frac{k_1 k_2}{k_{-1}}\\right) [\\text{NO}]^2 [\\text{Br}_2] = k_{\\text{obs}} [\\text{NO}]^2 [\\text{Br}_2]$."
    ],
    "stepByStepSolutionAr": [
      "١. سرعة التفاعل تحددها الخطوة البطيئة: $r = k_2 [\\text{NOBr}_2] [\\text{NO}]$.",
      "٢. للتخلص من تركيز المركب الوسطي $\\text{NOBr}_2$ نستخدم شرط الاتزان السريع للخطوة ١: $k_1 [\\text{NO}][\\text{Br}_2] = k_{-1} [\\text{NOBr}_2] \\implies [\\text{NOBr}_2] = \\frac{k_1}{k_{-1}} [\\text{NO}][\\text{Br}_2]$.",
      "٣. بالتعويض في قانون السرعة: $r = k_2 \\left(\\frac{k_1}{k_{-1}} [\\text{NO}][\\text{Br}_2]\\right) [\\text{NO}] = k_{\\text{obs}} [\\text{NO}]^2 [\\text{Br}_2]$."
    ],
    "teacherTipEn": "In pre-equilibrium mechanisms, the overall rate constant k_obs is a combination of rate constants from preceding elementary equilibria.",
    "teacherTipAr": "في آليات الاتزان السريع المسبق، يكون ثابت السرعة الفعال k_obs ناتج دمج ثوابت الاتزان والسرعة للخطوات السابقة."
  },
  {
    "id": "egbac_chem_ch1_se_10",
    "titleEn": "Maxwell-Boltzmann Distribution and Temperature Influence",
    "titleAr": "منحنى توزيع ماكسويل-بولتزمان وتأثير رفع درجة الحرارة",
    "difficulty": "easy",
    "questionEn": "When the temperature of a reaction mixture is increased by $\\Delta T = 10^\\circ\\text{C}$ (e.g., from $298\\text{ K}$ to $308\\text{ K}$), the reaction rate often doubles ($200\\%$ increase), even though the average molecular kinetic energy increases by only $\\approx 3.3\\%$. According to the Maxwell-Boltzmann molecular energy distribution, what is the primary physical reason for this dramatic rate enhancement?",
    "questionAr": "عند رفع درجة حرارة خليط تفاعل بمقدار $\\Delta T = 10^\\circ\\text{C}$ (من $298\\text{ K}$ إلى $308\\text{ K}$ مثلاً)، يتضاعف معدل التفاعل تقريباً (زيادة $100\\%$) على الرغم من أن متوسط طاقة حركة الجزيئات يزداد بنحو $3.3\\%$ فقط. وفق منحنى توزيع ماكسويل-بولتزمان، ما السبب الفيزيائي الرئيسي لهذا التضاعف الكبير في السرعة؟",
    "optionsEn": [
      "The total number of reactant molecules inside the container doubles.",
      "The fraction of energetic molecules possessing kinetic energy equal to or exceeding the activation threshold ($E \\ge E_a$) increases exponentially.",
      "The activation energy barrier of the reaction drops to half its original value.",
      "The collision frequency between reactant particles increases by over $200\\%$."
    ],
    "optionsAr": [
      "يتضاعف العدد الكلي لجزيئات المواد المتفاعلة داخل الإناء.",
      "تتضاعف النسبة المئوية للجزيئات النشطة التي تمتلك طاقة حركة تساوي أو تفوق طاقة التنشيط ($E \\ge E_a$) بشكل أسي.",
      "ينخفض حاجز طاقة التنشيط للتفاعل إلى نصف قيمته الأصلية.",
      "يزداد تردد وتكرار تصادمات الجزيئات بنسبة تتجاوز $200\\%$."
    ],
    "correctAnswer": "The fraction of energetic molecules possessing kinetic energy equal to or exceeding the activation threshold ($E \\ge E_a$) increases exponentially.",
    "correctIndex": 1,
    "hintEn": "Collision frequency increases only slightly (~sqrt(T)), but the exponential tail factor f = exp(-E_a / RT) increases dramatically.",
    "hintAr": "تردد التصادم يزداد بنسبة ضئيلة تتناسب مع جذر T، بينما الكسر الأسي للجزيئات النشطة exp(-E_a / RT) يتضاعف أضعافاً مضاعفة.",
    "stepByStepSolutionEn": [
      "1. Average molecular kinetic energy is directly proportional to absolute temperature: $\\bar{E}_k = \\frac{3}{2} k_B T$. A rise from $298\\text{ K}$ to $308\\text{ K}$ increases $\\bar{E}_k$ and collision frequency by only $\\approx 3\\%$.",
      "2. However, the fraction of colliding molecules with $E \\ge E_a$ is given by the Boltzmann factor: $f = e^{-E_a / (RT)}$.",
      "3. Because of the exponential dependence, a small shift in temperature substantially broadens the high-energy tail of the Maxwell-Boltzmann curve, approximately doubling the population of molecules with $E \\ge E_a$ for typical activation energies ($E_a \\approx 50\\text{ kJ/mol}$)."
    ],
    "stepByStepSolutionAr": [
      "١. متوسط طاقة حركة الجزيئات يتناسب طردياً مع الحرارة المطلقة: $\\bar{E}_k = \\frac{3}{2} k_B T$، والزيادة من 298 إلى 308 تزيد متوسط الطاقة وتردد التصادمات بنحو $3\\%$ فقط.",
      "٢. لكن نسبة الجزيئات الممتلكة لطاقة التنشيط يحكمها عامل بولتزمان الأسي: $f = e^{-E_a / (RT)}$.",
      "٣. بسبب الطبيعة الأسية، يؤدي التغير الطفيف في الحرارة إلى إزاحة وتفلطح ذيل منحنى ماكسويل-بولتزمان، مما يضاعف عدد الجزيئات المنشطة ذات $E \\ge E_a$ بنحو الضعف."
    ],
    "teacherTipEn": "Temperature affects reaction rate primarily by increasing the fraction of effective collisions, not simply the total number of collisions.",
    "teacherTipAr": "ترفع درجة الحرارة سرعة التفاعل كيميائياً بزيادة نسبة التصادمات الفعالة والناجحة، وليس بمجرد زيادة إجمالي عدد التصادمات."
  }
];

export const egBacChemCh1Exercises: SolvedProblem[] = [
  {
    "id": "egbac_chem_ch1_ex_01",
    "titleEn": "Rate of Reaction from Concentration-Time Data",
    "titleAr": "حساب سرعة التفاعل من تغير التركيز مع الزمن",
    "difficulty": "easy",
    "questionEn": "In the decomposition of hydrogen peroxide, $2\\text{H}_2\\text{O}_2(aq) \\to 2\\text{H}_2\\text{O}(l) + \\text{O}_2(g)$, the concentration of $\\text{H}_2\\text{O}_2$ drops from $0.80\\text{ M}$ to $0.56\\text{ M}$ in $120\\text{ s}$. What is the average reaction rate $r$ over this interval?",
    "questionAr": "في تفاعل تفكك فوق أكسيد الهيدروجين: $2\\text{H}_2\\text{O}_2(aq) \\to 2\\text{H}_2\\text{O}(l) + \\text{O}_2(g)$، انخفض تركيز $\\text{H}_2\\text{O}_2$ من $0.80\\text{ M}$ إلى $0.56\\text{ M}$ خلال $120\\text{ s}$. ما متوسط سرعة التفاعل الموحدة $r$ خلال هذه الفترة؟",
    "optionsEn": [
      "$r = 2.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$r = 4.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$r = 1.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$r = 5.0 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$"
    ],
    "optionsAr": [
      "$r = 2.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$r = 4.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$r = 1.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$r = 5.0 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$"
    ],
    "correctAnswer": "$r = 1.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
    "correctIndex": 2,
    "hintEn": "Rate of disappearance: -Delta[H2O2]/Delta t = (0.80 - 0.56) / 120 = 0.24 / 120 = 0.0020 M/s. Unique rate r = (1/2) * 0.0020.",
    "hintAr": "معدل الاختفاء: 0.24 / 120 = 0.0020 M/s. سرعة التفاعل الموحدة r = (1/2) * 0.0020 = 0.0010.",
    "stepByStepSolutionEn": [
      "1. Change in concentration: $\\Delta [\\text{H}_2\\text{O}_2] = 0.56 - 0.80 = -0.24\\text{ M}$.",
      "2. Rate of disappearance of $\\text{H}_2\\text{O}_2$: $-\\frac{\\Delta [\\text{H}_2\\text{O}_2]}{\\Delta t} = \\frac{0.24\\text{ M}}{120\\text{ s}} = 2.0 \\times 10^{-3}\\text{ M/s}$.",
      "3. Unique reaction rate: $r = -\\frac{1}{2}\\frac{\\Delta [\\text{H}_2\\text{O}_2]}{\\Delta t} = \\frac{1}{2}(2.0 \\times 10^{-3}) = 1.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$."
    ],
    "stepByStepSolutionAr": [
      "١. التغير في التركيز: $\\Delta [\\text{H}_2\\text{O}_2] = 0.56 - 0.80 = -0.24\\text{ مولار}$.",
      "٢. معدل استهلاك $\\text{H}_2\\text{O}_2$: $\\frac{0.24}{120} = 2.0 \\times 10^{-3}\\text{ M/s}$.",
      "٣. سرعة التفاعل العامة: $r = \\frac{1}{2} \\times 2.0 \\times 10^{-3} = 1.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$."
    ],
    "teacherTipEn": "Remember to divide the disappearance rate of H2O2 by 2 due to the stoichiometric coefficient in the balanced equation.",
    "teacherTipAr": "لا تنسَ القسمة على المعامل 2 لمتفاعل H2O2 للحصول على السرعة الموحدة للتفاعل."
  },
  {
    "id": "egbac_chem_ch1_ex_02",
    "titleEn": "Initial Rates Method with Three Reactants",
    "titleAr": "طريقة السرعات الابتدائية لتفاعل ثلاثي المتفاعلات",
    "difficulty": "medium",
    "questionEn": "For the reaction $A + 2B + C \\to D$, tripling $[A]$ while keeping $[B]$ and $[C]$ constant triples the rate. Doubling $[B]$ while keeping $[A]$ and $[C]$ constant quadruples the rate. Doubling $[C]$ while keeping $[A]$ and $[B]$ constant has no effect on the rate. What is the differential rate law?",
    "questionAr": "للتفاعل $A + 2B + C \\to D$، عند مضاعفة تركيز $[A]$ ثلاث مرات مع ثبات $[B]$ و $[C]$ تضاعفت السرعة ثلاث مرات. وعند مضاعفة تركيز $[B]$ مرتين مع ثبات الباقي زادت السرعة 4 أضعاف. وعند مضاعفة $[C]$ مرتين لم تتغير السرعة مطلقاً. ما هو قانون السرعة؟",
    "optionsEn": [
      "$r = k [A] [B] [C]$",
      "$r = k [A]^3 [B]^2$",
      "$r = k [A] [B]^2 [C]$",
      "$r = k [A] [B]^2$"
    ],
    "optionsAr": [
      "$r = k [A] [B] [C]$",
      "$r = k [A]^3 [B]^2$",
      "$r = k [A] [B]^2 [C]$",
      "$r = k [A] [B]^2$"
    ],
    "correctAnswer": "$r = k [A] [B]^2$",
    "correctIndex": 3,
    "hintEn": "Order with respect to A: 3^m = 3 => m = 1. Order w.r.t B: 2^n = 4 => n = 2. Order w.r.t C: 2^p = 1 => p = 0.",
    "hintAr": "رتبة A: 3^m = 3 إذن m = 1. رتبة B: 2^n = 4 إذن n = 2. رتبة C: لا تؤثر إذن p = 0.",
    "stepByStepSolutionEn": [
      "1. Dependence on $[A]$: rate $\\propto [A]^1$ because $3^1 = 3$ (first-order in $A$).",
      "2. Dependence on $[B]$: rate $\\propto [B]^2$ because $2^2 = 4$ (second-order in $B$).",
      "3. Dependence on $[C]$: rate $\\propto [C]^0$ because doubling $[C]$ multiplies rate by $1$ ($2^0 = 1$, zero-order in $C$).",
      "4. Overall rate law: $r = k [A]^1 [B]^2 [C]^0 = k [A] [B]^2$."
    ],
    "stepByStepSolutionAr": [
      "١. الاعتماد على $[A]$: السرعة تتناسب طردياً مع $[A]^1$ (رتبة أولى).",
      "٢. الاعتماد على $[B]$: السرعة تتناسب مع $[B]^2$ لأن $2^2 = 4$ (رتبة ثانية).",
      "٣. الاعتماد على $[C]$: تغير التركيز لا يغير السرعة، إذن الرتبة صفرية بالنسبة لـ $C$.",
      "٤. قانون السرعة الكلي: $r = k [A] [B]^2$."
    ],
    "teacherTipEn": "Reactants with zero reaction order participate in rapid steps occurring after the rate-determining step.",
    "teacherTipAr": "المتفاعلات ذات الرتبة الصفرية تشارك في خطوات سريعة بعد الخطوة المحددة للسرعة."
  },
  {
    "id": "egbac_chem_ch1_ex_03",
    "titleEn": "Units of Rate Constant for Fractional Reaction Orders",
    "titleAr": "وحدات ثابت السرعة لرتبة تفاعل كسرية",
    "difficulty": "easy",
    "questionEn": "The thermal pyrolysis of acetaldehyde follows the three-halves reaction order: $r = k [\\text{CH}_3\\text{CHO}]^{3/2}$. What are the SI dimensional units of the rate constant $k$?",
    "questionAr": "يتبع التحلل الحراري للأسيتالدهيد رتبة تفاعل كسرية مقدارها ثلاثة أنصاف: $r = k [\\text{CH}_3\\text{CHO}]^{3/2}$. ما هي الوحدات الدولية لثابت سرعة هذا التفاعل $k$؟",
    "optionsEn": [
      "$\\text{mol}^{-1/2}\\cdot\\text{L}^{1/2}\\cdot\\text{s}^{-1} \\; (\\text{M}^{-1/2}\\cdot\\text{s}^{-1})$",
      "$\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$\\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1}$",
      "$\\text{s}^{-1}$"
    ],
    "optionsAr": [
      "$\\text{mol}^{-1/2}\\cdot\\text{L}^{1/2}\\cdot\\text{s}^{-1} \\; (\\text{M}^{-1/2}\\cdot\\text{s}^{-1})$",
      "$\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$",
      "$\\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1}$",
      "$\\text{s}^{-1}$"
    ],
    "correctAnswer": "$\\text{mol}^{-1/2}\\cdot\\text{L}^{1/2}\\cdot\\text{s}^{-1} \\; (\\text{M}^{-1/2}\\cdot\\text{s}^{-1})$",
    "correctIndex": 0,
    "hintEn": "General unit formula for order n: M^(1-n) s^(-1). For n = 3/2 = 1.5, M^(1 - 1.5) s^(-1) = M^(-1/2) s^(-1).",
    "hintAr": "الصيغة العامة لوحدة k هي: M^(1-n) s^(-1). بالتعويض عن n = 1.5 نجد: M^(-1/2) s^(-1).",
    "stepByStepSolutionEn": [
      "1. Dimensional formula for rate constant: $\\text{Units of } k = \\frac{\\text{Rate}}{\\text{Concentration}^n} = \\frac{\\text{M}\\cdot\\text{s}^{-1}}{\\text{M}^n} = \\text{M}^{1-n}\\cdot\\text{s}^{-1}$.",
      "2. For $n = 3/2 = 1.5$: $1 - 1.5 = -0.5 = -1/2$.",
      "3. Therefore, units are $\\text{M}^{-1/2}\\cdot\\text{s}^{-1} = \\left(\\frac{\\text{mol}}{\\text{L}}\\right)^{-1/2}\\cdot\\text{s}^{-1} = \\text{mol}^{-1/2}\\cdot\\text{L}^{1/2}\\cdot\\text{s}^{-1}$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة أبعاد ثابت السرعة: $\\text{Units} = \\text{M}^{1-n}\\cdot\\text{s}^{-1}$.",
      "٢. بالتعويض عن $n = 1.5$: $1 - 1.5 = -0.5 = -1/2$.",
      "٣. الوحدة هي: $\\text{M}^{-1/2}\\cdot\\text{s}^{-1} = \\text{mol}^{-1/2}\\cdot\\text{L}^{1/2}\\cdot\\text{s}^{-1}$."
    ],
    "teacherTipEn": "Fractional reaction orders often indicate complex free-radical chain mechanisms containing initiation, propagation, and termination steps.",
    "teacherTipAr": "تشير الرتب الكسرية في العادة إلى آليات متسلسلة معقدة تتضمن شقوقاً حرة."
  },
  {
    "id": "egbac_chem_ch1_ex_04",
    "titleEn": "Zero-Order Kinetics: Total Time to Complete Depletion",
    "titleAr": "حركية التفاعل من الرتبة الصفرية وزمن الاستهلاك التام",
    "difficulty": "easy",
    "questionEn": "The catalytic decomposition of ammonia on a hot platinum filament at high pressure follows zero-order kinetics with $k = 1.50 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$. If the initial concentration of $\\text{NH}_3$ is $[\\text{NH}_3]_0 = 0.090\\text{ M}$, calculate the time required for complete exhaustion of the reactant ($[\\text{NH}_3]_t = 0$).",
    "questionAr": "التفكك الحفزي للأمونيا على سلك بلاتين ساخن تحت ضغط مرتفع يتبع حركية الرتبة الصفرية بثابت $k = 1.50 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$. إذا كان التركيز الابتدائي $[\\text{NH}_3]_0 = 0.090\\text{ M}$، فما الزمن اللازم للاستهلاك التام للمتفاعل ($[\\text{NH}_3]_t = 0$)؟",
    "optionsEn": [
      "$t_{\\text{complete}} = 300\\text{ s} \\; (5\\text{ min})$",
      "$t_{\\text{complete}} = 600\\text{ s} \\; (10\\text{ min})$",
      "$t_{\\text{complete}} = 1200\\text{ s} \\; (20\\text{ min})$",
      "$t_{\\text{complete}} = 450\\text{ s} \\; (7.5\\text{ min})$"
    ],
    "optionsAr": [
      "$t_{\\text{complete}} = 300\\text{ ثانية} \\; (5\\text{ دقائق})$",
      "$t_{\\text{complete}} = 600\\text{ ثانية} \\; (10\\text{ دقائق})$",
      "$t_{\\text{complete}} = 1200\\text{ ثانية} \\; (20\\text{ دقيقة})$",
      "$t_{\\text{complete}} = 450\\text{ ثانية} \\; (7.5\\text{ دقيقة})$"
    ],
    "correctAnswer": "$t_{\\text{complete}} = 600\\text{ s} \\; (10\\text{ min})$",
    "correctIndex": 1,
    "hintEn": "For zero order: [A]_t = -k t + [A]_0. When [A]_t = 0, t = [A]_0 / k.",
    "hintAr": "للرتبة الصفرية: [A]_t = -kt + [A]_0. عند الاستهلاك التام: t = [A]_0 / k.",
    "stepByStepSolutionEn": [
      "1. Zero-order integrated rate equation: $[A]_t = -k t + [A]_0$.",
      "2. At complete exhaustion, $[A]_t = 0 \\implies k t = [A]_0$.",
      "3. Calculate: $t = \\frac{[A]_0}{k} = \\frac{0.090\\text{ mol/L}}{1.50 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}} = 600\\text{ s}$ ($10\\text{ minutes}$)."
    ],
    "stepByStepSolutionAr": [
      "١. القانون التكاملي للرتبة الصفرية: $[A]_t = -k t + [A]_0$.",
      "٢. عند الاستهلاك التام: $[A]_t = 0 \\implies t = \\frac{[A]_0}{k}$.",
      "٣. الحساب: $t = \\frac{0.090}{1.50 \\times 10^{-4}} = 600\\text{ ثانية} = 10\\text{ دقائق}$."
    ],
    "teacherTipEn": "Zero-order reactions proceed at a constant rate regardless of concentration because active catalyst surface sites are fully saturated.",
    "teacherTipAr": "تحدث تفاعلات الرتبة الصفرية بمعدل ثابت تماماً نظراً لتشبع كافة المواقع النشطة على سطح العامل الحفاز."
  },
  {
    "id": "egbac_chem_ch1_ex_05",
    "titleEn": "First-Order Concentration After Multiple Arbitrary Durations",
    "titleAr": "حساب تركيز متفاعل الرتبة الأولى بعد فترة زمنية عشوائية",
    "difficulty": "medium",
    "questionEn": "A first-order isomerization reaction $A \\to B$ has a rate constant $k = 4.62 \\times 10^{-3}\\text{ s}^{-1}$. If the initial concentration is $[A]_0 = 0.500\\text{ M}$, what is $[A]$ after $t = 300\\text{ s}$?",
    "questionAr": "تفاعل تصاوغ من الرتبة الأولى $A \\to B$ يمتلك ثابت سرعة $k = 4.62 \\times 10^{-3}\\text{ s}^{-1}$. إذا كان التركيز الابتدائي $[A]_0 = 0.500\\text{ M}$، فما هو تركيز $[A]$ المتبقي بعد مرور $t = 300\\text{ s}$؟",
    "optionsEn": [
      "$[A]_{300} = 0.250\\text{ M}$",
      "$[A]_{300} = 0.0625\\text{ M}$",
      "$[A]_{300} = 0.125\\text{ M}$",
      "$[A]_{300} = 0.375\\text{ M}$"
    ],
    "optionsAr": [
      "$[A]_{300} = 0.250\\text{ مولار}$",
      "$[A]_{300} = 0.0625\\text{ مولار}$",
      "$[A]_{300} = 0.125\\text{ مولار}$",
      "$[A]_{300} = 0.375\\text{ مولار}$"
    ],
    "correctAnswer": "$[A]_{300} = 0.125\\text{ M}$",
    "correctIndex": 2,
    "hintEn": "Calculate k * t = 4.62e-3 * 300 = 1.386. Note that 1.386 = 2 * 0.693 = 2 * ln(2). Thus [A] = [A]_0 / (2^2) = [A]_0 / 4.",
    "hintAr": "احسب k * t = 1.386 = 2 * ln(2). هذا يعني مرور فترتي عمر نصف بالضبط: [A] = 0.500 / 4 = 0.125 M.",
    "stepByStepSolutionEn": [
      "1. First-order integrated law: $[A]_t = [A]_0 e^{-k t}$.",
      "2. Compute exponent: $k t = (4.62 \\times 10^{-3}\\text{ s}^{-1})(300\\text{ s}) = 1.386$.",
      "3. Notice $1.386 = 2 \\times 0.693 = 2 \\ln 2$. Therefore, $e^{-1.386} = e^{-2 \\ln 2} = \\frac{1}{2^2} = \\frac{1}{4} = 0.25$.",
      "4. Concentration remaining: $[A] = 0.500 \\times 0.25 = 0.125\\text{ M}$."
    ],
    "stepByStepSolutionAr": [
      "١. القانون التكاملي: $[A]_t = [A]_0 e^{-kt}$.",
      "٢. حساب الأس: $kt = 4.62 \\times 10^{-3} \\times 300 = 1.386$.",
      "٣. نلاحظ أن $1.386 = 2 \\times \\ln 2$. إذن $e^{-kt} = (1/2)^2 = 1/4$.",
      "٤. التركيز المتبقي: $[A] = 0.500 \\times 0.25 = 0.125\\text{ مولار}$."
    ],
    "teacherTipEn": "Recognizing that kt is an exact multiple of ln(2) allows quick mental verification via integer half-lives.",
    "teacherTipAr": "ملاحظة أن حاصل ضرب kt يمثل مضاعفاً صحيحاً لقيمة ln(2) = 0.693 يتيح الحل السريع عن طريق عدد فترات عمر النصف."
  },
  {
    "id": "egbac_chem_ch1_ex_06",
    "titleEn": "Graphical Identification of Reaction Order from Linear Plots",
    "titleAr": "التعيين البياني لرتبة التفاعل من استقامة المنحنيات",
    "difficulty": "easy",
    "questionEn": "A chemist monitors the decomposition of substance $X$ over time and plots three different functions against time $t$:\n- Plot 1: $[X]$ vs $t$ yields a downward curve.\n- Plot 2: $\\ln[X]$ vs $t$ yields a straight line with slope $-0.035\\text{ min}^{-1}$.\n- Plot 3: $\\frac{1}{[X]}$ vs $t$ yields an upward curve.\nWhat is the reaction order with respect to $X$, and what is the value of the rate constant $k$?",
    "questionAr": "قام كيميائي بتتبع تفكك مادة $X$ مع الزمن ورسم ثلاث دوال بيانية مقابل الزمن $t$:\n- الرسم ١: تركيز $[X]$ مقابل $t$ أعطى منحنى منحدراً لأسفل.\n- الرسم ٢: $\\ln[X]$ مقابل $t$ أعطى خطاً مستقيماً بميل مقداره $-0.035\\text{ min}^{-1}$.\n- الرسم ٣: $\\frac{1}{[X]}$ مقابل $t$ أعطى منحنى منحنياً لأعلى.\nما هي رتبة التفاعل بالنسبة للمادة $X$ وما قيمة ثابت السرعة $k$؟",
    "optionsEn": [
      "Zero order, $k = 0.035\\text{ M}\\cdot\\text{min}^{-1}$",
      "Second order, $k = 0.035\\text{ M}^{-1}\\cdot\\text{min}^{-1}$",
      "Third order, $k = 0.035\\text{ M}^{-2}\\cdot\\text{min}^{-1}$",
      "First order, $k = 0.035\\text{ min}^{-1}$"
    ],
    "optionsAr": [
      "رتبة صفرية، وثابت السرعة $k = 0.035\\text{ M}\\cdot\\text{min}^{-1}$",
      "رتبة ثانية، وثابت السرعة $k = 0.035\\text{ M}^{-1}\\cdot\\text{min}^{-1}$",
      "رتبة ثالثة، وثابت السرعة $k = 0.035\\text{ M}^{-2}\\cdot\\text{min}^{-1}$",
      "رتبة أولى، وثابت السرعة $k = 0.035\\text{ دقيقة}^{-1}$"
    ],
    "correctAnswer": "First order, $k = 0.035\\text{ min}^{-1}$",
    "correctIndex": 3,
    "hintEn": "A linear ln[X] vs t plot is the definitive diagnostic signature of first-order kinetics with slope = -k.",
    "hintAr": "استقامة رسم ln[X] مقابل الزمن هي البصمة المميزة لتفاعلات الرتبة الأولى حيث الميل = -k.",
    "stepByStepSolutionEn": [
      "1. Zero-order linear plot: $[A]$ vs $t$ (slope $=-k$).",
      "2. First-order linear plot: $\\ln[A]$ vs $t$ (slope $=-k$).",
      "3. Second-order linear plot: $\\frac{1}{[A]}$ vs $t$ (slope $=+k$).",
      "4. Since $\\ln[X]$ vs $t$ is linear, the reaction is strictly first-order, and $k = -\\text{slope} = 0.035\\text{ min}^{-1}$."
    ],
    "stepByStepSolutionAr": [
      "١. رسم الرتبة الصفرية الخطي: $[A]$ مقابل $t$ (الميل = $-k$).",
      "٢. رسم الرتبة الأولى الخطي: $\\ln[A]$ مقابل $t$ (الميل = $-k$).",
      "٣. رسم الرتبة الثانية الخطي: $1/[A]$ مقابل $t$ (الميل = $+k$).",
      "٤. بما أن الرسم الخطي تحقق لـ $\\ln[X]$، فإن التفاعل من الرتبة الأولى وقيمة $k = 0.035\\text{ min}^{-1}$."
    ],
    "teacherTipEn": "Remember the signs of slopes: 0th and 1st order plots have negative slopes (-k), while the 2nd order 1/[A] plot has a positive slope (+k).",
    "teacherTipAr": "انتبه لإشارات الميل: رسوم الرتبتين 0 و 1 تمتلك ميلاً سالباً (-k)، بينما رسم مقلوب التركيز للرتبة الثانية يمتلك ميلاً موجباً (+k)."
  },
  {
    "id": "egbac_chem_ch1_ex_07",
    "titleEn": "Arrhenius Linear Plot: Slope Interpretation and Activation Energy",
    "titleAr": "الرسم البياني لمعادلة أرينيوس: تفسير الميل واستنتاج طاقة التنشيط",
    "difficulty": "medium",
    "questionEn": "A graph of $\\ln k$ versus $\\frac{1}{T}$ (with $T$ in Kelvin) for an organic substitution reaction yields a straight line with a slope of $-1.25 \\times 10^4\\text{ K}$. Calculate the activation energy $E_a$ of this reaction in $\\text{kJ/mol}$. ($R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "questionAr": "أعطى رسم بياني لـ $\\ln k$ مقابل $\\frac{1}{T}$ (حيث $T$ بالكلفن) لتفاعل استبدال عضوي خطاً مستقيماً ميله $-1.25 \\times 10^4\\text{ K}$. احسب طاقة التنشيط $E_a$ لهذا التفاعل بوحدة $\\text{kJ/mol}$. ($R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "optionsEn": [
      "$E_a = 103.9\\text{ kJ/mol}$",
      "$E_a = 51.9\\text{ kJ/mol}$",
      "$E_a = 207.8\\text{ kJ/mol}$",
      "$E_a = 12.5\\text{ kJ/mol}$"
    ],
    "optionsAr": [
      "$E_a = 103.9\\text{ كيلوجول/مول}$",
      "$E_a = 51.9\\text{ كيلوجول/مول}$",
      "$E_a = 207.8\\text{ كيلوجول/مول}$",
      "$E_a = 12.5\\text{ كيلوجول/مول}$"
    ],
    "correctAnswer": "$E_a = 103.9\\text{ kJ/mol}$",
    "correctIndex": 0,
    "hintEn": "Slope of ln(k) vs (1/T) is -E_a / R. Therefore, E_a = -slope * R.",
    "hintAr": "ميل رسم ln(k) مقابل (1/T) هو -E_a / R. إذن طاقة التنشيط E_a = -الميل * R.",
    "stepByStepSolutionEn": [
      "1. Linear form of Arrhenius equation: $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$.",
      "2. By comparison with $y = mx + c$, slope $m = -\\frac{E_a}{R}$.",
      "3. Calculate $E_a$: $E_a = -m \\times R = -(-1.25 \\times 10^4\\text{ K}) \\times 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1} = 1.03925 \\times 10^5\\text{ J/mol} \\approx 103.9\\text{ kJ/mol}$."
    ],
    "stepByStepSolutionAr": [
      "١. الصورة الخطية لمعادلة أرينيوس: $\\ln k = -\\frac{E_a}{R} (1/T) + \\ln A$.",
      "٢. بمقارنتها بمعادلة الخط المستقيم: الميل $m = -\\frac{E_a}{R}$.",
      "٣. طاقة التنشيط: $E_a = -(-1.25 \\times 10^4) \\times 8.314 = 103925\\text{ J/mol} \\approx 103.9\\text{ kJ/mol}$."
    ],
    "teacherTipEn": "The steeper the negative slope of an Arrhenius plot, the higher the activation energy and the more sensitive the reaction is to temperature changes.",
    "teacherTipAr": "كلما كان الميل السالب لرسم أرينيوس أكثر انحداراً، زادت طاقة التنشيط وزادت حساسية سرعة التفاعل لتغير درجات الحرارة."
  },
  {
    "id": "egbac_chem_ch1_ex_08",
    "titleEn": "Temperature for a Specified Rate Constant Target",
    "titleAr": "درجة الحرارة اللازمة لبلوغ قيمة مستهدفة لثابت السرعة",
    "difficulty": "medium",
    "questionEn": "A reaction has an activation energy $E_a = 65.0\\text{ kJ/mol}$ and a rate constant $k_1 = 0.020\\text{ s}^{-1}$ at $T_1 = 300\\text{ K}$. At what absolute temperature $T_2$ will the rate constant become $k_2 = 0.20\\text{ s}^{-1}$ (ten times faster)? ($R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "questionAr": "تفاعل يمتلك طاقة تنشيط $E_a = 65.0\\text{ kJ/mol}$ وثابت سرعة $k_1 = 0.020\\text{ s}^{-1}$ عند $T_1 = 300\\text{ K}$. عند أي درجة حرارة مطلقة $T_2$ يصبح ثابت السرعة $k_2 = 0.20\\text{ s}^{-1}$ (أسرع بعشر مرات)؟ ($R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).",
    "optionsEn": [
      "$T_2 = 315.0\\text{ K} \\; (42.0^\\circ\\text{C})$",
      "$T_2 = 329.1\\text{ K} \\; (56.1^\\circ\\text{C})$",
      "$T_2 = 360.2\\text{ K} \\; (87.2^\\circ\\text{C})$",
      "$T_2 = 345.5\\text{ K} \\; (72.5^\\circ\\text{C})$"
    ],
    "optionsAr": [
      "$T_2 = 315.0\\text{ كلفن} \\; (42.0^\\circ\\text{م})$",
      "$T_2 = 329.1\\text{ كلفن} \\; (56.1^\\circ\\text{م})$",
      "$T_2 = 360.2\\text{ كلفن} \\; (87.2^\\circ\\text{م})$",
      "$T_2 = 345.5\\text{ كلفن} \\; (72.5^\\circ\\text{م})$"
    ],
    "correctAnswer": "$T_2 = 329.1\\text{ K} \\; (56.1^\\circ\\text{C})$",
    "correctIndex": 1,
    "hintEn": "ln(k2 / k1) = ln(10) = 2.3026. Set equal to (E_a / R) * (1/T1 - 1/T2) and solve for 1/T2.",
    "hintAr": "ln(10) = 2.3026 = (65000 / 8.314) * (1/300 - 1/T2). أوجد قيمة T2.",
    "stepByStepSolutionEn": [
      "1. Two-point Arrhenius equation: $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.",
      "2. Substitute known values: $\\ln(10) = 2.30259 = \\frac{65000}{8.314} \\left(\\frac{1}{300} - \\frac{1}{T_2}\\right) = 7818.14 \\left(0.003333 - \\frac{1}{T_2}\\right)$.",
      "3. Solve for temperature difference: $\\frac{2.30259}{7818.14} \\approx 2.9452 \\times 10^{-4}\\text{ K}^{-1}$.",
      "4. Calculate $T_2$: $\\frac{1}{T_2} = 0.0033333 - 0.00029452 = 0.0030388\\text{ K}^{-1} \\implies T_2 = \\frac{1}{0.0030388} \\approx 329.1\\text{ K}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة أرينيوس: $\\ln(k_2/k_1) = \\frac{E_a}{R} (1/T_1 - 1/T_2)$.",
      "٢. التعويض: $\\ln(10) = 2.3026 = \\frac{65000}{8.314} (1/300 - 1/T_2) = 7818.14 (0.003333 - 1/T_2)$.",
      "٣. فرق المقلوب: $2.3026 / 7818.14 = 2.945 \\times 10^{-4}$.",
      "٤. مقلوب الحرارة الجديدة: $1/T_2 = 0.003333 - 0.0002945 = 0.003039 \\implies T_2 = 329.1\\text{ K}$."
    ],
    "teacherTipEn": "A modest temperature increase of under 30 degrees Celsius is sufficient to accelerate this reaction by an entire order of magnitude (10x).",
    "teacherTipAr": "ارتفاع متواضع لا يتجاوز 30 درجة مئوية كان كافياً لتسريع التفاعل بمقدار 10 أضعاف كاملة."
  },
  {
    "id": "egbac_chem_ch1_ex_09",
    "titleEn": "Activation Energy of Reverse Reaction and Enthalpy",
    "titleAr": "طاقة تنشيط التفاعل العكسي وتغير الإنثالبي",
    "difficulty": "easy",
    "questionEn": "An exothermic chemical reaction has a forward activation energy $E_{a,\\text{fwd}} = 45.0\\text{ kJ/mol}$ and a standard enthalpy of reaction $\\Delta H^\\circ = -75.0\\text{ kJ/mol}$. What is the activation energy of the reverse reaction $E_{a,\\text{rev}}$?",
    "questionAr": "تفاعل كيميائي طارد للحرارة يمتلك طاقة تنشيط أمامية $E_{a,\\text{fwd}} = 45.0\\text{ kJ/mol}$ وتغيراً في الإنثالبي القياسي $\\Delta H^\\circ = -75.0\\text{ kJ/mol}$. ما هي طاقة تنشيط التفاعل العكسي $E_{a,\\text{rev}}$؟",
    "optionsEn": [
      "$E_{a,\\text{rev}} = 30.0\\text{ kJ/mol}$",
      "$E_{a,\\text{rev}} = 75.0\\text{ kJ/mol}$",
      "$E_{a,\\text{rev}} = 120.0\\text{ kJ/mol}$",
      "$E_{a,\\text{rev}} = 45.0\\text{ kJ/mol}$"
    ],
    "optionsAr": [
      "$E_{a,\\text{rev}} = 30.0\\text{ كيلوجول/مول}$",
      "$E_{a,\\text{rev}} = 75.0\\text{ كيلوجول/مول}$",
      "$E_{a,\\text{rev}} = 120.0\\text{ كيلوجول/مول}$",
      "$E_{a,\\text{rev}} = 45.0\\text{ كيلوجول/مول}$"
    ],
    "correctAnswer": "$E_{a,\\text{rev}} = 120.0\\text{ kJ/mol}$",
    "correctIndex": 2,
    "hintEn": "Use thermodynamic relation: Delta H = E_a,fwd - E_a,rev => E_a,rev = E_a,fwd - Delta H = 45.0 - (-75.0) = 120.0 kJ/mol.",
    "hintAr": "العلاقة بين طاقتي التنشيط والإنثالبي: Delta H = E_a,fwd - E_a,rev. إذن E_a,rev = 45.0 - (-75.0) = 120.0 kJ/mol.",
    "stepByStepSolutionEn": [
      "1. Relation between activation energies and enthalpy: $\\Delta H = E_{a,\\text{fwd}} - E_{a,\\text{rev}}$.",
      "2. Rearrange for reverse barrier: $E_{a,\\text{rev}} = E_{a,\\text{fwd}} - \\Delta H$.",
      "3. Substitute values: $E_{a,\\text{rev}} = 45.0\\text{ kJ/mol} - (-75.0\\text{ kJ/mol}) = 45.0 + 75.0 = 120.0\\text{ kJ/mol}$."
    ],
    "stepByStepSolutionAr": [
      "١. العلاقة بين طاقات التنشيط والإنثالبي: $\\Delta H = E_{a,\\text{fwd}} - E_{a,\\text{rev}}$.",
      "٢. إعادة الترتيب للتفاعل العكسي: $E_{a,\\text{rev}} = E_{a,\\text{fwd}} - \\Delta H$.",
      "٣. التعويض: $E_{a,\\text{rev}} = 45.0 - (-75.0) = 120.0\\text{ كيلوجول/مول}$."
    ],
    "teacherTipEn": "For an exothermic reaction, the reverse activation energy is always strictly greater than the forward activation energy by |Delta H|.",
    "teacherTipAr": "في التفاعلات الطاردة للحرارة، تكون طاقة تنشيط التفاعل العكسي دائماً أكبر من طاقة التنشيط الأمامية بمقدار |Delta H|."
  },
  {
    "id": "egbac_chem_ch1_ex_10",
    "titleEn": "Catalytic Potential Energy Profile and Thermodynamic Invariance",
    "titleAr": "منحنى طاقة الوضع في وجود الحفاز والثبات الديناميكي الحراري",
    "difficulty": "easy",
    "questionEn": "When a solid transition metal catalyst is introduced into an industrial chemical process, which of the following thermodynamic and kinetic parameters is altered?",
    "questionAr": "عند إضافة عامل حفاز صلب من الفلزات الانتقالية إلى تفاعل صناعي، أيٌّ من الخواص الديناميكية الحرارية والحركية التالية تتغير؟",
    "optionsEn": [
      "The standard enthalpy change $\\Delta H^\\circ$ of the reaction.",
      "The thermodynamic equilibrium constant $K_{eq}$.",
      "The standard Gibbs free energy change $\\Delta G^\\circ$.",
      "The activation energy $E_a$ and the reaction mechanism path."
    ],
    "optionsAr": [
      "التغير في الإنثالبي القياسي للتفاعل $\\Delta H^\\circ$.",
      "ثابت الاتزان الديناميكي الحراري $K_{eq}$.",
      "التغير في طاقة جيبس الحرة القياسية $\\Delta G^\\circ$.",
      "طاقة التنشيط $E_a$ والمسار الحركي لآلية التفاعل فقط."
    ],
    "correctAnswer": "The activation energy $E_a$ and the reaction mechanism path.",
    "correctIndex": 3,
    "hintEn": "A catalyst lowers E_a by providing an alternative pathway, but cannot alter state functions (Delta H, Delta G) or the equilibrium constant K.",
    "hintAr": "يخفض الحفاز طاقة التنشيط عبر توفير مسار بديل، لكنه لا يغير دوال الحالة (Delta H, Delta G) ولا يغير موضع الاتزان K.",
    "stepByStepSolutionEn": [
      "1. A catalyst provides an alternative reaction pathway involving transition complexes with lower activation barriers ($E_{a,\\text{cat}} < E_{a,\\text{uncat}}$).",
      "2. Because it accelerates both the forward and reverse rates equally ($k_{\\text{fwd}}$ and $k_{\\text{rev}}$ increase by the identical factor), the equilibrium constant $K = k_{\\text{fwd}} / k_{\\text{rev}}$ remains strictly unchanged.",
      "3. Enthalpy $\\Delta H^\\circ$ and free energy $\\Delta G^\\circ$ are state functions depending solely on initial reactants and final products; thus, catalysts have zero effect on $\\Delta H^\\circ$ or $\\Delta G^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "١. يوفر العامل الحفاز مساراً بديلاً ذا طاقة تنشيط أقل ($E_{a,\\text{cat}} < E_{a,\\text{uncat}}$).",
      "٢. يُسرع الحفاز التفاعلين الأمامي والعكسي بنفس النسبة تماماً، لذا يظل ثابت الاتزان $K = k_{\\text{fwd}} / k_{\\text{rev}}$ ثابتاً دون أي تغير.",
      "٣. الإنثالبي $\\Delta H$ وطاقة جيبس $\\Delta G$ دوال حالة تعتمد فقط على المتفاعلات والنواتج ولا تتأثر مطلقاً بالمسار الحفزي."
    ],
    "teacherTipEn": "Catalysts change the SPEED at which equilibrium is reached, NEVER the position of equilibrium or the final equilibrium yield.",
    "teacherTipAr": "يغير العامل الحفاز زمن الوصول إلى حالة الاتزان، لكنه لا يغير أبداً موضع الاتزان أو النسبة المئوية للمحصول النهائي."
  },
  {
    "id": "egbac_chem_ch1_ex_11",
    "titleEn": "Heterogeneous Catalysis: Adsorption and Active Sites",
    "titleAr": "الحفز غير المتجانس: الامتزاز وتأثير المواقع النشطة",
    "difficulty": "medium",
    "questionEn": "In the industrial synthesis of ammonia via the Haber-Bosch process over an iron catalyst, what is the sequence of fundamental elementary surface steps?",
    "questionAr": "في عملية هابر-بوش الصناعية لإنتاج الأمونيا على سطح حفاز الحديد، ما هو الترتيب الصحيح للخطوات السطحية الأساسية؟",
    "optionsEn": [
      "Chemisorption of reactants on active sites $\\to$ Dissociation and bond weakening $\\to$ Surface reaction to form intermediates $\\to$ Desorption of product $\\text{NH}_3$.",
      "Desorption of products $\\to$ Dissociation $\\to$ Adsorption $\\to$ Condensation.",
      "Dissolution of iron $\\to$ Homogeneous solution reaction $\\to$ Precipitation of iron oxide $\\to$ Gas evolution.",
      "Physical condensation $\\to$ Sublimation $\\to$ High-voltage ionization $\\to$ Gas expansion."
    ],
    "optionsAr": [
      "الامتزاز الكيميائي للمتفاعلات على المواقع النشطة $\\to$ التفكك وتوهين الروابط $\\to$ التفاعل السطحي وتكوين المركبات $\\to$ انتزاع وانفصال غاز النشادر الناتج.",
      "انتزاع النواتج $\\to$ التفكك $\\to$ الامتزاز $\\to$ التكثيف.",
      "ذوبان الحديد $\\to$ تفاعل في محلول متجانس $\\to$ ترسيب أكسيد الحديد $\\to$ تصاعد الغاز.",
      "تكاثف فيزيائي $\\to$ تسامي $\\to$ تأين بجهد مرتفع $\\to$ تمدد الغاز."
    ],
    "correctAnswer": "Chemisorption of reactants on active sites $\\to$ Dissociation and bond weakening $\\to$ Surface reaction to form intermediates $\\to$ Desorption of product $\\text{NH}_3$.",
    "correctIndex": 0,
    "hintEn": "Heterogeneous catalysis proceeds via: 1) Adsorption, 2) Surface activation/reaction, 3) Desorption of product molecules.",
    "hintAr": "يمر الحفز غير المتجانس بـ: ١) الامتزاز على السطح، ٢) تفكك وتفاعل الروابط السطحية، ٣) انفصال وانتزاع النواتج.",
    "stepByStepSolutionEn": [
      "1. Reactant gas molecules ($\text{N}_2$ and $\text{H}_2$) diffuse to the catalyst surface and undergo dissociative chemisorption onto active Fe surface atoms.",
      "2. The robust triple bond in $\text{N} \\equiv \text{N}$ ($945\text{ kJ/mol}$) is broken, forming surface-bound nitrogen adatoms.",
      "3. Stepwise hydrogen addition occurs on the surface: $\text{N(ad)} + \text{H(ad)} \to \text{NH(ad)} \to \text{NH}_2\text{(ad)} \to \text{NH}_3\text{(ad)}$.",
      "4. Finally, product $\text{NH}_3$ desorbs from the surface into the gas phase, regenerating free active sites."
    ],
    "stepByStepSolutionAr": [
      "١. تنتشر جزيئات الغاز نحو سطح الحفاز وتخضع للامتزاز الكيميائي التفككي على ذرات الحديد النشطة.",
      "٢. تنكسر الرابطة الثلاثية القوية في النيتروجين ($945\text{ kJ/mol}$) مكونة ذرات نيتروجين ممتزة.",
      "٣. تحدث إضافة الهيدروجين بالتدريج على السطح: $\text{N} \to \text{NH} \to \text{NH}_2 \to \text{NH}_3$.",
      "٤. ينفصل جزيء الأمونيا المتكون عن السطح (الانتزاع) ليعود إلى الطور الغازي، مفسحاً المجال لجزيئات جديدة."
    ],
    "teacherTipEn": "Finely dividing a solid catalyst drastically increases the specific surface area and active site density, accelerating the heterogeneous rate.",
    "teacherTipAr": "سحق وتجزئة العامل الحفاز الصلب يزيد مساحة السطح النوعية وعدد المواقع النشطة مما يضاعف سرعة التفاعل غير المتجانس."
  },
  {
    "id": "egbac_chem_ch1_ex_12",
    "titleEn": "Steady-State Approximation for Free-Radical Intermediates",
    "titleAr": "تقريب الحالة المستقرة للشقوق الحرة والمركبات الوسطية النشطة",
    "difficulty": "hots",
    "questionEn": "For a chain reaction where an intermediate free radical $R^\\bullet$ is produced at rate $r_{\\text{form}} = k_1 [A]$ and destroyed via two competitive pathways: $r_{\\text{dest}} = k_2 [R^\\bullet][B] + k_3 [R^\\bullet]^2$. Under Bodenstein's steady-state approximation ($d[R^\\bullet]/dt \\approx 0$) where the linear destruction step dominates ($k_2 [R^\\bullet][B] \\gg k_3 [R^\\bullet]^2$), what is the steady-state concentration of $R^\\bullet$?",
    "questionAr": "في تفاعل متسلسل يتكون فيه شق حر وسطي $R^\\bullet$ بمعدل $r_{\\text{form}} = k_1 [A]$ ويُستهلك عبر مسارين متنافسين: $r_{\\text{dest}} = k_2 [R^\\bullet][B] + k_3 [R^\\bullet]^2$. بتطبيق تقريب الحالة المستقرة لبودنشتاين ($d[R^\\bullet]/dt \\approx 0$) وبإهمال التدمير الثنائي ($k_2 [R^\\bullet][B] \\gg k_3 [R^\\bullet]^2$)، ما هو تركيز الحالة المستقرة لـ $R^\\bullet$؟",
    "optionsEn": [
      "$[R^\\bullet]_{ss} = \\sqrt{\\frac{k_1 [A]}{k_3}}$",
      "$[R^\\bullet]_{ss} = \\frac{k_1 [A]}{k_2 [B]}$",
      "$[R^\\bullet]_{ss} = \\frac{k_2 [B]}{k_1 [A]}$",
      "$[R^\\bullet]_{ss} = k_1 [A] - k_2 [B]$"
    ],
    "optionsAr": [
      "$[R^\\bullet]_{ss} = \\sqrt{\\frac{k_1 [A]}{k_3}}$",
      "$[R^\\bullet]_{ss} = \\frac{k_1 [A]}{k_2 [B]}$",
      "$[R^\\bullet]_{ss} = \\frac{k_2 [B]}{k_1 [A]}$",
      "$[R^\\bullet]_{ss} = k_1 [A] - k_2 [B]$"
    ],
    "correctAnswer": "$[R^\\bullet]_{ss} = \\frac{k_1 [A]}{k_2 [B]}$",
    "correctIndex": 1,
    "hintEn": "Set d[R]/dt = formation rate - consumption rate = 0: k1 [A] - k2 [R][B] = 0 => [R] = k1 [A] / (k2 [B]).",
    "hintAr": "ضع مشتقة التركيز = 0: معدل التكون = معدل الاستهلاك: k1 [A] = k2 [R][B] إذن [R] = k1 [A] / (k2 [B]).",
    "stepByStepSolutionEn": [
      "1. Steady-state approximation states that reactive intermediate concentration remains low and virtually constant: $\\frac{d[R^\\bullet]}{dt} = 0$.",
      "2. Rate equation: $\\frac{d[R^\\bullet]}{dt} = k_1 [A] - k_2 [R^\\bullet][B] = 0$.",
      "3. Solve directly for steady-state concentration: $[R^\\bullet]_{ss} = \\frac{k_1 [A]}{k_2 [B]}$."
    ],
    "stepByStepSolutionAr": [
      "١. ينص تقريب الحالة المستقرة على ثبات تركيز المركب الوسطي النشط جداً عند قيمة منخفضة: $\\frac{d[R^\\bullet]}{dt} = 0$.",
      "٢. معادلة المعدل: معدل التكون يساوي معدل الاستهلاك: $k_1 [A] = k_2 [R^\\bullet][B]$.",
      "٣. استنتاج التركيز المستقر: $[R^\\bullet]_{ss} = \\frac{k_1 [A]}{k_2 [B]}$."
    ],
    "teacherTipEn": "The steady-state approximation is the cornerstone tool in chemical kinetics for analyzing combustion, atmospheric ozone cycles, and enzyme kinetics.",
    "teacherTipAr": "يعد تقريب الحالة المستقرة الأداة الرياضية الأساسية لتحليل تفاعلات الاحتراق وطبقة الأوزون وحركية الإنزيمات."
  },
  {
    "id": "egbac_chem_ch1_ex_13",
    "titleEn": "Collision Theory: Steric Orientation Factor p",
    "titleAr": "نظرية التصادم: المعامل الفراغي وتوجيه الجزيئات في الفضاء",
    "difficulty": "medium",
    "questionEn": "In modern collision theory, the pre-exponential Arrhenius factor is expressed as $A = p \\cdot Z$, where $Z$ is the collision frequency and $p$ is the steric factor. For the gas-phase reaction $\\text{K} + \\text{CH}_3\\text{I} \\to \\text{KI} + \\text{CH}_3$, $p \\approx 4.8$, whereas for $\\text{NO}_2 + \\text{NO}_2 \\to \\text{N}_2\\text{O}_4$, $p \\approx 10^{-3}$. Why is the steric factor $p$ significantly smaller than $1$ for the dimerization of $\\text{NO}_2$?",
    "questionAr": "في نظرية التصادم الحديثة، يُعبر عن معامل أرينيوس الترددي بالعلاقة $A = p \\cdot Z$، حيث $Z$ تردد التصادمات و $p$ المعامل الفراغي (المعامل الستيري). لتفاعل $\\text{NO}_2 + \\text{NO}_2 \\to \\text{N}_2\\text{O}_4$ نجد أن $p \\approx 10^{-3}$. لماذا يكون المعامل الفراغي $p$ أقل بكثير من الواحد الصحيح في هذا التفاعل؟",
    "optionsEn": [
      "Because $\\text{NO}_2$ molecules do not have sufficient kinetic energy to collide.",
      "Because the reaction is highly endothermic with negative activation energy.",
      "Because reaction requires a highly specific spatial orientation where the unpaired electrons on both nitrogen atoms collide directly head-on.",
      "Because nitrogen atoms repel each other due to nuclear gravitational forces."
    ],
    "optionsAr": [
      "لأن جزيئات $\\text{NO}_2$ لا تمتلك طاقة حركة كافية للتصادم.",
      "لأن التفاعل ماص جداً للحرارة ويمتلك طاقة تنشيط سالبة.",
      "لأن التفاعل يشترط توجيهاً فراغياً دقيقاً ومحدداً للغاية بحيث تتصادم ذرتا النيتروجين الحاملتان للإلكترون المفرد وجهاً لوجه مباشرة.",
      "لأن ذرات النيتروجين تتنافر بسبب قوى الجاذبية الأرضية."
    ],
    "correctAnswer": "Because reaction requires a highly specific spatial orientation where the unpaired electrons on both nitrogen atoms collide directly head-on.",
    "correctIndex": 2,
    "hintEn": "Steric factor p measures the probability that colliding molecules have the correct geometrical alignment. Complicated alignments mean p << 1.",
    "hintAr": "يقيس المعامل الفراغي احتمالية تصادم الجزيئات بالزاوية الهندسية الصحيحة؛ والاشتراطات الهندسية المعقدة تجعل p << 1.",
    "stepByStepSolutionEn": [
      "1. Collision theory states that collisions must satisfy two criteria: sufficient energy ($E \\ge E_a$) and correct steric orientation.",
      "2. In $\\text{NO}_2$, the lone unpaired electron resides in an $sp^2$ hybrid orbital on the nitrogen atom.",
      "3. Collisions where oxygen atoms collide with oxygen, or oxygen with nitrogen, do not lead to bond formation. Only collisions with precise $\\text{N}-\\text{N}$ alignment succeed, leading to $p \\ll 1$ ($0.1\\%$ success rate)."
    ],
    "stepByStepSolutionAr": [
      "١. تشترط نظرية التصادم: طاقة كافية تفوق طاقة التنشيط وتوجيهاً فراغياً ملائماً.",
      "٢. في جزيء $\\text{NO}_2$، يقع الإلكترون المنفرد على ذرة النيتروجين.",
      "٣. تصادم ذرات الأكسجين مع بعضها لا يؤدي لتكوين الرابطة؛ والتصادم الفعال يتطلب تلاقي ذرتي النيتروجين مباشرة، مما يجعل $p \\ll 1$."
    ],
    "teacherTipEn": "Simple spherical atoms (like noble gases or H atoms) have steric factors close to 1, while polyatomic molecules with localized reactive sites have p << 1.",
    "teacherTipAr": "تمتلك الذرات الكروية البسيطة معاملاً فراغياً قريباً من 1، بينما تقل قيمة p كثيراً في الجزيئات عديدة الذرات."
  },
  {
    "id": "egbac_chem_ch1_ex_14",
    "titleEn": "Comparison of Half-Lives for Zero, First, and Second Order Reactions",
    "titleAr": "مقارنة سلوك فترات عمر النصف لتفاعلات الرتب الصفرية والأولى والثانية",
    "difficulty": "hots",
    "questionEn": "Three separate reactions ($X \\to \\text{products}$, $Y \\to \\text{products}$, $Z \\to \\text{products}$) each begin with initial concentration $0.10\\text{ M}$. If the initial concentration of all three reactants is doubled to $0.20\\text{ M}$:\n- The half-life of $X$ doubles ($200\\text{ s} \\to 400\\text{ s}$).\n- The half-life of $Y$ remains unchanged ($300\\text{ s} \\to 300\\text{ s}$).\n- The half-life of $Z$ drops to half its original value ($500\\text{ s} \\to 250\\text{ s}$).\nWhat are the respective reaction orders of $X$, $Y$, and $Z$?",
    "questionAr": "ثلاثة تفاعلات كيميائية منفصلة بدأت بتركيز ابتدائي قدره $0.10\\text{ M}$. عند مضاعفة التركيز الابتدائي للتفاعلات الثلاثة إلى $0.20\\text{ M}$:\n- تضاعفت فترة عمر النصف للمتفاعل $X$ من $200\\text{ s}$ إلى $400\\text{ s}$.\n- بقيت فترة عمر النصف للمتفاعل $Y$ ثابتة دون أي تغير ($300\\text{ s}$).\n- انخفضت فترة عمر النصف للمتفاعل $Z$ إلى النصف من $500\\text{ s}$ إلى $250\\text{ s}$.\nما هي رتب التفاعل للمواد $X$ و $Y$ و $Z$ على الترتيب؟",
    "optionsEn": [
      "$X$: First order; $Y$: Second order; $Z$: Zero order",
      "$X$: Second order; $Y$: First order; $Z$: Zero order",
      "$X$: Zero order; $Y$: Second order; $Z$: First order",
      "$X$: Zero order ($0$); $Y$: First order ($1$); $Z$: Second order ($2$)"
    ],
    "optionsAr": [
      "$X$: رتبة أولى؛ $Y$: رتبة ثانية؛ $Z$: رتبة صفرية",
      "$X$: رتبة ثانية؛ $Y$: رتبة أولى؛ $Z$: رتبة صفرية",
      "$X$: رتبة صفرية؛ $Y$: رتبة ثانية؛ $Z$: رتبة أولى",
      "$X$: رتبة صفرية (0)؛ $Y$: رتبة أولى (1)؛ $Z$: رتبة ثانية (2)"
    ],
    "correctAnswer": "$X$: Zero order ($0$); $Y$: First order ($1$); $Z$: Second order ($2$)",
    "correctIndex": 3,
    "hintEn": "General half-life dependence: t_1/2 proportional to [A]_0^(1-n). For n=0, t_1/2 prop [A]_0. For n=1, const. For n=2, prop 1/[A]_0.",
    "hintAr": "التناسب العام لعمر النصف: t_1/2 يتناسب مع [A]_0^(1-n). للرتبة 0 طردي، وللرتبة 1 مستقل، وللرتبة 2 عكسي.",
    "stepByStepSolutionEn": [
      "1. Universal half-life proportionality: $t_{1/2} \\propto [A]_0^{1-n}$, where $n$ is the reaction order.",
      "2. For $X$: $t_{1/2}$ doubles when $[A]_0$ doubles $\\implies 1 - n = 1 \\implies n = 0$ (Zero-Order, $t_{1/2} = \\frac{[A]_0}{2k}$).",
      "3. For $Y$: $t_{1/2}$ is independent of $[A]_0 \\implies 1 - n = 0 \\implies n = 1$ (First-Order, $t_{1/2} = \\frac{\\ln 2}{k}$).",
      "4. For $Z$: $t_{1/2}$ is halved when $[A]_0$ doubles $\\implies 1 - n = -1 \\implies n = 2$ (Second-Order, $t_{1/2} = \\frac{1}{k[A]_0}$)."
    ],
    "stepByStepSolutionAr": [
      "١. قانون التناسب العام لفترة عمر النصف: $t_{1/2} \\propto [A]_0^{1-n}$ حيث $n$ رتبة التفاعل.",
      "٢. المتفاعل $X$: تضاعف عمر النصف بتضاعف التركيز $\\implies 1 - n = 1 \\implies n = 0$ (رتبة صفرية).",
      "٣. المتفاعل $Y$: ثبات عمر النصف دون تأثر بالتركيز $\\implies 1 - n = 0 \\implies n = 1$ (رتبة أولى).",
      "٤. المتفاعل $Z$: تناقص عمر النصف إلى النصف بتضاعف التركيز $\\implies 1 - n = -1 \\implies n = 2$ (رتبة ثانية)."
    ],
    "teacherTipEn": "This half-life dependence diagnostic provides a fast experimental method to pinpoint reaction order without linear curve plotting.",
    "teacherTipAr": "يمثل اختبار اعتماد عمر النصف على التركيز أسرع طريقة تجريبية لتحديد رتبة التفاعل دون الحاجة للرسم البياني."
  },
  {
    "id": "egbac_chem_ch1_ex_15",
    "titleEn": "Photochemical Reaction Rate and Quantum Yield",
    "titleAr": "سرعة التفاعل الكيميائي الضوئي والمحصول الكمي",
    "difficulty": "easy",
    "questionEn": "In photochemical kinetics, the reaction rate often exhibits zero-order dependence on reactant concentration ($r = k I_{\\text{absorbed}}$) because:",
    "questionAr": "في حركية التفاعلات الكيميائية الضوئية، تكون سرعة التفاعل غالباً مستقلة عن تركيز المواد المتفاعلة (رتبة صفرية $r = k I_{\\text{absorbed}}$) لأن:",
    "optionsEn": [
      "The reaction rate is limited solely by the intensity and photon absorption flux of incident light, not by molecular concentrations.",
      "Photons possess zero kinetic energy at all wavelengths.",
      "Light acts as a chemical reactant with negative activation energy.",
      "Photochemical reactions only occur at absolute zero Kelvin."
    ],
    "optionsAr": [
      "سرعة التفاعل محكومة ومحدودة فقط بشدة الضوء الساقط ومعدل امتصاص الفوتونات، وليس بتراكيز الجزيئات.",
      "الفوتونات تمتلك طاقة حركة منعدمة عند جميع الأطوال الموجية.",
      "الضوء يعمل كمتفاعل كيميائي ذي طاقة تنشيط سالبة.",
      "التفاعلات الضوئية تحدث فقط عند درجة الصفر المطلق."
    ],
    "correctAnswer": "The reaction rate is limited solely by the intensity and photon absorption flux of incident light, not by molecular concentrations.",
    "correctIndex": 0,
    "hintEn": "Photochemical activation depends on photon flux: each absorbed photon initiates an activation event irrespective of reactant excess.",
    "hintAr": "التنشيط الضوئي يعتمد على تدفق الفوتونات: كل فوتون ممتص ينشط جزيئاً بغض النظر عن وفرة المتفاعلات في المحلول.",
    "stepByStepSolutionEn": [
      "1. According to the Stark-Einstein law of photochemical equivalence, each molecule participating in a primary photochemical reaction absorbs one photon (quantum) of light.",
      "2. When reactant concentration is sufficiently high to absorb all incident light, the rate of excitation depends entirely on the absorbed light intensity $I_{\\text{abs}}$.",
      "3. Therefore, increasing reactant concentration further cannot accelerate the reaction, resulting in an observed zero-order rate law with respect to reactant concentration."
    ],
    "stepByStepSolutionAr": [
      "١. وفق قانون شتارك-أينشتاين للمكافئ الضوئي: يمتص كل جزيء في الخطوة الضوئية الأولية كوانتاً واحداً من الضوء.",
      "٢. عندما يكون تركيز المادة كافياً لامتصاص كامل الضوء الساقط، تتوقف سرعة الإثارة كلياً على شدة الضوء الممتص $I_{\\text{abs}}$.",
      "٣. لا تؤدي زيادة تركيز المادة المتفاعلة بعد ذلك إلى أي زيادة في السرعة، مما يجعل الرتبة صفرية بالنسبة للتركيز."
    ],
    "teacherTipEn": "Photosynthesis and atmospheric ozone formation are prime examples of photochemically rate-limited kinetic systems.",
    "teacherTipAr": "تعد عمليات البناء الضوئي وتكوين الأوزون في الغلاف الجوي أمثلة كلاسيكية على التفاعلات المحكومة حركياً بشدة الإشعاع الضوئي."
  }
];
