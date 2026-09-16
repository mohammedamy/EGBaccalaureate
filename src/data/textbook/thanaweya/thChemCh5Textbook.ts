import type { SolvedProblem } from '../../../types/curriculum';

export const thChemCh5SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_chem_ch5_se_01",
    "titleEn": "MoE Example 1: Wöhler Synthesis and Demise of Vital Force Theory",
    "titleAr": "مثال الوزارة ١: تجربة فوهلر وسقوط نظرية القوى الحيوية لبرزيليوس",
    "difficulty": "easy",
    "questionEn": "How did Friedrich Wöhler in 1828 disprove the Vital Force Theory proposed by Berzelius, and what organic compound did he synthesize in the laboratory?",
    "questionAr": "كيف استطاع العالم الألماني فوهلر عام ١٨٢٨م تحطيم نظرية القوى الحيوية لبرزيليوس، وما المركب العضوي الذي قام بتحضيره معملياً؟",
    "optionsEn": [
      "By heating an aqueous solution of two inorganic salts (ammonium chloride and silver cyanate) to synthesize urea: $\\text{NH}_4\\text{CNO} \\xrightarrow{\\Delta} \\text{CO(NH}_2)_2$",
      "By reacting methane gas with chlorine under sunlight to synthesize chloroform",
      "By fermenting glucose with yeast to synthesize ethanol",
      "By heating calcium carbide with water to synthesize acetylene gas"
    ],
    "optionsAr": [
      "بتسخين محلول مائي لمركبين غير عضويين (كلوريد الأمونيوم وسيانات الفضة) لإنتاج اليوريا: $\\text{NH}_4\\text{CNO} \\xrightarrow{\\Delta} \\text{CO(NH}_2)_2$",
      "بتفاعل غاز الميثان مع الكلور لإنتاج الكلوروفورم",
      "بتخمير سكر الجلوكوز لإنتاج الكحول الإيثيلي",
      "بتفاعل كربيد الكالسيوم مع الماء لتحضير الأسيتيلين"
    ],
    "correctAnswer": "By heating an aqueous solution of two inorganic salts (ammonium chloride and silver cyanate) to synthesize urea: $\\text{NH}_4\\text{CNO} \\xrightarrow{\\Delta} \\text{CO(NH}_2)_2$",
    "correctIndex": 0,
    "hintEn": "Ammonium cyanate (NH4CNO), an inorganic salt, rearranges upon heating to form urea (CO(NH2)2), an organic waste product found in mammal urine.",
    "hintAr": "سيانات الأمونيوم $\\text{NH}_4\\text{CNO}$ مركب غير عضوي عند تسخينه تعيد ذراته ترتيب نفسها لتكوين اليوريا (البولينا) $\\text{CO(NH}_2)_2$، وهو مركب عضوي يتكون في بول الثدييات.",
    "stepByStepSolutionEn": [
      "Berzelius's Vital Force Theory stated that organic compounds could only be created inside living cells under the influence of a mystical vital force.",
      "In 1828, Friedrich Wöhler mixed solutions of ammonium chloride and silver cyanate:\n$\\text{AgCNO} + \\text{NH}_4\\text{Cl} \\to \\text{AgCl}\\downarrow + \\text{NH}_4\\text{CNO}$.",
      "Upon heating the resulting ammonium cyanate solution:\n$\\text{NH}_4\\text{CNO} \\xrightarrow{\\Delta} \\text{CO(NH}_2)_2$ (Urea).",
      "Urea is an organic substance produced in mammal metabolism. Its lab synthesis from mineral substances completely disproved the vital force dogma."
    ],
    "stepByStepSolutionAr": [
      "كانت نظرية القوى الحيوية لبرزيليوس تفترض أن المركبات العضوية لا تتكون إلا داخل خلايا الكائنات الحية بفعل قوى حيوية غامضة ولا يمكن تحضيرها معملياً.",
      "قام فوهلر بخلط محلولي كلوريد الأمونيوم وسيانات الفضة:\n$\\text{AgCNO} + \\text{NH}_4\\text{Cl} \\to \\text{AgCl}\\downarrow + \\text{NH}_4\\text{CNO}$.",
      "وبتسخين محلول سيانات الأمونيوم غير العضوي حدثت إعادة ترتيب للذرات:\n$\\text{NH}_4\\text{CNO} \\xrightarrow{\\Delta} \\text{CO(NH}_2)_2$ (اليوريا).",
      "أثبتت هذه التجربة إمكانية تحضير المركبات العضوية في المختبر وأدت إلى انطلاق الكيمياء العضوية الحديثة."
    ],
    "teacherTipEn": "Following Wöhler's experiment, organic chemistry was redefined based on molecular structure and composition (carbon chemistry) rather than origin.",
    "teacherTipAr": "أصبح تعريف المادة العضوية بعد فوهلر يعتمد على بنيتها وتركيبها الكيميائي (كيمياء مركبات الكربون) وليس على مصدرها الحيوي."
  },
  {
    "id": "th_chem_ch5_se_02",
    "titleEn": "MoE Example 2: Laboratory Preparation of Methane Gas",
    "titleAr": "مثال الوزارة ٢: التحضير المعملي لغاز الميثان ودور الجير الصودي",
    "difficulty": "easy",
    "questionEn": "How is methane gas ($\\text{CH}_4$) prepared in the laboratory, and what is the scientific purpose of using soda lime ($\\text{NaOH} + \\text{CaO}$) instead of pure sodium hydroxide?",
    "questionAr": "كيف يحضر غاز الميثان في المختبر، وما الأهمية العلمية لاستخدام الجير الصودي ($\\text{NaOH} + \\text{CaO}$) بدلاً من الصودا الكاوية بمفردها؟",
    "optionsEn": [
      "By dry distillation of anhydrous sodium acetate with soda lime; $\\text{CaO}$ acts as a flux that lowers the melting point of the reaction mixture and protects glass",
      "By adding water to calcium carbide; $\\text{CaO}$ acts as an oxidizing agent",
      "By dehydration of ethanol with sulfuric acid; $\\text{CaO}$ absorbs water",
      "By cracking heavy petroleum fractions under high pressure; $\\text{CaO}$ is a catalyst"
    ],
    "optionsAr": [
      "بالتقطير الجاف لأسيتات الصوديوم اللامائية مع الجير الصودي؛ حيث يعمل أكسيد الكالسيوم $\\text{CaO}$ كمادة صاهرة تخفض درجة انصهار الخليط وتحمي زجاج الأنبوبة",
      "بتنقيط الماء على كربيد الكالسيوم؛ حيث يعمل $\\text{CaO}$ كعامل مؤكسد",
      "بنزع الماء من الإيثانول بواسطة حمض الكبريتيك",
      "بالتكسير الحراري الحفزي للهيدروكربونات الثقيلة"
    ],
    "correctAnswer": "By dry distillation of anhydrous sodium acetate with soda lime; $\\text{CaO}$ acts as a flux that lowers the melting point of the reaction mixture and protects glass",
    "correctIndex": 0,
    "hintEn": "CH3COONa(s) + NaOH(s) -[CaO, Delta]-> CH4(g) + Na2CO3(s). CaO lowers the melting point.",
    "hintAr": "المعادلة: $\\text{CH}_3\\text{COONa} + \\text{NaOH} \\xrightarrow{\\text{CaO},\\, \\Delta} \\text{CH}_4\\uparrow + \\text{Na}_2\\text{CO}_3$. يعمل الجير الحي $\\text{CaO}$ كمادة صاهرة تخفض درجة انصهار الخليط.",
    "stepByStepSolutionEn": [
      "Reaction: $\\text{CH}_3\\text{COONa}(s) + \\text{NaOH}(s) \\xrightarrow{\\text{CaO},\\, \\Delta} \\text{CH}_4\\uparrow + \\text{Na}_2\\text{CO}_3(s)$.",
      "Method: Dry distillation of anhydrous sodium acetate with soda lime.",
      "Role of Soda Lime: A mixture of caustic soda ($\\text{NaOH}$) and quicklime ($\\text{CaO}$).",
      "$\\text{CaO}$ does not participate directly in the reaction, but acts as a **flux** that significantly lowers the melting point of the mixture and prevents molten $\\text{NaOH}$ from eroding the glass boiling tube.",
      "Methane gas is collected over water because it is virtually insoluble in water and lighter than air."
    ],
    "stepByStepSolutionAr": [
      "معادلة التفاعل: $\\text{CH}_3\\text{COONa} + \\text{NaOH} \\xrightarrow{\\text{CaO},\\, \\Delta} \\text{CH}_4\\uparrow + \\text{Na}_2\\text{CO}_3$.",
      "طريقة التحضير: التقطير الجاف لأسيتات الصوديوم اللامائية مع الجير الصودي.",
      "تركيب الجير الصودي: خليط من الصودا الكاوية ($\\text{NaOH}$) والجير الحي ($\\text{CaO}$).",
      "فائدة $\\text{CaO}$: مادة صاهرة تخفض درجة انصهار الخليط وتمنع تفاعل الصودا الكاوية المنصهرة مع زجاج أنبوبة الاختبار.",
      "يجمع غاز الميثان بإزاحة الماء لأسفل لأنه شحيح الذوبان في الماء وأخف من الهواء."
    ],
    "teacherTipEn": "Dry distillation of sodium propanoate (C2H5COONa) with soda lime yields ethane (C2H6). In general, the alkane formed has one less carbon atom than the sodium salt.",
    "teacherTipAr": "قاعدة عامة: التقطير الجاف لأي ملح صوديومي لحمض كربوكسيلي ينتج ألكاناً يقل عن الملح بمقدار ذرة كربون واحدة (مثلاً بروبانوات الصوديوم تنتج إيثان)."
  },
  {
    "id": "th_chem_ch5_se_03",
    "titleEn": "MoE Example 3: Markovnikov Rule in Addition Reactions",
    "titleAr": "مثال الوزارة ٣: قاعدة ماركونيكوف في تفاعلات الإضافة للألكينات غير المتماثلة",
    "difficulty": "medium",
    "questionEn": "When hydrogen bromide gas ($\\text{HBr}$) is added to propene ($\\text{CH}_3-\\text{CH}=\\text{CH}_2$), which product is predominantly formed according to Markovnikov's Rule?",
    "questionAr": "عند إضافة غاز بروميد الهيدروجين ($\\text{HBr}$) إلى غاز البروبين ($\\text{CH}_3-\\text{CH}=\\text{CH}_2$)، ما هو الناتج الرئيسي المتكون طبقاً لقاعدة ماركونيكوف؟",
    "optionsEn": [
      "$2\\text{-bromopropane} \\quad (\\text{CH}_3-\\text{CH(Br)}-\\text{CH}_3)$",
      "$1\\text{-bromopropane} \\quad (\\text{CH}_3-\\text{CH}_2-\\text{CH}_2\\text{Br})$",
      "$1,2\\text{-dibromopropane}$",
      "Propane and bromine gas"
    ],
    "optionsAr": [
      "$2\\text{-بروموبروبان} \\quad (\\text{CH}_3-\\text{CH(Br)}-\\text{CH}_3)$",
      "$1\\text{-بروموبروبان} \\quad (\\text{CH}_3-\\text{CH}_2-\\text{CH}_2\\text{Br})$",
      "$1,2\\text{-ثنائي بروموبروبان}$",
      "بروبان وغاز البروم"
    ],
    "correctAnswer": "$2\\text{-bromopropane} \\quad (\\text{CH}_3-\\text{CH(Br)}-\\text{CH}_3)$",
    "correctIndex": 0,
    "hintEn": "Markovnikov's rule: The positive hydrogen ion (H+) adds to the carbon of the double bond with more hydrogens (C-1 with 2 H), while Br- attaches to the carbon with fewer hydrogens (C-2 with 1 H).",
    "hintAr": "قاعدة ماركونيكوف: عند إضافة متفاعل غير متماثل لألكين غير متماثل، يضاف الشق الموجب (الهيدروجين) لذرة كربون الرابطة المزدوجة الحاملة لعدد أكبر من ذرات الهيدروجين (الغني يزداد غنى)، ويضاف الشق السالب للذرة الأقل.",
    "stepByStepSolutionEn": [
      "Propene is an **asymmetrical alkene**: $\\text{CH}_3-\\text{CH}=\\text{CH}_2$. Carbon-1 has 2 hydrogen atoms; Carbon-2 has 1 hydrogen atom.",
      "Hydrogen bromide is an **asymmetrical reagent**: $\\text{H}^{\\delta+} - \\text{Br}^{\\delta-}$.",
      "According to Markovnikov's Rule: The $\\text{H}^+$ ion adds to Carbon-1 (which already has more hydrogens), forming the more stable secondary carbocation: $\\text{CH}_3-\\text{C}^+\\text{H}-\\text{CH}_3$.",
      "The bromide ion ($\\text{Br}^-$) then attacks Carbon-2.",
      "The exclusive product is 2-bromopropane ($\\text{CH}_3-\\text{CH(Br)}-\\text{CH}_3$), not 1-bromopropane."
    ],
    "stepByStepSolutionAr": [
      "البروبين **ألكين غير متماثل**: ذرة كربون الرابطة المزدوجة الأولى (الطرفية) متصلة بذرتي هيدروجين، والوسطى متصلة بذرة هيدروجين واحدة.",
      "بروميد الهيدروجين **متفاعل غير متماثل**: يتكون من شق موجب $\\text{H}^+$ وشق سالب $\\text{Br}^-$.",
      "طبقاً لقاعدة ماركونيكوف: يهاجم البروتون $\\text{H}^+$ ذرة الكربون الحاملة للعدد الأكبر من الهيدروجين لتكوين كاتيون كربوني ثانوي أكثر استقراراً: $\\text{CH}_3-\\text{C}^+\\text{H}-\\text{CH}_3$.",
      "ثم يتحد أيون البروميد $\\text{Br}^-$ مع ذرة الكربون الثانية.",
      "المركب المتكون هو 2-بروموبروبان وليس 1-بروموبروبان."
    ],
    "teacherTipEn": "Markovnikov's rule applies only when BOTH the alkene and the adding reagent are asymmetrical.",
    "teacherTipAr": "قاعدة ماركونيكوف تطبق فقط عند توافر شرطين معاً: أن يكون الألكين غير متماثل، وأن يكون المتفاعل المضاف غير متماثل (مثل HBr أو الماء)."
  },
  {
    "id": "th_chem_ch5_se_04",
    "titleEn": "MoE Example 4: Baeyer Test for Alkene Unsaturation",
    "titleAr": "مثال الوزارة ٤: تفاعل باير للكشف عن الرابطة المزدوجة وتحضير الإيثيلين جليكول",
    "difficulty": "medium",
    "questionEn": "What occurs chemically during the Baeyer test when ethene gas ($\\text{C}_2\\text{H}_4$) is bubbled through a cold, alkaline solution of potassium permanganate ($\\text{KMnO}_4$)?",
    "questionAr": "ماذا يحدث كيميائياً في تفاعل باير عند إمرار غاز الإيثين ($\\text{C}_2\\text{H}_4$) في محلول مائي بارد وقلوي لبرمنجانات البوتاسيوم ($\\text{KMnO}_4$)؟",
    "optionsEn": [
      "The purple color of permanganate is discharged, and ethylene glycol (ethane-1,2-diol) is formed along with a brown precipitate of manganese dioxide ($\\text{MnO}_2$)",
      "The solution turns bright yellow, and ethanol is formed",
      "Dense white fumes of carbon dioxide are evolved without any color change",
      "A black precipitate of copper oxide is deposited"
    ],
    "optionsAr": [
      "يزول اللون البنفسجي لمحلول البرمنجانات ويتكون إيثيلين جليكول (إيثان-1،2-ثنائي أول) وراسب بني من ثاني أكسيد المنجنيز ($\\text{MnO}_2$)",
      "يتحول المحلول إلى اللون الأصفر ويتكون الإيثانول",
      "تتصاعد سحب بيضاء دون تغير في اللون",
      "يترسب راسب أسود من أكسيد النحاس"
    ],
    "correctAnswer": "The purple color of permanganate is discharged, and ethylene glycol (ethane-1,2-diol) is formed along with a brown precipitate of manganese dioxide ($\\text{MnO}_2$)",
    "correctIndex": 0,
    "hintEn": "CH2=CH2 + H2O + [O] -(cold alkaline KMnO4)-> CH2(OH)-CH2(OH). Baeyer test is both an oxidation and addition reaction.",
    "hintAr": "معادلة تفاعل باير: $\\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O} + [\\text{O}] \\xrightarrow{\\text{KMnO}_4 / \\text{قلوي}} \\text{CH}_2(\\text{OH})-\\text{CH}_2(\\text{OH})$. يزول اللون البنفسجي ويتكون إيثيلين جليكول.",
    "stepByStepSolutionEn": [
      "Chemical equation:\n$\\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O} + [\\text{O}] \\xrightarrow{\\text{cold alkaline }\\text{KMnO}_4} \\text{CH}_2(\\text{OH})-\\text{CH}_2(\\text{OH})$.",
      "The reagent is cold, alkaline potassium permanganate ($\\text{KMnO}_4$).",
      "The purple color is discharged because $\\text{Mn}^{7+}$ is reduced to brown $\\text{MnO}_2$ precipitate.",
      "The product is **ethylene glycol** (ethane-1,2-diol), a dihydric alcohol used as an antifreeze in automobile radiators because its two $-\\text{OH}$ groups form strong hydrogen bonds with water molecules, preventing ice crystals from uniting.",
      "Baeyer's reaction serves as a definitive diagnostic test for the presence of the carbon-carbon double bond."
    ],
    "stepByStepSolutionAr": [
      "المعادلة الكيميائية:\n$\\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O} + [\\text{O}] \\xrightarrow{\\text{KMnO}_4 / \\text{وسط قلوي}} \\text{CH}_2(\\text{OH})-\\text{CH}_2(\\text{OH})$.",
      "يعتبر تفاعل باير تفاعل **أكسدة وإضافة** في نفس الوقت.",
      "يزول لون البرمنجانات البنفسجي لاختزال أيون المنجنيز VII البنفسجي إلى ثاني أكسيد المنجنيز $\\text{MnO}_2$ (راسب بني).",
      "المركب الناتج هو **إيثيلين جليكول** (كحول ثنائي الهيدروكسيل) يستخدم كمانع لتجمد الماء في مبردات السيارات لقدرته على تكوين روابط هيدروجينية مع جزيئات الماء تمنع تجمع بلورات الثلج.",
      "يستخدم هذا التفاعل للكشف عن عدم التشبع ووجود الرابطة المزدوجة."
    ],
    "teacherTipEn": "Ethylene glycol is used as antifreeze because it has two hydroxyl groups that form extensive hydrogen bonds with water.",
    "teacherTipAr": "علل: يستخدم الإيثيلين جليكول كمانع لتجمد الماء في مبردات السيارات؟ لأنه كحول ثنائي الهيدروكسيل يكون روابط هيدروجينية مع الماء تمنع تجمع جزيئاته على هيئة بلورات ثلج."
  },
  {
    "id": "th_chem_ch5_se_05",
    "titleEn": "MoE Example 5: Catalytic Hydration of Ethyne to Acetaldehyde",
    "titleAr": "مثال الوزارة ٥: الهيدرة الحفزية للإيثاين (الأسيتيلين) لإنتاج الأسيتالدهيد",
    "difficulty": "medium",
    "questionEn": "What are the specific reagents and catalyst conditions for the catalytic hydration of ethyne (acetylene, $\\text{C}_2\\text{H}_2$), and what intermediate and final products are obtained?",
    "questionAr": "ما هي شروط وكواشف الهيدرة الحفزية لغاز الإيثاين (الأسيتيلين $\\text{C}_2\\text{H}_2$)، وما هو المركب غير الثابت الناتج والمركب النهائي المستقر؟",
    "optionsEn": [
      "Water in the presence of $40\\%\\,\\text{H}_2\\text{SO}_4$ and $\\text{HgSO}_4$ at $60^\\circ\\text{C}$; unstable vinyl alcohol rearranges to stable acetaldehyde (ethanal, $\\text{CH}_3\\text{CHO}$)",
      "Cold water with $\\text{NaOH}$; yields ethylene glycol directly",
      "Concentrated nitric acid at $100^\\circ\\text{C}$; yields acetic acid directly",
      "Hydrogen gas with nickel at $300^\\circ\\text{C}$; yields ethane"
    ],
    "optionsAr": [
      "إضافة الماء في وجود حمض الكبريتيك $40\\%$ وكبريتات الزئبق II ($\\text{HgSO}_4$) عند $60^\\circ\\text{C}$؛ يتكون كحول الفينيل غير الثابت الذي يعيد ترتيب ذراته لإنتاج الأسيتالدهيد (الإيثانال $\\text{CH}_3\\text{CHO}$)",
      "الماء البارد مع هيدروكسيد الصوديوم؛ لإنتاج الإيثيلين جليكول",
      "حمض النيتريك المركز عند $100^\\circ\\text{C}$؛ لإنتاج حمض الخليك مباشرة",
      "الهيدروجين مع النيكل المجزأ عند $300^\\circ\\text{C}$؛ لإنتاج الإيثان"
    ],
    "correctAnswer": "Water in the presence of $40\\%\\,\\text{H}_2\\text{SO}_4$ and $\\text{HgSO}_4$ at $60^\\circ\\text{C}$; unstable vinyl alcohol rearranges to stable acetaldehyde (ethanal, $\\text{CH}_3\\text{CHO}$)",
    "correctIndex": 0,
    "hintEn": "H-C#C-H + H2O -[H2SO4 40%, HgSO4 60 C]-> [CH2=CH-OH] (unstable vinyl alcohol) -> CH3-CHO (ethanal).",
    "hintAr": "الهيدرة الحفزية للأسيتيلين تتم في وجود حمض كبريتيك $40\\%$ وكبريتات زئبق عند $60^\\circ\\text{C}$، وينتج مركب وسطي غير ثابت هو كحول الفينيل الذي يعاد ترتيبه إلى الإيثانال (الأسيتالدهيد).",
    "stepByStepSolutionEn": [
      "Catalytic conditions: Aqueous addition of $\\text{H}_2\\text{O}$ in the presence of $40\\%\\,\\text{H}_2\\text{SO}_4$ and $\\text{HgSO}_4$ at $60^\\circ\\text{C}$.",
      "Reaction: $\\text{HC}\\equiv\\text{CH} + \\text{H}_2\\text{O} \\xrightarrow{40\\%\\,\\text{H}_2\\text{SO}_4,\\, \\text{HgSO}_4 / 60^\\circ\\text{C}} [\\text{CH}_2=\\text{CH}-\\text{OH}]$.",
      "Intermediate: **Vinyl alcohol** ($[\\text{CH}_2=\\text{CH}-\\text{OH}]$) is unstable because an $-\\text{OH}$ group is attached directly to a doubly bonded carbon atom.",
      "Tautomeric rearrangement: A hydrogen atom migrates from oxygen to the adjacent $\\text{CH}_2$ group while the double bond shifts to oxygen, yielding stable **acetaldehyde** (ethanal, $\\text{CH}_3\\text{CHO}$).",
      "Acetaldehyde can be oxidized to acetic acid ($\\text{CH}_3\\text{COOH}$) or reduced to ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$)."
    ],
    "stepByStepSolutionAr": [
      "شروط التفاعل: إضافة الماء في وجود حمض كبريتيك بتركيز $40\\%$ وكبريتات زئبقيك $\\text{HgSO}_4$ والتسخين عند $60^\\circ\\text{C}$.",
      "المعادلة: $\\text{HC}\\equiv\\text{CH} + \\text{H}_2\\text{O} \\to [\\text{CH}_2=\\text{CH}-\\text{OH}]$.",
      "المركب البيني: **كحول الفينيل** مركب غير ثابت لأن مجموعة الهيدروكسيل متصلة بذرة كربون غير مشبعة (مرتبطة برابطة مزدوجة).",
      "إعادة الترتيب: تهاجر ذرة الهيدروجين من مجموعة الهيدروكسيل إلى ذرة الكربون المجاورة وتنتقل الرابطة المزدوجة إلى الأكسجين مكونة **الأسيتالدهيد (الإيثانال)** $\\text{CH}_3\\text{CHO}$.",
      "الإيثانال حلقة وصل هامة: بأكسدته يعطي حمض الأسيتيك $\\text{CH}_3\\text{COOH}$، وباختزاله يعطي الكحول الإيثيلي $\\text{C}_2\\text{H}_5\\text{OH}$."
    ],
    "teacherTipEn": "Acetaldehyde is the master junction in organic conversions: oxidizes to acetic acid with acidified KMnO4, reduces to ethanol with H2.",
    "teacherTipAr": "الأسيتالدهيد هو مفتاح التحويلات العضوية الشهيرة: بأكسدته بـ KMnO4 يعطي حمض الخليك، وباختزاله بـ H2 يعطي الإيثانول."
  },
  {
    "id": "th_chem_ch5_se_06",
    "titleEn": "MoE Example 6: Friedel-Crafts Alkylation of Benzene",
    "titleAr": "مثال الوزارة ٦: ألكلة البنزين العطري (تفاعل فريدل-كرافتس) لتحضير التولوين",
    "difficulty": "medium",
    "questionEn": "In the Friedel-Crafts alkylation reaction of benzene to produce toluene (methylbenzene), what reagent and catalyst are utilized?",
    "questionAr": "في تفاعل فريدل-كرافتس لألكلة حلقة البنزين لإنتاج التولوين (ميثيل بنزين)، ما هو المتفاعل المضاف والعامل الحفاز المستخدم؟",
    "optionsEn": [
      "Methyl chloride ($\\text{CH}_3\\text{Cl}$) in the presence of anhydrous aluminium chloride ($\\text{AlCl}_3$)",
      "Methanol in the presence of concentrated sulfuric acid",
      "Methane gas with nickel catalyst at $500^\\circ\\text{C}$",
      "Chlorine gas under ultraviolet light"
    ],
    "optionsAr": [
      "كلوريد الميثيل ($\\text{CH}_3\\text{Cl}$) في وجود كلوريد الألومنيوم اللامائي ($\\text{AlCl}_3$)",
      "الميثانول في وجود حمض الكبريتيك المركز",
      "غاز الميثان في وجود النيكل المسخن لـ $500^\\circ\\text{C}$",
      "غاز الكلور في وجود الأشعة فوق البنفسجية"
    ],
    "correctAnswer": "Methyl chloride ($\\text{CH}_3\\text{Cl}$) in the presence of anhydrous aluminium chloride ($\\text{AlCl}_3$)",
    "correctIndex": 0,
    "hintEn": "C6H6 + CH3Cl -[anhydrous AlCl3]-> C6H5-CH3 (toluene) + HCl.",
    "hintAr": "معادلة التفاعل: $\\text{C}_6\\text{H}_6 + \\text{CH}_3\\text{Cl} \\xrightarrow{\\text{AlCl}_3\\,\\text{لامائي}} \\text{C}_6\\text{H}_5\\text{CH}_3 + \\text{HCl}$. ينتج التولوين وكلوريد الهيدروجين.",
    "stepByStepSolutionEn": [
      "Reaction: $\\text{C}_6\\text{H}_6 + \\text{CH}_3\\text{Cl} \\xrightarrow{\\text{anhydrous }\\text{AlCl}_3} \\text{C}_6\\text{H}_5\\text{CH}_3 + \\text{HCl}$.",
      "This is an **electrophilic aromatic substitution** reaction known as Friedel-Crafts Alkylation.",
      "Reagent: Alkyl halide (methyl chloride $\\text{CH}_3\\text{Cl}$).",
      "Catalyst: Anhydrous aluminium chloride ($\\text{AlCl}_3$), a Lewis acid that polarizes the $\\text{C}-\\text{Cl}$ bond and generates the electrophile ($\\text{CH}_3^+$).",
      "Product: Toluene (methylbenzene), which upon nitration with a nitrating mixture ($1\\,\\text{HNO}_3 : 1\\,\\text{H}_2\\text{SO}_4$) yields TNT ($2,4,6\\text{-trinitrotoluene}$), an explosive."
    ],
    "stepByStepSolutionAr": [
      "المعادلة: $\\text{C}_6\\text{H}_6 + \\text{CH}_3\\text{Cl} \\xrightarrow{\\text{AlCl}_3\\,\\text{لامائي}} \\text{C}_6\\text{H}_5\\text{CH}_3 + \\text{HCl}$.",
      "نوع التفاعل: إحلال (استبدال) إلكتروفيلي في حلقة البنزين ويسمى تفاعل **فريدل-كرافتس**.",
      "المتفاعل: هاليد ألكيل (كلوريد الميثيل $\\text{CH}_3\\text{Cl}$).",
      "العامل الحفاز: كلوريد الألومنيوم اللامائي (حمض لويس) لتوليد الشق الموجب الإلكتروفيلي $\\text{CH}_3^+$.",
      "الناتج: التولوين (ميثيل بنزين)، الذي بنيترته بخليط النيترة ينتج مادة TNT شديدة الانفجار ($2,4,6\\text{-ثلاثي نيتروتولوين}$)."
    ],
    "teacherTipEn": "Methyl group (-CH3) on toluene is an ortho/para-directing group, directing subsequent substitution to positions 2, 4, and 6 (forming TNT).",
    "teacherTipAr": "مجموعة الميثيل في التولوين من المجموعات المعطية للإلكترونات الموجهة للموضعين أرثو وبارا، لذا بنيترته يعطي 2،4،6-ثلاثي نيتروتولوين (TNT)."
  },
  {
    "id": "th_chem_ch5_se_07",
    "titleEn": "MoE Example 7: Ortho/Para vs Meta Directive Influence in Benzene",
    "titleAr": "مثال الوزارة ٧: المجموعات الموجهة للموضعين أرثو/بارا والموضع ميتا في مشتقات البنزين",
    "difficulty": "exam_standard",
    "questionEn": "How can one obtain meta-chloronitrobenzene and ortho-chloronitrobenzene from benzene in correct sequence?",
    "questionAr": "كيف يمكن الحصول على كل من ميتا-كلورو نيتروبنزين وأرثو-كلورو نيتروبنزين ابتداءً من البنزين العطري بالترتيب الصحيح للتفاعلات؟",
    "optionsEn": [
      "To obtain meta: Nitrate benzene first, then chlorinate; To obtain ortho: Chlorinate benzene first, then nitrate",
      "To obtain meta: Chlorinate first, then nitrate; To obtain ortho: Nitrate first, then chlorinate",
      "Both require chlorination and nitration simultaneously in one step",
      "Meta is formed by alkylation; ortho is formed by sulfonation"
    ],
    "optionsAr": [
      "للحصول على ميتا: تجرى النيترة أولاً ثم الهلجنة؛ وللحصول على أرثو: تجرى الهلجنة أولاً ثم النيترة",
      "للحصول على ميتا: تجرى الهلجنة أولاً ثم النيترة؛ وللحصول على أرثو: تجرى النيترة أولاً ثم الهلجنة",
      "كلاهما ينتج بإجراء الكلورة والنيترة في خطوة واحدة معاً",
      "الميتا ينتج بالألكلة؛ والأرثو ينتج بالسلفنة"
    ],
    "correctAnswer": "To obtain meta: Nitrate benzene first, then chlorinate; To obtain ortho: Chlorinate benzene first, then nitrate",
    "correctIndex": 0,
    "hintEn": "Nitro group (-NO2) is meta-directing. Chlorine atom (-Cl) is ortho/para-directing.",
    "hintAr": "مجموعة النيترو $-\\text{NO}_2$ ساحبة للإلكترونات توجه للموضع ميتا؛ بينما ذرة الكلور $-\\text{Cl}$ توجه للموضعين أرثو وبارا.",
    "stepByStepSolutionEn": [
      "Directing rules:\n- Ortho/Para directing groups: $-\\text{OH}, -\\text{NH}_2, -\\text{R}, -\\text{X}$ (halogens).\n- Meta directing groups: $-\\text{NO}_2, -\\text{CHO}, -\\text{COOH}, -\\text{CO-R}$.",
      "To obtain **meta-chloronitrobenzene**:\n1. Nitration of benzene: $\\text{C}_6\\text{H}_6 + \\text{HNO}_3 \\xrightarrow{\\text{H}_2\\text{SO}_4} \\text{C}_6\\text{H}_5\\text{NO}_2$ (nitrobenzene).\n2. Chlorination of nitrobenzene: Since $-\\text{NO}_2$ directs to the **meta** position, chlorination yields meta-chloronitrobenzene.",
      "To obtain **ortho-chloronitrobenzene**:\n1. Chlorination of benzene: $\\text{C}_6\\text{H}_6 + \\text{Cl}_2 \\xrightarrow{\\text{FeCl}_3} \\text{C}_6\\text{H}_5\\text{Cl}$ (chlorobenzene).\n2. Nitration of chlorobenzene: Since $-\\text{Cl}$ directs to the **ortho** and **para** positions, nitration yields a mixture of ortho- and para-chloronitrobenzene."
    ],
    "stepByStepSolutionAr": [
      "قواعد التوجيه في حلقة البنزين:\n- مجموعات توجه للموضعين أرثو وبارا: الهيدروكسيل، الأمينو، الألكيل، والهالوجينات ($-\\text{Cl}, -\\text{Br}$).\n- مجموعات توجه للموضع ميتا: النيترو ($-\\text{NO}_2$)، الفورميل، الكربوكسيل، والكربونيل.",
      "للحصول على **ميتا-كلورو نيتروبنزين**:\n١. نيترة البنزين أولاً للحصول على نيتروبنزين.\n٢. كلورة النيتروبنزين: بما أن مجموعة $-\\text{NO}_2$ توجه للموضع **ميتا**، يتكون ميتا-كلورو نيتروبنزين.",
      "للحصول على **أرثو-كلورو نيتروبنزين**:\n١. كلورة البنزين أولاً للحصول على كلوروبنزين.\n٢. نيترة الكلوروبنزين: بما أن ذرة الكلور توجه للموضعين **أرثو وبارا**، ينتج خليط من أرثو وبارا كلورو نيتروبنزين."
    ],
    "teacherTipEn": "Always identify which group was introduced FIRST onto the benzene ring to know the substitution orientation.",
    "teacherTipAr": "المجموعة الأولى الموجودة على الحلقة هي التي تحدد وتتحكم في موضع دخول المجموعة الثانية."
  },
  {
    "id": "th_chem_ch5_se_08",
    "titleEn": "MoE Example 8: Oxidation of Alcohols (Primary, Secondary, Tertiary)",
    "titleAr": "مثال الوزارة ٨: أكسدة الكحولات وتصنيفها إلى أولية وثانوية وثالثية",
    "difficulty": "medium",
    "questionEn": "When ethanol (primary alcohol) and 2-propanol (secondary alcohol) are oxidized with acidified potassium dichromate solution ($\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}_2\\text{SO}_4$), what final organic products are obtained, and why does 2-methyl-2-propanol (tertiary) resist oxidation?",
    "questionAr": "عند أكسدة الإيثانول (كحول أولي) و 2-بروبانول (كحول ثانوي) بمحلول ثاني كرومات البوتاسيوم المحمضة بحمض الكبريتيك، ما هي النواتج النهائية لكل منهما، ولماذا يقاوم 2-ميثيل-2-بروبانول (كحول ثالثي) الأكسدة؟",
    "optionsEn": [
      "Ethanol oxidizes to acetic acid (ethanoic acid); 2-propanol oxidizes to acetone (propanone); 2-methyl-2-propanol resists oxidation because its carbinol carbon bears no hydrogen atoms",
      "Ethanol oxidizes to acetone; 2-propanol oxidizes to acetic acid; tertiary alcohol yields methane",
      "Both oxidize directly to carbon dioxide gas",
      "Ethanol resists oxidation, while secondary and tertiary oxidize rapidly"
    ],
    "optionsAr": [
      "يتأكسد الإيثانول على مرحلتين إلى حمض الأسيتيك؛ ويتأكسد 2-بروبانول إلى الأسيتون (البروبانون)؛ ويقاوم الكحول الثالثي الأكسدة لعدم اتصال كربون الكاربينول بأي ذرة هيدروجين",
      "يتأكسد الإيثانول إلى أسيتون؛ والـ 2-بروبانول إلى حمض أسيتيك",
      "يتأكسد كلاهما مباشرة إلى غاز ثاني أكسيد الكربون",
      "الإيثانول يقاوم الأكسدة، بينما الثانوي والثالثي يتأكسدان بسرعة"
    ],
    "correctAnswer": "Ethanol oxidizes to acetic acid (ethanoic acid); 2-propanol oxidizes to acetone (propanone); 2-methyl-2-propanol resists oxidation because its carbinol carbon bears no hydrogen atoms",
    "correctIndex": 0,
    "hintEn": "Primary alcohol has 2 H on carbinol -> aldehyde -> carboxylic acid. Secondary has 1 H -> ketone. Tertiary has 0 H -> no oxidation under ordinary conditions.",
    "hintAr": "الكحول الأولي يتصل كربون الكاربينول فيه بذرتي هيدروجين فيتأكسد لألدهيد ثم حمض كربوكسيلي؛ والكحول الثانوي يتصل بذرة هيدروجين واحدة فيتأكسد لكيتون؛ والثالثي لا يتصل بأي ذرة هيدروجين فلا يتأكسد.",
    "stepByStepSolutionEn": [
      "1. **Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$, primary alcohol):** Carbinol carbon is attached to 2 hydrogen atoms.\n- Step 1: Oxidizes to acetaldehyde: $\\text{CH}_3\\text{CH}_2\\text{OH} + [\\text{O}] \\to \\text{CH}_3\\text{CHO} + \\text{H}_2\\text{O}$.\n- Step 2: Aldehyde readily oxidizes to acetic acid: $\\text{CH}_3\\text{CHO} + [\\text{O}] \\to \\text{CH}_3\\text{COOH}$.",
      "2. **2-Propanol ($(\\text{CH}_3)_2\\text{CHOH}$, secondary alcohol):** Carbinol carbon has 1 hydrogen atom.\n- Oxidizes in a single step to acetone (ketone): $(\\text{CH}_3)_2\\text{CHOH} + [\\text{O}] \\to \\text{CH}_3\\text{COCH}_3 + \\text{H}_2\\text{O}$.",
      "3. **2-Methyl-2-propanol ($(\\text{CH}_3)_3\\text{COH}$, tertiary alcohol):** Carbinol carbon is bonded to 3 methyl groups and **zero hydrogen atoms**.\n- Resists oxidation under normal conditions because oxidation requires breaking a $\\text{C}-\\text{H}$ bond on the carbinol carbon.",
      "In both successful oxidations, orange acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$ turns green due to reduction to $\\text{Cr}^{3+}$."
    ],
    "stepByStepSolutionAr": [
      "١. **الإيثانول (كحول أولي):** ترتبط ذرة كربون الكاربينول بذرتي هيدروجين.\n- الخطوة ١: يتأكسد للأسيتالدهيد: $\\text{C}_2\\text{H}_5\\text{OH} + [\\text{O}] \\to \\text{CH}_3\\text{CHO} + \\text{H}_2\\text{O}$.\n- الخطوة ٢: يتأكسد الأسيتالدهيد بسهولة لحمض الأسيتيك: $\\text{CH}_3\\text{CHO} + [\\text{O}] \\to \\text{CH}_3\\text{COOH}$.",
      "٢. **2-بروبانول (كحول ثانوي):** ترتبط ذرة كربون الكاربينول بذرة هيدروجين واحدة.\n- يتأكسد في خطوة واحدة ليعطي كيتون (الأسيتون): $\\text{CH}_3-\\text{CH(OH)}-\\text{CH}_3 + [\\text{O}] \\to \\text{CH}_3-\\text{CO}-\\text{CH}_3 + \\text{H}_2\\text{O}$.",
      "٣. **2-ميثيل-2-بروبانول (كحول ثالثي):** ترتبط ذرة كربون الكاربينول بثلاث مجموعات ميثيل ولا ترتبط بأي ذرة هيدروجين.\n- يقاوم الأكسدة في الظروف العادية لأن الأكسدة تتطلب نزع هيدروجين من كربون الكاربينول.",
      "في الحالتين الأولى والثانية يخضر محلول ثاني كرومات البوتاسيوم البرتقالي لتكون كبريتات الكروم III الخضراء."
    ],
    "teacherTipEn": "Breathalyzer test for drivers relies on ethanol oxidation turning orange potassium dichromate to green chromium(III) sulfate.",
    "teacherTipAr": "اختبار الكشف عن تعاطي السائقين للكحول يعتمد على نفخ السائق في بالون يمر عبر محلول ثاني كرومات البوتاسيوم المحمضة؛ إذا تغير اللون من البرتقالي للأخضر دل على تعاطي الكحول."
  },
  {
    "id": "th_chem_ch5_se_09",
    "titleEn": "MoE Example 9: Acidity of Phenol vs Ethanol (Reaction with NaOH)",
    "titleAr": "مثال الوزارة ٩: مقارنة حامضية الفينول والإيثانول وتفاعلهما مع الصودا الكاوية",
    "difficulty": "exam_standard",
    "questionEn": "Why does phenol (carbolic acid, $\\text{C}_6\\text{H}_5\\text{OH}$) react readily with sodium hydroxide solution ($\\text{NaOH}$) to form sodium phenoxide, whereas ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$) does not react with $\\text{NaOH}$?",
    "questionAr": "علل: يتفاعل الفينول (حمض الكربوليك $\\text{C}_6\\text{H}_5\\text{OH}$) بسهولة مع محلول هيدروكسيد الصوديوم ($\\text{NaOH}$) بينما لا يتفاعل الإيثانول معه؟",
    "optionsEn": [
      "Because the benzene ring in phenol is electron-withdrawing, lengthening and weakening the $\\text{O}-\\text{H}$ bond and making the proton readily releaseable, whereas the ethyl group in ethanol is electron-donating",
      "Because phenol is a strong mineral acid like hydrochloric acid",
      "Because ethanol has a higher boiling point than phenol",
      "Because phenol is completely insoluble in organic solvents"
    ],
    "optionsAr": [
      "لأن حلقة البنزين في الفينول ساحبة للإلكترونات فتطول الرابطة بين الأكسجين والهيدروجين وتضعف فيسهل انفصال البروتون، بينما مجموعة الإيثيل في الكحول معطية للإلكترونات",
      "لأن الفينول حمض معدني قوي مثل حمض الهيدروكلوريك",
      "لأن الإيثانول درجة غليانه أعلى من الفينول",
      "لأن الفينول لا يذوب في المذيبات العضوية"
    ],
    "correctAnswer": "Because the benzene ring in phenol is electron-withdrawing, lengthening and weakening the $\\text{O}-\\text{H}$ bond and making the proton readily releaseable, whereas the ethyl group in ethanol is electron-donating",
    "correctIndex": 0,
    "hintEn": "Benzene ring pulls electrons from O, strengthening C-O bond and weakening O-H bond. Thus phenol reacts with both Na and NaOH, while ethanol reacts only with active metals (Na).",
    "hintAr": "حلقة البنزين ساحبة للإلكترونات تزيد من قطبية الرابطة $\\text{O}-\\text{H}$ وتضعفها، لذا يتفاعل الفينول مع القلويات القوية كالصودا الكاوية معطياً فينوكسيد الصوديوم، بينما الإيثانول متعادل التأثير ولا يتفاعل مع القلويات.",
    "stepByStepSolutionEn": [
      "Comparison of chemical behavior towards $\\text{NaOH}$:\n- Phenol: $\\text{C}_6\\text{H}_5\\text{OH} + \\text{NaOH} \\to \\text{C}_6\\text{H}_5\\text{ONa} + \\text{H}_2\\text{O}$ (forms soluble sodium phenoxide).\n- Ethanol: $\\text{C}_2\\text{H}_5\\text{OH} + \\text{NaOH} \\to \\text{No Reaction}$.",
      "Structural reason:\n- In phenol, the resonance of the aromatic benzene ring withdraws electrons from the oxygen atom, shortening the $\\text{C}-\\text{O}$ bond and lengthening/weakening the $\\text{O}-\\text{H}$ bond, which facilitates $\\text{H}^+$ release.",
      "- In ethanol, the alkyl ethyl group ($-\\text{C}_2\\text{H}_5$) is an electron-repelling (electron-donating) group, increasing electron density on oxygen, strengthening the $\\text{O}-\\text{H}$ bond and preventing reaction with $\\text{NaOH}$.",
      "Diagnostic test for phenol: Aqueous $\\text{FeCl}_3$ gives a distinctive violet coloration; bromine water forms a white precipitate of $2,4,6\\text{-tribromophenol}$."
    ],
    "stepByStepSolutionAr": [
      "المقارنة العملية مع هيدروكسيد الصوديوم:\n- الفينول: $\\text{C}_6\\text{H}_5\\text{OH} + \\text{NaOH} \\to \\text{C}_6\\text{H}_5\\text{ONa} + \\text{H}_2\\text{O}$ (يتكون فينات/فينوكسيد الصوديوم الذائب في الماء).\n- الإيثانول: $\\text{C}_2\\text{H}_5\\text{OH} + \\text{NaOH} \\to$ لا يحدث تفاعل.",
      "السبب العلمي والتركيبي:\n- في الفينول: حلقة البنزين ساحبة للإلكترونات تقصر الرابطة $\\text{C}-\\text{O}$ وتطيل الرابطة $\\text{O}-\\text{H}$ وتضعفها فيسهل خروج بروتون الهيدروجين وتظهر الصفة الحامضية بوضوح.",
      "- في الكحول: مجموعة الإيثيل معطية للإلكترونات تزيد الشحنة السالبة على الأكسجين وتقوي الرابطة $\\text{O}-\\text{H}$ فلا يتفاعل مع هيدروكسيد الصوديوم.",
      "الكشف عن الفينول: يعطي لوناً بنفسجياً مع محلول كلوريد الحديد III، ويعطي راسباً أبيض مع ماء البروم."
    ],
    "teacherTipEn": "Both ethanol and phenol react with active sodium metal releasing H2 gas, but ONLY phenol reacts with aqueous NaOH.",
    "teacherTipAr": "يتفاعل كل من الإيثانول والفينول مع فلز الصوديوم النشط ويتصاعد غاز الهيدروجين، ولكن الفينول فقط هو الذي يتفاعل مع هيدروكسيد الصوديوم (الصودا الكاوية)."
  },
  {
    "id": "th_chem_ch5_se_10",
    "titleEn": "MoE Example 10: Synthesis and Hydrolysis of Aspirin and Oil of Wintergreen",
    "titleAr": "مثال الوزارة ١٠: تحضير الإسترات الطبية (الأسبرين وزيت المروخ) من حمض الساليسيليك",
    "difficulty": "hots",
    "questionEn": "Salicylic acid contains both a carboxylic acid group ($-\\text{COOH}$) and a phenolic hydroxyl group ($-\\text{OH}$). How are the two medicinal esters, Aspirin (acetylsalicylic acid) and Oil of Wintergreen (methyl salicylate), synthesized from it?",
    "questionAr": "يحتوي حمض الساليسيليك على مجموعتين وظيفيتين: مجموعة كربوكسيل حامضية ($-\\text{COOH}$) ومجموعة هيدروكسيل فينولية ($-\\text{OH}$). كيف يتم تحضير كل من الإسترين الطبيين: الأسبرين وزيت المروخ منه؟",
    "optionsEn": [
      "Aspirin is prepared by reacting salicylic acid with acetic acid (acting through its phenolic $-\\text{OH}$ group); Oil of Wintergreen is prepared by reacting salicylic acid with methanol (acting through its carboxylic $-\\text{COOH}$ group)",
      "Aspirin is prepared with methanol, and Oil of Wintergreen with acetic acid",
      "Both are prepared by reacting salicylic acid with benzene",
      "Aspirin is prepared by reacting phenol with formic acid"
    ],
    "optionsAr": [
      "يحضر الأسبرين بتفاعل حمض الساليسيليك مع حمض الأسيتيك (حيث يتفاعل الساليسيليك كفينول بمجموعة $-\\text{OH}$)؛ ويحضر زيت المروخ بتفاعله مع الميثانول (حيث يتفاعل الساليسيليك كحمض بمجموعة $-\\text{COOH}$)",
      "يحضر الأسبرين مع الميثانول، وزيت المروخ مع حمض الأسيتيك",
      "يحضر كلاهما بتفاعل حمض الساليسيليك مع البنزين العطري",
      "يحضر الأسبرين بتفاعل الفينول مع حمض الفورميك"
    ],
    "correctAnswer": "Aspirin is prepared by reacting salicylic acid with acetic acid (acting through its phenolic $-\\text{OH}$ group); Oil of Wintergreen is prepared by reacting salicylic acid with methanol (acting through its carboxylic $-\\text{COOH}$ group)",
    "correctIndex": 0,
    "hintEn": "In Aspirin (acetylsalicylic acid): Salicylic acid acts as a phenol with its -OH reacting with acetic acid. In Oil of Wintergreen (methyl salicylate): Salicylic acid acts as a carboxylic acid with its -COOH reacting with methanol.",
    "hintAr": "في الأسبرين يتفاعل حمض الساليسيليك كفينول بمجموعته $-\\text{OH}$ مع حمض الأسيتيك؛ وفي زيت المروخ يتفاعل كحمض بمجموعته $-\\text{COOH}$ مع كحول الميثانول.",
    "stepByStepSolutionEn": [
      "Structure of salicylic acid: Benzene ring with adjacent $-\\text{COOH}$ (carboxylic) and $-\\text{OH}$ (phenolic) groups.",
      "1. **Aspirin (Acetylsalicylic Acid):**\n- Reaction: Salicylic acid $+$ Acetic acid $\\to$ Acetylsalicylic acid (Aspirin) $+ \\text{H}_2\\text{O}$.\n- Salicylic acid behaves here as a **phenol**: its phenolic $-\\text{OH}$ group is esterified by the carboxylic group of acetic acid.\n- Medical use: Analgesic, antipyretic, and reduces blood clotting (prevents thrombosis/heart attacks).",
      "2. **Oil of Wintergreen (Methyl Salicylate):**\n- Reaction: Salicylic acid $+$ Methanol $\\to$ Methyl salicylate (Oil of Wintergreen) $+ \\text{H}_2\\text{O}$.\n- Salicylic acid behaves here as an **acid**: its $-\\text{COOH}$ group is esterified by the alcohol group of methanol.\n- Medical use: Topical analgesic ointment absorbed through skin to relieve rheumatic pain."
    ],
    "stepByStepSolutionAr": [
      "تركيب حمض الساليسيليك: حلقة بنزين متصلة بمجموعتين متجاورتين: مجموعة كربوكسيل حامضية ومجموعة هيدروكسيل فينولية.",
      "١. **الأسبرين (أسيتيل حمض الساليسيليك):**\n- التفاعل: حمض الساليسيليك + حمض الأسيتيك $\\to$ أسيتيل حمض الساليسيليك (الأسبرين) + ماء.\n- يسلك حمض الساليسيليك هنا مسلك **الفينول**: فتتفاعل مجموعة الهيدروكسيل الفينولية مع حمض الأسيتيك.\n- الاستخدام الطبي: مسكن للآلام، خافض للحرارة، ويقلل تجلط الدم للوقاية من النوبات القلبية والجلطات.",
      "٢. **زيت المروخ (ساليسيلات الميثيل):**\n- التفاعل: حمض الساليسيليك + كحول ميثيلي $\\to$ ساليسيلات الميثيل (زيت المروخ) + ماء.\n- يسلك حمض الساليسيليك هنا مسلك **الحمض الكربوكسيلي**: فتتفاعل مجموعة الكربوكسيل مع كحول الميثانول.\n- الاستخدام الطبي: دهان موضعي مسكن للآلام الروماتيزمية يمتص سريعاً عبر الجلد."
    ],
    "teacherTipEn": "Taking aspirin on an empty stomach can cause stomach ulcers because its hydrolysis releases salicylic and acetic acids. Buffered aspirin contains aluminum hydroxide to neutralize acidity.",
    "teacherTipAr": "علل: ينصح أطباء القلب بتناول الأسبرين المذاب أو محتوياً على مادة قلوية كـ Al(OH)3؟ لتفادي قرحة المعدة الناتجة عن تحلله المائي إلى حمضي الأسيتيك والساليسيليك."
  }
];

