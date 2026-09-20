/**
 * Nanotechnology & Advanced Materials Science Virtual Simulation Studio Data
 * Accredited for Egyptian General Secondary STEM Schools & New Egyptian Baccalaureate (EG-Bac)
 * 5-Station Advanced Nanotechnology & Materials Simulation Architecture
 */

// ============================================================================
// STATION 1: Quantum Dot Size Confinement & Brus Bandgap Tuner
// ============================================================================

export interface QuantumDotConfinementPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  materialSystem: 'CdSe' | 'InP' | 'PbS' | 'Perovskite_CsPbBr3';
  bulkBandgapEv: number;
  excitonBohrRadiusNm: number;
  coreRadiusNm: number;
  confinementBandgapEv: number;
  emissionPeakWavelengthNm: number;
  emissionColor: string;
  quantumYieldPercent: number;
  researchFacilityEn: string;
  researchFacilityAr: string;
}

export const QUANTUM_DOT_CONFINEMENT_PRESETS: QuantumDotConfinementPreset[] = [
  {
    id: 'cdse_visible_display_dots',
    nameEn: 'CdSe Core-Shell Quantum Dots for Ultra-Wide Gamut Displays',
    nameAr: 'نقاط كبريتيد الكادميوم الكمية ذات القلب والقشرة لشاشات العرض فائقة التدرج اللوني',
    materialSystem: 'CdSe',
    bulkBandgapEv: 1.74,
    excitonBohrRadiusNm: 5.6,
    coreRadiusNm: 2.1,
    confinementBandgapEv: 2.38,
    emissionPeakWavelengthNm: 521,
    emissionColor: '#10B981',
    quantumYieldPercent: 92,
    researchFacilityEn: 'Zewail City of Science and Technology, Center for Materials Science',
    researchFacilityAr: 'مدينة زويل للعلوم والتكنولوجيا، مركز علوم المواد',
  },
  {
    id: 'inp_biocompatible_dots',
    nameEn: 'Cadmium-Free InP/ZnS Biocompatible Nanocrystals for Cellular Bio-Imaging',
    nameAr: 'بلورات فوسفيد الإنديوم النانوية المتوافقة حيوياً والخالية من الكادميوم للتصوير الخلوي',
    materialSystem: 'InP',
    bulkBandgapEv: 1.35,
    excitonBohrRadiusNm: 9.6,
    coreRadiusNm: 1.8,
    confinementBandgapEv: 2.05,
    emissionPeakWavelengthNm: 605,
    emissionColor: '#F97316',
    quantumYieldPercent: 78,
    researchFacilityEn: 'National Research Centre (NRC), Nanotechnology & Advanced Materials Division',
    researchFacilityAr: 'المركز القومي للبحوث، شعبة النانوتكنولوجي والمواد المتقدمة بالدقي',
  },
  {
    id: 'cspbbr3_perovskite_photovoltaic',
    nameEn: 'All-Inorganic CsPbBr3 Halide Perovskite Quantum Dots for Tandem Solar Cells',
    nameAr: 'نقاط بيروفسكايت CsPbBr3 غير العضوية الكمية للخلايا الشمسية الترادفية عالية الكفاءة',
    materialSystem: 'Perovskite_CsPbBr3',
    bulkBandgapEv: 2.25,
    excitonBohrRadiusNm: 3.5,
    coreRadiusNm: 4.0,
    confinementBandgapEv: 2.42,
    emissionPeakWavelengthNm: 512,
    emissionColor: '#059669',
    quantumYieldPercent: 96,
    researchFacilityEn: 'Egypt-Japan University of Science and Technology (E-JUST), Energy Materials Lab',
    researchFacilityAr: 'الجامعة المصرية اليابانية للعلوم والتكنولوجيا (E-JUST)، مختبر مواد الطاقة',
  },
  {
    id: 'pbs_swir_telecom_dots',
    nameEn: 'PbS Short-Wavelength Infrared Quantum Dots for Optical Fiber Telecommunications',
    nameAr: 'نقاط كبريتيد الرصاص الكمية للأشعة تحت الحمراء قصيرة الموجة للاتصالات الضوئية',
    materialSystem: 'PbS',
    bulkBandgapEv: 0.41,
    excitonBohrRadiusNm: 18.0,
    coreRadiusNm: 3.2,
    confinementBandgapEv: 0.95,
    emissionPeakWavelengthNm: 1305,
    emissionColor: '#7C3AED',
    quantumYieldPercent: 65,
    researchFacilityEn: 'Cairo University Faculty of Engineering, Nanotechnology Research Center',
    researchFacilityAr: 'كلية الهندسة جامعة القاهرة، مركز بحوث النانوتكنولوجي بالشيخ زايد',
  },
];

