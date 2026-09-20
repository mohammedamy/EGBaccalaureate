/**
 * Biotechnology, Genetic Engineering & Bioinformatics Virtual Simulation Studio Data
 * Accredited for Egyptian General Secondary STEM Schools & New Egyptian Baccalaureate (EG-Bac)
 * 5-Station Advanced Molecular & Computational Biotechnology Simulation Architecture
 */

// ============================================================================
// STATION 1: PCR Thermal Cycling & Agarose Gel Electrophoresis Studio
// ============================================================================

export interface PcrGelElectrophoresisPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  applicationEn: string;
  applicationAr: string;
  dnaLadderType: '100bp_dna_ladder' | '1kb_dna_ladder' | 'lambda_hindiii';
  agarosePercentage: number;
  voltageVolts: number;
  runTimeMinutes: number;
  targetBandBasePairs: number[];
  resolutionBp: number;
}

export const PCR_GEL_ELECTROPHORESIS_PRESETS: PcrGelElectrophoresisPreset[] = [
  {
    id: 'hcv_viral_load_rt_pcr_gel',
    nameEn: 'Hepatitis C Virus (HCV) 5\'-UTR Diagnostic RT-PCR Amplicon Resolution',
    nameAr: 'ترحيل نواتج التضخيم التشخيصي بـ RT-PCR لمنطقة 5\'-UTR لفيروس التهاب الكبد C',
    applicationEn: 'National Egyptian Viral Hepatitis Elimination Initiative, Ministry of Health',
    applicationAr: 'المبادرة الرئاسية المصرية للقضاء على فيروس سي، وزارة الصحة والسكان',
    dnaLadderType: '100bp_dna_ladder',
    agarosePercentage: 2.0,
    voltageVolts: 100,
    runTimeMinutes: 45,
    targetBandBasePairs: [244],
    resolutionBp: 15,
  },
  {
    id: 'egyptian_wheat_drought_marker_gel',
    nameEn: 'Egyptian Wheat (Triticum durum) DREB2 Drought Resistance SSR Marker Profiling',
    nameAr: 'توصيف معلمات التكرارات البسيطة SSR لجين مقاومة الجفاف DREB2 في القمح المصري',
    applicationEn: 'Agricultural Research Center (ARC), Giza Field Crops Institute',
    applicationAr: 'مركز البحوث الزراعية بالجيزة، معهد بحوث المحاصيل الحقلية',
    dnaLadderType: '100bp_dna_ladder',
    agarosePercentage: 2.5,
    voltageVolts: 90,
    runTimeMinutes: 60,
    targetBandBasePairs: [185, 310, 520],
    resolutionBp: 10,
  },
  {
    id: 'plasmid_restriction_mapping_gel',
    nameEn: 'pUC19 Recombinant Plasmid EcoRI & HindIII Double-Digest Restriction Mapping',
    nameAr: 'رسم الخريطة الجينية للهضم المزدوج بإنزيمي EcoRI و HindIII لبلازميد pUC19',
    applicationEn: 'Cairo University Faculty of Science Molecular Genetics Laboratory',
    applicationAr: 'مختبر الوراثة الجزيئية بكلية العلوم جامعة القاهرة',
    dnaLadderType: '1kb_dna_ladder',
    agarosePercentage: 1.2,
    voltageVolts: 110,
    runTimeMinutes: 50,
    targetBandBasePairs: [750, 1936, 2686],
    resolutionBp: 25,
  },
];

// ============================================================================
// STATION 2: CRISPR-Cas9 & Precision Base/Prime Editing Studio
// ============================================================================

export interface CrisprGeneEditingPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  targetOrganismEn: string;
  targetOrganismAr: string;
  endonucleaseType: 'spCas9' | 'cas12a_cpf1' | 'cytosine_base_editor' | 'prime_editor_2';
  targetGene: string;
  pamSequence: string;
  editingModality: 'nhej_gene_knockout' | 'hdr_gene_knockin' | 'c_to_t_transition' | 'pegRNA_transversion';
  onTargetEfficiencyPercent: number;
  offTargetRiskPercent: number;
}

