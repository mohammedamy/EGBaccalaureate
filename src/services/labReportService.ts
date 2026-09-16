import type { Language } from '../i18n/translations';

export type LabDiscipline = 'physics' | 'chemistry' | 'biology' | 'math';

export interface DataTableColumn {
  key: string;
  labelAr: string;
  labelEn: string;
  unit?: string;
}

export interface RubricCriterion {
  id: string;
  categoryAr: string;
  categoryEn: string;
  maxMarks: number;
  earnedMarks?: number;
  descriptionAr: string;
  descriptionEn: string;
}

export interface ProcedureStepItem {
  stepTextAr: string;
  stepTextEn: string;
  completed: boolean;
}

/**
 * Sanitizes math formulas into clean Unicode plain text for UI components
 * that do not support HTML rendering (such as native <select> <option> tags).
 */
export function formatPlainMathTitle(title: string): string {
  if (!title) return '';
  return title
    .replace(/\$\((h\s*\\to\s*0)\)\$/g, '($1)')
    .replace(/\$h\s*\\to\s*0\$/g, 'h → 0')
    .replace(/\\to/g, '→')
    .replace(/\\approx/g, '≈')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\times/g, '×')
    .replace(/\$([^$]+)\$/g, '$1')
    .trim();
}

export interface LabReportData {
  id: string;
  experimentId: string;
  titleAr: string;
  titleEn: string;
  discipline: LabDiscipline;
  gradeAr: string;
  gradeEn: string;
  studentName: string;
  seatNumber: string;
  schoolName: string;
  instructorName: string;
  date: string;
  hypothesisAr: string;
  hypothesisEn: string;
  apparatusAr: string[];
  apparatusEn: string[];
  governingEquation: string;
  procedureSteps: ProcedureStepItem[];
  dataTableColumns: DataTableColumn[];
  dataTableRows: Record<string, string>[];
  observationsAr: string;
  observationsEn: string;
  conclusionAr: string;
  conclusionEn: string;
  errorAnalysisAr: string;
  errorAnalysisEn: string;
  rubricCriteria: RubricCriterion[];
}

export const OFFICIAL_LAB_RUBRIC: RubricCriterion[] = [
  {
    id: 'rubric-1',
    categoryAr: 'صياغة الفرضية والهدف العلمي',
    categoryEn: 'Hypothesis & Scientific Objective',
    maxMarks: 2,
    earnedMarks: 2,
    descriptionAr: 'تحديد واضح للهدف وتوقع علمي سليم للعلاقة بين المتغيرين المستقل والتابع',
    descriptionEn: 'Clear articulation of experimental aim and well-reasoned hypothesis',
  },
  {
    id: 'rubric-2',
    categoryAr: 'تجهيز الأدوات ومعايير السلامة',
    categoryEn: 'Apparatus & Laboratory Safety',
    maxMarks: 2,
    earnedMarks: 2,
    descriptionAr: 'فحص وضبط الأجهزة المعملية والتأكد من ملاءمة المدى وتطبيق بروتوكول السلامة',
    descriptionEn: 'Correct instrument inspection, zero-calibration, and safety measures',
  },
  {
    id: 'rubric-3',
    categoryAr: 'جمع البيانات وتدوين النتائج',
    categoryEn: 'Data Collection & Table Precision',
    maxMarks: 3,
    earnedMarks: 3,
    descriptionAr: 'تنفيذ المحاولات المتكررة بدقة وتسجيل القراءات في جدول منظم متضمناً الوحدات',
    descriptionEn: 'Multiple consistent empirical trials logged with correct scientific units',
  },
  {
    id: 'rubric-4',
    categoryAr: 'الحسابات الرياضية والتحليل والوحدات',
    categoryEn: 'Mathematical Analysis & Slope Calculation',
    maxMarks: 3,
    earnedMarks: 3,
    descriptionAr: 'تطبيق النموذج الرياضي الصحيح واستخراج الميل ومعاملات التناسب بدقة عددية',
    descriptionEn: 'Rigorous application of governing equations and slope/intercept derivation',
  },
  {
    id: 'rubric-5',
    categoryAr: 'الاستنتاج العلمي ومناقشة مصادر الخطأ',
    categoryEn: 'Scientific Conclusion & Error Analysis',
    maxMarks: 2,
    earnedMarks: 2,
    descriptionAr: 'استخلاص النتيجة المعتمدة ومناقشة الفروق ومصادر الخطأ المعملي المحتملة',
    descriptionEn: 'Synthesizing valid scientific inference and identifying experimental error sources',
  },
];

interface ExperimentTemplateConfig {
  id: string;
  titleEn: string;
  titleAr: string;
  discipline: LabDiscipline;
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
  columns: DataTableColumn[];
  sampleRows: Record<string, string>[];
  sampleObservationsAr: string;
  sampleObservationsEn: string;
  sampleErrorAnalysisAr: string;
  sampleErrorAnalysisEn: string;
}

