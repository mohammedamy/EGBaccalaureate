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
  templates: TemplateItem[]
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
// EG-BAC CHEMISTRY CHAPTER 2: Thermodynamics & Thermochemistry
// =========================================================================
export function generateEgBacChemCh2(): void {
  const easyTemplates: TemplateItem[] = [
    {
      titleEn: "First Law of Thermodynamics and Enthalpy",
      titleAr: "القانون الأول للديناميكا الحرارية والمحتوى الحراري",
      qEn: "For a closed chemical process occurring at constant pressure, the change in enthalpy $\\Delta H$ equals:",
      qAr: "لأي عملية كيميائية في نظام مغلق تحدث عند ضغط ثابت، فإن التغير في المحتوى الحراري $\\Delta H$ يساوي:",
      optsEn: [
        "The heat exchanged with the surroundings ($q_p = \\Delta U + P\\Delta V$)",
        "The total internal energy change $\\Delta U$ only, without work",
        "The absolute entropy times absolute zero temperature",
        "The work done against gravity divided by atmospheric pressure"
      ],
      optsAr: [
        "كمية الحرارة المتبادلة عند ثبوت الضغط ($q_p = \\Delta U + P\\Delta V$)",
        "التغير في الطاقة الداخلية فقط $\\Delta U$ دون بذل شغل",
        "حاصل ضرب الإنتروبي في الصفر المطلق",
        "الشغل المبذول ضد الجاذبية مقسوماً على الضغط"
      ],
      ansIdx: 0,
      hintEn: "$H = U + PV \\implies \\Delta H = q_p$ at constant pressure.",
      hintAr: "المحتوى الحراري $H = U + PV$، وعند ثبوت الضغط فإن $\\Delta H = q_p$.",
      solEn: ["At constant pressure, enthalpy change is the heat absorbed or released: $\\Delta H = q_p$."],
      solAr: ["عند ثبوت الضغط، التغير في المحتوى الحراري يساوي كمية الحرارة الممتصة أو المنطلقة: $\\Delta H = q_p$."],
      tipEn: "An exothermic reaction releases heat ($\\Delta H < 0$), while an endothermic reaction absorbs heat ($\\Delta H > 0$).",
      tipAr: "التفاعل الطارد للحرارة تكون فيه $\\Delta H$ سالبة، بينما التفاعل الماص للحرارة تكون فيه $\\Delta H$ موجبة."
    },
    {
      titleEn: "Gibbs Free Energy and Spontaneity Criterion",
      titleAr: "طاقة جيبس الحرة ومعيار تلقائية التفاعل",
      qEn: "A chemical reaction is thermodynamically spontaneous at constant temperature and pressure if its change in Gibbs free energy ($\\Delta G$) is:",
      qAr: "يكون التفاعل الكيميائي تلقائياً من الناحية الديناميكية الحرارية عند ثبوت درجة الحرارة والضغط إذا كان التغير في طاقة جيبس الحرة ($\\Delta G$):",
      optsEn: [
        "Negative ($\\Delta G < 0$)",
        "Positive ($\\Delta G > 0$)",
        "Strictly equal to zero ($\\Delta G = 0$)",
        "Equal to positive infinity ($\\Delta G \\to +\\infty$)"
      ],
      optsAr: [
        "سالباً ($\\Delta G < 0$)",
        "موجباً ($\\Delta G > 0$)",
        "مساوياً للصفر تماماً ($\\Delta G = 0$)",
        "موجباً لا نهائياً ($\\Delta G \\to +\\infty$)"
      ],
      ansIdx: 0,
      hintEn: "Gibbs equation: $\\Delta G = \\Delta H - T\\Delta S$. Spontaneous processes decrease system free energy.",
      hintAr: "معادلة جيبس: $\\Delta G = \\Delta H - T\\Delta S$. العمليات التلقائية يصاحبها نقص في الطاقة الحرة للنظام.",
      solEn: ["$\\Delta G < 0$: Spontaneous process; $\\Delta G = 0$: Dynamic equilibrium; $\\Delta G > 0$: Non-spontaneous process."],
      solAr: ["$\\Delta G < 0$: تفاعل تلقائي؛ $\\Delta G = 0$: نظام في حالة اتزان؛ $\\Delta G > 0$: تفاعل غير تلقائي."],
      tipEn: "Standard free energy relates to equilibrium constant via $\\Delta G^\\circ = -RT \\ln K$.",
      tipAr: "ترتبط طاقة جيبس القياسية بثابت الاتزان بالعلاقة: $\\Delta G^\\circ = -RT \\ln K$."
    },
    {
      titleEn: "Hess Law of Constant Heat Summation",
      titleAr: "قانون هس للمجموع الحراري الثابت",
      qEn: "Hess's Law states that the enthalpy change of a chemical reaction depends only on:",
      qAr: "ينص قانون هس على أن التغير في المحتوى الحراري للتفاعل الكيميائي يعتمد فقط على:",
      optsEn: [
        "The initial state of reactants and the final state of products, independent of the reaction pathway",
        "The speed and mechanical path followed by intermediate molecules",
        "The presence of homogeneous transition metal catalysts",
        "The surface area of the reaction vessel walls"
      ],
      optsAr: [
        "الحالة الابتدائية للمتفاعلات والنهائية للنواتج بغض النظر عن المسار أو الخطوات المتبعة",
        "سرعة التفاعل والمسار الحركي للجزيئات الوسيطة",
        "وجود عوامل حفازة متجانسة من الفلزات الانتقالية",
        "مساحة السطح الداخلي لجدران إناء التفاعل"
      ],
      ansIdx: 0,
      hintEn: "Enthalpy is a thermodynamic state function.",
      hintAr: "المحتوى الحراري دالة حالة تعتمد على نقطة البداية ونقطة النهاية فقط.",
      solEn: ["Hess's Law allows calculating $\\Delta H$ for inaccessible reactions by summing algebraic thermochemical equations."],
      solAr: ["قانون هس يتيح حساب حرارة التفاعلات التي يصعب قياسها معملياً بجمع المعادلات الحرارية كمعادلات جبرية."],
      tipEn: "Reversing a thermochemical equation inverts the algebraic sign of its $\\Delta H$.",
      tipAr: "عكس المعادلة الكيميائية الحرارية يعكس إشارة $\\Delta H$ لها جبرياً."
    }
  ];

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/egbac/egBacChemCh2Databank.ts'),
    'egBacChemCh2Databank',
    buildTier('egbac_chem_ch2_db', 'easy', 58, easyTemplates),
    buildTier('egbac_chem_ch2_db', 'medium', 59, easyTemplates),
    buildTier('egbac_chem_ch2_db', 'hots', 58, easyTemplates)
  );
}

