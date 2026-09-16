import type { SolvedProblem } from '../../../types/curriculum';

export const thChemCh4SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_chem_ch4_se_01",
    "titleEn": "MoE Example 1: Calculating Standard Cell EMF and Spontaneity",
    "titleAr": "مثال الوزارة ١: حساب القوة الدافعة الكهربية للخلية وتحديد تلقائية التفاعل",
    "difficulty": "easy",
    "questionEn": "A galvanic cell consists of zinc and copper half-cells. The standard oxidation potentials are $E_{\\text{ox}}^\\circ(\\text{Zn}/\\text{Zn}^{2+}) = +0.76\\,\\text{V}$ and $E_{\\text{ox}}^\\circ(\\text{Cu}/\\text{Cu}^{2+}) = -0.34\\,\\text{V}$. What is the standard cell EMF ($E_{\\text{cell}}^\\circ$), and does it operate spontaneously as a galvanic cell?",
    "questionAr": "خلية جلفانية تتكون من نصفي خلية الخارصين والنحاس. فإذا كانت جهود التأكسد القياسية هي: $E_{\\text{ox}}^\\circ(\\text{Zn}/\\text{Zn}^{2+}) = +0.76\\,\\text{V}$ و $E_{\\text{ox}}^\\circ(\\text{Cu}/\\text{Cu}^{2+}) = -0.34\\,\\text{V}$. احسب القوة الدافعة الكهربية للخلية ($E_{\\text{cell}}^\\circ$)، وهل يصدر عنها تيار كهربي تلقائياً؟",
    "optionsEn": [
      "$E_{\\text{cell}}^\\circ = +1.10\\,\\text{V}$, and the reaction is spontaneous (galvanic cell)",
      "$E_{\\text{cell}}^\\circ = +0.42\\,\\text{V}$, and the reaction is non-spontaneous",
      "$E_{\\text{cell}}^\\circ = -1.10\\,\\text{V}$, and the reaction requires external power",
      "$E_{\\text{cell}}^\\circ = +0.38\\,\\text{V}$, and the reaction is electrolytic"
    ],
    "optionsAr": [
      "$E_{\\text{cell}}^\\circ = +1.10\\,\\text{V}$، والتفاعل تلقائي وتعمل كخلية جلفانية منتجة للتيار",
      "$E_{\\text{cell}}^\\circ = +0.42\\,\\text{V}$، والتفاعل غير تلقائي",
      "$E_{\\text{cell}}^\\circ = -1.10\\,\\text{V}$، والتفاعل يحتاج لمصدر تيار خارجي",
      "$E_{\\text{cell}}^\\circ = +0.38\\,\\text{V}$، وتعمل كخلية إلكتروليتية"
    ],
    "correctAnswer": "$E_{\\text{cell}}^\\circ = +1.10\\,\\text{V}$, and the reaction is spontaneous (galvanic cell)",
    "correctIndex": 0,
    "hintEn": "Zinc has higher oxidation potential, so it acts as anode. Copper acts as cathode. E_cell = E_ox(anode) - E_ox(cathode) = 0.76 - (-0.34) = +1.10 V.",
    "hintAr": "الخارصين له جهد تأكسد أكبر فيعمل كأنود، والنحاس ككاثود. جهد الخلية = جهد تأكسد الأنود - جهد تأكسد الكاثود = $0.76 - (-0.34) = +1.10\\,\\text{V}$.",
    "stepByStepSolutionEn": [
      "Identify electrodes: $\\text{Zn}$ has the higher oxidation potential ($+0.76\\,\\text{V} > -0.34\\,\\text{V}$), so zinc is the **anode** (oxidation).",
      "Copper has the lower oxidation potential (higher reduction potential $E_{\\text{red}} = +0.34\\,\\text{V}$), so copper is the **cathode** (reduction).",
      "Formula: $E_{\\text{cell}}^\\circ = E_{\\text{ox}}^\\circ(\\text{anode}) + E_{\\text{red}}^\\circ(\\text{cathode})$.",
      "$E_{\\text{cell}}^\\circ = (+0.76) + (+0.34) = +1.10\\,\\text{V}$.",
      "Because $E_{\\text{cell}}^\\circ > 0$ (positive), the redox reaction is spontaneous and the cell produces electrical current (galvanic cell)."
    ],
    "stepByStepSolutionAr": [
      "تحديد الأقطاب: الخارصين يمتلك جهد تأكسد أعلى ($+0.76\\,\\text{V}$ مقابل $-0.34\\,\\text{V}$) فيعمل كأنود (قطب سالب تحدث عنده الأكسدة).",
      "النحاس يمتلك جهد اختزال أعلى ($+0.34\\,\\text{V}$) فيعمل ككاثود (قطب موجب تحدث عنده عملية الاختزال).",
      "قانون القوة الدافعة الكهربية: $E_{\\text{cell}}^\\circ = E_{\\text{ox}}^\\circ(\\text{أنود}) + E_{\\text{red}}^\\circ(\\text{كاثود})$.",
      "$E_{\\text{cell}}^\\circ = (+0.76) + (+0.34) = +1.10\\,\\text{V}$.",
      "بما أن إشارة $E_{\\text{cell}}^\\circ$ موجبة، فالتفاعل تلقائي والخلية جلفانية تنتج تياراً كهربياً."
    ],
    "teacherTipEn": "Cell notation for Daniell cell: Zn(s) | Zn2+(1M) || Cu2+(1M) | Cu(s).",
    "teacherTipAr": "الرمز الاصطلاحي لخلية دانيال: $\\text{Zn}(s) \\mid \\text{Zn}^{2+}(1\\,\\text{M}) \\parallel \\text{Cu}^{2+}(1\\,\\text{M}) \\mid \\text{Cu}(s)$."
  },
  {
    "id": "th_chem_ch4_se_02",
    "titleEn": "MoE Example 2: Mass of Copper Deposited by Faraday Law",
    "titleAr": "مثال الوزارة ٢: حساب كتلة النحاس المترسبة بقوانين فاراداي",
    "difficulty": "medium",
    "questionEn": "A direct electric current of $10\\,\\text{A}$ was passed for $965\\,\\text{seconds}$ through an aqueous copper(II) sulfate solution ($\\text{CuSO}_4$). What mass of copper is deposited at the cathode? $(\\text{Cu} = 63.5, \\, 1\\,\\text{F} = 96,500\\,\\text{C})$",
    "questionAr": "مُر تيار كهربي شدته $10\\,\\text{A}$ لمدة $965\\,\\text{ثانية}$ في محلول كبريتات النحاس II ($\\text{CuSO}_4$). احسب كتلة النحاس المترسبة على الكاثود. $(\\text{Cu} = 63.5, \\, 1\\,\\text{F} = 96,500\\,\\text{C})$",
    "optionsEn": [
      "$3.175\\,\\text{g}$",
      "$6.350\\,\\text{g}$",
      "$1.587\\,\\text{g}$",
      "$0.3175\\,\\text{g}$"
    ],
    "optionsAr": [
      "$3.175\\,\\text{g}$",
      "$6.350\\,\\text{g}$",
      "$1.587\\,\\text{g}$",
      "$0.3175\\,\\text{g}$"
    ],
    "correctAnswer": "$3.175\\,\\text{g}$",
    "correctIndex": 0,
    "hintEn": "Equivalent weight = 63.5 / 2 = 31.75 g. Quantity of charge Q = I * t = 10 * 965 = 9650 C. Mass = (Q * Eq. Wt.) / 96500.",
    "hintAr": "الكتلة المكافئة للكتلة $= 63.5 \\div 2 = 31.75\\,\\text{g}$. كمية الكهرباء $= 10 \\times 965 = 9650\\,\\text{C}$. الكتلة المترسبة $= (9650 \\times 31.75) \\div 96500 = 3.175\\,\\text{g}$.",
    "stepByStepSolutionEn": [
      "1. Copper valence in $\\text{CuSO}_4$ is $+2$ (divalent).",
      "2. Gram equivalent weight of copper: $\\text{Eq. Wt.} = \\frac{\\text{Atomic mass}}{\\text{Valence}} = \\frac{63.5}{2} = 31.75\\,\\text{g}$.",
      "3. Quantity of electric charge: $Q = I \\times t = 10\\,\\text{A} \\times 965\\,\\text{s} = 9,650\\,\\text{C}$.",
      "4. Faraday's formula: $m = \\frac{Q \\times \\text{Eq. Wt.}}{96,500} = \\frac{9,650 \\times 31.75}{96,500}$.",
      "5. $m = \\frac{31.75}{10} = 3.175\\,\\text{g}$ of $\\text{Cu}$ deposited."
    ],
    "stepByStepSolutionAr": [
      "١. تكافؤ النحاس في كبريتات النحاس II ثنائي ($z = 2$).",
      "٢. الكتلة المكافئة الجرامية للنحاس $= \\frac{63.5}{2} = 31.75\\,\\text{g}$.",
      "٣. كمية الكهرباء بالكولوم: $Q = I \\times t = 10 \\times 965 = 9,650\\,\\text{C}$.",
      "٤. قانون فاراداي العام: $\\text{الكتلة المترسبة} = \\frac{Q \\times \\text{الكتلة المكافئة}}{96,500}$.",
      "٥. الكتلة $= \\frac{9,650 \\times 31.75}{96,500} = \\frac{31.75}{10} = 3.175\\,\\text{g}$."
    ],
    "teacherTipEn": "Notice that 9,650 C is exactly 0.1 Faraday, depositing 0.1 gram-equivalent weight of copper.",
    "teacherTipAr": "لاحظ أن 9650 كولوم تمثل بالضبط 0.1 فاراداي، فترسب 0.1 كتلة مكافئة جرامية (3.175 جم)."
  },
  {
    "id": "th_chem_ch4_se_03",
    "titleEn": "MoE Example 3: Quantity of Electricity to Liberate 1 Mole of Gas",
    "titleAr": "مثال الوزارة ٣: كمية الكهرباء بالفاراداي اللازمة لتصعيد مول من الغاز ثنائي الذرة",
    "difficulty": "medium",
    "questionEn": "What quantity of electricity (in Faradays) is required to liberate exactly $1.0\\,\\text{mole}$ of oxygen gas molecules ($\\text{O}_2$) at the anode during the electrolysis of water?",
    "questionAr": "احسب كمية الكهرباء بوحدة الفاراداي ($\\text{F}$) اللازمة لتصعيد مول واحد من جزيئات غاز الأكسجين ($\\text{O}_2$) عند الأنود أثناء التحليل الكهربي للماء المحمض.",
    "optionsEn": [
      "$4\\,\\text{F}$",
      "$2\\,\\text{F}$",
      "$1\\,\\text{F}$",
      "$8\\,\\text{F}$"
    ],
    "optionsAr": [
      "$4\\,\\text{F}$",
      "$2\\,\\text{F}$",
      "$1\\,\\text{F}$",
      "$8\\,\\text{F}$"
    ],
    "correctAnswer": "$4\\,\\text{F}$",
    "correctIndex": 0,
    "hintEn": "1 mole of O2 has 2 atoms of oxygen. Each O atom is divalent (z = 2). Q = 1 mol * 2 atoms * 2 electrons = 4 Faradays.",
    "hintAr": "مول جزيئات الأكسجين يحتوي على ذرتين ($2\\,\\text{mol}$ ذرة)، وتكافؤ الأكسجين ثنائي. كمية الكهرباء $= 2 \\times 2 = 4\\,\\text{F}$.",
    "stepByStepSolutionEn": [
      "Half-reaction at the anode: $2\\text{O}^{2-} \\to \\text{O}_2(g) + 4e^-$.",
      "To liberate 1 mole of oxygen atoms requires: $1 \\times \\text{valence} = 1 \\times 2 = 2\\,\\text{Faradays}$.",
      "An oxygen gas molecule is diatomic ($\\text{O}_2$), containing $2\\,\\text{moles}$ of oxygen atoms.",
      "Therefore, to liberate 1 mole of $\\text{O}_2$ gas molecules requires: $2 \\times 2 = 4\\,\\text{Faradays}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة الأكسدة عند الأنود: $2\\text{O}^{2-} \\to \\text{O}_2(g) + 4e^-$.",
      "لتحرير مول واحد من ذرات الأكسجين يلزم: $1 \\times \\text{التكافؤ} = 2\\,\\text{Faradays}$.",
      "جزيء غاز الأكسجين ثنائي الذرة ($\\text{O}_2$)، فيحتوي المول من الجزيئات على 2 مول من الذرات.",
      "إذن كمية الكهرباء اللازمة لتصعيد مول جزيء أكسجين $= 2 \\times 2 = 4\\,\\text{Faradays}$."
    ],
    "teacherTipEn": "Rule for diatomic gases (H2, Cl2, O2, N2): Q (Faraday) = 1 mole * number of atoms (2) * valence.",
    "teacherTipAr": "قاعدة الغازات ثنائية الذرة: كمية الكهرباء اللازمة لتحرير مول جزيء = 1 × عدد الذرات في الجزيء (2) × التكافؤ."
  },
  {
    "id": "th_chem_ch4_se_04",
    "titleEn": "MoE Example 4: Lead-Acid Battery Operation & Hydrometer Testing",
    "titleAr": "مثال الوزارة ٤: تفاعلات تفريغ وشحن المركم الرصاصي وكثافة الحمض",
    "difficulty": "medium",
    "questionEn": "During the discharging of a lead-acid car battery (accumulator), what happens to the density of the sulfuric acid electrolyte, and what are the products formed at both electrodes?",
    "questionAr": "أثناء تفريغ المركم الرصاصي (بطارية السيارة)، ماذا يحدث لكثافة إلكتروليت حمض الكبريتيك وما المواد الناتجة عند كلا القطبين؟",
    "optionsEn": [
      "The density of sulfuric acid decreases due to water production and acid consumption, and both electrodes convert into lead(II) sulfate ($\\text{PbSO}_4$)",
      "The density increases, and lead dioxide forms at both electrodes",
      "The density remains unchanged, and hydrogen gas evolves at the anode",
      "The density decreases, but pure spongy lead forms at both electrodes"
    ],
    "optionsAr": [
      "تقل كثافة حمض الكبريتيك لاستهلاكه وتكون الماء، وتتحول مادة كلا القطبين إلى كبريتات الرصاص II ($\\text{PbSO}_4$)",
      "تزداد كثافة الحمض ويتكون ثاني أكسيد الرصاص عند كلا القطبين",
      "تظل كثافة الحمض ثابتة ويتصاعد غاز الهيدروجين عند الأنود",
      "تقل كثافة الحمض ويتكون رصاص إسفنجي عند كلا القطبين"
    ],
    "correctAnswer": "The density of sulfuric acid decreases due to water production and acid consumption, and both electrodes convert into lead(II) sulfate ($\\text{PbSO}_4$)",
    "correctIndex": 0,
    "hintEn": "Discharge: Pb(s) + PbO2(s) + 2 H2SO4(aq) -> 2 PbSO4(s) + 2 H2O(l). Acid is diluted, lowering density below 1.20 g/cm3.",
    "hintAr": "معادلة التفريغ: $\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\to 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$. يستهلك الحمض وينتج ماء فيخفف المحلول وتقل كثافته عن $1.20\\,\\text{g/cm}^3$، وتتحول مادتا الأنود والكاثود إلى كبريتات الرصاص II.",
    "stepByStepSolutionEn": [
      "Discharge overall reaction: $\\text{Pb}(s) + \\text{PbO}_2(s) + 2\\text{H}_2\\text{SO}_4(aq) \\to 2\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l)$.",
      "At anode: Spongy lead oxidizes: $\\text{Pb} + \\text{SO}_4^{2-} \\to \\text{PbSO}_4 + 2e^-$.",
      "At cathode: Lead dioxide reduces: $\\text{PbO}_2 + 4\\text{H}^+ + \\text{SO}_4^{2-} + 2e^- \\to \\text{PbSO}_4 + 2\\text{H}_2\\text{O}$.",
      "Sulfuric acid is consumed and water is produced, progressively diluting the electrolyte.",
      "Density drops from $1.28-1.30\\,\\text{g/cm}^3$ (fully charged) to below $1.20\\,\\text{g/cm}^3$, detected via a hydrometer."
    ],
    "stepByStepSolutionAr": [
      "التفاعل الكلي أثناء التفريغ: $\\text{Pb}(s) + \\text{PbO}_2(s) + 2\\text{H}_2\\text{SO}_4(aq) \\to 2\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l)$.",
      "عند الأنود: يتأكسد الرصاص الإسفنجي: $\\text{Pb} + \\text{SO}_4^{2-} \\to \\text{PbSO}_4 + 2e^-$.",
      "عند الكاثود: يختزل ثاني أكسيد الرصاص: $\\text{PbO}_2 + 4\\text{H}^+ + \\text{SO}_4^{2-} + 2e^- \\to \\text{PbSO}_4 + 2\\text{H}_2\\text{O}$.",
      "يستهلك الحمض وينتج ماء فيخف تركيز الإلكتروليت وتقل كثافته.",
      "تقاس كثافة الحمض بالهيدروميتر، وتقل عن $1.20\\,\\text{g/cm}^3$ عند الحاجة للشحن."
    ],
    "teacherTipEn": "Recharging requires connecting the accumulator to an external DC source of voltage slightly higher than the battery (e.g. > 12V).",
    "teacherTipAr": "عند شحن المركم، يتم توصيله بمصدر تيار مستمر جهده أكبر قليلاً من جهد البطارية (أكبر من 12 فولت)."
  },
  {
    "id": "th_chem_ch4_se_05",
    "titleEn": "MoE Example 5: Lithium-Ion Battery Advantages and Chemistry",
    "titleAr": "مثال الوزارة ٥: التركيب والمميزات الكيميائية لبطارية أيون الليثيوم",
    "difficulty": "easy",
    "questionEn": "Why is lithium selected as the active material in modern rechargeable batteries for electric cars and laptops, and what is its standard cell voltage?",
    "questionAr": "علل: يعتبر الليثيوم الفلز المثالي المستخدم في بطاريات السيارات الكهربية والهواتف المحمولة الحديثة، وما هو جهد الخلية القياسي لها؟",
    "optionsEn": [
      "Because lithium is the lightest known metal and possesses the highest standard oxidation potential ($+3.045\\,\\text{V}$), producing a cell voltage of $3.0\\,\\text{V}$",
      "Because lithium is the heaviest transition metal and does not react with air, producing $1.5\\,\\text{V}$",
      "Because lithium is a liquid metal that flows easily between electrodes, producing $2.0\\,\\text{V}$",
      "Because lithium acts as both cathode and anode simultaneously without an electrolyte, producing $12.0\\,\\text{V}$"
    ],
    "optionsAr": [
      "لأنه أخف فلز معروف ويمتلك أعلى جهد تأكسد قياسي ($+3.045\\,\\text{V}$)، مما يعطي قوة دافعة كهربائية قدرها $3.0\\,\\text{V}$",
      "لأنه أثقل فلز انتقالي ولا يتفاعل مع الهواء",
      "لأنه فلز سائل يتدفق بسهولة بين الأقطاب",
      "لأنه يعمل كأنود وكاثود في نفس الوقت بدون إلكتروليت"
    ],
    "correctAnswer": "Because lithium is the lightest known metal and possesses the highest standard oxidation potential ($+3.045\\,\\text{V}$), producing a cell voltage of $3.0\\,\\text{V}$",
    "correctIndex": 0,
    "hintEn": "Li is at the very top of the electromotive series (E_ox = +3.045 V) and has lowest atomic weight (atomic mass = 7), providing maximum energy density.",
    "hintAr": "الليثيوم يتصدر متسلسلة الجهود الكهربية بأعلى جهد تأكسد قياسي ($+3.045\\,\\text{V}$) وأخف فلز معروف (كتلته الذرية 7)، مما يتيح تخزين كميات هائلة من الطاقة في حجم ووزن صغيرين.",
    "stepByStepSolutionEn": [
      "Lithium advantages: 1. Lightest metal ($Z = 3$, molar mass $6.94\\,\\text{g/mol}$); 2. Highest standard oxidation potential in the electromotive series ($+3.045\\,\\text{V}$).",
      "Anode: Lithium graphite ($\\text{LiC}_6$); Cathode: Lithium cobalt oxide ($\\text{LiCoO}_2$).",
      "Electrolyte: Non-aqueous anhydrous solution of lithium hexafluorophosphate ($\\text{LiPF}_6$).",
      "Standard EMF of lithium-ion cell is $3.0\\,\\text{V}$, yielding high energy density."
    ],
    "stepByStepSolutionAr": [
      "مميزات الليثيوم: ١. أخف فلز معروف، ٢. يتصدر متسلسلة الجهود بأعلى جهد تأكسد ($+3.045\\,\\text{V}$).",
      "الأنود: جرافيت الليثيوم ($\\text{LiC}_6$)؛ والكاثود: أكسيد الليثيوم كوبلت ($\\text{LiCoO}_2$).",
      "الإلكتروليت: محلول لا مائي من سداسي فلورو فوسفيد الليثيوم ($\\text{LiPF}_6$).",
      "القوة الدافعة الكهربية للخلية تبلغ $3.0\\,\\text{V}$ وتتميز بكثافة طاقة فائقة."
    ],
    "teacherTipEn": "The separator in a Li-ion battery is a microporous plastic sheet that insulates the electrodes while allowing Li+ ions to pass freely.",
    "teacherTipAr": "العازل في بطارية أيون الليثيوم شريحة بلاستيكية رقيقة جداً تعزل الأقطاب وتسمح فقط بمرور أيونات الليثيوم."
  },
  {
    "id": "th_chem_ch4_se_06",
    "titleEn": "MoE Example 6: Fuel Cell Chemistry and Characteristics",
    "titleAr": "مثال الوزارة ٦: خلية الوقود وتفاعلات الأكسدة والاختزال ومميزاتها",
    "difficulty": "medium",
    "questionEn": "In the hydrogen-oxygen fuel cell used in space shuttles, which electrolyte is utilized and what is the standard cell potential ($E_{\\text{cell}}$)?",
    "questionAr": "في خلية وقود الهيدروجين-أكسجين المستخدمة في مركبات الفضاء، ما الإلكتروليت المستخدم وما القيمة القياسية لجهد الخلية ($E_{\\text{cell}}$)؟",
    "optionsEn": [
      "Hot concentrated aqueous potassium hydroxide ($\\text{KOH}$) electrolyte, and $E_{\\text{cell}} = 1.23\\,\\text{V}$",
      "Dilute sulfuric acid electrolyte, and $E_{\\text{cell}} = 2.05\\,\\text{V}$",
      "Solid sodium chloride, and $E_{\\text{cell}} = 1.10\\,\\text{V}$",
      "Liquid mercury, and $E_{\\text{cell}} = 1.35\\,\\text{V}$"
    ],
    "optionsAr": [
      "محلول مائي ساخن ومركز من هيدروكسيد البوتاسيوم ($\\text{KOH}$)، وجهد الخلية $E_{\\text{cell}} = 1.23\\,\\text{V}$",
      "حمض كبريتيك مخفف، وجهد الخلية $2.05\\,\\text{V}$",
      "كلوريد الصوديوم الصلب، وجهد الخلية $1.10\\,\\text{V}$",
      "زئبق سائل، وجهد الخلية $1.35\\,\\text{V}$"
    ],
    "correctAnswer": "Hot concentrated aqueous potassium hydroxide ($\\text{KOH}$) electrolyte, and $E_{\\text{cell}} = 1.23\\,\\text{V}$",
    "correctIndex": 0,
    "hintEn": "Overall reaction: 2 H2 + O2 -> 2 H2O. E_cell = E_ox(H2) + E_red(O2) = 0.83 + 0.40 = 1.23 V.",
    "hintAr": "التفاعل الكلي: $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$. جهد أكسدة الهيدروجين في الوسط القلوي $0.83\\,\\text{V}$ واختزال الأكسجين $0.40\\,\\text{V}$، وجهد الخلية $= 1.23\\,\\text{V}$.",
    "stepByStepSolutionEn": [
      "At Anode: Oxidation of hydrogen gas in alkaline medium:\n$2\\text{H}_2 + 4\\text{OH}^- \\to 4\\text{H}_2\\text{O} + 4e^- \\quad (E_{\\text{ox}} = +0.83\\,\\text{V})$.",
      "At Cathode: Reduction of oxygen gas:\n$\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^- \\quad (E_{\\text{red}} = +0.40\\,\\text{V})$.",
      "Overall cell reaction: $2\\text{H}_2(g) + \\text{O}_2(g) \\to 2\\text{H}_2\\text{O}(l)$.",
      "Cell EMF: $E_{\\text{cell}} = 0.83 + 0.40 = 1.23\\,\\text{V}$.",
      "The fuel cell does not store energy; it requires continuous supply of fuel and provides drinking water for astronauts."
    ],
    "stepByStepSolutionAr": [
      "عند الأنود: أكسدة الهيدروجين في الوسط القلوي: $2\\text{H}_2 + 4\\text{OH}^- \\to 4\\text{H}_2\\text{O} + 4e^- \\quad (E_{\\text{ox}} = +0.83\\,\\text{V})$.",
      "عند الكاثود: اختزال الأكسجين: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^- \\quad (E_{\\text{red}} = +0.40\\,\\text{V})$.",
      "التفاعل الكلي: $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$.",
      "جهد الخلية: $E_{\\text{cell}} = 0.83 + 0.40 = 1.23\\,\\text{V}$.",
      "تتميز بعدم استهلاك مكوناتها ولا تخزن طاقة وتعمل عند درجات حرارة عالية يتكثف ماؤها ويستخدم للشرب."
    ],
    "teacherTipEn": "Unlike batteries, a fuel cell never runs down or needs recharging as long as fuel is supplied.",
    "teacherTipAr": "خلية الوقود لا تستهلك ولا تشحن لأنها تزود بالوقود باستمرار من مصدر خارجي."
  },
  {
    "id": "th_chem_ch4_se_07",
    "titleEn": "MoE Example 7: Mechanism of Iron Rusting and Sacrificial Anode",
    "titleAr": "مثال الوزارة ٧: ميكانيكية صدأ الحديد والحماية بالقطب المضحي",
    "difficulty": "medium",
    "questionEn": "In the electrochemical mechanism of iron rusting, what represents the anode, the cathode, and the composition of final rust?",
    "questionAr": "في الميكانيكية الكهروكيميائية لتآكل وصدأ الحديد، ماذا يمثل كل من الأنود والكاثود وما التركيب الكيميائي للصدأ النهائي؟",
    "optionsEn": [
      "Anode: Iron atoms ($\\text{Fe}$); Cathode: Carbon impurities where dissolved oxygen is reduced; Rust: Hydrated iron(III) oxide ($\\text{Fe(OH)}_3$)",
      "Anode: Oxygen gas; Cathode: Iron atoms; Rust: Iron(II) oxide ($\\text{FeO}$)",
      "Anode: Carbon impurities; Cathode: Iron atoms; Rust: Magnetite ($\\text{Fe}_3\\text{O}_4$)",
      "Anode: Water; Cathode: Oxygen; Rust: Pure iron carbonate"
    ],
    "optionsAr": [
      "الأنود: ذرات الحديد ($\\text{Fe}$)؛ والكاثود: شوائب الكربون وتختزل عندها جزيئات الأكسجين الذائب؛ والصدأ: هيدروكسيد الحديد III المتهدرت ($\\text{Fe(OH)}_3$)",
      "الأنود: الأكسجين؛ والكاثود: الحديد؛ والصدأ: أكسيد الحديد II",
      "الأنود: الكربون؛ والكاثود: الحديد؛ والصدأ: أكسيد الحديد المغناطيسي",
      "الأنود: الماء؛ والكاثود: الأكسجين؛ والصدأ: كربونات الحديد"
    ],
    "correctAnswer": "Anode: Iron atoms ($\\text{Fe}$); Cathode: Carbon impurities where dissolved oxygen is reduced; Rust: Hydrated iron(III) oxide ($\\text{Fe(OH)}_3$)",
    "correctIndex": 0,
    "hintEn": "Iron oxidizes: 2 Fe -> 2 Fe2+ + 4e- (anode). Oxygen reduces: O2 + 2 H2O + 4e- -> 4 OH- (cathode). Overall rust is Fe(OH)3.",
    "hintAr": "الحديد يعمل كأنود يتأكسد ويفقد إلكترونات، وشوائب الكربون تمثل الكاثود حيث يختزل الأكسجين الذائب، والصدأ النهائي هو هيدروكسيد الحديد III $\\text{Fe(OH)}_3$.",
    "stepByStepSolutionEn": [
      "1. Anode reaction: Iron atoms oxidize into $\\text{Fe}^{2+}$ ions:\n$2\\text{Fe}(s) \\to 2\\text{Fe}^{2+}(aq) + 4e^-$.",
      "2. Cathode reaction: Dissolved oxygen in water is reduced at carbon impurities:\n$\\text{O}_2(g) + 2\\text{H}_2\\text{O}(l) + 4e^- \\to 4\\text{OH}^-(aq)$.",
      "3. Precipitation: $\\text{Fe}^{2+} + 2\\text{OH}^- \\to \\text{Fe(OH)}_2\\downarrow$.",
      "4. Oxidation to rust: $2\\text{Fe(OH)}_2 + \\frac{1}{2}\\text{O}_2 + \\text{H}_2\\text{O} \\to 2\\text{Fe(OH)}_3\\downarrow$ (reddish-brown rust)."
    ],
    "stepByStepSolutionAr": [
      "١. تفاعل الأنود: تتأكسد ذرات الحديد: $2\\text{Fe} \\to 2\\text{Fe}^{2+} + 4e^-$.",
      "٢. تفاعل الكاثود: يختزل الأكسجين الذائب في الماء على شوائب الكربون: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$.",
      "٣. يتكون هيدروكسيد الحديد II: $\\text{Fe}^{2+} + 2\\text{OH}^- \\to \\text{Fe(OH)}_2$.",
      "٤. يتأكسد بالأكسجين الذائب إلى هيدروكسيد الحديد III البني المحمر (الصدأ): $2\\text{Fe(OH)}_2 + \\frac{1}{2}\\text{O}_2 + \\text{H}_2\\text{O} \\to 2\\text{Fe(OH)}_3$."
    ],
    "teacherTipEn": "Sacrificial anode (cathodic protection): connecting iron pipelines or ship hulls to magnesium or zinc blocks, which corrode preferentially.",
    "teacherTipAr": "القطب المضحي: توصيل هياكل السفن وأنابيب البترول بكتل من الماغنسيوم الأكثر نشاطاً ليتآكل هو مفضلاً ويحمي الحديد."
  },
  {
    "id": "th_chem_ch4_se_08",
    "titleEn": "MoE Example 8: Industrial Purification of Blister Copper",
    "titleAr": "مثال الوزارة ٨: التنقية الكهربية للنحاس غير النقي وسقوط الذهب والفضة",
    "difficulty": "exam_standard",
    "questionEn": "During the electrolytic refining of impure blister copper ($99\\%$ purity) using an aqueous $\\text{CuSO}_4$ bath, what happens to the noble metal impurities (silver $\\text{Ag}$ and gold $\\text{Au}$)?",
    "questionAr": "أثناء التنقية الكهربية للنحاس غير النقي (درجة نقائه $99\\%$) في محلول كبريتات النحاس II، ماذا يحدث لشوائب الفلزات الثمينة (الفضة $\\text{Ag}$ والذهب $\\text{Au}$)؟",
    "optionsEn": [
      "They resist oxidation due to their lower oxidation potentials compared to copper and fall unreacted beneath the anode as anode slime",
      "They oxidize and deposit together with pure copper on the cathode",
      "They dissolve into the electrolyte and remain permanently as free cations",
      "They evaporate as toxic noble vapors"
    ],
    "optionsAr": [
      "لا تتأكسد لصغر جهد تأكسدها مقارنة بالنحاس وتتساقط أسفل الأنود على هيئة طين الأنود كراسب ثمين",
      "تتأكسد وتترسب مع النحاس النقي على الكاثود",
      "تذوب في المحلول وتظل ذائبة ككاتيونات حرة",
      "تتبخر على هيئة غازات سامة"
    ],
    "correctAnswer": "They resist oxidation due to their lower oxidation potentials compared to copper and fall unreacted beneath the anode as anode slime",
    "correctIndex": 0,
    "hintEn": "Ag and Au have lower oxidation potentials (higher reduction potentials) than Cu, so they cannot oxidize at the operating anode voltage and fall as sludge.",
    "hintAr": "الفضة والذهب تلي النحاس في المتسلسلة الكهروكيميائية وجهود تأكسدها صغيرة جداً، فلا تتأكسد عند جهد الأنود وتتساقط في قاع الخلية أسفل الأنود ويتم جمعها.",
    "stepByStepSolutionEn": [
      "In the refining cell:\n- Anode: Impure copper plate containing $\\text{Fe, Zn, Cu, Ag, Au}$.",
      "- Cathode: Thin sheet of pure copper.",
      "- Electrolyte: Acidified aqueous $\\text{CuSO}_4$.",
      "Active impurities ($\text{Fe, Zn}$) have higher oxidation potentials than copper, so they oxidize into solution ($\text{Fe}^{2+}, \text{Zn}^{2+}$) but do not deposit at cathode.",
      "Copper oxidizes at anode ($\text{Cu} \to \text{Cu}^{2+} + 2e^-$) and deposits selectively at cathode ($\text{Cu}^{2+} + 2e^- \to \text{Cu}$).",
      "Noble impurities ($\text{Ag, Au}$) have much lower oxidation potentials than copper, so they do NOT oxidize and drop to the bottom as valuable anode sludge."
    ],
    "stepByStepSolutionAr": [
      "في خلية تنقية النحاس:\n- الأنود: لوح النحاس غير النقي المحتوي على شوائب (حديد، خارصين، فضة، ذهب).\n- الكاثود: سلك أو لوح رقيق من النحاس النقي.\n- الإلكتروليت: محلول كبريتات النحاس II المحمض.",
      "الشوائب سهلة الأكسدة (الحديد والخارصين) تتأكسد وتذوب في المحلول ولكنها لا تترسب على الكاثود لصغر جهود اختزالها.",
      "النحاس يتأكسد عند الأنود ويختزل عند الكاثود وتصل نقاوته إلى $99.95\\%$.",
      "الشوائب صعبة الأكسدة (الفضة والذهب) جهود تأكسدها أصغر من النحاس فلا تتأكسد وتتساقط أسفل الأنود وتفصل بسهولة."
    ],
    "teacherTipEn": "Electrolytic refining of copper elevates purity from 99% to 99.95%, making it suitable for electrical wiring.",
    "teacherTipAr": "ترتفع نقاوة النحاس بالتنقية الكهربية من 99% إلى 99.95% مما يجعله صالحاً لصناعة الأسلاك الكهربية بكفاءة."
  },
  {
    "id": "th_chem_ch4_se_09",
    "titleEn": "MoE Example 9: Extraction of Aluminium from Bauxite via Electrolysis",
    "titleAr": "مثال الوزارة ٩: استخلاص الألومنيوم كهربياً من خام البوكسيت والكريوليت",
    "difficulty": "exam_standard",
    "questionEn": "In the Hall-Héroult industrial electrolysis cell for aluminium extraction from molten bauxite ($\\text{Al}_2\\text{O}_3$), what is the role of cryolite ($\\text{Na}_3\\text{AlF}_6$) and fluorspar ($\\text{CaF}_2$), and what are the anode rods made of?",
    "questionAr": "في خلية الاستخلاص الكهربي للألومنيوم من مصهور البوكسيت ($\\text{Al}_2\\text{O}_3$)، ما الدور الذي يلعبه الكريوليت والفلوئورسبار، ومم تصنع أقطاب الأنود؟",
    "optionsEn": [
      "Cryolite acts as a solvent for bauxite; fluorspar lowers the melting point from $2045^\\circ\\text{C}$ to $950^\\circ\\text{C}$; anodes are carbon (graphite) cylinders that must be periodically replaced",
      "Cryolite is the cathode; fluorspar produces oxygen gas; anodes are copper wires",
      "Cryolite precipitates iron impurities; fluorspar increases viscosity; anodes are platinum",
      "Both cryolite and fluorspar generate electricity; anodes are made of molten aluminium"
    ],
    "optionsAr": [
      "يعمل الكريوليت كمذيب للبوكسيت؛ ويخفض الفلوئورسبار درجة انصهار الخليط من $2045^\\circ\\text{C}$ إلى $950^\\circ\\text{C}$؛ والأنود أسطوانات كربونية تستهلك دورياً",
      "الكريوليت هو الكاثود؛ والفلوئورسبار ينتج غاز الأكسجين؛ والأنود أسلاك نحاسية",
      "الكريوليت يرسب شوائب الحديد؛ والفلوئورسبار يزيد اللزوجة؛ والأنود بلاتين",
      "كلاهما يولد تياراً كهربياً؛ والأنود مصنوع من مصهور الألومنيوم"
    ],
    "correctAnswer": "Cryolite acts as a solvent for bauxite; fluorspar lowers the melting point from $2045^\\circ\\text{C}$ to $950^\\circ\\text{C}$; anodes are carbon (graphite) cylinders that must be periodically replaced",
    "correctIndex": 0,
    "hintEn": "Anode carbon rods react with evolved O2 gas at high temperatures to form CO and CO2, causing them to erode and requiring periodic replacement.",
    "hintAr": "تتآكل أقطاب الكربون (الأنود) نتيجة تفاعلها مع غاز الأكسجين المتصاعد مكونة غازي أول وثاني أكسيد الكربون، لذا يلزم استبدالها من حين لآخر.",
    "stepByStepSolutionEn": [
      "Components of the electrolyte bath:\n- Bauxite: $\\text{Al}_2\\text{O}_3$ (source of aluminium).\n- Cryolite: $\\text{Na}_3\\text{AlF}_6$ (solvent for bauxite).\n- Fluorspar: $\\text{CaF}_2$ (flux that lowers the mixture melting point from $2045^\\circ\\text{C}$ to $950^\\circ\\text{C}$).\n*(Modern mixtures use fluorides of $\\text{Al, Na, Ca}$ to lower density, allowing molten aluminium to sink)*.",
      "Cathode: Carbon lining of the bottom where molten aluminium collects: $\\text{Al}^{3+} + 3e^- \\to \\text{Al}(l)$.",
      "Anode: Graphite rods where oxygen evolves: $2\\text{O}^{2-} \\to \\text{O}_2 + 4e^-$.",
      "Carbon anodes burn in evolved $\\text{O}_2$: $C + \\text{O}_2 \\to \\text{CO}_2$ and $2C + \\text{O}_2 \\to 2\\text{CO}$, requiring periodic replacement."
    ],
    "stepByStepSolutionAr": [
      "مكونات المصهور:\n- البوكسيت: $\\text{Al}_2\\text{O}_3$ (المادة الخام المستخلص منها الألومنيوم).\n- الكريوليت: $\\text{Na}_3\\text{AlF}_6$ (مذيب للبوكسيت).\n- الفلوئورسبار: $\\text{CaF}_2$ (مادة صاهرة تخفض درجة الانصهار من $2045^\\circ\\text{C}$ إلى $950^\\circ\\text{C}$).\n*(حديثاً يستعاض بخليط أملاح فلوريدات الألومنيوم والصوديوم والكالسيوم لتقليل كثافة المصهور فيسهل هبوط الألومنيوم لأسفل)*.",
      "الكاثود: جدار وقاع الخلية المبطن بالجرافيت حيث يختزل الألومنيوم: $\\text{Al}^{3+} + 3e^- \\to \\text{Al}$.",
      "الأنود: أسطوانات من الجرافيت تتصاعد عندها ذرات الأكسجين وتتآكل بتفاعلها مع الأكسجين مكونة $\\text{CO}$ و $\\text{CO}_2$ وتستبدل دورياً."
    ],
    "teacherTipEn": "Modern cells use a mixture of Al, Na, and Ca fluorides because it has a lower melting point and lower density than molten aluminium, allowing aluminium to easily sink and be tapped off.",
    "teacherTipAr": "حديثاً يفضل خليط فلوريدات الألومنيوم والصوديوم والكالسيوم لأن كثافته أقل من كثافة مصهور الألومنيوم فيترسب الألومنيوم في القاع ويسهل سحبه."
  },
  {
    "id": "th_chem_ch4_se_10",
    "titleEn": "MoE Example 10: Faraday Law with Multiple Electrolytic Cells in Series",
    "titleAr": "مثال الوزارة ١٠: قانون فاراداي الثاني لعدة خلايا إلكتروليتية متصلة على التوالي",
    "difficulty": "hots",
    "questionEn": "The same electric current was passed through two electrolytic cells connected in series. The first cell contained copper(II) sulfate ($\\text{CuSO}_4$) and the second cell contained silver nitrate ($\\text{AgNO}_3$). If $0.635\\,\\text{g}$ of copper was deposited, what mass of silver was deposited on the cathode of the second cell? $(\\text{Cu} = 63.5, \\, \\text{Ag} = 108)$",
    "questionAr": "مُر نفس التيار الكهربي في خليتين إلكتروليتيتين متصلتين على التوالي؛ الأولى تحتوي على كبريتات النحاس II ($\\text{CuSO}_4$)، والثانية تحتوي على نترات الفضة ($\\text{AgNO}_3$). فإذا ترسب $0.635\\,\\text{g}$ من النحاس في الخلية الأولى، فما كتلة الفضة المترسبة في الخلية الثانية؟ $(\\text{Cu} = 63.5, \\, \\text{Ag} = 108)$",
    "optionsEn": [
      "$2.16\\,\\text{g}$",
      "$1.08\\,\\text{g}$",
      "$4.32\\,\\text{g}$",
      "$0.54\\,\\text{g}$"
    ],
    "optionsAr": [
      "$2.16\\,\\text{g}$",
      "$1.08\\,\\text{g}$",
      "$4.32\\,\\text{g}$",
      "$0.54\\,\\text{g}$"
    ],
    "correctAnswer": "$2.16\\,\\text{g}$",
    "correctIndex": 0,
    "hintEn": "Faraday Second Law: (mass Cu / Eq. Wt. Cu) = (mass Ag / Eq. Wt. Ag). Eq. Wt. Cu = 63.5 / 2 = 31.75 g. Eq. Wt. Ag = 108 / 1 = 108 g.",
    "hintAr": "قانون فاراداي الثاني: $\\frac{\\text{كتلة النحاس}}{\\text{الكتلة المكافئة للنحاس}} = \\frac{\\text{كتلة الفضة}}{\\text{الكتلة المكافئة للفضة}}$. المكافئ للنحاس $= 31.75\\,\\text{g}$، والمكافئ للفضة $= 108\\,\\text{g}$.",
    "stepByStepSolutionEn": [
      "1. Calculate gram equivalent weights:\n- $\\text{Eq. Wt.}(\\text{Cu}) = \\frac{63.5}{2} = 31.75\\,\\text{g}$.\n- $\\text{Eq. Wt.}(\\text{Ag}) = \\frac{108}{1} = 108\\,\\text{g}$.",
      "2. Apply Faraday's Second Law for cells in series:\n$\\frac{m(\\text{Cu})}{\\text{Eq. Wt.}(\\text{Cu})} = \\frac{m(\\text{Ag})}{\\text{Eq. Wt.}(\\text{Ag})}$.",
      "3. Substitute known values:\n$\\frac{0.635}{31.75} = \\frac{m(\\text{Ag})}{108}$.",
      "4. Calculate moles of electrons: $\\frac{0.635}{31.75} = 0.02\\,\\text{F}$.",
      "5. Solve for mass of silver: $m(\\text{Ag}) = 0.02 \\times 108 = 2.16\\,\\text{g}$."
    ],
    "stepByStepSolutionAr": [
      "١. حساب الكتلة المكافئة الجرامية لكل عنصر:\n- الكتلة المكافئة للنحاس $= \\frac{63.5}{2} = 31.75\\,\\text{g}$.\n- الكتلة المكافئة للفضة $= \\frac{108}{1} = 108\\,\\text{g}$.",
      "٢. تطبيق قانون فاراداي الثاني:\n$\\frac{\\text{كتلة النحاس}}{\\text{مكافئ النحاس}} = \\frac{\\text{كتلة الفضة}}{\\text{مكافئ الفضة}}$.",
      "٣. التعويض بالقيم:\n$\\frac{0.635}{31.75} = \\frac{\\text{كتلة الفضة}}{108}$.",
      "٤. $\\frac{0.635}{31.75} = 0.02\\,\\text{فاراداي}$.",
      "٥. كتلة الفضة المترسبة $= 0.02 \\times 108 = 2.16\\,\\text{g}$."
    ],
    "teacherTipEn": "When cells are connected in series, the exact same quantity of electricity passes through all of them.",
    "teacherTipAr": "عند توصيل الخلايا على التوالي، تمر نفس كمية الكهرباء بالضبط في جميع الخلايا وتتناسب كتل المواد المترسبة طردياً مع كتلها المكافئة."
  }
];

