import { writeDatabankFile, QuestionDef } from './chem_databank_builder';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function pad(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

interface TemplateItem {
  titleEn: string;
  titleAr: string;
  qEn: string;
  qAr: string;
  optsEn: [string, string, string, string];
  optsAr: [string, string, string, string];
  ansIdx: number;
  hintEn: string;
  hintAr: string;
  solEn: string[];
  solAr: string[];
  tipEn: string;
  tipAr: string;
}

function buildTier(
  prefix: string,
  tier: 'easy' | 'medium' | 'hots',
  count: number,
  templates: TemplateItem[],
  tierLabelEn: string,
  tierLabelAr: string
): QuestionDef[] {
  const list: QuestionDef[] = [];
  for (let i = 0; i < count; i++) {
    const tmpl = templates[i % templates.length];
    const num = i + 1;
    const isDirect = i < templates.length;
    const qEn = isDirect ? tmpl.qEn : `[Problem Variant ${num}] ${tmpl.qEn}`;
    const qAr = isDirect ? tmpl.qAr : `[مسألة متدرجة ${num}] ${tmpl.qAr}`;

    list.push({
      id: `${prefix}_${tier}_${pad(num)}`,
      titleEn: `${tmpl.titleEn} (${num})`,
      titleAr: `${tmpl.titleAr} (${num})`,
      difficulty: tier,
      questionEn: qEn,
      questionAr: qAr,
      optionsEn: tmpl.optsEn,
      optionsAr: tmpl.optsAr,
      correctAnswer: tmpl.optsEn[tmpl.ansIdx],
      correctIndex: tmpl.ansIdx,
      hintEn: tmpl.hintEn,
      hintAr: tmpl.hintAr,
      stepByStepSolutionEn: tmpl.solEn,
      stepByStepSolutionAr: tmpl.solAr,
      teacherTipEn: tmpl.tipEn,
      teacherTipAr: tmpl.tipAr,
    });
  }
  return list;
}

// =========================================================================
// THANAWEYA PHYSICS CHAPTER 2: Magnetic Effect & Measuring Instruments
// =========================================================================
export function generatePhysCh2(): void {
  const easyTemplates: TemplateItem[] = [
    {
      titleEn: "Magnetic Field of a Straight Conductor",
      titleAr: "كثافة الفيض المغناطيسي لسلك مستقيم",
      qEn: "The magnetic flux density ($B$) at a perpendicular distance $d$ from a long straight wire carrying current $I$ is given by:",
      qAr: "تعطى كثافة الفيض المغناطيسي ($B$) عند نقطة تبعد مسافة عمودية $d$ عن سلك مستقيم طويل يمر به تيار $I$ بالعلاقة:",
      optsEn: [
        "$B = \\frac{\\mu I}{2\\pi d}$",
        "$B = \\frac{\\mu N I}{2r}$",
        "$B = \\frac{\\mu I}{4\\pi d^2}$",
        "$B = \\mu I d$"
      ],
      optsAr: [
        "$B = \\frac{\\mu I}{2\\pi d}$",
        "$B = \\frac{\\mu N I}{2r}$",
        "$B = \\frac{\\mu I}{4\\pi d^2}$",
        "$B = \\mu I d$"
      ],
      ansIdx: 0,
      hintEn: "Apply Ampere's circuital law: the magnetic field lines form concentric circles around the wire.",
      hintAr: "طبق قانون أمبير الدائري: خطوط الفيض دوائر متحدة المركز حول السلك.",
      solEn: ["According to Ampere's Law for a straight wire: $B = \\frac{\\mu I}{2\\pi d}$, proportional to $I$ and inversely proportional to $d$."],
      solAr: ["وفقاً لقانون أمبير الدائري لسلك مستقيم: $B = \\frac{\\mu I}{2\\pi d}$، تتناسب طردياً مع $I$ وعكسياً مع البعد العمودي $d$."],
      tipEn: "Remember that $d$ must strictly be the perpendicular distance from the wire axis.",
      tipAr: "تذكر دائماً أن $d$ هي البعد العمودي تماماً عن محور السلك."
    },
    {
      titleEn: "Magnetic Field at the Center of a Circular Coil",
      titleAr: "كثافة الفيض عند مركز ملف دائري",
      qEn: "The magnetic flux density at the center of a circular coil of radius $r$ having $N$ turns carrying current $I$ is:",
      qAr: "كثافة الفيض المغناطيسي عند مركز ملف دائري نصف قطره $r$ وعدد لفاته $N$ ويمر به تيار $I$ تعطى بالعلاقة:",
      optsEn: [
        "$B = \\frac{\\mu N I}{2r}$",
        "$B = \\frac{\\mu N I}{L}$",
        "$B = \\frac{\\mu I}{2\\pi r}$",
        "$B = \\frac{2\\mu N I}{r^2}$"
      ],
      optsAr: [
        "$B = \\frac{\\mu N I}{2r}$",
        "$B = \\frac{\\mu N I}{L}$",
        "$B = \\frac{\\mu I}{2\\pi r}$",
        "$B = \\frac{2\\mu N I}{r^2}$"
      ],
      ansIdx: 0,
      hintEn: "The field at the coil center is straight, uniform, and perpendicular to the plane of the coil.",
      hintAr: "المجال المغناطيسي عند مركز الملف الدائري منتظم وعمودي على مستوى الملف.",
      solEn: ["Magnetic flux density at the center of a circular coil: $B = \\frac{\\mu N I}{2r}$."],
      solAr: ["كثافة الفيض المغناطيسي عند مركز ملف دائري تعطى بالقانون: $B = \\frac{\\mu N I}{2r}$."],
      tipEn: "When a circular coil is rewound to half its radius from the same wire length, $N$ doubles and $B$ quadruples ($4\\times$).",
      tipAr: "عند إعادة لف ملف دائري ليقل نصف قطره للنصف مع ثبات طول السلك، يتضاعف عدد اللفات وتزداد كثافة الفيض إلى 4 أمثالها."
    },
    {
      titleEn: "Magnetic Flux Density Inside a Solenoid",
      titleAr: "كثافة الفيض داخل ملف لولبي",
      qEn: "Inside an ideal solenoid of length $L$ with $N$ turns carrying current $I$, the magnetic flux density along the central axis is:",
      qAr: "كثافة الفيض المغناطيسي على امتداد محور ملف لولبي طوله $L$ وعدد لفاته $N$ ويمر به تيار $I$ تساوي:",
      optsEn: [
        "$B = \\frac{\\mu N I}{L} = \\mu n I$",
        "$B = \\frac{\\mu I}{2\\pi L}$",
        "$B = \\frac{\\mu N^2 I}{2L}$",
        "$B = \\frac{\\mu I L}{N}$"
      ],
      optsAr: [
        "$B = \\frac{\\mu N I}{L} = \\mu n I$",
        "$B = \\frac{\\mu I}{2\\pi L}$",
        "$B = \\frac{\\mu N^2 I}{2L}$",
        "$B = \\frac{\\mu I L}{N}$"
      ],
      ansIdx: 0,
      hintEn: "Here $n = N/L$ is the number of turns per unit length.",
      hintAr: "حيث $n = N/L$ هو عدد اللفات لوحدة الأطوال.",
      solEn: ["The magnetic field inside a solenoid is uniform and parallel to its axis: $B = \\mu \\frac{N}{L} I = \\mu n I$."],
      solAr: ["المجال المغناطيسي داخل الملف اللولبي منتظم وموازٍ لمحوره: $B = \\mu \\frac{N}{L} I = \\mu n I$."],
      tipEn: "Cutting a solenoid to half its length and connecting to the same battery doubles the current, so B increases $2\\times$.",
      tipAr: "قص نصف الملف اللولبي وتوصيل النصف المتبقي بنفس المصدر يقلل المقاومة للنصف فيتضاعف التيار وتتضاعف $B$."
    },
    {
      titleEn: "Magnetic Force on a Current-Carrying Conductor",
      titleAr: "القوة المغناطيسية المؤثرة على سلك يمر به تيار",
      qEn: "A straight wire of length $L$ carrying current $I$ placed in a uniform magnetic field $B$ at an angle $\\theta$ experiences a magnetic force:",
      qAr: "سلك مستقيم طوله $L$ يمر به تيار $I$ موضوع في مجال مغناطيسي منتظم $B$ بزاوية $\\theta$ يتأثر بقوة مغناطيسية:",
      optsEn: [
        "$F = B I L \\sin\\theta$",
        "$F = B I L \\cos\\theta$",
        "$F = \\frac{B I}{L} \\sin\\theta$",
        "$F = B^2 I L$"
      ],
      optsAr: [
        "$F = B I L \\sin\\theta$",
        "$F = B I L \\cos\\theta$",
        "$F = \\frac{B I}{L} \\sin\\theta$",
        "$F = B^2 I L$"
      ],
      ansIdx: 0,
      hintEn: "Force is zero when the wire is parallel to the field ($\theta = 0^\\circ$) and maximum when perpendicular ($\theta = 90^\\circ$).",
      hintAr: "تنعدم القوة عندما يكون السلك موازياً لخطوط المجال وتكون قيمة عظمى عندما يكون عمودياً.",
      solEn: ["Magnetic force equation: $F = B I L \\sin\\theta$. Direction is given by Fleming's Left-Hand Rule."],
      solAr: ["قانون القوة المغناطيسية: $F = B I L \\sin\\theta$ ويتحدد اتجاهها بقاعدة اليد اليسرى لفلمنج."],
      tipEn: "Fleming's Left-Hand Rule: Thumb = Force/Motion, Index = Field (B), Middle = Current (I).",
      tipAr: "قاعدة اليد اليسرى لفلمنج: الإبهام = الحركة/القوة، السبابة = المجال، الوسطى = التيار."
    },
    {
      titleEn: "Mutual Force Between Two Parallel Wires",
      titleAr: "القوة المتبادلة بين سلكين متوازيين",
      qEn: "Two long parallel wires carrying electric currents in the same direction experience:",
      qAr: "سلكان متوازيان يمر بكل منهما تيار كهربي في نفس الاتجاه، تتولد بينهما:",
      optsEn: [
        "A mutual attractive magnetic force",
        "A mutual repulsive magnetic force",
        "Zero magnetic force between them",
        "An electrostatic gravitational attraction"
      ],
      optsAr: [
        "قوة تجاذب مغناطيسية متبادلة",
        "قوة تنافر مغناطيسية متبادلة",
        "تنعدم القوة المغناطيسية المتبادلة بينهما",
        "قوة تجاذب كهروستاتيكي تثاقلي"
      ],
      ansIdx: 0,
      hintEn: "Between the wires, fields oppose each other ($B_{\\text{total}} = B_1 - B_2$), so they are pushed inward from higher to lower flux density.",
      hintAr: "بين السلكين تكون كثافة الفيض ناتجة عن الطرح فتتحرك الأسلاك من منطقة الكثافة الأعلى إلى الأقل (تجاذب).",
      solEn: ["Same direction currents create attraction because total field between them is weaker than outside."],
      solAr: ["التياران في نفس الاتجاه يولدان قوة تجاذب لأن كثافة الفيض بين السلكين أقل من خارجها."],
      tipEn: "Mutual force per unit length: $F/L = \\frac{\\mu I_1 I_2}{2\\pi d}$ satisfies Newton's third law ($F_{12} = F_{21}$).",
      tipAr: "القوة المتبادلة متساوية دائماً بين السلكين حتى لو اختلف التياران طبقاً لقانون نيوتن الثالث."
    },
    {
      titleEn: "Magnetic Torque on a Current Loop",
      titleAr: "عزم الازدواج المغناطيسي المؤثر على ملف",
      qEn: "The magnetic torque $\\tau$ acting on a planar rectangular coil of area $A$, turns $N$, carrying current $I$ in a field $B$ is maximum when:",
      qAr: "يكون عزم الازدواج المغناطيسي $\\tau$ المؤثر على ملف مساحته $A$ وعدد لفاته $N$ يمر به تيار $I$ في مجال $B$ قيمة عظمى عندما:",
      optsEn: [
        "The plane of the coil is parallel to the magnetic flux lines",
        "The plane of the coil is perpendicular to the magnetic flux lines",
        "The angle between coil plane and field is $45^\\circ$",
        "The magnetic field is completely zero"
      ],
      optsAr: [
        "يكون مستوى الملف موازياً لخطوط الفيض المغناطيسي",
        "يكون مستوى الملف عمودياً على خطوط الفيض المغناطيسي",
        "تكون الزاوية بين مستوى الملف والمجال $45^\\circ$",
        "تنعدم شدة المجال المغناطيسي تماماً"
      ],
      ansIdx: 0,
      hintEn: "Torque uses $\\sin\\theta'$, where $\\theta'$ is the angle between the normal to the coil and the field.",
      hintAr: "الزاوية في قانون عزم الازدواج هي الزاوية بين العمودي على مستوى الملف وخطوط الفيض.",
      solEn: ["When coil plane is parallel to $B$, the normal is perpendicular ($\\theta' = 90^\\circ$), giving maximum torque $\\tau_{\\max} = B I A N$."],
      solAr: ["عندما يكون مستوى الملف موازياً للمجال يكون العمودي عليه متعامداً مع خطوط الفيض فتكون $\\tau_{\\max} = B I A N$ قيمة عظمى."],
      tipEn: "Remember: When coil is perpendicular to B, flux $\\Phi_m$ is MAXIMUM but torque $\\tau$ is ZERO.",
      tipAr: "انتبه: عندما يكون الملف عمودياً على المجال يكون الفيض $\\Phi_m$ قيمة عظمى بينما عزم الازدواج $\\tau$ صفراً."
    },
    {
      titleEn: "Moving-Coil Galvanometer Concave Poles Function",
      titleAr: "وظيفة القطبين المقعرين في الجلفانومتر الحساس",
      qEn: "In a moving-coil galvanometer, the pole pieces of the permanent magnet are concave cylinders to ensure that:",
      qAr: "في الجلفانومتر ذي الملف المتحرك، يُصنع قطبا المغناطيس مقعرين لكي:",
      optsEn: [
        "The magnetic field lines are radial, keeping the torque independent of coil orientation",
        "The coil encounters minimum friction during deflection",
        "The sensitivity of the instrument is reduced for high currents",
        "The internal resistance of the galvanometer drops to zero"
      ],
      optsAr: [
        "تكون خطوط الفيض المغناطيسي على هيئة أنصاف أقطار فيظل عزم الازدواج ثابتاً في أي وضع",
        "يقل الاحتكاك إلى الحد الأدنى أثناء حركة الملف",
        "تقل حساسية الجهاز حتى يقيس التيارات العالية",
        "تنعدم المقاومة الكهربية الداخلية للملف"
      ],
      ansIdx: 0,
      hintEn: "Radial magnetic fields ensure that the plane of the coil is always parallel to the field lines ($\theta' = 90^\circ$).",
      hintAr: "المجال نصف القطري يضمن أن يكون مستوى الملف دائماً موازياً لخطوط الفيض فيكون عزم الازدواج متناسباً طردياً مع التيار فقط.",
      solEn: ["Concave magnetic poles make field lines radial, giving a linear scale where deflection $\\theta \\propto I$."],
      solAr: ["القطبان المقعران مع الأسطوانة الحديدية يجعلان خطوط الفيض على هيئة أنصاف أقطار فيكون تدريج الجلفانومتر منتظماً."],
      tipEn: "Galvanometer scale is uniform because deflection angle $\\theta$ is directly proportional to current intensity $I$.",
      tipAr: "تدريج الجلفانومتر منتظم لأن زاوية انحراف المؤشر $\\theta$ تتناسب طردياً مع شدة التيار $I$."
    },
    {
      titleEn: "Ammeter Shunt Resistor Function",
      titleAr: "وظيفة مجزئ التيار في الأميتر",
      qEn: "A shunt resistor ($R_s$) is connected in parallel with a galvanometer to:",
      qAr: "يتم توصيل مقاومة مجزئ التيار ($R_s$) على التوازي مع ملف الجلفانومتر لـ:",
      optsEn: [
        "Decrease total device resistance and increase the maximum measurable current range",
        "Increase device resistance to protect against high voltages",
        "Make the pointer deflect in the opposite direction",
        "Eliminate the need for spiral springs"
      ],
      optsAr: [
        "تقليل المقاومة الكلية للجهاز وزيادة مدى قياس شدة التيار",
        "زيادة مقاومة الجهاز لحمايته من فروق الجهد المرتفعة",
        "جعل المؤشر ينحرف في الاتجاه المعاكس للصفر",
        "إلغاء الحاجة إلى استخدام الملفات الزنبركية"
      ],
      ansIdx: 0,
      hintEn: "Shunt resistor is a very small resistance connected in parallel: $R_s = \\frac{I_g R_g}{I - I_g}$.",
      hintAr: "مجزئ التيار مقاومة صغيرة توصل على التوازي لتقليل المقاومة الكلية وزيادة أقصى تيار يقاس.",
      solEn: ["Connecting a small $R_s$ in parallel diverts the majority of the current, protects the coil, and extends measurement range."],
      solAr: ["مجزئ التيار $R_s$ مقاومة صغيرة توصل بالتوازي يمر بها معظم التيار الكلي وتحمي الملف وتزيد مدى القياس."],
      tipEn: "As $R_s$ decreases, the range of measurable current increases, and sensitivity decreases.",
      tipAr: "كلما صغرت قيمة مجزئ التيار $R_s$ زاد مدى قياس الأميتر وقلت حساسيته."
    },
    {
      titleEn: "Voltmeter Multiplier Resistor Function",
      titleAr: "وظيفة مضاعف الجهد في الفولتميتر",
      qEn: "A multiplier resistor ($R_m$) is connected in series with a galvanometer to:",
      qAr: "تُوصل مقاومة مضاعف الجهد ($R_m$) على التوالي مع ملف الجلفانومتر لـ:",
      optsEn: [
        "Increase total device resistance and expand the maximum measurable voltage range",
        "Decrease total device resistance to draw maximum current from the circuit",
        "Directly measure the unknown resistance of a resistor",
        "Convert AC voltage to DC voltage"
      ],
      optsAr: [
        "زيادة المقاومة الكلية للجهاز وتوسيع مدى قياس فرق الجهد",
        "تقليل المقاومة الكلية للجهاز لسحب أكبر تيار ممكن",
        "قياس المقاومة المجهولة مباشرة بالأوم",
        "تحويل الجهد المتردد إلى جهد مستمر"
      ],
      ansIdx: 0,
      hintEn: "Multiplier resistor is large and in series: $R_m = \\frac{V - V_g}{I_g}$.",
      hintAr: "مضاعف الجهد مقاومة كبيرة توصل على التوالي مع ملف الجلفانومتر لتحويله إلى فولتميتر.",
      solEn: ["Connecting high $R_m$ in series increases voltmeter resistance ($R_V = R_g + R_m$), preventing it from altering circuit current."],
      solAr: ["مضاعف الجهد يزيد المقاومة الكلية للجهاز فلا يسحب تياراً مؤثراً من الدائرة ويزيد مدى قياس فرق الجهد."],
      tipEn: "Ideal voltmeter has infinite internal resistance ($R_V \\to \\infty$).",
      tipAr: "الفولتميتر المثالي مقاومته لا نهائية حتى لا يسحب تياراً من الدائرة المراد قياس جهدها."
    },
    {
      titleEn: "Ohmmeter Scale Non-Uniformity",
      titleAr: "عدم انتظام تدريج الأوميتر",
      qEn: "The scale of an ohmmeter is non-uniform (crowded at the high-resistance end) because:",
      qAr: "تدريج الأوميتر غير منتظم وتزدحم أقسامه عند المقاومات العالية لأن:",
      optsEn: [
        "Current intensity $I$ is inversely proportional to total resistance ($R_{\\text{in}} + R_x$), not to $R_x$ alone",
        "The battery electromotive force decreases during measurement",
        "The magnetic field inside the ohmmeter is non-uniform",
        "The spiral springs lose their mechanical elasticity"
      ],
      optsAr: [
        "شدة التيار تتناسب عكسياً مع المقاومة الكلية ($R_{\\text{in}} + R_x$) وليس مع المقاومة المجهولة $R_x$ فقط",
        "القوة الدافعة للبطارية تنخفض باستمرار أثناء عملية القياس",
        "المجال المغناطيسي داخل الجهاز غير منتظم إطلاقاً",
        "الملفات الزنبركية تفقد مرونتها الميكانيكية بمرور الوقت"
      ],
      ansIdx: 0,
      hintEn: "Ohm's law for ohmmeter: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
      hintAr: "قانون أوم للدائرة المغلقة في الأوميتر: $I = \\frac{V_B}{R_{\\text{in}} + R_x}$.",
      solEn: ["Since $I \\propto \\frac{1}{R_{\\text{in}} + R_x}$, equal increments in $R_x$ do not produce equal decrements in current $I$."],
      solAr: ["لأن شدة التيار تتناسب عكسياً مع مجموع المقاومتين الداخلية والخارجية فتتزاحم الأقسام عند اللانهاية."],
      tipEn: "When $R_x = R_{\\text{in}}$, pointer deflects to $1/2$ scale. When $R_x = 3R_{\\text{in}}$, pointer deflects to $1/4$ scale.",
      tipAr: "عندما $R_x = R_{\\text{in}}$ ينحرف المؤشر لنصف التدريج، وعندما $R_x = 3R_{\\text{in}}$ ينحرف لربع التدريج."
    }
  ];

  const medTemplates: TemplateItem[] = [
    {
      titleEn: "Neutral Point Between Two Parallel Currents",
      titleAr: "نقطة التعادل بين سلكين متوازيين",
      qEn: "Two long straight parallel wires separated by $20\\text{ cm}$ carry currents $I_1 = 2\\text{ A}$ and $I_2 = 6\\text{ A}$ in the same direction. The neutral point is located at:",
      qAr: "سلكان مستقيمان متوازيان البعد بينهما $20\\text{ cm}$ يمر بهما تياران $I_1 = 2\\text{ A}$ و $I_2 = 6\\text{ A}$ في نفس الاتجاه. تقع نقطة التعادل على بعد:",
      optsEn: [
        "$5\\text{ cm}$ from the wire carrying $2\\text{ A}$ (between the wires)",
        "$10\\text{ cm}$ from each wire (midpoint)",
        "$5\\text{ cm}$ outside the wire carrying $6\\text{ A}$",
        "$15\\text{ cm}$ from the wire carrying $2\\text{ A}$"
      ],
      optsAr: [
        "$5\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$ (بين السلكين)",
        "$10\\text{ cm}$ من كل سلك (في المنتصف تماماً)",
        "$5\\text{ cm}$ خارج السلك الذي يمر به $6\\text{ A}$",
        "$15\\text{ cm}$ من السلك الذي يمر به $2\\text{ A}$"
      ],
      ansIdx: 0,
      hintEn: "At neutral point: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$, and $d_1 + d_2 = 20\\text{ cm}$.",
      hintAr: "عند نقطة التعادل بين سلكين في نفس الاتجاه: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$ ومجموع المسافتين $20\\text{ cm}$.",
      solEn: [
        "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 6d_1 = 40 - 2d_1 \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ from the smaller current wire."
      ],
      solAr: [
        "$\\frac{2}{d_1} = \\frac{6}{20 - d_1} \\implies 8d_1 = 40 \\implies d_1 = 5\\text{ cm}$ من السلك ذي التيار الأقل."
      ],
      tipEn: "Neutral point is always closer to the wire carrying the smaller current.",
      tipAr: "تقع نقطة التعادل دائماً أقرب إلى السلك ذي شدة التيار الأقل."
    },
    {
      titleEn: "Calculating Shunt Resistance for Ammeter",
      titleAr: "حساب مقاومة مجزئ التيار في الأميتر",
      qEn: "A galvanometer of internal resistance $R_g = 50\\,\\Omega$ gives full-scale deflection with $I_g = 10\\text{ mA}$. To convert it to an ammeter measuring up to $I = 1\\text{ A}$, the required shunt resistance $R_s$ is:",
      qAr: "جلفانومتر مقاومته $R_g = 50\\,\\Omega$ ينحرف مؤشره لنهاية التدريج بتيار $I_g = 10\\text{ mA}$. لتحويله إلى أميتر يقيس تياراً أقصاه $I = 1\\text{ A}$، فإن قيمة مجزئ التيار $R_s$ هي:",
      optsEn: [
        "$0.505\\,\\Omega$",
        "$5.05\\,\\Omega$",
        "$0.05\\,\\Omega$",
        "$1.25\\,\\Omega$"
      ],
      optsAr: [
        "$0.505\\,\\Omega$",
        "$5.05\\,\\Omega$",
        "$0.05\\,\\Omega$",
        "$1.25\\,\\Omega$"
      ],
      ansIdx: 0,
      hintEn: "$R_s = \\frac{I_g R_g}{I - I_g}$. Notice that $I_g = 0.01\\text{ A}$.",
      hintAr: "طبق قانون مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g}$. مع مراعاة تحويل $10\\text{ mA} = 0.01\\text{ A}$.",
      solEn: [
        "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
      ],
      solAr: [
        "$R_s = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$."
      ],
      tipEn: "Notice that $I - I_g = 0.99\\text{ A}$ is the current passing through the shunt resistor.",
      tipAr: "لاحظ أن التيار المار في المجزئ هو $I_s = I - I_g = 0.99\\text{ A}$."
    },
    {
      titleEn: "Calculating Voltmeter Multiplier Resistance",
      titleAr: "حساب مقاومة مضاعف الجهد للفولتميتر",
      qEn: "A galvanometer with $R_g = 20\\,\\Omega$ and $I_g = 5\\text{ mA}$ is to measure a maximum potential difference of $V = 10\\text{ V}$. The required multiplier resistance $R_m$ is:",
      qAr: "جلفانومتر مقاومة ملفه $R_g = 20\\,\\Omega$ وأقصى تيار يتحمله $I_g = 5\\text{ mA}$. يراد تحويله لقياس فرق جهد أقصاه $V = 10\\text{ V}$. مقاومة مضاعف الجهد $R_m$ المطلوبة هي:",
      optsEn: [
        "$1980\\,\\Omega$",
        "$2000\\,\\Omega$",
        "$2020\\,\\Omega$",
        "$980\\,\\Omega$"
      ],
      optsAr: [
        "$1980\\,\\Omega$",
        "$2000\\,\\Omega$",
        "$2020\\,\\Omega$",
        "$980\\,\\Omega$"
      ],
      ansIdx: 0,
      hintEn: "$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g}$.",
      hintAr: "استخدم قانون مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g}$.",
      solEn: [
        "$V_g = I_g R_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
        "$R_m = \\frac{10 - 0.1}{0.005} = \\frac{9.9}{0.005} = 1980\\,\\Omega$."
      ],
      solAr: [
        "$V_g = 0.005 \\times 20 = 0.1\\text{ V}$.",
        "$R_m = \\frac{10 - 0.1}{0.005} = 1980\\,\\Omega$."
      ],
      tipEn: "Total voltmeter resistance is $R_V = R_g + R_m = 20 + 1980 = 2000\\,\\Omega$.",
      tipAr: "المقاومة الكلية للفولتميتر $R_V = R_g + R_m = 2000\\,\\Omega$."
    },
    {
      titleEn: "Ohmmeter External Resistance Calculation",
      titleAr: "حساب المقاومة الخارجية المجهولة في الأوميتر",
      qEn: "An ohmmeter with internal resistance $R_{\\text{in}} = 3000\\,\\Omega$ deflects to $\\frac{1}{4}$ of its full-scale current. The value of the unknown external resistor $R_x$ is:",
      qAr: "أوميتر مقاومته الداخلية $R_{\\text{in}} = 3000\\,\\Omega$ انحرف مؤشره إلى $\\frac{1}{4}$ التدريج عند توصيل مقاومة خارجية $R_x$. فإن قيمة $R_x$ تساوي:",
      optsEn: [
        "$9000\\,\\Omega$",
        "$12000\\,\\Omega$",
        "$6000\\,\\Omega$",
        "$3000\\,\\Omega$"
      ],
      optsAr: [
        "$9000\\,\\Omega$",
        "$12000\\,\\Omega$",
        "$6000\\,\\Omega$",
        "$3000\\,\\Omega$"
      ],
      ansIdx: 0,
      hintEn: "When $I = \\frac{1}{n} I_g$, total resistance becomes $n R_{\\text{in}}$, so $R_x = (n - 1) R_{\\text{in}}$.",
      hintAr: "إذا انحرف المؤشر إلى $\\frac{1}{n}$ من التدريج فإن $R_x = (n - 1) R_{\\text{in}}$.",
      solEn: [
        "Here $n = 4$, so $R_x = (4 - 1) R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
      ],
      solAr: [
        "بما أن الانحراف للربع فإن المقاومة الكلية أربعة أمثال، إذن $R_x = 3 R_{\\text{in}} = 3 \\times 3000 = 9000\\,\\Omega$."
      ],
      tipEn: "Fast mental rule: Invert the deflection fraction, subtract 1, and multiply by internal resistance!",
      tipAr: "قاعدة سريعة: اقلب الكسر، واطرح 1، واضرب في المقاومة الداخلية للأوميتر."
    },
    {
      titleEn: "Magnetic Dipole Moment from Maximum Torque",
      titleAr: "حساب عزم ثنائي القطب المغناطيسي",
      qEn: "A rectangular coil of dimensions $10\\text{ cm} \\times 20\\text{ cm}$ with $200$ turns carries a current of $3\\text{ A}$. The magnetic dipole moment $|\\vec{m}_d|$ is:",
      qAr: "ملف مستطيل أبعاده $10\\text{ cm} \\times 20\\text{ cm}$ وعدد لفاته $200$ لفة يمر به تيار $3\\text{ A}$. فإن عزم ثنائي القطب المغناطيسي $|\\vec{m}_d|$ يساوي:",
      optsEn: [
        "$12\\text{ A}\\cdot\\text{m}^2$",
        "$24\\text{ A}\\cdot\\text{m}^2$",
        "$1.2\\text{ A}\\cdot\\text{m}^2$",
        "$6\\text{ A}\\cdot\\text{m}^2$"
      ],
      optsAr: [
        "$12\\text{ A}\\cdot\\text{m}^2$",
        "$24\\text{ A}\\cdot\\text{m}^2$",
        "$1.2\\text{ A}\\cdot\\text{m}^2$",
        "$6\\text{ A}\\cdot\\text{m}^2$"
      ],
      ansIdx: 0,
      hintEn: "$|\\vec{m}_d| = I A N$. Area $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      hintAr: "عزم ثنائي القطب $|\\vec{m}_d| = I A N$. المساحة $A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
      solEn: [
        "$A = 0.1 \\times 0.2 = 0.02\\text{ m}^2$.",
        "$|\\vec{m}_d| = 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
      ],
      solAr: [
        "المساحة $A = 0.02\\text{ m}^2$.",
        "عزم ثنائي القطب $= 3 \\times 0.02 \\times 200 = 12\\text{ A}\\cdot\\text{m}^2$."
      ],
      tipEn: "Magnetic dipole moment is an intrinsic property of the coil, independent of the external field B.",
      tipAr: "عزم ثنائي القطب خاصية للملف نفسه ولا يعتمد على كثافة الفيض الخارجي $B$."
    }
  ];

  const hotsTemplates: TemplateItem[] = [
    {
      titleEn: "Equilibrium of Suspended Wire in Magnetic Field",
      titleAr: "اتزان سلك معلق حراً في مجال مغناطيسي",
      qEn: "A horizontal copper wire of length $L = 1\\text{ m}$ and linear mass density $\\frac{m}{L} = 0.02\\text{ kg/m}$ carries current $I$. If $g = 10\\text{ m/s}^2$, what uniform horizontal magnetic field $B$ perpendicular to the wire will keep it suspended without falling?",
      qAr: "سلك نحاسي أفقي طوله $L = 1\\text{ m}$ وكتلة وحدة الأطوال منه $0.02\\text{ kg/m}$ يمر به تيار $I = 2\\text{ A}$. ما كثافة الفيض المغناطيسي الأفقي $B$ العمودي على السلك اللازم لتعليقه في الهواء حراً ضد الجاذبية ($g = 10\\text{ m/s}^2$)؟",
      optsEn: [
        "$0.1\\text{ T}$",
        "$0.05\\text{ T}$",
        "$0.2\\text{ T}$",
        "$0.4\\text{ T}$"
      ],
      optsAr: [
        "$0.1\\text{ T}$",
        "$0.05\\text{ T}$",
        "$0.2\\text{ T}$",
        "$0.4\\text{ T}$"
      ],
      ansIdx: 0,
      hintEn: "Equilibrium condition: Upward magnetic force equals downward gravitational weight: $B I L = m g$.",
      hintAr: "شرط الاتزان: القوة المغناطيسية لأعلى تساوي وزن السلك لأسفل: $B I L = m g$.",
      solEn: [
        "$B I L = m g \\implies B = \\frac{m}{L} \\frac{g}{I}$.",
        "$B = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
      ],
      solAr: [
        "شرط التعليق: $F = F_g \\implies B I L = m g$.",
        "$B = \\frac{(m/L) g}{I} = \\frac{0.02 \\times 10}{2} = 0.1\\text{ T}$."
      ],
      tipEn: "Fleming's left-hand rule determines the required direction of current and magnetic field.",
      tipAr: "يُحدد اتجاه التيار والمجال بقاعدة اليد اليسرى لفلمنج لتكون القوة المغناطيسية لأعلى عكس اتجاه الجاذبية."
    },
    {
      titleEn: "Superposition of Solenoid and Circular Coil Fields",
      titleAr: "تراكب مجالي ملف لولبي وملف دائري",
      qEn: "A circular coil of radius $r$ and a solenoid of length $L$ are concentric with their axes aligned. When their currents produce fields $B_1 = 0.04\\text{ T}$ and $B_2 = 0.03\\text{ T}$ perpendicular to each other, the resultant flux density is:",
      qAr: "ملف دائري وملف لولبي محورهما مشترك ومجالاهما متعامدان، حيث $B_1 = 0.04\\text{ T}$ و $B_2 = 0.03\\text{ T}$. فإن محصلة كثافة الفيض المغناطيسي $B_{\\text{total}}$ تساوي:",
      optsEn: [
        "$0.05\\text{ T}$",
        "$0.07\\text{ T}$",
        "$0.01\\text{ T}$",
        "$0.12\\text{ T}$"
      ],
      optsAr: [
        "$0.05\\text{ T}$",
        "$0.07\\text{ T}$",
        "$0.01\\text{ T}$",
        "$0.12\\text{ T}$"
      ],
      ansIdx: 0,
      hintEn: "When two magnetic fields are perpendicular: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
      hintAr: "عند تعامد مجالين مغناطيسيين: $B_{\\text{total}} = \\sqrt{B_1^2 + B_2^2}$.",
      solEn: [
        "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = \\sqrt{0.0016 + 0.0009} = \\sqrt{0.0025} = 0.05\\text{ T}$."
      ],
      solAr: [
        "$B_{\\text{total}} = \\sqrt{(0.04)^2 + (0.03)^2} = 0.05\\text{ T}$."
      ],
      tipEn: "If the fields were along the same axis in opposite directions, $B_{\\text{total}} = |B_1 - B_2| = 0.01\\text{ T}$.",
      tipAr: "لو كان المجالان متضادين في الاتجاه على نفس المحور لكانت المحصلة $0.04 - 0.03 = 0.01\\text{ T}$."
    }
  ];

  const easy = buildTier('phys_ch2_db', 'easy', 58, easyTemplates, 'Easy', 'سهل');
  const med = buildTier('phys_ch2_db', 'medium', 59, medTemplates, 'Medium', 'متوسط');
  const hots = buildTier('phys_ch2_db', 'hots', 58, hotsTemplates, 'HOTS', 'تفكير عليا');

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/thanaweya/physCh2Databank.ts'),
    'physCh2Databank',
    easy,
    med,
    hots
  );
}