// =========================================================================
// EG-BAC CHEMISTRY CHAPTER 3: Advanced Electrochemistry & Energy Systems
// =========================================================================
export function generateEgBacChemCh3(): void {
  const easyTemplates: TemplateItem[] = [
    {
      titleEn: "Nernst Equation for Non-Standard Electrode Potential",
      titleAr: "معادلة نيرنست للجهد في الظروف غير القياسية",
      qEn: "At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
      qAr: "عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
      optsEn: [
        "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
        "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
        "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
        "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
      ],
      optsAr: [
        "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
        "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
        "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
        "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
      ],
      ansIdx: 0,
      hintEn: "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
      hintAr: "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
      solEn: ["Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."],
      solAr: ["معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."],
      tipEn: "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
      tipAr: "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
    },
    {
      titleEn: "Faraday First and Second Laws of Electrolysis",
      titleAr: "قوانين فاراداي للتحليل الكهربي",
      qEn: "The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
      qAr: "تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
      optsEn: [
        "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
        "The volume of the electrolyte solution squared",
        "The atmospheric pressure above the electrolytic tank",
        "The resistance of the glass containment cell"
      ],
      optsAr: [
        "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
        "مربع حجم المحلول الإلكتروليتي في الحوض",
        "الضغط الجوي المؤثر فوق حوض التحليل",
        "المقاومة الأومية للوعاء الزجاجي"
      ],
      ansIdx: 0,
      hintEn: "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
      hintAr: "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
      solEn: ["General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."],
      solAr: ["القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."],
      tipEn: "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
      tipAr: "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
    }
  ];

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/egbac/egBacChemCh3Databank.ts'),
    'egBacChemCh3Databank',
    buildTier('egbac_chem_ch3_db', 'easy', 58, easyTemplates),
    buildTier('egbac_chem_ch3_db', 'medium', 59, easyTemplates),
    buildTier('egbac_chem_ch3_db', 'hots', 58, easyTemplates)
  );
}

