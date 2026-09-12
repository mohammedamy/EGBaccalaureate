import React, { useState } from 'react';
import type { Language } from '../../i18n/translations';
import {
  X,
  FileSpreadsheet,
  CheckCircle,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Printer,
  Sparkles,
  Award,
  RotateCcw,
  BookOpen,
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  activeLab: 'math' | 'physics' | 'chemistry' | 'biology';
}

interface GuidedExperiment {
  id: string;
  lab: 'math' | 'physics' | 'chemistry' | 'biology';
  titleEn: string;
  titleAr: string;
  gradeEn: string;
  gradeAr: string;
  hypothesisEn: string;
  hypothesisAr: string;
  apparatusEn: string[];
  apparatusAr: string[];
  stepsEn: string[];
  stepsAr: string[];
  formula: string;
  expectedConclusionEn: string;
  expectedConclusionAr: string;
}

const EXPERIMENTS: GuidedExperiment[] = [
  // Physics
  {
    id: 'phys-exp-1',
    lab: 'physics',
    titleEn: 'Verification of Closed-Circuit Ohm Law & Internal Resistance (r)',
    titleAr: 'تحقيق قانون أوم للدائرة المغلقة وتعيين المقاومة الداخلية للعمود (r)',
    gradeEn: 'Grade 12 Physics - Electricity & Circuits',
    gradeAr: 'الصف الثالث الثانوي - التيار الكهربي وقانون أوم للدائرة المغلقة',
    hypothesisEn: 'Terminal voltage V decreases linearly with current I due to internal potential drop Ir: V = VB - Ir.',
    hypothesisAr: 'يهبط فرق الجهد بين قطبي المصدر (V) خطياً مع زيادة شدة التيار (I) بمقدار الهبوط في الجهد عبر المقاومة الداخلية (Ir).',
    apparatusEn: ['DC Battery source with EMF VB', 'Digital Voltmeter across battery terminals', 'Ammeter in series', 'Variable load resistor Rheostat', 'Connecting leads'],
    apparatusAr: ['بطارية ذات قوة دافعة VB ومقاومة داخلية r', 'فولتميتر رقمي بين طرفي البطارية', 'أميتر موصل على التوالي', 'ريوستات منزلق (مقاومة متغيرة)', 'أسلاك توصيل منعدمة المقاومة'],
    stepsEn: [
      'Set battery EMF VB to 12 V and internal resistance r to 1.0 Ohm.',
      'Vary external resistance Req across 5 different values (2, 4, 6, 8, 10 Ohms).',
      'Record circuit current I and terminal voltage V in the observation table.',
      'Plot V on the vertical axis against I on the horizontal axis.',
      'Calculate the slope of the line (-r) and the vertical intercept (VB).',
    ],
    stepsAr: [
      'اضبط القوة الدافعة للبطارية VB على ١٢ فولت والمقاومة الداخلية r على ١٫٠ أوم.',
      'غيّر المقاومة الخارجية Req عبر ٥ قيم مختلفة (٢، ٤، ٦، ٨، ١٠ أوم).',
      'سجّل قراءة شدة التيار I وفرق الجهد بين طرفي العمود V في جدول النتائج.',
      'مثّل بيانياً العلاقة بين V على المحور الرأسي و I على المحور الأفقي.',
      'احسب ميل الخط المستقيم (-r) والجزء المقطوع من المحور الرأسي (VB).',
    ],
    formula: 'V = V_B - I \\cdot r \\implies \\text{Slope} = -r, \\quad V_{\\text{intercept}} = V_B',
    expectedConclusionEn: 'The vertical intercept gives EMF VB = 12.0 V, and the slope confirms internal resistance r = 1.0 Ohm with 100% precision.',
    expectedConclusionAr: 'يؤكد الجزء المقطوع من المحور الصادي القوة الدافعة VB = ١٢ فولت، ويؤكد الميل المقاومة الداخلية r = ١٫٠ أوم بدقة تامة.',
  },
  {
    id: 'phys-exp-2',
    lab: 'physics',
    titleEn: 'Photoelectric Effect & Planck Constant Determination',
    titleAr: 'دراسة الظاهرة الكهروضوئية وتعيين ثابت بلانك ودالة الشغل',
    gradeEn: 'Grade 12 Physics - Modern Physics & Quantum Photons',
    gradeAr: 'الصف الثالث الثانوي - ازدواجية الموجة والجسيم وفيزياء الكم',
    hypothesisEn: 'Stopping potential Vs is linearly proportional to frequency nu: e*Vs = h*nu - Phi.',
    hypothesisAr: 'يتناسب جهد الإيقاف Vs طردياً مع تردد الفوتون الساقط nu: e*Vs = h*nu - دالة الشغل.',
    apparatusEn: ['Photoelectric vacuum cell with Cesium cathode (Phi = 2.14 eV)', 'Monochromatic tunable light source', 'Retarding voltage potentiometer', 'Nanoammeter'],
    apparatusAr: ['خلية كهروضوئية مفرغة بمهبط من السيزيوم (Phi = 2.14 eV)', 'مصدر ضوئي أحادي اللون متغير الطول الموجي', 'مجزئ جهد عكسي لتطبيق جهد الإيقاف', 'نانوأميتر حساس لقياس تيار الانبعاث'],
    stepsEn: [
      'Select Cesium cathode with work function Phi = 2.14 eV.',
      'Illuminate cathode with light at 350 nm, 400 nm, 450 nm, and 500 nm.',
      'Increase negative retarding potential Vs until photocurrent drops exactly to zero.',
      'Record stopping potential Vs for each frequency nu.',
      'Plot Vs versus nu to find slope h/e and frequency threshold nu_0.',
    ],
    stepsAr: [
      'اختر مهبط السيزيوم ذو دالة شغل ٢٫١٤ إلكترون-فولت.',
      'وجّه حزمة ضوئية بأطوال موجية ٣٥٠، ٤٠٠، ٤٥٠، و ٥٠٠ نانومتر.',
      'زد جهد الإيقاف العكسي السالب Vs حتى ينعدم التيار الكهروضوئي تماماً.',
      'سجّل جهد الإيقاف المقابل لكل تردد في جدول الملاحظات.',
      'ارسم العلاقة بين Vs والتردد nu لحساب النسبة (h/e) والتردد الحرج nu_0.',
    ],
    formula: 'e V_s = h \\nu - \\Phi \\implies V_s = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\Phi}{e}',
    expectedConclusionEn: 'Light below threshold frequency produces zero photocurrent regardless of intensity, validating Einstein photon hypothesis.',
    expectedConclusionAr: 'التردد الأقل من التردد الحرج لا يحرر إلكترونات مهما بلغت شدة الضوء، مما يثبت فرضية فوتونات أينشتاين.',
  },

  // Chemistry
  {
    id: 'chem-exp-1',
    lab: 'chemistry',
    titleEn: 'Le Chatelier Principle in Nitrogen Dioxide Equilibrium (2NO2 <=> N2O4)',
    titleAr: 'تطبيق قاعدة لوشاتيليه على اتزان غازي ثاني أكسيد النيتروجين ورابع أكسيد النيتروجين',
    gradeEn: 'Grade 12 Chemistry - Chemical Equilibrium',
    gradeAr: 'الصف الثالث الثانوي - الاتزان الكيميائي والعوامل المؤثرة على موضع الاتزان',
    hypothesisEn: 'Cooling favors exothermic dimerization to colorless N2O4; increasing pressure shifts toward fewer moles.',
    hypothesisAr: 'التبريد يزيح الاتزان في الاتجاه الطارد للحرارة (تكوين رابع أكسيد النيتروجين عديم اللون)، وزيادة الضغط تزيحه نحو الحجم الأقل.',
    apparatusEn: ['Sealed glass gas vessel with NO2/N2O4 mixture', 'Hot water bath (80 C)', 'Ice-water cooling bath (0 C)', 'Digital spectrophotometer for color intensity'],
    apparatusAr: ['أنبوبة زجاجية محكمة الإغلاق تحتوي خليط NO2 / N2O4', 'حمام مائي ساخن (٨٠ مئوية)', 'حمام ثلجي مبرد (صفر مئوية)', 'مقياس طيف ضوئي لقياس شدة اللون البني المحمر'],
    stepsEn: [
      'Place sealed vessel at room temperature (25 C) and observe pale reddish-brown color.',
      'Immerse in ice bath at 0 C; observe progressive fading to colorless as N2O4 forms.',
      'Transfer to boiling bath at 80 C; observe deepening of intense dark brown NO2 color.',
      'Apply pressure compression from 1.0 atm to 4.0 atm; verify volume shift toward N2O4.',
    ],
    stepsAr: [
      'ضع الأنبوبة المحكمة في درجة حرارة الغرفة (٢٥ مئوية) ولاحظ اللون البني المحمر الفاتح.',
      'اغمر الأنبوبة في حمام ثلجي عند صفر مئوية؛ لاحظ اختفاء اللون تدريجياً لتكون N2O4.',
      'انقل الأنبوبة إلى حمام ساخن عند ٨٠ مئوية؛ لاحظ ازدياد حدة اللون البني المحمر الداكن NO2.',
      'ارفع الضغط من ١٫٠ ضغط جوي إلى ٤٫٠ ضغط جوي؛ ولاحظ انزياح الاتزان نحو الحجم الأقل.',
    ],
    formula: '2\\text{NO}_2\\text{ (red-brown)} \\rightleftharpoons \\text{N}_2\\text{O}_4\\text{ (colorless)} + \\text{Heat} \\quad (\\Delta H < 0)',
    expectedConclusionEn: 'Exothermic reactions shift backward with heating and forward with cooling, in exact accordance with Le Chatelier principle.',
    expectedConclusionAr: 'التفاعلات الطاردة للحرارة تنزاح عكسياً بالتسخين وطردياً بالتبريد، تأكيداً تاماً لقاعدة لوشاتيليه.',
  },
  {
    id: 'chem-exp-2',
    lab: 'chemistry',
    titleEn: 'Volumetric Acid-Base Neutralization Titration',
    titleAr: 'المعايرة الحجمية بالتعادل لتعيين تركيز محلول حمض الهيدروكلوريك',
    gradeEn: 'Grade 12 Chemistry - Quantitative Chemical Analysis',
    gradeAr: 'الصف الثالث الثانوي - التحليل الكيميائي الكمي الحجمي',
    hypothesisEn: 'Equivalence is reached when moles of H+ equal moles of OH-: Ma*Va / na = Mb*Vb / nb.',
    hypothesisAr: 'تتحقق نقطة التعادل والتكافؤ تماماً عندما تتساوى مولات H+ مع مولات OH-: Ma*Va / na = Mb*Vb / nb.',
    apparatusEn: ['50 mL Precision Buret', '25 mL Volumetric Pipet', 'Erlenmeyer Flask', 'Standard 0.1 M NaOH solution', 'HCl solution of unknown molarity', 'Phenolphthalein indicator'],
    apparatusAr: ['سحاحة مدرجة سعة ٥٠ مل', 'ماصة عيارية سعة ٢٥ مل', 'دورق مخروطي', 'محلول قياسي معلوم التركيز من هيدروكسيد الصوديوم ٠٫١ مولار', 'حمض هيدروكلوريك مجهول التركيز', 'دليل الفينولفثالين'],
    stepsEn: [
      'Transfer 25.0 mL of unknown HCl into Erlenmeyer flask using pipet.',
      'Add 2-3 drops of phenolphthalein indicator (colorless in acid).',
      'Fill buret with standard 0.10 M NaOH and record initial reading.',
      'Titrate dropwise with swirling until the first faint persistent pink color appears.',
      'Record final buret volume Vb and calculate molarity Ma.',
    ],
    stepsAr: [
      'انقل ٢٥٫٠ مل من حمض HCl مجهول التركيز إلى الدورق المخروطي بالماصة.',
      'أضف قطرتين من دليل الفينولفثالين (عديم اللون في الوسط الحمضي).',
      'املأ السحاحة بمحلول NaOH القياسي بتركيز ٠٫١٠ مولار وسجل القراءة الابتدائية.',
      'أضف القلوي قطرة بقطرة مع التقليب المستمر حتى ظهور أول لون وردي خفيف مستديم.',
      'سجل حجم القلوي المستهلك Vb واحسب تركيز الحمض Ma بمعادلة المعايرة.',
    ],
    formula: '\\frac{M_a \\cdot V_a}{n_a} = \\frac{M_b \\cdot V_b}{n_b} \\implies M_a = \\frac{M_b \\cdot V_b}{V_a}',
    expectedConclusionEn: 'Sharp pH transition across equivalence point indicates quantitative stoichiometric neutralization.',
    expectedConclusionAr: 'التغير المفاجئ في قيمة الأس الهيدروجيني pH عند نقطة التكافؤ يحدد التركيز المولي بدقة استثنائية.',
  },

  // Biology
  {
    id: 'bio-exp-1',
    lab: 'biology',
    titleEn: 'Sarcomere Contraction Mechanism & Muscle Tetany / Fatigue',
    titleAr: 'آلية انقباض الساركومير في اللييفة العضلية والشد العضلي والإجهاد',
    gradeEn: 'Grade 12 Biology - Support & Movement',
    gradeAr: 'الصف الثالث الثانوي - الدعامة والحركة في الكائنات الحية (انقباض العضلات الهيكلية)',
    hypothesisEn: 'Myosin cross-bridges require Ca2+ to attach to actin and ATP to detach; ATP deficiency causes sustained spasm.',
    hypothesisAr: 'تتطلب الروابط المستعرضة للميوسين أيونات الكالسيوم للاتصال بالأكتين وطاقة ATP للانفصال؛ ونقص ATP يسبب شد عضلي مستمر.',
    apparatusEn: ['Interactive Electron Microscopy Sarcomere Simulator', 'Calcium ion Ca2+ influx controller', 'ATP energy reservoir slider', 'Myofibril dimension calipers'],
    apparatusAr: ['محاكي الساركومير المجهري ثلاثي الأبعاد', 'مفتاح تدفق أيونات الكالسيوم Ca2+', 'منزلق مخزون طاقة ATP', 'محدد أبعاد القطعة العضلية (المناطق المضيئة والداكنة وشبه المضيئة)'],
    stepsEn: [
      'Examine relaxed sarcomere at rest length 2.8 micrometers (wide H-zone and I-bands).',
      'Toggle Calcium influx ON to expose actin binding sites via troponin-tropomyosin shift.',
      'Observe myosin heads pulling actin filaments toward sarcomere center (Z-discs approach).',
      'Notice A-band remains strictly constant at 1.5 micrometers while H-zone completely disappears.',
      'Deplete ATP supply while calcium remains present; observe persistent painful muscle spasm.',
    ],
    stepsAr: [
      'افحص القطعة العضلية المنبسطة عند طول ٢٫٨ ميكرومتر (المنطقة شبه المضيئة H والمضيئة I متسعة).',
      'فعّل تدفق أيونات الكالسيوم لكشف مواقع الارتباط على خيوط الأكتين.',
      'لاحظ سحب رؤوس الميوسين لخيوط الأكتين نحو مركز الساركومير وتقارب خطي Z.',
      'لاحظ بقاء طول المنطقة الداكنة A ثابتاً تماماً عند ١٫٥ ميكرومتر بينما تختفي المنطقة H.',
      'استنفد مخزون طاقة ATP مع بقاء الكالسيوم؛ ولاحظ حدوث الشد العضلي المؤلم لعدم انفصال الروابط.',
    ],
    formula: '\\text{Contraction}: \\Delta Z < 0, \\quad \\Delta I < 0, \\quad \\Delta H \\to 0, \\quad \\text{Length}(A) = \\text{Constant}',
    expectedConclusionEn: 'Sliding filament theory explains muscle contraction via cross-bridge ratchet; ATP is mandatory for relaxation.',
    expectedConclusionAr: 'تثبت نظرية الخيوط المنزلقة لهكسلي أن حركة الجسور المستعرضة تعتمد على الكالسيوم، وأن ATP ضروري لفك الارتباط والانبساط.',
  },
  {
    id: 'bio-exp-2',
    lab: 'biology',
    titleEn: 'DNA Sequence Complementarity, Transcription & Translation',
    titleAr: 'تكامل شريطي DNA، النسخ إلى mRNA، وترجمة الشفرة إلى ببتيد',
    gradeEn: 'Grade 12 Biology - Molecular Biology & Genetics',
    gradeAr: 'الصف الثالث الثانوي - البيولوجيا الجزيئية: تركيب DNA وتخليق البروتين',
    hypothesisEn: 'Antiparallel strands follow Chargaff parity: A pairs with T (2 H-bonds) and G pairs with C (3 H-bonds).',
    hypothesisAr: 'الشريطان المتعاكسان يحققان قاعدة تشارجاف: الأدنين يرتبط بالثايمين برابطتين، والجوانين بالسيتوزين بثلاث روابط هيدروجينية.',
    apparatusEn: ['Digital DNA Nucleotide Sequence Builder', 'Antiparallel strand generator (3 to 5 prime)', 'RNA Polymerase transcription engine', 'Ribosome codon decoder'],
    apparatusAr: ['استوديو بناء تتابع نيوكليوتيدات DNA', 'مولد الشريط المكمل المتعاكس ٣ إلى ٥', 'محاكي إنزيم بلمرة RNA للنسخ', 'محرك فك الشفرة الوراثية بالريبوسوم'],
    stepsEn: [
      'Enter 5 to 3 sequence: AUG UUU GGC UAA.',
      'Verify automatic generation of complementary 3 to 5 strand.',
      'Calculate total hydrogen bonds (2 per A-T and 3 per G-C).',
      'Trigger mRNA transcription: T is replaced by U.',
      'Follow ribosome translation: Identify Start codon AUG (Met), Glycine, and Stop codon UAA.',
    ],
    stepsAr: [
      'أدخل التتابع من ٥ إلى ٣: AUG UUU GGC UAA.',
      'تحقق من التوليد التلقائي للشريط المكمل المتعاكس من ٣ إلى ٥.',
      'احسب إجمالي الروابط الهيدروجينية (رابطتان لـ A-T وثلاث روابط لـ G-C).',
      'فعّل نسخ mRNA مع استبدال الثايمين باليوراسيل.',
      'تابع ترجمة الريبوسوم: تعرّف على كودون البدء AUG (ميثيونين)، ثم بقية الأحماض وكودون الوقف UAA.',
    ],
    formula: '\\text{Chargaff}: \\%A = \\%T, \\quad \\%G = \\%C, \\quad \\%\\text{Purines} = \\%\\text{Pyrimidines} = 50\\%',
    expectedConclusionEn: 'Complementary base pairing ensures faithful replication and accurate genetic message transmission to proteins.',
    expectedConclusionAr: 'يضمن التكامل الدقيق بين القواعد تضاعفاً دقيقاً ونقلاً أميناً للمعلومات الوراثية لبناء البروتين.',
  },

  // Math
  {
    id: 'math-exp-1',
    lab: 'math',
    titleEn: 'Investigating the Derivative as the Limit of Secant Slopes',
    titleAr: 'استقصاء المشتقة الأولى كنهاية لميل القاطع عند اقتراب النقطتين (h -> 0)',
    gradeEn: 'Grade 12 Pure Math - Calculus',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات البحتة (التفاضل والتكامل ومعدل التغير)',
    hypothesisEn: 'As the increment h approaches 0, the secant slope converges precisely to the tangent derivative f prime (x0).',
    hypothesisAr: 'كلما اقترب التغير h من الصفر، يقترب ميل القاطع تماماً من ميل المماس (المشتقة الأولى) عند نقطة التماس x0.',
    apparatusEn: ['Interactive Calculus Tangent Visualizer', 'Secant point offset slider h', 'Slope calculation engine', 'Zoomable Cartesian coordinate plane'],
    apparatusAr: ['محاكي مماسات التفاضل التفاعلي', 'منزلق إزاحة القاطع h', 'حاسبة ميل المماس وميل القاطع اللحظية', 'شبكة إحداثيات متعامدة ديناميكية'],
    stepsEn: [
      'Set function f(x) = x^3 - 3x and choose point of tangency x0 = 1.0.',
      'Observe theoretical derivative f prime(1.0) = 3(1)^2 - 3 = 0.0 (horizontal tangent).',
      'Set secant offset h = 1.0; compute secant slope.',
      'Gradually decrease h to 0.5, 0.1, 0.01, and 0.001.',
      'Verify that the secant line rotates continuously until it coincides with the tangent line.',
    ],
    stepsAr: [
      'اختر الدالة f(x) = x^3 - 3x وحدد نقطة التماس عند x0 = ١٫٠.',
      'احسب المشتقة نظرياً: f prime(1.0) = 3(1)^2 - 3 = 0 (مماس أفقي).',
      'اضبط إزاحة القاطع h = ١٫٠ واحسب ميل القاطع المار بالنقطتين.',
      'قلل قيمة h تدريجياً إلى ٠٫٥، ثم ٠٫١، ثم ٠٫٠١، ثم ٠٫٠٠١.',
      'لاحظ دوران القاطع تدريجياً حتى ينطبق تماماً على خط المماس عند نقطة التماس.',
    ],
    formula: 'f\'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}',
    expectedConclusionEn: 'The instantaneous rate of change is the limiting value of average rates of change as interval duration approaches zero.',
    expectedConclusionAr: 'معدل التغير اللحظي (المشتقة) هو النهاية الرياضية الدقيقة لمتوسط التغير عندما تؤول الفترة الزمنية إلى الصفر.',
  },
  {
    id: 'math-exp-2',
    lab: 'math',
    titleEn: 'Verifying Static Friction Angles on an Inclined Plane',
    titleAr: 'تحقيق زاوية الاحتكاك السكوني وشروط الاتزان على مستوى مائل خشن',
    gradeEn: 'Grade 12 Applied Math - Statics',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات التطبيقية (الاستاتيكا: اتزان جسم على مستوى مائل)',
    hypothesisEn: 'A body placed on a rough inclined plane is on the verge of sliding when angle theta equals friction angle lambda: tan(theta) = mu_s.',
    hypothesisAr: 'يكون الجسم الموضوع على مستوى مائل خشن على وشك الانزلاق تحت تأثير وزنه فقط عندما تتساوى زاوية ميل المستوى مع زاوية الاحتكاك: tan(theta) = mu_s.',
    apparatusEn: ['Adjustable inclination plane model', 'Test block of mass m', 'Friction coefficient selector (mu_s = 0.577)', 'Force decomposition vector display'],
    apparatusAr: ['نموذج مستوى مائل قابل لتعديل زاوية الميل theta', 'جسم كتلته m موضوع على السطح', 'محدد معامل الاحتكاك السكوني mu_s = 0.577', 'لوحة تحليل متجهات القوى (الوزن ومركبتيه، ورد الفعل العمودي، وقوة الاحتكاك)'],
    stepsEn: [
      'Set static friction coefficient mu_s = 0.577 (lambda = 30 degrees).',
      'Start with inclination angle theta = 15 degrees; verify equilibrium (F_friction < F_s_max).',
      'Gradually increase theta to 25 degrees; observe friction force increasing.',
      'Reach theta = 30 degrees; observe body reaches limiting equilibrium (on the verge of motion).',
      'Increase theta above 30 degrees; verify body loses equilibrium and accelerates downward.',
    ],
    stepsAr: [
      'اضبط معامل الاحتكاك السكوني mu_s على ٠٫٥٧٧ (زاوية الاحتكاك lambda = ٣٠ درجة).',
      'ابدأ بزاوية ميل theta = ١٥ درجة؛ وتحقق من ثبات واتزان الجسم (Fs < Fs_max).',
      'زد زاوية الميل تدريجياً إلى ٢٥ درجة؛ ولاحظ ازدياد قوة الاحتكاك لموازنة مركبة الوزن.',
      'عند زاوية theta = ٣٠ درجة تماماً، يصل الجسم لحالة الاتزان النهائي (على وشك الحركة).',
      'زد الزاوية فوق ٣٠ درجة؛ ولاحظ اختلال الاتزان وبدء انزلاق الجسم لأسفل المستوى.',
    ],
    formula: '\\text{Limiting Equilibrium}: \\tan\\theta = \\mu_s = \\tan\\lambda \\implies \\theta = \\lambda',
    expectedConclusionEn: 'When theta equals lambda, limiting equilibrium is attained independently of body mass.',
    expectedConclusionAr: 'يتحقق الاتزان النهائي وشك الحركة عندما تساوي زاوية ميل المستوى زاوية الاحتكاك السكوني بصورة مستقلة تماماً عن كتلة الجسم.',
  },
];