// ============================================================================
// STATION 2: Electron Microscopy (SEM/TEM) & Atomic Force Metrology
// ============================================================================

export interface SemTemCharacterizationPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  microscopyModality: 'FE-SEM' | 'HR-TEM' | 'AFM_Tapping' | 'STM_Spectroscopy';
  acceleratingVoltageKv: number;
  magnification: string;
  theoreticalResolutionNm: number;
  sampleTypeEn: string;
  sampleTypeAr: string;
  keyFeatureObservedEn: string;
  keyFeatureObservedAr: string;
  institutionEn: string;
  institutionAr: string;
}

export const SEM_TEM_CHARACTERIZATION_PRESETS: SemTemCharacterizationPreset[] = [
  {
    id: 'tem_single_walled_cnt',
    nameEn: 'High-Resolution TEM Atomic Lattice Fringe Imaging of Single-Walled Carbon Nanotubes',
    nameAr: 'تصوير أهداب الشبكة الذرية بالمجهر الإلكتروني النافذ عالي الدقة لأنابيب الكربون أحادية الجدار',
    microscopyModality: 'HR-TEM',
    acceleratingVoltageKv: 200,
    magnification: '1,000,000x',
    theoreticalResolutionNm: 0.08,
    sampleTypeEn: 'Purified HiPco SWCNTs on carbon lacey grid',
    sampleTypeAr: 'أنابيب كربون منقاة بتقنية HiPco على شبكة كربونية',
    keyFeatureObservedEn: 'Distinct chiral vector graphitic walls with 0.34 nm inter-shell van der Waals spacing',
    keyFeatureObservedAr: 'جدران جرافيتية كيرالية واضحة مع تباعد فاندرفالس يبلغ 0.34 نانومتر',
    institutionEn: 'American University in Cairo (AUC), Yousef Jameel Science and Technology Research Center',
    institutionAr: 'الجامعة الأمريكية بالقاهرة (AUC)، مركز يوسف جميل لأبحاث العلوم والتكنولوجيا',
  },
  {
    id: 'sem_mesoporous_tio2',
    nameEn: 'Field-Emission SEM Cross-Sectional Profiling of Mesoporous TiO2 Scaffolds',
    nameAr: 'توصيف المقطع العرضي بمجهر الانبعاث المجالي SEM للدعامات النانوية المسامية من ثاني أكسيد التيتانيوم',
    microscopyModality: 'FE-SEM',
    acceleratingVoltageKv: 15,
    magnification: '150,000x',
    theoreticalResolutionNm: 1.0,
    sampleTypeEn: 'Sintered doctor-bladed TiO2 paste on FTO glass',
    sampleTypeAr: 'عجينة ثاني أكسيد التيتانيوم الملبدة حرارياً على زجاج FTO موصل',
    keyFeatureObservedEn: 'Uniform 25 nm interconnected anatase spheres with 65% interconnected pore porosity',
    keyFeatureObservedAr: 'جسيمات أناتاز كروية متصلة بقطر 25 نانومتر ومسامية بينية تبلغ 65%',
    institutionEn: 'National Research Centre (NRC), Advanced Electron Microscopy Center',
    institutionAr: 'المركز القومي للبحوث، مركز المجاهر الإلكترونية المتقدمة',
  },
  {
    id: 'afm_graphene_steps',
    nameEn: 'Atomic Force Microscopy Monolayer Graphene Step-Height Topography Mapping',
    nameAr: 'رسم طبوغرافيا ارتفاع الدرجات الذرية لجرافين أحادي الطبقة بمجهر القوة الذرية AFM',
    microscopyModality: 'AFM_Tapping',
    acceleratingVoltageKv: 0,
    magnification: '500,000x',
    theoreticalResolutionNm: 0.1,
    sampleTypeEn: 'CVD-grown graphene transferred onto 300 nm SiO2/Si substrate',
    sampleTypeAr: 'جرافين مرسب بالبخار الكيميائي ومنقول على ركيزة سيليكون مع طبقة أكسيد 300 نانومتر',
    keyFeatureObservedEn: 'Single-layer atomic step height of 0.35 nm and root-mean-square roughness of 0.18 nm',
    keyFeatureObservedAr: 'ارتفاع خطوة الطبقة الذرية المفردة 0.35 نانومتر مع خشونة سطحية 0.18 نانومتر',
    institutionEn: 'Zewail City of Science and Technology, Micro/Nanofabrication Facility',
    institutionAr: 'مدينة زويل للعلوم والتكنولوجيا، مختبر التصنيع النانوي الدقيق',
  },
];