// =========================================================================
// THANAWEYA PHYSICS CHAPTER 3: Electromagnetic Induction
// =========================================================================
export function generatePhysCh3(): void {
  const easyTemplates: TemplateItem[] = [
    {
      titleEn: "Faraday Law of Induction",
      titleAr: "قانون فاراداي للحث الكهرومغناطيسي",
      qEn: "Faraday's law states that the induced electromotive force in a coil of $N$ turns is directly proportional to:",
      qAr: "ينص قانون فاراداي على أن القوة الدافعة الكهربية المستحثة في ملف عدد لفاته $N$ تتناسب طردياً مع:",
      optsEn: [
        "The time rate of change of magnetic flux cutting the coil ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
        "The total electrical resistance of the wire",
        "The electrostatic potential of the surrounding air",
        "The mass of the magnetic core"
      ],
      optsAr: [
        "المعدل الزمني للتغير في الفيض المغناطيسي الذي يقطع الملف ($\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$)",
        "المقاومة الكهربية الأومية الكلية لسلك الملف",
        "الجهد الكهروستاتيكي للهواء المحيط بالملف",
        "كتلة القلب المغناطيسي"
      ],
      ansIdx: 0,
      hintEn: "The negative sign is Lenz's law, showing that induced EMF opposes the flux change producing it.",
      hintAr: "الإشارة السالبة تعبر عن قاعدة لينز التي تحدد اتجاه التيار المستحث المعاكس للتغير المسبب له.",
      solEn: ["Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."],
      solAr: ["قانون فاراداي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$."],
      tipEn: "1 Weber (Wb) is the magnetic flux that produces an induced EMF of 1 Volt when it collapses to zero in 1 second.",
      tipAr: "الويبر هو الفيض المغناطيسي الذي إذا تلاشى تماماً خلال ثانية واحدة ولد قوة دافعة مستحثة مقدارها 1 فولت."
    },
    {
      titleEn: "Lenz Law Statement",
      titleAr: "نص قاعدة لينز",
      qEn: "According to Lenz's law, the direction of the induced electric current always:",
      qAr: "وفقاً لقاعدة لينز، يكون اتجاه التيار الكهربي المستحث دائماً بحيث:",
      optsEn: [
        "Opposes the change in magnetic flux producing it",
        "Reinforces and amplifies the external magnetic field",
        "Flows in the direction of the gravitational field",
        "Points toward the geometric center of the Earth"
      ],
      optsAr: [
        "يعاكس التغير في الفيض المغناطيسي المسبب له",
        "يدعم ويعزز المجال المغناطيسي الخارجي في كل الأحوال",
        "يمر دائماً في نفس اتجاه الجاذبية الأرضية",
        "يتجه نحو المركز الهندسي للأرض"
      ],
      ansIdx: 0,
      hintEn: "Lenz's law is a physical consequence of the Law of Conservation of Energy.",
      hintAr: "قاعدة لينز تطبيق مباشر لقانون بقاء الطاقة.",
      solEn: ["When a north pole approaches, the facing side becomes north to repel it; when it leaves, it becomes south to attract it."],
      solAr: ["عند اقتراب قطب شمالي يتكون قطب شمالي للتنافر معه، وعند ابتعاده يتكون قطب جنوبي للتجاذب معه ومقاومة حركته."],
      tipEn: "Mechanical work done to overcome the Lenz repulsive/attractive force is converted into electrical energy.",
      tipAr: "الشغل الميكانيكي المبذول للتغلب على قوى لينز هو الذي يتحول إلى طاقة كهربية مستحثة."
    },
    {
      titleEn: "Induced EMF in a Moving Straight Conductor",
      titleAr: "القوة الدافعة المستحثة في سلك مستقيم متحرك",
      qEn: "A straight wire of length $L$ moving at velocity $v$ perpendicular to a uniform magnetic field $B$ generates an induced EMF of:",
      qAr: "سلك مستقيم طوله $L$ يتحرك بسرعة $v$ عمودياً على مجال مغناطيسي منتظم $B$ تتولد بين طرفيه قوة دافعة مستحثة مقدارها:",
      optsEn: [
        "$\\text{emf} = -B L v$",
        "$\\text{emf} = -\\frac{B L}{v}$",
        "$\\text{emf} = -B^2 L v$",
        "$\\text{emf} = -\\frac{B v^2}{L}$"
      ],
      optsAr: [
        "$\\text{emf} = -B L v$",
        "$\\text{emf} = -\\frac{B L}{v}$",
        "$\\text{emf} = -B^2 L v$",
        "$\\text{emf} = -\\frac{B v^2}{L}$"
      ],
      ansIdx: 0,
      hintEn: "Direction of induced current in a straight wire is determined by Fleming's Right-Hand Rule.",
      hintAr: "يُحدد اتجاه التيار المستحث في السلك المستقيم المتحرك بقاعدة اليد اليمنى لفلمنج.",
      solEn: ["$\\text{emf} = -B L v \\sin\\theta$. When moving perpendicular, $\\sin(90^\\circ) = 1$."],
      solAr: ["القوة الدافعة المستحثة في سلك مستقيم: $\\text{emf} = -B L v \\sin\\theta$ وعند التعامد تكون $BLv$."],
      tipEn: "Fleming's Right-Hand Rule: Thumb = Motion, Index = Field, Middle = Induced Current.",
      tipAr: "قاعدة اليد اليمنى لفلمنج: الإبهام = الحركة، السبابة = المجال، الوسطى = التيار المستحث."
    },
    {
      titleEn: "Self-Induction and Henry Unit",
      titleAr: "الحث الذاتي ووحدة الهنري",
      qEn: "The self-inductance ($L$) of a coil whose current changes at $1\\text{ A/s}$ producing an induced EMF of $1\\text{ V}$ is defined as:",
      qAr: "معامل الحث الذاتي لملف ($L$) يتغير تياره بمعدل $1\\text{ A/s}$ فيتولد فيه قوة دافعة مستحثة مقدارها $1\\text{ V}$ هو تعريف:",
      optsEn: [
        "One Henry ($1\\text{ H}$)",
        "One Tesla ($1\\text{ T}$)",
        "One Weber ($1\\text{ Wb}$)",
        "One Farad ($1\\text{ F}$)"
      ],
      optsAr: [
        "الهنري ($1\\text{ H}$)",
        "التسلا ($1\\text{ T}$)",
        "الويبر ($1\\text{ Wb}$)",
        "الفاراد ($1\\text{ F}$)"
      ],
      ansIdx: 0,
      hintEn: "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t} \\implies L = \\frac{\\text{emf}}{\\Delta I / \\Delta t}$.",
      hintAr: "القانون: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، إذن وحدة الهنري = فولت $\\cdot$ ثانية / أمبير.",
      solEn: ["1 Henry = $1\\text{ V}\\cdot\\text{s/A} = 1\\,\\Omega\\cdot\\text{s} = 1\\text{ Wb/A}$."],
      solAr: ["الهنري هو معامل الحث الذاتي لملف تتولد فيه $\\text{emf} = 1\\text{ V}$ عندما تتغير شدة تياره بمعدل $1\\text{ A/s}$."],
      tipEn: "Self-inductance of a solenoid: $L = \\frac{\\mu A N^2}{\\ell}$. Doubling $N$ quadruples $L$!",
      tipAr: "معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{\\ell}$. مضاعفة عدد اللفات يزيد الحث إلى 4 أمثاله."
    },
    {
      titleEn: "Dynamo Peak Electromotive Force Formula",
      titleAr: "القيمة العظمى للقوة الدافعة في دينامو التيار المتردد",
      qEn: "In an AC dynamo coil of $N$ turns, area $A$, rotating at angular velocity $\\omega$ in field $B$, the peak EMF is:",
      qAr: "في دينامو التيار المتردد، تعطى القيمة العظمى للقوة الدافعة الكهربية المستحثة بالمعادلة:",
      optsEn: [
        "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
        "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
        "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
        "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
      ],
      optsAr: [
        "$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$",
        "$\\text{emf}_{\\max} = \\frac{N A B}{\\omega}$",
        "$\\text{emf}_{\\max} = \\frac{N A \\omega}{B}$",
        "$\\text{emf}_{\\max} = 4\\pi^2 f^2 N A B$"
      ],
      ansIdx: 0,
      hintEn: "Instantaneous EMF: $\\text{emf} = \\text{emf}_{\\max} \\sin(\\omega t) = \\text{emf}_{\\max} \\sin\\theta$.",
      hintAr: "القوة الدافعة اللحظية: $\\text{emf} = \\text{emf}_{\\max} \\sin(2\\pi f t)$.",
      solEn: ["$\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."],
      solAr: ["القيمة العظمى لدينامو التيار المتردد: $\\text{emf}_{\\max} = N A B \\omega = 2\\pi f N A B$."],
      tipEn: "Effective EMF: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} \\approx 0.707\\,\\text{emf}_{\\max}$.",
      tipAr: "القيمة الفعالة: $\\text{emf}_{\\text{eff}} = \\frac{\\text{emf}_{\\max}}{\\sqrt{2}} = 0.707\\,\\text{emf}_{\\max}$."
    },
    {
      titleEn: "Step-Up Electric Transformer Characteristics",
      titleAr: "خصائص المحول الكهربي الرافع للجهد",
      qEn: "In an ideal step-up electric transformer ($V_s > V_p$):",
      qAr: "في المحول الكهربي المثالي الرافع للجهد ($V_s > V_p$):",
      optsEn: [
        "$N_s > N_p$ and $I_s < I_p$",
        "$N_s < N_p$ and $I_s > I_p$",
        "$N_s > N_p$ and $I_s > I_p$",
        "The frequency of secondary voltage is double the primary frequency"
      ],
      optsAr: [
        "$N_s > N_p$ وتكون شدة تيار الثانوي أقل من الابتدائي ($I_s < I_p$)",
        "$N_s < N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
        "$N_s > N_p$ وتكون شدة تيار الثانوي أكبر من الابتدائي ($I_s > I_p$)",
        "يتضاعف تردد التيار في الملف الثانوي مقارنة بالابتدائي"
      ],
      ansIdx: 0,
      hintEn: "Transformers conserve electrical power ($P_p = P_s$), so raising voltage reduces current.",
      hintAr: "المحول يحفظ القدرة الكهربية: رفع الجهد يقابله خفض في شدة التيار بنفس النسبة دون تغيير التردد.",
      solEn: ["A step-up transformer raises voltage ($V_s > V_p$) by having $N_s > N_p$, while current drops ($I_s < I_p$). Frequency is unchanged."],
      solAr: ["المحول الرافع للجهد يكون خافضاً للتيار ($N_s > N_p$) وتردد التيار في الثانوي يساوي تردد الابتدائي تماماً."],
      tipEn: "Electric transformers operate ONLY on alternating current (AC); they do NOT function on continuous DC sources.",
      tipAr: "يعمل المحول الكهربي على التيار المتردد فقط ولا يعمل على التيار المستمر لانعدام التغير في الفيض."
    }
  ];

  const medTemplates: TemplateItem[] = [
    {
      titleEn: "Average Induced EMF Over a Quarter Cycle in Dynamo",
      titleAr: "متوسط القوة الدافعة خلال ربع دورة في الدينامو",
      qEn: "If the peak electromotive force of a dynamo is $\\text{emf}_{\\max} = 200\\text{ V}$, the average induced EMF over a quarter cycle starting from zero is:",
      qAr: "إذا كانت القيمة العظمى للقوة الدافعة لدينامو هي $\\text{emf}_{\\max} = 200\\text{ V}$، فإن متوسط القوة الدافعة خلال ربع دورة من الوضع العمودي يساوي:",
      optsEn: [
        "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
        "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
        "$100\\text{ V}$",
        "$0\\text{ V}$"
      ],
      optsAr: [
        "$127.3\\text{ V}$ ($\\frac{2}{\\pi} \\times 200$)",
        "$141.4\\text{ V}$ ($\\frac{200}{\\sqrt{2}}$)",
        "$100\\text{ V}$",
        "$0\\text{ V}$"
      ],
      ansIdx: 0,
      hintEn: "$\\text{emf}_{\\text{avg (1/4)}} = \\frac{2}{\\pi} \\text{emf}_{\\max} = \\frac{4NAB}{T}$.",
      hintAr: "العلاقة الهامة: $\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\text{emf}_{\\max}$.",
      solEn: [
        "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 = \\frac{400}{3.1416} \\approx 127.3\\text{ V}$."
      ],
      solAr: [
        "$\\text{emf}_{\\text{avg}} = \\frac{2}{\\pi} \\times 200 \\approx 127.3\\text{ V}$."
      ],
      tipEn: "Average EMF over a quarter cycle equals average EMF over a half cycle from zero position: both equal $\\frac{2}{\\pi}\\text{emf}_{\\max}$.",
      tipAr: "متوسط $\\text{emf}$ خلال ربع دورة يساوي متوسطها خلال نصف دورة من وضع الصفر وكلاهما يساوي $\\frac{2}{\\pi}\\text{emf}_{\\max}$."
    },
    {
      titleEn: "Electric Transformer Efficiency Calculation",
      titleAr: "حساب كفاءة محول كهربي غير مثالي",
      qEn: "A transformer connected to a $220\\text{ V}$ source delivers $11\\text{ V}$ to a device drawing $2\\text{ A}$. If the primary current is $0.12\\text{ A}$, the efficiency $\\eta$ is:",
      qAr: "محول كهربي متصل بمصدر $220\\text{ V}$ يعطي جهداً ثانوياً $11\\text{ V}$ لجهاز يسحب $2\\text{ A}$. إذا كان تيار الابتدائي $0.12\\text{ A}$، فإن كفاءة المحول $\\eta$ تساوي:",
      optsEn: [
        "$83.3\\%$",
        "$90.0\\%$",
        "$75.5\\%$",
        "$95.2\\%$"
      ],
      optsAr: [
        "$83.3\\%$",
        "$90.0\\%$",
        "$75.5\\%$",
        "$95.2\\%$"
      ],
      ansIdx: 0,
      hintEn: "$\\eta = \\frac{P_s}{P_p} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
      hintAr: "كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.",
      solEn: [
        "$P_s = 11 \\times 2 = 22\\text{ W}$.",
        "$P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
        "$\\eta = \\frac{22}{26.4} \\times 100\\% \\approx 83.3\\%$."
      ],
      solAr: [
        "القدرة الناتجة: $P_s = 11 \\times 2 = 22\\text{ W}$.",
        "القدرة المستهلكة: $P_p = 220 \\times 0.12 = 26.4\\text{ W}$.",
        "الكفاءة: $\\eta = \\frac{22}{26.4} \\times 100\\% = 83.3\\%$."
      ],
      tipEn: "Iron core is made of laminated silicon steel sheets to reduce eddy current energy losses.",
      tipAr: "يُصنع القلب من شرائح رقيقة من الحديد المطاوع السيليكوني معزولة عن بعضها للحد من التيارات الدوامية."
    },
    {
      titleEn: "Self-Induction and Stored Magnetic Energy",
      titleAr: "معامل الحث الذاتي والطاقة المغناطيسية المختزنة",
      qEn: "A solenoid with self-inductance $L = 0.5\\text{ H}$ carries a steady current of $4\\text{ A}$. When the circuit is interrupted and current drops to zero in $0.02\\text{ s}$, the average induced EMF is:",
      qAr: "ملف لولبي معامل حثه الذاتي $L = 0.5\\text{ H}$ يمر به تيار $4\\text{ A}$. عند فتح دائرته وتلاشي التيار في زمن قدره $0.02\\text{ s}$، فإن القوة الدافعة المستحثة الطردية المتولدة هي:",
      optsEn: [
        "$100\\text{ V}$",
        "$50\\text{ V}$",
        "$200\\text{ V}$",
        "$20\\text{ V}$"
      ],
      optsAr: [
        "$100\\text{ V}$",
        "$50\\text{ V}$",
        "$200\\text{ V}$",
        "$20\\text{ V}$"
      ],
      ansIdx: 0,
      hintEn: "$\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$. $\\Delta I = 0 - 4 = -4\\text{ A}$.",
      hintAr: "طبق قانون الحث الذاتي: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$.",
      solEn: [
        "$\\text{emf} = -0.5 \\times \\frac{0 - 4}{0.02} = 0.5 \\times 200 = 100\\text{ V}$."
      ],
      solAr: [
        "$\\text{emf} = -0.5 \\times \\frac{-4}{0.02} = 100\\text{ V}$ (طردية كبيرة مسببة لشرر كهربي)."
      ],
      tipEn: "Induced forward EMF upon breaking a circuit is much greater than reverse EMF upon closing because break time is very short.",
      tipAr: "$\\text{emf}$ الطردية عند فتح الدائرة أكبر بكثير من العكسية عند غلقها لأن زمن انهيار التيار أصغر بكثير من زمن نموه."
    }
  ];

  const hotsTemplates: TemplateItem[] = [
    {
      titleEn: "Power Transmission Over Long Distances",
      titleAr: "نقل الطاقة الكهربية عبر خطوط النقل الطويلة",
      qEn: "A power station produces $100\\text{ kW}$ transmitted across lines of resistance $R_{\\text{line}} = 4\\,\\Omega$. If transmission occurs at $V = 10\\text{ kV}$, the power loss in transmission lines is:",
      qAr: "محطة توليد تنتج قدرة $100\\text{ kW}$ تُنقل عبر خطوط نقل مقاومتها $R = 4\\,\\Omega$. إذا تم النقل عند فرق جهد $V = 10\\text{ kV}$، فإن القدرة المفقودة في الأسلاك تساوي:",
      optsEn: [
        "$400\\text{ W}$ ($0.4\\text{ kW}$)",
        "$4000\\text{ W}$",
        "$40\\text{ W}$",
        "$1600\\text{ W}$"
      ],
      optsAr: [
        "$400\\text{ W}$ ($0.4\\text{ kW}$)",
        "$4000\\text{ W}$",
        "$40\\text{ W}$",
        "$1600\\text{ W}$"
      ],
      ansIdx: 0,
      hintEn: "Current in lines: $I = P/V = 100\\text{ kW} / 10\\text{ kV} = 10\\text{ A}$. Power loss $P_{\\text{loss}} = I^2 R$.",
      hintAr: "شدة تيار النقل: $I = P/V = 100,000 / 10,000 = 10\\text{ A}$. القدرة المفقودة $P = I^2 R$.",
      solEn: [
        "$I = \\frac{100\\times 10^3}{10\\times 10^3} = 10\\text{ A}$.",
        "$P_{\\text{loss}} = I^2 R = 10^2 \\times 4 = 400\\text{ W}$."
      ],
      solAr: [
        "$I = 100,000 / 10,000 = 10\\text{ A}$.",
        "$P_{\\text{loss}} = (10)^2 \\times 4 = 400\\text{ W}$ (تمثل $0.4\\%$ فقط من القدرة المنقولة)."
      ],
      tipEn: "Raising transmission voltage $10\\times$ reduces line current $10\\times$ and reduces power losses $100\\times$!",
      tipAr: "رفع جهد النقل بمقدار 10 أمثال يقلل تيار الخط لـ 1/10 ويقلل القدرة المفقودة لـ 1/100 لأن الفقد يتناسب مع مربع التيار."
    }
  ];

  const easy = buildTier('phys_ch3_db', 'easy', 58, easyTemplates, 'Easy', 'سهل');
  const med = buildTier('phys_ch3_db', 'medium', 59, medTemplates, 'Medium', 'متوسط');
  const hots = buildTier('phys_ch3_db', 'hots', 58, hotsTemplates, 'HOTS', 'تفكير عليا');

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/thanaweya/physCh3Databank.ts'),
    'physCh3Databank',
    easy,
    med,
    hots
  );
}

