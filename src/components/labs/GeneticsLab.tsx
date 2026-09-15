import React, { useCallback, useMemo } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
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
  Dna,
  ChevronDown,
  Flame,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type GeneticsSubTab = 'dna_structure' | 'transcription_translation' | 'classical_genetics';
export type MutationType = 'none' | 'silent' | 'missense' | 'nonsense' | 'frameshift';
export type CrossType = 'mendel_monohybrid' | 'incomplete_dominance' | 'lethal_genes';
export type BloodType = 'A' | 'B' | 'AB' | 'O';
export type RhFactor = '+' | '-';

export interface GeneticsParams {
  subTab: GeneticsSubTab;
  dnaPresetId: string;
  customSequence: string;
  mutationType: MutationType;
  temperature: number; // 25°C to 95°C (thermal denaturation)
  isReplicating: boolean;
  crossType: CrossType;
  motherBlood: BloodType;
  motherRh: RhFactor;
  fatherBlood: BloodType;
  fatherRh: RhFactor;
}

export interface GeneticsSimState {
  sequenceLength: number;
  countA: number;
  countT: number;
  countG: number;
  countC: number;
  percentA: number;
  percentT: number;
  percentG: number;
  percentC: number;
  percentGC: number;
  purineCount: number; // A + G
  pyrimidineCount: number; // T + C
  purinePyrimidineRatio: number; // (A+G)/(T+C) = 1.00 for dsDNA
  meltingTempTm: number; // 69.3 + 0.41 * %GC
  denaturationFraction: number; // 0 to 1 based on temperature vs Tm
  absorbance260: number; // UV absorption peak
  absorbance280: number;
  purityRatio260_280: number; // A260/A280 ~ 1.80 for pure DNA
  dnaConcentrationNgUl: number;
  mrnaSequence: string;
  translatedPeptide: { code: string; aa: string; nameEn: string; nameAr: string }[];
  stopCodonHit: boolean;
}

// -------------------------------------------------------------
// DATA STRUCTURES: 64-CODON GENETIC CODE TABLE
// -------------------------------------------------------------
export const CODON_MAP: Record<
  string,
  { aa: string; nameEn: string; nameAr: string; isStop?: boolean; isStart?: boolean }
> = {
  AUG: { aa: 'Met', nameEn: 'Methionine (Start)', nameAr: 'ميثيونين (كودون البدء)', isStart: true },
  UUU: { aa: 'Phe', nameEn: 'Phenylalanine', nameAr: 'فينيل ألانين' },
  UUC: { aa: 'Phe', nameEn: 'Phenylalanine', nameAr: 'فينيل ألانين' },
  UUA: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  UUG: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  UCU: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UCC: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UCA: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UCG: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  UAU: { aa: 'Tyr', nameEn: 'Tyrosine', nameAr: 'تيروزين' },
  UAC: { aa: 'Tyr', nameEn: 'Tyrosine', nameAr: 'تيروزين' },
  UAA: { aa: 'STOP', nameEn: 'Ochre (Stop Codon)', nameAr: 'كودون وقف (UAA)', isStop: true },
  UAG: { aa: 'STOP', nameEn: 'Amber (Stop Codon)', nameAr: 'كودون وقف (UAG)', isStop: true },
  UGU: { aa: 'Cys', nameEn: 'Cysteine', nameAr: 'سيستئين' },
  UGC: { aa: 'Cys', nameEn: 'Cysteine', nameAr: 'سيستئين' },
  UGA: { aa: 'STOP', nameEn: 'Opal (Stop Codon)', nameAr: 'كودون وقف (UGA)', isStop: true },
  UGG: { aa: 'Trp', nameEn: 'Tryptophan', nameAr: 'تريبتوفان' },
  CUU: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  CUC: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  CUA: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  CUG: { aa: 'Leu', nameEn: 'Leucine', nameAr: 'ليوسين' },
  CCU: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين' },
  CCC: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين' },
  CCA: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين' },
  CCG: { aa: 'Pro', nameEn: 'Proline', nameAr: 'برولين' },
  CAU: { aa: 'His', nameEn: 'Histidine', nameAr: 'هيستيدين' },
  CAC: { aa: 'His', nameEn: 'Histidine', nameAr: 'هيستيدين' },
  CAA: { aa: 'Gln', nameEn: 'Glutamine', nameAr: 'جلوتامين' },
  CAG: { aa: 'Gln', nameEn: 'Glutamine', nameAr: 'جلوتامين' },
  CGU: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },
  CGC: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },
  CGA: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },
  CGG: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },
  AUU: { aa: 'Ile', nameEn: 'Isoleucine', nameAr: 'أيزوليوسين' },
  AUC: { aa: 'Ile', nameEn: 'Isoleucine', nameAr: 'أيزوليوسين' },
  AUA: { aa: 'Ile', nameEn: 'Isoleucine', nameAr: 'أيزوليوسين' },
  ACU: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين' },
  ACC: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين' },
  ACA: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين' },
  ACG: { aa: 'Thr', nameEn: 'Threonine', nameAr: 'ثريونين' },
  AAU: { aa: 'Asn', nameEn: 'Asparagine', nameAr: 'أسباراجين' },
  AAC: { aa: 'Asn', nameEn: 'Asparagine', nameAr: 'أسباراجين' },
  AAA: { aa: 'Lys', nameEn: 'Lysine', nameAr: 'ليسين' },
  AAG: { aa: 'Lys', nameEn: 'Lysine', nameAr: 'ليسين' },
  AGU: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  AGC: { aa: 'Ser', nameEn: 'Serine', nameAr: 'سيرين' },
  AGA: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },
  AGG: { aa: 'Arg', nameEn: 'Arginine', nameAr: 'أرجينين' },
  GUU: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين' },
  GUC: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين' },
  GUA: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين' },
  GUG: { aa: 'Val', nameEn: 'Valine', nameAr: 'فالين' },
  GCU: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GCC: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GCA: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GCG: { aa: 'Ala', nameEn: 'Alanine', nameAr: 'ألانين' },
  GAU: { aa: 'Asp', nameEn: 'Aspartic Acid', nameAr: 'حمض الأسبارتيك' },
  GAC: { aa: 'Asp', nameEn: 'Aspartic Acid', nameAr: 'حمض الأسبارتيك' },
  GAA: { aa: 'Glu', nameEn: 'Glutamic Acid', nameAr: 'حمض الجلوتاميك' },
  GAG: { aa: 'Glu', nameEn: 'Glutamic Acid', nameAr: 'حمض الجلوتاميك' },
  GGU: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين' },
  GGC: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين' },
  GGA: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين' },
  GGG: { aa: 'Gly', nameEn: 'Glycine', nameAr: 'جلايسين' },
};

// Curriculum DNA Gene Sequences
export const DNA_PRESETS = [
  {
    id: 'hemoglobin_beta',
    nameEn: 'Hemoglobin Beta Gene (Normal HbA)',
    nameAr: 'جين بيتا هيموجلوبين الطبيعي (HbA)',
    sequence: 'TACCTGACTCCTGAGGAGAAGTCT', // Template strand (3' to 5')
    descriptionEn: 'Normal human beta-globin gene fragment encoding Met-Asp-Glu-Leu-Leu-Phe-Arg',
    descriptionAr: 'قطعة من جين بيتا جلوبين الطبيعي في الإنسان',
  },
  {
    id: 'insulin_a_chain',
    nameEn: 'Human Insulin A-Chain',
    nameAr: 'سلسلة هرمون الإنسولين البشري A',
    sequence: 'TACGGCTACGGTTCCTACGTCATT',
    descriptionEn: 'Fragment of insulin A-chain initiating with AUG methionine start codon',
    descriptionAr: 'قطعة من جين هرمون الإنسولين تبدأ بكودون الميثيونين',
  },
  {
    id: 'bacteriophage_t4',
    nameEn: 'Bacteriophage T4 Viral DNA Fragment',
    nameAr: 'قطعة حمض نووي لفيروس لاقم البكتيريا (T4)',
    sequence: 'TACAAACGTTTCCGAAAGCACTAA',
    descriptionEn: 'High-AT bacteriophage fragment illustrating viral genetics and early termination',
    descriptionAr: 'قطعة جينية لفيروس الفاج توضح نسب القواعد والشفرة الوراثية',
  },
];

