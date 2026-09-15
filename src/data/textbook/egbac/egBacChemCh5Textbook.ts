import type { SolvedProblem } from '../../../types/curriculum';

export const egBacChemCh5SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_chem_ch5_se_01",
    "titleEn": "Transition Metal Electronic Configurations and Ionization Sequence",
    "titleAr": "التوزيع الإلكتروني للفلزات الانتقالية وتسلسل فقد الإلكترونات عند التأين",
    "difficulty": "easy",
    "questionEn": "What is the ground-state valence electron configuration of neutral iron ($_{26}\\text{Fe}$) and the iron(III) cation ($\\text{Fe}^{3+}$)? Why is $\\text{Fe}^{3+}$ notably more chemically stable against oxidation than $\\text{Fe}^{2+}$?",
    "questionAr": "ما هو التوزيع الإلكتروني لغلاف التكافؤ لذرة الحديد المتعادلة ($_{26}\\text{Fe}$) ولكاتيون الحديد الثلاثي ($\\text{Fe}^{3+}$)؟ ولماذا يُعد كاتيـون $\\text{Fe}^{3+}$ أكثر استقراراً كيميائياً ضد الأكسدة مقارنة بـ $\\text{Fe}^{2+}$؟",
    "optionsEn": [
      "$\\text{Fe}: [\\text{Ar}] 4s^2 3d^6; \\quad \\text{Fe}^{3+}: [\\text{Ar}] 3d^5$; $\\text{Fe}^{3+}$ possesses a half-filled $3d^5$ subshell with maximum exchange stabilization energy.",
      "$\\text{Fe}: [\\text{Ar}] 4s^0 3d^8; \\quad \\text{Fe}^{3+}: [\\text{Ar}] 4s^1 3d^4$; $\\text{Fe}^{3+}$ has an empty $4s$ orbital.",
      "$\\text{Fe}: [\\text{Ar}] 4s^2 3d^6; \\quad \\text{Fe}^{3+}: [\\text{Ar}] 4s^2 3d^3$; $3d^3$ is a noble gas configuration.",
      "$\\text{Fe}: [\\text{Ar}] 3d^8; \\quad \\text{Fe}^{3+}: [\\text{Ar}] 3d^5$; iron cannot form coordination bonds."
    ],
    "optionsAr": [
      "$\\text{Fe}: [\\text{Ar}] 4s^2 3d^6؛ \\quad \\text{Fe}^{3+}: [\\text{Ar}] 3d^5$؛ ويمتلك $\\text{Fe}^{3+}$ مستوى فرعياً $3d^5$ نصف ممتلئ يتمتع بأقصى طاقة استقرار لتبادل الإلكترونات.",
      "$\\text{Fe}: [\\text{Ar}] 4s^0 3d^8؛ \\quad \\text{Fe}^{3+}: [\\text{Ar}] 4s^1 3d^4$؛ لأن $\\text{Fe}^{3+}$ يمتلك أوربيتال $4s$ فارغاً.",
      "$\\text{Fe}: [\\text{Ar}] 4s^2 3d^6؛ \\quad \\text{Fe}^{3+}: [\\text{Ar}] 4s^2 3d^3$؛ لأن $3d^3$ يماثل الغازات الخاملة.",
      "$\\text{Fe}: [\\text{Ar}] 3d^8؛ \\quad \\text{Fe}^{3+}: [\\text{Ar}] 3d^5$؛ لأن الحديد لا يكون روابط تناسقية."
    ],
    "correctAnswer": "$\\text{Fe}: [\\text{Ar}] 4s^2 3d^6; \\quad \\text{Fe}^{3+}: [\\text{Ar}] 3d^5$; $\\text{Fe}^{3+}$ possesses a half-filled $3d^5$ subshell with maximum exchange stabilization energy.",
    "correctIndex": 0,
    "hintEn": "Electrons are always removed from the outermost 4s orbital first, then from 3d. Fe -> Fe2+ (lose 4s2) -> Fe3+ (lose one 3d electron, leaving 3d5).",
    "hintAr": "تُفقد الإلكترونات دائماً من أوربيتال 4s الخارجي أولاً ثم من 3d. يتحول Fe إلى Fe2+ بفقد 4s2 ثم إلى Fe3+ بفقد إلكترون من 3d ليتبقى 3d5.",
    "stepByStepSolutionEn": [
      "1. Ground state of neutral iron ($Z = 26$): $[\\text{Ar}] 4s^2 3d^6$.",
      "2. When transition metals ionize, electrons in the outermost principal shell ($4s$) have greater spatial radial extension and are removed first before inner $3d$ electrons:\n   - $\\text{Fe}^{2+}: [\\text{Ar}] 3d^6$\n   - $\\text{Fe}^{3+}: [\\text{Ar}] 3d^5$.",
      "3. According to Hund's rule, a half-filled $d^5$ subshell features five parallel unpaired spins (one in each of the five degenerate $d$-orbitals), maximizing symmetric electron distribution and quantum exchange energy, conferring special thermodynamic stability."
    ],
    "stepByStepSolutionAr": [
      "١. التوزيع الإلكتروني لذرة الحديد ($Z = 26$): $[\\text{Ar}] 4s^2 3d^6$.",
      "٢. عند تأين الفلزات الانتقالية، تُفقد إلكترونات المستوى الخارجي $4s$ أولاً لسهولة نزعها:\n   - أيون الحديد الثنائي $\\text{Fe}^{2+}: [\\text{Ar}] 3d^6$.\n   - أيون الحديد الثلاثي $\\text{Fe}^{3+}: [\\text{Ar}] 3d^5$.",
      "٣. يحتوي المستوى الفرعي $3d^5$ على 5 إلكترونات مفردة موزعة بانتظام على الأوربيتالات الخمسة (نصف ممتلئ)، مما يحقق أقصى طاقة استقرار وتبادل كمي ويجعله مقاوماً للأكسدة."
    ],
    "teacherTipEn": "Crucial rule: 4s is filled before 3d during Aufbau, but 4s is EMPTIED before 3d during ionization.",
    "teacherTipAr": "قاعدة ذهبية: يُملأ أوربيتال 4s قبل 3d في البناء التصاعدي، ولكنه يُفرغ قبل 3d عند تأين الذرة."
  },
  {
    "id": "egbac_chem_ch5_se_02",
    "titleEn": "Werner Coordination Theory: Primary vs Secondary Valence",
    "titleAr": "نظرية فيرنر التناسقية: التكافؤ الأولي مقابل التكافؤ الثانوي",
    "difficulty": "medium",
    "questionEn": "When an excess of silver nitrate ($\\text{AgNO}_3$) is added to an aqueous solution containing $1.0\\text{ mol}$ of the coordination compound $\\text{CoCl}_3 \\cdot 5\\text{NH}_3$, exactly $2.0\\text{ mol}$ of $\\text{AgCl}(s)$ precipitate instantaneously. According to Alfred Werner's coordination theory, what is the correct coordination formula, the primary valence, and the secondary valence of cobalt?",
    "questionAr": "عند إضافة فائض من نترات الفضة $\\text{AgNO}_3$ إلى محلول مائي يحتوي على $1.0\\text{ mol}$ من المركب التناسقي $\\text{CoCl}_3 \\cdot 5\\text{NH}_3$، ترسب فورياً $2.0\\text{ mol}$ من كلوريد الفضة $\\text{AgCl}$. وفق نظرية فيرنر للتناسق، ما هي الصيغة التناسقية الصحيحة، وما التكافؤ الأولي والتكافؤ الثانوي للكوبالت؟",
    "optionsEn": [
      "Formula: $[\\text{Co(NH}_3)_5]\\text{Cl}_3$; Primary valence = $+2$; Secondary valence = $5$.",
      "Formula: $[\\text{Co(NH}_3)_5\\text{Cl}]\\text{Cl}_2$; Primary valence = $+3$; Secondary valence (coordination number) = $6$.",
      "Formula: $[\\text{Co(NH}_3)_4\\text{Cl}_2]\\text{Cl} \\cdot \\text{NH}_3$; Primary valence = $+3$; Secondary valence = $4$.",
      "Formula: $[\\text{CoCl}_3](\\text{NH}_3)_5$; Primary valence = $0$; Secondary valence = $3$."
    ],
    "optionsAr": [
      "الصيغة: $[\\text{Co(NH}_3)_5]\\text{Cl}_3$؛ التكافؤ الأولي = $+2$؛ التكافؤ الثانوي = $5$.",
      "الصيغة: $[\\text{Co(NH}_3)_5\\text{Cl}]\\text{Cl}_2$؛ التكافؤ الأولي = $+3$؛ التكافؤ الثانوي (العدد التناسقي) = $6$.",
      "الصيغة: $[\\text{Co(NH}_3)_4\\text{Cl}_2]\\text{Cl} \\cdot \\text{NH}_3$؛ التكافؤ الأولي = $+3$؛ التكافؤ الثانوي = $4$.",
      "الصيغة: $[\\text{CoCl}_3](\\text{NH}_3)_5$؛ التكافؤ الأولي = $0$؛ التكافؤ الثانوي = $3$."
    ],
    "correctAnswer": "Formula: $[\\text{Co(NH}_3)_5\\text{Cl}]\\text{Cl}_2$; Primary valence = $+3$; Secondary valence (coordination number) = $6$.",
    "correctIndex": 1,
    "hintEn": "Precipitating 2 moles of AgCl means 2 Cl- ions are in the outer ionizable sphere, so 1 Cl- and 5 NH3 are in the inner coordination sphere: [Co(NH3)5Cl]Cl2.",
    "hintAr": "ترسيب 2 مول من AgCl يعني وجود أيوني كلوريد متأينين في مجال التأين الخارجي؛ إذن يوجد كلوريد واحد و 5 أمونيا داخل القوس التناسقي: [Co(NH3)5Cl]Cl2.",
    "stepByStepSolutionEn": [
      "1. Primary valence is ionizable and satisfied by simple counter-anions outside the brackets. Because $2\\text{ moles of } \\text{AgCl}$ precipitate per mole of complex, exactly two chloride ions are free counter-ions outside the coordination sphere: $(\\text{Cl}_2)$.",
      "2. The remaining chloride ion and all five ammonia molecules are coordinated directly to cobalt inside the coordination sphere: $[\\text{Co(NH}_3)_5\\text{Cl}]^{2+}$.",
      "3. Primary valence equals the oxidation state of cobalt: $x + 5(0) + 1(-1) + 2(-1) = 0 \\implies x = +3$.",
      "4. Secondary valence equals the total number of coordinate bonds donated by ligands (the Coordination Number): $5\\text{ (from } \\text{NH}_3) + 1\\text{ (from } \\text{Cl}^-) = 6$ (octahedral geometry)."
    ],
    "stepByStepSolutionAr": [
      "١. التكافؤ الأولي قابل للتأين وتعادله الأيونات الواقعة خارج القوس. بما أن $2\\text{ mol}$ من $\\text{AgCl}$ ترسبت، فهناك أيونا كلوريد حرّان خارج القوس.",
      "٢. أيون الكلوريد الثالث وجزيئات النشادر الخمسة تقع داخل القوس التناسقي مرتبطة بروابط تناسقية مباشرة: $[\\text{Co(NH}_3)_5\\text{Cl}]^{2+}$.",
      "٣. التكافؤ الأولي يمثل عدد تأكسد الكوبالت: $+3$.",
      "٤. التكافؤ الثانوي يمثل عدد الروابط التناسقية (العدد التناسقي) = $5 + 1 = 6$ (شكل ثماني السطوح)."
    ],
    "teacherTipEn": "Chloride ions inside the square brackets are non-ionizable and do not precipitate with silver nitrate; only chloride ions outside the brackets precipitate.",
    "teacherTipAr": "أيونات الكلوريد داخل الأقواس المربعة غير متأينة ولا تترسب بنترات الفضة؛ وترسب نترات الفضة فقط الأيونات الحرة خارج الأقواس."
  },
  {
    "id": "egbac_chem_ch5_se_03",
    "titleEn": "Octahedral Crystal Field Splitting Energy Delta_o and d-Orbital Energies",
    "titleAr": "طاقة انقسام المجال البلوري ثماني السطوح وطاقات أوربيتالات d",
    "difficulty": "medium",
    "questionEn": "In an octahedral transition metal complex, how do the five degenerate $d$-orbitals split under the electrostatic field of six incoming ligands, and what are the relative energy shifts of the resulting $t_{2g}$ and $e_g$ sub-levels relative to the spherical barycenter?",
    "questionAr": "في معقد ثماني السطوح لفلز انتقالي، كيف تنقسم أوربيتالات $d$ الخمسة تحت تأثير المجال الكهروستاتيكي لستة ليجاندات، وما مقدار التغير في طاقة المستويين الناتجين $t_{2g}$ و $e_g$ بالنسبة لمركز الثقل (متوسط الطاقة)؟",
    "optionsEn": [
      "The orbitals split into a lower $e_g$ sub-level ($-0.6\\Delta_o$) and a higher $t_{2g}$ sub-level ($+0.4\\Delta_o$).",
      "All five $d$-orbitals remain degenerate with equal energy increase $+1.0\\Delta_o$.",
      "The orbitals split into a triply degenerate lower $t_{2g}$ sub-level stabilized by $-0.4 \\Delta_o$ and a doubly degenerate higher $e_g$ sub-level destabilized by $+0.6 \\Delta_o$.",
      "They split into four lower orbitals ($-0.25\\Delta_o$) and one upper orbital ($+1.0\\Delta_o$)."
    ],
    "optionsAr": [
      "تنقسم إلى مستوى أدنى $e_g$ بمقدار $-0.6\\Delta_o$ ومستوى أعلى $t_{2g}$ بمقدار $+0.4\\Delta_o$.",
      "تظل الأوربيتالات الخمسة متساوية في الطاقة وترتفع بمقدار $+1.0\\Delta_o$.",
      "تنقسم الأوربيتالات إلى مستوى ثلاثي أدنى $t_{2g}$ مستقر بمقدار $-0.4 \\Delta_o$، ومستوى ثنائي أعلى $e_g$ غير مستقر بمقدار $+0.6 \\Delta_o$.",
      "تنقسم إلى 4 أوربيتالات سفلى بمقدار $-0.25\\Delta_o$ وأوربيتال علوي واحد بمقدار $+1.0\\Delta_o$."
    ],
    "correctAnswer": "The orbitals split into a triply degenerate lower $t_{2g}$ sub-level stabilized by $-0.4 \\Delta_o$ and a doubly degenerate higher $e_g$ sub-level destabilized by $+0.6 \\Delta_o$.",
    "correctIndex": 2,
    "hintEn": "Ligands lie along x, y, z axes. Orbitals pointing directly along axes (dx^2-y^2, dz^2 = e_g) experience higher repulsion (+0.6 Delta_o). Orbitals between axes (dxy, dyz, dxz = t_2g) are lower (-0.4 Delta_o).",
    "hintAr": "تقترب الليجاندات على المحاور x, y, z. الأوربيتالات الواقعة على المحاور (dx^2-y^2, dz^2 = e_g) تتنافر وترتفع (+0.6 Delta_o). والواقعة بين المحاور تهبط (-0.4 Delta_o).",
    "stepByStepSolutionEn": [
      "1. In an octahedral complex, six ligands approach the central metal ion along the Cartesian $\\pm x, \\pm y, \\pm z$ axes.",
      "2. Orbitals $d_{x^2-y^2}$ and $d_{z^2}$ point directly toward the negative ligand electron pairs, experiencing strong electrostatic repulsion; they split upward in energy into the doubly degenerate **$e_g$ sub-level** ($+0.6\\,\\Delta_o$).",
      "3. Orbitals $d_{xy}, d_{yz}, d_{xz}$ point in the spaces between the Cartesian axes, experiencing much weaker repulsion; they stabilize downward into the triply degenerate **$t_{2g}$ sub-level** ($-0.4\\,\\Delta_o$).",
      "4. Overall energy conservation (barycenter rule): $3(-0.4\\,\\Delta_o) + 2(+0.6\\,\\Delta_o) = -1.2\\,\\Delta_o + 1.2\\,\\Delta_o = 0$."
    ],
    "stepByStepSolutionAr": [
      "١. في المجال ثماني السطوح تقترب الليجاندات الستة مباشرة على طول المحاور الكارتيزية الثلاثة.",
      "٢. الأوربيتالان $d_{x^2-y^2}$ و $d_{z^2}$ يقعان مباشرة في مواجهة الليجاندات، فيحدث تنافر شديد وترتفع طاقتهما لتكوين المستوى الثنائي $e_g$ بمقدار $+0.6\\,\\Delta_o$.",
      "٣. الأوربيتالات الثلاثة $d_{xy}, d_{yz}, d_{xz}$ تقع فصوصها بين المحاور الكارتيزية، فيكون التنافر أقل وتهبط طاقتها لتكوين المستوى الثلاثي $t_{2g}$ بمقدار $-0.4\\,\\Delta_o$.",
      "٤. ينحفظ مركز ثقل الطاقة: $3(-0.4) + 2(+0.6) = -1.2 + 1.2 = 0$."
    ],
    "teacherTipEn": "Remember that in tetrahedral fields, the splitting is exactly INVERTED and smaller: e is lower and t2 is higher, with Delta_t = (4/9) Delta_o.",
    "teacherTipAr": "تذكر أنه في المجال رباعي السطوح ينعكس الانقسام: أوربيتالات e تكون في الأسفل و t2 في الأعلى، وقيمة Delta_t = (4/9) Delta_o."
  },
  {
    "id": "egbac_chem_ch5_se_04",
    "titleEn": "High-Spin vs Low-Spin Complexes: Iron(II) Octahedral Systems",
    "titleAr": "المعقدات عالية ومنخفضة الغزل: أنظمة الحديد الثنائي ثمانية السطوح",
    "difficulty": "hots",
    "questionEn": "Consider two octahedral complexes of $\\text{Fe}^{2+}$ ($d^6$ configuration):\n- Complex 1: $[\\text{Fe(H}_2\\text{O})_6]^{2+}$ with weak-field water ligands ($\\Delta_o < P$, pairing energy)\n- Complex 2: $[\\text{Fe(CN)}_6]^{4-}$ with strong-field cyanide ligands ($\\Delta_o > P$)\nDetermine the $t_{2g}$ and $e_g$ electron configurations, the number of unpaired electrons $n$, and the magnetic property of each complex.",
    "questionAr": "لدينا معقدان ثمانيا السطوح لأيون الحديد الثنائي $\\text{Fe}^{2+}$ (التوزيع $d^6$):\n- المعقد ١: $[\\text{Fe(H}_2\\text{O})_6]^{2+}$ مع ليجاندات ماء ضعيفة المجال ($\\Delta_o < P$، طاقة الازدواج)\n- المعقد ٢: $[\\text{Fe(CN)}_6]^{4-}$ مع ليجاندات سيانيد قوية المجال ($\\Delta_o > P$)\nحدد التوزيع الإلكتروني في المستويين $t_{2g}$ و $e_g$، وعدد الإلكترونات المفردة $n$، والخاصية المغناطيسية لكل معقد.",
    "optionsEn": [
      "$[\\text{Fe(H}_2\\text{O})_6]^{2+}$: $t_{2g}^6 e_g^0$ (low-spin, $n = 0$); $[\\text{Fe(CN)}_6]^{4-}$: $t_{2g}^4 e_g^2$ (high-spin, $n = 4$)",
      "Both complexes are high-spin with $t_{2g}^3 e_g^3$ and $n = 6$ unpaired electrons.",
      "Both complexes are diamagnetic with $n = 0$ unpaired electrons.",
      "$[\\text{Fe(H}_2\\text{O})_6]^{2+}$: $t_{2g}^4 e_g^2$ (high-spin, $n = 4$, paramagnetic); $[\\text{Fe(CN)}_6]^{4-}$: $t_{2g}^6 e_g^0$ (low-spin, $n = 0$, diamagnetic)."
    ],
    "optionsAr": [
      "$[\\text{Fe(H}_2\\text{O})_6]^{2+}$: $t_{2g}^6 e_g^0$ (منخفض الغزل، $n = 0$)؛ $[\\text{Fe(CN)}_6]^{4-}$: $t_{2g}^4 e_g^2$ (عالي الغزل، $n = 4$)",
      "كلا المعقدين عالي الغزل بتوزيع $t_{2g}^3 e_g^3$ و $n = 6$ إلكترونات مفردة.",
      "كلا المعقدين دايمغناطيسي وعدد الإلكترونات المفردة $n = 0$ فيهما معاً.",
      "$[\\text{Fe(H}_2\\text{O})_6]^{2+}$: $t_{2g}^4 e_g^2$ (عالي الغزل، $n = 4$، بارامغناطيسي)؛ $[\\text{Fe(CN)}_6]^{4-}$: $t_{2g}^6 e_g^0$ (منخفض الغزل، $n = 0$، دايمغناطيسي)."
    ],
    "correctAnswer": "$[\\text{Fe(H}_2\\text{O})_6]^{2+}$: $t_{2g}^4 e_g^2$ (high-spin, $n = 4$, paramagnetic); $[\\text{Fe(CN)}_6]^{4-}$: $t_{2g}^6 e_g^0$ (low-spin, $n = 0$, diamagnetic).",
    "correctIndex": 3,
    "hintEn": "Weak field ligand (H2O): Delta_o < P, electrons occupy eg before pairing in t2g -> t2g^4 eg^2 (4 unpaired). Strong field (CN-): Delta_o > P, all 6 electrons pair in t2g -> t2g^6 eg^0 (0 unpaired).",
    "hintAr": "ليجاند ضعيف (H2O): طاقة الانقسام أقل من الازدواج فتصعد الإلكترونات لـ eg أولاً -> t2g^4 eg^2 (4 مفردة). ليجاند قوي (CN-): تزدوج كلها في t2g -> t2g^6 eg^0 (صفر مفرد).",
    "stepByStepSolutionEn": [
      "1. In $\\text{Fe}^{2+}$, the electron configuration is $3d^6$.",
      "2. In $[\\text{Fe(H}_2\\text{O})_6]^{2+}$, water is a weak-field ligand (small $\\Delta_o < P$). Electrons populate according to Hund's rule: first three in $t_{2g}$, next two in $e_g$, and the sixth pairs in $t_{2g}$, giving configuration $t_{2g}^4 e_g^2$. There are $n = 4$ unpaired electrons (**high-spin, strongly paramagnetic**).",
      "3. In $[\\text{Fe(CN)}_6]^{4-}$, cyanide is a strong-field ligand (large $\\Delta_o > P$). Because the energy gap $\\Delta_o$ exceeds the pairing energy, electrons pair up in the lower $t_{2g}$ sub-level rather than jump into $e_g$. All six electrons occupy $t_{2g}$, yielding $t_{2g}^6 e_g^0$. There are $n = 0$ unpaired electrons (**low-spin, diamagnetic**)."
    ],
    "stepByStepSolutionAr": [
      "١. أيون الحديد الثنائي $\\text{Fe}^{2+}$ يمتلك 6 إلكترونات في المستوى $3d^6$.",
      "٢. في معقد الماء $[\\text{Fe(H}_2\\text{O})_6]^{2+}$: الماء ليجاند ضعيف المجال ($\\Delta_o < P$). تتوزع الإلكترونات مفردة أولاً حسب قاعدة هوند: 3 في $t_{2g}$ و 2 في $e_g$ ثم يزدوج السادس في $t_{2g}$، فيكون التوزيع $t_{2g}^4 e_g^2$ مع وجود $n = 4$ إلكترونات مفردة (عالي الغزل، بارامغناطيسي).",
      "٣. في معقد السيانيد $[\\text{Fe(CN)}_6]^{4-}$: السيانيد ليجاند قوي المجال ($\\Delta_o > P$). فجوة الطاقة كبيرة جداً، فتزدوج جميع الإلكترونات الستة في المستوى الأدنى $t_{2g}$، ويكون التوزيع $t_{2g}^6 e_g^0$ دون أي إلكترون مفرد ($n = 0$)، فيكون المعقد منخفض الغزل ودايمغناطيسياً."
    ],
    "teacherTipEn": "The spectrochemical series determines whether a d4-d7 octahedral complex is high-spin or low-spin.",
    "teacherTipAr": "تحدد متسلسلة الطيف الكيميائي لليجاندات ما إذا كان معقد d4-d7 ثماني السطوح عالي الغزل أو منخفض الغزل."
  },
  {
    "id": "egbac_chem_ch5_se_05",
    "titleEn": "Spin-Only Magnetic Moment Calculation",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط بالبور مجنتون",
    "difficulty": "easy",
    "questionEn": "Calculate the theoretical spin-only magnetic moment $\\mu_s$ in Bohr magnetons ($\\mu_B$) for the high-spin complex $[\\text{Cr(H}_2\\text{O})_6]^{3+}$, where chromium is in the $+3$ oxidation state ($3d^3$).",
    "questionAr": "احسب العزم المغناطيسي النظري للغزل فقط $\\mu_s$ بوحدة بور مجنتون ($\\mu_B$) للمعقد $[\\text{Cr(H}_2\\text{O})_6]^{3+}$، حيث الكروم في حالة التأكسد $+3$ ($3d^3$).",
    "optionsEn": [
      "$\\mu_s = \\sqrt{3(3+2)} = \\sqrt{15} \\approx 3.87\\, \\mu_B$",
      "$\\mu_s = 3.00\\, \\mu_B$",
      "$\\mu_s = \\sqrt{2(4)} = \\sqrt{8} \\approx 2.83\\, \\mu_B$",
      "$\\mu_s = \\sqrt{4(6)} = \\sqrt{24} \\approx 4.90\\, \\mu_B$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{3(3+2)} = \\sqrt{15} \\approx 3.87\\, \\mu_B$",
      "$\\mu_s = 3.00\\, \\mu_B$",
      "$\\mu_s = \\sqrt{2(4)} = \\sqrt{8} \\approx 2.83\\, \\mu_B$",
      "$\\mu_s = \\sqrt{4(6)} = \\sqrt{24} \\approx 4.90\\, \\mu_B$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{3(3+2)} = \\sqrt{15} \\approx 3.87\\, \\mu_B$",
    "correctIndex": 0,
    "hintEn": "Cr3+ is 3d3, so there are n = 3 unpaired electrons in t2g. Formula: mu = sqrt(n(n+2)) = sqrt(3 * 5) = sqrt(15) = 3.87 mu_B.",
    "hintAr": "الكروم الثلاثي 3d3 يمتلك 3 إلكترونات مفردة. القانون: mu = جذر(n(n+2)) = جذر(3 * 5) = جذر(15) = 3.87 بور مجنتون.",
    "stepByStepSolutionEn": [
      "1. Electronic configuration of $\\text{Cr}^{3+}$ ($Z = 24$): $[\\text{Ar}] 3d^3$.",
      "2. In an octahedral field, the three $d$-electrons occupy separate degenerate $t_{2g}$ orbitals with parallel spins ($t_{2g}^3 e_g^0$), yielding exactly $n = 3$ unpaired electrons.",
      "3. Spin-only magnetic moment formula: $\\mu_s = \\sqrt{n(n+2)}\\,\\mu_B$.",
      "4. Calculate: $\\mu_s = \\sqrt{3(3+2)} = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.873\\,\\mu_B$."
    ],
    "stepByStepSolutionAr": [
      "١. التوزيع الإلكتروني لكاتيون الكروم الثلاثي: $\\text{Cr}^{3+}: [\\text{Ar}] 3d^3$.",
      "٢. في المجال ثماني السطوح تتوزع الإلكترونات الثلاثة مفردة في مستوى $t_{2g}$ ($t_{2g}^3 e_g^0$)، فيكون عدد الإلكترونات المفردة $n = 3$.",
      "٣. قانون العزم المغناطيسي للغزل فقط: $\\mu_s = \\sqrt{n(n+2)}\\,\\mu_B$.",
      "٤. الحساب: $\\mu_s = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\,\\mu_B$."
    ],
    "teacherTipEn": "Experimental measurement of magnetic moments using a Gouy balance is the primary experimental technique used to determine the number of unpaired electrons.",
    "teacherTipAr": "يمثل قياس العزم المغناطيسي بميزان غوي التقنية التجريبية الأساسية لتعيين عدد الإلكترونات المفردة وتحديد نمط الغزل في المعقدات."
  },
  {
    "id": "egbac_chem_ch5_se_06",
    "titleEn": "Wavelength of d-d Absorption and Complementary Transmitted Color",
    "titleAr": "الطول الموجي لامتصاص انتقالات d-d واللون المتمم المنعكس",
    "difficulty": "medium",
    "questionEn": "The octahedral hexaaquatitanium(III) complex cation, $[\\text{Ti(H}_2\\text{O})_6]^{3+}$ ($d^1$ configuration), absorbs light with an absorption maximum at $\\lambda_{\\text{max}} = 498\\text{ nm}$ (in the green-yellow region of the visible spectrum). What is the crystal field splitting energy $\\Delta_o$ in $\\text{kJ/mol}$, and what complementary color is observed by the human eye?",
    "questionAr": "يمتص معقد التيتانيوم المائي ثماني السطوح $[\\text{Ti(H}_2\\text{O})_6]^{3+}$ (التوزيع $d^1$) الضوء عند قمة امتصاص طيفية $\\lambda_{\\text{max}} = 498\\text{ nm}$ (في منطقة الضوء الأخضر المصفر). احسب طاقة انقسام المجال البلوري $\\Delta_o$ بوحدة $\\text{kJ/mol}$، وما اللون المتمم الذي تراه العين البشرية؟",
    "optionsEn": [
      "$\\Delta_o = 120.1\\text{ kJ/mol}$; the observed color is yellow.",
      "$\\Delta_o = 240.3\\text{ kJ/mol}$; the observed color is purple/violet.",
      "$\\Delta_o = 480.6\\text{ kJ/mol}$; the observed color is bright green.",
      "$\\Delta_o = 24.0\\text{ kJ/mol}$; the complex is completely colorless."
    ],
    "optionsAr": [
      "$\\Delta_o = 120.1\\text{ كيلوجول/مول}$؛ واللون المشاهد أصفر فاقع.",
      "$\\Delta_o = 240.3\\text{ كيلوجول/مول}$؛ واللون المتمم المشاهد هو البنفسجي المائل للأرجواني.",
      "$\\Delta_o = 480.6\\text{ كيلوجول/مول}$؛ واللون المشاهد أخضر ناصع.",
      "$\\Delta_o = 24.0\\text{ كيلوجول/مول}$؛ والمعقد عديم اللون تماماً."
    ],
    "correctAnswer": "$\\Delta_o = 240.3\\text{ kJ/mol}$; the observed color is purple/violet.",
    "correctIndex": 1,
    "hintEn": "Delta_o = h * c / lambda. Multiply by Avogadro's number N_A for 1 mole. Complementary color to green-yellow absorption is purple/violet.",
    "hintAr": "طاقة الفوتون: Delta_o = h * c / lambda. اضرب في عدد أفوجادرو لحساب الطاقة لكل مول. واللون المتمم لامتصاص الأخضر المصفر هو البنفسجي.",
    "stepByStepSolutionEn": [
      "1. In $[\\text{Ti(H}_2\\text{O})_6]^{3+}$, a single electron occupies the $t_{2g}$ level. Absorbing a photon promotes this electron to $e_g$: $t_{2g}^1 e_g^0 \\xrightarrow{h\\nu} t_{2g}^0 e_g^1$.",
      "2. Energy of one photon: $E = \\frac{h c}{\\lambda} = \\frac{(6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s})(3.00 \\times 10^8\\text{ m/s})}{498 \\times 10^{-9}\\text{ m}} \\approx 3.9916 \\times 10^{-19}\\text{ J}$.",
      "3. Energy per mole of complex: $\\Delta_o = (3.9916 \\times 10^{-19}\\text{ J}) \\times (6.022 \\times 10^{23}\\text{ mol}^{-1}) = 240,372\\text{ J/mol} \\approx 240.4\\text{ kJ/mol}$.",
      "4. According to color wheel theory, absorbing green-yellow light ($\\approx 500\\text{ nm}$) leaves the complementary transmitted red and blue wavelengths, perceived by the eye as distinctive **purple/violet**."
    ],
    "stepByStepSolutionAr": [
      "١. في معقد التيتانيوم ينتقل إلكترون منفرد من مستوى $t_{2g}$ إلى $e_g$ عند امتصاص فوتون ضوئي.",
      "٢. طاقة الفوتون الواحد: $E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3 \\times 10^8}{498 \\times 10^{-9}} = 3.992 \\times 10^{-19}\\text{ J}$.",
      "٣. الطاقة لكل مول من المعقد: $\\Delta_o = 3.992 \\times 10^{-19} \\times 6.022 \\times 10^{23} = 240.4\\text{ kJ/mol}$.",
      "٤. امتصاص الضوء الأخضر المصفر ينفذ باقي أطوال الموجات الحمراء والزرقاء، فترى العين البشرية اللون المتمم وهو اللون البنفسجي المائل للأرجواني."
    ],
    "teacherTipEn": "Ions with d0 (Sc3+, Ti4+) or d10 (Zn2+, Cu+) configurations have no possible d-d transitions and are therefore completely colorless.",
    "teacherTipAr": "أيونات الفلزات ذات التوزيع d0 أو d10 لا يمكن حدوث انتقالات d-d فيها، ولذلك تكون مركباتها عديمة اللون ورائقة دائماً."
  },
  {
    "id": "egbac_chem_ch5_se_07",
    "titleEn": "Chelate Effect: Enhanced Thermodynamic Stability of Polydentate Complexes",
    "titleAr": "تأثير الكلاب (الكلابيات): الاستقرار الديناميكي الحراري الفائق لليجاندات عديدة السن",
    "difficulty": "medium",
    "questionEn": "Consider the two complexation equilibria of nickel(II) in aqueous solution at $298\\text{ K}$:\n1. $[\\text{Ni(H}_2\\text{O})_6]^{2+} + 6\\text{NH}_3 \\rightleftharpoons [\\text{Ni(NH}_3)_6]^{2+} + 6\\text{H}_2\\text{O}, \\quad \\log K_f = 8.6$\n2. $[\\text{Ni(H}_2\\text{O})_6]^{2+} + 3\\text{en} \\rightleftharpoons [\\text{Ni(en)}_3]^{2+} + 6\\text{H}_2\\text{O}, \\quad \\log K_f = 18.3$\n(where $\\text{en}$ is ethylenediamine, a bidentate ligand). Why is the formation constant of the tris(ethylenediamine) complex nearly ten orders of magnitude ($10^{10}\\times$) larger than that of the hexaammine complex?",
    "questionAr": "للاتزانين التناسقيين لأيون النيكل الثنائي في المحلول المائي عند $298\\text{ K}$:\n١. $[\\text{Ni(H}_2\\text{O})_6]^{2+} + 6\\text{NH}_3 \\rightleftharpoons [\\text{Ni(NH}_3)_6]^{2+} + 6\\text{H}_2\\text{O}, \\quad \\log K_f = 8.6$\n٢. $[\\text{Ni(H}_2\\text{O})_6]^{2+} + 3\\text{en} \\rightleftharpoons [\\text{Ni(en)}_3]^{2+} + 6\\text{H}_2\\text{O}, \\quad \\log K_f = 18.3$\n(حيث $\\text{en}$ إيثيلين ثنائي الأمين، ليجاند ثنائي السن). لماذا يزيد ثابت تكوين معقد الإيثيلين ثنائي الأمين بمقدار 10 رتب أسية ($10^{10}$ ضعف) عن معقد النشادر؟",
    "optionsEn": [
      "Because ethylenediamine forms metallic covalent bonds with the nickel nucleus.",
      "Because ammonia ligands decompose into nitrogen and hydrogen in water.",
      "Due to the chelate effect, driven by a large positive entropy change ($\\Delta S^\\circ > 0$) as 4 reactant particles displace 7 product particles.",
      "Because the enthalpy of formation for ammonia complexes is positive."
    ],
    "optionsAr": [
      "لأن إيثيلين ثنائي الأمين يكون روابط فلزية تساهمية مع نواة النيكل.",
      "لأن ليجاندات النشادر تتفكك إلى نيتروجين وهيدروجين في الماء.",
      "بفعل تأثير الكلاب (الكلابيات)، المدفوع بزيادة كبيرة وموجبة في الإنتروبيا ($\\Delta S^\\circ > 0$) نتيجة حلول 3 ليجاندات محل 6 جزيئات ماء وتحرير 7 جسيمات من 4 متفاعلات.",
      "لأن إنثالبي تكوين معقدات النشادر موجب وماص للحرارة."
    ],
    "correctAnswer": "Due to the chelate effect, driven by a large positive entropy change ($\\Delta S^\\circ > 0$) as 4 reactant particles displace 7 product particles.",
    "correctIndex": 2,
    "hintEn": "Chelate effect is an ENTROPY effect: 1 Ni complex + 3 en -> 1 Ni(en)3 + 6 H2O. Particles increase from 4 to 7, causing large Delta S > 0, driving Delta G far negative.",
    "hintAr": "تأثير الكلاب هو أثر إنتروبي بالأساس: 4 جسيمات متفاعلة تنتج 7 جسيمات في النواتج، مما يزيد العشوائية Delta S > 0 ويجعل Delta G سالبة بشدة و Kf فلكياً.",
    "stepByStepSolutionEn": [
      "1. Both complexes have very similar coordinate bond energies (six nitrogen-nickel coordinate bonds, so $\\Delta H^\\circ$ values are roughly comparable).",
      "2. In reaction 1 (monodentate $\\text{NH}_3$): $1\\text{ Ni complex} + 6\\text{ NH}_3 \\to 1\\text{ complex} + 6\\text{ H}_2\\text{O}$ ($7 \\to 7\\text{ solute particles}$, $\\Delta S^\\circ \\approx 0$).",
      "3. In reaction 2 (bidentate $\\text{en}$): $1\\text{ Ni complex} + 3\\text{ en} \\to 1\\text{ complex} + 6\\text{ H}_2\\text{O}$ ($4\\text{ reactant particles} \\to 7\\text{ product particles}$).",
      "4. The net release of three extra free water molecules results in a huge favorable increase in translational entropy: $\\Delta S^\\circ \\gg 0$.",
      "5. Via $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$, this large positive entropy change makes $\\Delta G^\\circ$ vastly more negative, driving $K_f = e^{-\\Delta G^\\circ / RT}$ up by a factor of $10^{10}$."
    ],
    "stepByStepSolutionAr": [
      "١. طاقات الروابط التناسقية متطابقة تقريباً في المعقدين (6 روابط تناسقية بين النيكل والنيتروجين، فالإنثالبي $\\Delta H$ متقارب).",
      "٢. في تفاعل النشادر (أحادي السن): 7 جسيمات متفاعلة تعطي 7 جسيمات في النواتج ($\\Delta S \\approx 0$).",
      "٣. في تفاعل الإيثيلين ثنائي الأمين (ثنائي السن): 4 جسيمات متفاعلة تعطي 7 جسيمات حرة في النواتج نتيجة تحرير 6 جزيئات ماء.",
      "٤. تحرير هذا العدد الإضافي من الجسيمات الحرة يولد زيادة هائلة في الإنتروبيا ($\\Delta S \\gg 0$).",
      "٥. تجعل هذه الإنتروبيا العالية طاقة جيبس الحرة $\\Delta G^\\circ$ سالبة بدرجة هائلة، مما يضاعف ثابت الاتزان $K_f$ بمقدار $10^{10}$ ضعف (تأثير الكلاب)."
    ],
    "teacherTipEn": "EDTA4- (a hexadentate chelating agent) binds metal ions with even more colossal stability constants (Kf > 10^18) through this same entropic chelate effect.",
    "teacherTipAr": "يمتلك مخلب EDTA سداسي السن ثوابت تكوين أكثر ضخامة (تتجاوز 10^18) بفضل نفس التأثير الإنتروبي لتحرير 6 جزيئات ماء."
  },
  {
    "id": "egbac_chem_ch5_se_08",
    "titleEn": "Square Planar Platinum(II) Complexes and Cisplatin Antitumor Mechanism",
    "titleAr": "المعقدات المربعة المستوية للبلاتين الثنائي وآلية عقار السيسبلاتين المضاد للأورام",
    "difficulty": "easy",
    "questionEn": "The anticancer chemotherapy drug *cisplatin* is a square-planar platinum(II) complex with formula $[\\text{Pt(NH}_3)_2\\text{Cl}_2]$. What is the geometric relationship between the two chloride ligands in the active drug, and what is its stereoisomer?",
    "questionAr": "دواء العلاج الكيميائي للسرطان الشهير *السيسبلاتين* هو معقد مربع مستوٍ للبلاتين الثنائي بصيغة $[\\text{Pt(NH}_3)_2\\text{Cl}_2]$. ما العلاقة الهندسية الفراغية بين ليجاندي الكلوريد في الدواء الفعال، وما هو متماكبه الفراغي (الأيزومر) الآخر؟",
    "optionsEn": [
      "The two chloride ligands occupy opposite positions at $180^\\circ$ (*trans* isomer); its isomer is tetrahedral.",
      "The complex is tetrahedral with bond angles of $109.5^\\circ$ and possesses no stereoisomers.",
      "The platinum metal has a coordination number of 6 in an octahedral cage.",
      "The two chloride ligands occupy adjacent positions with a $90^\\circ$ bond angle (*cis* isomer); its inactive stereoisomer is *transplatin* with a $180^\\circ$ angle."
    ],
    "optionsAr": [
      "يشغل ليجاندا الكلوريد موضعين متقابلين بزاوية $180^\\circ$ (المتماكب المفروق *trans*)؛ ومتماكبه رباعي السطوح.",
      "المعقد رباعي السطوح بزوايا $109.5^\\circ$ ولا توجد له أي متماكبات فراغية.",
      "يمتلك البلاتين عدداً تناسقياً مقداره 6 داخل قفص ثماني السطوح.",
      "يشغل ليجاندا الكلوريد موضعين متجاورين بزاوية $90^\\circ$ (المتماكب المقرون *cis*)؛ ومتماكبه غير الفعال حيوياً هو *ترانسبلاتين* بزاوية $180^\\circ$."
    ],
    "correctAnswer": "The two chloride ligands occupy adjacent positions with a $90^\\circ$ bond angle (*cis* isomer); its inactive stereoisomer is *transplatin* with a $180^\\circ$ angle.",
    "correctIndex": 3,
    "hintEn": "Pt(II) is d8, forming square planar complexes. [Pt(NH3)2Cl2] has two isomers: cis (Cl ligands at 90 deg, active drug) and trans (Cl at 180 deg, inactive).",
    "hintAr": "البلاتين الثنائي d8 يكون أشكالاً مربعة مستوية. للمركب أيزومران: المقرون cis (زاوية 90، وهو العقار الفعال) والمفروق trans (زاوية 180، غير فعال).",
    "stepByStepSolutionEn": [
      "1. Platinum(II) has a $5d^8$ electron configuration, which strongly prefers square planar geometry ($sp^2d$ or $dsp^2$ hybridization) with a coordination number of $4$.",
      "2. For a square planar complex of the type $[\\text{M}A_2 B_2]$, two geometric isomers exist:\n   - *cis*-isomer: Identical ligands reside on the same side with an angle of $90^\\circ$.\n   - *trans*-isomer: Identical ligands reside on opposite sides with an angle of $180^\\circ$.",
      "3. *Cisplatin* ($cis-[\\text{Pt(NH}_3)_2\\text{Cl}_2]$) enters cancer cells, where the two adjacent chloride ligands are displaced by water, allowing platinum to cross-link adjacent guanine bases on DNA, preventing replication and inducing cancer cell apoptosis.",
      "4. *Transplatin* cannot bridge adjacent guanine bases because its reactive sites are $180^\\circ$ apart, rendering it clinically ineffective."
    ],
    "stepByStepSolutionAr": [
      "١. يمتلك البلاتين الثنائي توزيع $5d^8$ ويفضل بشدة الشكل المربع المستوي بعدد تناسقي 4.",
      "٢. المعقدات المربعة من النوع $[\\text{M}A_2B_2]$ تظهر تماكباً هندسياً (مقرون ומفروق):\n   - المتماكب المقرون *cis*: تقع الليجاندات المتشابهة في نفس الجانب بزاوية $90^\\circ$.\n   - المتماكب المفروق *trans*: تقع متقابلة بزاوية $180^\\circ$.",
      "٣. يرتبط عقار السيسبلاتين المقرون بالحمض النووي DNA للخلايا السرطانية عند قاعدتي جوانين متجاورتين، مانعاً تضاعف الحمض النووي ومحفزاً موت الخلية السرطانية.",
      "٤. يعجز المتماكب المفروق (ترانسبلاتين) عن الربط المزدوج لتباعد موقعي الكلوريد بزاوية $180^\\circ$ فلا يمتلك نشاطاً علاجياً."
    ],
    "teacherTipEn": "Cisplatin is a textbook example of how subtle stereochemical coordination geometry dictates biological activity vs inactivity.",
    "teacherTipAr": "يمثل السيسبلاتين مثالاً كلاسيكياً على كيف يحدد التوجيه الفراغي للروابط التناسقية الفاعلية الحيوية للأدوية."
  },
  {
    "id": "egbac_chem_ch5_se_09",
    "titleEn": "Tetrahedral Crystal Field Splitting and High-Spin Exclusivity",
    "titleAr": "انقسام المجال البلوري رباعي السطوح وحتمية نمط عالي الغزل",
    "difficulty": "medium",
    "questionEn": "In a tetrahedral transition metal coordination complex (such as $[\\text{CoCl}_4]^{2-}$), why is the crystal field splitting energy $\\Delta_t$ significantly smaller than in an octahedral field ($\\Delta_t = \\frac{4}{9} \\Delta_o$), and why are virtually all tetrahedral complexes high-spin?",
    "questionAr": "في معقدات الفلزات الانتقالية رباعية السطوح (مثل $[\\text{CoCl}_4]^{2-}$)، لماذا تكون طاقة انقسام المجال البلوري $\\Delta_t$ أصغر بكثير من المجال ثماني السطوح ($\\Delta_t = \\frac{4}{9} \\Delta_o$)، ولماذا تكون جميع المعقدات رباعية السطوح تقريباً عالية الغزل؟",
    "optionsEn": [
      "Because there are only 4 ligands instead of 6, and no $d$-orbital points directly at the approaching ligands; hence $\\Delta_t$ is always smaller than the pairing energy $P$.",
      "Because tetrahedral complexes contain only $s$ and $p$ valence electrons.",
      "Because pairing energy in tetrahedral complexes is zero.",
      "Because tetrahedral complexes are only formed by diamagnetic non-metals."
    ],
    "optionsAr": [
      "لأن عدد الليجاندات 4 فقط بدلاً من 6، ولا يشير أي أوربيتال من أوربيتالات $d$ في مواجهة الليجاندات مباشرة؛ ولذلك تكون $\\Delta_t$ دائماً أصغر من طاقة الازدواج $P$.",
      "لأن المعقدات رباعية السطوح تحتوي على إلكترونات تكافؤ من نوع $s$ و $p$ فقط.",
      "لأن طاقة الازدواج في المعقدات رباعية السطوح تنعدم تماماً.",
      "لأن المعقدات رباعية السطوح تتكون فقط من لافلزات دايمغناطيسية."
    ],
    "correctAnswer": "Because there are only 4 ligands instead of 6, and no $d$-orbital points directly at the approaching ligands; hence $\\Delta_t$ is always smaller than the pairing energy $P$.",
    "correctIndex": 0,
    "hintEn": "Two factors: 1) only 4 ligands instead of 6 (factor of 4/6 = 2/3), 2) none of the d-orbitals point directly at ligands (another 2/3 factor). Total Delta_t = (2/3) * (2/3) Delta_o = (4/9) Delta_o < P.",
    "hintAr": "عاملان: 1) 4 ليجاندات بدلاً من 6، 2) عدم توجيه الأوربيتالات مباشرة نحو الليجاندات. إذن Delta_t = 4/9 Delta_o، وهي دائماً أصغر من طاقة الازدواج P.",
    "stepByStepSolutionEn": [
      "1. In a tetrahedral field, four ligands occupy alternate corners of a cube enclosing the central metal atom.",
      "2. First reduction factor: There are only $4$ ligands exerting electrostatic repulsion rather than $6$, reducing the field by $\\frac{4}{6} = \\frac{2}{3}$.",
      "3. Second reduction factor: None of the five $d$-orbitals points directly along the metal-ligand bond directions, reducing splitting by an additional factor of $\\frac{2}{3}$.",
      "4. Overall splitting: $\\Delta_t = \\frac{2}{3} \\times \\frac{2}{3} \\Delta_o = \\frac{4}{9} \\Delta_o \\approx 0.44 \\Delta_o$.",
      "5. Because $\\Delta_t$ is so small, it is virtually always smaller than the quantum electron pairing energy ($\\Delta_t < P$). Thus, electrons always maximize unpaired spin by populating the upper level before pairing, making low-spin tetrahedral complexes extremely rare."
    ],
    "stepByStepSolutionAr": [
      "١. في المجال رباعي السطوح، تحتل الليجاندات الأربعة أركاناً متبادلة لمكعب يحيط بالفلز المركزي.",
      "٢. العامل الأول: وجود 4 ليجاندات فقط بدلاً من 6 يخفض شدة المجال الكهروستاتيكي بنسبة $4/6 = 2/3$.",
      "٣. العامل الثاني: لا يوجه أي أوربيتال من أوربيتالات $d$ فصوصه مباشرة نحو الليجاندات، مما يخفض الانقسام بنسبة $2/3$ إضافية.",
      "٤. إجمالي الانقسام: $\\Delta_t = \\frac{4}{9} \\Delta_o \\approx 0.44 \\Delta_o$.",
      "٥. لصغر قيمة $\\Delta_t$ الشديد، فإنها تكون دائماً أقل من طاقة الازدواج $P$، فتتوزع الإلكترونات مفردة أولاً وتكون جميع المعقدات رباعية السطوح عالية الغزل حتماً."
    ],
    "teacherTipEn": "Because Delta_t is roughly half of Delta_o, low-spin tetrahedral complexes are virtually non-existent in coordination chemistry.",
    "teacherTipAr": "نظراً لأن طاقة الانقسام رباعي السطوح أقل من نصف ثماني السطوح، تكاد تنعدم المعقدات رباعية السطوح منخفضة الغزل في الكيمياء."
  },
  {
    "id": "egbac_chem_ch5_se_10",
    "titleEn": "Transition Metal Catalytic Action: Oxidation States and Intermediates",
    "titleAr": "آلية النشاط الحفزي للفلزات الانتقالية: تعدد حالات التأكسد وتكوين المتراكبات",
    "difficulty": "easy",
    "questionEn": "Transition metals and their coordination compounds serve as unmatched homogeneous and heterogeneous industrial catalysts. What two primary atomic features account for this unique catalytic prowess?",
    "questionAr": "تُعد الفلزات الانتقالية ومركباتها التناسقية عوامل حفازة صناعية لا مثيل لها في التفاعلات المتجانسة وغير المتجانسة. ما هما الخاصيتان الذريتان الأساسيتان اللتان تفسران هذه القدرة الحفزية الفائقة؟",
    "optionsEn": [
      "High electrical resistance and large atomic radius.",
      "The ability to adopt multiple variable oxidation states facilitating facile electron transfer, and partially filled $d$-orbitals that form transient coordinate bonds with reactants.",
      "Inability to react with oxygen and zero electron affinity.",
      "Extremely low melting points and complete filling of valence orbitals."
    ],
    "optionsAr": [
      "المقاومة الكهربائية المرتفعة ونصف القطر الذري الكبير للغاية.",
      "القدرة على اتخاذ حالات تأكسد متعددة وسهولة تبادل الإلكترونات، وامتلاك أوربيتالات $d$ ممتلئة جزئياً قادرة على تكوين روابط تناسقية مؤقتة مع المتفاعلات.",
      "عدم القدرة على التفاعل مع الأكسجين وانعدام الميل الإلكتروني.",
      "درجات الانصهار المنخفضة جداً والامتلاء التام لجميع أوربيتالات التكافؤ."
    ],
    "correctAnswer": "The ability to adopt multiple variable oxidation states facilitating facile electron transfer, and partially filled $d$-orbitals that form transient coordinate bonds with reactants.",
    "correctIndex": 1,
    "hintEn": "Variable oxidation states allow redox catalysis (e.g. Fe2+/Fe3+, V4+/V5+). Partially filled d orbitals allow adsorption and lowering of activation energy.",
    "hintAr": "تعدد حالات التأكسد يسمح بالوساطة في تفاعلات الأكسدة والاختزال، وأوربيتالات d غير المكتملة تتيح تكوين روابط مؤقتة تخفض طاقة التنشيط.",
    "stepByStepSolutionEn": [
      "1. Variable Oxidation States: Transition metals readily switch between stable oxidation states (e.g., $\\text{Fe}^{2+} \\rightleftharpoons \\text{Fe}^{3+}$, $\\text{Ti}^{3+} \\rightleftharpoons \\text{Ti}^{4+}$, $\\text{V}^{4+} \\rightleftharpoons \\text{V}^{5+}$), enabling them to act as facile electron relays in redox pathways.",
      "2. Unpaired and Empty $d$-Orbitals: Transition metal surfaces provide accessible localized $d$-orbitals with proper symmetries to coordinate with reactant molecules, weakening their internal chemical bonds (e.g., dissociative chemisorption of $\\text{N}_2$ on $\\text{Fe}$ in Haber-Bosch synthesis).",
      "3. Together, these atomic characteristics create alternative reaction pathways with dramatically lower activation energies ($E_a$)."
    ],
    "stepByStepSolutionAr": [
      "١. تعدد حالات التأكسد: تتنقل الفلزات الانتقالية بمرونة فائقة بين حالات التأكسد المتجاورة (مثل $\\text{Fe}^{2+}/\\text{Fe}^{3+}$ و $\\text{V}^{4+}/\\text{V}^{5+}$)، مما يتيح لها العمل كوسيط فائق في نقل الإلكترونات.",
      "٢. وجود أوربيتالات $d$ شاغرة وممتلئة جزئياً: تتيح للفلز تكوين روابط تناسقية مؤقتة مع جزيئات المواد المتفاعلة على السطح، مما يضعف الروابط الأصلية ويوجه الجزيئات فراغياً.",
      "٣. تؤدي هاتان الخاصيتان معاً إلى توفير مسارات تفاعل بديلة ذات طاقات تنشيط منخفضة للغاية."
    ],
    "teacherTipEn": "Examples of classic transition metal catalysts: Fe in Haber-Bosch, V2O5 in Contact process, Pt/Rh in automotive catalytic converters, and TiCl4 in Ziegler-Natta polymerizations.",
    "teacherTipAr": "أمثلة كلاسيكية: الحديد في هابر-بوش، خامس أكسيد الفاناديوم في حمض الكبريتيك، والبلاتين في المحولات الحفزية للسيارات، وتيتانيوم في بلمرة البولي إيثيلين."
  }
];