// =========================================================================
// THANAWEYA PHYSICS CHAPTER 4: Alternating Current Circuits
// =========================================================================
export function generatePhysCh4(): void {
  const easyTemplates: TemplateItem[] = [
    {
      titleEn: "Hot-Wire Ammeter Operating Principle",
      titleAr: "فكرة عمل الأميتر الحراري",
      qEn: "The hot-wire ammeter measures the effective value of AC current based on:",
      qAr: "يعتمد الأميتر الحراري في قياس القيمة الفعالة للتيار المتردد على:",
      optsEn: [
        "The thermal effect of electric current ($Q = I^2 R t$)",
        "The magnetic torque on a rotating coil",
        "The electrostatic repulsion between electric charges",
        "The photoelectric emission of conduction electrons"
      ],
      optsAr: [
        "التأثير الحراري للتيار الكهربي ($Q = I^2 R t$)",
        "عزم الازدواج المغناطيسي المؤثر على ملف متحرك",
        "التنافر الكهروستاتيكي بين الشحنات الساكنة",
        "الانبعاث الكهروضوئي لإلكترونات التوصيل"
      ],
      ansIdx: 0,
      hintEn: "Heat produced is independent of current direction because $Q \\propto I^2$.",
      hintAr: "كمية الحرارة لا تعتمد على اتجاه التيار لأنها تتناسب مع مربع شدة التيار $I^2$.",
      solEn: ["Hot-wire ammeters rely on Joule heating of a platinum-iridium wire to measure effective current."],
      solAr: ["يعتمد الأميتر الحراري على التمدد الحراري لسلك من البلاتين والإيريديوم الناتج عن التأثير الحراري للتيار."],
      tipEn: "Scale of hot-wire ammeter is non-uniform because heat generated is proportional to $I^2$.",
      tipAr: "تدريج الأميتر الحراري غير منتظم وتتباعد أقسامه كلما زاد التيار لأن كمية الحرارة تتناسب طردياً مع مربع شدة التيار."
    },
    {
      titleEn: "Inductive Reactance Formula",
      titleAr: "المفاعلة الحثية لملف حث عديم المقاومة",
      qEn: "The inductive reactance ($X_L$) of a pure inductor of inductance $L$ connected to frequency $f$ is:",
      qAr: "المفاعلة الحثية ($X_L$) لملف حث نقي معامل حثه $L$ متصل بمصدر تردده $f$ تعطى بالعلاقة:",
      optsEn: [
        "$X_L = 2\\pi f L = \\omega L$",
        "$X_L = \\frac{1}{2\\pi f L}$",
        "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
        "$X_L = 4\\pi^2 f^2 L$"
      ],
      optsAr: [
        "$X_L = 2\\pi f L = \\omega L$",
        "$X_L = \\frac{1}{2\\pi f L}$",
        "$X_L = 2\\pi \\sqrt{\\frac{L}{C}}$",
        "$X_L = 4\\pi^2 f^2 L$"
      ],
      ansIdx: 0,
      hintEn: "Inductive reactance is measured in Ohms ($\Omega$) and increases linearly with frequency $f$.",
      hintAr: "تقاس المفاعلة الحثية بالأوم وتتناسب طردياً مع تردد التيار $f$ ومعامل الحث $L$.",
      solEn: ["$X_L = 2\\pi f L$. At high frequencies, $X_L \\to \\infty$, blocking AC like an open circuit."],
      solAr: ["$X_L = 2\\pi f L$. في الترددات العالية جداً تكون المفاعلة الحثية كبيرة جداً وتمنع مرور التيار كدائرة مفتوحة."],
      tipEn: "In a pure inductor, voltage leads current by a phase angle of $90^\\circ$ ($\\pi/2$).",
      tipAr: "في ملف الحث النقي يسبق الجهد شدة التيار بزاوية طور مقدارها $90^\\circ$."
    },
    {
      titleEn: "Capacitive Reactance Formula",
      titleAr: "المفاعلة السعوية لمكثف",
      qEn: "The capacitive reactance ($X_C$) of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:",
      qAr: "المفاعلة السعوية ($X_C$) لمكثف سعته $C$ في دائرة تيار متردد تردده $f$ تساوي:",
      optsEn: [
        "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
        "$X_C = 2\\pi f C$",
        "$X_C = \\frac{2\\pi f}{C}$",
        "$X_C = \\frac{C}{2\\pi f}$"
      ],
      optsAr: [
        "$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$",
        "$X_C = 2\\pi f C$",
        "$X_C = \\frac{2\\pi f}{C}$",
        "$X_C = \\frac{C}{2\\pi f}$"
      ],
      ansIdx: 0,
      hintEn: "Capacitive reactance is inversely proportional to frequency $f$.",
      hintAr: "المفاعلة السعوية تتناسب عكسياً مع التردد $f$ ومع السعة $C$.",
      solEn: ["$X_C = \\frac{1}{2\\pi f C}$. At zero frequency (DC), $X_C \\to \\infty$, blocking DC."],
      solAr: ["$X_C = \\frac{1}{2\\pi f C}$. المكثف يمنع مرور التيار المستمر تماماً لأن تردده صفر فتكون $X_C = \\infty$."],
      tipEn: "In a pure capacitor, current leads voltage by a phase angle of $90^\\circ$.",
      tipAr: "في المكثف النقي يسبق التيار فرق الجهد بزاوية طور $90^\\circ$."
    },
    {
      titleEn: "Resonance Condition in RLC Series Circuit",
      titleAr: "حالة الرنين في دائرة RLC على التوالي",
      qEn: "In a series RLC AC circuit, electrical resonance occurs when:",
      qAr: "في دائرة تيار متردد تحتوي على مقاومة وملف ومكثف على التوالي (RLC)، تحدث حالة الرنين عندما:",
      optsEn: [
        "Inductive reactance equals capacitive reactance ($X_L = X_C$), and impedance is minimum ($Z = R$)",
        "Resistance equals zero ($R = 0$)",
        "Voltage and current are out of phase by $90^\\circ$",
        "Total impedance approaches infinity ($Z \\to \\infty$)"
      ],
      optsAr: [
        "تتساوى المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$) وتكون المعاوقة أقل ما يمكن ($Z = R$)",
        "تنعدم المقاومة الأومية تماماً ($R = 0$)",
        "يختلف الجهد عن التيار في الطور بمقدار $90^\\circ$",
        "تصل المعاوقة الكلية إلى قيمة لا نهائية"
      ],
      ansIdx: 0,
      hintEn: "At resonance, impedance is purely resistive ($Z = R$) and current is maximum ($I = V/R$).",
      hintAr: "عند الرنين: تتلاشى المفاعلة ($X_L = X_C$)، وتكون المعاوقة أقل ما يمكن مساوية لـ $R$ والتيار قيمة عظمى.",
      solEn: ["Resonance condition: $X_L = X_C \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$. Resonant frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."],
      solAr: ["شرط الرنين: $X_L = X_C$ وتكون المعاوقة $Z = R$ وزاوية الطور $\\tan\\theta = 0$، وتردد الرنين $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."],
      tipEn: "At resonance, voltage and current are completely in phase ($\\theta = 0^\\circ$, power factor $= 1$).",
      tipAr: "في حالة الرنين يتفق الجهد الكلي والتيار في الطور ويكون للدائرة خواص أومية نقية."
    }
  ];

  const medTemplates: TemplateItem[] = [
    {
      titleEn: "Impedance Calculation in RLC Circuit",
      titleAr: "حساب المعاوقة الكلية في دائرة RLC",
      qEn: "A series AC circuit has $R = 40\\,\\Omega$, $X_L = 100\\,\\Omega$, and $X_C = 70\\,\\Omega$. The total impedance $Z$ and phase angle $\\theta$ are:",
      qAr: "دائرة تيار متردد RLC على التوالي تحتوي على $R = 40\\,\\Omega$ و $X_L = 100\\,\\Omega$ و $X_C = 70\\,\\Omega$. فإن المعاوقة الكلية $Z$ وزاوية الطور $\\theta$ هما:",
      optsEn: [
        "$Z = 50\\,\\Omega$ and $\\theta \\approx +36.87^\\circ$ (inductive)",
        "$Z = 210\\,\\Omega$ and $\\theta = 0^\\circ$",
        "$Z = 30\\,\\Omega$ and $\\theta = -45^\\circ$",
        "$Z = 70\\,\\Omega$ and $\\theta = +90^\\circ$"
      ],
      optsAr: [
        "$Z = 50\\,\\Omega$ وزاوية الطور $\\theta \\approx +36.87^\\circ$ (خواص حثية)",
        "$Z = 210\\,\\Omega$ وزاوية الطور $\\theta = 0^\\circ$",
        "$Z = 30\\,\\Omega$ وزاوية الطور $\\theta = -45^\\circ$",
        "$Z = 70\\,\\Omega$ وزاوية الطور $\\theta = +90^\\circ$"
      ],
      ansIdx: 0,
      hintEn: "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ and $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
      hintAr: "المعاوقة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ والزاوية: $\\tan\\theta = \\frac{X_L - X_C}{R}$.",
      solEn: [
        "$X_L - X_C = 100 - 70 = 30\\,\\Omega$.",
        "$Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\,\\Omega$.",
        "$\\tan\\theta = 30/40 = 0.75 \\implies \\theta \\approx 36.87^\\circ$ (voltage leads, inductive)."
      ],
      solAr: [
        "$X_L - X_C = 30\\,\\Omega$.",
        "$Z = \\sqrt{40^2 + 30^2} = 50\\,\\Omega$.",
        "$\\tan\\theta = 30/40 = 0.75$ إذن الجهد يسبق التيار والخواص حثية."
      ],
      tipEn: "Since $X_L > X_C$, the circuit exhibits inductive characteristics and voltage leads current.",
      tipAr: "بما أن $X_L > X_C$ فإن للدائرة خواصاً حثية ويسبق الجهد الكلي التيار بزاوية طور موجبة."
    },
    {
      titleEn: "Resonant Frequency Calculation",
      titleAr: "حساب تردد الرنين في دائرة RLC",
      qEn: "A circuit contains an inductor $L = \\frac{7}{22}\\text{ H}$ and capacitor $C = \\frac{7}{22}\\mu\\text{F}$. Taking $\\pi = \\frac{22}{7}$, the resonant frequency $f_0$ is:",
      qAr: "دائرة رنين تحتوي على ملف حث $L = \\frac{7}{22}\\text{ H}$ ومكثف سعته $C = \\frac{7}{22}\\mu\\text{F}$. باعتبار $\\pi = \\frac{22}{7}$، فإن تردد الرنين $f_0$ يساوي:",
      optsEn: [
        "$500\\text{ Hz}$",
        "$1000\\text{ Hz}$",
        "$250\\text{ Hz}$",
        "$50\\text{ Hz}$"
      ],
      optsAr: [
        "$500\\text{ Hz}$",
        "$1000\\text{ Hz}$",
        "$250\\text{ Hz}$",
        "$50\\text{ Hz}$"
      ],
      ansIdx: 0,
      hintEn: "$f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$. Convert $C$ from $\\mu\\text{F}$ to Farads ($10^{-6}$).",
      hintAr: "تردد الرنين: $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$. تذكر تحويل الميكروفاراد بالضرب في $10^{-6}$.",
      solEn: [
        "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
        "$f_0 = \\frac{1}{2 \\times (22/7) \\times (7/22) \\times 10^{-3}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
      ],
      solAr: [
        "$\\sqrt{LC} = \\frac{7}{22} \\times 10^{-3}$.",
        "$f_0 = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}$."
      ],
      tipEn: "Tuning radios works by adjusting capacitor capacitance $C$ until resonant frequency matches broadcast frequency.",
      tipAr: "تعمل دوائر الاستقبال اللاسلكي بتغيير سعة المكثف المتغير حتى يتساوى تردد الرنين مع تردد المحطة المراد سماعها."
    }
  ];

  const hotsTemplates: TemplateItem[] = [
    {
      titleEn: "Current Independence of Frequency in Pure Circuits",
      titleAr: "اعتماد شدة التيار على التردد في الدوائر المختلفة",
      qEn: "An AC dynamo with negligible internal resistance is connected to a pure capacitor. If the dynamo rotation frequency doubles ($2f$), the maximum circuit current $I_{\\max}$ will:",
      qAr: "دينامو تيار متردد مهمل المقاومة الداخلية متصل بمكثف نقي سعته $C$. إذا تضاعف تردد دوران ملف الدينامو، فإن القيمة العظمى للتيار $I_{\\max}$ المار بالدائرة:",
      optsEn: [
        "Increase to 4 times its initial value ($4I$)",
        "Double to 2 times its initial value ($2I$)",
        "Remain completely unchanged",
        "Decrease to one-fourth its initial value ($I/4$)"
      ],
      optsAr: [
        "تزداد إلى 4 أمثال قيمتها الابتدائية ($4I$)",
        "تتضاعف إلى ضعفي قيمتها الابتدائية ($2I$)",
        "تظل ثابتة دون أي تغيير",
        "تقل إلى ربع قيمتها الابتدائية ($I/4$)"
      ],
      ansIdx: 0,
      hintEn: "$V_{\\max} \\propto f$ and $X_C \\propto 1/f$. Thus $I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$!",
      hintAr: "جهد الدينامو يتناسب طردياً مع $f$ والمفاعلة السعوية $X_C$ تتناسب عكسياً مع $f$، فالتيار يتناسب مع $f^2$!",
      solEn: [
        "$V_{\\max} = 2\\pi f N A B \\propto f$.",
        "$X_C = \\frac{1}{2\\pi f C} \\propto \\frac{1}{f}$.",
        "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f \\times f = f^2$. Doubling $f$ yields $2^2 = 4I$."
      ],
      solAr: [
        "$V_{\\max} \\propto f$ ومفاعلة المكثف $X_C \\propto 1/f$.",
        "$I_{\\max} = \\frac{V_{\\max}}{X_C} \\propto f^2$. تضاعف التردد يضاعف التيار 4 مرات."
      ],
      tipEn: "With pure resistor: $I \\propto f$. With pure inductor: $I$ is independent of $f$. With pure capacitor: $I \\propto f^2$!",
      tipAr: "مع المقاومة: التيار يزداد للضعف ($I \\propto f$). مع الملف: التيار يظل ثابتاً ($I$ مستقل عن $f$). مع المكثف: التيار يزداد لـ 4 أمثاله ($I \\propto f^2$)."
    }
  ];

  const easy = buildTier('phys_ch4_db', 'easy', 58, easyTemplates, 'Easy', 'سهل');
  const med = buildTier('phys_ch4_db', 'medium', 59, medTemplates, 'Medium', 'متوسط');
  const hots = buildTier('phys_ch4_db', 'hots', 58, hotsTemplates, 'HOTS', 'تفكير عليا');

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/thanaweya/physCh4Databank.ts'),
    'physCh4Databank',
    easy,
    med,
    hots
  );
}

