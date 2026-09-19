/**
 * Industrial Technology & Applied Engineering Virtual Laboratory Data
 * Accredited for Egyptian General Secondary (Thanaweya Amma) & New Egyptian Baccalaureate (EG-Bac)
 * 5-Station Engineering Simulation Architecture
 */

// ============================================================================
// STATION 1: Materials Testing & Metallurgy
// ============================================================================

export interface EngineeringMaterialPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  standard: string;
  category: 'ferrous' | 'non_ferrous' | 'polymer' | 'composite';
  density: number; // g/cm³
  elasticModulusE: number; // GPa
  yieldStrength: number; // MPa
  tensileStrengthUTS: number; // MPa
  fractureStrainPct: number; // %
  poissonsRatio: number;
  hardnessBrinell: number; // HB
  heatTreatable: boolean;
  color: string;
  descriptionEn: string;
  descriptionAr: string;
  applicationsEn: string[];
  applicationsAr: string[];
  stressStrainCurve: { strain: number; stress: number }[];
}

export const ENGINEERING_MATERIALS: EngineeringMaterialPreset[] = [
  {
    id: 'astm_a36_steel',
    nameEn: 'ASTM A36 Structural Carbon Steel',
    nameAr: 'صلب إنشائي كربوني ASTM A36',
    standard: 'ASTM A36 / Egyptian MoE Standard',
    category: 'ferrous',
    density: 7.85,
    elasticModulusE: 200,
    yieldStrength: 250,
    tensileStrengthUTS: 400,
    fractureStrainPct: 22,
    poissonsRatio: 0.26,
    hardnessBrinell: 133,
    heatTreatable: true,
    color: '#94A3B8',
    descriptionEn: 'Standard low-carbon structural steel with distinct upper and lower yield points, excellent weldability, and wide ductile necking zone.',
    descriptionAr: 'صلب إنشائي منخفض الكربون يتميز بنقطتي خضوع عليا وسفلى واضحتين، وقابلية فائقة للحام وتشكيل لدن مع منطقة تخصر عريضة.',
    applicationsEn: ['Bridges and trusses', 'High-rise structural columns', 'Industrial crane rails', 'Welded machinery bases'],
    applicationsAr: ['الجسور والجمالونات الإنشائية', 'أعمدة المباني الشاهقة', 'قضبان الرافعات الصناعية', 'قواعد الماكينات الملحومة'],
    stressStrainCurve: [
      { strain: 0, stress: 0 },
      { strain: 0.00125, stress: 250 },
      { strain: 0.02, stress: 250 },
      { strain: 0.08, stress: 350 },
      { strain: 0.15, stress: 400 },
      { strain: 0.22, stress: 340 },
    ],
  },
  {
    id: 'al_6061_t6',
    nameEn: '6061-T6 Aerospace Aluminum Alloy',
    nameAr: 'سبيكة ألومنيوم طيران 6061-T6 معالجة حرارياً',
    standard: 'AA 6061-T6 / ISO 209',
    category: 'non_ferrous',
    density: 2.70,
    elasticModulusE: 68.9,
    yieldStrength: 276,
    tensileStrengthUTS: 310,
    fractureStrainPct: 12,
    poissonsRatio: 0.33,
    hardnessBrinell: 95,
    heatTreatable: true,
    color: '#38BDF8',
    descriptionEn: 'Precipitation-hardened aluminum-magnesium-silicon alloy combining high strength-to-weight ratio, superb corrosion resistance, and CNC precision machinability.',
    descriptionAr: 'سبيكة ألومنيوم وماغنسيوم وسيليكون معالجة بالتصليد الترسيبي، توفر نسبة قوة إلى وزن فائقة ومقاومة ممتازة للتآكل ودقة عالية في تشغيل CNC.',
    applicationsEn: ['Aircraft wing spars', 'High-speed robotic arms', 'Automotive chassis frames', 'Precision CNC fixtures'],
    applicationsAr: ['دعامات أجنحة الطائرات', 'أذرع الروبوتات الصناعية السريعة', 'شاسيهات السيارات الحديثة', 'مثبتات ماكينات CNC الدقيقة'],
    stressStrainCurve: [
      { strain: 0, stress: 0 },
      { strain: 0.004, stress: 276 },
      { strain: 0.04, stress: 295 },
      { strain: 0.08, stress: 310 },
      { strain: 0.12, stress: 285 },
    ],
  },
  {
    id: 'gray_cast_iron_40',
    nameEn: 'Class 40 Gray Cast Iron (Flake Graphite)',
    nameAr: 'حديد زهر رمادي رتبة 40 (جرافيت رقائقي)',
    standard: 'ASTM A48 Class 40',
    category: 'ferrous',
    density: 7.20,
    elasticModulusE: 115,
    yieldStrength: 0, // Brittle fracture without plastic yield
    tensileStrengthUTS: 290,
    fractureStrainPct: 0.6,
    poissonsRatio: 0.25,
    hardnessBrinell: 235,
    heatTreatable: false,
    color: '#64748B',
    descriptionEn: 'Brittle engineering cast iron containing flake graphite microstructures; offers exceptional compressive strength (850 MPa), superior vibration damping, and wear resistance.',
    descriptionAr: 'حديد زهر هندسي هش يحتوي على رقائق جرافيتية مجهرية؛ يتمتع بمقاومة ضغط استثنائية (850 ميجا باسكال) وقدرة فائقة على إخماد الاهتزازات ومقاومة التآكل.',
    applicationsEn: ['Lathe and milling machine beds', 'Automotive engine blocks', 'Brake discs and drums', 'Hydraulic valve manifolds'],
    applicationsAr: ['فرش مخارط وماكينات التفريز', 'كتل محركات الاحتراق الداخلي', 'أقراص فرامل المركبات', 'موزعات الصمامات الهيدروليكية'],
    stressStrainCurve: [
      { strain: 0, stress: 0 },
      { strain: 0.002, stress: 150 },
      { strain: 0.004, stress: 240 },
      { strain: 0.006, stress: 290 },
    ],
  },
  {
    id: 'ti_6al_4v',
    nameEn: 'Ti-6Al-4V Grade 5 Titanium Alloy',
    nameAr: 'سبيكة التيتانيوم Ti-6Al-4V رتبة 5 (ألفا-بيتا)',
    standard: 'ASTM B265 Grade 5',
    category: 'non_ferrous',
    density: 4.43,
    elasticModulusE: 113.8,
    yieldStrength: 880,
    tensileStrengthUTS: 950,
    fractureStrainPct: 14,
    poissonsRatio: 0.342,
    hardnessBrinell: 334,
    heatTreatable: true,
    color: '#A855F7',
    descriptionEn: 'Dual-phase alpha-beta titanium alloy offering extraordinary specific strength, biocompatibility, and service temperatures up to 400°C.',
    descriptionAr: 'سبيكة تيتانيوم ثنائية الطور (ألفا-بيتا) تتميز بقوة نوعية هائلة، وتوافق حيوي تام، وقدرة تشغيل مستمرة حتى حرارة 400 درجة مئوية.',
    applicationsEn: ['Jet engine turbine blades', 'Orthopedic bone implants', 'Deep-sea pressure hulls', 'Aerospace fasteners'],
    applicationsAr: ['ريش توربينات المحركات النفاثة', 'المفاصل والشرائح العظمية الطبية', 'غواصات الأعماق وأوعية الضغط', 'مثبتات ومسامير الطائرات'],
    stressStrainCurve: [
      { strain: 0, stress: 0 },
      { strain: 0.0077, stress: 880 },
      { strain: 0.04, stress: 910 },
      { strain: 0.08, stress: 940 },
      { strain: 0.11, stress: 950 },
      { strain: 0.14, stress: 890 },
    ],
  },
  {
    id: 'polycarbonate_opt',
    nameEn: 'Engineering Polycarbonate (Optical Grade)',
    nameAr: 'بوليمر بولي كربونات هندسي فائق المتانة',
    standard: 'ISO 7391',
    category: 'polymer',
    density: 1.20,
    elasticModulusE: 2.38,
    yieldStrength: 62,
    tensileStrengthUTS: 72,
    fractureStrainPct: 90,
    poissonsRatio: 0.38,
    hardnessBrinell: 28,
    heatTreatable: false,
    color: '#10B981',
    descriptionEn: 'Amorphous thermoplastic with extreme impact resistance, optical clarity, and high elongation before ductile failure.',
    descriptionAr: 'بوليمر لدن حرارياً غير متبلور يتميز بمقاومة صدمات استثنائية ونفاذية ضوئية عالية مع استطالة لدنة شاسعة قبل الكسر.',
    applicationsEn: ['Machine safety guards', 'Riot shields & safety goggles', 'Aircraft cabin canopies', 'Automotive headlamp lenses'],
    applicationsAr: ['حواجز حماية الماكينات الشفافة', 'دروع الأمن ونظارات الوقاية الصناعية', 'قباب كبائن الطائرات', 'عدسات كشافات السيارات'],
    stressStrainCurve: [
      { strain: 0, stress: 0 },
      { strain: 0.026, stress: 62 },
      { strain: 0.15, stress: 55 },
      { strain: 0.50, stress: 65 },
      { strain: 0.90, stress: 72 },
    ],
  },
];

