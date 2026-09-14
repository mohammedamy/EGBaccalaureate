import type { ChapterDatabank } from '../../../types/curriculum';

export const physCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "phys_ch2_db_easy_01",
    "titleEn": "Magnetic Field of a Straight Conductor (1)",
    "titleAr": "كثافة الفيض المغناطيسي لسلك مستقيم (1)",
    "difficulty": "easy",
    "questionEn": "The magnetic flux density ($B$) at a perpendicular distance $d$ from a long straight wire carrying current $I$ is given by:",
    "questionAr": "تعطى كثافة الفيض المغناطيسي ($B$) عند نقطة تبعد مسافة عمودية $d$ عن سلك مستقيم طويل يمر به تيار $I$ بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "correctAnswer": "$B = \\frac{\\mu I}{2\\pi d}$",
    "correctIndex": 0,
    "hintEn": "Apply Ampere's circuital law: the magnetic field lines form concentric circles around the wire.",
    "hintAr": "طبق قانون أمبير الدائري: خطوط الفيض دوائر متحدة المركز حول السلك.",
    "stepByStepSolutionEn": [
      "According to Ampere's Law for a straight wire: $B = \\frac{\\mu I}{2\\pi d}$, proportional to $I$ and inversely proportional to $d$."
    ],
    "stepByStepSolutionAr": [
      "وفقاً لقانون أمبير الدائري لسلك مستقيم: $B = \\frac{\\mu I}{2\\pi d}$، تتناسب طردياً مع $I$ وعكسياً مع البعد العمودي $d$."
    ],
    "teacherTipEn": "Remember that $d$ must strictly be the perpendicular distance from the wire axis.",
    "teacherTipAr": "تذكر دائماً أن $d$ هي البعد العمودي تماماً عن محور السلك."
  },
  {
    "id": "phys_ch2_db_easy_02",
    "titleEn": "Magnetic Field at the Center of a Circular Coil (2)",
    "titleAr": "كثافة الفيض عند مركز ملف دائري (2)",
    "difficulty": "easy",
    "questionEn": "The magnetic flux density at the center of a circular coil of radius $r$ having $N$ turns carrying current $I$ is:",
    "questionAr": "كثافة الفيض المغناطيسي عند مركز ملف دائري نصف قطره $r$ وعدد لفاته $N$ ويمر به تيار $I$ تعطى بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{2r}$",
    "correctIndex": 0,
    "hintEn": "The field at the coil center is straight, uniform, and perpendicular to the plane of the coil.",
    "hintAr": "المجال المغناطيسي عند مركز الملف الدائري منتظم وعمودي على مستوى الملف.",
    "stepByStepSolutionEn": [
      "Magnetic flux density at the center of a circular coil: $B = \\frac{\\mu N I}{2r}$."
    ],
    "stepByStepSolutionAr": [
      "كثافة الفيض المغناطيسي عند مركز ملف دائري تعطى بالقانون: $B = \\frac{\\mu N I}{2r}$."
    ],
    "teacherTipEn": "When a circular coil is rewound to half its radius from the same wire length, $N$ doubles and $B$ quadruples ($4\\times$).",
    "teacherTipAr": "عند إعادة لف ملف دائري ليقل نصف قطره للنصف مع ثبات طول السلك، يتضاعف عدد اللفات وتزداد كثافة الفيض إلى 4 أمثالها."
  },
  {
    "id": "phys_ch2_db_easy_03",
    "titleEn": "Magnetic Flux Density Inside a Solenoid (3)",
    "titleAr": "كثافة الفيض داخل ملف لولبي (3)",
    "difficulty": "easy",
    "questionEn": "Inside an ideal solenoid of length $L$ with $N$ turns carrying current $I$, the magnetic flux density along the central axis is:",
    "questionAr": "كثافة الفيض المغناطيسي على امتداد محور ملف لولبي طوله $L$ وعدد لفاته $N$ ويمر به تيار $I$ تساوي:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{L} = \\mu n I$",
    "correctIndex": 0,
    "hintEn": "Here $n = N/L$ is the number of turns per unit length.",
    "hintAr": "حيث $n = N/L$ هو عدد اللفات لوحدة الأطوال.",
    "stepByStepSolutionEn": [
      "The magnetic field inside a solenoid is uniform and parallel to its axis: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "stepByStepSolutionAr": [
      "المجال المغناطيسي داخل الملف اللولبي منتظم وموازٍ لمحوره: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "teacherTipEn": "Cutting a solenoid to half its length and connecting to the same battery doubles the current, so B increases $2\\times$.",
    "teacherTipAr": "قص نصف الملف اللولبي وتوصيل النصف المتبقي بنفس المصدر يقلل المقاومة للنصف فيتضاعف التيار وتتضاعف $B$."
  },
  {
    "id": "phys_ch2_db_easy_04",
    "titleEn": "Magnetic Force on a Current-Carrying Conductor (4)",
    "titleAr": "القوة المغناطيسية المؤثرة على سلك يمر به تيار (4)",
    "difficulty": "easy",
    "questionEn": "A straight wire of length $L$ carrying current $I$ placed in a uniform magnetic field $B$ at an angle $\\theta$ experiences a magnetic force:",
    "questionAr": "سلك مستقيم طوله $L$ يمر به تيار $I$ موضوع في مجال مغناطيسي منتظم $B$ بزاوية $\\theta$ يتأثر بقوة مغناطيسية:",
    "optionsEn": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "optionsAr": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "correctAnswer": "$F = B I L \\sin\\theta$",
    "correctIndex": 0,
    "hintEn": "Force is zero when the wire is parallel to the field ($\theta = 0^\\circ$) and maximum when perpendicular ($\theta = 90^\\circ$).",
    "hintAr": "تنعدم القوة عندما يكون السلك موازياً لخطوط المجال وتكون قيمة عظمى عندما يكون عمودياً.",
    "stepByStepSolutionEn": [
      "Magnetic force equation: $F = B I L \\sin\\theta$. Direction is given by Fleming's Left-Hand Rule."
    ],
    "stepByStepSolutionAr": [
      "قانون القوة المغناطيسية: $F = B I L \\sin\\theta$ ويتحدد اتجاهها بقاعدة اليد اليسرى لفلمنج."
    ],
    "teacherTipEn": "Fleming's Left-Hand Rule: Thumb = Force/Motion, Index = Field (B), Middle = Current (I).",
    "teacherTipAr": "قاعدة اليد اليسرى لفلمنج: الإبهام = الحركة/القوة، السبابة = المجال، الوسطى = التيار."
  },
  {
    "id": "phys_ch2_db_easy_05",
    "titleEn": "Mutual Force Between Two Parallel Wires (5)",
    "titleAr": "القوة المتبادلة بين سلكين متوازيين (5)",
    "difficulty": "easy",
    "questionEn": "Two long parallel wires carrying electric currents in the same direction experience:",
    "questionAr": "سلكان متوازيان يمر بكل منهما تيار كهربي في نفس الاتجاه، تتولد بينهما:",
    "optionsEn": [
      "A mutual attractive magnetic force",
      "A mutual repulsive magnetic force",
      "Zero magnetic force between them",
      "An electrostatic gravitational attraction"
    ],
    "optionsAr": [
      "قوة تجاذب مغناطيسية متبادلة",
      "قوة تنافر مغناطيسية متبادلة",
      "تنعدم القوة المغناطيسية المتبادلة بينهما",
      "قوة تجاذب كهروستاتيكي تثاقلي"
    ],
    "correctAnswer": "A mutual attractive magnetic force",
    "correctIndex": 0,
    "hintEn": "Between the wires, fields oppose each other ($B_{\\text{total}} = B_1 - B_2$), so they are pushed inward from higher to lower flux density.",
    "hintAr": "بين السلكين تكون كثافة الفيض ناتجة عن الطرح فتتحرك الأسلاك من منطقة الكثافة الأعلى إلى الأقل (تجاذب).",
    "stepByStepSolutionEn": [
      "Same direction currents create attraction because total field between them is weaker than outside."
    ],
    "stepByStepSolutionAr": [
      "التياران في نفس الاتجاه يولدان قوة تجاذب لأن كثافة الفيض بين السلكين أقل من خارجها."
    ],
    "teacherTipEn": "Mutual force per unit length: $F/L = \\frac{\\mu I_1 I_2}{2\\pi d}$ satisfies Newton's third law ($F_{12} = F_{21}$).",
    "teacherTipAr": "القوة المتبادلة متساوية دائماً بين السلكين حتى لو اختلف التياران طبقاً لقانون نيوتن الثالث."
  },
  {
    "id": "phys_ch2_db_easy_06",
    "titleEn": "Magnetic Torque on a Current Loop (6)",
    "titleAr": "عزم الازدواج المغناطيسي المؤثر على ملف (6)",
    "difficulty": "easy",
    "questionEn": "The magnetic torque $\\tau$ acting on a planar rectangular coil of area $A$, turns $N$, carrying current $I$ in a field $B$ is maximum when:",
    "questionAr": "يكون عزم الازدواج المغناطيسي $\\tau$ المؤثر على ملف مساحته $A$ وعدد لفاته $N$ يمر به تيار $I$ في مجال $B$ قيمة عظمى عندما:",
    "optionsEn": [
      "The plane of the coil is parallel to the magnetic flux lines",
      "The plane of the coil is perpendicular to the magnetic flux lines",
      "The angle between coil plane and field is $45^\\circ$",
      "The magnetic field is completely zero"
    ],
    "optionsAr": [
      "يكون مستوى الملف موازياً لخطوط الفيض المغناطيسي",
      "يكون مستوى الملف عمودياً على خطوط الفيض المغناطيسي",
      "تكون الزاوية بين مستوى الملف والمجال $45^\\circ$",
      "تنعدم شدة المجال المغناطيسي تماماً"
    ],
    "correctAnswer": "The plane of the coil is parallel to the magnetic flux lines",
    "correctIndex": 0,
    "hintEn": "Torque uses $\\sin\\theta'$, where $\\theta'$ is the angle between the normal to the coil and the field.",
    "hintAr": "الزاوية في قانون عزم الازدواج هي الزاوية بين العمودي على مستوى الملف وخطوط الفيض.",
    "stepByStepSolutionEn": [
      "When coil plane is parallel to $B$, the normal is perpendicular ($\\theta' = 90^\\circ$), giving maximum torque $\\tau_{\\max} = B I A N$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف موازياً للمجال يكون العمودي عليه متعامداً مع خطوط الفيض فتكون $\\tau_{\\max} = B I A N$ قيمة عظمى."
    ],
    "teacherTipEn": "Remember: When coil is perpendicular to B, flux $\\Phi_m$ is MAXIMUM but torque $\\tau$ is ZERO.",
    "teacherTipAr": "انتبه: عندما يكون الملف عمودياً على المجال يكون الفيض $\\Phi_m$ قيمة عظمى بينما عزم الازدواج $\\tau$ صفراً."
  },
  {
    "id": "phys_ch2_db_easy_07",
    "titleEn": "Moving-Coil Galvanometer Concave Poles Function (7)",
    "titleAr": "وظيفة القطبين المقعرين في الجلفانومتر الحساس (7)",
    "difficulty": "easy",
    "questionEn": "In a moving-coil galvanometer, the pole pieces of the permanent magnet are concave cylinders to ensure that:",
    "questionAr": "في الجلفانومتر ذي الملف المتحرك، يُصنع قطبا المغناطيس مقعرين لكي:",
    "optionsEn": [
      "The magnetic field lines are radial, keeping the torque independent of coil orientation",
      "The coil encounters minimum friction during deflection",
      "The sensitivity of the instrument is reduced for high currents",
      "The internal resistance of the galvanometer drops to zero"
    ],
    "optionsAr": [
      "تكون خطوط الفيض المغناطيسي على هيئة أنصاف أقطار فيظل عزم الازدواج ثابتاً في أي وضع",
      "يقل الاحتكاك إلى الحد الأدنى أثناء حركة الملف",
      "تقل حساسية الجهاز حتى يقيس التيارات العالية",
      "تنعدم المقاومة الكهربية الداخلية للملف"
    ],
    "correctAnswer": "The magnetic field lines are radial, keeping the torque independent of coil orientation",
    "correctIndex": 0,
    "hintEn": "Radial magnetic fields ensure that the plane of the coil is always parallel to the field lines ($\theta' = 90^circ$).",
    "hintAr": "المجال نصف القطري يضمن أن يكون مستوى الملف دائماً موازياً لخطوط الفيض فيكون عزم الازدواج متناسباً طردياً مع التيار فقط.",
    "stepByStepSolutionEn": [
      "Concave magnetic poles make field lines radial, giving a linear scale where deflection $\\theta \\propto I$."
    ],
    "stepByStepSolutionAr": [
      "القطبان المقعران مع الأسطوانة الحديدية يجعلان خطوط الفيض على هيئة أنصاف أقطار فيكون تدريج الجلفانومتر منتظماً."
    ],
    "teacherTipEn": "Galvanometer scale is uniform because deflection angle $\\theta$ is directly proportional to current intensity $I$.",
    "teacherTipAr": "تدريج الجلفانومتر منتظم لأن زاوية انحراف المؤشر $\\theta$ تتناسب طردياً مع شدة التيار $I$."
  },
  {
    "id": "phys_ch2_db_easy_08",
    "titleEn": "Ammeter Shunt Resistor Function (8)",
    "titleAr": "وظيفة مجزئ التيار في الأميتر (8)",
    "difficulty": "easy",
    "questionEn": "A shunt resistor ($R_s$) is connected in parallel with a galvanometer to:",
    "questionAr": "يتم توصيل مقاومة مجزئ التيار ($R_s$) على التوازي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Decrease total device resistance and increase the maximum measurable current range",
      "Increase device resistance to protect against high voltages",
      "Make the pointer deflect in the opposite direction",
      "Eliminate the need for spiral springs"
    ],
    "optionsAr": [
      "تقليل المقاومة الكلية للجهاز وزيادة مدى قياس شدة التيار",
      "زيادة مقاومة الجهاز لحمايته من فروق الجهد المرتفعة",
      "جعل المؤشر ينحرف في الاتجاه المعاكس للصفر",
      "إلغاء الحاجة إلى استخدام الملفات الزنبركية"
    ],
    "correctAnswer": "Decrease total device resistance and increase the maximum measurable current range",
    "correctIndex": 0,
    "hintEn": "Shunt resistor is a very small resistance connected in parallel: $R_s = \\frac{I_g R_g}{I - I_g}$.",
    "hintAr": "مجزئ التيار مقاومة صغيرة توصل على التوازي لتقليل المقاومة الكلية وزيادة أقصى تيار يقاس.",
    "stepByStepSolutionEn": [
      "Connecting a small $R_s$ in parallel diverts the majority of the current, protects the coil, and extends measurement range."
    ],
    "stepByStepSolutionAr": [
      "مجزئ التيار $R_s$ مقاومة صغيرة توصل بالتوازي يمر بها معظم التيار الكلي وتحمي الملف وتزيد مدى القياس."
    ],
    "teacherTipEn": "As $R_s$ decreases, the range of measurable current increases, and sensitivity decreases.",
    "teacherTipAr": "كلما صغرت قيمة مجزئ التيار $R_s$ زاد مدى قياس الأميتر وقلت حساسيته."
  },
  {
    "id": "phys_ch2_db_easy_09",
    "titleEn": "Voltmeter Multiplier Resistor Function (9)",
    "titleAr": "وظيفة مضاعف الجهد في الفولتميتر (9)",
    "difficulty": "easy",
    "questionEn": "A multiplier resistor ($R_m$) is connected in series with a galvanometer to:",
    "questionAr": "تُوصل مقاومة مضاعف الجهد ($R_m$) على التوالي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Increase total device resistance and expand the maximum measurable voltage range",
      "Decrease total device resistance to draw maximum current from the circuit",
      "Directly measure the unknown resistance of a resistor",
      "Convert AC voltage to DC voltage"
    ],
    "optionsAr": [
      "زيادة المقاومة الكلية للجهاز وتوسيع مدى قياس فرق الجهد",
      "تقليل المقاومة الكلية للجهاز لسحب أكبر تيار ممكن",
      "قياس المقاومة المجهولة مباشرة بالأوم",
      "تحويل الجهد المتردد إلى جهد مستمر"
    ],
    "correctAnswer": "Increase total device resistance and expand the maximum measurable voltage range",
    "correctIndex": 0,
    "hintEn": "Multiplier resistor is large and in series: $R_m = \\frac{V - V_g}{I_g}$.",
    "hintAr": "مضاعف الجهد مقاومة كبيرة توصل على التوالي مع ملف الجلفانومتر لتحويله إلى فولتميتر.",
    "stepByStepSolutionEn": [
      "Connecting high $R_m$ in series increases voltmeter resistance ($R_V = R_g + R_m$), preventing it from altering circuit current."
    ],
    "stepByStepSolutionAr": [
      "مضاعف الجهد يزيد المقاومة الكلية للجهاز فلا يسحب تياراً مؤثراً من الدائرة ويزيد مدى قياس فرق الجهد."
    ],
    "teacherTipEn": "Ideal voltmeter has infinite internal resistance ($R_V \\to \\infty$).",
    "teacherTipAr": "الفولتميتر المثالي مقاومته لا نهائية حتى لا يسحب تياراً من الدائرة المراد قياس جهدها."
  },
  {
    "id": "phys_ch2_db_easy_10",
    "titleEn": "Ohmmeter Scale Non-Uniformity (10)",
    "titleAr": "عدم انتظام تدريج الأوميتر (10)",
    "difficulty": "easy",
    "questionEn": "The scale of an ohmmeter is non-uniform (crowded at the high-resistance end) because:",
    "questionAr": "تدريج الأوميتر غير منتظم وتزدحم أقسامه عند المقاومات العالية لأن:",
    "optionsEn": [
      "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
      "The battery electromotive force decreases during measurement",
      "The magnetic field inside the ohmmeter is non-uniform",
      "The spiral springs lose their mechanical elasticity"
    ],
    "optionsAr": [
      "شدة التيار تتناسب عكسياً مع المقاومة الكلية ($R_{\\text{in}} + R_x$) وليس مع المقاومة المجهولة $R_x$ فقط",
      "القوة الدافعة للبطارية تنخفض باستمرار أثناء عملية القياس",
      "المجال المغناطيسي داخل الجهاز غير منتظم إطلاقاً",
      "الملفات الزنبركية تفقد مرونتها الميكانيكية بمرور الوقت"
    ],
    "correctAnswer": "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
    "correctIndex": 0,
    "hintEn": "Ohm's law for ohmmeter: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
    "hintAr": "قانون أوم للدائرة المغلقة في الأوميتر: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
    "stepByStepSolutionEn": [
      "Since $I \\propto \\frac{1}{R_{\\text{in}} + R_x}$, equal increments in $R_x$ do not produce equal decrements in current $I$."
    ],
    "stepByStepSolutionAr": [
      "لأن شدة التيار تتناسب عكسياً مع مجموع المقاومتين الداخلية والخارجية فتتزاحم الأقسام عند اللانهاية."
    ],
    "teacherTipEn": "When $R_x = R_{\\text{in}}$, pointer deflects to $1/2$ scale. When $R_x = 3R_{\\text{in}}$, pointer deflects to $1/4$ scale.",
    "teacherTipAr": "عندما $R_x = R_{\\text{in}}$ ينحرف المؤشر لنصف التدريج، وعندما $R_x = 3R_{\\text{in}}$ ينحرف لربع التدريج."
  },
  {
    "id": "phys_ch2_db_easy_11",
    "titleEn": "Magnetic Field of a Straight Conductor (11)",
    "titleAr": "كثافة الفيض المغناطيسي لسلك مستقيم (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] The magnetic flux density ($B$) at a perpendicular distance $d$ from a long straight wire carrying current $I$ is given by:",
    "questionAr": "[مسألة متدرجة 11] تعطى كثافة الفيض المغناطيسي ($B$) عند نقطة تبعد مسافة عمودية $d$ عن سلك مستقيم طويل يمر به تيار $I$ بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "correctAnswer": "$B = \\frac{\\mu I}{2\\pi d}$",
    "correctIndex": 0,
    "hintEn": "Apply Ampere's circuital law: the magnetic field lines form concentric circles around the wire.",
    "hintAr": "طبق قانون أمبير الدائري: خطوط الفيض دوائر متحدة المركز حول السلك.",
    "stepByStepSolutionEn": [
      "According to Ampere's Law for a straight wire: $B = \\frac{\\mu I}{2\\pi d}$, proportional to $I$ and inversely proportional to $d$."
    ],
    "stepByStepSolutionAr": [
      "وفقاً لقانون أمبير الدائري لسلك مستقيم: $B = \\frac{\\mu I}{2\\pi d}$، تتناسب طردياً مع $I$ وعكسياً مع البعد العمودي $d$."
    ],
    "teacherTipEn": "Remember that $d$ must strictly be the perpendicular distance from the wire axis.",
    "teacherTipAr": "تذكر دائماً أن $d$ هي البعد العمودي تماماً عن محور السلك."
  },
  {
    "id": "phys_ch2_db_easy_12",
    "titleEn": "Magnetic Field at the Center of a Circular Coil (12)",
    "titleAr": "كثافة الفيض عند مركز ملف دائري (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] The magnetic flux density at the center of a circular coil of radius $r$ having $N$ turns carrying current $I$ is:",
    "questionAr": "[مسألة متدرجة 12] كثافة الفيض المغناطيسي عند مركز ملف دائري نصف قطره $r$ وعدد لفاته $N$ ويمر به تيار $I$ تعطى بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{2r}$",
    "correctIndex": 0,
    "hintEn": "The field at the coil center is straight, uniform, and perpendicular to the plane of the coil.",
    "hintAr": "المجال المغناطيسي عند مركز الملف الدائري منتظم وعمودي على مستوى الملف.",
    "stepByStepSolutionEn": [
      "Magnetic flux density at the center of a circular coil: $B = \\frac{\\mu N I}{2r}$."
    ],
    "stepByStepSolutionAr": [
      "كثافة الفيض المغناطيسي عند مركز ملف دائري تعطى بالقانون: $B = \\frac{\\mu N I}{2r}$."
    ],
    "teacherTipEn": "When a circular coil is rewound to half its radius from the same wire length, $N$ doubles and $B$ quadruples ($4\\times$).",
    "teacherTipAr": "عند إعادة لف ملف دائري ليقل نصف قطره للنصف مع ثبات طول السلك، يتضاعف عدد اللفات وتزداد كثافة الفيض إلى 4 أمثالها."
  },
  {
    "id": "phys_ch2_db_easy_13",
    "titleEn": "Magnetic Flux Density Inside a Solenoid (13)",
    "titleAr": "كثافة الفيض داخل ملف لولبي (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] Inside an ideal solenoid of length $L$ with $N$ turns carrying current $I$, the magnetic flux density along the central axis is:",
    "questionAr": "[مسألة متدرجة 13] كثافة الفيض المغناطيسي على امتداد محور ملف لولبي طوله $L$ وعدد لفاته $N$ ويمر به تيار $I$ تساوي:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{L} = \\mu n I$",
    "correctIndex": 0,
    "hintEn": "Here $n = N/L$ is the number of turns per unit length.",
    "hintAr": "حيث $n = N/L$ هو عدد اللفات لوحدة الأطوال.",
    "stepByStepSolutionEn": [
      "The magnetic field inside a solenoid is uniform and parallel to its axis: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "stepByStepSolutionAr": [
      "المجال المغناطيسي داخل الملف اللولبي منتظم وموازٍ لمحوره: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "teacherTipEn": "Cutting a solenoid to half its length and connecting to the same battery doubles the current, so B increases $2\\times$.",
    "teacherTipAr": "قص نصف الملف اللولبي وتوصيل النصف المتبقي بنفس المصدر يقلل المقاومة للنصف فيتضاعف التيار وتتضاعف $B$."
  },
  {
    "id": "phys_ch2_db_easy_14",
    "titleEn": "Magnetic Force on a Current-Carrying Conductor (14)",
    "titleAr": "القوة المغناطيسية المؤثرة على سلك يمر به تيار (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] A straight wire of length $L$ carrying current $I$ placed in a uniform magnetic field $B$ at an angle $\\theta$ experiences a magnetic force:",
    "questionAr": "[مسألة متدرجة 14] سلك مستقيم طوله $L$ يمر به تيار $I$ موضوع في مجال مغناطيسي منتظم $B$ بزاوية $\\theta$ يتأثر بقوة مغناطيسية:",
    "optionsEn": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "optionsAr": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "correctAnswer": "$F = B I L \\sin\\theta$",
    "correctIndex": 0,
    "hintEn": "Force is zero when the wire is parallel to the field ($\theta = 0^\\circ$) and maximum when perpendicular ($\theta = 90^\\circ$).",
    "hintAr": "تنعدم القوة عندما يكون السلك موازياً لخطوط المجال وتكون قيمة عظمى عندما يكون عمودياً.",
    "stepByStepSolutionEn": [
      "Magnetic force equation: $F = B I L \\sin\\theta$. Direction is given by Fleming's Left-Hand Rule."
    ],
    "stepByStepSolutionAr": [
      "قانون القوة المغناطيسية: $F = B I L \\sin\\theta$ ويتحدد اتجاهها بقاعدة اليد اليسرى لفلمنج."
    ],
    "teacherTipEn": "Fleming's Left-Hand Rule: Thumb = Force/Motion, Index = Field (B), Middle = Current (I).",
    "teacherTipAr": "قاعدة اليد اليسرى لفلمنج: الإبهام = الحركة/القوة، السبابة = المجال، الوسطى = التيار."
  },
  {
    "id": "phys_ch2_db_easy_15",
    "titleEn": "Mutual Force Between Two Parallel Wires (15)",
    "titleAr": "القوة المتبادلة بين سلكين متوازيين (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] Two long parallel wires carrying electric currents in the same direction experience:",
    "questionAr": "[مسألة متدرجة 15] سلكان متوازيان يمر بكل منهما تيار كهربي في نفس الاتجاه، تتولد بينهما:",
    "optionsEn": [
      "A mutual attractive magnetic force",
      "A mutual repulsive magnetic force",
      "Zero magnetic force between them",
      "An electrostatic gravitational attraction"
    ],
    "optionsAr": [
      "قوة تجاذب مغناطيسية متبادلة",
      "قوة تنافر مغناطيسية متبادلة",
      "تنعدم القوة المغناطيسية المتبادلة بينهما",
      "قوة تجاذب كهروستاتيكي تثاقلي"
    ],
    "correctAnswer": "A mutual attractive magnetic force",
    "correctIndex": 0,
    "hintEn": "Between the wires, fields oppose each other ($B_{\\text{total}} = B_1 - B_2$), so they are pushed inward from higher to lower flux density.",
    "hintAr": "بين السلكين تكون كثافة الفيض ناتجة عن الطرح فتتحرك الأسلاك من منطقة الكثافة الأعلى إلى الأقل (تجاذب).",
    "stepByStepSolutionEn": [
      "Same direction currents create attraction because total field between them is weaker than outside."
    ],
    "stepByStepSolutionAr": [
      "التياران في نفس الاتجاه يولدان قوة تجاذب لأن كثافة الفيض بين السلكين أقل من خارجها."
    ],
    "teacherTipEn": "Mutual force per unit length: $F/L = \\frac{\\mu I_1 I_2}{2\\pi d}$ satisfies Newton's third law ($F_{12} = F_{21}$).",
    "teacherTipAr": "القوة المتبادلة متساوية دائماً بين السلكين حتى لو اختلف التياران طبقاً لقانون نيوتن الثالث."
  },
  {
    "id": "phys_ch2_db_easy_16",
    "titleEn": "Magnetic Torque on a Current Loop (16)",
    "titleAr": "عزم الازدواج المغناطيسي المؤثر على ملف (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] The magnetic torque $\\tau$ acting on a planar rectangular coil of area $A$, turns $N$, carrying current $I$ in a field $B$ is maximum when:",
    "questionAr": "[مسألة متدرجة 16] يكون عزم الازدواج المغناطيسي $\\tau$ المؤثر على ملف مساحته $A$ وعدد لفاته $N$ يمر به تيار $I$ في مجال $B$ قيمة عظمى عندما:",
    "optionsEn": [
      "The plane of the coil is parallel to the magnetic flux lines",
      "The plane of the coil is perpendicular to the magnetic flux lines",
      "The angle between coil plane and field is $45^\\circ$",
      "The magnetic field is completely zero"
    ],
    "optionsAr": [
      "يكون مستوى الملف موازياً لخطوط الفيض المغناطيسي",
      "يكون مستوى الملف عمودياً على خطوط الفيض المغناطيسي",
      "تكون الزاوية بين مستوى الملف والمجال $45^\\circ$",
      "تنعدم شدة المجال المغناطيسي تماماً"
    ],
    "correctAnswer": "The plane of the coil is parallel to the magnetic flux lines",
    "correctIndex": 0,
    "hintEn": "Torque uses $\\sin\\theta'$, where $\\theta'$ is the angle between the normal to the coil and the field.",
    "hintAr": "الزاوية في قانون عزم الازدواج هي الزاوية بين العمودي على مستوى الملف وخطوط الفيض.",
    "stepByStepSolutionEn": [
      "When coil plane is parallel to $B$, the normal is perpendicular ($\\theta' = 90^\\circ$), giving maximum torque $\\tau_{\\max} = B I A N$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف موازياً للمجال يكون العمودي عليه متعامداً مع خطوط الفيض فتكون $\\tau_{\\max} = B I A N$ قيمة عظمى."
    ],
    "teacherTipEn": "Remember: When coil is perpendicular to B, flux $\\Phi_m$ is MAXIMUM but torque $\\tau$ is ZERO.",
    "teacherTipAr": "انتبه: عندما يكون الملف عمودياً على المجال يكون الفيض $\\Phi_m$ قيمة عظمى بينما عزم الازدواج $\\tau$ صفراً."
  },
  {
    "id": "phys_ch2_db_easy_17",
    "titleEn": "Moving-Coil Galvanometer Concave Poles Function (17)",
    "titleAr": "وظيفة القطبين المقعرين في الجلفانومتر الحساس (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] In a moving-coil galvanometer, the pole pieces of the permanent magnet are concave cylinders to ensure that:",
    "questionAr": "[مسألة متدرجة 17] في الجلفانومتر ذي الملف المتحرك، يُصنع قطبا المغناطيس مقعرين لكي:",
    "optionsEn": [
      "The magnetic field lines are radial, keeping the torque independent of coil orientation",
      "The coil encounters minimum friction during deflection",
      "The sensitivity of the instrument is reduced for high currents",
      "The internal resistance of the galvanometer drops to zero"
    ],
    "optionsAr": [
      "تكون خطوط الفيض المغناطيسي على هيئة أنصاف أقطار فيظل عزم الازدواج ثابتاً في أي وضع",
      "يقل الاحتكاك إلى الحد الأدنى أثناء حركة الملف",
      "تقل حساسية الجهاز حتى يقيس التيارات العالية",
      "تنعدم المقاومة الكهربية الداخلية للملف"
    ],
    "correctAnswer": "The magnetic field lines are radial, keeping the torque independent of coil orientation",
    "correctIndex": 0,
    "hintEn": "Radial magnetic fields ensure that the plane of the coil is always parallel to the field lines ($\theta' = 90^circ$).",
    "hintAr": "المجال نصف القطري يضمن أن يكون مستوى الملف دائماً موازياً لخطوط الفيض فيكون عزم الازدواج متناسباً طردياً مع التيار فقط.",
    "stepByStepSolutionEn": [
      "Concave magnetic poles make field lines radial, giving a linear scale where deflection $\\theta \\propto I$."
    ],
    "stepByStepSolutionAr": [
      "القطبان المقعران مع الأسطوانة الحديدية يجعلان خطوط الفيض على هيئة أنصاف أقطار فيكون تدريج الجلفانومتر منتظماً."
    ],
    "teacherTipEn": "Galvanometer scale is uniform because deflection angle $\\theta$ is directly proportional to current intensity $I$.",
    "teacherTipAr": "تدريج الجلفانومتر منتظم لأن زاوية انحراف المؤشر $\\theta$ تتناسب طردياً مع شدة التيار $I$."
  },
  {
    "id": "phys_ch2_db_easy_18",
    "titleEn": "Ammeter Shunt Resistor Function (18)",
    "titleAr": "وظيفة مجزئ التيار في الأميتر (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] A shunt resistor ($R_s$) is connected in parallel with a galvanometer to:",
    "questionAr": "[مسألة متدرجة 18] يتم توصيل مقاومة مجزئ التيار ($R_s$) على التوازي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Decrease total device resistance and increase the maximum measurable current range",
      "Increase device resistance to protect against high voltages",
      "Make the pointer deflect in the opposite direction",
      "Eliminate the need for spiral springs"
    ],
    "optionsAr": [
      "تقليل المقاومة الكلية للجهاز وزيادة مدى قياس شدة التيار",
      "زيادة مقاومة الجهاز لحمايته من فروق الجهد المرتفعة",
      "جعل المؤشر ينحرف في الاتجاه المعاكس للصفر",
      "إلغاء الحاجة إلى استخدام الملفات الزنبركية"
    ],
    "correctAnswer": "Decrease total device resistance and increase the maximum measurable current range",
    "correctIndex": 0,
    "hintEn": "Shunt resistor is a very small resistance connected in parallel: $R_s = \\frac{I_g R_g}{I - I_g}$.",
    "hintAr": "مجزئ التيار مقاومة صغيرة توصل على التوازي لتقليل المقاومة الكلية وزيادة أقصى تيار يقاس.",
    "stepByStepSolutionEn": [
      "Connecting a small $R_s$ in parallel diverts the majority of the current, protects the coil, and extends measurement range."
    ],
    "stepByStepSolutionAr": [
      "مجزئ التيار $R_s$ مقاومة صغيرة توصل بالتوازي يمر بها معظم التيار الكلي وتحمي الملف وتزيد مدى القياس."
    ],
    "teacherTipEn": "As $R_s$ decreases, the range of measurable current increases, and sensitivity decreases.",
    "teacherTipAr": "كلما صغرت قيمة مجزئ التيار $R_s$ زاد مدى قياس الأميتر وقلت حساسيته."
  },
  {
    "id": "phys_ch2_db_easy_19",
    "titleEn": "Voltmeter Multiplier Resistor Function (19)",
    "titleAr": "وظيفة مضاعف الجهد في الفولتميتر (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] A multiplier resistor ($R_m$) is connected in series with a galvanometer to:",
    "questionAr": "[مسألة متدرجة 19] تُوصل مقاومة مضاعف الجهد ($R_m$) على التوالي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Increase total device resistance and expand the maximum measurable voltage range",
      "Decrease total device resistance to draw maximum current from the circuit",
      "Directly measure the unknown resistance of a resistor",
      "Convert AC voltage to DC voltage"
    ],
    "optionsAr": [
      "زيادة المقاومة الكلية للجهاز وتوسيع مدى قياس فرق الجهد",
      "تقليل المقاومة الكلية للجهاز لسحب أكبر تيار ممكن",
      "قياس المقاومة المجهولة مباشرة بالأوم",
      "تحويل الجهد المتردد إلى جهد مستمر"
    ],
    "correctAnswer": "Increase total device resistance and expand the maximum measurable voltage range",
    "correctIndex": 0,
    "hintEn": "Multiplier resistor is large and in series: $R_m = \\frac{V - V_g}{I_g}$.",
    "hintAr": "مضاعف الجهد مقاومة كبيرة توصل على التوالي مع ملف الجلفانومتر لتحويله إلى فولتميتر.",
    "stepByStepSolutionEn": [
      "Connecting high $R_m$ in series increases voltmeter resistance ($R_V = R_g + R_m$), preventing it from altering circuit current."
    ],
    "stepByStepSolutionAr": [
      "مضاعف الجهد يزيد المقاومة الكلية للجهاز فلا يسحب تياراً مؤثراً من الدائرة ويزيد مدى قياس فرق الجهد."
    ],
    "teacherTipEn": "Ideal voltmeter has infinite internal resistance ($R_V \\to \\infty$).",
    "teacherTipAr": "الفولتميتر المثالي مقاومته لا نهائية حتى لا يسحب تياراً من الدائرة المراد قياس جهدها."
  },
  {
    "id": "phys_ch2_db_easy_20",
    "titleEn": "Ohmmeter Scale Non-Uniformity (20)",
    "titleAr": "عدم انتظام تدريج الأوميتر (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] The scale of an ohmmeter is non-uniform (crowded at the high-resistance end) because:",
    "questionAr": "[مسألة متدرجة 20] تدريج الأوميتر غير منتظم وتزدحم أقسامه عند المقاومات العالية لأن:",
    "optionsEn": [
      "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
      "The battery electromotive force decreases during measurement",
      "The magnetic field inside the ohmmeter is non-uniform",
      "The spiral springs lose their mechanical elasticity"
    ],
    "optionsAr": [
      "شدة التيار تتناسب عكسياً مع المقاومة الكلية ($R_{\\text{in}} + R_x$) وليس مع المقاومة المجهولة $R_x$ فقط",
      "القوة الدافعة للبطارية تنخفض باستمرار أثناء عملية القياس",
      "المجال المغناطيسي داخل الجهاز غير منتظم إطلاقاً",
      "الملفات الزنبركية تفقد مرونتها الميكانيكية بمرور الوقت"
    ],
    "correctAnswer": "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
    "correctIndex": 0,
    "hintEn": "Ohm's law for ohmmeter: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
    "hintAr": "قانون أوم للدائرة المغلقة في الأوميتر: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
    "stepByStepSolutionEn": [
      "Since $I \\propto \\frac{1}{R_{\\text{in}} + R_x}$, equal increments in $R_x$ do not produce equal decrements in current $I$."
    ],
    "stepByStepSolutionAr": [
      "لأن شدة التيار تتناسب عكسياً مع مجموع المقاومتين الداخلية والخارجية فتتزاحم الأقسام عند اللانهاية."
    ],
    "teacherTipEn": "When $R_x = R_{\\text{in}}$, pointer deflects to $1/2$ scale. When $R_x = 3R_{\\text{in}}$, pointer deflects to $1/4$ scale.",
    "teacherTipAr": "عندما $R_x = R_{\\text{in}}$ ينحرف المؤشر لنصف التدريج، وعندما $R_x = 3R_{\\text{in}}$ ينحرف لربع التدريج."
  },
  {
    "id": "phys_ch2_db_easy_21",
    "titleEn": "Magnetic Field of a Straight Conductor (21)",
    "titleAr": "كثافة الفيض المغناطيسي لسلك مستقيم (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] The magnetic flux density ($B$) at a perpendicular distance $d$ from a long straight wire carrying current $I$ is given by:",
    "questionAr": "[مسألة متدرجة 21] تعطى كثافة الفيض المغناطيسي ($B$) عند نقطة تبعد مسافة عمودية $d$ عن سلك مستقيم طويل يمر به تيار $I$ بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "correctAnswer": "$B = \\frac{\\mu I}{2\\pi d}$",
    "correctIndex": 0,
    "hintEn": "Apply Ampere's circuital law: the magnetic field lines form concentric circles around the wire.",
    "hintAr": "طبق قانون أمبير الدائري: خطوط الفيض دوائر متحدة المركز حول السلك.",
    "stepByStepSolutionEn": [
      "According to Ampere's Law for a straight wire: $B = \\frac{\\mu I}{2\\pi d}$, proportional to $I$ and inversely proportional to $d$."
    ],
    "stepByStepSolutionAr": [
      "وفقاً لقانون أمبير الدائري لسلك مستقيم: $B = \\frac{\\mu I}{2\\pi d}$، تتناسب طردياً مع $I$ وعكسياً مع البعد العمودي $d$."
    ],
    "teacherTipEn": "Remember that $d$ must strictly be the perpendicular distance from the wire axis.",
    "teacherTipAr": "تذكر دائماً أن $d$ هي البعد العمودي تماماً عن محور السلك."
  },
  {
    "id": "phys_ch2_db_easy_22",
    "titleEn": "Magnetic Field at the Center of a Circular Coil (22)",
    "titleAr": "كثافة الفيض عند مركز ملف دائري (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] The magnetic flux density at the center of a circular coil of radius $r$ having $N$ turns carrying current $I$ is:",
    "questionAr": "[مسألة متدرجة 22] كثافة الفيض المغناطيسي عند مركز ملف دائري نصف قطره $r$ وعدد لفاته $N$ ويمر به تيار $I$ تعطى بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{2r}$",
    "correctIndex": 0,
    "hintEn": "The field at the coil center is straight, uniform, and perpendicular to the plane of the coil.",
    "hintAr": "المجال المغناطيسي عند مركز الملف الدائري منتظم وعمودي على مستوى الملف.",
    "stepByStepSolutionEn": [
      "Magnetic flux density at the center of a circular coil: $B = \\frac{\\mu N I}{2r}$."
    ],
    "stepByStepSolutionAr": [
      "كثافة الفيض المغناطيسي عند مركز ملف دائري تعطى بالقانون: $B = \\frac{\\mu N I}{2r}$."
    ],
    "teacherTipEn": "When a circular coil is rewound to half its radius from the same wire length, $N$ doubles and $B$ quadruples ($4\\times$).",
    "teacherTipAr": "عند إعادة لف ملف دائري ليقل نصف قطره للنصف مع ثبات طول السلك، يتضاعف عدد اللفات وتزداد كثافة الفيض إلى 4 أمثالها."
  },
  {
    "id": "phys_ch2_db_easy_23",
    "titleEn": "Magnetic Flux Density Inside a Solenoid (23)",
    "titleAr": "كثافة الفيض داخل ملف لولبي (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] Inside an ideal solenoid of length $L$ with $N$ turns carrying current $I$, the magnetic flux density along the central axis is:",
    "questionAr": "[مسألة متدرجة 23] كثافة الفيض المغناطيسي على امتداد محور ملف لولبي طوله $L$ وعدد لفاته $N$ ويمر به تيار $I$ تساوي:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{L} = \\mu n I$",
    "correctIndex": 0,
    "hintEn": "Here $n = N/L$ is the number of turns per unit length.",
    "hintAr": "حيث $n = N/L$ هو عدد اللفات لوحدة الأطوال.",
    "stepByStepSolutionEn": [
      "The magnetic field inside a solenoid is uniform and parallel to its axis: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "stepByStepSolutionAr": [
      "المجال المغناطيسي داخل الملف اللولبي منتظم وموازٍ لمحوره: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "teacherTipEn": "Cutting a solenoid to half its length and connecting to the same battery doubles the current, so B increases $2\\times$.",
    "teacherTipAr": "قص نصف الملف اللولبي وتوصيل النصف المتبقي بنفس المصدر يقلل المقاومة للنصف فيتضاعف التيار وتتضاعف $B$."
  },
  {
    "id": "phys_ch2_db_easy_24",
    "titleEn": "Magnetic Force on a Current-Carrying Conductor (24)",
    "titleAr": "القوة المغناطيسية المؤثرة على سلك يمر به تيار (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] A straight wire of length $L$ carrying current $I$ placed in a uniform magnetic field $B$ at an angle $\\theta$ experiences a magnetic force:",
    "questionAr": "[مسألة متدرجة 24] سلك مستقيم طوله $L$ يمر به تيار $I$ موضوع في مجال مغناطيسي منتظم $B$ بزاوية $\\theta$ يتأثر بقوة مغناطيسية:",
    "optionsEn": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "optionsAr": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "correctAnswer": "$F = B I L \\sin\\theta$",
    "correctIndex": 0,
    "hintEn": "Force is zero when the wire is parallel to the field ($\theta = 0^\\circ$) and maximum when perpendicular ($\theta = 90^\\circ$).",
    "hintAr": "تنعدم القوة عندما يكون السلك موازياً لخطوط المجال وتكون قيمة عظمى عندما يكون عمودياً.",
    "stepByStepSolutionEn": [
      "Magnetic force equation: $F = B I L \\sin\\theta$. Direction is given by Fleming's Left-Hand Rule."
    ],
    "stepByStepSolutionAr": [
      "قانون القوة المغناطيسية: $F = B I L \\sin\\theta$ ويتحدد اتجاهها بقاعدة اليد اليسرى لفلمنج."
    ],
    "teacherTipEn": "Fleming's Left-Hand Rule: Thumb = Force/Motion, Index = Field (B), Middle = Current (I).",
    "teacherTipAr": "قاعدة اليد اليسرى لفلمنج: الإبهام = الحركة/القوة، السبابة = المجال، الوسطى = التيار."
  },
  {
    "id": "phys_ch2_db_easy_25",
    "titleEn": "Mutual Force Between Two Parallel Wires (25)",
    "titleAr": "القوة المتبادلة بين سلكين متوازيين (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] Two long parallel wires carrying electric currents in the same direction experience:",
    "questionAr": "[مسألة متدرجة 25] سلكان متوازيان يمر بكل منهما تيار كهربي في نفس الاتجاه، تتولد بينهما:",
    "optionsEn": [
      "A mutual attractive magnetic force",
      "A mutual repulsive magnetic force",
      "Zero magnetic force between them",
      "An electrostatic gravitational attraction"
    ],
    "optionsAr": [
      "قوة تجاذب مغناطيسية متبادلة",
      "قوة تنافر مغناطيسية متبادلة",
      "تنعدم القوة المغناطيسية المتبادلة بينهما",
      "قوة تجاذب كهروستاتيكي تثاقلي"
    ],
    "correctAnswer": "A mutual attractive magnetic force",
    "correctIndex": 0,
    "hintEn": "Between the wires, fields oppose each other ($B_{\\text{total}} = B_1 - B_2$), so they are pushed inward from higher to lower flux density.",
    "hintAr": "بين السلكين تكون كثافة الفيض ناتجة عن الطرح فتتحرك الأسلاك من منطقة الكثافة الأعلى إلى الأقل (تجاذب).",
    "stepByStepSolutionEn": [
      "Same direction currents create attraction because total field between them is weaker than outside."
    ],
    "stepByStepSolutionAr": [
      "التياران في نفس الاتجاه يولدان قوة تجاذب لأن كثافة الفيض بين السلكين أقل من خارجها."
    ],
    "teacherTipEn": "Mutual force per unit length: $F/L = \\frac{\\mu I_1 I_2}{2\\pi d}$ satisfies Newton's third law ($F_{12} = F_{21}$).",
    "teacherTipAr": "القوة المتبادلة متساوية دائماً بين السلكين حتى لو اختلف التياران طبقاً لقانون نيوتن الثالث."
  },
  {
    "id": "phys_ch2_db_easy_26",
    "titleEn": "Magnetic Torque on a Current Loop (26)",
    "titleAr": "عزم الازدواج المغناطيسي المؤثر على ملف (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] The magnetic torque $\\tau$ acting on a planar rectangular coil of area $A$, turns $N$, carrying current $I$ in a field $B$ is maximum when:",
    "questionAr": "[مسألة متدرجة 26] يكون عزم الازدواج المغناطيسي $\\tau$ المؤثر على ملف مساحته $A$ وعدد لفاته $N$ يمر به تيار $I$ في مجال $B$ قيمة عظمى عندما:",
    "optionsEn": [
      "The plane of the coil is parallel to the magnetic flux lines",
      "The plane of the coil is perpendicular to the magnetic flux lines",
      "The angle between coil plane and field is $45^\\circ$",
      "The magnetic field is completely zero"
    ],
    "optionsAr": [
      "يكون مستوى الملف موازياً لخطوط الفيض المغناطيسي",
      "يكون مستوى الملف عمودياً على خطوط الفيض المغناطيسي",
      "تكون الزاوية بين مستوى الملف والمجال $45^\\circ$",
      "تنعدم شدة المجال المغناطيسي تماماً"
    ],
    "correctAnswer": "The plane of the coil is parallel to the magnetic flux lines",
    "correctIndex": 0,
    "hintEn": "Torque uses $\\sin\\theta'$, where $\\theta'$ is the angle between the normal to the coil and the field.",
    "hintAr": "الزاوية في قانون عزم الازدواج هي الزاوية بين العمودي على مستوى الملف وخطوط الفيض.",
    "stepByStepSolutionEn": [
      "When coil plane is parallel to $B$, the normal is perpendicular ($\\theta' = 90^\\circ$), giving maximum torque $\\tau_{\\max} = B I A N$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف موازياً للمجال يكون العمودي عليه متعامداً مع خطوط الفيض فتكون $\\tau_{\\max} = B I A N$ قيمة عظمى."
    ],
    "teacherTipEn": "Remember: When coil is perpendicular to B, flux $\\Phi_m$ is MAXIMUM but torque $\\tau$ is ZERO.",
    "teacherTipAr": "انتبه: عندما يكون الملف عمودياً على المجال يكون الفيض $\\Phi_m$ قيمة عظمى بينما عزم الازدواج $\\tau$ صفراً."
  },
  {
    "id": "phys_ch2_db_easy_27",
    "titleEn": "Moving-Coil Galvanometer Concave Poles Function (27)",
    "titleAr": "وظيفة القطبين المقعرين في الجلفانومتر الحساس (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] In a moving-coil galvanometer, the pole pieces of the permanent magnet are concave cylinders to ensure that:",
    "questionAr": "[مسألة متدرجة 27] في الجلفانومتر ذي الملف المتحرك، يُصنع قطبا المغناطيس مقعرين لكي:",
    "optionsEn": [
      "The magnetic field lines are radial, keeping the torque independent of coil orientation",
      "The coil encounters minimum friction during deflection",
      "The sensitivity of the instrument is reduced for high currents",
      "The internal resistance of the galvanometer drops to zero"
    ],
    "optionsAr": [
      "تكون خطوط الفيض المغناطيسي على هيئة أنصاف أقطار فيظل عزم الازدواج ثابتاً في أي وضع",
      "يقل الاحتكاك إلى الحد الأدنى أثناء حركة الملف",
      "تقل حساسية الجهاز حتى يقيس التيارات العالية",
      "تنعدم المقاومة الكهربية الداخلية للملف"
    ],
    "correctAnswer": "The magnetic field lines are radial, keeping the torque independent of coil orientation",
    "correctIndex": 0,
    "hintEn": "Radial magnetic fields ensure that the plane of the coil is always parallel to the field lines ($\theta' = 90^circ$).",
    "hintAr": "المجال نصف القطري يضمن أن يكون مستوى الملف دائماً موازياً لخطوط الفيض فيكون عزم الازدواج متناسباً طردياً مع التيار فقط.",
    "stepByStepSolutionEn": [
      "Concave magnetic poles make field lines radial, giving a linear scale where deflection $\\theta \\propto I$."
    ],
    "stepByStepSolutionAr": [
      "القطبان المقعران مع الأسطوانة الحديدية يجعلان خطوط الفيض على هيئة أنصاف أقطار فيكون تدريج الجلفانومتر منتظماً."
    ],
    "teacherTipEn": "Galvanometer scale is uniform because deflection angle $\\theta$ is directly proportional to current intensity $I$.",
    "teacherTipAr": "تدريج الجلفانومتر منتظم لأن زاوية انحراف المؤشر $\\theta$ تتناسب طردياً مع شدة التيار $I$."
  },
  {
    "id": "phys_ch2_db_easy_28",
    "titleEn": "Ammeter Shunt Resistor Function (28)",
    "titleAr": "وظيفة مجزئ التيار في الأميتر (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] A shunt resistor ($R_s$) is connected in parallel with a galvanometer to:",
    "questionAr": "[مسألة متدرجة 28] يتم توصيل مقاومة مجزئ التيار ($R_s$) على التوازي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Decrease total device resistance and increase the maximum measurable current range",
      "Increase device resistance to protect against high voltages",
      "Make the pointer deflect in the opposite direction",
      "Eliminate the need for spiral springs"
    ],
    "optionsAr": [
      "تقليل المقاومة الكلية للجهاز وزيادة مدى قياس شدة التيار",
      "زيادة مقاومة الجهاز لحمايته من فروق الجهد المرتفعة",
      "جعل المؤشر ينحرف في الاتجاه المعاكس للصفر",
      "إلغاء الحاجة إلى استخدام الملفات الزنبركية"
    ],
    "correctAnswer": "Decrease total device resistance and increase the maximum measurable current range",
    "correctIndex": 0,
    "hintEn": "Shunt resistor is a very small resistance connected in parallel: $R_s = \\frac{I_g R_g}{I - I_g}$.",
    "hintAr": "مجزئ التيار مقاومة صغيرة توصل على التوازي لتقليل المقاومة الكلية وزيادة أقصى تيار يقاس.",
    "stepByStepSolutionEn": [
      "Connecting a small $R_s$ in parallel diverts the majority of the current, protects the coil, and extends measurement range."
    ],
    "stepByStepSolutionAr": [
      "مجزئ التيار $R_s$ مقاومة صغيرة توصل بالتوازي يمر بها معظم التيار الكلي وتحمي الملف وتزيد مدى القياس."
    ],
    "teacherTipEn": "As $R_s$ decreases, the range of measurable current increases, and sensitivity decreases.",
    "teacherTipAr": "كلما صغرت قيمة مجزئ التيار $R_s$ زاد مدى قياس الأميتر وقلت حساسيته."
  },
  {
    "id": "phys_ch2_db_easy_29",
    "titleEn": "Voltmeter Multiplier Resistor Function (29)",
    "titleAr": "وظيفة مضاعف الجهد في الفولتميتر (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] A multiplier resistor ($R_m$) is connected in series with a galvanometer to:",
    "questionAr": "[مسألة متدرجة 29] تُوصل مقاومة مضاعف الجهد ($R_m$) على التوالي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Increase total device resistance and expand the maximum measurable voltage range",
      "Decrease total device resistance to draw maximum current from the circuit",
      "Directly measure the unknown resistance of a resistor",
      "Convert AC voltage to DC voltage"
    ],
    "optionsAr": [
      "زيادة المقاومة الكلية للجهاز وتوسيع مدى قياس فرق الجهد",
      "تقليل المقاومة الكلية للجهاز لسحب أكبر تيار ممكن",
      "قياس المقاومة المجهولة مباشرة بالأوم",
      "تحويل الجهد المتردد إلى جهد مستمر"
    ],
    "correctAnswer": "Increase total device resistance and expand the maximum measurable voltage range",
    "correctIndex": 0,
    "hintEn": "Multiplier resistor is large and in series: $R_m = \\frac{V - V_g}{I_g}$.",
    "hintAr": "مضاعف الجهد مقاومة كبيرة توصل على التوالي مع ملف الجلفانومتر لتحويله إلى فولتميتر.",
    "stepByStepSolutionEn": [
      "Connecting high $R_m$ in series increases voltmeter resistance ($R_V = R_g + R_m$), preventing it from altering circuit current."
    ],
    "stepByStepSolutionAr": [
      "مضاعف الجهد يزيد المقاومة الكلية للجهاز فلا يسحب تياراً مؤثراً من الدائرة ويزيد مدى قياس فرق الجهد."
    ],
    "teacherTipEn": "Ideal voltmeter has infinite internal resistance ($R_V \\to \\infty$).",
    "teacherTipAr": "الفولتميتر المثالي مقاومته لا نهائية حتى لا يسحب تياراً من الدائرة المراد قياس جهدها."
  },
  {
    "id": "phys_ch2_db_easy_30",
    "titleEn": "Ohmmeter Scale Non-Uniformity (30)",
    "titleAr": "عدم انتظام تدريج الأوميتر (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] The scale of an ohmmeter is non-uniform (crowded at the high-resistance end) because:",
    "questionAr": "[مسألة متدرجة 30] تدريج الأوميتر غير منتظم وتزدحم أقسامه عند المقاومات العالية لأن:",
    "optionsEn": [
      "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
      "The battery electromotive force decreases during measurement",
      "The magnetic field inside the ohmmeter is non-uniform",
      "The spiral springs lose their mechanical elasticity"
    ],
    "optionsAr": [
      "شدة التيار تتناسب عكسياً مع المقاومة الكلية ($R_{\\text{in}} + R_x$) وليس مع المقاومة المجهولة $R_x$ فقط",
      "القوة الدافعة للبطارية تنخفض باستمرار أثناء عملية القياس",
      "المجال المغناطيسي داخل الجهاز غير منتظم إطلاقاً",
      "الملفات الزنبركية تفقد مرونتها الميكانيكية بمرور الوقت"
    ],
    "correctAnswer": "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
    "correctIndex": 0,
    "hintEn": "Ohm's law for ohmmeter: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
    "hintAr": "قانون أوم للدائرة المغلقة في الأوميتر: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
    "stepByStepSolutionEn": [
      "Since $I \\propto \\frac{1}{R_{\\text{in}} + R_x}$, equal increments in $R_x$ do not produce equal decrements in current $I$."
    ],
    "stepByStepSolutionAr": [
      "لأن شدة التيار تتناسب عكسياً مع مجموع المقاومتين الداخلية والخارجية فتتزاحم الأقسام عند اللانهاية."
    ],
    "teacherTipEn": "When $R_x = R_{\\text{in}}$, pointer deflects to $1/2$ scale. When $R_x = 3R_{\\text{in}}$, pointer deflects to $1/4$ scale.",
    "teacherTipAr": "عندما $R_x = R_{\\text{in}}$ ينحرف المؤشر لنصف التدريج، وعندما $R_x = 3R_{\\text{in}}$ ينحرف لربع التدريج."
  },
  {
    "id": "phys_ch2_db_easy_31",
    "titleEn": "Magnetic Field of a Straight Conductor (31)",
    "titleAr": "كثافة الفيض المغناطيسي لسلك مستقيم (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] The magnetic flux density ($B$) at a perpendicular distance $d$ from a long straight wire carrying current $I$ is given by:",
    "questionAr": "[مسألة متدرجة 31] تعطى كثافة الفيض المغناطيسي ($B$) عند نقطة تبعد مسافة عمودية $d$ عن سلك مستقيم طويل يمر به تيار $I$ بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "correctAnswer": "$B = \\frac{\\mu I}{2\\pi d}$",
    "correctIndex": 0,
    "hintEn": "Apply Ampere's circuital law: the magnetic field lines form concentric circles around the wire.",
    "hintAr": "طبق قانون أمبير الدائري: خطوط الفيض دوائر متحدة المركز حول السلك.",
    "stepByStepSolutionEn": [
      "According to Ampere's Law for a straight wire: $B = \\frac{\\mu I}{2\\pi d}$, proportional to $I$ and inversely proportional to $d$."
    ],
    "stepByStepSolutionAr": [
      "وفقاً لقانون أمبير الدائري لسلك مستقيم: $B = \\frac{\\mu I}{2\\pi d}$، تتناسب طردياً مع $I$ وعكسياً مع البعد العمودي $d$."
    ],
    "teacherTipEn": "Remember that $d$ must strictly be the perpendicular distance from the wire axis.",
    "teacherTipAr": "تذكر دائماً أن $d$ هي البعد العمودي تماماً عن محور السلك."
  },
  {
    "id": "phys_ch2_db_easy_32",
    "titleEn": "Magnetic Field at the Center of a Circular Coil (32)",
    "titleAr": "كثافة الفيض عند مركز ملف دائري (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] The magnetic flux density at the center of a circular coil of radius $r$ having $N$ turns carrying current $I$ is:",
    "questionAr": "[مسألة متدرجة 32] كثافة الفيض المغناطيسي عند مركز ملف دائري نصف قطره $r$ وعدد لفاته $N$ ويمر به تيار $I$ تعطى بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{2r}$",
    "correctIndex": 0,
    "hintEn": "The field at the coil center is straight, uniform, and perpendicular to the plane of the coil.",
    "hintAr": "المجال المغناطيسي عند مركز الملف الدائري منتظم وعمودي على مستوى الملف.",
    "stepByStepSolutionEn": [
      "Magnetic flux density at the center of a circular coil: $B = \\frac{\\mu N I}{2r}$."
    ],
    "stepByStepSolutionAr": [
      "كثافة الفيض المغناطيسي عند مركز ملف دائري تعطى بالقانون: $B = \\frac{\\mu N I}{2r}$."
    ],
    "teacherTipEn": "When a circular coil is rewound to half its radius from the same wire length, $N$ doubles and $B$ quadruples ($4\\times$).",
    "teacherTipAr": "عند إعادة لف ملف دائري ليقل نصف قطره للنصف مع ثبات طول السلك، يتضاعف عدد اللفات وتزداد كثافة الفيض إلى 4 أمثالها."
  },
  {
    "id": "phys_ch2_db_easy_33",
    "titleEn": "Magnetic Flux Density Inside a Solenoid (33)",
    "titleAr": "كثافة الفيض داخل ملف لولبي (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] Inside an ideal solenoid of length $L$ with $N$ turns carrying current $I$, the magnetic flux density along the central axis is:",
    "questionAr": "[مسألة متدرجة 33] كثافة الفيض المغناطيسي على امتداد محور ملف لولبي طوله $L$ وعدد لفاته $N$ ويمر به تيار $I$ تساوي:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{L} = \\mu n I$",
    "correctIndex": 0,
    "hintEn": "Here $n = N/L$ is the number of turns per unit length.",
    "hintAr": "حيث $n = N/L$ هو عدد اللفات لوحدة الأطوال.",
    "stepByStepSolutionEn": [
      "The magnetic field inside a solenoid is uniform and parallel to its axis: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "stepByStepSolutionAr": [
      "المجال المغناطيسي داخل الملف اللولبي منتظم وموازٍ لمحوره: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "teacherTipEn": "Cutting a solenoid to half its length and connecting to the same battery doubles the current, so B increases $2\\times$.",
    "teacherTipAr": "قص نصف الملف اللولبي وتوصيل النصف المتبقي بنفس المصدر يقلل المقاومة للنصف فيتضاعف التيار وتتضاعف $B$."
  },
  {
    "id": "phys_ch2_db_easy_34",
    "titleEn": "Magnetic Force on a Current-Carrying Conductor (34)",
    "titleAr": "القوة المغناطيسية المؤثرة على سلك يمر به تيار (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] A straight wire of length $L$ carrying current $I$ placed in a uniform magnetic field $B$ at an angle $\\theta$ experiences a magnetic force:",
    "questionAr": "[مسألة متدرجة 34] سلك مستقيم طوله $L$ يمر به تيار $I$ موضوع في مجال مغناطيسي منتظم $B$ بزاوية $\\theta$ يتأثر بقوة مغناطيسية:",
    "optionsEn": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "optionsAr": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "correctAnswer": "$F = B I L \\sin\\theta$",
    "correctIndex": 0,
    "hintEn": "Force is zero when the wire is parallel to the field ($\theta = 0^\\circ$) and maximum when perpendicular ($\theta = 90^\\circ$).",
    "hintAr": "تنعدم القوة عندما يكون السلك موازياً لخطوط المجال وتكون قيمة عظمى عندما يكون عمودياً.",
    "stepByStepSolutionEn": [
      "Magnetic force equation: $F = B I L \\sin\\theta$. Direction is given by Fleming's Left-Hand Rule."
    ],
    "stepByStepSolutionAr": [
      "قانون القوة المغناطيسية: $F = B I L \\sin\\theta$ ويتحدد اتجاهها بقاعدة اليد اليسرى لفلمنج."
    ],
    "teacherTipEn": "Fleming's Left-Hand Rule: Thumb = Force/Motion, Index = Field (B), Middle = Current (I).",
    "teacherTipAr": "قاعدة اليد اليسرى لفلمنج: الإبهام = الحركة/القوة، السبابة = المجال، الوسطى = التيار."
  },
  {
    "id": "phys_ch2_db_easy_35",
    "titleEn": "Mutual Force Between Two Parallel Wires (35)",
    "titleAr": "القوة المتبادلة بين سلكين متوازيين (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] Two long parallel wires carrying electric currents in the same direction experience:",
    "questionAr": "[مسألة متدرجة 35] سلكان متوازيان يمر بكل منهما تيار كهربي في نفس الاتجاه، تتولد بينهما:",
    "optionsEn": [
      "A mutual attractive magnetic force",
      "A mutual repulsive magnetic force",
      "Zero magnetic force between them",
      "An electrostatic gravitational attraction"
    ],
    "optionsAr": [
      "قوة تجاذب مغناطيسية متبادلة",
      "قوة تنافر مغناطيسية متبادلة",
      "تنعدم القوة المغناطيسية المتبادلة بينهما",
      "قوة تجاذب كهروستاتيكي تثاقلي"
    ],
    "correctAnswer": "A mutual attractive magnetic force",
    "correctIndex": 0,
    "hintEn": "Between the wires, fields oppose each other ($B_{\\text{total}} = B_1 - B_2$), so they are pushed inward from higher to lower flux density.",
    "hintAr": "بين السلكين تكون كثافة الفيض ناتجة عن الطرح فتتحرك الأسلاك من منطقة الكثافة الأعلى إلى الأقل (تجاذب).",
    "stepByStepSolutionEn": [
      "Same direction currents create attraction because total field between them is weaker than outside."
    ],
    "stepByStepSolutionAr": [
      "التياران في نفس الاتجاه يولدان قوة تجاذب لأن كثافة الفيض بين السلكين أقل من خارجها."
    ],
    "teacherTipEn": "Mutual force per unit length: $F/L = \\frac{\\mu I_1 I_2}{2\\pi d}$ satisfies Newton's third law ($F_{12} = F_{21}$).",
    "teacherTipAr": "القوة المتبادلة متساوية دائماً بين السلكين حتى لو اختلف التياران طبقاً لقانون نيوتن الثالث."
  },
  {
    "id": "phys_ch2_db_easy_36",
    "titleEn": "Magnetic Torque on a Current Loop (36)",
    "titleAr": "عزم الازدواج المغناطيسي المؤثر على ملف (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] The magnetic torque $\\tau$ acting on a planar rectangular coil of area $A$, turns $N$, carrying current $I$ in a field $B$ is maximum when:",
    "questionAr": "[مسألة متدرجة 36] يكون عزم الازدواج المغناطيسي $\\tau$ المؤثر على ملف مساحته $A$ وعدد لفاته $N$ يمر به تيار $I$ في مجال $B$ قيمة عظمى عندما:",
    "optionsEn": [
      "The plane of the coil is parallel to the magnetic flux lines",
      "The plane of the coil is perpendicular to the magnetic flux lines",
      "The angle between coil plane and field is $45^\\circ$",
      "The magnetic field is completely zero"
    ],
    "optionsAr": [
      "يكون مستوى الملف موازياً لخطوط الفيض المغناطيسي",
      "يكون مستوى الملف عمودياً على خطوط الفيض المغناطيسي",
      "تكون الزاوية بين مستوى الملف والمجال $45^\\circ$",
      "تنعدم شدة المجال المغناطيسي تماماً"
    ],
    "correctAnswer": "The plane of the coil is parallel to the magnetic flux lines",
    "correctIndex": 0,
    "hintEn": "Torque uses $\\sin\\theta'$, where $\\theta'$ is the angle between the normal to the coil and the field.",
    "hintAr": "الزاوية في قانون عزم الازدواج هي الزاوية بين العمودي على مستوى الملف وخطوط الفيض.",
    "stepByStepSolutionEn": [
      "When coil plane is parallel to $B$, the normal is perpendicular ($\\theta' = 90^\\circ$), giving maximum torque $\\tau_{\\max} = B I A N$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف موازياً للمجال يكون العمودي عليه متعامداً مع خطوط الفيض فتكون $\\tau_{\\max} = B I A N$ قيمة عظمى."
    ],
    "teacherTipEn": "Remember: When coil is perpendicular to B, flux $\\Phi_m$ is MAXIMUM but torque $\\tau$ is ZERO.",
    "teacherTipAr": "انتبه: عندما يكون الملف عمودياً على المجال يكون الفيض $\\Phi_m$ قيمة عظمى بينما عزم الازدواج $\\tau$ صفراً."
  },
  {
    "id": "phys_ch2_db_easy_37",
    "titleEn": "Moving-Coil Galvanometer Concave Poles Function (37)",
    "titleAr": "وظيفة القطبين المقعرين في الجلفانومتر الحساس (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] In a moving-coil galvanometer, the pole pieces of the permanent magnet are concave cylinders to ensure that:",
    "questionAr": "[مسألة متدرجة 37] في الجلفانومتر ذي الملف المتحرك، يُصنع قطبا المغناطيس مقعرين لكي:",
    "optionsEn": [
      "The magnetic field lines are radial, keeping the torque independent of coil orientation",
      "The coil encounters minimum friction during deflection",
      "The sensitivity of the instrument is reduced for high currents",
      "The internal resistance of the galvanometer drops to zero"
    ],
    "optionsAr": [
      "تكون خطوط الفيض المغناطيسي على هيئة أنصاف أقطار فيظل عزم الازدواج ثابتاً في أي وضع",
      "يقل الاحتكاك إلى الحد الأدنى أثناء حركة الملف",
      "تقل حساسية الجهاز حتى يقيس التيارات العالية",
      "تنعدم المقاومة الكهربية الداخلية للملف"
    ],
    "correctAnswer": "The magnetic field lines are radial, keeping the torque independent of coil orientation",
    "correctIndex": 0,
    "hintEn": "Radial magnetic fields ensure that the plane of the coil is always parallel to the field lines ($\theta' = 90^circ$).",
    "hintAr": "المجال نصف القطري يضمن أن يكون مستوى الملف دائماً موازياً لخطوط الفيض فيكون عزم الازدواج متناسباً طردياً مع التيار فقط.",
    "stepByStepSolutionEn": [
      "Concave magnetic poles make field lines radial, giving a linear scale where deflection $\\theta \\propto I$."
    ],
    "stepByStepSolutionAr": [
      "القطبان المقعران مع الأسطوانة الحديدية يجعلان خطوط الفيض على هيئة أنصاف أقطار فيكون تدريج الجلفانومتر منتظماً."
    ],
    "teacherTipEn": "Galvanometer scale is uniform because deflection angle $\\theta$ is directly proportional to current intensity $I$.",
    "teacherTipAr": "تدريج الجلفانومتر منتظم لأن زاوية انحراف المؤشر $\\theta$ تتناسب طردياً مع شدة التيار $I$."
  },
  {
    "id": "phys_ch2_db_easy_38",
    "titleEn": "Ammeter Shunt Resistor Function (38)",
    "titleAr": "وظيفة مجزئ التيار في الأميتر (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] A shunt resistor ($R_s$) is connected in parallel with a galvanometer to:",
    "questionAr": "[مسألة متدرجة 38] يتم توصيل مقاومة مجزئ التيار ($R_s$) على التوازي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Decrease total device resistance and increase the maximum measurable current range",
      "Increase device resistance to protect against high voltages",
      "Make the pointer deflect in the opposite direction",
      "Eliminate the need for spiral springs"
    ],
    "optionsAr": [
      "تقليل المقاومة الكلية للجهاز وزيادة مدى قياس شدة التيار",
      "زيادة مقاومة الجهاز لحمايته من فروق الجهد المرتفعة",
      "جعل المؤشر ينحرف في الاتجاه المعاكس للصفر",
      "إلغاء الحاجة إلى استخدام الملفات الزنبركية"
    ],
    "correctAnswer": "Decrease total device resistance and increase the maximum measurable current range",
    "correctIndex": 0,
    "hintEn": "Shunt resistor is a very small resistance connected in parallel: $R_s = \\frac{I_g R_g}{I - I_g}$.",
    "hintAr": "مجزئ التيار مقاومة صغيرة توصل على التوازي لتقليل المقاومة الكلية وزيادة أقصى تيار يقاس.",
    "stepByStepSolutionEn": [
      "Connecting a small $R_s$ in parallel diverts the majority of the current, protects the coil, and extends measurement range."
    ],
    "stepByStepSolutionAr": [
      "مجزئ التيار $R_s$ مقاومة صغيرة توصل بالتوازي يمر بها معظم التيار الكلي وتحمي الملف وتزيد مدى القياس."
    ],
    "teacherTipEn": "As $R_s$ decreases, the range of measurable current increases, and sensitivity decreases.",
    "teacherTipAr": "كلما صغرت قيمة مجزئ التيار $R_s$ زاد مدى قياس الأميتر وقلت حساسيته."
  },
  {
    "id": "phys_ch2_db_easy_39",
    "titleEn": "Voltmeter Multiplier Resistor Function (39)",
    "titleAr": "وظيفة مضاعف الجهد في الفولتميتر (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] A multiplier resistor ($R_m$) is connected in series with a galvanometer to:",
    "questionAr": "[مسألة متدرجة 39] تُوصل مقاومة مضاعف الجهد ($R_m$) على التوالي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Increase total device resistance and expand the maximum measurable voltage range",
      "Decrease total device resistance to draw maximum current from the circuit",
      "Directly measure the unknown resistance of a resistor",
      "Convert AC voltage to DC voltage"
    ],
    "optionsAr": [
      "زيادة المقاومة الكلية للجهاز وتوسيع مدى قياس فرق الجهد",
      "تقليل المقاومة الكلية للجهاز لسحب أكبر تيار ممكن",
      "قياس المقاومة المجهولة مباشرة بالأوم",
      "تحويل الجهد المتردد إلى جهد مستمر"
    ],
    "correctAnswer": "Increase total device resistance and expand the maximum measurable voltage range",
    "correctIndex": 0,
    "hintEn": "Multiplier resistor is large and in series: $R_m = \\frac{V - V_g}{I_g}$.",
    "hintAr": "مضاعف الجهد مقاومة كبيرة توصل على التوالي مع ملف الجلفانومتر لتحويله إلى فولتميتر.",
    "stepByStepSolutionEn": [
      "Connecting high $R_m$ in series increases voltmeter resistance ($R_V = R_g + R_m$), preventing it from altering circuit current."
    ],
    "stepByStepSolutionAr": [
      "مضاعف الجهد يزيد المقاومة الكلية للجهاز فلا يسحب تياراً مؤثراً من الدائرة ويزيد مدى قياس فرق الجهد."
    ],
    "teacherTipEn": "Ideal voltmeter has infinite internal resistance ($R_V \\to \\infty$).",
    "teacherTipAr": "الفولتميتر المثالي مقاومته لا نهائية حتى لا يسحب تياراً من الدائرة المراد قياس جهدها."
  },
  {
    "id": "phys_ch2_db_easy_40",
    "titleEn": "Ohmmeter Scale Non-Uniformity (40)",
    "titleAr": "عدم انتظام تدريج الأوميتر (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] The scale of an ohmmeter is non-uniform (crowded at the high-resistance end) because:",
    "questionAr": "[مسألة متدرجة 40] تدريج الأوميتر غير منتظم وتزدحم أقسامه عند المقاومات العالية لأن:",
    "optionsEn": [
      "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
      "The battery electromotive force decreases during measurement",
      "The magnetic field inside the ohmmeter is non-uniform",
      "The spiral springs lose their mechanical elasticity"
    ],
    "optionsAr": [
      "شدة التيار تتناسب عكسياً مع المقاومة الكلية ($R_{\\text{in}} + R_x$) وليس مع المقاومة المجهولة $R_x$ فقط",
      "القوة الدافعة للبطارية تنخفض باستمرار أثناء عملية القياس",
      "المجال المغناطيسي داخل الجهاز غير منتظم إطلاقاً",
      "الملفات الزنبركية تفقد مرونتها الميكانيكية بمرور الوقت"
    ],
    "correctAnswer": "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
    "correctIndex": 0,
    "hintEn": "Ohm's law for ohmmeter: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
    "hintAr": "قانون أوم للدائرة المغلقة في الأوميتر: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
    "stepByStepSolutionEn": [
      "Since $I \\propto \\frac{1}{R_{\\text{in}} + R_x}$, equal increments in $R_x$ do not produce equal decrements in current $I$."
    ],
    "stepByStepSolutionAr": [
      "لأن شدة التيار تتناسب عكسياً مع مجموع المقاومتين الداخلية والخارجية فتتزاحم الأقسام عند اللانهاية."
    ],
    "teacherTipEn": "When $R_x = R_{\\text{in}}$, pointer deflects to $1/2$ scale. When $R_x = 3R_{\\text{in}}$, pointer deflects to $1/4$ scale.",
    "teacherTipAr": "عندما $R_x = R_{\\text{in}}$ ينحرف المؤشر لنصف التدريج، وعندما $R_x = 3R_{\\text{in}}$ ينحرف لربع التدريج."
  },
  {
    "id": "phys_ch2_db_easy_41",
    "titleEn": "Magnetic Field of a Straight Conductor (41)",
    "titleAr": "كثافة الفيض المغناطيسي لسلك مستقيم (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] The magnetic flux density ($B$) at a perpendicular distance $d$ from a long straight wire carrying current $I$ is given by:",
    "questionAr": "[مسألة متدرجة 41] تعطى كثافة الفيض المغناطيسي ($B$) عند نقطة تبعد مسافة عمودية $d$ عن سلك مستقيم طويل يمر به تيار $I$ بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "correctAnswer": "$B = \\frac{\\mu I}{2\\pi d}$",
    "correctIndex": 0,
    "hintEn": "Apply Ampere's circuital law: the magnetic field lines form concentric circles around the wire.",
    "hintAr": "طبق قانون أمبير الدائري: خطوط الفيض دوائر متحدة المركز حول السلك.",
    "stepByStepSolutionEn": [
      "According to Ampere's Law for a straight wire: $B = \\frac{\\mu I}{2\\pi d}$, proportional to $I$ and inversely proportional to $d$."
    ],
    "stepByStepSolutionAr": [
      "وفقاً لقانون أمبير الدائري لسلك مستقيم: $B = \\frac{\\mu I}{2\\pi d}$، تتناسب طردياً مع $I$ وعكسياً مع البعد العمودي $d$."
    ],
    "teacherTipEn": "Remember that $d$ must strictly be the perpendicular distance from the wire axis.",
    "teacherTipAr": "تذكر دائماً أن $d$ هي البعد العمودي تماماً عن محور السلك."
  },
  {
    "id": "phys_ch2_db_easy_42",
    "titleEn": "Magnetic Field at the Center of a Circular Coil (42)",
    "titleAr": "كثافة الفيض عند مركز ملف دائري (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] The magnetic flux density at the center of a circular coil of radius $r$ having $N$ turns carrying current $I$ is:",
    "questionAr": "[مسألة متدرجة 42] كثافة الفيض المغناطيسي عند مركز ملف دائري نصف قطره $r$ وعدد لفاته $N$ ويمر به تيار $I$ تعطى بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{2r}$",
    "correctIndex": 0,
    "hintEn": "The field at the coil center is straight, uniform, and perpendicular to the plane of the coil.",
    "hintAr": "المجال المغناطيسي عند مركز الملف الدائري منتظم وعمودي على مستوى الملف.",
    "stepByStepSolutionEn": [
      "Magnetic flux density at the center of a circular coil: $B = \\frac{\\mu N I}{2r}$."
    ],
    "stepByStepSolutionAr": [
      "كثافة الفيض المغناطيسي عند مركز ملف دائري تعطى بالقانون: $B = \\frac{\\mu N I}{2r}$."
    ],
    "teacherTipEn": "When a circular coil is rewound to half its radius from the same wire length, $N$ doubles and $B$ quadruples ($4\\times$).",
    "teacherTipAr": "عند إعادة لف ملف دائري ليقل نصف قطره للنصف مع ثبات طول السلك، يتضاعف عدد اللفات وتزداد كثافة الفيض إلى 4 أمثالها."
  },
  {
    "id": "phys_ch2_db_easy_43",
    "titleEn": "Magnetic Flux Density Inside a Solenoid (43)",
    "titleAr": "كثافة الفيض داخل ملف لولبي (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] Inside an ideal solenoid of length $L$ with $N$ turns carrying current $I$, the magnetic flux density along the central axis is:",
    "questionAr": "[مسألة متدرجة 43] كثافة الفيض المغناطيسي على امتداد محور ملف لولبي طوله $L$ وعدد لفاته $N$ ويمر به تيار $I$ تساوي:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{L} = \\mu n I$",
    "correctIndex": 0,
    "hintEn": "Here $n = N/L$ is the number of turns per unit length.",
    "hintAr": "حيث $n = N/L$ هو عدد اللفات لوحدة الأطوال.",
    "stepByStepSolutionEn": [
      "The magnetic field inside a solenoid is uniform and parallel to its axis: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "stepByStepSolutionAr": [
      "المجال المغناطيسي داخل الملف اللولبي منتظم وموازٍ لمحوره: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "teacherTipEn": "Cutting a solenoid to half its length and connecting to the same battery doubles the current, so B increases $2\\times$.",
    "teacherTipAr": "قص نصف الملف اللولبي وتوصيل النصف المتبقي بنفس المصدر يقلل المقاومة للنصف فيتضاعف التيار وتتضاعف $B$."
  },
  {
    "id": "phys_ch2_db_easy_44",
    "titleEn": "Magnetic Force on a Current-Carrying Conductor (44)",
    "titleAr": "القوة المغناطيسية المؤثرة على سلك يمر به تيار (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] A straight wire of length $L$ carrying current $I$ placed in a uniform magnetic field $B$ at an angle $\\theta$ experiences a magnetic force:",
    "questionAr": "[مسألة متدرجة 44] سلك مستقيم طوله $L$ يمر به تيار $I$ موضوع في مجال مغناطيسي منتظم $B$ بزاوية $\\theta$ يتأثر بقوة مغناطيسية:",
    "optionsEn": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "optionsAr": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "correctAnswer": "$F = B I L \\sin\\theta$",
    "correctIndex": 0,
    "hintEn": "Force is zero when the wire is parallel to the field ($\theta = 0^\\circ$) and maximum when perpendicular ($\theta = 90^\\circ$).",
    "hintAr": "تنعدم القوة عندما يكون السلك موازياً لخطوط المجال وتكون قيمة عظمى عندما يكون عمودياً.",
    "stepByStepSolutionEn": [
      "Magnetic force equation: $F = B I L \\sin\\theta$. Direction is given by Fleming's Left-Hand Rule."
    ],
    "stepByStepSolutionAr": [
      "قانون القوة المغناطيسية: $F = B I L \\sin\\theta$ ويتحدد اتجاهها بقاعدة اليد اليسرى لفلمنج."
    ],
    "teacherTipEn": "Fleming's Left-Hand Rule: Thumb = Force/Motion, Index = Field (B), Middle = Current (I).",
    "teacherTipAr": "قاعدة اليد اليسرى لفلمنج: الإبهام = الحركة/القوة، السبابة = المجال، الوسطى = التيار."
  },
  {
    "id": "phys_ch2_db_easy_45",
    "titleEn": "Mutual Force Between Two Parallel Wires (45)",
    "titleAr": "القوة المتبادلة بين سلكين متوازيين (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] Two long parallel wires carrying electric currents in the same direction experience:",
    "questionAr": "[مسألة متدرجة 45] سلكان متوازيان يمر بكل منهما تيار كهربي في نفس الاتجاه، تتولد بينهما:",
    "optionsEn": [
      "A mutual attractive magnetic force",
      "A mutual repulsive magnetic force",
      "Zero magnetic force between them",
      "An electrostatic gravitational attraction"
    ],
    "optionsAr": [
      "قوة تجاذب مغناطيسية متبادلة",
      "قوة تنافر مغناطيسية متبادلة",
      "تنعدم القوة المغناطيسية المتبادلة بينهما",
      "قوة تجاذب كهروستاتيكي تثاقلي"
    ],
    "correctAnswer": "A mutual attractive magnetic force",
    "correctIndex": 0,
    "hintEn": "Between the wires, fields oppose each other ($B_{\\text{total}} = B_1 - B_2$), so they are pushed inward from higher to lower flux density.",
    "hintAr": "بين السلكين تكون كثافة الفيض ناتجة عن الطرح فتتحرك الأسلاك من منطقة الكثافة الأعلى إلى الأقل (تجاذب).",
    "stepByStepSolutionEn": [
      "Same direction currents create attraction because total field between them is weaker than outside."
    ],
    "stepByStepSolutionAr": [
      "التياران في نفس الاتجاه يولدان قوة تجاذب لأن كثافة الفيض بين السلكين أقل من خارجها."
    ],
    "teacherTipEn": "Mutual force per unit length: $F/L = \\frac{\\mu I_1 I_2}{2\\pi d}$ satisfies Newton's third law ($F_{12} = F_{21}$).",
    "teacherTipAr": "القوة المتبادلة متساوية دائماً بين السلكين حتى لو اختلف التياران طبقاً لقانون نيوتن الثالث."
  },
  {
    "id": "phys_ch2_db_easy_46",
    "titleEn": "Magnetic Torque on a Current Loop (46)",
    "titleAr": "عزم الازدواج المغناطيسي المؤثر على ملف (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] The magnetic torque $\\tau$ acting on a planar rectangular coil of area $A$, turns $N$, carrying current $I$ in a field $B$ is maximum when:",
    "questionAr": "[مسألة متدرجة 46] يكون عزم الازدواج المغناطيسي $\\tau$ المؤثر على ملف مساحته $A$ وعدد لفاته $N$ يمر به تيار $I$ في مجال $B$ قيمة عظمى عندما:",
    "optionsEn": [
      "The plane of the coil is parallel to the magnetic flux lines",
      "The plane of the coil is perpendicular to the magnetic flux lines",
      "The angle between coil plane and field is $45^\\circ$",
      "The magnetic field is completely zero"
    ],
    "optionsAr": [
      "يكون مستوى الملف موازياً لخطوط الفيض المغناطيسي",
      "يكون مستوى الملف عمودياً على خطوط الفيض المغناطيسي",
      "تكون الزاوية بين مستوى الملف والمجال $45^\\circ$",
      "تنعدم شدة المجال المغناطيسي تماماً"
    ],
    "correctAnswer": "The plane of the coil is parallel to the magnetic flux lines",
    "correctIndex": 0,
    "hintEn": "Torque uses $\\sin\\theta'$, where $\\theta'$ is the angle between the normal to the coil and the field.",
    "hintAr": "الزاوية في قانون عزم الازدواج هي الزاوية بين العمودي على مستوى الملف وخطوط الفيض.",
    "stepByStepSolutionEn": [
      "When coil plane is parallel to $B$, the normal is perpendicular ($\\theta' = 90^\\circ$), giving maximum torque $\\tau_{\\max} = B I A N$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف موازياً للمجال يكون العمودي عليه متعامداً مع خطوط الفيض فتكون $\\tau_{\\max} = B I A N$ قيمة عظمى."
    ],
    "teacherTipEn": "Remember: When coil is perpendicular to B, flux $\\Phi_m$ is MAXIMUM but torque $\\tau$ is ZERO.",
    "teacherTipAr": "انتبه: عندما يكون الملف عمودياً على المجال يكون الفيض $\\Phi_m$ قيمة عظمى بينما عزم الازدواج $\\tau$ صفراً."
  },
  {
    "id": "phys_ch2_db_easy_47",
    "titleEn": "Moving-Coil Galvanometer Concave Poles Function (47)",
    "titleAr": "وظيفة القطبين المقعرين في الجلفانومتر الحساس (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] In a moving-coil galvanometer, the pole pieces of the permanent magnet are concave cylinders to ensure that:",
    "questionAr": "[مسألة متدرجة 47] في الجلفانومتر ذي الملف المتحرك، يُصنع قطبا المغناطيس مقعرين لكي:",
    "optionsEn": [
      "The magnetic field lines are radial, keeping the torque independent of coil orientation",
      "The coil encounters minimum friction during deflection",
      "The sensitivity of the instrument is reduced for high currents",
      "The internal resistance of the galvanometer drops to zero"
    ],
    "optionsAr": [
      "تكون خطوط الفيض المغناطيسي على هيئة أنصاف أقطار فيظل عزم الازدواج ثابتاً في أي وضع",
      "يقل الاحتكاك إلى الحد الأدنى أثناء حركة الملف",
      "تقل حساسية الجهاز حتى يقيس التيارات العالية",
      "تنعدم المقاومة الكهربية الداخلية للملف"
    ],
    "correctAnswer": "The magnetic field lines are radial, keeping the torque independent of coil orientation",
    "correctIndex": 0,
    "hintEn": "Radial magnetic fields ensure that the plane of the coil is always parallel to the field lines ($\theta' = 90^circ$).",
    "hintAr": "المجال نصف القطري يضمن أن يكون مستوى الملف دائماً موازياً لخطوط الفيض فيكون عزم الازدواج متناسباً طردياً مع التيار فقط.",
    "stepByStepSolutionEn": [
      "Concave magnetic poles make field lines radial, giving a linear scale where deflection $\\theta \\propto I$."
    ],
    "stepByStepSolutionAr": [
      "القطبان المقعران مع الأسطوانة الحديدية يجعلان خطوط الفيض على هيئة أنصاف أقطار فيكون تدريج الجلفانومتر منتظماً."
    ],
    "teacherTipEn": "Galvanometer scale is uniform because deflection angle $\\theta$ is directly proportional to current intensity $I$.",
    "teacherTipAr": "تدريج الجلفانومتر منتظم لأن زاوية انحراف المؤشر $\\theta$ تتناسب طردياً مع شدة التيار $I$."
  },
  {
    "id": "phys_ch2_db_easy_48",
    "titleEn": "Ammeter Shunt Resistor Function (48)",
    "titleAr": "وظيفة مجزئ التيار في الأميتر (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] A shunt resistor ($R_s$) is connected in parallel with a galvanometer to:",
    "questionAr": "[مسألة متدرجة 48] يتم توصيل مقاومة مجزئ التيار ($R_s$) على التوازي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Decrease total device resistance and increase the maximum measurable current range",
      "Increase device resistance to protect against high voltages",
      "Make the pointer deflect in the opposite direction",
      "Eliminate the need for spiral springs"
    ],
    "optionsAr": [
      "تقليل المقاومة الكلية للجهاز وزيادة مدى قياس شدة التيار",
      "زيادة مقاومة الجهاز لحمايته من فروق الجهد المرتفعة",
      "جعل المؤشر ينحرف في الاتجاه المعاكس للصفر",
      "إلغاء الحاجة إلى استخدام الملفات الزنبركية"
    ],
    "correctAnswer": "Decrease total device resistance and increase the maximum measurable current range",
    "correctIndex": 0,
    "hintEn": "Shunt resistor is a very small resistance connected in parallel: $R_s = \\frac{I_g R_g}{I - I_g}$.",
    "hintAr": "مجزئ التيار مقاومة صغيرة توصل على التوازي لتقليل المقاومة الكلية وزيادة أقصى تيار يقاس.",
    "stepByStepSolutionEn": [
      "Connecting a small $R_s$ in parallel diverts the majority of the current, protects the coil, and extends measurement range."
    ],
    "stepByStepSolutionAr": [
      "مجزئ التيار $R_s$ مقاومة صغيرة توصل بالتوازي يمر بها معظم التيار الكلي وتحمي الملف وتزيد مدى القياس."
    ],
    "teacherTipEn": "As $R_s$ decreases, the range of measurable current increases, and sensitivity decreases.",
    "teacherTipAr": "كلما صغرت قيمة مجزئ التيار $R_s$ زاد مدى قياس الأميتر وقلت حساسيته."
  },
  {
    "id": "phys_ch2_db_easy_49",
    "titleEn": "Voltmeter Multiplier Resistor Function (49)",
    "titleAr": "وظيفة مضاعف الجهد في الفولتميتر (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] A multiplier resistor ($R_m$) is connected in series with a galvanometer to:",
    "questionAr": "[مسألة متدرجة 49] تُوصل مقاومة مضاعف الجهد ($R_m$) على التوالي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Increase total device resistance and expand the maximum measurable voltage range",
      "Decrease total device resistance to draw maximum current from the circuit",
      "Directly measure the unknown resistance of a resistor",
      "Convert AC voltage to DC voltage"
    ],
    "optionsAr": [
      "زيادة المقاومة الكلية للجهاز وتوسيع مدى قياس فرق الجهد",
      "تقليل المقاومة الكلية للجهاز لسحب أكبر تيار ممكن",
      "قياس المقاومة المجهولة مباشرة بالأوم",
      "تحويل الجهد المتردد إلى جهد مستمر"
    ],
    "correctAnswer": "Increase total device resistance and expand the maximum measurable voltage range",
    "correctIndex": 0,
    "hintEn": "Multiplier resistor is large and in series: $R_m = \\frac{V - V_g}{I_g}$.",
    "hintAr": "مضاعف الجهد مقاومة كبيرة توصل على التوالي مع ملف الجلفانومتر لتحويله إلى فولتميتر.",
    "stepByStepSolutionEn": [
      "Connecting high $R_m$ in series increases voltmeter resistance ($R_V = R_g + R_m$), preventing it from altering circuit current."
    ],
    "stepByStepSolutionAr": [
      "مضاعف الجهد يزيد المقاومة الكلية للجهاز فلا يسحب تياراً مؤثراً من الدائرة ويزيد مدى قياس فرق الجهد."
    ],
    "teacherTipEn": "Ideal voltmeter has infinite internal resistance ($R_V \\to \\infty$).",
    "teacherTipAr": "الفولتميتر المثالي مقاومته لا نهائية حتى لا يسحب تياراً من الدائرة المراد قياس جهدها."
  },
  {
    "id": "phys_ch2_db_easy_50",
    "titleEn": "Ohmmeter Scale Non-Uniformity (50)",
    "titleAr": "عدم انتظام تدريج الأوميتر (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] The scale of an ohmmeter is non-uniform (crowded at the high-resistance end) because:",
    "questionAr": "[مسألة متدرجة 50] تدريج الأوميتر غير منتظم وتزدحم أقسامه عند المقاومات العالية لأن:",
    "optionsEn": [
      "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
      "The battery electromotive force decreases during measurement",
      "The magnetic field inside the ohmmeter is non-uniform",
      "The spiral springs lose their mechanical elasticity"
    ],
    "optionsAr": [
      "شدة التيار تتناسب عكسياً مع المقاومة الكلية ($R_{\\text{in}} + R_x$) وليس مع المقاومة المجهولة $R_x$ فقط",
      "القوة الدافعة للبطارية تنخفض باستمرار أثناء عملية القياس",
      "المجال المغناطيسي داخل الجهاز غير منتظم إطلاقاً",
      "الملفات الزنبركية تفقد مرونتها الميكانيكية بمرور الوقت"
    ],
    "correctAnswer": "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
    "correctIndex": 0,
    "hintEn": "Ohm's law for ohmmeter: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
    "hintAr": "قانون أوم للدائرة المغلقة في الأوميتر: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
    "stepByStepSolutionEn": [
      "Since $I \\propto \\frac{1}{R_{\\text{in}} + R_x}$, equal increments in $R_x$ do not produce equal decrements in current $I$."
    ],
    "stepByStepSolutionAr": [
      "لأن شدة التيار تتناسب عكسياً مع مجموع المقاومتين الداخلية والخارجية فتتزاحم الأقسام عند اللانهاية."
    ],
    "teacherTipEn": "When $R_x = R_{\\text{in}}$, pointer deflects to $1/2$ scale. When $R_x = 3R_{\\text{in}}$, pointer deflects to $1/4$ scale.",
    "teacherTipAr": "عندما $R_x = R_{\\text{in}}$ ينحرف المؤشر لنصف التدريج، وعندما $R_x = 3R_{\\text{in}}$ ينحرف لربع التدريج."
  },
  {
    "id": "phys_ch2_db_easy_51",
    "titleEn": "Magnetic Field of a Straight Conductor (51)",
    "titleAr": "كثافة الفيض المغناطيسي لسلك مستقيم (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] The magnetic flux density ($B$) at a perpendicular distance $d$ from a long straight wire carrying current $I$ is given by:",
    "questionAr": "[مسألة متدرجة 51] تعطى كثافة الفيض المغناطيسي ($B$) عند نقطة تبعد مسافة عمودية $d$ عن سلك مستقيم طويل يمر به تيار $I$ بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu I}{2\\pi d}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\mu I d$"
    ],
    "correctAnswer": "$B = \\frac{\\mu I}{2\\pi d}$",
    "correctIndex": 0,
    "hintEn": "Apply Ampere's circuital law: the magnetic field lines form concentric circles around the wire.",
    "hintAr": "طبق قانون أمبير الدائري: خطوط الفيض دوائر متحدة المركز حول السلك.",
    "stepByStepSolutionEn": [
      "According to Ampere's Law for a straight wire: $B = \\frac{\\mu I}{2\\pi d}$, proportional to $I$ and inversely proportional to $d$."
    ],
    "stepByStepSolutionAr": [
      "وفقاً لقانون أمبير الدائري لسلك مستقيم: $B = \\frac{\\mu I}{2\\pi d}$، تتناسب طردياً مع $I$ وعكسياً مع البعد العمودي $d$."
    ],
    "teacherTipEn": "Remember that $d$ must strictly be the perpendicular distance from the wire axis.",
    "teacherTipAr": "تذكر دائماً أن $d$ هي البعد العمودي تماماً عن محور السلك."
  },
  {
    "id": "phys_ch2_db_easy_52",
    "titleEn": "Magnetic Field at the Center of a Circular Coil (52)",
    "titleAr": "كثافة الفيض عند مركز ملف دائري (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] The magnetic flux density at the center of a circular coil of radius $r$ having $N$ turns carrying current $I$ is:",
    "questionAr": "[مسألة متدرجة 52] كثافة الفيض المغناطيسي عند مركز ملف دائري نصف قطره $r$ وعدد لفاته $N$ ويمر به تيار $I$ تعطى بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{\\mu N I}{L}$",
      "$B = \\frac{\\mu I}{2\\pi r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{2r}$",
    "correctIndex": 0,
    "hintEn": "The field at the coil center is straight, uniform, and perpendicular to the plane of the coil.",
    "hintAr": "المجال المغناطيسي عند مركز الملف الدائري منتظم وعمودي على مستوى الملف.",
    "stepByStepSolutionEn": [
      "Magnetic flux density at the center of a circular coil: $B = \\frac{\\mu N I}{2r}$."
    ],
    "stepByStepSolutionAr": [
      "كثافة الفيض المغناطيسي عند مركز ملف دائري تعطى بالقانون: $B = \\frac{\\mu N I}{2r}$."
    ],
    "teacherTipEn": "When a circular coil is rewound to half its radius from the same wire length, $N$ doubles and $B$ quadruples ($4\\times$).",
    "teacherTipAr": "عند إعادة لف ملف دائري ليقل نصف قطره للنصف مع ثبات طول السلك، يتضاعف عدد اللفات وتزداد كثافة الفيض إلى 4 أمثالها."
  },
  {
    "id": "phys_ch2_db_easy_53",
    "titleEn": "Magnetic Flux Density Inside a Solenoid (53)",
    "titleAr": "كثافة الفيض داخل ملف لولبي (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] Inside an ideal solenoid of length $L$ with $N$ turns carrying current $I$, the magnetic flux density along the central axis is:",
    "questionAr": "[مسألة متدرجة 53] كثافة الفيض المغناطيسي على امتداد محور ملف لولبي طوله $L$ وعدد لفاته $N$ ويمر به تيار $I$ تساوي:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu I}{2\\pi L}$",
      "$B = \\frac{\\mu N^2 I}{2L}$",
      "$B = \\frac{\\mu I L}{N}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{L} = \\mu n I$",
    "correctIndex": 0,
    "hintEn": "Here $n = N/L$ is the number of turns per unit length.",
    "hintAr": "حيث $n = N/L$ هو عدد اللفات لوحدة الأطوال.",
    "stepByStepSolutionEn": [
      "The magnetic field inside a solenoid is uniform and parallel to its axis: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "stepByStepSolutionAr": [
      "المجال المغناطيسي داخل الملف اللولبي منتظم وموازٍ لمحوره: $B = \\mu \\frac{N}{L} I = \\mu n I$."
    ],
    "teacherTipEn": "Cutting a solenoid to half its length and connecting to the same battery doubles the current, so B increases $2\\times$.",
    "teacherTipAr": "قص نصف الملف اللولبي وتوصيل النصف المتبقي بنفس المصدر يقلل المقاومة للنصف فيتضاعف التيار وتتضاعف $B$."
  },
  {
    "id": "phys_ch2_db_easy_54",
    "titleEn": "Magnetic Force on a Current-Carrying Conductor (54)",
    "titleAr": "القوة المغناطيسية المؤثرة على سلك يمر به تيار (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] A straight wire of length $L$ carrying current $I$ placed in a uniform magnetic field $B$ at an angle $\\theta$ experiences a magnetic force:",
    "questionAr": "[مسألة متدرجة 54] سلك مستقيم طوله $L$ يمر به تيار $I$ موضوع في مجال مغناطيسي منتظم $B$ بزاوية $\\theta$ يتأثر بقوة مغناطيسية:",
    "optionsEn": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "optionsAr": [
      "$F = B I L \\sin\\theta$",
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B^2 I L$"
    ],
    "correctAnswer": "$F = B I L \\sin\\theta$",
    "correctIndex": 0,
    "hintEn": "Force is zero when the wire is parallel to the field ($\theta = 0^\\circ$) and maximum when perpendicular ($\theta = 90^\\circ$).",
    "hintAr": "تنعدم القوة عندما يكون السلك موازياً لخطوط المجال وتكون قيمة عظمى عندما يكون عمودياً.",
    "stepByStepSolutionEn": [
      "Magnetic force equation: $F = B I L \\sin\\theta$. Direction is given by Fleming's Left-Hand Rule."
    ],
    "stepByStepSolutionAr": [
      "قانون القوة المغناطيسية: $F = B I L \\sin\\theta$ ويتحدد اتجاهها بقاعدة اليد اليسرى لفلمنج."
    ],
    "teacherTipEn": "Fleming's Left-Hand Rule: Thumb = Force/Motion, Index = Field (B), Middle = Current (I).",
    "teacherTipAr": "قاعدة اليد اليسرى لفلمنج: الإبهام = الحركة/القوة، السبابة = المجال، الوسطى = التيار."
  },
  {
    "id": "phys_ch2_db_easy_55",
    "titleEn": "Mutual Force Between Two Parallel Wires (55)",
    "titleAr": "القوة المتبادلة بين سلكين متوازيين (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] Two long parallel wires carrying electric currents in the same direction experience:",
    "questionAr": "[مسألة متدرجة 55] سلكان متوازيان يمر بكل منهما تيار كهربي في نفس الاتجاه، تتولد بينهما:",
    "optionsEn": [
      "A mutual attractive magnetic force",
      "A mutual repulsive magnetic force",
      "Zero magnetic force between them",
      "An electrostatic gravitational attraction"
    ],
    "optionsAr": [
      "قوة تجاذب مغناطيسية متبادلة",
      "قوة تنافر مغناطيسية متبادلة",
      "تنعدم القوة المغناطيسية المتبادلة بينهما",
      "قوة تجاذب كهروستاتيكي تثاقلي"
    ],
    "correctAnswer": "A mutual attractive magnetic force",
    "correctIndex": 0,
    "hintEn": "Between the wires, fields oppose each other ($B_{\\text{total}} = B_1 - B_2$), so they are pushed inward from higher to lower flux density.",
    "hintAr": "بين السلكين تكون كثافة الفيض ناتجة عن الطرح فتتحرك الأسلاك من منطقة الكثافة الأعلى إلى الأقل (تجاذب).",
    "stepByStepSolutionEn": [
      "Same direction currents create attraction because total field between them is weaker than outside."
    ],
    "stepByStepSolutionAr": [
      "التياران في نفس الاتجاه يولدان قوة تجاذب لأن كثافة الفيض بين السلكين أقل من خارجها."
    ],
    "teacherTipEn": "Mutual force per unit length: $F/L = \\frac{\\mu I_1 I_2}{2\\pi d}$ satisfies Newton's third law ($F_{12} = F_{21}$).",
    "teacherTipAr": "القوة المتبادلة متساوية دائماً بين السلكين حتى لو اختلف التياران طبقاً لقانون نيوتن الثالث."
  },
  {
    "id": "phys_ch2_db_easy_56",
    "titleEn": "Magnetic Torque on a Current Loop (56)",
    "titleAr": "عزم الازدواج المغناطيسي المؤثر على ملف (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] The magnetic torque $\\tau$ acting on a planar rectangular coil of area $A$, turns $N$, carrying current $I$ in a field $B$ is maximum when:",
    "questionAr": "[مسألة متدرجة 56] يكون عزم الازدواج المغناطيسي $\\tau$ المؤثر على ملف مساحته $A$ وعدد لفاته $N$ يمر به تيار $I$ في مجال $B$ قيمة عظمى عندما:",
    "optionsEn": [
      "The plane of the coil is parallel to the magnetic flux lines",
      "The plane of the coil is perpendicular to the magnetic flux lines",
      "The angle between coil plane and field is $45^\\circ$",
      "The magnetic field is completely zero"
    ],
    "optionsAr": [
      "يكون مستوى الملف موازياً لخطوط الفيض المغناطيسي",
      "يكون مستوى الملف عمودياً على خطوط الفيض المغناطيسي",
      "تكون الزاوية بين مستوى الملف والمجال $45^\\circ$",
      "تنعدم شدة المجال المغناطيسي تماماً"
    ],
    "correctAnswer": "The plane of the coil is parallel to the magnetic flux lines",
    "correctIndex": 0,
    "hintEn": "Torque uses $\\sin\\theta'$, where $\\theta'$ is the angle between the normal to the coil and the field.",
    "hintAr": "الزاوية في قانون عزم الازدواج هي الزاوية بين العمودي على مستوى الملف وخطوط الفيض.",
    "stepByStepSolutionEn": [
      "When coil plane is parallel to $B$, the normal is perpendicular ($\\theta' = 90^\\circ$), giving maximum torque $\\tau_{\\max} = B I A N$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف موازياً للمجال يكون العمودي عليه متعامداً مع خطوط الفيض فتكون $\\tau_{\\max} = B I A N$ قيمة عظمى."
    ],
    "teacherTipEn": "Remember: When coil is perpendicular to B, flux $\\Phi_m$ is MAXIMUM but torque $\\tau$ is ZERO.",
    "teacherTipAr": "انتبه: عندما يكون الملف عمودياً على المجال يكون الفيض $\\Phi_m$ قيمة عظمى بينما عزم الازدواج $\\tau$ صفراً."
  },
  {
    "id": "phys_ch2_db_easy_57",
    "titleEn": "Moving-Coil Galvanometer Concave Poles Function (57)",
    "titleAr": "وظيفة القطبين المقعرين في الجلفانومتر الحساس (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] In a moving-coil galvanometer, the pole pieces of the permanent magnet are concave cylinders to ensure that:",
    "questionAr": "[مسألة متدرجة 57] في الجلفانومتر ذي الملف المتحرك، يُصنع قطبا المغناطيس مقعرين لكي:",
    "optionsEn": [
      "The magnetic field lines are radial, keeping the torque independent of coil orientation",
      "The coil encounters minimum friction during deflection",
      "The sensitivity of the instrument is reduced for high currents",
      "The internal resistance of the galvanometer drops to zero"
    ],
    "optionsAr": [
      "تكون خطوط الفيض المغناطيسي على هيئة أنصاف أقطار فيظل عزم الازدواج ثابتاً في أي وضع",
      "يقل الاحتكاك إلى الحد الأدنى أثناء حركة الملف",
      "تقل حساسية الجهاز حتى يقيس التيارات العالية",
      "تنعدم المقاومة الكهربية الداخلية للملف"
    ],
    "correctAnswer": "The magnetic field lines are radial, keeping the torque independent of coil orientation",
    "correctIndex": 0,
    "hintEn": "Radial magnetic fields ensure that the plane of the coil is always parallel to the field lines ($\theta' = 90^circ$).",
    "hintAr": "المجال نصف القطري يضمن أن يكون مستوى الملف دائماً موازياً لخطوط الفيض فيكون عزم الازدواج متناسباً طردياً مع التيار فقط.",
    "stepByStepSolutionEn": [
      "Concave magnetic poles make field lines radial, giving a linear scale where deflection $\\theta \\propto I$."
    ],
    "stepByStepSolutionAr": [
      "القطبان المقعران مع الأسطوانة الحديدية يجعلان خطوط الفيض على هيئة أنصاف أقطار فيكون تدريج الجلفانومتر منتظماً."
    ],
    "teacherTipEn": "Galvanometer scale is uniform because deflection angle $\\theta$ is directly proportional to current intensity $I$.",
    "teacherTipAr": "تدريج الجلفانومتر منتظم لأن زاوية انحراف المؤشر $\\theta$ تتناسب طردياً مع شدة التيار $I$."
  },
  {
    "id": "phys_ch2_db_easy_58",
    "titleEn": "Ammeter Shunt Resistor Function (58)",
    "titleAr": "وظيفة مجزئ التيار في الأميتر (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] A shunt resistor ($R_s$) is connected in parallel with a galvanometer to:",
    "questionAr": "[مسألة متدرجة 58] يتم توصيل مقاومة مجزئ التيار ($R_s$) على التوازي مع ملف الجلفانومتر لـ:",
    "optionsEn": [
      "Decrease total device resistance and increase the maximum measurable current range",
      "Increase device resistance to protect against high voltages",
      "Make the pointer deflect in the opposite direction",
      "Eliminate the need for spiral springs"
    ],
    "optionsAr": [
      "تقليل المقاومة الكلية للجهاز وزيادة مدى قياس شدة التيار",
      "زيادة مقاومة الجهاز لحمايته من فروق الجهد المرتفعة",
      "جعل المؤشر ينحرف في الاتجاه المعاكس للصفر",
      "إلغاء الحاجة إلى استخدام الملفات الزنبركية"
    ],
    "correctAnswer": "Decrease total device resistance and increase the maximum measurable current range",
    "correctIndex": 0,
    "hintEn": "Shunt resistor is a very small resistance connected in parallel: $R_s = \\frac{I_g R_g}{I - I_g}$.",
    "hintAr": "مجزئ التيار مقاومة صغيرة توصل على التوازي لتقليل المقاومة الكلية وزيادة أقصى تيار يقاس.",
    "stepByStepSolutionEn": [
      "Connecting a small $R_s$ in parallel diverts the majority of the current, protects the coil, and extends measurement range."
    ],
    "stepByStepSolutionAr": [
      "مجزئ التيار $R_s$ مقاومة صغيرة توصل بالتوازي يمر بها معظم التيار الكلي وتحمي الملف وتزيد مدى القياس."
    ],
    "teacherTipEn": "As $R_s$ decreases, the range of measurable current increases, and sensitivity decreases.",
    "teacherTipAr": "كلما صغرت قيمة مجزئ التيار $R_s$ زاد مدى قياس الأميتر وقلت حساسيته."
  }
],
  medium: [
  {
    "id": "phys_ch2_db_medium_01",
    "titleEn": "Neutral Point Between Two Parallel Currents (1)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (1)",
    "difficulty": "medium",
    "questionEn": "Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_02",
    "titleEn": "Calculating Shunt Resistance for Ammeter (2)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (2)",
    "difficulty": "medium",
    "questionEn": "A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_03",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (3)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (3)",
    "difficulty": "medium",
    "questionEn": "A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_04",
    "titleEn": "Ohmmeter External Resistance Calculation (4)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (4)",
    "difficulty": "medium",
    "questionEn": "An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_05",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (5)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (5)",
    "difficulty": "medium",
    "questionEn": "A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_06",
    "titleEn": "Neutral Point Between Two Parallel Currents (6)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 6] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_07",
    "titleEn": "Calculating Shunt Resistance for Ammeter (7)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 7] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_08",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (8)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 8] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_09",
    "titleEn": "Ohmmeter External Resistance Calculation (9)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 9] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_10",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (10)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "[مسألة متدرجة 10] ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_11",
    "titleEn": "Neutral Point Between Two Parallel Currents (11)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 11] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_12",
    "titleEn": "Calculating Shunt Resistance for Ammeter (12)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 12] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_13",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (13)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 13] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_14",
    "titleEn": "Ohmmeter External Resistance Calculation (14)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 14] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_15",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (15)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "[مسألة متدرجة 15] ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_16",
    "titleEn": "Neutral Point Between Two Parallel Currents (16)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 16] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_17",
    "titleEn": "Calculating Shunt Resistance for Ammeter (17)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 17] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_18",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (18)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 18] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_19",
    "titleEn": "Ohmmeter External Resistance Calculation (19)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 19] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_20",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (20)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "[مسألة متدرجة 20] ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_21",
    "titleEn": "Neutral Point Between Two Parallel Currents (21)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 21] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_22",
    "titleEn": "Calculating Shunt Resistance for Ammeter (22)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 22] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_23",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (23)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 23] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_24",
    "titleEn": "Ohmmeter External Resistance Calculation (24)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 24] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_25",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (25)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "[مسألة متدرجة 25] ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_26",
    "titleEn": "Neutral Point Between Two Parallel Currents (26)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 26] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_27",
    "titleEn": "Calculating Shunt Resistance for Ammeter (27)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 27] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_28",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (28)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 28] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_29",
    "titleEn": "Ohmmeter External Resistance Calculation (29)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 29] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_30",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (30)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "[مسألة متدرجة 30] ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_31",
    "titleEn": "Neutral Point Between Two Parallel Currents (31)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 31] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_32",
    "titleEn": "Calculating Shunt Resistance for Ammeter (32)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 32] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_33",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (33)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 33] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_34",
    "titleEn": "Ohmmeter External Resistance Calculation (34)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 34] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_35",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (35)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "[مسألة متدرجة 35] ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_36",
    "titleEn": "Neutral Point Between Two Parallel Currents (36)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 36] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_37",
    "titleEn": "Calculating Shunt Resistance for Ammeter (37)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 37] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_38",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (38)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 38] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_39",
    "titleEn": "Ohmmeter External Resistance Calculation (39)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 39] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_40",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (40)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "[مسألة متدرجة 40] ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_41",
    "titleEn": "Neutral Point Between Two Parallel Currents (41)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 41] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_42",
    "titleEn": "Calculating Shunt Resistance for Ammeter (42)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 42] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_43",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (43)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 43] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_44",
    "titleEn": "Ohmmeter External Resistance Calculation (44)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 44] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_45",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (45)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "[مسألة متدرجة 45] ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_46",
    "titleEn": "Neutral Point Between Two Parallel Currents (46)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 46] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_47",
    "titleEn": "Calculating Shunt Resistance for Ammeter (47)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 47] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_48",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (48)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 48] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_49",
    "titleEn": "Ohmmeter External Resistance Calculation (49)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 49] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_50",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (50)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "[مسألة متدرجة 50] ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_51",
    "titleEn": "Neutral Point Between Two Parallel Currents (51)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 51] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_52",
    "titleEn": "Calculating Shunt Resistance for Ammeter (52)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 52] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_53",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (53)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 53] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_54",
    "titleEn": "Ohmmeter External Resistance Calculation (54)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 54] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  },
  {
    "id": "phys_ch2_db_medium_55",
    "titleEn": "Magnetic Dipole Moment from Maximum Torque (55)",
    "titleAr": "حساب عزم ثنائي القطب المغناطيسي (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
    "questionAr": "[مسألة متدرجة 55] ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
    "optionsEn": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "optionsAr": [
      "$12\\text{ A}\\cdot\\text{m}^2$",
      "$24\\text{ A}\\cdot\\text{m}^2$",
      "$1.2\\text{ A}\\cdot\\text{m}^2$",
      "$6\\text{ A}\\cdot\\text{m}^2$"
    ],
    "correctAnswer": "$12\\text{ A}\\cdot\\text{m}^2$",
    "correctIndex": 0,
    "hintEn": "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "hintAr": "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
    "stepByStepSolutionEn": [
      "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$.",
      "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
    "teacherTipAr": "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
  },
  {
    "id": "phys_ch2_db_medium_56",
    "titleEn": "Neutral Point Between Two Parallel Currents (56)",
    "titleAr": "نقطة التعادل بين سلكين متوازيين (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
    "questionAr": "[مسألة متدرجة 56] سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
    "optionsEn": [
      "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
      "$10\\text{ cm}$ from each wire (midpoint)",
      "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
      "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
      "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
      "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
      "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
    "correctIndex": 0,
    "hintEn": "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
    "hintAr": "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
    ],
    "teacherTipEn": "Neutral point is always closer to the wire carrying the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
  },
  {
    "id": "phys_ch2_db_medium_57",
    "titleEn": "Calculating Shunt Resistance for Ammeter (57)",
    "titleAr": "حساب مقاومة مجزئ التيار في الأميتر (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
    "questionAr": "[مسألة متدرجة 57] جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
    "optionsEn": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "optionsAr": [
      "$0.505\\,\\Omega$",
      "$5.05\\,\\Omega$",
      "$0.05\\,\\Omega$",
      "$1.25\\,\\Omega$"
    ],
    "correctAnswer": "$0.505\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
    "hintAr": "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
    ],
    "teacherTipEn": "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
    "teacherTipAr": "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
  },
  {
    "id": "phys_ch2_db_medium_58",
    "titleEn": "Calculating Voltmeter Multiplier Resistance (58)",
    "titleAr": "حساب مقاومة مضاعف الجهد للفولتميتر (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
    "questionAr": "[مسألة متدرجة 58] جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
    "optionsEn": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "optionsAr": [
      "$1980\\,\\Omega$",
      "$2000\\,\\Omega$",
      "$2020\\,\\Omega$",
      "$980\\,\\Omega$"
    ],
    "correctAnswer": "$1980\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
    "hintAr": "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
      "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_medium_59",
    "titleEn": "Ohmmeter External Resistance Calculation (59)",
    "titleAr": "حساب المقاومة الخارجية المجهولة في الأوميتر (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
    "questionAr": "[مسألة متدرجة 59] أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
    "optionsEn": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "optionsAr": [
      "$9000\\,\\Omega$",
      "$12000\\,\\Omega$",
      "$6000\\,\\Omega$",
      "$3000\\,\\Omega$"
    ],
    "correctAnswer": "$9000\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
    "hintAr": "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
    "teacherTipAr": "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
  }
],
  hots: [
  {
    "id": "phys_ch2_db_hots_01",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (1)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (1)",
    "difficulty": "hots",
    "questionEn": "A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_02",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (2)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (2)",
    "difficulty": "hots",
    "questionEn": "A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_03",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (3)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 3] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_04",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (4)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 4] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_05",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (5)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 5] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_06",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (6)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 6] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_07",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (7)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 7] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_08",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (8)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 8] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_09",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (9)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 9] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_10",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (10)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 10] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_11",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (11)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 11] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_12",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (12)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 12] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_13",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (13)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 13] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_14",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (14)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 14] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_15",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (15)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 15] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_16",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (16)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 16] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_17",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (17)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 17] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_18",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (18)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 18] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_19",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (19)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 19] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_20",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (20)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 20] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_21",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (21)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 21] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_22",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (22)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 22] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_23",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (23)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 23] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_24",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (24)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 24] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_25",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (25)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 25] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_26",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (26)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 26] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_27",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (27)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 27] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_28",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (28)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 28] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_29",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (29)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 29] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_30",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (30)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 30] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_31",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (31)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 31] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_32",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (32)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 32] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_33",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (33)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 33] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_34",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (34)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 34] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_35",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (35)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 35] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_36",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (36)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 36] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_37",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (37)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 37] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_38",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (38)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 38] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_39",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (39)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 39] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_40",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (40)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 40] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_41",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (41)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 41] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_42",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (42)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 42] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_43",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (43)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 43] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_44",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (44)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 44] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_45",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (45)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 45] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_46",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (46)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 46] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_47",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (47)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 47] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_48",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (48)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 48] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_49",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (49)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 49] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_50",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (50)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 50] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_51",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (51)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 51] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_52",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (52)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 52] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_53",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (53)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 53] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_54",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (54)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 54] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_55",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (55)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 55] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_56",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (56)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 56] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_hots_57",
    "titleEn": "Equilibrium of Suspended Wire in Magnetic Field (57)",
    "titleAr": "اتزان سلك معلق حراً في مجال مغناطيسي (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
    "questionAr": "[مسألة متدرجة 57] سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
    "optionsEn": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "optionsAr": [
      "$0.1\\text{ T}$",
      "$0.05\\text{ T}$",
      "$0.2\\text{ T}$",
      "$0.4\\text{ T}$"
    ],
    "correctAnswer": "$0.1\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
    "hintAr": "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
      "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التعليق: $F = F_g \\implies B I L = m g$.",
      "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
    ],
    "teacherTipEn": "Fleming's left-hand rule determines the required direction of current and magnetic field.",
    "teacherTipAr": "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
  },
  {
    "id": "phys_ch2_db_hots_58",
    "titleEn": "Superposition of Solenoid and Circular Coil Fields (58)",
    "titleAr": "تراكب مجالي ملف لولبي وملف دائري (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
    "questionAr": "[مسألة متدرجة 58] ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
    "optionsEn": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "optionsAr": [
      "$0.05\\text{ T}$",
      "$0.07\\text{ T}$",
      "$0.01\\text{ T}$",
      "$0.12\\text{ T}$"
    ],
    "correctAnswer": "$0.05\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
    ],
    "teacherTipEn": "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
    "teacherTipAr": "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
  }
]
};
