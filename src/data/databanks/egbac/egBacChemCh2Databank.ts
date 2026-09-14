import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacChemCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_chem_ch2_db_easy_01",
    "titleEn": "First Law of Thermodynamics and Enthalpy (1)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (1)",
    "difficulty": "easy",
    "questionEn": "For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_02",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (2)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (2)",
    "difficulty": "easy",
    "questionEn": "A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_03",
    "titleEn": "Hess Law of Constant Heat Summation (3)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (3)",
    "difficulty": "easy",
    "questionEn": "Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_04",
    "titleEn": "First Law of Thermodynamics and Enthalpy (4)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (4)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 4] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 4] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_05",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (5)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (5)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 5] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 5] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_06",
    "titleEn": "Hess Law of Constant Heat Summation (6)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (6)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 6] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 6] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_07",
    "titleEn": "First Law of Thermodynamics and Enthalpy (7)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 7] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_08",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (8)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 8] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_09",
    "titleEn": "Hess Law of Constant Heat Summation (9)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 9] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_10",
    "titleEn": "First Law of Thermodynamics and Enthalpy (10)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 10] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_11",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (11)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 11] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_12",
    "titleEn": "Hess Law of Constant Heat Summation (12)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 12] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_13",
    "titleEn": "First Law of Thermodynamics and Enthalpy (13)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 13] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_14",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (14)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 14] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_15",
    "titleEn": "Hess Law of Constant Heat Summation (15)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 15] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_16",
    "titleEn": "First Law of Thermodynamics and Enthalpy (16)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 16] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_17",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (17)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 17] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_18",
    "titleEn": "Hess Law of Constant Heat Summation (18)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 18] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_19",
    "titleEn": "First Law of Thermodynamics and Enthalpy (19)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 19] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_20",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (20)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 20] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_21",
    "titleEn": "Hess Law of Constant Heat Summation (21)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 21] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_22",
    "titleEn": "First Law of Thermodynamics and Enthalpy (22)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 22] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_23",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (23)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 23] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_24",
    "titleEn": "Hess Law of Constant Heat Summation (24)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 24] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_25",
    "titleEn": "First Law of Thermodynamics and Enthalpy (25)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 25] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_26",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (26)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 26] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_27",
    "titleEn": "Hess Law of Constant Heat Summation (27)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 27] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_28",
    "titleEn": "First Law of Thermodynamics and Enthalpy (28)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 28] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_29",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (29)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 29] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_30",
    "titleEn": "Hess Law of Constant Heat Summation (30)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 30] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_31",
    "titleEn": "First Law of Thermodynamics and Enthalpy (31)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 31] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_32",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (32)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 32] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_33",
    "titleEn": "Hess Law of Constant Heat Summation (33)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 33] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_34",
    "titleEn": "First Law of Thermodynamics and Enthalpy (34)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 34] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_35",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (35)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 35] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_36",
    "titleEn": "Hess Law of Constant Heat Summation (36)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 36] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_37",
    "titleEn": "First Law of Thermodynamics and Enthalpy (37)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 37] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_38",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (38)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 38] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_39",
    "titleEn": "Hess Law of Constant Heat Summation (39)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 39] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_40",
    "titleEn": "First Law of Thermodynamics and Enthalpy (40)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 40] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_41",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (41)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 41] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_42",
    "titleEn": "Hess Law of Constant Heat Summation (42)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 42] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_43",
    "titleEn": "First Law of Thermodynamics and Enthalpy (43)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 43] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_44",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (44)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 44] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_45",
    "titleEn": "Hess Law of Constant Heat Summation (45)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 45] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_46",
    "titleEn": "First Law of Thermodynamics and Enthalpy (46)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 46] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_47",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (47)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 47] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_48",
    "titleEn": "Hess Law of Constant Heat Summation (48)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 48] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_49",
    "titleEn": "First Law of Thermodynamics and Enthalpy (49)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 49] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_50",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (50)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 50] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_51",
    "titleEn": "Hess Law of Constant Heat Summation (51)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 51] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_52",
    "titleEn": "First Law of Thermodynamics and Enthalpy (52)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 52] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_53",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (53)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 53] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_54",
    "titleEn": "Hess Law of Constant Heat Summation (54)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 54] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_55",
    "titleEn": "First Law of Thermodynamics and Enthalpy (55)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 55] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_easy_56",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (56)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 56] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_easy_57",
    "titleEn": "Hess Law of Constant Heat Summation (57)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 57] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_easy_58",
    "titleEn": "First Law of Thermodynamics and Enthalpy (58)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 58] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  }
],
  medium: [
  {
    "id": "egbac_chem_ch2_db_medium_01",
    "titleEn": "First Law of Thermodynamics and Enthalpy (1)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (1)",
    "difficulty": "medium",
    "questionEn": "For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_02",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (2)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (2)",
    "difficulty": "medium",
    "questionEn": "A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_03",
    "titleEn": "Hess Law of Constant Heat Summation (3)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (3)",
    "difficulty": "medium",
    "questionEn": "Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_04",
    "titleEn": "First Law of Thermodynamics and Enthalpy (4)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 4] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_05",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (5)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 5] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_06",
    "titleEn": "Hess Law of Constant Heat Summation (6)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 6] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_07",
    "titleEn": "First Law of Thermodynamics and Enthalpy (7)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 7] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_08",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (8)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 8] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_09",
    "titleEn": "Hess Law of Constant Heat Summation (9)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 9] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_10",
    "titleEn": "First Law of Thermodynamics and Enthalpy (10)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 10] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_11",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (11)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 11] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_12",
    "titleEn": "Hess Law of Constant Heat Summation (12)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 12] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_13",
    "titleEn": "First Law of Thermodynamics and Enthalpy (13)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 13] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_14",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (14)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 14] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_15",
    "titleEn": "Hess Law of Constant Heat Summation (15)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 15] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_16",
    "titleEn": "First Law of Thermodynamics and Enthalpy (16)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 16] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_17",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (17)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 17] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_18",
    "titleEn": "Hess Law of Constant Heat Summation (18)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 18] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_19",
    "titleEn": "First Law of Thermodynamics and Enthalpy (19)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 19] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_20",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (20)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 20] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_21",
    "titleEn": "Hess Law of Constant Heat Summation (21)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 21] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_22",
    "titleEn": "First Law of Thermodynamics and Enthalpy (22)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 22] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_23",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (23)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 23] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_24",
    "titleEn": "Hess Law of Constant Heat Summation (24)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 24] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_25",
    "titleEn": "First Law of Thermodynamics and Enthalpy (25)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 25] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_26",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (26)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 26] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_27",
    "titleEn": "Hess Law of Constant Heat Summation (27)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 27] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_28",
    "titleEn": "First Law of Thermodynamics and Enthalpy (28)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 28] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_29",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (29)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 29] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_30",
    "titleEn": "Hess Law of Constant Heat Summation (30)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 30] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_31",
    "titleEn": "First Law of Thermodynamics and Enthalpy (31)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 31] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_32",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (32)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 32] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_33",
    "titleEn": "Hess Law of Constant Heat Summation (33)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 33] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_34",
    "titleEn": "First Law of Thermodynamics and Enthalpy (34)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 34] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_35",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (35)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 35] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_36",
    "titleEn": "Hess Law of Constant Heat Summation (36)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 36] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_37",
    "titleEn": "First Law of Thermodynamics and Enthalpy (37)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 37] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_38",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (38)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 38] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_39",
    "titleEn": "Hess Law of Constant Heat Summation (39)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 39] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_40",
    "titleEn": "First Law of Thermodynamics and Enthalpy (40)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 40] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_41",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (41)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 41] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_42",
    "titleEn": "Hess Law of Constant Heat Summation (42)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 42] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_43",
    "titleEn": "First Law of Thermodynamics and Enthalpy (43)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 43] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_44",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (44)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 44] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_45",
    "titleEn": "Hess Law of Constant Heat Summation (45)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 45] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_46",
    "titleEn": "First Law of Thermodynamics and Enthalpy (46)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 46] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_47",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (47)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 47] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_48",
    "titleEn": "Hess Law of Constant Heat Summation (48)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 48] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_49",
    "titleEn": "First Law of Thermodynamics and Enthalpy (49)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 49] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_50",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (50)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 50] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_51",
    "titleEn": "Hess Law of Constant Heat Summation (51)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 51] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_52",
    "titleEn": "First Law of Thermodynamics and Enthalpy (52)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 52] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_53",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (53)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 53] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_54",
    "titleEn": "Hess Law of Constant Heat Summation (54)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 54] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_55",
    "titleEn": "First Law of Thermodynamics and Enthalpy (55)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 55] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_56",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (56)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 56] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_medium_57",
    "titleEn": "Hess Law of Constant Heat Summation (57)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 57] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_medium_58",
    "titleEn": "First Law of Thermodynamics and Enthalpy (58)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 58] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_medium_59",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (59)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 59] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  }
],
  hots: [
  {
    "id": "egbac_chem_ch2_db_hots_01",
    "titleEn": "First Law of Thermodynamics and Enthalpy (1)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (1)",
    "difficulty": "hots",
    "questionEn": "For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_02",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (2)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (2)",
    "difficulty": "hots",
    "questionEn": "A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_03",
    "titleEn": "Hess Law of Constant Heat Summation (3)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (3)",
    "difficulty": "hots",
    "questionEn": "Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_04",
    "titleEn": "First Law of Thermodynamics and Enthalpy (4)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 4] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_05",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (5)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 5] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_06",
    "titleEn": "Hess Law of Constant Heat Summation (6)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 6] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_07",
    "titleEn": "First Law of Thermodynamics and Enthalpy (7)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 7] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_08",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (8)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 8] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_09",
    "titleEn": "Hess Law of Constant Heat Summation (9)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 9] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_10",
    "titleEn": "First Law of Thermodynamics and Enthalpy (10)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 10] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_11",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (11)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 11] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_12",
    "titleEn": "Hess Law of Constant Heat Summation (12)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 12] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_13",
    "titleEn": "First Law of Thermodynamics and Enthalpy (13)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 13] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_14",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (14)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 14] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_15",
    "titleEn": "Hess Law of Constant Heat Summation (15)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 15] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_16",
    "titleEn": "First Law of Thermodynamics and Enthalpy (16)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 16] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_17",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (17)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 17] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_18",
    "titleEn": "Hess Law of Constant Heat Summation (18)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 18] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_19",
    "titleEn": "First Law of Thermodynamics and Enthalpy (19)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 19] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_20",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (20)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 20] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_21",
    "titleEn": "Hess Law of Constant Heat Summation (21)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 21] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_22",
    "titleEn": "First Law of Thermodynamics and Enthalpy (22)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 22] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_23",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (23)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 23] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_24",
    "titleEn": "Hess Law of Constant Heat Summation (24)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 24] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_25",
    "titleEn": "First Law of Thermodynamics and Enthalpy (25)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 25] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_26",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (26)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 26] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_27",
    "titleEn": "Hess Law of Constant Heat Summation (27)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 27] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_28",
    "titleEn": "First Law of Thermodynamics and Enthalpy (28)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 28] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_29",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (29)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 29] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_30",
    "titleEn": "Hess Law of Constant Heat Summation (30)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 30] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_31",
    "titleEn": "First Law of Thermodynamics and Enthalpy (31)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 31] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_32",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (32)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 32] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_33",
    "titleEn": "Hess Law of Constant Heat Summation (33)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 33] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_34",
    "titleEn": "First Law of Thermodynamics and Enthalpy (34)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 34] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_35",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (35)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 35] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_36",
    "titleEn": "Hess Law of Constant Heat Summation (36)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 36] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_37",
    "titleEn": "First Law of Thermodynamics and Enthalpy (37)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 37] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_38",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (38)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 38] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_39",
    "titleEn": "Hess Law of Constant Heat Summation (39)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 39] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_40",
    "titleEn": "First Law of Thermodynamics and Enthalpy (40)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 40] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_41",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (41)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 41] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_42",
    "titleEn": "Hess Law of Constant Heat Summation (42)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 42] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_43",
    "titleEn": "First Law of Thermodynamics and Enthalpy (43)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 43] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_44",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (44)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 44] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_45",
    "titleEn": "Hess Law of Constant Heat Summation (45)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 45] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_46",
    "titleEn": "First Law of Thermodynamics and Enthalpy (46)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 46] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_47",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (47)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 47] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_48",
    "titleEn": "Hess Law of Constant Heat Summation (48)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 48] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_49",
    "titleEn": "First Law of Thermodynamics and Enthalpy (49)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 49] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_50",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (50)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 50] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_51",
    "titleEn": "Hess Law of Constant Heat Summation (51)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 51] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_52",
    "titleEn": "First Law of Thermodynamics and Enthalpy (52)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 52] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_53",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (53)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 53] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_54",
    "titleEn": "Hess Law of Constant Heat Summation (54)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 54] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_55",
    "titleEn": "First Law of Thermodynamics and Enthalpy (55)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 55] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  },
  {
    "id": "egbac_chem_ch2_db_hots_56",
    "titleEn": "Gibbs Free Energy and Spontaneity Criterion (56)",
    "titleAr": "طاقة جيبس الحرة ومعيار تلقائية التفاعل (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
    "questionAr": "[مسألة متدرجة 56] يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
    "optionsEn": [
      "Negative ($\\Delta G < 0$)",
      "Positive ($\\Delta G > 0$)",
      "Strictly equal to zero ($\\Delta G = 0$)",
      "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
    ],
    "optionsAr": [
      "سالباً ($\\Delta G < 0$)",
      "موجباً ($\\Delta G > 0$)",
      "مساوياً للصفر تماماً ($\\Delta G = 0$)",
      "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
    ],
    "correctAnswer": "Negative ($\\Delta G < 0$)",
    "correctIndex": 0,
    "hintEn": "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
    "hintAr": "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
    "stepByStepSolutionEn": [
      "$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."
    ],
    "teacherTipEn": "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
    "teacherTipAr": "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
  },
  {
    "id": "egbac_chem_ch2_db_hots_57",
    "titleEn": "Hess Law of Constant Heat Summation (57)",
    "titleAr": "قانون هس للمجموع الحراري الثابت (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
    "questionAr": "[مسألة متدرجة 57] ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
    "optionsEn": [
      "The initial state of reactants and the final state of products, independent of the reaction pathway",
      "The speed and mechanical path followed by intermediate molecules",
      "The presence of homogeneous transition metal catalysts",
      "The surface area of the reaction vessel walls"
    ],
    "optionsAr": [
      "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
      "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
      "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
      "مساحة السطح الداخلي لجدران إناء التفاعل"
    ],
    "correctAnswer": "The initial state of reactants and the final state of products, independent of the reaction pathway",
    "correctIndex": 0,
    "hintEn": "Enthalpy is a thermodynamic state function.",
    "hintAr": "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
    "stepByStepSolutionEn": [
      "Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."
    ],
    "stepByStepSolutionAr": [
      "قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."
    ],
    "teacherTipEn": "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
    "teacherTipAr": "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
  },
  {
    "id": "egbac_chem_ch2_db_hots_58",
    "titleEn": "First Law of Thermodynamics and Enthalpy (58)",
    "titleAr": "القانون الأول للديناميكا الحرارية والمحتوى الحراري (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
    "questionAr": "[مسألة متدرجة 58] لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
    "optionsEn": [
      "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
      "The total internal energy change $\\Delta U$ only, without work",
      "The absolute entropy times absolute zero temperature",
      "The work done against gravity divided by atmospheric pressure"
    ],
    "optionsAr": [
      "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
      "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
      "حاصل ضرب الإنتروبي في الصفر المطلق",
      "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
    ],
    "correctAnswer": "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
    "correctIndex": 0,
    "hintEn": "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
    "hintAr": "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
    "stepByStepSolutionEn": [
      "At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."
    ],
    "teacherTipEn": "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
    "teacherTipAr": "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
  }
]
};
