import React, { useCallback, useMemo } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  drawVolumetricBeam,
  drawGlowingParticle,
  type LabDefinition,
  type LabTelemetryMetric,
  type LabViewportState,
  type LabParameterSchema,
  type LabPreset,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Zap,
} from 'lucide-react';
import antibodyImg from '../../assets/biology/antibody_igg_structure.jpg';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type ImmunitySubTab =
  | 'humoral_cellular'
  | 'phagocytosis_studio'
  | 'antibody_actions'
  | 'kinetics_memory'
  | 'antibody_anatomy';

export type ImmunePathway = 'humoral' | 'cellular';
export type AntibodyActionType = 'neutralization' | 'agglutination' | 'precipitation' | 'lysis' | 'antitoxin';
export type KineticsCondition = 'standard_dual' | 'primary_only' | 'immunodeficiency' | 'vaccine_booster';
export type AntibodyPartId = 'variable' | 'constant' | 'disulfide' | 'hinge';

export type CellularStudioMode = 'macrophage_phagocytosis' | 'tc_perforin_lysis';

export interface ImmunityParams {
  subTab: ImmunitySubTab;
  pathway: ImmunePathway;
  cascadeStep: number; // 0 to 5
  antibodyAction: AntibodyActionType;
  complementsActive: boolean;
  kineticsCondition: KineticsCondition;
  timeDay: number; // 0 to 30 days
  pathogenDose: number; // 10 to 100 AU
  selectedPartId: AntibodyPartId;
  // Phagocytosis & Cellular Studio
  phagocytosisStage: number; // 0 to 5
  cellularStudioMode: CellularStudioMode;
  perforinPoreCount: number; // 1 to 10
  phagocytosisAutoPlay: boolean;
}

export interface ImmunitySimState {
  antibodyTiter: number; // AU (0 to 10000)
  pathogenLoad: number; // AU (0 to 1000)
  plasmaCellCount: number; // cells / uL
  memoryCellCount: number; // cells / uL
  helperTCount: number; // cells / uL (normal 500-1200)
  cytotoxicTCount: number; // cells / uL (normal 300-800)
  suppressorTCount: number; // cells / uL
  elisaOD450: number; // Optical Density at 450 nm (0.00 to 3.00)
  lysisRatePct: number; // 0 to 100%
  neutralizationPct: number; // 0 to 100%
  // Phagocytosis Studio Metrics
  phagosomeHydrolysisPct: number;
  mhcPresentationDensity: number;
  perforinPoreDensity: number;
  lymphotoxinApoptosisPct: number;
  interleukinConcentrationPg: number;
}

// -------------------------------------------------------------
// DATA STRUCTURES: PHAGOCYTOSIS STAGES & CURRICULUM EVENTS
// -------------------------------------------------------------
export interface PhagocytosisStageInfo {
  stage: number;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  cellularEventEn: string;
  cellularEventAr: string;
  molecularActorsEn: string;
  molecularActorsAr: string;
}

export const PHAGOCYTOSIS_STAGES: PhagocytosisStageInfo[] = [
  {
    stage: 0,
    nameEn: '1. Chemotaxis & Microbe Capture',
    nameAr: '١. الانجذاب الكيميائي والتقاط الميكروب',
    descEn:
      'Macrophage detects chemical attractants (chemokines/bacterial formyl peptides) and extends pseudopodia toward the flagellated bacterium.',
    descAr:
      'تستشعر الخلية البلعمية الكبيرة المواد الكيميائية الجاذبة (الكيموكينات) وتمد أقدامها الكاذبة (Pseudopodia) للإحاطة بالبكتيريا.',
    cellularEventEn: 'Receptor-mediated adhesion of bacterial surface antigens to macrophage pattern-recognition receptors.',
    cellularEventAr: 'التصاق الأنتيجينات الغشائية للبكتيريا بمستقبلات سطح الخلية البلعمية.',
    molecularActorsEn: 'Chemokines, Microbial Antigens, Macrophage Receptors',
    molecularActorsAr: 'الكيموكينات، أنتيجينات البكتيريا، مستقبلات الغشاء البلعمي',
  },
  {
    stage: 1,
    nameEn: '2. Ingestion & Phagosome Formation',
    nameAr: '٢. الابتلاع وتكوين الحويصلة البلعمية (الفاجوسوم)',
    descEn:
      'Pseudopodia encircle and engulf the bacterium, pinching off the cell membrane to create an intracellular phagosome vesicle.',
    descAr:
      'تلتحم الأقدام الكاذبة حول الميكروب وتبتلعه داخل فجوة غشائية داخلية تسمى الفاجوسوم (Phagosome).',
    cellularEventEn: 'Invagination of plasma membrane enclosing intact bacterium within an endocytic vacuole.',
    cellularEventAr: 'انغماد الغشاء الخلوي وإحاطة البكتيريا الحية داخل حويصلة بلعمية معزولة.',
    molecularActorsEn: 'Actin-Myosin Cytoskeleton, Phagosome Membrane',
    molecularActorsAr: 'هيكل الخلية (الأكتين والميوسين)، غشاء الحويصلة البلعمية',
  },
  {
    stage: 2,
    nameEn: '3. Lysosome Fusion & Enzymatic Hydrolysis',
    nameAr: '٣. اندماج الليسوسومات وتفكيك الأنتيجين بإنزيمات التحلل',
    descEn:
      'Intracellular lysosomes fuse with the phagosome (Phagolysosome). Lysozymes and acid hydrolases chop bacterial proteins into small peptide antigens.',
    descAr:
      'تندمج الليسوسومات الحاوية على إنزيمات محللة (Lysosomal Enzymes) مع الفاجوسوم لتكوين الفاجوليسوسوم، ويتم تفتيت بروتينات الميكروب إلى ببتيدات صغيرة.',
    cellularEventEn: 'Enzymatic lysis destroys bacterial viability and produces immunogenic peptide fragments.',
    cellularEventAr: 'التحلل الإنزيمي يقضي على البكتيريا ويفتت بروتيناتها إلى شظايا أنتيجين صغيرة.',
    molecularActorsEn: 'Lysozymes, Acid Hydrolases, Proteases, Phagolysosome',
    molecularActorsAr: 'إنزيمات الليسوسومات المحللة، الفاجوليسوسوم، شظايا الأنتيجين',
  },
  {
    stage: 3,
    nameEn: '4. MHC-II Complexation & Vesicular Migration',
    nameAr: '٤. الارتباط ببروتين التوافق النسيجي MHC-II',
    descEn:
      'Digested peptide fragments bind with high affinity to Major Histocompatibility Complex Class II (MHC-II) molecules inside transport vesicles.',
    descAr:
      'ترتبط شظايا الأنتيجين المفككة ببروتين التوافق النسيجي (MHC-II) المتكون داخل الخلية لتكوين معقد [الأنتيجين / MHC-II].',
    cellularEventEn: 'Assembly of the [MHC-II + Antigenic Peptide] immunogenic presentation complex.',
    cellularEventAr: 'تجميع مركب [الأنتيجين + بروتين التوافق النسيجي MHC] داخل الحويصلات الناقلة.',
    molecularActorsEn: 'Major Histocompatibility Complex II (MHC-II), Exocytic Vesicles',
    molecularActorsAr: 'بروتين التوافق النسيجي (MHC)، حويصلات الإفراز الخلوي',
  },
  {
    stage: 4,
    nameEn: '5. Surface Antigen Presentation & CD4+ TH Docking',
    nameAr: '٥. عرض الأنتيجين على الغشاء الخارجي وتعرف خلايا TH المساعدة',
    descEn:
      'Transport vesicle fuses with the macrophage plasma membrane, displaying the [MHC-II / Antigen] complex externally. Helper T cell (CD4+) docks specifically.',
    descAr:
      'تندمج الحويصلة مع الغشاء البلازمي لتبرز معقد [MHC-II / أنتيجين] على السطح الخارجي للبلعمية، فتتعرف عليه الخلية التائية المساعدة بواسطة مستقبل CD4.',
    cellularEventEn: 'Specific immunological synapse formed between TCR/CD4 on Helper T cell and [MHC-II + Antigen] on Macrophage.',
    cellularEventAr: 'تكوين تشابك مناعي نوعي بين مستقبل TCR و CD4 للخلية التائية المساعدة ومعقد [MHC + أنتيجين].',
    molecularActorsEn: 'Macrophage MHC-II, Antigen Peptide, CD4 Coreceptor, TCR',
    molecularActorsAr: 'بروتين MHC البلعمي، شظية الأنتيجين، مستقبل CD4، مستقبل TCR التائي',
  },
  {
    stage: 5,
    nameEn: '6. Interleukin Signal Cascade & Clonal Expansion',
    nameAr: '٦. إفراز الإنترلوكينات والتكاثر بالانقسام (التمايز المناعي)',
    descEn:
      'Activated TH secretes Interleukins, stimulating sensitized B cells to proliferate and differentiate into antibody-secreting Plasma cells and long-lived Memory cells.',
    descAr:
      'تفرز خلايا TH المنشطة مواد كيميائية تسمى الإنترلوكينات (Interleukins) تنشط الخلايا البائية للانقسام والتمايز إلى خلايا بائية بلازمية وخلايا ذاكرة.',
    cellularEventEn: 'Cytokine-driven clonal expansion: Plasma B cells secrete thousands of specific antibodies/second; Memory B cells persist for decades.',
    cellularEventAr: 'انقسام وتمايز الخلايا البائية: خلايا بلازمية تنتج آلاف الأجسام المضادة وخلايا ذاكرة تبقى لعشرات السنين.',
    molecularActorsEn: 'Interleukins (IL-1, IL-2), Plasma B Cells, Memory B Cells, Antibodies',
    molecularActorsAr: 'الإنترلوكينات، الخلايا البائية البلازمية، خلايا الذاكرة، الأجسام المضادة',
  },
];

export interface AntibodyPart {
  id: AntibodyPartId;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  formulaEn: string;
  formulaAr: string;
  examTipEn: string;
  examTipAr: string;
}

export const ANTIBODY_PARTS: AntibodyPart[] = [
  {
    id: 'variable',
    nameEn: 'Variable Region (V_H & V_L) - Antigen Binding Sites',
    nameAr: 'المنطقة المتغيرة (موقعا الارتباط بالمولد المضاد)',
    descEn:
      'Located at the N-terminal tips of both Fab arms. Consists of hypervariable amino acid sequences forming a 3D structural cleft uniquely complementary to a specific antigenic epitope (like a key to a lock).',
    descAr:
      'توجد في طرفي ذراعي الجسم المضاد (المنطقة Fab)، وتتكون من تتابعات مميزة من الأحماض الأمينية تشكل موقع ارتباط ثلاثي الأبعاد يتطابق تماماً مع مولد الضد (الأنتيجين) كالقفل والمفتاح.',
    formulaEn: '2 identical antigen-binding sites per monomeric IgG molecule.',
    formulaAr: 'يحتوي كل جزيء جسم مضاد IgG مفرد على موقعي ارتباط متطابقين للأنتيجين.',
    examTipEn:
      'The specificity of each antibody is determined by the shape, sequence, and conformational folding of the amino acids in its variable regions.',
    examTipAr:
      'يرجع التخصص الدقيق لكل جسم مضاد لتشكل الأحماض الأمينية وترتيبها الفراغي في الجزء المتغير، مما يجعله خاصاً بنوع واحد من الأنتيجينات.',
  },
  {
    id: 'constant',
    nameEn: 'Constant Region (C_H & C_L)',
    nameAr: 'المنطقة الثابتة (سلسلتان ثقيلتان وخفيفتان)',
    descEn:
      'Consists of invariable amino acid sequences identical within a class of antibodies (IgG, IgM, IgA, IgE, IgD). Forms the structural stalk and activates the complement cascade.',
    descAr:
      'تتكون من تتابعات ثابتة من الأحماض الأمينية لا تختلف في جزيئات الصنف الواحد (IgG أو IgM أو IgA)، وتشارك في تنشيط النظام المتمم وتثبيته.',
    formulaEn: 'Fc region is composed of the paired constant domains of the heavy chains.',
    formulaAr: 'تتكون المنطقة المتبلورة (Fc) من النطاقات الثابتة للسلسلتين الثقيلتين.',
    examTipEn: 'All antibodies of the IgG class share the same constant region framework regardless of the antigen they target.',
    examTipAr: 'تتماثل المنطقة الثابتة في جميع الأجسام المضادة من نفس الفئة (مثل IgG) بصرف النظر عن نوع الأنتيجين المستهدف.',
  },
  {
    id: 'disulfide',
    nameEn: 'Disulfide Bridges (S-S Bonds)',
    nameAr: 'الروابط الكبريتيدية الثنائية (S-S)',
    descEn:
      'Covalent sulfur-to-sulfur bonds linking the two heavy chains together in the hinge region (2 interchain bonds) and linking each light chain to its adjacent heavy chain (1 interchain bond each) = 4 primary interchain bonds.',
    descAr:
      'روابط تساهمية كبريتيدية ثنائية تربط السلسلتين الثقيلتين ببعضهما عند منطقة المفصلة (رابطتان)، وتربط كل سلسلة خفيفة بالسلسلة الثقيلة المجاورة (رابطة لكل جانب) = ٤ روابط بينية رئيسية.',
    formulaEn: '4 primary interchain disulfide bridges maintain the quaternary Y-structure.',
    formulaAr: '٤ روابط كبريتيدية ثنائية رئيسية تربط السلاسل الأربع معاً لتحافظ على شكل الحرف Y.',
    examTipEn:
      'Exam question: Disulfide bonds are covalent bonds formed between cysteine amino acid residues containing sulfhydryl (-SH) groups.',
    examTipAr:
      'سؤال وزاري متكرر: الروابط الكبريتيدية هي روابط تساهمية قوية تربط السلاسل البروتينية للأجسام المضادة وتتكون بين أحماض السيستين.',
  },
  {
    id: 'hinge',
    nameEn: 'Flexible Hinge Region',
    nameAr: 'منطقة المفصلة المرنة',
    descEn:
      'Proline-rich flexible segment allowing the two Fab arms to articulate and open or close like scissors, enabling simultaneous binding to two distant antigens on a bacterial surface.',
    descAr:
      'منطقة مرنة غنية بالبرولين تسمح لذراعي الجسم المضاد بالانفراج والاقتراب كالمقص للارتباط بمولدين متفرقين على سطح الميكروب في آن واحد.',
    formulaEn: 'Allows flexibility of angle between 0° and 180° for epitope capture.',
    formulaAr: 'تتيح حرية الحركة للذراعين بزاوية متغيرة للارتباط بأكثر من أنتيجين.',
    examTipEn: 'Enzymes like papain cleave at the hinge region to yield 2 Fab fragments and 1 Fc fragment.',
    examTipAr: 'منطقة المفصلة تمنح الجسم المضاد مرونة ميكانيكية فائقة في التقاط الأنتيجينات متعددة المسافات.',
  },
];