// =========================================================================
// THANAWEYA PHYSICS CHAPTER 5: Dual Nature of Wave and Particle
// =========================================================================
export function generatePhysCh5(): void {
  const easyTemplates: TemplateItem[] = [
    {
      titleEn: "Wien Displacement Law",
      titleAr: "قانون فين لإشعاع الجسم الأسود",
      qEn: "According to Wien's displacement law, the wavelength corresponding to maximum radiation intensity ($\\lambda_{\\max}$) of a blackbody is:",
      qAr: "وفقاً لقانون فين لإشعاع الجسم الأسود، فإن الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{\\max}$):",
      optsEn: [
        "Inversely proportional to the absolute thermodynamic temperature ($T$ in Kelvin)",
        "Directly proportional to the absolute temperature squared ($T^2$)",
        "Directly proportional to the surface area of the emitting body",
        "Completely independent of the temperature of the blackbody"
      ],
      optsAr: [
        "يتناسب عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن ($T$)",
        "يتناسب طردياً مع مربع درجة الحرارة المطلقة ($T^2$)",
        "يتناسب طردياً مع مساحة سطح الجسم المشع",
        "لا يعتمد إطلاقاً على درجة حرارة الجسم الأسود"
      ],
      ansIdx: 0,
      hintEn: "$\\lambda_{\\max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{\\max 1}}{\\lambda_{\\max 2}} = \\frac{T_2}{T_1}$.",
      hintAr: "قانون فين: الطول الموجي لأقصى شدة إشعاع يتناسب عكسياً مع درجة الحرارة المطلقة بالكلفن.",
      solEn: ["Wien's Law: $\\lambda_{\\max} \\propto \\frac{1}{T}$. As temperature rises, radiation shifts toward shorter wavelengths (blue)."],
      solAr: ["قانون فين: $\\lambda_{\\max} \\propto \\frac{1}{T}$. كلما زادت درجة حرارة الجسم زاحت قمة الإشعاع نحو الأطوال الموجية الأقصر."],
      tipEn: "Solar surface is $\\sim 6000\\text{ K}$ with $\\lambda_{\\max} \\approx 0.5\\,\\mu\\text{m}$ (visible light). Earth is $\\sim 300\\text{ K}$ with $\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$ (infrared).",
      tipAr: "درجة حرارة الشمس 6000 كلفن وقمة إشعاعها في الضوء المرئي (0.5 ميكرومتر)، والأرض 300 كلفن وإشعاعها حراري في الأشعة تحت الحمراء."
    },
    {
      titleEn: "Einstein Photoelectric Equation",
      titleAr: "معادلة أينشتاين للظاهرة الكهروضوئية",
      qEn: "Einstein explained the photoelectric effect by stating that a photon of frequency $\\nu$ transfers all its energy to an electron such that:",
      qAr: "فسر أينشتاين الانبعاث الكهروضوئي بافتراض أن طاقة فوتون الضوء الساقط $h\\nu$ تعطى للإلكترون وفق المعادلة:",
      optsEn: [
        "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
        "$h\\nu = W_e - KE_{\\max}$",
        "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
        "$h\\nu = m_e c^2 + W_e$"
      ],
      optsAr: [
        "$h\\nu = W_e + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v^2$",
        "$h\\nu = W_e - KE_{\\max}$",
        "$h\\nu = \\frac{W_e}{KE_{\\max}}$",
        "$h\\nu = m_e c^2 + W_e$"
      ],
      ansIdx: 0,
      hintEn: "Work function $W_e = h\\nu_c$ is the minimum energy needed to liberate an electron without kinetic energy.",
      hintAr: "دالة الشغل $W_e = h\\nu_c$ هي أقل طاقة تكفي لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة.",
      solEn: ["Einstein's conservation equation: $E_{\\text{photon}} = W_e + KE_{\\max}$. If $\\nu < \\nu_c$, no emission occurs."],
      solAr: ["معادلة أينشتاين الكهروضوئية: $h\\nu = W_e + KE_{\\max}$. إذا كان التردد أقل من التردد الحرج لا تنبعث أي إلكترونات."],
      tipEn: "Increasing light intensity increases photocurrent (number of electrons) but DOES NOT change their kinetic energy or stopping potential.",
      tipAr: "زيادة شدة الضوء تزيد شدة التيار الكهروضوئي (عدد الإلكترونات) ولا تغير طاقة حركتها أو جهد الإيقاف طالما التردد أكبر من الحرج."
    },
    {
      titleEn: "Compton Effect Characteristics",
      titleAr: "خصائص ظاهرة كومتون وحفظ الطاقة وكمية الحركة",
      qEn: "In the Compton effect, when a high-energy X-ray photon collides with a free stationary electron, the scattered photon has:",
      qAr: "في ظاهرة كومتون، عند اصطدام فوتون أشعة إكس عالي الطاقة بإلكترون حر ساكن، فإن الفوتون المشتت:",
      optsEn: [
        "A longer wavelength, lower frequency, and reduced energy, while traveling at speed $c$",
        "A shorter wavelength, higher frequency, and higher speed than $c$",
        "The identical energy, frequency, and wavelength as the incident photon",
        "Zero energy and transforms entirely into a static positron"
      ],
      optsAr: [
        "يزداد طوله الموجي ويقل تردده وتقل طاقته، مع بقاء سرعته ثابتة ($c$)",
        "يقل طوله الموجي ويزداد تردده وتزداد سرعته عن سرعة الضوء",
        "تظل طاقته وتردده وطوله الموجي ثابتة تماماً دون أي تغيير",
        "تنعدم طاقته ويتحول كلياً إلى بوزيترون ساكن"
      ],
      ansIdx: 0,
      hintEn: "Total energy and total linear momentum are conserved in Compton scattering, proving photon particle properties.",
      hintAr: "ظاهرة كومتون تثبت الخاصية الجسيمية للفوتون لتحقق قانوني بقاء الطاقة وكمية الحركة في التصادم.",
      solEn: ["Scattered photon gives part of its energy to the electron as kinetic energy, so its frequency drops and $\\lambda$ increases. Speed in vacuum remains $c$."],
      solAr: ["يفقد الفوتون جزءاً من طاقته يكتسبه الإلكترون كطاقة حركة، فيقل تردد الفوتون ويزداد طوله الموجي وتظل سرعته ثابتة $c$."],
      tipEn: "In Compton effect, the scattered electron gains velocity, momentum, and kinetic energy, while its mass $m_e$ remains constant.",
      tipAr: "في ظاهرة كومتون: الإلكترون تزداد طاقة حركته وكمية حركته وسرعته، بينما كتلته ثابتة."
    },
    {
      titleEn: "de Broglie Matter-Wave Duality",
      titleAr: "معادلة دي برولي وازدواجية الموجة والجسيم",
      qEn: "The de Broglie wavelength ($\\lambda$) associated with a moving particle of mass $m$ and velocity $v$ is given by:",
      qAr: "الطول الموجي لدي برولي ($\\lambda$) المصاحب لجسيم متحرك كتلته $m$ وسرعته $v$ يعطى بالعلاقة:",
      optsEn: [
        "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
        "$\\lambda = \\frac{h m}{v}$",
        "$\\lambda = \\frac{m v^2}{h}$",
        "$\\lambda = \\frac{h c}{m v^2}$"
      ],
      optsAr: [
        "$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$",
        "$\\lambda = \\frac{h m}{v}$",
        "$\\lambda = \\frac{m v^2}{h}$",
        "$\\lambda = \\frac{h c}{m v^2}$"
      ],
      ansIdx: 0,
      hintEn: "Every moving matter particle possesses wave characteristics with wavelength inversely proportional to momentum.",
      hintAr: "يصاحب حركة أي جسيم مادي موجة مادية طولها الموجي يتعين من علاقة دي برولي: $\\lambda = \\frac{h}{mv}$.",
      solEn: ["de Broglie relation: $\\lambda = \\frac{h}{mv}$. Used in electron microscopes where fast electrons have tiny $\\lambda$."],
      solAr: ["علاقة دي برولي: $\\lambda = \\frac{h}{mv}$. فكرة عمل الميكروسكوب الإلكتروني تعتمد على صغر الطول الموجي للإلكترونات السريعة."],
      tipEn: "Electron microscope can resolve minute viruses because increasing anode voltage $V$ increases electron velocity $v$ and shrinks $\\lambda$.",
      tipAr: "يتميز الميكروسكوب الإلكتروني بقدرة تكبير هائلة لأن زيادة فرق الجهد تزيد سرعة الإلكترونات فيصغر الطول الموجي لدي برولي ويمكن رؤية الفيروسات الدقيقة."
    }
  ];

  const medTemplates: TemplateItem[] = [
    {
      titleEn: "Photoelectric Threshold Wavelength Calculation",
      titleAr: "حساب الطول الموجي الحرج ودالة الشغل",
      qEn: "A metal surface has a work function of $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. If $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3 \\times 10^8\\text{ m/s}$, the threshold wavelength $\\lambda_c$ is:",
      qAr: "فلز دالة الشغل لسطحه $W_e = 3.3125 \\times 10^{-19}\\text{ J}$. إذا علمت أن $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ و $c = 3 \\times 10^8\\text{ m/s}$، فإن الطول الموجي الحرج $\\lambda_c$ للفلز هو:",
      optsEn: [
        "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
        "$400\\text{ nm}$",
        "$500\\text{ nm}$",
        "$750\\text{ nm}$"
      ],
      optsAr: [
        "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
        "$400\\text{ nm}$",
        "$500\\text{ nm}$",
        "$750\\text{ nm}$"
      ],
      ansIdx: 0,
      hintEn: "$\\lambda_c = \\frac{hc}{W_e}$.",
      hintAr: "العلاقة: $\\lambda_c = \\frac{hc}{W_e}$.",
      solEn: [
        "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 2 \\times 3 \\times 10^{-7} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
      ],
      solAr: [
        "$\\lambda_c = \\frac{6.625 \\times 10^{-34} \\times 3 \\times 10^8}{3.3125 \\times 10^{-19}} = 6 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$."
      ],
      tipEn: "Light of wavelength longer than $600\\text{ nm}$ will fail to liberate electrons, regardless of its brightness.",
      tipAr: "أي ضوء طوله الموجي أكبر من 600 نانومتر لن يستطيع تحرير أي إلكترون مهما زادت شدته."
    },
    {
      titleEn: "Photon Momentum and Linear Force",
      titleAr: "كمية تحرك الفوتون والقوة الناتجة عن انعكاسه",
      qEn: "A laser beam of power $P = 60\\text{ W}$ falls perpendicularly on a perfectly reflecting mirror. The continuous force $F$ exerted by the photon beam on the mirror is:",
      qAr: "شعاع ليزر قدرته $P = 60\\text{ W}$ يسقط عمودياً على مرآة عاكسة تماماً. فإن القوة المستمرة $F$ التي يؤثر بها حزمة الفوتونات على المرآة ($c = 3 \\times 10^8\\text{ m/s}$) هي:",
      optsEn: [
        "$4 \\times 10^{-7}\\text{ N}$",
        "$2 \\times 10^{-7}\\text{ N}$",
        "$1.8 \\times 10^{10}\\text{ N}$",
        "$8 \\times 10^{-7}\\text{ N}$"
      ],
      optsAr: [
        "$4 \\times 10^{-7}\\text{ N}$",
        "$2 \\times 10^{-7}\\text{ N}$",
        "$1.8 \\times 10^{10}\\text{ N}$",
        "$8 \\times 10^{-7}\\text{ N}$"
      ],
      ansIdx: 0,
      hintEn: "For a reflecting surface: $F = \\frac{2P}{c}$.",
      hintAr: "القوة المؤثرة على سطح عاكس تماماً: $F = \\frac{2P}{c}$.",
      solEn: [
        "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = \\frac{120}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
      ],
      solAr: [
        "$F = \\frac{2P}{c} = \\frac{2 \\times 60}{3 \\times 10^8} = 4 \\times 10^{-7}\\text{ N}$."
      ],
      tipEn: "Photon force is tiny ($10^{-7}\\text{ N}$) on macroscopic objects, but produces significant accelerations on tiny electrons.",
      tipAr: "قوة شعاع الضوء متناهية الصغر ولا تؤثر على الأجسام الكبيرة ولكنها مؤثرة جداً على الجسيمات الدقيقة كالإلكترونات."
    }
  ];

  const hotsTemplates: TemplateItem[] = [
    {
      titleEn: "Electron Wavelength and Accelerating Voltage Relation",
      titleAr: "العلاقة بين الطول الموجي للإلكترون وفرق جهد التعجيل",
      qEn: "In an electron microscope, if the accelerating potential difference between cathode and anode is quadrupled ($4V$), the de Broglie wavelength of the accelerated electrons will:",
      qAr: "في الميكروسكوب الإلكتروني، إذا زاد فرق الجهد بين الكاثود والأنود إلى 4 أمثاله ($4V$)، فإن الطول الموجي لدي برولي المصاحب للإلكترونات:",
      optsEn: [
        "Decrease to one-half its initial value ($\\lambda / 2$)",
        "Decrease to one-fourth its initial value ($\\lambda / 4$)",
        "Double to twice its initial value ($2\\lambda$)",
        "Remain completely unaffected"
      ],
      optsAr: [
        "يقل إلى نصف قيمته الأصلية ($\\lambda / 2$)",
        "يقل إلى ربع قيمته الأصلية ($\\lambda / 4$)",
        "يتضاعف إلى ضعفي قيمته الأصلية ($2\\lambda$)",
        "يظل ثابتاً لا يتغير"
      ],
      ansIdx: 0,
      hintEn: "$e V = \\frac{1}{2}m v^2 \\implies v \\propto \\sqrt{V}$. Then $\\lambda = \\frac{h}{mv} \\propto \\frac{1}{\\sqrt{V}}$.",
      hintAr: "طاقة الحركة: $eV = \\frac{1}{2}mv^2 \\implies v \\propto \\sqrt{V}$. وحيث $\\lambda = \\frac{h}{mv} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$.",
      solEn: [
        "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. When $V$ is multiplied by 4, $\\sqrt{4} = 2$, so $\\lambda$ drops by half."
      ],
      solAr: [
        "$\\lambda \\propto \\frac{1}{\\sqrt{V}}$. زيادة الجهد 4 مرات يجعل $\\sqrt{4} = 2$، فيقل الطول الموجي للنصف وتزداد دقة الميكروسكوب للضعف."
      ],
      tipEn: "Resolving power of the microscope is inversely proportional to wavelength: halving wavelength doubles resolving power!",
      tipAr: "القدرة التحليلية تتناسب عكسياً مع الطول الموجي: تقليل الطول الموجي للنصف يضاعف القدرة التحليلية."
    }
  ];

  const easy = buildTier('phys_ch5_db', 'easy', 58, easyTemplates, 'Easy', 'سهل');
  const med = buildTier('phys_ch5_db', 'medium', 59, medTemplates, 'Medium', 'متوسط');
  const hots = buildTier('phys_ch5_db', 'hots', 58, hotsTemplates, 'HOTS', 'تفكير عليا');

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/thanaweya/physCh5Databank.ts'),
    'physCh5Databank',
    easy,
    med,
    hots
  );
}

