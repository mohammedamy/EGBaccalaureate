import type { LabDiscipline, LabReportData } from './labReportService';
import { loadLabReportDraft, saveLabReportDraft } from './labReportService';

export type InquiryQuestionCategory =
  | 'hypothesis_variable'
  | 'graph_interpretation'
  | 'error_analysis'
  | 'cause_effect'
  | 'exam_challenge';

export interface PostLabQuestion {
  id: string;
  category: InquiryQuestionCategory;
  categoryTitleAr: string;
  categoryTitleEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
  points: number;
}

export interface LabAssessmentSet {
  discipline: LabDiscipline;
  labId: string;
  labTitleAr: string;
  labTitleEn: string;
  questions: PostLabQuestion[];
}

export interface PostLabEvaluationResult {
  totalPoints: number;
  earnedPoints: number;
  scorePercentage: number;
  passed: boolean;
  categoryScores: Record<string, { earned: number; total: number }>;
  answers: Record<string, number>;
  feedbackSummaryAr: string;
  feedbackSummaryEn: string;
}

export const LAB_ASSESSMENTS: Record<LabDiscipline, LabAssessmentSet> = {
  physics: {
    discipline: 'physics',
    labId: 'phys-exp-1',
    labTitleAr: 'قانون أوم للدائرة المغلقة والمقاومة الداخلية للمصدر',
    labTitleEn: "Ohm's Law for Closed Circuits & Internal Battery Resistance",
    questions: [
      {
        id: 'phys-q1',
        category: 'hypothesis_variable',
        categoryTitleAr: 'الفرضية وتحديد المتغيرات',
        categoryTitleEn: 'Hypothesis & Variable Identification',
        questionAr: 'في تجربة دراسة العلاقة بين فرق الجهد بين قطبي عمود كهربي (V) وشدة التيار المار بالدائرة (I)، ما هو المتغير المستقل الذي يتحكم فيه الطالب يدوياً؟',
        questionEn: 'In determining terminal voltage (V) versus current (I), what is the independent variable manipulated directly by the experimenter?',
        optionsAr: [
          'القوة الدافعة الكهربية للبطارية (V_B)',
          'المقاومة المتغيرة (الريوستات R_v)',
          'المقاومة الداخلية للعمود (r)',
          'فرق الجهد بين قطبي البطارية (V)'
        ],
        optionsEn: [
          'Electromotive force of battery (V_B)',
          'Variable rheostat resistance (R_v)',
          'Internal resistance (r)',
          'Terminal voltage (V)'
        ],
        correctIndex: 1,
        explanationAr: 'تغيير قيمة مقاومة الريوستات $R_v$ هو المتغير المستقل الذي يغير شدة التيار $I$ كمتغير تابع، مما يؤدي لتغير فرق الجهد بين القطبين طبقاً للعلاقة $V = V_B - I r$.',
        explanationEn: 'Adjusting the rheostat $R_v$ is the independent variable that controls current $I$, which consequently alters terminal voltage $V = V_B - Ir$.',
        points: 2,
      },
      {
        id: 'phys-q2',
        category: 'graph_interpretation',
        categoryTitleAr: 'تفسير الرسم البياني والميل',
        categoryTitleEn: 'Data Interpretation & Slope Analysis',
        questionAr: 'عند رسم العلاقة البيانية بين فرق الجهد (V) على المحور الرأسي وشدة التيار (I) على المحور الأفقي، ماذا يمثل ميل الخط المستقيم ونقطة تقاطعه مع المحور الرأسي؟',
        questionEn: 'In a plot of terminal voltage (V) on the vertical axis against current (I) on the horizontal axis, what do the slope and vertical intercept represent?',
        optionsAr: [
          'الميل = +r ، ونقطة التقاطع = صفر',
          'الميل = -r ، ونقطة التقاطع = V_B',
          'الميل = +V_B ، ونقطة التقاطع = r',
          'الميل = -1/r ، ونقطة التقاطع = I_max'
        ],
        optionsEn: [
          'Slope = +r, Vertical Intercept = 0',
          'Slope = -r, Vertical Intercept = V_B',
          'Slope = +V_B, Vertical Intercept = r',
          'Slope = -1/r, Vertical Intercept = I_max'
        ],
        correctIndex: 1,
        explanationAr: 'بمطابقة المعادلة $V = -r I + V_B$ مع معادلة الخط المستقيم $y = m x + c$، نجد أن الميل $m = -r$ (سالب المقاومة الداخلية) والجزء المقطوع $c = V_B$.',
        explanationEn: 'Comparing $V = -r I + V_B$ with linear equation $y = mx + c$, the slope $m = -r$ and vertical intercept $c = V_B$.',
        points: 2,
      },
      {
        id: 'phys-q3',
        category: 'error_analysis',
        categoryTitleAr: 'حساب الخطأ النسبي والتجريبي',
        categoryTitleEn: 'Mathematical Error Analysis',
        questionAr: 'إذا كانت القيمة النظرية للمقاومة الداخلية $r_{\\text{theoretical}} = 2.00\\ \\Omega$، وحسبت عملياً من ميل الخط البياني فوجدت $r_{\\text{exp}} = 2.15\\ \\Omega$، فما نسبة الخطأ المئوية التجريبية؟',
        questionEn: 'If theoretical internal resistance is $r_{\\text{theoretical}} = 2.00\\ \\Omega$ and experimental slope gave $r_{\\text{exp}} = 2.15\\ \\Omega$, what is the percentage error?',
        optionsAr: [
          '7.50%',
          '15.0%',
          '3.25%',
          '1.50%'
        ],
        optionsEn: [
          '7.50%',
          '15.0%',
          '3.25%',
          '1.50%'
        ],
        correctIndex: 0,
        explanationAr: 'طبقاً لقانون الخطأ المئوي: $\\% \\text{ Error} = \\frac{|2.00 - 2.15|}{2.00} \\times 100 = \\frac{0.15}{2.00} \\times 100 = 7.5\\%$.',
        explanationEn: 'Using formula: $\\% \\text{ Error} = \\frac{|2.00 - 2.15|}{2.00} \\times 100 = 7.50\\%$.',
        points: 2,
      },
      {
        id: 'phys-q4',
        category: 'cause_effect',
        categoryTitleAr: 'السببية والفيزياء التفسيرية',
        categoryTitleEn: 'Physical Cause-and-Effect Reasoning',
        questionAr: 'عند فتح المفتاح الكهربي الرئيسي بالدائرة ($I = 0$)، لماذا تصبح قراءة الفولتميتر بين قطبي البطارية مساوية تماماً لقوتها الدافعة الكهربية ($V = V_B$)؟',
        questionEn: 'When the main circuit switch is opened ($I = 0$), why does terminal voltage equal the battery EMF ($V = V_B$)?',
        optionsAr: [
          'لأن المقاومة الخارجية للدائرة تصبح صفراً',
          'لأن الهبوط في الجهد عبر المقاومة الداخلية ينعدم ($I r = 0$)',
          'لأن المقاومة الداخلية تصبح لانهائية',
          'لأن شدة التيار الكهربي تصبح قيمة عظمى'
        ],
        optionsEn: [
          'Because external resistance drops to zero',
          'Because internal voltage drop vanishes ($I r = 0$)',
          'Because internal resistance becomes infinite',
          'Because circuit current reaches maximum'
        ],
        correctIndex: 1,
        explanationAr: 'عند فتح الدائرة $I = 0$، فينعدم الجهد المفقود داخل المصدر $V_{\\text{lost}} = I r = 0$，وبالتالي $V = V_B - 0 = V_B$.',
        explanationEn: 'At open circuit $I = 0$, so internal voltage loss $Ir = 0$, making $V = V_B$.',
        points: 2,
      },
      {
        id: 'phys-q5',
        category: 'exam_challenge',
        categoryTitleAr: 'سؤال ربط امتحاني بمستوى الثانوية العامة',
        categoryTitleEn: 'Ministerial Thanawya Amma Exam Challenge',
        questionAr: 'عمود كهربي متصل مع ريوستات، عندما كانت شدة التيار $2\\text{ A}$ كان فرق الجهد بين القطبين $10\\text{ V}$، وعندما زاد التيار إلى $4\\text{ A}$ انخفض فرق الجهد إلى $6\\text{ V}$. احسب كلاً من القوة الدافعة $V_B$ والمقاومة الداخلية $r$:',
        questionEn: 'A battery connected to a rheostat gives $10\\text{ V}$ at $2\\text{ A}$, and $6\\text{ V}$ at $4\\text{ A}$. Calculate EMF $V_B$ and internal resistance $r$:',
        optionsAr: [
          'V_B = 14 V , r = 2.0 Ω',
          'V_B = 12 V , r = 1.0 Ω',
          'V_B = 16 V , r = 3.0 Ω',
          'V_B = 8 V , r = 0.5 Ω'
        ],
        optionsEn: [
          'V_B = 14 V, r = 2.0 Ω',
          'V_B = 12 V, r = 1.0 Ω',
          'V_B = 16 V, r = 3.0 Ω',
          'V_B = 8 V, r = 0.5 Ω'
        ],
        correctIndex: 0,
        explanationAr: 'من المعادلتين: $10 = V_B - 2r$ و $6 = V_B - 4r$. بالطرح: $4 = 2r \\Rightarrow r = 2\\ \\Omega$. بالتعويض: $V_B = 10 + 2(2) = 14\\text{ V}$.',
        explanationEn: 'From $10 = V_B - 2r$ and $6 = V_B - 4r$. Subtracting yields $4 = 2r \\implies r = 2\\ \\Omega$. Substituting gives $V_B = 14\\text{ V}$.',
        points: 2,
      },
    ],
  },

  chemistry: {
    discipline: 'chemistry',
    labId: 'chem-exp-1',
    labTitleAr: 'تعيين تركيز محلول حمض الهيدروكلوريك بمعايرة التعادل',
    labTitleEn: 'Acid-Base Neutralization Titration: Determining HCl Molarity',
    questions: [
      {
        id: 'chem-q1',
        category: 'hypothesis_variable',
        categoryTitleAr: 'الفرضية وتحديد المتغيرات',
        categoryTitleEn: 'Hypothesis & Variable Identification',
        questionAr: 'في تجربة معايرة التعادل، ما هو المحلول القياسي (Standard Solution) وما وظيفته الدقيقة؟',
        questionEn: 'In a neutralization titration, what is a standard solution and its exact function?',
        optionsAr: [
          'محلول مجهول التركيز يوضع دائماً في الدورق المخروطي',
          'محلول معلوم التركيز والحجم بدقة يستخدم لتعيين تركيز محلول آخر مجهول',
          'دليل كيميائي يتغير لونه عند نقطة التعادل',
          'ماء مقطر يستخدم لغسيل السحاحة'
        ],
        optionsEn: [
          'An unknown concentration solution placed in conical flask',
          'A solution of accurately known concentration used to determine unknown concentration',
          'A chemical indicator that changes color at equivalence',
          'Distilled water used for burette rinsing'
        ],
        correctIndex: 1,
        explanationAr: 'المحلول القياسي هو محلول معلوم التركيز بدقة فائقة (مثل $0.1\\text{ M } \\text{Na}_2\\text{CO}_3$ أو $\\text{NaOH}$) لمعايرة محلول آخر مجهول التركيز.',
        explanationEn: 'A standard solution has a precisely known concentration used to titrate and determine an unknown solution concentration.',
        points: 2,
      },
      {
        id: 'chem-q2',
        category: 'graph_interpretation',
        categoryTitleAr: 'تفسير منحنى المعايرة ونقطة التكافؤ',
        categoryTitleEn: 'Titration Curve & Equivalence Point',
        questionAr: 'عند معايرة حمض قوي ($HCl$) بقاعدة قوية ($NaOH$)، ما هي قيمة الأس الهيدروجيني ($pH$) المتوقعة عند نقطة التكافؤ التام في درجة حرارة $25^\\circ\\text{C}$؟',
        questionEn: 'When titrating strong acid ($HCl$) with strong base ($NaOH$), what is the expected pH at the exact equivalence point at $25^\\circ\\text{C}$?',
        optionsAr: [
          'pH = 3.5 (حمضي)',
          'pH = 7.0 (متعادل)',
          'pH = 9.8 (قاعدي)',
          'pH = 14.0'
        ],
        optionsEn: [
          'pH = 3.5 (Acidic)',
          'pH = 7.0 (Neutral)',
          'pH = 9.8 (Basic)',
          'pH = 14.0'
        ],
        correctIndex: 1,
        explanationAr: 'ناتج تعادل حمض قوي مع قاعدة قوية هو ملح متعادل التميؤ ($NaCl$) وماء، وبالتالي يكون تركيز $[H^+] = [OH^-] = 10^{-7}\\text{ M}$ و $pH = 7$.',
        explanationEn: 'Neutralizing a strong acid with a strong base produces neutral $NaCl$ salt and water, yielding $pH = 7.0$ at $25^\\circ\\text{C}$.',
        points: 2,
      },
      {
        id: 'chem-q3',
        category: 'error_analysis',
        categoryTitleAr: 'تحليل الأخطاء المعملية في القراءة',
        categoryTitleEn: 'Burette Reading & Systematic Error Analysis',
        questionAr: 'إذا بقيت فقاعة هواء في طرف السحاحة أسفل الصنبور أثناء المعايرة ونزلت أثناء سكب المحلول، كيف يؤثر ذلك على حجم المحلول المقروء وتركيز الحمض المحسوب؟',
        questionEn: 'If an air bubble remains in the burette tip and empties during titration, how does this affect recorded volume and calculated acid concentration?',
        optionsAr: [
          'حجم المحلول المقروء يكون أكبر من الحقيقي، والتركيز المحسوب يكون أكبر من الواقع',
          'حجم المحلول المقروء يكون أقل من الحقيقي، والتركيز المحسوب يكون أقل من الواقع',
          'لا يتأثر الحجم إطلاقاً لأن الهواء لا وزن له',
          'حجم المحلول المقروء يكون أكبر والتركيز المحسوب يكون صفراً'
        ],
        optionsEn: [
          'Recorded volume is higher than true volume, causing overestimated concentration',
          'Recorded volume is lower than true volume, causing underestimated concentration',
          'No effect because air has negligible mass',
          'Recorded volume is higher and concentration drops to zero'
        ],
        correctIndex: 0,
        explanationAr: 'خروج فقاعة الهواء يُحسب كجزء من الحجم المستهلك من السحاحة كخطأ نظامي موجب، فيظهر الحجم المستهلك أكبر من الحقيقي، مما يرفع التركيز المحسوب خطأً.',
        explanationEn: 'The displaced air bubble is counted as liquid volume delivered, causing an artificially higher recorded volume and overestimated concentration.',
        points: 2,
      },
      {
        id: 'chem-q4',
        category: 'cause_effect',
        categoryTitleAr: 'اختيار الدليل المناسب ونطاق تغير اللون',
        categoryTitleEn: 'Indicator Selection & Color Transition Logic',
        questionAr: 'لماذا يُفضل استخدام دليل الميثيل البرتقالي أو أزرق البروموثيمول ولا يُفضل الفينولفثالين عند معايرة قاعدة ضعيفة مع حمض قوي؟',
        questionEn: 'Why is methyl orange or bromothymol blue preferred over phenolphthalein when titrating a weak base with a strong acid?',
        optionsAr: [
          'لأن الملح الناتج يتميأ معطياً وسطاً حامضياً (pH < 7) يقع في نطاق تغير الميثيل البرتقالي',
          'لأن الفينولفثالين يتفاعل مع الحمض ويفسد التجربة',
          'لأن الميثيل البرتقالي لا يغير لونه أبداً في الأحماض',
          'لأن القاعدة الضعيفة لا تذوب في الماء'
        ],
        optionsEn: [
          'Because resulting salt hydrolyzes into an acidic medium (pH < 7) within methyl orange range',
          'Because phenolphthalein reacts destructively with acid',
          'Because methyl orange never changes color in acid',
          'Because weak base is insoluble in water'
        ],
        correctIndex: 0,
        explanationAr: 'الملح المشتق من قاعدة ضعيفة وحمض قوي (مثل $NH_4Cl$) يتميأ حمضياً ($pH < 7$)، ونطاق تغير لون الميثيل البرتقالي ($3.1 - 4.4$) يتطابق مع القفزة الحامضية.',
        explanationEn: 'Salt of weak base + strong acid hydrolyzes to give an acidic medium ($pH < 7$), matching the transition range of methyl orange ($3.1 - 4.4$).',
        points: 2,
      },
      {
        id: 'chem-q5',
        category: 'exam_challenge',
        categoryTitleAr: 'مسألة معايرة وزارية بالثانوية العامة',
        categoryTitleEn: 'Ministerial Stoichiometry Titration Calculation',
        questionAr: 'تعادل $25\\text{ mL}$ من حمض $HCl$ مع $20\\text{ mL}$ من محلول هيدروكسيد الصوديوم $NaOH$ تركيزه $0.1\\text{ M}$. احسب مولارية حمض $HCl$ المستهلك:',
        questionEn: '$25\\text{ mL}$ of $HCl$ neutralized $20\\text{ mL}$ of $0.1\\text{ M } NaOH$. Calculate the molarity of $HCl$:',
        optionsAr: [
          '0.08 M',
          '0.125 M',
          '0.05 M',
          '0.20 M'
        ],
        optionsEn: [
          '0.08 M',
          '0.125 M',
          '0.05 M',
          '0.20 M'
        ],
        correctIndex: 0,
        explanationAr: 'طبقاً للقانون: $\\frac{M_a \\times V_a}{n_a} = \\frac{M_b \\times V_b}{n_b}$. وبما أن $n_a = n_b = 1$: $M_a \\times 25 = 0.1 \\times 20 \\Rightarrow M_a = \\frac{2}{25} = 0.08\\text{ M}$.',
        explanationEn: 'Using $\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$, with $n_a = n_b = 1$: $M_a \\times 25 = 0.1 \\times 20 \\implies M_a = 0.08\\text{ M}$.',
        points: 2,
      },
    ],
  },

  biology: {
    discipline: 'biology',
    labId: 'bio-exp-1',
    labTitleAr: 'تضاعف الحمض النووي DNA والهجرة الكهربية الهلامية',
    labTitleEn: 'DNA Replication, Polymerase Kinetics & Gel Electrophoresis',
    questions: [
      {
        id: 'bio-q1',
        category: 'hypothesis_variable',
        categoryTitleAr: 'الفرضية وتحديد المتغيرات',
        categoryTitleEn: 'Hypothesis & Gel Electrophoresis Separation Principle',
        questionAr: 'في تقنية الهجرة الكهربية للهلام (Gel Electrophoresis) لفصل قطع DNA، ما هي الشحنة الكهربية لجزيئات DNA وإلى أي قطب كهربائي تهاجر؟',
        questionEn: 'In agarose gel electrophoresis, what is the net electrical charge of DNA molecules and toward which electrode do they migrate?',
        optionsAr: [
          'شحنة موجبة بسبب القواعد النيتروجينية، وتهاجر نحو المهبط السالب (Cathode)',
          'شحنة سالبة بسبب مجموعات الفوسفات، وتهاجر نحو المصعد الموجب (Anode)',
          'متعادلة الشحنة وتتحرك فقط بالجاذبية الأرضية',
          'شحنة متغيرة حسب نوع السكر الخماسي'
        ],
        optionsEn: [
          'Positive charge due to nitrogenous bases, migrating to negative cathode',
          'Negative charge due to phosphate groups, migrating to positive anode',
          'Neutral charge, moving purely by gravity',
          'Variable charge depending on pentose sugar'
        ],
        correctIndex: 1,
        explanationAr: 'مجموعات الفوسفات ($PO_4^{3-}$) تمنح هيكل سكر-فوسفات شحنة سالبة دائمة عند درجة حموضة الوسط، مما يجعل قطع DNA تهاجر نحو المصعد الموجب ($+$).',
        explanationEn: 'Phosphate groups ($PO_4^{3-}$) impart a constant negative charge across the backbone, driving migration toward the positive anode ($+$).',
        points: 2,
      },
      {
        id: 'bio-q2',
        category: 'graph_interpretation',
        categoryTitleAr: 'قراءة نتائج الهلام وعلاقة الحجم بالسرعة',
        categoryTitleEn: 'Gel Band Interpretation & Molecular Weight Relationship',
        questionAr: 'عند تشغيل تيار كهربي ثابت لفترة زمنية محددة، أي قطع DNA تهاجر لمسافة أطول داخل مسام هلام الأجاروز؟',
        questionEn: 'Under uniform voltage and time, which DNA fragments travel the greatest distance through the agarose gel pores?',
        optionsAr: [
          'القطع الأكبر حجماً والأطول لأن وزنها الجزيئي يدفعها للأمام',
          'القطع الأصغر حجماً والأقصر لأنها تعاني مقاومة احتكاك أقل داخل المسام',
          'جميع القطع تهاجر لنفس المسافة بغض النظر عن طولها',
          'القطع التي تحتوي على نسبة أعلى من الثايمين فقط'
        ],
        optionsEn: [
          'Larger, longer fragments propelled by higher mass',
          'Smaller, shorter fragments experiencing less frictional resistance through pores',
          'All fragments travel identical distances regardless of length',
          'Only fragments with high thymine content'
        ],
        correctIndex: 1,
        explanationAr: 'مسام هلام الأجاروز تعمل كغربال جزيئي؛ فتعبر القطع الأصغر حجماً (أقل عدداً من القواعد النيتروجينية bp) بسهولة وسرعة أكبر قاطعة مسافة أطول.',
        explanationEn: 'Agarose pores act as a molecular sieve; smaller fragments (fewer base pairs) face lower hydrodynamic resistance and migrate farther.',
        points: 2,
      },
      {
        id: 'bio-q3',
        category: 'error_analysis',
        categoryTitleAr: 'تحليل شروط التضاعف وأخطاء التفاعل',
        categoryTitleEn: 'Polymerase Buffer & Temperature Error Analysis',
        questionAr: 'في تجربة تضاعف DNA في أنبوب الاختبار، إذا نسي الباحث إضافة أيونات المغنيسيوم ($Mg^{2+}$) إلى محلول التفاعل، ماذا يحدث للتضاعف؟',
        questionEn: 'In an in vitro DNA replication assay, what happens if magnesium ions ($Mg^{2+}$) are omitted from the reaction mixture?',
        optionsAr: [
          'يتوقف التضاعف تماماً لأن إنزيم البلمرة يحتاج $Mg^{2+}$ كعامل مساعد ضروري لنشاطه',
          'يتضاعف DNA بسرعة مضاعفة',
          'يحدث التضاعف بدون الحاجة إلى نيوكليوتيدات',
          'تتكسر الروابط التساهمية في هيكل السكر فوسفات تلقائياً'
        ],
        optionsEn: [
          'Replication ceases completely because DNA polymerase strictly requires $Mg^{2+}$ cofactor',
          'Replication proceeds at double speed',
          'Replication occurs without requiring deoxynucleotides',
          'Covalent phosphodiester bonds spontaneously break'
        ],
        correctIndex: 0,
        explanationAr: 'أيونات $Mg^{2+}$ عامل مساعد حيوي (Cofactor) يحفز التموضع الفراغي لجزيئات $dNTPs$ في الموقع النشط لإنزيم بلمرة DNA؛ وبدونه يفقد الإنزيم فاعليته تماماً.',
        explanationEn: 'Divalent magnesium ($Mg^{2+}$) ions are essential cofactors coordinating dNTPs and active site residues in DNA polymerase.',
        points: 2,
      },
      {
        id: 'bio-q4',
        category: 'cause_effect',
        categoryTitleAr: 'السببية البيولوجية لاتجاه بناء الشريط الجديد',
        categoryTitleEn: 'Biological Mechanism of Replication Directionality',
        questionAr: 'لماذا يبني إنزيم بلمرة DNA دائماً الشريط الجديد في الاتجاه من $5\'$ إلى $3\'$ فقط؟',
        questionEn: 'Why does DNA polymerase synthesize new strands strictly in the $5\' \\to 3\'$ direction?',
        optionsAr: [
          'لأنه يضيف النيوكليوتيدة الجديدة إلى مجموعة الهيدروكسيل الحرة ($3\'-OH$) للنيوكليوتيدة السابقة',
          'لأن القواعد النيتروجينية ترتبط بروابط هيدروجينية في اتجاه واحد فقط',
          'لأن إنزيم اللولب يتحرك فقط في الاتجاه المعاكس',
          'لأن السكر في DNA هو ريبوز كامل الأكسجين'
        ],
        optionsEn: [
          'Because it adds incoming nucleotides exclusively to the free $3\'-OH$ hydroxyl group',
          'Because nitrogenous bases form hydrogen bonds in one direction only',
          'Because helicase only moves backward',
          'Because DNA contains ribose sugar'
        ],
        correctIndex: 0,
        explanationAr: 'إنزيم البلمرة يحتاج لمجموعة هيدروكسيل حرة عند ذرة الكربون $3\'$ ($3\'-OH$) لربط مجموعة الفوسفات $5\'$ للنيوكليوتيدة القادمة برابطة تساهمية فوسفوداي إستر.',
        explanationEn: 'DNA polymerase requires a free $3\'-OH$ nucleophile to attack the $\\alpha$-phosphate of the incoming dNTP, restricting synthesis to $5\' \\to 3\'$.',
        points: 2,
      },
      {
        id: 'bio-q5',
        category: 'exam_challenge',
        categoryTitleAr: 'سؤال وزاري في حساب نسب القواعد النيتروجينية',
        categoryTitleEn: 'Ministerial Thanawya Amma Chargaff Rule Problem',
        questionAr: 'قطعة من جزيء DNA مزدوج اللولب تحتوي على $1200$ نيوكليوتيدة، فإذا كانت نسبة الأدينين ($A$) تمثل $20\\%$، فما هو عدد نيوكليوتيدات السيتوزين ($C$) في هذه القطعة؟',
        questionEn: 'A double-stranded DNA molecule contains $1200$ nucleotides. If adenine ($A$) accounts for $20\\%$, how many cytosine ($C$) nucleotides are present?',
        optionsAr: [
          '360 نيوكليوتيدة',
          '240 نيوكليوتيدة',
          '480 نيوكليوتيدة',
          '180 نيوكليوتيدة'
        ],
        optionsEn: [
          '360 nucleotides',
          '240 nucleotides',
          '480 nucleotides',
          '180 nucleotides'
        ],
        correctIndex: 0,
        explanationAr: 'طبقاً لقاعدة تشارجاف: $\%A = \%T = 20\\%$، إذن $\%A + \%T = 40\\%$. المتبقي لـ $\%G + \%C = 60\\%$. إذن $\%C = 30\\%$. عدد نيوكليوتيدات $C = 1200 \\times 0.30 = 360$.',
        explanationEn: 'By Chargaff rule: $A = T = 20\\%$, sum = $40\\%$. Thus $G + C = 60\\%$, making $C = 30\\%$. Count of $C = 1200 \\times 0.30 = 360$.',
        points: 2,
      },
    ],
  },

  math: {
    discipline: 'math',
    labId: 'math-exp-1',
    labTitleAr: 'المحاكاة الهندسية للقطوع المخروطية ومماس المنحنيات',
    labTitleEn: 'Conic Sections Geometric Simulation & Curve Tangent Calculus',
    questions: [
      {
        id: 'math-q1',
        category: 'hypothesis_variable',
        categoryTitleAr: 'الفرضية وتحديد المتغيرات',
        categoryTitleEn: 'Hypothesis & Conic Eccentricity Classification',
        questionAr: 'في دراسة القطوع المخروطية باستخدام نسبة البعد عن البؤرة إلى البعد عن الدليل (الاختلاف المركزي $e$)، ما نوع القطع عندما يكون $e = 1$؟',
        questionEn: 'In conic section geometry defined by focus-to-directrix ratio (eccentricity $e$), what conic is formed when $e = 1$?',
        optionsAr: [
          'قطع مكافئ (Parabola)',
          'قطع ناقص (Ellipse)',
          'قطع زائد (Hyperbola)',
          'دائرة (Circle)'
        ],
        optionsEn: [
          'Parabola',
          'Ellipse',
          'Hyperbola',
          'Circle'
        ],
        correctIndex: 0,
        explanationAr: 'عندما يكون الاختلاف المركزي $e = 1$، تكون المسافة إلى البؤرة مساوية للمسافة إلى الدليل، وهو التعريف الرياضي الدقيق للقطع المكافئ.',
        explanationEn: 'When eccentricity $e = 1$, distance to focus equals distance to directrix, defining a parabola.',
        points: 2,
      },
      {
        id: 'math-q2',
        category: 'graph_interpretation',
        categoryTitleAr: 'تفسير الرسم والاشتقاق الهندسي',
        categoryTitleEn: 'Geometric Slope Interpretation & Tangent Line',
        questionAr: 'ما هو التفسير الهندسي الدقيق للمشتقة الأولى للدالة $f\'(x_0)$ عند النقطة $(x_0, f(x_0))$ على منحنى الدالة؟',
        questionEn: 'What is the precise geometric interpretation of the first derivative $f\'(x_0)$ at point $(x_0, f(x_0))$ on a curve?',
        optionsAr: [
          'مساحة المنطقة المحددة بالمنحنى ومحور السينات',
          'طول القوس المنحني بين نقطتين',
          'ميل المماس للمنحنى عند تلك النقطة ($m = \\tan \\theta$)',
          'نصف قطر انحناء المنحنى'
        ],
        optionsEn: [
          'Area under curve and x-axis',
          'Arc length between two points',
          'Slope of tangent line to curve at that point ($m = \\tan \\theta$)',
          'Radius of curvature'
        ],
        correctIndex: 2,
        explanationAr: 'المشتقة الأولى للدالة عند نقطة تمثل هندسياً ميل الخط المستقيم المماس لمنحنى الدالة عند تلك النقطة $m = \\frac{dy}{dx} = \\tan \\theta$.',
        explanationEn: 'The first derivative at a point geometrically equals the slope of the tangent line to the curve $m = \\frac{dy}{dx} = \\tan \\theta$.',
        points: 2,
      },
      {
        id: 'math-q3',
        category: 'error_analysis',
        categoryTitleAr: 'التقريب الخطي وحساب الخطأ العددي',
        categoryTitleEn: 'Linear Approximation & Differential Error Bounds',
        questionAr: 'باستخدام التفاضلات والتقريب الخطي للدالة $f(x) = \\sqrt{x}$ عند $x = 100$، احسب القيمة التقريبية لجذر $\\sqrt{101}$ والخطأ مقارنة بالحاسبة:',
        questionEn: 'Using differentials for $f(x) = \\sqrt{x}$ at $x = 100$, calculate linear approximation for $\\sqrt{101}$:',
        optionsAr: [
          '10.05 (خطأ < 0.0002)',
          '10.10',
          '10.50',
          '10.01'
        ],
        optionsEn: [
          '10.05 (error < 0.0002)',
          '10.10',
          '10.50',
          '10.01'
        ],
        correctIndex: 0,
        explanationAr: '$f(100) = 10$, $f\'(100) = \\frac{1}{2\\sqrt{100}} = \\frac{1}{20} = 0.05$. إذن $\\sqrt{101} \\approx 10 + 0.05(1) = 10.05$ (القيمة الدقيقة $10.04987$).',
        explanationEn: 'Linear approximation: $f(x + \\Delta x) \\approx f(x) + f\'(x)\\Delta x = 10 + 0.05(1) = 10.05$.',
        points: 2,
      },
      {
        id: 'math-q4',
        category: 'cause_effect',
        categoryTitleAr: 'السببية الرياضية وشروط النقط الحرجة',
        categoryTitleEn: 'Mathematical Causality: Extrema & Second Derivative Test',
        questionAr: 'إذا كانت النقطة $(c, f(c))$ نقطة حرجة للدالة $f(x)$ وكان $f\'(c) = 0$ و $f\'\'(c) < 0$، فماذا نستنتج عن سلوك الدالة عند هذه النقطة؟',
        questionEn: 'If point $(c, f(c))$ is critical with $f\'(c) = 0$ and $f\'\'(c) < 0$, what conclusion follows from the second derivative test?',
        optionsAr: [
          'المنحنى محدب لأسفل والدالة لها نهاية صغرى محلية',
          'المنحنى محدب لأعلى والدالة لها نهاية عظمى محلية',
          'النقطة هي نقطة انقلاب حتمية',
          'الدالة غير متصلة عند النقطة'
        ],
        optionsEn: [
          'Curve is concave upward and has local minimum',
          'Curve is concave downward and has local maximum',
          'The point is definitely an inflection point',
          'Function is discontinuous at that point'
        ],
        correctIndex: 1,
        explanationAr: 'عندما تكون $f\'\'(c) < 0$ يكون المنحنى محدباً لأعلى (Concave Downward)، وتكون نقطة التماس الأفقية قمة تمثل نهاية عظمى محلية للدالة.',
        explanationEn: 'When $f\'\'(c) < 0$, the curve is concave downward, proving the critical point is a local maximum.',
        points: 2,
      },
      {
        id: 'math-q5',
        category: 'exam_challenge',
        categoryTitleAr: 'سؤال وزاري في معادلة المماس والعمودي',
        categoryTitleEn: 'Ministerial Thanawya Amma Tangent & Normal Problem',
        questionAr: 'أوجد معادلة المماس لمنحنى الدالة $y = x^2 - 4x + 5$ عند النقطة $(1, 2)$ الواقعة عليه:',
        questionEn: 'Find the tangent line equation to $y = x^2 - 4x + 5$ at point $(1, 2)$:',
        optionsAr: [
          '2x + y - 4 = 0',
          'x - 2y + 3 = 0',
          '2x - y = 0',
          'x + y - 3 = 0'
        ],
        optionsEn: [
          '2x + y - 4 = 0',
          'x - 2y + 3 = 0',
          '2x - y = 0',
          'x + y - 3 = 0'
        ],
        correctIndex: 0,
        explanationAr: 'المشتقة: $y\' = 2x - 4$. عند $x = 1$: $m = 2(1) - 4 = -2$. معادلة المماس: $y - 2 = -2(x - 1) \\Rightarrow y - 2 = -2x + 2 \\Rightarrow 2x + y - 4 = 0$.',
        explanationEn: 'Derivative $y\' = 2x - 4$. At $x = 1$, $m = -2$. Tangent line: $y - 2 = -2(x - 1) \\implies 2x + y - 4 = 0$.',
        points: 2,
      },
    ],
  },
};