export interface HeatTreatmentProcess {
  id: string;
  nameEn: string;
  nameAr: string;
  tempRangeC: string;
  coolingMediumEn: string;
  coolingMediumAr: string;
  targetMicrostructureEn: string;
  targetMicrostructureAr: string;
  hardnessChange: string;
  ductilityChange: string;
  summaryEn: string;
  summaryAr: string;
}

export const HEAT_TREATMENT_PROCESSES: HeatTreatmentProcess[] = [
  {
    id: 'full_annealing',
    nameEn: 'Full Annealing (تخمير تام)',
    nameAr: 'التخمير التام وإزالة الإجهادات الداخلية',
    tempRangeC: '850°C - 900°C (Above A3 by 50°C)',
    coolingMediumEn: 'Furnace cooling (extremely slow: 10°C - 30°C/hr)',
    coolingMediumAr: 'تبريد بطيء جداً داخل الفرن المطفأ',
    targetMicrostructureEn: 'Coarse Pearlite + Proeutectoid Ferrite',
    targetMicrostructureAr: 'بيرليت خشن + فيريت مسبق اليوتكتويد',
    hardnessChange: 'Decreases significantly (-35%)',
    ductilityChange: 'Increases to maximum (+50%)',
    summaryEn: 'Softens work-hardened steel, relieves residual mechanical stresses, and refines crystal grain boundaries for subsequent machining.',
    summaryAr: 'يلين الصلب المتصلد ميكانيكياً ويزيل الإجهادات المتبقية وينعم الحبيبات لتسهيل عمليات التشغيل اللاحقة.',
  },
  {
    id: 'normalizing',
    nameEn: 'Normalizing (معادلة حرارية)',
    nameAr: 'المعادلة الحرارية في الهواء الطلق',
    tempRangeC: '900°C - 950°C (Above A3/Acm by 50°C)',
    coolingMediumEn: 'Still room-temperature air cooling',
    coolingMediumAr: 'تبريد هادئ في هواء الغرفة الساكن',
    targetMicrostructureEn: 'Fine Pearlite with uniform grain dispersion',
    targetMicrostructureAr: 'بيرليت ناعم مع تجانس كامل في حجم الحبيبات',
    hardnessChange: 'Moderate increase (+15%)',
    ductilityChange: 'Moderate balance of toughness',
    summaryEn: 'Produces fine, uniform grain structures superior to cast/rolled conditions, yielding higher tensile strength and impact toughness.',
    summaryAr: 'ينتج بنية حبيبية ناعمة ومتجانسة تفوق حالات الدرفلة والسبك، مما يرفع مقاومة الشد ومتانة الصدمات.',
  },
  {
    id: 'quenching',
    nameEn: 'Martensitic Quenching (تقسية بالتسقية)',
    nameAr: 'التقسية الفجائية بالتسقية في الزيت أو الماء',
    tempRangeC: '850°C - 880°C (Austenitizing zone)',
    coolingMediumEn: 'Agitated water, brine, or mineral quenching oil',
    coolingMediumAr: 'تسقية سريعة في ماء مملح أو زيت معدني مقلب',
    targetMicrostructureEn: 'Body-Centered Tetragonal (BCT) Martensite',
    targetMicrostructureAr: 'مارتنسيت إبري رباعي الأوجه (BCT) فائق الصلادة',
    hardnessChange: 'Maximal increase (up to 62-65 HRC / 650 HB)',
    ductilityChange: 'Drops to nearly zero (extremely brittle)',
    summaryEn: 'Suppresses carbon diffusion by ultra-fast cooling exceeding the critical cooling rate (CCR), freezing carbon into needle-like brittle Martensite.',
    summaryAr: 'يمنع انتشار ذرات الكربون بالتبريد فائق السرعة متجاوزاً المعدل الحرج، ليحبس الكربون داخل طور المارتنسيت فائق الصلادة والهشاشة.',
  },
  {
    id: 'tempering',
    nameEn: 'Tempering (مراجعة حرارية)',
    nameAr: 'المراجعة الحرارية بعد التقسية',
    tempRangeC: '200°C - 600°C (Below A1 eutectoid line)',
    coolingMediumEn: 'Air cooling after controlled holding soaking time',
    coolingMediumAr: 'تبريد هوائي بعد تثبيت زمني منظم داخل الفرن',
    targetMicrostructureEn: 'Tempered Martensite (fine carbide spheres in ferrite)',
    targetMicrostructureAr: 'مارتنسيت مراجع (حبيبات كربيدات كروية في أرضية فيريتية)',
    hardnessChange: 'Controlled decrease (-10% to -25%)',
    ductilityChange: 'Dramatic recovery of impact toughness and fatigue life',
    summaryEn: 'Decompresses brittle Martensite into tempered Martensite, eliminating internal quench stresses while preserving high wear resistance.',
    summaryAr: 'يريح المارتنسيت الهش ويحوله إلى طور مراجع، مانعاً الشروخ ومحققاً توازناً مثالياً بين الصلادة والمتانة الميكانيكية.',
  },
];

