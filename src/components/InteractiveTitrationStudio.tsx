import React, { useState, useMemo, useEffect } from 'react';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { Language } from '../i18n/translations';
import {
  playBuretteDrip,
  playSuccessFanfare,
  playTactileClick,
  isAudioMuted,
  toggleAudioMuted,
} from '../utils/scienceAudio';
import {
  FlaskConical,
  Droplet,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  Volume2,
  VolumeX,
  FileText,
  FileSpreadsheet,
  Award,
  Check,
  Download,
  Printer,
  AlertCircle,
  BookOpen,
  Play,
  Pause,
  FastForward,
  Calculator,
  TrendingUp,
} from 'lucide-react';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { saveLabReportDraft, loadLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export type TitrationSystemType =
  | 'strong_strong'
  | 'weak_acid_strong_base'
  | 'strong_acid_weak_base'
  | 'diprotic_acid';

export type IndicatorType =
  | 'phenolphthalein'
  | 'methyl_orange'
  | 'bromothymol_blue'
  | 'litmus';

interface SystemConfig {
  id: TitrationSystemType;
  nameEn: string;
  nameAr: string;
  formulaEn: string;
  formulaAr: string;
  analyteEn: string;
  analyteAr: string;
  titrantEn: string;
  titrantAr: string;
  eqVolumeMl: number;
  pKa1?: number;
  pKa2?: number;
  pKb?: number;
  eqPh: number;
  suitableIndicator: IndicatorType;
  descriptionEn: string;
  descriptionAr: string;
}

const SYSTEMS: SystemConfig[] = [
  {
    id: 'strong_strong',
    nameEn: 'HCl + NaOH (Strong Acid / Strong Base)',
    nameAr: 'حمض قوي / قاعدة قوية (HCl + NaOH)',
    formulaEn: '\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}',
    formulaAr: '\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}',
    analyteEn: '25.0 mL of 0.10 M HCl',
    analyteAr: '٢٥٫٠ ملل من ٠٫١٠ مولار HCl',
    titrantEn: '0.10 M NaOH in Burette',
    titrantAr: '٠٫١٠ مولار NaOH في السحاحة',
    eqVolumeMl: 25.0,
    eqPh: 7.0,
    suitableIndicator: 'bromothymol_blue',
    descriptionEn: 'Neutral salt formed. Sharp pH vertical transition from pH 3 to 11 at equivalence (25.0 mL).',
    descriptionAr: 'يتكون ملح متعادل (NaCl). قفزة حادة في الرقم الهيدروجيني من ٣ إلى ١١ عند نقطة التكافؤ (٢٥ ملل).',
  },
  {
    id: 'weak_acid_strong_base',
    nameEn: 'CH₃COOH + NaOH (Weak Acid / Strong Base)',
    nameAr: 'حمض ضعيف / قاعدة قوية (CH₃COOH + NaOH)',
    formulaEn: '\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}',
    formulaAr: '\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}',
    analyteEn: '25.0 mL of 0.10 M Acetic Acid',
    analyteAr: '٢٥٫٠ ملل من ٠٫١٠ مولار حمض الخليك',
    titrantEn: '0.10 M NaOH in Burette',
    titrantAr: '٠٫١٠ مولار NaOH في السحاحة',
    eqVolumeMl: 25.0,
    pKa1: 4.76,
    eqPh: 8.72,
    suitableIndicator: 'phenolphthalein',
    descriptionEn: 'Basic equivalence (pH 8.72) due to acetate hydrolysis. Buffer zone where pH = pKa at half-equivalence (12.5 mL).',
    descriptionAr: 'نقطة تكافؤ قلوية (pH = ٨٫٧٢) لتميؤ أسيتات الصوديوم. منطقة عازلة يتساوى فيها pH مع pKa عند منتصف التكافؤ (١٢٫٥ ملل).',
  },
  {
    id: 'strong_acid_weak_base',
    nameEn: 'HCl + NH₃ (Strong Acid / Weak Base)',
    nameAr: 'حمض قوي / قاعدة ضعيفة (HCl + NH₃)',
    formulaEn: '\\text{HCl} + \\text{NH}_3 \\rightarrow \\text{NH}_4\\text{Cl}',
    formulaAr: '\\text{HCl} + \\text{NH}_3 \\rightarrow \\text{NH}_4\\text{Cl}',
    analyteEn: '25.0 mL of 0.10 M Ammonia',
    analyteAr: '٢٥٫٠ ملل من ٠٫١٠ مولار محلول النشادر',
    titrantEn: '0.10 M HCl in Burette',
    titrantAr: '٠٫١٠ مولار HCl في السحاحة',
    eqVolumeMl: 25.0,
    pKb: 4.75,
    eqPh: 5.28,
    suitableIndicator: 'methyl_orange',
    descriptionEn: 'Acidic equivalence (pH 5.28) due to ammonium hydrolysis. Methyl orange is the optimal ministerial indicator.',
    descriptionAr: 'نقطة تكافؤ حامضية (pH = ٥٫٢٨) لتميؤ كلوريد الأمونيوم. الميثيل البرتقالي هو الدليل الأنسب للوزارة.',
  },
  {
    id: 'diprotic_acid',
    nameEn: 'H₂C₂O₄ + NaOH (Diprotic Oxalic Acid)',
    nameAr: 'حمض ثنائي البروتون (حمض الأكساليك H₂C₂O₄ + NaOH)',
    formulaEn: '\\text{H}_2\\text{C}_2\\text{O}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{C}_2\\text{O}_4 + 2\\text{H}_2\\text{O}',
    formulaAr: '\\text{H}_2\\text{C}_2\\text{O}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{C}_2\\text{O}_4 + 2\\text{H}_2\\text{O}',
    analyteEn: '25.0 mL of 0.05 M Oxalic Acid',
    analyteAr: '٢٥٫٠ ملل من ٠٫٠٥ مولار حمض الأكساليك',
    titrantEn: '0.10 M NaOH in Burette',
    titrantAr: '٠٫١٠ مولار NaOH في السحاحة',
    eqVolumeMl: 25.0,
    pKa1: 1.25,
    pKa2: 4.27,
    eqPh: 8.4,
    suitableIndicator: 'phenolphthalein',
    descriptionEn: 'Diprotic neutralization displaying two successive inflection steps at 12.5 mL and 25.0 mL.',
    descriptionAr: 'معايرة ثنائية البروتون تظهر نقطتي انعطاف عند ١٢٫٥ ملل (البروتون الأول) و٢٥٫٠ ملل (البروتون الثاني).',
  },
];

const INDICATORS: Record<
  IndicatorType,
  {
    nameEn: string;
    nameAr: string;
    range: string;
    getColor: (ph: number) => { bg: string; text: string; labelEn: string; labelAr: string };
  }
> = {
  phenolphthalein: {
    nameEn: 'Phenolphthalein (فـ.ف)',
    nameAr: 'الفينولفثالين (فـ.ف)',
    range: '8.2 - 10.0',
    getColor: (ph) => {
      if (ph < 8.2) return { bg: '#f8fafc', text: 'text-slate-500', labelEn: 'Colorless (Acidic/Neutral)', labelAr: 'عديم اللون (حامضي/متعادل)' };
      if (ph <= 10.0) return { bg: '#f472b6', text: 'text-pink-600', labelEn: 'Faint Pink (Transition)', labelAr: 'وردي باهت (نقطة التحول)' };
      return { bg: '#db2777', text: 'text-pink-700', labelEn: 'Vibrant Magenta/Red', labelAr: 'أحمر وردي داكن (قاعدي)' };
    },
  },
  methyl_orange: {
    nameEn: 'Methyl Orange (م.ب)',
    nameAr: 'الميثيل البرتقالي (م.ب)',
    range: '3.1 - 4.4',
    getColor: (ph) => {
      if (ph < 3.1) return { bg: '#ef4444', text: 'text-rose-600', labelEn: 'Red (Acidic)', labelAr: 'أحمر (حامضي)' };
      if (ph <= 4.4) return { bg: '#f97316', text: 'text-orange-500', labelEn: 'Orange (Equivalence End Point)', labelAr: 'برتقالي (نقطة النهاية)' };
      return { bg: '#eab308', text: 'text-yellow-500', labelEn: 'Yellow (Basic)', labelAr: 'أصفر (قاعدي)' };
    },
  },
  bromothymol_blue: {
    nameEn: 'Bromothymol Blue (أ.ب)',
    nameAr: 'أزرق بروموثيمول (أ.ب)',
    range: '6.0 - 7.6',
    getColor: (ph) => {
      if (ph < 6.0) return { bg: '#eab308', text: 'text-yellow-500', labelEn: 'Yellow (Acidic)', labelAr: 'أصفر (حامضي)' };
      if (ph <= 7.6) return { bg: '#10b981', text: 'text-emerald-500', labelEn: 'Emerald Green (Neutral)', labelAr: 'أخضر زمردي (متعادل)' };
      return { bg: '#2563eb', text: 'text-blue-600', labelEn: 'Deep Blue (Basic)', labelAr: 'أزرق داكن (قاعدي)' };
    },
  },
  litmus: {
    nameEn: 'Litmus (ع.ش)',
    nameAr: 'صبغة عباد الشمس (ع.ش)',
    range: '5.0 - 8.0',
    getColor: (ph) => {
      if (ph < 5.0) return { bg: '#ef4444', text: 'text-rose-600', labelEn: 'Red (Acidic)', labelAr: 'أحمر (حامضي)' };
      if (ph <= 8.0) return { bg: '#8b5cf6', text: 'text-purple-500', labelEn: 'Purple/Violet (Neutral)', labelAr: 'أرجواني (متعادل)' };
      return { bg: '#2563eb', text: 'text-blue-600', labelEn: 'Blue (Basic)', labelAr: 'أزرق (قاعدي)' };
    },
  },
};

// MoE Unknown Acid Practical Exam Target
const GUIDED_UNKNOWN_ACID = {
  nameEn: 'Hydrochloric Acid (Unknown Molarity)',
  nameAr: 'حمض الهيدروكلوريك (مجهول التركيز)',
  pipetteVolumeMl: 25.0, // V_a
  standardBaseMolarity: 0.100, // M_b (NaOH)
  trueMolarity: 0.108, // M_a (true value ~ 0.108 M)
  trueEquivalenceMl: 27.0, // V_b = (0.108 * 25.0) / 0.100 = 27.0 mL
};

export type FlowRate = 'closed' | 'slow' | 'fast' | 'stream';

export interface PurityPreset {
  id: string;
  yearAr: string;
  yearEn: string;
  titleAr: string;
  titleEn: string;
  sampleNameAr: string;
  sampleNameEn: string;
  sampleFormula: string;
  sampleMassG: number;
  molarMass: number;
  titrantNameAr: string;
  titrantNameEn: string;
  titrantFormula: string;
  titrantMolarity: number;
  titrantVolumeMl: number;
  na: number; // stoichiometric coefficient acid
  nb: number; // stoichiometric coefficient base
  isAnalyteBase: boolean;
  questionAr: string;
  questionEn: string;
}

export const PURITY_PRESETS: PurityPreset[] = [
  {
    id: 'preset_2024_naoh',
    yearAr: 'امتحان مصر ٢٠٢٤ (دور أول)',
    yearEn: 'Egypt Thanawya Amma 2024 Exam',
    titleAr: 'عينة هيدروكسيد صوديوم (NaOH) غير نقية مع حمض الهيدروكلوريك',
    titleEn: 'Impure NaOH Sample with Hydrochloric Acid',
    sampleNameAr: 'هيدروكسيد صوديوم غير نقي',
    sampleNameEn: 'Impure NaOH',
    sampleFormula: '\\text{NaOH}',
    sampleMassG: 0.200,
    molarMass: 40.0,
    titrantNameAr: 'حمض الهيدروكلوريك القياسي',
    titrantNameEn: 'Standard HCl Titrant',
    titrantFormula: '\\text{HCl}',
    titrantMolarity: 0.10,
    titrantVolumeMl: 20.0,
    na: 1,
    nb: 1,
    isAnalyteBase: true,
    questionAr: 'أُذيبت عينة غير نقية من الصودا الكاوية كتلتها ٠٫٢٠ جم في الماء، وتطلبت لمعايرتها تماماً ٢٠٫٠ ملل من حمض الهيدروكلوريك تركيزه ٠٫١٠ مولار. احسب النسبة المئوية لنقاء هيدروكسيد الصوديوم في العينة (Na=23, O=16, H=1).',
    questionEn: 'An impure sample of sodium hydroxide weighing 0.20 g was dissolved and required 20.0 mL of 0.10 M HCl for complete neutralization. Calculate the percentage purity of NaOH.',
  },
  {
    id: 'preset_2023_na2co3',
    yearAr: 'امتحان مصر ٢٠٢٣ (دور أول)',
    yearEn: 'Egypt Thanawya Amma 2023 Exam',
    titleAr: 'عينة كربونات صوديوم (Na₂CO₃) غير نقية مع حمض الهيدروكلوريك',
    titleEn: 'Impure Sodium Carbonate with Hydrochloric Acid',
    sampleNameAr: 'كربونات صوديوم غير نقية',
    sampleNameEn: 'Impure Na₂CO₃',
    sampleFormula: '\\text{Na}_2\\text{CO}_3',
    sampleMassG: 1.500,
    molarMass: 106.0,
    titrantNameAr: 'حمض الهيدروكلوريك',
    titrantNameEn: 'Hydrochloric Acid',
    titrantFormula: '\\text{HCl}',
    titrantMolarity: 0.20,
    titrantVolumeMl: 30.0,
    na: 2,
    nb: 1,
    isAnalyteBase: true,
    questionAr: 'أُذيبت عينة من كربونات الصوديوم غير النقية كتلتها ١٫٥٠ جم في الماء، فلزم لمعايرتها ٣٠٫٠ ملل من حمض الهيدروكلوريك تركيزه ٠٫٢٠ مولار. احسب النسبة المئوية لكربونات الصوديوم في العينة (Na=23, C=12, O=16).',
    questionEn: 'An impure sample of Na₂CO₃ weighing 1.50 g required 30.0 mL of 0.20 M HCl for complete neutralization. Calculate the percentage purity of Na₂CO₃ in the sample.',
  },
  {
    id: 'preset_2022_koh',
    yearAr: 'امتحان مصر ٢٠٢٢ (دور أول)',
    yearEn: 'Egypt Thanawya Amma 2022 Exam',
    titleAr: 'عينة هيدروكسيد بوتاسيوم (KOH) مع حمض الكبريتيك ثنائي البروتون',
    titleEn: 'Impure KOH with Diprotic Sulfuric Acid',
    sampleNameAr: 'هيدروكسيد بوتاسيوم غير نقي',
    sampleNameEn: 'Impure KOH',
    sampleFormula: '\\text{KOH}',
    sampleMassG: 0.560,
    molarMass: 56.1,
    titrantNameAr: 'حمض الكبريتيك القياسي',
    titrantNameEn: 'Standard H₂SO₄ Titrant',
    titrantFormula: '\\text{H}_2\\text{SO}_4',
    titrantMolarity: 0.10,
    titrantVolumeMl: 40.0,
    na: 1,
    nb: 2,
    isAnalyteBase: true,
    questionAr: 'عينة غير نقية من هيدروكسيد البوتاسيوم كتلتها ٠٫٥٦ جم تعادلت تماماً مع ٤٠٫٠ ملل من حمض الكبريتيك تركيزه ٠٫١٠ مولار. احسب نسبة الشوائب ونسبة النقاء (K=39, O=16, H=1).',
    questionEn: 'An impure KOH sample of 0.56 g reacted completely with 40.0 mL of 0.10 M H₂SO₄. Calculate the purity percentage and impurity percentage of the sample.',
  },
  {
    id: 'preset_custom',
    yearAr: 'تخصيص حر للمسألة',
    yearEn: 'Custom Problem Builder',
    titleAr: 'بناء وتخصيص مسألة معايرة جديدة',
    titleEn: 'Custom Stoichiometry Problem',
    sampleNameAr: 'عينة غير نقية مخصصة',
    sampleNameEn: 'Custom Impure Sample',
    sampleFormula: '\\text{Sample}',
    sampleMassG: 1.000,
    molarMass: 40.0,
    titrantNameAr: 'المحلول القياسي في السحاحة',
    titrantNameEn: 'Standard Titrant',
    titrantFormula: '\\text{Titrant}',
    titrantMolarity: 0.10,
    titrantVolumeMl: 25.0,
    na: 1,
    nb: 1,
    isAnalyteBase: true,
    questionAr: 'أدخل معطيات مسألتك لحساب كتلة المادة النقية والنسبة المئوية للنقاء ونسبة الشوائب خطوة بخطوة وفق نموذج الإجابة الوزاري.',
    questionEn: 'Enter problem parameters to calculate pure mass, purity %, and step-by-step stoichiometric breakdown.',
  },
];

interface TrialRecord {
  id: number;
  initialMl: number;
  finalMl: number;
  titreMl: number;
  logged: boolean;
}

export const InteractiveTitrationStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Mode: Explore vs MoE Guided Exam vs Purity Solver
  const [studioMode, setStudioMode] = useState<'explore' | 'guided_exam' | 'purity_solver'>('explore');

  // Audio mute state
  const [audioMuted, setAudioMuted] = useState<boolean>(isAudioMuted());

  const handleToggleMute = () => {
    const next = toggleAudioMuted();
    setAudioMuted(next);
    if (!next) playTactileClick();
  };

  const [selectedSystemId, setSelectedSystemId] = useState<TitrationSystemType>('strong_strong');
  const [selectedIndicator, setSelectedIndicator] = useState<IndicatorType>('bromothymol_blue');
  const [titrantAddedMl, setTitrantAddedMl] = useState<number>(15.0);
  const [isStirring, setIsStirring] = useState<boolean>(true);

  // Stopcock continuous flow simulation state
  const [flowRate, setFlowRate] = useState<FlowRate>('closed');
  const [autoStopEquivalence, setAutoStopEquivalence] = useState<boolean>(true);
  const [dripAnimationTick, setDripAnimationTick] = useState<number>(0);

  // Titration curve options
  const [showDerivative, setShowDerivative] = useState<boolean>(false);

  // Guided Practical Exam Trials state
  const [trials, setTrials] = useState<TrialRecord[]>([
    { id: 1, initialMl: 0.0, finalMl: 0.0, titreMl: 0.0, logged: false },
    { id: 2, initialMl: 0.0, finalMl: 0.0, titreMl: 0.0, logged: false },
    { id: 3, initialMl: 0.0, finalMl: 0.0, titreMl: 0.0, logged: false },
  ]);
  const [studentCalculatedMa, setStudentCalculatedMa] = useState<string>('');
  const [reportExported, setReportExported] = useState<boolean>(false);
  const [csvExported, setCsvExported] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  // Purity Solver state
  const [selectedPurityPresetId, setSelectedPurityPresetId] = useState<string>('preset_2024_naoh');
  const [customSampleMass, setCustomSampleMass] = useState<number>(0.200);
  const [customMolarMass, setCustomMolarMass] = useState<number>(40.0);
  const [customTitrantMolarity, setCustomTitrantMolarity] = useState<number>(0.10);
  const [customTitrantVolume, setCustomTitrantVolume] = useState<number>(20.0);
  const [customNa, setCustomNa] = useState<number>(1);
  const [customNb, setCustomNb] = useState<number>(1);
  const [customIsBase, setCustomIsBase] = useState<boolean>(true);

  const currentSystem = useMemo(() => {
    return SYSTEMS.find((s) => s.id === selectedSystemId) || SYSTEMS[0];
  }, [selectedSystemId]);

  // Compute pH at any added volume V
  const calculatePH = (vAdded: number, system: SystemConfig): number => {
    const vInit = 25.0; // mL
    const cInit = 0.10; // M
    const cTitrant = 0.10; // M
    const totalV = vInit + vAdded;

    if (system.id === 'strong_strong') {
      const molesAcid = (cInit * vInit) / 1000;
      const molesBase = (cTitrant * vAdded) / 1000;
      if (vAdded < 25.0) {
        const hConc = (molesAcid - molesBase) / (totalV / 1000);
        return Math.max(1.0, -Math.log10(Math.max(1e-7, hConc)));
      } else if (Math.abs(vAdded - 25.0) < 0.05) {
        return 7.0;
      } else {
        const ohConc = (molesBase - molesAcid) / (totalV / 1000);
        const pOH = -Math.log10(Math.max(1e-7, ohConc));
        return Math.min(13.5, 14.0 - pOH);
      }
    } else if (system.id === 'weak_acid_strong_base') {
      const pKa = system.pKa1 || 4.76;
      if (vAdded <= 0.1) {
        const Ka = Math.pow(10, -pKa);
        const hConc = Math.sqrt(Ka * cInit);
        return -Math.log10(hConc);
      } else if (vAdded < 25.0) {
        const ratio = vAdded / (25.0 - vAdded);
        const ph = pKa + Math.log10(ratio);
        return Math.max(2.88, Math.min(7.5, ph));
      } else if (Math.abs(vAdded - 25.0) < 0.1) {
        return system.eqPh;
      } else {
        const excessBaseMoles = (cTitrant * (vAdded - 25.0)) / 1000;
        const ohConc = excessBaseMoles / (totalV / 1000);
        const pOH = -Math.log10(Math.max(1e-7, ohConc));
        return Math.min(13.2, 14.0 - pOH);
      }
    } else if (system.id === 'strong_acid_weak_base') {
      if (vAdded <= 0.1) return 11.12;
      if (vAdded < 25.0) {
        const pKb = 4.75;
        const ratio = (25.0 - vAdded) / vAdded;
        const pOH = pKb + Math.log10(ratio);
        return Math.max(7.0, 14.0 - pOH);
      } else if (Math.abs(vAdded - 25.0) < 0.1) {
        return system.eqPh;
      } else {
        const excessAcidMoles = (cTitrant * (vAdded - 25.0)) / 1000;
        const hConc = excessAcidMoles / (totalV / 1000);
        return Math.max(1.2, -Math.log10(hConc));
      }
    } else {
      if (vAdded < 12.5) {
        const ratio = vAdded / (12.5 - vAdded + 0.1);
        return Math.max(1.3, 1.25 + 0.9 * Math.log10(Math.max(0.1, ratio)));
      } else if (vAdded < 25.0) {
        const v2 = vAdded - 12.5;
        const ratio = v2 / (12.5 - v2 + 0.1);
        return Math.max(2.8, 4.27 + Math.log10(Math.max(0.1, ratio)));
      } else if (Math.abs(vAdded - 25.0) < 0.2) {
        return 8.4;
      } else {
        const excess = (cTitrant * (vAdded - 25.0)) / 1000;
        const oh = excess / (totalV / 1000);
        return Math.min(13.0, 14.0 + Math.log10(Math.max(1e-6, oh)));
      }
    }
  };

  const currentPH = useMemo(() => {
    return calculatePH(titrantAddedMl, currentSystem);
  }, [titrantAddedMl, currentSystem]);

  const electrodeMv = useMemo(() => {
    // Glass electrode potential vs standard reference: E = 414 mV - (59.16 mV/pH * pH) at 25 °C
    return Math.round(414 - 59.16 * currentPH);
  }, [currentPH]);

  const indicatorColor = useMemo(() => {
    return INDICATORS[selectedIndicator].getColor(currentPH);
  }, [selectedIndicator, currentPH]);

  // Burette volume change handler with audio synthesis
  const changeVolume = (newVal: number) => {
    const clamped = Math.max(0, Math.min(50, parseFloat(newVal.toFixed(1))));
    setTitrantAddedMl(clamped);
    playBuretteDrip();

    // Check equivalence sound
    if (Math.abs(clamped - currentSystem.eqVolumeMl) < 0.15) {
      playSuccessFanfare();
    }
  };

  // Generate SVG path for theoretical curve (0 to 50 mL)
  const curvePoints = useMemo(() => {
    const pts: { x: number; y: number; v: number; ph: number }[] = [];
    const svgWidth = 480;
    const svgHeight = 240;
    const paddingLeft = 45;
    const paddingBottom = 35;
    const paddingTop = 20;
    const paddingRight = 20;

    const plotWidth = svgWidth - paddingLeft - paddingRight;
    const plotHeight = svgHeight - paddingTop - paddingBottom;

    for (let v = 0; v <= 50; v += 0.5) {
      const ph = calculatePH(v, currentSystem);
      const x = paddingLeft + (v / 50) * plotWidth;
      const y = paddingTop + (1 - ph / 14) * plotHeight;
      pts.push({ x, y, v, ph });
    }
    return pts;
  }, [currentSystem]);

  const pathD = useMemo(() => {
    if (curvePoints.length === 0) return '';
    return curvePoints.reduce((acc, pt, idx) => {
      return idx === 0 ? `M ${pt.x},${pt.y}` : `${acc} L ${pt.x},${pt.y}`;
    }, '');
  }, [curvePoints]);

  // Current tracer coordinates on SVG
  const currentMarker = useMemo(() => {
    const svgWidth = 480;
    const svgHeight = 240;
    const paddingLeft = 45;
    const paddingBottom = 35;
    const paddingTop = 20;
    const paddingRight = 20;
    const plotWidth = svgWidth - paddingLeft - paddingRight;
    const plotHeight = svgHeight - paddingTop - paddingBottom;

    const x = paddingLeft + (titrantAddedMl / 50) * plotWidth;
    const y = paddingTop + (1 - currentPH / 14) * plotHeight;
    return { x, y };
  }, [titrantAddedMl, currentPH]);

  const isEquivalenceReached = Math.abs(titrantAddedMl - currentSystem.eqVolumeMl) < 0.4;
  const isHalfEquivalence =
    currentSystem.pKa1 && Math.abs(titrantAddedMl - currentSystem.eqVolumeMl / 2) < 0.4;

  // Continuous Flow Simulation Effect
  useEffect(() => {
    if (flowRate === 'closed') return;

    const intervalMs = flowRate === 'slow' ? 550 : flowRate === 'fast' ? 180 : 70;
    const volIncrement = flowRate === 'slow' ? 0.05 : flowRate === 'fast' ? 0.05 : 0.12;

    const intervalId = window.setInterval(() => {
      setTitrantAddedMl((prev) => {
        const targetEq =
          studioMode === 'guided_exam'
            ? GUIDED_UNKNOWN_ACID.trueEquivalenceMl
            : currentSystem.eqVolumeMl;
        const nextVal = prev + volIncrement;

        if (autoStopEquivalence && prev < targetEq && nextVal >= targetEq) {
          setFlowRate('closed');
          playSuccessFanfare();
          return parseFloat(targetEq.toFixed(2));
        }

        if (nextVal >= 50.0) {
          setFlowRate('closed');
          return 50.0;
        }

        if (flowRate !== 'stream' || Math.random() < 0.25) {
          playBuretteDrip();
        }

        return parseFloat(nextVal.toFixed(2));
      });

      setDripAnimationTick((t) => (t + 1) % 100);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [flowRate, autoStopEquivalence, currentSystem.eqVolumeMl, studioMode]);

  // First-Derivative (dpH / dV) Curve Calculation
  const derivativeData = useMemo(() => {
    if (curvePoints.length < 3) return { pathD: '', maxDeriv: 0, peakPoint: null };

    const pts: { x: number; v: number; deriv: number }[] = [];
    let maxD = 0;
    let peakV = currentSystem.eqVolumeMl;
    let peakX = 45;

    for (let i = 1; i < curvePoints.length - 1; i++) {
      const prev = curvePoints[i - 1];
      const next = curvePoints[i + 1];
      const curr = curvePoints[i];
      const dv = next.v - prev.v;
      const dph = Math.abs(next.ph - prev.ph);
      const deriv = dv > 0 ? dph / dv : 0;
      pts.push({ x: curr.x, v: curr.v, deriv });
      if (deriv > maxD) {
        maxD = deriv;
        peakV = curr.v;
        peakX = curr.x;
      }
    }

    if (maxD <= 0) maxD = 1;

    const baselineY = 205;
    const maxDerivHeight = 160;

    let dStr = '';
    pts.forEach((p, idx) => {
      const dy = baselineY - (p.deriv / maxD) * maxDerivHeight;
      dStr += idx === 0 ? `M ${p.x},${dy}` : ` L ${p.x},${dy}`;
    });

    const peakY = baselineY - maxDerivHeight;

    return {
      pathD: dStr,
      maxDeriv: maxD,
      peakPoint: { x: peakX, y: peakY, v: peakV },
    };
  }, [curvePoints, currentSystem.eqVolumeMl]);

  // Dynamic Buffer Capacity Index (beta)
  const bufferCapacity = useMemo(() => {
    const hConc = Math.pow(10, -currentPH);
    const ohConc = Math.pow(10, -(14 - currentPH));
    if (currentSystem.id === 'weak_acid_strong_base' && currentSystem.pKa1) {
      const Ka = Math.pow(10, -currentSystem.pKa1);
      const cTotal = (0.10 * 25.0) / (25.0 + titrantAddedMl);
      const betaAcid = (cTotal * Ka * hConc) / Math.pow(Ka + hConc, 2);
      return Math.min(0.25, Math.max(0.001, 2.303 * (hConc + ohConc + betaAcid)));
    }
    return Math.min(0.25, Math.max(0.001, 2.303 * (hConc + ohConc)));
  }, [currentPH, currentSystem, titrantAddedMl]);

  // Purity Solver Memoized Calculations
  const activePurityPreset = useMemo(() => {
    return PURITY_PRESETS.find((p) => p.id === selectedPurityPresetId) || PURITY_PRESETS[0];
  }, [selectedPurityPresetId]);

  const purityParams = useMemo(() => {
    if (selectedPurityPresetId === 'preset_custom') {
      return {
        sampleMass: customSampleMass,
        molarMass: customMolarMass,
        titrantM: customTitrantMolarity,
        titrantV: customTitrantVolume,
        na: customNa,
        nb: customNb,
        isBase: customIsBase,
        titleAr: 'مسألة مخصصة',
        titleEn: 'Custom Problem',
        formula: '\\text{Analyte}',
        titrantFormula: '\\text{Titrant}',
      };
    }
    return {
      sampleMass: activePurityPreset.sampleMassG,
      molarMass: activePurityPreset.molarMass,
      titrantM: activePurityPreset.titrantMolarity,
      titrantV: activePurityPreset.titrantVolumeMl,
      na: activePurityPreset.na,
      nb: activePurityPreset.nb,
      isBase: activePurityPreset.isAnalyteBase,
      titleAr: activePurityPreset.titleAr,
      titleEn: activePurityPreset.titleEn,
      formula: activePurityPreset.sampleFormula,
      titrantFormula: activePurityPreset.titrantFormula,
    };
  }, [
    selectedPurityPresetId,
    activePurityPreset,
    customSampleMass,
    customMolarMass,
    customTitrantMolarity,
    customTitrantVolume,
    customNa,
    customNb,
    customIsBase,
  ]);

  const purityCalculation = useMemo(() => {
    const { sampleMass, molarMass, titrantM, titrantV, na, nb, isBase } = purityParams;
    const titrantMoles = titrantM * (titrantV / 1000);
    const analyteMoles = isBase
      ? (titrantMoles * nb) / Math.max(1, na)
      : (titrantMoles * na) / Math.max(1, nb);

    const pureMass = analyteMoles * molarMass;
    const purityPct = sampleMass > 0 ? Math.min(100, Math.max(0, (pureMass / sampleMass) * 100)) : 0;
    const impurityPct = Math.max(0, 100 - purityPct);
    const impurityMass = Math.max(0, sampleMass - pureMass);

    return {
      titrantMoles,
      analyteMoles,
      pureMass,
      purityPct,
      impurityPct,
      impurityMass,
    };
  }, [purityParams]);

  // Guided Exam calculations & stats
  const loggedTrials = trials.filter((t) => t.logged);
  const averageTitreMl = useMemo(() => {
    if (loggedTrials.length === 0) return 0;
    const sum = loggedTrials.reduce((acc, t) => acc + t.titreMl, 0);
    return parseFloat((sum / loggedTrials.length).toFixed(2));
  }, [loggedTrials]);

  const isConcordant = useMemo(() => {
    if (loggedTrials.length < 2) return true;
    const maxT = Math.max(...loggedTrials.map((t) => t.titreMl));
    const minT = Math.min(...loggedTrials.map((t) => t.titreMl));
    return Math.round((maxT - minT) * 100) / 100 <= 0.2;
  }, [loggedTrials]);

  // Log current reading into trial
  const logCurrentIntoTrial = (trialId: number) => {
    playTactileClick();
    setTrials((prev) =>
      prev.map((t) => {
        if (t.id === trialId) {
          return {
            ...t,
            initialMl: 0.0,
            finalMl: titrantAddedMl,
            titreMl: titrantAddedMl,
            logged: true,
          };
        }
        return t;
      })
    );
  };

  // MoE 12-mark Rubric Scoring
  const rubricScore = useMemo(() => {
    let apparatusMarks = 2; // Selected pipette & standard base correctly
    let executionMarks = 0; // Endpoint accuracy
    let empiricalMarks = 0; // 3 trials logged & concordant
    let calculationMarks = 0; // M_a calculation
    let errorMarks = 2; // Error precautions acknowledged

    // Execution: within +/- 0.5 mL of true equivalence (27.0 mL for unknown, or 25.0 mL for system)
    const targetEq = studioMode === 'guided_exam' ? GUIDED_UNKNOWN_ACID.trueEquivalenceMl : currentSystem.eqVolumeMl;
    const dev = Math.abs(averageTitreMl - targetEq);
    if (loggedTrials.length > 0) {
      if (dev <= 0.3) executionMarks = 3;
      else if (dev <= 0.8) executionMarks = 2;
      else executionMarks = 1;
    }

    // Empirical recording
    if (loggedTrials.length === 3 && isConcordant) empiricalMarks = 3;
    else if (loggedTrials.length >= 2) empiricalMarks = 2;
    else if (loggedTrials.length === 1) empiricalMarks = 1;

    // Calculation Accuracy
    const enteredMa = parseFloat(studentCalculatedMa);
    const theoreticalMa = (GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl;
    if (!isNaN(enteredMa) && enteredMa > 0) {
      const calcErr = Math.abs(enteredMa - theoreticalMa);
      if (calcErr <= 0.005) calculationMarks = 2;
      else if (calcErr <= 0.015) calculationMarks = 1;
    } else if (averageTitreMl > 0) {
      // Auto-calculated credit
      calculationMarks = 2;
    }

    const total = apparatusMarks + executionMarks + empiricalMarks + calculationMarks + errorMarks;
    return {
      apparatusMarks,
      executionMarks,
      empiricalMarks,
      calculationMarks,
      errorMarks,
      total,
    };
  }, [loggedTrials, isConcordant, averageTitreMl, studentCalculatedMa, studioMode, currentSystem]);

  // Export practical exam report
  const handleExportReport = () => {
    playSuccessFanfare();
    const reportText = `# Egyptian Ministry of Education (MoE) - Practical Chemistry Examination Worksheet
## Volumetric Neutralization & Unknown Acid Determination
**Date**: ${new Date().toLocaleDateString()}
**Curriculum**: Thanawya Amma (General Secondary Education - Chemistry Chapter 2)

---
### 1. Experimental Apparatus & Reagents
- **Analyte**: Unknown Hydrochloric Acid ($HCl$), Pipette Volume $V_a = ${GUIDED_UNKNOWN_ACID.pipetteVolumeMl} \\text{ mL}$
- **Standard Solution (Titrant)**: Sodium Hydroxide ($NaOH$), Molarity $M_b = ${GUIDED_UNKNOWN_ACID.standardBaseMolarity} \\text{ M}$
- **Indicator Used**: ${selectedIndicator}
- **Apparatus**: Calibrated Class-A Volumetric Pipette, 50 mL Burette with PTFE stopcock, Conical Flask.

---
### 2. Empirical Trial Data Table
| Trial # | Initial Reading ($V_i$, mL) | Final Reading ($V_f$, mL) | Titre Volume ($\\Delta V$, mL) | Concordance Status |
|---|---|---|---|---|
${trials
  .map(
    (t) =>
      `| Trial ${t.id} | ${t.initialMl.toFixed(1)} | ${t.finalMl.toFixed(1)} | ${t.titreMl.toFixed(1)} | ${t.logged ? 'Concordant' : 'Pending'} |`
  )
  .join('\n')}

- **Average Titre Volume ($\\bar{V}_b$)**: ${averageTitreMl.toFixed(2)} mL
- **Concordance Quality**: ${isConcordant ? 'High Precision (\\le 0.2 mL difference)' : 'Requires repeating trial'}

---
### 3. Quantitative Stoichiometric Calculations
$$\\frac{M_a \\cdot V_a}{n_a} = \\frac{M_b \\cdot \\bar{V}_b}{n_b}$$
$$M_a = \\frac{${GUIDED_UNKNOWN_ACID.standardBaseMolarity} \\times ${averageTitreMl.toFixed(2)}}{${GUIDED_UNKNOWN_ACID.pipetteVolumeMl}} = ${((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl).toFixed(4)} \\text{ M}$$

- **Calculated Acid Molarity ($M_a$)**: ${((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl).toFixed(4)} M
- **True Unknown Molarity**: ${GUIDED_UNKNOWN_ACID.trueMolarity} M
- **Percent Error**: ${(
      (Math.abs(((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl) - GUIDED_UNKNOWN_ACID.trueMolarity) /
        GUIDED_UNKNOWN_ACID.trueMolarity) *
      100
    ).toFixed(2)}%

---
### 4. MoE 12-Mark Practical Laboratory Rubric Evaluation
1. Apparatus Setup & Reagents Selection: **${rubricScore.apparatusMarks}/2**
2. Execution & Endpoint Sensitivity: **${rubricScore.executionMarks}/3**
3. Empirical Data Recording across 3 Trials: **${rubricScore.empiricalMarks}/3**
4. Calculation Accuracy & Stoichiometric Law: **${rubricScore.calculationMarks}/2**
5. Error Analysis & Ministerial Precautions: **${rubricScore.errorMarks}/2**
- **TOTAL SCORE**: **${rubricScore.total}/12 Marks** (${rubricScore.total >= 11 ? 'Excellent / ممتاز' : rubricScore.total >= 9 ? 'Very Good / جيد جداً' : 'Good / جيد'})
`;

    const blob = new Blob([reportText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MoE_Titration_Practical_Report_${Date.now()}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setReportExported(true);
    setTimeout(() => setReportExported(false), 3000);
  };

  // Export CSV Data (Curve dataset in explore mode, or 3-trial log in guided mode)
  const handleExportCSV = () => {
    playSuccessFanfare();
    let csvContent = '\uFEFF'; // UTF-8 BOM for Excel compatibility
    if (studioMode === 'explore') {
      csvContent += 'Volume_NaOH_mL,pH,H_Concentration_M,OH_Concentration_M,Electrode_EMF_mV,Solution_State,Indicator_Color\n';
      for (let v = 0; v <= 50; v += 0.5) {
        const ph = calculatePH(v, currentSystem);
        const hConc = Math.pow(10, -ph);
        const ohConc = Math.pow(10, -(14 - ph));
        const emf = Math.round(414 - 59.16 * ph);
        const state = ph < 6.8 ? 'Acidic' : ph > 7.2 ? 'Basic' : 'Neutral';
        const indCol = INDICATORS[selectedIndicator].getColor(ph).labelEn;
        csvContent += `${v.toFixed(1)},${ph.toFixed(2)},${hConc.toExponential(3)},${ohConc.toExponential(3)},${emf},"${state}","${indCol}"\n`;
      }
    } else {
      csvContent += 'Trial_ID,Initial_Burette_mL,Final_Burette_mL,Titre_Volume_mL,Pipette_Analyte_mL,Standard_Base_M,Calculated_Acid_M,Concordance_Status\n';
      trials.forEach((t) => {
        const calcMa = ((GUIDED_UNKNOWN_ACID.standardBaseMolarity * t.titreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl).toFixed(4);
        csvContent += `Trial ${t.id},${t.initialMl.toFixed(1)},${t.finalMl.toFixed(1)},${t.titreMl.toFixed(1)},${GUIDED_UNKNOWN_ACID.pipetteVolumeMl.toFixed(1)},${GUIDED_UNKNOWN_ACID.standardBaseMolarity.toFixed(3)},${t.logged ? calcMa : 'N/A'},"${t.logged ? (isConcordant ? 'Concordant' : 'Variance > 0.2mL') : 'Pending'}"\n`;
      });
      csvContent += `\nSummary_Statistics,Value\n`;
      csvContent += `Average_Titre_mL,${averageTitreMl.toFixed(2)}\n`;
      csvContent += `Pipette_Volume_mL,${GUIDED_UNKNOWN_ACID.pipetteVolumeMl.toFixed(1)}\n`;
      csvContent += `Standard_NaOH_M,${GUIDED_UNKNOWN_ACID.standardBaseMolarity.toFixed(3)}\n`;
      csvContent += `Calculated_HCl_M,${((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl).toFixed(4)}\n`;
      csvContent += `True_HCl_M,${GUIDED_UNKNOWN_ACID.trueMolarity.toFixed(3)}\n`;
      csvContent += `Percent_Discrepancy,${(
        (Math.abs(((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl) - GUIDED_UNKNOWN_ACID.trueMolarity) /
          GUIDED_UNKNOWN_ACID.trueMolarity) *
        100
      ).toFixed(2)}%\n`;
      csvContent += `Rubric_Score,${rubricScore.total} / 12 Marks\n`;
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = studioMode === 'explore'
      ? `titration_curve_${selectedSystemId}_${Date.now()}.csv`
      : `moe_titration_trials_${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setCsvExported(true);
    setTimeout(() => setCsvExported(false), 3000);
  };

  // Open Official MoE A4 Lab Report Generator Modal
  const handleOpenOfficialReportModal = () => {
    playTactileClick();
    const draft = loadLabReportDraft('chem-exp-2');
    if (trials.some((t) => t.logged)) {
      draft.dataTableRows = trials
        .filter((t) => t.logged)
        .map((t) => ({
          trial: `${t.id}`,
          v_acid: `${GUIDED_UNKNOWN_ACID.pipetteVolumeMl.toFixed(1)}`,
          v_base_init: `${t.initialMl.toFixed(2)}`,
          v_base_final: `${t.finalMl.toFixed(2)}`,
          v_base_used: `${t.titreMl.toFixed(2)}`,
          m_acid: `${((GUIDED_UNKNOWN_ACID.standardBaseMolarity * t.titreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl).toFixed(4)}`,
        }));
      draft.conclusionAr = `تم تعيين تركيز حمض الهيدروكلوريك المجهول عملياً بمتوسط حجم مستهلك ${averageTitreMl.toFixed(2)} mL وتركيز ${((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl).toFixed(4)} M بنسبة خطأ معملي ${(
        (Math.abs(((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl) - GUIDED_UNKNOWN_ACID.trueMolarity) /
          GUIDED_UNKNOWN_ACID.trueMolarity) *
        100
      ).toFixed(2)}%.`;
      draft.conclusionEn = `Successfully determined unknown HCl concentration empirically with average titre ${averageTitreMl.toFixed(2)} mL yielding molarity ${((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl).toFixed(4)} M with ${(
        (Math.abs(((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl) - GUIDED_UNKNOWN_ACID.trueMolarity) /
          GUIDED_UNKNOWN_ACID.trueMolarity) *
        100
      ).toFixed(2)}% experimental discrepancy.`;
    }
    draft.rubricCriteria = draft.rubricCriteria.map((c, i) => {
      if (i === 0) return { ...c, earnedMarks: 2 };
      if (i === 1) return { ...c, earnedMarks: rubricScore.apparatusMarks };
      if (i === 2) return { ...c, earnedMarks: rubricScore.empiricalMarks };
      if (i === 3) return { ...c, earnedMarks: Math.min(3, rubricScore.calculationMarks + (rubricScore.executionMarks >= 2 ? 1 : 0)) };
      if (i === 4) return { ...c, earnedMarks: rubricScore.errorMarks };
      return c;
    });
    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
  };

  return (
    <div
      className={`w-full flex flex-col font-sans select-none ${
        isFullscreen
          ? isContrast
            ? 'h-full overflow-hidden p-2 sm:p-4 bg-black text-white'
            : isLight
            ? 'h-full overflow-hidden p-2 sm:p-4 bg-slate-50 text-slate-900'
            : 'h-full overflow-hidden p-2 sm:p-4 bg-[#0D1117] text-[#C9D1D9]'
          : isContrast
          ? 'space-y-4 text-white'
          : isLight
          ? 'space-y-4 text-slate-900'
          : 'space-y-4 text-[#C9D1D9]'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Top Header & System / Indicator Selectors */}
      <div
        className={`rounded-2xl p-3 sm:p-4 shadow-sm shrink-0 flex flex-wrap items-center justify-between gap-3 border transition-colors ${
          isContrast
            ? 'bg-black border-2 border-white'
            : isLight
            ? 'bg-white border-slate-200 shadow-sm'
            : 'bg-[#161B22] border-[#30363D] shadow-md'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md shrink-0">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h3
              className={`text-sm sm:text-base font-black flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              <span>
                {isAr ? 'مختبر منحنيات المعايرة الحجمية والـ pH' : 'Volumetric Titration & pH Curves Studio'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-bold border border-emerald-500/30">
                {isAr ? 'الكيمياء التحليلية' : 'Analytical Chemistry'}
              </span>
            </h3>
            <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isAr
                ? 'تتبع تغير الرقم الهيدروجيني pH، التغير اللوني للأدلة، ونماذج امتحانات المعمل الوزارية'
                : 'Interactive pH curve generation, indicator transition ranges, and MoE practical exam worksheets'}
            </p>
          </div>
        </div>

        {/* Mode Switcher & Tools */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Explore vs Guided MoE Exam vs Purity Solver Toggle */}
          <div
            className={`flex items-center p-1 rounded-xl border text-xs flex-wrap ${
              isLight ? 'bg-slate-100 border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#0D1117] border-[#30363D]'
            }`}
          >
            <button
              type="button"
              onClick={() => {
                playTactileClick();
                setStudioMode('explore');
              }}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                studioMode === 'explore'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isAr ? 'الاستكشاف الحر' : 'Explore Mode'}
            </button>
            <button
              type="button"
              onClick={() => {
                playTactileClick();
                setStudioMode('guided_exam');
                setSelectedSystemId('strong_strong');
                setSelectedIndicator('phenolphthalein');
              }}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                studioMode === 'guided_exam'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isAr ? 'امتحان المعمل (12 درجة)' : 'MoE Practical (12 Marks)'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                playTactileClick();
                setStudioMode('purity_solver');
              }}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                studioMode === 'purity_solver'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{isAr ? 'حاسبة نسبة النقاء' : 'Purity & Stoichiometry'}</span>
            </button>
          </div>

          {/* System & Indicator Selector / Purity Presets */}
          {studioMode === 'explore' ? (
            <>
              <select
                value={selectedSystemId}
                onChange={(e) => {
                  playTactileClick();
                  const sysId = e.target.value as TitrationSystemType;
                  setSelectedSystemId(sysId);
                  const sys = SYSTEMS.find((s) => s.id === sysId);
                  if (sys) setSelectedIndicator(sys.suitableIndicator);
                }}
                className={`border text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50 cursor-pointer ${
                  isLight
                    ? 'bg-slate-100 border-slate-300 text-slate-800'
                    : isContrast
                    ? 'bg-black border-white text-white'
                    : 'bg-[#0D1117] border-[#30363D] text-slate-200'
                }`}
              >
                {SYSTEMS.map((sys) => (
                  <option key={sys.id} value={sys.id}>
                    {isAr ? sys.nameAr : sys.nameEn}
                  </option>
                ))}
              </select>

              <select
                value={selectedIndicator}
                onChange={(e) => {
                  playTactileClick();
                  setSelectedIndicator(e.target.value as IndicatorType);
                }}
                className={`border text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-teal-500/50 cursor-pointer ${
                  isLight
                    ? 'bg-slate-100 border-slate-300 text-slate-800'
                    : isContrast
                    ? 'bg-black border-white text-white'
                    : 'bg-[#0D1117] border-[#30363D] text-slate-200'
                }`}
              >
                {Object.entries(INDICATORS).map(([key, ind]) => (
                  <option key={key} value={key}>
                    {isAr ? ind.nameAr : ind.nameEn} (pH {ind.range})
                  </option>
                ))}
              </select>
            </>
          ) : studioMode === 'purity_solver' ? (
            <select
              value={selectedPurityPresetId}
              onChange={(e) => {
                playTactileClick();
                setSelectedPurityPresetId(e.target.value);
              }}
              className={`border text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-purple-500/50 cursor-pointer ${
                isLight
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : isContrast
                  ? 'bg-black border-white text-white'
                  : 'bg-[#0D1117] border-[#30363D] text-slate-200'
              }`}
            >
              {PURITY_PRESETS.map((p) => (
                <option key={p.id} value={p.id}>
                  {isAr ? `${p.yearAr}: ${p.titleAr}` : `${p.yearEn}: ${p.titleEn}`}
                </option>
              ))}
            </select>
          ) : (
            <div
              className={`text-xs border font-bold px-3 py-1.5 rounded-xl ${
                isLight
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-amber-950/40 border-amber-600/40 text-amber-300'
              }`}
            >
              {isAr ? 'حمض مجهول التركيز (HCl) + دليل الفينولفثالين' : 'Unknown Acid (HCl) + Phenolphthalein'}
            </div>
          )}

          {/* CSV Export Button */}
          <button
            type="button"
            onClick={handleExportCSV}
            className={`p-1.5 px-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold ${
              csvExported
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                : isLight
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                : isContrast
                ? 'bg-black text-white border-white'
                : 'bg-[#0D1117] hover:bg-[#1f2937] text-slate-300 border-[#30363D]'
            }`}
            title={isAr ? 'تصدير البيانات المقاسة كملف CSV' : 'Export Tabular Data as CSV'}
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-mono text-[11px]">{csvExported ? (isAr ? 'تم التصدير!' : 'Exported!') : (isAr ? 'بيانات CSV' : 'CSV Data')}</span>
          </button>

          {/* Audio Mute Toggle */}
          <button
            type="button"
            onClick={handleToggleMute}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              audioMuted
                ? isLight
                  ? 'bg-slate-100 text-slate-500 border-slate-300'
                  : 'bg-slate-800 text-slate-400 border-slate-700'
                : 'bg-emerald-950/60 text-emerald-300 border-emerald-600/50 shadow-xs'
            }`}
            title={audioMuted ? (isAr ? 'تشغيل الصوت' : 'Unmute Audio') : (isAr ? 'كتم الصوت' : 'Mute Audio')}
          >
            {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Reset Button */}
          <button
            type="button"
            onClick={() => {
              playTactileClick();
              setTitrantAddedMl(0.0);
            }}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                : isContrast
                ? 'bg-black text-white border-white'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700'
            }`}
            title={isAr ? 'إعادة التعيين إلى 0 ملل' : 'Reset to 0 mL'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Studio Viewport (Split Grid: Left SVG Curve/Worksheet + Right Flask & Burette HUD) */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 ${
          isFullscreen ? 'flex-1 min-h-0' : ''
        }`}
      >
        {/* Left Area (7 Cols on desktop) */}
        <div
          className={`lg:col-span-7 rounded-3xl p-3 sm:p-4 flex flex-col justify-between overflow-y-auto min-h-0 space-y-3 border transition-colors ${
            isContrast
              ? 'bg-black border-2 border-white text-white'
              : isLight
              ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
              : 'bg-[#161B22] border-[#30363D] text-[#C9D1D9] shadow-md'
          }`}
        >
          {studioMode === 'explore' ? (
            <>
              <div
                className={`flex items-center justify-between pb-2 border-b shrink-0 ${
                  isLight ? 'border-slate-200' : isContrast ? 'border-white' : 'border-[#30363D]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span
                    className={`text-xs font-bold ${
                      isLight ? 'text-slate-900' : isContrast ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {isAr
                      ? 'منحنى تغير الرقم الهيدروجيني بدلالة حجم السحاحة (mL)'
                      : 'pH Titration Curve vs Added Volume (mL)'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      playTactileClick();
                      setShowDerivative((prev) => !prev);
                    }}
                    className={`px-2.5 py-0.5 rounded-lg text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                      showDerivative
                        ? 'bg-amber-500/20 text-amber-500 border-amber-500/50 shadow-xs'
                        : isLight
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-300'
                        : isContrast
                        ? 'bg-black text-white border-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                    }`}
                    title={isAr ? 'عرض المنحنى التفاضلي الأول لتحديد نقطة الانعطاف بدقة' : 'Toggle first derivative curve (dpH/dV) to pinpoint inflection peak'}
                  >
                    <TrendingUp className="w-3 h-3 text-amber-500" />
                    <span>{isAr ? 'المنحنى التفاضلي dpH/dV' : 'Derivative dpH/dV'}</span>
                  </button>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono tabular-mono text-[11px]">
                    {isAr
                      ? `الحجم: ${toHindiDigits(titrantAddedMl.toFixed(1))} ملل`
                      : `V: ${titrantAddedMl.toFixed(1)} mL`}
                  </span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold font-mono tabular-mono text-[11px]">
                    {isAr
                      ? `pH: ${toHindiDigits(currentPH.toFixed(2))}`
                      : `pH: ${currentPH.toFixed(2)}`}
                  </span>
                </div>
              </div>

              {/* SVG Plot Canvas */}
              <div className="flex-1 min-h-[220px] max-h-[360px] w-full flex items-center justify-center p-1 relative">
                <svg viewBox="0 0 480 240" className="w-full h-full max-h-[340px] object-contain overflow-visible">
                  <rect
                    x="45"
                    y="20"
                    width="415"
                    height="185"
                    fill={isContrast ? '#050505' : isLight ? '#f8fafc' : '#0d1117'}
                    stroke={isLight ? '#e2e8f0' : '#30363d'}
                    strokeWidth="1"
                    rx="8"
                  />

                  {/* Horizontal pH Grid Lines */}
                  {[0, 2, 4, 6, 7, 8, 10, 12, 14].map((phVal) => {
                    const y = 20 + (1 - phVal / 14) * 185;
                    const isSeven = phVal === 7;
                    return (
                      <g key={phVal}>
                        <line
                          x1="45"
                          y1={y}
                          x2="460"
                          y2={y}
                          stroke={isSeven ? '#10b981' : isLight ? '#e2e8f0' : '#21262d'}
                          strokeWidth={isSeven ? 1.5 : 1}
                          strokeDasharray={isSeven ? '4 2' : undefined}
                        />
                        <text
                          x="38"
                          y={y + 3.5}
                          fill={isSeven ? '#10b981' : isLight ? '#64748b' : '#8b949e'}
                          fontSize="9"
                          fontWeight={isSeven ? 'bold' : 'normal'}
                          textAnchor="end"
                          fontFamily="monospace"
                        >
                          {isAr ? toHindiDigits(phVal) : phVal}
                        </text>
                      </g>
                    );
                  })}

                  {/* Vertical Volume Grid Lines */}
                  {[10, 20, 25, 30, 40, 50].map((vVal) => {
                    const x = 45 + (vVal / 50) * 415;
                    const isEq = vVal === currentSystem.eqVolumeMl;
                    return (
                      <g key={vVal}>
                        <line
                          x1={x}
                          y1="20"
                          x2={x}
                          y2="205"
                          stroke={isEq ? '#f59e0b' : isLight ? '#e2e8f0' : '#21262d'}
                          strokeWidth={isEq ? 1.5 : 1}
                          strokeDasharray={isEq ? '3 3' : undefined}
                        />
                        <text
                          x={x}
                          y="218"
                          fill={isEq ? '#f59e0b' : isLight ? '#64748b' : '#8b949e'}
                          fontSize="9"
                          fontWeight={isEq ? 'bold' : 'normal'}
                          textAnchor="middle"
                          fontFamily="monospace"
                        >
                          {isAr ? toHindiDigits(vVal) : vVal}
                        </text>
                      </g>
                    );
                  })}

                  {/* Shaded Buffer Zone for Weak Acid */}
                  {currentSystem.pKa1 && (
                    <rect
                      x="45"
                      y="20"
                      width={(currentSystem.eqVolumeMl / 50) * 415}
                      height="185"
                      fill="#06b6d4"
                      fillOpacity={isLight ? 0.12 : 0.06}
                    />
                  )}

                  {/* Theoretical Titration Curve Line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isLight ? '#0284c7' : '#38bdf8'}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* First-Derivative (dpH / dV) Curve Overlay */}
                  {showDerivative && (
                    <g>
                      <path
                        d={derivativeData.pathD}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        strokeLinecap="round"
                        className="transition-all duration-300"
                      />
                      {derivativeData.peakPoint && (
                        <g>
                          <circle
                            cx={derivativeData.peakPoint.x}
                            cy={derivativeData.peakPoint.y}
                            r="4.5"
                            fill="#f59e0b"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                          />
                          <text
                            x={derivativeData.peakPoint.x + 8}
                            y={derivativeData.peakPoint.y + 4}
                            fill="#f59e0b"
                            fontSize="8"
                            fontWeight="bold"
                            fontFamily="monospace"
                          >
                            {isAr
                              ? `ذروة الانعطاف (${toHindiDigits(derivativeData.peakPoint.v)} ملل)`
                              : `Inflection Peak (${derivativeData.peakPoint.v} mL)`}
                          </text>
                        </g>
                      )}
                    </g>
                  )}

                  {/* Equivalence Point Mark */}
                  {(() => {
                    const eqX = 45 + (currentSystem.eqVolumeMl / 50) * 415;
                    const eqY = 20 + (1 - currentSystem.eqPh / 14) * 185;
                    return (
                      <g>
                        <circle cx={eqX} cy={eqY} r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                        <text
                          x={eqX + 7}
                          y={eqY - 4}
                          fill="#f59e0b"
                          fontSize="9"
                          fontWeight="bold"
                          fontFamily="sans-serif"
                        >
                          {isAr ? `نقطة التكافؤ (${currentSystem.eqPh})` : `Equiv (${currentSystem.eqPh})`}
                        </text>
                      </g>
                    );
                  })()}

                  {/* Half-Equivalence Buffer Mark */}
                  {currentSystem.pKa1 &&
                    (() => {
                      const halfX = 45 + ((currentSystem.eqVolumeMl / 2) / 50) * 415;
                      const halfY = 20 + (1 - currentSystem.pKa1 / 14) * 185;
                      return (
                        <g>
                          <circle cx={halfX} cy={halfY} r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                          <text
                            x={halfX - 6}
                            y={halfY - 6}
                            fill="#0284c7"
                            fontSize="8"
                            fontWeight="bold"
                            textAnchor="end"
                          >
                            {isAr ? `منتصف التكافؤ pH=pKa` : `pH = pKa (${currentSystem.pKa1})`}
                          </text>
                        </g>
                      );
                    })()}

                  {/* Current Active Tracer Circle */}
                  <circle
                    cx={currentMarker.x}
                    cy={currentMarker.y}
                    r="6"
                    fill="#ec4899"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </>
          ) : studioMode === 'guided_exam' ? (
            /* Guided MoE Practical Exam Worksheet View */
            <div className="space-y-3.5">
              <div
                className={`flex items-center justify-between pb-2 border-b ${
                  isLight ? 'border-slate-200' : isContrast ? 'border-white' : 'border-[#30363D]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span
                    className={`text-xs font-bold ${
                      isLight ? 'text-slate-900' : isContrast ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {isAr
                      ? 'ورقة امتحان المعمل الوزاري: تعيين تركيز حمض الهيدروكلوريك المجهول'
                      : 'MoE Practical Exam Protocol: Determination of Unknown HCl Molarity'}
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
                    onClick={handleExportCSV}
                    className="px-2.5 py-1 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                    title={isAr ? 'تصدير جدول التجارب إلى ملف CSV' : 'Export Trials Table as CSV'}
                  >
                    {csvExported ? <Check className="w-3.5 h-3.5" /> : <FileSpreadsheet className="w-3.5 h-3.5" />}
                    <span>{csvExported ? (isAr ? 'تم التصدير!' : 'Exported!') : (isAr ? 'تصدير CSV' : 'Export CSV')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleExportReport}
                    className="px-2.5 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    {reportExported ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                    <span>{reportExported ? (isAr ? 'تم التصدير!' : 'Exported!') : (isAr ? 'تصدير MD' : 'Export MD')}</span>
                  </button>
                </div>
              </div>

              {/* Protocol Steps Checklist */}
              <div
                className={`p-3 rounded-2xl border text-xs space-y-2 ${
                  isContrast
                    ? 'bg-black border-white text-white'
                    : isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-800'
                    : 'bg-[#0D1117] border-[#30363D] text-slate-300'
                }`}
              >
                <span className="text-amber-600 dark:text-amber-300 font-bold flex items-center gap-1.5 text-[11px]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isAr ? 'خطوات التجربة العملية الرسمية:' : 'Official Lab Procedure:'}</span>
                </span>
                <ol
                  className={`list-decimal list-inside space-y-1 text-[11px] leading-relaxed ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}
                >
                  <li>{isAr ? 'انقل ٢٥٫٠ ملل من الحمض المجهول بواسطة ماصة عيارية إلى الدورق المخروطي.' : 'Pipette exactly 25.0 mL of unknown HCl into the conical flask.'}</li>
                  <li>{isAr ? 'أضف قطرتين من دليل الفينولفثالين (يظل المحلول عديم اللون في الوسط الحامضي).' : 'Add 2 drops of phenolphthalein indicator (remains colorless in acid).'}</li>
                  <li>{isAr ? 'املأ السحاحة بمحلول الصودا الكاوية القياسي (٠٫١٠ مولار) حتى علامة الصفر.' : 'Fill burette with standard 0.10 M NaOH titrant up to the 0.0 mL mark.'}</li>
                  <li>{isAr ? 'قم بالمعايرة بالتنقيط البطيء حتى ظهور لون وردي باهت مستديم لمدة ٣٠ ثانية.' : 'Titrate dropwise until the first permanent faint pink color persists.'}</li>
                  <li>{isAr ? 'سجل حجم السحاحة وكرر التجربة ٣ مرات للحصول على قراءات متقاربة (Concordant).' : 'Record burette volume and repeat 3 times to obtain concordant titres.'}</li>
                </ol>
              </div>

              {/* Empirical 3-Trial Data Table */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    {isAr ? 'جدول تسجيل التجارب الثلاثية:' : '3-Trial Titration Data Table:'}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono tabular-mono text-[11px]">
                    {isAr ? `متوسط الحجم المستهلك (Vb̄): ${averageTitreMl.toFixed(2)} ملل` : `Average Titre (Vb̄): ${averageTitreMl.toFixed(2)} mL`}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table
                    className={`w-full text-xs text-left rtl:text-right border-collapse rounded-xl overflow-hidden border ${
                      isContrast
                        ? 'bg-black border-white text-white'
                        : isLight
                        ? 'bg-white border-slate-200 text-slate-800'
                        : 'bg-[#0D1117] border-[#30363D] text-slate-300'
                    }`}
                  >
                    <thead>
                      <tr
                        className={`font-bold text-[11px] ${
                          isLight ? 'bg-slate-100 text-slate-700' : isContrast ? 'bg-neutral-900 text-white' : 'bg-[#161B22] text-slate-300'
                        }`}
                      >
                        <th className="p-2">{isAr ? 'التجربة' : 'Trial'}</th>
                        <th className="p-2">{isAr ? 'القراءة الابتدائية (ملل)' : 'Initial (mL)'}</th>
                        <th className="p-2">{isAr ? 'القراءة النهائية (ملل)' : 'Final (mL)'}</th>
                        <th className="p-2">{isAr ? 'الحجم المستهلك (ΔV)' : 'Titre (ΔV)'}</th>
                        <th className="p-2 text-center">{isAr ? 'الإجراء' : 'Action'}</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y font-mono tabular-mono ${isLight ? 'divide-slate-200' : isContrast ? 'divide-neutral-800' : 'divide-[#30363D]'}`}>
                      {trials.map((trial) => (
                        <tr
                          key={trial.id}
                          className={isLight ? 'hover:bg-slate-50' : 'hover:bg-[#161B22]/60'}
                        >
                          <td className="p-2 font-bold font-sans">{isAr ? `المحاولة ${trial.id}` : `Trial ${trial.id}`}</td>
                          <td className="p-2">{trial.initialMl.toFixed(1)}</td>
                          <td className="p-2">{trial.finalMl.toFixed(1)}</td>
                          <td className="p-2 font-bold text-cyan-600 dark:text-cyan-300">{trial.titreMl.toFixed(1)} mL</td>
                          <td className="p-2 text-center">
                            <button
                              type="button"
                              onClick={() => logCurrentIntoTrial(trial.id)}
                              className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-[10px] font-bold cursor-pointer transition-all"
                            >
                              {isAr ? `تسجيل قراءة السحاحة (${titrantAddedMl.toFixed(1)})` : `Log (${titrantAddedMl.toFixed(1)} mL)`}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Concordance Status Alert */}
                {loggedTrials.length >= 2 && (
                  <div
                    className={`p-2 rounded-xl text-[11px] font-bold flex items-center gap-2 border ${
                      isConcordant
                        ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-300'
                        : 'bg-amber-500/15 border-amber-500/40 text-amber-700 dark:text-amber-300'
                    }`}
                  >
                    {isConcordant ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{isAr ? 'القراءات متوافقة ومتقاربة تماماً (الفرق ≤ 0.2 ملل) - مقبولة رسمياً في التصحيح.' : 'Concordant readings (difference ≤ 0.2 mL) - Full empirical credit.'}</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{isAr ? 'تنبيه: الفرق بين القراءات يتجاوز 0.2 ملل، يُرجى إعادة المعايرة لضبط الحجم.' : 'Warning: Titres differ by > 0.2 mL. Please repeat to achieve concordant results.'}</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Molarity Calculation Equation & Input */}
              <div
                className={`p-3 rounded-2xl border space-y-2 text-xs ${
                  isContrast
                    ? 'bg-black border-white text-white'
                    : isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-800'
                    : 'bg-[#0D1117] border-[#30363D] text-slate-300'
                }`}
              >
                <span className="font-bold text-indigo-600 dark:text-indigo-300 block">
                  {isAr ? 'قانون المعايرة وحساب التركيز المجهول (Ma):' : 'Stoichiometric Neutralization Formula:'}
                </span>
                <div
                  className={`p-2 rounded-xl border font-mono text-center text-sm ${
                    isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'
                  }`}
                >
                  <MathRenderer
                    text="$$M_a = \frac{M_b \cdot \bar{V}_b}{V_a} = \frac{0.100 \times \bar{V}_b}{25.0}$$"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                    {isAr ? 'التركيز المحسوب للمجهول (مولار):' : 'Calculated Molarity (M):'}
                  </span>
                  <div className="flex items-center gap-2 font-mono tabular-mono">
                    <input
                      type="number"
                      step="0.001"
                      placeholder={averageTitreMl > 0 ? ((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl).toFixed(4) : "0.108"}
                      value={studentCalculatedMa}
                      onChange={(e) => setStudentCalculatedMa(e.target.value)}
                      className={`w-24 border font-bold px-2 py-1 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-emerald-500 ${
                        isLight
                          ? 'bg-white border-slate-300 text-slate-900'
                          : isContrast
                          ? 'bg-black border-white text-white'
                          : 'bg-[#161B22] border-[#30363D] text-emerald-400'
                      }`}
                    />
                    {averageTitreMl > 0 && !studentCalculatedMa && (
                      <button
                        type="button"
                        onClick={() => setStudentCalculatedMa(((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl).toFixed(4))}
                        className="px-2 py-0.5 rounded-md bg-emerald-950 hover:bg-emerald-900 border border-emerald-600/40 text-emerald-300 text-[10px] font-bold font-sans cursor-pointer transition-all"
                      >
                        {isAr ? 'تطبيق الحساب' : 'Apply Calc'}
                      </button>
                    )}
                    <span className="text-[10px] text-slate-500">
                      ({isAr ? `الحقيقي: ${GUIDED_UNKNOWN_ACID.trueMolarity} M` : `Target: ${GUIDED_UNKNOWN_ACID.trueMolarity} M`})
                    </span>
                  </div>
                </div>
              </div>

              {/* 12-Mark MoE Rubric Scorecard */}
              <div
                className={`p-3 rounded-2xl border space-y-2 text-xs ${
                  isContrast
                    ? 'bg-black border-white'
                    : isLight
                    ? 'bg-slate-50 border-slate-200'
                    : 'bg-[#0D1117] border-[#30363D]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-amber-600 dark:text-amber-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>{isAr ? 'بطاقة تقييم المعمل الوزاري (١٢ درجة):' : 'MoE Practical Rubric Scorecard (12 Marks):'}</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-300 font-mono tabular-mono font-black border border-amber-500/30">
                    {rubricScore.total} / 12 {isAr ? 'درجة' : 'Marks'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-[10px] text-center font-bold">
                  <div className={`p-1.5 rounded-lg border ${isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className="text-slate-400 block">{isAr ? 'الأدوات والأدلة' : 'Apparatus'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono tabular-mono">{rubricScore.apparatusMarks}/2</span>
                  </div>
                  <div className={`p-1.5 rounded-lg border ${isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className="text-slate-400 block">{isAr ? 'دقة نقطة النهاية' : 'Endpoint'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono tabular-mono">{rubricScore.executionMarks}/3</span>
                  </div>
                  <div className={`p-1.5 rounded-lg border ${isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className="text-slate-400 block">{isAr ? 'جدول التجارب' : 'Trials Table'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono tabular-mono">{rubricScore.empiricalMarks}/3</span>
                  </div>
                  <div className={`p-1.5 rounded-lg border ${isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className="text-slate-400 block">{isAr ? 'صحة الحسابات' : 'Calculation'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono tabular-mono">{rubricScore.calculationMarks}/2</span>
                  </div>
                  <div className={`p-1.5 rounded-lg border ${isLight ? 'bg-white border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className="text-slate-400 block">{isAr ? 'تحليل الأخطاء' : 'Error Analysis'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono tabular-mono">{rubricScore.errorMarks}/2</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Ministerial Purity & Mixture Stoichiometry Solver View */
            <div className="space-y-3.5">
              <div
                className={`flex items-center justify-between pb-2 border-b ${
                  isLight ? 'border-slate-200' : isContrast ? 'border-white' : 'border-[#30363D]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-purple-500" />
                  <span
                    className={`text-xs font-bold ${
                      isLight ? 'text-slate-900' : isContrast ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {isAr
                      ? 'حاسبة نسبة النقاء ومسائل المعايرة والتحليل الكمي الكتلوي'
                      : 'Ministerial Purity Percentage & Stoichiometric Mixture Solver'}
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30">
                  {isAr ? activePurityPreset.yearAr : activePurityPreset.yearEn}
                </span>
              </div>

              {/* Question Statement Card */}
              <div
                className={`p-3 rounded-2xl border text-xs space-y-1.5 ${
                  isContrast
                    ? 'bg-black border-white text-white'
                    : isLight
                    ? 'bg-purple-50/60 border-purple-200 text-purple-950'
                    : 'bg-purple-950/20 border-purple-800/40 text-purple-200'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-[11px] text-purple-600 dark:text-purple-300">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isAr ? 'نص مسألة الامتحان الوزاري:' : 'Ministerial Exam Problem:'}</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  {isAr ? activePurityPreset.questionAr : activePurityPreset.questionEn}
                </p>
              </div>

              {/* Interactive Inputs (Custom or Active Preset Parameters) */}
              <div
                className={`p-3 rounded-2xl border space-y-2.5 text-xs ${
                  isContrast
                    ? 'bg-black border-white text-white'
                    : isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-800'
                    : 'bg-[#0D1117] border-[#30363D] text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between font-bold text-[11px]">
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    {isAr ? 'معطيات المسألة والمعايرة:' : 'Titration & Sample Variables:'}
                  </span>
                  <span className="text-purple-600 dark:text-purple-400 font-mono">
                    {purityParams.formula} + {purityParams.titrantFormula}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div>
                    <label className={`block text-[10px] mb-1 font-bold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isAr ? 'كتلة العينة غير النقية (جم):' : 'Sample Mass (g):'}
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      disabled={selectedPurityPresetId !== 'preset_custom'}
                      value={selectedPurityPresetId === 'preset_custom' ? customSampleMass : activePurityPreset.sampleMassG}
                      onChange={(e) => setCustomSampleMass(parseFloat(e.target.value) || 0)}
                      className={`w-full border px-2 py-1 rounded-lg text-xs font-mono font-bold ${
                        isLight
                          ? 'bg-white border-slate-300 text-slate-900 disabled:bg-slate-100 disabled:text-slate-700'
                          : isContrast
                          ? 'bg-black border-white text-white disabled:opacity-80'
                          : 'bg-[#161B22] border-[#30363D] text-emerald-400 disabled:opacity-80'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[10px] mb-1 font-bold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isAr ? 'الكتلة المولية للمادة (جم/مول):' : 'Molar Mass (g/mol):'}
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      disabled={selectedPurityPresetId !== 'preset_custom'}
                      value={selectedPurityPresetId === 'preset_custom' ? customMolarMass : activePurityPreset.molarMass}
                      onChange={(e) => setCustomMolarMass(parseFloat(e.target.value) || 1)}
                      className={`w-full border px-2 py-1 rounded-lg text-xs font-mono font-bold ${
                        isLight
                          ? 'bg-white border-slate-300 text-slate-900 disabled:bg-slate-100 disabled:text-slate-700'
                          : isContrast
                          ? 'bg-black border-white text-white disabled:opacity-80'
                          : 'bg-[#161B22] border-[#30363D] text-emerald-400 disabled:opacity-80'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[10px] mb-1 font-bold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isAr ? 'تركيز المحلول القياسي (M):' : 'Titrant Molarity (M):'}
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      disabled={selectedPurityPresetId !== 'preset_custom'}
                      value={selectedPurityPresetId === 'preset_custom' ? customTitrantMolarity : activePurityPreset.titrantMolarity}
                      onChange={(e) => setCustomTitrantMolarity(parseFloat(e.target.value) || 0)}
                      className={`w-full border px-2 py-1 rounded-lg text-xs font-mono font-bold ${
                        isLight
                          ? 'bg-white border-slate-300 text-slate-900 disabled:bg-slate-100 disabled:text-slate-700'
                          : isContrast
                          ? 'bg-black border-white text-white disabled:opacity-80'
                          : 'bg-[#161B22] border-[#30363D] text-cyan-400 disabled:opacity-80'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[10px] mb-1 font-bold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isAr ? 'حجم المعايرة المستهلك (ملل):' : 'Titrant Volume (mL):'}
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      disabled={selectedPurityPresetId !== 'preset_custom'}
                      value={selectedPurityPresetId === 'preset_custom' ? customTitrantVolume : activePurityPreset.titrantVolumeMl}
                      onChange={(e) => setCustomTitrantVolume(parseFloat(e.target.value) || 0)}
                      className={`w-full border px-2 py-1 rounded-lg text-xs font-mono font-bold ${
                        isLight
                          ? 'bg-white border-slate-300 text-slate-900 disabled:bg-slate-100 disabled:text-slate-700'
                          : isContrast
                          ? 'bg-black border-white text-white disabled:opacity-80'
                          : 'bg-[#161B22] border-[#30363D] text-cyan-400 disabled:opacity-80'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[10px] mb-1 font-bold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isAr ? 'معامل الحمض بالمعادلة (na):' : 'Acid Coeff. (na):'}
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      disabled={selectedPurityPresetId !== 'preset_custom'}
                      value={selectedPurityPresetId === 'preset_custom' ? customNa : activePurityPreset.na}
                      onChange={(e) => setCustomNa(parseInt(e.target.value) || 1)}
                      className={`w-full border px-2 py-1 rounded-lg text-xs font-mono font-bold ${
                        isLight
                          ? 'bg-white border-slate-300 text-slate-900 disabled:bg-slate-100 disabled:text-slate-700'
                          : isContrast
                          ? 'bg-black border-white text-white disabled:opacity-80'
                          : 'bg-[#161B22] border-[#30363D] text-amber-400 disabled:opacity-80'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[10px] mb-1 font-bold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isAr ? 'معامل القلوي بالمعادلة (nb):' : 'Base Coeff. (nb):'}
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      disabled={selectedPurityPresetId !== 'preset_custom'}
                      value={selectedPurityPresetId === 'preset_custom' ? customNb : activePurityPreset.nb}
                      onChange={(e) => setCustomNb(parseInt(e.target.value) || 1)}
                      className={`w-full border px-2 py-1 rounded-lg text-xs font-mono font-bold ${
                        isLight
                          ? 'bg-white border-slate-300 text-slate-900 disabled:bg-slate-100 disabled:text-slate-700'
                          : isContrast
                          ? 'bg-black border-white text-white disabled:opacity-80'
                          : 'bg-[#161B22] border-[#30363D] text-amber-400 disabled:opacity-80'
                      }`}
                    />
                  </div>

                  <div className="col-span-2 flex items-center justify-between pt-1">
                    <span className={`text-[10px] font-bold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isAr ? 'نوع العينة المراد حساب نقائها:' : 'Analyte Type:'}
                    </span>
                    <button
                      type="button"
                      disabled={selectedPurityPresetId !== 'preset_custom'}
                      onClick={() => setCustomIsBase(!customIsBase)}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-bold transition-colors ${
                        (selectedPurityPresetId === 'preset_custom' ? customIsBase : activePurityPreset.isAnalyteBase)
                          ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/40'
                          : 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-500/40'
                      }`}
                    >
                      {(selectedPurityPresetId === 'preset_custom' ? customIsBase : activePurityPreset.isAnalyteBase)
                        ? (isAr ? 'قاعدة / ملح قاعدي (Base)' : 'Base / Basic Salt')
                        : (isAr ? 'حمض (Acid)' : 'Acid')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Visual Purity Proportion Bar */}
              <div
                className={`p-3 rounded-2xl border space-y-2 text-xs ${
                  isContrast
                    ? 'bg-black border-white text-white'
                    : isLight
                    ? 'bg-white border-slate-200 text-slate-800'
                    : 'bg-[#0D1117] border-[#30363D] text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between font-bold">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isAr ? 'النسبة المئوية للنقاء المحسوبة:' : 'Calculated Percentage Purity:'}</span>
                  </span>
                  <span className="text-xl font-mono tabular-mono font-black text-emerald-600 dark:text-emerald-400">
                    {isAr ? toHindiDigits(purityCalculation.purityPct.toFixed(2)) : purityCalculation.purityPct.toFixed(2)}%
                  </span>
                </div>

                {/* Stacked Visual Bar */}
                <div className="w-full h-6 rounded-xl overflow-hidden flex border border-slate-700/50 shadow-inner">
                  <div
                    style={{ width: `${purityCalculation.purityPct}%` }}
                    className="h-full bg-emerald-500 flex items-center justify-center text-[10px] font-black text-slate-950 transition-all duration-500 overflow-hidden px-1"
                    title={isAr ? `المادة النقية: ${purityCalculation.pureMass.toFixed(3)} جم` : `Pure: ${purityCalculation.pureMass.toFixed(3)} g`}
                  >
                    {purityCalculation.purityPct >= 15 && (
                      <span>{isAr ? `نقي ${purityCalculation.purityPct.toFixed(1)}%` : `Pure ${purityCalculation.purityPct.toFixed(1)}%`}</span>
                    )}
                  </div>
                  <div
                    style={{ width: `${purityCalculation.impurityPct}%` }}
                    className="h-full bg-rose-500/80 flex items-center justify-center text-[10px] font-black text-white transition-all duration-500 overflow-hidden px-1"
                    title={isAr ? `شوائب: ${purityCalculation.impurityMass.toFixed(3)} جم` : `Impurities: ${purityCalculation.impurityMass.toFixed(3)} g`}
                  >
                    {purityCalculation.impurityPct >= 15 && (
                      <span>{isAr ? `شوائب ${purityCalculation.impurityPct.toFixed(1)}%` : `Impurities ${purityCalculation.impurityPct.toFixed(1)}%`}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono tabular-mono text-slate-400 pt-1">
                  <span>{isAr ? `كتلة المادة النقية: ${purityCalculation.pureMass.toFixed(4)} جم` : `Pure Mass: ${purityCalculation.pureMass.toFixed(4)} g`}</span>
                  <span>{isAr ? `كتلة الشوائب: ${purityCalculation.impurityMass.toFixed(4)} جم` : `Impurities: ${purityCalculation.impurityMass.toFixed(4)} g`}</span>
                </div>
              </div>

              {/* Step-by-Step KaTeX Derivation Cards */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300 block">
                  {isAr ? 'خطوات الحل النموذجية وفق معايير وزارة التربية والتعليم:' : 'Step-by-Step Ministerial Solution Breakdown:'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className={`p-2.5 rounded-xl border space-y-1 ${isLight ? 'bg-slate-50 border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className="font-bold text-[10px] text-slate-400 block">
                      {isAr ? '١. قانون المعايرة والتكافؤ' : '1. Stoichiometric Law'}
                    </span>
                    <div className="font-mono text-xs">
                      <MathRenderer text="$$\\frac{M_a \\cdot V_a}{n_a} = \\frac{M_b \\cdot V_b}{n_b}$$" />
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-xl border space-y-1 ${isLight ? 'bg-slate-50 border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className="font-bold text-[10px] text-slate-400 block">
                      {isAr ? '٢. عدد مولات المادة النقية المتفاعلة (n)' : '2. Reacted Pure Moles (n)'}
                    </span>
                    <div className="font-mono text-xs">
                      <MathRenderer
                        text={`$$n = \\frac{${purityParams.titrantM.toFixed(2)} \\times ${(purityParams.titrantV / 1000).toFixed(4)} \\times ${purityParams.isBase ? purityParams.nb : purityParams.na}}{${purityParams.isBase ? purityParams.na : purityParams.nb}} = ${purityCalculation.analyteMoles.toFixed(4)} \\text{ mol}$$`}
                      />
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-xl border space-y-1 ${isLight ? 'bg-slate-50 border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className="font-bold text-[10px] text-slate-400 block">
                      {isAr ? '٣. كتلة المادة النقية (جم)' : '3. Mass of Pure Substance (g)'}
                    </span>
                    <div className="font-mono text-xs">
                      <MathRenderer
                        text={`$$m_{\\text{pure}} = n \\times M_m = ${purityCalculation.analyteMoles.toFixed(4)} \\times ${purityParams.molarMass} = ${purityCalculation.pureMass.toFixed(4)} \\text{ g}$$`}
                      />
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-xl border space-y-1 ${isLight ? 'bg-slate-50 border-slate-200' : isContrast ? 'bg-black border-white' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className="font-bold text-[10px] text-slate-400 block">
                      {isAr ? '٤. النسبة المئوية للنقاء والشوائب' : '4. Percentage Purity & Impurities'}
                    </span>
                    <div className="font-mono text-xs">
                      <MathRenderer
                        text={`$$\\text{Purity} = \\frac{${purityCalculation.pureMass.toFixed(3)}}{${purityParams.sampleMass.toFixed(3)}} \\times 100\\% = ${purityCalculation.purityPct.toFixed(2)}\\%$$`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slider & Quick Titration Controls (Active across all modes) */}
          <div className={`space-y-2 pt-2 border-t shrink-0 ${isLight ? 'border-slate-200' : isContrast ? 'border-white' : 'border-[#30363D]'}`}>
            {/* Automated Flow Controls Toolbar */}
            <div
              className={`flex flex-wrap items-center justify-between gap-2 p-2 rounded-2xl border text-xs ${
                isContrast
                  ? 'bg-black border-white text-white'
                  : isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-800'
                  : 'bg-[#0D1117] border-[#30363D] text-slate-300'
              }`}
            >
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] font-bold">
                  {isAr ? 'صنبور السحاحة:' : 'Stopcock:'}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    playTactileClick();
                    setFlowRate('closed');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    flowRate === 'closed'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : isLight
                      ? 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                      : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  <Pause className="w-3 h-3" />
                  <span>{isAr ? 'مغلق' : 'Closed'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playTactileClick();
                    setFlowRate('slow');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    flowRate === 'slow'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : isLight
                      ? 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                      : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  <Droplet className="w-3 h-3" />
                  <span>{isAr ? 'تنقيط بطيء' : 'Slow Drip'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playTactileClick();
                    setFlowRate('fast');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    flowRate === 'fast'
                      ? 'bg-cyan-600 text-white shadow-xs'
                      : isLight
                      ? 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                      : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  <FastForward className="w-3 h-3" />
                  <span>{isAr ? 'تنقيط سريع' : 'Fast Drip'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playTactileClick();
                    setFlowRate('stream');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    flowRate === 'stream'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : isLight
                      ? 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                      : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  <Play className="w-3 h-3" />
                  <span>{isAr ? 'تدفق مستمر' : 'Stream'}</span>
                </button>
              </div>

              {/* Auto-stop at Equivalence Checkbox */}
              <label className="flex items-center gap-1.5 cursor-pointer text-[11px] select-none font-bold">
                <input
                  type="checkbox"
                  checked={autoStopEquivalence}
                  onChange={(e) => setAutoStopEquivalence(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
                <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                  {isAr ? 'توقف تلقائي عند التكافؤ' : 'Auto-stop at Equiv.'}
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between text-xs font-bold">
              <span className={`flex items-center gap-1.5 ${isLight ? 'text-slate-800' : isContrast ? 'text-white' : 'text-slate-300'}`}>
                <Droplet className="w-3.5 h-3.5 text-cyan-500" />
                <span>
                  {isAr ? 'التحكم اليدوي بالسحاحة (الحجم المضاف):' : 'Burette Stopcock (Titrant Added):'}
                </span>
              </span>
              <span className="font-mono tabular-mono text-cyan-600 dark:text-cyan-300 font-black">
                {isAr ? `${toHindiDigits(titrantAddedMl.toFixed(1))} ملل` : `${titrantAddedMl.toFixed(1)} mL`}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="50"
              step="0.1"
              value={titrantAddedMl}
              onChange={(e) => changeVolume(parseFloat(e.target.value))}
              className={`w-full accent-cyan-600 cursor-pointer h-2 rounded-lg ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}
            />

            {/* Micro-Step Adjustment Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 font-mono tabular-mono">
                <button
                  type="button"
                  onClick={() => changeVolume(titrantAddedMl - 1.0)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isLight
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                      : isContrast
                      ? 'bg-black text-white border border-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  -1.0
                </button>
                <button
                  type="button"
                  onClick={() => changeVolume(titrantAddedMl - 0.1)}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isLight
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                      : isContrast
                      ? 'bg-black text-white border border-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  -0.1
                </button>
                <button
                  type="button"
                  onClick={() => changeVolume(titrantAddedMl + 0.1)}
                  className="px-2 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                >
                  +0.1
                </button>
                <button
                  type="button"
                  onClick={() => changeVolume(titrantAddedMl + 1.0)}
                  className="px-2.5 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                >
                  +1.0
                </button>
              </div>

              {/* Quick Jump Buttons */}
              <div className="flex items-center gap-1.5">
                {currentSystem.pKa1 && (
                  <button
                    type="button"
                    onClick={() => changeVolume(12.5)}
                    className="px-2.5 py-1 rounded-lg bg-sky-950 hover:bg-sky-900 border border-sky-600/40 text-sky-300 text-[11px] font-bold transition-all cursor-pointer"
                  >
                    {isAr ? 'منتصف التكافؤ (12.5 ملل)' : 'Half-Eq (12.5 mL)'}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() =>
                    changeVolume(
                      studioMode === 'guided_exam'
                        ? GUIDED_UNKNOWN_ACID.trueEquivalenceMl
                        : currentSystem.eqVolumeMl
                    )
                  }
                  className="px-2.5 py-1 rounded-lg bg-amber-950 hover:bg-amber-900 border border-amber-600/40 text-amber-300 text-[11px] font-bold transition-all cursor-pointer"
                >
                  {isAr
                    ? `نقطة التكافؤ (${studioMode === 'guided_exam' ? GUIDED_UNKNOWN_ACID.trueEquivalenceMl : currentSystem.eqVolumeMl} ملل)`
                    : `Equivalence (${studioMode === 'guided_exam' ? GUIDED_UNKNOWN_ACID.trueEquivalenceMl : currentSystem.eqVolumeMl} mL)`}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Flask & Live Digital pH Meter HUD (5 Cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3 overflow-y-auto min-h-0">
          {/* Digital pH Meter Card */}
          <div
            className={`rounded-3xl p-4 shadow-md space-y-3 border transition-colors ${
              isContrast
                ? 'bg-black border-2 border-white text-white'
                : isLight
                ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
                : 'bg-[#161B22] border-[#30363D] text-[#C9D1D9]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-black uppercase tracking-wider ${
                  isLight ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                {isAr ? 'مقياس الرقم الهيدروجيني الرقمي (مجس زجاجي)' : 'Digital pH Meter & Glass Electrode'}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>

            {/* Instrument LCD Readout Panel */}
            <div
              className={`p-3.5 rounded-2xl border shadow-inner ${
                isContrast
                  ? 'bg-black border-white text-white'
                  : 'bg-[#050B14] border-slate-800 text-emerald-400'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    {isAr ? 'قراءة المجس الكهروكيميائي' : 'Electrode Potential'}
                  </span>
                  <span className="text-xs font-mono tabular-mono text-cyan-400 font-bold">
                    {electrodeMv > 0 ? `+${electrodeMv}` : electrodeMv} mV
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-4xl sm:text-5xl font-black font-mono tabular-mono tracking-tight text-emerald-400">
                    {isAr ? toHindiDigits(currentPH.toFixed(2)) : currentPH.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-500 ml-1.5 font-mono">pH</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono tabular-mono text-slate-400 pt-2 mt-2 border-t border-slate-800/80">
                <span>T = 25.0 °C (298 K)</span>
                <span className="text-cyan-400 font-bold" title="Buffer Capacity Index β">
                  β = {bufferCapacity.toFixed(3)}
                </span>
                <span>Slope: 99.2% Nernstian</span>
              </div>
            </div>

            {/* Chemical State Alert Chip */}
            <div className="flex items-center justify-between text-xs px-1">
              <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                {isAr ? 'حالة المحلول:' : 'Solution State:'}
              </span>
              <span
                className={`font-bold px-2 py-0.5 rounded-md ${
                  currentPH < 6.8
                    ? 'bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/30'
                    : currentPH > 7.2
                    ? 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30'
                    : 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30'
                }`}
              >
                {currentPH < 6.8
                  ? isAr ? 'وسط حمضي' : 'Acidic'
                  : currentPH > 7.2
                  ? isAr ? 'وسط قاعدي' : 'Basic / Alkaline'
                  : isAr ? 'وسط متعادل' : 'Neutral'}
              </span>
            </div>

            {isEquivalenceReached && (
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-xs text-amber-600 dark:text-amber-200 flex items-center gap-2 animate-bounce font-bold">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>
                  {isAr
                    ? 'تم الوصول إلى نقطة التكافؤ الدقيقة (Equivalence Point)!'
                    : 'Exact Equivalence Point Reached!'}
                </span>
              </div>
            )}

            {isHalfEquivalence && (
              <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-xs text-cyan-600 dark:text-cyan-200 flex items-center gap-2 font-bold">
                <Sparkles className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>
                  {isAr
                    ? `منطقة المحلول المنظم: [CH₃COOH] = [CH₃COO⁻] فتكون pH = pKa = ${currentSystem.pKa1}`
                    : `Buffer Midpoint: [HA] = [A⁻] hence pH = pKa = ${currentSystem.pKa1}`}
                </span>
              </div>
            )}
          </div>

          {/* Calibrated 50 mL Burette & Conical Flask Apparatus Card */}
          <div
            className={`rounded-3xl p-4 shadow-md space-y-3 flex-1 flex flex-col justify-between border transition-colors ${
              isContrast
                ? 'bg-black border-2 border-white text-white'
                : isLight
                ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
                : 'bg-[#161B22] border-[#30363D] text-[#C9D1D9]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                {isAr ? 'منظومة السحاحة والدورق المخروطي' : 'Class-A Burette & Erlenmeyer Apparatus'}
              </span>
              <button
                type="button"
                onClick={() => {
                  playTactileClick();
                  setIsStirring((prev) => !prev);
                }}
                className={`text-[10px] px-2.5 py-1 rounded-lg font-bold cursor-pointer transition-all ${
                  isStirring
                    ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/40 shadow-xs'
                    : isLight
                    ? 'bg-slate-100 text-slate-500 border border-slate-200'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                {isAr
                  ? isStirring
                    ? 'التحريك المغناطيسي: يعمل'
                    : 'التحريك: متوقف'
                  : isStirring
                  ? 'Stirrer: ON'
                  : 'Stirrer: OFF'}
              </button>
            </div>

            {/* Comprehensive Photorealistic Laboratory Apparatus SVG */}
            <div className="flex items-center justify-center p-1">
              <div className="relative w-48 sm:w-56 h-80 sm:h-92 flex items-center justify-center">
                <svg viewBox="0 0 220 380" className="w-full h-full drop-shadow-xl overflow-visible">
                  <defs>
                    <linearGradient id="steelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="35%" stopColor="#94a3b8" />
                      <stop offset="70%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    <linearGradient id="glassSheen" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="25%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="75%" stopColor="rgba(56,189,248,0.05)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                    </linearGradient>
                  </defs>

                  {/* 1. Retort Stand & Steel Clamp Rod */}
                  {/* Heavy Cast Iron Base Plate */}
                  <rect x="20" y="360" width="180" height="14" rx="3" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
                  <line x1="21" y1="361" x2="199" y2="361" stroke="#475569" strokeWidth="1" />

                  {/* Vertical Steel Support Rod */}
                  <rect x="38" y="10" width="6" height="350" rx="1.5" fill="url(#steelGrad)" stroke="#334155" strokeWidth="0.5" />

                  {/* Upper Clamp holding Burette */}
                  <path d="M 44 65 L 88 65 L 88 75 L 44 72 Z" fill="#334155" />
                  <circle cx="44" cy="68.5" r="4" fill="#475569" stroke="#1e293b" strokeWidth="0.5" />
                  <rect x="88" y="62" width="10" height="16" rx="2" fill="#475569" stroke="#334155" strokeWidth="0.5" />

                  {/* Lower Clamp holding Stopcock housing */}
                  <path d="M 44 175 L 88 175 L 88 185 L 44 182 Z" fill="#334155" />
                  <circle cx="44" cy="178.5" r="4" fill="#475569" stroke="#1e293b" strokeWidth="0.5" />
                  <rect x="88" y="172" width="10" height="16" rx="2" fill="#475569" stroke="#334155" strokeWidth="0.5" />

                  {/* 2. Magnetic Stirrer Base underneath Erlenmeyer Flask */}
                  <rect x="58" y="352" width="94" height="8" rx="2" fill="#334155" stroke="#1e293b" strokeWidth="0.8" />
                  <rect x="62" y="354" width="86" height="4" rx="1" fill="#475569" />

                  {/* 3. Class-A Calibrated 50 mL Burette */}
                  {/* Outer Glass Barrel */}
                  <rect
                    x="96"
                    y="18"
                    width="18"
                    height="172"
                    rx="1.5"
                    fill={isLight ? 'rgba(241, 245, 249, 0.45)' : 'rgba(15, 23, 42, 0.45)'}
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                  />
                  {/* Glass Lip Top Rim */}
                  <ellipse cx="105" cy="18" rx="10" ry="2.5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />

                  {/* Burette Dynamic Fluid Column */}
                  {/* 0 mL at y=32, 50 mL at y=182 (total 150 px -> 3.0 px/mL) */}
                  {(() => {
                    const meniscusY = 32 + (titrantAddedMl / 50) * 150;
                    const fluidH = Math.max(0, 190 - meniscusY);
                    return (
                      <g>
                        {fluidH > 0 && (
                          <rect
                            x="97.5"
                            y={meniscusY}
                            width="15"
                            height={fluidH}
                            fill="rgba(186, 230, 253, 0.55)"
                          />
                        )}
                        {/* Meniscus Curve Line */}
                        <path
                          d={`M 97.5 ${meniscusY} Q 105 ${meniscusY + 3} 112.5 ${meniscusY}`}
                          fill="none"
                          stroke="#0284c7"
                          strokeWidth="1.5"
                        />
                        <path
                          d={`M 98.5 ${meniscusY + 0.8} Q 105 ${meniscusY + 3.2} 111.5 ${meniscusY + 0.8}`}
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.85)"
                          strokeWidth="0.8"
                        />
                      </g>
                    );
                  })()}

                  {/* Burette Graduation Markings (0 to 50 mL) */}
                  {[0, 10, 20, 30, 40, 50].map((v) => {
                    const y = 32 + (v / 50) * 150;
                    return (
                      <g key={v}>
                        <line x1="108" y1={y} x2="114" y2={y} stroke="#64748b" strokeWidth="1" />
                        <text
                          x="117"
                          y={y + 2.5}
                          fill={isLight ? '#475569' : '#94a3b8'}
                          fontSize="6.5"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {v}
                        </text>
                      </g>
                    );
                  })}
                  {/* Intermediate 5 mL ticks */}
                  {[5, 15, 25, 35, 45].map((v) => {
                    const y = 32 + (v / 50) * 150;
                    return <line key={v} x1="109.5" y1={y} x2="114" y2={y} stroke="#94a3b8" strokeWidth="0.7" />;
                  })}

                  {/* Burette Glass Specular Sheen */}
                  <rect x="98" y="20" width="2" height="168" fill="rgba(255,255,255,0.4)" />
                  <rect x="110" y="20" width="1.5" height="168" fill="rgba(255,255,255,0.2)" />

                  {/* PTFE Stopcock Valve Assembly */}
                  <rect x="92" y="190" width="26" height="12" rx="2" fill="#f1f5f9" stroke="#0284c7" strokeWidth="1" />
                  <rect
                    x="86"
                    y="194"
                    width="38"
                    height="4"
                    rx="1"
                    fill="#0284c7"
                    stroke="#0369a1"
                    strokeWidth="0.8"
                    transform={`rotate(${
                      flowRate === 'stream'
                        ? 90
                        : flowRate === 'fast'
                        ? 60
                        : flowRate === 'slow'
                        ? 30
                        : titrantAddedMl > 0
                        ? 70
                        : 0
                    } 105 196)`}
                    className="transition-transform duration-300"
                  />

                  {/* Glass Discharge Jet Tip */}
                  <path d="M 102 202 L 108 202 L 106 222 L 104 222 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />

                  {/* Active Titrant Droplet / Liquid Jet Stream */}
                  {flowRate === 'stream' ? (
                    <g>
                      {/* Continuous stream from tip to fluid surface */}
                      <line
                        x1="105"
                        y1="222"
                        x2="105"
                        y2={325 - (titrantAddedMl / 50) * 25}
                        stroke="#38bdf8"
                        strokeWidth="1.8"
                        strokeOpacity="0.85"
                      />
                      <line
                        x1="104.5"
                        y1="222"
                        x2="104.5"
                        y2={325 - (titrantAddedMl / 50) * 25}
                        stroke="#ffffff"
                        strokeWidth="0.7"
                        strokeOpacity="0.6"
                      />
                      {/* Splash ripple at impact */}
                      <ellipse
                        cx="105"
                        cy={325 - (titrantAddedMl / 50) * 25}
                        rx="7"
                        ry="2"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="1.2"
                        className="animate-ping origin-[105px_320px]"
                      />
                    </g>
                  ) : flowRate === 'slow' || flowRate === 'fast' ? (
                    <g>
                      {/* Falling droplet with animated Y position */}
                      {(() => {
                        const dropY = 224 + ((dripAnimationTick * (flowRate === 'fast' ? 12 : 7)) % 65);
                        return (
                          <ellipse
                            cx="105"
                            cy={Math.min(310, dropY)}
                            rx="1.5"
                            ry="2.6"
                            fill="#38bdf8"
                            stroke="#ffffff"
                            strokeWidth="0.5"
                          />
                        );
                      })()}
                      {/* Surface ripple ring */}
                      <ellipse
                        cx="105"
                        cy={325 - (titrantAddedMl / 50) * 25}
                        rx={3 + (dripAnimationTick % 5)}
                        ry={1 + (dripAnimationTick % 5) * 0.3}
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="0.8"
                        opacity={0.8 - (dripAnimationTick % 5) * 0.15}
                      />
                    </g>
                  ) : titrantAddedMl > 0 && titrantAddedMl < 50 ? (
                    <g className="animate-pulse">
                      <ellipse cx="105" cy="226" rx="1.5" ry="2.2" fill="#38bdf8" />
                    </g>
                  ) : null}

                  {/* 4. Conical Flask (Erlenmeyer, 250 mL) */}
                  {/* Dynamic Fluid Volume: base 25 mL at y=325, rises to y=300 at 75 mL */}
                  {(() => {
                    const fluidTopY = 325 - (titrantAddedMl / 50) * 25;
                    // Compute left and right X along the flask conical slope
                    // Top neck at y=256: x=94 to 116 (width 22)
                    // Bottom base at y=350: x=60 to 150 (width 90)
                    const t = (fluidTopY - 256) / (350 - 256);
                    const leftX = 94 - (94 - 60) * t;
                    const rightX = 116 + (150 - 116) * t;
                    const fluidPath = `M ${leftX} ${fluidTopY} Q 105 ${fluidTopY + 3} ${rightX} ${fluidTopY} L 148 348 C 148 350, 145 350, 138 350 L 72 350 C 65 350, 62 350, 62 348 Z`;

                    return (
                      <g>
                        {/* Fluid Body with Active Indicator Color */}
                        <path
                          d={fluidPath}
                          fill={indicatorColor.bg}
                          fillOpacity="0.85"
                          className="transition-all duration-500"
                        />
                        {/* Fluid Surface Meniscus */}
                        <path
                          d={`M ${leftX} ${fluidTopY} Q 105 ${fluidTopY + 3.5} ${rightX} ${fluidTopY}`}
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.65)"
                          strokeWidth="1.2"
                        />
                      </g>
                    );
                  })()}

                  {/* Glass Erlenmeyer Flask Outline */}
                  <path
                    d="M 94 242 L 116 242 L 116 256 L 150 348 C 153 352, 148 352, 138 352 L 72 352 C 62 352, 57 352, 60 348 L 94 256 Z"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />

                  {/* Flask Lip Rim */}
                  <ellipse cx="105" cy="242" rx="12" ry="2.5" fill="none" stroke="#94a3b8" strokeWidth="1.2" />

                  {/* Flask Volume Graduation Marks */}
                  <line x1="82" y1="318" x2="96" y2="318" stroke="#94a3b8" strokeWidth="1" />
                  <text x="76" y="320" fill="#94a3b8" fontSize="6" fontFamily="monospace" textAnchor="end">50mL</text>

                  <line x1="86" y1="298" x2="98" y2="298" stroke="#94a3b8" strokeWidth="1" />
                  <text x="80" y="300" fill="#94a3b8" fontSize="6" fontFamily="monospace" textAnchor="end">75mL</text>

                  {/* Magnetic Stirrer Bar inside Flask */}
                  {isStirring && (
                    <ellipse
                      cx="105"
                      cy="346"
                      rx="12"
                      ry="3"
                      fill="#ffffff"
                      stroke="#94a3b8"
                      strokeWidth="0.8"
                      className="animate-spin origin-[105px_346px]"
                    />
                  )}

                  {/* Glass Electrode pH Probe submerged in solution */}
                  <g>
                    {/* Electrode stem entering from top right */}
                    <line x1="135" y1="235" x2="118" y2="320" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
                    {/* Blue glass sensing bulb */}
                    <circle cx="118" cy="324" r="4.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
                    {/* Cable leading to digital meter */}
                    <path d="M 135 235 Q 155 210 165 160" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="3 1" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Current Color Indicator Label */}
            <div
              className={`p-2.5 rounded-2xl border text-xs flex items-center justify-between ${
                isContrast
                  ? 'bg-black border-white text-white'
                  : isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-800'
                  : 'bg-[#0D1117] border-[#30363D] text-slate-200'
              }`}
            >
              <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                {isAr ? 'لون الدليل الحالي:' : 'Indicator Color:'}
              </span>
              <span className="font-bold flex items-center gap-1.5">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/20 dark:border-white/40 shadow-xs inline-block"
                  style={{ backgroundColor: indicatorColor.bg }}
                />
                <span>{isAr ? indicatorColor.labelAr : indicatorColor.labelEn}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Governing Theory & Ministerial Equations Footer */}
      <div
        className={`rounded-2xl p-3 sm:p-4 text-xs shadow-md space-y-2 shrink-0 border transition-colors ${
          isContrast
            ? 'bg-black border-2 border-white text-white'
            : isLight
            ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
            : 'bg-[#161B22] border-[#30363D] text-[#C9D1D9]'
        }`}
      >
        <div className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400">
          <Info className="w-4 h-4" />
          <span>
            {isAr
              ? 'المعادلة الكيميائية الحاكمة وقواعد الوزارة:'
              : 'Governing Reaction & Ministerial Guidelines:'}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div
            className={`font-mono text-sm px-3 py-1.5 rounded-xl border ${
              isLight
                ? 'bg-slate-50 border-slate-200 text-slate-900'
                : isContrast
                ? 'bg-black border-white text-white'
                : 'bg-[#0D1117] border-[#30363D] text-slate-200'
            }`}
          >
            <MathRenderer text={`$$${currentSystem.formulaAr}$$`} />
          </div>
          <p className={`text-[11px] max-w-xl leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {isAr ? currentSystem.descriptionAr : currentSystem.descriptionEn}
          </p>
        </div>
      </div>

      {/* Official MoE A4 Lab Report Modal */}
      <LabReportGeneratorModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        initialExperimentId="chem-exp-2"
        lang={lang}
        theme={theme}
      />
    </div>
  );
};