export const egBacChemCh5Exercises: SolvedProblem[] = [
  {
    "id": "egbac_chem_ch5_ex_01",
    "titleEn": "Coordination Number and Oxidation State of Central Metal",
    "titleAr": "حساب العدد التناسقي وعدد تأكسد الفلز المركزي",
    "difficulty": "easy",
    "questionEn": "In the potassium hexacyanoferrate(II) coordination compound, $\\text{K}_4[\\text{Fe(CN)}_6]$, what is the oxidation state of the iron center and its coordination number?",
    "questionAr": "في المركب التناسقي سداسي سيانو فيرات(II) البوتاسيوم: $\\text{K}_4[\\text{Fe(CN)}_6]$، ما هو عدد تأكسد ذرة الحديد المركزية وما هو عددها التناسقي؟",
    "optionsEn": [
      "Oxidation state = $+3$; Coordination number = $6$",
      "Oxidation state = $+2$; Coordination number = $4$",
      "Oxidation state = $+2$; Coordination number = $6$",
      "Oxidation state = $+4$; Coordination number = $6$"
    ],
    "optionsAr": [
      "عدد التأكسد = $+3$؛ والعدد التناسقي = $6$",
      "عدد التأكسد = $+2$؛ والعدد التناسقي = $4$",
      "عدد التأكسد = $+2$؛ والعدد التناسقي = $6$",
      "عدد التأكسد = $+4$؛ والعدد التناسقي = $6$"
    ],
    "correctAnswer": "Oxidation state = $+2$; Coordination number = $6$",
    "correctIndex": 2,
    "hintEn": "Potassium has +1 (4 * +1 = +4), so complex anion is [Fe(CN)6]^4-. Cyanide has -1. Fe + 6(-1) = -4 => Fe = +2. Coordination number is 6 (six CN- ligands).",
    "hintAr": "شحنة 4 بوتاسيوم = +4، إذن شحنة الأيون المعقد = -4. السيانيد -1: Fe + 6(-1) = -4 إذن Fe = +2. العدد التناسقي 6 لوجود 6 ليجاندات.",
    "stepByStepSolutionEn": [
      "1. Four potassium counter-ions provide $+4$ charge: $4 \\times (+1) = +4$, so the complex ion is $[\\text{Fe(CN)}_6]^{4-}$.",
      "2. Cyanide ($\\text{CN}^-$) is a monodentate anionic ligand carrying a $-1$ charge.",
      "3. Oxidation state calculation: $\\text{O.S.}(\\text{Fe}) + 6(-1) = -4 \\implies \\text{O.S.}(\\text{Fe}) = +2$.",
      "4. Coordination number is the total number of coordinate bonds formed with the central metal: $6 \\times 1 = 6$ (octahedral geometry)."
    ],
    "stepByStepSolutionAr": [
      "١. كاتيونات البوتاسيوم الأربعة تحمل شحنة $+4$، فيكون الأيون المعقد هو $[\\text{Fe(CN)}_6]^{4-}$.",
      "٢. السيانيد $\\text{CN}^-$ ليجاند أحادي السن يحمل شحنة $-1$.",
      "٣. حساب عدد التأكسد: $\\text{Fe} + 6(-1) = -4 \\implies \\text{Fe} = +2$.",
      "٤. العدد التناسقي هو عدد الروابط التناسقية التي يستقبلها الفلز = 6 (شكل ثماني السطوح)."
    ],
    "teacherTipEn": "Distinguish clearly between oxidation state (the net electrical charge on the metal) and coordination number (the total number of coordinate bonds).",
    "teacherTipAr": "ميز بدقة بين عدد التأكسد (الشحنة الكهربية للفلز) وبين العدد التناسقي (إجمالي الروابط التناسقية الممنوحة له)."
  },
  {
    "id": "egbac_chem_ch5_ex_02",
    "titleEn": "Ligand Denticity: Classification of Common Ligands",
    "titleAr": "سِنِّيَّة الليجاندات: تصنيف الليجاندات أحادية وثنائية وعديدة الأسنان",
    "difficulty": "easy",
    "questionEn": "Which of the following ligands is classified as a **bidentate** (chelating) ligand capable of binding through two donor atoms simultaneously?",
    "questionAr": "أيٌّ من الليجاندات التالية يُصنف كليجاند **ثنائي السن** قادر على الارتباط بالفلز عبر ذرتين مانحتين في آن واحد؟",
    "optionsEn": [
      "Water molecule ($\\text{H}_2\\text{O}$)",
      "Chloride ion ($\\text{Cl}^-$)",
      "Carbon monoxide ($\\text{CO}$)",
      "Oxalate ion ($\\text{C}_2\\text{O}_4^{2-}$)"
    ],
    "optionsAr": [
      "جزيء الماء ($\\text{H}_2\\text{O}$)",
      "أيون الكلوريد ($\\text{Cl}^-$)",
      "أول أكسيد الكربون ($\\text{CO}$)",
      "أنيون الأوكسالات ($\\text{C}_2\\text{O}_4^{2-}$)"
    ],
    "correctAnswer": "Oxalate ion ($\\text{C}_2\\text{O}_4^{2-}$)",
    "correctIndex": 3,
    "hintEn": "Oxalate has two negatively charged oxygen atoms with lone pairs that bind to the central metal forming a stable 5-membered ring. H2O, Cl-, CO are monodentate.",
    "hintAr": "يمتلك أنيون الأوكسالات ذرتي أكسجين مانحتين ترتبطان معاً بالفلز لتكوين حلقة خماسية مستقرة؛ أما الماء والكلوريد و CO فهي أحادية السن.",
    "stepByStepSolutionEn": [
      "1. A monodentate ligand possesses only one donor atom capable of coordinating to a central metal at any given instant (e.g., $\\text{H}_2\\text{O}, \\text{Cl}^-, \\text{CO}, \\text{NH}_3$).",
      "2. The oxalate ion ($[\\text{OOC}-\\text{COO}]^{2-}$) has two separated carboxylate oxygen atoms, each bearing lone pairs with proper spatial geometry to coordinate simultaneously to the same metal center, forming a stable five-membered chelate ring.",
      "3. Therefore, oxalate is a classic bidentate ligand, along with ethylenediamine ($\\text{en}$)."
    ],
    "stepByStepSolutionAr": [
      "١. الليجاند أحادي السن يرتبط بالفلز المركزي عبر ذرة مانحة واحدة فقط (مثل الماء والكلوريد وأول أكسيد الكربون والأمونيا).",
      "٢. يمتلك أنيون الأوكسالات ذرتي أكسجين سالبتين تفصل بينهما مسافة فراغية تسمح لهما بالارتباط المتزامن بنفس ذرة الفلز مكوناً حلقة كلابية خماسية مستقرة.",
      "٣. لذلك يُصنف الأوكسالات كليجاند ثنائي السن مع الإيثيلين ثنائي الأمين."
    ],
    "teacherTipEn": "Although a water molecule has two lone pairs on oxygen, both pairs are on the SAME atom, so steric geometry allows it to bind only once (monodentate).",
    "teacherTipAr": "على الرغم من امتلاك ذرة أكسجين الماء لزوجين حرين، إلا أنهما على نفس الذرة، مما يجعلها ترتبط برابطة واحدة فقط (أحادية السن)."
  },
  {
    "id": "egbac_chem_ch5_ex_03",
    "titleEn": "Colorless Character of d0 and d10 Transition Metal Compounds",
    "titleAr": "انعدام اللون في مركبات العناصر الانتقالية ذات التوزيع d0 و d10",
    "difficulty": "easy",
    "questionEn": "Aqueous solutions of scandium(III) sulfate ($\\text{Sc}_2(\\text{SO}_4)_3$) and zinc(II) sulfate ($\\text{ZnSO}_4$) are completely transparent and colorless. Why do neither $\\text{Sc}^{3+}$ nor $\\text{Zn}^{2+}$ exhibit visible colors in their hydrated complexes?",
    "questionAr": "تكون المحاليل المائية لكبريتات السكانديوم ($\\text{Sc}_2(\\text{SO}_4)_3$) وكبريتات الخارصين ($\\text{ZnSO}_4$) رائقة وعديمة اللون تماماً. لماذا لا يظهر أي لون مرئي في المعقدات المائية لأيونات $\\text{Sc}^{3+}$ و $\\text{Zn}^{2+}$؟",
    "optionsEn": [
      "$\\text{Sc}^{3+}$ has an empty $d^0$ subshell (no $d$-electrons to excite), and $\\text{Zn}^{2+}$ has a completely filled $d^{10}$ subshell (no vacant $d$-orbitals to receive excited electrons), preventing $d-d$ transitions.",
      "Both metals form covalent network polymers that absorb infrared light only.",
      "Scandium and zinc are non-metals that cannot form coordination bonds.",
      "The crystal field splitting energy $\\Delta_o$ in both ions is exactly zero."
    ],
    "optionsAr": [
      "يمتلك $\\text{Sc}^{3+}$ مستوى $d^0$ فارغاً تماماً من الإلكترونات، بينما يمتلك $\\text{Zn}^{2+}$ مستوى $d^{10}$ تام الامتلاء، مما يمنع حدوث أي انتقالات إلكترونية بين أوربيتالات $d-d$.",
      "كلا الفلزين يكون بوليمرات تساهمية تمتص فقط في نطاق الأشعة تحت الحمراء.",
      "السكانديوم والخارصين لافلزان لا يمكنهما تكوين روابط تناسقية.",
      "طاقة انقسام المجال البلوري $\\Delta_o$ في كلا الأيونين تساوي صفراً."
    ],
    "correctAnswer": "$\\text{Sc}^{3+}$ has an empty $d^0$ subshell (no $d$-electrons to excite), and $\\text{Zn}^{2+}$ has a completely filled $d^{10}$ subshell (no vacant $d$-orbitals to receive excited electrons), preventing $d-d$ transitions.",
    "correctIndex": 0,
    "hintEn": "Color requires d-d transitions. Sc3+ is [Ar] 3d0 (no electrons to promote). Zn2+ is [Ar] 3d10 (eg is completely full, nowhere for electrons to jump).",
    "hintAr": "ظهور اللون يشترط انتقالات d-d. السكانديوم الثلاثي 3d0 ليس لديه إلكترونات. والخارصين الثنائي 3d10 ممتلئ تماماً ولا يوجد أوربيتال شاغر لاستقبال إلكترون.",
    "stepByStepSolutionEn": [
      "1. Color in transition metal complexes arises from the promotion of an electron from lower $t_{2g}$ to upper $e_g$ orbitals via absorption of visible photons matching $\\Delta_o$ ($d-d$ transition).",
      "2. For $\\text{Sc}^{3+}$ ($Z = 21$): Loss of $4s^2 3d^1$ gives configuration $[\\text{Ar}] 3d^0$. With zero $d$-electrons, no electronic transitions can occur.",
      "3. For $\\text{Zn}^{2+}$ ($Z = 30$): Loss of $4s^2$ leaves $[\\text{Ar}] 3d^{10}$. With both $t_{2g}^6$ and $e_g^4$ completely filled, the Pauli exclusion principle forbids any electron promotion between $d$-orbitals.",
      "4. Because visible light is not absorbed, all wavelengths are transmitted, rendering both solutions colorless."
    ],
    "stepByStepSolutionAr": [
      "١. ينشأ اللون في مركبات العناصر الانتقالية من امتصاص فوتون ضوئي مرئي لنقل إلكترون من المستوى $t_{2g}$ إلى $e_g$ (انتقالات $d-d$).",
      "٢. أيون السكانديوم الثلاثي $\\text{Sc}^{3+}: [\\text{Ar}] 3d^0$ يخلو تماماً من إلكترونات $d$، فلا يمكن حدوث أي إثارة.",
      "٣. أيون الخارصين الثنائي $\\text{Zn}^{2+}: [\\text{Ar}] 3d^{10}$ ممتلئ تماماً بـ 10 إلكترونات ($t_{2g}^6 e_g^4$)، ولا توجد أماكن شاغرة لاستقبال إلكترون مثار وفق مبدأ باولي.",
      "٤. ينفذ الضوء المرئي بجميع أطواله دون أي امتصاص، فتظهر محاليلها عديمة اللون ورائقة."
    ],
    "teacherTipEn": "Remember this fundamental rule: Any transition metal ion with d0 or d10 configuration is diamagnetic (or weakly diamagnetic) and colorless in solution.",
    "teacherTipAr": "قاعدة ذهبية: أي أيون لفلز انتقالي بتوزيع d0 أو d10 يكون دايمغناطيسياً وعديم اللون دائماً في المحاليل المائية."
  },
  {
    "id": "egbac_chem_ch5_ex_04",
    "titleEn": "Coordination Isomerism vs Linkage Isomerism",
    "titleAr": "التماكب التناسقي مقابل التماكب الترابطي (الليجاندات ثنائية السلوك)",
    "difficulty": "medium",
    "questionEn": "The yellow complex $[\\text{Co(NH}_3)_5(\\text{NO}_2)]\\text{Cl}_2$ and the red complex $[\\text{Co(NH}_3)_5(\\text{ONO})]\\text{Cl}_2$ have the identical chemical formula but exhibit different colors and chemical reactivities. What type of isomerism is demonstrated by this pair of coordination compounds?",
    "questionAr": "المركب التناسقي الأصفر $[\\text{Co(NH}_3)_5(\\text{NO}_2)]\\text{Cl}_2$ والمركب الأحمر $[\\text{Co(NH}_3)_5(\\text{ONO})]\\text{Cl}_2$ يمتلكان نفس الصيغة الجزيئية تماماً ولكنهما يختلفان في اللون والنشاط الكيميائي. ما نوع التماكب الذي يمثله هذا الزوج من المركبات التناسقية؟",
    "optionsEn": [
      "Coordination isomerism.",
      "Linkage isomerism (due to the ambidentate nature of the nitrite ligand).",
      "Ionization isomerism.",
      "Optical stereoisomerism (enantiomers)."
    ],
    "optionsAr": [
      "التماكب التناسقي.",
      "التماكب الترابطي (بسبب الطبيعة ثنائية السلوك المانح لأنيون النيتريت).",
      "التماكب التأيني.",
      "التماكب الضوئي الفراغي."
    ],
    "correctAnswer": "Linkage isomerism (due to the ambidentate nature of the nitrite ligand).",
    "correctIndex": 1,
    "hintEn": "An ambidentate ligand can coordinate through two different atoms. NO2- can bind via nitrogen (-NO2, nitro) or via oxygen (-ONO, nitrito). This is linkage isomerism.",
    "hintAr": "الليجاند ثنائي السلوك (ambidentate) يرتبط بذرتين مختلفتين: يرتبط النيتريت عبر النيتروجين (-NO2) أو عبر الأكسجين (-ONO)، وهذا هو التماكب الترابطي.",
    "stepByStepSolutionEn": [
      "1. An **ambidentate ligand** contains two different potential donor atoms but can coordinate through only one at a time.",
      "2. The nitrite ion ($\\text{NO}_2^-$) can coordinate either through nitrogen ($\text{M}-\text{NO}_2$, the yellow nitro isomer) or through oxygen ($\text{M}-\text{ONO}$, the red nitrito isomer).",
      "3. Because the difference lies entirely in the specific atom linking the ligand to the metal center, this phenomenon is termed **linkage isomerism**.",
      "4. Another common ambidentate ligand exhibiting linkage isomerism is thiocyanate ($\\text{SCN}^-$ linking via $\text{S}$ as thiocyanato or via $\text{N}$ as isothiocyanato)."
    ],
    "stepByStepSolutionAr": [
      "١. الليجاند ثنائي السلوك المانح يمتلك ذرتين مانحتين مختلفتين يمكنه الارتباط بأي منهما في كل مرة.",
      "٢. أنيون النيتريت يمكنه الارتباط بالفلز عبر ذرة النيتروجين ($\\text{M}-\\text{NO}_2$ النيترو الأصفر) أو عبر ذرة الأكسجين ($\\text{M}-\\text{ONO}$ النيتريتو الأحمر).",
      "٣. نظراً لأن الاختلاف ينحصر فقط في الذرة التي تربط الليجاند بالفلز المركزي، يُسمى هذا النوع بـ **التماكب الترابطي**.",
      "٤. من الليجاندات ثنائية السلوك الشهيرة أيضاً الثيوسيانات $\\text{SCN}^-$ التي ترتبط إما عبر الكبريت أو عبر النيتروجين."
    ],
    "teacherTipEn": "Recognize common ambidentate ligands: NO2- (nitro vs nitrito), SCN- (thiocyanato vs isothiocyanato), and CN- (cyano vs isocyano).",
    "teacherTipAr": "احفظ الليجاندات ثنائية السلوك: النيتريت NO2-، الثيوسيانات SCN-، والسيانيد CN-."
  },
  {
    "id": "egbac_chem_ch5_ex_05",
    "titleEn": "Spectrochemical Series Ordering and Splitting Energy Strength",
    "titleAr": "ترتيب متسلسلة الطيف الكيميائي وقوة إحداث انقسام المجال",
    "difficulty": "easy",
    "questionEn": "According to the empirical spectrochemical series, which of the following ligands produces the largest crystal field splitting energy ($\\Delta_o$) when coordinated to a given transition metal ion?",
    "questionAr": "وفق متسلسلة الطيف الكيميائي لليجاندات، أيٌّ من الليجاندات التالية يُحدث أكبر طاقة انقسام للمجال البلوري ($\\Delta_o$) عند ارتباطه بفلز انتقالي معين؟",
    "optionsEn": [
      "Iodide ion ($\\text{I}^-$)",
      "Chloride ion ($\\text{Cl}^-$)",
      "Carbon monoxide ($\\text{CO}$) / Cyanide ion ($\\text{CN}^-$)",
      "Water molecule ($\\text{H}_2\\text{O}$)"
    ],
    "optionsAr": [
      "أيون اليوديد ($\\text{I}^-$)",
      "أيون الكلوريد ($\\text{Cl}^-$)",
      "أول أكسيد الكربون ($\\text{CO}$) / أنيون السيانيد ($\\text{CN}^-$)",
      "جزيء الماء ($\\text{H}_2\\text{O}$)"
    ],
    "correctAnswer": "Carbon monoxide ($\\text{CO}$) / Cyanide ion ($\\text{CN}^-$)",
    "correctIndex": 2,
    "hintEn": "Spectrochemical series order: I- < Br- < Cl- < F- < OH- < H2O < NH3 < en < NO2- < CN- < CO. CO and CN- are the strongest field ligands.",
    "hintAr": "ترتيب المتسلسلة: الهاليدات أضعفها ثم الأكسجين ثم النيتروجين ثم الكربون. CO و CN- هما أقوى الليجاندات إحداثاً للانقسام.",
    "stepByStepSolutionEn": [
      "1. The spectrochemical series orders ligands by increasing crystal field splitting energy $\\Delta_o$:\n   $\\text{I}^- < \\text{Br}^- < \\text{Cl}^- < \\text{F}^- < \\text{OH}^- < \\text{H}_2\\text{O} < \\text{NH}_3 < \\text{en} < \\text{NO}_2^- < \\text{CN}^- < \\text{CO}$.",
      "2. Halide ions are $\\pi$-donor weak-field ligands that reduce $\\Delta_o$.",
      "3. Carbon monoxide ($\\text{CO}$) and cyanide ($\\text{CN}^-$) are strong $\\sigma$-donor and $\\pi$-acceptor (back-bonding) ligands that produce the largest $\\Delta_o$ separations, universally inducing low-spin electronic configurations."
    ],
    "stepByStepSolutionAr": [
      "١. متسلسلة الطيف الكيميائي ترتب الليجاندات تصاعدياً حسب قدرتها على إحداث انقسام أوربيتالات $d$:\n   $\\text{I}^- < \\text{Br}^- < \\text{Cl}^- < \\text{F}^- < \\text{OH}^- < \\text{H}_2\\text{O} < \\text{NH}_3 < \\text{en} < \\text{NO}_2^- < \\text{CN}^- < \\text{CO}$.",
      "٢. أيونات الهاليدات ليجاندات مانحة لإلكترونات $\\pi$ ضعيفة المجال.",
      "٣. أول أكسيد الكربون والسيانيد ليجاندات قوية المجال تمتاز بخاصية الترابط التناسقي العكسي وتحدث أكبر انقسام $\\Delta_o$ وتفرض تكوين معقدات منخفضة الغزل دائماً."
    ],
    "teacherTipEn": "A handy trend rule: Halide donors < Oxygen donors < Nitrogen donors < Carbon donors in field strength.",
    "teacherTipAr": "قاعدة استرشادية لترتيب قوة الليجاندات: ذرات الهالوجين المانحة < ذرات الأكسجين < ذرات النيتروجين < ذرات الكربون."
  },
  {
    "id": "egbac_chem_ch5_ex_06",
    "titleEn": "Cobalt(III) Octahedral Low-Spin Diamagnetic Ground State",
    "titleAr": "الحالة الأرضية الدايمغناطيسية منخفضة الغزل للكوبالت الثلاثي",
    "difficulty": "medium",
    "questionEn": "Hexaamminecobalt(III) chloride, $[\\text{Co(NH}_3)_6]\\text{Cl}_3$, is an octahedral complex of $\\text{Co}^{3+}$ ($d^6$). Experimental magnetic measurements reveal that it is completely diamagnetic with a magnetic moment $\\mu = 0.00\\,\\mu_B$. What does this prove about the relative magnitude of $\\Delta_o$ versus electron pairing energy $P$?",
    "questionAr": "سداسي أمين الكوبالت(III) $[\\text{Co(NH}_3)_6]\\text{Cl}_3$ معقد ثماني السطوح لأيون $\\text{Co}^{3+}$ ($d^6$). أظهرت القياسات المغناطيسية التجريبية أنه دايمغناطيسي تماماً بعزم مغناطيسي $\\mu = 0.00\\,\\mu_B$. ماذا يثبت ذلك بشأن المقدار النسبي لطاقة الانقسام $\\Delta_o$ مقارنة بطاقة الازدواج $P$؟",
    "optionsEn": [
      "$\\Delta_o < P$; the complex has 4 unpaired electrons.",
      "$\\Delta_o = 0$; all orbitals have identical energy.",
      "$\\Delta_o > P$; but electrons populate $e_g$ first.",
      "$\\Delta_o > P$; ammonia acts as a strong-field ligand causing all 6 electrons to pair in $t_{2g}$ ($t_{2g}^6 e_g^0$) with zero unpaired electrons."
    ],
    "optionsAr": [
      "$\\Delta_o < P$؛ ويمتلك المعقد 4 إلكترونات مفردة.",
      "$\\Delta_o = 0$؛ وجميع الأوربيتالات متطابقة في الطاقة تماماً.",
      "$\\Delta_o > P$؛ ولكن الإلكترونات تملأ مستوى $e_g$ أولاً.",
      "$\\Delta_o > P$؛ يعمل النشادر كليجاند قوي المجال يجبر الإلكترونات الستة على الازدواج التام في مستوى $t_{2g}$ ($t_{2g}^6 e_g^0$) دون أي إلكترون مفرد."
    ],
    "correctAnswer": "$\\Delta_o > P$; ammonia acts as a strong-field ligand causing all 6 electrons to pair in $t_{2g}$ ($t_{2g}^6 e_g^0$) with zero unpaired electrons.",
    "correctIndex": 3,
    "hintEn": "Co3+ is 3d6. Diamagnetic (mu = 0) means n = 0 unpaired electrons. This requires low spin: all 6 electrons paired in t2g, so Delta_o must exceed P.",
    "hintAr": "الكوبالت الثلاثي 3d6. دايمغناطيسي يعني انعدام الإلكترونات المفردة (n = 0)، وهذا يستلزم ازدواج الستة في t2g، مما يعني بالضرورة أن Delta_o > P.",
    "stepByStepSolutionEn": [
      "1. Electronic configuration of cobalt(III): $\\text{Co}^{3+} = [\\text{Ar}] 3d^6$.",
      "2. If $\\Delta_o < P$ (high-spin), electrons would populate $t_{2g}^4 e_g^2$, giving $4$ unpaired electrons and strong paramagnetism ($\\mu \\approx 4.9\\,\\mu_B$).",
      "3. Because experimental $\\mu = 0.00\\,\\mu_B$, there are zero unpaired electrons ($n = 0$).",
      "4. This requires complete electron pairing in the lower level: $t_{2g}^6 e_g^0$.",
      "5. Electron pairing in $t_{2g}$ rather than promotion to $e_g$ conclusively proves that the crystal field splitting exceeds the pairing energy: $\\Delta_o > P$."
    ],
    "stepByStepSolutionAr": [
      "١. التوزيع الإلكتروني لكاتيون الكوبالت الثلاثي: $\\text{Co}^{3+}: [\\text{Ar}] 3d^6$.",
      "٢. لو كان المعقد عالي الغزل ($\\Delta_o < P$) لكان التوزيع $t_{2g}^4 e_g^2$ وامتلك 4 إلكترونات مفردة وكان بارامغناطيسياً قوياً.",
      "٣. بما أن القياس العملي أثبت انعدام العزم المغناطيسي تماماً ($\\mu = 0$)، فلا توجد أي إلكترونات مفردة ($n = 0$).",
      "٤. هذا يستلزم ازدواج الإلكترونات الستة جميعاً في المستوى الأدنى: $t_{2g}^6 e_g^0$.",
      "٥. تفضيل الازدواج على الصعود يثبت قطعاً أن طاقة انقسام المجال أكبر من طاقة الازدواج: $\\Delta_o > P$."
    ],
    "teacherTipEn": "Nearly all Co(III) octahedral complexes are low-spin diamagnetic t2g^6 (with the rare exception of [CoF6]3- which is high-spin).",
    "teacherTipAr": "تكون جميع معقدات الكوبالت الثلاثي ثمانية السطوح تقريباً منخفضة الغزل ودايمغناطيسية $t_{2g}^6$ باستثناء معقد الفلوريد [CoF6]3-."
  },
  {
    "id": "egbac_chem_ch5_ex_07",
    "titleEn": "Hydrate Isomerism in Chromium(III) Chloride",
    "titleAr": "التماكب التميؤي (المائي) في كلوريد الكروم الثلاثي",
    "difficulty": "medium",
    "questionEn": "Chromium(III) chloride hexahydrate exists as three distinct hydrate isomers with formulas:\n- Isomer A (violet): $[\\text{Cr(H}_2\\text{O})_6]\\text{Cl}_3$\n- Isomer B (blue-green): $[\\text{Cr(H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$\n- Isomer C (dark green): $[\\text{Cr(H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl} \\cdot 2\\text{H}_2\\text{O}$\nIf $1.0\\text{ mol}$ of each isomer is separately treated with an excess of $\\text{AgNO}_3$, how many moles of $\\text{AgCl}(s)$ precipitate from isomers A, B, and C respectively?",
    "questionAr": "يوجد كلوريد الكروم الثلاثي المتهدرت في صورة ثلاثة متماكبات تميؤية:\n- المتماكب A (بنفسجي): $[\\text{Cr(H}_2\\text{O})_6]\\text{Cl}_3$\n- المتماكب B (أزرق مخضر): $[\\text{Cr(H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$\n- المتماكب C (أخضر داكن): $[\\text{Cr(H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl} \\cdot 2\\text{H}_2\\text{O}$\nعند معاملة مول واحد من كل متماكب على حدة بفائض من نترات الفضة $\\text{AgNO}_3$، كم مولاً من $\\text{AgCl}$ يترسب من A و B و C على الترتيب؟",
    "optionsEn": [
      "A: $3.0\\text{ mol}$; B: $2.0\\text{ mol}$; C: $1.0\\text{ mol}$",
      "A: $3.0\\text{ mol}$; B: $3.0\\text{ mol}$; C: $3.0\\text{ mol}$",
      "A: $0.0\\text{ mol}$; B: $1.0\\text{ mol}$; C: $2.0\\text{ mol}$",
      "A: $6.0\\text{ mol}$; B: $5.0\\text{ mol}$; C: $4.0\\text{ mol}$"
    ],
    "optionsAr": [
      "A: $3.0\\text{ مول}$؛ B: $2.0\\text{ مول}$؛ C: $1.0\\text{ مول}$",
      "A: $3.0\\text{ مول}$؛ B: $3.0\\text{ مول}$؛ C: $3.0\\text{ مول}$",
      "A: $0.0\\text{ مول}$؛ B: $1.0\\text{ مول}$؛ C: $2.0\\text{ مول}$",
      "A: $6.0\\text{ مول}$؛ B: $5.0\\text{ مول}$؛ C: $4.0\\text{ مول}$"
    ],
    "correctAnswer": "A: $3.0\\text{ mol}$; B: $2.0\\text{ mol}$; C: $1.0\\text{ mol}$",
    "correctIndex": 0,
    "hintEn": "Only chloride ions outside the brackets (counter ions in ionization sphere) precipitate with AgNO3. A has 3 Cl outside, B has 2 Cl outside, C has 1 Cl outside.",
    "hintAr": "أيونات الكلوريد خارج الأقواس فقط هي القابلة للترسيب بنترات الفضة. يمتلك A ثلاثة كلوريدات حرة، و B اثنان، و C واحد فقط.",
    "stepByStepSolutionEn": [
      "1. In hydrate isomerism, water molecules exchange positions between the inner coordination sphere (acting as coordinate ligands) and the outer crystal lattice (acting as water of crystallization).",
      "2. Only chloride ions residing in the outer ionization sphere are free to react with $\\text{Ag}^+$ ions to precipitate insoluble $\\text{AgCl}$.",
      "3. For Isomer A ($[\\text{Cr(H}_2\\text{O})_6]\\text{Cl}_3$): All $3$ chloride ions are outside $\\implies 3.0\\text{ mol } \\text{AgCl}$.",
      "4. For Isomer B ($[\\text{Cr(H}_2\\text{O})_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$): Exactly $2$ chloride ions are outside $\\implies 2.0\\text{ mol } \\text{AgCl}$.",
      "5. For Isomer C ($[\\text{Cr(H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl} \\cdot 2\\text{H}_2\\text{O}$): Exactly $1$ chloride ion is outside $\\implies 1.0\\text{ mol } \\text{AgCl}$."
    ],
    "stepByStepSolutionAr": [
      "١. في التماكب التميؤي تتبادل جزيئات الماء مواقعها بين مجال التناسق الداخلي ومجال التأين الخلوي الخارجي.",
      "٢. تتفاعل أيونات الكلوريد الحرة الواقعة خارج الأقواس المربعة فقط مع أيونات الفضة لترسيب كلوريد الفضة.",
      "٣. المتماكب A يمتلك 3 أيونات كلوريد خارج القوس $\\implies$ يترسب $3.0\\text{ mol}$.",
      "٤. المتماكب B يمتلك أيوني كلوريد خارج القوس $\\implies$ يترسب $2.0\\text{ mol}$.",
      "٥. المتماكب C يمتلك أيون كلوريد واحداً فقط خارج القوس $\\implies$ يترسب $1.0\\text{ mol}$."
    ],
    "teacherTipEn": "Hydrate isomerism is a classic experimental demonstration confirming Werner's distinction between inner and outer coordination spheres.",
    "teacherTipAr": "يُعد التماكب التميؤي دليلاً تجريبياً قاطعاً يثبت صحة تفريق فيرنر بين مجالي التناسق الداخلي والتأين الخارجي."
  },
  {
    "id": "egbac_chem_ch5_ex_08",
    "titleEn": "Nickel(II) Complexes: Octahedral vs Square Planar Geometries",
    "titleAr": "معقدات النيكل الثنائي: ثماني السطوح مقابل المربع المستوي",
    "difficulty": "medium",
    "questionEn": "Nickel(II) is a $d^8$ metal ion. When coordinated to weak-field ligands (as in $[\\text{Ni(H}_2\\text{O})_6]^{2+}$), it forms an octahedral complex with $2$ unpaired electrons (paramagnetic). When coordinated to strong-field cyanide ligands (as in $[\\text{Ni(CN)}_4]^{2-}$), it forms a 4-coordinate complex that is completely diamagnetic. What is the geometry of $[\\text{Ni(CN)}_4]^{2-}$?",
    "questionAr": "النيكل الثنائي أيون فلزي بتوزيع $d^8$. عند ارتباطه بليجاندات ضعيفة (مثل $[\\text{Ni(H}_2\\text{O})_6]^{2+}$) يكون معقداً ثماني السطوح بإلكترونين مفردين (بارامغناطيسي). وعند ارتباطه بليجاندات السيانيد القوية (مثل $[\\text{Ni(CN)}_4]^{2-}$) يكون معقداً رباعي التناسق دايمغناطيسياً تماماً. ما هو الشكل الهندسي لمعقد $[\\text{Ni(CN)}_4]^{2-}$؟",
    "optionsEn": [
      "Square planar geometry (diamagnetic $d^8$, $dsp^2$ hybridization).",
      "Tetrahedral geometry (paramagnetic $d^8$, $sp^3$ hybridization).",
      "Octahedral geometry with two missing ligands.",
      "Linear geometry with $sp$ hybridization."
    ],
    "optionsAr": [
      "شكل مربع مستوٍ (دايمغناطيسي $d^8$، تهجين $dsp^2$).",
      "شكل رباعي السطوح (بارامغناطيسي $d^8$، تهجين $sp^3$).",
      "شكل ثماني السطوح به ليجاندان مفقودان.",
      "شكل خطي بتهجين $sp$."
    ],
    "correctAnswer": "Square planar geometry (diamagnetic $d^8$, $dsp^2$ hybridization).",
    "correctIndex": 0,
    "hintEn": "d8 with strong field ligands in 4-coordination pairs all 8 electrons in 4 lower orbitals, leaving dx^2-y^2 vacant. This gives square planar (diamagnetic).",
    "hintAr": "أيون d8 مع ليجاند قوي بعدد تناسقي 4 يزدوج في 4 أوربيتالات أدنى ويترك أوربيتال dx^2-y^2 فارغاً، فينتج شكل مربع مستوٍ دايمغناطيسي.",
    "stepByStepSolutionEn": [
      "1. In tetrahedral geometry ($sp^3$), the $d^8$ configuration would place electrons into $e^4 t_2^4$, inevitably leaving $2$ unpaired electrons in $t_2$ (paramagnetic).",
      "2. In square planar geometry, the $d$-orbitals split into four distinct energy levels: $d_{xz}, d_{yz}$ (lowest), $d_{z^2}$, $d_{xy}$, and $d_{x^2-y^2}$ (highest, pointing directly at the four planar ligands).",
      "3. With strong-field $\\text{CN}^-$, the energy gap to $d_{x^2-y^2}$ is very large. All $8$ electrons pair up in the lower four orbitals ($d_{xz}^2 d_{yz}^2 d_{z^2}^2 d_{xy}^2$), leaving $d_{x^2-y^2}$ vacant.",
      "4. Because all electrons are paired ($n = 0$), the complex is diamagnetic, proving a square planar ($dsp^2$) geometry."
    ],
    "stepByStepSolutionAr": [
      "١. لو كان المعقد رباعي السطوح ($sp^3$)، لتوزعت إلكترونات $d^8$ على هيئة $e^4 t_2^4$ واحتوى حتماً على إلكترونين مفردين ولبقي بارامغناطيسياً.",
      "٢. في الشكل المربع المستوي تنقسم أوربيتالات $d$ إلى 4 مستويات طاقة، ويرتفع أوربيتال $d_{x^2-y^2}$ إلى طاقة عليا معزولة.",
      "٣. مع ليجاند السيانيد القوي، تزدوج الإلكترونات الثمانية في الأوربيتالات الأربعة الدنيا، ويبقى $d_{x^2-y^2}$ فارغاً.",
      "٤. يؤدي الازدواج التام لانعدام الإلكترونات المفردة ($n = 0$) مما يبرهن قاطعاً على أن المعقد مربع مستوٍ ($dsp^2$)."
    ],
    "teacherTipEn": "Remember this diagnostic rule: 4-coordinate d8 metal complexes (Ni2+, Pd2+, Pt2+, Au3+) with strong-field ligands are square planar and diamagnetic.",
    "teacherTipAr": "قاعدة تشخيصية: معقدات d8 رباعية التناسق مع الليجاندات القوية تكون مربعة مستوية ودايمغناطيسية دائماً."
  },
  {
    "id": "egbac_chem_ch5_ex_09",
    "titleEn": "Jahn-Teller Distortion in Copper(II) Octahedral Complexes",
    "titleAr": "تشوه يان-تيلر في معقدات النحاس الثنائي ثمانية السطوح",
    "difficulty": "hots",
    "questionEn": "X-ray crystallography reveals that in the octahedral hexaaquacopper(II) complex, $[\\text{Cu(H}_2\\text{O})_6]^{2+}$, four equatorial $\\text{Cu}-\\text{O}$ bond lengths are $1.97\\text{ \\AA}$, while the two axial $\\text{Cu}-\\text{O}$ bond lengths are significantly elongated to $2.38\\text{ \\AA}$. What physical principle explains this tetragonal distortion?",
    "questionAr": "أظهرت حيود الأشعة السينية لمعقد النحاس المائي ثماني السطوح $[\\text{Cu(H}_2\\text{O})_6]^{2+}$ أن أطوال الروابط الأربع الاستوائية هي $1.97\\text{ \\AA}$، بينما تطول الرابطتان المحوريتان بشكل ملحوظ إلى $2.38\\text{ \\AA}$. ما هو المبدأ الفيزيائي المفسر لهذا التشوه الهندسي الرباعي؟",
    "optionsEn": [
      "The Pauli exclusion principle forcing electrons to leave the metal.",
      "The Jahn-Teller theorem, caused by the asymmetric occupancy of the degenerate $e_g$ sub-level in a $d^9$ system ($t_{2g}^6 e_g^3$).",
      "Hydrogen bonding between water molecules in the solvent.",
      "Photoelectric emission of electrons from the axial ligands."
    ],
    "optionsAr": [
      "مبدأ الاستبعاد لباولي الذي يجبر الإلكترونات على مغادرة الفلز.",
      "مبرهنة يان-تيلر، والناتجة عن التوزيع الإلكتروني غير المتماثل في المستوى المنحل $e_g$ لأيون $d^9$ ($t_{2g}^6 e_g^3$).",
      "الروابط الهيدروجينية بين جزيئات الماء في المذيب.",
      "الانبعاث الكهروضوئي للإلكترونات من الليجاندات المحورية."
    ],
    "correctAnswer": "The Jahn-Teller theorem, caused by the asymmetric occupancy of the degenerate $e_g$ sub-level in a $d^9$ system ($t_{2g}^6 e_g^3$).",
    "correctIndex": 1,
    "hintEn": "Jahn-Teller theorem: any non-linear molecule with a degenerate ground state undergoes geometric distortion to remove degeneracy. Cu2+ is d9: eg has 3 electrons (dx^2-y^2)^1 (dz^2)^2.",
    "hintAr": "مبرهنة يان-تيلر: أي جزيء غير خطي ذي حالة أرضية منحلة إلكترونياً يتشوه هندسياً لرفع الانحلال وخفض الطاقة. النحاس الثنائي d9 يمتلك 3 إلكترونات في eg فيطول المحور z.",
    "stepByStepSolutionEn": [
      "1. Electronic configuration of copper(II): $\\text{Cu}^{2+} = [\\text{Ar}] 3d^9$. In an octahedral field, the ground state is $t_{2g}^6 e_g^3$.",
      "2. The upper $e_g$ sub-level contains an odd number ($3$) of electrons: one orbital has two electrons ($d_{z^2}^2$) while the other has only one ($d_{x^2-y^2}^1$), representing an asymmetrically occupied degenerate ground state.",
      "3. The Jahn-Teller theorem states that any non-linear molecular system with a spatially degenerate electronic state is unstable and will undergo geometric distortion to lower its symmetry and remove the degeneracy.",
      "4. Putting two electrons in $d_{z^2}$ provides greater screening along the $z$-axis; the two axial water ligands experience weaker attraction and move farther away (axial elongation), lowering the energy of $d_{z^2}$ and stabilizing the complex."
    ],
    "stepByStepSolutionAr": [
      "١. التوزيع الإلكتروني للنحاس الثنائي: $\\text{Cu}^{2+}: [\\text{Ar}] 3d^9$، وتوزيعه في المجال ثماني السطوح هو $t_{2g}^6 e_g^3$.",
      "٢. يحتوي المستوى الثنائي $e_g$ على 3 إلكترونات (توزيع غير متماثل): يمتلك أحدهما إلكترونين ($d_{z^2}^2$) بينما يمتلك الآخر إلكتروناً واحداً ($d_{x^2-y^2}^1$).",
      "٣. تنص مبرهنة يان-تيلر على أن أي جزيء غير خطي ذي حالة إلكترونية منحلة غير متماثلة يتعرض لتشوه هندسي تلقائي لخفض طاقته وكسر التماثل.",
      "٤. وجود إلكترونين في أوربيتال $d_{z^2}$ يحجب شحنة النواة على طول المحور $z$، فتبتعد الليجاندتان المحوريتان وتستطيل الرابطتان ويستقر المعقد."
    ],
    "teacherTipEn": "Copper(II) complexes are the most famous textbook example of pronounced Jahn-Teller elongation in all of coordination chemistry.",
    "teacherTipAr": "تعد معقدات النحاس الثنائي النموذج الأبرز عالمياً على ظاهرة استطالة يان-تيلر الهندسية في كيمياء المتراكبات."
  },
  {
    "id": "egbac_chem_ch5_ex_10",
    "titleEn": "Homogeneous Organometallic Catalysis: Wilkinson's Catalyst",
    "titleAr": "الحفز العضوي الفلزي المتجانس: حفاز ويلكنسون لهدرجة الألكينات",
    "difficulty": "medium",
    "questionEn": "Wilkinson's catalyst, $[\\text{RhCl(PPh}_3)_3]$, is a renowned homogeneous catalyst for the selective hydrogenation of alkenes to alkanes. What is the geometry, oxidation state, and $d$-electron count of the central rhodium metal in this active complex?",
    "questionAr": "يُعد حفاز ويلكنسون $[\\text{RhCl(PPh}_3)_3]$ أشهر العوامل الحفازة المتجانسة المستخدمة صناعياً في الهدرجة الانتقائية للألكينات إلى ألكانات. ما هو الشكل الهندسي وعدد التأكسد وعدد إلكترونات $d$ للروديوم في هذا المعقد الفعال؟",
    "optionsEn": [
      "Tetrahedral geometry; Rhodium(III) ($+3$ oxidation state); $4d^6$ configuration.",
      "Octahedral geometry; Rhodium(0); $4d^{10}$ configuration.",
      "Square planar geometry; Rhodium(I) ($+1$ oxidation state); $4d^8$ configuration.",
      "Trigonal planar geometry; Rhodium(II) ($+2$ oxidation state); $4d^7$ configuration."
    ],
    "optionsAr": [
      "شكل رباعي السطوح؛ روديوم(III) (حالة تأكسد $+3$)؛ وتوزيع $4d^6$.",
      "شكل ثماني السطوح؛ روديوم متعادل (0)؛ وتوزيع $4d^{10}$.",
      "شكل مربع مستوٍ؛ روديوم(I) (حالة تأكسد $+1$)؛ وتوزيع إلكتروني $4d^8$.",
      "شكل مثلث مستوٍ؛ روديوم(II) (حالة تأكسد $+2$)؛ وتوزيع $4d^7$."
    ],
    "correctAnswer": "Square planar geometry; Rhodium(I) ($+1$ oxidation state); $4d^8$ configuration.",
    "correctIndex": 2,
    "hintEn": "PPh3 is neutral, Cl is -1. Rh + (-1) = 0 => Rh is +1. Rh is in group 9: Rh(I) is 9 - 1 = 8 d-electrons (4d8). 4-coordinate 4d8 is square planar.",
    "hintAr": "ثلاثي فينيل فوسفين متعادل، الكلوريد -1. إذن الروديوم +1 (Rh(I)). ينتمي للمجموعة 9: Rh+ لديه 8 إلكترونات في 4d. ومع 4 ليجاندات يكون مربعاً مستوياً.",
    "stepByStepSolutionEn": [
      "1. Ligand charges: Triphenylphosphine ($\\text{PPh}_3$) is a neutral Lewis base ligand ($0$), and chloride is anionic ($-1$).",
      "2. Rhodium oxidation state: $\\text{O.S.}(\\text{Rh}) + 1(-1) + 3(0) = 0 \\implies \\text{Rh} = +1$.",
      "3. Neutral Rh ($Z = 45$, group 9) has $9$ valence electrons ($5s^1 4d^8$). Removing one electron for $\\text{Rh}^+$ gives the $4d^8$ configuration (a 16-electron complex).",
      "4. Second-row transition metals with $d^8$ configuration exclusively adopt square planar geometry.",
      "5. The catalytic cycle proceeds via facile reversible oxidative addition of $\\text{H}_2$ ($\text{Rh(I)} \\to \\text{Rh(III)}$) followed by alkene coordination and reductive elimination."
    ],
    "stepByStepSolutionAr": [
      "١. شحنات الليجاندات: ثلاثي فينيل فوسفين ليجاند متعادل ($0$)، والكلوريد يحمل شحنة $-1$.",
      "٢. عدد تأكسد الروديوم: $\\text{Rh} + (-1) = 0 \\implies \\text{Rh} = +1$.",
      "٣. ذرة الروديوم تنتمي للمجموعة 9، وعند فقد إلكترون يصبح كاتيـون $\\text{Rh}^+$ يمتلك 8 إلكترونات في المستوى $4d^8$ (معقد بـ 16 إلكتروناً).",
      "٤. فلزات الدورة الانتقالية الثانية ذات التوزيع $d^8$ تكون دائماً مربعة مستوية الشكل.",
      "٥. تعتمد دورة الحفز على سهولة التأكسد الإضافي مع الهيدروجين من $\\text{Rh(I)}$ إلى $\\text{Rh(III)}$ ثم الحذف الاختزالي لتحرير الألكان."
    ],
    "teacherTipEn": "Sir Geoffrey Wilkinson received the 1973 Nobel Prize in Chemistry for pioneering organometallic sandwich and homogeneous coordination catalysts.",
    "teacherTipAr": "نال السير جيفري ويلكنسون جائزة نوبل في الكيمياء عام 1973 لريادته في تطوير الحفازات التناسقية المتجانسة."
  },
  {
    "id": "egbac_chem_ch5_ex_11",
    "titleEn": "Paramagnetism vs Diamagnetism in Transition Metal Cations",
    "titleAr": "المقارنة بين الخاصية البارامغناطيسية والدايمغناطيسية لكاتيونات الفلزات الانتقالية",
    "difficulty": "easy",
    "questionEn": "Which of the following transition metal cations is **diamagnetic** (possesses zero unpaired electrons and is weakly repelled by an external magnetic field)?",
    "questionAr": "أيٌّ من كاتيونات الفلزات الانتقالية التالية يُعد **دايمغناطيسياً** (لا يحتوي على أي إلكترونات مفردة ويتنافر ضعيفاً مع المجال المغناطيسي الخارجي)؟",
    "optionsEn": [
      "$\\text{Fe}^{2+}$ ($[\\text{Ar}] 3d^6$)",
      "$\\text{Cu}^{2+}$ ($[\\text{Ar}] 3d^9$)",
      "$\\text{Mn}^{2+}$ ($[\\text{Ar}] 3d^5$)",
      "$\\text{Cu}^+$ ($[\\text{Ar}] 3d^{10}$)"
    ],
    "optionsAr": [
      "$\\text{Fe}^{2+}$ ($[\\text{Ar}] 3d^6$)",
      "$\\text{Cu}^{2+}$ ($[\\text{Ar}] 3d^9$)",
      "$\\text{Mn}^{2+}$ ($[\\text{Ar}] 3d^5$)",
      "$\\text{Cu}^+$ ($[\\text{Ar}] 3d^{10}$)"
    ],
    "correctAnswer": "$\\text{Cu}^+$ ($[\\text{Ar}] 3d^{10}$)",
    "correctIndex": 3,
    "hintEn": "Diamagnetic means ALL electrons are paired (n = 0). Cu+ has [Ar] 3d10 where all 10 electrons are paired in 5 orbitals. Fe2+ has 4 unpaired, Cu2+ has 1, Mn2+ has 5.",
    "hintAr": "الدايمغناطيسية تعني ازدواج جميع الإلكترونات (n = 0). النحاس الأحادي Cu+ توزيعه 3d10 وكل الإلكترونات الـ 10 مزدوجة؛ بينما الباقي بارامغناطيسي.",
    "stepByStepSolutionEn": [
      "1. Paramagnetic species contain one or more unpaired electrons and are attracted into an external magnetic field.",
      "2. Diamagnetic species have all electrons paired ($n = 0$) and are weakly repelled by magnetic fields.",
      "3. Configurations:\n   - $\\text{Fe}^{2+}: 3d^6$ ($4$ unpaired electrons, paramagnetic)\n   - $\\text{Cu}^{2+}: 3d^9$ ($1$ unpaired electron, paramagnetic)\n   - $\\text{Mn}^{2+}: 3d^5$ ($5$ unpaired electrons, strongly paramagnetic)\n   - $\\text{Cu}^+: 3d^{10}$ (all $10$ electrons paired in the five $d$-orbitals, strictly **diamagnetic**)."
    ],
    "stepByStepSolutionAr": [
      "١. المواد البارامغناطيسية تمتلك إلكترونات مفردة وتنجذب نحو المجال المغناطيسي الخارجي.",
      "٢. المواد الدايمغناطيسية تكون جميع إلكتروناتها في حالة ازدواج ($n = 0$) وتتنافر تنافراً ضعيفاً مع المجال.",
      "٣. فحص الكاتيونات:\n   - $\\text{Fe}^{2+}: 3d^6$ (4 إلكترونات مفردة - بارامغناطيسي)\n   - $\\text{Cu}^{2+}: 3d^9$ (إلكترون مفرد واحد - بارامغناطيسي)\n   - $\\text{Mn}^{2+}: 3d^5$ (5 إلكترونات مفردة - بارامغناطيسي قوي)\n   - $\\text{Cu}^+: 3d^{10}$ (جميع الإلكترونات الـ 10 مزدوجة - **دايمغناطيسي**)."
    ],
    "teacherTipEn": "Remember that neutral copper is [Ar] 4s1 3d10; ionizing to Cu+ removes the single 4s electron, leaving a completely filled 3d10 shell.",
    "teacherTipAr": "تذكر أن النحاس المتعادل شاذ التوزيع [Ar] 4s1 3d10، وعند تأينه إلى Cu+ يفقد إلكترون 4s ويتبقى غلاف 3d10 تام الامتلاء."
  },
  {
    "id": "egbac_chem_ch5_ex_12",
    "titleEn": "Anomalous Valence Electron Configurations of Chromium and Copper",
    "titleAr": "شذوذ التوزيع الإلكتروني لذرتي الكروم والنحاس",
    "difficulty": "easy",
    "questionEn": "Why do neutral chromium ($_{24}\\text{Cr}$) and copper ($_{29}\\text{Cu}$) possess ground-state electron configurations of $[\\text{Ar}] 4s^1 3d^5$ and $[\\text{Ar}] 4s^1 3d^{10}$ rather than the expected $[\\text{Ar}] 4s^2 3d^4$ and $[\\text{Ar}] 4s^2 3d^9$?",
    "questionAr": "لماذا تمتلك ذرتا الكروم ($_{24}\\text{Cr}$) والنحاس ($_{29}\\text{Cu}$) التوزيعين الإلكترونيين $[\\text{Ar}] 4s^1 3d^5$ و $[\\text{Ar}] 4s^1 3d^{10}$ بدلاً من التوزيع المتوقع $[\\text{Ar}] 4s^2 3d^4$ و $[\\text{Ar}] 4s^2 3d^9$؟",
    "optionsEn": [
      "Because transferring one electron from $4s$ to $3d$ generates half-filled ($d^5$) and fully-filled ($d^{10}$) subshells with maximal quantum exchange energy and spherically symmetric stability.",
      "Because the $4s$ orbital has higher energy than $3d$ at all times.",
      "Because chromium and copper have odd atomic numbers.",
      "Because $4s$ electrons are captured by the nucleus via beta decay."
    ],
    "optionsAr": [
      "لأن انتقال إلكترون من أوربيتال $4s$ إلى $3d$ يحقق حالة النصف امتلاء المستقرة ($d^5$) في الكروم والامتلاء التام ($d^{10}$) في النحاس، مما يعطي أقصى طاقة استقرار وتبادل كمي.",
      "لأن أوربيتال $4s$ أعلى دائماً في الطاقة من أوربيتال $3d$.",
      "لأن الأعداد الذرية للكروم والنحاس أعداد فردية.",
      "لأن النواة تبتلع إلكترونات $4s$ عبر تحلل بيتا العكسي."
    ],
    "correctAnswer": "Because transferring one electron from $4s$ to $3d$ generates half-filled ($d^5$) and fully-filled ($d^{10}$) subshells with maximal quantum exchange energy and spherically symmetric stability.",
    "correctIndex": 0,
    "hintEn": "Half-filled (d5) and fully-filled (d10) subshells have extra stability due to exchange energy and symmetry, favoring 4s1 3d5 and 4s1 3d10.",
    "hintAr": "المستويات نصف الممتلئة d5 والتامة الامتلاء d10 تمتلك طاقة استقرار إضافية وتماثلاً كروياً يرجح انتقال إلكترون من 4s إلى 3d.",
    "stepByStepSolutionEn": [
      "1. The energy difference between $4s$ and $3d$ orbitals in the first transition series is very small.",
      "2. For chromium: Promoting one electron from $4s$ to $3d$ produces $[\\text{Ar}] 4s^1 3d^5$. The five parallel spins in the half-filled $3d^5$ subshell maximize the number of possible quantum mechanical exchanges ($10$ exchanges), yielding stabilization energy that outweighs the small promotion cost.",
      "3. For copper: Promoting one electron produces $[\\text{Ar}] 4s^1 3d^{10}$. The completely filled $d^{10}$ subshell achieves complete spherical electron cloud symmetry and maximum exchange energy ($20$ exchanges).",
      "4. This anomalous configuration minimizes the total ground-state energy of both atoms."
    ],
    "stepByStepSolutionAr": [
      "١. فارق الطاقة بين مستويي $4s$ و $3d$ في السلسلة الانتقالية الأولى ضئيل للغاية.",
      "٢. في الكروم: انتقال إلكترون يعطي $[\\text{Ar}] 4s^1 3d^5$؛ وتوفر إلكترونات $3d^5$ الخمسة المتوازية أقصى عدد من طاقات التبادل الكمي (10 تبادلات) مما يخفض طاقة الذرة.",
      "٣. في النحاس: انتقال إلكترون يعطي $[\\text{Ar}] 4s^1 3d^{10}$؛ فيتحقق الامتلاء التام والتماثل الكروي المتناسق وأقصى طاقة تبادل (20 تبادلاً).",
      "٤. هذا التوزيع غير المعتاد يحقق أدنى طاقة وضع كلية للذرة في حالتها الأرضية المستقرة."
    ],
    "teacherTipEn": "Always remember these two famous anomalies in first-row transition metal configurations: Cr (24) is 4s1 3d5 and Cu (29) is 4s1 3d10.",
    "teacherTipAr": "تذكر دائماً الاستثناءين الكلاسيكيين في السلسلة الانتقالية الأولى: الكروم 24 هو 4s1 3d5، والنحاس 29 هو 4s1 3d10."
  },
  {
    "id": "egbac_chem_ch5_ex_13",
    "titleEn": "Color Wheel and Complementary Color Perception",
    "titleAr": "عجلة الألوان وقواعد استنتاج اللون المتمم الممتص والمنعكس",
    "difficulty": "easy",
    "questionEn": "An aqueous solution containing the complex ion $[\\text{Cu(H}_2\\text{O})_6]^{2+}$ appears brilliantly **sky blue** to the naked human eye. Which region of the visible light spectrum is primarily absorbed by this complex?",
    "questionAr": "يظهر المحلول المائي لمعقد النحاس المائي $[\\text{Cu(H}_2\\text{O})_6]^{2+}$ باللون **الأزرق السماوي** الناصع للعين المجردة. أي نطاق من أطياف الضوء المرئي تمتصه إلكترونات هذا المعقد في المقام الأول؟",
    "optionsEn": [
      "Red-orange light (wavelength $\\approx 600-650\\text{ nm}$)",
      "Blue light (wavelength $\\approx 450\\text{ nm}$)",
      "Ultraviolet radiation (wavelength $\\approx 250\\text{ nm}$)",
      "Green light (wavelength $\\approx 520\\text{ nm}$)"
    ],
    "optionsAr": [
      "الضوء البرتقالي المائل للأحمر (الطول الموجي $\\approx 600-650\\text{ نانومتر}$)",
      "الضوء الأزرق (الطول الموجي $\\approx 450\\text{ نانومتر}$)",
      "الأشعة فوق البنفسجية (الطول الموجي $\\approx 250\\text{ نانومتر}$)",
      "الضوء الأخضر (الطول الموجي $\\approx 520\\text{ نانومتر}$)"
    ],
    "correctAnswer": "Red-orange light (wavelength $\\approx 600-650\\text{ nm}$)",
    "correctIndex": 0,
    "hintEn": "The observed color is the complementary color to the absorbed color. Red-orange is complementary to blue/cyan on the color wheel.",
    "hintAr": "اللون المشاهد هو اللون المتمم للون الممتص. اللون المتمم للأزرق السماوي على عجلة الألوان هو البرتقالي المحمر.",
    "stepByStepSolutionEn": [
      "1. When white light passes through a solution, electrons absorb photons of specific energy $\\Delta_o = h\\nu$.",
      "2. The light transmitted to the eye consists of all remaining unabsorbed visible wavelengths, perceived as the **complementary color**.",
      "3. On the standard six-segment color wheel:\n   - Red is complementary to Green\n   - Yellow is complementary to Violet\n   - Blue is complementary to Orange (and sky blue/cyan is complementary to Red-Orange).",
      "4. Because $[\\text{Cu(H}_2\\text{O})_6]^{2+}$ absorbs the lower-energy red-orange portion of the spectrum, the transmitted light is perceived as blue."
    ],
    "stepByStepSolutionAr": [
      "١. عندما يمر الضوء الأبيض في محلول المعقد، تمتص الإلكترونات فوتونات ذات طاقة تطابق طاقة الانقسام $\\Delta_o$.",
      "٢. الضوء النافذ للعين يتألف من الأطوال الموجية المتبقية التي لم تُمتص، وتراه العين كاللون المتمم.",
      "٣. وفق عجلة الألوان الكيميائية:\n   - الأحمر متمم للأخضر.\n   - الأصفر متمم للبنفسجي.\n   - الأزرق متمم للبرتقالي (والأزرق الفاتح متمم للبرتقالي المحمر).",
      "٤. بما أن معقد النحاس يمتص فوتونات اللون البرتقالي والأحمر، فإن المحلول ينفذ اللون الأزرق السماوي."
    ],
    "teacherTipEn": "Never say a blue solution absorbs blue light: a blue solution ABSORBS orange/red and TRANSMITS blue.",
    "teacherTipAr": "خطأ شائع: المحلول الأزرق لا يمتص اللون الأزرق، بل يمتص اللون المتمم (البرتقالي المحمر) وينفذ اللون الأزرق إلى العين."
  },
  {
    "id": "egbac_chem_ch5_ex_14",
    "titleEn": "Crystal Field Stabilization Energy CFSE Calculation",
    "titleAr": "طاقة استقرار المجال البلوري CFSE لمعقد ثماني السطوح",
    "difficulty": "hots",
    "questionEn": "For an octahedral complex with a high-spin $d^5$ configuration (such as $[\\text{Mn(H}_2\\text{O})_6]^{2+}$) with configuration $t_{2g}^3 e_g^2$, what is the net Crystal Field Stabilization Energy (CFSE) in terms of $\\Delta_o$?",
    "questionAr": "لمعقد ثماني السطوح يمتلك توزيع $d^5$ عالي الغزل (مثل $[\\text{Mn(H}_2\\text{O})_6]^{2+}$) ذي التوزيع $t_{2g}^3 e_g^2$، ما هي طاقة استقرار المجال البلوري الصافية (CFSE) بدلالة $\\Delta_o$؟",
    "optionsEn": [
      "$\\text{CFSE} = -2.0\\, \\Delta_o$",
      "$\\text{CFSE} = 0.0\\, \\Delta_o$ (zero stabilization energy)",
      "$\\text{CFSE} = -0.4\\, \\Delta_o$",
      "$\\text{CFSE} = +1.2\\, \\Delta_o$"
    ],
    "optionsAr": [
      "$\\text{CFSE} = -2.0\\, \\Delta_o$",
      "$\\text{CFSE} = 0.0\\, \\Delta_o$ (طاقة استقرار صافية منعدمة تساوي صفراً)",
      "$\\text{CFSE} = -0.4\\, \\Delta_o$",
      "$\\text{CFSE} = +1.2\\, \\Delta_o$"
    ],
    "correctAnswer": "$\\text{CFSE} = 0.0\\, \\Delta_o$ (zero stabilization energy)",
    "correctIndex": 1,
    "hintEn": "CFSE = [n(t2g) * (-0.4) + n(eg) * (+0.6)] * Delta_o = [3 * (-0.4) + 2 * (+0.6)] * Delta_o = [-1.2 + 1.2] * Delta_o = 0.",
    "hintAr": "طاقة الاستقرار: [عدد إلكترونات t2g * (-0.4) + عدد إلكترونات eg * (+0.6)] = [3 * (-0.4) + 2 * (+0.6)] = [-1.2 + 1.2] = 0.",
    "stepByStepSolutionEn": [
      "1. In an octahedral crystal field, each electron in a $t_{2g}$ orbital contributes $-0.4\\,\\Delta_o$ of stabilization.",
      "2. Each electron in an $e_g$ orbital contributes $+0.6\\,\\Delta_o$ of destabilization.",
      "3. For high-spin $d^5$, the electronic configuration is $t_{2g}^3 e_g^2$ (one electron in each of the five orbitals).",
      "4. Calculate $\\text{CFSE}$:\n   $\\text{CFSE} = [3(-0.4) + 2(+0.6)]\\,\\Delta_o = [-1.2 + 1.2]\\,\\Delta_o = 0.0\\,\\Delta_o$.",
      "5. With zero CFSE, high-spin $d^5$ complexes (like $\\text{Mn}^{2+}$) have no ligand-field preference for octahedral vs tetrahedral geometry and are kinetically labile."
    ],
    "stepByStepSolutionAr": [
      "١. يساهم كل إلكترون في مستوى $t_{2g}$ باستقرار مقداره $-0.4\\,\\Delta_o$.",
      "٢. يساهم كل إلكترون في مستوى $e_g$ بعدم استقرار مقداره $+0.6\\,\\Delta_o$.",
      "٣. في حالة $d^5$ عالي الغزل يكون التوزيع $t_{2g}^3 e_g^2$ (إلكترون في كل أوربيتال).",
      "٤. حساب طاقة استقرار المجال البلوري الصافية:\n   $\\text{CFSE} = [3(-0.4) + 2(+0.6)]\\,\\Delta_o = [-1.2 + 1.2]\\,\\Delta_o = 0.0$.",
      "٥. يؤدي انعدام طاقة الاستقرار إلى سهولة وسرعة استبدال الليجاندات في مركبات المنغنيز الثنائي (معقدات نشطة حركياً)."
    ],
    "teacherTipEn": "Both high-spin d5 (t2g^3 eg^2) and d10 (t2g^6 eg^4) have CFSE = 0 because the stabilizing and destabilizing contributions cancel each other out completely.",
    "teacherTipAr": "تمتلك كل من أنظمة d5 عالية الغزل وأنظمة d10 طاقة استقرار CFSE منعدمة تماماً لتساوي قوى التثبيت وقوى التنافر."
  },
  {
    "id": "egbac_chem_ch5_ex_15",
    "titleEn": "Ziegler-Natta Catalytic Stereospecific Alkene Polymerization",
    "titleAr": "حفاز تسيغلر-ناتا والبلمرة الفراغية المنتظمة للألكينات",
    "difficulty": "easy",
    "questionEn": "The Nobel Prize-winning **Ziegler-Natta catalyst**, composed of titanium tetrachloride and triethylaluminum ($\\text{TiCl}_4 + \\text{Al(C}_2\\text{H}_5)_3$), revolutionized polymer chemistry by enabling the industrial synthesis of:",
    "questionAr": "أحدث **حفاز تسيغلر-ناتا** الحائز على جائزة نوبل، والمكون من رابع كلوريد التيتانيوم وثلاثي إيثيل الألومنيوم ($\\text{TiCl}_4 + \\text{Al(C}_2\\text{H}_5)_3$)، ثورة في صناعة اللدائن بتمكينه من إنتاج:",
    "optionsEn": [
      "High-density, unbranched, stereoregular (isotactic) polyethylene and polypropylene under mild temperature and atmospheric pressure.",
      "Synthetic diamond gemstones from acetylene gas.",
      "Radioactive isotopes of titanium for cancer radiotherapy.",
      "Highly branched, low-density plastic bags that degrade instantly in water."
    ],
    "optionsAr": [
      "بولي إيثيلين وبولي بروبيلين عالي الكثافة، غير متفرع ومنتظم فراغياً، تحت ظروف معتدلة من الحرارة والضغط الجوي العادي.",
      "بلورات ألماس صناعي نفيسة من غاز الأسيتيلين.",
      "نظائر تيتانيوم مشعة لعلاج الأورام السرطانية.",
      "أكياس بلاستيكية متفرعة منخفضة الكثافة تذوب فورياً في الماء."
    ],
    "correctAnswer": "High-density, unbranched, stereoregular (isotactic) polyethylene and polypropylene under mild temperature and atmospheric pressure.",
    "correctIndex": 0,
    "hintEn": "Ziegler-Natta catalyst coordinates alkenes to vacant Ti d-orbitals, inserting them stereospecifically to make unbranched high-density polyethylene (HDPE).",
    "hintAr": "يربط حفاز تسيغلر-ناتا الألكينات في أوربيتالات التيتانيوم الشاغرة ويدمجها بانتظام فراغي لإنتاج بولي إيثيلين عالي الكثافة (HDPE) متين وغير متفرع.",
    "stepByStepSolutionEn": [
      "1. Before the discovery of Ziegler-Natta catalysts, ethylene polymerization required extreme conditions ($2000\\text{ atm}$ and $200^\\circ\\text{C}$ via free radicals), producing heavily branched, low-density polyethylene (LDPE).",
      "2. In the Ziegler-Natta system, vacant $3d$ orbitals on titanium coordinate the $\\pi$-electron cloud of ethylene molecules, followed by migratory insertion into the titanium-ethyl bond.",
      "3. This coordination mechanism enforces strict linear growth without branching, producing High-Density Polyethylene (HDPE) with high tensile strength and crystallinity at ordinary atmospheric pressure.",
      "4. Karl Ziegler and Giulio Natta were awarded the 1963 Nobel Prize in Chemistry for this breakthrough in coordination catalysis."
    ],
    "stepByStepSolutionAr": [
      "١. قبل هذا الاكتشاف كانت بلمرة الإيثيلين تتطلب ضغوطاً فائقة تصل إلى 2000 ضغط جوي عبر شقوق حرة تعطي سلاسل متفرعة عشوائية (LDPE).",
      "٢. في حفاز تسيغلر-ناتا، تستقبل أوربيتالات $3d$ الشاغرة للتيتانيوم الرابطة $\\pi$ للألكين وتدمجها بتوجيه فراغي دقيق في السلسلة البوليمرية النامية.",
      "٣. يمنع هذا التناسق حدوث التفرعات، مما ينتج بولي إيثيلين عالي الكثافة (HDPE) يتميز بالمتانة العالية ونقطة انصهار مرتفعة عند ضغط جوي عادي.",
      "٤. نال كارل تسيغلر وجوليو ناتا جائزة نوبل في الكيمياء عام 1963 على هذا الإنجاز التاريخي في الحفز التناسقي."
    ],
    "teacherTipEn": "The Ziegler-Natta coordination polymerization mechanism is the premier real-world demonstration of organometallic d-orbital catalysis.",
    "teacherTipAr": "يمثل حفاز تسيغلر-ناتا التطبيق الصناعي الأبرز في العالم لقدرة أوربيتالات d على التحكم الفراغي في التفاعلات الكيميائية."
  }
];