export const CRISPR_GENE_EDITING_PRESETS: CrisprGeneEditingPreset[] = [
  {
    id: 'beta_thalassemia_bcl11a_enhancer_crispr',
    nameEn: 'Human BCL11A Erythroid Enhancer Editing for Fetal Hemoglobin Reactivation',
    nameAr: 'تحرير المعزز الإريثرويدي لجين BCL11A لإعادة تنشيط الهيموجلوبين الجنيني لعلاج الثلاسيميا',
    targetOrganismEn: 'Homo sapiens (Hematopoietic Stem and Progenitor Cells)',
    targetOrganismAr: 'الإنسان (الخلايا الجذعية المكونة للدم)',
    endonucleaseType: 'spCas9',
    targetGene: 'BCL11A (+58 enhancer locus)',
    pamSequence: '5\'-TGG-3\'',
    editingModality: 'nhej_gene_knockout',
    onTargetEfficiencyPercent: 94.2,
    offTargetRiskPercent: 0.35,
  },
  {
    id: 'sickle_cell_hbb_prime_editing',
    nameEn: 'Beta-Globin (HBB E6V) Sickle Cell Allele Precision Prime Editing Without DSBs',
    nameAr: 'التحرير الأولي فائق الدقة لأليل فقر الدم المنجلي في بيتا-جلوبين دون كسور مزدوجة',
    targetOrganismEn: 'Homo sapiens (Autologous CD34+ HSPCs)',
    targetOrganismAr: 'الإنسان (خلايا CD34+ الجذعية الذاتية)',
    endonucleaseType: 'prime_editor_2',
    targetGene: 'HBB (Codon 6: GAG to GTG correction)',
    pamSequence: '5\'-AGG-3\'',
    editingModality: 'pegRNA_transversion',
    onTargetEfficiencyPercent: 78.4,
    offTargetRiskPercent: 0.12,
  },
  {
    id: 'egyptian_cotton_bollworm_resistance_cas12a',
    nameEn: 'Egyptian Extra-Long Staple Cotton Endogenous Cadherin Gene Cas12a Enhancement',
    nameAr: 'تحسين جينات الكادهيرين بإنزيم Cas12a في القطن المصري فائق الطول لمقاومة دودة اللوز',
    targetOrganismEn: 'Gossypium barbadense (Egyptian Cotton Giza 92)',
    targetOrganismAr: 'نبات القطن المصري (جيزة 92)',
    endonucleaseType: 'cas12a_cpf1',
    targetGene: 'GbCadherin1',
    pamSequence: '5\'-TTTV-3\'',
    editingModality: 'hdr_gene_knockin',
    onTargetEfficiencyPercent: 86.5,
    offTargetRiskPercent: 0.45,
  },
];

// ============================================================================
// STATION 3: Bioinformatics Dynamic Programming & BLAST Search Studio
// ============================================================================

export interface BioinformaticsAlignmentPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  organismEn: string;
  organismAr: string;
  algorithm: 'needleman_wunsch' | 'smith_waterman' | 'blastp' | 'blastn';
  querySequenceLength: number;
  databaseSize: string;
  bitScore: number;
  eValue: number;
  percentIdentity: number;
}

