import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacPhysCh3Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_phys_ch3_db_easy_01",
    "titleEn": "Einstein A and B Coefficients (1)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (1)",
    "difficulty": "easy",
    "questionEn": "In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_02",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (2)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (2)",
    "difficulty": "easy",
    "questionEn": "In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_03",
    "titleEn": "Einstein A and B Coefficients (3)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (3)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 3] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 3] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_04",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (4)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (4)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 4] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 4] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_05",
    "titleEn": "Einstein A and B Coefficients (5)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (5)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 5] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 5] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_06",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (6)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (6)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 6] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 6] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_07",
    "titleEn": "Einstein A and B Coefficients (7)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 7] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_08",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (8)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 8] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_09",
    "titleEn": "Einstein A and B Coefficients (9)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 9] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_10",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (10)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 10] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_11",
    "titleEn": "Einstein A and B Coefficients (11)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 11] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_12",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (12)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 12] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_13",
    "titleEn": "Einstein A and B Coefficients (13)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 13] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_14",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (14)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 14] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_15",
    "titleEn": "Einstein A and B Coefficients (15)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 15] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_16",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (16)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 16] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_17",
    "titleEn": "Einstein A and B Coefficients (17)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 17] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_18",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (18)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 18] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_19",
    "titleEn": "Einstein A and B Coefficients (19)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 19] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_20",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (20)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 20] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_21",
    "titleEn": "Einstein A and B Coefficients (21)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 21] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_22",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (22)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 22] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_23",
    "titleEn": "Einstein A and B Coefficients (23)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 23] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_24",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (24)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 24] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_25",
    "titleEn": "Einstein A and B Coefficients (25)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 25] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_26",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (26)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 26] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_27",
    "titleEn": "Einstein A and B Coefficients (27)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 27] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_28",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (28)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 28] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_29",
    "titleEn": "Einstein A and B Coefficients (29)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 29] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_30",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (30)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 30] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_31",
    "titleEn": "Einstein A and B Coefficients (31)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 31] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_32",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (32)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 32] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_33",
    "titleEn": "Einstein A and B Coefficients (33)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 33] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_34",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (34)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 34] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_35",
    "titleEn": "Einstein A and B Coefficients (35)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 35] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_36",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (36)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 36] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_37",
    "titleEn": "Einstein A and B Coefficients (37)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 37] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_38",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (38)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 38] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_39",
    "titleEn": "Einstein A and B Coefficients (39)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 39] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_40",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (40)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 40] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_41",
    "titleEn": "Einstein A and B Coefficients (41)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 41] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_42",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (42)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 42] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_43",
    "titleEn": "Einstein A and B Coefficients (43)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 43] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_44",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (44)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 44] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_45",
    "titleEn": "Einstein A and B Coefficients (45)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 45] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_46",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (46)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 46] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_47",
    "titleEn": "Einstein A and B Coefficients (47)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 47] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_48",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (48)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 48] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_49",
    "titleEn": "Einstein A and B Coefficients (49)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 49] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_50",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (50)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 50] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_51",
    "titleEn": "Einstein A and B Coefficients (51)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 51] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_52",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (52)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 52] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_53",
    "titleEn": "Einstein A and B Coefficients (53)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 53] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_54",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (54)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 54] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_55",
    "titleEn": "Einstein A and B Coefficients (55)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 55] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_56",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (56)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 56] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_easy_57",
    "titleEn": "Einstein A and B Coefficients (57)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 57] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_easy_58",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (58)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 58] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  }
],
  medium: [
  {
    "id": "egbac_phys_ch3_db_medium_01",
    "titleEn": "Einstein A and B Coefficients (1)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (1)",
    "difficulty": "medium",
    "questionEn": "In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_02",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (2)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (2)",
    "difficulty": "medium",
    "questionEn": "In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_03",
    "titleEn": "Einstein A and B Coefficients (3)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (3)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 3] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 3] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_04",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (4)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 4] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_05",
    "titleEn": "Einstein A and B Coefficients (5)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 5] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_06",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (6)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 6] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_07",
    "titleEn": "Einstein A and B Coefficients (7)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 7] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_08",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (8)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 8] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_09",
    "titleEn": "Einstein A and B Coefficients (9)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 9] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_10",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (10)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 10] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_11",
    "titleEn": "Einstein A and B Coefficients (11)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 11] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_12",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (12)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 12] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_13",
    "titleEn": "Einstein A and B Coefficients (13)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 13] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_14",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (14)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 14] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_15",
    "titleEn": "Einstein A and B Coefficients (15)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 15] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_16",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (16)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 16] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_17",
    "titleEn": "Einstein A and B Coefficients (17)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 17] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_18",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (18)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 18] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_19",
    "titleEn": "Einstein A and B Coefficients (19)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 19] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_20",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (20)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 20] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_21",
    "titleEn": "Einstein A and B Coefficients (21)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 21] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_22",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (22)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 22] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_23",
    "titleEn": "Einstein A and B Coefficients (23)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 23] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_24",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (24)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 24] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_25",
    "titleEn": "Einstein A and B Coefficients (25)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 25] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_26",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (26)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 26] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_27",
    "titleEn": "Einstein A and B Coefficients (27)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 27] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_28",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (28)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 28] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_29",
    "titleEn": "Einstein A and B Coefficients (29)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 29] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_30",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (30)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 30] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_31",
    "titleEn": "Einstein A and B Coefficients (31)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 31] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_32",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (32)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 32] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_33",
    "titleEn": "Einstein A and B Coefficients (33)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 33] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_34",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (34)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 34] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_35",
    "titleEn": "Einstein A and B Coefficients (35)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 35] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_36",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (36)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 36] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_37",
    "titleEn": "Einstein A and B Coefficients (37)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 37] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_38",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (38)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 38] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_39",
    "titleEn": "Einstein A and B Coefficients (39)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 39] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_40",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (40)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 40] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_41",
    "titleEn": "Einstein A and B Coefficients (41)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 41] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_42",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (42)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 42] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_43",
    "titleEn": "Einstein A and B Coefficients (43)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 43] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_44",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (44)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 44] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_45",
    "titleEn": "Einstein A and B Coefficients (45)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 45] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_46",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (46)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 46] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_47",
    "titleEn": "Einstein A and B Coefficients (47)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 47] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_48",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (48)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 48] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_49",
    "titleEn": "Einstein A and B Coefficients (49)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 49] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_50",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (50)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 50] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_51",
    "titleEn": "Einstein A and B Coefficients (51)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 51] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_52",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (52)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 52] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_53",
    "titleEn": "Einstein A and B Coefficients (53)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 53] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_54",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (54)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 54] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_55",
    "titleEn": "Einstein A and B Coefficients (55)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 55] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_56",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (56)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 56] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_57",
    "titleEn": "Einstein A and B Coefficients (57)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 57] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_medium_58",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (58)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 58] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_medium_59",
    "titleEn": "Einstein A and B Coefficients (59)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 59] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  }
],
  hots: [
  {
    "id": "egbac_phys_ch3_db_hots_01",
    "titleEn": "Einstein A and B Coefficients (1)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (1)",
    "difficulty": "hots",
    "questionEn": "In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_02",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (2)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (2)",
    "difficulty": "hots",
    "questionEn": "In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_03",
    "titleEn": "Einstein A and B Coefficients (3)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 3] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_04",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (4)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 4] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_05",
    "titleEn": "Einstein A and B Coefficients (5)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 5] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_06",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (6)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 6] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_07",
    "titleEn": "Einstein A and B Coefficients (7)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 7] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_08",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (8)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 8] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_09",
    "titleEn": "Einstein A and B Coefficients (9)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 9] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_10",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (10)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 10] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_11",
    "titleEn": "Einstein A and B Coefficients (11)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 11] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_12",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (12)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 12] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_13",
    "titleEn": "Einstein A and B Coefficients (13)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 13] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_14",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (14)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 14] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_15",
    "titleEn": "Einstein A and B Coefficients (15)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 15] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_16",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (16)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 16] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_17",
    "titleEn": "Einstein A and B Coefficients (17)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 17] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_18",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (18)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 18] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_19",
    "titleEn": "Einstein A and B Coefficients (19)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 19] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_20",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (20)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 20] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_21",
    "titleEn": "Einstein A and B Coefficients (21)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 21] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_22",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (22)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 22] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_23",
    "titleEn": "Einstein A and B Coefficients (23)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 23] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_24",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (24)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 24] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_25",
    "titleEn": "Einstein A and B Coefficients (25)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 25] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_26",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (26)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 26] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_27",
    "titleEn": "Einstein A and B Coefficients (27)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 27] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_28",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (28)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 28] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_29",
    "titleEn": "Einstein A and B Coefficients (29)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 29] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_30",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (30)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 30] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_31",
    "titleEn": "Einstein A and B Coefficients (31)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 31] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_32",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (32)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 32] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_33",
    "titleEn": "Einstein A and B Coefficients (33)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 33] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_34",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (34)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 34] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_35",
    "titleEn": "Einstein A and B Coefficients (35)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 35] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_36",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (36)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 36] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_37",
    "titleEn": "Einstein A and B Coefficients (37)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 37] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_38",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (38)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 38] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_39",
    "titleEn": "Einstein A and B Coefficients (39)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 39] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_40",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (40)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 40] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_41",
    "titleEn": "Einstein A and B Coefficients (41)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 41] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_42",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (42)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 42] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_43",
    "titleEn": "Einstein A and B Coefficients (43)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 43] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_44",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (44)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 44] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_45",
    "titleEn": "Einstein A and B Coefficients (45)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 45] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_46",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (46)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 46] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_47",
    "titleEn": "Einstein A and B Coefficients (47)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 47] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_48",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (48)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 48] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_49",
    "titleEn": "Einstein A and B Coefficients (49)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 49] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_50",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (50)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 50] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_51",
    "titleEn": "Einstein A and B Coefficients (51)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 51] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_52",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (52)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 52] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_53",
    "titleEn": "Einstein A and B Coefficients (53)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 53] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_54",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (54)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 54] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_55",
    "titleEn": "Einstein A and B Coefficients (55)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 55] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_56",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (56)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 56] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  },
  {
    "id": "egbac_phys_ch3_db_hots_57",
    "titleEn": "Einstein A and B Coefficients (57)",
    "titleAr": "معاملات أينشتاين للانبعاث والامتصاص (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
    "questionAr": "[مسألة متدرجة 57] في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
    "optionsEn": [
      "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
      "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
      "The temperature of the cavity walls squared",
      "The mechanical vibration frequency of the mirrors"
    ],
    "optionsAr": [
      "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
      "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
      "مربع درجة حرارة الجدران المحيطة بالفجوة",
      "تردد الاهتزاز الميكانيكي لمرايا المرنان"
    ],
    "correctAnswer": "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
    "correctIndex": 0,
    "hintEn": "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
    "hintAr": "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
    "stepByStepSolutionEn": [
      "Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."
    ],
    "stepByStepSolutionAr": [
      "أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."
    ],
    "teacherTipEn": "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
    "teacherTipAr": "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
  },
  {
    "id": "egbac_phys_ch3_db_hots_58",
    "titleEn": "Optical Resonant Cavity Threshold Gain Condition (58)",
    "titleAr": "شرط كسب العتبة في المرنان البصري (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
    "questionAr": "[مسألة متدرجة 58] في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
    "optionsEn": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "optionsAr": [
      "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
      "$R_1 R_2 = e^{2 g L}$",
      "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
      "$R_1 R_2 e^{g L} = 0$"
    ],
    "correctAnswer": "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
    "correctIndex": 0,
    "hintEn": "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
    "hintAr": "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
    "stepByStepSolutionEn": [
      "Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."
    ],
    "stepByStepSolutionAr": [
      "شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."
    ],
    "teacherTipEn": "At threshold, optical gain balances total cavity losses exactly.",
    "teacherTipAr": "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
  }
]
};