export const EXPERIMENT_CONFIGS: Record<string, ExperimentTemplateConfig> = {
  // 1. Physics Ohm Law
  'phys-exp-1': {
    id: 'phys-exp-1',
    discipline: 'physics',
    titleEn: 'Verification of Closed-Circuit Ohm Law & Internal Resistance (r)',
    titleAr: 'تحقيق قانون أوم للدائرة المغلقة وتعيين المقاومة الداخلية للعمود (r)',
    gradeEn: 'Grade 12 Physics - Electricity & Circuits',
    gradeAr: 'الصف الثالث الثانوي - التيار الكهربي وقانون أوم للدائرة المغلقة',
    hypothesisEn: 'Terminal voltage V decreases linearly with current I due to internal potential drop Ir: V = VB - Ir.',
    hypothesisAr: 'يهبط فرق الجهد بين قطبي المصدر (V) خطياً مع زيادة شدة التيار (I) بمقدار الهبوط في الجهد عبر المقاومة الداخلية (Ir).',
    apparatusEn: ['DC Battery source with EMF VB', 'Digital Voltmeter across battery terminals (V)', 'Ammeter in series (I)', 'Variable load resistor Rheostat (R_ext)', 'Connecting leads'],
    apparatusAr: ['بطارية ذات قوة دافعة VB ومقاومة داخلية r', 'فولتميتر رقمي بين طرفي البطارية (V)', 'أميتر موصل على التوالي (I)', 'ريوستات منزلق (مقاومة متغيرة R_ext)', 'أسلاك توصيل منعدمة المقاومة'],
    stepsEn: [
      'Set battery EMF VB to 12 V and internal resistance r to 1.0 Ω.',
      'Vary external resistance R_eq across 5 different values (2, 4, 6, 8, 10 Ω).',
      'Record circuit current I and terminal voltage V in the observation table.',
      'Plot V on the vertical axis against I on the horizontal axis.',
      'Calculate the slope of the line (-r) and the vertical intercept (VB).',
    ],
    stepsAr: [
      'اضبط القوة الدافعة للبطارية VB على 12 V والمقاومة الداخلية r على 1.0 Ω.',
      'غيّر المقاومة الخارجية R_eq عبر ٥ قيم مختلفة (2, 4, 6, 8, 10 Ω).',
      'سجّل قراءة شدة التيار I وفرق الجهد بين طرفي العمود V في جدول النتائج.',
      'مثّل بيانياً العلاقة بين V على المحور الرأسي و I على المحور الأفقي.',
      'احسب ميل الخط المستقيم (-r) والجزء المقطوع من المحور الرأسي (VB).',
    ],
    formula: 'V = V_B - I \\cdot r \\implies \\text{Slope} = -r, \\quad V_{\\text{intercept}} = V_B',
    expectedConclusionEn: 'The vertical intercept gives EMF VB = 12.0 V, and the slope confirms internal resistance r = 1.0 Ω with 100% precision.',
    expectedConclusionAr: 'يؤكد الجزء المقطوع من المحور الصادي القوة الدافعة VB = 12 V، ويؤكد الميل المقاومة الداخلية r = 1.0 Ω بدقة تامة.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة', labelEn: 'Trial' },
      { key: 'r_ext', labelAr: 'المقاومة الخارجية R', labelEn: 'Ext. Resistance R', unit: 'Ω' },
      { key: 'current', labelAr: 'شدة التيار I', labelEn: 'Current I', unit: 'A' },
      { key: 'voltage', labelAr: 'فرق جهد القطبين V', labelEn: 'Terminal Voltage V', unit: 'V' },
      { key: 'ir_drop', labelAr: 'الهبوط الداخلي I·r', labelEn: 'Internal Drop I·r', unit: 'V' },
    ],
    sampleRows: [
      { trial: '1', r_ext: '11.0', current: '1.00', voltage: '11.00', ir_drop: '1.00' },
      { trial: '2', r_ext: '5.0', current: '2.00', voltage: '10.00', ir_drop: '2.00' },
      { trial: '3', r_ext: '3.0', current: '3.00', voltage: '9.00', ir_drop: '3.00' },
      { trial: '4', r_ext: '2.0', current: '4.00', voltage: '8.00', ir_drop: '4.00' },
      { trial: '5', r_ext: '1.4', current: '5.00', voltage: '7.00', ir_drop: '5.00' },
    ],
    sampleObservationsAr: 'لوحظ انخفاض قراءة الفولتميتر طردياً مع زيادة شدة التيار المار في الدائرة الخارجية، مع استقرار تام لدرجة حرارة البطارية والأسلاك.',
    sampleObservationsEn: 'Terminal voltage decreased proportionally as circuit current increased, confirming constant internal resistance and negligible wire heating.',
    sampleErrorAnalysisAr: 'مقاومة أسلاك التوصيل الصغيرة وخطأ زاوية النظر في قراءة الأميتر التناظري (تم تلافيه بالفولتميتر الرقمي).',
    sampleErrorAnalysisEn: 'Minor lead resistance and parallax error in analog meter readings (mitigated by digital multimeter).',
  },

  // 2. Physics Photoelectric
  'phys-exp-2': {
    id: 'phys-exp-2',
    discipline: 'physics',
    titleEn: 'Photoelectric Effect & Planck Constant Determination',
    titleAr: 'دراسة الظاهرة الكهروضوئية وتعيين ثابت بلانك ودالة الشغل',
    gradeEn: 'Grade 12 Physics - Modern Physics & Quantum Photons',
    gradeAr: 'الصف الثالث الثانوي - ازدواجية الموجة والجسيم وفيزياء الكم',
    hypothesisEn: 'Stopping potential Vs is linearly proportional to frequency ν: e·Vs = h·ν - Φ.',
    hypothesisAr: 'يتناسب جهد الإيقاف Vs طردياً مع تردد الفوتون الساقط ν: e·Vs = h·ν - Φ (دالة الشغل).',
    apparatusEn: ['Photoelectric vacuum cell with Cesium cathode (Φ = 2.14 eV)', 'Monochromatic tunable light source', 'Retarding voltage potentiometer', 'Nanoammeter'],
    apparatusAr: ['خلية كهروضوئية مفرغة بمهبط من السيزيوم (Φ = 2.14 eV)', 'مصدر ضوئي أحادي اللون متغير الطول الموجي', 'مجزئ جهد عكسي لتطبيق جهد الإيقاف', 'نانوأميتر حساس لقياس تيار الانبعاث'],
    stepsEn: [
      'Select Cesium cathode with work function Φ = 2.14 eV.',
      'Illuminate cathode with light at 350 nm, 400 nm, 450 nm, and 500 nm.',
      'Increase negative retarding potential Vs until photocurrent drops exactly to zero.',
      'Record stopping potential Vs for each frequency ν.',
      'Plot Vs versus ν to find slope h/e and threshold frequency ν0.',
    ],
    stepsAr: [
      'اختر مهبط السيزيوم ذو دالة شغل Φ = 2.14 eV.',
      'وجّه حزمة ضوئية بأطوال موجية 350 nm، 400 nm، 450 nm، و 500 nm.',
      'زد جهد الإيقاف العكسي السالب Vs حتى ينعدم التيار الكهروضوئي تماماً.',
      'سجّل جهد الإيقاف Vs المقابل لكل تردد ν في جدول الملاحظات.',
      'ارسم العلاقة بين Vs والتردد ν لحساب النسبة (h/e) والتردد الحرج ν0.',
    ],
    formula: 'e V_s = h \\nu - \\Phi \\implies V_s = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\Phi}{e}',
    expectedConclusionEn: 'Light below threshold frequency produces zero photocurrent regardless of intensity, validating Einstein photon hypothesis.',
    expectedConclusionAr: 'التردد الأقل من التردد الحرج لا يحرر إلكترونات مهما بلغت شدة الضوء، مما يثبت فرضية فوتونات أينشتاين.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة', labelEn: 'Trial' },
      { key: 'wavelength', labelAr: 'الطول الموجي λ', labelEn: 'Wavelength λ', unit: 'nm' },
      { key: 'frequency', labelAr: 'التردد ν', labelEn: 'Frequency ν', unit: '×10¹⁴ Hz' },
      { key: 'stopping_v', labelAr: 'جهد الإيقاف Vs', labelEn: 'Stopping Potential Vs', unit: 'V' },
      { key: 'ke_max', labelAr: 'طاقة الحركة العظمى', labelEn: 'KE_max', unit: 'eV' },
    ],
    sampleRows: [
      { trial: '1', wavelength: '350', frequency: '8.57', stopping_v: '1.41', ke_max: '1.41' },
      { trial: '2', wavelength: '400', frequency: '7.50', stopping_v: '0.96', ke_max: '0.96' },
      { trial: '3', wavelength: '450', frequency: '6.67', stopping_v: '0.62', ke_max: '0.62' },
      { trial: '4', wavelength: '500', frequency: '6.00', stopping_v: '0.34', ke_max: '0.34' },
      { trial: '5', wavelength: '550', frequency: '5.45', stopping_v: '0.11', ke_max: '0.11' },
    ],
    sampleObservationsAr: 'انعدم التيار الكهروضوئي تماماً عند الأطوال الموجية الأكبر من 580 nm بغض النظر عن رفع شدة الإضاءة لأعلى قيمة.',
    sampleObservationsEn: 'Photocurrent completely ceased for wavelengths longer than 580 nm, regardless of how intense the illumination was made.',
    sampleErrorAnalysisAr: 'التيار المتبقي الصغير الناشئ عن الضوء الشارد في الغرفة وتشتت الفوتونات داخل الخلية.',
    sampleErrorAnalysisEn: 'Small reverse dark current and ambient stray light reflections entering the photocell tube.',
  },

  // 3. Physics AC Dynamo
  'phys-exp-3': {
    id: 'phys-exp-3',
    discipline: 'physics',
    titleEn: 'Electromagnetic Induction & AC Dynamo Generation (Faraday Law)',
    titleAr: 'الحث الكهرومغناطيسي وتوليد التيار المتردد بالدينامو (قانون فاراداي)',
    gradeEn: 'Grade 12 Physics - Electromagnetic Induction',
    gradeAr: 'الصف الثالث الثانوي - الحث الكهرومغناطيسي والدينامو',
    hypothesisEn: 'Induced EMF in a rotating coil is proportional to angular speed ω, turns N, field B, and area A: E = N·B·A·ω·sin(θ).',
    hypothesisAr: 'تتناسب القوة الدافعة المستحثة في ملف يدور طردياً مع السرعة الزاوية ω وعدد اللفات N والمساحة A والفيض B: E = N·B·A·ω·sin(θ).',
    apparatusEn: ['Rotating armature coil in permanent B field', 'Digital oscilloscope with sine wave display', 'Two continuous bronze slip rings with carbon brushes', 'Split-ring commutator toggle', 'Angle scrubber θ'],
    apparatusAr: ['ملف دينامو قابل للدوران بين قطبي مغناطيس B', 'راسم ذبذبات أوسيلوسكوب رقمي لعرض منحنى الجهد', 'حلقتان معدنيتان للانزلاق وفرشاتا كربون', 'مقوم معدني مشقوق لنصفين للتيار المستمر', 'منزلق زاوية الدوران اللحظية θ'],
    stepsEn: [
      'Set coil turns N = 200, magnetic field B = 0.5 T, and area A = 0.04 m².',
      'Rotate armature coil and observe sine waveform on the oscilloscope display.',
      'Record peak voltage E_max when coil plane is parallel to field (θ = 90°).',
      'Verify that induced EMF E = 0 when coil plane is perpendicular to field lines (θ = 0°).',
      'Switch to DC Commutator mode and note current rectification into unidirectional half-waves.',
    ],
    stepsAr: [
      'اضبط عدد اللفات N = 200، وكثافة الفيض B = 0.5 T، ومساحة المقطع A = 0.04 m².',
      'دوّر ملف الدينامو ولاحظ المنحنى الجيبي المتولد على شاشة الأوسيلوسكوب.',
      'سجّل القيمة العظمى للجهد E_max عندما يكون مستوى الملف موازياً لخطوط الفيض (θ = 90°).',
      'تحقق من انعدام ق.د.ك المستحثة (E = 0) عندما يكون مستوى الملف عمودياً على خطوط الفيض (θ = 0°).',
      'حوّل إلى وضع المقوم المعدني (نصفا الأسطوانة) ولاحظ توحيد اتجاه التيار لنبضات موجبة فقط.',
    ],
    formula: '\\mathcal{E} = N B A \\omega \\sin(\\omega t), \\quad \\mathcal{E}_{\\text{eff}} = \\frac{\\mathcal{E}_{\\max}}{\\sqrt{2}}',
    expectedConclusionEn: 'Sinusoidal EMF is generated by continuous flux rate of change; commutator rectifies polarity to pulsating DC.',
    expectedConclusionAr: 'يتولد تيار متردد جيبي نتيجة التغير المستمر في معدل قطع خطوط الفيض، ويعمل المقوم المعدني على توحيد اتجاه التيار.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة', labelEn: 'Trial' },
      { key: 'angle', labelAr: 'زاوية الدوران θ', labelEn: 'Angle θ', unit: '°' },
      { key: 'sin_theta', labelAr: 'جيب الزاوية sin θ', labelEn: 'sin θ' },
      { key: 'emf_inst', labelAr: 'ق.د.ك اللحظية E', labelEn: 'Induced EMF E', unit: 'V' },
      { key: 'eff_ratio', labelAr: 'النسبة E / E_max', labelEn: 'Ratio E / E_max' },
    ],
    sampleRows: [
      { trial: '1', angle: '0', sin_theta: '0.000', emf_inst: '0.0', eff_ratio: '0.00' },
      { trial: '2', angle: '30', sin_theta: '0.500', emf_inst: '125.7', eff_ratio: '0.50' },
      { trial: '3', angle: '45', sin_theta: '0.707', emf_inst: '177.7', eff_ratio: '0.71' },
      { trial: '4', angle: '60', sin_theta: '0.866', emf_inst: '217.6', eff_ratio: '0.87' },
      { trial: '5', angle: '90', sin_theta: '1.000', emf_inst: '251.3', eff_ratio: '1.00' },
    ],
    sampleObservationsAr: 'تصل القوة الدافعة الكهربية المستحثة إلى قيمتها الفعالة تماماً عند زاوية دوران 45 درجة من الوضع العمودي.',
    sampleObservationsEn: 'Induced EMF reached its exact effective (RMS) value at an angle of 45° from the perpendicular neutral position.',
    sampleErrorAnalysisAr: 'الاحتكاك الميكانيكي لفرش الكربون ومقاومة تلامس حلقتي الانزلاق.',
    sampleErrorAnalysisEn: 'Mechanical brush friction on slip rings and small contact potential drops.',
  },

  // 4. Physics RLC
  'phys-exp-4': {
    id: 'phys-exp-4',
    discipline: 'physics',
    titleEn: 'Series RLC Circuit Impedance, Phasors & Electrical Resonance',
    titleAr: 'معاوقة دائرة RLC ومخطط المتجهات الطورية وحالة الرنين الكهربي',
    gradeEn: 'Grade 12 Physics - Alternating Current Circuits',
    gradeAr: 'الصف الثالث الثانوي - دوائر التيار المتردد ودائرة الرنين والتوليف',
    hypothesisEn: 'At resonant frequency f0 = 1/(2π√(LC)), inductive and capacitive reactances cancel (XL = XC), minimizing impedance to Z = R.',
    hypothesisAr: 'عند تردد الرنين f0 = 1/(2π√(LC))، تتساوى المفاعلتان وتلغي كل منهما الأخرى (XL = XC)، فتصل المعاوقة لأقل قيمة Z = R.',
    apparatusEn: ['Variable frequency AC power source', 'Inductor coil (L = 100 mH)', 'Capacitor (C = 20 µF)', 'Resistor (R = 50 Ω)', 'Real-time phasor diagram monitor and resonance response curve'],
    apparatusAr: ['مصدر تيار متردد متغير التردد', 'ملف حث مهمل المقاومة (L = 100 mH)', 'مكثف ثابت السعة (C = 20 µF)', 'مقاومة أومية (R = 50 Ω)', 'شاشة متجهات طورية ومنحنى استجابة الرنين'],
    stepsEn: [
      'Set R = 50 Ω, L = 100 mH, C = 20 µF, and V = 100 V.',
      'Sweep frequency from 20 Hz to 300 Hz and record total impedance Z and current I.',
      'Click "Snap to Resonant f0" (112.5 Hz); observe phase angle ϕ drop exactly to 0°.',
      'Verify that current reaches maximum peak I_max = V / R = 2.0 A at resonance.',
      'Inspect phasor diagram to confirm VL and VC vectors are equal and opposite in phase.',
    ],
    stepsAr: [
      'اضبط المقاومة R = 50 Ω، والحث L = 100 mH، والسعة C = 20 µF، والجهد V = 100 V.',
      'غيّر التردد تدريجياً من 20 إلى 300 Hz وسجّل قيم المعاوقة Z وشدة التيار I.',
      'اضغط على "ضبط تردد الرنين f0" (112.5 Hz) ولاحظ هبوط زاوية الطور ϕ إلى صفر تماماً.',
      'تحقق من بلوغ شدة التيار قيمتها العظمى I_max = V / R = 2.0 A عند الرنين.',
      'افحص مخطط المتجهات للتأكد من أن متجهي VL و VC متساويان في المقدار ومتعاكسان في الاتجاه.',
    ],
    formula: 'f_0 = \\frac{1}{2\\pi\\sqrt{LC}}, \\quad Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad I_{\\max} = \\frac{V}{R}',
    expectedConclusionEn: 'Resonance achieves maximum power transfer and zero phase angle, forming the basis of radio tuning receivers.',
    expectedConclusionAr: 'تحقق حالة الرنين أقصى شدة تيار وانعدام زاوية الطور، وهي الأساس العلمي لدوائر الاستقبال والتوليف الإذاعي.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة', labelEn: 'Trial' },
      { key: 'freq', labelAr: 'التردد f', labelEn: 'Frequency f', unit: 'Hz' },
      { key: 'xl', labelAr: 'المفاعلة الحثية XL', labelEn: 'XL', unit: 'Ω' },
      { key: 'xc', labelAr: 'المفاعلة السعوية XC', labelEn: 'XC', unit: 'Ω' },
      { key: 'impedance', labelAr: 'المعاوقة الكلية Z', labelEn: 'Impedance Z', unit: 'Ω' },
      { key: 'current', labelAr: 'شدة التيار I', labelEn: 'Current I', unit: 'A' },
    ],
    sampleRows: [
      { trial: '1', freq: '50.0', xl: '31.4', xc: '159.2', impedance: '137.2', current: '0.73' },
      { trial: '2', freq: '80.0', xl: '50.3', xc: '99.5', impedance: '70.2', current: '1.42' },
      { trial: '3', freq: '112.5', xl: '70.7', xc: '70.7', impedance: '50.0', current: '2.00' },
      { trial: '4', freq: '150.0', xl: '94.2', xc: '53.1', impedance: '64.8', current: '1.54' },
      { trial: '5', freq: '200.0', xl: '125.7', xc: '39.8', impedance: '99.2', current: '1.01' },
    ],
    sampleObservationsAr: 'عند تردد الرنين 112.5 هرتز انطبقت زاوية الطور تماماً على الصفر وتطابقت المعاوقة Z مع المقاومة الأومية R = 50 أوم.',
    sampleObservationsEn: 'At the 112.5 Hz resonant frequency, the phase angle vanished to 0° and total impedance matched pure resistance R = 50 Ω.',
    sampleErrorAnalysisAr: 'المقاومة الأومية الداخلية لسلك ملف الحث وتسامح سعة المكثف.',
    sampleErrorAnalysisEn: 'Internal resistance of the copper inductor coil winding and capacitor dielectric dissipation factor.',
  },

  // 5. Physics Semiconductor & X-Ray
  'phys-exp-5': {
    id: 'phys-exp-5',
    discipline: 'physics',
    titleEn: 'Semiconductor Diode Barrier Potential & Coolidge Tube X-Ray Spectra',
    titleAr: 'دراسة حاجز الجهد للوصلة الثنائية وأطياف الأشعة السينية في أنبوبة كولدج',
    gradeEn: 'Grade 12 Physics - Modern Physics & Electronics (Chapters 6 & 8)',
    gradeAr: 'الصف الثالث الثانوي - الإلكترونيات الحديثة والأطياف الذرية وأشعة إكس',
    hypothesisEn: 'Forward bias collapses depletion barrier (V > 0.7 V Si); Coolidge accelerating potential determines Duane-Hunt minimum wavelength: λ_min = hc/(eV).',
    hypothesisAr: 'التوصيل الأمامي يهبط بحاجز الجهد (V > 0.7 V للسيليكون) ممرراً التيار؛ ويحدد فرق الجهد العالي في أنبوبة كولدج أقصر طول موجي مستمر وفق قانون دوين-هانت.',
    apparatusEn: ['Silicon & Germanium p-n Junction Diodes', 'Dual-trace AC Rectifier oscilloscope with smoothing capacitor', 'NPN Bipolar Junction Transistor (BJT) Common-Emitter Circuit', 'High-voltage Coolidge X-Ray Tube with Tungsten/Molybdenum Target', 'X-Ray crystal spectrometer with scintillation detector'],
    apparatusAr: ['وصلات ثنائية p-n من السيليكون والجرمانيوم', 'راسم إشارة لتقويم التيار المتناوب مع مكثف تنعيم', 'دائرة ترانزستور NPN في وضع الباعث المشترك كمكبر وعاكس', 'أنبوبة كولدج لتوليد أشعة إكس بجهد عالي وهدف من التنجستن/الموليبدنوم', 'مطياف أشعة سينية بلوري مع كاشف وميضي'],
    stepsEn: [
      'Select Silicon p-n diode and sweep forward bias from 0 to 1.2 V; observe exponential conduction above V_bi ≈ 0.7 V.',
      'Switch to Full-Wave Bridge Rectifier mode; observe continuous positive half-cycles with ripple suppression as capacitance C increases.',
      'Configure BJT in Common-Emitter mode; verify that collector output AC sine wave displays a strict 180° phase inversion relative to base input.',
      'Operate Coolidge tube at accelerating potentials V = 30, 50, 70 kV; observe continuous Bremsstrahlung spectrum shift.',
      'Verify that minimum cutoff wavelength follows Duane-Hunt law: λ_min = 12.4 / V_kV Å.',
      'Exceed 69.5 kV on Tungsten target to trigger characteristic Kα and Kβ emission peaks.',
    ],
    stepsAr: [
      'اختر وصلة سيليكون ثنائية وزد جهد التوصيل الأمامي تدريجياً؛ لاحظ بدء التوصيل الأسي عند تجاوز حاجز الجهد V_bi ≈ 0.7 V.',
      'انتقل إلى وضع قنطرة التقويم الموجي الكامل؛ ولاحظ تقويم كلا نصفي الموجة وتلاشي التموج بزيادة سعة المكثف C.',
      'شغّل الترانزستور كقاعدة باعث مشترك؛ وتحقق من انعكاس طور إشارة الخرج بمقدار 180° بالنسبة لإشارة الدخل.',
      'اضبط جهد أنبوبة كولدج على 30، 50، و 70 kV وراقب زحف الطيف المستمر نحو أطوال موجية أقصر.',
      'تحقق من انطباق قانون دوين-هانت على أقصر طول موجي: λ_min = 12.4 / V_kV Å.',
      'ارفع الجهد فوق 69.5 kV لملاحظة ظهور قمتي الطيف الخطي المميز Kα و Kβ لهدف التنجستن.',
    ],
    formula: '\\lambda_{\\min} = \\frac{hc}{eV} = \\frac{12398}{V\\text{ (V)}} \\text{ \\AA}, \\quad I_C = \\beta I_B, \\quad V_r = \\frac{I_{\\text{dc}}}{2 f C}',
    expectedConclusionEn: 'Duane-Hunt cutoff validates quantum photon emission from electron kinetic deceleration, while p-n barrier and BJT current amplification govern modern electronic circuits.',
    expectedConclusionAr: 'يثبت حد دوين-هانت انبعاث فوتونات الكم إثر كبح الإلكترونات السريعة، وتؤكد خواص الوصلة والترانزستور مبادئ الإلكترونيات الحديثة.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة', labelEn: 'Trial' },
      { key: 'acc_v', labelAr: 'جهد التعجيل V', labelEn: 'Potential V', unit: 'kV' },
      { key: 'lambda_min', labelAr: 'أقصر طول موجي λ_min', labelEn: 'λ_min', unit: 'Å' },
      { key: 'photon_e', labelAr: 'طاقة الفوتون القصوى', labelEn: 'E_max', unit: 'keV' },
      { key: 'char_peaks', labelAr: 'القمم الخطية المميزة', labelEn: 'Characteristic Peaks' },
    ],
    sampleRows: [
      { trial: '1', acc_v: '30.0', lambda_min: '0.413', photon_e: '30.0', char_peaks: 'غير مفعلة (< 69.5 kV)' },
      { trial: '2', acc_v: '50.0', lambda_min: '0.248', photon_e: '50.0', char_peaks: 'غير مفعلة (< 69.5 kV)' },
      { trial: '3', acc_v: '70.0', lambda_min: '0.177', photon_e: '70.0', char_peaks: 'Kα (0.21 Å), Kβ (0.18 Å)' },
      { trial: '4', acc_v: '80.0', lambda_min: '0.155', photon_e: '80.0', char_peaks: 'Kα و Kβ بحدة فائقة' },
    ],
    sampleObservationsAr: 'أظهر الطيف المستمر زحفاً نحو الأطوال الموجية الأقصر مع زيادة الجهد، مع ثبوت مواقع القمم الخطية المميزة لهدف التنجستن.',
    sampleObservationsEn: 'Continuous Bremsstrahlung shifted toward shorter wavelengths under higher voltage, while characteristic peak locations remained completely stationary.',
    sampleErrorAnalysisAr: 'الحرارة المتولدة على الهدف المصعدي وفقد جزء من طاقة الإلكترونات كطاقة حرارية (99%).',
    sampleErrorAnalysisEn: 'High thermal dissipation on the tungsten anode target, where over 99% of electron kinetic energy converts to heat.',
  },

  // 6. Chemistry Le Chatelier
  'chem-exp-1': {
    id: 'chem-exp-1',
    discipline: 'chemistry',
    titleEn: 'Le Chatelier Principle in Nitrogen Dioxide Equilibrium (2NO2 <=> N2O4)',
    titleAr: 'تطبيق قاعدة لوشاتيليه على اتزان غازي ثاني أكسيد النيتروجين ورابع أكسيد النيتروجين',
    gradeEn: 'Grade 12 Chemistry - Chemical Equilibrium',
    gradeAr: 'الصف الثالث الثانوي - الاتزان الكيميائي والعوامل المؤثرة على موضع الاتزان',
    hypothesisEn: 'Cooling favors exothermic dimerization to colorless N2O4; increasing pressure shifts toward fewer moles.',
    hypothesisAr: 'التبريد يزيح الاتزان في الاتجاه الطارد للحرارة (تكوين N2O4 عديم اللون)، وزيادة الضغط تزيحه نحو الحجم الأقل.',
    apparatusEn: ['Sealed glass gas vessel with NO2/N2O4 mixture', 'Hot water bath (80°C)', 'Ice-water cooling bath (0°C)', 'Digital spectrophotometer for color intensity'],
    apparatusAr: ['أنبوبة زجاجية محكمة الإغلاق تحتوي خليط NO2 / N2O4', 'حمام مائي ساخن (80°C)', 'حمام ثلجي مبرد (0°C)', 'مقياس طيف ضوئي لقياس شدة اللون البني المحمر'],
    stepsEn: [
      'Place sealed vessel at room temperature (25°C) and observe pale reddish-brown color.',
      'Immerse in ice bath at 0°C; observe progressive fading to colorless as N2O4 forms.',
      'Transfer to boiling bath at 80°C; observe deepening of intense dark brown NO2 color.',
      'Apply pressure compression from 1.0 atm to 4.0 atm; verify volume shift toward N2O4.',
    ],
    stepsAr: [
      'ضع الأنبوبة المحكمة في درجة حرارة الغرفة (25°C) ولاحظ اللون البني المحمر الفاتح.',
      'اغمر الأنبوبة في حمام ثلجي عند 0°C؛ لاحظ اختفاء اللون تدريجياً لتكون N2O4.',
      'انقل الأنبوبة إلى حمام ساخن عند 80°C؛ لاحظ ازدياد حدة اللون البني المحمر الداكن NO2.',
      'ارفع الضغط من 1.0 atm إلى 4.0 atm؛ ولاحظ انزياح الاتزان نحو الحجم الأقل.',
    ],
    formula: '2\\text{NO}_2\\text{ (red-brown)} \\rightleftharpoons \\text{N}_2\\text{O}_4\\text{ (colorless)} + \\text{Heat} \\quad (\\Delta H < 0)',
    expectedConclusionEn: 'Exothermic reactions shift backward with heating and forward with cooling, in exact accordance with Le Chatelier principle.',
    expectedConclusionAr: 'التفاعلات الطاردة للحرارة تنزاح عكسياً بالتسخين وطردياً بالتبريد، تأكيداً تاماً لقاعدة لوشاتيليه.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة / الحالة', labelEn: 'Condition' },
      { key: 'temp', labelAr: 'درجة الحرارة T', labelEn: 'Temperature T', unit: '°C' },
      { key: 'pressure', labelAr: 'الضغط P', labelEn: 'Pressure P', unit: 'atm' },
      { key: 'absorbance', labelAr: 'الامتصاصية الضوئية A (شدة اللون)', labelEn: 'Absorbance A' },
      { key: 'dominant_species', labelAr: 'الغاز السائد', labelEn: 'Dominant Gas' },
    ],
    sampleRows: [
      { trial: '1 (غرفة)', temp: '25.0', pressure: '1.0', absorbance: '0.45', dominant_species: 'خليط متزن (بني فاتح)' },
      { trial: '2 (تبريد)', temp: '0.0', pressure: '1.0', absorbance: '0.05', dominant_species: 'N2O4 عديم اللون (طردي)' },
      { trial: '3 (تسخين)', temp: '80.0', pressure: '1.0', absorbance: '0.88', dominant_species: 'NO2 بني داكن (عكسي)' },
      { trial: '4 (ضغط عالي)', temp: '25.0', pressure: '3.5', absorbance: '0.22', dominant_species: 'انزياح نحو N2O4 (حجم أقل)' },
    ],
    sampleObservationsAr: 'تلاشى اللون البني المحمر بسرعة عند غمر الأنبوبة في الثلج، وعاد للظهور بحدة فور نقلها للماء المغلي.',
    sampleObservationsEn: 'Reddish-brown color cleared completely upon ice immersion, and rapidly intensified to deep brown in the boiling water bath.',
    sampleErrorAnalysisAr: 'تسرب طفيف للحرارة عبر جدران الأنبوبة الزجاجية وتأخر الاتزان الحراري مع الحمام المائي.',
    sampleErrorAnalysisEn: 'Slow thermal conductivity across the glass tube boundary delaying rapid thermal equilibrium.',
  },

  // 7. Chemistry Titration
  'chem-exp-2': {
    id: 'chem-exp-2',
    discipline: 'chemistry',
    titleEn: 'Volumetric Acid-Base Neutralization Titration',
    titleAr: 'المعايرة الحجمية بالتعادل لتعيين تركيز محلول حمض الهيدروكلوريك',
    gradeEn: 'Grade 12 Chemistry - Quantitative Chemical Analysis',
    gradeAr: 'الصف الثالث الثانوي - التحليل الكيميائي الكمي الحجمي',
    hypothesisEn: 'Equivalence is reached when moles of H+ equal moles of OH-: (Ma·Va)/na = (Mb·Vb)/nb.',
    hypothesisAr: 'تتحقق نقطة التعادل والتكافؤ تماماً عندما تتساوى مولات H+ مع مولات OH-: (Ma·Va)/na = (Mb·Vb)/nb.',
    apparatusEn: ['50 mL Precision Buret', '25 mL Volumetric Pipet', 'Erlenmeyer Flask', 'Standard 0.1 M NaOH solution', 'HCl solution of unknown molarity', 'Phenolphthalein indicator'],
    apparatusAr: ['سحاحة مدرجة سعة ٥٠ مل', 'ماصة عيارية سعة ٢٥ مل', 'دورق مخروطي', 'محلول قياسي معلوم التركيز من NaOH 0.1 M', 'حمض HCl مجهول التركيز', 'دليل الفينولفثالين'],
    stepsEn: [
      'Transfer 25.0 mL of unknown HCl into Erlenmeyer flask using pipet.',
      'Add 2-3 drops of phenolphthalein indicator (colorless in acid).',
      'Fill buret with standard 0.10 M NaOH and record initial reading.',
      'Titrate dropwise with swirling until the first faint persistent pink color appears.',
      'Record final buret volume Vb and calculate acid molarity Ma.',
    ],
    stepsAr: [
      'انقل 25.0 mL من حمض HCl مجهول التركيز إلى الدورق المخروطي بالماصة.',
      'أضف قطرتين من دليل الفينولفثالين (عديم اللون في الوسط الحمضي).',
      'املأ السحاحة بمحلول NaOH القياسي بتركيز 0.10 M وسجل القراءة الابتدائية.',
      'أضف القلوي قطرة بقطرة مع التقليب المستمر حتى ظهور أول لون وردي خفيف مستديم.',
      'سجل حجم القلوي المستهلك Vb واحسب تركيز الحمض Ma بمعادلة المعايرة.',
    ],
    formula: '\\frac{M_a \\cdot V_a}{n_a} = \\frac{M_b \\cdot V_b}{n_b} \\implies M_a = \\frac{M_b \\cdot V_b}{V_a}',
    expectedConclusionEn: 'Sharp pH transition across equivalence point indicates quantitative stoichiometric neutralization.',
    expectedConclusionAr: 'التغير المفاجئ في قيمة الأس الهيدروجيني pH عند نقطة التكافؤ يحدد التركيز المولي بدقة استثنائية.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة', labelEn: 'Trial' },
      { key: 'v_acid', labelAr: 'حجم الحمض Va', labelEn: 'Acid Volume Va', unit: 'mL' },
      { key: 'v_base_init', labelAr: 'القراءة الابتدائية للسحاحة', labelEn: 'Initial Buret', unit: 'mL' },
      { key: 'v_base_final', labelAr: 'القراءة النهائية للسحاحة', labelEn: 'Final Buret', unit: 'mL' },
      { key: 'v_base_used', labelAr: 'حجم القلوي المستهلك Vb', labelEn: 'Base Used Vb', unit: 'mL' },
      { key: 'm_acid', labelAr: 'تركيز الحمض المحسوب Ma', labelEn: 'Acid Molarity Ma', unit: 'M' },
    ],
    sampleRows: [
      { trial: '1', v_acid: '25.0', v_base_init: '0.00', v_base_final: '20.10', v_base_used: '20.10', m_acid: '0.0804' },
      { trial: '2', v_acid: '25.0', v_base_init: '20.10', v_base_final: '40.05', v_base_used: '19.95', m_acid: '0.0798' },
      { trial: '3', v_acid: '25.0', v_base_init: '0.00', v_base_final: '20.00', v_base_used: '20.00', m_acid: '0.0800' },
    ],
    sampleObservationsAr: 'تحول لون الدليل فجأة من عديم اللون إلى وردي فاتح مستديم لأكثر من 30 ثانية عند إضافة نقطة واحدة عند الحجم 20.0 mL.',
    sampleObservationsEn: 'Color shifted instantaneously from clear to persistent faint pink lasting over 30 seconds upon adding a single drop at 20.0 mL.',
    sampleErrorAnalysisAr: 'قطرة زائدة عند نهاية المعايرة (Over-titration) وخطأ قراءة أسفل مقعر سطح السائل في السحاحة.',
    sampleErrorAnalysisEn: 'Single extra drop beyond exact equivalence (over-titration) and meniscus reading parallax.',
  },

  // 8. Chemistry Daniell Cell
  'chem-exp-3': {
    id: 'chem-exp-3',
    discipline: 'chemistry',
    titleEn: 'Daniell Galvanic Cell EMF & Concentration Shifts via Nernst Equation',
    titleAr: 'تعيين القوة الدافعة الكهربية لخلية دانيال وأثر التركيز بمعادلة نيرنست',
    gradeEn: 'Grade 12 Chemistry - Electrochemistry & Galvanic Cells',
    gradeAr: 'الصف الثالث الثانوي - الكيمياء الكهربية والخلايا الجلفانية وإنتاج الطاقة',
    hypothesisEn: 'Standard Daniell potential E° = 1.10 V decreases as [Zn²⁺] increases and increases as [Cu²⁺] increases via Nernst equation.',
    hypothesisAr: 'قوة الخلية القياسية E° = 1.10 V تنخفض بزيادة تركيز [Zn²⁺] وتزداد بزيادة تركيز [Cu²⁺] وفق معادلة نيرنست.',
    apparatusEn: ['Zinc anode in ZnSO4 solution', 'Copper cathode in CuSO4 solution', 'KNO3 agar salt bridge', 'High-impedance digital millivoltmeter', 'External connecting circuit with indicator bulb'],
    apparatusAr: ['لوح خارصين (مصعد) مغمور في محلول ZnSO4', 'لوح نحاس (مهبط) مغمور في محلول CuSO4', 'قنطرة ملحية زجاجية بها هلام أجار ونترات بوتاسيوم KNO3', 'فولتميتر رقمي عالي الدقة', 'دائرة توصيل خارجية ومصباح إضاءة'],
    stepsEn: [
      'Assemble Daniell cell with 1.0 M Zn²⁺ and 1.0 M Cu²⁺ at standard 25°C.',
      'Measure standard electromotive force E°cell on the voltmeter (1.10 V).',
      'Increase anode [Zn²⁺] to 2.0 M and observe EMF drop due to backward shift.',
      'Increase cathode [Cu²⁺] to 2.0 M and observe positive rebound in cell voltage.',
      'Verify calculated Gibbs free energy change ΔG < 0, confirming spontaneous reaction.',
    ],
    stepsAr: [
      'ركّب خلية دانيال بمحلولي Zn²⁺ و Cu²⁺ بتركيز 1.0 M عند درجة حرارة 25°C القياسية.',
      'قِس القوة الدافعة الكهربية القياسية E°cell على شاشة الفولتميتر (1.10 V).',
      'زد تركيز أيونات المصعد [Zn²⁺] إلى 2.0 M ولاحظ انخفاض الجهد طبقاً لقاعدة لوشاتيليه.',
      'زد تركيز أيونات المهبط [Cu²⁺] إلى 2.0 M ولاحظ ارتفاع الجهد الناتج من الخلية.',
      'تحقق من أن التغير في طاقة جيبس الحرة ΔG < 0 سالب، مما يؤكد تلقائية التفاعل الكيميائي.',
    ],
    formula: 'E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{RT}{nF} \\ln\\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}, \\quad \\Delta G = -nFE_{\\text{cell}}',
    expectedConclusionEn: 'Chemical redox energy converts spontaneously into electric current; removing the salt bridge disrupts neutrality and immediately halts current.',
    expectedConclusionAr: 'تتحول طاقة تفاعل الأكسدة والاختزال التلقائي إلى تيار كهربي؛ ونزع القنطرة الملحية يوقف سريان التيار في الحال.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة', labelEn: 'Trial' },
      { key: 'zn_conc', labelAr: 'تركيز المصعد [Zn²⁺]', labelEn: 'Anode [Zn²⁺]', unit: 'M' },
      { key: 'cu_conc', labelAr: 'تركيز المهبط [Cu²⁺]', labelEn: 'Cathode [Cu²⁺]', unit: 'M' },
      { key: 'cell_emf', labelAr: 'ق.د.ك المقاسة E_cell', labelEn: 'Measured EMF', unit: 'V' },
      { key: 'delta_g', labelAr: 'طاقة جيبس الحرة ΔG', labelEn: 'Gibbs ΔG', unit: 'kJ/mol' },
    ],
    sampleRows: [
      { trial: '1 (قياسي)', zn_conc: '1.00', cu_conc: '1.00', cell_emf: '1.100', delta_g: '-212.3' },
      { trial: '2 (تركيز مصعد)', zn_conc: '2.00', cu_conc: '1.00', cell_emf: '1.091', delta_g: '-210.5' },
      { trial: '3 (تركيز مهبط)', zn_conc: '1.00', cu_conc: '2.00', cell_emf: '1.109', delta_g: '-214.0' },
      { trial: '4 (مهبط مخفف)', zn_conc: '1.00', cu_conc: '0.10', cell_emf: '1.070', delta_g: '-206.5' },
    ],
    sampleObservationsAr: 'توقف التيار وانعدمت قراءة الفولتميتر تماماً فور نزع القنطرة الملحية نتيجة تراكم الشحنات الموجبة في نصف خلية المصعد والسالبة في نصف خلية المهبط.',
    sampleObservationsEn: 'Current halted instantly to 0.00 V upon pulling the salt bridge, demonstrating accumulation of opposing ionic charges.',
    sampleErrorAnalysisAr: 'تكون طبقة أكسيد رقيقة على قطب الخارصين ومقاومة محلول الإلكتروليت في القنطرة الملحية.',
    sampleErrorAnalysisEn: 'Surface oxide film on the zinc plate and ionic junction resistance across the porous agar salt bridge.',
  },

  // 9. Chemistry Organic
  'chem-exp-4': {
    id: 'chem-exp-4',
    discipline: 'chemistry',
    titleEn: 'Organic Synthesis: Benzene Electrophilic Substitution & Fischer Esterification',
    titleAr: 'التخليق العضوي: توجيه الاستبدال في حلقة البنزين والاتزان في تكوين الإسترات',
    gradeEn: 'Grade 12 Chemistry - Organic Chemistry (Chapter 5)',
    gradeAr: 'الصف الثالث الثانوي - الكيمياء العضوية (الهيدروكربونات الأروماتية ومشتقاتها)',
    hypothesisEn: 'Activating ortho/para groups stabilize arenium ion resonance; water extraction in Fischer esterification drives yield past equilibrium.',
    hypothesisAr: 'المجموعات المعطية للإلكترونات توجه لموضعي أرثو وبارا عبر استقرار أيون الأرينيوم، ونزع الماء في تكوين الإستر يزيح الاتزان لزيادة المردود.',
    apparatusEn: ['Benzene EAS Reaction Chamber with catalysts', 'Electronic Resonance Arenium Ion Wheland Complex Visualizer', 'Reflux setup with round-bottom flask and Liebig condenser', 'Dean-Stark water separator for Le Chatelier equilibrium shift', 'Carboxylic acid and alcohol fragrance synthesis catalog'],
    apparatusAr: ['غرفة تفاعل الاستبدال الإلكتروفيلي في البنزين مع عوامل حفازة', 'مستعرض الرنين الإلكتروني لأيون الأرينيوم (معقد ويلاند)', 'جهاز تكثيف مرتد ودورق كروي ومكثف ليبيج للتسخين', 'مصيدة دين-ستارك لنزع الماء وإزاحة الاتزان وفق لوشاتيليه', 'كتالوج الأحماض الكربوكسيلية والكحولات لتخليق النكهات والعطور'],
    stepsEn: [
      'Select Toluene (-CH3) and react with nitrating mixture at 50°C.',
      'Observe directing effect yielding ortho and para nitrotoluene due to resonance stabilization.',
      'Select Nitrobenzene (-NO2) and perform bromination; confirm selective meta-bromonitrobenzene formation.',
      'Synthesize Isoamyl acetate (Banana aroma) from Acetic acid and Isoamyl alcohol with conc. H2SO4.',
      'Observe reversible equilibrium limit at ≈66.7% yield under closed conditions.',
      'Engage water extraction via dehydrating agent; observe Le Chatelier shift propelling yield to >95%.',
    ],
    stepsAr: [
      'اختر التولوين (-CH3) وفاعله مع خليط النيترة عند 50°C.',
      'لاحظ التوجيه لموضعي أرثو وبارا لتكوين أرثو وبارا نيتروتولوين بفعل استقرار البنية الرنينية.',
      'اختر النيتروبنزين (-NO2) وقم بإجراء البرومة؛ تحقق من التوجيه الحصري للموضع ميتا.',
      'قم بتخليق إستر أسيتات الأيزوأميل (رائحة الموز) من حمض الأسيتيك وكحول الأيزوأميل بحمض كبريتيك مركز.',
      'سجّل وصول التفاعل إلى حالة اتزان ديناميكي عند مردود يقارب 66.7% في الظروف العادية.',
      'فعّل نزع الماء بواسطة مادة نازعة للماء؛ ولاحظ انزياح الاتزان طردياً ليتجاوز المردود 95%.',
    ],
    formula: '\\text{R-COOH} + \\text{R\'-OH} \\xrightleftharpoons[\\text{conc. } \\text{H}_2\\text{SO}_4]{\\Delta} \\text{R-COOR\'} + \\text{H}_2\\text{O}, \\quad K_c = \\frac{[\\text{Ester}][\\text{H}_2\\text{O}]}{[\\text{Acid}][\\text{Alcohol}]}',
    expectedConclusionEn: 'Aromatic directing groups are dictated by carbocation resonance delocalization, and esterification equilibrium is successfully shifted forward by Le Chatelier principle.',
    expectedConclusionAr: 'تحدد شحنة الرنين الإلكتروني في مركب ويلاند نواتج الاستبدال، ويثبت إزاحة اتزان الأسترة بنزع الماء صحة قاعدة لوشاتيليه.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة / التفاعل', labelEn: 'Reaction System' },
      { key: 'reactants', labelAr: 'المتفاعلات', labelEn: 'Reactants' },
      { key: 'conditions', labelAr: 'الظروف والحفاز', labelEn: 'Catalyst / Conditions' },
      { key: 'major_product', labelAr: 'الناتج الرئيسي الموجه', labelEn: 'Major Product' },
      { key: 'yield_pct', labelAr: 'المردود المئوي %', labelEn: 'Yield %', unit: '%' },
    ],
    sampleRows: [
      { trial: '1', reactants: 'تولوين + خليط نيترة', conditions: 'حمض كبريتيك مركز عند 50°C', major_product: 'أرثو وبارا نيتروتولوين (توجيه أرثو/بارا)', yield_pct: '88.5' },
      { trial: '2', reactants: 'نيتروبنزين + بروم', conditions: 'بروميد حديد ثلاثي FeBr3 وتسخين', major_product: 'ميتا-برومونيتروبنزين (توجيه ميتا)', yield_pct: '82.0' },
      { trial: '3', reactants: 'حمض أسيتيك + كحول أيزوأميل', conditions: 'حمض كبريتيك مغلق (اتزان)', major_product: 'أسيتات الأيزوأميل (رائحة الموز)', yield_pct: '66.7' },
      { trial: '4', reactants: 'حمض أسيتيك + كحول أيزوأميل', conditions: 'نزع الماء المستمر (Dean-Stark)', major_product: 'أسيتات الأيزوأميل (إزاحة طردية لوشاتيليه)', yield_pct: '96.2' },
    ],
    sampleObservationsAr: 'انتشار رائحة الموز المميزة العطرة فور إضافة بضع قطرات من حمض الكبريتيك المركز والتسخين الهادئ، وارتفاع المردود عند سحب الماء.',
    sampleObservationsEn: 'Distinct fragrant banana aroma emerged immediately upon catalytic H2SO4 addition, with yield leaping from 66% to 96% upon water removal.',
    sampleErrorAnalysisAr: 'تطاير جزء من الكحول أثناء التسخين قبل تمام التكثيف الارتجاعي وتفاعلات جانبية طفيفة للأسترة.',
    sampleErrorAnalysisEn: 'Minor volatile alcohol evaporation prior to full reflux condensation and trace side dehydration products.',
  },

  // 10. Biology Sarcomere
  'bio-exp-1': {
    id: 'bio-exp-1',
    discipline: 'biology',
    titleEn: 'Sarcomere Contraction Mechanism & Muscle Tetany / Fatigue',
    titleAr: 'آلية انقباض الساركومير في اللييفة العضلية والشد العضلي والإجهاد',
    gradeEn: 'Grade 12 Biology - Support & Movement',
    gradeAr: 'الصف الثالث الثانوي - الدعامة والحركة في الكائنات الحية (انقباض العضلات الهيكلية)',
    hypothesisEn: 'Myosin cross-bridges require Ca²⁺ to attach to actin and ATP to detach; ATP deficiency causes sustained spasm.',
    hypothesisAr: 'تتطلب الروابط المستعرضة للميوسين أيونات الكالسيوم Ca²⁺ للاتصال بالأكتين وطاقة ATP للانفصال؛ ونقص ATP يسبب شد عضلي مستمر.',
    apparatusEn: ['Interactive Electron Microscopy Sarcomere Simulator', 'Calcium ion Ca²⁺ influx controller', 'ATP energy reservoir slider', 'Myofibril dimension calipers'],
    apparatusAr: ['محاكي الساركومير المجهري ثلاثي الأبعاد', 'مفتاح تدفق أيونات الكالسيوم Ca²⁺', 'منزلق مخزون طاقة ATP', 'محدد أبعاد القطعة العضلية (المناطق المضيئة والداكنة وشبه المضيئة)'],
    stepsEn: [
      'Examine relaxed sarcomere at rest length 2.8 µm (wide H-zone and I-bands).',
      'Toggle Calcium influx ON to expose actin binding sites via troponin-tropomyosin shift.',
      'Observe myosin heads pulling actin filaments toward sarcomere center (Z-discs approach).',
      'Notice A-band remains strictly constant at 1.5 µm while H-zone completely disappears.',
      'Deplete ATP supply while calcium remains present; observe persistent painful muscle spasm.',
    ],
    stepsAr: [
      'افحص القطعة العضلية المنبسطة عند طول 2.8 µm (المنطقة شبه المضيئة H والمضيئة I متسعة).',
      'فعّل تدفق أيونات الكالسيوم Ca²⁺ لكشف مواقع الارتباط على خيوط الأكتين.',
      'لاحظ سحب رؤوس الميوسين لخيوط الأكتين نحو مركز الساركومير وتقارب خطي Z.',
      'لاحظ بقاء طول المنطقة الداكنة A ثابتاً تماماً عند 1.5 µm بينما تختفي المنطقة H.',
      'استنفد مخزون طاقة ATP مع بقاء الكالسيوم؛ ولاحظ حدوث الشد العضلي المؤلم لعدم انفصال الروابط.',
    ],
    formula: '\\text{Contraction}: \\Delta Z < 0, \\quad \\Delta I < 0, \\quad \\Delta H \\to 0, \\quad \\text{Length}(A) = \\text{Constant}',
    expectedConclusionEn: 'Sliding filament theory explains muscle contraction via cross-bridge ratchet; ATP is mandatory for relaxation.',
    expectedConclusionAr: 'تثبت نظرية الخيوط المنزلقة لهكسلي أن حركة الجسور المستعرضة تعتمد على الكالسيوم، وأن ATP ضروري لفك الارتباط والانبساط.',
    columns: [
      { key: 'state', labelAr: 'الحالة الفسيولوجية', labelEn: 'State' },
      { key: 'sarcomere_len', labelAr: 'طول الساركومير (Z-to-Z)', labelEn: 'Sarcomere Length', unit: 'µm' },
      { key: 'a_band', labelAr: 'طول المنطقة الداكنة A', labelEn: 'A-Band Length', unit: 'µm' },
      { key: 'i_band', labelAr: 'طول المنطقة المضيئة I', labelEn: 'I-Band Length', unit: 'µm' },
      { key: 'h_zone', labelAr: 'المنطقة شبه المضيئة H', labelEn: 'H-Zone Width', unit: 'µm' },
    ],
    sampleRows: [
      { state: 'انبساط تام (Relaxed)', sarcomere_len: '2.80', a_band: '1.50', i_band: '1.30', h_zone: '0.80' },
      { state: 'انقباض جزئي (Active)', sarcomere_len: '2.20', a_band: '1.50', i_band: '0.70', h_zone: '0.30' },
      { state: 'انقباض تام (Maximal)', sarcomere_len: '1.80', a_band: '1.50', i_band: '0.30', h_zone: '0.00 (تلاشت)' },
      { state: 'شد عضلي مستمر (Tetany)', sarcomere_len: '1.75', a_band: '1.50', i_band: '0.25', h_zone: '0.00 (مغلقة)' },
    ],
    sampleObservationsAr: 'ثبوت طول المنطقة الداكنة A تماماً عند 1.5 ميكرومتر في جميع الحالات، مع اختفاء المنطقة شبه المضيئة H كلياً عند الانقباض التام.',
    sampleObservationsEn: 'A-band length remained absolutely invariant at 1.5 µm across all states, while H-zone fully collapsed to zero during maximal contraction.',
    sampleErrorAnalysisAr: 'تأخر ضخ الكالسيوم في الشبكة الساركوبلازمية وتفاوت كفاءة تخليق ATP في اللييفات.',
    sampleErrorAnalysisEn: 'Slight delay in sarcoplasmic reticulum calcium ATPase pumping and localized ATP diffusion gradients.',
  },

  // 11. Biology DNA Transcription
  'bio-exp-2': {
    id: 'bio-exp-2',
    discipline: 'biology',
    titleEn: 'DNA Sequence Complementarity, Transcription & Translation',
    titleAr: 'تكامل شريطي DNA، النسخ إلى mRNA، وترجمة الشفرة إلى ببتيد',
    gradeEn: 'Grade 12 Biology - Molecular Biology & Genetics',
    gradeAr: 'الصف الثالث الثانوي - البيولوجيا الجزيئية: تركيب DNA وتخليق البروتين',
    hypothesisEn: 'Antiparallel strands follow Chargaff parity: A pairs with T (2 H-bonds) and G pairs with C (3 H-bonds).',
    hypothesisAr: 'الشريطان المتعاكسان يحققان قاعدة تشارجاف: الأدنين يرتبط بالثايمين برابطتين، والجوانين بالسيتوزين بثلاث روابط هيدروجينية.',
    apparatusEn: ['Digital DNA Nucleotide Sequence Builder', 'Antiparallel strand generator (3\' -> 5\')', 'RNA Polymerase transcription engine', 'Ribosome codon decoder'],
    apparatusAr: ['استوديو بناء تتابع نيوكليوتيدات DNA', 'مولد الشريط المكمل المتعاكس 3\' -> 5\'', 'محاكي إنزيم بلمرة RNA للنسخ', 'محرك فك الشفرة الوراثية بالريبوسوم'],
    stepsEn: [
      'Enter 5\' -> 3\' sequence: AUG UUU GGC UAA.',
      'Verify automatic generation of complementary 3\' -> 5\' strand.',
      'Calculate total hydrogen bonds (2 per A-T and 3 per G-C).',
      'Trigger mRNA transcription: T is replaced by U.',
      'Follow ribosome translation: Identify Start codon AUG (Met), Glycine, and Stop codon UAA.',
    ],
    stepsAr: [
      'أدخل التتابع من 5\' إلى 3\': AUG UUU GGC UAA.',
      'تحقق من التوليد التلقائي للشريط المكمل المتعاكس من 3\' إلى 5\'.',
      'احسب إجمالي الروابط الهيدروجينية (رابطتان لـ A-T وثلاث روابط لـ G-C).',
      'فعّل نسخ mRNA مع استبدال الثايمين T باليوراسيل U.',
      'تابع ترجمة الريبوسوم: تعرّف على كودون البدء AUG (ميثيونين)، ثم بقية الأحماض وكودون الوقف UAA.',
    ],
    formula: '\\text{Chargaff}: \\%A = \\%T, \\quad \\%G = \\%C, \\quad \\%\\text{Purines} = \\%\\text{Pyrimidines} = 50\\%',
    expectedConclusionEn: 'Complementary base pairing ensures faithful replication and accurate genetic message transmission to proteins.',
    expectedConclusionAr: 'يضمن التكامل الدقيق بين القواعد تضاعفاً دقيقاً ونقلاً أميناً للمعلومات الوراثية لبناء البروتين.',
    columns: [
      { key: 'triplet', labelAr: 'رقم الثلاثية', labelEn: 'Triplet #' },
      { key: 'dna_coding', labelAr: 'شريط DNA الناسخ (3\'->5\')', labelEn: 'Template DNA (3\'->5\')' },
      { key: 'mrna_codon', labelAr: 'كودون mRNA (5\'->3\')', labelEn: 'mRNA Codon' },
      { key: 'trna_anticodon', labelAr: 'مضاد الكودون tRNA', labelEn: 'tRNA Anticodon' },
      { key: 'amino_acid', labelAr: 'الحمض الأميني المترجم', labelEn: 'Translated Amino Acid' },
    ],
    sampleRows: [
      { triplet: '1', dna_coding: 'TAC', mrna_codon: 'AUG', trna_anticodon: 'UAC', amino_acid: 'ميثيونين (كودون بدء)' },
      { triplet: '2', dna_coding: 'AAA', mrna_codon: 'UUU', trna_anticodon: 'AAA', amino_acid: 'فينيل ألانين (Phe)' },
      { triplet: '3', dna_coding: 'CCG', mrna_codon: 'GGC', trna_anticodon: 'CCG', amino_acid: 'جلايسين (Gly)' },
      { triplet: '4', dna_coding: 'ATT', mrna_codon: 'UAA', trna_anticodon: 'عامل إطلاق', amino_acid: 'توقف الترجمة (Stop)' },
    ],
    sampleObservationsAr: 'توقف تخليق عديد الببتيد فور وصول الريبوسوم لكودون الوقف UAA وارتباط عامل الإطلاق دون إدخال أي حمض أميني رابع.',
    sampleObservationsEn: 'Polypeptide elongation terminated cleanly upon ribosome encountering stop codon UAA via release factor binding.',
    sampleErrorAnalysisAr: 'إمكانية حدوث طفرة استبدال صامتة في القاعدة الثالثة للكودون (Wobble hypothesis).',
    sampleErrorAnalysisEn: 'Degeneracy of the genetic code where third-base silent mutations may not alter primary peptide structure.',
  },

  // 12. Biology Immunity
  'bio-exp-7': {
    id: 'bio-exp-7',
    discipline: 'biology',
    titleEn: 'Dynamic Immune Defense: Macrophage Phagocytosis, MHC-II & Perforin Apoptosis',
    titleAr: 'خطوط الدفاع المناعي: بلعمة البلعمية وعرض MHC-II وتثقيب البيرفورين',
    gradeEn: 'Grade 12 Biology - Immunology (Chapter 4)',
    gradeAr: 'الصف الثالث الثانوي - المناعة في الكائنات الحية (آلية عمل الجهاز المناعي)',
    hypothesisEn: 'Antigen phagocytosis and MHC-II presentation triggers helper T-cell interleukin secretion, coordinating cytotoxic perforin pore-forming cell lysis.',
    hypothesisAr: 'بلعمة الميكروب وعرض أنتيجيناته على بروتين التوافق النسيجي MHC-II ينشط الخلايا التائية المساعدة لإفراز الإنترلوكينات وتنشيط التائية السامة لإفراز البيرفورين.',
    apparatusEn: ['Live 60-FPS Microscopic Cellular Immune Field', 'Macrophage phagocytic pseudopodia controller', 'Lysosome hydrolytic enzyme vesicle injector', 'MHC-II membrane antigen display monitor', 'Helper T (CD4+) & Cytotoxic T (CD8+) cell recruiters'],
    apparatusAr: ['حقل مجهري حي لمراقبة خلايا المناعة بمعدل 60 إطار/ثانية', 'متحكم أقدام البلعمية الكبيرة الكاذبة لابتلاع الميكروب', 'حاقن الإنزيمات المحللة لليسوسومات', 'شاشة عرض بروتين التوافق النسيجي MHC-II على الغشاء', 'وحدة تنشيط الخلايا التائية المساعدة TH والسامة TC'],
    stepsEn: [
      'Engage large phagocytic macrophage pseudopodia around microbial bacterium.',
      'Fuse phagosome with digestive lysosomes; observe enzymatic lysis into peptide antigens.',
      'Bind antigenic fragments to MHC-II and translocate complex to external macrophage membrane.',
      'Recruit CD4+ Helper T cell; observe CD4 docking onto MHC-II, triggering Interleukin burst.',
      'Activate Cytotoxic T cell (CD8+); observe targeted perforin secretion polymerizing membrane attack pores.',
    ],
    stepsAr: [
      'وجّه الأقدام الكاذبة للخلية البلعمية الكبيرة للإحاطة بالبكتيريا الغازية.',
      'ادمج الحويصلة البلعمية مع الليسوسومات المحللة؛ وراقب تفكيك الميكروب إلى شظايا أنتيجينية.',
      'اربط شظايا الأنتيجين ببروتين التوافق النسيجي MHC-II وانقله إلى السطح الخارجي للبلعمية.',
      'وجّه الخلية التائية المساعدة TH بمستقبل CD4 للارتباط بالمعقد، مفرزة الإنترلوكينات.',
      'نشّط الخلية التائية السامة TC بمستقبل CD8؛ ولاحظ إفراز بروتين البيرفورين المثقب لغشاء الخلية المصابة.',
    ],
    formula: '\\text{Immune Cascade}: \\text{Macrophage}+\\text{Ag} \\xrightarrow{\\text{Lysosome}} [\\text{Ag-MHC-II}] \\xrightarrow{\\text{CD4}} \\text{IL-2} \\xrightarrow{\\text{CD8}} \\text{Perforin (Pores)}',
    expectedConclusionEn: 'Innate and adaptive immunity coordinate seamlessly via MHC-II presentation and lymphokine signalling to eliminate foreign pathogens.',
    expectedConclusionAr: 'تتكامل المناعة الفطرية والمتخصصة عبر عرض الأنتيجين على MHC-II وإشارات السيتوكينات والبيرفورين للقضاء التام على مسببات المرض.',
    columns: [
      { key: 'phase', labelAr: 'مرحلة الاستجابة المناعية', labelEn: 'Immune Stage' },
      { key: 'cell_type', labelAr: 'الخلية الفاعلة', labelEn: 'Effector Cell' },
      { key: 'receptor', labelAr: 'المستقبل / الوسيط', labelEn: 'Receptor / Molecule' },
      { key: 'action', labelAr: 'الحدث البيولوجي', labelEn: 'Biological Action' },
      { key: 'outcome', labelAr: 'النتيجة المناعية', labelEn: 'Outcome' },
    ],
    sampleRows: [
      { phase: '1. التعرف والبلعمة', cell_type: 'بلعمية كبيرة (Macrophage)', receptor: 'أقدام كاذبة + ليسوسومات', action: 'ابتلاع الميكروب وتفكيكه بإنزيمات الليسوسوم', outcome: 'تفتيت أنتيجينات البكتيريا' },
      { phase: '2. العرض الغشائي', cell_type: 'بلعمية كبيرة عارضة', receptor: 'بروتين التوافق النسيجي MHC-II', action: 'ربط شظايا الأنتيجين وعرضها على الغشاء', outcome: 'جاهزية للتنبيه المناعي' },
      { phase: '3. التنشيط المساعد', cell_type: 'تائية مساعدة (TH)', receptor: 'مستقبل CD4 النوعي', action: 'الارتباط بمعقد MHC-II وإفراز إنترلوكينات', outcome: 'إطلاق إشارات التحفيز المناعي' },
      { phase: '4. التثقيب القاتل', cell_type: 'تائية سامة (TC)', receptor: 'مستقبل CD8 + بيرفورين', action: 'إفراز بروتين صانع الثقوب والسموم الليمفاوية', outcome: 'تحلل الخلية المصابة وموتها' },
    ],
    sampleObservationsAr: 'تثقب غشاء الخلية الهدف وتدفق السوائل إلى داخلها مسبباً انفجارها وموتها إثر إفراز البيرفورين من حبيبات الخلية التائية السامة.',
    sampleObservationsEn: 'Target cell membrane showed multiple circular perforation pores leading to osmotic lysis following perforin secretion.',
    sampleErrorAnalysisAr: 'إمكانية إخفاء بعض الفيروسات لبروتين MHC-I لتفادي الخلايا التائية السامة (تتدخل الخلايا القاتلة الطبيعية NK للتصدي لها).',
    sampleErrorAnalysisEn: 'Pathogen down-regulation of surface MHC molecules evading classical T-cell lysis (countered by Natural Killer NK surveillance).',
  },

  // 13. Math De Moivre & Complex
  'math-exp-5': {
    id: 'math-exp-5',
    discipline: 'math',
    titleEn: 'Complex Numbers & De Moivre Theorem: Argand Representation & n-th Roots of Unity',
    titleAr: 'الأعداد المركبة ونظرية ديموافر: شكل أرجاند والجذور النونية للواحد الصحيح (أوميجا)',
    gradeEn: 'Grade 12 Pure Math - Algebra (Chapter 2)',
    gradeAr: 'الصف الثالث الثانوي - الجبر العام: الأعداد المركبة ونظرية ديموافر والجذور التكعيبية',
    hypothesisEn: 'Any complex number z = r·cis(θ) has n distinct roots distributed symmetrically on a circle of radius r^(1/n) at 360°/n intervals.',
    hypothesisAr: 'أي عدد مركب z له n من الجذور النونية تقع رؤوسها على دائرة نصف قطرها الجذر النوني للمقياس r^(1/n) وتتباعد بزوايا متساوية 360°/n مكونة مضلعاً منتظماً.',
    apparatusEn: ['Interactive Argand Coordinate Plane with Modulus Circles', 'Cartesian Real-Imaginary coordinate sliders (x, y)', 'Polar & Euler exponential notation converter (r, θ)', 'Conjugate & Additive Inverse symmetry reflection toggles', 'De Moivre n-th Root cyclic polygon engine (n = 2 to 6)', 'Cubic roots of unity and omega algebraic identity validator'],
    apparatusAr: ['مستوى أرجاند الإحداثي التفاعلي مع دوائر المقياس', 'منزلقات الإحداثيات الديكارتية الحقيقية والتخيلية (x, y)', 'محول الصيغة القطبية والأسية لأويلر (r, θ)', 'مفاتيح انعكاس المرافق والمعكوس الجمعي', 'مولد الجذور النونية والمضلعات المنتظمة لنظرية ديموافر', 'محلل الجذور التكعيبية للواحد الصحيح ومتطابقات أوميجا'],
    stepsEn: [
      'Set Cartesian coordinates x = 3 and y = 3; observe representation of z = 3 + 3i in the first quadrant.',
      'Verify calculated modulus r = 3√2 ≈ 4.24 and principal argument θ = 45° (π/4 rad).',
      'Toggle complex conjugate z̄ = 3 - 3i; observe real-axis reflection in fourth quadrant with argument -45°.',
      'Toggle additive inverse -z = -3 - 3i; observe origin point-reflection in third quadrant with argument -135°.',
      'Switch to De Moivre Roots tab and set root order n = 3 (cubic roots).',
      'Verify that all 3 roots lie on circle of radius r^(1/3) ≈ 1.62, spaced at exact 360°/3 = 120° intervals.',
      'Validate fundamental cubic roots of unity identities: 1 + ω + ω² = 0 and ω³ = 1.',
    ],
    stepsAr: [
      'اضبط الإحداثيات الديكارتية على x = 3 و y = 3؛ ولاحظ تمثيل z = 3 + 3i في الربع الأول.',
      'تحقق من المقياس المحسوب r = 3√2 ≈ 4.24 والسعة الأساسية θ = 45° (π/4 rad).',
      'فعّل إظهار المرافق z̄ = 3 - 3i؛ ولاحظ الانعكاس حول المحور الحقيقي بالربع الرابع وسعته -45°.',
      'فعّل إظهار المعكوس الجمعي -z = -3 - 3i؛ ولاحظ الانعكاس في نقطة الأصل بالربع الثالث وسعته -135°.',
      'انتقل إلى تبويب نظرية ديموافر والجذور واضبط رتبة الجذر على n = 3 (الجذور التكعيبية).',
      'تحقق من وقوع الجذور الثلاثة على دائرة نصف قطرها r^(1/3) ≈ 1.62، متباعدة بزوايا 120°.',
      'أثبت العلاقات الأساسية للجذور التكعيبية للواحد الصحيح: 1 + ω + ω² = 0 و ω³ = 1.',
    ],
    formula: 'z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}, \\quad z^{1/n} = \\sqrt[n]{r}\\left(\\cos\\frac{\\theta + 2k\\pi}{n} + i\\sin\\frac{\\theta + 2k\\pi}{n}\\right), \\quad 1 + \\omega + \\omega^2 = 0',
    expectedConclusionEn: 'De Moivre theorem establishes the geometric harmony between complex roots and regular cyclic polygons, verifying rotational multiplication and zero-sum cyclic balance.',
    expectedConclusionAr: 'تبرهن نظرية ديموافر التوافق الهندسي الرائع بين الجذور النونية والمضلعات المنتظمة داخل مستوى أرجاند، مع تحقق متطابقات أوميجا وحفظ المجموع الصفري.',
    columns: [
      { key: 'k_index', labelAr: 'دليل الجذر k', labelEn: 'Root index k' },
      { key: 'root_arg', labelAr: 'سعة الجذر θ_k', labelEn: 'Argument θ_k', unit: '°' },
      { key: 'rad_arg', labelAr: 'السعة بالراديان', labelEn: 'Argument in Rad' },
      { key: 'root_real', labelAr: 'الجزء الحقيقي Re', labelEn: 'Real Re' },
      { key: 'root_imag', labelAr: 'الجزء التخيلي Im', labelEn: 'Imaginary Im' },
    ],
    sampleRows: [
      { k_index: 'k = 0', root_arg: '15.0', rad_arg: 'π/12', root_real: '1.565', root_imag: '0.419' },
      { k_index: 'k = 1', root_arg: '135.0', rad_arg: '3π/4', root_real: '-1.146', root_imag: '1.146' },
      { k_index: 'k = 2', root_arg: '255.0 (أو -105°)', rad_arg: '17π/12', root_real: '-0.419', root_imag: '-1.565' },
    ],
    sampleObservationsAr: 'تشكل الجذور الثلاثة رؤوس مثلث متساوي الأضلاع مركزه نقطة الأصل، ومجموع أجزائها الحقيقية والتخيلية يساوي صفراً تماماً (1 + ω + ω² = 0).',
    sampleObservationsEn: 'The three roots formed the vertices of an equilateral triangle centered at the origin, with their vector sum canceling strictly to zero.',
    sampleErrorAnalysisAr: 'التقريب العشري لدوال الجيب وجيب التمام للزوايا غير الخاصة.',
    sampleErrorAnalysisEn: 'Floating-point rounding when converting non-standard radians to trigonometric decimals.',
  },

  // 14. Biology Genetics & Pedigree Analysis
  'bio-exp-3': {
    id: 'bio-exp-3',
    discipline: 'biology',
    titleEn: 'Human Medical Genetics: 3-Generation Pedigree Lineage Analysis & Genotype Deductions',
    titleAr: 'الوراثة البشرية والطبية: تحليل سجل النسب لثلاثة أجيال واستنتاج الطرز الجينية وتتبع الأمراض',
    gradeEn: 'Grade 12 / Secondary Biology - Principles of Heredity & Human Genetics',
    gradeAr: 'الصف الثالث الثانوي - علم الوراثة والبيولوجيا الجزيئية: وراثة الصفات في الإنسان وسجل النسب',
    hypothesisEn: 'Pedigree analysis traces familial trait transmission through 3 generations to distinguish Autosomal Recessive, Autosomal Dominant, X-Linked Recessive, and Codominant ABO blood group inheritance.',
    hypothesisAr: 'تحليل شجرة العائلة وسجل النسب عبر ثلاثة أجيال يمكننا من التمييز الدقيق بين الصفات الجسدية المتنحية، والصفات السائدة، والصفات المرتبطة بالجنس، وانعدام السيادة لفصائل الدم.',
    apparatusEn: [
      'Standard Clinical Pedigree Notation Chart (Squares for Males, Circles for Females, Half-shaded Carriers, Solid Affected)',
      '3-Generation Genealogical Lineage Grid (Generations I, II, III)',
      'Interactive Genotype Deduction Logic Engine',
      'Punnett Square Cross Validator & Gamete Fusion Matrix',
      'Egyptian Ministry of Education Genetics Diagnostic Guide',
    ],
    apparatusAr: [
      'مخطط سجل النسب الطبي القياسي (مربعات للذكور، دوائر للإناث، تظليل نصفي للحاملين، تظليل كامل للمصابين)',
      'شبكة تتبع شجرة النسب لثلاثة أجيال متتالية (الجيل الأول، الثاني، الثالث)',
      'محرك استنتاج الطرز الجينية التفاعلي',
      'مصفوفة مربع بانيت لتأكيد التزاوج وانعزال الأمشاج',
      'دليل وزارة التربية والتعليم للتشخيص والتحليل الوراثي',
    ],
    stepsEn: [
      'Identify the proband individual (arrow P) in Generation III presenting the clinical phenotype.',
      'Construct Generation I (grandparents) and Generation II (parents, aunts, uncles) marital and descent lines.',
      'Identify carrier individuals (heterozygotes): unaffected parents who produce affected offspring must be carriers.',
      'Test for sex-linkage: verify whether trait passes predominantly to males without direct father-to-son transmission.',
      'Deduce mystery genotypes (? cards) with mathematical certainty and calculate recurrence risk for future progeny.',
    ],
    stepsAr: [
      'تحديد الفرد قيد الفحص (السهم P) في الجيل الثالث وتدوين حالته المظهرية والسريرية.',
      'رسم خطوط التزاوج والنسب للجيل الأول (الأجداد) والجيل الثاني (الآباء والأعمام والعمات).',
      'تحديد الأفراد الحاملين للمرض (هجين): الأبوان السليمان اللذان ينجبان طفلاً مصاباً كلاهما حامل حتماً للمرض.',
      'اختبار الارتباط بالجنس: التحقق من تركز الإصابة في الذكور وعدم انتقال الصفة مباشرة من الأب المصاب إلى ابنه الذكر.',
      'استنتاج الطرز الجينية المجهولة (بطاقات ؟) بدقة وحساب نسبة الخطر وتكرار الصفة في الأبناء القادمين.',
    ],
    formula: 'P(\\text{affected}) = P(\\text{sperm}) \\times P(\\text{ovum}), \\quad \\text{Autosomal Carrier Cross } (Aa \\times Aa) \\implies 1 AA : 2 Aa : 1 aa',
    expectedConclusionEn: 'Pedigree tracing rigorously proves the genetic inheritance model, eliminates diagnostic uncertainty, and provides accurate recurrence risk calculations for genetic counseling.',
    expectedConclusionAr: 'يبرهن سجل النسب نمط التوارث الجيني بدقة قاطعة، ويحسم الشكوك التشخيصية ويوفر الحسابات الدقيقة للاستشارات الوراثية قبل الزواج.',
    columns: [
      { key: 'member', labelAr: 'فرد العائلة', labelEn: 'Family Member' },
      { key: 'generation', labelAr: 'الجيل', labelEn: 'Generation' },
      { key: 'phenotype', labelAr: 'الحالة المظهرية', labelEn: 'Phenotype' },
      { key: 'genotype', labelAr: 'الطراز الجيني', labelEn: 'Genotype' },
      { key: 'rationale', labelAr: 'التعليل والاستنتاج', labelEn: 'Deduction Rationale' },
    ],
    sampleRows: [
      { member: 'الجد (I-1)', generation: 'الجيل الأول I', phenotype: 'سليم ظاهرياً (Normal)', genotype: 'Aa (حامل)', rationale: 'أنجب ابنة مصابة (II-2)؛ يجب أن يورثها أليلاً متنحياً (a).' },
      { member: 'الجدة (I-2)', generation: 'الجيل الأول I', phenotype: 'سليمة ظاهرياً (Normal)', genotype: 'Aa (حاملة)', rationale: 'أنجبت ابنة مصابة (II-2)؛ تشارك في توريث الأليل المتنحي (a).' },
      { member: 'الأب (II-1)', generation: 'الجيل الثاني II', phenotype: 'سليم ظاهرياً (Normal)', genotype: 'Aa (حامل)', rationale: 'تزاوج مع حاملة وأنجبا طفلاً مصاباً بالمهق في الجيل الثالث.' },
      { member: 'الأم (II-2)', generation: 'الجيل الثاني II', phenotype: 'مصابة بالمهق (Affected)', genotype: 'aa (متنحي نقي)', rationale: 'ظهور صفة المهق ناتج عن وجود نسختين متنحيتين من الأبوين.' },
      { member: 'الابن قيد الفحص (III-1)', generation: 'الجيل الثالث III', phenotype: 'سليم ظاهرياً (Normal)', genotype: 'Aa (حامل مؤكد)', rationale: 'أخذ بالضرورة أليلاً متنحياً (a) من والدته المصابة وأليلاً سائداً (A) من والده.' },
    ],
    sampleObservationsAr: 'تخطي الصفة المتنحية للجيل الثاني في بعض الأفرع وظهورها في الجيل الثالث عند تزاوج الأقارب الحاملين للأليل، مما يؤكد نمط التوارث الجسدي المتنحي.',
    sampleObservationsEn: 'The recessive phenotype skipped generations and reappeared in Generation III following consanguineous union between carriers, validating autosomal recessive transmission.',
    sampleErrorAnalysisAr: 'عدم اكتمال السجلات الطبية للأجيال السابقة أو تشابه المظاهر الناتجة عن طفرات جديدة (De novo).',
    sampleErrorAnalysisEn: 'Incomplete ancestral medical history or phenocopy/de novo mutations complicating lineage deduction.',
  },
};