export const BIOINFORMATICS_ALIGNMENT_PRESETS: BioinformaticsAlignmentPreset[] = [
  {
    id: 'insulin_ortholog_global_needleman',
    nameEn: 'Human vs. Porcine Proinsulin Complete Global Dynamic Programming Alignment',
    nameAr: 'المحاذاة العالمية الكاملة بالبرمجة الديناميكية بين طليعة الإنسولين البشري والخنزيري',
    organismEn: 'Homo sapiens vs. Sus scrofa',
    organismAr: 'الإنسان مقابل الخنزير المستأنس',
    algorithm: 'needleman_wunsch',
    querySequenceLength: 110,
    databaseSize: 'Pairwise Recurrence Grid',
    bitScore: 198.4,
    eValue: 1.2e-48,
    percentIdentity: 92.7,
  },
  {
    id: 'sars_cov2_spike_rbd_blastp',
    nameEn: 'SARS-CoV-2 Spike Receptor Binding Domain (RBD) NCBI nr Database BLASTp Scan',
    nameAr: 'فحص نطاق ارتباط مستقبلات بروتين شوكة كورونا في قاعدة بيانات NCBI عبر BLASTp',
    organismEn: 'Severe acute respiratory syndrome coronavirus 2',
    organismAr: 'فيروس كورونا المستجد (سارس-كوف-2)',
    algorithm: 'blastp',
    querySequenceLength: 223,
    databaseSize: 'NCBI RefSeq non-redundant (5.8 x 10^8 sequences)',
    bitScore: 462.0,
    eValue: 2.4e-152,
    percentIdentity: 99.1,
  },
  {
    id: 'nile_tilapia_growth_hormone_smith_waterman',
    nameEn: 'Nile Tilapia (Oreochromis niloticus) Growth Hormone Conserved Domain Alignment',
    nameAr: 'المحاذاة الموضعية للنطاقات المحفوظة لهرمون النمو في سمك البلطي النيلي',
    organismEn: 'Oreochromis niloticus vs. Salmonidae',
    organismAr: 'البلطي النيلي مقابل الأسماك السلمونية',
    algorithm: 'smith_waterman',
    querySequenceLength: 188,
    databaseSize: 'Fish Comparative Genome Hub',
    bitScore: 312.5,
    eValue: 6.8e-88,
    percentIdentity: 84.6,
  },
];

// ============================================================================
// STATION 4: Bioreactor Hydrodynamics & Fermentation Kinetics Studio
// ============================================================================

export interface BioreactorFermentationPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  bioproductEn: string;
  bioproductAr: string;
  organism: string;
  bioreactorType: 'stirred_tank_fermenter' | 'airlift_bioreactor' | 'packed_bed_column' | 'membrane_bioreactor';
  workingVolumeLiters: number;
  agitationRpm: number;
  klaPerHour: number;
  yieldGramsPerLiter: number;
}

export const BIOREACTOR_FERMENTATION_PRESETS: BioreactorFermentationPreset[] = [
  {
    id: 'recombinant_human_insulin_ecoli_fermenter',
    nameEn: 'Recombinant Human Proinsulin Fed-Batch Industrial Microbial Fermentation',
    nameAr: 'التخمير الصناعي الميكروبي المغذى لإنتاج طليعة الإنسولين البشري معاد الاتحاد',
    bioproductEn: 'Clinical Recombinant Human Insulin',
    bioproductAr: 'الإنسولين البشري الطبي معاد الاتحاد',
    organism: 'Escherichia coli BL21(DE3)',
    bioreactorType: 'stirred_tank_fermenter',
    workingVolumeLiters: 15000,
    agitationRpm: 380,
    klaPerHour: 145.0,
    yieldGramsPerLiter: 5.8,
  },
  {
    id: 'egyptian_molasses_citric_acid_aspergillus',
    nameEn: 'Upper Egypt Sugar Cane Molasses Citric Acid Fermentation by Aspergillus niger',
    nameAr: 'إنتاج حمض الستريك بتخمير مولاس قصب السكر في صعيد مصر بفطر Aspergillus niger',
    bioproductEn: 'High-Purity Citric Acid Monohydrate',
    bioproductAr: 'حمض الستريك أحادي المائي عالي النقاوة',
    organism: 'Aspergillus niger NRRL 599',
    bioreactorType: 'airlift_bioreactor',
    workingVolumeLiters: 50000,
    agitationRpm: 0,
    klaPerHour: 92.0,
    yieldGramsPerLiter: 84.5,
  },
  {
    id: 'trastuzumab_herceptin_cho_suspension',
    nameEn: 'Trastuzumab (Herceptin) Monoclonal Antibody Fed-Batch CHO Perfusion Culture',
    nameAr: 'الزراعة الارتشاحية المعلقة لخلايا CHO لإنتاج الجسم المضاد تراستوزوماب (هيرسبتين)',
    bioproductEn: 'Humanized Anti-HER2 Monoclonal Antibody (IgG1)',
    bioproductAr: 'جسم مضاد أحادي النسيلة بشري مضاد لـ HER2',
    organism: 'Chinese Hamster Ovary (CHO-K1)',
    bioreactorType: 'stirred_tank_fermenter',
    workingVolumeLiters: 2000,
    agitationRpm: 120,
    klaPerHour: 28.0,
    yieldGramsPerLiter: 4.2,
  },
];

