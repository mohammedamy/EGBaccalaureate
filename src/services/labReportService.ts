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

  // 5b. Physics Rutherford Scattering & Atomic Spectra
  'phys-exp-6': {
    id: 'phys-exp-6',
    discipline: 'physics',
    titleEn: 'Rutherford Alpha Scattering Cross-Section, Bohr Quantum Transitions & He-Ne Laser Resonator',
    titleAr: 'تشتت جسيمات ألفا لرذرفورد ونموذج بور للأطياف الذرية والمرنان الضوئي لليزر الهيليوم-نيون',
    gradeEn: 'Grade 12 Physics - Modern Physics & Quantum Mechanics (Chapters 6 & 7)',
    gradeAr: 'الصف الثالث الثانوي - الفيزياء الحديثة: الأطياف الذرية والليزر',
    hypothesisEn: 'Alpha particles undergo Coulomb scattering with differential cross-section proportional to 1/sin⁴(θ/2) confirming a dense nucleus, atomic hydrogen emits discrete Balmer lines hν = Ei - Ef, and optical cavity standing waves satisfy L = m·λ/2.',
    hypothesisAr: 'تخضع جسيمات ألفا للتشتت الكولومي بزاوية تتناسب عكسياً مع sin⁴(θ/2) مما يثبت تمركز الشحنة والكتلة في النواة، وتنبعث خطوط بالمر عند هبوط الإلكترون لمستوى n=2، ويحقق المرنان الضوئي شرط الأمواج الموقوفة L = m·λ/2.',
    apparatusEn: [
      'High-energy Polonium-210 Alpha Emitter (5.4 MeV)',
      'Ultra-thin Gold Foil (0.4 µm / 400 nm)',
      'Movable Zinc Sulfide (ZnS) Scintillation Detector (0° - 180°)',
      'Hydrogen Gas Discharge Tube with High-Voltage Excitation (5 kV)',
      'Diffraction Grating Spectrometer with Vernier Scale (600 lines/mm)',
      'Helium-Neon (632.8 nm) Laser Tube with Plano-Concave Optical Cavity Mirrors',
    ],
    apparatusAr: [
      'مصدر بولونيوم-210 مشع لجسيمات ألفا عالية الطاقة (5.4 MeV)',
      'صفيحة رقيقة جداً من الذهب النقي سمكها (0.4 µm)',
      'شاشة كبريتيد الخارصين (ZnS) الوميضية القابلة للدوران (0° - 180°)',
      'أنبوبة تفريغ غاز الهيدروجين مع مصدر جهد عالٍ (5 kV)',
      'مطياف ذري بمحزوز حيود دقيق (600 خط/مم)',
      'أنبوبة ليزر الهيليوم-نيون (632.8 nm) بمرآتين مستوية ومقعرة شبه منفذة',
    ],
    stepsEn: [
      'Direct collimated alpha stream onto the gold foil; observe that >99.9% pass undeflected (0° - 2°).',
      'Rotate ZnS detector to large angles (>90°); record backward backscattered alpha scintillations (1 in 8000) proving concentrated positive core.',
      'Calculate closest approach distance r0 = (2 Z e²) / (4πε0 Kα) ≈ 4.2 × 10⁻¹⁴ m.',
      'Excite atomic hydrogen gas discharge; calibrate spectrometer against visible Balmer emission series.',
      'Measure emission wavelengths: Hα = 656.3 nm (3 → 2, red), Hβ = 486.1 nm (4 → 2, cyan), Hγ = 434.0 nm (5 → 2, blue), Hδ = 410.2 nm (6 → 2, violet).',
      'Energize He-Ne laser; tune resonant cavity length L = 30 cm to observe longitudinal standing wave modes with standing condition L = m·λ/2 yielding coherent 632.8 nm red beam.',
    ],
    stepsAr: [
      'وجّه حزمة جسيمات ألفا نحو صفيحة الذهب؛ ولاحظ نفاذ أكثر من 99.9% على استقامتها بزوايا ضئيلة (0° - 2°).',
      'أدر شاشة كبريتيد الخارصين لزوايا انحراف كبيرة (>90°)؛ وسجل الومضات المرتدة للخلف (جسيم من كل 8000) إثباتاً لكثافة النواة الموجبة.',
      'احسب أقصر مسافة اقتراب للنواة r0 = (2 Z e²) / (4πε0 Kα) ≈ 4.2 × 10⁻¹⁴ m.',
      'شغّل أنبوبة التفريغ الكهربي لغاز الهيدروجين؛ واضبط المطياف لرصد متسلسلة بالمر في نطاق الضوء المنظور.',
      'قِس الأطوال الموجية المنبعثة: خط Hα = 656.3 nm (أحمر)، Hβ = 486.1 nm (سماوي)، Hγ = 434.0 nm (أزرق)، Hδ = 410.2 nm (بنفسجي).',
      'شغّل ليزر الهيليوم-نيون واضبط طول التجويف الرنيني L = 30 cm لملاحظة الأمواج الموقوفة وشرط الرنين L = m·λ/2 للحصول على حزمة متماسكة حمراء بطول موجي 632.8 nm.',
    ],
    formula: '\\frac{d\\sigma}{d\\Omega} = \\left(\\frac{z Z e^2}{4\\pi\\varepsilon_0 \\cdot 4 K}\\right)^2 \\frac{1}{\\sin^4(\\theta/2)}, \\quad \\Delta E = \\frac{hc}{\\lambda} = E_i - E_f, \\quad L = m \\frac{\\lambda}{2}',
    expectedConclusionEn: 'Rutherford scattering disproves Thomson plum pudding model, establishing nuclear atom structure. Discrete Balmer lines validate quantized energy levels, and optical cavity standing waves confirm laser optical amplification.',
    expectedConclusionAr: 'برهن تشتت رذرفورد خطأ نموذج طومسون مؤكداً وجود النواة المركزية الموجبة. وتثبت خطوط بالمر تكميم مستويات الطاقة في ذرة الهيدروجين، بينما يؤكد المرنان الضوئي التضخيم بالانبعاث المستحث وإنتاج ليزر متماسك.',
    columns: [
      { key: 'measurement', labelAr: 'القياس التجريبي', labelEn: 'Experimental Parameter' },
      { key: 'quantum_state', labelAr: 'الحالة الكمية / الانتقال', labelEn: 'Quantum State / Mode' },
      { key: 'observed_val', labelAr: 'القيمة المقاسة', labelEn: 'Measured Value' },
      { key: 'theoretical_val', labelAr: 'القيمة النظرية', labelEn: 'Theoretical Value' },
      { key: 'error_pct', labelAr: 'نسبة الخطأ %', labelEn: 'Relative Error %' },
    ],
    sampleRows: [
      { measurement: 'خط انبعاث Hα بالمر (أحمر)', quantum_state: 'n = 3 → n = 2', observed_val: '656.1 nm', theoretical_val: '656.3 nm', error_pct: '0.03%' },
      { measurement: 'خط انبعاث Hβ بالمر (سماوي)', quantum_state: 'n = 4 → n = 2', observed_val: '486.4 nm', theoretical_val: '486.1 nm', error_pct: '0.06%' },
      { measurement: 'خط انبعاث Hγ بالمر (أزرق)', quantum_state: 'n = 5 → n = 2', observed_val: '433.8 nm', theoretical_val: '434.0 nm', error_pct: '0.05%' },
      { measurement: 'خط انبعاث Hδ بالمر (بنفسجي)', quantum_state: 'n = 6 → n = 2', observed_val: '410.5 nm', theoretical_val: '410.2 nm', error_pct: '0.07%' },
      { measurement: 'تشتت ألفا المرتد بزاوية كبيرة', quantum_state: 'θ > 90° (نواة Au)', observed_val: '1 in 7950 particles', theoretical_val: '1 in 8000 particles', error_pct: '0.62%' },
      { measurement: 'طول موجة ليزر He-Ne الرنان', quantum_state: 'm = 948,167 نمط رنيني', observed_val: '632.9 nm', theoretical_val: '632.8 nm', error_pct: '0.02%' },
    ],
    sampleObservationsAr: 'نفاذ المعظم الساحق من جسيمات ألفا دون انحراف مع ارتداد نسبة نادرة جداً بزوايا منفرجة، وظهور أربعة خطوط طيفية ملونة دقيقة لغاز الهيدروجين تمثل متسلسلة بالمر المنظورة، واستقرار نمط التداخل البنائي داخل تجويف الليزر.',
    sampleObservationsEn: 'Over 99.9% of alpha particles penetrated gold foil unscattered with rare backscattering, while hydrogen discharge generated four sharp Balmer spectral lines and He-Ne laser cavity formed coherent standing modes.',
    sampleErrorAnalysisAr: 'اتساع دوبلر الحراري لخطوط الطيف الذري وتشتت جسيمات ألفا في الهواء المحيط قبل الاصطدام بالحاجز الوميضي.',
    sampleErrorAnalysisEn: 'Thermal Doppler broadening of spectral emission peaks and minor alpha collision with residual air molecules.',
  },

  // 7. Physics 3D Induction & Dynamo
  'phys-exp-7': {
    id: 'phys-exp-7',
    discipline: 'physics',
    titleEn: '3D Electromagnetic Induction, AC/DC Dynamo & Fleming Rules',
    titleAr: 'الحث الكهرومغناطيسي، دينامو التيار المتردد والمستمر، وقواعد فليمنج ولينز',
    gradeEn: 'Grade 12 Physics - Electromagnetic Induction',
    gradeAr: 'الصف الثالث الثانوي - الحث الكهرومغناطيسي والمولدات الكهربية',
    hypothesisEn: 'Induced EMF in a rotating coil obeys Faraday law E_max = NABω, with dual slip rings yielding sinusoidal AC and split-ring commutator yielding rectified unidirectional DC.',
    hypothesisAr: 'تتناسب القوة الدافعة الكهربية المستحثة في ملف الدينامو طردياً مع NABω، وتنتج حلقتي الانزلاق تياراً متردداً جيبياً بينما ينتج العاكس المشقوق تياراً موحد الاتجاه.',
    apparatusEn: [
      '3D Interactive AC/DC Dynamo Generator with concave permanent magnet pole shoes',
      'Dual brass slip-rings with carbon graphite brushes (AC configuration)',
      'Split-ring cylindrical commutator with insulating segment gap (DC configuration)',
      'Digital virtual oscilloscope monitor with real-time sinusoidal and rectified waveform trace',
      'Motional EMF dual-rail apparatus with sliding copper conductor and incandescent load lamp',
      'Cylindrical copper solenoid with movable AlNiCo bar magnet and center-zero galvanometer',
    ],
    apparatusAr: [
      'مولد دينامو ثلاثي الأبعاد تفاعلي بقطبي مغناطيس مقعرين دائمين',
      'حلقتان معدنيتان كاملتان من النحاس مع فرشتين من الكربون (وضع التيار المتردد)',
      'أسطوانة معدنية مشقوقة لنصفين معزولين (وضع التيار الموحد الاتجاه)',
      'راسم ذبذبات رقمي تفاعلي يعرض الموجة الجيبية والموجة المقومة نبضياً',
      'سكة موصلة مزدوجة مع ساق نحاسية منزلقة ومصباح حمل كهربي متوهج',
      'ملف لولبي نحاسي اسطواني مع ساق مغناطيسية ومجلفانومتر صفره في المنتصف',
    ],
    stepsEn: [
      'Mount rectangular armature coil between concave magnetic pole shoes (B = 0.8 T).',
      'Rotate coil at f = 2.0 Hz (ω = 4π rad/s); observe sinusoidal EMF waveform on the oscilloscope.',
      'Verify Fleming Right-Hand Rule: Thumb (v), Forefinger (B), and Middle finger (induced I).',
      'Switch commutator mode from slip rings to split-ring commutator; observe rectification to unidirectional pulsating DC.',
      'Slide motional conductor along rails at v = 4.0 m/s; calculate induced EMF = Blv and observe bulb illumination.',
      'Insert bar magnet into the solenoid; verify Lenz law polarity opposing the motion.',
    ],
    stepsAr: [
      'ثبّت الملف المستطيل بين القطبين المغناطيسيين المقعرين (كثافة الفيض B = 0.8 تسلا).',
      'أدر الملف بتردد f = 2.0 هرتز (السرعة الزاوية ω = 4π راديان/ثانية)؛ ولاحظ المنحنى الجيبي على شاشة راسم الذبذبات.',
      'تحقق من تطبيق قاعدة فليمنج لليد اليمنى: الإبهام (الحركة v)، والسبابة (المجال B)، والوسطى (التيار المستحث I).',
      'حوّل آلية التوصيل من حلقتي الانزلاق إلى الأسطوانة المشقوقة؛ ولاحظ تقويم التيار إلى تيار موحد الاتجاه نابض.',
      'حرّك السلك الموصل على السكتين بسرعة v = 4.0 m/s؛ واحسب القوة الدافعة المستحثة = Blv ولاحظ توهج مصباح الحمل.',
      'قرّب القطب الشمالي للمغناطيس من الملف؛ وتحقق من قاعدة لينز بنشوء قطب شمالي مقابل يعاكس حركة الاقتراب.',
    ],
    formula: '\\mathcal{E}_{\\text{inst}} = NAB\\omega \\sin\\theta, \\quad \\mathcal{E}_{\\max} = NAB\\omega, \\quad \\mathcal{E}_{\\text{eff}} = \\frac{\\mathcal{E}_{\\max}}{\\sqrt{2}}, \\quad \\mathcal{E}_{\\text{motional}} = -B\\ell v \\sin\\theta',
    expectedConclusionEn: 'Dynamic Faraday rotation produces sinusoidal alternating voltage with slip rings, which is converted to pulsating DC via a split-ring commutator. Motional conductor induction confirms E = Blv.',
    expectedConclusionAr: 'يولّد دوران ملف الدينامو قوة دافعة كهربية مترددة جيبية متناسبة طردياً مع NABω باستخدام حلقتي الانزلاق، وتتحول لتيار موحد الاتجاه نابض بالأسطوانة المشقوقة. كما يؤكد سلك السكك قانون E = Blv.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة', labelEn: 'Trial' },
      { key: 'frequency', labelAr: 'التردد f', labelEn: 'Frequency f' },
      { key: 'field', labelAr: 'كثافة الفيض B', labelEn: 'Field B' },
      { key: 'emfMax', labelAr: 'العظمى E_max', labelEn: 'Peak EMF' },
      { key: 'emfRms', labelAr: 'الفعالة E_eff', labelEn: 'RMS EMF' },
      { key: 'mode', labelAr: 'نوع التقويم', labelEn: 'Commutation' },
    ],
    sampleRows: [
      { trial: '1', frequency: '2.0 Hz', field: '0.80 T', emfMax: '40.21 V', emfRms: '28.43 V', mode: 'AC (حلقتي انزلاق)' },
      { trial: '2', frequency: '3.0 Hz', field: '0.80 T', emfMax: '60.32 V', emfRms: '42.65 V', mode: 'AC (حلقتي انزلاق)' },
      { trial: '3', frequency: '4.0 Hz', field: '0.80 T', emfMax: '80.42 V', emfRms: '56.87 V', mode: 'AC (حلقتي انزلاق)' },
      { trial: '4', frequency: '2.0 Hz', field: '0.80 T', emfMax: '40.21 V', emfRms: '28.43 V', mode: 'DC (مقوم مشقوق)' },
      { trial: '5', frequency: '5.0 Hz', field: '1.20 T', emfMax: '150.80 V', emfRms: '106.63 V', mode: 'DC (مقوم مشقوق)' },
    ],
    sampleObservationsAr: 'تطابق كامل للمنحنى الموجي التجريبي مع دالة الجيب، وتضاعف القوة الدافعة الكهربية العظمى عند مضاعفة تردد الدوران أو كثافة الفيض المغناطيسي، وانعكاس قطبية التيار كل نصف دورة في وضع حلقتي الانزلاق بينما حافظت على اتجاه ثابت في وضع الأسطوانة المشقوقة.',
    sampleObservationsEn: 'Empirical waveform strictly matches sinusoidal harmonic function; peak EMF doubles upon doubling rotational frequency or magnetic flux density. Current alternates every half cycle with slip rings while maintaining strictly unidirectional polarity with the split-ring commutator.',
    sampleErrorAnalysisAr: 'الاحتكاك الميكانيكي على محور الدوران والمقاومة الأومية الداخلية لفرش الكربون.',
    sampleErrorAnalysisEn: 'Mechanical brush contact resistance and aerodynamic drag on rotating armature windings.',
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

  // 9b. Chemistry VSEPR & Metallurgy
  'chem-exp-5': {
    id: 'chem-exp-5',
    discipline: 'chemistry',
    titleEn: 'VSEPR Stereochemistry, Bond Angle Repulsion & Metallurgy Crystal Packing',
    titleAr: 'هندسة الجزيئات الفراغية بنظرية تنافر أزواج الإلكترونات (VSEPR) والتعبئة البلورية للسبائك المعدنية',
    gradeEn: 'Grade 12 / Secondary Chemistry - Chemical Bonding & Transition Metal Metallurgy (Chapter 1)',
    gradeAr: 'الصف الثالث الثانوي - الروابط الكيميائية وهندسة الجزيئات وعناصر السلسلة الانتقالية الأولى (السبائك)',
    hypothesisEn: 'Electron pair repulsion hierarchy (LP-LP > LP-BP > BP-BP) compresses bond angles (CH4: 109.5° → NH3: 107.0° → H2O: 104.5°), and interstitial carbon atoms in steel distort BCC lattice slip planes, drastically boosting yield strength.',
    hypothesisAr: 'تدرج قوى التنافر بين أزواج الإلكترونات (زوج حر-حر > حر-رابط > رابط-رابط) يقلل زوايا الروابط من 109.5° في الميثان إلى 107.0° في الأمونيا ثم 104.5° في الماء، بينما تمنع ذرات الكربون البينية انزلاق طبقات الحديد، مضاعفة صلابة سبيكة الصلب.',
    apparatusEn: [
      'Interactive 3D WebGL Molecular Orbit Vector Visualizer',
      'VSEPR Geometry Goniometer (measuring bond angles to 0.1°)',
      'Toroidal π-electron resonance cloud density scanner (Benzene C6H6)',
      'Metallurgy Atomic Crystal Lattice Slicer (BCC Pure Iron, Interstitial Steel, Substitutional Stainless Steel, Intermetallic Cementite Fe3C)',
      'Slip Plane Shear Stress & Vickers Microhardness Simulation Gauge',
    ],
    apparatusAr: [
      'مستعرض مدارات الروابط الجزيئية ثلاثي الأبعاد التفاعلي بتقنية WebGL',
      'مقياس زوايا الروابط الجزيئية الدقيق لنظرية VSEPR (بدقة 0.1°)',
      'ماسح السحابة الإلكترونية الرنينية الحلقية لإلكترونات باي π في البنزين العطري',
      'قاطع البلورات الفلزية الذري (حديد نقي BCC، صلب بيني، صلب لا يصدأ استبدالي، سيمنتيت Fe3C)',
      'مقياس إجهاد القص لانزلاق الطبقات واختبار صلادة فيكرز الميكانيكية للسبائك',
    ],
    stepsEn: [
      'Load Methane (CH4): identify AX4 steric number 4 with zero lone pairs; measure tetrahedral bond angle of 109.5°.',
      'Load Ammonia (NH3): identify AX3E with 1 lone pair; observe lone-pair repulsion compressing bond angles to 107.0° in trigonal pyramidal shape.',
      'Load Water (H2O): identify AX2E2 with 2 lone pairs; observe maximum lone-pair repulsion bending the angle to 104.5°.',
      'Load Carbon Dioxide (CO2) and Boron Trifluoride (BF3); record linear 180° and trigonal planar 120° geometries with zero net dipole.',
      'Inspect Benzene (C6H6): verify planar hexagonal ring with delocalized cyclic π resonance toroidal clouds above and below the carbon skeleton.',
      'Switch to Metallurgy Mode: apply shear stress to pure BCC iron; observe low-resistance crystal dislocation plane slip.',
      'Insert interstitial carbon atoms into interstitial voids; observe lattice distortion locking slip planes and elevating yield hardness in carbon steel.',
    ],
    stepsAr: [
      'حمّل جزيء الميثان (CH4): افحص الصيغة AX4 مع صفر أزواج حرة؛ وقِس زاوية الربط الرباعية السطوح 109.5°.',
      'حمّل جزيء النشادر (NH3): افحص الصيغة AX3E مع زوج حر واحد؛ ولاحظ ضغط الزوج الحر للروابط لتصبح الزاوية 107.0° بهرم ثلاثي القاعدة.',
      'حمّل جزيء الماء (H2O): افحص الصيغة AX2E2 مع زوجين حرين؛ ولاحظ التنافر الأقصى الذي يقلص الزاوية إلى 104.5° في شكل زاوي منحني.',
      'حمّل ثاني أكسيد الكربون (CO2) وثالث فلوريد البورون (BF3)؛ وسجل الزاوية الخطية 180° والمثلثة المستوية 120° مع انعدام العزم القطبي الكلي.',
      'افحص حلقة البنزين العطري (C6H6): تحقق من الشكل السداسي المستوي والسحابة الرنينية غير المتمركزة لإلكترونات π أعلى وأسفل الحلقة.',
      'انتقل لنمط السبائك المعدنية: طبّق إجهاد القص على بلورة الحديد النقي BCC؛ ولاحظ سهولة انزلاق الطبقات الذرية.',
      'أدخل ذرات الكربون صغيرة الحجم في المسافات البينية؛ ولاحظ تشوه الشبكة وإعاقة انزلاق الطبقات، مما يكسب سبيكة الصلب صلابة ومقاومة ميكانيكية فائقة.',
    ],
    formula: '\\text{Repulsion}: LP-LP > LP-BP > BP-BP, \\quad \\theta(CH_4) = 109.5^\\circ > \\theta(NH_3) = 107.0^\\circ > \\theta(H_2O) = 104.5^\\circ, \\quad \\tau = \\frac{F}{A} \\cos\\phi \\cos\\lambda',
    expectedConclusionEn: 'VSEPR steric geometries rigorously govern molecular 3D shapes and dipole polarities. In transition metal metallurgy, interstitial and substitutional alloying obstructs crystal dislocation planes, transforming malleable pure iron into high-strength industrial alloys.',
    expectedConclusionAr: 'تحكم نظرية تنافر أزواج الإلكترونات الأشكال الهندسية وقطبية الجزيئات بدقة عالية. وفي كيمياء الفلزات الانتقالية، تمنع السبائك البينية والاستبدالية انزلاق الطبقات البلورية، محولة الحديد النقي اللين إلى سبائك صناعية فائقة الصلابة والمتانة.',
    columns: [
      { key: 'compound', labelAr: 'المركب / السبيكة', labelEn: 'Compound / Alloy' },
      { key: 'vsepr_type', labelAr: 'صيغة VSEPR / البنية البلورية', labelEn: 'VSEPR Formula / Crystal Type' },
      { key: 'lone_pairs', labelAr: 'عدد الأزواج الحرة', labelEn: 'Lone Pairs (LP)' },
      { key: 'measured_angle', labelAr: 'زاوية الرابطة المقاسة', labelEn: 'Measured Angle', unit: '°' },
      { key: 'mechanical_state', labelAr: 'الخاصية / الصلابة', labelEn: 'Property / Hardness' },
    ],
    sampleRows: [
      { compound: 'الميثان (CH₄)', vsepr_type: 'AX₄ (رباعي الأوجه)', lone_pairs: '0', measured_angle: '109.5', mechanical_state: 'غير قطبي متماثل' },
      { compound: 'النشادر (NH₃)', vsepr_type: 'AX₃E (هرم ثلاثي)', lone_pairs: '1', measured_angle: '107.0', mechanical_state: 'قطبي عالي الذوبان' },
      { compound: 'الماء (H₂O)', vsepr_type: 'AX₂E₂ (زاوي منحني)', lone_pairs: '2', measured_angle: '104.5', mechanical_state: 'شديد القطبية روابط هيدروجينية' },
      { compound: 'ثاني أكسيد الكربون (CO₂)', vsepr_type: 'AX₂ (خطي)', lone_pairs: '0', measured_angle: '180.0', mechanical_state: 'غير قطبي عزم محصل = 0' },
      { compound: 'الحديد النقي (BCC Fe)', vsepr_type: 'مكعب ممركز الجسم', lone_pairs: '-', measured_angle: '90.0', mechanical_state: 'قابل للسحب والطرق (انزلاق سهل)' },
      { compound: 'الصلب الكربوني البيني', vsepr_type: 'شبكة حديد + كربون بيني', lone_pairs: '-', measured_angle: '-', mechanical_state: 'صلابة مرتفعة جداً (إعاقة الانزلاق)' },
      { compound: 'الصلب الذي لا يصدأ الاستبدالي', vsepr_type: 'حديد + كروم ونيكل استبدالي', lone_pairs: '-', measured_angle: '-', mechanical_state: 'مقاومة تآكل وصلابة عالية' },
    ],
    sampleObservationsAr: 'أظهرت الأزواج الحرة قوة تنافر أكبر من الأزواج الرابطة مما أدى لانضغاط الزوايا بين الروابط بالتدريج، وأظهرت السبائك البينية والاستبدالية مقاومة فائقة لإجهاد القص مقارنة بالحديد النقي.',
    sampleObservationsEn: 'Lone electron pairs exerted stronger repulsive force than bonding pairs causing bond angle compression, while interstitial and substitutional alloys resisted shear slip planes compared to pure iron.',
    sampleErrorAnalysisAr: 'افتراض كروية تامة للذرات في نماذج التعبئة البلورية وتأثير السالبية الكهربية في تعديل كثافة السحابة الإلكترونية.',
    sampleErrorAnalysisEn: 'Hard-sphere approximation in crystal models and slight electronegativity variations affecting electron cloud distribution.',
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

  // 15. Biology DNA Thermal Denaturation & Chromatin Compaction
  'bio-exp-8': {
    id: 'bio-exp-8',
    discipline: 'biology',
    titleEn: 'B-DNA Thermal Denaturation (100°C), tRNA Codon Recognition & Chromatin Compaction Hierarchy',
    titleAr: 'التهجين الحراري وتفكك اللولب المزدوج لـ DNA عند 100°م والتعرف الكودوني لـ tRNA ومستويات تكثيف الصبغي',
    gradeEn: 'Grade 12 Biology - Molecular Biology & Genetics (DNA & RNA)',
    gradeAr: 'الصف الثالث الثانوي - البيولوجيا الجزيئية: الحمض النووي DNA وتخليق البروتين',
    hypothesisEn: 'Thermal heating to 100°C breaks inter-strand hydrogen bonds (A=T with 2 H-bonds, G≡C with 3 H-bonds) causing denaturation, cooling allows sequence-specific hybridization, tRNA anticodons recognize mRNA triplets, and histone octamers compact 2 m DNA by 100,000× into metaphase chromosomes.',
    hypothesisAr: 'التسخين لدرجة 100°م يكسر الروابط الهيدروجينية الضعيفة بين شريطي DNA (رابطتان بين A=T وثلاث روابط بين G≡C) مفككاً اللولب المزدوج، بينما يسمح التبريد بإعادة التهجين النوعي، ويتعرف مضاد الكودون في tRNA على كودون mRNA، وتكثف بروتينات الهستونات خيط DNA بطول مترين بمقدار 100,000 مرة إلى كروموسوم استوائي.',
    apparatusEn: [
      'Interactive 3D WebGL B-DNA Double Helix Macromolecular Viewport',
      'Precision Thermal Denaturation Chamber (25°C - 100°C)',
      'UV Spectrophotometric Hyperchromic Absorbance Monitor (260 nm)',
      'Folded tRNA Cloverleaf & L-shape Dynamic Simulator with CCA-3\' Amino Acid Acceptor',
      'Basic Histone Octamer (Arginine & Lysine) & Multi-Scale Chromatin Compaction Slider (1× → 100,000×)',
    ],
    apparatusAr: [
      'مستعرض اللولب المزدوج B-DNA الجزيئي ثلاثي الأبعاد بتقنية WebGL',
      'غرفة فك الارتباط والتهجين الحراري الدقيقة (25°م - 100°م)',
      'مقياس الامتصاص الطيفي الفوق بنفسجي لظاهرة زيادة الامتصاص (260 nm)',
      'محاكي جزيء tRNA ثلاثي الأبعاد بشكل حرف L وموقع الارتباط بالحمض الأميني CCA-3\'',
      'مستعرض ثماني الهستونات القاعدي (أرجينين وليسين) ومكثف الكروماتين متعدد المقاييس (1× → 100,000×)',
    ],
    stepsEn: [
      'Inspect B-DNA double helix: observe antiparallel 5\' → 3\' and 3\' → 5\' sugar-phosphate backbones.',
      'Verify Watson-Crick hydrogen bonding: 2 H-bonds between Adenine and Thymine (A=T), 3 H-bonds between Guanine and Cytosine (G≡C).',
      'Ramp temperature from 25°C to 100°C: observe progressive hydrogen bond melting and strand unzipping into two single strands with hyperchromic UV rise.',
      'Initiate controlled cooling to 60°C: observe sequence-specific complementary re-annealing (DNA hybridization).',
      'Switch to tRNA mode: inspect L-shaped tertiary fold, 5\' phosphorylation, 3\' CCA invariant sequence, and anticodon loop triplets.',
      'Test codon-anticodon pairing with mRNA (e.g. AUG codon binding UAC anticodon carrying Methionine).',
      'Switch to Chromatin Compaction: observe wrapping of negatively charged DNA around positively charged basic histone octamers forming 10 nm nucleosomes (7×).',
      'Advance compaction slider: track 30 nm solenoid fiber (40×), looped domains on non-histone scaffold (1,000×), and condensed metaphase chromatid (100,000×) fitting into a 5 µm cell nucleus.',
    ],
    stepsAr: [
      'افحص اللولب المزدوج B-DNA: لاحظ تعاكس اتجاهي الشريطان (5\' → 3\' و 3\' → 5\') وهيكل سكر-فوسفات الخارجي.',
      'تحقق من الروابط الهيدروجينية لقواعد واطسون وكريك: رابطتان هيدروجينيتان بين A و T (A=T) وثلاث روابط بين G و C (G≡C).',
      'ارفع درجة الحرارة تدريجياً من 25°م حتى 100°م: راقب انكسار الروابط الهيدروجينية وانفصال الشريطين وظاهرة زيادة امتصاص الأشعة فوق البنفسجية.',
      'ابدأ التبريد التدريجي المنظم حتى 60°م: شاهد عودة التحام وتكامل الشريطين (التهجين الحمضي).',
      'انتقل لجزيء tRNA: افحص الشكل الفراغي المميز (حرف L مقلوب)، والنهاية \'5 المفسفرة، وموقع الارتباط CCA-3\'، وحلقة مضاد الكودون.',
      'اختبر تطابق مضاد الكودون مع كودون mRNA (مثل ارتباط كودون البدء AUG بمضاد الكودون UAC الحامل للميثيونين).',
      'انتقل لنمط تكثيف الصبغي (الكروماتين): راقب التفاف شريط DNA سالب الشحنة حول بروتينات الهستونات القاعدية الموجبة مكوناً النيوكليوسومات (7×).',
      'حرّك مؤشر التكثيف تدريجياً: تتبع ألياف النيوكليوسومات (40×)، ثم الحلقات حول هيكل البروتينات غير الهستونية (1,000×)، حتى الكروموسوم الاستوائي المكتمل (100,000×) ليستقر داخل نواة قطرها 5 µm فقط.',
    ],
    formula: '\\text{Denaturation}: \\text{dsDNA} \\xrightarrow{100^\\circ\\text{C}} 2\\,\\text{ssDNA}, \\quad T_m \\approx 64.9 + 41 \\times \\frac{\\%G+C}{100}, \\quad \\text{Compaction} = \\frac{2.0\\,\\text{m}}{2.0\\,\\mu\\text{m}} = 100,000\\times',
    expectedConclusionEn: 'DNA thermal stability is governed by GC content and hydrogen bond thermodynamics. tRNA specific anticodons bridge genetic information to proteins, and electrostatic packaging between basic histones and acidic DNA condenses two meters of genetic blueprint into microscopic nuclei.',
    expectedConclusionAr: 'تتحكم نسبة القواعد النيتروجينية G و C والروابط الهيدروجينية في الثبات الحراري لـ DNA ودرجة انصهاره. وينقل tRNA الأحماض الأمينية بدقة كودونية متناهية، بينما يُمكّن التجاذب الكهربي بين الهستونات القاعدية ومجموعات الفوسفات الحامضية من تكثيف مترين من شريط DNA 100,000 مرة ليستقر داخل النواة المجهرية.',
    columns: [
      { key: 'stage', labelAr: 'المستوى التركيبي / الحالة', labelEn: 'Structural Level / State' },
      { key: 'temperature_or_scale', labelAr: 'درجة الحرارة / معامل التكثيف', labelEn: 'Temp / Compaction Scale' },
      { key: 'structural_feature', labelAr: 'السمة الجزيئية', labelEn: 'Molecular Feature' },
      { key: 'hydrogen_bonds', labelAr: 'حالة الروابط الهيدروجينية', labelEn: 'H-Bond Status' },
      { key: 'biological_significance', labelAr: 'الأهمية البيولوجية', labelEn: 'Biological Significance' },
    ],
    sampleRows: [
      { stage: 'اللولب المزدوج الطبيعي B-DNA', temperature_or_scale: '25°C (1×)', structural_feature: 'شريطان متعاكسان قطر 2 نانومتر', hydrogen_bonds: 'روابط سليمة (A=T ثنائية, G≡C ثلاثية)', biological_significance: 'حفظ الشفرة الوراثية وتضاعف شبه محافظ' },
      { stage: 'تفكك الروابط (Denaturation)', temperature_or_scale: '100°C', structural_feature: 'شريطان مفردان متباعدان (ssDNA)', hydrogen_bonds: 'انكسار حراري تام للروابط الهيدروجينية', biological_significance: 'الأساس المعملي لتقنية تهجين الحمض النووي و PCR' },
      { stage: 'إعادة الالتحام (Hybridization)', temperature_or_scale: '60°C', structural_feature: 'إعادة تكوين اللولب المزدوج المتكامل', hydrogen_bonds: 'إعادة بناء الروابط بحسب تكامل القواعد', biological_significance: 'الكشف عن الجينات وتحديد درجة القرابة التطورية' },
      { stage: 'جزيء الناقل tRNA', temperature_or_scale: 'شكل حرف L ثلاثي', structural_feature: 'موقع CCA-3\' + مضاد كودون ثلاثي', hydrogen_bonds: 'روابط داخلية في حلقات الجزيء', biological_significance: 'التعرف على كودونات mRNA وتوصيل الأحماض الأمينية' },
      { stage: 'النيوكليوسومات الأولية', temperature_or_scale: 'تكثيف 7 مرات (7×)', structural_feature: 'DNA ملتف حول 8 هستونات قاعدية', hydrogen_bonds: 'روابط أيونية بين الفوسفات (-) والأرجينين (+)', biological_significance: 'الخطوة الأولى في تقصير شريط DNA' },
      { stage: 'الكروموسوم الاستوائي المكتمل', temperature_or_scale: 'تكثيف 100,000 مرة', structural_feature: 'كروماتيدان ملتحمان في السنترومير', hydrogen_bonds: 'تكثيف فائق عبر بروتينات غير هستونية', biological_significance: 'ضمان التوزيع العادل للمادة الوراثية أثناء الانقسام' },
    ],
    sampleObservationsAr: 'ارتفاع امتصاص الأشعة فوق البنفسجية عند 260 نانومتر (تأثير فرط الامتصاص) بمجرد تفكك اللولب المزدوج عند 100°م، واستعادة الامتصاص الأصلي عند التبريد لـ 60°م مؤكداً تكامل الشريطين، مع إثبات تعادل الشحنة بين الهستونات وشريط DNA.',
    sampleObservationsEn: 'Hyperchromic UV absorbance rise at 260 nm occurred upon 100°C strand unzipping with full hypochromic recovery upon 60°C re-annealing, validating base complementarity and histone electrostatic neutralization.',
    sampleErrorAnalysisAr: 'احتمال حدوث تشابك غير نوعي (Mismatched Annealing) عند التبريد السريع المفاجئ بدلاً من التبريد التدريجي البطيء.',
    sampleErrorAnalysisEn: 'Non-specific mismatched annealing if cooling rate is too rapid rather than controlled gradual annealing.',
  },

  // 16. Biology Endocrine Glucose Homeostasis
  'bio-exp-4': {
    id: 'bio-exp-4',
    discipline: 'biology',
    titleEn: 'Endocrine Glucose Homeostasis & Dual Pancreatic Hormone Negative Feedback',
    titleAr: 'التوازن الهرموني لمستوى سكر الجلوكوز في الدم والتغذية الراجعة للبنكرياس',
    gradeEn: 'Grade 12 Biology - Hormonal Coordination',
    gradeAr: 'الصف الثالث الثانوي - التنسيق الهرموني في الكائنات الحية (التوازن السكري)',
    hypothesisEn: 'Pancreatic islet β-cells secrete insulin in response to hyperglycemia to store glycogen, while α-cells secrete glucagon during hypoglycemia to mobilize glucose.',
    hypothesisAr: 'تفرز خلايا بيتا β بجزر لانجرهانز الأنسولين عند ارتفاع السكر لتخزين الجليكوجين، بينما تفرز خلايا ألفا α الجلوكاجون عند انخفاضه لتحفيز تحلل الجليكوجين.',
    apparatusEn: ['Dynamic Blood Glucose Biosensor Simulator', 'Pancreatic Islet Endocrine Secretion Module', 'Hepatic Glycogen Storage Visualizer', 'Insulin & Glucagon Infusion Controller'],
    apparatusAr: ['محاكي الاستشعار الحيوي لجلوكوز الدم', 'وحدة إفراز جزر لانجرهانز البنكرياسية', 'مخطط تخزين الجليكوجين الكبدي والعضلي', 'متحكم ضخ هرموني الأنسولين والجلوكاجون'],
    stepsEn: [
      'Initialize baseline fasting blood glucose at 90 mg/dL.',
      'Administer a 75 g postprandial glucose spike to reach 160 mg/dL.',
      'Observe immediate activation of β-islet cells releasing insulin, accelerating GLUT-4 translocation.',
      'Track hepatic glycogenesis and peripheral glucose uptake restoring normoglycemia (80-120 mg/dL).',
      'Simulate prolonged fasting; observe α-cells secreting glucagon to stimulate glycogenolysis.',
    ],
    stepsAr: [
      'اضبط مستوى سكر الجلوكوز الصائم عند المستوى الطبيعي 90 mg/dL.',
      'أدخل جرعة جلوكوز 75 g لمحاكاة تناول وجبة وارتفاع السكر إلى 160 mg/dL.',
      'لاحظ استجابة خلايا بيتا β الفورية بإفراز الأنسولين لتحفيز نواقل الجلوكوز ودخوله الخلايا.',
      'تتبع بناء الجليكوجين في الكبد والعضلات وانخفاض السكر للمعدل الطبيعي (80-120 mg/dL).',
      'حاكي حالة الصيام المطول؛ ولاحظ إفراز خلايا ألفا α للجلوكاجون لتحويل الجليكوجين الكبدي إلى جلوكوز.',
    ],
    formula: '\\text{Insulin}: [\\text{Glu}]_{\\text{blood}} \\xrightarrow{\\beta\\text{-cells}} \\text{Glycogen}_{\\text{liver}}, \\quad \\text{Glucagon}: \\text{Glycogen} \\xrightarrow{\\alpha\\text{-cells}} [\\text{Glu}]_{\\text{blood}}',
    expectedConclusionEn: 'Antagonistic negative feedback loops between insulin and glucagon maintain dynamic physiological blood glucose stability.',
    expectedConclusionAr: 'التكامل والتضاد بين هرموني الأنسولين والجلوكاجون بالتغذية الراجعة السلبية يحفظ التوازن الفسيولوجي الدقيق للسكر في الدم.',
    columns: [
      { key: 'phase', labelAr: 'الحالة الفسيولوجية', labelEn: 'Physiological Phase' },
      { key: 'glucose', labelAr: 'تركيز سكر الجلوكوز', labelEn: 'Blood Glucose', unit: 'mg/dL' },
      { key: 'insulin', labelAr: 'مستوى الأنسولين', labelEn: 'Insulin Level', unit: 'µIU/mL' },
      { key: 'glucagon', labelAr: 'مستوى الجلوكاجون', labelEn: 'Glucagon Level', unit: 'pg/mL' },
      { key: 'action', labelAr: 'النشاط الأيضي الكبدي', labelEn: 'Hepatic Metabolic Action' },
    ],
    sampleRows: [
      { phase: 'صيام طبيعي (Fasting)', glucose: '90', insulin: '8', glucagon: '75', action: 'استقرار توازن الجليكوجين (Steady-State)' },
      { phase: 'ذروة ما بعد الوجبة (Postprandial)', glucose: '160', insulin: '65', glucagon: '20', action: 'بناء جليكوجين وتخزين كبدي (Glycogenesis)' },
      { phase: 'استعادة الاتزان (2h Post-Meal)', glucose: '105', insulin: '18', glucagon: '50', action: 'امتصاص الجلوكوز عبر GLUT-4 إلى الخلايا' },
      { phase: 'صيام ممتد (16h Fasting)', glucose: '72', insulin: '4', glucagon: '120', action: 'تحلل الجليكوجين إلى جلوكوز (Glycogenolysis)' },
    ],
    sampleObservationsAr: 'أظهرت القراءات استجابة سريعة لخلايا بيتا بإفراز الأنسولين مع ارتفاع الجلوكوز لـ 160 mg/dL لخفضه للمعدل الطبيعي، بينما تحفزت خلايا ألفا لإفراز الجلوكاجون أثناء الصيام لحفظ السكر فوق 70 mg/dL.',
    sampleObservationsEn: 'Dynamic biosensor telemetry demonstrated immediate beta-cell insulin secretion upon postprandial glucose spike (160 mg/dL) driving rapid glycogenesis, while prolonged fasting triggered alpha-cell glucagon surge to prevent hypoglycemia.',
    sampleErrorAnalysisAr: 'تأخر امتصاص الأمعاء للجلوكوز أو وجود مقاومة محيطية لمستقبلات الأنسولين.',
    sampleErrorAnalysisEn: 'Intestinal absorption latency or variable peripheral receptor sensitivity mimicking metabolic resistance.',
  },

  // 17. Biology Ovarian & Menstrual Cycle
  'bio-exp-5': {
    id: 'bio-exp-5',
    discipline: 'biology',
    titleEn: 'Ovarian & Menstrual Cycle Phasic Hormonal Dynamics',
    titleAr: 'ديناميكا دورة الطمث والتغيرات الهرمونية والرحمية في أنثى الإنسان',
    gradeEn: 'Grade 12 Biology - Reproduction in Humans',
    gradeAr: 'الصف الثالث الثانوي - التكاثر في الكائنات الحية (الجهاز التناسلي الأنثوي ودورة الطمث)',
    hypothesisEn: 'Pulsatile pituitary FSH and LH trigger follicular maturation and day-14 ovulation, driven by biphasic estrogen and progesterone feedback on the endometrium.',
    hypothesisAr: 'يحفز هرمونا FSH و LH النخاميان نضج حويصلة جراف والتبويض في اليوم الـ١٤، محكومين بالتغذية الراجعة للإستروجين والبروجسترون وتغيرات بطانة الرحم.',
    apparatusEn: ['Interactive 28-Day Menstrual Cycle Chronometer', 'Hypothalamic-Pituitary Hormone Profiler (FSH/LH)', 'Ovarian Follicle Morphogenesis Scanner', 'Endometrial Thickness Ultrasound Simulator'],
    apparatusAr: ['مؤقت دورة الطمث التفاعلي (٢٨ يوماً)', 'راسم منحنيات الهرمونات النخامية (FSH و LH)', 'ماسح نضج حويصلة جراف وتكوين الجسم الأصفر', 'محاكي سمك وإمداد بطانة الرحم الدموي'],
    stepsEn: [
      'Advance timeline to Days 1-5 (Menstruation): Observe low progesterone and estrogen triggering endometrial sloughing.',
      'Progress to Days 6-13 (Proliferative Phase): Rising FSH stimulates follicle growth and 17β-estradiol secretion, rebuilding the endometrium.',
      'Trigger Day 14 (Ovulation): Observe acute positive feedback LH surge causing Graafian follicle rupture and secondary oocyte release.',
      'Examine Days 15-28 (Secretory Phase): Corpus luteum synthesizes high progesterone, maximizing endometrial vascularization.',
      'Simulate non-fertilization: Observe corpus luteum degeneration, plummeting progesterone, and initiation of a new cycle.',
    ],
    stepsAr: [
      'قدم المؤشر للأيام ١-٥ (مرحلة الطمث): لاحظ هبوط البروجسترون والإستروجين وتهدم بطانة الرحم.',
      'انتقل للأيام ٦-١٣ (مرحلة نضج البويضة): يفرز FSH لإنضاج حويصلة جراف وإفراز الإستروجين لإنماء بطانة الرحم.',
      'فعّل اليوم ١٤ (مرحلة التبويض): لاحظ ذروة تدفق LH السريعة المسببة لانفجار الحويصلة وخروج البويضة الثانوية.',
      'افحص الأيام ١٥-٢٨ (مرحلة تكوين الجسم الأصفر): يفرز البروجسترون بكثافة لزيادة سمك وإمداد بطانة الرحم بالدم.',
      'حاكي غياب الإخصاب: لاحظ ضمور الجسم الأصفر، انخفاض البروجسترون الحاد، وبدء دورة طمث جديدة.',
    ],
    formula: '\\text{Ovulation Trigger}: \\uparrow \\text{Estrogen} \\implies \\text{LH Surge} \\implies \\text{Oocyte Release at Day } 14',
    expectedConclusionEn: 'Sequential hormonal surges orchestrate endometrial preparation for embryonic implantation; absence of hCG initiates menstrual sloughing.',
    expectedConclusionAr: 'تتحكم الهرمونات النخامية والمبيضية بدقة متناهية في تهيئة الرحم لاستقبال الجنين، ويؤدي غياب الإخصاب لانحدار الهرمونات وبدء الطمث.',
    columns: [
      { key: 'days', labelAr: 'أيام الدورة', labelEn: 'Cycle Days' },
      { key: 'phase', labelAr: 'المرحلة الفسيولوجية', labelEn: 'Phase Name' },
      { key: 'pituitary', labelAr: 'الهرمونات النخامية (FSH / LH)', labelEn: 'Pituitary Hormones', unit: 'mIU/mL' },
      { key: 'ovarian', labelAr: 'الهرمونات المبيضية (Estrogen / Prog)', labelEn: 'Ovarian Hormones', unit: 'pg/mL' },
      { key: 'endometrium', labelAr: 'سمك بطانة الرحم', labelEn: 'Endometrial Thickness', unit: 'mm' },
    ],
    sampleRows: [
      { days: 'الأيام 1-5', phase: 'مرحلة الطمث (Menstruation)', pituitary: 'FSH: 4.5, LH: 3.2', ovarian: 'Estrogen: 35, Prog: 0.5', endometrium: '1.2 (تهدم وتسلخ البطانة)' },
      { days: 'الأيام 6-12', phase: 'نضج حويصلة جراف (Proliferative)', pituitary: 'FSH: 8.0, LH: 5.1', ovarian: 'Estrogen: 210, Prog: 0.8', endometrium: '3.8 (إنماء البطانة وتغذيتها)' },
      { days: 'اليوم 14', phase: 'ذروة التبويض (Ovulation Peak)', pituitary: 'FSH: 15.2, LH: 48.0 (طفرة LH)', ovarian: 'Estrogen: 340, Prog: 1.5', endometrium: '5.2 (تمزق الحويصلة وخروج البويضة)' },
      { days: 'الأيام 15-26', phase: 'الجسم الأصفر والإفراز (Secretory)', pituitary: 'FSH: 2.1, LH: 2.8', ovarian: 'Estrogen: 140, Prog: 16.5', endometrium: '8.5 (أقصى سمك وإمداد وعائي غدي)' },
      { days: 'الأيام 27-28', phase: 'ضمور الجسم الأصفر (Luteolysis)', pituitary: 'FSH: 3.5, LH: 2.5', ovarian: 'Estrogen: 45, Prog: 1.2', endometrium: '7.8 (بدء انقطاع الإمداد)' },
    ],
    sampleObservationsAr: 'أكدت القياسات أن طفرة هرمون LH الحادة في اليوم الـ 14 (48 mIU/mL) ناتجة عن التغذية الراجعة الإيجابية لذروة الإستروجين، محفزة خروج الخلية البيضية الثانوية، بينما بلغ البروجسترون ذروته (16.5 pg/mL) من الجسم الأصفر لتهيئة بطانة الرحم.',
    sampleObservationsEn: 'Ultrasonic and endocrine telemetry confirmed the acute LH surge (48 mIU/mL) on Day 14 triggered by high estrogen positive feedback causing Graafian follicle rupture, followed by corpus luteum progesterone peak (16.5 pg/mL) maximizing endometrial thickness to 8.5 mm.',
    sampleErrorAnalysisAr: 'تفاوت طول الدورة الشهرية الطبيعي بين 24 إلى 35 يوماً نتيجة التوتر العصبي أو الاضطرابات الهرمونية.',
    sampleErrorAnalysisEn: 'Physiological cycle length variation (24-35 days) influenced by hypothalamic-pituitary stress axis activation.',
  },

  // 18. Biology Dual-Branch Adaptive Immunity
  'bio-exp-6': {
    id: 'bio-exp-6',
    discipline: 'biology',
    titleEn: 'Dual-Branch Adaptive Immunity: Humoral B-Cell & Cytotoxic T-Cell Activation',
    titleAr: 'آليات المناعة المكتسبة ثنائية المسار: المناعة الخلطية والمناعة بالخلايا الوسيطة',
    gradeEn: 'Grade 12 Biology - Immunology',
    gradeAr: 'الصف الثالث الثانوي - المناعة في الإنسان (الاستجابة المناعية الخلطية والخلوية)',
    hypothesisEn: 'Antigen-presenting macrophages activate CD4+ T-helper cells via MHC-II, branching into B-cell antibody production and CD8+ cytotoxic T-cell perforin-mediated target cell lysis.',
    hypothesisAr: 'تُنشط الخلايا البلعمية العارضة للأنتيجين عبر MHC-II خلايا CD4+ المساعدة، التي تفرز السيتوكينات لتفعيل الخلايا البائية لإنتاج الأجسام المضادة وخلايا CD8+ القاتلة.',
    apparatusEn: ['Macrophage-Phagosome Antigen Processing Chamber', 'MHC Class I & II Receptor Flow Cytometry Module', 'Helper T (CD4+) Interleukin/Cytokine Dispenser', 'Cytotoxic T (CD8+) Perforin & Granzyme Assay'],
    apparatusAr: ['غرفة بلعمة ومعالجة الأنتيجين بالخلايا البلعمية', 'وحدة قياس مستقبلات التوافق النسيجي MHC-I و MHC-II', 'موزع إنترلوكينات وسيتوكينات الخلايا التائية المساعدة CD4+', 'مقياس إفراز البيرفورين والسموم اللمفاوية للخلايا التائية القاتلة CD8+'],
    stepsEn: [
      'Engulf pathogen with macrophage, degrade antigens, and present epitopes on membrane MHC-II.',
      'Dock naive CD4+ T-helper cell onto MHC-II epitope complex; trigger Interleukin-1/2 secretion.',
      'Track Path A (Humoral): Interleukins stimulate B-cells to proliferate into plasma cells producing IgG/IgM and memory cells.',
      'Track Path B (Cell-Mediated): Activated Th cells secrete cytokines, recruiting CD8+ cytotoxic T-cells.',
      'Observe cytotoxic Tc cells docking via CD8 to MHC-I of infected cells, secreting perforin to punch pores and granzymes to induce apoptosis.',
    ],
    stepsAr: [
      'ابتلع الميكروب بالخلية البلعمية الكبيرة، فكك الأنتيجين واعرضه على السطح مرتبطاً ببروتين MHC-II.',
      'اربط الخلية التائية المساعدة CD4+ بالمركب عبر مستقبل TCR، وشاهد إفراز الإنترلوكينات المنشطة.',
      'تتبع المسار الأول (المناعة الخلطية): تنشيط الخلايا البائية للتمايز لخلايا بلازمية تنتج أجساماً مضادة وخلايا ذاكرة.',
      'تتبع المسار الثاني (المناعة الخلوية): إفراز السيتوكينات لتنشيط الخلايا التائية القاتلة CD8+ والخلايا القاتلة الطبيعية NK.',
      'شاهد التحام خلية Tc عبر CD8 ببروتين MHC-I للخلية المصابة وإفراز البيرفورين والسموم لتحفيز الموت المبرمج.',
    ],
    formula: '\\text{Cell Lysis}: \\text{Tc}(\\text{CD8}^+) + \\text{MHC-I/Ag} \\implies \\text{Perforin (pores)} + \\text{Granzymes} \\implies \\text{Apoptosis}',
    expectedConclusionEn: 'Coordinated helper T-cell signaling unites humoral antibody neutralization with cytotoxic cell-mediated target destruction.',
    expectedConclusionAr: 'يضمن التنسيق المركزي للخلايا التائية المساعدة استجابة مناعية متكاملة تجمع بين تحييد الأجسام المضادة والقضاء الخلوي المباشر.',
    columns: [
      { key: 'stage', labelAr: 'مرحلة الاستجابة المناعية', labelEn: 'Immune Response Stage' },
      { key: 'branch', labelAr: 'المسار المناعي', labelEn: 'Pathway Branch' },
      { key: 'effector', labelAr: 'الخلية الفاعلة والمستقبل', labelEn: 'Effector Cell & Marker' },
      { key: 'mediator', labelAr: 'الوسيط الكيميائي المفرز', labelEn: 'Secreted Mediator' },
      { key: 'outcome', labelAr: 'النتيجة الوقائية / الخلوية', labelEn: 'Clinical / Cellular Outcome' },
    ],
    sampleRows: [
      { stage: '1. التعرف والعرض الأنتيجيني', branch: 'المسار التمهيدي المشترك', effector: 'بلعمية عارضة (MHC-II)', mediator: 'إنترلوكين-1 (IL-1)', outcome: 'تنشيط الخلية التائية المساعدة Th (CD4+)' },
      { stage: '2. تنشيط الاستجابة الخلطية', branch: 'المناعة الخلطية (Humoral)', effector: 'خلايا بائية بلازمية (Plasma B)', mediator: 'أجسام مضادة IgG / IgM', outcome: 'التعادل، التلازن، والترسيب وتحييد السموم' },
      { stage: '3. تنشيط الاستجابة الخلوية', branch: 'المناعة الخلوية (Cell-Mediated)', effector: 'تائية مساعدة Th1 نشطة', mediator: 'سيتوكينات + إنترلوكين-2', outcome: 'استنفار خلايا Tc القاتلة وخلايا NK والبلعمية' },
      { stage: '4. القضاء على الخلايا المصابة', branch: 'الهجوم السمي المباشر', effector: 'تائية سامة Tc (CD8+)', mediator: 'بيرفورين + سموم ليمفاوية', outcome: 'تثقيب الغشاء (16nm) وتفتيت DNA والموت المبرمج' },
    ],
    sampleObservationsAr: 'أظهرت النتائج أن تنشيط خلايا Th بواسطة معقد MHC-II هو نقطة الانطلاق الحاسمة لكل من إنتاج الأجسام المضادة البلازمية وتوجيه خلايا Tc السامة لتدمير الخلايا المصابة.',
    sampleObservationsEn: 'Data confirmed that CD4+ T-helper activation by antigen-MHC-II complexes is the decisive master switch, simultaneously driving plasma B-cell humoral antibody cascades and cytotoxic CD8+ perforin-mediated target destruction.',
    sampleErrorAnalysisAr: 'طفرات هروب فيروسية تغير الحواتم الأنتيجينية أو نقص مؤقت في كفاءة إفراز السيتوكينات.',
    sampleErrorAnalysisEn: 'Viral epitope mutation evading TCR recognition or transient cytokine down-regulation by regulatory T-cells.',
  },

  // 19. Biology Comparative Bioenergetics (Respiration vs Fermentation)
  'bio-exp-9': {
    id: 'bio-exp-9',
    discipline: 'biology',
    titleEn: 'Comparative Bioenergetics: Aerobic Cellular Respiration vs Anaerobic Fermentation',
    titleAr: 'دراسة مقارنة للطاقة الحيوية: التنفس الخلوي الهوائي مقابل التخمر اللاهوائي',
    gradeEn: 'Grade 12 Biology - Cellular Bioenergetics & Respiration',
    gradeAr: 'الصف الثالث الثانوي - الطاقة والتنفس الخلوي في الكائنات الحية',
    hypothesisEn: 'Aerobic respiration yields 32 ATP per glucose mole via mitochondrial chemiosmosis, whereas anaerobic fermentation yields only 2 ATP.',
    hypothesisAr: 'أكسدة مول واحد من الجلوكوز هوائياً تنتج 32 ATP عبر الميتوكوندريا، بينما ينتج التخمر اللاهوائي جزيئين 2 ATP فقط.',
    apparatusEn: ['Mitochondrial chemiosmosis simulator', 'Oxygen flow rate controller (O2)', 'Substrate glucose mole regulator', 'ATP synthase rotary motor visualizer', 'Respirometer gas volume analyzer'],
    apparatusAr: ['محاكي الأسموزية الكيميائية في الميتوكوندريا', 'محبس تدفق الأكسجين O2', 'منظم كمية الجلوكوز المستهلكة', 'محرك إنزيم بناء ATP الدوار', 'مقياس استهلاك الغازات التنفسية'],
    stepsEn: [
      'Input 1.0 mol of glucose under full aerobic conditions (O2 available).',
      'Track 4 biochemical stages: Glycolysis (2 ATP net), Link reaction, Krebs cycle, and Electron Transport Chain.',
      'Record total aerobic ATP harvest (32 ATP per glucose mole) and stoichiometric release of 6 CO2.',
      'Switch oxygen supply OFF to simulate strenuous muscle exertion or anaerobic yeast metabolism.',
      'Observe rapid shutdown of Krebs cycle and electron transport, yielding only 2 ATP net via glycolysis and lactate/ethanol formation.',
    ],
    stepsAr: [
      'أدخل 1.0 mol من الجلوكوز في وجود وفرة من غاز الأكسجين O2 (تنفس هوائي كامل).',
      'تتبع المراحل الأربعة: انشطار الجلوكوز (2 ATP)، تفاعل الربط، دورة كريبس، وسلسلة نقل الإلكترون.',
      'سجّل الحصيلة النهائية للطاقة (32 ATP لكل مول جلوكوز) وانطلاق 6 CO2.',
      'أغلق مصدر الأكسجين لمحاكاة الإجهاد العضلي أو التخمر الكحولي في فطر الخميرة.',
      'لاحظ توقف دورة كريبس وسلسلة النقل، واقتصار الناتج على 2 ATP فقط مع تراكم حمض اللاكتيك أو الإيثانول.',
    ],
    formula: '\\text{Aerobic}: \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\to 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 32\\,\\text{ATP}',
    expectedConclusionEn: 'Mitochondrial oxidative phosphorylation is 16 times more energy-efficient than anaerobic substrate-level glycolysis.',
    expectedConclusionAr: 'الفسفرة التأكسدية الميتوكوندرية أعلى كفاءة في إنتاج الطاقة بمقدار ١٦ ضعفاً مقارنة بالتخمر اللاهوائي.',
    columns: [
      { key: 'pathway', labelAr: 'المسار الأيضي', labelEn: 'Metabolic Pathway' },
      { key: 'o2_state', labelAr: 'توافر الأكسجين', labelEn: 'O2 Condition' },
      { key: 'stages', labelAr: 'المراحل الكيميائية النشطة', labelEn: 'Active Stages' },
      { key: 'end_product', labelAr: 'النواتج النهائية', labelEn: 'End Products' },
      { key: 'atp_yield', labelAr: 'صافي الطاقة ATP', labelEn: 'Net ATP Yield', unit: 'ATP/mol' },
    ],
    sampleRows: [
      { pathway: 'تنفس هوائي تام (Aerobic Respiration)', o2_state: 'متوافر بكثرة (+O2)', stages: 'انشطار + تفاعل ربط + كريبس + نقل إلكترون', end_product: '6 CO2 + 6 H2O', atp_yield: '32' },
      { pathway: 'تخمر حمضي - عضلات (Lactic Acid Fermentation)', o2_state: 'منعدم (-O2)', stages: 'انشطار الجلوكوز + اختزال البيروفيك', end_product: 'حمض لاكتيك (C3H6O3)', atp_yield: '2' },
      { pathway: 'تخمر كحولي - خميرة (Alcoholic Fermentation)', o2_state: 'منعدم (-O2)', stages: 'انشطار الجلوكوز + نزع كربوكسيل + اختزال', end_product: '2 إيثانول + 2 CO2', atp_yield: '2' },
      { pathway: 'تنفس هوائي جزئي (Hypoxic Respiration)', o2_state: 'محدود الجزئية (Hypoxia)', stages: 'انشطار + دورة كريبس بطيئة جزئياً', end_product: 'CO2 + حمض لاكتيك مختلط', atp_yield: '14' },
    ],
    sampleObservationsAr: 'أكدت نتائج مقياس التنفس أن أكسدة الجلوكوز في وجود الأكسجين تنتج 32 جزيء ATP بفارق 16 ضعفاً عن التخمر اللاهوائي (2 ATP)، مع انطلاق 6 مولات من CO2 واستقرار درجة الحموضة في غياب اللاكتيك.',
    sampleObservationsEn: 'Respirometer telemetry verified 32 net ATP molecules per mole of glucose during aerobic phosphorylation—a 16-fold energy advantage over anaerobic glycolysis (2 ATP)—with stoichiometric release of 6 CO2 and zero lactate accumulation.',
    sampleErrorAnalysisAr: 'تسرب البروتونات عبر الغشاء الداخلي للميتوكوندريا دون المرور بإنزيم بناء ATP (فقد حراري).',
    sampleErrorAnalysisEn: 'Mitochondrial inner membrane proton leakage uncoupling oxidative phosphorylation and releasing metabolic heat.',
  },

  // 20. Math Derivative as Limit of Secant Slopes
  'math-exp-1': {
    id: 'math-exp-1',
    discipline: 'math',
    titleEn: 'Investigating the Derivative as the Limit of Secant Slopes',
    titleAr: 'استقصاء المشتقة الأولى كنهاية لميل القاطع عند اقتراب النقطتين (h → 0)',
    gradeEn: 'Grade 12 Pure Math - Calculus',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات البحتة (التفاضل والتكامل ومعدل التغير)',
    hypothesisEn: 'As the increment h approaches 0, the secant slope converges precisely to the tangent derivative f\'(x0).',
    hypothesisAr: 'كلما اقترب التغير h من الصفر، يقترب ميل القاطع تماماً من ميل المماس (المشتقة الأولى) عند نقطة التماس x0.',
    apparatusEn: ['Interactive Calculus Tangent Visualizer', 'Secant point offset slider h', 'Slope calculation engine', 'Zoomable Cartesian coordinate plane'],
    apparatusAr: ['محاكي مماسات التفاضل التفاعلي', 'منزلق إزاحة القاطع h', 'حاسبة ميل المماس وميل القاطع اللحظية', 'شبكة إحداثيات متعامدة ديناميكية'],
    stepsEn: [
      'Set function f(x) = x³ - 3x and choose point of tangency x0 = 1.0.',
      'Observe theoretical derivative f\'(1.0) = 3(1)² - 3 = 0.0 (horizontal tangent).',
      'Set secant offset h = 1.0; compute secant slope.',
      'Gradually decrease h to 0.5, 0.1, 0.01, and 0.001.',
      'Verify that the secant line rotates continuously until it coincides with the tangent line.',
    ],
    stepsAr: [
      'اختر الدالة f(x) = x³ - 3x وحدد نقطة التماس عند x0 = 1.0.',
      'احسب المشتقة نظرياً: f\'(1.0) = 3(1)² - 3 = 0 (مماس أفقي).',
      'اضبط إزاحة القاطع h = 1.0 واحسب ميل القاطع المار بالنقطتين.',
      'قلل قيمة h تدريجياً إلى 0.5، ثم 0.1، ثم 0.01، ثم 0.001.',
      'لاحظ دوران القاطع تدريجياً حتى ينطبق تماماً على خط المماس عند نقطة التماس.',
    ],
    formula: 'f\'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}',
    expectedConclusionEn: 'The instantaneous rate of change is the limiting value of average rates of change as interval duration approaches zero.',
    expectedConclusionAr: 'معدل التغير اللحظي (المشتقة) هو النهاية الرياضية الدقيقة لمتوسط التغير عندما تؤول الفترة الزمنية إلى الصفر.',
    columns: [
      { key: 'trial', labelAr: 'المحاولة / الخطوة', labelEn: 'Trial Step' },
      { key: 'h_val', labelAr: 'مقدار التغير h', labelEn: 'Increment h' },
      { key: 'secant_pt', labelAr: 'إحداثي نقطة القاطع (x0+h, f(x0+h))', labelEn: 'Secant Point' },
      { key: 'secant_slope', labelAr: 'ميل القاطع [f(x0+h)-f(x0)]/h', labelEn: 'Secant Slope' },
      { key: 'tangent_slope', labelAr: 'ميل المماس النظري f\'(x0)', labelEn: 'Tangent f\'(x0)' },
    ],
    sampleRows: [
      { trial: 'المحاولة 1', h_val: '1.000', secant_pt: '(2.00, 2.00)', secant_slope: '4.000', tangent_slope: '0.000' },
      { trial: 'المحاولة 2', h_val: '0.500', secant_pt: '(1.50, -1.125)', secant_slope: '1.750', tangent_slope: '0.000' },
      { trial: 'المحاولة 3', h_val: '0.100', secant_pt: '(1.10, -1.969)', secant_slope: '0.310', tangent_slope: '0.000' },
      { trial: 'المحاولة 4', h_val: '0.010', secant_pt: '(1.01, -1.997)', secant_slope: '0.030', tangent_slope: '0.000' },
      { trial: 'المحاولة 5 (النهاية)', h_val: '0.001', secant_pt: '(1.001, -1.9997)', secant_slope: '0.003', tangent_slope: '0.000' },
    ],
    sampleObservationsAr: 'أثبتت الحسابات الرياضية أن ميل القاطع تناقص تدريجياً من 4.000 إلى 1.750 ثم 0.310 واقترب بدقة من الصفر (0.003) عند صغر h، منطبقاً تماماً على المماس الأفقي f\'(1.0) = 0.',
    sampleObservationsEn: 'Empirical calculations confirmed that the secant slope decreased monotonically from 4.000 to 0.003 as h approached zero, converging strictly to the horizontal tangent derivative f\'(1.0) = 0.000.',
    sampleErrorAnalysisAr: 'خطأ التقريب الحسابي (Floating-point cancellation) عند استخدام قيم بالغة الصغر لـ h في المعالج الرقمي.',
    sampleErrorAnalysisEn: 'Catastrophic floating-point cancellation when computing differences of nearly equal float numbers as h becomes infinitesimal.',
  },

  // 21. Math Static Friction on Inclined Plane
  'math-exp-2': {
    id: 'math-exp-2',
    discipline: 'math',
    titleEn: 'Verifying Static Friction Angles on an Inclined Plane',
    titleAr: 'تحقيق زاوية الاحتكاك السكوني وشروط الاتزان على مستوى مائل خشن',
    gradeEn: 'Grade 12 Applied Math - Statics',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات التطبيقية (الاستاتيكا: اتزان جسم على مستوى مائل)',
    hypothesisEn: 'A body placed on a rough inclined plane is on the verge of sliding when angle θ equals friction angle λ: tan(θ) = μ_s = tan(λ).',
    hypothesisAr: 'يكون الجسم الموضوع على مستوى مائل خشن على وشك الانزلاق تحت تأثير وزنه فقط عندما تتساوى زاوية ميل المستوى مع زاوية الاحتكاك: tan(θ) = μ_s = tan(λ).',
    apparatusEn: ['Adjustable inclination plane model', 'Test block of mass m', 'Friction coefficient selector (μ_s = 0.577)', 'Force decomposition vector display'],
    apparatusAr: ['نموذج مستوى مائل قابل لتعديل زاوية الميل θ', 'جسم كتلته m موضوع على السطح', 'محدد معامل الاحتكاك السكوني μ_s = 0.577', 'لوحة تحليل متجهات القوى (الوزن ومركبتيه، ورد الفعل العمودي، وقوة الاحتكاك)'],
    stepsEn: [
      'Set static friction coefficient μ_s = 0.577 (λ = 30°).',
      'Start with inclination angle θ = 15°; verify equilibrium (F_friction < F_s,max).',
      'Gradually increase θ to 25°; observe friction force increasing.',
      'Reach θ = 30°; observe body reaches limiting equilibrium (on the verge of motion).',
      'Increase θ above 30°; verify body loses equilibrium and accelerates downward.',
    ],
    stepsAr: [
      'اضبط معامل الاحتكاك السكوني μ_s على 0.577 (زاوية الاحتكاك λ = 30°).',
      'ابدأ بزاوية ميل θ = 15°؛ وتحقق من ثبات واتزان الجسم (F_s < F_s,max).',
      'زد زاوية الميل تدريجياً إلى 25°؛ ولاحظ ازدياد قوة الاحتكاك لموازنة مركبة الوزن.',
      'عند زاوية θ = 30° تماماً، يصل الجسم لحالة الاتزان النهائي (على وشك الحركة).',
      'زد الزاوية فوق 30°؛ ولاحظ اختلال الاتزان وبدء انزلاق الجسم لأسفل المستوى.',
    ],
    formula: '\\text{Limiting Equilibrium}: \\tan\\theta = \\mu_s = \\tan\\lambda \\implies \\theta = \\lambda',
    expectedConclusionEn: 'When theta equals lambda, limiting equilibrium is attained independently of body mass.',
    expectedConclusionAr: 'يتحقق الاتزان النهائي وشك الحركة عندما تساوي زاوية ميل المستوى زاوية الاحتكاك السكوني بصورة مستقلة تماماً عن كتلة الجسم.',
    columns: [
      { key: 'angle', labelAr: 'زاوية ميل المستوى θ', labelEn: 'Inclination Angle θ', unit: '°' },
      { key: 'tan_theta', labelAr: 'ظل الزاوية tan(θ)', labelEn: 'tan(θ)' },
      { key: 'normal_force', labelAr: 'رد الفعل العمودي R = mg cos(θ)', labelEn: 'Normal Force R', unit: 'N' },
      { key: 'downward_force', labelAr: 'مركبة الوزن لأسفل W_parallel = mg sin(θ)', labelEn: 'Gravity Component', unit: 'N' },
      { key: 'state', labelAr: 'حالة الاتزان والحركة', labelEn: 'Equilibrium State' },
    ],
    sampleRows: [
      { angle: '15.0', tan_theta: '0.268', normal_force: '94.66', downward_force: '25.36', state: 'اتزان سكوني مستقر (F_friction = 25.36 N < F_s,max)' },
      { angle: '20.0', tan_theta: '0.364', normal_force: '92.09', downward_force: '33.52', state: 'اتزان سكوني (قوة الاحتكاك تتزايد لموازنة المركبة)' },
      { angle: '25.0', tan_theta: '0.466', normal_force: '88.82', downward_force: '41.42', state: 'اتزان سكوني يقترب من النهاية القصوى' },
      { angle: '30.0', tan_theta: '0.577', normal_force: '84.87', downward_force: '49.00', state: 'اتزان نهائي - وشك الحركة (F_s = F_s,max = 49.00 N)' },
      { angle: '35.0', tan_theta: '0.700', normal_force: '80.28', downward_force: '56.21', state: 'حركة وانزلاق لأسفل بتسارع (انعدام الاتزان)' },
    ],
    sampleObservationsAr: 'ظل الجسم في حالة اتزان سكوني تام طالما كانت زاوية الميل أقل من 30°، ووصل لحالة الاتزان النهائي على وشك الحركة عند 30° تماماً حيث tan(30°) = 0.577 = μ_s، وبدأ في الانزلاق فور تجاوز هذه الزاوية بصورة مستقلة عن كتلة الجسم.',
    sampleObservationsEn: 'The block remained in strict static equilibrium for all inclination angles below 30°. At exactly 30°, limiting equilibrium was attained where tan(30°) = 0.577 = μ_s, and sliding commenced above 30° completely independent of block mass.',
    sampleErrorAnalysisAr: 'تفاوت خشونة سطح المستوى في نقاط مختلفة أو عدم انتظام توزيع الكتلة على قاعدة الجسم.',
    sampleErrorAnalysisEn: 'Microscopic non-uniformity in surface roughness along the inclined track or uneven contact pressure.',
  },

  // 22. Math 3D Solid Geometry Direction Cosines
  'math-exp-3': {
    id: 'math-exp-3',
    discipline: 'math',
    titleEn: '3D Spatial Geometry: Direction Cosines & Vector Plane Equations',
    titleAr: 'الهندسة الفراغية ثلاثية الأبعاد: جيوب تمام الاتجاه ومعادلة المستوى في الفراغ',
    gradeEn: 'Grade 12 Pure Math - Solid Geometry & 3D Vectors',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات البحتة (الهندسة الفراغية والمتجهات في الفراغ)',
    hypothesisEn: 'The sum of squares of direction cosines for any 3D vector equals unity: cos²α + cos²β + cos²γ = 1.',
    hypothesisAr: 'مجموع مربعات جيوب تمام الاتجاه لأي متجه في الفراغ ثلاثي الأبعاد يساوي دائماً الواحد الصحيح: cos²α + cos²β + cos²γ = 1.',
    apparatusEn: ['Interactive 3D Three.js Vector Orbit Canvas', 'Direction angles α, β, γ controllers', 'Normal vector plane generator', 'Unit sphere projection visualizer'],
    apparatusAr: ['محاكي الفضاء ثلاثي الأبعاد التفاعلي', 'محددات زوايا الاتجاه مع المحاور α, β, γ', 'مولد معادلة المستوى والمتجه العمودي', 'مسقط كرة الوحدة الفراغية'],
    stepsEn: [
      'Set direction angle with X-axis α = 45° and with Y-axis β = 60°.',
      'Calculate theoretical angle with Z-axis γ using direction cosines identity.',
      'Verify that cos²(45°) + cos²(60°) + cos²(γ) = 0.5 + 0.25 + 0.25 = 1.0 (γ = 60°).',
      'Construct plane perpendicular to normal vector n = (A, B, C) passing through point P0.',
      'Rotate 3D coordinate frame to observe spatial orientation of vector and plane.',
    ],
    stepsAr: [
      'اضبط زاوية الاتجاه مع محور السينات α = 45°، ومع محور الصادات β = 60°.',
      'احسب نظرياً الزاوية مع محور العينات γ باستخدام متطابقة جيوب تمام الاتجاه.',
      'تحقق من أن cos²(45°) + cos²(60°) + cos²(γ) = 0.5 + 0.25 + 0.25 = 1.0 (γ = 60°).',
      'كوّن معادلة المستوى العمودي على المتجه n = (A, B, C) والمار بالنقطة المعلومة P0.',
      'دوّر محاور الإحداثيات ثلاثية الأبعاد لمشاهدة المستوى والعمودي عليه في الفراغ.',
    ],
    formula: '\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1, \\quad \\vec{n} \\cdot (\\vec{r} - \\vec{r}_0) = 0',
    expectedConclusionEn: 'Direction cosines uniquely define spatial vector directions and govern 3D vector scalar and cross-product operations.',
    expectedConclusionAr: 'تحدد جيوب تمام الاتجاه موضع المتجه في الفراغ بدقة متناهية وتتحكم في معادلات الخطوط المستقيمة والمستويات.',
    columns: [
      { key: 'vector_id', labelAr: 'المتجه في الفراغ', labelEn: '3D Vector' },
      { key: 'alpha_angle', labelAr: 'الزاوية مع السينات α', labelEn: 'Angle with X α', unit: '°' },
      { key: 'beta_angle', labelAr: 'الزاوية مع الصادات β', labelEn: 'Angle with Y β', unit: '°' },
      { key: 'gamma_angle', labelAr: 'الزاوية مع العينات γ', labelEn: 'Angle with Z γ', unit: '°' },
      { key: 'sum_sq', labelAr: 'مجموع مربعات جيوب التمام Σ cos²', labelEn: 'Sum cos²(α)+cos²(β)+cos²(γ)' },
      { key: 'plane_eq', labelAr: 'معادلة المستوى العمودي', labelEn: 'Perpendicular Plane Equation' },
    ],
    sampleRows: [
      { vector_id: 'المتجه A (45°, 60°, 60°)', alpha_angle: '45.0', beta_angle: '60.0', gamma_angle: '60.0', sum_sq: '0.500 + 0.250 + 0.250 = 1.000', plane_eq: '√2 x + y + z = 10' },
      { vector_id: 'المتجه B (60°, 45°, 60°)', alpha_angle: '60.0', beta_angle: '45.0', gamma_angle: '60.0', sum_sq: '0.250 + 0.500 + 0.250 = 1.000', plane_eq: 'x + √2 y + z = 12' },
      { vector_id: 'المتجه C (120°, 60°, 45°)', alpha_angle: '120.0', beta_angle: '60.0', gamma_angle: '45.0', sum_sq: '0.250 + 0.250 + 0.500 = 1.000', plane_eq: '-x + y + √2 z = 0' },
      { vector_id: 'متجه الوحدة متساوي الميل', alpha_angle: '54.74', beta_angle: '54.74', gamma_angle: '54.74', sum_sq: '0.333 + 0.333 + 0.333 = 1.000', plane_eq: 'x + y + z = 3√3' },
    ],
    sampleObservationsAr: 'أكدت القياسات الفراغية أن مجموع مربعات جيوب تمام الاتجاه يساوي الواحد الصحيح تماماً في جميع المتجهات المختبرة، وأن المتجه العمودي يحدد بدقة التوجه المكاني لمستويات الفراغ ثلاثي الأبعاد.',
    sampleObservationsEn: 'Spatial vector telemetry proved that the sum of squared direction cosines strictly equals 1.000 across all orientations, uniquely defining normal vectors and their corresponding 3D plane equations.',
    sampleErrorAnalysisAr: 'أخطاء التقريب عند تحويل الدرجات الستينية إلى راديان وحساب الجذور الصماء.',
    sampleErrorAnalysisEn: 'Rounding error when converting sexagesimal degrees to radian floats and representing irrational trigonometric roots.',
  },

  // 23. Math Linear Momentum & Ballistics
  'math-exp-4': {
    id: 'math-exp-4',
    discipline: 'math',
    titleEn: 'Conservation of Linear Momentum in 2D Collisions & Ballistic Projectile Trajectories',
    titleAr: 'قانون حفظ كمية الحركة في التصادمات ثنائية الأبعاد ومسارات المقذوفات البالستية',
    gradeEn: 'Grade 12 Applied Math - Dynamics (Chapters 2 & 3)',
    gradeAr: 'الصف الثالث الثانوي - الرياضيات التطبيقية (الديناميكا: كمية الحركة والدفع والمقذوفات)',
    hypothesisEn: 'Total linear momentum is conserved across all collisions (ΔP = 0); horizontal range is maximized at 45° launch angle in vacuum.',
    hypothesisAr: 'كمية الحركة الكلية محفوظة تماماً في جميع أنواع التصادمات (ΔP = 0)؛ والمدى الأفقي للمقذوف في الفراغ يبلغ ذروته عند زاوية إطلاق 45°.',
    apparatusEn: [
      '2D Direct and Oblique Collision Sandbox with adjustable mass m1, m2',
      'Restitution coefficient e controller (0 ≤ e ≤ 1)',
      'Ballistic launcher with variable muzzle velocity v0 and launch angle θ',
      'Quadratic aerodynamic air drag simulator (Cd = 0.47)',
      'Dual vector telemetry displaying impulse J, ΔKE, and mechanical energy',
    ],
    apparatusAr: [
      'منصة التصادم في بعدين المباشر وغير المباشر بكتل متغيرة m1, m2',
      'محدد معامل الارتداد لنيوتن e (0 ≤ e ≤ 1)',
      'مدفع قذف بالستي متغير سرعة الإطلاق v0 وزاوية الميل θ',
      'محاكي مقاومة الهواء الهوائية التربيعية مع عامل الإعاقة Cd',
      'شاشة قياسات لحظية لمتجه الدفع J، الطاقة المفقودة ΔKE، والطاقة الميكانيكية الكلية',
    ],
    stepsEn: [
      'Set m1 = m2 = 2.0 kg, v1 = 5.0 m/s, v2 = 0, and e = 1.0 (Newton Cradle).',
      'Observe complete velocity exchange: Ball 1 stops (v\'1 = 0) while Ball 2 departs at 5.0 m/s with ΔKE = 0.',
      'Set e = 0 (Plastic Coalescence); verify common velocity V = (m1 v1 + m2 v2) / (m1 + m2) and measure maximum kinetic energy loss.',
      'Configure 2D oblique collision with impact parameter b; observe normal impulse J transfer while tangential velocity is conserved.',
      'Switch to Projectile Motion module; launch projectile at v0 = 20 m/s across angles 30°, 45°, 60°.',
      'Verify that 45° angle achieves maximum horizontal range R = v0² / g ≈ 40.8 m.',
      'Confirm complementary angle symmetry: R(30°) = R(60°) = 35.3 m.',
      'Enable aerodynamic drag; observe range compression and asymmetric steepening of descent angle.',
    ],
    stepsAr: [
      'اضبط m1 = m2 = 2.0 kg و v1 = 5.0 m/s و v2 = 0 ومعامل الارتداد e = 1.0 (بندول نيوتن).',
      'لاحظ التبادل التام للسرعات: يتوقف الجسم الأول تماماً بينما ينطلق الثاني بسرعة 5.0 m/s مع انعدام الفقد في طاقة الحركة.',
      'اضبط e = 0 (تصادم غير مرن تام - التحام)؛ تحقق من السرعة المشتركة V = (m1 v1 + m2 v2) / (m1 + m2) وسجل أقصى فقد في الطاقة.',
      'اضبط تصادماً مائلاً مع إزاحة b؛ ولاحظ انتقال الدفع عمودياً وثبات السرعة في اتجاه المماس المشترك.',
      'انتقل إلى محاكي المقذوفات؛ أطلق مقذوفاً بسرعة v0 = 20 m/s عند زوايا 30° و 45° و 60°.',
      'تحقق من أن زاوية 45° تحقق أقصى مدى أفقي ممكن R = v0² / g ≈ 40.8 m.',
      'أثبت تماثل الزوايا المتتامة: R(30°) = R(60°) = 35.3 m.',
      'فعّل مقاومة الهواء؛ ولاحظ انكماش المدى الأفقي وزيادة حدة زاوية الهبوط مقارنة بالصعود.',
    ],
    formula: 'm_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{v}\'_1 + m_2 \\vec{v}\'_2, \\quad R = \\frac{v_0^2\\sin(2\\theta)}{g}, \\quad \\vec{J} = \\Delta\\vec{p}',
    expectedConclusionEn: 'Total linear momentum is conserved across all collisions (ΔP = 0); horizontal range is maximized at 45° launch angle in vacuum.',
    expectedConclusionAr: 'كمية الحركة الكلية محفوظة تماماً في جميع أنواع التصادمات (ΔP = 0)؛ والمدى الأفقي للمقذوف في الفراغ يبلغ ذروته عند زاوية إطلاق 45°.',
    columns: [
      { key: 'trial_type', labelAr: 'نوع التجربة / الاختبار', labelEn: 'Experiment Type' },
      { key: 'param', labelAr: 'المعامل التجريبي (e أو θ)', labelEn: 'Parameter (e or θ)' },
      { key: 'initial_p', labelAr: 'كمية الحركة الابتدائية P_i', labelEn: 'Initial Momentum P_i', unit: 'kg·m/s' },
      { key: 'final_p', labelAr: 'كمية الحركة النهائية P_f', labelEn: 'Final Momentum P_f', unit: 'kg·m/s' },
      { key: 'delta_ke', labelAr: 'تغير طاقة الحركة ΔKE', labelEn: 'Kinetic Energy Loss ΔKE', unit: 'J' },
      { key: 'result', labelAr: 'النتيجة / المدى الأفقي', labelEn: 'Observed Range / Result' },
    ],
    sampleRows: [
      { trial_type: 'تصادم مرن تام (بندول نيوتن)', param: 'e = 1.00', initial_p: '10.00', final_p: '10.00 (محفوظة)', delta_ke: '0.00 (حفظ الطاقة)', result: 'تبادل تام للسرعات (توقف الجسم الأول وانطلاق الثاني)' },
      { trial_type: 'تصادم غير مرن (التحام تام)', param: 'e = 0.00', initial_p: '10.00', final_p: '10.00 (محفوظة)', delta_ke: '-12.50 (فقد 50%)', result: 'تحرك الجسمين ككتلة واحدة مشتركة بسرعة V = 2.5 m/s' },
      { trial_type: 'مقذوف بالستي (زاوية 30°)', param: 'θ = 30°, v0 = 20 m/s', initial_p: 'P_x = 17.32', final_p: 'P_x = 17.32 (ثابت)', delta_ke: '0.00 (حفظ ميكانيكي)', result: 'المدى الأفقي R = 35.35 m (زمن التحليق 2.04 s)' },
      { trial_type: 'مقذوف بالستي (أقصى مدى 45°)', param: 'θ = 45°, v0 = 20 m/s', initial_p: 'P_x = 14.14', final_p: 'P_x = 14.14 (ثابت)', delta_ke: '0.00 (حفظ ميكانيكي)', result: 'أقصى مدى أفقي ممكن R_max = 40.82 m (ذروة المدى)' },
      { trial_type: 'مقذوف بالستي (زاوية متتامة 60°)', param: 'θ = 60°, v0 = 20 m/s', initial_p: 'P_x = 10.00', final_p: 'P_x = 10.00 (ثابت)', delta_ke: '0.00 (حفظ ميكانيكي)', result: 'المدى الأفقي R = 35.35 m (تطابق تام مع زاوية 30°)' },
      { trial_type: 'مقذوف مع مقاومة هواء (drag)', param: 'Cd = 0.47, θ = 45°', initial_p: 'P_x = 14.14', final_p: 'فقد تدريجي بالاحتكاك', delta_ke: '-38.40 (فقد هوائي)', result: 'انكماش المدى الأفقي إلى R = 28.40 m مع هبوط حاد' },
    ],
    sampleObservationsAr: 'أكدت قياسات التصادم حفظ كمية الحركة التام في جميع الحالات (ΔP = 0)، مع انعدام الفقد في الطاقة عند e = 1، بينما برهنت المقذوفات أن زاوية 45° تحقق أقصى مدى أفقي (40.82 m) مع تماثل متطابق للمدى عند الزاويتين المتتامتين 30° و 60°.',
    sampleObservationsEn: 'Vector telemetry proved strict conservation of linear momentum (ΔP = 0) across both elastic and inelastic collisions. Projectile dynamics confirmed that 45° optimizes horizontal range to 40.82 m, with identical range symmetry observed between complementary angles (30° and 60° = 35.35 m).',
    sampleErrorAnalysisAr: 'فقد جزء من طاقة التصادم في صورة موجات صوتية واهتزازات أو تأثير الرياح الجانبية على المقذوف.',
    sampleErrorAnalysisEn: 'Acoustic and thermal energy dissipation during physical collision contact or lateral wind gusts perturbing projectile trajectory.',
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