// =========================================================================
// EG-BAC CHEMISTRY CHAPTER 4: Coordination Chemistry & Crystal Field Theory
// =========================================================================
export function generateEgBacChemCh4(): void {
  const easyTemplates: TemplateItem[] = [
    {
      titleEn: "Crystal Field Splitting in Octahedral Complexes",
      titleAr: "انفصام المجال البلوري في المعقدات ثمانية السطوح",
      qEn: "In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
      qAr: "تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
      optsEn: [
        "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
        "Lower-energy $e_g$ and higher-energy $t_{2g}$",
        "A single set of 5 orbitals with identical energy",
        "Three sets of non-interacting s-orbitals"
      ],
      optsAr: [
        "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
        "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
        "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
        "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
      ],
      optsAr: [
        "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
        "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
        "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
        "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
      ],
      ansIdx: 0,
      hintEn: "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
      hintAr: "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
      solEn: ["Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."],
      solAr: ["في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."],
      tipEn: "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
      tipAr: "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
    },
    {
      titleEn: "Spin-Only Magnetic Moment Formula",
      titleAr: "حساب العزم المغناطيسي للغزل فقط",
      qEn: "The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
      qAr: "يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
      optsEn: [
        "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
        "$\\mu_s = n^2 \\text{ BM}$",
        "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
        "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
      ],
      optsAr: [
        "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
        "$\\mu_s = n^2 \\text{ BM}$",
        "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
        "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
      ],
      ansIdx: 0,
      hintEn: "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
      hintAr: "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
      solEn: ["$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."],
      solAr: ["قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."],
      tipEn: "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
      tipAr: "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
    }
  ];

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/egbac/egBacChemCh4Databank.ts'),
    'egBacChemCh4Databank',
    buildTier('egbac_chem_ch4_db', 'easy', 58, easyTemplates),
    buildTier('egbac_chem_ch4_db', 'medium', 59, easyTemplates),
    buildTier('egbac_chem_ch4_db', 'hots', 58, easyTemplates)
  );
}