// ============================================================================
// STATION 5: Protein Folding, AlphaFold 3D & Structural Modeling Studio
// ============================================================================

export interface ProteinStructurePredictionPreset {
  id: string;
  nameEn: string;
  nameAr: string;
  proteinTargetEn: string;
  proteinTargetAr: string;
  organism: string;
  predictionEngine: 'alphafold_2_evoformer' | 'alphafold_3_diffusion' | 'esmfold_transformer' | 'rosettafold';
  residueCount: number;
  meanPlddtScore: number;
  rmsdAngstroms: number;
  therapeuticSignificanceEn: string;
  therapeuticSignificanceAr: string;
}

export const PROTEIN_STRUCTURE_PREDICTION_PRESETS: ProteinStructurePredictionPreset[] = [
  {
    id: 'human_her2_trastuzumab_complex_alphafold',
    nameEn: 'Human Epidermal Growth Factor Receptor 2 (HER2) Extracellular Domain & Trastuzumab Fab',
    nameAr: 'البنية الفراغية للنطاق الخارجي لمستقبل HER2 البشري مع جزء Fab لعقار تراستوزوماب',
    proteinTargetEn: 'HER2 / ErbB2 Receptor Complex',
    proteinTargetAr: 'معقد مستقبل HER2 / ErbB2',
    organism: 'Homo sapiens',
    predictionEngine: 'alphafold_3_diffusion',
    residueCount: 652,
    meanPlddtScore: 93.8,
    rmsdAngstroms: 1.08,
    therapeuticSignificanceEn: 'Targeted oncological immunotherapy for metastatic HER2-positive breast and gastric carcinomas.',
    therapeuticSignificanceAr: 'العلاج المناعي الموجه للأورام لسرطانات الثدي والمعدة النقيلية الإيجابية لمستقبلات HER2.',
  },
  {
    id: 'cas9_sgrna_dna_ternary_complex_alphafold',
    nameEn: 'Streptococcus pyogenes Cas9 Endonuclease Complexed with sgRNA and Target DNA Duplex',
    nameAr: 'المعقد الثلاثي لإنزيم القطع Cas9 مع الحمض النووي المرشد sgRNA وشريط DNA الهدف',
    proteinTargetEn: 'SpCas9 Catalytic Ternary Ribonucleoprotein',
    proteinTargetAr: 'البروتين النووي الريبوزي التحفيزي الثلاثي لـ SpCas9',
    organism: 'Streptococcus pyogenes',
    predictionEngine: 'alphafold_2_evoformer',
    residueCount: 1368,
    meanPlddtScore: 91.4,
    rmsdAngstroms: 1.25,
    therapeuticSignificanceEn: 'Structural engineering of high-fidelity Cas9 variants with undetectable genomic off-target cleavage.',
    therapeuticSignificanceAr: 'الهندسة البنيوية لنسخ Cas9 فائقة الدقة الخالية تماماً من القطوع غير المستهدفة بالجينوم.',
  },
  {
    id: 'dreb2_transcription_factor_wheat_esmfold',
    nameEn: 'Egyptian Durum Wheat Dehydration-Responsive Element-Binding Protein 2 (DREB2)',
    nameAr: 'عامل النسخ DREB2 المستجيب للجفاف في قمح الديورم المصري بنموذج ESMFold',
    proteinTargetEn: 'DREB2 AP2/ERF DNA-Binding Domain',
    proteinTargetAr: 'نطاق ارتباط الحمض النووي AP2/ERF لبروتين DREB2',
    organism: 'Triticum durum (Egyptian Wheat)',
    predictionEngine: 'esmfold_transformer',
    residueCount: 345,
    meanPlddtScore: 88.6,
    rmsdAngstroms: 1.42,
    therapeuticSignificanceEn: 'Engineering climate-resilient transgenic cereal cultivars against severe drought and heat waves.',
    therapeuticSignificanceAr: 'هندسة أصناف حبوب معدلة وراثياً فائقة الصمود أمام موجات الجفاف والحرارة الشديدة.',
  },
];