/**
 * Returns a complete LabReportData object populated with default template values
 * for the requested experiment ID, or builds a sensible fallback.
 */
export function getLabReportTemplate(experimentId: string): LabReportData {
  const cfg = EXPERIMENT_CONFIGS[experimentId];

  if (!cfg) {
    // Fallback template
    return {
      id: `report_${experimentId}_${Date.now()}`,
      experimentId,
      titleAr: 'تقرير التجربة المعملية العامة',
      titleEn: 'General Laboratory Experiment Report',
      discipline: 'physics',
      gradeAr: 'الثانوية العامة المصرية والبكالوريا',
      gradeEn: 'Egyptian Thanawya Amma & EG-Baccalaureate',
      studentName: '',
      seatNumber: '',
      schoolName: '',
      instructorName: '',
      date: new Date().toISOString().split('T')[0],
      hypothesisAr: 'صياغة فرضية علمية تختبر العلاقة بين المتغيرين المستقل والتابع في التجربة.',
      hypothesisEn: 'Scientific hypothesis testing the empirical relation between independent and dependent variables.',
      apparatusAr: ['أدوات وأجهزة التجربة المعملية', 'أدوات القياس الرقمية', 'وسائل السلامة المعملية'],
      apparatusEn: ['Laboratory apparatus & measuring instruments', 'Digital measurement sensors', 'Safety equipment'],
      governingEquation: 'y = f(x)',
      procedureSteps: [
        { stepTextAr: 'تجهيز وضبط الأدوات والتأكد من المعايرة الصفرية للأجهزة.', stepTextEn: 'Setup and zero-calibrate experimental apparatus.', completed: true },
        { stepTextAr: 'أخذ القراءات وتكرار المحاولات للتأكد من الدقة.', stepTextEn: 'Record multiple trials to ensure empirical precision.', completed: true },
        { stepTextAr: 'تمثيل البيانات بيانياً وحساب الميل واستخلاص النتيجة.', stepTextEn: 'Plot results, calculate slope, and synthesize conclusion.', completed: false },
      ],
      dataTableColumns: [
        { key: 'trial', labelAr: 'المحاولة', labelEn: 'Trial' },
        { key: 'var_x', labelAr: 'المتغير المستقل X', labelEn: 'Independent X' },
        { key: 'var_y', labelAr: 'المتغير التابع Y', labelEn: 'Dependent Y' },
      ],
      dataTableRows: [
        { trial: '1', var_x: '1.0', var_y: '2.0' },
        { trial: '2', var_x: '2.0', var_y: '4.0' },
        { trial: '3', var_x: '3.0', var_y: '6.0' },
      ],
      observationsAr: 'لوحظ تطابق النتائج التجريبية مع التوقعات النظرية مع وجود نسبة خطأ معملي مقبولة.',
      observationsEn: 'Empirical findings aligned with theoretical expectations within acceptable experimental uncertainty.',
      conclusionAr: 'تؤكد التجربة صحة النموذج الرياضي وقوانين المنهج المقررة.',
      conclusionEn: 'The experiment successfully validated the governing physical laws and textbook models.',
      errorAnalysisAr: 'خطأ زاوية النظر في القراءة ومقاومة أسلاك التوصيل.',
      errorAnalysisEn: 'Parallax error in observation and minor lead resistance.',
      rubricCriteria: OFFICIAL_LAB_RUBRIC.map((r) => ({ ...r })),
    };
  }

  return {
    id: `report_${cfg.id}_${Date.now()}`,
    experimentId: cfg.id,
    titleAr: cfg.titleAr,
    titleEn: cfg.titleEn,
    discipline: cfg.discipline,
    gradeAr: cfg.gradeAr,
    gradeEn: cfg.gradeEn,
    studentName: '',
    seatNumber: '',
    schoolName: '',
    instructorName: '',
    date: new Date().toISOString().split('T')[0],
    hypothesisAr: cfg.hypothesisAr,
    hypothesisEn: cfg.hypothesisEn,
    apparatusAr: [...cfg.apparatusAr],
    apparatusEn: [...cfg.apparatusEn],
    governingEquation: cfg.formula,
    procedureSteps: cfg.stepsAr.map((stepAr, idx) => ({
      stepTextAr: stepAr,
      stepTextEn: cfg.stepsEn[idx] || stepAr,
      completed: idx < 2,
    })),
    dataTableColumns: [...cfg.columns],
    dataTableRows: cfg.sampleRows.map((r) => ({ ...r })),
    observationsAr: cfg.sampleObservationsAr,
    observationsEn: cfg.sampleObservationsEn,
    conclusionAr: cfg.expectedConclusionAr,
    conclusionEn: cfg.expectedConclusionEn,
    errorAnalysisAr: cfg.sampleErrorAnalysisAr,
    errorAnalysisEn: cfg.sampleErrorAnalysisEn,
    rubricCriteria: OFFICIAL_LAB_RUBRIC.map((r) => ({ ...r })),
  };
}