// ============================================================================
// STATION 3: Localized Surface Plasmon Resonance (LSPR) Biosensor Studio
// ============================================================================

export interface SurfacePlasmonResonancePreset {
  id: string;
  nameEn: string;
  nameAr: string;
  nanoparticleMorphology: 'Gold_Nanospheres' | 'Gold_Nanorods' | 'Silver_Nanoprisms' | 'Gold_Nanostars';
  coreDimensionsNm: string;
  baselinePeakWavelengthNm: number;
  refractiveIndexSensitivityNmRiu: number;
  biomarkerTargetEn: string;
  biomarkerTargetAr: string;
  detectionLimitMolar: string;
  hospitalApplicationEn: string;
  hospitalApplicationAr: string;
}

export const SURFACE_PLASMON_RESONANCE_PRESETS: SurfacePlasmonResonancePreset[] = [
  {
    id: 'gold_nanorod_troponin_sensor',
    nameEn: 'Gold Nanorod Longitudinal Plasmon Transducer for Cardiac Troponin I Rapid Diagnosis',
    nameAr: 'محول رنين بلازموني طولي بقضبان الذهب النانوية للتشخيص الفوري لتروبونين القلب I',
    nanoparticleMorphology: 'Gold_Nanorods',
    coreDimensionsNm: '45 nm length × 12 nm diameter (Aspect Ratio 3.75)',
    baselinePeakWavelengthNm: 780,
    refractiveIndexSensitivityNmRiu: 480,
    biomarkerTargetEn: 'Cardiac Troponin I (cTnI) Acute Myocardial Infarction marker',
    biomarkerTargetAr: 'بروتين تروبونين I القلبي للتشخيص المبكر للجلطة القلبية الحادة',
    detectionLimitMolar: '1.2 × 10^-12 M (1.2 pM)',
    hospitalApplicationEn: 'Magdi Yacoub Heart Foundation (MYF), Aswan Heart Centre',
    hospitalApplicationAr: 'مؤسسة مجدي يعقوب لأمراض وأبحاث القلب، مركز أسوان للقلب',
  },
  {
    id: 'silver_nanoprism_hcv_sensor',
    nameEn: 'Silver Nanoprism Edge-Dipole LSPR Sensor for Hepatitis C Viral Core Antigen Detection',
    nameAr: 'مجس بلازموني بثنائي قطب موشورات الفضة النانوية لكشف المستضد اللبي لفيروس سي',
    nanoparticleMorphology: 'Silver_Nanoprisms',
    coreDimensionsNm: '60 nm edge length × 8 nm thickness',
    baselinePeakWavelengthNm: 650,
    refractiveIndexSensitivityNmRiu: 620,
    biomarkerTargetEn: 'HCV Core Antigen (HCVcAg) diagnostic peptide',
    biomarkerTargetAr: 'المستضد اللبي لفيروس التهاب الكبد C (HCVcAg)',
    detectionLimitMolar: '0.8 × 10^-13 M (80 fM)',
    hospitalApplicationEn: 'National Liver Institute, Menoufia University',
    hospitalApplicationAr: 'المعهد القومي للكبد، جامعة المنوفية',
  },
  {
    id: 'gold_nanostar_afp_oncology',
    nameEn: 'Branched Gold Nanostar SERS Platform for Alpha-Fetoprotein Liver Cancer Staging',
    nameAr: 'منصة استشعار بلازمونية معززة بسطوح نجوم الذهب النانوية لكشف ألفا-فيتوبروتين لأورام الكبد',
    nanoparticleMorphology: 'Gold_Nanostars',
    coreDimensionsNm: '75 nm tip-to-tip span with sharp 5 nm tips',
    baselinePeakWavelengthNm: 820,
    refractiveIndexSensitivityNmRiu: 710,
    biomarkerTargetEn: 'Alpha-Fetoprotein (AFP) Hepatocellular Carcinoma biomarker',
    biomarkerTargetAr: 'بروتين ألفا-فيتوبروتين (AFP) لتشخيص سرطان الخلايا الكبدية',
    detectionLimitMolar: '3.5 × 10^-14 M (35 fM)',
    hospitalApplicationEn: 'National Cancer Institute (NCI), Cairo University',
    hospitalApplicationAr: 'المعهد القومي للأورام، جامعة القاهرة',
  },
];