// -------------------------------------------------------------
// LAB DEFINITIONS & SCHEMAS
// -------------------------------------------------------------
const INITIAL_PARAMS: GeneticsParams = {
  subTab: 'dna_structure',
  dnaPresetId: 'hemoglobin_beta',
  customSequence: 'TACCTGACTCCTGAGGAGAAGTCT',
  mutationType: 'none',
  temperature: 37,
  isReplicating: false,
  crossType: 'mendel_monohybrid',
  motherBlood: 'A',
  motherRh: '-',
  fatherBlood: 'B',
  fatherRh: '+',
};

const GENETICS_PARAM_SCHEMA: LabParameterSchema<GeneticsParams> = {
  subTab: {
    key: 'subTab',
    labelEn: 'Genetics Domain',
    labelAr: 'المجال الوراثي',
    type: 'select',
    defaultValue: 'dna_structure',
    options: [
      { labelEn: 'DNA Structure & Chargaff Analysis', labelAr: 'تركيب DNA وقواعد تشارجاف', value: 'dna_structure' },
      { labelEn: 'Transcription & Translation Engine', labelAr: 'النسخ وتخليق البروتين والشفرة', value: 'transcription_translation' },
      { labelEn: 'Classical Genetics & Blood Groups', labelAr: 'الوراثة المندلية وفصائل الدم Rh', value: 'classical_genetics' },
    ],
    category: 'primary',
  },
  dnaPresetId: {
    key: 'dnaPresetId',
    labelEn: 'Curriculum DNA Gene',
    labelAr: 'الجين المنهجي المدروس',
    type: 'select',
    defaultValue: 'hemoglobin_beta',
    options: DNA_PRESETS.map((p) => ({
      labelEn: p.nameEn,
      labelAr: p.nameAr,
      value: p.id,
    })),
    category: 'primary',
    visibleIf: (p) => p.subTab !== 'classical_genetics',
  },
  customSequence: {
    key: 'customSequence',
    labelEn: 'DNA Sequence (3′ to 5′)',
    labelAr: 'تتابع شريط القالب (٣َ إلى ٥َ)',
    type: 'select',
    defaultValue: 'TACCTGACTCCTGAGGAGAAGTCT',
    options: [
      { labelEn: 'HbA Normal: TACCTGACTCCTGAGGAGAAGTCT', labelAr: 'هيموجلوبين سليم: TACCTGACTCCTGAGGAGAAGTCT', value: 'TACCTGACTCCTGAGGAGAAGTCT' },
      { labelEn: 'Insulin: TACGGCTACGGTTCCTACGTCATT', labelAr: 'إنسولين: TACGGCTACGGTTCCTACGTCATT', value: 'TACGGCTACGGTTCCTACGTCATT' },
      { labelEn: 'Phage: TACAAACGTTTCCGAAAGCACTAA', labelAr: 'فيروس الفاج: TACAAACGTTTCCGAAAGCACTAA', value: 'TACAAACGTTTCCGAAAGCACTAA' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab !== 'classical_genetics',
  },
  mutationType: {
    key: 'mutationType',
    labelEn: 'Induced Gene Mutation',
    labelAr: 'نوع الطفرة الجينية المستحثة',
    type: 'select',
    defaultValue: 'none',
    options: [
      { labelEn: 'None (Wild Type)', labelAr: 'بدون طفرة (الجين السليم الأصلي)', value: 'none' },
      { labelEn: 'Silent Mutation (Same amino acid)', labelAr: 'طفرة صامتة (نفس الحمض الأميني)', value: 'silent' },
      { labelEn: 'Missense Mutation (Sickle Cell HbS)', labelAr: 'طفرة استبدال (أنيميا الخلايا المنجلية HbS)', value: 'missense' },
      { labelEn: 'Nonsense Mutation (Premature Stop UAA)', labelAr: 'طفرة هراء (كودون وقف مبكر UAA)', value: 'nonsense' },
      { labelEn: 'Frameshift Mutation (+1 Insertion)', labelAr: 'طفرة إزاحة إطار القراءة (إضافة نيوكليوتيدة)', value: 'frameshift' },
    ],
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'transcription_translation',
  },
  temperature: {
    key: 'temperature',
    labelEn: 'Thermal Cycler Temperature',
    labelAr: 'درجة حرارة جهاز التدوير الحراري',
    type: 'number',
    defaultValue: 37,
    min: 25,
    max: 95,
    step: 1,
    unit: '°C',
    category: 'environmental',
    visibleIf: (p) => p.subTab === 'dna_structure',
  },
  isReplicating: {
    key: 'isReplicating',
    labelEn: 'Replication Enzymes Active',
    labelAr: 'تشغيل إنزيمات التضاعف (اللولب والبلمرة والربط)',
    type: 'boolean',
    defaultValue: false,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'dna_structure',
  },
  crossType: {
    key: 'crossType',
    labelEn: 'Mendelian Cross Mode',
    labelAr: 'نمط التهجين الوراثي',
    type: 'select',
    defaultValue: 'mendel_monohybrid',
    options: [
      { labelEn: 'Monohybrid Dominance (Tt × Tt -> 3:1)', labelAr: 'السيادة التامة (Tt × Tt -> ٣:١)', value: 'mendel_monohybrid' },
      { labelEn: 'Incomplete Dominance (RW × RW -> 1:2:1)', labelAr: 'انعدام السيادة (RW × RW -> ١:٢:١)', value: 'incomplete_dominance' },
      { labelEn: 'Lethal Genes (Yy × Yy -> 2:1)', labelAr: 'الجينات المميتة (Yy × Yy -> ٢:١)', value: 'lethal_genes' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'classical_genetics',
  },
  motherBlood: {
    key: 'motherBlood',
    labelEn: 'Mother Blood Group',
    labelAr: 'فصيلة دم الأم',
    type: 'select',
    defaultValue: 'A',
    options: [
      { labelEn: 'Type A', labelAr: 'فصيلة A', value: 'A' },
      { labelEn: 'Type B', labelAr: 'فصيلة B', value: 'B' },
      { labelEn: 'Type AB', labelAr: 'فصيلة AB', value: 'AB' },
      { labelEn: 'Type O', labelAr: 'فصيلة O', value: 'O' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'classical_genetics',
  },
  motherRh: {
    key: 'motherRh',
    labelEn: 'Mother Rh Factor',
    labelAr: 'عامل ريسوس للأم (Rh)',
    type: 'select',
    defaultValue: '-',
    options: [
      { labelEn: 'Rh Positive (+)', labelAr: 'موجب (+) Rh', value: '+' },
      { labelEn: 'Rh Negative (-)', labelAr: 'سالب (-) Rh', value: '-' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'classical_genetics',
  },
  fatherBlood: {
    key: 'fatherBlood',
    labelEn: 'Father Blood Group',
    labelAr: 'فصيلة دم الأب',
    type: 'select',
    defaultValue: 'B',
    options: [
      { labelEn: 'Type A', labelAr: 'فصيلة A', value: 'A' },
      { labelEn: 'Type B', labelAr: 'فصيلة B', value: 'B' },
      { labelEn: 'Type AB', labelAr: 'فصيلة AB', value: 'AB' },
      { labelEn: 'Type O', labelAr: 'فصيلة O', value: 'O' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'classical_genetics',
  },
  fatherRh: {
    key: 'fatherRh',
    labelEn: 'Father Rh Factor',
    labelAr: 'عامل ريسوس للأب (Rh)',
    type: 'select',
    defaultValue: '+',
    options: [
      { labelEn: 'Rh Positive (+)', labelAr: 'موجب (+) Rh', value: '+' },
      { labelEn: 'Rh Negative (-)', labelAr: 'سالب (-) Rh', value: '-' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'classical_genetics',
  },
};

const GENETICS_PRESETS: LabPreset<GeneticsParams>[] = [
  {
    id: 'preset_dna_chargaff',
    nameEn: 'DNA Double Helix & Chargaff Equivalence',
    nameAr: 'التركيب المزدوج لـ DNA وقواعد تشارجاف',
    descriptionEn: 'Watson-Crick antiparallel strands with A=T and G≡C base pairing and spectrophotometry.',
    descriptionAr: 'شريطا DNA المتعاكسان وازدواج القواعد المتكاملة والتحليل الطيفي.',
    badge: 'Molecular',
    params: {
      subTab: 'dna_structure',
      customSequence: 'TACCTGACTCCTGAGGAGAAGTCT',
      mutationType: 'none',
      temperature: 37,
    },
  },
  {
    id: 'preset_protein_translation',
    nameEn: 'mRNA Transcription & Ribosomal Translation',
    nameAr: 'نسخ mRNA وتخليق عديد الببتيد بالريبوسوم',
    descriptionEn: 'Translating mRNA codons using tRNA anticodons into nascent polypeptide chain.',
    descriptionAr: 'ترجمة كودونات mRNA بواسطة tRNA إلى سلسلة عديد ببتيد تبدأ بالميثيونين.',
    badge: 'Translation',
    params: {
      subTab: 'transcription_translation',
      customSequence: 'TACCTGACTCCTGAGGAGAAGTCT',
      mutationType: 'none',
    },
  },
  {
    id: 'preset_sickle_mutation',
    nameEn: 'Sickle Cell Missense Point Mutation (GAG -> GUG)',
    nameAr: 'طفرة أنيميا الخلايا المنجلية (استبدال حمض الجلوتاميك بالفالين)',
    descriptionEn: 'Demonstrates missense point mutation causing sickle cell anemia in human hemoglobin beta.',
    descriptionAr: 'طفرة جينية نقطية تستبدل الجلوتاميك بالفالين في سلسلة بيتا هيموجلوبين.',
    badge: 'Mutation',
    params: {
      subTab: 'transcription_translation',
      customSequence: 'TACCTGACTCCTGAGGAGAAGTCT',
      mutationType: 'missense',
    },
  },
  {
    id: 'preset_rh_incompatibility',
    nameEn: 'Rh Incompatibility Clinical Scenario',
    nameAr: 'حالة عدم توافق عامل ريسوس والأجنة (Rh⁻ الأم و Rh⁺ الأب)',
    descriptionEn: 'Sensitization of Rh- mother by first Rh+ child leading to erythroblastosis in second fetus.',
    descriptionAr: 'حساسية الأم سالبة Rh عند ولادة أول طفل موجب وخطر تكسير دم الجنين الثاني.',
    badge: 'Clinical',
    params: {
      subTab: 'classical_genetics',
      motherBlood: 'A',
      motherRh: '-',
      fatherBlood: 'B',
      fatherRh: '+',
    },
  },
];

// -------------------------------------------------------------
// POE PROMPTS: 3 CURRICULUM CHALLENGES
// -------------------------------------------------------------
const GENETICS_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_chargaff_singlestrand',
    titleEn: 'Chargaff Equivalence: Double vs Single-Stranded Nucleic Acids',
    titleAr: 'قواعد تشارجاف: التمييز بين شريط DNA المفرد والمزدوج',
    scenarioEn:
      'A biochemist isolates nucleic acid from an uncharacterized virus and determines base composition: Adenine = 28%, Thymine = 22%, Guanine = 35%, Cytosine = 15%.',
    scenarioAr:
      'قام باحث بعزل حمض نووي من فيروس مجهول وتحديد نسب القواعد النيتروجينية: الأدينين = ٢٨٪، الثايمين = ٢٢٪، الجوانين = ٣٥٪، السيتوزين = ١٥٪.',
    questionEn:
      'What is the precise structural nature of this genetic material according to the Egyptian curriculum?',
    questionAr:
      'ما هي الطبيعة التركيبية الدقيقة لهذا الحمض النووي وفق منهج الثانوية العامة؟',
    optionsEn: [
      'Single-stranded DNA (ssDNA), because %A ≠ %T and %G ≠ %C despite containing Thymine.',
      'Double-stranded DNA (dsDNA), because it contains Thymine instead of Uracil.',
      'Single-stranded RNA (ssRNA), because purines do not equal pyrimidines.',
      'Double-stranded RNA (dsRNA) with an unequal hybridization envelope.',
    ],
    optionsAr: [
      'حمض نووي DNA مفرد الشريط (ssDNA)، لأن نسبة A ≠ T ونسبة G ≠ C رغم احتوائه على الثايمين بدلاً من اليوراسيل.',
      'حمض نووي DNA مزدوج الشريط، لاحتوائه على قاعدة الثايمين المميزة للـ DNA.',
      'حمض نووي RNA مفرد الشريط، لعدم تساوي البيورينات مع البريميدينات.',
      'حمض نووي هجين غير مكتمل الازدواج.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'In double-stranded DNA, Chargaff\'s rule strictly dictates %A = %T (forming 2 H-bonds) and %G = %C (forming 3 H-bonds), making total purines (A+G) equal to total pyrimidines (T+C) = 50%. Since %A (28%) ≠ %T (22%) and %G (35%) ≠ %C (15%), the molecule cannot possess complementary base-paired double strands; however, because it contains Thymine rather than Uracil, it is definitively single-stranded DNA (ssDNA).',
    scientificExplanationAr:
      'في جزيء DNA المزدوج، تنص قواعد تشارجاف بشكل صارم على تساوي نسبة الأدينين مع الثايمين (%A = %T) والجوانين مع السيتوزين (%G = %C) لتساوي البيورينات مع البريميدينات (٥٠٪ لكل منهما). وبما أن نسبة A (٢٨٪) لا تساوي T (٢٢٪) ونسبة G (٣٥٪) لا تساوي C (١٥٪)، فهذا يثبت عدم وجود شريط مكمل، ولوجود الثايمين فالحمض النووي هو DNA مفرد الشريط قطعي الدلالة.',
  },
  {
    id: 'poe_nonsense_termination',
    titleEn: 'Nonsense Mutation & Releasing Factor Binding',
    titleAr: 'طفرة كودون الوقف وارتباط عامل الإطلاق',
    scenarioEn:
      'A point mutation in an mRNA transcript converts codon 15 from UAU (Tyrosine) into UAA. The full mRNA molecule contains 120 codons.',
    scenarioAr:
      'حدثت طفرة جينية نقطية في جزيء mRNA أدت لتحول الكودون رقم ١٥ من UAU (تيروزين) إلى UAA، علماً بأن طول الجزيء الأصلي ١٢٠ كودوناً.',
    questionEn:
      'What is the immediate molecular consequence on protein synthesis and the resulting polypeptide chain?',
    questionAr:
      'ما هي النتيجة الجزيئية المباشرة على عملية تخليق البروتين وسلسلة عديد الببتيد الناتجة؟',
    optionsEn: [
      'Translation terminates immediately at codon 15 via Releasing Factor binding, producing a truncated 14-amino acid peptide.',
      'The ribosome skips the UAA codon and resumes translating the remaining 105 codons normally.',
      'A modified mutant tyrosine is incorporated, producing a full-length protein.',
      'The mRNA is replicated in reverse by RNA polymerase.',
    ],
    optionsAr: [
      'تتوقف الترجمة فوراً عند الكودون ١٥ بارتباط عامل الإطلاق (Releasing Factor)، وتنتج سلسلة عديد ببتيد مبتورة وقصيرة من ١٤ حمضاً أمينياً فقط.',
      'يتخطى الريبوسوم كودون UAA ويستأنف ترجمة باقي الكودونات الـ ١٠٥ بصورة طبيعية.',
      'يتم دمج حمض أميني بديل وتكتمل السلسلة البروتينية كاملة.',
      'يقوم إنزيم بلمرة RNA بنسخ الجزيء بالاتجاه المعاكس.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'UAA is one of the three universal stop codons (along with UAG and UGA). No tRNA possesses an anticodon complementary to stop codons. Instead, a specific protein known as the Releasing Factor (عامل الإطلاق) binds to the stop codon in the ribosomal A-site, triggering peptidyl transferase to hydrolyze the ester bond between the peptide and tRNA, releasing a prematurely truncated 14-amino acid polypeptide.',
    scientificExplanationAr:
      'كودون UAA هو أحد كودونات الوقف الثلاثة (UAA, UAG, UGA) التي لا توجد لها جزيئات tRNA حاملة لمضادات كودونات مقابلة. بدلاً من ذلك، يرتبط بروتين يسمى "عامل الإطلاق" بكودون الوقف في الموقع A للريبوسوم، مما يحث إنزيم نقل الببتيديل على فصل سلسلة عديد الببتيد، فتتوقف الترجمة عند الحمض الأميني ١٤ وتنتج سلسلة قصيرة مبتورة عديمة الفائدة.',
  },
  {
    id: 'poe_rh_sensitization',
    titleEn: 'Erythroblastosis Fetalis: Maternal IgG Transplacental Transfer',
    titleAr: 'تحلل دم الأجنة: حساسية الأم سالبة عامل ريسوس وانتقال الأجسام المضادة',
    scenarioEn:
      'An Rh-negative mother marries an Rh-positive heterozygous father. She delivers an Rh-positive first child without complications and without receiving anti-Rh immune globulin (Rhogam). She is now pregnant with her second child, who is also Rh-positive.',
    scenarioAr:
      'تزوجت امرأة سالبة عامل ريسوس (Rh⁻) من رجل موجب عامل ريسوس هجين، وأنجبت طفلاً أول موجب عامل ريسوس بسلام دون أن تُحقن بالمصل الواقي خلال ٧٢ ساعة. والآن هي حامل بطفلها الثاني الذي ثبت أنه موجب عامل ريسوس أيضاً.',
    questionEn:
      'Why is the second Rh-positive fetus at grave risk of hemolytic anemia while the first child was born completely healthy?',
    questionAr:
      'لماذا يتعرض الجنين الثاني لخطر تكسر كرات الدم الحمراء والموت بينما ولد الطفل الأول سليماً معافى؟',
    optionsEn: [
      'During first delivery, fetal Rh+ blood entered maternal circulation stimulating anti-Rh IgG production; these antibodies now cross placenta destroying second fetal RBCs.',
      'The mother becomes Rh-positive after the first pregnancy and rejects the second fetus.',
      'The father changes his genotype between pregnancies from heterozygous to homozygous.',
      'The second fetus lacks amniotic fluid due to Rh factor incompatibility.',
    ],
    optionsAr: [
      'أثناء ولادة الطفل الأول اختلط جزء من دمه بدم الأم فتكونت لديها أجسام مضادة لعامل ريسوس (Anti-Rh من نوع IgG)، وتنتقل هذه الأجسام عبر المشيمة لتكسر دم الجنين الثاني.',
      'تتحول الأم بعد الولادة الأولى إلى فصيلة موجبة مما يؤدي لرفض مناعي للأجنة.',
      'يتغير الطراز الجيني للأب بين الحملين من هجين إلى نقي.',
      'يقل السائل الرهلي المحيط بالجنين بسبب عدم توافق فصيلة الدم.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'During placental separation in the first birth, fetal Rh+ erythrocytes cross into maternal circulation. Since the mother is Rh-, her immune system recognizes the Rh D-antigen as foreign, generating memory B cells and anti-Rh IgG antibodies. In subsequent Rh+ pregnancies, maternal anti-Rh IgG antibodies cross the placenta via active transport, binding to fetal erythrocytes and causing massive hemolysis (erythroblastosis fetalis). This is prevented by administering anti-Rh serum within 72 hours of first delivery to clear fetal RBCs before maternal immunization.',
    scientificExplanationAr:
      'عند انفصال المشيمة في الولادة الأولى، يتسرب جزء من دم الجنين الموجب إلى دم الأم السالبة، فيعتبره جهازها المناعي جسماً غريباً ويكون خلايا ذاكرة وأجساماً مضادة (Anti-Rh). في الحمل الثاني بجنين موجب، تنتقل هذه الأجسام المضادة الجاهزة من دم الأم عبر المشيمة إلى دم الجنين فتلتصق بكرات دمه الحمراء وتكسرها مسببة أنيميا حادة وموت الجنين، ويتم تلافي ذلك بحقن الأم بالمصل خلال ٧٢ ساعة من الولادة الأولى.',
  },
];

const GENETICS_LAB_DEF: LabDefinition<GeneticsParams, GeneticsSimState> = {
  id: 'genetics-lab',
  subject: 'biology',
  chapterRef: 'Chapter 5 & 6: Molecular Genetics, DNA Structure, Protein Synthesis & Inheritance',
  titleEn: 'Molecular Genetics & Protein Synthesis Workbench',
  titleAr: 'معمل البيولوجيا الجزيئية وتخليق البروتين والوراثة',
  subtitleEn: 'Interactive Watson-Crick DNA Double Helix, Chargaff Spectrophotometry, 64-Codon Translation & Mendelian Inheritance',
  subtitleAr: 'النموذج الجزيئي المزدوج لـ DNA، قواعد تشارجاف، محاكي الترجمة والجينات، وفصائل الدم وعامل ريسوس',
  taglineEn: 'Tier-1 Molecular Genetics & Inheritance Platform',
  taglineAr: 'المنظومة المعملية المعتمدة للبيولوجيا الجزيئية والوراثة للثانوية العامة',

  objectives: [
    {
      id: 'obj-chargaff',
      textEn: 'Analyze the antiparallel Watson-Crick DNA double helix, Chargaff purine/pyrimidine equivalence, and thermal melting Tm.',
      textAr: 'تحليل نموذج واطسون وكريك لشريطي DNA المتعاكسين وتساوي البيورينات والبريميدينات ودرجة حرارة الانصهار Tm.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj-translation',
      textEn: 'Simulate DNA-to-mRNA transcription and 64-codon ribosomal translation with start/stop codons and mutational impact.',
      textAr: 'محاكاة نسخ mRNA وترجمته بالريبوسوم عبر الشفرة الوراثية وتوضيح تأثير الطفرات الجينية المستحدثة.',
      bloomLevel: 'apply',
    },
    {
      id: 'obj-inheritance',
      textEn: 'Deduce phenotypic and genotypic ratios in monohybrid crosses, incomplete dominance, lethal genes, and Rh incompatibility.',
      textAr: 'استنتاج النسب الوراثية للسيادة التامة وانعدام السيادة والجينات المميتة وحساب فصائل الدم ومخاطر عامل ريسوس.',
      bloomLevel: 'evaluate',
    },
  ],

  safetyWarnings: [
    {
      id: 'warn-uv-radiation',
      titleEn: 'UV Transilluminator Radiation Hazard',
      titleAr: 'تحذير الأشعة فوق البنفسجية UV',
      messageEn: 'UV light at 260 nm damages cellular DNA. Always use acrylic UV shielding and protective eyewear.',
      messageAr: 'الأشعة فوق البنفسجية عند 260 نانومتر تسبب تلفاً في DNA؛ يلزم ارتداء نظارات واقية واستخدام حائل أكريليك.',
      severity: 'warning',
    },
  ],

  keyFormulas: [
    {
      id: 'eq-chargaff',
      labelEn: "Chargaff's Base Pairing Equivalence",
      labelAr: 'قواعد تشارجاف لتساوي القواعد النيتروجينية',
      tex: '\\%A + \\%G = \\%T + \\%C = 50\\% \\implies \\frac{\\text{Purines}}{\\text{Pyrimidines}} = 1.00',
      descriptionEn: 'In double-stranded DNA, the sum of purines (A+G) strictly equals the sum of pyrimidines (T+C).',
      descriptionAr: 'في جزيء DNA المزدوج، تتساوى نسبة القواعد البيورينية (A+G) مع البريميدينية (T+C) بنسبة ١:١ (٥٠٪ لكل منهما).',
    },
    {
      id: 'eq-tm',
      labelEn: 'DNA Thermal Melting Temperature (Tm)',
      labelAr: 'درجة حرارة انصهار وانفصال شريطي DNA',
      tex: 'T_m = 69.3 + 0.41 \\times (\\%GC)^\\circ\\text{C}',
      descriptionEn: 'The melting temperature increases with GC content due to three hydrogen bonds per G-C pair versus two for A-T.',
      descriptionAr: 'ترتفع درجة حرارة انصهار DNA طردياً مع زيادة نسبة زوج القواعد G-C لوجود ٣ روابط هيدروجينية مقارنة برابطتين في A-T.',
    },
    {
      id: 'eq-blood',
      labelEn: 'Multiple Alleles Genotypic Combinations',
      labelAr: 'توارث فصائل الدم (تعدد البدائل والسيادة المشتركة)',
      tex: 'I^A I^B \\implies \\text{Codominance AB}, \\quad I^A i \\implies \\text{Type A}, \\quad ii \\implies \\text{Type O}',
      descriptionEn: 'ABO blood types exhibit codominance between IA and IB, and complete dominance over the recessive i allele.',
      descriptionAr: 'تجمع فصائل الدم بين السيادة المشتركة بين A و B، والسيادة التامة لكلا الجينين على الجين المتنحي i.',
    },
  ],

  defaultParams: INITIAL_PARAMS,
  paramSchema: GENETICS_PARAM_SCHEMA,
  presets: GENETICS_PRESETS,
  poePrompts: GENETICS_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Temperature / Translocation Step',
    xLabelAr: 'درجة الحرارة / خطوة الانتقال',
    xUnit: '°C',
    yLabelEn: 'UV Absorbance (A260) / Denaturation %',
    yLabelAr: 'الامتصاص الضوئي / نسبة الانفصال %',
    yUnit: '%',
  },
};

// -------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------
export const GeneticsLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';

  const lab = useVirtualLab<GeneticsParams, GeneticsSimState>({
    definition: GENETICS_LAB_DEF,
  });

  const { params, updateParam, updateParams, resetParams } = lab;

  // Process nucleotide sequence based on mutation
  const activeDnaTemplate = useMemo(() => {
    let seq = params.customSequence.toUpperCase().replace(/[^ATGC]/g, '');
    if (!seq) seq = 'TACCTGACTCCTGAGGAGAAGTCT';

    if (params.mutationType === 'silent') {
      // GAA -> GAG (both encode Glu)
      seq = seq.replace('GAG', 'GAA');
    } else if (params.mutationType === 'missense') {
      // GAG (Glu) -> GTG (Val) => Sickle cell
      seq = seq.replace('CTC', 'CAC');
    } else if (params.mutationType === 'nonsense') {
      // Introduce ATC (transcribes to UAG stop) or ATT (transcribes to UAA stop)
      if (seq.length >= 12) {
        seq = seq.substring(0, 9) + 'ATT' + seq.substring(12);
      }
    } else if (params.mutationType === 'frameshift') {
      // Insert single base 'A' at position 6
      seq = seq.substring(0, 6) + 'A' + seq.substring(6);
    }
    return seq;
  }, [params.customSequence, params.mutationType]);

  // Derive simulation state metrics
  const simState = useMemo<GeneticsSimState>(() => {
    const seq = activeDnaTemplate;
    const len = seq.length;

    let cA = 0, cT = 0, cG = 0, cC = 0;
    for (const b of seq) {
      if (b === 'A') cA++;
      else if (b === 'T') cT++;
      else if (b === 'G') cG++;
      else if (b === 'C') cC++;
    }

    const pA = len ? (cA / len) * 100 : 25;
    const pT = len ? (cT / len) * 100 : 25;
    const pG = len ? (cG / len) * 100 : 25;
    const pC = len ? (cC / len) * 100 : 25;
    const pGC = len ? ((cG + cC) / len) * 100 : 50;

    const purines = cA + cG;
    const pyrimidines = cT + cC;
    const ratio = pyrimidines ? purines / pyrimidines : 1.0;

    // Thermal melting Tm = 69.3 + 0.41 * %GC
    const tm = parseFloat((69.3 + 0.41 * pGC).toFixed(1));

    // Sigmoidal denaturation curve
    const k = 2.5;
    const denaturationFraction = Math.min(
      1.0,
      Math.max(0.0, 1.0 / (1.0 + Math.exp(-(params.temperature - tm) / k)))
    );

    // Hyperchromic effect: dsDNA absorbs less UV at 260nm than denatured ssDNA
    const baselineA260 = 0.85;
    const a260 = parseFloat((baselineA260 * (1 + 0.38 * denaturationFraction)).toFixed(3));
    const a280 = parseFloat((a260 / 1.80).toFixed(3));
    const purity = 1.80;
    const concentration = parseFloat((a260 * 50).toFixed(1)); // 1 A260 = 50 ng/uL dsDNA

    // Transcription to mRNA (Template 3'->5' to mRNA 5'->3': A->U, T->A, C->G, G->C)
    let mrna = '';
    for (const b of seq) {
      if (b === 'T') mrna += 'A';
      else if (b === 'A') mrna += 'U';
      else if (b === 'C') mrna += 'G';
      else if (b === 'G') mrna += 'C';
    }

    // Translation of mRNA codons (triplets)
    const translated: { code: string; aa: string; nameEn: string; nameAr: string }[] = [];
    let hitStop = false;

    for (let i = 0; i + 2 < mrna.length; i += 3) {
      const codon = mrna.substring(i, i + 3);
      const mapped = CODON_MAP[codon] || {
        aa: 'X',
        nameEn: 'Unknown',
        nameAr: 'غير معروف',
      };

      translated.push({
        code: codon,
        aa: mapped.aa,
        nameEn: mapped.nameEn,
        nameAr: mapped.nameAr,
      });

      if (mapped.isStop) {
        hitStop = true;
        break; // Stop translating at first stop codon
      }
    }

    return {
      sequenceLength: len,
      countA: cA,
      countT: cT,
      countG: cG,
      countC: cC,
      percentA: parseFloat(pA.toFixed(1)),
      percentT: parseFloat(pT.toFixed(1)),
      percentG: parseFloat(pG.toFixed(1)),
      percentC: parseFloat(pC.toFixed(1)),
      percentGC: parseFloat(pGC.toFixed(1)),
      purineCount: purines,
      pyrimidineCount: pyrimidines,
      purinePyrimidineRatio: parseFloat(ratio.toFixed(2)),
      meltingTempTm: tm,
      denaturationFraction,
      absorbance260: a260,
      absorbance280: a280,
      purityRatio260_280: purity,
      dnaConcentrationNgUl: concentration,
      mrnaSequence: mrna,
      translatedPeptide: translated,
      stopCodonHit: hitStop,
    };
  }, [activeDnaTemplate, params.temperature]);

  // Telemetry metrics
  const telemetry = useMemo<LabTelemetryMetric[]>(() => {
    return [
      {
        id: 'tm',
        labelEn: 'Melting Point (Tm)',
        labelAr: 'درجة حرارة الانصهار (Tm)',
        value: simState.meltingTempTm,
        unit: '°C',
        precision: 1,
      },
      {
        id: 'gcContent',
        labelEn: 'GC Base Content',
        labelAr: 'نسبة القواعد (G+C)',
        value: simState.percentGC,
        unit: '%',
        precision: 1,
      },
      {
        id: 'a260',
        labelEn: 'UV Absorbance (A260)',
        labelAr: 'الامتصاص الطيفي (A260)',
        value: simState.absorbance260,
        unit: 'OD',
        precision: 3,
      },
      {
        id: 'peptideLength',
        labelEn: 'Peptide Length',
        labelAr: 'عدد الأحماض الأمينية',
        value: simState.translatedPeptide.filter((p) => p.aa !== 'STOP').length,
        unit: 'AA',
        precision: 0,
      },
    ];
  }, [simState]);

  // Multimeter reading for spectrophotometer / Tm analyzer
  const multimeterReading: DMMReading = useMemo(() => ({
    mode: 'DCV',
    value: simState.meltingTempTm,
    displayString: `${simState.meltingTempTm.toFixed(1)} °C`,
    secondaryString: `A260: ${simState.absorbance260} | A260/A280: 1.80 | %GC: ${simState.percentGC}%`,
    unit: '°C',
    voltageDC: simState.meltingTempTm,
    voltageAC: 0.0,
    currentDC: simState.absorbance260,
    resistance: simState.dnaConcentrationNgUl,
    continuityBeep: false,
    isOverload: false,
  }), [simState]);

  // Dual-trace oscilloscope / Spectrogram
  const oscilloscopeCh1: WaveformSignal = useMemo(() => ({
    id: 'ch1',
    label: isArabic ? 'طيف امتصاص الأشعة فوق البنفسجية (A260)' : 'UV Absorbance Spectrum (Peak 260 nm)',
    color: '#38bdf8',
    amplitude: simState.absorbance260 * 3,
    frequency: 1.5,
    phase: 0,
    phaseDeg: 0,
    type: 'sine',
  }), [simState.absorbance260, isArabic]);

  const oscilloscopeCh2: WaveformSignal = useMemo(() => ({
    id: 'ch2',
    label: isArabic ? `منحنى الانفصال الحراري (Tm = ${simState.meltingTempTm}°C)` : `Thermal Denaturation (Tm = ${simState.meltingTempTm}°C)`,
    color: '#f59e0b',
    amplitude: simState.denaturationFraction * 4,
    frequency: 0.8,
    phase: 0,
    phaseDeg: 0,
    type: 'triangle',
  }), [simState.denaturationFraction, simState.meltingTempTm, isArabic]);

  // -------------------------------------------------------------
  // HIGH-DPI CANVAS 2D SIMULATION VIEWPORT (60 - 120 FPS)
  // -------------------------------------------------------------
  const renderSimulation = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _viewport: LabViewportState,
      _dpr: number
    ) => {
      ctx.clearRect(0, 0, width, height);

      // Gradient background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (isLight) {
        bgGrad.addColorStop(0, '#f8fafc');
        bgGrad.addColorStop(1, '#e2e8f0');
      } else {
        bgGrad.addColorStop(0, '#090d16');
        bgGrad.addColorStop(1, '#020617');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle biological grid
      ctx.strokeStyle = isLight ? 'rgba(100, 116, 139, 0.12)' : 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // ---------------------------------------------------------
      // RENDER MODE 1: DNA DOUBLE HELIX & REPLICATION FORK
      // ---------------------------------------------------------
      if (params.subTab === 'dna_structure') {
        const centerY = height / 2;
        const seq = activeDnaTemplate;
        const totalBases = Math.min(seq.length, 16);

        const strandSeparation = params.isReplicating || simState.denaturationFraction > 0.5
          ? 90 + simState.denaturationFraction * 60
          : 60;

        const startX = 60;
        const stepX = (width - 120) / Math.max(1, totalBases - 1);

        // Draw Watson-Crick DNA strands
        ctx.lineWidth = 3;

        // Top Strand (3' to 5' Template)
        ctx.strokeStyle = '#38bdf8'; // Cyan
        ctx.beginPath();
        for (let i = 0; i < totalBases; i++) {
          const x = startX + i * stepX;
          const y = centerY - strandSeparation / 2 + Math.sin(i * 0.8) * 15;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Bottom Strand (5' to 3' Complement)
        ctx.strokeStyle = '#f43f5e'; // Rose
        ctx.beginPath();
        for (let i = 0; i < totalBases; i++) {
          const x = startX + i * stepX;
          const y = centerY + strandSeparation / 2 - Math.sin(i * 0.8) * 15;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Strand Direction Badges
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 12px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.fillText("3'", startX - 15, centerY - strandSeparation / 2);
        ctx.fillText("5'", startX + (totalBases - 1) * stepX + 30, centerY - strandSeparation / 2);

        ctx.fillStyle = '#f43f5e';
        ctx.fillText("5'", startX - 15, centerY + strandSeparation / 2);
        ctx.fillText("3'", startX + (totalBases - 1) * stepX + 30, centerY + strandSeparation / 2);

        // Draw Base Pairs & Hydrogen Bonds
        for (let i = 0; i < totalBases; i++) {
          const x = startX + i * stepX;
          const topY = centerY - strandSeparation / 2 + Math.sin(i * 0.8) * 15;
          const botY = centerY + strandSeparation / 2 - Math.sin(i * 0.8) * 15;

          const baseTop = seq[i];
          const baseBot = baseTop === 'A' ? 'T' : baseTop === 'T' ? 'A' : baseTop === 'G' ? 'C' : 'G';
          const isGC = baseTop === 'G' || baseTop === 'C';

          // Color for base: A = emerald, T = amber, G = cyan, C = rose
          const getBaseColor = (b: string) =>
            b === 'A' ? '#10b981' : b === 'T' ? '#f59e0b' : b === 'G' ? '#06b6d4' : '#f43f5e';

          // Hydrogen bonds lines if not denatured
          if (simState.denaturationFraction < 0.7) {
            ctx.strokeStyle = isLight ? 'rgba(148, 163, 184, 0.7)' : 'rgba(255, 255, 255, 0.25)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash(isGC ? [2, 2] : [4, 4]); // 3 bonds vs 2 bonds
            ctx.beginPath();
            ctx.moveTo(x, topY + 12);
            ctx.lineTo(x, botY - 12);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          // Top Base Circle
          ctx.fillStyle = getBaseColor(baseTop);
          ctx.beginPath();
          ctx.arc(x, topY, 12, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(baseTop, x, topY);

          // Bottom Base Circle
          ctx.fillStyle = getBaseColor(baseBot);
          ctx.beginPath();
          ctx.arc(x, botY, 12, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.fillText(baseBot, x, botY);
        }

        // Header Title
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(
          isArabic
            ? `شريطا DNA المتعاكسان: A=${simState.percentA}% ، T=${simState.percentT}% ، G=${simState.percentG}% ، C=${simState.percentC}%`
            : `Watson-Crick Antiparallel dsDNA: A=${simState.percentA}% | T=${simState.percentT}% | G=${simState.percentG}% | C=${simState.percentC}%`,
          width / 2,
          25
        );

        // Status annotation at bottom
        ctx.fillStyle = simState.denaturationFraction > 0.5 ? '#f43f5e' : '#10b981';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillText(
          simState.denaturationFraction > 0.5
            ? isArabic
              ? `🔥 تكسر الروابط الهيدروجينية وانفصال الشريطين (T = ${params.temperature}°C > Tm)`
              : `🔥 Thermal Denaturation: Hydrogen bonds melted (T = ${params.temperature}°C > Tm)`
            : isArabic
            ? `✅ لولب مزدوج ثابت ومستقر (درجة الحرارة ${params.temperature}°C دون درجة الانصهار ${simState.meltingTempTm}°C)`
            : `✅ Native Double Helix: Thermally stable (T = ${params.temperature}°C < Tm = ${simState.meltingTempTm}°C)`,
          width / 2,
          height - 35
        );
      }

      // ---------------------------------------------------------
      // RENDER MODE 2: TRANSCRIPTION & TRANSLATION ENGINE
      // ---------------------------------------------------------
      else if (params.subTab === 'transcription_translation') {
        const centerY = height / 2;

        // mRNA ribbon at center
        const ribbonY = centerY - 20;
        ctx.fillStyle = isLight ? '#f1f5f9' : '#1e293b';
        ctx.strokeStyle = '#10b981'; // Green mRNA
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(40, ribbonY - 25, width - 80, 50, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText("mRNA (5' Cap ➔ Poly-A Tail 3'):", 55, ribbonY - 35);

        // Render Codon Triplets on mRNA ribbon
        const startX = 60;
        const codonW = 68;
        const maxCodons = Math.min(simState.translatedPeptide.length, 7);

        for (let i = 0; i < maxCodons; i++) {
          const item = simState.translatedPeptide[i];
          const cX = startX + i * (codonW + 8);

          // Codon box
          ctx.fillStyle = item.aa === 'STOP' ? 'rgba(244, 63, 94, 0.25)' : 'rgba(56, 189, 248, 0.15)';
          ctx.strokeStyle = item.aa === 'STOP' ? '#f43f5e' : '#38bdf8';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(cX, ribbonY - 16, codonW, 32, 8);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = item.aa === 'STOP' ? '#f43f5e' : '#38bdf8';
          ctx.font = 'bold 13px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillText(item.code, cX + codonW / 2, ribbonY + 4);

          // Polypeptide Amino Acid Sphere Above
          if (item.aa !== 'STOP') {
            const sphereY = ribbonY - 70;

            // Peptide bond line
            if (i > 0 && simState.translatedPeptide[i - 1].aa !== 'STOP') {
              ctx.strokeStyle = '#f59e0b';
              ctx.lineWidth = 3;
              ctx.beginPath();
              ctx.moveTo(cX - 8, sphereY);
              ctx.lineTo(cX, sphereY);
              ctx.stroke();
            }

            ctx.fillStyle = item.code === 'AUG' ? '#10b981' : '#f59e0b';
            ctx.beginPath();
            ctx.arc(cX + codonW / 2, sphereY, 18, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 10px Inter, sans-serif';
            ctx.fillText(item.aa, cX + codonW / 2, sphereY + 3);

            // tRNA anticodon line
            ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
            ctx.beginPath();
            ctx.moveTo(cX + codonW / 2, sphereY + 18);
            ctx.lineTo(cX + codonW / 2, ribbonY - 16);
            ctx.stroke();
            ctx.setLineDash([]);
          } else {
            // Releasing factor icon
            ctx.fillStyle = '#f43f5e';
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.fillText(
              isArabic ? 'عامل الإطلاق' : 'Releasing Factor',
              cX + codonW / 2,
              ribbonY - 65
            );
          }
        }

        // Translation status message
        ctx.fillStyle = simState.stopCodonHit ? '#f43f5e' : '#10b981';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          simState.stopCodonHit
            ? isArabic
              ? `🛑 تم التوقف عند كودون الوقف (${simState.translatedPeptide.find((p) => p.aa === 'STOP')?.code}) بواسطة عامل الإطلاق وانفصال الريبوسوم`
              : '🛑 Translation Terminated by Releasing Factor at Stop Codon'
            : isArabic
            ? '➔ استمرار الترجمة واستطالة سلسلة عديد الببتيد عبر الريبوسوم والـ tRNA'
            : '➔ Ongoing Polypeptide Chain Elongation on Ribosome',
          width / 2,
          height - 40
        );
      }

      // ---------------------------------------------------------
      // RENDER MODE 3: CLASSICAL GENETICS PUNNETT SQUARE
      // ---------------------------------------------------------
      else if (params.subTab === 'classical_genetics') {
        const centerX = width / 2;
        const centerY = height / 2;
        const gridSize = 180;

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? `مخطط التزاوج الوراثي: ${params.crossType === 'mendel_monohybrid' ? 'السيادة التامة (٣:١)' : params.crossType === 'incomplete_dominance' ? 'انعدام السيادة (١:٢:١)' : 'الجينات المميتة (٢:١)'}`
            : `Punnett Square: ${params.crossType}`,
          centerX,
          30
        );

        // 2x2 Punnett Grid
        const half = gridSize / 2;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;

        ctx.strokeRect(centerX - half, centerY - half, gridSize, gridSize);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - half);
        ctx.lineTo(centerX, centerY + half);
        ctx.moveTo(centerX - half, centerY);
        ctx.lineTo(centerX + half, centerY);
        ctx.stroke();

        // Gamete Labels
        ctx.font = '900 16px "JetBrains Mono", monospace';
        if (params.crossType === 'mendel_monohybrid') {
          // Tt x Tt
          ctx.fillStyle = '#38bdf8';
          ctx.fillText('T', centerX - half / 2, centerY - half - 15);
          ctx.fillText('t', centerX + half / 2, centerY - half - 15);
          ctx.fillText('T', centerX - half - 20, centerY - half / 2 + 5);
          ctx.fillText('t', centerX - half - 20, centerY + half / 2 + 5);

          ctx.fillStyle = '#10b981';
          ctx.fillText('TT', centerX - half / 2, centerY - half / 2 + 5);
          ctx.fillText('Tt', centerX + half / 2, centerY - half / 2 + 5);
          ctx.fillText('Tt', centerX - half / 2, centerY + half / 2 + 5);
          ctx.fillStyle = '#f43f5e';
          ctx.fillText('tt', centerX + half / 2, centerY + half / 2 + 5);
        } else if (params.crossType === 'incomplete_dominance') {
          // RW x RW
          ctx.fillStyle = '#38bdf8';
          ctx.fillText('R', centerX - half / 2, centerY - half - 15);
          ctx.fillText('W', centerX + half / 2, centerY - half - 15);
          ctx.fillText('R', centerX - half - 20, centerY - half / 2 + 5);
          ctx.fillText('W', centerX - half - 20, centerY + half / 2 + 5);

          ctx.fillStyle = '#f43f5e';
          ctx.fillText('RR', centerX - half / 2, centerY - half / 2 + 5);
          ctx.fillStyle = '#c084fc';
          ctx.fillText('RW', centerX + half / 2, centerY - half / 2 + 5);
          ctx.fillText('RW', centerX - half / 2, centerY + half / 2 + 5);
          ctx.fillStyle = '#ffffff';
          ctx.fillText('WW', centerX + half / 2, centerY + half / 2 + 5);
        } else {
          // Yy x Yy (Lethal)
          ctx.fillStyle = '#38bdf8';
          ctx.fillText('Y', centerX - half / 2, centerY - half - 15);
          ctx.fillText('y', centerX + half / 2, centerY - half - 15);
          ctx.fillText('Y', centerX - half - 20, centerY - half / 2 + 5);
          ctx.fillText('y', centerX - half - 20, centerY + half / 2 + 5);

          ctx.fillStyle = '#f43f5e';
          ctx.fillText('YY 💀', centerX - half / 2, centerY - half / 2 + 5);
          ctx.fillStyle = '#f59e0b';
          ctx.fillText('Yy', centerX + half / 2, centerY - half / 2 + 5);
          ctx.fillText('Yy', centerX - half / 2, centerY + half / 2 + 5);
          ctx.fillStyle = '#94a3b8';
          ctx.fillText('yy', centerX + half / 2, centerY + half / 2 + 5);
        }

        // Rh Incompatibility clinical alert summary
        const isRhIncompatible = params.motherRh === '-' && params.fatherRh === '+';
        ctx.fillStyle = isRhIncompatible ? '#f43f5e' : '#10b981';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillText(
          isRhIncompatible
            ? isArabic
              ? '⚠️ تنبيه سريري: الأم Rh(-) والأب Rh(+) ➔ خطر تحلل كرات دم الجنين الثاني (Anti-Rh)'
              : '⚠️ Clinical Alert: Rh Incompatibility (Mother Rh- and Father Rh+)'
            : isArabic
            ? '✅ توافق تام لعامل ريسوس بين الأبوين'
            : '✅ Rh Factor Fully Compatible',
          centerX,
          height - 35
        );
      }
    },
    [params.subTab, params.crossType, params.isReplicating, params.temperature, params.motherRh, params.fatherRh, activeDnaTemplate, simState, isLight, isArabic]
  );

  return (
    <VirtualLabShell
      definition={GENETICS_LAB_DEF}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      oscilloscopeCh1={oscilloscopeCh1}
      oscilloscopeCh2={oscilloscopeCh2}
      currentXValue={params.temperature}
      currentYValue={simState.absorbance260}
      onResetSimulation={resetParams}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* Main SubTab Selector */}
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-400 block">
              {isArabic ? 'مجال البيولوجيا الجزيئية والوراثة:' : 'Genetics Laboratory Domain:'}
            </label>
            <div className="relative">
              <select
                aria-label={isArabic ? 'مجال البيولوجيا الجزيئية' : 'Genetics Laboratory Domain'}
                value={params.subTab}
                onChange={(e) => updateParam('subTab', e.target.value as GeneticsSubTab)}
                className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-black text-cyan-400 focus:outline-none focus:border-cyan-500 cursor-pointer"
              >
                <option value="dna_structure">
                  {isArabic ? 'تركيب DNA المزدوج وقواعد تشارجاف' : 'DNA Double Helix & Chargaff'}
                </option>
                <option value="transcription_translation">
                  {isArabic ? 'نسخ mRNA وترجمة البروتين والشفرة' : 'Transcription & Translation Engine'}
                </option>
                <option value="classical_genetics">
                  {isArabic ? 'الوراثة المندلية وفصائل الدم وعامل Rh' : 'Mendelian Genetics & Rh Factor'}
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* CONTROLS FOR MODE 1 & 2: DNA & PROTEIN */}
          {(params.subTab === 'dna_structure' || params.subTab === 'transcription_translation') && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'اختر الجين المنهجي المدروس:' : 'Curriculum Gene Preset:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'الجين المدروس' : 'Curriculum Gene'}
                    value={params.dnaPresetId}
                    onChange={(e) => {
                      const selected = DNA_PRESETS.find((p) => p.id === e.target.value);
                      if (selected) {
                        updateParams({
                          dnaPresetId: selected.id,
                          customSequence: selected.sequence,
                        });
                      }
                    }}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-cyan-500 cursor-pointer"
                  >
                    {DNA_PRESETS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {isArabic ? p.nameAr : p.nameEn}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Mutation Trigger */}
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'إحداث طفرة جينية مستحثة:' : 'Induce Gene Mutation:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'نوع الطفرة' : 'Mutation Type'}
                    value={params.mutationType}
                    onChange={(e) => updateParam('mutationType', e.target.value as MutationType)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-cyan-500 cursor-pointer"
                  >
                    <option value="none">
                      {isArabic ? 'بدون طفرة (الجين الأصلي السليم)' : 'None (Wild Type)'}
                    </option>
                    <option value="silent">
                      {isArabic ? 'طفرة صامتة (Silent - نفس الحمض)' : 'Silent Mutation (Same amino acid)'}
                    </option>
                    <option value="missense">
                      {isArabic ? 'طفرة استبدال (خلايا منجلية - Missense)' : 'Missense Mutation (Sickle Cell HbS)'}
                    </option>
                    <option value="nonsense">
                      {isArabic ? 'طفرة هراء (كودون وقف مبكر - Nonsense)' : 'Nonsense Mutation (Early Stop UAA)'}
                    </option>
                    <option value="frameshift">
                      {isArabic ? 'طفرة إزاحة إطار (إضافة نيوكليوتيدة)' : 'Frameshift Mutation (+1 Insertion)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Temperature Slider */}
              {params.subTab === 'dna_structure' && (
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-rose-400" />
                      {isArabic ? 'درجة الحرارة والانصهار:' : 'Thermal Cycler Temp:'}
                    </span>
                    <span className="text-cyan-400 font-mono">{params.temperature}°C</span>
                  </div>
                  <input
                    type="range"
                    aria-label={isArabic ? 'درجة الحرارة' : 'Thermal Temperature'}
                    min={25}
                    max={95}
                    step={1}
                    value={params.temperature}
                    onChange={(e) => updateParam('temperature', Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>
              )}
            </div>
          )}

          {/* CONTROLS FOR MODE 3: CLASSICAL GENETICS */}
          {params.subTab === 'classical_genetics' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'نمط التهجين الوراثي:' : 'Mendelian Inheritance Cross:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'نمط التهجين' : 'Mendelian Cross Mode'}
                    value={params.crossType}
                    onChange={(e) => updateParam('crossType', e.target.value as CrossType)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-cyan-500 cursor-pointer"
                  >
                    <option value="mendel_monohybrid">
                      {isArabic ? 'السيادة التامة (Tt × Tt -> ٣:١)' : 'Monohybrid Dominance (3:1)'}
                    </option>
                    <option value="incomplete_dominance">
                      {isArabic ? 'انعدام السيادة (RW × RW -> ١:٢:١)' : 'Incomplete Dominance (1:2:1)'}
                    </option>
                    <option value="lethal_genes">
                      {isArabic ? 'الجينات المميتة (Yy × Yy -> ٢:١)' : 'Lethal Genes (2:1)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Parental Blood Type Selectors */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                <div>
                  <label className="text-[10px] font-bold text-rose-400 block mb-1">
                    {isArabic ? 'فصيلة دم الأم و Rh:' : 'Mother Blood & Rh:'}
                  </label>
                  <div className="flex gap-1">
                    <select
                      aria-label={isArabic ? 'فصيلة دم الأم' : 'Mother Blood Type'}
                      value={params.motherBlood}
                      onChange={(e) => updateParam('motherBlood', e.target.value as BloodType)}
                      className="flex-1 p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100"
                    >
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                      <option value="O">O</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => updateParam('motherRh', params.motherRh === '+' ? '-' : '+')}
                      className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-rose-300"
                    >
                      {params.motherRh}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-blue-400 block mb-1">
                    {isArabic ? 'فصيلة دم الأب و Rh:' : 'Father Blood & Rh:'}
                  </label>
                  <div className="flex gap-1">
                    <select
                      aria-label={isArabic ? 'فصيلة دم الأب' : 'Father Blood Type'}
                      value={params.fatherBlood}
                      onChange={(e) => updateParam('fatherBlood', e.target.value as BloodType)}
                      className="flex-1 p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100"
                    >
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                      <option value="O">O</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => updateParam('fatherRh', params.fatherRh === '+' ? '-' : '+')}
                      className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-blue-300"
                    >
                      {params.fatherRh}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Dynamic Canvas Simulation Viewport */}
        <div className={`relative rounded-2xl overflow-hidden border shadow-lg ${
          isLight ? 'border-slate-200 bg-slate-50' : 'border-slate-700/60 bg-slate-950'
        }`}>
          <CanvasSimulationViewport
            id="genetics-workbench-viewport"
            lang={lang ?? 'ar'}
            theme={theme}
            aspectRatio="aspect-[16/10]"
            minHeight={420}
            onRender={renderSimulation}
          >
            {/* Real-time Status Overlay Badge */}
            <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono font-bold text-cyan-300 flex items-center gap-2 pointer-events-none select-none">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>
                {params.subTab === 'dna_structure'
                  ? `dsDNA %GC = ${simState.percentGC}% | Tm = ${simState.meltingTempTm}°C`
                  : params.subTab === 'transcription_translation'
                  ? simState.stopCodonHit
                    ? isArabic
                      ? '🛑 تم التوقف عند كودون الوقف (Stop)'
                      : '🛑 Terminated at Stop Codon'
                    : isArabic
                    ? `تخليق ببتيد (${simState.translatedPeptide.length} أحماض أمينية)`
                    : `Translating Peptide (${simState.translatedPeptide.length} AA)`
                  : isArabic
                  ? 'مربع بانيت وتوارث فصائل الدم'
                  : 'Punnett Square & Blood Inheritance'}
              </span>
            </div>
          </CanvasSimulationViewport>
        </div>

        {/* SEQUENCE & TRANSLATION INSPECTION DEEP-DIVE CARD */}
        {params.subTab === 'transcription_translation' && (
          <div
            className={`p-5 rounded-2xl border ${
              isLight ? 'bg-white border-slate-300 shadow-md' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-4">
              <div className="flex items-center gap-2">
                <Dna className="w-5 h-5 text-cyan-400" />
                <h4 className="text-sm font-black text-cyan-400">
                  {isArabic ? 'سجل النسخ والشفرة الوراثية وتتابع الأحماض الأمينية:' : 'Transcription & Peptide Sequence Ledger:'}
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-slate-400">
                {simState.translatedPeptide.length} Codons Translated
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isArabic ? "شريط الرنا الرسول mRNA المنقول (٥َ إلى ٣َ):" : "Transcribed mRNA Sequence (5' to 3'):"}
                </span>
                <div className="font-mono text-xs font-black text-emerald-300 tracking-wider break-all">
                  5'-{simState.mrnaSequence}-3' (Poly-A Tail)
                </div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/40 space-y-2">
                <span className="text-[10px] font-bold text-cyan-300 block">
                  {isArabic ? 'سلسلة عديد الببتيد الناتجة (الترجمة الحيوية بالريبوسوم):' : 'Nascent Polypeptide Amino Acid Sequence:'}
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs font-black">
                  {simState.translatedPeptide.map((p, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded-lg border ${
                        p.aa === 'STOP'
                          ? 'bg-rose-950/80 border-rose-500 text-rose-300'
                          : p.code === 'AUG'
                          ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                          : 'bg-slate-900 border-slate-700 text-slate-200'
                      }`}
                    >
                      {p.aa} {p.aa !== 'STOP' && idx < simState.translatedPeptide.length - 1 && '—'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </VirtualLabShell>
  );
};
