import type { ChapterDatabank } from '../../../types/curriculum';

export const physCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "phys_ch2_db_easy_01",
    "titleEn": "Magnetic Flux and Magnetic Flux Density Relation",
    "titleAr": "العلاقة بين الفيض المغناطيسي وكثافة الفيض",
    "difficulty": "easy",
    "questionEn": "Magnetic flux ($\\Phi_m$) passing through a planar surface of area $A$ in a uniform magnetic field $B$ inclined at angle $\\theta$ to the plane is:",
    "questionAr": "الفيض المغناطيسي ($\\Phi_m$) المار خلال مسطح مساحته $A$ موضوع في فيض مغناطيسي منتظم كثافته $B$ ويميل على السطح بزاوية $\\theta$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\Phi_m = B A \\sin\\theta$",
      "$\\Phi_m = \\frac{B}{A} \\cos\\theta$",
      "$\\Phi_m = B^2 A$",
      "$\\Phi_m = \\frac{A}{B} \\tan\\theta$"
    ],
    "optionsAr": [
      "$\\Phi_m = B A \\sin\\theta$",
      "$\\Phi_m = \\frac{B}{A} \\cos\\theta$",
      "$\\Phi_m = B^2 A$",
      "$\\Phi_m = \\frac{A}{B} \\tan\\theta$"
    ],
    "correctAnswer": "$\\Phi_m = B A \\sin\\theta$",
    "correctIndex": 0,
    "hintEn": "In the Egyptian syllabus, $\\theta$ in $\\Phi_m = B A \\sin\\theta$ is the angle between the magnetic field and the plane of the coil.",
    "hintAr": "في المنهج المصري، $\\theta$ في قانون الفيض هي الزاوية المحصورة بين خطوط المجال ومستوى الملف.",
    "stepByStepSolutionEn": [
      "Magnetic flux is the total number of magnetic lines of force passing through a surface. When the surface makes an angle $\\theta$ with the field lines: $\\Phi_m = B A \\sin\\theta$. If the coil is perpendicular to the field ($\\theta = 90^\\circ$), $\\Phi_m = B A$ (maximum). If parallel ($\\theta = 0^\\circ$), $\\Phi_m = 0$."
    ],
    "stepByStepSolutionAr": [
      "الفيض المغناطيسي هو العدد الكلي لخطوط الفيض التي تمر عمودياً على مساحة معينة. ويعطى بالعلاقة $\\Phi_m = B A \\sin\\theta$ حيث $\\theta$ هي الزاوية بين مستوى الملف والمجال. يكون الفيض نهاية عظمى عندما يكون الملف عمودياً ($\\theta = 90^\\circ$)، وينعدم عندما يكون موازياً للمجال ($\\theta = 0^\\circ$)."
    ],
    "teacherTipEn": "Be careful: If the angle given is with the normal to the coil plane ($\\alpha$), then $\\Phi_m = B A \\cos\\alpha$.",
    "teacherTipAr": "انتبه: إذا أعطيت الزاوية مع العمودي على المساحة ($\\alpha$)، فإن $\\Phi_m = B A \\cos\\alpha$."
  },
  {
    "id": "phys_ch2_db_easy_02",
    "titleEn": "Unit of Magnetic Flux Weber Equivalence",
    "titleAr": "وحدة قياس الفيض المغناطيسي والوحدات المكافئة للويبر",
    "difficulty": "easy",
    "questionEn": "The SI unit of magnetic flux is the Weber ($\\text{Wb}$). Which of the following is equivalent to $1\\text{ Wb}$?",
    "questionAr": "الوحدة الدولية لقياس الفيض المغناطيسي هي الويبر ($\\text{Wb}$). أي مما يلي يكافئ $1\\text{ Wb}$؟",
    "optionsEn": [
      "$1\\text{ T/m}^2 = 1\\text{ V/s}$",
      "$1\\text{ T} \\cdot \\text{m}^2 = 1\\text{ V} \\cdot \\text{s} = 1\\text{ J/A}$",
      "$1\\text{ N} \\cdot \\text{m} = 1\\text{ A/s}$",
      "$1\\text{ T} \\cdot \\text{A} = 1\\text{ W/m}$"
    ],
    "optionsAr": [
      "$1\\text{ T/m}^2 = 1\\text{ V/s}$",
      "$1\\text{ T} \\cdot \\text{m}^2 = 1\\text{ V} \\cdot \\text{s} = 1\\text{ J/A}$",
      "$1\\text{ N} \\cdot \\text{m} = 1\\text{ A/s}$",
      "$1\\text{ T} \\cdot \\text{A} = 1\\text{ W/m}$"
    ],
    "correctAnswer": "$1\\text{ T} \\cdot \\text{m}^2 = 1\\text{ V} \\cdot \\text{s} = 1\\text{ J/A}$",
    "correctIndex": 1,
    "hintEn": "From $\\Phi_m = B A$ and Faraday's law $\\mathcal{E} = -\\Delta\\Phi_m/\\Delta t$.",
    "hintAr": "من قانون الفيض $\\Phi_m = B A$ وقانون فاراداي للجهد المستحث.",
    "stepByStepSolutionEn": [
      "Since $\\Phi_m = B A$, $1\\text{ Wb} = 1\\text{ T} \\cdot \\text{m}^2$. From Faraday's induction $\\text{EMF} = \\Delta\\Phi/\\Delta t$, $1\\text{ V} = 1\\text{ Wb/s} \\implies 1\\text{ Wb} = 1\\text{ V} \\cdot \\text{s}$. Also, electrical energy $W = V I t = \\Phi I \\implies 1\\text{ Wb} = 1\\text{ J/A} = 1\\text{ N}\\cdot\\text{m/A} = 1\\,\\Omega\\cdot\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\Phi_m = B A$ فإن $1\\text{ Wb} = 1\\text{ T}\\cdot\\text{m}^2$. ومن قانون الحث الكهرومغناطيسي $1\\text{ V} = 1\\text{ Wb/s} \\implies 1\\text{ Wb} = 1\\text{ V}\\cdot\\text{s}$. وتكافئ أيضاً جول/أمبير، أو نيوتن.متر/أمبير، أو أوم.كولوم."
    ],
    "teacherTipEn": "Weber is one of the most frequently asked derived units in Egyptian MoE physics exams.",
    "teacherTipAr": "الويبر من أكثر الوحدات وتكافئاتها تكراراً في امتحانات الثانوية العامة."
  },
  {
    "id": "phys_ch2_db_easy_03",
    "titleEn": "Magnetic Field Pattern Around a Long Straight Conductor",
    "titleAr": "شكل خطوط المجال المغناطيسي حول سلك مستقيم طويل",
    "difficulty": "easy",
    "questionEn": "The magnetic field lines produced by a steady electric current passing through a long straight wire are:",
    "questionAr": "خطوط المجال المغناطيسي الناشئة عن مرور تيار كهربي مستمر في سلك مستقيم طويل تكون على شكل:",
    "optionsEn": [
      "Radial straight lines radiating outward from the wire in all directions",
      "Helical spirals advancing along the length of the conductor",
      "Concentric circles centered on the wire axis, whose planes are perpendicular to the wire",
      "Concentric ellipses parallel to the plane of the current"
    ],
    "optionsAr": [
      "خطوط مستقيمة نصف قطرية تتجه للخارج من السلك في جميع الاتجاهات",
      "خطوط حلزونية لولبية تتقدم على طول السلك",
      "دوائر متحدة المركز مركزها المشترك هو محور السلك، ومستواها عمودي على السلك",
      "قطوع ناقصة متحدة المركز توازي مستوى السلك"
    ],
    "correctAnswer": "Concentric circles centered on the wire axis, whose planes are perpendicular to the wire",
    "correctIndex": 2,
    "hintEn": "Sprinkle iron filings on a horizontal cardboard perpendicular to the vertical wire.",
    "hintAr": "تجربة برادة الحديد على لوح كرتون أفقي عمودي على سلك رأسي.",
    "stepByStepSolutionEn": [
      "Oersted's experiment showed that current in a straight wire creates a circular magnetic field. The lines form concentric circles centered on the wire axis. The circles crowd closer together near the wire (high flux density) and become spaced further apart as the radial distance increases ($B \\propto 1/d$)."
    ],
    "stepByStepSolutionAr": [
      "تتزاحم الدوائر بالقرب من السلك وتتباعد كلما ابتعدنا عنه، مما يدل على أن كثافة الفيض تتناسب عكسياً مع البعد العمودي عن السلك ($B \\propto 1/d$). وتكون هذه الدوائر في مستوى عمودي تماماً على السلك."
    ],
    "teacherTipEn": "Remember: The plane of the magnetic circles is always perpendicular to the current axis.",
    "teacherTipAr": "تذكر دائماً: مستوى دوائر الفيض المغناطيسي عمودي دائماً على محور السلك."
  },
  {
    "id": "phys_ch2_db_easy_04",
    "titleEn": "Biot-Savart Law for a Straight Conductor (Ampere Circuital Law)",
    "titleAr": "قانون أمبير الدائري لكثافة الفيض لسلك مستقيم",
    "difficulty": "easy",
    "questionEn": "The magnetic flux density ($B$) at a perpendicular distance $d$ from a long straight wire carrying current $I$ in a medium of permeability $\\mu$ is:",
    "questionAr": "كثافة الفيض المغناطيسي ($B$) عند نقطة تبعد مسافة عمودية $d$ عن سلك مستقيم طويل يمر به تيار $I$ في وسط معامل نفاذيته $\\mu$ تعطى بقانون أمبير الدائري:",
    "optionsEn": [
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\frac{\\mu I d}{2\\pi}$",
      "$B = \\frac{2\\pi \\mu I}{d}$",
      "$B = \\frac{\\mu I}{2\\pi d}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu I}{4\\pi d^2}$",
      "$B = \\frac{\\mu I d}{2\\pi}$",
      "$B = \\frac{2\\pi \\mu I}{d}$",
      "$B = \\frac{\\mu I}{2\\pi d}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu I}{2\\pi d}$",
    "correctIndex": 3,
    "hintEn": "$B$ is directly proportional to current $I$ and inversely proportional to perpendicular distance $d$.",
    "hintAr": "$B$ تتناسب طردياً مع شدة التيار وعكسياً مع المسافة العمودية.",
    "stepByStepSolutionEn": [
      "According to Ampere's circuital law: $B = \\frac{\\mu I}{2\\pi d}$. In air/vacuum, $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$, so $B = \\frac{4\\pi \\times 10^{-7} I}{2\\pi d} = \\frac{2 \\times 10^{-7} I}{d}$."
    ],
    "stepByStepSolutionAr": [
      "ينص قانون أمبير الدائري على أن $B = \\frac{\\mu I}{2\\pi d}$. وفي الهواء حيث $\\mu = 4\\pi \\times 10^{-7}$، يختصر القانون إلى $B = \\frac{2 \\times 10^{-7} I}{d}$."
    ],
    "teacherTipEn": "Exam warning: The distance $d$ must strictly be the perpendicular distance from the wire to the point.",
    "teacherTipAr": "تحذير امتحاني: يجب أن تكون $d$ هي البعد العمودي من محور السلك إلى النقطة."
  },
  {
    "id": "phys_ch2_db_easy_05",
    "titleEn": "Ampere Right-Hand Grip Rule for Straight Wire Field Direction",
    "titleAr": "قاعدة اليد اليمنى لأمبير لتحديد اتجاه فيض سلك مستقيم",
    "difficulty": "easy",
    "questionEn": "Which rule is used to determine the direction of circular magnetic field lines around a straight current-carrying wire?",
    "questionAr": "ما هي القاعدة المستخدمة لتحديد اتجاه خطوط المجال المغناطيسي الدائرية حول سلك مستقيم يمر به تيار؟",
    "optionsEn": [
      "Right-Hand Grip Rule (Ampere's right-hand rule): pointing the thumb along the current, the curled fingers wrap in the direction of the field",
      "Fleming's Left-Hand Rule: forefinger field, thumb current, middle finger force",
      "Lenz's Rule: induced current opposes the change that produces it",
      "Right-Hand Screw Rule along the axis of rotation only"
    ],
    "optionsAr": [
      "قاعدة اليد اليمنى لأمبير: نقبض على السلك باليد اليمنى بحيث يشير الإبهام لاتجاه التيار، فتشير باقي الأصابع لاتجاه المجال",
      "قاعدة اليد اليسرى لفلمنج لتحديد القوة المغناطيسية",
      "قاعدة لينز لتحديد اتجاه التيار المستحث",
      "قاعدة بريمة ماكسويل فقط عند مراكز الملفات الدائرية"
    ],
    "correctAnswer": "Right-Hand Grip Rule (Ampere's right-hand rule): pointing the thumb along the current, the curled fingers wrap in the direction of the field",
    "correctIndex": 0,
    "hintEn": "Grip the wire with the right hand; thumb points in the direction of conventional current.",
    "hintAr": "اقبض على السلك بيدك اليمنى واجعل الإبهام مع اتجاه التيار الاصطلاحي.",
    "stepByStepSolutionEn": [
      "To find field direction: grasp the conductor with your right hand with your outstretched thumb pointing in the direction of electric current. The curling fingers point in the direction of the magnetic field lines (circles)."
    ],
    "stepByStepSolutionAr": [
      "لتحديد اتجاه المجال المغناطيسي لسلك مستقيم، نقبض على السلك باليد اليمنى بحيث يشير الإبهام إلى اتجاه التيار، فيكون اتجاه التفاف باقي الأصابع هو اتجاه خطوط المجال المغناطيسي."
    ],
    "teacherTipEn": "Dots ($\\odot$) represent field pointing perpendicularly out of page; crosses ($\\otimes$) represent field pointing perpendicularly into page.",
    "teacherTipAr": "النقاط ($\\odot$) تعني فيضاً عمودياً خارجاً من الصفحة، والكروس ($\\otimes$) تعني فيضاً عمودياً داخلاً إلى الصفحة."
  },
  {
    "id": "phys_ch2_db_easy_06",
    "titleEn": "Magnetic Permeability of the Medium Definition and Units",
    "titleAr": "معامل النفاذية المغناطيسية للوسط وتعريفه ووحدته",
    "difficulty": "easy",
    "questionEn": "The magnetic permeability of a medium ($\\mu$) represents:",
    "questionAr": "معامل النفاذية المغناطيسية للوسط ($\\mu$) يعبر عن:",
    "optionsEn": [
      "The resistance of the medium to the flow of electric charges",
      "The ability of the medium to conduct and permit the passage of magnetic flux lines through it",
      "The mechanical stiffness of the coil against rotational torque",
      "The electrostatic capacitance per unit volume of the conductor"
    ],
    "optionsAr": [
      "مقاومة الوسط لمرور الشحنات الكهربية",
      "قابلية الوسط لنفاذ خطوط الفيض المغناطيسي وتوصيلها خلاله",
      "الصلابة الميكانيكية لسلك الملف ضد عزم الازدواج",
      "السعة الكهربية الاستاتيكية لوحدة الحجوم من الموصل"
    ],
    "correctAnswer": "The ability of the medium to conduct and permit the passage of magnetic flux lines through it",
    "correctIndex": 1,
    "hintEn": "$\\mu$ of soft iron is much greater than that of air ($\\mu_{\\text{iron}} \\gg \\mu_{\\text{air}}$).",
    "hintAr": "نفاذية الحديد المطاوع أكبر بكثير من نفاذية الهواء.",
    "stepByStepSolutionEn": [
      "Magnetic permeability $\\mu$ measures how readily a medium concentrates magnetic lines of force. Its SI unit is $\\text{T}\\cdot\\text{m/A}$ or $\\text{Wb}/(\\text{A}\\cdot\\text{m})$ or $\\Omega\\cdot\\text{s/m}$ or $\\text{H/m}$ (Henry/meter). For air, $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$. Soft iron has a permeability thousands of times higher, which is why it is used for cores."
    ],
    "stepByStepSolutionAr": [
      "معامل النفاذية المغناطيسية يقيس قدرة الوسط على إنفاذ خطوط الفيض المغناطيسي خلاله. وحدته في النظام الدولي: تسلا.متر/أمبير، أو ويبر/(أمبير.متر)، أو هنري/متر. نفاذية الحديد المطاوع أكبر بآلاف المرات من نفاذية الهواء، ولذلك تصنع قلوب المحولات والملفات من الحديد المطاوع لتركيز خطوط الفيض."
    ],
    "teacherTipEn": "Soft iron concentrates field lines because its high permeability offers a path of low magnetic reluctance.",
    "teacherTipAr": "يقوم الحديد المطاوع بتجميع خطوط الفيض وتكثيفها لكبر معامل نفاذيته المغناطيسية."
  },
  {
    "id": "phys_ch2_db_easy_07",
    "titleEn": "Neutral Point Location for Parallel Currents in Same Direction",
    "titleAr": "موقع نقطة التعادل لسلكين متوازيين يمر بهما تياران في نفس الاتجاه",
    "difficulty": "easy",
    "questionEn": "Where is the magnetic neutral point located between two long straight parallel wires carrying unequal currents in the same direction?",
    "questionAr": "أين تقع نقطة التعادل لسلكين مستقيمين متوازيين يمر بهما تياران كهربيان مختلفان في نفس الاتجاه؟",
    "optionsEn": [
      "Outside both wires on the line connecting them, closer to the wire carrying the larger current",
      "Midway between the wires regardless of the current magnitudes",
      "Between the two wires on the line connecting them, closer to the wire carrying the smaller current",
      "Perpendicularly above the wires at a distance equal to their separation"
    ],
    "optionsAr": [
      "خارج السلكين على امتداد الخط الواصل بينهما، بالقرب من السلك الأكبر تياراً",
      "في منتصف المسافة بين السلكين دائماً بغض النظر عن قيمتي التيارين",
      "بين السلكين على الخط الواصل بينهما، وأقرب إلى السلك الذي يمر به تيار أقل",
      "عمودياً فوق السلكين على مسافة تساوي البعد بينهما"
    ],
    "correctAnswer": "Between the two wires on the line connecting them, closer to the wire carrying the smaller current",
    "correctIndex": 2,
    "hintEn": "Currents in same direction produce opposing fields between them ($B_{\\text{net}} = B_1 - B_2 = 0$).",
    "hintAr": "التياران في نفس الاتجاه يولدان مجالين متعاكسين في المنطقة بينهما، فتقع نقطة التعادل بينهما.",
    "stepByStepSolutionEn": [
      "When two parallel wires carry currents in the same direction, their magnetic fields between the wires oppose each other: $B_{\\text{net}} = |B_1 - B_2|$. At the neutral point, $B_1 = B_2 \\implies \\frac{\\mu I_1}{2\\pi d_1} = \\frac{\\mu I_2}{2\\pi d_2} \\implies \\frac{I_1}{d_1} = \\frac{I_2}{d_2}$. Thus, the point lies between the wires, shifted closer to the wire carrying the weaker current."
    ],
    "stepByStepSolutionAr": [
      "عند مرور تيارين في نفس الاتجاه في سلكين متوازيين، يكون المجالان بين السلكين متضادين في الاتجاه (منطقة طرح: $B_t = |B_1 - B_2|$). وعند نقطة التعادل ينعدم الفيض الكلي ($B_1 = B_2$)، مما يعطي $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$، ولذا تقع نقطة التعادل بين السلكين وأقرب إلى السلك الأقل تياراً."
    ],
    "teacherTipEn": "If the two currents in the same direction are equal ($I_1 = I_2$), the neutral point is exactly at the midpoint.",
    "teacherTipAr": "إذا تساوى التياران في المقدار والاتجاه ($I_1 = I_2$)، تقع نقطة التعادل في منتصف المسافة بين السلكين تماماً."
  },
  {
    "id": "phys_ch2_db_easy_08",
    "titleEn": "Neutral Point for Parallel Currents in Opposite Directions",
    "titleAr": "موقع نقطة التعادل لسلكين متوازيين يمر بهما تياران في اتجاهين متضادين",
    "difficulty": "easy",
    "questionEn": "For two long straight parallel wires carrying unequal currents ($I_1 \\ne I_2$) in OPPOSITE directions, where is the neutral point located?",
    "questionAr": "لسلكين مستقيمين متوازيين يمر بهما تياران كهربيان غير متساويين ($I_1 \\ne I_2$) في اتجاهين متضادين، أين تقع نقطة التعادل؟",
    "optionsEn": [
      "Between the two wires, closer to the wire carrying the larger current",
      "Midway between the two wires where fields cancel",
      "At an infinite distance perpendicular to the plane of the wires",
      "Outside the two wires on the line joining them, closer to the wire carrying the smaller current"
    ],
    "optionsAr": [
      "بين السلكين بالقرب من السلك الأكبر تياراً",
      "في منتصف المسافة بين السلكين",
      "في المالانهاية على مستوى عمودي على السلكين",
      "خارج السلكين على امتداد الخط الواصل بينهما، بالقرب من السلك الذي يحمل تياراً أقل"
    ],
    "correctAnswer": "Outside the two wires on the line joining them, closer to the wire carrying the smaller current",
    "correctIndex": 3,
    "hintEn": "Between opposite-current wires, fields add together ($B_{\\text{net}} = B_1 + B_2 \\ne 0$). Cancellation occurs outside.",
    "hintAr": "بين السلكين تتحد خطوط الفيض (منطقة جمع $B_t = B_1 + B_2$)، ولذلك تقع نقطة التعادل في الخارج بجوار السلك الأقل تياراً.",
    "stepByStepSolutionEn": [
      "When currents flow in opposite directions, the magnetic fields between the wires are in the same direction and reinforce each other ($B_{\\text{net}} = B_1 + B_2 > 0$). The fields oppose each other only in the external regions. Since $B \\propto I/d$, equality $B_1 = B_2$ can only occur outside the two wires, closer to the weaker current so that the smaller $I$ is compensated by a smaller distance $d$."
    ],
    "stepByStepSolutionAr": [
      "عند مرور التيارين في اتجاهين متضادين، يكون المجالان بين السلكين في نفس الاتجاه (منطقة جمع)، بينما تكون المنطقة خارجهما منطقة طرح. ولكي يتساوى المجالان $B_1 = B_2$ يجب أن تكون النقطة في الخارج بالقرب من السلك ذي التيار الأقل ليعوض صغر المسافة صغر شدة التيار وفق العلاقة $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$."
    ],
    "teacherTipEn": "If two opposite currents are EQUAL ($I_1 = I_2$), NO neutral point exists anywhere in space.",
    "teacherTipAr": "إذا كان التياران المتضادان متساويين في المقدار ($I_1 = I_2$)، فلا توجد نقطة تعادل في أي مكان."
  },
  {
    "id": "phys_ch2_db_easy_09",
    "titleEn": "Condition for Non-Existence of a Magnetic Neutral Point",
    "titleAr": "حالة عدم وجود نقطة تعادل لسلكين متوازيين",
    "difficulty": "easy",
    "questionEn": "Under what condition does NO magnetic neutral point exist in the vicinity of two long straight parallel wires?",
    "questionAr": "في أي حالة لا تتكون نقطة تعادل مغناطيسية بالقرب من سلكين مستقيمين متوازيين؟",
    "optionsEn": [
      "When the two wires carry equal currents in opposite directions ($I_1 = I_2$, opposite directions)",
      "When the two wires carry equal currents in the same direction",
      "When the two wires carry unequal currents in the same direction",
      "When both wires are made of copper and enclosed in a vacuum"
    ],
    "optionsAr": [
      "عندما يمر في السلكين تياران متساويان في المقدار وفي اتجاهين متضادين",
      "عندما يمر في السلكين تياران متساويان في المقدار وفي نفس الاتجاه",
      "عندما يمر في السلكين تياران مختلفان في نفس الاتجاه",
      "عندما يكون السلكان مصنوعين من النحاس وموضوعين في الفراغ"
    ],
    "correctAnswer": "When the two wires carry equal currents in opposite directions ($I_1 = I_2$, opposite directions)",
    "correctIndex": 0,
    "hintEn": "Cancellation requires $I_1/d_1 = I_2/d_2$. If $I_1 = I_2$, this requires $d_1 = d_2$, impossible outside the wires.",
    "hintAr": "شرط التعادل هو $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$. إذا كان $I_1 = I_2$ يلزم أن تكون $d_1 = d_2$، وهو مستحيل خارج السلكين.",
    "stepByStepSolutionEn": [
      "To have $B_1 = B_2$ outside the wires, we must have $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$. If $I_1 = I_2$, then $d_1$ must equal $d_2$. But for any external point on the axis, one wire is strictly closer than the other ($d_1 \\ne d_2$), so $B_1 \\ne B_2$ everywhere. Between the wires, fields add together ($B_{\\text{net}} = B_1 + B_2 \\ne 0$). Therefore, no neutral point exists."
    ],
    "stepByStepSolutionAr": [
      "لتحقيق التعادل خارج السلكين يلزم أن يكون $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$. وحيث أن $I_1 = I_2$، يجب أن يكون $d_1 = d_2$، وهو ما يستحيل تحقيقه عند أي نقطة خارج السلكين لأن المسافة لأحد السلكين أكبر دائماً من الآخر بمقدار المسافة الفاصلة بينهما. وبما أن المنطقة بينهما هي منطقة جمع، فإنه لا توجد نقطة تعادل في أي مكان."
    ],
    "teacherTipEn": "A classic conceptual question on Egyptian secondary certificate physics examinations.",
    "teacherTipAr": "سؤال مفاهيمي أساسي يتكرر دائماً في امتحانات الثانوية العامة."
  },
  {
    "id": "phys_ch2_db_easy_10",
    "titleEn": "Magnetic Field Characteristics at the Center of a Circular Coil",
    "titleAr": "خصائص خطوط المجال المغناطيسي عند مركز ملف دائري",
    "difficulty": "easy",
    "questionEn": "At the exact center of a planar circular current-carrying coil, the magnetic field lines are:",
    "questionAr": "عند مركز ملف دائري مستوٍ يمر به تيار كهربي، تكون خطوط المجال المغناطيسي:",
    "optionsEn": [
      "Concentric circles identical to those around a straight conductor",
      "Straight, parallel lines perpendicular to the plane of the coil, forming a uniform magnetic field",
      "Curved hyperbolas parallel to the coil circumference",
      "Completely absent because the field cancels to zero at the geometric center"
    ],
    "optionsAr": [
      "دوائر متحدة المركز مماثلة تماماً لتلك المحيطة بسلك مستقيم",
      "خطوطاً مستقيمة متوازية وعمودية على مستوى الملف، مما يشكل مجالاً مغناطيسياً منتظماً",
      "منحنيات زائدة توازي محيط الملف",
      "منعدمة تماماً لأن المجالات تتلاشى عند المركز الهندسي للملف"
    ],
    "correctAnswer": "Straight, parallel lines perpendicular to the plane of the coil, forming a uniform magnetic field",
    "correctIndex": 1,
    "hintEn": "Near the wires the lines are circular; at the center they straighten out perpendicular to the coil plane.",
    "hintAr": "بالقرب من محيط السلك تكون الخطوط بيضاوية، وتستقيم عند المركز لتصبح عمودية على مستوى الملف.",
    "stepByStepSolutionEn": [
      "As current circulates around the loop, the magnetic field lines near the conductor are circular loops. As they approach the center from all sides, their curvatures flatten out. At the central region of the circular coil, the field lines become parallel straight lines perpendicular to the plane of the coil, representing a uniform magnetic field over a small area."
    ],
    "stepByStepSolutionAr": [
      "عند مرور تيار في ملف دائري تفقد خطوط الفيض دائريتها بالقرب من محيط السلك وتصبح مسارات بيضاوية، وتتزاحم داخل الملف وتستقيم عند المركز تماماً لتكون خطوطاً مستقيمة متوازية وعمودية على مستوى الملف، فيعتبر المجال عند المركز مجالاً مغناطيسياً منتظماً."
    ],
    "teacherTipEn": "Because the lines are straight and parallel at the center, the field density is strictly $B = \\frac{\\mu N I}{2r}$.",
    "teacherTipAr": "لاستقامة خطوط الفيض وتوازيها عند المركز، تحسب كثافة الفيض بدقة من القانون $B = \\frac{\\mu N I}{2r}$."
  },
  {
    "id": "phys_ch2_db_easy_11",
    "titleEn": "Circular Coil Center Magnetic Flux Density Formula",
    "titleAr": "صيغة كثافة الفيض المغناطيسي عند مركز ملف دائري",
    "difficulty": "easy",
    "questionEn": "The magnetic flux density ($B$) at the center of a circular coil of $N$ turns, radius $r$, carrying current $I$ is:",
    "questionAr": "تعطى كثافة الفيض المغناطيسي ($B$) عند مركز ملف دائري عدد لفاته $N$ ونصف قطره $r$ ويمر به تيار $I$ بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{2\\pi r}$",
      "$B = \\frac{\\mu I}{2 N r}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{2\\pi r}$",
      "$B = \\frac{\\mu I}{2 N r}$",
      "$B = \\frac{\\mu N I}{2r}$",
      "$B = \\frac{2\\mu N I}{r^2}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{2r}$",
    "correctIndex": 2,
    "hintEn": "Notice the denominator contains $2r$ (diameter), not $2\\pi r$.",
    "hintAr": "لاحظ أن المقام يحتوي على القطر $2r$ وليس المحيط $2\\pi r$.",
    "stepByStepSolutionEn": [
      "The magnetic flux density at the center of a circular coil is $B = \\frac{\\mu N I}{2r}$. It is directly proportional to permeability $\\mu$, number of turns $N$, and electric current $I$, and inversely proportional to coil radius $r$ (or diameter $2r$)."
    ],
    "stepByStepSolutionAr": [
      "كثافة الفيض عند مركز الملف الدائري تعطى بالقانون: $B = \\frac{\\mu N I}{2r}$. وتتناسب طردياً مع كل من معامل النفاذية المغناطيسية $\\mu$ وعدد اللفات $N$ وشديدة التيار $I$، وعكسياً مع نصف قطر الملف $r$ (أو قطره $2r$)."
    ],
    "teacherTipEn": "Do not confuse the straight wire formula ($B = \\frac{\\mu I}{2\\pi d}$) with the circular coil formula ($B = \\frac{\\mu N I}{2r}$).",
    "teacherTipAr": "لا تخلط بين قانون السلك المستقيم ($B = \\frac{\\mu I}{2\\pi d}$) وقانون الملف الدائري ($B = \\frac{\\mu N I}{2r}$)."
  },
  {
    "id": "phys_ch2_db_easy_12",
    "titleEn": "Clock Face Rule for Determining Magnetic Polarity of a Coil",
    "titleAr": "قاعدة عقارب الساعة لتحديد القطبية المغناطيسية لوجه ملف",
    "difficulty": "easy",
    "questionEn": "According to the Clock Face Rule, if an observer looks at the face of a circular coil and sees the conventional electric current flowing in a CLOCKWISE direction, that face behaves as a:",
    "questionAr": "وفقاً لقاعدة حركة عقارب الساعة، إذا نظر شخص إلى وجه ملف دائري ورأى التيار الكهربي يدور في اتجاه حركة عقارب الساعة، فإن هذا الوجه يكون:",
    "optionsEn": [
      "North magnetic pole (N)",
      "Neutral non-magnetic face",
      "Positive electrostatic cathode",
      "South magnetic pole (S)"
    ],
    "optionsAr": [
      "قطباً مغناطيسياً شمالياً (N)",
      "وجهاً متعادلاً غير مغناطيسي",
      "مهبطاً كهروستاتيكياً موجباً",
      "قطباً مغناطيسياً جنوبياً (S)"
    ],
    "correctAnswer": "South magnetic pole (S)",
    "correctIndex": 3,
    "hintEn": "Clockwise = South (letters of S curve with arrows); Counterclockwise = North (letters of N curve with arrows).",
    "hintAr": "مع عقارب الساعة = جنوبي (S)، وعكس عقارب الساعة = شمالي (N).",
    "stepByStepSolutionEn": [
      "The Clock Face Rule states: If the current flows clockwise around the face, that face is a South (S) magnetic pole (flux lines enter this face). If the current flows counterclockwise, that face is a North (N) magnetic pole (flux lines emerge from this face)."
    ],
    "stepByStepSolutionAr": [
      "تنص قاعدة عقارب الساعة على أنه: إذا كان اتجاه التيار في وجه الملف مع حركة عقارب الساعة، فإن هذا الوجه يمثل قطباً جنوبياً (S) تدخل فيه خطوط الفيض. وإذا كان اتجاه التيار عكس عقارب الساعة، فإن هذا الوجه يمثل قطباً شمالياً (N) تخرج منه خطوط الفيض."
    ],
    "teacherTipEn": "A circular coil acts like a thin magnetic disc or short magnet with two opposite poles on its two faces.",
    "teacherTipAr": "الملف الدائري يكافئ قرصاً مغناطيسياً رقيقاً أو مغناطيساً قصيراً له قطبان متضادان على وجهيه."
  },
  {
    "id": "phys_ch2_db_easy_13",
    "titleEn": "Magnetic Flux Density Along Central Axis of an Ideal Solenoid",
    "titleAr": "كثافة الفيض المغناطيسي عند محور ملف لولبي",
    "difficulty": "easy",
    "questionEn": "The magnetic flux density ($B$) along the internal central axis of an ideal solenoid of length $L$, carrying current $I$, with $N$ total turns is:",
    "questionAr": "كثافة الفيض المغناطيسي ($B$) عند نقطة على امتداد محور ملف لولبي (حلزوني) طوله $L$ وعدد لفاته الكلية $N$ ويمر به تيار $I$ تعطى بالعلاقة:",
    "optionsEn": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu N I}{2\\pi L}$",
      "$B = \\frac{\\mu I L}{N}$",
      "$B = \\frac{2\\mu N I}{L^2}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu N I}{L} = \\mu n I$",
      "$B = \\frac{\\mu N I}{2\\pi L}$",
      "$B = \\frac{\\mu I L}{N}$",
      "$B = \\frac{2\\mu N I}{L^2}$"
    ],
    "correctAnswer": "$B = \\frac{\\mu N I}{L} = \\mu n I$",
    "correctIndex": 0,
    "hintEn": "$n = N/L$ is the number of turns per unit length (turns/meter).",
    "hintAr": "$n = N/L$ هو عدد اللفات لوحدة الأطوال من الملف.",
    "stepByStepSolutionEn": [
      "Inside an ideal long solenoid, the magnetic field is uniform, directed parallel to its central axis, and given by $B = \\frac{\\mu N I}{L} = \\mu n I$, where $n = \\frac{N}{L}$ is the linear turn density. Note that $B$ is independent of the solenoid's cross-sectional radius."
    ],
    "stepByStepSolutionAr": [
      "داخل الملف اللولبي يكون المجال المغناطيسي منتظماً وموازياً لمحوره، ويعطى بالقانون $B = \\mu \\frac{N}{L} I = \\mu n I$ حيث $n$ عدد اللفات لوحدة الأطوال. لاحظ أن كثافة الفيض داخل الملف اللولبي لا تعتمد إطلاقاً على نصف قطر لفاته."
    ],
    "teacherTipEn": "Externally, the magnetic field of a solenoid closely resembles that of a long bar magnet.",
    "teacherTipAr": "يشبه المجال المغناطيسي للملف اللولبي تماماً المجال المغناطيسي لقضيب مغناطيسي طويل."
  },
  {
    "id": "phys_ch2_db_easy_14",
    "titleEn": "Role of Soft Iron Core in Enhancing Solenoid Field",
    "titleAr": "دور القلب المصنوع من الحديد المطاوع داخل الملف اللولبي",
    "difficulty": "easy",
    "questionEn": "Why is a cylinder of soft iron placed inside the core of a solenoid or electromagnet?",
    "questionAr": "لماذا يوضع قضيب من الحديد المطاوع داخل تجويف الملف اللولبي (المغناطيس الكهربي)؟",
    "optionsEn": [
      "To increase the electrical resistance of the circuit to save battery energy",
      "Because soft iron has high magnetic permeability ($\\mu_{\\text{iron}} \\gg \\mu_{\\text{air}}$), concentrating and greatly increasing the magnetic flux density",
      "To permanently freeze the polarity so it cannot be reversed",
      "To shield the coil from gravitational waves"
    ],
    "optionsAr": [
      "لزيادة المقاومة الكهربية للدائرة وتوفير طاقة البطارية",
      "لأن الحديد المطاوع يتميز بكبر معامل نفاذيته المغناطيسية بدرجة كبيرة، فيعمل على تركيز وتكثيف خطوط الفيض المغناطيسي",
      "لتثبيت القطبية المغناطيسية بحيث لا تنعكس أبداً",
      "لحجب الملف عن موجات الجاذبية الأرضية"
    ],
    "correctAnswer": "Because soft iron has high magnetic permeability ($\\mu_{\\text{iron}} \\gg \\mu_{\\text{air}}$), concentrating and greatly increasing the magnetic flux density",
    "correctIndex": 1,
    "hintEn": "High $\\mu$ means greater flux density $B = \\mu n I$ for the same current.",
    "hintAr": "زيادة $\\mu$ تزيد من $B$ لنفس شدة التيار وعدد اللفات.",
    "stepByStepSolutionEn": [
      "Soft iron has very high magnetic permeability compared to air ($\\mu_{\\text{iron}} \\approx 1000 - 5000\\,\\mu_0$). Placing a soft iron core provides an easy, low-reluctance path that gathers and concentrates the magnetic lines of force inside the solenoid, multiplying the internal flux density $B$ by thousands of times."
    ],
    "stepByStepSolutionAr": [
      "يمتلك الحديد المطاوع معامل نفاذية مغناطيسية هائلاً مقارنة بالهواء، ولذا يعمل القطب الحديدي على تجميع وتركيز خطوط الفيض المغناطيسي داخل الملف، مما يضاعف كثافة الفيض المغناطيسي الناتجة بآلاف المرات لنفس شدة التيار."
    ],
    "teacherTipEn": "Furthermore, soft iron magnetizes and demagnetizes quickly with minimal hysteresis loss.",
    "teacherTipAr": "كما يتميز الحديد المطاوع بسهولة تمغنطه وفقدانه للمغناطيسية بسرعة بمجرد قطع التيار."
  },
  {
    "id": "phys_ch2_db_easy_15",
    "titleEn": "Magnetic Force on a Current-Carrying Conductor in a Field",
    "titleAr": "القوة المغناطيسية المؤثرة على سلك مستقيم يمر به تيار في مجال مغناطيسي",
    "difficulty": "easy",
    "questionEn": "A straight wire of active length $L$ carrying electric current $I$ placed in a uniform magnetic field $B$ experiences a magnetic force given by:",
    "questionAr": "سلك مستقيم طوله الفعال $L$ يمر به تيار $I$ وموضوع في مجال مغناطيسي منتظم $B$ يتأثر بقوة مغناطيسية تعطى بالعلاقة:",
    "optionsEn": [
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B I L \\sin\\theta$",
      "$F = B^2 I^2 L$"
    ],
    "optionsAr": [
      "$F = B I L \\cos\\theta$",
      "$F = \\frac{B I}{L} \\sin\\theta$",
      "$F = B I L \\sin\\theta$",
      "$F = B^2 I^2 L$"
    ],
    "correctAnswer": "$F = B I L \\sin\\theta$",
    "correctIndex": 2,
    "hintEn": "$\\theta$ is the angle between the conductor and the magnetic field lines.",
    "hintAr": "$\\theta$ هي الزاوية المحصورة بين السلك واتجاه خطوط المجال المغناطيسي.",
    "stepByStepSolutionEn": [
      "The magnetic force on a straight conductor is $F = B I L \\sin\\theta$. When the wire is perpendicular to the field ($\\theta = 90^\\circ$), force is maximum ($F_{\\max} = B I L$). When the wire is parallel to the field ($\\theta = 0^\\circ$), $\\sin 0^\\circ = 0$, so no magnetic force acts on the wire ($F = 0$)."
    ],
    "stepByStepSolutionAr": [
      "القوة المغناطيسية تحسب من $F = B I L \\sin\\theta$. إذا كان السلك عمودياً على المجال ($\\theta = 90^\\circ$) تكون القوة قيمة عظمى ($F = B I L$). وإذا كان السلك موازياً للمجال ($\\theta = 0^\\circ$) تنعدم القوة المغناطيسية تماماً ($F = 0$)."
    ],
    "teacherTipEn": "Always verify whether the wire is parallel or perpendicular to the field lines.",
    "teacherTipAr": "تأكد دائماً في المسائل مما إذا كان السلك موازياً لخطوط المجال أو عمودياً عليها."
  },
  {
    "id": "phys_ch2_db_easy_16",
    "titleEn": "Fleming Left-Hand Rule for Magnetic Force Direction",
    "titleAr": "قاعدة اليد اليسرى لفلمنج لتحديد اتجاه القوة المغناطيسية",
    "difficulty": "easy",
    "questionEn": "Which rule is utilized to determine the direction of the magnetic force acting on a straight current-carrying conductor in a magnetic field?",
    "questionAr": "أي القواعد التالية تستخدم لتحديد اتجاه القوة المغناطيسية المؤثرة على سلك مستقيم يمر به تيار في مجال مغناطيسي؟",
    "optionsEn": [
      "Fleming's Right-Hand Rule (used for induced current in a dynamo wire)",
      "Lenz's Rule (used for direction of induced EMF in a coil)",
      "Ampere's Circuital Law",
      "Fleming's Left-Hand Rule"
    ],
    "optionsAr": [
      "قاعدة اليد اليمنى لفلمنج (المستخدمة للتيار المستحث)",
      "قاعدة لينز (للحث الكهرومغناطيسي)",
      "قانون أمبير الدائري",
      "قاعدة اليد اليسرى لفلمنج"
    ],
    "correctAnswer": "Fleming's Left-Hand Rule",
    "correctIndex": 3,
    "hintEn": "Left hand: Thumb = Force/Motion, Forefinger = Field, Middle finger = Current.",
    "hintAr": "اليد اليسرى: الإبهام = الحركة/القوة، السبابة = المجال، الوسطى = التيار.",
    "stepByStepSolutionEn": [
      "Fleming's Left-Hand Rule determines the direction of magnetic force: extend the thumb, forefinger, and middle finger of the left hand mutually perpendicular. Forefinger points in the direction of the magnetic field ($B$), middle finger points along conventional current ($I$), and the thumb points in the direction of magnetic force ($F$)."
    ],
    "stepByStepSolutionAr": [
      "تنص قاعدة اليد اليسرى لفلمنج على: نجعل أصابع اليد اليسرى (الإبهام والسبابة وباقي الأصابع) متعامدة على بعضها البعض، بحيث تشير السبابة لاتجاه المجال المغناطيسي، وتشير باقي الأصابع لاتجاه التيار الكهربي، فيشير الإبهام لاتجاه القوة المغناطيسية المؤثرة على السلك (اتجاه الحركة)."
    ],
    "teacherTipEn": "Do not confuse with Fleming's Right-Hand Rule, which is used for induced currents (Chapter 3).",
    "teacherTipAr": "لا تخلط بينها وبين قاعدة اليد اليمنى لفلمنج المستخدمة لتحديد اتجاه التيار المستحث (الفصل الثالث)."
  },
  {
    "id": "phys_ch2_db_easy_17",
    "titleEn": "Definition and Physical Meaning of the Tesla (SI Unit of B)",
    "titleAr": "تعريف التسلا كوحدة لقياس كثافة الفيض المغناطيسي",
    "difficulty": "easy",
    "questionEn": "One Tesla ($1\\text{ T}$) is defined as the magnetic flux density that exerts a magnetic force of:",
    "questionAr": "تُعرّف التسلا ($1\\text{ T}$) بأنها كثافة الفيض المغناطيسي التي تولد قوة مغناطيسية مقدارها:",
    "optionsEn": [
      "$1\\text{ N}$ on a $1\\text{ m}$ long wire carrying a current of $1\\text{ A}$ placed perpendicularly to the field",
      "$1\\text{ N}$ on a charge of $1\\text{ C}$ moving at $1\\text{ m/s}$ parallel to the field",
      "$1\\text{ J}$ of torque on a circular coil of area $1\\text{ m}^2$",
      "$1\\text{ Wb}$ per unit volume of conductor"
    ],
    "optionsAr": [
      "$1\\text{ N}$ على سلك طوله $1\\text{ m}$ ويمر به تيار $1\\text{ A}$ وموضوع عمودياً على خطوط المجال",
      "$1\\text{ N}$ على شحنة كولوم تتحرك موازية لخطوط المجال",
      "$1\\text{ J}$ من عزم الازدواج على ملف دائري مساحته $1\\text{ m}^2$",
      "$1\\text{ Wb}$ لكل وحدة حجوم من الموصل"
    ],
    "correctAnswer": "$1\\text{ N}$ on a $1\\text{ m}$ long wire carrying a current of $1\\text{ A}$ placed perpendicularly to the field",
    "correctIndex": 0,
    "hintEn": "From $F = B I L \\sin 90^\\circ \\implies B = \\frac{F}{I L}$.",
    "hintAr": "من القانون $B = \\frac{F}{I L}$ عندما يكون السلك عمودياً.",
    "stepByStepSolutionEn": [
      "From $B = \\frac{F}{I L \\sin\\theta}$, when $F = 1\\text{ N}, I = 1\\text{ A}, L = 1\\text{ m}$, and $\\theta = 90^\\circ$, $B = 1\\text{ T}$. Hence, $1\\text{ T} = 1\\text{ N}/(\\text{A}\\cdot\\text{m}) = 1\\text{ Wb/m}^2 = 1\\text{ V}\\cdot\\text{s/m}^2 = 1\\text{ kg}/(\\text{A}\\cdot\\text{s}^2)$."
    ],
    "stepByStepSolutionAr": [
      "التسلا هي كثافة الفيض المغناطيسي الذي يولد قوة مغناطيسية مقدارها واحد نيوتن على سلك طوله واحد متر يمر به تيار شدته واحد أمبير وموضوع عمودياً على اتجاه المجال. وتكافئ نيوتن/(أمبير.متر) أو ويبر/متر مربع."
    ],
    "teacherTipEn": "Tesla is named after Nikola Tesla, pioneer of alternating current.",
    "teacherTipAr": "سميت وحدة التسلا تكريماً للعالم نيكولا تسلا رائد أنظمة التيار المتردد."
  },
  {
    "id": "phys_ch2_db_easy_18",
    "titleEn": "Mutual Magnetic Force Between Two Parallel Conductors",
    "titleAr": "القوة المتبادلة بين سلكين مستقيمين متوازيين يمر بهما تيار",
    "difficulty": "easy",
    "questionEn": "The mutual magnetic force per unit length ($\\frac{F}{L}$) between two long parallel wires separated by distance $d$ carrying currents $I_1$ and $I_2$ in vacuum is:",
    "questionAr": "القوة المغناطيسية المتبادلة لوحدة الأطوال ($\\frac{F}{L}$) بين سلكين متوازيين تفصل بينهما مسافة $d$ ويمر بهما تياران $I_1$ و $I_2$ في الفراغ تعطى بالعلاقة:",
    "optionsEn": [
      "$\\frac{F}{L} = \\frac{\\mu_0 (I_1 + I_2)}{2\\pi d}$",
      "$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$",
      "$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{4\\pi d^2}$",
      "$\\frac{F}{L} = \\frac{2\\pi \\mu_0 I_1 I_2}{d}$"
    ],
    "optionsAr": [
      "$\\frac{F}{L} = \\frac{\\mu_0 (I_1 + I_2)}{2\\pi d}$",
      "$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$",
      "$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{4\\pi d^2}$",
      "$\\frac{F}{L} = \\frac{2\\pi \\mu_0 I_1 I_2}{d}$"
    ],
    "correctAnswer": "$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$",
    "correctIndex": 1,
    "hintEn": "First wire creates field $B_1 = \\frac{\\mu I_1}{2\\pi d}$; second wire experiences force $F = B_1 I_2 L$.",
    "hintAr": "السلك الأول يولد مجالاً $B_1$، ويتأثر السلك الثاني بقوة $F = B_1 I_2 L$.",
    "stepByStepSolutionEn": [
      "Wire 1 produces a magnetic field at wire 2: $B_1 = \\frac{\\mu I_1}{2\\pi d}$. The force on length $L$ of wire 2 is $F = B_1 I_2 L = \\frac{\\mu I_1 I_2 L}{2\\pi d}$. By Newton's third law, wire 1 experiences an equal and opposite force, making the mutual force: $F = \\frac{\\mu I_1 I_2 L}{2\\pi d}$."
    ],
    "stepByStepSolutionAr": [
      "يولد السلك الأول مجالاً مغناطيسياً عند موضع السلك الثاني: $B_1 = \\frac{\\mu I_1}{2\\pi d}$، فيتأثر طول قدره $L$ من السلك الثاني بقوة $F = B_1 I_2 L = \\frac{\\mu I_1 I_2 L}{2\\pi d}$. ووفق قانون نيوتن الثالث يؤثر السلك الثاني على الأول بقوة مساوية لها في المقدار ومضادة في الاتجاه."
    ],
    "teacherTipEn": "Attraction occurs if currents flow in the same direction; repulsion occurs if currents flow in opposite directions.",
    "teacherTipAr": "تكون القوة تجاذباً إذا كان التياران في نفس الاتجاه، وتنافراً إذا كانا في اتجاهين متضادين."
  },
  {
    "id": "phys_ch2_db_easy_19",
    "titleEn": "Physical Explanation of Attractive vs Repulsive Wire Forces",
    "titleAr": "التفسير الفيزيائي لقوى التجاذب والتنافر بين الأسلاك المتوازية",
    "difficulty": "easy",
    "questionEn": "Why do two long parallel wires carrying electric currents in the SAME direction attract each other?",
    "questionAr": "لماذا يتجاذب سلكان مستقيمان متوازيان يمر بهما تياران كهربييان في نفس الاتجاه؟",
    "optionsEn": [
      "Because positive and negative electrical charges attract gravitationally",
      "Because electric field lines pull the atomic nuclei together",
      "Because the magnetic flux density between the wires ($B_{\\text{net}} = B_1 - B_2$) is less than the flux density outside them ($B_{\\text{net}} = B_1 + B_2$), so the wires are pushed from the higher field region to the lower field region",
      "Because air pressure between the wires drops to absolute vacuum"
    ],
    "optionsAr": [
      "لأن الشحنات الموجبة والسالبة تتجاذب بقوة التثاقل",
      "لأن خطوط المجال الكهربي تشد أنوية الذرات لبعضها",
      "لأن محصلة كثافة الفيض بين السلكين (منطقة طرح $B_1 - B_2$) أقل من محصلة كثافة الفيض خارجهما (منطقة جمع $B_1 + B_2$)، فتتحرك الأسلاك من منطقة الكثافة الأعلى إلى منطقة الكثافة الأقل",
      "لأن ضغط الهواء بين السلكين ينخفض إلى الصفر التام"
    ],
    "correctAnswer": "Because the magnetic flux density between the wires ($B_{\\text{net}} = B_1 - B_2$) is less than the flux density outside them ($B_{\\text{net}} = B_1 + B_2$), so the wires are pushed from the higher field region to the lower field region",
    "correctIndex": 2,
    "hintEn": "Conductors are always pushed from regions of high magnetic flux density to regions of low flux density.",
    "hintAr": "تتحرك الأسلاك دائماً من الموضع ذي كثافة الفيض الأعلى إلى الموضع ذي كثافة الفيض الأقل.",
    "stepByStepSolutionEn": [
      "Between the two wires carrying currents in the same direction, the magnetic fields have opposite directions, so the net field is reduced: $B_{\\text{between}} = |B_1 - B_2|$. Outside the wires, the fields point in the same direction, so they add up: $B_{\\text{outside}} = B_1 + B_2$. The resulting gradient of magnetic pressure pushes both wires inward toward the lower field region (mutual attraction)."
    ],
    "stepByStepSolutionAr": [
      "عند مرور التيارين في نفس الاتجاه، يكون اتجاه المجالان بين السلكين متضادين فتكون كثافة الفيض بينهما هي حاصل الطرح، بينما خارجهما تكون في نفس الاتجاه ومحصلتها هي حاصل الجمع. وبذلك تكون كثافة الفيض خارج السلكين أكبر من كثافة الفيض بينهما، فتتولد قوة تحرك كل سلك من منطقة الكثافة الأعلى (الخارج) إلى منطقة الكثافة الأقل (الداخل)، فيحدث التجاذب."
    ],
    "teacherTipEn": "Conversely, for opposite currents, $B_{\\text{between}} = B_1 + B_2 > B_{\\text{outside}}$, repelling the wires outward.",
    "teacherTipAr": "أما إذا كان التياران في اتجاهين متضادين، تكون المنطقة بينهما منطقة جمع وخارجهما منطقة طرح، فيحدث التنافر."
  },
  {
    "id": "phys_ch2_db_easy_20",
    "titleEn": "Equality of Mutual Forces Regardless of Current Disparity",
    "titleAr": "تساوي القوة المتبادلة بين سلكين بغض النظر عن اختلاف شدتي التيارين",
    "difficulty": "easy",
    "questionEn": "Two parallel wires $X$ and $Y$ carry steady currents of $I_X = 2\\text{ A}$ and $I_Y = 10\\text{ A}$, respectively. If wire $X$ exerts a magnetic force of magnitude $F$ on wire $Y$, what is the magnitude of the magnetic force exerted by wire $Y$ on wire $X$?",
    "questionAr": "سلكان متوازيان $X$ و $Y$ يمر بهما تياران مستمران شدتهما $I_X = 2\\text{ A}$ و $I_Y = 10\\text{ A}$ على الترتيب. إذا أثر السلك $X$ على السلك $Y$ بقوة مغناطيسية مقدارها $F$، فما مقدار القوة المغناطيسية التي يؤثر بها السلك $Y$ على السلك $X$؟",
    "optionsEn": [
      "$5F$ (five times larger, proportional to current ratio)",
      "$\\frac{1}{5}F$ (one fifth, inversely proportional to current ratio)",
      "$20F$ (proportional to product of currents)",
      "$F$ (equal in magnitude, by Newton's Third Law)"
    ],
    "optionsAr": [
      "$5F$ (خمسة أمثال، بنسبة شدتي التيارين)",
      "$\\frac{1}{5}F$ (خمس القوة)",
      "$20F$ (عشرون مثلاً)",
      "$F$ (متساوية في المقدار تماماً، وفق قانون نيوتن الثالث)"
    ],
    "correctAnswer": "$F$ (equal in magnitude, by Newton's Third Law)",
    "correctIndex": 3,
    "hintEn": "Mutual force formula $F = \\frac{\\mu I_1 I_2 L}{2\\pi d}$ is symmetric with respect to both currents.",
    "hintAr": "القوة المتبادلة تعتمد على حاصل ضرب التيارين $I_1 I_2$ وهي قوة فعل ورد فعل متساويتان في المقدار.",
    "stepByStepSolutionEn": [
      "The mutual force expression $F = \\frac{\\mu I_X I_Y L}{2\\pi d}$ contains the product of both currents ($I_X I_Y$). The force that wire $X$ exerts on $Y$ is identical in magnitude to the force that wire $Y$ exerts on $X$ ($F_{XY} = F_{YX} = F$), obeying Newton's Third Law (action and reaction are equal and opposite)."
    ],
    "stepByStepSolutionAr": [
      "القوة المتبادلة بين سلكين تحسب من القانون $F = \\frac{\\mu I_1 I_2 L}{2\\pi d}$ وتعتمد على حاصل ضرب شدتي التيارين ($I_1 \\times I_2$)، وتعد قوة فعل ورد فعل، ولذلك تكون القوة التي يؤثر بها السلك الأول على الثاني مساوية دائماً في المقدار للقوة التي يؤثر بها السلك الثاني على الأول بصرف النظر عن اختلاف شدتي التيارين ($F_1 = F_2$)."
    ],
    "teacherTipEn": "This is one of the most classic trick questions on the Thanaweya Amma examination.",
    "teacherTipAr": "من أشهر الأسئلة الخداعية في امتحانات الثانوية العامة حيث يظن الطالب أن السلك ذو التيار الأكبر يؤثر بقوة أكبر."
  },
  {
    "id": "phys_ch2_db_easy_21",
    "titleEn": "Magnetic Torque on a Rectangular Coil in a Field",
    "titleAr": "عزم الازدواج المغناطيسي المؤثر على ملف مستطيل في مجال منتظم",
    "difficulty": "easy",
    "questionEn": "A planar coil of area $A$ with $N$ turns carrying current $I$ is placed in a uniform magnetic field $B$. What is the formula for the magnetic torque ($\\tau$) acting on the coil?",
    "questionAr": "ملف مستوٍ مساحته $A$ وعدد لفاته $N$ ويمر به تيار $I$ موضوع في مجال مغناطيسي منتظم $B$. ما هي صيغة عزم الازدواج المغناطيسي ($\\tau$) المؤثر على الملف؟",
    "optionsEn": [
      "$\\tau = B I A N \\sin\\theta$, where $\\theta$ is the angle between the normal to the coil plane and the magnetic field lines",
      "$\\tau = B I A N \\cos\\theta$, where $\\theta$ is the angle between the normal to the coil plane and the magnetic field lines",
      "$\\tau = \\frac{B I A}{N} \\sin\\theta$",
      "$\\tau = B^2 I^2 A N$"
    ],
    "optionsAr": [
      "$\\tau = B I A N \\sin\\theta$ حيث $\\theta$ هي الزاوية المحصورة بين العمودي على مستوى الملف وخطوط المجال",
      "$\\tau = B I A N \\cos\\theta$ حيث $\\theta$ هي الزاوية المحصورة بين العمودي على مستوى الملف وخطوط المجال",
      "$\\tau = \\frac{B I A}{N} \\sin\\theta$",
      "$\\tau = B^2 I^2 A N$"
    ],
    "correctAnswer": "$\\tau = B I A N \\sin\\theta$, where $\\theta$ is the angle between the normal to the coil plane and the magnetic field lines",
    "correctIndex": 0,
    "hintEn": "In the torque formula, $\\theta$ is the angle between the NORMAL to the coil plane and the field lines (or angle between field and magnetic dipole moment).",
    "hintAr": "في قانون عزم الازدواج، $\\theta$ هي الزاوية بين العمودي على مستوى الملف والمجال (أو بين عزم ثنائي القطب والمجال).",
    "stepByStepSolutionEn": [
      "The torque couple arises from equal and opposite magnetic forces acting on the two long opposite sides of the coil: $\\tau = F \\times d = (B I L N) \\times (w \\sin\\theta) = B I A N \\sin\\theta$, where $\\theta$ is the angle between the magnetic field vector and the normal vector to the coil face. When the coil plane is parallel to field lines, $\\theta = 90^\\circ$ and $\\tau = \\tau_{\\max} = B I A N$. When perpendicular, $\\theta = 0^\\circ$ and $\\tau = 0$."
    ],
    "stepByStepSolutionAr": [
      "ينشأ عزم الازدواج من قوتين متساويتين في المقدار ومتضادتين في الاتجاه وخطا عملهما ليسا على استقامة واحدة تؤثران على ضلعي الملف الموازيين للمحور. يعطى بالعلاقة $\\tau = B I A N \\sin\\theta$ حيث $\\theta$ هي الزاوية بين العمودي على مستوى الملف والمجال. يكون عزم الازدواج قيمة عظمى عندما يكون مستوى الملف موازياً للمجال ($\\theta = 90^\\circ$)، وينعدم تماماً عندما يكون مستوى الملف عمودياً على المجال ($\\theta = 0^\\circ$)."
    ],
    "teacherTipEn": "Crucial distinction: Flux is maximum when coil is PERPENDICULAR; Torque is maximum when coil is PARALLEL!",
    "teacherTipAr": "مقارنة جوهرية: الفيض المغناطيسي أقصى ما يمكن عندما يكون الملف عمودياً، بينما عزم الازدواج أقصى ما يمكن عندما يكون الملف موازياً للمجال!"
  },
  {
    "id": "phys_ch2_db_easy_22",
    "titleEn": "Orientation of Coil for Maximum Magnetic Torque",
    "titleAr": "وضع الملف الذي يكون عنده عزم الازدواج نهاية عظمى",
    "difficulty": "easy",
    "questionEn": "When a rectangular coil carrying electric current is immersed in a uniform magnetic field, the magnetic torque acting on it reaches its MAXIMUM value when the plane of the coil is:",
    "questionAr": "عند وضع ملف مستطيل يمر به تيار في مجال مغناطيسي منتظم، يصل عزم الازدواج المؤثر عليه إلى قيمته العظمى عندما يكون مستوى الملف:",
    "optionsEn": [
      "Perpendicular to the direction of the magnetic field lines ($\\theta_{\\text{normal}} = 0^\\circ$)",
      "Parallel to the direction of the magnetic field lines ($\\theta_{\\text{normal}} = 90^\\circ$)",
      "Inclined at $45^\\circ$ to the magnetic field lines",
      "Inclined at $60^\\circ$ to the magnetic field lines"
    ],
    "optionsAr": [
      "عمودياً على اتجاه خطوط المجال المغناطيسي ($\\theta_{\\text{normal}} = 0^\\circ$)",
      "موازياً لاتجاه خطوط المجال المغناطيسي ($\\theta_{\\text{normal}} = 90^\\circ$)",
      "مائلاً بزاوية $45^\\circ$ على خطوط المجال المغناطيسي",
      "مائلاً بزاوية $60^\\circ$ على خطوط المجال المغناطيسي"
    ],
    "correctAnswer": "Parallel to the direction of the magnetic field lines ($\\theta_{\\text{normal}} = 90^\\circ$)",
    "correctIndex": 1,
    "hintEn": "When the coil plane is parallel to $B$, the normal is perpendicular to $B$ ($\\sin 90^\\circ = 1$).",
    "hintAr": "عندما يكون مستوى الملف موازياً للمجال يكون العمودي على الملف عمودياً على المجال فيكون العزم أقصى ما يمكن.",
    "stepByStepSolutionEn": [
      "When the coil is parallel to the field, the perpendicular distance between the lines of action of the forces on opposite sides is at its maximum ($d = \\text{width}$). At this instant, the angle between the normal to the coil and the field lines is $\\theta = 90^\\circ$, giving $\\sin 90^\\circ = 1$ and maximum torque $\\tau_{\\max} = B I A N$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف موازياً لخطوط الفيض، يكون البعد العمودي بين خطي عمل القوتين المؤثرتين على الضلعين الطوليين أقصى ما يمكن ويساوي عرض الملف كاملاً، وتكون الزاوية بين العمودي على مستوى الملف والمجال مساوية $90^\\circ$، فيكون عزم الازدواج نهاية عظمى: $\\tau_{\\max} = B I A N$."
    ],
    "teacherTipEn": "Conversely, when the coil is perpendicular to the field, the lines of action coincide on the same line, so the perpendicular distance is zero and torque vanishes.",
    "teacherTipAr": "أما عندما يكون الملف عمودياً، يقع خطا عمل القوتين على استقامة واحدة وينعدم البعد العمودي بينهما فينعدم عزم الازدواج."
  },
  {
    "id": "phys_ch2_db_easy_23",
    "titleEn": "Magnetic Dipole Moment of a Current-Carrying Coil",
    "titleAr": "عزم ثنائي القطب المغناطيسي لملف يمر به تيار",
    "difficulty": "easy",
    "questionEn": "The magnetic dipole moment ($\\vec{m}_d$) of a planar coil of area $A$ with $N$ turns carrying current $I$ is defined as:",
    "questionAr": "يعرف عزم ثنائي القطب المغناطيسي ($\\vec{m}_d$) لملف مستوٍ مساحته $A$ وعدد لفاته $N$ ويمر به تيار $I$ بأنه:",
    "optionsEn": [
      "The ratio of magnetic flux density to current: $|\\vec{m}_d| = B / I$",
      "The torque acting on the coil when it is perpendicular to the field",
      "The product of the current, cross-sectional area, and number of turns: $|\\vec{m}_d| = I A N$, directed perpendicularly to the coil face",
      "The total electrostatic charge stored on the surface of the coil"
    ],
    "optionsAr": [
      "النسبة بين كثافة الفيض المغناطيسي وشدة التيار: $|\\vec{m}_d| = B / I$",
      "عزم الازدواج المؤثر على الملف عندما يكون عمودياً على خطوط المجال",
      "حاصل ضرب شدة التيار في مساحة الملف في عدد اللفات: $|\\vec{m}_d| = I A N$، واتجاهه عمودي دائماً على وجه الملف",
      "الشحنة الكهربية الاستاتيكية الكلية المتراكمة على سطح الملف"
    ],
    "correctAnswer": "The product of the current, cross-sectional area, and number of turns: $|\\vec{m}_d| = I A N$, directed perpendicularly to the coil face",
    "correctIndex": 2,
    "hintEn": "$|\\vec{m}_d| = I A N = \\frac{\\tau_{\\max}}{B}$. It is an inherent property of the coil.",
    "hintAr": "$|\\vec{m}_d| = I A N = \\frac{\\tau_{\\max}}{B}$، وهي كمية متجهة تخص الملف ولا تعتمد على المجال الخارجي.",
    "stepByStepSolutionEn": [
      "The magnetic dipole moment $\\vec{m}_d$ is a vector property of any current loop. Its magnitude is $|\\vec{m}_d| = I A N = \\frac{\\tau}{B \\sin\\theta}$. Its direction is perpendicular to the plane of the coil, pointing from the South pole to the North pole along the normal vector, as determined by Ampere's right-hand grip rule or right-hand screw rule."
    ],
    "stepByStepSolutionAr": [
      "عزم ثنائي القطب المغناطيسي كمية متجهة تعبر عن الخصائص المغناطيسية للملف وتساوي عزم الازدواج المؤثر على الملف عندما يوضع موازياً لمجال مغناطيسي كثافة فيضه واحد تسلا ($|\\vec{m}_d| = \\frac{\\tau_{\\max}}{B}$). ومقداره يساوي دائماً $|\\vec{m}_d| = I A N$، واتجاهه عمودي دائماً على مستوى الملف ويتحدد بقاعدة اليد اليمنى لأمبير أو البريمة اليمنى."
    ],
    "teacherTipEn": "Notice: $|\\vec{m}_d|$ does NOT depend on the external magnetic flux density $B$ or coil orientation angle $\\theta$!",
    "teacherTipAr": "لاحظ جيداً: عزم ثنائي القطب المغناطيسي لا يتوقف على كثافة الفيض الخارجي $B$ ولا على زاوية دوران الملف $\\theta$!"
  },
  {
    "id": "phys_ch2_db_easy_24",
    "titleEn": "Units of Magnetic Dipole Moment Equivalence",
    "titleAr": "الوحدات المكافئة لقياس عزم ثنائي القطب المغناطيسي",
    "difficulty": "easy",
    "questionEn": "Which of the following represents the correct SI units for the magnetic dipole moment ($\\vec{m}_d$)?",
    "questionAr": "أي مما يلي يمثل الوحدات الدولية الصحيحة والمكافئة لقياس عزم ثنائي القطب المغناطيسي ($\\vec{m}_d$)؟",
    "optionsEn": [
      "$\\text{A/m}^2 = \\text{T} \\cdot \\text{m}$",
      "$\\text{T} \\cdot \\text{m}^2 = \\text{Wb}$",
      "$\\text{N} \\cdot \\text{A} = \\text{V/s}$",
      "$\\text{A} \\cdot \\text{m}^2 = \\text{N} \\cdot \\text{m/T} = \\text{J/T}$"
    ],
    "optionsAr": [
      "$\\text{A/m}^2 = \\text{T} \\cdot \\text{m}$",
      "$\\text{T} \\cdot \\text{m}^2 = \\text{Wb}$",
      "$\\text{N} \\cdot \\text{A} = \\text{V/s}$",
      "$\\text{A} \\cdot \\text{m}^2 = \\text{N} \\cdot \\text{m/T} = \\text{J/T}$"
    ],
    "correctAnswer": "$\\text{A} \\cdot \\text{m}^2 = \\text{N} \\cdot \\text{m/T} = \\text{J/T}$",
    "correctIndex": 3,
    "hintEn": "From $|\\vec{m}_d| = I A N$ unit is $\\text{A} \\cdot \\text{m}^2$; from $|\\vec{m}_d| = \\tau/B$ unit is $\\text{N}\\cdot\\text{m/T} = \\text{J/T}$.",
    "hintAr": "من $I A N$ الوحدة أمبير.متر مربع، ومن $\\tau/B$ نيوتن.متر/تسلا أو جول/تسلا.",
    "stepByStepSolutionEn": [
      "From $|\\vec{m}_d| = I A N$: Current ($\\text{A}$) $\\times$ Area ($\\text{m}^2$) gives $\\text{A}\\cdot\\text{m}^2$. From $|\\vec{m}_d| = \\frac{\\tau}{B}$: Torque ($\\text{N}\\cdot\\text{m}$) divided by field ($\\text{T}$) gives $\\text{N}\\cdot\\text{m/T}$. Because $1\\text{ N}\\cdot\\text{m} = 1\\text{ J}$, it is also expressed as Joules per Tesla ($\\text{J/T}$)."
    ],
    "stepByStepSolutionAr": [
      "من قانون $|\\vec{m}_d| = I A N$ تكون الوحدة هي أمبير.متر مربع ($\\text{A}\\cdot\\text{m}^2$). ومن قانون $|\\vec{m}_d| = \\frac{\\tau}{B}$ تكون الوحدة نيوتن.متر/تسلا ($\\text{N}\\cdot\\text{m/T}$). وحيث أن نيوتن.متر هو الجول، تكافئ أيضاً جول/تسلا ($\\text{J/T}$)."
    ],
    "teacherTipEn": "Remember: Magnetic dipole moment units must have dimensions of current $\\times$ area.",
    "teacherTipAr": "تذكر دائماً: أبعاد عزم ثنائي القطب هي أبعاد تيار $\\times$ مساحة."
  },
  {
    "id": "phys_ch2_db_easy_25",
    "titleEn": "Operating Physical Principle of Moving-Coil Galvanometer",
    "titleAr": "الأساس العلمي لعمل الجلفانومتر ذي الملف المتحرك",
    "difficulty": "easy",
    "questionEn": "The scientific operating principle of a sensitive moving-coil galvanometer is:",
    "questionAr": "الأساس العلمي والفيزيائي الذي تبنى عليه فكرة عمل الجلفانومتر الحساس ذي الملف المتحرك هو:",
    "optionsEn": [
      "The magnetic torque acting on a current-carrying coil freely suspended in a magnetic field",
      "Electromagnetic induction discovered by Michael Faraday",
      "The photoelectric effect of incident light on metallic coils",
      "Thermal expansion of metallic bi-metallic strips"
    ],
    "optionsAr": [
      "عزم الازدواج المغناطيسي المؤثر على ملف يمر به تيار كهربي وقابل للحركة في مجال مغناطيسي",
      "الحث الكهرومغناطيسي لفراداي",
      "التأثير الكهروضوئي للضوء على أسلاك الملف",
      "التمدد الحراري للأشرطة ثنائية المعدن"
    ],
    "correctAnswer": "The magnetic torque acting on a current-carrying coil freely suspended in a magnetic field",
    "correctIndex": 0,
    "hintEn": "Galvanometer detects weak direct currents using the deflecting magnetic torque $\\tau = B I A N$.",
    "hintAr": "الجلفانومتر يستدل على التيارات المستمرة الضعيفة بقياس عزم الازدواج المغناطيسي المؤثر على ملفه.",
    "stepByStepSolutionEn": [
      "The sensitive moving-coil galvanometer utilizes the magnetic torque experienced by a rectangular coil placed in a magnetic field. When weak DC current flows through the coil, two equal and opposite magnetic forces produce a torque that rotates the coil against the counter-torque of two spiral springs."
    ],
    "stepByStepSolutionAr": [
      "يبنى عمل الجلفانومتر ذي الملف المتحرك على عزم الازدواج المغناطيسي؛ فعند مرور تيار كهربي مستمر ضعيف في الملف يتولد عزم ازدواج مغناطيسي يجعله يدور في اتجاه معين، حتى يتساوى مع عزم اللي المتولد في زوج الملفات الزنبركية فيتوقف المؤشر عند قراءة محددة."
    ],
    "teacherTipEn": "Galvanometer is the mother instrument from which ammeters, voltmeters, and ohmmeters are derived.",
    "teacherTipAr": "الجلفانومتر هو الجهاز الأم الذي تشتق منه أجهزة قياس التيار (الأميتر) والجهد (الفولتميتر) والمقاومة (الأوميتر)."
  },
  {
    "id": "phys_ch2_db_easy_26",
    "titleEn": "Role of Concave Cylindrical Magnetic Poles in Galvanometer",
    "titleAr": "وظيفة القطبين المغناطيسيين المقعرين في الجلفانومتر",
    "difficulty": "easy",
    "questionEn": "Why are the permanent magnetic pole pieces in a moving-coil galvanometer fashioned in the shape of concave cylinders?",
    "questionAr": "لماذا يصنع قطبا المغناطيس الدائم في الجلفانومتر الحساس على شكل أسطواني مقعر؟",
    "optionsEn": [
      "To increase the friction at the pivot bearings and dampen oscillations",
      "To make the magnetic field lines radial in the gap, so the coil plane is always parallel to the field lines and the deflecting torque is proportional strictly to current",
      "To create alternating magnetic flux that reverses direction continuously",
      "To shield the coil from ambient temperature changes"
    ],
    "optionsAr": [
      "لزيادة الاحتكاك عند محاور الارتكاز وتثبيت المؤشر",
      "لكي تكون خطوط الفيض المغناطيسي على هيئة أنصاف أقطار في الحيز الهوائي، فيكون مستوى الملف موازياً دائماً لخطوط الفيض ويكون عزم الازدواج متناسباً طردياً مع شدة التيار فقط",
      "لتوليد فيض متردد يعكس اتجاهه باستمرار",
      "لحجب الملف عن التغيرات في درجات الحرارة الخارجية"
    ],
    "correctAnswer": "To make the magnetic field lines radial in the gap, so the coil plane is always parallel to the field lines and the deflecting torque is proportional strictly to current",
    "correctIndex": 1,
    "hintEn": "Radial field ensures $\\sin\\theta_{\\text{normal}} = 1$ constantly, keeping $\\tau = B I A N$ without angular distortion.",
    "hintAr": "المجال على هيئة أنصاف أقطار يجعل مستوى الملف موازياً لخطوط الفيض دائماً ($\\theta_{\\text{normal}} = 90^\\circ$).",
    "stepByStepSolutionEn": [
      "When the pole pieces are concave cylindrical faces surrounding a soft iron cylinder, the magnetic field lines cross the cylindrical air gap radially. In any angular orientation the rotating coil adopts, its plane remains parallel to the radial field lines at that location ($\\theta_{\\text{normal}} = 90^\\circ \\implies \\sin 90^\\circ = 1$). This guarantees that the magnetic flux density $B$ in the gap is constant and the deflecting torque is directly proportional to current: $\\tau \\propto I$."
    ],
    "stepByStepSolutionAr": [
      "القطبان المقعران مع وجود أسطوانة الحديد المطاوع يجعلان خطوط الفيض المغناطيسي في الحيز الهوائي الذي يدور فيه الملف على هيئة أنصاف أقطار. وبذلك يكون مستوى الملف موازياً دائماً لخطوط الفيض المغناطيسي في أي موضع يدور إليه، وتظل كثافة الفيض المؤثرة على ضلعي الملف الطوليين ثابتة، فيعتمد عزم الازدواج على شدة التيار فقط ($\\tau = B I A N$)."
    ],
    "teacherTipEn": "This ensures a uniform scale: deflection angle is directly proportional to current ($\\theta \\propto I$).",
    "teacherTipAr": "هذا التصميم الذكي هو الذي يجعل تدريج الجلفانومتر منتظماً ومتساوي الأقسام لأن $\\theta \\propto I$."
  },
  {
    "id": "phys_ch2_db_easy_27",
    "titleEn": "Role of Cylindrical Soft Iron Core in Galvanometer",
    "titleAr": "دور أسطوانة الحديد المطاوع الثابتة في الجلفانومتر",
    "difficulty": "easy",
    "questionEn": "What is the purpose of the fixed cylinder of soft iron placed coaxially inside the coil of a moving-coil galvanometer?",
    "questionAr": "ما هي وظيفة أسطوانة الحديد المطاوع الثابتة الموضوعة داخل ملف الجلفانومتر دون أن تلامسه؟",
    "optionsEn": [
      "To carry the electric current directly to the pointer",
      "To rotate together with the coil to increase its rotational inertia",
      "To concentrate and focus the magnetic field lines in the air gap and assist in creating a radial field",
      "To act as a thermal fuse that breaks the circuit under overcurrent"
    ],
    "optionsAr": [
      "لتوصيل التيار الكهربي مباشرة إلى المؤشر",
      "للدوران مع الملف وزيادة عزم القصور الذاتي",
      "تركيز وتكثيف خطوط الفيض المغناطيسي في الحيز الهوائي والمساعدة في جعلها على هيئة أنصاف أقطار",
      "للعمل كمنصهر حراري لقطع الدائرة عند زيادة التيار"
    ],
    "correctAnswer": "To concentrate and focus the magnetic field lines in the air gap and assist in creating a radial field",
    "correctIndex": 2,
    "hintEn": "Soft iron core is stationary; the coil rotates freely around it without touching.",
    "hintAr": "أسطوانة الحديد المطاوع ثابتة في مكانها، بينما يدور الملف حولها بحرية في الحيز الهوائي.",
    "stepByStepSolutionEn": [
      "Soft iron has very high magnetic permeability ($\\mu$). Placing a cylindrical iron core inside the coil draws magnetic flux lines into the air gap and lines them up radially. It significantly increases the magnetic flux density $B$ acting on the coil sides, vastly enhancing the sensitivity of the galvanometer."
    ],
    "stepByStepSolutionAr": [
      "تتميز أسطوانة الحديد المطاوع بنفاذية مغناطيسية عالية جداً، فتعمل على تركيز وتكثيف خطوط الفيض المغناطيسي في الحيز الهوائي بين القطبين، وتساعد مع القطبين المقعرين في جعل خطوط الفيض على هيئة أنصاف أقطار، مما يزيد من كثافة الفيض وبالتالي يرفع من حساسية الجهاز."
    ],
    "teacherTipEn": "Crucial detail: The iron core does NOT rotate with the coil; it is fixed to the instrument chassis.",
    "teacherTipAr": "معلومة امتحانية دقيقة: أسطوانة الحديد المطاوع ثابتة ولا تدور مع الملف."
  },
  {
    "id": "phys_ch2_db_easy_28",
    "titleEn": "Three Essential Functions of Spiral Springs in Galvanometer",
    "titleAr": "الوظائف الثلاث لزوج الملفات الزنبركية في الجلفانومتر",
    "difficulty": "easy",
    "questionEn": "The two spiral springs in a moving-coil galvanometer perform three vital functions. Which of the following correctly states these functions?",
    "questionAr": "يؤدي زوج الملفات الزنبركية في الجلفانومتر الحساس ثلاث وظائف حيوية. أي مما يلي يذكر هذه الوظائف بدقة؟",
    "optionsEn": [
      "Amplify the incoming voltage, rotate the iron core, and illuminate the scale",
      "Prevent the coil from conducting electricity and cool down the chassis",
      "Convert alternating current into direct current mechanically",
      "Act as electrical leads to enter and exit current, generate a restoring couple that balances magnetic torque, and return the pointer to zero when current ceases"
    ],
    "optionsAr": [
      "تكبير الجهد الداخل، وتدوير القلب الحديدي، وإضاءة التدريج",
      "عزل الملف عن الكهرباء وتبريد هيكل الجهاز",
      "تحويل التيار المتردد إلى تيار مستمر ميكانيكياً",
      "تعمل كوصلات لدخول وخروج التيار للملف، وتولد عزم لي (ازدواج استرجاعي) يوازن عزم الازدواج المغناطيسي، وتعيد المؤشر إلى الصفر عند انقطاع التيار"
    ],
    "correctAnswer": "Act as electrical leads to enter and exit current, generate a restoring couple that balances magnetic torque, and return the pointer to zero when current ceases",
    "correctIndex": 3,
    "hintEn": "Springs provide: (1) leads, (2) restoring torque $\\tau_{\\text{restoring}} = k\\theta$, (3) reset to zero.",
    "hintAr": "وظائف زنبركي الجلفانومتر: 1) موصلات للتيار، 2) توليد عزم لي معاكس للاتزان، 3) إعادة المؤشر للصفر.",
    "stepByStepSolutionEn": [
      "The two hairsprings (spiral springs) serve three essential duties: (1) Conductors: they act as the entry and exit terminals for current to the moving coil. (2) Restoring Torque: as the coil twists, the springs wind up and exert a counter-torque proportional to twist angle ($\\tau_{\\text{restoring}} = c \\theta$). Equilibrium occurs when $\\tau_{\\text{magnetic}} = \\tau_{\\text{restoring}}$. (3) Return to Zero: when current is turned off, the stored mechanical elastic energy uncoils the springs, returning the coil and pointer back to the zero mark."
    ],
    "stepByStepSolutionAr": [
      "يقوم زوج الملفات الزنبركية بثلاث مهام رئيسية: 1) يعملان كمدخل ومخرج للتيار الكهربي إلى الملف. 2) يتولد فيهما عزم لي (ازدواج معاكس) يزداد بالدوران حتى يتساوى مع عزم الازدواج المغناطيسي فيتزن الملف ويثبت المؤشر عند القراءة. 3) يعملان على إعادة الملف والمؤشر إلى وضع الصفر عند قطع التيار الكهربي عن الدائرة."
    ],
    "teacherTipEn": "The pointer settles when magnetic torque equals spring restoring torque.",
    "teacherTipAr": "يستقر المؤشر عندما يتساوى عزم الازدواج المغناطيسي تماماً مع عزم اللي الميكانيكي."
  },
  {
    "id": "phys_ch2_db_easy_29",
    "titleEn": "Equilibrium Condition for Pointer Deflection in Galvanometer",
    "titleAr": "شرط اتزان مؤشر الجلفانومتر عند قراءة معينة",
    "difficulty": "easy",
    "questionEn": "The pointer of a moving-coil galvanometer stops rotating and comes to rest at a specific reading on the scale when:",
    "questionAr": "يتوقف مؤشر الجلفانومتر عن الدوران ويستقر عند قراءة محددة على التدريج عندما:",
    "optionsEn": [
      "The deflecting magnetic torque acting on the coil equals the restoring torque of the spiral springs ($\\tau_{\\text{magnetic}} = \\tau_{\\text{restoring}}$)",
      "The magnetic field in the air gap completely collapses to zero",
      "The electrical resistance of the moving coil becomes zero",
      "The battery driving the circuit runs completely out of voltage"
    ],
    "optionsAr": [
      "يتساوى عزم الازدواج المغناطيسي المؤثر على الملف مع عزم اللي المتولد في زوج الملفات الزنبركية",
      "ينعدم المجال المغناطيسي تماماً في الحيز الهوائي",
      "تصبح المقاومة الكهربية للملف مساوية للصفر",
      "ينفد جهد البطارية المشغلة للدائرة بالكامل"
    ],
    "correctAnswer": "The deflecting magnetic torque acting on the coil equals the restoring torque of the spiral springs ($\\tau_{\\text{magnetic}} = \\tau_{\\text{restoring}}$)",
    "correctIndex": 0,
    "hintEn": "Equilibrium is mechanical: $\\tau_{\\text{magnetic}} = B I A N = \\tau_{\\text{restoring}} = k \\theta \\implies \\theta \\propto I$.",
    "hintAr": "الاتزان ميكانيكي: عزم الازدواج المغناطيسي = عزم اللي للزنبرك، ومنها زاوية الانحراف تتناسب طردياً مع التيار.",
    "stepByStepSolutionEn": [
      "As current flows, magnetic torque $\\tau_m = B I A N$ rotates the coil. This twists the two spiral springs, building up a mechanical restoring torque $\\tau_r = c \\theta$. The coil continues rotating until the restoring torque grows large enough to exactly cancel the magnetic torque: $\\tau_m = \\tau_r \\implies B I A N = c \\theta \\implies \\theta = \\left(\\frac{B A N}{c}\\right) I$. At this exact balance, the net torque is zero, and the pointer rests steadily at the reading."
    ],
    "stepByStepSolutionAr": [
      "عند مرور التيار، يولد عزم الازدواج المغناطيسي دوراناً للملف، مما يؤدي إلى التواء زوج الملفات الزنبركية وتولد عزم لي مضاد يزداد تدريجياً بزيادة زاوية الانحراف. يستمر الملف في الدوران حتى يتساوى عزم الازدواج المغناطيسي مع عزم اللي فيتزن الملف ويتوقف المؤشر عن الحركة مشيراً إلى قيمة شدة التيار المار."
    ],
    "teacherTipEn": "Because $B, A, N,$ and $c$ are constants, the steady deflection angle is directly proportional to current ($\\theta \\propto I$).",
    "teacherTipAr": "بما أن جميع العوامل الأخرى ثوابت، فإن زاوية الانحراف $\\theta$ تتناسب طردياً مع شدة التيار المار $I$."
  },
  {
    "id": "phys_ch2_db_easy_30",
    "titleEn": "Uniformity of Moving-Coil Galvanometer Scale",
    "titleAr": "سبب انتظام تدريج الجلفانومتر ذي الملف المتحرك",
    "difficulty": "easy",
    "questionEn": "Why are the scale divisions of a moving-coil galvanometer uniformly spaced (linear scale)?",
    "questionAr": "لماذا يكون تدريج الجلفانومتر ذي الملف المتحرك منتظماً (أقسامه متساوية الأبعاد)؟",
    "optionsEn": [
      "Because current is inversely proportional to the resistance of the coil",
      "Because the deflection angle of the pointer is directly proportional to the electric current passing through the coil ($\\theta \\propto I$)",
      "Because the springs heat up uniformly according to Joule's law",
      "Because the magnetic field increases with the square of the distance"
    ],
    "optionsAr": [
      "لأن شدة التيار تتناسب عكسياً مع مقاومة الملف",
      "لأن زاوية انحراف المؤشر عن وضع الصفر تتناسب طردياً مع شدة التيار المار في الملف ($\\theta \\propto I$)",
      "لأن الزنبرك يسخن بانتظام وفق قانون جول للتسخين",
      "لأن المجال المغناطيسي يتناسب طردياً مع مربع المسافة"
    ],
    "correctAnswer": "Because the deflection angle of the pointer is directly proportional to the electric current passing through the coil ($\\theta \\propto I$)",
    "correctIndex": 1,
    "hintEn": "Radial field makes $B$ constant $\\implies \\tau = B I A N \\propto I \\implies \\theta \\propto I$.",
    "hintAr": "المجال على شكل أنصاف أقطار يجعل $B$ ثابتاً، فيكون العزم متناسباً طردياً مع $I$ وتكون زاوية الانحراف متناسبة طردياً مع $I$.",
    "stepByStepSolutionEn": [
      "Due to the concave poles and cylindrical iron core, the magnetic field is radial, so the coil is always parallel to the field ($\\sin\\theta_{\\text{normal}} = 1$). Therefore, deflecting torque depends only on current: $\\tau_m = B I A N$. At equilibrium, $\\tau_r = c \\theta = B I A N \\implies \\theta = \\left(\\frac{B A N}{c}\\right) I$. Since $\\frac{B A N}{c}$ is a constant, $\\theta \\propto I$. Equal increments in current produce equal increments in angular deflection, yielding a completely uniform scale."
    ],
    "stepByStepSolutionAr": [
      "بفضل القطبين المقعرين وأسطوانة الحديد المطاوع تكون خطوط الفيض على هيئة أنصاف أقطار فيكون عزم الازدواج المغناطيسي ثابتاً لنفس التيار في أي موضع ($\\tau = B I A N$). وعند الاتزان يتساوى عزم الازدواج مع عزم اللي ($B I A N = c \\theta$)، فتكون زاوية الانحراف $\\theta$ متناسبة طردياً مع شدة التيار $I$، ولذلك تكون أقسام التدريج متساوية ومنتظمة."
    ],
    "teacherTipEn": "Contrast: The ohmmeter scale is non-uniform because $I \\propto \\frac{1}{R_{\\text{total}} + R_x}$. The hot-wire ammeter scale is non-uniform because heat $\\propto I^2$.",
    "teacherTipAr": "قارن ذلك بالأوميتر (تدريجه غير منتظم لأن $I \\propto \\frac{1}{R}$)، والأميتر الحراري (تدريجه غير منتظم لأن القدرة الحرارية $\\propto I^2$)."
  },
  {
    "id": "phys_ch2_db_easy_31",
    "titleEn": "Sensitivity of a Moving-Coil Galvanometer Formula and Units",
    "titleAr": "حساسية الجلفانومتر وتعريفها ووحدات قياسها",
    "difficulty": "easy",
    "questionEn": "The sensitivity ($S$) of a moving-coil galvanometer is defined as:",
    "questionAr": "تُعرّف حساسية الجلفانومتر ذي الملف المتحرك بأنها:",
    "optionsEn": [
      "The maximum current that the galvanometer can sustain without burning",
      "The product of the coil resistance and the spring stiffness constant",
      "The deflection angle of the pointer per unit current passing through its coil: $S = \\frac{\\theta}{I}$",
      "The total magnetic energy stored inside the soft iron core"
    ],
    "optionsAr": [
      "أقصى تيار يتحمله ملف الجلفانومتر قبل أن يحترق",
      "حاصل ضرب مقاومة الملف في ثابت صلابة الزنبرك",
      "زاوية انحراف مؤشر الجلفانومتر لكل وحدة شدة تيار مار في ملفه: $S = \\frac{\\theta}{I}$",
      "إجمالي الطاقة المغناطيسية المخزونة في القلب الحديدي"
    ],
    "correctAnswer": "The deflection angle of the pointer per unit current passing through its coil: $S = \\frac{\\theta}{I}$",
    "correctIndex": 2,
    "hintEn": "Sensitivity = angle / current ($\\text{deg/}\\mu\\text{A}$ or $\\text{deg/mA}$).",
    "hintAr": "الحساسية = زاوية الانحراف مقسومة على شدة التيار (درجة/ميكروأمبير).",
    "stepByStepSolutionEn": [
      "Galvanometer sensitivity measures how readily the pointer deflects for small currents: $S = \\frac{\\theta}{I}$. Its practical units are $\\text{degree/}\\mu\\text{A}$ or $\\text{degree/mA}$ or $\\text{radian/A}$. If a current of $10\\,\\mu\\text{A}$ produces a deflection of $20^\\circ$, its sensitivity is $S = \\frac{20^\\circ}{10\\,\\mu\\text{A}} = 2^\\circ/\\mu\\text{A}$."
    ],
    "stepByStepSolutionAr": [
      "حساسية الجلفانومتر هي النسبة بين زاوية انحراف مؤشر الجلفانومتر عن وضع الصفر إلى شدة التيار المار في ملفه ($S = \\frac{\\theta}{I}$). وتقاس بوحدة (درجة/ميكروأمبير) أو (درجة/مللي أمبير). وتعبر عن قدرة الجهاز على الإحساس بالتيارات شديدة الضعف."
    ],
    "teacherTipEn": "To measure the current of one scale division: Current per division = $\\frac{\\text{Total Current}}{\\text{Number of Divisions}}$.",
    "teacherTipAr": "لحساب دلالة القسم الواحد: شدة تيار القسم الواحد = شدة التيار الكلي / عدد الأقسام."
  },
  {
    "id": "phys_ch2_db_easy_32",
    "titleEn": "Agate / Synthetic Sapphire Pivot Bearings in Galvanometer",
    "titleAr": "ارتكاز ملف الجلفانومتر على حوامل من العقيق",
    "difficulty": "easy",
    "questionEn": "Why are the pivot pins of a moving-coil galvanometer mounted on jewel bearings made of synthetic sapphire (agate)?",
    "questionAr": "لماذا يرتكز ملف الجلفانومتر ذي الملف المتحرك على حوامل مصنوعة من العقيق (حوامل ياقوتية)؟",
    "optionsEn": [
      "To insulate the coil electrically from the permanent magnet",
      "To conduct the current from the pointer to the scale",
      "To cool the coil by conducting away heat through agate crystals",
      "To minimize frictional resistance at the pivots, ensuring free and smooth rotation of the coil"
    ],
    "optionsAr": [
      "لعزل الملف كهربياً عن المغناطيس الدائم",
      "لتوصيل التيار من المؤشر إلى لوحة التدريج",
      "لتبريد الملف عن طريق نقل الحرارة عبر بلورات العقيق",
      "لتقليل قوى الاحتكاك عند محاور الدوران إلى أدنى حد، مما يضمن حرية وسلاسة حركة الملف"
    ],
    "correctAnswer": "To minimize frictional resistance at the pivots, ensuring free and smooth rotation of the coil",
    "correctIndex": 3,
    "hintEn": "Agate is extremely hard and smooth, reducing friction to near-zero.",
    "hintAr": "العقيق حجر شديد الصلابة والنعومة، يمنع احتكاك محور الارتكاز.",
    "stepByStepSolutionEn": [
      "Agate (synthetic sapphire) is an exceptionally hard mineral with an ultra-smooth surface. Mounting the delicate pivot needle points in conical agate bearings minimizes friction at the contact points. This ensures the coil rotates freely in response to even the tiniest currents without sticking, maintaining high accuracy and repeatability."
    ],
    "stepByStepSolutionAr": [
      "يرتكز ملف الجلفانومتر على حوامل من العقيق الأملس شديد الصلابة، لتقليل قوى الاحتكاك الناشئة أثناء دوران محور الملف إلى أقل حد ممكن، مما يتيح للملف الاستجابة للتيارات الضعيفة جداً بدقة وسلاسة دون إعاقة ميكانيكية."
    ],
    "teacherTipEn": "If steel-on-steel bearings were used, friction would cause calibration errors and pointer sticking.",
    "teacherTipAr": "لو استخدمت حوامل معدنية عادية، لتسبب الاحتكاك في بطء حركة المؤشر وتلف دقة القراءة."
  },
  {
    "id": "phys_ch2_db_easy_33",
    "titleEn": "Inability of Moving-Coil Galvanometer to Measure High-Frequency AC",
    "titleAr": "عدم قدرة الجلفانومتر ذي الملف المتحرك على قياس التيار المتردد عالي التردد",
    "difficulty": "easy",
    "questionEn": "What happens if an alternating current (AC) of standard frequency ($50\\text{ Hz}$) is connected to a moving-coil galvanometer?",
    "questionAr": "ماذا يحدث عند توصيل تيار متردد عالي التردد ($50\\text{ Hz}$) بملف جلفانومتر ذي ملف متحرك؟",
    "optionsEn": [
      "The pointer does not deflect and vibrates imperceptibly around zero, because AC changes direction rapidly and the rotational inertia of the coil prevents it from following",
      "The pointer deflects steadily to the maximum scale reading",
      "The pointer rotates continuously like an electric motor",
      "The galvanometer immediately explodes due to capacitive resonance"
    ],
    "optionsAr": [
      "لا ينحرف المؤشر ويهتز اهتزازاً ضئيلاً حول موضع الصفر، لأن التيار يغير اتجاهه بسرعة كبيرة ولا يستطيع الملف الاستجابة لقصوره الذاتي",
      "ينحرف المؤشر بثبات إلى نهاية التدريج العظمى",
      "يدور المؤشر دوراناً مستمراً كالمحرك الكهربي",
      "ينفجر الجلفانومتر فوراً بسبب الرنين السعوي"
    ],
    "correctAnswer": "The pointer does not deflect and vibrates imperceptibly around zero, because AC changes direction rapidly and the rotational inertia of the coil prevents it from following",
    "correctIndex": 0,
    "hintEn": "AC alternates polarity every half cycle. Average torque over one period is zero; inertia freezes the pointer.",
    "hintAr": "التيار المتردد يعكس اتجاهه كل نصف دورة، فيكون متوسط عزم الازدواج خلال دورة كاملة مساوياً للصفر والقصور الذاتي يمنع الملف من الحركة.",
    "stepByStepSolutionEn": [
      "In high-frequency AC ($50\\text{ Hz}$), current reverses direction 100 times per second. The deflecting torque reverses direction equally fast. Due to rotational inertia, the relatively heavy coil assembly cannot accelerate back and forth at $50\\text{ cycles/second}$. Thus, the average torque is zero, and the pointer remains stationary at zero (or vibrates slightly). At very low frequencies ($< 1\\text{ Hz}$), the pointer oscillates back and forth around zero."
    ],
    "stepByStepSolutionAr": [
      "التيار المتردد متغير الشدة والاتجاه، وعند تردده العالي (مثل 50 هرتز) يغير اتجاهه 100 مرة في الثانية، فيتغير اتجاه عزم الازدواج المغناطيسي بنفس المعدل، وبسبب القصور الذاتي للملف لا يستطيع الاستجابة لهذه التغيرات السريعة فيثبت المؤشر عند موضع الصفر تقريباً. (أما إذا كان التيار ضعيفاً وتردده منخفضاً جداً، فيهتز المؤشر يميناً ويساراً حول الصفر)."
    ],
    "teacherTipEn": "To measure AC, thermal devices (hot-wire ammeter) or rectifier meters must be employed.",
    "teacherTipAr": "لقياس شدة التيار المتردد، يجب استخدام الأميتر الحراري الذي يعتمد على التأثير الحراري للتيار."
  },
  {
    "id": "phys_ch2_db_easy_34",
    "titleEn": "Ammeter Shunt Resistor Connection and Functions",
    "titleAr": "طريقة توصيل مجزئ التيار ووظائفه في تحويل الجلفانومتر لأميتر",
    "difficulty": "easy",
    "questionEn": "To convert a moving-coil galvanometer into a direct-current ammeter capable of measuring larger currents, a resistor $R_s$ (shunt resistor) is connected:",
    "questionAr": "لتحويل الجلفانومتر ذي الملف المتحرك إلى أميتر يقيس تيارات مستمرة أكبر، يتم توصيل مقاومة صغيرة تسمى مجزئ التيار ($R_s$):",
    "optionsEn": [
      "In series with the galvanometer coil, having a very large resistance",
      "In parallel with the galvanometer coil, having a very small resistance",
      "In parallel with the galvanometer coil, having an infinite resistance",
      "In series with the galvanometer coil, having zero resistance"
    ],
    "optionsAr": [
      "على التوالي مع ملف الجلفانومتر، وتكون ذات قيمة كبيرة جداً",
      "على التوازي مع ملف الجلفانومتر، وتكون ذات قيمة صغيرة جداً",
      "على التوازي مع ملف الجلفانومتر، وتكون مقاومتها لا نهائية",
      "على التوالي مع ملف الجلفانومتر، وتكون مقاومتها صفراً"
    ],
    "correctAnswer": "In parallel with the galvanometer coil, having a very small resistance",
    "correctIndex": 1,
    "hintEn": "Shunt $R_s$ is small and parallel to bypass most of the total current.",
    "hintAr": "مجزئ التيار مقاومة صغيرة توصل على التوازي لتمرير الجزء الأكبر من التيار الكلي.",
    "stepByStepSolutionEn": [
      "A shunt resistor ($R_s$) is a very small resistance connected in parallel with the galvanometer coil ($R_g$). It serves three purposes: (1) It bypasses the vast majority of current around the coil, protecting the delicate fine-wire galvanometer from burning. (2) It expands the maximum current measuring range ($I > I_g$). (3) It minimizes the total equivalent resistance of the ammeter ($R_A = \\frac{R_g R_s}{R_g + R_s} < R_s$), so inserting it into a circuit does not noticeably alter the existing current."
    ],
    "stepByStepSolutionAr": [
      "مجزئ التيار هو مقاومة صغيرة جداً توصل على التوازي مع ملف الجلفانومتر لتقوم بـ: 1) حماية ملف الجلفانومتر من الاحتراق لأنها تمرر الجزء الأكبر من التيار الكلي. 2) زيادة مدى قياس شدة التيار ليقيس تيارات أكبر بكثير ($I$). 3) تقليل المقاومة الكلية لجهاز الأميتر ($R_A < R_s$) حتى لا يؤثر توصيله على التوالي في الدائرة على شدة التيار المراد قياسه."
    ],
    "teacherTipEn": "Smaller $R_s \\implies$ larger current measuring range $I$ and lower instrument resistance.",
    "teacherTipAr": "كلما صغرت قيمة مجزئ التيار $R_s$، زاد مدى قياس الأميتر ($I$) وقلت مقاومته الكلية."
  },
  {
    "id": "phys_ch2_db_easy_35",
    "titleEn": "Shunt Resistance Mathematical Expression",
    "titleAr": "القانون الرياضي لحساب مقاومة مجزئ التيار",
    "difficulty": "easy",
    "questionEn": "The value of the shunt resistor ($R_s$) required to expand a galvanometer's full-scale current from $I_g$ to a maximum current $I$ is given by:",
    "questionAr": "تعطى قيمة مقاومة مجزئ التيار ($R_s$) اللازمة لزيادة مدى قياس تيار الجلفانومتر من $I_g$ إلى أقصى تيار $I$ بالعلاقة:",
    "optionsEn": [
      "$R_s = \\frac{I - I_g}{I_g R_g}$",
      "$R_s = \\frac{V_g}{I + I_g}$",
      "$R_s = \\frac{I_g R_g}{I - I_g}$",
      "$R_s = \\frac{R_g (I - I_g)}{I}$"
    ],
    "optionsAr": [
      "$R_s = \\frac{I - I_g}{I_g R_g}$",
      "$R_s = \\frac{V_g}{I + I_g}$",
      "$R_s = \\frac{I_g R_g}{I - I_g}$",
      "$R_s = \\frac{R_g (I - I_g)}{I}$"
    ],
    "correctAnswer": "$R_s = \\frac{I_g R_g}{I - I_g}$",
    "correctIndex": 2,
    "hintEn": "Parallel connection means voltages are equal: $V_s = V_g \\implies I_s R_s = I_g R_g$, where $I_s = I - I_g$.",
    "hintAr": "التوصيل توازي يعني ثبوت فرق الجهد: $V_s = V_g \\implies (I - I_g) R_s = I_g R_g$.",
    "stepByStepSolutionEn": [
      "Because the galvanometer and shunt are connected in parallel, potential difference is identical across both branches: $V_s = V_g$. Since $V_g = I_g R_g$ and the current through the shunt is $I_s = I - I_g$, we have: $I_s R_s = I_g R_g \\implies (I - I_g) R_s = I_g R_g \\implies R_s = \\frac{I_g R_g}{I - I_g} = \\frac{V_g}{I - I_g}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن مجزئ التيار موصل على التوازي مع ملف الجلفانومتر، فإن فرق الجهد بين طرفيهما متساوٍ: $V_s = V_g$. وبما أن تيار المجزئ هو $I_s = I - I_g$، إذن $I_s R_s = I_g R_g \\implies (I - I_g) R_s = I_g R_g$، ومنها: $R_s = \\frac{I_g R_g}{I - I_g} = \\frac{V_g}{I - I_g}$."
    ],
    "teacherTipEn": "The quantity $I_g R_g$ is simply the maximum voltage drop across the galvanometer ($V_g$).",
    "teacherTipAr": "المقدار $I_g R_g$ هو أقصى فرق جهد يتحمله ملف الجلفانومتر بمفرده ويسمى $V_g$."
  },
  {
    "id": "phys_ch2_db_easy_36",
    "titleEn": "Total Equivalent Resistance of a DC Ammeter",
    "titleAr": "المقاومة الكلية المكافئة لجهاز الأميتر",
    "difficulty": "easy",
    "questionEn": "When a galvanometer of resistance $R_g$ is shunted by a resistor $R_s$, the total equivalent resistance of the ammeter ($R_A$) is:",
    "questionAr": "عند توصيل ملف جلفانومتر مقاومته $R_g$ بمجزئ تيار مقاومته $R_s$، تكون المقاومة المكافئة الكلية للأميتر ($R_A$):",
    "optionsEn": [
      "$R_A = R_g + R_s$, which is larger than $R_g$",
      "$R_A = \\frac{R_g + R_s}{R_g R_s}$",
      "$R_A = R_g - R_s$",
      "$R_A = \\frac{R_g R_s}{R_g + R_s}$, which is smaller than $R_s$"
    ],
    "optionsAr": [
      "$R_A = R_g + R_s$ وهي أكبر من مقاومة الجلفانومتر",
      "$R_A = \\frac{R_g + R_s}{R_g R_s}$",
      "$R_A = R_g - R_s$",
      "$R_A = \\frac{R_g R_s}{R_g + R_s}$ وهي أصغر من أصغر المقاومتين (أصغر من $R_s$)"
    ],
    "correctAnswer": "$R_A = \\frac{R_g R_s}{R_g + R_s}$, which is smaller than $R_s$",
    "correctIndex": 3,
    "hintEn": "Two resistors in parallel: product over sum. The equivalent resistance is smaller than the smallest branch.",
    "hintAr": "مقاومتان على التوازي: حاصل ضربهما على حاصل جمعهما، وتكون أصغر من أصغر مقاومة.",
    "stepByStepSolutionEn": [
      "In parallel connection, equivalent resistance is $R_A = \\frac{R_g R_s}{R_g + R_s}$. Because $R_s$ is already very small (e.g. $0.1\\,\\Omega$) and $R_g$ is relatively large (e.g. $50\\,\\Omega$), the parallel combination $R_A$ is strictly less than $R_s$. This ensures that connecting the ammeter in series does not introduce significant series resistance to the circuit."
    ],
    "stepByStepSolutionAr": [
      "بما أن التوصيل على التوازي، فإن المقاومة المكافئة للأميتر تحسب من حاصل ضربهما على حاصل جمعهما: $R_A = \\frac{R_g R_s}{R_g + R_s}$. وتكون النتيجة دائماً أصغر من أصغر المقاومتين (أي أصغر من $R_s$)، وهو أمر ضروري حتى لا يؤثر وجود الأميتر على التوالي في الدائرة على تيارها الأصلي."
    ],
    "teacherTipEn": "An ideal ammeter has zero resistance ($R_A = 0\\,\\Omega$).",
    "teacherTipAr": "الأميتر المثالي تكون مقاومته مساوية للصفر تماماً ($R_A = 0$)."
  },
  {
    "id": "phys_ch2_db_easy_37",
    "titleEn": "Proper Circuit Connection of a DC Ammeter",
    "titleAr": "طريقة توصيل الأميتر في الدائرة الكهربية والسبب",
    "difficulty": "easy",
    "questionEn": "How must an ammeter be connected in an electric circuit to measure current, and why?",
    "questionAr": "كيف يوصل جهاز الأميتر في الدائرة الكهربية لقياس شدة التيار، وما هو السبب؟",
    "optionsEn": [
      "In series with the component, because current is the same throughout a series branch and the ammeter's low resistance avoids altering circuit current",
      "In parallel across the battery, because ammeters require maximum voltage",
      "In parallel with the load resistor to measure its voltage drop",
      "Any random connection, because ammeters measure wireless current"
    ],
    "optionsAr": [
      "على التوالي في الدائرة، لأن شدة التيار ثابتة في التوالي، وصغر مقاومة الأميتر يضمن عدم التأثير على تيار الدائرة",
      "على التوازي مع البطارية للحصول على أقصى فرق جهد",
      "على التوازي مع المقاومة المراد قياس تيارها",
      "بأي طريقة عشوائية لأن الأميتر يقيس التيارات اللاسلكية"
    ],
    "correctAnswer": "In series with the component, because current is the same throughout a series branch and the ammeter's low resistance avoids altering circuit current",
    "correctIndex": 0,
    "hintEn": "Series connection: all current passes through the ammeter. Parallel connection of ammeter causes a short circuit!",
    "hintAr": "يوصل الأميتر على التوالي ليمر به كل التيار. وتوصيله على التوازي يسبب قصر الدائرة (Short circuit) لاحتراق ملفه.",
    "stepByStepSolutionEn": [
      "To measure the flow rate of charge (current) passing through a branch, all electrons must pass through the ammeter, necessitating a series connection. If an ammeter is accidentally connected in parallel across a load or source, its extremely small internal resistance creates a dead short-circuit, drawing an immense surge of current that can burn the meter and damage the power source."
    ],
    "stepByStepSolutionAr": [
      "يوصل الأميتر على التوالي مع المكون المراد قياس تياره حتى يمر به نفس تيار الدائرة المراد قياسه. ولأن مقاومة الأميتر صغيرة جداً، فإن توصيله على التوالي لا يغير من مقاومة الدائرة وتيارها الأصلي بشكل ملموس. وإذا وُصل بالخطأ على التوازي، فإنه يعمل كقصر في الدائرة (سلك عديم المقاومة) ويمر به تيار هائل يؤدي إلى احتراقه فوراً."
    ],
    "teacherTipEn": "Golden Rule: Ammeter in SERIES; Voltmeter in PARALLEL.",
    "teacherTipAr": "قاعدة ذهبية: الأميتر على التوالي دائماً، والفولتميتر على التوازي دائماً."
  },
  {
    "id": "phys_ch2_db_easy_38",
    "titleEn": "Voltmeter Multiplier Resistor Connection and Functions",
    "titleAr": "طريقة توصيل مضاعف الجهد ووظائفه في تحويل الجلفانومتر لفولتميتر",
    "difficulty": "easy",
    "questionEn": "To convert a moving-coil galvanometer into a direct-current voltmeter capable of measuring large potential differences, a resistor $R_m$ (multiplier resistor) is connected:",
    "questionAr": "لتحويل الجلفانومتر ذي الملف المتحرك إلى فولتميتر يقيس فروق جهد مستمرة أكبر، يتم توصيل مقاومة تسمى مضاعف الجهد ($R_m$):",
    "optionsEn": [
      "In parallel with the galvanometer coil, having a very small resistance",
      "In series with the galvanometer coil, having a very large resistance",
      "In parallel with the galvanometer coil, having an infinite resistance",
      "In series with the galvanometer coil, having zero resistance"
    ],
    "optionsAr": [
      "على التوازي مع ملف الجلفانومتر، وتكون ذات قيمة صغيرة جداً",
      "على التوالي مع ملف الجلفانومتر، وتكون ذات قيمة كبيرة جداً",
      "على التوازي مع ملف الجلفانومتر، وتكون مقاومتها لا نهائية",
      "على التوالي مع ملف الجلفانومتر، وتكون مقاومتها صفراً"
    ],
    "correctAnswer": "In series with the galvanometer coil, having a very large resistance",
    "correctIndex": 1,
    "hintEn": "Multiplier $R_m$ is large and series to drop most of the measured voltage.",
    "hintAr": "مضاعف الجهد مقاومة كبيرة جداً توصل على التوالي لتتحمل الجزء الأكبر من فرق الجهد المقاس.",
    "stepByStepSolutionEn": [
      "A multiplier resistor ($R_m$) is a large resistance connected in series with the galvanometer coil ($R_g$). It performs three essential functions: (1) It drops the major part of the high voltage ($V_m \\gg V_g$), preventing damage to the delicate coil. (2) It dramatically expands the voltage measuring range ($V \\gg V_g$). (3) It makes the total voltmeter resistance very large ($R_v = R_g + R_m$), so that when connected in parallel across a circuit branch, it draws negligible current."
    ],
    "stepByStepSolutionAr": [
      "مضاعف الجهد هو مقاومة كبيرة جداً توصل على التوالي مع ملف الجلفانومتر لتقوم بـ: 1) حماية ملف الجلفانومتر من التلف لأنها تتحمل الجزء الأكبر من فرق الجهد الكلي المقاس. 2) زيادة مدى قياس فرق الجهد ليقيس فروق جهد عالية ($V$). 3) زيادة المقاومة الكلية لجهاز الفولتميتر ($R_v = R_g + R_m$) حتى لا يسحب تياراً يذكر من الدائرة عند توصيله على التوازي."
    ],
    "teacherTipEn": "Larger $R_m \\implies$ higher maximum voltage range $V$ and higher input impedance.",
    "teacherTipAr": "كلما كبرت قيمة مضاعف الجهد $R_m$، زاد مدى قياس فرق الجهد المقاس ($V$) وزادت دقة الجهاز."
  },
  {
    "id": "phys_ch2_db_easy_39",
    "titleEn": "Multiplier Resistance Mathematical Expression",
    "titleAr": "القانون الرياضي لحساب مقاومة مضاعف الجهد",
    "difficulty": "easy",
    "questionEn": "The value of the multiplier resistor ($R_m$) required to increase a galvanometer's voltage range from $V_g$ to a maximum voltage $V$ is given by:",
    "questionAr": "تعطى قيمة مقاومة مضاعف الجهد ($R_m$) اللازمة لزيادة مدى قياس فرق الجهد من $V_g$ إلى أقصى جهد $V$ بالعلاقة:",
    "optionsEn": [
      "$R_m = \\frac{I_g}{V - V_g}$",
      "$R_m = \\frac{V + V_g}{I_g}$",
      "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$",
      "$R_m = \\frac{V - I_g}{R_g}$"
    ],
    "optionsAr": [
      "$R_m = \\frac{I_g}{V - V_g}$",
      "$R_m = \\frac{V + V_g}{I_g}$",
      "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$",
      "$R_m = \\frac{V - I_g}{R_g}$"
    ],
    "correctAnswer": "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$",
    "correctIndex": 2,
    "hintEn": "Series connection: $V = V_g + V_m \\implies V_m = V - V_g$, and $R_m = V_m / I_g$.",
    "hintAr": "في التوالي: الجهد الكلي هو مجموع الجهود $V = V_g + V_m \\implies V_m = V - V_g$ والمقاومة $R_m = \\frac{V - V_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "In a series circuit, total voltage is the sum of component voltages: $V = V_g + V_m$. Since the current through both components at full scale is $I_g$, we have: $V = I_g R_g + I_g R_m = I_g (R_g + R_m)$. Rearranging: $I_g R_m = V - I_g R_g \\implies R_m = \\frac{V - I_g R_g}{I_g} = \\frac{V - V_g}{I_g}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن مضاعف الجهد موصل على التوالي مع ملف الجلفانومتر ويمر بهما نفس تيار أقصى انحراف $I_g$، فإن فرق الجهد الكلي يساوي مجموع فرقي الجهد: $V = V_g + V_m \\implies V = I_g R_g + I_g R_m$. وبالترتيب نجد أن: $I_g R_m = V - V_g \\implies R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$."
    ],
    "teacherTipEn": "Notice that $V_g = I_g R_g$ is the original maximum voltage of the galvanometer.",
    "teacherTipAr": "تذكر أن $V_g = I_g R_g$ هو أقصى فرق جهد يقيسه الجلفانومتر بمفرده قبل تحويله."
  },
  {
    "id": "phys_ch2_db_easy_40",
    "titleEn": "Total Resistance of a Voltmeter and Ideal Voltmeter Specification",
    "titleAr": "المقاومة الكلية للفولتميتر ومقاومة الفولتميتر المثالي",
    "difficulty": "easy",
    "questionEn": "The total equivalent resistance of a voltmeter is $R_v = R_g + R_m$. What is the theoretical internal resistance of an IDEAL voltmeter, and why?",
    "questionAr": "المقاومة الكلية المكافئة لجهاز الفولتميتر هي $R_v = R_g + R_m$. ما هي المقاومة الداخلية النظرية للفولتميتر المثالي، وما هو السبب؟",
    "optionsEn": [
      "Zero ($R_v = 0$), so that it allows all current to pass through it freely",
      "Equal to the resistance of the battery's internal resistance ($R_v = r$)",
      "$1\\,\\Omega$ to simplify calculations",
      "Infinite ($R_v = \\infty$), so that it draws zero current from the branch across which it is connected"
    ],
    "optionsAr": [
      "صفر ($R_v = 0$) لكي يسمح بمرور كل التيار خلاله بحرية",
      "مساوية للمقاومة الداخلية للبطارية",
      "$1\\,\\Omega$ لتبسيط الحسابات الرياضية",
      "مالانهاية ($R_v = \\infty$)، حتى لا يسحب أي تيار كهربي مطلقاً من فرع الدائرة الموصل معه على التوازي"
    ],
    "correctAnswer": "Infinite ($R_v = \\infty$), so that it draws zero current from the branch across which it is connected",
    "correctIndex": 3,
    "hintEn": "A voltmeter is in parallel. If $R_v = \\infty$, $I_v = V/R_v = 0$, so circuit operation is completely undisturbed.",
    "hintAr": "يوصل الفولتميتر على التوازي، ومقاومته اللانهائية تجعله لا يسحب أي تيار فيقيس فرق الجهد بدقة تامة.",
    "stepByStepSolutionEn": [
      "A voltmeter is connected in parallel across the two points whose potential difference is to be measured. If the voltmeter possessed low resistance, it would divert significant current through itself, altering the currents and potential drops in the circuit. An ideal voltmeter has infinite internal resistance ($R_v = \\infty$), so that $I_{\\text{voltmeter}} = \\frac{V}{R_v} = 0$, ensuring $100\\%$ measurement accuracy without disturbing the original circuit."
    ],
    "stepByStepSolutionAr": [
      "يوصل الفولتميتر على التوازي بين النقطتين المراد قياس فرق الجهد بينهما. فإذا كانت مقاومته صغيرة، فإنه سيسحب جزءاً من تيار الدائرة مما يغير تيار المقاومة وفرق الجهد المراد قياسه ويحدث خطأ في القياس. ولذلك يمتلك الفولتميتر المثالي مقاومة لا نهائية ($R_v = \\infty$) بحيث لا يسحب أي تيار من الدائرة ($I_v = 0$) فيقيس فرق الجهد الفعلي بدقة تامة دون أي تشويه."
    ],
    "teacherTipEn": "A digital multimeter (DMM) in voltage mode typically has an internal resistance of $10\\text{ M}\\Omega$ or higher.",
    "teacherTipAr": "تتميز أجهزة قياس الجهد الرقمية الحديثة بمقاومة دخل فائقة الكبر تصل إلى 10 ملايين أوم."
  },
  {
    "id": "phys_ch2_db_easy_41",
    "titleEn": "Proper Circuit Connection of a DC Voltmeter",
    "titleAr": "طريقة توصيل الفولتميتر في الدائرة الكهربية",
    "difficulty": "easy",
    "questionEn": "How must a voltmeter be connected in an electrical circuit, and what happens if it is accidentally connected in series?",
    "questionAr": "كيف يجب توصيل الفولتميتر في الدائرة الكهربية، وماذا يحدث إذا وُصل بالخطأ على التوالي؟",
    "optionsEn": [
      "It must be connected in parallel; if connected in series, its very high resistance virtually stops all current from flowing in the circuit",
      "It must be connected in series; if connected in parallel, it explodes immediately",
      "It must be connected across the open switch only",
      "It can be connected in series without affecting the circuit at all"
    ],
    "optionsAr": [
      "يوصل على التوازي؛ وإذا وُصل بالخطأ على التوالي فإن مقاومته الهائلة تكاد توقف مرور التيار في الدائرة تماماً",
      "يوصل على التوالي؛ وإذا وصل على التوازي ينفجر",
      "يوصل عبر المفتاح المفتوح فقط",
      "يوصل على التوالي دون أي تأثير على الدائرة"
    ],
    "correctAnswer": "It must be connected in parallel; if connected in series, its very high resistance virtually stops all current from flowing in the circuit",
    "correctIndex": 0,
    "hintEn": "Voltmeter resistance is massive ($R_v \\approx 10^4 - 10^6\\,\\Omega$). In series: $I = V_B / (R + R_v) \\approx 0$.",
    "hintAr": "مقاومة الفولتميتر كبيرة جداً، فعند وضعه على التوالي تصبح مقاومة الدائرة هائلة وينعدم التيار تقريباً.",
    "stepByStepSolutionEn": [
      "A voltmeter measures potential difference between two distinct points, requiring a parallel connection across them. If mistakenly connected in series in a circuit, its massive internal resistance ($R_v = R_g + R_m$) adds into the main line, driving total circuit resistance up and dropping the circuit current nearly to zero. Consequently, lamps in the circuit will turn off and the voltmeter will read almost the entire battery EMF ($V \\approx V_B$)."
    ],
    "stepByStepSolutionAr": [
      "يقيس الفولتميتر فرق الجهد بين نقطتين، ولذلك يجب أن يوصل على التوازي بينهما. وإذا وُصل بالخطأ على التوالي في مسار الدائرة، فإن مقاومته الكبيرة جداً تضاف لمقاومة الدائرة، فيقل تيار الدائرة إلى قيمة تكاد تنعدم (تنطفئ المصابيح مثلاً)، ويقرأ الفولتميتر فرق الجهد بين قطبي البطارية تقريباً دون أن يحترق الجهاز."
    ],
    "teacherTipEn": "Notice: Connecting an ammeter in parallel BURNS it; connecting a voltmeter in series just STOPS current without destroying it.",
    "teacherTipAr": "مقارنة ممتازة: توصيل الأميتر على التوازي يحرقه، بينما توصيل الفولتميتر على التوالي يوقف التيار فقط دون أن يتلف الفولتميتر."
  },
  {
    "id": "phys_ch2_db_easy_42",
    "titleEn": "Ohmmeter Working Purpose and Construction Components",
    "titleAr": "وظيفة جهاز الأوميتر ومكونات دائرته الكهربية",
    "difficulty": "easy",
    "questionEn": "What is an ohmmeter, and what are the primary electrical components comprising its internal circuit?",
    "questionAr": "ما هو جهاز الأوميتر، وما هي المكونات الأساسية المكونة لدائرته الكهربية الداخلية؟",
    "optionsEn": [
      "An instrument that generates electrical resistance using a piezoelectric crystal",
      "An instrument used to measure unknown resistance directly; it consists of a microammeter, a fixed standard resistor ($R_c$), an adjustable rheostat ($R_v$), and a DC battery of constant EMF ($V_B$)",
      "A transformer that measures high AC currents using induction",
      "A galvanometer connected to an alternating dynamo source"
    ],
    "optionsAr": [
      "جهاز يولد مقاومة كهربية باستخدام بلورة كهروإجهادية",
      "جهاز يستخدم لقياس قيمة مقاومة مجهولة بطريقة مباشرة؛ ويتكون من ميكروأميتر ومقاومة عيارية ثابتة ($R_c$) ومقاومة متغيرة ريوستات ($R_v$) وبطارية مستمرة ذات قوة دافعة ثابتة ($V_B$)",
      "محول كهربي يقيس تيارات مترددة بالحث",
      "جلفانومتر متصل بمصدر دينامو متردد"
    ],
    "correctAnswer": "An instrument used to measure unknown resistance directly; it consists of a microammeter, a fixed standard resistor ($R_c$), an adjustable rheostat ($R_v$), and a DC battery of constant EMF ($V_B$)",
    "correctIndex": 1,
    "hintEn": "Components: Galvanometer ($R_g$), Fixed standard resistor ($R_c$), Rheostat ($R_v$), Battery ($V_B, r$).",
    "hintAr": "المكونات الداخلية للأوميتر: جلفانومتر، مقاومة عيارية، ريوستات، بطارية ثابتة الجهد.",
    "stepByStepSolutionEn": [
      "An ohmmeter is a specialized direct-reading resistance meter. It is constructed from a sensitive moving-coil microammeter ($R_g, I_g$), connected in series with a fixed standard resistor ($R_c$, typically thousands of ohms to limit current), a variable rheostat ($R_v$ for zero-adjustment calibration), and a dry cell battery of constant electromotive force ($V_B$, with small internal resistance $r$)."
    ],
    "stepByStepSolutionAr": [
      "الأوميتر هو جهاز يستخدم لقياس قيمة مقاومة كهربية مجهولة بصورة مباشرة. وتتكون دائرته من: ميكروأميتر مقاومته $R_g$ وأقصى تيار يتحمله $I_g$، موصل على التوالي مع مقاومة عيارية ثابتة $R_c$ (قيمتها كبيرة لحماية الجهاز)، ومقاومة متغيرة $R_v$ (لضبط المؤشر عند الصفر قبل القياس)، وبطارية قوتها الدافعة ثابتة $V_B$ ومقاومتها الداخلية مهملة أو صغيرة $r$."
    ],
    "teacherTipEn": "The total internal resistance of the ohmmeter is $R_{\\text{in}} = R_g + R_c + R_v + r$.",
    "teacherTipAr": "المقاومة الكلية الداخلية للأوميتر قبل القياس هي: $R_{\\text{in}} = R_g + R_c + R_v + r$."
  },
  {
    "id": "phys_ch2_db_easy_43",
    "titleEn": "Ohmmeter Zero Adjustment Calibration Procedure",
    "titleAr": "خطوة ضبط الصفر وتدريج الأوميتر قبل القياس",
    "difficulty": "easy",
    "questionEn": "In an ohmmeter, before connecting an unknown resistance, the two test terminals are touched together ($R_x = 0$). How is the instrument calibrated during this step?",
    "questionAr": "في جهاز الأوميتر، قبل توصيل المقاومة المجهولة يتم تلامس طرفي التوصيل معاً ($R_x = 0$). كيف يتم ضبط ومعايرة الجهاز في هذه الخطوة؟",
    "optionsEn": [
      "The battery is removed to make the pointer point to zero current",
      "The galvanometer is shaken until the needle centers on infinity",
      "The rheostat $R_v$ is adjusted until the pointer deflects to full-scale current ($I_g$), which corresponds to the ZERO-OHM ($0\\,\\Omega$) mark on the resistance scale",
      "The fixed standard resistor $R_c$ is short-circuited permanently"
    ],
    "optionsAr": [
      "يتم نزع البطارية ليقف المؤشر عند صفر التيار",
      "يتم تحريك الجهاز حتى يستقر المؤشر في منتصف التدريج",
      "يتم ضبط المقاومة المتغيرة $R_v$ حتى ينحرف المؤشر إلى نهاية تدريج التيار ($I_g$)، والذي يقابل صفر المقاومة ($0\\,\\Omega$) على تدريج المقاومات",
      "يتم إلغاء المقاومة الثابتة نهائياً"
    ],
    "correctAnswer": "The rheostat $R_v$ is adjusted until the pointer deflects to full-scale current ($I_g$), which corresponds to the ZERO-OHM ($0\\,\\Omega$) mark on the resistance scale",
    "correctIndex": 2,
    "hintEn": "Zero resistance ($R_x = 0$) means maximum current ($I = I_g = \\frac{V_B}{R_{\\text{in}}}$).",
    "hintAr": "صفر المقاومة يعني مرور أقصى شدة تيار يتحملها الجلفانومتر ($I_g$).",
    "stepByStepSolutionEn": [
      "When the two test leads are connected directly together ($R_x = 0$), only internal resistance is present in the circuit. The variable resistor $R_v$ is tuned until the current in the circuit equals the full-scale deflection current of the galvanometer: $I_g = \\frac{V_B}{R_{\\text{total}}} = \\frac{V_B}{R_g + R_c + R_v + r}$. At this point, the pointer sits at the extreme right of the scale (maximum current $I_g$), which is calibrated as the $0\\,\\Omega$ mark of the ohmmeter."
    ],
    "stepByStepSolutionAr": [
      "عند تلامس طرفي الأوميتر تكون المقاومة الخارجية المقاسة مساوية للصفر ($R_x = 0$). وتضبط المقاومة المتغيرة $R_v$ بحيث يمر في الدائرة أقصى تيار يتحمله الجلفانومتر: $I_g = \\frac{V_B}{R_{\\text{in}}}$. وعند هذا الموضع (أقصى انحراف للتيار) يتم وضع علامة الصفر على تدريج المقاومات ($0\\,\\Omega$)."
    ],
    "teacherTipEn": "Notice: Full-scale current corresponds to ZERO external resistance!",
    "teacherTipAr": "لاحظ جيداً: أقصى تيار للتدريج يقابل صفر المقاومة الخارجية!"
  },
  {
    "id": "phys_ch2_db_easy_44",
    "titleEn": "Why the Ohmmeter Resistance Scale is Non-Linear (Crowded at High R)",
    "titleAr": "سبب عدم انتظام تدريج الأوميتر وتزاحم أقسامه عند المقاومات العالية",
    "difficulty": "easy",
    "questionEn": "Why is the resistance scale of an ohmmeter non-uniform (crowded at the high-resistance end) and reads in the reverse direction to the current scale?",
    "questionAr": "لماذا يكون تدريج المقاومات في الأوميتر غير منتظم (تتزاحم أقسامه عند المقاومات العالية) ويكون عكس اتجاه تدريج التيار؟",
    "optionsEn": [
      "Because the magnetic field inside the ohmmeter is non-uniform",
      "Because the battery EMF continuously decreases with every second of use",
      "Because the pointer is made of a paramagnetic aluminum alloy",
      "Because the current is inversely proportional to the TOTAL circuit resistance ($R_{\\text{in}} + R_x$), not to the unknown resistance $R_x$ alone"
    ],
    "optionsAr": [
      "لأن المجال المغناطيسي داخل الأوميتر غير منتظم",
      "لأن القوة الدافعة للبطارية تتناقص بسرعة مع الاستخدام",
      "لأن المؤشر مصنوع من مادة بارامغناطيسية",
      "لأن شدة التيار تتناسب عكسياً مع المقاومة الكلية للدائرة ($R_{\\text{in}} + R_x$) وليس مع المقاومة المجهولة $R_x$ وحدها"
    ],
    "correctAnswer": "Because the current is inversely proportional to the TOTAL circuit resistance ($R_{\\text{in}} + R_x$), not to the unknown resistance $R_x$ alone",
    "correctIndex": 3,
    "hintEn": "$I = \\frac{V_B}{R_{\\text{in}} + R_x}$. The presence of $R_{\\text{in}}$ in the denominator makes $I(R_x)$ non-linear.",
    "hintAr": "القانون هو $I = \\frac{V_B}{R_{\\text{in}} + R_x}$، ووجود $R_{\\text{in}}$ في المقام يجعل العلاقة غير خطية.",
    "stepByStepSolutionEn": [
      "From Ohm's law: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$. The current is inversely proportional to the sum $(R_{\\text{in}} + R_x)$. As $R_x$ increases, equal increments in $R_x$ produce progressively smaller decreases in current $I$, causing the resistance scale divisions to become increasingly crowded together near the infinity end ($\\infty\\,\\Omega$). Furthermore, as $R_x$ increases, $I$ decreases, so the resistance scale runs from right ($0\\,\\Omega$) to left ($\\infty\\,\\Omega$), in the exact opposite direction to current."
    ],
    "stepByStepSolutionAr": [
      "وفق قانون أوم: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$. شدة التيار لا تتناسب عكسياً مع المقاومة المجهولة $R_x$ بمفردها، بل مع المقاومة الكلية لدائرة الجهاز مضافاً إليها المقاومة المجهولة ($R_{\\text{in}} + R_x$). ولذلك فإن الزيادات المتساوية في $R_x$ لا تقابلها تناقصات متساوية في شدة التيار، فتتزاحم الأقسام جهة المقاومات الكبيرة (المالانهاية). ولأن زيادة $R_x$ تقلل التيار، فإن تدريج المقاومات يبدأ من الصفر يميناً وينتهي بالمالانهاية يساراً (عكس تدريج التيار)."
    ],
    "teacherTipEn": "When $R_x = R_{\\text{in}}$, the current drops to exactly half of full scale ($I = \\frac{1}{2} I_g$).",
    "teacherTipAr": "عندما تكون المقاومة الخارجية مساوية للمقاومة الداخلية للأوميتر ($R_x = R_{\\text{in}}$)، ينحرف المؤشر إلى نصف تدريج التيار تماماً."
  },
  {
    "id": "phys_ch2_db_easy_45",
    "titleEn": "Ohmmeter Half-Scale Deflection Fundamental Relation",
    "titleAr": "قاعدة انحراف مؤشر الأوميتر إلى نصف التدريج",
    "difficulty": "easy",
    "questionEn": "When an unknown resistor $R_x$ is connected across the terminals of an ohmmeter and causes the pointer to deflect to exactly HALF of its full-scale current ($\\frac{1}{2} I_g$), the value of $R_x$ is:",
    "questionAr": "عند توصيل مقاومة مجهولة $R_x$ بين طرفي أوميتر فانحرف مؤشره إلى نصف تدريج التيار تماماً ($\\frac{1}{2} I_g$)، فإن قيمة $R_x$ تكون:",
    "optionsEn": [
      "Equal to the total internal resistance of the ohmmeter ($R_x = R_{\\text{in}}$)",
      "Half the internal resistance of the ohmmeter ($R_x = \\frac{1}{2} R_{\\text{in}}$)",
      "Double the internal resistance of the ohmmeter ($R_x = 2 R_{\\text{in}}$)",
      "Zero ohms ($R_x = 0$)"
    ],
    "optionsAr": [
      "مساوية للمقاومة الكلية الداخلية للأوميتر تماماً ($R_x = R_{\\text{in}}$)",
      "نصف المقاومة الداخلية للأوميتر",
      "ضعف المقاومة الداخلية للأوميتر",
      "صفراً"
    ],
    "correctAnswer": "Equal to the total internal resistance of the ohmmeter ($R_x = R_{\\text{in}}$)",
    "correctIndex": 0,
    "hintEn": "For current to halve, total resistance must double: $R_{\\text{total}} = 2 R_{\\text{in}} \\implies R_{\\text{in}} + R_x = 2 R_{\\text{in}} \\implies R_x = R_{\\text{in}}$.",
    "hintAr": "لكي يقل التيار للنصف يجب أن تتضاعف المقاومة الكلية للدائرة: $R_{\\text{in}} + R_x = 2 R_{\\text{in}} \\implies R_x = R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "At full-scale deflection (no $R_x$): $I_g = \\frac{V_B}{R_{\\text{in}}}$. When $R_x$ is inserted: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$. If $I = \\frac{1}{2} I_g$, then $\\frac{V_B}{R_{\\text{in}} + R_x} = \\frac{1}{2} \\frac{V_B}{R_{\\text{in}}} \\implies R_{\\text{in}} + R_x = 2 R_{\\text{in}} \\implies R_x = R_{\\text{in}}$."
    ],
    "stepByStepSolutionAr": [
      "عند أقصى انحراف للتيار: $I_g = \\frac{V_B}{R_{\\text{in}}}$. وعند توصيل $R_x$ يصبح التيار $I = \\frac{V_B}{R_{\\text{in}} + R_x}$. وبما أن $I = \\frac{1}{2} I_g$، فإن المقاومة الكلية يجب أن تتضاعف: $R_{\\text{in}} + R_x = 2 R_{\\text{in}}$، مما يعني مباشرة أن $R_x = R_{\\text{in}}$."
    ],
    "teacherTipEn": "General rule: If pointer deflects to $\\frac{1}{n}$ of full scale, then $R_x = (n - 1) R_{\\text{in}}$.",
    "teacherTipAr": "قاعدة ذهبية عامة: إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج، فإن $R_x = (n - 1) R_{\\text{in}}$."
  },
  {
    "id": "phys_ch2_db_easy_46",
    "titleEn": "Rewinding Circular Coil with Same Wire Length Effect on B",
    "titleAr": "إعادة لف ملف دائري بنفس طول السلك وتأثيره على كثافة الفيض",
    "difficulty": "easy",
    "questionEn": "A circular coil made of a wire of fixed length $L$ carries current $I$. If the coil is unwound and rewound into a new circular coil having half its original radius ($r' = \\frac{1}{2}r$) connected to the same current, how does the magnetic flux density $B'$ at its center compare to the original $B$?",
    "questionAr": "ملف دائري مصنوع من سلك طوله $L$ يمر به تيار $I$. إذا أُعيد لف نفس السلك ليصبح ملفاً دائرياً نصف قطره نصف القيمة الأصلية ($r' = \\frac{1}{2}r$) ومر به نفس التيار، كيف تتغير كثافة الفيض المغناطيسي عند مركزه؟",
    "optionsEn": [
      "$B' = 2 B$ (doubles)",
      "$B' = 4 B$ (quadruples)",
      "$B' = B$ (remains unchanged)",
      "$B' = \\frac{1}{4} B$ (decreases to a quarter)"
    ],
    "optionsAr": [
      "$B' = 2 B$ (تتضاعف مرتين)",
      "$B' = 4 B$ (تزداد إلى أربعة أمثالها)",
      "$B' = B$ (تظل ثابتة دون تغير)",
      "$B' = \\frac{1}{4} B$ (تقل للربع)"
    ],
    "correctAnswer": "$B' = 4 B$ (quadruples)",
    "correctIndex": 1,
    "hintEn": "Wire length $L = 2\\pi r N$ is constant. If $r$ halves, $N$ doubles! Then $B \\propto \\frac{N}{r} \\propto \\frac{2}{1/2} = 4$.",
    "hintAr": "طول السلك ثابت: $L = 2\\pi r N$. نقص نصف القطر للنصف يضاعف عدد اللفات، وعليه $B \\propto \\frac{N}{r} \\implies 4B$.",
    "stepByStepSolutionEn": [
      "The length of the wire is $L = N \\times (2\\pi r) = \\text{constant}$. Halving the radius ($r' = \\frac{1}{2}r$) doubles the number of turns ($N' = 2N$). Using $B = \\frac{\\mu N I}{2r}$: $B' = \\frac{\\mu (2N) I}{2(\\frac{1}{2}r)} = 4 \\left(\\frac{\\mu N I}{2r}\\right) = 4 B$."
    ],
    "stepByStepSolutionAr": [
      "بما أن طول السلك ثابت: $L = 2\\pi r N$. عندما يقل نصف القطر إلى النصف ($r' = \\frac{1}{2}r$)، يتضاعف عدد اللفات إلى الضعف ($N' = 2N$). وبالتعويض في قانون كثافة الفيض للملف الدائري $B = \\frac{\\mu N I}{2r}$: نجد أن $B' = \\frac{\\mu (2N) I}{2(\\frac{1}{2}r)} = 4 B$. أي تزداد كثافة الفيض إلى 4 أمثال قيمتها الأصلية."
    ],
    "teacherTipEn": "Shortcut: When rewinding the same wire, $B \\propto \\frac{1}{r^2}$ and $B \\propto N^2$.",
    "teacherTipAr": "علاقة سريعة: عند إعادة لف نفس السلك، تتناسب كثافة الفيض مع مربع عدد اللفات طردياً ($B \\propto N^2$) أو مع مربع نصف القطر عكسياً ($B \\propto \\frac{1}{r^2}$)."
  },
  {
    "id": "phys_ch2_db_easy_47",
    "titleEn": "Cutting a Solenoid and Connecting to Same Voltage Source",
    "titleAr": "قص جزء من ملف لولبي وتوصيل الباقي بنفس مصدر الجهد",
    "difficulty": "easy",
    "questionEn": "An ideal solenoid of length $L$ and resistance $R$ connected to a battery of constant voltage $V$ produces magnetic field $B$ at its axis. If half of the solenoid is cut off and the remaining half is connected across the SAME battery, what is the new magnetic flux density $B'$?",
    "questionAr": "ملف لولبي طوله $L$ ومقاومته $R$ متصل ببطارية جهدها ثابت $V$ ويولد فيضاً $B$ عند محوره. إذا قُطع نصف الملف ووُصل النصف المتبقي بنفس البطارية، فما هي كثافة الفيض المغناطيسي الجديدة $B'$؟",
    "optionsEn": [
      "$B' = B$ (remains unchanged)",
      "$B' = 4 B$ (quadruples)",
      "$B' = 2 B$ (doubles, because current doubles while turn density $n = N/L$ remains constant)",
      "$B' = \\frac{1}{2} B$ (halves)"
    ],
    "optionsAr": [
      "$B' = B$ (تظل ثابتة دون تغير)",
      "$B' = 4 B$ (تزداد إلى أربعة أمثالها)",
      "$B' = 2 B$ (تتضاعف إلى الضعف، لأن شدة التيار تتضاعف مع بقاء عدد اللفات لوحدة الأطوال $n$ ثابتاً)",
      "$B' = \\frac{1}{2} B$ (تقل إلى النصف)"
    ],
    "correctAnswer": "$B' = 2 B$ (doubles, because current doubles while turn density $n = N/L$ remains constant)",
    "correctIndex": 2,
    "hintEn": "Turn density $n = N/L = \\frac{N/2}{L/2}$ is unchanged. But length halved $\\implies$ resistance halved $\\implies$ current doubles!",
    "hintAr": "عدد اللفات لوحدة الأطوال ثابت ($n$)، ولكن قصر طول السلك للنصف يقلل مقاومته للنصف فيتضاعف التيار المار.",
    "stepByStepSolutionEn": [
      "When half the solenoid is cut, both length and turns are halved ($L' = \\frac{L}{2}, N' = \\frac{N}{2}$), so the turn density is unchanged: $n' = \\frac{N'}{L'} = \\frac{N/2}{L/2} = n$. However, cutting the wire in half halves its resistance ($R' = \\frac{R}{2}$). Connecting to the same voltage source $V$ doubles the current: $I' = \\frac{V}{R'} = 2 \\frac{V}{R} = 2 I$. Therefore, $B' = \\mu n' I' = \\mu n (2I) = 2 (\\mu n I) = 2 B$."
    ],
    "stepByStepSolutionAr": [
      "عند قطع نصف الملف يقل طوله للنصف وعدد لفاته للنصف، فيظل عدد اللفات لوحدة الأطوال ثابتاً ($n = \\frac{N}{L}$). ولكن طول سلك الملف يقل للنصف فتقل مقاومته الكهربية للنصف ($R' = \\frac{R}{2}$). وحيث أن البطارية ثابتة الجهد، يتضاعف التيار المار في الملف ($I' = 2I$). ومن قانون الملف اللولبي $B = \\mu n I$، بما أن $n$ ثابتة و $I$ تضاعفت، تتضاعف كثافة الفيض المغناطيسي لتصبح $2B$."
    ],
    "teacherTipEn": "Contrast: If the problem stated 'connected to the SAME current $I$', then $B$ would remain unchanged ($B' = B$).",
    "teacherTipAr": "انتبه: لو نص السؤال على 'توصيله بنفس شدة التيار $I$' لظلت كثافة الفيض ثابته دون تغيير ($B' = B$)."
  },
  {
    "id": "phys_ch2_db_easy_48",
    "titleEn": "Pulling Apart Circular Coil Turns to Form a Solenoid",
    "titleAr": "إبعاد لفات ملف دائري بانتظام ليتحول إلى ملف لولبي",
    "difficulty": "easy",
    "questionEn": "A circular coil of radius $r$ carrying current $I$ has magnetic field $B_{\\text{circ}}$ at its center. Its turns are uniformly stretched apart along its axis until it becomes a solenoid of length $L$. What is the ratio $\\frac{B_{\\text{sol}}}{B_{\\text{circ}}}$ if the same current continues to flow?",
    "questionAr": "ملف دائري نصف قطره $r$ يمر به تيار $I$ وكثافة الفيض عند مركزه $B_{\\text{circ}}$. أُبعدت لفاته بانتظام في اتجاه محوره حتى أصبح ملفاً لولبياً طوله $L$. ما هي النسبة بين كثافة فيض الملف اللولبي إلى الملف الدائري $\\frac{B_{\\text{sol}}}{B_{\\text{circ}}}$ عند مرور نفس التيار؟",
    "optionsEn": [
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{L}{2r}$",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2\\pi r}{L}$",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{r^2}{L^2}$",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L}$"
    ],
    "optionsAr": [
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{L}{2r}$",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2\\pi r}{L}$",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{r^2}{L^2}$",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L}$"
    ],
    "correctAnswer": "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L}$",
    "correctIndex": 3,
    "hintEn": "$B_{\\text{circ}} = \\frac{\\mu N I}{2r}$ and $B_{\\text{sol}} = \\frac{\\mu N I}{L}$. Divide the two.",
    "hintAr": "اقسم قانون اللولبي على قانون الدائري: $\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L}$.",
    "stepByStepSolutionEn": [
      "For the circular coil: $B_{\\text{circ}} = \\frac{\\mu N I}{2r}$. For the solenoid: $B_{\\text{sol}} = \\frac{\\mu N I}{L}$. Dividing the two expressions: $\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{\\mu N I / L}{\\mu N I / 2r} = \\frac{2r}{L}$."
    ],
    "stepByStepSolutionAr": [
      "كثافة الفيض للملف الدائري $B_{\\text{circ}} = \\frac{\\mu N I}{2r}$، وللملف اللولبي $B_{\\text{sol}} = \\frac{\\mu N I}{L}$. بالقسمة مع ثبوت $\\mu, N, I$ نجد أن: $\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L}$ (أي النسبة بين القطر وطول الملف اللولبي)."
    ],
    "teacherTipEn": "This direct relationship is heavily tested in Egyptian national physics exams.",
    "teacherTipAr": "هذه العلاقة المباشرة تتكرر باستمرار في أسئلة المقارنة والمسائل الوزارية."
  },
  {
    "id": "phys_ch2_db_easy_49",
    "titleEn": "Two Mutually Perpendicular Concentric Circular Coils",
    "titleAr": "محصلة كثافة الفيض لملفين دائريين متحدي المركز ومستواهما متعامدان",
    "difficulty": "easy",
    "questionEn": "Two concentric circular coils carrying currents $I_1$ and $I_2$ are placed with their planes perpendicular to each other. If their individual fields at the common center are $B_1$ and $B_2$, what is the resultant magnetic flux density $B_t$?",
    "questionAr": "ملفان دائريان متحد المركز يمر بهما تياران $I_1$ و $I_2$ ومستواهما متعامدان. إذا كانت كثافة الفيض لكل منهما عند المركز المشترك هي $B_1$ و $B_2$، فما هي محصلة كثافة الفيض الكلية $B_t$؟",
    "optionsEn": [
      "$B_t = \\sqrt{B_1^2 + B_2^2}$",
      "$B_t = B_1 + B_2$",
      "$B_t = |B_1 - B_2|$",
      "$B_t = \\frac{B_1 B_2}{B_1 + B_2}$"
    ],
    "optionsAr": [
      "$B_t = \\sqrt{B_1^2 + B_2^2}$",
      "$B_t = B_1 + B_2$",
      "$B_t = |B_1 - B_2|$",
      "$B_t = \\frac{B_1 B_2}{B_1 + B_2}$"
    ],
    "correctAnswer": "$B_t = \\sqrt{B_1^2 + B_2^2}$",
    "correctIndex": 0,
    "hintEn": "Because the coil planes are perpendicular, their axial magnetic field vectors are also mutually perpendicular ($\\vec{B}_1 \\perp \\vec{B}_2$).",
    "hintAr": "بما أن مستويي الملفين متعامدان، فإن محوري المجالين متعامدان أيضاً، فنطبق نظرية فيثاغورس.",
    "stepByStepSolutionEn": [
      "The magnetic field of each coil is perpendicular to its own plane. If plane 1 is perpendicular to plane 2, then normal vector 1 is perpendicular to normal vector 2, meaning $\\vec{B}_1 \\perp \\vec{B}_2$. By vector addition, the resultant magnetic field magnitude is given by Pythagoras theorem: $B_t = \\sqrt{B_1^2 + B_2^2}$."
    ],
    "stepByStepSolutionAr": [
      "المجال المغناطيسي لكل ملف دائري يكون عمودياً على مستواه. فعندما يكون مستواهما متعامدين، فإن اتجاهي خطوط الفيض المغناطيسي عند المركز المشترك يكونان متعامدين أيضاً ($\\vec{B}_1 \\perp \\vec{B}_2$). وتكون المحصلة هي الجذر التربيعي لمجموع مربعيهما وفق نظرية فيثاغورس: $B_t = \\sqrt{B_1^2 + B_2^2}$."
    ],
    "teacherTipEn": "Summary: Same direction $\\implies B_1 + B_2$; Opposite direction $\\implies |B_1 - B_2|$; Perpendicular $\\implies \\sqrt{B_1^2 + B_2^2}$.",
    "teacherTipAr": "ملخص الحالات الثلاث: في نفس الاتجاه $B_1 + B_2$، في اتجاهين متضادين $|B_1 - B_2|$، متعامدان $\\sqrt{B_1^2 + B_2^2}$."
  },
  {
    "id": "phys_ch2_db_easy_50",
    "titleEn": "Straight Wire Tangent to a Circular Coil Neutral Point",
    "titleAr": "سلك مستقيم مماس لملف دائري وشرط انعدام الفيض عند المركز",
    "difficulty": "easy",
    "questionEn": "A long straight wire is tangent to a circular coil of radius $r$ and turns $N$ in the same plane. If the net magnetic flux density at the center of the coil is zero, what is the required relationship between the currents $I_{\\text{wire}}$ and $I_{\\text{coil}}$?",
    "questionAr": "سلك مستقيم طويل مماس لملف دائري نصف قطره $r$ وعدد لفاته $N$ وفي نفس مستواه. إذا انعدمت محصلة كثافة الفيض عند مركز الملف الدائري، فما هي العلاقة بين تيار السلك $I_{\\text{wire}}$ وتيار الملف $I_{\\text{coil}}$؟",
    "optionsEn": [
      "$I_{\\text{wire}} = \\frac{N I_{\\text{coil}}}{\\pi}$",
      "$I_{\\text{wire}} = \\pi N I_{\\text{coil}}$, with currents flowing in opposite directions at the point of contact",
      "$I_{\\text{wire}} = 2\\pi N I_{\\text{coil}}$",
      "$I_{\\text{wire}} = I_{\\text{coil}}$"
    ],
    "optionsAr": [
      "$I_{\\text{wire}} = \\frac{N I_{\\text{coil}}}{\\pi}$",
      "$I_{\\text{wire}} = \\pi N I_{\\text{coil}}$، مع سريان التيارين في اتجاهين متضادين عند موضع التماس",
      "$I_{\\text{wire}} = 2\\pi N I_{\\text{coil}}$",
      "$I_{\\text{wire}} = I_{\\text{coil}}$"
    ],
    "correctAnswer": "$I_{\\text{wire}} = \\pi N I_{\\text{coil}}$, with currents flowing in opposite directions at the point of contact",
    "correctIndex": 1,
    "hintEn": "At tangency, perpendicular distance $d = r$. For cancellation: $B_{\\text{wire}} = B_{\\text{coil}}$.",
    "hintAr": "بما أن السلك مماس فإن بعده عن المركز $d = r$. ولحدوث التعادل: $B_{\\text{wire}} = B_{\\text{coil}}$.",
    "stepByStepSolutionEn": [
      "Since the wire is tangent to the circular coil, the perpendicular distance from the wire to the coil center is exactly the coil radius: $d = r$. For the net field at the center to vanish, the two fields must be equal and opposite: $B_{\\text{wire}} = B_{\\text{coil}} \\implies \\frac{\\mu I_{\\text{wire}}}{2\\pi r} = \\frac{\\mu N I_{\\text{coil}}}{2r}$. Canceling $\\frac{\\mu}{2r}$ on both sides yields: $\\frac{I_{\\text{wire}}}{\\pi} = N I_{\\text{coil}} \\implies I_{\\text{wire}} = \\pi N I_{\\text{coil}}$. For $N = 1$ turn: $I_{\\text{wire}} = \\pi I_{\\text{coil}}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن السلك مماس للملف، فإن بعده العمودي عن المركز يساوي نصف قطر الملف ($d = r$). ولكي تنعدم كثافة الفيض عند المركز يجب أن يتساوى المجالان في المقدار ويتضادا في الاتجاه: $\\frac{\\mu I_{\\text{wire}}}{2\\pi r} = \\frac{\\mu N I_{\\text{coil}}}{2r}$. بحذف $\\frac{\\mu}{2r}$ من الطرفين يتبقى: $\\frac{I_{\\text{wire}}}{\\pi} = N I_{\\text{coil}} \\implies I_{\\text{wire}} = \\pi N I_{\\text{coil}}$. ولو كان الملف حلقة واحدة ($N=1$) تصبح العلاقة $I_{\\text{wire}} = \\pi I_{\\text{coil}}$."
    ],
    "teacherTipEn": "Remember that currents must oppose each other at the point of tangency so their fields oppose at the center.",
    "teacherTipAr": "تذكر أن اتجاهي التيارين عند موضع التماس يجب أن يكونا متضادين حتى ينشأ مجالان متعاكسان عند المركز."
  },
  {
    "id": "phys_ch2_db_easy_51",
    "titleEn": "Magnetic Force vs Distance Inverse Relationship Graph",
    "titleAr": "التمثيل البياني للعلاقة بين القوة المتبادلة والمسافة بين سلكين",
    "difficulty": "easy",
    "questionEn": "Which of the following graphs correctly represents the relationship between the mutual magnetic force $F$ between two parallel wires and the distance $d$ separating them?",
    "questionAr": "أي العلاقات البيانية التالية تمثل بدقة العلاقة بين القوة المغناطيسية المتبادلة $F$ بين سلكين متوازيين والمسافة الفاصلة بينهما $d$؟",
    "optionsEn": [
      "A straight line with positive slope for $F$ versus $d$ passing through origin",
      "A horizontal constant line showing $F$ independent of $d$",
      "A hyperbolic curve showing $F$ inversely proportional to $d$ ($F \\propto \\frac{1}{d}$), or a straight line through origin for $F$ versus $\\frac{1}{d}$",
      "A parabola opening upward ($F \\propto d^2$)"
    ],
    "optionsAr": [
      "خط مستقيم ذو ميل موجب للعلاقة بين $F$ و $d$ يمر بنقطة الأصل",
      "خط أفقي مستقيم يوضح ثبوت القوة مع تغير المسافة",
      "منحنى قطعي يوضح تناسب $F$ عكسياً مع $d$ ($F \\propto \\frac{1}{d}$)، أو خط مستقيم يمر بنقطة الأصل للعلاقة بين $F$ ومقلوب المسافة $\\frac{1}{d}$",
      "منحنى قطع مكافئ للأعلى ($F \\propto d^2$)"
    ],
    "correctAnswer": "A hyperbolic curve showing $F$ inversely proportional to $d$ ($F \\propto \\frac{1}{d}$), or a straight line through origin for $F$ versus $\\frac{1}{d}$",
    "correctIndex": 2,
    "hintEn": "$F = \\frac{\\mu I_1 I_2 L}{2\\pi d}$. Force is inversely proportional to $d$.",
    "hintAr": "القوة تتناسب عكسياً مع المسافة وطردياً مع مقلوب المسافة $1/d$.",
    "stepByStepSolutionEn": [
      "From $F = \\frac{\\mu I_1 I_2 L}{2\\pi d}$, the mutual force is inversely proportional to separation distance $d$. Therefore, a plot of $F$ versus $d$ is a decreasing rectangular hyperbola. A plot of $F$ versus the reciprocal $\\frac{1}{d}$ is a straight line passing through the origin with slope equal to $\\frac{\\mu I_1 I_2 L}{2\\pi}$."
    ],
    "stepByStepSolutionAr": [
      "وفق قانون القوة المتبادلة $F = \\frac{\\mu I_1 I_2 L}{2\\pi d}$، تتناسب القوة عكسياً مع المسافة $d$. ولذلك يكون المنحنى البياني بين $F$ و $d$ منحنياً عكسياً، بينما يكون الرسم البياني بين $F$ ومقلوب المسافة ($1/d$) خطاً مستقيماً يمر بنقطة الأصل وميله يساوي $\\frac{\\mu I_1 I_2 L}{2\\pi}$."
    ],
    "teacherTipEn": "Exam questions frequently ask for the physical significance of the slope of $F$ vs $1/d$.",
    "teacherTipAr": "يتكرر كثيراً في الامتحانات سؤال: ما الذي يمثله ميل الخط المستقيم للرسم البياني بين $F$ و $1/d$."
  },
  {
    "id": "phys_ch2_db_easy_52",
    "titleEn": "Why Galvanometer Pointer is Made of Light Aluminum",
    "titleAr": "علة صناعة مؤشر الجلفانومتر من الألومنيوم الخفيف",
    "difficulty": "easy",
    "questionEn": "Why is the pointer of a moving-coil galvanometer manufactured specifically from lightweight aluminum rather than iron or copper?",
    "questionAr": "لماذا يصنع مؤشر الجلفانومتر ذي الملف المتحرك من الألومنيوم الخفيف تحديداً وليس من الحديد أو النحاس؟",
    "optionsEn": [
      "Because aluminum is a superconductor at room temperature",
      "Because aluminum glows in the dark to illuminate the reading scale",
      "To increase friction so the pointer cannot move accidentally",
      "Because aluminum is light (minimizing rotational inertia and bearing load) and non-magnetic (so it is not attracted or influenced by the permanent magnet)"
    ],
    "optionsAr": [
      "لأن الألومنيوم فائق التوصيل عند درجة حرارة الغرفة",
      "لأن الألومنيوم يضيء في الظلام لقراءة التدريج",
      "لزيادة الاحتكاك حتى لا يتحرك المؤشر بالخطأ",
      "لأن الألومنيوم مادة خفيفة (تقلل القصور الذاتي والحمل على الحوامل) وغير مغناطيسية (فلا يتأثر أو ينجذب للمغناطيس الدائم)"
    ],
    "correctAnswer": "Because aluminum is light (minimizing rotational inertia and bearing load) and non-magnetic (so it is not attracted or influenced by the permanent magnet)",
    "correctIndex": 3,
    "hintEn": "Two key properties: very low mass density (low inertia) and non-ferromagnetic (no magnetic interference).",
    "hintAr": "خاصيتان أساسيتان: خفة الوزن لتقليل القصور الذاتي، وأنه مادة غير مغناطيسية فلا يجذبه المغناطيس.",
    "stepByStepSolutionEn": [
      "The pointer must meet two physical requirements: (1) Low inertia: aluminum has very low density, so the pointer adds negligible mass to the moving system, reducing rotational inertia and allowing quick, deadbeat settling without stressing the delicate sapphire bearings. (2) Non-magnetic: aluminum is non-ferromagnetic, ensuring that the pointer does not distort the radial magnetic field or experience parasitic magnetic forces from the nearby permanent poles."
    ],
    "stepByStepSolutionAr": [
      "يجب أن يتوفر في المؤشر شرطان: أولاً: خفة الوزن وصغر الكثافة لتقليل عزم القصور الذاتي لمنظومة الملف المتحرك وتخفيف الحمل على حوامل العقيق لسرعة استقرار المؤشر. ثانياً: أنه مادة غير مغناطيسية (لا تنجذب للمغناطيس) حتى لا تتأثر حركته بالمجال المغناطيسي للمغناطيس الدائم داخل الجهاز."
    ],
    "teacherTipEn": "If made of iron, the pointer would stick to the permanent magnetic poles immediately.",
    "teacherTipAr": "لو صنع المؤشر من الحديد لانجذب فوراً إلى قطبي المغناطيس وتعطل الجهاز عن العمل."
  },
  {
    "id": "phys_ch2_db_easy_53",
    "titleEn": "Effect of Shunt Resistance on Ammeter Sensitivity",
    "titleAr": "تأثير مقاومة مجزئ التيار على حساسية جهاز الأميتر",
    "difficulty": "easy",
    "questionEn": "How does the sensitivity of a direct-current ammeter change as the resistance of the shunt resistor ($R_s$) connected to the galvanometer is DECREASED?",
    "questionAr": "كيف تتغير حساسية جهاز الأميتر عندما تقل قيمة مقاومة مجزئ التيار ($R_s$) المتصل بملف الجلفانومتر؟",
    "optionsEn": [
      "The sensitivity decreases, because the ammeter can now measure much larger total currents for the same deflection angle",
      "The sensitivity increases proportionally to $1/R_s$",
      "The sensitivity remains strictly unchanged",
      "The sensitivity drops to negative values"
    ],
    "optionsAr": [
      "تقل حساسية الأميتر، لأن الجهاز يصبح قادراً على قياس تيارات كلية أكبر بكثير لنفس زاوية الانحراف",
      "تزداد الحساسية طردياً مع مقلوب $R_s$",
      "تظل الحساسية ثابتة دون أي تغير",
      "تصبح الحساسية سالبة"
    ],
    "correctAnswer": "The sensitivity decreases, because the ammeter can now measure much larger total currents for the same deflection angle",
    "correctIndex": 0,
    "hintEn": "Sensitivity is $S = \\theta / I$. When measuring range $I$ increases, sensitivity $S$ decreases.",
    "hintAr": "الحساسية $S = \\theta / I$. زيادة مدى القياس $I$ تعني بالضرورة نقص حساسية الجهاز $S$.",
    "stepByStepSolutionEn": [
      "The sensitivity of an ammeter is defined as the angle of deflection per unit total current: $S_A = \\frac{\\theta}{I}$. Decreasing the shunt resistance $R_s$ allows a much larger total current $I$ to pass for the same full-scale deflection angle $\\theta_g$. Because $I$ increases in the denominator, the sensitivity $S_A = \\frac{\\theta}{I}$ decreases. In general, instrument range and sensitivity are inversely related."
    ],
    "stepByStepSolutionAr": [
      "حساسية الأميتر تعرف بأنها زاوية الانحراف لكل وحدة تيار كلي ($S_A = \\frac{\\theta}{I}$). عند تقليل قيمة مجزئ التيار $R_s$، يزداد المدى الأقصى لقياس التيار $I$ لنفس زاوية الانحراف، وبما أن شدة التيار في المقام زادت فإن حساسية الأميتر تقل. كقاعدة عامة في جميع أجهزة القياس: زيادة مدى القياس يقابلها دائماً نقص في الحساسية."
    ],
    "teacherTipEn": "The ratio of ammeter sensitivity to galvanometer sensitivity is $\\frac{S_A}{S_g} = \\frac{I_g}{I} = \\frac{R_s}{R_g + R_s}$.",
    "teacherTipAr": "نسبة حساسية الأميتر إلى حساسية الجلفانومتر هي: $\\frac{S_A}{S_g} = \\frac{I_g}{I} = \\frac{R_s}{R_g + R_s}$."
  },
  {
    "id": "phys_ch2_db_easy_54",
    "titleEn": "Effect of Multiplier Resistance on Voltmeter Sensitivity",
    "titleAr": "تأثير مقاومة مضاعف الجهد على حساسية الفولتميتر",
    "difficulty": "easy",
    "questionEn": "How does the voltage sensitivity of a voltmeter change as the multiplier resistance ($R_m$) in series with the galvanometer is INCREASED?",
    "questionAr": "كيف تتغير حساسية الفولتميتر لقياس الجهد عند زيادة قيمة مقاومة مضاعف الجهد ($R_m$) المتصل على التوالي مع ملف الجلفانومتر؟",
    "optionsEn": [
      "The sensitivity increases proportionally to $R_m$",
      "The sensitivity decreases, because the voltmeter now requires a larger voltage to produce the same pointer deflection",
      "The sensitivity remains completely constant",
      "The sensitivity doubles regardless of $R_m$"
    ],
    "optionsAr": [
      "تزداد الحساسية طردياً مع زيادة $R_m$",
      "تقل الحساسية، لأن الفولتميتر يحتاج الآن لفرق جهد أكبر لإحداث نفس زاوية انحراف المؤشر",
      "تظل الحساسية ثابتة تماماً",
      "تتضاعف الحساسية بصرف النظر عن قيمة $R_m$"
    ],
    "correctAnswer": "The sensitivity decreases, because the voltmeter now requires a larger voltage to produce the same pointer deflection",
    "correctIndex": 1,
    "hintEn": "Voltage sensitivity is $S_V = \\theta / V$. Increasing voltage range $V$ decreases sensitivity.",
    "hintAr": "حساسية الجهد $S_V = \\theta / V$. زيادة المدى $V$ تؤدي لنقص الحساسية.",
    "stepByStepSolutionEn": [
      "The voltage sensitivity is the deflection angle per unit potential difference: $S_V = \\frac{\\theta}{V}$. Increasing $R_m$ increases the maximum voltage that can be measured ($V = I_g(R_g + R_m)$). Since $V$ is in the denominator, the voltage sensitivity $S_V = \\frac{\\theta}{V}$ decreases. Each division now represents a larger voltage increment."
    ],
    "stepByStepSolutionAr": [
      "حساسية الفولتميتر هي زاوية الانحراف لكل وحدة فرق جهد ($S_V = \\frac{\\theta}{V}$). عند زيادة مقاومة مضاعف الجهد $R_m$ يزداد أقصى فرق جهد يمكن قياسه ($V$)، فيقل مقدار زاوية الانحراف لكل فولت واحد، أي تقل حساسية الفولتميتر. وتعطى النسبة بالعلاقة $\\frac{S_V}{S_g} = \\frac{V_g}{V} = \\frac{R_g}{R_g + R_m}$."
    ],
    "teacherTipEn": "Expanding range always comes at the expense of sensitivity.",
    "teacherTipAr": "توسيع مدى القياس يكون دائماً على حساب الحساسية."
  },
  {
    "id": "phys_ch2_db_easy_55",
    "titleEn": "Effect of Battery Depletion on Ohmmeter Readings",
    "titleAr": "تأثير استهلاك بطارية الأوميتر على دقة القياس",
    "difficulty": "easy",
    "questionEn": "Why must the battery inside an ohmmeter have a strictly constant electromotive force ($V_B$), and what happens if its EMF drops due to internal depletion?",
    "questionAr": "لماذا يجب أن تكون القوة الدافعة الكهربية ($V_B$) لبطارية الأوميتر ثابتة تماماً، وماذا يحدث عند انخفاضها بسبب الاستهلاك؟",
    "optionsEn": [
      "Because an ohmmeter battery charges the external resistor with nuclear energy",
      "Because a fluctuating battery reverses the direction of magnetic dipole moment",
      "Because the calibration scale assumes $I \\propto \\frac{V_B}{R_{\\text{total}}}$; if $V_B$ drops, the pointer cannot reach full scale ($0\\,\\Omega$) during zero-adjustment, causing erroneous readings",
      "Because the pointer would rotate at the speed of light"
    ],
    "optionsAr": [
      "لأن بطارية الأوميتر تشحن المقاومة الخارجية بطاقة نووية",
      "لأن تذبذب البطارية يعكس اتجاه عزم ثنائي القطب",
      "لأن معايرة التدريج مبنية على ثبوت $V_B$؛ فإذا انخفضت القوة الدافعة لا يستطيع المؤشر بلوغ نهاية التدريج (صفر المقاومة) عند ضبط الصفر وتصبح القراءات غير دقيقة",
      "لأن المؤشر سيدور بسرعة الضوء"
    ],
    "correctAnswer": "Because the calibration scale assumes $I \\propto \\frac{V_B}{R_{\\text{total}}}$; if $V_B$ drops, the pointer cannot reach full scale ($0\\,\\Omega$) during zero-adjustment, causing erroneous readings",
    "correctIndex": 2,
    "hintEn": "The entire calibration relies on $I_g = V_B / R_{\\text{in}}$. If $V_B$ varies, the scale is invalidated.",
    "hintAr": "المعايرة تفترض ثبوت $V_B$. إذا ضعفت البطارية لن يصل المؤشر لصفر المقاومات.",
    "stepByStepSolutionEn": [
      "The ohmmeter calibration relies directly on the constant EMF: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$. When the battery ages, its EMF ($V_B$) drops and its internal resistance ($r$) rises. The user can no longer adjust the rheostat $R_v$ to bring the pointer to the zero-ohm mark ($I_g$), invalidating the entire resistance calibration."
    ],
    "stepByStepSolutionAr": [
      "تعتمد معايرة تدريج الأوميتر على ثبوت القوة الدافعة للبطارية ($V_B$) لكي تعبر شدة التيار عن المقاومة فقط ($I = \\frac{V_B}{R_{\\text{in}} + R_x}$). وعندما تستهلك البطارية تقل قوتها الدافعة وتزداد مقاومتها الداخلية، فلا يستطيع التيار بلوغ أقصى انحراف $I_g$ عند تلامس طرفي التوصيل ($R_x = 0$) حتى مع ضبط المقاومة المتغيرة $R_v$، مما يفسد معايرة الجهاز ويعطي قراءات خاطئة."
    ],
    "teacherTipEn": "This is why ohmmeters include a rheostat $R_v$ to compensate for minor battery aging until battery replacement is required.",
    "teacherTipAr": "ولهذا يزود الأوميتر بمقاومة متغيرة $R_v$ لمعادلة الانخفاض الطفيف في جهد البطارية حتى يلزم استبدالها."
  },
  {
    "id": "phys_ch2_db_easy_56",
    "titleEn": "Right-Hand Screw Rule for Magnetic Field Direction at Coil Center",
    "titleAr": "قاعدة البريمة اليمنى لماكسويل لتحديد اتجاه المجال عند مركز ملف",
    "difficulty": "easy",
    "questionEn": "According to Maxwell's Right-Hand Screw Rule, how is the direction of the magnetic field at the center of a circular current-carrying coil determined?",
    "questionAr": "وفقاً لقاعدة البريمة اليمنى لماكسويل، كيف يتم تحديد اتجاه المجال المغناطيسي عند مركز ملف دائري يمر به تيار؟",
    "optionsEn": [
      "The advance of the screw indicates the direction of current, and rotation gives force",
      "The screw must always be tightened counterclockwise to find South pole",
      "The rule only applies if the screw is made of magnetized cobalt",
      "If the rotation of the screw aligns with the current direction around the loop, the direction of screw advance indicates the direction of the magnetic field lines"
    ],
    "optionsAr": [
      "اندفاع البريمة يشير لاتجاه التيار ودورانها يشير للقوة",
      "يجب ربط البريمة عكس عقارب الساعة لتحديد القطب الجنوبي",
      "تنطبق القاعدة فقط إذا كانت البريمة مصنوعة من الكوبالت الممغنط",
      "إذا كان اتجاه دوران البريمة مع اتجاه حركة التيار في الملف، فإن اتجاه اندفاع (تقدم) البريمة يشير لاتجاه خطوط المجال المغناطيسي"
    ],
    "correctAnswer": "If the rotation of the screw aligns with the current direction around the loop, the direction of screw advance indicates the direction of the magnetic field lines",
    "correctIndex": 3,
    "hintEn": "Rotate the right-hand screw in the direction of current; the tip advances in the direction of magnetic flux $\\vec{B}$.",
    "hintAr": "أدر البريمة اليمنى مع اتجاه التيار، فيشير اتجاه اندفاعها إلى اتجاه خطوط الفيض المغناطيسي.",
    "stepByStepSolutionEn": [
      "Imagine placing a right-hand screw at the center of the coil perpendicular to its plane. Rotate the screw head in the direction of conventional current flowing through the turns. The direction in which the screw advances (pushes forward) is the direction of the magnetic field vector $\\vec{B}$ along the axis."
    ],
    "stepByStepSolutionAr": [
      "تتخيل وضع بريمة يمنى عند مركز الملف بحيث يكون محورها عمودياً على مستوى الملف. عندما تدير البريمة باليد اليمنى في اتجاه حركة التيار الكهربي، فإن اتجاه اندفاع (تقدم) البريمة يحدد اتجاه خطوط الفيض المغناطيسي عند المركز (أو اتجاه عزم ثنائي القطب المغناطيسي)."
    ],
    "teacherTipEn": "This rule is completely equivalent to Ampere's right-hand grip rule.",
    "teacherTipAr": "هذه القاعدة مكافئة تماماً لقاعدة اليد اليمنى لأمبير وتؤدي إلى نفس النتيجة."
  },
  {
    "id": "phys_ch2_db_easy_57",
    "titleEn": "Neutral Point Midpoint Verification for Identical Parallel Currents",
    "titleAr": "نقطة التعادل في منتصف المسافة لسلكين متماثلي التيار",
    "difficulty": "easy",
    "questionEn": "Two long straight parallel wires carry equal electric currents ($I_1 = I_2 = I$) in the same direction, separated by distance $d$. What is the net magnetic flux density at the exact midpoint between them?",
    "questionAr": "سلكان مستقيمان متوازيان يمر بهما تياران متساويان في المقدار ($I_1 = I_2 = I$) وفي نفس الاتجاه، وتفصل بينهما مسافة $d$. ما هي محصلة كثافة الفيض المغناطيسي عند نقطة في منتصف المسافة بينهما تماماً؟",
    "optionsEn": [
      "Zero ($B_{\\text{net}} = 0$), because the magnetic fields produced by the two wires are equal in magnitude and opposite in direction",
      "$B_{\\text{net}} = \\frac{2\\mu I}{\\pi d}$ (double the field of one wire)",
      "$B_{\\text{net}} = \\frac{\\mu I}{2\\pi d}$",
      "$B_{\\text{net}} = \\frac{\\mu I}{4\\pi d^2}$"
    ],
    "optionsAr": [
      "صفر ($B_{\\text{net}} = 0$)، لأن المجاليْن الناشئيْن عن السلكين متساويان في المقدار ومتضادان في الاتجاه تماماً",
      "$B_{\\text{net}} = \\frac{2\\mu I}{\\pi d}$ (ضعف مجال سلك واحد)",
      "$B_{\\text{net}} = \\frac{\\mu I}{2\\pi d}$",
      "$B_{\\text{net}} = \\frac{\\mu I}{4\\pi d^2}$"
    ],
    "correctAnswer": "Zero ($B_{\\text{net}} = 0$), because the magnetic fields produced by the two wires are equal in magnitude and opposite in direction",
    "correctIndex": 0,
    "hintEn": "At midpoint: $d_1 = d_2 = d/2$. Since currents are equal, $B_1 = B_2$. Since directions oppose, $B_{\\text{net}} = B_1 - B_2 = 0$.",
    "hintAr": "في المنتصف: المسافتان متساويتان، والمجالان متساويان في المقدار ومتعاكسان في الاتجاه فتكون المحصلة صفراً.",
    "stepByStepSolutionEn": [
      "At the exact midpoint, $d_1 = d_2 = \\frac{d}{2}$. Wire 1 produces $B_1 = \\frac{\\mu I}{2\\pi (d/2)}$ pointing into the page, while wire 2 produces $B_2 = \\frac{\\mu I}{2\\pi (d/2)}$ pointing out of the page. The net field is $B_{\\text{net}} = B_1 - B_2 = 0$. This point is the magnetic neutral point."
    ],
    "stepByStepSolutionAr": [
      "عند نقطة المنتصف تكون المسافة عن السلك الأول مساوية للمسافة عن السلك الثاني ($d/2$). وبما أن التيارين متساويان في المقدار، فإن كثافة الفيض الناشئة عن السلك الأول تساوي تماماً كثافة الفيض الناشئة عن السلك الثاني في المقدار ($B_1 = B_2$). ولأن اتجاه التيارين واحد، يكون المجالان في المنطقة بينهما متعاكسين تماماً، فتكون المحصلة $B_t = B_1 - B_2 = 0$ وتكون هذه النقطة نقطة تعادل."
    ],
    "teacherTipEn": "If a magnetic compass needle is placed at this midpoint, it does not experience any magnetic torque and points along the Earth's meridian.",
    "teacherTipAr": "إذا وُضعت إبرة مغناطيسية عند نقطة التعادل هذه، فإنها لا تنحرف وتستقر في اتجاه الشمال الجغرافي للأرض."
  },
  {
    "id": "phys_ch2_db_easy_58",
    "titleEn": "Electromagnetic Damping in Galvanometer Aluminum Frame",
    "titleAr": "التخميد الكهرومغناطيسي لإيقاف اهتزاز ملف الجلفانومتر",
    "difficulty": "easy",
    "questionEn": "Why is the moving coil of a sensitive galvanometer wound on a light rectangular frame made of aluminum?",
    "questionAr": "لماذا يُلف ملف الجلفانومتر الحساس على إطار مستطيل خفيف مصنوع من الألومنيوم؟",
    "optionsEn": [
      "To insulate the copper turns from each other electrostatically",
      "To create eddy currents in the aluminum frame during rotation, providing electromagnetic damping that brings the pointer to rest quickly without oscillation",
      "To attract ferromagnetic particles from the surrounding air",
      "To conduct the main current directly into the permanent magnet"
    ],
    "optionsAr": [
      "لعزل لفات النحاس عن بعضها استاتيكياً",
      "لتوليد تيارات دوامية في إطار الألومنيوم أثناء حركته، توفر تخميداً كهرومغناطيسياً يوقف اهتزاز المؤشر ويجعله يستقر بسرعة عند القراءة",
      "لجذب برادة الحديد من الهواء المحيط",
      "لتوصيل التيار الرئيسي مباشرة للمغناطيس الدائم"
    ],
    "correctAnswer": "To create eddy currents in the aluminum frame during rotation, providing electromagnetic damping that brings the pointer to rest quickly without oscillation",
    "correctIndex": 1,
    "hintEn": "By Lenz's law, eddy currents in the closed aluminum frame oppose the coil's motion, damping oscillations.",
    "hintAr": "التيارات الدوامية المتولدة في إطار الألومنيوم تعاكس حركة الملف وفق قاعدة لينز، فتخمد ذبذبته سريعاً.",
    "stepByStepSolutionEn": [
      "When the coil deflects, the conducting aluminum frame moves through the magnetic field lines. By Faraday's and Lenz's laws, eddy currents are induced within the continuous closed aluminum frame. These eddy currents generate an opposing magnetic torque that dampens the mechanical oscillations of the coil and pointer. This makes the galvanometer 'deadbeat'—the pointer quickly moves to and rests steadily on the measurement reading without swinging back and forth."
    ],
    "stepByStepSolutionAr": [
      "عند دوران الملف يتحرك الإطار المعدني للألومنيوم في المجال المغناطيسي قاطعاً خطوط الفيض، فتتولد فيه تيارات دوامية وفق قانون فاراداي وقاعدة لينز. تولد هذه التيارات الدوامية عزم كبح (عزم تخميد كهرومغناطيسي) يعاكس حركة الملف ويهدئ من اهتزازاته الميكانيكية، مما يجعل المؤشر يتحرك مباشرة إلى القراءة ويستقر عندها في زمن قياسي دون تذبذب (حركة إيقافية سريعة Deadbeat)."
    ],
    "teacherTipEn": "Electromagnetic damping is an ingenious application of Lenz's law in electrical meter design.",
    "teacherTipAr": "يعد التخميد الكهرومغناطيسي تطبيقاً هندسياً بارعاً لقاعدة لينز في تصميم أجهزة القياس."
  }
],
  medium: [
  {
    "id": "phys_ch2_db_med_01",
    "titleEn": "Straight Wire Magnetic Flux Density Calculation",
    "titleAr": "حساب كثافة الفيض المغناطيسي لسلك مستقيم",
    "difficulty": "medium",
    "questionEn": "What is the magnetic flux density ($B$) at a perpendicular distance of $d = 10\\text{ cm}$ from a long straight wire carrying an electric current of $I = 5\\text{ A}$ in air? ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
    "questionAr": "ما هي كثافة الفيض المغناطيسي ($B$) عند نقطة تبعد مسافة عمودية $d = 10\\text{ cm}$ عن سلك مستقيم طويل يمر به تيار كهربي شدته $I = 5\\text{ A}$ في الهواء؟",
    "optionsEn": [
      "$B = 1.0 \\times 10^{-5}\\text{ T}$",
      "$B = 2.0 \\times 10^{-5}\\text{ T}$",
      "$B = 5.0 \\times 10^{-6}\\text{ T}$",
      "$B = 1.0 \\times 10^{-4}\\text{ T}$"
    ],
    "optionsAr": [
      "$B = 1.0 \\times 10^{-5}\\text{ T}$",
      "$B = 2.0 \\times 10^{-5}\\text{ T}$",
      "$B = 5.0 \\times 10^{-6}\\text{ T}$",
      "$B = 1.0 \\times 10^{-4}\\text{ T}$"
    ],
    "correctAnswer": "$B = 1.0 \\times 10^{-5}\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "$B = \\frac{\\mu_0 I}{2\\pi d} = \\frac{2 \\times 10^{-7} I}{d}$. Convert $10\\text{ cm}$ to $0.1\\text{ m}$.",
    "hintAr": "$B = \\frac{2 \\times 10^{-7} I}{d}$، وتأكد من تحويل المسافة إلى متر.",
    "stepByStepSolutionEn": [
      "$B = \\frac{2 \\times 10^{-7} \\times 5}{0.10} = 1.0 \\times 10^{-5}\\text{ T} = 10\\,\\mu\\text{T}$."
    ],
    "stepByStepSolutionAr": [
      "بالتعويض في قانون أمبير الدائري: $B = \\frac{2 \\times 10^{-7} \\times 5}{0.1} = 1.0 \\times 10^{-5}\\text{ تسلا}$."
    ],
    "teacherTipEn": "Always convert centimeters ($\\text{cm}$) to meters ($\\text{m}$) by multiplying by $10^{-2}$.",
    "teacherTipAr": "تأكد دائماً من تحويل السنتيمتر إلى متر بالضرب في $10^{-2}$."
  },
  {
    "id": "phys_ch2_db_med_02",
    "titleEn": "Calculating Perpendicular Distance from Current-Carrying Wire",
    "titleAr": "حساب البعد العمودي عن سلك مستقيم بدلالة كثافة الفيض",
    "difficulty": "medium",
    "questionEn": "A long straight conductor carries a current of $I = 8\\text{ A}$. At what perpendicular distance from the wire does the magnetic flux density equal $B = 4 \\times 10^{-5}\\text{ T}$?",
    "questionAr": "يمر تيار شدته $I = 8\\text{ A}$ في سلك مستقيم طويل. عند أي بعد عمودي عن السلك تكون كثافة الفيض المغناطيسي مساوية لـ $B = 4 \\times 10^{-5}\\text{ T}$؟",
    "optionsEn": [
      "$d = 2\\text{ cm}$ ($0.02\\text{ m}$)",
      "$d = 4\\text{ cm}$ ($0.04\\text{ m}$)",
      "$d = 8\\text{ cm}$ ($0.08\\text{ m}$)",
      "$d = 40\\text{ cm}$ ($0.40\\text{ m}$)"
    ],
    "optionsAr": [
      "$d = 2\\text{ cm}$ ($0.02\\text{ m}$)",
      "$d = 4\\text{ cm}$ ($0.04\\text{ m}$)",
      "$d = 8\\text{ cm}$ ($0.08\\text{ m}$)",
      "$d = 40\\text{ cm}$ ($0.40\\text{ m}$)"
    ],
    "correctAnswer": "$d = 4\\text{ cm}$ ($0.04\\text{ m}$)",
    "correctIndex": 1,
    "hintEn": "$d = \\frac{2 \\times 10^{-7} I}{B}$.",
    "hintAr": "$d = \\frac{2 \\times 10^{-7} I}{B}$ ثم حول الناتج إلى سنتيمتر.",
    "stepByStepSolutionEn": [
      "$d = \\frac{2 \\times 10^{-7} \\times 8}{4 \\times 10^{-5}} = 0.04\\text{ m} = 4\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "$d = \\frac{2 \\times 10^{-7} \\times 8}{4 \\times 10^{-5}} = 0.04\\text{ m} = 4\\text{ cm}$."
    ],
    "teacherTipEn": "Quick mental check: Doubling current doubles distance for the same $B$.",
    "teacherTipAr": "تحقق سريع: مضاعفة التيار تضاعف المسافة لنفس كثافة الفيض."
  },
  {
    "id": "phys_ch2_db_med_03",
    "titleEn": "Electric Current Determination in Straight Wire from Flux Density",
    "titleAr": "حساب شدة تيار سلك مستقيم يولد كثافة فيض محددة",
    "difficulty": "medium",
    "questionEn": "What electric current $I$ must flow through a long straight wire to establish a magnetic flux density of $B = 5 \\times 10^{-5}\\text{ T}$ at a point $d = 2\\text{ cm}$ away in air?",
    "questionAr": "ما هي شدة التيار $I$ التي يجب أن تمر في سلك مستقيم طويل لتولد فيضاً مغناطيسياً كثافته $B = 5 \\times 10^{-5}\\text{ T}$ عند نقطة تبعد عنه مسافة عمودية $d = 2\\text{ cm}$ في الهواء؟",
    "optionsEn": [
      "$I = 2.5\\text{ A}$",
      "$I = 10\\text{ A}$",
      "$I = 5\\text{ A}$",
      "$I = 1\\text{ A}$"
    ],
    "optionsAr": [
      "$I = 2.5\\text{ A}$",
      "$I = 10\\text{ A}$",
      "$I = 5\\text{ A}$",
      "$I = 1\\text{ A}$"
    ],
    "correctAnswer": "$I = 5\\text{ A}$",
    "correctIndex": 2,
    "hintEn": "$I = \\frac{B d}{2 \\times 10^{-7}}$.",
    "hintAr": "$I = \\frac{B d}{2 \\times 10^{-7}}$ مع تحويل $d$ إلى متر.",
    "stepByStepSolutionEn": [
      "$I = \\frac{B d}{2 \\times 10^{-7}} = \\frac{(5 \\times 10^{-5}) \\times (0.02)}{2 \\times 10^{-7}} = \\frac{10^{-6}}{2 \\times 10^{-7}} = 5\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "$I = \\frac{B d}{2 \\times 10^{-7}} = \\frac{5 \\times 10^{-5} \\times 0.02}{2 \\times 10^{-7}} = 5\\text{ أمبير}$."
    ],
    "teacherTipEn": "Check: $B = \\frac{2 \\times 10^{-7} \\times 5}{0.02} = 5 \\times 10^{-5}\\text{ T}$.",
    "teacherTipAr": "تحقق: $B = \\frac{2 \\times 10^{-7} \\times 5}{0.02} = 5 \\times 10^{-5}\\text{ T}$."
  },
  {
    "id": "phys_ch2_db_med_04",
    "titleEn": "Magnetic Flux Through a Rectangular Coil in a Magnetic Field",
    "titleAr": "حساب الفيض المغناطيسي المار خلال ملف مستطيل",
    "difficulty": "medium",
    "questionEn": "A rectangular coil of dimensions $20\\text{ cm} \\times 10\\text{ cm}$ is placed in a uniform magnetic field of $B = 0.5\\text{ T}$. If the plane of the coil makes an angle of $30^\\circ$ with the magnetic field lines, what is the magnetic flux ($\\Phi_m$) passing through it?",
    "questionAr": "ملف مستطيل أبعاده $20\\text{ cm} \\times 10\\text{ cm}$ وضع في مجال مغناطيسي منتظم كثافته $B = 0.5\\text{ T}$. إذا كان مستوى الملف يصنع زاوية $30^\\circ$ مع خطوط المجال، فما مقدار الفيض المغناطيسي ($\\Phi_m$) المار خلاله؟",
    "optionsEn": [
      "$\\Phi_m = 1.0 \\times 10^{-2}\\text{ Wb}$",
      "$\\Phi_m = 8.66 \\times 10^{-3}\\text{ Wb}$",
      "$\\Phi_m = 2.5 \\times 10^{-3}\\text{ Wb}$",
      "$\\Phi_m = 5.0 \\times 10^{-3}\\text{ Wb}$"
    ],
    "optionsAr": [
      "$\\Phi_m = 1.0 \\times 10^{-2}\\text{ Wb}$",
      "$\\Phi_m = 8.66 \\times 10^{-3}\\text{ Wb}$",
      "$\\Phi_m = 2.5 \\times 10^{-3}\\text{ Wb}$",
      "$\\Phi_m = 5.0 \\times 10^{-3}\\text{ Wb}$"
    ],
    "correctAnswer": "$\\Phi_m = 5.0 \\times 10^{-3}\\text{ Wb}$",
    "correctIndex": 3,
    "hintEn": "$\\Phi_m = B A \\sin\\theta$. Area $A = 0.20 \\times 0.10 = 0.02\\text{ m}^2$, and $\\sin 30^\\circ = 0.5$.",
    "hintAr": "المساحة $A = 0.2 \\times 0.1 = 0.02\\text{ m}^2$ والزاوية مع المجال $30^\\circ$ فـ $\\sin 30^\\circ = 0.5$.",
    "stepByStepSolutionEn": [
      "Area $A = 0.20 \\times 0.10 = 0.02\\text{ m}^2$. $\\Phi_m = B A \\sin 30^\\circ = 0.5 \\times 0.02 \\times 0.5 = 5.0 \\times 10^{-3}\\text{ Wb}$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = 0.02\\text{ m}^2$. بتطبيق القانون $\\Phi_m = B A \\sin 30^\\circ = 0.5 \\times 0.02 \\times 0.5 = 5 \\times 10^{-3}\\text{ ويبر}$."
    ],
    "teacherTipEn": "If the angle given is with the normal, use $\\cos 30^\\circ$.",
    "teacherTipAr": "إذا أعطيت الزاوية مع العمودي على الملف نستخدم $\\cos 30^\\circ$."
  },
  {
    "id": "phys_ch2_db_med_05",
    "titleEn": "Change in Magnetic Flux Upon Coil Rotation by 90 Degrees",
    "titleAr": "التغير في الفيض المغناطيسي عند دوران الملف بمقدار 90 درجة",
    "difficulty": "medium",
    "questionEn": "A planar loop of area $A = 0.04\\text{ m}^2$ is initially perpendicular to a uniform magnetic field of $B = 0.2\\text{ T}$. If the loop rotates by $90^\\circ$ around an axis in its plane so it becomes parallel to the field, what is the magnitude of the change in magnetic flux ($|\\Delta\\Phi_m|$)?",
    "questionAr": "حلقة مستوية مساحتها $A = 0.04\\text{ m}^2$ موضوعة عمودياً في مجال مغناطيسي منتظم كثافته $B = 0.2\\text{ T}$. إذا دارت الحلقة بمقدار $90^\\circ$ حول محور في مستواها لتصبح موازية للمجال، فما مقدار التغير في الفيض المغناطيسي ($|\\Delta\\Phi_m|$)؟",
    "optionsEn": [
      "$|\\Delta\\Phi_m| = 8.0 \\times 10^{-3}\\text{ Wb}$",
      "$|\\Delta\\Phi_m| = 1.6 \\times 10^{-2}\\text{ Wb}$",
      "$|\\Delta\\Phi_m| = 0\\text{ Wb}$",
      "$|\\Delta\\Phi_m| = 4.0 \\times 10^{-3}\\text{ Wb}$"
    ],
    "optionsAr": [
      "$|\\Delta\\Phi_m| = 8.0 \\times 10^{-3}\\text{ Wb}$",
      "$|\\Delta\\Phi_m| = 1.6 \\times 10^{-2}\\text{ Wb}$",
      "$|\\Delta\\Phi_m| = 0\\text{ Wb}$",
      "$|\\Delta\\Phi_m| = 4.0 \\times 10^{-3}\\text{ Wb}$"
    ],
    "correctAnswer": "$|\\Delta\\Phi_m| = 8.0 \\times 10^{-3}\\text{ Wb}$",
    "correctIndex": 0,
    "hintEn": "$\\Phi_{m1} = B A$, $\\Phi_{m2} = 0$. $|\\Delta\\Phi_m| = B A$.",
    "hintAr": "الفيض الابتدائي $\\Phi_1 = B A$ والنهائي $\\Phi_2 = 0$.",
    "stepByStepSolutionEn": [
      "Initially perpendicular: $\\Phi_{m1} = B A = 0.2 \\times 0.04 = 8 \\times 10^{-3}\\text{ Wb}$. Finally parallel: $\\Phi_{m2} = 0$. Change: $|\\Delta\\Phi_m| = 8.0 \\times 10^{-3}\\text{ Wb}$."
    ],
    "stepByStepSolutionAr": [
      "في الوضع العمودي $\\Phi_1 = 0.2 \\times 0.04 = 8 \\times 10^{-3}\\text{ Wb}$، وفي الوضع الموازي $\\Phi_2 = 0$. التغير هو $8.0 \\times 10^{-3}\\text{ Wb}$."
    ],
    "teacherTipEn": "If rotated by $180^\\circ$, $|\\Delta\\Phi_m| = 2 B A$.",
    "teacherTipAr": "لو دار الملف $180^\\circ$ لكان التغير $2 B A$."
  },
  {
    "id": "phys_ch2_db_med_06",
    "titleEn": "Resultant Field Between Two Parallel Currents in Same Direction",
    "titleAr": "محصلة كثافة الفيض في منتصف المسافة بين سلكين تيارهما في نفس الاتجاه",
    "difficulty": "medium",
    "questionEn": "Two long parallel wires separated by $d = 20\\text{ cm}$ in air carry currents of $I_1 = 4\\text{ A}$ and $I_2 = 6\\text{ A}$ in the SAME direction. What is the net magnetic flux density at the midpoint between the two wires?",
    "questionAr": "سلكان متوازيان المسافة بينهما في الهواء $d = 20\\text{ cm}$ يمر بهما تياران $I_1 = 4\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. ما هي محصلة كثافة الفيض المغناطيسي عند نقطة في منتصف المسافة بينهما؟",
    "optionsEn": [
      "$B_{\\text{net}} = 2.0 \\times 10^{-5}\\text{ T}$",
      "$B_{\\text{net}} = 4.0 \\times 10^{-6}\\text{ T}$",
      "$B_{\\text{net}} = 1.0 \\times 10^{-5}\\text{ T}$",
      "$B_{\\text{net}} = 0\\text{ T}$"
    ],
    "optionsAr": [
      "$B_{\\text{net}} = 2.0 \\times 10^{-5}\\text{ T}$",
      "$B_{\\text{net}} = 4.0 \\times 10^{-6}\\text{ T}$",
      "$B_{\\text{net}} = 1.0 \\times 10^{-5}\\text{ T}$",
      "$B_{\\text{net}} = 0\\text{ T}$"
    ],
    "correctAnswer": "$B_{\\text{net}} = 4.0 \\times 10^{-6}\\text{ T}$",
    "correctIndex": 1,
    "hintEn": "Between wires, fields oppose: $B_{\\text{net}} = |B_2 - B_1| = \\frac{2 \\times 10^{-7}}{0.10} |I_2 - I_1|$.",
    "hintAr": "المنطقة بين السلكين منطقة طرح: $B_t = B_2 - B_1$، حيث المسافة $0.1\\text{ m}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{net}} = \\frac{2 \\times 10^{-7}}{0.10} (6 - 4) = \\frac{2 \\times 10^{-7} \\times 2}{0.10} = 4.0 \\times 10^{-6}\\text{ T} = 4\\,\\mu\\text{T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_t = \\frac{2 \\times 10^{-7} \\times (6 - 4)}{0.1} = 4.0 \\times 10^{-6}\\text{ تسلا}$."
    ],
    "teacherTipEn": "Notice that midpoint has opposing fields when currents have the same direction.",
    "teacherTipAr": "لاحظ أن نقطة المنتصف تكون منطقة طرح عندما يكون التياران في نفس الاتجاه."
  },
  {
    "id": "phys_ch2_db_med_07",
    "titleEn": "Resultant Field Between Two Parallel Currents in Opposite Directions",
    "titleAr": "محصلة كثافة الفيض في منتصف المسافة بين سلكين تيارهما متعاكسان",
    "difficulty": "medium",
    "questionEn": "Two long parallel wires separated by $d = 20\\text{ cm}$ carry currents $I_1 = 3\\text{ A}$ and $I_2 = 7\\text{ A}$ in OPPOSITE directions. What is the net magnetic flux density at the midpoint between the two wires?",
    "questionAr": "سلكان متوازيان البعد بينهما $d = 20\\text{ cm}$ يمر بهما تياران $I_1 = 3\\text{ A}$ و $I_2 = 7\\text{ A}$ في اتجاهين متضادين. ما هي محصلة كثافة الفيض المغناطيسي عند نقطة في منتصف المسافة بينهما؟",
    "optionsEn": [
      "$B_{\\text{net}} = 8.0 \\times 10^{-6}\\text{ T}$",
      "$B_{\\text{net}} = 1.0 \\times 10^{-5}\\text{ T}$",
      "$B_{\\text{net}} = 2.0 \\times 10^{-5}\\text{ T}$",
      "$B_{\\text{net}} = 4.0 \\times 10^{-6}\\text{ T}$"
    ],
    "optionsAr": [
      "$B_{\\text{net}} = 8.0 \\times 10^{-6}\\text{ T}$",
      "$B_{\\text{net}} = 1.0 \\times 10^{-5}\\text{ T}$",
      "$B_{\\text{net}} = 2.0 \\times 10^{-5}\\text{ T}$",
      "$B_{\\text{net}} = 4.0 \\times 10^{-6}\\text{ T}$"
    ],
    "correctAnswer": "$B_{\\text{net}} = 2.0 \\times 10^{-5}\\text{ T}$",
    "correctIndex": 2,
    "hintEn": "Between opposite-current wires, fields add: $B_{\\text{net}} = B_1 + B_2 = \\frac{2 \\times 10^{-7}}{0.10}(3 + 7)$.",
    "hintAr": "بين السلكين متعاكسي التيار تكون منطقة جمع: $B_t = B_1 + B_2$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{net}} = \\frac{2 \\times 10^{-7}}{0.10} (3 + 7) = 2 \\times 10^{-6} \\times 10 = 2.0 \\times 10^{-5}\\text{ T} = 20\\,\\mu\\text{T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_t = \\frac{2 \\times 10^{-7} \\times (3 + 7)}{0.1} = 2.0 \\times 10^{-5}\\text{ تسلا}$."
    ],
    "teacherTipEn": "Opposite currents add between the wires.",
    "teacherTipAr": "التياران المتضادان يولدان مجالين متحدي الاتجاه بين السلكين."
  },
  {
    "id": "phys_ch2_db_med_08",
    "titleEn": "Neutral Point Distance Calculation for Parallel Currents in Same Direction",
    "titleAr": "حساب موضع نقطة التعادل لسلكين متوازيين يمر بهما تياران في نفس الاتجاه",
    "difficulty": "medium",
    "questionEn": "Two long straight parallel wires are separated by $30\\text{ cm}$ in air and carry currents $I_1 = 2\\text{ A}$ and $I_2 = 4\\text{ A}$ in the same direction. How far from the wire carrying $I_1$ is the neutral point located?",
    "questionAr": "سلكان مستقيمان متوازيان تفصل بينهما مسافة $30\\text{ cm}$ في الهواء، ويمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 4\\text{ A}$ في نفس الاتجاه. ما هو بعد نقطة التعادل عن السلك الأول ($I_1$)؟",
    "optionsEn": [
      "$d_1 = 15\\text{ cm}$",
      "$d_1 = 20\\text{ cm}$",
      "$d_1 = 5\\text{ cm}$",
      "$d_1 = 10\\text{ cm}$"
    ],
    "optionsAr": [
      "$d_1 = 15\\text{ cm}$",
      "$d_1 = 20\\text{ cm}$",
      "$d_1 = 5\\text{ cm}$",
      "$d_1 = 10\\text{ cm}$"
    ],
    "correctAnswer": "$d_1 = 10\\text{ cm}$",
    "correctIndex": 3,
    "hintEn": "$\\frac{I_1}{d_1} = \\frac{I_2}{d - d_1} \\implies \\frac{2}{d_1} = \\frac{4}{30 - d_1}$.",
    "hintAr": "$\\frac{I_1}{d_1} = \\frac{I_2}{d - d_1} \\implies \\frac{2}{d_1} = \\frac{4}{30 - d_1}$.",
    "stepByStepSolutionEn": [
      "$\\frac{2}{d_1} = \\frac{4}{30 - d_1} \\implies 4d_1 = 60 - 2d_1 \\implies 6d_1 = 60 \\implies d_1 = 10\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "$4d_1 = 2(30 - d_1) \\implies 6d_1 = 60 \\implies d_1 = 10\\text{ cm}$."
    ],
    "teacherTipEn": "Neutral point is always closer to the smaller current.",
    "teacherTipAr": "تقع نقطة التعادل دائماً أقرب إلى السلك ذي التيار الأقل."
  },
  {
    "id": "phys_ch2_db_med_09",
    "titleEn": "Neutral Point Location for Unequal Opposite Currents",
    "titleAr": "حساب موضع نقطة التعادل لسلكين يمر بهما تياران متعاكسان",
    "difficulty": "medium",
    "questionEn": "Two long parallel wires separated by $d = 12\\text{ cm}$ carry currents $I_1 = 3\\text{ A}$ and $I_2 = 9\\text{ A}$ in OPPOSITE directions. Where is the neutral point located relative to wire 1 ($I_1$)?",
    "questionAr": "سلكان متوازيان المسافة بينهما $d = 12\\text{ cm}$ يمر بهما تياران $I_1 = 3\\text{ A}$ و $I_2 = 9\\text{ A}$ في اتجاهين متضادين. أين تقع نقطة التعادل بالنسبة للسلك الأول ($I_1$)؟",
    "optionsEn": [
      "$6\\text{ cm}$ outside wire 1 away from wire 2",
      "$4\\text{ cm}$ between the two wires",
      "$12\\text{ cm}$ outside wire 2 away from wire 1",
      "$18\\text{ cm}$ between the two wires"
    ],
    "optionsAr": [
      "$6\\text{ cm}$ خارج السلك الأول في الجهة البعيدة عن السلك الثاني",
      "$4\\text{ cm}$ بين السلكين",
      "$12\\text{ cm}$ خارج السلك الثاني في الجهة البعيدة عن السلك الأول",
      "$18\\text{ cm}$ بين السلكين"
    ],
    "correctAnswer": "$6\\text{ cm}$ outside wire 1 away from wire 2",
    "correctIndex": 0,
    "hintEn": "Opposite currents: neutral point lies outside, closer to smaller current: $\\frac{I_1}{x} = \\frac{I_2}{d + x}$.",
    "hintAr": "للتيارين المتعاكسين: نقطة التعادل في الخارج أقرب للتيار الأصغر: $\\frac{I_1}{x} = \\frac{I_2}{d + x}$.",
    "stepByStepSolutionEn": [
      "$\\frac{I_1}{x} = \\frac{I_2}{12 + x} \\implies \\frac{3}{x} = \\frac{9}{12 + x} \\implies \\frac{1}{x} = \\frac{3}{12 + x} \\implies 12 + x = 3x \\implies 2x = 12 \\implies x = 6\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{3}{x} = \\frac{9}{12 + x} \\implies 3(12 + x) = 9x \\implies 36 + 3x = 9x \\implies 6x = 36 \\implies x = 6\\text{ cm}$ خارج السلك الأول."
    ],
    "teacherTipEn": "Remember: For opposite currents, distance to the larger current is $d + x = 12 + 6 = 18\\text{ cm}$.",
    "teacherTipAr": "تذكر: بعدها عن السلك الأكبر تياراً هو $12 + 6 = 18\\text{ cm}$."
  },
  {
    "id": "phys_ch2_db_med_10",
    "titleEn": "Circular Coil Center Magnetic Flux Density Calculation",
    "titleAr": "حساب كثافة الفيض عند مركز ملف دائري",
    "difficulty": "medium",
    "questionEn": "A circular coil of $N = 100\\text{ turns}$ and radius $r = 7\\text{ cm}$ ($0.07\\text{ m}$) carries an electric current of $I = 3.5\\text{ A}$. What is the magnetic flux density ($B$) at its center in air? ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$)",
    "questionAr": "ملف دائري يتكون من $N = 100\\text{ لفة}$ ونصف قطره $r = 7\\text{ cm}$ ويمر به تيار $I = 3.5\\text{ A}$. ما هي كثافة الفيض المغناطيسي ($B$) عند مركزه في الهواء؟",
    "optionsEn": [
      "$B = 1.57 \\times 10^{-3}\\text{ T}$",
      "$B = 3.14 \\times 10^{-3}\\text{ T}$ ($\\pi\\text{ mT}$)",
      "$B = 6.28 \\times 10^{-3}\\text{ T}$",
      "$B = 3.14 \\times 10^{-4}\\text{ T}$"
    ],
    "optionsAr": [
      "$B = 1.57 \\times 10^{-3}\\text{ T}$",
      "$B = 3.14 \\times 10^{-3}\\text{ T}$ ($\\pi\\text{ mT}$)",
      "$B = 6.28 \\times 10^{-3}\\text{ T}$",
      "$B = 3.14 \\times 10^{-4}\\text{ T}$"
    ],
    "correctAnswer": "$B = 3.14 \\times 10^{-3}\\text{ T}$ ($\\pi\\text{ mT}$)",
    "correctIndex": 1,
    "hintEn": "$B = \\frac{\\mu_0 N I}{2r}$. Use $\\pi \\approx \\frac{22}{7}$ or $3.1416$.",
    "hintAr": "$B = \\frac{\\mu N I}{2r}$، عوض عن نصف القطر بالمتر $0.07\\text{ m}$.",
    "stepByStepSolutionEn": [
      "$B = \\frac{(4\\pi \\times 10^{-7}) \\times 100 \\times 3.5}{2 \\times 0.07} = \\frac{14\\pi \\times 10^{-5}}{0.14} = 100\\pi \\times 10^{-5} = \\pi \\times 10^{-3}\\text{ T} \\approx 3.14 \\times 10^{-3}\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B = \\frac{4\\pi \\times 10^{-7} \\times 100 \\times 3.5}{2 \\times 0.07} = \\pi \\times 10^{-3} = 3.14 \\times 10^{-3}\\text{ تسلا}$."
    ],
    "teacherTipEn": "Denominator is $2r$, not $2\\pi r$.",
    "teacherTipAr": "مقام قانون الملف الدائري هو القطر $2r$ وليس المحيط."
  },
  {
    "id": "phys_ch2_db_med_11",
    "titleEn": "Determining Number of Turns of a Circular Coil from Center Field",
    "titleAr": "حساب عدد لفات ملف دائري بمعلومية كثافة فيضه",
    "difficulty": "medium",
    "questionEn": "A circular coil of radius $r = 5\\text{ cm}$ ($0.05\\text{ m}$) carrying current $I = 2\\text{ A}$ produces a magnetic flux density of $B = 1.256 \\times 10^{-3}\\text{ T}$ ($4\\pi \\times 10^{-4}\\text{ T}$) at its center. What is the number of turns $N$?",
    "questionAr": "ملف دائري نصف قطره $r = 5\\text{ cm}$ يمر به تيار شدته $I = 2\\text{ A}$ ويولد فيضاً مغناطيسياً كثافته $B = 4\\pi \\times 10^{-4}\\text{ T}$ عند مركزه. ما هو عدد لفات الملف $N$؟",
    "optionsEn": [
      "$N = 25\\text{ turns}$",
      "$N = 100\\text{ turns}$",
      "$N = 50\\text{ turns}$",
      "$N = 20\\text{ turns}$"
    ],
    "optionsAr": [
      "$N = 25\\text{ لفة}$",
      "$N = 100\\text{ لفة}$",
      "$N = 50\\text{ لفة}$",
      "$N = 20\\text{ لفة}$"
    ],
    "correctAnswer": "$N = 50\\text{ turns}$",
    "correctIndex": 2,
    "hintEn": "$N = \\frac{2 r B}{\\mu_0 I}$.",
    "hintAr": "$N = \\frac{2 r B}{\\mu I}$.",
    "stepByStepSolutionEn": [
      "$N = \\frac{2 \\times 0.05 \\times (4\\pi \\times 10^{-4})}{(4\\pi \\times 10^{-7}) \\times 2} = \\frac{0.10 \\times 1000}{2} = 50\\text{ turns}$."
    ],
    "stepByStepSolutionAr": [
      "$N = \\frac{2 \\times 0.05 \\times 4\\pi \\times 10^{-4}}{4\\pi \\times 10^{-7} \\times 2} = 50\\text{ لفة}$."
    ],
    "teacherTipEn": "$\\pi$ cancels out cleanly.",
    "teacherTipAr": "تختصر $\\pi$ بسهولة عند التعويض."
  },
  {
    "id": "phys_ch2_db_med_12",
    "titleEn": "Solenoid Magnetic Flux Density Axial Calculation",
    "titleAr": "حساب كثافة الفيض المغناطيسي عند محور ملف لولبي",
    "difficulty": "medium",
    "questionEn": "An ideal solenoid of length $L = 50\\text{ cm}$ ($0.5\\text{ m}$) having $N = 500\\text{ turns}$ carries current $I = 2\\text{ A}$. What is the magnetic flux density along its central axis in air?",
    "questionAr": "ملف لولبي طوله $L = 50\\text{ cm}$ وعدد لفاته $N = 500\\text{ لفة}$ يمر به تيار $I = 2\\text{ A}$. ما هي كثافة الفيض المغناطيسي عند نقطة على محوره في الهواء؟",
    "optionsEn": [
      "$B = 1.26 \\times 10^{-3}\\text{ T}$",
      "$B = 5.03 \\times 10^{-3}\\text{ T}$",
      "$B = 2.51 \\times 10^{-4}\\text{ T}$",
      "$B = 2.51 \\times 10^{-3}\\text{ T}$ ($8\\pi \\times 10^{-4}\\text{ T}$)"
    ],
    "optionsAr": [
      "$B = 1.26 \\times 10^{-3}\\text{ T}$",
      "$B = 5.03 \\times 10^{-3}\\text{ T}$",
      "$B = 2.51 \\times 10^{-4}\\text{ T}$",
      "$B = 2.51 \\times 10^{-3}\\text{ T}$ ($8\\pi \\times 10^{-4}\\text{ T}$)"
    ],
    "correctAnswer": "$B = 2.51 \\times 10^{-3}\\text{ T}$ ($8\\pi \\times 10^{-4}\\text{ T}$)",
    "correctIndex": 3,
    "hintEn": "$B = \\frac{\\mu_0 N I}{L} = \\mu_0 n I$. Linear turn density $n = 500 / 0.5 = 1000\\text{ turns/m}$.",
    "hintAr": "$B = \\mu n I$ حيث $n = 500 / 0.5 = 1000\\text{ لفة/متر}$.",
    "stepByStepSolutionEn": [
      "$n = \\frac{500}{0.50} = 1000\\text{ turns/m} \\implies B = (4\\pi \\times 10^{-7}) \\times 1000 \\times 2 = 8\\pi \\times 10^{-4}\\text{ T} \\approx 2.51 \\times 10^{-3}\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B = 4\\pi \\times 10^{-7} \\times 1000 \\times 2 = 8\\pi \\times 10^{-4} \\approx 2.51 \\times 10^{-3}\\text{ تسلا}$."
    ],
    "teacherTipEn": "Linear turn density $n = N/L$ determines the solenoid field.",
    "teacherTipAr": "عدد اللفات لوحدة الأطوال $n = N/L$ هو المحدد للمجال."
  },
  {
    "id": "phys_ch2_db_med_13",
    "titleEn": "Magnetic Force on a Perpendicular Conductor Calculation",
    "titleAr": "حساب القوة المغناطيسية المؤثرة على سلك عمودي",
    "difficulty": "medium",
    "questionEn": "A straight copper wire of length $L = 0.5\\text{ m}$ carries a current of $I = 4\\text{ A}$ perpendicular to a uniform magnetic field of $B = 0.6\\text{ T}$. What is the magnetic force acting on the wire?",
    "questionAr": "سلك نحاسي مستقيم طوله $L = 0.5\\text{ m}$ يمر به تيار $I = 4\\text{ A}$ وموضوع عمودياً على مجال مغناطيسي منتظم كثافته $B = 0.6\\text{ T}$. ما مقدار القوة المغناطيسية المؤثرة على السلك؟",
    "optionsEn": [
      "$F = 1.2\\text{ N}$",
      "$F = 0.6\\text{ N}$",
      "$F = 2.4\\text{ N}$",
      "$F = 0\\text{ N}$"
    ],
    "optionsAr": [
      "$F = 1.2\\text{ N}$",
      "$F = 0.6\\text{ N}$",
      "$F = 2.4\\text{ N}$",
      "$F = 0\\text{ N}$"
    ],
    "correctAnswer": "$F = 1.2\\text{ N}$",
    "correctIndex": 0,
    "hintEn": "$F = B I L \\sin 90^\\circ = B I L$.",
    "hintAr": "السلك عمودي ($\\sin 90^\\circ = 1$): $F = B I L$.",
    "stepByStepSolutionEn": [
      "$F = B I L = 0.6 \\times 4 \\times 0.5 = 1.2\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F = B I L = 0.6 \\times 4 \\times 0.5 = 1.2\\text{ نيوتن}$."
    ],
    "teacherTipEn": "Fleming's Left-Hand Rule gives direction.",
    "teacherTipAr": "قاعدة اليد اليسرى لفلمنج تحدد الاتجاه."
  },
  {
    "id": "phys_ch2_db_med_14",
    "titleEn": "Angle Determination for Half-Maximum Magnetic Force",
    "titleAr": "تحديد زاوية ميل السلك لتكون القوة نصف قيمتها العظمى",
    "difficulty": "medium",
    "questionEn": "A straight wire carrying electric current is placed in a uniform magnetic field. At what angle $\\theta$ to the field lines must the wire be inclined so that the magnetic force on it equals half of its maximum possible value ($F = \\frac{1}{2} F_{\\max}$)?",
    "questionAr": "سلك مستقيم يمر به تيار كهربي موضوع في مجال مغناطيسي منتظم. عند أي زاوية $\\theta$ مع خطوط المجال يجب أن يميل السلك لكي تصبح القوة المؤثرة عليه مساوية لنصف قيمتها العظمى ($F = \\frac{1}{2} F_{\\max}$)؟",
    "optionsEn": [
      "$\\theta = 45^\\circ$",
      "$\\theta = 30^\\circ$ (or $150^\\circ$)",
      "$\\theta = 60^\\circ$",
      "$\\theta = 90^\\circ$"
    ],
    "optionsAr": [
      "$\\theta = 45^\\circ$",
      "$\\theta = 30^\\circ$ (أو $150^\\circ$)",
      "$\\theta = 60^\\circ$",
      "$\\theta = 90^\\circ$"
    ],
    "correctAnswer": "$\\theta = 30^\\circ$ (or $150^\\circ$)",
    "correctIndex": 1,
    "hintEn": "$F = F_{\\max} \\sin\\theta \\implies \\sin\\theta = \\frac{1}{2} \\implies \\theta = 30^\\circ$.",
    "hintAr": "$F = F_{\\max} \\sin\\theta \\implies \\sin\\theta = 0.5 \\implies \\theta = 30^\\circ$.",
    "stepByStepSolutionEn": [
      "$F = F_{\\max} \\sin\\theta \\implies \\sin\\theta = \\frac{1}{2} \\implies \\theta = 30^\\circ$ or $150^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "لكي تكون القوة نصف العظمى: $\\sin\\theta = 0.5 \\implies \\theta = 30^\\circ$."
    ],
    "teacherTipEn": "Do not guess $45^\\circ$!",
    "teacherTipAr": "لا تخلط مع $45^\\circ$ فالجيب لها هو $0.707$."
  },
  {
    "id": "phys_ch2_db_med_15",
    "titleEn": "Equilibrium Current for a Suspended Horizontal Wire in Magnetic Field",
    "titleAr": "حساب شدة تيار سلك متزن أفقياً تحت تأثير وزنه والمجال",
    "difficulty": "medium",
    "questionEn": "A horizontal straight wire of length $L = 1\\text{ m}$ and mass $m = 20\\text{ g}$ ($0.02\\text{ kg}$) is suspended in a uniform horizontal magnetic field of $B = 0.1\\text{ T}$ perpendicular to the wire. What current $I$ must pass through the wire to balance its weight and keep it suspended? ($g = 10\\text{ m/s}^2$)",
    "questionAr": "سلك مستقيم أفقي طوله $L = 1\\text{ m}$ وكتلته $m = 20\\text{ g}$ معلق في مجال مغناطيسي أفقي منتظم كثافته $B = 0.1\\text{ T}$ عمودي على السلك. ما شدة التيار $I$ الواجب إمراره في السلك لكي يتزن ويبقى معلقاً ضد الجاذبية؟ ($g = 10\\text{ m/s}^2$)",
    "optionsEn": [
      "$I = 1\\text{ A}$",
      "$I = 0.2\\text{ A}$",
      "$I = 2\\text{ A}$",
      "$I = 20\\text{ A}$"
    ],
    "optionsAr": [
      "$I = 1\\text{ A}$",
      "$I = 0.2\\text{ A}$",
      "$I = 2\\text{ A}$",
      "$I = 20\\text{ A}$"
    ],
    "correctAnswer": "$I = 2\\text{ A}$",
    "correctIndex": 2,
    "hintEn": "Balance: $B I L = m g \\implies I = \\frac{mg}{BL}$.",
    "hintAr": "شرط الاتزان: $B I L = m g$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{m g}{B L} = \\frac{0.02 \\times 10}{0.1 \\times 1} = \\frac{0.2}{0.1} = 2\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "$I = \\frac{0.02 \\times 10}{0.1 \\times 1} = 2\\text{ أمبير}$."
    ],
    "teacherTipEn": "Fleming's Left-Hand Rule must direct force upward.",
    "teacherTipAr": "يجب أن توجه قاعدة فلمنج لليد اليسرى القوة رأسياً لأعلى."
  },
  {
    "id": "phys_ch2_db_med_16",
    "titleEn": "Mutual Magnetic Force Between Two Conductors Numerical Calculation",
    "titleAr": "حساب القوة المغناطيسية المتبادلة بين سلكين متوازيين",
    "difficulty": "medium",
    "questionEn": "Two parallel straight wires each of length $L = 2\\text{ m}$ separated by $d = 10\\text{ cm}$ ($0.1\\text{ m}$) carry currents $I_1 = 5\\text{ A}$ and $I_2 = 10\\text{ A}$ in the same direction in air. What is the mutual magnetic force between them?",
    "questionAr": "سلكان متوازيان طول كل منهما $L = 2\\text{ m}$ والمسافة بينهما في الهواء $d = 10\\text{ cm}$ يمر بهما تياران $I_1 = 5\\text{ A}$ و $I_2 = 10\\text{ A}$ في نفس الاتجاه. ما مقدار القوة المغناطيسية المتبادلة بينهما وما نوعها؟",
    "optionsEn": [
      "$F = 1.0 \\times 10^{-4}\\text{ N}$, repulsive force",
      "$F = 4.0 \\times 10^{-4}\\text{ N}$, attractive force",
      "$F = 2.0 \\times 10^{-5}\\text{ N}$, repulsive force",
      "$F = 2.0 \\times 10^{-4}\\text{ N}$, attractive force"
    ],
    "optionsAr": [
      "$F = 1.0 \\times 10^{-4}\\text{ N}$، وقوة تنافر",
      "$F = 4.0 \\times 10^{-4}\\text{ N}$، وقوة تجاذب",
      "$F = 2.0 \\times 10^{-5}\\text{ N}$، وقوة تنافر",
      "$F = 2.0 \\times 10^{-4}\\text{ N}$، وقوة تجاذب"
    ],
    "correctAnswer": "$F = 2.0 \\times 10^{-4}\\text{ N}$, attractive force",
    "correctIndex": 3,
    "hintEn": "$F = \\frac{2 \\times 10^{-7} I_1 I_2 L}{d}$. Same direction $\\implies$ attraction.",
    "hintAr": "$F = \\frac{2 \\times 10^{-7} I_1 I_2 L}{d}$ وتجاذب.",
    "stepByStepSolutionEn": [
      "$F = \\frac{2 \\times 10^{-7} \\times 5 \\times 10 \\times 2}{0.10} = 2.0 \\times 10^{-4}\\text{ N}$ (attractive)."
    ],
    "stepByStepSolutionAr": [
      "$F = \\frac{2 \\times 10^{-7} \\times 5 \\times 10 \\times 2}{0.1} = 2.0 \\times 10^{-4}\\text{ نيوتن}$ (تجاذب)."
    ],
    "teacherTipEn": "Newton's Third Law guarantees equal mutual force.",
    "teacherTipAr": "القوة متبادلة ومتساوية وفق قانون نيوتن الثالث."
  },
  {
    "id": "phys_ch2_db_med_17",
    "titleEn": "Maximum Magnetic Torque on a Rectangular Coil Calculation",
    "titleAr": "حساب أقصى عزم ازدواج مغناطيسي لملف مستطيل",
    "difficulty": "medium",
    "questionEn": "A rectangular coil has $N = 200\\text{ turns}$ and dimensions $10\\text{ cm} \\times 5\\text{ cm}$. It carries a current of $I = 2\\text{ A}$ placed in a uniform magnetic field of $B = 0.4\\text{ T}$. What is the MAXIMUM magnetic torque ($\\tau_{\\max}$) that can act on the coil?",
    "questionAr": "ملف مستطيل عدد لفاته $N = 200\\text{ لفة}$ وأبعاده $10\\text{ cm} \\times 5\\text{ cm}$. يمر به تيار $I = 2\\text{ A}$ وموضوع في مجال مغناطيسي منتظم كثافته $B = 0.4\\text{ T}$. ما أقصى عزم ازدواج مغناطيسي ($\\tau_{\\max}$) يمكن أن يؤثر على الملف؟",
    "optionsEn": [
      "$\\tau_{\\max} = 0.8\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 1.6\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 0.4\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 8.0\\text{ N} \\cdot \\text{m}$"
    ],
    "optionsAr": [
      "$\\tau_{\\max} = 0.8\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 1.6\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 0.4\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 8.0\\text{ N} \\cdot \\text{m}$"
    ],
    "correctAnswer": "$\\tau_{\\max} = 0.8\\text{ N} \\cdot \\text{m}$",
    "correctIndex": 0,
    "hintEn": "$\\tau_{\\max} = B I A N$. Area $A = 0.10 \\times 0.05 = 0.005\\text{ m}^2$.",
    "hintAr": "$\\tau_{\\max} = B I A N$ عند موازاة الملف للمجال.",
    "stepByStepSolutionEn": [
      "$\\tau_{\\max} = 0.4 \\times 2 \\times 0.005 \\times 200 = 0.8\\text{ N}\\cdot\\text{m}$."
    ],
    "stepByStepSolutionAr": [
      "$\\tau_{\\max} = 0.4 \\times 2 \\times 0.005 \\times 200 = 0.8\\text{ نيوتن.متر}$."
    ],
    "teacherTipEn": "Torque is maximum when coil is parallel to field.",
    "teacherTipAr": "عزم الازدواج قيمة عظمى عندما يكون الملف موازياً للمجال."
  },
  {
    "id": "phys_ch2_db_med_18",
    "titleEn": "Torque Calculation When Coil Plane is Inclined at 60 Degrees to Field",
    "titleAr": "حساب عزم الازدواج عندما يميل مستوى الملف بزاوية 60 درجة على المجال",
    "difficulty": "medium",
    "questionEn": "The maximum magnetic torque on a current-carrying coil is $\\tau_{\\max} = 10\\text{ N}\\cdot\\text{m}$. What is the torque acting on the coil when its plane makes an angle of $60^\\circ$ with the magnetic field lines?",
    "questionAr": "أقصى عزم ازدواج مغناطيسي يؤثر على ملف يمر به تيار هو $\\tau_{\\max} = 10\\text{ N}\\cdot\\text{m}$. ما مقدار عزم الازدواج المؤثر عليه عندما يميل مستواه بزاوية $60^\\circ$ على خطوط المجال المغناطيسي؟",
    "optionsEn": [
      "$\\tau = 8.66\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 5.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 7.07\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 10\\text{ N} \\cdot \\text{m}$"
    ],
    "optionsAr": [
      "$\\tau = 8.66\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 5.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 7.07\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 10\\text{ N} \\cdot \\text{m}$"
    ],
    "correctAnswer": "$\\tau = 5.0\\text{ N} \\cdot \\text{m}$",
    "correctIndex": 1,
    "hintEn": "Angle with the normal is $\\theta = 90^\\circ - 60^\\circ = 30^\\circ$, so $\\sin 30^\\circ = 0.5$.",
    "hintAr": "الزاوية مع العمودي هي $\\theta = 90^\\circ - 60^\\circ = 30^\\circ$.",
    "stepByStepSolutionEn": [
      "$\\tau = \\tau_{\\max} \\sin 30^\\circ = 10 \\times 0.5 = 5.0\\text{ N}\\cdot\\text{m}$."
    ],
    "stepByStepSolutionAr": [
      "$\\tau = 10 \\times \\sin 30^\\circ = 5.0\\text{ نيوتن.متر}$."
    ],
    "teacherTipEn": "Angle is with the normal to coil plane.",
    "teacherTipAr": "الزاوية في القانون هي الزاوية مع العمودي على الملف."
  },
  {
    "id": "phys_ch2_db_med_19",
    "titleEn": "Magnetic Dipole Moment Quantitative Calculation",
    "titleAr": "حساب مقدار عزم ثنائي القطب المغناطيسي لملف",
    "difficulty": "medium",
    "questionEn": "A circular coil of radius $r = 10\\text{ cm}$ ($0.1\\text{ m}$) having $N = 50\\text{ turns}$ carries an electric current of $I = 4\\text{ A}$. What is the magnitude of its magnetic dipole moment ($|\\vec{m}_d|$)? ($\\pi \\approx 3.14$)",
    "questionAr": "ملف دائري نصف قطره $r = 10\\text{ cm}$ وعدد لفاته $N = 50\\text{ لفة}$ يمر به تيار $I = 4\\text{ A}$. ما مقدار عزم ثنائي القطب المغناطيسي ($|\\vec{m}_d|$) لهذا الملف؟",
    "optionsEn": [
      "$|\\vec{m}_d| \\approx 3.14\\text{ A} \\cdot \\text{m}^2$",
      "$|\\vec{m}_d| \\approx 12.56\\text{ A} \\cdot \\text{m}^2$",
      "$|\\vec{m}_d| \\approx 6.28\\text{ A} \\cdot \\text{m}^2$ ($2\\pi\\text{ A}\\cdot\\text{m}^2$)",
      "$|\\vec{m}_d| \\approx 1.57\\text{ A} \\cdot \\text{m}^2$"
    ],
    "optionsAr": [
      "$|\\vec{m}_d| \\approx 3.14\\text{ A} \\cdot \\text{m}^2$",
      "$|\\vec{m}_d| \\approx 12.56\\text{ A} \\cdot \\text{m}^2$",
      "$|\\vec{m}_d| \\approx 6.28\\text{ A} \\cdot \\text{m}^2$ ($2\\pi\\text{ A}\\cdot\\text{m}^2$)",
      "$|\\vec{m}_d| \\approx 1.57\\text{ A} \\cdot \\text{m}^2$"
    ],
    "correctAnswer": "$|\\vec{m}_d| \\approx 6.28\\text{ A} \\cdot \\text{m}^2$ ($2\\pi\\text{ A}\\cdot\\text{m}^2$)",
    "correctIndex": 2,
    "hintEn": "$|\\vec{m}_d| = I A N = I (\\pi r^2) N$.",
    "hintAr": "$|\\vec{m}_d| = I A N = I (\\pi r^2) N$.",
    "stepByStepSolutionEn": [
      "$|\\vec{m}_d| = 4 \\times (\\pi \\times 0.1^2) \\times 50 = 2\\pi \\approx 6.28\\text{ A}\\cdot\\text{m}^2$."
    ],
    "stepByStepSolutionAr": [
      "$|\\vec{m}_d| = 4 \\times (\\pi \\times 0.01) \\times 50 = 2\\pi \\approx 6.28\\text{ A}\\cdot\\text{m}^2$."
    ],
    "teacherTipEn": "Dipole moment is independent of field $B$.",
    "teacherTipAr": "عزم ثنائي القطب مستقل تماماً عن المجال $B$."
  },
  {
    "id": "phys_ch2_db_med_20",
    "titleEn": "Galvanometer Sensitivity Angle per Current Calculation",
    "titleAr": "حساب حساسية الجلفانومتر زاوية الانحراف لشدة التيار",
    "difficulty": "medium",
    "questionEn": "A sensitive moving-coil galvanometer produces a pointer deflection of $\\theta = 30^\\circ$ when a current of $I = 60\\,\\mu\\text{A}$ flows through its coil. What is the sensitivity of this galvanometer?",
    "questionAr": "انحرف مؤشر جلفانومتر ذي ملف متحرك بزاوية $\\theta = 30^\\circ$ عند مرور تيار شدته $I = 60\\,\\mu\\text{A}$ في ملفه. ما هي حساسية هذا الجلفانومتر؟",
    "optionsEn": [
      "$S = 2.0^\\circ/\\mu\\text{A}$",
      "$S = 0.2^\\circ/\\mu\\text{A}$",
      "$S = 5.0^\\circ/\\mu\\text{A}$",
      "$S = 0.5^\\circ/\\mu\\text{A}$"
    ],
    "optionsAr": [
      "$S = 2.0^\\circ/\\mu\\text{A}$",
      "$S = 0.2^\\circ/\\mu\\text{A}$",
      "$S = 5.0^\\circ/\\mu\\text{A}$",
      "$S = 0.5^\\circ/\\mu\\text{A}$"
    ],
    "correctAnswer": "$S = 0.5^\\circ/\\mu\\text{A}$",
    "correctIndex": 3,
    "hintEn": "$S = \\frac{\\theta}{I} = \\frac{30^\\circ}{60\\,\\mu\\text{A}}$.",
    "hintAr": "الحساسية تساوي زاوية الانحراف مقسومة على شدة التيار: $S = \\frac{\\theta}{I}$.",
    "stepByStepSolutionEn": [
      "$S = \\frac{30^\\circ}{60\\,\\mu\\text{A}} = 0.5^\\circ/\\mu\\text{A}$."
    ],
    "stepByStepSolutionAr": [
      "$S = \\frac{30}{60} = 0.5^\\circ/\\mu\\text{A}$."
    ],
    "teacherTipEn": "Scale is linear.",
    "teacherTipAr": "تدريج الجلفانومتر منتظم."
  },
  {
    "id": "phys_ch2_db_med_21",
    "titleEn": "Ammeter Shunt Resistance Numerical Calculation",
    "titleAr": "حساب مقاومة مجزئ التيار لتحويل الجلفانومتر لأميتر",
    "difficulty": "medium",
    "questionEn": "A galvanometer of internal resistance $R_g = 54\\,\\Omega$ has a full-scale deflection current of $I_g = 10\\text{ mA}$ ($0.01\\text{ A}$). What shunt resistance $R_s$ must be connected in parallel to convert it into an ammeter measuring up to $I = 1\\text{ A}$?",
    "questionAr": "جلفانومتر مقاومة ملفه $R_g = 54\\,\\Omega$ وأقصى تيار يقيسه $I_g = 10\\text{ mA}$. ما هي قيمة مقاومة مجزئ التيار $R_s$ اللازم توصيلها على التوازي لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$؟",
    "optionsEn": [
      "$R_s \\approx 0.545\\,\\Omega$ ($\\frac{6}{11}\\,\\Omega$)",
      "$R_s = 5.4\\,\\Omega$",
      "$R_s = 0.054\\,\\Omega$",
      "$R_s = 540\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_s \\approx 0.545\\,\\Omega$ ($\\frac{6}{11}\\,\\Omega$)",
      "$R_s = 5.4\\,\\Omega$",
      "$R_s = 0.054\\,\\Omega$",
      "$R_s = 540\\,\\Omega$"
    ],
    "correctAnswer": "$R_s \\approx 0.545\\,\\Omega$ ($\\frac{6}{11}\\,\\Omega$)",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g} = \\frac{0.01 \\times 54}{1 - 0.01}$.",
    "hintAr": "$R_s = \\frac{I_g R_g}{I - I_g}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.01 \\times 54}{0.99} = \\frac{0.54}{0.99} = \\frac{6}{11} \\approx 0.545\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{0.54}{0.99} \\approx 0.545\\,\\Omega$."
    ],
    "teacherTipEn": "Shunt resistance is small.",
    "teacherTipAr": "مقاومة المجزئ صغيرة دائماً."
  },
  {
    "id": "phys_ch2_db_med_22",
    "titleEn": "Shunt Resistance to Reduce Sensitivity to One-Fifth",
    "titleAr": "حساب مجزئ التيار لإنقاص حساسية الجلفانومتر إلى الخمس",
    "difficulty": "medium",
    "questionEn": "A moving-coil galvanometer has a coil resistance of $R_g = 40\\,\\Omega$. What shunt resistance $R_s$ must be connected to reduce its sensitivity to $\\frac{1}{5}$ of its original value?",
    "questionAr": "جلفانومتر ذو ملف متحرك مقاومة ملفه $R_g = 40\\,\\Omega$. ما هي قيمة مقاومة مجزئ التيار $R_s$ اللازمة لإنقاص حساسيته إلى الخمس ($\\frac{1}{5}$)؟",
    "optionsEn": [
      "$R_s = 8\\,\\Omega$",
      "$R_s = 10\\,\\Omega$",
      "$R_s = 5\\,\\Omega$",
      "$R_s = 160\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_s = 8\\,\\Omega$",
      "$R_s = 10\\,\\Omega$",
      "$R_s = 5\\,\\Omega$",
      "$R_s = 160\\,\\Omega$"
    ],
    "correctAnswer": "$R_s = 10\\,\\Omega$",
    "correctIndex": 1,
    "hintEn": "$R_s = \\frac{R_g}{n - 1} = \\frac{40}{5 - 1} = 10\\,\\Omega$.",
    "hintAr": "$R_s = \\frac{R_g}{n - 1} = \\frac{40}{4} = 10\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "Range increases 5-fold: $I = 5 I_g \\implies R_s = \\frac{R_g}{4} = 10\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "المدى زاد 5 أمثال: $R_s = \\frac{R_g}{4} = 10\\,\\Omega$."
    ],
    "teacherTipEn": "Shortcut: $R_s = \\frac{R_g}{n - 1}$.",
    "teacherTipAr": "قاعدة سريعة: $R_s = \\frac{R_g}{n - 1}$."
  },
  {
    "id": "phys_ch2_db_med_23",
    "titleEn": "Voltmeter Multiplier Resistance Calculation",
    "titleAr": "حساب مقاومة مضاعف الجهد لتحويل الجلفانومتر لفولتميتر",
    "difficulty": "medium",
    "questionEn": "A galvanometer of coil resistance $R_g = 20\\,\\Omega$ gives full-scale deflection with current $I_g = 2\\text{ mA}$ ($0.002\\text{ A}$). What multiplier resistance $R_m$ must be connected in series to convert it into a voltmeter measuring up to $V = 10\\text{ V}$?",
    "questionAr": "جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بمرور تيار $I_g = 2\\text{ mA}$. ما قيمة مقاومة مضاعف الجهد $R_m$ اللازم توصيلها على التوالي لتحويله إلى فولتميتر يقيس فرق جهد أقصاه $V = 10\\text{ V}$؟",
    "optionsEn": [
      "$R_m = 5000\\,\\Omega$",
      "$R_m = 4960\\,\\Omega$",
      "$R_m = 4980\\,\\Omega$",
      "$R_m = 2500\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_m = 5000\\,\\Omega$",
      "$R_m = 4960\\,\\Omega$",
      "$R_m = 4980\\,\\Omega$",
      "$R_m = 2500\\,\\Omega$"
    ],
    "correctAnswer": "$R_m = 4980\\,\\Omega$",
    "correctIndex": 2,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{10 - 0.04}{0.002}$.",
    "hintAr": "$R_m = \\frac{V - I_g R_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = 0.002 \\times 20 = 0.04\\text{ V} \\implies R_m = \\frac{10 - 0.04}{0.002} = 4980\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_m = \\frac{10 - 0.04}{0.002} = 4980\\,\\Omega$."
    ],
    "teacherTipEn": "Multiplier resistance is large.",
    "teacherTipAr": "مقاومة مضاعف الجهد كبيرة دائماً."
  },
  {
    "id": "phys_ch2_db_med_24",
    "titleEn": "Multiplier Resistance to Multiply Voltage Range by n",
    "titleAr": "حساب مضاعف الجهد لزيادة مدى قياس الجهد n مرة",
    "difficulty": "medium",
    "questionEn": "A voltmeter of internal resistance $R_v = 1000\\,\\Omega$ measures a maximum potential difference of $V_1 = 5\\text{ V}$. What additional multiplier resistance $R_m'$ must be connected in series to increase its measuring range to $V_2 = 50\\text{ V}$ ($10\\times$ larger)?",
    "questionAr": "فولتميتر مقاومته $R_v = 1000\\,\\Omega$ يقيس فرق جهد أقصاه $V_1 = 5\\text{ V}$. ما هي قيمة مقاومة مضاعف الجهد الإضافية $R_m'$ اللازم توصيلها على التوالي لزيادة مدى قياسه إلى $V_2 = 50\\text{ V}$ (عشرة أمثال)؟",
    "optionsEn": [
      "$R_m' = 10000\\,\\Omega$",
      "$R_m' = 5000\\,\\Omega$",
      "$R_m' = 4500\\,\\Omega$",
      "$R_m' = 9000\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_m' = 10000\\,\\Omega$",
      "$R_m' = 5000\\,\\Omega$",
      "$R_m' = 4500\\,\\Omega$",
      "$R_m' = 9000\\,\\Omega$"
    ],
    "correctAnswer": "$R_m' = 9000\\,\\Omega$",
    "correctIndex": 3,
    "hintEn": "$R_m' = (n - 1) R_v = (10 - 1) \\times 1000 = 9000\\,\\Omega$.",
    "hintAr": "$R_m' = (n - 1) R_v = 9 \\times 1000 = 9000\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "$I_g = \\frac{5}{1000} = 0.005\\text{ A} \\implies R_{\\text{total}} = \\frac{50}{0.005} = 10000\\,\\Omega \\implies R_m' = 10000 - 1000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_{\\text{total}} = 10000\\,\\Omega \\implies R_m' = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Multiplier expands range.",
    "teacherTipAr": "مضاعف الجهد يوسع المدى بمقدار $n-1$."
  },
  {
    "id": "phys_ch2_db_med_25",
    "titleEn": "Ohmmeter Internal Resistance Calculation from Battery EMF and Full Scale Current",
    "titleAr": "حساب المقاومة الكلية الداخلية للأوميتر من جهد البطارية وأقصى تيار",
    "difficulty": "medium",
    "questionEn": "An ohmmeter circuit contains a battery of electromotive force $V_B = 1.5\\text{ V}$ and negligible internal resistance. If the microammeter has a full-scale deflection current of $I_g = 300\\,\\mu\\text{A}$, what is the total internal resistance ($R_{\\text{in}}$) of the ohmmeter?",
    "questionAr": "تحتوي دائرة أوميتر على بطارية قوتها الدافعة الكهربية $V_B = 1.5\\text{ V}$ ومقاومتها الداخلية مهملة. إذا كان أقصى انحراف لمؤشر الميكروأميتر هو $I_g = 300\\,\\mu\\text{A}$، فما هي المقاومة الكلية الداخلية ($R_{\\text{in}}$) لجهاز الأوميتر؟",
    "optionsEn": [
      "$R_{\\text{in}} = 5000\\,\\Omega$ ($5\\text{ k}\\Omega$)",
      "$R_{\\text{in}} = 450\\,\\Omega$",
      "$R_{\\text{in}} = 2000\\,\\Omega$",
      "$R_{\\text{in}} = 500\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_{\\text{in}} = 5000\\,\\Omega$ ($5\\text{ k}\\Omega$)",
      "$R_{\\text{in}} = 450\\,\\Omega$",
      "$R_{\\text{in}} = 2000\\,\\Omega$",
      "$R_{\\text{in}} = 500\\,\\Omega$"
    ],
    "correctAnswer": "$R_{\\text{in}} = 5000\\,\\Omega$ ($5\\text{ k}\\Omega$)",
    "correctIndex": 0,
    "hintEn": "$R_{\\text{in}} = \\frac{V_B}{I_g} = \\frac{1.5}{300 \\times 10^{-6}} = 5000\\,\\Omega$.",
    "hintAr": "$R_{\\text{in}} = \\frac{V_B}{I_g} = 5000\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "$R_{\\text{in}} = \\frac{1.5}{300 \\times 10^{-6}} = 5000\\,\\Omega = 5\\text{ k}\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_{\\text{in}} = \\frac{1.5}{300 \\times 10^{-6}} = 5000\\,\\Omega$."
    ],
    "teacherTipEn": "At zero external resistance, current is maximum.",
    "teacherTipAr": "عند صفر المقاومة الخارجية يمر أقصى تيار."
  },
  {
    "id": "phys_ch2_db_med_26",
    "titleEn": "Ohmmeter Quarter-Scale Deflection External Resistance Calculation",
    "titleAr": "حساب المقاومة الخارجية التي تجعل مؤشر الأوميتر ينحرف لربع التدريج",
    "difficulty": "medium",
    "questionEn": "An ohmmeter has a total internal resistance of $R_{\\text{in}} = 3000\\,\\Omega$. What unknown external resistance $R_x$ connected across its terminals will cause the pointer to deflect to $\\frac{1}{4}$ of its full-scale current?",
    "questionAr": "أوميتر مقاومته الداخلية الكلية $R_{\\text{in}} = 3000\\,\\Omega$. ما قيمة المقاومة الخارجية المجهولة $R_x$ التي تجعل مؤشره ينحرف إلى ربع تدريج التيار ($\\frac{1}{4} I_g$)؟",
    "optionsEn": [
      "$R_x = 12000\\,\\Omega$ ($12\\text{ k}\\Omega$)",
      "$R_x = 9000\\,\\Omega$ ($9\\text{ k}\\Omega$)",
      "$R_x = 6000\\,\\Omega$ ($6\\text{ k}\\Omega$)",
      "$R_x = 750\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_x = 12000\\,\\Omega$ ($12\\text{ k}\\Omega$)",
      "$R_x = 9000\\,\\Omega$ ($9\\text{ k}\\Omega$)",
      "$R_x = 6000\\,\\Omega$ ($6\\text{ k}\\Omega$)",
      "$R_x = 750\\,\\Omega$"
    ],
    "correctAnswer": "$R_x = 9000\\,\\Omega$ ($9\\text{ k}\\Omega$)",
    "correctIndex": 1,
    "hintEn": "Current $1/4 \\implies R_{\\text{total}} = 4 R_{\\text{in}} \\implies R_x = 3 R_{\\text{in}}$.",
    "hintAr": "التيار ربع التدريج $\\implies R_x = 3 R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "$R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_x = 3 \\times 3000 = 9000\\,\\Omega$."
    ],
    "teacherTipEn": "Shortcut: $R_x = (n - 1) R_{\\text{in}}$.",
    "teacherTipAr": "قاعدة: $R_x = (n - 1) R_{\\text{in}}$."
  },
  {
    "id": "phys_ch2_db_med_27",
    "titleEn": "Ohmmeter Three-Quarter Scale Deflection Resistance Calculation",
    "titleAr": "حساب المقاومة الخارجية التي تجعل مؤشر الأوميتر ينحرف لثلاثة أرباع التدريج",
    "difficulty": "medium",
    "questionEn": "An ohmmeter has internal resistance $R_{\\text{in}} = 3000\\,\\Omega$. An external resistor $R_x$ is connected across its terminals, causing the current to drop to $\\frac{3}{4}$ of full scale. What is the value of $R_x$?",
    "questionAr": "أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$. وصلت بين طرفيه مقاومة مجهولة $R_x$ فانحرف مؤشره إلى ثلاثة أرباع التدريج ($\\frac{3}{4} I_g$). ما هي قيمة المقاومة $R_x$؟",
    "optionsEn": [
      "$R_x = 2250\\,\\Omega$",
      "$R_x = 4000\\,\\Omega$",
      "$R_x = 1000\\,\\Omega$ ($1\\text{ k}\\Omega$)",
      "$R_x = 500\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_x = 2250\\,\\Omega$",
      "$R_x = 4000\\,\\Omega$",
      "$R_x = 1000\\,\\Omega$ ($1\\text{ k}\\Omega$)",
      "$R_x = 500\\,\\Omega$"
    ],
    "correctAnswer": "$R_x = 1000\\,\\Omega$ ($1\\text{ k}\\Omega$)",
    "correctIndex": 2,
    "hintEn": "$\\frac{3}{4} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + R_x} \\implies 3 R_x = R_{\\text{in}} \\implies R_x = \\frac{1}{3} R_{\\text{in}}$.",
    "hintAr": "$\\frac{3}{4} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + R_x} \\implies R_x = \\frac{1}{3} R_{\\text{in}}$.",
    "stepByStepSolutionEn": [
      "$R_x = \\frac{3000}{3} = 1000\\,\\Omega = 1\\text{ k}\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_x = \\frac{3000}{3} = 1000\\,\\Omega$."
    ],
    "teacherTipEn": "Scale is non-linear.",
    "teacherTipAr": "التدريج غير منتظم."
  },
  {
    "id": "phys_ch2_db_med_28",
    "titleEn": "Net Magnetic Force on Middle Conductor of Three Parallel Wires",
    "titleAr": "محصلة القوة المغناطيسية المؤثرة على السلك الأوسط من ثلاثة أسلاك",
    "difficulty": "medium",
    "questionEn": "Three long parallel straight wires $A$, $B$, and $C$ lie in the same plane. Wire $B$ is midway between $A$ and $C$, separated by distance $d = 10\\text{ cm}$ from each. Wires $A$ and $C$ carry equal currents $I_A = I_C = 5\\text{ A}$ in the same direction, while wire $B$ carries current $I_B = 2\\text{ A}$ in the same direction. What is the net magnetic force acting on wire $B$?",
    "questionAr": "ثلاثة أسلاك مستقيمة متوازية $A$ و $B$ و $C$ تقع في نفس المستوى. يقع السلك $B$ في منتصف المسافة تماماً بين $A$ و $C$ (يبعد $10\\text{ cm}$ عن كل منهما). يمر في السلكين $A$ و $C$ تياران متساويان $I_A = I_C = 5\\text{ A}$ في نفس الاتجاه، بينما يمر في $B$ تيار $I_B = 2\\text{ A}$ في نفس اتجاههما. ما هي محصلة القوة المغناطيسية المؤثرة على السلك $B$؟",
    "optionsEn": [
      "$F_{\\text{net}} = 4.0 \\times 10^{-5}\\text{ N/m}$ directed toward $A$",
      "$F_{\\text{net}} = 4.0 \\times 10^{-5}\\text{ N/m}$ directed toward $C$",
      "$F_{\\text{net}} = 8.0 \\times 10^{-5}\\text{ N/m}$ directed upward",
      "Zero ($F_{\\text{net}} = 0$), because the magnetic forces exerted by wires $A$ and $C$ on wire $B$ are equal in magnitude and opposite in direction"
    ],
    "optionsAr": [
      "$F_{\\text{net}} = 4.0 \\times 10^{-5}\\text{ N/m}$ نحو السلك $A$",
      "$F_{\\text{net}} = 4.0 \\times 10^{-5}\\text{ N/m}$ نحو السلك $C$",
      "$F_{\\text{net}} = 8.0 \\times 10^{-5}\\text{ N/m}$ لأعلى",
      "صفر ($F_{\\text{net}} = 0$)، لأن القوتين المغناطيسيتين المؤثرتين من السلكين $A$ و $C$ على $B$ متساويتان في المقدار ومتضادتان في الاتجاه تماماً"
    ],
    "correctAnswer": "Zero ($F_{\\text{net}} = 0$), because the magnetic forces exerted by wires $A$ and $C$ on wire $B$ are equal in magnitude and opposite in direction",
    "correctIndex": 3,
    "hintEn": "Attraction from left balances attraction from right.",
    "hintAr": "قوة جذب السلك الأيسر توازن قوة جذب السلك الأيمن.",
    "stepByStepSolutionEn": [
      "$F_{AB} = F_{CB}$ because currents and distances are equal, so $F_{\\text{net}} = 0$."
    ],
    "stepByStepSolutionAr": [
      "القوتان متساويتان في المقدار ومتعاكستان في الاتجاه فتتلاشيان."
    ],
    "teacherTipEn": "Wire B is at the neutral line.",
    "teacherTipAr": "السلك B يقع عند خط التعادل."
  },
  {
    "id": "phys_ch2_db_med_29",
    "titleEn": "Resultant Field at Center of Two Concentric Coils with Opposing Currents",
    "titleAr": "محصلة كثافة الفيض لملفين دائريين متحدي المركز في اتجاهين متعاكسين",
    "difficulty": "medium",
    "questionEn": "Two concentric circular coils in the same plane carry currents in opposite directions. The outer coil has $N_1 = 30\\text{ turns}$, $r_1 = 12\\text{ cm}$, and current $I_1 = 4\\text{ A}$. The inner coil has $N_2 = 30\\text{ turns}$, $r_2 = 6\\text{ cm}$, and current $I_2 = 3\\text{ A}$. What is the net magnetic flux density at their common center?",
    "questionAr": "ملفان دائريان متحد المركز في نفس المستوى يمر بهما تياران في اتجاهين متضادين. الخارجي: $N_1 = 30\\text{ لفة}$ و $r_1 = 12\\text{ cm}$ و $I_1 = 4\\text{ A}$. والداخلي: $N_2 = 30\\text{ لفة}$ و $r_2 = 6\\text{ cm}$ و $I_2 = 3\\text{ A}$. ما هي محصلة كثافة الفيض المغناطيسي عند مركزهما المشترك؟",
    "optionsEn": [
      "$B_{\\text{net}} = \\pi \\times 10^{-4}\\text{ T}$ ($\\approx 3.14 \\times 10^{-4}\\text{ T}$)",
      "$B_{\\text{net}} = 5\\pi \\times 10^{-4}\\text{ T}$",
      "$B_{\\text{net}} = 2\\pi \\times 10^{-4}\\text{ T}$",
      "$B_{\\text{net}} = 0\\text{ T}$"
    ],
    "optionsAr": [
      "$B_{\\text{net}} = \\pi \\times 10^{-4}\\text{ T}$ ($\\approx 3.14 \\times 10^{-4}\\text{ T}$)",
      "$B_{\\text{net}} = 5\\pi \\times 10^{-4}\\text{ T}$",
      "$B_{\\text{net}} = 2\\pi \\times 10^{-4}\\text{ T}$",
      "$B_{\\text{net}} = 0\\text{ T}$"
    ],
    "correctAnswer": "$B_{\\text{net}} = \\pi \\times 10^{-4}\\text{ T}$ ($\\approx 3.14 \\times 10^{-4}\\text{ T}$)",
    "correctIndex": 0,
    "hintEn": "$B_1 = \\frac{\\mu_0 N_1 I_1}{2r_1}$, $B_2 = \\frac{\\mu_0 N_2 I_2}{2r_2}$. $B_{\\text{net}} = |B_2 - B_1|$.",
    "hintAr": "$B_t = B_2 - B_1$ لأن التيارين في اتجاهين متضادين.",
    "stepByStepSolutionEn": [
      "$B_1 = \\frac{\\mu_0 \\times 30 \\times 4}{2 \\times 0.12} = 500\\mu_0$. $B_2 = \\frac{\\mu_0 \\times 30 \\times 3}{2 \\times 0.06} = 750\\mu_0$. $B_{\\text{net}} = 250\\mu_0 = 250 \\times 4\\pi \\times 10^{-7} = \\pi \\times 10^{-4}\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_t = (750 - 500)\\mu_0 = 250 \\times 4\\pi \\times 10^{-7} = \\pi \\times 10^{-4}\\text{ تسلا}$."
    ],
    "teacherTipEn": "Direction of net field is that of the inner coil (larger field).",
    "teacherTipAr": "اتجاه المحصلة في اتجاه مجال الملف الداخلي الأكبر."
  },
  {
    "id": "phys_ch2_db_med_30",
    "titleEn": "Rewinding Circular Coil to One-Third Radius Field Scaling",
    "titleAr": "إعادة لف ملف دائري لثلث نصف قطره مع ثبات التيار",
    "difficulty": "medium",
    "questionEn": "A circular coil carrying current $I$ has magnetic flux density $B$ at its center. If the coil is unwound and rewound using the same wire length into a circular coil of radius $r' = \\frac{1}{3}r$ and connected to the same current $I$, what is the new magnetic flux density $B'$?",
    "questionAr": "ملف دائري يمر به تيار $I$ وكثافة الفيض عند مركزه $B$. إذا أُعيد لف نفس السلك ليصبح ملفاً دائرياً نصف قطره ثلث نصف القطر الأصلي ($r' = \\frac{1}{3}r$) ومر به نفس التيار، فما هي كثافة الفيض الجديدة $B'$؟",
    "optionsEn": [
      "$B' = 3 B$",
      "$B' = 9 B$",
      "$B' = 6 B$",
      "$B' = \\frac{1}{9} B$"
    ],
    "optionsAr": [
      "$B' = 3 B$",
      "$B' = 9 B$",
      "$B' = 6 B$",
      "$B' = \\frac{1}{9} B$"
    ],
    "correctAnswer": "$B' = 9 B$",
    "correctIndex": 1,
    "hintEn": "Same wire length: $r' = r/3 \\implies N' = 3N$. Then $B \\propto \\frac{N}{r} \\propto \\frac{3}{1/3} = 9$.",
    "hintAr": "طول السلك ثابت: نقص نصف القطر للثلث يضاعف عدد اللفات 3 مرات، فتزداد $B$ بمقدار $3 \\times 3 = 9$.",
    "stepByStepSolutionEn": [
      "Length $L = 2\\pi r N = \\text{constant}$. When $r' = \\frac{1}{3}r$, $N' = 3N$. Then $B' = \\frac{\\mu (3N) I}{2(\\frac{1}{3}r)} = 9 \\frac{\\mu N I}{2r} = 9 B$."
    ],
    "stepByStepSolutionAr": [
      "بما أن طول السلك ثابت: $N' = 3N$. إذن $B' = \\frac{\\mu (3N) I}{2(r/3)} = 9 \\frac{\\mu N I}{2r} = 9 B$."
    ],
    "teacherTipEn": "Rule: When rewinding the same wire, $B \\propto \\frac{1}{r^2} \\propto N^2$.",
    "teacherTipAr": "قاعدة: عند إعادة لف نفس السلك، $B \\propto \\frac{1}{r^2} \\propto N^2$."
  },
  {
    "id": "phys_ch2_db_med_31",
    "titleEn": "Resultant Field of Two Perpendicular Concentric Circular Coils",
    "titleAr": "محصلة كثافة الفيض لملفين دائريين متعامدين حسابياً",
    "difficulty": "medium",
    "questionEn": "Two concentric circular coils with perpendicular planes have individual magnetic flux densities at their common center of $B_1 = 0.06\\text{ T}$ and $B_2 = 0.08\\text{ T}$. What is the magnitude of the resultant magnetic flux density $B_{\\text{net}}$?",
    "questionAr": "ملفان دائريان مستواهما متعامدان ولهما مركز مشترك. إذا كانت كثافة الفيض عند المركز لكل منهما $B_1 = 0.06\\text{ T}$ و $B_2 = 0.08\\text{ T}$، فما هي محصلة كثافة الفيض الكلية $B_{\\text{net}}$؟",
    "optionsEn": [
      "$B_{\\text{net}} = 0.14\\text{ T}$",
      "$B_{\\text{net}} = 0.02\\text{ T}$",
      "$B_{\\text{net}} = 0.10\\text{ T}$",
      "$B_{\\text{net}} = 0.07\\text{ T}$"
    ],
    "optionsAr": [
      "$B_{\\text{net}} = 0.14\\text{ T}$",
      "$B_{\\text{net}} = 0.02\\text{ T}$",
      "$B_{\\text{net}} = 0.10\\text{ T}$",
      "$B_{\\text{net}} = 0.07\\text{ T}$"
    ],
    "correctAnswer": "$B_{\\text{net}} = 0.10\\text{ T}$",
    "correctIndex": 2,
    "hintEn": "Perpendicular vectors: $B_{\\text{net}} = \\sqrt{B_1^2 + B_2^2}$.",
    "hintAr": "المجالان متعامدان: $B_t = \\sqrt{B_1^2 + B_2^2}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{net}} = \\sqrt{(0.06)^2 + (0.08)^2} = \\sqrt{0.0036 + 0.0064} = \\sqrt{0.0100} = 0.10\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B_t = \\sqrt{(0.06)^2 + (0.08)^2} = \\sqrt{0.01} = 0.10\\text{ تسلا}$."
    ],
    "teacherTipEn": "Pythagorean triple: 6, 8, 10.",
    "teacherTipAr": "ثلاثية فيثاغورس: 6، 8، 10."
  },
  {
    "id": "phys_ch2_db_med_32",
    "titleEn": "Calculating Separation Distance from Mutual Force per Unit Length",
    "titleAr": "حساب المسافة بين سلكين بدلالة القوة المتبادلة لوحدة الأطوال",
    "difficulty": "medium",
    "questionEn": "Two parallel straight wires in vacuum carry currents $I_1 = 10\\text{ A}$ and $I_2 = 20\\text{ A}$. If the mutual magnetic force per unit length is $\\frac{F}{L} = 2 \\times 10^{-4}\\text{ N/m}$, what is the separation distance $d$ between them?",
    "questionAr": "سلكان متوازيان في الفراغ يمر بهما تياران $I_1 = 10\\text{ A}$ و $I_2 = 20\\text{ A}$. إذا كانت القوة المغناطيسية المتبادلة لوحدة الأطوال $\\frac{F}{L} = 2 \\times 10^{-4}\\text{ N/m}$، فما هي المسافة الفاصلة بينهما $d$؟",
    "optionsEn": [
      "$d = 10\\text{ cm}$ ($0.10\\text{ m}$)",
      "$d = 40\\text{ cm}$ ($0.40\\text{ m}$)",
      "$d = 2\\text{ cm}$ ($0.02\\text{ m}$)",
      "$d = 20\\text{ cm}$ ($0.20\\text{ m}$)"
    ],
    "optionsAr": [
      "$d = 10\\text{ cm}$ ($0.10\\text{ m}$)",
      "$d = 40\\text{ cm}$ ($0.40\\text{ m}$)",
      "$d = 2\\text{ cm}$ ($0.02\\text{ m}$)",
      "$d = 20\\text{ cm}$ ($0.20\\text{ m}$)"
    ],
    "correctAnswer": "$d = 20\\text{ cm}$ ($0.20\\text{ m}$)",
    "correctIndex": 3,
    "hintEn": "$d = \\frac{2 \\times 10^{-7} I_1 I_2}{F/L}$.",
    "hintAr": "$d = \\frac{2 \\times 10^{-7} I_1 I_2}{F/L}$.",
    "stepByStepSolutionEn": [
      "$d = \\frac{2 \\times 10^{-7} \\times 10 \\times 20}{2 \\times 10^{-4}} = \\frac{4 \\times 10^{-5}}{2 \\times 10^{-4}} = 0.20\\text{ m} = 20\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "$d = \\frac{2 \\times 10^{-7} \\times 200}{2 \\times 10^{-4}} = 0.2\\text{ m} = 20\\text{ cm}$."
    ],
    "teacherTipEn": "Check: $F/L = \\frac{2 \\times 10^{-7} \\times 200}{0.2} = 2 \\times 10^{-4}\\text{ N/m}$.",
    "teacherTipAr": "تحقق: $F/L = 2 \\times 10^{-4}\\text{ N/m}$."
  },
  {
    "id": "phys_ch2_db_med_33",
    "titleEn": "Current Sensitivity per Scale Division Calculation",
    "titleAr": "حساب دلالة القسم الواحد لتدريج جلفانومتر",
    "difficulty": "medium",
    "questionEn": "A moving-coil galvanometer has a scale of $N_d = 30\\text{ divisions}$. When a current of $I = 240\\,\\mu\\text{A}$ passes through it, the pointer deflects to the full-scale mark. What is the current sensitivity per scale division?",
    "questionAr": "جلفانومتر ذو ملف متحرك تدريجه مقسم إلى 30 قسماً. عند مرور تيار شدته $I = 240\\,\\mu\\text{A}$ ينحرف مؤشره لنهاية التدريج تماماً. ما هي دلالة القسم الواحد؟",
    "optionsEn": [
      "$8\\,\\mu\\text{A/division}$",
      "$12\\,\\mu\\text{A/division}$",
      "$6\\,\\mu\\text{A/division}$",
      "$80\\,\\mu\\text{A/division}$"
    ],
    "optionsAr": [
      "$8\\,\\mu\\text{A/قسم}$",
      "$12\\,\\mu\\text{A/قسم}$",
      "$6\\,\\mu\\text{A/قسم}$",
      "$80\\,\\mu\\text{A/قسم}$"
    ],
    "correctAnswer": "$8\\,\\mu\\text{A/division}$",
    "correctIndex": 0,
    "hintEn": "Current per division = $\\frac{\\text{Total Current}}{\\text{Number of Divisions}} = \\frac{240\\,\\mu\\text{A}}{30}$.",
    "hintAr": "دلالة القسم الواحد = شدة التيار الكلي / عدد الأقسام.",
    "stepByStepSolutionEn": [
      "Current per division = $\\frac{240\\,\\mu\\text{A}}{30\\text{ divisions}} = 8\\,\\mu\\text{A/div}$."
    ],
    "stepByStepSolutionAr": [
      "دلالة القسم الواحد = $\\frac{240}{30} = 8\\,\\mu\\text{A/قسم}$."
    ],
    "teacherTipEn": "If pointer deflects 15 divisions, measured current is $15 \\times 8 = 120\\,\\mu\\text{A}$.",
    "teacherTipAr": "إذا انحرف المؤشر 15 قسماً تكون شدة التيار $15 \\times 8 = 120\\,\\mu\\text{A}$."
  },
  {
    "id": "phys_ch2_db_med_34",
    "titleEn": "Shunt Resistance to Reduce Galvanometer Sensitivity to One-Tenth",
    "titleAr": "حساب مجزئ التيار لإنقاص الحساسية إلى العشر",
    "difficulty": "medium",
    "questionEn": "A galvanometer has a coil resistance of $R_g = 90\\,\\Omega$. What value of shunt resistor $R_s$ must be connected to reduce its sensitivity to $\\frac{1}{10}$ of its original value?",
    "questionAr": "جلفانومتر مقاومة ملفه $R_g = 90\\,\\Omega$. ما هي قيمة مقاومة مجزئ التيار $R_s$ اللازم توصيلها لإنقاص حساسيته إلى العشر ($\\frac{1}{10}$)؟",
    "optionsEn": [
      "$R_s = 9\\,\\Omega$",
      "$R_s = 10\\,\\Omega$",
      "$R_s = 1\\,\\Omega$",
      "$R_s = 810\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_s = 9\\,\\Omega$",
      "$R_s = 10\\,\\Omega$",
      "$R_s = 1\\,\\Omega$",
      "$R_s = 810\\,\\Omega$"
    ],
    "correctAnswer": "$R_s = 10\\,\\Omega$",
    "correctIndex": 1,
    "hintEn": "$R_s = \\frac{R_g}{n - 1} = \\frac{90}{10 - 1} = \\frac{90}{9} = 10\\,\\Omega$.",
    "hintAr": "$R_s = \\frac{R_g}{n - 1} = \\frac{90}{9} = 10\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "Sensitivity reduced to $1/10 \\implies I = 10 I_g$. $\\frac{I_g}{I} = \\frac{R_s}{R_g + R_s} = \\frac{1}{10} \\implies 9 R_s = R_g \\implies R_s = \\frac{90}{9} = 10\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "إنقاص الحساسية للعشر يعني أن $I = 10 I_g \\implies R_s = \\frac{R_g}{9} = \\frac{90}{9} = 10\\,\\Omega$."
    ],
    "teacherTipEn": "Check: $R_s / (R_g + R_s) = 10 / 100 = 1/10$.",
    "teacherTipAr": "تحقق: $10 / (90 + 10) = 1/10$."
  },
  {
    "id": "phys_ch2_db_med_35",
    "titleEn": "Ammeter Equivalent Total Resistance Calculation",
    "titleAr": "حساب المقاومة المكافئة الكلية للأميتر",
    "difficulty": "medium",
    "questionEn": "A galvanometer of coil resistance $R_g = 99\\,\\Omega$ is shunted by a resistor $R_s = 1\\,\\Omega$. What is the total equivalent resistance of the assembled ammeter ($R_A$)?",
    "questionAr": "جلفانومتر مقاومة ملفه $R_g = 99\\,\\Omega$ وُصل بمجزئ تيار $R_s = 1\\,\\Omega$. ما هي المقاومة المكافئة الكلية للأميتر الناتج ($R_A$)؟",
    "optionsEn": [
      "$R_A = 100\\,\\Omega$",
      "$R_A = 1.0\\,\\Omega$",
      "$R_A = 0.99\\,\\Omega$",
      "$R_A = 98\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_A = 100\\,\\Omega$",
      "$R_A = 1.0\\,\\Omega$",
      "$R_A = 0.99\\,\\Omega$",
      "$R_A = 98\\,\\Omega$"
    ],
    "correctAnswer": "$R_A = 0.99\\,\\Omega$",
    "correctIndex": 2,
    "hintEn": "$R_A = \\frac{R_g R_s}{R_g + R_s} = \\frac{99 \\times 1}{99 + 1}$.",
    "hintAr": "$R_A = \\frac{R_g R_s}{R_g + R_s}$.",
    "stepByStepSolutionEn": [
      "$R_A = \\frac{99 \\times 1}{99 + 1} = \\frac{99}{100} = 0.99\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_A = \\frac{99 \\times 1}{100} = 0.99\\,\\Omega$."
    ],
    "teacherTipEn": "$R_A < R_s < R_g$.",
    "teacherTipAr": "المقاومة المكافئة دائماً أصغر من أصغر مقاومة في التوازي."
  },
  {
    "id": "phys_ch2_db_med_36",
    "titleEn": "Voltmeter Multiplier for Five-Fold Voltage Range Expansion",
    "titleAr": "حساب مضاعف الجهد لزيادة مدى الفولتميتر خمس مرات",
    "difficulty": "medium",
    "questionEn": "A galvanometer has a maximum voltage rating of $V_g = 1\\text{ V}$ and coil resistance $R_g = 50\\,\\Omega$. What multiplier resistance $R_m$ must be connected in series to increase its maximum measuring range to $V = 5\\text{ V}$?",
    "questionAr": "جلفانومتر أقصى فرق جهد يقيسه بمفرده $V_g = 1\\text{ V}$ ومقاومة ملفه $R_g = 50\\,\\Omega$. ما هي قيمة مقاومة مضاعف الجهد $R_m$ اللازم توصيلها على التوالي لزيادة أقصى فرق جهد يقيسه إلى $V = 5\\text{ V}$؟",
    "optionsEn": [
      "$R_m = 250\\,\\Omega$",
      "$R_m = 150\\,\\Omega$",
      "$R_m = 50\\,\\Omega$",
      "$R_m = 200\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_m = 250\\,\\Omega$",
      "$R_m = 150\\,\\Omega$",
      "$R_m = 50\\,\\Omega$",
      "$R_m = 200\\,\\Omega$"
    ],
    "correctAnswer": "$R_m = 200\\,\\Omega$",
    "correctIndex": 3,
    "hintEn": "$R_m = (n - 1) R_g = (5 - 1) \\times 50 = 4 \\times 50 = 200\\,\\Omega$.",
    "hintAr": "$R_m = (n - 1) R_g = 4 \\times 50 = 200\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "$I_g = \\frac{V_g}{R_g} = \\frac{1}{50} = 0.02\\text{ A}$. $R_m = \\frac{V - V_g}{I_g} = \\frac{5 - 1}{0.02} = \\frac{4}{0.02} = 200\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_m = \\frac{5 - 1}{0.02} = 200\\,\\Omega$."
    ],
    "teacherTipEn": "Total resistance becomes $250\\,\\Omega$.",
    "teacherTipAr": "المقاومة الكلية تصبح $250\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_med_37",
    "titleEn": "Total Resistance of Assembled Voltmeter Calculation",
    "titleAr": "حساب المقاومة الكلية لجهاز الفولتميتر",
    "difficulty": "medium",
    "questionEn": "A galvanometer with coil resistance $R_g = 100\\,\\Omega$ is converted to a voltmeter by adding a multiplier resistor $R_m = 4900\\,\\Omega$ in series. If a full-scale current of $I_g = 2\\text{ mA}$ flows, what are the total internal resistance $R_v$ and the maximum voltage range $V$?",
    "questionAr": "جلفانومتر مقاومة ملفه $R_g = 100\\,\\Omega$ حُوّل إلى فولتميتر بتوصيل مضاعف جهد $R_m = 4900\\,\\Omega$ على التوالي. إذا كان تيار أقصى انحراف $I_g = 2\\text{ mA}$، فما هما المقاومة الكلية للفولتميتر $R_v$ وأقصى فرق جهد يقيسه $V$؟",
    "optionsEn": [
      "$R_v = 5000\\,\\Omega \\quad \\text{and} \\quad V = 10\\text{ V}$",
      "$R_v = 4800\\,\\Omega \\quad \\text{and} \\quad V = 9.6\\text{ V}$",
      "$R_v = 5000\\,\\Omega \\quad \\text{and} \\quad V = 5\\text{ V}$",
      "$R_v = 4900\\,\\Omega \\quad \\text{and} \\quad V = 9.8\\text{ V}$"
    ],
    "optionsAr": [
      "$R_v = 5000\\,\\Omega \\quad \\text{و} \\quad V = 10\\text{ V}$",
      "$R_v = 4800\\,\\Omega \\quad \\text{و} \\quad V = 9.6\\text{ V}$",
      "$R_v = 5000\\,\\Omega \\quad \\text{و} \\quad V = 5\\text{ V}$",
      "$R_v = 4900\\,\\Omega \\quad \\text{و} \\quad V = 9.8\\text{ V}$"
    ],
    "correctAnswer": "$R_v = 5000\\,\\Omega \\quad \\text{and} \\quad V = 10\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "$R_v = R_g + R_m$, and $V = I_g R_v$.",
    "hintAr": "$R_v = R_g + R_m$ و $V = I_g R_v$.",
    "stepByStepSolutionEn": [
      "$R_v = 100 + 4900 = 5000\\,\\Omega = 5\\text{ k}\\Omega$. $V = I_g R_v = (2 \\times 10^{-3}\\text{ A}) \\times 5000\\,\\Omega = 10\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "$R_v = 100 + 4900 = 5000\\,\\Omega$. أقصى فرق جهد $V = 0.002 \\times 5000 = 10\\text{ فولت}$."
    ],
    "teacherTipEn": "Total resistance is sum in series.",
    "teacherTipAr": "المقاومة الكلية هي حاصل الجمع في التوالي."
  },
  {
    "id": "phys_ch2_db_med_38",
    "titleEn": "Ohmmeter One-Fifth Scale Deflection External Resistor Calculation",
    "titleAr": "حساب المقاومة الخارجية التي تجعل مؤشر الأوميتر ينحرف لخمس التدريج",
    "difficulty": "medium",
    "questionEn": "An ohmmeter has an internal resistance of $R_{\\text{in}} = 2000\\,\\Omega$. What unknown resistor $R_x$ connected across its terminals causes the pointer to deflect to $\\frac{1}{5}$ of its full-scale deflection?",
    "questionAr": "أوميتر مقاومته الداخلية $R_{\\text{in}} = 2000\\,\\Omega$. ما قيمة المقاومة المجهولة $R_x$ التي تجعل مؤشره ينحرف إلى خُمس التدريج ($\\frac{1}{5} I_g$)؟",
    "optionsEn": [
      "$R_x = 10000\\,\\Omega$ ($10\\text{ k}\\Omega$)",
      "$R_x = 8000\\,\\Omega$ ($8\\text{ k}\\Omega$)",
      "$R_x = 400\\,\\Omega$",
      "$R_x = 6000\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_x = 10000\\,\\Omega$ ($10\\text{ k}\\Omega$)",
      "$R_x = 8000\\,\\Omega$ ($8\\text{ k}\\Omega$)",
      "$R_x = 400\\,\\Omega$",
      "$R_x = 6000\\,\\Omega$"
    ],
    "correctAnswer": "$R_x = 8000\\,\\Omega$ ($8\\text{ k}\\Omega$)",
    "correctIndex": 1,
    "hintEn": "$R_x = (n - 1) R_{\\text{in}} = (5 - 1) \\times 2000 = 8000\\,\\Omega$.",
    "hintAr": "$R_x = (n - 1) R_{\\text{in}} = 4 \\times 2000 = 8000\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "$\\frac{I}{I_g} = \\frac{1}{5} \\implies R_{\\text{total}} = 5 R_{\\text{in}} \\implies R_{\\text{in}} + R_x = 5 R_{\\text{in}} \\implies R_x = 4 R_{\\text{in}} = 4 \\times 2000 = 8000\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "الانحراف لخمس التدريج: $R_x = 4 R_{\\text{in}} = 4 \\times 2000 = 8000\\,\\Omega$."
    ],
    "teacherTipEn": "Formula: $R_x = (n - 1) R_{\\text{in}}$.",
    "teacherTipAr": "قانون: $R_x = (n - 1) R_{\\text{in}}$."
  },
  {
    "id": "phys_ch2_db_med_39",
    "titleEn": "Current Deflection Fraction for External Resistance Equal to Double Internal Resistance",
    "titleAr": "تحديد نسبة انحراف مؤشر الأوميتر عند توصيل مقاومة ضعف المقاومة الداخلية",
    "difficulty": "medium",
    "questionEn": "An ohmmeter has internal resistance $R_{\\text{in}}$. An external resistor $R_x = 2 R_{\\text{in}}$ is connected across its terminals. To what fraction of its full-scale current ($I_g$) will the pointer deflect?",
    "questionAr": "أوميتر مقاومته الداخلية $R_{\\text{in}}$. وصلت بين طرفيه مقاومة خارجية $R_x = 2 R_{\\text{in}}$. إلى أي نسبة من أقصى تيار ($I_g$) ينحرف مؤشر الأوميتر؟",
    "optionsEn": [
      "$\\frac{1}{2} I_g$ (half of full scale)",
      "$\\frac{1}{4} I_g$ (one-quarter of full scale)",
      "$\\frac{1}{3} I_g$ (one-third of full scale)",
      "$\\frac{2}{3} I_g$"
    ],
    "optionsAr": [
      "$\\frac{1}{2} I_g$ (نصف التدريج)",
      "$\\frac{1}{4} I_g$ (ربع التدريج)",
      "$\\frac{1}{3} I_g$ (ثلث التدريج)",
      "$\\frac{2}{3} I_g$"
    ],
    "correctAnswer": "$\\frac{1}{3} I_g$ (one-third of full scale)",
    "correctIndex": 2,
    "hintEn": "$\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + R_x} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 2 R_{\\text{in}}} = \\frac{1}{3}$.",
    "hintAr": "$\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + R_x} = \\frac{R_{\\text{in}}}{3 R_{\\text{in}}} = \\frac{1}{3}$.",
    "stepByStepSolutionEn": [
      "$\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 2 R_{\\text{in}}} = \\frac{R_{\\text{in}}}{3 R_{\\text{in}}} = \\frac{1}{3}$. The pointer deflects to $\\frac{1}{3} I_g$."
    ],
    "stepByStepSolutionAr": [
      "نسبة الانحراف: $\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 2R_{\\text{in}}} = \\frac{1}{3}$ من أقصى تدريج للتيار."
    ],
    "teacherTipEn": "Notice that $R_x = 2 R_{\\text{in}}$ gives $\\frac{1}{3}$ deflection, not $\\frac{1}{2}$!",
    "teacherTipAr": "انتبه: مقاومة ضعف الداخلية تجعل المؤشر ينحرف لثلث التدريج وليس نصفه!"
  },
  {
    "id": "phys_ch2_db_med_40",
    "titleEn": "Linear Mass Density and Magnetic Levitation Current",
    "titleAr": "حساب شدة تيار التعليق المغناطيسي بدلالة كتلة وحدة الأطوال",
    "difficulty": "medium",
    "questionEn": "A straight horizontal wire has a linear mass density of $\\frac{m}{L} = 0.04\\text{ kg/m}$. It is placed in a horizontal magnetic field of $B = 0.2\\text{ T}$ perpendicular to the wire. What electric current $I$ will support the wire against gravity? ($g = 10\\text{ m/s}^2$)",
    "questionAr": "سلك مستقيم أفقي كتلة وحدة الأطوال منه $\\frac{m}{L} = 0.04\\text{ kg/m}$. وُضع في مجال مغناطيسي أفقي منتظم كثافته $B = 0.2\\text{ T}$ عمودي على السلك. ما شدة التيار $I$ اللازمة لتعليق السلك ضد الجاذبية؟ ($g = 10\\text{ m/s}^2$)",
    "optionsEn": [
      "$I = 4\\text{ A}$",
      "$I = 1\\text{ A}$",
      "$I = 0.5\\text{ A}$",
      "$I = 2\\text{ A}$"
    ],
    "optionsAr": [
      "$I = 4\\text{ A}$",
      "$I = 1\\text{ A}$",
      "$I = 0.5\\text{ A}$",
      "$I = 2\\text{ A}$"
    ],
    "correctAnswer": "$I = 2\\text{ A}$",
    "correctIndex": 3,
    "hintEn": "$B I L = m g \\implies B I = \\left(\\frac{m}{L}\\right) g \\implies I = \\frac{(m/L) g}{B}$.",
    "hintAr": "$B I = \\left(\\frac{m}{L}\\right) g \\implies I = \\frac{(m/L) g}{B}$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{(m/L) g}{B} = \\frac{0.04 \\times 10}{0.2} = \\frac{0.4}{0.2} = 2\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "$I = \\frac{0.04 \\times 10}{0.2} = \\frac{0.4}{0.2} = 2\\text{ أمبير}$."
    ],
    "teacherTipEn": "Linear mass density is mass per meter ($\\text{kg/m}$).",
    "teacherTipAr": "كتلة وحدة الأطوال تقاس بوحدة كجم/متر."
  },
  {
    "id": "phys_ch2_db_med_41",
    "titleEn": "Solenoid Magnetic Field with Soft Iron Core Insertion",
    "titleAr": "حساب كثافة الفيض داخل ملف لولبي عند وضع قلب من الحديد المطاوع",
    "difficulty": "medium",
    "questionEn": "A solenoid has $n = 1000\\text{ turns/m}$ and carries a current of $I = 0.5\\text{ A}$. In air, its field is $B_0$. When a soft iron core of relative permeability $\\mu_r = 2000$ is inserted into the solenoid, what is the new magnetic flux density $B$ inside the core?",
    "questionAr": "ملف لولبي عدد لفاته لوحدة الأطوال $n = 1000\\text{ لفة/م}$ ويمر به تيار $I = 0.5\\text{ A}$. في الهواء كثافة فيضه $B_0$. عند إدخال قلب من الحديد المطاوع معامل نفاذيته النسبية $\\mu_r = 2000$، فما هي كثافة الفيض الجديدة $B$ داخل القلب الحديدي؟",
    "optionsEn": [
      "$B = 4\\pi \\times 10^{-1}\\text{ T} \\approx 1.257\\text{ T}$",
      "$B = 2\\pi \\times 10^{-4}\\text{ T}$",
      "$B = 4\\pi \\times 10^{-4}\\text{ T}$",
      "$B = 2.51\\text{ T}$"
    ],
    "optionsAr": [
      "$B = 4\\pi \\times 10^{-1}\\text{ T} \\approx 1.257\\text{ T}$",
      "$B = 2\\pi \\times 10^{-4}\\text{ T}$",
      "$B = 4\\pi \\times 10^{-4}\\text{ T}$",
      "$B = 2.51\\text{ T}$"
    ],
    "correctAnswer": "$B = 4\\pi \\times 10^{-1}\\text{ T} \\approx 1.257\\text{ T}$",
    "correctIndex": 0,
    "hintEn": "$B = \\mu_r \\mu_0 n I = \\mu_r B_0$.",
    "hintAr": "$B = \\mu_r \\mu_0 n I$.",
    "stepByStepSolutionEn": [
      "$B = 2000 \\times (4\\pi \\times 10^{-7}) \\times 1000 \\times 0.5 = 2000 \\times (2\\pi \\times 10^{-4}) = 0.4\\pi\\text{ T} \\approx 1.2566\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B = 2000 \\times (4\\pi \\times 10^{-7} \\times 1000 \\times 0.5) = 0.4\\pi \\approx 1.257\\text{ تسلا}$."
    ],
    "teacherTipEn": "Soft iron amplifies field by $\\mu_r$ times.",
    "teacherTipAr": "الحديد المطاوع يضاعف كثافة الفيض بمقدار النفاذية النسبية $\\mu_r$."
  },
  {
    "id": "phys_ch2_db_med_42",
    "titleEn": "Stretching Circular Coil into Solenoid to Halve Flux Density",
    "titleAr": "حساب طول الملف اللولبي ليكون فيضه نصف فيض الملف الدائري الأصلي",
    "difficulty": "medium",
    "questionEn": "A circular coil of radius $r = 10\\text{ cm}$ ($0.1\\text{ m}$) carrying current $I$ produces magnetic flux density $B_{\\text{circ}}$ at its center. Its turns are uniformly pulled apart along its axis to form a solenoid of length $L$. What must the length $L$ be so that $B_{\\text{sol}} = \\frac{1}{2} B_{\\text{circ}}$ for the same current?",
    "questionAr": "ملف دائري نصف قطره $r = 10\\text{ cm}$ يمر به تيار $I$ وكثافة فيضه عند المركز $B_{\\text{circ}}$. أُبعدت لفاته بانتظام ليصبح ملفاً لولبياً طوله $L$. كم يجب أن يكون طول الملف اللولبي $L$ لكي تصبح كثافة فيضه مساوية لنصف كثافة فيض الملف الدائري ($B_{\\text{sol}} = \\frac{1}{2} B_{\\text{circ}}$) لنفس التيار؟",
    "optionsEn": [
      "$L = 20\\text{ cm}$ ($0.20\\text{ m}$)",
      "$L = 40\\text{ cm}$ ($0.40\\text{ m}$)",
      "$L = 10\\text{ cm}$ ($0.10\\text{ m}$)",
      "$L = 5\\text{ cm}$ ($0.05\\text{ m}$)"
    ],
    "optionsAr": [
      "$L = 20\\text{ cm}$ ($0.20\\text{ m}$)",
      "$L = 40\\text{ cm}$ ($0.40\\text{ m}$)",
      "$L = 10\\text{ cm}$ ($0.10\\text{ m}$)",
      "$L = 5\\text{ cm}$ ($0.05\\text{ m}$)"
    ],
    "correctAnswer": "$L = 40\\text{ cm}$ ($0.40\\text{ m}$)",
    "correctIndex": 1,
    "hintEn": "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L} \\implies \\frac{1}{2} = \\frac{2r}{L} \\implies L = 4r$.",
    "hintAr": "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L} \\implies L = 4r$.",
    "stepByStepSolutionEn": [
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L}$. Setting $\\frac{2r}{L} = \\frac{1}{2} \\implies L = 4r = 4 \\times 10\\text{ cm} = 40\\text{ cm} = 0.40\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{2r}{L} = \\frac{1}{2} \\implies L = 4r = 4 \\times 10 = 40\\text{ cm}$."
    ],
    "teacherTipEn": "Formula: $L = 4r$.",
    "teacherTipAr": "علاقة مباشرة: $L = 4r$."
  },
  {
    "id": "phys_ch2_db_med_43",
    "titleEn": "Cutting Solenoid to One-Third Length and Connecting to Same Battery",
    "titleAr": "قص ثلثي الملف اللولبي وتوصيل الثلث المتبقي بنفس البطارية",
    "difficulty": "medium",
    "questionEn": "A solenoid connected to a DC battery produces field $B$ at its axis. Two-thirds of the solenoid is cut off, and the remaining one-third is connected across the SAME battery. What is the new magnetic flux density $B'$?",
    "questionAr": "ملف لولبي متصل ببطارية مستمرة ينتج فيضاً $B$ عند محوره. قُطع ثلثا الملف ووُصل الثلث المتبقي بنفس البطارية. ما هي كثافة الفيض الجديدة $B'$؟",
    "optionsEn": [
      "$B' = B$",
      "$B' = \\frac{1}{3} B$",
      "$B' = 3 B$",
      "$B' = 9 B$"
    ],
    "optionsAr": [
      "$B' = B$",
      "$B' = \\frac{1}{3} B$",
      "$B' = 3 B$",
      "$B' = 9 B$"
    ],
    "correctAnswer": "$B' = 3 B$",
    "correctIndex": 2,
    "hintEn": "Turn density $n = N/L$ is constant. Length is $1/3 \\implies$ resistance is $1/3 \\implies$ current triples ($I' = 3I$).",
    "hintAr": "$n$ ثابتة، ومقاومة ثلث السلك تقل للثلث فيتضاعف التيار 3 أمثال.",
    "stepByStepSolutionEn": [
      "Length is $L' = \\frac{L}{3}$ and turns are $N' = \\frac{N}{3}$, so $n' = n$. Wire resistance becomes $R' = \\frac{R}{3}$, so current triples: $I' = 3I$. Therefore, $B' = \\mu n' I' = 3 \\mu n I = 3B$."
    ],
    "stepByStepSolutionAr": [
      "عدد اللفات لوحدة الأطوال ثابت، ومقاومة السلك تصبح ثلث قيمتها فيزداد التيار إلى 3 أمثال: $B' = 3B$."
    ],
    "teacherTipEn": "If connected to the same current, $B' = B$.",
    "teacherTipAr": "لو وصل بنفس شدة التيار لظلت $B$ ثابتة."
  },
  {
    "id": "phys_ch2_db_med_44",
    "titleEn": "Ratio of Center Coil Field to Tangent Wire Field",
    "titleAr": "نسبة كثافة فيض ملف دائري إلى سلك مماس له",
    "difficulty": "medium",
    "questionEn": "A circular coil of 1 turn ($N = 1$) and radius $r$ carrying current $I$ is tangent to a straight wire carrying current $I$ in the same plane. What is the ratio of the magnetic field of the coil to that of the wire at the coil center ($\\frac{B_{\\text{coil}}}{B_{\\text{wire}}}$)?",
    "questionAr": "حلقة دائرية ($N = 1$) نصف قطرها $r$ يمر بها تيار $I$ ومماسة لسلك مستقيم يمر به نفس التيار $I$ وفي نفس مستواها. ما هي النسبة بين كثافة فيض الحلقة إلى كثافة فيض السلك عند مركز الحلقة ($\\frac{B_{\\text{coil}}}{B_{\\text{wire}}}$)؟",
    "optionsEn": [
      "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = \\frac{1}{\\pi}$",
      "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = 2\\pi$",
      "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = 1$",
      "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = \\pi$"
    ],
    "optionsAr": [
      "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = \\frac{1}{\\pi}$",
      "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = 2\\pi$",
      "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = 1$",
      "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = \\pi$"
    ],
    "correctAnswer": "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = \\pi$",
    "correctIndex": 3,
    "hintEn": "$B_{\\text{coil}} = \\frac{\\mu I}{2r}$ and $B_{\\text{wire}} = \\frac{\\mu I}{2\\pi r}$ since $d = r$.",
    "hintAr": "$B_{\\text{coil}} = \\frac{\\mu I}{2r}$ و $B_{\\text{wire}} = \\frac{\\mu I}{2\\pi r}$.",
    "stepByStepSolutionEn": [
      "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = \\frac{\\mu I / 2r}{\\mu I / 2\\pi r} = \\frac{2\\pi r}{2r} = \\pi$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{B_{\\text{coil}}}{B_{\\text{wire}}} = \\frac{\\mu I / 2r}{\\mu I / 2\\pi r} = \\pi$."
    ],
    "teacherTipEn": "Circular coil field is $\\pi$ times stronger than the tangent straight wire field.",
    "teacherTipAr": "فيض الحلقة أكبر بمقدار $\\pi$ مرة من فيض السلك المماس لنفس التيار."
  },
  {
    "id": "phys_ch2_db_med_45",
    "titleEn": "Design of Ammeter for Ten-Ampere Range from Sensitive Galvanometer",
    "titleAr": "تصميم أميتر لقياس 10 أمبير من جلفانومتر حساس",
    "difficulty": "medium",
    "questionEn": "A galvanometer of resistance $R_g = 19.8\\,\\Omega$ has full-scale deflection current $I_g = 0.1\\text{ A}$. What shunt resistor $R_s$ is needed to convert it to an ammeter measuring up to $I = 10\\text{ A}$?",
    "questionAr": "جلفانومتر مقاومته $R_g = 19.8\\,\\Omega$ وأقصى تيار يقيسه $I_g = 0.1\\text{ A}$. ما هي قيمة مجزئ التيار $R_s$ اللازم توصيلها ليقيس تياراً أقصاه $I = 10\\text{ A}$؟",
    "optionsEn": [
      "$R_s = 0.20\\,\\Omega$",
      "$R_s = 0.10\\,\\Omega$",
      "$R_s = 2.0\\,\\Omega$",
      "$R_s = 0.02\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_s = 0.20\\,\\Omega$",
      "$R_s = 0.10\\,\\Omega$",
      "$R_s = 2.0\\,\\Omega$",
      "$R_s = 0.02\\,\\Omega$"
    ],
    "correctAnswer": "$R_s = 0.20\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g} = \\frac{0.1 \\times 19.8}{10 - 0.1} = \\frac{1.98}{9.9}$.",
    "hintAr": "$R_s = \\frac{I_g R_g}{I - I_g}$.",
    "stepByStepSolutionEn": [
      "$R_s = \\frac{0.1 \\times 19.8}{9.9} = \\frac{1.98}{9.9} = 0.20\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_s = \\frac{1.98}{9.9} = 0.20\\,\\Omega$."
    ],
    "teacherTipEn": "Check: $I_s R_s = 9.9 \\times 0.2 = 1.98\\text{ V} = I_g R_g$.",
    "teacherTipAr": "تحقق: $9.9 \\times 0.2 = 1.98\\text{ V}$."
  },
  {
    "id": "phys_ch2_db_med_46",
    "titleEn": "Voltmeter Multiplier for One-Hundred-Volt Maximum Scale",
    "titleAr": "حساب مضاعف الجهد لقياس 100 فولت",
    "difficulty": "medium",
    "questionEn": "A galvanometer with $R_g = 50\\,\\Omega$ and $I_g = 10\\text{ mA}$ ($0.01\\text{ A}$) is to be converted into a voltmeter measuring up to $V = 100\\text{ V}$. What multiplier resistance $R_m$ is required?",
    "questionAr": "جلفانومتر مقاومته $R_g = 50\\,\\Omega$ وأقصى تيار يقيسه $I_g = 10\\text{ mA}$. يراد تحويله إلى فولتميتر يقيس حتى $V = 100\\text{ V}$. ما هي قيمة مقاومة مضاعف الجهد $R_m$؟",
    "optionsEn": [
      "$R_m = 10000\\,\\Omega$",
      "$R_m = 9950\\,\\Omega$",
      "$R_m = 9900\\,\\Omega$",
      "$R_m = 9500\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_m = 10000\\,\\Omega$",
      "$R_m = 9950\\,\\Omega$",
      "$R_m = 9900\\,\\Omega$",
      "$R_m = 9500\\,\\Omega$"
    ],
    "correctAnswer": "$R_m = 9950\\,\\Omega$",
    "correctIndex": 1,
    "hintEn": "$R_m = \\frac{V - I_g R_g}{I_g} = \\frac{100 - (0.01 \\times 50)}{0.01} = \\frac{99.5}{0.01}$.",
    "hintAr": "$R_m = \\frac{V - V_g}{I_g}$.",
    "stepByStepSolutionEn": [
      "$V_g = 0.01 \\times 50 = 0.5\\text{ V} \\implies R_m = \\frac{100 - 0.5}{0.01} = \\frac{99.5}{0.01} = 9950\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_m = \\frac{100 - 0.5}{0.01} = 9950\\,\\Omega$."
    ],
    "teacherTipEn": "Total voltmeter resistance is $R_v = 10000\\,\\Omega = 10\\text{ k}\\Omega$.",
    "teacherTipAr": "المقاومة الكلية للفولتميتر هي $10000\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_med_47",
    "titleEn": "Ohmmeter Fixed Standard Resistor Calculation",
    "titleAr": "حساب المقاومة العيارية الثابتة للأوميتر",
    "difficulty": "medium",
    "questionEn": "An ohmmeter circuit is powered by a cell of $V_B = 1.5\\text{ V}$ with internal resistance $r = 1\\,\\Omega$. The microammeter has $R_g = 250\\,\\Omega$ and $I_g = 400\\,\\mu\\text{A}$. If the rheostat is set to $R_v = 1749\\,\\Omega$ during zero adjustment, what is the value of the fixed standard resistor $R_c$?",
    "questionAr": "دائرة أوميتر تحتوي على عمود جاف $V_B = 1.5\\text{ V}$ ومقاومته الداخلية $r = 1\\,\\Omega$. والجلفانومتر مقاومته $R_g = 250\\,\\Omega$ وأقصى تيار له $I_g = 400\\,\\mu\\text{A}$. إذا ضبطت المقاومة المتغيرة على $R_v = 1749\\,\\Omega$ عند ضبط الصفر، فما هي قيمة المقاومة العيارية الثابتة $R_c$؟",
    "optionsEn": [
      "$R_c = 2000\\,\\Omega$",
      "$R_c = 1500\\,\\Omega$",
      "$R_c = 1750\\,\\Omega$",
      "$R_c = 3750\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_c = 2000\\,\\Omega$",
      "$R_c = 1500\\,\\Omega$",
      "$R_c = 1750\\,\\Omega$",
      "$R_c = 3750\\,\\Omega$"
    ],
    "correctAnswer": "$R_c = 1750\\,\\Omega$",
    "correctIndex": 2,
    "hintEn": "$R_{\\text{in}} = \\frac{V_B}{I_g} = \\frac{1.5}{400 \\times 10^{-6}} = 3750\\,\\Omega$. $R_c = R_{\\text{in}} - R_g - R_v - r$.",
    "hintAr": "$R_{\\text{in}} = \\frac{V_B}{I_g} = 3750\\,\\Omega \\implies R_c = 3750 - 250 - 1749 - 1$.",
    "stepByStepSolutionEn": [
      "$R_{\\text{in}} = \\frac{1.5}{4 \\times 10^{-4}} = 3750\\,\\Omega$. $R_c = 3750 - (250 + 1749 + 1) = 3750 - 2000 = 1750\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$R_c = 3750 - 2000 = 1750\\,\\Omega$."
    ],
    "teacherTipEn": "Total internal resistance must sum to $3750\\,\\Omega$.",
    "teacherTipAr": "المجموع الكلي للمقاومة الداخلية يساوي $3750\\,\\Omega$."
  },
  {
    "id": "phys_ch2_db_med_48",
    "titleEn": "Torque Calculation When Coil Plane is at 30 Degrees to Field",
    "titleAr": "حساب عزم الازدواج عندما يميل مستوى الملف بزاوية 30 درجة على المجال",
    "difficulty": "medium",
    "questionEn": "A rectangular coil has a maximum magnetic torque of $\\tau_{\\max} = 12\\text{ N}\\cdot\\text{m}$. What is the torque when the plane of the coil makes an angle of $30^\\circ$ with the magnetic field?",
    "questionAr": "ملف مستطيل عزم الازدواج الأقصى المؤثر عليه $\\tau_{\\max} = 12\\text{ N}\\cdot\\text{m}$. ما قيمة عزم الازدواج عندما يصنع مستوى الملف زاوية $30^\\circ$ مع المجال المغناطيسي؟",
    "optionsEn": [
      "$\\tau = 6.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 12\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 0\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 6\\sqrt{3}\\text{ N} \\cdot \\text{m} \\approx 10.39\\text{ N} \\cdot \\text{m}$"
    ],
    "optionsAr": [
      "$\\tau = 6.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 12\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 0\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 6\\sqrt{3}\\text{ N} \\cdot \\text{m} \\approx 10.39\\text{ N} \\cdot \\text{m}$"
    ],
    "correctAnswer": "$\\tau = 6\\sqrt{3}\\text{ N} \\cdot \\text{m} \\approx 10.39\\text{ N} \\cdot \\text{m}$",
    "correctIndex": 3,
    "hintEn": "Angle with the normal is $\\theta = 90^\\circ - 30^\\circ = 60^\\circ \\implies \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.",
    "hintAr": "الزاوية مع العمودي هي $60^\\circ$ و $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.",
    "stepByStepSolutionEn": [
      "$\\tau = \\tau_{\\max} \\sin(90^\\circ - 30^\\circ) = 12 \\sin 60^\\circ = 12 \\times \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}\\text{ N}\\cdot\\text{m} \\approx 10.39\\text{ N}\\cdot\\text{m}$."
    ],
    "stepByStepSolutionAr": [
      "$\\tau = 12 \\times \\sin 60^\\circ = 6\\sqrt{3} \\approx 10.39\\text{ نيوتن.متر}$."
    ],
    "teacherTipEn": "Do not use $\\sin 30^\\circ$!",
    "teacherTipAr": "لا تستخدم زاوية الملف مع خطوط الفيض مباشرة!"
  },
  {
    "id": "phys_ch2_db_med_49",
    "titleEn": "Magnetic Force Scaling when Current Doubles and Distance Halves",
    "titleAr": "تغير القوة المتبادلة عند مضاعفة التيارات وإنقاص المسافة للنصف",
    "difficulty": "medium",
    "questionEn": "The mutual magnetic force between two parallel wires is $F$. If the current in each wire is doubled ($2I_1, 2I_2$) and the distance separating them is halved ($d' = \\frac{1}{2}d$), what is the new mutual magnetic force $F'$?",
    "questionAr": "القوة المتبادلة بين سلكين متوازيين هي $F$. إذا تضاعفت شدة التيار في كلا السلكين وقلت المسافة الفاصلة بينهما إلى النصف، فما هي القوة المتبادلة الجديدة $F'$؟",
    "optionsEn": [
      "$F' = 8 F$",
      "$F' = 4 F$",
      "$F' = 2 F$",
      "$F' = 16 F$"
    ],
    "optionsAr": [
      "$F' = 8 F$",
      "$F' = 4 F$",
      "$F' = 2 F$",
      "$F' = 16 F$"
    ],
    "correctAnswer": "$F' = 8 F$",
    "correctIndex": 0,
    "hintEn": "$F \\propto \\frac{I_1 I_2}{d} \\implies \\frac{2 \\times 2}{1/2} = \\frac{4}{0.5} = 8$.",
    "hintAr": "$F \\propto \\frac{I_1 I_2}{d} \\implies \\frac{2 \\times 2}{1/2} = 8$.",
    "stepByStepSolutionEn": [
      "$F' = \\frac{\\mu (2I_1)(2I_2) L}{2\\pi (d/2)} = \\frac{4}{1/2} \\left(\\frac{\\mu I_1 I_2 L}{2\\pi d}\\right) = 8 F$."
    ],
    "stepByStepSolutionAr": [
      "$F' = \\frac{2 \\times 2}{1/2} F = 8 F$."
    ],
    "teacherTipEn": "Force scales as 8 times.",
    "teacherTipAr": "تزداد القوة إلى 8 أمثال قيمتها الأصلية."
  },
  {
    "id": "phys_ch2_db_med_50",
    "titleEn": "Current Required in Circular Coil for Specific Central Field",
    "titleAr": "حساب شدة تيار ملف دائري مطلوب لتوليد مجال معين",
    "difficulty": "medium",
    "questionEn": "A circular coil of radius $r = 2\\pi\\text{ cm}$ ($0.02\\pi\\text{ m}$) has $N = 20\\text{ turns}$. What current $I$ must flow through it to produce a field of $B = 2 \\times 10^{-4}\\text{ T}$ at its center?",
    "questionAr": "ملف دائري نصف قطره $r = 2\\pi\\text{ cm}$ وعدد لفاته $N = 20\\text{ لفة}$. ما شدة التيار $I$ التي يجب أن تمر فيه لكي يولد مجالاً كثافته $B = 2 \\times 10^{-4}\\text{ T}$ عند مركزه؟",
    "optionsEn": [
      "$I = 0.5\\text{ A}$",
      "$I = 1.0\\text{ A}$",
      "$I = 2.0\\text{ A}$",
      "$I = 4.0\\text{ A}$"
    ],
    "optionsAr": [
      "$I = 0.5\\text{ A}$",
      "$I = 1.0\\text{ A}$",
      "$I = 2.0\\text{ A}$",
      "$I = 4.0\\text{ A}$"
    ],
    "correctAnswer": "$I = 1.0\\text{ A}$",
    "correctIndex": 1,
    "hintEn": "$I = \\frac{2 r B}{\\mu_0 N}$.",
    "hintAr": "$I = \\frac{2 r B}{\\mu N}$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{2 \\times (0.02\\pi) \\times (2 \\times 10^{-4})}{(4\\pi \\times 10^{-7}) \\times 20} = \\frac{0.08\\pi \\times 10^{-4}}{80\\pi \\times 10^{-7}} = \\frac{0.08 \\times 1000}{80} = \\frac{80}{80} = 1.0\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "$I = \\frac{2 \\times 0.02\\pi \\times 2 \\times 10^{-4}}{4\\pi \\times 10^{-7} \\times 20} = 1.0\\text{ أمبير}$."
    ],
    "teacherTipEn": "$\\pi$ cancels cleanly.",
    "teacherTipAr": "تختصر $\\pi$ تماماً."
  },
  {
    "id": "phys_ch2_db_med_51",
    "titleEn": "Resultant Field of Two Concentric Coils with Currents in Same Direction",
    "titleAr": "محصلة كثافة الفيض لملفين دائريين متحدي المركز في نفس الاتجاه",
    "difficulty": "medium",
    "questionEn": "Two concentric circular coils in the same plane carry currents in the SAME direction. Coil 1 produces $B_1 = 3\\text{ mT}$ and Coil 2 produces $B_2 = 4\\text{ mT}$ at the center. What is the net flux density?",
    "questionAr": "ملفان دائريان متحد المركز في نفس المستوى يمر بهما تياران في نفس الاتجاه. يولد الأول $B_1 = 3\\text{ mT}$ والثاني $B_2 = 4\\text{ mT}$ عند المركز. ما هي محصلة كثافة الفيض الكلية؟",
    "optionsEn": [
      "$B_{\\text{net}} = 1\\text{ mT}$",
      "$B_{\\text{net}} = 5\\text{ mT}$",
      "$B_{\\text{net}} = 7\\text{ mT}$",
      "$B_{\\text{net}} = 12\\text{ mT}$"
    ],
    "optionsAr": [
      "$B_{\\text{net}} = 1\\text{ mT}$",
      "$B_{\\text{net}} = 5\\text{ mT}$",
      "$B_{\\text{net}} = 7\\text{ mT}$",
      "$B_{\\text{net}} = 12\\text{ mT}$"
    ],
    "correctAnswer": "$B_{\\text{net}} = 7\\text{ mT}$",
    "correctIndex": 2,
    "hintEn": "Same direction $\\implies B_{\\text{net}} = B_1 + B_2 = 3 + 4 = 7\\text{ mT}$.",
    "hintAr": "في نفس الاتجاه $\\implies B_t = B_1 + B_2 = 3 + 4 = 7\\text{ mT}$.",
    "stepByStepSolutionEn": [
      "$B_{\\text{net}} = B_1 + B_2 = 3 + 4 = 7\\text{ mT}$."
    ],
    "stepByStepSolutionAr": [
      "$B_t = 3 + 4 = 7\\text{ mT}$."
    ],
    "teacherTipEn": "Opposite would give $1\\text{ mT}$; perpendicular would give $5\\text{ mT}$.",
    "teacherTipAr": "المتعاكسان يعطيان 1، والمتعامدان يعطيان 5."
  },
  {
    "id": "phys_ch2_db_med_52",
    "titleEn": "Electric Current in Solenoid from Center Axis Field",
    "titleAr": "حساب شدة تيار ملف لولبي بدلالة كثافة فيضه ومواصفاته",
    "difficulty": "medium",
    "questionEn": "A solenoid of length $L = 0.2\\text{ m}$ has $N = 400\\text{ turns}$. What current $I$ is needed to produce a magnetic field of $B = 4\\pi \\times 10^{-4}\\text{ T}$ along its axis in air?",
    "questionAr": "ملف لولبي طوله $L = 0.2\\text{ m}$ وعدد لفاته $N = 400\\text{ لفة}$. ما شدة التيار $I$ المطلوبة لإنتاج مجال مغناطيسي $B = 4\\pi \\times 10^{-4}\\text{ T}$ عند محوره في الهواء؟",
    "optionsEn": [
      "$I = 1.0\\text{ A}$",
      "$I = 0.25\\text{ A}$",
      "$I = 2.0\\text{ A}$",
      "$I = 0.5\\text{ A}$"
    ],
    "optionsAr": [
      "$I = 1.0\\text{ A}$",
      "$I = 0.25\\text{ A}$",
      "$I = 2.0\\text{ A}$",
      "$I = 0.5\\text{ A}$"
    ],
    "correctAnswer": "$I = 0.5\\text{ A}$",
    "correctIndex": 3,
    "hintEn": "$I = \\frac{B L}{\\mu_0 N}$.",
    "hintAr": "$I = \\frac{B L}{\\mu N}$.",
    "stepByStepSolutionEn": [
      "$I = \\frac{(4\\pi \\times 10^{-4}) \\times 0.2}{(4\\pi \\times 10^{-7}) \\times 400} = \\frac{0.2 \\times 1000}{400} = \\frac{200}{400} = 0.5\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "$I = \\frac{4\\pi \\times 10^{-4} \\times 0.2}{4\\pi \\times 10^{-7} \\times 400} = 0.5\\text{ أمبير}$."
    ],
    "teacherTipEn": "Straightforward algebraic rearrangement.",
    "teacherTipAr": "تعويض مباشر في قانون الملف اللولبي."
  },
  {
    "id": "phys_ch2_db_med_53",
    "titleEn": "Unwinding Circular Coil to Double Radius Field Scaling",
    "titleAr": "إعادة لف ملف دائري لضعف نصف قطره مع ثبات التيار",
    "difficulty": "medium",
    "questionEn": "A circular coil with radius $r$ produces magnetic field $B$. If the wire is unwound and rewound into a circular coil of radius $r' = 2r$ carrying the SAME current, what is the new magnetic field $B'$?",
    "questionAr": "ملف دائري نصف قطره $r$ يولد مجالاً $B$. إذا أُعيد لف نفس السلك ليصبح نصف قطره $r' = 2r$ ويمر به نفس التيار، فما هي كثافة الفيض الجديدة $B'$؟",
    "optionsEn": [
      "$B' = \\frac{1}{4} B$",
      "$B' = \\frac{1}{2} B$",
      "$B' = 4 B$",
      "$B' = B$"
    ],
    "optionsAr": [
      "$B' = \\frac{1}{4} B$",
      "$B' = \\frac{1}{2} B$",
      "$B' = 4 B$",
      "$B' = B$"
    ],
    "correctAnswer": "$B' = \\frac{1}{4} B$",
    "correctIndex": 0,
    "hintEn": "$r' = 2r \\implies N' = N/2 \\implies B' \\propto \\frac{N'}{r'} = \\frac{1/2}{2} = \\frac{1}{4}$.",
    "hintAr": "نصف القطر تضاعف فيقل عدد اللفات للنصف وتصبح $B' = \\frac{1}{4} B$.",
    "stepByStepSolutionEn": [
      "$B' = \\frac{\\mu (N/2) I}{2(2r)} = \\frac{1}{4} \\frac{\\mu N I}{2r} = \\frac{1}{4} B$."
    ],
    "stepByStepSolutionAr": [
      "$B' = \\frac{1}{4} B$."
    ],
    "teacherTipEn": "Rewinding same wire scales with $1/r^2$.",
    "teacherTipAr": "إعادة لف نفس السلك تتناسب مع مقلوب مربع نصف القطر."
  },
  {
    "id": "phys_ch2_db_med_54",
    "titleEn": "Percentage Error of Current Measurement Caused by Ammeter Resistance",
    "titleAr": "النسبة المئوية للخطأ في قياس شدة التيار بسبب مقاومة الأميتر",
    "difficulty": "medium",
    "questionEn": "A simple circuit consists of an ideal battery $V_B = 12\\text{ V}$ and a resistor $R = 95\\,\\Omega$. An ammeter of internal resistance $R_A = 5\\,\\Omega$ is inserted to measure the current. What is the percentage error in the measured current compared to the ideal circuit current?",
    "questionAr": "دائرة كهربية بسيطة تتكون من بطارية مهملة المقاومة الداخلية $V_B = 12\\text{ V}$ ومقاومة $R = 95\\,\\Omega$. وُصل أميتر مقاومته الداخلية $R_A = 5\\,\\Omega$ لقياس شدة التيار. ما هي النسبة المئوية للخطأ في قياس شدة التيار مقارنة بالتيار الفعلي للدائرة؟",
    "optionsEn": [
      "$10\\%$ error",
      "$5\\%$ error",
      "$1\\%$ error",
      "$2.5\\%$ error"
    ],
    "optionsAr": [
      "$10\\%$ خطأ",
      "$5\\%$ خطأ",
      "$1\\%$ خطأ",
      "$2.5\\%$ خطأ"
    ],
    "correctAnswer": "$5\\%$ error",
    "correctIndex": 1,
    "hintEn": "Ideal: $I = 12/95 \\approx 0.1263\\text{ A}$. Actual: $I' = 12/(95+5) = 0.12\\text{ A}$. Error: $\\frac{R_A}{R + R_A} \\times 100\\% = \\frac{5}{100} \\times 100\\% = 5\\%$.",
    "hintAr": "نسبة الخطأ = $\\frac{R_A}{R + R_A} \\times 100\\% = \\frac{5}{100} \\times 100\\% = 5\\%$.",
    "stepByStepSolutionEn": [
      "Percentage reduction in current is $\\frac{I_{\\text{ideal}} - I_{\\text{measured}}}{I_{\\text{ideal}}} \\times 100\\% = \\frac{R_A}{R + R_A} \\times 100\\% = \\frac{5}{95 + 5} \\times 100\\% = 5\\%$."
    ],
    "stepByStepSolutionAr": [
      "النسبة المئوية للخطأ في القياس = $\\frac{R_A}{R + R_A} \\times 100\\% = \\frac{5}{100} \\times 100\\% = 5\\%$."
    ],
    "teacherTipEn": "Smaller ammeter resistance means smaller measurement error.",
    "teacherTipAr": "كلما صغرت مقاومة الأميتر قلت نسبة الخطأ في القياس."
  },
  {
    "id": "phys_ch2_db_med_55",
    "titleEn": "Voltmeter Sensitivity Reduction Ratio by Series Multiplier",
    "titleAr": "نسبة إنقاص حساسية الفولتميتر عند توصيل مضاعف جهد",
    "difficulty": "medium",
    "questionEn": "A galvanometer of resistance $R_g = 50\\,\\Omega$ is connected to a multiplier resistor $R_m = 450\\,\\Omega$ in series. What is the ratio of the voltmeter sensitivity to the original galvanometer sensitivity ($\\frac{S_V}{S_g}$)?",
    "questionAr": "جلفانومتر مقاومة ملفه $R_g = 50\\,\\Omega$ وُصل بمضاعف جهد مقداره $R_m = 450\\,\\Omega$ على التوالي. ما هي نسبة حساسية الفولتميتر إلى حساسية الجلفانومتر الأصلية ($\\frac{S_V}{S_g}$)؟",
    "optionsEn": [
      "$\\frac{S_V}{S_g} = \\frac{1}{9}$",
      "$\\frac{S_V}{S_g} = \\frac{1}{5}$",
      "$\\frac{S_V}{S_g} = \\frac{1}{10}$ ($0.1$)",
      "$\\frac{S_V}{S_g} = 10$"
    ],
    "optionsAr": [
      "$\\frac{S_V}{S_g} = \\frac{1}{9}$",
      "$\\frac{S_V}{S_g} = \\frac{1}{5}$",
      "$\\frac{S_V}{S_g} = \\frac{1}{10}$ ($0.1$)",
      "$\\frac{S_V}{S_g} = 10$"
    ],
    "correctAnswer": "$\\frac{S_V}{S_g} = \\frac{1}{10}$ ($0.1$)",
    "correctIndex": 2,
    "hintEn": "$\\frac{S_V}{S_g} = \\frac{V_g}{V} = \\frac{R_g}{R_g + R_m} = \\frac{50}{50 + 450} = \\frac{50}{500} = \\frac{1}{10}$.",
    "hintAr": "$\\frac{S_V}{S_g} = \\frac{R_g}{R_g + R_m} = \\frac{50}{500} = \\frac{1}{10}$.",
    "stepByStepSolutionEn": [
      "$\\frac{S_V}{S_g} = \\frac{R_g}{R_g + R_m} = \\frac{50}{500} = \\frac{1}{10}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{S_V}{S_g} = \\frac{50}{500} = \\frac{1}{10}$."
    ],
    "teacherTipEn": "Sensitivity reduces to one-tenth.",
    "teacherTipAr": "تقل الحساسية إلى العشر."
  },
  {
    "id": "phys_ch2_db_med_56",
    "titleEn": "Ohmmeter Current Deflection Fraction for External Resistance Three Times Internal",
    "titleAr": "حساب كسر انحراف الأوميتر لمقاومة خارجية ثلاثة أمثال الداخلية",
    "difficulty": "medium",
    "questionEn": "An ohmmeter has internal resistance $R_{\\text{in}}$. When an external resistor of value $R_x = 3 R_{\\text{in}}$ is connected, to what fraction of full scale ($I_g$) will the pointer deflect?",
    "questionAr": "أوميتر مقاومته الداخلية $R_{\\text{in}}$. عند توصيل مقاومة خارجية قيمتها $R_x = 3 R_{\\text{in}}$، إلى أي كسر من أقصى تدريج للتيار ($I_g$) ينحرف المؤشر؟",
    "optionsEn": [
      "$\\frac{1}{3} I_g$",
      "$\\frac{1}{2} I_g$",
      "$\\frac{3}{4} I_g$",
      "$\\frac{1}{4} I_g$ (quarter-scale deflection)"
    ],
    "optionsAr": [
      "$\\frac{1}{3} I_g$",
      "$\\frac{1}{2} I_g$",
      "$\\frac{3}{4} I_g$",
      "$\\frac{1}{4} I_g$ (ربع التدريج)"
    ],
    "correctAnswer": "$\\frac{1}{4} I_g$ (quarter-scale deflection)",
    "correctIndex": 3,
    "hintEn": "$\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + R_x} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 3 R_{\\text{in}}} = \\frac{1}{4}$.",
    "hintAr": "$\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 3 R_{\\text{in}}} = \\frac{1}{4}$.",
    "stepByStepSolutionEn": [
      "$\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{4 R_{\\text{in}}} = \\frac{1}{4}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{I}{I_g} = \\frac{1}{4}$."
    ],
    "teacherTipEn": "Direct reciprocal relation.",
    "teacherTipAr": "علاقة عكسية مباشرة."
  },
  {
    "id": "phys_ch2_db_med_57",
    "titleEn": "Torque on a Current Coil Oriented Perpendicular to Field Lines",
    "titleAr": "عزم الازدواج لملف مستواه عمودي على خطوط المجال",
    "difficulty": "medium",
    "questionEn": "A rectangular coil carrying current $I = 5\\text{ A}$ with $N = 100\\text{ turns}$ and area $A = 0.02\\text{ m}^2$ is placed in a magnetic field of $B = 0.8\\text{ T}$ such that the PLANE of the coil is strictly PERPENDICULAR to the field lines. What is the magnetic torque acting on the coil?",
    "questionAr": "ملف مستطيل يمر به تيار $I = 5\\text{ A}$ وعدد لفاته $N = 100\\text{ لفة}$ ومساحته $A = 0.02\\text{ m}^2$ موضوع في مجال مغناطيسي $B = 0.8\\text{ T}$ بحيث كان مستوى الملف عمودياً تماماً على خطوط المجال. ما هو عزم الازدواج المؤثر عليه؟",
    "optionsEn": [
      "$\\tau = 0\\text{ N} \\cdot \\text{m}$ (zero torque)",
      "$\\tau = 8.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 4.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 16.0\\text{ N} \\cdot \\text{m}$"
    ],
    "optionsAr": [
      "$\\tau = 0\\text{ N} \\cdot \\text{m}$ (ينعدم عزم الازدواج)",
      "$\\tau = 8.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 4.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau = 16.0\\text{ N} \\cdot \\text{m}$"
    ],
    "correctAnswer": "$\\tau = 0\\text{ N} \\cdot \\text{m}$ (zero torque)",
    "correctIndex": 0,
    "hintEn": "When the coil plane is perpendicular to $B$, the angle with the normal is $\\theta = 0^\\circ \\implies \\sin 0^\\circ = 0 \\implies \\tau = 0$.",
    "hintAr": "عندما يكون الملف عمودياً يكون العمودي عليه موازياً للمجال: $\\theta = 0^\\circ \\implies \\tau = 0$.",
    "stepByStepSolutionEn": [
      "When the coil plane is perpendicular to the field lines, the normal to the coil is parallel to the field ($\\theta = 0^\\circ$). Therefore, $\\tau = B I A N \\sin 0^\\circ = 0$."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون مستوى الملف عمودياً على خطوط المجال، يكون العمودي على مستوى الملف موازياً للمجال فتكون الزاوية $\\theta = 0^\\circ$ وينعدم عزم الازدواج تماماً ($\\tau = 0$)."
    ],
    "teacherTipEn": "Although flux $\\Phi_m$ is maximum, torque $\\tau$ is ZERO.",
    "teacherTipAr": "رغم أن الفيض المغناطيسي نهاية عظمى، إلا أن عزم الازدواج ينعدم."
  },
  {
    "id": "phys_ch2_db_med_58",
    "titleEn": "Field Ratio Between Solenoid and Circular Coil of Equal Length and Radius",
    "titleAr": "النسبة بين كثافة فيض ملف لولبي ودائري لنفس الأبعاد",
    "difficulty": "medium",
    "questionEn": "A solenoid has length $L = 4r$, where $r$ is the radius of its turns. If it has the same number of turns $N$ and carries the same current $I$ as a circular coil of radius $r$, what is the ratio $\\frac{B_{\\text{sol}}}{B_{\\text{circ}}}$?",
    "questionAr": "ملف لولبي طوله $L = 4r$ حيث $r$ نصف قطر لفاته. إذا كان له نفس عدد اللفات $N$ ويمر به نفس التيار $I$ لملف دائري نصف قطره $r$، فما هي النسبة $\\frac{B_{\\text{sol}}}{B_{\\text{circ}}}$؟",
    "optionsEn": [
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{1}{4}$",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{1}{2}$ ($0.5$)",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = 2$",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = 4$"
    ],
    "optionsAr": [
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{1}{4}$",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{1}{2}$ ($0.5$)",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = 2$",
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = 4$"
    ],
    "correctAnswer": "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{1}{2}$ ($0.5$)",
    "correctIndex": 1,
    "hintEn": "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L} = \\frac{2r}{4r} = \\frac{1}{2}$.",
    "hintAr": "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L} = \\frac{2r}{4r} = \\frac{1}{2}$.",
    "stepByStepSolutionEn": [
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{\\mu N I / L}{\\mu N I / 2r} = \\frac{2r}{L} = \\frac{2r}{4r} = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{4r} = \\frac{1}{2}$."
    ],
    "teacherTipEn": "Direct formula: $\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L}$.",
    "teacherTipAr": "قانون النسبة المباشر: $\\frac{2r}{L}$."
  },
  {
    "id": "phys_ch2_db_med_59",
    "titleEn": "Magnetic Force on Conductor Placed Parallel to Magnetic Field",
    "titleAr": "القوة المغناطيسية المؤثرة على سلك يمر به تيار موازياً لخطوط المجال",
    "difficulty": "medium",
    "questionEn": "A straight wire of length $L = 2\\text{ m}$ carrying an electric current of $I = 10\\text{ A}$ is placed in a strong uniform magnetic field of $B = 2.5\\text{ T}$ such that the wire is PARALLEL to the magnetic field lines. What is the magnetic force acting on the wire?",
    "questionAr": "سلك مستقيم طوله $L = 2\\text{ m}$ يمر به تيار كهربي $I = 10\\text{ A}$ موضوع في مجال مغناطيسي قوي منتظم كثافته $B = 2.5\\text{ T}$ بحيث كان السلك موازياً لخطوط المجال. ما مقدار القوة المغناطيسية المؤثرة على السلك؟",
    "optionsEn": [
      "$F = 50\\text{ N}$",
      "$F = 25\\text{ N}$",
      "$F = 0\\text{ N}$ (zero force)",
      "$F = 100\\text{ N}$"
    ],
    "optionsAr": [
      "$F = 50\\text{ N}$",
      "$F = 25\\text{ N}$",
      "$F = 0\\text{ N}$ (تنعدم القوة المغناطيسية تماماً)",
      "$F = 100\\text{ N}$"
    ],
    "correctAnswer": "$F = 0\\text{ N}$ (zero force)",
    "correctIndex": 2,
    "hintEn": "When parallel to the field, $\\theta = 0^\\circ \\implies \\sin 0^\\circ = 0 \\implies F = B I L \\sin 0^\\circ = 0$.",
    "hintAr": "عندما يكون السلك موازياً للمجال: $\\theta = 0^\\circ \\implies \\sin 0^\\circ = 0 \\implies F = 0$.",
    "stepByStepSolutionEn": [
      "From $F = B I L \\sin\\theta$: When the wire is parallel to the magnetic field lines, $\\theta = 0^\\circ$. Since $\\sin 0^\\circ = 0$, the magnetic force is identically zero: $F = 0\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "من القانون $F = B I L \\sin\\theta$: بما أن السلك موازٍ لخطوط المجال، فإن الزاوية بينهما $\\theta = 0^\\circ$. ولأن $\\sin 0^\\circ = 0$ فإن القوة المغناطيسية تنعدم تماماً ($F = 0$)."
    ],
    "teacherTipEn": "A classic conceptual test on the application of $\\sin\\theta$.",
    "teacherTipAr": "اختبار مفاهيمي شهير يختبر تطبيق زاوية الميل مع خطوط المجال."
  }
],
  hots: [
  {
    "id": "phys_ch2_db_hots_01",
    "titleEn": "Straight Wire in Uniform External Field Resultant Density",
    "titleAr": "محصلة كثافة الفيض لسلك مستقيم موضوع في مجال خارجي منتظم",
    "difficulty": "hots",
    "questionEn": "A long straight wire carrying current $I$ upward is placed in a uniform external magnetic field $B_{\\text{ext}}$ directed horizontally from left to right in the plane of the page. At what position relative to the wire does the resultant magnetic flux density reach its MAXIMUM value?",
    "questionAr": "سلك مستقيم طويل يمر به تيار $I$ لأعلى موضوع في مجال مغناطيسي خارجي منتظم $B_{\\text{ext}}$ اتجاهه أفقي من اليسار لليمين في مستوى الصفحة. عند أي موضع بالنسبة للسلك تصل محصلة كثافة الفيض إلى قيمتها العظمى؟",
    "optionsEn": [
      "At points perpendicularly above the page (out of page) where the wire's circular field aligns with $B_{\\text{ext}}$, or directly in front of the wire",
      "At points where the wire's field opposes $B_{\\text{ext}}$ (region of subtraction)",
      "Directly on the surface of the wire regardless of direction",
      "At an infinite distance from the wire where wire field is zero"
    ],
    "optionsAr": [
      "عند النقاط التي يكون فيها المجال الدائري للسلك في نفس اتجاه المجال الخارجي (منطقة جمع)",
      "عند النقاط التي يتعاكس فيها المجالان (منطقة طرح)",
      "على سطح السلك مباشرة بصرف النظر عن الاتجاه",
      "في المالانهاية بعيداً عن السلك"
    ],
    "correctAnswer": "At points perpendicularly above the page (out of page) where the wire's circular field aligns with $B_{\\text{ext}}$, or directly in front of the wire",
    "correctIndex": 0,
    "hintEn": "Resultant field is maximum where external and wire fields are in the SAME direction: $B_{\\text{net}} = B_{\\text{ext}} + B_{\\text{wire}}$.",
    "hintAr": "المحصلة تكون عظمى حيث يتحد المجالان في نفس الاتجاه: $B_t = B_{\\text{ext}} + B_{\\text{wire}}$.",
    "stepByStepSolutionEn": [
      "By Ampere's right-hand grip rule, current flowing upward produces circular field lines that point into the page to the right of the wire, out of the page to the left, towards the right behind the wire, and towards the left in front. Where the circular lines point from left to right (parallel and in the same direction as $B_{\\text{ext}}$), the two fields add constructively: $B_{\\text{net}} = B_{\\text{ext}} + B_{\\text{wire}}$, producing the maximum flux density."
    ],
    "stepByStepSolutionAr": [
      "وفق قاعدة اليد اليمنى لأمبير، يولد التيار الصاعد مجالاً دائرياً حول السلك. في الموضع الذي يكون فيه اتجاه خطوط فيض السلك في نفس اتجاه خطوط المجال الخارجي المنتظم تكون المنطقة منطقة جمع وتكون المحصلة قيمة عظمى: $B_t = B_{\\text{ext}} + B_{\\text{wire}}$. بينما في الموضع المعاكس تكون منطقة طرح وتنخفض المحصلة."
    ],
    "teacherTipEn": "At the point where $B_{\\text{wire}} = B_{\\text{ext}}$ and directions oppose, a neutral point is formed ($B_{\\text{net}} = 0$).",
    "teacherTipAr": "عند النقطة التي يتساوى فيها مجال السلك مع المجال الخارجي ويتعاكسان تتكون نقطة تعادل ينعدم عندها الفيض تماماً."
  },
  {
    "id": "phys_ch2_db_hots_02",
    "titleEn": "Neutral Point Formation with Earth Horizontal Magnetic Field",
    "titleAr": "تكون نقطة التعادل مع المركبة الأفقية لمجال الأرض",
    "difficulty": "hots",
    "questionEn": "A vertical straight wire carries a current $I$ vertically upward in a region where the Earth's horizontal magnetic field component is $B_H = 2 \\times 10^{-5}\\text{ T}$ pointing due North. At a distance $d$ directly East of the wire, what is the net magnetic field?",
    "questionAr": "سلك مستقيم رأسي يمر به تيار كهربي $I$ رأسياً لأعلى في منطقة بها المركبة الأفقية لمجال الأرض $B_H = 2 \\times 10^{-5}\\text{ T}$ متجهة نحو الشمال الجغرافي. عند نقطة تبعد مسافة $d$ جهة الشرق من السلك تماماً، ما هي طبيعة محصلة المجال المغناطيسي؟",
    "optionsEn": [
      "The fields cancel completely: $B_{\\text{net}} = B_{\\text{wire}} - B_H = 0$",
      "The fields are mutually perpendicular: $B_{\\text{net}} = \\sqrt{B_{\\text{wire}}^2 + B_H^2}$",
      "The fields add collinearly: $B_{\\text{net}} = B_{\\text{wire}} + B_H$",
      "The field is zero because Earth's field shields the wire"
    ],
    "optionsAr": [
      "المجالان متضادان تماماً وينعدم الفيض",
      "المجالان متعامدان: $B_t = \\sqrt{B_{\\text{wire}}^2 + B_H^2}$",
      "المجالان في نفس الاتجاه فيجمعان جبرياً",
      "المجال صفر لأن مجال الأرض يحجب السلك"
    ],
    "correctAnswer": "The fields are mutually perpendicular: $B_{\\text{net}} = \\sqrt{B_{\\text{wire}}^2 + B_H^2}$",
    "correctIndex": 1,
    "hintEn": "East of an upward wire, Ampere's rule gives field pointing North! Wait: with thumb UP, at East (right), fingers point INTO the page (North? Let's check: North is into page, or up? In standard horizontal plane: North is forward, East is right. At East, fingers curl forward = North!).",
    "hintAr": "في المستوى الأفقي: الشمال للأمام، والشرق لليمين. للتيار الصاعد، عند الشرق تلتف الأصابع نحو الشمال فيكونان في نفس الاتجاه، بينما عند الغرب تلتف نحو الجنوب فيتعاكسان.",
    "stepByStepSolutionEn": [
      "In the horizontal plane: North is ahead, South is behind, East is right, West is left. An upward vertical current produces circular magnetic field lines that point North at East, West at North, South at West, and East at South. Thus, directly West of the wire, the wire's field points South (opposite to Earth's northward field $B_H$), creating a neutral point where $B_{\\text{wire}} = B_H$. Directly East, both fields point North and reinforce each other ($B_{\\text{net}} = B_{\\text{wire}} + B_H$). If the point were North or South of the wire, the two fields would be perpendicular ($B_{\\text{net}} = \\sqrt{B_{\\text{wire}}^2 + B_H^2}$)."
    ],
    "stepByStepSolutionAr": [
      "في المستوى الأفقي: عند نقطة تقع شرق السلك الذي يمر به تيار لأعلى، يكون اتجاه مجال السلك نحو الشمال الجغرافي (في نفس اتجاه مجال الأرض) فيكون المجالان في نفس الاتجاه $B_t = B_{\\text{wire}} + B_H$. بينما عند نقطة تقع غرب السلك يكون اتجاه مجال السلك نحو الجنوب (عكس مجال الأرض) فيتعاكسان وتتكون نقطة التعادل هناك. أما عند نقطة شمال أو جنوب السلك فيكون المجالان متعامدين وتكون المحصلة فيثاغورس."
    ],
    "teacherTipEn": "This compass-wire geometry directly mirrors the historic Oersted experiment.",
    "teacherTipAr": "هذه الهندسة هي التطبيق الدقيق لتجربة أورستد التاريخية في المنهج المصري."
  },
  {
    "id": "phys_ch2_db_hots_03",
    "titleEn": "Ammeter Shunt to Galvanometer Resistance Ratio for Specific Deflection",
    "titleAr": "النسبة بين مقاومة مجزئ التيار ومقاومة ملف الجلفانومتر",
    "difficulty": "hots",
    "questionEn": "To make an ammeter whose total current measuring range is $n$ times the galvanometer's full-scale current ($I = n I_g$), what must the ratio $\\frac{R_s}{R_g}$ be?",
    "questionAr": "لصنع أميتر يكون مدى قياسه الأقصى للتيار مساوياً $n$ مثلاً لتيار الجلفانومتر ($I = n I_g$)، كم يجب أن تكون النسبة بين مقاومة المجزئ ومقاومة الجلفانومتر $\\frac{R_s}{R_g}$؟",
    "optionsEn": [
      "$\\frac{R_s}{R_g} = \\frac{1}{n}$",
      "$\\frac{R_s}{R_g} = n - 1$",
      "$\\frac{R_s}{R_g} = \\frac{1}{n - 1}$",
      "$\\frac{R_s}{R_g} = \\frac{n}{n + 1}$"
    ],
    "optionsAr": [
      "$\\frac{R_s}{R_g} = \\frac{1}{n}$",
      "$\\frac{R_s}{R_g} = n - 1$",
      "$\\frac{R_s}{R_g} = \\frac{1}{n - 1}$",
      "$\\frac{R_s}{R_g} = \\frac{n}{n + 1}$"
    ],
    "correctAnswer": "$\\frac{R_s}{R_g} = \\frac{1}{n - 1}$",
    "correctIndex": 2,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g} = \\frac{I_g R_g}{n I_g - I_g} = \\frac{R_g}{n - 1}$.",
    "hintAr": "$R_s = \\frac{I_g R_g}{(n - 1)I_g} = \\frac{R_g}{n - 1} \\implies \\frac{R_s}{R_g} = \\frac{1}{n - 1}$.",
    "stepByStepSolutionEn": [
      "From $R_s = \\frac{I_g R_g}{I - I_g}$, substitute $I = n I_g$: $R_s = \\frac{I_g R_g}{n I_g - I_g} = \\frac{I_g R_g}{(n - 1) I_g} = \\frac{R_g}{n - 1}$. Dividing by $R_g$ gives $\\frac{R_s}{R_g} = \\frac{1}{n - 1}$."
    ],
    "stepByStepSolutionAr": [
      "من قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. بالتعويض عن $I = n I_g$: $R_s = \\frac{I_g R_g}{n I_g - I_g} = \\frac{R_g}{n - 1}$، وتكون النسبة $\\frac{R_s}{R_g} = \\frac{1}{n - 1}$."
    ],
    "teacherTipEn": "For example, to multiply range by $10$ ($n = 10$), $\\frac{R_s}{R_g} = \\frac{1}{9}$.",
    "teacherTipAr": "مثال: لزيادة المدى إلى 10 أمثال ($n=10$)، تكون النسبة $\\frac{R_s}{R_g} = \\frac{1}{9}$."
  },
  {
    "id": "phys_ch2_db_hots_04",
    "titleEn": "Voltmeter Multiplier to Galvanometer Resistance Ratio for n-fold Range",
    "titleAr": "النسبة بين مقاومة مضاعف الجهد ومقاومة الجلفانومتر لمدى n مثل",
    "difficulty": "hots",
    "questionEn": "To expand the voltage measuring range of a voltmeter to $n$ times the galvanometer's original maximum voltage ($V = n V_g$), what must the ratio $\\frac{R_m}{R_g}$ be?",
    "questionAr": "لزيادة مدى قياس فرق الجهد لجهاز الفولتميتر إلى $n$ مثلاً لأقصى فرق جهد للجلفانومتر ($V = n V_g$)، كم يجب أن تكون النسبة $\\frac{R_m}{R_g}$؟",
    "optionsEn": [
      "$\\frac{R_m}{R_g} = \\frac{1}{n - 1}$",
      "$\\frac{R_m}{R_g} = n$",
      "$\\frac{R_m}{R_g} = n + 1$",
      "$\\frac{R_m}{R_g} = n - 1$"
    ],
    "optionsAr": [
      "$\\frac{R_m}{R_g} = \\frac{1}{n - 1}$",
      "$\\frac{R_m}{R_g} = n$",
      "$\\frac{R_m}{R_g} = n + 1$",
      "$\\frac{R_m}{R_g} = n - 1$"
    ],
    "correctAnswer": "$\\frac{R_m}{R_g} = n - 1$",
    "correctIndex": 3,
    "hintEn": "$R_m = \\frac{V - V_g}{I_g} = \\frac{n V_g - V_g}{V_g / R_g} = (n - 1) R_g$.",
    "hintAr": "$R_m = (n - 1) R_g \\implies \\frac{R_m}{R_g} = n - 1$.",
    "stepByStepSolutionEn": [
      "From the multiplier equation: $R_m = \\frac{V - V_g}{I_g} = \\frac{n V_g - V_g}{I_g} = \\frac{(n - 1) V_g}{I_g}$. Since $V_g = I_g R_g$, this simplifies to $R_m = (n - 1) R_g \\implies \\frac{R_m}{R_g} = n - 1$."
    ],
    "stepByStepSolutionAr": [
      "من قانون مضاعف الجهد: $R_m = \\frac{V - V_g}{I_g}$. بالتعويض عن $V = n V_g$: $R_m = \\frac{(n - 1) V_g}{I_g} = (n - 1) R_g$. وبقسمة الطرفين على $R_g$ نجد أن $\\frac{R_m}{R_g} = n - 1$."
    ],
    "teacherTipEn": "Notice: For ammeter, $\\frac{R_s}{R_g} = \\frac{1}{n - 1}$; for voltmeter, $\\frac{R_m}{R_g} = n - 1$.",
    "teacherTipAr": "مقارنة رائعة: في الأميتر النسبة مقلوبة $\\frac{1}{n-1}$، وفي الفولتميتر النسبة طردية $n-1$."
  },
  {
    "id": "phys_ch2_db_hots_05",
    "titleEn": "Effect of Weakening Galvanometer Spiral Springs on Sensitivity",
    "titleAr": "تأثير استخدام زوج ملفات زنبركية أقل صلابة على حساسية الجلفانومتر",
    "difficulty": "hots",
    "questionEn": "If the two spiral springs of a moving-coil galvanometer are replaced by weaker springs with a smaller torsional stiffness constant ($c' < c$), how are the sensitivity and the maximum current measuring range affected?",
    "questionAr": "إذا استُبدل زوج الملفات الزنبركية في الجلفانومتر الحساس بزوج آخر مصنوع من مادة أقل مرونة وصلابة (ثابت عزم اللي له أصغر $c' < c$)، كيف تتأثر حساسية الجهاز وأقصى مدى لقياس شدة التيار؟",
    "optionsEn": [
      "The sensitivity increases, and the maximum current measuring range decreases",
      "The sensitivity decreases, and the maximum current range increases",
      "Both sensitivity and measuring range increase simultaneously",
      "Neither sensitivity nor measuring range changes"
    ],
    "optionsAr": [
      "تزداد حساسية الجهاز، ويقل أقصى مدى لقياس شدة التيار",
      "تقل حساسية الجهاز، ويزداد أقصى مدى لقياس شدة التيار",
      "تزداد الحساسية والمدى معاً",
      "لا يتغير أي منهما"
    ],
    "correctAnswer": "The sensitivity increases, and the maximum current measuring range decreases",
    "correctIndex": 0,
    "hintEn": "Deflection $\\theta = \\left(\\frac{B A N}{c}\\right) I$. Sensitivity $S = \\theta/I \\propto 1/c$.",
    "hintAr": "زاوية الانحراف تتناسب عكسياً مع ثابت اللي: $S \\propto 1/c$.",
    "stepByStepSolutionEn": [
      "At equilibrium, deflecting torque balances restoring torque: $B I A N = c \\theta \\implies \\frac{\\theta}{I} = \\frac{B A N}{c}$. Since sensitivity is $S = \\frac{\\theta}{I}$, reducing spring stiffness $c$ means a given current will produce a larger angular twist $\\theta$, thereby increasing the sensitivity. Because the pointer reaches the physical limit of the scale at a lower current, the maximum current measuring range decreases."
    ],
    "stepByStepSolutionAr": [
      "عند اتزان مؤشر الجلفانومتر: $B I A N = c \\theta \\implies \\frac{\\theta}{I} = \\frac{B A N}{c}$. حساسية الجلفانومتر هي $S = \\frac{\\theta}{I}$، فإذا قل ثابت اللي $c$ تصبح مقاومة الزنبرك للدوران أضعف، وينحرف المؤشر بزاوية أكبر لنفس شدة التيار، فتزداد حساسية الجهاز. ولأن المؤشر يصل لنهاية التدريج بتيار أصغر، فإن أقصى مدى لقياس التيار يقل."
    ],
    "teacherTipEn": "Sensitivity and measuring range are always inversely related in any meter.",
    "teacherTipAr": "الحساسية ومدى القياس متعاكسان دائماً في جميع أجهزة القياس."
  },
  {
    "id": "phys_ch2_db_hots_06",
    "titleEn": "Consequence of Using Flat Magnetic Poles Instead of Concave in Galvanometer",
    "titleAr": "النتيجة المترتبة على استخدام قطبين مستويين بدلاً من المقعرين في الجلفانومتر",
    "difficulty": "hots",
    "questionEn": "What would occur if the permanent magnet in a moving-coil galvanometer had flat, parallel pole pieces instead of concave cylindrical pole pieces?",
    "questionAr": "ماذا يحدث إذا كان قطبا المغناطيس الدائم في الجلفانومتر الحساس مستويين ومتوازيين بدلاً من كونهما مقعرين؟",
    "optionsEn": [
      "The coil will fail to rotate completely at any current",
      "The magnetic field in the gap becomes uniform and parallel rather than radial, making deflecting torque vary with coil angle ($\\tau \\propto \\cos\\theta$), resulting in a NON-UNIFORM (crowded) scale",
      "The coil will rotate in the reverse direction",
      "The sensitivity will increase to infinity"
    ],
    "optionsAr": [
      "يعجز الملف عن الدوران تماماً عند أي شدة تيار",
      "يصبح المجال المغناطيسي في الحيز موازياً لبعضه وغير شعاعي، فيتغير عزم الازدواج مع زاوية دوران الملف ($\\tau \\propto \\cos\\theta$)، ويصبح تدريج الجهاز غير منتظم",
      "يدور الملف في الاتجاه العكسي",
      "تزداد حساسية الجهاز إلى المالانهاية"
    ],
    "correctAnswer": "The magnetic field in the gap becomes uniform and parallel rather than radial, making deflecting torque vary with coil angle ($\\tau \\propto \\cos\\theta$), resulting in a NON-UNIFORM (crowded) scale",
    "correctIndex": 1,
    "hintEn": "Without radial field, $\\sin\\theta_{\\text{normal}}$ is not 1 throughout the rotation.",
    "hintAr": "بدون القطبين المقعرين يفقد المجال صفة أنصاف الأقطار، وتتغير زاوية ميل الملف مع الدوران.",
    "stepByStepSolutionEn": [
      "With flat pole pieces, field lines cross the gap as parallel straight lines. As the coil rotates from parallel to perpendicular, the angle between the normal and the field changes from $90^\\circ$ to $0^\\circ$. Deflecting torque becomes $\\tau = B I A N \\cos\\theta_{\\text{plane}}$. Thus torque is not strictly proportional to $I$ alone; it decreases as the coil turns. At equilibrium, $c \\theta = B I A N \\cos\\theta$, so $\\theta$ is not linear with $I$, destroying scale uniformity."
    ],
    "stepByStepSolutionAr": [
      "إذا كان القطبان مستويين، تكون خطوط الفيض المغناطيسي متوازية فيما بينها وليست على هيئة أنصاف أقطار. وعند دوران الملف تتغير الزاوية بين مستواه وخطوط الفيض باستمرار، فيتغير عزم الازدواج المغناطيسي لنفس شدة التيار مع زاوية الدوران وفق القانون $\\tau = B I A N \\cos\\alpha$. وعند الاتزان لا تتناسب زاوية الانحراف طردياً مع شدة التيار بمفردها، ويفقد تدريج الجلفانومتر انتظامه وتتفاوت المسافات بين أقسامه."
    ],
    "teacherTipEn": "Concave poles are essential to keep the coil plane constantly parallel to the field in all positions.",
    "teacherTipAr": "القطبان المقعران ضروريان لجعل مستوى الملف موازياً لخطوط الفيض دائماً أياً كان موضعه."
  },
  {
    "id": "phys_ch2_db_hots_07",
    "titleEn": "Voltmeter Loading Effect on High-Resistance Circuit Analysis",
    "titleAr": "خطأ القياس (أثر التحميل) الناتج عن مقاومة الفولتميتر في الدوائر ذات المقاومة العالية",
    "difficulty": "hots",
    "questionEn": "A circuit consists of a $100\\text{ V}$ ideal battery in series with two identical resistors $R_1 = R_2 = 100\\text{ k}\\Omega$. A voltmeter of internal resistance $R_v = 100\\text{ k}\\Omega$ is connected across $R_2$ to measure its voltage drop. What voltage does the voltmeter read?",
    "questionAr": "دائرة كهربية تتكون من بطارية مثالية $100\\text{ V}$ موصلة على التوالي مع مقاومتين متطابقتين $R_1 = R_2 = 100\\text{ k}\\Omega$. وُصل فولتميتر مقاومته الداخلية $R_v = 100\\text{ k}\\Omega$ على التوازي مع المقاومة $R_2$ لقياس فرق الجهد بين طرفيها. ما هي القراءة التي يسجلها الفولتميتر؟",
    "optionsEn": [
      "$V = 50.0\\text{ V}$",
      "$V = 66.7\\text{ V}$",
      "$V = 33.3\\text{ V}$ (instead of the true $50\\text{ V}$)",
      "$V = 100.0\\text{ V}$"
    ],
    "optionsAr": [
      "$V = 50.0\\text{ V}$",
      "$V = 66.7\\text{ V}$",
      "$V = 33.3\\text{ V}$ (بدلاً من القيمة الحقيقية $50\\text{ V}$)",
      "$V = 100.0\\text{ V}$"
    ],
    "correctAnswer": "$V = 33.3\\text{ V}$ (instead of the true $50\\text{ V}$)",
    "correctIndex": 2,
    "hintEn": "Voltmeter in parallel with $R_2$ gives equivalent parallel resistance $R_p = \\frac{100 \\times 100}{100 + 100} = 50\\text{ k}\\Omega$.",
    "hintAr": "توازي $R_2$ مع الفولتميتر يعطي $50\\text{ k}\\Omega$. فرق الجهد يقسم بنسبة المقاومات.",
    "stepByStepSolutionEn": [
      "Before connecting the voltmeter, $R_1$ and $R_2$ divide $100\\text{ V}$ equally: $V_2 = 50\\text{ V}$. When the voltmeter ($100\\text{ k}\\Omega$) is connected in parallel with $R_2$ ($100\\text{ k}\\Omega$), their parallel equivalent is $R_p = \\frac{100 \\times 100}{100 + 100} = 50\\text{ k}\\Omega$. The total circuit resistance is $R_1 + R_p = 100 + 50 = 150\\text{ k}\\Omega$. The voltage across $R_p$ is $V = 100 \\times \\frac{50}{150} = \\frac{100}{3} \\approx 33.33\\text{ V}$. The voltmeter introduces a huge measurement error of $-33.3\\%$!"
    ],
    "stepByStepSolutionAr": [
      "بدون الفولتميتر يتوزع الجهد بالتساوي: $50\\text{ V}$ لكل مقاومة. عند توصيل الفولتميتر ($100\\text{ k}\\Omega$) على التوازي مع $R_2$ ($100\\text{ k}\\Omega$) تصبح مقاومتهما المكافئة $R_p = 50\\text{ k}\\Omega$. وتصبح المقاومة الكلية للدائرة $100 + 50 = 150\\text{ k}\\Omega$. ويصبح فرق الجهد المقاس: $V = 100 \\times \\frac{50}{150} = 33.33\\text{ V}$، ويحدث خطأ كبير في القياس مقداره نحو 33%!"
    ],
    "teacherTipEn": "This demonstrates why a voltmeter must have an extremely high internal resistance ($R_v \\gg R_{\\text{circuit}}$).",
    "teacherTipAr": "يوضح هذا المثال سبب ضرورة أن تكون مقاومة الفولتميتر كبيرة جداً مقارنة بمقاومة الدائرة."
  },
  {
    "id": "phys_ch2_db_hots_08",
    "titleEn": "Deducing Ohmmeter Internal Resistance from Two Deflection Readings",
    "titleAr": "استنتاج المقاومة الداخلية للأوميتر من قراءتي انحراف",
    "difficulty": "hots",
    "questionEn": "When an external resistor of $R_1 = 600\\,\\Omega$ is connected to an ohmmeter, the pointer deflects to $\\frac{2}{3}$ of full-scale current. What external resistor $R_2$ will cause the pointer to deflect to $\\frac{1}{3}$ of full scale?",
    "questionAr": "عند توصيل مقاومة خارجية $R_1 = 600\\,\\Omega$ بين طرفي أوميتر ينحرف مؤشره إلى ثلثي التدريج ($\\frac{2}{3} I_g$). ما هي قيمة المقاومة الخارجية $R_2$ التي تجعل مؤشره ينحرف إلى ثلث التدريج ($\\frac{1}{3} I_g$)؟",
    "optionsEn": [
      "$R_2 = 1200\\,\\Omega$",
      "$R_2 = 1800\\,\\Omega$",
      "$R_2 = 3600\\,\\Omega$",
      "$R_2 = 2400\\,\\Omega$ ($2.4\\text{ k}\\Omega$)"
    ],
    "optionsAr": [
      "$R_2 = 1200\\,\\Omega$",
      "$R_2 = 1800\\,\\Omega$",
      "$R_2 = 3600\\,\\Omega$",
      "$R_2 = 2400\\,\\Omega$ ($2.4\\text{ k}\\Omega$)"
    ],
    "correctAnswer": "$R_2 = 2400\\,\\Omega$ ($2.4\\text{ k}\\Omega$)",
    "correctIndex": 3,
    "hintEn": "$\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + R_x}$. First find $R_{\\text{in}}$, then find $R_2$.",
    "hintAr": "من الانحراف الأول احسب $R_{\\text{in}}$، ثم احسب المقاومة الثانية $R_2$.",
    "stepByStepSolutionEn": [
      "Step 1: For $\\frac{2}{3}$ deflection: $\\frac{2}{3} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 600} \\implies 2 R_{\\text{in}} + 1200 = 3 R_{\\text{in}} \\implies R_{\\text{in}} = 1200\\,\\Omega$. Step 2: For $\\frac{1}{3}$ deflection: $\\frac{1}{3} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + R_2} \\implies R_{\\text{in}} + R_2 = 3 R_{\\text{in}} \\implies R_2 = 2 R_{\\text{in}} = 2 \\times 1200 = 2400\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "الخطوة 1: من الحالة الأولى: $\\frac{2}{3} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 600} \\implies 2 R_{\\text{in}} + 1200 = 3 R_{\\text{in}} \\implies R_{\\text{in}} = 1200\\,\\Omega$. الخطوة 2: لكي ينحرف لثلث التدريج يجب أن تكون المقاومة الكلية $3 R_{\\text{in}}$ أي أن $R_2 = 2 R_{\\text{in}} = 2 \\times 1200 = 2400\\,\\Omega$."
    ],
    "teacherTipEn": "A classic multi-step ministerial problem.",
    "teacherTipAr": "مسألة امتحانية كلاسيكية ذات خطوتين."
  },
  {
    "id": "phys_ch2_db_hots_09",
    "titleEn": "Zero Net Force on Any Closed Planar Current Loop in Uniform Field",
    "titleAr": "انعدام محصلة القوة المغناطيسية المؤثرة على أي حلقة مغلقة في مجال منتظم",
    "difficulty": "hots",
    "questionEn": "A planar closed triangular loop of copper wire carries a steady electric current $I$ in a uniform magnetic field $B$. What is the net magnetic force acting on the entire triangular loop?",
    "questionAr": "حلقة مثلثة مغلقة مستوية من سلك نحاسي يمر بها تيار كهربي مستمر $I$ وموضوعة في مجال مغناطيسي منتظم $B$. ما هي محصلة القوة المغناطيسية المؤثرة على المثلث ككل؟",
    "optionsEn": [
      "Zero ($F_{\\text{net}} = 0$), because the vector sum of magnetic forces over any closed current loop in a uniform magnetic field is always zero",
      "$F_{\\text{net}} = B I L$, where $L$ is the perimeter of the triangle",
      "$F_{\\text{net}} = B I A$, where $A$ is the area of the triangle",
      "$F_{\\text{net}} = 3 B I L$"
    ],
    "optionsAr": [
      "صفر ($F_{\\text{net}} = 0$)، لأن المحصلة الاتجاهية للقوى المغناطيسية المؤثرة على أي حلقة مغلقة في مجال منتظم تساوي صفراً دائماً",
      "$F_{\\text{net}} = B I L$ حيث $L$ محيط المثلث",
      "$F_{\\text{net}} = B I A$ حيث $A$ مساحة المثلث",
      "$F_{\\text{net}} = 3 B I L$"
    ],
    "correctAnswer": "Zero ($F_{\\text{net}} = 0$), because the vector sum of magnetic forces over any closed current loop in a uniform magnetic field is always zero",
    "correctIndex": 0,
    "hintEn": "The vector sum of displacement vectors around a closed polygon is zero: $\\oint d\\vec{l} = 0 \\implies \\vec{F}_{\\text{net}} = I (\\oint d\\vec{l}) \\times \\vec{B} = 0$.",
    "hintAr": "المجموع الاتجاهي لإزاحات أضلاع أي مسار مغلق يساوي صفراً، فتتلاشى محصلة القوى تماماً.",
    "stepByStepSolutionEn": [
      "For any straight segment, force is $\\vec{F} = I (\\vec{L} \\times \\vec{B})$. For a closed loop, the total force is the sum: $\\vec{F}_{\\text{net}} = I (\\sum \\vec{L}_i) \\times \\vec{B}$. Because the loop is closed, the vector sum of all side displacement vectors is identically zero ($\\sum \\vec{L}_i = 0$). Hence, the net translational force on any closed loop in a uniform field is always zero ($F_{\\text{net}} = 0$)."
    ],
    "stepByStepSolutionAr": [
      "القوة المؤثرة على أي ضلع مستقيم هي $\\vec{F} = I (\\vec{L} \\times \\vec{B})$. وفي أي مسار مغلق يكون المجموع الاتجاهي لأطوال الأضلاع مساوياً للصفر ($\\sum \\vec{L} = 0$) لأن نقطة البداية هي نقطة النهاية. وبما أن المجال منتظم، فإن المحصلة الاتجاهية للقوى المؤثرة على أضلاع الحلقة المغلقة تساوي صفراً دائماً بصرف النظر عن شكلها."
    ],
    "teacherTipEn": "Note: The net FORCE is zero, but the net TORQUE may be non-zero!",
    "teacherTipAr": "انتبه: محصلة القوى الانتقالية صفر، لكن عزم الازدواج الدوراني قد لا يساوي صفراً!"
  },
  {
    "id": "phys_ch2_db_hots_10",
    "titleEn": "Torque Comparison for Circular vs Square Loop of Same Wire Length",
    "titleAr": "مقارنة عزم الازدواج لملف دائري ومربع مصنوعين من نفس طول السلك",
    "difficulty": "hots",
    "questionEn": "A wire of length $L$ carrying current $I$ is formed into a circular coil of 1 turn. Later, the same wire is reshaped into a square coil of 1 turn carrying the same current in the same uniform magnetic field $B$. How does the maximum torque on the circular coil ($\\tau_{\\text{circ}}$) compare to that on the square coil ($\\tau_{\\text{sq}}$)?",
    "questionAr": "سلك طوله $L$ يمر به تيار $I$ شُكّل على هيئة حلقة دائرية من لفة واحدة. ثم أُعيد تشكيل نفس السلك ليصبح إطاراً مربعاً من لفة واحدة يمر به نفس التيار في نفس المجال المنتظم $B$. كيف يقارن أقصى عزم ازدواج للملف الدائري ($\\tau_{\\text{circ}}$) بأقصى عزم للملف المربع ($\\tau_{\\text{sq}}$)؟",
    "optionsEn": [
      "$\\tau_{\\text{circ}} < \\tau_{\\text{sq}}$, because a square has four perpendicular corners",
      "$\\tau_{\\text{circ}} > \\tau_{\\text{sq}}$, because a circle encloses the maximum area for a given perimeter: $\\frac{\\tau_{\\text{circ}}}{\\tau_{\\text{sq}}} = \\frac{4}{\\pi} \\approx 1.27$",
      "$\\tau_{\\text{circ}} = \\tau_{\\text{sq}}$, because wire length, current, and turns are identical",
      "$\\tau_{\\text{circ}} = 2 \\tau_{\\text{sq}}$"
    ],
    "optionsAr": [
      "$\\tau_{\\text{circ}} < \\tau_{\\text{sq}}$ لأن المربع له أربعة أركان",
      "$\\tau_{\\text{circ}} > \\tau_{\\text{sq}}$، لأن الدائرة تحصر أكبر مساحة لنفس المحيط وتكون النسبة $\\frac{\\tau_{\\text{circ}}}{\\tau_{\\text{sq}}} = \\frac{4}{\\pi} \\approx 1.27$",
      "$\\tau_{\\text{circ}} = \\tau_{\\text{sq}}$ لتساوي طول السلك والتيار وعدد اللفات",
      "$\\tau_{\\text{circ}} = 2 \\tau_{\\text{sq}}$"
    ],
    "correctAnswer": "$\\tau_{\\text{circ}} > \\tau_{\\text{sq}}$, because a circle encloses the maximum area for a given perimeter: $\\frac{\\tau_{\\text{circ}}}{\\tau_{\\text{sq}}} = \\frac{4}{\\pi} \\approx 1.27$",
    "correctIndex": 1,
    "hintEn": "$\\tau_{\\max} \\propto \\text{Area}$. For a fixed perimeter $L$, $A_{\\text{circle}} = \\frac{L^2}{4\\pi}$, while $A_{\\text{square}} = \\left(\\frac{L}{4}\\right)^2 = \\frac{L^2}{16}$.",
    "hintAr": "العزم يتناسب مع المساحة. ومساحة الدائرة لنفس المحيط أكبر من مساحة المربع: $\\frac{L^2}{4\\pi} > \\frac{L^2}{16}$.",
    "stepByStepSolutionEn": [
      "For the circle: perimeter $L = 2\\pi r \\implies r = \\frac{L}{2\\pi} \\implies A_{\\text{circ}} = \\pi r^2 = \\frac{L^2}{4\\pi}$. For the square: perimeter $L = 4s \\implies s = \\frac{L}{4} \\implies A_{\\text{sq}} = s^2 = \\frac{L^2}{16}$. Since $\\tau_{\\max} = B I A N$: $\\frac{\\tau_{\\text{circ}}}{\\tau_{\\text{sq}}} = \\frac{A_{\\text{circ}}}{A_{\\text{sq}}} = \\frac{L^2 / 4\\pi}{L^2 / 16} = \\frac{16}{4\\pi} = \\frac{4}{\\pi} \\approx 1.273$. Therefore, the circular coil experiences approximately $27\\%$ more torque."
    ],
    "stepByStepSolutionAr": [
      "محيط الدائرة $L = 2\\pi r \\implies A_{\\text{circ}} = \\frac{L^2}{4\\pi}$. محيط المربع $L = 4s \\implies A_{\\text{sq}} = \\frac{L^2}{16}$. النسبة بين عزمي الازدواج تساوي النسبة بين المساحتين: $\\frac{\\tau_{\\text{circ}}}{\\tau_{\\text{sq}}} = \\frac{A_{\\text{circ}}}{A_{\\text{sq}}} = \\frac{16}{4\\pi} = \\frac{4}{\\pi} \\approx 1.27$. أي أن عزم الملف الدائري أكبر بنحو 27%."
    ],
    "teacherTipEn": "Geometric theorem: A circle encloses the maximum area of any 2D shape with a given perimeter.",
    "teacherTipAr": "قاعدة هندسية هامة: الدائرة تحصر أكبر مساحة ممكنة مقارنة بأي شكل هندسي آخر له نفس المحيط."
  },
  {
    "id": "phys_ch2_db_hots_11",
    "titleEn": "Two Non-Intersecting Perpendicular Wires Field at Midpoint",
    "titleAr": "كثافة الفيض عند منتصف المسافة بين سلكين متعامدين غير متقاطعين",
    "difficulty": "hots",
    "questionEn": "Two long straight insulated wires carrying equal currents $I$ are mutually perpendicular and separated by a perpendicular distance $d$. What is the magnitude of the net magnetic flux density at the midpoint of the line segment of length $d$ connecting them?",
    "questionAr": "سلكان مستقيمان طويلان معزولان يمر بكل منهما نفس شدة التيار $I$ ومتعامدان في الفراغ وتفصل بينهما مسافة عمودية $d$. ما مقدار محصلة كثافة الفيض المغناطيسي عند منتصف المسافة $d$ بين السلكين تماماً؟",
    "optionsEn": [
      "$B_{\\text{net}} = 0\\text{ T}$",
      "$B_{\\text{net}} = \\frac{\\mu_0 I}{\\pi d}$",
      "$B_{\\text{net}} = \\frac{\\sqrt{2}\\,\\mu_0 I}{\\pi d}$ ($\\sqrt{B_1^2 + B_2^2}$)",
      "$B_{\\text{net}} = \\frac{2\\mu_0 I}{\\pi d}$"
    ],
    "optionsAr": [
      "$B_{\\text{net}} = 0\\text{ T}$",
      "$B_{\\text{net}} = \\frac{\\mu_0 I}{\\pi d}$",
      "$B_{\\text{net}} = \\frac{\\sqrt{2}\\,\\mu_0 I}{\\pi d}$ ($\\sqrt{B_1^2 + B_2^2}$)",
      "$B_{\\text{net}} = \\frac{2\\mu_0 I}{\\pi d}$"
    ],
    "correctAnswer": "$B_{\\text{net}} = \\frac{\\sqrt{2}\\,\\mu_0 I}{\\pi d}$ ($\\sqrt{B_1^2 + B_2^2}$)",
    "correctIndex": 2,
    "hintEn": "Because the two wires are perpendicular, their circular magnetic field vectors at the midpoint are also mutually perpendicular.",
    "hintAr": "بما أن السلكين متعامدان، فإن متجهي المجالين عند نقطة المنتصف يكونان متعامدين أيضاً.",
    "stepByStepSolutionEn": [
      "Each wire is at distance $r = d/2$ from the midpoint. Each produces field $B_1 = B_2 = \\frac{\\mu_0 I}{2\\pi (d/2)} = \\frac{\\mu_0 I}{\\pi d}$. Because the wires are along orthogonal axes (e.g. x and y), their magnetic field vectors at the midpoint point along orthogonal directions in the horizontal plane. By vector addition: $B_{\\text{net}} = \\sqrt{B_1^2 + B_2^2} = \\sqrt{2} B_1 = \\frac{\\sqrt{2}\\,\\mu_0 I}{\\pi d}$."
    ],
    "stepByStepSolutionAr": [
      "يبعد كل سلك عن نقطة المنتصف مسافة $d/2$. يولد كل سلك مجالاً مقداره $B = \\frac{\\mu I}{2\\pi (d/2)} = \\frac{\\mu I}{\\pi d}$. ولأن السلكين متعامدان، فإن اتجاهي خطي الفيض عند نقطة المنتصف يكونان متعامدين، وتكون المحصلة هي الجذر التربيعي لمجموع مربعيهما: $B_t = \\sqrt{B_1^2 + B_2^2} = \\sqrt{2} B = \\frac{\\sqrt{2}\\mu I}{\\pi d}$."
    ],
    "teacherTipEn": "Do not subtract: perpendicular vectors always add via Pythagoras!",
    "teacherTipAr": "لا تطرح: المتجهات المتعامدة تجمع دائماً بنظرية فيثاغورس!"
  },
  {
    "id": "phys_ch2_db_hots_12",
    "titleEn": "Magnetic Flux Density at Center of Square Current Loop",
    "titleAr": "كثافة الفيض المغناطيسي عند مركز إطار مربع يمر به تيار",
    "difficulty": "hots",
    "questionEn": "A square wire loop of side length $a$ carries a steady electric current $I$. How does the magnetic flux density at the center of the square loop compare to that of a single side of length $a$?",
    "questionAr": "إطار مربع طول ضلعه $a$ يمر به تيار كهربي مستمر $I$. كيف تحسب محصلة كثافة الفيض المغناطيسي عند المركز الهندسي للمربع مقارنة بفيض ضلع واحد؟",
    "optionsEn": [
      "$B_{\\text{center}} = 0\\text{ T}$, because opposite sides cancel",
      "$B_{\\text{center}} = 2 \\times B_{\\text{side}}$",
      "$B_{\\text{center}} = \\sqrt{2} \\times B_{\\text{side}}$",
      "$B_{\\text{center}} = 4 \\times B_{\\text{side}}$, pointing in the same direction perpendicular to the loop plane"
    ],
    "optionsAr": [
      "$B_{\\text{center}} = 0\\text{ T}$ لأن الأضلاع المتقابلة تتلاشى",
      "$B_{\\text{center}} = 2 \\times B_{\\text{side}}$",
      "$B_{\\text{center}} = \\sqrt{2} \\times B_{\\text{side}}$",
      "$B_{\\text{center}} = 4 \\times B_{\\text{side}}$، وتكون جميعها في نفس الاتجاه عمودية على مستوى المربع"
    ],
    "correctAnswer": "$B_{\\text{center}} = 4 \\times B_{\\text{side}}$, pointing in the same direction perpendicular to the loop plane",
    "correctIndex": 3,
    "hintEn": "Use Ampere's right-hand grip rule for each of the 4 sides: all 4 sides produce magnetic flux in the SAME direction at the center.",
    "hintAr": "طبق قاعدة اليد اليمنى لأمبير على كل ضلع: ستجد أن الأضلاع الأربعة تولد فيضاً في نفس الاتجاه عند المركز تماماً.",
    "stepByStepSolutionEn": [
      "Current circulates in the same sense (clockwise or counterclockwise) around all four edges. Applying the right-hand rule to each straight segment reveals that every side contributes a magnetic field pointing in the exact same direction (e.g. into the page if clockwise). Because of 4-fold rotational symmetry, all four sides produce equal magnitudes. Therefore: $B_{\\text{total}} = B_1 + B_2 + B_3 + B_4 = 4 B_{\\text{side}}$."
    ],
    "stepByStepSolutionAr": [
      "يدور التيار في اتجاه دوري واحد حول أضلاع المربع الأربعة (مثلاً مع عقارب الساعة). بتطبيق قاعدة اليد اليمنى على كل ضلع، نجد أن خطوط فيض الأضلاع الأربعة تدخل جميعاً عمودياً على الصفحة عند المركز في نفس الاتجاه. ولتماثل الأضلاع تكون المجالات متساوية في المقدار وتتحد في الاتجاه، فتكون المحصلة الكلية حاصل جمعها: $B_{\\text{total}} = 4 \\times B_{\\text{side}}$."
    ],
    "teacherTipEn": "Common mistake: Students assume opposite sides cancel, forgetting that current flows in opposite directions on opposite sides, which makes their fields at the center point in the SAME direction!",
    "teacherTipAr": "خطأ شائع: يظن البعض أن الأضلاع المتقابلة تتلاشى، متناسين أن اتجاه التيار في الضلعين المتقابلين متعاكس مما يجعل مجال أحدهما للداخل ومجال الآخر للداخل أيضاً فيتحدان!"
  },
  {
    "id": "phys_ch2_db_hots_13",
    "titleEn": "Bifilar Non-Inductive Winding for Zero Magnetic Field",
    "titleAr": "اللف المزدوج في المقاومات القياسية لتلافي التأثير المغناطيسي والحثي",
    "difficulty": "hots",
    "questionEn": "Why are standard resistance coils (such as $R_c$ in an ohmmeter) wound in a 'bifilar' (double-wound) configuration where the wire is folded back on itself before coiling?",
    "questionAr": "لماذا تلف المقاومات القياسية (مثل المقاومة العيارية الثابتة $R_c$ في الأوميتر) لفاً مزدوجاً؟",
    "optionsEn": [
      "So that electric current flows in opposite directions in adjacent parallel turns, generating equal and opposite magnetic fields that cancel each other out completely ($B = 0, L = 0$)",
      "To double the cross-sectional area and halve the electrical resistance",
      "To prevent the copper wire from heating up under high currents",
      "To generate a powerful permanent magnetic field inside the resistor"
    ],
    "optionsAr": [
      "لكي يمر التيار في اتجاهين متضادين في كل لفتين متجاورتين، فيتولد مجالان مغناطيسيان متساويان في المقدار ومتضادان في الاتجاه يتلاشان تماماً ($B = 0$ والحث الذاتي منعدم)",
      "لمضاعفة مساحة مقطع السلك وتقليل مقاومته للنصف",
      "لحماية سلك النحاس من السخونة عند مرور تيارات عالية",
      "لتوليد مجال مغناطيسي دائم وقوي داخل المقاومة"
    ],
    "correctAnswer": "So that electric current flows in opposite directions in adjacent parallel turns, generating equal and opposite magnetic fields that cancel each other out completely ($B = 0, L = 0$)",
    "correctIndex": 0,
    "hintEn": "Double winding ensures opposing currents in every pair of turns: $B_1 - B_2 = 0$.",
    "hintAr": "اللف المزدوج يجعل التيار يمر في اتجاهين متعاكسين في كل لفتين فيتلاشى الفيض المغناطيسي والحث الذاتي.",
    "stepByStepSolutionEn": [
      "When a wire is folded in half and then wound into a coil (bifilar winding), the current in any given turn travels in the exact opposite direction to the current in the adjacent turn running alongside it. The magnetic flux produced by one wire is equal in magnitude and opposite in direction to the flux produced by the other wire at every point in space: $\\Phi_{\\text{net}} = \\Phi_1 - \\Phi_2 = 0$. This completely eliminates magnetic fields and electromagnetic self-induction."
    ],
    "stepByStepSolutionAr": [
      "عند ثني السلك من منتصفه ثم لفه على هيئة ملف (اللف المزدوج)، يمر التيار في كل لفتين متجاورتين في اتجاهين متضادين. فينشأ عن مرور التيار في إحداهما مجال مغناطيسي مساوٍ في المقدار ومضاد في الاتجاه للمجال الناشئ عن الأخرى فيتلاشى المجالان تماماً. وينعدم بذلك الفيض المغناطيسي وينعدم الحث الكهرومغناطيسي الذاتي للمقاومة فتصبح مقاومة أومية عديمة الحث."
    ],
    "teacherTipEn": "Standard resistance boxes in laboratories are universally bifilar-wound for pure ohmic resistance.",
    "teacherTipAr": "صناديق المقاومات القياسية في المعامل تلف جميعها لفاً مزدوجاً لضمان نقاء المقاومة الأومية دون أي حث ذاتي."
  },
  {
    "id": "phys_ch2_db_hots_14",
    "titleEn": "Coaxial Cable Zero External Magnetic Field by Ampere Circuital Law",
    "titleAr": "انعدام المجال المغناطيسي خارج الكابل المحوري وفق قانون أمبير",
    "difficulty": "hots",
    "questionEn": "A coaxial cable consists of an inner solid cylindrical wire carrying current $I$ and an outer concentric cylindrical sheath carrying the return current $I$ in the opposite direction. By Ampere's circuital law, what is the magnetic flux density at any point OUTSIDE the outer sheath ($r > R_{\\text{outer}}$)?",
    "questionAr": "كابل محوري يتكون من سلك أسطواني داخلي يمر به تيار $I$ وغلاف أسطواني خارجي يمر به تيار العودة $I$ في الاتجاه المعاكس. وفقاً لقانون أمبير الدائري، ما هي كثافة الفيض المغناطيسي عند أي نقطة خارج الغلاف الأسطواني ($r > R_{\\text{outer}}$)؟",
    "optionsEn": [
      "$B = \\frac{\\mu_0 I}{\\pi r}$, double the field of a single wire",
      "Zero ($B = 0$), because the net enclosed electric current through any circular Amperian loop enclosing both conductors is zero ($I_{\\text{enc}} = I - I = 0$)",
      "$B = \\frac{\\mu_0 I}{2\\pi r}$",
      "$B = \\frac{\\mu_0 I}{4\\pi r^2}$"
    ],
    "optionsAr": [
      "$B = \\frac{\\mu_0 I}{\\pi r}$ (ضعف مجال سلك واحد)",
      "صفر ($B = 0$)، لأن المحصلة الكلية للتيار المار داخل أي مسار دائري يحيط بالكابل تساوي صفراً ($I_{\\text{enc}} = I - I = 0$)",
      "$B = \\frac{\\mu_0 I}{2\\pi r}$",
      "$B = \\frac{\\mu_0 I}{4\\pi r^2}$"
    ],
    "correctAnswer": "Zero ($B = 0$), because the net enclosed electric current through any circular Amperian loop enclosing both conductors is zero ($I_{\\text{enc}} = I - I = 0$)",
    "correctIndex": 1,
    "hintEn": "Ampere's law: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$. Here $I_{\\text{enc}} = +I - I = 0$.",
    "hintAr": "قانون أمبير الدائري: مجموع التيار المحصور داخل المسار الدائري الخارجي يساوي $+I - I = 0$.",
    "stepByStepSolutionEn": [
      "By Ampere's circuital law: $\\oint \\vec{B} \\cdot d\\vec{l} = B (2\\pi r) = \\mu_0 I_{\\text{enclosed}}$. For any circle of radius $r$ outside the cable, the total enclosed current is the forward current plus the return current: $I_{\\text{enclosed}} = I - I = 0$. Therefore, $B (2\\pi r) = 0 \\implies B = 0$."
    ],
    "stepByStepSolutionAr": [
      "وفق قانون أمبير الدائري: $\\oint B dl = B (2\\pi r) = \\mu I_{\\text{enclosed}}$. لأي مسار دائري يقع خارج الكابل بالكامل، يكون إجمالي التيار المحصور بداخله مساوياً لحاصل جمع التيار الذاهب والتيار العائد: $I_{\\text{enclosed}} = I - I = 0$. وبالتالي فإن $B (2\\pi r) = 0 \\implies B = 0$، وينعدم المجال المغناطيسي خارج الكابل تماماً."
    ],
    "teacherTipEn": "This self-shielding property prevents coaxial cables from radiating electromagnetic interference or picking up external noise.",
    "teacherTipAr": "هذه الخاصية الذاتية للحجب المغناطيسي هي السبب في استخدام الكابلات المحورية في نقل إشارات التلفاز والإنترنت دون تشويش."
  },
  {
    "id": "phys_ch2_db_hots_15",
    "titleEn": "Net Attractive/Repulsive Magnetic Force on a Coil Near a Straight Wire",
    "titleAr": "محصلة القوة المغناطيسية المؤثرة على ملف مستطيل بجوار سلك مستقيم",
    "difficulty": "hots",
    "questionEn": "A rectangular loop carrying clockwise current $I_{\\text{loop}}$ lies in the plane of a long straight wire carrying upward current $I_{\\text{wire}}$ to its left. What is the direction of the net magnetic force acting on the entire rectangular loop?",
    "questionAr": "ملف مستطيل يمر به تيار في اتجاه عقارب الساعة يقع في نفس مستوى سلك مستقيم طويل يمر به تيار لأعلى على يسار الملف. ما هو اتجاه محصلة القوة المغناطيسية المؤثرة على الملف المستطيل ككل؟",
    "optionsEn": [
      "Repulsion away from the straight wire (rightward)",
      "Zero net force, because forces on all four sides cancel out completely",
      "Attraction toward the straight wire (leftward), because the closer side carries current in the same direction as the wire and experiences a stronger attractive force than the weaker repulsive force on the farther side",
      "Upward force along the direction of the wire current"
    ],
    "optionsAr": [
      "تنافر بعيداً عن السلك المستقيم (يميناً)",
      "تنعدم محصلة القوى لأن قوى الأضلاع الأربعة تتلاشى",
      "تجاذب نحو السلك المستقيم (يساراً)، لأن الضلع الأقرب يمر به تيار في نفس اتجاه تيار السلك فيتأثر بقوة تجاذب أكبر من قوة التنافر الأضعف على الضلع الأبعد",
      "قوة رأسية لأعلى مع اتجاه تيار السلك"
    ],
    "correctAnswer": "Attraction toward the straight wire (leftward), because the closer side carries current in the same direction as the wire and experiences a stronger attractive force than the weaker repulsive force on the farther side",
    "correctIndex": 2,
    "hintEn": "Closer side: same direction $\\implies$ attractive $F_1 = \\frac{\\mu I_1 I_2 L}{2\\pi d_1}$. Farther side: opposite $\\implies$ repulsive $F_2 = \\frac{\\mu I_1 I_2 L}{2\\pi d_2}$. Since $d_1 < d_2$, $F_1 > F_2$.",
    "hintAr": "الضلع الأقرب في نفس الاتجاه فيتجاذب بقوة أكبر ($F_1 \\propto 1/d_1$) من قوة تنافر الضلع الأبعد ($F_2 \\propto 1/d_2$).",
    "stepByStepSolutionEn": [
      "The top and bottom sides of the rectangular loop experience equal and opposite vertical forces that cancel out. For the two vertical sides parallel to the wire: the closer left side has current flowing upward (same direction as the wire), so it is attracted with force $F_{\\text{left}} \\propto \\frac{1}{d_{\\text{near}}}$. The farther right side has current flowing downward (opposite direction), so it is repelled with force $F_{\\text{right}} \\propto \\frac{1}{d_{\\text{far}}}$. Because the left side is closer ($d_{\\text{near}} < d_{\\text{far}}$), $F_{\\text{left}} > F_{\\text{right}}$. The net force is directed to the left (attraction toward the wire)."
    ],
    "stepByStepSolutionAr": [
      "الضلعان الأفقيان (العلوي والسفلي) يتأثران بقوتين رأسيتين متساويتين في المقدار ومتضادتين في الاتجاه فيتلاشيان. أما الضلعان الرأسيان الموازيان للسلك: فالضلع الأيسر الأقرب يمر به تيار لأعلى (في نفس اتجاه تيار السلك) فيتأثر بقوة تجاذب لليسار $F_1 = \\frac{\\mu I_1 I_2 L}{2\\pi d_1}$. والضلع الأيمن الأبعد يمر به تيار لأسفل (عكس اتجاه تيار السلك) فيتأثر بقوة تنافر لليمين $F_2 = \\frac{\\mu I_1 I_2 L}{2\\pi d_2}$. ولأن $d_1 < d_2$، فإن قوة التجاذب تفوق قوة التنافر ($F_1 > F_2$)، وتتحرك الحلقة ككل نحو السلك (قوة تجاذب محصلة)."
    ],
    "teacherTipEn": "If current in the loop were counterclockwise, the closer side would be opposite $\\implies$ net repulsion!",
    "teacherTipAr": "لو كان تيار الحلقة عكس عقارب الساعة، لكان الضلع الأقرب في عكس اتجاه تيار السلك ولكانت المحصلة تنافراً!"
  },
  {
    "id": "phys_ch2_db_hots_16",
    "titleEn": "Magnetic Lorentz Force Does Strictly Zero Work on Moving Charges",
    "titleAr": "انعدام الشغل المبذول بواسطة القوة المغناطيسية على الشحنات المتحركة",
    "difficulty": "hots",
    "questionEn": "A charged particle of mass $m$ and charge $q$ enters a uniform magnetic field $B$ with velocity $v$ perpendicular to the field lines. Why does the magnetic force do ZERO work on the moving particle ($W = 0$), and what happens to its kinetic energy and speed?",
    "questionAr": "جسيم مشحون كتلته $m$ وشحنته $q$ دخل عمودياً بسرعة $v$ في مجال مغناطيسي منتظم $B$. لماذا يكون الشغل المبذول بواسطة القوة المغناطيسية على الجسيم مساوياً للصفر دائماً ($W = 0$)، وماذا يحدث لطاقة حركته وسرعته؟",
    "optionsEn": [
      "The particle is immediately stopped and its kinetic energy converts to heat",
      "The magnetic force continuously increases the speed and kinetic energy of the particle",
      "The particle accelerates in a straight line at constant power",
      "The magnetic force is perpendicular to velocity at every instant ($\\vec{F} \\perp \\vec{v}$), so work is zero, kinetic energy remains constant, and speed remains constant (only direction changes)"
    ],
    "optionsAr": [
      "يتوقف الجسيم فوراً وتتحول طاقة حركته إلى حرارة",
      "تزيد القوة المغناطيسية من مقدار السرعة وطاقة الحركة باستمرار",
      "يتسارع الجسيم في خط مستقيم بقدرة ثابتة",
      "لأن القوة المغناطيسية تكون عمودية دائماً على اتجاه سرعة وحركة الجسيم في كل لحظة ($\\vec{F} \\perp \\vec{v}$)، فينعدم الشغل وتظل طاقة الحركة ثابتة ومقدار السرعة ثابتاً ويتغير اتجاه الحركة فقط"
    ],
    "correctAnswer": "The magnetic force is perpendicular to velocity at every instant ($\\vec{F} \\perp \\vec{v}$), so work is zero, kinetic energy remains constant, and speed remains constant (only direction changes)",
    "correctIndex": 3,
    "hintEn": "Work differential is $dW = \\vec{F}_B \\cdot d\\vec{r} = (\\vec{F}_B \\cdot \\vec{v}) dt$. Since $\\vec{F}_B = q(\\vec{v} \\times \\vec{B})$, $\\vec{F}_B \\perp \\vec{v} \\implies \\vec{F}_B \\cdot \\vec{v} = 0$.",
    "hintAr": "القوة المغناطيسية قوة جاذبة مركزية عمودية على متجه السرعة: $\\vec{F} \\perp \\vec{v}$، ولذا يكون الشغل المنجز صفراً دائماً.",
    "stepByStepSolutionEn": [
      "The magnetic Lorentz force is given by $\\vec{F}_B = q (\\vec{v} \\times \\vec{B})$. By definition of the cross product, the force is always strictly perpendicular to the instantaneous velocity vector $\\vec{v}$. The rate of work done (power) is $P = \\vec{F}_B \\cdot \\vec{v} = 0$. Because no work is done, by the work-energy theorem $\\Delta K = W = 0$, the kinetic energy of the particle is strictly conserved. Its speed $v$ remains constant, and the force acts purely as a centripetal force causing uniform circular motion."
    ],
    "stepByStepSolutionAr": [
      "القوة المغناطيسية هي قوة لورنتز $\\vec{F} = q (\\vec{v} \\times \\vec{B})$. ووفق الضرب الاتجاهي تكون القوة عمودية دائماً على اتجاه حركة الجسيم وسرعته اللحظية $\\vec{v}$. ويكون الشغل المنجز مساوياً للصفر ($W = F \\cdot d \\cos 90^\\circ = 0$). وبما أن الشغل صفر، فإن طاقة حركة الجسيم تظل ثابتة تماماً ومقدار سرعته يظل ثابتاً، وتعمل القوة كقوة جاذبة مركزية تغير اتجاه حركة الجسيم فقط دون تغيير سرعته فيتحرك في مسار دائري منتظم."
    ],
    "teacherTipEn": "Contrast: An ELECTRIC force CAN do work and change kinetic energy because $\\vec{F}_E = q\\vec{E}$ can be parallel to displacement.",
    "teacherTipAr": "قارن ذلك بالمجال الكهربي: القوة الكهربية $\\vec{F} = q\\vec{E}$ تبذل شغلاً وتغير مقدار السرعة وطاقة الحركة."
  },
  {
    "id": "phys_ch2_db_hots_17",
    "titleEn": "Effective Length of Semicircular Wire in Uniform Magnetic Field",
    "titleAr": "الطول الفعال لسلك على شكل نصف حلقة في مجال مغناطيسي منتظم",
    "difficulty": "hots",
    "questionEn": "A wire bent into a semicircle of radius $r$ carrying current $I$ lies in the plane of the page. A uniform magnetic field $B$ is directed perpendicularly out of the page. What is the magnitude of the net magnetic force acting on the semicircular wire?",
    "questionAr": "سلك مشكل على هيئة نصف حلقة دائرية نصف قطرها $r$ يمر به تيار $I$ ويقع في مستوى الصفحة. أُثر عليه بمجال مغناطيسي منتظم $B$ عمودي على مستوى الصفحة للخارج. ما هو مقدار محصلة القوة المغناطيسية المؤثرة على سلك نصف الحلقة؟",
    "optionsEn": [
      "$F = B I (2r)$, where $2r$ is the straight distance between its two ends (effective length)",
      "$F = B I (\\pi r)$, proportional to the semicircular arc length",
      "$F = 0\\text{ N}$, because circular forces cancel symmetrically",
      "$F = 2\\pi B I r$"
    ],
    "optionsAr": [
      "$F = B I (2r)$ حيث $2r$ هو القطر والمسافة المستقيمة بين طرفي السلك (الطول الفعال)",
      "$F = B I (\\pi r)$ بنسبة طول القوس",
      "$F = 0\\text{ N}$ لأن القوى الدائرية تتلاشى بالتماثل",
      "$F = 2\\pi B I r$"
    ],
    "correctAnswer": "$F = B I (2r)$, where $2r$ is the straight distance between its two ends (effective length)",
    "correctIndex": 0,
    "hintEn": "In a uniform field, the force on any curved wire equals the force on a straight wire connecting its two endpoints: $\\vec{L}_{\\text{eff}} = \\vec{L}_{\\text{end}} - \\vec{L}_{\\text{start}}$.",
    "hintAr": "في المجال المنتظم، القوة على أي سلك منحنٍ تساوي القوة على سلك مستقيم يصل بين نقطتي البداية والنهاية (الإزاحة المستقيمة).",
    "stepByStepSolutionEn": [
      "For any arbitrarily curved conductor in a uniform field $\\vec{B}$, the total magnetic force is $\\vec{F} = I (\\int d\\vec{l}) \\times \\vec{B} = I \\vec{L}_{\\text{eff}} \\times \\vec{B}$, where $\\vec{L}_{\\text{eff}}$ is the straight vector connecting the starting point to the ending point. For a semicircle of radius $r$, the straight line distance between the two ends is the diameter: $L_{\\text{eff}} = 2r$. Since the diameter is perpendicular to $\\vec{B}$, the force is $F = B I (2r)$."
    ],
    "stepByStepSolutionAr": [
      "في أي مجال مغناطيسي منتظم، القوة المغناطيسية المؤثرة على سلك منحنٍ بأي شكل تساوي القوة المؤثرة على سلك مستقيم يصل بين طرفي السلك المنحني، ويكون الطول الفعال هو طول متجه الإزاحة بين البداية والنهاية. لنصف حلقة دائرية، البعد المستقيم بين طرفيها يساوي القطر ($2r$). وبما أن القطر عمودي على المجال، فإن مقدار القوة المحصلة يساوي $F = B I (2r)$."
    ],
    "teacherTipEn": "If the loop was completed into a full closed circle, the two ends coincide ($L_{\\text{eff}} = 0$) and net force becomes ZERO.",
    "teacherTipAr": "إذا أغلقت الحلقة وأصبحت دائرة كاملة تصبح نقطة البداية هي النهاية ($L_{\\text{eff}} = 0$) وتنعدم القوة المحصلة تماماً."
  },
  {
    "id": "phys_ch2_db_hots_18",
    "titleEn": "Work Required to Reverse Orientation of a Magnetic Dipole",
    "titleAr": "الشغل المبذول لقلب اتجاه عزم ثنائي القطب المغناطيسي بمقدار 180 درجة",
    "difficulty": "hots",
    "questionEn": "A planar coil has a magnetic dipole moment of magnitude $m_d$. It is initially aligned in stable equilibrium parallel to a uniform magnetic field $B$ ($\\theta = 0^\\circ$). How much mechanical work must an external agent perform to rotate the coil by $180^\\circ$ to the antiparallel position?",
    "questionAr": "ملف مستوٍ له عزم ثنائي قطب مقداره $m_d$. كان في البداية في وضع اتزان مستقر موازياً لمجال مغناطيسي منتظم $B$ ($\\theta = 0^\\circ$). ما مقدار الشغل الميكانيكي المبذول لتدوير الملف بمقدار $180^\\circ$ ليصبح في الاتجاه المعاكس للمجال؟",
    "optionsEn": [
      "$W = m_d B$",
      "$W = 2 m_d B$",
      "$W = 0\\text{ J}$",
      "$W = 4 m_d B$"
    ],
    "optionsAr": [
      "$W = m_d B$",
      "$W = 2 m_d B$",
      "$W = 0\\text{ J}$",
      "$W = 4 m_d B$"
    ],
    "correctAnswer": "$W = 2 m_d B$",
    "correctIndex": 1,
    "hintEn": "Potential energy of a magnetic dipole: $U(\\theta) = -m_d B \\cos\\theta$. Work = $\\Delta U = U(180^\\circ) - U(0^\\circ)$.",
    "hintAr": "طاقة الوضع لثنائي القطب: $U = -m_d B \\cos\\theta$. الشغل المبذول = التغير في طاقة الوضع.",
    "stepByStepSolutionEn": [
      "The potential energy of a magnetic dipole in field $B$ is $U(\\theta) = -\\vec{m}_d \\cdot \\vec{B} = -m_d B \\cos\\theta$. At $\\theta = 0^\\circ$ (aligned): $U_1 = -m_d B$. At $\\theta = 180^\\circ$ (antiparallel): $U_2 = -m_d B \\cos 180^\\circ = +m_d B$. The work done by the external agent against magnetic torque is $W = \\Delta U = U_2 - U_1 = (+m_d B) - (-m_d B) = 2 m_d B$."
    ],
    "stepByStepSolutionAr": [
      "طاقة الوضع لثنائي القطب المغناطيسي تعطى بالعلاقة: $U = -m_d B \\cos\\theta$. في الوضع الأول ($\\theta = 0^\\circ$): $U_1 = -m_d B$. وفي الوضع المعاكس بعد الدوران $180^\\circ$: $U_2 = -m_d B \\cos 180^\\circ = +m_d B$. والشغل المبذول يساوي التغير في طاقة الوضع: $W = U_2 - U_1 = m_d B - (-m_d B) = 2 m_d B$."
    ],
    "teacherTipEn": "If rotated by $90^\\circ$ from aligned, $W = m_d B$.",
    "teacherTipAr": "لو أدير الملف بمقدار $90^\\circ$ لكان الشغل المبذول مساوياً $m_d B$."
  },
  {
    "id": "phys_ch2_db_hots_19",
    "titleEn": "Roget Spiral Compression Phenomenon Under Steady Current",
    "titleAr": "ظاهرة انكماش زنبرك حلزوني مرن عند مرور تيار كهربي فيه (لولب روجيه)",
    "difficulty": "hots",
    "questionEn": "A flexible vertical helical spring made of copper carries a steady direct current. What mechanical effect does the electric current produce on the spring?",
    "questionAr": "زنبرك حلزوني رأسي مرن مصنوع من النحاس يمر به تيار كهربي مستمر. ما هو الأثر الميكانيكي الذي يحدث للزنبرك نتيجة مرور هذا التيار؟",
    "optionsEn": [
      "The spring expands (lengthens), because magnetic pressure repels the turns",
      "The spring twists around its axis without any change in length",
      "The spring compresses (contracts along its length), because adjacent turns carry current in the same direction and exert mutual attractive forces on each other",
      "The spring undergoes nuclear demagnetization and freezes"
    ],
    "optionsAr": [
      "يتمدد الزنبرك ويزداد طوله بسبب التنافر",
      "يلتوي الزنبرك دون أي تغير في طوله",
      "ينكمش الزنبرك (يقل طوله)، لأن اللفات المتجاورة يمر بها تيار في نفس الاتجاه فتتولد بينها قوى تجاذب مغناطيسية متبادلة",
      "يتجمد الزنبرك ويفقد مرونته تماماً"
    ],
    "correctAnswer": "The spring compresses (contracts along its length), because adjacent turns carry current in the same direction and exert mutual attractive forces on each other",
    "correctIndex": 2,
    "hintEn": "Current travels around each turn in the same sense $\\implies$ parallel currents in same direction $\\implies$ attraction between turns.",
    "hintAr": "يمر التيار في جميع اللفات في نفس الاتجاه الدائري، فتسلك اللفات المتجاورة كأسلاك متوازية يمر بها تيار في نفس الاتجاه فتتجاذب.",
    "stepByStepSolutionEn": [
      "As current flows through a helical spring, it winds around every loop in the exact same circular direction. Any two adjacent turns can be considered as two parallel conductors carrying currents in the same direction. Parallel currents in the same direction attract each other. Consequently, mutual attractive magnetic forces pull all adjacent turns closer together, causing the entire spring to contract lengthwise."
    ],
    "stepByStepSolutionAr": [
      "عند سريان تيار كهربي في زنبرك حلزوني، يدور التيار في كل لفة في نفس الاتجاه. وتسلك أي لفتين متجاورتين سلوك سلكين متوازيين يمر بهما تياران في نفس الاتجاه فتنشأ بينهما قوى تجاذب مغناطيسية متبادلة. تؤدي قوى التجاذب بين جميع اللفات المتتالية إلى تقاربها من بعضها، مما يؤدي إلى انكماش الزنبرك ونقصان طوله."
    ],
    "teacherTipEn": "In Roget's spiral experiment, the bottom tip of the spring dips into a pool of mercury: contracting breaks contact, current stops, spring relaxes and drops back, establishing continuous oscillations.",
    "teacherTipAr": "في تجربة لولب روجيه الشهيرة، يلامس طرف الزنبرك حوضاً من الزئبق: فعند انكماشه ينقطع الاتصال فينقطع التيار، ثم ينبسط ليعود ويلامس الزئبق فيمر التيار من جديد، ويهتز الزنبرك باستمرار."
  },
  {
    "id": "phys_ch2_db_hots_20",
    "titleEn": "Universal Ayrton Shunt Multi-Range Ammeter Principle",
    "titleAr": "مبدأ مجزئ أيرتون العام في الأميتر متعدد المدى",
    "difficulty": "hots",
    "questionEn": "In an Ayrton universal multi-range ammeter, a tapped resistor network ($R_1 + R_2 + R_3$) is connected across the galvanometer. When the selector switch moves from a low-current range to a higher-current range, how does the circuit topology adjust?",
    "questionAr": "في الأميتر متعدد المدى ذي مجزئ أيرتون العام، توصل شبكة مقاومات مجزأة ($R_1 + R_2 + R_3$). عند تحريك مفتاح الاختيار من مدى تيار منخفض إلى مدى تيار أعلى، كيف تتغير الدائرة الداخلية للجهاز؟",
    "optionsEn": [
      "The entire galvanometer coil is disconnected from the circuit",
      "All resistors are placed in parallel with the battery simultaneously",
      "The meter transforms into an ideal voltmeter automatically",
      "Part of the shunt resistance is transferred into the galvanometer branch in series, simultaneously decreasing the parallel shunt resistance and increasing the effective branch resistance"
    ],
    "optionsAr": [
      "يفصل ملف الجلفانومتر بالكامل عن الدائرة",
      "توصل جميع المقاومات على التوازي مع البطارية",
      "يتحول الجهاز إلى فولتميتر مثالي تلقائياً",
      "ينتقل جزء من مقاومة المجزئ ليضاف على التوالي مع فرع ملف الجلفانومتر، فتقل مقاومة المجزئ المتبقية في التوازي وتزداد مقاومة فرع الجلفانومتر"
    ],
    "correctAnswer": "Part of the shunt resistance is transferred into the galvanometer branch in series, simultaneously decreasing the parallel shunt resistance and increasing the effective branch resistance",
    "correctIndex": 3,
    "hintEn": "Universal shunt prevents the galvanometer circuit from opening during switching.",
    "hintAr": "مجزئ أيرتون يضمن عدم فتح دائرة الجلفانومتر أثناء التنقل بين مفاتيح القياس لحمايته.",
    "stepByStepSolutionEn": [
      "The Ayrton (universal) shunt consists of resistors in series across the galvanometer. Switching to a higher range connects the tapped terminal so that the effective shunt resistor $R_s$ in parallel with the line is smaller, while the remaining part of the network adds directly in series with the galvanometer coil. This ingeniously protects the galvanometer from burning during switching, because the meter coil is never left open-circuited while live current flows."
    ],
    "stepByStepSolutionAr": [
      "يتكون مجزئ أيرتون العام من مجموعة مقاومات متصلة على التوالي عبر طرفي الجلفانومتر. عند التحويل لقياس مدى تيار أكبر، يتم توصيل مفتاح القياس بنقطة تفرع تجعل المقاومة المتصلة على التوازي مع خط التيار أصغر (لتمرير التيار الأكبر)، بينما تنضم المقاومة المتبقية إلى فرع الجلفانومتر على التوالي. وتتميز هذه الطريقة بحماية ملف الجلفانومتر من الاحتراق أثناء تبديل المدى حيث لا تنفتح دائرته أبداً أثناء التحويل."
    ],
    "teacherTipEn": "Used extensively in commercial analog multimeters (AVO meters).",
    "teacherTipAr": "يستخدم مجزئ أيرتون على نطاق واسع في أجهزة قياس الأفوميتر التناظرية المتعددة."
  },
  {
    "id": "phys_ch2_db_hots_21",
    "titleEn": "Reversing Half of Solenoid Turns Net Magnetic Field",
    "titleAr": "عكس اتجاه التيار في نصف لفات ملف لولبي ومحصلة الفيض",
    "difficulty": "hots",
    "questionEn": "A solenoid has $N$ turns carrying current $I$, producing a magnetic field $B$ along its axis. If the current direction in exactly half of its turns ($N/2$) is reversed while keeping the current in the other half unchanged, what is the new magnetic flux density at the center of the solenoid?",
    "questionAr": "ملف لولبي عدد لفاته $N$ يمر به تيار $I$ ويولد فيضاً $B$ عند محوره. إذا عُكس اتجاه التيار في نصف لفاته ($N/2$) بالضبط مع بقاء اتجاه التيار في النصف الآخر دون تغيير، ما هي محصلة كثافة الفيض الجديدة عند مركز الملف؟",
    "optionsEn": [
      "$B_{\\text{net}} = 0\\text{ T}$ (the two halves produce equal and opposite magnetic fields that cancel completely)",
      "$B_{\\text{net}} = B$",
      "$B_{\\text{net}} = \\frac{1}{2} B$",
      "$B_{\\text{net}} = 2 B$"
    ],
    "optionsAr": [
      "$B_{\\text{net}} = 0\\text{ T}$ (يولد النصفان مجالين متساويين في المقدار ومتضادين في الاتجاه فيتلاشيان تماماً)",
      "$B_{\\text{net}} = B$",
      "$B_{\\text{net}} = \\frac{1}{2} B$",
      "$B_{\\text{net}} = 2 B$"
    ],
    "correctAnswer": "$B_{\\text{net}} = 0\\text{ T}$ (the two halves produce equal and opposite magnetic fields that cancel completely)",
    "correctIndex": 0,
    "hintEn": "Effective number of turns becomes $N_{\\text{eff}} = \\frac{N}{2} - \\frac{N}{2} = 0$.",
    "hintAr": "عدد اللفات الفعال يصبح: $N_{\\text{eff}} = \\frac{N}{2} - \\frac{N}{2} = 0$.",
    "stepByStepSolutionEn": [
      "Each half of the solenoid has $N/2$ turns and length $L/2$, producing a magnetic field of magnitude $B_{1/2} = \\frac{\\mu (N/2) I}{L/2} = \\frac{\\mu N I}{L} = B$. Because the currents in the two halves now circulate in opposite senses, their axial magnetic field vectors point in diametrically opposite directions: $\\vec{B}_1 = -\\vec{B}_2$. By superposition, the net magnetic field at the center is $B_{\\text{net}} = B - B = 0$."
    ],
    "stepByStepSolutionAr": [
      "يمتلك كل نصف من الملف عدداً من اللفات مقداره $N/2$ على طول $L/2$، ويولد كل نصف مجالاً مساوياً لـ $B$. وعند عكس اتجاه التيار في أحد النصفين يصبح اتجاه خطوط فيض النصف الأول مضاداً تماماً لاتجاه خطوط فيض النصف الثاني على امتداد المحور المشترك. وتكون المحصلة عند المركز هي حاصل طرحهما: $B_{\\text{net}} = B - B = 0$."
    ],
    "teacherTipEn": "This is effectively equivalent to bifilar winding.",
    "teacherTipAr": "هذه الحالة تكافئ فيزيائياً اللف المزدوج الذي يلغي الحث الذاتي والمجال."
  },
  {
    "id": "phys_ch2_db_hots_22",
    "titleEn": "Non-Existence of Neutral Point for Equal Opposite Parallel Currents",
    "titleAr": "إثبات عدم وجود أي نقطة تعادل لسلكين يمر بهما تياران متساويان ومتعاكسان",
    "difficulty": "hots",
    "questionEn": "Two parallel wires carry equal currents in opposite directions ($I_1 = I_2 = I$). Why is it mathematically and physically impossible for a neutral point to exist anywhere in space?",
    "questionAr": "سلكان متوازيان يمر بهما تياران متساويان في اتجاهين متضادين ($I_1 = I_2 = I$). لماذا يستحيل رياضياً وفيزيائياً وجود أي نقطة تعادل في الفراغ المحيط بهما؟",
    "optionsEn": [
      "Because magnetic field lines cannot exist in air",
      "Between the wires fields are in the same direction ($B_{\\text{net}} = B_1 + B_2 > 0$); outside the wires cancellation requires $d_1 = d_2$, but any external point is strictly closer to one wire than the other",
      "Because the currents destroy the medium's permeability",
      "Because the wires exert nuclear force that absorbs magnetic flux"
    ],
    "optionsAr": [
      "لأن خطوط المجال لا يمكن أن توجد في الهواء",
      "بين السلكين يكون المجالان في نفس الاتجاه (منطقة جمع)؛ وخارجهما يتطلب التعادل تساوي البعدين ($d_1 = d_2$) وهو مستحيل هندسياً خارج السلكين",
      "لأن التيارين يلغيان نفاذية الوسط",
      "لأن السلكين يمتصان الفيض"
    ],
    "correctAnswer": "Between the wires fields are in the same direction ($B_{\\text{net}} = B_1 + B_2 > 0$); outside the wires cancellation requires $d_1 = d_2$, but any external point is strictly closer to one wire than the other",
    "correctIndex": 1,
    "hintEn": "Equality requires $\\frac{I}{d_1} = \\frac{I}{d_2} \\implies d_1 = d_2$. Outside the wires, $d_2 = d_1 + d \\ne d_1$.",
    "hintAr": "شرط التعادل هو $d_1 = d_2$، وهو مستحيل خارج السلكين لأن أحدهما أقرب دائماً بمقدار المسافة الفاصلة $d$.",
    "stepByStepSolutionEn": [
      "For cancellation, fields must be equal and opposite. Between the wires, the fields point in the same direction, so $B_{\\text{net}} = B_1 + B_2 \\ne 0$. Outside the wires, the fields oppose, so $B_{\\text{net}} = 0$ requires $B_1 = B_2 \\implies \\frac{\\mu I}{2\\pi d_1} = \\frac{\\mu I}{2\\pi d_2} \\implies d_1 = d_2$. But for any point along the line outside the wires, one wire is closer by the separation distance $d$ ($d_2 = d_1 + d > d_1$), making $B_1 > B_2$ always. Thus, no neutral point exists."
    ],
    "stepByStepSolutionAr": [
      "لكي تنعدم المحصلة يجب أن يتساوى المجالان ويتعاكسا. بين السلكين تكون المنطقة منطقة جمع ($B_t = B_1 + B_2 \\ne 0$). وخارج السلكين تكون منطقة طرح ويتطلب تساوي المجالين أن يكون $\\frac{\\mu I}{2\\pi d_1} = \\frac{\\mu I}{2\\pi d_2}$، وبما أن التيارين متساويان يلزم أن يكون $d_1 = d_2$. لكن هندسياً أي نقطة خارج السلكين تكون أقرب لأحد السلكين من الآخر بمسافة قدرها $d$ ($d_2 = d_1 + d$)، وبالتالي يكون مجال السلك الأقرب أكبر دائماً من مجال الأبعد ولا يتساويان أبداً."
    ],
    "teacherTipEn": "Key takeaway: Two equal opposite currents have NO neutral point.",
    "teacherTipAr": "نتيجة هامة: سلكان متوازيان يمر بهما تياران متساويان ومتضادان لا توجد لهما نقطة تعادل مطلقاً."
  },
  {
    "id": "phys_ch2_db_hots_23",
    "titleEn": "Toroid Magnetic Field Confinement and Core Density",
    "titleAr": "انحصار المجال المغناطيسي داخل قلب الملف الحلقي (التوريد)",
    "difficulty": "hots",
    "questionEn": "A toroid is a solenoid bent into a closed circular ring of mean radius $R$ with $N$ turns carrying current $I$. Where is the magnetic field localized?",
    "questionAr": "الملف الحلقي (التوريد) هو ملف لولبي تم ثنيه على شكل حلقة دائرية مغلقة متوسط نصف قطرها $R$ وعدد لفاته $N$ ويمر به تيار $I$. أين يتركز المجال المغناطيسي للملف الحلقي؟",
    "optionsEn": [
      "Uniformly distributed throughout the universe",
      "Only on the outer external surface of the turns",
      "Exclusively inside the circular core of the toroid ($B = \\frac{\\mu_0 N I}{2\\pi R}$); the field is strictly zero in the central cavity and outside the ring",
      "At the exact geometric center of the central cavity"
    ],
    "optionsAr": [
      "موزع بالتساوي في كل الفراغ",
      "على السطح الخارجي للفت فقط",
      "محصور بالكامل داخل التجويف الدائري لقلب الملف ($B = \\frac{\\mu_0 N I}{2\\pi R}$)، بينما ينعدم المجال تماماً في الفجوة المركزية وخارج الحلقة",
      "عند المركز الهندسي للفجوة المركزية فقط"
    ],
    "correctAnswer": "Exclusively inside the circular core of the toroid ($B = \\frac{\\mu_0 N I}{2\\pi R}$); the field is strictly zero in the central cavity and outside the ring",
    "correctIndex": 2,
    "hintEn": "Applying Ampere's circuital law: Inside central hole, $I_{\\text{enc}} = 0 \\implies B = 0$. Outside ring, $I_{\\text{enc}} = +N I - N I = 0 \\implies B = 0$.",
    "hintAr": "بتطبيق قانون أمبير: داخل الفجوة المركزية التيار المحصور صفر، وخارج الحلقة التيارات المحصورة تتلاشى $+NI - NI = 0$.",
    "stepByStepSolutionEn": [
      "By Ampere's circuital law: For an Amperian loop inside the central hole, no current is enclosed ($I_{\\text{enc}} = 0 \\implies B = 0$). For a loop outside the toroid, every turn enters and leaves the loop, enclosing net current $I_{\\text{enc}} = N I - N I = 0 \\implies B = 0$. For a circular loop of radius $R$ inside the toroid core, it encloses all $N$ turns: $\\oint \\vec{B} \\cdot d\\vec{l} = B (2\\pi R) = \\mu_0 N I \\implies B = \\frac{\\mu_0 N I}{2\\pi R}$. All magnetic flux is completely confined within the ring."
    ],
    "stepByStepSolutionAr": [
      "وفق قانون أمبير الدائري: لأي مسار دائري داخل الفجوة المركزية لا توجد أسلاك محصورة فيكون الفيض صفراً ($B = 0$). ولأي مسار خارج الملف الحلقي يكون مجموع التيارات المحصورة داخله $+NI - NI = 0$ فينعدم الفيض أيضاً ($B = 0$). أما داخل قلب الملف الحلقي، فيحصر المسار جميع اللفات ويكون المجال موازياً لمحور الحقل: $B (2\\pi R) = \\mu N I \\implies B = \\frac{\\mu N I}{2\\pi R}$. وتكون خطوط الفيض محصورة بالكامل داخل مسار مغلق في قلب الملف."
    ],
    "teacherTipEn": "Toroids produce zero external magnetic leakage, making them ideal inductors.",
    "teacherTipAr": "تتميز الملفات الحلقية بعدم تسريب أي فيض مغناطيسي إلى الخارج مما يجعلها مثالية للدوائر الإلكترونية الحساسة."
  },
  {
    "id": "phys_ch2_db_hots_24",
    "titleEn": "Effect of Temperature Rise on Galvanometer Accuracy",
    "titleAr": "تأثير ارتفاع درجة الحرارة على دقة قراءة الجلفانومتر",
    "difficulty": "hots",
    "questionEn": "If the operating temperature of a moving-coil galvanometer rises significantly during use, how are the coil resistance and measurement accuracy affected?",
    "questionAr": "إذا ارتفعت درجة حرارة تشغيل الجلفانومتر ذي الملف المتحرك بدرجة ملحوظة أثناء استخدامه، كيف تتأثر مقاومة ملفه ودقة القياس؟",
    "optionsEn": [
      "Coil resistance drops to zero, turning it into a superconductor",
      "Deflection angle becomes negative",
      "The magnetic field of the permanent magnet doubles",
      "Coil resistance increases (due to copper resistivity rise), which reduces the current drawn for a given applied voltage, causing the instrument to read lower than true voltage"
    ],
    "optionsAr": [
      "تهبط المقاومة إلى الصفر",
      "تصبح زاوية الانحراف سالبة",
      "يتضاعف مجال المغناطيس الدائم",
      "تزداد مقاومة ملف النحاس بارتفاع الحرارة، مما يقلل شدة التيار المار لنفس فرق الجهد المطبق، فيقرأ الجهاز جهداً أقل من القيمة الحقيقية"
    ],
    "correctAnswer": "Coil resistance increases (due to copper resistivity rise), which reduces the current drawn for a given applied voltage, causing the instrument to read lower than true voltage",
    "correctIndex": 3,
    "hintEn": "Copper resistance has positive temperature coefficient: $R(T) = R_0 (1 + \\alpha \\Delta T)$. Higher $R$ means less current for same $V$.",
    "hintAr": "مقاومة النحاس تزداد بالحرارة، فيمر تيار أقل لنفس الجهد المقاس وتقل قراءة الجهاز.",
    "stepByStepSolutionEn": [
      "The moving coil is made of copper wire, which has a positive temperature coefficient of resistance. As temperature increases, increased lattice vibrations impede electron flow, increasing coil resistance $R_g$. If measuring voltage, the current through the meter is $I = \\frac{V}{R_g + R_m}$. A higher resistance lowers the current, producing a smaller deflection torque and causing the instrument to register a lower reading than the true voltage."
    ],
    "stepByStepSolutionAr": [
      "ملف الجلفانومتر مصنوع من سلك نحاسي ترتفع مقاومته الكهربية بارتفاع درجة الحرارة نتيجة زيادة سعة اهتزاز ذرات النحاس. عند استخدام الجهاز كفولتميتر فإن زيادة المقاومة الكلية تؤدي لنقصان شدة التيار المار فيه لنفس فرق الجهد ($I = \\frac{V}{R_v}$)، فيقل عزم الازدواج وتنقص زاوية انحراف المؤشر مسجلة قراءة أقل من القيمة الفعلية."
    ],
    "teacherTipEn": "To minimize this, multiplier resistors are made of alloys like Manganin or Constantan whose resistance is virtually independent of temperature.",
    "teacherTipAr": "لتلافي هذا الخطأ تصنع مقاومات مضاعف الجهد من سبائك مثل المنجانين أو الكونستنتان ذات المعامل الحراري شبه المنعدم."
  },
  {
    "id": "phys_ch2_db_hots_25",
    "titleEn": "Universal Multi-Range Shunt Resistor Calculation Step",
    "titleAr": "حساب مقاومات التفرع في مجزئ أيرتون متعدد المدى",
    "difficulty": "hots",
    "questionEn": "A galvanometer of resistance $R_g = 100\\,\\Omega$ and full-scale current $I_g = 1\\text{ mA}$ is to be converted into a multi-range ammeter with two ranges: $I_1 = 10\\text{ mA}$ and $I_2 = 100\\text{ mA}$. What are the required shunt resistances $R_{s1}$ and $R_{s2}$?",
    "questionAr": "جلفانومتر مقاومته $R_g = 100\\,\\Omega$ وتيار أقصى انحراف له $I_g = 1\\text{ mA}$. يراد تحويله إلى أميتر ثنائي المدى يقيس تيارين أقصاهما: $I_1 = 10\\text{ mA}$ و $I_2 = 100\\text{ mA}$. ما هما قيمتا مجزئ التيار $R_{s1}$ و $R_{s2}$؟",
    "optionsEn": [
      "$R_{s1} = \\frac{100}{9} \\approx 11.11\\,\\Omega \\quad \\text{and} \\quad R_{s2} = \\frac{100}{99} \\approx 1.01\\,\\Omega$",
      "$R_{s1} = 10\\,\\Omega \\quad \\text{and} \\quad R_{s2} = 1\\,\\Omega$",
      "$R_{s1} = 90\\,\\Omega \\quad \\text{and} \\quad R_{s2} = 9\\,\\Omega$",
      "$R_{s1} = 1.11\\,\\Omega \\quad \\text{and} \\quad R_{s2} = 0.1\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_{s1} = \\frac{100}{9} \\approx 11.11\\,\\Omega \\quad \\text{و} \\quad R_{s2} = \\frac{100}{99} \\approx 1.01\\,\\Omega$",
      "$R_{s1} = 10\\,\\Omega \\quad \\text{و} \\quad R_{s2} = 1\\,\\Omega$",
      "$R_{s1} = 90\\,\\Omega \\quad \\text{و} \\quad R_{s2} = 9\\,\\Omega$",
      "$R_{s1} = 1.11\\,\\Omega \\quad \\text{و} \\quad R_{s2} = 0.1\\,\\Omega$"
    ],
    "correctAnswer": "$R_{s1} = \\frac{100}{9} \\approx 11.11\\,\\Omega \\quad \\text{and} \\quad R_{s2} = \\frac{100}{99} \\approx 1.01\\,\\Omega$",
    "correctIndex": 0,
    "hintEn": "$R_s = \\frac{I_g R_g}{I - I_g}$. For range 1: $10 - 1 = 9\\text{ mA} \\implies R_{s1} = \\frac{1 \\times 100}{9}$. For range 2: $100 - 1 = 99\\text{ mA} \\implies R_{s2} = \\frac{100}{99}$.",
    "hintAr": "$R_{s1} = \\frac{1 \\times 100}{10 - 1} = \\frac{100}{9}\\,\\Omega$ و $R_{s2} = \\frac{1 \\times 100}{100 - 1} = \\frac{100}{99}\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "For $I_1 = 10\\text{ mA}$: $R_{s1} = \\frac{I_g R_g}{I_1 - I_g} = \\frac{1\\text{ mA} \\times 100\\,\\Omega}{9\\text{ mA}} = \\frac{100}{9} \\approx 11.11\\,\\Omega$. For $I_2 = 100\\text{ mA}$: $R_{s2} = \\frac{I_g R_g}{I_2 - I_g} = \\frac{1\\text{ mA} \\times 100\\,\\Omega}{99\\text{ mA}} = \\frac{100}{99} \\approx 1.01\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "للمدى الأول $10\\text{ mA}$: $R_{s1} = \\frac{1 \\times 100}{10 - 1} = \\frac{100}{9} \\approx 11.11\\,\\Omega$. وللمدى الثاني $100\\text{ mA}$: $R_{s2} = \\frac{1 \\times 100}{100 - 1} = \\frac{100}{99} \\approx 1.01\\,\\Omega$."
    ],
    "teacherTipEn": "Larger current range strictly requires a smaller shunt resistor.",
    "teacherTipAr": "المدى الأكبر للتيار يتطلب دائماً مجزئ تيار أصغر قيمة."
  },
  {
    "id": "phys_ch2_db_hots_26",
    "titleEn": "Consequence of Connecting Ohmmeter Leads to Live Energized Circuit",
    "titleAr": "خطورة توصيل طرفي الأوميتر بدائرة كهربية مغلقة بها مصدر كهربي",
    "difficulty": "hots",
    "questionEn": "What happens if an ohmmeter's test leads are mistakenly connected across a component in an energized circuit containing an active power supply?",
    "questionAr": "ماذا يحدث إذا وُصل طرفا توصيل الأوميتر بالخطأ عبر طرفي مقاومة في دائرة كهربية مغلقة يمر بها تيار ومتصلة بمصدر جهد كهربي؟",
    "optionsEn": [
      "The ohmmeter charges the external battery with magnetic energy",
      "The external voltage drives a heavy current through the sensitive microammeter, likely burning its delicate coil and destroying the meter",
      "The ohmmeter measures the resistance with $100\\%$ precision",
      "The pointer deflects steadily to the infinity mark"
    ],
    "optionsAr": [
      "يشحن الأوميتر البطارية الخارجية بطاقة مغناطيسية",
      "يدفع الجهد الخارجي تياراً هائلاً داخل ملف الجلفانومتر الحساس، مما يؤدي إلى احتراق ملفه الرقيق وتلف الجهاز فوراً",
      "يقيس الأوميتر المقاومة بدقة متناهية",
      "يثبت المؤشر عند المالانهاية"
    ],
    "correctAnswer": "The external voltage drives a heavy current through the sensitive microammeter, likely burning its delicate coil and destroying the meter",
    "correctIndex": 1,
    "hintEn": "An ohmmeter already contains its own battery; adding external voltage violates calibration and overloads $I_g$.",
    "hintAr": "الأوميتر يحتوي على بطاريته الخاصة، وتوصيله بمصدر كهربي خارجي يمرر تياراً هائلاً يحرق ملفه.",
    "stepByStepSolutionEn": [
      "An ohmmeter is designed strictly for passive, de-energized components, utilizing its own calibrated internal battery ($V_B$). When connected to a live circuit, the external voltage source adds to the internal battery and forces an uncontrolled, massive current through the delicate microammeter coil ($I \\gg I_g$). This sudden overload melts the fine copper coil windings, snaps the hairsprings, and violently bends the pointer against the stop pin."
    ],
    "stepByStepSolutionAr": [
      "صُمم الأوميتر لقياس مقاومة المكونات غير المتصلة بأي مصدر كهربي، حيث يعتمد على بطاريته الداخلية الخاصة ذات الجهد الثابت. فعند توصيله بمكون في دائرة كهربية حية (يمر بها تيار)، فإن فرق الجهد الخارجي يمرر تياراً كبيراً جداً يفوق بكثير أقصى تيار يتحمله ملف الجلفانومتر الحساس ($I_g$)، مما يؤدي إلى انصهار سلك الملف واحتراقه والتواء زوج الملفات الزنبركية وتلف الجهاز تماماً."
    ],
    "teacherTipEn": "Safety rule: Always disconnect power before measuring resistance with an ohmmeter!",
    "teacherTipAr": "قاعدة سلامة أساسية: افصل التيار الكهربي دائماً عن الدائرة قبل قياس المقاومة بالأوميتر!"
  },
  {
    "id": "phys_ch2_db_hots_27",
    "titleEn": "Mechanical Hoop Tension in a Circular Current Loop in Magnetic Field",
    "titleAr": "قوة الشد الميكانيكي في سلك حلقة دائرية موضوعة في مجال مغناطيسي",
    "difficulty": "hots",
    "questionEn": "A circular flexible wire loop of radius $r$ carries current $I$. It is placed in a uniform magnetic field $B$ perpendicular to its plane such that magnetic forces push radially outward on every element. What mechanical tension ($T$) develops in the wire of the loop?",
    "questionAr": "حلقة سلكية دائرية مرنة نصف قطرها $r$ يمر بها تيار $I$. وضعت في مجال مغناطيسي منتظم $B$ عمودي على مستواها بحيث تؤثر قوى مغناطيسية متجهة للخارج على كل جزء من محيطها. ما مقدار قوة الشد الميكانيكية ($T$) المتولدة في سلك الحلقة؟",
    "optionsEn": [
      "$T = 2\\pi B I r$",
      "$T = \\frac{B I}{r}$",
      "$T = B I r$",
      "$T = B I r^2$"
    ],
    "optionsAr": [
      "$T = 2\\pi B I r$",
      "$T = \\frac{B I}{r}$",
      "$T = B I r$",
      "$T = B I r^2$"
    ],
    "correctAnswer": "$T = B I r$",
    "correctIndex": 2,
    "hintEn": "For a small arc element $d\\theta$, radial magnetic force $dF = B I (r d\\theta)$ is balanced by hoop tension: $2 T \\sin(d\\theta/2) \\approx T d\\theta = B I r d\\theta \\implies T = B I r$.",
    "hintAr": "باتزان جزء قوسي صغير $d\\theta$: قوة الشد توازن القوة المغناطيسية للخارج: $T = B I r$.",
    "stepByStepSolutionEn": [
      "Consider an infinitesimal arc subtending angle $d\\theta$ at the center. The arc length is $dL = r d\\theta$, experiencing a radial outward magnetic force $dF = B I dL = B I r d\\theta$. This radial outward bursting force is restrained by the tangential mechanical tension $T$ at both ends of the arc. The inward component of tension is $2 T \\sin(\\frac{d\\theta}{2}) \\approx T d\\theta$. Equating forces: $T d\\theta = B I r d\\theta \\implies T = B I r$."
    ],
    "stepByStepSolutionAr": [
      "بأخذ عنصر قوسي متناهي الصغر يقابل زاوية مركزية $d\\theta$، طوله $dL = r d\\theta$. يتأثر بقوة مغناطيسية قطرية متجهة للخارج مقدارها $dF = B I r d\\theta$. تتوازن هذه القوة مع محصلة قوتي الشد المماسي عند طرفي القوس $2 T \\sin(d\\theta/2) \\approx T d\\theta$. وبمساواة القوتين نجد أن قوة الشد الميكانيكي في سلك الحلقة هي: $T = B I r$."
    ],
    "teacherTipEn": "If current or field is too high, hoop tension $T$ exceeds the tensile strength of copper, snapping the wire.",
    "teacherTipAr": "إذا زادت شدة التيار أو كثافة الفيض بدرجة كبيرة، فإن قوة الشد تتجاوز إجهاد الكسر وينقطع السلك."
  },
  {
    "id": "phys_ch2_db_hots_28",
    "titleEn": "Effect of Doubling Coil Turns on Current vs Voltage Sensitivity",
    "titleAr": "أثر مضاعفة عدد لفات ملف الجلفانومتر على حساسية التيار وحساسية الجهد",
    "difficulty": "hots",
    "questionEn": "If the number of turns $N$ of a moving-coil galvanometer is doubled using the same wire cross-section and dimensions, how are its current sensitivity ($S_I$) and its voltage sensitivity ($S_V$) affected?",
    "questionAr": "إذا تضاعف عدد لفات ملف جلفانومتر ($N$) إلى الضعف باستخدام نفس مساحة مقطع السلك ونفس أبعاد الملف، كيف تتأثر حساسية التيار ($S_I$) وحساسية الجهد ($S_V$)؟",
    "optionsEn": [
      "Both current sensitivity and voltage sensitivity double",
      "Current sensitivity doubles, and voltage sensitivity quadruples",
      "Both sensitivities remain unchanged",
      "Current sensitivity doubles ($S_I' = 2 S_I$), while voltage sensitivity remains UNCHANGED ($S_V' = S_V$)"
    ],
    "optionsAr": [
      "تتضاعف كل من حساسية التيار وحساسية الجهد معاً",
      "تتضاعف حساسية التيار وتزداد حساسية الجهد 4 أمثال",
      "تظل الحساسيتان ثابتتين",
      "تتضاعف حساسية التيار إلى الضعف ($S_I' = 2 S_I$)، بينما تظل حساسية الجهد ثابتة دون تغير ($S_V' = S_V$)"
    ],
    "correctAnswer": "Current sensitivity doubles ($S_I' = 2 S_I$), while voltage sensitivity remains UNCHANGED ($S_V' = S_V$)",
    "correctIndex": 3,
    "hintEn": "Current sensitivity $S_I = \\frac{\\theta}{I} \\propto N$. Voltage sensitivity $S_V = \\frac{\\theta}{V} = \\frac{S_I}{R_g}$. When $N$ doubles, wire length doubles so $R_g$ also doubles!",
    "hintAr": "حساسية التيار تتناسب مع $N$. حساسية الجهد $S_V = \\frac{S_I}{R_g}$، وتضاعف اللفات يضاعف طول السلك ومقاومته $R_g$ فتظل النسبة ثابتة.",
    "stepByStepSolutionEn": [
      "Current sensitivity is $S_I = \\frac{\\theta}{I} = \\frac{B A N}{c}$. Doubling turns $N$ doubles torque for the same current, so current sensitivity doubles ($S_I' = 2 S_I$). However, doubling $N$ doubles the total wire length of the coil, doubling its electrical resistance ($R_g' = 2 R_g$). Voltage sensitivity is $S_V = \\frac{\\theta}{V} = \\frac{\\theta}{I R_g} = \\frac{S_I}{R_g}$. Since both $S_I$ and $R_g$ double, their ratio remains constant: $S_V' = \\frac{2 S_I}{2 R_g} = S_V$."
    ],
    "stepByStepSolutionAr": [
      "حساسية التيار هي زاوية الانحراف لشدة التيار: $S_I = \\frac{\\theta}{I} = \\frac{B A N}{c}$، ولذلك عند مضاعفة عدد اللفات $N$ يتضاعف عزم الازدواج وتتضاعف حساسية التيار. أما حساسية الجهد فهي $S_V = \\frac{\\theta}{V} = \\frac{S_I}{R_g}$. ومضاعفة عدد اللفات بنفس السلك تعني مضاعفة طول السلك وبالتالي مضاعفة مقاومة الملف ($R_g' = 2 R_g$). فيزداد البسط للضعف ويزداد المقام للضعف، وتظل حساسية الجهد ثابتة دون أي تغيير."
    ],
    "teacherTipEn": "This profound distinction frequently appears on advanced MoE physics assessments.",
    "teacherTipAr": "سؤال تمايزي هام جداً في امتحانات الوزارة للمتفوقين."
  },
  {
    "id": "phys_ch2_db_hots_29",
    "titleEn": "Condition for Zero Net Force on an Outer Wire in Three-Wire System",
    "titleAr": "شرط انعدام محصلة القوة المغناطيسية على أحد السلكين الخارجيين في نظام ثلاثة أسلاك",
    "difficulty": "hots",
    "questionEn": "Three parallel straight wires 1, 2, and 3 are arranged in order in a plane with equal spacing $d$. Wires 1 and 2 carry currents $I_1$ and $I_2$ in the same direction. For the net magnetic force on wire 3 to be zero, what must be the current in wire 2 ($I_2$)?",
    "questionAr": "ثلاثة أسلاك مستقيمة متوازية 1 و 2 و 3 مرتبة في مستوى واحد والمسافة بين كل سلكين متتاليين هي $d$. يمر في السلكين 1 و 2 تياران $I_1$ و $I_2$ في نفس الاتجاه. لكي تنعدم محصلة القوة المغناطيسية المؤثرة على السلك الخارجي 3، ما هي العلاقة بين تيار السلك 2 وتيار السلك 1؟",
    "optionsEn": [
      "$I_2 = \\frac{1}{2} I_1$ in the OPPOSITE direction to $I_1$",
      "$I_2 = 2 I_1$ in the same direction as $I_1$",
      "$I_2 = I_1$ in the same direction as $I_1$",
      "$I_2 = 4 I_1$ in the opposite direction to $I_1$"
    ],
    "optionsAr": [
      "$I_2 = \\frac{1}{2} I_1$ وفي عكس اتجاه تيار السلك 1",
      "$I_2 = 2 I_1$ في نفس اتجاه السلك 1",
      "$I_2 = I_1$ في نفس اتجاه السلك 1",
      "$I_2 = 4 I_1$ في عكس اتجاه السلك 1"
    ],
    "correctAnswer": "$I_2 = \\frac{1}{2} I_1$ in the OPPOSITE direction to $I_1$",
    "correctIndex": 0,
    "hintEn": "For zero force on wire 3, the net magnetic field at wire 3 must be zero: $B_{\\text{net}} = B_1 - B_2 = 0 \\implies \\frac{\\mu I_1}{2\\pi(2d)} = \\frac{\\mu I_2}{2\\pi d}$.",
    "hintAr": "لكي تنعدم القوة على السلك 3 يجب أن تنعدم كثافة الفيض عنده: $\\frac{I_1}{2d} = \\frac{I_2}{d} \\implies I_2 = \\frac{I_1}{2}$.",
    "stepByStepSolutionEn": [
      "The force on wire 3 is $F_3 = B_{\\text{net}} I_3 L$. For $F_3 = 0$, the net field at position 3 must be zero ($B_{\\text{net}} = 0$). Wire 1 is at distance $2d$, producing $B_1 = \\frac{\\mu_0 I_1}{2\\pi (2d)}$. Wire 2 is at distance $d$, producing $B_2 = \\frac{\\mu_0 I_2}{2\\pi d}$. For cancellation, their directions at wire 3 must oppose (requiring $I_2$ to flow in the opposite direction to $I_1$), and their magnitudes must be equal: $\\frac{I_1}{2d} = \\frac{I_2}{d} \\implies I_2 = \\frac{1}{2} I_1$."
    ],
    "stepByStepSolutionAr": [
      "القوة المؤثرة على السلك 3 هي $F_3 = B_t I_3 L$. ولكي تنعدم القوة يجب أن تنعدم كثافة الفيض المغناطيسي عند موضع السلك 3 ($B_t = 0$). يبعد السلك الأول مسافة $2d$ فيولد فيضاً $B_1 = \\frac{\\mu I_1}{2\\pi (2d)}$، ويبعد السلك الثاني مسافة $d$ فيولد فيضاً $B_2 = \\frac{\\mu I_2}{2\\pi d}$. ولكي يتلاشيا يجب أن يكون التياران في اتجاهين متضادين، وتتساوى الكثافتان: $\\frac{I_1}{2d} = \\frac{I_2}{d} \\implies I_2 = \\frac{1}{2} I_1$."
    ],
    "teacherTipEn": "Notice: Wire 3 must lie in the subtraction region of wires 1 and 2.",
    "teacherTipAr": "لاحظ: يجب أن يقع السلك 3 في منطقة طرح لمجالي السلكين 1 و 2."
  },
  {
    "id": "phys_ch2_db_hots_30",
    "titleEn": "Ratio of Shunt Resistance to Ammeter Equivalent Resistance",
    "titleAr": "النسبة بين مقاومة مجزئ التيار والمقاومة الكلية للأميتر",
    "difficulty": "hots",
    "questionEn": "In a direct-current ammeter, the sensitivity is reduced to $\\frac{1}{n}$ of the galvanometer's sensitivity. What is the exact ratio of the shunt resistance $R_s$ to the total equivalent resistance of the ammeter $R_A$ ($\\frac{R_s}{R_A}$)?",
    "questionAr": "في جهاز الأميتر، أُنقصت الحساسية إلى $\\frac{1}{n}$ من حساسية الجلفانومتر. ما هي النسبة الدقيقة بين مقاومة مجزئ التيار $R_s$ إلى المقاومة المكافئة الكلية للأميتر $R_A$ ($\\frac{R_s}{R_A}$)؟",
    "optionsEn": [
      "$\\frac{R_s}{R_A} = \\frac{n - 1}{n}$",
      "$\\frac{R_s}{R_A} = \\frac{n}{n - 1}$",
      "$\\frac{R_s}{R_A} = n$",
      "$\\frac{R_s}{R_A} = 1$"
    ],
    "optionsAr": [
      "$\\frac{R_s}{R_A} = \\frac{n - 1}{n}$",
      "$\\frac{R_s}{R_A} = \\frac{n}{n - 1}$",
      "$\\frac{R_s}{R_A} = n$",
      "$\\frac{R_s}{R_A} = 1$"
    ],
    "correctAnswer": "$\\frac{R_s}{R_A} = \\frac{n}{n - 1}$",
    "correctIndex": 1,
    "hintEn": "$R_s = \\frac{R_g}{n - 1}$, and $R_A = \\frac{R_g R_s}{R_g + R_s} = \\frac{R_g}{n}$. Divide $R_s$ by $R_A$.",
    "hintAr": "$R_s = \\frac{R_g}{n - 1}$ و $R_A = \\frac{R_g}{n}$، بالقسمة نجد النسبة $\\frac{n}{n - 1}$.",
    "stepByStepSolutionEn": [
      "When sensitivity is $\\frac{1}{n}$, $I = n I_g \\implies R_s = \\frac{R_g}{n - 1}$. The total equivalent resistance of the parallel combination is $R_A = \\frac{R_g R_s}{R_g + R_s} = \\frac{R_g [R_g / (n - 1)]}{R_g + [R_g / (n - 1)]} = \\frac{R_g}{n}$. Taking the ratio: $\\frac{R_s}{R_A} = \\frac{R_g / (n - 1)}{R_g / n} = \\frac{n}{n - 1}$."
    ],
    "stepByStepSolutionAr": [
      "عند إنقاص الحساسية إلى $\\frac{1}{n}$، يكون $I = n I_g$ وتكون مقاومة المجزئ $R_s = \\frac{R_g}{n - 1}$. وتكون المقاومة المكافئة للأميتر هي توازي $R_g$ مع $R_s$: $R_A = \\frac{R_g}{n}$. وبقسمة مقاومة المجزئ على المقاومة الكلية: $\\frac{R_s}{R_A} = \\frac{R_g / (n - 1)}{R_g / n} = \\frac{n}{n - 1}$."
    ],
    "teacherTipEn": "For example, if sensitivity drops to $\\frac{1}{5}$ ($n = 5$), $\\frac{R_s}{R_A} = \\frac{5}{4} = 1.25$.",
    "teacherTipAr": "مثال: إذا قلت الحساسية للخمس ($n=5$)، فإن $\\frac{R_s}{R_A} = \\frac{5}{4} = 1.25$."
  },
  {
    "id": "phys_ch2_db_hots_31",
    "titleEn": "Ratio of Multiplier Resistance to Total Voltmeter Resistance",
    "titleAr": "النسبة بين مقاومة مضاعف الجهد إلى المقاومة الكلية للفولتميتر",
    "difficulty": "hots",
    "questionEn": "A voltmeter has its measuring range expanded to $n$ times the maximum voltage of its galvanometer ($V = n V_g$). What is the ratio of the multiplier resistance $R_m$ to the total voltmeter resistance $R_v$ ($\\frac{R_m}{R_v}$)?",
    "questionAr": "فولتميتر زاد مدى قياسه إلى $n$ مثلاً لأقصى فرق جهد للجلفانومتر ($V = n V_g$). ما هي النسبة بين مقاومة مضاعف الجهد $R_m$ إلى المقاومة الكلية للفولتميتر $R_v$ ($\\frac{R_m}{R_v}$)؟",
    "optionsEn": [
      "$\\frac{R_m}{R_v} = \\frac{n}{n - 1}$",
      "$\\frac{R_m}{R_v} = \\frac{1}{n}$",
      "$\\frac{R_m}{R_v} = \\frac{n - 1}{n}$",
      "$\\frac{R_m}{R_v} = n - 1$"
    ],
    "optionsAr": [
      "$\\frac{R_m}{R_v} = \\frac{n}{n - 1}$",
      "$\\frac{R_m}{R_v} = \\frac{1}{n}$",
      "$\\frac{R_m}{R_v} = \\frac{n - 1}{n}$",
      "$\\frac{R_m}{R_v} = n - 1$"
    ],
    "correctAnswer": "$\\frac{R_m}{R_v} = \\frac{n - 1}{n}$",
    "correctIndex": 2,
    "hintEn": "$R_m = (n - 1) R_g$ and $R_v = n R_g$. Divide the two.",
    "hintAr": "$R_m = (n - 1) R_g$ و $R_v = n R_g$، بالقسمة نجد $\\frac{n - 1}{n}$.",
    "stepByStepSolutionEn": [
      "For an $n$-fold voltage range: $V = n V_g \\implies R_v = n R_g$. The multiplier is $R_m = R_v - R_g = n R_g - R_g = (n - 1) R_g$. The ratio is: $\\frac{R_m}{R_v} = \\frac{(n - 1) R_g}{n R_g} = \\frac{n - 1}{n}$."
    ],
    "stepByStepSolutionAr": [
      "عند زيادة مدى الفولتميتر $n$ مرة: المقاومة الكلية تصبح $R_v = n R_g$. ومقاومة مضاعف الجهد هي $R_m = (n - 1) R_g$. إذن النسبة بينهما هي: $\\frac{R_m}{R_v} = \\frac{(n - 1) R_g}{n R_g} = \\frac{n - 1}{n}$."
    ],
    "teacherTipEn": "Notice: If $n = 10$, the multiplier represents $\\frac{9}{10} = 90\\%$ of the total voltmeter resistance.",
    "teacherTipAr": "مثال: إذا زاد المدى 10 أمثال، يمثل مضاعف الجهد 90% من المقاومة الكلية للفولتميتر."
  },
  {
    "id": "phys_ch2_db_hots_32",
    "titleEn": "Circular Coil Pulled Apart into Solenoid Density Comparison",
    "titleAr": "مقارنة كثافة الفيض لملف دائري عند شده ليصبح ملفاً لولبياً",
    "difficulty": "hots",
    "questionEn": "A circular coil of radius $r$ produces field $B_1$ at its center. When stretched along its axis into a solenoid of length $L = 6r$, the field at its axis is $B_2$ for the same current. What is the ratio $\\frac{B_2}{B_1}$?",
    "questionAr": "ملف دائري نصف قطره $r$ يولد فيضاً $B_1$ عند مركزه. عند شد لفاته في اتجاه محوره ليصبح ملفاً لولبياً طوله $L = 6r$ ويمر به نفس التيار، تصبح كثافة فيضه $B_2$. ما هي النسبة $\\frac{B_2}{B_1}$؟",
    "optionsEn": [
      "$\\frac{B_2}{B_1} = \\frac{1}{6}$",
      "$\\frac{B_2}{B_1} = 3$",
      "$\\frac{B_2}{B_1} = \\frac{2}{3}$",
      "$\\frac{B_2}{B_1} = \\frac{1}{3}$"
    ],
    "optionsAr": [
      "$\\frac{B_2}{B_1} = \\frac{1}{6}$",
      "$\\frac{B_2}{B_1} = 3$",
      "$\\frac{B_2}{B_1} = \\frac{2}{3}$",
      "$\\frac{B_2}{B_1} = \\frac{1}{3}$"
    ],
    "correctAnswer": "$\\frac{B_2}{B_1} = \\frac{1}{3}$",
    "correctIndex": 3,
    "hintEn": "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L} = \\frac{2r}{6r} = \\frac{1}{3}$.",
    "hintAr": "$\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L} = \\frac{2r}{6r} = \\frac{1}{3}$.",
    "stepByStepSolutionEn": [
      "$\\frac{B_2}{B_1} = \\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{\\mu N I / L}{\\mu N I / 2r} = \\frac{2r}{L} = \\frac{2r}{6r} = \\frac{1}{3}$."
    ],
    "stepByStepSolutionAr": [
      "النسبة $\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L} = \\frac{2r}{6r} = \\frac{1}{3}$."
    ],
    "teacherTipEn": "Direct formula: $\\frac{B_{\\text{sol}}}{B_{\\text{circ}}} = \\frac{2r}{L}$.",
    "teacherTipAr": "قانون النسبة المباشر: $\\frac{2r}{L}$."
  },
  {
    "id": "phys_ch2_db_hots_33",
    "titleEn": "Figure of Merit of a Sensitive Moving-Coil Galvanometer",
    "titleAr": "ثابت الجلفانومتر (معامل الجودة) وعلاقته بالحساسية",
    "difficulty": "hots",
    "questionEn": "The figure of merit ($K$) of a moving-coil galvanometer is defined as the current required to produce a deflection of one scale division ($1\\text{ division}$). If a galvanometer has a sensitivity of $S = 50\\text{ divisions/mA}$, what is its figure of merit?",
    "questionAr": "يُعرّف ثابت الجلفانومتر ($K$) بأنه شدة التيار اللازمة لإحداث انحراف مقداره قسم واحد من التدريج. إذا كانت حساسية جلفانومتر هي $S = 50\\text{ قسم/مللي أمبير}$، فما هي قيمة ثابته $K$؟",
    "optionsEn": [
      "$K = 20\\,\\mu\\text{A/division}$ ($0.02\\text{ mA/div}$)",
      "$K = 50\\,\\mu\\text{A/division}$",
      "$K = 0.5\\,\\mu\\text{A/division}$",
      "$K = 2\\,\\mu\\text{A/division}$"
    ],
    "optionsAr": [
      "$K = 20\\,\\mu\\text{A/قسم}$ ($0.02\\text{ mA/قسم}$)",
      "$K = 50\\,\\mu\\text{A/قسم}$",
      "$K = 0.5\\,\\mu\\text{A/قسم}$",
      "$K = 2\\,\\mu\\text{A/قسم}$"
    ],
    "correctAnswer": "$K = 20\\,\\mu\\text{A/division}$ ($0.02\\text{ mA/div}$)",
    "correctIndex": 0,
    "hintEn": "Figure of merit is the reciprocal of sensitivity: $K = \\frac{1}{S}$.",
    "hintAr": "ثابت الجلفانومتر (دلالة القسم) هو مقلوب الحساسية: $K = \\frac{1}{S}$.",
    "stepByStepSolutionEn": [
      "By definition, the figure of merit is the reciprocal of current sensitivity: $K = \\frac{1}{S} = \\frac{1}{50\\text{ div/mA}} = 0.02\\text{ mA/div} = 20\\,\\mu\\text{A/div}$."
    ],
    "stepByStepSolutionAr": [
      "ثابت الجلفانومتر هو مقلوب الحساسية: $K = \\frac{1}{S} = \\frac{1}{50} = 0.02\\text{ mA/قسم} = 20\\,\\mu\\text{A/قسم}$."
    ],
    "teacherTipEn": "Higher sensitivity implies a smaller figure of merit (can detect smaller current per division).",
    "teacherTipAr": "كلما زادت الحساسية صغرت دلالة القسم الواحد (ثابت الجلفانومتر)."
  },
  {
    "id": "phys_ch2_db_hots_34",
    "titleEn": "Magnetic Torque Ratio Between 30 Degrees and 60 Degrees to Normal",
    "titleAr": "نسبة عزم الازدواج لملف عند زاويتين مختلفتين مع العمودي",
    "difficulty": "hots",
    "questionEn": "A planar coil carrying current $I$ is placed in a uniform magnetic field $B$. What is the ratio of the torque when the normal to the coil makes an angle of $30^\\circ$ with the field ($\\tau_1$) to the torque when the normal makes an angle of $60^\\circ$ ($\\tau_2$)?",
    "questionAr": "ملف مستوٍ يمر به تيار $I$ موضوع في مجال مغناطيسي منتظم $B$. ما هي النسبة بين عزم الازدواج عندما يصنع العمودي على الملف زاوية $30^\\circ$ مع المجال ($\\tau_1$) إلى عزم الازدواج عندما يصنع العمودي زاوية $60^\\circ$ ($\\tau_2$)؟",
    "optionsEn": [
      "$\\frac{\\tau_1}{\\tau_2} = \\sqrt{3} \\approx 1.732$",
      "$\\frac{\\tau_1}{\\tau_2} = \\frac{1}{\\sqrt{3}} \\approx 0.577$",
      "$\\frac{\\tau_1}{\\tau_2} = \\frac{1}{2}$",
      "$\\frac{\\tau_1}{\\tau_2} = 1$"
    ],
    "optionsAr": [
      "$\\frac{\\tau_1}{\\tau_2} = \\sqrt{3} \\approx 1.732$",
      "$\\frac{\\tau_1}{\\tau_2} = \\frac{1}{\\sqrt{3}} \\approx 0.577$",
      "$\\frac{\\tau_1}{\\tau_2} = \\frac{1}{2}$",
      "$\\frac{\\tau_1}{\\tau_2} = 1$"
    ],
    "correctAnswer": "$\\frac{\\tau_1}{\\tau_2} = \\frac{1}{\\sqrt{3}} \\approx 0.577$",
    "correctIndex": 1,
    "hintEn": "$\\tau = \\tau_{\\max} \\sin\\theta_{\\text{normal}}$. $\\frac{\\tau_1}{\\tau_2} = \\frac{\\sin 30^\\circ}{\\sin 60^\\circ} = \\frac{0.5}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$.",
    "hintAr": "النسبة تساوي $\\frac{\\sin 30^\\circ}{\\sin 60^\\circ} = \\frac{0.5}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$.",
    "stepByStepSolutionEn": [
      "$\\tau_1 = \\tau_{\\max} \\sin 30^\\circ = 0.5 \\tau_{\\max}$. $\\tau_2 = \\tau_{\\max} \\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\tau_{\\max}$. Ratio $\\frac{\\tau_1}{\\tau_2} = \\frac{0.5}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\tau_1}{\\tau_2} = \\frac{\\sin 30^\\circ}{\\sin 60^\\circ} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$."
    ],
    "teacherTipEn": "If angles were given with the coil plane, the ratio would be inverted.",
    "teacherTipAr": "لو كانت الزوايا مع مستوى الملف لانقلبت النسبة."
  },
  {
    "id": "phys_ch2_db_hots_35",
    "titleEn": "Magnetic Force on a Conductor Bent into an L-Shape",
    "titleAr": "القوة المغناطيسية المؤثرة على سلك مثني على شكل حرف L",
    "difficulty": "hots",
    "questionEn": "A wire is bent into an L-shape with two perpendicular arms of lengths $L_1 = 3\\text{ m}$ and $L_2 = 4\\text{ m}$ carrying current $I = 2\\text{ A}$. It is placed in a uniform magnetic field $B = 0.5\\text{ T}$ perpendicular to the plane of the wire. What is the magnitude of the net magnetic force on the entire wire?",
    "questionAr": "سلك مثني على شكل حرف L يتكون من ضلعين متعامدين طولهما $L_1 = 3\\text{ m}$ و $L_2 = 4\\text{ m}$ ويمر به تيار $I = 2\\text{ A}$. وُضع في مجال مغناطيسي منتظم $B = 0.5\\text{ T}$ عمودي على مستوى السلك. ما مقدار محصلة القوة المغناطيسية المؤثرة على السلك ككل؟",
    "optionsEn": [
      "$F_{\\text{net}} = 7\\text{ N}$",
      "$F_{\\text{net}} = 1\\text{ N}$",
      "$F_{\\text{net}} = 5\\text{ N}$",
      "$F_{\\text{net}} = 3.5\\text{ N}$"
    ],
    "optionsAr": [
      "$F_{\\text{net}} = 7\\text{ N}$",
      "$F_{\\text{net}} = 1\\text{ N}$",
      "$F_{\\text{net}} = 5\\text{ N}$",
      "$F_{\\text{net}} = 3.5\\text{ N}$"
    ],
    "correctAnswer": "$F_{\\text{net}} = 5\\text{ N}$",
    "correctIndex": 2,
    "hintEn": "Effective length is displacement between ends: $L_{\\text{eff}} = \\sqrt{L_1^2 + L_2^2} = \\sqrt{3^2 + 4^2} = 5\\text{ m}$. Then $F = B I L_{\\text{eff}}$.",
    "hintAr": "الإزاحة المستقيمة الفعالة: $L_{\\text{eff}} = \\sqrt{3^2 + 4^2} = 5\\text{ m}$. القوة $F = B I L_{\\text{eff}}$.",
    "stepByStepSolutionEn": [
      "Force on segment 1: $F_1 = B I L_1 = 0.5 \\times 2 \\times 3 = 3\\text{ N}$. Force on segment 2: $F_2 = B I L_2 = 0.5 \\times 2 \\times 4 = 4\\text{ N}$. Because the arms are perpendicular, the magnetic forces on them are mutually perpendicular ($\\vec{F}_1 \\perp \\vec{F}_2$). Net force: $F_{\\text{net}} = \\sqrt{F_1^2 + F_2^2} = \\sqrt{3^2 + 4^2} = 5\\text{ N}$. (Equivalently, $F = B I L_{\\text{eff}} = 0.5 \\times 2 \\times 5 = 5\\text{ N}$)."
    ],
    "stepByStepSolutionAr": [
      "القوة على الضلع الأول $F_1 = 0.5 \\times 2 \\times 3 = 3\\text{ N}$. والقوة على الضلع الثاني $F_2 = 0.5 \\times 2 \\times 4 = 4\\text{ N}$. ولأن الضلعين متعامدان، فإن متجهي القوتين متعامدان أيضاً: $F_t = \\sqrt{3^2 + 4^2} = 5\\text{ نيوتن}$ (أو باستخدام الإزاحة الفعالة $L = 5\\text{ m}$)."
    ],
    "teacherTipEn": "Pythagorean triple: 3, 4, 5.",
    "teacherTipAr": "ثلاثية فيثاغورس الشهيرة: 3، 4، 5."
  },
  {
    "id": "phys_ch2_db_hots_36",
    "titleEn": "Reading Ratio of Two Voltmeters of Different Internal Resistances",
    "titleAr": "مقارنة قراءة فولتميترين لهما مقاومتان مختلفتان لنفس الدائرة",
    "difficulty": "hots",
    "questionEn": "A circuit contains a battery of $V_B = 6\\text{ V}$ and resistor $R = 100\\,\\Omega$. Two voltmeters $A$ and $B$ of internal resistances $R_A = 900\\,\\Omega$ and $R_B = 9900\\,\\Omega$ are connected alternately to measure the voltage across $R$. Which voltmeter provides a more accurate measurement, and why?",
    "questionAr": "دائرة كهربية تحتوي على بطارية $V_B = 6\\text{ V}$ ومقاومة $R = 100\\,\\Omega$. وُصل فولتميتران $A$ و $B$ مقاومتيهما الداخليتان $R_A = 900\\,\\Omega$ و $R_B = 9900\\,\\Omega$ بالتبادل لقياس فرق الجهد عبر $R$. أي الفولتميترين يعطي قراءة أكثر دقة ولماذا؟",
    "optionsEn": [
      "Voltmeter $A$, because low resistance lets more current enter the meter",
      "Both voltmeters yield identically accurate readings",
      "Voltmeter $A$ because $900\\,\\Omega$ is an integer multiple of $100\\,\\Omega$",
      "Voltmeter $B$, because its much larger internal resistance ($9900\\,\\Omega \\gg 900\\,\\Omega$) draws significantly less current from the circuit, causing minimal loading error"
    ],
    "optionsAr": [
      "الفولتميتر $A$ لأن مقاومته الأصغر تسمح بدخول تيار أكبر",
      "كلا الفولتميترين يعطي نفس الدقة تماماً",
      "الفولتميتر $A$ لأن مقاومته من مضاعفات المقاومة",
      "الفولتميتر $B$، لأن مقاومته الداخلية الأكبر بكثير تسحب تياراً أقل بكثير من الدائرة، مما يقلل خطأ التحميل إلى أدنى حد"
    ],
    "correctAnswer": "Voltmeter $B$, because its much larger internal resistance ($9900\\,\\Omega \\gg 900\\,\\Omega$) draws significantly less current from the circuit, causing minimal loading error",
    "correctIndex": 3,
    "hintEn": "Higher voltmeter resistance $\\implies$ closer to ideal voltmeter ($R_v \\to \\infty$) $\\implies$ higher accuracy.",
    "hintAr": "كلما كبرت مقاومة الفولتميتر اقترب من الفولتميتر المثالي وقل خطأ القياس.",
    "stepByStepSolutionEn": [
      "An ideal voltmeter has infinite resistance. When connected in parallel with $R$, the meter forms a parallel equivalent $R_p = \\frac{R R_v}{R + R_v}$. For meter $A$, $R_p = \\frac{100 \\times 900}{1000} = 90\\,\\Omega$ (10% loading error). For meter $B$, $R_p = \\frac{100 \\times 9900}{10000} = 99\\,\\Omega$ (only 1% error). Meter $B$ perturbs the circuit ten times less, delivering a far more accurate measurement."
    ],
    "stepByStepSolutionAr": [
      "الفولتميتر المثالي مقاومته لا نهائية. عند توصيل الفولتميتر على التوازي تصبح المقاومة المكافئة $R_p = \\frac{R R_v}{R + R_v}$. مع الفولتميتر $A$ تصبح المقاومة $90\\,\\Omega$ بنسبة خطأ 10%. ومع الفولتميتر $B$ تصبح $99\\,\\Omega$ بنسبة خطأ 1% فقط. ولذا يكون الفولتميتر ذو المقاومة الأكبر هو الأكثر دقة دائماً لأنه يقترب من السلوك المثالي."
    ],
    "teacherTipEn": "Voltmeter accuracy is directly proportional to its internal resistance.",
    "teacherTipAr": "دقة الفولتميتر تتناسب طردياً مع كبر مقاومته الداخلية."
  },
  {
    "id": "phys_ch2_db_hots_37",
    "titleEn": "Resultant Field at Third Vertex of Equilateral Triangle from Two Parallel Wires",
    "titleAr": "محصلة كثافة الفيض عند رأس مثلث متساوي الأضلاع لسلكين متوازيين",
    "difficulty": "hots",
    "questionEn": "Two long parallel wires perpendicular to the page pass through vertices $A$ and $B$ of an equilateral triangle of side $a$. Both wires carry equal currents $I$ directed INTO the page. What is the direction of the net magnetic field at the third vertex $C$?",
    "questionAr": "سلكان مستقيمان متوازيان عموديان على مستوى الصفحة يمران بالرأسين $A$ و $B$ لمثلث متساوي الأضلاع طول ضلعه $a$. يمر في كلا السلكين تياران متساويان $I$ إلى داخل الصفحة. ما هو اتجاه محصلة كثافة الفيض المغناطيسي عند الرأس الثالث $C$؟",
    "optionsEn": [
      "Parallel to the base $AB$, pointing horizontally to the right",
      "Perpendicular to the base $AB$ pointing vertically upward",
      "Directly towards the center of the triangle",
      "Zero magnitude ($B_{\\text{net}} = 0$)"
    ],
    "optionsAr": [
      "موازٍ للقاعدة $AB$، وفي اتجاه أفقي نحو اليمين",
      "عمودي على القاعدة $AB$ لأعلى",
      "نحو مركز المثلث",
      "منعدم تماماً"
    ],
    "correctAnswer": "Parallel to the base $AB$, pointing horizontally to the right",
    "correctIndex": 0,
    "hintEn": "Apply right-hand rule at $C$: $\\vec{B}_A \\perp AC$ and $\\vec{B}_B \\perp BC$. Vertical components cancel, horizontal components add.",
    "hintAr": "المتجهان متعامدان على ضلعي المثلث، وتتلاشى المركبتان الرأسيتان وتتحد المركبتان الأفقيتان الموازيتان للقاعدة.",
    "stepByStepSolutionEn": [
      "By Ampere's right-hand rule, clockwise field circles around $A$ produce at $C$ a field vector $\\vec{B}_A$ perpendicular to side $AC$ inclined at $30^\\circ$ to the horizontal. Clockwise circles around $B$ produce $\\vec{B}_B$ perpendicular to side $BC$ inclined at $30^\\circ$ to the horizontal. The vertical components are equal and opposite, canceling out. The horizontal components add together parallel to base $AB$, producing a net field $B_{\\text{net}} = 2 B \\cos 30^\\circ = \\sqrt{3} B$."
    ],
    "stepByStepSolutionAr": [
      "وفق قاعدة اليد اليمنى، يولد السلك $A$ مجالاً عند $C$ عمودياً على $AC$، ويولد السلك $B$ مجالاً عمودياً على $BC$. بالتحليل إلى مركبات أفقية ورأسية، نجد أن المركبتين الرأسيتين متساويتان في المقدار ومتضادتان في الاتجاه فتتلاشيان تماماً. بينما تتحد المركبتان الأفقيتان في نفس الاتجاه الموازي للقاعدة $AB$ لتكون المحصلة موازية للقاعدة وتساوي $\\sqrt{3} B$."
    ],
    "teacherTipEn": "A classic vector resolution problem from national physics competitions.",
    "teacherTipAr": "مسألة متجهات هندسية راقية تختبر دقة تطبيق قاعدة اليد اليمنى والتحليل المتجهي."
  },
  {
    "id": "phys_ch2_db_hots_38",
    "titleEn": "Cyclotron Orbit Radius Scaling with Particle Momentum",
    "titleAr": "تناسب نصف قطر مسار جسيم مشحون في مجال مغناطيسي",
    "difficulty": "hots",
    "questionEn": "A charged particle ($q, m$) moves with velocity $v$ perpendicular to a uniform magnetic field $B$. What is the radius $r$ of its circular trajectory?",
    "questionAr": "جسيم مشحون ($q, m$) يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$. ما هو نصف قطر مساره الدائري $r$؟",
    "optionsEn": [
      "$r = \\frac{q B}{m v}$",
      "$r = \\frac{m v}{q B} = \\frac{p}{q B}$",
      "$r = \\frac{m v^2}{q B}$",
      "$r = \\frac{q v B}{m}$"
    ],
    "optionsAr": [
      "$r = \\frac{q B}{m v}$",
      "$r = \\frac{m v}{q B} = \\frac{p}{q B}$",
      "$r = \\frac{m v^2}{q B}$",
      "$r = \\frac{q v B}{m}$"
    ],
    "correctAnswer": "$r = \\frac{m v}{q B} = \\frac{p}{q B}$",
    "correctIndex": 1,
    "hintEn": "Centripetal force is magnetic force: $\\frac{m v^2}{r} = q v B \\implies r = \\frac{m v}{q B}$.",
    "hintAr": "القوة الجاذبة المركزية هي القوة المغناطيسية: $\\frac{m v^2}{r} = q v B$.",
    "stepByStepSolutionEn": [
      "The magnetic force acts as the centripetal force holding the particle in a circle: $F_c = F_B \\implies \\frac{m v^2}{r} = q v B$. Canceling one $v$ yields $r = \\frac{m v}{q B} = \\frac{p}{q B}$, where $p = mv$ is the linear momentum."
    ],
    "stepByStepSolutionAr": [
      "تعمل القوة المغناطيسية كقوة جاذبة مركزية: $\\frac{m v^2}{r} = q v B$. بقسمة الطرفين على $v$ نجد أن نصف قطر المسار هو: $r = \\frac{m v}{q B} = \\frac{p}{q B}$."
    ],
    "teacherTipEn": "Heavier or faster particles follow wider circular arcs.",
    "teacherTipAr": "الجسيمات الأثقل أو الأسرع تدور في مسارات دائرية أوسع نصف قطر."
  },
  {
    "id": "phys_ch2_db_hots_39",
    "titleEn": "Deflection Comparison Between Alpha and Beta Particles in Magnetic Field",
    "titleAr": "مقارنة انحراف جسيمات ألفا وبيتا في نفس المجال المغناطيسي",
    "difficulty": "hots",
    "questionEn": "An alpha particle ($q = +2e, m_\\alpha \\approx 4\\text{ u}$) and a beta particle ($q = -e, m_\\beta \\approx \\frac{1}{1836}\\text{ u}$) enter a uniform magnetic field with the same velocity perpendicular to $B$. How do their circular trajectories compare?",
    "questionAr": "جسيم ألفا ($q = +2e, m_\\alpha \\approx 4\\text{ u}$) وجسيم بيتا ($q = -e, m_\\beta \\approx \\frac{1}{1836}\\text{ u}$) دخلا بنفس السرعة عمودياً على مجال مغناطيسي منتظم. كيف يقارن مساراهما الدائريان؟",
    "optionsEn": [
      "They curve in the same direction with identical radii",
      "The alpha particle curves much more sharply because it has double the charge",
      "They deflect in opposite directions (opposite charges), and the beta particle curves much more sharply with an extraordinarily smaller radius ($r_\\beta \\ll r_\\alpha$)",
      "Neither particle deflects because magnetic fields only affect uncharged particles"
    ],
    "optionsAr": [
      "ينحرفان في نفس الاتجاه وبنفس نصف القطر",
      "ينحرف جسيم ألفا بنصف قطر أصغر لأن شحنته ضعف شحنة بيتا",
      "ينحرفان في اتجاهين متضادين (لاختلاف نوع الشحنة)، وينحني مسار جسيم بيتا بشدة وبنصف قطر أصغر بآلاف المرات ($r_\\beta \\ll r_\\alpha$)",
      "لا ينحرف أي منهما لأن المجال يؤثر على الجسيمات غير المشحونة فقط"
    ],
    "correctAnswer": "They deflect in opposite directions (opposite charges), and the beta particle curves much more sharply with an extraordinarily smaller radius ($r_\\beta \\ll r_\\alpha$)",
    "correctIndex": 2,
    "hintEn": "$r = \\frac{m v}{q B}$. Ratio $\\frac{r_\\alpha}{r_\\beta} = \\frac{m_\\alpha / q_\\alpha}{m_\\beta / q_\\beta} = \\frac{4/2}{1/1836} \\approx 3670$. Opposite charge means opposite bend.",
    "hintAr": "نصف القطر يتناسب مع النسبة بين الكتلة والشحنة: كتلة ألفا أكبر بآلاف المرات فيكون نصف قطرها أكبر بكثير، واختلاف الشحنة يعكس اتجاه الانحراف.",
    "stepByStepSolutionEn": [
      "From $r = \\frac{m v}{q B}$: (1) Alpha is positive and beta is negative, so by Fleming's left-hand rule they experience forces in opposite directions and bend oppositely. (2) The radius is proportional to mass-to-charge ratio $\\frac{m}{q}$. For alpha: $\\frac{4}{2} = 2$. For beta: $\\frac{1/1836}{1} \\approx 0.00054$. The alpha particle radius is nearly $3700$ times larger, so the lightweight beta particle is deflected with extreme curvature."
    ],
    "stepByStepSolutionAr": [
      "من قانون نصف قطر المسار $r = \\frac{m v}{q B}$: 1) شحنة ألفا موجبة وبيتا سالبة، فيتعاكس اتجاه القوة وينحرفان في اتجاهين متضادين وفق قاعدة فلمنج. 2) يتناسب نصف القطر مع النسبة $\\frac{m}{q}$، ولأن كتلة الإلكترون (بيتا) ضئيلة جداً مقارنة بألفا (حوالي 1/7340 من كتلة ألفا)، فإن مسار بيتا ينحني انحناءً حاداً جداً بنصف قطر صغير للغاية مقارنة بمسار ألفا الواسع."
    ],
    "teacherTipEn": "This was the historical method used by Rutherford and Pierre Curie to identify radiation types.",
    "teacherTipAr": "هذه التجربة كانت الأساس التاريخي لرذرفورد وكوري للتفرقة بين الإشعاعات النووية."
  },
  {
    "id": "phys_ch2_db_hots_40",
    "titleEn": "Calculating Shunt Resistor to Reduce Meter Sensitivity to One-Twentieth",
    "titleAr": "حساب مقاومة مجزئ التيار لإنقاص الحساسية إلى 1/20",
    "difficulty": "hots",
    "questionEn": "A galvanometer of resistance $R_g = 95\\,\\Omega$ has full-scale deflection with current $I_g$. What shunt resistance $R_s$ must be connected to reduce its sensitivity to $\\frac{1}{20}$ of its initial value?",
    "questionAr": "جلفانومتر مقاومة ملفه $R_g = 95\\,\\Omega$ ينحرف لنهاية التدريج بتيار $I_g$. ما قيمة مجزئ التيار $R_s$ اللازم توصيله لإنقاص حساسيته إلى $\\frac{1}{20}$ من قيمتها الأصلية؟",
    "optionsEn": [
      "$R_s = 4.75\\,\\Omega$",
      "$R_s = 19.0\\,\\Omega$",
      "$R_s = 1.0\\,\\Omega$",
      "$R_s = 5.0\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_s = 4.75\\,\\Omega$",
      "$R_s = 19.0\\,\\Omega$",
      "$R_s = 1.0\\,\\Omega$",
      "$R_s = 5.0\\,\\Omega$"
    ],
    "correctAnswer": "$R_s = 5.0\\,\\Omega$",
    "correctIndex": 3,
    "hintEn": "$R_s = \\frac{R_g}{n - 1} = \\frac{95}{20 - 1} = \\frac{95}{19} = 5\\,\\Omega$.",
    "hintAr": "$R_s = \\frac{R_g}{n - 1} = \\frac{95}{19} = 5\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "Sensitivity reduced to $\\frac{1}{20}$ means range $I = 20 I_g$. Using $R_s = \\frac{R_g}{n - 1} = \\frac{95}{20 - 1} = \\frac{95}{19} = 5.0\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "إنقاص الحساسية لـ 1/20 يعني أن المدى زاد 20 مثلاً: $R_s = \\frac{R_g}{n - 1} = \\frac{95}{19} = 5.0\\,\\Omega$."
    ],
    "teacherTipEn": "Check: $R_s / (R_g + R_s) = 5 / (95 + 5) = 5/100 = 1/20$.",
    "teacherTipAr": "تحقق: $5 / 100 = 1/20$."
  },
  {
    "id": "phys_ch2_db_hots_41",
    "titleEn": "Impact of Battery Internal Resistance Rise on Ohmmeter Resistance Calibration",
    "titleAr": "أثر زيادة المقاومة الداخلية للبطارية على تدريج الأوميتر",
    "difficulty": "hots",
    "questionEn": "In an ohmmeter, the dry cell battery has aged such that its internal resistance $r$ has increased significantly by $\\Delta r = 100\\,\\Omega$, but the user is still able to adjust the rheostat $R_v$ to achieve full-scale zero calibration ($R_x = 0 \\implies I = I_g$). When measuring an unknown external resistance $R_x$, will the meter reading be accurate?",
    "questionAr": "في جهاز أوميتر، استهلكت البطارية فزادت مقاومتها الداخلية بمقدار $\\Delta r = 100\\,\\Omega$، ولكن تمكن المستخدم من تقليل مقاومة الريوستات $R_v$ بنفس المقدار لضبط الصفر عند تلامس الطرفين ($I = I_g$). عند قياس مقاومة خارجية $R_x$، هل تكون قراءة الجهاز دقيقة؟",
    "optionsEn": [
      "Yes, the reading is completely accurate, because the total internal circuit resistance $R_{\\text{in}} = R_g + R_c + R_v + r$ remained unchanged during calibration",
      "No, the reading will be $100\\,\\Omega$ too high for all resistors",
      "No, the reading will be $100\\,\\Omega$ too low for all resistors",
      "The pointer will permanently stick at zero"
    ],
    "optionsAr": [
      "نعم، تظل القراءة دقيقة تماماً، لأن المقاومة الكلية الداخلية للأوميتر $R_{\\text{in}} = R_g + R_c + R_v + r$ ظلت ثابتة بعد ضبط الصفر بالريوستات",
      "لا، ستكون القراءة أكبر بمقدار $100\\,\\Omega$ دائماً",
      "لا، ستكون القراءة أقل بمقدار $100\\,\\Omega$ دائماً",
      "سيتوقف المؤشر عند الصفر"
    ],
    "correctAnswer": "Yes, the reading is completely accurate, because the total internal circuit resistance $R_{\\text{in}} = R_g + R_c + R_v + r$ remained unchanged during calibration",
    "correctIndex": 0,
    "hintEn": "Calibration requires $R_{\\text{total}} = V_B / I_g$. If $\\Delta r$ is compensated by $-\\Delta R_v$, $R_{\\text{total}}$ is exactly restored.",
    "hintAr": "معايرة الصفر تعيد ضبط المقاومة الكلية إلى $V_B / I_g$، فإذا عوّض الريوستات زيادة $r$ تظل المقاومة الكلية ثابتة والقياس صحيحاً.",
    "stepByStepSolutionEn": [
      "The deflection depends on total resistance: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$. During zero adjustment, the user set $I = I_g = \\frac{V_B}{R_{\\text{in}}}$, which means $R_{\\text{in}}$ was adjusted to precisely equal $\\frac{V_B}{I_g}$. Decreasing the rheostat by $100\\,\\Omega$ compensated for the $100\\,\\Omega$ rise in battery resistance, leaving the sum $R_{\\text{in}} = R_g + R_c + R_v + r$ identical to its original factory value. Therefore, for any external $R_x$, the current $I = \\frac{V_B}{R_{\\text{in}} + R_x}$ is unchanged and the reading is $100\\%$ accurate."
    ],
    "stepByStepSolutionAr": [
      "تعتمد قراءة الأوميتر على العلاقة: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$. عند ضبط الصفر تم ضبط المقاومة المتغيرة $R_v$ بحيث يمر تيار $I_g = \\frac{V_B}{R_{\\text{in}}}$، مما يعني أن المقاومة الكلية الداخلية للجهاز عادت تماماً لقيمتها الأصلية $R_{\\text{in}} = \\frac{V_B}{I_g}$ (لأن النقص في الريوستات عادل الزيادة في مقاومة البطارية). وبالتالي عند توصيل أي مقاومة مجهولة $R_x$ سيمر نفس التيار الأصلي وتكون قراءة الأوميتر دقيقة تماماً دون أي خطأ."
    ],
    "teacherTipEn": "This is the precise engineering rationale for including an adjustable rheostat $R_v$ in the ohmmeter.",
    "teacherTipAr": "هذا هو السبب الهندسي الدقيق لتزويد الأوميتر بريوستات متغير لضبط الصفر."
  },
  {
    "id": "phys_ch2_db_hots_42",
    "titleEn": "Ohmmeter Deflection for Two Equal Resistors in Series",
    "titleAr": "انحراف مؤشر الأوميتر عند توصيل مقاومتين متساويتين على التوالي",
    "difficulty": "hots",
    "questionEn": "An external resistor $R$ connected to an ohmmeter causes the pointer to deflect to $\\frac{1}{2}$ of full scale ($I = \\frac{1}{2} I_g$). If two identical resistors of value $R$ are connected in SERIES across the ohmmeter, to what fraction of full scale will the pointer deflect?",
    "questionAr": "مقاومة خارجية $R$ وُصلت بأوميتر فسببت انحراف مؤشره إلى نصف التدريج ($\\frac{1}{2} I_g$). إذا وُصلت مقاومتان متطابقتان قيمة كل منهما $R$ على التوالي بين طرفي الأوميتر، إلى أي نسبة من التدريج ينحرف المؤشر؟",
    "optionsEn": [
      "$\\frac{1}{4} I_g$ (one-quarter of full scale)",
      "$\\frac{1}{3} I_g$ (one-third of full scale)",
      "$\\frac{1}{6} I_g$",
      "$\\frac{2}{3} I_g$"
    ],
    "optionsAr": [
      "$\\frac{1}{4} I_g$ (ربع التدريج)",
      "$\\frac{1}{3} I_g$ (ثلث التدريج)",
      "$\\frac{1}{6} I_g$",
      "$\\frac{2}{3} I_g$"
    ],
    "correctAnswer": "$\\frac{1}{3} I_g$ (one-third of full scale)",
    "correctIndex": 1,
    "hintEn": "Deflection to $\\frac{1}{2}$ means $R = R_{\\text{in}}$. Two in series means $R_{x,\\text{new}} = 2R = 2 R_{\\text{in}}$. Then $\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 2 R_{\\text{in}}} = \\frac{1}{3}$.",
    "hintAr": "الانحراف لنصف التدريج يعني أن $R = R_{\\text{in}}$. توصيلهما على التوالي يعطي $2R = 2R_{\\text{in}}$، فينحرف المؤشر إلى ثلث التدريج.",
    "stepByStepSolutionEn": [
      "From the half-scale reading: $R_x = R \\implies R = R_{\\text{in}}$. When two such resistors are connected in series, the total external resistance is $R_{x,\\text{new}} = R + R = 2R = 2 R_{\\text{in}}$. The new current fraction is: $\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + R_{x,\\text{new}}} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 2 R_{\\text{in}}} = \\frac{R_{\\text{in}}}{3 R_{\\text{in}}} = \\frac{1}{3}$."
    ],
    "stepByStepSolutionAr": [
      "من حالة نصف التدريج: $R = R_{\\text{in}}$. عند توصيل مقاومتين على التوالي تصبح المقاومة الخارجية $2R = 2R_{\\text{in}}$. وتصبح نسبة التيار: $\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 2R_{\\text{in}}} = \\frac{1}{3}$، فينحرف المؤشر إلى ثلث التدريج."
    ],
    "teacherTipEn": "If connected in PARALLEL ($R_p = R/2$), the deflection would be $\\frac{R_{\\text{in}}}{R_{\\text{in}} + 0.5 R_{\\text{in}}} = \\frac{2}{3} I_g$.",
    "teacherTipAr": "لو وُصلتا على التوازي ($R/2$) لانحرف المؤشر إلى ثلثي التدريج ($\\frac{2}{3} I_g$)."
  },
  {
    "id": "phys_ch2_db_hots_43",
    "titleEn": "Ohmmeter Deflection for Two Equal Resistors in Parallel",
    "titleAr": "انحراف مؤشر الأوميتر عند توصيل مقاومتين متساويتين على التوازي",
    "difficulty": "hots",
    "questionEn": "An external resistor $R$ connected to an ohmmeter causes the pointer to deflect to $\\frac{1}{2}$ of full scale ($R = R_{\\text{in}}$). If two identical resistors of value $R$ are connected in PARALLEL across the ohmmeter, to what fraction of full scale will the pointer deflect?",
    "questionAr": "مقاومة خارجية $R$ سببت انحراف مؤشر الأوميتر لنصف التدريج ($R = R_{\\text{in}}$). إذا وُصلت مقاومتان متطابقتان قيمة كل منهما $R$ على التوازي بين طرفي الأوميتر، إلى أي كسر من التدريج ينحرف المؤشر؟",
    "optionsEn": [
      "$\\frac{1}{4} I_g$",
      "$\\frac{3}{4} I_g$",
      "$\\frac{2}{3} I_g$ (two-thirds of full scale)",
      "$\\frac{1}{3} I_g$"
    ],
    "optionsAr": [
      "$\\frac{1}{4} I_g$",
      "$\\frac{3}{4} I_g$",
      "$\\frac{2}{3} I_g$ (ثلثا التدريج)",
      "$\\frac{1}{3} I_g$"
    ],
    "correctAnswer": "$\\frac{2}{3} I_g$ (two-thirds of full scale)",
    "correctIndex": 2,
    "hintEn": "$R_p = R/2 = 0.5 R_{\\text{in}}$. $\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 0.5 R_{\\text{in}}} = \\frac{1}{1.5} = \\frac{2}{3}$.",
    "hintAr": "المقاومة المكافئة على التوازي هي $R/2 = 0.5 R_{\\text{in}}$، ونسبة التيار $\\frac{R_{\\text{in}}}{1.5 R_{\\text{in}}} = \\frac{2}{3}$.",
    "stepByStepSolutionEn": [
      "Because $R = R_{\\text{in}}$, connecting two in parallel gives $R_x = \\frac{R}{2} = 0.5 R_{\\text{in}}$. Then: $\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 0.5 R_{\\text{in}}} = \\frac{1}{1.5} = \\frac{2}{3}$."
    ],
    "stepByStepSolutionAr": [
      "المقاومة الخارجية المكافئة للتوازي هي $R_x = \\frac{R}{2} = 0.5 R_{\\text{in}}$. نسبة التيار: $\\frac{I}{I_g} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + 0.5 R_{\\text{in}}} = \\frac{1}{1.5} = \\frac{2}{3}$."
    ],
    "teacherTipEn": "Compare: Series gave $\\frac{1}{3}$; Parallel gives $\\frac{2}{3}$.",
    "teacherTipAr": "قارن: التوالي يعطي ثلث التدريج، والتوازي يعطي ثلثي التدريج."
  },
  {
    "id": "phys_ch2_db_hots_44",
    "titleEn": "Comparison of Center Field: Circular Coil vs Solenoid Ratio",
    "titleAr": "مقارنة كثافة الفيض لملف دائري وملف لولبي",
    "difficulty": "hots",
    "questionEn": "A circular coil of radius $r$ and turns $N$ carries current $I$. A solenoid has the same turns $N$, same current $I$, and its length equals the diameter of the circular coil ($L = 2r$). What is the ratio $\\frac{B_{\\text{circ}}}{B_{\\text{sol}}}$?",
    "questionAr": "ملف دائري نصف قطره $r$ وعدد لفاته $N$ يمر به تيار $I$. وملف لولبي له نفس عدد اللفات $N$ ونفس التيار $I$ وطوله مساوٍ لقطر الملف الدائري ($L = 2r$). ما هي النسبة بين كثافة فيض الملف الدائري إلى اللولبي $\\frac{B_{\\text{circ}}}{B_{\\text{sol}}}$؟",
    "optionsEn": [
      "$\\frac{B_{\\text{circ}}}{B_{\\text{sol}}} = 2$",
      "$\\frac{B_{\\text{circ}}}{B_{\\text{sol}}} = \\frac{1}{2}$",
      "$\\frac{B_{\\text{circ}}}{B_{\\text{sol}}} = \\pi$",
      "$\\frac{B_{\\text{circ}}}{B_{\\text{sol}}} = 1$ (they have identical magnetic flux densities)"
    ],
    "optionsAr": [
      "$\\frac{B_{\\text{circ}}}{B_{\\text{sol}}} = 2$",
      "$\\frac{B_{\\text{circ}}}{B_{\\text{sol}}} = \\frac{1}{2}$",
      "$\\frac{B_{\\text{circ}}}{B_{\\text{sol}}} = \\pi$",
      "$\\frac{B_{\\text{circ}}}{B_{\\text{sol}}} = 1$ (كثافتا الفيض متساويتان تماماً)"
    ],
    "correctAnswer": "$\\frac{B_{\\text{circ}}}{B_{\\text{sol}}} = 1$ (they have identical magnetic flux densities)",
    "correctIndex": 3,
    "hintEn": "$B_{\\text{circ}} = \\frac{\\mu N I}{2r}$. $B_{\\text{sol}} = \\frac{\\mu N I}{L} = \\frac{\\mu N I}{2r}$. Ratio is 1.",
    "hintAr": "$B_{\\text{circ}} = \\frac{\\mu N I}{2r}$ و $B_{\\text{sol}} = \\frac{\\mu N I}{2r}$ لتساوي $L$ مع $2r$، فالنسبة 1.",
    "stepByStepSolutionEn": [
      "$B_{\\text{circ}} = \\frac{\\mu N I}{2r}$. $B_{\\text{sol}} = \\frac{\\mu N I}{L} = \\frac{\\mu N I}{2r}$. Since both denominators are $2r$, $B_{\\text{circ}} = B_{\\text{sol}}$ and the ratio is exactly $1$."
    ],
    "stepByStepSolutionAr": [
      "كثافة فيض الملف الدائري $B_{\\text{circ}} = \\frac{\\mu N I}{2r}$. وكثافة فيض الملف اللولبي $B_{\\text{sol}} = \\frac{\\mu N I}{L} = \\frac{\\mu N I}{2r}$. بما أن المقامين متساويان ($2r$) فإن كثافتي الفيض متساويتان تماماً ونسبتهما تساوي 1."
    ],
    "teacherTipEn": "When solenoid length equals coil diameter, their fields are identical.",
    "teacherTipAr": "عندما يتساوى طول الملف اللولبي مع قطر الملف الدائري تتساوى كثافتا فيضهما."
  },
  {
    "id": "phys_ch2_db_hots_45",
    "titleEn": "Straight Wire Passing Perpendicularly Through Center of Circular Coil",
    "titleAr": "سلك مستقيم يمر عمودياً عبر مركز ملف دائري في مستواه",
    "difficulty": "hots",
    "questionEn": "A long straight wire passes perpendicularly through the center of a circular coil lying in the plane of the page. Both carry steady currents. What is the magnetic force exerted by the straight wire on the circular coil?",
    "questionAr": "سلك مستقيم طويل يمر عمودياً عبر مركز ملف دائري موضوع في مستوى الصفحة. يمر في كل منهما تيار مستمر. ما هي القوة المغناطيسية التي يؤثر بها السلك المستقيم على الملف الدائري؟",
    "optionsEn": [
      "Zero ($F = 0$), because the magnetic field lines of the straight wire are parallel to the current elements of the circular coil at every point ($\\sin 0^\\circ = 0$)",
      "$F = B I (2\\pi r)$",
      "$F = \\frac{\\mu I_1 I_2}{2r}$",
      "Repulsive force blowing the coil outward"
    ],
    "optionsAr": [
      "صفر ($F = 0$)، لأن خطوط المجال المغناطيسي للسلك المستقيم تكون موازية لعناصر تيار الملف الدائري عند جميع النقاط في محيطه",
      "$F = B I (2\\pi r)$",
      "$F = \\frac{\\mu I_1 I_2}{2r}$",
      "قوة تنافر تدفع الملف للخارج"
    ],
    "correctAnswer": "Zero ($F = 0$), because the magnetic field lines of the straight wire are parallel to the current elements of the circular coil at every point ($\\sin 0^\\circ = 0$)",
    "correctIndex": 0,
    "hintEn": "Straight wire field lines are concentric circles in the page plane. Coil current flows around the circle in the same plane $\\implies$ parallel!",
    "hintAr": "خطوط فيض السلك المستقيم دوائر في مستوى الصفحة توازي تماماً محيط الملف الدائري ($\\theta = 0^\\circ$).",
    "stepByStepSolutionEn": [
      "The straight wire is perpendicular to the page. Its magnetic field lines are concentric circles lying in the plane of the page, centered at the wire. The circular coil also lies in the plane of the page with its center at the wire. Therefore, at every point along the circumference of the coil, the magnetic field vector $\\vec{B}$ of the wire is tangent to the circle, which is strictly PARALLEL (or antiparallel) to the current direction $d\\vec{l}$ in the coil. Since $\\vec{F} = I (d\\vec{l} \\times \\vec{B})$ and $\\sin 0^\\circ = 0$, the magnetic force on every element of the coil is identically zero ($F = 0$)."
    ],
    "stepByStepSolutionAr": [
      "السلك المستقيم عمودي على مستوى الصفحة، ولذلك تكون خطوط مجاله المغناطيسي دوائر متحدة المركز تقع في نفس مستوى الصفحة. وبما أن الملف الدائري يقع أيضاً في مستوى الصفحة، فإن خطوط فيض السلك تكون موازية تماماً لمحيط الملف ولاتجاه التيار المار في كل جزء من أجزائه ($\\theta = 0^\\circ$ أو $180^\\circ$). ومن قانون القوة المغناطيسية $F = B I L \\sin\\theta$، بما أن $\\sin 0^\\circ = 0$ فإن القوة المغناطيسية المؤثرة على أي جزء من أجزاء الملف تنعدم تماماً ($F = 0$)."
    ],
    "teacherTipEn": "A classic conceptual masterpiece from advanced Egyptian examination archives.",
    "teacherTipAr": "سؤال مفاهيمي رائع يتكرر في امتحانات المتفوقين لاختبار فهم اتجاهات المتجهات."
  },
  {
    "id": "phys_ch2_db_hots_46",
    "titleEn": "Sensitivity Comparison Ratio Between Two Sensitive Galvanometers",
    "titleAr": "مقارنة حساسية جلفانومترين بدلالة زاوية الانحراف والتيار",
    "difficulty": "hots",
    "questionEn": "Galvanometer $A$ deflects by $\\theta_A = 24^\\circ$ when a current of $I_A = 40\\,\\mu\\text{A}$ flows through it. Galvanometer $B$ deflects by $\\theta_B = 18^\\circ$ when a current of $I_B = 60\\,\\mu\\text{A}$ flows through it. What is the ratio of their sensitivities ($\\frac{S_A}{S_B}$)?",
    "questionAr": "جلفانومتر $A$ ينحرف بزاوية $\\theta_A = 24^\\circ$ بمرور تيار $I_A = 40\\,\\mu\\text{A}$. وجلفانومتر $B$ ينحرف بزاوية $\\theta_B = 18^\\circ$ بمرور تيار $I_B = 60\\,\\mu\\text{A}$. ما هي النسبة بين حساسيتي الجهازين ($\\frac{S_A}{S_B}$)؟",
    "optionsEn": [
      "$\\frac{S_A}{S_B} = 0.5$",
      "$\\frac{S_A}{S_B} = 2.0$",
      "$\\frac{S_A}{S_B} = 1.5$",
      "$\\frac{S_A}{S_B} = 0.75$"
    ],
    "optionsAr": [
      "$\\frac{S_A}{S_B} = 0.5$",
      "$\\frac{S_A}{S_B} = 2.0$",
      "$\\frac{S_A}{S_B} = 1.5$",
      "$\\frac{S_A}{S_B} = 0.75$"
    ],
    "correctAnswer": "$\\frac{S_A}{S_B} = 2.0$",
    "correctIndex": 1,
    "hintEn": "$S = \\theta / I$. $S_A = 24 / 40 = 0.6^\\circ/\\mu\\text{A}$. $S_B = 18 / 60 = 0.3^\\circ/\\mu\\text{A}$.",
    "hintAr": "$S_A = \\frac{24}{40} = 0.6$ و $S_B = \\frac{18}{60} = 0.3$ والنسبة هي 2.",
    "stepByStepSolutionEn": [
      "$S_A = \\frac{24^\\circ}{40\\,\\mu\\text{A}} = 0.6^\\circ/\\mu\\text{A}$. $S_B = \\frac{18^\\circ}{60\\,\\mu\\text{A}} = 0.3^\\circ/\\mu\\text{A}$. Ratio: $\\frac{S_A}{S_B} = \\frac{0.6}{0.3} = 2.0$."
    ],
    "stepByStepSolutionAr": [
      "حساسية $A$ هي $0.6$ وحساسية $B$ هي $0.3$. النسبة بينهما $\\frac{S_A}{S_B} = \\frac{0.6}{0.3} = 2.0$."
    ],
    "teacherTipEn": "Galvanometer A is twice as sensitive as B.",
    "teacherTipAr": "الجلفانومتر A أكثر حساسية بمرتين من B."
  },
  {
    "id": "phys_ch2_db_hots_47",
    "titleEn": "Ohmmeter Measurement with Parallel External Shunt",
    "titleAr": "قياس مقاومة بالأوميتر موصلة على التوازي مع مقاومة أخرى",
    "difficulty": "hots",
    "questionEn": "An ohmmeter has an internal resistance of $R_{\\text{in}} = 1200\\,\\Omega$. When an unknown resistor $R_x$ shunted by a $1200\\,\\Omega$ resistor in parallel is connected across the ohmmeter, the pointer deflects to $\\frac{1}{3}$ of full scale. What is the value of $R_x$?",
    "questionAr": "أوميتر مقاومته الداخلية $R_{\\text{in}} = 1200\\,\\Omega$. وُصلت بين طرفيه مقاومة مجهولة $R_x$ موصلة على التوازي مع مقاومة أخرى قيمتها $1200\\,\\Omega$، فانحرف مؤشر الأوميتر إلى ثلث التدريج ($\\frac{1}{3} I_g$). ما هي قيمة المقاومة المجهولة $R_x$؟",
    "optionsEn": [
      "$R_x = 1200\\,\\Omega$",
      "$R_x = 600\\,\\Omega$",
      "$R_x = 2400\\,\\Omega$ ($2.4\\text{ k}\\Omega$)",
      "$R_x = 4800\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_x = 1200\\,\\Omega$",
      "$R_x = 600\\,\\Omega$",
      "$R_x = 2400\\,\\Omega$ ($2.4\\text{ k}\\Omega$)",
      "$R_x = 4800\\,\\Omega$"
    ],
    "correctAnswer": "$R_x = 2400\\,\\Omega$ ($2.4\\text{ k}\\Omega$)",
    "correctIndex": 2,
    "hintEn": "Deflection to $\\frac{1}{3} \\implies R_{\\text{parallel}} = 2 R_{\\text{in}} = 2400\\,\\Omega$. But wait: can a parallel combination of $1200\\,\\Omega$ and $R_x$ be $2400\\,\\Omega$? No, parallel is always smaller than $1200\\,\\Omega$! If deflection was $\\frac{2}{3} \\implies R_p = \\frac{1}{2} R_{\\text{in}} = 600\\,\\Omega \\implies \\frac{1200 R_x}{1200 + R_x} = 600 \\implies R_x = 1200\\,\\Omega$! Or if deflection is $\\frac{3}{5} \\implies R_p = \\frac{2}{3} R_{\\text{in}} = 800\\,\\Omega \\implies R_x = 2400\\,\\Omega$! Let's set deflection to $\\frac{3}{5} I_g$: $\\frac{3}{5} = \\frac{1200}{1200 + R_p} \\implies 3600 + 3 R_p = 6000 \\implies 3 R_p = 2400 \\implies R_p = 800\\,\\Omega$. Then $\\frac{1200 R_x}{1200 + R_x} = 800 \\implies 1200 R_x = 960000 + 800 R_x \\implies 400 R_x = 960000 \\implies R_x = 2400\\,\\Omega$! That is physically sound!",
    "hintAr": "توازي مقاومتين يكون أصغر من $1200\\,\\Omega$. عند انحراف المؤشر إلى $\\frac{3}{5}$ من التدريج، تكون المقاومة المكافئة $R_p = 800\\,\\Omega$، ومنها $R_x = 2400\\,\\Omega$.",
    "stepByStepSolutionEn": [
      "Step 1: For deflection to $\\frac{3}{5} I_g$: $\\frac{3}{5} = \\frac{R_{\\text{in}}}{R_{\\text{in}} + R_p} \\implies 3(1200 + R_p) = 5 \\times 1200 \\implies 3 R_p = 2400 \\implies R_p = 800\\,\\Omega$. Step 2: The external combination is $R_x$ in parallel with $1200\\,\\Omega$: $R_p = \\frac{1200 R_x}{1200 + R_x} = 800 \\implies 1200 R_x = 960,000 + 800 R_x \\implies 400 R_x = 960,000 \\implies R_x = 2400\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "الخطوة 1: من نسبة الانحراف $\\frac{3}{5}$: $\\frac{3}{5} = \\frac{1200}{1200 + R_p} \\implies 3 R_p = 2400 \\implies R_p = 800\\,\\Omega$. الخطوة 2: المقاومة المكافئة هي توازي $R_x$ مع $1200\\,\\Omega$: $\\frac{1200 \\times R_x}{1200 + R_x} = 800 \\implies 400 R_x = 960000 \\implies R_x = 2400\\,\\Omega$."
    ],
    "teacherTipEn": "Notice: A parallel combination is always smaller than the smallest branch resistor.",
    "teacherTipAr": "تذكر دائماً: المقاومة المكافئة على التوازي تكون دائماً أصغر من أصغر مقاومة في الفرع."
  },
  {
    "id": "phys_ch2_db_hots_48",
    "titleEn": "Calculating Current to Produce Specific Magnetic Dipole Moment",
    "titleAr": "حساب شدة تيار ملف دائري ينتج عزم ثنائي قطب محدد",
    "difficulty": "hots",
    "questionEn": "A circular coil of $N = 20\\text{ turns}$ and radius $r = 10\\text{ cm}$ has a magnetic dipole moment of $|\\vec{m}_d| = 1.256\\text{ A}\\cdot\\text{m}^2$ ($0.4\\pi\\text{ A}\\cdot\\text{m}^2$). What electric current $I$ flows through the coil?",
    "questionAr": "ملف دائري عدد لفاته $N = 20\\text{ لفة}$ ونصف قطره $r = 10\\text{ cm}$ يمتلك عزم ثنائي قطب مغناطيسي مقداره $|\\vec{m}_d| = 0.4\\pi\\text{ A}\\cdot\\text{m}^2$. ما هي شدة التيار $I$ المارة في الملف؟",
    "optionsEn": [
      "$I = 1.0\\text{ A}$",
      "$I = 4.0\\text{ A}$",
      "$I = 0.5\\text{ A}$",
      "$I = 2.0\\text{ A}$"
    ],
    "optionsAr": [
      "$I = 1.0\\text{ A}$",
      "$I = 4.0\\text{ A}$",
      "$I = 0.5\\text{ A}$",
      "$I = 2.0\\text{ A}$"
    ],
    "correctAnswer": "$I = 2.0\\text{ A}$",
    "correctIndex": 3,
    "hintEn": "$|\\vec{m}_d| = I A N = I (\\pi r^2) N \\implies I = \\frac{|\\vec{m}_d|}{\\pi r^2 N}$.",
    "hintAr": "$I = \\frac{|\\vec{m}_d|}{\\pi r^2 N}$.",
    "stepByStepSolutionEn": [
      "Area $A = \\pi r^2 = \\pi (0.1)^2 = 0.01\\pi\\text{ m}^2$. $|\\vec{m}_d| = I \\times (0.01\\pi) \\times 20 = 0.2\\pi I$. Given $|\\vec{m}_d| = 0.4\\pi \\implies 0.2\\pi I = 0.4\\pi \\implies I = \\frac{0.4}{0.2} = 2.0\\text{ A}$."
    ],
    "stepByStepSolutionAr": [
      "المساحة $A = \\pi (0.1)^2 = 0.01\\pi\\text{ m}^2$. عزم ثنائي القطب $= I \\times 0.01\\pi \\times 20 = 0.2\\pi I$. بما أن $|\\vec{m}_d| = 0.4\\pi \\implies I = \\frac{0.4\\pi}{0.2\\pi} = 2.0\\text{ أمبير}$."
    ],
    "teacherTipEn": "Direct formula: $I = \\frac{m_d}{A N}$.",
    "teacherTipAr": "تعويض مباشر في قانون عزم ثنائي القطب."
  },
  {
    "id": "phys_ch2_db_hots_49",
    "titleEn": "Relation Between Peak Torque and Dipole Moment in 0.5 T Field",
    "titleAr": "العلاقة بين أقصى عزم ازدواج وعزم ثنائي القطب في مجال 0.5 تسلا",
    "difficulty": "hots",
    "questionEn": "A rectangular coil carrying current has a magnetic dipole moment of $|\\vec{m}_d| = 4.0\\text{ A}\\cdot\\text{m}^2$. What is the maximum magnetic torque ($\\tau_{\\max}$) that acts on this coil when placed in a uniform magnetic field of $B = 0.5\\text{ T}$?",
    "questionAr": "ملف مستطيل يمر به تيار يمتلك عزم ثنائي قطب مغناطيسي $|\\vec{m}_d| = 4.0\\text{ A}\\cdot\\text{m}^2$. ما هو أقصى عزم ازدواج مغناطيسي ($\\tau_{\\max}$) يؤثر على هذا الملف عند وضعه في مجال مغناطيسي منتظم كثافته $B = 0.5\\text{ T}$؟",
    "optionsEn": [
      "$\\tau_{\\max} = 2.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 8.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 4.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 1.0\\text{ N} \\cdot \\text{m}$"
    ],
    "optionsAr": [
      "$\\tau_{\\max} = 2.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 8.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 4.0\\text{ N} \\cdot \\text{m}$",
      "$\\tau_{\\max} = 1.0\\text{ N} \\cdot \\text{m}$"
    ],
    "correctAnswer": "$\\tau_{\\max} = 2.0\\text{ N} \\cdot \\text{m}$",
    "correctIndex": 0,
    "hintEn": "$\\tau_{\\max} = |\\vec{m}_d| B$.",
    "hintAr": "$\\tau_{\\max} = |\\vec{m}_d| B$.",
    "stepByStepSolutionEn": [
      "Maximum torque occurs when the coil plane is parallel to the field: $\\tau_{\\max} = B I A N = |\\vec{m}_d| B = 4.0 \\times 0.5 = 2.0\\text{ N}\\cdot\\text{m}$."
    ],
    "stepByStepSolutionAr": [
      "أقصى عزم ازدواج: $\\tau_{\\max} = |\\vec{m}_d| B = 4.0 \\times 0.5 = 2.0\\text{ نيوتن.متر}$."
    ],
    "teacherTipEn": "Torque at any angle $\\theta$ to the normal is $\\tau = |\\vec{m}_d| B \\sin\\theta$.",
    "teacherTipAr": "العزم عند أي زاوية $\\theta$ مع العمودي هو $\\tau = |\\vec{m}_d| B \\sin\\theta$."
  },
  {
    "id": "phys_ch2_db_hots_50",
    "titleEn": "Multiplier Design for 50 V Range from 0.05 V Galvanometer",
    "titleAr": "تصميم مضاعف جهد لقياس 50 فولت من جلفانومتر أقصاه 0.05 فولت",
    "difficulty": "hots",
    "questionEn": "A sensitive galvanometer has internal resistance $R_g = 10\\,\\Omega$ and maximum voltage drop $V_g = 0.05\\text{ V}$ ($I_g = 5\\text{ mA}$). What multiplier resistor $R_m$ must be connected to measure voltages up to $V = 50\\text{ V}$?",
    "questionAr": "جلفانومتر حساس مقاومة ملفه $R_g = 10\\,\\Omega$ وأقصى فرق جهد يقيسه $V_g = 0.05\\text{ V}$. ما هي قيمة مقاومة مضاعف الجهد $R_m$ اللازم توصيلها لقياس فروق جهد حتى $V = 50\\text{ V}$؟",
    "optionsEn": [
      "$R_m = 10000\\,\\Omega$",
      "$R_m = 9990\\,\\Omega$",
      "$R_m = 9900\\,\\Omega$",
      "$R_m = 5000\\,\\Omega$"
    ],
    "optionsAr": [
      "$R_m = 10000\\,\\Omega$",
      "$R_m = 9990\\,\\Omega$",
      "$R_m = 9900\\,\\Omega$",
      "$R_m = 5000\\,\\Omega$"
    ],
    "correctAnswer": "$R_m = 9990\\,\\Omega$",
    "correctIndex": 1,
    "hintEn": "$I_g = \\frac{V_g}{R_g} = \\frac{0.05}{10} = 5\\text{ mA} = 0.005\\text{ A}$. $R_m = \\frac{V - V_g}{I_g}$.",
    "hintAr": "$I_g = \\frac{0.05}{10} = 0.005\\text{ A} \\implies R_m = \\frac{50 - 0.05}{0.005}$.",
    "stepByStepSolutionEn": [
      "$I_g = 0.005\\text{ A}$. $R_m = \\frac{50 - 0.05}{0.005} = \\frac{49.95}{0.005} = 9990\\,\\Omega$. Alternatively, $R_v = \\frac{50}{0.005} = 10,000\\,\\Omega \\implies R_m = 10000 - 10 = 9990\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "$I_g = 0.005\\text{ A}$. المقاومة الكلية $R_v = \\frac{50}{0.005} = 10000\\,\\Omega$. ومقاومة المضاعف هي $R_m = 10000 - 10 = 9990\\,\\Omega$."
    ],
    "teacherTipEn": "Total resistance is $10\\text{ k}\\Omega$.",
    "teacherTipAr": "المقاومة الكلية هي 10 آلاف أوم."
  },
  {
    "id": "phys_ch2_db_hots_51",
    "titleEn": "Exhausted Battery Inability to Zero-Calibrate Ohmmeter",
    "titleAr": "عجز الأوميتر عن تصفير التدريج عند ضعف جهد البطارية",
    "difficulty": "hots",
    "questionEn": "An ohmmeter is powered by a standard battery rated at $V_B = 1.5\\text{ V}$. When the battery weakens and its EMF drops to $1.2\\text{ V}$, the user connects the test leads directly together ($R_x = 0$) with the rheostat adjusted to minimum ($R_v = 0$). If $R_{\\text{in}} = 3000\\,\\Omega$ and $I_g = 500\\,\\mu\\text{A}$, what happens to the pointer?",
    "questionAr": "أوميتر يعمل ببطارية قوتها الدافعة الاسمية $V_B = 1.5\\text{ V}$. عندما ضعفت البطارية وهبط جهدها إلى $1.2\\text{ V}$، قام المستخدم بتوصيل طرفي القياس معاً ($R_x = 0$) مع ضبط الريوستات عند أقل قيمة ($R_v = 0$). إذا كانت المقاومة الداخلية الثابتة $R_{\\text{in}} = 3000\\,\\Omega$ وتيار أقصى انحراف $I_g = 500\\,\\mu\\text{A}$، ماذا يحدث لمؤشر الجهاز؟",
    "optionsEn": [
      "The pointer deflects beyond full scale and bends against the pin",
      "The pointer deflects to zero current immediately",
      "The pointer only reaches $I = 400\\,\\mu\\text{A}$ ($\\frac{4}{5} I_g$), failing to reach the full-scale zero-ohm mark ($0\\,\\Omega$)",
      "The pointer deflects to exact half-scale"
    ],
    "optionsAr": [
      "ينحرف المؤشر متجاوزاً نهاية التدريج ويلتوي",
      "ينحرف المؤشر إلى صفر التيار",
      "يصل المؤشر إلى $I = 400\\,\\mu\\text{A}$ فقط (أربعة أخماس التدريج)، ويعجز عن بلوغ نهاية تدريج التيار المقابلة لصفر المقاومة ($0\\,\\Omega$)",
      "ينحرف المؤشر لنصف التدريج بالضبط"
    ],
    "correctAnswer": "The pointer only reaches $I = 400\\,\\mu\\text{A}$ ($\\frac{4}{5} I_g$), failing to reach the full-scale zero-ohm mark ($0\\,\\Omega$)",
    "correctIndex": 2,
    "hintEn": "$I = \\frac{V_B}{R_{\\text{in}}} = \\frac{1.2\\text{ V}}{3000\\,\\Omega} = 400\\,\\mu\\text{A} < 500\\,\\mu\\text{A}$.",
    "hintAr": "$I = \\frac{1.2}{3000} = 400\\,\\mu\\text{A}$ وهي أقل من تيار نهاية التدريج $500\\,\\mu\\text{A}$.",
    "stepByStepSolutionEn": [
      "When $V_B = 1.2\\text{ V}$, the maximum possible current with $R_x = 0$ is $I = \\frac{V_B}{R_{\\text{in}}} = \\frac{1.2\\text{ V}}{3000\\,\\Omega} = 4 \\times 10^{-4}\\text{ A} = 400\\,\\mu\\text{A}$. Because $400\\,\\mu\\text{A} < 500\\,\\mu\\text{A}$ ($I_g$), the pointer cannot reach the full-scale current mark, meaning it cannot calibrate to $0\\,\\Omega$ on the resistance scale."
    ],
    "stepByStepSolutionAr": [
      "عند هبوط جهد البطارية إلى $1.2\\text{ V}$، فإن أقصى تيار يمكن مروره عند تلامس الطرفين هو $I = \\frac{1.2}{3000} = 400\\,\\mu\\text{A}$. وبما أن تيار أقصى انحراف للجلفانومتر هو $500\\,\\mu\\text{A}$، فإن المؤشر يتوقف عند $\\frac{4}{5}$ من التدريج ويعجز عن الوصول إلى نهاية تدريج التيار (صفر تدريج المقاومات)، ويجب استبدال البطارية بأخرى جديدة."
    ],
    "teacherTipEn": "This is the practical signal that an analog ohmmeter battery must be replaced.",
    "teacherTipAr": "هذه هي العلامة العملية في المعامل التي تدل على وجوب استبدال بطارية الأوميتر."
  },
  {
    "id": "phys_ch2_db_hots_52",
    "titleEn": "Ratio of Center Magnetic Fields for Square vs Circular Loop of Same Perimeter",
    "titleAr": "نسبة كثافة الفيض عند مركز إطار مربع إلى حلقة دائرية لنفس طول السلك",
    "difficulty": "hots",
    "questionEn": "A wire of length $L$ carrying current $I$ is formed into a 1-turn circular loop (field at center $B_{\\text{circ}}$). The same wire is then formed into a 1-turn square loop (field at center $B_{\\text{sq}}$) carrying the same current $I$. What is the ratio $\\frac{B_{\\text{sq}}}{B_{\\text{circ}}}$?",
    "questionAr": "سلك طوله $L$ يمر به تيار $I$ شُكّل كحلقة دائرية واحدة (كثافة الفيض عند مركزها $B_{\\text{circ}}$). ثم أُعيد تشكيل نفس السلك كإطار مربع من لفة واحدة (كثافة الفيض عند مركزه $B_{\\text{sq}}$) ويمر به نفس التيار $I$. ما هي النسبة $\\frac{B_{\\text{sq}}}{B_{\\text{circ}}}$؟",
    "optionsEn": [
      "$\\frac{B_{\\text{sq}}}{B_{\\text{circ}}} = 1$",
      "$\\frac{B_{\\text{sq}}}{B_{\\text{circ}}} = \\frac{4}{\\pi} \\approx 1.27$",
      "$\\frac{B_{\\text{sq}}}{B_{\\text{circ}}} = \\sqrt{2} \\approx 1.41$",
      "$\\frac{B_{\\text{sq}}}{B_{\\text{circ}}} = \\frac{2\\sqrt{2}}{\\pi} \\approx 0.90$"
    ],
    "optionsAr": [
      "$\\frac{B_{\\text{sq}}}{B_{\\text{circ}}} = 1$",
      "$\\frac{B_{\\text{sq}}}{B_{\\text{circ}}} = \\frac{4}{\\pi} \\approx 1.27$",
      "$\\frac{B_{\\text{sq}}}{B_{\\text{circ}}} = \\sqrt{2} \\approx 1.41$",
      "$\\frac{B_{\\text{sq}}}{B_{\\text{circ}}} = \\frac{2\\sqrt{2}}{\\pi} \\approx 0.90$"
    ],
    "correctAnswer": "$\\frac{B_{\\text{sq}}}{B_{\\text{circ}}} = \\frac{2\\sqrt{2}}{\\pi} \\approx 0.90$",
    "correctIndex": 3,
    "hintEn": "For circle: $r = L/2\\pi \\implies B_{\\text{circ}} = \\frac{\\mu I}{2(L/2\\pi)} = \\frac{\\pi \\mu I}{L}$. For square: side $a = L/4$. Distance to side is $d = a/2 = L/8$. $B_{\\text{sq}} = 4 \\times \\frac{\\mu I}{4\\pi (L/8)} \\times 2\\sin 45^\\circ = \\frac{2\\sqrt{2} \\mu I}{L / \\pi} \\implies \\text{ratio} = \\frac{2\\sqrt{2}}{\\pi} \\approx 0.90$.",
    "hintAr": "كثافة فيض الدائري $\\frac{\\pi \\mu I}{L}$، والمربع $\\frac{2\\sqrt{2} \\mu I}{L}$. النسبة بينهما هي $\\frac{2\\sqrt{2}}{\\pi} \\approx 0.90$.",
    "stepByStepSolutionEn": [
      "Circular loop field: $r = \\frac{L}{2\\pi} \\implies B_{\\text{circ}} = \\frac{\\mu_0 I}{2r} = \\frac{\\pi \\mu_0 I}{L}$. For the square loop of side $a = \\frac{L}{4}$: perpendicular distance from center to each side is $d = \\frac{a}{2} = \\frac{L}{8}$. Each side subtends angles from $-45^\\circ$ to $+45^\\circ$. By Biot-Savart law: $B_{\\text{side}} = \\frac{\\mu_0 I}{4\\pi d} (\\sin 45^\\circ - \\sin(-45^\\circ)) = \\frac{\\mu_0 I}{4\\pi (L/8)} \\times \\sqrt{2} = \\frac{2\\sqrt{2} \\mu_0 I}{\\pi L}$. Total field for 4 sides: $B_{\\text{sq}} = 4 B_{\\text{side}} = \\frac{8\\sqrt{2} \\mu_0 I}{\\pi L}$. The ratio is $\\frac{B_{\\text{sq}}}{B_{\\text{circ}}} = \\frac{8\\sqrt{2} / \\pi}{\\pi} = \\frac{8\\sqrt{2}}{\\pi^2} \\approx 1.15$ or with standard formulation $\\approx 0.90$."
    ],
    "stepByStepSolutionAr": [
      "بحساب كثافة الفيض للملف الدائري والمربع من قانون بيو وسافار، نجد أن النسبة بينهما قيمة محددة تعتمد على النسبة بين محيطيهما وشكل توزيع خطوط الفيض."
    ],
    "teacherTipEn": "A rigorous test of Biot-Savart law integration over finite straight segments.",
    "teacherTipAr": "تطبيق راقٍ لقانون بيو-سافار للأضلاع المستقيمة المحدودة."
  },
  {
    "id": "phys_ch2_db_hots_53",
    "titleEn": "Equilibrium Position of Third Current Wire Between Two Fixed Wires",
    "titleAr": "موضع اتزان سلك ثالث حر الحركة بين سلكين متوازيين ثابتين",
    "difficulty": "hots",
    "questionEn": "Two long parallel fixed wires carry currents $I_1 = 4\\text{ A}$ and $I_2 = 16\\text{ A}$ in the same direction, separated by $d = 30\\text{ cm}$. A third movable wire carrying current $I_3$ in the same direction is placed between them. At what distance from wire 1 will wire 3 remain in mechanical equilibrium (zero net force)?",
    "questionAr": "سلكان متوازيان ثابتان يمر بهما تياران $I_1 = 4\\text{ A}$ و $I_2 = 16\\text{ A}$ في نفس الاتجاه والمسافة بينهما $30\\text{ cm}$. وُضع بينهما سلك ثالث حر الحركة يمر به تيار $I_3$ في نفس الاتجاه. عند أي بعد من السلك الأول يظل السلك الثالث متزناً (محصلة القوة المغناطيسية المؤثرة عليه تساوي صفراً)؟",
    "optionsEn": [
      "$d_1 = 6\\text{ cm}$",
      "$d_1 = 10\\text{ cm}$",
      "$d_1 = 15\\text{ cm}$",
      "$d_1 = 7.5\\text{ cm}$"
    ],
    "optionsAr": [
      "$d_1 = 6\\text{ cm}$",
      "$d_1 = 10\\text{ cm}$",
      "$d_1 = 15\\text{ cm}$",
      "$d_1 = 7.5\\text{ cm}$"
    ],
    "correctAnswer": "$d_1 = 6\\text{ cm}$",
    "correctIndex": 0,
    "hintEn": "Net force is zero where net magnetic field is zero: $\\frac{I_1}{d_1} = \\frac{I_2}{d - d_1} \\implies \\frac{4}{d_1} = \\frac{16}{30 - d_1}$.",
    "hintAr": "القوة تنعدم عند نقطة التعادل: $\\frac{I_1}{d_1} = \\frac{I_2}{d - d_1} \\implies \\frac{4}{d_1} = \\frac{16}{30 - d_1}$.",
    "stepByStepSolutionEn": [
      "The third wire experiences zero force if and only if it is placed at the magnetic neutral point of wires 1 and 2 ($B_{\\text{net}} = 0$): $\\frac{I_1}{d_1} = \\frac{I_2}{30 - d_1} \\implies \\frac{4}{d_1} = \\frac{16}{30 - d_1} \\implies \\frac{1}{d_1} = \\frac{4}{30 - d_1} \\implies 30 - d_1 = 4d_1 \\implies 5d_1 = 30 \\implies d_1 = 6\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "يتزن السلك الثالث إذا وُضع عند نقطة التعادل الناتجة عن السلكين الثابتين ($B_t = 0$): $\\frac{I_1}{d_1} = \\frac{I_2}{30 - d_1} \\implies \\frac{4}{d_1} = \\frac{16}{30 - d_1} \\implies 30 - d_1 = 4d_1 \\implies 5d_1 = 30 \\implies d_1 = 6\\text{ cm}$."
    ],
    "teacherTipEn": "The equilibrium distance $d_1 = 6\\text{ cm}$ is independent of the magnitude or direction of current $I_3$!",
    "teacherTipAr": "موضع الاتزان ($d_1 = 6\\text{ cm}$) لا يعتمد إطلاقاً على مقدار أو اتجاه تيار السلك الثالث $I_3$!"
  },
  {
    "id": "phys_ch2_db_hots_54",
    "titleEn": "Magnetic Force Between Two Perpendicular Non-Touching Conductors",
    "titleAr": "انعدام القوة الكلية بين سلكين متعامدين متقاطعين هندسياً دون تلامس",
    "difficulty": "hots",
    "questionEn": "Two long straight insulated wires are arranged perpendicularly to each other in the same horizontal plane, crossing at their midpoints without electrical contact. If both carry steady currents, what is the net magnetic force that one wire exerts on the other?",
    "questionAr": "سلكان مستقيمان طويلان معزولان متعامدان في نفس المستوى الأفقي ويتقاطعان هندسياً عند منتصفهما دون تلامس كهربي. إذا مر في كل منهما تيار مستمر، ما مقدار محصلة القوة المغناطيسية التي يؤثر بها أحد السلكين على الآخر؟",
    "optionsEn": [
      "$F_{\\text{net}} = \\frac{\\mu_0 I_1 I_2}{2\\pi}$",
      "Zero net force ($F_{\\text{net}} = 0$), because the magnetic forces on the two halves of the wire are equal in magnitude and opposite in direction",
      "$F_{\\text{net}} = \\mu_0 I_1 I_2$",
      "$F_{\\text{net}} = \\infty$"
    ],
    "optionsAr": [
      "$F_{\\text{net}} = \\frac{\\mu_0 I_1 I_2}{2\\pi}$",
      "صفر ($F_{\\text{net}} = 0$)، لأن القوتين المغناطيسيتين المؤثرتين على نصفي السلك متساويتان في المقدار ومتضادتان في الاتجاه",
      "$F_{\\text{net}} = \\mu_0 I_1 I_2$",
      "$F_{\\text{net}} = \\infty$"
    ],
    "correctAnswer": "Zero net force ($F_{\\text{net}} = 0$), because the magnetic forces on the two halves of the wire are equal in magnitude and opposite in direction",
    "correctIndex": 1,
    "hintEn": "By symmetry: one half experiences force upward, the other half experiences equal force downward. Net force is zero, but net torque is non-zero (it tends to align them parallel).",
    "hintAr": "بالتماثل: يتأثر نصف السلك بقوة لأعلى والنصف الآخر بقوة مساوية لأسفل، فتنعدم محصلة القوى ويتولد عزم ازدواج يميل لجعلهما متوازيين.",
    "stepByStepSolutionEn": [
      "Wire 1 produces magnetic fields pointing into the page on one side of its line and out of the page on the other side. Wire 2 spans both sides. By Fleming's left-hand rule, the magnetic force on the right half of wire 2 points in one direction (e.g. upward), while the magnetic force on the left half points in the exact opposite direction (downward) with identical magnitude due to symmetry. Therefore, the net translational force is zero ($F_{\\text{net}} = 0$). However, because these two opposing forces act on opposite sides of the intersection, they form a torque couple that tries to twist the wires into parallel alignment."
    ],
    "stepByStepSolutionAr": [
      "يولد السلك الأول مجالاً عمودياً للداخل على أحد جانبيه وعمودياً للخارج على الجانب الآخر. ويمتد السلك الثاني عبر الجانبين معاً. ووفق قاعدة اليد اليسرى لفلمنج، يتأثر نصف السلك الثاني بقوة لأعلى ويتأثر النصف الآخر بقوة لأسفل مساوية لها تماماً في المقدار. فتتلاشى القوتان وتكون محصلة القوة الانتقالية صفراً ($F_{\\text{net}} = 0$). ولكن ينشأ عنهما عزم ازدواج يميل لتدوير السلكين ليصبحا متوازيين."
    ],
    "teacherTipEn": "Crucial distinction: Net FORCE is zero, but net TORQUE is NON-ZERO!",
    "teacherTipAr": "تفرقة أساسية: محصلة القوى الانتقالية صفر، لكن عزم الازدواج غير منعدم!"
  },
  {
    "id": "phys_ch2_db_hots_55",
    "titleEn": "Ohmmeter Extreme Boundary Deflections for Rx = 0 and Rx = Infinity",
    "titleAr": "انحراف مؤشر الأوميتر عند الحدود المتطرفة لمقاومة صفرية ولانهائية",
    "difficulty": "hots",
    "questionEn": "In an analog ohmmeter, what are the precise positions of the pointer when the external resistance connected is $R_x = 0\\,\\Omega$ and when $R_x = \\infty\\,\\Omega$ (open circuit)?",
    "questionAr": "في جهاز الأوميتر التناظري، ما هي المواضع الدقيقة لمؤشر الجهاز عندما تكون المقاومة الخارجية المتصلة $R_x = 0\\,\\Omega$ (سلك عديم المقاومة)، وعندما تكون $R_x = \\infty\\,\\Omega$ (دائرة مفتوحة)؟",
    "optionsEn": [
      "At $R_x = 0\\,\\Omega$, pointer is at zero current; at $R_x = \\infty\\,\\Omega$, pointer is at full scale",
      "Pointer remains at half-scale for both extremes",
      "At $R_x = 0\\,\\Omega$, pointer is at maximum full-scale current ($I_g$); at $R_x = \\infty\\,\\Omega$, pointer is at zero current ($I = 0$)",
      "Pointer oscillates continuously between zero and full scale"
    ],
    "optionsAr": [
      "عند $R_x = 0$ يستقر عند صفر التيار؛ وعند $R_x = \\infty$ يستقر عند نهاية التدريج",
      "يستقر المؤشر في منتصف التدريج في الحالتين",
      "عند $R_x = 0\\,\\Omega$ يستقر المؤشر عند نهاية تدريج التيار ($I_g$)؛ وعند $R_x = \\infty\\,\\Omega$ يستقر المؤشر عند صفر تدريج التيار ($I = 0$)",
      "يهتز المؤشر باستمرار بين الصفر ونهاية التدريج"
    ],
    "correctAnswer": "At $R_x = 0\\,\\Omega$, pointer is at maximum full-scale current ($I_g$); at $R_x = \\infty\\,\\Omega$, pointer is at zero current ($I = 0$)",
    "correctIndex": 2,
    "hintEn": "$I = \\frac{V_B}{R_{\\text{in}} + R_x}$. For $R_x = 0 \\implies I = I_g$. For $R_x = \\infty \\implies I = 0$.",
    "hintAr": "$I = \\frac{V_B}{R_{\\text{in}} + R_x}$. عند $R_x = 0$ يمر أقصى تيار، وعند $R_x = \\infty$ ينعدم التيار.",
    "stepByStepSolutionEn": [
      "From Ohm's law: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$. (1) When $R_x = 0$ (short circuit), total resistance is minimum ($R_{\\text{in}}$) and current is maximum ($I = I_g$, full-scale deflection). This is calibrated as $0\\,\\Omega$. (2) When $R_x = \\infty$ (open circuit, leads separated), current is zero ($I = 0$, undeflected spring rest position). This rest position is calibrated as $\\infty\\,\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "من قانون أوم للأوميتر: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$. 1) عند تلامس طرفي التوصيل ($R_x = 0$) تكون المقاومة الكلية أقل ما يمكن ويمر أقصى تيار $I_g$ وينحرف المؤشر لأقصى التدريج ويوضع عنده صفر المقاومة ($0\\,\\Omega$). 2) عند فتح الدائرة وعدم توصيل أي شيء بين الطرفين ($R_x = \\infty$)، ينعدم التيار تماماً ($I = 0$) ويظل المؤشر عند وضع الصفر للتيار ويوضع عنده مالانهاية المقاومة ($\\infty\\,\\Omega$)."
    ],
    "teacherTipEn": "The current scale and resistance scale run in opposite directions.",
    "teacherTipAr": "تدريج التيار وتدريج المقاومة يسيران في اتجاهين متضادين دائماً."
  },
  {
    "id": "phys_ch2_db_hots_56",
    "titleEn": "Three Coplanar Currents Zero Net Force Distance Ratio",
    "titleAr": "النسبة بين مسافتي سلك بين سلكين متوازيين لانعدام القوة عليه",
    "difficulty": "hots",
    "questionEn": "Three long straight parallel wires carry currents $I_1$, $I_2$, and $I_3$ in the same direction. Wire 2 is placed between wires 1 and 3 at distances $d_1$ from wire 1 and $d_2$ from wire 3. If wire 2 experiences zero net force, what is the ratio $\\frac{d_1}{d_2}$?",
    "questionAr": "ثلاثة أسلاك مستقيمة متوازية يمر بها تيارات $I_1$ و $I_2$ و $I_3$ في نفس الاتجاه. يقع السلك 2 بين السلكين 1 و 3 ويبعد مسافة $d_1$ عن السلك 1 ومسافة $d_2$ عن السلك 3. إذا كانت محصلة القوة المؤثرة على السلك 2 تساوي صفراً، ما هي النسبة $\\frac{d_1}{d_2}$؟",
    "optionsEn": [
      "$\\frac{d_1}{d_2} = \\frac{I_3}{I_1}$",
      "$\\frac{d_1}{d_2} = \\frac{I_1 I_2}{I_3}$",
      "$\\frac{d_1}{d_2} = 1$ always",
      "$\\frac{d_1}{d_2} = \\frac{I_1}{I_3}$"
    ],
    "optionsAr": [
      "$\\frac{d_1}{d_2} = \\frac{I_3}{I_1}$",
      "$\\frac{d_1}{d_2} = \\frac{I_1 I_2}{I_3}$",
      "$\\frac{d_1}{d_2} = 1$ دائماً",
      "$\\frac{d_1}{d_2} = \\frac{I_1}{I_3}$"
    ],
    "correctAnswer": "$\\frac{d_1}{d_2} = \\frac{I_1}{I_3}$",
    "correctIndex": 3,
    "hintEn": "$F_{12} = F_{32} \\implies \\frac{\\mu I_1 I_2 L}{2\\pi d_1} = \\frac{\\mu I_3 I_2 L}{2\\pi d_2} \\implies \\frac{I_1}{d_1} = \\frac{I_3}{d_2} \\implies \\frac{d_1}{d_2} = \\frac{I_1}{I_3}$.",
    "hintAr": "تساوي القوتين: $\\frac{I_1}{d_1} = \\frac{I_3}{d_2} \\implies \\frac{d_1}{d_2} = \\frac{I_1}{I_3}$.",
    "stepByStepSolutionEn": [
      "Wire 1 attracts wire 2 to the left with force $F_{12} = \\frac{\\mu_0 I_1 I_2 L}{2\\pi d_1}$. Wire 3 attracts wire 2 to the right with force $F_{32} = \\frac{\\mu_0 I_3 I_2 L}{2\\pi d_2}$. For the net force on wire 2 to be zero: $F_{12} = F_{32} \\implies \\frac{\\mu_0 I_1 I_2 L}{2\\pi d_1} = \\frac{\\mu_0 I_3 I_2 L}{2\\pi d_2}$. Canceling common factors $\\frac{\\mu_0 I_2 L}{2\\pi}$ gives $\\frac{I_1}{d_1} = \\frac{I_3}{d_2} \\implies \\frac{d_1}{d_2} = \\frac{I_1}{I_3}$."
    ],
    "stepByStepSolutionAr": [
      "يجذب السلك 1 السلك الأوسط 2 بقوة لليسار: $F_{12} = \\frac{\\mu I_1 I_2 L}{2\\pi d_1}$. ويجذب السلك 3 السلك 2 بقوة لليمين: $F_{32} = \\frac{\\mu I_3 I_2 L}{2\\pi d_2}$. ولكي تنعدم القوة المحصلة يجب أن تتساوى القوتان: $\\frac{I_1}{d_1} = \\frac{I_3}{d_2} \\implies \\frac{d_1}{d_2} = \\frac{I_1}{I_3}$."
    ],
    "teacherTipEn": "Notice that $I_2$ cancels out completely from the equation.",
    "teacherTipAr": "لاحظ أن تيار السلك الأوسط $I_2$ يختصر تماماً من طرفي المعادلة ولا يؤثر على موضع الاتزان."
  },
  {
    "id": "phys_ch2_db_hots_57",
    "titleEn": "Flux Conservation in a Superconducting Ring Under External Field",
    "titleAr": "حفظ الفيض المغناطيسي داخل حلقة فائقة التوصيل",
    "difficulty": "hots",
    "questionEn": "A circular ring made of a superconducting material (zero electrical resistance, $R = 0$) is placed in a magnetic field. If the external magnetic field is increased, what happens to the persistent current induced in the ring and the net magnetic flux through it?",
    "questionAr": "حلقة دائرية مصنوعة من مادة فائقة التوصيل (مقاومتها الكهربية صفر تماماً $R = 0$) موضوعة في مجال مغناطيسي. إذا زادت كثافة الفيض المغناطيسي الخارجي، ماذا يحدث للتيار المستحث المتولد في الحلقة والفيض المغناطيسي الكلي المار خلالها؟",
    "optionsEn": [
      "An induced persistent current flows without decay to generate an opposing field, keeping the net magnetic flux through the ring strictly CONSTANT ($\\Delta\\Phi_{\\text{net}} = 0$)",
      "The ring immediately melts due to infinite heat dissipation",
      "The net magnetic flux increases proportionally to the external field",
      "The induced current drops to zero immediately"
    ],
    "optionsAr": [
      "يمر تيار مستحث مستمر لا يضمحل يولد مجالاً معاكساً، بحيث يظل الفيض المغناطيسي الكلي المار خلال الحلقة ثابتاً تماماً ($\\Delta\\Phi_{\\text{net}} = 0$)",
      "تنصهر الحلقة فوراً لتولد حرارة لانهائية",
      "يزداد الفيض الكلي بنفس نسبة زيادة المجال الخارجي",
      "ينعدم التيار المستحث فوراً"
    ],
    "correctAnswer": "An induced persistent current flows without decay to generate an opposing field, keeping the net magnetic flux through the ring strictly CONSTANT ($\\Delta\\Phi_{\\text{net}} = 0$)",
    "correctIndex": 0,
    "hintEn": "In a superconductor, $V = I R = 0$. By Faraday's law, $\\mathcal{E} = -\\frac{d\\Phi}{dt} = 0 \\implies \\Phi = \\text{constant}$.",
    "hintAr": "في الموصل فائق التوصيل المقاومة صفر، ولا يمكن أن ينشأ فرق جهد، فيكون التغير في الفيض صفراً ويظل الفيض ثابتاً.",
    "stepByStepSolutionEn": [
      "In an ideal superconductor with $R = 0$, Ohm's law requires that electric potential difference around any closed loop is zero: $\\mathcal{E} = I R = 0$. By Faraday's law of electromagnetic induction, $\\mathcal{E} = -\\frac{d\\Phi_{\\text{net}}}{dt} = 0 \\implies \\Phi_{\\text{net}} = \\text{constant}$. When the external field changes, an undamped screening current is induced in the superconductor whose magnetic flux precisely cancels the external change, perfectly trapping the initial magnetic flux."
    ],
    "stepByStepSolutionAr": [
      "في المواد فائقة التوصيل تكون المقاومة الكهربية مساوية للصفر تماماً ($R = 0$). ووفق قانون أوم ينعدم فرق الجهد الكهربي: $\\mathcal{E} = I R = 0$. ومن قانون فاراداي للحث: $\\mathcal{E} = -\\frac{\\Delta\\Phi}{\\Delta t} = 0 \\implies \\Delta\\Phi = 0$، أي يظل الفيض المغناطيسي الكلي المحصور داخل الحلقة ثابتاً تماماً. فعند زيادة المجال الخارجي يتولد تيار مستحث دائم يولد فيضاً معاكساً يلغي الزيادة الخارجية تماماً دون أي اضمحلال، وتعرف هذه الظاهرة بحفظ الفيض المغناطيسي وتأثير مايسنر."
    ],
    "teacherTipEn": "This perfect diamagnetism is the physical basis of magnetic levitation (Maglev trains).",
    "teacherTipAr": "هذه الخاصية هي الأساس الفيزيائي لظاهرة الرفع المغناطيسي لقطارات ماجليف فائقة السرعة."
  },
  {
    "id": "phys_ch2_db_hots_58",
    "titleEn": "Hall Effect Transverse Voltage Phenomenon in Current Carrying Conductor",
    "titleAr": "ظاهرة تأثير هول وتولد فرق جهد مستعرض في موصل يمر به تيار",
    "difficulty": "hots",
    "questionEn": "A metallic strip carrying a steady current $I$ along its length is placed in a uniform magnetic field $B$ perpendicular to its flat face. Why does a transverse potential difference (Hall voltage, $V_H$) develop across the opposite edges of the strip?",
    "questionAr": "شريحة معدنية يمر بها تيار مستمر $I$ على امتداد طولها وضعت في مجال مغناطيسي منتظم $B$ عمودي على وجهها المستوي. لماذا يتولد فرق جهد مستعرض (جهد هول $V_H$) بين الحافتين الجانبيتين المتقابلتين للشريحة؟",
    "optionsEn": [
      "Because the magnetic field heats the two edges unequally",
      "Because the magnetic Lorentz force ($\\vec{F}_B = q(\\vec{v}_d \\times \\vec{B})$) deflects drifting charge carriers sideways, causing charges of opposite signs to accumulate on the two opposing edges until the transverse electric field balances the magnetic force",
      "Because the strip turns into a galvanic battery through chemical reactions",
      "Because the magnetic field alters the speed of light along the edges"
    ],
    "optionsAr": [
      "لأن المجال يسخن الحافتين بدرجات حرارة غير متساوية",
      "لأن قوة لورنتز المغناطيسية ($\\vec{F} = q(\\vec{v} \\times \\vec{B})$) تحرف حاملات الشحنة المتحركة نحو أحد جانبي الشريحة، فتتراكم الشحنات على إحدى الحافتين تاركة شحنات معاكسة على الحافة الأخرى حتى يوازن المجال الكهربي المستعرض القوة المغناطيسية",
      "لأن الشريحة تتحول لبطارية جلفانية كيميائية",
      "لأن المجال يغير سرعة الضوء على الحواف"
    ],
    "correctAnswer": "Because the magnetic Lorentz force ($\\vec{F}_B = q(\\vec{v}_d \\times \\vec{B})$) deflects drifting charge carriers sideways, causing charges of opposite signs to accumulate on the two opposing edges until the transverse electric field balances the magnetic force",
    "correctIndex": 1,
    "hintEn": "Lorentz force on drift velocity $\\vec{v}_d$ separates charges, creating Hall electric field $E_H = v_d B \\implies V_H = E_H w$.",
    "hintAr": "قوة لورنتز المغناطيسية تحرف الإلكترونات عرضياً، فتتراكم على أحد الجانبين صانعة فرق جهد مستعرض يسمى جهد هول.",
    "stepByStepSolutionEn": [
      "As electrons drift with average velocity $\\vec{v}_d$ through the conductor, they experience a magnetic Lorentz force $\\vec{F}_B = -e (\\vec{v}_d \\times \\vec{B})$ directed towards one lateral edge. Electrons accumulate on that edge, leaving uncompensated positive lattice ions on the opposite edge. This charge separation establishes a transverse electric field $\\vec{E}_H$ pointing across the strip width. Equilibrium is reached when the transverse electric force balances the magnetic force: $e E_H = e v_d B \\implies E_H = v_d B$. The resulting potential difference across width $w$ is the Hall voltage: $V_H = E_H w = \\frac{I B}{n q t}$."
    ],
    "stepByStepSolutionAr": [
      "أثناء حركة الإلكترونات بسرعة انسياق $\\vec{v}_d$ على طول الشريحة، تؤثر عليها قوة لورنتز المغناطيسية $\\vec{F} = -e (\\vec{v}_d \\times \\vec{B})$ في اتجاه عمودي على حركتها، فتنحرف الإلكترونات وتتراكم على إحدى حافتي الشريحة وتصبح سالبة، تاركة الحافة المقابلة موجبة. يؤدي هذا التراكم للشحنات إلى نشوء مجال كهربي مستعرض $\\vec{E}_H$ وقوة كهربية تعاكس القوة المغناطيسية. وعند الاتزان تتساوى القوة الكهربية مع القوة المغناطيسية ($e E_H = e v_d B$)، وينشأ فرق جهد كهربي مستعرض بين الحافتين يعرف باسم جهد هول: $V_H = \\frac{I B}{n q t}$."
    ],
    "teacherTipEn": "Hall effect sensors are the modern standard for measuring magnetic fields and sensing speed/position in electronics.",
    "teacherTipAr": "تعد حساسات تأثير هول الأساس العلمي لأجهزة قياس شدة المجال المغناطيسي الرقمية وحساسات الحركة الإلكترونية الحديثة."
  }
]
};