// ============================================================================
// STATION 4: Nanomedicine Targeted Drug Delivery & Hyperthermia
// ============================================================================

export interface NanomedicineDrugReleasePreset {
  id: string;
  nameEn: string;
  nameAr: string;
  carrierType: 'PEGylated_Liposome' | 'Magnetic_Fe3O4_Nanoparticle' | 'PAMAM_Dendrimer' | 'Mesoporous_Silica';
  hydrodynamicDiameterNm: number;
  surfaceZetaPotentialMv: number;
  encapsulatedDrugEn: string;
  encapsulatedDrugAr: string;
  releaseTrigger: 'pH_acidic_tumor_5.5' | 'Alternating_Magnetic_Field' | 'Glutathione_Redox' | 'NIR_Photothermal';
  circulationHalfLifeHours: number;
  therapeuticTargetEn: string;
  therapeuticTargetAr: string;
}

export const NANOMEDICINE_DRUG_RELEASE_PRESETS: NanomedicineDrugReleasePreset[] = [
  {
    id: 'doxorubicin_liposome_epr',
    nameEn: 'Sterically Stabilized PEGylated Liposomal Doxorubicin (Doxil analog)',
    nameAr: 'ليبوزومات البولي إيثيلين جليكول المحملة بالدوكسوروبيسين لعلاج الأورام بالاستهداف السلبي',
    carrierType: 'PEGylated_Liposome',
    hydrodynamicDiameterNm: 85,
    surfaceZetaPotentialMv: -12.4,
    encapsulatedDrugEn: 'Doxorubicin Hydrochloride anthracycline chemotherapeutic',
    encapsulatedDrugAr: 'دوكسوروبيسين هيدروكلوريد المثبط لإنزيم توبوإيزوميراز الثاني',
    releaseTrigger: 'pH_acidic_tumor_5.5',
    circulationHalfLifeHours: 45.0,
    therapeuticTargetEn: 'Solid mammary and ovarian metastatic tumors via EPR vascular fenestration',
    therapeuticTargetAr: 'أورام الثدي والمبيض النقيلية عبر نفاذية واستبقاء الأوعية الدموية للورم',
  },
  {
    id: 'fe3o4_magnetic_hyperthermia',
    nameEn: 'Superparamagnetic Iron Oxide Nanoparticles (SPIONs) for Magnetic Fluid Hyperthermia',
    nameAr: 'جسيمات أكسيد الحديد فائقة البارامغناطيسية للمداواة الحرارية بالمجال المغناطيسي المتردد',
    carrierType: 'Magnetic_Fe3O4_Nanoparticle',
    hydrodynamicDiameterNm: 22,
    surfaceZetaPotentialMv: -24.8,
    encapsulatedDrugEn: 'Thermal energy generation (Specific Loss Power ~180 W/g) + Paclitaxel',
    encapsulatedDrugAr: 'طاقة تسخين حراري نوعية (~180 واط/جم) مع عقار الباكليتاكسيل',
    releaseTrigger: 'Alternating_Magnetic_Field',
    circulationHalfLifeHours: 18.5,
    therapeuticTargetEn: 'Localized Glioblastoma multiforme brain tumors heated selectively to 43°C',
    therapeuticTargetAr: 'أورام الدماغ الأرومية الدبقية مع تسخين الورم انتقائياً إلى 43 درجة مئوية',
  },
  {
    id: 'msn_redox_targeted_release',
    nameEn: 'MCM-41 Mesoporous Silica Nanoparticles with Disulfide Gates for Redox Triggering',
    nameAr: 'جسيمات السيليكا المسامية MCM-41 المزودة ببوابات ثنائي الكبريتيد للتحرر الانتقائي بالاختزال',
    carrierType: 'Mesoporous_Silica',
    hydrodynamicDiameterNm: 110,
    surfaceZetaPotentialMv: -31.5,
    encapsulatedDrugEn: 'Cisplatin DNA crosslinking platinum chemotherapy',
    encapsulatedDrugAr: 'عقار سيسبلاتين البلاتيني المسبب لروابط تساهمية في DNA الورم',
    releaseTrigger: 'Glutathione_Redox',
    circulationHalfLifeHours: 28.0,
    therapeuticTargetEn: 'High intracellular glutathione (GSH ~10 mM) cancer cells in pulmonary carcinomas',
    therapeuticTargetAr: 'الخلايا السرطانية الرئوية ذات التركيز العالي لمركب الجلوتاثيون الاختزالي',
  },
];

