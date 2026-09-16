import React, { useState, useMemo } from 'react';
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
  Award,
  Check,
  Download,
  AlertCircle,
  BookOpen,
} from 'lucide-react';

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

  // Mode: Explore vs MoE Guided Exam
  const [studioMode, setStudioMode] = useState<'explore' | 'guided_exam'>('explore');

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

  // Guided Practical Exam Trials state
  const [trials, setTrials] = useState<TrialRecord[]>([
    { id: 1, initialMl: 0.0, finalMl: 0.0, titreMl: 0.0, logged: false },
    { id: 2, initialMl: 0.0, finalMl: 0.0, titreMl: 0.0, logged: false },
    { id: 3, initialMl: 0.0, finalMl: 0.0, titreMl: 0.0, logged: false },
  ]);
  const [studentCalculatedMa, setStudentCalculatedMa] = useState<string>('');
  const [reportExported, setReportExported] = useState<boolean>(false);

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
    return maxT - minT <= 0.2;
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

  return (
    <div
      className={`w-full flex flex-col font-sans select-none ${
        isFullscreen
          ? 'h-full overflow-hidden p-2 sm:p-4 bg-slate-950 text-slate-100'
          : 'space-y-4 text-slate-200'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Top Header & System / Indicator Selectors */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 shadow-lg shrink-0 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shrink-0">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-slate-100 flex items-center gap-2">
              <span>
                {isAr ? 'مختبر منحنيات المعايرة الحجمية والـ pH' : 'Volumetric Titration & pH Curves Studio'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                {isAr ? 'الكيمياء التحليلية' : 'Analytical Chemistry'}
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              {isAr
                ? 'تتبع تغير الرقم الهيدروجيني pH، التغير اللوني للأدلة، ونماذج امتحانات المعمل الوزارية'
                : 'Interactive pH curve generation, indicator transition ranges, and MoE practical exam worksheets'}
            </p>
          </div>
        </div>

        {/* Mode Switcher & Tools */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Explore vs Guided MoE Exam Toggle */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              type="button"
              onClick={() => {
                playTactileClick();
                setStudioMode('explore');
              }}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                studioMode === 'explore'
                  ? 'bg-emerald-600 text-white shadow-xs'
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
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isAr ? 'امتحان المعمل الوزاري (12 درجة)' : 'MoE Practical Exam (12 Marks)'}</span>
            </button>
          </div>

          {/* System & Indicator Selector (in explore mode) */}
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
                className="bg-slate-950 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
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
                className="bg-slate-950 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-teal-500/50 cursor-pointer"
              >
                {Object.entries(INDICATORS).map(([key, ind]) => (
                  <option key={key} value={key}>
                    {isAr ? ind.nameAr : ind.nameEn} (pH {ind.range})
                  </option>
                ))}
              </select>
            </>
          ) : (
            <div className="text-xs bg-amber-950/40 border border-amber-600/40 text-amber-300 font-bold px-3 py-1.5 rounded-xl">
              {isAr ? 'حمض مجهول التركيز (HCl) + دليل الفينولفثالين' : 'Unknown Acid (HCl) + Phenolphthalein'}
            </div>
          )}

          {/* Audio Mute Toggle */}
          <button
            type="button"
            onClick={handleToggleMute}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              audioMuted
                ? 'bg-slate-800 text-slate-400 border-slate-700'
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
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
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
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-3 sm:p-4 shadow-xl flex flex-col justify-between overflow-y-auto min-h-0 space-y-3">
          {studioMode === 'explore' ? (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-200">
                    {isAr
                      ? 'منحنى تغير الرقم الهيدروجيني بدلالة حجم السحاحة (mL)'
                      : 'pH Titration Curve vs Added Volume (mL)'}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono">
                  <span className="text-emerald-400 font-bold">
                    {isAr
                      ? `الحجم المضاف: ${toHindiDigits(titrantAddedMl.toFixed(1))} ملل`
                      : `V: ${titrantAddedMl.toFixed(1)} mL`}
                  </span>
                  <span className="text-cyan-400 font-bold">
                    {isAr
                      ? `الرقم الهيدروجيني: ${toHindiDigits(currentPH.toFixed(2))}`
                      : `pH: ${currentPH.toFixed(2)}`}
                  </span>
                </div>
              </div>

              {/* SVG Plot Canvas */}
              <div className="flex-1 min-h-[220px] max-h-[360px] w-full flex items-center justify-center p-1 relative">
                <svg viewBox="0 0 480 240" className="w-full h-full max-h-[340px] object-contain overflow-visible">
                  <rect x="45" y="20" width="415" height="185" fill={isLight ? '#f8fafc' : '#020617'} rx="8" />

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
                          stroke={isSeven ? '#10b981' : isLight ? '#e2e8f0' : '#1e293b'}
                          strokeWidth={isSeven ? 1.5 : 1}
                          strokeDasharray={isSeven ? '4 2' : undefined}
                        />
                        <text
                          x="38"
                          y={y + 3.5}
                          fill={isSeven ? '#10b981' : '#64748b'}
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
                          stroke={isEq ? '#f59e0b' : isLight ? '#e2e8f0' : '#1e293b'}
                          strokeWidth={isEq ? 1.5 : 1}
                          strokeDasharray={isEq ? '3 3' : undefined}
                        />
                        <text
                          x={x}
                          y="218"
                          fill={isEq ? '#f59e0b' : '#64748b'}
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
                      fillOpacity="0.06"
                    />
                  )}

                  {/* Theoretical Titration Curve Line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

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
                            fill="#38bdf8"
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
          ) : (
            /* Guided MoE Practical Exam Worksheet View */
            <div className="space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-slate-200">
                    {isAr
                      ? 'ورقة امتحان المعمل الوزاري: تعيين تركيز حمض الهيدروكلوريك المجهول'
                      : 'MoE Practical Exam Protocol: Determination of Unknown HCl Molarity'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleExportReport}
                  className="px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {reportExported ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                  <span>{reportExported ? (isAr ? 'تم التصدير!' : 'Exported!') : (isAr ? 'تصدير التقرير الوزاري' : 'Export Lab Report')}</span>
                </button>
              </div>

              {/* Protocol Steps Checklist */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                <span className="text-amber-300 font-bold flex items-center gap-1.5 text-[11px]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isAr ? 'خطوات التجربة العملية الرسمية:' : 'Official Lab Procedure:'}</span>
                </span>
                <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px] leading-relaxed">
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
                  <span className="text-slate-300">{isAr ? 'جدول تسجيل التجارب الثلاثية:' : '3-Trial Titration Data Table:'}</span>
                  <span className="text-emerald-400 font-mono text-[11px]">
                    {isAr ? `متوسط الحجم المستهلك (Vb̄): ${averageTitreMl.toFixed(2)} ملل` : `Average Titre (Vb̄): ${averageTitreMl.toFixed(2)} mL`}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left rtl:text-right border-collapse bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                    <thead>
                      <tr className="bg-slate-800/80 text-slate-300 font-bold text-[11px]">
                        <th className="p-2">{isAr ? 'التجربة' : 'Trial'}</th>
                        <th className="p-2">{isAr ? 'القراءة الابتدائية (ملل)' : 'Initial (mL)'}</th>
                        <th className="p-2">{isAr ? 'القراءة النهائية (ملل)' : 'Final (mL)'}</th>
                        <th className="p-2">{isAr ? 'الحجم المستهلك (ΔV)' : 'Titre (ΔV)'}</th>
                        <th className="p-2 text-center">{isAr ? 'الإجراء' : 'Action'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-300 font-mono">
                      {trials.map((trial) => (
                        <tr key={trial.id} className="hover:bg-slate-900/60">
                          <td className="p-2 font-bold font-sans">{isAr ? `المحاولة ${trial.id}` : `Trial ${trial.id}`}</td>
                          <td className="p-2">{trial.initialMl.toFixed(1)}</td>
                          <td className="p-2">{trial.finalMl.toFixed(1)}</td>
                          <td className="p-2 font-bold text-cyan-300">{trial.titreMl.toFixed(1)} mL</td>
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
                        ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                        : 'bg-amber-500/15 border-amber-500/40 text-amber-300'
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
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-indigo-300 block">
                  {isAr ? 'قانون المعايرة وحساب التركيز المجهول (Ma):' : 'Stoichiometric Neutralization Formula:'}
                </span>
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 font-mono text-center text-sm">
                  <MathRenderer
                    text="$$M_a = \frac{M_b \cdot \bar{V}_b}{V_a} = \frac{0.100 \times \bar{V}_b}{25.0}$$"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <span className="text-slate-400">
                    {isAr ? 'التركيز المحسوب للمجهول (مولار):' : 'Calculated Molarity (M):'}
                  </span>
                  <div className="flex items-center gap-2 font-mono">
                    <input
                      type="number"
                      step="0.001"
                      placeholder={averageTitreMl > 0 ? ((GUIDED_UNKNOWN_ACID.standardBaseMolarity * averageTitreMl) / GUIDED_UNKNOWN_ACID.pipetteVolumeMl).toFixed(4) : "0.108"}
                      value={studentCalculatedMa}
                      onChange={(e) => setStudentCalculatedMa(e.target.value)}
                      className="w-24 bg-slate-900 border border-slate-700 text-emerald-400 font-bold px-2 py-1 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
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
              <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-black text-amber-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>{isAr ? 'بطاقة تقييم المعمل الوزاري (١٢ درجة):' : 'MoE Practical Rubric Scorecard (12 Marks):'}</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-black border border-amber-500/30">
                    {rubricScore.total} / 12 {isAr ? 'درجة' : 'Marks'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-[10px] text-center font-bold">
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">{isAr ? 'الأدوات والأدلة' : 'Apparatus'}</span>
                    <span className="text-emerald-400 font-mono">{rubricScore.apparatusMarks}/2</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">{isAr ? 'دقة نقطة النهاية' : 'Endpoint'}</span>
                    <span className="text-emerald-400 font-mono">{rubricScore.executionMarks}/3</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">{isAr ? 'جدول التجارب' : 'Trials Table'}</span>
                    <span className="text-emerald-400 font-mono">{rubricScore.empiricalMarks}/3</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">{isAr ? 'صحة الحسابات' : 'Calculation'}</span>
                    <span className="text-emerald-400 font-mono">{rubricScore.calculationMarks}/2</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">{isAr ? 'تحليل الأخطاء' : 'Error Analysis'}</span>
                    <span className="text-emerald-400 font-mono">{rubricScore.errorMarks}/2</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slider & Quick Titration Controls (Active in both modes) */}
          <div className="space-y-2 pt-2 border-t border-slate-800 shrink-0">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-cyan-400" />
                <span>
                  {isAr ? 'التحكم في صنبور السحاحة (حجم المحلول القياسي):' : 'Burette Stopcock (Titrant Added):'}
                </span>
              </span>
              <span className="font-mono text-cyan-300 font-black">
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
              className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />

            {/* Micro-Step Adjustment Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => changeVolume(titrantAddedMl - 1.0)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer"
                >
                  -1.0
                </button>
                <button
                  type="button"
                  onClick={() => changeVolume(titrantAddedMl - 0.1)}
                  className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer"
                >
                  -0.1
                </button>
                <button
                  type="button"
                  onClick={() => changeVolume(titrantAddedMl + 0.1)}
                  className="px-2 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  +0.1
                </button>
                <button
                  type="button"
                  onClick={() => changeVolume(titrantAddedMl + 1.0)}
                  className="px-2.5 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all cursor-pointer"
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
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                {isAr ? 'جهاز قياس الرقم الهيدروجيني الرقمي' : 'Digital pH Meter (Glass Electrode)'}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>

            <div className="flex items-baseline justify-between bg-slate-950 p-3.5 rounded-2xl border border-slate-800 shadow-inner">
              <span className="text-xs font-bold text-slate-400">{isAr ? 'قراءة المجس:' : 'pH Probe:'}</span>
              <div className="text-right">
                <span className="text-4xl font-black font-mono tracking-tight text-emerald-400">
                  {isAr ? toHindiDigits(currentPH.toFixed(2)) : currentPH.toFixed(2)}
                </span>
                <span className="text-xs text-slate-500 ml-1 font-mono">pH</span>
              </div>
            </div>

            {/* Chemical State Alert Chip */}
            <div className="flex items-center justify-between text-xs px-1">
              <span className="text-slate-400">{isAr ? 'حالة المحلول:' : 'Solution State:'}</span>
              <span
                className={`font-bold px-2 py-0.5 rounded-md ${
                  currentPH < 6.8
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : currentPH > 7.2
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
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
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-xs text-amber-200 flex items-center gap-2 animate-bounce">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-bold">
                  {isAr
                    ? 'تم الوصول إلى نقطة التكافؤ الدقيقة (Equivalence Point)!'
                    : 'Exact Equivalence Point Reached!'}
                </span>
              </div>
            )}

            {isHalfEquivalence && (
              <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-xs text-cyan-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-bold">
                  {isAr
                    ? `منطقة المحلول المنظم: [CH₃COOH] = [CH₃COO⁻] فتكون pH = pKa = ${currentSystem.pKa1}`
                    : `Buffer Midpoint: [HA] = [A⁻] hence pH = pKa = ${currentSystem.pKa1}`}
                </span>
              </div>
            )}
          </div>

          {/* Simulated Conical Flask with Live Fluid Color */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 shadow-xl space-y-3 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300">
                {isAr ? 'الدورق المخروطي والمظهر اللوني' : 'Conical Flask Visualizer'}
              </span>
              <button
                type="button"
                onClick={() => {
                  playTactileClick();
                  setIsStirring((prev) => !prev);
                }}
                className={`text-[10px] px-2 py-0.5 rounded-md font-bold cursor-pointer transition-all ${
                  isStirring
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-800 text-slate-400'
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

            {/* Flask SVG Graphic */}
            <div className="flex items-center justify-center p-2">
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center">
                <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-xl">
                  {/* Glass Flask Outline */}
                  <path
                    d="M 65 20 L 95 20 L 95 45 L 135 130 C 140 140, 135 150, 120 150 L 40 150 C 25 150, 20 140, 25 130 L 65 45 Z"
                    fill="#0f172a"
                    stroke="#475569"
                    strokeWidth="3"
                  />

                  {/* Liquid inside Flask */}
                  <path
                    d="M 45 95 Q 80 92 115 95 L 130 132 C 135 142, 130 148, 118 148 L 42 148 C 30 148, 25 142, 30 132 Z"
                    fill={indicatorColor.bg}
                    fillOpacity="0.85"
                    className="transition-all duration-500"
                  />

                  {/* Graduations marks */}
                  <line x1="50" y1="110" x2="65" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="45" y1="125" x2="62" y2="125" stroke="#94a3b8" strokeWidth="1.5" />

                  {/* Magnetic Stirrer Bar */}
                  {isStirring && (
                    <ellipse
                      cx="80"
                      cy="142"
                      rx="14"
                      ry="4"
                      fill="#ffffff"
                      stroke="#94a3b8"
                      strokeWidth="1"
                      className="animate-spin origin-[80px_142px]"
                    />
                  )}
                </svg>

                {/* Drop animation dripping from burette tip */}
                {titrantAddedMl > 0 && titrantAddedMl < 50 && (
                  <div className="absolute top-2 w-2 h-3 rounded-full bg-cyan-400 opacity-80 animate-ping" />
                )}
              </div>
            </div>

            {/* Current Color Indicator Label */}
            <div className="bg-slate-950 p-2.5 rounded-2xl border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-400">{isAr ? 'لون الدليل الحالي:' : 'Indicator Color:'}</span>
              <span className="font-bold text-slate-100 flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full border border-white/40 shadow-xs inline-block"
                  style={{ backgroundColor: indicatorColor.bg }}
                />
                <span>{isAr ? indicatorColor.labelAr : indicatorColor.labelEn}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Governing Theory & Ministerial Equations Footer */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 text-xs shadow-md space-y-2 shrink-0">
        <div className="flex items-center gap-2 font-bold text-emerald-400">
          <Info className="w-4 h-4" />
          <span>
            {isAr
              ? 'المعادلة الكيميائية الحاكمة وقواعد الوزارة:'
              : 'Governing Reaction & Ministerial Guidelines:'}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="font-mono text-sm bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <MathRenderer text={`$$${currentSystem.formulaAr}$$`} />
          </div>
          <p className="text-[11px] text-slate-400 max-w-xl leading-relaxed">
            {isAr ? currentSystem.descriptionAr : currentSystem.descriptionEn}
          </p>
        </div>
      </div>
    </div>
  );
};
