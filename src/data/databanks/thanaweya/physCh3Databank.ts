import type { ChapterDatabank } from '../../../types/curriculum';

export const physCh3Databank: ChapterDatabank = {
  easy: [
  {
    "id": "phys_ch3_db_easy_01",
    "titleEn": "Faraday Law of Induction (1)",
    "titleAr": "قانون فاراداي للحث الكهرومغناطيسي (1)",
    "difficulty": "easy",
    "questionEn": "Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
    "questionAr": "ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "The total electrical resistance of the wire",
      "The electrostatic potential of the surrounding air",
      "The mass of the magnetic core"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "المقاومة الكهربية الأومية الكلية لسلك الملف",
      "الجهد الكهروستاتيكي للهواء المحيط بالملف",
      "كتلة القلب المغناطيسي"
    ],
    "correctAnswer": "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
    "hintAr": "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
    "stepByStepSolutionEn": [
      "Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
    "teacherTipAr": "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
  },
  {
    "id": "phys_ch3_db_easy_02",
    "titleEn": "Lenz Law Statement (2)",
    "titleAr": "نص قاعدة لينز (2)",
    "difficulty": "easy",
    "questionEn": "According to Lenz's law, the direction of the induced electric current always:",
    "questionAr": "وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
    "optionsEn": [
      "Opposes the change in magnetic flux producing it",
      "Reinforces and amplifies the external magnetic field",
      "Flows in the direction of the gravitational field",
      "Points toward the geometric center of the Earth"
    ],
    "optionsAr": [
      "يعاكس التغير في الفيض المغناطيسي المسبب له",
      "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
      "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
      "يتجه نحو المركز الهندسي للأرض"
    ],
    "correctAnswer": "Opposes the change in magnetic flux producing it",
    "correctIndex": 0,
    "hintEn": "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
    "hintAr": "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
    "stepByStepSolutionEn": [
      "When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."
    ],
    "teacherTipEn": "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
    "teacherTipAr": "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
  },
  {
    "id": "phys_ch3_db_easy_03",
    "titleEn": "Induced EMF in a Moving Straight Conductor (3)",
    "titleAr": "القوة الدافعة المستحثة في سلك مستقيم متحرك (3)",
    "difficulty": "easy",
    "questionEn": "A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
    "questionAr": "سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
    "optionsEn": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "optionsAr": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "correctAnswer": "$\\text{emf} = -B L v$",
    "correctIndex": 0,
    "hintEn": "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
    "hintAr": "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."
    ],
    "teacherTipEn": "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
    "teacherTipAr": "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
  },
  {
    "id": "phys_ch3_db_easy_04",
    "titleEn": "Self-Induction and Henry Unit (4)",
    "titleAr": "الحث الذاتي ووحدة الهنري (4)",
    "difficulty": "easy",
    "questionEn": "The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
    "questionAr": "معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
    "optionsEn": [
      "One Henry ($1\\text{ H}$)",
      "One Tesla ($1\\text{ T}$)",
      "One Weber ($1\\text{ Wb}$)",
      "One Farad ($1\\text{ F}$)"
    ],
    "optionsAr": [
      "الهنري ($1\\text{ H}$)",
      "التسلا ($1\\text{ T}$)",
      "الويبر ($1\\text{ Wb}$)",
      "الفاراد ($1\\text{ F}$)"
    ],
    "correctAnswer": "One Henry ($1\\text{ H}$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
    "hintAr": "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
    "stepByStepSolutionEn": [
      "1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."
    ],
    "stepByStepSolutionAr": [
      "الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."
    ],
    "teacherTipEn": "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
    "teacherTipAr": "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
  },
  {
    "id": "phys_ch3_db_easy_05",
    "titleEn": "Dynamo Peak Electromotive Force Formula (5)",
    "titleAr": "القيمة العظمى للقوة الدافعة في دينامو التيار المتردد (5)",
    "difficulty": "easy",
    "questionEn": "In an AC dynamo coil of $N$ turns, area $A$, rotating at angular velocity $\\omega$ in field $B$, the peak EMF is:",
    "questionAr": "في دينامو التيار المتردد، تعطى القيمة العظمى للقوة الدافعة الكهربية المستحثة بالمعادلة:",
    "optionsEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "correctAnswer": "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
    "correctIndex": 0,
    "hintEn": "Instantaneous EMF: $\\text{emf} = \\text{emf}_{\\max} \\sin(\\omega t) = \\text{emf}_{\\max} \\sin\\theta$.",
    "hintAr": "القوة الدافعة اللحظية: $\\text{emf} = \\text{emf}_{\\max} \\sin(2\\pi f t)$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى لدينامو التيار المتردد: $\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "teacherTipEn": "Effective EMF: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$.",
    "teacherTipAr": "القيمة الفعالة: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_easy_06",
    "titleEn": "Step-Up Electric Transformer Characteristics (6)",
    "titleAr": "خصائص المحول الكهربي الرافع للجهد (6)",
    "difficulty": "easy",
    "questionEn": "In an ideal step-up electric transformer ($V_s > V_p$):",
    "questionAr": "في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
    "optionsEn": [
      "$N_s > N_p$ and $I_s < I_p$",
      "$N_s < N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s > I_p$",
      "The frequency of secondary voltage is double the primary frequency"
    ],
    "optionsAr": [
      "$N_s > N_p$ وتكون شدة تيار الثانوي أقل من الابتدائي ($I_s < I_p$)",
      "$N_s < N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "$N_s > N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "يتضاعف تردد التيار في الملف الثانوي مقارنة بالابتدائي"
    ],
    "correctAnswer": "$N_s > N_p$ and $I_s < I_p$",
    "correctIndex": 0,
    "hintEn": "Transformers conserve electrical power ($P_p = P_s$), so raising voltage reduces current.",
    "hintAr": "المحول يحفظ القدرة الكهربية: رفع الجهد يقابله خفض في شدة التيار بنفس النسبة دون تغيير التردد.",
    "stepByStepSolutionEn": [
      "A step-up transformer raises voltage ($V_s > V_p$) by having $N_s > N_p$, while current drops ($I_s < I_p$). Frequency is unchanged."
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يكون خافضاً للتيار ($N_s > N_p$) وتردد التيار في الثانوي يساوي تردد الابتدائي تماماً."
    ],
    "teacherTipEn": "Electric transformers operate ONLY on alternating current (AC); they do NOT function on continuous DC sources.",
    "teacherTipAr": "يعمل المحول الكهربي على التيار المتردد فقط ولا يعمل على التيار المستمر لانعدام التغير في الفيض."
  },
  {
    "id": "phys_ch3_db_easy_07",
    "titleEn": "Faraday Law of Induction (7)",
    "titleAr": "قانون فاراداي للحث الكهرومغناطيسي (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
    "questionAr": "[مسألة متدرجة 7] ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "The total electrical resistance of the wire",
      "The electrostatic potential of the surrounding air",
      "The mass of the magnetic core"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "المقاومة الكهربية الأومية الكلية لسلك الملف",
      "الجهد الكهروستاتيكي للهواء المحيط بالملف",
      "كتلة القلب المغناطيسي"
    ],
    "correctAnswer": "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
    "hintAr": "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
    "stepByStepSolutionEn": [
      "Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
    "teacherTipAr": "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
  },
  {
    "id": "phys_ch3_db_easy_08",
    "titleEn": "Lenz Law Statement (8)",
    "titleAr": "نص قاعدة لينز (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] According to Lenz's law, the direction of the induced electric current always:",
    "questionAr": "[مسألة متدرجة 8] وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
    "optionsEn": [
      "Opposes the change in magnetic flux producing it",
      "Reinforces and amplifies the external magnetic field",
      "Flows in the direction of the gravitational field",
      "Points toward the geometric center of the Earth"
    ],
    "optionsAr": [
      "يعاكس التغير في الفيض المغناطيسي المسبب له",
      "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
      "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
      "يتجه نحو المركز الهندسي للأرض"
    ],
    "correctAnswer": "Opposes the change in magnetic flux producing it",
    "correctIndex": 0,
    "hintEn": "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
    "hintAr": "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
    "stepByStepSolutionEn": [
      "When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."
    ],
    "teacherTipEn": "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
    "teacherTipAr": "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
  },
  {
    "id": "phys_ch3_db_easy_09",
    "titleEn": "Induced EMF in a Moving Straight Conductor (9)",
    "titleAr": "القوة الدافعة المستحثة في سلك مستقيم متحرك (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
    "questionAr": "[مسألة متدرجة 9] سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
    "optionsEn": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "optionsAr": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "correctAnswer": "$\\text{emf} = -B L v$",
    "correctIndex": 0,
    "hintEn": "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
    "hintAr": "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."
    ],
    "teacherTipEn": "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
    "teacherTipAr": "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
  },
  {
    "id": "phys_ch3_db_easy_10",
    "titleEn": "Self-Induction and Henry Unit (10)",
    "titleAr": "الحث الذاتي ووحدة الهنري (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
    "questionAr": "[مسألة متدرجة 10] معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
    "optionsEn": [
      "One Henry ($1\\text{ H}$)",
      "One Tesla ($1\\text{ T}$)",
      "One Weber ($1\\text{ Wb}$)",
      "One Farad ($1\\text{ F}$)"
    ],
    "optionsAr": [
      "الهنري ($1\\text{ H}$)",
      "التسلا ($1\\text{ T}$)",
      "الويبر ($1\\text{ Wb}$)",
      "الفاراد ($1\\text{ F}$)"
    ],
    "correctAnswer": "One Henry ($1\\text{ H}$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
    "hintAr": "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
    "stepByStepSolutionEn": [
      "1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."
    ],
    "stepByStepSolutionAr": [
      "الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."
    ],
    "teacherTipEn": "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
    "teacherTipAr": "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
  },
  {
    "id": "phys_ch3_db_easy_11",
    "titleEn": "Dynamo Peak Electromotive Force Formula (11)",
    "titleAr": "القيمة العظمى للقوة الدافعة في دينامو التيار المتردد (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] In an AC dynamo coil of $N$ turns, area $A$, rotating at angular velocity $\\omega$ in field $B$, the peak EMF is:",
    "questionAr": "[مسألة متدرجة 11] في دينامو التيار المتردد، تعطى القيمة العظمى للقوة الدافعة الكهربية المستحثة بالمعادلة:",
    "optionsEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "correctAnswer": "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
    "correctIndex": 0,
    "hintEn": "Instantaneous EMF: $\\text{emf} = \\text{emf}_{\\max} \\sin(\\omega t) = \\text{emf}_{\\max} \\sin\\theta$.",
    "hintAr": "القوة الدافعة اللحظية: $\\text{emf} = \\text{emf}_{\\max} \\sin(2\\pi f t)$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى لدينامو التيار المتردد: $\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "teacherTipEn": "Effective EMF: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$.",
    "teacherTipAr": "القيمة الفعالة: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_easy_12",
    "titleEn": "Step-Up Electric Transformer Characteristics (12)",
    "titleAr": "خصائص المحول الكهربي الرافع للجهد (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] In an ideal step-up electric transformer ($V_s > V_p$):",
    "questionAr": "[مسألة متدرجة 12] في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
    "optionsEn": [
      "$N_s > N_p$ and $I_s < I_p$",
      "$N_s < N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s > I_p$",
      "The frequency of secondary voltage is double the primary frequency"
    ],
    "optionsAr": [
      "$N_s > N_p$ وتكون شدة تيار الثانوي أقل من الابتدائي ($I_s < I_p$)",
      "$N_s < N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "$N_s > N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "يتضاعف تردد التيار في الملف الثانوي مقارنة بالابتدائي"
    ],
    "correctAnswer": "$N_s > N_p$ and $I_s < I_p$",
    "correctIndex": 0,
    "hintEn": "Transformers conserve electrical power ($P_p = P_s$), so raising voltage reduces current.",
    "hintAr": "المحول يحفظ القدرة الكهربية: رفع الجهد يقابله خفض في شدة التيار بنفس النسبة دون تغيير التردد.",
    "stepByStepSolutionEn": [
      "A step-up transformer raises voltage ($V_s > V_p$) by having $N_s > N_p$, while current drops ($I_s < I_p$). Frequency is unchanged."
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يكون خافضاً للتيار ($N_s > N_p$) وتردد التيار في الثانوي يساوي تردد الابتدائي تماماً."
    ],
    "teacherTipEn": "Electric transformers operate ONLY on alternating current (AC); they do NOT function on continuous DC sources.",
    "teacherTipAr": "يعمل المحول الكهربي على التيار المتردد فقط ولا يعمل على التيار المستمر لانعدام التغير في الفيض."
  },
  {
    "id": "phys_ch3_db_easy_13",
    "titleEn": "Faraday Law of Induction (13)",
    "titleAr": "قانون فاراداي للحث الكهرومغناطيسي (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
    "questionAr": "[مسألة متدرجة 13] ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "The total electrical resistance of the wire",
      "The electrostatic potential of the surrounding air",
      "The mass of the magnetic core"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "المقاومة الكهربية الأومية الكلية لسلك الملف",
      "الجهد الكهروستاتيكي للهواء المحيط بالملف",
      "كتلة القلب المغناطيسي"
    ],
    "correctAnswer": "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
    "hintAr": "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
    "stepByStepSolutionEn": [
      "Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
    "teacherTipAr": "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
  },
  {
    "id": "phys_ch3_db_easy_14",
    "titleEn": "Lenz Law Statement (14)",
    "titleAr": "نص قاعدة لينز (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] According to Lenz's law, the direction of the induced electric current always:",
    "questionAr": "[مسألة متدرجة 14] وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
    "optionsEn": [
      "Opposes the change in magnetic flux producing it",
      "Reinforces and amplifies the external magnetic field",
      "Flows in the direction of the gravitational field",
      "Points toward the geometric center of the Earth"
    ],
    "optionsAr": [
      "يعاكس التغير في الفيض المغناطيسي المسبب له",
      "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
      "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
      "يتجه نحو المركز الهندسي للأرض"
    ],
    "correctAnswer": "Opposes the change in magnetic flux producing it",
    "correctIndex": 0,
    "hintEn": "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
    "hintAr": "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
    "stepByStepSolutionEn": [
      "When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."
    ],
    "teacherTipEn": "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
    "teacherTipAr": "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
  },
  {
    "id": "phys_ch3_db_easy_15",
    "titleEn": "Induced EMF in a Moving Straight Conductor (15)",
    "titleAr": "القوة الدافعة المستحثة في سلك مستقيم متحرك (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
    "questionAr": "[مسألة متدرجة 15] سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
    "optionsEn": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "optionsAr": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "correctAnswer": "$\\text{emf} = -B L v$",
    "correctIndex": 0,
    "hintEn": "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
    "hintAr": "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."
    ],
    "teacherTipEn": "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
    "teacherTipAr": "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
  },
  {
    "id": "phys_ch3_db_easy_16",
    "titleEn": "Self-Induction and Henry Unit (16)",
    "titleAr": "الحث الذاتي ووحدة الهنري (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
    "questionAr": "[مسألة متدرجة 16] معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
    "optionsEn": [
      "One Henry ($1\\text{ H}$)",
      "One Tesla ($1\\text{ T}$)",
      "One Weber ($1\\text{ Wb}$)",
      "One Farad ($1\\text{ F}$)"
    ],
    "optionsAr": [
      "الهنري ($1\\text{ H}$)",
      "التسلا ($1\\text{ T}$)",
      "الويبر ($1\\text{ Wb}$)",
      "الفاراد ($1\\text{ F}$)"
    ],
    "correctAnswer": "One Henry ($1\\text{ H}$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
    "hintAr": "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
    "stepByStepSolutionEn": [
      "1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."
    ],
    "stepByStepSolutionAr": [
      "الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."
    ],
    "teacherTipEn": "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
    "teacherTipAr": "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
  },
  {
    "id": "phys_ch3_db_easy_17",
    "titleEn": "Dynamo Peak Electromotive Force Formula (17)",
    "titleAr": "القيمة العظمى للقوة الدافعة في دينامو التيار المتردد (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] In an AC dynamo coil of $N$ turns, area $A$, rotating at angular velocity $\\omega$ in field $B$, the peak EMF is:",
    "questionAr": "[مسألة متدرجة 17] في دينامو التيار المتردد، تعطى القيمة العظمى للقوة الدافعة الكهربية المستحثة بالمعادلة:",
    "optionsEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "correctAnswer": "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
    "correctIndex": 0,
    "hintEn": "Instantaneous EMF: $\\text{emf} = \\text{emf}_{\\max} \\sin(\\omega t) = \\text{emf}_{\\max} \\sin\\theta$.",
    "hintAr": "القوة الدافعة اللحظية: $\\text{emf} = \\text{emf}_{\\max} \\sin(2\\pi f t)$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى لدينامو التيار المتردد: $\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "teacherTipEn": "Effective EMF: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$.",
    "teacherTipAr": "القيمة الفعالة: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_easy_18",
    "titleEn": "Step-Up Electric Transformer Characteristics (18)",
    "titleAr": "خصائص المحول الكهربي الرافع للجهد (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] In an ideal step-up electric transformer ($V_s > V_p$):",
    "questionAr": "[مسألة متدرجة 18] في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
    "optionsEn": [
      "$N_s > N_p$ and $I_s < I_p$",
      "$N_s < N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s > I_p$",
      "The frequency of secondary voltage is double the primary frequency"
    ],
    "optionsAr": [
      "$N_s > N_p$ وتكون شدة تيار الثانوي أقل من الابتدائي ($I_s < I_p$)",
      "$N_s < N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "$N_s > N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "يتضاعف تردد التيار في الملف الثانوي مقارنة بالابتدائي"
    ],
    "correctAnswer": "$N_s > N_p$ and $I_s < I_p$",
    "correctIndex": 0,
    "hintEn": "Transformers conserve electrical power ($P_p = P_s$), so raising voltage reduces current.",
    "hintAr": "المحول يحفظ القدرة الكهربية: رفع الجهد يقابله خفض في شدة التيار بنفس النسبة دون تغيير التردد.",
    "stepByStepSolutionEn": [
      "A step-up transformer raises voltage ($V_s > V_p$) by having $N_s > N_p$, while current drops ($I_s < I_p$). Frequency is unchanged."
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يكون خافضاً للتيار ($N_s > N_p$) وتردد التيار في الثانوي يساوي تردد الابتدائي تماماً."
    ],
    "teacherTipEn": "Electric transformers operate ONLY on alternating current (AC); they do NOT function on continuous DC sources.",
    "teacherTipAr": "يعمل المحول الكهربي على التيار المتردد فقط ولا يعمل على التيار المستمر لانعدام التغير في الفيض."
  },
  {
    "id": "phys_ch3_db_easy_19",
    "titleEn": "Faraday Law of Induction (19)",
    "titleAr": "قانون فاراداي للحث الكهرومغناطيسي (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
    "questionAr": "[مسألة متدرجة 19] ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "The total electrical resistance of the wire",
      "The electrostatic potential of the surrounding air",
      "The mass of the magnetic core"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "المقاومة الكهربية الأومية الكلية لسلك الملف",
      "الجهد الكهروستاتيكي للهواء المحيط بالملف",
      "كتلة القلب المغناطيسي"
    ],
    "correctAnswer": "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
    "hintAr": "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
    "stepByStepSolutionEn": [
      "Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
    "teacherTipAr": "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
  },
  {
    "id": "phys_ch3_db_easy_20",
    "titleEn": "Lenz Law Statement (20)",
    "titleAr": "نص قاعدة لينز (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] According to Lenz's law, the direction of the induced electric current always:",
    "questionAr": "[مسألة متدرجة 20] وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
    "optionsEn": [
      "Opposes the change in magnetic flux producing it",
      "Reinforces and amplifies the external magnetic field",
      "Flows in the direction of the gravitational field",
      "Points toward the geometric center of the Earth"
    ],
    "optionsAr": [
      "يعاكس التغير في الفيض المغناطيسي المسبب له",
      "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
      "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
      "يتجه نحو المركز الهندسي للأرض"
    ],
    "correctAnswer": "Opposes the change in magnetic flux producing it",
    "correctIndex": 0,
    "hintEn": "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
    "hintAr": "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
    "stepByStepSolutionEn": [
      "When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."
    ],
    "teacherTipEn": "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
    "teacherTipAr": "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
  },
  {
    "id": "phys_ch3_db_easy_21",
    "titleEn": "Induced EMF in a Moving Straight Conductor (21)",
    "titleAr": "القوة الدافعة المستحثة في سلك مستقيم متحرك (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
    "questionAr": "[مسألة متدرجة 21] سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
    "optionsEn": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "optionsAr": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "correctAnswer": "$\\text{emf} = -B L v$",
    "correctIndex": 0,
    "hintEn": "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
    "hintAr": "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."
    ],
    "teacherTipEn": "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
    "teacherTipAr": "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
  },
  {
    "id": "phys_ch3_db_easy_22",
    "titleEn": "Self-Induction and Henry Unit (22)",
    "titleAr": "الحث الذاتي ووحدة الهنري (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
    "questionAr": "[مسألة متدرجة 22] معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
    "optionsEn": [
      "One Henry ($1\\text{ H}$)",
      "One Tesla ($1\\text{ T}$)",
      "One Weber ($1\\text{ Wb}$)",
      "One Farad ($1\\text{ F}$)"
    ],
    "optionsAr": [
      "الهنري ($1\\text{ H}$)",
      "التسلا ($1\\text{ T}$)",
      "الويبر ($1\\text{ Wb}$)",
      "الفاراد ($1\\text{ F}$)"
    ],
    "correctAnswer": "One Henry ($1\\text{ H}$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
    "hintAr": "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
    "stepByStepSolutionEn": [
      "1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."
    ],
    "stepByStepSolutionAr": [
      "الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."
    ],
    "teacherTipEn": "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
    "teacherTipAr": "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
  },
  {
    "id": "phys_ch3_db_easy_23",
    "titleEn": "Dynamo Peak Electromotive Force Formula (23)",
    "titleAr": "القيمة العظمى للقوة الدافعة في دينامو التيار المتردد (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] In an AC dynamo coil of $N$ turns, area $A$, rotating at angular velocity $\\omega$ in field $B$, the peak EMF is:",
    "questionAr": "[مسألة متدرجة 23] في دينامو التيار المتردد، تعطى القيمة العظمى للقوة الدافعة الكهربية المستحثة بالمعادلة:",
    "optionsEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "correctAnswer": "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
    "correctIndex": 0,
    "hintEn": "Instantaneous EMF: $\\text{emf} = \\text{emf}_{\\max} \\sin(\\omega t) = \\text{emf}_{\\max} \\sin\\theta$.",
    "hintAr": "القوة الدافعة اللحظية: $\\text{emf} = \\text{emf}_{\\max} \\sin(2\\pi f t)$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى لدينامو التيار المتردد: $\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "teacherTipEn": "Effective EMF: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$.",
    "teacherTipAr": "القيمة الفعالة: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_easy_24",
    "titleEn": "Step-Up Electric Transformer Characteristics (24)",
    "titleAr": "خصائص المحول الكهربي الرافع للجهد (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] In an ideal step-up electric transformer ($V_s > V_p$):",
    "questionAr": "[مسألة متدرجة 24] في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
    "optionsEn": [
      "$N_s > N_p$ and $I_s < I_p$",
      "$N_s < N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s > I_p$",
      "The frequency of secondary voltage is double the primary frequency"
    ],
    "optionsAr": [
      "$N_s > N_p$ وتكون شدة تيار الثانوي أقل من الابتدائي ($I_s < I_p$)",
      "$N_s < N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "$N_s > N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "يتضاعف تردد التيار في الملف الثانوي مقارنة بالابتدائي"
    ],
    "correctAnswer": "$N_s > N_p$ and $I_s < I_p$",
    "correctIndex": 0,
    "hintEn": "Transformers conserve electrical power ($P_p = P_s$), so raising voltage reduces current.",
    "hintAr": "المحول يحفظ القدرة الكهربية: رفع الجهد يقابله خفض في شدة التيار بنفس النسبة دون تغيير التردد.",
    "stepByStepSolutionEn": [
      "A step-up transformer raises voltage ($V_s > V_p$) by having $N_s > N_p$, while current drops ($I_s < I_p$). Frequency is unchanged."
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يكون خافضاً للتيار ($N_s > N_p$) وتردد التيار في الثانوي يساوي تردد الابتدائي تماماً."
    ],
    "teacherTipEn": "Electric transformers operate ONLY on alternating current (AC); they do NOT function on continuous DC sources.",
    "teacherTipAr": "يعمل المحول الكهربي على التيار المتردد فقط ولا يعمل على التيار المستمر لانعدام التغير في الفيض."
  },
  {
    "id": "phys_ch3_db_easy_25",
    "titleEn": "Faraday Law of Induction (25)",
    "titleAr": "قانون فاراداي للحث الكهرومغناطيسي (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
    "questionAr": "[مسألة متدرجة 25] ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "The total electrical resistance of the wire",
      "The electrostatic potential of the surrounding air",
      "The mass of the magnetic core"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "المقاومة الكهربية الأومية الكلية لسلك الملف",
      "الجهد الكهروستاتيكي للهواء المحيط بالملف",
      "كتلة القلب المغناطيسي"
    ],
    "correctAnswer": "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
    "hintAr": "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
    "stepByStepSolutionEn": [
      "Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
    "teacherTipAr": "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
  },
  {
    "id": "phys_ch3_db_easy_26",
    "titleEn": "Lenz Law Statement (26)",
    "titleAr": "نص قاعدة لينز (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] According to Lenz's law, the direction of the induced electric current always:",
    "questionAr": "[مسألة متدرجة 26] وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
    "optionsEn": [
      "Opposes the change in magnetic flux producing it",
      "Reinforces and amplifies the external magnetic field",
      "Flows in the direction of the gravitational field",
      "Points toward the geometric center of the Earth"
    ],
    "optionsAr": [
      "يعاكس التغير في الفيض المغناطيسي المسبب له",
      "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
      "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
      "يتجه نحو المركز الهندسي للأرض"
    ],
    "correctAnswer": "Opposes the change in magnetic flux producing it",
    "correctIndex": 0,
    "hintEn": "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
    "hintAr": "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
    "stepByStepSolutionEn": [
      "When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."
    ],
    "teacherTipEn": "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
    "teacherTipAr": "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
  },
  {
    "id": "phys_ch3_db_easy_27",
    "titleEn": "Induced EMF in a Moving Straight Conductor (27)",
    "titleAr": "القوة الدافعة المستحثة في سلك مستقيم متحرك (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
    "questionAr": "[مسألة متدرجة 27] سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
    "optionsEn": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "optionsAr": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "correctAnswer": "$\\text{emf} = -B L v$",
    "correctIndex": 0,
    "hintEn": "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
    "hintAr": "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."
    ],
    "teacherTipEn": "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
    "teacherTipAr": "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
  },
  {
    "id": "phys_ch3_db_easy_28",
    "titleEn": "Self-Induction and Henry Unit (28)",
    "titleAr": "الحث الذاتي ووحدة الهنري (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
    "questionAr": "[مسألة متدرجة 28] معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
    "optionsEn": [
      "One Henry ($1\\text{ H}$)",
      "One Tesla ($1\\text{ T}$)",
      "One Weber ($1\\text{ Wb}$)",
      "One Farad ($1\\text{ F}$)"
    ],
    "optionsAr": [
      "الهنري ($1\\text{ H}$)",
      "التسلا ($1\\text{ T}$)",
      "الويبر ($1\\text{ Wb}$)",
      "الفاراد ($1\\text{ F}$)"
    ],
    "correctAnswer": "One Henry ($1\\text{ H}$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
    "hintAr": "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
    "stepByStepSolutionEn": [
      "1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."
    ],
    "stepByStepSolutionAr": [
      "الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."
    ],
    "teacherTipEn": "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
    "teacherTipAr": "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
  },
  {
    "id": "phys_ch3_db_easy_29",
    "titleEn": "Dynamo Peak Electromotive Force Formula (29)",
    "titleAr": "القيمة العظمى للقوة الدافعة في دينامو التيار المتردد (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] In an AC dynamo coil of $N$ turns, area $A$, rotating at angular velocity $\\omega$ in field $B$, the peak EMF is:",
    "questionAr": "[مسألة متدرجة 29] في دينامو التيار المتردد، تعطى القيمة العظمى للقوة الدافعة الكهربية المستحثة بالمعادلة:",
    "optionsEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "correctAnswer": "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
    "correctIndex": 0,
    "hintEn": "Instantaneous EMF: $\\text{emf} = \\text{emf}_{\\max} \\sin(\\omega t) = \\text{emf}_{\\max} \\sin\\theta$.",
    "hintAr": "القوة الدافعة اللحظية: $\\text{emf} = \\text{emf}_{\\max} \\sin(2\\pi f t)$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى لدينامو التيار المتردد: $\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "teacherTipEn": "Effective EMF: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$.",
    "teacherTipAr": "القيمة الفعالة: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_easy_30",
    "titleEn": "Step-Up Electric Transformer Characteristics (30)",
    "titleAr": "خصائص المحول الكهربي الرافع للجهد (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] In an ideal step-up electric transformer ($V_s > V_p$):",
    "questionAr": "[مسألة متدرجة 30] في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
    "optionsEn": [
      "$N_s > N_p$ and $I_s < I_p$",
      "$N_s < N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s > I_p$",
      "The frequency of secondary voltage is double the primary frequency"
    ],
    "optionsAr": [
      "$N_s > N_p$ وتكون شدة تيار الثانوي أقل من الابتدائي ($I_s < I_p$)",
      "$N_s < N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "$N_s > N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "يتضاعف تردد التيار في الملف الثانوي مقارنة بالابتدائي"
    ],
    "correctAnswer": "$N_s > N_p$ and $I_s < I_p$",
    "correctIndex": 0,
    "hintEn": "Transformers conserve electrical power ($P_p = P_s$), so raising voltage reduces current.",
    "hintAr": "المحول يحفظ القدرة الكهربية: رفع الجهد يقابله خفض في شدة التيار بنفس النسبة دون تغيير التردد.",
    "stepByStepSolutionEn": [
      "A step-up transformer raises voltage ($V_s > V_p$) by having $N_s > N_p$, while current drops ($I_s < I_p$). Frequency is unchanged."
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يكون خافضاً للتيار ($N_s > N_p$) وتردد التيار في الثانوي يساوي تردد الابتدائي تماماً."
    ],
    "teacherTipEn": "Electric transformers operate ONLY on alternating current (AC); they do NOT function on continuous DC sources.",
    "teacherTipAr": "يعمل المحول الكهربي على التيار المتردد فقط ولا يعمل على التيار المستمر لانعدام التغير في الفيض."
  },
  {
    "id": "phys_ch3_db_easy_31",
    "titleEn": "Faraday Law of Induction (31)",
    "titleAr": "قانون فاراداي للحث الكهرومغناطيسي (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
    "questionAr": "[مسألة متدرجة 31] ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "The total electrical resistance of the wire",
      "The electrostatic potential of the surrounding air",
      "The mass of the magnetic core"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "المقاومة الكهربية الأومية الكلية لسلك الملف",
      "الجهد الكهروستاتيكي للهواء المحيط بالملف",
      "كتلة القلب المغناطيسي"
    ],
    "correctAnswer": "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
    "hintAr": "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
    "stepByStepSolutionEn": [
      "Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
    "teacherTipAr": "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
  },
  {
    "id": "phys_ch3_db_easy_32",
    "titleEn": "Lenz Law Statement (32)",
    "titleAr": "نص قاعدة لينز (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] According to Lenz's law, the direction of the induced electric current always:",
    "questionAr": "[مسألة متدرجة 32] وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
    "optionsEn": [
      "Opposes the change in magnetic flux producing it",
      "Reinforces and amplifies the external magnetic field",
      "Flows in the direction of the gravitational field",
      "Points toward the geometric center of the Earth"
    ],
    "optionsAr": [
      "يعاكس التغير في الفيض المغناطيسي المسبب له",
      "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
      "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
      "يتجه نحو المركز الهندسي للأرض"
    ],
    "correctAnswer": "Opposes the change in magnetic flux producing it",
    "correctIndex": 0,
    "hintEn": "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
    "hintAr": "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
    "stepByStepSolutionEn": [
      "When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."
    ],
    "teacherTipEn": "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
    "teacherTipAr": "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
  },
  {
    "id": "phys_ch3_db_easy_33",
    "titleEn": "Induced EMF in a Moving Straight Conductor (33)",
    "titleAr": "القوة الدافعة المستحثة في سلك مستقيم متحرك (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
    "questionAr": "[مسألة متدرجة 33] سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
    "optionsEn": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "optionsAr": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "correctAnswer": "$\\text{emf} = -B L v$",
    "correctIndex": 0,
    "hintEn": "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
    "hintAr": "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."
    ],
    "teacherTipEn": "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
    "teacherTipAr": "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
  },
  {
    "id": "phys_ch3_db_easy_34",
    "titleEn": "Self-Induction and Henry Unit (34)",
    "titleAr": "الحث الذاتي ووحدة الهنري (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
    "questionAr": "[مسألة متدرجة 34] معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
    "optionsEn": [
      "One Henry ($1\\text{ H}$)",
      "One Tesla ($1\\text{ T}$)",
      "One Weber ($1\\text{ Wb}$)",
      "One Farad ($1\\text{ F}$)"
    ],
    "optionsAr": [
      "الهنري ($1\\text{ H}$)",
      "التسلا ($1\\text{ T}$)",
      "الويبر ($1\\text{ Wb}$)",
      "الفاراد ($1\\text{ F}$)"
    ],
    "correctAnswer": "One Henry ($1\\text{ H}$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
    "hintAr": "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
    "stepByStepSolutionEn": [
      "1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."
    ],
    "stepByStepSolutionAr": [
      "الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."
    ],
    "teacherTipEn": "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
    "teacherTipAr": "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
  },
  {
    "id": "phys_ch3_db_easy_35",
    "titleEn": "Dynamo Peak Electromotive Force Formula (35)",
    "titleAr": "القيمة العظمى للقوة الدافعة في دينامو التيار المتردد (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] In an AC dynamo coil of $N$ turns, area $A$, rotating at angular velocity $\\omega$ in field $B$, the peak EMF is:",
    "questionAr": "[مسألة متدرجة 35] في دينامو التيار المتردد، تعطى القيمة العظمى للقوة الدافعة الكهربية المستحثة بالمعادلة:",
    "optionsEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "correctAnswer": "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
    "correctIndex": 0,
    "hintEn": "Instantaneous EMF: $\\text{emf} = \\text{emf}_{\\max} \\sin(\\omega t) = \\text{emf}_{\\max} \\sin\\theta$.",
    "hintAr": "القوة الدافعة اللحظية: $\\text{emf} = \\text{emf}_{\\max} \\sin(2\\pi f t)$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى لدينامو التيار المتردد: $\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "teacherTipEn": "Effective EMF: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$.",
    "teacherTipAr": "القيمة الفعالة: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_easy_36",
    "titleEn": "Step-Up Electric Transformer Characteristics (36)",
    "titleAr": "خصائص المحول الكهربي الرافع للجهد (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] In an ideal step-up electric transformer ($V_s > V_p$):",
    "questionAr": "[مسألة متدرجة 36] في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
    "optionsEn": [
      "$N_s > N_p$ and $I_s < I_p$",
      "$N_s < N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s > I_p$",
      "The frequency of secondary voltage is double the primary frequency"
    ],
    "optionsAr": [
      "$N_s > N_p$ وتكون شدة تيار الثانوي أقل من الابتدائي ($I_s < I_p$)",
      "$N_s < N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "$N_s > N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "يتضاعف تردد التيار في الملف الثانوي مقارنة بالابتدائي"
    ],
    "correctAnswer": "$N_s > N_p$ and $I_s < I_p$",
    "correctIndex": 0,
    "hintEn": "Transformers conserve electrical power ($P_p = P_s$), so raising voltage reduces current.",
    "hintAr": "المحول يحفظ القدرة الكهربية: رفع الجهد يقابله خفض في شدة التيار بنفس النسبة دون تغيير التردد.",
    "stepByStepSolutionEn": [
      "A step-up transformer raises voltage ($V_s > V_p$) by having $N_s > N_p$, while current drops ($I_s < I_p$). Frequency is unchanged."
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يكون خافضاً للتيار ($N_s > N_p$) وتردد التيار في الثانوي يساوي تردد الابتدائي تماماً."
    ],
    "teacherTipEn": "Electric transformers operate ONLY on alternating current (AC); they do NOT function on continuous DC sources.",
    "teacherTipAr": "يعمل المحول الكهربي على التيار المتردد فقط ولا يعمل على التيار المستمر لانعدام التغير في الفيض."
  },
  {
    "id": "phys_ch3_db_easy_37",
    "titleEn": "Faraday Law of Induction (37)",
    "titleAr": "قانون فاراداي للحث الكهرومغناطيسي (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
    "questionAr": "[مسألة متدرجة 37] ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "The total electrical resistance of the wire",
      "The electrostatic potential of the surrounding air",
      "The mass of the magnetic core"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "المقاومة الكهربية الأومية الكلية لسلك الملف",
      "الجهد الكهروستاتيكي للهواء المحيط بالملف",
      "كتلة القلب المغناطيسي"
    ],
    "correctAnswer": "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
    "hintAr": "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
    "stepByStepSolutionEn": [
      "Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
    "teacherTipAr": "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
  },
  {
    "id": "phys_ch3_db_easy_38",
    "titleEn": "Lenz Law Statement (38)",
    "titleAr": "نص قاعدة لينز (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] According to Lenz's law, the direction of the induced electric current always:",
    "questionAr": "[مسألة متدرجة 38] وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
    "optionsEn": [
      "Opposes the change in magnetic flux producing it",
      "Reinforces and amplifies the external magnetic field",
      "Flows in the direction of the gravitational field",
      "Points toward the geometric center of the Earth"
    ],
    "optionsAr": [
      "يعاكس التغير في الفيض المغناطيسي المسبب له",
      "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
      "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
      "يتجه نحو المركز الهندسي للأرض"
    ],
    "correctAnswer": "Opposes the change in magnetic flux producing it",
    "correctIndex": 0,
    "hintEn": "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
    "hintAr": "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
    "stepByStepSolutionEn": [
      "When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."
    ],
    "teacherTipEn": "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
    "teacherTipAr": "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
  },
  {
    "id": "phys_ch3_db_easy_39",
    "titleEn": "Induced EMF in a Moving Straight Conductor (39)",
    "titleAr": "القوة الدافعة المستحثة في سلك مستقيم متحرك (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
    "questionAr": "[مسألة متدرجة 39] سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
    "optionsEn": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "optionsAr": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "correctAnswer": "$\\text{emf} = -B L v$",
    "correctIndex": 0,
    "hintEn": "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
    "hintAr": "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."
    ],
    "teacherTipEn": "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
    "teacherTipAr": "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
  },
  {
    "id": "phys_ch3_db_easy_40",
    "titleEn": "Self-Induction and Henry Unit (40)",
    "titleAr": "الحث الذاتي ووحدة الهنري (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
    "questionAr": "[مسألة متدرجة 40] معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
    "optionsEn": [
      "One Henry ($1\\text{ H}$)",
      "One Tesla ($1\\text{ T}$)",
      "One Weber ($1\\text{ Wb}$)",
      "One Farad ($1\\text{ F}$)"
    ],
    "optionsAr": [
      "الهنري ($1\\text{ H}$)",
      "التسلا ($1\\text{ T}$)",
      "الويبر ($1\\text{ Wb}$)",
      "الفاراد ($1\\text{ F}$)"
    ],
    "correctAnswer": "One Henry ($1\\text{ H}$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
    "hintAr": "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
    "stepByStepSolutionEn": [
      "1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."
    ],
    "stepByStepSolutionAr": [
      "الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."
    ],
    "teacherTipEn": "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
    "teacherTipAr": "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
  },
  {
    "id": "phys_ch3_db_easy_41",
    "titleEn": "Dynamo Peak Electromotive Force Formula (41)",
    "titleAr": "القيمة العظمى للقوة الدافعة في دينامو التيار المتردد (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] In an AC dynamo coil of $N$ turns, area $A$, rotating at angular velocity $\\omega$ in field $B$, the peak EMF is:",
    "questionAr": "[مسألة متدرجة 41] في دينامو التيار المتردد، تعطى القيمة العظمى للقوة الدافعة الكهربية المستحثة بالمعادلة:",
    "optionsEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "correctAnswer": "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
    "correctIndex": 0,
    "hintEn": "Instantaneous EMF: $\\text{emf} = \\text{emf}_{\\max} \\sin(\\omega t) = \\text{emf}_{\\max} \\sin\\theta$.",
    "hintAr": "القوة الدافعة اللحظية: $\\text{emf} = \\text{emf}_{\\max} \\sin(2\\pi f t)$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى لدينامو التيار المتردد: $\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "teacherTipEn": "Effective EMF: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$.",
    "teacherTipAr": "القيمة الفعالة: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_easy_42",
    "titleEn": "Step-Up Electric Transformer Characteristics (42)",
    "titleAr": "خصائص المحول الكهربي الرافع للجهد (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] In an ideal step-up electric transformer ($V_s > V_p$):",
    "questionAr": "[مسألة متدرجة 42] في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
    "optionsEn": [
      "$N_s > N_p$ and $I_s < I_p$",
      "$N_s < N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s > I_p$",
      "The frequency of secondary voltage is double the primary frequency"
    ],
    "optionsAr": [
      "$N_s > N_p$ وتكون شدة تيار الثانوي أقل من الابتدائي ($I_s < I_p$)",
      "$N_s < N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "$N_s > N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "يتضاعف تردد التيار في الملف الثانوي مقارنة بالابتدائي"
    ],
    "correctAnswer": "$N_s > N_p$ and $I_s < I_p$",
    "correctIndex": 0,
    "hintEn": "Transformers conserve electrical power ($P_p = P_s$), so raising voltage reduces current.",
    "hintAr": "المحول يحفظ القدرة الكهربية: رفع الجهد يقابله خفض في شدة التيار بنفس النسبة دون تغيير التردد.",
    "stepByStepSolutionEn": [
      "A step-up transformer raises voltage ($V_s > V_p$) by having $N_s > N_p$, while current drops ($I_s < I_p$). Frequency is unchanged."
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يكون خافضاً للتيار ($N_s > N_p$) وتردد التيار في الثانوي يساوي تردد الابتدائي تماماً."
    ],
    "teacherTipEn": "Electric transformers operate ONLY on alternating current (AC); they do NOT function on continuous DC sources.",
    "teacherTipAr": "يعمل المحول الكهربي على التيار المتردد فقط ولا يعمل على التيار المستمر لانعدام التغير في الفيض."
  },
  {
    "id": "phys_ch3_db_easy_43",
    "titleEn": "Faraday Law of Induction (43)",
    "titleAr": "قانون فاراداي للحث الكهرومغناطيسي (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
    "questionAr": "[مسألة متدرجة 43] ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "The total electrical resistance of the wire",
      "The electrostatic potential of the surrounding air",
      "The mass of the magnetic core"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "المقاومة الكهربية الأومية الكلية لسلك الملف",
      "الجهد الكهروستاتيكي للهواء المحيط بالملف",
      "كتلة القلب المغناطيسي"
    ],
    "correctAnswer": "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
    "hintAr": "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
    "stepByStepSolutionEn": [
      "Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
    "teacherTipAr": "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
  },
  {
    "id": "phys_ch3_db_easy_44",
    "titleEn": "Lenz Law Statement (44)",
    "titleAr": "نص قاعدة لينز (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] According to Lenz's law, the direction of the induced electric current always:",
    "questionAr": "[مسألة متدرجة 44] وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
    "optionsEn": [
      "Opposes the change in magnetic flux producing it",
      "Reinforces and amplifies the external magnetic field",
      "Flows in the direction of the gravitational field",
      "Points toward the geometric center of the Earth"
    ],
    "optionsAr": [
      "يعاكس التغير في الفيض المغناطيسي المسبب له",
      "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
      "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
      "يتجه نحو المركز الهندسي للأرض"
    ],
    "correctAnswer": "Opposes the change in magnetic flux producing it",
    "correctIndex": 0,
    "hintEn": "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
    "hintAr": "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
    "stepByStepSolutionEn": [
      "When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."
    ],
    "teacherTipEn": "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
    "teacherTipAr": "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
  },
  {
    "id": "phys_ch3_db_easy_45",
    "titleEn": "Induced EMF in a Moving Straight Conductor (45)",
    "titleAr": "القوة الدافعة المستحثة في سلك مستقيم متحرك (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
    "questionAr": "[مسألة متدرجة 45] سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
    "optionsEn": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "optionsAr": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "correctAnswer": "$\\text{emf} = -B L v$",
    "correctIndex": 0,
    "hintEn": "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
    "hintAr": "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."
    ],
    "teacherTipEn": "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
    "teacherTipAr": "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
  },
  {
    "id": "phys_ch3_db_easy_46",
    "titleEn": "Self-Induction and Henry Unit (46)",
    "titleAr": "الحث الذاتي ووحدة الهنري (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
    "questionAr": "[مسألة متدرجة 46] معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
    "optionsEn": [
      "One Henry ($1\\text{ H}$)",
      "One Tesla ($1\\text{ T}$)",
      "One Weber ($1\\text{ Wb}$)",
      "One Farad ($1\\text{ F}$)"
    ],
    "optionsAr": [
      "الهنري ($1\\text{ H}$)",
      "التسلا ($1\\text{ T}$)",
      "الويبر ($1\\text{ Wb}$)",
      "الفاراد ($1\\text{ F}$)"
    ],
    "correctAnswer": "One Henry ($1\\text{ H}$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
    "hintAr": "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
    "stepByStepSolutionEn": [
      "1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."
    ],
    "stepByStepSolutionAr": [
      "الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."
    ],
    "teacherTipEn": "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
    "teacherTipAr": "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
  },
  {
    "id": "phys_ch3_db_easy_47",
    "titleEn": "Dynamo Peak Electromotive Force Formula (47)",
    "titleAr": "القيمة العظمى للقوة الدافعة في دينامو التيار المتردد (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] In an AC dynamo coil of $N$ turns, area $A$, rotating at angular velocity $\\omega$ in field $B$, the peak EMF is:",
    "questionAr": "[مسألة متدرجة 47] في دينامو التيار المتردد، تعطى القيمة العظمى للقوة الدافعة الكهربية المستحثة بالمعادلة:",
    "optionsEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "correctAnswer": "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
    "correctIndex": 0,
    "hintEn": "Instantaneous EMF: $\\text{emf} = \\text{emf}_{\\max} \\sin(\\omega t) = \\text{emf}_{\\max} \\sin\\theta$.",
    "hintAr": "القوة الدافعة اللحظية: $\\text{emf} = \\text{emf}_{\\max} \\sin(2\\pi f t)$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى لدينامو التيار المتردد: $\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "teacherTipEn": "Effective EMF: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$.",
    "teacherTipAr": "القيمة الفعالة: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_easy_48",
    "titleEn": "Step-Up Electric Transformer Characteristics (48)",
    "titleAr": "خصائص المحول الكهربي الرافع للجهد (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] In an ideal step-up electric transformer ($V_s > V_p$):",
    "questionAr": "[مسألة متدرجة 48] في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
    "optionsEn": [
      "$N_s > N_p$ and $I_s < I_p$",
      "$N_s < N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s > I_p$",
      "The frequency of secondary voltage is double the primary frequency"
    ],
    "optionsAr": [
      "$N_s > N_p$ وتكون شدة تيار الثانوي أقل من الابتدائي ($I_s < I_p$)",
      "$N_s < N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "$N_s > N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "يتضاعف تردد التيار في الملف الثانوي مقارنة بالابتدائي"
    ],
    "correctAnswer": "$N_s > N_p$ and $I_s < I_p$",
    "correctIndex": 0,
    "hintEn": "Transformers conserve electrical power ($P_p = P_s$), so raising voltage reduces current.",
    "hintAr": "المحول يحفظ القدرة الكهربية: رفع الجهد يقابله خفض في شدة التيار بنفس النسبة دون تغيير التردد.",
    "stepByStepSolutionEn": [
      "A step-up transformer raises voltage ($V_s > V_p$) by having $N_s > N_p$, while current drops ($I_s < I_p$). Frequency is unchanged."
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يكون خافضاً للتيار ($N_s > N_p$) وتردد التيار في الثانوي يساوي تردد الابتدائي تماماً."
    ],
    "teacherTipEn": "Electric transformers operate ONLY on alternating current (AC); they do NOT function on continuous DC sources.",
    "teacherTipAr": "يعمل المحول الكهربي على التيار المتردد فقط ولا يعمل على التيار المستمر لانعدام التغير في الفيض."
  },
  {
    "id": "phys_ch3_db_easy_49",
    "titleEn": "Faraday Law of Induction (49)",
    "titleAr": "قانون فاراداي للحث الكهرومغناطيسي (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
    "questionAr": "[مسألة متدرجة 49] ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "The total electrical resistance of the wire",
      "The electrostatic potential of the surrounding air",
      "The mass of the magnetic core"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "المقاومة الكهربية الأومية الكلية لسلك الملف",
      "الجهد الكهروستاتيكي للهواء المحيط بالملف",
      "كتلة القلب المغناطيسي"
    ],
    "correctAnswer": "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
    "hintAr": "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
    "stepByStepSolutionEn": [
      "Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
    "teacherTipAr": "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
  },
  {
    "id": "phys_ch3_db_easy_50",
    "titleEn": "Lenz Law Statement (50)",
    "titleAr": "نص قاعدة لينز (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] According to Lenz's law, the direction of the induced electric current always:",
    "questionAr": "[مسألة متدرجة 50] وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
    "optionsEn": [
      "Opposes the change in magnetic flux producing it",
      "Reinforces and amplifies the external magnetic field",
      "Flows in the direction of the gravitational field",
      "Points toward the geometric center of the Earth"
    ],
    "optionsAr": [
      "يعاكس التغير في الفيض المغناطيسي المسبب له",
      "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
      "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
      "يتجه نحو المركز الهندسي للأرض"
    ],
    "correctAnswer": "Opposes the change in magnetic flux producing it",
    "correctIndex": 0,
    "hintEn": "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
    "hintAr": "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
    "stepByStepSolutionEn": [
      "When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."
    ],
    "teacherTipEn": "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
    "teacherTipAr": "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
  },
  {
    "id": "phys_ch3_db_easy_51",
    "titleEn": "Induced EMF in a Moving Straight Conductor (51)",
    "titleAr": "القوة الدافعة المستحثة في سلك مستقيم متحرك (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
    "questionAr": "[مسألة متدرجة 51] سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
    "optionsEn": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "optionsAr": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "correctAnswer": "$\\text{emf} = -B L v$",
    "correctIndex": 0,
    "hintEn": "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
    "hintAr": "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."
    ],
    "teacherTipEn": "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
    "teacherTipAr": "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
  },
  {
    "id": "phys_ch3_db_easy_52",
    "titleEn": "Self-Induction and Henry Unit (52)",
    "titleAr": "الحث الذاتي ووحدة الهنري (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
    "questionAr": "[مسألة متدرجة 52] معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
    "optionsEn": [
      "One Henry ($1\\text{ H}$)",
      "One Tesla ($1\\text{ T}$)",
      "One Weber ($1\\text{ Wb}$)",
      "One Farad ($1\\text{ F}$)"
    ],
    "optionsAr": [
      "الهنري ($1\\text{ H}$)",
      "التسلا ($1\\text{ T}$)",
      "الويبر ($1\\text{ Wb}$)",
      "الفاراد ($1\\text{ F}$)"
    ],
    "correctAnswer": "One Henry ($1\\text{ H}$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
    "hintAr": "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
    "stepByStepSolutionEn": [
      "1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."
    ],
    "stepByStepSolutionAr": [
      "الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."
    ],
    "teacherTipEn": "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
    "teacherTipAr": "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
  },
  {
    "id": "phys_ch3_db_easy_53",
    "titleEn": "Dynamo Peak Electromotive Force Formula (53)",
    "titleAr": "القيمة العظمى للقوة الدافعة في دينامو التيار المتردد (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] In an AC dynamo coil of $N$ turns, area $A$, rotating at angular velocity $\\omega$ in field $B$, the peak EMF is:",
    "questionAr": "[مسألة متدرجة 53] في دينامو التيار المتردد، تعطى القيمة العظمى للقوة الدافعة الكهربية المستحثة بالمعادلة:",
    "optionsEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "optionsAr": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
      "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
      "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
      "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
    ],
    "correctAnswer": "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
    "correctIndex": 0,
    "hintEn": "Instantaneous EMF: $\\text{emf} = \\text{emf}_{\\max} \\sin(\\omega t) = \\text{emf}_{\\max} \\sin\\theta$.",
    "hintAr": "القوة الدافعة اللحظية: $\\text{emf} = \\text{emf}_{\\max} \\sin(2\\pi f t)$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "stepByStepSolutionAr": [
      "القيمة العظمى لدينامو التيار المتردد: $\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."
    ],
    "teacherTipEn": "Effective EMF: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$.",
    "teacherTipAr": "القيمة الفعالة: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_easy_54",
    "titleEn": "Step-Up Electric Transformer Characteristics (54)",
    "titleAr": "خصائص المحول الكهربي الرافع للجهد (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] In an ideal step-up electric transformer ($V_s > V_p$):",
    "questionAr": "[مسألة متدرجة 54] في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
    "optionsEn": [
      "$N_s > N_p$ and $I_s < I_p$",
      "$N_s < N_p$ and $I_s > I_p$",
      "$N_s > N_p$ and $I_s > I_p$",
      "The frequency of secondary voltage is double the primary frequency"
    ],
    "optionsAr": [
      "$N_s > N_p$ وتكون شدة تيار الثانوي أقل من الابتدائي ($I_s < I_p$)",
      "$N_s < N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "$N_s > N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
      "يتضاعف تردد التيار في الملف الثانوي مقارنة بالابتدائي"
    ],
    "correctAnswer": "$N_s > N_p$ and $I_s < I_p$",
    "correctIndex": 0,
    "hintEn": "Transformers conserve electrical power ($P_p = P_s$), so raising voltage reduces current.",
    "hintAr": "المحول يحفظ القدرة الكهربية: رفع الجهد يقابله خفض في شدة التيار بنفس النسبة دون تغيير التردد.",
    "stepByStepSolutionEn": [
      "A step-up transformer raises voltage ($V_s > V_p$) by having $N_s > N_p$, while current drops ($I_s < I_p$). Frequency is unchanged."
    ],
    "stepByStepSolutionAr": [
      "المحول الرافع للجهد يكون خافضاً للتيار ($N_s > N_p$) وتردد التيار في الثانوي يساوي تردد الابتدائي تماماً."
    ],
    "teacherTipEn": "Electric transformers operate ONLY on alternating current (AC); they do NOT function on continuous DC sources.",
    "teacherTipAr": "يعمل المحول الكهربي على التيار المتردد فقط ولا يعمل على التيار المستمر لانعدام التغير في الفيض."
  },
  {
    "id": "phys_ch3_db_easy_55",
    "titleEn": "Faraday Law of Induction (55)",
    "titleAr": "قانون فاراداي للحث الكهرومغناطيسي (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
    "questionAr": "[مسألة متدرجة 55] ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
    "optionsEn": [
      "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "The total electrical resistance of the wire",
      "The electrostatic potential of the surrounding air",
      "The mass of the magnetic core"
    ],
    "optionsAr": [
      "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
      "المقاومة الكهربية الأومية الكلية لسلك الملف",
      "الجهد الكهروستاتيكي للهواء المحيط بالملف",
      "كتلة القلب المغناطيسي"
    ],
    "correctAnswer": "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
    "correctIndex": 0,
    "hintEn": "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
    "hintAr": "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
    "stepByStepSolutionEn": [
      "Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."
    ],
    "teacherTipEn": "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
    "teacherTipAr": "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
  },
  {
    "id": "phys_ch3_db_easy_56",
    "titleEn": "Lenz Law Statement (56)",
    "titleAr": "نص قاعدة لينز (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] According to Lenz's law, the direction of the induced electric current always:",
    "questionAr": "[مسألة متدرجة 56] وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
    "optionsEn": [
      "Opposes the change in magnetic flux producing it",
      "Reinforces and amplifies the external magnetic field",
      "Flows in the direction of the gravitational field",
      "Points toward the geometric center of the Earth"
    ],
    "optionsAr": [
      "يعاكس التغير في الفيض المغناطيسي المسبب له",
      "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
      "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
      "يتجه نحو المركز الهندسي للأرض"
    ],
    "correctAnswer": "Opposes the change in magnetic flux producing it",
    "correctIndex": 0,
    "hintEn": "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
    "hintAr": "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
    "stepByStepSolutionEn": [
      "When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."
    ],
    "teacherTipEn": "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
    "teacherTipAr": "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
  },
  {
    "id": "phys_ch3_db_easy_57",
    "titleEn": "Induced EMF in a Moving Straight Conductor (57)",
    "titleAr": "القوة الدافعة المستحثة في سلك مستقيم متحرك (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
    "questionAr": "[مسألة متدرجة 57] سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
    "optionsEn": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "optionsAr": [
      "$\\text{emf} = -B L v$",
      "$\\text{emf} = -\\frac{B L}{v}$",
      "$\\text{emf} = -B^2 L v$",
      "$\\text{emf} = -\\frac{B v^2}{L}$"
    ],
    "correctAnswer": "$\\text{emf} = -B L v$",
    "correctIndex": 0,
    "hintEn": "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
    "hintAr": "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."
    ],
    "teacherTipEn": "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
    "teacherTipAr": "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
  },
  {
    "id": "phys_ch3_db_easy_58",
    "titleEn": "Self-Induction and Henry Unit (58)",
    "titleAr": "الحث الذاتي ووحدة الهنري (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
    "questionAr": "[مسألة متدرجة 58] معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
    "optionsEn": [
      "One Henry ($1\\text{ H}$)",
      "One Tesla ($1\\text{ T}$)",
      "One Weber ($1\\text{ Wb}$)",
      "One Farad ($1\\text{ F}$)"
    ],
    "optionsAr": [
      "الهنري ($1\\text{ H}$)",
      "التسلا ($1\\text{ T}$)",
      "الويبر ($1\\text{ Wb}$)",
      "الفاراد ($1\\text{ F}$)"
    ],
    "correctAnswer": "One Henry ($1\\text{ H}$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
    "hintAr": "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
    "stepByStepSolutionEn": [
      "1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."
    ],
    "stepByStepSolutionAr": [
      "الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."
    ],
    "teacherTipEn": "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
    "teacherTipAr": "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
  }
],
  medium: [
  {
    "id": "phys_ch3_db_medium_01",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (1)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (1)",
    "difficulty": "medium",
    "questionEn": "If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_02",
    "titleEn": "Electric Transformer Efficiency Calculation (2)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (2)",
    "difficulty": "medium",
    "questionEn": "A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_03",
    "titleEn": "Self-Induction and Stored Magnetic Energy (3)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (3)",
    "difficulty": "medium",
    "questionEn": "A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_04",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (4)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 4] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_05",
    "titleEn": "Electric Transformer Efficiency Calculation (5)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 5] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_06",
    "titleEn": "Self-Induction and Stored Magnetic Energy (6)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 6] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_07",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (7)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 7] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_08",
    "titleEn": "Electric Transformer Efficiency Calculation (8)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 8] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_09",
    "titleEn": "Self-Induction and Stored Magnetic Energy (9)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 9] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_10",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (10)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 10] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_11",
    "titleEn": "Electric Transformer Efficiency Calculation (11)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 11] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_12",
    "titleEn": "Self-Induction and Stored Magnetic Energy (12)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 12] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_13",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (13)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 13] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_14",
    "titleEn": "Electric Transformer Efficiency Calculation (14)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 14] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_15",
    "titleEn": "Self-Induction and Stored Magnetic Energy (15)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 15] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_16",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (16)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 16] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_17",
    "titleEn": "Electric Transformer Efficiency Calculation (17)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 17] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_18",
    "titleEn": "Self-Induction and Stored Magnetic Energy (18)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 18] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_19",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (19)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 19] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_20",
    "titleEn": "Electric Transformer Efficiency Calculation (20)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 20] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_21",
    "titleEn": "Self-Induction and Stored Magnetic Energy (21)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 21] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_22",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (22)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 22] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_23",
    "titleEn": "Electric Transformer Efficiency Calculation (23)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 23] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_24",
    "titleEn": "Self-Induction and Stored Magnetic Energy (24)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 24] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_25",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (25)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 25] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_26",
    "titleEn": "Electric Transformer Efficiency Calculation (26)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 26] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_27",
    "titleEn": "Self-Induction and Stored Magnetic Energy (27)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 27] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_28",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (28)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 28] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_29",
    "titleEn": "Electric Transformer Efficiency Calculation (29)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 29] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_30",
    "titleEn": "Self-Induction and Stored Magnetic Energy (30)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 30] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_31",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (31)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 31] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_32",
    "titleEn": "Electric Transformer Efficiency Calculation (32)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 32] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_33",
    "titleEn": "Self-Induction and Stored Magnetic Energy (33)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 33] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_34",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (34)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 34] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_35",
    "titleEn": "Electric Transformer Efficiency Calculation (35)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 35] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_36",
    "titleEn": "Self-Induction and Stored Magnetic Energy (36)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 36] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_37",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (37)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 37] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_38",
    "titleEn": "Electric Transformer Efficiency Calculation (38)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 38] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_39",
    "titleEn": "Self-Induction and Stored Magnetic Energy (39)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 39] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_40",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (40)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 40] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_41",
    "titleEn": "Electric Transformer Efficiency Calculation (41)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 41] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_42",
    "titleEn": "Self-Induction and Stored Magnetic Energy (42)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 42] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_43",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (43)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 43] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_44",
    "titleEn": "Electric Transformer Efficiency Calculation (44)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 44] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_45",
    "titleEn": "Self-Induction and Stored Magnetic Energy (45)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 45] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_46",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (46)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 46] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_47",
    "titleEn": "Electric Transformer Efficiency Calculation (47)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 47] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_48",
    "titleEn": "Self-Induction and Stored Magnetic Energy (48)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 48] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_49",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (49)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 49] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_50",
    "titleEn": "Electric Transformer Efficiency Calculation (50)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 50] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_51",
    "titleEn": "Self-Induction and Stored Magnetic Energy (51)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 51] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_52",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (52)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 52] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_53",
    "titleEn": "Electric Transformer Efficiency Calculation (53)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 53] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_54",
    "titleEn": "Self-Induction and Stored Magnetic Energy (54)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 54] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_55",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (55)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 55] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_56",
    "titleEn": "Electric Transformer Efficiency Calculation (56)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 56] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  },
  {
    "id": "phys_ch3_db_medium_57",
    "titleEn": "Self-Induction and Stored Magnetic Energy (57)",
    "titleAr": "معامل الحث الذاتي والطاقة المغناطيسية المختزنة (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
    "questionAr": "[مسألة متدرجة 57] ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$50\\text{ V}$",
      "$200\\text{ V}$",
      "$20\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
    "hintAr": "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
    ],
    "teacherTipEn": "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
    "teacherTipAr": "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
  },
  {
    "id": "phys_ch3_db_medium_58",
    "titleEn": "Average Induced EMF Over a Quarter Cycle in Dynamo (58)",
    "titleAr": "متوسط القوة الدافعة خلال ربع دورة في الدينامو (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
    "questionAr": "[مسألة متدرجة 58] إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
    "optionsEn": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
      "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
      "$100\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
    "correctIndex": 0,
    "hintEn": "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
    "hintAr": "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
    "stepByStepSolutionEn": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
    ],
    "teacherTipEn": "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
    "teacherTipAr": "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
  },
  {
    "id": "phys_ch3_db_medium_59",
    "titleEn": "Electric Transformer Efficiency Calculation (59)",
    "titleAr": "حساب كفاءة محول كهربي غير مثالي (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
    "questionAr": "[مسألة متدرجة 59] محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
    "optionsEn": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "optionsAr": [
      "$83.3\\%$",
      "$90.0\\%$",
      "$75.5\\%$",
      "$95.2\\%$"
    ],
    "correctAnswer": "$83.3\\%$",
    "correctIndex": 0,
    "hintEn": "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "hintAr": "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
    "stepByStepSolutionEn": [
      "$P_s = 11 \\times 2 = 22\\text{ W}$.",
      "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
      "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
      "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
    ],
    "teacherTipEn": "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
    "teacherTipAr": "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
  }
],
  hots: [
  {
    "id": "phys_ch3_db_hots_01",
    "titleEn": "Power Transmission Over Long Distances (1)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (1)",
    "difficulty": "hots",
    "questionEn": "A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_02",
    "titleEn": "Power Transmission Over Long Distances (2)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (2)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 2] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 2] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_03",
    "titleEn": "Power Transmission Over Long Distances (3)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 3] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_04",
    "titleEn": "Power Transmission Over Long Distances (4)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 4] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_05",
    "titleEn": "Power Transmission Over Long Distances (5)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 5] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_06",
    "titleEn": "Power Transmission Over Long Distances (6)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 6] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_07",
    "titleEn": "Power Transmission Over Long Distances (7)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 7] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_08",
    "titleEn": "Power Transmission Over Long Distances (8)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 8] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_09",
    "titleEn": "Power Transmission Over Long Distances (9)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 9] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_10",
    "titleEn": "Power Transmission Over Long Distances (10)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 10] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_11",
    "titleEn": "Power Transmission Over Long Distances (11)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 11] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_12",
    "titleEn": "Power Transmission Over Long Distances (12)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 12] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_13",
    "titleEn": "Power Transmission Over Long Distances (13)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 13] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_14",
    "titleEn": "Power Transmission Over Long Distances (14)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 14] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_15",
    "titleEn": "Power Transmission Over Long Distances (15)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 15] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_16",
    "titleEn": "Power Transmission Over Long Distances (16)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 16] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_17",
    "titleEn": "Power Transmission Over Long Distances (17)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 17] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_18",
    "titleEn": "Power Transmission Over Long Distances (18)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 18] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_19",
    "titleEn": "Power Transmission Over Long Distances (19)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 19] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_20",
    "titleEn": "Power Transmission Over Long Distances (20)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 20] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_21",
    "titleEn": "Power Transmission Over Long Distances (21)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 21] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_22",
    "titleEn": "Power Transmission Over Long Distances (22)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 22] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_23",
    "titleEn": "Power Transmission Over Long Distances (23)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 23] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_24",
    "titleEn": "Power Transmission Over Long Distances (24)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 24] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_25",
    "titleEn": "Power Transmission Over Long Distances (25)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 25] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_26",
    "titleEn": "Power Transmission Over Long Distances (26)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 26] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_27",
    "titleEn": "Power Transmission Over Long Distances (27)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 27] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_28",
    "titleEn": "Power Transmission Over Long Distances (28)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 28] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_29",
    "titleEn": "Power Transmission Over Long Distances (29)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 29] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_30",
    "titleEn": "Power Transmission Over Long Distances (30)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 30] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_31",
    "titleEn": "Power Transmission Over Long Distances (31)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 31] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_32",
    "titleEn": "Power Transmission Over Long Distances (32)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 32] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_33",
    "titleEn": "Power Transmission Over Long Distances (33)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 33] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_34",
    "titleEn": "Power Transmission Over Long Distances (34)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 34] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_35",
    "titleEn": "Power Transmission Over Long Distances (35)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 35] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_36",
    "titleEn": "Power Transmission Over Long Distances (36)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 36] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_37",
    "titleEn": "Power Transmission Over Long Distances (37)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 37] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_38",
    "titleEn": "Power Transmission Over Long Distances (38)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 38] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_39",
    "titleEn": "Power Transmission Over Long Distances (39)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 39] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_40",
    "titleEn": "Power Transmission Over Long Distances (40)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 40] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_41",
    "titleEn": "Power Transmission Over Long Distances (41)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 41] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_42",
    "titleEn": "Power Transmission Over Long Distances (42)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 42] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_43",
    "titleEn": "Power Transmission Over Long Distances (43)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 43] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_44",
    "titleEn": "Power Transmission Over Long Distances (44)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 44] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_45",
    "titleEn": "Power Transmission Over Long Distances (45)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 45] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_46",
    "titleEn": "Power Transmission Over Long Distances (46)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 46] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_47",
    "titleEn": "Power Transmission Over Long Distances (47)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 47] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_48",
    "titleEn": "Power Transmission Over Long Distances (48)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 48] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_49",
    "titleEn": "Power Transmission Over Long Distances (49)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 49] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_50",
    "titleEn": "Power Transmission Over Long Distances (50)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 50] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_51",
    "titleEn": "Power Transmission Over Long Distances (51)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 51] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_52",
    "titleEn": "Power Transmission Over Long Distances (52)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 52] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_53",
    "titleEn": "Power Transmission Over Long Distances (53)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 53] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_54",
    "titleEn": "Power Transmission Over Long Distances (54)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 54] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_55",
    "titleEn": "Power Transmission Over Long Distances (55)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 55] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_56",
    "titleEn": "Power Transmission Over Long Distances (56)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 56] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_57",
    "titleEn": "Power Transmission Over Long Distances (57)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 57] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  },
  {
    "id": "phys_ch3_db_hots_58",
    "titleEn": "Power Transmission Over Long Distances (58)",
    "titleAr": "نقل الطاقة الكهربية عبر خطوط النقل الطويلة (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
    "questionAr": "[مسألة متدرجة 58] محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
    "optionsEn": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "optionsAr": [
      "$400\\text{ W}$ ($0.4\\text{ kW}$)",
      "$4000\\text{ W}$",
      "$40\\text{ W}$",
      "$1600\\text{ W}$"
    ],
    "correctAnswer": "$400\\text{ W}$ ($0.4\\text{ kW}$)",
    "correctIndex": 0,
    "hintEn": "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
    "hintAr": "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
      "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 100,000 / 10,000 = 10\\text{ A}$.",
      "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
    ],
    "teacherTipEn": "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
    "teacherTipAr": "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
  }
]
};