// ============================================================================
// STATION 5: Solar Heterogeneous Photocatalysis & Green Hydrogen
// ============================================================================

export interface SolarPhotocatalysisPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  photocatalystComposition: string;
  bandgapEv: number;
  valenceBandPotentialV: number;
  conductionBandPotentialV: number;
  specificSurfaceAreaM2g: number;
  hydrogenProductionRateUmolH: number;
  solarToHydrogenEfficiencyPercent: number;
  nationalStrategyEn: string;
  nationalStrategyAr: string;
}

export const SOLAR_PHOTOCATALYSIS_PRESETS: SolarPhotocatalysisPreset[] = [
  {
    id: 'tio2_platinum_heterojunction',
    nameEn: 'Anatase TiO2 Nanorods Decorated with Platinum Co-Catalyst for Water Splitting',
    nameAr: 'قضبان ثاني أكسيد التيتانيوم الأناتازية المطعمة بمحفز البلاتين لشطر الماء الضوئي',
    photocatalystComposition: '1.0 wt% Pt / TiO2 Anatase Nanorods (aspect ratio 8:1)',
    bandgapEv: 3.2,
    valenceBandPotentialV: 2.7,
    conductionBandPotentialV: -0.5,
    specificSurfaceAreaM2g: 145,
    hydrogenProductionRateUmolH: 4850,
    solarToHydrogenEfficiencyPercent: 2.8,
    nationalStrategyEn: 'Egyptian National Low-Carbon Green Hydrogen Strategy 2035, Suez Canal Economic Zone',
    nationalStrategyAr: 'الاستراتيجية الوطنية المصرية للهيدروجين الأخضر منخفض الكربون 2035، المنطقة الاقتصادية لقناة السويس',
  },
  {
    id: 'g_c3n4_mos2_z_scheme',
    nameEn: 'Graphitic Carbon Nitride / MoS2 2D-2D Z-Scheme Direct Solar Water Splitting',
    nameAr: 'مخطط Z المباشر بين نيتريد الكربون الجرافيتي وثنائي كبريتيد الموليبدنوم لشطر الماء الشمسي',
    photocatalystComposition: '2D/2D g-C3N4 / MoS2 Ultrathin Van der Waals Nanosheet Heterojunction',
    bandgapEv: 2.1,
    valenceBandPotentialV: 1.8,
    conductionBandPotentialV: -0.9,
    specificSurfaceAreaM2g: 210,
    hydrogenProductionRateUmolH: 9200,
    solarToHydrogenEfficiencyPercent: 5.4,
    nationalStrategyEn: 'Benban Solar Park Advanced Photo-electrocatalytic Hydrogen Initiative, Aswan',
    nationalStrategyAr: 'مجمع بنبان للطاقة الشمسية بأسوان، المبادرة المتقدمة للتحفيز الكهروضوئي لإنتاج الهيدروجين',
  },
  {
    id: 'tio2_industrial_wastewater_purification',
    nameEn: 'Nitrogen-Doped Mesoporous TiO2 for Textile Dye Industrial Wastewater Solar Degradation',
    nameAr: 'ثاني أكسيد التيتانيوم المسامي المنشط بالنيتروجين للتكسير الشمسي لملوثات أصباغ مصانع الغزل والنسيج',
    photocatalystComposition: 'N-doped Anatase/Rutile Degussa P25 Nanoparticle Matrix',
    bandgapEv: 2.8,
    valenceBandPotentialV: 2.5,
    conductionBandPotentialV: -0.3,
    specificSurfaceAreaM2g: 175,
    hydrogenProductionRateUmolH: 1950,
    solarToHydrogenEfficiencyPercent: 1.9,
    nationalStrategyEn: 'El-Mahalla El-Kubra Industrial Textile Wastewater Zero-Liquid-Discharge Project',
    nationalStrategyAr: 'مشروع المعالجة المتقدمة وإعادة تدوير مياه الصرف الصناعي لمدينة المحلة الكبرى للغزل والنسيج',
  },
];