// ============================================================================
// STATION 2: PLC Automation & Ladder Logic Simulator
// ============================================================================

export interface LadderInputItem {
  id: string;
  type: 'NO' | 'NC';
  tag: string;
  labelEn: string;
  labelAr: string;
  address: string; // e.g. %I0.0
}

export interface LadderOutputItem {
  id: string;
  type: 'COIL' | 'TIMER' | 'COUNTER';
  tag: string;
  labelEn: string;
  labelAr: string;
  address: string; // e.g. %Q0.0
  presetVal?: number; // e.g. seconds or count
}

export interface LadderRungConfig {
  rungIndex: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  inputs: LadderInputItem[];
  parallelBranch?: LadderInputItem[]; // e.g. latch contact
  output: LadderOutputItem;
}

export interface PlcProgramPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  applicationEn: string;
  applicationAr: string;
  rungs: LadderRungConfig[];
}

export const PLC_PROGRAM_PRESETS: PlcProgramPreset[] = [
  {
    id: 'dol_motor_starter',
    nameEn: 'Direct-On-Line (DOL) Motor Starter with Latch & Thermal Trip',
    nameAr: 'دائرة بدء تشغيل مباشر (DOL) لمحرك حثي مع تعشيق وحماية حرارية',
    applicationEn: 'Industrial pumps, exhaust blowers, and conveyor motors',
    applicationAr: 'المضخات الصناعية، مراوح التهوية، وسيور النقل الإنتاجية',
    rungs: [
      {
        rungIndex: 0,
        titleEn: 'Main Contactor Seal-in Circuit',
        titleAr: 'دائرة إمساك وتغذية الكونتاكتور الرئيسي',
        descriptionEn: 'Pressing Start PB (%I0.1) latches KM1 (%Q0.0) through its auxiliary contact, while Stop PB (%I0.0) or Overload Relay (%I0.2) breaks the circuit.',
        descriptionAr: 'الضغط على زر التشغيل (%I0.1) يعشق الكونتاكتور عبر ملامس الحفظ (%Q0.0)، بينما يقطع زر الإيقاف (%I0.0) أو المرحل الحراري (%I0.2) التغذية.',
        inputs: [
          { id: 'in_stop', type: 'NC', tag: 'STOP_PB', labelEn: 'Stop Button (NC)', labelAr: 'زر إيقاف (مغلق طبيعياً)', address: '%I0.0' },
          { id: 'in_start', type: 'NO', tag: 'START_PB', labelEn: 'Start Button (NO)', labelAr: 'زر تشغيل (مفتوح طبيعياً)', address: '%I0.1' },
          { id: 'in_ol', type: 'NC', tag: 'OL_TRIP', labelEn: 'Overload Relay 95-96', labelAr: 'أوفرلود حراري 95-96', address: '%I0.2' },
        ],
        parallelBranch: [
          { id: 'in_latch', type: 'NO', tag: 'KM1_NO', labelEn: 'KM1 Seal-in Contact', labelAr: 'ملامس التعشيق المساعد KM1', address: '%Q0.0' }
        ],
        output: { id: 'out_km1', type: 'COIL', tag: 'KM1_COIL', labelEn: 'Main Motor Contactor', labelAr: 'ملف كونتاكتور المحرك الرئيسي', address: '%Q0.0' },
      },
      {
        rungIndex: 1,
        titleEn: 'Thermal Fault Alarm Horn & Indicator',
        titleAr: 'إنذار العطل الحراري وضوء التنبيه الصوتي',
        descriptionEn: 'When Overload trip occurs (%I0.2 open), auxiliary NC contact activates warning strobe lamp %Q0.1.',
        descriptionAr: 'عند تفعيل الأوفرلود يضيء مصباح الإنذار الأحمر %Q0.1 للتنبيه بزيادة تيار المحرك.',
        inputs: [
          { id: 'in_ol_fault', type: 'NO', tag: 'OL_FAULT_NO', labelEn: 'Overload 97-98 Fault Contact', labelAr: 'ملامس عطل الأوفرلود 97-98', address: '%I0.3' },
        ],
        output: { id: 'out_alarm', type: 'COIL', tag: 'FAULT_LAMP', labelEn: 'Red Fault Strobe Lamp', labelAr: 'مصباح إنذار أحمر للعطل', address: '%Q0.1' },
      },
    ],
  },
  {
    id: 'star_delta_transition',
    nameEn: 'Star-Delta Motor Starter with Timer (TON 5.0s)',
    nameAr: 'بادئ تشغيل ستار-دلتا الأوتوماتيكي بمؤقت زمني (TON 5 ثوانٍ)',
    applicationEn: 'High-power centrifugal chillers and heavy milling spindles > 7.5 kW',
    applicationAr: 'ضواغط التبريد المركزية ومغازل التفريز الكبيرة أكبر من 7.5 كيلوواط',
    rungs: [
      {
        rungIndex: 0,
        titleEn: 'Main Contactor KM1 and Timer Enable',
        titleAr: 'تغذية الكونتاكتور الرئيسي KM1 وتفعيل المؤقت',
        descriptionEn: 'Energizes main line contactor KM1 and starts On-Delay Timer T1 (preset = 5 seconds).',
        descriptionAr: 'تشغيل كونتاكتور الخط الرئيسي وتفعيل المؤقت الزمني T1 لعد 5 ثوانٍ تمهيداً للتحويل لدلتا.',
        inputs: [
          { id: 'sd_stop', type: 'NC', tag: 'STOP_PB', labelEn: 'Emergency Stop', labelAr: 'مفتاح الطوارئ', address: '%I0.0' },
          { id: 'sd_start', type: 'NO', tag: 'START_PB', labelEn: 'System Start', labelAr: 'بدء المنظومة', address: '%I0.1' },
        ],
        parallelBranch: [
          { id: 'sd_latch', type: 'NO', tag: 'KM1_AUX', labelEn: 'KM1 Latch', labelAr: 'ملامس تعشيق KM1', address: '%Q0.0' }
        ],
        output: { id: 'sd_t1', type: 'TIMER', tag: 'T1_TON', labelEn: 'Timer On-Delay (TON 5s)', labelAr: 'مؤقت تأخير التشغيل (5 ثوانٍ)', address: '%TM1', presetVal: 5 },
      },
      {
        rungIndex: 1,
        titleEn: 'Star Contactor KM2 (Reduced Inrush Current)',
        titleAr: 'كونتاكتور توصيل النجمة KM2 (لتقليص تيار البدء إلى الثلث)',
        descriptionEn: 'KM2 connects motor windings in Star while T1 is timing; locked out when Delta KM3 operates.',
        descriptionAr: 'يعمل KM2 أثناء توقيت العداد، ويقفل ميكانيكياً وكهربياً لمنع قصر الأوجه مع كونتاكتور دلتا.',
        inputs: [
          { id: 'sd_km1_run', type: 'NO', tag: 'KM1_RUN', labelEn: 'KM1 Main Active', labelAr: 'الرئيسي KM1 يعمل', address: '%Q0.0' },
          { id: 'sd_t1_done', type: 'NC', tag: 'T1_DN_NC', labelEn: 'Timer T1 Done (NC)', labelAr: 'نهاية المؤقت T1 (مغلق طبيعياً)', address: '%TM1.Q' },
          { id: 'sd_km3_lock', type: 'NC', tag: 'KM3_NC_ILOCK', labelEn: 'KM3 Delta Interlock (NC)', labelAr: 'قفل كهربي متبادل مع دلتا', address: '%Q0.2' },
        ],
        output: { id: 'sd_km2', type: 'COIL', tag: 'KM2_STAR', labelEn: 'Star Contactor (Y)', labelAr: 'كونتاكتور النجمة KM2', address: '%Q0.1' },
      },
      {
        rungIndex: 2,
        titleEn: 'Delta Contactor KM3 (Full Line Voltage)',
        titleAr: 'كونتاكتور توصيل الدلتا KM3 (الجهد الكامل للشبكة)',
        descriptionEn: 'After 5.0 seconds, T1 contact closes, locking out Star and engaging Delta KM3 at full power.',
        descriptionAr: 'بعد انقضاء 5 ثوانٍ، يغلق ملامس المؤقت ويفصل النجمة ويعشق الدلتا للعمل بالقدرة الكاملة.',
        inputs: [
          { id: 'sd_km1_on', type: 'NO', tag: 'KM1_ACTIVE', labelEn: 'KM1 Main Active', labelAr: 'الرئيسي KM1 يعمل', address: '%Q0.0' },
          { id: 'sd_t1_contact', type: 'NO', tag: 'T1_DN_NO', labelEn: 'Timer T1 Done (NO)', labelAr: 'ملامس اكتمال المؤقت T1', address: '%TM1.Q' },
          { id: 'sd_km2_lock', type: 'NC', tag: 'KM2_NC_ILOCK', labelEn: 'KM2 Star Interlock (NC)', labelAr: 'قفل كهربي متبادل مع ستار', address: '%Q0.1' },
        ],
        output: { id: 'sd_km3', type: 'COIL', tag: 'KM3_DELTA', labelEn: 'Delta Contactor (Δ)', labelAr: 'كونتاكتور الدلتا KM3', address: '%Q0.2' },
      },
    ],
  },
  {
    id: 'conveyor_counter',
    nameEn: 'Automated Conveyor Batch Counter & Diverter (CTU)',
    nameAr: 'منظومة فرز وعد المنتجات الصناعية على السير الناقل (عداد تصاعدي)',
    applicationEn: 'Food packaging lines, pharmaceutical bottling, and automotive sorting',
    applicationAr: 'خطوط تعبئة وتغليف الأغذية، الصيدلانيات، وفرز قطع غيار المركبات',
    rungs: [
      {
        rungIndex: 0,
        titleEn: 'Optical Proximity Part Counter (CTU)',
        titleAr: 'حساس القرب الضوئي والعداد التصاعدي',
        descriptionEn: 'Each passing workpiece triggers photoelectric proximity sensor %I0.1, incrementing counter C1 toward preset = 10.',
        descriptionAr: 'كل قطعة تمر أمام الحساس الضوئي ترسل نبضة للعداد C1 ليصل للدفعة المستهدفة (10 قطع).',
        inputs: [
          { id: 'cnt_reset', type: 'NC', tag: 'BATCH_RESET', labelEn: 'Batch Reset Button', labelAr: 'زر تصفير الدفعة', address: '%I0.0' },
          { id: 'cnt_pe', type: 'NO', tag: 'PE_SENSOR', labelEn: 'Photoelectric Sensor', labelAr: 'حساس كهروضوئي', address: '%I0.1' },
        ],
        output: { id: 'cnt_c1', type: 'COUNTER', tag: 'C1_CTU', labelEn: 'Counter Up (Target=10)', labelAr: 'عداد تصاعدي (الهدف=10)', address: '%C1', presetVal: 10 },
      },
      {
        rungIndex: 1,
        titleEn: 'Pneumatic Diverter Solenoid Valve',
        titleAr: 'صمام توجيه المكبس النيوماتيكي لفرز الدفعة',
        descriptionEn: 'When C1 reaches 10, output contact fires pneumatic solenoid valve %Q0.0 to divert completed batch into crate.',
        descriptionAr: 'عند بلوغ 10 قطع، يفعل العداد الملف الكهرومغناطيسي %Q0.0 لتحريك المكبس ودفع الصندوق.',
        inputs: [
          { id: 'cnt_done', type: 'NO', tag: 'C1_DONE', labelEn: 'Counter C1 Done Contact', labelAr: 'ملامس اكتمال العداد C1', address: '%C1.Q' },
        ],
        output: { id: 'out_divert', type: 'COIL', tag: 'SOL_DIVERT', labelEn: 'Pneumatic Diverter Solenoid', labelAr: 'ملف صمام تحويل المسار', address: '%Q0.0' },
      },
    ],
  },
];

