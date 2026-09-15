import type { ChapterDatabank } from '../../../types/curriculum';

export const physCh4Databank: ChapterDatabank = {
  easy: [
  {
    "id": "phys_ch4_db_easy_01",
    "titleEn": "Scientific Principle of Hot-Wire Ammeter",
    "titleAr": "فكرة عمل الأميتر الحراري",
    "difficulty": "easy",
    "questionEn": "The scientific operating principle of the hot-wire ammeter is based on:",
    "questionAr": "الأساس العلمي الذي يُبنى عليه عمل الأميتر الحراري هو:",
    "optionsEn": [
      "The Joule heating effect of electric current ($Q = I^2 R t$)",
      "The magnetic torque acting on a current-carrying coil",
      "Electromagnetic induction in a rotating conductor",
      "The photoelectric emission of electrons"
    ],
    "optionsAr": [
      "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
      "عزم الازدواج المغناطيسي المؤثر على ملف يمر به تيار",
      "الحث الكهرومغناطيسي في موصل متحرك",
      "الانبعاث الكهروضوئي للإلكترونات"
    ],
    "correctAnswer": "The Joule heating effect of electric current ($Q = I^2 R t$)",
    "correctIndex": 0,
    "hintEn": "Hot-wire ammeter measures current by heat produced in a platinum-iridium wire.",
    "hintAr": "يقيس الأميتر الحراري شدة التيار بالتمدد الناتج عن تسخين سلك البلاتين والإيريديوم.",
    "stepByStepSolutionEn": [
      "The hot-wire ammeter operates on the thermal effect of electric current. When current flows through the platinum-iridium wire, it dissipates Joule heat ($Q = I^2 R t$), causing the wire to expand and sag, rotating a pulley and pointer."
    ],
    "stepByStepSolutionAr": [
      "يعتمد عمل الأميتر الحراري على التأثير الحراري للتيار الكهربي، حيث تتولد في سلك البلاتين والإيريديوم كمية من الحرارة طبقاً لقانون جول ($Q = I^2 R t$) تؤدي إلى تمدد السلك وارتخائه، فتحركه خيط الحرير والبكرة مشيرة إلى شدة التيار."
    ],
    "teacherTipEn": "Because heat $\\propto I^2$, the hot-wire ammeter works for both AC and DC.",
    "teacherTipAr": "لأن التأثير الحراري يعتمد على مربع شدة التيار، يصلح الأميتر الحراري لقياس كل من التيار المستمر والمتردد."
  },
  {
    "id": "phys_ch4_db_easy_02",
    "titleEn": "Why Hot-Wire Ammeter Measures Both AC and DC",
    "titleAr": "سبب صلاحية الأميتر الحراري لقياس التيارين المتردد والمستمر",
    "difficulty": "easy",
    "questionEn": "The hot-wire ammeter can measure the intensity of both direct current (DC) and alternating current (AC) because:",
    "questionAr": "يصلح الأميتر الحراري لقياس شدة كل من التيار المستمر والتيار المتردد لأن:",
    "optionsEn": [
      "The magnetic torque reverses synchronously with the AC frequency",
      "The thermal heating effect of current depends on the square of current ($I^2$) and is independent of the direction of current flow",
      "The hot wire has zero electrical resistance to both types of current",
      "The scale of the instrument is perfectly linear for all waveforms"
    ],
    "optionsAr": [
      "عزم الازدواج المغناطيسي ينعكس متزامناً مع تردد التيار المتردد",
      "التأثير الحراري للتيار يتوقف على مربع شدة التيار ($I^2$) ولا يتأثر باتجاه سريان التيار",
      "سلك الأميتر الحراري مقاومته الأومية صفر لكلا التيارين",
      "تدريج الجهاز منتظم تماماً لجميع الموجات"
    ],
    "correctAnswer": "The thermal heating effect of current depends on the square of current ($I^2$) and is independent of the direction of current flow",
    "correctIndex": 1,
    "hintEn": "Heat generated is $Q \\propto I^2$. Whether $I$ is positive or negative, $I^2$ is always positive.",
    "hintAr": "الحرارة المتولدة تتناسب مع $I^2$، ومربع التيار موجب دائماً سواء كان التيار موجباً أو سالباً.",
    "stepByStepSolutionEn": [
      "Thermal energy depends on $I^2 R t$. Since $(-I)^2 = (+I)^2$, heat is always produced in the conductor regardless of the current's direction. Thus, an alternating current heats the wire just like a steady direct current of the same effective value."
    ],
    "stepByStepSolutionAr": [
      "كمية الحرارة المتولدة في الموصل تعتمد على مربع شدة التيار ($I^2$). وبما أن $(-I)^2 = (+I)^2$، فإن الطاقة الحرارية تتولد دائماً بصرف النظر عن اتجاه سريان الشحنات. ولذلك يولد التيار المتردد نفس الأثر الحراري الذي يولده تيار مستمر مساوٍ له في القيمة الفعالة."
    ],
    "teacherTipEn": "Moving-coil galvanometers fail for AC because torque reverses; hot-wire ammeters succeed because heat never reverses.",
    "teacherTipAr": "الجلفانومتر ذو الملف المتحرك يفشل مع المتردد لانعكاس العزم؛ بينما ينجح الحراري لأن الحرارة موجبة دائماً."
  },
  {
    "id": "phys_ch4_db_easy_03",
    "titleEn": "Material of the Hot Wire in the Ammeter",
    "titleAr": "مادة السلك المتمدد في الأميتر الحراري",
    "difficulty": "easy",
    "questionEn": "The stretched wire in a hot-wire ammeter is made of a platinum-iridium alloy because:",
    "questionAr": "يُصنع السلك المشدود في الأميتر الحراري من سبيكة البلاتين والإيريديوم لأنها:",
    "optionsEn": [
      "Is a superconductor with zero electrical resistivity at room temperature",
      "Is strongly ferromagnetic to enhance magnetic deflection",
      "Expands noticeably upon slight heating, has a high melting point, and does not oxidize easily",
      "Has zero thermal expansion coefficient under all conditions"
    ],
    "optionsAr": [
      "موصل فائق التوصيل منعدم المقاومة عند درجة حرارة الغرفة",
      "مادة فيرومغناطيسية قوية لزيادة الانحراف المغناطيسي",
      "تتمدد بمقدار محسوس عند ارتفاع حرارتها بدرجة طفيفة، ولها درجة انصهار عالية ولا تتأكسد بسهولة",
      "معامل تمددها الحراري صفر في جميع الظروف"
    ],
    "correctAnswer": "Expands noticeably upon slight heating, has a high melting point, and does not oxidize easily",
    "correctIndex": 2,
    "hintEn": "Platinum-iridium provides noticeable expansion for measurable deflection.",
    "hintAr": "البلاتين والإيريديوم يعطي تمدداً ملحوظاً بدقة عند مرور التيار.",
    "stepByStepSolutionEn": [
      "Platinum-iridium is chosen because it exhibits a large, uniform coefficient of thermal expansion, ensuring noticeable elongation for measurable currents, possesses high tensile strength, high melting point, and does not oxidize in air."
    ],
    "stepByStepSolutionAr": [
      "اختيرت سبيكة البلاتين والإيريديوم لأن معامل تمددها الحراري ملحوظ ومنتظم مما يعطي استطالة كافية لانحراف المؤشر، فضلاً عن تحملها لدرجات الحرارة العالية ومقاومتها للأكسدة في الهواء."
    ],
    "teacherTipEn": "Pure platinum is too soft, so iridium is alloyed with it to provide mechanical strength.",
    "teacherTipAr": "البلاتين النقي لين، ولذا يُخلط مع الإيريديوم لإكسابه الصلابة والمتانة الميكانيكية."
  },
  {
    "id": "phys_ch4_db_easy_04",
    "titleEn": "Why Hot-Wire Ammeter Scale is Non-Uniform (Non-Linear)",
    "titleAr": "سبب عدم انتظام تدريج الأميتر الحراري",
    "difficulty": "easy",
    "questionEn": "The scale of a hot-wire ammeter is non-uniform (crowded at the beginning and widely spaced at higher values) because:",
    "questionAr": "تدريج الأميتر الحراري غير منتظم (تتقارب أقسامه في البداية وتتباعد عند القيم الكبيرة) لأن:",
    "optionsEn": [
      "The spring exerts a variable restoring torque proportional to $\\sqrt{\\theta}$",
      "The resistance of the platinum wire decreases as it warms up",
      "The magnetic field inside the casing is non-uniform",
      "The thermal energy generated per second is directly proportional to the SQUARE of the electric current ($Q \\propto I^2$)"
    ],
    "optionsAr": [
      "زنبرك الشد يولد عزم ازدواج يتناسب مع $\\sqrt{\\theta}$",
      "مقاومة سلك البلاتين تقل عند ارتفاع حرارته",
      "المجال المغناطيسي داخل الجهاز غير منتظم",
      "كمية الحرارة المتولدة في الثانية الواحدة تتناسب طردياً مع مربع شدة التيار ($Q \\propto I^2$)"
    ],
    "correctAnswer": "The thermal energy generated per second is directly proportional to the SQUARE of the electric current ($Q \\propto I^2$)",
    "correctIndex": 3,
    "hintEn": "Joule heat $P \\propto I^2 \\implies \\theta \\propto I^2$.",
    "hintAr": "الطاقة الحرارية $P \\propto I^2$، وبالتالي فإن زاوية الانحراف تتناسب مع مربع التيار $\\theta \\propto I^2$.",
    "stepByStepSolutionEn": [
      "The elongation of the wire and the resulting angular deflection of the pointer $\\theta$ are proportional to the thermal power generated: $\\theta \\propto I^2$. If current doubles ($2I$), deflection quadruples ($4\\theta$); if current triples ($3I$), deflection becomes 9 times ($9\\theta$)."
    ],
    "stepByStepSolutionAr": [
      "يتناسب مقدار تمدد السلك وزاوية انحراف المؤشر $\\theta$ مع كمية الحرارة المتولدة في الثانية، والتي تتناسب طردياً مع مربع شدة التيار ($\\theta \\propto I^2$). فإذا زادت شدة التيار للضعف، زادت زاوية الانحراف إلى أربعة أمثالها، فتتباعد الأقسام كلما زادت شدة التيار."
    ],
    "teacherTipEn": "Contrast: Moving-coil galvanometer has a linear scale ($\\theta \\propto I$); Hot-wire ammeter has a quadratic scale ($\\theta \\propto I^2$).",
    "teacherTipAr": "مقارنة جوهرية: الجلفانومتر تدريجه منتظم ($\\theta \\propto I$)؛ بينما الأميتر الحراري تدريجه غير منتظم ($\\theta \\propto I^2$)."
  },
  {
    "id": "phys_ch4_db_easy_05",
    "titleEn": "Eliminating Zero Error in the Hot-Wire Ammeter",
    "titleAr": "التغلب على الخطأ الصفري في الأميتر الحراري",
    "difficulty": "easy",
    "questionEn": "The hot-wire ammeter suffers from a 'zero error' caused by variations in ambient atmospheric temperature. This error is overcome by:",
    "questionAr": "يعاني الأميتر الحراري من 'خطأ صفري' ناتج عن تغير درجة حرارة الجو المحيط. يتم التغلب على هذا الخطأ بـ:",
    "optionsEn": [
      "Mounting the platinum-iridium wire on a base plate having the same coefficient of thermal expansion, while insulating it electrically",
      "Immersing the entire instrument in an ice bath during operation",
      "Replacing the silk thread with a thick steel cable",
      "Using direct current only"
    ],
    "optionsAr": [
      "تثبيت سلك البلاتين والإيريديوم على لوحة لها نفس معامل تمدده الحراري مع عزله عنها كهربياً",
      "غمر الجهاز في حمام جليدي أثناء القياس",
      "استبدال خيط الحرير بكابل صلب سميك",
      "استخدام التيار المستمر فقط"
    ],
    "correctAnswer": "Mounting the platinum-iridium wire on a base plate having the same coefficient of thermal expansion, while insulating it electrically",
    "correctIndex": 0,
    "hintEn": "Plate and wire expand equally with room temperature, keeping wire taut.",
    "hintAr": "تمدد اللوحة وسلك البلاتين بنفس المقدار مع حرارة الجو يحافظ على السلك مشدوداً دون ارتخاء.",
    "stepByStepSolutionEn": [
      "When the ambient temperature rises, both the platinum-iridium wire and the mounting plate expand by the exact same amount. Because the plate expands at the same rate as the wire, the wire does not sag due to room temperature changes, keeping the pointer at zero."
    ],
    "stepByStepSolutionAr": [
      "عند ارتفاع درجة حرارة الجو، يتمدد كل من لوحة التثبيت وسلك البلاتين بنفس المقدار تماماً. وبما أن اللوحة تتمدد بنفس المعدل، فإن السلك يظل مشدوداً ولا يرتخي بفعل حرارة الجو، فلا ينحرف المؤشر ويظل ثابتاً عند الصفر."
    ],
    "teacherTipEn": "A screw is also provided for fine manual adjustment of the pointer to zero.",
    "teacherTipAr": "كما يُزود الجهاز بمسمار ضبط صفري للمعايرة اليدوية الدقيقة."
  },
  {
    "id": "phys_ch4_db_easy_06",
    "titleEn": "Role of the Shunt Resistor in a Hot-Wire Ammeter",
    "titleAr": "وظيفة مجزئ التيار في الأميتر الحراري",
    "difficulty": "easy",
    "questionEn": "A low-resistance shunt resistor ($R_s$) is connected in parallel with the platinum-iridium wire in a hot-wire ammeter to:",
    "questionAr": "تتصل مقاومة صغيرة على التوازي (مجزئ تيار $R_s$) بسلك البلاتين والإيريديوم في الأميتر الحراري لـ:",
    "optionsEn": [
      "Convert the ammeter into a high-resistance voltmeter",
      "Increase the measuring range of the ammeter and protect the platinum wire from melting by shunting most of the current",
      "Eliminate all thermal heating completely",
      "Make the scale linear"
    ],
    "optionsAr": [
      "تحويل الأميتر إلى فولتميتر عالي المقاومة",
      "زيادة مدى قياس شدة التيار للأميتر وحماية سلك البلاتين من الانصهار بمرور معظم التيار في المجزئ",
      "إلغاء التأثير الحراري تماماً",
      "جعل التدريج منتظماً"
    ],
    "correctAnswer": "Increase the measuring range of the ammeter and protect the platinum wire from melting by shunting most of the current",
    "correctIndex": 1,
    "hintEn": "Same function as the shunt resistor in a DC moving-coil ammeter.",
    "hintAr": "نفس وظيفة مجزئ التيار في أميتر التيار المستمر ذي الملف المتحرك.",
    "stepByStepSolutionEn": [
      "The platinum-iridium wire is very thin and cannot carry large currents without melting. Connecting a low-resistance shunt in parallel directs the majority of the current through the shunt, protecting the wire and scaling up the device's measurement capacity."
    ],
    "stepByStepSolutionAr": [
      "سلك البلاتين والإيريديوم رفيع ومقاومته تتأثر بالتيارات الكبيرة التي قد تسبب انصهاره. توصيل مجزئ تيار ذي مقاومة صغيرة على التوازي يسمح بمرور الجزء الأكبر من التيار في المجزئ، فيحمي السلك ويزيد من مدى قياس الجهاز لتيارات أكبر."
    ],
    "teacherTipEn": "Shunt protects wire and increases measurement range.",
    "teacherTipAr": "مجزئ التيار يحمي السلك ويزيد مدى القياس."
  },
  {
    "id": "phys_ch4_db_easy_07",
    "titleEn": "AC Circuit with Pure Ohmic Resistance (R)",
    "titleAr": "دائرة تيار متردد تحتوي على مقاومة أومية عديمة الحث فقط",
    "difficulty": "easy",
    "questionEn": "In an alternating current circuit containing ONLY a pure ohmic resistor ($R$):",
    "questionAr": "في دائرة تيار متردد تحتوي على مقاومة أومية عديمة الحث فقط ($R$):",
    "optionsEn": [
      "Voltage leads current by a phase angle of $90^\\circ$",
      "Voltage lags behind current by a phase angle of $90^\\circ$",
      "The alternating voltage and electric current are in phase ($\\phi = 0^\\circ$)",
      "Current is completely blocked"
    ],
    "optionsAr": [
      "يتقدم فرق الجهد على التيار بزاوية طور $90^\\circ$",
      "يتأخر فرق الجهد عن التيار بزاوية طور $90^\\circ$",
      "يتفق فرق الجهد والتيار المتردد في الطور تماماً ($\\phi = 0^\\circ$)",
      "ينقطع التيار تماماً"
    ],
    "correctAnswer": "The alternating voltage and electric current are in phase ($\\phi = 0^\\circ$)",
    "correctIndex": 2,
    "hintEn": "Ohm's law $v = i R$ holds at every instant with no phase delay.",
    "hintAr": "قانون أوم اللحظي $v = i R$ ينطبق في كل لحظة، فيصلان للصفر والعظمى معاً.",
    "stepByStepSolutionEn": [
      "In a pure resistor, the instantaneous voltage is $v(t) = V_{\\max} \\sin(\\omega t)$, and current is $i(t) = \\frac{v(t)}{R} = \\frac{V_{\\max}}{R} \\sin(\\omega t) = I_{\\max} \\sin(\\omega t)$. Both voltage and current reach zero and peak values simultaneously, so the phase angle $\\phi = 0^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "في المقاومة الأومية النقية، يكون الجهد اللحظي $v(t) = V_{\\max} \\sin(\\omega t)$ والتيار اللحظي $i(t) = I_{\\max} \\sin(\\omega t)$. يصل الجهد والتيار إلى الصفر معاً وإلى القيمة العظمى معاً، وبالتالي يكون فرق الطور بينهما صفراً ($\\phi = 0$)."
    ],
    "teacherTipEn": "Pure R: Voltage and current are completely in phase ($\\phi = 0$).",
    "teacherTipAr": "في المقاومة الأومية النقية: الجهد والتيار متفقان في الطور ($\\phi = 0$)."
  },
  {
    "id": "phys_ch4_db_easy_08",
    "titleEn": "Dependence of Ohmic Resistance on AC Frequency",
    "titleAr": "علاقة المقاومة الأومية بتردد التيار المتردد",
    "difficulty": "easy",
    "questionEn": "If the rotational frequency of the AC dynamo powering a pure ohmic resistor is tripled, the ohmic resistance of the resistor ($R$):",
    "questionAr": "إذا زاد تردد دوران دينامو يغذي مقاومة أومية عديمة الحث إلى ثلاثة أمثاله، فإن قيمة المقاومة الأومية ($R$):",
    "optionsEn": [
      "Triples to $3R$",
      "Decreases to one-third ($R/3$)",
      "Increases by nine times ($9R$)",
      "Remains constant (independent of frequency)"
    ],
    "optionsAr": [
      "تزداد إلى ثلاثة أمثالها ($3R$)",
      "تقل إلى الثلث ($R/3$)",
      "تزداد إلى تسعة أمثالها ($9R$)",
      "تظل ثابتة لا تتغير (لا تعتمد على التردد)"
    ],
    "correctAnswer": "Remains constant (independent of frequency)",
    "correctIndex": 3,
    "hintEn": "$R = \\rho_e \\frac{L}{A}$. Resistance depends on material and geometry, not frequency.",
    "hintAr": "$R = \\rho_e \\frac{L}{A}$ تعتمد على نوع المادة والأبعاد الهندسية والحرارة، ولا تعتمد على التردد.",
    "stepByStepSolutionEn": [
      "Ohmic resistance is determined solely by the conductor's material resistivity ($\\rho_e$), length ($L$), cross-sectional area ($A$), and temperature. It is strictly independent of AC frequency ($f$)."
    ],
    "stepByStepSolutionAr": [
      "تتوقف المقاومة الأومية على المقاومة النوعية لمادة الموصل وطوله ومساحة مقطعه ودرجة حرارته ($R = \\rho_e \\frac{L}{A}$)، ولا تتأثر إطلاقاً بتردد التيار المتردد المار فيها."
    ],
    "teacherTipEn": "However, the current $I = V/R$ will triple because dynamo voltage $V \\propto f$ triples!",
    "teacherTipAr": "انتبه: شدة التيار ستزداد للثلاثة أمثال لأن جهد الدينامو يتناسب طردياً مع التردد $V \\propto f$!"
  },
  {
    "id": "phys_ch4_db_easy_09",
    "titleEn": "AC Circuit with Pure Inductor (L)",
    "titleAr": "دائرة تيار متردد تحتوي على ملف حث عديم المقاومة الأومية",
    "difficulty": "easy",
    "questionEn": "In an alternating current circuit containing ONLY a pure inductor ($L$, zero ohmic resistance):",
    "questionAr": "في دائرة تيار متردد تحتوي على ملف حث نقي عديم المقاومة الأومية ($L$):",
    "optionsEn": [
      "The alternating voltage leads the electric current by a phase angle of $90^\\circ$ ($\\phi = \\frac{\\pi}{2}$)",
      "The electric current leads the voltage by $90^\\circ$",
      "Voltage and current are in phase",
      "The phase difference is $180^\\circ$"
    ],
    "optionsAr": [
      "يتقدم فرق الجهد المتردد على التيار بزاوية طور مقدارها $90^\\circ$ ($\\phi = \\frac{\\pi}{2}$)",
      "يتقدم التيار على فرق الجهد بزاوية طور $90^\\circ$",
      "يتفق الجهد والتيار في الطور",
      "فرق الطور بينهما $180^\\circ$"
    ],
    "correctAnswer": "The alternating voltage leads the electric current by a phase angle of $90^\\circ$ ($\\phi = \\frac{\\pi}{2}$)",
    "correctIndex": 0,
    "hintEn": "Self-induced EMF opposes current growth, causing current to lag.",
    "hintAr": "القوة الدافعة المستحثة الذاتية تعطل نمو التيار فيتأخر عن الجهد بربع دورة.",
    "stepByStepSolutionEn": [
      "In an inductor, current is driven by changing voltage: $v_L(t) = L \\frac{di}{dt}$. If $i(t) = I_{\\max} \\sin(\\omega t)$, then $v_L(t) = L \\omega I_{\\max} \\cos(\\omega t) = V_{\\max} \\sin(\\omega t + 90^\\circ)$. Thus, voltage leads current by a quarter period ($90^\\circ$ or $\\pi/2$)."
    ],
    "stepByStepSolutionAr": [
      "في ملف الحث النقي، يرتبط الجهد بمعدل تغير التيار $v_L = L \\frac{di}{dt}$. فإذا كان التيار $i = I_{\\max} \\sin(\\omega t)$، فإن الجهد يسبقه جيبياً: $v_L = V_{\\max} \\sin(\\omega t + 90^\\circ)$. أي أن فرق الجهد يتقدم على التيار بزاوية طور $90^\\circ$ (ربع دورة)."
    ],
    "teacherTipEn": "Mnemonic 'ELI': in an Inductor (L), Voltage (E) leads Current (I).",
    "teacherTipAr": "قاعدة: في ملف الحث (L)، الجهد يسبق التيار بربع دورة ($90^\\circ$)."
  },
  {
    "id": "phys_ch4_db_easy_10",
    "titleEn": "Formula for Inductive Reactance (XL)",
    "titleAr": "قانون المفاعلة الحثية لملف الحث",
    "difficulty": "easy",
    "questionEn": "The inductive reactance ($X_L$) of a coil of self-inductance $L$ connected to an AC source of frequency $f$ is given by:",
    "questionAr": "تُحسب المفاعلة الحثية ($X_L$) لملف معامل حثه الذاتي $L$ متصل بمصدر تيار متردد تردده $f$ بالعلاقة:",
    "optionsEn": [
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = 2\\pi f^2 L$",
      "$X_L = \\frac{L}{2\\pi f}$"
    ],
    "optionsAr": [
      "$X_L = \\frac{1}{2\\pi f L}$",
      "$X_L = 2\\pi f L = \\omega L$",
      "$X_L = 2\\pi f^2 L$",
      "$X_L = \\frac{L}{2\\pi f}$"
    ],
    "correctAnswer": "$X_L = 2\\pi f L = \\omega L$",
    "correctIndex": 1,
    "hintEn": "$X_L = \\omega L$ where $\\omega = 2\\pi f$.",
    "hintAr": "$X_L = \\omega L$ والسرعة الزاوية $\\omega = 2\\pi f$.",
    "stepByStepSolutionEn": [
      "Inductive reactance represents the opposition that an inductor offers to the flow of AC current due to its self-inductance: $X_L = 2\\pi f L = \\omega L$. It is measured in Ohms ($\\Omega$)."
    ],
    "stepByStepSolutionAr": [
      "المفاعلة الحثية هي الممانعة التي يلقاها التيار المتردد في ملف بسبب حثه الذاتي، وتُعطى بالعلاقة: $X_L = 2\\pi f L = \\omega L$. وتُقاس بوحدة الأوم ($\\Omega$)."
    ],
    "teacherTipEn": "$X_L \\propto f$ and $X_L \\propto L$. Directly proportional to both frequency and inductance.",
    "teacherTipAr": "تتناسب $X_L$ طردياً مع كل من تردد التيار ومعامل الحث الذاتي للملف."
  },
  {
    "id": "phys_ch4_db_easy_11",
    "titleEn": "Power Dissipated in a Pure Inductor",
    "titleAr": "القدرة المستهلكة في ملف حث نقي",
    "difficulty": "easy",
    "questionEn": "The average electrical power consumed (dissipated as heat) in a pure inductor coil of zero ohmic resistance connected to an AC source is:",
    "questionAr": "متوسط القدرة الكهربية المستهلكة (المفقودة في صورة حرارة) في ملف حث نقي عديم المقاومة الأومية متصل بمصدر تيار متردد تساوي:",
    "optionsEn": [
      "$I_{\\text{eff}}^2 X_L$",
      "$V_{\\text{eff}} I_{\\text{eff}}$",
      "Zero ($P = 0$)",
      "$\\frac{1}{2} L I_{\\max}^2$"
    ],
    "optionsAr": [
      "$I_{\\text{eff}}^2 X_L$",
      "$V_{\\text{eff}} I_{\\text{eff}}$",
      "صفراً ($P = 0$)",
      "$\\frac{1}{2} L I_{\\max}^2$"
    ],
    "correctAnswer": "Zero ($P = 0$)",
    "correctIndex": 2,
    "hintEn": "Inductor stores energy as magnetic field and returns it back to the circuit.",
    "hintAr": "يختزن الملف الطاقة في صورة مجال مغناطيسي ثم يعيدها كاملة للدائرة في الربع التالي.",
    "stepByStepSolutionEn": [
      "In a pure inductor, electrical energy is converted into magnetic field energy during one quarter cycle ($\\frac{1}{2} L I^2$) and returned completely back to the source during the next quarter cycle. Because the phase angle $\\phi = 90^\\circ$, the power factor is $\\cos 90^\\circ = 0$, so average power consumed is $P = V_{\\text{eff}} I_{\\text{eff}} \\cos 90^\\circ = 0\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "في ملف الحث النقي لا تُستهلك أي طاقة كهربية في صورة حرارة؛ حيث تُختزن الطاقة الكهربية في صورة مجال مغناطيسي خلال ربع دورة، ثم تُعاد بالكامل إلى المصدر في ربع الدورة التالي. ولأن فرق الطور $90^\\circ$ فإن عامل القدرة $\\cos 90^\\circ = 0$، ويكون متوسط القدرة المستهلكة مساوياً للصفر."
    ],
    "teacherTipEn": "Inductors and capacitors store and exchange energy, but NEVER dissipate power as heat.",
    "teacherTipAr": "ملفات الحث والمكثفات تخزن الطاقة وتتبادلها، لكنها لا تستهلك أي طاقة حرارية إطلاقاً."
  },
  {
    "id": "phys_ch4_db_easy_12",
    "titleEn": "Behavior of Pure Inductor with Direct Current (DC)",
    "titleAr": "سلوك ملف الحث مع التيار المستمر",
    "difficulty": "easy",
    "questionEn": "When a pure inductor of zero ohmic resistance is connected to a DC source (battery), after a steady state is reached, the coil acts as:",
    "questionAr": "عند توصيل ملف حث نقي مهمل المقاومة الأومية بمصدر تيار مستمر (بطارية)، بعد استقرار التيار فإن الملف يتصرف كـ:",
    "optionsEn": [
      "An open circuit (infinite resistance, blocking current completely)",
      "A high-value resistor",
      "A generator of alternating EMF",
      "A short circuit (zero resistance wire, $X_L = 0$)"
    ],
    "optionsAr": [
      "مفتاح مفتوح يمنع مرور التيار تماماً",
      "مقاومة أومية كبيرة جداً",
      "مولد للتيار المتردد",
      "سلك عديم المقاومة (دائرة مغلقة مقاومتها صفر ومفاعلتها الحثية صفر)"
    ],
    "correctAnswer": "A short circuit (zero resistance wire, $X_L = 0$)",
    "correctIndex": 3,
    "hintEn": "For DC, frequency is zero ($f = 0$).",
    "hintAr": "للتيار المستمر التردد يساوي صفراً ($f = 0$).",
    "stepByStepSolutionEn": [
      "For direct current, frequency $f = 0$. Therefore, the inductive reactance is $X_L = 2\\pi (0) L = 0\\,\\Omega$. In the steady state, the inductor offers zero opposition to DC, acting as a simple connecting wire of zero resistance."
    ],
    "stepByStepSolutionAr": [
      "تردد التيار المستمر يساوي صفراً ($f = 0$). وبالتالي تكون المفاعلة الحثية $X_L = 2\\pi (0) L = 0$. وبعد استقرار التيار لا يلقى التيار المستمر أي ممانعة حثية ويتصرف الملف كسلك توصيل عديم المقاومة."
    ],
    "teacherTipEn": "Inductor passes DC with zero reactance, but opposes AC.",
    "teacherTipAr": "الملف يمرر التيار المستمر دون أي مفاعلة، بينما يمانع التيار المتردد."
  },
  {
    "id": "phys_ch4_db_easy_13",
    "titleEn": "Behavior of Pure Inductor at Extremely High AC Frequencies",
    "titleAr": "سلوك ملف الحث عند الترددات العالية جداً",
    "difficulty": "easy",
    "questionEn": "At extremely high alternating frequencies ($f \\to \\infty$), a coil with significant self-inductance acts as:",
    "questionAr": "عند الترددات العالية جداً للتيار المتردد ($f \\to \\infty$)، فإن ملف الحث يتصرف كـ:",
    "optionsEn": [
      "An open circuit (infinite inductive reactance, cutting off current)",
      "A pure short circuit of zero reactance",
      "A capacitor of infinite capacitance",
      "A constant voltage source"
    ],
    "optionsAr": [
      "مفتاح مفتوح (دائرة مفتوحة لمفاعلتها الحثية الهائلة التي تكاد تقطع التيار)",
      "سلك عديم المقاومة تماماً",
      "مكثف فائق السعة",
      "مصدر جهد ثابت"
    ],
    "correctAnswer": "An open circuit (infinite inductive reactance, cutting off current)",
    "correctIndex": 0,
    "hintEn": "$X_L = 2\\pi f L$. As $f \\to \\infty$, $X_L \\to \\infty$.",
    "hintAr": "$X_L = 2\\pi f L$، عندما يقترب التردد من اللانهاية تقترب المفاعلة من اللانهاية.",
    "stepByStepSolutionEn": [
      "Since $X_L = 2\\pi f L$, inductive reactance is directly proportional to frequency. When $f$ becomes extremely large, $X_L$ grows to millions of ohms, reducing current to nearly zero ($I \\approx 0$). The coil effectively blocks high frequencies, functioning as an open switch or 'choke'."
    ],
    "stepByStepSolutionAr": [
      "بما أن $X_L = 2\\pi f L$، فإن المفاعلة الحثية تتناسب طردياً مع التردد. وعند الترددات العالية جداً تصبح $X_L$ كبيرة جداً وتكاد تنعدم شدة التيار المار، فيتصرف ملف الحث كدائرة مفتوحة (خانق للتيار عالي التردد)."
    ],
    "teacherTipEn": "Inductor blocks high frequencies; capacitor blocks zero frequency (DC).",
    "teacherTipAr": "الملف يمنع الترددات العالية؛ بينما المكثف يمنع التردد صفر (التيار المستمر)."
  },
  {
    "id": "phys_ch4_db_easy_14",
    "titleEn": "AC Circuit with Pure Capacitor (C)",
    "titleAr": "دائرة تيار متردد تحتوي على مكثف نقي فقط",
    "difficulty": "easy",
    "questionEn": "In an alternating current circuit containing ONLY a pure capacitor ($C$):",
    "questionAr": "في دائرة تيار متردد تحتوي على مكثف نقي فقط ($C$):",
    "optionsEn": [
      "The alternating voltage leads the current by $90^\\circ$",
      "The electric current leads the alternating voltage by a phase angle of $90^\\circ$ ($\\phi = -90^\\circ$)",
      "Voltage and current are in phase",
      "The phase angle is $45^\\circ$"
    ],
    "optionsAr": [
      "يتقدم فرق الجهد على التيار بزاوية طور $90^\\circ$",
      "يتقدم التيار المتردد على فرق الجهد بزاوية طور مقدارها $90^\\circ$ (أو يتأخر الجهد عن التيار بربع دورة)",
      "يتفق الجهد والتيار في الطور",
      "زاوية الطور بينهما $45^\\circ$"
    ],
    "correctAnswer": "The electric current leads the alternating voltage by a phase angle of $90^\\circ$ ($\\phi = -90^\\circ$)",
    "correctIndex": 1,
    "hintEn": "Capacitor must charge first: charge and voltage follow current.",
    "hintAr": "المكثف يتطلب مرور شحنات أولاً (تيار) حتى يرتفع جهده، فالتيار يسبق الجهد بربع دورة.",
    "stepByStepSolutionEn": [
      "The charge on a capacitor is $q(t) = C v(t)$. The current is the time derivative of charge: $i(t) = \\frac{dq}{dt} = C \\frac{dv}{dt}$. If $v(t) = V_{\\max} \\sin(\\omega t)$, then $i(t) = \\omega C V_{\\max} \\cos(\\omega t) = I_{\\max} \\sin(\\omega t + 90^\\circ)$. Thus, current leads voltage by $90^\\circ$ (or voltage lags behind current by $90^\\circ$)."
    ],
    "stepByStepSolutionAr": [
      "تتراكم الشحنة على لوحي المكثف $q = C v$، ويكون التيار هو المعدل الزمني لتدفق الشحنات $i = \\frac{dq}{dt} = C \\frac{dv}{dt}$. فإذا كان الجهد $v = V_{\\max} \\sin(\\omega t)$، فإن التيار يسبقه جيبياً: $i = I_{\\max} \\sin(\\omega t + 90^\\circ)$. أي أن التيار يتقدم على فرق الجهد بربع دورة ($90^\\circ$)."
    ],
    "teacherTipEn": "Mnemonic 'ICE': in a Capacitor (C), Current (I) leads Voltage (E).",
    "teacherTipAr": "قاعدة: في المكثف (C)، التيار يسبق فرق الجهد بربع دورة ($90^\\circ$)."
  },
  {
    "id": "phys_ch4_db_easy_15",
    "titleEn": "Formula for Capacitive Reactance (XC)",
    "titleAr": "قانون المفاعلة السعوية للمكثف",
    "difficulty": "easy",
    "questionEn": "The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ connected to an alternating source of frequency $f$ is given by:",
    "questionAr": "تُحسب المفاعلة السعوية ($X_C$) لمكثف سعته $C$ متصل بمصدر تيار متردد تردده $f$ بالعلاقة:",
    "optionsEn": [
      "$X_C = 2\\pi f C = \\omega C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = \\frac{1}{2\\pi f^2 C}$"
    ],
    "optionsAr": [
      "$X_C = 2\\pi f C = \\omega C$",
      "$X_C = \\frac{2\\pi f}{C}$",
      "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
      "$X_C = \\frac{1}{2\\pi f^2 C}$"
    ],
    "correctAnswer": "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
    "correctIndex": 2,
    "hintEn": "Inversely proportional to both frequency and capacitance.",
    "hintAr": "تتناسب المفاعلة السعوية عكسياً مع كل من التردد والسعة.",
    "stepByStepSolutionEn": [
      "Capacitive reactance is the opposition that a capacitor offers to the flow of alternating current due to its capacitance: $X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$. Its unit is the Ohm ($\\Omega$)."
    ],
    "stepByStepSolutionAr": [
      "المفاعلة السعوية هي الممانعة التي يلقاها التيار المتردد في مكثف بسبب سعته الكهربية، وتُعطى بالعلاقة: $X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$. وتُقاس بوحدة الأوم ($\\Omega$)."
    ],
    "teacherTipEn": "$X_C \\propto \\frac{1}{f}$ and $X_C \\propto \\frac{1}{C}$.",
    "teacherTipAr": "$X_C$ تتناسب عكسياً مع التردد والسعة."
  },
  {
    "id": "phys_ch4_db_easy_16",
    "titleEn": "Behavior of Pure Capacitor with Direct Current (DC)",
    "titleAr": "سلوك المكثف مع التيار المستمر",
    "difficulty": "easy",
    "questionEn": "When a capacitor is connected to a DC source (battery), after a brief charging period, the capacitor acts as:",
    "questionAr": "عند توصيل مكثف بمصدر تيار مستمر (بطارية)، بعد اكتمال شحنه فإن المكثف يتصرف كـ:",
    "optionsEn": [
      "A short circuit of zero resistance",
      "A step-up transformer",
      "A steady DC generator",
      "An open circuit (completely blocks DC, current drops to zero)"
    ],
    "optionsAr": [
      "سلك عديم المقاومة",
      "محول رافع للجهد",
      "مولد تيار مستمر",
      "مفتاح مفتوح (يمنع مرور التيار المستمر تماماً وينعدم التيار في الدائرة)"
    ],
    "correctAnswer": "An open circuit (completely blocks DC, current drops to zero)",
    "correctIndex": 3,
    "hintEn": "For DC, $f = 0 \\implies X_C = \\frac{1}{0} \\to \\infty$. Also, potential difference across plates equals battery EMF.",
    "hintAr": "للتيار المستمر $f = 0 \\implies X_C \\to \\infty$. كما يتساوى فرق جهد المكثف مع القوة الدافعة للبطارية ويتوقف تدفق الشحنات.",
    "stepByStepSolutionEn": [
      "For DC, frequency $f = 0 \\implies X_C = \\frac{1}{2\\pi (0) C} \\to \\infty$. When fully charged, the potential difference between the plates equals the battery EMF ($V_C = V_B$) with opposite polarity, completely stopping the flow of charge. Thus, a capacitor blocks DC."
    ],
    "stepByStepSolutionAr": [
      "تردد التيار المستمر صفر، فتكون المفاعلة السعوية لا نهائية ($X_C \\to \\infty$). وعند اكتمال شحن المكثف يتساوى فرق الجهد بين لوحيه مع القوة الدافعة الكهربية للبطارية، فينعدم فرق الجهد المحرك للشحنات ويتوقف مرور التيار تماماً، فيعمل المكثف كدائرة مفتوحة للتيار المستمر."
    ],
    "teacherTipEn": "Capacitors block DC entirely, but allow AC to pass via periodic charging and discharging.",
    "teacherTipAr": "المكثف يمنع مرور التيار المستمر تماماً، بينما يمرر التيار المتردد بعمليتي الشحن والتفريغ المتعاقبتين."
  },
  {
    "id": "phys_ch4_db_easy_17",
    "titleEn": "Behavior of Pure Capacitor at Very High Frequencies",
    "titleAr": "سلوك المكثف عند الترددات العالية جداً",
    "difficulty": "easy",
    "questionEn": "At extremely high alternating frequencies ($f \\to \\infty$), a capacitor acts as:",
    "questionAr": "عند الترددات العالية جداً للتيار المتردد ($f \\to \\infty$)، فإن المكثف يتصرف كـ:",
    "optionsEn": [
      "A short circuit (capacitive reactance drops to almost zero, $X_C \\approx 0$)",
      "An open circuit blocking current",
      "An inductor with huge reactance",
      "A direct current battery"
    ],
    "optionsAr": [
      "سلك عديم المقاومة تقريباً (تنخفض مفاعلته السعوية إلى ما يقارب الصفر $X_C \\approx 0$)",
      "مفتاح مفتوح يمنع مرور التيار",
      "ملف حث ذي مفاعلة كبيرة",
      "بطارية تيار مستمر"
    ],
    "correctAnswer": "A short circuit (capacitive reactance drops to almost zero, $X_C \\approx 0$)",
    "correctIndex": 0,
    "hintEn": "$X_C = \\frac{1}{2\\pi f C}$. As $f \\to \\infty$, $X_C \\to 0$.",
    "hintAr": "$X_C = \\frac{1}{2\\pi f C}$، عندما يؤول التردد إلى اللانهاية تؤول المفاعلة السعوية إلى الصفر.",
    "stepByStepSolutionEn": [
      "Because capacitive reactance is inversely proportional to frequency ($X_C \\propto 1/f$), as frequency approaches very large values, $X_C$ approaches zero ($X_C \\to 0$). The capacitor offers negligible opposition, allowing high-frequency AC to pass through freely like a closed switch."
    ],
    "stepByStepSolutionAr": [
      "نظراً لأن المفاعلة السعوية تتناسب عكسياً مع التردد ($X_C = \\frac{1}{2\\pi f C}$)، فعند الترددات العالية جداً تقترب المفاعلة السعوية من الصفر، فيكاد ينعدم العائق أمام مرور التيار المتردد ويتصرف المكثف كسلك توصيل مغلق عديم المقاومة تقريباً."
    ],
    "teacherTipEn": "Capacitors are used as high-pass filters (pass high frequencies, block DC/low frequencies).",
    "teacherTipAr": "يُستخدم المكثف كمرشح لتمرير الترددات العالية وحجب الترددات المنخفضة والتيار المستمر."
  },
  {
    "id": "phys_ch4_db_easy_18",
    "titleEn": "Power Dissipated in a Pure Capacitor",
    "titleAr": "القدرة المستهلكة في مكثف نقي",
    "difficulty": "easy",
    "questionEn": "The average electrical power consumed (dissipated as thermal Joule heat) in a pure capacitor connected to an alternating source is:",
    "questionAr": "متوسط القدرة الكهربية المستهلكة كحرارة في مكثف نقي متصل بمصدر تيار متردد يساوي:",
    "optionsEn": [
      "$I_{\\text{eff}}^2 X_C$",
      "Zero ($P = 0$)",
      "$V_{\\text{eff}} I_{\\text{eff}}$",
      "$\\frac{1}{2} C V_{\\max}^2$"
    ],
    "optionsAr": [
      "$I_{\\text{eff}}^2 X_C$",
      "صفراً ($P = 0$)",
      "$V_{\\text{eff}} I_{\\text{eff}}$",
      "$\\frac{1}{2} C V_{\\max}^2$"
    ],
    "correctAnswer": "Zero ($P = 0$)",
    "correctIndex": 1,
    "hintEn": "Capacitor stores energy as electric field and discharges it back.",
    "hintAr": "يختزن المكثف الطاقة في صورة مجال كهربي ويعيد تفريغها كاملة في الربع التالي.",
    "stepByStepSolutionEn": [
      "During one quarter cycle, the capacitor charges, storing electric energy in the electric field between its plates ($\\frac{1}{2} C V^2$). During the next quarter cycle, it discharges completely, returning all energy to the source. Because $\\phi = -90^\\circ$, the power factor is $\\cos(-90^\\circ) = 0$, so average power dissipated is zero."
    ],
    "stepByStepSolutionAr": [
      "يُشحن المكثف في ربع دورة مختزناً الطاقة الكهربية في صورة مجال كهربي بين لوحيه ($\\frac{1}{2} C V^2$)، ثم يُفرغ شحنته بالكامل في ربع الدورة التالي معيداً الطاقة إلى المصدر. وبما أن فرق الطور $-90^\\circ$ فإن عامل القدرة $\\cos(-90^\\circ) = 0$، ولا يُستهلك أي قدر من الطاقة في صورة حرارة ($P = 0$)."
    ],
    "teacherTipEn": "Only ohmic resistance $R$ consumes power in AC circuits.",
    "teacherTipAr": "المقاومة الأومية $R$ هي العنصر الوحيد الذي يستهلك طاقة حرارية في دوائر التيار المتردد."
  },
  {
    "id": "phys_ch4_db_easy_19",
    "titleEn": "Series Combination of Capacitors Formula",
    "titleAr": "حساب السعة الكلية لمكثفات متصلة على التوالي",
    "difficulty": "easy",
    "questionEn": "When three capacitors of capacitances $C_1, C_2, C_3$ are connected in SERIES, their equivalent capacitance ($C_{\\text{eq}}$) is calculated using:",
    "questionAr": "عند توصيل ثلاثة مكثفات سعاتها $C_1, C_2, C_3$ على التوالي، فإن سعتها المكافئة ($C_{\\text{eq}}$) تُحسب من العلاقة:",
    "optionsEn": [
      "$C_{\\text{eq}} = C_1 + C_2 + C_3$",
      "$C_{\\text{eq}} = \\frac{C_1 C_2 C_3}{C_1 + C_2 + C_3}$",
      "$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$",
      "$C_{\\text{eq}} = \\sqrt{C_1^2 + C_2^2 + C_3^2}$"
    ],
    "optionsAr": [
      "$C_{\\text{eq}} = C_1 + C_2 + C_3$",
      "$C_{\\text{eq}} = \\frac{C_1 C_2 C_3}{C_1 + C_2 + C_3}$",
      "$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$",
      "$C_{\\text{eq}} = \\sqrt{C_1^2 + C_2^2 + C_3^2}$"
    ],
    "correctAnswer": "$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$",
    "correctIndex": 2,
    "hintEn": "In series, voltages add ($V = V_1 + V_2 + V_3$), while charge $Q$ is identical.",
    "hintAr": "على التوالي يتجزأ الجهد $V = V_1 + V_2 + V_3$ وتتساوى الشحنة $Q$.",
    "stepByStepSolutionEn": [
      "Since $V = \\frac{Q}{C}$, for series: $V_{\\text{total}} = V_1 + V_2 + V_3 \\implies \\frac{Q}{C_{\\text{eq}}} = \\frac{Q}{C_1} + \\frac{Q}{C_2} + \\frac{Q}{C_3}$. Dividing by $Q$ yields $\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$. Equivalent capacitance in series is smaller than the smallest individual capacitance."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل على التوالي: الشحنة متساوية وفرق الجهد الكلي يتجزأ $V = V_1 + V_2 + V_3$. وبما أن $V = \\frac{Q}{C}$، فإن $\\frac{Q}{C_{\\text{eq}}} = \\frac{Q}{C_1} + \\frac{Q}{C_2} + \\frac{Q}{C_3}$. وبقسمة الطرفين على $Q$ نجد أن مقلوب السعة المكافئة يساوي مجموع مقلوبات السعات، وتكون السعة المكافئة أصغر من أصغر سعة مكثف في المجموعة."
    ],
    "teacherTipEn": "Notice: Capacitors in series use the parallel resistor formula, but their reactances ($X_C$) add normally: $X_{C,\\text{eq}} = X_{C1} + X_{C2} + X_{C3}$.",
    "teacherTipAr": "انتبه: سعات التوالي تُجمع كالمقاومات المتوازية، بينما مفاعلاتها السعوية $X_C$ تُجمع جمعاً جبرياً عادياً."
  },
  {
    "id": "phys_ch4_db_easy_20",
    "titleEn": "Parallel Combination of Capacitors Formula",
    "titleAr": "حساب السعة الكلية لمكثفات متصلة على التوازي",
    "difficulty": "easy",
    "questionEn": "When three capacitors of capacitances $C_1, C_2, C_3$ are connected in PARALLEL, their equivalent capacitance ($C_{\\text{eq}}$) is:",
    "questionAr": "عند توصيل ثلاثة مكثفات سعاتها $C_1, C_2, C_3$ على التوازي، فإن سعتها المكافئة ($C_{\\text{eq}}$) تساوي:",
    "optionsEn": [
      "$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$",
      "$C_{\\text{eq}} = \\frac{C_1 + C_2 + C_3}{3}$",
      "$C_{\\text{eq}} = \\sqrt{C_1 C_2 C_3}$",
      "$C_{\\text{eq}} = C_1 + C_2 + C_3$"
    ],
    "optionsAr": [
      "$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$",
      "$C_{\\text{eq}} = \\frac{C_1 + C_2 + C_3}{3}$",
      "$C_{\\text{eq}} = \\sqrt{C_1 C_2 C_3}$",
      "$C_{\\text{eq}} = C_1 + C_2 + C_3$"
    ],
    "correctAnswer": "$C_{\\text{eq}} = C_1 + C_2 + C_3$",
    "correctIndex": 3,
    "hintEn": "In parallel, voltage $V$ is identical across all capacitors, and charges add ($Q = Q_1 + Q_2 + Q_3$).",
    "hintAr": "على التوازي يتساوى فرق الجهد $V$ وتتجمع الشحنات $Q = Q_1 + Q_2 + Q_3$.",
    "stepByStepSolutionEn": [
      "Total charge is $Q_{\\text{total}} = Q_1 + Q_2 + Q_3$. Substituting $Q = C V$: $C_{\\text{eq}} V = C_1 V + C_2 V + C_3 V$. Dividing by $V$ gives $C_{\\text{eq}} = C_1 + C_2 + C_3$. Parallel connection increases the effective plate area, yielding a larger capacitance."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل على التوازي: فرق الجهد متساوٍ، والشحنة الكلية هي مجموع الشحنات: $Q = Q_1 + Q_2 + Q_3$. وبالتعويض عن $Q = C V$ نجد أن $C_{\\text{eq}} V = (C_1 + C_2 + C_3) V \\implies C_{\\text{eq}} = C_1 + C_2 + C_3$. التوصيل على التوازي يماثل زيادة المساحة الفعالة للألواح فتزداد السعة المكافئة."
    ],
    "teacherTipEn": "Parallel connection increases capacitance; series connection decreases capacitance.",
    "teacherTipAr": "التوازي يزيد السعة الكلية؛ والتوالي يقلل السعة الكلية."
  },
  {
    "id": "phys_ch4_db_easy_21",
    "titleEn": "Total Voltage in a Series RL Circuit",
    "titleAr": "فرق الجهد الكلي في دائرة RL على التوالي",
    "difficulty": "easy",
    "questionEn": "In an alternating current circuit containing a resistor $R$ and an inductor $L$ connected in series, the total source voltage ($V$) is related to $V_R$ and $V_L$ by:",
    "questionAr": "في دائرة تيار متردد تحتوي على مقاومة أومية $R$ وملف حث $L$ متصلين على التوالي، فإن فرق الجهد الكلي للمصدر ($V$) يرتبط بجهدي $V_R$ و $V_L$ بالعلاقة:",
    "optionsEn": [
      "$V = \\sqrt{V_R^2 + V_L^2}$",
      "$V = V_R + V_L$",
      "$V = V_L - V_R$",
      "$V = \\frac{V_R + V_L}{2}$"
    ],
    "optionsAr": [
      "$V = \\sqrt{V_R^2 + V_L^2}$",
      "$V = V_R + V_L$",
      "$V = V_L - V_R$",
      "$V = \\frac{V_R + V_L}{2}$"
    ],
    "correctAnswer": "$V = \\sqrt{V_R^2 + V_L^2}$",
    "correctIndex": 0,
    "hintEn": "Voltages are perpendicular vectors in the phasor diagram ($90^\\circ$ phase angle).",
    "hintAr": "الجهدان متعامدان طورياً بزاوية $90^\\circ$، فيجمعان جمعاً اتجاهياً بفيثاغورس.",
    "stepByStepSolutionEn": [
      "Because $V_R$ is in phase with current while $V_L$ leads current by $90^\\circ$, the two voltage phasors are perpendicular to each other. They cannot be added algebraically; their resultant must be calculated vectorially using Pythagoras' theorem: $V = \\sqrt{V_R^2 + V_L^2}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن جهد المقاومة $V_R$ متفق في الطور مع التيار، بينما جهد ملف الحث $V_L$ يسبق التيار بزاوية $90^\\circ$، فإن متجهي الجهدين متعامدان في المخطط الطوري. ولا يمكن جمعهما جمعاً جبرياً، بل يُجمعان جمعاً اتجاهياً وفقاً لنظرية فيثاغورس: $V = \\sqrt{V_R^2 + V_L^2}$."
    ],
    "teacherTipEn": "A classic trap: $V \\neq V_R + V_L$! Algebraic addition is strictly incorrect.",
    "teacherTipAr": "تحذير هام: $V \\neq V_R + V_L$! الجمع الجبري المباشر خاطئ لوجود فرق طور."
  },
  {
    "id": "phys_ch4_db_easy_22",
    "titleEn": "Total Impedance of a Series RL Circuit",
    "titleAr": "المعاوقة الكلية لدائرة RL على التوالي",
    "difficulty": "easy",
    "questionEn": "The total impedance ($Z$) of a series RL circuit is given by:",
    "questionAr": "تُحسب المعاوقة الكلية ($Z$) لدائرة RL متصلة على التوالي بالعلاقة:",
    "optionsEn": [
      "$Z = R + X_L$",
      "$Z = \\sqrt{R^2 + X_L^2}$",
      "$Z = X_L - R$",
      "$Z = \\frac{R X_L}{R + X_L}$"
    ],
    "optionsAr": [
      "$Z = R + X_L$",
      "$Z = \\sqrt{R^2 + X_L^2}$",
      "$Z = X_L - R$",
      "$Z = \\frac{R X_L}{R + X_L}$"
    ],
    "correctAnswer": "$Z = \\sqrt{R^2 + X_L^2}$",
    "correctIndex": 1,
    "hintEn": "Divide the voltage triangle by current $I$: $Z = \\sqrt{R^2 + X_L^2}$.",
    "hintAr": "بقسمة مثلث الجهد على شدة التيار $I$: $Z = \\sqrt{R^2 + X_L^2}$.",
    "stepByStepSolutionEn": [
      "From $V = \\sqrt{V_R^2 + V_L^2} = \\sqrt{(I R)^2 + (I X_L)^2} = I \\sqrt{R^2 + X_L^2}$, dividing by $I$ gives the total impedance: $Z = \\frac{V}{I} = \\sqrt{R^2 + X_L^2}$. Impedance is measured in Ohms ($\\Omega$)."
    ],
    "stepByStepSolutionAr": [
      "من قانون الجهد $V = \\sqrt{(I R)^2 + (I X_L)^2} = I \\sqrt{R^2 + X_L^2}$، وبقسمة الطرفين على التيار $I$ نحصل على المعاوقة الكلية: $Z = \\frac{V}{I} = \\sqrt{R^2 + X_L^2}$، وتُقاس بالأوم ($\\Omega$)."
    ],
    "teacherTipEn": "Impedance ($Z$) is the total opposition offered by an AC circuit containing resistance and reactance.",
    "teacherTipAr": "المعاوقة ($Z$) هي المكافئ الكلي للمقاومة الأومية والمفاعلة الحثية معاً."
  },
  {
    "id": "phys_ch4_db_easy_23",
    "titleEn": "Phase Angle in a Series RL Circuit",
    "titleAr": "زاوية الطور في دائرة RL على التوالي",
    "difficulty": "easy",
    "questionEn": "In a series RL circuit, the tangent of the phase angle ($\\tan\\phi$) by which the total voltage leads the electric current is:",
    "questionAr": "في دائرة RL على التوالي، ظل زاوية الطور ($\\tan\\phi$) التي يتقدم بها الجهد الكلي على التيار يُعطى بالعلاقة:",
    "optionsEn": [
      "$\\tan\\phi = \\frac{V_R}{V_L} = \\frac{R}{X_L}$",
      "$\\tan\\phi = \\frac{X_L}{Z}$",
      "$\\tan\\phi = \\frac{V_L}{V_R} = \\frac{X_L}{R}$",
      "$\\tan\\phi = \\frac{R}{Z}$"
    ],
    "optionsAr": [
      "$\\tan\\phi = \\frac{V_R}{V_L} = \\frac{R}{X_L}$",
      "$\\tan\\phi = \\frac{X_L}{Z}$",
      "$\\tan\\phi = \\frac{V_L}{V_R} = \\frac{X_L}{R}$",
      "$\\tan\\phi = \\frac{R}{Z}$"
    ],
    "correctAnswer": "$\\tan\\phi = \\frac{V_L}{V_R} = \\frac{X_L}{R}$",
    "correctIndex": 2,
    "hintEn": "In the impedance triangle: opposite is $X_L$, adjacent is $R$.",
    "hintAr": "في مثلث المعاوقة: المقابل هو المفاعلة $X_L$ والمجاور هو المقاومة $R$.",
    "stepByStepSolutionEn": [
      "In the phasor diagram, $V_L$ is on the vertical axis and $V_R$ is on the horizontal axis. Therefore, $\\tan\\phi = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{V_L}{V_R} = \\frac{I X_L}{I R} = \\frac{X_L}{R}$. The angle satisfies $0^\\circ < \\phi < 90^\\circ$, meaning total voltage leads current by $\\phi$."
    ],
    "stepByStepSolutionAr": [
      "في مخطط المتجهات الطورية يقع $V_L$ على المحور الرأسي و $V_R$ على المحور الأفقي. ويكون ظل زاوية الطور: $\\tan\\phi = \\frac{\\text{المقابل}}{\\text{المجاور}} = \\frac{V_L}{V_R} = \\frac{X_L}{R}$. وتكون الزاوية حادة موجبة ($0 < \\phi < 90^\\circ$)، مما يعني تقدم الجهد الكلي على التيار."
    ],
    "teacherTipEn": "Voltage leads by $0 < \\phi < 90^\\circ$.",
    "teacherTipAr": "الجهد الكلي يتقدم على التيار بزاوية حادة موجبة محصورة بين الصفر و $90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_24",
    "titleEn": "Total Voltage in a Series RC Circuit",
    "titleAr": "فرق الجهد الكلي في دائرة RC على التوالي",
    "difficulty": "easy",
    "questionEn": "In an alternating current circuit containing a resistor $R$ and a capacitor $C$ connected in series, the total source voltage ($V$) is:",
    "questionAr": "في دائرة تيار متردد تحتوي على مقاومة أومية $R$ ومكثف $C$ متصلين على التوالي، فإن فرق الجهد الكلي للمصدر ($V$) يُعطى بالعلاقة:",
    "optionsEn": [
      "$V = V_R - V_C$",
      "$V = V_R + V_C$",
      "$V = \\sqrt{V_R^2 - V_C^2}$",
      "$V = \\sqrt{V_R^2 + V_C^2}$"
    ],
    "optionsAr": [
      "$V = V_R - V_C$",
      "$V = V_R + V_C$",
      "$V = \\sqrt{V_R^2 - V_C^2}$",
      "$V = \\sqrt{V_R^2 + V_C^2}$"
    ],
    "correctAnswer": "$V = \\sqrt{V_R^2 + V_C^2}$",
    "correctIndex": 3,
    "hintEn": "$V_R$ is horizontal and $V_C$ points downwards at $-90^\\circ$.",
    "hintAr": "$V_R$ أفقي و $V_C$ رأسي لأسفل بزاوية $-90^\\circ$، ويجمعان بفيثاغورس.",
    "stepByStepSolutionEn": [
      "Because $V_R$ is in phase with current and $V_C$ lags behind current by $90^\\circ$, the two vectors are perpendicular. By vector addition: $V = \\sqrt{V_R^2 + V_C^2}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن جهد المقاومة $V_R$ متفق في الطور مع التيار، بينما جهد المكثف $V_C$ يتأخر عن التيار بزاوية $90^\\circ$، فإن المتجهين متعامدان، ويُحسب فرق الجهد الكلي من نظرية فيثاغورس: $V = \\sqrt{V_R^2 + V_C^2}$."
    ],
    "teacherTipEn": "Pythagorean addition applies to all orthogonal AC components.",
    "teacherTipAr": "يُطبق جمع فيثاغورس على جميع المركبات الطورية المتعامدة."
  },
  {
    "id": "phys_ch4_db_easy_25",
    "titleEn": "Total Impedance of a Series RC Circuit",
    "titleAr": "المعاوقة الكلية لدائرة RC على التوالي",
    "difficulty": "easy",
    "questionEn": "The total impedance ($Z$) of a series RC circuit is given by:",
    "questionAr": "تُحسب المعاوقة الكلية ($Z$) لدائرة RC متصلة على التوالي بالعلاقة:",
    "optionsEn": [
      "$Z = \\sqrt{R^2 + X_C^2}$",
      "$Z = R - X_C$",
      "$Z = R + X_C$",
      "$Z = \\frac{R X_C}{\\sqrt{R^2 + X_C^2}}$"
    ],
    "optionsAr": [
      "$Z = \\sqrt{R^2 + X_C^2}$",
      "$Z = R - X_C$",
      "$Z = R + X_C$",
      "$Z = \\frac{R X_C}{\\sqrt{R^2 + X_C^2}}$"
    ],
    "correctAnswer": "$Z = \\sqrt{R^2 + X_C^2}$",
    "correctIndex": 0,
    "hintEn": "$Z = \\frac{V}{I} = \\sqrt{R^2 + X_C^2}$.",
    "hintAr": "$Z = \\frac{V}{I} = \\sqrt{R^2 + X_C^2}$.",
    "stepByStepSolutionEn": [
      "From $V = \\sqrt{V_R^2 + V_C^2} = \\sqrt{(I R)^2 + (I X_C)^2} = I \\sqrt{R^2 + X_C^2}$, dividing by current $I$ gives $Z = \\sqrt{R^2 + X_C^2}$."
    ],
    "stepByStepSolutionAr": [
      "من قانون الجهد $V = I \\sqrt{R^2 + X_C^2}$، وبقسمة الطرفين على $I$ تكون المعاوقة: $Z = \\sqrt{R^2 + X_C^2}$."
    ],
    "teacherTipEn": "Impedance is always positive and represents the magnitude of opposition in Ohms.",
    "teacherTipAr": "المعاوقة كمية موجبة دائماً وتمثل مقدار المقاومة الكلية بوحدة الأوم."
  },
  {
    "id": "phys_ch4_db_easy_26",
    "titleEn": "Phase Angle in a Series RC Circuit",
    "titleAr": "زاوية الطور في دائرة RC على التوالي",
    "difficulty": "easy",
    "questionEn": "In a series RC circuit, the phase angle ($\\phi$) is negative (total voltage lags behind current) and its tangent is given by:",
    "questionAr": "في دائرة RC على التوالي، تكون زاوية الطور ($\\phi$) سالبة (الجهد الكلي يتأخر عن التيار) ويُعطى ظلها بالعلاقة:",
    "optionsEn": [
      "$\\tan\\phi = \\frac{V_C}{V_R} = \\frac{X_C}{R}$",
      "$\\tan\\phi = -\\frac{V_C}{V_R} = -\\frac{X_C}{R}$",
      "$\\tan\\phi = -\\frac{R}{X_C}$",
      "$\\tan\\phi = \\frac{Z}{R}$"
    ],
    "optionsAr": [
      "$\\tan\\phi = \\frac{V_C}{V_R} = \\frac{X_C}{R}$",
      "$\\tan\\phi = -\\frac{V_C}{V_R} = -\\frac{X_C}{R}$",
      "$\\tan\\phi = -\\frac{R}{X_C}$",
      "$\\tan\\phi = \\frac{Z}{R}$"
    ],
    "correctAnswer": "$\\tan\\phi = -\\frac{V_C}{V_R} = -\\frac{X_C}{R}$",
    "correctIndex": 1,
    "hintEn": "The capacitive voltage points in the negative vertical direction.",
    "hintAr": "متجه جهد المكثف موجه رأسياً لأسفل في الاتجاه السالب.",
    "stepByStepSolutionEn": [
      "Because $V_C$ points vertically downward ($-90^\\circ$ relative to current and $V_R$), the phase angle lies in the fourth quadrant: $\\tan\\phi = -\\frac{V_C}{V_R} = -\\frac{X_C}{R}$. The negative sign indicates that the total voltage lags behind the electric current by an acute angle $|\\phi|$."
    ],
    "stepByStepSolutionAr": [
      "بما أن متجه جهد المكثف يتأخر بربع دورة ويتجه لأسفل، فإن زاوية الطور تقع في الربع الرابع وتكون سالبة: $\\tan\\phi = -\\frac{V_C}{V_R} = -\\frac{X_C}{R}$. والإشارة السالبة تعني أن الجهد الكلي يتأخر عن التيار بزاوية حادة مقدارها $|\\phi|$."
    ],
    "teacherTipEn": "RL circuit $\\implies \\phi > 0$ (voltage leads); RC circuit $\\implies \\phi < 0$ (voltage lags).",
    "teacherTipAr": "دائرة RL: الجهد يتقدم ($\\phi > 0$)؛ دائرة RC: الجهد يتأخر ($\\phi < 0$)."
  },
  {
    "id": "phys_ch4_db_easy_27",
    "titleEn": "Total Voltage Across a Series LC Circuit (Zero Resistance)",
    "titleAr": "فرق الجهد الكلي عبر دائرة LC على التوالي (بدون مقاومة)",
    "difficulty": "easy",
    "questionEn": "In a series AC circuit containing an inductor $L$ and a capacitor $C$ with ZERO ohmic resistance ($R = 0$), the total voltage across the combination is:",
    "questionAr": "في دائرة تيار متردد تحتوي على ملف حث $L$ ومكثف $C$ متصلين على التوالي مع انعدام المقاومة الأومية ($R = 0$)، فإن فرق الجهد الكلي يساوي:",
    "optionsEn": [
      "$V = \\sqrt{V_L^2 + V_C^2}$",
      "$V = V_L + V_C$",
      "$V = |V_L - V_C|$ (direct algebraic subtraction due to $180^\\circ$ phase opposition)",
      "$V = 0$ at all frequencies"
    ],
    "optionsAr": [
      "$V = \\sqrt{V_L^2 + V_C^2}$",
      "$V = V_L + V_C$",
      "$V = |V_L - V_C|$ (طرح جبري مباشر بسبب تضاد الطور بزاوية $180^\\circ$)",
      "$V = 0$ دائماً عند كل الترددات"
    ],
    "correctAnswer": "$V = |V_L - V_C|$ (direct algebraic subtraction due to $180^\\circ$ phase opposition)",
    "correctIndex": 2,
    "hintEn": "$V_L$ is at $+90^\\circ$ and $V_C$ is at $-90^\\circ$. The angle between them is $180^\\circ$.",
    "hintAr": "جهد الملف عند $+90^\\circ$ وجهد المكثف عند $-90^\\circ$، والزاوية بينهما $180^\\circ$ (على استقامة واحدة ومتضادان).",
    "stepByStepSolutionEn": [
      "In the phasor diagram, $V_L$ points upward along $+y$ while $V_C$ points downward along $-y$. Because they are in exact phase opposition ($180^\\circ$ apart on the same straight line), their resultant is obtained by direct subtraction: $V = |V_L - V_C|$."
    ],
    "stepByStepSolutionAr": [
      "في المخطط الطوري يشير متجه جهد الملف $V_L$ رأسياً لأعلى (+y) بينما يشير متجه جهد المكثف $V_C$ رأسياً لأسفل (-y). وبما أنهما على خط مستقيم واحد وفي اتجاهين متضادين (فرق طور $180^\\circ$)، فإن محصلتهما هي الفرق الجبري بينهما: $V = |V_L - V_C|$."
    ],
    "teacherTipEn": "If $V_L = V_C$, the total voltage across the LC pair is ZERO!",
    "teacherTipAr": "إذا تساوى $V_L$ مع $V_C$ ينعدم فرق الجهد الكلي بين طرفي المجموعة تماماً!"
  },
  {
    "id": "phys_ch4_db_easy_28",
    "titleEn": "Total Voltage in a Series RLC Circuit",
    "titleAr": "فرق الجهد الكلي في دائرة RLC على التوالي",
    "difficulty": "easy",
    "questionEn": "In a general series RLC alternating current circuit, the total supply voltage ($V$) is given by:",
    "questionAr": "في الدائرة العامة RLC المتصلة على التوالي بمصدر تيار متردد، يُحسب فرق الجهد الكلي للمصدر ($V$) بالعلاقة:",
    "optionsEn": [
      "$V = V_R + V_L + V_C$",
      "$V = \\sqrt{V_R^2 + V_L^2 + V_C^2}$",
      "$V = V_R + |V_L - V_C|$",
      "$V = \\sqrt{V_R^2 + (V_L - V_C)^2}$"
    ],
    "optionsAr": [
      "$V = V_R + V_L + V_C$",
      "$V = \\sqrt{V_R^2 + V_L^2 + V_C^2}$",
      "$V = V_R + |V_L - V_C|$",
      "$V = \\sqrt{V_R^2 + (V_L - V_C)^2}$"
    ],
    "correctAnswer": "$V = \\sqrt{V_R^2 + (V_L - V_C)^2}$",
    "correctIndex": 3,
    "hintEn": "Combine opposite vertical components $(V_L - V_C)$, then apply Pythagoras with horizontal $V_R$.",
    "hintAr": "أوجد محصلة الرأسيين المتضادين $(V_L - V_C)$ أولاً ثم اجمعهما بفيثاغورس مع الأفقي $V_R$.",
    "stepByStepSolutionEn": [
      "The net reactive voltage along the vertical axis is $(V_L - V_C)$. Because this vertical component is perpendicular to the horizontal ohmic voltage $V_R$, the total voltage is $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$."
    ],
    "stepByStepSolutionAr": [
      "المحصلة الرأسية للمفاعلتين المتضادتين هي $(V_L - V_C)$. وبما أن هذه المركبة الرأسية متعامدة مع الجهد الأفقي للمقاومة $V_R$، فإن فرق الجهد الكلي للمصدر يُعطى بنظرية فيثاغورس: $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$."
    ],
    "teacherTipEn": "The core voltage equation of alternating current circuit analysis.",
    "teacherTipAr": "المعادلة الأساسية لحساب فرق الجهد الكلي في دوائر التيار المتردد."
  },
  {
    "id": "phys_ch4_db_easy_29",
    "titleEn": "Total Impedance of a Series RLC Circuit",
    "titleAr": "المعاوقة الكلية لدائرة RLC على التوالي",
    "difficulty": "easy",
    "questionEn": "The total impedance ($Z$) of a series RLC alternating current circuit is given by:",
    "questionAr": "تُحسب المعاوقة الكلية ($Z$) لدائرة RLC على التوالي بالعلاقة:",
    "optionsEn": [
      "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$",
      "$Z = R + X_L + X_C$",
      "$Z = \\sqrt{R^2 + X_L^2 + X_C^2}$",
      "$Z = R + |X_L - X_C|$"
    ],
    "optionsAr": [
      "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$",
      "$Z = R + X_L + X_C$",
      "$Z = \\sqrt{R^2 + X_L^2 + X_C^2}$",
      "$Z = R + |X_L - X_C|$"
    ],
    "correctAnswer": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$",
    "correctIndex": 0,
    "hintEn": "Divide the voltage equation by current $I$.",
    "hintAr": "اقسم معادلة الجهد الكلي على شدة التيار $I$.",
    "stepByStepSolutionEn": [
      "Dividing $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$ by current $I$ gives the impedance equation: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$."
    ],
    "stepByStepSolutionAr": [
      "بقسمة طرفي معادلة الجهد على التيار $I$ نحصل على قانون المعاوقة الكلية: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$."
    ],
    "teacherTipEn": "Notice that whether $X_L > X_C$ or $X_C > X_L$, the square $(X_L - X_C)^2$ is always positive.",
    "teacherTipAr": "لاحظ أن مربع الفرق $(X_L - X_C)^2$ موجب دائماً سواء كانت $X_L > X_C$ أو العكس."
  },
  {
    "id": "phys_ch4_db_easy_30",
    "titleEn": "Phase Angle in a Series RLC Circuit",
    "titleAr": "زاوية الطور في دائرة RLC على التوالي",
    "difficulty": "easy",
    "questionEn": "In a series RLC circuit, the tangent of the phase angle ($\\tan\\phi$) between total voltage and electric current is:",
    "questionAr": "في دائرة RLC على التوالي، يُعطى ظل زاوية الطور ($\\tan\\phi$) بين الجهد الكلي والتيار بالعلاقة:",
    "optionsEn": [
      "$\\tan\\phi = \\frac{X_L + X_C}{R}$",
      "$\\tan\\phi = \\frac{V_L - V_C}{V_R} = \\frac{X_L - X_C}{R}$",
      "$\\tan\\phi = \\frac{R}{X_L - X_C}$",
      "$\\tan\\phi = \\frac{X_L - X_C}{Z}$"
    ],
    "optionsAr": [
      "$\\tan\\phi = \\frac{X_L + X_C}{R}$",
      "$\\tan\\phi = \\frac{V_L - V_C}{V_R} = \\frac{X_L - X_C}{R}$",
      "$\\tan\\phi = \\frac{R}{X_L - X_C}$",
      "$\\tan\\phi = \\frac{X_L - X_C}{Z}$"
    ],
    "correctAnswer": "$\\tan\\phi = \\frac{V_L - V_C}{V_R} = \\frac{X_L - X_C}{R}$",
    "correctIndex": 1,
    "hintEn": "Vertical component is $(X_L - X_C)$; Horizontal component is $R$.",
    "hintAr": "المركبة الرأسية هي $(X_L - X_C)$؛ والمركبة الأفقية هي المقاومة $R$.",
    "stepByStepSolutionEn": [
      "In the impedance triangle, $\\tan\\phi = \\frac{\\text{net reactance}}{\\text{resistance}} = \\frac{X_L - X_C}{R}$. If $X_L > X_C$, $\\phi > 0$ (inductive, voltage leads). If $X_C > X_L$, $\\phi < 0$ (capacitive, voltage lags). If $X_L = X_C$, $\\phi = 0$ (resonance)."
    ],
    "stepByStepSolutionAr": [
      "من مثلث المعاوقة: $\\tan\\phi = \\frac{\\text{المفاعلة المحصلة}}{\\text{المقاومة}} = \\frac{X_L - X_C}{R}$. فإذا كانت $X_L > X_C$ تكون $\\phi > 0$ (خواص حثية والجهد يتقدم). وإذا كانت $X_C > X_L$ تكون $\\phi < 0$ (خواص سعوية والجهد يتأخر). وإذا تساويا تنعدم $\\phi$ وتكون الدائرة في حالة رنين."
    ],
    "teacherTipEn": "Sign of $\\tan\\phi$ dictates whether the circuit acts inductive ($+$) or capacitive ($-$).",
    "teacherTipAr": "إشارة $\\tan\\phi$ تحدد الطبيعة الغالبة للدائرة: حثية إذا كانت موجبة، وسعوية إذا كانت سالبة."
  },
  {
    "id": "phys_ch4_db_easy_31",
    "titleEn": "Condition for Electrical Resonance in an RLC Series Circuit",
    "titleAr": "شرط حدوث الرنين الكهربي في دائرة RLC على التوالي",
    "difficulty": "easy",
    "questionEn": "Electrical resonance occurs in a series RLC alternating current circuit when:",
    "questionAr": "تتحقق حالة الرنين الكهربي في دائرة RLC متصلة على التوالي بمصدر متردد عندما:",
    "optionsEn": [
      "Ohmic resistance equals zero ($R = 0$)",
      "Capacitive reactance equals zero ($X_C = 0$)",
      "Inductive reactance equals capacitive reactance ($X_L = X_C$)",
      "Inductive reactance equals ohmic resistance ($X_L = R$)"
    ],
    "optionsAr": [
      "تنعدم المقاومة الأومية تماماً ($R = 0$)",
      "تنعدم المفاعلة السعوية تماماً ($X_C = 0$)",
      "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$)",
      "تتساوى المفاعلة الحثية مع المقاومة الأومية ($X_L = R$)"
    ],
    "correctAnswer": "Inductive reactance equals capacitive reactance ($X_L = X_C$)",
    "correctIndex": 2,
    "hintEn": "At resonance, reactances cancel: $X_L - X_C = 0$.",
    "hintAr": "عند الرنين تلغي المفاعلة الحثية المفاعلة السعوية تماماً: $X_L - X_C = 0$.",
    "stepByStepSolutionEn": [
      "Electrical resonance is defined by the condition $X_L = X_C$, which means $V_L = V_C$. Because the inductive and capacitive voltages are equal in magnitude and $180^\\circ$ out of phase, they completely cancel each other, leaving the circuit purely resistive."
    ],
    "stepByStepSolutionAr": [
      "تتحقق حالة الرنين عندما تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وبالتالي $V_L = V_C$. وبما أنهما متساويان ومتعاكسان في الطور بزاوية $180^\\circ$، يلاشي كل منهما الآخر تماماً، وتصبح الدائرة ذات خواص أومية نقية."
    ],
    "teacherTipEn": "Resonance condition: $X_L = X_C \\iff V_L = V_C \\iff \\phi = 0$.",
    "teacherTipAr": "شروط الرنين: $X_L = X_C \\iff V_L = V_C \\iff \\phi = 0$."
  },
  {
    "id": "phys_ch4_db_easy_32",
    "titleEn": "Resonant Frequency Formula (f0)",
    "titleAr": "قانون تردد الرنين لدائرة RLC",
    "difficulty": "easy",
    "questionEn": "The resonant frequency ($f_0$) of a series RLC alternating current circuit is given by:",
    "questionAr": "يُعطى تردد الرنين ($f_0$) لدائرة RLC على التوالي بالعلاقة:",
    "optionsEn": [
      "$f_0 = 2\\pi \\sqrt{L C}$",
      "$f_0 = \\frac{1}{2\\pi L C}$",
      "$f_0 = \\frac{\\sqrt{L C}}{2\\pi}$",
      "$f_0 = \\frac{1}{2\\pi \\sqrt{L C}}$"
    ],
    "optionsAr": [
      "$f_0 = 2\\pi \\sqrt{L C}$",
      "$f_0 = \\frac{1}{2\\pi L C}$",
      "$f_0 = \\frac{\\sqrt{L C}}{2\\pi}$",
      "$f_0 = \\frac{1}{2\\pi \\sqrt{L C}}$"
    ],
    "correctAnswer": "$f_0 = \\frac{1}{2\\pi \\sqrt{L C}}$",
    "correctIndex": 3,
    "hintEn": "Set $X_L = X_C \\implies 2\\pi f_0 L = \\frac{1}{2\\pi f_0 C}$, then solve for $f_0$.",
    "hintAr": "ساوِ $2\\pi f_0 L = \\frac{1}{2\\pi f_0 C}$ واستنتج $f_0$.",
    "stepByStepSolutionEn": [
      "Equating $X_L = X_C$: $2\\pi f_0 L = \\frac{1}{2\\pi f_0 C} \\implies 4\\pi^2 f_0^2 L C = 1 \\implies f_0^2 = \\frac{1}{4\\pi^2 L C}$. Taking the square root gives $f_0 = \\frac{1}{2\\pi \\sqrt{L C}}$."
    ],
    "stepByStepSolutionAr": [
      "بمساواة $X_L = X_C$: $2\\pi f_0 L = \\frac{1}{2\\pi f_0 C} \\implies f_0^2 = \\frac{1}{4\\pi^2 L C}$، وبأخذ الجذر التربيعي للطرفين نحصل على قانون تردد الرنين: $f_0 = \\frac{1}{2\\pi \\sqrt{L C}}$."
    ],
    "teacherTipEn": "Resonant frequency depends ONLY on $L$ and $C$, strictly independent of resistance $R$.",
    "teacherTipAr": "تردد الرنين يعتمد فقط على معامل الحث $L$ وسعة المكثف $C$ ولا يعتمد إطلاقاً على المقاومة $R$."
  },
  {
    "id": "phys_ch4_db_easy_33",
    "titleEn": "Impedance at Resonance in an RLC Circuit",
    "titleAr": "معاوقة الدائرة في حالة الرنين",
    "difficulty": "easy",
    "questionEn": "At electrical resonance in a series RLC circuit, the total impedance ($Z$) is at its:",
    "questionAr": "في حالة الرنين الكهربي لدائرة RLC متصلة على التوالي، تكون المعاوقة الكلية للدائرة ($Z$):",
    "optionsEn": [
      "Minimum value, exactly equal to the ohmic resistance ($Z = R$)",
      "Maximum value ($Z \\to \\infty$)",
      "Zero ($Z = 0$)",
      "Equal to $X_L + X_C$"
    ],
    "optionsAr": [
      "أقل قيمة ممكنة وتساوي المقاومة الأومية للدائرة فقط ($Z = R$)",
      "أكبر ما يمكن وتؤول إلى اللانهاية",
      "صفراً منعدمة تماماً",
      "مساوية لمجموع المفاعلتين $X_L + X_C$"
    ],
    "correctAnswer": "Minimum value, exactly equal to the ohmic resistance ($Z = R$)",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$. When $X_L = X_C$, the second term vanishes.",
    "hintAr": "في قانون المعاوقة ينعدم الحد الثاني تماماً عندما $X_L = X_C$.",
    "stepByStepSolutionEn": [
      "Since $Z = \\sqrt{R^2 + (X_L - X_C)^2}$, when $X_L = X_C$, $(X_L - X_C)^2 = 0$. Therefore, $Z = \\sqrt{R^2 + 0} = R$. This is the absolute minimum possible impedance the circuit can ever present."
    ],
    "stepByStepSolutionAr": [
      "بما أن $Z = \\sqrt{R^2 + (X_L - X_C)^2}$، فعند تساوي المفاعلتين ينعدم الفرق بينهما، وتصبح المعاوقة مساوية للمقاومة الأومية فقط: $Z = \\sqrt{R^2 + 0} = R$، وهي أقل قيمة ممكنة لمعاوقة الدائرة."
    ],
    "teacherTipEn": "At resonance: $Z_{\\min} = R$.",
    "teacherTipAr": "عند الرنين: تكون المعاوقة أقل ما يمكن وتساوي المقاومة الأومية $R$."
  },
  {
    "id": "phys_ch4_db_easy_34",
    "titleEn": "Current Intensity at Resonance in an RLC Circuit",
    "titleAr": "شدة التيار في حالة الرنين",
    "difficulty": "easy",
    "questionEn": "At electrical resonance in a series RLC circuit, the current intensity ($I$) is at its:",
    "questionAr": "في حالة الرنين الكهربي لدائرة RLC على التوالي، تكون شدة التيار المار في الدائرة:",
    "optionsEn": [
      "Minimum value ($I \\approx 0$)",
      "Maximum possible value ($I_{\\max} = \\frac{V}{R}$)",
      "Zero under all source voltages",
      "Infinite regardless of resistance $R$"
    ],
    "optionsAr": [
      "أقل ما يمكن وتكاد تنعدم",
      "أكبر ما يمكن وتساوي خارج قسمة الجهد على المقاومة الأومية ($I_{\\max} = \\frac{V}{R}$)",
      "صفراً دائماً",
      "لانهائية بغض النظر عن قيمة المقاومة"
    ],
    "correctAnswer": "Maximum possible value ($I_{\\max} = \\frac{V}{R}$)",
    "correctIndex": 1,
    "hintEn": "Current is $I = \\frac{V}{Z}$. Minimum impedance means maximum current.",
    "hintAr": "التيار $I = \\frac{V}{Z}$، فأقل معاوقة تعطي أقصى شدة تيار ممكنة.",
    "stepByStepSolutionEn": [
      "By Ohm's law, $I = \\frac{V}{Z}$. Because impedance is at its absolute minimum ($Z = R$), the current reaches its maximum possible amplitude: $I_{\\text{peak}} = \\frac{V}{R}$."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لقانون أوم $I = \\frac{V}{Z}$. وبما أن المعاوقة عند الرنين تكون في حدها الأدنى ($Z = R$)، فإن شدة التيار تصل إلى قيمتها العظمى القصوى: $I = \\frac{V}{R}$."
    ],
    "teacherTipEn": "Resonance curve peaks sharply at $f_0$. Smaller $R$ yields a higher, sharper peak.",
    "teacherTipAr": "منحنى الرنين يصل لقمته عند $f_0$، وكلما قلت $R$ زادت حدة وارتفاع القمة."
  },
  {
    "id": "phys_ch4_db_easy_35",
    "titleEn": "Voltage Across Resistor at Resonance",
    "titleAr": "جهد المقاومة الأومية عند الرنين",
    "difficulty": "easy",
    "questionEn": "In a series RLC circuit operating at electrical resonance, the voltage across the ohmic resistor ($V_R$) is equal to:",
    "questionAr": "في دائرة RLC متصلة على التوالي في حالة رنين، فإن فرق الجهد بين طرفي المقاومة الأومية ($V_R$):",
    "optionsEn": [
      "Zero ($V_R = 0$)",
      "Half of the source voltage ($V/2$)",
      "The total source voltage ($V_R = V$)",
      "The difference $V_L - V_C$"
    ],
    "optionsAr": [
      "صفراً ($V_R = 0$)",
      "نصف جهد المصدر ($V/2$)",
      "يساوي فرق جهد المصدر الكلي بالكامل ($V_R = V$)",
      "الفرق بين جهدي الملف والمكثف"
    ],
    "correctAnswer": "The total source voltage ($V_R = V$)",
    "correctIndex": 2,
    "hintEn": "$V = \\sqrt{V_R^2 + (V_L - V_C)^2}$. At resonance, $V_L = V_C$.",
    "hintAr": "عند الرنين $V_L = V_C$ فيتلاشيان ويبقى $V = \\sqrt{V_R^2} = V_R$.",
    "stepByStepSolutionEn": [
      "Because $V_L = V_C$, the reactive voltage $(V_L - V_C) = 0$. Substituting into the voltage formula yields $V = \\sqrt{V_R^2 + 0} = V_R$. The entire applied source voltage appears directly across the resistor."
    ],
    "stepByStepSolutionAr": [
      "بما أن $V_L = V_C$ عند الرنين، فإن محصلة الجهد التفاعلي تنعدم $(V_L - V_C = 0)$. وبالتعويض في قانون الجهد الكلي: $V = \\sqrt{V_R^2 + 0} = V_R$. أي أن جهد المصدر يقع بأكمله على المقاومة الأومية."
    ],
    "teacherTipEn": "At resonance: Source voltage equals resistor voltage ($V = V_R$).",
    "teacherTipAr": "عند الرنين: جهد المصدر يساوي جهد المقاومة الأومية بالكامل ($V = V_R$)."
  },
  {
    "id": "phys_ch4_db_easy_36",
    "titleEn": "Phase Angle and Power Factor at Resonance",
    "titleAr": "زاوية الطور وعامل القدرة عند الرنين",
    "difficulty": "easy",
    "questionEn": "At electrical resonance in a series RLC circuit, the phase angle ($\\phi$) and the power factor ($\\cos\\phi$) are, respectively:",
    "questionAr": "في حالة الرنين الكهربي لدائرة RLC على التوالي، فإن زاوية الطور ($\\phi$) وعامل القدرة ($\\cos\\phi$) هما على الترتيب:",
    "optionsEn": [
      "$\\phi = 90^\\circ$ and $\\cos\\phi = 0$",
      "$\\phi = -90^\\circ$ and $\\cos\\phi = 0$",
      "$\\phi = 45^\\circ$ and $\\cos\\phi = 0.707$",
      "$\\phi = 0^\\circ$ and $\\cos\\phi = 1$"
    ],
    "optionsAr": [
      "$\\phi = 90^\\circ$ و $\\cos\\phi = 0$",
      "$\\phi = -90^\\circ$ و $\\cos\\phi = 0$",
      "$\\phi = 45^\\circ$ و $\\cos\\phi = 0.707$",
      "$\\phi = 0^\\circ$ و $\\cos\\phi = 1$"
    ],
    "correctAnswer": "$\\phi = 0^\\circ$ and $\\cos\\phi = 1$",
    "correctIndex": 3,
    "hintEn": "$\\tan\\phi = \\frac{X_L - X_C}{R} = 0 \\implies \\phi = 0^\\circ$. $\\cos 0^\\circ = 1$.",
    "hintAr": "$\\tan\\phi = 0 \\implies \\phi = 0^\\circ$. وعامل القدرة $\\cos 0^\\circ = 1$.",
    "stepByStepSolutionEn": [
      "Because $X_L = X_C$, the net reactance is zero, so $\\tan\\phi = 0 \\implies \\phi = 0^\\circ$. Total voltage and electric current are completely in phase. The power factor is $\\cos\\phi = \\cos 0^\\circ = 1$ (maximum possible efficiency)."
    ],
    "stepByStepSolutionAr": [
      "بما أن $X_L = X_C$ تنعدم المفاعلة المحصلة فتكون زاوية الطور صفراً ($\\phi = 0$)، ويتفق الجهد الكلي مع التيار في الطور تماماً. ويكون عامل القدرة أقصى ما يمكن: $\\cos\\phi = \\cos 0^\\circ = 1$."
    ],
    "teacherTipEn": "At resonance, the RLC circuit behaves as a pure ohmic resistor.",
    "teacherTipAr": "عند الرنين تسلك دائرة RLC سلوك المقاومة الأومية النقية تماماً."
  },
  {
    "id": "phys_ch4_db_easy_37",
    "titleEn": "Scientific Principle of the Oscillatory Circuit (LC Circuit)",
    "titleAr": "الفكرة العلمية للدائرة المهتزة",
    "difficulty": "easy",
    "questionEn": "The scientific operating principle of an oscillatory circuit (LC tank circuit) is based on:",
    "questionAr": "الأساس العلمي لعمل الدائرة المهتزة (دائرة LC) يعتمد على:",
    "optionsEn": [
      "Mutual periodic exchange of stored energy between the electric field of a capacitor and the magnetic field of an inductor",
      "Continuous nuclear fission inside the inductor core",
      "Thermoelectric generation of electrons",
      "Photoelectric emission from capacitor plates"
    ],
    "optionsAr": [
      "التبادل الدوري للطاقة المختزنة بين المجال الكهربي في المكثف والمجال المغناطيسي في ملف الحث",
      "الانشطار النووي المستمر داخل قلب الملف",
      "التوليد الكهروحراري للإلكترونات",
      "الانبعاث الكهروضوئي من ألواح المكثف"
    ],
    "correctAnswer": "Mutual periodic exchange of stored energy between the electric field of a capacitor and the magnetic field of an inductor",
    "correctIndex": 0,
    "hintEn": "Electric energy in capacitor ($\\frac{1}{2} C V^2$) $\\leftrightarrow$ Magnetic energy in inductor ($\\frac{1}{2} L I^2$).",
    "hintAr": "طاقة كهربية في المكثف $\\leftrightarrow$ طاقة مغناطيسية في الملف.",
    "stepByStepSolutionEn": [
      "An oscillatory circuit consists of a charged capacitor connected to an inductor. The capacitor discharges through the coil, converting electric field energy into magnetic field energy. When the capacitor is fully discharged, the collapsing magnetic field recharges the capacitor with opposite polarity, repeating the energy exchange back and forth periodically."
    ],
    "stepByStepSolutionAr": [
      "تتكون الدائرة المهتزة من مكثف مشحون متصل بملف حث. يفرغ المكثف شحنته في الملف فتحول الطاقة الكهربية إلى طاقة مغناطيسية في الملف. وعندما يفرغ المكثف تماماً، ينهار المجال المغناطيسي في الملف مولداً تياراً يعيد شحن المكثف بقطبية معاكسة، وتتكرر هذه العملية دورياً بين المجالين الكهربي والمغناطيسي."
    ],
    "teacherTipEn": "Oscillatory circuit is used in radio transmitters to produce high-frequency carrier waves.",
    "teacherTipAr": "تُستخدم الدائرة المهتزة في دوائر الإرسال اللاسلكي لتوليد موجات كهرومغناطيسية عالية التردد."
  },
  {
    "id": "phys_ch4_db_easy_38",
    "titleEn": "Why Oscillations are Damped in a Real LC Circuit",
    "titleAr": "سبب اضمحلال الشحنة والتيار في الدائرة المهتزة الحقيقية",
    "difficulty": "easy",
    "questionEn": "In a real oscillatory circuit, the amplitude of electromagnetic oscillations continuously decreases until it completely dies out (damped oscillations) because:",
    "questionAr": "في الدائرة المهتزة الحقيقية، تتناقص سعة الاهتزازات الكهرومغناطيسية تدريجياً حتى تنعدم تماماً (اهتزازات مضمحلة) بسبب:",
    "optionsEn": [
      "The capacitance of the capacitor increases to infinity",
      "Part of the electrical energy is continuously dissipated as heat due to the ohmic resistance of the wires and coil ($I^2 R$)",
      "The self-inductance drops to zero after the first cycle",
      "The frequency of the oscillations increases beyond the speed of light"
    ],
    "optionsAr": [
      "زيادة سعة المكثف إلى اللانهاية",
      "فقد جزء من الطاقة الكهربية تدريجياً في صورة طاقة حرارية بسبب المقاومة الأومية لأسلاك الدائرة والملف ($I^2 R$)",
      "هبوط معامل الحث الذاتي للصفر بعد أول دورة",
      "تجاوز تردد الاهتزازات لسرعة الضوء"
    ],
    "correctAnswer": "Part of the electrical energy is continuously dissipated as heat due to the ohmic resistance of the wires and coil ($I^2 R$)",
    "correctIndex": 1,
    "hintEn": "Every real wire has non-zero resistance $R > 0$, causing continuous Joule heating loss.",
    "hintAr": "الأسلاك الحقيقية لها مقاومة أومية $R > 0$ تستهلك طاقة حرارية في كل دورة.",
    "stepByStepSolutionEn": [
      "Because the connecting wires and the inductor coil possess non-zero ohmic resistance ($R > 0$), a fraction of the oscillating electromagnetic energy is converted into Joule heat ($I^2 R t$) during every cycle. Consequently, the amplitude of oscillating charge and current decays exponentially to zero."
    ],
    "stepByStepSolutionAr": [
      "نظراً لأن أسلاك التوصيل وملف الحث لها مقاومة أومية ($R > 0$)، يُفقد جزء من الطاقة الكهرومغناطيسية في كل دورة في صورة طاقة حرارية ($I^2 R$)، مما يؤدي إلى اضمحلال تدريجي لسعة الشحنة والتيار حتى تتلاشى الاهتزازات تماماً."
    ],
    "teacherTipEn": "To maintain continuous oscillations, the circuit must be fed with periodic pulses of electrical energy from a DC battery.",
    "teacherTipAr": "لتوليد اهتزازات مستمرة غير مضمحلة، يجب تغذية الدائرة بنبضات طاقة دورية لتعويض الفقد الحراري."
  },
  {
    "id": "phys_ch4_db_easy_39",
    "titleEn": "Function of the Tuner (Receiver) Circuit in Radios",
    "titleAr": "وظيفة دائرة الرنين (دائرة الاستقبال) في أجهزة الراديو",
    "difficulty": "easy",
    "questionEn": "The primary function of the tuner (resonant circuit) in a radio receiver is to:",
    "questionAr": "الوظيفة الأساسية لدائرة الرنين (دائرة التوليف) في أجهزة الاستقبال اللاسلكي (الراديو) هي:",
    "optionsEn": [
      "Amplify all incoming radio waves equally",
      "Convert radio waves directly into alternating current power to run the house",
      "Select a single desired radio transmission frequency by adjusting its resonant frequency to match that station's broadcast frequency",
      "Prevent the antenna from picking up any electromagnetic signals"
    ],
    "optionsAr": [
      "تكبير وتضخيم جميع الموجات الإذاعية الواردة بالتساوي",
      "تحويل موجات الراديو إلى قدرة كهربية لتشغيل المنزل",
      "فصل واختيار المحطة الإذاعية المراد سماعها بضبط تردد رنين الدائرة ليتفق مع تردد موجات تلك المحطة",
      "منع الهوائي من التقاط أي إشارات كهرومغناطيسية"
    ],
    "correctAnswer": "Select a single desired radio transmission frequency by adjusting its resonant frequency to match that station's broadcast frequency",
    "correctIndex": 2,
    "hintEn": "At resonance ($f_0 = f_{\\text{station}}$), impedance is minimum and current is maximum.",
    "hintAr": "عند الرنين ($f_0 = f_{\\text{محطة}}$) تكون المعاوقة أقل ما يمكن والتيار أكبر ما يمكن للمحطة المختارة.",
    "stepByStepSolutionEn": [
      "Antennas intercept countless broadcast signals simultaneously. By varying the capacitance ($C$) of the tuning capacitor, the circuit's resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$ is tuned to match the frequency of the desired radio station. Only that resonant signal encounters minimum impedance and produces a maximum current, while all other frequencies are strongly attenuated."
    ],
    "stepByStepSolutionAr": [
      "يلتقط الهوائي آلاف الموجات الإذاعية في وقت واحد. بتغيير سعة المكثف المتغير ($C$)، يُضبط تردد رنين الدائرة $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$ ليتساوى مع تردد المحطة المراد سماعها، فتكون المعاوقة لتلك الإشارة أقل ما يمكن ويمر تيارها بأقصى شدة، بينما تضعف باقي الترددات بشدة وتُستبعد."
    ],
    "teacherTipEn": "Tuning: variable capacitor adjusts $f_0$ to match the incoming station.",
    "teacherTipAr": "التوليف: المكثف المتغير يغير $f_0$ ليتفق مع تردد المحطة المختارة."
  },
  {
    "id": "phys_ch4_db_easy_40",
    "titleEn": "Effect of Doubling Inductance and Halving Capacitance on Resonant Frequency",
    "titleAr": "أثر مضاعفة معامل الحث وإنقاص السعة للنصف على تردد الرنين",
    "difficulty": "easy",
    "questionEn": "In a series RLC resonant circuit, if the self-inductance of the coil is doubled ($2L$) while the capacitance of the capacitor is halved ($C/2$), the resonant frequency of the circuit:",
    "questionAr": "في دائرة رنين RLC على التوالي، إذا تضاعف معامل الحث الذاتي للملف ($2L$) وقَلّت سعة المكثف إلى النصف ($C/2$)، فإن تردد الرنين للدائرة:",
    "optionsEn": [
      "Doubles to $2f_0$",
      "Halves to $f_0/2$",
      "Quadruples to $4f_0$",
      "Remains completely unchanged"
    ],
    "optionsAr": [
      "يتضاعف إلى مثليه ($2f_0$)",
      "يقل إلى نصف قيمته ($f_0/2$)",
      "يزداد إلى 4 أمثاله ($4f_0$)",
      "يظل ثابتاً دون أي تغيير"
    ],
    "correctAnswer": "Remains completely unchanged",
    "correctIndex": 3,
    "hintEn": "Product $L C$ remains constant: $(2L)(C/2) = L C$.",
    "hintAr": "حاصل الضرب $L C$ يظل ثابتاً: $(2L)(C/2) = L C$.",
    "stepByStepSolutionEn": [
      "From $f_0 = \\frac{1}{2\\pi \\sqrt{L C}}$, the resonant frequency depends on the product $L C$. Here: $L' C' = (2L) \\times (C/2) = L C$. Since the product $L C$ is unchanged, the resonant frequency remains exactly the same."
    ],
    "stepByStepSolutionAr": [
      "من قانون تردد الرنين $f_0 = \\frac{1}{2\\pi \\sqrt{L C}}$، نجد أن التردد يعتمد على حاصل الضرب $L C$. وبما أن $L' C' = (2L) (C/2) = L C$ (حاصل الضرب ثابت)، فإن تردد الرنين يظل ثابتاً دون أي تغيير."
    ],
    "teacherTipEn": "As long as the product $L C$ is constant, $f_0$ does not change.",
    "teacherTipAr": "طالما أن حاصل ضرب $L C$ ثابت، فإن تردد الرنين يظل ثابتاً."
  },
  {
    "id": "phys_ch4_db_easy_41",
    "titleEn": "Effect of Quadrupling Both L and C on Resonant Frequency",
    "titleAr": "أثر زيادة كل من الحث والسعة لأربعة أمثالهما على تردد الرنين",
    "difficulty": "easy",
    "questionEn": "If both the self-inductance ($L$) and the capacitance ($C$) of an RLC series circuit are each quadrupled ($4L$ and $4C$), the resonant frequency of the circuit becomes:",
    "questionAr": "إذا زاد كل من معامل الحث الذاتي ($L$) وسعة المكثف ($C$) إلى أربعة أمثالهما في دائرة RLC، فإن تردد الرنين للدائرة يصبح:",
    "optionsEn": [
      "One-quarter of its original value ($f_0 / 4$)",
      "Half of its original value ($f_0 / 2$)",
      "Four times its original value ($4f_0$)",
      "Sixteen times its original value ($16f_0$)"
    ],
    "optionsAr": [
      "ربع قيمته الأصلية ($f_0 / 4$)",
      "نصف قيمته الأصلية ($f_0 / 2$)",
      "أربعة أمثال قيمته الأصلية ($4f_0$)",
      "ستة عشر مثلاً لقيمته الأصلية ($16f_0$)"
    ],
    "correctAnswer": "One-quarter of its original value ($f_0 / 4$)",
    "correctIndex": 0,
    "hintEn": "$\\sqrt{L' C'} = \\sqrt{(4L)(4C)} = \\sqrt{16 L C} = 4 \\sqrt{L C}$.",
    "hintAr": "$\\sqrt{L' C'} = \\sqrt{16 L C} = 4\\sqrt{LC}$.",
    "stepByStepSolutionEn": [
      "$f'_0 = \\frac{1}{2\\pi \\sqrt{4L \\times 4C}} = \\frac{1}{2\\pi \\times 4\\sqrt{LC}} = \\frac{1}{4} f_0$."
    ],
    "stepByStepSolutionAr": [
      "التردد الجديد: $f'_0 = \\frac{1}{2\\pi \\sqrt{16 LC}} = \\frac{1}{4} \\left(\\frac{1}{2\\pi \\sqrt{LC}}\\right) = \\frac{f_0}{4}$."
    ],
    "teacherTipEn": "Square root extracts $1/4$ from the denominator.",
    "teacherTipAr": "الجذر التربيعي لـ 16 في المقام يُخرج 4، فيقل التردد إلى الربع."
  },
  {
    "id": "phys_ch4_db_easy_42",
    "titleEn": "Effect of Removing Inductor Core on Resonant Circuit",
    "titleAr": "أثر سحب ساق الحديد المطاوع من ملف دائرة رنين",
    "difficulty": "easy",
    "questionEn": "A series RLC circuit is in resonance with an AC generator. If the soft iron core inside the coil is slowly withdrawn, the circuit current:",
    "questionAr": "دائرة RLC على التوالي في حالة رنين مع مصدر تيار متردد. إذا سُحبت ساق الحديد المطاوع من داخل تجويف الملف ببطء، فإن قراءة الأميتر الحراري في الدائرة:",
    "optionsEn": [
      "Increases substantially",
      "Decreases, because the circuit leaves the state of resonance and impedance increases ($Z > R$)",
      "Remains at its maximum value",
      "Becomes pure direct current"
    ],
    "optionsAr": [
      "تزداد زيادة كبيرة",
      "تقل، لأن الدائرة تخرج من حالة الرنين وتزداد المعاوقة ($Z > R$)",
      "تظل عند قيمتها العظمى دون تغيير",
      "تتحول إلى تيار مستمر"
    ],
    "correctAnswer": "Decreases, because the circuit leaves the state of resonance and impedance increases ($Z > R$)",
    "correctIndex": 1,
    "hintEn": "Removing iron core decreases $L$, so $X_L$ decreases and $X_L \\neq X_C$.",
    "hintAr": "سحب ساق الحديد يقلل نفاذية القلب $\\mu$ فيقل الحث $L$ وتصبح $X_L \\neq X_C$ وتخرج الدائرة من الرنين.",
    "stepByStepSolutionEn": [
      "Initially, $X_L = X_C$ and impedance is at its minimum ($Z = R$). Withdrawing the iron core lowers permeability $\\mu$, which decreases self-inductance $L$ and inductive reactance $X_L$. Now $X_L < X_C$, so the reactances no longer cancel: $Z = \\sqrt{R^2 + (X_L - X_C)^2} > R$. Because impedance increases, current decreases."
    ],
    "stepByStepSolutionAr": [
      "في البداية كانت الدائرة في حالة رنين ($X_L = X_C$) والمعاوقة أقل ما يمكن ($Z = R$). بسحب ساق الحديد تقل النفاذية $\\mu$ فيقل معامل الحث الذاتي $L$ وتقل $X_L$. وتصبح $X_L < X_C$ فتخرج الدائرة من حالة الرنين وتزداد المعاوقة ($Z > R$)، مما يؤدي إلى انخفاض شدة التيار وقراءة الأميتر الحراري."
    ],
    "teacherTipEn": "ANY disturbance away from resonance increases impedance and decreases current.",
    "teacherTipAr": "أي إخلال بحالة الرنين يزيد المعاوقة ويقلل شدة التيار حتماً."
  },
  {
    "id": "phys_ch4_db_easy_43",
    "titleEn": "Inductive Circuit Behavior When XL > XC",
    "titleAr": "خصائص الدائرة عندما تكون المفاعلة الحثية أكبر من السعوية",
    "difficulty": "easy",
    "questionEn": "In a series RLC alternating current circuit, if the inductive reactance is greater than the capacitive reactance ($X_L > X_C$):",
    "questionAr": "في دائرة RLC على التوالي، إذا كانت المفاعلة الحثية أكبر من المفاعلة السعوية ($X_L > X_C$):",
    "optionsEn": [
      "The circuit exhibits capacitive characteristics, and voltage lags",
      "The circuit is in electrical resonance",
      "The circuit exhibits inductive characteristics, and the total voltage leads current by a positive acute phase angle ($0 < \\phi < 90^\\circ$)",
      "The total impedance equals zero"
    ],
    "optionsAr": [
      "تسلك الدائرة سلوكاً سعوياً والجهد يتأخر",
      "تكون الدائرة في حالة رنين",
      "تسلك الدائرة سلوكاً حثياً، ويتقدم فرق الجهد الكلي على التيار بزاوية طور حادة موجبة ($0 < \\phi < 90^\\circ$)",
      "تكون المعاوقة الكلية صفراً"
    ],
    "correctAnswer": "The circuit exhibits inductive characteristics, and the total voltage leads current by a positive acute phase angle ($0 < \\phi < 90^\\circ$)",
    "correctIndex": 2,
    "hintEn": "$\\tan\\phi = \\frac{X_L - X_C}{R} > 0 \\implies \\phi > 0$.",
    "hintAr": "بما أن $X_L > X_C$ فإن البسط موجب وتكون زاوية الطور موجبة ويتقدم الجهد.",
    "stepByStepSolutionEn": [
      "When $X_L > X_C$, the net reactance $(X_L - X_C)$ is positive. The phase angle is positive ($\\tan\\phi > 0$), meaning the circuit behaves as an inductive circuit where total voltage leads electric current."
    ],
    "stepByStepSolutionAr": [
      "عندما تكون $X_L > X_C$ تكون المفاعلة المحصلة موجبة في الاتجاه الحثي، وتكون زاوية الطور موجبة ($\\tan\\phi > 0$) مما يعني أن الدائرة لها خواص حثية ويتقدم فرق الجهد الكلي على التيار بربع دورة أو زاوية حادة موجبة."
    ],
    "teacherTipEn": "$X_L > X_C \\implies$ Inductive properties (voltage leads).",
    "teacherTipAr": "$X_L > X_C \\implies$ خواص حثية (الجهد يتقدم)."
  },
  {
    "id": "phys_ch4_db_easy_44",
    "titleEn": "Capacitive Circuit Behavior When XC > XL",
    "titleAr": "خصائص الدائرة عندما تكون المفاعلة السعوية أكبر من الحثية",
    "difficulty": "easy",
    "questionEn": "In a series RLC alternating current circuit, if the capacitive reactance is greater than the inductive reactance ($X_C > X_L$):",
    "questionAr": "في دائرة RLC على التوالي، إذا كانت المفاعلة السعوية أكبر من المفاعلة الحثية ($X_C > X_L$):",
    "optionsEn": [
      "The circuit exhibits inductive characteristics",
      "The circuit is in resonance",
      "The power factor equals zero",
      "The circuit exhibits capacitive characteristics, and the total voltage lags behind current by an acute angle ($-90^\\circ < \\phi < 0$)"
    ],
    "optionsAr": [
      "تسلك الدائرة سلوكاً حثياً",
      "تكون الدائرة في حالة رنين",
      "ينعدم عامل القدرة",
      "تسلك الدائرة سلوكاً سعوياً، ويتأخر فرق الجهد الكلي عن التيار بزاوية طور حادة سالبة ($-90^\\circ < \\phi < 0$)"
    ],
    "correctAnswer": "The circuit exhibits capacitive characteristics, and the total voltage lags behind current by an acute angle ($-90^\\circ < \\phi < 0$)",
    "correctIndex": 3,
    "hintEn": "$\\tan\\phi = \\frac{X_L - X_C}{R} < 0 \\implies \\phi < 0$.",
    "hintAr": "بما أن $X_C > X_L$ يكون البسط سالباً وزاوية الطور سالبة فيتأخر الجهد عن التيار.",
    "stepByStepSolutionEn": [
      "When $X_C > X_L$, the net reactance $(X_L - X_C)$ is negative. The phase angle $\\phi$ is negative, which means that the circuit behaves like a capacitive circuit where total voltage lags behind the electric current."
    ],
    "stepByStepSolutionAr": [
      "عندما تكون $X_C > X_L$ تكون المفاعلة المحصلة سالبة، وتكون زاوية الطور سالبة ($\\tan\\phi < 0$) مما يعني أن الدائرة لها خواص سعوية ويتأخر الجهد الكلي عن التيار بزاوية حادة سالبة."
    ],
    "teacherTipEn": "$X_C > X_L \\implies$ Capacitive properties (voltage lags).",
    "teacherTipAr": "$X_C > X_L \\implies$ خواص سعوية (الجهد يتأخر)."
  },
  {
    "id": "phys_ch4_db_easy_45",
    "titleEn": "Frequency Below vs Above Resonant Frequency in Series RLC",
    "titleAr": "تردد المصدر أقل من أو أكبر من تردد الرنين",
    "difficulty": "easy",
    "questionEn": "In a series RLC circuit with resonant frequency $f_0$, if the source frequency $f$ is LESS than the resonant frequency ($f < f_0$), the circuit exhibits:",
    "questionAr": "في دائرة RLC متصلة على التوالي تردد رنينها $f_0$، إذا كان تردد المصدر المستخدم $f$ أقل من تردد الرنين ($f < f_0$)، فإن الدائرة تسلك سلوكاً:",
    "optionsEn": [
      "Capacitive characteristics, because $X_C > X_L$ at low frequencies",
      "Inductive characteristics, because $X_L > X_C$",
      "Purely resistive characteristics under all frequencies",
      "Zero impedance characteristics"
    ],
    "optionsAr": [
      "سعsizeاً (خواص سعوية)، لأن المفاعلة السعوية تكون أكبر من المفاعلة الحثية عند الترددات المنخفضة ($X_C > X_L$)",
      "حثياً، لأن $X_L > X_C$",
      "أومياً نقياً دائماً عند جميع الترددات",
      "منعدم المعاوقة"
    ],
    "correctAnswer": "Capacitive characteristics, because $X_C > X_L$ at low frequencies",
    "correctIndex": 0,
    "hintEn": "$X_L \\propto f$ and $X_C \\propto 1/f$. When $f < f_0$, $X_L$ drops and $X_C$ rises.",
    "hintAr": "$X_L$ تتناسب طردياً مع التردد و $X_C$ عكسياً. فعند الترددات الأقل من الرنين تصبح $X_C > X_L$.",
    "stepByStepSolutionEn": [
      "At $f = f_0$, $X_L = X_C$. When frequency drops below $f_0$, $X_L = 2\\pi f L$ decreases while $X_C = \\frac{1}{2\\pi f C}$ increases. Consequently, $X_C > X_L$, and the circuit exhibits capacitive behavior (voltage lags current)."
    ],
    "stepByStepSolutionAr": [
      "عند تردد الرنين $f = f_0$ تتساوى المفاعلتان. فعند انخفاض التردد عن $f_0$ تقل المفاعلة الحثية $X_L$ وتزداد المفاعلة السعوية $X_C$، فتصبح $X_C > X_L$ وتغلب الخواص السعوية على الدائرة ويتأخر الجهد عن التيار."
    ],
    "teacherTipEn": "$f < f_0 \\implies$ Capacitive; $f > f_0 \\implies$ Inductive; $f = f_0 \\implies$ Resistive (Resonance).",
    "teacherTipAr": "$f < f_0 \\implies$ سعوية؛ $f > f_0 \\implies$ حثية؛ $f = f_0 \\implies$ أومية (رنين)."
  },
  {
    "id": "phys_ch4_db_easy_46",
    "titleEn": "Frequency Above Resonant Frequency in Series RLC",
    "titleAr": "تردد المصدر أكبر من تردد الرنين لدائرة RLC",
    "difficulty": "easy",
    "questionEn": "In the same series RLC circuit, if the operating frequency $f$ is GREATER than the resonant frequency ($f > f_0$), the circuit exhibits:",
    "questionAr": "في نفس دائرة RLC على التوالي، إذا كان تردد المصدر $f$ أكبر من تردد الرنين ($f > f_0$)، فإن الدائرة تسلك سلوكاً:",
    "optionsEn": [
      "Capacitive characteristics",
      "Inductive characteristics, because $X_L > X_C$ at high frequencies",
      "Purely resistive with zero phase angle",
      "Short circuit with zero current"
    ],
    "optionsAr": [
      "سعsizeاً",
      "حثياً (خواص حثية)، لأن المفاعلة الحثية تكون أكبر من المفاعلة السعوية عند الترددات العالية ($X_L > X_C$)",
      "أومياً نقياً بزاوية طور صفر",
      "دائرة قصر بدون تيار"
    ],
    "correctAnswer": "Inductive characteristics, because $X_L > X_C$ at high frequencies",
    "correctIndex": 1,
    "hintEn": "When $f > f_0$, $X_L = 2\\pi f L$ increases and $X_C = \\frac{1}{2\\pi f C}$ decreases.",
    "hintAr": "عندما يكون $f > f_0$ تزداد $X_L$ وتقل $X_C$ فتصبح $X_L > X_C$.",
    "stepByStepSolutionEn": [
      "As frequency rises above $f_0$, the inductive reactance grows larger while capacitive reactance shrinks. Thus, $X_L > X_C$, making the net reactance positive and giving the circuit inductive properties (voltage leads current)."
    ],
    "stepByStepSolutionAr": [
      "بارتفاع التردد فوق تردد الرنين تزداد المفاعلة الحثية وتصغر المفاعلة السعوية، فتصبح $X_L > X_C$ وتكتسب الدائرة خواصاً حثية ويتقدم فرق الجهد الكلي على التيار."
    ],
    "teacherTipEn": "High frequency favors inductive reactance; low frequency favors capacitive reactance.",
    "teacherTipAr": "الترددات العالية تعزز المفاعلة الحثية؛ والمنخفضة تعزز المفاعلة السعوية."
  },
  {
    "id": "phys_ch4_db_easy_47",
    "titleEn": "Relationship Between Current and Voltage in Pure Components Summary",
    "titleAr": "ملخص العلاقات الطورية في العناصر النقية الثلاثة",
    "difficulty": "easy",
    "questionEn": "The phase difference between alternating voltage and current in a pure resistor, a pure inductor, and a pure capacitor, respectively, is:",
    "questionAr": "فرق الطور بين الجهد والتيار المتردد في المقاومة الأومية النقية، وملف الحث النقي، والمكثف النقي، على الترتيب هو:",
    "optionsEn": [
      "$90^\\circ$ in all three",
      "$0^\\circ$ in all three",
      "$0^\\circ$ in resistor; voltage leads current by $90^\\circ$ in inductor; current leads voltage by $90^\\circ$ in capacitor",
      "Voltage leads in capacitor and lags in inductor"
    ],
    "optionsAr": [
      "$90^\\circ$ في العناصر الثلاثة",
      "$0^\\circ$ في العناصر الثلاثة",
      "$0^\\circ$ في المقاومة؛ الجهد يسبق التيار بـ $90^\\circ$ في الملف؛ التيار يسبق الجهد بـ $90^\\circ$ في المكثف",
      "الجهد يتقدم في المكثف ويتأخر في الملف"
    ],
    "correctAnswer": "$0^\\circ$ in resistor; voltage leads current by $90^\\circ$ in inductor; current leads voltage by $90^\\circ$ in capacitor",
    "correctIndex": 2,
    "hintEn": "R: in phase ($\\phi = 0$); L: voltage leads ($\\phi = +90^\\circ$); C: current leads ($\\phi = -90^\\circ$).",
    "hintAr": "R: اتفاق في الطور؛ L: الجهد يتقدم بربع دورة؛ C: التيار يتقدم بربع دورة.",
    "stepByStepSolutionEn": [
      "In a resistor: $V$ and $I$ are in phase ($\\phi = 0^\\circ$). In an inductor: $V_L$ leads $I$ by $90^\\circ$. In a capacitor: $I$ leads $V_C$ by $90^\\circ$ (or $V_C$ lags behind $I$ by $90^\\circ$)."
    ],
    "stepByStepSolutionAr": [
      "في المقاومة الأومية: الجهد والتيار متفقان في الطور ($\\phi = 0$). في ملف الحث: يتقدم الجهد على التيار بزاوية $90^\\circ$. في المكثف: يتقدم التيار على الجهد بزاوية $90^\\circ$ (أو يتأخر الجهد عن التيار بـ $90^\\circ$)."
    ],
    "teacherTipEn": "Master mnemonic: Resistor = 0, Inductor = $+90^\\circ$, Capacitor = $-90^\\circ$.",
    "teacherTipAr": "قاعدة ذهبية: المقاومة = صفر، الملف = $+90^\\circ$، المكثف = $-90^\\circ$."
  },
  {
    "id": "phys_ch4_db_easy_48",
    "titleEn": "Units Equivalence of Capacitance: The Farad",
    "titleAr": "وحدة سعة المكثف: الفاراد ومكافئاته",
    "difficulty": "easy",
    "questionEn": "The SI unit of electrical capacitance is the Farad ($\\text{F}$). One Farad is equivalent to:",
    "questionAr": "الوحدة الدولية لسعة المكثف هي الفاراد ($\\text{F}$). الفاراد الواحد يكافئ:",
    "optionsEn": [
      "$\\text{Volt} \\cdot \\text{second}$",
      "$\\text{Ampere} \\cdot \\text{Ohm}$",
      "$\\text{Joule} / \\text{Ampere}$",
      "$\\text{Coulomb / Volt} = \\text{C / V} = \\text{s} / \\Omega$"
    ],
    "optionsAr": [
      "$\\text{فولت} \\cdot \\text{ثانية}$",
      "$\\text{أمبير} \\cdot \\text{أوم}$",
      "$\\text{جول} / \\text{أمبير}$",
      "$\\text{Coulomb / Volt} = \\text{C / V} = \\text{s} / \\Omega$"
    ],
    "correctAnswer": "$\\text{Coulomb / Volt} = \\text{C / V} = \\text{s} / \\Omega$",
    "correctIndex": 3,
    "hintEn": "From $C = Q/V$ and $X_C = \\frac{1}{2\\pi f C} \\implies C = \\frac{1}{2\\pi f X_C}$.",
    "hintAr": "من القانون $C = Q/V$ ومن $X_C = \\frac{1}{2\\pi f C}$.",
    "stepByStepSolutionEn": [
      "By definition, capacitance is $C = \\frac{Q}{V}$, so $1\\text{ F} = 1\\text{ C/V}$. From $X_C = \\frac{1}{2\\pi f C}$, $[C] = \\frac{1}{\\text{Hz} \\cdot \\Omega} = \\frac{\\text{s}}{\\Omega}$. Also $1\\text{ C/V} = \\frac{\\text{A}\\cdot\\text{s}}{\\text{V}} = \\frac{\\text{s}}{\\Omega} = \\text{C}^2/\\text{J}$."
    ],
    "stepByStepSolutionAr": [
      "السعة الكهربية هي $C = \\frac{Q}{V}$، وبالتالي $1\\text{ F} = 1\\text{ C/V}$. ومن قانون المفاعلة السعوية $[C] = \\frac{1}{\\text{Hz} \\cdot \\Omega} = \\text{s}/\\Omega$ (ثانية/أوم). وتكافئ أيضاً كولوم²/جول."
    ],
    "teacherTipEn": "Equivalents of Farad: $\\text{C/V} = \\text{s}/\\Omega = \\text{A}\\cdot\\text{s/V} = \\text{C}^2/\\text{J}$.",
    "teacherTipAr": "مكافئات الفاراد: كولوم/فولت = ثانية/أوم = أمبير.ثانية/فولت = كولوم²/جول."
  },
  {
    "id": "phys_ch4_db_easy_49",
    "titleEn": "Two Identical Inductors Connected in Parallel",
    "titleAr": "توصيل ملفي حث متماثلين على التوازي",
    "difficulty": "easy",
    "questionEn": "Two identical pure inductors, each of self-inductance $L$, are connected in PARALLEL across an AC source of frequency $f$. Their equivalent self-inductance and equivalent inductive reactance are, respectively:",
    "questionAr": "ملفا حث نقيان متماثلان معامل حث كل منهما $L$ وُصلا على التوازي مع مصدر تيار متردد تردده $f$. فإن معامل حثهما المكافئ ومفاعلتهما الحثية المكافئة هما على الترتيب:",
    "optionsEn": [
      "$L_{\\text{eq}} = \\frac{L}{2}$ and $X_{L,\\text{eq}} = \\frac{X_L}{2}$",
      "$L_{\\text{eq}} = 2L$ and $X_{L,\\text{eq}} = 2X_L$",
      "$L_{\\text{eq}} = L$ and $X_{L,\\text{eq}} = X_L$",
      "$L_{\\text{eq}} = \\frac{L}{4}$ and $X_{L,\\text{eq}} = \\frac{X_L}{4}$"
    ],
    "optionsAr": [
      "$L_{\\text{eq}} = \\frac{L}{2}$ و $X_{L,\\text{eq}} = \\frac{X_L}{2}$",
      "$L_{\\text{eq}} = 2L$ و $X_{L,\\text{eq}} = 2X_L$",
      "$L_{\\text{eq}} = L$ و $X_{L,\\text{eq}} = X_L$",
      "$L_{\\text{eq}} = \\frac{L}{4}$ and $X_{L,\\text{eq}} = \\frac{X_L}{4}$"
    ],
    "correctAnswer": "$L_{\\text{eq}} = \\frac{L}{2}$ and $X_{L,\\text{eq}} = \\frac{X_L}{2}$",
    "correctIndex": 0,
    "hintEn": "Inductors in parallel combine exactly like resistors in parallel.",
    "hintAr": "ملفات الحث على التوازي تُعامل تماماً كالمقاومات الأومية على التوازي.",
    "stepByStepSolutionEn": [
      "For parallel inductors: $\\frac{1}{L_{\\text{eq}}} = \\frac{1}{L} + \\frac{1}{L} = \\frac{2}{L} \\implies L_{\\text{eq}} = \\frac{L}{2}$. Since $X_L = 2\\pi f L$, the equivalent reactance is $X_{L,\\text{eq}} = 2\\pi f (L/2) = \\frac{X_L}{2}$."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل على التوازي لملفي حث: $\\frac{1}{L_{\\text{eq}}} = \\frac{1}{L} + \\frac{1}{L} = \\frac{2}{L} \\implies L_{\\text{eq}} = \\frac{L}{2}$. وبما أن المفاعلة طردية مع الحث، فإن المفاعلة المكافئة تقل للنصف أيضاً: $X_{L,\\text{eq}} = \\frac{X_L}{2}$."
    ],
    "teacherTipEn": "Inductors parallel $\\implies L/2$; Capacitors parallel $\\implies 2C$.",
    "teacherTipAr": "الملفات على التوازي تقل للنصف؛ والمكثفات على التوازي تتضاعف للضعف."
  },
  {
    "id": "phys_ch4_db_easy_50",
    "titleEn": "Two Identical Capacitors Connected in Series",
    "titleAr": "توصيل مكثفين متماثلين على التوالي",
    "difficulty": "easy",
    "questionEn": "Two identical capacitors, each of capacitance $C$ and capacitive reactance $X_C$, are connected in SERIES across an AC source. Their equivalent capacitance and equivalent capacitive reactance are, respectively:",
    "questionAr": "مكثفان متماثلان سعة كل منهما $C$ ومفاعلة كل منهما السعوية $X_C$ اتصلا على التوالي بمصدر تيار متردد. فإن سعتهما المكافئة ومفاعلتهما السعوية المكافئة هما على الترتيب:",
    "optionsEn": [
      "$C_{\\text{eq}} = 2C$ and $X_{C,\\text{eq}} = \\frac{X_C}{2}$",
      "$C_{\\text{eq}} = \\frac{C}{2}$ and $X_{C,\\text{eq}} = 2X_C$",
      "$C_{\\text{eq}} = \\frac{C}{2}$ and $X_{C,\\text{eq}} = \\frac{X_C}{2}$",
      "$C_{\\text{eq}} = 2C$ and $X_{C,\\text{eq}} = 2X_C$"
    ],
    "optionsAr": [
      "$C_{\\text{eq}} = 2C$ و $X_{C,\\text{eq}} = \\frac{X_C}{2}$",
      "$C_{\\text{eq}} = \\frac{C}{2}$ و $X_{C,\\text{eq}} = 2X_C$",
      "$C_{\\text{eq}} = \\frac{C}{2}$ and $X_{C,\\text{eq}} = \\frac{X_C}{2}$",
      "$C_{\\text{eq}} = 2C$ and $X_{C,\\text{eq}} = 2X_C$"
    ],
    "correctAnswer": "$C_{\\text{eq}} = \\frac{C}{2}$ and $X_{C,\\text{eq}} = 2X_C$",
    "correctIndex": 1,
    "hintEn": "Capacitances in series halve ($C/2$), but reactances in series add ($X_C + X_C = 2X_C$).",
    "hintAr": "السعات على التوالي تقل للنصف ($C/2$)، بينما المفاعلات السعوية تُجمع جمعاً جبرياً ($2X_C$).",
    "stepByStepSolutionEn": [
      "For series capacitors: $\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C} + \\frac{1}{C} = \\frac{2}{C} \\implies C_{\\text{eq}} = \\frac{C}{2}$. Because capacitive reactance is inversely proportional to capacitance ($X_C \\propto 1/C$), halving the capacitance doubles the total reactance: $X_{C,\\text{eq}} = X_C + X_C = 2X_C$."
    ],
    "stepByStepSolutionAr": [
      "في توصيل التوالي: مقلوب السعة المكافئة يساوي مجموع المقلوبات فتكون السعة المكافئة $C_{\\text{eq}} = \\frac{C}{2}$. وبما أن المفاعلة السعوية تتناسب عكسياً مع السعة، فإن إنقاص السعة للنصف يضاعف المفاعلة السعوية الكلية: $X_{C,\\text{eq}} = X_C + X_C = 2X_C$."
    ],
    "teacherTipEn": "Crucial distinction: Capacitance halves, but capacitive reactance doubles!",
    "teacherTipAr": "تنبيه امتحاني هام: السعة تقل للنصف، بينما المفاعلة السعوية تتضاعف!"
  },
  {
    "id": "phys_ch4_db_easy_51",
    "titleEn": "Why Capacitors Are Connected in Parallel in Power Grids",
    "titleAr": "توصيل مكثفات على التوازي لتحسين معامل القدرة",
    "difficulty": "easy",
    "questionEn": "In industrial power transmission grids feeding heavy inductive loads (such as induction motors and transformers), banks of large capacitors are connected in parallel to:",
    "questionAr": "في شبكات نقل الكهرباء الصناعية التي تغذي أحمالاً حثية ثقيلة (كالمحركات والمحولات)، تُوصل مجموعات من المكثفات على التوازي لـ:",
    "optionsEn": [
      "Increase the resistance of the factory machinery",
      "Convert the factory supply from AC to DC",
      "Improve the power factor by supplying capacitive current that cancels the lagging inductive current",
      "Double the electricity bill"
    ],
    "optionsAr": [
      "زيادة المقاومة الأومية للآلات",
      "تحويل كهرباء المصنع إلى تيار مستمر",
      "تحسين معامل القدرة بتوفير تيار سعوي يلاشي التيار الحثي المتأخر",
      "مضاعفة فاتورة الكهرباء"
    ],
    "correctAnswer": "Improve the power factor by supplying capacitive current that cancels the lagging inductive current",
    "correctIndex": 2,
    "hintEn": "Inductive current lags by $90^\\circ$; capacitive current leads by $90^\\circ$. They cancel each other.",
    "hintAr": "التيار الحثي متأخر بـ $90^\\circ$ بينما السعوي متقدم بـ $90^\\circ$ فيلغي كل منهما الآخر ويقترب معامل القدرة من 1.",
    "stepByStepSolutionEn": [
      "Inductive loads draw a lagging current ($\\phi > 0$), which lowers the power factor ($\\cos\\phi < 1$) and forces power plants to transmit large useless reactive current. Connecting parallel capacitors draws a leading current that cancels this reactive component, bringing $\\cos\\phi$ close to 1 and minimizing transmission cable losses."
    ],
    "stepByStepSolutionAr": [
      "المحركات الحثية تسحب تياراً متأخراً في الطور عن الجهد مما يخفض معامل القدرة ($\\cos\\phi < 1$) ويزيد الفقد في خطوط النقل. توصيل بنك مكثفات على التوازي يسحب تياراً متقدماً يعاكس ويلاشي التيار الحثي المتأخر، مما يرفع معامل القدرة ليقترب من الواحد الصحيح ويقلل الفقد في الطاقة وتكاليف النقل."
    ],
    "teacherTipEn": "Power factor correction is a vital engineering application of AC circuit theory.",
    "teacherTipAr": "تحسين معامل القدرة تطبيق هندسي واقتصادي جوهري لنظرية دوائر التيار المتردد."
  },
  {
    "id": "phys_ch4_db_easy_52",
    "titleEn": "Effect of Inserting a Dielectric into Capacitor on Reactance",
    "titleAr": "أثر وضع مادة عازلة بين لوحي مكثف على مفاعلته السعوية",
    "difficulty": "easy",
    "questionEn": "If a slab of mica or glass with relative permittivity $\\varepsilon_r = 5$ is inserted between the plates of an air capacitor in an AC circuit, its capacitive reactance ($X_C$):",
    "questionAr": "إذا وُضعت مادة عازلة كالميكا أو الزجاج ثابت عزلها النسبي $\\varepsilon_r = 5$ بين لوحي مكثف هوائي في دائرة تيار متردد، فإن مفاعلته السعوية ($X_C$):",
    "optionsEn": [
      "Increases fivefold ($5X_C$)",
      "Remains completely unchanged",
      "Drops immediately to zero",
      "Decreases to one-fifth of its original value ($X_C / 5$)"
    ],
    "optionsAr": [
      "تزداد إلى خمسة أمثالها ($5X_C$)",
      "تظل ثابتة دون أي تغيير",
      "تنعدم فوراً",
      "تقل إلى خُمس قيمتها الأصلية ($X_C / 5$)"
    ],
    "correctAnswer": "Decreases to one-fifth of its original value ($X_C / 5$)",
    "correctIndex": 3,
    "hintEn": "Capacitance increases: $C' = \\varepsilon_r C = 5C$. Reactance is $X_C \\propto 1/C$.",
    "hintAr": "السعة تزداد: $C' = \\varepsilon_r C = 5C$. والمفاعلة السعوية عكسية مع السعة $X_C \\propto 1/C$.",
    "stepByStepSolutionEn": [
      "The capacitance of a parallel-plate capacitor is $C = \\frac{\\varepsilon A}{d} = \\varepsilon_r C_0$. Inserting a dielectric of $\\varepsilon_r = 5$ increases capacitance by 5 times ($C' = 5C$). Because capacitive reactance is inversely proportional to capacitance ($X_C = \\frac{1}{2\\pi f C}$), the new reactance is $X'_C = \\frac{X_C}{5}$."
    ],
    "stepByStepSolutionAr": [
      "سعة المكثف ذي اللوحين المتوازيين هي $C = \\frac{\\varepsilon A}{d}$. وضع مادة عازلة ثابت عزلها 5 يزيد سعة المكثف إلى 5 أمثالها ($C' = 5C$). وبما أن المفاعلة السعوية تتناسب عكسياً مع السعة ($X_C = \\frac{1}{2\\pi f C}$)، فإن المفاعلة السعوية تقل إلى الخمس: $X'_C = \\frac{X_C}{5}$."
    ],
    "teacherTipEn": "Dielectric increases capacitance $\\implies$ decreases capacitive reactance $\\implies$ increases AC current.",
    "teacherTipAr": "المادة العازلة تزيد السعة $\\implies$ تقلل المفاعلة السعوية $\\implies$ تزيد شدة التيار المتردد."
  },
  {
    "id": "phys_ch4_db_easy_53",
    "titleEn": "Current Drawn in RLC Circuit at Extremely Low Frequencies",
    "titleAr": "شدة التيار في دائرة RLC عند الترددات المنخفضة جداً",
    "difficulty": "easy",
    "questionEn": "In a series RLC circuit connected to an AC source of variable frequency, as the frequency approaches zero ($f \\to 0$), the electric current in the circuit:",
    "questionAr": "في دائرة RLC على التوالي متصلة بمصدر تيار متردد متغير التردد، عندما يقترب تردد المصدر من الصفر ($f \\to 0$)، فإن شدة التيار في الدائرة:",
    "optionsEn": [
      "Approaches zero ($I \\to 0$), because capacitive reactance approaches infinity ($X_C \\to \\infty$)",
      "Approaches infinity ($I \\to \\infty$)",
      "Reaches its maximum resonant value",
      "Becomes purely direct current equal to $V/R$"
    ],
    "optionsAr": [
      "تقترب من الصفر وتكاد تنعدم ($I \\to 0$) لأن المفاعلة السعوية للمكثف تؤول إلى اللانهاية ($X_C \\to \\infty$)",
      "تؤول إلى اللانهاية ($I \\to \\infty$)",
      "تصل إلى قيمتها العظمى للرنين",
      "تتحول إلى تيار مستمر يساوي $V/R$"
    ],
    "correctAnswer": "Approaches zero ($I \\to 0$), because capacitive reactance approaches infinity ($X_C \\to \\infty$)",
    "correctIndex": 0,
    "hintEn": "At $f \\to 0$, capacitor blocks current: $X_C = \\frac{1}{2\\pi f C} \\to \\infty$.",
    "hintAr": "عند اقتراب التردد من الصفر يتصرف المكثف كدائرة مفتوحة لأن $X_C \\to \\infty$.",
    "stepByStepSolutionEn": [
      "As $f \\to 0$, $X_C = \\frac{1}{2\\pi f C} \\to \\infty$, while $X_L = 2\\pi f L \\to 0$. The total impedance $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ becomes virtually infinite ($Z \\to \\infty$). Consequently, the circuit current drops to zero ($I = V/Z \\to 0$)."
    ],
    "stepByStepSolutionAr": [
      "عندما يقترب التردد من الصفر، تقترب المفاعلة السعوية من اللانهاية ($X_C \\to \\infty$) وتؤول المفاعلة الحثية للصفر. فتصبح المعاوقة الكلية لا نهائية تقريباً ($Z \\to \\infty$)، وتنعدم شدة التيار في الدائرة بسبب حجب المكثف للتيارات منخفضة التردد."
    ],
    "teacherTipEn": "Low frequency blocked by C; High frequency blocked by L.",
    "teacherTipAr": "الترددات المنخفضة يحجبها المكثف؛ والترددات العالية يحجبها ملف الحث."
  },
  {
    "id": "phys_ch4_db_easy_54",
    "titleEn": "Current Drawn in RLC Circuit at Extremely High Frequencies",
    "titleAr": "شدة التيار في دائرة RLC عند الترددات العالية جداً",
    "difficulty": "easy",
    "questionEn": "In the same series RLC circuit, as the source frequency approaches very high values ($f \\to \\infty$), the electric current in the circuit:",
    "questionAr": "في نفس دائرة RLC على التوالي، عندما يقترب تردد المصدر من قيم عالية جداً ($f \\to \\infty$)، فإن شدة التيار المار في الدائرة:",
    "optionsEn": [
      "Reaches its maximum peak value",
      "Approaches zero ($I \\to 0$), because inductive reactance approaches infinity ($X_L \\to \\infty$)",
      "Equals $V/R$ exactly",
      "Reverses direction into the battery"
    ],
    "optionsAr": [
      "تصل لأقصى قيمة عظمى",
      "تقترب من الصفر وتكاد تنعدم ($I \\to 0$) لأن المفاعلة الحثية للملف تؤول إلى اللانهاية ($X_L \\to \\infty$)",
      "تساوي $V/R$ تماماً",
      "تنعكس في اتجاه المصدر"
    ],
    "correctAnswer": "Approaches zero ($I \\to 0$), because inductive reactance approaches infinity ($X_L \\to \\infty$)",
    "correctIndex": 1,
    "hintEn": "At $f \\to \\infty$, inductor blocks current: $X_L = 2\\pi f L \\to \\infty$.",
    "hintAr": "عند الترددات العالية جداً تؤول المفاعلة الحثية للانهاية وتمنع مرور التيار.",
    "stepByStepSolutionEn": [
      "As $f \\to \\infty$, inductive reactance grows without bound ($X_L = 2\\pi f L \\to \\infty$), while capacitive reactance approaches zero ($X_C \\to 0$). The total impedance $Z = \\sqrt{R^2 + (X_L - X_C)^2} \\to \\infty$. Therefore, current is blocked and drops to zero."
    ],
    "stepByStepSolutionAr": [
      "عند الترددات العالية جداً، تتزايد المفاعلة الحثية بلا حدود ($X_L \\to \\infty$) بينما تتلاشى المفاعلة السعوية ($X_C \\to 0$). فتصبح المعاوقة الكلية لا نهائية وتمنع مرور التيار فينعدم ($I \\to 0$)."
    ],
    "teacherTipEn": "Current is maximum only at resonant frequency $f_0$, dropping to zero at both extreme limits ($f \\to 0$ and $f \\to \\infty$).",
    "teacherTipAr": "يكون التيار أقصى ما يمكن عند تردد الرنين فقط، وينعدم عند الطرفين ($f \\to 0$ و $f \\to \\infty$)."
  },
  {
    "id": "phys_ch4_db_easy_55",
    "titleEn": "Bulb Connected to Inductor with Iron Core Inserted",
    "titleAr": "مصباح متصل بملف حث عند إدخال ساق حديد",
    "difficulty": "easy",
    "questionEn": "An incandescent electric lamp is connected in series with a coil of significant self-inductance and an AC source. If a soft iron rod is inserted into the coil, the brightness of the lamp:",
    "questionAr": "مصباح كهربي متصل على التوالي مع ملف حث ومصدر تيار متردد. إذا أُدخلت ساق من الحديد المطاوع داخل تجويف الملف، فإن إضاءة المصباح:",
    "optionsEn": [
      "Increases significantly",
      "Remains completely unchanged",
      "Decreases, because the iron core increases self-inductance and inductive reactance ($X_L \\uparrow$), increasing total impedance and reducing current",
      "Flashes and then explodes"
    ],
    "optionsAr": [
      "تزداد زيادة ملحوظة",
      "تظل ثابتة دون تغيير",
      "تقل، لأن القلب الحديدي يزيد معامل الحث والمفاعلة الحثية ($X_L$) فتزداد المعاوقة ويقل التيار",
      "تومض ثم تنفجر"
    ],
    "correctAnswer": "Decreases, because the iron core increases self-inductance and inductive reactance ($X_L \\uparrow$), increasing total impedance and reducing current",
    "correctIndex": 2,
    "hintEn": "Iron increases permeability $\\mu \\implies L \\uparrow \\implies X_L \\uparrow \\implies Z \\uparrow \\implies I \\downarrow$.",
    "hintAr": "الحديد يزيد النفاذية $\\mu \\implies L$ تزداد $\\implies X_L$ تزداد $\\implies$ المعاوقة تزداد فيقل التيار وتقل الإضاءة.",
    "stepByStepSolutionEn": [
      "Inserting a soft iron core dramatically increases the magnetic permeability ($\\mu_{\\text{iron}} \\gg \\mu_{\\text{air}}$). This raises the self-inductance $L = \\frac{\\mu N^2 A}{\\ell}$ and the inductive reactance $X_L = 2\\pi f L$. Since impedance $Z = \\sqrt{R^2 + X_L^2}$ increases, the current $I = V/Z$ decreases, diminishing the electrical power dissipated in the lamp and decreasing its brightness."
    ],
    "stepByStepSolutionAr": [
      "وضع ساق الحديد المطاوع يزيد النفاذية المغناطيسية لمسار الفيض، فيزداد معامل الحث الذاتي للملف وتزداد مفاعلته الحثية $X_L$. وبزيادة المفاعلة الحثية تزداد المعاوقة الكلية للدائرة ($Z = \\sqrt{R^2 + X_L^2}$)، فتقل شدة التيار المار في المصباح وتقل قدرته المستهلكة وإضاءته."
    ],
    "teacherTipEn": "If connected to a DC source instead of AC, inserting the iron rod would have NO effect on steady brightness!",
    "teacherTipAr": "انتبه: لو كان المصدر تياراً مستمراً بدلاً من المتردد، لما تأثرت إضاءة المصباح عند ثبوت التيار!"
  },
  {
    "id": "phys_ch4_db_easy_56",
    "titleEn": "Bulb Connected to Inductor in DC Circuit with Iron Core",
    "titleAr": "مصباح متصل بملف حث في دائرة تيار مستمر عند إدخال ساق حديد",
    "difficulty": "easy",
    "questionEn": "In the previous question, if the AC source is replaced with a DC battery of the same voltage, upon inserting the soft iron rod into the coil, the steady brightness of the lamp:",
    "questionAr": "في السؤال السابق، إذا استُبدل مصدر التيار المتردد بمصدر تيار مستمر (بطارية) له نفس فرق الجهد، فعند إدخال ساق الحديد المطاوع، فإن إضاءة المصباح في الحالة المستقرة:",
    "optionsEn": [
      "Decreases",
      "Increases",
      "Extinguishes completely",
      "Remains completely unchanged, because inductive reactance is zero for DC ($X_L = 0$)"
    ],
    "optionsAr": [
      "تقل",
      "تزداد",
      "تنطفئ تماماً",
      "تظل ثابتة دون أي تغيير، لأن المفاعلة الحثية للملف تنعدم في حالة التيار المستمر ($X_L = 0$)"
    ],
    "correctAnswer": "Remains completely unchanged, because inductive reactance is zero for DC ($X_L = 0$)",
    "correctIndex": 3,
    "hintEn": "For DC, $f = 0 \\implies X_L = 0$. Current depends only on ohmic resistance $R$.",
    "hintAr": "للتيار المستمر $f = 0$ وتكون $X_L = 0$، ويعتمد التيار فقط على المقاومة الأومية للأسلاك.",
    "stepByStepSolutionEn": [
      "In a DC circuit, after the initial transient state, the current is steady ($dI/dt = 0$). Because frequency is zero, $X_L = 0$. The current is determined solely by the ohmic resistance of the lamp and the wire of the coil ($I = V_B / (R_{\\text{lamp}} + R_{\\text{coil}})$). Inserting an iron core changes $L$, but does not affect ohmic resistance, so the steady brightness remains constant."
    ],
    "stepByStepSolutionAr": [
      "في دائرة التيار المستمر بعد استقرار التيار تنعدم المفاعلة الحثية تماماً ($X_L = 0$) لثبوت شدة التيار وانعدام التردد. وتتحدد شدة التيار بالمقاومة الأومية فقط ($I = \\frac{V_B}{R}$)، ووضع الحديد يغير معامل الحث $L$ ولا يغير المقاومة الأومية، فتظل إضاءة المصباح ثابتة دون تغيير."
    ],
    "teacherTipEn": "Classic contrast: Iron core dims lamp on AC, but has no effect on DC steady brightness.",
    "teacherTipAr": "مقارنة جوهرية: قلب الحديد يقلل الإضاءة في المتردد، ولا يؤثر على الإضاءة في المستمر."
  },
  {
    "id": "phys_ch4_db_easy_57",
    "titleEn": "Resonant Circuit Inductor Voltage Can Exceed Source Voltage",
    "titleAr": "جهد ملف الحث في دائرة الرنين يمكن أن يتجاوز جهد المصدر",
    "difficulty": "easy",
    "questionEn": "In a series RLC circuit in electrical resonance ($X_L = X_C$), the voltage across the inductor ($V_L$) can be:",
    "questionAr": "في دائرة RLC متصلة على التوالي في حالة رنين ($X_L = X_C$)، يمكن لفرق الجهد بين طرفي ملف الحث ($V_L$) أن يكون:",
    "optionsEn": [
      "Much greater than the total source voltage ($V_L > V$), because $V_L = I X_L$ and $X_L$ can be much larger than $R$",
      "Always less than the source voltage strictly",
      "Zero under all conditions",
      "Negative infinite"
    ],
    "optionsAr": [
      "أكبر بكثير من فرق جهد المصدر الكلي ($V_L > V$)، لأن $V_L = I X_L$ ويمكن أن تكون $X_L$ أكبر بكثير من المقاومة الأومية $R$",
      "أقل من جهد المصدر دائماً بالضرورة",
      "صفراً في جميع الحالات",
      "سالباً لا نهائياً"
    ],
    "correctAnswer": "Much greater than the total source voltage ($V_L > V$), because $V_L = I X_L$ and $X_L$ can be much larger than $R$",
    "correctIndex": 0,
    "hintEn": "At resonance, $I = V/R$. Then $V_L = I X_L = V \\left(\\frac{X_L}{R}\\right)$. If $X_L > R$, then $V_L > V$!",
    "hintAr": "عند الرنين $I = V/R$، فيكون $V_L = V \\left(\\frac{X_L}{R}\\right)$. فإذا كانت $X_L > R$ فإن $V_L > V$ بمقدار معامل الجودة $Q$!",
    "stepByStepSolutionEn": [
      "At resonance, current reaches $I = \\frac{V}{R}$. The voltage across the inductor is $V_L = I X_L = V \\frac{X_L}{R} = Q \\cdot V$, where $Q = \\frac{X_L}{R}$ is the Quality Factor. If the circuit has low resistance ($R \\ll X_L$), $Q$ can be 50 or 100, meaning $V_L$ and $V_C$ can reach thousands of volts even when the source is only $100\\text{ V}$!"
    ],
    "stepByStepSolutionAr": [
      "في حالة الرنين يصل التيار لأقصى شدة $I = \\frac{V}{R}$. ويكون فرق الجهد عبر الملف $V_L = I X_L = V \\left(\\frac{X_L}{R}\\right) = Q \\times V$، حيث $Q$ هو معامل الجودة. فإذا كانت المقاومة الأومية صغيرة جداً مقارنة بالمفاعلة ($R \\ll X_L$)، يمكن لجهد الملف والمكثف أن يصلا لعدة آلاف من الفولتات رغم أن جهد المصدر $100\\text{ V}$ فقط!"
    ],
    "teacherTipEn": "This voltage magnification is called resonance voltage magnification.",
    "teacherTipAr": "تُعرف هذه الظاهرة بالتضخيم الجهد عند الرنين."
  },
  {
    "id": "phys_ch4_db_easy_58",
    "titleEn": "Quality Factor (Q-Factor) of an RLC Resonant Circuit",
    "titleAr": "معامل جودة دائرة الرنين",
    "difficulty": "easy",
    "questionEn": "The Quality Factor ($Q$) of a series RLC resonant circuit, which measures the sharpness of resonance and voltage magnification, is given by:",
    "questionAr": "يُعطى معامل الجودة ($Q$) لدائرة رنين RLC على التوالي بالعلاقة:",
    "optionsEn": [
      "$Q = R \\sqrt{\\frac{L}{C}}$",
      "$Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$",
      "$Q = \\frac{R}{\\omega_0 L}$",
      "$Q = \\frac{1}{\\sqrt{L C}}$"
    ],
    "optionsAr": [
      "$Q = R \\sqrt{\\frac{L}{C}}$",
      "$Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$",
      "$Q = \\frac{R}{\\omega_0 L}$",
      "$Q = \\frac{1}{\\sqrt{L C}}$"
    ],
    "correctAnswer": "$Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$",
    "correctIndex": 1,
    "hintEn": "$Q = \\frac{V_L}{V} = \\frac{X_L}{R} = \\frac{\\omega_0 L}{R} = \\frac{1}{\\sqrt{LC}} \\frac{L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.",
    "hintAr": "$Q = \\frac{X_L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.",
    "stepByStepSolutionEn": [
      "The quality factor is defined as $Q = \\frac{V_L}{V} = \\frac{X_L}{R} = \\frac{2\\pi f_0 L}{R}$. Substituting $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$ yields $Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$. A higher $Q$ factor means a sharper resonance curve and higher selectivity."
    ],
    "stepByStepSolutionAr": [
      "يُعرف معامل الجودة بأنه النسبة بين جهد الملف (أو المكثف) عند الرنين إلى جهد المصدر: $Q = \\frac{V_L}{V} = \\frac{X_L}{R}$. وبالتعويض عن تردد الرنين نحصل على: $Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$. وكلما صغرت المقاومة $R$ زاد معامل الجودة وزادت حدة الرنين ودقة اختيار المحطة الإذاعية."
    ],
    "teacherTipEn": "Higher Q $\\implies$ sharper tuning peak $\\implies$ superior radio station discrimination.",
    "teacherTipAr": "زيادة معامل الجودة $\\implies$ قمة رنين أكثر حدة $\\implies$ دقة فائقة في فصل المحطات."
  }
],
  medium: [
  {
    "id": "phys_ch4_db_med_01",
    "titleEn": "Inductive Reactance Calculation",
    "titleAr": "حساب المفاعلة الحثية لملف",
    "difficulty": "medium",
    "questionEn": "An inductor of self-inductance $L = \\frac{7}{220}\\text{ H}$ (negligible resistance) is connected to an AC source of frequency $f = 50\\text{ Hz}$ and voltage $220\\text{ V}$. The inductive reactance ($X_L$) of the coil is ($\\pi = \\frac{22}{7}$):",
    "questionAr": "ملف حث معامل حثه الذاتي $L = \\frac{7}{220}\\text{ H}$ مهمل المقاومة الأومية اتصل بمصدر تيار متردد تردده $50\\text{ Hz}$ وفرق جهده $220\\text{ V}$. فإن المفاعلة الحثية ($X_L$) للملف تساوي ($\\pi = \\frac{22}{7}$):",
    "optionsEn": [
      "$10\\,\\Omega$",
      "$20\\,\\Omega$",
      "$5\\,\\Omega$",
      "$100\\,\\Omega$"
    ],
    "optionsAr": [
      "$10\\,\\Omega$",
      "$20\\,\\Omega$",
      "$5\\,\\Omega$",
      "$100\\,\\Omega$"
    ],
    "correctAnswer": "$10\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$X_L = 2\\pi f L$.",
    "hintAr": "$X_L = 2\\pi f L$.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L = 2 \\times \\frac{22}{7} \\times 50 \\times \\frac{7}{220} = 2 \\times 50 \\times \\frac{22}{220} = 100 \\times 0.1 = 10\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2 \\times \\frac{22}{7} \\times 50 \\times \\frac{7}{220} = 10\\,\\Omega$."
    ],
    "teacherTipEn": "Direct formula application with standard Egyptian curriculum numbers.",
    "teacherTipAr": "تطبيق مباشر بالأرقام المعتادة في كتاب الوزارة."
  },
  {
    "id": "phys_ch4_db_med_02",
    "titleEn": "Current in Pure Inductor with Constant Voltage vs Variable Frequency",
    "titleAr": "شدة التيار في ملف حث نقي مع مصدر جهد ثابت وتردد متغير",
    "difficulty": "medium",
    "questionEn": "A pure inductor of self-inductance $L$ is connected to an AC source of CONSTANT voltage $V$. If the frequency of the source is doubled ($2f$), the electric current flowing in the coil:",
    "questionAr": "ملف حث نقي معامل حثه $L$ اتصل بمصدر تيار متردد ثـابـت الجهد $V$. إذا تضاعف تردد المصدر ($2f$)، فإن شدة التيار المار في الملف:",
    "optionsEn": [
      "Doubles to $2I$",
      "Decreases to half its original value ($I/2$)",
      "Remains completely constant",
      "Quadruples to $4I$"
    ],
    "optionsAr": [
      "تتضاعف إلى مثليها ($2I$)",
      "تقل إلى نصف قيمتها الأصلية ($I/2$)",
      "تظل ثابتة دون تغيير",
      "تزداد إلى أربعة أمثالها ($4I$)"
    ],
    "correctAnswer": "Decreases to half its original value ($I/2$)",
    "correctIndex": 1,
    "hintEn": "$X_L = 2\\pi f L \\propto f$. With constant $V$, $I = \\frac{V}{X_L} \\propto \\frac{1}{f}$.",
    "hintAr": "$X_L \\propto f$. وعند ثبوت فرق الجهد $V$، يكون $I = \\frac{V}{X_L} \\propto \\frac{1}{f}$.",
    "stepByStepSolutionEn": [
      "Because the source voltage $V$ is held constant, doubling the frequency doubles the inductive reactance: $X'_L = 2 X_L$. By Ohm's law, $I' = \\frac{V}{X'_L} = \\frac{V}{2 X_L} = \\frac{1}{2} I$."
    ],
    "stepByStepSolutionAr": [
      "بما أن جهد المصدر ثابت، فإن مضاعفة التردد تؤدي إلى مضاعفة المفاعلة الحثية $X'_L = 2 X_L$. ومن قانون أوم: $I' = \\frac{V}{2 X_L} = \\frac{I}{2}$، فتقل شدة التيار إلى النصف."
    ],
    "teacherTipEn": "Key phrase: 'Constant voltage source' $\\implies I \\propto 1/f$ for an inductor.",
    "teacherTipAr": "انتبه لعبارة: 'مصدر ثابت الجهد' $\\implies I \\propto 1/f$ لملف الحث."
  },
  {
    "id": "phys_ch4_db_med_03",
    "titleEn": "Current in Pure Inductor Connected to an AC Dynamo",
    "titleAr": "شدة التيار في ملف حث متصل بدينامو مهمل المقاومة الداخلية",
    "difficulty": "medium",
    "questionEn": "A pure inductor of self-inductance $L$ is connected across the terminals of an AC dynamo (negligible internal resistance). If the rotational speed of the dynamo coil is doubled, the electric current passing through the inductor:",
    "questionAr": "ملف حث نقي معامل حثه $L$ اتصل بطرفي دينامو تيار متردد مهمل المقاومة الداخلية. إذا تضاعفت سرعة دوران ملف الدينامو، فإن شدة التيار المار في الملف:",
    "optionsEn": [
      "Doubles to $2I$",
      "Halves to $I/2$",
      "Remains constant (independent of frequency)",
      "Quadruples to $4I$"
    ],
    "optionsAr": [
      "تتضاعف إلى مثليها ($2I$)",
      "تقل إلى النصف ($I/2$)",
      "تظل ثابتة دون أي تغيير (لا تتأثر بالتردد)",
      "تزداد إلى أربعة أمثالها ($4I$)"
    ],
    "correctAnswer": "Remains constant (independent of frequency)",
    "correctIndex": 2,
    "hintEn": "Dynamo voltage is $V \\propto f$, and $X_L \\propto f$. $I = \\frac{V}{X_L} \\propto \\frac{f}{f} = \\text{const}$.",
    "hintAr": "جهد الدينامو $V \\propto f$ والمفاعلة $X_L \\propto f$، فتكون النسبة $I = \\frac{V}{X_L}$ ثابتة ومستقلة عن التردد.",
    "stepByStepSolutionEn": [
      "For an AC dynamo, output voltage is proportional to frequency: $V = 2\\pi N B A f \\propto f$. The inductive reactance is also proportional to frequency: $X_L = 2\\pi f L \\propto f$. The current is $I = \\frac{V}{X_L} = \\frac{2\\pi N B A f}{2\\pi f L} = \\frac{N B A}{L}$. Because $f$ cancels out completely, current is strictly independent of rotational frequency!"
    ],
    "stepByStepSolutionAr": [
      "في دينامو التيار المتردد يتناسب فرق الجهد طردياً مع التردد: $V = 2\\pi N B A f$. وتتناسب المفاعلة الحثية أيضاً طردياً مع التردد: $X_L = 2\\pi f L$. شدة التيار: $I = \\frac{V}{X_L} = \\frac{N B A}{L}$. يختصر التردد $f$ تماماً من البسط والمقام، وتظل شدة التيار ثابتة ولا تتأثر بسرعة دوران الدينامو!"
    ],
    "teacherTipEn": "Vital distinction: Dynamo + Inductor $\\implies I = \\text{constant}$!",
    "teacherTipAr": "سؤال امتحاني جوهري: دينامو + ملف حث نقي $\\implies$ شدة التيار ثابتة ومستقلة عن التردد!"
  },
  {
    "id": "phys_ch4_db_med_04",
    "titleEn": "Current in Pure Capacitor Connected to an AC Dynamo",
    "titleAr": "شدة التيار في مكثف متصل بدينامو مهمل المقاومة الداخلية",
    "difficulty": "medium",
    "questionEn": "A pure capacitor of capacitance $C$ is connected across the terminals of an AC dynamo (negligible internal resistance). If the rotational speed of the dynamo coil is doubled ($2f$), the electric current passing through the capacitor becomes:",
    "questionAr": "مكثف نقي سعته $C$ اتصل بطرفي دينامو تيار متردد مهمل المقاومة الداخلية. إذا تضاعفت سرعة دوران ملف الدينامو ($2f$)، فإن شدة التيار المار في المكثف تصبح:",
    "optionsEn": [
      "Double its original value ($2I$)",
      "Remains constant",
      "Half its original value ($I/2$)",
      "$4$ times its original value ($4I$)"
    ],
    "optionsAr": [
      "ضعف قيمتها الأصلية ($2I$)",
      "تظل ثابتة دون تغيير",
      "نصف قيمتها الأصلية ($I/2$)",
      "$4$ أمثال قيمتها الأصلية ($4I$)"
    ],
    "correctAnswer": "$4$ times its original value ($4I$)",
    "correctIndex": 3,
    "hintEn": "Dynamo voltage $V \\propto f$, and $X_C \\propto 1/f$. $I = \\frac{V}{X_C} \\propto f \\times f = f^2$.",
    "hintAr": "جهد الدينامو $V \\propto f$ والمفاعلة $X_C \\propto 1/f$، فيكون التيار $I = \\frac{V}{X_C} \\propto f^2$.",
    "stepByStepSolutionEn": [
      "Dynamo voltage is $V \\propto f$. Capacitive reactance is $X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$. Current is $I = \\frac{V}{X_C} = V (2\\pi f C) \\propto (f)(f) = f^2$. Doubling the frequency ($2f$) increases current by $(2)^2 = 4$ times!"
    ],
    "stepByStepSolutionAr": [
      "جهد الدينامو يتناسب طردياً مع التردد $V \\propto f$. والمفاعلة السعوية تتناسب عكسياً مع التردد $X_C \\propto 1/f$. فيكون التيار: $I = \\frac{V}{X_C} = V (2\\pi f C) \\propto f^2$. عند مضاعفة التردد للضعف، يزداد التيار إلى أربعة أمثاله ($4I$) لأن الجهد يتضاعف والمفاعلة تقل للنصف في نفس الوقت!"
    ],
    "teacherTipEn": "Dynamo + Resistor $\\implies I \\propto f$; Dynamo + Inductor $\\implies I = \\text{const}$; Dynamo + Capacitor $\\implies I \\propto f^2$!",
    "teacherTipAr": "ملخص ذهبي مع الدينامو: مع المقاومة $I \\propto f$؛ مع الملف $I = \\text{ثابت}$؛ مع المكثف $I \\propto f^2$!"
  },
  {
    "id": "phys_ch4_db_med_05",
    "titleEn": "Current in Pure Resistor Connected to an AC Dynamo",
    "titleAr": "شدة التيار في مقاومة أومية متصلة بدينامو",
    "difficulty": "medium",
    "questionEn": "A pure ohmic resistor $R$ is connected across the terminals of an AC dynamo. If the rotational speed of the dynamo coil is doubled, the electric current passing through the resistor:",
    "questionAr": "مقاومة أومية عديمة الحث $R$ اتصلت بطرفي دينامو تيار متردد. إذا تضاعفت سرعة دوران ملف الدينامو، فإن شدة التيار المار في المقاومة:",
    "optionsEn": [
      "Doubles to $2I$",
      "Quadruples to $4I$",
      "Remains constant",
      "Halves to $I/2$"
    ],
    "optionsAr": [
      "تتضاعف إلى مثليها ($2I$)",
      "تزداد إلى 4 أمثالها ($4I$)",
      "تظل ثابتة",
      "تقل إلى النصف ($I/2$)"
    ],
    "correctAnswer": "Doubles to $2I$",
    "correctIndex": 0,
    "hintEn": "$V \\propto f$, and $R = \\text{const}$. $I = \\frac{V}{R} \\propto f$.",
    "hintAr": "$V \\propto f$ والمقاومة $R$ ثابتة لا تتأثر بالتردد، فيكون $I \\propto f$.",
    "stepByStepSolutionEn": [
      "Dynamo voltage is $V = 2\\pi N B A f \\propto f$. Since ohmic resistance $R$ is strictly independent of frequency, $I = \\frac{V}{R} \\propto f$. Doubling frequency doubles the current."
    ],
    "stepByStepSolutionAr": [
      "جهد الدينامو يتناسب طردياً مع التردد $V \\propto f$. وحيث إن المقاومة الأومية $R$ ثابتة ولا تعتمد على التردد، فإن شدة التيار تتناسب طردياً مع التردد $I = \\frac{V}{R} \\propto f$. فتتضاعف شدة التيار إلى مثليها."
    ],
    "teacherTipEn": "Resistor current scales directly with dynamo frequency.",
    "teacherTipAr": "شدة تيار المقاومة تتناسب طردياً مع تردد دوران الدينامو."
  },
  {
    "id": "phys_ch4_db_med_06",
    "titleEn": "Capacitive Reactance Calculation",
    "titleAr": "حساب المفاعلة السعوية لمكثف",
    "difficulty": "medium",
    "questionEn": "A capacitor of capacitance $C = \\frac{7}{22}\\text{ }\\mu\\text{F}$ is connected to an AC source of frequency $f = 50\\text{ Hz}$. The capacitive reactance ($X_C$) of the capacitor is ($\\pi = \\frac{22}{7}$):",
    "questionAr": "مكثف سعته $C = \\frac{7}{22}\\text{ }\\mu\\text{F}$ اتصل بمصدر تيار متردد تردده $50\\text{ Hz}$. فإن مفاعلته السعوية ($X_C$) تساوي ($\\pi = \\frac{22}{7}$):",
    "optionsEn": [
      "$1000\\,\\Omega = 1\\text{ k}\\Omega$",
      "$10000\\,\\Omega = 10\\text{ k}\\Omega$",
      "$100\\,\\Omega$",
      "$5000\\,\\Omega$"
    ],
    "optionsAr": [
      "$1000\\,\\Omega = 1\\text{ k}\\Omega$",
      "$10000\\,\\Omega = 10\\text{ k}\\Omega$",
      "$100\\,\\Omega$",
      "$5000\\,\\Omega$"
    ],
    "correctAnswer": "$10000\\,\\Omega = 10\\text{ k}\\Omega$",
    "correctIndex": 1,
    "hintEn": "$X_C = \\frac{1}{2\\pi f C}$. Remember $1\\,\\mu\\text{F} = 10^{-6}\\text{ F}$.",
    "hintAr": "$X_C = \\frac{1}{2\\pi f C}$. تذكر أن الميكروفاراد يساوي $10^{-6}\\text{ F}$.",
    "stepByStepSolutionEn": [
      "$X_C = \\frac{1}{2 \\times \\frac{22}{7} \\times 50 \\times \\left(\\frac{7}{22} \\times 10^{-6}\\right)} = \\frac{1}{100 \\times 10^{-6}} = \\frac{1}{10^{-4}} = 10000\\,\\Omega = 10\\text{ k}\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$X_C = \\frac{1}{2 \\times \\frac{22}{7} \\times 50 \\times \\frac{7}{22} \\times 10^{-6}} = \\frac{1}{10^{-4}} = 10000\\,\\Omega = 10\\text{ k}\\Omega$."
    ],
    "teacherTipEn": "Standard calculation testing microfarad unit conversion.",
    "teacherTipAr": "مسألة قياسية لاختبار التحويل من ميكروفاراد إلى فاراد."
  },
  {
    "id": "phys_ch4_db_med_07",
    "titleEn": "Series RL Circuit Impedance Calculation",
    "titleAr": "حساب معاوقة دائرة RL على التوالي",
    "difficulty": "medium",
    "questionEn": "A non-inductive resistor $R = 30\\,\\Omega$ and an inductor of inductive reactance $X_L = 40\\,\\Omega$ are connected in series across an AC source of $100\\text{ V}$. The total impedance ($Z$) and electric current ($I$) are, respectively:",
    "questionAr": "مقاومة أومية عديمة الحث $R = 30\\,\\Omega$ وملف حث مفاعلته الحثية $X_L = 40\\,\\Omega$ اتصلا على التوالي بمصدر تيار متردد $100\\text{ V}$. فإن المعاوقة الكلية للدائرة ($Z$) وشدة التيار ($I$) هما على الترتيب:",
    "optionsEn": [
      "$Z = 70\\,\\Omega$ and $I = 1.43\\text{ A}$",
      "$Z = 10\\,\\Omega$ and $I = 10\\text{ A}$",
      "$Z = 50\\,\\Omega$ and $I = 2\\text{ A}$",
      "$Z = 50\\,\\Omega$ and $I = 4\\text{ A}$"
    ],
    "optionsAr": [
      "$Z = 70\\,\\Omega$ و $I = 1.43\\text{ A}$",
      "$Z = 10\\,\\Omega$ و $I = 10\\text{ A}$",
      "$Z = 50\\,\\Omega$ و $I = 2\\text{ A}$",
      "$Z = 50\\,\\Omega$ and $I = 4\\text{ A}$"
    ],
    "correctAnswer": "$Z = 50\\,\\Omega$ and $I = 2\\text{ A}$",
    "correctIndex": 2,
    "hintEn": "$Z = \\sqrt{R^2 + X_L^2} = \\sqrt{30^2 + 40^2} = 50\\,\\Omega$. $I = V / Z$.",
    "hintAr": "$Z = \\sqrt{30^2 + 40^2} = 50\\,\\Omega$. $I = \\frac{V}{Z} = \\frac{100}{50} = 2\\text{ A}$.",
    "stepByStepSolutionEn": [
      "Impedance: $Z = \\sqrt{R^2 + X_L^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\,\\Omega$. Current: $I = \\frac{V}{Z} = \\frac{100\\text{ V}}{50\\,\\Omega} = 2\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "المعاوقة الكلية: $Z = \\sqrt{30^2 + 40^2} = \\sqrt{2500} = 50\\,\\Omega$. شدة التيار: $I = \\frac{V}{Z} = \\frac{100}{50} = 2\\text{ A}$."
    ],
    "teacherTipEn": "The classic 3-4-5 right triangle: $30, 40 \\implies 50\\,\\Omega$.",
    "teacherTipAr": "مثلث فيثاغورس الشهير: $30, 40 \\implies 50\\,\\Omega$."
  },
  {
    "id": "phys_ch4_db_med_08",
    "titleEn": "Phase Angle in 30-40 Ohm RL Circuit",
    "titleAr": "حساب زاوية الطور في دائرة RL",
    "difficulty": "medium",
    "questionEn": "In the previous RL circuit ($R = 30\\,\\Omega$, $X_L = 40\\,\\Omega$, $Z = 50\\,\\Omega$), the phase angle ($\\phi$) by which total voltage leads current is:",
    "questionAr": "في دائرة RL السابقة ($R = 30\\,\\Omega$، $X_L = 40\\,\\Omega$)، زاوية الطور ($\\phi$) التي يتقدم بها الجهد الكلي على التيار تساوي:",
    "optionsEn": [
      "$\\tan^{-1}\\left(\\frac{3}{4}\\right) \\approx 36.87^\\circ$",
      "$45.00^\\circ$",
      "$90.00^\\circ$",
      "$\\tan^{-1}\\left(\\frac{4}{3}\\right) \\approx 53.13^\\circ$"
    ],
    "optionsAr": [
      "$\\tan^{-1}\\left(\\frac{3}{4}\\right) \\approx 36.87^\\circ$",
      "$45.00^\\circ$",
      "$90.00^\\circ$",
      "$\\tan^{-1}\\left(\\frac{4}{3}\\right) \\approx 53.13^\\circ$"
    ],
    "correctAnswer": "$\\tan^{-1}\\left(\\frac{4}{3}\\right) \\approx 53.13^\\circ$",
    "correctIndex": 3,
    "hintEn": "$\\tan\\phi = \\frac{X_L}{R} = \\frac{40}{30} = \\frac{4}{3}$.",
    "hintAr": "$\\tan\\phi = \\frac{X_L}{R} = \\frac{40}{30} = \\frac{4}{3}$.",
    "stepByStepSolutionEn": [
      "$\\tan\\phi = \\frac{X_L}{R} = \\frac{40}{30} = 1.333 \\implies \\phi = \\tan^{-1}(1.333) \\approx 53.13^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$\\tan\\phi = \\frac{X_L}{R} = \\frac{40}{30} = \\frac{4}{3} \\implies \\phi \\approx 53.13^\\circ$."
    ],
    "teacherTipEn": "Since $\\tan\\phi > 1$, $\\phi > 45^\\circ$, confirming voltage leads by more than $45^\\circ$.",
    "teacherTipAr": "بما أن الظل أكبر من 1، فإن الزاوية أكبر من $45^\\circ$."
  },
  {
    "id": "phys_ch4_db_med_09",
    "titleEn": "Component Voltages in RL Circuit",
    "titleAr": "فروق الجهد الجزئية في دائرة RL",
    "difficulty": "medium",
    "questionEn": "In the previous RL circuit with current $I = 2\\text{ A}$ ($R = 30\\,\\Omega$, $X_L = 40\\,\\Omega$), the voltage across the resistor ($V_R$) and the voltage across the inductor ($V_L$) are, respectively:",
    "questionAr": "في دائرة RL السابقة بتيار $I = 2\\text{ A}$ ($R = 30\\,\\Omega$، $X_L = 40\\,\\Omega$)، يكون فرق الجهد عبر المقاومة ($V_R$) والجهد عبر الملف ($V_L$) على الترتيب:",
    "optionsEn": [
      "$V_R = 60\\text{ V}$ and $V_L = 80\\text{ V}$",
      "$V_R = 50\\text{ V}$ and $V_L = 50\\text{ V}$",
      "$V_R = 80\\text{ V}$ and $V_L = 60\\text{ V}$",
      "$V_R = 30\\text{ V}$ and $V_L = 40\\text{ V}$"
    ],
    "optionsAr": [
      "$V_R = 60\\text{ V}$ و $V_L = 80\\text{ V}$",
      "$V_R = 50\\text{ V}$ و $V_L = 50\\text{ V}$",
      "$V_R = 80\\text{ V}$ و $V_L = 60\\text{ V}$",
      "$V_R = 30\\text{ V}$ and $V_L = 40\\text{ V}$"
    ],
    "correctAnswer": "$V_R = 60\\text{ V}$ and $V_L = 80\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$V_R = I R$ and $V_L = I X_L$. Verify $V = \\sqrt{V_R^2 + V_L^2} = \\sqrt{60^2 + 80^2} = 100\\text{ V}$.",
    "hintAr": "$V_R = I R = 2 \\times 30 = 60\\text{ V}$ و $V_L = I X_L = 2 \\times 40 = 80\\text{ V}$.",
    "stepByStepSolutionEn": [
      "$V_R = I R = 2 \\times 30 = 60\\text{ V}$. $V_L = I X_L = 2 \\times 40 = 80\\text{ V}$. Notice that the arithmetic sum is $60 + 80 = 140\\text{ V} > 100\\text{ V}$, but vector sum is $\\sqrt{60^2 + 80^2} = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$V_R = 2 \\times 30 = 60\\text{ V}$. $V_L = 2 \\times 40 = 80\\text{ V}$. لاحظ أن الجمع الجبري $60 + 80 = 140\\text{ V}$، بينما الجمع الاتجاهي يعطي جهد المصدر بدقة: $\\sqrt{60^2 + 80^2} = 100\\text{ V}$."
    ],
    "teacherTipEn": "Never sum component voltages algebraically in AC circuits!",
    "teacherTipAr": "لا تجمع فروق الجهد جمعاً جبرياً في دوائر التيار المتردد!"
  },
  {
    "id": "phys_ch4_db_med_10",
    "titleEn": "Series RC Circuit Impedance Calculation",
    "titleAr": "حساب معاوقة دائرة RC على التوالي",
    "difficulty": "medium",
    "questionEn": "A series RC circuit consists of a resistor $R = 6\\,\\Omega$ and a capacitor of capacitive reactance $X_C = 8\\,\\Omega$ connected across an AC voltage source of $50\\text{ V}$. The impedance ($Z$) and electric current ($I$) are, respectively:",
    "questionAr": "دائرة RC على التوالي تتكون من مقاومة أومية $R = 6\\,\\Omega$ ومكثف مفاعلته السعوية $X_C = 8\\,\\Omega$ اتصلا بمصدر تيار متردد $50\\text{ V}$. فإن المعاوقة الكلية ($Z$) وشدة التيار ($I$) هما على الترتيب:",
    "optionsEn": [
      "$Z = 14\\,\\Omega$ and $I = 3.57\\text{ A}$",
      "$Z = 10\\,\\Omega$ and $I = 5\\text{ A}$",
      "$Z = 2\\,\\Omega$ and $I = 25\\text{ A}$",
      "$Z = 10\\,\\Omega$ and $I = 2.5\\text{ A}$"
    ],
    "optionsAr": [
      "$Z = 14\\,\\Omega$ و $I = 3.57\\text{ A}$",
      "$Z = 10\\,\\Omega$ و $I = 5\\text{ A}$",
      "$Z = 2\\,\\Omega$ و $I = 25\\text{ A}$",
      "$Z = 10\\,\\Omega$ and $I = 2.5\\text{ A}$"
    ],
    "correctAnswer": "$Z = 10\\,\\Omega$ and $I = 5\\text{ A}$",
    "correctIndex": 1,
    "hintEn": "$Z = \\sqrt{R^2 + X_C^2} = \\sqrt{6^2 + 8^2} = 10\\,\\Omega$. $I = V/Z$.",
    "hintAr": "$Z = \\sqrt{6^2 + 8^2} = 10\\,\\Omega$. $I = \\frac{50}{10} = 5\\text{ A}$.",
    "stepByStepSolutionEn": [
      "Impedance: $Z = \\sqrt{R^2 + X_C^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\,\\Omega$. Current: $I = \\frac{V}{Z} = \\frac{50\\text{ V}}{10\\,\\Omega} = 5\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "المعاوقة: $Z = \\sqrt{36 + 64} = 10\\,\\Omega$. شدة التيار: $I = \\frac{50}{10} = 5\\text{ A}$."
    ],
    "teacherTipEn": "Another classic 6-8-10 Pythagorean triplet.",
    "teacherTipAr": "ثلاثية فيثاغورس الشهيرة: $6, 8 \\implies 10\\,\\Omega$."
  },
  {
    "id": "phys_ch4_db_med_11",
    "titleEn": "Component Voltages in RC Circuit",
    "titleAr": "فروق الجهد الجزئية في دائرة RC",
    "difficulty": "medium",
    "questionEn": "In the previous RC circuit with current $I = 5\\text{ A}$ ($R = 6\\,\\Omega$, $X_C = 8\\,\\Omega$), the voltage across the resistor ($V_R$) and the voltage across the capacitor ($V_C$) are, respectively:",
    "questionAr": "في دائرة RC السابقة بتيار $I = 5\\text{ A}$ ($R = 6\\,\\Omega$، $X_C = 8\\,\\Omega$)، يكون فرق الجهد عبر المقاومة ($V_R$) وعبر المكثف ($V_C$) على الترتيب:",
    "optionsEn": [
      "$V_R = 40\\text{ V}$ and $V_C = 30\\text{ V}$",
      "$V_R = 25\\text{ V}$ and $V_C = 25\\text{ V}$",
      "$V_R = 30\\text{ V}$ and $V_C = 40\\text{ V}$",
      "$V_R = 15\\text{ V}$ and $V_C = 20\\text{ V}$"
    ],
    "optionsAr": [
      "$V_R = 40\\text{ V}$ و $V_C = 30\\text{ V}$",
      "$V_R = 25\\text{ V}$ و $V_C = 25\\text{ V}$",
      "$V_R = 30\\text{ V}$ و $V_C = 40\\text{ V}$",
      "$V_R = 15\\text{ V}$ and $V_C = 20\\text{ V}$"
    ],
    "correctAnswer": "$V_R = 30\\text{ V}$ and $V_C = 40\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "$V_R = I R = 5 \\times 6 = 30\\text{ V}$. $V_C = I X_C = 5 \\times 8 = 40\\text{ V}$. Check: $\\sqrt{30^2 + 40^2} = 50\\text{ V}$.",
    "hintAr": "$V_R = 5 \\times 6 = 30\\text{ V}$ و $V_C = 5 \\times 8 = 40\\text{ V}$. والتحقق: $\\sqrt{30^2 + 40^2} = 50\\text{ V}$.",
    "stepByStepSolutionEn": [
      "$V_R = I R = 5 \\times 6 = 30\\text{ V}$. $V_C = I X_C = 5 \\times 8 = 40\\text{ V}$. Total voltage $V = \\sqrt{V_R^2 + V_C^2} = \\sqrt{30^2 + 40^2} = 50\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$V_R = 5 \\times 6 = 30\\text{ V}$. $V_C = 5 \\times 8 = 40\\text{ V}$. والجهد الكلي: $V = \\sqrt{30^2 + 40^2} = 50\\text{ V}$."
    ],
    "teacherTipEn": "Total voltage equals source voltage vectorially.",
    "teacherTipAr": "الجمع الاتجاهي يطابق جهد المصدر بدقة."
  },
  {
    "id": "phys_ch4_db_med_12",
    "titleEn": "Series LC Circuit Voltage Subtraction",
    "titleAr": "طرح جهود دائرة LC على التوالي",
    "difficulty": "medium",
    "questionEn": "A pure inductor and a pure capacitor are connected in series across an AC source. An AC voltmeter across the inductor reads $100\\text{ V}$, and across the capacitor reads $60\\text{ V}$. The reading of an AC voltmeter connected across the combined combination ($V_{\\text{total}}$) is:",
    "questionAr": "ملف حث نقي ومكثف نقي اتصلا على التوالي بمصدر تيار متردد. سجل فولتميتر عبر الملف $100\\text{ V}$، وسجل فولتميتر عبر المكثف $60\\text{ V}$. فإن قراءة فولتميتر متصل بين طرفي المجموعة معاً ($V_{\\text{total}}$) تساوي:",
    "optionsEn": [
      "$160\\text{ V}$",
      "$\\sqrt{100^2 + 60^2} \\approx 116.6\\text{ V}$",
      "$80\\text{ V}$",
      "$40\\text{ V}$"
    ],
    "optionsAr": [
      "$160\\text{ V}$",
      "$\\sqrt{100^2 + 60^2} \\approx 116.6\\text{ V}$",
      "$80\\text{ V}$",
      "$40\\text{ V}$"
    ],
    "correctAnswer": "$40\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "For LC pair: $V = |V_L - V_C| = 100 - 60 = 40\\text{ V}$.",
    "hintAr": "لمجموعة LC: الجهدان متضادان في الطور تماماً $V = |V_L - V_C| = 100 - 60 = 40\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Because $V_L$ leads current by $90^\\circ$ and $V_C$ lags current by $90^\\circ$, the phase angle between $V_L$ and $V_C$ is $180^\\circ$. They lie on the same straight line pointing in opposite directions, so the total voltage is their arithmetic difference: $V = |V_L - V_C| = 100 - 60 = 40\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن جهد الملف يسبق التيار بـ $90^\\circ$ وجهد المكثف يتأخر عن التيار بـ $90^\\circ$، فإن فرق الطور بينهما $180^\\circ$. ويكون المتجهان على خط مستقيم واحد وفي اتجاهين متضادين، فتحسب المحصلة بطرح القيمتين مباشرة: $V = |V_L - V_C| = 100 - 60 = 40\\text{ V}$."
    ],
    "teacherTipEn": "Do not use Pythagoras for LC pair! They are collinear opposing vectors ($180^\\circ$).",
    "teacherTipAr": "لا تستخدم فيثاغورس لملف ومكثف معاً! بل يطرحان جبرياً لتضادهما في الطور."
  },
  {
    "id": "phys_ch4_db_med_13",
    "titleEn": "Series RLC Circuit Impedance Calculation",
    "titleAr": "حساب المعاوقة الكلية لدائرة RLC على التوالي",
    "difficulty": "medium",
    "questionEn": "A series RLC alternating current circuit contains $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance ($Z$) of the circuit is:",
    "questionAr": "دائرة RLC على التوالي تحتوي على مقاومة $R = 40\\,\\Omega$ وملف مفاعلته $X_L = 100\\,\\Omega$ ومكثف مفاعلته $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية للدائرة ($Z$) تساوي:",
    "optionsEn": [
      "$50\\,\\Omega$",
      "$210\\,\\Omega$",
      "$70\\,\\Omega$",
      "$40\\,\\Omega$"
    ],
    "optionsAr": [
      "$50\\,\\Omega$",
      "$210\\,\\Omega$",
      "$70\\,\\Omega$",
      "$40\\,\\Omega$"
    ],
    "correctAnswer": "$50\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{40^2 + (100 - 70)^2} = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
    "hintAr": "$Z = \\sqrt{40^2 + (100 - 70)^2} = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "Net reactance: $X = X_L - X_C = 100 - 70 = 30\\,\\Omega$ (inductive). Total impedance: $Z = \\sqrt{R^2 + X^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "المفاعلة المحصلة: $X = X_L - X_C = 100 - 70 = 30\\,\\Omega$ (حثية). المعاوقة الكلية: $Z = \\sqrt{R^2 + X^2} = \\sqrt{40^2 + 30^2} = \\sqrt{2500} = 50\\,\\Omega$."
    ],
    "teacherTipEn": "30-40-50 Ohm impedance triangle.",
    "teacherTipAr": "مثلث معاوقة كلاسيكي: $40, 30 \\implies 50\\,\\Omega$."
  },
  {
    "id": "phys_ch4_db_med_14",
    "titleEn": "Series RLC Circuit Total Voltage Calculation",
    "titleAr": "حساب فرق الجهد الكلي لدائرة RLC",
    "difficulty": "medium",
    "questionEn": "In a series RLC circuit, voltmeters connected across the components read: $V_R = 80\\text{ V}$, $V_L = 120\\text{ V}$, and $V_C = 60\\text{ V}$. The total source voltage ($V$) is:",
    "questionAr": "في دائرة RLC متصلة على التوالي، سجلت الفولتميترات الموصلة عبر العناصر: $V_R = 80\\text{ V}$ و $V_L = 120\\text{ V}$ و $V_C = 60\\text{ V}$. فإن فرق جهد المصدر الكلي ($V$) يساوي:",
    "optionsEn": [
      "$260\\text{ V}$",
      "$100\\text{ V}$",
      "$140\\text{ V}$",
      "$80\\text{ V}$"
    ],
    "optionsAr": [
      "$260\\text{ V}$",
      "$100\\text{ V}$",
      "$140\\text{ V}$",
      "$80\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "$V = \\sqrt{V_R^2 + (V_L - V_C)^2} = \\sqrt{80^2 + (120 - 60)^2} = \\sqrt{80^2 + 60^2} = 100\\text{ V}$.",
    "hintAr": "$V = \\sqrt{80^2 + (120 - 60)^2} = \\sqrt{80^2 + 60^2} = 100\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Net vertical voltage: $V_L - V_C = 120 - 60 = 60\\text{ V}$. Total voltage: $V = \\sqrt{V_R^2 + (V_L - V_C)^2} = \\sqrt{80^2 + 60^2} = \\sqrt{6400 + 3600} = \\sqrt{10000} = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "محصلة الجهد الرأسي: $V_L - V_C = 120 - 60 = 60\\text{ V}$. فرق الجهد الكلي للمصدر: $V = \\sqrt{80^2 + 60^2} = \\sqrt{10000} = 100\\text{ V}$."
    ],
    "teacherTipEn": "Notice: Arithmetic sum is $260\\text{ V}$, but true source voltage is only $100\\text{ V}$!",
    "teacherTipAr": "المجموع الجبري $260\\text{ V}$، بينما جهد المصدر الحقيقي $100\\text{ V}$ فقط!"
  },
  {
    "id": "phys_ch4_db_med_15",
    "titleEn": "Real Power Consumed in RLC Circuit",
    "titleAr": "حساب القدرة المستهلكة في دائرة RLC",
    "difficulty": "medium",
    "questionEn": "In the previous circuit ($V_R = 80\\text{ V}$, $V_L = 120\\text{ V}$, $V_C = 60\\text{ V}$, $V = 100\\text{ V}$), if the circuit current is $I = 2\\text{ A}$, the electrical power dissipated as heat in the circuit is:",
    "questionAr": "في الدائرة السابقة ($V_R = 80\\text{ V}$، $V_L = 120\\text{ V}$، $V_C = 60\\text{ V}$، $I = 2\\text{ A}$)، فإن القدرة الكهربية المستهلكة كحرارة في الدائرة تساوي:",
    "optionsEn": [
      "$200\\text{ W}$",
      "$520\\text{ W}$",
      "$160\\text{ W}$",
      "$40\\text{ W}$"
    ],
    "optionsAr": [
      "$200\\text{ W}$",
      "$520\\text{ W}$",
      "$160\\text{ W}$",
      "$40\\text{ W}$"
    ],
    "correctAnswer": "$160\\text{ W}$",
    "correctIndex": 2,
    "hintEn": "Power is consumed strictly in the resistor: $P = V_R I = I^2 R$.",
    "hintAr": "القدرة تُستهلك حصرياً في المقاومة الأومية: $P = V_R I$.",
    "stepByStepSolutionEn": [
      "Power is only dissipated in the ohmic resistance: $P = V_R I = 80\\text{ V} \\times 2\\text{ A} = 160\\text{ W}$. Alternatively: $P = V I \\cos\\phi = 100 \\times 2 \\times \\frac{V_R}{V} = 200 \\times \\frac{80}{100} = 160\\text{ W}$. Neither $L$ nor $C$ consumes any real power."
    ],
    "stepByStepSolutionAr": [
      "تُستهلك القدرة الكهربية في المقاومة الأومية فقط: $P = V_R I = 80 \\times 2 = 160\\text{ W}$. أو من قانون القدرة الكلية: $P = V I \\cos\\phi = 100 \\times 2 \\times \\frac{80}{100} = 160\\text{ W}$. ولا يستهلك الملف أو المكثف أي قدرة حرارية."
    ],
    "teacherTipEn": "Apparent power is $V I = 200\\text{ VA}$; Real power is $160\\text{ W}$.",
    "teacherTipAr": "القدرة الظاهرية $200\\text{ VA}$؛ والقدرة الحقيقية المستهلكة $160\\text{ W}$."
  },
  {
    "id": "phys_ch4_db_med_16",
    "titleEn": "Power Factor in RLC Circuit",
    "titleAr": "حساب عامل القدرة في دائرة RLC",
    "difficulty": "medium",
    "questionEn": "In the previous circuit ($V_R = 80\\text{ V}$, $V = 100\\text{ V}$), the power factor ($\\cos\\phi$) is:",
    "questionAr": "في الدائرة السابقة ($V_R = 80\\text{ V}$، $V = 100\\text{ V}$)، يكون عامل القدرة ($\\cos\\phi$) مساوياً:",
    "optionsEn": [
      "$0.6$",
      "$1.0$",
      "$0.5$",
      "$0.8$"
    ],
    "optionsAr": [
      "$0.6$",
      "$1.0$",
      "$0.5$",
      "$0.8$"
    ],
    "correctAnswer": "$0.8$",
    "correctIndex": 3,
    "hintEn": "$\\cos\\phi = \\frac{V_R}{V} = \\frac{R}{Z}$.",
    "hintAr": "عامل القدرة هو جيب تمام زاوية الطور: $\\cos\\phi = \\frac{V_R}{V} = \\frac{R}{Z}$.",
    "stepByStepSolutionEn": [
      "Power factor is $\\cos\\phi = \\frac{V_R}{V} = \\frac{80\\text{ V}}{100\\text{ V}} = 0.8$."
    ],
    "stepByStepSolutionAr": [
      "عامل القدرة: $\\cos\\phi = \\frac{V_R}{V} = \\frac{80}{100} = 0.8$."
    ],
    "teacherTipEn": "Power factor ranges from 0 (purely reactive) to 1 (purely resistive / resonance).",
    "teacherTipAr": "يتراوح عامل القدرة بين الصفر (تفاعلي نقي) والواحد الصحيح (أومي نقي أو رنين)."
  },
  {
    "id": "phys_ch4_db_med_17",
    "titleEn": "Resonant Frequency Numerical Calculation",
    "titleAr": "حساب تردد الرنين عددياً",
    "difficulty": "medium",
    "questionEn": "A series RLC circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and a capacitor $C = \\frac{7}{22} \\times 10^{-4}\\text{ F}$. The resonant frequency ($f_0$) of the circuit is ($\\pi = \\frac{22}{7}$):",
    "questionAr": "دائرة RLC على التوالي تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22} \\times 10^{-4}\\text{ F}$. فإن تردد الرنين ($f_0$) للدائرة يساوي ($\\pi = \\frac{22}{7}$):",
    "optionsEn": [
      "$50\\text{ Hz}$",
      "$100\\text{ Hz}$",
      "$25\\text{ Hz}$",
      "$500\\text{ Hz}$"
    ],
    "optionsAr": [
      "$50\\text{ Hz}$",
      "$100\\text{ Hz}$",
      "$25\\text{ Hz}$",
      "$500\\text{ Hz}$"
    ],
    "correctAnswer": "$50\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$.",
    "hintAr": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{LC} = \\sqrt{\\frac{7}{22} \\times \\frac{7}{22} \\times 10^{-4}} = \\frac{7}{22} \\times 10^{-2}$. Then $f_0 = \\frac{1}{2 \\times \\frac{22}{7} \\times \\left(\\frac{7}{22} \\times 10^{-2}\\right)} = \\frac{1}{2 \\times 10^{-2}} = \\frac{100}{2} = 50\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-2}$. وبالتعويض: $f_0 = \\frac{1}{2 \\times \\frac{22}{7} \\times \\frac{7}{22} \\times 10^{-2}} = \\frac{1}{2 \\times 10^{-2}} = 50\\text{ Hz}$."
    ],
    "teacherTipEn": "Classic $50\\text{ Hz}$ resonance setup used in Ministry exams.",
    "teacherTipAr": "تردد $50\\text{ Hz}$ هو التردد المألوف في نماذج امتحانات الوزارة."
  },
  {
    "id": "phys_ch4_db_med_18",
    "titleEn": "Calculating Capacitance Required for Resonance",
    "titleAr": "حساب السعة اللازمة لتحقيق الرنين",
    "difficulty": "medium",
    "questionEn": "An inductor $L = 0.1\\text{ H}$ is connected in series with a resistor $R = 20\\,\\Omega$ across an AC source of frequency $f = 500\\text{ Hz}$. To make the circuit resonate at this frequency, the required capacitance of a capacitor connected in series is approximately ($\\pi^2 \\approx 10$):",
    "questionAr": "ملف حث $L = 0.1\\text{ H}$ متصل على التوالي مع مقاومة $R = 20\\,\\Omega$ ومصدر متردد تردده $f = 500\\text{ Hz}$. لجعل الدائرة في حالة رنين عند هذا التردد، فإن السعة المطلوبة لمكثف يوصل على التوالي تساوي تقريباً ($\\pi^2 \\approx 10$):",
    "optionsEn": [
      "$10.0\\,\\mu\\text{F}$",
      "$1.0\\,\\mu\\text{F} = 10^{-6}\\text{ F}$",
      "$0.1\\,\\mu\\text{F}$",
      "$100.0\\,\\mu\\text{F}$"
    ],
    "optionsAr": [
      "$10.0\\,\\mu\\text{F}$",
      "$1.0\\,\\mu\\text{F} = 10^{-6}\\text{ F}$",
      "$0.1\\,\\mu\\text{F}$",
      "$100.0\\,\\mu\\text{F}$"
    ],
    "correctAnswer": "$1.0\\,\\mu\\text{F} = 10^{-6}\\text{ F}$",
    "correctIndex": 1,
    "hintEn": "$C = \\frac{1}{4\\pi^2 f_0^2 L}$.",
    "hintAr": "$C = \\frac{1}{4\\pi^2 f_0^2 L}$.",
    "stepByStepSolutionEn": [
      "From $X_L = X_C \\implies 2\\pi f L = \\frac{1}{2\\pi f C} \\implies C = \\frac{1}{4\\pi^2 f^2 L} = \\frac{1}{4 \\times 10 \\times (500)^2 \\times 0.1} = \\frac{1}{4 \\times 10 \\times 250000 \\times 0.1} = \\frac{1}{1000000} = 10^{-6}\\text{ F} = 1.0\\,\\mu\\text{F}$."
    ],
    "stepByStepSolutionAr": [
      "من شرط الرنين: $C = \\frac{1}{4\\pi^2 f^2 L} = \\frac{1}{4 \\times 10 \\times 250000 \\times 0.1} = \\frac{1}{10^6} = 10^{-6}\\text{ F} = 1.0\\,\\mu\\text{F}$."
    ],
    "teacherTipEn": "High frequency circuits require smaller capacitors for resonance.",
    "teacherTipAr": "الترددات العالية تتطلب سعات مكثفات صغيرة لتحقيق الرنين."
  },
  {
    "id": "phys_ch4_db_med_19",
    "titleEn": "Calculating Inductance Required for Resonance",
    "titleAr": "حساب معامل الحث اللازم للرنين",
    "difficulty": "medium",
    "questionEn": "A circuit contains a capacitor $C = 25\\,\\mu\\text{F}$. The self-inductance ($L$) of an inductor needed to achieve resonance at frequency $f = 100\\text{ Hz}$ is ($\\pi^2 \\approx 10$):",
    "questionAr": "دائرة تحتوي على مكثف سعته $C = 25\\,\\mu\\text{F}$. فإن معامل الحث الذاتي ($L$) لملف يلزم توصيله لتحقيق الرنين عند تردد $f = 100\\text{ Hz}$ يساوي ($\\pi^2 \\approx 10$):",
    "optionsEn": [
      "$1.0\\text{ H}$",
      "$0.01\\text{ H}$",
      "$0.1\\text{ H}$",
      "$0.5\\text{ H}$"
    ],
    "optionsAr": [
      "$1.0\\text{ H}$",
      "$0.01\\text{ H}$",
      "$0.1\\text{ H}$",
      "$0.5\\text{ H}$"
    ],
    "correctAnswer": "$0.1\\text{ H}$",
    "correctIndex": 2,
    "hintEn": "$L = \\frac{1}{4\\pi^2 f^2 C}$.",
    "hintAr": "$L = \\frac{1}{4\\pi^2 f^2 C}$.",
    "stepByStepSolutionEn": [
      "$L = \\frac{1}{4\\pi^2 f^2 C} = \\frac{1}{4 \\times 10 \\times (100)^2 \\times (25 \\times 10^{-6})} = \\frac{1}{40 \\times 10000 \\times 25 \\times 10^{-6}} = \\frac{1}{10} = 0.1\\text{ H}$."
    ],
    "stepByStepSolutionAr": [
      "$L = \\frac{1}{4 \\times 10 \\times 10000 \\times 25 \\times 10^{-6}} = \\frac{1}{10} = 0.1\\text{ H}$."
    ],
    "teacherTipEn": "Clean calculation yielding $0.1\\text{ H}$.",
    "teacherTipAr": "حساب دقيق يعطي $0.1\\text{ H}$."
  },
  {
    "id": "phys_ch4_db_med_20",
    "titleEn": "Deflection Scaling on Hot-Wire Ammeter",
    "titleAr": "تدرج انحراف مؤشر الأميتر الحراري بمضاعفة التيار",
    "difficulty": "medium",
    "questionEn": "When a direct current of $1\\text{ A}$ is passed through a hot-wire ammeter, the pointer deflects by an angle $\\theta$. When the current is increased to $3\\text{ A}$, the total deflection angle of the pointer becomes:",
    "questionAr": "عند مرور تيار مستمر شدته $1\\text{ A}$ في أميتر حراري انحرف مؤشره بزاوية $\\theta$. فعند زيادة شدة التيار إلى $3\\text{ A}$، فإن زاوية انحراف المؤشر تصبح:",
    "optionsEn": [
      "$3\\theta$",
      "$6\\theta$",
      "$\\sqrt{3}\\theta$",
      "$9\\theta$"
    ],
    "optionsAr": [
      "$3\\theta$",
      "$6\\theta$",
      "$\\sqrt{3}\\theta$",
      "$9\\theta$"
    ],
    "correctAnswer": "$9\\theta$",
    "correctIndex": 3,
    "hintEn": "Deflection $\\theta \\propto I^2$. $(3)^2 = 9$.",
    "hintAr": "زاوية الانحراف تتناسب طردياً مع مربع شدة التيار $\\theta \\propto I^2$.",
    "stepByStepSolutionEn": [
      "The heat generated per second is $P \\propto I^2$. The deflection of the pointer is directly proportional to the thermal power generated: $\\theta \\propto I^2$. For $I' = 3I$, the new deflection is $\\theta' = (3)^2 \\theta = 9\\theta$."
    ],
    "stepByStepSolutionAr": [
      "تتناسب كمية الحرارة المتولدة في الثانية وزاوية الانحراف طردياً مع مربع شدة التيار: $\\theta \\propto I^2$. وعند زيادة شدة التيار إلى 3 أمثالها تصبح زاوية الانحراف: $\\theta' = (3)^2 \\theta = 9\\theta$."
    ],
    "teacherTipEn": "Quadratic scale: 1A $\\to \\theta$, 2A $\\to 4\\theta$, 3A $\\to 9\\theta$, 4A $\\to 16\\theta$.",
    "teacherTipAr": "تدريج تربيعي: 1A يعطي $\\theta$، 2A يعطي $4\\theta$، 3A يعطي $9\\theta$."
  },
  {
    "id": "phys_ch4_db_med_21",
    "titleEn": "Parallel Capacitors Sharing Charge",
    "titleAr": "مكثفان متصلان على التوازي وتوزيع الشحنة",
    "difficulty": "medium",
    "questionEn": "A capacitor of capacitance $C_1 = 4\\,\\mu\\text{F}$ is charged to a potential difference $V = 100\\text{ V}$. It is then disconnected from the battery and connected in parallel across an uncharged capacitor $C_2 = 6\\,\\mu\\text{F}$. The final common potential difference across both capacitors is:",
    "questionAr": "مكثف سعته $C_1 = 4\\,\\mu\\text{F}$ شُحن حتى فرق جهد $V = 100\\text{ V}$. فُصل عن البطارية ثم وُصل على التوازي بمكثف آخر غير مشحون سعته $C_2 = 6\\,\\mu\\text{F}$. فإن فرق الجهد المشترك النهائي بين لوحي المكثفين يساوي:",
    "optionsEn": [
      "$40\\text{ V}$",
      "$50\\text{ V}$",
      "$60\\text{ V}$",
      "$100\\text{ V}$"
    ],
    "optionsAr": [
      "$40\\text{ V}$",
      "$50\\text{ V}$",
      "$60\\text{ V}$",
      "$100\\text{ V}$"
    ],
    "correctAnswer": "$40\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "Total charge is conserved: $Q = C_1 V_1$. Total capacitance in parallel is $C_1 + C_2$. $V_{\\text{final}} = \\frac{Q}{C_1 + C_2}$.",
    "hintAr": "الشحنة الكلية محفوظة: $Q = C_1 V$. والسعة الكلية على التوازي $C_1 + C_2$. الجهد المشترك $V = \\frac{Q}{C_1 + C_2}$.",
    "stepByStepSolutionEn": [
      "Initial charge: $Q = C_1 V = (4\\,\\mu\\text{F}) \\times 100\\text{ V} = 400\\,\\mu\\text{C}$. When connected in parallel, equivalent capacitance is $C_{\\text{eq}} = C_1 + C_2 = 4 + 6 = 10\\,\\mu\\text{F}$. The common voltage is $V_{\\text{common}} = \\frac{Q}{C_{\\text{eq}}} = \\frac{400\\,\\mu\\text{C}}{10\\,\\mu\\text{F}} = 40\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "الشحنة الابتدائية المختزنة: $Q = 4 \\times 100 = 400\\,\\mu\\text{C}$. عند التوصيل على التوازي تكون السعة المكافئة: $C_{\\text{eq}} = 4 + 6 = 10\\,\\mu\\text{F}$. فرق الجهد المشترك: $V = \\frac{Q}{C_{\\text{eq}}} = \\frac{400}{10} = 40\\text{ V}$."
    ],
    "teacherTipEn": "Charge distributes in direct proportion to capacitance: $Q_1 = 160\\,\\mu\\text{C}$, $Q_2 = 240\\,\\mu\\text{C}$.",
    "teacherTipAr": "تتوزع الشحنة طردياً بنسبة السعات."
  },
  {
    "id": "phys_ch4_db_med_22",
    "titleEn": "Energy Stored in Capacitor Calculation",
    "titleAr": "حساب الطاقة الكهروستاتيكية المختزنة في مكثف",
    "difficulty": "medium",
    "questionEn": "A capacitor of capacitance $C = 20\\,\\mu\\text{F}$ is charged to a potential difference of $200\\text{ V}$. The electrostatic energy stored in its electric field is:",
    "questionAr": "مكثف سعته $C = 20\\,\\mu\\text{F}$ شُحن حتى أصبح فرق الجهد بين لوحيه $200\\text{ V}$. فإن الطاقة الكهروستاتيكية المختزنة في مجاله الكهربي تساوي:",
    "optionsEn": [
      "$0.8\\text{ J}$",
      "$0.4\\text{ J}$",
      "$4.0\\text{ J}$",
      "$0.04\\text{ J}$"
    ],
    "optionsAr": [
      "$0.8\\text{ J}$",
      "$0.4\\text{ J}$",
      "$4.0\\text{ J}$",
      "$0.04\\text{ J}$"
    ],
    "correctAnswer": "$0.4\\text{ J}$",
    "correctIndex": 1,
    "hintEn": "$W = \\frac{1}{2} C V^2$.",
    "hintAr": "$W = \\frac{1}{2} C V^2$.",
    "stepByStepSolutionEn": [
      "$W = \\frac{1}{2} C V^2 = \\frac{1}{2} \\times (20 \\times 10^{-6}\\text{ F}) \\times (200\\text{ V})^2 = 10 \\times 10^{-6} \\times 40000 = 0.4\\text{ J}$."
    ],
    "stepByStepSolutionAr": [
      "$W = \\frac{1}{2} \\times (20 \\times 10^{-6}) \\times 40000 = 0.4\\text{ J}$."
    ],
    "teacherTipEn": "Remember the factor of $1/2$ in $\\frac{1}{2} C V^2$.",
    "teacherTipAr": "تذكر معامل النصف في قانون طاقة المكثف."
  },
  {
    "id": "phys_ch4_db_med_23",
    "titleEn": "Three Capacitors Equivalent Capacitance in Series",
    "titleAr": "السعة المكافئة لثلاثة مكثفات على التوالي",
    "difficulty": "medium",
    "questionEn": "Three capacitors of capacitances $6\\,\\mu\\text{F}$, $3\\,\\mu\\text{F}$, and $2\\,\\mu\\text{F}$ are connected in series. Their equivalent capacitance ($C_{\\text{eq}}$) is:",
    "questionAr": "ثلاثة مكثفات سعاتها $6\\,\\mu\\text{F}$ و $3\\,\\mu\\text{F}$ و $2\\,\\mu\\text{F}$ اتصلت معاً على التوالي. فإن سعتها المكافئة ($C_{\\text{eq}}$) تساوي:",
    "optionsEn": [
      "$11.0\\,\\mu\\text{F}$",
      "$0.5\\,\\mu\\text{F}$",
      "$1.0\\,\\mu\\text{F}$",
      "$2.0\\,\\mu\\text{F}$"
    ],
    "optionsAr": [
      "$11.0\\,\\mu\\text{F}$",
      "$0.5\\,\\mu\\text{F}$",
      "$1.0\\,\\mu\\text{F}$",
      "$2.0\\,\\mu\\text{F}$"
    ],
    "correctAnswer": "$1.0\\,\\mu\\text{F}$",
    "correctIndex": 2,
    "hintEn": "$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{6} + \\frac{1}{3} + \\frac{1}{2}$.",
    "hintAr": "$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{6} + \\frac{1}{3} + \\frac{1}{2}$.",
    "stepByStepSolutionEn": [
      "$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{6} + \\frac{2}{6} + \\frac{3}{6} = \\frac{6}{6} = 1 \\implies C_{\\text{eq}} = 1.0\\,\\mu\\text{F}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{1}{C_{\\text{eq}}} = \\frac{1 + 2 + 3}{6} = \\frac{6}{6} = 1 \\implies C_{\\text{eq}} = 1.0\\,\\mu\\text{F}$."
    ],
    "teacherTipEn": "Notice that equivalent capacitance in series ($1.0\\,\\mu\\text{F}$) is smaller than the smallest capacitor ($2.0\\,\\mu\\text{F}$).",
    "teacherTipAr": "السعة المكافئة للتوالي أصغر من أصغر سعة مكثف في المجموعة."
  },
  {
    "id": "phys_ch4_db_med_24",
    "titleEn": "Three Capacitors Equivalent Capacitance in Parallel",
    "titleAr": "السعة المكافئة لثلاثة مكثفات على التوازي",
    "difficulty": "medium",
    "questionEn": "If the same three capacitors ($6\\,\\mu\\text{F}$, $3\\,\\mu\\text{F}$, and $2\\,\\mu\\text{F}$) are connected in parallel, their equivalent capacitance is:",
    "questionAr": "إذا اتصلت نفس المكثفات الثلاثة ($6\\,\\mu\\text{F}$ و $3\\,\\mu\\text{F}$ و $2\\,\\mu\\text{F}$) على التوازي، فإن سعتها المكافئة تساوي:",
    "optionsEn": [
      "$1.0\\,\\mu\\text{F}$",
      "$36.0\\,\\mu\\text{F}$",
      "$6.0\\,\\mu\\text{F}$",
      "$11.0\\,\\mu\\text{F}$"
    ],
    "optionsAr": [
      "$1.0\\,\\mu\\text{F}$",
      "$36.0\\,\\mu\\text{F}$",
      "$6.0\\,\\mu\\text{F}$",
      "$11.0\\,\\mu\\text{F}$"
    ],
    "correctAnswer": "$11.0\\,\\mu\\text{F}$",
    "correctIndex": 3,
    "hintEn": "$C_{\\text{eq}} = C_1 + C_2 + C_3$.",
    "hintAr": "$C_{\\text{eq}} = C_1 + C_2 + C_3$.",
    "stepByStepSolutionEn": [
      "$C_{\\text{eq}} = 6 + 3 + 2 = 11.0\\,\\mu\\text{F}$."
    ],
    "stepByStepSolutionAr": [
      "$C_{\\text{eq}} = 6 + 3 + 2 = 11.0\\,\\mu\\text{F}$."
    ],
    "teacherTipEn": "Parallel addition is a simple direct sum.",
    "teacherTipAr": "التوازي جمع جبري مباشر للسعات."
  },
  {
    "id": "phys_ch4_db_med_25",
    "titleEn": "Testing a Real Inductor Coil on DC Then on AC",
    "titleAr": "اختبار ملف حث حقيقي على تيار مستمر ثم متردد",
    "difficulty": "medium",
    "questionEn": "A coil is connected to a $12\\text{ V}$ DC battery, drawing a current of $2\\text{ A}$. When connected to a $12\\text{ V}$ AC source ($50\\text{ Hz}$), it draws a current of $1.2\\text{ A}$. The ohmic resistance ($r$) and inductive reactance ($X_L$) of the coil are, respectively:",
    "questionAr": "ملف وُصل بمصدر تيار مستمر $12\\text{ V}$ فمر به تيار $2\\text{ A}$. وعند توصيله بمصدر تيار متردد $12\\text{ V}$ وتردده $50\\text{ Hz}$، مر به تيار $1.2\\text{ A}$. فإن المقاومة الأومية ($r$) والمفاعلة الحثية ($X_L$) للملف هما على الترتيب:",
    "optionsEn": [
      "$r = 6\\,\\Omega$ and $X_L = 8\\,\\Omega$",
      "$r = 8\\,\\Omega$ and $X_L = 6\\,\\Omega$",
      "$r = 6\\,\\Omega$ and $X_L = 10\\,\\Omega$",
      "$r = 10\\,\\Omega$ and $X_L = 8\\,\\Omega$"
    ],
    "optionsAr": [
      "$r = 6\\,\\Omega$ و $X_L = 8\\,\\Omega$",
      "$r = 8\\,\\Omega$ و $X_L = 6\\,\\Omega$",
      "$r = 6\\,\\Omega$ و $X_L = 10\\,\\Omega$",
      "$r = 10\\,\\Omega$ و $X_L = 8\\,\\Omega$"
    ],
    "correctAnswer": "$r = 6\\,\\Omega$ and $X_L = 8\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "On DC: $X_L = 0 \\implies r = V/I_{\\text{DC}} = 12/2 = 6\\,\\Omega$. On AC: $Z = V/I_{\\text{AC}} = 12/1.2 = 10\\,\\Omega$. Then $X_L = \\sqrt{Z^2 - r^2}$.",
    "hintAr": "في المستمر $X_L = 0$ فتكون المقاومة الأومية $r = 12/2 = 6\\,\\Omega$. في المتردد $Z = 12/1.2 = 10\\,\\Omega$. والمفاعلة $X_L = \\sqrt{10^2 - 6^2} = 8\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "1) DC state: $r = \\frac{V_{\\text{DC}}}{I_{\\text{DC}}} = \\frac{12}{2} = 6\\,\\Omega$. 2) AC state: Total impedance $Z = \\frac{V_{\\text{AC}}}{I_{\\text{AC}}} = \\frac{12}{1.2} = 10\\,\\Omega$. 3) Inductive reactance: $X_L = \\sqrt{Z^2 - r^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "1) مع التيار المستمر: $r = \\frac{12}{2} = 6\\,\\Omega$. 2) مع المتردد: المعاوقة $Z = \\frac{12}{1.2} = 10\\,\\Omega$. 3) المفاعلة الحثية: $X_L = \\sqrt{Z^2 - r^2} = \\sqrt{10^2 - 6^2} = 8\\,\\Omega$."
    ],
    "teacherTipEn": "A classic high-frequency exam format testing the distinction between DC resistance and AC impedance.",
    "teacherTipAr": "سؤال امتحاني شهير يربط بين مقاومة التيار المستمر ومعاوقة التيار المتردد."
  },
  {
    "id": "phys_ch4_db_med_26",
    "titleEn": "Quality Factor Calculation for Resonant Circuit",
    "titleAr": "حساب معامل الجودة لدائرة الرنين",
    "difficulty": "medium",
    "questionEn": "A series RLC resonant circuit has $R = 10\\,\\Omega$, $L = 0.5\\text{ H}$, and $C = 2\\,\\mu\\text{F}$. The Quality Factor ($Q$) of the circuit is:",
    "questionAr": "دائرة رنين RLC على التوالي تحتوي على $R = 10\\,\\Omega$ و $L = 0.5\\text{ H}$ و $C = 2\\,\\mu\\text{F}$. فإن معامل الجودة ($Q$) للدائرة يساوي:",
    "optionsEn": [
      "$500$",
      "$50$",
      "$25$",
      "$100$"
    ],
    "optionsAr": [
      "$500$",
      "$50$",
      "$25$",
      "$100$"
    ],
    "correctAnswer": "$50$",
    "correctIndex": 1,
    "hintEn": "$Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$.",
    "hintAr": "$Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$.",
    "stepByStepSolutionEn": [
      "$\\sqrt{\\frac{L}{C}} = \\sqrt{\\frac{0.5}{2 \\times 10^{-6}}} = \\sqrt{0.25 \\times 10^6} = 0.5 \\times 1000 = 500\\,\\Omega$. Then $Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}} = \\frac{500}{10} = 50$."
    ],
    "stepByStepSolutionAr": [
      "$\\sqrt{\\frac{L}{C}} = \\sqrt{\\frac{0.5}{2 \\times 10^{-6}}} = \\sqrt{250000} = 500\\,\\Omega$. معامل الجودة: $Q = \\frac{500}{10} = 50$."
    ],
    "teacherTipEn": "The quality factor is a dimensionless ratio ($Q = 50$).",
    "teacherTipAr": "معامل الجودة نسبة لا تمييز لها ($Q = 50$)."
  },
  {
    "id": "phys_ch4_db_med_27",
    "titleEn": "Voltage Across Inductor at Resonance with Given Q",
    "titleAr": "حساب جهد ملف الحث عند الرنين بمعلومية معامل الجودة",
    "difficulty": "medium",
    "questionEn": "In the previous resonant circuit ($Q = 50$), if the AC source voltage is $V = 10\\text{ V}$, the voltage across the inductor ($V_L$) at resonance is:",
    "questionAr": "في دائرة الرنين السابقة ($Q = 50$)، إذا كان فرق جهد المصدر $V = 10\\text{ V}$، فإن فرق الجهد بين طرفي ملف الحث ($V_L$) عند الرنين يساوي:",
    "optionsEn": [
      "$10\\text{ V}$",
      "$50\\text{ V}$",
      "$500\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$10\\text{ V}$",
      "$50\\text{ V}$",
      "$500\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$500\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "$V_L = Q \\times V$.",
    "hintAr": "$V_L = Q \\times V$.",
    "stepByStepSolutionEn": [
      "At resonance, $V_L = Q \\times V = 50 \\times 10\\text{ V} = 500\\text{ V}$. Note that $V_C$ is also $500\\text{ V}$, and they cancel each other out ($500 - 500 = 0$)."
    ],
    "stepByStepSolutionAr": [
      "عند الرنين: $V_L = Q \\times V = 50 \\times 10 = 500\\text{ V}$. وجهد المكثف أيضاً $500\\text{ V}$، ويلاشي كل منهما الآخر ($500 - 500 = 0$)."
    ],
    "teacherTipEn": "Inductor voltage is 50 times larger than the source voltage!",
    "teacherTipAr": "جهد الملف أكبر من جهد المصدر بخمسين ضعفاً بفعل ظاهرة الرنين!"
  },
  {
    "id": "phys_ch4_db_med_28",
    "titleEn": "Slope of XL vs Frequency Graph",
    "titleAr": "ميل الخط المستقيم لمنحنى المفاعلة الحثية والتردد",
    "difficulty": "medium",
    "questionEn": "When a graph of inductive reactance ($X_L$) on the vertical axis is plotted against frequency ($f$) on the horizontal axis, the slope of the resulting straight line represents:",
    "questionAr": "عند رسم علاقة بيانية بين المفاعلة الحثية ($X_L$) على المحور الرأسي والتردد ($f$) على المحور الأفقي، فإن ميل الخط المستقيم الناتج يمثل:",
    "optionsEn": [
      "$\\frac{L}{2\\pi}$",
      "$L^2$",
      "$\\frac{1}{2\\pi L}$",
      "$2\\pi L$"
    ],
    "optionsAr": [
      "$\\frac{L}{2\\pi}$",
      "$L^2$",
      "$\\frac{1}{2\\pi L}$",
      "$2\\pi L$"
    ],
    "correctAnswer": "$2\\pi L$",
    "correctIndex": 3,
    "hintEn": "From $X_L = (2\\pi L) f$, comparing with $y = m x$.",
    "hintAr": "من القانون $X_L = (2\\pi L) f$، الميل هو معامل السينات.",
    "stepByStepSolutionEn": [
      "The relationship is linear: $X_L = (2\\pi L) f$. Comparing with $y = m x$, the slope $m = \\frac{\\Delta X_L}{\\Delta f} = 2\\pi L$. Therefore, the self-inductance can be determined from the slope: $L = \\frac{\\text{slope}}{2\\pi}$."
    ],
    "stepByStepSolutionAr": [
      "العلاقة خطية طردية تمر بنقطة الأصل: $X_L = (2\\pi L) f$. ميل الخط المستقيم هو: $\\text{Slope} = \\frac{\\Delta X_L}{\\Delta f} = 2\\pi L$. ويمكن استنتاج معامل الحث الذاتي بقسمة الميل على $2\\pi$."
    ],
    "teacherTipEn": "Slope $= 2\\pi L \\implies L = \\frac{\\text{slope}}{2\\pi}$.",
    "teacherTipAr": "الميل $= 2\\pi L \\implies L = \\frac{\\text{الميل}}{2\\pi}$."
  },
  {
    "id": "phys_ch4_db_med_29",
    "titleEn": "Slope of XC vs 1/f Graph",
    "titleAr": "ميل الخط المستقيم لمنحنى المفاعلة السعوية ومقلوب التردد",
    "difficulty": "medium",
    "questionEn": "When capacitive reactance ($X_C$) is plotted on the vertical axis against the inverse of frequency ($\\frac{1}{f}$) on the horizontal axis, the slope of the straight line is:",
    "questionAr": "عند رسم علاقة بيانية بين المفاعلة السعوية ($X_C$) على المحور الرأسي ومقلوب التردد ($\\frac{1}{f}$) على المحور الأفقي، فإن ميل الخط المستقيم الناتج يمثل:",
    "optionsEn": [
      "$\\frac{1}{2\\pi C}$",
      "$2\\pi C$",
      "$\\frac{C}{2\\pi}$",
      "$\\frac{1}{C^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{2\\pi C}$",
      "$2\\pi C$",
      "$\\frac{C}{2\\pi}$",
      "$\\frac{1}{C^2}$"
    ],
    "correctAnswer": "$\\frac{1}{2\\pi C}$",
    "correctIndex": 0,
    "hintEn": "From $X_C = \\left(\\frac{1}{2\\pi C}\\right) \\times \\left(\\frac{1}{f}\\right)$.",
    "hintAr": "من القانون $X_C = \\frac{1}{2\\pi C} \\times \\frac{1}{f}$.",
    "stepByStepSolutionEn": [
      "The formula is $X_C = \\left(\\frac{1}{2\\pi C}\\right) \\left(\\frac{1}{f}\\right)$. Comparing with $y = m x$, the slope is $m = \\frac{1}{2\\pi C}$. Capacitance is found via $C = \\frac{1}{2\\pi \\times \\text{slope}}$."
    ],
    "stepByStepSolutionAr": [
      "العلاقة هي: $X_C = \\left(\\frac{1}{2\\pi C}\\right) \\left(\\frac{1}{f}\\right)$. وبمقارنتها بالصورة $y = m x$، نجد أن الميل يساوي: $\\text{Slope} = \\frac{1}{2\\pi C}$. ويمكن حساب سعة المكثف من العلاقة: $C = \\frac{1}{2\\pi \\times \\text{الميل}}$."
    ],
    "teacherTipEn": "Capacitance $C = \\frac{1}{2\\pi \\times \\text{slope}}$.",
    "teacherTipAr": "السعة $C = \\frac{1}{2\\pi \\times \\text{الميل}}$."
  },
  {
    "id": "phys_ch4_db_med_30",
    "titleEn": "Phase Angle Zero When XL = XC",
    "titleAr": "انعدام زاوية الطور عند تساوي المفاعلتين",
    "difficulty": "medium",
    "questionEn": "In a series RLC circuit, if $X_L = 50\\,\\Omega$, $X_C = 50\\,\\Omega$, and $R = 25\\,\\Omega$, the phase angle between total voltage and current is:",
    "questionAr": "في دائرة RLC على التوالي، إذا كانت $X_L = 50\\,\\Omega$ و $X_C = 50\\,\\Omega$ و $R = 25\\,\\Omega$، فإن زاوية الطور بين الجهد الكلي والتيار تساوي:",
    "optionsEn": [
      "$45^\\circ$",
      "$0^\\circ$ (pure resonance)",
      "$90^\\circ$",
      "$-45^\\circ$"
    ],
    "optionsAr": [
      "$45^\\circ$",
      "$0^\\circ$ (رنين نقي)",
      "$90^\\circ$",
      "$-45^\\circ$"
    ],
    "correctAnswer": "$0^\\circ$ (pure resonance)",
    "correctIndex": 1,
    "hintEn": "$\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{50 - 50}{25} = 0 \\implies \\phi = 0^\\circ$.",
    "hintAr": "$\\tan\\phi = \\frac{50 - 50}{25} = 0 \\implies \\phi = 0^\\circ$.",
    "stepByStepSolutionEn": [
      "$\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{0}{25} = 0 \\implies \\phi = 0^\\circ$. Total voltage and current are in phase, characteristic of resonance."
    ],
    "stepByStepSolutionAr": [
      "$\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{0}{25} = 0 \\implies \\phi = 0^\\circ$. يتفق الجهد مع التيار في الطور تماماً لتحقق الرنين."
    ],
    "teacherTipEn": "Resonance implies $\\phi = 0^\\circ$.",
    "teacherTipAr": "الرنين يعني حتماً أن زاوية الطور $\\phi = 0^\\circ$."
  },
  {
    "id": "phys_ch4_db_med_31",
    "titleEn": "Time Lag Between Voltage and Current in RL Circuit",
    "titleAr": "الزمن الذي يتأخر به التيار عن الجهد في دائرة RL",
    "difficulty": "medium",
    "questionEn": "In an AC circuit operating at frequency $f = 50\\text{ Hz}$, the voltage leads the current by a phase angle $\\phi = 45^\\circ$. The time lag ($\\Delta t$) by which the current lags behind the voltage is:",
    "questionAr": "في دائرة تيار متردد تعمل بتردد $f = 50\\text{ Hz}$، يتقدم الجهد على التيار بزاوية طور $\\phi = 45^\\circ$. فإن الفارق الزمني ($\\Delta t$) الذي يتأخر به التيار عن الجهد يساوي:",
    "optionsEn": [
      "$5.0\\text{ ms} = \\frac{1}{200}\\text{ s}$",
      "$1.25\\text{ ms} = \\frac{1}{800}\\text{ s}$",
      "$2.5\\text{ ms} = \\frac{1}{400}\\text{ s}$",
      "$10.0\\text{ ms} = \\frac{1}{100}\\text{ s}$"
    ],
    "optionsAr": [
      "$5.0\\text{ ms} = \\frac{1}{200}\\text{ s}$",
      "$1.25\\text{ ms} = \\frac{1}{800}\\text{ s}$",
      "$2.5\\text{ ms} = \\frac{1}{400}\\text{ s}$",
      "$10.0\\text{ ms} = \\frac{1}{100}\\text{ s}$"
    ],
    "correctAnswer": "$2.5\\text{ ms} = \\frac{1}{400}\\text{ s}$",
    "correctIndex": 2,
    "hintEn": "Period $T = \\frac{1}{f} = \\frac{1}{50} = 0.02\\text{ s} = 20\\text{ ms}$. Time lag is $\\Delta t = \\frac{\\phi}{360^\\circ} T$.",
    "hintAr": "الزمن الدوري $T = 20\\text{ ms}$. فارق الزمن $\\Delta t = \\frac{\\phi}{360} T$.",
    "stepByStepSolutionEn": [
      "The period is $T = \\frac{1}{50} = 0.02\\text{ s} = 20\\text{ ms}$. A full period corresponds to $360^\\circ$. The time lag corresponding to $45^\\circ$ is $\\Delta t = \\frac{45^\\circ}{360^\\circ} \\times T = \\frac{1}{8} \\times 20\\text{ ms} = 2.5\\text{ ms}$."
    ],
    "stepByStepSolutionAr": [
      "الزمن الدوري للدورة الكاملة ($360^\\circ$) هو $T = \\frac{1}{50} = 0.02\\text{ s} = 20\\text{ ms}$. يقابل فرق الطور $45^\\circ$ زمناً قدره: $\\Delta t = \\frac{45}{360} \\times 20\\text{ ms} = \\frac{1}{8} \\times 20 = 2.5\\text{ ms}$."
    ],
    "teacherTipEn": "Time lag formula: $\\Delta t = \\frac{\\phi}{360^\\circ f}$.",
    "teacherTipAr": "قانون فارق الزمن: $\\Delta t = \\frac{\\phi}{360^\\circ f}$."
  },
  {
    "id": "phys_ch4_db_med_32",
    "titleEn": "Voltmeter Reading Across LC Pair at Resonance",
    "titleAr": "قراءة فولتميتر متصل عبر الملف والمكثف معاً في حالة رنين",
    "difficulty": "medium",
    "questionEn": "In a series RLC circuit in electrical resonance, an AC voltmeter is connected across BOTH the inductor and the capacitor simultaneously. The voltmeter reading ($V_{LC}$) will be:",
    "questionAr": "في دائرة RLC على التوالي في حالة رنين، وُصل فولتميتر تيار متردد بين طرفي الملف والمكثف معاً في نفس الوقت. فإن قراءة الفولتميتر ($V_{LC}$) تكون:",
    "optionsEn": [
      "Double the source voltage ($2V$)",
      "Equal to the source voltage ($V$)",
      "Equal to $V_L + V_C$",
      "Zero ($V_{LC} = 0$)"
    ],
    "optionsAr": [
      "ضعف جهد المصدر ($2V$)",
      "مساوية لجهد المصدر ($V$)",
      "مساوية لمجموع الجهود $V_L + V_C$",
      "صفراً ($V_{LC} = 0$)"
    ],
    "correctAnswer": "Zero ($V_{LC} = 0$)",
    "correctIndex": 3,
    "hintEn": "$V_{LC} = |V_L - V_C|$. At resonance, $V_L = V_C \\implies V_{LC} = 0$.",
    "hintAr": "جهدا الملف والمكثف متساويان ومتضادان في الطور تماماً $V_{LC} = |V_L - V_C| = 0$.",
    "stepByStepSolutionEn": [
      "Across the series combination of $L$ and $C$, the voltage is $V_{LC} = |V_L - V_C|$. At resonance, $X_L = X_C \\implies V_L = V_C$. Because the voltages are equal in amplitude and $180^\\circ$ out of phase, they completely cancel each other. The voltmeter reads exactly $0\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "فرق الجهد بين طرفي مجموعة الملف والمكثف معاً هو $V_{LC} = |V_L - V_C|$. وفي حالة الرنين يتساوى الجهدان $V_L = V_C$ ويتضادان في الطور ($180^\\circ$)، فيلاشي كل منهما الآخر تماماً ويسجل الفولتميتر صفراً."
    ],
    "teacherTipEn": "Classic trick question: individual voltmeters read hundreds of volts, but across both together it reads ZERO!",
    "teacherTipAr": "خدعة امتحانية شهيرة: الفولتميتر المنفرد يقرأ مئات الفولتات، وعبر الاثنين معاً يقرأ صفراً!"
  },
  {
    "id": "phys_ch4_db_med_33",
    "titleEn": "Retuning a Resonant Circuit to a Higher Frequency",
    "titleAr": "إعادة ضبط دائرة رنين لتعمل على تردد أعلى",
    "difficulty": "medium",
    "questionEn": "To increase the resonant frequency ($f_0$) of a tuner circuit without changing the inductor coil, one should:",
    "questionAr": "لزيادة تردد الرنين ($f_0$) لدائرة توليف دون تغيير ملف الحث، يجب:",
    "optionsEn": [
      "Connect an additional capacitor in SERIES with the original capacitor to reduce equivalent capacitance",
      "Connect an additional capacitor in PARALLEL with the original capacitor",
      "Increase the circuit's ohmic resistance",
      "Double the battery voltage"
    ],
    "optionsAr": [
      "توصيل مكثف إضافي على التوالي مع المكثف الأصلي لتقليل السعة المكافئة",
      "توصيل مكثف إضافي على التوازي مع المكثف الأصلي",
      "زيادة المقاومة الأومية للدائرة",
      "مضاعفة جهد البطارية"
    ],
    "correctAnswer": "Connect an additional capacitor in SERIES with the original capacitor to reduce equivalent capacitance",
    "correctIndex": 0,
    "hintEn": "$f_0 = \\frac{1}{2\\pi\\sqrt{LC}} \\propto \\frac{1}{\\sqrt{C}}$. To increase $f_0$, must decrease $C$.",
    "hintAr": "$f_0 \\propto \\frac{1}{\\sqrt{C}}$. لزيادة التردد يجب إنقاص السعة، وإنقاص السعة يتم بالتوصيل على التوالي.",
    "stepByStepSolutionEn": [
      "From $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$, the resonant frequency is inversely proportional to the square root of capacitance. To increase $f_0$, the equivalent capacitance must be decreased. Connecting a capacitor in series reduces the equivalent capacitance ($C_{\\text{eq}} < C$), thereby raising $f_0$."
    ],
    "stepByStepSolutionAr": [
      "من قانون تردد الرنين $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$، يتناسب التردد عكسياً مع الجذر التربيعي للسعة. ولكي يزداد تردد الرنين يجب تقليل السعة الكلية للدائرة. ويتحقق تقليل السعة بتوصيل مكثف إضافي على التوالي مع مكثف الدائرة فتصغر السعة المكافئة ويزداد التردد."
    ],
    "teacherTipEn": "Series capacitor decreases $C \\implies$ increases resonant frequency $f_0$.",
    "teacherTipAr": "توصيل مكثف على التوالي يقلل السعة $\\implies$ يرفع تردد الرنين."
  },
  {
    "id": "phys_ch4_db_med_34",
    "titleEn": "Retuning a Resonant Circuit to a Lower Frequency",
    "titleAr": "إعادة ضبط دائرة رنين لتعمل على تردد أقل",
    "difficulty": "medium",
    "questionEn": "To decrease the resonant frequency ($f_0$) of an LC resonant circuit, one should:",
    "questionAr": "لتقليل تردد الرنين ($f_0$) لدائرة رنين LC، يجب:",
    "optionsEn": [
      "Connect an additional capacitor in series",
      "Connect an additional capacitor in PARALLEL with the existing capacitor to increase total capacitance",
      "Remove the iron core from the coil",
      "Increase the source voltage"
    ],
    "optionsAr": [
      "توصيل مكثف إضافي على التوالي",
      "توصيل مكثف إضافي على التوازي مع المكثف الأصلي لزيادة السعة المكافئة",
      "سحب القلب الحديدي من الملف",
      "زيادة جهد المصدر"
    ],
    "correctAnswer": "Connect an additional capacitor in PARALLEL with the existing capacitor to increase total capacitance",
    "correctIndex": 1,
    "hintEn": "$f_0 \\propto \\frac{1}{\\sqrt{C}}$. To decrease $f_0$, must increase $C$ (parallel connection).",
    "hintAr": "$f_0 \\propto \\frac{1}{\\sqrt{C}}$. لإنقاص التردد يجب زيادة السعة بالتوصيل على التوازي.",
    "stepByStepSolutionEn": [
      "To lower the resonant frequency, the product $L C$ must increase. Connecting a capacitor in parallel increases equivalent capacitance ($C_{\\text{eq}} = C_1 + C_2$), which lowers the resonant frequency $f_0$."
    ],
    "stepByStepSolutionAr": [
      "لإنقاص تردد الرنين يجب زيادة سعة الدائرة. وتزداد السعة بتوصيل مكثف على التوازي ($C_{\\text{eq}} = C_1 + C_2$)، مما يرفع السعة ويخفض تردد الرنين."
    ],
    "teacherTipEn": "Parallel capacitor increases $C \\implies$ decreases resonant frequency $f_0$.",
    "teacherTipAr": "توصيل مكثف على التوازي يزيد السعة $\\implies$ يخفض تردد الرنين."
  },
  {
    "id": "phys_ch4_db_med_35",
    "titleEn": "Current Phase Angle When XL = R in Series RL Circuit",
    "titleAr": "زاوية الطور عندما تتساوى المفاعلة الحثية مع المقاومة",
    "difficulty": "medium",
    "questionEn": "In a series RL circuit, if the inductive reactance equals the ohmic resistance ($X_L = R$), the phase angle ($\\phi$) by which voltage leads current is:",
    "questionAr": "في دائرة RL على التوالي، إذا تساوت المفاعلة الحثية مع المقاومة الأومية ($X_L = R$)، فإن زاوية الطور ($\\phi$) التي يتقدم بها الجهد على التيار تساوي:",
    "optionsEn": [
      "$90^\\circ$",
      "$0^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$"
    ],
    "optionsAr": [
      "$90^\\circ$",
      "$0^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$"
    ],
    "correctAnswer": "$45^\\circ$",
    "correctIndex": 2,
    "hintEn": "$\\tan\\phi = \\frac{X_L}{R} = 1 \\implies \\phi = 45^\\circ$.",
    "hintAr": "$\\tan\\phi = \\frac{X_L}{R} = 1 \\implies \\phi = 45^\\circ$.",
    "stepByStepSolutionEn": [
      "Since $\\tan\\phi = \\frac{X_L}{R}$, when $X_L = R$, we have $\\tan\\phi = 1 \\implies \\phi = 45^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\tan\\phi = \\frac{X_L}{R}$، فعند $X_L = R$ يكون $\\tan\\phi = 1$ وتكون زاوية الطور $\\phi = 45^\\circ$."
    ],
    "teacherTipEn": "At $\\phi = 45^\\circ$, the impedance is $Z = \\sqrt{R^2 + R^2} = R\\sqrt{2}$.",
    "teacherTipAr": "عند زاوية $45^\\circ$ تكون المعاوقة $Z = R\\sqrt{2}$."
  },
  {
    "id": "phys_ch4_db_med_36",
    "titleEn": "Current Phase Angle When XC = R in Series RC Circuit",
    "titleAr": "زاوية الطور عندما تتساوى المفاعلة السعوية مع المقاومة",
    "difficulty": "medium",
    "questionEn": "In a series RC circuit, if the capacitive reactance equals the ohmic resistance ($X_C = R$), the phase angle ($\\phi$) is:",
    "questionAr": "في دائرة RC على التوالي، إذا تساوت المفاعلة السعوية مع المقاومة الأومية ($X_C = R$)، فإن زاوية الطور ($\\phi$) تساوي:",
    "optionsEn": [
      "$+45^\\circ$",
      "$-90^\\circ$",
      "$0^\\circ$",
      "$-45^\\circ$ (voltage lags current by $45^\\circ$)"
    ],
    "optionsAr": [
      "$+45^\\circ$",
      "$-90^\\circ$",
      "$0^\\circ$",
      "$-45^\\circ$ (يتأخر فرق الجهد الكلي عن التيار بزاوية $45^\\circ$)"
    ],
    "correctAnswer": "$-45^\\circ$ (voltage lags current by $45^\\circ$)",
    "correctIndex": 3,
    "hintEn": "$\\tan\\phi = -\\frac{X_C}{R} = -1 \\implies \\phi = -45^\\circ$.",
    "hintAr": "$\\tan\\phi = -\\frac{X_C}{R} = -1 \\implies \\phi = -45^\\circ$.",
    "stepByStepSolutionEn": [
      "$\\tan\\phi = -\\frac{X_C}{R} = -\\frac{R}{R} = -1 \\implies \\phi = -45^\\circ$. Voltage lags behind current by $45^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$\\tan\\phi = -\\frac{X_C}{R} = -1 \\implies \\phi = -45^\\circ$. يتأخر الجهد الكلي عن التيار بزاوية $45^\\circ$."
    ],
    "teacherTipEn": "Impedance is $Z = \\sqrt{R^2 + R^2} = R\\sqrt{2}$.",
    "teacherTipAr": "المعاوقة الكلية $Z = R\\sqrt{2}$."
  },
  {
    "id": "phys_ch4_db_med_37",
    "titleEn": "Frequency of Undamped Electrical Oscillations in LC Circuit",
    "titleAr": "تردد الاهتزازات الكهرومغناطيسية في الدائرة المهتزة",
    "difficulty": "medium",
    "questionEn": "In an ideal LC oscillatory circuit ($R = 0$) containing $L = 0.04\\text{ H}$ and $C = 100\\,\\mu\\text{F}$, the frequency of natural electromagnetic oscillations ($f$) is ($\\pi \\approx 3.14$):",
    "questionAr": "في دائرة مهتزة مثالية ($R = 0$) تحتوي على $L = 0.04\\text{ H}$ ومكثف $C = 100\\,\\mu\\text{F}$، فإن تردد الاهتزازات الكهرومغناطيسية الطبيعية ($f$) يساوي تقريباً:",
    "optionsEn": [
      "$\\approx 79.6\\text{ Hz}$",
      "$159.2\\text{ Hz}$",
      "$50.0\\text{ Hz}$",
      "$25.0\\text{ Hz}$"
    ],
    "optionsAr": [
      "$\\approx 79.6\\text{ Hz}$",
      "$159.2\\text{ Hz}$",
      "$50.0\\text{ Hz}$",
      "$25.0\\text{ Hz}$"
    ],
    "correctAnswer": "$\\approx 79.6\\text{ Hz}$",
    "correctIndex": 0,
    "hintEn": "$f = \\frac{1}{2\\pi \\sqrt{LC}}$.",
    "hintAr": "$f = \\frac{1}{2\\pi \\sqrt{LC}}$.",
    "stepByStepSolutionEn": [
      "$L C = 0.04 \\times (100 \\times 10^{-6}) = 4 \\times 10^{-6}$. $\\sqrt{LC} = 2 \\times 10^{-3}\\text{ s}$. Then $f = \\frac{1}{2\\pi \\times 2 \\times 10^{-3}} = \\frac{1000}{4\\pi} = \\frac{250}{\\pi} \\approx 79.58\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$L C = 4 \\times 10^{-6} \\implies \\sqrt{LC} = 2 \\times 10^{-3}$. التردد: $f = \\frac{1000}{4\\pi} = \\frac{250}{3.14} \\approx 79.6\\text{ Hz}$."
    ],
    "teacherTipEn": "Oscillation frequency of an LC tank equals the resonant frequency formula.",
    "teacherTipAr": "تردد اهتزاز دائرة LC يُحسب بنفس قانون تردد الرنين."
  },
  {
    "id": "phys_ch4_db_med_38",
    "titleEn": "Instantaneous Current at Maximum Capacitor Charge in LC Circuit",
    "titleAr": "شدة التيار اللحظية عند وصول شحنة المكثف لأقصى قيمة في الدائرة المهتزة",
    "difficulty": "medium",
    "questionEn": "In an oscillatory LC circuit, at the instant when the electric charge stored on the capacitor plates reaches its maximum peak value ($q = Q_{\\max}$), the electric current in the inductor is:",
    "questionAr": "في الدائرة المهتزة، في اللحظة التي تصل فيها الشحنة الكهربية على لوحي المكثف إلى قيمتها العظمى ($q = Q_{\\max}$)، فإن شدة التيار المار في ملف الحث تكون:",
    "optionsEn": [
      "At its maximum peak value ($I = I_{\\max}$)",
      "Zero ($I = 0$), because all energy is purely stored in the electric field",
      "Equal to half of maximum current",
      "Reversing direction at infinite speed"
    ],
    "optionsAr": [
      "قيمة عظمى ($I = I_{\\max}$)",
      "صفراً ($I = 0$)، لأن الطاقة بالكامل مختزنة في صورة مجال كهربي بالمكثف",
      "نصف القيمة العظمى للتيار",
      "تنعكس بسرعة لا نهائية"
    ],
    "correctAnswer": "Zero ($I = 0$), because all energy is purely stored in the electric field",
    "correctIndex": 1,
    "hintEn": "Conservation of energy: $E = \\frac{1}{2} \\frac{q^2}{C} + \\frac{1}{2} L i^2 = \\text{constant}$.",
    "hintAr": "بقاء الطاقة: الطاقة الكلية = طاقة كهربية + طاقة مغناطيسية. فعندما تكون إحداهما عظمى تنعدم الأخرى.",
    "stepByStepSolutionEn": [
      "Total electromagnetic energy is $E = \\frac{q^2}{2C} + \\frac{1}{2} L i^2$. When $q = Q_{\\max}$, the electrostatic energy $\\frac{Q_{\\max}^2}{2C}$ equals the total energy $E$. Therefore, the magnetic field energy $\\frac{1}{2} L i^2$ must be zero, meaning the current $i(t) = 0$."
    ],
    "stepByStepSolutionAr": [
      "الطاقة الكلية الكهرومغناطيسية محفوظة: $E = \\frac{q^2}{2C} + \\frac{1}{2} L i^2$. فعندما تصل الشحنة لقيمتها العظمى $Q_{\\max}$، تكون الطاقة الكهربية نهاية عظمى وتستوعب كل طاقة الدائرة، فيلزم أن تنعدم الطاقة المغناطيسية ($\\frac{1}{2} L i^2 = 0$)، وتكون شدة التيار منعدمة تماماً ($I = 0$)."
    ],
    "teacherTipEn": "When charge is max $\\implies$ current is 0; When current is max $\\implies$ charge is 0.",
    "teacherTipAr": "عندما تكون الشحنة عظمى $\\implies$ التيار صفر؛ وعندما يكون التيار عظمى $\\implies$ الشحنة صفر."
  },
  {
    "id": "phys_ch4_db_med_39",
    "titleEn": "Instantaneous Charge at Maximum Inductor Current in LC Circuit",
    "titleAr": "شحنة المكثف عند وصول تيار الملف لأقصى قيمة في الدائرة المهتزة",
    "difficulty": "medium",
    "questionEn": "In the oscillatory LC circuit, at the instant when the electric current passing through the inductor reaches its maximum peak value ($i = I_{\\max}$), the electric charge on the capacitor plates is:",
    "questionAr": "في الدائرة المهتزة، في اللحظة التي تصل فيها شدة التيار المار في ملف الحث إلى قيمتها العظمى ($i = I_{\\max}$)، فإن الشحنة الكهربية على لوحي المكثف تكون:",
    "optionsEn": [
      "At its maximum peak value",
      "Equal to half of maximum charge",
      "Zero ($q = 0$), because all energy is purely stored in the magnetic field",
      "Negative infinite"
    ],
    "optionsAr": [
      "قيمة عظمى",
      "نصف القيمة العظمى للشحنة",
      "صفراً ($q = 0$)، لأن الطاقة بالكامل مختزنة في صورة مجال مغناطيسي بالملف",
      "سالبة لا نهائية"
    ],
    "correctAnswer": "Zero ($q = 0$), because all energy is purely stored in the magnetic field",
    "correctIndex": 2,
    "hintEn": "When magnetic energy is maximum ($\\frac{1}{2} L I_{\\max}^2 = E$), electric energy must be zero.",
    "hintAr": "عندما تكون الطاقة المغناطيسية عظمى، تنعدم الطاقة الكهربية والشحنة.",
    "stepByStepSolutionEn": [
      "When the magnetic energy reaches its maximum value $\\frac{1}{2} L I_{\\max}^2$, it accounts for $100\\%$ of the circuit's total energy. Therefore, the electrostatic field energy is zero: $\\frac{q^2}{2C} = 0 \\implies q = 0$. The capacitor is completely discharged at this instant."
    ],
    "stepByStepSolutionAr": [
      "عندما يصل التيار إلى قيمته العظمى $I_{\\max}$، تصبح الطاقة المغناطيسية في الملف مساوية للطاقة الكلية للدائرة. وبناءً على ذلك تنعدم الطاقة الكهربية في المكثف: $\\frac{q^2}{2C} = 0$، وتكون الشحنة على لوحي المكثف صفراً تماماً لحظة مرور أقصى تيار."
    ],
    "teacherTipEn": "Energy swings completely between C and L like a mechanical pendulum.",
    "teacherTipAr": "تتأرجح الطاقة بين المكثف والملف تماماً كتحول طاقة الوضع لطاقة حركة في البندول."
  },
  {
    "id": "phys_ch4_db_med_40",
    "titleEn": "Rate of Energy Exchange in LC Tank Circuit",
    "titleAr": "معدل تبادل الطاقة وتردد تحولاتها في الدائرة المهتزة",
    "difficulty": "medium",
    "questionEn": "If the natural electromagnetic frequency of an oscillatory LC circuit is $f_0 = 1000\\text{ Hz}$, the frequency at which electrostatic energy converts into magnetic energy and back (energy oscillation frequency) is:",
    "questionAr": "إذا كان التردد الطبيعي للاهتزازات الكهرومغناطيسية في دائرة مهتزة $f_0 = 1000\\text{ Hz}$، فإن تردد تبادل وتحول الطاقة بين المكثف والملف (تردد اهتزاز الطاقة) يساوي:",
    "optionsEn": [
      "$f_0 = 1000\\text{ Hz}$",
      "$f_0 / 2 = 500\\text{ Hz}$",
      "$4f_0 = 4000\\text{ Hz}$",
      "$2f_0 = 2000\\text{ Hz}$"
    ],
    "optionsAr": [
      "$f_0 = 1000\\text{ Hz}$",
      "$f_0 / 2 = 500\\text{ Hz}$",
      "$4f_0 = 4000\\text{ Hz}$",
      "$2f_0 = 2000\\text{ Hz}$"
    ],
    "correctAnswer": "$2f_0 = 2000\\text{ Hz}$",
    "correctIndex": 3,
    "hintEn": "Energy is proportional to $q^2$ and $i^2$. In each cycle of current, energy peaks twice.",
    "hintAr": "الطاقة تتناسب مع مربع الشحنة ومربع التيار، فتصل لقيمتها العظمى مرتين في كل دورة تيار.",
    "stepByStepSolutionEn": [
      "In one complete cycle of current and charge (period $T$), the capacitor charges and discharges twice (once with positive polarity and once with negative polarity). Because energy $W \\propto q^2 \\propto \\sin^2(\\omega t)$, the energy completes two full cycles for every single cycle of current. Thus, the energy oscillation frequency is $2f_0 = 2 \\times 1000 = 2000\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "في كل دورة كاملة للتيار والشحنة، يُشحن المكثف مرتين ويفرغ مرتين (مرة بقطبية موجبة ومرة بقطبية سالبة). ولأن الطاقة تتناسب مع مربع الشحنة ومربع التيار ($W \\propto \\sin^2\\omega t$)، فإن منحنى الطاقة يكمل دورتين كاملتين لكل دورة واحدة للتيار، فيكون تردد تبادل الطاقة ضعف تردد التيار: $2f_0 = 2000\\text{ Hz}$."
    ],
    "teacherTipEn": "Energy oscillation frequency is always double the current frequency ($2f_0$).",
    "teacherTipAr": "تردد اهتزاز الطاقة دائماً ضعف تردد التيار ($2f_0$)."
  },
  {
    "id": "phys_ch4_db_med_41",
    "titleEn": "Ratio of Resonant Frequencies When Parameters Change",
    "titleAr": "نسبة ترددي رنين عند تغير معاملات الدائرة",
    "difficulty": "medium",
    "questionEn": "In a series RLC resonant circuit, if the inductance is increased by 9 times ($9L$) and the capacitance is decreased to one-fourth ($C/4$), the ratio of the new resonant frequency to the original resonant frequency ($f'_0 / f_0$) is:",
    "questionAr": "في دائرة رنين RLC، إذا زاد معامل الحث الذاتي للملف إلى 9 أمثاله ($9L$) وقَلّت سعة المكثف إلى الربع ($C/4$)، فإن نسبة تردد الرنين الجديد إلى الأصلي ($f'_0 / f_0$) تساوي:",
    "optionsEn": [
      "$\\frac{2}{3}$",
      "$\\frac{3}{2}$",
      "$\\frac{9}{4}$",
      "$\\frac{4}{9}$"
    ],
    "optionsAr": [
      "$\\frac{2}{3}$",
      "$\\frac{3}{2}$",
      "$\\frac{9}{4}$",
      "$\\frac{4}{9}$"
    ],
    "correctAnswer": "$\\frac{2}{3}$",
    "correctIndex": 0,
    "hintEn": "$\\frac{f'_0}{f_0} = \\sqrt{\\frac{L C}{L' C'}} = \\sqrt{\\frac{L C}{9L \\times (C/4)}} = \\sqrt{\\frac{4}{9}} = \\frac{2}{3}$.",
    "hintAr": "$\\frac{f'_0}{f_0} = \\sqrt{\\frac{LC}{L' C'}} = \\sqrt{\\frac{4}{9}} = \\frac{2}{3}$.",
    "stepByStepSolutionEn": [
      "$\\frac{f'_0}{f_0} = \\sqrt{\\frac{L_1 C_1}{L_2 C_2}} = \\sqrt{\\frac{L \\times C}{9L \\times (C/4)}} = \\sqrt{\\frac{4}{9}} = \\frac{2}{3}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{f'_0}{f_0} = \\sqrt{\\frac{LC}{9L \\times (C/4)}} = \\sqrt{\\frac{4}{9}} = \\frac{2}{3}$."
    ],
    "teacherTipEn": "Careful square root inversion: $\\sqrt{9/4} = 3/2$ in denominator flips to $2/3$.",
    "teacherTipAr": "قلب الكسر في المقام: جذر $9/4$ يساوي $3/2$ ويقلب في البسط إلى $2/3$."
  },
  {
    "id": "phys_ch4_db_med_42",
    "titleEn": "Voltmeter Reading Across Entire RLC Circuit at Resonance",
    "titleAr": "قراءة الفولتميتر الكلي عبر دائرة RLC في حالة رنين",
    "difficulty": "medium",
    "questionEn": "A series RLC circuit in resonance has $R = 50\\,\\Omega$, $X_L = 200\\,\\Omega$, and $X_C = 200\\,\\Omega$, powered by an AC source of $220\\text{ V}$. The reading of a voltmeter across the resistor alone ($V_R$) and the reading across the entire circuit ($V_{\\text{total}}$) are, respectively:",
    "questionAr": "دائرة RLC على التوالي في حالة رنين تحتوي على $R = 50\\,\\Omega$ و $X_L = 200\\,\\Omega$ و $X_C = 200\\,\\Omega$ ومصدر $220\\text{ V}$. فإن قراءة الفولتميتر عبر المقاومة فقط ($V_R$) وعبر الدائرة بأكملها ($V_{\\text{total}}$) هما على الترتيب:",
    "optionsEn": [
      "$220\\text{ V}$ and $400\\text{ V}$",
      "$220\\text{ V}$ and $220\\text{ V}$",
      "$50\\text{ V}$ and $220\\text{ V}$",
      "$0\\text{ V}$ and $220\\text{ V}$"
    ],
    "optionsAr": [
      "$220\\text{ V}$ و $400\\text{ V}$",
      "$220\\text{ V}$ و $220\\text{ V}$",
      "$50\\text{ V}$ و $220\\text{ V}$",
      "$0\\text{ V}$ and $220\\text{ V}$"
    ],
    "correctAnswer": "$220\\text{ V}$ and $220\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "At resonance: $V_R = V_{\\text{source}} = 220\\text{ V}$.",
    "hintAr": "عند الرنين: يتساوى جهد المقاومة مع جهد المصدر الكلي تماماً: $V_R = V = 220\\text{ V}$.",
    "stepByStepSolutionEn": [
      "At resonance, $X_L = X_C$, so the voltages across $L$ and $C$ cancel completely. The total voltage equals the voltage across the resistor: $V_R = V_{\\text{total}} = 220\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "في حالة الرنين تتساوى المفاعلتان وتلغي كل منهما الأخرى، فيكون فرق الجهد بين طرفي المقاومة مساوياً لفرق جهد المصدر الكلي تماماً: $V_R = V_{\\text{total}} = 220\\text{ V}$."
    ],
    "teacherTipEn": "Resonance condition: $V_R = V_{\\text{source}}$.",
    "teacherTipAr": "شرط الرنين الأساسي: $V_R = V_{\\text{المصدر}}$."
  },
  {
    "id": "phys_ch4_db_med_43",
    "titleEn": "Current Phase Angle When XL = 2XC in Series RLC",
    "titleAr": "زاوية الطور عندما تكون المفاعلة الحثية ضعف السعوية",
    "difficulty": "medium",
    "questionEn": "In a series RLC circuit, $R = 30\\,\\Omega$, $X_L = 80\\,\\Omega$, and $X_C = 50\\,\\Omega$. The tangent of the phase angle ($\\tan\\phi$) is:",
    "questionAr": "في دائرة RLC على التوالي، إذا كانت $R = 30\\,\\Omega$ و $X_L = 80\\,\\Omega$ و $X_C = 50\\,\\Omega$. فإن ظل زاوية الطور ($\\tan\\phi$) يساوي:",
    "optionsEn": [
      "$-1.0$",
      "$+0.5$",
      "$+1.0$ (meaning $\\phi = +45^\\circ$, voltage leads current)",
      "$+2.0$"
    ],
    "optionsAr": [
      "$-1.0$",
      "$+0.5$",
      "$+1.0$ (أي أن $\\phi = +45^\\circ$ والجهد يتقدم على التيار)",
      "$+2.0$"
    ],
    "correctAnswer": "$+1.0$ (meaning $\\phi = +45^\\circ$, voltage leads current)",
    "correctIndex": 2,
    "hintEn": "$\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{80 - 50}{30} = \\frac{30}{30} = +1.0$.",
    "hintAr": "$\\tan\\phi = \\frac{80 - 50}{30} = \\frac{30}{30} = +1.0$.",
    "stepByStepSolutionEn": [
      "$\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{80 - 50}{30} = \\frac{30}{30} = +1.0 \\implies \\phi = 45^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$\\tan\\phi = \\frac{80 - 50}{30} = 1 \\implies \\phi = 45^\\circ$."
    ],
    "teacherTipEn": "Positive phase angle confirms inductive character.",
    "teacherTipAr": "ظل الزاوية موجب يؤكد الخواص الحثية للدائرة."
  },
  {
    "id": "phys_ch4_db_med_44",
    "titleEn": "Current Phase Angle When XC = 2XL in Series RLC",
    "titleAr": "زاوية الطور عندما تكون المفاعلة السعوية ضعف الحثية",
    "difficulty": "medium",
    "questionEn": "For an alternating current series circuit comprising elements with parameters $R = 50\\,\\Omega$, $X_L = 50\\,\\Omega$, and $X_C = 100\\,\\Omega$, the calculated value of $\\tan\\phi$ equals:",
    "questionAr": "في دائرة تيار متردد متوالية الأجزاء تتكون من عناصر قيمها $R = 50\\,\\Omega$ و $X_L = 50\\,\\Omega$ و $X_C = 100\\,\\Omega$، فإن القيمة المحسوبة لـ $\\tan\\phi$ تساوي:",
    "optionsEn": [
      "$+1.0$",
      "$-0.5$",
      "$0.0$",
      "$-1.0$ (meaning $\\phi = -45^\\circ$, voltage lags current)"
    ],
    "optionsAr": [
      "$+1.0$",
      "$-0.5$",
      "$0.0$",
      "$-1.0$ (أي أن $\\phi = -45^\\circ$ والجهد يتأخر عن التيار)"
    ],
    "correctAnswer": "$-1.0$ (meaning $\\phi = -45^\\circ$, voltage lags current)",
    "correctIndex": 3,
    "hintEn": "$\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{50 - 100}{50} = \\frac{-50}{50} = -1.0$.",
    "hintAr": "$\\tan\\phi = \\frac{50 - 100}{50} = -1.0$.",
    "stepByStepSolutionEn": [
      "$\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{50 - 100}{50} = \\frac{-50}{50} = -1.0 \\implies \\phi = -45^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$\\tan\\phi = \\frac{50 - 100}{50} = -1 \\implies \\phi = -45^\\circ$."
    ],
    "teacherTipEn": "Negative phase angle confirms capacitive character.",
    "teacherTipAr": "ظل الزاوية سالب يؤكد الخواص السعوية للدائرة."
  },
  {
    "id": "phys_ch4_db_med_45",
    "titleEn": "Current Maximum Condition in Tuner Circuit",
    "titleAr": "شرط مرور أقصى تيار في دائرة التوليف",
    "difficulty": "medium",
    "questionEn": "A radio receiver tuning circuit receives signals from several radio stations with identical broadcast electric field strengths. The circuit will generate the MAXIMUM electric current for the station whose frequency ($f_{\\text{station}}$):",
    "questionAr": "دائرة توليف جهاز استقبال لاسلكي تلتقط إشارات من عدة محطات إذاعية متساوية في شدة المجال. يتولد في الدائرة أقصى تيار كهربي للمحطة التي يكون ترددها ($f_{\\text{station}}$):",
    "optionsEn": [
      "Equals the resonant frequency of the tuning circuit ($f_{\\text{station}} = \\frac{1}{2\\pi \\sqrt{LC}}$)",
      "Is twice the resonant frequency",
      "Is half the resonant frequency",
      "Approaches infinity"
    ],
    "optionsAr": [
      "مساوياً تماماً لتردد الرنين لدائرة التوليف ($f_{\\text{station}} = \\frac{1}{2\\pi \\sqrt{LC}}$)",
      "ضعف تردد الرنين",
      "نصف تردد الرنين",
      "يقترب من اللانهاية"
    ],
    "correctAnswer": "Equals the resonant frequency of the tuning circuit ($f_{\\text{station}} = \\frac{1}{2\\pi \\sqrt{LC}}$)",
    "correctIndex": 0,
    "hintEn": "Maximum current occurs at resonance when impedance is at minimum ($Z = R$).",
    "hintAr": "أقصى تيار يمر عند الرنين عندما تكون المعاوقة أقل ما يمكن ($Z = R$).",
    "stepByStepSolutionEn": [
      "When the incoming radio frequency matches the resonant frequency of the tuning circuit ($f_{\\text{station}} = f_0$), the circuit enters resonance ($X_L = X_C$). The impedance reaches its minimum ($Z = R$), allowing maximum current to flow for that station while rejecting all other frequencies."
    ],
    "stepByStepSolutionAr": [
      "عندما يتطابق تردد موجة المحطة مع تردد الرنين لدائرة الاستقبال ($f = f_0$)، تدخل الدائرة في حالة رنين فتتساوى المفاعلتان وتصبح المعاوقة أقل ما يمكن ($Z = R$)، فيمر تيار تلك المحطة بأقصى شدة وتُستبعد باقي المحطات."
    ],
    "teacherTipEn": "Selectivity of radio tuning relies on resonance maximum current.",
    "teacherTipAr": "دقة الاختيار في الراديو تعتمد على القمة الحادة لتيار الرنين."
  },
  {
    "id": "phys_ch4_db_med_46",
    "titleEn": "Resonant Angular Frequency Calculation",
    "titleAr": "حساب التردد الزاوي للرنين",
    "difficulty": "medium",
    "questionEn": "An LC tank circuit has an inductor $L = 10\\text{ mH} = 10^{-2}\\text{ H}$ and a capacitor $C = 1.0\\,\\mu\\text{F} = 10^{-6}\\text{ F}$. The resonant angular frequency ($\\omega_0$) of the circuit is:",
    "questionAr": "دائرة رنين LC تحتوي على ملف حث $L = 10\\text{ mH} = 10^{-2}\\text{ H}$ ومكثف سعته $C = 1.0\\,\\mu\\text{F} = 10^{-6}\\text{ F}$. فإن التردد الزاوي للرنين ($\\omega_0$) للدائرة يساوي:",
    "optionsEn": [
      "$1000\\text{ rad/s}$",
      "$10000\\text{ rad/s} = 10^4\\text{ rad/s}$",
      "$100000\\text{ rad/s} = 10^5\\text{ rad/s}$",
      "$5000\\text{ rad/s}$"
    ],
    "optionsAr": [
      "$1000\\text{ rad/s}$",
      "$10000\\text{ rad/s} = 10^4\\text{ rad/s}$",
      "$100000\\text{ rad/s} = 10^5\\text{ rad/s}$",
      "$5000\\text{ rad/s}$"
    ],
    "correctAnswer": "$10000\\text{ rad/s} = 10^4\\text{ rad/s}$",
    "correctIndex": 1,
    "hintEn": "$\\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
    "hintAr": "$\\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
    "stepByStepSolutionEn": [
      "$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{10^{-2} \\times 10^{-6}}} = \\frac{1}{\\sqrt{10^{-8}}} = \\frac{1}{10^{-4}} = 10^4\\text{ rad/s} = 10000\\text{ rad/s}$."
    ],
    "stepByStepSolutionAr": [
      "$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{10^{-8}}} = 10^4\\text{ rad/s} = 10000\\text{ rad/s}$."
    ],
    "teacherTipEn": "Angular frequency $\\omega_0$ is measured in rad/s, related to $f_0$ by $\\omega_0 = 2\\pi f_0$.",
    "teacherTipAr": "يقاس التردد الزاوي بوحدة راديان/ثانية ويرتبط بالتردد العادي بالعلاقة $\\omega = 2\\pi f$."
  },
  {
    "id": "phys_ch4_db_med_47",
    "titleEn": "Capacitive Reactance Ratio with Frequency Change",
    "titleAr": "نسبة المفاعلة السعوية عند تغير التردد",
    "difficulty": "medium",
    "questionEn": "An alternating voltage source connected across a capacitor has its frequency increased from $20\\text{ Hz}$ to $80\\text{ Hz}$. The capacitive reactance ($X_C$) of the capacitor:",
    "questionAr": "مصدر تيار متردد متصل بمكثف زاد تردده من $20\\text{ Hz}$ إلى $80\\text{ Hz}$. فإن المفاعلة السعوية للمكثف ($X_C$):",
    "optionsEn": [
      "Increases fourfold ($4X_C$)",
      "Decreases to half ($X_C / 2$)",
      "Decreases to one-fourth of its initial value ($X_C / 4$)",
      "Remains unchanged"
    ],
    "optionsAr": [
      "تزداد إلى أربعة أمثالها ($4X_C$)",
      "تقل إلى النصف ($X_C / 2$)",
      "تقل إلى ربع قيمتها الابتدائية ($X_C / 4$)",
      "تظل ثابتة"
    ],
    "correctAnswer": "Decreases to one-fourth of its initial value ($X_C / 4$)",
    "correctIndex": 2,
    "hintEn": "$X_C \\propto 1/f$. Frequency increased 4 times $\\implies X_C$ decreases 4 times.",
    "hintAr": "$X_C \\propto 1/f$. زاد التردد 4 أمثال فتقل المفاعلة السعوية للربع.",
    "stepByStepSolutionEn": [
      "Since $X_C = \\frac{1}{2\\pi f C}$, $X_C \\propto \\frac{1}{f}$. The frequency increases by a factor of $\\frac{80}{20} = 4$. Therefore, the capacitive reactance decreases to $\\frac{1}{4}$ of its original value."
    ],
    "stepByStepSolutionAr": [
      "بما أن $X_C = \\frac{1}{2\\pi f C}$، فإن التناسب عكسي مع التردد. وبما أن التردد تضاعف 4 مرات ($80/20 = 4$)، فإن المفاعلة السعوية تقل إلى الربع: $X'_C = \\frac{X_C}{4}$."
    ],
    "teacherTipEn": "Inverse proportionality: Frequency $\\times 4 \\implies X_C \\div 4$.",
    "teacherTipAr": "تناسب عكسي: التردد $\\times 4 \\implies X_C \\div 4$."
  },
  {
    "id": "phys_ch4_db_med_48",
    "titleEn": "Inductive Reactance Ratio with Frequency Change",
    "titleAr": "نسبة المفاعلة الحثية عند تغير التردد",
    "difficulty": "medium",
    "questionEn": "An AC source connected across an inductor has its frequency increased from $25\\text{ Hz}$ to $75\\text{ Hz}$. The inductive reactance ($X_L$) of the coil:",
    "questionAr": "مصدر تيار متردد متصل بملف حث زاد تردده من $25\\text{ Hz}$ إلى $75\\text{ Hz}$. فإن المفاعلة الحثية للملف ($X_L$):",
    "optionsEn": [
      "Decreases to one-third ($X_L / 3$)",
      "Increases ninefold ($9X_L$)",
      "Remains unchanged",
      "Triples to $3X_L$"
    ],
    "optionsAr": [
      "تقل إلى الثلث ($X_L / 3$)",
      "تزداد إلى تسعة أمثالها ($9X_L$)",
      "تظل ثابتة",
      "تزداد إلى ثلاثة أمثالها ($3X_L$)"
    ],
    "correctAnswer": "Triples to $3X_L$",
    "correctIndex": 3,
    "hintEn": "$X_L \\propto f$. $\\frac{75}{25} = 3 \\implies 3X_L$.",
    "hintAr": "$X_L \\propto f$. زيادة التردد 3 أمثال تزيد المفاعلة الحثية 3 أمثال.",
    "stepByStepSolutionEn": [
      "$X_L = 2\\pi f L \\propto f$. Tripling frequency from $25\\text{ Hz}$ to $75\\text{ Hz}$ triples inductive reactance to $3X_L$."
    ],
    "stepByStepSolutionAr": [
      "$X_L = 2\\pi f L \\propto f$. زيادة التردد من $25\\text{ Hz}$ إلى $75\\text{ Hz}$ (3 أمثال) تزيد المفاعلة الحثية إلى 3 أمثالها: $X'_L = 3X_L$."
    ],
    "teacherTipEn": "Direct proportionality: Frequency $\\times 3 \\implies X_L \\times 3$.",
    "teacherTipAr": "تناسب طردي مباشر: التردد $\\times 3 \\implies X_L \\times 3$."
  },
  {
    "id": "phys_ch4_db_med_49",
    "titleEn": "Series RLC Circuit with Equal Reactances at Different Voltages",
    "titleAr": "دائرة RLC جهود عناصرها متساوية",
    "difficulty": "medium",
    "questionEn": "In a series RLC circuit, $V_R = 100\\text{ V}$, $V_L = 100\\text{ V}$, and $V_C = 100\\text{ V}$. The total source voltage is:",
    "questionAr": "في دائرة RLC على التوالي، إذا كانت قراءات الفولتميترات: $V_R = 100\\text{ V}$ و $V_L = 100\\text{ V}$ و $V_C = 100\\text{ V}$. فإن فرق جهد المصدر الكلي يساوي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$300\\text{ V}$",
      "$173.2\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$300\\text{ V}$",
      "$173.2\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "Resonance condition: $V_L = V_C \\implies V = V_R = 100\\text{ V}$.",
    "hintAr": "حالة رنين: $V_L = V_C$ فيتلاشيان ويبقى جهد المصدر مساوياً لجهد المقاومة $100\\text{ V}$.",
    "stepByStepSolutionEn": [
      "$V = \\sqrt{V_R^2 + (V_L - V_C)^2} = \\sqrt{100^2 + (100 - 100)^2} = \\sqrt{100^2 + 0} = 100\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$V = \\sqrt{100^2 + (100 - 100)^2} = 100\\text{ V}$."
    ],
    "teacherTipEn": "The circuit is in perfect resonance.",
    "teacherTipAr": "الدائرة في حالة رنين تامة."
  },
  {
    "id": "phys_ch4_db_med_50",
    "titleEn": "Apparent Power vs Real Power Ratio",
    "titleAr": "النسبة بين القدرة الحقيقية والقدرة الظاهرية",
    "difficulty": "medium",
    "questionEn": "In an AC circuit where the phase angle is $\\phi = 60^\\circ$, the ratio of real power dissipated ($P_{\\text{real}}$) to apparent power supplied ($P_{\\text{apparent}}$) is:",
    "questionAr": "في دائرة تيار متردد زاوية الطور فيها $\\phi = 60^\\circ$، فإن النسبة بين القدرة الحقيقية المستهلكة والقدرة الظاهرية المعطاة للدائرة تساوي:",
    "optionsEn": [
      "$0.866$",
      "$0.5$ (since $\\cos 60^\\circ = 0.5$)",
      "$1.0$",
      "$0.25$"
    ],
    "optionsAr": [
      "$0.866$",
      "$0.5$ (لأن $\\cos 60^\\circ = 0.5$)",
      "$1.0$",
      "$0.25$"
    ],
    "correctAnswer": "$0.5$ (since $\\cos 60^\\circ = 0.5$)",
    "correctIndex": 1,
    "hintEn": "$\\frac{P_{\\text{real}}}{P_{\\text{apparent}}} = \\cos\\phi$.",
    "hintAr": "النسبة بين القدرة الحقيقية والظاهرية هي عامل القدرة $\\cos\\phi$.",
    "stepByStepSolutionEn": [
      "Real power is $P_{\\text{real}} = V I \\cos\\phi$. Apparent power is $P_{\\text{apparent}} = V I$. The ratio is $\\frac{P_{\\text{real}}}{P_{\\text{apparent}}} = \\cos\\phi = \\cos 60^\\circ = 0.5$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الحقيقية: $P = V I \\cos\\phi$. والقدرة الظاهرية: $S = V I$. النسبة بينهما هي عامل القدرة: $\\cos 60^\\circ = 0.5$."
    ],
    "teacherTipEn": "Power factor defines the fraction of apparent power that does useful work.",
    "teacherTipAr": "عامل القدرة يحدد النسبة المئوية للقدرة المفيدة المستهلكة فعلياً."
  },
  {
    "id": "phys_ch4_db_med_51",
    "titleEn": "Condition for Maximum Power Transfer in AC Circuit",
    "titleAr": "شرط استهلاك أقصى قدرة كهربية في دائرة RLC",
    "difficulty": "medium",
    "questionEn": "For a given AC source of fixed voltage, a series RLC circuit consumes the MAXIMUM possible real electrical power when:",
    "questionAr": "لمصدر تيار متردد ذي جهد ثابت، تستهلك دائرة RLC على التوالي أقصى قدرة كهربية حقيقية ممكنة عندما تكون:",
    "optionsEn": [
      "Operating at zero frequency (DC)",
      "Operating at infinite frequency",
      "In electrical resonance ($X_L = X_C$, so impedance is minimum and current is maximum)",
      "Ohmic resistance is made as large as possible"
    ],
    "optionsAr": [
      "تعمل عند تردد منعدم",
      "تعمل عند تردد لا نهائي",
      "في حالة رنين كهربي ($X_L = X_C$ فتكون المعاوقة أقل ما يمكن والتيار أكبر ما يمكن)",
      "المقاومة الأومية أكبر ما يمكن"
    ],
    "correctAnswer": "In electrical resonance ($X_L = X_C$, so impedance is minimum and current is maximum)",
    "correctIndex": 2,
    "hintEn": "At resonance: $I = V/R$ (maximum), and $\\cos\\phi = 1$. Power $P = I^2 R = V^2 / R$ is maximum.",
    "hintAr": "عند الرنين يكون التيار أقصى ما يمكن وعامل القدرة 1، فتكون القدرة المستهلكة في المقاومة أقصى ما يمكن.",
    "stepByStepSolutionEn": [
      "Real power is $P = I^2 R$. Current is $I = \\frac{V}{Z}$. Maximum current occurs at resonance where $Z = R$ (minimum). Hence, $P_{\\max} = \\left(\\frac{V}{R}\\right)^2 R = \\frac{V^2}{R}$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الحقيقية المستهلكة هي $P = I^2 R$. ويكون التيار أقصى ما يمكن عند الرنين لانخفاض المعاوقة إلى $Z = R$. فتكون القدرة المستهلكة أقصى ما يمكن: $P = \\frac{V^2}{R}$."
    ],
    "teacherTipEn": "Resonance maximizes both current and real power consumption.",
    "teacherTipAr": "الرنين يعطي أقصى شدة تيار وأقصى استهلاك للقدرة الحقيقية."
  },
  {
    "id": "phys_ch4_db_med_52",
    "titleEn": "Tuning Range of Radio Receiver with Variable Capacitor",
    "titleAr": "مدى ترددات الاستقبال لمكثف متغير السعة",
    "difficulty": "medium",
    "questionEn": "A radio receiver circuit has a fixed inductor $L$. If its tuning capacitor can be varied continuously from $C_{\\min} = 10\\text{ pF}$ to $C_{\\max} = 160\\text{ pF}$, the ratio of the maximum received frequency to the minimum received frequency ($\\frac{f_{\\max}}{f_{\\min}}$) is:",
    "questionAr": "دائرة استقبال لاسلكي تحتوي على ملف حث ثابت $L$. إذا كانت سعة مكثفها المتغير يمكن ضبطها بين $C_{\\min} = 10\\text{ pF}$ و $C_{\\max} = 160\\text{ pF}$، فإن النسبة بين أقصى تردد تستقبله وأقل تردد ($\\frac{f_{\\max}}{f_{\\min}}$) تساوي:",
    "optionsEn": [
      "$16 : 1$",
      "$2 : 1$",
      "$8 : 1$",
      "$4 : 1$"
    ],
    "optionsAr": [
      "$16 : 1$",
      "$2 : 1$",
      "$8 : 1$",
      "$4 : 1$"
    ],
    "correctAnswer": "$4 : 1$",
    "correctIndex": 3,
    "hintEn": "$\\frac{f_{\\max}}{f_{\\min}} = \\sqrt{\\frac{C_{\\max}}{C_{\\min}}} = \\sqrt{\\frac{160}{10}} = \\sqrt{16} = 4$.",
    "hintAr": "$\\frac{f_{\\max}}{f_{\\min}} = \\sqrt{\\frac{C_{\\max}}{C_{\\min}}} = \\sqrt{16} = 4$.",
    "stepByStepSolutionEn": [
      "Since $f_0 \\propto \\frac{1}{\\sqrt{C}}$, the frequency ratio is $\\frac{f_{\\max}}{f_{\\min}} = \\sqrt{\\frac{C_{\\max}}{C_{\\min}}} = \\sqrt{\\frac{160\\text{ pF}}{10\\text{ pF}}} = \\sqrt{16} = 4$. Thus, the tuning range is $4:1$."
    ],
    "stepByStepSolutionAr": [
      "بما أن التردد يتناسب عكسياً مع الجذر التربيعي للسعة، فإن: $\\frac{f_{\\max}}{f_{\\min}} = \\sqrt{\\frac{C_{\\max}}{C_{\\min}}} = \\sqrt{\\frac{160}{10}} = \\sqrt{16} = 4$. أي أن مدى الترددات هو $4 : 1$."
    ],
    "teacherTipEn": "Capacitance ratio of 16 yields a frequency ratio of 4.",
    "teacherTipAr": "نسبة سعة مقدارها 16 تعطي نسبة تردد مقدارها 4."
  },
  {
    "id": "phys_ch4_db_med_53",
    "titleEn": "Inductor Cut in Half in Series RLC Resonant Circuit",
    "titleAr": "قطع نصف لفات ملف حث في دائرة رنين RLC",
    "difficulty": "medium",
    "questionEn": "A series RLC circuit is in electrical resonance at frequency $f_0$. If half the turns of the inductor coil are cut off and the remaining half is reconnected in the circuit without changing $C$, the new resonant frequency ($f'_0$) becomes (since $L \\propto N^2/\\ell$, cutting half reduces $L$ to $L/2$):",
    "questionAr": "دائرة رنين RLC على التوالي في حالة رنين عند تردد $f_0$. إذا قُطع نصف لفات ملف الحث وأُعيد توصيل النصف المتبقي في نفس الدائرة دون تغيير المكثف، فإن تردد الرنين الجديد ($f'_0$) يصبح (قطع نصف الملف بانتظام يقلل $L$ إلى $L/2$):",
    "optionsEn": [
      "$f'_0 = f_0 \\sqrt{2}$",
      "$f'_0 = 2 f_0$",
      "$f'_0 = f_0 / 2$",
      "$f'_0 = f_0 / \\sqrt{2}$"
    ],
    "optionsAr": [
      "$f'_0 = f_0 \\sqrt{2}$",
      "$f'_0 = 2 f_0$",
      "$f'_0 = f_0 / 2$",
      "$f'_0 = f_0 / \\sqrt{2}$"
    ],
    "correctAnswer": "$f'_0 = f_0 \\sqrt{2}$",
    "correctIndex": 0,
    "hintEn": "$L' = L/2$. $f'_0 = \\frac{1}{2\\pi \\sqrt{(L/2)C}} = \\sqrt{2} \\left(\\frac{1}{2\\pi\\sqrt{LC}}\\right) = f_0 \\sqrt{2}$.",
    "hintAr": "$L' = L/2$. $f'_0 = \\sqrt{2} f_0$.",
    "stepByStepSolutionEn": [
      "Cutting a solenoid in half uniformly reduces both length and turns by half: $L' = \\frac{\\mu (N/2)^2 A}{\\ell/2} = \\frac{1}{2} L$. The new resonant frequency is $f'_0 = \\frac{1}{2\\pi \\sqrt{(L/2)C}} = \\sqrt{2} \\left(\\frac{1}{2\\pi \\sqrt{LC}}\\right) = f_0 \\sqrt{2}$."
    ],
    "stepByStepSolutionAr": [
      "عند قطع نصف لفات الملف بانتظام يقل الطول للنصف واللفات للنصف فيصبح الحث $L' = L/2$. وتردد الرنين الجديد: $f'_0 = \\frac{1}{2\\pi \\sqrt{\\frac{L}{2} C}} = \\sqrt{2} f_0$."
    ],
    "teacherTipEn": "Reducing L by half increases resonant frequency by $\\sqrt{2}$.",
    "teacherTipAr": "إنقاص معامل الحث للنصف يرفع تردد الرنين بمقدار $\\sqrt{2}$."
  },
  {
    "id": "phys_ch4_db_med_54",
    "titleEn": "Hot-Wire Ammeter Connected Across Pure Capacitor in AC",
    "titleAr": "أميتر حراري متصل بمكثف ومصدر متردد عند تغير التردد",
    "difficulty": "medium",
    "questionEn": "A hot-wire ammeter is connected in series with a capacitor and an AC generator of constant voltage. If the frequency of the generator is doubled, the reading of the hot-wire ammeter:",
    "questionAr": "أميتر حراري متصل على التوالي مع مكثف ومصدر متردد ثابت الجهد. إذا تضاعف تردد المصدر، فإن قراءة الأميتر الحراري:",
    "optionsEn": [
      "Quadruples to $4I$",
      "Doubles to $2I$",
      "Halves to $I/2$",
      "Remains constant"
    ],
    "optionsAr": [
      "تزداد إلى أربعة أمثالها ($4I$)",
      "تتضاعف إلى مثليها ($2I$)",
      "تقل إلى النصف ($I/2$)",
      "تظل ثابتة"
    ],
    "correctAnswer": "Doubles to $2I$",
    "correctIndex": 1,
    "hintEn": "With constant voltage: $X_C \\propto 1/f \\implies I = V/X_C \\propto f$.",
    "hintAr": "بثبوت الجهد: $X_C \\propto 1/f \\implies I = \\frac{V}{X_C} \\propto f$.",
    "stepByStepSolutionEn": [
      "Because the AC source voltage is constant, current through the capacitor is $I = \\frac{V}{X_C} = 2\\pi f C V \\propto f$. Doubling frequency from $f$ to $2f$ doubles the effective current measured by the ammeter ($I' = 2I$)."
    ],
    "stepByStepSolutionAr": [
      "بما أن جهد المصدر ثابت، فإن شدة التيار في المكثف هي $I = \\frac{V}{X_C} = 2\\pi f C V \\propto f$. وتتضاعف شدة التيار الفعالة التي يقيسها الأميتر الحراري إلى مثليها ($2I$)."
    ],
    "teacherTipEn": "Notice: The current doubles ($2I$), but the deflection angle $\\theta$ quadruples ($4\\theta$)!",
    "teacherTipAr": "انتبه: شدة التيار تتضاعف للضعف ($2I$)، بينما زاوية انحراف المؤشر تتضاعف لأربعة أمثالها ($4\\theta$)!"
  },
  {
    "id": "phys_ch4_db_med_55",
    "titleEn": "Deflection Angle in Hot-Wire Ammeter for Previous Problem",
    "titleAr": "زاوية انحراف مؤشر الأميتر الحراري في المسألة السابقة",
    "difficulty": "medium",
    "questionEn": "In the previous question (where current doubled from $I$ to $2I$), the angular deflection of the hot-wire ammeter pointer ($\\theta$):",
    "questionAr": "في السؤال السابق (حيث تضاعفت شدة التيار من $I$ إلى $2I$)، فإن زاوية انحراف مؤشر الأميتر الحراري:",
    "optionsEn": [
      "Doubles to $2\\theta$",
      "Remains constant",
      "Quadruples to $4\\theta$",
      "Increases eightfold"
    ],
    "optionsAr": [
      "تتضاعف إلى مثليها ($2\\theta$)",
      "تظل ثابتة",
      "تزداد إلى أربعة أمثالها ($4\\theta$)",
      "تزداد إلى 8 أمثالها"
    ],
    "correctAnswer": "Quadruples to $4\\theta$",
    "correctIndex": 2,
    "hintEn": "$\\theta \\propto I^2$. If $I' = 2I$, then $\\theta' = (2)^2 \\theta = 4\\theta$.",
    "hintAr": "زاوية الانحراف تتناسب مع مربع شدة التيار $\\theta \\propto I^2$. ومضاعفة التيار تعطي 4 أمثال زاوية الانحراف.",
    "stepByStepSolutionEn": [
      "Deflection of a hot-wire ammeter is proportional to the square of current: $\\theta \\propto I^2$. When the current doubles, $\\theta' = (2I)^2 / I^2 \\times \\theta = 4\\theta$."
    ],
    "stepByStepSolutionAr": [
      "تتناسب زاوية انحراف مؤشر الأميتر الحراري طردياً مع مربع شدة التيار: $\\theta \\propto I^2$. وبمضاعفة شدة التيار تزداد زاوية الانحراف إلى أربعة أمثالها ($4\\theta$)."
    ],
    "teacherTipEn": "Current doubles $\\implies$ Deflection quadruples.",
    "teacherTipAr": "التيار يتضاعف $\\implies$ زاوية الانحراف تزداد لأربعة أمثالها."
  },
  {
    "id": "phys_ch4_db_med_56",
    "titleEn": "Phase Angle when R = 0 in Series LC Circuit",
    "titleAr": "زاوية الطور عند انعدام المقاومة الأومية في دائرة LC",
    "difficulty": "medium",
    "questionEn": "In a series LC circuit with ZERO ohmic resistance ($R = 0$) where $X_L > X_C$, the phase angle ($\\phi$) by which total voltage leads current is:",
    "questionAr": "في دائرة LC على التوالي منعدمة المقاومة الأومية ($R = 0$) وكانت $X_L > X_C$، فإن زاوية الطور ($\\phi$) التي يتقدم بها الجهد الكلي على التيار تساوي:",
    "optionsEn": [
      "$0^\\circ$",
      "$+45^\\circ$",
      "$+180^\\circ$",
      "$+90^\\circ$ (strictly perpendicular)"
    ],
    "optionsAr": [
      "$0^\\circ$",
      "$+45^\\circ$",
      "$+180^\\circ$",
      "$+90^\\circ$ (تعامد تام)"
    ],
    "correctAnswer": "$+90^\\circ$ (strictly perpendicular)",
    "correctIndex": 3,
    "hintEn": "$\\tan\\phi = \\frac{X_L - X_C}{0} \\to +\\infty \\implies \\phi = 90^\\circ$.",
    "hintAr": "$\\tan\\phi = \\frac{X_L - X_C}{0} \\to \\infty \\implies \\phi = 90^\\circ$.",
    "stepByStepSolutionEn": [
      "When $R = 0$ and $X_L > X_C$, the net reactance is purely inductive. In a pure inductive circuit, voltage leads current by exactly $90^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "عند انعدام المقاومة الأومية ($R = 0$) وغلبة المفاعلة الحثية ($X_L > X_C$)، تصبح الدائرة حثية نقية تماماً، ويتقدم الجهد الكلي على التيار بزاوية $90^\\circ$ بالضبط."
    ],
    "teacherTipEn": "Without resistance, phase angle can only be $+90^\\circ$, $-90^\\circ$, or indeterminate ($0/0$ at resonance).",
    "teacherTipAr": "بدون مقاومة تكون زاوية الطور إما $+90^\\circ$ أو $-90^\\circ$."
  },
  {
    "id": "phys_ch4_db_med_57",
    "titleEn": "Phase Angle when R = 0 and XC > XL in Series LC Circuit",
    "titleAr": "زاوية الطور عند انعدام المقاومة وغلبة المفاعلة السعوية",
    "difficulty": "medium",
    "questionEn": "In a series LC circuit with zero resistance ($R = 0$) where $X_C > X_L$, the phase angle ($\\phi$) is:",
    "questionAr": "في دائرة LC على التوالي منعدمة المقاومة ($R = 0$) وكانت $X_C > X_L$، فإن زاوية الطور ($\\phi$) تساوي:",
    "optionsEn": [
      "$-90^\\circ$ (total voltage lags current by exactly $90^\\circ$)",
      "$+90^\\circ$",
      "$0^\\circ$",
      "$-45^\\circ$"
    ],
    "optionsAr": [
      "$-90^\\circ$ (يتأخر الجهد الكلي عن التيار بزاوية $90^\\circ$ تماماً)",
      "$+90^\\circ$",
      "$0^\\circ$",
      "$-45^\\circ$"
    ],
    "correctAnswer": "$-90^\\circ$ (total voltage lags current by exactly $90^\\circ$)",
    "correctIndex": 0,
    "hintEn": "$\\tan\\phi = \\frac{X_L - X_C}{0} \\to -\\infty \\implies \\phi = -90^\\circ$.",
    "hintAr": "$\\tan\\phi \\to -\\infty \\implies \\phi = -90^\\circ$.",
    "stepByStepSolutionEn": [
      "Net reactance is purely capacitive, so the voltage lags current by exactly $90^\\circ$ ($\\phi = -90^\\circ$)."
    ],
    "stepByStepSolutionAr": [
      "المحصلة التفاعلية سعوية نقية بدون مقاومة أومية، فيتأخر الجهد الكلي عن التيار بزاوية $90^\\circ$ تماماً ($\\phi = -90^\\circ$)."
    ],
    "teacherTipEn": "Pure capacitive reactance: $\\phi = -90^\\circ$.",
    "teacherTipAr": "المفاعلة السعوية النقية تعطي فرق طور $-90^\\circ$."
  },
  {
    "id": "phys_ch4_db_med_58",
    "titleEn": "Condition for Zero Power Loss in AC Transmission",
    "titleAr": "شرط انعدام الفقد الحراري في دوائر التيار المتردد",
    "difficulty": "medium",
    "questionEn": "An alternating current circuit dissipates ZERO average thermal power ($P = 0$) if and only if:",
    "questionAr": "تكون القدرة الحرارية المتوسطة المستهلكة في دائرة تيار متردد مساوية للصفر تماماً ($P = 0$) إذا وفقط إذا:",
    "optionsEn": [
      "The circuit is in resonance",
      "The circuit contains NO ohmic resistance ($R = 0$), consisting only of pure inductors and/or capacitors ($\\phi = \\pm 90^\\circ$)",
      "The frequency of the source is $50\\text{ Hz}$",
      "The circuit current is at its maximum"
    ],
    "optionsAr": [
      "كانت الدائرة في حالة رنين",
      "كانت الدائرة خالية تماماً من أي مقاومة أومية ($R = 0$) وتحتوي على ملفات حث ومكثفات نقية فقط ($\\phi = \\pm 90^\\circ$)",
      "كان تردد المصدر $50\\text{ Hz}$",
      "كان تيار الدائرة أقصى ما يمكن"
    ],
    "correctAnswer": "The circuit contains NO ohmic resistance ($R = 0$), consisting only of pure inductors and/or capacitors ($\\phi = \\pm 90^\\circ$)",
    "correctIndex": 1,
    "hintEn": "Real power is $P = I^2 R = V I \\cos\\phi$. If $R = 0$, $\\cos\\phi = 0 \\implies P = 0$.",
    "hintAr": "القدرة الحرارية $P = I^2 R$. فإذا كانت $R = 0$ فإن القدرة المستهلكة تنعدم تماماً.",
    "stepByStepSolutionEn": [
      "Power is given by $P = V_{\\text{eff}} I_{\\text{eff}} \\cos\\phi = I_{\\text{eff}}^2 R$. For $P = 0$, either $R = 0$ or $\\cos\\phi = 0$ ($\\phi = \\pm 90^\\circ$). This requires that the circuit contains only pure reactive components ($L$ and $C$) without any resistive elements."
    ],
    "stepByStepSolutionAr": [
      "تُعطى القدرة المستهلكة بالعلاقة $P = I^2 R = V I \\cos\\phi$. ولكي تنعدم القدرة الحرارية تماماً يجب أن تنعدم المقاومة الأومية ($R = 0$) ويكون فرق الطور $90^\\circ$، مما يستلزم أن تتكون الدائرة من ملفات حث نقية ومكثفات فقط."
    ],
    "teacherTipEn": "Only resistance consumes energy; pure L and C conserve energy completely.",
    "teacherTipAr": "المقاومة الأومية فقط هي التي تستهلك الطاقة كحرارة."
  },
  {
    "id": "phys_ch4_db_med_59",
    "titleEn": "Quality Factor Dependence on Resistance",
    "titleAr": "علاقة معامل الجودة بالمقاومة الأومية لدائرة الرنين",
    "difficulty": "medium",
    "questionEn": "If the ohmic resistance of a series RLC resonant circuit is cut in half ($R/2$) while $L$ and $C$ are unchanged, the Quality Factor ($Q$) of the circuit:",
    "questionAr": "إذا قَلّت المقاومة الأومية لدائرة رنين RLC على التوالي إلى النصف ($R/2$) مع ثبوت $L$ و $C$، فإن معامل الجودة ($Q$) للدائرة:",
    "optionsEn": [
      "Halves to $Q/2$",
      "Quadruples to $4Q$",
      "Doubles to $2Q$ (resonance curve becomes twice as sharp and selective)",
      "Remains completely unchanged"
    ],
    "optionsAr": [
      "يقل إلى النصف ($Q/2$)",
      "يزداد إلى 4 أمثاله ($4Q$)",
      "يتضاعف إلى مثليه ($2Q$) (ويصبح منحنى الرنين أكثر حدة ودقة بمقدار الضعف)",
      "يظل ثابتاً دون تغيير"
    ],
    "correctAnswer": "Doubles to $2Q$ (resonance curve becomes twice as sharp and selective)",
    "correctIndex": 2,
    "hintEn": "$Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}} \\propto \\frac{1}{R}$. Halving $R$ doubles $Q$.",
    "hintAr": "$Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$. التناسب عكسي مع $R$، فنقص المقاومة للنصف يضاعف معامل الجودة.",
    "stepByStepSolutionEn": [
      "From $Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$, quality factor is inversely proportional to resistance: $Q \\propto \\frac{1}{R}$. If resistance is halved ($R' = R/2$), the quality factor doubles: $Q' = 2Q$."
    ],
    "stepByStepSolutionAr": [
      "من قانون معامل الجودة $Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$، يتناسب $Q$ عكسياً مع المقاومة الأومية. فعند تقليل المقاومة إلى النصف يتضاعف معامل الجودة إلى مثليه ($2Q$) وتزداد حدة الرنين ودقة الفصل الإذاعي."
    ],
    "teacherTipEn": "Smaller R $\\implies$ Higher Q $\\implies$ Sharper resonance peak.",
    "teacherTipAr": "مقاومة أصغر $\\implies$ معامل جودة أعلى $\\implies$ قمة رنين أكثر حدة."
  }
],
  hots: [
  {
    "id": "phys_ch4_db_hots_01",
    "titleEn": "Pointer Deflection Comparison on Hot-Wire Ammeter",
    "titleAr": "مقارنة انحراف مؤشر الأميتر الحراري عند زيادة التيار",
    "difficulty": "hots",
    "questionEn": "In a hot-wire ammeter, when a direct current of magnitude $I$ passes through its wire, the pointer deflects by an angle $\\theta_1$. If the current is increased to $3I$, the new deflection angle $\\theta_2$ becomes:",
    "questionAr": "في أميتر حراري، عند مرور تيار مستمر شدته $I$ ينحرف المؤشر بزاوية $\\theta_1$. فإذا زادت شدة التيار المار إلى $3I$، فإن زاوية انحراف المؤشر الجديدة $\\theta_2$ تصبح:",
    "optionsEn": [
      "$9\\,\\theta_1$",
      "$3\\,\\theta_1$",
      "$6\\,\\theta_1$",
      "$\\sqrt{3}\\,\\theta_1$"
    ],
    "optionsAr": [
      "$9\\,\\theta_1$",
      "$3\\,\\theta_1$",
      "$6\\,\\theta_1$",
      "$\\sqrt{3}\\,\\theta_1$"
    ],
    "correctAnswer": "$9\\,\\theta_1$",
    "correctIndex": 0,
    "hintEn": "Thermal power dissipated is proportional to $I^2$, so pointer deflection $\\theta \\propto I^2$.",
    "hintAr": "كمية الحرارة المتولدة تتناسب طردياً مع مربع شدة التيار، لذا زاوية الانحراف $\\theta \\propto I^2$.",
    "stepByStepSolutionEn": [
      "The heat energy generated in the platinum-iridium wire per second is $P = I^2 R$, which expands the wire proportionally. Thus, deflection $\\theta \\propto I^2$. When current becomes $3I$, $\\theta_2 \\propto (3I)^2 = 9 I^2 = 9\\,\\theta_1$."
    ],
    "stepByStepSolutionAr": [
      "الطاقة الحرارية المتولدة في سلك البلاتين-إيريديوم في الثانية الواحدة $P = I^2 R$، فيتمدد السلك بمقدار يتناسب مع مربع التيار $\\theta \\propto I^2$. عند زيادة التيار إلى $3I$، تصبح زاوية الانحراف $\\theta_2 \\propto (3I)^2 = 9 I^2 = 9\\,\\theta_1$."
    ],
    "teacherTipEn": "Hot-wire ammeter scale is non-uniform because $\\theta \\propto I^2$.",
    "teacherTipAr": "تدريج الأميتر الحراري غير منتظم لأن زاوية الانحراف تتناسب طردياً مع مربع شدة التيار."
  },
  {
    "id": "phys_ch4_db_hots_02",
    "titleEn": "Displacement Intervals on Hot-Wire Ammeter Scale",
    "titleAr": "المسافات بين أقسام تدريج الأميتر الحراري",
    "difficulty": "hots",
    "questionEn": "A hot-wire ammeter has its pointer at zero. When current increases from $0$ to $I$, the pointer moves a distance $d_1$. When the current increases further from $I$ to $2I$, the additional displacement $d_2$ moved by the pointer is:",
    "questionAr": "أميتر حراري مؤشره عند الصفر. عندما يمر به تيار شدته $I$ يتحرك مسافة $d_1$. وعند زيادة شدة التيار من $I$ إلى $2I$، فإن المسافة الإضافية $d_2$ التي يتحركها المؤشر تساوي:",
    "optionsEn": [
      "$2\\,d_1$",
      "$3\\,d_1$",
      "$4\\,d_1$",
      "$d_1$"
    ],
    "optionsAr": [
      "$2\\,d_1$",
      "$3\\,d_1$",
      "$4\\,d_1$",
      "$d_1$"
    ],
    "correctAnswer": "$3\\,d_1$",
    "correctIndex": 1,
    "hintEn": "Total displacement for $2I$ is $4 d_1$. Additional distance from $I$ to $2I$ is $4 d_1 - d_1$.",
    "hintAr": "الانحراف الكلي عند $2I$ هو $4 d_1$. والمسافة الإضافية بين $I$ و $2I$ هي $4 d_1 - d_1$.",
    "stepByStepSolutionEn": [
      "Total deflection is proportional to $I^2$: for current $I$, $x_1 = k I^2 = d_1$. For current $2I$, total deflection is $x_2 = k (2I)^2 = 4 k I^2 = 4 d_1$. The incremental distance moved is $d_2 = x_2 - x_1 = 4 d_1 - d_1 = 3 d_1$."
    ],
    "stepByStepSolutionAr": [
      "الانحراف الكلي يتناسب مع مربع التيار: عند تيار $I$ يكون $x_1 = k I^2 = d_1$. وعند تيار $2I$ يكون الانحراف الكلي $x_2 = k (2I)^2 = 4 d_1$. المسافة الإضافية المحصورة بين قسمي $I$ و $2I$ هي $d_2 = 4 d_1 - d_1 = 3 d_1$."
    ],
    "teacherTipEn": "Consecutive intervals between equal current increments follow odd multiples: $1d, 3d, 5d, 7d$.",
    "teacherTipAr": "المسافات بين أقسام تدريج الأميتر الحراري تتناسب مع الأعداد الفردية: $1d, 3d, 5d, 7d$."
  },
  {
    "id": "phys_ch4_db_hots_03",
    "titleEn": "Inductor Coil Connected to DC vs AC of Equal Voltage",
    "titleAr": "ملف حث متصل بمصدر مستمر ثم بمصدر متردد متساويين في الجهد",
    "difficulty": "hots",
    "questionEn": "A coil has self-inductance $L$ and internal resistance $r$. When connected to a DC source of voltage $V$, it draws a current $I_1$. When connected to an AC source of the SAME rms voltage $V$, it draws a current $I_2$. The correct relationship between the two currents is:",
    "questionAr": "ملف له معامل حث ذاتي $L$ ومقاومة أومية $r$. عند توصيله بمصدر تيار مستمر جهده $V$ مر به تيار $I_1$. وعند توصيله بمصدر تيار متردد له نفس القيمة الفعالة لفرق الجهد $V$، مر به تيار $I_2$. العلاقة الصحيحة بين شدتي التيارين هي:",
    "optionsEn": [
      "$I_1 < I_2$",
      "$I_1 = I_2$",
      "$I_1 > I_2$",
      "$I_1 = 0 \\text{ and } I_2 > 0$"
    ],
    "optionsAr": [
      "$I_1 < I_2$",
      "$I_1 = I_2$",
      "$I_1 > I_2$",
      "$I_1 = 0 \\text{ بينما } I_2 > 0$"
    ],
    "correctAnswer": "$I_1 > I_2$",
    "correctIndex": 2,
    "hintEn": "DC circuit sees only $r$. AC circuit sees impedance $Z = \\sqrt{r^2 + X_L^2} > r$.",
    "hintAr": "في التيار المستمر يلاقي التيار مقاومة $r$ فقط، بينما في المتردد يلاقي معاوقة $Z = \\sqrt{r^2 + X_L^2} > r$.",
    "stepByStepSolutionEn": [
      "For DC, frequency $f = 0 \\implies X_L = 0$, so the current is limited only by resistance: $I_1 = \\frac{V}{r}$. For AC, the coil offers impedance $Z = \\sqrt{r^2 + X_L^2}$. Since $Z > r$, the AC current is $I_2 = \\frac{V}{Z} < \\frac{V}{r} = I_1$."
    ],
    "stepByStepSolutionAr": [
      "في حالة التيار المستمر $f = 0 \\implies X_L = 0$ فتكون المعارضة مقتصرة على المقاومة الأومية $I_1 = \\frac{V}{r}$. أما في التيار المتردد فيلاقي التيار معاوقة $Z = \\sqrt{r^2 + X_L^2}$. وبما أن $Z > r$ فإن $I_2 = \\frac{V}{Z} < I_1$."
    ],
    "teacherTipEn": "DC encounters only ohmic resistance $r$; AC encounters impedance $Z = \\sqrt{r^2 + X_L^2}$.",
    "teacherTipAr": "التيار المستمر يواجه مقاومة أومية فقط، بينما التيار المتردد يواجه معاوقة كلية أكبر."
  },
  {
    "id": "phys_ch4_db_hots_04",
    "titleEn": "Finding Inductive Reactance from DC and AC Current Measurements",
    "titleAr": "تعيين المفاعلة الحثية من قياسات التيار المستمر والمتردد",
    "difficulty": "hots",
    "questionEn": "A coil connected to a $12\\text{ V}$ DC source draws a current of $2\\text{ A}$. When connected to a $13\\text{ V}$ AC source of frequency $50\\text{ Hz}$, the current is $1\\text{ A}$. The inductive reactance ($X_L$) of the coil is:",
    "questionAr": "ملف حث عند توصيله بمصدر مستمر $12\\text{ V}$ مر به تيار $2\\text{ A}$، وعند توصيله بمصدر متردد $13\\text{ V}$ وتردده $50\\text{ Hz}$ مر به تيار $1\\text{ A}$. فإن المفاعلة الحثية للملف تساوي:",
    "optionsEn": [
      "$6\\,\\Omega$",
      "$13\\,\\Omega$",
      "$7\\,\\Omega$",
      "$\\sqrt{133} \\approx 11.53\\,\\Omega$"
    ],
    "optionsAr": [
      "$6\\,\\Omega$",
      "$13\\,\\Omega$",
      "$7\\,\\Omega$",
      "$\\sqrt{133} \\approx 11.53\\,\\Omega$"
    ],
    "correctAnswer": "$\\sqrt{133} \\approx 11.53\\,\\Omega$",
    "correctIndex": 3,
    "hintEn": "Find $r = V_{DC}/I_{DC}$, then $Z = V_{AC}/I_{AC}$, then $X_L = \\sqrt{Z^2 - r^2}$.",
    "hintAr": "احسب المقاومة $r = V_{DC}/I_{DC}$ ثم المعاوقة $Z = V_{AC}/I_{AC}$ ثم $X_L = \\sqrt{Z^2 - r^2}$.",
    "stepByStepSolutionEn": [
      "From the DC test: $r = \\frac{V_{DC}}{I_{DC}} = \\frac{12}{2} = 6\\,\\Omega$. From the AC test: $Z = \\frac{V_{AC}}{I_{AC}} = \\frac{13}{1} = 13\\,\\Omega$. Since $Z = \\sqrt{r^2 + X_L^2}$, we have $X_L = \\sqrt{Z^2 - r^2} = \\sqrt{13^2 - 6^2} = \\sqrt{169 - 36} = \\sqrt{133} \\approx 11.53\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "من تجربة التيار المستمر: $r = \\frac{12}{2} = 6\\,\\Omega$. ومن تجربة التيار المتردد: المعاوقة $Z = \\frac{13}{1} = 13\\,\\Omega$. وبما أن $Z = \\sqrt{r^2 + X_L^2}$ فإن $X_L = \\sqrt{13^2 - 6^2} = \\sqrt{169 - 36} = \\sqrt{133} \\approx 11.53\\,\\Omega$."
    ],
    "teacherTipEn": "Classic two-step problem: DC gives $r$; AC gives total impedance $Z$.",
    "teacherTipAr": "مسألة كلاسيكية: المصدر المستمر يحدد المقاومة $r$، والمصدر المتردد يحدد المعاوقة $Z$."
  },
  {
    "id": "phys_ch4_db_hots_05",
    "titleEn": "Bulb Brightness in Series with Coil upon Inserting Soft Iron Core",
    "titleAr": "إضاءة مصباح متصل توالياً مع ملف حث عند إدخال قلب حديد مطاوع",
    "difficulty": "hots",
    "questionEn": "An electric lamp is connected in series with an inductor coil and an AC source. If a soft iron core is slowly inserted inside the coil, the brightness of the lamp:",
    "questionAr": "مصباح كهربي متصل على التوالي مع ملف حث ومصدر تيار متردد. إذا أُدخل ساق من الحديد المطاوع داخل الملف تدريجياً، فإن إضاءة المصباح:",
    "optionsEn": [
      "Decreases",
      "Increases",
      "Remains completely unchanged",
      "Flashes momentarily then stays the same"
    ],
    "optionsAr": [
      "تقل",
      "تزداد",
      "تظل ثابتة تماماً دون تغيير",
      "تومض لحظياً ثم تعود لقيمتها الأصلية"
    ],
    "correctAnswer": "Decreases",
    "correctIndex": 0,
    "hintEn": "Iron increases permeability $\\mu \\implies L$ increases $\\implies X_L$ increases $\\implies Z$ increases $\\implies I$ decreases.",
    "hintAr": "الحديد يزيد النفاذية $\\mu \\implies L$ تزداد $\\implies X_L$ تزداد $\\implies Z$ تزداد $\\implies$ التيار والإضاءة يقلان.",
    "stepByStepSolutionEn": [
      "Inserting a soft iron core increases magnetic permeability ($\\mu_{iron} \\gg \\mu_{air}$). Because $L = \\frac{\\mu N^2 A}{\\ell}$, self-inductance $L$ increases, causing $X_L = 2\\pi f L$ to increase. The circuit impedance $Z = \\sqrt{R^2 + X_L^2}$ increases, reducing circuit current $I$. Since lamp brightness depends on $P = I^2 R_{lamp}$, brightness decreases."
    ],
    "stepByStepSolutionAr": [
      "إدخال قلب الحديد المطاوع يزيد النفاذية المغناطيسية ($\\mu_{iron} \\gg \\mu_{air}$)، فيزداد معامل الحث الذاتي $L = \\frac{\\mu N^2 A}{\\ell}$، وتزداد المفاعلة الحثية $X_L = 2\\pi f L$. فتزداد المعاوقة الكلية $Z = \\sqrt{R^2 + X_L^2}$ ويقل تيار الدائرة $I$، وبالتالي تقل إضاءة المصباح ($P = I^2 R$)."
    ],
    "teacherTipEn": "Iron core increases $L$ and $X_L$, increasing impedance and dimming the lamp.",
    "teacherTipAr": "قلب الحديد يزيد المعامل $L$ والمفاعلة $X_L$ فتكبر المعاوقة وتقل إضاءة المصباح."
  },
  {
    "id": "phys_ch4_db_hots_06",
    "titleEn": "Bulb Brightness in Series with Coil Connected to DC upon Inserting Iron Core",
    "titleAr": "إضاءة مصباح مع ملف متصل بمصدر مستمر عند إدخال ساق حديد",
    "difficulty": "hots",
    "questionEn": "An electric lamp is connected in series with a coil of wire and a BATTERY (DC source). When a soft iron core is inserted and brought to rest inside the coil, the steady-state brightness of the lamp:",
    "questionAr": "مصباح كهربي متصل على التوالي مع ملف ومصدر تيار مستمر (بطارية). عند إدخال ساق من الحديد المطاوع واستقراره داخل الملف، فإن إضاءة المصباح في الحالة المستقرة:",
    "optionsEn": [
      "Decreases permanently",
      "Remains unchanged",
      "Increases permanently",
      "Extinguishes completely"
    ],
    "optionsAr": [
      "تقل بصفة دائمة",
      "تظل ثابتة دون تغيير",
      "تزداد بصفة دائمة",
      "تنطفئ تماماً"
    ],
    "correctAnswer": "Remains unchanged",
    "correctIndex": 1,
    "hintEn": "For DC at steady-state, $f = 0 \\implies X_L = 0$. Iron affects $L$, not ohmic resistance $r$.",
    "hintAr": "في حالة التيار المستمر المستقر $f = 0 \\implies X_L = 0$. الحديد يؤثر على الحث وليس على المقاومة الأومية.",
    "stepByStepSolutionEn": [
      "In a DC circuit, after the transient period of insertion, steady-state frequency is zero ($f = 0$). Thus $X_L = 2\\pi(0)L = 0$. The steady current depends only on total ohmic resistance: $I = \\frac{V_B}{R_{lamp} + r_{coil}}$. Since the iron core does not change the ohmic resistance of the copper wire, the steady-state brightness remains unchanged."
    ],
    "stepByStepSolutionAr": [
      "في دائرة التيار المستمر بعد انتهاء اللحظة العابرة، يكون التردد صفراً وتكون $X_L = 0$. فيعتمد التيار فقط على المقاومات الأومية $I = \\frac{V_B}{R_{lamp} + r}$. وبما أن ساق الحديد لا تغير المقاومة الأومية لسلك الملف، فإن إضاءة المصباح في الحالة المستقرة تظل ثابتة تماماً."
    ],
    "teacherTipEn": "Watch out for DC source vs AC source! DC steady-state current is independent of $L$.",
    "teacherTipAr": "انتبه لنوع المصدر: في التيار المستمر المستقر تنعدم المفاعلة الحثية ولا يتأثر التيار بـ $L$."
  },
  {
    "id": "phys_ch4_db_hots_07",
    "titleEn": "Bulb in Series with Capacitor: Effect of Frequency on Brightness",
    "titleAr": "مصباح متصل توالياً مع مكثف: أثر زيادة التردد على الإضاءة",
    "difficulty": "hots",
    "questionEn": "An electric lamp is connected in series with a capacitor to an AC source of variable frequency and constant voltage. If the frequency of the AC source is increased, the brightness of the lamp:",
    "questionAr": "مصباح كهربي متصل على التوالي مع مكثف ومصدر تيار متردد متغير التردد وثابت الجهد. إذا زاد تردد المصدر، فإن إضاءة المصباح:",
    "optionsEn": [
      "Decreases",
      "Remains constant",
      "Increases",
      "Decreases to zero immediately"
    ],
    "optionsAr": [
      "تقل",
      "تظل ثابتة",
      "تزداد",
      "تنعدم فوراً"
    ],
    "correctAnswer": "Increases",
    "correctIndex": 2,
    "hintEn": "$X_C = \\frac{1}{2\\pi f C}$. Higher $f \\implies$ lower $X_C \\implies$ lower $Z \\implies$ higher $I$.",
    "hintAr": "$X_C = \\frac{1}{2\\pi f C}$. زيادة $f \\implies$ نقصان $X_C \\implies$ نقصان $Z \\implies$ زيادة التيار والإضاءة.",
    "stepByStepSolutionEn": [
      "Capacitive reactance is inversely proportional to frequency: $X_C = \\frac{1}{2\\pi f C}$. As frequency increases, $X_C$ decreases, which decreases total impedance $Z = \\sqrt{R^2 + X_C^2}$. Since source voltage $V$ is constant, circuit current $I = \\frac{V}{Z}$ increases, making lamp brightness ($P = I^2 R$) increase."
    ],
    "stepByStepSolutionAr": [
      "المفاعلة السعوية تتناسب عكسياً مع التردد: $X_C = \\frac{1}{2\\pi f C}$. بزيادة التردد تقل المفاعلة السعوية $X_C$، فتقل المعاوقة الكلية للدائرة $Z = \\sqrt{R^2 + X_C^2}$. وبثبوت جهد المصدر تزداد شدة التيار $I = \\frac{V}{Z}$ وتزداد إضاءة المصباح."
    ],
    "teacherTipEn": "Capacitor opposes low frequencies but allows high frequencies to pass easily.",
    "teacherTipAr": "المكثف يمرر الترددات العالية بسهولة ويبدي ممانعة كبيرة للترددات المنخفضة."
  },
  {
    "id": "phys_ch4_db_hots_08",
    "titleEn": "Capacitor Connected to DC Source: State of Lamp",
    "titleAr": "مكثف ومصباح في دائرة تيار مستمر",
    "difficulty": "hots",
    "questionEn": "A circuit contains an ideal DC battery, a key, a capacitor, and an incandescent bulb in series. At the instant of closing the switch, and a long time after closing it, the lamp behaves as follows:",
    "questionAr": "دائرة كهربية تحتوي على بطارية ومفتاح ومكثف ومصباح متصلة معاً على التوالي. لحظة غلق المفتاح وبعد فترة زمنية كافية من الغلق، فإن المصباح:",
    "optionsEn": [
      "Remains illuminated continuously",
      "Does not illuminate at all at any moment",
      "Starts dim and gradually gets brighter and brighter",
      "Lights up momentarily then extinguishes completely"
    ],
    "optionsAr": [
      "يظل مضيئاً بصفة مستمرة",
      "لا يضيء مطلقاً في أي لحظة",
      "يبدأ خافتاً ثم تزداد إضاءته تدريجياً وبصفة مستمرة",
      "يضيء لحظياً ثم ينطفئ تماماً"
    ],
    "correctAnswer": "Lights up momentarily then extinguishes completely",
    "correctIndex": 3,
    "hintEn": "Transient charging current flows until capacitor voltage equals battery voltage ($V_C = V_B$).",
    "hintAr": "يمر تيار شحن لحظي حتى يتساوى فرق جهد المكثف مع القوة الدافعة للبطارية ($V_C = V_B$) فينعدم التيار.",
    "stepByStepSolutionEn": [
      "At the instant of closing the key, charging current rushes into the plates of the capacitor, illuminating the bulb temporarily. Once the capacitor is fully charged ($V_C = V_B$), the potential difference across the dielectric opposes the battery voltage, stopping charge flow ($I = 0$). The bulb extinguishes completely."
    ],
    "stepByStepSolutionAr": [
      "لحظة غلق الدائرة يتدفق تيار شحن لحظي لشحن لوحي المكثف فيضيء المصباح لحظياً. وبتمام شحن المكثف يصبح فرق جهده مساوياً للقوة الدافعة للبطارية ومضاداً لها، فينعدم التيار في الدائرة وينطفئ المصباح تماماً."
    ],
    "teacherTipEn": "Capacitor completely blocks direct current once fully charged.",
    "teacherTipAr": "المكثف يمنع مرور التيار المستمر بعد تمام شحنه."
  },
  {
    "id": "phys_ch4_db_hots_09",
    "titleEn": "Phase Difference in Series LC Circuit without Resistance",
    "titleAr": "فرق الطور في دائرة حث وسعة فقط مهملة المقاومة",
    "difficulty": "hots",
    "questionEn": "An AC circuit contains a pure inductor of reactance $X_L = 100\\,\\Omega$ and a pure capacitor of reactance $X_C = 40\\,\\Omega$ connected in series with an AC source. The phase difference between the inductor voltage $V_L$ and capacitor voltage $V_C$ is:",
    "questionAr": "دائرة تيار متردد تحتوي على ملف حث نقي مفاعلته $X_L = 100\\,\\Omega$ ومكثف مفاعلته $X_C = 40\\,\\Omega$ متصلين على التوالي بمصدر تيار متردد. فإن زاوية الطور بين جهد الملف $V_L$ وجهد المكثف $V_C$ هي:",
    "optionsEn": [
      "$180^\\circ$ ($\\pi\\text{ rad}$)",
      "$90^\\circ$ ($\\pi/2\\text{ rad}$)",
      "$0^\\circ$",
      "$270^\\circ$"
    ],
    "optionsAr": [
      "$180^\\circ$ ($\\pi\\text{ rad}$)",
      "$90^\\circ$ ($\\pi/2\\text{ rad}$)",
      "$0^\\circ$",
      "$270^\\circ$"
    ],
    "correctAnswer": "$180^\\circ$ ($\\pi\\text{ rad}$)",
    "correctIndex": 0,
    "hintEn": "$V_L$ leads $I$ by $90^\\circ$, while $V_C$ lags $I$ by $90^\\circ$.",
    "hintAr": "جهد الملف يسبق التيار بربع دورة ($90^\\circ$) وجهد المكثف يتأخر عن التيار بربع دورة ($90^\\circ$).",
    "stepByStepSolutionEn": [
      "The current $I$ is common in series. $V_L$ leads $I$ by $+90^\\circ$ and $V_C$ lags $I$ by $-90^\\circ$. The phase difference between the two voltages is $(+90^\\circ) - (-90^\\circ) = 180^\\circ$ ($\\pi$ radians, opposite directions)."
    ],
    "stepByStepSolutionAr": [
      "التيار $I$ متفق في الطور في دائرة التوالي. متجه $V_L$ يسبق التيار بزاوية $+90^\\circ$ ومتجه $V_C$ يتأخر عن التيار بزاوية $-90^\\circ$. وبالتالي فإن فرق الطور بين متجهي $V_L$ و $V_C$ هو $90^\\circ - (-90^\\circ) = 180^\\circ$ (أي أنهما على استقامة واحدة ومتضادان في الاتجاه)."
    ],
    "teacherTipEn": "$V_L$ and $V_C$ are strictly opposite in phase ($180^\\circ$).",
    "teacherTipAr": "جهد الملف وجهد المكثف متعاكسان تماماً في الاتجاه وفرق الطور بينهما $180^\\circ$."
  },
  {
    "id": "phys_ch4_db_hots_10",
    "titleEn": "Total Voltage Across Series LC Branch",
    "titleAr": "الجهد الكلي عبر فرع يحتوي على ملف ومكثف توالياً",
    "difficulty": "hots",
    "questionEn": "In a series AC circuit with negligible resistance, a voltmeter connected across the inductor reads $V_L = 80\\text{ V}$, and another across the capacitor reads $V_C = 50\\text{ V}$. A third voltmeter connected across BOTH the inductor and capacitor simultaneously reads:",
    "questionAr": "في دائرة تيار متردد مهملة المقاومة، وُصل فولتميتر على طرفي ملف حث نقي فقرأ $V_L = 80\\text{ V}$، ووُصل آخر على طرفي مكثف فقرأ $V_C = 50\\text{ V}$. فإن قراءة فولتميتر ثالث متصل بطرفي الملف والمكثف معاً تساوي:",
    "optionsEn": [
      "$130\\text{ V}$",
      "$30\\text{ V}$",
      "$\\sqrt{80^2 + 50^2} \\approx 94.3\\text{ V}$",
      "$65\\text{ V}$"
    ],
    "optionsAr": [
      "$130\\text{ V}$",
      "$30\\text{ V}$",
      "$\\sqrt{80^2 + 50^2} \\approx 94.3\\text{ V}$",
      "$65\\text{ V}$"
    ],
    "correctAnswer": "$30\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "$V_L$ and $V_C$ are $180^\\circ$ out of phase: $V_{LC} = |V_L - V_C|$.",
    "hintAr": "متجها $V_L$ و $V_C$ في اتجاهين متضادين: $V_{LC} = |V_L - V_C|$.",
    "stepByStepSolutionEn": [
      "Because $V_L$ and $V_C$ are vectors pointing in opposite directions along the vertical axis, their resultant scalar magnitude is $V_{LC} = |V_L - V_C| = |80 - 50| = 30\\text{ V}$. They subtract algebraically, never add directly or by Pythagorean theorem alone."
    ],
    "stepByStepSolutionAr": [
      "بما أن جهدي الملف والمكثف متضادان في الطور ($180^\\circ$)، فإن محصلتهما تكون ناتجة عن طرح المتجهين جبرياً: $V_{LC} = |V_L - V_C| = 80 - 50 = 30\\text{ V}$."
    ],
    "teacherTipEn": "Voltages in LC branch subtract because their phase difference is $180^\\circ$.",
    "teacherTipAr": "فرق الجهد الكلي بين طرفي ملف ومكثف معاً يساوي حاصل طرحهما لأن فرق الطور بينهما $180^\\circ$."
  },
  {
    "id": "phys_ch4_db_hots_11",
    "titleEn": "Phase Angle in RLC Series Circuit with Equal Reactances",
    "titleAr": "زاوية الطور في دائرة RLC عندما تتساوى المفاعلتان",
    "difficulty": "hots",
    "questionEn": "In a series RLC circuit, $R = 50\\,\\Omega$, $X_L = 120\\,\\Omega$, and $X_C = 120\\,\\Omega$. The phase angle between the total voltage and the current is:",
    "questionAr": "في دائرة RLC متصلة على التوالي، إذا كانت $R = 50\\,\\Omega$ و $X_L = 120\\,\\Omega$ و $X_C = 120\\,\\Omega$. فإن زاوية الطور بين الجهد الكلي والتيار تساوي:",
    "optionsEn": [
      "$90^\\circ$ leading",
      "$-90^\\circ$ lagging",
      "$0^\\circ$ (in phase)",
      "$45^\\circ$"
    ],
    "optionsAr": [
      "$90^\\circ$ (الجهد يسبق التيار)",
      "$-90^\\circ$ (الجهد يتأخر عن التيار)",
      "$0^\\circ$ (يتفقان في الطور)",
      "$45^\\circ$"
    ],
    "correctAnswer": "$0^\\circ$ (in phase)",
    "correctIndex": 2,
    "hintEn": "$\\tan \\theta = \\frac{X_L - X_C}{R} = \\frac{0}{R} = 0 \\implies \\theta = 0^\\circ$.",
    "hintAr": "$\\tan \\theta = \\frac{X_L - X_C}{R} = 0 \\implies \\theta = 0^\\circ$.",
    "stepByStepSolutionEn": [
      "The phase angle formula is $\\tan \\theta = \\frac{X_L - X_C}{R}$. Since $X_L = X_C = 120\\,\\Omega$, the numerator is zero: $\\tan \\theta = 0 \\implies \\theta = 0^\\circ$. Total voltage and circuit current are in phase, indicating state of resonance."
    ],
    "stepByStepSolutionAr": [
      "قانون زاوية الطور: $\\tan \\theta = \\frac{X_L - X_C}{R}$. بما أن $X_L = X_C = 120\\,\\Omega$، فإن $\\tan \\theta = \\frac{0}{50} = 0 \\implies \\theta = 0^\\circ$. الجهد الكلي والتيار متفقان في الطور، والدائرة في حالة رنين وتتميز بخواص أومية نقية."
    ],
    "teacherTipEn": "When $X_L = X_C$, circuit has purely resistive characteristics ($\\theta = 0$).",
    "teacherTipAr": "عند تساوي المفاعلتين تلغي كل منهما الأخرى وتكون للدائرة خواص أومية وزاوية الطور صفر."
  },
  {
    "id": "phys_ch4_db_hots_12",
    "titleEn": "Effect on Resonance Frequency when Inductance is Quadrupled and Capacitance is Halved",
    "titleAr": "أثر زيادة معامل الحث 4 أمثال ونقص السعة للنصف على تردد الرنين",
    "difficulty": "hots",
    "questionEn": "In a series resonant circuit, the self-inductance of the coil is quadrupled ($4L$) and the capacitance of the capacitor is halved ($C/2$). The new resonance frequency ($f'_0$) is related to the original ($f_0$) by:",
    "questionAr": "في دائرة رنين على التوالي، زاد معامل الحث الذاتي للملف إلى 4 أمثاله ($4L$) وقُلت سعة المكثف إلى النصف ($C/2$). فإن تردد الرنين الجديد ($f'_0$) يصبح:",
    "optionsEn": [
      "$\\sqrt{2}\\,f_0$",
      "$2\\,f_0$",
      "$f_0$ (remains unchanged)",
      "$\\frac{f_0}{\\sqrt{2}}$"
    ],
    "optionsAr": [
      "$\\sqrt{2}\\,f_0$",
      "$2\\,f_0$",
      "$f_0$ (يظل ثابتاً)",
      "$\\frac{f_0}{\\sqrt{2}}$"
    ],
    "correctAnswer": "$\\frac{f_0}{\\sqrt{2}}$",
    "correctIndex": 3,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. New product is $(4L)(C/2) = 2LC$.",
    "hintAr": "$f_0 \\propto \\frac{1}{\\sqrt{LC}}$. حاصل الضرب الجديد هو $4 \\times \\frac{1}{2} = 2$.",
    "stepByStepSolutionEn": [
      "The resonance frequency is $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Under the changes: $L' = 4L$ and $C' = C/2$, so $L' C' = 4L \\times \\frac{C}{2} = 2LC$. Thus $f'_0 = \\frac{1}{2\\pi \\sqrt{2LC}} = \\frac{1}{\\sqrt{2}} f_0$."
    ],
    "stepByStepSolutionAr": [
      "تردد الرنين يعطى بالعلاقة: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. حاصل ضرب الحث في السعة يصبح $L' C' = 4L \\times \\frac{C}{2} = 2LC$. وبالتالي فإن تردد الرنين الجديد يصبح $f'_0 = \\frac{1}{\\sqrt{2}} f_0$."
    ],
    "teacherTipEn": "$f_0 \\propto 1/\\sqrt{LC}$. Always evaluate the change in the product $L \\cdot C$.",
    "teacherTipAr": "تردد الرنين يتناسب عكسياً مع الجذر التربيعي لحاصل ضرب $L$ في $C$."
  },
  {
    "id": "phys_ch4_db_hots_13",
    "titleEn": "Current Magnitude in Resonant Circuit vs Resistor Value",
    "titleAr": "شدة التيار في دائرة الرنين وتأثرها بقيمة المقاومة الأومية",
    "difficulty": "hots",
    "questionEn": "An AC circuit is in resonance with source voltage $V = 100\\text{ V}$. If the values are $R = 20\\,\\Omega$, $X_L = 200\\,\\Omega$, and $X_C = 200\\,\\Omega$, the current flowing in the circuit is:",
    "questionAr": "دائرة تيار متردد في حالة رنين وفرق جهد مصدرها $V = 100\\text{ V}$. فإذا كانت $R = 20\\,\\Omega$ و $X_L = 200\\,\\Omega$ و $X_C = 200\\,\\Omega$، فإن شدة التيار المار في الدائرة تساوي:",
    "optionsEn": [
      "$5\\text{ A}$",
      "$0.5\\text{ A}$",
      "$0.25\\text{ A}$",
      "$2\\text{ A}$"
    ],
    "optionsAr": [
      "$5\\text{ A}$",
      "$0.5\\text{ A}$",
      "$0.25\\text{ A}$",
      "$2\\text{ A}$"
    ],
    "correctAnswer": "$5\\text{ A}$",
    "correctIndex": 0,
    "hintEn": "In resonance, $Z = R$. Thus $I = \\frac{V}{R}$.",
    "hintAr": "في حالة الرنين تكون المعاوقة مساوية للمقاومة الأومية فقط $Z = R$، ويكون $I = \\frac{V}{R}$.",
    "stepByStepSolutionEn": [
      "At resonance, inductive and capacitive reactances cancel out: $Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{R^2 + 0} = R = 20\\,\\Omega$. The current is strictly determined by the ohmic resistance: $I = \\frac{V}{R} = \\frac{100}{20} = 5\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "في حالة الرنين تلغي المفاعلة الحثية المفاعلة السعوية ($X_L = X_C$) وتصبح المعاوقة في أدنى قيمة لها وتساوي المقاومة الأومية فقط $Z = R = 20\\,\\Omega$. وتكون شدة التيار في أقصى قيمة لها: $I = \\frac{V}{R} = \\frac{100}{20} = 5\\text{ A}$."
    ],
    "teacherTipEn": "In resonance, reactances have no effect on current amplitude: $I = V/R$.",
    "teacherTipAr": "في حالة الرنين لا تؤثر المفاعلات على شدة التيار، ويتحدد التيار بالمقاومة الأومية فقط."
  },
  {
    "id": "phys_ch4_db_hots_14",
    "titleEn": "Voltage Across Inductor Exceeding Source Voltage in Resonance",
    "titleAr": "جهد الملف أكبر من جهد المصدر في حالة الرنين",
    "difficulty": "hots",
    "questionEn": "In a series resonant RLC circuit with source voltage $V = 10\\text{ V}$, $R = 5\\,\\Omega$, and $X_L = X_C = 100\\,\\Omega$, the voltage across the inductor ($V_L$) is:",
    "questionAr": "في دائرة RLC متصلة على التوالي في حالة رنين، فرق جهد المصدر $V = 10\\text{ V}$ و $R = 5\\,\\Omega$ و $X_L = X_C = 100\\,\\Omega$. فإن فرق الجهد بين طرفي ملف الحث ($V_L$) يساوي:",
    "optionsEn": [
      "$10\\text{ V}$",
      "$200\\text{ V}$",
      "$50\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$10\\text{ V}$",
      "$200\\text{ V}$",
      "$50\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$200\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "$I = V/R = 10/5 = 2\\text{ A}$. Then $V_L = I \\cdot X_L = 2 \\times 100\\text{ V}$.",
    "hintAr": "$I = V/R = 10/5 = 2\\text{ A}$. ثم $V_L = I \\times X_L = 2 \\times 100 = 200\\text{ V}$.",
    "stepByStepSolutionEn": [
      "At resonance, $Z = R = 5\\,\\Omega$, so current is $I = \\frac{V}{R} = \\frac{10}{5} = 2\\text{ A}$. The voltage across the coil is $V_L = I \\cdot X_L = 2 \\times 100 = 200\\text{ V}$. Even though the source is only $10\\text{ V}$, $V_L$ is $200\\text{ V}$ (which is exactly balanced by $V_C = 200\\text{ V}$ in antiphase)."
    ],
    "stepByStepSolutionAr": [
      "في حالة الرنين $Z = R = 5\\,\\Omega$ فتكون شدة التيار $I = \\frac{10}{5} = 2\\text{ A}$. وفرق الجهد بين طرفي ملف الحث هو $V_L = I \\cdot X_L = 2 \\times 100 = 200\\text{ V}$. يلاحظ أن $V_L$ أكبر بكثير من جهد المصدر، ويتلاشى تأثيره بالكامل لأن $V_C = 200\\text{ V}$ ويضاده في الاتجاه تماماً."
    ],
    "teacherTipEn": "Voltage resonance can produce branch voltages much greater than source voltage ($V_L = Q \\cdot V$).",
    "teacherTipAr": "في حالة الرنين يمكن أن يكون فرق الجهد عبر الملف أو المكثف أضعاف جهد المصدر."
  },
  {
    "id": "phys_ch4_db_hots_15",
    "titleEn": "Impedance Variation with Frequency: Minimum Point",
    "titleAr": "تغير المعاوقة مع التردد: نقطة النهاية الصغرى",
    "difficulty": "hots",
    "questionEn": "The graph of impedance $Z$ versus frequency $f$ for a series RLC circuit displays a curve with a minimum value. At the frequency corresponding to this minimum:",
    "questionAr": "يوضح المنحنى البياني لتغير المعاوقة $Z$ مع التردد $f$ لدائرة RLC توالي منحنى له نقطة نهاية صغرى. عند التردد المقابل لهذه النهاية الصغرى:",
    "optionsEn": [
      "$X_L = 0$ and $X_C = 0$",
      "$Z = 0$",
      "$X_L = X_C$ and $Z = R$",
      "$X_L > X_C$ and the circuit is purely inductive"
    ],
    "optionsAr": [
      "$X_L = 0$ و $X_C = 0$",
      "$Z = 0$",
      "$X_L = X_C$ و $Z = R$",
      "$X_L > X_C$ والدائرة لها خواص حثية"
    ],
    "correctAnswer": "$X_L = X_C$ and $Z = R$",
    "correctIndex": 2,
    "hintEn": "Minimum impedance corresponds to resonance frequency $f_0$, where $X_L = X_C$ and $Z = R$.",
    "hintAr": "أقل معاوقة تقابل تردد الرنين حيث تلغي المفاعلتان إحداهما الأخرى ويكون $Z = R$.",
    "stepByStepSolutionEn": [
      "Impedance is $Z = \\sqrt{R^2 + (X_L - X_C)^2}$. The term $(X_L - X_C)^2 \\ge 0$, so $Z$ achieves its absolute minimum when $X_L - X_C = 0$, giving $Z_{min} = R$. This is the resonance state where current reaches its maximum."
    ],
    "stepByStepSolutionAr": [
      "المعاوقة الكلية $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ تكون في حدها الأدنى عندما يتلاشى المقدار $(X_L - X_C) = 0$ أي عندما $X_L = X_C$ فتصبح $Z = R$ وتكون شدة التيار عند قيمتها العظمى."
    ],
    "teacherTipEn": "At the minimum of $Z(f)$, the circuit is in resonance and purely resistive.",
    "teacherTipAr": "عند القاع في منحنى المعاوقة، تكون الدائرة في حالة رنين وتساوي المعاوقة المقاومة الأومية."
  },
  {
    "id": "phys_ch4_db_hots_16",
    "titleEn": "Circuit Characteristic when Frequency Exceeds Resonance Frequency",
    "titleAr": "خواص دائرة RLC عندما يكون التردد أكبر من تردد الرنين",
    "difficulty": "hots",
    "questionEn": "In a series RLC circuit, when the operating frequency of the AC source is HIGHER than the resonance frequency ($f > f_0$), the circuit exhibits:",
    "questionAr": "في دائرة RLC متصلة على التوالي، عندما يكون تردد المصدر المتردد أكبر من تردد الرنين ($f > f_0$)، فإن الدائرة يكون لها:",
    "optionsEn": [
      "Capacitive properties (current leads voltage, $\\theta < 0$)",
      "Purely resistive properties ($\\theta = 0$)",
      "Zero total impedance",
      "Inductive properties (voltage leads current, $\\theta > 0$)"
    ],
    "optionsAr": [
      "خواص سعوية (التيار يسبق الجهد الكلي وزاوية الطور سالبة)",
      "خواص أومية نقية (زاوية الطور صفر)",
      "معاوقة كلية منعدمة",
      "خواص حثية (الجهد الكلي يسبق التيار وزاوية الطور موجبة)"
    ],
    "correctAnswer": "Inductive properties (voltage leads current, $\\theta > 0$)",
    "correctIndex": 3,
    "hintEn": "When $f > f_0$, $X_L \\propto f$ increases and $X_C \\propto 1/f$ decreases, so $X_L > X_C$.",
    "hintAr": "عندما $f > f_0$ تزداد $X_L$ وتقل $X_C$ فيكون $X_L > X_C$ وتغلب الخواص الحثية.",
    "stepByStepSolutionEn": [
      "Since $X_L = 2\\pi f L \\propto f$ and $X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$, when $f > f_0$, $X_L$ becomes strictly greater than $X_C$ ($X_L > X_C$). Therefore, $\\tan \\theta = \\frac{X_L - X_C}{R} > 0$, meaning the circuit has inductive properties and total voltage leads current."
    ],
    "stepByStepSolutionAr": [
      "بما أن المفاعلة الحثية $X_L$ تتناسب طردياً مع التردد والمفاعلة السعوية $X_C$ تتناسب عكسياً معه، فإنه عندما يكون التردد أعلى من تردد الرنين تصبح $X_L > X_C$، وتكون زاوية الطور موجبة ويتقدم الجهد الكلي على التيار وتتصف الدائرة بخواص حثية."
    ],
    "teacherTipEn": "Above resonance ($f > f_0$): Inductive ($X_L > X_C$). Below resonance ($f < f_0$): Capacitive ($X_C > X_L$).",
    "teacherTipAr": "فوق الرنين: حثية ($X_L > X_C$). تحت الرنين: سعوية ($X_C > X_L$)."
  },
  {
    "id": "phys_ch4_db_hots_17",
    "titleEn": "Circuit Characteristic when Frequency is Lower than Resonance Frequency",
    "titleAr": "خواص دائرة RLC عندما يكون التردد أقل من تردد الرنين",
    "difficulty": "hots",
    "questionEn": "In a series RLC circuit, when the operating frequency of the AC source is LOWER than the resonance frequency ($f < f_0$), the circuit exhibits:",
    "questionAr": "في دائرة RLC متصلة على التوالي، عندما يكون تردد المصدر المتردد أقل من تردد الرنين ($f < f_0$)، فإن الدائرة يكون لها:",
    "optionsEn": [
      "Capacitive properties (current leads voltage, $\\theta < 0$)",
      "Inductive properties (voltage leads current, $\\theta > 0$)",
      "Purely resistive properties ($\\theta = 0$)",
      "Infinite current"
    ],
    "optionsAr": [
      "خواص سعوية (التيار يسبق الجهد الكلي وزاوية الطور سالبة)",
      "خواص حثية (الجهد الكلي يسبق التيار وزاوية الطور موجبة)",
      "خواص أومية نقية (زاوية الطور صفر)",
      "شدة تيار لانهائية"
    ],
    "correctAnswer": "Capacitive properties (current leads voltage, $\\theta < 0$)",
    "correctIndex": 0,
    "hintEn": "When $f < f_0$, $X_C \\propto 1/f$ increases and $X_L \\propto f$ decreases, so $X_C > X_L$.",
    "hintAr": "عندما $f < f_0$ تصبح $X_C > X_L$ فتغلب الخواص السعوية.",
    "stepByStepSolutionEn": [
      "When $f < f_0$, the inductive reactance decreases while capacitive reactance increases, leading to $X_C > X_L$. The phase angle is negative: $\\tan \\theta = \\frac{X_L - X_C}{R} < 0$. This means current leads the total voltage, giving the circuit capacitive properties."
    ],
    "stepByStepSolutionAr": [
      "عندما ينخفض التردد عن تردد الرنين ($f < f_0$)، تقل المفاعلة الحثية وتزداد المفاعلة السعوية بحيث تصبح $X_C > X_L$. وتكون زاوية الطور سالبة، فيسبق التيار الجهد الكلي وتغلب الخواص السعوية على الدائرة."
    ],
    "teacherTipEn": "Below resonance frequency, capacitive reactance dominates.",
    "teacherTipAr": "عند الترددات الأقل من تردد الرنين تغلب المفاعلة السعوية."
  },
  {
    "id": "phys_ch4_db_hots_18",
    "titleEn": "Oscillating Circuit: Energy at the Moment Capacitor is Fully Discharged",
    "titleAr": "الدائرة المهتزة: طاقة الدائرة لحظة تمام تفريغ المكثف",
    "difficulty": "hots",
    "questionEn": "In an ideal oscillating (LC) circuit, at the instant when the electric charge on the capacitor plates drops to ZERO, the energy stored in the circuit is:",
    "questionAr": "في دائرة مهتزة مثالية (LC)، في اللحظة التي تنعدم فيها الشحنة تماماً على لوحي المكثف، فإن الطاقة المختزنة في الدائرة تكون:",
    "optionsEn": [
      "Completely stored as electrostatic energy in the capacitor",
      "Completely stored as magnetic energy in the inductor's magnetic field",
      "Zero throughout the entire circuit",
      "Equally divided between electric and magnetic fields"
    ],
    "optionsAr": [
      "مختزنة بالكامل على شكل طاقة كهربية في المجال الكهربي للمكثف",
      "مختزنة بالكامل على شكل طاقة مغناطيسية في المجال المغناطيسي للملف",
      "منعدمة في الدائرة بأكملها",
      "مقسمة بالتساوي بين المجالين الكهربي والمغناطيسي"
    ],
    "correctAnswer": "Completely stored as magnetic energy in the inductor's magnetic field",
    "correctIndex": 1,
    "hintEn": "By conservation of energy, when $q = 0$, $U_E = 0$, so current $I$ is at its maximum and all energy is $U_B = \\frac{1}{2} L I^2$.",
    "hintAr": "طبقاً لقانون بقاء الطاقة، عند انعدام الشحنة ينعدم المجال الكهربي ويكون التيار أقصى ما يمكن فتكون كل الطاقة مغناطيسية.",
    "stepByStepSolutionEn": [
      "In an LC circuit, energy oscillates between the electric field of the capacitor ($U_E = \\frac{q^2}{2C}$) and the magnetic field of the coil ($U_B = \\frac{1}{2} L I^2$). When $q = 0$, $U_E = 0$. By conservation of energy, the current is at its maximum value ($I_{max}$) and all energy is purely magnetic: $U_{total} = \\frac{1}{2} L I_{max}^2$."
    ],
    "stepByStepSolutionAr": [
      "في الدائرة المهتزة يحدث تبادل دوري مستمر بين الطاقة الكهربية في المكثف ($U_E = \\frac{q^2}{2C}$) والطاقة المغناطيسية في الملف ($U_B = \\frac{1}{2} L I^2$). فعندما تفرغ شحنة المكثف تماماً ($q=0$) تنعدم الطاقة الكهربية، وتصل شدة التيار إلى قيمتها العظمى فتتحول الطاقة بأكملها إلى طاقة مغناطيسية في الملف."
    ],
    "teacherTipEn": "Zero charge $\\implies$ zero electric energy $\\implies$ maximum current and 100% magnetic energy.",
    "teacherTipAr": "شحنة المكثف صفر $\\implies$ الطاقة الكهربية صفر $\\implies$ التيار قيمة عظمى والطاقة كلها مغناطيسية في الملف."
  },
  {
    "id": "phys_ch4_db_hots_19",
    "titleEn": "Cause of Damping in an Oscillating Circuit",
    "titleAr": "سبب اضمحلال الشحنة والتيار في الدائرة المهتزة",
    "difficulty": "hots",
    "questionEn": "In an oscillating (LC) circuit, the amplitude of electromagnetic oscillations gradually decreases over time (damped oscillations). The physical cause of this damping is:",
    "questionAr": "في الدائرة المهتزة، يضمحل اتساع التذبذبات الكهرومغناطيسية تدريجياً مع مرور الوقت. السبب الفيزيائي لهذا الاضمحلال هو:",
    "optionsEn": [
      "The capacitive reactance of the capacitor leaking charges",
      "The self-inductance of the coil resisting current growth",
      "The ohmic resistance of the coil and connecting wires converting energy into heat",
      "The emission of visible light from the circuit"
    ],
    "optionsAr": [
      "المفاعلة السعوية للمكثف التي تؤدي لتسرب الشحنات",
      "معامل الحث الذاتي للملف الذي يقاوم نمو التيار",
      "المقاومة الأومية لأسلاك الملف والتوصيل التي تحول جزءاً من الطاقة إلى حرارة",
      "انبعاث ضوء مرئي من أسلاك الدائرة"
    ],
    "correctAnswer": "The ohmic resistance of the coil and connecting wires converting energy into heat",
    "correctIndex": 2,
    "hintEn": "Ohmic resistance dissipates energy via Joule heating ($P = I^2 R$).",
    "hintAr": "المقاومة الأومية تستهلك الطاقة الكهربية في صورة طاقة حرارية تبعاً للعلاقة $I^2 R$.",
    "stepByStepSolutionEn": [
      "Real inductor coils and connecting wires always possess non-zero ohmic resistance ($R$). During each cycle of charge and discharge, a fraction of the oscillating electromagnetic energy is dissipated as heat according to Joule's law ($E_{lost} = I^2 R t$). Thus, current and charge amplitudes exponentially decay unless periodically replenished."
    ],
    "stepByStepSolutionAr": [
      "تحتوي أسلاك الملف وأسلاك التوصيل في الدوائر الحقيقية على مقاومة أومية، يتم فيها استهلاك جزء من الطاقة الكهرومغناطيسية تدريجياً في كل دورة في صورة طاقة حرارية بفعل جول ($I^2 R t$)، مما يؤدي إلى اضمحلال شحنة وتيار الدائرة تدريجياً حتى ينعدما ما لم يتم تغذية الدائرة بشحنات إضافية دورياً."
    ],
    "teacherTipEn": "Damping is caused purely by ohmic resistance ($R$) dissipating energy as heat.",
    "teacherTipAr": "سبب الاضمحلال هو المقاومة الأومية للأسلاك التي تبدد الطاقة في صورة حرارة."
  },
  {
    "id": "phys_ch4_db_hots_20",
    "titleEn": "Radio Receiver Tuning Circuit Operation",
    "titleAr": "آلية عمل دائرة التوليف (الاستقبال الإذاعي)",
    "difficulty": "hots",
    "questionEn": "In a radio receiving circuit (tuning circuit), when tuning the variable capacitor to select a specific broadcasting station, the circuit is adjusted so that:",
    "questionAr": "في دائرة الاستقبال الإذاعي (دائرة الرنين والتوليف)، عند ضبط المكثف متغير السعة لاختيار محطة إذاعية معينة، يتم ضبط الدائرة بحيث:",
    "optionsEn": [
      "Its total impedance reaches its maximum possible value",
      "The current passing in the circuit reaches zero",
      "The capacitive reactance becomes ten times the inductive reactance",
      "Its natural resonant frequency matches the frequency of the desired radio signal"
    ],
    "optionsAr": [
      "تصل المعاوقة الكلية للدائرة إلى أقصى قيمة لها لمنع الإشارات",
      "تنعدم شدة التيار المار في الدائرة تماماً",
      "تصبح المفاعلة السعوية عشرة أمثال المفاعلة الحثية",
      "يتساوى تردد الرنين الطبيعي للدائرة مع تردد موجة الإذاعة المراد استقبالها"
    ],
    "correctAnswer": "Its natural resonant frequency matches the frequency of the desired radio signal",
    "correctIndex": 3,
    "hintEn": "Resonance condition: $f_0 = f_{station} \\implies Z = Z_{min} \\implies I = I_{max}$.",
    "hintAr": "شرط الرنين: $f_0 = f_{station}$ فتصل المعاوقة للحد الأدنى والتيار لأقصى قيمة له فيمر تيار المحطة.",
    "stepByStepSolutionEn": [
      "The aerial receives radio waves of countless frequencies, inducing tiny alternating emfs in the tuning circuit. When the variable capacitor is adjusted such that the circuit's resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$ equals the carrier frequency of the desired station, resonance occurs. Impedance drops to minimum ($Z=R$) and the current of that specific signal peaks, allowing it to be amplified and demodulated while other signals are rejected."
    ],
    "stepByStepSolutionAr": [
      "يلتقط الهوائي موجات كهرومغناطيسية متباينة الترددات تولد تيارات مترددة متناهية الصغر في دائرة الرنين. وعند تغيير سعة المكثف حتى يتفق تردد الدائرة $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$ مع تردد المحطة المراد سماعها، تصبح الدائرة في حالة رنين فتكون معاوقة تيار هذه المحطة أقل ما يمكن ويمر تيارها بأقصى شدة فيفصل ويكبر ويسمع بوضوح."
    ],
    "teacherTipEn": "Tuning means setting natural circuit frequency equal to the desired station's frequency.",
    "teacherTipAr": "التوليف يعني ضبط التردد الطبيعي لدائرة الرنين ليتطابق مع تردد موجة المحطة المطلوبة."
  },
  {
    "id": "phys_ch4_db_hots_21",
    "titleEn": "Quality Factor Dependence on Circuit Resistance",
    "titleAr": "علاقة معامل الجودة بالمقاومة الأومية لدائرة الرنين",
    "difficulty": "hots",
    "questionEn": "The quality factor ($Q$) of a series resonant circuit is given by $Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$. If the ohmic resistance of the circuit is REDUCED to one-third ($R/3$) while keeping $L$ and $C$ constant, the quality factor becomes:",
    "questionAr": "معامل الجودة ($Q$) لدائرة رنين على التوالي يعطى بالعلاقة $Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$. إذا قُلت المقاومة الأومية للدائرة إلى الثلث ($R/3$) مع ثبوت $L$ و $C$، فإن معامل الجودة يصبح:",
    "optionsEn": [
      "$3\\,Q$",
      "$\\frac{Q}{3}$",
      "$9\\,Q$",
      "$\\sqrt{3}\\,Q$"
    ],
    "optionsAr": [
      "$3\\,Q$",
      "$\\frac{Q}{3}$",
      "$9\\,Q$",
      "$\\sqrt{3}\\,Q$"
    ],
    "correctAnswer": "$3\\,Q$",
    "correctIndex": 0,
    "hintEn": "$Q \\propto \\frac{1}{R}$. Reducing $R$ by a factor of 3 triples $Q$.",
    "hintAr": "$Q \\propto \\frac{1}{R}$. التناسب عكسي مع المقاومة، فنقص $R$ إلى الثلث يضاعف $Q$ إلى 3 أمثاله.",
    "stepByStepSolutionEn": [
      "From the formula $Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$, $Q$ is inversely proportional to resistance $R$. When $R' = \\frac{R}{3}$, the new quality factor is $Q' = \\frac{1}{R/3} \\sqrt{\\frac{L}{C}} = 3 \\times \\frac{1}{R} \\sqrt{\\frac{L}{C}} = 3Q$. This sharpens the resonance curve and improves tuning selectivity."
    ],
    "stepByStepSolutionAr": [
      "من القانون $Q = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$ يتضح أن معامل الجودة يتناسب عكسياً مع المقاومة الأومية $R$. فعند تقليل $R$ إلى الثلث تصبح $Q' = 3Q$، فتزداد حدة منحنى الرنين وتزداد كفاءة الدائرة ودقتها في اختيار وفصل المحطات الإذاعية."
    ],
    "teacherTipEn": "Lower resistance gives higher quality factor and sharper resonance curve.",
    "teacherTipAr": "المقاومة الأقل تعطي معامل جودة أعلى واستجابة حادة للرنين."
  },
  {
    "id": "phys_ch4_db_hots_22",
    "titleEn": "Power Dissipation in an AC Circuit with Inductor and Resistor",
    "titleAr": "القدرة الكهربية المستهلكة في دائرة تيار متردد تحتوي على مقاومة وملف حث",
    "difficulty": "hots",
    "questionEn": "An AC circuit consists of a non-inductive resistor $R = 30\\,\\Omega$ and an inductor of inductive reactance $X_L = 40\\,\\Omega$ connected in series to an AC source of voltage $V_{rms} = 100\\text{ V}$. The average electric power dissipated in the circuit is:",
    "questionAr": "دائرة تيار متردد تتكون من مقاومة أومية عديمة الحث $R = 30\\,\\Omega$ وملف حث مفاعلته الحثية $X_L = 40\\,\\Omega$ متصلين على التوالي بمصدر تيار متردد $V_{rms} = 100\\text{ V}$. فإن القدرة الكهربية المتوسطة المستهلكة في الدائرة تساوي:",
    "optionsEn": [
      "$200\\text{ W}$",
      "$120\\text{ W}$",
      "$160\\text{ W}$",
      "$250\\text{ W}$"
    ],
    "optionsAr": [
      "$200\\text{ W}$",
      "$120\\text{ W}$",
      "$160\\text{ W}$",
      "$250\\text{ W}$"
    ],
    "correctAnswer": "$120\\text{ W}$",
    "correctIndex": 1,
    "hintEn": "$Z = \\sqrt{30^2 + 40^2} = 50\\,\\Omega \\implies I = 100/50 = 2\\text{ A}$. $P = I^2 R = 2^2 \\times 30 = 120\\text{ W}$.",
    "hintAr": "$Z = \\sqrt{30^2 + 40^2} = 50\\,\\Omega \\implies I = 2\\text{ A}$. ثم $P = I^2 R = 4 \\times 30 = 120\\text{ W}$.",
    "stepByStepSolutionEn": [
      "First, find total impedance: $Z = \\sqrt{R^2 + X_L^2} = \\sqrt{30^2 + 40^2} = 50\\,\\Omega$. Next, find circuit current: $I = \\frac{V}{Z} = \\frac{100}{50} = 2\\text{ A}$. Power is dissipated ONLY in the resistor (the pure inductor consumes zero average power): $P = I^2 R = (2)^2 \\times 30 = 4 \\times 30 = 120\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعاوقة الكلية: $Z = \\sqrt{30^2 + 40^2} = 50\\,\\Omega$. شدة التيار المار: $I = \\frac{100}{50} = 2\\text{ A}$. والقدرة تستهلك في المقاومة الأومية فقط (الملف لا يستهلك طاقة كهربية لأن طاقته تخزن كمجال مغناطيسي): $P = I^2 R = 2^2 \\times 30 = 120\\text{ W}$."
    ],
    "teacherTipEn": "Power is only consumed as heat in ohmic resistance: $P = I^2 R$. Pure inductors consume $0\\text{ W}$.",
    "teacherTipAr": "القدرة الكهربية تستهلك في المقاومة الأومية فقط، والملف النقي لا يستهلك أي قدرة."
  },
  {
    "id": "phys_ch4_db_hots_23",
    "titleEn": "Capacitors in Series: Charge on Each vs Total",
    "titleAr": "شحنة كل مكثف عند توصيل مكثفين على التوالي",
    "difficulty": "hots",
    "questionEn": "Two capacitors of capacitances $C_1 = 2\\,\\mu\\text{F}$ and $C_2 = 4\\,\\mu\\text{F}$ are connected in series across a $60\\text{ V}$ DC source. The charge stored on the plates of capacitor $C_1$ is:",
    "questionAr": "مكثفان سعتاهما $C_1 = 2\\,\\mu\\text{F}$ و $C_2 = 4\\,\\mu\\text{F}$ متصلان على التوالي بمصدر تيار مستمر جهده $60\\text{ V}$. فإن الشحنة المختزنة على لوحي المكثف $C_1$ تساوي:",
    "optionsEn": [
      "$120\\,\\mu\\text{C}$",
      "$40\\,\\mu\\text{C}$",
      "$80\\,\\mu\\text{C}$",
      "$240\\,\\mu\\text{C}$"
    ],
    "optionsAr": [
      "$120\\,\\mu\\text{C}$",
      "$40\\,\\mu\\text{C}$",
      "$80\\,\\mu\\text{C}$",
      "$240\\,\\mu\\text{C}$"
    ],
    "correctAnswer": "$80\\,\\mu\\text{C}$",
    "correctIndex": 2,
    "hintEn": "Equivalent capacitance in series is $C_{eq} = \\frac{C_1 C_2}{C_1 + C_2} = \\frac{8}{6} = \\frac{4}{3}\\,\\mu\\text{F}$. In series, $q_1 = q_2 = q_{total}$.",
    "hintAr": "السعة المكافئة على التوالي $C_{eq} = \\frac{2 \\times 4}{2 + 4} = \\frac{4}{3}\\,\\mu\\text{F}$. وفي التوالي تكون الشحنة متساوية.",
    "stepByStepSolutionEn": [
      "For capacitors in series, total capacitance is $C_{eq} = \\frac{C_1 C_2}{C_1 + C_2} = \\frac{2 \\times 4}{2 + 4} = \\frac{8}{6} = \\frac{4}{3}\\,\\mu\\text{F}$. The total charge supplied by the source is $q = C_{eq} V = \\left(\\frac{4}{3}\\,\\mu\\text{F}\\right) \\times 60\\text{ V} = 80\\,\\mu\\text{C}$. Because the capacitors are in series, the same charge resides on each capacitor: $q_1 = q_2 = 80\\,\\mu\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل على التوالي، السعة المكافئة: $C_{eq} = \\frac{2 \\times 4}{2 + 4} = \\frac{4}{3}\\,\\mu\\text{F}$. الشحنة الكلية: $q = C_{eq} V = \\frac{4}{3} \\times 60 = 80\\,\\mu\\text{C}$. وبما أن المكثفات موصلة على التوالي، فإن الشحنة على كل مكثف متساوية وتساوي الشحنة الكلية: $q_1 = q_2 = 80\\,\\mu\\text{C}$."
    ],
    "teacherTipEn": "In series capacitors, charge is identical on all capacitors: $q_1 = q_2 = q_{total}$.",
    "teacherTipAr": "في توصيل المكثفات على التوالي تكون الشحنة متساوية على جميع المكثفات."
  },
  {
    "id": "phys_ch4_db_hots_24",
    "titleEn": "Potential Difference Across Individual Capacitor in Series",
    "titleAr": "فرق الجهد على مكثف معين في توصيل التوالي",
    "difficulty": "hots",
    "questionEn": "Two capacitors of capacitances $C_1 = 3\\,\\mu\\text{F}$ and $C_2 = 6\\,\\mu\\text{F}$ are connected in series across a $90\\text{ V}$ source. The potential difference across the $3\\,\\mu\\text{F}$ capacitor is:",
    "questionAr": "مكثفان سعتاهما $C_1 = 3\\,\\mu\\text{F}$ و $C_2 = 6\\,\\mu\\text{F}$ متصلان على التوالي عبر مصدر جهده $90\\text{ V}$. فإن فرق الجهد بين لوحي المكثف $3\\,\\mu\\text{F}$ يساوي:",
    "optionsEn": [
      "$30\\text{ V}$",
      "$45\\text{ V}$",
      "$90\\text{ V}$",
      "$60\\text{ V}$"
    ],
    "optionsAr": [
      "$30\\text{ V}$",
      "$45\\text{ V}$",
      "$90\\text{ V}$",
      "$60\\text{ V}$"
    ],
    "correctAnswer": "$60\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "In series, $V \\propto \\frac{1}{C}$. The smaller capacitor takes the larger fraction of voltage.",
    "hintAr": "في التوالي $V \\propto 1/C$، فالمكثف الأصغر سعة يأخذ فرق الجهد الأكبر.",
    "stepByStepSolutionEn": [
      "In series, charge $q$ is constant, so $V = \\frac{q}{C}$, meaning voltage divides inversely with capacitance: $\\frac{V_1}{V_2} = \\frac{C_2}{C_1} = \\frac{6}{3} = \\frac{2}{1}$. Thus $V_1 = \\frac{2}{2 + 1} \\times 90 = \\frac{2}{3} \\times 90 = 60\\text{ V}$. Alternatively, $C_{eq} = \\frac{3 \\times 6}{3 + 6} = 2\\,\\mu\\text{F}$, $q = 2 \\times 90 = 180\\,\\mu\\text{C}$, and $V_1 = \\frac{180\\,\\mu\\text{C}}{3\\,\\mu\\text{F}} = 60\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل على التوالي تكون الشحنة متساوية، لذا يتوزع فرق الجهد عكسياً مع السعات: $\\frac{V_1}{V_2} = \\frac{C_2}{C_1} = \\frac{6}{3} = \\frac{2}{1}$. إذن $V_1 = \\frac{2}{3} \\times 90 = 60\\text{ V}$. أو بحساب الشحنة: $C_{eq} = 2\\,\\mu\\text{F} \\implies q = 180\\,\\mu\\text{C} \\implies V_1 = \\frac{180}{3} = 60\\text{ V}$."
    ],
    "teacherTipEn": "Voltage divides inversely with capacitance in series: smaller capacitance takes higher voltage.",
    "teacherTipAr": "في التوالي، المكثف ذو السعة الأقل يكون عليه فرق جهد أكبر."
  },
  {
    "id": "phys_ch4_db_hots_25",
    "titleEn": "Effect of Removing Inductor on Phase Angle in RLC Circuit",
    "titleAr": "تأثير إزالة ملف الحث على زاوية الطور في دائرة RLC",
    "difficulty": "hots",
    "questionEn": "In a series RLC circuit, $R = 40\\,\\Omega$, $X_L = 70\\,\\Omega$, and $X_C = 30\\,\\Omega$. If the inductor is completely removed from the circuit, the phase angle of the remaining circuit becomes:",
    "questionAr": "في دائرة RLC توالي، $R = 40\\,\\Omega$ و $X_L = 70\\,\\Omega$ و $X_C = 30\\,\\Omega$. إذا أُزيل ملف الحث تماماً من الدائرة، فإن زاوية الطور للدائرة المتبقية تصبح:",
    "optionsEn": [
      "$-36.87^\\circ$ (current leads voltage)",
      "$+36.87^\\circ$ (voltage leads current)",
      "$-45^\\circ$",
      "$0^\\circ$"
    ],
    "optionsAr": [
      "$-36.87^\\circ$ (التيار يسبق الجهد)",
      "$+36.87^\\circ$ (الجهد يسبق التيار)",
      "$-45^\\circ$",
      "$0^\\circ$"
    ],
    "correctAnswer": "$-36.87^\\circ$ (current leads voltage)",
    "correctIndex": 0,
    "hintEn": "With coil removed, it becomes an RC circuit: $\\tan \\theta = -\\frac{X_C}{R} = -\\frac{30}{40} = -0.75$.",
    "hintAr": "بإزالة الملف تصبح الدائرة RC: $\\tan \\theta = -\\frac{X_C}{R} = -\\frac{30}{40} = -0.75$.",
    "stepByStepSolutionEn": [
      "When the inductor is removed, the circuit contains only resistance and capacitance (RC series circuit). The phase angle is given by $\\tan \\theta = -\\frac{X_C}{R} = -\\frac{30}{40} = -0.75$. Taking the inverse tangent, $\\theta = \\arctan(-0.75) \\approx -36.87^\\circ$. The negative sign signifies that current leads the total voltage."
    ],
    "stepByStepSolutionAr": [
      "عند إزالة ملف الحث، تتحول الدائرة إلى دائرة RC (مقاومة ومكثف على التوالي). وتكون زاوية الطور: $\\tan \\theta = -\\frac{X_C}{R} = -\\frac{30}{40} = -0.75 \\implies \\theta \\approx -36.87^\\circ$. الإشارة السالبة تعني أن التيار يتقدم على فرق الجهد الكلي بخواص سعوية."
    ],
    "teacherTipEn": "Removing L turns RLC into RC, with negative phase angle: $\\tan \\theta = -X_C/R$.",
    "teacherTipAr": "إزالة الملف تحول الدائرة إلى دائرة RC بزاوية طور سالبة."
  },
  {
    "id": "phys_ch4_db_hots_26",
    "titleEn": "Phase Angle of 45 Degrees in RL Circuit: Reactance vs Resistance",
    "titleAr": "زاوية طور 45 درجة في دائرة RL: العلاقة بين المفاعلة والمقاومة",
    "difficulty": "hots",
    "questionEn": "In a series RL circuit connected to an AC source, the total voltage leads the current by an angle of $45^\\circ$. This condition guarantees that:",
    "questionAr": "في دائرة RL متصلة على التوالي بمصدر تيار متردد، يتقدم الجهد الكلي على التيار بزاوية طور مقدارها $45^\\circ$. هذا الشرط يقتضي حتماً أن:",
    "optionsEn": [
      "$X_L = 2R$",
      "$X_L = R$",
      "$X_L = \\frac{R}{2}$",
      "$X_L = \\sqrt{3}\\,R$"
    ],
    "optionsAr": [
      "$X_L = 2R$",
      "$X_L = R$",
      "$X_L = \\frac{R}{2}$",
      "$X_L = \\sqrt{3}\\,R$"
    ],
    "correctAnswer": "$X_L = R$",
    "correctIndex": 1,
    "hintEn": "$\\tan \\theta = \\frac{X_L}{R}$. For $\\theta = 45^\\circ$, $\\tan 45^\\circ = 1 \\implies X_L = R$.",
    "hintAr": "$\\tan \\theta = \\frac{X_L}{R}$. بما أن $\\tan 45^\\circ = 1$ فإن $X_L = R$.",
    "stepByStepSolutionEn": [
      "The tangent of the phase angle in an RL circuit is $\\tan \\theta = \\frac{X_L}{R}$. Since $\\theta = 45^\\circ$, we have $\\tan 45^\\circ = 1$. Therefore, $\\frac{X_L}{R} = 1 \\implies X_L = R$."
    ],
    "stepByStepSolutionAr": [
      "في دائرة المقاومة وملف الحث: $\\tan \\theta = \\frac{X_L}{R}$. وبما أن زاوية الطور $45^\\circ$ وظل الزاوية $\\tan 45^\\circ = 1$، فإن النسبة بينهما تساوي 1، أي أن $X_L = R$."
    ],
    "teacherTipEn": "Phase angle of $45^\\circ$ in RL or RC circuit means reactance equals resistance ($X = R$).",
    "teacherTipAr": "زاوية طور $45^\\circ$ تعني مباشرة أن المفاعلة تساوي المقاومة الأومية."
  },
  {
    "id": "phys_ch4_db_hots_27",
    "titleEn": "Effect on Current when Connecting Identical Inductor in Parallel",
    "titleAr": "أثر توصيل ملف حث مماثل على التوازي على شدة التيار",
    "difficulty": "hots",
    "questionEn": "A pure inductor of reactance $X_L$ is connected to an AC source of constant voltage $V$. If another identical inductor is connected in parallel with the first inductor, the total current drawn from the source:",
    "questionAr": "ملف حث نقي مفاعلته $X_L$ متصل بمصدر تيار متردد ثابت الجهد $V$. فإذا وُصل ملف حث آخر مماثل له تماماً على التوازي مع الملف الأول، فإن شدة التيار الكلي المسحوب من المصدر:",
    "optionsEn": [
      "Halves ($I/2$)",
      "Remains unchanged",
      "Doubles ($2I$)",
      "Quadruples ($4I$)"
    ],
    "optionsAr": [
      "تقل إلى النصف ($I/2$)",
      "تظل ثابتة دون تغيير",
      "تتضاعف إلى مثليها ($2I$)",
      "تزداد إلى أربعة أمثالها ($4I$)"
    ],
    "correctAnswer": "Doubles ($2I$)",
    "correctIndex": 2,
    "hintEn": "In parallel, $X_{L,eq} = X_L / 2$. Current is $I = V / X_{L,eq} = 2 V / X_L = 2I$.",
    "hintAr": "في التوازي $X_{L,eq} = X_L / 2$. شدة التيار الكلية $I = \\frac{V}{X_{L,eq}} = 2I$.",
    "stepByStepSolutionEn": [
      "Connecting two identical inductors in parallel halves the equivalent inductance and inductive reactance: $X'_{L} = \\frac{X_L}{2}$. Because the source voltage is constant, the total current becomes $I' = \\frac{V}{X'_L} = \\frac{V}{X_L / 2} = 2 \\frac{V}{X_L} = 2I$."
    ],
    "stepByStepSolutionAr": [
      "عند توصيل ملفين متماثلين على التوازي، تقل المفاعلة الحثية المكافئة إلى النصف: $X'_L = \\frac{X_L}{2}$. وبثبوت جهد المصدر يتضاعف التيار الكلي المسحوب: $I' = \\frac{V}{X'_L} = 2I$."
    ],
    "teacherTipEn": "Parallel inductors behave just like parallel resistors: half reactance $\\implies$ double current.",
    "teacherTipAr": "توصيل الملفات على التوازي يماثل المقاومات: نصف المفاعلة يعني مضاعفة التيار."
  },
  {
    "id": "phys_ch4_db_hots_28",
    "titleEn": "Effect on Current when Connecting Identical Capacitor in Parallel",
    "titleAr": "أثر توصيل مكثف مماثل على التوازي على شدة التيار",
    "difficulty": "hots",
    "questionEn": "A capacitor of capacitance $C$ is connected to an AC source of constant voltage and frequency. If an identical capacitor is connected in parallel with it, the total current drawn from the source:",
    "questionAr": "مكثف سعته $C$ متصل بمصدر تيار متردد ثابت الجهد والتردد. إذا وُصل مكثف آخر مماثل له على التوازي معه، فإن شدة التيار الكلي المسحوب من المصدر:",
    "optionsEn": [
      "Halves ($I/2$)",
      "Remains unchanged",
      "Decreases to zero",
      "Doubles ($2I$)"
    ],
    "optionsAr": [
      "تقل إلى النصف ($I/2$)",
      "تظل ثابتة دون تغيير",
      "تنعدم تماماً",
      "تتضاعف إلى مثليها ($2I$)"
    ],
    "correctAnswer": "Doubles ($2I$)",
    "correctIndex": 3,
    "hintEn": "Parallel capacitors: $C_{eq} = C + C = 2C \\implies X_{C,eq} = X_C / 2 \\implies I' = 2I$.",
    "hintAr": "في توازي المكثفات: $C_{eq} = 2C \\implies X_{C,eq} = X_C / 2 \\implies I' = 2I$.",
    "stepByStepSolutionEn": [
      "In parallel, capacitances add: $C' = C + C = 2C$. Capacitive reactance is inversely proportional to capacitance: $X'_C = \\frac{1}{2\\pi f (2C)} = \\frac{X_C}{2}$. With constant voltage $V$, total current is $I' = \\frac{V}{X'_C} = 2 \\frac{V}{X_C} = 2I$."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل على التوازي تجمع السعات: $C' = 2C$. فتقل المفاعلة السعوية الكلية إلى النصف $X'_C = \\frac{X_C}{2}$. وبثبوت فرق الجهد، يتضاعف التيار الكلي المار في الدائرة إلى مثليه ($2I$)."
    ],
    "teacherTipEn": "Parallel capacitors increase total capacitance, halving reactance and doubling current.",
    "teacherTipAr": "توصيل مكثف على التوازي يضاعف السعة وينصف المفاعلة فيتضاعف التيار."
  },
  {
    "id": "phys_ch4_db_hots_29",
    "titleEn": "Voltmeter Readings across R and C in Series",
    "titleAr": "قراءات الفولتميتر على مقاومة ومكثف على التوالي",
    "difficulty": "hots",
    "questionEn": "In a series RC circuit, the reading of an AC voltmeter across the resistor is $V_R = 60\\text{ V}$, and the reading across the capacitor is $V_C = 80\\text{ V}$. The reading of a voltmeter across the AC source is:",
    "questionAr": "في دائرة RC موصلة على التوالي، قراءة فولتميتر تيار متردد على طرفي المقاومة $V_R = 60\\text{ V}$، وقراءة فولتميتر على طرفي المكثف $V_C = 80\\text{ V}$. فإن قراءة الفولتميتر المتصل بمصدر التيار المتردد تساوي:",
    "optionsEn": [
      "$100\\text{ V}$",
      "$140\\text{ V}$",
      "$20\\text{ V}$",
      "$48\\text{ V}$"
    ],
    "optionsAr": [
      "$100\\text{ V}$",
      "$140\\text{ V}$",
      "$20\\text{ V}$",
      "$48\\text{ V}$"
    ],
    "correctAnswer": "$100\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$V = \\sqrt{V_R^2 + V_C^2} = \\sqrt{60^2 + 80^2} = 100\\text{ V}$.",
    "hintAr": "$V = \\sqrt{V_R^2 + V_C^2} = \\sqrt{60^2 + 80^2} = 100\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Because $V_R$ and $V_C$ have a phase difference of $90^\\circ$, their resultant is found by vector addition (Pythagorean theorem): $V = \\sqrt{V_R^2 + V_C^2} = \\sqrt{60^2 + 80^2} = \\sqrt{3600 + 6400} = \\sqrt{10000} = 100\\text{ V}$. Direct arithmetic addition ($60 + 80 = 140\\text{ V}$) is incorrect because of the phase angle."
    ],
    "stepByStepSolutionAr": [
      "بين الجهد عبر المقاومة والجهد عبر المكثف فرق طور مقداره $90^\\circ$ (متعامدان)، لذا يحسب الجهد الكلي بالجمع الاتجاهي: $V = \\sqrt{V_R^2 + V_C^2} = \\sqrt{60^2 + 80^2} = 100\\text{ V}$. ولا يصح الجمع الجبري المباشر لاختلاف الطور."
    ],
    "teacherTipEn": "Orthogonal voltages combine by Pythagoras: $V = \\sqrt{V_R^2 + V_C^2}$.",
    "teacherTipAr": "الجهود المتعامدة تجمع بفيثاغورس وليس جبرياً."
  },
  {
    "id": "phys_ch4_db_hots_30",
    "titleEn": "Voltmeter Readings across R and L in Series",
    "titleAr": "قراءات الفولتميتر على مقاومة وملف حث نقي على التوالي",
    "difficulty": "hots",
    "questionEn": "In a series RL circuit, the voltage across the source is $V = 50\\text{ V}$, and the voltage across the resistor is $V_R = 30\\text{ V}$. The voltage across the pure inductor ($V_L$) is:",
    "questionAr": "في دائرة RL متصلة على التوالي، فرق جهد المصدر $V = 50\\text{ V}$ وفرق الجهد عبر المقاومة $V_R = 30\\text{ V}$. فإن فرق الجهد بين طرفي ملف الحث النقي ($V_L$) يساوي:",
    "optionsEn": [
      "$20\\text{ V}$",
      "$40\\text{ V}$",
      "$80\\text{ V}$",
      "$\\sqrt{50^2 + 30^2} \\approx 58.3\\text{ V}$"
    ],
    "optionsAr": [
      "$20\\text{ V}$",
      "$40\\text{ V}$",
      "$80\\text{ V}$",
      "$\\sqrt{50^2 + 30^2} \\approx 58.3\\text{ V}$"
    ],
    "correctAnswer": "$40\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "$V^2 = V_R^2 + V_L^2 \\implies V_L = \\sqrt{V^2 - V_R^2} = \\sqrt{50^2 - 30^2} = 40\\text{ V}$.",
    "hintAr": "$V_L = \\sqrt{V^2 - V_R^2} = \\sqrt{50^2 - 30^2} = 40\\text{ V}$.",
    "stepByStepSolutionEn": [
      "In a series RL circuit: $V = \\sqrt{V_R^2 + V_L^2}$. Squaring both sides: $V^2 = V_R^2 + V_L^2 \\implies V_L^2 = 50^2 - 30^2 = 2500 - 900 = 1600$. Taking the square root: $V_L = \\sqrt{1600} = 40\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "في دائرة RL: $V = \\sqrt{V_R^2 + V_L^2}$. بتربيع الطرفين: $V_L = \\sqrt{V^2 - V_R^2} = \\sqrt{50^2 - 30^2} = \\sqrt{1600} = 40\\text{ V}$."
    ],
    "teacherTipEn": "Rearrange $V^2 = V_R^2 + V_L^2$ to solve for $V_L = \\sqrt{V^2 - V_R^2}$.",
    "teacherTipAr": "استخدم قانون فيثاغورس لحساب جهد الملف من الجهد الكلي وجهد المقاومة."
  },
  {
    "id": "phys_ch4_db_hots_31",
    "titleEn": "Power Factor at Resonance",
    "titleAr": "معامل القدرة عند الرنين",
    "difficulty": "hots",
    "questionEn": "In an AC circuit at resonance, the power factor ($\\cos \\theta$) of the circuit is equal to:",
    "questionAr": "في دائرة تيار متردد في حالة رنين، معامل القدرة للدائرة ($\\cos \\theta$) يساوي:",
    "optionsEn": [
      "$0$",
      "$0.5$",
      "$1$ (unity)",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "optionsAr": [
      "$0$",
      "$0.5$",
      "$1$ (الواحد الصحيح)",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "correctAnswer": "$1$ (unity)",
    "correctIndex": 2,
    "hintEn": "At resonance, $\\theta = 0^\\circ \\implies \\cos 0^\\circ = 1$.",
    "hintAr": "في حالة الرنين زاوية الطور $\\theta = 0^\\circ \\implies \\cos 0^\\circ = 1$.",
    "stepByStepSolutionEn": [
      "At resonance, $X_L = X_C$, so impedance is purely resistive ($Z = R$). The phase angle between voltage and current is $\\theta = 0^\\circ$. Therefore, the power factor is $\\cos \\theta = \\cos(0^\\circ) = 1$. Real power equals apparent power: $P_{real} = V \\cdot I$."
    ],
    "stepByStepSolutionAr": [
      "في حالة الرنين تلغي المفاعلتان إحداهما الأخرى وتصبح المعاوقة مساوية للمقاومة $Z = R$، وتكون زاوية الطور بين الجهد والتيار صفراً ($\\theta = 0^\\circ$). وبالتالي فإن معامل القدرة $\\cos \\theta = \\cos(0^\\circ) = 1$، وتكون القدرة الفعالة مساوية للقدرة الظاهرية."
    ],
    "teacherTipEn": "Unity power factor ($\\cos\\theta = 1$) is a defining signature of resonance.",
    "teacherTipAr": "معامل القدرة يساوي الواحد الصحيح عند الرنين."
  },
  {
    "id": "phys_ch4_db_hots_32",
    "titleEn": "Frequency at which Reactance of Inductor Equals that of Capacitor",
    "titleAr": "التردد الذي تتساوى عنده مفاعلة الملف مع مفاعلة المكثف",
    "difficulty": "hots",
    "questionEn": "An inductor of $L = \\frac{1}{\\pi}\\text{ H}$ and a capacitor of $C = \\frac{1}{\\pi}\\,\\mu\\text{F}$ are connected in series with an AC source. The frequency at which the inductive reactance equals the capacitive reactance is:",
    "questionAr": "ملف حث معامل حثه $L = \\frac{1}{\\pi}\\text{ H}$ ومكثف سعته $C = \\frac{1}{\\pi}\\,\\mu\\text{F}$ متصلان على التوالي بمصدر تيار متردد. فإن التردد الذي تتساوى عنده المفاعلة الحثية مع المفاعلة السعوية يساوي:",
    "optionsEn": [
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$",
      "$500\\text{ Hz}$"
    ],
    "optionsAr": [
      "$1000\\text{ Hz}$",
      "$250\\text{ Hz}$",
      "$50\\text{ Hz}$",
      "$500\\text{ Hz}$"
    ],
    "correctAnswer": "$500\\text{ Hz}$",
    "correctIndex": 3,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}} = \\frac{1}{2\\pi \\sqrt{\\frac{1}{\\pi} \\times \\frac{10^{-6}}{\\pi}}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$.",
    "hintAr": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}} = \\frac{1}{2\\pi \\sqrt{10^{-6}/\\pi^2}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$.",
    "stepByStepSolutionEn": [
      "The reactances are equal at the resonance frequency: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Substituting: $LC = \\left(\\frac{1}{\\pi}\\right)\\left(\\frac{10^{-6}}{\\pi}\\right) = \\frac{10^{-6}}{\\pi^2}$. Taking the square root: $\\sqrt{LC} = \\frac{10^{-3}}{\\pi}$. Thus: $f_0 = \\frac{1}{2\\pi \\left(\\frac{10^{-3}}{\\pi}\\right)} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "تتساوى المفاعلتان عند تردد الرنين: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. بالتعويض عن القيم: $LC = \\frac{10^{-6}}{\\pi^2} \\implies \\sqrt{LC} = \\frac{10^{-3}}{\\pi}$. إذن $f_0 = \\frac{\\pi}{2\\pi \\times 10^{-3}} = \\frac{1000}{2} = 500\\text{ Hz}$."
    ],
    "teacherTipEn": "$\\pi$ in denominator of L and C cancels out cleanly with $2\\pi$ in resonance formula.",
    "teacherTipAr": "وجود $\\pi$ في مقام المعاملات يختصر بدقة مع $\\pi$ في قانون الرنين."
  },
  {
    "id": "phys_ch4_db_hots_33",
    "titleEn": "Capacitor Current vs Frequency with AC Dynamo",
    "titleAr": "شدة التيار في مكثف نقي متصل بدينامو تيار متردد",
    "difficulty": "hots",
    "questionEn": "A capacitor of capacitance $C$ is connected across the terminals of an AC dynamo (negligible internal resistance). If the rotational speed of the dynamo coil is doubled, the electric current passing through the capacitor:",
    "questionAr": "مكثف سعته $C$ اتصل بطرفي دينامو تيار متردد مهمل المقاومة الداخلية. فإذا تضاعفت سرعة دوران ملف الدينامو، فإن شدة التيار المار في المكثف:",
    "optionsEn": [
      "Quadruples ($4I$)",
      "Doubles ($2I$)",
      "Remains constant",
      "Halves ($I/2$)"
    ],
    "optionsAr": [
      "تزداد إلى أربعة أمثالها ($4I$)",
      "تتضاعف إلى مثليها ($2I$)",
      "تظل ثابتة",
      "تقل إلى النصف ($I/2$)"
    ],
    "correctAnswer": "Quadruples ($4I$)",
    "correctIndex": 0,
    "hintEn": "Dynamo voltage $V \\propto f$, and $X_C \\propto 1/f$. Thus $I = \\frac{V}{X_C} \\propto \\frac{f}{1/f} = f^2$.",
    "hintAr": "جهد الدينامو $V \\propto f$ والمفاعلة $X_C \\propto 1/f$. إذن $I = \\frac{V}{X_C} \\propto f^2$. مضاعفة $f$ تجعل التيار $4I$.",
    "stepByStepSolutionEn": [
      "For an AC dynamo, output voltage is proportional to frequency: $V \\propto f$. The capacitive reactance is inversely proportional to frequency: $X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$. Therefore, the current is $I = \\frac{V}{X_C} \\propto \\frac{f}{1/f} = f^2$. Doubling the rotation speed ($2f$) quadruples the current: $I' \\propto (2f)^2 = 4f^2 = 4I$."
    ],
    "stepByStepSolutionAr": [
      "في دينامو التيار المتردد يتناسب فرق الجهد طردياً مع التردد: $V \\propto f$. والمفاعلة السعوية تتناسب عكسياً مع التردد: $X_C \\propto \\frac{1}{f}$. فتكون شدة التيار: $I = \\frac{V}{X_C} \\propto f \\times f = f^2$. فعند مضاعفة سرعة دوران الدينامو تزداد شدة التيار المار في المكثف إلى أربعة أمثالها ($4I$)."
    ],
    "teacherTipEn": "Capacitor with AC dynamo: $I \\propto f^2$. Extremely famous ministerial question!",
    "teacherTipAr": "مكثف مع دينامو: $I \\propto f^2$، سؤال شهير جداً في امتحانات الثانوية العامة."
  },
  {
    "id": "phys_ch4_db_hots_34",
    "titleEn": "Resistor Current vs Frequency with AC Dynamo",
    "titleAr": "شدة التيار في مقاومة أومية متصلة بدينامو تيار متردد",
    "difficulty": "hots",
    "questionEn": "A non-inductive resistor $R$ is connected across the terminals of an AC dynamo (negligible internal resistance). If the rotational speed of the dynamo coil is doubled, the electric current passing through the resistor:",
    "questionAr": "مقاومة أومية عديمة الحث $R$ اتصلت بطرفي دينامو تيار متردد مهمل المقاومة الداخلية. فإذا تضاعفت سرعة دوران ملف الدينامو، فإن شدة التيار المار في المقاومة:",
    "optionsEn": [
      "Quadruples ($4I$)",
      "Doubles ($2I$)",
      "Remains unchanged",
      "Halves ($I/2$)"
    ],
    "optionsAr": [
      "تزداد إلى أربعة أمثالها ($4I$)",
      "تتضاعف إلى مثليها ($2I$)",
      "تظل ثابتة دون تغيير",
      "تقل إلى النصف ($I/2$)"
    ],
    "correctAnswer": "Doubles ($2I$)",
    "correctIndex": 1,
    "hintEn": "Dynamo voltage $V \\propto f$. Resistance $R$ is independent of $f$. Thus $I = V/R \\propto f$.",
    "hintAr": "جهد الدينامو $V \\propto f$ والمقاومة $R$ ثابتة لا تعتمد على التردد. إذن $I \\propto f$.",
    "stepByStepSolutionEn": [
      "For an AC dynamo, $V = 2\\pi N B A f \\propto f$. The ohmic resistance $R$ does not depend on frequency. Therefore, $I = \\frac{V}{R} \\propto f$. When frequency doubles ($2f$), the current directly doubles ($2I$)."
    ],
    "stepByStepSolutionAr": [
      "جهد الدينامو يتناسب طردياً مع التردد: $V \\propto f$. والمقاومة الأومية النقية ثابتة لا تتأثر بالتردد. فتكون شدة التيار: $I = \\frac{V}{R} \\propto f$. وبمضاعفة سرعة الدوران يتضاعف التيار إلى مثليه ($2I$)."
    ],
    "teacherTipEn": "Resistor with dynamo: $I \\propto f$. Inductor with dynamo: $I = \\text{const}$. Capacitor with dynamo: $I \\propto f^2$.",
    "teacherTipAr": "ملخص الدينامو: مع المقاومة $I \\propto f$، مع الملف $I$ ثابت، مع المكثف $I \\propto f^2$."
  },
  {
    "id": "phys_ch4_db_hots_35",
    "titleEn": "Current across Pure Inductor with AC Dynamo",
    "titleAr": "شدة التيار في ملف حث نقي متصل بدينامو",
    "difficulty": "hots",
    "questionEn": "A pure inductor of inductance $L$ is connected across an AC dynamo. If the rotational speed of the dynamo coil is tripled, the electric current passing through the inductor:",
    "questionAr": "ملف حث نقي معامل حثه $L$ اتصل بطرفي دينامو تيار متردد. فإذا زادت سرعة دوران ملف الدينامو إلى 3 أمثالها، فإن شدة التيار المار في الملف:",
    "optionsEn": [
      "Triples ($3I$)",
      "Decreases to one-third ($I/3$)",
      "Remains completely unchanged",
      "Increases to nine times ($9I$)"
    ],
    "optionsAr": [
      "تزداد إلى 3 أمثالها ($3I$)",
      "تقل إلى الثلث ($I/3$)",
      "تظل ثابتة دون أي تغيير",
      "تزداد إلى 9 أمثالها ($9I$)"
    ],
    "correctAnswer": "Remains completely unchanged",
    "correctIndex": 2,
    "hintEn": "Dynamo $V \\propto f$, and coil $X_L \\propto f$. Current $I = V / X_L \\propto f/f = \\text{constant}$.",
    "hintAr": "جهد الدينامو $V \\propto f$ ومفاعلة الملف $X_L \\propto f$. التيار $I = V / X_L$ مستقل تماماً عن التردد.",
    "stepByStepSolutionEn": [
      "Output voltage of the dynamo is $V = 2\\pi N B A f$. Inductive reactance of the coil is $X_L = 2\\pi f L$. Current is $I = \\frac{V}{X_L} = \\frac{2\\pi N B A f}{2\\pi f L} = \\frac{NBA}{L}$. Because frequency cancels out entirely, tripling the speed has zero effect on the current."
    ],
    "stepByStepSolutionAr": [
      "القوة الدافعة للدينامو $V = 2\\pi N B A f$ والمفاعلة الحثية $X_L = 2\\pi f L$. شدة التيار: $I = \\frac{V}{X_L} = \\frac{NBA}{L}$. يختصر التردد تماماً من البسط والمقام، وبالتالي فإن زيادة سرعة الدوران إلى 3 أمثالها لا تغير شدة التيار المار في الملف النقي."
    ],
    "teacherTipEn": "Independent of frequency: $I_{coil} = \\frac{NBA}{L}$.",
    "teacherTipAr": "تيار الملف النقي المتصل بدينامو لا يعتمد إطلاقاً على تردد الدوران."
  },
  {
    "id": "phys_ch4_db_hots_36",
    "titleEn": "Phase Relationship when X_L = R in RL Circuit",
    "titleAr": "علاقة الطور عندما تكون المفاعلة مساوية للمقاومة في دائرة RL",
    "difficulty": "hots",
    "questionEn": "In a series circuit containing an ohmic resistor and an inductor, the inductive reactance equals the resistance ($X_L = R$). The phase angle between the total voltage and current is:",
    "questionAr": "في دائرة تيار متردد تحتوي على مقاومة أومية وملف حث متصلين على التوالي، إذا كانت المفاعلة الحثية مساوية للمقاومة الأومية ($X_L = R$). فإن زاوية الطور بين الجهد الكلي والتيار تكون:",
    "optionsEn": [
      "Current leads total voltage by $45^\\circ$",
      "Total voltage leads current by $90^\\circ$",
      "Current and total voltage are in phase ($0^\\circ$)",
      "Total voltage leads current by $45^\\circ$"
    ],
    "optionsAr": [
      "التيار يسبق الجهد الكلي بزاوية $45^\\circ$",
      "الجهد الكلي يسبق التيار بزاوية $90^\\circ$",
      "التيار والجهد متفقان في الطور ($0^\\circ$)",
      "الجهد الكلي يسبق التيار بزاوية $45^\\circ$"
    ],
    "correctAnswer": "Total voltage leads current by $45^\\circ$",
    "correctIndex": 3,
    "hintEn": "In RL circuit, voltage leads current: $\\tan \\theta = X_L / R = 1 \\implies \\theta = +45^\\circ$.",
    "hintAr": "في دائرة RL يسبق الجهد التيار: $\\tan \\theta = X_L / R = 1 \\implies \\theta = +45^\\circ$.",
    "stepByStepSolutionEn": [
      "The phase angle is $\\tan \\theta = \\frac{X_L}{R}$. Since $X_L = R$, $\\tan \\theta = 1$, which gives $\\theta = +45^\\circ$. In an inductive circuit, the total voltage leads the current by $45^\\circ$ ($\\pi/4\\text{ rad}$)."
    ],
    "stepByStepSolutionAr": [
      "زاوية الطور تعطى بـ $\\tan \\theta = \\frac{X_L}{R}$. وبما أن $X_L = R$، فإن $\\tan \\theta = 1 \\implies \\theta = 45^\\circ$. وفي الدوائر الحثية يتقدم الجهد الكلي دائماً على التيار بهذه الزاوية."
    ],
    "teacherTipEn": "Positive $\\theta$ means voltage leads current.",
    "teacherTipAr": "زاوية الطور الموجبة تعني تقدم الجهد على التيار."
  },
  {
    "id": "phys_ch4_db_hots_37",
    "titleEn": "Phase Relationship when X_C = R in RC Circuit",
    "titleAr": "علاقة الطور عندما تكون المفاعلة مساوية للمقاومة في دائرة RC",
    "difficulty": "hots",
    "questionEn": "In a series circuit containing an ohmic resistor and a capacitor, $X_C = R$. The phase angle between the total voltage and current is:",
    "questionAr": "في دائرة تيار متردد تحتوي على مقاومة أومية ومكثف متصلين على التوالي، إذا كانت $X_C = R$. فإن زاوية الطور بين الجهد الكلي والتيار تكون:",
    "optionsEn": [
      "Total voltage lags current by $45^\\circ$ (current leads by $45^\\circ$)",
      "Total voltage leads current by $45^\\circ$",
      "Total voltage lags current by $90^\\circ$",
      "Total voltage and current are in phase"
    ],
    "optionsAr": [
      "الجهد الكلي يتأخر عن التيار بزاوية $45^\\circ$ (التيار يسبق الجهد بـ $45^\\circ$)",
      "الجهد الكلي يسبق التيار بزاوية $45^\\circ$",
      "الجهد الكلي يتأخر عن التيار بزاوية $90^\\circ$",
      "الجهد الكلي والتيار متفقان في الطور"
    ],
    "correctAnswer": "Total voltage lags current by $45^\\circ$ (current leads by $45^\\circ$)",
    "correctIndex": 0,
    "hintEn": "In RC circuit, $\\tan \\theta = -X_C / R = -1 \\implies \\theta = -45^\\circ$.",
    "hintAr": "في دائرة RC: $\\tan \\theta = -X_C / R = -1 \\implies \\theta = -45^\\circ$.",
    "stepByStepSolutionEn": [
      "In a capacitive circuit, the phase angle is $\\tan \\theta = -\\frac{X_C}{R} = -1 \\implies \\theta = -45^\\circ$. This means the total voltage lags behind the current by $45^\\circ$, or equivalently, the current leads the voltage by $45^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "في دائرة المقاومة والمكثف: $\\tan \\theta = -\\frac{X_C}{R} = -1 \\implies \\theta = -45^\\circ$. الإشارة السالبة تدل على أن الجهد الكلي يتأخر عن التيار بزاوية $45^\\circ$ (أو التيار يتقدم على الجهد بـ $45^\\circ$)."
    ],
    "teacherTipEn": "Negative phase angle in RC circuit indicates voltage lags current.",
    "teacherTipAr": "الزاوية السالبة في دائرة RC تعني تأخر الجهد عن التيار."
  },
  {
    "id": "phys_ch4_db_hots_38",
    "titleEn": "Impedance when X_L = 2R in RL Circuit",
    "titleAr": "معاوقة دائرة RL عندما تكون المفاعلة الحثية ضعفي المقاومة",
    "difficulty": "hots",
    "questionEn": "In a series RL circuit, the inductive reactance of the coil is twice the resistance of the resistor ($X_L = 2R$). The total impedance of the circuit is:",
    "questionAr": "في دائرة RL توالي، المفاعلة الحثية للملف تساوي مثلي المقاومة الأومية ($X_L = 2R$). فإن المعاوقة الكلية للدائرة تساوي:",
    "optionsEn": [
      "$3\\,R$",
      "$\\sqrt{5}\\,R$",
      "$\\sqrt{3}\\,R$",
      "$5\\,R$"
    ],
    "optionsAr": [
      "$3\\,R$",
      "$\\sqrt{5}\\,R$",
      "$\\sqrt{3}\\,R$",
      "$5\\,R$"
    ],
    "correctAnswer": "$\\sqrt{5}\\,R$",
    "correctIndex": 1,
    "hintEn": "$Z = \\sqrt{R^2 + X_L^2} = \\sqrt{R^2 + (2R)^2} = \\sqrt{5R^2} = \\sqrt{5}\\,R$.",
    "hintAr": "$Z = \\sqrt{R^2 + X_L^2} = \\sqrt{R^2 + 4R^2} = \\sqrt{5}\\,R$.",
    "stepByStepSolutionEn": [
      "Impedance is $Z = \\sqrt{R^2 + X_L^2}$. Substituting $X_L = 2R$ gives $Z = \\sqrt{R^2 + (2R)^2} = \\sqrt{R^2 + 4R^2} = \\sqrt{5R^2} = \\sqrt{5}\\,R \\approx 2.236\\,R$."
    ],
    "stepByStepSolutionAr": [
      "المعاوقة الكلية: $Z = \\sqrt{R^2 + X_L^2}$. بالتعويض عن $X_L = 2R$: $Z = \\sqrt{R^2 + (2R)^2} = \\sqrt{R^2 + 4R^2} = \\sqrt{5}\\,R$."
    ],
    "teacherTipEn": "Don't add algebraically: $\\sqrt{R^2 + (2R)^2} = \\sqrt{5}R$, not $3R$.",
    "teacherTipAr": "انتبه لجمع المتجهات تحت الجذر: $\\sqrt{1 + 4} = \\sqrt{5}$ وليس جمعاً عادياً."
  },
  {
    "id": "phys_ch4_db_hots_39",
    "titleEn": "Connecting DC Source to Pure Inductor: Rate of Current Growth",
    "titleAr": "معدل نمو التيار لحظة غلق دائرة ملف حث مع بطارية",
    "difficulty": "hots",
    "questionEn": "A coil of self-inductance $L = 0.2\\text{ H}$ and negligible resistance is connected across a $12\\text{ V}$ battery of negligible internal resistance. At the instant of closing the circuit, the rate of change of electric current ($\\frac{\\Delta I}{\\Delta t}$) is:",
    "questionAr": "ملف حث معامل حثه $L = 0.2\\text{ H}$ ومهمل المقاومة الأومية وُصل بطرفي بطارية قوتها الدافعة $12\\text{ V}$ مهملة المقاومة الداخلية. لحظة غلق الدائرة، فإن معدل نمو التيار ($\\frac{\\Delta I}{\\Delta t}$) يساوي:",
    "optionsEn": [
      "$2.4\\text{ A/s}$",
      "$0\\text{ A/s}$",
      "$60\\text{ A/s}$",
      "$120\\text{ A/s}$"
    ],
    "optionsAr": [
      "$2.4\\text{ A/s}$",
      "$0\\text{ A/s}$",
      "$60\\text{ A/s}$",
      "$120\\text{ A/s}$"
    ],
    "correctAnswer": "$60\\text{ A/s}$",
    "correctIndex": 2,
    "hintEn": "At the instant of switch closure, back-emf equals battery voltage: $V_B = L \\frac{\\Delta I}{\\Delta t}$.",
    "hintAr": "لحظة الغلق تكون القوة الدافعة المستحثة العكسية مساوية لجهد البطارية: $V_B = L \\frac{\\Delta I}{\\Delta t}$.",
    "stepByStepSolutionEn": [
      "At the instant of closing the switch, current is zero ($I = 0$), so ohmic drop is zero ($I R = 0$). By Faraday's/Henry's law, the back-emf induced in the coil completely opposes the battery: $V_B = L \\frac{\\Delta I}{\\Delta t}$. Therefore, $\\frac{\\Delta I}{\\Delta t} = \\frac{V_B}{L} = \\frac{12}{0.2} = 60\\text{ A/s}$."
    ],
    "stepByStepSolutionAr": [
      "لحظة غلق الدائرة تكون شدة التيار لحظياً صفراً ($I = 0$) وتكون القوة الدافعة الكهربية المستحثة العكسية في أقصى قيمة لها ومساوية لقوة البطارية: $V_B = L \\frac{\\Delta I}{\\Delta t}$. ومنها يكون معدل نمو التيار: $\\frac{\\Delta I}{\\Delta t} = \\frac{12}{0.2} = 60\\text{ A/s}$."
    ],
    "teacherTipEn": "At $t = 0$, rate of current growth is maximum: $\\Delta I / \\Delta t = V_B / L$.",
    "teacherTipAr": "لحظة الغلق يكون معدل نمو التيار أقصى ما يمكن ويساوي $V_B / L$."
  },
  {
    "id": "phys_ch4_db_hots_40",
    "titleEn": "Dielectric Insertion in Resonant Circuit: Effect on Resonance",
    "titleAr": "إدخال مادة عازلة في مكثف دائرة رنين وأثرها على حالة الرنين",
    "difficulty": "hots",
    "questionEn": "A series RLC circuit is in resonance with an AC source. If a slab of dielectric material (relative permittivity $\\varepsilon_r > 1$) is inserted between the plates of the capacitor, the circuit:",
    "questionAr": "دائرة RLC على التوالي في حالة رنين مع مصدر تيار متردد. إذا أُدخل لوح من مادة عازلة ثابت عزلها ($\\varepsilon_r > 1$) بين لوحي المكثف، فإن الدائرة:",
    "optionsEn": [
      "Remains in resonance and its current increases",
      "Remains in resonance and its current remains unchanged",
      "Becomes a purely inductive circuit with zero impedance",
      "Leaves the resonance state and its total impedance increases"
    ],
    "optionsAr": [
      "تظل في حالة رنين وتزداد شدة تيارها",
      "تظل في حالة رنين ويظل تيارها ثابتاً",
      "تتحول إلى دائرة حثية نقية معاوقاتها صفر",
      "تخرج من حالة الرنين وتزداد معاوقاتها الكلية"
    ],
    "correctAnswer": "Leaves the resonance state and its total impedance increases",
    "correctIndex": 3,
    "hintEn": "Dielectric increases $C \\implies X_C$ decreases, disrupting $X_L = X_C$. Thus $Z > R$ and $I$ drops.",
    "hintAr": "المادة العازلة تزيد السعة $C \\implies$ تقل $X_C \\implies$ يختل شرط الرنين وتزداد المعاوقة $Z > R$ ويقل التيار.",
    "stepByStepSolutionEn": [
      "Inserting a dielectric increases capacitance ($C' = \\varepsilon_r C$). Consequently, capacitive reactance decreases: $X'_C = \\frac{1}{2\\pi f C'} < X_C$. Since originally $X_L = X_C$, now $X_L > X'_C$. The circuit leaves resonance, impedance increases from $Z = R$ to $Z = \\sqrt{R^2 + (X_L - X'_C)^2} > R$, and the current decreases."
    ],
    "stepByStepSolutionAr": [
      "إدخال مادة عازلة يزيد من سعة المكثف ($C' = \\varepsilon_r C$)، فتقل مفاعلته السعوية $X'_C < X_C$. وبما أن الدائرة كانت في رنين ($X_L = X_C$)، تصبح الآن $X_L > X'_C$ فيختل التساوي وتخرج الدائرة من حالة الرنين. وتزداد المعاوقة عن $R$ إلى $Z = \\sqrt{R^2 + (X_L - X'_C)^2}$، وبالتالي تقل شدة التيار."
    ],
    "teacherTipEn": "Any change in $L$ or $C$ breaks the resonance condition, increasing impedance.",
    "teacherTipAr": "أي تغيير في سعة المكثف أو حث الملف يخرج الدائرة من الرنين ويزيد المعاوقة."
  },
  {
    "id": "phys_ch4_db_hots_41",
    "titleEn": "Adding Parallel Capacitor to Restore Resonance after Increasing Frequency",
    "titleAr": "إعادة ضبط الرنين عند زيادة التردد بإضافة مكثف",
    "difficulty": "hots",
    "questionEn": "A series RLC circuit is in resonance at frequency $f$. If the source frequency is DOUBLED ($2f$), what modification to the capacitance $C$ restores resonance without changing $L$?",
    "questionAr": "دائرة RLC في حالة رنين عند تردد $f$. إذا تضاعف تردد المصدر إلى ($2f$)، فما التعديل الواجب إجراؤه على سعة المكثف $C$ لإعادة الدائرة لحالة الرنين مع ثبوت $L$؟",
    "optionsEn": [
      "Reduce the capacitance to one-fourth ($C/4$)",
      "Double the capacitance ($2C$)",
      "Halve the capacitance ($C/2$)",
      "Quadruple the capacitance ($4C$)"
    ],
    "optionsAr": [
      "تقليل سعة المكثف إلى الربع ($C/4$)",
      "مضاعفة سعة المكثف إلى مثليها ($2C$)",
      "تقليل سعة المكثف إلى النصف ($C/2$)",
      "زيادة سعة المكثف إلى أربعة أمثالها ($4C$)"
    ],
    "correctAnswer": "Reduce the capacitance to one-fourth ($C/4$)",
    "correctIndex": 0,
    "hintEn": "$f_0 \\propto 1/\\sqrt{C} \\implies C \\propto 1/f_0^2$. Doubling $f_0$ requires $C' = C/4$.",
    "hintAr": "$f_0 \\propto 1/\\sqrt{C} \\implies C \\propto 1/f_0^2$. مضاعفة التردد تتطلب تقليل السعة للربع.",
    "stepByStepSolutionEn": [
      "From the resonance frequency formula $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$, we have $C = \\frac{1}{4\\pi^2 f_0^2 L} \\propto \\frac{1}{f_0^2}$. If frequency is doubled ($f' = 2f$), the required capacitance becomes $C' = \\frac{C}{(2)^2} = \\frac{C}{4}$."
    ],
    "stepByStepSolutionAr": [
      "من قانون تردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$، نجد أن $C \\propto \\frac{1}{f^2}$. فلكي يتضاعف تردد الرنين إلى مثليه ($2f$) يجب تقليل سعة المكثف إلى ربع قيمتها الأصلية ($C/4$)."
    ],
    "teacherTipEn": "Resonance frequency relates to capacitance quadratically: $f \\propto 1/\\sqrt{C} \\implies C \\propto 1/f^2$.",
    "teacherTipAr": "تردد الرنين يتناسب عكسياً مع جذر السعة، فمضاعفة التردد تتطلب ربع السعة."
  },
  {
    "id": "phys_ch4_db_hots_42",
    "titleEn": "Voltmeter across Capacitor in Series Resonant Circuit",
    "titleAr": "قراءة فولتميتر على مكثف في دائرة رنين",
    "difficulty": "hots",
    "questionEn": "In a series resonant circuit, the source voltage is $V = 220\\text{ V}$, $R = 11\\,\\Omega$, and $X_C = 50\\,\\Omega$. The reading of an AC voltmeter connected across the capacitor is:",
    "questionAr": "في دائرة رنين على التوالي، جهد المصدر $V = 220\\text{ V}$ والمقاومة $R = 11\\,\\Omega$ والمفاعلة السعوية $X_C = 50\\,\\Omega$. فإن قراءة فولتميتر متصل بين لوحي المكثف تساوي:",
    "optionsEn": [
      "$220\\text{ V}$",
      "$1000\\text{ V}$",
      "$550\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "optionsAr": [
      "$220\\text{ V}$",
      "$1000\\text{ V}$",
      "$550\\text{ V}$",
      "$0\\text{ V}$"
    ],
    "correctAnswer": "$1000\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "At resonance, $I = V / R = 220 / 11 = 20\\text{ A}$. $V_C = I \\cdot X_C = 20 \\times 50 = 1000\\text{ V}$.",
    "hintAr": "في الرنين $I = V/R = 220/11 = 20\\text{ A}$. ثم $V_C = I \\cdot X_C = 20 \\times 50 = 1000\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Since the circuit is in resonance, impedance equals ohmic resistance: $Z = R = 11\\,\\Omega$. The circuit current is $I = \\frac{V}{R} = \\frac{220}{11} = 20\\text{ A}$. The voltage across the capacitor is $V_C = I \\cdot X_C = 20 \\times 50 = 1000\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن الدائرة في حالة رنين فإن $Z = R = 11\\,\\Omega$. وتكون شدة التيار المار $I = \\frac{V}{R} = \\frac{220}{11} = 20\\text{ A}$. وقراءة الفولتميتر على المكثف: $V_C = I \\cdot X_C = 20 \\times 50 = 1000\\text{ V}$."
    ],
    "teacherTipEn": "In high-Q resonant circuits, branch voltage across $L$ or $C$ can be much higher than line voltage.",
    "teacherTipAr": "في دوائر الرنين ذات معامل الجودة العالي، قد يصل فرق الجهد عبر المكثف إلى قيم أكبر بكثير من جهد المصدر."
  },
  {
    "id": "phys_ch4_db_hots_43",
    "titleEn": "Comparison of Capacitor Stored Energy for Series vs Parallel",
    "titleAr": "مقارنة الطاقة المختزنة في مكثفين على التوالي وعلى التوازي",
    "difficulty": "hots",
    "questionEn": "Two identical capacitors, each of capacitance $C$, are connected first in series and then in parallel across the SAME DC voltage source $V$. The ratio of the total electrostatic energy stored in the series combination to that in the parallel combination ($U_{series} : U_{parallel}$) is:",
    "questionAr": "مكثفان متماثلان سعة كل منهما $C$، اتصلا معاً مرة على التوالي ومرة أخرى على التوازي مع نفس مصدر الجهد المستمر $V$. فإن النسبة بين الطاقة الكلية المختزنة في حالة التوالي إلى طاقتها في حالة التوازي ($U_{series} : U_{parallel}$) تساوي:",
    "optionsEn": [
      "$4 : 1$",
      "$1 : 2$",
      "$1 : 4$",
      "$1 : 1$"
    ],
    "optionsAr": [
      "$4 : 1$",
      "$1 : 2$",
      "$1 : 4$",
      "$1 : 1$"
    ],
    "correctAnswer": "$1 : 4$",
    "correctIndex": 2,
    "hintEn": "$U = \\frac{1}{2} C_{eq} V^2$. With constant $V$, $U \\propto C_{eq}$. $C_{series} = C/2$, $C_{parallel} = 2C$. Ratio is $(C/2)/(2C) = 1/4$.",
    "hintAr": "بثبوت فرق الجهد $U = \\frac{1}{2} C_{eq} V^2 \\propto C_{eq}$. السعة في التوالي $C/2$ وفي التوازي $2C$، فالنسبة $1:4$.",
    "stepByStepSolutionEn": [
      "Energy stored in a capacitor network at constant voltage is $U = \\frac{1}{2} C_{eq} V^2$. For series: $C_{series} = \\frac{C}{2}$, so $U_{series} = \\frac{1}{2} (C/2) V^2 = \\frac{1}{4} C V^2$. For parallel: $C_{parallel} = 2C$, so $U_{parallel} = \\frac{1}{2} (2C) V^2 = C V^2$. The ratio is $\\frac{U_{series}}{U_{parallel}} = \\frac{C/4}{C} = \\frac{1}{4}$."
    ],
    "stepByStepSolutionAr": [
      "عند ثبوت فرق الجهد تكون الطاقة المختزنة: $U = \\frac{1}{2} C_{eq} V^2$، أي أنها تتناسب طردياً مع السعة المكافئة. في التوالي: $C_{eq} = C/2$. وفي التوازي: $C_{eq} = 2C$. إذن النسبة بين الطاقتين: $\\frac{U_{series}}{U_{parallel}} = \\frac{C/2}{2C} = \\frac{1}{4}$."
    ],
    "teacherTipEn": "At constant voltage, energy is directly proportional to equivalent capacitance.",
    "teacherTipAr": "عند ثبوت الجهد تتناسب الطاقة طردياً مع السعة الكلية."
  },
  {
    "id": "phys_ch4_db_hots_44",
    "titleEn": "Hot-Wire Ammeter Shunt Resistance Purpose",
    "titleAr": "وظيفة مجزئ التيار في الأميتر الحراري",
    "difficulty": "hots",
    "questionEn": "A shunt resistor ($R_s$) is connected in parallel with the platinum-iridium wire of a hot-wire ammeter to:",
    "questionAr": "توصل مقاومة مجزئ تيار ($R_s$) على التوازي مع سلك البلاتين والإيريديوم في الأميتر الحراري لـ:",
    "optionsEn": [
      "Make the divisions of the ammeter scale completely uniform",
      "Eliminate the zero-error caused by ambient temperature changes",
      "Increase the ammeter's sensitivity to detect tiny micro-currents",
      "Increase the ammeter's measuring range and protect the hot wire from melting"
    ],
    "optionsAr": [
      "جعل أقسام تدريج الأميتر الحراري منتظمة ومتساوية الأبعاد",
      "معالجة الخطأ الصفري الناشئ عن حرارة الجو",
      "زيادة حساسية الجهاز لقياس تيارات ميكروية ضعيفة جداً",
      "زيادة مدى قياس شدة التيار وحماية سلك البلاتين-إيريديوم من الانصهار"
    ],
    "correctAnswer": "Increase the ammeter's measuring range and protect the hot wire from melting",
    "correctIndex": 3,
    "hintEn": "Like any ammeter, shunt allows measuring larger currents and protects the wire: $I = I_g + I_s$.",
    "hintAr": "مجزئ التيار يمرر معظم التيار لحماية السلك من الاحتراق وزيادة مدى القياس.",
    "stepByStepSolutionEn": [
      "Connecting a low-resistance shunt in parallel with the platinum-iridium wire diverts the majority of the current away from the wire, allowing the device to measure larger total currents (increases measuring range) and preventing excessive Joule heating that could melt the thin wire."
    ],
    "stepByStepSolutionAr": [
      "يعمل مجزئ التيار المتصل على التوازي مع سلك البلاتين-إيريديوم على تجزئة التيار بحيث يمر الجزء الأكبر في المجزئ والجزء الصغير في السلك، مما يوسع مدى قياس الجهاز ويحمي السلك الرفيع من الانصهار بفعل الحرارة العالية."
    ],
    "teacherTipEn": "Shunt increases measuring range and protects the sensitive hot wire.",
    "teacherTipAr": "المجزئ يوسع مدى القياس ويحمي السلك من الانصهار."
  },
  {
    "id": "phys_ch4_db_hots_45",
    "titleEn": "Eliminating Zero Error in Hot-Wire Ammeter",
    "titleAr": "التغلب على الخطأ الصفري في الأميتر الحراري",
    "difficulty": "hots",
    "questionEn": "To eliminate the zero error in a hot-wire ammeter caused by seasonal variations in ambient room temperature, the instrument is designed such that:",
    "questionAr": "للتغلب على الخطأ الصفري في الأميتر الحراري الناشئ عن التغير في درجات حرارة الجو، يتم:",
    "optionsEn": [
      "The platinum-iridium wire is mounted on a plate with the SAME coefficient of thermal expansion, insulated from it",
      "A large inductor is connected in series with the instrument",
      "The wire is replaced with a copper wire of low resistance",
      "The scale is calibrated using an alternating current instead of direct current"
    ],
    "optionsAr": [
      "شد سلك البلاتين-إيريديوم على لوحة لها نفس معامل تمدده الحراري مع عزله عنها",
      "توصيل ملف حث كبير على التوالي مع الجهاز",
      "استبدال السلك بسلك نحاسي منخفض المقاومة",
      "معايرة التدريج بتيار متردد بدلاً من التيار المستمر"
    ],
    "correctAnswer": "The platinum-iridium wire is mounted on a plate with the SAME coefficient of thermal expansion, insulated from it",
    "correctIndex": 0,
    "hintEn": "Same expansion coefficient ensures both expand equally with ambient temperature, keeping wire taut.",
    "hintAr": "تثبيت السلك على لوحة لها نفس معامل التمدد الحراري يعوض التمدد الناتج عن حرارة الجو.",
    "stepByStepSolutionEn": [
      "When the ambient room temperature rises or falls, the base plate expands or contracts at the exact same rate as the platinum-iridium wire because they have the same linear thermal expansion coefficient. Thus, the wire neither sags nor tightens due to room weather, keeping the pointer strictly at zero."
    ],
    "stepByStepSolutionAr": [
      "يُشد سلك البلاتين-إيريديوم على لوحة معدنية لها نفس معامل تمدده الحراري ومعزولاً عنها، بحيث إذا تغيرت درجة حرارة الجو تمددت اللوحة بنفس مقدار تمدد السلك، فيظل السلك مشدوداً ولا يتحرك المؤشر عن الصفر، متغلباً على الخطأ الصفري."
    ],
    "teacherTipEn": "Mounting on identical thermal expansion base eliminates ambient temperature zero-error.",
    "teacherTipAr": "التثبيت على لوحة متماثلة في التمدد الحراري يقضي تماماً على الخطأ الصفري."
  },
  {
    "id": "phys_ch4_db_hots_46",
    "titleEn": "Phase Angle when Inductive Reactance is Root 3 Times Resistance",
    "titleAr": "زاوية الطور عندما تكون المفاعلة الحثية جذر 3 أمثال المقاومة",
    "difficulty": "hots",
    "questionEn": "In a series RL circuit, the inductive reactance is $X_L = \\sqrt{3}\\,R$. The phase angle by which the total voltage leads the current is:",
    "questionAr": "في دائرة RL متصلة على التوالي، إذا كانت المفاعلة الحثية $X_L = \\sqrt{3}\\,R$. فإن زاوية الطور التي يتقدم بها الجهد الكلي على التيار تساوي:",
    "optionsEn": [
      "$30^\\circ$ ($\\pi/6\\text{ rad}$)",
      "$60^\\circ$ ($\\pi/3\\text{ rad}$)",
      "$45^\\circ$",
      "$90^\\circ$"
    ],
    "optionsAr": [
      "$30^\\circ$ ($\\pi/6\\text{ rad}$)",
      "$60^\\circ$ ($\\pi/3\\text{ rad}$)",
      "$45^\\circ$",
      "$90^\\circ$"
    ],
    "correctAnswer": "$60^\\circ$ ($\\pi/3\\text{ rad}$)",
    "correctIndex": 1,
    "hintEn": "$\\tan \\theta = \\frac{X_L}{R} = \\frac{\\sqrt{3}R}{R} = \\sqrt{3} \\implies \\theta = 60^\\circ$.",
    "hintAr": "$\\tan \\theta = \\frac{X_L}{R} = \\sqrt{3} \\implies \\theta = 60^\\circ$.",
    "stepByStepSolutionEn": [
      "The phase angle in an RL circuit satisfies $\\tan \\theta = \\frac{X_L}{R}$. Given $X_L = \\sqrt{3}\\,R$, we get $\\tan \\theta = \\sqrt{3}$. Since $\\arctan(\\sqrt{3}) = 60^\\circ$ ($\\frac{\\pi}{3}\\text{ rad}$), the total voltage leads the current by $60^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "في دائرة RL: $\\tan \\theta = \\frac{X_L}{R}$. بالتعويض: $\\tan \\theta = \\frac{\\sqrt{3}R}{R} = \\sqrt{3}$. وبما أن $\\tan 60^\\circ = \\sqrt{3}$، فإن زاوية الطور تساوي $60^\\circ$ ويتقدم فيها الجهد الكلي على التيار."
    ],
    "teacherTipEn": "$\\tan 60^\\circ = \\sqrt{3}$, meaning $X_L = \\sqrt{3}R \\implies \\theta = 60^\\circ$.",
    "teacherTipAr": "ظل الزاوية $60^\\circ$ هو $\\sqrt{3}$، فتكون زاوية الطور $60^\\circ$."
  },
  {
    "id": "phys_ch4_db_hots_47",
    "titleEn": "Phase Angle when Capacitive Reactance is 1/Root 3 Times Resistance",
    "titleAr": "زاوية الطور عندما تكون المفاعلة السعوية مقسومة على جذر 3 من المقاومة",
    "difficulty": "hots",
    "questionEn": "In a series RC circuit, the capacitive reactance is $X_C = \\frac{R}{\\sqrt{3}}$. The phase angle by which the current leads the total voltage is:",
    "questionAr": "في دائرة RC متصلة على التوالي، إذا كانت المفاعلة السعوية $X_C = \\frac{R}{\\sqrt{3}}$. فإن زاوية الطور التي يتقدم بها التيار على الجهد الكلي تساوي:",
    "optionsEn": [
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$15^\\circ$"
    ],
    "optionsAr": [
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$15^\\circ$"
    ],
    "correctAnswer": "$30^\\circ$",
    "correctIndex": 2,
    "hintEn": "$\\tan |\\theta| = \\frac{X_C}{R} = \\frac{1}{\\sqrt{3}} \\implies |\\theta| = 30^\\circ$.",
    "hintAr": "$\\tan |\\theta| = \\frac{X_C}{R} = \\frac{1}{\\sqrt{3}} \\implies |\\theta| = 30^\\circ$.",
    "stepByStepSolutionEn": [
      "In an RC circuit, current leads voltage by angle $|\\theta|$, where $\\tan |\\theta| = \\frac{X_C}{R} = \\frac{R/\\sqrt{3}}{R} = \\frac{1}{\\sqrt{3}}$. Since $\\arctan(1/\\sqrt{3}) = 30^\\circ$, the current leads the voltage by $30^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "في دائرة RC، زاوية تقدم التيار على الجهد الكلي تحسب من: $\\tan \\theta = \\frac{X_C}{R} = \\frac{1}{\\sqrt{3}}$. وبما أن $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$، فإن التيار يسبق الجهد الكلي بزاوية طور $30^\\circ$."
    ],
    "teacherTipEn": "$\\tan 30^\\circ = 1/\\sqrt{3}$.",
    "teacherTipAr": "ظل الزاوية $30^\\circ$ هو $1/\\sqrt{3}$."
  },
  {
    "id": "phys_ch4_db_hots_48",
    "titleEn": "Transformer Connected to AC Circuit with RLC Load",
    "titleAr": "محول كهربي متصل بدائرة حمل تحتوي على RLC",
    "difficulty": "hots",
    "questionEn": "The secondary coil of an ideal step-down transformer is connected to a series circuit of $R = 8\\,\\Omega$, $X_L = 15\\,\\Omega$, and $X_C = 9\\,\\Omega$. If the secondary rms voltage is $20\\text{ V}$, the current in the secondary circuit is:",
    "questionAr": "اتصل الملف الثانوي لمحول خافض للجهد مثالي بدائرة توالي بها $R = 8\\,\\Omega$ و $X_L = 15\\,\\Omega$ و $X_C = 9\\,\\Omega$. فإذا كان فرق الجهد الفعال للثانوي $20\\text{ V}$، فإن شدة التيار في دائرة الثانوي تساوي:",
    "optionsEn": [
      "$2.5\\text{ A}$",
      "$1\\text{ A}$",
      "$0.625\\text{ A}$",
      "$2\\text{ A}$"
    ],
    "optionsAr": [
      "$2.5\\text{ A}$",
      "$1\\text{ A}$",
      "$0.625\\text{ A}$",
      "$2\\text{ A}$"
    ],
    "correctAnswer": "$2\\text{ A}$",
    "correctIndex": 3,
    "hintEn": "$Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{8^2 + (15 - 9)^2} = \\sqrt{64 + 36} = 10\\,\\Omega$. $I = 20 / 10 = 2\\text{ A}$.",
    "hintAr": "$Z = \\sqrt{8^2 + 6^2} = 10\\,\\Omega$. $I = 20 / 10 = 2\\text{ A}$.",
    "stepByStepSolutionEn": [
      "First, find total load impedance: $Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{8^2 + (15 - 9)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\,\\Omega$. The current in the secondary circuit is $I_s = \\frac{V_s}{Z} = \\frac{20\\text{ V}}{10\\,\\Omega} = 2\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "نحسب المعاوقة الكلية للحمل في دائرة الثانوي: $Z = \\sqrt{8^2 + (15 - 9)^2} = \\sqrt{64 + 36} = 10\\,\\Omega$. وتكون شدة تيار الثانوي: $I_s = \\frac{V_s}{Z} = \\frac{20}{10} = 2\\text{ A}$."
    ],
    "teacherTipEn": "Combine transformer output with RLC impedance formula.",
    "teacherTipAr": "مسألة مركبة تجمع بين خرج المحول وحساب معاوقة دائرة RLC."
  },
  {
    "id": "phys_ch4_db_hots_49",
    "titleEn": "Short-Circuiting Capacitor in Resonant Circuit",
    "titleAr": "أثر إلغاء (قصر) المكثف في دائرة رنين على شدة التيار",
    "difficulty": "hots",
    "questionEn": "A series RLC circuit is in resonance, drawing a current $I_0$. If the capacitor is suddenly short-circuited (connected across a zero-resistance wire), the current in the circuit:",
    "questionAr": "دائرة RLC توالي في حالة رنين يمر بها تيار $I_0$. إذا تم عمل دائرة قصر على المكثف (أُلغي المكثف بسلك عديم المقاومة)، فإن شدة التيار في الدائرة:",
    "optionsEn": [
      "Decreases because the impedance increases from $R$ to $\\sqrt{R^2 + X_L^2}$",
      "Increases because removing a component reduces total opposition",
      "Remains completely unchanged at $I_0$",
      "Becomes zero immediately"
    ],
    "optionsAr": [
      "تقل لأن المعاوقة الكلية تزداد من $R$ إلى $\\sqrt{R^2 + X_L^2}$",
      "تزداد لأن إزالة عنصر يقلل من المعارضة الكلية",
      "تظل ثابتة تماماً عند $I_0$",
      "تنعدم فوراً"
    ],
    "correctAnswer": "Decreases because the impedance increases from $R$ to $\\sqrt{R^2 + X_L^2}$",
    "correctIndex": 0,
    "hintEn": "Resonance had $Z = R$. Without $C$, it is an RL circuit with $Z = \\sqrt{R^2 + X_L^2} > R$.",
    "hintAr": "في الرنين كانت المعاوقة $Z = R$، وبإلغاء المكثف أصبحت دائرة RL معاوقاتها $\\sqrt{R^2 + X_L^2} > R$ فيقل التيار.",
    "stepByStepSolutionEn": [
      "In the initial resonant state, $X_L$ and $X_C$ cancelled each other out, giving the minimum possible impedance: $Z = R$. When the capacitor is short-circuited, $X_C = 0$, so the new impedance is $Z' = \\sqrt{R^2 + X_L^2}$. Because $Z' > R$, the circuit current decreases ($I' < I_0$)."
    ],
    "stepByStepSolutionAr": [
      "في حالة الرنين الأصلية كانت المفاعلتان تلغيان بعضهما وتكون المعاوقة في حدها الأدنى $Z = R$. وعند إلغاء المكثف بسلك قصر تصبح الدائرة RL فقط، وتصبح معاوقاتها $Z' = \\sqrt{R^2 + X_L^2} > R$. وبزيادة المعاوقة يقل تيار الدائرة حتماً."
    ],
    "teacherTipEn": "Counter-intuitive: removing a component can INCREASE total impedance if the circuit was in resonance!",
    "teacherTipAr": "ملحوظة ذكية: إزالة عنصر من دائرة رنين يزيد المعاوقة ويقلل التيار لأن الرنين كان يحقق أقل معاوقة ممكنة."
  },
  {
    "id": "phys_ch4_db_hots_50",
    "titleEn": "Short-Circuiting Inductor in Resonant Circuit",
    "titleAr": "أثر إلغاء ملف الحث في دائرة رنين على شدة التيار",
    "difficulty": "hots",
    "questionEn": "A series RLC circuit is in resonance, drawing an effective current $I_0$. If the inductor is short-circuited by a switch, the current in the circuit:",
    "questionAr": "دائرة RLC توالي في حالة رنين يمر بها تيار فعال $I_0$. إذا تم توصيل مفتاح على التوازي مع ملف الحث وغلقه (قصر الملف)، فإن شدة التيار في الدائرة:",
    "optionsEn": [
      "Increases because $X_L$ is removed",
      "Decreases because impedance increases to $\\sqrt{R^2 + X_C^2}$",
      "Remains constant at $I_0$",
      "Becomes infinite"
    ],
    "optionsAr": [
      "تزداد لأن المفاعلة الحثية أُزيلت",
      "تقل لأن المعاوقة تزداد إلى $\\sqrt{R^2 + X_C^2}$",
      "تظل ثابتة عند $I_0$",
      "تصل إلى مالانهاية"
    ],
    "correctAnswer": "Decreases because impedance increases to $\\sqrt{R^2 + X_C^2}$",
    "correctIndex": 1,
    "hintEn": "Resonance impedance was $Z = R$ (minimum). Without $L$, $Z = \\sqrt{R^2 + X_C^2} > R \\implies I$ drops.",
    "hintAr": "المعاوقة في الرنين كانت $R$ (أقل ما يمكن). بدون الملف تصبح $Z = \\sqrt{R^2 + X_C^2} > R$ فيقل التيار.",
    "stepByStepSolutionEn": [
      "At resonance, $Z = R$ is the global minimum of impedance. Short-circuiting the inductor leaves an RC circuit whose impedance is $Z' = \\sqrt{R^2 + X_C^2} > R$. Since impedance increases, current decreases."
    ],
    "stepByStepSolutionAr": [
      "في حالة الرنين تكون المعاوقة مساوية للمقاومة $R$ وهي أدنى قيمة للمعاوقة في الدائرة. وبقصر ملف الحث تتحول الدائرة إلى RC وتصبح معاوقاتها $Z' = \\sqrt{R^2 + X_C^2}$ وهي أكبر من $R$، وبالتالي تقل شدة التيار."
    ],
    "teacherTipEn": "Any disruption of resonance in a series circuit causes current to drop.",
    "teacherTipAr": "أي إخلال بحالة الرنين في دائرة التوالي يؤدي حتماً إلى نقص شدة التيار."
  },
  {
    "id": "phys_ch4_db_hots_51",
    "titleEn": "Frequency where Impedance Equals Twice Resistance",
    "titleAr": "تردد تكون عنده المفاعلة تجعل المعاوقة ضعف المقاومة",
    "difficulty": "hots",
    "questionEn": "In a series RL circuit, the condition for the total impedance $Z$ to be EQUAL to twice the ohmic resistance ($Z = 2R$) requires the inductive reactance $X_L$ to be:",
    "questionAr": "في دائرة RL توالي، لكي تصبح المعاوقة الكلية $Z$ مساوية لضعف المقاومة الأومية ($Z = 2R$)، يجب أن تكون المفاعلة الحثية $X_L$ مساوية لـ:",
    "optionsEn": [
      "$R$",
      "$2\\,R$",
      "$\\sqrt{3}\\,R$",
      "$3\\,R$"
    ],
    "optionsAr": [
      "$R$",
      "$2\\,R$",
      "$\\sqrt{3}\\,R$",
      "$3\\,R$"
    ],
    "correctAnswer": "$\\sqrt{3}\\,R$",
    "correctIndex": 2,
    "hintEn": "$Z^2 = R^2 + X_L^2 \\implies (2R)^2 = R^2 + X_L^2 \\implies 4R^2 - R^2 = X_L^2 \\implies X_L = \\sqrt{3}R$.",
    "hintAr": "$Z^2 = R^2 + X_L^2 \\implies 4R^2 = R^2 + X_L^2 \\implies X_L = \\sqrt{3}R$.",
    "stepByStepSolutionEn": [
      "From the impedance relationship: $Z = \\sqrt{R^2 + X_L^2}$. Setting $Z = 2R$ gives $2R = \\sqrt{R^2 + X_L^2}$. Squaring both sides: $4R^2 = R^2 + X_L^2 \\implies X_L^2 = 3R^2 \\implies X_L = \\sqrt{3}\\,R$."
    ],
    "stepByStepSolutionAr": [
      "من قانون المعاوقة: $Z = \\sqrt{R^2 + X_L^2}$. بالتعويض عن $Z = 2R$: $2R = \\sqrt{R^2 + X_L^2}$. بتربيع الطرفين: $4R^2 = R^2 + X_L^2 \\implies X_L^2 = 3R^2 \\implies X_L = \\sqrt{3}\\,R$."
    ],
    "teacherTipEn": "Remember Pythagorean triples and $\\sqrt{3}$: $R^2 + (\\sqrt{3}R)^2 = 4R^2 = (2R)^2$.",
    "teacherTipAr": "المثلث القائم ذو الأضلاع $1, \\sqrt{3}, 2$."
  },
  {
    "id": "phys_ch4_db_hots_52",
    "titleEn": "Voltmeter Readings in Series RLC Circuit",
    "titleAr": "قراءات الفولتميتر في دائرة RLC توالي",
    "difficulty": "hots",
    "questionEn": "In a series RLC circuit, an AC voltmeter connected across the resistor reads $40\\text{ V}$, across the inductor reads $100\\text{ V}$, and across the capacitor reads $70\\text{ V}$. The reading of a voltmeter connected across the AC source is:",
    "questionAr": "في دائرة RLC متصلة على التوالي، قراءة فولتميتر تيار متردد عبر المقاومة $40\\text{ V}$، وعبر الملف $100\\text{ V}$، وعبر المكثف $70\\text{ V}$. فإن قراءة الفولتميتر المتصل بالمصدر المتردد تساوي:",
    "optionsEn": [
      "$210\\text{ V}$",
      "$70\\text{ V}$",
      "$130\\text{ V}$",
      "$50\\text{ V}$"
    ],
    "optionsAr": [
      "$210\\text{ V}$",
      "$70\\text{ V}$",
      "$130\\text{ V}$",
      "$50\\text{ V}$"
    ],
    "correctAnswer": "$50\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "$V = \\sqrt{V_R^2 + (V_L - V_C)^2} = \\sqrt{40^2 + (100 - 70)^2} = \\sqrt{40^2 + 30^2} = 50\\text{ V}$.",
    "hintAr": "$V = \\sqrt{V_R^2 + (V_L - V_C)^2} = \\sqrt{40^2 + 30^2} = 50\\text{ V}$.",
    "stepByStepSolutionEn": [
      "The total voltage in an RLC series circuit is $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$. Substituting the values: $V = \\sqrt{40^2 + (100 - 70)^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\text{ V}$. Arithmetic addition ($40+100+70=210\\text{ V}$) is completely wrong because of phase differences."
    ],
    "stepByStepSolutionAr": [
      "فرق الجهد الكلي في دائرة RLC توالي: $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$. بالتعويض: $V = \\sqrt{40^2 + (100 - 70)^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\text{ V}$. الجمع الجبري المباشر خاطئ لاختلاف الطور."
    ],
    "teacherTipEn": "Subtract $V_L$ and $V_C$ first, then combine with $V_R$ via Pythagoras.",
    "teacherTipAr": "اطرح جهدي الملف والمكثف أولاً ثم اجمعهما اتجاهياً مع جهد المقاومة."
  },
  {
    "id": "phys_ch4_db_hots_53",
    "titleEn": "Capacitor Current Phase Shift in Pure Circuit",
    "titleAr": "فرق الطور لتيار المكثف في دائرة سعوية نقية",
    "difficulty": "hots",
    "questionEn": "When a sinusoidal alternating voltage $V = V_{max} \\sin(\\omega t)$ is applied across a pure capacitor, the equation representing the instantaneous electric current is:",
    "questionAr": "عند تطبيق جهد متردد جيبي $V = V_{max} \\sin(\\omega t)$ عبر مكثف نقي، فإن المعادلة المعبرة عن شدة التيار اللحظي هي:",
    "optionsEn": [
      "$I = I_{max} \\sin\\left(\\omega t + \\frac{\\pi}{2}\\right)$",
      "$I = I_{max} \\sin\\left(\\omega t - \\frac{\\pi}{2}\\right)$",
      "$I = I_{max} \\sin(\\omega t)$",
      "$I = I_{max} \\sin(\\omega t + \\pi)$"
    ],
    "optionsAr": [
      "$I = I_{max} \\sin\\left(\\omega t + \\frac{\\pi}{2}\\right)$",
      "$I = I_{max} \\sin\\left(\\omega t - \\frac{\\pi}{2}\\right)$",
      "$I = I_{max} \\sin(\\omega t)$",
      "$I = I_{max} \\sin(\\omega t + \\pi)$"
    ],
    "correctAnswer": "$I = I_{max} \\sin\\left(\\omega t + \\frac{\\pi}{2}\\right)$",
    "correctIndex": 0,
    "hintEn": "Current leads voltage by $90^\\circ$ ($\\pi/2\\text{ rad}$) in a pure capacitor: phase angle $+\\pi/2$.",
    "hintAr": "التيار يسبق الجهد بربع دورة ($\\pi/2$) في المكثف النقي: زاوية الطور $+\\pi/2$.",
    "stepByStepSolutionEn": [
      "In a pure capacitor, the rate of change of voltage determines current: $i = C \\frac{dv}{dt} = C \\frac{d}{dt}[V_{max} \\sin(\\omega t)] = \\omega C V_{max} \\cos(\\omega t) = I_{max} \\sin\\left(\\omega t + \\frac{\\pi}{2}\\right)$. Thus, current leads voltage by a phase angle of $+90^\\circ$ ($+\\pi/2\\text{ rad}$)."
    ],
    "stepByStepSolutionAr": [
      "في المكثف النقي شدة التيار تتناسب مع معدل تغير الجهد: $i = C \\frac{dv}{dt} = \\omega C V_{max} \\cos(\\omega t) = I_{max} \\sin\\left(\\omega t + \\frac{\\pi}{2}\\right)$. وبالتالي يسبق التيار الجهد بربع دورة ($\\pi/2$)."
    ],
    "teacherTipEn": "Capacitor: current leads by $+90^\\circ$ ($+\\pi/2$). Inductor: current lags by $-90^\\circ$ ($-\\pi/2$).",
    "teacherTipAr": "في المكثف يسبق التيار الجهد بـ $+90^\\circ$، وفي الملف يتأخر التيار عن الجهد بـ $-90^\\circ$."
  },
  {
    "id": "phys_ch4_db_hots_54",
    "titleEn": "Inductor Current Phase Shift in Pure Circuit",
    "titleAr": "فرق الطور لتيار ملف الحث في دائرة حثية نقية",
    "difficulty": "hots",
    "questionEn": "When a sinusoidal alternating voltage $V = V_{max} \\sin(\\omega t)$ is applied across a pure inductor (zero resistance), the equation representing the instantaneous electric current is:",
    "questionAr": "عند تطبيق جهد متردد جيبي $V = V_{max} \\sin(\\omega t)$ عبر ملف حث نقي (مهمل المقاومة)، فإن المعادلة المعبرة عن شدة التيار اللحظي هي:",
    "optionsEn": [
      "$I = I_{max} \\sin\\left(\\omega t + \\frac{\\pi}{2}\\right)$",
      "$I = I_{max} \\sin\\left(\\omega t - \\frac{\\pi}{2}\\right)$",
      "$I = I_{max} \\sin(\\omega t)$",
      "$I = I_{max} \\sin(\\omega t - \\pi)$"
    ],
    "optionsAr": [
      "$I = I_{max} \\sin\\left(\\omega t + \\frac{\\pi}{2}\\right)$",
      "$I = I_{max} \\sin\\left(\\omega t - \\frac{\\pi}{2}\\right)$",
      "$I = I_{max} \\sin(\\omega t)$",
      "$I = I_{max} \\sin(\\omega t - \\pi)$"
    ],
    "correctAnswer": "$I = I_{max} \\sin\\left(\\omega t - \\frac{\\pi}{2}\\right)$",
    "correctIndex": 1,
    "hintEn": "Current lags voltage by $90^\\circ$ ($\\pi/2\\text{ rad}$) in a pure inductor: phase angle $-\\pi/2$.",
    "hintAr": "التيار يتأخر عن الجهد بربع دورة ($\\pi/2$) في الملف النقي: زاوية الطور $-\\pi/2$.",
    "stepByStepSolutionEn": [
      "In a pure inductor, $v = L \\frac{di}{dt}$, which upon integration yields $i(t) = -\\frac{V_{max}}{\\omega L} \\cos(\\omega t) = I_{max} \\sin\\left(\\omega t - \\frac{\\pi}{2}\\right)$. The current lags the voltage by $90^\\circ$ ($-\\pi/2\\text{ rad}$)."
    ],
    "stepByStepSolutionAr": [
      "في ملف الحث النقي يتأخر التيار عن فرق الجهد بربع دورة ($\\pi/2$ أو $90^\\circ$)، فتكون المعادلة اللحظية للتيار $I = I_{max} \\sin\\left(\\omega t - \\frac{\\pi}{2}\\right)$."
    ],
    "teacherTipEn": "In pure L, voltage leads current, which means current lags voltage by $\\pi/2$.",
    "teacherTipAr": "في الملف النقي الجهد يسبق التيار، أي أن التيار يتأخر عن الجهد بربع دورة."
  },
  {
    "id": "phys_ch4_db_hots_55",
    "titleEn": "Resonant Circuit: Doubling Both L and C",
    "titleAr": "مضاعفة كل من الحث الذاتي والسعة في دائرة رنين",
    "difficulty": "hots",
    "questionEn": "In a resonant AC circuit, if the self-inductance of the coil is doubled ($2L$) and the capacitance of the capacitor is doubled ($2C$), the new resonance frequency becomes:",
    "questionAr": "في دائرة رنين، إذا تضاعف معامل الحث الذاتي للملف إلى مثليه ($2L$) وتضاعفت سعة المكثف إلى مثليها ($2C$)، فإن تردد الرنين الجديد يصبح:",
    "optionsEn": [
      "Quarter the original frequency ($f_0 / 4$)",
      "Twice the original frequency ($2f_0$)",
      "Half the original frequency ($f_0 / 2$)",
      "Equal to the original frequency ($f_0$)"
    ],
    "optionsAr": [
      "ربع التردد الأصلي ($f_0 / 4$)",
      "ضعف التردد الأصلي ($2f_0$)",
      "نصف التردد الأصلي ($f_0 / 2$)",
      "مساوياً للتردد الأصلي ($f_0$)"
    ],
    "correctAnswer": "Half the original frequency ($f_0 / 2$)",
    "correctIndex": 2,
    "hintEn": "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. New product is $(2L)(2C) = 4LC$. $\\sqrt{4} = 2$ in denominator.",
    "hintAr": "$f'_0 \\propto \\frac{1}{\\sqrt{2 \\times 2}} = \\frac{1}{2}$. يقل تردد الرنين إلى النصف.",
    "stepByStepSolutionEn": [
      "The resonance frequency is $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. If both $L$ and $C$ are doubled, the product becomes $L' C' = (2L)(2C) = 4LC$. Taking the square root gives $\\sqrt{4LC} = 2\\sqrt{LC}$. Thus, $f'_0 = \\frac{1}{2\\pi (2\\sqrt{LC})} = \\frac{1}{2} f_0$."
    ],
    "stepByStepSolutionAr": [
      "تردد الرنين: $f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. عند مضاعفة كل من $L$ و $C$ يصبح حاصل ضربهما: $2L \\times 2C = 4LC$. وبأخذ الجذر التربيعي: $\\sqrt{4LC} = 2\\sqrt{LC}$. وبالتالي يقل تردد الرنين إلى النصف ($f_0 / 2$)."
    ],
    "teacherTipEn": "Both doubled $\\implies$ product quadrupled $\\implies$ square root doubled $\\implies$ frequency halved.",
    "teacherTipAr": "مضاعفة الاثنين تضاعف حاصل ضربهما 4 مرات، وجذر الـ 4 هو 2 في المقام فينصف التردد."
  },
  {
    "id": "phys_ch4_db_hots_56",
    "titleEn": "Energy Stored in Inductor vs Capacitor in Resonant Circuit",
    "titleAr": "مقارنة الطاقة العظمى في الملف بالمكثف عند الرنين",
    "difficulty": "hots",
    "questionEn": "In an ideal series resonant LC circuit, the maximum electrostatic energy stored in the capacitor ($U_{E,max}$) and the maximum magnetic energy stored in the inductor ($U_{B,max}$) satisfy:",
    "questionAr": "في دائرة رنين مثالية (LC)، فإن الطاقة الكهربية العظمى المختزنة في المكثف ($U_{E,max}$) والطاقة المغناطيسية العظمى المختزنة في الملف ($U_{B,max}$) تحققان العلاقة:",
    "optionsEn": [
      "$U_{E,max} > U_{B,max}$",
      "$U_{E,max} < U_{B,max}$",
      "$U_{E,max} + U_{B,max} = 0$",
      "$U_{E,max} = U_{B,max}$"
    ],
    "optionsAr": [
      "$U_{E,max} > U_{B,max}$",
      "$U_{E,max} < U_{B,max}$",
      "$U_{E,max} + U_{B,max} = 0$",
      "$U_{E,max} = U_{B,max}$"
    ],
    "correctAnswer": "$U_{E,max} = U_{B,max}$",
    "correctIndex": 3,
    "hintEn": "In an ideal LC oscillator without resistance, total energy is conserved: all energy shifts back and forth.",
    "hintAr": "في دائرة LC مثالية، الطاقة الكلية محفوظة وتتحول بالكامل ذهاباً وإياباً بين المجالين.",
    "stepByStepSolutionEn": [
      "In an ideal LC circuit (with zero resistance), the total electromagnetic energy is conserved: $U_{total} = \\frac{1}{2} \\frac{q^2}{C} + \\frac{1}{2} L i^2$. When the capacitor is fully charged ($q = Q_{max}$, $i = 0$), all energy is electric: $U_{total} = U_{E,max}$. When the capacitor is fully discharged ($q = 0$, $i = I_{max}$), all energy is magnetic: $U_{total} = U_{B,max}$. Therefore, $U_{E,max} = U_{B,max}$."
    ],
    "stepByStepSolutionAr": [
      "في دائرة الرنين المثالية المهملة المقاومة تكون الطاقة الكلية محفوظة. وتتحول الطاقة الكهربية بالكامل عند تمام شحن المكثف إلى طاقة مغناطيسية بالكامل عند تمام تفريغ المكثف ووصول التيار لقيمته العظمى. وبما أنه لا يوجد فقد في الطاقة، فإن القيمة العظمى للطاقة الكهربية تساوي تماماً القيمة العظمى للطاقة المغناطيسية ($U_{E,max} = U_{B,max}$)."
    ],
    "teacherTipEn": "Conservation of energy in ideal LC circuits dictates peak electric energy equals peak magnetic energy.",
    "teacherTipAr": "قانون بقاء الطاقة يفرض تساوي الطاقة العظمى في المكثف مع الطاقة العظمى في الملف."
  },
  {
    "id": "phys_ch4_db_hots_57",
    "titleEn": "Condition for Resonant Circuit to have Current Independent of Inductance",
    "titleAr": "استقلال تيار الرنين عن الحث والسعة",
    "difficulty": "hots",
    "questionEn": "In a series RLC circuit connected to an AC source of constant voltage $V$, why is the resonance current completely independent of the values of self-inductance $L$ and capacitance $C$?",
    "questionAr": "في دائرة RLC توالي متصلة بمصدر متردد ثابت الجهد $V$، لماذا تكون شدة تيار الرنين مستقلة تماماً عن قيمتي معامل الحث $L$ وسعة المكثف $C$؟",
    "optionsEn": [
      "Because at resonance $X_L = X_C$, so their net opposing reactance is zero and $Z = R$",
      "Because inductors and capacitors stop conducting electricity at resonance",
      "Because resonance can only occur when $L = 0$ and $C = 0$",
      "Because the current avoids passing through the inductor and capacitor"
    ],
    "optionsAr": [
      "لأنه عند الرنين $X_L = X_C$، فتلاشي محصلة المفاعلتين بعضهما وتصبح المعاوقة مساوية للمقاومة فقط $Z = R$",
      "لأن الملف والمكثف يتوقفان عن توصيل الكهرباء عند الرنين",
      "لأن الرنين لا يحدث إلا عندما يكون $L = 0$ و $C = 0$",
      "لأن التيار يتفادى المرور في الملف والمكثف"
    ],
    "correctAnswer": "Because at resonance $X_L = X_C$, so their net opposing reactance is zero and $Z = R$",
    "correctIndex": 0,
    "hintEn": "At resonance, $X_L - X_C = 0$, leaving $Z = \\sqrt{R^2 + 0} = R \\implies I = V / R$.",
    "hintAr": "في الرنين $X_L - X_C = 0$ فتكون المعاوقة $Z = R$ والتيار $I = V/R$ يعتمد على المقاومة فقط.",
    "stepByStepSolutionEn": [
      "At the resonance frequency, inductive reactance and capacitive reactance are exactly equal in magnitude ($X_L = X_C$) and $180^\\circ$ out of phase ($V_L = -V_C$). Their net opposing effect cancels out completely: $(X_L - X_C) = 0$. The total circuit impedance is $Z = \\sqrt{R^2 + 0^2} = R$, and the current is $I = \\frac{V}{R}$, which depends strictly on the ohmic resistance $R$ and is independent of $L$ and $C$."
    ],
    "stepByStepSolutionAr": [
      "عند تردد الرنين تتساوى المفاعلتان في المقدار ($X_L = X_C$) وتتضادان في الطور، فتلاشي كل منهما التأثير الإعاقي للأخرى بالكامل فيكون $(X_L - X_C) = 0$. وتصبح المعاوقة مساوية للمقاومة الأومية فقط $Z = R$، وتكون شدة التيار $I = \\frac{V}{R}$ متوقفة فقط على المقاومة الأومية ومستقلة تماماً عن $L$ و $C$."
    ],
    "teacherTipEn": "Mutual cancellation of reactances leaves only resistance to limit the current.",
    "teacherTipAr": "إلغاء المفاعلتين لبعضهما يجعل المعاوقة مقتصرة على المقاومة الأومية فقط."
  },
  {
    "id": "phys_ch4_db_hots_58",
    "titleEn": "Voltmeter between Nodes in Symmetric Bridge Resonant Circuit",
    "titleAr": "قراءة فولتميتر بين طرفي الملف والمكثف في حالة الرنين",
    "difficulty": "hots",
    "questionEn": "In a series resonant RLC circuit, an AC voltmeter is connected across BOTH the inductor and the capacitor together (between the input to $L$ and output of $C$). Assuming ideal components, the voltmeter reads:",
    "questionAr": "في دائرة RLC توالي في حالة رنين، اتصل فولتميتر تيار متردد بطرفي الملف والمكثف معاً (بين طرف دخول الملف وطرف خروج المكثف). بافتراض مثالية المكونات، فإن قراءة هذا الفولتميتر تكون:",
    "optionsEn": [
      "$2\\,V_L$",
      "$0\\text{ V}$",
      "$V_R$",
      "$V_{source}$"
    ],
    "optionsAr": [
      "$2\\,V_L$",
      "$0\\text{ V}$",
      "$V_R$",
      "$V_{source}$"
    ],
    "correctAnswer": "$0\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "At resonance, $V_L = V_C$ and they are $180^\\circ$ out of phase, so $V_{LC} = |V_L - V_C| = 0$.",
    "hintAr": "في الرنين $V_L = V_C$ وهما متضادان في الطور، إذن $V_{LC} = |V_L - V_C| = 0$.",
    "stepByStepSolutionEn": [
      "At resonance, $X_L = X_C \\implies V_L = V_C$. Because the inductor voltage leads current by $+90^\\circ$ and capacitor voltage lags current by $-90^\\circ$, they are directly opposite in direction ($180^\\circ$ out of phase). The combined voltage across both components is $V_{LC} = |V_L - V_C| = 0\\text{ V}$. An AC voltmeter connected across both reads zero."
    ],
    "stepByStepSolutionAr": [
      "في حالة الرنين تتساوى المفاعلتان $X_L = X_C$، وبالتالي يتساوى فرق الجهد عبر الملف مع فرق الجهد عبر المكثف $V_L = V_C$. وبما أنهما متضادان في الطور بمقدار $180^\\circ$، فإن محصلتهما الاتجاهية تساوي صفراً: $V_{LC} = V_L - V_C = 0\\text{ V}$. وقراءة الفولتميتر المتصل بهما معاً تنعدم تماماً."
    ],
    "teacherTipEn": "Net voltage across pure L and pure C in resonance is identically zero.",
    "teacherTipAr": "المحصلة الجبرية لفرق الجهد بين طرفي ملف ومكثف نقيين في حالة الرنين تساوي صفراً."
  }
]
};