export const INITIAL_IMMUNITY_PARAMS: ImmunityParams = {
  subTab: 'humoral_cellular',
  pathway: 'humoral',
  cascadeStep: 4,
  antibodyAction: 'neutralization',
  complementsActive: true,
  kineticsCondition: 'standard_dual',
  timeDay: 14,
  pathogenDose: 50,
  selectedPartId: 'variable',
  phagocytosisStage: 4,
  cellularStudioMode: 'macrophage_phagocytosis',
  perforinPoreCount: 6,
  phagocytosisAutoPlay: false,
};

// Parameter schema
const IMMUNITY_PARAM_SCHEMA: LabParameterSchema<ImmunityParams> = {
  subTab: {
    key: 'subTab',
    type: 'select',
    labelEn: 'Investigation Module',
    labelAr: 'وحدة الاستكشاف المناعي',
    defaultValue: 'humoral_cellular',
    options: [
      { value: 'humoral_cellular', labelEn: '1. Humoral & Cellular Cascades', labelAr: '١. شلالات المناعة الخلطية والخلوية' },
      { value: 'phagocytosis_studio', labelEn: '2. Macrophage Phagocytosis & Perforin Studio', labelAr: '٢. استوديو البلعمة وعرض MHC-II وثقوب البيرفورين' },
      { value: 'antibody_actions', labelEn: '3. 5 Antibody Action Mechanisms', labelAr: '٣. طرق عمل الأجسام المضادة الخمسة' },
      { value: 'kinetics_memory', labelEn: '4. Primary vs Secondary Kinetics', labelAr: '٤. منحنيات الاستجابة الأولية والثانوية' },
      { value: 'antibody_anatomy', labelEn: '5. High-Res IgG Molecular Atlas', labelAr: '٥. أطلس جزيء الأجسام المضادة (IgG)' },
    ],
    category: 'primary',
  },
  pathway: {
    key: 'pathway',
    type: 'select',
    labelEn: 'Immune Pathway',
    labelAr: 'مسار المناعة المكتسبة',
    defaultValue: 'humoral',
    options: [
      { value: 'humoral', labelEn: 'Humoral Immunity (B Cells & Abs)', labelAr: 'المناعة الخلطية (بالأجسام المضادة)' },
      { value: 'cellular', labelEn: 'Cell-Mediated (T Cells & Cytotoxins)', labelAr: 'المناعة الخلوية (بالخلايا التائية)' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'humoral_cellular',
  },
  cascadeStep: {
    key: 'cascadeStep',
    type: 'number',
    labelEn: 'Cascade Phase Progression',
    labelAr: 'مرحلة تقدم الشلال المناعي',
    defaultValue: 4,
    min: 0,
    max: 5,
    step: 1,
    unit: '',
    category: 'primary',
    visibleIf: (p) => p.subTab === 'humoral_cellular',
  },
  cellularStudioMode: {
    key: 'cellularStudioMode',
    type: 'select',
    labelEn: 'Cellular Studio Mode',
    labelAr: 'نمط الاستوديو الخلوي',
    defaultValue: 'macrophage_phagocytosis',
    options: [
      { value: 'macrophage_phagocytosis', labelEn: 'Macrophage Phagocytosis & MHC-II', labelAr: 'بلعمة الميكروب وعرض MHC-II' },
      { value: 'tc_perforin_lysis', labelEn: 'CD8+ TC Perforin & Apoptosis', labelAr: 'ثقوب البيرفورين والموت المبرمج (TC)' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'phagocytosis_studio',
  },
  phagocytosisStage: {
    key: 'phagocytosisStage',
    type: 'number',
    labelEn: 'Phagocytosis Progression Step',
    labelAr: 'مرحلة عملية البلعمة',
    defaultValue: 4,
    min: 0,
    max: 5,
    step: 1,
    category: 'primary',
    visibleIf: (p) => p.subTab === 'phagocytosis_studio',
  },
  perforinPoreCount: {
    key: 'perforinPoreCount',
    type: 'number',
    labelEn: 'Perforin Transmembrane Pores',
    labelAr: 'عدد ثقوب البيرفورين الغشائية',
    defaultValue: 6,
    min: 1,
    max: 10,
    step: 1,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'phagocytosis_studio' && p.cellularStudioMode === 'tc_perforin_lysis',
  },
  phagocytosisAutoPlay: {
    key: 'phagocytosisAutoPlay',
    type: 'boolean',
    labelEn: 'Auto-Play Simulation Animation',
    labelAr: 'تشغيل الحركة التلقائية',
    defaultValue: false,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'phagocytosis_studio',
  },
  antibodyAction: {
    key: 'antibodyAction',
    type: 'select',
    labelEn: 'Antibody Action Mechanism',
    labelAr: 'آلية عمل الجسم المضاد',
    defaultValue: 'neutralization',
    options: [
      { value: 'neutralization', labelEn: '1. Neutralization (التعادل)', labelAr: '١. التعادل (مهاجمة الفيروسات)' },
      { value: 'agglutination', labelEn: '2. Agglutination / Clumping (التلازم)', labelAr: '٢. التلازم أو الإلصاق (IgM)' },
      { value: 'precipitation', labelEn: '3. Precipitation (الترسيب)', labelAr: '٣. الترسيب (الأنتيجينات الذائبة)' },
      { value: 'lysis', labelEn: '4. Lysis via Complements (التحلل)', labelAr: '٤. التحلل بنظام المتممات' },
      { value: 'antitoxin', labelEn: '5. Antitoxin Inactivation (إبطال السموم)', labelAr: '٥. إبطال مفعول السموم والمتممات' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'antibody_actions',
  },
  complementsActive: {
    key: 'complementsActive',
    type: 'boolean',
    labelEn: 'Serum Complements Active',
    labelAr: 'نشاط نظام المتممات بالدم',
    defaultValue: true,
    category: 'primary',
    visibleIf:
      (p) => p.subTab === 'antibody_actions' && (p.antibodyAction === 'lysis' || p.antibodyAction === 'antitoxin'),
  },
  kineticsCondition: {
    key: 'kineticsCondition',
    type: 'select',
    labelEn: 'Inoculation & Host State',
    labelAr: 'حالة العائل ونمط الحقن',
    defaultValue: 'standard_dual',
    options: [
      { value: 'standard_dual', labelEn: 'Standard: Primary (D0) + Booster (D21)', labelAr: 'طبيعي: حقن أولي (يوم ٠) + منشط (يوم ٢١)' },
      { value: 'primary_only', labelEn: 'Single Primary Infection (D0 only)', labelAr: 'إصابة أولية مفردة (يوم ٠ فقط)' },
      { value: 'immunodeficiency', labelEn: 'Severe Immunodeficiency (HIV CD4 Drop)', labelAr: 'نقص مناعي حاد (هبوط خلايا TH)' },
      { value: 'vaccine_booster', labelEn: 'Pre-Immunized Host (Memory Challenge)', labelAr: 'عائل ملقح مسبقاً (استجابة ذاكرة فورية)' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'kinetics_memory',
  },
  timeDay: {
    key: 'timeDay',
    type: 'number',
    labelEn: 'Timeline Tracker (Days)',
    labelAr: 'مسار الأيام الزمني (أيام)',
    defaultValue: 14,
    min: 0,
    max: 30,
    step: 1,
    unit: ' days',
    category: 'primary',
    visibleIf: (p) => p.subTab === 'kinetics_memory',
  },
  pathogenDose: {
    key: 'pathogenDose',
    type: 'number',
    labelEn: 'Inoculum Pathogen Dose',
    labelAr: 'جرعة الميكروب المحقونة',
    defaultValue: 50,
    min: 10,
    max: 100,
    step: 10,
    unit: ' AU',
    category: 'primary',
    visibleIf: (p) => p.subTab === 'kinetics_memory',
  },
  selectedPartId: {
    key: 'selectedPartId',
    type: 'select',
    labelEn: 'Antibody Structural Domain',
    labelAr: 'نطاق هيكل الجسم المضاد',
    defaultValue: 'variable',
    options: [
      { value: 'variable', labelEn: 'Variable Region (Antigen Binding)', labelAr: 'المنطقة المتغيرة (موقعا الأنتيجين)' },
      { value: 'constant', labelEn: 'Constant Region (Fc & Stalk)', labelAr: 'المنطقة الثابتة (Fc والمتممات)' },
      { value: 'disulfide', labelEn: 'Disulfide Bridges (4 S-S Bonds)', labelAr: 'الروابط الكبريتيدية الثنائية (٤ روابط)' },
      { value: 'hinge', labelEn: 'Flexible Hinge Region', labelAr: 'منطقة المفصلة المرنة' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'antibody_anatomy',
  },
};

// Presets
const IMMUNITY_PRESETS: LabPreset<ImmunityParams>[] = [
  {
    id: 'humoral_full_cascade',
    nameEn: 'Humoral Immunity Cascade (B-Cell & Antibodies)',
    nameAr: 'شلال المناعة الخلطية (الخلايا البائية والأجسام المضادة)',
    descriptionEn: 'Step-by-step macrophage phagocytosis, CD4+ TH activation, interleukin signaling, and plasma cell antibody secretion.',
    descriptionAr: 'بلعمة الميكروب، تنشيط خلايا TH، إفراز الإنترلوكينات، وإنتاج الأجسام المضادة من الخلايا البلازمية.',
    badge: 'Humoral',
    params: {
      subTab: 'humoral_cellular',
      pathway: 'humoral',
      cascadeStep: 4,
      antibodyAction: 'neutralization',
      complementsActive: true,
      kineticsCondition: 'standard_dual',
      timeDay: 14,
      pathogenDose: 50,
      selectedPartId: 'variable',
      phagocytosisStage: 4,
      cellularStudioMode: 'macrophage_phagocytosis',
      perforinPoreCount: 6,
      phagocytosisAutoPlay: false,
    },
  },
  {
    id: 'macrophage_phagocytosis_mhc',
    nameEn: 'Macrophage Phagocytosis & MHC-II Presentation',
    nameAr: 'بلعمة الميكروب وعرض الأنتيجين على MHC-II',
    descriptionEn: 'Detailed microscopic steps of bacterial engulfment, lysosomal lysozyme digestion, and MHC-II surface display.',
    descriptionAr: 'المراحل المجهرية الدقيقة لالتهام البكتيريا وتفكيكها بإنزيمات الليسوسومات وعرضها على بروتين MHC-II.',
    badge: 'Phagocytosis',
    params: {
      subTab: 'phagocytosis_studio',
      pathway: 'humoral',
      cascadeStep: 4,
      antibodyAction: 'neutralization',
      complementsActive: true,
      kineticsCondition: 'standard_dual',
      timeDay: 14,
      pathogenDose: 50,
      selectedPartId: 'variable',
      phagocytosisStage: 4,
      cellularStudioMode: 'macrophage_phagocytosis',
      perforinPoreCount: 6,
      phagocytosisAutoPlay: false,
    },
  },
  {
    id: 'perforin_lymphotoxin_apoptosis',
    nameEn: 'Cytotoxic T-Cell (CD8+) Perforin & Apoptosis',
    nameAr: 'الخلايا التائية السامة وثقوب البيرفورين والموت المبرمج',
    descriptionEn: 'CD8+ TC cell dock, perforin pore formation on target membrane, and lymphotoxin apoptotic gene activation.',
    descriptionAr: 'التصاق خلية TC بالخلية المصابة وإفراز البيرفورين لثقب الغشاء والسموم الليمفاوية لتفتيت النواة.',
    badge: 'Cytotoxic',
    params: {
      subTab: 'phagocytosis_studio',
      pathway: 'cellular',
      cascadeStep: 4,
      antibodyAction: 'lysis',
      complementsActive: true,
      kineticsCondition: 'standard_dual',
      timeDay: 10,
      pathogenDose: 70,
      selectedPartId: 'variable',
      phagocytosisStage: 4,
      cellularStudioMode: 'tc_perforin_lysis',
      perforinPoreCount: 8,
      phagocytosisAutoPlay: false,
    },
  },
  {
    id: 'antibody_complement_lysis',
    nameEn: 'Antibody-Mediated Complement Lysis',
    nameAr: 'تحلل الميكروبات بالأجسام المضادة والمتممات',
    descriptionEn: 'Classical complement fixation on bacterial cell wall forming Membrane Attack Complexes (MAC).',
    descriptionAr: 'تثبيت نظام المتممات على جدار البكتيريا وتكوين معقد مهاجمة الغشاء وثقبه حتى الانفجار.',
    badge: 'Complements',
    params: {
      subTab: 'antibody_actions',
      pathway: 'humoral',
      cascadeStep: 4,
      antibodyAction: 'lysis',
      complementsActive: true,
      kineticsCondition: 'standard_dual',
      timeDay: 14,
      pathogenDose: 50,
      selectedPartId: 'constant',
      phagocytosisStage: 4,
      cellularStudioMode: 'macrophage_phagocytosis',
      perforinPoreCount: 6,
      phagocytosisAutoPlay: false,
    },
  },
  {
    id: 'secondary_immune_memory',
    nameEn: 'Secondary Immunological Memory Surge',
    nameAr: 'طفرة الذاكرة المناعية والاستجابة الثانوية',
    descriptionEn: 'Day 21 secondary antigen encounter triggering immediate exponential antibody titer jump via memory B cells.',
    descriptionAr: 'التعرض للميكروب في اليوم 21 واستجابة فورية هائلة للأجسام المضادة بفضل خلايا الذاكرة دون ظهور أعراض.',
    badge: 'Memory',
    params: {
      subTab: 'kinetics_memory',
      pathway: 'humoral',
      cascadeStep: 4,
      antibodyAction: 'neutralization',
      complementsActive: true,
      kineticsCondition: 'standard_dual',
      timeDay: 24,
      pathogenDose: 50,
      selectedPartId: 'variable',
      phagocytosisStage: 4,
      cellularStudioMode: 'macrophage_phagocytosis',
      perforinPoreCount: 6,
      phagocytosisAutoPlay: false,
    },
  },
];

// POE Prompts
const IMMUNITY_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_mhc_class_ii',
    titleEn: 'Challenge: The Role of Major Histocompatibility Complex (MHC-II)',
    titleAr: 'تحدي: دور بروتين التوافق النسيجي MHC-II في المناعة النوعية',
    scenarioEn:
      'A mutant macrophage can engulf and enzymatically digest bacteria normally using lysosomes, but carries a deletion mutation in the MHC gene preventing MHC-II synthesis.',
    scenarioAr:
      'خلية بلعمية طافرة تستطيع التهام البكتيريا وهضمها بإنزيمات الليسوسومات طبيعياً، لكن بها طفرة جينية تمنع تكوين بروتين التوافق النسيجي (MHC-II).',
    questionEn:
      'Why does this macrophage completely fail to activate Helper T cells (TH)?',
    questionAr:
      'لماذا تفشل هذه الخلية البلعمية تماماً في تنشيط الخلايا التائية المساعدة (TH)؟',
    optionsEn: [
      'Helper T cells (CD4+) can only recognize antigen fragments when complexed with MHC-II molecules on the antigen-presenting cell surface; they cannot recognize free antigens.',
      'The macrophage ceases to produce ATP and dies immediately.',
      'Lysosomal enzymes destroy the Helper T cell directly upon contact.',
      'Helper T cells only recognize unfragmented intact bacteria floating in plasma.',
    ],
    optionsAr: [
      'لأن الخلايا التائية المساعدة (CD4+) لا يمكنها التعرف على الأنتيجين إلا بعد معالجته وارتباطه ببروتين التوافق النسيجي MHC-II على غشاء الخلية البلعمية.',
      'لأن الخلية البلعمية تفقد قدرتها على إنتاج الطاقة وتموت فوراً.',
      'لأن إنزيمات الليسوسومات تهاجم الخلايا التائية المساعدة وتدمرها.',
      'لأن الخلايا التائية المساعدة لا تتعرف إلا على البكتيريا السليمة غير المهضومة.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'T-cell receptors (TCR) along with the CD4 coreceptor on Helper T lymphocytes strictly recognize antigen fragments displayed in the cleft of MHC-II molecules on Antigen Presenting Cells (APCs like macrophages and B cells). Without MHC-II, antigen presentation cannot occur, rendering the adaptive immune branch dormant.',
    scientificExplanationAr:
      'تعتمد الخلايا التائية المساعدة (TH) في التعرف على الأنتيجينات على مستقبلاتها (TCR) بمساعدة مستقبل CD4، والتي لا ترتبط بالأنتيجين الحر أبداً، بل تشترط وجوده مرتبطاً ببروتين التوافق النسيجي (MHC) على سطح الخلية البلعمية العارضة، وبدون MHC يفشل خط الدفاع الثالث في التنشيط كلياً.',
  },
  {
    id: 'poe_complement_inactivation',
    titleEn: 'Challenge 1: Heat Inactivation of Blood Complements',
    titleAr: 'تحدي ١: التعطيل الحراري للمتممات في مصل الدم',
    scenarioEn:
      'A clinical serum sample containing specific antibodies against encapsulated bacteria is heated to 56°C for 30 minutes in a water bath.',
    scenarioAr:
      'تم تسخين عينة مصل دم تحتوي على أجسام مضادة نوعية ضد بكتيريا إلى درجة ٥٦°م لمدة ٣٠ دقيقة في حمام مائي.',
    questionEn: 'Which antibody mechanism is completely abolished while others remain intact?',
    questionAr: 'ما هي الآلية التي تتوقف تماماً، وما الآليات التي تظل سليمة؟',
    optionsEn: [
      'Lysis via Complements is abolished because complement proteins are heat-labile, while Neutralization and Agglutination persist.',
      'Agglutination is abolished, while complement lysis increases because antibodies denature.',
      'All 5 antibody mechanisms are completely destroyed at 56°C.',
      'Antitoxin inactivation is abolished, while complement lysis continues normally without proteins.',
    ],
    optionsAr: [
      'تتوقف آلية التحلل وإبطال السموم لاعتمادها على المتممات (بروتينات حساسة للحرارة)، بينما يظل التعادل والتلازم سليماً.',
      'يتوقف التلازم ويزداد التحلل بالمتممات لأن الأجسام المضادة تتفكك بالحرارة.',
      'تتدمر جميع آليات الأجسام المضادة الخمسة تماماً عند ٥٦°م.',
      'يتوقف إبطال السموم بينما يستمر تحلل البكتيريا دون الحاجة لأي بروتينات متممة.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Complements are heat-labile enzymatic plasma proteins inactivated at 56°C. Lysis and antitoxin neutralization require active complements to digest bacterial walls and toxins, whereas direct antigen cross-linking (agglutination, neutralization, precipitation) depends solely on stable antibody Fab arms.',
    scientificExplanationAr:
      'المتممات هي بروتينات بلازمية نوعية حساسة للحرارة وتتعطل عند ٥٦°م. آليتا التحلل وإبطال السموم تعتمدان كلياً على نشاط المتممات لتحليل الجدار والسم، بينما يعتمد التعادل والتلازم والترسيب على مواقع الارتباط الثابتة في ذراعي الجسم المضاد.',
  },
  {
    id: 'poe_suppressor_t_failure',
    titleEn: 'Challenge 2: Pathology of Suppressor T Cell (TS) Malfunction',
    titleAr: 'تحدي ٢: ماذا يحدث عند فشل الخلايا التائية المثبطة (TS)؟',
    scenarioEn:
      'Following successful bacterial eradication in a human host, a genetic defect prevents Suppressor T cells (TS / CD8+) from secreting Lymphokines.',
    scenarioAr:
      'بعد القضاء التام على الميكروب في الجسم، أدى خلل وراثي إلى منع الخلايا التائية الكابحة (TS) من إفراز الليمفوكينات.',
    questionEn: 'What is the immediate pathological consequence for the host?',
    questionAr: 'ما هي النتيجة المرضية المباشرة المترتبة على ذلك في الجسم؟',
    optionsEn: [
      'Plasma B cells and Cytotoxic T cells continue unregulated activity, attacking host tissues and causing fatal autoimmune hyper-inflammation.',
      'The immune response stops instantly because Helper T cells take over the suppression role.',
      'Pathogens immediately reinfect the host due to a lack of memory cells.',
      'Antibody titer drops to absolute zero within 2 minutes.',
    ],
    optionsAr: [
      'تستمر الخلايا البلازمية والتائية السامة في العمل المفرط دون كبح، مما يسبب مهاجمة أنسجة الجسم وحدوث التهابات وأمراض مناعة ذاتية خطيرة.',
      'تتوقف الاستجابة فوراً لأن خلايا TH تتولى وظيفة التثبيط تلقائياً.',
      'يعود الميكروب للانتشار فوراً بسبب غياب خلايا الذاكرة.',
      'يهبط تركيز الأجسام المضادة إلى الصفر المطلق خلال دقيقتين.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Suppressor T cells (TS, CD8+) act as the physiological "brakes" of the immune system by secreting Lymphokines, which induce apoptosis in effector plasma cells and cytotoxic T cells, leaving only memory cells. Without TS suppression, chronic autoimmune inflammation and tissue damage ensue.',
    scientificExplanationAr:
      'الخلايا التائية المثبطة (TS) هي صمام الأمان الذي يوقف المعركة المناعية بإفراز الليمفوكينات، التي توقف إنتاج الأجسام المضادة وتسبب موت الكثير من خلايا T و B المنشطة مع الإبقاء على خلايا الذاكرة فقط، وبدونها يهاجم الجهاز المناعي أنسجة الجسم السليمة.',
  },
];

// Physical calculation engine
export function computeImmunitySimState(params: ImmunityParams): ImmunitySimState {
  const {
    cascadeStep,
    antibodyAction,
    complementsActive,
    kineticsCondition,
    timeDay,
    pathogenDose,
    phagocytosisStage = 4,
    perforinPoreCount = 6,
  } = params;

  // Kinetics evaluation over time (Days 0 to 30)
  let abTiter = 0;
  let pathLoad = 0;
  let helperT = 850;
  let cytotoxicT = 450;
  let plasmaCells = 0;
  let memoryCells = 50;
  let suppressorT = 100;

  if (kineticsCondition === 'immunodeficiency') {
    helperT = Math.max(20, 150 - timeDay * 4);
    cytotoxicT = Math.max(50, 200 - timeDay * 3);
    plasmaCells = 10;
    memoryCells = 15;
    suppressorT = 50;
    abTiter = Math.max(5, 30 - timeDay);
    pathLoad = Math.min(1000, pathogenDose * (1 + timeDay * 0.35));
  } else if (kineticsCondition === 'vaccine_booster') {
    memoryCells = 500;
    plasmaCells = Math.min(1200, Math.floor(pathogenDose * 12 * Math.exp(-timeDay / 8)));
    abTiter = Math.min(9500, Math.floor(pathogenDose * 90 * (1 - Math.exp(-timeDay / 2)) * Math.exp(-timeDay / 20)));
    pathLoad = Math.max(0, Math.floor(pathogenDose * Math.exp(-timeDay / 1.5)));
    helperT = 900;
    cytotoxicT = 520;
  } else if (kineticsCondition === 'primary_only') {
    if (timeDay < 4) {
      abTiter = Math.floor(pathogenDose * 0.1 * timeDay);
      pathLoad = Math.floor(pathogenDose * (1 + timeDay * 0.4));
      plasmaCells = timeDay * 15;
    } else if (timeDay <= 12) {
      const progress = (timeDay - 4) / 8;
      abTiter = Math.floor(pathogenDose * 2.5 * Math.sin(progress * Math.PI));
      pathLoad = Math.max(0, Math.floor(pathogenDose * 1.8 * (1 - progress)));
      plasmaCells = Math.floor(180 * Math.sin(progress * Math.PI));
      memoryCells = 100 + Math.floor(120 * progress);
    } else {
      abTiter = Math.max(10, Math.floor(pathogenDose * 0.5 * Math.exp(-(timeDay - 12) / 6)));
      pathLoad = 0;
      plasmaCells = Math.max(5, Math.floor(50 * Math.exp(-(timeDay - 12) / 4)));
      memoryCells = 220;
      suppressorT = 350;
    }
  } else {
    // Standard dual
    if (timeDay < 4) {
      abTiter = Math.floor(pathogenDose * 0.1 * timeDay);
      pathLoad = Math.floor(pathogenDose * (1 + timeDay * 0.4));
      plasmaCells = timeDay * 15;
    } else if (timeDay <= 12) {
      const p = (timeDay - 4) / 8;
      abTiter = Math.floor(pathogenDose * 2.5 * Math.sin(p * Math.PI));
      pathLoad = Math.max(0, Math.floor(pathogenDose * 1.8 * (1 - p)));
      plasmaCells = Math.floor(180 * Math.sin(p * Math.PI));
      memoryCells = 100 + Math.floor(120 * p);
    } else if (timeDay < 21) {
      abTiter = Math.max(15, Math.floor(pathogenDose * 0.4 * Math.exp(-(timeDay - 12) / 5)));
      pathLoad = 0;
      plasmaCells = 10;
      memoryCells = 220;
    } else {
      const dt = timeDay - 21;
      const surge = Math.sin((dt / 9) * Math.PI);
      abTiter = Math.min(8500, Math.floor(pathogenDose * 80 * Math.max(0, surge) + 80));
      pathLoad = Math.max(0, Math.floor(pathogenDose * 0.8 * Math.exp(-dt / 1.2)));
      plasmaCells = Math.floor(800 * Math.max(0, surge));
      memoryCells = 450 + Math.floor(150 * (dt / 9));
      helperT = 1100;
    }
  }

  // Mechanism efficacy calculations
  let lysisRatePct = 0;
  let neutralizationPct = 0;

  if (antibodyAction === 'lysis' || antibodyAction === 'antitoxin') {
    lysisRatePct = complementsActive ? 94.5 : 4.2;
  } else {
    lysisRatePct = complementsActive ? 75.0 : 12.0;
  }

  if (antibodyAction === 'neutralization') {
    neutralizationPct = Math.min(99.4, 60 + cascadeStep * 7.5);
  } else if (antibodyAction === 'agglutination') {
    neutralizationPct = 92.0;
  } else if (antibodyAction === 'precipitation') {
    neutralizationPct = 88.5;
  } else {
    neutralizationPct = 85.0;
  }

  const elisaOD450 = parseFloat((0.05 + Math.min(2.85, (abTiter / 3000) * 2.5)).toFixed(3));

  // Phagocytosis Studio Derived Metrics
  const phagosomeHydrolysis = Math.min(100, Math.max(0, (phagocytosisStage - 1) * 25));
  const mhcDensity = phagocytosisStage >= 3 ? Math.min(100, (phagocytosisStage - 2) * 33) : 5;
  const interleukinPg = phagocytosisStage >= 5 ? 380 : phagocytosisStage === 4 ? 140 : 20;
  const perforinDensity = (perforinPoreCount / 10) * 100;
  const lymphotoxinApopt = Math.min(99, perforinPoreCount * 9 + 25);

  return {
    antibodyTiter: abTiter,
    pathogenLoad: pathLoad,
    plasmaCellCount: plasmaCells,
    memoryCellCount: memoryCells,
    helperTCount: helperT,
    cytotoxicTCount: cytotoxicT,
    suppressorTCount: suppressorT,
    elisaOD450,
    lysisRatePct,
    neutralizationPct,
    phagosomeHydrolysisPct: phagosomeHydrolysis,
    mhcPresentationDensity: mhcDensity,
    perforinPoreDensity: perforinDensity,
    lymphotoxinApoptosisPct: lymphotoxinApopt,
    interleukinConcentrationPg: interleukinPg,
  };
}

// Lab Definition
export const IMMUNITY_LAB_DEF: LabDefinition<ImmunityParams, ImmunitySimState> = {
  id: 'immunity_kinetics_lab',
  subject: 'biology',
  chapterRef: 'Chapter 4: Immunity in Living Organisms (المناعة في الكائنات الحية)',
  titleEn: 'Immunology, Dual Cascades & Cellular Phagocytosis Studio',
  titleAr: 'مختبر المناعة والشلالات المناعية واستوديو البلعمة الخلوية',
  subtitleEn:
    'Comprehensive simulation of Humoral/Cellular cascades, Macrophage Phagocytosis & MHC-II, CD8+ Perforin Lysis, and 5 Antibody Mechanisms',
  subtitleAr:
    'محاكاة شاملة للمناعة الخلطية والخلوية، بلعمة الميكروبات وعرض بروتين MHC-II، ثقوب البيرفورين القاتلة، وطرق عمل الأجسام المضادة',
  taglineEn: 'Tier-1 High-Fidelity Immunology & Cytodynamics Studio',
  taglineAr: 'المختبر المناعي التفاعلي المتقدم وفق منهج الثانوية العامة',
  objectives: [
    {
      id: 'obj-humoral',
      textEn: 'Understand macrophage antigen presentation on MHC-II and CD4+ TH stimulation of B cells to secrete specific antibodies.',
      textAr: 'استيعاب عرض الأنتيجين على بروتين التوافق النسيجي MHC-II وتنشيط الخلايا البائية بالإنترلوكينات لإنتاج الأجسام المضادة.',
      bloomLevel: 'understand',
    },
    {
      id: 'obj-phagocytosis',
      textEn: 'Analyze sequential phagocytic stages: pseudopodia engulfment, lysosome fusion, enzymatic digestion, and MHC-II surface presentation.',
      textAr: 'تحليل مراحل البلعمة المتتابعة: مد الأقدام الكاذبة، اندماج الليسوسومات، التحلل الإنزيمي، وعرض الأنتيجين على MHC-II.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj-cellular',
      textEn: 'Analyze CD8+ cytotoxic T cell secretion of perforin pores and lymphotoxins inducing nuclear apoptosis in infected cells.',
      textAr: 'تحليل إفراز خلايا TC لبروتين البيرفورين صانع الثقوب والسموم الليمفاوية المحفزة للموت المبرمج في الخلايا المصابة والسرطانية.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj-mechanisms',
      textEn: 'Differentiate between neutralization, agglutination, precipitation, complement lysis, and antitoxin inactivation.',
      textAr: 'التمييز المقارن بين طرق عمل الأجسام المضادة الخمسة: التعادل والتلازم والترسيب والتحلل بالمتممات وإبطال مفعول السموم.',
      bloomLevel: 'apply',
    },
    {
      id: 'obj-memory',
      textEn: 'Investigate lag time, peak antibody titer, and rapid secondary memory clearance over a 30-day clinical timeline.',
      textAr: 'استقصاء فترة الكمون وسرعة الاستجابة الثانوية ومعدل إنتاج الأجسام المضادة بفضل خلايا الذاكرة المناعية.',
      bloomLevel: 'evaluate',
    },
  ],
  keyFormulas: [
    {
      id: 'eq-complement-lysis',
      labelEn: 'Classical Complement Lysis Rate',
      labelAr: 'كفاءة تحلل الميكروبات بنظام المتممات',
      tex: '\\text{Bacteria} + \\text{Antibody} + \\text{Complements} \\to \\text{MAC Pores} \\implies \\text{Lysis}',
      descriptionEn: 'Binding of antibody Fc domain to C1 triggers cascade forming Membrane Attack Complexes (MAC).',
      descriptionAr: 'ارتباط الأجسام المضادة ينشط البروتينات المتممة لتكوين ثقوب غشائية تسبب تدفق الماء وانفجار الميكروب.',
    },
    {
      id: 'eq-mhc-presentation',
      labelEn: 'Antigen Processing & MHC-II Presentation',
      labelAr: 'معالجة الأنتيجين وعرضه على MHC-II',
      tex: '\\text{Antigen} + \\text{Lysozymes} \\to \\text{Peptides} \\xrightarrow{\\text{MHC-II}} \\text{Surface [MHC-II / Ag] Complex}',
      descriptionEn: 'Lysosomal lysozymes digest engulfed microbes; fragments complex with MHC-II for presentation to CD4+ TH.',
      descriptionAr: 'إنزيمات الليسوسومات تفتت الميكروب، وترتبط الشظايا ببروتين MHC-II لتبرز على الغشاء للخلية التائية المساعدة.',
    },
    {
      id: 'eq-perforin-pore',
      labelEn: 'Cytotoxic T-Cell Perforin Pore Formation',
      labelAr: 'ثقب الغشاء الخلوي بواسطة بروتين البيرفورين',
      tex: '\\text{Perforin} + \\text{Target Bilayer} \\xrightarrow{\\text{Ca}^{2+}} \\text{Cylindrical Pores} \\implies \\text{Osmotic Lysis}',
      descriptionEn: 'CD8+ TC secretes perforin monomers that polymerize in target cell membrane forming pore channels.',
      descriptionAr: 'تفرز خلايا TC بروتين البيرفورين الذي يتبلمر في غشاء الخلية المصابة مشكلاً ثقوباً أسطوانية تؤدي إلى تحللها مائياً.',
    },
    {
      id: 'eq-elisa',
      labelEn: 'ELISA Microplate Optical Density (Beer-Lambert)',
      labelAr: 'قراءة قياس الامتصاص الضوئي للإليزا',
      tex: '\\text{OD}_{450} = \\epsilon \\cdot c \\cdot l \\propto [\\text{Antibody}]',
      descriptionEn: 'Spectrophotometric absorbance at 450 nm correlates linearly with serum antibody concentration.',
      descriptionAr: 'يتناسب الامتصاص الضوئي عند ٤٥٠ نانومتر طردياً مع تركيز الأجسام المضادة في مصل المريض.',
    },
    {
      id: 'eq-secondary-surge',
      labelEn: 'Secondary Immunological Memory Factor',
      labelAr: 'معامل طفرة الذاكرة المناعية الثانوية',
      tex: '[\\text{Ab}]_{\\text{secondary}} \\gg 10 \\times [\\text{Ab}]_{\\text{primary}}, \\quad \\Delta t_{\\text{lag}} \\to 0',
      descriptionEn: 'Secondary response yields >10x higher antibody titer with near-instantaneous onset.',
      descriptionAr: 'الاستجابة المناعية الثانوية تحقق تركيزاً أعلى بعشر مرات على الأقل دون فترة كمون ملحوظة.',
    },
  ],
  defaultParams: INITIAL_IMMUNITY_PARAMS,
  paramSchema: IMMUNITY_PARAM_SCHEMA,
  presets: IMMUNITY_PRESETS,
  poePrompts: IMMUNITY_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Timeline / Stage',
    xLabelAr: 'الزمن / المرحلة',
    xUnit: 'days/step',
    yLabelEn: 'Antibody Titer / Phagocytosis Activity',
    yLabelAr: 'عيار الأجسام المضادة / نشاط البلعمة',
    yUnit: 'AU / %',
  },
};

// -------------------------------------------------------------
// Component Implementation
// -------------------------------------------------------------
export const ImmunityLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  const lab = useVirtualLab<ImmunityParams, ImmunitySimState>({
    definition: IMMUNITY_LAB_DEF,
  });

  const { params, updateParam, resetParams } = lab;

  const simState = useMemo<ImmunitySimState>(() => {
    return computeImmunitySimState(params);
  }, [params]);

  const currentPart = useMemo(() => {
    return ANTIBODY_PARTS.find((p) => p.id === params.selectedPartId) || ANTIBODY_PARTS[0];
  }, [params.selectedPartId]);

  const currentPhagStage = useMemo(() => {
    const s = Math.min(5, Math.max(0, params.phagocytosisStage ?? 4));
    return PHAGOCYTOSIS_STAGES[s] || PHAGOCYTOSIS_STAGES[4];
  }, [params.phagocytosisStage]);

  // Telemetry Metrics
  const telemetry = useMemo<LabTelemetryMetric[]>(() => {
    if (params.subTab === 'phagocytosis_studio') {
      if (params.cellularStudioMode === 'macrophage_phagocytosis') {
        return [
          {
            id: 'hydrolysis_rate',
            labelEn: 'Lysosome Digestion',
            labelAr: 'تفكيك الليسوسومات',
            value: simState.phagosomeHydrolysisPct,
            unit: '%',
            precision: 0,
            status: simState.phagosomeHydrolysisPct > 50 ? 'optimal' : 'normal',
          },
          {
            id: 'mhc_density',
            labelEn: 'MHC-II Display',
            labelAr: 'عرض معقد MHC-II',
            value: simState.mhcPresentationDensity,
            unit: '%',
            precision: 0,
            status: simState.mhcPresentationDensity > 60 ? 'optimal' : 'normal',
          },
          {
            id: 'interleukin_conc',
            labelEn: 'Interleukin Secretion',
            labelAr: 'إفراز الإنترلوكينات',
            value: simState.interleukinConcentrationPg,
            unit: ' pg/mL',
            precision: 0,
            status: simState.interleukinConcentrationPg > 100 ? 'optimal' : 'normal',
          },
          {
            id: 'cd4_th_status',
            labelEn: 'CD4+ TH Count',
            labelAr: 'تعداد خلايا TH',
            value: simState.helperTCount,
            unit: ' /µL',
            precision: 0,
            status: 'optimal',
          },
        ];
      }

      // Cytotoxic TC mode
      return [
        {
          id: 'perforin_pores',
          labelEn: 'Perforin Pores Formed',
          labelAr: 'ثقوب البيرفورين',
          value: params.perforinPoreCount,
          unit: ' pores',
          precision: 0,
          status: params.perforinPoreCount > 5 ? 'optimal' : 'normal',
        },
        {
          id: 'osmotic_lysis',
          labelEn: 'Osmotic Lysis Influx',
          labelAr: 'كفاءة التدفق والتحلل',
          value: simState.perforinPoreDensity,
          unit: '%',
          precision: 0,
          status: simState.perforinPoreDensity > 50 ? 'optimal' : 'normal',
        },
        {
          id: 'lymphotoxin_apoptosis',
          labelEn: 'Nuclear Apoptosis',
          labelAr: 'الموت المبرمج بالسموم',
          value: simState.lymphotoxinApoptosisPct,
          unit: '%',
          precision: 0,
          status: simState.lymphotoxinApoptosisPct > 70 ? 'optimal' : 'warning',
        },
        {
          id: 'cd8_tc_count',
          labelEn: 'CD8+ TC Count',
          labelAr: 'تعداد خلايا TC',
          value: simState.cytotoxicTCount,
          unit: ' /µL',
          precision: 0,
          status: 'optimal',
        },
      ];
    }

    return [
      {
        id: 'ab_titer',
        labelEn: 'Antibody Titer',
        labelAr: 'عيار الأجسام المضادة',
        value: simState.antibodyTiter,
        unit: ' AU',
        precision: 0,
        status: simState.antibodyTiter > 1000 ? 'optimal' : simState.antibodyTiter > 100 ? 'normal' : 'warning',
      },
      {
        id: 'pathogen_load',
        labelEn: 'Pathogen Load',
        labelAr: 'الحمل الميكروبي',
        value: simState.pathogenLoad,
        unit: ' AU',
        precision: 0,
        status: simState.pathogenLoad === 0 ? 'optimal' : simState.pathogenLoad < 50 ? 'normal' : 'alert',
      },
      {
        id: 'cd4_th_count',
        labelEn: 'CD4+ TH Count',
        labelAr: 'تعداد خلايا TH',
        value: simState.helperTCount,
        unit: ' /µL',
        precision: 0,
        status: simState.helperTCount > 500 ? 'optimal' : simState.helperTCount > 200 ? 'warning' : 'alert',
      },
      {
        id: 'elisa_od450',
        labelEn: 'ELISA OD450',
        labelAr: 'قراءة الإليزا (OD450)',
        value: simState.elisaOD450,
        unit: ' Abs',
        precision: 3,
        status: 'normal',
      },
      {
        id: 'complement_lysis',
        labelEn: 'Complement Lysis',
        labelAr: 'كفاءة تحلل المتممات',
        value: simState.lysisRatePct,
        unit: '%',
        precision: 1,
        status: params.complementsActive ? 'optimal' : 'alert',
      },
    ];
  }, [simState, params.subTab, params.cellularStudioMode, params.perforinPoreCount, params.complementsActive]);

  // Digital Multimeter / Cytometer Telemetry
  const multimeterReading: DMMReading = useMemo(
    () => ({
      mode: 'DCV',
      value: params.subTab === 'phagocytosis_studio' ? simState.interleukinConcentrationPg : simState.antibodyTiter,
      displayString:
        params.subTab === 'phagocytosis_studio'
          ? `${simState.interleukinConcentrationPg} pg/mL (IL)`
          : `${simState.antibodyTiter} AU`,
      secondaryString: `CD4+ TH: ${simState.helperTCount} | CD8+ TC: ${simState.cytotoxicTCount} | Plasma B: ${simState.plasmaCellCount} | Memory: ${simState.memoryCellCount}`,
      unit: params.subTab === 'phagocytosis_studio' ? 'pg/mL' : 'AU',
      voltageDC: simState.helperTCount,
      voltageAC: simState.cytotoxicTCount,
      currentDC: simState.plasmaCellCount,
      resistance: simState.memoryCellCount,
      continuityBeep: params.complementsActive,
      isOverload: simState.pathogenLoad > 500,
    }),
    [simState, params.subTab, params.complementsActive]
  );

  // Dual-Trace Oscilloscope
  const oscilloscopeCh1: WaveformSignal = useMemo(
    () => ({
      id: 'trace_ab_kinetics',
      label: isArabic ? 'عيار الأجسام المضادة (Ab Titer)' : 'Serum Antibody Titer',
      color: '#38bdf8',
      amplitude: Math.min(10, Math.max(0.5, (simState.antibodyTiter / 8000) * 10)),
      frequency: 1.0,
      phase: 0,
      phaseDeg: 0,
      type: 'sine',
    }),
    [simState.antibodyTiter, isArabic]
  );

  const oscilloscopeCh2: WaveformSignal = useMemo(
    () => ({
      id: 'trace_pathogen_clearance',
      label: isArabic ? 'الحمل الميكروبي (Pathogen Load)' : 'Pathogen Antigen Curve',
      color: '#f43f5e',
      amplitude: Math.min(10, Math.max(0.2, (simState.pathogenLoad / 500) * 10)),
      frequency: 1.5,
      phase: Math.PI / 2,
      phaseDeg: 90,
      type: 'triangle',
    }),
    [simState.pathogenLoad, isArabic]
  );

  // Canvas Renderer
  const renderSimulation = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _viewport: LabViewportState,
      _dpr: number,
      time?: number
    ) => {
      ctx.clearRect(0, 0, width, height);
      const t = (time ?? performance.now()) * 0.001;

      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (isLight) {
        bgGrad.addColorStop(0, '#f8fafc');
        bgGrad.addColorStop(1, '#e2e8f0');
      } else {
        bgGrad.addColorStop(0, '#090d16');
        bgGrad.addColorStop(1, '#0f172a');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Grid overlay
      ctx.strokeStyle = isLight ? 'rgba(148, 163, 184, 0.15)' : 'rgba(51, 65, 85, 0.25)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const { subTab, pathway, cascadeStep, antibodyAction, complementsActive, timeDay, phagocytosisStage, cellularStudioMode, perforinPoreCount } = params;

      // ---------------------------------------------------------
      // MODULE 2: PHAGOCYTOSIS & PERFORIN STUDIO
      // ---------------------------------------------------------
      if (subTab === 'phagocytosis_studio') {
        const stage = Math.min(5, Math.max(0, phagocytosisStage ?? 4));

        if (cellularStudioMode === 'macrophage_phagocytosis') {
          // Macrophage Phagocytosis & MHC-II Presentation
          const macCenterX = width < 768 ? width / 2 : width * 0.4;
          const macCenterY = height / 2 + 10;
          const baseR = 95;

          // Animated undulating pseudopodia contour
          ctx.save();
          ctx.beginPath();
          const vertexCount = 48;
          for (let i = 0; i <= vertexCount; i++) {
            const angle = (i / vertexCount) * Math.PI * 2;
            let rMod = baseR + Math.sin(angle * 4 + t * 2.5) * 12 + Math.cos(angle * 6 - t * 1.8) * 8;

            // Extra pseudopod extension reaching towards bacterium (angle around 0 rad / right side)
            if (stage === 0 || stage === 1) {
              const reach = Math.exp(-Math.pow(angle, 2) / 0.5) * (stage === 0 ? 35 : 45);
              rMod += reach;
            }

            const vx = macCenterX + Math.cos(angle) * rMod;
            const vy = macCenterY + Math.sin(angle) * rMod;
            if (i === 0) ctx.moveTo(vx, vy);
            else ctx.lineTo(vx, vy);
          }
          ctx.closePath();

          // Macrophage cytoplasm styling
          const macGrad = ctx.createRadialGradient(macCenterX, macCenterY, 20, macCenterX, macCenterY, baseR + 25);
          macGrad.addColorStop(0, isLight ? 'rgba(147, 197, 253, 0.4)' : 'rgba(30, 58, 138, 0.5)');
          macGrad.addColorStop(1, isLight ? 'rgba(59, 130, 246, 0.2)' : 'rgba(29, 78, 216, 0.25)');
          ctx.fillStyle = macGrad;
          ctx.fill();

          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 3;
          ctx.stroke();
          ctx.restore();

          // Macrophage Indented Kidney Nucleus
          ctx.fillStyle = isLight ? '#1d4ed8' : '#1e40af';
          ctx.beginPath();
          ctx.ellipse(macCenterX - 25, macCenterY + 15, 34, 24, -Math.PI / 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 10px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(isArabic ? 'نواة كلوية' : 'Nucleus', macCenterX - 25, macCenterY + 18);

          // Multiple Lysosomes in cytoplasm
          const lysosomePositions = [
            { x: macCenterX - 45, y: macCenterY - 35 },
            { x: macCenterX + 10, y: macCenterY - 50 },
            { x: macCenterX - 15, y: macCenterY + 55 },
            { x: macCenterX + 35, y: macCenterY + 40 },
          ];

          lysosomePositions.forEach((pos, idx) => {
            const orbitOffset = Math.sin(t * 3 + idx) * 3;
            drawGlowingParticle(ctx, pos.x, pos.y + orbitOffset, 8, '#f59e0b', 6);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 8px sans-serif';
            ctx.fillText('Lys', pos.x, pos.y + orbitOffset + 3);
          });

          // Stage 0 & 1: Extracellular or Ingested Bacterium
          if (stage === 0) {
            // Free bacterium outside
            const bacX = macCenterX + baseR + 55;
            const bacY = macCenterY;
            ctx.fillStyle = '#22c55e';
            ctx.strokeStyle = '#15803d';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(bacX - 22, bacY - 12, 44, 24, 10);
            ctx.fill();
            ctx.stroke();

            // Flagella
            ctx.strokeStyle = '#86efac';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(bacX + 22, bacY);
            ctx.quadraticCurveTo(bacX + 38, bacY - 10, bacX + 50, bacY);
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 10px sans-serif';
            ctx.fillText(isArabic ? 'ميكروب غازٍ' : 'Bacterium', bacX, bacY + 3);
          } else if (stage === 1) {
            // Engulfed into internal phagosome
            const phagX = macCenterX + 45;
            const phagY = macCenterY - 10;
            ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(phagX, phagY, 26, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#22c55e';
            ctx.beginPath();
            ctx.roundRect(phagX - 16, phagY - 8, 32, 16, 8);
            ctx.fill();
          } else if (stage === 2) {
            // Lysosome fusion & enzymatic digestion
            const phagX = macCenterX + 40;
            const phagY = macCenterY - 10;
            ctx.fillStyle = 'rgba(245, 158, 11, 0.25)';
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(phagX, phagY, 30, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Digested red peptide dots
            for (let p = 0; p < 7; p++) {
              const px = phagX + Math.sin(p * 1.3 + t * 4) * 14;
              const py = phagY + Math.cos(p * 1.7 + t * 4) * 14;
              drawGlowingParticle(ctx, px, py, 3.5, '#ef4444', 6);
            }

            ctx.fillStyle = '#f59e0b';
            ctx.font = 'bold 9px monospace';
            ctx.fillText('HYDROLYSIS', phagX, phagY + 4);
          } else if (stage >= 3) {
            // MHC-II loaded complexes on membrane surface
            const mhcCount = 3;
            for (let m = 0; m < mhcCount; m++) {
              const mAngle = -Math.PI / 4 + (m * Math.PI) / 4;
              const mx = macCenterX + Math.cos(mAngle) * baseR;
              const my = macCenterY + Math.sin(mAngle) * baseR;

              // Dual-prong MHC-II stalk
              ctx.strokeStyle = '#eab308';
              ctx.lineWidth = 3.5;
              ctx.beginPath();
              ctx.moveTo(mx, my);
              ctx.lineTo(mx + Math.cos(mAngle) * 18, my + Math.sin(mAngle) * 18);
              ctx.stroke();

              // Antigen peptide in cleft
              const tipX = mx + Math.cos(mAngle) * 22;
              const tipY = my + Math.sin(mAngle) * 22;
              drawGlowingParticle(ctx, tipX, tipY, 4, '#ef4444', 8);
            }

            // Stage 4 & 5: CD4+ Helper T-cell docked
            if (stage >= 4) {
              const thX = macCenterX + baseR + 85;
              const thY = macCenterY - 15;
              const thR = 55;

              ctx.fillStyle = isLight ? 'rgba(16, 185, 129, 0.3)' : 'rgba(5, 150, 105, 0.4)';
              ctx.strokeStyle = '#10b981';
              ctx.lineWidth = 3;
              ctx.beginPath();
              ctx.arc(thX, thY, thR, 0, Math.PI * 2);
              ctx.fill();
              ctx.stroke();

              // CD4 Coreceptor probe
              ctx.strokeStyle = '#059669';
              ctx.lineWidth = 4;
              ctx.beginPath();
              ctx.moveTo(thX - thR, thY);
              ctx.lineTo(macCenterX + baseR + 25, macCenterY);
              ctx.stroke();

              // Signal transduction burst at synapse
              drawGlowingParticle(ctx, macCenterX + baseR + 25, macCenterY, 9, '#34d399', 12);

              ctx.fillStyle = '#ffffff';
              ctx.font = 'bold 11px sans-serif';
              ctx.fillText(isArabic ? 'تائية مساعدة (TH)' : 'Helper T (TH)', thX, thY + 4);

              // Stage 5: Interleukin clouds released
              if (stage === 5) {
                for (let il = 0; il < 6; il++) {
                  const ilProg = (t * 1.5 + il * 0.16) % 1;
                  const ilx = thX + 25 + ilProg * 80;
                  const ily = thY - 30 + Math.sin(il * 2 + t * 4) * 16;
                  drawGlowingParticle(ctx, ilx, ily, 3.5, '#38bdf8', 6);
                }

                ctx.fillStyle = '#38bdf8';
                ctx.font = 'bold 10px monospace';
                ctx.fillText('INTERLEUKINS (IL-1, IL-2)', thX + 65, thY - 45);
              }
            }
          }

          // Educational Banner at top of canvas
          ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
          ctx.font = 'bold 13px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(
            isArabic ? currentPhagStage.nameAr : currentPhagStage.nameEn,
            width / 2,
            30
          );
        } else {
          // Cellular Studio Mode B: TC Perforin Pores & Lymphotoxin Apoptosis
          const tcX = width < 768 ? width * 0.28 : width * 0.32;
          const tcY = height / 2;
          const tcR = 65;

          const targetX = width < 768 ? width * 0.72 : width * 0.68;
          const targetY = height / 2;
          const targetR = 75;

          // 1. Cytotoxic T Cell (TC - CD8+)
          ctx.fillStyle = isLight ? 'rgba(239, 68, 68, 0.25)' : 'rgba(185, 28, 28, 0.4)';
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.arc(tcX, tcY, tcR, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 12px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(isArabic ? 'خلية تائية سامة (TC)' : 'Cytotoxic T (TC - CD8+)', tcX, tcY - 8);

          // CD8 Receptor probe
          ctx.fillStyle = '#b91c1c';
          ctx.fillRect(tcX + tcR - 4, tcY - 8, 14, 16);

          // 2. Target Infected / Cancerous Cell
          ctx.save();
          ctx.fillStyle = isLight ? 'rgba(100, 116, 139, 0.3)' : 'rgba(51, 65, 85, 0.5)';
          ctx.strokeStyle = '#f43f5e';
          ctx.lineWidth = 3;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.arc(targetX, targetY, targetR, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.restore();

          // Target Cell Nucleus with Apoptotic Condensation
          ctx.fillStyle = '#475569';
          ctx.beginPath();
          ctx.arc(targetX, targetY, targetR * 0.4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#f87171';
          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(
            isArabic ? 'خلية مصابة (موت مبرمج)' : 'Infected Cell (Apoptosis)',
            targetX,
            targetY + 4
          );

          // Perforin Pores along target cell contact membrane
          const poreCount = Math.min(10, Math.max(1, perforinPoreCount ?? 6));
          const synapseAngleStart = Math.PI - 0.65;
          const synapseAngleEnd = Math.PI + 0.65;

          for (let p = 0; p < poreCount; p++) {
            const frac = p / Math.max(1, poreCount - 1);
            const pAngle = synapseAngleStart + frac * (synapseAngleEnd - synapseAngleStart);
            const px = targetX + Math.cos(pAngle) * targetR;
            const py = targetY + Math.sin(pAngle) * targetR;

            // Perforin pore channel (open ring)
            ctx.fillStyle = '#e11d48';
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fill();

            // Rushing water influx
            const waveX = px + Math.cos(pAngle + Math.PI) * 12;
            const waveY = py + Math.sin(pAngle + Math.PI) * 12;
            drawGlowingParticle(ctx, waveX, waveY, 2.5, '#38bdf8', 4);
          }

          // Perforin Stream from TC to Target
          drawVolumetricBeam(ctx, tcX + tcR + 5, tcY, targetX - targetR - 5, tcY, '#ef4444', 2, 8, t * 3);

          // Lymphotoxin particles diffusing into nucleus
          for (let ly = 0; ly < 4; ly++) {
            const lyFrac = (t * 1.2 + ly * 0.25) % 1;
            const lx = targetX - targetR * 0.7 + lyFrac * (targetR * 0.7);
            const lyPos = targetY + Math.sin(ly * 2 + t * 4) * 8;
            drawGlowingParticle(ctx, lx, lyPos, 3, '#a855f7', 6);
          }

          // Titles and badges
          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 13px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(
            isArabic
              ? `🗡️ إفراز البيرفورين (${poreCount} ثقوب) وتدفق الماء + السموم الليمفاوية المحفزة لتفتيت النواة`
              : `🗡️ Perforin (${poreCount} Pores) Osmotic Influx + Lymphotoxin Apoptotic Gene Trigger`,
            width / 2,
            30
          );
        }
      }

      // ---------------------------------------------------------
      // MODULE 1: DUAL CASCADES (HUMORAL & CELLULAR)
      // ---------------------------------------------------------
      else if (subTab === 'humoral_cellular') {
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.font = 'bold 15px sans-serif';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? pathway === 'humoral'
              ? 'المناعة الخلطية: البلعمة ← عرض MHC-II ← تنشيط TH ← الإنترلوكينات ← الخلايا البلازمية والأجسام المضادة'
              : 'المناعة الخلوية: البلعمة ← عرض MHC-II ← تنشيط TH ← السيتوكينات ← خلايا TC والبيرفورين والسموم الليمفاوية'
            : pathway === 'humoral'
            ? 'Humoral Cascade: Phagocytosis -> CD4+ TH -> Interleukins -> Plasma Cells & Abs'
            : 'Cellular Cascade: Phagocytosis -> CD4+ TH -> Cytokines -> CD8+ TC & Perforin / Apoptosis',
          centerX,
          32
        );

        // Actors
        const macX = width * 0.2;
        const macY = centerY;
        const macRadius = Math.min(width, height) * 0.11;

        // Macrophage body
        ctx.beginPath();
        ctx.fillStyle = isLight ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.35)';
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 3;
        ctx.arc(macX, macY, macRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = '#1d4ed8';
        ctx.arc(macX - 10, macY + 5, macRadius * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // MHC-II Presentation Complex
        ctx.fillStyle = '#eab308';
        ctx.fillRect(macX + macRadius - 6, macY - 14, 16, 28);
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(macX + macRadius + 14, macY, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = 'bold 12px sans-serif';
        ctx.fillStyle = isLight ? '#1e293b' : '#93c5fd';
        ctx.fillText(isArabic ? 'بلعمية كبيرة (Macrophage)' : 'Macrophage (MHC-II)', macX, macY + macRadius + 22);

        // Helper T Cell
        const thX = width * 0.5;
        const thY = centerY - 30;
        const thRadius = macRadius * 0.75;

        ctx.beginPath();
        ctx.fillStyle = isLight ? 'rgba(16, 185, 129, 0.2)' : 'rgba(5, 150, 105, 0.35)';
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 3;
        ctx.arc(thX, thY, thRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#059669';
        ctx.fillRect(thX - thRadius - 12, thY - 6, 14, 12);

        ctx.font = 'bold 12px sans-serif';
        ctx.fillStyle = isLight ? '#065f46' : '#6ee7b7';
        ctx.fillText(isArabic ? 'خلية تائية مساعدة (TH - CD4)' : 'Helper T (TH - CD4+)', thX, thY + thRadius + 20);

        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(macX + macRadius + 20, macY);
        ctx.lineTo(thX - thRadius - 12, thY);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.font = '10px sans-serif';
        ctx.fillStyle = '#eab308';
        ctx.fillText(isArabic ? 'ارتباط الأنتيجين بـ CD4' : 'MHC-II / CD4 Docking', (macX + thX) / 2 + 10, centerY - 25);

        if (pathway === 'humoral') {
          // Humoral
          ctx.fillStyle = '#38bdf8';
          for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(thX + 35 + i * 18, thY + i * 8, 4, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.font = '11px sans-serif';
          ctx.fillText(isArabic ? 'إنترلوكينات (Interleukins)' : 'Interleukins', thX + 75, thY - 14);

          const plX = width * 0.8;
          const plY = centerY - 50;
          const plRadius = thRadius * 1.1;

          ctx.beginPath();
          ctx.fillStyle = isLight ? 'rgba(168, 85, 247, 0.2)' : 'rgba(147, 51, 234, 0.35)';
          ctx.strokeStyle = '#a855f7';
          ctx.lineWidth = 3;
          ctx.arc(plX, plY, plRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = isLight ? '#581c87' : '#d8b4fe';
          ctx.fillText(isArabic ? 'خلية بائية بلازمية (Plasma B)' : 'Plasma B Cell', plX, plY + plRadius + 18);

          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2.5;
          for (let j = 0; j < 3; j++) {
            const abX = plX + plRadius + 15 + j * 24;
            const abY = plY - 20 + j * 16;
            if (abX < width - 20) {
              ctx.beginPath();
              ctx.moveTo(abX, abY + 12);
              ctx.lineTo(abX, abY);
              ctx.lineTo(abX - 7, abY - 8);
              ctx.moveTo(abX, abY);
              ctx.lineTo(abX + 7, abY - 8);
              ctx.stroke();
            }
          }

          const memX = width * 0.8;
          const memY = centerY + 85;
          const memRadius = thRadius * 0.7;

          ctx.beginPath();
          ctx.fillStyle = isLight ? 'rgba(236, 72, 153, 0.2)' : 'rgba(219, 39, 119, 0.35)';
          ctx.strokeStyle = '#ec4899';
          ctx.lineWidth = 2;
          ctx.arc(memX, memY, memRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = isLight ? '#831843' : '#f472b6';
          ctx.fillText(isArabic ? 'خلية بائية ذاكرة (20-30 سنة)' : 'Memory B (20-30 yr)', memX, memY + memRadius + 16);
        } else {
          // Cellular
          ctx.fillStyle = '#f59e0b';
          for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(thX + 35 + i * 18, thY + i * 8, 4, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.font = '11px sans-serif';
          ctx.fillText(isArabic ? 'سيتوكينات (Cytokines)' : 'Cytokines', thX + 75, thY - 14);

          const tcX = width * 0.78;
          const tcY = centerY - 45;
          const tcRadius = thRadius;

          ctx.beginPath();
          ctx.fillStyle = isLight ? 'rgba(239, 68, 68, 0.2)' : 'rgba(220, 38, 38, 0.35)';
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 3;
          ctx.arc(tcX, tcY, tcRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = isLight ? '#7f1d1d' : '#fca5a5';
          ctx.fillText(isArabic ? 'خلية تائية سامة (TC - CD8)' : 'Cytotoxic T (TC - CD8)', tcX, tcY + tcRadius + 18);

          ctx.fillStyle = '#ef4444';
          ctx.font = '10px sans-serif';
          ctx.fillText(isArabic ? 'بيرفورين (ثقوب) + سموم ليمفاوية' : 'Perforin (Pores) + Lymphotoxins', tcX, tcY - tcRadius - 10);

          const tgtX = width * 0.88;
          const tgtY = centerY + 70;
          const tgtRadius = tcRadius * 0.9;

          ctx.beginPath();
          ctx.fillStyle = isLight ? 'rgba(100, 116, 139, 0.25)' : 'rgba(71, 85, 105, 0.4)';
          ctx.strokeStyle = '#e11d48';
          ctx.lineWidth = 2;
          ctx.setLineDash([3, 3]);
          ctx.arc(tgtX, tgtY, tgtRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#e11d48';
          ctx.fillText(isArabic ? 'خلية مصابة/سرطانية (موت مبرمج)' : 'Infected Cell (Apoptosis)', tgtX, tgtY + tgtRadius + 16);
        }

        if (cascadeStep >= 5) {
          ctx.fillStyle = isLight ? 'rgba(147, 51, 234, 0.1)' : 'rgba(147, 51, 234, 0.25)';
          ctx.fillRect(width * 0.1, height - 60, width * 0.8, 42);
          ctx.strokeStyle = '#a855f7';
          ctx.strokeRect(width * 0.1, height - 60, width * 0.8, 42);

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = '#a855f7';
          ctx.textAlign = 'center';
          ctx.fillText(
            isArabic
              ? '🛡️ كبح الاستجابة المناعية: الخلايا التائية الكابحة (TS) تفرز الليمفوكينات لتثبيط الخلايا البلازمية والتائية بعد القضاء على الميكروب'
              : '🛡️ Immune Homeostasis: Suppressor T Cells (TS - CD8+) secrete Lymphokines, restoring baseline after clearance',
            centerX,
            height - 35
          );
        }
      }

      // ---------------------------------------------------------
      // MODULE 3: ANTIBODY ACTIONS
      // ---------------------------------------------------------
      else if (subTab === 'antibody_actions') {
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.font = 'bold 15px sans-serif';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.textAlign = 'center';

        const actionTitlesAr: Record<AntibodyActionType, string> = {
          neutralization: 'آلية التعادل: تحييد الفيروسات ومنع اختراقها لغشاء الخلية المضيفة',
          agglutination: 'آلية التلازم أو الإلصاق: جزيء IgM خماسي يجمع ميكروبات متعددة في كتلة واحدة',
          precipitation: 'آلية الترسيب: الأجسام المضادة تحول الأنتيجينات الذائبة إلى مركب غير ذائب للبلعمة',
          lysis: 'آلية التحلل: ارتباط الجسم المضاد ينشط المتممات لثقب جدار البكتيريا وتحليله',
          antitoxin: 'آلية إبطال مفعول السموم: الاتحاد مع السموم وتنشيط المتممات لتكسيرها دون ضرر للأنسجة',
        };

        const actionTitlesEn: Record<AntibodyActionType, string> = {
          neutralization: 'Neutralization: Antibodies coat viral spikes, preventing host cell receptor binding',
          agglutination: 'Agglutination: Pentameric IgM (10 sites) aggregates bacteria into clusters for phagocytosis',
          precipitation: 'Precipitation: Bivalent antibodies form insoluble lattice with soluble antigen toxins',
          lysis: 'Complement-Mediated Lysis: Antibody recruits complement cascade to bore Membrane Attack Complexes (MAC)',
          antitoxin: 'Antitoxin Inactivation: Antibodies bind exotoxins, activating complements to hydrolyze toxic motifs',
        };

        ctx.fillText(isArabic ? actionTitlesAr[antibodyAction] : actionTitlesEn[antibodyAction], centerX, 35);

        if (antibodyAction === 'neutralization') {
          const vX = centerX - 60;
          const vY = centerY;
          const vRadius = 45;

          ctx.beginPath();
          ctx.fillStyle = '#ef4444';
          ctx.arc(vX, vY, vRadius, 0, Math.PI * 2);
          ctx.fill();

          for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
            const sx = vX + Math.cos(a) * (vRadius + 14);
            const sy = vY + Math.sin(a) * (vRadius + 14);
            ctx.strokeStyle = '#f87171';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(vX + Math.cos(a) * vRadius, vY + Math.sin(a) * vRadius);
            ctx.lineTo(sx, sy);
            ctx.stroke();

            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(sx + Math.cos(a) * 14, sy + Math.sin(a) * 14);
            ctx.lineTo(sx, sy);
            ctx.stroke();
          }

          const hX = centerX + 120;
          const hY = centerY;
          ctx.fillStyle = isLight ? 'rgba(16, 185, 129, 0.15)' : 'rgba(5, 150, 105, 0.25)';
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(hX, hY, 70, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = '#10b981';
          ctx.fillText(isArabic ? 'خلية العائل سليمة (محمية من الاختراق)' : 'Protected Host Cell (Entry Blocked)', hX, hY);
        } else if (antibodyAction === 'agglutination') {
          const mX = centerX;
          const mY = centerY;

          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 4;
          for (let i = 0; i < 5; i++) {
            const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
            const armEndX = mX + Math.cos(angle) * 75;
            const armEndY = mY + Math.sin(angle) * 75;

            ctx.beginPath();
            ctx.arc(mX, mY, 14, 0, Math.PI * 2);
            ctx.fillStyle = '#0284c7';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(mX, mY);
            ctx.lineTo(armEndX, armEndY);
            ctx.stroke();

            ctx.fillStyle = '#84cc16';
            ctx.beginPath();
            ctx.roundRect(armEndX - 16, armEndY - 10, 32, 20, 8);
            ctx.fill();
            ctx.strokeStyle = '#65a30d';
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = '#0284c7';
          ctx.fillText(isArabic ? 'جسم مضاد خماسي (IgM - 10 مواقع ارتباط)' : 'Pentameric IgM (10 Antigen Binding Sites)', mX, mY + 115);
        } else if (antibodyAction === 'precipitation') {
          const px = centerX;
          const py = centerY;

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = isLight ? '#475569' : '#cbd5e1';
          ctx.fillText(isArabic ? 'تكوين شبكة بوليمرية غير ذائبة (Precipitate Lattice)' : 'Insoluble Cross-Linked Antigen-Antibody Lattice', px, py - 85);

          for (let r = -2; r <= 2; r++) {
            for (let c = -3; c <= 3; c++) {
              const dx = px + c * 40;
              const dy = py + r * 30;

              ctx.strokeStyle = '#38bdf8';
              ctx.lineWidth = 2;
              if (c < 3) {
                ctx.beginPath();
                ctx.moveTo(dx, dy);
                ctx.lineTo(dx + 40, dy);
                ctx.stroke();
              }
              if (r < 2) {
                ctx.beginPath();
                ctx.moveTo(dx, dy);
                ctx.lineTo(dx, dy + 30);
                ctx.stroke();
              }

              ctx.fillStyle = '#f59e0b';
              ctx.beginPath();
              ctx.arc(dx, dy, 5, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          ctx.fillStyle = '#3b82f6';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(isArabic ? '⬇ التهام فوري بواسطة الخلايا البلعمية الكبيرة' : '⬇ Rapid Engulfment by Phagocytic Macrophages', px, py + 105);
        } else if (antibodyAction === 'lysis') {
          const bX = centerX;
          const bY = centerY;
          const bWidth = 140;
          const bHeight = 70;

          ctx.fillStyle = complementsActive ? 'rgba(239, 68, 68, 0.4)' : 'rgba(34, 197, 94, 0.4)';
          ctx.strokeStyle = complementsActive ? '#ef4444' : '#22c55e';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.roundRect(bX - bWidth / 2, bY - bHeight / 2, bWidth, bHeight, 25);
          ctx.fill();
          ctx.stroke();

          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(bX - 40, bY - bHeight / 2 - 20);
          ctx.lineTo(bX - 40, bY - bHeight / 2);
          ctx.moveTo(bX + 40, bY - bHeight / 2 - 20);
          ctx.lineTo(bX + 40, bY - bHeight / 2);
          ctx.stroke();

          if (complementsActive) {
            ctx.fillStyle = '#e11d48';
            ctx.beginPath();
            ctx.arc(bX - 25, bY, 10, 0, Math.PI * 2);
            ctx.arc(bX + 25, bY, 10, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText('H2O Inflow (انفجار غشائي)', bX, bY + 5);

            ctx.font = 'bold 12px sans-serif';
            ctx.fillStyle = '#ef4444';
            ctx.fillText(isArabic ? 'ثقوب معقد مهاجمة الغشاء (MAC) وانفجار البكتيريا' : 'Membrane Attack Complexes (MAC) Lysis Active', bX, bY + 65);
          } else {
            ctx.font = 'bold 12px sans-serif';
            ctx.fillStyle = '#eab308';
            ctx.fillText(isArabic ? '⚠️ المتممات معطلة: تفشل الأجسام المضادة في إحداث التحلل' : '⚠️ Complements Inactive: Lysis Fails completely', bX, bY + 65);
          }
        } else {
          // Antitoxin
          const tX = centerX;
          const tY = centerY;

          ctx.fillStyle = '#dc2626';
          ctx.beginPath();
          ctx.arc(tX, tY, 25, 0, Math.PI * 2);
          ctx.fill();
          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.fillText(isArabic ? 'سم' : 'Toxin', tX, tY + 4);

          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 3;
          for (let k = 0; k < 4; k++) {
            const rot = (k * Math.PI) / 2;
            const ax = tX + Math.cos(rot) * 45;
            const ay = tY + Math.sin(rot) * 45;
            ctx.beginPath();
            ctx.moveTo(ax + Math.cos(rot) * 15, ay + Math.sin(rot) * 15);
            ctx.lineTo(ax, ay);
            ctx.stroke();
          }

          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = complementsActive ? '#22c55e' : '#eab308';
          ctx.fillText(
            isArabic
              ? complementsActive
                ? 'تفكيك جزيء السم بواسطة المتممات بعد ارتباط الجسم المضاد المضاد للسموم'
                : 'ارتباط الجسم المضاد بالسم دون تفكيك (يلزم تنشيط المتممات)'
              : complementsActive
              ? 'Toxin Hydrolyzed by Complements via Antitoxin Antibody complex'
              : 'Antibody binds toxin, but lysis requires active complement proteins',
            tX,
            tY + 80
          );
        }
      }

      // ---------------------------------------------------------
      // MODULE 4: PRIMARY VS SECONDARY KINETICS
      // ---------------------------------------------------------
      else if (subTab === 'kinetics_memory') {
        const padding = 60;
        const plotW = width - padding * 2;
        const plotH = height - padding * 2 - 20;

        ctx.font = 'bold 15px sans-serif';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? 'منحنى الاستجابة المناعية: الاستجابة الأولية (بطيئة) والاستجابة الثانوية (فورية وهائلة)'
            : 'Immunological Memory Kinetics: Primary (Slow/Mild) vs Secondary (Rapid/Massive)',
          width / 2,
          30
        );

        ctx.strokeStyle = isLight ? '#64748b' : '#94a3b8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding + 20);
        ctx.lineTo(padding, padding + 20 + plotH);
        ctx.lineTo(padding + plotW, padding + 20 + plotH);
        ctx.stroke();

        ctx.font = '10px sans-serif';
        ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
        for (let d = 0; d <= 30; d += 5) {
          const gx = padding + (d / 30) * plotW;
          ctx.fillText(`Day ${d}`, gx, padding + 35 + plotH);
        }

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let d = 0; d <= 30; d += 0.5) {
          const gx = padding + (d / 30) * plotW;
          let val = 0;
          if (d >= 4 && d <= 15) {
            val = Math.sin(((d - 4) / 11) * Math.PI) * (plotH * 0.25);
          } else if (d > 15 && d <= 21) {
            val = (plotH * 0.05) * Math.exp(-(d - 15) / 3);
          }
          if (d >= 21) {
            val = Math.sin(((d - 21) / 9) * Math.PI) * (plotH * 0.85);
          }
          const gy = padding + 20 + plotH - val;
          if (d === 0) ctx.moveTo(gx, gy);
          else ctx.lineTo(gx, gy);
        }
        ctx.stroke();

        const curX = padding + (timeDay / 30) * plotW;
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(curX, padding + 20);
        ctx.lineTo(curX, padding + 20 + plotH);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(`Day ${timeDay}`, curX, padding + 15);

        ctx.fillStyle = '#ef4444';
        ctx.fillText(isArabic ? '💉 حقن أولي (يوم ٠)' : '💉 1st Exposure (Day 0)', padding + 40, padding + 40);
        ctx.fillText(isArabic ? '💉 حقن ثانوي (يوم ٢١)' : '💉 2nd Exposure (Day 21)', padding + (21 / 30) * plotW, padding + 40);
      }

      // ---------------------------------------------------------
      // MODULE 5: ANTIBODY ANATOMY (IgG)
      // ---------------------------------------------------------
      else {
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.font = 'bold 15px sans-serif';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? 'التركيب الجزيئي للجسم المضاد (IgG): سلسلتان ثقيلتان وسلسلتان خفيفتان و٤ روابط كبريتيدية'
            : 'IgG Quaternary Architecture: 2 Heavy Chains, 2 Light Chains & 4 Disulfide Bonds',
          centerX,
          32
        );

        const stemX = centerX;
        const stemTopY = centerY - 10;
        const stemBottomY = centerY + 100;
        const leftArmX = centerX - 90;
        const rightArmX = centerX + 90;
        const armTopY = centerY - 90;

        // Heavy Chains
        ctx.strokeStyle = '#1d4ed8';
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(stemX - 6, stemBottomY);
        ctx.lineTo(stemX - 6, stemTopY);
        ctx.lineTo(leftArmX + 15, armTopY + 15);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(stemX + 6, stemBottomY);
        ctx.lineTo(stemX + 6, stemTopY);
        ctx.lineTo(rightArmX - 15, armTopY + 15);
        ctx.stroke();

        // Light Chains
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 8;

        ctx.beginPath();
        ctx.moveTo(stemX - 18, stemTopY);
        ctx.lineTo(leftArmX, armTopY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(stemX + 18, stemTopY);
        ctx.lineTo(rightArmX, armTopY);
        ctx.stroke();

        // 4 Disulfide Bridges
        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(stemX - 6, stemTopY + 15);
        ctx.lineTo(stemX + 6, stemTopY + 15);
        ctx.moveTo(stemX - 6, stemTopY + 28);
        ctx.lineTo(stemX + 6, stemTopY + 28);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(stemX - 12, stemTopY - 10);
        ctx.lineTo(stemX - 22, stemTopY - 5);
        ctx.moveTo(stemX + 12, stemTopY - 10);
        ctx.lineTo(stemX + 22, stemTopY - 5);
        ctx.stroke();

        // Antigen binding tips
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(leftArmX + 7, armTopY + 7, 10, 0, Math.PI * 2);
        ctx.arc(rightArmX - 7, armTopY + 7, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = '#ef4444';
        ctx.fillText(isArabic ? 'موقع الارتباط ١' : 'Antigen Site 1', leftArmX - 20, armTopY - 10);
        ctx.fillText(isArabic ? 'موقع الارتباط ٢' : 'Antigen Site 2', rightArmX + 20, armTopY - 10);

        const partNames: Record<AntibodyPartId, string> = {
          variable: isArabic ? '⭐ النطاق المتغير (V_H / V_L)' : '⭐ Variable Domain (V_H / V_L)',
          constant: isArabic ? '⭐ النطاق الثابت (C_H / C_L - Fc)' : '⭐ Constant Domain (C_H / C_L - Fc)',
          disulfide: isArabic ? '⭐ الروابط الكبريتيدية الثنائية (S-S)' : '⭐ 4 Interchain Disulfide Bridges',
          hinge: isArabic ? '⭐ منطقة المفصلة المرنة (Hinge)' : '⭐ Flexible Hinge Region',
        };

        ctx.fillStyle = '#eab308';
        ctx.font = 'bold 13px sans-serif';
        ctx.fillText(partNames[params.selectedPartId], centerX, stemBottomY + 30);
      }
    },
    [params, isLight, isArabic]
  );

  return (
    <VirtualLabShell
      definition={IMMUNITY_LAB_DEF}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      oscilloscopeCh1={oscilloscopeCh1}
      oscilloscopeCh2={oscilloscopeCh2}
      currentXValue={params.subTab === 'phagocytosis_studio' ? params.phagocytosisStage : params.timeDay}
      currentYValue={simState.antibodyTiter}
      onResetSimulation={resetParams}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* Main SubTab Selector */}
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-400 block">
              {isArabic ? 'وحدة الاستكشاف المناعي:' : 'Immunology Module:'}
            </label>
            <div className="relative">
              <select
                aria-label={isArabic ? 'وحدة الاستكشاف المناعي' : 'Immunology Module'}
                value={params.subTab}
                onChange={(e) => updateParam('subTab', e.target.value as ImmunitySubTab)}
                className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="humoral_cellular">
                  {isArabic ? '١. شلالات المناعة الخلطية والخلوية' : '1. Humoral & Cellular Cascades'}
                </option>
                <option value="phagocytosis_studio">
                  {isArabic ? '٢. استوديو البلعمة وعرض MHC-II وثقوب البيرفورين' : '2. Phagocytosis, MHC-II & Perforin Studio'}
                </option>
                <option value="antibody_actions">
                  {isArabic ? '٣. طرق عمل الأجسام المضادة الخمسة' : '3. 5 Antibody Action Mechanisms'}
                </option>
                <option value="kinetics_memory">
                  {isArabic ? '٤. منحنيات الاستجابة الأولية والثانوية' : '4. Primary vs Secondary Kinetics'}
                </option>
                <option value="antibody_anatomy">
                  {isArabic ? '٥. أطلس جزيء الأجسام المضادة (IgG)' : '5. High-Res IgG Molecular Atlas'}
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sub-Tab Specific Controls */}
          {params.subTab === 'phagocytosis_studio' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'نمط الاستوديو الخلوي:' : 'Cellular Studio Mode:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'نمط الاستوديو الخلوي' : 'Cellular Studio Mode'}
                    value={params.cellularStudioMode}
                    onChange={(e) => updateParam('cellularStudioMode', e.target.value as CellularStudioMode)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="macrophage_phagocytosis">
                      {isArabic ? 'بلعمة الميكروب وعرض بروتين MHC-II وتنشيط TH' : 'Macrophage Phagocytosis & MHC-II Presentation'}
                    </option>
                    <option value="tc_perforin_lysis">
                      {isArabic ? 'الخلايا التائية السامة (CD8+) وثقوب البيرفورين والموت المبرمج' : 'Cytotoxic T-Cell (CD8+) Perforin & Apoptosis'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {params.cellularStudioMode === 'macrophage_phagocytosis' && (
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-slate-400">{isArabic ? 'مرحلة البلعمة:' : 'Phagocytosis Stage:'}</span>
                    <span className="font-mono text-cyan-400">
                      {params.phagocytosisStage + 1} / {PHAGOCYTOSIS_STAGES.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <button
                      type="button"
                      disabled={params.phagocytosisStage === 0}
                      onClick={() => updateParam('phagocytosisStage', Math.max(0, params.phagocytosisStage - 1))}
                      className="p-2 rounded-xl text-xs font-bold border border-slate-700 bg-slate-900 text-slate-300 disabled:opacity-30 cursor-pointer hover:bg-slate-800"
                    >
                      {isArabic ? 'السابق ➔' : 'Previous'}
                    </button>
                    <button
                      type="button"
                      disabled={params.phagocytosisStage >= 5}
                      onClick={() => updateParam('phagocytosisStage', Math.min(5, params.phagocytosisStage + 1))}
                      className="p-2 rounded-xl text-xs font-bold bg-blue-600 text-white disabled:opacity-30 cursor-pointer hover:bg-blue-500"
                    >
                      {isArabic ? '➔ التالي' : 'Next'}
                    </button>
                  </div>
                  <input
                    aria-label={isArabic ? 'مرحلة البلعمة' : 'Phagocytosis Stage'}
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={params.phagocytosisStage}
                    onChange={(e) => updateParam('phagocytosisStage', parseInt(e.target.value, 10))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>
              )}

              {params.cellularStudioMode === 'tc_perforin_lysis' && (
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-slate-400">{isArabic ? 'عدد ثقوب البيرفورين الغشائية:' : 'Perforin Transmembrane Pores:'}</span>
                    <span className="font-mono text-rose-400">{params.perforinPoreCount} pores</span>
                  </div>
                  <input
                    aria-label={isArabic ? 'عدد ثقوب البيرفورين' : 'Perforin Pores'}
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={params.perforinPoreCount}
                    onChange={(e) => updateParam('perforinPoreCount', parseInt(e.target.value, 10))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                </div>
              )}
            </div>
          )}

          {params.subTab === 'humoral_cellular' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'المسار المناعي المكتسب:' : 'Acquired Immune Pathway:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'المسار المناعي' : 'Immune Pathway'}
                    value={params.pathway}
                    onChange={(e) => updateParam('pathway', e.target.value as ImmunePathway)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="humoral">
                      {isArabic ? 'المناعة الخلطية (بالأجسام المضادة والخلايا البلازمية)' : 'Humoral Immunity (B Cells & Antibodies)'}
                    </option>
                    <option value="cellular">
                      {isArabic ? 'المناعة الخلوية (بالخلايا التائية TC والبيرفورين)' : 'Cell-Mediated Immunity (TC & Cytotoxins)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-400">{isArabic ? 'مرحلة تقدم الشلال:' : 'Cascade Step:'}</span>
                  <span className="font-mono text-blue-400">
                    {params.cascadeStep === 0 && (isArabic ? 'البلعمة' : 'Phagocytosis')}
                    {params.cascadeStep === 1 && (isArabic ? 'عرض MHC-II' : 'MHC Presentation')}
                    {params.cascadeStep === 2 && (isArabic ? 'تنشيط TH' : 'TH Activation')}
                    {params.cascadeStep === 3 && (isArabic ? 'الإشارات الكيميائية' : 'Cytokine Signals')}
                    {params.cascadeStep === 4 && (isArabic ? 'الهجوم المناعي' : 'Effector Attack')}
                    {params.cascadeStep === 5 && (isArabic ? 'كبح TS والتهدئة' : 'TS Suppression')}
                  </span>
                </div>
                <input
                  aria-label={isArabic ? 'مرحلة الشلال' : 'Cascade Step'}
                  type="range"
                  min="0"
                  max="5"
                  step="1"
                  value={params.cascadeStep}
                  onChange={(e) => updateParam('cascadeStep', parseInt(e.target.value, 10))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>
            </div>
          )}

          {params.subTab === 'antibody_actions' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'آلية عمل الجسم المضاد:' : 'Antibody Action Mechanism:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'آلية عمل الجسم المضاد' : 'Antibody Mechanism'}
                    value={params.antibodyAction}
                    onChange={(e) => updateParam('antibodyAction', e.target.value as AntibodyActionType)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="neutralization">
                      {isArabic ? '١. التعادل (Neutralization) - تحييد الفيروسات' : '1. Neutralization - Blocking Viruses'}
                    </option>
                    <option value="agglutination">
                      {isArabic ? '٢. التلازم أو الإلصاق (Agglutination) - IgM' : '2. Agglutination - Pentameric IgM'}
                    </option>
                    <option value="precipitation">
                      {isArabic ? '٣. الترسيب (Precipitation) - أنتيجينات ذائبة' : '3. Precipitation - Soluble Toxins'}
                    </option>
                    <option value="lysis">
                      {isArabic ? '٤. التحلل (Lysis) - تثبيت المتممات' : '4. Lysis via Complements (MAC)'}
                    </option>
                    <option value="antitoxin">
                      {isArabic ? '٥. إبطال مفعول السموم (Antitoxins)' : '5. Antitoxin Inactivation & Complements'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs font-bold text-slate-300">
                  {isArabic ? 'تفعيل نظام المتممات بالدم:' : 'Active Serum Complements:'}
                </span>
                <input
                  aria-label={isArabic ? 'تفعيل المتممات' : 'Complements Toggle'}
                  type="checkbox"
                  checked={params.complementsActive}
                  onChange={(e) => updateParam('complementsActive', e.target.checked)}
                  className="w-4 h-4 accent-blue-500 rounded cursor-pointer"
                />
              </div>
            </div>
          )}

          {params.subTab === 'kinetics_memory' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'نمط الحقن والاستجابة المناعية:' : 'Inoculation Profile:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'نمط الحقن' : 'Inoculation Profile'}
                    value={params.kineticsCondition}
                    onChange={(e) => updateParam('kineticsCondition', e.target.value as KineticsCondition)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="standard_dual">
                      {isArabic ? 'حقن أولي (يوم ٠) + منشط (يوم ٢١)' : 'Standard: Primary (D0) + Secondary (D21)'}
                    </option>
                    <option value="primary_only">
                      {isArabic ? 'إصابة أولية فقط (يوم ٠ فقط)' : 'Primary Infection Only (Single Dose)'}
                    </option>
                    <option value="vaccine_booster">
                      {isArabic ? 'عائل ملقح مسبقاً (استجابة ذاكرة فورية)' : 'Pre-Vaccinated Host (Memory Surge)'}
                    </option>
                    <option value="immunodeficiency">
                      {isArabic ? 'نقص مناعي حاد (هبوط خلايا TH / إيدز)' : 'Severe Immunodeficiency (HIV TH Collapse)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-400">{isArabic ? 'تتبع مسار الأيام:' : 'Time Tracker:'}</span>
                  <span className="font-mono text-amber-400">
                    {params.timeDay} {isArabic ? 'يوم' : 'days'}
                  </span>
                </div>
                <input
                  aria-label={isArabic ? 'تتبع الأيام' : 'Day Tracker'}
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  value={params.timeDay}
                  onChange={(e) => updateParam('timeDay', parseInt(e.target.value, 10))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-400">{isArabic ? 'جرعة الأنتيجين المحقونة:' : 'Pathogen Dose:'}</span>
                  <span className="font-mono text-rose-400">{params.pathogenDose} AU</span>
                </div>
                <input
                  aria-label={isArabic ? 'جرعة الأنتيجين' : 'Pathogen Dose'}
                  type="range"
                  min="10"
                  max="100"
                  step="10"
                  value={params.pathogenDose}
                  onChange={(e) => updateParam('pathogenDose', parseInt(e.target.value, 10))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>
            </div>
          )}

          {params.subTab === 'antibody_anatomy' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'النطاق التركيبي المستكشف:' : 'Structural Domain:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'النطاق التركيبي' : 'Structural Domain'}
                    value={params.selectedPartId}
                    onChange={(e) => updateParam('selectedPartId', e.target.value as AntibodyPartId)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    {ANTIBODY_PARTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {isArabic ? p.nameAr : p.nameEn}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                <p className="text-slate-300 leading-relaxed">{isArabic ? currentPart.descAr : currentPart.descEn}</p>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 p-2 rounded-lg border border-emerald-800/40">
                  {isArabic ? currentPart.formulaAr : currentPart.formulaEn}
                </div>
                <div className="text-[11px] text-amber-300 bg-amber-950/40 p-2 rounded-lg border border-amber-800/40">
                  <strong>{isArabic ? 'نصيحة الامتحان: ' : 'Exam Tip: '}</strong>
                  {isArabic ? currentPart.examTipAr : currentPart.examTipEn}
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800">
                <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    {isArabic ? 'مجهر جزيئي فائق الدقة' : '3D High-Res Molecular Render'}
                  </span>
                  <span className="font-mono">802 KB</span>
                </div>
                <img
                  src={antibodyImg}
                  alt="IgG Antibody 3D Molecular Architecture"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Dynamic Canvas Simulation Viewport */}
        <div
          className={`relative rounded-2xl overflow-hidden border shadow-lg ${
            isLight ? 'border-slate-200 bg-slate-50' : 'border-slate-700/60 bg-slate-950'
          }`}
        >
          <CanvasSimulationViewport
            id="immunity-workbench-viewport"
            lang={lang ?? 'ar'}
            theme={theme}
            aspectRatio="aspect-[16/10]"
            minHeight={420}
            animated={true}
            onRender={renderSimulation}
          >
            {/* Real-time Status Overlay Badge */}
            <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono font-bold text-blue-400 flex items-center gap-2 pointer-events-none select-none">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>
                {params.subTab === 'phagocytosis_studio'
                  ? params.cellularStudioMode === 'macrophage_phagocytosis'
                    ? isArabic
                      ? `البلعمة: ${currentPhagStage.nameAr}`
                      : `Phagocytosis: ${currentPhagStage.nameEn}`
                    : isArabic
                    ? `الخلايا التائية السامة: ${params.perforinPoreCount} ثقوب بيرفورين`
                    : `Cytotoxic T: ${params.perforinPoreCount} Perforin Pores`
                  : params.subTab === 'humoral_cellular'
                  ? isArabic
                    ? params.pathway === 'humoral'
                      ? 'شلال المناعة الخلطية (الخلايا البائية)'
                      : 'شلال المناعة الخلوية (الخلايا التائية)'
                    : params.pathway === 'humoral'
                    ? 'Humoral B-Cell Cascade'
                    : 'Cellular T-Cell Cascade'
                  : params.subTab === 'antibody_actions'
                  ? isArabic
                    ? `آلية عمل: ${params.antibodyAction}`
                    : `Mechanism: ${params.antibodyAction}`
                  : params.subTab === 'kinetics_memory'
                  ? isArabic
                    ? `يوم ${params.timeDay}: عيار الأجسام المضادة = ${simState.antibodyTiter} AU`
                    : `Day ${params.timeDay}: Antibody Titer = ${simState.antibodyTiter} AU`
                  : isArabic
                  ? 'التركيب الجزيئي لـ IgG'
                  : 'IgG Molecular Structure'}
              </span>
            </div>
          </CanvasSimulationViewport>
        </div>

        {/* PHAGOCYTOSIS STUDIO EDUCATIONAL DEEP-DIVE CARD */}
        {params.subTab === 'phagocytosis_studio' && (
          <div
            className={`p-5 rounded-2xl border ${
              isLight ? 'bg-white border-slate-300 shadow-md' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-4">
              <h4 className="text-sm font-black text-cyan-400 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>
                  {params.cellularStudioMode === 'macrophage_phagocytosis'
                    ? isArabic
                      ? `آلية معالجة الأنتيجين وعرضه (المرحلة ${params.phagocytosisStage + 1} من ٦): ${currentPhagStage.nameAr}`
                      : `Antigen Processing & Presentation (Stage ${params.phagocytosisStage + 1} of 6): ${currentPhagStage.nameEn}`
                    : isArabic
                    ? 'آلية القضاء بالخلايا التائية السامة (CD8+): البيرفورين والسموم الليمفاوية'
                    : 'Cytotoxic T-Cell Killing Mechanism: Perforin Pores & Lymphotoxin Apoptosis'}
                </span>
              </h4>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {params.cellularStudioMode === 'macrophage_phagocytosis' ? 'MHC-II / CD4' : 'CD8 / Perforin'}
              </span>
            </div>

            {params.cellularStudioMode === 'macrophage_phagocytosis' ? (
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 block">
                      {isArabic ? 'الحدث الخلوي الفعلي:' : 'Cellular Event:'}
                    </span>
                    <div className="text-xs font-bold text-emerald-300">
                      {isArabic ? currentPhagStage.cellularEventAr : currentPhagStage.cellularEventEn}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 block">
                      {isArabic ? 'الجزيئات والإنزيمات المشاركة:' : 'Molecular Actors:'}
                    </span>
                    <div className="text-xs font-bold text-cyan-300">
                      {isArabic ? currentPhagStage.molecularActorsAr : currentPhagStage.molecularActorsEn}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 block">
                      {isArabic ? 'معدل التفكيك وعرض MHC:' : 'Hydrolysis & MHC Display:'}
                    </span>
                    <div className="text-xs font-mono font-black text-amber-300">
                      {isArabic
                        ? `التحلل: ${simState.phagosomeHydrolysisPct}٪ | كثافة MHC: ${simState.mhcPresentationDensity}٪`
                        : `Hydrolysis: ${simState.phagosomeHydrolysisPct}% | MHC Density: ${simState.mhcPresentationDensity}%`}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/40 text-xs text-slate-200 leading-relaxed">
                  <span className="font-bold text-blue-300 block mb-1">
                    {isArabic ? '💡 الشرح المنهجي للثانوية العامة المصرية:' : '💡 Ministry Curriculum Context:'}
                  </span>
                  {isArabic ? currentPhagStage.descAr : currentPhagStage.descEn}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 block">
                      {isArabic ? 'دور بروتين البيرفورين (صانع الثقوب):' : 'Perforin Function:'}
                    </span>
                    <div className="text-xs font-bold text-rose-300">
                      {isArabic
                        ? 'يثقب غشاء الخلية المصابة لتسهيل تدفق السوائل والموت المائي'
                        : 'Punctures target cell membrane, forming pore channels for osmotic lysis'}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 block">
                      {isArabic ? 'دور السموم الليمفاوية:' : 'Lymphotoxins Function:'}
                    </span>
                    <div className="text-xs font-bold text-purple-300">
                      {isArabic
                        ? 'تنشط جينات معينة في نواة الخلية المصابة فتفتت حمضها النووي وتميتها مبرمجاً'
                        : 'Activates specific latent endonuclease genes in target nucleus triggering apoptosis'}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 block">
                      {isArabic ? 'كفاءة القضاء الخلوي:' : 'Cytotoxic Efficacy:'}
                    </span>
                    <div className="text-xs font-mono font-black text-amber-300">
                      {isArabic
                        ? `كفاءة التحلل: ${simState.perforinPoreDensity}٪ | الموت المبرمج: ${simState.lymphotoxinApoptosisPct}٪`
                        : `Lysis: ${simState.perforinPoreDensity}% | Apoptosis: ${simState.lymphotoxinApoptosisPct}%`}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-slate-200 leading-relaxed">
                  <span className="font-bold text-rose-300 block mb-1">
                    {isArabic ? '💡 الفرق بين البيرفورين والسموم الليمفاوية في الامتحان الوزاري:' : '💡 Exam Distinction: Perforin vs Lymphotoxins:'}
                  </span>
                  {isArabic
                    ? 'بروتين البيرفورين يعمل على الغشاء البلازمي الخارجي للخلية المصابة ويثقبه، بينما السموم الليمفاوية تنفذ إلى داخل نواة الخلية المصابة لتنشط الجينات المميتة التي تفتت الحمض النووي (DNA).'
                    : 'Perforin acts strictly on the external plasma membrane creating transmembrane pores, whereas Lymphotoxins penetrate into the cell nucleus activating apoptotic genes that fragment DNA.'}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUMMARY CARD FOR ACTIVE MODULE */}
        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-slate-300 shadow-sm' : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'الخلايا البلازمية' : 'Plasma Cells'}
              </span>
              <span className="font-mono font-bold text-purple-400 text-sm">
                {simState.plasmaCellCount} /µL
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'خلايا الذاكرة' : 'Memory Cells'}
              </span>
              <span className="font-mono font-bold text-pink-400 text-sm">
                {simState.memoryCellCount} /µL
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'كثافة الإليزا (OD450)' : 'ELISA OD450'}
              </span>
              <span className="font-mono font-bold text-amber-400 text-sm">
                {simState.elisaOD450.toFixed(3)}
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'الحمل الميكروبي' : 'Pathogen Load'}
              </span>
              <span className="font-mono font-bold text-rose-400 text-sm">
                {simState.pathogenLoad} AU
              </span>
            </div>
          </div>
        </div>
      </div>
    </VirtualLabShell>
  );
};

export default ImmunityLab;