// ============================================================================
// STATION 3: Fluid Power: Hydraulics & Pneumatics Engineering
// ============================================================================

export interface FluidPowerCircuitPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  fluidType: 'hydraulic_oil' | 'compressed_air';
  supplyPressureBar: number; // bar
  pumpFlowRateLpm: number; // L/min (or NL/min for air)
  cylinderBoreMm: number; // D (mm)
  cylinderRodMm: number; // d (mm)
  cylinderStrokeMm: number; // L (mm)
  throttlePct: number; // % opening
  valveType: '4_3_dcv' | '5_2_dcv';
  centerPosition?: 'tandem' | 'closed' | 'float';
  descriptionEn: string;
  descriptionAr: string;
  industrialUseEn: string;
  industrialUseAr: string;
}

export const FLUID_POWER_PRESETS: FluidPowerCircuitPreset[] = [
  {
    id: 'heavy_hydraulic_press',
    nameEn: 'Industrial Hydraulic Stamping Press (160 Bar)',
    nameAr: 'مكبس تشكيل هيدروليكي صناعي عالي القدرة (160 بار)',
    fluidType: 'hydraulic_oil',
    supplyPressureBar: 160,
    pumpFlowRateLpm: 35,
    cylinderBoreMm: 100,
    cylinderRodMm: 50,
    cylinderStrokeMm: 400,
    throttlePct: 80,
    valveType: '4_3_dcv',
    centerPosition: 'tandem',
    descriptionEn: 'High-pressure ISO VG 46 mineral oil power pack actuating a double-acting heavy forging cylinder with tandem-center unloading spool.',
    descriptionAr: 'محطة قدرة هيدروليكية بزيت ISO VG 46 تشغل أسطوانة كبس ثقيلة مزدوجة الفعل مع صمام توجيهي 4/3 بمركز ترادفي لتفريغ المضخة.',
    industrialUseEn: 'Sheet metal stamping, automotive body panels, deep drawing presses',
    industrialUseAr: 'كبس وتشكيل ألواح الصاج، هياكل السيارات، وماكينات السحب العميق',
  },
  {
    id: 'precision_pneumatic_feeder',
    nameEn: 'Pneumatic Robotic Pick-and-Place Actuator (6 Bar)',
    nameAr: 'ذراع نيوماتيكي سريع لتغذية ونقل المشغولات (6 بار)',
    fluidType: 'compressed_air',
    supplyPressureBar: 6.0,
    pumpFlowRateLpm: 120, // Normal liters/min
    cylinderBoreMm: 32,
    cylinderRodMm: 12,
    cylinderStrokeMm: 150,
    throttlePct: 65,
    valveType: '5_2_dcv',
    descriptionEn: 'Clean, lubricated compressed air circuit using 5/2-way monostable directional valve and meter-out speed control throttles.',
    descriptionAr: 'دائرة هواء مضغوط نظيف ومجفف بصمام توجيهي 5/2 أحادي الاستقرار مع خوانق خنق تصريف (Meter-out) لحركة متزنة فائقة السرعة.',
    industrialUseEn: 'Electronic component pick-and-place, bottle labeling, packaging lines',
    industrialUseAr: 'تلقيم المكونات الإلكترونية، لصق ملصقات العبوات، وخطوط التعبئة السريعة',
  },
  {
    id: 'injection_molding_clamp',
    nameEn: 'Plastic Injection Mold Clamping Unit (210 Bar)',
    nameAr: 'وحدة غلق قوالب حقن البلاستيك (210 بار)',
    fluidType: 'hydraulic_oil',
    supplyPressureBar: 210,
    pumpFlowRateLpm: 50,
    cylinderBoreMm: 125,
    cylinderRodMm: 70,
    cylinderStrokeMm: 500,
    throttlePct: 90,
    valveType: '4_3_dcv',
    centerPosition: 'closed',
    descriptionEn: 'High-tonnage hydraulic clamping circuit with pilot-operated check valve to maintain mold lockup force without pressure loss.',
    descriptionAr: 'دائرة غلق هيدروليكية ضخمة مزودة بصمامات عدم رجوع موجهة للحفاظ على قوة القفل الهائلة ومنع تسرب الضغط أثناء الحقن.',
    industrialUseEn: 'Thermoplastic injection molding machines, die casting machines',
    industrialUseAr: 'ماكينات حقن اللدائن الحرارية، وماكينات سباكة القوالب بالضغط',
  },
];

