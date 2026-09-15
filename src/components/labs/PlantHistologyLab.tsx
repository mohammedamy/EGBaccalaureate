import React, { useCallback, useMemo, useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
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
  Compass,
  Microscope,
  Sparkles,
} from 'lucide-react';
import plantImg from '../../assets/biology/plant_stem_histology.jpg';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type PlantSubTab = 'osmotic_physiology' | 'structural_support' | 'plant_movements' | 'stem_histology';
export type SolutionType = 'hypotonic' | 'isotonic' | 'hypertonic';
export type PlantTissueType = 'parenchyma' | 'collenchyma' | 'sclerenchyma' | 'epidermis';
export type MacromoleculeType = 'cellulose' | 'lignin' | 'cutin' | 'suberin';
export type MovementType = 'tendril' | 'contractile_roots' | 'mimosa_touch';

export interface PlantHistologyParams {
  subTab: PlantSubTab;
  solutionType: SolutionType;
  soilWaterPotential: number; // -2.5 to 0.0 MPa
  cellSapSolutePotential: number; // -1.8 to -0.6 MPa
  activeTissue: PlantTissueType;
  appliedForce: number; // 0 to 300 N
  highlightMolecule: MacromoleculeType;
  movementType: MovementType;
  tendrilSupportPresent: boolean;
  tendrilCoilingProgress: number; // 0 to 100%
  contractileRootDepth: number; // 0 to 15 cm
  touchStimulusActive: boolean;
  selectedHistologyPin: string;
}

export interface PlantHistologySimState {
  turgorPressure: number; // MPa
  solutePotential: number; // MPa
  netWaterPotential: number; // MPa
  cellVolumeRatio: number; // 0.80 to 1.25
  wallTensionPct: number; // 0 to 100%
  stomaApertureUm: number; // 0 to 12 um
  stemErectnessPct: number; // 0 to 100%
  tissueDeformationMm: number;
  tissueStressMpa: number;
  isFractured: boolean;
  rootSafetyScore: number; // 0 to 100%
  transpirationFlux: number; // g / m^2 / h
}

export interface HistologyLayerInfo {
  id: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  supportTypeEn: string;
  supportTypeAr: string;
  depositedSubstanceEn: string;
  depositedSubstanceAr: string;
  cellStatusEn: string;
  cellStatusAr: string;
  descriptionEn: string;
  descriptionAr: string;
  examTipsEn: string;
  examTipsAr: string;
  pinX: number; // % from left
  pinY: number; // % from top
}

export const HISTOLOGY_LAYERS: HistologyLayerInfo[] = [
  {
    id: 'cuticle',
    nameEn: 'Cuticle Layer',
    nameAr: 'طبقة الكيوتين الشمعية',
    categoryEn: 'Epidermal Coating',
    categoryAr: 'غطاء البشرة الخارجي',
    supportTypeEn: 'Structural Preserving Physiological',
    supportTypeAr: 'تركيبية تحافظ على الفسيولوجية',
    depositedSubstanceEn: 'Cutin (Waxy hydrophobic lipid polymer)',
    depositedSubstanceAr: 'الكيوتين (مادة دهنية شمعية غير منفذة للماء)',
    cellStatusEn: 'Waxy Acellular Coating',
    cellStatusAr: 'طبقة شمعية غير خلوية تغطي جدر خلايا البشرة',
    descriptionEn: 'A continuous waterproof waxy layer deposited on the outer tangential walls of epidermal cells. Drastically curbs transpirational water loss and shields internal parenchyma.',
    descriptionAr: 'طبقة شمعية غير منفذة للماء تترسب على الجدر الخارجية لخلايا البشرة لتمنع فقدان الماء عن طريق النتح، وتلعب دوراً تركيبياً يحافظ على الدعامة الفسيولوجية.',
    examTipsEn: 'Cutin is an example of structural support that directly preserves physiological support by preventing dehydration.',
    examTipsAr: 'سؤال وزاري متكرر: الكيوتين دعامة تركيبية تحافظ على الدعامة الفسيولوجية؛ لأن سمكه يقلل من فقد الماء بالنتح فتبقى الخلايا منتفخة.',
    pinX: 12,
    pinY: 8,
  },
  {
    id: 'epidermis',
    nameEn: 'Stem Epidermis',
    nameAr: 'بشرة الساق',
    categoryEn: 'Dermal Tissue',
    categoryAr: 'النسيج الضام الجلدي',
    supportTypeEn: 'Structural Preserving Physiological',
    supportTypeAr: 'تركيبية تحافظ على الفسيولوجية',
    depositedSubstanceEn: 'Cellulose primary wall coated with Cutin',
    depositedSubstanceAr: 'جدر سليلوزية مغطاة بطبقة الكيوتين',
    cellStatusEn: 'Living (Vacuolated)',
    cellStatusAr: 'خلايا حية بها فجوة عصارية وخالية من البلاستيدات الخضراء',
    descriptionEn: 'A single, compact row of contiguous barrel-shaped parenchyma cells lacking chloroplasts. Covered externally by the cuticle to prevent pathogen entry and desiccation.',
    descriptionAr: 'صف واحد من خلايا برنشيمية برميلية الشكل متلاصقة تماماً بدون مسافات بينية، تخلو من البلاستيدات وتغطيها طبقة الكيوتين لحماية الأنسجة الداخلية.',
    examTipsEn: 'Epidermal cells are living parenchyma-like cells without chloroplasts, except guard cells which contain chloroplasts.',
    examTipsAr: 'خلايا البشرة برميلية متلاصقة تخلو من الكلوروفيل وتعتمد على الكيوتين لمنع فقد الماء، بينما تحتوي الخلايا الحارسة للثغور فقط على بلاستيدات خضراء.',
    pinX: 20,
    pinY: 13,
  },
  {
    id: 'collenchyma',
    nameEn: 'Collenchyma Hypodermis (Cortex)',
    nameAr: 'النسيج الكولنشيمي (قشرة الساق)',
    categoryEn: 'Cortical Mechanical Tissue',
    categoryAr: 'نسيج القشرة الميكانيكي',
    supportTypeEn: 'Dual (Physiological + Structural)',
    supportTypeAr: 'فسيولوجية وتركيبية معاً',
    depositedSubstanceEn: 'Cellulose extra thickening at cell corners',
    depositedSubstanceAr: 'مغلظ بالسليلوز والبكتين عند الأركان',
    cellStatusEn: 'Living (Vacuolated)',
    cellStatusAr: 'خلايا حية تحتوي على أنوية وبلاستيدات وفجوات عصارية',
    descriptionEn: 'Multiple rows of living elongated cells irregularly thickened with cellulose at their corners. Contains chloroplasts to assist in photosynthesis and provides elastic mechanical support.',
    descriptionAr: 'عدة صفوف من خلايا حية مغلظة الأركان بالسليلوز، تكسب الساق اللين والمرونة وتدعيم النبات، وتحتوي أحياناً على بلاستيدات خضراء للمساهمة في البناء الضوئي.',
    examTipsEn: 'Collenchyma has BOTH physiological and structural support because it is living (has vacuoles) AND thickened with extra cellulose.',
    examTipsAr: 'نقطة جوهرية في الامتحان: النسيج الكولنشيمي يجمع بين الدعامتين الفسيولوجية والتركيبية؛ لأنه نسيج حي ذو فجوة عصارية مغلظ الجدر بالسليلوز.',
    pinX: 28,
    pinY: 22,
  },
  {
    id: 'parenchyma',
    nameEn: 'Cortical Parenchyma',
    nameAr: 'النسيج البرنشيمي للقشرة',
    categoryEn: 'Ground Tissue',
    categoryAr: 'نسيج القشرة الأساسي',
    supportTypeEn: 'Physiological',
    supportTypeAr: 'فسيولوجية فقط',
    depositedSubstanceEn: 'Thin primary cellulose wall only (Unlignified)',
    depositedSubstanceAr: 'جدر سليلوزية رقيقة غير مغلظة',
    cellStatusEn: 'Living (Vacuolated)',
    cellStatusAr: 'خلايا حية رقيقة الجدر بها فجوات عصارية كبيرة',
    descriptionEn: 'Thin-walled spherical or oval living cells separated by prominent intercellular air spaces for gas exchange and carbohydrate storage.',
    descriptionAr: 'خلايا حية رقيقة الجدران تفصل بينها مسافات بينية واسعة للتهوية وتخزين المواد الغذائية، تعتمد كلياً على امتلاء فجواتها العصارية بالماء.',
    examTipsEn: 'Parenchyma possesses ONLY physiological support; it lacks secondary thickening and wilts completely when water is lost.',
    examTipsAr: 'النسيج البرنشيمي دعامة فسيولوجية فقط؛ لعدم وجود ترسيبات لمواد مغلظة كاللجنين أو السيوبرين، ويفقد دعامته تماماً عند الجفاف.',
    pinX: 38,
    pinY: 32,
  },
  {
    id: 'starch_sheath',
    nameEn: 'Starch Sheath',
    nameAr: 'الغلاف النشوي',
    categoryEn: 'Innermost Cortical Layer',
    categoryAr: 'الطبقة الداخلية للقشرة',
    supportTypeEn: 'Physiological',
    supportTypeAr: 'فسيولوجية فقط',
    depositedSubstanceEn: 'Thin cellulose wall filled with amyloplasts',
    depositedSubstanceAr: 'جدر رقيقة معبأة بحبيبات النشا الوفيرة',
    cellStatusEn: 'Living (Vacuolated)',
    cellStatusAr: 'خلايا حية ممتلئة بحبيبات النشا',
    descriptionEn: 'The innermost single cell layer of the cortex. Packed with abundant starch grains for long-term nutrient reserves and demarcating the boundary with the stele.',
    descriptionAr: 'الصف الأخير والداخلي من القشرة، خلاياه غنية بحبيبات النشا الوفيرة لتخزين الطاقة، ويفصل القشرة عن الحزم الوعائية والأسطوانة الوعائية.',
    examTipsEn: 'Identified histologically by Lugol iodine staining turning deep blue-black due to dense starch granules.',
    examTipsAr: 'تتميز خلايا الغلاف النشوي بكثافة تخزين حبيبات النشا وتتلون بالأزرق الداكن عند إضافة محلول اليود، ووظيفته الأساسية حفظ وتخزين النشا.',
    pinX: 48,
    pinY: 42,
  },
  {
    id: 'pericycle',
    nameEn: 'Pericycle Sclerenchyma Fibers',
    nameAr: 'ألياف البريسيكل الإسكلرنشيمية',
    categoryEn: 'Stele Outer Boundary',
    categoryAr: 'محيط الأسطوانة الوعائية',
    supportTypeEn: 'Structural',
    supportTypeAr: 'تركيبية فقط',
    depositedSubstanceEn: 'Thick secondary wall impregnated with Lignin',
    depositedSubstanceAr: 'مغلظة بمادة اللجنين القوية غير المنفذة',
    cellStatusEn: 'Dead at Maturity (Lignified Lumen)',
    cellStatusAr: 'خلايا ميتة تلاشت أنويتها وسيتوبلازمها (ألياف متصلبة)',
    descriptionEn: 'Alternating bundles of dead sclerenchyma fibers and parenchyma cells opposite vascular bundles. Provides immense tensile strength and prevents stem snapping in high winds.',
    descriptionAr: 'مجموعات متبادلة من ألياف إسكلرنشيمية ميتة وخلايا برنشيمية، تقع خارج اللحاء مباشرة لتقوية الساق وجعله قائماً ومرناً يقاوم الرياح دون أن ينكسر.',
    examTipsEn: 'Pericycle fibers are dead sclerenchyma cells providing permanent structural support with ZERO physiological support.',
    examTipsAr: 'سؤال امتحاني هام: ألياف البريسيكل تتكون من خلايا إسكلرنشيمية ميتة تكسب الساق الصلابة والمرونة، وتمثل دعامة تركيبية فقط ولا تمتلك دعامة فسيولوجية.',
    pinX: 58,
    pinY: 52,
  },
  {
    id: 'phloem',
    nameEn: 'Vascular Phloem',
    nameAr: 'اللحاء (أنابيب غربالية وخلايا مرافقة)',
    categoryEn: 'Vascular Bundle - Outer Zone',
    categoryAr: 'المنطقة الخارجية للحزمة الوعائية',
    supportTypeEn: 'Vascular Transport',
    supportTypeAr: 'نقل وعائي ودعامة',
    depositedSubstanceEn: 'Cellulose sieve plates with living companion cells',
    depositedSubstanceAr: 'صفائح غربالية سليلوزية مع خلايا مرافقة حية',
    cellStatusEn: 'Living (Vacuolated)',
    cellStatusAr: 'أنابيب غربالية عديمة الأنوية وخلايا مرافقة كاملة الحيوية',
    descriptionEn: 'Conducts sucrose and organic photoassimilates downward and upward. Consists of enucleated sieve tubes connected by cytoplasmic strands and nucleated companion cells.',
    descriptionAr: 'النسيج الوعائي المسؤول عن نقل المواد الغذائية العضوية الناتجة عن البناء الضوئي. يتألف من أنابيب غربالية مثقبة وخلايا مرافقة غنية بالميتوكوندريا لتوفير ATP.',
    examTipsEn: 'Sieve tubes are living but lack nuclei, receiving ribosomes and ATP from companion cells via plasmodesmata.',
    examTipsAr: 'الأنابيب الغربالية خلايا حية لكنها عديمة الأنوية؛ تزودها الخلايا المرافقة بالطاقة (ATP) عبر خيوط البلازموديزما لنقل السكروز بالانسياب السيتوبلازمي.',
    pinX: 68,
    pinY: 62,
  },
  {
    id: 'cambium',
    nameEn: 'Vascular Cambium Meristem',
    nameAr: 'الكامبيوم الوعائي المرستيمي',
    categoryEn: 'Lateral Meristem',
    categoryAr: 'النسيج المرستيمي الإنشائي',
    supportTypeEn: 'Physiological',
    supportTypeAr: 'فسيولوجية فقط',
    depositedSubstanceEn: 'Thin primary meristematic wall',
    depositedSubstanceAr: 'جدر سليلوزية إنشائية رقيقة قابلة للانقسام',
    cellStatusEn: 'Meristematic',
    cellStatusAr: 'خلايا مرستيمية إنشائية حية نشطة الانقسام',
    descriptionEn: 'A strip of active meristematic cells sandwiched between phloem and xylem. Divides repeatedly: externally producing secondary phloem and internally secondary xylem, expanding stem girth.',
    descriptionAr: 'صف أو أكثر من خلايا مرستيمية غير متميزة تقع بين اللحاء والخشب، تنقسم لتعطي لحاءً ثانوياً للخارج وخشباً ثانوياً للداخل مما يزيد من سمك الساق وقطره.',
    examTipsEn: 'Cambium division increases the thickness (girth) of dicot stems and provides secondary vascular reinforcement.',
    examTipsAr: 'الكامبيوم نسيج مرستيمي إنشائي مسؤول عن النمو الثانوي لقطر الساق؛ بانقسامه يضيف لحاءً ثانوياً نحو الخارج وخشباً ثانوياً نحو الداخل.',
    pinX: 74,
    pinY: 70,
  },
  {
    id: 'xylem',
    nameEn: 'Secondary Xylem Vessels & Tracheids',
    nameAr: 'أوعية وقصيبات الخشب الثانوي',
    categoryEn: 'Vascular Bundle - Inner Zone',
    categoryAr: 'المنطقة الداخلية للحزمة الوعائية',
    supportTypeEn: 'Structural',
    supportTypeAr: 'تركيبية فقط',
    depositedSubstanceEn: 'Lignin deposition in spiral, annular or pitted patterns',
    depositedSubstanceAr: 'ترسيب كثيف لمادة اللجنين بحلقات حلزونية ومنقرة',
    cellStatusEn: 'Dead at Maturity (Lignified Lumen)',
    cellStatusAr: 'خلايا ميتة مجوفة تلاشت محتوياتها الحية لتكوين أنابيب توصيل',
    descriptionEn: 'Continuous rigid tubular conduits transporting water and mineral salts from roots to leaves. Thickly lignified walls resist negative transpirational tension collapse.',
    descriptionAr: 'أنابيب مجوفة لنقل الماء والأملاح المعدنية من الجذر للأوراق تحت قوى الشد الناتجة عن النتح، جدرانها سميكة مغلظة باللجنين وتتحمل ضغط الشد العالي دون انطباق.',
    examTipsEn: 'Xylem vessels are dead cells acting as permanent structural support and high-tensile water conduits. Zero physiological support.',
    examTipsAr: 'أوعية وقصيبات الخشب خلايا ميتة مغلظة باللجنين غير المنفذ، تمثل دعامة تركيبية دائمة توفر صلابة هائلة وتحمي القنوات من الانهيار تحت الشد النتحي.',
    pinX: 82,
    pinY: 78,
  },
  {
    id: 'pith',
    nameEn: 'Pith & Medullary Rays',
    nameAr: 'النخاع والأشعة النخاعية',
    categoryEn: 'Central Ground Stele',
    categoryAr: 'قلب الساق والروابط الشعاعية',
    supportTypeEn: 'Physiological',
    supportTypeAr: 'فسيولوجية فقط',
    depositedSubstanceEn: 'Thin primary cellulose wall only',
    depositedSubstanceAr: 'جدر سليلوزية برنشيمية رقيقة',
    cellStatusEn: 'Living (Vacuolated)',
    cellStatusAr: 'خلايا برنشيمية حية كبيرة الحجم بها فجوات عصارية',
    descriptionEn: 'Occupies the stem center (pith) and radiates between vascular bundles (medullary rays) to connect the cortex with the pith for nutrient and water radial diffusion.',
    descriptionAr: 'يشغل مركز الساق وتتصل به أشعة نخاعية تمتد بين الحزم الوعائية لتصل القشرة بالنخاع وتسمح بالنقل الأفقي والجانبي للماء والمواد الغذائية.',
    examTipsEn: 'Pith consists of large parenchyma cells functioning primarily in carbohydrate storage and hydrostatic turgor.',
    examTipsAr: 'النخاع نسيج برنشيمي تخزيني بحت يقع في مركز الساق، وخلاياه حية تمتلك دعامة فسيولوجية فقط وتخلو من اللجنين.',
    pinX: 90,
    pinY: 88,
  },
];