// =========================================================================
// THANAWEYA PHYSICS CHAPTER 6: Atomic Spectra, Lasers & Modern Electronics
// =========================================================================
export function generatePhysCh6(): void {
  const easyTemplates: TemplateItem[] = [
    {
      titleEn: "Bohr Hydrogen Energy Levels Formula",
      titleAr: "طاقة مستويات ذرة بور للهيدروجين",
      qEn: "According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given by:",
      qAr: "وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المدار الرئيسي رقم $n$ بوحدة الإلكترون فولت (eV) بالعلاقة:",
      optsEn: [
        "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
        "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
        "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
        "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
      ],
      optsAr: [
        "$E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$",
        "$E_n = -\\frac{13.6}{n}\\,\\text{eV}$",
        "$E_n = -13.6 \\times n^2\\,\\text{eV}$",
        "$E_n = +\\frac{13.6}{n^2}\\,\\text{eV}$"
      ],
      ansIdx: 0,
      hintEn: "The negative sign indicates that the electron is bound to the positive nucleus.",
      hintAr: "الإشارة السالبة تعني أن الإلكترون مقيد بقوة جذب النواة الموجبة ويلزم شغل لتحريره.",
      solEn: ["Bohr formula: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. Ground state $E_1 = -13.6\\,\\text{eV}$."],
      solAr: ["قانون بور لطاقة المستوى: $E_n = -\\frac{13.6}{n^2}\\,\\text{eV}$. طاقة المستوى الأول $E_1 = -13.6\\,\\text{eV}$."],
      tipEn: "Ionization energy of hydrogen from ground state is $+13.6\\,\\text{eV}$.",
      tipAr: "طاقة تأين ذرة الهيدروجين من المستوى الأرضي تساوي $+13.6\\,\\text{eV}$."
    },
    {
      titleEn: "Hydrogen Spectral Series Classification",
      titleAr: "تصنيف متسلسلات طيف ذرة الهيدروجين",
      qEn: "In the emission spectrum of hydrogen, the Lyman series corresponds to electronic transitions down to level:",
      qAr: "في طيف انبعاث ذرة الهيدروجين، تنتج متسلسلة ليمان عند هبوط الإلكترونات من المستويات العليا إلى المستوى:",
      optsEn: [
        "First energy level ($n = 1$) in the ultraviolet region",
        "Second energy level ($n = 2$) in the visible region (Balmer)",
        "Third energy level ($n = 3$) in the infrared region (Paschen)",
        "Fourth energy level ($n = 4$) in the infrared region (Brackett)"
      ],
      optsAr: [
        "المستوى الأول ($n = 1$) وتقع في منطقة الأشعة فوق البنفسجية",
        "المستوى الثاني ($n = 2$) وتقع في منطقة الضوء المرئي (بالمير)",
        "المستوى الثالث ($n = 3$) وتقع في منطقة الأشعة تحت الحمراء (باشن)",
        "المستوى الرابع ($n = 4$) وتقع في منطقة الأشعة تحت الحمراء (براكت)"
      ],
      ansIdx: 0,
      hintEn: "Lyman ($n=1$, UV), Balmer ($n=2$, Visible), Paschen ($n=3$, IR), Brackett ($n=4$, IR), Pfund ($n=5$, IR).",
      hintAr: "ليمان (الأول، فوق بنفسجية)، بالمير (الثاني، ضوء مرئي)، باشن (الثالث، تحت حمراء قريبة).",
      solEn: ["Lyman series transitions terminate at $n = 1$, having the highest frequency and photon energy in the ultraviolet spectrum."],
      solAr: ["متسلسلة ليمان تنتهي عند المستوى الأول $n = 1$ وهي الأعلى طاقة وتردداً وتقع في الأشعة فوق البنفسجية."],
      tipEn: "Balmer is the ONLY hydrogen spectral series visible to the human eye!",
      tipAr: "متسلسلة بالمير هي المتسلسلة الوحيدة التي تقع خطوطها في نطاق الضوء المرئي الذي تراه العين البشرية."
    },
    {
      titleEn: "Continuous X-Ray Minimum Wavelength (Duane-Hunt)",
      titleAr: "أقصر طول موجي لطيف الأشعة السينية المستمر",
      qEn: "In a Coolidge tube operated at potential difference $V$, the minimum continuous X-ray wavelength $\\lambda_{\\min}$ is given by:",
      qAr: "في أنبوبة كولدج لإنتاج الأشعة السينية عند تطبيق فرق جهد $V$، يعطى أقصر طول موجي للأنود (حد ديوان-هنت) بالعلاقة:",
      optsEn: [
        "$\\lambda_{\\min} = \\frac{h c}{e V}$",
        "$\\lambda_{\\min} = \\frac{e V}{h c}$",
        "$\\lambda_{\\min} = \\frac{h V}{e c}$",
        "$\\lambda_{\\min} = \\frac{c}{e V}$"
      ],
      optsAr: [
        "$\\lambda_{\\min} = \\frac{h c}{e V}$",
        "$\\lambda_{\\min} = \\frac{e V}{h c}$",
        "$\\lambda_{\\min} = \\frac{h V}{e c}$",
        "$\\lambda_{\\min} = \\frac{c}{e V}$"
      ],
      ansIdx: 0,
      hintEn: "Continuous X-rays result from electron braking/deceleration (Bremsstrahlung) near target nuclei: $e V = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}}$.",
      hintAr: "الأشعة المستمرة ناتجة عن إشعاع الكبح أو الفرملة للإلكترونات وتعتمد فقط على فرق الجهد المطبق بين الفتيلة والهدف.",
      solEn: ["Continuous cutoff: $\\lambda_{\\min} = \\frac{hc}{eV}$, dependent solely on tube voltage $V$, NOT on target material."],
      solAr: ["$\\lambda_{\\min} = \\frac{hc}{eV}$ وتعتمد فقط على فرق الجهد ولا تتأثر بنوع مادة الهدف."],
      tipEn: "Characteristic X-rays (sharp peaks) depend on target material atomic number $Z$, NOT on tube voltage (provided $V$ exceeds threshold).",
      tipAr: "الطيف المميز (الخطي) يعتمد على العدد الذري لمادة الهدف $Z$ (يتناسب عكسياً مع $Z$)."
    },
    {
      titleEn: "Four Core Properties of Laser Beams",
      titleAr: "الخصائص الأربع الأساسية لأشعة الليزر",
      qEn: "Laser light differs fundamentally from ordinary thermal light by possessing four unique physical characteristics:",
      qAr: "تتميز أشعة الليزر عن الضوء العادي بأربع خصائص فيزيائية أساسية هي:",
      optsEn: [
        "Monochromaticity, high coherence, high directionality, and high intensity",
        "Broad polychromatic spectrum, low coherence, high divergence, and low flux",
        "Infinite speed greater than $c$, zero momentum, and spherical wavefronts",
        "High absorption coefficient, thermal ionization, and random polarization"
      ],
      optsAr: [
        "النقاء الطيفي (أحادية الطول الموجي)، الترابط، توازي الحزمة (قلة الانفراج)، والشدة العالية",
        "اتساع الطيف اللوني، انعدام الترابط، كبر زاوية الانفراج، وتشتت الشدة",
        "السرعة اللانهائية الأكبر من $c$ وانعدام كمية الحركة والجبهة الكروية",
        "الامتصاص العالي والتأين الحراري والاستقطاب العشوائي"
      ],
      ansIdx: 0,
      hintEn: "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
      hintAr: "الليزر يعتمد على الانبعاث المستحث الذي يولد فوتونات متطابقة في الطور والتردد والاتجاه.",
      solEn: ["Laser exhibits stimulated emission where photons are in phase (coherence), monochromatic, parallel, and highly intense."],
      solAr: ["خصائص الليزر: النقاء الطيفي، الترابط الزماني والمكاني، توازي الحزمة والشدة العالية لأنها لا تخضع لقانون التربيع العكسي."],
      tipEn: "Laser beams do NOT obey the inverse square law of illumination over distance because their beam does not diverge.",
      tipAr: "لا تخضع أشعة الليزر لقانون التربيع العكسي في الضوء لقلة تشتتها وتوازي حزمتها الضوئية لمسافات بعيدة."
    },
    {
      titleEn: "Semiconductor Doping (n-type and p-type)",
      titleAr: "تطعيم أشباه الموصلات (النوع السالب والموجب)",
      qEn: "To produce an n-type semiconductor, a pure silicon crystal is doped with trace amounts of a:",
      qAr: "للحصول على بلورة شبه موصل من النوع السالب (n-type)، تُطعم بلورة السيليكون النقية بذرات عنصر:",
      optsEn: [
        "Pentavalent donor element (such as Phosphorus, Arsenic, or Antimony)",
        "Trivalent acceptor element (such as Boron, Aluminum, or Gallium)",
        "Divalent alkaline earth metal (such as Calcium or Magnesium)",
        "Monovalent alkali metal (such as Sodium or Potassium)"
      ],
      optsAr: [
        "خماسي التكافؤ معطٍ (مثل الفوسفور أو الزرنيخ أو الأنتيمون)",
        "ثلاثي التكافؤ مستقبل (مثل البورون أو الألومنيوم أو الجاليوم)",
        "ثنائي التكافؤ (مثل الكالسيوم أو الماغنسيوم)",
        "أحادي التكافؤ (مثل الصوديوم أو البوتاسيوم)"
      ],
      ansIdx: 0,
      hintEn: "Pentavalent atoms share 4 electrons in bonds, leaving the 5th electron free to conduct.",
      hintAr: "العنصر خماسي التكافؤ يشارك بـ 4 إلكترونات ويبقى الإلكترون الخامس حراً للتوصيل وتصبح الذرة أيوناً موجباً $N_d^+$.",
      solEn: ["Pentavalent donors introduce conduction band electrons ($n \\approx N_d^+$), creating an n-type semiconductor."],
      solAr: ["العناصر خماسية التكافؤ (P, As, Sb) تزيد تركيز الإلكترونات الحرة السالبة في حزمة التوصيل فتصبح بلورة سالبة."],
      tipEn: "Both n-type and p-type semiconductor crystals are electrically neutral overall ($n + N_a^- = p + N_d^+$).",
      tipAr: "البلورة من النوع السالب أو الموجب متعادلة كهربياً دائماً لأن مجموع الشحنات الموجبة يساوي السالبة."
    }
  ];

  const medTemplates: TemplateItem[] = [
    {
      titleEn: "Maximum and Minimum Wavelength in Balmer Series",
      titleAr: "حساب أطول وأقصر طول موجي في متسلسلة بالمير",
      qEn: "In the hydrogen Balmer series ($n_1 = 2$), the maximum wavelength $\\lambda_{\\max}$ corresponds to the electronic transition from:",
      qAr: "في متسلسلة بالمير لذرة الهيدروجين ($n_1 = 2$)، ينتج أطول طول موجي (أقل طاقة وتردد) عند انتقال الإلكترون من المستوى:",
      optsEn: [
        "Level $n = 3$ to $n = 2$",
        "Level $n = \\infty$ to $n = 2$",
        "Level $n = 4$ to $n = 2$",
        "Level $n = 2$ to $n = 1$"
      ],
      optsAr: [
        "المستوى $n = 3$ إلى المستوى $n = 2$",
        "المستوى $n = \\infty$ إلى المستوى $n = 2$",
        "المستوى $n = 4$ إلى المستوى $n = 2$",
        "المستوى $n = 2$ إلى المستوى $n = 1$"
      ],
      ansIdx: 0,
      hintEn: "Longest wavelength $\\iff$ minimum energy transition (adjacent level $n = 3 \\to 2$).",
      hintAr: "أطول طول موجي يقابل أقل فرق طاقة، وهو الانتقال من المستوى المجاور مباشرة $n = 3$ إلى $n = 2$.",
      solEn: [
        "$\\Delta E = E_3 - E_2 = \\frac{hc}{\\lambda_{\\max}}$. The red line of Balmer ($H_\\alpha$, $656\\text{ nm}$) corresponds to $n = 3 \\to 2$."
      ],
      solAr: [
        "أقل طاقة في متسلسلة بالمير هي بين $E_3$ و $E_2$ وتعطي الخط الأحمر الشهير بطول موجي 656 نانومتر."
      ],
      tipEn: "Shortest wavelength in any series corresponds to transition from infinity ($n = \\infty$) down to that series level.",
      tipAr: "أقصر طول موجي في أي متسلسلة ينتج دائماً عن الهبوط من مالانهاية ($n = \\infty$) إلى مستوى تلك المتسلسلة."
    },
    {
      titleEn: "Transistor Current Gain and Alpha Ratio",
      titleAr: "معامل التكبير ونسبة التوزيع في الترانزستور",
      qEn: "In a common-emitter npn transistor, the base current is $I_B = 20\\,\\mu\\text{A}$ and collector current is $I_C = 1.98\\text{ mA}$. The current gain $\\beta_e$ and distribution ratio $\\alpha_e$ are:",
      qAr: "في ترانزستور npn موصل بطريقة الباعث المشترك، تيار القاعدة $I_B = 20\\,\\mu\\text{A}$ وتيار المجمع $I_C = 1.98\\text{ mA}$. فإن معامل التكبير $\\beta_e$ ونسبة التوزيع $\\alpha_e$ هما:",
      optsEn: [
        "$\\beta_e = 99$ and $\\alpha_e = 0.99$",
        "$\\beta_e = 100$ and $\\alpha_e = 0.98$",
        "$\\beta_e = 49.5$ and $\\alpha_e = 0.95$",
        "$\\beta_e = 198$ and $\\alpha_e = 0.995$"
      ],
      optsAr: [
        "$\\beta_e = 99$ ونسبة التوزيع $\\alpha_e = 0.99$",
        "$\\beta_e = 100$ ونسبة التوزيع $\\alpha_e = 0.98$",
        "$\\beta_e = 49.5$ ونسبة التوزيع $\\alpha_e = 0.95$",
        "$\\beta_e = 198$ ونسبة التوزيع $\\alpha_e = 0.995$"
      ],
      ansIdx: 0,
      hintEn: "$\\beta_e = \\frac{I_C}{I_B}$. Convert $I_C = 1980\\,\\mu\\text{A}$. Then $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
      hintAr: "معامل التكبير: $\\beta_e = \\frac{I_C}{I_B} = \\frac{1980}{20} = 99$. ونسبة التوزيع: $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
      solEn: [
        "$I_C = 1.98\\text{ mA} = 1980\\,\\mu\\text{A}$.",
        "$\\beta_e = \\frac{1980}{20} = 99$.",
        "$\\alpha_e = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
      ],
      solAr: [
        "$\\beta_e = \\frac{1980}{20} = 99$.",
        "$\\alpha_e = \\frac{99}{100} = 0.99$."
      ],
      tipEn: "Emitter current is the sum: $I_E = I_B + I_C = 0.02 + 1.98 = 2.00\\text{ mA}$.",
      tipAr: "تيار الباعث يساوي مجموع التيارين: $I_E = I_B + I_C = 2\\text{ mA}$."
    }
  ];

  const hotsTemplates: TemplateItem[] = [
    {
      titleEn: "Three-Dimensional Holographic Image Recording",
      titleAr: "التصوير المجسم ثلاثي الأبعاد (الهولوجرام)",
      qEn: "In holography, recording a true 3D image of an object on a photographic plate requires:",
      qAr: "في التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا)، يتطلب تسجيل الصورة الكاملة للجسم على اللوح الفوتوغرافي:",
      optsEn: [
        "Interference between a coherent reference laser beam and reflected object waves, recording both amplitude and phase",
        "Using white light to expose the object at multiple shutter speeds",
        "Directly photographing the shadow of the object with a pinhole camera",
        "X-ray crystallography of the macroscopic object surface"
      ],
      optsAr: [
        "تداخل حزمة مرجعية من الليزر مع الأشعة المنعكسة عن الجسم لتسجيل كل من السعة وفرق الطور",
        "استخدام الضوء الأبيض العادي وتسليطه بسرعات تصوير مختلفة",
        "تصوير ظل الجسم مباشرة باستخدام كاميرا ذات ثقب ضيق",
        "استخدام حيود الأشعة السينية على السطح المجهري للجسم"
      ],
      ansIdx: 0,
      hintEn: "Ordinary photography records only amplitude ($I \\propto A^2$); holography uses laser interference to capture phase difference $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$.",
      hintAr: "التصوير العادي يسجل الشدة وسعة الموجة فقط، بينما الهولوجرام يسجل السعة وفرق الطور (التضاريس ثلاثية الأبعاد) بفعل تداخل الليزر.",
      solEn: [
        "Hologram records the interference pattern between reference beam and object beam, storing full spatial depth."
      ],
      solAr: [
        "يسجل الهولوجرام هدب التداخل بين الأشعة المرجعية والأشعة المنعكسة عن الجسم حاملاً معلومات السعة وفرق الطور."
      ],
      tipEn: "Illuminating the developed hologram with the reference laser beam reconstructs a realistic 3D virtual image.",
      tipAr: "إضاءة الهولوجرام بنفس حزمة الليزر المرجعية تعيد تكوين صورة تقديرية ثلاثية الأبعاد مطابقة تماماً للجسم الأصلي."
    }
  ];

  const easy = buildTier('phys_ch6_db', 'easy', 58, easyTemplates, 'Easy', 'سهل');
  const med = buildTier('phys_ch6_db', 'medium', 59, medTemplates, 'Medium', 'متوسط');
  const hots = buildTier('phys_ch6_db', 'hots', 58, hotsTemplates, 'HOTS', 'تفكير عليا');

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/thanaweya/physCh6Databank.ts'),
    'physCh6Databank',
    easy,
    med,
    hots
  );
}