const STORAGE_KEY_PREFIX = 'egb_lab_report_draft_';

/**
 * Saves report draft into browser localStorage.
 */
export function saveLabReportDraft(report: LabReportData): void {
  try {
    const key = `${STORAGE_KEY_PREFIX}${report.experimentId}`;
    localStorage.setItem(key, JSON.stringify(report));
  } catch (err) {
    console.warn('Failed to save lab report to localStorage:', err);
  }
}

/**
 * Loads saved report draft from localStorage or falls back to standard template.
 */
export function loadLabReportDraft(experimentId: string): LabReportData {
  try {
    const key = `${STORAGE_KEY_PREFIX}${experimentId}`;
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.experimentId === experimentId) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Failed to load lab report from localStorage:', err);
  }

  return getLabReportTemplate(experimentId);
}

/**
 * Clears saved draft for an experiment.
 */
export function resetLabReportDraft(experimentId: string): void {
  try {
    const key = `${STORAGE_KEY_PREFIX}${experimentId}`;
    localStorage.removeItem(key);
  } catch (err) {
    console.warn('Failed to reset lab report draft:', err);
  }
}

/**
 * Calculates total earned vs maximum marks from grading rubric (out of 12).
 */
export function computeTotalRubricMarks(criteria: RubricCriterion[]): { earned: number; max: number; percentage: number } {
  let earned = 0;
  let max = 0;

  for (const c of criteria) {
    max += c.maxMarks;
    earned += typeof c.earnedMarks === 'number' ? c.earnedMarks : c.maxMarks;
  }

  const percentage = max > 0 ? Math.round((earned / max) * 100) : 100;
  return { earned, max, percentage };
}