// ============================================================================
// STATION 4: CNC Toolpath & G-Code Workspace
// ============================================================================

export interface CncToolPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  diameterMm: number;
  fluteCount: number;
  recommendedVc: number; // m/min for steel
  feedPerToothFz: number; // mm/tooth
  maxRpm: number;
}

export const CNC_TOOL_CATALOG: CncToolPreset[] = [
  {
    id: 'endmill_12mm',
    nameEn: 'ø12 mm Solid Carbide 4-Flute End Mill',
    nameAr: 'سكين تفريز أصبعي كربيد مصمت قطر 12 مم (4 حدود)',
    diameterMm: 12,
    fluteCount: 4,
    recommendedVc: 120, // m/min
    feedPerToothFz: 0.05, // mm/tooth
    maxRpm: 8000,
  },
  {
    id: 'facemill_50mm',
    nameEn: 'ø50 mm Indexable Face Mill (5 Inserts)',
    nameAr: 'رأس تفريز وجهي قطر 50 مم مع لقم كربيد قابلة للقلب (5 لقم)',
    diameterMm: 50,
    fluteCount: 5,
    recommendedVc: 180,
    feedPerToothFz: 0.12,
    maxRpm: 4000,
  },
  {
    id: 'drill_8mm',
    nameEn: 'ø8.5 mm HSS-Co TiN-Coated Twist Drill',
    nameAr: 'بنطة ثقب حلزونية صلب سرعات عالية قطر 8.5 مم مطلية TiN',
    diameterMm: 8.5,
    fluteCount: 2,
    recommendedVc: 35,
    feedPerToothFz: 0.08,
    maxRpm: 3000,
  },
];