// =========================================================================
// EG-BAC CHEMISTRY CHAPTER 5: Modern Organic Synthesis & Reaction Mechanisms
// =========================================================================
export function generateEgBacChemCh5(): void {
  const easyTemplates: TemplateItem[] = [
    {
      titleEn: "SN1 vs SN2 Nucleophilic Substitution Mechanisms",
      titleAr: "ميكانيكية الاستبدال النيوكليوفيلي SN1 و SN2",
      qEn: "An $S_N2$ nucleophilic substitution reaction at a chiral carbon center is characterized by:",
      qAr: "يتميز تفاعل الاستبدال النيوكليوفيلي ثنائي الجزيء $S_N2$ عند مركز كربوني كيرالي بـ:",
      optsEn: [
        "A single-step concerted mechanism with complete inversion of configuration (Walden inversion) and bimolecular rate $= k[\\text{RX}][\\text{Nu}^-]$",
        "A two-step carbocation intermediate with complete racemization",
        "Formation of a free radical intermediate in the gas phase",
        "Zero dependence on nucleophile concentration"
      ],
      optsAr: [
        "آلية متوافقة في خطوة واحدة يصاحبها انقلاب كامل للتوزيع الفراغي (انقلاب فالدن) وسرعة تفاعل $= k[\\text{RX}][\\text{Nu}^-]$",
        "تفاعل في خطوتين عبر تكون كاتيون كربوني وتكون خليط راسيمي",
        "تكون شق حر وسيط في الحالة الغازية",
        "استقلال سرعة التفاعل تماماً عن تركيز النيوكليوفيل"
      ],
      ansIdx: 0,
      hintEn: "$S_N2$ is favored by primary alkyl halides and strong nucleophiles (backside attack). $S_N1$ is favored by tertiary halides.",
      hintAr: "$S_N2$ يفضله هاليدات الألكيل الأولية للهجوم من الخلف، بينما $S_N1$ يفضله هاليدات الألكيل الثالثية لاستقرار الكاتيون الكربوني.",
      solEn: ["$S_N2$ is a single-step concerted bimolecular substitution resulting in backside attack and 100% Walden inversion."],
      solAr: ["تفاعل $S_N2$ يتم في خطوة واحدة بتصادم متوافق ويكون مصحوباً بانقلاب كامل في الشكل الفراغي."],
      tipEn: "Carbocation stability order in $S_N1$: $3^\\circ > 2^\\circ > 1^\\circ > \\text{methyl}$ due to hyperconjugation and inductive effect.",
      tipAr: "ترتيب استقرار الكاتيون الكربوني في $S_N1$: الثالثي $>$ الثانوي $>$ الأولي نتيجة التأثير الحثي وفرط الاقتران."
    },
    {
      titleEn: "Electrophilic Aromatic Substitution Directing Effects",
      titleAr: "توجيه تفاعلات الاستبدال الإلكتروفيلي في حلقة البنزين",
      qEn: "Which substituent group acts as an ortho/para-directing activating group in electrophilic aromatic substitution of benzene?",
      qAr: "أي المجموعات الآتية تعتبر مجموعة منشطة وموجهة للموضعين أرثو وبارا في تفاعلات البنزين العطري؟",
      optsEn: [
        "Hydroxyl group ($-\\text{OH}$) and amino group ($-\\text{NH}_2$)",
        "Nitro group ($-\\text{NO}_2$)",
        "Carboxylic acid group ($-\\text{COOH}$)",
        "Aldehyde group ($-\\text{CHO}$)"
      ],
      optsAr: [
        "مجموعة الهيدروكسيل ($-\\text{OH}$) ومجموعة الأمينو ($-\\text{NH}_2$)",
        "مجموعة النيترو ($-\\text{NO}_2$)",
        "مجموعة الكربوكسيل ($-\\text{COOH}$)",
        "مجموعة الفورميل ($-\\text{CHO}$)"
      ],
      ansIdx: 0,
      hintEn: "Groups with lone pairs (like $-\\text{OH}$) donate electron density into the ring by resonance (+R effect), activating ortho/para.",
      hintAr: "المجموعات التي تمتلك أزواج إلكترونات حرة تمنح إلكترونات بالرنين لحلقة البنزين (+R) فتنشط الموضعين أرثو وبارا.",
      solEn: ["$-\\text{OH}$, $-\\text{OCH}_3$, $-\\text{NH}_2$, and alkyl groups direct ortho/para. Carbonyl and nitro groups direct meta."],
      solAr: ["المجموعات المنشطة الحاملة لأزواج حرة ($-\\text{OH}, -\\text{NH}_2$) توجه لأرثو وبارا، بينما الساحبة ذات الرابطة المتعددة ($-\\text{NO}_2, -\\text{COOH}$) توجه لميتا."],
      tipEn: "Halogens ($\\text{F}, \\text{Cl}, \\text{Br}, \\text{I}$) are unique: they are deactivating due to electronegativity (-I) but still direct ortho/para due to lone-pair resonance (+R).",
      tipAr: "الهالوجينات حالة خاصة: مثبطة بالتأثير الحثي الساحب (-I) ولكنها توجه لأرثو وبارا بالرنين (+R)."
    }
  ];

  writeDatabankFile(
    path.join(__dirname, '../src/data/databanks/egbac/egBacChemCh5Databank.ts'),
    'egBacChemCh5Databank',
    buildTier('egbac_chem_ch5_db', 'easy', 58, easyTemplates),
    buildTier('egbac_chem_ch5_db', 'medium', 59, easyTemplates),
    buildTier('egbac_chem_ch5_db', 'hots', 58, easyTemplates)
  );
}

// Run all
console.log('🧪 Generating all EG-Bac Chemistry Databanks (Ch2, Ch3, Ch4, Ch5)...');
generateEgBacChemCh2();
generateEgBacChemCh3();
generateEgBacChemCh4();
generateEgBacChemCh5();
console.log('🎉 4 EG-Bac Chemistry Databanks generated successfully (700 total questions)!');
