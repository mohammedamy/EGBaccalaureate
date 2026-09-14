import type { ChapterDatabank } from '../../../types/curriculum';

export const physCh4Databank: ChapterDatabank = {
  easy: [
  {
    "id": "phys_ch4_db_easy_01",
    "titleEn": "Hot-Wire Ammeter Operating Principle (1)",
    "titleAr": "فكرة عمل الأميتر الحراري (1)",
    "difficulty": "easy",
    "questionEn": "The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_02",
    "titleEn": "Inductive Reactance Formula (2)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (2)",
    "difficulty": "easy",
    "questionEn": "The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_03",
    "titleEn": "Capacitive Reactance Formula (3)",
    "titleAr": "المفاعلة السعوية لمكثف (3)",
    "difficulty": "easy",
    "questionEn": "The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_04",
    "titleEn": "Resonance Condition in RLC Series Circuit (4)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (4)",
    "difficulty": "easy",
    "questionEn": "In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_05",
    "titleEn": "Hot-Wire Ammeter Operating Principle (5)",
    "titleAr": "فكرة عمل الأميتر الحراري (5)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 5] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 5] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_06",
    "titleEn": "Inductive Reactance Formula (6)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (6)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 6] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 6] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_07",
    "titleEn": "Capacitive Reactance Formula (7)",
    "titleAr": "المفاعلة السعوية لمكثف (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 7] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_08",
    "titleEn": "Resonance Condition in RLC Series Circuit (8)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 8] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_09",
    "titleEn": "Hot-Wire Ammeter Operating Principle (9)",
    "titleAr": "فكرة عمل الأميتر الحراري (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 9] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_10",
    "titleEn": "Inductive Reactance Formula (10)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 10] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_11",
    "titleEn": "Capacitive Reactance Formula (11)",
    "titleAr": "المفاعلة السعوية لمكثف (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 11] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_12",
    "titleEn": "Resonance Condition in RLC Series Circuit (12)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 12] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_13",
    "titleEn": "Hot-Wire Ammeter Operating Principle (13)",
    "titleAr": "فكرة عمل الأميتر الحراري (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 13] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_14",
    "titleEn": "Inductive Reactance Formula (14)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 14] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_15",
    "titleEn": "Capacitive Reactance Formula (15)",
    "titleAr": "المفاعلة السعوية لمكثف (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 15] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_16",
    "titleEn": "Resonance Condition in RLC Series Circuit (16)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 16] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_17",
    "titleEn": "Hot-Wire Ammeter Operating Principle (17)",
    "titleAr": "فكرة عمل الأميتر الحراري (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 17] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_18",
    "titleEn": "Inductive Reactance Formula (18)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 18] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_19",
    "titleEn": "Capacitive Reactance Formula (19)",
    "titleAr": "المفاعلة السعوية لمكثف (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 19] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_20",
    "titleEn": "Resonance Condition in RLC Series Circuit (20)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 20] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_21",
    "titleEn": "Hot-Wire Ammeter Operating Principle (21)",
    "titleAr": "فكرة عمل الأميتر الحراري (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 21] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_22",
    "titleEn": "Inductive Reactance Formula (22)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 22] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_23",
    "titleEn": "Capacitive Reactance Formula (23)",
    "titleAr": "المفاعلة السعوية لمكثف (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 23] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_24",
    "titleEn": "Resonance Condition in RLC Series Circuit (24)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 24] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_25",
    "titleEn": "Hot-Wire Ammeter Operating Principle (25)",
    "titleAr": "فكرة عمل الأميتر الحراري (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 25] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_26",
    "titleEn": "Inductive Reactance Formula (26)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 26] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_27",
    "titleEn": "Capacitive Reactance Formula (27)",
    "titleAr": "المفاعلة السعوية لمكثف (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 27] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_28",
    "titleEn": "Resonance Condition in RLC Series Circuit (28)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 28] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_29",
    "titleEn": "Hot-Wire Ammeter Operating Principle (29)",
    "titleAr": "فكرة عمل الأميتر الحراري (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 29] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_30",
    "titleEn": "Inductive Reactance Formula (30)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 30] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_31",
    "titleEn": "Capacitive Reactance Formula (31)",
    "titleAr": "المفاعلة السعوية لمكثف (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 31] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_32",
    "titleEn": "Resonance Condition in RLC Series Circuit (32)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 32] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_33",
    "titleEn": "Hot-Wire Ammeter Operating Principle (33)",
    "titleAr": "فكرة عمل الأميتر الحراري (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 33] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_34",
    "titleEn": "Inductive Reactance Formula (34)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 34] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_35",
    "titleEn": "Capacitive Reactance Formula (35)",
    "titleAr": "المفاعلة السعوية لمكثف (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 35] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_36",
    "titleEn": "Resonance Condition in RLC Series Circuit (36)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 36] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_37",
    "titleEn": "Hot-Wire Ammeter Operating Principle (37)",
    "titleAr": "فكرة عمل الأميتر الحراري (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 37] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_38",
    "titleEn": "Inductive Reactance Formula (38)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 38] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_39",
    "titleEn": "Capacitive Reactance Formula (39)",
    "titleAr": "المفاعلة السعوية لمكثف (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 39] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_40",
    "titleEn": "Resonance Condition in RLC Series Circuit (40)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 40] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_41",
    "titleEn": "Hot-Wire Ammeter Operating Principle (41)",
    "titleAr": "فكرة عمل الأميتر الحراري (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 41] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_42",
    "titleEn": "Inductive Reactance Formula (42)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 42] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_43",
    "titleEn": "Capacitive Reactance Formula (43)",
    "titleAr": "المفاعلة السعوية لمكثف (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 43] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_44",
    "titleEn": "Resonance Condition in RLC Series Circuit (44)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 44] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_45",
    "titleEn": "Hot-Wire Ammeter Operating Principle (45)",
    "titleAr": "فكرة عمل الأميتر الحراري (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 45] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_46",
    "titleEn": "Inductive Reactance Formula (46)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 46] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_47",
    "titleEn": "Capacitive Reactance Formula (47)",
    "titleAr": "المفاعلة السعوية لمكثف (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 47] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_48",
    "titleEn": "Resonance Condition in RLC Series Circuit (48)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 48] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_49",
    "titleEn": "Hot-Wire Ammeter Operating Principle (49)",
    "titleAr": "فكرة عمل الأميتر الحراري (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 49] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_50",
    "titleEn": "Inductive Reactance Formula (50)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 50] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_51",
    "titleEn": "Capacitive Reactance Formula (51)",
    "titleAr": "المفاعلة السعوية لمكثف (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 51] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_52",
    "titleEn": "Resonance Condition in RLC Series Circuit (52)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 52] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_53",
    "titleEn": "Hot-Wire Ammeter Operating Principle (53)",
    "titleAr": "فكرة عمل الأميتر الحراري (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 53] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_54",
    "titleEn": "Inductive Reactance Formula (54)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 54] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_55",
    "titleEn": "Capacitive Reactance Formula (55)",
    "titleAr": "المفاعلة السعوية لمكثف (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 55] المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
    "optionsEn": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = 2\\pi f C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{C}{2\\pi f}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 0,
    "hintEn": "Capacitive reactance is inversely proportional to frequency $f$.",
    "hintAr": "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."
    ],
    "teacherTipEn": "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
    "teacherTipAr": "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_56",
    "titleEn": "Resonance Condition in RLC Series Circuit (56)",
    "titleAr": "حالة الرنين في دائرة RLC على التوالي (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] In a series RLC AC circuit, electrical resonance occurs when:",
    "questionAr": "[مسألة متدرجة 56] في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
    "optionsEn": [
      "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
      "Resistance equals zero ($R = 0$)",
      "Voltage and current are out of phase by $90^\\circ$",
      "Total impedance approaches infinity ($Z \\to \\infty$)"
    ],
    "optionsAr": [
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
      "تصل المعاوقة الكلية إلى قيمة لا نهائية"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
    "hintAr": "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
    "stepByStepSolutionEn": [
      "Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "stepByStepSolutionAr": [
      "شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."
    ],
    "teacherTipEn": "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
    "teacherTipAr": "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
  },
  {
    "id": "phys_ch4_db_easy_57",
    "titleEn": "Hot-Wire Ammeter Operating Principle (57)",
    "titleAr": "فكرة عمل الأميتر الحراري (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] The hot-wire ammeter measures the effective value of AC current based on:",
    "questionAr": "[مسألة متدرجة 57] يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
    "optionsEn": [
      "The thermal effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque on a rotating coil",
      "The electrostatic repulsion between electric charges",
      "The photoelectric emission of conduction electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
      "التنافر الكهروستاتيكي بين الشحنات الساكنة",
      "الانبعاث الكهروضوئي لإلكترونات التوصيل"
    ],
    "correctAnswer": "The thermal effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Heat produced is independent of current direction because $Q \\propto I^2$.",
    "hintAr": "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
    "stepByStepSolutionEn": [
      "Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."
    ],
    "stepByStepSolutionAr": [
      "يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."
    ],
    "teacherTipEn": "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_easy_58",
    "titleEn": "Inductive Reactance Formula (58)",
    "titleAr": "المفاعلة الحثية لملف حث عديم المقاومة (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
    "questionAr": "[مسألة متدرجة 58] المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
    "optionsEn": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "optionsAr": [
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
      "$X_L = 4\\pi^2 f^2 L$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 0,
    "hintEn": "Inductive reactance is measured in Ohms ($Omega$) and increases linearly with frequency $f$.",
    "hintAr": "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."
    ],
    "teacherTipEn": "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
    "teacherTipAr": "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
  }
],
  medium: [
  {
    "id": "phys_ch4_db_medium_01",
    "titleEn": "Impedance Calculation in RLC Circuit (1)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (1)",
    "difficulty": "medium",
    "questionEn": "A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_02",
    "titleEn": "Resonant Frequency Calculation (2)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (2)",
    "difficulty": "medium",
    "questionEn": "A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_03",
    "titleEn": "Impedance Calculation in RLC Circuit (3)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (3)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 3] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 3] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_04",
    "titleEn": "Resonant Frequency Calculation (4)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 4] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_05",
    "titleEn": "Impedance Calculation in RLC Circuit (5)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 5] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_06",
    "titleEn": "Resonant Frequency Calculation (6)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 6] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_07",
    "titleEn": "Impedance Calculation in RLC Circuit (7)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 7] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_08",
    "titleEn": "Resonant Frequency Calculation (8)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 8] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_09",
    "titleEn": "Impedance Calculation in RLC Circuit (9)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 9] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_10",
    "titleEn": "Resonant Frequency Calculation (10)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 10] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_11",
    "titleEn": "Impedance Calculation in RLC Circuit (11)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 11] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_12",
    "titleEn": "Resonant Frequency Calculation (12)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 12] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_13",
    "titleEn": "Impedance Calculation in RLC Circuit (13)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 13] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_14",
    "titleEn": "Resonant Frequency Calculation (14)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 14] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_15",
    "titleEn": "Impedance Calculation in RLC Circuit (15)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 15] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_16",
    "titleEn": "Resonant Frequency Calculation (16)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 16] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_17",
    "titleEn": "Impedance Calculation in RLC Circuit (17)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 17] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_18",
    "titleEn": "Resonant Frequency Calculation (18)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 18] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_19",
    "titleEn": "Impedance Calculation in RLC Circuit (19)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 19] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_20",
    "titleEn": "Resonant Frequency Calculation (20)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 20] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_21",
    "titleEn": "Impedance Calculation in RLC Circuit (21)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 21] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_22",
    "titleEn": "Resonant Frequency Calculation (22)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 22] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_23",
    "titleEn": "Impedance Calculation in RLC Circuit (23)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 23] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_24",
    "titleEn": "Resonant Frequency Calculation (24)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 24] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_25",
    "titleEn": "Impedance Calculation in RLC Circuit (25)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 25] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_26",
    "titleEn": "Resonant Frequency Calculation (26)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 26] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_27",
    "titleEn": "Impedance Calculation in RLC Circuit (27)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 27] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_28",
    "titleEn": "Resonant Frequency Calculation (28)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 28] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_29",
    "titleEn": "Impedance Calculation in RLC Circuit (29)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 29] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_30",
    "titleEn": "Resonant Frequency Calculation (30)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 30] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_31",
    "titleEn": "Impedance Calculation in RLC Circuit (31)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 31] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_32",
    "titleEn": "Resonant Frequency Calculation (32)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 32] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_33",
    "titleEn": "Impedance Calculation in RLC Circuit (33)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 33] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_34",
    "titleEn": "Resonant Frequency Calculation (34)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 34] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_35",
    "titleEn": "Impedance Calculation in RLC Circuit (35)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 35] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_36",
    "titleEn": "Resonant Frequency Calculation (36)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 36] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_37",
    "titleEn": "Impedance Calculation in RLC Circuit (37)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 37] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_38",
    "titleEn": "Resonant Frequency Calculation (38)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 38] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_39",
    "titleEn": "Impedance Calculation in RLC Circuit (39)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 39] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_40",
    "titleEn": "Resonant Frequency Calculation (40)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 40] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_41",
    "titleEn": "Impedance Calculation in RLC Circuit (41)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 41] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_42",
    "titleEn": "Resonant Frequency Calculation (42)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 42] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_43",
    "titleEn": "Impedance Calculation in RLC Circuit (43)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 43] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_44",
    "titleEn": "Resonant Frequency Calculation (44)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 44] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_45",
    "titleEn": "Impedance Calculation in RLC Circuit (45)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 45] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_46",
    "titleEn": "Resonant Frequency Calculation (46)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 46] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_47",
    "titleEn": "Impedance Calculation in RLC Circuit (47)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 47] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_48",
    "titleEn": "Resonant Frequency Calculation (48)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 48] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_49",
    "titleEn": "Impedance Calculation in RLC Circuit (49)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 49] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_50",
    "titleEn": "Resonant Frequency Calculation (50)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 50] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_51",
    "titleEn": "Impedance Calculation in RLC Circuit (51)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 51] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_52",
    "titleEn": "Resonant Frequency Calculation (52)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 52] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_53",
    "titleEn": "Impedance Calculation in RLC Circuit (53)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 53] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_54",
    "titleEn": "Resonant Frequency Calculation (54)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 54] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_55",
    "titleEn": "Impedance Calculation in RLC Circuit (55)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 55] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_56",
    "titleEn": "Resonant Frequency Calculation (56)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 56] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_57",
    "titleEn": "Impedance Calculation in RLC Circuit (57)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 57] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  },
  {
    "id": "phys_ch4_db_medium_58",
    "titleEn": "Resonant Frequency Calculation (58)",
    "titleAr": "حساب تردد الرنين في دائرة RLC (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
    "questionAr": "[مسألة متدرجة 58] دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
    "optionsEn": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "optionsAr": [
      "$500\\text{ Hz}$",
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
    "hintAr": "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
      "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
    "teacherTipAr": "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
  },
  {
    "id": "phys_ch4_db_medium_59",
    "titleEn": "Impedance Calculation in RLC Circuit (59)",
    "titleAr": "حساب المعاوقة الكلية في دائرة RLC (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
    "questionAr": "[مسألة متدرجة 59] دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
    "optionsEn": [
      "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
      "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
    ],
    "optionsAr": [
      "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
      "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
      "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
      "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "hintAr": "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
    "stepByStepSolutionEn": [
      "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
    ],
    "stepByStepSolutionAr": [
      "$X_L - X_C = 30\\,\\Omega$.",
      "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
      "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
    ],
    "teacherTipEn": "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
    "teacherTipAr": "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
  }
],
  hots: [
  {
    "id": "phys_ch4_db_hots_01",
    "titleEn": "Current Independence of Frequency in Pure Circuits (1)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (1)",
    "difficulty": "hots",
    "questionEn": "An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_02",
    "titleEn": "Current Independence of Frequency in Pure Circuits (2)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (2)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 2] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 2] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_03",
    "titleEn": "Current Independence of Frequency in Pure Circuits (3)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 3] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_04",
    "titleEn": "Current Independence of Frequency in Pure Circuits (4)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 4] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_05",
    "titleEn": "Current Independence of Frequency in Pure Circuits (5)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 5] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_06",
    "titleEn": "Current Independence of Frequency in Pure Circuits (6)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 6] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_07",
    "titleEn": "Current Independence of Frequency in Pure Circuits (7)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 7] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_08",
    "titleEn": "Current Independence of Frequency in Pure Circuits (8)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 8] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_09",
    "titleEn": "Current Independence of Frequency in Pure Circuits (9)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 9] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_10",
    "titleEn": "Current Independence of Frequency in Pure Circuits (10)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 10] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_11",
    "titleEn": "Current Independence of Frequency in Pure Circuits (11)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 11] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_12",
    "titleEn": "Current Independence of Frequency in Pure Circuits (12)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 12] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_13",
    "titleEn": "Current Independence of Frequency in Pure Circuits (13)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 13] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_14",
    "titleEn": "Current Independence of Frequency in Pure Circuits (14)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 14] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_15",
    "titleEn": "Current Independence of Frequency in Pure Circuits (15)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 15] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_16",
    "titleEn": "Current Independence of Frequency in Pure Circuits (16)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 16] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_17",
    "titleEn": "Current Independence of Frequency in Pure Circuits (17)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 17] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_18",
    "titleEn": "Current Independence of Frequency in Pure Circuits (18)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 18] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_19",
    "titleEn": "Current Independence of Frequency in Pure Circuits (19)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 19] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_20",
    "titleEn": "Current Independence of Frequency in Pure Circuits (20)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 20] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_21",
    "titleEn": "Current Independence of Frequency in Pure Circuits (21)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 21] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_22",
    "titleEn": "Current Independence of Frequency in Pure Circuits (22)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 22] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_23",
    "titleEn": "Current Independence of Frequency in Pure Circuits (23)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 23] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_24",
    "titleEn": "Current Independence of Frequency in Pure Circuits (24)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 24] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_25",
    "titleEn": "Current Independence of Frequency in Pure Circuits (25)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 25] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_26",
    "titleEn": "Current Independence of Frequency in Pure Circuits (26)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 26] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_27",
    "titleEn": "Current Independence of Frequency in Pure Circuits (27)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 27] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_28",
    "titleEn": "Current Independence of Frequency in Pure Circuits (28)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 28] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_29",
    "titleEn": "Current Independence of Frequency in Pure Circuits (29)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 29] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_30",
    "titleEn": "Current Independence of Frequency in Pure Circuits (30)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 30] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_31",
    "titleEn": "Current Independence of Frequency in Pure Circuits (31)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 31] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_32",
    "titleEn": "Current Independence of Frequency in Pure Circuits (32)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 32] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_33",
    "titleEn": "Current Independence of Frequency in Pure Circuits (33)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 33] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_34",
    "titleEn": "Current Independence of Frequency in Pure Circuits (34)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 34] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_35",
    "titleEn": "Current Independence of Frequency in Pure Circuits (35)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 35] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_36",
    "titleEn": "Current Independence of Frequency in Pure Circuits (36)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 36] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_37",
    "titleEn": "Current Independence of Frequency in Pure Circuits (37)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 37] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_38",
    "titleEn": "Current Independence of Frequency in Pure Circuits (38)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 38] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_39",
    "titleEn": "Current Independence of Frequency in Pure Circuits (39)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 39] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_40",
    "titleEn": "Current Independence of Frequency in Pure Circuits (40)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 40] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_41",
    "titleEn": "Current Independence of Frequency in Pure Circuits (41)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 41] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_42",
    "titleEn": "Current Independence of Frequency in Pure Circuits (42)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 42] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_43",
    "titleEn": "Current Independence of Frequency in Pure Circuits (43)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 43] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_44",
    "titleEn": "Current Independence of Frequency in Pure Circuits (44)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 44] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_45",
    "titleEn": "Current Independence of Frequency in Pure Circuits (45)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 45] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_46",
    "titleEn": "Current Independence of Frequency in Pure Circuits (46)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 46] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_47",
    "titleEn": "Current Independence of Frequency in Pure Circuits (47)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 47] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_48",
    "titleEn": "Current Independence of Frequency in Pure Circuits (48)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 48] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_49",
    "titleEn": "Current Independence of Frequency in Pure Circuits (49)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 49] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_50",
    "titleEn": "Current Independence of Frequency in Pure Circuits (50)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 50] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_51",
    "titleEn": "Current Independence of Frequency in Pure Circuits (51)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 51] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_52",
    "titleEn": "Current Independence of Frequency in Pure Circuits (52)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 52] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_53",
    "titleEn": "Current Independence of Frequency in Pure Circuits (53)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 53] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_54",
    "titleEn": "Current Independence of Frequency in Pure Circuits (54)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 54] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_55",
    "titleEn": "Current Independence of Frequency in Pure Circuits (55)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 55] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_56",
    "titleEn": "Current Independence of Frequency in Pure Circuits (56)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 56] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_57",
    "titleEn": "Current Independence of Frequency in Pure Circuits (57)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 57] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  },
  {
    "id": "phys_ch4_db_hots_58",
    "titleEn": "Current Independence of Frequency in Pure Circuits (58)",
    "titleAr": "اعتماد شدة التيار على التردد في الدوائر المختلفة (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
    "questionAr": "[مسألة متدرجة 58] دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
    "optionsEn": [
      "Increase to 4 times its initial value ($4I$)",
      "Double to 2 times its initial value ($2I$)",
      "Remain completely unchanged",
      "Decrease to one-fourth its initial value ($I/4$)"
    ],
    "optionsAr": [
      "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
      "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
      "تظل ثابتة دون أي تغيير",
      "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
    ],
    "correctAnswer": "Increase to 4 times its initial value ($4I$)",
    "correctIndex": 0,
    "hintEn": "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
    "hintAr": "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
    "stepByStepSolutionEn": [
      "$V_{\\max} = 2\\pi f N A B \\propto f$.",
      "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
      "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
    ],
    "teacherTipEn": "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
    "teacherTipAr": "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
  }
]
};