export const thChemCh5Exercises: SolvedProblem[] = [
  {
    "id": "th_chem_ch5_ex_01",
    "titleEn": "Exercise 1: Detection of Carbon and Hydrogen in Organic Compounds",
    "titleAr": "تمرين ١: الكشف عن عنصري الكربون والهيدروجين في المركبات العضوية",
    "difficulty": "easy",
    "questionEn": "When an organic substance is heated strongly with black copper(II) oxide ($\\text{CuO}$), what chemical changes confirm the presence of carbon and hydrogen?",
    "questionAr": "عند تسخين مادة عضوية تسخيناً شديداً مع أكسيد النحاس II الأسود ($\\text{CuO}$)، ما هي التغيرات الكيميائية التي تؤكد وجود عنصري الكربون والهيدروجين؟",
    "optionsEn": [
      "Anhydrous copper(II) sulfate turns from white to blue (confirming hydrogen as $\\text{H}_2\\text{O}$), and clear limewater turns turbid (confirming carbon as $\\text{CO}_2$)",
      "Potassium permanganate turns green, and ammonia fumes evolve",
      "Lead acetate paper turns black, and starch paper turns blue",
      "Silver mirror forms on the test tube wall"
    ],
    "optionsAr": [
      "تتحول كبريتات النحاس اللامائية من الأبيض إلى الأزرق (مؤكدة وجود الهيدروجين كبخار ماء)، ويتعكر ماء الجير الرائق (مؤكداً وجود الكربون كغاز ثاني أكسيد كربون)",
      "تتحول برمنجانات البوتاسيوم للون الأخضر",
      "تسود ورقة أسيتات الرصاص وتزرق ورقة النشا",
      "تتكون مرآة فضية على جدار الأنبوبة"
    ],
    "correctAnswer": "Anhydrous copper(II) sulfate turns from white to blue (confirming hydrogen as $\\text{H}_2\\text{O}$), and clear limewater turns turbid (confirming carbon as $\\text{CO}_2$)",
    "correctIndex": 0,
    "hintEn": "CuO oxidizes hydrogen to H2O (turns white anhydrous CuSO4 blue) and carbon to CO2 (turbid limewater CaCO3).",
    "hintAr": "أكسيد النحاس II عامل مؤكسد يؤكسد هيدروجين المادة العضوية إلى بخار ماء يحول كبريتات النحاس اللامائية البيضاء إلى زرقاء، ويؤكسد الكربون إلى $\\text{CO}_2$ يعكر ماء الجير.",
    "stepByStepSolutionEn": [
      "CuO oxidizes hydrogen to H2O (turns white anhydrous CuSO4 blue) and carbon to CO2 (turbid limewater CaCO3).",
      "Therefore, the correct answer is: Anhydrous copper(II) sulfate turns from white to blue (confirming hydrogen as $\\text{H}_2\\text{O}$), and clear limewater turns turbid (confirming carbon as $\\text{CO}_2$)"
    ],
    "stepByStepSolutionAr": [
      "أكسيد النحاس II عامل مؤكسد يؤكسد هيدروجين المادة العضوية إلى بخار ماء يحول كبريتات النحاس اللامائية البيضاء إلى زرقاء، ويؤكسد الكربون إلى $\\text{CO}_2$ يعكر ماء الجير.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: تتحول كبريتات النحاس اللامائية من الأبيض إلى الأزرق (مؤكدة وجود الهيدروجين كبخار ماء)، ويتعكر ماء الجير الرائق (مؤكداً وجود الكربون كغاز ثاني أكسيد كربون)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_02",
    "titleEn": "Exercise 2: General Molecular Formula of Hydrocarbon Families",
    "titleAr": "تمرين ٢: القوانين الجزيئية العامة لسلاسل الهيدروكربونات الأليفاتية",
    "difficulty": "easy",
    "questionEn": "What are the general molecular formulas for open-chain Alkanes, Alkenes, and Alkynes, respectively?",
    "questionAr": "ما هي القوانين الجزيئية العامة لسلاسل الهيدروكربونات الأليفاتية مفتوحة السلسلة: الألكانات، والألكينات، والألكاينات على الترتيب؟",
    "optionsEn": [
      "$\\text{Alkanes: } \\text{C}_n\\text{H}_{2n+2}, \\quad \\text{Alkenes: } \\text{C}_n\\text{H}_{2n}, \\quad \\text{Alkynes: } \\text{C}_n\\text{H}_{2n-2}$",
      "$\\text{Alkanes: } \\text{C}_n\\text{H}_{2n}, \\quad \\text{Alkenes: } \\text{C}_n\\text{H}_{2n+2}, \\quad \\text{Alkynes: } \\text{C}_n\\text{H}_{2n-4}$",
      "$\\text{Alkanes: } \\text{C}_n\\text{H}_{2n-2}, \\quad \\text{Alkenes: } \\text{C}_n\\text{H}_{2n}, \\quad \\text{Alkynes: } \\text{C}_n\\text{H}_{2n+2}$",
      "$\\text{Alkanes: } \\text{C}_n\\text{H}_n, \\quad \\text{Alkenes: } \\text{C}_{2n}\\text{H}_{2n}, \\quad \\text{Alkynes: } \\text{C}_n\\text{H}_{2n-1}$"
    ],
    "optionsAr": [
      "$\\text{ألكانات: } \\text{C}_n\\text{H}_{2n+2}, \\quad \\text{ألكينات: } \\text{C}_n\\text{H}_{2n}, \\quad \\text{ألكاينات: } \\text{C}_n\\text{H}_{2n-2}$",
      "$\\text{ألكانات: } \\text{C}_n\\text{H}_{2n}, \\quad \\text{ألكينات: } \\text{C}_n\\text{H}_{2n+2}, \\quad \\text{ألكاينات: } \\text{C}_n\\text{H}_{2n-4}$",
      "$\\text{ألكانات: } \\text{C}_n\\text{H}_{2n-2}, \\quad \\text{ألكينات: } \\text{C}_n\\text{H}_{2n}, \\quad \\text{ألكاينات: } \\text{C}_n\\text{H}_{2n+2}$",
      "$\\text{ألكانات: } \\text{C}_n\\text{H}_n, \\quad \\text{ألكينات: } \\text{C}_{2n}\\text{H}_{2n}, \\quad \\text{ألكاينات: } \\text{C}_n\\text{H}_{2n-1}$"
    ],
    "correctAnswer": "$\\text{Alkanes: } \\text{C}_n\\text{H}_{2n+2}, \\quad \\text{Alkenes: } \\text{C}_n\\text{H}_{2n}, \\quad \\text{Alkynes: } \\text{C}_n\\text{H}_{2n-2}$",
    "correctIndex": 0,
    "hintEn": "Alkanes are saturated (2n+2); Alkenes have 1 double bond (2n); Alkynes have 1 triple bond (2n-2).",
    "hintAr": "الألكانات مشبعة بروابط أحادية سيجما صيغتها $\\text{C}_n\\text{H}_{2n+2}$؛ الألكينات برابطة مزدوجة $\\text{C}_n\\text{H}_{2n}$؛ الألكاينات برابطة ثلاثية $\\text{C}_n\\text{H}_{2n-2}$.",
    "stepByStepSolutionEn": [
      "Alkanes are saturated (2n+2); Alkenes have 1 double bond (2n); Alkynes have 1 triple bond (2n-2).",
      "Therefore, the correct answer is: $\\text{Alkanes: } \\text{C}_n\\text{H}_{2n+2}, \\quad \\text{Alkenes: } \\text{C}_n\\text{H}_{2n}, \\quad \\text{Alkynes: } \\text{C}_n\\text{H}_{2n-2}$"
    ],
    "stepByStepSolutionAr": [
      "الألكانات مشبعة بروابط أحادية سيجما صيغتها $\\text{C}_n\\text{H}_{2n+2}$؛ الألكينات برابطة مزدوجة $\\text{C}_n\\text{H}_{2n}$؛ الألكاينات برابطة ثلاثية $\\text{C}_n\\text{H}_{2n-2}$.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $\\text{ألكانات: } \\text{C}_n\\text{H}_{2n+2}, \\quad \\text{ألكينات: } \\text{C}_n\\text{H}_{2n}, \\quad \\text{ألكاينات: } \\text{C}_n\\text{H}_{2n-2}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_03",
    "titleEn": "Exercise 3: Laboratory Preparation of Ethylene Gas",
    "titleAr": "تمرين ٣: التحضير المعملي لغاز الإيثين ونزع الماء من الإيثانول",
    "difficulty": "easy",
    "questionEn": "At what temperature does concentrated sulfuric acid ($\\text{H}_2\\text{SO}_4$) dehydrate ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$) to produce ethene gas ($\\text{C}_2\\text{H}_4$)?",
    "questionAr": "عند أي درجة حرارة ينزع حمض الكبريتيك المركز جزيء ماء من الكحول الإيثيلي ($\\text{C}_2\\text{H}_5\\text{OH}$) لإنتاج غاز الإيثين ($\\text{C}_2\\text{H}_4$) في المختبر؟",
    "optionsEn": [
      "$180^\\circ\\text{C}$",
      "$80^\\circ\\text{C}$",
      "$140^\\circ\\text{C}$",
      "$100^\\circ\\text{C}$"
    ],
    "optionsAr": [
      "$180^\\circ\\text{C}$",
      "$80^\\circ\\text{C}$",
      "$140^\\circ\\text{C}$",
      "$100^\\circ\\text{C}$"
    ],
    "correctAnswer": "$180^\\circ\\text{C}$",
    "correctIndex": 0,
    "hintEn": "At 80 C: forms ethyl hydrogen sulfate (C2H5OSO3H). At 140 C: forms diethyl ether. At 180 C: thermal decomposition of ethyl hydrogen sulfate yields ethene (C2H4).",
    "hintAr": "عند $80^\\circ\\text{C}$ تتكون كبريتات الإيثيل الهيدروجينية، وعند $140^\\circ\\text{C}$ يتكون إيثر ثنائي الإيثيل بنزع ماء من جزيئي كحول، وعند $180^\\circ\\text{C}$ تنحل كبريتات الإيثيل الهيدروجينية حرارياً لتعطي غاز الإيثين.",
    "stepByStepSolutionEn": [
      "At 80 C: forms ethyl hydrogen sulfate (C2H5OSO3H). At 140 C: forms diethyl ether. At 180 C: thermal decomposition of ethyl hydrogen sulfate yields ethene (C2H4).",
      "Therefore, the correct answer is: $180^\\circ\\text{C}$"
    ],
    "stepByStepSolutionAr": [
      "عند $80^\\circ\\text{C}$ تتكون كبريتات الإيثيل الهيدروجينية، وعند $140^\\circ\\text{C}$ يتكون إيثر ثنائي الإيثيل بنزع ماء من جزيئي كحول، وعند $180^\\circ\\text{C}$ تنحل كبريتات الإيثيل الهيدروجينية حرارياً لتعطي غاز الإيثين.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $180^\\circ\\text{C}$"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_04",
    "titleEn": "Exercise 4: Oxyacetylene Flame in Metal Welding and Cutting",
    "titleAr": "تمرين ٤: لهب الأكسي أسيتيلين واستخدامه في لحام وقطع المعادن",
    "difficulty": "easy",
    "questionEn": "Why is the oxyacetylene flame used extensively in industry for cutting and welding metals?",
    "questionAr": "علل: يستخدم لهب الأكسي أسيتيلين الناتج عن احتراق الأسيتيلين في وفرة من الأكسجين في لحام وقطع المعادن؟",
    "optionsEn": [
      "Because its combustion temperature reaches approximately $3000^\\circ\\text{C}$, which exceeds the melting point of steel and most industrial metals",
      "Because it does not produce any heat",
      "Because it absorbs heat from surrounding metals",
      "Because it produces liquid hydrogen"
    ],
    "optionsAr": [
      "لأن درجة حرارة اللهب تصل إلى حوالي $3000^\\circ\\text{C}$ وهي حرارة كافية تماماً لصهر الحديد والصلب ومعظم المعادن الصناعية",
      "لأنه لا يولد أي حرارة",
      "لأنه يمتص الحرارة من المعادن",
      "لأنه ينتج هيدروجيناً سائلاً"
    ],
    "correctAnswer": "Because its combustion temperature reaches approximately $3000^\\circ\\text{C}$, which exceeds the melting point of steel and most industrial metals",
    "correctIndex": 0,
    "hintEn": "Combustion of ethyne in excess oxygen: 2 C2H2 + 5 O2 -> 4 CO2 + 2 H2O + Heat (3000 C).",
    "hintAr": "يحترق الأسيتيلين في وفرة من الأكسجين باحتراق تام طارد للحرارة بشدة، فتصل درجة حرارة لهب الأكسي أسيتيلين إلى نحو $3000^\\circ\\text{C}$ وهي كافية لصهر المعادن ولحامها.",
    "stepByStepSolutionEn": [
      "Combustion of ethyne in excess oxygen: 2 C2H2 + 5 O2 -> 4 CO2 + 2 H2O + Heat (3000 C).",
      "Therefore, the correct answer is: Because its combustion temperature reaches approximately $3000^\\circ\\text{C}$, which exceeds the melting point of steel and most industrial metals"
    ],
    "stepByStepSolutionAr": [
      "يحترق الأسيتيلين في وفرة من الأكسجين باحتراق تام طارد للحرارة بشدة، فتصل درجة حرارة لهب الأكسي أسيتيلين إلى نحو $3000^\\circ\\text{C}$ وهي كافية لصهر المعادن ولحامها.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لأن درجة حرارة اللهب تصل إلى حوالي $3000^\\circ\\text{C}$ وهي حرارة كافية تماماً لصهر الحديد والصلب ومعظم المعادن الصناعية"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_05",
    "titleEn": "Exercise 5: Preparation of Acetylene from Calcium Carbide",
    "titleAr": "تمرين ٥: تحضير غاز الأسيتيلين بتنقيط الماء على كربيد الكالسيوم",
    "difficulty": "medium",
    "questionEn": "When water is added dropwise onto calcium carbide ($\\text{CaC}_2$) in the laboratory, ethyne gas evolves. Why is the evolved gas first bubbled through a wash bottle containing copper(II) sulfate in dilute sulfuric acid?",
    "questionAr": "عند تحضير غاز الإيثاين بتنقيط الماء على كربيد الكالسيوم ($\\text{CaC}_2$)، لماذا يمرر الغاز الناتج أولاً على محلول كبريتات النحاس II في حمض الكبريتيك المخفف قبل جمعه؟",
    "optionsEn": [
      "To remove phosphine ($\\text{PH}_3$) and hydrogen sulfide ($\\text{H}_2\\text{S}$) gas impurities originating from calcium carbide",
      "To dry the gas from moisture",
      "To convert ethyne into methane",
      "To color the gas yellow"
    ],
    "optionsAr": [
      "للتخلص من شوائب غازي الفوسفين ($\\text{PH}_3$) وكبريتيد الهيدروجين ($\\text{H}_2\\text{S}$) الناتجة عن الشوائب الموجودة في كربيد الكالسيوم",
      "لتجفيف الغاز من بخار الماء",
      "لتحويل الإيثاين إلى ميثان",
      "لتلوين الغاز باللون الأصفر"
    ],
    "correctAnswer": "To remove phosphine ($\\text{PH}_3$) and hydrogen sulfide ($\\text{H}_2\\text{S}$) gas impurities originating from calcium carbide",
    "correctIndex": 0,
    "hintEn": "Commercial CaC2 contains phosphorus and sulfur impurities that produce toxic PH3 and H2S gases upon hydrolysis, which are absorbed by CuSO4 / H2SO4.",
    "hintAr": "كربيد الكالسيوم يحتوي على شوائب من الفوسفور والكبريت، فتنتج غازات الفوسفين $\\text{PH}_3$ وكبريتيد الهيدروجين $\\text{H}_2\\text{S}$ السامة وتزال بإمرارها في كبريتات النحاس المحمضة.",
    "stepByStepSolutionEn": [
      "Commercial CaC2 contains phosphorus and sulfur impurities that produce toxic PH3 and H2S gases upon hydrolysis, which are absorbed by CuSO4 / H2SO4.",
      "Therefore, the correct answer is: To remove phosphine ($\\text{PH}_3$) and hydrogen sulfide ($\\text{H}_2\\text{S}$) gas impurities originating from calcium carbide"
    ],
    "stepByStepSolutionAr": [
      "كربيد الكالسيوم يحتوي على شوائب من الفوسفور والكبريت، فتنتج غازات الفوسفين $\\text{PH}_3$ وكبريتيد الهيدروجين $\\text{H}_2\\text{S}$ السامة وتزال بإمرارها في كبريتات النحاس المحمضة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: للتخلص من شوائب غازي الفوسفين ($\\text{PH}_3$) وكبريتيد الهيدروجين ($\\text{H}_2\\text{S}$) الناتجة عن الشوائب الموجودة في كربيد الكالسيوم"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_06",
    "titleEn": "Exercise 6: Cyclic Trimerization of Ethyne to Benzene",
    "titleAr": "تمرين ٦: البلمرة الثلاثية الحلقية للإيثاين لتحضير البنزين العطري",
    "difficulty": "medium",
    "questionEn": "What organic aromatic product is obtained when ethyne gas (acetylene) is passed through a red-hot nickel tube?",
    "questionAr": "ما هو المركب الأروماتي الناتج عند إمرار غاز الإيثاين (الأسيتيلين) في أنبوبة من النيكل مسخنة لدرجة الاحمرار؟",
    "optionsEn": [
      "Benzene ($\\text{C}_6\\text{H}_6$)",
      "Toluene ($\\text{C}_7\\text{H}_8$)",
      "Cyclohexane ($\\text{C}_6\\text{H}_{12}$)",
      "Hexane ($\\text{C}_6\\text{H}_{14}$)"
    ],
    "optionsAr": [
      "البنزين العطري ($\\text{C}_6\\text{H}_6$)",
      "التولوين ($\\text{C}_7\\text{H}_8$)",
      "الهكسان الحلقي ($\\text{C}_6\\text{H}_{12}$)",
      "الهكسان العادي ($\\text{C}_6\\text{H}_{14}$)"
    ],
    "correctAnswer": "Benzene ($\\text{C}_6\\text{H}_6$)",
    "correctIndex": 0,
    "hintEn": "3 C2H2 -[red-hot Ni tube]-> C6H6 (benzene). This is cyclic trimerization.",
    "hintAr": "المعادلة: $3\\text{C}_2\\text{H}_2 \\xrightarrow{\\text{أنبوبة نيكل مسخنة للاحمرار}} \\text{C}_6\\text{H}_6$. تسمى هذه العملية بالبلمرة الحلقية الثلاثية للأسيتيلين لإنتاج البنزين العطري.",
    "stepByStepSolutionEn": [
      "3 C2H2 -[red-hot Ni tube]-> C6H6 (benzene). This is cyclic trimerization.",
      "Therefore, the correct answer is: Benzene ($\\text{C}_6\\text{H}_6$)"
    ],
    "stepByStepSolutionAr": [
      "المعادلة: $3\\text{C}_2\\text{H}_2 \\xrightarrow{\\text{أنبوبة نيكل مسخنة للاحمرار}} \\text{C}_6\\text{H}_6$. تسمى هذه العملية بالبلمرة الحلقية الثلاثية للأسيتيلين لإنتاج البنزين العطري.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: البنزين العطري ($\\text{C}_6\\text{H}_6$)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_07",
    "titleEn": "Exercise 7: Halogenation of Benzene (Addition vs Substitution)",
    "titleAr": "تمرين ٧: هلجنة البنزين العطري بالإضافة (جامكسان) وبالاستبدال (كلوروبنزين)",
    "difficulty": "medium",
    "questionEn": "Benzene reacts with chlorine under two distinct conditions: (1) In UV sunlight without a catalyst; and (2) In the presence of an iron(III) chloride catalyst ($\\text{FeCl}_3$). What are the products of reaction 1 and reaction 2?",
    "questionAr": "يتفاعل البنزين العطري مع الكلور تحت شرطين مختلفين: (1) في وجود الأشعة فوق البنفسجية فقط بدون عامل حفاز؛ (2) في وجود كلوريد الحديد III كعامل حفاز. ما هما الناتجان؟",
    "optionsEn": [
      "(1) Gammaxane (hexachlorocyclohexane, addition product used as insecticide); (2) Chlorobenzene (substitution product)",
      "(1) Chlorobenzene; (2) Gammaxane",
      "(1) Toluene; (2) Nitrobenzene",
      "(1) Benzoic acid; (2) Benzyl chloride"
    ],
    "optionsAr": [
      "(1) الجامكسان (سداسي كلورو هكسان حلقي - تفاعل إضافة يستخدم كمبيد حشري)؛ (2) كلوروبنزين (تفاعل استبدال)",
      "(1) كلوروبنزين؛ (2) الجامكسان",
      "(1) تولوين؛ (2) نيتروبنزين",
      "(1) حمض بنزويك؛ (2) كلوريد البنزيل"
    ],
    "correctAnswer": "(1) Gammaxane (hexachlorocyclohexane, addition product used as insecticide); (2) Chlorobenzene (substitution product)",
    "correctIndex": 0,
    "hintEn": "Under UV only: 3 Cl2 add across benzene's double bonds yielding C6H6Cl6 (Gammaxane). With FeCl3 catalyst: electrophilic substitution yields C6H5Cl + HCl.",
    "hintAr": "في ضوء الشمس المباشر (UV) فقط يحدث تفاعل إضافة لـ 3 مول كلور ويتكون سداسي كلورو هكسان حلقي $\\text{C}_6\\text{H}_6\\text{Cl}_6$ (الجامكسان)؛ أما في وجود $\\text{FeCl}_3$ فيحدث استبدال ويتكون كلوروبنزين.",
    "stepByStepSolutionEn": [
      "Under UV only: 3 Cl2 add across benzene's double bonds yielding C6H6Cl6 (Gammaxane). With FeCl3 catalyst: electrophilic substitution yields C6H5Cl + HCl.",
      "Therefore, the correct answer is: (1) Gammaxane (hexachlorocyclohexane, addition product used as insecticide); (2) Chlorobenzene (substitution product)"
    ],
    "stepByStepSolutionAr": [
      "في ضوء الشمس المباشر (UV) فقط يحدث تفاعل إضافة لـ 3 مول كلور ويتكون سداسي كلورو هكسان حلقي $\\text{C}_6\\text{H}_6\\text{Cl}_6$ (الجامكسان)؛ أما في وجود $\\text{FeCl}_3$ فيحدث استبدال ويتكون كلوروبنزين.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: (1) الجامكسان (سداسي كلورو هكسان حلقي - تفاعل إضافة يستخدم كمبيد حشري)؛ (2) كلوروبنزين (تفاعل استبدال)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_08",
    "titleEn": "Exercise 8: Nitration of Phenol to Picric Acid",
    "titleAr": "تمرين ٨: نيترة الفينول لتحضير حمض البكريك واستخداماته",
    "difficulty": "medium",
    "questionEn": "When phenol is reacted with concentrated nitric acid in the presence of concentrated sulfuric acid, what compound is formed and what are its dual applications?",
    "questionAr": "عند تفاعل الفينول مع حمض النيتريك المركز في وجود حمض الكبريتيك المركز، ما المركب المتكون وما استخدامه المزدوج؟",
    "optionsEn": [
      "$2,4,6\\text{-trinitrophenol}$ (Picric acid), used as a powerful explosive and as an antiseptic dressing for burns",
      "Nitrobenzene, used in shoe polish",
      "Gammaxane, used as a rat poison",
      "Aspirin, used for relieving headaches"
    ],
    "optionsAr": [
      "$2,4,6\\text{-ثلاثي نيتروفينول}$ (حمض البكريك)، ويستخدم كمادة شديدة الانفجار ومطهر لعلاج الحروق",
      "نيتروبنزين، ويستخدم في تلميع الجلود",
      "الجامكسان، ويستخدم كمبيد",
      "الأسبرين، ويستخدم كمسكن للصداع"
    ],
    "correctAnswer": "$2,4,6\\text{-trinitrophenol}$ (Picric acid), used as a powerful explosive and as an antiseptic dressing for burns",
    "correctIndex": 0,
    "hintEn": "Phenol + 3 HNO3 -[H2SO4]-> 2,4,6-trinitrophenol (Picric acid) + 3 H2O. Colors skin yellow and relieves burns; also an explosive.",
    "hintAr": "نيترة الفينول تعطي $2,4,6\\text{-ثلاثي نيتروفينول}$ (حمض البكريك)، وهو مادة متفجرة ويستخدم كمحلول أصفر مطهر لعلاج الحروق الشديدة حيث يصبغ الجلد بلون أصفر لا يزول إلا بتجدد خلايا الجلد.",
    "stepByStepSolutionEn": [
      "Phenol + 3 HNO3 -[H2SO4]-> 2,4,6-trinitrophenol (Picric acid) + 3 H2O. Colors skin yellow and relieves burns; also an explosive.",
      "Therefore, the correct answer is: $2,4,6\\text{-trinitrophenol}$ (Picric acid), used as a powerful explosive and as an antiseptic dressing for burns"
    ],
    "stepByStepSolutionAr": [
      "نيترة الفينول تعطي $2,4,6\\text{-ثلاثي نيتروفينول}$ (حمض البكريك)، وهو مادة متفجرة ويستخدم كمحلول أصفر مطهر لعلاج الحروق الشديدة حيث يصبغ الجلد بلون أصفر لا يزول إلا بتجدد خلايا الجلد.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: $2,4,6\\text{-ثلاثي نيتروفينول}$ (حمض البكريك)، ويستخدم كمادة شديدة الانفجار ومطهر لعلاج الحروق"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_09",
    "titleEn": "Exercise 9: Chemical Distinction Between Ethanol and Phenol",
    "titleAr": "تمرين ٩: التمييز العملي بين الكحول الإيثيلي والفينول بواسطة كلوريد الحديد III",
    "difficulty": "easy",
    "questionEn": "How can one practically distinguish between a solution of ethanol and a solution of phenol in the laboratory using iron(III) chloride solution ($\\text{FeCl}_3$)?",
    "questionAr": "كيف يمكن التمييز عملياً بين محلول الإيثانول ومحلول الفينول في المختبر باستخدام محلول كلوريد الحديد III ($\\text{FeCl}_3$)؟",
    "optionsEn": [
      "$\\text{FeCl}_3$ produces a distinctive violet color with phenol, whereas no color change occurs with ethanol",
      "$\\text{FeCl}_3$ forms a white precipitate with ethanol and no change with phenol",
      "$\\text{FeCl}_3$ decolors phenol completely",
      "Both solutions produce a brown ring"
    ],
    "optionsAr": [
      "يعطي محلول $\\text{FeCl}_3$ لوناً بنفسجياً مميزاً مع الفينول، بينما لا يحدث أي تغير في اللون مع الإيثانول",
      "يعطي $\\text{FeCl}_3$ راسباً أبيض مع الإيثانول",
      "يزيل $\\text{FeCl}_3$ لون الفينول تماماً",
      "تتكون حلقة بنية مع كلا المحلولين"
    ],
    "correctAnswer": "$\\text{FeCl}_3$ produces a distinctive violet color with phenol, whereas no color change occurs with ethanol",
    "correctIndex": 0,
    "hintEn": "Phenol + FeCl3 -> violet colored complex. Another test is bromine water, which gives a white precipitate with phenol.",
    "hintAr": "الكشف المميز للفينول: إضافة قطرات من محلول $\\text{FeCl}_3$ تعطي لوناً بنفسجياً رائعاً مع الفينول ولا تعطي شيئاً مع الكحول. كما يعطي الفينول راسباً أبيض مع ماء البروم.",
    "stepByStepSolutionEn": [
      "Phenol + FeCl3 -> violet colored complex. Another test is bromine water, which gives a white precipitate with phenol.",
      "Therefore, the correct answer is: $\\text{FeCl}_3$ produces a distinctive violet color with phenol, whereas no color change occurs with ethanol"
    ],
    "stepByStepSolutionAr": [
      "الكشف المميز للفينول: إضافة قطرات من محلول $\\text{FeCl}_3$ تعطي لوناً بنفسجياً رائعاً مع الفينول ولا تعطي شيئاً مع الكحول. كما يعطي الفينول راسباً أبيض مع ماء البروم.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: يعطي محلول $\\text{FeCl}_3$ لوناً بنفسجياً مميزاً مع الفينول، بينما لا يحدث أي تغير في اللون مع الإيثانول"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_10",
    "titleEn": "Exercise 10: Saponification Reaction of Esters",
    "titleAr": "تمرين ١٠: التحلل المائي القاعدي للإسترات (التصبن)",
    "difficulty": "easy",
    "questionEn": "What is saponification, and what chemical products are obtained from the alkaline hydrolysis of natural fats and oils with sodium hydroxide ($\\text{NaOH}$)?",
    "questionAr": "ما هو التصبن، وما هي النواتج الكيميائية للتحلل المائي في وسط قلوي للزيوت والدهون بواسطة هيدروكسيد الصوديوم؟",
    "optionsEn": [
      "Soap (sodium salts of high fatty acids) and Glycerol (propane-1,2,3-triol)",
      "Ethanol and acetic acid",
      "Methane gas and calcium carbonate",
      "Aspirin and sodium bicarbonate"
    ],
    "optionsAr": [
      "الصابون (أملاح الصوديوم للأحماض الدهنية العالية) والجلسرين (بروبان-1،2،3-ثلاثي أول)",
      "الإيثانول وحمض الأسيتيك",
      "غاز الميثان وكربونات الكالسيوم",
      "الأسبرين وبيكربونات الصوديوم"
    ],
    "correctAnswer": "Soap (sodium salts of high fatty acids) and Glycerol (propane-1,2,3-triol)",
    "correctIndex": 0,
    "hintEn": "Triglyceride (fat/oil) + 3 NaOH -> Glycerol + 3 Soap molecules (R-COONa).",
    "hintAr": "التصبن هو التحلل المائي لإستر ثلاثي الجليسريد (الدهن أو الزيت) في وسط قلوي من الصودا الكاوية، والناتج هو الصابون (ملح الصوديوم للحمض الدهني) والجلسرين (كحول ثلاثي الهيدروكسيل).",
    "stepByStepSolutionEn": [
      "Triglyceride (fat/oil) + 3 NaOH -> Glycerol + 3 Soap molecules (R-COONa).",
      "Therefore, the correct answer is: Soap (sodium salts of high fatty acids) and Glycerol (propane-1,2,3-triol)"
    ],
    "stepByStepSolutionAr": [
      "التصبن هو التحلل المائي لإستر ثلاثي الجليسريد (الدهن أو الزيت) في وسط قلوي من الصودا الكاوية، والناتج هو الصابون (ملح الصوديوم للحمض الدهني) والجلسرين (كحول ثلاثي الهيدروكسيل).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: الصابون (أملاح الصوديوم للأحماض الدهنية العالية) والجلسرين (بروبان-1،2،3-ثلاثي أول)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_11",
    "titleEn": "Exercise 11: Esterification Equilibrium and Role of Concentrated H2SO4",
    "titleAr": "تمرين ١١: تفاعل القسطرة ودور حمض الكبريتيك المركز في نزع الماء",
    "difficulty": "medium",
    "questionEn": "Why is concentrated sulfuric acid ($\\text{H}_2\\text{SO}_4$) added during the preparation of ethyl acetate ester from acetic acid and ethanol?",
    "questionAr": "علل: يضاف حمض الكبريتيك المركز أثناء تفاعل حمض الأسيتيك مع الكحول الإيثيلي لتحضير إستر أسيتات الإيثيل؟",
    "optionsEn": [
      "To absorb produced water and prevent the reverse reaction, driving the equilibrium forward to increase the ester yield",
      "To act as a primary reactant that supplies oxygen atoms to the ester",
      "To neutralize acetic acid completely",
      "To prevent ethyl acetate from evaporating"
    ],
    "optionsAr": [
      "لامتصاص الماء الناتج ومنع التفاعل العكسي، مما يزيح موضع الاتزان طردياً ويزيد من محصول الإستر",
      "ليعمل كمتفاعل أساسي يزود الإستر بذرات الأكسجين",
      "لمعادلة حمض الأسيتيك تماماً",
      "لمنع تطاير إستر أسيتات الإيثيل"
    ],
    "correctAnswer": "To absorb produced water and prevent the reverse reaction, driving the equilibrium forward to increase the ester yield",
    "correctIndex": 0,
    "hintEn": "CH3COOH + C2H5OH <=> CH3COOC2H5 + H2O. Concentrated H2SO4 is a dehydrating agent that removes H2O, shifting equilibrium right by Le Chatelier.",
    "hintAr": "تفاعل القسطرة تفاعل انعكاسي: $\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$، ويعمل حمض الكبريتيك المركز كمادة نازعة للماء تمنع التفاعل العكسي وتزيد كمية الإستر.",
    "stepByStepSolutionEn": [
      "CH3COOH + C2H5OH <=> CH3COOC2H5 + H2O. Concentrated H2SO4 is a dehydrating agent that removes H2O, shifting equilibrium right by Le Chatelier.",
      "Therefore, the correct answer is: To absorb produced water and prevent the reverse reaction, driving the equilibrium forward to increase the ester yield"
    ],
    "stepByStepSolutionAr": [
      "تفاعل القسطرة تفاعل انعكاسي: $\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$، ويعمل حمض الكبريتيك المركز كمادة نازعة للماء تمنع التفاعل العكسي وتزيد كمية الإستر.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: لامتصاص الماء الناتج ومنع التفاعل العكسي، مما يزيح موضع الاتزان طردياً ويزيد من محصول الإستر"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_12",
    "titleEn": "Exercise 12: Dacron Polyester Synthesis and Functional Groups",
    "titleAr": "تمرين ١٢: تحضير ألياف الداكرون ومجموعاتها الوظيفية (بلمرة بالتكاثف)",
    "difficulty": "medium",
    "questionEn": "Dacron is a condensation polyester fiber used in synthetic arteries and heart valves. Which two monomers condense to form Dacron?",
    "questionAr": "ألياف الداكرون هي بولي إستر ناتج عن بلمرة بالتكاثف وتستخدم في صناعة الشرايين الاصطناعية وصمامات القلب. ما هما المونومران اللذان يتكاثفان لتكوين الداكرون؟",
    "optionsEn": [
      "Terephthalic acid (benzene-1,4-dicarboxylic acid) and Ethylene glycol (ethane-1,2-diol)",
      "Acetic acid and ethanol",
      "Benzoic acid and methanol",
      "Salicylic acid and phenol"
    ],
    "optionsAr": [
      "حمض التيرفثاليك (حمض بنزين-1،4-ثنائي الكربوكسيل) والإيثيلين جليكول (إيثان-1،2-ثنائي أول)",
      "حمض الأسيتيك والإيثانول",
      "حمض البنزويك والميثانول",
      "حمض الساليسيليك والفينول"
    ],
    "correctAnswer": "Terephthalic acid (benzene-1,4-dicarboxylic acid) and Ethylene glycol (ethane-1,2-diol)",
    "correctIndex": 0,
    "hintEn": "Terephthalic acid has two -COOH groups; Ethylene glycol has two -OH groups. Condensation polymerization releases H2O and forms ester linkages continuously at both ends.",
    "hintAr": "حمض التيرفثاليك حمض ثنائي الكربوكسيل، والإيثيلين جليكول كحول ثنائي الهيدروكسيل؛ يتكاثفان بفقد جزيء ماء وتتكرر روابط الإستر على الطرفين لإنتاج ألياف الداكرون الخاملة كيميائياً.",
    "stepByStepSolutionEn": [
      "Terephthalic acid has two -COOH groups; Ethylene glycol has two -OH groups. Condensation polymerization releases H2O and forms ester linkages continuously at both ends.",
      "Therefore, the correct answer is: Terephthalic acid (benzene-1,4-dicarboxylic acid) and Ethylene glycol (ethane-1,2-diol)"
    ],
    "stepByStepSolutionAr": [
      "حمض التيرفثاليك حمض ثنائي الكربوكسيل، والإيثيلين جليكول كحول ثنائي الهيدروكسيل؛ يتكاثفان بفقد جزيء ماء وتتكرر روابط الإستر على الطرفين لإنتاج ألياف الداكرون الخاملة كيميائياً.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: حمض التيرفثاليك (حمض بنزين-1،4-ثنائي الكربوكسيل) والإيثيلين جليكول (إيثان-1،2-ثنائي أول)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_13",
    "titleEn": "Exercise 13: Acidity Hierarchy of Organic Compounds",
    "titleAr": "تمرين ١٣: تدرج الصفة الحامضية بين الأحماض والفينولات والكحولات",
    "difficulty": "medium",
    "questionEn": "Which of the following correctly arranges the given substances in descending order of chemical acidity?",
    "questionAr": "أي الترتيبات الآتية يمثل الترتيب التنازلي الصحيح للمواد حسب قوتها الحامضية؟",
    "optionsEn": [
      "Hydrochloric acid > Benzoic acid > Acetic acid > Phenol > Ethanol",
      "Ethanol > Phenol > Acetic acid > Benzoic acid > Hydrochloric acid",
      "Phenol > Acetic acid > Benzoic acid > Ethanol > Hydrochloric acid",
      "Acetic acid > Hydrochloric acid > Ethanol > Phenol > Benzoic acid"
    ],
    "optionsAr": [
      "حمض الهيدروكلوريك > حمض البنزويك > حمض الأسيتيك > الفينول > الإيثانول",
      "الإيثانول > الفينول > حمض الأسيتيك > حمض البنزويك > حمض الهيدروكلوريك",
      "الفينول > حمض الأسيتيك > حمض البنزويك > الإيثانول > حمض الهيدروكلوريك",
      "حمض الأسيتيك > حمض الهيدروكلوريك > الإيثانول > الفينول > حمض البنزويك"
    ],
    "correctAnswer": "Hydrochloric acid > Benzoic acid > Acetic acid > Phenol > Ethanol",
    "correctIndex": 0,
    "hintEn": "Mineral acids (HCl) > Aromatic carboxylic acids (Benzoic) > Aliphatic carboxylic acids (Acetic) > Phenols (Carbolic) > Alcohols (Ethanol).",
    "hintAr": "الأحماض المعدنية (HCl) أقوى من الأحماض الكربوكسيلية الأروماتية (البنزويك)، والأخيرة أقوى من الأليفاتية (الأسيتيك)، ثم الفينولات (حمض الكربوليك)، وأخيراً الكحولات (الإيثانول المتعادل).",
    "stepByStepSolutionEn": [
      "Mineral acids (HCl) > Aromatic carboxylic acids (Benzoic) > Aliphatic carboxylic acids (Acetic) > Phenols (Carbolic) > Alcohols (Ethanol).",
      "Therefore, the correct answer is: Hydrochloric acid > Benzoic acid > Acetic acid > Phenol > Ethanol"
    ],
    "stepByStepSolutionAr": [
      "الأحماض المعدنية (HCl) أقوى من الأحماض الكربوكسيلية الأروماتية (البنزويك)، والأخيرة أقوى من الأليفاتية (الأسيتيك)، ثم الفينولات (حمض الكربوليك)، وأخيراً الكحولات (الإيثانول المتعادل).",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: حمض الهيدروكلوريك > حمض البنزويك > حمض الأسيتيك > الفينول > الإيثانول"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_14",
    "titleEn": "Exercise 14: Origin of Oxygen Atom in Ester Formation",
    "titleAr": "تمرين ١٤: إثبات مصدر ذرة الأكسجين في الماء الناتج من القسطرة (نظير O-18)",
    "difficulty": "hots",
    "questionEn": "Using oxygen isotope $^{18}\\text{O}$ in ethyl alcohol during esterification with acetic acid containing normal $^{16}\\text{O}$, it was found that $^{18}\\text{O}$ is present exclusively in the ester, not in the formed water. What does this definitively prove?",
    "questionAr": "باستخدام كحول إيثيلي يحتوي على نظير الأكسجين $^{18}\\text{O}$ في تفاعل القسطرة مع حمض الأسيتيك العادي $^{16}\\text{O}$، وجد أن نظير $^{18}\\text{O}$ يظهر في الإستر الناتج ولا يظهر في الماء. ماذا يثبت ذلك قاطعاً؟",
    "optionsEn": [
      "Water is formed by loss of the hydroxyl group ($-\\text{OH}$) from the carboxylic acid and a hydrogen proton ($\\text{H}^+$) from the alcohol",
      "Water is formed by loss of $-\\text{OH}$ from the alcohol and $\\text{H}$ from the acid",
      "Both oxygen atoms in the ester originate from sulfuric acid",
      "Ethanol is a strong oxidizing agent"
    ],
    "optionsAr": [
      "أن جزيء الماء يتكون من انفصال مجموعة الهيدروكسيل ($-\\text{OH}$) من الحمض الكربوكسيلي وذرة هيدروجين ($\\text{H}^+$) من الكحول",
      "أن الماء يتكون من انفصال $-\\text{OH}$ من الكحول وهيدروجين من الحمض",
      "أن ذرات أكسجين الإستر مشتقة من حمض الكبريتيك",
      "أن الإيثانول عامل مؤكسد قوي"
    ],
    "correctAnswer": "Water is formed by loss of the hydroxyl group ($-\\text{OH}$) from the carboxylic acid and a hydrogen proton ($\\text{H}^+$) from the alcohol",
    "correctIndex": 0,
    "hintEn": "The oxygen of the alcohol remains bonded to the ethyl group in the ester (CH3-CO-18O-C2H5). Therefore, the -OH lost to form water comes from the carboxylic acid.",
    "hintAr": "أكسيد النظير $^{18}\\text{O}$ ارتبط بمجموعة الإيثيل في الإستر: $\\text{CH}_3\\text{CO}-^{18}\\text{O}-\\text{C}_2\\text{H}_5$، مما يثبت أن الحمض يفقد مجموعة $-\\text{OH}$ وأن الكحول يفقد ذرة $\\text{H}$ فقط لتكوين الماء.",
    "stepByStepSolutionEn": [
      "The oxygen of the alcohol remains bonded to the ethyl group in the ester (CH3-CO-18O-C2H5). Therefore, the -OH lost to form water comes from the carboxylic acid.",
      "Therefore, the correct answer is: Water is formed by loss of the hydroxyl group ($-\\text{OH}$) from the carboxylic acid and a hydrogen proton ($\\text{H}^+$) from the alcohol"
    ],
    "stepByStepSolutionAr": [
      "أكسيد النظير $^{18}\\text{O}$ ارتبط بمجموعة الإيثيل في الإستر: $\\text{CH}_3\\text{CO}-^{18}\\text{O}-\\text{C}_2\\text{H}_5$، مما يثبت أن الحمض يفقد مجموعة $-\\text{OH}$ وأن الكحول يفقد ذرة $\\text{H}$ فقط لتكوين الماء.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: أن جزيء الماء يتكون من انفصال مجموعة الهيدروكسيل ($-\\text{OH}$) من الحمض الكربوكسيلي وذرة هيدروجين ($\\text{H}^+$) من الكحول"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  },
  {
    "id": "th_chem_ch5_ex_15",
    "titleEn": "Exercise 15: Structural Isomers of C4H10 (Butane vs 2-Methylpropane)",
    "titleAr": "تمرين ١٥: المشابهة الجزيئية (الأيزومورفيزم) في الألكانات للصيغة C4H10",
    "difficulty": "easy",
    "questionEn": "How many open-chain structural isomers exist for the molecular formula $\\text{C}_4\\text{H}_{10}$, and what are their IUPAC names?",
    "questionAr": "كم عدد المتشابهات الجزيئية (الأيزومرات) البنائية مفتوحة السلسلة الممكنة للصيغة الجزيئية $\\text{C}_4\\text{H}_{10}$، وما هي أسماؤها بنظام الأيوباك (IUPAC)؟",
    "optionsEn": [
      "Two isomers: Butane ($\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$) and 2-Methylpropane ($(\\text{CH}_3)_2\\text{CH}-\\text{CH}_3$)",
      "Three isomers: Butane, Isobutane, and Cyclobutane",
      "Four isomers: 1-butene, 2-butene, butane, and methylcyclopropane",
      "Only one isomer exists"
    ],
    "optionsAr": [
      "أيزومران اثنان فقط: بيوتان (سلسلة مستقيمة) و 2-ميثيل بروبان (سلسلة متفرعة)",
      "ثلاثة أيزومرات: بيوتان وإيزوبيوتان وبيوتان حلقي",
      "أربعة أيزومرات",
      "أيزومر واحد فقط"
    ],
    "correctAnswer": "Two isomers: Butane ($\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$) and 2-Methylpropane ($(\\text{CH}_3)_2\\text{CH}-\\text{CH}_3$)",
    "correctIndex": 0,
    "hintEn": "C4H10 is an alkane. Linear chain: CH3-CH2-CH2-CH3 (butane). Branched chain: CH3-CH(CH3)-CH3 (2-methylpropane).",
    "hintAr": "الألكان ذو 4 ذرات كربون له شكلان بنائيان: البيوتان العادي ذو السلسلة المستقيمة، و 2-ميثيل بروبان ذو السلسلة المتفرعة.",
    "stepByStepSolutionEn": [
      "C4H10 is an alkane. Linear chain: CH3-CH2-CH2-CH3 (butane). Branched chain: CH3-CH(CH3)-CH3 (2-methylpropane).",
      "Therefore, the correct answer is: Two isomers: Butane ($\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$) and 2-Methylpropane ($(\\text{CH}_3)_2\\text{CH}-\\text{CH}_3$)"
    ],
    "stepByStepSolutionAr": [
      "الألكان ذو 4 ذرات كربون له شكلان بنائيان: البيوتان العادي ذو السلسلة المستقيمة، و 2-ميثيل بروبان ذو السلسلة المتفرعة.",
      "وبناءً على ذلك، فإن الإجابة الصحيحة هي: أيزومران اثنان فقط: بيوتان (سلسلة مستقيمة) و 2-ميثيل بروبان (سلسلة متفرعة)"
    ],
    "teacherTipEn": "Pay close attention to standard units and physical definitions.",
    "teacherTipAr": "انتبه دائماً للوحدات القياسية والقوانين الفيزيائية والكيميائية المعتمدة."
  }
];