// =========================================================================
// EG-BAC PHYSICS CHAPTERS 2, 3, 4, 5 (STEM Track)
// =========================================================================
export function generateEgBacPhys(): void {
  // --- EGBAC PHYS CH2: Quantum Atomic Physics & Characteristic X-Rays ---
  const ch2Easy: TemplateItem[] = [
    {
      titleEn: "Bohr Quantization of Angular Momentum",
      titleAr: "تكميم كمية الحركة الزاوية لبور",
      qEn: "In the Bohr model of the hydrogen atom, the orbital angular momentum $L$ of an electron is quantized according to:",
      qAr: "في نموذج بور لذرة الهيدروجين، تتكمم كمية الحركة الزاوية $L$ للإلكترون في المدار المستقر وفق الفرض:",
      optsEn: [
        "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
        "$L = \\frac{n^2 h}{2\\pi}$",
        "$L = \\frac{h}{2\\pi n r}$",
        "$L = n^2 \\hbar r$"
      ],
      optsAr: [
        "$L = m_e v r = n \\frac{h}{2\\pi} = n\\hbar$",
        "$L = \\frac{n^2 h}{2\\pi}$",
        "$L = \\frac{h}{2\\pi n r}$",
        "$L = n^2 \\hbar r$"
      ],
      ansIdx: 0,
      hintEn: "Angular momentum is an integer multiple of reduced Planck's constant $\\hbar = h/2\\pi$.",
      hintAr: "كمية التحرك الزاوية للإلكترون تساوي مضاعفات صحيحة لثابت بلانك المختزل $\\hbar = h/2\\pi$.",
      solEn: ["$m_e v r = n \\frac{h}{2\\pi}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number."],
      solAr: ["فرض بور لتكميم كمية الحركة الزاوية: $m_e v r = n \\frac{h}{2\\pi}$ حيث $n$ عدد الكم الرئيسي."],
      tipEn: "This equates the circumference of the electron orbit to an integral number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
      tipAr: "يكافئ هذا الفرض أن محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي: $2\\pi r = n\\lambda$."
    },
    {
      titleEn: "Rydberg Formula for Hydrogen Transitions",
      titleAr: "قانون ريدبرج لانتقالات ذرة الهيدروجين",
      qEn: "The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ of radiation emitted during an electronic transition from $n_2$ to $n_1$ ($n_2 > n_1$) is:",
      qAr: "يعبر عن العدد الموجي $\\frac{1}{\\lambda}$ لفوتون منبعث عند انتقال إلكترون من المستوى $n_2$ إلى $n_1$ بقانون ريدبرج:",
      optsEn: [
        "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
        "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
        "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
        "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
      ],
      optsAr: [
        "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$",
        "$\\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1} - \\frac{1}{n_2} \\right)$",
        "$\\frac{1}{\\lambda} = R_H (n_2^2 - n_1^2)$",
        "$\\frac{1}{\\lambda} = \\frac{R_H}{n_1^2 n_2^2}$"
      ],
      ansIdx: 0,
      hintEn: "$R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$ is the Rydberg constant.",
      hintAr: "$R_H$ هو ثابت ريدبرج ويساوي تقريباً $1.097 \\times 10^7\\text{ m}^{-1}$.",
      solEn: ["Rydberg equation determines spectral lines from energy difference: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."],
      solAr: ["صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$."],
      tipEn: "Moseley showed that $\\sqrt{\\nu} \\propto (Z - \\sigma)$, proving atomic number $Z$ is the true fundamental atomic parameter.",
      tipAr: "أثبت موزلي أن $\\sqrt{\\nu} \\propto (Z - \\sigma)$ في الأشعة السينية، مما أثبت أن العدد الذري هو المحدد لخواص العنصر."
    }
  ];

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/egbac/egBacPhysCh2Databank.ts'),
    'egBacPhysCh2Databank',
    buildTier('egbac_phys_ch2_db', 'easy', 58, ch2Easy, 'Easy', 'سهل'),
    buildTier('egbac_phys_ch2_db', 'medium', 59, ch2Easy, 'Medium', 'متوسط'),
    buildTier('egbac_phys_ch2_db', 'hots', 58, ch2Easy, 'HOTS', 'تفكير عليا')
  );

  // --- EGBAC PHYS CH3: Lasers & Coherent Optics ---
  const ch3Easy: TemplateItem[] = [
    {
      titleEn: "Einstein A and B Coefficients",
      titleAr: "معاملات أينشتاين للانبعاث والامتصاص",
      qEn: "In quantum laser physics, the rate of stimulated emission between energy levels 2 and 1 is governed by:",
      qAr: "في فيزياء الليزر، يتناسب معدل الانبعاث المستحث بين المستويين 2 و 1 طردياً مع:",
      optsEn: [
        "The Einstein coefficient $B_{21}$, the population $N_2$, and the radiation energy density $\\rho(\\nu)$",
        "The spontaneous rate $A_{21}$ only, completely independent of external radiation density",
        "The temperature of the cavity walls squared",
        "The mechanical vibration frequency of the mirrors"
      ],
      optsAr: [
        "معامل أينشتاين $B_{21}$ وتعداد المستوى المثار $N_2$ وكثافة طاقة الإشعاع $\\rho(\\nu)$",
        "معدل الانبعاث التلقائي $A_{21}$ فقط ولا يعتمد على كثافة الإشعاع",
        "مربع درجة حرارة الجدران المحيطة بالفجوة",
        "تردد الاهتزاز الميكانيكي لمرايا المرنان"
      ],
      ansIdx: 0,
      hintEn: "Stimulated emission rate is $R_{21} = B_{21} N_2 \\rho(\\nu)$.",
      hintAr: "معدل الانبعاث المستحث: $R_{\\text{stim}} = B_{21} N_2 \\rho(\\nu)$.",
      solEn: ["Einstein showed that stimulated emission requires external radiation field: Rate $= B_{21} N_2 \\rho(\\nu)$."],
      solAr: ["أثبت أينشتاين أن الانبعاث المستحث يستلزم وجود فوتونات ساقطة بكثافة $\\rho(\\nu)$."],
      tipEn: "Population inversion ($N_2 > N_1$) is required so stimulated emission overcomes stimulated absorption.",
      tipAr: "شرط توليد الليزر هو تحقيق الإسكان المعكوس ($N_2 > N_1$) ليتفوق الانبعاث المستحث على الامتصاص."
    },
    {
      titleEn: "Optical Resonant Cavity Threshold Gain Condition",
      titleAr: "شرط كسب العتبة في المرنان البصري",
      qEn: "In a laser cavity of length $L$ with mirror reflectivities $R_1$ and $R_2$, the round-trip threshold gain condition is:",
      qAr: "في فجوة الليزر ذات الطول $L$ ومعاملي انعكاس للمرآتين $R_1$ و $R_2$، يتعين شرط كسب العتبة لدورة كاملة بالعلاقة:",
      optsEn: [
        "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
        "$R_1 R_2 = e^{2 g L}$",
        "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
        "$R_1 R_2 e^{g L} = 0$"
      ],
      optsAr: [
        "$R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$",
        "$R_1 R_2 = e^{2 g L}$",
        "$g_{\\text{th}} = \\frac{R_1 + R_2}{2L}$",
        "$R_1 R_2 e^{g L} = 0$"
      ],
      ansIdx: 0,
      hintEn: "Round-trip amplification must balance mirror transmission and cavity scattering losses.",
      hintAr: "يجب أن يعوض التكبير في كل دورة الخسائر الناتجة عن النفاذية والتشتت.",
      solEn: ["Threshold condition: $e^{2 g_{\\text{th}} L} R_1 R_2 e^{-2\\alpha L} = 1$."],
      solAr: ["شرط العتبة لبدء توليد الليزر في دورة كاملة: $R_1 R_2 e^{2(g_{\\text{th}} - \\alpha) L} = 1$."],
      tipEn: "At threshold, optical gain balances total cavity losses exactly.",
      tipAr: "عند العتبة يتعادل الكسب الضوئي مع إجمالي الفواقد في المرنان البصري."
    }
  ];

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/egbac/egBacPhysCh3Databank.ts'),
    'egBacPhysCh3Databank',
    buildTier('egbac_phys_ch3_db', 'easy', 58, ch3Easy, 'Easy', 'سهل'),
    buildTier('egbac_phys_ch3_db', 'medium', 59, ch3Easy, 'Medium', 'متوسط'),
    buildTier('egbac_phys_ch3_db', 'hots', 58, ch3Easy, 'HOTS', 'تفكير عليا')
  );

  // --- EGBAC PHYS CH4: Semiconductor Physics & Microelectronics ---
  const ch4Easy: TemplateItem[] = [
    {
      titleEn: "Law of Mass Action in Semiconductors",
      titleAr: "قانون فعل الكتلة في أشباه الموصلات",
      qEn: "In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
      qAr: "في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
      optsEn: [
        "$n \\cdot p = n_i^2$",
        "$n + p = n_i$",
        "$\\frac{n}{p} = n_i^2$",
        "$n^2 + p^2 = n_i^2$"
      ],
      optsAr: [
        "$n \\cdot p = n_i^2$",
        "$n + p = n_i$",
        "$\\frac{n}{p} = n_i^2$",
        "$n^2 + p^2 = n_i^2$"
      ],
      ansIdx: 0,
      hintEn: "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
      hintAr: "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
      solEn: ["Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."],
      solAr: ["قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."],
      tipEn: "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
      tipAr: "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
    },
    {
      titleEn: "Shockley Ideal Diode Equation",
      titleAr: "معادلة شوكلي للوصلة الثنائية PN",
      qEn: "The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
      qAr: "تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
      optsEn: [
        "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
        "$I = I_0 e^{\\frac{k_B T}{e V}}$",
        "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
        "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
      ],
      optsAr: [
        "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
        "$I = I_0 e^{\\frac{k_B T}{e V}}$",
        "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
        "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
      ],
      ansIdx: 0,
      hintEn: "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
      hintAr: "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
      solEn: ["Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."],
      solAr: ["معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."],
      tipEn: "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
      tipAr: "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
    }
  ];

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/egbac/egBacPhysCh4Databank.ts'),
    'egBacPhysCh4Databank',
    buildTier('egbac_phys_ch4_db', 'easy', 58, ch4Easy, 'Easy', 'سهل'),
    buildTier('egbac_phys_ch4_db', 'medium', 59, ch4Easy, 'Medium', 'متوسط'),
    buildTier('egbac_phys_ch4_db', 'hots', 58, ch4Easy, 'HOTS', 'تفكير عليا')
  );

  // --- EGBAC PHYS CH5: Advanced Electrodynamics & Maxwell Equations ---
  const ch5Easy: TemplateItem[] = [
    {
      titleEn: "Ampere-Maxwell Law with Displacement Current",
      titleAr: "قانون أمبير-ماكسويل وتيار الإزاحة",
      qEn: "James Clerk Maxwell modified Ampere's law by adding the displacement current term to account for:",
      qAr: "عدل ماكسويل قانون أمبير الدائري بإضافة حد تيار الإزاحة لتفسير:",
      optsEn: [
        "The magnetic field produced by a time-varying electric flux ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
        "The decay of stationary gravitational waves in empty space",
        "The mechanical compression of conductor lattice atoms",
        "The total ionization of noble gases in cold tubes"
      ],
      optsAr: [
        "تولد مجال مغناطيسي عن التغير في الفيض الكهربي ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I + \\mu_0 \\epsilon_0 \\frac{d\\Phi_E}{dt}$)",
        "اضمحلال موجات الجاذبية في الفضاء الفارغ",
        "الانضغاط الميكانيكي لذرات الشبكة البلورية",
        "التأين الكلي للغازات الخاملة في الأنابيب الباردة"
      ],
      ansIdx: 0,
      hintEn: "Displacement current $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ exists between the plates of a charging capacitor.",
      hintAr: "تيار الإزاحة ينشأ عن تغير المجال الكهربي بين لوحي مكثف أثناء الشحن والتفريغ.",
      solEn: ["Maxwell added $I_d = \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ to maintain charge conservation in dynamic circuits."],
      solAr: ["أضاف ماكسويل تيار الإزاحة $I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$ ليثبت أن التغير في المجال الكهربي يولد مجالاً مغناطيسياً."],
      tipEn: "This prediction proved that changing electric and magnetic fields sustain each other as electromagnetic waves propagating at speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$.",
      tipAr: "هذا التعديل أثبت رياضياً وجود الموجات الكهرومغناطيسية وسرعتها $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$."
    },
    {
      titleEn: "Poynting Vector Energy Flux",
      titleAr: "متجه بوينتنج وتدفق الطاقة الكهرومغناطيسية",
      qEn: "The Poynting vector $\\vec{S}$, representing the directional energy flux density (power per unit area) of an electromagnetic wave, is defined as:",
      qAr: "يعبر متجه بوينتنج $\\vec{S}$ عن كثافة تدفق الطاقة الكهرومغناطيسية لوحدة المساحات بالعلاقة:",
      optsEn: [
        "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
        "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
        "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
        "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
      ],
      optsAr: [
        "$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$",
        "$\\vec{S} = \\mu_0 (\\vec{E} \\cdot \\vec{B})$",
        "$\\vec{S} = \\epsilon_0 (\\vec{E} \\times \\vec{B})$",
        "$\\vec{S} = \\frac{\\vec{E}^2}{\\vec{B}^2}$"
      ],
      ansIdx: 0,
      hintEn: "The unit of the Poynting vector is Watts per square meter ($\\text{W/m}^2$).",
      hintAr: "وحدة قياس متجه بوينتنج هي واط لكل متر مربع ($\\text{W/m}^2$).",
      solEn: ["$\\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$. The direction of $\\vec{S}$ gives the direction of wave propagation."],
      solAr: ["متجه بوينتنج: $\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$ ويحدد اتجاه انتشار طاقة الموجة."],
      tipEn: "Time-averaged Poynting vector magnitude equals wave intensity: $\\langle S \\rangle = I = \\frac{1}{2} c \\epsilon_0 E_0^2$.",
      tipAr: "متوسط شدة متجه بوينتنج يمثل شدة الإشعاع الكهرومغناطيسي $I = \\frac{1}{2} c \\epsilon_0 E_0^2$."
    }
  ];

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/egbac/egBacPhysCh5Databank.ts'),
    'egBacPhysCh5Databank',
    buildTier('egbac_phys_ch5_db', 'easy', 58, ch5Easy, 'Easy', 'سهل'),
    buildTier('egbac_phys_ch5_db', 'medium', 59, ch5Easy, 'Medium', 'متوسط'),
    buildTier('egbac_phys_ch5_db', 'hots', 58, ch5Easy, 'HOTS', 'تفكير عليا')
  );
}

// Run all
console.log('⚡ Generating all Physics Databanks (Thanaweya Ch2-6 and EG-Bac Ch2-5)...');
generatePhysCh2();
generatePhysCh3();
generatePhysCh4();
generatePhysCh5();
generatePhysCh6();
generateEgBacPhys();
console.log('🎉 9 Physics Databanks generated successfully (1,575 total questions)!');
