import React, { useState, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { Language } from '../i18n/translations';
import {
  playGameteFusionSound,
  playSuccessFanfare,
  playErrorBuzz,
  playTactileClick,
  isAudioMuted,
  toggleAudioMuted,
} from '../utils/scienceAudio';
import {
  Dna,
  Info,
  AlertTriangle,
  HeartPulse,
  Eye,
  Layers,
  Award,
  Volume2,
  VolumeX,
  GitBranch,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Printer,
  Download,
  Check,
} from 'lucide-react';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { saveLabReportDraft, loadLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export type GeneticsMode = 'monohybrid' | 'dihybrid' | 'blood_types' | 'sex_linked' | 'pedigree';

// --- Monohybrid Types ---
interface TraitConfig {
  id: string;
  nameEn: string;
  nameAr: string;
  domAllele: string;
  recAllele: string;
  domPhenoEn: string;
  domPhenoAr: string;
  recPhenoEn: string;
  recPhenoAr: string;
  domColor: string;
  recColor: string;
  icon: string;
}

const MONOHYBRID_TRAITS: TraitConfig[] = [
  {
    id: 'flower_color',
    nameEn: 'Flower Color (Pea Plant)',
    nameAr: 'لون أزهار نبات البازلاء',
    domAllele: 'P',
    recAllele: 'p',
    domPhenoEn: 'Purple Flower',
    domPhenoAr: 'أزهار قرمزية (سائدة)',
    recPhenoEn: 'White Flower',
    recPhenoAr: 'أزهار بيضاء (متنحية)',
    domColor: '#9333ea',
    recColor: '#e2e8f0',
    icon: '🌸',
  },
  {
    id: 'plant_height',
    nameEn: 'Stem Length (Tall vs Dwarf)',
    nameAr: 'طول الساق (طويل vs قصير)',
    domAllele: 'T',
    recAllele: 't',
    domPhenoEn: 'Tall Stem',
    domPhenoAr: 'ساق طويلة (سائدة)',
    recPhenoEn: 'Dwarf Stem',
    recPhenoAr: 'ساق قصيرة (متنحية)',
    domColor: '#16a34a',
    recColor: '#ca8a04',
    icon: '🌱',
  },
  {
    id: 'seed_shape',
    nameEn: 'Seed Shape (Round vs Wrinkled)',
    nameAr: 'شكل البذرة (أملس vs مجعد)',
    domAllele: 'R',
    recAllele: 'r',
    domPhenoEn: 'Round Seed',
    domPhenoAr: 'بذرة ملساء (سائدة)',
    recPhenoEn: 'Wrinkled Seed',
    recPhenoAr: 'بذرة مجعدة (متنحية)',
    domColor: '#0284c7',
    recColor: '#d97706',
    icon: '🟡',
  },
  {
    id: 'seed_color',
    nameEn: 'Seed Color (Yellow vs Green)',
    nameAr: 'لون البذرة (أصفر vs أخضر)',
    domAllele: 'Y',
    recAllele: 'y',
    domPhenoEn: 'Yellow Cotyledon',
    domPhenoAr: 'فلقات صفراء (سائدة)',
    recPhenoEn: 'Green Cotyledon',
    recPhenoAr: 'فلقات خضراء (متنحية)',
    domColor: '#eab308',
    recColor: '#22c55e',
    icon: '🌿',
  },
];

// --- Blood Types Configuration ---
type BloodAllele = 'A' | 'B' | 'i';
type RhAllele = '+' | '-';

interface BloodGenotypeOption {
  id: string;
  labelEn: string;
  labelAr: string;
  alleles: [BloodAllele, BloodAllele];
  phenotypeEn: string;
  phenotypeAr: string;
}

const BLOOD_GENOTYPES: BloodGenotypeOption[] = [
  { id: 'AA', labelEn: 'I^A I^A (Type A Homozygous)', labelAr: 'I^A I^A (فصيلة A نقية)', alleles: ['A', 'A'], phenotypeEn: 'Type A', phenotypeAr: 'فصيلة A' },
  { id: 'Ai', labelEn: 'I^A i (Type A Heterozygous)', labelAr: 'I^A i (فصيلة A هجينة)', alleles: ['A', 'i'], phenotypeEn: 'Type A', phenotypeAr: 'فصيلة A' },
  { id: 'BB', labelEn: 'I^B I^B (Type B Homozygous)', labelAr: 'I^B I^B (فصيلة B نقية)', alleles: ['B', 'B'], phenotypeEn: 'Type B', phenotypeAr: 'فصيلة B' },
  { id: 'Bi', labelEn: 'I^B i (Type B Heterozygous)', labelAr: 'I^B i (فصيلة B هجينة)', alleles: ['B', 'i'], phenotypeEn: 'Type B', phenotypeAr: 'فصيلة B' },
  { id: 'AB', labelEn: 'I^A I^B (Type AB Codominant)', labelAr: 'I^A I^B (فصيلة AB سيادة مشتركة)', alleles: ['A', 'B'], phenotypeEn: 'Type AB', phenotypeAr: 'فصيلة AB' },
  { id: 'ii', labelEn: 'ii (Type O Universal Donor)', labelAr: 'ii (فصيلة O معطي عام)', alleles: ['i', 'i'], phenotypeEn: 'Type O', phenotypeAr: 'فصيلة O' },
];

// --- Pedigree Tree Configuration & Presets ---
export type PedigreeTraitId = 'albinism' | 'polydactyly' | 'hemophilia' | 'blood_groups';

export interface PedigreeIndividual {
  id: string;
  label: string;
  nameEn: string;
  nameAr: string;
  sex: 'male' | 'female';
  generation: 1 | 2 | 3;
  x: number;
  y: number;
  status: 'unaffected' | 'carrier' | 'affected';
  isProband?: boolean;
  trueGenotype: string;
  candidateGenotypes: string[];
  phenotypeEn: string;
  phenotypeAr: string;
  hintEn: string;
  hintAr: string;
}

export interface PedigreePresetData {
  id: PedigreeTraitId;
  nameEn: string;
  nameAr: string;
  inheritanceEn: string;
  inheritanceAr: string;
  descriptionEn: string;
  descriptionAr: string;
  formulaKatex: string;
  individuals: PedigreeIndividual[];
}

const PEDIGREE_PRESETS: PedigreePresetData[] = [
  {
    id: 'albinism',
    nameEn: 'Autosomal Recessive: Albinism',
    nameAr: 'وراثة جسدية متنحية: المهق (غياب الميلانين)',
    inheritanceEn: 'Autosomal Recessive (Skips Generations)',
    inheritanceAr: 'صفة جسدية متنحية (قد تغيب عن جيل وتظهر في الآخر)',
    descriptionEn: 'Normal pigment allele (A) is dominant over albinism allele (a). Affected individuals are homozygous (aa).',
    descriptionAr: 'جين صبغة الميلانين العادية (A) سائد على جين المهق (a). الفرد المصاب نقي متنحٍ (aa).',
    formulaKatex: 'Aa \\times Aa \\implies 1AA : 2Aa : 1aa \\quad (25\\% \\text{ المهق})',
    individuals: [
      { id: 'I-1', label: 'I-1', nameEn: 'Grandfather', nameAr: 'الجد', sex: 'male', generation: 1, x: 180, y: 45, status: 'carrier', trueGenotype: 'Aa', candidateGenotypes: ['AA', 'Aa', 'aa'], phenotypeEn: 'Unaffected (Carrier)', phenotypeAr: 'سليم ظاهرياً (حامل للمرض)', hintEn: 'Has an affected son (II-2), so he must carry a recessive "a" allele.', hintAr: 'أنجب ابناً مصاباً (II-2)، لذا يجب أن يحمل أليلاً متنحياً "a".' },
      { id: 'I-2', label: 'I-2', nameEn: 'Grandmother', nameAr: 'الجدة', sex: 'female', generation: 1, x: 280, y: 45, status: 'carrier', trueGenotype: 'Aa', candidateGenotypes: ['AA', 'Aa', 'aa'], phenotypeEn: 'Unaffected (Carrier)', phenotypeAr: 'سليمة ظاهرياً (حاملة للمرض)', hintEn: 'Must donate a recessive "a" allele to affected child II-2.', hintAr: 'تبرعت بأليل متنحٍ "a" لابنها المصاب II-2.' },
      { id: 'II-1', label: 'II-1', nameEn: 'Aunt', nameAr: 'العمة', sex: 'female', generation: 2, x: 110, y: 115, status: 'unaffected', trueGenotype: 'AA', candidateGenotypes: ['AA', 'Aa', 'aa'], phenotypeEn: 'Unaffected Normal', phenotypeAr: 'سليمة نقية', hintEn: 'Inherited dominant allele A from both parents.', hintAr: 'ورثت الأليل السائد A من كلا الأبوين.' },
      { id: 'II-2', label: 'II-2', nameEn: 'Uncle', nameAr: 'العم (مصاب)', sex: 'male', generation: 2, x: 210, y: 115, status: 'affected', trueGenotype: 'aa', candidateGenotypes: ['AA', 'Aa', 'aa'], phenotypeEn: 'Affected with Albinism', phenotypeAr: 'مصاب بالمهق', hintEn: 'Autosomal recessive phenotypes are always homozygous (aa).', hintAr: 'الفرد المصاب بصفة متنحية يكون تركيبه دائماً (aa).' },
      { id: 'II-3', label: 'II-3', nameEn: 'Mother', nameAr: 'الأم', sex: 'female', generation: 2, x: 310, y: 115, status: 'carrier', trueGenotype: 'Aa', candidateGenotypes: ['AA', 'Aa', 'aa'], phenotypeEn: 'Carrier Mother', phenotypeAr: 'أم حاملة للمرض', hintEn: 'Her child III-2 is affected with albinism, so she carries allele "a".', hintAr: 'أنجبت طفلة مصابة (III-2)، إذاً هي حتماً حاملة للأليل "a".' },
      { id: 'II-4', label: 'II-4', nameEn: 'Father (Spouse)', nameAr: 'الأب (الزوج)', sex: 'male', generation: 2, x: 410, y: 115, status: 'carrier', trueGenotype: 'Aa', candidateGenotypes: ['AA', 'Aa', 'aa'], phenotypeEn: 'Carrier Father', phenotypeAr: 'أب حامل للمرض', hintEn: 'Also contributed a recessive "a" allele to affected proband III-2.', hintAr: 'ساهم أيضاً بأليل متنحٍ "a" لطفلته المصابة III-2.' },
      { id: 'III-1', label: 'III-1', nameEn: 'Brother', nameAr: 'الأخ', sex: 'male', generation: 3, x: 280, y: 190, status: 'carrier', trueGenotype: 'Aa', candidateGenotypes: ['AA', 'Aa', 'aa'], phenotypeEn: 'Unaffected Brother (Carrier)', phenotypeAr: 'أخ سليم (حامل للجين)', hintEn: 'Unaffected son born to two heterozygous carrier parents.', hintAr: 'ابن سليم ظاهرياً مولود لأبوين هجينين.' },
      { id: 'III-2', label: 'III-2', nameEn: 'Proband (Patient)', nameAr: 'الحالة الدالة (المصابة)', sex: 'female', generation: 3, x: 360, y: 190, status: 'affected', isProband: true, trueGenotype: 'aa', candidateGenotypes: ['AA', 'Aa', 'aa'], phenotypeEn: 'Affected Proband (Albinism)', phenotypeAr: 'أنثى مصابة بالمهق (الحالة الدالة)', hintEn: 'The proband seeking genetic counseling. Displays full albinism (aa).', hintAr: 'الحالة الدالة التي جاءت للاستشارة الوراثية وتظهر عليها أعراض المهق (aa).' },
      { id: 'III-3', label: 'III-3', nameEn: 'Sister', nameAr: 'الأخت', sex: 'female', generation: 3, x: 440, y: 190, status: 'unaffected', trueGenotype: 'AA', candidateGenotypes: ['AA', 'Aa', 'aa'], phenotypeEn: 'Unaffected Sister', phenotypeAr: 'أخت سليمة نقية', hintEn: 'Normal healthy sister without mutant recessive alleles.', hintAr: 'أخت سليمة تماماً لا تحمل الجين المتنحي.' },
    ],
  },
  {
    id: 'polydactyly',
    nameEn: 'Autosomal Dominant: Polydactyly',
    nameAr: 'وراثة جسدية سائدة: تعدد الأصابع (سداسي الأصابع)',
    inheritanceEn: 'Autosomal Dominant (Does Not Skip Generations)',
    inheritanceAr: 'صفة جسدية سائدة (تظهر في كل جيل دون انقطاع)',
    descriptionEn: 'Extra digit allele (P) is dominant over normal allele (p). Every affected individual has at least one affected parent.',
    descriptionAr: 'جين زيادة عدد الأصابع (P) سائد على جين الأصابع الطبيعية (p). كل فرد مصاب يولد لأب أو أم مصابة.',
    formulaKatex: 'Pp \\times pp \\implies 1Pp (50\\% \\text{ مصاب}) : 1pp (50\\% \\text{ طبيعي})',
    individuals: [
      { id: 'I-1', label: 'I-1', nameEn: 'Affected Grandfather', nameAr: 'الجد (مصاب)', sex: 'male', generation: 1, x: 180, y: 45, status: 'affected', trueGenotype: 'Pp', candidateGenotypes: ['PP', 'Pp', 'pp'], phenotypeEn: 'Affected with Polydactyly', phenotypeAr: 'مصاب بزيادة الأصابع', hintEn: 'Affected father who had normal child II-1 (pp), so he must be heterozygous (Pp).', hintAr: 'أب مصاب أنجب ابنة طبيعية (II-1)، لذا هو هجين (Pp).' },
      { id: 'I-2', label: 'I-2', nameEn: 'Normal Grandmother', nameAr: 'الجدة (طبيعية)', sex: 'female', generation: 1, x: 280, y: 45, status: 'unaffected', trueGenotype: 'pp', candidateGenotypes: ['PP', 'Pp', 'pp'], phenotypeEn: 'Normal Digits', phenotypeAr: 'طبيعية الأصابع (سليمة)', hintEn: 'Unaffected individuals in dominant inheritance are always homozygous recessive (pp).', hintAr: 'الأفراد الطبيعيون في الصفات السائدة يكونون حتماً (pp).' },
      { id: 'II-1', label: 'II-1', nameEn: 'Normal Daughter', nameAr: 'ابنة طبيعية', sex: 'female', generation: 2, x: 110, y: 115, status: 'unaffected', trueGenotype: 'pp', candidateGenotypes: ['PP', 'Pp', 'pp'], phenotypeEn: 'Normal Digits', phenotypeAr: 'طبيعية الأصابع', hintEn: 'Inherited recessive allele p from both parents.', hintAr: 'ورثت الأليل المتنحي p من كلا الأبوين.' },
      { id: 'II-2', label: 'II-2', nameEn: 'Affected Son', nameAr: 'ابن مصاب', sex: 'male', generation: 2, x: 210, y: 115, status: 'affected', trueGenotype: 'Pp', candidateGenotypes: ['PP', 'Pp', 'pp'], phenotypeEn: 'Affected with Polydactyly', phenotypeAr: 'مصاب بزيادة الأصابع', hintEn: 'Inherited P from father and p from mother (Pp).', hintAr: 'ورث جين P من الأب و p من الأم (Pp).' },
      { id: 'II-3', label: 'II-3', nameEn: 'Affected Mother', nameAr: 'الأم المصابة', sex: 'female', generation: 2, x: 310, y: 115, status: 'affected', trueGenotype: 'Pp', candidateGenotypes: ['PP', 'Pp', 'pp'], phenotypeEn: 'Affected Mother', phenotypeAr: 'أم مصابة بزيادة الأصابع', hintEn: 'Displays polydactyly and passed the P allele to proband III-2.', hintAr: 'مصابة ونقلت الأليل P لابنتها الحالة الدالة III-2.' },
      { id: 'II-4', label: 'II-4', nameEn: 'Normal Father (Spouse)', nameAr: 'الأب الطبيعي', sex: 'male', generation: 2, x: 410, y: 115, status: 'unaffected', trueGenotype: 'pp', candidateGenotypes: ['PP', 'Pp', 'pp'], phenotypeEn: 'Normal Digits', phenotypeAr: 'أب طبيعي الأصابع', hintEn: 'Unaffected spouse with genotype pp.', hintAr: 'زوج سليم غير مصاب تركيبه pp.' },
      { id: 'III-1', label: 'III-1', nameEn: 'Normal Son', nameAr: 'ابن طبيعي', sex: 'male', generation: 3, x: 280, y: 190, status: 'unaffected', trueGenotype: 'pp', candidateGenotypes: ['PP', 'Pp', 'pp'], phenotypeEn: 'Normal Digits', phenotypeAr: 'ابن طبيعي الأصابع', hintEn: 'Unaffected son (pp).', hintAr: 'ابن سليم طبيعي الأصابع (pp).' },
      { id: 'III-2', label: 'III-2', nameEn: 'Proband (Affected)', nameAr: 'الحالة الدالة (مصابة)', sex: 'female', generation: 3, x: 360, y: 190, status: 'affected', isProband: true, trueGenotype: 'Pp', candidateGenotypes: ['PP', 'Pp', 'pp'], phenotypeEn: 'Affected Proband (Polydactyly)', phenotypeAr: 'أنثى مصابة (الحالة الدالة)', hintEn: 'Inherited the dominant allele P from her affected mother (Pp).', hintAr: 'ورثت الأليل السائد P من والدتها المصابة (Pp).' },
      { id: 'III-3', label: 'III-3', nameEn: 'Normal Daughter', nameAr: 'ابنة طبيعية', sex: 'female', generation: 3, x: 440, y: 190, status: 'unaffected', trueGenotype: 'pp', candidateGenotypes: ['PP', 'Pp', 'pp'], phenotypeEn: 'Normal Digits', phenotypeAr: 'ابنة طبيعية الأصابع', hintEn: 'Unaffected daughter (pp).', hintAr: 'ابنة طبيعية الأصابع (pp).' },
    ],
  },
  {
    id: 'hemophilia',
    nameEn: 'X-Linked Recessive: Hemophilia',
    nameAr: 'وراثة مرتبطة بالجنس: الهيموفيليا (سيولة الدم)',
    inheritanceEn: 'Sex-Linked (Criss-Cross: Carrier Mother to Son)',
    inheritanceAr: 'مرتبطة بكروموسوم الجنس X (تنتقل من الأم الحاملة إلى أبنائها الذكور)',
    descriptionEn: 'The mutant allele (X^h) is carried on the X chromosome. Males (XY) express the disease with only one mutant allele.',
    descriptionAr: 'جين سيولة الدم محمول على كروموسوم X. يظهر المرض في الذكور بأليل واحد متنحٍ (X^h Y).',
    formulaKatex: 'X^H X^h \\times X^H Y \\implies 1X^H Y : 1X^h Y \\quad (50\\% \\text{ إصابة الذكور})',
    individuals: [
      { id: 'I-1', label: 'I-1', nameEn: 'Normal Grandfather', nameAr: 'الجد السليم', sex: 'male', generation: 1, x: 180, y: 45, status: 'unaffected', trueGenotype: 'X^H Y', candidateGenotypes: ['X^H Y', 'X^h Y'], phenotypeEn: 'Normal Blood Clotting', phenotypeAr: 'سليم (تجلط طبيعي)', hintEn: 'Normal male has one normal X chromosome (X^H Y).', hintAr: 'ذكر سليم يمتلك كروموسوم X طبيعي (X^H Y).' },
      { id: 'I-2', label: 'I-2', nameEn: 'Carrier Grandmother', nameAr: 'الجدة الحاملة للمرض', sex: 'female', generation: 1, x: 280, y: 45, status: 'carrier', trueGenotype: 'X^H X^h', candidateGenotypes: ['X^H X^H', 'X^H X^h', 'X^h X^h'], phenotypeEn: 'Carrier Female (Unaffected)', phenotypeAr: 'أنثى حاملة للجين (سليمة ظاهرياً)', hintEn: 'Gave birth to affected son II-2, proving she carries X^h.', hintAr: 'أنجبت ابناً مصاباً (II-2)، مما يثبت أنها حاملة لجين X^h.' },
      { id: 'II-1', label: 'II-1', nameEn: 'Normal Daughter', nameAr: 'ابنة سليمة', sex: 'female', generation: 2, x: 110, y: 115, status: 'unaffected', trueGenotype: 'X^H X^H', candidateGenotypes: ['X^H X^H', 'X^H X^h', 'X^h X^h'], phenotypeEn: 'Normal Female', phenotypeAr: 'أنثى سليمة نقية', hintEn: 'Inherited normal X^H from both parents.', hintAr: 'ورثت X^H السليم من كلا الأبوين.' },
      { id: 'II-2', label: 'II-2', nameEn: 'Affected Son', nameAr: 'ابن مصاب بالهيموفيليا', sex: 'male', generation: 2, x: 210, y: 115, status: 'affected', trueGenotype: 'X^h Y', candidateGenotypes: ['X^H Y', 'X^h Y'], phenotypeEn: 'Hemophilic Son', phenotypeAr: 'ذكر مصاب بسيولة الدم', hintEn: 'Males receive Y from father and mutant X^h from carrier mother.', hintAr: 'الذكر يرث Y من الأب و X^h من الأم الحاملة.' },
      { id: 'II-3', label: 'II-3', nameEn: 'Carrier Mother', nameAr: 'الأم الحاملة للمرض', sex: 'female', generation: 2, x: 310, y: 115, status: 'carrier', trueGenotype: 'X^H X^h', candidateGenotypes: ['X^H X^H', 'X^H X^h', 'X^h X^h'], phenotypeEn: 'Carrier Mother', phenotypeAr: 'أم حاملة للمرض', hintEn: 'Her proband son III-2 has hemophilia, proving she is X^H X^h.', hintAr: 'ابنها الحالة الدالة III-2 مصاب، إذاً هي حتماً حاملة للمرض (X^H X^h).' },
      { id: 'II-4', label: 'II-4', nameEn: 'Normal Father', nameAr: 'الأب السليم', sex: 'male', generation: 2, x: 410, y: 115, status: 'unaffected', trueGenotype: 'X^H Y', candidateGenotypes: ['X^H Y', 'X^h Y'], phenotypeEn: 'Normal Father', phenotypeAr: 'أب سليم تماماً', hintEn: 'Healthy father with genotype X^H Y.', hintAr: 'أب سليم تركيبه الجيني X^H Y.' },
      { id: 'III-1', label: 'III-1', nameEn: 'Normal Son', nameAr: 'ابن سليم', sex: 'male', generation: 3, x: 280, y: 190, status: 'unaffected', trueGenotype: 'X^H Y', candidateGenotypes: ['X^H Y', 'X^h Y'], phenotypeEn: 'Normal Son', phenotypeAr: 'ابن سليم (X^H Y)', hintEn: 'Received the normal X^H allele from mother.', hintAr: 'ورث كروموسوم X^H السليم من والدته.' },
      { id: 'III-2', label: 'III-2', nameEn: 'Proband (Affected Son)', nameAr: 'الحالة الدالة (ابن مصاب)', sex: 'male', generation: 3, x: 360, y: 190, status: 'affected', isProband: true, trueGenotype: 'X^h Y', candidateGenotypes: ['X^H Y', 'X^h Y'], phenotypeEn: 'Affected Proband (Hemophilia)', phenotypeAr: 'ذكر مصاب بالهيموفيليا (الحالة الدالة)', hintEn: 'The proband patient. Received X^h from carrier mother and Y from father.', hintAr: 'الحالة الدالة. ورث X^h من أمه الحاملة و Y من والده السليم.' },
      { id: 'III-3', label: 'III-3', nameEn: 'Carrier Daughter', nameAr: 'ابنة حاملة للمرض', sex: 'female', generation: 3, x: 440, y: 190, status: 'carrier', trueGenotype: 'X^H X^h', candidateGenotypes: ['X^H X^H', 'X^H X^h', 'X^h X^h'], phenotypeEn: 'Carrier Daughter', phenotypeAr: 'ابنة حاملة للمرض (X^H X^h)', hintEn: 'Received X^h from mother and X^H from father.', hintAr: 'ورثت X^h من والدتها و X^H من والدها السليم.' },
    ],
  },
  {
    id: 'blood_groups',
    nameEn: 'Codominance: ABO Blood Groups',
    nameAr: 'تعدد البدائل والسيادة المشتركة: فصائل الدم ABO',
    inheritanceEn: 'Multiple Alleles & Codominance (I^A, I^B, i)',
    inheritanceAr: 'تعدد البدائل والسيادة المشتركة (I^A و I^B يسودان على i)',
    descriptionEn: 'Shows how parents with Type A and Type B can produce an offspring with Type O (ii), proving both parents are heterozygous.',
    descriptionAr: 'توضح كيف يمكن لأب من فصيلة A وأم من فصيلة B إنجاب طفل فصيلته O (ii)، مما يثبت أن كلا الأبوين هجينان.',
    formulaKatex: 'I^A i \\times I^B i \\implies I^A I^B (AB), \\; I^A i (A), \\; I^B i (B), \\; ii (O)',
    individuals: [
      { id: 'I-1', label: 'I-1', nameEn: 'Father (Type A)', nameAr: 'الأب (فصيلة A)', sex: 'male', generation: 1, x: 180, y: 45, status: 'unaffected', trueGenotype: 'I^A i', candidateGenotypes: ['I^A I^A', 'I^A i', 'I^B I^B', 'I^B i', 'I^A I^B', 'ii'], phenotypeEn: 'Blood Group A', phenotypeAr: 'فصيلة دم A', hintEn: 'Had a child with Type O (ii), so he must carry the recessive "i" allele.', hintAr: 'أنجب طفلاً فصيلته O (ii)، لذا يحمل حتماً الأليل المتنحي "i".' },
      { id: 'I-2', label: 'I-2', nameEn: 'Mother (Type B)', nameAr: 'الأم (فصيلة B)', sex: 'female', generation: 1, x: 280, y: 45, status: 'unaffected', trueGenotype: 'I^B i', candidateGenotypes: ['I^A I^A', 'I^A i', 'I^B I^B', 'I^B i', 'I^A I^B', 'ii'], phenotypeEn: 'Blood Group B', phenotypeAr: 'فصيلة دم B', hintEn: 'Also contributed an "i" allele to her Type O child II-2.', hintAr: 'ساهمت أيضاً بأليل "i" لطفلها ذي الفصيلة O (II-2).' },
      { id: 'II-1', label: 'II-1', nameEn: 'Daughter (Type AB)', nameAr: 'الابنة (فصيلة AB)', sex: 'female', generation: 2, x: 110, y: 115, status: 'unaffected', trueGenotype: 'I^A I^B', candidateGenotypes: ['I^A I^A', 'I^A i', 'I^B I^B', 'I^B i', 'I^A I^B', 'ii'], phenotypeEn: 'Blood Group AB (Codominant)', phenotypeAr: 'فصيلة دم AB (سيادة مشتركة)', hintEn: 'Inherited I^A from father and I^B from mother.', hintAr: 'ورثت I^A من الأب و I^B من الأم.' },
      { id: 'II-2', label: 'II-2', nameEn: 'Son (Type O)', nameAr: 'الابن (فصيلة O)', sex: 'male', generation: 2, x: 210, y: 115, status: 'affected', trueGenotype: 'ii', candidateGenotypes: ['I^A I^A', 'I^A i', 'I^B I^B', 'I^B i', 'I^A I^B', 'ii'], phenotypeEn: 'Blood Group O (ii)', phenotypeAr: 'فصيلة دم O (ii)', hintEn: 'Type O is homozygous recessive (ii).', hintAr: 'فصيلة O نقية متنحية دائماً (ii).' },
      { id: 'II-3', label: 'II-3', nameEn: 'Daughter (Type A)', nameAr: 'الابنة (فصيلة A)', sex: 'female', generation: 2, x: 310, y: 115, status: 'unaffected', trueGenotype: 'I^A i', candidateGenotypes: ['I^A I^A', 'I^A i', 'I^B I^B', 'I^B i', 'I^A I^B', 'ii'], phenotypeEn: 'Blood Group A (Heterozygous)', phenotypeAr: 'فصيلة دم A هجينة', hintEn: 'Her child III-2 has Type O (ii), so she carries the "i" allele.', hintAr: 'أنجبت طفلة فصيلتها O (III-2)، إذاً هي هجينة (I^A i).' },
      { id: 'II-4', label: 'II-4', nameEn: 'Father (Type B)', nameAr: 'الأب (فصيلة B)', sex: 'male', generation: 2, x: 410, y: 115, status: 'unaffected', trueGenotype: 'I^B i', candidateGenotypes: ['I^A I^A', 'I^A i', 'I^B I^B', 'I^B i', 'I^A I^B', 'ii'], phenotypeEn: 'Blood Group B (Heterozygous)', phenotypeAr: 'فصيلة دم B هجينة', hintEn: 'Also carries the "i" allele (I^B i).', hintAr: 'يحمل أيضاً الأليل "i" (I^B i).' },
      { id: 'III-1', label: 'III-1', nameEn: 'Son (Type B)', nameAr: 'الابن (فصيلة B)', sex: 'male', generation: 3, x: 280, y: 190, status: 'unaffected', trueGenotype: 'I^B i', candidateGenotypes: ['I^A I^A', 'I^A i', 'I^B I^B', 'I^B i', 'I^A I^B', 'ii'], phenotypeEn: 'Blood Group B', phenotypeAr: 'فصيلة دم B', hintEn: 'Inherited I^B from father and i from mother.', hintAr: 'ورث I^B من الأب و i من الأم.' },
      { id: 'III-2', label: 'III-2', nameEn: 'Proband (Type O)', nameAr: 'الحالة الدالة (فصيلة O)', sex: 'female', generation: 3, x: 360, y: 190, status: 'affected', isProband: true, trueGenotype: 'ii', candidateGenotypes: ['I^A I^A', 'I^A i', 'I^B I^B', 'I^B i', 'I^A I^B', 'ii'], phenotypeEn: 'Proband Type O (ii)', phenotypeAr: 'الحالة الدالة فصيلة O (ii)', hintEn: 'Universal donor with genotype ii.', hintAr: 'المعطي العام تركيبه ii.' },
      { id: 'III-3', label: 'III-3', nameEn: 'Daughter (Type AB)', nameAr: 'الابنة (فصيلة AB)', sex: 'female', generation: 3, x: 440, y: 190, status: 'unaffected', trueGenotype: 'I^A I^B', candidateGenotypes: ['I^A I^A', 'I^A i', 'I^B I^B', 'I^B i', 'I^A I^B', 'ii'], phenotypeEn: 'Blood Group AB', phenotypeAr: 'فصيلة دم AB', hintEn: 'Codominant expression of both antigens.', hintAr: 'سيادة مشتركة تظهر المولدين A و B معاً.' },
    ],
  },
];

export const InteractiveGeneticsStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  // --- Active Mode ---
  const [activeMode, setActiveMode] = useState<GeneticsMode>('monohybrid');

  // --- Audio Mute State ---
  const [audioMuted, setAudioMuted] = useState<boolean>(isAudioMuted());
  const handleToggleMute = () => {
    const next = toggleAudioMuted();
    setAudioMuted(next);
    if (!next) playTactileClick();
  };

  // --- Monohybrid State ---
  const [selectedTraitIdx, setSelectedTraitIdx] = useState<number>(0);
  const activeTrait = MONOHYBRID_TRAITS[selectedTraitIdx];
  const [p1GenoMono, setP1GenoMono] = useState<'dom_homo' | 'hetero' | 'rec_homo'>('hetero');
  const [p2GenoMono, setP2GenoMono] = useState<'dom_homo' | 'hetero' | 'rec_homo'>('hetero');

  // --- Dihybrid State ---
  const [p1Dihybrid, setP1Dihybrid] = useState<string>('RrYy');
  const [p2Dihybrid, setP2Dihybrid] = useState<string>('RrYy');

  // --- Blood Groups State ---
  const [motherBloodIdx, setMotherBloodIdx] = useState<number>(1); // I^A i
  const [fatherBloodIdx, setFatherBloodIdx] = useState<number>(3); // I^B i
  const [motherRh, setMotherRh] = useState<RhAllele>('-');
  const [fatherRh, setFatherRh] = useState<RhAllele>('+');

  // --- Sex-Linked State ---
  const [motherSexLinked, setMotherSexLinked] = useState<'homo_norm' | 'carrier' | 'affected'>('carrier');
  const [fatherSexLinked, setFatherSexLinked] = useState<'norm' | 'affected'>('norm');
  const [sexLinkedTrait, setSexLinkedTrait] = useState<'hemophilia' | 'colorblind'>('hemophilia');

  // --- Pedigree State ---
  const [selectedPedigreeId, setSelectedPedigreeId] = useState<PedigreeTraitId>('albinism');
  const [selectedMemberId, setSelectedMemberId] = useState<string>('III-2');
  const [deductions, setDeductions] = useState<Record<string, { status: 'correct' | 'incorrect'; guessed: string }>>({});

  const currentPedigree = useMemo(() => {
    return PEDIGREE_PRESETS.find((p) => p.id === selectedPedigreeId) || PEDIGREE_PRESETS[0];
  }, [selectedPedigreeId]);

  const activeMember = useMemo(() => {
    return currentPedigree.individuals.find((m) => m.id === selectedMemberId) || currentPedigree.individuals[0];
  }, [currentPedigree, selectedMemberId]);

  const solvedCount = useMemo(() => {
    return Object.values(deductions).filter((d) => d.status === 'correct').length;
  }, [deductions]);

  // Handle Genotype Deduction Guess
  const handleDeduce = (member: PedigreeIndividual, candidate: string) => {
    if (candidate === member.trueGenotype) {
      playSuccessFanfare();
      setDeductions((prev) => ({
        ...prev,
        [member.id]: { status: 'correct', guessed: candidate },
      }));
    } else {
      playErrorBuzz();
      setDeductions((prev) => ({
        ...prev,
        [member.id]: { status: 'incorrect', guessed: candidate },
      }));
    }
  };

  const [reportExported, setReportExported] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const handleResetDeductions = () => {
    playTactileClick();
    setDeductions({});
  };

  // Export Practical Exam Report (Markdown)
  const handleExportPedigreeReport = () => {
    playSuccessFanfare();
    const totalCount = currentPedigree.individuals.length;
    const reportText = `# Egyptian Ministry of Education (MoE) - Practical Biology Genetics Worksheet
## 3-Generation Clinical Pedigree Lineage Analysis & Genotype Deductions
**Date**: ${new Date().toLocaleDateString()}
**Curriculum**: Thanawya Amma / Secondary Biology (Principles of Heredity & Human Genetics)
**Case Study**: ${currentPedigree.nameEn} (${currentPedigree.nameAr})
**Inheritance Pattern**: ${currentPedigree.inheritanceEn}

---
### 1. Clinical Diagnostic Background
- **Trait Under Investigation**: ${currentPedigree.nameEn}
- **Inheritance Pattern**: ${currentPedigree.inheritanceEn}
- **Clinical Phenotype Profile**: ${currentPedigree.descriptionEn}

---
### 2. Family Lineage & Empirical Genotype Deductions Table
| Member Code | Family Role & Generation | Phenotype | Correct Genotype | Student Deduction Status |
|---|---|---|---|---|
${currentPedigree.individuals
  .map((ind) => {
    const isSolved = deductions[ind.id]?.status === 'correct';
    return `| ${ind.label} | ${ind.nameEn} (Gen ${ind.generation}) | ${ind.phenotypeEn} | \`${ind.trueGenotype}\` | ${isSolved ? '✅ Correctly Solved' : 'Pending'} |`;
  })
  .join('\n')}