export interface GCodeProgramPreset {
  id: string;
  titleEn: string;
  titleAr: string;
  operationType: 'facing' | 'contour' | 'drilling' | 'lathe_turning';
  toolId: string;
  workpieceDims: { x: number; y: number; z: number }; // mm
  gcodeLines: string[];
  descriptionEn: string;
  descriptionAr: string;
}

export const GCODE_PROGRAM_PRESETS: GCodeProgramPreset[] = [
  {
    id: 'pocket_contour_milling',
    titleEn: 'Rectangular Pocket with Corner Fillets (G01/G02/G03)',
    titleAr: 'تفريز جيب مستطيل مع أركان منحنية (G01 / G02 / G03)',
    operationType: 'contour',
    toolId: 'endmill_12mm',
    workpieceDims: { x: 100, y: 80, z: 25 },
    gcodeLines: [
      '% (O0001: RECTANGULAR POCKET CONTROLS)',
      'G21 G90 G40 G80 G49 (Metric, Absolute)',
      'T01 M06 (Tool 1: End Mill D12)',
      'S3180 M03 (Spindle CW at 3180 RPM)',
      'G54 G00 X10.0 Y10.0 Z5.0 M08 (Rapid approach + Coolant ON)',
      'G01 Z-3.0 F250 (Plunge feed into material)',
      'G01 X70.0 Y10.0 F636 (Linear cut X+)',
      'G03 X80.0 Y20.0 R10.0 (CCW arc radius 10mm)',
      'G01 X80.0 Y50.0 (Linear cut Y+)',
      'G03 X70.0 Y60.0 R10.0 (CCW arc radius 10mm)',
      'G01 X20.0 Y60.0 (Linear cut X-)',
      'G03 X10.0 Y50.0 R10.0 (CCW arc radius 10mm)',
      'G01 X10.0 Y20.0 (Linear cut Y-)',
      'G03 X20.0 Y10.0 R10.0 (Close profile)',
      'G00 Z25.0 M09 (Retract Z + Coolant OFF)',
      'G28 G91 Z0 Y0 (Zero return)',
      'M30 (Program End & Rewind)',
      '%',
    ],
    descriptionEn: 'High-speed 2.5D milling program utilizing linear feeds and G03 circular interpolation arcs with cutter radius offset.',
    descriptionAr: 'برنامج تفريز متقدم يجمع بين التغذية الخطية G01 والاستيفاء الدائري بعكس عقارب الساعة G03 مع زوايا مقوسة R10.',
  },
  {
    id: 'face_milling_cycle',
    titleEn: 'Surface Face Milling Pass (G01 High MRR)',
    titleAr: 'تفريز وجهي لتسوية السطح العلوي بمعدل إزالة عالي MRR',
    operationType: 'facing',
    toolId: 'facemill_50mm',
    workpieceDims: { x: 120, y: 90, z: 30 },
    gcodeLines: [
      '% (O0002: SURFACE FACE MILLING)',
      'G21 G90 G17 (Metric, XY Plane)',
      'T02 M06 (Tool 2: Face Mill D50)',
      'S1150 M03 (Spindle CW at 1150 RPM)',
      'G00 X-35.0 Y20.0 Z5.0 M08',
      'G01 Z-1.5 F300 (Depth of cut ap=1.5mm)',
      'G01 X155.0 Y20.0 F690 (Pass 1)',
      'G00 Y65.0',
      'G01 X-35.0 Y65.0 F690 (Pass 2)',
      'G00 Z50.0 M09',
      'M30',
      '%',
    ],
    descriptionEn: 'Parallel zigzag face milling passes across raw billet block to produce mirror surface flatness Ra < 0.8 µm.',
    descriptionAr: 'مسارات تفريز وجهي متوازية لتسوية سطح الخامة وتحقيق خشونة سطحية فائقة النعومة أقل من 0.8 ميكرومتر.',
  },
  {
    id: 'drilling_peck_cycle',
    titleEn: '4-Hole Bolt Pitch Circle Peck Drilling (G83)',
    titleAr: 'ثقب دائرة مسامير 4 ثقوب بدورة النقر العميقة G83',
    operationType: 'drilling',
    toolId: 'drill_8mm',
    workpieceDims: { x: 100, y: 100, z: 25 },
    gcodeLines: [
      '% (O0003: 4-HOLE FLANGE DRILLING)',
      'G21 G90 G80',
      'T03 M06 (Tool 3: Twist Drill D8.5)',
      'S1300 M03',
      'G00 X35.0 Y0.0 Z5.0 M08',
      'G83 Z-22.0 R3.0 Q4.0 F104 (Peck Drilling Cycle)',
      'X0.0 Y35.0 (Hole 2 at 90 deg)',
      'X-35.0 Y0.0 (Hole 3 at 180 deg)',
      'X0.0 Y-35.0 (Hole 4 at 270 deg)',
      'G80 (Cancel Canned Cycle)',
      'G00 Z50.0 M09',
      'M30',
      '%',
    ],
    descriptionEn: 'Automated canned peck drilling cycle clearing chips every 4 mm plunge depth across a ø70 mm pitch circle.',
    descriptionAr: 'دورة ثقب نقر آلية تفرغ الرايش كل 4 مم عمق لتفادي انكسار البنطة على دائرة تقسيم قطرها 70 مم.',
  },
];