export const thChemCh4Exercises: SolvedProblem[] = [
  {
    "id": "th_chem_ch4_ex_01",
    "titleEn": "Exercise 1: Standard Hydrogen Electrode (SHE)",
    "titleAr": "تمرين ١: قطب الهيدروجين القياسي وشروطه وجهده المرجعي",
    "difficulty": "easy",
    "questionEn": "Under which standard thermodynamic conditions is the potential of the Standard Hydrogen Electrode (SHE) equal to exactly $0.00\\,\\text{V}$?",
    "questionAr": "تحت أي شروط قياسية تكون القيمة العددية لجهد قطب الهيدروجين القياسي مساوية تماماً للصفر المئوي ($0.00\\,\\text{V}$)؟",
    "optionsEn": [
      "Pressure of $\\text{H}_2$ gas is $1\\,\\text{atm}$ and concentration of hydronium ions in solution is $1.0\\,\\text{mol/L}$ at $25^\\circ\\text{C}$",
      "Pressure of $\\text{H}_2$ is $10\\,\\text{atm}$ and pure water is used as electrolyte",
      "When immersed in boiling concentrated sulfuric acid",
      "Only when paired with a zinc electrode"
    ],
    "optionsAr": [
      "ضغط غاز الهيدروجين يساوي $1\\,\\text{atm}$ وتركيز أيونات الهيدرونيوم في المحلول الحمضي $1.0\\,\\text{mol/L}$ عند $25^\\circ\\text{C}$",
      "ضغط غاز الهيدروجين $10\\,\\text{atm}$ في ماء نقي",
      "عند وضعه في حمض كبريتيك مركز مغلي",
      "فقط عندما يتصل بقطب خارصين"
    ],
    "correctAnswer": "Pressure of $\\text{H}_2$ gas is $1\\,\\text{atm}$ and concentration of hydronium ions in solution is $1.0\\,\\text{mol/L}$ at $25^\\circ\\text{C}$",
    "correctIndex": 0,
    "hintEn": "Standard conditions: P(H2) = 1 atm, [H+] = 1 M (pH = 0), T = 25 C. Platinum black absorbs hydrogen gas.",
    "hintAr": "الشروط القياسية: ضغط الغاز 1 ضغط جوي، وتركيز الحمض 1 مولاري، ودرجة الحرارة $25^\\circ\\text{C}$، وصفيحة البلاتين المغطاة بالبلاتين الأسود المجزأ.",
    "stepByStepSolutionEn": [
      "Standard conditions: P(H2) = 1 atm, [H+] = 1 M (pH = 0), T = 25 C. Platinum black absorbs hydrogen gas.",
      "Therefore, the correct answer is: Pressure of $\\text{H}_2$ gas is $1\\,\\text{atm}$ and concentration of hydronium ions in solution is $1.0\\,\\text{mol/L}$ at $25^\\circ\\text{C}$"
    ],
    "stepByStepSolutionAr": [
      "الشروط القياسية: ضغط الغاز 1 ضغط جوي، وتركيز الحمض 1 مولاري، ودرجة الحرارة $25^\\circ\\text{C}$، وصفيحة البلاتين المغطاة بالبلاتين الأسود المجزأ.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: ضغط غاز الهيدروجين يساوي $1\\,\\text{atm}$ وتركيز أيونات الهيدرونيوم في المحلول الحمضي $1.0\\,\\text{mol/L}$ عند $25^\\circ\\text{C}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_02",
    "titleEn": "Exercise 2: Salt Bridge Role in Daniell Galvanic Cell",
    "titleAr": "تمرين ٢: وظيفة القنطرة الملحية في خلية دانيال الجلفانية",
    "difficulty": "easy",
    "questionEn": "What is the primary function of the salt bridge containing sodium sulfate solution ($\\text{Na}_2\\text{SO}_4$) in the Daniell cell?",
    "questionAr": "ما هي الوظيفة الأساسية للقنطرة الملحية المحتوية على محلول كبريتات الصوديوم ($\\text{Na}_2\\text{SO}_4$) في خلية دانيال؟",
    "optionsEn": [
      "Connects the two half-cell solutions indirectly and neutralizes excess positive and negative ions, preventing polarization",
      "Increases the cell potential to $10\\,\\text{V}$",
      "Precipitates copper ions at the bottom of the beaker",
      "Directs electrons through the liquid solution rather than the external wire"
    ],
    "optionsAr": [
      "تصل بين محلولي نصفي الخلية بطريقة غير مباشرة وتعادل الشحنات الموجبة والسالبة الزائدة وتمنع استقطاب الخلية",
      "ترفع جهد الخلية إلى $10\\,\\text{V}$",
      "ترسب أيونات النحاس في قاع الكأس",
      "تمرر الإلكترونات عبر السائل بدلاً من السلك الخارجي"
    ],
    "correctAnswer": "Connects the two half-cell solutions indirectly and neutralizes excess positive and negative ions, preventing polarization",
    "correctIndex": 0,
    "hintEn": "Sulfate anions (SO4(2-)) migrate toward the anode (Zn half-cell) to neutralize excess Zn2+ ions, while Na+ cations migrate toward the cathode (Cu half-cell).",
    "hintAr": "تتحرك أنيونات الكبريتات السالبة نحو نصف خلية الأنود لمعادلة كاتيونات الخارصين الزائدة، وتتحرك كاتيونات الصوديوم نحو الكاثود لمعادلة نقص كاتيونات النحاس.",
    "stepByStepSolutionEn": [
      "Sulfate anions (SO4(2-)) migrate toward the anode (Zn half-cell) to neutralize excess Zn2+ ions, while Na+ cations migrate toward the cathode (Cu half-cell).",
      "Therefore, the correct answer is: Connects the two half-cell solutions indirectly and neutralizes excess positive and negative ions, preventing polarization"
    ],
    "stepByStepSolutionAr": [
      "تتحرك أنيونات الكبريتات السالبة نحو نصف خلية الأنود لمعادلة كاتيونات الخارصين الزائدة، وتتحرك كاتيونات الصوديوم نحو الكاثود لمعادلة نقص كاتيونات النحاس.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تصل بين محلولي نصفي الخلية بطريقة غير مباشرة وتعادل الشحنات الموجبة والسالبة الزائدة وتمنع استقطاب الخلية"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_03",
    "titleEn": "Exercise 3: Mercury Button Cell Chemistry",
    "titleAr": "تمرين ٣: خلية الزئبق وقوتها الدافعة الكهربية والتخلص الآمن منها",
    "difficulty": "easy",
    "questionEn": "What is the overall chemical reaction and the electromotive force ($E_{\\text{cell}}$) of the primary mercury button cell?",
    "questionAr": "ما هو التفاعل الكلي والقوة الدافعة الكهربية ($E_{\\text{cell}}$) لخلية الزئبق الأولية الصغيرة؟",
    "optionsEn": [
      "$\\text{Zn} + \\text{HgO} \\to \\text{ZnO} + \\text{Hg}, \\quad E_{\\text{cell}} = 1.35\\,\\text{V}$",
      "$\\text{Pb} + \\text{PbO}_2 \\to 2\\text{PbSO}_4, \\quad E_{\\text{cell}} = 2.05\\,\\text{V}$",
      "$\\text{Zn} + \\text{Cu}^{2+} \\to \\text{Zn}^{2+} + \\text{Cu}, \\quad E_{\\text{cell}} = 1.10\\,\\text{V}$",
      "$2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}, \\quad E_{\\text{cell}} = 1.23\\,\\text{V}$"
    ],
    "optionsAr": [
      "$\\text{Zn} + \\text{HgO} \\to \\text{ZnO} + \\text{Hg}, \\quad E_{\\text{cell}} = 1.35\\,\\text{V}$",
      "$\\text{Pb} + \\text{PbO}_2 \\to 2\\text{PbSO}_4, \\quad E_{\\text{cell}} = 2.05\\,\\text{V}$",
      "$\\text{Zn} + \\text{Cu}^{2+} \\to \\text{Zn}^{2+} + \\text{Cu}, \\quad E_{\\text{cell}} = 1.10\\,\\text{V}$",
      "$2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}, \\quad E_{\\text{cell}} = 1.23\\,\\text{V}$"
    ],
    "correctAnswer": "$\\text{Zn} + \\text{HgO} \\to \\text{ZnO} + \\text{Hg}, \\quad E_{\\text{cell}} = 1.35\\,\\text{V}$",
    "correctIndex": 0,
    "hintEn": "Anode is Zn; cathode is HgO; electrolyte is KOH or NaOH. Mercury produced is toxic and must be safely recycled.",
    "hintAr": "أنود خلية الزئبق خارصين، والكاثود أكسيد الزئبق، والإلكتروليت KOH، وتنتج $1.35\\,\\text{V}$ والزئبق الناتج مادة سامة يجب التخلص منها بطريقة آمنة.",
    "stepByStepSolutionEn": [
      "Anode is Zn; cathode is HgO; electrolyte is KOH or NaOH. Mercury produced is toxic and must be safely recycled.",
      "Therefore, the correct answer is: $\\text{Zn} + \\text{HgO} \\to \\text{ZnO} + \\text{Hg}, \\quad E_{\\text{cell}} = 1.35\\,\\text{V}$"
    ],
    "stepByStepSolutionAr": [
      "أنود خلية الزئبق خارصين، والكاثود أكسيد الزئبق، والإلكتروليت KOH، وتنتج $1.35\\,\\text{V}$ والزئبق الناتج مادة سامة يجب التخلص منها بطريقة آمنة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $\\text{Zn} + \\text{HgO} \\to \\text{ZnO} + \\text{Hg}, \\quad E_{\\text{cell}} = 1.35\\,\\text{V}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_04",
    "titleEn": "Exercise 4: Galvanic Protection: Cathodic vs Anodic Coating",
    "titleAr": "تمرين ٤: مقارنة الغطاء الأنودي والغطاء الكاثودي لحماية الحديد من التآكل",
    "difficulty": "medium",
    "questionEn": "Why is galvanizing iron with zinc (anodic coating) much safer and more effective for preventing corrosion than tin plating (cathodic coating)?",
    "questionAr": "علل: يعتبر طلاء الحديد بالخارصين (الغطاء الأنودي) أفضل وأكثر أماناً لحماية الحديد من التآكل مقارنة بطلائه بالقصدير (الغطاء الكاثودي)؟",
    "optionsEn": [
      "Because zinc is more active than iron, so if the coating is scratched, zinc corrodes first as a sacrificial anode, whereas in tin coating iron corrodes faster",
      "Because tin corrodes instantly upon contact with air",
      "Because zinc is a precious noble metal that cannot oxidize",
      "Because tin forms a local cell that accelerates zinc dissolution"
    ],
    "optionsAr": [
      "لأن الخارصين أكثر نشاطاً من الحديد ويسبقه في متسلسلة الجهود؛ فعند حدوث خدش يتأكسد الخارصين أولاً كقطب مضحي، بينما في الغطاء الكاثودي يتآكل الحديد بشكل أسرع",
      "لأن القصدير يتآكل فوراً بمجرد ملامسته للهواء",
      "لأن الخارصين فلز نبيل غير قابل للتأكسد",
      "لأن القصدير يكون خلية جلفانية تسرع ذوبان الخارصين"
    ],
    "correctAnswer": "Because zinc is more active than iron, so if the coating is scratched, zinc corrodes first as a sacrificial anode, whereas in tin coating iron corrodes faster",
    "correctIndex": 0,
    "hintEn": "In anodic coating (Zn on Fe): Zn has higher E_ox, so Zn corrodes first. In cathodic coating (Sn on Fe): Fe has higher E_ox than Sn, so scratching causes iron to corrode much faster.",
    "hintAr": "في الغطاء الأنودي يسبق الخارصين الحديد في المتسلسلة فيعمل كأنود ويتآكل أولاً لحماية الحديد؛ أما القصدير فيلي الحديد وعند الخدش يكون الحديد أنوداً ويتآكل بمعدل أسرع بكثير.",
    "stepByStepSolutionEn": [
      "In anodic coating (Zn on Fe): Zn has higher E_ox, so Zn corrodes first. In cathodic coating (Sn on Fe): Fe has higher E_ox than Sn, so scratching causes iron to corrode much faster.",
      "Therefore, the correct answer is: Because zinc is more active than iron, so if the coating is scratched, zinc corrodes first as a sacrificial anode, whereas in tin coating iron corrodes faster"
    ],
    "stepByStepSolutionAr": [
      "في الغطاء الأنودي يسبق الخارصين الحديد في المتسلسلة فيعمل كأنود ويتآكل أولاً لحماية الحديد؛ أما القصدير فيلي الحديد وعند الخدش يكون الحديد أنوداً ويتآكل بمعدل أسرع بكثير.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن الخارصين أكثر نشاطاً من الحديد ويسبقه في متسلسلة الجهود؛ فعند حدوث خدش يتأكسد الخارصين أولاً كقطب مضحي، بينما في الغطاء الكاثودي يتآكل الحديد بشكل أسرع"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_05",
    "titleEn": "Exercise 5: Time Required for Electrodeposition",
    "titleAr": "تمرين ٥: حساب الزمن اللازم لترسيب كتلة معينة من الفضة",
    "difficulty": "medium",
    "questionEn": "How many seconds are required for a steady current of $5.0\\,\\text{A}$ to deposit $10.8\\,\\text{g}$ of silver from a silver nitrate solution? $(\\text{Ag} = 108, \\, 1\\,\\text{F} = 96,500\\,\\text{C})$",
    "questionAr": "احسب الزمن بالثواني اللازم لمرور تيار كهربي شدته $5.0\\,\\text{A}$ لترسيب $10.8\\,\\text{g}$ من الفضة من محلول نترات الفضة. $(\\text{Ag} = 108, \\, 1\\,\\text{F} = 96,500\\,\\text{C})$",
    "optionsEn": [
      "$1930\\,\\text{s}$",
      "$965\\,\\text{s}$",
      "$3860\\,\\text{s}$",
      "$482.5\\,\\text{s}$"
    ],
    "optionsAr": [
      "$1930\\,\\text{s}$",
      "$965\\,\\text{s}$",
      "$3860\\,\\text{s}$",
      "$482.5\\,\\text{s}$"
    ],
    "correctAnswer": "$1930\\,\\text{s}$",
    "correctIndex": 0,
    "hintEn": "10.8 g Ag = 0.1 mol Ag = 0.1 Faraday = 9650 Coulombs. Time t = Q / I = 9650 / 5.0 = 1930 seconds.",
    "hintAr": "$10.8\\,\\text{g}$ فضة تعادل 0.1 مول ذرة = 0.1 فاراداي = $9650\\,\\text{كولوم}$. الزمن $t = Q \\div I = 9650 \\div 5 = 1930\\,\\text{ثانية}$.",
    "stepByStepSolutionEn": [
      "10.8 g Ag = 0.1 mol Ag = 0.1 Faraday = 9650 Coulombs. Time t = Q / I = 9650 / 5.0 = 1930 seconds.",
      "Therefore, the correct answer is: $1930\\,\\text{s}$"
    ],
    "stepByStepSolutionAr": [
      "$10.8\\,\\text{g}$ فضة تعادل 0.1 مول ذرة = 0.1 فاراداي = $9650\\,\\text{كولوم}$. الزمن $t = Q \\div I = 9650 \\div 5 = 1930\\,\\text{ثانية}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $1930\\,\\text{s}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_06",
    "titleEn": "Exercise 6: Electroplating Mechanism and Setup",
    "titleAr": "تمرين ٦: شروط وتوصيل الأقطاب في عملية الطلاء بالكهرباء",
    "difficulty": "easy",
    "questionEn": "To electroplate an iron spoon with a decorative layer of silver, how should the electrical circuit be set up?",
    "questionAr": "لطلاء ملعقة من الحديد بطبقة لامعة من الفضة بالتحليل الكهربي، كيف يتم توصيل الدائرة الكهربية؟",
    "optionsEn": [
      "The spoon is connected as the cathode (negative pole), pure silver rod as the anode (positive pole), and silver nitrate solution as electrolyte",
      "The spoon is connected as the anode and silver rod as cathode",
      "Both the spoon and silver rod are connected to the positive pole",
      "An AC alternating current source is connected to both electrodes"
    ],
    "optionsAr": [
      "توصل الملعقة ككاثود (قطب سالب)، وقضيب الفضة النقية كأنود (قطب موجب)، والإلكتروليت محلول نترات الفضة",
      "توصل الملعقة كأنود وقضيب الفضة ككاثود",
      "يوصل كلاهما بالقطب الموجب",
      "يستخدم مصدر تيار متردد متصل بكلا القطبين"
    ],
    "correctAnswer": "The spoon is connected as the cathode (negative pole), pure silver rod as the anode (positive pole), and silver nitrate solution as electrolyte",
    "correctIndex": 0,
    "hintEn": "The object to be plated is always the cathode (where reduction and deposition occur). The plating metal is the anode (where oxidation occurs).",
    "hintAr": "الجسم المراد طلاؤه يوصل دائماً بالقطب السالب (الكاثود) لتحدث عنده عملية الترسيب؛ ومادة الطلاء النقية توصل بالأنود لتذوب وتعوض المحلول.",
    "stepByStepSolutionEn": [
      "The object to be plated is always the cathode (where reduction and deposition occur). The plating metal is the anode (where oxidation occurs).",
      "Therefore, the correct answer is: The spoon is connected as the cathode (negative pole), pure silver rod as the anode (positive pole), and silver nitrate solution as electrolyte"
    ],
    "stepByStepSolutionAr": [
      "الجسم المراد طلاؤه يوصل دائماً بالقطب السالب (الكاثود) لتحدث عنده عملية الترسيب؛ ومادة الطلاء النقية توصل بالأنود لتذوب وتعوض المحلول.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: توصل الملعقة ككاثود (قطب سالب)، وقضيب الفضة النقية كأنود (قطب موجب)، والإلكتروليت محلول نترات الفضة"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_07",
    "titleEn": "Exercise 7: Volume of Chlorine Gas Liberated at STP",
    "titleAr": "تمرين ٧: حساب حجم غاز الكلور المتصاعد في م.ض.د (STP)",
    "difficulty": "exam_standard",
    "questionEn": "What volume of chlorine gas ($\\text{Cl}_2$) at STP is liberated at the anode when $0.2\\,\\text{Faradays}$ of electricity is passed through molten sodium chloride ($\\text{NaCl}$)? (Molar gas volume at STP $= 22.4\\,\\text{L/mol}$)",
    "questionAr": "ما حجم غاز الكلور ($\\text{Cl}_2$) المتصاعد عند الأنود في م.ض.د (STP) عند مرور $0.2\\,\\text{Faradays}$ في مصهور كلوريد الصوديوم؟ (حجم المول من أي غاز في م.ض.د $= 22.4\\,\\text{L}$)",
    "optionsEn": [
      "$2.24\\,\\text{L}$",
      "$4.48\\,\\text{L}$",
      "$1.12\\,\\text{L}$",
      "$0.56\\,\\text{L}$"
    ],
    "optionsAr": [
      "$2.24\\,\\text{L}$",
      "$4.48\\,\\text{L}$",
      "$1.12\\,\\text{L}$",
      "$0.56\\,\\text{L}$"
    ],
    "correctAnswer": "$2.24\\,\\text{L}$",
    "correctIndex": 0,
    "hintEn": "Liberation of 1 mole of Cl2 (diatomic, z = 1) requires 2 Faradays. Moles of Cl2 = 0.2 / 2 = 0.1 mol. Volume = 0.1 * 22.4 = 2.24 L.",
    "hintAr": "لتصعيد 1 مول من غاز الكلور (22.4 لتر) يلزم $2\\,\\text{F}$ (لأنه ثنائي الذرة وأحادي التكافؤ). عدد مولات الكلور $= 0.2 \\div 2 = 0.1\\,\\text{mol}$. الحجم $= 0.1 \\times 22.4 = 2.24\\,\\text{L}$.",
    "stepByStepSolutionEn": [
      "Liberation of 1 mole of Cl2 (diatomic, z = 1) requires 2 Faradays. Moles of Cl2 = 0.2 / 2 = 0.1 mol. Volume = 0.1 * 22.4 = 2.24 L.",
      "Therefore, the correct answer is: $2.24\\,\\text{L}$"
    ],
    "stepByStepSolutionAr": [
      "لتصعيد 1 مول من غاز الكلور (22.4 لتر) يلزم $2\\,\\text{F}$ (لأنه ثنائي الذرة وأحادي التكافؤ). عدد مولات الكلور $= 0.2 \\div 2 = 0.1\\,\\text{mol}$. الحجم $= 0.1 \\times 22.4 = 2.24\\,\\text{L}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $2.24\\,\\text{L}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_08",
    "titleEn": "Exercise 8: Displacement Reactions in Electromotive Series",
    "titleAr": "تمرين ٨: تفاعلات الإحلال البسيط وعلاقتها بمتسلسلة الجهود الكهربية",
    "difficulty": "easy",
    "questionEn": "Why can metallic zinc displace hydrogen from dilute sulfuric acid, whereas metallic copper cannot?",
    "questionAr": "علل: يحل فلز الخارصين محل هيدروجين حمض الكبريتيك المخفف، بينما لا يحل النحاس محله؟",
    "optionsEn": [
      "Because zinc precedes hydrogen in the electromotive series and has a positive oxidation potential, whereas copper follows hydrogen and has a negative oxidation potential",
      "Because copper is more reactive than zinc",
      "Because copper reacts only with concentrated alkalis",
      "Because zinc forms an insoluble sulfate coating"
    ],
    "optionsAr": [
      "لأن الخارصين يسبق الهيدروجين في متسلسلة الجهود وجهد تأكسده موجب فيحل محله، بينما النحاس يلي الهيدروجين وجهد تأكسده سالب فلا يستطيع اختزاله",
      "لأن النحاس أكثر نشاطاً من الخارصين",
      "لأن النحاس يتفاعل فقط مع القلويات المركزة",
      "لأن الخارصين يكون طبقة كبريتات عازلة"
    ],
    "correctAnswer": "Because zinc precedes hydrogen in the electromotive series and has a positive oxidation potential, whereas copper follows hydrogen and has a negative oxidation potential",
    "correctIndex": 0,
    "hintEn": "Elements above hydrogen in the electromotive series have higher oxidation potentials than H2 (0.0 V) and displace H+ from acids.",
    "hintAr": "العناصر التي تسبق الهيدروجين في المتسلسلة تمتلك جهود تأكسد موجبة وتعتبر عوامل مختزلة قوية فتحل محل أيونات الهيدروجين في الأحماض.",
    "stepByStepSolutionEn": [
      "Elements above hydrogen in the electromotive series have higher oxidation potentials than H2 (0.0 V) and displace H+ from acids.",
      "Therefore, the correct answer is: Because zinc precedes hydrogen in the electromotive series and has a positive oxidation potential, whereas copper follows hydrogen and has a negative oxidation potential"
    ],
    "stepByStepSolutionAr": [
      "العناصر التي تسبق الهيدروجين في المتسلسلة تمتلك جهود تأكسد موجبة وتعتبر عوامل مختزلة قوية فتحل محل أيونات الهيدروجين في الأحماض.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن الخارصين يسبق الهيدروجين في متسلسلة الجهود وجهد تأكسده موجب فيحل محله، بينما النحاس يلي الهيدروجين وجهد تأكسده سالب فلا يستطيع اختزاله"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_09",
    "titleEn": "Exercise 9: Gram-Equivalent Weight of Trivalent Metal",
    "titleAr": "تمرين ٩: حساب الكتلة الذرية لفلز ثلاثي التكافؤ بمعلومية فاراداي",
    "difficulty": "medium",
    "questionEn": "When $0.6\\,\\text{Faradays}$ of electricity is passed through a solution of a trivalent metal chloride ($\\text{MCl}_3$), $5.4\\,\\text{g}$ of metal M is deposited at the cathode. What is the atomic molar mass of metal M?",
    "questionAr": "عند إمرار $0.6\\,\\text{فاراداي}$ في محلول كلوريد فلز ثلاثي التكافؤ ($\\text{MCl}_3$)، ترسب $5.4\\,\\text{g}$ من الفلز M عند الكاثود. احسب الكتلة الذرية الجرامية لهذا الفلز.",
    "optionsEn": [
      "$27\\,\\text{g/mol}$ (Aluminium)",
      "$56\\,\\text{g/mol}$ (Iron)",
      "$52\\,\\text{g/mol}$ (Chromium)",
      "$65\\,\\text{g/mol}$ (Zinc)"
    ],
    "optionsAr": [
      "$27\\,\\text{g/mol}$ (ألومنيوم)",
      "$56\\,\\text{g/mol}$ (حديد)",
      "$52\\,\\text{g/mol}$ (كروم)",
      "$65\\,\\text{g/mol}$ (خارصين)"
    ],
    "correctAnswer": "$27\\,\\text{g/mol}$ (Aluminium)",
    "correctIndex": 0,
    "hintEn": "Mass deposited = (Faradays * Eq. Wt.). Eq. Wt. = 5.4 / 0.6 = 9.0 g. Atomic mass = Eq. Wt. * valence = 9.0 * 3 = 27 g/mol.",
    "hintAr": "الكتلة المكافئة الجرامية $= 5.4 \\div 0.6 = 9.0\\,\\text{g}$. الكتلة الذرية $= 9.0 \\times 3 = 27\\,\\text{g/mol}$ (وهو فلز الألومنيوم).",
    "stepByStepSolutionEn": [
      "Mass deposited = (Faradays * Eq. Wt.). Eq. Wt. = 5.4 / 0.6 = 9.0 g. Atomic mass = Eq. Wt. * valence = 9.0 * 3 = 27 g/mol.",
      "Therefore, the correct answer is: $27\\,\\text{g/mol}$ (Aluminium)"
    ],
    "stepByStepSolutionAr": [
      "الكتلة المكافئة الجرامية $= 5.4 \\div 0.6 = 9.0\\,\\text{g}$. الكتلة الذرية $= 9.0 \\times 3 = 27\\,\\text{g/mol}$ (وهو فلز الألومنيوم).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $27\\,\\text{g/mol}$ (ألومنيوم)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_10",
    "titleEn": "Exercise 10: Cathodic Protection of Underground Pipelines",
    "titleAr": "تمرين ١٠: الحماية الكاثودية لخطوط الأنابيب المدفونة تحت الأرض",
    "difficulty": "easy",
    "questionEn": "Why are steel gas pipelines buried in moist soils electrically connected to magnesium ingots?",
    "questionAr": "علل: توصل أنابيب الغاز والنفط الحديدية المدفونة في التربة الرطبة بكتل من فلز الماغنسيوم؟",
    "optionsEn": [
      "To act as a sacrificial anode that oxidizes and corrodes in place of the iron pipeline",
      "To conduct stray electricity away from the pipe into lightning arresters",
      "To increase the structural strength and hardness of the pipe",
      "To prevent moisture from evaporating from the soil"
    ],
    "optionsAr": [
      "ليعمل الماغنسيوم كقطب مضحي (أنود) يتأكسد ويتآكل مفضلاً عن الحديد فيحمي الأنابيب من الصدأ",
      "لتفريغ شحنات الصواعق في الأرض",
      "لزيادة الصلابة الميكانيكية لجدار الأنابيب",
      "لمنع تبخر الرطوبة من التربة"
    ],
    "correctAnswer": "To act as a sacrificial anode that oxidizes and corrodes in place of the iron pipeline",
    "correctIndex": 0,
    "hintEn": "Mg is more active than Fe, so it acts as the anode of the local galvanic cell and corrodes first, protecting iron (cathode).",
    "hintAr": "الماغنسيوم أكثر نشاطاً من الحديد فيعمل كأنود للخلية الجلفانية الموضعية ويتآكل هو أولاً وتظل الأنابيب ككاثود محمي.",
    "stepByStepSolutionEn": [
      "Mg is more active than Fe, so it acts as the anode of the local galvanic cell and corrodes first, protecting iron (cathode).",
      "Therefore, the correct answer is: To act as a sacrificial anode that oxidizes and corrodes in place of the iron pipeline"
    ],
    "stepByStepSolutionAr": [
      "الماغنسيوم أكثر نشاطاً من الحديد فيعمل كأنود للخلية الجلفانية الموضعية ويتآكل هو أولاً وتظل الأنابيب ككاثود محمي.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: ليعمل الماغنسيوم كقطب مضحي (أنود) يتأكسد ويتآكل مفضلاً عن الحديد فيحمي الأنابيب من الصدأ"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_11",
    "titleEn": "Exercise 11: Products of Aqueous NaCl Electrolysis",
    "titleAr": "تمرين ١١: نواتج التحليل الكهربي لمحلول كلوريد الصوديوم المائي (ماء البحر)",
    "difficulty": "exam_standard",
    "questionEn": "When an aqueous solution of sodium chloride ($\\text{NaCl}$) is electrolyzed between inert electrodes, what products are formed at the anode, cathode, and in the remaining solution?",
    "questionAr": "عند التحليل الكهربي لمحلول مائي مركز من كلوريد الصوديوم ($\\text{NaCl}$) باستخدام أقطاب خاملة، ما هي المواد المتكونة عند الأنود والكاثود وفي المحلول المتبقي؟",
    "optionsEn": [
      "Anode: Chlorine gas ($\\text{Cl}_2$); Cathode: Hydrogen gas ($\\text{H}_2$); Remaining solution: Sodium hydroxide ($\\text{NaOH}$)",
      "Anode: Oxygen gas; Cathode: Sodium metal; Remaining solution: Hydrochloric acid",
      "Anode: Sodium metal; Cathode: Chlorine gas; Remaining solution: Pure water",
      "Anode: Hydrogen gas; Cathode: Chlorine gas; Remaining solution: Sodium hydride"
    ],
    "optionsAr": [
      "الأنود: غاز الكلور ($\\text{Cl}_2$)؛ والكاثود: غاز الهيدروجين ($\\text{H}_2$)؛ والمحلول المتبقي: هيدروكسيد الصوديوم ($\\text{NaOH}$)",
      "الأنود: غاز الأكسجين؛ والكاثود: فلز الصوديوم؛ والمحلول: حمض الهيدروكلوريك",
      "الأنود: فلز الصوديوم؛ والكاثود: غاز الكلور؛ والمحلول: ماء نقي",
      "الأنود: غاز الهيدروجين؛ والكاثود: غاز الكلور؛ والمحلول: هيدريد الصوديوم"
    ],
    "correctAnswer": "Anode: Chlorine gas ($\\text{Cl}_2$); Cathode: Hydrogen gas ($\\text{H}_2$); Remaining solution: Sodium hydroxide ($\\text{NaOH}$)",
    "correctIndex": 0,
    "hintEn": "At cathode: H+ has higher reduction potential than Na+, so H2 gas evolves leaving OH-. At anode: Cl- oxidizes to Cl2 gas. Remaining is Na+ and OH- (NaOH).",
    "hintAr": "عند الكاثود: جهد اختزال الهيدروجين أكبر من الصوديوم فيختزل ويتصاعد غاز $\\text{H}_2$؛ وعند الأنود: يتأكسد الكلوريد ويتصاعد غاز $\\text{Cl}_2$؛ وتتبقى أيونات الصوديوم والهيدروكسيل في المحلول مكونة $\\text{NaOH}$.",
    "stepByStepSolutionEn": [
      "At cathode: H+ has higher reduction potential than Na+, so H2 gas evolves leaving OH-. At anode: Cl- oxidizes to Cl2 gas. Remaining is Na+ and OH- (NaOH).",
      "Therefore, the correct answer is: Anode: Chlorine gas ($\\text{Cl}_2$); Cathode: Hydrogen gas ($\\text{H}_2$); Remaining solution: Sodium hydroxide ($\\text{NaOH}$)"
    ],
    "stepByStepSolutionAr": [
      "عند الكاثود: جهد اختزال الهيدروجين أكبر من الصوديوم فيختزل ويتصاعد غاز $\\text{H}_2$؛ وعند الأنود: يتأكسد الكلوريد ويتصاعد غاز $\\text{Cl}_2$؛ وتتبقى أيونات الصوديوم والهيدروكسيل في المحلول مكونة $\\text{NaOH}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: الأنود: غاز الكلور ($\\text{Cl}_2$)؛ والكاثود: غاز الهيدروجين ($\\text{H}_2$)؛ والمحلول المتبقي: هيدروكسيد الصوديوم ($\\text{NaOH}$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_12",
    "titleEn": "Exercise 12: Relationship Between Coulomb and Ampere-Hour",
    "titleAr": "تمرين ١٢: التحويل بين الكولوم والأمبير-ساعة",
    "difficulty": "easy",
    "questionEn": "How many Coulombs of electric charge correspond to an electrical charge quantity of $1.0\\,\\text{Ampere-hour}$ ($1\\,\\text{A}\\cdot\\text{h}$)?",
    "questionAr": "كم كولوم من الشحنة الكهربائية تكافئ كمية كهرباء قدرها $1.0\\,\\text{أمبير-ساعة}$ ($1\\,\\text{A}\\cdot\\text{h}$)؟",
    "optionsEn": [
      "$3,600\\,\\text{C}$",
      "$96,500\\,\\text{C}$",
      "$60\\,\\text{C}$",
      "$1,000\\,\\text{C}$"
    ],
    "optionsAr": [
      "$3,600\\,\\text{C}$",
      "$96,500\\,\\text{C}$",
      "$60\\,\\text{C}$",
      "$1,000\\,\\text{C}$"
    ],
    "correctAnswer": "$3,600\\,\\text{C}$",
    "correctIndex": 0,
    "hintEn": "1 A * 1 hour = 1 A * 3600 seconds = 3600 Coulombs.",
    "hintAr": "1 أمبير-ساعة = 1 أمبير × 3600 ثانية = 3600 كولوم.",
    "stepByStepSolutionEn": [
      "1 A * 1 hour = 1 A * 3600 seconds = 3600 Coulombs.",
      "Therefore, the correct answer is: $3,600\\,\\text{C}$"
    ],
    "stepByStepSolutionAr": [
      "1 أمبير-ساعة = 1 أمبير × 3600 ثانية = 3600 كولوم.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $3,600\\,\\text{C}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_13",
    "titleEn": "Exercise 13: Recharging of Secondary Storage Cells",
    "titleAr": "تمرين ١٣: تحول الخلية الجلفانية إلى إلكتروليتية أثناء عملية الشحن",
    "difficulty": "medium",
    "questionEn": "When recharging a storage battery (such as the lead accumulator), how is it converted thermodynamically and electrically?",
    "questionAr": "عند إعادة شحن بطارية المركم الرصاصي، كيف تتحول الخلية من الناحية الكهروكيميائية والديناميكية الحرارية؟",
    "optionsEn": [
      "It operates as an electrolytic cell where non-spontaneous chemical reactions occur, consuming external electrical energy to restore original reactants",
      "It remains a galvanic cell producing even higher voltage",
      "It operates as a primary dry cell without ions",
      "It converts nuclear energy into thermal energy"
    ],
    "optionsAr": [
      "تعمل كخلية إلكتروليتية تستهلك طاقة كهربائية من مصدر خارجي لإحداث تفاعل كيميائي غير تلقائي يعيد الأقطاب والإلكتروليت إلى حالتها الأصلية",
      "تظل خلية جلفانية تنتج جهداً كهربائياً أعلى",
      "تتحول إلى خلية أولية جافة بدون حركة أيونات",
      "تحول الطاقة النووية إلى طاقة حرارية"
    ],
    "correctAnswer": "It operates as an electrolytic cell where non-spontaneous chemical reactions occur, consuming external electrical energy to restore original reactants",
    "correctIndex": 0,
    "hintEn": "During recharge, external DC voltage (> 12V) forces non-spontaneous reverse reactions: 2 PbSO4 + 2 H2O -> Pb + PbO2 + 2 H2SO4.",
    "hintAr": "أثناء الشحن، يعمل المصدر الخارجي على إجبار الإلكترونات على السير في الاتجاه المعاكس لتنعكس تفاعلات الأقطاب، فتتحول الخلية إلى خلية إلكتروليتية تستهلك كهرباء.",
    "stepByStepSolutionEn": [
      "During recharge, external DC voltage (> 12V) forces non-spontaneous reverse reactions: 2 PbSO4 + 2 H2O -> Pb + PbO2 + 2 H2SO4.",
      "Therefore, the correct answer is: It operates as an electrolytic cell where non-spontaneous chemical reactions occur, consuming external electrical energy to restore original reactants"
    ],
    "stepByStepSolutionAr": [
      "أثناء الشحن، يعمل المصدر الخارجي على إجبار الإلكترونات على السير في الاتجاه المعاكس لتنعكس تفاعلات الأقطاب، فتتحول الخلية إلى خلية إلكتروليتية تستهلك كهرباء.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تعمل كخلية إلكتروليتية تستهلك طاقة كهربائية من مصدر خارجي لإحداث تفاعل كيميائي غير تلقائي يعيد الأقطاب والإلكتروليت إلى حالتها الأصلية"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_14",
    "titleEn": "Exercise 14: Mass Deposited by 1 Faraday of Electricity",
    "titleAr": "تمرين ١٤: الكتلة المترسبة بواسطة ١ فاراداي من الكهرباء",
    "difficulty": "easy",
    "questionEn": "Passing $1.0\\,\\text{Faraday}$ ($96,500\\,\\text{C}$) of electricity through any electrolyte solution always deposits or liberates exactly:",
    "questionAr": "مرور كمية من الكهرباء مقدارها $1.0\\,\\text{Faraday}$ ($96,500\\,\\text{C}$) في أي محلول إلكتروليتي يؤدي دائماً إلى ترسيب أو تحرير:",
    "optionsEn": [
      "Exactly one gram-equivalent weight of that element",
      "Exactly one mole of that element regardless of its valence",
      "Exactly one gram of that element",
      "Exactly $22.4\\,\\text{liters}$ of any element"
    ],
    "optionsAr": [
      "كتلة مكافئة جرامية واحدة بالضبط من المادة",
      "مول واحد من المادة دائماً بصرف النظر عن تكافؤها",
      "جرام واحد من المادة",
      "حجم مقداره $22.4\\,\\text{L}$ من أي مادة"
    ],
    "correctAnswer": "Exactly one gram-equivalent weight of that element",
    "correctIndex": 0,
    "hintEn": "By definition, 1 Faraday (96,500 C) deposits or liberates 1 gram-equivalent weight of any substance.",
    "hintAr": "تعريف الفاراداي: هو كمية الكهرباء اللازمة لترسيب أو تصعيد كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "By definition, 1 Faraday (96,500 C) deposits or liberates 1 gram-equivalent weight of any substance.",
      "Therefore, the correct answer is: Exactly one gram-equivalent weight of that element"
    ],
    "stepByStepSolutionAr": [
      "تعريف الفاراداي: هو كمية الكهرباء اللازمة لترسيب أو تصعيد كتلة مكافئة جرامية واحدة من أي عنصر.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: كتلة مكافئة جرامية واحدة بالضبط من المادة"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch4_ex_15",
    "titleEn": "Exercise 15: Polarity of Electrodes in Galvanic vs Electrolytic Cells",
    "titleAr": "تمرين ١٥: قطبية الأنود والكاثود في الخلايا الجلفانية والإلكتروليتية",
    "difficulty": "medium",
    "questionEn": "Which statement correctly describes the electrical polarity of the anode and cathode in galvanic versus electrolytic cells?",
    "questionAr": "أي العبارات الآتية تصف بدقة قطبية الأنود والكاثود في كل من الخلايا الجلفانية والخلايا الإلكتروليتية؟",
    "optionsEn": [
      "In a galvanic cell, the anode is negative and the cathode is positive; in an electrolytic cell, the anode is positive and the cathode is negative (oxidation always occurs at the anode in both)",
      "In a galvanic cell, the anode is positive and cathode is negative; in an electrolytic cell, anode is negative",
      "The anode is always positive and cathode is always negative in all cells",
      "Oxidation occurs at cathode in galvanic and at anode in electrolytic"
    ],
    "optionsAr": [
      "في الخلية الجلفانية الأنود قطب سالب والكاثود قطب موجب؛ وفي الخلية الإلكتروليتية الأنود قطب موجب والكاثود قطب سالب (والأكسدة تحدث دائماً عند الأنود في كلا النوعين)",
      "في الخلية الجلفانية الأنود موجب والكاثود سالب؛ وفي الإلكتروليتية الأنود سالب",
      "الأنود موجب والكاثود سالب دائماً في جميع أنواع الخلايا",
      "تحدث الأكسدة عند الكاثود في الجلفانية وعند الأنود في الإلكتروليتية"
    ],
    "correctAnswer": "In a galvanic cell, the anode is negative and the cathode is positive; in an electrolytic cell, the anode is positive and the cathode is negative (oxidation always occurs at the anode in both)",
    "correctIndex": 0,
    "hintEn": "Anode is always the site of oxidation. In galvanic: anode generates electrons (negative pole). In electrolytic: anode is connected to positive pole of external power source.",
    "hintAr": "الأكسدة تحدث دائماً عند الأنود: في الجلفانية تتراكم عليه الإلكترونات فيكون قطباً سالباً؛ وفي الإلكتروليتية يتصل بالقطب الموجب للمصدر الخارجي.",
    "stepByStepSolutionEn": [
      "Anode is always the site of oxidation. In galvanic: anode generates electrons (negative pole). In electrolytic: anode is connected to positive pole of external power source.",
      "Therefore, the correct answer is: In a galvanic cell, the anode is negative and the cathode is positive; in an electrolytic cell, the anode is positive and the cathode is negative (oxidation always occurs at the anode in both)"
    ],
    "stepByStepSolutionAr": [
      "الأكسدة تحدث دائماً عند الأنود: في الجلفانية تتراكم عليه الإلكترونات فيكون قطباً سالباً؛ وفي الإلكتروليتية يتصل بالقطب الموجب للمصدر الخارجي.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: في الخلية الجلفانية الأنود قطب سالب والكاثود قطب موجب؛ وفي الخلية الإلكتروليتية الأنود قطب موجب والكاثود قطب سالب (والأكسدة تحدث دائماً عند الأنود في كلا النوعين)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];