/**
 * Exports the lab report to a cleanly structured Markdown document.
 */
export function exportReportToMarkdown(report: LabReportData, lang: Language): string {
  const isAr = lang === 'ar';
  const title = isAr ? report.titleAr : report.titleEn;
  const grade = isAr ? report.gradeAr : report.gradeEn;
  const hyp = isAr ? report.hypothesisAr : report.hypothesisEn;
  const obs = isAr ? report.observationsAr : report.observationsEn;
  const conc = isAr ? report.conclusionAr : report.conclusionEn;
  const err = isAr ? report.errorAnalysisAr : report.errorAnalysisEn;
  const apparatus = isAr ? report.apparatusAr : report.apparatusEn;

  let md = `# ${isAr ? 'جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني' : 'Arab Republic of Egypt - Ministry of Education'}\n`;
  md += `## ${isAr ? 'استمارة تقرير التجربة المعملية العملية الرسمية' : 'Official Practical Laboratory Examination Report'}\n\n`;

  md += `**${isAr ? 'عنوان التجربة' : 'Experiment Title'}:** ${title}\n`;
  md += `**${isAr ? 'المرحلة الدراسية' : 'Grade Level'}:** ${grade}\n`;
  md += `**${isAr ? 'اسم الطالب' : 'Student Name'}:** ${report.studentName || (isAr ? 'غير مدون' : 'N/A')} | **${isAr ? 'رقم الجلوس' : 'Seat #'}:** ${report.seatNumber || (isAr ? 'غير مدون' : 'N/A')}\n`;
  md += `**${isAr ? 'المدرسة / السنتر' : 'School/Academy'}:** ${report.schoolName || (isAr ? 'المدرسة الرسمية' : 'Official School')} | **${isAr ? 'معلم المادة' : 'Instructor'}:** ${report.instructorName || (isAr ? 'معلم المختبر' : 'Lab Instructor')}\n`;
  md += `**${isAr ? 'التاريخ' : 'Date'}:** ${report.date}\n\n`;

  md += `---\n\n`;

  md += `### 1. ${isAr ? 'الهدف العلمي والفرضية' : 'Objective & Scientific Hypothesis'}\n`;
  md += `${hyp}\n\n`;

  md += `### 2. ${isAr ? 'القانون والنموذج الرياضي الحاكم' : 'Governing Mathematical Model'}\n`;
  md += `$$${report.governingEquation}$$\n\n`;

  md += `### 3. ${isAr ? 'الأدوات والمواد المعملية' : 'Apparatus & Materials'}\n`;
  for (const item of apparatus) {
    md += `- ${item}\n`;
  }
  md += `\n`;

  md += `### 4. ${isAr ? 'جدول القراءات والبيانات الكمية' : 'Quantitative Observation Table'}\n\n`;
  const headers = report.dataTableColumns.map((c) => {
    const label = isAr ? c.labelAr : c.labelEn;
    return c.unit ? `${label} (${c.unit})` : label;
  });
  md += `| ${headers.join(' | ')} |\n`;
  md += `| ${headers.map(() => '---').join(' | ')} |\n`;
  for (const row of report.dataTableRows) {
    const cells = report.dataTableColumns.map((c) => row[c.key] || '-');
    md += `| ${cells.join(' | ')} |\n`;
  }
  md += `\n`;

  md += `### 5. ${isAr ? 'الملاحظات والتحليل النوعي' : 'Observations & Qualitative Analysis'}\n`;
  md += `${obs}\n\n`;

  md += `### 6. ${isAr ? 'الاستنتاج العلمي' : 'Scientific Conclusion'}\n`;
  md += `${conc}\n\n`;

  md += `### 7. ${isAr ? 'مناقشة مصادر الخطأ التجريبي' : 'Experimental Error Sources'}\n`;
  md += `${err}\n\n`;

  md += `### 8. ${isAr ? 'مصفوفة التقييم والدرجات (الدرجة العظمى: ١٢ درجة)' : 'Official Assessment Rubric (Max 12 Marks)'}\n\n`;
  md += `| ${isAr ? 'المعيار التقييمي' : 'Criterion'} | ${isAr ? 'الدرجة المستحقة' : 'Marks'} | ${isAr ? 'الدرجة العظمى' : 'Max'} |\n`;
  md += `| --- | --- | --- |\n`;
  for (const r of report.rubricCriteria) {
    const cat = isAr ? r.categoryAr : r.categoryEn;
    md += `| ${cat} | ${r.earnedMarks ?? r.maxMarks} | ${r.maxMarks} |\n`;
  }
  const score = computeTotalRubricMarks(report.rubricCriteria);
  md += `| **${isAr ? 'المجموع الكلي' : 'Total Marks'}** | **${score.earned}** | **${score.max}** |\n\n`;

  md += `\n---\n*${isAr ? 'توقيع الطالب:' : 'Student Signature:'} _______________ | ${isAr ? 'توقيع المعلم المقيم:' : 'Instructor Signature:'} _______________*\n`;

  return md;
}