/**
 * Returns the assessment question set for a given discipline.
 */
export function getAssessmentForDiscipline(discipline: LabDiscipline): LabAssessmentSet {
  return LAB_ASSESSMENTS[discipline] || LAB_ASSESSMENTS.physics;
}

/**
 * Evaluates student answers against the assessment set.
 */
export function evaluatePostLabAssessment(
  questions: PostLabQuestion[],
  answers: Record<string, number>
): PostLabEvaluationResult {
  let totalPoints = 0;
  let earnedPoints = 0;
  const categoryScores: Record<string, { earned: number; total: number }> = {};

  questions.forEach((q) => {
    totalPoints += q.points;
    const cat = q.category;
    if (!categoryScores[cat]) {
      categoryScores[cat] = { earned: 0, total: 0 };
    }
    categoryScores[cat].total += q.points;

    if (answers[q.id] === q.correctIndex) {
      earnedPoints += q.points;
      categoryScores[cat].earned += q.points;
    }
  });

  const scorePercentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
  const passed = scorePercentage >= 60;

  let feedbackSummaryAr = '';
  let feedbackSummaryEn = '';

  if (scorePercentage >= 80) {
    feedbackSummaryAr = 'أداء علمي استثنائي! أظهرت فهماً دقيقاً للتحليل الرياضي والفرضيات المعملية وتطبيقات الثانوية العامة.';
    feedbackSummaryEn = 'Outstanding scientific inquiry! Excellent mastery of hypotheses, error analysis, and ministerial exam concepts.';
  } else if (scorePercentage >= 60) {
    feedbackSummaryAr = 'أداء جيد جداً ومستوى واعد. نوصي بمراجعة جزئيات حساب الخطأ التجريبي والتعليل الفيزيائي لتعزيز التمكن.';
    feedbackSummaryEn = 'Good performance. We recommend revisiting error bounds and physical causality to solidify mastery.';
  } else {
    feedbackSummaryAr = 'تحتاج لإعادة مراجعة خطوات التجربة وقراءة المنحنيات البيانية بدقة قبل اعتماد التقرير المعملي النهائي.';
    feedbackSummaryEn = 'Needs revision of experiment steps and graph slope interpretation before final report submission.';
  }

  return {
    totalPoints,
    earnedPoints,
    scorePercentage,
    passed,
    categoryScores,
    answers,
    feedbackSummaryAr,
    feedbackSummaryEn,
  };
}