export const GuidedExperimentsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
  activeLab,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [selectedExpId, setSelectedExpId] = useState<string>(() => {
    const first = EXPERIMENTS.find((e) => e.lab === activeLab);
    return first ? first.id : EXPERIMENTS[0].id;
  });

  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const activeExp = EXPERIMENTS.find((e) => e.id === selectedExpId) || EXPERIMENTS[0];

  const handleToggleStep = (stepIdx: number) => {
    const key = `${activeExp.id}_step_${stepIdx}`;
    setCompletedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all animate-in fade-in"
      role="dialog"
      aria-modal="true"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div
        className={`relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl shadow-2xl overflow-hidden border ${
          isLight
            ? 'bg-slate-50 border-slate-300 text-slate-900'
            : isContrast
            ? 'bg-black border-2 border-yellow-400 text-yellow-300'
            : 'bg-slate-900 border-slate-700 text-white'
        }`}
      >
        {/* Header */}
        <div
          className={`p-4 sm:p-6 border-b flex items-center justify-between ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black">
                  {isArabic ? 'دليل التجارب المخبرية الموجهة' : 'Guided Scientific Experiments Protocol'}
                </h2>
                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                  MoE Ministry Accredited
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isArabic
                  ? 'بروتوكول التجارب العلمية العملية مع توثيق الفرضيات وجداول النتائج والتقارير المخبرية'
                  : 'Structured student investigation protocols with hypothesis entry, step checkpoints & printable reports'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintReport}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{isArabic ? 'طباعة التقرير' : 'Print Report'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Experiment Navigation Tabs */}
        <div
          className={`px-4 sm:px-6 py-2.5 border-b overflow-x-auto flex items-center gap-2 scrollbar-none ${
            isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900/60 border-slate-800'
          }`}
        >
          {EXPERIMENTS.map((exp) => {
            const isSelected = exp.id === activeExp.id;
            const Icon =
              exp.lab === 'math'
                ? Calculator
                : exp.lab === 'physics'
                ? Atom
                : exp.lab === 'chemistry'
                ? FlaskConical
                : Dna;

            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md'
                    : isLight
                    ? 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{isArabic ? exp.titleAr.slice(0, 35) + '...' : exp.titleEn.slice(0, 35) + '...'}</span>
              </button>
            );
          })}
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* Active Experiment Header Banner */}
          <div
            className={`p-4 sm:p-5 rounded-2xl border ${
              isLight
                ? 'bg-white border-slate-200 shadow-sm'
                : 'bg-slate-950/70 border-slate-800'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                {isArabic ? activeExp.gradeAr : activeExp.gradeEn}
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {activeExp.id}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {isArabic ? activeExp.titleAr : activeExp.titleEn}
            </h3>
          </div>

          {/* Hypothesis & Scientific Formula */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>{isArabic ? 'الفرضية العلمية' : 'Scientific Hypothesis'}</span>
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                {isArabic ? activeExp.hypothesisAr : activeExp.hypothesisEn}
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>{isArabic ? 'القانون والنموذج الرياضي' : 'Governing Equation'}</span>
              </h4>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto text-center">
                {activeExp.formula}
              </div>
            </div>
          </div>

          {/* Apparatus & Step-by-Step Checkpoints */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Apparatus List */}
            <div
              className={`p-4 rounded-2xl border md:col-span-1 ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>{isArabic ? 'الأدوات والمواد' : 'Apparatus & Materials'}</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {(isArabic ? activeExp.apparatusAr : activeExp.apparatusEn).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Checkpoint Steps */}
            <div
              className={`p-4 rounded-2xl border md:col-span-2 ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>{isArabic ? 'خطوات العمل ومحطات الإنجاز' : 'Procedure & Checkpoints'}</span>
              </h4>
              <div className="space-y-2.5">
                {(isArabic ? activeExp.stepsAr : activeExp.stepsEn).map((step, idx) => {
                  const key = `${activeExp.id}_step_${idx}`;
                  const isDone = !!completedSteps[key];

                  return (
                    <div
                      key={idx}
                      onClick={() => handleToggleStep(idx)}
                      className={`p-2.5 rounded-xl border text-xs flex items-start gap-3 cursor-pointer transition-all ${
                        isDone
                          ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <button
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                          isDone
                            ? 'bg-emerald-500 text-white border-emerald-400'
                            : 'border-slate-600 bg-slate-800'
                        }`}
                      >
                        {isDone && <CheckCircle className="w-3.5 h-3.5" />}
                      </button>
                      <span className="flex-1 leading-relaxed">{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Student Observational Data Logger */}
          <div
            className={`p-4 sm:p-5 rounded-2xl border ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-950/60 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4" />
                <span>{isArabic ? 'تدوين النتائج وملاحظات الطالب' : 'Student Observation Log & Notes'}</span>
              </h4>
              <button
                onClick={() => setStudentNotes((prev) => ({ ...prev, [activeExp.id]: '' }))}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isArabic ? 'إعادة تعيين الملاحظات' : 'Reset Notes'}</span>
              </button>
            </div>

            <textarea
              rows={3}
              value={studentNotes[activeExp.id] || ''}
              onChange={(e) =>
                setStudentNotes((prev) => ({ ...prev, [activeExp.id]: e.target.value }))
              }
              placeholder={
                isArabic
                  ? 'سجّل هنا قراءاتك التجريبية، الحسابات الرياضية، وملاحظاتك أثناء تنفيذ التجربة...'
                  : 'Record your experimental readings, mathematical calculations, and observational remarks here...'
              }
              className="w-full text-xs sm:text-sm p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />

            <div className="mt-3 p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300">
              <span className="font-bold">{isArabic ? 'الاستنتاج العلمي المعتمد: ' : 'Official Conclusion: '}</span>
              <span>{isArabic ? activeExp.expectedConclusionAr : activeExp.expectedConclusionEn}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