export const INITIAL_PLANT_PARAMS: PlantHistologyParams = {
  subTab: 'osmotic_physiology',
  solutionType: 'hypotonic',
  soilWaterPotential: -0.2,
  cellSapSolutePotential: -0.8,
  activeTissue: 'collenchyma',
  appliedForce: 50,
  highlightMolecule: 'cellulose',
  movementType: 'tendril',
  tendrilSupportPresent: true,
  tendrilCoilingProgress: 60,
  contractileRootDepth: 10,
  touchStimulusActive: false,
  selectedHistologyPin: 'collenchyma',
};

// Parameter schema
const PLANT_PARAM_SCHEMA: LabParameterSchema<PlantHistologyParams> = {
  subTab: {
    key: 'subTab',
    type: 'select',
    labelEn: 'Investigation Module',
    labelAr: 'وحدة الاستكشاف النسيجي',
    defaultValue: 'osmotic_physiology',
    options: [
      { value: 'osmotic_physiology', labelEn: '1. Physiological Support & Osmosis', labelAr: '١. الدعامة الفسيولوجية والأسموزية' },
      { value: 'structural_support', labelEn: '2. Structural Support & Deposition', labelAr: '٢. الدعامة التركيبية ومواد الترسيب' },
      { value: 'plant_movements', labelEn: '3. Plant Movements & Auxins', labelAr: '٣. حركة النبات (الشد والانتحاء)' },
      { value: 'stem_histology', labelEn: '4. 400x Dicot Stem Histology Atlas', labelAr: '٤. أطلس القطاع العرضي للساق 400x' },
    ],
    category: 'primary',
  },
  solutionType: {
    key: 'solutionType',
    type: 'select',
    labelEn: 'External Osmotic Solution',
    labelAr: 'المحلول الأسموزي الخارجي',
    defaultValue: 'hypotonic',
    options: [
      { value: 'hypotonic', labelEn: 'Hypotonic (Pure Water / Moist Soil)', labelAr: 'منخفض التركيز (ماء مقطر / تربة رطبة)' },
      { value: 'isotonic', labelEn: 'Isotonic (Balanced Sap Potential)', labelAr: 'متعادل التركيز (اتزان ديناميكي)' },
      { value: 'hypertonic', labelEn: 'Hypertonic (Saline Brine / Drought)', labelAr: 'مرتفع التركيز (محلول ملحي / جفاف)' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'osmotic_physiology',
  },
  soilWaterPotential: {
    key: 'soilWaterPotential',
    type: 'number',
    labelEn: 'Soil Water Potential (Ψ_soil)',
    labelAr: 'جهد الماء في التربة (Ψ)',
    defaultValue: -0.2,
    min: -2.5,
    max: 0.0,
    step: 0.1,
    unit: ' MPa',
    category: 'primary',
    visibleIf: (p) => p.subTab === 'osmotic_physiology',
  },
  cellSapSolutePotential: {
    key: 'cellSapSolutePotential',
    type: 'number',
    labelEn: 'Initial Vacuole Solute Potential (Ψ_s)',
    labelAr: 'الجهد الأسموزي للعصير الخلوي',
    defaultValue: -0.8,
    min: -1.8,
    max: -0.4,
    step: 0.1,
    unit: ' MPa',
    category: 'primary',
    visibleIf: (p) => p.subTab === 'osmotic_physiology',
  },
  activeTissue: {
    key: 'activeTissue',
    type: 'select',
    labelEn: 'Tested Plant Tissue',
    labelAr: 'النسيج النباتي المختبر',
    defaultValue: 'collenchyma',
    options: [
      { value: 'parenchyma', labelEn: 'Parenchyma (برنشيمي - Thin living)', labelAr: 'النسيج البرنشيمي (حي رقيق)' },
      { value: 'collenchyma', labelEn: 'Collenchyma (كولنشيمي - Cellulose living)', labelAr: 'النسيج الكولنشيمي (سليلوز حي)' },
      { value: 'sclerenchyma', labelEn: 'Sclerenchyma (إسكلرنشيمي - Lignified dead)', labelAr: 'النسيج الإسكلرنشيمي (لجنين ميت)' },
      { value: 'epidermis', labelEn: 'Epidermis + Cuticle (بشرة الورقة)', labelAr: 'بشرة الورقة + الكيوتين' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'structural_support',
  },
  appliedForce: {
    key: 'appliedForce',
    type: 'number',
    labelEn: 'Applied Mechanical Stress Force',
    labelAr: 'قوة الإجهاد الميكانيكي المطبقة',
    defaultValue: 50,
    min: 0,
    max: 300,
    step: 10,
    unit: ' N',
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'structural_support',
  },
  highlightMolecule: {
    key: 'highlightMolecule',
    type: 'select',
    labelEn: 'Macromolecular Deposition',
    labelAr: 'مادة الترسيب الكيميائي',
    defaultValue: 'cellulose',
    options: [
      { value: 'cellulose', labelEn: 'Cellulose (السليلوز - Flexible/Permeable)', labelAr: 'السليلوز (مرن / منفذ للماء)' },
      { value: 'lignin', labelEn: 'Lignin (اللجنين - Rigid/Impermeable)', labelAr: 'اللجنين (صلب / غير منفذ للماء)' },
      { value: 'cutin', labelEn: 'Cutin (الكيوتين - Waxy Epidermal)', labelAr: 'الكيوتين (شمعي على البشرة)' },
      { value: 'suberin', labelEn: 'Suberin (السيوبرين - Cork Barrier)', labelAr: 'السيوبرين (حاجز في الفلين)' },
    ],
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'structural_support',
  },
  movementType: {
    key: 'movementType',
    type: 'select',
    labelEn: 'Movement Investigation',
    labelAr: 'نوع الحركة المختبرة',
    defaultValue: 'tendril',
    options: [
      { value: 'tendril', labelEn: 'Tendril Coiling (حركة الشد بالمحاليق)', labelAr: 'الشد بالمحاليق (البازلاء والعنب)' },
      { value: 'contractile_roots', labelEn: 'Contractile Roots (الجذور الشادة)', labelAr: 'الجذور الشادة (الأبصال والكورمات)' },
      { value: 'mimosa_touch', labelEn: 'Touch & Nyctinasty (اللمس والنوم)', labelAr: 'اللمس والنوم (نبات المستحية)' },
    ],
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'plant_movements',
  },
  tendrilSupportPresent: {
    key: 'tendrilSupportPresent',
    type: 'boolean',
    labelEn: 'Mechanical Support Solid Rod Present',
    labelAr: 'وجود دعامة صلبة يلتف حولها المحلاق',
    defaultValue: true,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'plant_movements' && p.movementType === 'tendril',
  },
  tendrilCoilingProgress: {
    key: 'tendrilCoilingProgress',
    type: 'number',
    labelEn: 'Tendril Coiling Stage',
    labelAr: 'مرحلة التفاف المحلاق',
    defaultValue: 60,
    min: 0,
    max: 100,
    step: 5,
    unit: '%',
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'plant_movements' && p.movementType === 'tendril',
  },
  contractileRootDepth: {
    key: 'contractileRootDepth',
    type: 'number',
    labelEn: 'Subterranean Corm Depth',
    labelAr: 'عمق الكورمة / البصلة تحت التربة',
    defaultValue: 10,
    min: 0,
    max: 15,
    step: 1,
    unit: ' cm',
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'plant_movements' && p.movementType === 'contractile_roots',
  },
  touchStimulusActive: {
    key: 'touchStimulusActive',
    type: 'boolean',
    labelEn: 'Apply Mechanical Touch Stimulus',
    labelAr: 'تطبيق مؤثر اللمس الميكانيكي',
    defaultValue: false,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'plant_movements' && p.movementType === 'mimosa_touch',
  },
  selectedHistologyPin: {
    key: 'selectedHistologyPin',
    type: 'select',
    labelEn: 'Selected Histological Layer',
    labelAr: 'الطبقة النسيجية المختارة',
    defaultValue: 'collenchyma',
    options: HISTOLOGY_LAYERS.map((l) => ({ value: l.id, labelEn: l.nameEn, labelAr: l.nameAr })),
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'stem_histology',
  },
};

// Presets
const PLANT_PRESETS: LabPreset<PlantHistologyParams>[] = [
  {
    id: 'turgid_cell',
    nameEn: 'Turgid Cell (Hypotonic Bath)',
    nameAr: 'امتلاء كامل (وسط مائي مخفف)',
    descriptionEn: 'Cell vacuole expands, creating maximum turgor pressure (1.0 MPa) and opening stomatal pore.',
    descriptionAr: 'تمتلئ الفجوة العصارية بالماء فيزداد حجم العصير الخلوي ويضغط على الجدار فيتوتر ويكتسب النبات دعامته الفسيولوجية.',
    badge: '🌿 Full Turgor',
    params: {
      subTab: 'osmotic_physiology',
      solutionType: 'hypotonic',
      soilWaterPotential: 0.0,
      cellSapSolutePotential: -0.9,
    },
  },
  {
    id: 'plasmolyzed_cell',
    nameEn: 'Acute Plasmolysis (Hypertonic Saline)',
    nameAr: 'انكماش وبلزمة (محلول مركز / جفاف)',
    descriptionEn: 'Water leaves vacuole by osmosis; protoplast shrinks from wall, causing herbaceous wilting.',
    descriptionAr: 'يفقد النبات ماءه بالخاصية الأسموزية فينكمش البروتوبلازم ويزول توتر الجدار فيحدث الذبول وارتخاء السيقان.',
    badge: '🥀 Wilting Alert',
    params: {
      subTab: 'osmotic_physiology',
      solutionType: 'hypertonic',
      soilWaterPotential: -2.0,
      cellSapSolutePotential: -0.7,
    },
  },
  {
    id: 'collenchyma_dual',
    nameEn: 'Collenchyma Dual Support',
    nameAr: 'النسيج الكولنشيمي (دعامة مزدوجة)',
    descriptionEn: 'Living cells with vacuole and extra cellulose corners provide both physiological and structural support.',
    descriptionAr: 'خلايا حية بها فجوة عصارية وجدران مغلظة بالسليلوز تجمع بين الدعامتين الفسيولوجية والتركيبية.',
    badge: '🔬 Dual Support',
    params: {
      subTab: 'structural_support',
      activeTissue: 'collenchyma',
      highlightMolecule: 'cellulose',
      appliedForce: 80,
    },
  },
  {
    id: 'sclerenchyma_rigid',
    nameEn: 'Sclerenchyma Lignified Fibers',
    nameAr: 'الألياف الإسكلرنشيمية (صلابة اللجنين)',
    descriptionEn: 'Dead cells with heavy lignin deposition bear high tensile and compressive loads (220 MPa).',
    descriptionAr: 'خلايا ميتة جدرانها مغلظة باللجنين غير المنفذ، توفر دعامة تركيبية دائمة فقط.',
    badge: '🪵 Pure Structural',
    params: {
      subTab: 'structural_support',
      activeTissue: 'sclerenchyma',
      highlightMolecule: 'lignin',
      appliedForce: 180,
    },
  },
  {
    id: 'tendril_support_found',
    nameEn: 'Tendril Climbing Support',
    nameAr: 'التفاف المحلاق حول الدعامة',
    descriptionEn: 'Touch inhibits contact side while auxin accelerates outer elongation, spiraling the tendril.',
    descriptionAr: 'بطء نمو المنطقة الملامسة للدعامة وسرعة نمو المنطقة البعيدة عنها بسبب تركيز الأوكسينات فيلتف المحلاق.',
    badge: '🌀 Tendril Coiling',
    params: {
      subTab: 'plant_movements',
      movementType: 'tendril',
      tendrilSupportPresent: true,
      tendrilCoilingProgress: 75,
    },
  },
  {
    id: 'contractile_corm',
    nameEn: 'Corm Subterranean Traction',
    nameAr: 'الجذور الشادة في الأبصال',
    descriptionEn: 'Roots contract longitudinally to maintain corm at safe depth (10 cm) protecting aerial shoot.',
    descriptionAr: 'تقلص الجذور الشادة يسحب البصلة أو الكورمة لأسفل لتظل على بعد مناسب يحمي أجزاءها الهوائية من الرياح.',
    badge: '🌱 Safe Depth',
    params: {
      subTab: 'plant_movements',
      movementType: 'contractile_roots',
      contractileRootDepth: 10,
    },
  },
];

// POE Prompts
const PLANT_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'collenchyma_vs_sclerenchyma',
    titleEn: 'Collenchyma Dual Support vs Sclerenchyma',
    titleAr: 'الدعامة المزدوجة في الكولنشيمي مقابل الإسكلرنشيمي',
    scenarioEn:
      'Plant tissues adapt differently to mechanical and hydrostatic stresses. Collenchyma cells have unevenly thickened corners, while sclerenchyma cells have uniformly thick secondary walls.',
    scenarioAr:
      'تتمايز الأنسجة النباتية في تحمل الإجهادات الميكانيكية والأسموزية؛ فالنسيج الكولنشيمي يتميز بتغلظ أركانه، بينما يتميز الإسكلرنشيمي بتغلظ ثانوي منتظم.',
    questionEn:
      'Why does collenchymatous tissue exhibit BOTH physiological and structural support, whereas sclerenchymatous tissue exhibits only structural support?',
    questionAr:
      'علل: يجمع النسيج الكولنشيمي بين الدعامتين الفسيولوجية والتركيبية معاً، بينما يقتصر النسيج الإسكلرنشيمي على الدعامة التركيبية فقط؟',
    optionsEn: [
      'Collenchyma cells are living with cell sap vacuoles, retaining osmosis while reinforced with extra cellulose; sclerenchyma cells are dead with lignified walls and no protoplasts.',
      'Collenchyma contains thick impermeable suberin, while sclerenchyma lacks cell walls entirely.',
      'Collenchyma is only found in underground roots, while sclerenchyma is restricted to flower petals.',
    ],
    optionsAr: [
      'الخلايا الكولنشيمية خلايا حية بها فجوات عصارية تمتص الماء أسموزياً وجدرها مغلظة بالسليلوز؛ بينما الإسكلرنشيمية خلايا ميتة خالية من البروتوبلازم مغلظة باللجنين.',
      'الكولنشيمي يحتوي على مادة السيوبرين غير المنفذة، بينما يخلو الإسكلرنشيمي من الجدر الخلوية تماماً.',
      'الكولنشيمي يوجد فقط في الجذور الأرضية، بينما يقتصر الإسكلرنشيمي على بتلات الأزهار.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Correct! Living cells with vacuoles maintain turgor (physiological), while cellulose deposition adds elasticity (structural). Sclerenchyma is dead at maturity and lacks vacuoles.',
    scientificExplanationAr:
      'إجابة نموذجية! لأن خلايا الكولنشيمي حية تحتوي فجوات عصارية تكتسب دعامة فسيولوجية وجدرها مغلظة بالسليلوز فتكسبه دعامة تركيبية. بينما الإسكلرنشيمي خلايا ميتة لا تحتوي فجوات عصارية.',
  },
  {
    id: 'cutin_transpiration_barrier',
    titleEn: 'Cutin Barrier & Physiological Preservation',
    titleAr: 'دور الكيوتين الشمعي في صيانة الدعامة الفسيولوجية',
    scenarioEn:
      'The leaf epidermis is coated with a waxy cutin layer. A botanist chemically strips the cuticle from an herbaceous plant exposed to direct sunlight.',
    scenarioAr:
      'تغطي بشرة الأوراق طبقة شمعية من الكيوتين. قام باحث بنزع طبقة الكيوتين كيميائياً من أوراق نبات عشبي معرض لضوء الشمس المباشر.',
    questionEn:
      'What happens to the physiological support of the plant when the cutin layer is destroyed, and why is cutin classified as structural support?',
    questionAr:
      'ماذا يحدث للدعامة الفسيولوجية للنبات عند إزالة طبقة الكيوتين؟ ولماذا يصنف الكيوتين كدعامة تركيبية؟',
    optionsEn: [
      'Cutin is a chemically deposited non-permeable substance (structural); removing it leads to rampant transpirational water loss, vacuolar shrinkage, and collapse of physiological support.',
      'The plant will absorb water directly from the air through its epidermis and expand indefinitely.',
      'No effect, because stomata alone regulate 100% of water movement in plants.',
    ],
    optionsAr: [
      'الكيوتين مادة مترسبة غير منفذة للماء (دعامة تركيبية)؛ وإزالتها تؤدي إلى استنزاف الماء بالنتح وبلزمة الخلايا وفقدان الدعامة الفسيولوجية والذبول.',
      'سيمتص النبات بخار الماء مباشرة من الهواء عبر البشرة وتنتفخ خلاياه بشكل لا نهائي.',
      'لن يتأثر النبات لأن الثغور فقط هي المسؤولة بنسبة 100% عن حركة الماء.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Spot on! Cutin is a permanent structural deposition that preserves temporary physiological turgor by limiting transpiration.',
    scientificExplanationAr:
      'إجابة صحيحة ومطابقة لمنهج الثانوية العامة! الكيوتين دعامة تركيبية تحافظ على الدعامة الفسيولوجية بمنع نفاذ الماء واستنزافه.',
  },
  {
    id: 'tendril_auxin_coiling',
    titleEn: 'Tendril Differential Elongation Mechanics',
    titleAr: 'آلية التفاف المحلاق وتوزيع الأوكسينات',
    scenarioEn:
      'Climbing plants like pea (البازلاء) and grapevine (العنب) produce tendrils (محاليق) that circle in the air searching for a solid trellis.',
    scenarioAr:
      'تنتج النباتات المتسلقة كالعنب والبازلاء محاليق تدور في الهواء بحثاً عن جسم صلب أو دعامة ترتكز عليها.',
    questionEn:
      'What is the cellular and hormonal mechanism causing the tendril to spiral around the support, and what happens if no support is encountered?',
    questionAr:
      'ما الآلية الخلوية والهرمونية التي تجعل المحلاق يلتف حول الدعامة، وماذا يحدث له إذا لم يجد دعامة يرتكز عليها؟',
    optionsEn: [
      'Mechanical touch inhibits elongation on the contacted side while auxins accumulate on the outer free side, accelerating its growth to wrap around the trellis; without support, it withers and dies.',
      'The contact side secretes enzymes that dissolve the trellis, fusing the tendril into the wood.',
      'Auxins evaporate on contact, freezing the tendril in place permanently.',
    ],
    optionsAr: [
      'بطء نمو المنطقة التي تلامس الدعامة وسرعة نمو واستطالة المنطقة البعيدة عنها نتيجة تراكم الأوكسينات فيلتف حولها؛ وإذا لم يجد دعامة فإنه يذبل ويموت.',
      'المنطقة الملامسة تفرز إنزيمات تذيب الدعامة وتلتحم بها جينياً.',
      'تتبخر الأوكسينات فور اللمس فيتجمد المحلاق في موضعه بشكل دائم.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Exact curriculum explanation! Differential growth induced by contact inhibition and outer auxin stimulation causes curling. If no contact occurs, the tendril withers and dies.',
    scientificExplanationAr:
      'تفسير دقيق ومثالي! يرجع الالتفاف لبطء نمو المنطقة الملامسة وسرعة نمو المنطقة البعيدة. وإذا لم يجد المحلاق ما يلتصق به في حركته الدورانية يذبل ويموت.',
  },
];

// Definition
export const PLANT_HISTOLOGY_LAB_DEFINITION: LabDefinition<PlantHistologyParams, Record<string, any>> = {
  id: 'plant_histology_support',
  subject: 'biology',
  chapterRef: 'Biology Chapter 1: Support and Movement in Living Organisms (الدعامة والحركة في النبات)',
  titleEn: 'Plant Histology, Support & Movements Studio',
  titleAr: 'مختبر أنسجة ودعامة وحركة النبات',
  subtitleEn: 'Osmotic Turgor, Cell Wall Deposition & Tendril Mechanics',
  subtitleAr: 'الدعامة الفسيولوجية والتركيبية، أطلس قطاع الساق، والشد بالمحاليق',
  taglineEn: 'Interactive botanical histology, cellular turgor dynamics & auxin coiling',
  taglineAr: 'محاكاة أسموزية الخلية وضغط الامتلاء، أطلس مجهري 400x، وحركة الشد',
  objectives: [
    {
      id: 'obj1',
      textEn: 'Differentiate between temporary physiological support (osmotic turgor) and permanent structural support (deposition of cellulose, lignin, cutin, suberin).',
      textAr: 'التمييز الدقيق بين الدعامة الفسيولوجية المؤقتة والدعامة التركيبية الدائمة ومواد الترسيب الخلوية.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj2',
      textEn: 'Analyze the cross-sectional anatomy of a dicot stem at 400x optical magnification and locate mechanical tissues.',
      textAr: 'دراسة القطاع العرضي في ساق نبات ذي فلقتين وتحديد أنسجة الدعامة واللحاء والخشب والكامبيوم.',
      bloomLevel: 'understand',
    },
    {
      id: 'obj3',
      textEn: 'Simulate the auxin-driven differential growth of tendrils around solid trellises and root contraction in corms.',
      textAr: 'استكشاف حركة الشد بالمحاليق ودور الأوكسينات في التفافها، وحركة الجذور الشادة في الأبصال والكورمات.',
      bloomLevel: 'apply',
    },
  ],
  defaultParams: INITIAL_PLANT_PARAMS,
  paramSchema: PLANT_PARAM_SCHEMA,
  presets: PLANT_PRESETS,
  poePrompts: PLANT_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Soil Water Potential',
    xLabelAr: 'جهد الماء في التربة',
    xUnit: 'MPa',
    yLabelEn: 'Cellular Turgor Pressure',
    yLabelAr: 'ضغط الامتلاء الخلوي',
    yUnit: 'MPa',
    recommendedPointsCount: 6,
  },
  supportedInstruments: ['multimeter', 'oscilloscope', 'stopwatch', 'scratchpad'],
};

export const PlantHistologyLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [dmmMode, setDmmMode] = useState<'turgor_pressure' | 'osmotic_potential' | 'mechanical_rigidity' | 'transpiration_rate'>('turgor_pressure');
  const [activePinId, setActivePinId] = useState<string>('collenchyma');
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);

  const lab = useVirtualLab<PlantHistologyParams, Record<string, any>>({
    definition: PLANT_HISTOLOGY_LAB_DEFINITION,
  });

  const { params, updateParam, setParams } = lab;

  // Simulation state calculations
  const state = useMemo((): PlantHistologySimState => {
    const psiSoil = params.solutionType === 'hypotonic' ? 0.0 : params.solutionType === 'isotonic' ? params.cellSapSolutePotential : params.soilWaterPotential;
    const psiS0 = params.cellSapSolutePotential;

    let turgor = Math.max(0, psiSoil - psiS0);
    turgor = Math.min(1.2, turgor);

    const volumeRatio = turgor > 0 ? 1.0 + (turgor / 1.2) * 0.22 : 1.0 - Math.min(0.2, (psiS0 - psiSoil) * 0.1);
    const dynamicPsiS = psiS0 / volumeRatio;
    const netPsi = dynamicPsiS + turgor;

    const wallTension = Math.min(100, Math.max(0, (turgor / 1.1) * 100));
    const stomaAperture = Math.max(0, Math.min(12, (turgor / 1.0) * 11.5));
    const stemErect = Math.min(100, Math.max(10, wallTension * 0.9 + 10));

    let youngsModulus = 15;
    let failureStress = 35;
    if (params.activeTissue === 'collenchyma') {
      youngsModulus = 65;
      failureStress = 110;
    } else if (params.activeTissue === 'sclerenchyma') {
      youngsModulus = 220;
      failureStress = 260;
    } else if (params.activeTissue === 'epidermis') {
      youngsModulus = 45;
      failureStress = 85;
    }

    const stress = params.appliedForce / 2.0;
    const isFractured = stress >= failureStress;
    const strain = stress / youngsModulus;
    const deformationMm = Math.min(15, strain * 4.5);

    const depth = params.contractileRootDepth;
    const rootSafety = depth >= 8 && depth <= 13 ? 98 : depth < 8 ? Math.max(20, (depth / 8) * 90) : Math.max(60, 100 - (depth - 13) * 15);

    const baseCutinMultiplier = params.highlightMolecule === 'cutin' ? 0.25 : 1.0;
    const transFlux = Math.max(0.2, (stomaAperture * 0.9 + 1.2) * baseCutinMultiplier);

    return {
      turgorPressure: turgor,
      solutePotential: dynamicPsiS,
      netWaterPotential: netPsi,
      cellVolumeRatio: volumeRatio,
      wallTensionPct: wallTension,
      stomaApertureUm: stomaAperture,
      stemErectnessPct: stemErect,
      tissueDeformationMm: deformationMm,
      tissueStressMpa: stress,
      isFractured: isFractured,
      rootSafetyScore: rootSafety,
      transpirationFlux: transFlux,
    };
  }, [params]);

  // Sync selected pin with param
  const activePin = useMemo(() => {
    return HISTOLOGY_LAYERS.find((l) => l.id === activePinId) || HISTOLOGY_LAYERS[2];
  }, [activePinId]);

  // Telemetry metrics
  const telemetryMetrics = useMemo((): LabTelemetryMetric[] => {
    return [
      {
        id: 'turgor',
        labelEn: 'Turgor Pressure (Ψ_p)',
        labelAr: 'ضغط الامتلاء الخلوي (Ψ_p)',
        value: `${state.turgorPressure.toFixed(2)} MPa`,
        status: state.turgorPressure >= 0.7 ? 'optimal' : state.turgorPressure > 0.2 ? 'normal' : 'alert',
        descriptionEn: 'Hydrostatic pressure exerted by protoplast against cell wall',
        descriptionAr: 'الضغط الهيدروستاتيكي الذي يولده البروتوبلازم على الجدار الخلوي',
      },
      {
        id: 'water_potential',
        labelEn: 'Net Water Potential (Ψ)',
        labelAr: 'جهد الماء الكلي للخلية (Ψ)',
        value: `${state.netWaterPotential.toFixed(2)} MPa`,
        status: 'normal',
        descriptionEn: 'Ψ = Ψ_s + Ψ_p (Driving force of osmotic movement)',
        descriptionAr: 'معادلة الجهد المائي الكلي المتحكم في اتجاه حركة الماء',
      },
      {
        id: 'stem_erectness',
        labelEn: 'Herbaceous Stem Turgidity',
        labelAr: 'استقامة الساق العشبي والامتلاء',
        value: `${state.stemErectnessPct.toFixed(0)}%`,
        status: state.stemErectnessPct > 70 ? 'optimal' : state.stemErectnessPct > 40 ? 'warning' : 'alert',
        descriptionEn: 'Physical upright standing supported by vacuolar water pressure',
        descriptionAr: 'درجة استقامة السيقان والأوراق بفضل الدعامة الفسيولوجية',
      },
      {
        id: 'tissue_stiffness',
        labelEn: 'Structural Rigidity',
        labelAr: 'الصلابة والمقاومة الميكانيكية',
        value: state.isFractured
          ? isArabic ? 'انكسار النسيج!' : 'Tissue Fractured!'
          : `${state.tissueStressMpa.toFixed(1)} MPa`,
        status: state.isFractured ? 'alert' : 'optimal',
        descriptionEn: 'Resistance to bending/compressive mechanical loading',
        descriptionAr: 'مقاومة قوى الانحناء والضغط الميكانيكي الناتجة عن الترسيبات',
      },
    ];
  }, [state, isArabic]);

  // DMM Reading
  const dmmReading: DMMReading = useMemo(() => {
    switch (dmmMode) {
      case 'turgor_pressure':
        return {
          mode: 'voltage_dc',
          value: state.turgorPressure,
          displayString: `${state.turgorPressure.toFixed(2)} MPa`,
          secondaryString: state.turgorPressure > 0.6 ? (isArabic ? 'امتلاء كامل (خلية منتفخة)' : 'Full Turgor (Turgid)') : isArabic ? 'ذبول وبلزمة' : 'Plasmolyzed',
          unit: 'MPa',
          voltageDC: state.turgorPressure,
          voltageAC: 0,
          currentDC: 0,
          resistance: state.wallTensionPct,
          continuityBeep: state.turgorPressure > 0.8,
          isOverload: false,
        };
      case 'osmotic_potential':
        return {
          mode: 'voltage_dc',
          value: state.solutePotential,
          displayString: `${state.solutePotential.toFixed(2)} MPa`,
          secondaryString: isArabic ? 'الجهد الأسموزي للعصير الخلوي' : 'Vacuole Solute Potential',
          unit: 'MPa',
          voltageDC: state.solutePotential,
          voltageAC: 0,
          currentDC: 0,
          resistance: 0,
          continuityBeep: false,
          isOverload: false,
        };
      case 'mechanical_rigidity':
        return {
          mode: 'resistance',
          value: state.tissueStressMpa,
          displayString: `${state.tissueStressMpa.toFixed(1)} MPa`,
          secondaryString: state.isFractured ? (isArabic ? 'تجاوز حد المرونة' : 'Exceeded Tensile Limit') : isArabic ? 'إجهاد مستقر' : 'Stable Stress',
          unit: 'MPa',
          voltageDC: 0,
          voltageAC: 0,
          currentDC: 0,
          resistance: state.tissueStressMpa,
          continuityBeep: state.isFractured,
          isOverload: state.isFractured,
        };
      case 'transpiration_rate':
        return {
          mode: 'current_dc',
          value: state.transpirationFlux,
          displayString: `${state.transpirationFlux.toFixed(2)} g/m²·h`,
          secondaryString: isArabic ? 'معدل فقدان الماء بالنتح' : 'Transpiration Water Loss',
          unit: 'g/m²·h',
          voltageDC: 0,
          voltageAC: 0,
          currentDC: state.transpirationFlux,
          resistance: 0,
          continuityBeep: false,
          isOverload: false,
        };
    }
  }, [dmmMode, state, isArabic]);

  // Oscilloscope signals
  const oscilloscopeSignals: [WaveformSignal, WaveformSignal] = useMemo(() => {
    return [
      {
        amplitude: Math.max(0.2, state.turgorPressure * 2.5),
        frequency: 1.0,
        phaseDeg: 0,
        type: 'sine',
        dcOffset: state.turgorPressure,
      },
      {
        amplitude: (state.wallTensionPct / 100) * 2.2,
        frequency: 1.0,
        phaseDeg: 45,
        type: 'triangle',
        dcOffset: state.wallTensionPct / 100,
      },
    ];
  }, [state]);

  // Canvas Viewport Renderer
  const handleRenderViewport = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, vp: LabViewportState) => {
      ctx.save();
      ctx.clearRect(0, 0, width, height);

      // Background styling
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (isContrast) {
        bgGrad.addColorStop(0, '#000000');
        bgGrad.addColorStop(1, '#050505');
      } else if (isLight) {
        bgGrad.addColorStop(0, '#f8fafc');
        bgGrad.addColorStop(1, '#ecfdf5');
      } else {
        bgGrad.addColorStop(0, '#020617');
        bgGrad.addColorStop(1, '#061c14');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Grid
      if (vp.gridVisible) {
        ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 1;
        const step = 40 * vp.zoom;
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
      }

      ctx.translate(vp.panX, vp.panY);
      ctx.scale(vp.zoom, vp.zoom);

      const centerX = width / 2;
      const centerY = height / 2;

      // MODULE 1: OSMOTIC PHYSIOLOGY CELL VIEWPORT
      if (params.subTab === 'osmotic_physiology') {
        const cellW = 340;
        const cellH = 260;
        const turgidScale = state.cellVolumeRatio;

        // 1. External Solution Medium
        ctx.save();
        ctx.fillStyle = params.solutionType === 'hypotonic'
          ? 'rgba(56, 189, 248, 0.08)'
          : params.solutionType === 'isotonic'
          ? 'rgba(16, 185, 129, 0.08)'
          : 'rgba(245, 158, 11, 0.08)';
        ctx.fillRect(centerX - 360, centerY - 200, 720, 400);

        ctx.strokeStyle = params.solutionType === 'hypotonic' ? '#0284c7' : params.solutionType === 'isotonic' ? '#059669' : '#d97706';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(centerX - 360, centerY - 200, 720, 400);

        // Solution Label Badge
        ctx.fillStyle = params.solutionType === 'hypotonic' ? '#38bdf8' : params.solutionType === 'isotonic' ? '#34d399' : '#fbbf24';
        ctx.font = 'bold 13px sans-serif';
        ctx.fillText(
          params.solutionType === 'hypotonic'
            ? isArabic ? 'محلول منخفض التركيز (ماء مقطر) - Ψ_soil = 0.00 MPa' : 'Hypotonic Medium (Pure Water) - Ψ = 0.00 MPa'
            : params.solutionType === 'isotonic'
            ? isArabic ? 'محلول متعادل التركيز - اتزان أسموزي ديناميكي' : 'Isotonic Medium - Dynamic Equilibrium'
            : isArabic ? 'محلول مرتفع التركيز (ملحي/جفاف) - استنزاف الماء' : 'Hypertonic Medium - Acute Water Outflow',
          centerX - 340,
          centerY - 170
        );
        ctx.restore();

        // 2. Elastic Cell Wall (الجدار الخلوي السليلوزي)
        ctx.save();
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 10;
        ctx.lineJoin = 'round';
        const wallW = cellW;
        const wallH = cellH;
        ctx.strokeRect(centerX - wallW / 2, centerY - wallH / 2, wallW, wallH);

        ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
        ctx.lineWidth = 3;
        ctx.strokeRect(centerX - wallW / 2 - 6, centerY - wallH / 2 - 6, wallW + 12, wallH + 12);
        ctx.restore();

        // 3. Protoplast & Plasma Membrane
        ctx.save();
        const protoW = (wallW - 16) * Math.min(1.0, turgidScale);
        const protoH = (wallH - 16) * Math.min(1.0, turgidScale);

        ctx.fillStyle = isLight ? 'rgba(52, 211, 153, 0.15)' : 'rgba(5, 150, 105, 0.25)';
        ctx.beginPath();
        ctx.roundRect(centerX - protoW / 2, centerY - protoH / 2, protoW, protoH, 18);
        ctx.fill();

        ctx.strokeStyle = '#059669';
        ctx.lineWidth = 3;
        ctx.stroke();

        if (turgidScale < 0.98) {
          ctx.fillStyle = 'rgba(239, 68, 68, 0.8)';
          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(
            isArabic ? '← انفصال الغشاء البلازمي (بلزمة)' : '← Plasmolysis Gap (Detached)',
            centerX + protoW / 2 + 8,
            centerY
          );
        }
        ctx.restore();

        // 4. Large Central Sap Vacuole (الفجوة العصارية)
        ctx.save();
        const vacW = protoW * 0.65;
        const vacH = protoH * 0.65;
        const vacGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, vacW / 2);
        vacGrad.addColorStop(0, '#38bdf8');
        vacGrad.addColorStop(1, '#0284c7');

        ctx.fillStyle = vacGrad;
        ctx.beginPath();
        ctx.roundRect(centerX - vacW / 2, centerY - vacH / 2, vacW, vacH, 14);
        ctx.fill();

        ctx.strokeStyle = '#0ea5e9';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isArabic ? 'الفجوة العصارية (العصير الخلوي)' : 'Central Sap Vacuole', centerX, centerY - 10);
        ctx.font = 'bold 15px monospace';
        ctx.fillText(`Ψ_p = ${state.turgorPressure.toFixed(2)} MPa`, centerX, centerY + 14);
        ctx.restore();

        // 5. Nucleus & Chloroplasts
        ctx.save();
        ctx.fillStyle = '#a855f7';
        ctx.beginPath();
        ctx.arc(centerX - protoW / 2 + 35, centerY - protoH / 2 + 35, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#9333ea';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isArabic ? 'نواة' : 'Nucleus', centerX - protoW / 2 + 35, centerY - protoH / 2 + 38);

        const chloroPositions = [
          { x: centerX + protoW / 2 - 40, y: centerY - protoH / 2 + 35 },
          { x: centerX + protoW / 2 - 40, y: centerY + protoH / 2 - 35 },
          { x: centerX - protoW / 2 + 40, y: centerY + protoH / 2 - 35 },
          { x: centerX, y: centerY - protoH / 2 + 20 },
        ];
        ctx.fillStyle = '#16a34a';
        chloroPositions.forEach((pos) => {
          ctx.beginPath();
          ctx.ellipse(pos.x, pos.y, 14, 8, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#15803d';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });
        ctx.restore();

        // 6. Water Flux Osmotic Arrows
        ctx.save();
        const arrowDir = params.solutionType === 'hypotonic' ? 1 : params.solutionType === 'hypertonic' ? -1 : 0;
        if (arrowDir !== 0) {
          ctx.strokeStyle = arrowDir > 0 ? '#38bdf8' : '#f59e0b';
          ctx.fillStyle = arrowDir > 0 ? '#38bdf8' : '#f59e0b';
          ctx.lineWidth = 3;

          const arrowY = centerY - wallH / 2 - 25;
          ctx.beginPath();
          if (arrowDir > 0) {
            ctx.moveTo(centerX, arrowY - 20);
            ctx.lineTo(centerX, arrowY + 10);
            ctx.lineTo(centerX - 6, arrowY + 2);
            ctx.moveTo(centerX, arrowY + 10);
            ctx.lineTo(centerX + 6, arrowY + 2);
          } else {
            ctx.moveTo(centerX, arrowY + 10);
            ctx.lineTo(centerX, arrowY - 20);
            ctx.lineTo(centerX - 6, arrowY - 12);
            ctx.moveTo(centerX, arrowY - 20);
            ctx.lineTo(centerX + 6, arrowY - 12);
          }
          ctx.stroke();

          ctx.font = 'bold 12px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(
            arrowDir > 0
              ? isArabic ? 'دخول الماء بالأسموزية (H₂O Inflow)' : 'Osmotic Water Inflow (H₂O)'
              : isArabic ? 'خروج الماء بالأسموزية (H₂O Outflow)' : 'Osmotic Water Outflow (H₂O)',
            centerX,
            arrowY - 30
          );
        }
        ctx.restore();

        // 7. Stomatal Pore Mini-Indicator on Top-Right
        ctx.save();
        const stomaX = centerX + 260;
        const stomaY = centerY - 90;

        ctx.fillStyle = isLight ? '#ffffff' : '#0f172a';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(stomaX - 60, stomaY - 50, 120, 100, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0f172a' : '#ffffff';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isArabic ? 'فتحة الثغر (الثغور)' : 'Stomatal Aperture', stomaX, stomaY - 32);

        const openSpread = (state.stomaApertureUm / 12) * 12;
        ctx.fillStyle = state.stomaApertureUm > 4 ? '#22c55e' : '#f59e0b';
        ctx.beginPath();
        ctx.ellipse(stomaX - 10 - openSpread / 2, stomaY + 5, 8, 22, 0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(stomaX + 10 + openSpread / 2, stomaY + 5, 8, 22, -0.15, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`${state.stomaApertureUm.toFixed(1)} μm`, stomaX, stomaY + 40);
        ctx.restore();
      }

      // MODULE 2: STRUCTURAL SUPPORT & DEPOSITION MECHANICAL TESTER
      else if (params.subTab === 'structural_support') {
        const beamL = 400;
        const beamH = 34;
        const startX = centerX - beamL / 2;
        const startY = centerY - 50;

        ctx.save();
        ctx.fillStyle = '#475569';
        ctx.fillRect(startX - 25, startY + beamH, 30, 120);
        ctx.fillRect(startX + beamL - 5, startY + beamH, 30, 120);

        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startX - 50, startY + beamH + 120);
        ctx.lineTo(startX + beamL + 50, startY + beamH + 120);
        ctx.stroke();

        const maxDeflection = state.isFractured ? 70 : state.tissueDeformationMm * 3.5;
        const midY = startY + (state.isFractured ? maxDeflection + 30 : maxDeflection);

        let tissueColor = '#10b981';
        if (params.activeTissue === 'collenchyma') tissueColor = '#059669';
        if (params.activeTissue === 'sclerenchyma') tissueColor = '#d97706';
        if (params.activeTissue === 'epidermis') tissueColor = '#0284c7';

        ctx.fillStyle = tissueColor;
        ctx.strokeStyle = state.isFractured ? '#ef4444' : '#ffffff';
        ctx.lineWidth = state.isFractured ? 3 : 1.5;

        if (!state.isFractured) {
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.quadraticCurveTo(centerX, midY, startX + beamL, startY);
          ctx.lineTo(startX + beamL, startY + beamH);
          ctx.quadraticCurveTo(centerX, midY + beamH, startX, startY + beamH);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(centerX - 10, midY + 20);
          ctx.lineTo(centerX - 25, midY + 45);
          ctx.lineTo(startX, startY + beamH);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(startX + beamL, startY);
          ctx.lineTo(centerX + 10, midY + 20);
          ctx.lineTo(centerX + 25, midY + 45);
          ctx.lineTo(startX + beamL, startY + beamH);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 20px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('⚡ FRACTURE', centerX, midY + 10);
        }

        ctx.strokeStyle = '#ef4444';
        ctx.fillStyle = '#ef4444';
        ctx.lineWidth = 4;
        const arrowTop = startY - 80;
        const arrowBot = midY - 6;

        ctx.beginPath();
        ctx.moveTo(centerX, arrowTop);
        ctx.lineTo(centerX, arrowBot);
        ctx.lineTo(centerX - 8, arrowBot - 16);
        ctx.moveTo(centerX, arrowBot);
        ctx.lineTo(centerX + 8, arrowBot - 16);
        ctx.stroke();

        ctx.font = 'bold 14px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`F = ${params.appliedForce} N`, centerX, arrowTop - 10);

        const bannerY = startY + 160;
        ctx.fillStyle = isLight ? '#ffffff' : '#0f172a';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(centerX - 220, bannerY, 440, 75, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0f172a' : '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          params.activeTissue === 'parenchyma'
            ? isArabic ? 'النسيج البرنشيمي: جدر سليلوزية رقيقة - دعامة فسيولوجية فقط (E = 15 MPa)' : 'Parenchyma: Thin primary wall - Physiological support only (E = 15 MPa)'
            : params.activeTissue === 'collenchyma'
            ? isArabic ? 'النسيج الكولنشيمي: مغلظ الأركان بالسليلوز - دعامة مزدوجة مرنة (E = 65 MPa)' : 'Collenchyma: Living cellulose thickening - Dual support (E = 65 MPa)'
            : params.activeTissue === 'sclerenchyma'
            ? isArabic ? 'النسيج الإسكلرنشيمي: مغلظ باللجنين ميت - أقصى صلابة تركيبية (E = 220 MPa)' : 'Sclerenchyma: Lignified dead lumen - High tensile structural (E = 220 MPa)'
            : isArabic ? 'بشرة الورقة: خلايا حية مع كيوتين شمعي - حفظ فسيولوجي دائم' : 'Epidermis: Cutin waxy barrier - Preserves physiological hydration',
          centerX,
          bannerY + 28
        );

        ctx.font = '11px sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(
          isArabic
            ? `الإجهاد: ${state.tissueStressMpa.toFixed(1)} MPa | التشوه: ${state.tissueDeformationMm.toFixed(2)} mm`
            : `Stress: ${state.tissueStressMpa.toFixed(1)} MPa | Strain Deflection: ${state.tissueDeformationMm.toFixed(2)} mm`,
          centerX,
          bannerY + 54
        );
        ctx.restore();
      }

      // MODULE 3: PLANT MOVEMENTS VIEWPORT
      else if (params.subTab === 'plant_movements') {
        if (params.movementType === 'tendril') {
          const rodX = centerX + 60;
          const rodY = centerY - 140;
          const rodH = 280;

          ctx.save();
          if (params.tendrilSupportPresent) {
            ctx.fillStyle = '#78350f';
            ctx.beginPath();
            ctx.roundRect(rodX - 12, rodY, 24, rodH, 6);
            ctx.fill();
            ctx.strokeStyle = '#92400e';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = '#fbbf24';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(isArabic ? 'دعامة خشبية' : 'Solid Trellis', rodX, rodY - 12);
          } else {
            ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
            ctx.setLineDash([4, 4]);
            ctx.strokeRect(rodX - 12, rodY, 24, rodH);
            ctx.setLineDash([]);
            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(isArabic ? 'غياب الدعامة (يذبل ويموت)' : 'No Support (Tendril Dies)', rodX, rodY - 12);
          }

          const stemBaseX = centerX - 160;
          const stemBaseY = centerY + 120;
          const stemTopY = params.tendrilSupportPresent && params.tendrilCoilingProgress > 40
            ? centerY - 40
            : centerY + 40;

          ctx.strokeStyle = '#15803d';
          ctx.lineWidth = 14;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(stemBaseX, stemBaseY);
          ctx.quadraticCurveTo(stemBaseX + 20, (stemBaseY + stemTopY) / 2, stemBaseX + 40, stemTopY);
          ctx.stroke();

          ctx.fillStyle = '#22c55e';
          ctx.beginPath();
          ctx.ellipse(stemBaseX + 15, stemBaseY - 40, 24, 12, -Math.PI / 6, 0, Math.PI * 2);
          ctx.fill();

          const progress = params.tendrilCoilingProgress / 100;
          ctx.strokeStyle = params.tendrilSupportPresent ? '#16a34a' : '#78716c';
          ctx.lineWidth = 4;
          ctx.lineCap = 'round';

          if (params.tendrilSupportPresent) {
            ctx.beginPath();
            const startTendrilX = stemBaseX + 40;
            const startTendrilY = stemTopY;
            ctx.moveTo(startTendrilX, startTendrilY);

            const reachX = rodX - 12;
            const reachY = rodY + 90;
            ctx.bezierCurveTo(startTendrilX + 40, startTendrilY - 30, reachX - 40, reachY - 20, reachX, reachY);

            const coilCount = Math.floor(progress * 5) + 1;
            let currentCoilY = reachY;
            for (let i = 0; i < coilCount; i++) {
              ctx.bezierCurveTo(rodX + 22, currentCoilY + 8, rodX + 22, currentCoilY + 22, reachX, currentCoilY + 30);
              currentCoilY += 30;
            }
            ctx.stroke();

            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(
              isArabic
                ? '← بطء نمو الجانب الملامس، واستطالة الجانب البعيد (أوكسينات) 🌀'
                : '← Contact inhibition vs Outer auxin elongation 🌀',
              reachX + 25,
              reachY + 20
            );
          } else {
            ctx.beginPath();
            ctx.moveTo(stemBaseX + 40, stemTopY);
            ctx.bezierCurveTo(stemBaseX + 80, stemTopY + 40, stemBaseX + 100, stemTopY + 90, stemBaseX + 110, stemTopY + 120);
            ctx.stroke();

            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText(isArabic ? 'ذبول وموت المحلاق لعدم ملامسة دعامة' : 'Withering & death due to lack of support', stemBaseX + 70, stemTopY + 140);
          }
          ctx.restore();
        } else if (params.movementType === 'contractile_roots') {
          ctx.save();
          const soilSurfaceY = centerY - 60;
          const groundW = 540;

          ctx.fillStyle = isLight ? '#fef3c7' : '#292524';
          ctx.fillRect(centerX - groundW / 2, soilSurfaceY, groundW, 220);

          ctx.strokeStyle = '#78350f';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(centerX - groundW / 2, soilSurfaceY);
          ctx.lineTo(centerX + groundW / 2, soilSurfaceY);
          ctx.stroke();

          ctx.fillStyle = '#a16207';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(isArabic ? 'سطح التربة الزراعية' : 'Soil Surface Line', centerX - groundW / 2 + 15, soilSurfaceY - 8);

          const depthPx = params.contractileRootDepth * 10;
          const cormX = centerX;
          const cormY = soilSurfaceY + depthPx + 20;

          ctx.strokeStyle = '#22c55e';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(cormX, cormY - 20);
          ctx.quadraticCurveTo(cormX - 25, soilSurfaceY - 20, cormX - 45, soilSurfaceY - 60);
          ctx.moveTo(cormX, cormY - 20);
          ctx.quadraticCurveTo(cormX + 25, soilSurfaceY - 20, cormX + 45, soilSurfaceY - 60);
          ctx.stroke();

          ctx.fillStyle = '#d97706';
          ctx.beginPath();
          ctx.ellipse(cormX, cormY, 34, 26, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#b45309';
          ctx.lineWidth = 2.5;
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(isArabic ? 'ساق البصلة / الكورمة' : 'Corm / Bulb Stem', cormX, cormY + 4);

          const rootCount = 5;
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 3;
          for (let i = 0; i < rootCount; i++) {
            const rx = cormX - 24 + i * 12;
            const ry = cormY + 24;
            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.lineTo(rx - 6, ry + 15);
            ctx.lineTo(rx + 6, ry + 30);
            ctx.lineTo(rx - 6, ry + 45);
            ctx.lineTo(rx, ry + 60);
            ctx.stroke();
          }

          ctx.strokeStyle = '#0284c7';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(cormX + 110, soilSurfaceY);
          ctx.lineTo(cormX + 110, cormY);
          ctx.stroke();

          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 12px monospace';
          ctx.textAlign = 'left';
          ctx.fillText(`h = ${params.contractileRootDepth} cm`, cormX + 120, (soilSurfaceY + cormY) / 2);
          ctx.font = 'bold 11px sans-serif';
          ctx.fillText(
            state.rootSafetyScore > 80
              ? isArabic ? '✅ عمق آمن يحمي الساق الهوائية من الرياح' : '✅ Safe depth against aerial wind/heat'
              : isArabic ? '⚠️ عمق غير كافٍ، معرض لاقتلاع الرياح' : '⚠️ Shallow depth, vulnerable to wind',
            cormX - 160,
            soilSurfaceY + 200
          );
          ctx.restore();
        } else {
          ctx.save();
          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 14px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(
            isArabic
              ? params.touchStimulusActive
                ? '⚡ حدث لمس: خروج سريع للماء وأيونات K⁺ من الانتفاخات → تدلي الوريقات وانحناء العنق'
                : 'نبات المستحية (Mimosa pudica) في وضع اليقظة والانبساط الطبيعي'
              : params.touchStimulusActive
              ? '⚡ Touch Stimulus: Sudden K⁺/H₂O efflux from pulvini → rapid drooping'
              : 'Mimosa pudica in relaxed diurnal posture (High Pulvinus Turgor)',
            centerX,
            centerY - 80
          );

          const pulvX = centerX - 100;
          const pulvY = centerY + 20;
          const droopAngle = params.touchStimulusActive ? Math.PI / 4 : 0;

          ctx.save();
          ctx.translate(pulvX, pulvY);
          ctx.rotate(droopAngle);

          ctx.fillStyle = params.touchStimulusActive ? '#94a3b8' : '#22c55e';
          ctx.beginPath();
          ctx.ellipse(0, 0, 16, 12, 0, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = '#15803d';
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(180, 0);
          ctx.stroke();

          const leafletAngle = params.touchStimulusActive ? Math.PI / 2.5 : Math.PI / 4;
          for (let j = 30; j <= 160; j += 25) {
            ctx.fillStyle = '#16a34a';
            ctx.beginPath();
            ctx.ellipse(j, -15 * Math.cos(leafletAngle), 14, 5, -leafletAngle, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(j, 15 * Math.cos(leafletAngle), 14, 5, leafletAngle, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
          ctx.restore();
        }
      }

      ctx.restore();
    },
    [params, state, isArabic, isLight, isContrast]
  );

  return (
    <VirtualLabShell
      definition={PLANT_HISTOLOGY_LAB_DEFINITION}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab as any}
      telemetry={telemetryMetrics}
      multimeterReading={dmmReading}
      oscilloscopeCh1={oscilloscopeSignals[0]}
      oscilloscopeCh2={oscilloscopeSignals[1]}
      currentXValue={state.netWaterPotential}
      currentYValue={state.turgorPressure}
      onResetSimulation={lab.resetParams}
    >
      <div className="space-y-6">
        {/* Top Module Subtab & DMM Mode Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 overflow-x-auto">
            {[
              { id: 'osmotic_physiology' as PlantSubTab, emoji: '💧', labelEn: '1. Physiological Support', labelAr: '١. الدعامة الفسيولوجية' },
              { id: 'structural_support' as PlantSubTab, emoji: '🧱', labelEn: '2. Structural Support', labelAr: '٢. الدعامة التركيبية' },
              { id: 'plant_movements' as PlantSubTab, emoji: '🌀', labelEn: '3. Plant Movements', labelAr: '٣. حركة النبات والشد' },
              { id: 'stem_histology' as PlantSubTab, emoji: '🔬', labelEn: '4. 400x Dicot Stem Atlas', labelAr: '٤. أطلس قطاع الساق 400x' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => updateParam('subTab', tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  params.subTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{tab.emoji}</span>
                <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-[10px]">
            <Compass className="w-3.5 h-3.5 text-emerald-400 ml-1.5 rtl:ml-0 rtl:mr-1.5" />
            {(['turgor_pressure', 'osmotic_potential', 'mechanical_rigidity', 'transpiration_rate'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setDmmMode(mode)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  dmmMode === mode
                    ? 'bg-emerald-600 text-white font-black'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {mode === 'turgor_pressure'
                  ? isArabic ? 'ضغط الامتلاء' : 'Turgor Ψ_p'
                  : mode === 'osmotic_potential'
                  ? isArabic ? 'الجهد الأسموزي' : 'Osmotic Ψ_s'
                  : mode === 'mechanical_rigidity'
                  ? isArabic ? 'الصلابة' : 'Rigidity'
                  : isArabic ? 'النتح' : 'Transpiration'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Simulation Viewport / Histology Atlas Display */}
        {params.subTab !== 'stem_histology' ? (
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 overflow-hidden shadow-xl bg-slate-950">
              <CanvasSimulationViewport
                id="plant-histology-viewport"
                lang={lang}
                minHeight={420}
                onRender={handleRenderViewport}
              />
            </div>

            {/* Quick Interactive Controls for Active Module */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{isArabic ? 'لوحة التحكم التفاعلية المباشرة:' : 'Direct Simulation Controls:'}</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {params.subTab === 'osmotic_physiology' && `Ψ_soil = ${params.soilWaterPotential} MPa`}
                  {params.subTab === 'structural_support' && `Force = ${params.appliedForce} N`}
                  {params.subTab === 'plant_movements' && `Coiling = ${params.tendrilCoilingProgress}%`}
                </span>
              </div>

              {/* Module 1 Controls: Solution Type & Water Potential */}
              {params.subTab === 'osmotic_physiology' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <button
                    onClick={() => setParams((p) => ({ ...p, solutionType: 'hypotonic', soilWaterPotential: 0.0 }))}
                    className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                      params.solutionType === 'hypotonic'
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    💧 {isArabic ? 'وسط مخفف (امتلاء وانتفاخ)' : 'Hypotonic (Turgid Expansion)'}
                  </button>
                  <button
                    onClick={() => setParams((p) => ({ ...p, solutionType: 'isotonic', soilWaterPotential: -0.8 }))}
                    className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                      params.solutionType === 'isotonic'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    ⚖️ {isArabic ? 'وسط متوازن (اتزان ديناميكي)' : 'Isotonic (Equilibrium)'}
                  </button>
                  <button
                    onClick={() => setParams((p) => ({ ...p, solutionType: 'hypertonic', soilWaterPotential: -2.0 }))}
                    className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                      params.solutionType === 'hypertonic'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    🥀 {isArabic ? 'وسط مركز (بلزمة وذبول)' : 'Hypertonic (Plasmolysis & Wilt)'}
                  </button>
                </div>
              )}

              {/* Module 2 Controls: Tissue Selector & Stress Slider */}
              {params.subTab === 'structural_support' && (
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'parenchyma' as PlantTissueType, labelEn: 'Parenchyma', labelAr: 'برنشيمي' },
                      { id: 'collenchyma' as PlantTissueType, labelEn: 'Collenchyma', labelAr: 'كولنشيمي' },
                      { id: 'sclerenchyma' as PlantTissueType, labelEn: 'Sclerenchyma', labelAr: 'إسكلرنشيمي' },
                      { id: 'epidermis' as PlantTissueType, labelEn: 'Epidermis', labelAr: 'بشرة + كيوتين' },
                    ].map((tis) => (
                      <button
                        key={tis.id}
                        onClick={() => updateParam('activeTissue', tis.id)}
                        className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          params.activeTissue === tis.id
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400'
                        }`}
                      >
                        {isArabic ? tis.labelAr : tis.labelEn}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 flex items-center justify-between mb-1">
                      <span>{isArabic ? 'قوة الإجهاد الميكانيكي (Bending Force):' : 'Mechanical Bending Force:'}</span>
                      <span className="font-mono text-rose-400">{params.appliedForce} N</span>
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={300}
                      step={10}
                      value={params.appliedForce}
                      onChange={(e) => updateParam('appliedForce', parseInt(e.target.value))}
                      className="w-full accent-rose-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Module 3 Controls: Movement Type & Coiling */}
              {params.subTab === 'plant_movements' && (
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'tendril' as MovementType, labelEn: 'Tendril Coiling', labelAr: 'الشد بالمحاليق' },
                      { id: 'contractile_roots' as MovementType, labelEn: 'Contractile Roots', labelAr: 'الجذور الشادة' },
                      { id: 'mimosa_touch' as MovementType, labelEn: 'Mimosa Touch', labelAr: 'اللمس بالمستحية' },
                    ].map((mov) => (
                      <button
                        key={mov.id}
                        onClick={() => updateParam('movementType', mov.id)}
                        className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          params.movementType === mov.id
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400'
                        }`}
                      >
                        {isArabic ? mov.labelAr : mov.labelEn}
                      </button>
                    ))}
                  </div>

                  {params.movementType === 'tendril' && (
                    <div className="flex items-center gap-4 flex-wrap">
                      <label className="flex items-center gap-2 text-xs font-bold text-slate-300 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={params.tendrilSupportPresent}
                          onChange={(e) => updateParam('tendrilSupportPresent', e.target.checked)}
                          className="w-4 h-4 accent-emerald-500 rounded"
                        />
                        <span>{isArabic ? 'وجود دعامة صلبة (Trellis Rod)' : 'Solid Trellis Support Present'}</span>
                      </label>
                      <div className="flex-1 min-w-[200px]">
                        <input
                          type="range"
                          min={0}
                          max={100}
                          step={5}
                          value={params.tendrilCoilingProgress}
                          onChange={(e) => updateParam('tendrilCoilingProgress', parseInt(e.target.value))}
                          className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                        />
                      </div>
                    </div>
                  )}

                  {params.movementType === 'contractile_roots' && (
                    <div>
                      <label className="text-[11px] font-bold text-slate-300 flex items-center justify-between mb-1">
                        <span>{isArabic ? 'عمق الكورمة/البصلة في التربة (Depth):' : 'Corm Depth in Soil:'}</span>
                        <span className="font-mono text-amber-400">{params.contractileRootDepth} cm</span>
                      </label>
                      <input
                        type="range"
                        min={0}
                        max={15}
                        step={1}
                        value={params.contractileRootDepth}
                        onChange={(e) => updateParam('contractileRootDepth', parseInt(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                      />
                    </div>
                  )}

                  {params.movementType === 'mimosa_touch' && (
                    <button
                      onClick={() => updateParam('touchStimulusActive', !params.touchStimulusActive)}
                      className={`w-full py-2.5 rounded-xl font-black text-xs border transition-all cursor-pointer ${
                        params.touchStimulusActive
                          ? 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/30'
                          : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {params.touchStimulusActive
                        ? isArabic ? '⚡ إنهاء المؤثر (استعادة الامتلاء تدريجياً)' : '⚡ Release Touch Stimulus (Recovering Turgor)'
                        : isArabic ? '👆 تطبيق لمس فوري للمحور والوريقات' : '👆 Tap Leaflet (Apply Immediate Touch)'}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* MODULE 4: HIGH-RESOLUTION DICOT STEM HISTOLOGY ATLAS */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: High-Res Interactive Microscopy View */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div
                className={`relative w-full rounded-2xl overflow-hidden border shadow-xl flex items-center justify-center p-2 group select-none ${
                  isContrast
                    ? 'bg-black border-rose-400'
                    : isLight
                    ? 'bg-slate-900 border-slate-300'
                    : 'bg-black/95 border-slate-800'
                }`}
              >
                <img
                  src={plantImg}
                  alt="Plant Stem Histology"
                  className="w-full max-h-[540px] object-cover rounded-xl transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                />

                {/* 10 Interactive Histological Layer Pins */}
                {HISTOLOGY_LAYERS.map((layer) => {
                  const isSelected = activePinId === layer.id;
                  return (
                    <button
                      key={layer.id}
                      onClick={() => {
                        setActivePinId(layer.id);
                        updateParam('selectedHistologyPin', layer.id);
                      }}
                      style={{ left: `${layer.pinX}%`, top: `${layer.pinY}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 z-20 group/pin ${
                        isSelected ? 'scale-125 z-30' : 'hover:scale-110 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border-2 shadow-lg ${
                          isSelected
                            ? 'bg-rose-500 border-white text-white animate-pulse'
                            : 'bg-slate-900/90 border-rose-400 text-rose-300'
                        }`}
                      >
                        <span className="text-[10px] font-black">
                          {isArabic ? toHindiDigits(HISTOLOGY_LAYERS.indexOf(layer) + 1) : HISTOLOGY_LAYERS.indexOf(layer) + 1}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-[11px] text-white">
                  <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Microscope className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'قطاع عرضي في ساق نبات ذي فلقتين (صباغة السافرانين والأخضر السريع)' : 'Dicot Stem Cross Section (Safranin & Fast Green 400x)'}</span>
                  </span>
                  <div className="flex items-center gap-1 text-slate-300">
                    <button
                      onClick={() => setZoomLevel((z) => Math.max(1.0, z - 0.15))}
                      className="px-2 py-0.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-mono text-[10px] px-1.5">{zoomLevel.toFixed(1)}x</span>
                    <button
                      onClick={() => setZoomLevel((z) => Math.min(1.8, z + 0.15))}
                      className="px-2 py-0.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Selected Layer Anatomical Breakdown Card */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className={`p-5 rounded-2xl border shadow-md space-y-3 ${
                  isContrast
                    ? 'bg-black border-yellow-400 text-white'
                    : isLight
                    ? 'bg-white border-slate-200 text-slate-800'
                    : 'bg-slate-900/90 border-slate-800 text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {isArabic ? activePin.categoryAr : activePin.categoryEn}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    {isArabic ? activePin.supportTypeAr : activePin.supportTypeEn}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-rose-400">
                    {isArabic ? activePin.nameAr : activePin.nameEn}
                  </h3>
                  <p className="text-xs mt-1 leading-relaxed text-slate-300">
                    {isArabic ? activePin.descriptionAr : activePin.descriptionEn}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="font-bold">{isArabic ? 'المادة المترسبة / الجدار:' : 'Thickening Substance:'}</span>
                    <span className="text-amber-400 font-semibold">{isArabic ? activePin.depositedSubstanceAr : activePin.depositedSubstanceEn}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 pt-1 border-t border-slate-800/60">
                    <span className="font-bold">{isArabic ? 'الحالة الحيوية للخلايا:' : 'Vital Cell Status:'}</span>
                    <span className="text-emerald-400 font-semibold">{isArabic ? activePin.cellStatusAr : activePin.cellStatusEn}</span>
                  </div>
                </div>

                {/* Ministerial Exam Tip Box */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-black text-amber-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'سؤال وزاري متكرر (ثانوية عامة وبكالوريا):' : 'Key Ministerial Exam Target Question:'}</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-amber-100/90">
                    {isArabic ? activePin.examTipsAr : activePin.examTipsEn}
                  </p>
                </div>

                {/* Pin Selector Mini-Grid */}
                <div className="pt-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {isArabic ? 'اختر طبقة نسيجية للفحص:' : 'Select Layer to Inspect:'}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto pr-1">
                    {HISTOLOGY_LAYERS.map((layer, idx) => (
                      <button
                        key={layer.id}
                        onClick={() => {
                          setActivePinId(layer.id);
                          updateParam('selectedHistologyPin', layer.id);
                        }}
                        className={`p-1.5 rounded-lg text-left rtl:text-right text-[11px] font-bold transition-all cursor-pointer truncate border ${
                          activePinId === layer.id
                            ? 'bg-rose-600 text-white border-rose-500'
                            : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {isArabic ? `${toHindiDigits(idx + 1)}. ${layer.nameAr}` : `${idx + 1}. ${layer.nameEn}`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </VirtualLabShell>
  );
};