/**
 * Injects assessment score into saved LabReportData draft.
 * Updates the evaluation rubric item and appends a verified assessment certificate note.
 */
export function injectAssessmentIntoLabReport(
  experimentId: string,
  result: PostLabEvaluationResult
): LabReportData {
  const report = loadLabReportDraft(experimentId);

  // Update rubric criteria marks proportionally
  const updatedCriteria = report.rubricCriteria.map((c) => {
    if (c.id === 'rubric-5') {
      // Conclusion and Error Analysis criterion
      const earned = Math.round((result.scorePercentage / 100) * c.maxMarks * 10) / 10;
      return {
        ...c,
        earnedMarks: earned,
        descriptionAr: `${c.descriptionAr} (تم التقييم الآلي لاختبار التجربة بنسبة ${result.scorePercentage}%)`,
      };
    }
    return c;
  });

  const updatedReport: LabReportData = {
    ...report,
    rubricCriteria: updatedCriteria,
    errorAnalysisAr: report.errorAnalysisAr
      ? `${report.errorAnalysisAr}\n\n[نتيجة الاختبار العلمي البعدي: ${result.scorePercentage}% - ${result.earnedPoints}/${result.totalPoints} درجة]`
      : `[نتيجة الاختبار العلمي البعدي: ${result.scorePercentage}% - ${result.earnedPoints}/${result.totalPoints} درجة]`,
  };

  saveLabReportDraft(updatedReport);
  return updatedReport;
}