// ============================================================================
// STATION 5: Quality Engineering & Statistical Process Control (SPC)
// ============================================================================

export interface QualitySampleGroup {
  subgroupId: number;
  measurements: number[]; // e.g. 5 samples
  mean: number;
  range: number;
  stdDev: number;
}

export interface QualityDatasetPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  dimensionNameEn: string;
  dimensionNameAr: string;
  nominalValue: number; // mm
  upperSpecLimitUSL: number; // USL
  lowerSpecLimitLSL: number; // LSL
  unit: string;
  subgroupSize: number; // n = 5
  subgroups: QualitySampleGroup[];
  descriptionEn: string;
  descriptionAr: string;
}

export const QUALITY_SPC_DATASETS: QualityDatasetPreset[] = [
  {
    id: 'precision_crankshaft_pin',
    nameEn: 'Automotive Crankshaft Journal Diameter',
    nameAr: 'قطر محور عمود الكرنك في محركات المركبات',
    dimensionNameEn: 'Bearing Journal Diameter',
    dimensionNameAr: 'قطر مجرى ارتكاز السبيكة',
    nominalValue: 50.000,
    upperSpecLimitUSL: 50.025,
    lowerSpecLimitLSL: 49.975,
    unit: 'mm',
    subgroupSize: 5,
    descriptionEn: 'High-precision micro-finished cylindrical journal measured with laser micrometer across 15 consecutive production shifts.',
    descriptionAr: 'قياس دقيق بقطر الميكروميتر الليزري لمحاور أعمدة الكرنك عبر 15 وردية إنتاج مستمرة لمراقبة دقة ماكينة الجلخ.',
    subgroups: [
      { subgroupId: 1, measurements: [50.002, 50.005, 49.998, 50.001, 50.004], mean: 50.002, range: 0.007, stdDev: 0.0027 },
      { subgroupId: 2, measurements: [50.008, 50.003, 50.006, 50.002, 50.005], mean: 50.0048, range: 0.006, stdDev: 0.0023 },
      { subgroupId: 3, measurements: [50.001, 49.997, 50.004, 50.002, 49.999], mean: 50.0006, range: 0.007, stdDev: 0.0027 },
      { subgroupId: 4, measurements: [50.012, 50.006, 50.009, 50.005, 50.008], mean: 50.008, range: 0.007, stdDev: 0.0027 },
      { subgroupId: 5, measurements: [50.003, 50.001, 50.005, 49.998, 50.004], mean: 50.0022, range: 0.007, stdDev: 0.0028 },
      { subgroupId: 6, measurements: [50.007, 50.004, 50.006, 50.009, 50.005], mean: 50.0062, range: 0.005, stdDev: 0.0019 },
      { subgroupId: 7, measurements: [49.996, 50.002, 49.999, 50.001, 49.998], mean: 49.9992, range: 0.006, stdDev: 0.0023 },
      { subgroupId: 8, measurements: [50.004, 50.007, 50.003, 50.005, 50.006], mean: 50.005, range: 0.004, stdDev: 0.0016 },
      { subgroupId: 9, measurements: [50.010, 50.006, 50.008, 50.007, 50.011], mean: 50.0084, range: 0.005, stdDev: 0.0021 },
      { subgroupId: 10, measurements: [50.002, 49.999, 50.003, 50.001, 50.004], mean: 50.0018, range: 0.005, stdDev: 0.0019 },
      { subgroupId: 11, measurements: [50.005, 50.008, 50.004, 50.006, 50.007], mean: 50.006, range: 0.004, stdDev: 0.0016 },
      { subgroupId: 12, measurements: [49.998, 50.002, 49.997, 50.000, 50.001], mean: 49.9996, range: 0.005, stdDev: 0.0021 },
      { subgroupId: 13, measurements: [50.009, 50.005, 50.007, 50.008, 50.006], mean: 50.007, range: 0.004, stdDev: 0.0016 },
      { subgroupId: 14, measurements: [50.003, 50.001, 50.004, 50.002, 50.005], mean: 50.003, range: 0.004, stdDev: 0.0016 },
      { subgroupId: 15, measurements: [50.006, 50.009, 50.004, 50.007, 50.008], mean: 50.0068, range: 0.005, stdDev: 0.0019 },
    ],
  },
  {
    id: 'hydraulic_valve_clearance',
    nameEn: 'Hydraulic Spool Valve Diametral Clearance',
    nameAr: 'الخلوص القطري لعضو صمام التوجيه الهيدروليكي',
    dimensionNameEn: 'Spool-to-Bore Clearance',
    dimensionNameAr: 'الخلوص الشعاعي بين الجلبة والقميص',
    nominalValue: 0.012, // 12 microns
    upperSpecLimitUSL: 0.018, // 18 microns
    lowerSpecLimitLSL: 0.006, // 6 microns
    unit: 'mm',
    subgroupSize: 5,
    descriptionEn: 'Micro-inch clearance inspection for aircraft servo-valves to prevent internal hydraulic leakage or spool seizure.',
    descriptionAr: 'فحص ميكروني دقيق لصمامات السيرفو الهيدروليكية لمنع التسريب الداخلي أو انحشار الصمام عند الضغوط العالية.',
    subgroups: [
      { subgroupId: 1, measurements: [0.011, 0.013, 0.012, 0.010, 0.012], mean: 0.0116, range: 0.003, stdDev: 0.0011 },
      { subgroupId: 2, measurements: [0.014, 0.012, 0.013, 0.011, 0.012], mean: 0.0124, range: 0.003, stdDev: 0.0011 },
      { subgroupId: 3, measurements: [0.010, 0.009, 0.012, 0.011, 0.010], mean: 0.0104, range: 0.003, stdDev: 0.0011 },
      { subgroupId: 4, measurements: [0.013, 0.015, 0.012, 0.014, 0.013], mean: 0.0134, range: 0.003, stdDev: 0.0011 },
      { subgroupId: 5, measurements: [0.012, 0.011, 0.013, 0.010, 0.012], mean: 0.0116, range: 0.003, stdDev: 0.0011 },
      { subgroupId: 6, measurements: [0.015, 0.013, 0.014, 0.012, 0.013], mean: 0.0134, range: 0.003, stdDev: 0.0011 },
      { subgroupId: 7, measurements: [0.011, 0.010, 0.012, 0.011, 0.013], mean: 0.0114, range: 0.003, stdDev: 0.0011 },
      { subgroupId: 8, measurements: [0.013, 0.012, 0.014, 0.011, 0.012], mean: 0.0124, range: 0.003, stdDev: 0.0011 },
      { subgroupId: 9, measurements: [0.012, 0.014, 0.011, 0.013, 0.012], mean: 0.0124, range: 0.003, stdDev: 0.0011 },
      { subgroupId: 10, measurements: [0.014, 0.012, 0.015, 0.013, 0.014], mean: 0.0136, range: 0.003, stdDev: 0.0011 },
    ],
  },
];

// Shewhart Control Chart Constants for n = 5
export const SHEWHART_CONSTANTS_N5 = {
  A2: 0.577, // Factor for X-bar chart limits from R-bar
  D3: 0.000, // Lower factor for R chart limits
  D4: 2.114, // Upper factor for R chart limits
  d2: 2.326, // Estimate population sigma = R-bar / d2
};