- **Total Solved Deductions**: ${solvedCount} / ${totalCount} individuals
- **Deduction Accuracy**: ${((solvedCount / totalCount) * 100).toFixed(0)}%

---
### 3. Ministerial Practical Evaluation (12 Marks)
1. Pedigree Tree Setup & International Notation: **2/2**
2. Identification of Generational Segregation: **3/3**
3. Empirical Genotype Deduction across 3 Generations: **${Math.min(3, Math.ceil((solvedCount / totalCount) * 3))}/3**
4. Mendelian & Sex-Linked Genetic Risk Ratios: **2/2**
5. Genetic Counseling Analysis & Recurrence Bounds: **2/2**
- **TOTAL SCORE**: **${2 + 3 + Math.min(3, Math.ceil((solvedCount / totalCount) * 3)) + 2 + 2}/12 Marks**
`;

    const blob = new Blob([reportText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MoE_Genetics_Pedigree_Report_${currentPedigree.id}_${Date.now()}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setReportExported(true);
    setTimeout(() => setReportExported(false), 3000);
  };

  // Open Official MoE A4 Lab Report Generator Modal
  const handleOpenOfficialReportModal = () => {
    playTactileClick();
    const draft = loadLabReportDraft('bio-exp-3');
    draft.titleAr = `الوراثة البشرية: تحليل سجل النسب لـ (${currentPedigree.nameAr})`;
    draft.titleEn = `Human Genetics: 3-Generation Pedigree Lineage Analysis for (${currentPedigree.nameEn})`;
    draft.hypothesisAr = `تتبع انتقال صفة (${currentPedigree.nameAr}) عبر ثلاثة أجيال يثبت نمط التوارث: ${currentPedigree.inheritanceAr}.`;
    draft.hypothesisEn = `Tracing the transmission of (${currentPedigree.nameEn}) across 3 generations empirically validates the inheritance pattern: ${currentPedigree.inheritanceEn}.`;

    draft.dataTableRows = currentPedigree.individuals.map((ind) => {
      const isSolved = deductions[ind.id]?.status === 'correct';
      return {
        member: `${isAr ? ind.nameAr : ind.nameEn} (${ind.label})`,
        generation: isAr ? `الجيل ${toHindiDigits(ind.generation)}` : `Gen ${ind.generation}`,
        phenotype: isAr ? ind.phenotypeAr : ind.phenotypeEn,
        genotype: isSolved ? ind.trueGenotype : `${ind.trueGenotype} (${isAr ? 'مستنتج' : 'deduced'})`,
        rationale: isAr ? ind.hintAr : ind.hintEn,
      };
    });

    const totalCount = currentPedigree.individuals.length;
    const earnedDeductions = Math.min(3, Math.ceil((solvedCount / totalCount) * 3));

    draft.conclusionAr = `أثبت تحليل سجل النسب لـ (${currentPedigree.nameAr}) أن الصفة تخضع لنمط (${currentPedigree.inheritanceAr})، وتم استنتاج الطرز الجينية للأفراد بنجاح (${toHindiDigits(solvedCount)}/${toHindiDigits(totalCount)}).`;
    draft.conclusionEn = `Pedigree analysis for (${currentPedigree.nameEn}) confirmed inheritance pattern (${currentPedigree.inheritanceEn}), resolving (${solvedCount}/${totalCount}) familial genotypes.`;

    draft.rubricCriteria = draft.rubricCriteria.map((c, i) => {
      if (i === 0) return { ...c, earnedMarks: 2 };
      if (i === 1) return { ...c, earnedMarks: 2 };
      if (i === 2) return { ...c, earnedMarks: earnedDeductions };
      if (i === 3) return { ...c, earnedMarks: 3 };
      if (i === 4) return { ...c, earnedMarks: 2 };
      return c;
    });

    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
  };

  // Cell highlight state
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

  // --- Monohybrid Calculations ---
  const getAlleles = (type: 'dom_homo' | 'hetero' | 'rec_homo', dom: string, rec: string): [string, string] => {
    if (type === 'dom_homo') return [dom, dom];
    if (type === 'hetero') return [dom, rec];
    return [rec, rec];
  };

  const monohybridGametes1 = useMemo(() => {
    return getAlleles(p1GenoMono, activeTrait.domAllele, activeTrait.recAllele);
  }, [p1GenoMono, activeTrait]);

  const monohybridGametes2 = useMemo(() => {
    return getAlleles(p2GenoMono, activeTrait.domAllele, activeTrait.recAllele);
  }, [p2GenoMono, activeTrait]);

  const monohybridGrid = useMemo(() => {
    const grid: { genotype: string; isDominant: boolean; rowG: string; colG: string }[][] = [];
    for (let r = 0; r < 2; r++) {
      const row: { genotype: string; isDominant: boolean; rowG: string; colG: string }[] = [];
      for (let c = 0; c < 2; c++) {
        const g1 = monohybridGametes1[r];
        const g2 = monohybridGametes2[c];
        const alleles = [g1, g2].sort();
        const genotype = alleles[0] === alleles[0].toUpperCase() ? alleles[0] + alleles[1] : alleles[1] + alleles[0];
        const isDominant = genotype.includes(activeTrait.domAllele);
        row.push({ genotype, isDominant, rowG: g1, colG: g2 });
      }
      grid.push(row);
    }
    return grid;
  }, [monohybridGametes1, monohybridGametes2, activeTrait]);

  const monohybridStats = useMemo(() => {
    const total = 4;
    let dominantCount = 0;
    let recessiveCount = 0;
    const genoCounts: Record<string, number> = {};

    monohybridGrid.forEach((row) => {
      row.forEach((cell) => {
        if (cell.isDominant) dominantCount++;
        else recessiveCount++;
        genoCounts[cell.genotype] = (genoCounts[cell.genotype] || 0) + 1;
      });
    });

    return {
      dominantCount,
      recessiveCount,
      dominantPct: (dominantCount / total) * 100,
      recessivePct: (recessiveCount / total) * 100,
      genoCounts,
    };
  }, [monohybridGrid]);

  // --- Dihybrid Calculations ---
  const getDihybridGametes = (geno: string): string[] => {
    const r1 = geno[0];
    const r2 = geno[1];
    const y1 = geno[2];
    const y2 = geno[3];
    return [r1 + y1, r1 + y2, r2 + y1, r2 + y2];
  };

  const dihybridGametes1 = useMemo(() => getDihybridGametes(p1Dihybrid), [p1Dihybrid]);
  const dihybridGametes2 = useMemo(() => getDihybridGametes(p2Dihybrid), [p2Dihybrid]);

  const dihybridGrid = useMemo(() => {
    const grid: {
      genotype: string;
      phenotypeKey: 'RY' | 'Ry' | 'rY' | 'ry';
      phenoNameEn: string;
      phenoNameAr: string;
      color: string;
      rowG: string;
      colG: string;
    }[][] = [];

    for (let r = 0; r < 4; r++) {
      const row: Array<{
        genotype: string;
        phenotypeKey: 'RY' | 'Ry' | 'rY' | 'ry';
        phenoNameEn: string;
        phenoNameAr: string;
        color: string;
        rowG: string;
        colG: string;
      }> = [];
      for (let c = 0; c < 4; c++) {
        const g1 = dihybridGametes1[r];
        const g2 = dihybridGametes2[c];
        const rAlleles = [g1[0], g2[0]].sort().reverse().join('');
        const yAlleles = [g1[1], g2[1]].sort().reverse().join('');
        const fullGeno = rAlleles + yAlleles;

        const isRound = fullGeno.includes('R');
        const isYellow = fullGeno.includes('Y');

        let phenotypeKey: 'RY' | 'Ry' | 'rY' | 'ry';
        let phenoNameEn: string;
        let phenoNameAr: string;
        let color: string;

        if (isRound && isYellow) {
          phenotypeKey = 'RY';
          phenoNameEn = 'Round Yellow';
          phenoNameAr = 'أملس أصفر';
          color = '#eab308';
        } else if (isRound && !isYellow) {
          phenotypeKey = 'Ry';
          phenoNameEn = 'Round Green';
          phenoNameAr = 'أملس أخضر';
          color = '#22c55e';
        } else if (!isRound && isYellow) {
          phenotypeKey = 'rY';
          phenoNameEn = 'Wrinkled Yellow';
          phenoNameAr = 'مجعد أصفر';
          color = '#f97316';
        } else {
          phenotypeKey = 'ry';
          phenoNameEn = 'Wrinkled Green';
          phenoNameAr = 'مجعد أخضر';
          color = '#10b981';
        }

        row.push({
          genotype: fullGeno,
          phenotypeKey,
          phenoNameEn,
          phenoNameAr,
          color,
          rowG: g1,
          colG: g2,
        });
      }
      grid.push(row);
    }
    return grid;
  }, [dihybridGametes1, dihybridGametes2]);

  const dihybridStats = useMemo(() => {
    const counts = { RY: 0, Ry: 0, rY: 0, ry: 0 };
    dihybridGrid.forEach((row) => {
      row.forEach((cell) => {
        counts[cell.phenotypeKey]++;
      });
    });
    return {
      counts,
      ratios: `${counts.RY} : ${counts.Ry} : ${counts.rY} : ${counts.ry}`,
    };
  }, [dihybridGrid]);

  // --- Blood Groups Calculations ---
  const motherBlood = BLOOD_GENOTYPES[motherBloodIdx];
  const fatherBlood = BLOOD_GENOTYPES[fatherBloodIdx];

  const bloodGrid = useMemo(() => {
    const grid: {
      genotypeDisplay: string;
      bloodType: string;
      labelAr: string;
      antigens: string;
      antibodies: string;
      rowG: string;
      colG: string;
    }[][] = [];

    const mG = motherBlood.alleles;
    const fG = fatherBlood.alleles;

    for (let r = 0; r < 2; r++) {
      const row: Array<{
        genotypeDisplay: string;
        bloodType: string;
        labelAr: string;
        antigens: string;
        antibodies: string;
        rowG: string;
        colG: string;
      }> = [];
      for (let c = 0; c < 2; c++) {
        const a1 = mG[r];
        const a2 = fG[c];
        const combo = [a1, a2].sort().join('');

        let bloodType = 'O';
        let labelAr = 'فصيلة O';
        let antigens = 'None (لا توجد مولدات التصاق)';
        let antibodies = 'Anti-A + Anti-B';
        let genotypeDisplay = 'ii';

        if (combo.includes('A') && combo.includes('B')) {
          bloodType = 'AB';
          labelAr = 'فصيلة AB';
          antigens = 'A and B (مولدات A و B)';
          antibodies = 'None (لا توجد أجسام مضادة)';
          genotypeDisplay = 'I^A I^B';
        } else if (combo.includes('A')) {
          bloodType = 'A';
          labelAr = 'فصيلة A';
          antigens = 'Antigen A (مولد A)';
          antibodies = 'Anti-B';
          genotypeDisplay = combo === 'AA' ? 'I^A I^A' : 'I^A i';
        } else if (combo.includes('B')) {
          bloodType = 'B';
          labelAr = 'فصيلة B';
          antigens = 'Antigen B (مولد B)';
          antibodies = 'Anti-A';
          genotypeDisplay = combo === 'BB' ? 'I^B I^B' : 'I^B i';
        }

        row.push({
          genotypeDisplay,
          bloodType,
          labelAr,
          antigens,
          antibodies,
          rowG: a1 === 'i' ? 'i' : `I^${a1}`,
          colG: a2 === 'i' ? 'i' : `I^${a2}`,
        });
      }
      grid.push(row);
    }
    return grid;
  }, [motherBlood, fatherBlood]);

  const hasRhIncompatibility = motherRh === '-' && fatherRh === '+';

  // --- Sex-Linked Calculations ---
  const sexLinkedGrid = useMemo(() => {
    const mGametes =
      motherSexLinked === 'homo_norm'
        ? ['X^H', 'X^H']
        : motherSexLinked === 'carrier'
        ? ['X^H', 'X^h']
        : ['X^h', 'X^h'];

    const fGametes = fatherSexLinked === 'norm' ? ['X^H', 'Y'] : ['X^h', 'Y'];

    const grid: {
      genotype: string;
      sex: 'female' | 'male';
      status: 'normal' | 'carrier' | 'affected';
      descEn: string;
      descAr: string;
      rowG: string;
      colG: string;
    }[][] = [];

    for (let r = 0; r < 2; r++) {
      const row: Array<{
        genotype: string;
        sex: 'female' | 'male';
        status: 'normal' | 'carrier' | 'affected';
        descEn: string;
        descAr: string;
        rowG: string;
        colG: string;
      }> = [];
      for (let c = 0; c < 2; c++) {
        const m = mGametes[r];
        const f = fGametes[c];

        let genotype: string;
        let sex: 'female' | 'male';
        let status: 'normal' | 'carrier' | 'affected';
        let descEn = '';
        let descAr = '';

        if (f === 'Y') {
          sex = 'male';
          genotype = `${m} Y`;
          if (m === 'X^h') {
            status = 'affected';
            descEn = 'Affected Son';
            descAr = 'ذكر مصاب (حامل للمرض)';
          } else {
            status = 'normal';
            descEn = 'Normal Son';
            descAr = 'ذكر سليم';
          }
        } else {
          sex = 'female';
          const alleles = [m, f].sort();
          genotype = `${alleles[0]} ${alleles[1]}`;
          if (m === 'X^h' && f === 'X^h') {
            status = 'affected';
            descEn = 'Affected Daughter';
            descAr = 'أنثى مصابة (نادرة)';
          } else if (m === 'X^h' || f === 'X^h') {
            status = 'carrier';
            descEn = 'Carrier Daughter (Healthy)';
            descAr = 'أنثى حاملة للجين (مظهر سليم)';
          } else {
            status = 'normal';
            descEn = 'Normal Daughter';
            descAr = 'أنثى سليمة تماماً';
          }
        }

        row.push({
          genotype,
          sex,
          status,
          descEn,
          descAr,
          rowG: m,
          colG: f,
        });
      }
      grid.push(row);
    }
    return grid;
  }, [motherSexLinked, fatherSexLinked]);

  return (
    <div
      className={`w-full flex flex-col transition-colors duration-200 ${
        isFullscreen
          ? 'h-full overflow-hidden p-2 sm:p-4 bg-slate-950 text-slate-100'
          : 'space-y-4 text-slate-200'
      }`}
    >
      {/* Top Bar: Mode Selector & Reset */}
      <div
        className={`flex flex-wrap items-center justify-between gap-2.5 p-3 rounded-2xl border backdrop-blur-md shadow-sm shrink-0 ${
          isLight
            ? 'bg-white/90 border-slate-200 text-slate-900 shadow-slate-200/50'
            : 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-slate-950/50'
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="p-2 rounded-xl bg-gradient-to-br from-rose-500 to-indigo-600 text-white shadow-md shrink-0">
            <Dna className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-black tracking-tight flex items-center gap-2 truncate">
              <span>{isAr ? 'استوديو الوراثة ومربعات بانيت وشجرة العائلة' : 'Genetics, Punnett & Pedigree Studio'}</span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-950/60 text-rose-300 border border-rose-800/60 uppercase">
                Heredity
              </span>
            </h2>
            <p className="text-[11px] text-slate-400 truncate">
              {isAr
                ? 'قوانين مندل، فصائل الدم، وتوارث الأمراض عبر شجرة النسب (Pedigree Tree)'
                : 'Mendelian Segregation, Blood Groups, and 3-Generation Pedigree Tree Analysis'}
            </p>
          </div>
        </div>

        {/* Mode switcher tabs & Mute Button */}
        <div className="flex items-center gap-2">
          <div className="flex flex-wrap items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 text-xs">
            {[
              { id: 'monohybrid' as GeneticsMode, labelEn: 'Monohybrid (2×2)', labelAr: 'قانون مندل 1 (2×2)' },
              { id: 'dihybrid' as GeneticsMode, labelEn: 'Dihybrid (4×4)', labelAr: 'قانون مندل 2 (4×4)' },
              { id: 'blood_types' as GeneticsMode, labelEn: 'ABO & Rh', labelAr: 'فصائل الدم و Rh' },
              { id: 'sex_linked' as GeneticsMode, labelEn: 'Sex-Linked (X)', labelAr: 'المرتبطة بالجنس (X)' },
              { id: 'pedigree' as GeneticsMode, labelEn: 'Pedigree Tree', labelAr: 'سجل النسب (شجرة العائلة)' },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => {
                  playTactileClick();
                  setActiveMode(mode.id);
                  setHoveredCell(null);
                }}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeMode === mode.id
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                {isAr ? mode.labelAr : mode.labelEn}
              </button>
            ))}
          </div>

          {/* Audio Mute Toggle */}
          <button
            type="button"
            onClick={handleToggleMute}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              audioMuted
                ? 'bg-slate-800 text-slate-400 border-slate-700'
                : 'bg-rose-950/60 text-rose-300 border-rose-600/50 shadow-xs'
            }`}
            title={audioMuted ? (isAr ? 'تشغيل الصوت' : 'Unmute Audio') : (isAr ? 'كتم الصوت' : 'Mute Audio')}
          >
            {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Studio Body: Controls on Left, Live Matrix / Pedigree Tree in Center/Right */}
      <div
        className={`flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-3.5 ${
          isFullscreen ? 'overflow-hidden' : ''
        }`}
      >
        {/* Left Config Panel */}
        <div
          className={`lg:col-span-4 flex flex-col gap-3 p-3.5 rounded-2xl border shadow-sm ${
            isFullscreen ? 'overflow-y-auto' : ''
          } ${
            isLight
              ? 'bg-white border-slate-200 text-slate-800'
              : 'bg-slate-900/90 border-slate-800 text-slate-200'
          }`}
        >
          {/* Mode 1: Monohybrid Controls */}
          {activeMode === 'monohybrid' && (
            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">
                  {isAr ? 'الصفة الوراثية قيد الدراسة:' : 'Genetic Trait:'}
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {MONOHYBRID_TRAITS.map((trait, idx) => (
                    <button
                      key={trait.id}
                      onClick={() => {
                        playTactileClick();
                        setSelectedTraitIdx(idx);
                      }}
                      className={`p-2 rounded-xl text-left rtl:text-right border transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                        selectedTraitIdx === idx
                          ? 'border-rose-500 bg-rose-500/15 text-rose-300'
                          : 'border-slate-800 hover:bg-slate-800/60 text-slate-300'
                      }`}
                    >
                      <span className="text-base">{trait.icon}</span>
                      <span className="truncate">{isAr ? trait.nameAr.split('(')[0] : trait.nameEn.split('(')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parent 1 Genotype */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                    <span>👩</span> {isAr ? 'التركيب الجيني للأم / الفرد 1 (P1):' : 'Parent 1 Genotype (P1):'}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                    {p1GenoMono === 'dom_homo' ? `${activeTrait.domAllele}${activeTrait.domAllele}` : p1GenoMono === 'hetero' ? `${activeTrait.domAllele}${activeTrait.recAllele}` : `${activeTrait.recAllele}${activeTrait.recAllele}`}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[11px]">
                  {[
                    { id: 'dom_homo' as const, label: `${activeTrait.domAllele}${activeTrait.domAllele} (نقي)`, en: `${activeTrait.domAllele}${activeTrait.domAllele} Pure` },
                    { id: 'hetero' as const, label: `${activeTrait.domAllele}${activeTrait.recAllele} (هجين)`, en: `${activeTrait.domAllele}${activeTrait.recAllele} Hetero` },
                    { id: 'rec_homo' as const, label: `${activeTrait.recAllele}${activeTrait.recAllele} (متنحٍ)`, en: `${activeTrait.recAllele}${activeTrait.recAllele} Recessive` },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => {
                        playGameteFusionSound();
                        setP1GenoMono(btn.id);
                      }}
                      className={`py-1.5 px-1 text-center rounded-lg font-bold border transition-all cursor-pointer ${
                        p1GenoMono === btn.id
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isAr ? btn.label : btn.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parent 2 Genotype */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                    <span>👨</span> {isAr ? 'التركيب الجيني للأب / الفرد 2 (P2):' : 'Parent 2 Genotype (P2):'}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                    {p2GenoMono === 'dom_homo' ? `${activeTrait.domAllele}${activeTrait.domAllele}` : p2GenoMono === 'hetero' ? `${activeTrait.domAllele}${activeTrait.recAllele}` : `${activeTrait.recAllele}${activeTrait.recAllele}`}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[11px]">
                  {[
                    { id: 'dom_homo' as const, label: `${activeTrait.domAllele}${activeTrait.domAllele} (نقي)`, en: `${activeTrait.domAllele}${activeTrait.domAllele} Pure` },
                    { id: 'hetero' as const, label: `${activeTrait.domAllele}${activeTrait.recAllele} (هجين)`, en: `${activeTrait.domAllele}${activeTrait.recAllele} Hetero` },
                    { id: 'rec_homo' as const, label: `${activeTrait.recAllele}${activeTrait.recAllele} (متنحٍ)`, en: `${activeTrait.recAllele}${activeTrait.recAllele} Recessive` },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => {
                        playGameteFusionSound();
                        setP2GenoMono(btn.id);
                      }}
                      className={`py-1.5 px-1 text-center rounded-lg font-bold border transition-all cursor-pointer ${
                        p2GenoMono === btn.id
                          ? 'bg-cyan-600 text-white border-cyan-500 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isAr ? btn.label : btn.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Standard Thanawya Amma Presets */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                  {isAr ? 'تجارب مندل النموذجية في المنهج:' : 'Curriculum Classic Crosses:'}
                </span>
                <div className="flex flex-col gap-1 text-xs">
                  <button
                    onClick={() => {
                      playGameteFusionSound();
                      setP1GenoMono('dom_homo');
                      setP2GenoMono('rec_homo');
                    }}
                    className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 text-left rtl:text-right cursor-pointer flex items-center justify-between"
                  >
                    <span>{isAr ? 'الجيل الأول P1: سائد نقي × متنحٍ (100% هجين)' : 'P1 Cross: Pure Dominant × Recessive (F1 100%)'}</span>
                    <span className="font-mono text-[10px] text-rose-400 font-bold">{activeTrait.domAllele}{activeTrait.domAllele} × {activeTrait.recAllele}{activeTrait.recAllele}</span>
                  </button>
                  <button
                    onClick={() => {
                      playGameteFusionSound();
                      setP1GenoMono('hetero');
                      setP2GenoMono('hetero');
                    }}
                    className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 text-left rtl:text-right cursor-pointer flex items-center justify-between"
                  >
                    <span>{isAr ? 'تزاوج الجيل الأول F1 × F1: هجين × هجين (نسبة 3:1)' : 'F1 Cross: Hetero × Hetero (Ratio 3:1)'}</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-bold">{activeTrait.domAllele}{activeTrait.recAllele} × {activeTrait.domAllele}{activeTrait.recAllele}</span>
                  </button>
                  <button
                    onClick={() => {
                      playGameteFusionSound();
                      setP1GenoMono('hetero');
                      setP2GenoMono('rec_homo');
                    }}
                    className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 text-left rtl:text-right cursor-pointer flex items-center justify-between"
                  >
                    <span>{isAr ? 'التزاوج الاختباري (Test Cross): هجين × متنحٍ (1:1)' : 'Test Cross: Heterozygous × Recessive (1:1)'}</span>
                    <span className="font-mono text-[10px] text-cyan-400 font-bold">{activeTrait.domAllele}{activeTrait.recAllele} × {activeTrait.recAllele}{activeTrait.recAllele}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: Dihybrid Controls */}
          {activeMode === 'dihybrid' && (
            <div className="space-y-3.5">
              <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200">
                <span className="font-bold block mb-1">
                  {isAr ? 'صفتان مستقلتان (قانون التوزيع الحر):' : 'Two Independent Traits (Mendel 2nd Law):'}
                </span>
                <span>
                  {isAr
                    ? '1. شكل البذرة: R (أملس سائد) vs r (مجعد متنحٍ) | 2. لون البذرة: Y (أصفر سائد) vs y (أخضر متنحٍ)'
                    : '1. Seed Shape: R (Round) vs r (Wrinkled) | 2. Seed Color: Y (Yellow) vs y (Green)'}
                </span>
              </div>

              {/* Parent 1 Dihybrid */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 flex items-center justify-between">
                  <span>{isAr ? 'التركيب الجيني للأم (P1):' : 'Mother Genotype (P1):'}</span>
                  <span className="font-mono text-xs font-bold text-indigo-400">{p1Dihybrid}</span>
                </label>
                <select
                  value={p1Dihybrid}
                  onChange={(e) => {
                    playGameteFusionSound();
                    setP1Dihybrid(e.target.value);
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-slate-200 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="RrYy">RrYy (Heterozygous both traits - هجين للصفتين)</option>
                  <option value="RRYY">RRYY (Homozygous Dominant - سائد نقي للصفتين)</option>
                  <option value="rryy">rryy (Homozygous Recessive - متنحٍ نقي للصفتين)</option>
                  <option value="RRYy">RRYy (Round Pure, Yellow Hetero)</option>
                  <option value="RrYY">RrYY (Round Hetero, Yellow Pure)</option>
                  <option value="rrYY">rrYY (Wrinkled Green)</option>
                </select>
              </div>

              {/* Parent 2 Dihybrid */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 flex items-center justify-between">
                  <span>{isAr ? 'التركيب الجيني للأب (P2):' : 'Father Genotype (P2):'}</span>
                  <span className="font-mono text-xs font-bold text-cyan-400">{p2Dihybrid}</span>
                </label>
                <select
                  value={p2Dihybrid}
                  onChange={(e) => {
                    playGameteFusionSound();
                    setP2Dihybrid(e.target.value);
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-slate-200 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-cyan-500"
                >
                  <option value="RrYy">RrYy (Heterozygous both traits - هجين للصفتين)</option>
                  <option value="rryy">rryy (Homozygous Recessive - متنحٍ نقي للصفتين)</option>
                  <option value="RRYY">RRYY (Homozygous Dominant - سائد نقي للصفتين)</option>
                  <option value="Rryy">Rryy (Round Hetero, Green Recessive)</option>
                  <option value="rrYy">rrYy (Wrinkled Recessive, Yellow Hetero)</option>
                </select>
              </div>

              {/* Dihybrid Presets */}
              <div className="pt-2 border-t border-slate-800 space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 block">
                  {isAr ? 'نماذج الامتحانات الرسمية:' : 'Standard Exam Scenarios:'}
                </span>
                <button
                  onClick={() => {
                    playGameteFusionSound();
                    setP1Dihybrid('RrYy');
                    setP2Dihybrid('RrYy');
                  }}
                  className="w-full p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 text-left rtl:text-right cursor-pointer text-xs flex justify-between items-center"
                >
                  <span>{isAr ? 'F1 × F1 هجين ثنائي (النسبة الشهيرة 9:3:3:1)' : 'Classic F1 × F1 Cross (Ratio 9:3:3:1)'}</span>
                  <span className="font-mono text-[10px] text-amber-400 font-bold">RrYy × RrYy</span>
                </button>
                <button
                  onClick={() => {
                    playGameteFusionSound();
                    setP1Dihybrid('RrYy');
                    setP2Dihybrid('rryy');
                  }}
                  className="w-full p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 text-left rtl:text-right cursor-pointer text-xs flex justify-between items-center"
                >
                  <span>{isAr ? 'التزاوج الاختباري الثنائي (النسبة 1:1:1:1)' : 'Dihybrid Test Cross (Ratio 1:1:1:1)'}</span>
                  <span className="font-mono text-[10px] text-cyan-400 font-bold">RrYy × rryy</span>
                </button>
              </div>
            </div>
          )}

          {/* Mode 3: Blood Types & Rh Factor Controls */}
          {activeMode === 'blood_types' && (
            <div className="space-y-3.5">
              {/* Mother Genotype */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-rose-300 flex items-center justify-between">
                  <span>👩 {isAr ? 'فصيلة دم الأم و Rh:' : 'Mother Blood Group & Rh:'}</span>
                  <span className="font-mono font-bold text-rose-400">{motherBlood.phenotypeEn} (Rh{motherRh})</span>
                </span>
                <select
                  value={motherBloodIdx}
                  onChange={(e) => {
                    playTactileClick();
                    setMotherBloodIdx(Number(e.target.value));
                  }}
                  className="w-full py-1.5 px-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 cursor-pointer"
                >
                  {BLOOD_GENOTYPES.map((g, idx) => (
                    <option key={g.id} value={idx}>
                      {isAr ? g.labelAr : g.labelEn}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2 text-xs pt-1">
                  <span className="text-slate-400 text-[11px]">{isAr ? 'عامل ريسوس (Rh):' : 'Rh Factor:'}</span>
                  <button
                    onClick={() => {
                      playTactileClick();
                      setMotherRh('+');
                    }}
                    className={`px-2.5 py-1 rounded-md font-bold text-xs cursor-pointer ${
                      motherRh === '+' ? 'bg-rose-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Rh+
                  </button>
                  <button
                    onClick={() => {
                      playTactileClick();
                      setMotherRh('-');
                    }}
                    className={`px-2.5 py-1 rounded-md font-bold text-xs cursor-pointer ${
                      motherRh === '-' ? 'bg-rose-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Rh-
                  </button>
                </div>
              </div>

              {/* Father Genotype */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-blue-300 flex items-center justify-between">
                  <span>👨 {isAr ? 'فصيلة دم الأب و Rh:' : 'Father Blood Group & Rh:'}</span>
                  <span className="font-mono font-bold text-blue-400">{fatherBlood.phenotypeEn} (Rh{fatherRh})</span>
                </span>
                <select
                  value={fatherBloodIdx}
                  onChange={(e) => {
                    playTactileClick();
                    setFatherBloodIdx(Number(e.target.value));
                  }}
                  className="w-full py-1.5 px-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 cursor-pointer"
                >
                  {BLOOD_GENOTYPES.map((g, idx) => (
                    <option key={g.id} value={idx}>
                      {isAr ? g.labelAr : g.labelEn}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2 text-xs pt-1">
                  <span className="text-slate-400 text-[11px]">{isAr ? 'عامل ريسوس (Rh):' : 'Rh Factor:'}</span>
                  <button
                    onClick={() => {
                      playTactileClick();
                      setFatherRh('+');
                    }}
                    className={`px-2.5 py-1 rounded-md font-bold text-xs cursor-pointer ${
                      fatherRh === '+' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Rh+
                  </button>
                  <button
                    onClick={() => {
                      playTactileClick();
                      setFatherRh('-');
                    }}
                    className={`px-2.5 py-1 rounded-md font-bold text-xs cursor-pointer ${
                      fatherRh === '-' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Rh-
                  </button>
                </div>
              </div>

              {/* Erythroblastosis Fetalis Warning Banner */}
              {hasRhIncompatibility && (
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-xs text-red-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-black text-red-300">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{isAr ? 'حالة عدم توافق عامل ريسوس (خطر على الجنين الثاني):' : 'Rh Incompatibility Risk:'}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-red-300/90">
                    {isAr
                      ? 'الأم Rh- والأب Rh+ يؤدي لتكوين أجسام مضادة (Anti-Rh) في دم الأم أثناء ولادة الجنين الأول. يلزم حقن مصل مضاد (Anti-D) خلال 72 ساعة.'
                      : 'Mother is Rh- and Father is Rh+. First Rh+ child sensitizes mother. Anti-D immunoglobulin required within 72h to protect subsequent pregnancies.'}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Mode 4: Sex-Linked Inheritance Controls */}
          {activeMode === 'sex_linked' && (
            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">
                  {isAr ? 'الصفة المرتبطة بكروموسوم الجنس X:' : 'Sex-Linked Trait (X-linked):'}
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  <button
                    onClick={() => {
                      playTactileClick();
                      setSexLinkedTrait('hemophilia');
                    }}
                    className={`p-2 rounded-xl border text-left rtl:text-right font-bold transition-all cursor-pointer ${
                      sexLinkedTrait === 'hemophilia'
                        ? 'border-rose-500 bg-rose-500/15 text-rose-300'
                        : 'border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    🩸 {isAr ? 'الهيموفيليا (سيولة الدم)' : 'Hemophilia'}
                  </button>
                  <button
                    onClick={() => {
                      playTactileClick();
                      setSexLinkedTrait('colorblind');
                    }}
                    className={`p-2 rounded-xl border text-left rtl:text-right font-bold transition-all cursor-pointer ${
                      sexLinkedTrait === 'colorblind'
                        ? 'border-rose-500 bg-rose-500/15 text-rose-300'
                        : 'border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    👁️ {isAr ? 'عمى الألوان' : 'Color Blindness'}
                  </button>
                </div>
              </div>

              {/* Mother Sex-Linked Status */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-purple-300 block">
                  👩 {isAr ? 'التركيب الجيني للأم (XX):' : 'Mother Genotype (XX):'}
                </span>
                <div className="grid grid-cols-3 gap-1 text-[11px]">
                  {[
                    { id: 'homo_norm' as const, label: 'X^H X^H (سليمة)', en: 'X^H X^H Normal' },
                    { id: 'carrier' as const, label: 'X^H X^h (حاملة)', en: 'X^H X^h Carrier' },
                    { id: 'affected' as const, label: 'X^h X^h (مصابة)', en: 'X^h X^h Affected' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => {
                        playGameteFusionSound();
                        setMotherSexLinked(btn.id);
                      }}
                      className={`p-1.5 rounded-lg text-center font-bold border transition-all cursor-pointer ${
                        motherSexLinked === btn.id
                          ? 'bg-purple-600 text-white border-purple-500 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isAr ? btn.label : btn.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Father Sex-Linked Status */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-cyan-300 block">
                  👨 {isAr ? 'التركيب الجيني للأب (XY):' : 'Father Genotype (XY):'}
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {[
                    { id: 'norm' as const, label: 'X^H Y (ذكر سليم)', en: 'X^H Y Normal' },
                    { id: 'affected' as const, label: 'X^h Y (ذكر مصاب)', en: 'X^h Y Affected' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => {
                        playGameteFusionSound();
                        setFatherSexLinked(btn.id);
                      }}
                      className={`p-2 rounded-lg text-center font-bold border transition-all cursor-pointer ${
                        fatherSexLinked === btn.id
                          ? 'bg-cyan-600 text-white border-cyan-500 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isAr ? btn.label : btn.en}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 space-y-1">
                <span className="font-bold text-slate-300 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{isAr ? 'قاعدة ثانوية عامة هامة:' : 'Key Examination Rule:'}</span>
                </span>
                <p className="text-[11px] leading-relaxed">
                  {isAr
                    ? 'الأب المصاب يورث جين المرض (X) لجميع بناته الإناث ولا يورثه لأي من أبنائه الذكور (لأنه يعطيهم كروموسوم Y).'
                    : 'An affected father transmits the mutant X allele to all his daughters, and never to his sons (who receive Y).'}
                </p>
              </div>
            </div>
          )}

          {/* Mode 5: Pedigree Tree Controls & Genotype Deduction */}
          {activeMode === 'pedigree' && (
            <div className="space-y-3.5">
              {/* Preset Selector */}
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">
                  {isAr ? 'دراسة حالة سجل النسب (شجرة العائلة):' : 'Clinical Pedigree Case Study:'}
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {PEDIGREE_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        playTactileClick();
                        setSelectedPedigreeId(p.id);
                        setDeductions({});
                      }}
                      className={`p-2 rounded-xl border text-left rtl:text-right font-bold transition-all cursor-pointer ${
                        selectedPedigreeId === p.id
                          ? 'border-rose-500 bg-rose-500/15 text-rose-300'
                          : 'border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="truncate">{isAr ? p.nameAr.split(':')[0] : p.nameEn.split(':')[0]}</div>
                      <div className="text-[10px] text-slate-500 font-normal truncate">
                        {isAr ? p.nameAr.split(':')[1] : p.nameEn.split(':')[1]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* International Pedigree Legend */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-2">
                <span className="font-bold text-slate-300 flex items-center gap-1.5 text-[11px]">
                  <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isAr ? 'رموز شجرة العائلة الطبية القياسية:' : 'Standard Pedigree Symbols:'}</span>
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border border-slate-400 bg-slate-900 inline-block" />
                    <span>{isAr ? 'ذكر سليم' : 'Normal Male'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border border-slate-400 bg-slate-900 inline-block" />
                    <span>{isAr ? 'أنثى سليمة' : 'Normal Female'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 bg-rose-500 border border-white inline-block" />
                    <span>{isAr ? 'مصاب بالمرض' : 'Affected Individual'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border border-rose-500 bg-gradient-to-r from-rose-500 to-transparent inline-block" />
                    <span>{isAr ? 'أنثى حاملة للجين' : 'Carrier Female'}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 text-[10px] text-amber-300">
                    <span className="font-bold font-mono">↗ P</span>
                    <span>{isAr ? 'الحالة الدالة (المريض الذي استشار الطبيب)' : 'Proband (Index case patient)'}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Genotype Deduction Challenge */}
              <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>{isAr ? 'تحدي استنتاج التركيب الجيني:' : 'Genotype Deduction Challenge:'}</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleResetDeductions}
                    className="p-1 text-[10px] rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 cursor-pointer"
                    title={isAr ? 'إعادة المحاولة' : 'Reset'}
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{isAr ? 'إعادة' : 'Reset'}</span>
                  </button>
                </div>

                {/* Selected Member Info */}
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{activeMember.sex === 'female' ? '👧' : '👦'}</span>
                      <div>
                        <span className="font-bold text-slate-200">
                          {isAr ? activeMember.nameAr : activeMember.nameEn} ({activeMember.label})
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          {isAr ? activeMember.phenotypeAr : activeMember.phenotypeEn}
                        </span>
                      </div>
                    </div>
                    {deductions[activeMember.id]?.status === 'correct' ? (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{isAr ? 'صحيح!' : 'Solved!'}</span>
                      </span>
                    ) : deductions[activeMember.id]?.status === 'incorrect' ? (
                      <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-bold flex items-center gap-1">
                        <XCircle className="w-3 h-3" />
                        <span>{isAr ? 'حاول ثانية' : 'Try Again'}</span>
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-500 font-bold">
                        {isAr ? 'اختر التركيب:' : 'Select Genotype:'}
                      </span>
                    )}
                  </div>

                  {/* Candidate Buttons */}
                  <div className="grid grid-cols-3 gap-1.5 pt-1 font-mono">
                    {activeMember.candidateGenotypes.map((candidate) => {
                      const isGuessed = deductions[activeMember.id]?.guessed === candidate;
                      const isCorrect = deductions[activeMember.id]?.status === 'correct' && isGuessed;
                      return (
                        <button
                          key={candidate}
                          onClick={() => handleDeduce(activeMember, candidate)}
                          className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                            isCorrect
                              ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                              : isGuessed
                              ? 'bg-rose-600 text-white border-rose-500'
                              : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          {candidate}
                        </button>
                      );
                    })}
                  </div>

                  {/* Pedagogical Hint */}
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <span className="font-bold text-amber-300 flex items-center gap-1 text-[10px]">
                      <HelpCircle className="w-3 h-3" />
                      <span>{isAr ? 'دليل الاستنتاج الوراثي:' : 'Genetic Clue:'}</span>
                    </span>
                    <p className="leading-relaxed">
                      {isAr ? activeMember.hintAr : activeMember.hintEn}
                    </p>
                  </div>
                </div>

                {/* Score Progress */}
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 pt-1">
                  <span>{isAr ? 'الأفراد الذين تم استنتاجهم بنجاح:' : 'Genotypes Solved:'}</span>
                  <span className="text-emerald-400 font-mono">
                    {solvedCount} / {currentPedigree.individuals.length}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Center & Right: Live Punnett Square Matrix / Pedigree Tree & Real-Time Stats */}
        <div className="lg:col-span-8 flex flex-col gap-3 min-h-0">
          {/* Punnett Matrix or Pedigree Tree Container */}
          <div
            className={`p-4 rounded-2xl border shadow-sm flex flex-col items-center justify-center shrink-0 ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            {/* Gametes Legend & Header (only for punnett modes) */}
            {activeMode !== 'pedigree' && (
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-rose-400" />
                  <span>{isAr ? 'مصفوفة مربع بانيت وانعزال الأمشاج (Gametes):' : 'Punnett Square Matrix & Gamete Fusion:'}</span>
                </span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  {isAr ? 'مرر الفأرة فوق أي خلية لرؤية مصدر الأمشاج' : 'Hover any cell to highlight gamete origins'}
                </span>
              </div>
            )}

            {/* Matrix View according to mode */}
            {activeMode === 'monohybrid' && (
              <div className="relative inline-block my-2">
                <div className="grid grid-cols-[auto_120px_120px] gap-2">
                  <div className="w-16 h-12 flex items-center justify-center text-xs font-bold text-slate-500">
                    ♀ \ ♂
                  </div>
                  {monohybridGametes2.map((g, cIdx) => (
                    <div
                      key={cIdx}
                      className={`h-12 rounded-xl flex flex-col items-center justify-center border font-mono font-black text-base transition-all ${
                        hoveredCell?.col === cIdx
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 scale-105 shadow-md'
                          : 'bg-slate-950 border-slate-800 text-cyan-400'
                      }`}
                    >
                      <span className="text-[9px] text-slate-500 uppercase tracking-widest font-sans font-semibold">Gamete</span>
                      <span>{g}</span>
                    </div>
                  ))}

                  {monohybridGrid.map((row, rIdx) => (
                    <React.Fragment key={rIdx}>
                      <div
                        className={`w-16 h-28 rounded-xl flex flex-col items-center justify-center border font-mono font-black text-base transition-all ${
                          hoveredCell?.row === rIdx
                            ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 scale-105 shadow-md'
                            : 'bg-slate-950 border-slate-800 text-indigo-400'
                        }`}
                      >
                        <span className="text-[9px] text-slate-500 uppercase tracking-widest font-sans font-semibold">Gamete</span>
                        <span>{monohybridGametes1[rIdx]}</span>
                      </div>

                      {row.map((cell, cIdx) => {
                        const isHovered = hoveredCell?.row === rIdx && hoveredCell?.col === cIdx;
                        return (
                          <div
                            key={cIdx}
                            onMouseEnter={() => {
                              playGameteFusionSound();
                              setHoveredCell({ row: rIdx, col: cIdx });
                            }}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`h-28 rounded-2xl p-2.5 flex flex-col items-center justify-between border cursor-pointer transition-all ${
                              isHovered
                                ? 'border-rose-400 bg-rose-950/40 shadow-lg scale-102 ring-2 ring-rose-500/30'
                                : cell.isDominant
                                ? 'bg-purple-950/30 border-purple-900/60 hover:border-purple-500/60'
                                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <span className="text-2xl">{activeTrait.icon}</span>
                            <div className="text-center">
                              <div className="font-mono font-black text-lg text-white">
                                {cell.genotype}
                              </div>
                              <div
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                                  cell.isDominant
                                    ? 'bg-purple-900/80 text-purple-200'
                                    : 'bg-slate-800 text-slate-300'
                                }`}
                              >
                                {isAr
                                  ? cell.isDominant
                                    ? activeTrait.domPhenoAr.split(' ')[0]
                                    : activeTrait.recPhenoAr.split(' ')[0]
                                  : cell.isDominant
                                  ? 'Dominant'
                                  : 'Recessive'}
                              </div>
                            </div>
                            <span className="text-[9px] text-slate-500 font-mono">
                              P: {cell.rowG} × {cell.colG}
                            </span>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Dihybrid 4x4 Punnett Grid */}
            {activeMode === 'dihybrid' && (
              <div className="relative inline-block my-1 overflow-x-auto max-w-full">
                <div className="grid grid-cols-[auto_68px_68px_68px_68px] sm:grid-cols-[auto_82px_82px_82px_82px] gap-1.5 text-xs">
                  <div className="w-12 h-10 flex items-center justify-center text-[10px] font-bold text-slate-500">
                    ♀ \ ♂
                  </div>
                  {dihybridGametes2.map((g, cIdx) => (
                    <div
                      key={cIdx}
                      className={`h-10 rounded-lg flex items-center justify-center border font-mono font-black text-xs ${
                        hoveredCell?.col === cIdx ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-950 border-slate-800 text-cyan-400'
                      }`}
                    >
                      {g}
                    </div>
                  ))}

                  {dihybridGrid.map((row, rIdx) => (
                    <React.Fragment key={rIdx}>
                      <div
                        className={`w-12 h-16 rounded-lg flex items-center justify-center border font-mono font-black text-xs ${
                          hoveredCell?.row === rIdx ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300' : 'bg-slate-950 border-slate-800 text-indigo-400'
                        }`}
                      >
                        {dihybridGametes1[rIdx]}
                      </div>

                      {row.map((cell, cIdx) => {
                        const isHovered = hoveredCell?.row === rIdx && hoveredCell?.col === cIdx;
                        return (
                          <div
                            key={cIdx}
                            onMouseEnter={() => {
                              playGameteFusionSound();
                              setHoveredCell({ row: rIdx, col: cIdx });
                            }}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`h-16 rounded-xl p-1 flex flex-col items-center justify-center border transition-all cursor-pointer ${
                              isHovered ? 'scale-105 shadow-md ring-2 ring-amber-400' : ''
                            }`}
                            style={{
                              backgroundColor: isLight ? '#f1f5f9' : '#020617',
                              borderColor: cell.color,
                            }}
                          >
                            <span className="font-mono font-black text-[11px] text-white">
                              {cell.genotype}
                            </span>
                            <span
                              className="text-[9px] font-bold px-1 rounded-sm mt-0.5"
                              style={{ color: cell.color }}
                            >
                              {cell.phenotypeKey}
                            </span>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Blood Types Grid */}
            {activeMode === 'blood_types' && (
              <div className="relative inline-block my-2">
                <div className="grid grid-cols-[auto_130px_130px] gap-2.5">
                  <div className="w-16 h-12 flex items-center justify-center text-xs font-bold text-slate-500">
                    ♀ \ ♂
                  </div>
                  {fatherBlood.alleles.map((a, cIdx) => (
                    <div
                      key={cIdx}
                      className="h-12 rounded-xl flex flex-col items-center justify-center bg-slate-950 border border-slate-800 text-blue-400 font-mono font-bold text-sm"
                    >
                      <span className="text-[9px] text-slate-500 font-sans">Father Allele</span>
                      <span>{a === 'i' ? 'i' : `I^${a}`}</span>
                    </div>
                  ))}

                  {bloodGrid.map((row, rIdx) => (
                    <React.Fragment key={rIdx}>
                      <div className="w-16 h-28 rounded-xl flex flex-col items-center justify-center bg-slate-950 border border-slate-800 text-rose-400 font-mono font-bold text-sm">
                        <span className="text-[9px] text-slate-500 font-sans">Mother Allele</span>
                        <span>{motherBlood.alleles[rIdx] === 'i' ? 'i' : `I^${motherBlood.alleles[rIdx]}`}</span>
                      </div>

                      {row.map((cell, cIdx) => (
                        <div
                          key={cIdx}
                          className="h-28 rounded-2xl p-2.5 flex flex-col items-center justify-between border border-slate-800 bg-slate-950/60 hover:border-slate-700 transition-all cursor-pointer"
                        >
                          <span className="text-xl">🩸</span>
                          <div className="text-center">
                            <div className="font-mono font-black text-sm text-rose-300">
                              {cell.genotypeDisplay}
                            </div>
                            <div className="text-xs font-bold text-white mt-0.5">
                              {isAr ? cell.labelAr : `Type ${cell.bloodType}`}
                            </div>
                          </div>
                          <span className="text-[9px] text-slate-500">
                            {cell.antibodies}
                          </span>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Sex-Linked Grid */}
            {activeMode === 'sex_linked' && (
              <div className="relative inline-block my-2">
                <div className="grid grid-cols-[auto_130px_130px] gap-2.5">
                  <div className="w-16 h-12 flex items-center justify-center text-xs font-bold text-slate-500">
                    ♀ \ ♂
                  </div>
                  {(fatherSexLinked === 'norm' ? ['X^H', 'Y'] : ['X^h', 'Y']).map((g, cIdx) => (
                    <div
                      key={cIdx}
                      className="h-12 rounded-xl flex flex-col items-center justify-center bg-slate-950 border border-slate-800 text-cyan-400 font-mono font-bold text-sm"
                    >
                      <span className="text-[9px] text-slate-500 font-sans">Sperm</span>
                      <span>{g}</span>
                    </div>
                  ))}

                  {sexLinkedGrid.map((row, rIdx) => (
                    <React.Fragment key={rIdx}>
                      <div className="w-16 h-28 rounded-xl flex flex-col items-center justify-center bg-slate-950 border border-slate-800 text-purple-400 font-mono font-bold text-sm">
                        <span className="text-[9px] text-slate-500 font-sans">Ovum</span>
                        <span>{row[0].rowG}</span>
                      </div>

                      {row.map((cell, cIdx) => (
                        <div
                          key={cIdx}
                          className={`h-28 rounded-2xl p-2.5 flex flex-col items-center justify-between border cursor-pointer transition-all ${
                            cell.status === 'affected'
                              ? 'bg-red-950/30 border-red-900/60'
                              : cell.status === 'carrier'
                              ? 'bg-amber-950/20 border-amber-900/60'
                              : 'bg-slate-950/40 border-slate-800'
                          }`}
                        >
                          <span className="text-xl">{cell.sex === 'female' ? '👧' : '👦'}</span>
                          <div className="text-center">
                            <div className="font-mono font-black text-sm text-white">
                              {cell.genotype}
                            </div>
                            <div
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                                cell.status === 'affected'
                                  ? 'bg-red-900/80 text-red-200'
                                  : cell.status === 'carrier'
                                  ? 'bg-amber-900/80 text-amber-200'
                                  : 'bg-emerald-900/80 text-emerald-200'
                              }`}
                            >
                              {isAr ? cell.descAr.split(' ')[0] : cell.descEn.split(' ')[0]}
                            </div>
                          </div>
                          <span className="text-[9px] text-slate-400 font-mono">
                            {cell.sex === 'female' ? 'Female' : 'Male'}
                          </span>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Pedigree Tree Mode View (3 Generations SVG) */}
            {activeMode === 'pedigree' && (
              <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                    <span className="font-bold text-slate-200">
                      {isAr ? currentPedigree.nameAr : currentPedigree.nameEn}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handleOpenOfficialReportModal}
                      className="px-2.5 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                      title={isAr ? 'طباعة ومعاينة التقرير الرسمي A4' : 'Preview & Print Official MoE A4 Report'}
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>{isAr ? 'تقرير المعمل A4' : 'Official A4 Report'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleExportPedigreeReport}
                      className="px-2.5 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      {reportExported ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                      <span>{reportExported ? (isAr ? 'تم التصدير!' : 'Exported!') : (isAr ? 'تصدير MD' : 'Export MD')}</span>
                    </button>
                  </div>
                </div>

                {/* SVG 3-Generation Pedigree Tree */}
                <div className="w-full h-64 flex items-center justify-center">
                  <svg viewBox="0 0 540 240" className="w-full h-full object-contain overflow-visible">
                    {/* Generation Labels on Left Side */}
                    <text x="30" y="49" fill="#94a3b8" fontSize="11" fontWeight="bold" fontFamily="monospace">I</text>
                    <text x="30" y="119" fill="#94a3b8" fontSize="11" fontWeight="bold" fontFamily="monospace">II</text>
                    <text x="30" y="194" fill="#94a3b8" fontSize="11" fontWeight="bold" fontFamily="monospace">III</text>

                    {/* Gen I Connector Lines */}
                    {/* Mating Line I-1 to I-2 */}
                    <line x1="193" y1="45" x2="267" y2="45" stroke="#475569" strokeWidth="2" />
                    {/* Drop line from mating bar */}
                    <line x1="230" y1="45" x2="230" y2="75" stroke="#475569" strokeWidth="2" />
                    {/* Sibship bar for Gen II */}
                    <line x1="110" y1="75" x2="310" y2="75" stroke="#475569" strokeWidth="2" />
                    {/* Drops to Gen II children */}
                    <line x1="110" y1="75" x2="110" y2="102" stroke="#475569" strokeWidth="2" />
                    <line x1="210" y1="75" x2="210" y2="102" stroke="#475569" strokeWidth="2" />
                    <line x1="310" y1="75" x2="310" y2="102" stroke="#475569" strokeWidth="2" />

                    {/* Gen II Mating Line between II-3 and II-4 */}
                    <line x1="323" y1="115" x2="397" y2="115" stroke="#475569" strokeWidth="2" />
                    {/* Drop line to Gen III */}
                    <line x1="360" y1="115" x2="360" y2="145" stroke="#475569" strokeWidth="2" />
                    {/* Sibship bar for Gen III */}
                    <line x1="280" y1="145" x2="440" y2="145" stroke="#475569" strokeWidth="2" />
                    {/* Drops to Gen III children */}
                    <line x1="280" y1="145" x2="280" y2="177" stroke="#475569" strokeWidth="2" />
                    <line x1="360" y1="145" x2="360" y2="177" stroke="#475569" strokeWidth="2" />
                    <line x1="440" y1="145" x2="440" y2="177" stroke="#475569" strokeWidth="2" />

                    {/* Proband Arrow pointing to III-2 */}
                    <g>
                      <line x1="325" y1="225" x2="348" y2="204" stroke="#f59e0b" strokeWidth="2.5" />
                      <polygon points="348,204 338,207 344,215" fill="#f59e0b" />
                      <text x="316" y="235" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">P</text>
                    </g>

                    {/* Render Individuals as Interactive SVG Nodes */}
                    {currentPedigree.individuals.map((ind) => {
                      const isSelected = selectedMemberId === ind.id;
                      const isSolved = deductions[ind.id]?.status === 'correct';
                      const guessedGeno = deductions[ind.id]?.guessed;

                      return (
                        <g
                          key={ind.id}
                          onClick={() => {
                            playTactileClick();
                            setSelectedMemberId(ind.id);
                          }}
                          className="cursor-pointer group"
                        >
                          {/* Selection Halo */}
                          {isSelected && (
                            <circle
                              cx={ind.x}
                              cy={ind.y}
                              r="19"
                              fill="none"
                              stroke="#38bdf8"
                              strokeWidth="2"
                              strokeDasharray="4 2"
                              className="animate-spin origin-center"
                            />
                          )}

                          {/* Node Shape: Square (Male) or Circle (Female) */}
                          {ind.sex === 'male' ? (
                            <g>
                              {ind.status === 'unaffected' ? (
                                <rect
                                  x={ind.x - 13}
                                  y={ind.y - 13}
                                  width="26"
                                  height="26"
                                  fill="#0f172a"
                                  stroke="#cbd5e1"
                                  strokeWidth="2"
                                  rx="2"
                                />
                              ) : ind.status === 'carrier' ? (
                                <g>
                                  <rect
                                    x={ind.x - 13}
                                    y={ind.y - 13}
                                    width="13"
                                    height="26"
                                    fill="#f43f5e"
                                    rx="2"
                                  />
                                  <rect
                                    x={ind.x - 13}
                                    y={ind.y - 13}
                                    width="26"
                                    height="26"
                                    fill="none"
                                    stroke="#f43f5e"
                                    strokeWidth="2"
                                    rx="2"
                                  />
                                </g>
                              ) : (
                                <rect
                                  x={ind.x - 13}
                                  y={ind.y - 13}
                                  width="26"
                                  height="26"
                                  fill="#f43f5e"
                                  stroke="#ffffff"
                                  strokeWidth="2"
                                  rx="2"
                                  className="filter drop-shadow-md"
                                />
                              )}
                            </g>
                          ) : (
                            <g>
                              {ind.status === 'unaffected' ? (
                                <circle
                                  cx={ind.x}
                                  cy={ind.y}
                                  r="13"
                                  fill="#0f172a"
                                  stroke="#cbd5e1"
                                  strokeWidth="2"
                                />
                              ) : ind.status === 'carrier' ? (
                                <g>
                                  <path
                                    d={`M ${ind.x} ${ind.y - 13} A 13 13 0 0 0 ${ind.x} ${ind.y + 13} Z`}
                                    fill="#f43f5e"
                                  />
                                  <circle
                                    cx={ind.x}
                                    cy={ind.y}
                                    r="13"
                                    fill="none"
                                    stroke="#f43f5e"
                                    strokeWidth="2"
                                  />
                                </g>
                              ) : (
                                <circle
                                  cx={ind.x}
                                  cy={ind.y}
                                  r="13"
                                  fill="#f43f5e"
                                  stroke="#ffffff"
                                  strokeWidth="2"
                                  className="filter drop-shadow-md"
                                />
                              )}
                            </g>
                          )}

                          {/* ID Label (e.g. I-1, II-3) */}
                          <text
                            x={ind.x}
                            y={ind.y - 17}
                            fill="#94a3b8"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                            fontFamily="sans-serif"
                          >
                            {ind.label}
                          </text>

                          {/* Solved Genotype Text / Question Mark */}
                          <text
                            x={ind.x}
                            y={ind.y + 24}
                            fill={isSolved ? '#38bdf8' : '#64748b'}
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                            fontFamily="monospace"
                          >
                            {isSolved ? guessedGeno : '?'}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Real-time Telemetry & Mathematical Ratios */}
          <div
            className={`flex-1 min-h-0 p-4 rounded-2xl border shadow-sm flex flex-col justify-between ${
              isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900/90 border-slate-800 text-slate-200'
            }`}
          >
            {/* Monohybrid Real-Time Telemetry */}
            {activeMode === 'monohybrid' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>{isAr ? 'النسب المظهرية والجينية الناتجة:' : 'Phenotypic & Genotypic Outcomes:'}</span>
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                    Ratio: {monohybridStats.dominantCount} : {monohybridStats.recessiveCount}
                  </span>
                </div>

                <div className="w-full h-4 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300"
                    style={{ width: `${monohybridStats.dominantPct}%` }}
                    title={`${monohybridStats.dominantPct}% Dominant`}
                  />
                  <div
                    className="h-full bg-slate-600 transition-all duration-300"
                    style={{ width: `${monohybridStats.recessivePct}%` }}
                    title={`${monohybridStats.recessivePct}% Recessive`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-800/40">
                    <span className="text-[11px] text-purple-300 font-bold block mb-1">
                      {isAr ? activeTrait.domPhenoAr : activeTrait.domPhenoEn}
                    </span>
                    <div className="text-lg font-black text-purple-200">
                      {isAr ? toHindiDigits(monohybridStats.dominantCount) : monohybridStats.dominantCount} / {isAr ? toHindiDigits(4) : 4} ({monohybridStats.dominantPct}%)
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="text-[11px] text-slate-400 font-bold block mb-1">
                      {isAr ? activeTrait.recPhenoAr : activeTrait.recPhenoEn}
                    </span>
                    <div className="text-lg font-black text-slate-200">
                      {isAr ? toHindiDigits(monohybridStats.recessiveCount) : monohybridStats.recessiveCount} / {isAr ? toHindiDigits(4) : 4} ({monohybridStats.recessivePct}%)
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                  <MathRenderer
                    text={
                      isAr
                        ? `\\text{قانون انعزال العوامل: } P_1 \\times P_2 \\implies ${monohybridStats.dominantCount} : ${monohybridStats.recessiveCount} \\; (3 : 1 \\text{ في الجيل الثاني})`
                        : `\\text{Law of Segregation: } P_1 \\times P_2 \\implies ${monohybridStats.dominantCount} : ${monohybridStats.recessiveCount} \\; (3 : 1 \\text{ in } F_2)`
                    }
                  />
                </div>
              </div>
            )}

            {/* Dihybrid Real-Time Telemetry */}
            {activeMode === 'dihybrid' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>{isAr ? 'النسب المظهرية (16 فرد):' : 'Phenotypic Ratios (16 Offspring):'}</span>
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800/60">
                    {dihybridStats.ratios}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { key: 'RY', nameEn: 'Round Yellow', nameAr: 'أملس أصفر', count: dihybridStats.counts.RY, color: '#eab308' },
                    { key: 'Ry', nameEn: 'Round Green', nameAr: 'أملس أخضر', count: dihybridStats.counts.Ry, color: '#22c55e' },
                    { key: 'rY', nameEn: 'Wrinkled Yellow', nameAr: 'مجعد أصفر', count: dihybridStats.counts.rY, color: '#f97316' },
                    { key: 'ry', nameEn: 'Wrinkled Green', nameAr: 'مجعد أخضر', count: dihybridStats.counts.ry, color: '#10b981' },
                  ].map((p) => (
                    <div key={p.key} className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                        <span className="text-[11px] font-bold text-slate-300 truncate">
                          {isAr ? p.nameAr : p.nameEn}
                        </span>
                      </div>
                      <div className="text-base font-black text-white font-mono">
                        {isAr ? toHindiDigits(p.count) : p.count} / {isAr ? toHindiDigits(16) : 16}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <MathRenderer
                    text={
                      isAr
                        ? `\\text{قانون التوزيع الحر لمندل: } 9 : 3 : 3 : 1 \\quad (RrYy \\times RrYy)`
                        : `\\text{Mendel's Law of Independent Assortment: } 9 : 3 : 3 : 1 \\quad (RrYy \\times RrYy)`
                    }
                  />
                </div>
              </div>
            )}

            {/* Blood Groups Real-Time Telemetry */}
            {activeMode === 'blood_types' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-rose-400" />
                    <span>{isAr ? 'توافق نقل الدم والمناعة:' : 'Transfusion Compatibility & Antigens:'}</span>
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800/60">
                    Codominance
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 block">
                      {isAr ? 'المعطي العام (Universal Donor):' : 'Universal Donor:'}
                    </span>
                    <div className="text-sm font-black text-emerald-400">
                      O- (سالب ريسوس)
                    </div>
                    <p className="text-[10px] text-slate-500">
                      {isAr ? 'لا يحتوي على مولدات التصاق A أو B أو Rh' : 'No A, B, or Rh surface antigens'}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 block">
                      {isAr ? 'المستقبل العام (Universal Recipient):' : 'Universal Recipient:'}
                    </span>
                    <div className="text-sm font-black text-cyan-400">
                      AB+ (موجب ريسوس)
                    </div>
                    <p className="text-[10px] text-slate-500">
                      {isAr ? 'بلازما الدم لا تحتوي على أي أجسام مضادة' : 'Plasma contains no Anti-A, Anti-B antibodies'}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <MathRenderer
                    text={
                      isAr
                        ? `\\text{توارث فصائل الدم: السيادة المشتركة بين } I^A \\text{ و } I^B \\implies AB`
                        : `\\text{Blood Group Genetics: Codominance between } I^A \\text{ and } I^B \\implies AB`
                    }
                  />
                </div>
              </div>
            )}

            {/* Sex-Linked Real-Time Telemetry */}
            {activeMode === 'sex_linked' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-purple-400" />
                    <span>{isAr ? 'نسبة الإصابة حسب الجنس (ذكور vs إناث):' : 'Sex-Specific Incidence (Sons vs Daughters):'}</span>
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800/60">
                    Criss-Cross
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-1">
                    <span className="text-[11px] font-bold text-cyan-300 block">
                      👦 {isAr ? 'الأبناء الذكور (XY):' : 'Sons (XY):'}
                    </span>
                    <p className="text-[11px] text-slate-300">
                      {motherSexLinked === 'carrier'
                        ? isAr ? '50% ذكور مصابين : 50% ذكور سليمين' : '50% Affected : 50% Normal'
                        : motherSexLinked === 'affected'
                        ? isAr ? '100% ذكور مصابون حتماً' : '100% Affected Sons'
                        : isAr ? '100% ذكور سليمون تماماً' : '100% Normal Sons'}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-800/40 space-y-1">
                    <span className="text-[11px] font-bold text-purple-300 block">
                      👧 {isAr ? 'البنات الإناث (XX):' : 'Daughters (XX):'}
                    </span>
                    <p className="text-[11px] text-slate-300">
                      {fatherSexLinked === 'affected'
                        ? isAr ? '100% من البنات حاملات للمرض أو مصابات' : '100% Daughters are Carriers or Affected'
                        : isAr ? 'جميع البنات سليمات ظاهرياً (حاملات أو نقيات)' : 'All Daughters phenotypically healthy'}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <MathRenderer
                    text={
                      isAr
                        ? `X^H X^h \\times X^H Y \\implies \\text{الأب يورث كروموسوم } Y \\text{ للذكور و } X \\text{ للإناث}`
                        : `X^H X^h \\times X^H Y \\implies \\text{Father passes } Y \\text{ to sons, } X \\text{ to daughters}`
                    }
                  />
                </div>
              </div>
            )}

            {/* Pedigree Mode Telemetry & Ministerial Analysis */}
            {activeMode === 'pedigree' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-rose-400" />
                    <span>{isAr ? 'القواعد المنهجية لتفسير شجرة العائلة:' : 'Ministerial Pedigree Interpretation Rules:'}</span>
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800/60">
                    Clinical Genetics
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-amber-300 block">
                      {isAr ? '1. التمييز بين السائد والمتنحي:' : '1. Dominant vs Recessive:'}
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {isAr
                        ? 'إذا ولد طفل مصاب لأبوين سليمين (ظاهرياً) فالصفة متنحية حتماً والأبوان هجينان حاملان للمرض. أما إذا ظهرت في كل جيل فالصفة سائدة.'
                        : 'If an affected child is born to unaffected parents, the trait is RECESSIVE and parents are carriers. If it appears in every generation, it is DOMINANT.'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-cyan-300 block">
                      {isAr ? '2. التمييز بين الجسدي والمرتبط بالجنس:' : '2. Autosomal vs X-Linked:'}
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {isAr
                        ? 'الصفات المرتبطة بالجنس تنتقل من الأب المصاب لبناته الإناث ولا تنتقل لأبنائه الذكور مطلقاً، وتكثر الإصابة بين الذكور.'
                        : 'X-linked traits: affected fathers transmit mutant X to all daughters, never to sons. Males are affected much more frequently than females.'}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <MathRenderer
                    text={`$$${currentPedigree.formulaKatex}$$`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Official MoE A4 Lab Report Modal */}
      <LabReportGeneratorModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        initialExperimentId="bio-exp-3"
        lang={lang}
        theme={theme}
      />
    </div>
  );
};
