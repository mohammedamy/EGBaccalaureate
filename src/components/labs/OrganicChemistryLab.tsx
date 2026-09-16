import React, { useCallback, useMemo } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  drawRealisticGlassVessel,
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
  Flame,
  Layers,
  ChevronDown,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Sparkles,
  Droplet,
  Compass,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type OrganicSubTab =
  | 'roadmap'
  | 'markovnikov'
  | 'benzene_directing'
  | 'esterification'
  | 'nomenclature';

export type AlkeneType = 'propene' | 'methylpropene' | 'but1ene';
export type ReagentType = 'HBr' | 'HCl' | 'H2O';

export type BenzeneSubstituent = 'OH' | 'NH2' | 'CH3' | 'Cl' | 'NO2' | 'COOH';
export type BenzeneElectrophile = 'nitration' | 'chlorination' | 'alkylation' | 'sulfonation';

export type EsterAcid = 'acetic' | 'salicylic' | 'benzoic' | 'butyric' | 'formic';
export type EsterAlcohol = 'ethanol' | 'methanol' | 'isopentyl' | 'benzyl';

export interface OrganicParams {
  subTab: OrganicSubTab;
  // Mode 1: Roadmap
  pathwayId: string;
  activeStep: number;
  // Mode 2: Markovnikov
  alkeneType: AlkeneType;
  reagent: ReagentType;
  carbocationEnergyView: boolean;
  reactionProgress: number; // 0 to 100%
  temperature: number; // in Celsius
  catalystActive: boolean;
  // Mode 3: Nomenclature Quiz
  currentQuizIndex: number;
  selectedOption: number | null;
  showExplanation: boolean;
  // Mode 4: Benzene Directing
  benzeneSubstituent: BenzeneSubstituent;
  benzeneElectrophile: BenzeneElectrophile;
  showWhelandResonance: boolean;
  // Mode 5: Esterification & Saponification
  esterAcid: EsterAcid;
  esterAlcohol: EsterAlcohol;
  isCatalystH2SO4Present: boolean;
  esterTemperature: number; // 20 - 100 °C
  saponificationActive: boolean;
  esterTimeMinutes: number; // 0 - 60 min
}

export interface OrganicSimState {
  boilingPointC: number;
  irPeakWavenumber: number;
  irPeakLabelEn: string;
  irPeakLabelAr: string;
  gcRetentionTimeMin: number;
  reactionYieldPercent: number;
  activationEnergyEa: number; // kJ/mol
  reactionEnthalpyDeltaH: number; // kJ/mol
  isMajorPathway: boolean;
  // Benzene directing stats
  orthoYieldPercent: number;
  paraYieldPercent: number;
  metaYieldPercent: number;
  ringActivationTypeEn: string;
  ringActivationTypeAr: string;
  directingRuleEn: string;
  directingRuleAr: string;
  // Esterification stats
  esterEquilibriumYield: number;
  esterFragranceEn: string;
  esterFragranceAr: string;
  esterFormula: string;
  esterIupacNameEn: string;
  esterIupacNameAr: string;
  esterKcValue: number;
}

// -------------------------------------------------------------
// DATA STRUCTURES: BENZENE DIRECTING GROUPS & SUBSTITUTION
// -------------------------------------------------------------
export interface BenzeneSubstituentInfo {
  id: BenzeneSubstituent;
  formula: string;
  nameEn: string;
  nameAr: string;
  parentCompoundEn: string;
  parentCompoundAr: string;
  activationType: 'activating_strong' | 'activating_weak' | 'deactivating_ortho_para' | 'deactivating_meta';
  directingClass: 'ortho_para' | 'meta';
  electronEffectEn: string;
  electronEffectAr: string;
  chargeDensities: {
    ortho: number; // negative value means electron-rich delta-
    meta: number;
    para: number;
  };
}

export const BENZENE_SUBSTITUENTS: Record<BenzeneSubstituent, BenzeneSubstituentInfo> = {
  OH: {
    id: 'OH',
    formula: '-OH',
    nameEn: 'Hydroxyl (Phenol)',
    nameAr: 'مجموعة الهيدروكسيل (الفينول / حمض الكاربوليك)',
    parentCompoundEn: 'Phenol (C₆H₅OH)',
    parentCompoundAr: 'الفينول (حمض الكاربوليك)',
    activationType: 'activating_strong',
    directingClass: 'ortho_para',
    electronEffectEn: 'Strong electron donation by oxygen lone-pair resonance (+M), activating the ring towards ortho and para substitution.',
    electronEffectAr: 'مجموعة منشطة قوية بالرنين المعطي (+M)، تزيد الكثافة الإلكترونية في موضعي أورثو وبارا.',
    chargeDensities: { ortho: -0.85, meta: -0.15, para: -0.90 },
  },
  NH2: {
    id: 'NH2',
    formula: '-NH₂',
    nameEn: 'Amino (Aniline)',
    nameAr: 'مجموعة الأمينو (الأنيلين / أمينوبنزين)',
    parentCompoundEn: 'Aniline (C₆H₅NH₂)',
    parentCompoundAr: 'الأنيلين (أمينوبنزين)',
    activationType: 'activating_strong',
    directingClass: 'ortho_para',
    electronEffectEn: 'Powerful resonance electron donation (+M) from the nitrogen lone pair, strongly activating ortho and para positions.',
    electronEffectAr: 'مجموعة منشطة قوية جداً برنين زوج إلكترونات النيتروجين (+M)، توجه للموضعين أورثو وبارا.',
    chargeDensities: { ortho: -0.92, meta: -0.18, para: -0.95 },
  },
  CH3: {
    id: 'CH3',
    formula: '-CH₃',
    nameEn: 'Methyl (Toluene)',
    nameAr: 'مجموعة الميثيل (التولوين / ميثيل بنزين)',
    parentCompoundEn: 'Toluene (C₆H₅CH₃)',
    parentCompoundAr: 'التولوين (ميثيل بنزين)',
    activationType: 'activating_weak',
    directingClass: 'ortho_para',
    electronEffectEn: 'Electron-donating inductive effect (+I) and hyperconjugation activate the ring and direct to ortho and para.',
    electronEffectAr: 'مجموعة دافعة للإلكترونات بالتأثير الحثي (+I) وفوق الاقتران، تنشط الحلقة وتوجه لأورثو وبارا.',
    chargeDensities: { ortho: -0.65, meta: -0.10, para: -0.70 },
  },
  Cl: {
    id: 'Cl',
    formula: '-Cl',
    nameEn: 'Chloro (Chlorobenzene)',
    nameAr: 'مجموعة الكلورو (كلوروبنزين)',
    parentCompoundEn: 'Chlorobenzene (C₆H₅Cl)',
    parentCompoundAr: 'كلوروبنزين',
    activationType: 'deactivating_ortho_para',
    directingClass: 'ortho_para',
    electronEffectEn: 'Deactivating due to strong inductive withdrawal (-I), BUT directs to Ortho and Para due to halogen lone-pair resonance (+M)!',
    electronEffectAr: 'مجموعة مثبطة ساحبة بالحث (-I)، لكنها توجه للموضعين أورثو وبارا بفضل رنين أزواج إلكترونات الهالوجين (+M)! (سؤال وزاري شهير)',
    chargeDensities: { ortho: -0.45, meta: +0.20, para: -0.50 },
  },
  NO2: {
    id: 'NO2',
    formula: '-NO₂',
    nameEn: 'Nitro (Nitrobenzene)',
    nameAr: 'مجموعة النيترو (نيتروبنزين)',
    parentCompoundEn: 'Nitrobenzene (C₆H₅NO₂)',
    parentCompoundAr: 'نيتروبنزين',
    activationType: 'deactivating_meta',
    directingClass: 'meta',
    electronEffectEn: 'Strong electron-withdrawing (-M and -I) withdraws electron density especially from ortho/para, directing electrophiles to meta.',
    electronEffectAr: 'مجموعة ساحبة قوية بالرنين والحث (-M, -I)، تسحب الشحنة بشدة من أورثو وبارا، فيصبح الموضع ميتا هو الأقل فقراً (موجه لميتا).',
    chargeDensities: { ortho: +0.85, meta: +0.15, para: +0.90 },
  },
  COOH: {
    id: 'COOH',
    formula: '-COOH',
    nameEn: 'Carboxyl (Benzoic Acid)',
    nameAr: 'مجموعة الكربوكسيل (حمض البنزويك)',
    parentCompoundEn: 'Benzoic Acid (C₆H₅COOH)',
    parentCompoundAr: 'حمض البنزويك',
    activationType: 'deactivating_meta',
    directingClass: 'meta',
    electronEffectEn: 'Carbonyl dipole withdraws π-electron density out of the ring (-M effect), deactivating the ring and directing to meta.',
    electronEffectAr: 'مجموعة كربوكسيل ساحبة للإلكترونات بالرنين (-M)، تثبط نشاط الحلقة وتوجه الكاشف القادم للموضع ميتا.',
    chargeDensities: { ortho: +0.70, meta: +0.12, para: +0.75 },
  },
};

export interface BenzeneElectrophileInfo {
  id: BenzeneElectrophile;
  activeSpeciesKatex: string;
  activeSpeciesEn: string;
  activeSpeciesAr: string;
  reagentMixtureEn: string;
  reagentMixtureAr: string;
  reactionTypeEn: string;
  reactionTypeAr: string;
  catalystEn: string;
  catalystAr: string;
}

export const BENZENE_ELECTROPHILES: Record<BenzeneElectrophile, BenzeneElectrophileInfo> = {
  nitration: {
    id: 'nitration',
    activeSpeciesKatex: '\\text{NO}_2^+',
    activeSpeciesEn: 'Nitronium Ion (NO₂⁺)',
    activeSpeciesAr: 'أيون النيترونيوم (NO₂⁺)',
    reagentMixtureEn: 'Nitrating Mixture: conc. HNO₃ + conc. H₂SO₄ (1:1)',
    reagentMixtureAr: 'خليط النيترة: حمض نيتريك مركز + حمض كبريتيك مركز (١:١)',
    reactionTypeEn: 'Electrophilic Nitration',
    reactionTypeAr: 'نيترة أروماتية إلكتروفيلية',
    catalystEn: 'conc. H₂SO₄ (Generates NO₂⁺ electrophile)',
    catalystAr: 'حمض كبريتيك مركز (يولد أيون النيترونيوم NO₂⁺)',
  },
  chlorination: {
    id: 'chlorination',
    activeSpeciesKatex: '\\text{Cl}^+ \\cdots \\text{FeCl}_4^-',
    activeSpeciesEn: 'Chloronium Complex (Cl⁺)',
    activeSpeciesAr: 'معقد الكلورونيوم (Cl⁺)',
    reagentMixtureEn: 'Chlorine Gas (Cl₂) in darkness/catalyst',
    reagentMixtureAr: 'غاز الكلور (Cl₂) في غياب ضوء الشمس المباشر',
    reactionTypeEn: 'Electrophilic Halogenation',
    reactionTypeAr: 'هلجنة استبدالية إلكتروفيلية',
    catalystEn: 'Anhydrous Iron(III) Chloride (FeCl₃)',
    catalystAr: 'كلوريد الحديد III اللامائي (FeCl₃) كحمض لويس',
  },
  alkylation: {
    id: 'alkylation',
    activeSpeciesKatex: '\\text{CH}_3^+',
    activeSpeciesEn: 'Methyl Carbocation (CH₃⁺)',
    activeSpeciesAr: 'كاتيون الميثيل (CH₃⁺)',
    reagentMixtureEn: 'Chloromethane (CH₃Cl) / Friedel-Crafts',
    reagentMixtureAr: 'كلوريد الميثيل (CH₃Cl) / تفاعل فريدل-كرافتس',
    reactionTypeEn: 'Friedel-Crafts Alkylation',
    reactionTypeAr: 'ألكلة فريدل-كرافتس',
    catalystEn: 'Anhydrous Aluminium Chloride (anh. AlCl₃)',
    catalystAr: 'كلوريد ألومنيوم لامائي (anh. AlCl₃)',
  },
  sulfonation: {
    id: 'sulfonation',
    activeSpeciesKatex: '\\text{SO}_3',
    activeSpeciesEn: 'Sulfur Trioxide (SO₃)',
    activeSpeciesAr: 'ثالث أكسيد الكبريت (SO₃)',
    reagentMixtureEn: 'Fuming Sulfuric Acid (Oleum)',
    reagentMixtureAr: 'حمض كبريتيك مركز مدخن (أوليوم)',
    reactionTypeEn: 'Electrophilic Sulfonation',
    reactionTypeAr: 'سلفنة أروماتية',
    catalystEn: 'SO₃ in conc. H₂SO₄',
    catalystAr: 'SO₃ المذاب في H₂SO₄',
  },
};

export function getBenzeneDirectingRatios(
  substituent: BenzeneSubstituent,
  electrophile: BenzeneElectrophile
): { ortho: number; para: number; meta: number } {
  const sub = BENZENE_SUBSTITUENTS[substituent];
  if (sub.directingClass === 'ortho_para') {
    if (substituent === 'CH3') {
      if (electrophile === 'nitration') return { ortho: 58, para: 38, meta: 4 };
      if (electrophile === 'chlorination') return { ortho: 60, para: 39, meta: 1 };
      if (electrophile === 'alkylation') return { ortho: 52, para: 45, meta: 3 };
      return { ortho: 62, para: 36, meta: 2 };
    }
    if (substituent === 'OH') {
      if (electrophile === 'chlorination' || electrophile === 'nitration') {
        return { ortho: 50, para: 48, meta: 2 };
      }
      return { ortho: 52, para: 46, meta: 2 };
    }
    if (substituent === 'NH2') {
      return { ortho: 48, para: 50, meta: 2 };
    }
    if (substituent === 'Cl') {
      return { ortho: 39, para: 60, meta: 1 };
    }
  } else {
    // Meta directors: NO2, COOH
    if (substituent === 'NO2') {
      return { ortho: 6, para: 1, meta: 93 };
    }
    if (substituent === 'COOH') {
      return { ortho: 18, para: 2, meta: 80 };
    }
  }
  return { ortho: 20, para: 20, meta: 60 };
}

// -------------------------------------------------------------
// DATA STRUCTURES: ESTERIFICATION & SAPONIFICATION
// -------------------------------------------------------------
export interface EsterAcidInfo {
  id: EsterAcid;
  nameEn: string;
  nameAr: string;
  formula: string;
  odorEn: string;
  odorAr: string;
  boilingPointC: number;
}

export const ESTER_ACIDS: Record<EsterAcid, EsterAcidInfo> = {
  acetic: {
    id: 'acetic',
    nameEn: 'Acetic Acid (Ethanoic)',
    nameAr: 'حمض الأسيتيك (الخل)',
    formula: 'CH₃COOH',
    odorEn: 'Pungent vinegar odor',
    odorAr: 'رائحة الخل النفاذة',
    boilingPointC: 118,
  },
  salicylic: {
    id: 'salicylic',
    nameEn: 'Salicylic Acid (o-hydroxybenzoic)',
    nameAr: 'حمض الساليسيليك (أورثو هيدروكسي بنزويك)',
    formula: 'C₆H₄(OH)COOH',
    odorEn: 'Odorless crystalline powder',
    odorAr: 'مسحوق بلوري عديم الرائحة',
    boilingPointC: 211,
  },
  benzoic: {
    id: 'benzoic',
    nameEn: 'Benzoic Acid',
    nameAr: 'حمض البنزويك',
    formula: 'C₆H₅COOH',
    odorEn: 'Faint pleasant aroma',
    odorAr: 'رائحة عطرية خفيفة',
    boilingPointC: 249,
  },
  butyric: {
    id: 'butyric',
    nameEn: 'Butyric Acid (Butanoic)',
    nameAr: 'حمض البيوتيريك (حمض الزبدة)',
    formula: 'C₃H₇COOH',
    odorEn: 'Pungent rancid butter smell',
    odorAr: 'رائحة الزبدة المتزنخة الكريهة',
    boilingPointC: 163.5,
  },
  formic: {
    id: 'formic',
    nameEn: 'Formic Acid (Methanoic)',
    nameAr: 'حمض الفورميك (حمض النمليك)',
    formula: 'HCOOH',
    odorEn: 'Sharp pungent stinging ant venom',
    odorAr: 'رائحة إفراز النمل اللاذعة',
    boilingPointC: 100.8,
  },
};

export interface EsterAlcoholInfo {
  id: EsterAlcohol;
  nameEn: string;
  nameAr: string;
  formula: string;
  boilingPointC: number;
}

export const ESTER_ALCOHOLS: Record<EsterAlcohol, EsterAlcoholInfo> = {
  ethanol: {
    id: 'ethanol',
    nameEn: 'Ethanol (Ethyl alcohol)',
    nameAr: 'الإيثانول (كحول إيثيلي)',
    formula: 'C₂H₅OH',
    boilingPointC: 78.4,
  },
  methanol: {
    id: 'methanol',
    nameEn: 'Methanol (Wood spirit)',
    nameAr: 'الميثانول (كحول الخشب)',
    formula: 'CH₃OH',
    boilingPointC: 64.7,
  },
  isopentyl: {
    id: 'isopentyl',
    nameEn: 'Isopentyl Alcohol (Isoamyl)',
    nameAr: 'كحول أيزوبنتيل (أيزو أميل)',
    formula: 'C₅H₁₁OH',
    boilingPointC: 131.2,
  },
  benzyl: {
    id: 'benzyl',
    nameEn: 'Benzyl Alcohol',
    nameAr: 'كحول البنزيل',
    formula: 'C₆H₅CH₂OH',
    boilingPointC: 205.3,
  },
};

export interface EsterProductCombination {
  esterFormula: string;
  iupacNameEn: string;
  iupacNameAr: string;
  commonNameEn: string;
  commonNameAr: string;
  fragranceEn: string;
  fragranceAr: string;
  boilingPointC: number;
  primaryIrPeak: number;
  irBandLabelEn: string;
  irBandLabelAr: string;
  balancedEquationKatex: string;
}

export function getEsterDetails(acid: EsterAcid, alcohol: EsterAlcohol): EsterProductCombination {
  if (acid === 'acetic' && alcohol === 'ethanol') {
    return {
      esterFormula: 'CH₃COOC₂H₅',
      iupacNameEn: 'Ethyl Ethanoate',
      iupacNameAr: 'إيثانوات الإيثيل',
      commonNameEn: 'Ethyl Acetate',
      commonNameAr: 'أسيتات الإيثيل',
      fragranceEn: 'Sweet fruity green apple and pear aroma',
      fragranceAr: 'رائحة الفواكه العطرة (التفاح الأخضر والكمثرى)',
      boilingPointC: 77.1,
      primaryIrPeak: 1740,
      irBandLabelEn: 'Ester C=O stretch (1740 cm⁻¹)',
      irBandLabelAr: 'اهتزاز إستر C=O (١٧٤٠ سم⁻¹)',
      balancedEquationKatex: '\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{\\text{conc. H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}',
    };
  }
  if (acid === 'acetic' && alcohol === 'isopentyl') {
    return {
      esterFormula: 'CH₃COOCH₂CH₂CH(CH₃)₂',
      iupacNameEn: '3-Methylbutyl Ethanoate',
      iupacNameAr: 'إيثانوات ٣- ميثيل بيوتيل',
      commonNameEn: 'Isoamyl Acetate (Banana Oil)',
      commonNameAr: 'أسيتات الأيزوأميل (زيت الموز العطري)',
      fragranceEn: 'Distinct sweet ripe banana / pear essence',
      fragranceAr: 'رائحة الموز الناضج المميزة (زيت الموز)',
      boilingPointC: 142,
      primaryIrPeak: 1742,
      irBandLabelEn: 'Ester C=O stretch (1742 cm⁻¹)',
      irBandLabelAr: 'اهتزاز إستر C=O (١٧٤٢ سم⁻¹)',
      balancedEquationKatex: '\\text{CH}_3\\text{COOH} + \\text{C}_5\\text{H}_{11}\\text{OH} \\xrightleftharpoons{\\text{H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_5\\text{H}_{11} + \\text{H}_2\\text{O}',
    };
  }
  if (acid === 'salicylic' && alcohol === 'methanol') {
    return {
      esterFormula: 'C₆H₄(OH)COOCH₃',
      iupacNameEn: 'Methyl 2-hydroxybenzoate',
      iupacNameAr: '٢- هيدروكسي بنزوات الميثيل',
      commonNameEn: 'Methyl Salicylate (Oil of Wintergreen)',
      commonNameAr: 'ساليسيلات الميثيل (زيت المروخ الطبي)',
      fragranceEn: 'Aromatic minty wintergreen (topical pain reliever ointment)',
      fragranceAr: 'رائحة زيت المروخ النعناعية المنعشة (دهان موضعي لتسكين آلام الروماتيزم)',
      boilingPointC: 222,
      primaryIrPeak: 1680,
      irBandLabelEn: 'Hydrogen-bonded phenolic ester C=O (1680 cm⁻¹)',
      irBandLabelAr: 'اهتزاز إستر مرتبط بهيدروجين فينولي (١٦٨٠ سم⁻¹)',
      balancedEquationKatex: '\\text{C}_6\\text{H}_4(\\text{OH})\\text{COOH} + \\text{CH}_3\\text{OH} \\xrightleftharpoons{\\text{H}^+} \\text{C}_6\\text{H}_4(\\text{OH})\\text{COOCH}_3 + \\text{H}_2\\text{O}',
    };
  }
  if (acid === 'butyric' && alcohol === 'ethanol') {
    return {
      esterFormula: 'C₃H₇COOC₂H₅',
      iupacNameEn: 'Ethyl Butanoate',
      iupacNameAr: 'بيوتانوات الإيثيل',
      commonNameEn: 'Ethyl Butyrate',
      commonNameAr: 'بيوتيرات الإيثيل',
      fragranceEn: 'Luscious tropical pineapple fragrance',
      fragranceAr: 'رائحة الأناناس الاستوائية الذكية المنعشة',
      boilingPointC: 121.6,
      primaryIrPeak: 1735,
      irBandLabelEn: 'Aliphatic ester C=O (1735 cm⁻¹)',
      irBandLabelAr: 'اهتزاز إستر أليفاتي C=O (١٧٣٥ سم⁻¹)',
      balancedEquationKatex: '\\text{C}_3\\text{H}_7\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{\\text{H}_2\\text{SO}_4} \\text{C}_3\\text{H}_7\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}',
    };
  }
  if (acid === 'benzoic' && alcohol === 'ethanol') {
    return {
      esterFormula: 'C₆H₅COOC₂H₅',
      iupacNameEn: 'Ethyl Benzoate',
      iupacNameAr: 'بنزوات الإيثيل',
      commonNameEn: 'Ethyl Benzoate',
      commonNameAr: 'بنزوات الإيثيل',
      fragranceEn: 'Sweet floral berry and cherry aroma',
      fragranceAr: 'رائحة الكرز والتوت الزهرية العطرة',
      boilingPointC: 212,
      primaryIrPeak: 1720,
      irBandLabelEn: 'Conjugated aromatic ester C=O (1720 cm⁻¹)',
      irBandLabelAr: 'اهتزاز إستر أروماتي مترافق C=O (١٧٢٠ سم⁻¹)',
      balancedEquationKatex: '\\text{C}_6\\text{H}_5\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{\\text{H}^+} \\text{C}_6\\text{H}_5\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}',
    };
  }
  if (acid === 'formic' && alcohol === 'ethanol') {
    return {
      esterFormula: 'HCOOC₂H₅',
      iupacNameEn: 'Ethyl Methanoate',
      iupacNameAr: 'ميثانوات الإيثيل',
      commonNameEn: 'Ethyl Formate',
      commonNameAr: 'فورمات الإيثيل',
      fragranceEn: 'Characteristic sweet peach and rum fragrance',
      fragranceAr: 'رائحة الخوخ والروم العطرة',
      boilingPointC: 54.5,
      primaryIrPeak: 1725,
      irBandLabelEn: 'Formate ester C=O stretch (1725 cm⁻¹)',
      irBandLabelAr: 'اهتزاز إستر فورمات C=O (١٧٢٥ سم⁻¹)',
      balancedEquationKatex: '\\text{HCOOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{\\text{H}_2\\text{SO}_4} \\text{HCOOC}_2\\text{H}_5 + \\text{H}_2\\text{O}',
    };
  }
  return {
    esterFormula: `${acid.slice(0, 4)}-COO-${alcohol.slice(0, 4)}`,
    iupacNameEn: 'Alkyl alkanoate',
    iupacNameAr: 'ألكانوات الألكيل',
    commonNameEn: 'Organic Ester',
    commonNameAr: 'إستر عضوي',
    fragranceEn: 'Pleasant sweet fruity aroma',
    fragranceAr: 'رائحة فواكه عطرة وزكية',
    boilingPointC: 98,
    primaryIrPeak: 1738,
    irBandLabelEn: 'Ester C=O band (1738 cm⁻¹)',
    irBandLabelAr: 'حزمة إستر C=O (١٧٣٨ سم⁻¹)',
    balancedEquationKatex: '\\text{R}_1\\text{-COOH} + \\text{R}_2\\text{-OH} \\xrightleftharpoons{\\text{conc. H}_2\\text{SO}_4} \\text{R}_1\\text{-COOR}_2 + \\text{H}_2\\text{O}',
  };
}

// -------------------------------------------------------------
// DATA STRUCTURES: SYNTHESIS PATHWAYS
// -------------------------------------------------------------
export interface SynthesisStep {
  stepNumber: number;
  reagentEn: string;
  reagentAr: string;
  conditionsEn: string;
  conditionsAr: string;
  reactionTypeEn: string;
  reactionTypeAr: string;
  productFormula: string;
  productNameEn: string;
  productNameAr: string;
  balancedEquationKatex: string;
  boilingPointC: number;
  primaryIrPeak: number;
  irLabelEn: string;
  irLabelAr: string;
  structureType:
    | 'alkyne'
    | 'arene'
    | 'alkylarene'
    | 'nitroarene'
    | 'aldehyde'
    | 'acid'
    | 'ester'
    | 'alcohol'
    | 'haloalkane'
    | 'diol';
}

export interface Pathway {
  id: string;
  titleEn: string;
  titleAr: string;
  startMaterialEn: string;
  startMaterialAr: string;
  targetProductEn: string;
  targetProductAr: string;
  curriculumContextEn: string;
  curriculumContextAr: string;
  steps: SynthesisStep[];
}

export const ORGANIC_PATHWAYS: Pathway[] = [
  {
    id: 'carbide_to_tnt',
    titleEn: 'From Calcium Carbide to TNT Explosive',
    titleAr: 'من كاربيد الكالسيوم إلى مادة TNT المتفجرة',
    startMaterialEn: 'Calcium Carbide (CaC₂)',
    startMaterialAr: 'كاربيد الكالسيوم (CaC₂)',
    targetProductEn: '2,4,6-Trinitrotoluene (TNT)',
    targetProductAr: 'ثلاثي نيتروتولوين (TNT)',
    curriculumContextEn:
      'Industrial synthetic route combining inorganic carbide hydrolysis with cyclic trimerization, Friedel-Crafts alkylation, and multi-step electrophilic nitration.',
    curriculumContextAr:
      'مخطط تحويل صناعي يجمع بين تنقيط الماء على كاربيد الكالسيوم، البلمرة الحلقية الثلاثية، ألكلة فريدل-كرافتس، والنيترة الثلاثية للتولوين.',
    steps: [
      {
        stepNumber: 1,
        reagentEn: 'Water (H₂O) dropwise',
        reagentAr: 'تنقيط الماء البارد (H₂O)',
        conditionsEn: 'Pass through acidified CuSO₄/H₂SO₄ to remove PH₃ and H₂S impurities',
        conditionsAr: 'المرور على محلول كبريتات نحاس في حمض كبريتيك لإزالة شوائب الفوسفين وكبريتيد الهيدروجين',
        reactionTypeEn: 'Hydrolysis',
        reactionTypeAr: 'تنقيط ماء (تحلل مائي)',
        productFormula: 'HC≡CH',
        productNameEn: 'Ethyne (Acetylene)',
        productNameAr: 'الإيثاين (الأسيتيلين)',
        balancedEquationKatex: '\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\to \\text{HC}\\equiv\\text{CH} + \\text{Ca(OH)}_2',
        boilingPointC: -84,
        primaryIrPeak: 2120,
        irLabelEn: 'C≡C stretch (2120 cm⁻¹)',
        irLabelAr: 'اهتزاز الرابطة الثلاثية (٢١٢٠ سم⁻¹)',
        structureType: 'alkyne',
      },
      {
        stepNumber: 2,
        reagentEn: 'Cyclic Trimerization (3 C₂H₂)',
        reagentAr: 'بلمرة ثلاثية حلقية (٣ جزيئات أسيتيلين)',
        conditionsEn: 'Red-hot nickel tube (Heat)',
        conditionsAr: 'أنبوبة نيكل مسخنة لدرجة الاحمرار',
        reactionTypeEn: 'Cyclic Polymerization',
        reactionTypeAr: 'بلمرة حلقية',
        productFormula: 'C₆H₆',
        productNameEn: 'Benzene',
        productNameAr: 'البنزين العطري',
        balancedEquationKatex: '3\\text{C}_2\\text{H}_2 \\xrightarrow{\\text{Ni / Red heat}} \\text{C}_6\\text{H}_6',
        boilingPointC: 80.1,
        primaryIrPeak: 1600,
        irLabelEn: 'Aromatic C=C ring stretch (1600 cm⁻¹)',
        irLabelAr: 'اهتزاز الحلقة الأروماتية (١٦٠٠ سم⁻¹)',
        structureType: 'arene',
      },
      {
        stepNumber: 3,
        reagentEn: 'Chloromethane (CH₃Cl)',
        reagentAr: 'كلوريد الميثيل (CH₃Cl)',
        conditionsEn: 'Anhydrous AlCl₃ catalyst (Friedel-Crafts)',
        conditionsAr: 'كلوريد ألومنيوم لامائي كعامل حفاز (تفاعل فريدل-كرافتس)',
        reactionTypeEn: 'Electrophilic Alkylation',
        reactionTypeAr: 'ألكلة أوروماتية (فريدل-كرافتس)',
        productFormula: 'C₆H₅-CH₃',
        productNameEn: 'Toluene (Methylbenzene)',
        productNameAr: 'التولوين (ميثيل بنزين)',
        balancedEquationKatex: '\\text{C}_6\\text{H}_6 + \\text{CH}_3\\text{Cl} \\xrightarrow{\\text{anh. AlCl}_3} \\text{C}_6\\text{H}_5\\text{CH}_3 + \\text{HCl}',
        boilingPointC: 110.6,
        primaryIrPeak: 1495,
        irLabelEn: 'Aromatic C-H bend & methyl bend (1495 cm⁻¹)',
        irLabelAr: 'انحناء C-H الأروماتي والميثيل (١٤٩٥ سم⁻¹)',
        structureType: 'alkylarene',
      },
      {
        stepNumber: 4,
        reagentEn: 'Nitrating Mixture: 3 HNO₃ + conc. H₂SO₄',
        reagentAr: 'خليط النيترة: ٣ حمض نيتريك + كبريتيك مركز (١:١)',
        conditionsEn: 'Heating at 50°C',
        conditionsAr: 'تسخين تدريجي عند ٥٠°س',
        reactionTypeEn: 'Electrophilic Nitration',
        reactionTypeAr: 'نيترة ثلاثية (مواقع أورثو وبارا)',
        productFormula: 'C₆H₂(CH₃)(NO₂)₃',
        productNameEn: '2,4,6-Trinitrotoluene (TNT)',
        productNameAr: 'ثلاثي نيتروتولوين (TNT شديد الانفجار)',
        balancedEquationKatex: '\\text{C}_6\\text{H}_5\\text{CH}_3 + 3\\text{HNO}_3 \\xrightarrow{\\text{conc. H}_2\\text{SO}_4 / 50^\\circ\\text{C}} \\text{C}_6\\text{H}_2(\\text{CH}_3)(\\text{NO}_2)_3 + 3\\text{H}_2\\text{O}',
        boilingPointC: 240,
        primaryIrPeak: 1530,
        irLabelEn: 'Asymmetric NO₂ stretch (1530 cm⁻¹)',
        irLabelAr: 'اهتزاز غير متماثل لمجموعة النيترو (١٥٣٠ سم⁻¹)',
        structureType: 'nitroarene',
      },
    ],
  },
  {
    id: 'methane_to_ester',
    titleEn: 'From Natural Gas (Methane) to Ethyl Acetate Ester',
    titleAr: 'من الغاز الطبيعي (الميثان) إلى إستر إيثانوات الإيثيل',
    startMaterialEn: 'Methane (CH₄)',
    startMaterialAr: 'الميثان (CH₄)',
    targetProductEn: 'Ethyl Acetate Ester (CH₃COOC₂H₅)',
    targetProductAr: 'إستر أسيتات الإيثيل ذو الرائحة الذكية',
    curriculumContextEn:
      'Transforming the primary component of natural gas into a sweet-smelling organic ester via thermal cracking, catalytic hydration, oxidation, and Fischer esterification.',
    curriculumContextAr:
      'تحويل المكون الرئيسي للغاز الطبيعي إلى إستر عضوي ذكي الرائحة عبر التكسير الحراري والتبريد السريع، الهيدرة الحفزية، الأكسدة، وتفاعل القسطرة.',
    steps: [
      {
        stepNumber: 1,
        reagentEn: 'Thermal Cracking & Rapid Quenching',
        reagentAr: 'تسخين شديد وتبريد سريع',
        conditionsEn: '1500°C followed by rapid quenching in water',
        conditionsAr: '١٥٠٠°س ثم تبريد فوري سريع بالماء',
        reactionTypeEn: 'Pyrolysis',
        reactionTypeAr: 'تكسير حراري وتبريد سريع',
        productFormula: 'HC≡CH',
        productNameEn: 'Acetylene (Ethyne)',
        productNameAr: 'الإيثاين',
        balancedEquationKatex: '2\\text{CH}_4 \\xrightarrow{1500^\\circ\\text{C} / \\text{quench}} \\text{HC}\\equiv\\text{CH} + 3\\text{H}_2',
        boilingPointC: -84,
        primaryIrPeak: 2120,
        irLabelEn: 'C≡C stretch (2120 cm⁻¹)',
        irLabelAr: 'اهتزاز الرابطة الثلاثية (٢١٢٠ سم⁻¹)',
        structureType: 'alkyne',
      },
      {
        stepNumber: 2,
        reagentEn: 'Catalytic Hydration: H₂O',
        reagentAr: 'هيدرة حفزية: إضافة الماء',
        conditionsEn: '40% H₂SO₄, 1% HgSO₄ at 60°C',
        conditionsAr: 'حمض كبريتيك ٤٠٪ وكبريتات زئبقيك HgSO₄ ١٪ عند ٦٠°س',
        reactionTypeEn: 'Electrophilic Addition & Tautomerization',
        reactionTypeAr: 'هيدرة حفزية وتطاير كحول الفاينيل غير المستقر',
        productFormula: 'CH₃-CHO',
        productNameEn: 'Acetaldehyde (Ethanal)',
        productNameAr: 'الأسيتالدهيد (إيثانال)',
        balancedEquationKatex: '\\text{HC}\\equiv\\text{CH} + \\text{H}_2\\text{O} \\xrightarrow{40\\%\\,\\text{H}_2\\text{SO}_4 / 1\\%\\,\\text{HgSO}_4 / 60^\\circ\\text{C}} \\text{CH}_3\\text{CHO}',
        boilingPointC: 20.2,
        primaryIrPeak: 1725,
        irLabelEn: 'C=O carbonyl stretch (1725 cm⁻¹)',
        irLabelAr: 'اهتزاز الكربونيل الألدهيدي (١٧٢٥ سم⁻¹)',
        structureType: 'aldehyde',
      },
      {
        stepNumber: 3,
        reagentEn: 'Oxidation: acidified KMnO₄ or K₂Cr₂O₇',
        reagentAr: 'أكسدة: برمنجنات بوتاسيوم محمضة بحمض الكبريتيك',
        conditionsEn: 'Room temperature controlled oxidation',
        conditionsAr: 'أكسدة الألدهيد بمحلول مؤكسد إلى حمض كربوكسيلي',
        reactionTypeEn: 'Oxidation',
        reactionTypeAr: 'أكسدة تامة للألدهيد',
        productFormula: 'CH₃-COOH',
        productNameEn: 'Acetic Acid (Ethanoic acid)',
        productNameAr: 'حمض الأسيتيك (الخل)',
        balancedEquationKatex: '\\text{CH}_3\\text{CHO} + [\\text{O}] \\xrightarrow{\\text{KMnO}_4 / \\text{H}_2\\text{SO}_4} \\text{CH}_3\\text{COOH}',
        boilingPointC: 118,
        primaryIrPeak: 1715,
        irLabelEn: 'C=O stretch (1715) & broad OH dimer (2500-3300 cm⁻¹)',
        irLabelAr: 'اهتزاز كربونيل وحزمة هيدروكسيل متصلة بالهيدروجين (١٧١٥ سم⁻¹)',
        structureType: 'acid',
      },
      {
        stepNumber: 4,
        reagentEn: 'Ethanol (C₂H₅OH) + conc. H₂SO₄',
        reagentAr: 'كحول إيثيلي (إيثانول) + حمض كبريتيك مركز',
        conditionsEn: 'Boiling water bath with dehydrating agent to prevent reverse reaction',
        conditionsAr: 'حمام مائي ووسط نازع للماء لمنع التفاعل العكسي وطرد الماء',
        reactionTypeEn: 'Fischer Esterification',
        reactionTypeAr: 'تفاعل قسطرة ونزع ماء',
        productFormula: 'CH₃COOC₂H₅',
        productNameEn: 'Ethyl Acetate (Fruity aroma)',
        productNameAr: 'إستر أسيتات الإيثيل (رائحة الفواكه العطرة)',
        balancedEquationKatex: '\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{\\text{conc. H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}',
        boilingPointC: 77.1,
        primaryIrPeak: 1740,
        irLabelEn: 'Ester C=O stretch (1740 cm⁻¹)',
        irLabelAr: 'اهتزاز إستر كربونيل (١٧٤٠ سم⁻¹)',
        structureType: 'ester',
      },
    ],
  },
  {
    id: 'ethanol_to_aspirin',
    titleEn: 'From Ethanol to Aspirin (Acetylsalicylic Acid)',
    titleAr: 'من الإيثانول إلى دواء الأسبرين (حمض أسيتيل ساليسيليك)',
    startMaterialEn: 'Ethanol (C₂H₅OH)',
    startMaterialAr: 'الإيثانول (كحول نقي)',
    targetProductEn: 'Aspirin (Acetylsalicylic Acid)',
    targetProductAr: 'الأسبرين (مسكن وخافض للحرارة ومميع للدم)',
    curriculumContextEn:
      'Pharmaceutical synthesis demonstrating total oxidation of a primary alcohol followed by esterification of the phenolic OH group of salicylic acid.',
    curriculumContextAr:
      'تخليق دوائي صيدلاني يوضح الأكسدة التامة لكحول أولي تليه أسترة مجموعة الهيدروكسيل الفينولية لحمض الساليسيليك.',
    steps: [
      {
        stepNumber: 1,
        reagentEn: 'Controlled Oxidation 2 [O]',
        reagentAr: 'أكسدة تامة بمحلول ثاني كرومات البوتاسيوم المحمضة',
        conditionsEn: 'Acidified K₂Cr₂O₇ with heating (orange to green Cr³⁺)',
        conditionsAr: 'تسخين مع K₂Cr₂O₇ المحمضة وتحول اللون البرتقالي إلى الأخضر',
        reactionTypeEn: 'Complete Oxidation',
        reactionTypeAr: 'أكسدة تامة للكحول الأولي',
        productFormula: 'CH₃-COOH',
        productNameEn: 'Acetic Acid (Ethanoic Acid)',
        productNameAr: 'حمض الأسيتيك',
        balancedEquationKatex: '\\text{C}_2\\text{H}_5\\text{OH} + 2[\\text{O}] \\xrightarrow{\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}^+} \\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O}',
        boilingPointC: 118,
        primaryIrPeak: 1715,
        irLabelEn: 'Carboxylic C=O (1715 cm⁻¹)',
        irLabelAr: 'كربونيل حمضي (١٧١٥ سم⁻¹)',
        structureType: 'acid',
      },
      {
        stepNumber: 2,
        reagentEn: 'Salicylic Acid (o-hydroxybenzoic acid)',
        reagentAr: 'حمض الساليسيليك (أورثو هيدروكسي حمض البنزويك)',
        conditionsEn: 'Drops of conc. H₂SO₄ as catalyst at 70°C',
        conditionsAr: 'قطرات من حمض الكبريتيك المركز كعامل حفاز عند ٧٠°س',
        reactionTypeEn: 'Phenolic Esterification',
        reactionTypeAr: 'أسترة فينولية لحمض الساليسيليك',
        productFormula: 'C₆H₄(COOH)(OCOCH₃)',
        productNameEn: 'Acetylsalicylic Acid (Aspirin)',
        productNameAr: 'حمض أسيتيل ساليسيليك (الأسبرين)',
        balancedEquationKatex: '\\text{CH}_3\\text{COOH} + \\text{C}_6\\text{H}_4(\\text{OH})\\text{COOH} \\xrightarrow{\\text{H}^+} \\text{C}_6\\text{H}_4(\\text{OCOCH}_3)\\text{COOH} + \\text{H}_2\\text{O}',
        boilingPointC: 135,
        primaryIrPeak: 1755,
        irLabelEn: 'Ester C=O (1755 cm⁻¹) & Acid C=O (1690 cm⁻¹)',
        irLabelAr: 'اهتزاز إستر (١٧٥٥ سم⁻¹) وحمض (١٦٩٠ سم⁻¹)',
        structureType: 'ester',
      },
    ],
  },
  {
    id: 'phenol_to_picric',
    titleEn: 'From Phenol (Carbolic Acid) to Picric Acid Antiseptic',
    titleAr: 'من الفينول (حمض الكاربوليك) إلى حمض البيكريك المطهر',
    startMaterialEn: 'Phenol (C₆H₅OH)',
    startMaterialAr: 'الفينول (حمض الكاربوليك)',
    targetProductEn: 'Picric Acid (2,4,6-Trinitrophenol)',
    targetProductAr: 'حمض البيكريك (مطهر للحروق ومادة متفجرة صفراء)',
    curriculumContextEn:
      'High-yield aromatic cycle in Egyptian curriculum: reduction with Zn powder, halogenation, alkaline hydrolysis, and triple nitration to synthesize picric acid.',
    curriculumContextAr:
      'دورة أروماتية هامة: اختزال الفينول بمسحوق الخارصين، هلجنة، تحلل مائي قاعدي تحت ضغط وحرارة، ونيترة ثلاثية لإنتاج حمض البيكريك.',
    steps: [
      {
        stepNumber: 1,
        reagentEn: 'Zinc Dust (Zn) + Heat',
        reagentAr: 'مسحوق الخارصين (Zn) مع التسخين الشديد',
        conditionsEn: 'Dry distillation with powdered zinc',
        conditionsAr: 'تقطير جاف مع مسحوق الخارصين كعامل مختزل',
        reactionTypeEn: 'Reduction',
        reactionTypeAr: 'اختزال الفينول إلى بنزين',
        productFormula: 'C₆H₆',
        productNameEn: 'Benzene',
        productNameAr: 'البنزين العطري',
        balancedEquationKatex: '\\text{C}_6\\text{H}_5\\text{OH} + \\text{Zn} \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_6 + \\text{ZnO}',
        boilingPointC: 80.1,
        primaryIrPeak: 1600,
        irLabelEn: 'Aromatic C=C (1600 cm⁻¹)',
        irLabelAr: 'رنين حلقة البنزين (١٦٠٠ سم⁻¹)',
        structureType: 'arene',
      },
      {
        stepNumber: 2,
        reagentEn: 'Chlorine gas (Cl₂) + FeCl₃',
        reagentAr: 'غاز الكلور (Cl₂) في وجود كلوريد الحديد III',
        conditionsEn: 'Dark or indirect light with Lewis acid catalyst',
        conditionsAr: 'غياب ضوء الشمس المباشر ووجود عامل حفاز FeCl₃',
        reactionTypeEn: 'Electrophilic Substitution (Halogenation)',
        reactionTypeAr: 'استبدال هالوجيني (هلجنة بالاستبدال)',
        productFormula: 'C₆H₅-Cl',
        productNameEn: 'Chlorobenzene',
        productNameAr: 'كلوروبنزين',
        balancedEquationKatex: '\\text{C}_6\\text{H}_6 + \\text{Cl}_2 \\xrightarrow{\\text{FeCl}_3} \\text{C}_6\\text{H}_5\\text{Cl} + \\text{HCl}',
        boilingPointC: 131.6,
        primaryIrPeak: 745,
        irLabelEn: 'Aromatic C-Cl stretch (745 cm⁻¹)',
        irLabelAr: 'اهتزاز رابطة C-Cl الأروماتية (٧٤٥ سم⁻¹)',
        structureType: 'haloalkane',
      },
      {
        stepNumber: 3,
        reagentEn: 'Sodium Hydroxide (NaOH)',
        reagentAr: 'محلول الصودا الكاوية (هيدروكسيد الصوديوم)',
        conditionsEn: 'High temperature 300°C and pressure 300 atm',
        conditionsAr: 'تسخين شديد عند ٣٠٠°س وضغط مرتفع ٣٠٠ ضغط جوي',
        reactionTypeEn: 'Nucleophilic Aromatic Substitution',
        reactionTypeAr: 'تحلل مائي قاعدي تحت ضغط وحرارة مرتفعة',
        productFormula: 'C₆H₅-OH',
        productNameEn: 'Phenol (Carbolic Acid)',
        productNameAr: 'الفينول (حمض الكاربوليك)',
        balancedEquationKatex: '\\text{C}_6\\text{H}_5\\text{Cl} + \\text{NaOH} \\xrightarrow{300^\\circ\\text{C} / 300\\,\\text{atm}} \\text{C}_6\\text{H}_5\\text{OH} + \\text{NaCl}',
        boilingPointC: 181.7,
        primaryIrPeak: 3350,
        irLabelEn: 'Phenolic OH stretch (3350 cm⁻¹)',
        irLabelAr: 'اهتزاز هيدروكسيل فينولية (٣٣٥٠ سم⁻¹)',
        structureType: 'alcohol',
      },
      {
        stepNumber: 4,
        reagentEn: 'Nitrating Mixture: 3 HNO₃ + conc. H₂SO₄',
        reagentAr: 'خليط النيترة: ٣ حمض نيتريك + كبريتيك مركز',
        conditionsEn: 'Heating to 60°C',
        conditionsAr: 'تسخين عند ٦٠°س لتوجيه مجموعات النيترو لمواقع أورثو وبارا',
        reactionTypeEn: 'Electrophilic Nitration',
        reactionTypeAr: 'نيترة ثلاثية للفينول',
        productFormula: 'C₆H₂(OH)(NO₂)₃',
        productNameEn: 'Picric Acid (2,4,6-Trinitrophenol)',
        productNameAr: 'حمض البيكريك (ثلاثي نيتروفينول الأصفر)',
        balancedEquationKatex: '\\text{C}_6\\text{H}_5\\text{OH} + 3\\text{HNO}_3 \\xrightarrow{\\text{conc. H}_2\\text{SO}_4} \\text{C}_6\\text{H}_2(\\text{OH})(\\text{NO}_2)_3 + 3\\text{H}_2\\text{O}',
        boilingPointC: 255,
        primaryIrPeak: 1540,
        irLabelEn: 'NO₂ asymmetric stretch (1540 cm⁻¹)',
        irLabelAr: 'اهتزاز غير متماثل لمجموعة النيترو (١٥٤٠ سم⁻¹)',
        structureType: 'nitroarene',
      },
    ],
  },
  {
    id: 'alkane_alkene_glycol',
    titleEn: 'Alcohol Dehydration to Ethylene & Baeyer Test (Ethylene Glycol)',
    titleAr: 'نزع ماء من الإيثانول إلى الإيثين وكشف باير (إيثيلين جليكول)',
    startMaterialEn: 'Ethanol (C₂H₅OH)',
    startMaterialAr: 'الإيثانول (كحول نقي)',
    targetProductEn: 'Ethylene Glycol (Anti-freeze Dihydric Alcohol)',
    targetProductAr: 'إيثيلين جليكول (مضاد تجمد ماء السيارات)',
    curriculumContextEn:
      'Industrial alkene preparation via sulfuric acid dehydration at 180°C followed by Baeyer oxidation test producing dihydric alcohol.',
    curriculumContextAr:
      'تحضير الألكينات في المختبر بنزع الماء عند ١٨٠°س يليها كشف باير بالأكسدة لتكوين كحول ثنائي الهيدروكسيل يزيل لون البرمنجنات.',
    steps: [
      {
        stepNumber: 1,
        reagentEn: 'Concentrated Sulfuric Acid (conc. H₂SO₄)',
        reagentAr: 'حمض كبريتيك مركز (عامل نازع للماء)',
        conditionsEn: 'Heating at 180°C (via ethyl hydrogen sulfate intermediate)',
        conditionsAr: 'تسخين عند ١٨٠°س (يمر بكبريتات الإيثيل الهيدروجينية عند ٨٠°س)',
        reactionTypeEn: 'Thermal Elimination / Dehydration',
        reactionTypeAr: 'نزع ماء حراري من كحول أولي',
        productFormula: 'CH₂=CH₂',
        productNameEn: 'Ethene (Ethylene)',
        productNameAr: 'الإيثين (الإيثيلين)',
        balancedEquationKatex: '\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{conc. H}_2\\text{SO}_4 / 180^\\circ\\text{C}} \\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O}',
        boilingPointC: -103.7,
        primaryIrPeak: 1645,
        irLabelEn: 'C=C double bond stretch (1645 cm⁻¹)',
        irLabelAr: 'اهتزاز الرابطة المزدوجة C=C (١٦٤٥ سم⁻¹)',
        structureType: 'diol',
      },
      {
        stepNumber: 2,
        reagentEn: 'Cold Alkaline KMnO₄ Solution (Baeyer Test)',
        reagentAr: 'محلول برمنجنات بوتاسيوم قلوية بنفسجية (كشف باير)',
        conditionsEn: 'Room temperature alkaline oxidation (purple color discharged)',
        conditionsAr: 'وسط قلوي على البارد (يزول اللون البنفسجي ويتكون راسب بني MnO₂)',
        reactionTypeEn: 'Baeyer Oxidation & Hydroxylation',
        reactionTypeAr: 'أكسدة باير وتكوين جليكول ثنائي الهيدروكسيل',
        productFormula: 'CH₂(OH)-CH₂(OH)',
        productNameEn: 'Ethylene Glycol (Ethane-1,2-diol)',
        productNameAr: 'إيثيلين جليكول (إيثان-١،٢- ثنائي أول)',
        balancedEquationKatex: '\\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O} + [\\text{O}] \\xrightarrow{\\text{alkaline KMnO}_4} \\text{CH}_2(\\text{OH})-\\text{CH}_2(\\text{OH})',
        boilingPointC: 197.3,
        primaryIrPeak: 3300,
        irLabelEn: 'Strong dual O-H hydrogen bonding (3300 cm⁻¹)',
        irLabelAr: 'حزمة هيدروكسيل ثنائية قوية متصلة بروابط هيدروجينية (٣٣٠٠ سم⁻¹)',
        structureType: 'diol',
      },
    ],
  },
];

// -------------------------------------------------------------
// DATA STRUCTURES: IUPAC QUIZ BANK (8 CURRICULUM QUESTIONS)
// -------------------------------------------------------------
export interface QuizQuestion {
  id: string;
  structure: string;
  optionsEn: string[];
  optionsAr: string[];
  correctIndex: number;
  explanationEn: string;
  explanationAr: string;
  category: string;
}

export const IUPAC_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    structure: 'CH₃ - CH(CH₃) - CH = CH₂',
    optionsEn: ['3-Methylbut-1-ene', '2-Methylbut-3-ene', '3-Methylbutene', 'Pent-1-ene'],
    optionsAr: ['٣- ميثيل بيوت-١-ين', '٢- ميثيل بيوت-٣-ين', '٣- ميثيل بيوتين', 'بنت-١-ين'],
    correctIndex: 0,
    explanationEn:
      'Rule 1: Number from the end closer to the double bond (C=C takes strict priority over alkyl branches). C1 is the double bond, and the methyl branch is located at C3 -> 3-Methylbut-1-ene.',
    explanationAr:
      'القاعدة الأولى: يبدأ الترقيم من الطرف الأقرب للرابطة المزدوجة بغض النظر عن موقع التفرعات؛ الرابطة المزدوجة عند C1 ومجموعة الميثيل عند C3 -> ٣- ميثيل بيوت-١-ين.',
    category: 'Alkenes',
  },
  {
    id: 'q2',
    structure: 'CH₃ - C(CH₃)₂ - CH₂ - CH(Cl) - CH₃',
    optionsEn: [
      '4-Chloro-2,2-dimethylpentane',
      '2-Chloro-4,4-dimethylpentane',
      '2,2-Dimethyl-4-chloropentane',
      '4-Chloropentane',
    ],
    optionsAr: [
      '٤- كلورو-٢،٢- ثنائي ميثيل بنتان',
      '٢- كلورو-٤،٤- ثنائي ميثيل بنتان',
      '٢،٢- ثنائي ميثيل-٤- كلوروبنتان',
      '٤- كلوروبنتان',
    ],
    correctIndex: 0,
    explanationEn:
      'Number from the side that gives the lowest sum of locants: numbering from left gives 2,2-dimethyl and 4-chloro (sum = 2+2+4 = 8), while numbering from right gives 2-chloro and 4,4-dimethyl (sum = 2+4+4 = 10). Alphabetically, "Chloro" precedes "Methyl" -> 4-Chloro-2,2-dimethylpentane.',
    explanationAr:
      'الترقيم من الطرف الذي يعطي أقل مجموع لأرقام ذرات الكربون البديلة (من اليسار: ٢+٢+٤ = ٨). وعند كتابة الاسم ترتب المجموعات أبجدياً باللاتينية: Chloro يسبق Methyl -> ٤- كلورو-٢،٢- ثنائي ميثيل بنتان.',
    category: 'Haloalkanes',
  },
  {
    id: 'q3',
    structure: 'CH₃ - CH(OH) - CH₂ - CH₃',
    optionsEn: ['Butan-2-ol (Secondary alcohol)', 'Butan-1-ol (Primary alcohol)', '2-Methylpropan-2-ol', 'sec-Butyl ether'],
    optionsAr: ['بيوتان-٢-ول (كحول ثانوي)', 'بيوتان-١-ول (كحول أولي)', '٢- ميثيل بروبان-٢-ول', 'إيثر ثنائي الإيثيل'],
    correctIndex: 0,
    explanationEn:
      'The longest continuous carbon chain containing -OH has 4 carbons (butane). The -OH is on C2. The carbinol carbon is bonded to 1 hydrogen and 2 alkyl carbons -> Secondary Alcohol (Butan-2-ol).',
    explanationAr:
      'أطول سلسلة متصلة تحوي مجموعة الهيدروكسيل ٤ ذرات كربون (بيوتان). تقع -OH على الكربون ٢. ذرة الكاربينول متصلة بذرة هيدروجين واحدة ومجموعتي ألكيل -> كحول ثانوي (بيوتان-٢-ول).',
    category: 'Alcohols',
  },
  {
    id: 'q4',
    structure: 'HC ≡ C - CH(C₂H₅) - CH₃',
    optionsEn: ['3-Methylpent-1-yne', '3-Ethylbut-1-yne', '2-Ethylbut-3-yne', 'Hex-1-yne'],
    optionsAr: ['٣- ميثيل بنت-١-ين', '٣- إيثيل بيوت-١-ين', '٢- إيثيل بيوت-٣-ين', 'هكس-١-ين'],
    correctIndex: 0,
    explanationEn:
      'Selecting the longest chain containing the triple bond: C1≡C2 - C3(CH₃) - C4H₂ - C5H₃ has 5 carbons (pentyne)! The methyl group is at C3 -> 3-Methylpent-1-yne.',
    explanationAr:
      'اختيار أطول سلسلة كربونية متصلة تحوي الرابطة الثلاثية: فك مجموعة الإيثيل C₂H₅ إلى -CH₂-CH₃ يجعل أطول سلسلة ٥ ذرات كربون (بنتـاين)، وتصبح مجموعة الميثيل تفرعاً عند C3 -> ٣- ميثيل بنت-١-ين.',
    category: 'Alkynes',
  },
  {
    id: 'q5',
    structure: 'CH₃ - CH(CH₃) - CHO',
    optionsEn: ['2-Methylpropanal', 'Isobutyric acid', '2-Methylpropan-1-one', 'Butanal'],
    optionsAr: ['٢- ميثيل بروبانال', 'حمض أيزوبيوتيريك', '٢- ميثيل بروبان-١-أون', 'بيوتانال'],
    correctIndex: 0,
    explanationEn:
      'The carbonyl carbon of the aldehyde group (-CHO) is always designated as C1. A 3-carbon chain with a methyl branch at C2 -> 2-Methylpropanal.',
    explanationAr:
      'ذرة كربون مجموعة الألدهيد (-CHO) تأخذ دائماً الرقم ١ في السلسلة. السلسلة ٣ ذرات (بروبانال) مع تفرع ميثيل على ذرة الكربون ٢ -> ٢- ميثيل بروبانال.',
    category: 'Aldehydes',
  },
  {
    id: 'q6',
    structure: 'CH₃ - CH₂ - CH(CH₃) - COOH',
    optionsEn: ['2-Methylbutanoic acid', '3-Methylbutanoic acid', '2-Ethylpropanoic acid', 'Pentanoic acid'],
    optionsAr: ['حمض ٢- ميثيل بيوتانويك', 'حمض ٣- ميثيل بيوتانويك', 'حمض ٢- إيثيل بروبانويك', 'حمض البنتانويك'],
    correctIndex: 0,
    explanationEn:
      'The carboxyl group (-COOH) is numbered C1. The longest chain has 4 carbons (butanoic acid). Methyl branch is at C2 -> 2-Methylbutanoic acid.',
    explanationAr:
      'تأخذ ذرة كربون مجموعة الكربوكسيل (-COOH) دائماً الرقم ١، وأطول سلسلة ٤ ذرات كربون (حمض بيوتانويك)، والميثيل عند الكربون ٢ -> حمض ٢- ميثيل بيوتانويك.',
    category: 'Carboxylic Acids',
  },
  {
    id: 'q7',
    structure: 'CH₃ - COO - CH(CH₃)₂',
    optionsEn: ['Isopropyl ethanoate (Isopropyl acetate)', 'Propyl ethanoate', 'Ethyl propanoate', 'Methyl isobutyrate'],
    optionsAr: ['إيثانوات الأيزوبروبيل (أسيتات الأيزوبروبيل)', 'إيثانوات البروبيل', 'بروبانوات الإيثيل', 'أيزوبيوتيرات الميثيل'],
    correctIndex: 0,
    explanationEn:
      'Esters are named as Alkyl alkanoate: The acid portion (CH₃COO-) is ethanoate/acetate, and the alkyl group attached to oxygen (-CH(CH₃)₂) is isopropyl -> Isopropyl ethanoate.',
    explanationAr:
      'تسمى الإسترات بنظام ألكانوات الألكيل: الشق الحامضي (CH₃COO-) مشتق من حمض الإيثانويك (إيثانوات)، والشق الكحولي المتصل بالأكسجين هو الأيزوبروبيل -> إيثانوات الأيزوبروبيل.',
    category: 'Esters',
  },
  {
    id: 'q8',
    structure: '1,4-Substituted Benzene: p-O₂N - C₆H₄ - CH₃',
    optionsEn: ['1-Methyl-4-nitrobenzene (p-Nitrotoluene)', '4-Methylnitrobenzene', '1-Nitro-4-methylbenzene', 'p-Nitroaniline'],
    optionsAr: ['١- ميثيل-٤- نيتروبنزين (بارا- نيتروتولوين)', '٤- ميثيل نيتروبنزين', '١- نيترو-٤- ميثيل بنزين', 'بارا- نيتروأنيلين'],
    correctIndex: 0,
    explanationEn:
      'Derivatives of toluene: Toluene is the parent hydrocarbon (C1 = methyl). The nitro substituent is located at the para position (C4) -> 1-Methyl-4-nitrobenzene or p-Nitrotoluene.',
    explanationAr:
      'تنسيب المركب إلى التولوين: ذرة الكربون المتصلة بمجموعة الميثيل تأخذ الرقم ١، ومجموعة النيترو تقع في الموضع ٤ (الموضع بارا) -> ١- ميثيل-٤- نيتروبنزين (بارا- نيتروتولوين).',
    category: 'Aromatics',
  },
];

// -------------------------------------------------------------
// LAB DEFINITION & SCHEMAS
// -------------------------------------------------------------
const INITIAL_PARAMS: OrganicParams = {
  subTab: 'roadmap',
  pathwayId: 'carbide_to_tnt',
  activeStep: 0,
  alkeneType: 'propene',
  reagent: 'HBr',
  carbocationEnergyView: false,
  reactionProgress: 100,
  temperature: 25,
  catalystActive: true,
  currentQuizIndex: 0,
  selectedOption: null,
  showExplanation: false,
  benzeneSubstituent: 'CH3',
  benzeneElectrophile: 'nitration',
  showWhelandResonance: false,
  esterAcid: 'acetic',
  esterAlcohol: 'ethanol',
  isCatalystH2SO4Present: true,
  esterTemperature: 75,
  saponificationActive: false,
  esterTimeMinutes: 30,
};

const ORGANIC_PARAM_SCHEMA: LabParameterSchema<OrganicParams> = {
  subTab: {
    key: 'subTab',
    labelEn: 'Workbench Mode',
    labelAr: 'نمط المختبر',
    type: 'select',
    defaultValue: 'roadmap',
    options: [
      { labelEn: 'Synthetic Roadmaps', labelAr: 'خريطة التحويلات العضوية', value: 'roadmap' },
      { labelEn: "Markovnikov's Regioselectivity", labelAr: 'قاعدة ماركونيكوف وآلية التفاعل', value: 'markovnikov' },
      { labelEn: 'Aromatic Directing Groups', labelAr: 'توجيه المجموعات في حلقة البنزين', value: 'benzene_directing' },
      { labelEn: 'Fischer Esterification & Saponification', labelAr: 'تفاعل القسطرة والتحلل المائي للصابون', value: 'esterification' },
      { labelEn: 'IUPAC Systematic Nomenclature', labelAr: 'تسمية الأيوباك وتحدي الهياكل', value: 'nomenclature' },
    ],
    category: 'primary',
  },
  // Mode 1: Roadmap
  pathwayId: {
    key: 'pathwayId',
    labelEn: 'Synthesis Roadmap',
    labelAr: 'مسار التخليق الكيميائي',
    type: 'select',
    defaultValue: 'carbide_to_tnt',
    options: ORGANIC_PATHWAYS.map((p) => ({
      labelEn: p.titleEn,
      labelAr: p.titleAr,
      value: p.id,
    })),
    category: 'primary',
    visibleIf: (p) => p.subTab === 'roadmap',
  },
  activeStep: {
    key: 'activeStep',
    labelEn: 'Synthesis Stage',
    labelAr: 'مرحلة التفاعل',
    type: 'number',
    defaultValue: 0,
    min: 0,
    max: 3,
    step: 1,
    category: 'primary',
    visibleIf: (p) => p.subTab === 'roadmap',
  },
  // Mode 2: Markovnikov
  alkeneType: {
    key: 'alkeneType',
    labelEn: 'Asymmetric Alkene',
    labelAr: 'الألكين غير المتماثل',
    type: 'select',
    defaultValue: 'propene',
    options: [
      { labelEn: 'Propene (CH₃-CH=CH₂)', labelAr: 'البروبين (CH₃-CH=CH₂)', value: 'propene' },
      { labelEn: '2-Methylpropene ((CH₃)₂C=CH₂)', labelAr: '٢- ميثيل بروبين ((CH₃)₂C=CH₂)', value: 'methylpropene' },
      { labelEn: 'But-1-ene (CH₃-CH₂-CH=CH₂)', labelAr: 'بيوت-١-ين (CH₃-CH₂-CH=CH₂)', value: 'but1ene' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'markovnikov',
  },
  reagent: {
    key: 'reagent',
    labelEn: 'Asymmetric Reagent',
    labelAr: 'الكاشف غير المتماثل',
    type: 'select',
    defaultValue: 'HBr',
    options: [
      { labelEn: 'Hydrogen Bromide (H⁺-Br⁻)', labelAr: 'بروميد الهيدروجين (H⁺-Br⁻)', value: 'HBr' },
      { labelEn: 'Hydrogen Chloride (H⁺-Cl⁻)', labelAr: 'كلوريد الهيدروجين (H⁺-Cl⁻)', value: 'HCl' },
      { labelEn: 'Water Hydration (H⁺-OH⁻ / H₂SO₄)', labelAr: 'هيدرة حفزية بالماء (H⁺-OH⁻)', value: 'H2O' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'markovnikov',
  },
  carbocationEnergyView: {
    key: 'carbocationEnergyView',
    labelEn: 'Energy Profile View',
    labelAr: 'عرض منحنى طاقة التنشيط',
    type: 'boolean',
    defaultValue: false,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'markovnikov',
  },
  reactionProgress: {
    key: 'reactionProgress',
    labelEn: 'Reaction Progress',
    labelAr: 'تقدم التفاعل',
    type: 'number',
    defaultValue: 100,
    min: 0,
    max: 100,
    step: 5,
    unit: '%',
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'markovnikov' || p.subTab === 'roadmap',
  },
  temperature: {
    key: 'temperature',
    labelEn: 'Reaction Temperature',
    labelAr: 'درجة حرارة التفاعل',
    type: 'number',
    defaultValue: 25,
    min: 20,
    max: 1500,
    step: 10,
    unit: '°C',
    category: 'environmental',
    visibleIf: (p) => p.subTab === 'markovnikov' || p.subTab === 'roadmap',
  },
  catalystActive: {
    key: 'catalystActive',
    labelEn: 'Catalyst Active',
    labelAr: 'تشغيل العامل الحفاز',
    type: 'boolean',
    defaultValue: true,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'markovnikov' || p.subTab === 'roadmap',
  },
  // Mode 4: Benzene Directing
  benzeneSubstituent: {
    key: 'benzeneSubstituent',
    labelEn: 'Ring Substituent',
    labelAr: 'المجموعة المتصلة بالحلقة',
    type: 'select',
    defaultValue: 'CH3',
    options: [
      { labelEn: '-CH₃ Methyl (Toluene, Activator, o/p)', labelAr: '-CH₃ ميثيل (تولوين، منشط، أورثو/بارا)', value: 'CH3' },
      { labelEn: '-OH Hydroxyl (Phenol, Strong Activator, o/p)', labelAr: '-OH هيدروكسيل (فينول، منشط قوي، أورثو/بارا)', value: 'OH' },
      { labelEn: '-NH₂ Amino (Aniline, Strong Activator, o/p)', labelAr: '-NH₂ أمينو (أنيلين، منشط قوي، أورثو/بارا)', value: 'NH2' },
      { labelEn: '-Cl Chloro (Chlorobenzene, Deactivator, o/p)', labelAr: '-Cl كلورو (كلوروبنزين، مثبط، أورثو/بارا)', value: 'Cl' },
      { labelEn: '-NO₂ Nitro (Nitrobenzene, Deactivator, meta)', labelAr: '-NO₂ نيترو (نيتروبنزين، مثبط قوي، ميتا)', value: 'NO2' },
      { labelEn: '-COOH Carboxyl (Benzoic acid, Deactivator, meta)', labelAr: '-COOH كربوكسيل (حمض بنزويك، مثبط، ميتا)', value: 'COOH' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'benzene_directing',
  },
  benzeneElectrophile: {
    key: 'benzeneElectrophile',
    labelEn: 'Incoming Electrophile',
    labelAr: 'الكاشف الإلكتروفيلي القادم',
    type: 'select',
    defaultValue: 'nitration',
    options: [
      { labelEn: 'Nitration (HNO₃ / H₂SO₄ ➔ NO₂⁺)', labelAr: 'نيترة (خليط النيترة ➔ NO₂⁺)', value: 'nitration' },
      { labelEn: 'Chlorination (Cl₂ / FeCl₃ ➔ Cl⁺)', labelAr: 'هلجنة (غاز الكلور + FeCl₃ ➔ Cl⁺)', value: 'chlorination' },
      { labelEn: 'Alkylation (CH₃Cl / AlCl₃ ➔ CH₃⁺)', labelAr: 'ألكلة فريدل-كرافتس (CH₃Cl + AlCl₃ ➔ CH₃⁺)', value: 'alkylation' },
      { labelEn: 'Sulfonation (Fuming H₂SO₄ ➔ SO₃)', labelAr: 'سلفنة (حمض كبريتيك مدخن ➔ SO₃)', value: 'sulfonation' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'benzene_directing',
  },
  showWhelandResonance: {
    key: 'showWhelandResonance',
    labelEn: 'Wheland Intermediate (Arenium Ion)',
    labelAr: 'وسيط أيون الأرينيوم (فيلاند)',
    type: 'boolean',
    defaultValue: false,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'benzene_directing',
  },
  // Mode 5: Esterification
  esterAcid: {
    key: 'esterAcid',
    labelEn: 'Carboxylic Acid',
    labelAr: 'الحمض الكربوكسيلي',
    type: 'select',
    defaultValue: 'acetic',
    options: [
      { labelEn: 'Acetic Acid (CH₃COOH, Vinegar)', labelAr: 'حمض الأسيتيك (الخل، CH₃COOH)', value: 'acetic' },
      { labelEn: 'Salicylic Acid (C₆H₄(OH)COOH, Phenolic)', labelAr: 'حمض الساليسيليك (C₆H₄(OH)COOH)', value: 'salicylic' },
      { labelEn: 'Benzoic Acid (C₆H₅COOH, Aromatic)', labelAr: 'حمض البنزويك (C₆H₅COOH)', value: 'benzoic' },
      { labelEn: 'Butyric Acid (C₃H₇COOH, Rancid butter)', labelAr: 'حمض البيوتيريك (حمض الزبدة، C₃H₇COOH)', value: 'butyric' },
      { labelEn: 'Formic Acid (HCOOH, Ant venom)', labelAr: 'حمض الفورميك (حمض النمليك، HCOOH)', value: 'formic' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'esterification',
  },
  esterAlcohol: {
    key: 'esterAlcohol',
    labelEn: 'Alcohol Component',
    labelAr: 'المركب الكحولي',
    type: 'select',
    defaultValue: 'ethanol',
    options: [
      { labelEn: 'Ethanol (C₂H₅OH, Ethyl alcohol)', labelAr: 'الإيثانول (كحول إيثيلي، C₂H₅OH)', value: 'ethanol' },
      { labelEn: 'Methanol (CH₃OH, Wood alcohol)', labelAr: 'الميثانول (كحول الخشب، CH₃OH)', value: 'methanol' },
      { labelEn: 'Isopentyl Alcohol (C₅H₁₁OH, Banana precursor)', labelAr: 'كحول أيزوبنتيل (أيزوأميل، C₅H₁₁OH)', value: 'isopentyl' },
      { labelEn: 'Benzyl Alcohol (C₆H₅CH₂OH)', labelAr: 'كحول البنزيل (C₆H₅CH₂OH)', value: 'benzyl' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'esterification',
  },
  isCatalystH2SO4Present: {
    key: 'isCatalystH2SO4Present',
    labelEn: 'Dehydrating Agent (conc. H₂SO₄)',
    labelAr: 'عامل نازع للماء (حمض كبريتيك مركز)',
    type: 'boolean',
    defaultValue: true,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'esterification',
  },
  esterTemperature: {
    key: 'esterTemperature',
    labelEn: 'Heating Mantle Temp',
    labelAr: 'درجة حرارة التسخين',
    type: 'number',
    defaultValue: 75,
    min: 20,
    max: 100,
    step: 5,
    unit: '°C',
    category: 'environmental',
    visibleIf: (p) => p.subTab === 'esterification',
  },
  saponificationActive: {
    key: 'saponificationActive',
    labelEn: 'Alkaline Saponification (+ NaOH)',
    labelAr: 'التحلل القاعدي والتصبن (+ NaOH)',
    type: 'boolean',
    defaultValue: false,
    category: 'advanced',
    visibleIf: (p) => p.subTab === 'esterification',
  },
  esterTimeMinutes: {
    key: 'esterTimeMinutes',
    labelEn: 'Reaction Duration',
    labelAr: 'زمن استمرار التفاعل',
    type: 'number',
    defaultValue: 30,
    min: 0,
    max: 60,
    step: 5,
    unit: 'min',
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'esterification',
  },
  // Mode 3: Nomenclature Quiz
  currentQuizIndex: {
    key: 'currentQuizIndex',
    labelEn: 'Quiz Question Index',
    labelAr: 'رقم السؤال',
    type: 'number',
    defaultValue: 0,
    min: 0,
    max: 7,
    step: 1,
    category: 'advanced',
    visibleIf: (p) => p.subTab === 'nomenclature',
  },
  selectedOption: {
    key: 'selectedOption',
    labelEn: 'Selected Option',
    labelAr: 'الخيار المحدد',
    type: 'number',
    defaultValue: null as any,
    category: 'advanced',
    visibleIf: (p) => p.subTab === 'nomenclature',
  },
  showExplanation: {
    key: 'showExplanation',
    labelEn: 'Show Explanation',
    labelAr: 'عرض التفسير',
    type: 'boolean',
    defaultValue: false,
    category: 'advanced',
    visibleIf: (p) => p.subTab === 'nomenclature',
  },
};

const ORGANIC_PRESETS: LabPreset<OrganicParams>[] = [
  {
    id: 'tnt_route',
    nameEn: 'TNT Industrial Synthesis',
    nameAr: 'تخليق مادة TNT الصناعي (كاربيد ➔ TNT)',
    descriptionEn: 'Calcium carbide to ethyne, benzene, toluene, and 2,4,6-trinitrotoluene explosive.',
    descriptionAr: 'من كاربيد الكالسيوم إلى الأسيتيلين، البنزين، التولوين، وثلاثي نيتروتولوين.',
    badge: 'Industrial',
    params: {
      subTab: 'roadmap',
      pathwayId: 'carbide_to_tnt',
      activeStep: 0,
      reactionProgress: 100,
      temperature: 25,
      catalystActive: true,
    },
  },
  {
    id: 'toluene_nitration_tnt',
    nameEn: 'Toluene Nitration (Ortho/Para Directing)',
    nameAr: 'نيترة التولوين والتوجيه لأورثو وبارا',
    descriptionEn: 'Methyl group activates ring (+I) directing NO₂⁺ to ortho (58%) and para (38%) positions.',
    descriptionAr: 'مجموعة الميثيل تنشط الحلقة بالحث (+I) وتوجه النيترو للموضعين أورثو (٥٨٪) وبارا (٣٨٪).',
    badge: 'Aromatic',
    params: {
      subTab: 'benzene_directing',
      benzeneSubstituent: 'CH3',
      benzeneElectrophile: 'nitration',
      showWhelandResonance: false,
    },
  },
  {
    id: 'chlorobenzene_directing',
    nameEn: 'Chlorobenzene Halogen Anomaly',
    nameAr: 'توجيه الكلوروبنزين للموضعين أورثو وبارا',
    descriptionEn: 'Chlorine deactivates by induction (-I), yet directs to ortho/para via lone-pair resonance (+M).',
    descriptionAr: 'الكلور يثبط بالحث (-I) لكنه يوجه لأورثو وبارا برنين أزواج الإلكترونات (+M).',
    badge: 'Regioselectivity',
    params: {
      subTab: 'benzene_directing',
      benzeneSubstituent: 'Cl',
      benzeneElectrophile: 'chlorination',
      showWhelandResonance: true,
    },
  },
  {
    id: 'nitrobenzene_meta',
    nameEn: 'Nitrobenzene Meta-Directing Deactivation',
    nameAr: 'نيتروبنزين وتوجيه الكواشف للموضع ميتا',
    descriptionEn: 'Nitro group powerfully pulls electrons (-M), deactivating ortho/para and directing exclusively to meta (93%).',
    descriptionAr: 'مجموعة النيترو تسحب الإلكترونات بالرنين بشدة (-M) وتوجه الكاشف القادم للموضع ميتا (٩٣٪).',
    badge: 'Deactivated',
    params: {
      subTab: 'benzene_directing',
      benzeneSubstituent: 'NO2',
      benzeneElectrophile: 'nitration',
      showWhelandResonance: false,
    },
  },
  {
    id: 'banana_oil_ester',
    nameEn: 'Banana Oil Synthesis (Isoamyl Acetate)',
    nameAr: 'تحضير أسيتات الأيزوأميل (زيت الموز العطري)',
    descriptionEn: 'Acetic acid + isopentyl alcohol with conc. H₂SO₄ produces sweet banana fragrance (>95% yield).',
    descriptionAr: 'حمض الأسيتيك مع كحول أيزوأميل في وجود H₂SO₄ لإنتاج إستر رائحة الموز بنسبة > ٩٥٪.',
    badge: 'Fragrance',
    params: {
      subTab: 'esterification',
      esterAcid: 'acetic',
      esterAlcohol: 'isopentyl',
      isCatalystH2SO4Present: true,
      esterTemperature: 85,
      saponificationActive: false,
      esterTimeMinutes: 45,
    },
  },
  {
    id: 'wintergreen_salicylate',
    nameEn: 'Methyl Salicylate (Oil of Wintergreen)',
    nameAr: 'تحضير ساليسيلات الميثيل (زيت المروخ الطبي)',
    descriptionEn: 'Salicylic acid + methanol produces minty topical pain reliever ester (oil of wintergreen).',
    descriptionAr: 'أسترة حمض الساليسيليك مع الميثانول لإنتاج دهان زيت المروخ النعناعي المسكن للآلام.',
    badge: 'Pharmaceutical',
    params: {
      subTab: 'esterification',
      esterAcid: 'salicylic',
      esterAlcohol: 'methanol',
      isCatalystH2SO4Present: true,
      esterTemperature: 75,
      saponificationActive: false,
      esterTimeMinutes: 40,
    },
  },
  {
    id: 'ester_saponification_soap',
    nameEn: 'Ethyl Acetate Alkaline Saponification (Soap)',
    nameAr: 'التحلل القاعدي للإستر والتصبن (إنتاج الصابون)',
    descriptionEn: 'Alkaline hydrolysis of ethyl acetate with sodium hydroxide yielding sodium acetate soap layer and ethanol.',
    descriptionAr: 'التحلل المائي القاعدي لإستر أسيتات الإيثيل بهيدروكسيد الصوديوم لإنتاج ملح الصوديوم (صابون) والكحول.',
    badge: 'Saponification',
    params: {
      subTab: 'esterification',
      esterAcid: 'acetic',
      esterAlcohol: 'ethanol',
      isCatalystH2SO4Present: false,
      esterTemperature: 80,
      saponificationActive: true,
      esterTimeMinutes: 30,
    },
  },
  {
    id: 'markovnikov_propene',
    nameEn: 'Markovnikov Addition on Propene',
    nameAr: 'إضافة ماركونيكوف على البروبين (CH₃-CH=CH₂ + HBr)',
    descriptionEn: 'Demonstrates secondary carbocation stabilization and exclusive formation of 2-bromopropane.',
    descriptionAr: 'توضيح استقرار الكاتيون الكربوني الثانوي وتكوين ٢- بروموبروبان بنسبة ٩٩٪.',
    badge: 'Regioselectivity',
    params: {
      subTab: 'markovnikov',
      alkeneType: 'propene',
      reagent: 'HBr',
      carbocationEnergyView: true,
      reactionProgress: 100,
      temperature: 25,
    },
  },
];

// -------------------------------------------------------------
// POE PROMPTS: 5 CURRICULUM CHALLENGES
// -------------------------------------------------------------
const ORGANIC_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_markovnikov_regio',
    titleEn: "Markovnikov's Rule & Carbocation Stability",
    titleAr: 'قاعدة ماركونيكوف واستقرار الكاتيون الكربوني',
    scenarioEn:
      'When hydrogen bromide (HBr) is added to propene (CH₃-CH=CH₂), two possible addition products can theoretically form: 2-Bromopropane or 1-Bromopropane.',
    scenarioAr:
      'عند إضافة بروميد الهيدروجين (HBr) إلى البروبين (CH₃-CH=CH₂)، هناك ناتجان محتملان نظرياً: ٢- بروموبروبان أو ١- بروموبروبان.',
    questionEn:
      'Which product forms predominantly (>99%) and what is the fundamental mechanistic reason according to the Egyptian curriculum?',
    questionAr:
      'أي الناتجين يتكون بشكل رئيسي (>٩٩٪) وما السبب العلمي الميكانيكي الدقيق وفق منهج الثانوية العامة؟',
    optionsEn: [
      '2-Bromopropane, because proton addition creates a more stable secondary (2°) carbocation.',
      '1-Bromopropane, because the terminal carbon is less sterically hindered.',
      'An equimolar 50:50 mixture of both isomers because double bond cleavage is symmetrical.',
      '1-Bromopropane, because bromine is electronegative and prefers terminal carbons.',
    ],
    optionsAr: [
      '٢- بروموبروبان، لأن إضافة البروتون إلى الكربون الطرفي الغني بالهيدروجين تكوّن كاتيون كربوني ثانوي (2°) أكثر استقراراً.',
      '١- بروموبروبان، لأن ذرة الكربون الطرفية أقل إعاقة فراغية.',
      'خليط متساوٍ ٥٠:٥٠ من المركبين لأن كسر الرابطة باي عشوائي ومتماثل.',
      '١- بروموبروبان، لأن البروم عالي السالبية ويفضل الارتباط بالطرف.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'According to Markovnikov\'s rule, electrophilic H⁺ attaches to the double-bonded carbon with more hydrogens (the "rich get richer"). Mechanistically, this produces a secondary carbocation (CH₃-CH⁺-CH₃), which is significantly more stable than the primary carbocation (CH₃-CH₂-CH₂⁺) due to hyperconjugation and inductive electron donation from two methyl groups. Nucleophilic attack by Br⁻ then rapidly affords 2-bromopropane.',
    scientificExplanationAr:
      'تنص قاعدة ماركونيكوف على أن الشق الموجب (H⁺) يضاف إلى ذرة الكربون غير المشبعة الحاملة لعدد أكبر من ذرات الهيدروجين (الغني يزداد غنى). والسبب العلمي هو تكوين الكاتيون الكربوني الثانوي الأكثر ثباتاً واستقراراً بتأثير مجموعتي الميثيل الدافعتين للإلكترونات، ثم يهاجم أيون البروميد السالب الكاتيون ليتكون ٢- بروموبروبان بنسبة تتجاوز ٩٩٪.',
  },
  {
    id: 'poe_ester_oxygen18',
    titleEn: 'Fischer Esterification Mechanism & Oxygen-18 Tracing',
    titleAr: 'ميكانيكية تفاعل القسطرة وتتبع نظير الأكسجين ١٨',
    scenarioEn:
      'Ethanoic acid (CH₃COOH) containing regular Oxygen-16 is reacted with ethanol labeled with isotopic Oxygen-18 (C₂H₅-¹⁸OH) in the presence of concentrated sulfuric acid.',
    scenarioAr:
      'تم تفاعل حمض الإيثانويك (CH₃COOH) المحتوي على أكسجين عادي ١٦ مع إيثانول معلَم بنظير الأكسجين الثقيل ١٨ (C₂H₅-¹⁸OH) في وجود حمض كبريتيك مركز.',
    questionEn:
      'Where will the isotopic Oxygen-18 atom reside in the products, and what does this prove about the mechanism of esterification?',
    questionAr:
      'أين يتواجد نظير الأكسجين ١٨ في النواتج؟ وماذا يثبت ذلك بشأن ميكانيكية تفاعل القسطرة في المنهج المصري؟',
    optionsEn: [
      'The ¹⁸O appears exclusively in the ester molecule (CH₃CO-¹⁸O-C₂H₅), proving that OH is eliminated from the acid.',
      'The ¹⁸O appears exclusively in the eliminated water molecule (H₂¹⁸O), proving that OH is eliminated from the alcohol.',
      'The ¹⁸O distributes evenly between water and ester.',
      'The ¹⁸O is converted to gaseous oxygen due to oxidation by sulfuric acid.',
    ],
    optionsAr: [
      'يظهر أكسجين ١٨ في جزيء الإستر فقط (CH₃CO-¹⁸O-C₂H₅)، مما يثبت أن مجموعة OH تخرج من الحمض الكربوكسيلي والـ H تخرج من الكحول.',
      'يظهر أكسجين ١٨ في جزيء الماء الناتج فقط (H₂¹⁸O)، مما يثبت أن مجموعة OH تخرج من الكحول.',
      'يتوزع أكسجين ١٨ بالتساوي بين الإستر وجزيء الماء.',
      'يتصاعد أكسجين ١٨ كغاز نتيجة أكسدة حمض الكبريتيك للإيثانول.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Using the Oxygen-18 isotopic tracer demonstrated that the water formed (H₂O) contains normal Oxygen-16. Therefore, the hydroxyl group (-OH) must come from the carboxylic acid, while the hydrogen atom (-H) comes from the alcohol, incorporating the labeled ¹⁸O atom permanently into the ester (CH₃CO-¹⁸OC₂H₅).',
    scientificExplanationAr:
      'أثبتت تجربة تتبع نظير الأكسجين ١٨ في المنهج المصري أن الماء الناتج يحتوي على الأكسجين العادي ١٦، مما برهن قطعياً على أن مجموعة الهيدروكسيل (-OH) تنفصل من الحمض الكربوكسيلي، بينما تنفصل ذرة الهيدروجين (-H) من الكحول، ويدخل نظير الأكسجين ١٨ في تركيب جزيء الإستر الناتج.',
  },
  {
    id: 'poe_phenol_acidity',
    titleEn: 'Acidity of Phenol (Carbolic Acid) vs Ethanol',
    titleAr: 'حمضية الفينول (حمض الكاربوليك) مقارنة بالإيثانول',
    scenarioEn:
      'Pure samples of Ethanol (C₂H₅OH) and Phenol (C₆H₅OH) are tested with metallic sodium (Na) and aqueous sodium hydroxide (NaOH).',
    scenarioAr:
      'تم اختبار عينتين نقيتين من الإيثانول (C₂H₅OH) والفينول (C₆H₅OH) مع فلز الصوديوم (Na) ومحلول هيدروكسيد الصوديوم (NaOH).',
    questionEn:
      'Why does Phenol react with BOTH metallic sodium and sodium hydroxide, whereas Ethanol only reacts with sodium metal?',
    questionAr:
      'لماذا يتفاعل الفينول مع كل من فلز الصوديوم وهيدروكسيد الصوديوم، بينما يتفاعل الإيثانول مع الصوديوم فقط ولا يتفاعل مع هيدروكسيد الصوديوم؟',
    optionsEn: [
      'The benzene ring pulls electrons by resonance, lengthening and weakening the O-H bond, making phenol acidic enough to neutralize NaOH.',
      'Ethanol is a strong acid and decomposes NaOH directly.',
      'Phenol has a higher molecular weight which accelerates nucleophilic attack.',
      'Ethanol does not contain an oxygen atom bonded to hydrogen.',
    ],
    optionsAr: [
      'حلقة البنزين ساحبة للإلكترونات بالرنين، فتزداد قطبية وطول الرابطة O-H وتضعف فيسهل انفصال البروتون H⁺، بينما مجموعة الإيثيل طاردة للإلكترونات.',
      'الإيثانول حمض قوي جداً يؤدي إلى تفكك NaOH مباشرة.',
      'الفينول ذو كتلة جزيئية أكبر تزيد من سرعة التفاعل فقط.',
      'الإيثانول لا يحتوي على رابطة هيدروجينية قابلة للتأين.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'In phenol, the aromatic benzene ring acts as an electron-withdrawing resonance attractor. This shortens the C-O bond and lengthens/weakens the O-H bond, facilitating H⁺ ionization (carbolic acid character) and stabilizing the phenoxide resonance anion. Hence, phenol reacts with strong bases like NaOH. In ethanol, the alkyl ethyl group is electron-donating (+I effect), strengthening the O-H bond, so ethanol cannot react with NaOH.',
    scientificExplanationAr:
      'في الفينول، تعمل حلقة البنزين كمجموعة ساحبة للإلكترونات بظاهرة الرنين، مما يؤدي إلى قصر وقوة الرابطة C-O وطول وضعف الرابطة O-H فيسهل تحرر أيون الهيدروجين (لذلك يسمى حمض الكاربوليك)، ويثبت أيون الفينوكسيد بالرنين فيتفاعل مع القلويات القوية كـ NaOH. أما في الإيثانول، فمجموعة الإيثيل دافعة للإلكترونات تقوي الرابطة O-H وتمنع تفاعله مع NaOH.',
  },
  {
    id: 'poe_chlorobenzene_directing',
    titleEn: 'The Halobenzene Directing Anomaly',
    titleAr: 'شذوذ هاليدات الأريل (توجيه الكلوروبنزين لأورثو وبارا)',
    scenarioEn:
      'Chlorobenzene is subjected to further electrophilic chlorination in the presence of FeCl₃ catalyst. Chlorine is an electronegative halogen that deactivates the aromatic ring.',
    scenarioAr:
      'تمت هلجنة الكلوروبنزين بالكلور في وجود عامل حفاز FeCl₃. من المعروف أن الكلور ذرة عالية السالبية الكهربية تثبط نشاط الحلقة الأروماتية.',
    questionEn:
      'Why does Chlorobenzene direct the incoming electrophile to Ortho and Para positions despite being a deactivating substituent?',
    questionAr:
      'لماذا يوجه الكلوروبنزين الكاشف القادم إلى موضعي أورثو وبارا على الرغم من أنه مجموعة مثبطة لنشاط حلقة البنزين؟',
    optionsEn: [
      'The resonance electron donation (+M) of chlorine lone pairs stabilizes ortho/para Wheland intermediates, dominating regioselectivity over its inductive withdrawal (-I).',
      'Chlorine is a giant atom that sterically blocks the meta positions completely.',
      'FeCl₃ catalyst forces all electrophiles exclusively to the para position.',
      'Chlorobenzene immediately decomposes into acetylene under reaction conditions.',
    ],
    optionsAr: [
      'لأن التأثير الرنيني الموجب (+M) لأزواج إلكترونات الكلور الحرة يثبت أيون الأرينيوم في موضعي أورثو وبارا، وهو الذي يتحكم في التوجيه متغلباً على التأثير الحثي الساحب (-I).',
      'لأن ذرة الكلور ضخمة جداً تعيق فراغياً الموضع ميتا فقط.',
      'لأن العامل الحفاز FeCl₃ يجبر التفاعل على الحدوث في الموضع بارا حصرياً.',
      'لأن الكلوروبنزين يتفكك فورياً إلى أسيتيلين في هذه الظروف.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Halogens possess competing electronic effects: strong inductive electron withdrawal (-I) lowers the overall π-electron density of the ring (making substitution slower than benzene), BUT their unshared lone pairs participate in resonance (+M) with the π-system. In ortho and para attack, an extra stable resonance form with a full octet on all atoms is formed. Thus, halogens are deactivating yet ortho/para-directing.',
    scientificExplanationAr:
      'تمتلك الهالوجينات تأثيرين متعارضين: التأثير الحثي الساحب (-I) يقلل الكثافة الإلكترونية للحلقة فتصبح أبطأ من البنزين (مثبطة)، لكن أزواج الإلكترونات الحرة للهالوجين تشارك في الرنين (+M)، مما يمنح الكاتيون الكربوني في موضعي أورثو وبارا صورة رنينية إضافية مستقرة يكتمل فيها ثماني كل ذرة. لذا توجه الهالوجينات لأورثو وبارا رغم أنها مثبطة.',
  },
  {
    id: 'poe_lechatelier_esterification',
    titleEn: 'Le Chatelier Shift in Fischer Esterification',
    titleAr: 'قاعدة لوشاتيليه ودور حمض الكبريتيك في القسطرة',
    scenarioEn:
      'An equimolar mixture of acetic acid and ethanol is reacted. Without a dehydrating agent, conversion reaches a plateau at 66.7% (2/3 mol). When concentrated sulfuric acid is added, yield rises above 95%.',
    scenarioAr:
      'تم خلط مول واحد من حمض الأسيتيك مع مول واحد من الإيثانول. في غياب العامل النازع للماء يقف التفاعل عند ٦٦.٧٪، بينما عند إضافة حمض كبريتيك مركز يرتفع الناتج إلى أكثر من ٩٥٪.',
    questionEn:
      'What is the fundamental chemical rationale for this equilibrium shift according to the Egyptian curriculum?',
    questionAr:
      'ما التفسير العلمي الكيميائي الدقيق لهذا التغير في الاتزان وفق منهج الثانوية العامة المصرية؟',
    optionsEn: [
      'Concentrated H₂SO₄ absorbs the generated water, preventing the reverse hydrolysis reaction and shifting equilibrium forward by Le Chatelier\'s principle.',
      'Sulfuric acid acts as an oxidizing agent converting ethanol directly into pure ester.',
      'Sulfuric acid completely neutralizes acetic acid preventing any ionization.',
      'The temperature of the solution rises to 500°C decomposing the water into hydrogen and oxygen.',
    ],
    optionsAr: [
      'حمض الكبريتيك المركز مادة نازعة للماء تمتص الماء الناتج فتمنع التفاعل العكسي وتزيح الاتزان في الاتجاه الطردي تطبيقاً لقاعدة لوشاتيليه.',
      'حمض الكبريتيك عامل مؤكسد يحول الإيثانول مباشرة إلى إستر تام.',
      'حمض الكبريتيك يعادل حمض الأسيتيك ويمنع تفككه كلياً.',
      'ترتفع درجة حرارة المحلول إلى ٥٠٠°س مما يؤدي إلى تفكك الماء إلى غازي الهيدروجين والأكسجين.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Fischer esterification is an intrinsically reversible reaction with equilibrium constant Kc ≈ 4. At equimolar concentrations, x²/(1-x)² = 4 yields x = 2/3 (66.7%). Concentrated H₂SO₄ has tremendous hygroscopic affinity for water: by continuously removing H₂O from the product side, the system responds according to Le Chatelier\'s principle by driving the forward condensation reaction to near completion (>95%).',
    scientificExplanationAr:
      'تفاعل القسطرة تفاعل عكوس متزن ثابت اتزانه Kc ≈ ٤. عند خلط كميات متساوية مولياً، فإن x²/(1-x)² = ٤ تعطي ناتج اتزان قدره ٢/٣ (٦٦.٧٪) فقط. ويتميز حمض الكبريتيك المركز بقدرة هائلة على انتزاع الماء، وبسحب جزيئات H₂O باستمرار من حيز التفاعل يزاح الاتزان طردياً نحو تكوين المزيد من الإستر تطبيقاً لقاعدة لوشاتيليه ليتجاوز الناتج ٩٥٪.',
  },
];

const ORGANIC_LAB_DEF: LabDefinition<OrganicParams, OrganicSimState> = {
  id: 'organic-chemistry-lab',
  subject: 'chemistry',
  chapterRef: 'Chapter 5: Organic Chemistry (الكيمياء العضوية)',
  titleEn: 'Organic Chemistry & Reaction Synthesis Workbench',
  titleAr: 'معمل الكيمياء العضوية ومسارات التخليق والتسمية النظامية',
  subtitleEn:
    'Comprehensive Synthetic Roadmaps, Markovnikov Regioselectivity, Aromatic Directing Groups & Esterification Equilibrium',
  subtitleAr:
    'المخططات التخليقية الشاملة، قاعدة ماركونيكوف، توجيه المجموعات في البنزين، واتزان القسطرة والتصبن',
  taglineEn: 'Tier-1 Organic Synthesis & Reaction Mechanism Workbench',
  taglineAr: 'المختبر العضوي التفاعلي الشامل وفق منهج الثانوية العامة',

  objectives: [
    {
      id: 'obj-roadmaps',
      textEn:
        'Master multi-step conversions from inorganic/simple precursors to high-value aromatic and aliphatic products.',
      textAr:
        'إتقان التحويلات العضوية متعددة المراحل من المركبات البسيطة إلى المنتجات الدوائية والمتفجرة والإسترات.',
      bloomLevel: 'apply',
    },
    {
      id: 'obj-markovnikov',
      textEn:
        'Analyze carbocation stability (3° > 2° > 1°) governing Markovnikov addition to asymmetric alkenes.',
      textAr:
        'تحليل استقرار الكاتيونات الكربونية الموجهة لقاعدة ماركونيكوف عند إضافة كواشف غير متماثلة.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj-benzene-directing',
      textEn:
        'Deduce electrophilic aromatic substitution regioselectivity and differentiate activating ortho/para vs deactivating meta directors.',
      textAr:
        'استنتاج التوجيه في حلقة البنزين والتمييز بين المجموعات المنشطة الموجهة لأورثو وبارا والمجموعات الساحبة الموجهة لميتا.',
      bloomLevel: 'evaluate',
    },
    {
      id: 'obj-esterification',
      textEn:
        'Quantify Fischer esterification equilibrium yield and explain the Le Chatelier shift induced by conc. H₂SO₄ vs alkaline saponification.',
      textAr:
        'حساب النسبة المئوية لاتزان القسطرة وتفسير دور حمض الكبريتيك النازع للماء ومقارنتها بالتحلل القاعدي للتصبن.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj-iupac',
      textEn:
        'Systematically deduce correct IUPAC nomenclature applying priority rules, locant sums, and alphabetical order.',
      textAr:
        'تطبيق قواعد الأيوباك لتسمية المركبات العضوية واختيار أطول سلسلة وترتيب التفرعات أبجدياً.',
      bloomLevel: 'evaluate',
    },
  ],

  safetyWarnings: [
    {
      id: 'warn-explosive-tnt',
      titleEn: 'High Explosive & Flammable Reagents',
      titleAr: 'مركبات شديدة الانفجار ومواد سريعة الاشتعال',
      messageEn:
        'TNT and picric acid are shock-sensitive high explosives. Acetylene and methane are highly flammable gases.',
      messageAr:
        'مادتا TNT وحمض البيكريك من المتفجرات الحساسة، وغازات الأسيتيلين والميثان شديدة الاشتعال.',
      severity: 'danger',
    },
    {
      id: 'warn-conc-acids',
      titleEn: 'Corrosive Nitrating & Sulfuric Acids',
      titleAr: 'أحماض كاوية وخليط النيترة',
      messageEn:
        'Concentrated HNO₃ and H₂SO₄ cause severe burns. Wear acid-resistant gloves and face shield.',
      messageAr:
        'حمض الكبريتيك وحمض النيتريك المركز كاوية للجلد وتتطلب ارتداء القفازات الواقية.',
      severity: 'warning',
    },
  ],

  keyFormulas: [
    {
      id: 'eq-markovnikov',
      labelEn: "Markovnikov's Addition Formula",
      labelAr: 'قاعدة ماركونيكوف للإضافة غير المتماثلة',
      tex: '\\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{HBr} \\to \\text{CH}_3\\text{CH(Br)CH}_3',
      descriptionEn:
        'The electrophile H⁺ attaches to the carbon with more hydrogen atoms to yield a stable secondary carbocation.',
      descriptionAr:
        'يضاف الهيدروجين إلى ذرة الكربون غير المشبعة الأكثر هيدروجيناً لتكوين الكاتيون الكربوني الثانوي الأكثر ثباتاً.',
    },
    {
      id: 'eq-benzene-directing',
      labelEn: 'Electrophilic Aromatic Nitration (Toluene)',
      labelAr: 'نيترة التولوين والتوجيه لأورثو وبارا',
      tex: '\\text{C}_6\\text{H}_5\\text{CH}_3 + \\text{HNO}_3 \\xrightarrow{\\text{conc. H}_2\\text{SO}_4} o,p\\text{-}\\text{C}_6\\text{H}_4(\\text{CH}_3)(\\text{NO}_2) + \\text{H}_2\\text{O}',
      descriptionEn:
        'Methyl substituent activates the aromatic ring and directs incoming nitronium ion to ortho and para positions.',
      descriptionAr:
        'مجموعة الميثيل تنشط الحلقة الأروماتية بالحث وتوجه أيون النيترونيوم لموقعي أورثو وبارا.',
    },
    {
      id: 'eq-meta-directing',
      labelEn: 'Deactivating Meta-Directing Substitution',
      labelAr: 'التوجيه للموضع ميتا (المجموعات الساحبة)',
      tex: '\\text{C}_6\\text{H}_5\\text{NO}_2 + \\text{HNO}_3 \\xrightarrow{\\text{conc. H}_2\\text{SO}_4 / \\Delta} m\\text{-}\\text{C}_6\\text{H}_4(\\text{NO}_2)_2 + \\text{H}_2\\text{O}',
      descriptionEn:
        'Strongly electron-withdrawing nitro group deactivates ortho and para positions, directing electrophile to meta.',
      descriptionAr:
        'مجموعة النيترو الساحبة تسحب الكثافة الإلكترونية بشدة من أورثو وبارا، فيوجه التفاعل للموضع ميتا.',
    },
    {
      id: 'eq-esterification',
      labelEn: 'Fischer Esterification Equilibrium',
      labelAr: 'اتزان تفاعل القسطرة العضوي',
      tex: '\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{\\text{conc. H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}',
      descriptionEn:
        'Reversible condensation between carboxylic acid and alcohol using conc. H₂SO₄ as dehydrating agent.',
      descriptionAr:
        'تفاعل تكاثف عكوس بين حمض كربوكسيلي وكحول في وجود حمض كبريتيك مركز نازع للماء لمنع التفاعل العكسي.',
    },
    {
      id: 'eq-saponification',
      labelEn: 'Alkaline Ester Hydrolysis (Saponification)',
      labelAr: 'التحلل المائي القاعدي للإستر (التصبن)',
      tex: '\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{NaOH} \\xrightarrow{\\Delta} \\text{CH}_3\\text{COONa} + \\text{C}_2\\text{H}_5\\text{OH}',
      descriptionEn:
        'Irreversible alkaline hydrolysis of esters yielding a carboxylate sodium salt (soap) and regenerating alcohol.',
      descriptionAr:
        'تحلل مائي قاعدي غير عكوس للإستر يعطي ملح الصوديوم للحمض الكربوكسيلي (الصابون) ويعيد تكوين الكحول.',
    },
    {
      id: 'eq-trimerization',
      labelEn: 'Cyclic Trimerization of Ethyne',
      labelAr: 'البلمرة الثلاثية الحلقية للأسيتيلين',
      tex: '3\\text{C}_2\\text{H}_2 \\xrightarrow{\\text{Ni / Red heat}} \\text{C}_6\\text{H}_6',
      descriptionEn:
        'Trimerization of three ethyne molecules into an aromatic benzene ring in a red-hot nickel tube.',
      descriptionAr:
        'بلمرة حلقية لثلاثة جزيئات من الإيثاين لتكوين حلقة البنزين العطري في أنبوبة نيكل مسخنة للاحمرار.',
    },
  ],

  defaultParams: INITIAL_PARAMS,
  paramSchema: ORGANIC_PARAM_SCHEMA,
  presets: ORGANIC_PRESETS,
  poePrompts: ORGANIC_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Reaction Coordinate / Time',
    xLabelAr: 'مسار التفاعل / الزمن',
    xUnit: 'Step/min',
    yLabelEn: 'Potential Energy / Conversion',
    yLabelAr: 'طاقة الوضع / نسبة التحول',
    yUnit: 'kJ/mol / %',
  },
};

// -------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------
export const OrganicChemistryLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const lab = useVirtualLab<OrganicParams, OrganicSimState>({
    definition: ORGANIC_LAB_DEF,
  });

  const { params, updateParam, updateParams, resetParams } = lab;

  // Current active pathway and step
  const activePathway = useMemo(() => {
    return ORGANIC_PATHWAYS.find((p) => p.id === params.pathwayId) || ORGANIC_PATHWAYS[0];
  }, [params.pathwayId]);

  const activeStepData = useMemo(() => {
    const stepIdx = Math.min(params.activeStep, activePathway.steps.length - 1);
    return activePathway.steps[stepIdx] || activePathway.steps[0];
  }, [activePathway, params.activeStep]);

  // Directing substituent & electrophile info
  const activeSubstituent = useMemo(() => {
    return BENZENE_SUBSTITUENTS[params.benzeneSubstituent] || BENZENE_SUBSTITUENTS.CH3;
  }, [params.benzeneSubstituent]);

  const activeElectrophile = useMemo(() => {
    return BENZENE_ELECTROPHILES[params.benzeneElectrophile] || BENZENE_ELECTROPHILES.nitration;
  }, [params.benzeneElectrophile]);

  const benzeneDirectingRatios = useMemo(() => {
    return getBenzeneDirectingRatios(params.benzeneSubstituent, params.benzeneElectrophile);
  }, [params.benzeneSubstituent, params.benzeneElectrophile]);

  // Ester product info
  const esterProduct = useMemo(() => {
    return getEsterDetails(params.esterAcid, params.esterAlcohol);
  }, [params.esterAcid, params.esterAlcohol]);

  // Derived simulation metrics
  const simState = useMemo<OrganicSimState>(() => {
    if (params.subTab === 'roadmap') {
      return {
        boilingPointC: activeStepData.boilingPointC,
        irPeakWavenumber: activeStepData.primaryIrPeak,
        irPeakLabelEn: activeStepData.irLabelEn,
        irPeakLabelAr: activeStepData.irLabelAr,
        gcRetentionTimeMin: parseFloat(((Math.abs(activeStepData.boilingPointC) + 120) / 45).toFixed(2)),
        reactionYieldPercent: Math.min(100, Math.round(params.reactionProgress * 0.94)),
        activationEnergyEa: 65,
        reactionEnthalpyDeltaH: -45,
        isMajorPathway: true,
        orthoYieldPercent: 0,
        paraYieldPercent: 0,
        metaYieldPercent: 0,
        ringActivationTypeEn: 'N/A',
        ringActivationTypeAr: 'غير متاح',
        directingRuleEn: 'N/A',
        directingRuleAr: 'غير متاح',
        esterEquilibriumYield: 0,
        esterFragranceEn: 'N/A',
        esterFragranceAr: 'غير متاح',
        esterFormula: 'N/A',
        esterIupacNameEn: 'N/A',
        esterIupacNameAr: 'غير متاح',
        esterKcValue: 0,
      };
    }

    if (params.subTab === 'markovnikov') {
      const isTertiary = params.alkeneType === 'methylpropene';
      const bp =
        params.alkeneType === 'propene'
          ? params.reagent === 'HBr'
            ? 59.4
            : params.reagent === 'HCl'
            ? 35.7
            : 82.6
          : params.alkeneType === 'methylpropene'
          ? params.reagent === 'HBr'
            ? 73.3
            : params.reagent === 'HCl'
            ? 51.0
            : 82.4
          : params.reagent === 'HBr'
          ? 91.2
          : params.reagent === 'HCl'
          ? 68.3
          : 99.5;

      const irWn = params.reagent === 'H2O' ? 3350 : params.reagent === 'HBr' ? 650 : 720;
      const irLabelEn = params.reagent === 'H2O' ? 'Alcoholic O-H (3350 cm⁻¹)' : 'C-Halogen stretch';
      const irLabelAr = params.reagent === 'H2O' ? 'اهتزاز O-H الكحولي (٣٣٥٠ سم⁻¹)' : 'اهتزاز رابطة C-Halogen';

      return {
        boilingPointC: bp,
        irPeakWavenumber: irWn,
        irPeakLabelEn: irLabelEn,
        irPeakLabelAr: irLabelAr,
        gcRetentionTimeMin: parseFloat(((bp + 80) / 38).toFixed(2)),
        reactionYieldPercent: 99,
        activationEnergyEa: isTertiary ? 38 : 46,
        reactionEnthalpyDeltaH: -82,
        isMajorPathway: true,
        orthoYieldPercent: 0,
        paraYieldPercent: 0,
        metaYieldPercent: 0,
        ringActivationTypeEn: 'N/A',
        ringActivationTypeAr: 'غير متاح',
        directingRuleEn: 'N/A',
        directingRuleAr: 'غير متاح',
        esterEquilibriumYield: 0,
        esterFragranceEn: 'N/A',
        esterFragranceAr: 'غير متاح',
        esterFormula: 'N/A',
        esterIupacNameEn: 'N/A',
        esterIupacNameAr: 'غير متاح',
        esterKcValue: 0,
      };
    }

    if (params.subTab === 'benzene_directing') {
      const isActivating =
        activeSubstituent.activationType === 'activating_strong' ||
        activeSubstituent.activationType === 'activating_weak';
      const isDeactivatingMeta = activeSubstituent.activationType === 'deactivating_meta';

      const baseEa = isActivating ? 32 : isDeactivatingMeta ? 96 : 68;
      const bp =
        params.benzeneSubstituent === 'CH3'
          ? 225
          : params.benzeneSubstituent === 'OH'
          ? 216
          : params.benzeneSubstituent === 'NO2'
          ? 302
          : params.benzeneSubstituent === 'Cl'
          ? 178
          : 245;

      const irPeak =
        params.benzeneElectrophile === 'nitration'
          ? 1530
          : params.benzeneElectrophile === 'chlorination'
          ? 745
          : params.benzeneElectrophile === 'alkylation'
          ? 1495
          : 1180;

      return {
        boilingPointC: bp,
        irPeakWavenumber: irPeak,
        irPeakLabelEn: `${activeElectrophile.activeSpeciesEn} band (${irPeak} cm⁻¹)`,
        irPeakLabelAr: `حزمة اهتزاز ${activeElectrophile.activeSpeciesAr} (${irPeak} سم⁻¹)`,
        gcRetentionTimeMin: 5.4,
        reactionYieldPercent: isActivating ? 96 : isDeactivatingMeta ? 78 : 88,
        activationEnergyEa: baseEa,
        reactionEnthalpyDeltaH: -54,
        isMajorPathway: true,
        orthoYieldPercent: benzeneDirectingRatios.ortho,
        paraYieldPercent: benzeneDirectingRatios.para,
        metaYieldPercent: benzeneDirectingRatios.meta,
        ringActivationTypeEn: activeSubstituent.activationType,
        ringActivationTypeAr:
          activeSubstituent.activationType === 'activating_strong'
            ? 'منشط قوي (+M)'
            : activeSubstituent.activationType === 'activating_weak'
            ? 'منشط ضعيف (+I)'
            : activeSubstituent.activationType === 'deactivating_ortho_para'
            ? 'مثبط بالحث وموجه لأورثو وبارا بالرنين'
            : 'مثبط قوي وموجه للموضع ميتا (-M)',
        directingRuleEn:
          activeSubstituent.directingClass === 'ortho_para'
            ? 'Directs to Ortho (pos 2,6) and Para (pos 4)'
            : 'Directs to Meta (pos 3,5)',
        directingRuleAr:
          activeSubstituent.directingClass === 'ortho_para'
            ? 'يوجه للموضعين أورثو (٢، ٦) وبارا (٤)'
            : 'يوجه للموضع ميتا (٣، ٥)',
        esterEquilibriumYield: 0,
        esterFragranceEn: 'Aromatic Nitro/Halo Derivative',
        esterFragranceAr: 'مشتق أروماتي',
        esterFormula: 'N/A',
        esterIupacNameEn: 'N/A',
        esterIupacNameAr: 'غير متاح',
        esterKcValue: 0,
      };
    }

    if (params.subTab === 'esterification') {
      let eqYield = 66.7; // Reversible Kc = 4 equimolar limit
      if (params.saponificationActive) {
        eqYield = 99.5; // Irreversible base saponification
      } else if (params.isCatalystH2SO4Present) {
        eqYield = 96.0; // Pushed by dehydrating agent
      }

      // Progress over time (0 - 60 min)
      const timeFactor = 1 - Math.exp(-params.esterTimeMinutes / 12);
      const actualConversion = Math.round(eqYield * timeFactor);

      return {
        boilingPointC: esterProduct.boilingPointC,
        irPeakWavenumber: esterProduct.primaryIrPeak,
        irPeakLabelEn: esterProduct.irBandLabelEn,
        irPeakLabelAr: esterProduct.irBandLabelAr,
        gcRetentionTimeMin: parseFloat(((esterProduct.boilingPointC + 60) / 42).toFixed(2)),
        reactionYieldPercent: actualConversion,
        activationEnergyEa: params.isCatalystH2SO4Present ? 62 : 108,
        reactionEnthalpyDeltaH: -12,
        isMajorPathway: true,
        orthoYieldPercent: 0,
        paraYieldPercent: 0,
        metaYieldPercent: 0,
        ringActivationTypeEn: 'N/A',
        ringActivationTypeAr: 'غير متاح',
        directingRuleEn: 'N/A',
        directingRuleAr: 'غير متاح',
        esterEquilibriumYield: eqYield,
        esterFragranceEn: esterProduct.fragranceEn,
        esterFragranceAr: esterProduct.fragranceAr,
        esterFormula: esterProduct.esterFormula,
        esterIupacNameEn: esterProduct.iupacNameEn,
        esterIupacNameAr: esterProduct.iupacNameAr,
        esterKcValue: 4.0,
      };
    }

    // Nomenclature quiz mode
    return {
      boilingPointC: 65,
      irPeakWavenumber: 1715,
      irPeakLabelEn: 'Characteristic IUPAC Band',
      irPeakLabelAr: 'حزمة الامتصاص التشخيصية',
      gcRetentionTimeMin: 3.5,
      reactionYieldPercent: 100,
      activationEnergyEa: 50,
      reactionEnthalpyDeltaH: -25,
      isMajorPathway: true,
      orthoYieldPercent: 0,
      paraYieldPercent: 0,
      metaYieldPercent: 0,
      ringActivationTypeEn: 'N/A',
      ringActivationTypeAr: 'غير متاح',
      directingRuleEn: 'N/A',
      directingRuleAr: 'غير متاح',
      esterEquilibriumYield: 0,
      esterFragranceEn: 'N/A',
      esterFragranceAr: 'غير متاح',
      esterFormula: 'N/A',
      esterIupacNameEn: 'N/A',
      esterIupacNameAr: 'غير متاح',
      esterKcValue: 0,
    };
  }, [
    params.subTab,
    activeStepData,
    params.alkeneType,
    params.reagent,
    params.reactionProgress,
    params.benzeneSubstituent,
    params.benzeneElectrophile,
    activeSubstituent,
    activeElectrophile,
    benzeneDirectingRatios,
    params.esterAcid,
    params.esterAlcohol,
    esterProduct,
    params.isCatalystH2SO4Present,
    params.saponificationActive,
    params.esterTimeMinutes,
  ]);

  // Telemetry metrics
  const telemetry = useMemo<LabTelemetryMetric[]>(() => {
    if (params.subTab === 'benzene_directing') {
      return [
        {
          id: 'orthoYield',
          labelEn: 'Ortho Isomer Yield',
          labelAr: 'نسبة ناتج أورثو',
          value: simState.orthoYieldPercent,
          unit: '%',
          precision: 0,
          status: simState.orthoYieldPercent > 40 ? 'optimal' : 'normal',
        },
        {
          id: 'paraYield',
          labelEn: 'Para Isomer Yield',
          labelAr: 'نسبة ناتج بارا',
          value: simState.paraYieldPercent,
          unit: '%',
          precision: 0,
          status: simState.paraYieldPercent > 30 ? 'optimal' : 'normal',
        },
        {
          id: 'metaYield',
          labelEn: 'Meta Isomer Yield',
          labelAr: 'نسبة ناتج ميتا',
          value: simState.metaYieldPercent,
          unit: '%',
          precision: 0,
          status: simState.metaYieldPercent > 50 ? 'optimal' : 'normal',
        },
        {
          id: 'activationEa',
          labelEn: 'Activation Barrier (Ea)',
          labelAr: 'طاقة التنشيط (Ea)',
          value: simState.activationEnergyEa,
          unit: 'kJ/mol',
          precision: 0,
          status: simState.activationEnergyEa < 50 ? 'optimal' : 'warning',
        },
      ];
    }

    if (params.subTab === 'esterification') {
      return [
        {
          id: 'esterYield',
          labelEn: 'Ester Conversion',
          labelAr: 'نسبة تحول الإستر',
          value: simState.reactionYieldPercent,
          unit: '%',
          precision: 0,
          status: simState.reactionYieldPercent > 80 ? 'optimal' : 'normal',
        },
        {
          id: 'boilingPoint',
          labelEn: 'Ester Boiling Point',
          labelAr: 'درجة غليان الإستر',
          value: simState.boilingPointC,
          unit: '°C',
          precision: 1,
        },
        {
          id: 'irPeak',
          labelEn: 'Ester C=O Peak',
          labelAr: 'قمة C=O للإستر',
          value: simState.irPeakWavenumber,
          unit: 'cm⁻¹',
          precision: 0,
        },
        {
          id: 'reactionTime',
          labelEn: 'Reaction Duration',
          labelAr: 'زمن التفاعل',
          value: params.esterTimeMinutes,
          unit: 'min',
          precision: 0,
        },
      ];
    }

    return [
      {
        id: 'boilingPoint',
        labelEn: 'Boiling Point (Tb)',
        labelAr: 'درجة الغليان (Tb)',
        value: simState.boilingPointC,
        unit: '°C',
        precision: 1,
      },
      {
        id: 'irPeak',
        labelEn: 'Diagnostic IR Peak',
        labelAr: 'قمة امتصاص IR',
        value: simState.irPeakWavenumber,
        unit: 'cm⁻¹',
        precision: 0,
      },
      {
        id: 'gcRetention',
        labelEn: 'GC Retention Time',
        labelAr: 'زمن الاستبقاء GC',
        value: simState.gcRetentionTimeMin,
        unit: 'min',
        precision: 2,
      },
      {
        id: 'yield',
        labelEn: 'Theoretical Yield',
        labelAr: 'النسبة المئوية للناتج',
        value: simState.reactionYieldPercent,
        unit: '%',
        precision: 0,
      },
    ];
  }, [simState, params.subTab, params.esterTimeMinutes]);

  // Multimeter reading for digital thermometer / physical properties
  const multimeterReading: DMMReading = useMemo(
    () => ({
      mode: 'DCV',
      value: simState.boilingPointC,
      displayString: `${simState.boilingPointC.toFixed(1)} °C`,
      secondaryString: `IR: ${simState.irPeakWavenumber} cm⁻¹ | GC: ${simState.gcRetentionTimeMin} min`,
      unit: '°C',
      voltageDC: simState.boilingPointC,
      voltageAC: 0.0,
      currentDC: simState.gcRetentionTimeMin,
      resistance: simState.irPeakWavenumber,
      continuityBeep: false,
      isOverload: false,
    }),
    [simState]
  );

  // Dual-trace oscilloscope
  const oscilloscopeCh1: WaveformSignal = useMemo(
    () => ({
      id: 'ch1',
      label: isArabic
        ? `طيف امتصاص IR (${simState.irPeakWavenumber} سم⁻¹)`
        : `IR Absorbance (${simState.irPeakWavenumber} cm⁻¹)`,
      color: '#38bdf8',
      amplitude: 3.5,
      frequency: 2.0,
      phase: 0,
      phaseDeg: 0,
      type: 'triangle',
    }),
    [simState.irPeakWavenumber, isArabic]
  );

  const oscilloscopeCh2: WaveformSignal = useMemo(
    () => ({
      id: 'ch2',
      label: isArabic
        ? `منحنى طاقة التنشيط (Ea = ${simState.activationEnergyEa} kJ/mol)`
        : `Potential Energy (Ea = ${simState.activationEnergyEa} kJ/mol)`,
      color: '#f59e0b',
      amplitude: 2.5,
      frequency: 1.0,
      phase: 0,
      phaseDeg: 0,
      type: 'sine',
    }),
    [simState.activationEnergyEa, isArabic]
  );

  // -------------------------------------------------------------
  // CANVAS 2D RENDERING ENGINE (60 - 120 FPS HIGH DPI)
  // -------------------------------------------------------------
  const renderSimulation = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _viewport: LabViewportState,
      _dpr: number,
      time?: number
    ) => {
      // Clear viewport
      ctx.clearRect(0, 0, width, height);
      const t = (time ?? performance.now()) * 0.001;

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

      // Subtle molecular grid pattern
      ctx.strokeStyle = isLight ? 'rgba(100, 116, 139, 0.12)' : 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // ---------------------------------------------------------
      // RENDER MODE 1: SYNTHESIS ROADMAP CANVAS
      // ---------------------------------------------------------
      if (params.subTab === 'roadmap') {
        const centerX = width / 2;
        const centerY = height / 2;

        const cardW = Math.min(width - 60, 680);
        const cardH = Math.min(height - 60, 320);
        const cardX = centerX - cardW / 2;
        const cardY = centerY - cardH / 2;

        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(15, 23, 42, 0.85)';
        ctx.strokeStyle = isLight ? 'rgba(203, 213, 225, 0.8)' : 'rgba(51, 65, 85, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(cardX, cardY, cardW, cardH, 16);
        ctx.fill();
        ctx.stroke();

        // Stage badge
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(
          isArabic
            ? `المرحلة ${activeStepData.stepNumber} من ${activePathway.steps.length}: ${activeStepData.reactionTypeAr}`
            : `Step ${activeStepData.stepNumber} of ${activePathway.steps.length}: ${activeStepData.reactionTypeEn}`,
          cardX + 24,
          cardY + 36
        );

        const reactantBoxX = cardX + 30;
        const reactantBoxY = cardY + 65;
        const reactantBoxW = (cardW - 140) / 2;
        const reactantBoxH = cardH - 120;

        const productBoxX = cardX + cardW - reactantBoxW - 30;
        const productBoxY = reactantBoxY;

        // Reactant Box
        ctx.fillStyle = isLight ? '#f1f5f9' : '#1e293b';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.beginPath();
        ctx.roundRect(reactantBoxX, reactantBoxY, reactantBoxW, reactantBoxH, 12);
        ctx.fill();
        ctx.stroke();

        // 3D Glass Reaction Vessel (Precursor)
        const flaskW = 54;
        const flaskH = 74;
        const flaskX = reactantBoxX + 16;
        const flaskY = reactantBoxY + reactantBoxH - flaskH - 12;
        drawRealisticGlassVessel(ctx, flaskX, flaskY, flaskW, flaskH, {
          liquidColor: 'rgba(56, 189, 248, 0.35)',
          liquidLevelPercent: 62 + Math.sin(t * 3) * 3,
          showMeniscus: true,
          wallThickness: 2.5,
        });

        // Boiling micro-bubbles in reactant flask
        for (let b = 0; b < 4; b++) {
          const bFrac = (t * 1.5 + b * 0.25) % 1;
          const bx = flaskX + 14 + ((b * 9) % (flaskW - 28));
          const by = flaskY + flaskH - 10 - bFrac * (flaskH * 0.45);
          drawGlowingParticle(ctx, bx, by, 1.8, 'rgba(255, 255, 255, 0.75)', 4);
        }

        // Product Box
        ctx.fillStyle = isLight ? '#ecfdf5' : 'rgba(6, 78, 59, 0.25)';
        ctx.strokeStyle = '#10b981';
        ctx.beginPath();
        ctx.roundRect(productBoxX, productBoxY, reactantBoxW, reactantBoxH, 12);
        ctx.fill();
        ctx.stroke();

        // 3D Glass Product Flask
        const pFlaskX = productBoxX + reactantBoxW - flaskW - 16;
        const pFlaskY = productBoxY + reactantBoxH - flaskH - 12;
        drawRealisticGlassVessel(ctx, pFlaskX, pFlaskY, flaskW, flaskH, {
          liquidColor: 'rgba(16, 185, 129, 0.4)',
          liquidLevelPercent: 65 + Math.cos(t * 2.5) * 2,
          showMeniscus: true,
          wallThickness: 2.5,
        });

        // Labels
        ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic ? 'المادة البادئة / المتفاعلات' : 'Reactant Precursor',
          reactantBoxX + reactantBoxW / 2 + 18,
          reactantBoxY + 24
        );

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = '900 18px "JetBrains Mono", monospace';
        const startFormula =
          activeStepData.stepNumber === 1
            ? activePathway.id === 'carbide_to_tnt'
              ? 'CaC₂'
              : activePathway.id === 'methane_to_ester'
              ? 'CH₄'
              : 'C₂H₅OH'
            : activePathway.steps[activeStepData.stepNumber - 2].productFormula;
        ctx.fillText(startFormula, reactantBoxX + reactantBoxW / 2 + 18, reactantBoxY + 52);

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillText(
          isArabic ? 'المركب الناتج في هذه المرحلة' : 'Stage Resulting Product',
          productBoxX + reactantBoxW / 2 - 18,
          productBoxY + 24
        );

        ctx.fillStyle = '#38bdf8';
        ctx.font = '900 20px "JetBrains Mono", monospace';
        ctx.fillText(activeStepData.productFormula, productBoxX + reactantBoxW / 2 - 18, productBoxY + 52);

        ctx.fillStyle = isLight ? '#334155' : '#cbd5e1';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.fillText(
          isArabic ? activeStepData.productNameAr : activeStepData.productNameEn,
          productBoxX + reactantBoxW / 2 - 18,
          productBoxY + 76
        );

        // Arrow and beam
        const arrowStartX = reactantBoxX + reactantBoxW + 12;
        const arrowEndX = productBoxX - 12;
        const arrowY = reactantBoxY + reactantBoxH / 2;

        drawVolumetricBeam(ctx, arrowStartX, arrowY, arrowEndX, arrowY, '#10b981', 2, 8, t * 2);

        // Streaming particles
        for (let i = 0; i < 6; i++) {
          const pFrac = (t * 1.8 + i * 0.166) % 1;
          const px = arrowStartX + pFrac * (arrowEndX - arrowStartX);
          const py = arrowY + Math.sin(i * 2 + t * 4) * 3;
          drawGlowingParticle(ctx, px, py, 2.8, '#34d399', 6);
        }

        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.moveTo(arrowEndX, arrowY);
        ctx.lineTo(arrowEndX - 10, arrowY - 6);
        ctx.lineTo(arrowEndX - 10, arrowY + 6);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        const reagentLabel = isArabic ? activeStepData.reagentAr : activeStepData.reagentEn;
        ctx.fillText(reagentLabel, (arrowStartX + arrowEndX) / 2, arrowY - 14);

        ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
        ctx.font = '10px Inter, sans-serif';
        const conditionsLabel = isArabic ? activeStepData.conditionsAr : activeStepData.conditionsEn;
        ctx.fillText(
          conditionsLabel.substring(0, 36) + (conditionsLabel.length > 36 ? '...' : ''),
          (arrowStartX + arrowEndX) / 2,
          arrowY + 20
        );

        ctx.fillStyle = isLight ? '#0f172a' : '#f1f5f9';
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(
          `[Tb = ${activeStepData.boilingPointC}°C]  |  [IR = ${activeStepData.primaryIrPeak} cm⁻¹: ${
            isArabic ? activeStepData.irLabelAr : activeStepData.irLabelEn
          }]`,
          centerX,
          cardY + cardH - 18
        );
      }

      // ---------------------------------------------------------
      // RENDER MODE 2: MARKOVNIKOV MECHANISM & ENERGY DIAGRAM
      // ---------------------------------------------------------
      else if (params.subTab === 'markovnikov') {
        const isTertiary = params.alkeneType === 'methylpropene';

        if (params.carbocationEnergyView) {
          const marginL = 80;
          const marginR = width - 60;
          const marginB = height - 60;
          const marginT = 70;

          ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(marginL, marginT);
          ctx.lineTo(marginL, marginB);
          ctx.lineTo(marginR, marginB);
          ctx.stroke();

          ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
          ctx.font = 'bold 11px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(
            isArabic ? 'مسار التفاعل (Reaction Coordinate) ➔' : 'Reaction Coordinate ➔',
            (marginL + marginR) / 2,
            marginB + 35
          );

          ctx.save();
          ctx.translate(marginL - 40, (marginT + marginB) / 2);
          ctx.rotate(-Math.PI / 2);
          ctx.fillText(isArabic ? 'طاقة الوضع (kJ/mol)' : 'Potential Energy (kJ/mol)', 0, 0);
          ctx.restore();

          const rY = marginB - 60;
          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 12px "JetBrains Mono", monospace';
          ctx.textAlign = 'left';
          ctx.fillText(
            params.alkeneType === 'propene' ? 'CH₃-CH=CH₂ + HX' : '(CH₃)₂C=CH₂ + HX',
            marginL + 15,
            rY - 10
          );

          const majorPeakY = marginT + (isTertiary ? 45 : 70);
          const majorValleyY = majorPeakY + 35;
          const majorProductY = rY + 40;

          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(marginL + 20, rY);
          ctx.bezierCurveTo(marginL + 120, rY, marginL + 160, majorPeakY, marginL + 220, majorPeakY);
          ctx.bezierCurveTo(marginL + 260, majorPeakY, marginL + 280, majorValleyY, marginL + 330, majorValleyY);
          ctx.bezierCurveTo(marginL + 370, majorValleyY, marginL + 400, majorPeakY + 20, marginL + 450, majorPeakY + 20);
          ctx.bezierCurveTo(marginL + 480, majorPeakY + 20, marginL + 520, majorProductY, marginR - 20, majorProductY);
          ctx.stroke();

          const curveProg = (t * 0.4) % 1;
          const curX = marginL + 20 + curveProg * (marginR - 40 - marginL);
          let curY = rY;
          if (curveProg < 0.35) {
            const f = curveProg / 0.35;
            curY = rY - Math.sin(f * Math.PI * 0.5) * (rY - majorPeakY);
          } else if (curveProg < 0.6) {
            curY = majorValleyY;
          } else {
            const f = (curveProg - 0.6) / 0.4;
            curY = majorValleyY + f * (majorProductY - majorValleyY);
          }
          drawGlowingParticle(ctx, curX, curY, 6, '#34d399', 8);

          const minorPeakY = marginT + 15;
          const minorValleyY = minorPeakY + 30;
          const minorProductY = majorProductY + 15;

          ctx.strokeStyle = '#f43f5e';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(marginL + 20, rY);
          ctx.bezierCurveTo(marginL + 120, rY, marginL + 160, minorPeakY, marginL + 220, minorPeakY);
          ctx.bezierCurveTo(marginL + 260, minorPeakY, marginL + 280, minorValleyY, marginL + 330, minorValleyY);
          ctx.bezierCurveTo(marginL + 370, minorValleyY, marginL + 400, minorPeakY + 20, marginL + 450, minorPeakY + 20);
          ctx.bezierCurveTo(marginL + 480, minorPeakY + 20, marginL + 520, minorProductY, marginR - 20, minorProductY);
          ctx.stroke();
          ctx.setLineDash([]);

          drawGlowingParticle(ctx, marginL + 190, majorPeakY, 7, '#10b981', 8);
          drawGlowingParticle(ctx, marginL + 190, minorPeakY, 6, '#f43f5e', 8);

          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 11px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(
            isArabic
              ? `الناتج الرئيسي (>٩٩٪ ماركونيكوف) - كاتيون ${isTertiary ? 'ثالثي' : 'ثانوي'} ثابت`
              : `Major (>99% Markovnikov) - Stable ${isTertiary ? '3°' : '2°'} Carbocation`,
            marginL + 330,
            majorValleyY + 22
          );

          ctx.fillStyle = '#f43f5e';
          ctx.fillText(
            isArabic
              ? 'الناتج غير المتكون (<١٪) - كاتيون أولي (1°) غير مستقر'
              : 'Anti-Markovnikov (<1%) - Unstable 1° Carbocation',
            marginL + 330,
            minorValleyY - 10
          );

          ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
          ctx.font = 'bold 11px Inter, sans-serif';
          ctx.textAlign = 'right';
          ctx.fillText(
            isArabic
              ? `طاقة التنشيط الرئيسية Ea = ${simState.activationEnergyEa} kJ/mol`
              : `Major Activation Barrier Ea = ${simState.activationEnergyEa} kJ/mol`,
            marginR - 10,
            marginT + 20
          );
        } else {
          const centerX = width / 2;
          const centerY = height / 2;

          ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
          ctx.font = 'bold 14px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(
            isArabic
              ? 'ميكانيكية الإضافة الموجهة: هجوم البروتين H⁺ وتكوين الكاتيون المستقر'
              : 'Regioselective Mechanism: Electrophilic H⁺ Attack & Stable Carbocation',
            centerX,
            centerY - 100
          );

          ctx.fillStyle = isLight ? '#f8fafc' : '#1e293b';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(centerX - 190, centerY - 60, 380, 120, 16);
          ctx.fill();
          ctx.stroke();

          const drawAtomSphere = (x: number, y: number, r: number, baseColor: string) => {
            const radGrad = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.1, x, y, r);
            radGrad.addColorStop(0, '#ffffff');
            radGrad.addColorStop(0.3, baseColor);
            radGrad.addColorStop(1, '#0f172a');
            ctx.fillStyle = radGrad;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
          };

          const c1X = centerX - 40;
          const c2X = centerX + 40;
          const bondY = centerY - 10;

          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.moveTo(c1X + 16, bondY - 5);
          ctx.lineTo(c2X - 16, bondY - 5);
          ctx.moveTo(c1X + 16, bondY + 5);
          ctx.lineTo(c2X - 16, bondY + 5);
          ctx.stroke();

          const piGlow = 0.3 + 0.2 * Math.sin(t * 6);
          ctx.fillStyle = `rgba(56, 189, 248, ${piGlow})`;
          ctx.beginPath();
          ctx.ellipse((c1X + c2X) / 2, bondY, 28, 16, 0, 0, Math.PI * 2);
          ctx.fill();

          drawAtomSphere(c1X, bondY, 18, '#475569');
          drawAtomSphere(c2X, bondY, 18, '#475569');

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 12px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('C', c1X, bondY + 4);
          ctx.fillText('C', c2X, bondY + 4);

          const hX = c2X + 15 + Math.sin(t * 2) * 5;
          const hY = bondY - 45;
          drawAtomSphere(hX, hY, 12, '#38bdf8');

          ctx.fillStyle = '#0f172a';
          ctx.font = 'bold 10px sans-serif';
          ctx.fillText('H⁺', hX, hY + 3.5);

          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2.5;
          ctx.setLineDash([4, 3]);
          ctx.lineDashOffset = -t * 20;
          ctx.beginPath();
          ctx.moveTo((c1X + c2X) / 2, bondY - 14);
          ctx.quadraticCurveTo(c2X, bondY - 35, hX - 6, hY + 6);
          ctx.stroke();
          ctx.setLineDash([]);

          const nucX = c1X - 35;
          const nucY = bondY + 35;
          drawAtomSphere(nucX, nucY, 14, '#ef4444');
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 10px sans-serif';
          ctx.fillText(params.reagent === 'HBr' ? 'Br⁻' : params.reagent === 'HCl' ? 'Cl⁻' : 'OH⁻', nucX, nucY + 3.5);

          drawGlowingParticle(ctx, c1X, bondY - 24, 10, 'rgba(234, 179, 8, 0.9)', 8);
          ctx.fillStyle = '#eab308';
          ctx.font = '900 13px sans-serif';
          ctx.fillText('⊕', c1X, bondY - 20);

          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 12px Inter, sans-serif';
          ctx.fillText(
            isArabic
              ? '➔ يتصل H⁺ بذرة الكربون الطرفية CH₂ (الأغنى بالهيدروجين)'
              : '➔ H⁺ protonates terminal =CH₂ (bearing more hydrogens)',
            centerX,
            centerY + 85
          );

          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 11px Inter, sans-serif';
          ctx.fillText(
            isArabic
              ? `➔ يتكون كاتيون كربوني ${isTertiary ? 'ثالثي' : 'ثانوي'} ثابت يتحد مع أيون الكاشف السالب (${params.reagent === 'HBr' ? 'Br⁻' : params.reagent === 'HCl' ? 'Cl⁻' : 'OH⁻'})`
              : `➔ Generates stable ${isTertiary ? '3°' : '2°'} carbocation captured by nucleophile (${params.reagent})`,
            centerX,
            centerY + 110
          );
        }
      }

      // ---------------------------------------------------------
      // RENDER MODE 4: BENZENE DIRECTING GROUPS
      // ---------------------------------------------------------
      else if (params.subTab === 'benzene_directing') {
        const ringCenterX = width < 768 ? width / 2 : width * 0.38;
        const ringCenterY = height / 2 + 15;
        const R = 72; // Hexagon radius

        // Ring vertices (0: top C1, 1: C2 ortho, 2: C3 meta, 3: C4 para, 4: C5 meta, 5: C6 ortho)
        const vertices: { x: number; y: number; label: string; posName: string; density: number }[] = [];
        const isOrthoPara = activeSubstituent.directingClass === 'ortho_para';

        for (let i = 0; i < 6; i++) {
          const angle = -Math.PI / 2 + (i * Math.PI) / 3;
          const vx = ringCenterX + R * Math.cos(angle);
          const vy = ringCenterY + R * Math.sin(angle);
          let posName = 'C1';
          let density = 0;
          if (i === 1 || i === 5) {
            posName = 'Ortho';
            density = activeSubstituent.chargeDensities.ortho;
          } else if (i === 2 || i === 4) {
            posName = 'Meta';
            density = activeSubstituent.chargeDensities.meta;
          } else if (i === 3) {
            posName = 'Para';
            density = activeSubstituent.chargeDensities.para;
          }
          vertices.push({ x: vx, y: vy, label: `C${i + 1}`, posName, density });
        }

        // Draw outer benzene hexagon
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 4.5;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        for (let i = 1; i < 6; i++) {
          ctx.lineTo(vertices[i].x, vertices[i].y);
        }
        ctx.closePath();
        ctx.stroke();

        // Inscribed delocalized pi ring with glowing orbital animation
        ctx.save();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#0284c7';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(ringCenterX, ringCenterY, R * 0.58, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Rotating pi electrons along inner circle
        for (let e = 0; e < 6; e++) {
          const eAngle = t * 1.5 + (e * Math.PI) / 3;
          const ex = ringCenterX + R * 0.58 * Math.cos(eAngle);
          const ey = ringCenterY + R * 0.58 * Math.sin(eAngle);
          drawGlowingParticle(ctx, ex, ey, 2.5, '#67e8f9', 6);
        }

        // Bond to C1 substituent at top
        const c1 = vertices[0];
        const subY = c1.y - 45;
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(c1.x, c1.y);
        ctx.lineTo(c1.x, subY + 14);
        ctx.stroke();

        // Substituent Badge at top
        const subBadgeW = 86;
        const subBadgeH = 32;
        ctx.fillStyle = activeSubstituent.activationType.includes('activating')
          ? 'rgba(16, 185, 129, 0.25)'
          : 'rgba(239, 68, 68, 0.25)';
        ctx.strokeStyle = activeSubstituent.activationType.includes('activating') ? '#10b981' : '#f43f5e';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(c1.x - subBadgeW / 2, subY - subBadgeH / 2, subBadgeW, subBadgeH, 16);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '900 15px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(activeSubstituent.formula, c1.x, subY + 5);

        // Substituent nature pill
        ctx.fillStyle = activeSubstituent.directingClass === 'ortho_para' ? '#34d399' : '#fb923c';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.fillText(
          isArabic
            ? activeSubstituent.directingClass === 'ortho_para'
              ? 'موجه لأورثو وبارا'
              : 'موجه للموضع ميتا'
            : activeSubstituent.directingClass === 'ortho_para'
            ? 'o,p-Directing'
            : 'meta-Directing',
          c1.x,
          subY - 22
        );

        // Carbon vertices and electron density heat nodes
        for (let i = 1; i < 6; i++) {
          const v = vertices[i];
          const isFavored = isOrthoPara ? (i === 1 || i === 3 || i === 5) : (i === 2 || i === 4);

          // Electron density halo
          if (isFavored) {
            const glowR = 14 + Math.sin(t * 4 + i) * 3;
            drawGlowingParticle(ctx, v.x, v.y, glowR, isOrthoPara ? 'rgba(16, 185, 129, 0.35)' : 'rgba(245, 158, 11, 0.35)', 12);
          }

          // Carbon core
          ctx.fillStyle = isFavored ? (isOrthoPara ? '#10b981' : '#f59e0b') : '#475569';
          ctx.beginPath();
          ctx.arc(v.x, v.y, 8, 0, Math.PI * 2);
          ctx.fill();

          // Text label (Ortho, Meta, Para)
          ctx.fillStyle = isFavored ? '#ffffff' : '#94a3b8';
          ctx.font = 'bold 10px Inter, sans-serif';
          let labelX = v.x;
          let labelY = v.y;
          if (i === 1) {
            labelX += 26;
            labelY -= 4;
          } else if (i === 2) {
            labelX += 26;
            labelY += 8;
          } else if (i === 3) {
            labelY += 24;
          } else if (i === 4) {
            labelX -= 26;
            labelY += 8;
          } else if (i === 5) {
            labelX -= 26;
            labelY -= 4;
          }
          ctx.fillText(`${v.posName} (${v.label})`, labelX, labelY);

          // Delta charge indicator
          ctx.fillStyle = v.density < 0 ? '#34d399' : '#f87171';
          ctx.font = 'bold 9px monospace';
          ctx.fillText(v.density < 0 ? 'δ⁻' : 'δ⁺', v.x, v.y + 3);
        }

        // Incoming Electrophile
        const elecX = ringCenterX + R + 100;
        const elecY = ringCenterY - 70;

        ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(elecX - 34, elecY - 18, 68, 36, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 13px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(activeElectrophile.activeSpeciesEn, elecX, elecY + 5);

        // Particle beam streaming toward favored positions
        const targetVertex = isOrthoPara ? vertices[1] : vertices[2]; // Ortho C2 or Meta C3
        drawVolumetricBeam(ctx, elecX - 35, elecY, targetVertex.x + 10, targetVertex.y - 10, '#38bdf8', 1.8, 6, t * 2.5);

        // Product Distribution Panel (Right side)
        if (width >= 768) {
          const panelX = width * 0.68;
          const panelY = height / 2 - 120;
          const pW = width * 0.28;

          ctx.fillStyle = isLight ? '#ffffff' : '#0f172a';
          ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(panelX - 10, panelY, pW, 250, 14);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 12px Inter, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(
            isArabic ? 'نسب نواتج الاستبدال المقاسة:' : 'Substitution Isomer Yields:',
            panelX + 10,
            panelY + 28
          );

          const isomers = [
            {
              nameEn: 'Ortho Isomer (1,2-)',
              nameAr: 'ناتج أورثو (١،٢-)',
              pct: benzeneDirectingRatios.ortho,
              isMajor: isOrthoPara,
            },
            {
              nameEn: 'Para Isomer (1,4-)',
              nameAr: 'ناتج بارا (١،٤-)',
              pct: benzeneDirectingRatios.para,
              isMajor: isOrthoPara,
            },
            {
              nameEn: 'Meta Isomer (1,3-)',
              nameAr: 'ناتج ميتا (١،٣-)',
              pct: benzeneDirectingRatios.meta,
              isMajor: !isOrthoPara,
            },
          ];

          isomers.forEach((iso, idx) => {
            const rowY = panelY + 65 + idx * 56;
            ctx.fillStyle = iso.isMajor ? '#10b981' : '#94a3b8';
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.fillText(isArabic ? iso.nameAr : iso.nameEn, panelX + 10, rowY);

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 11px "JetBrains Mono", monospace';
            ctx.textAlign = 'right';
            ctx.fillText(`${iso.pct}%`, panelX + pW - 30, rowY);
            ctx.textAlign = 'left';

            // Progress bar
            const barW = pW - 40;
            ctx.fillStyle = isLight ? '#e2e8f0' : '#1e293b';
            ctx.beginPath();
            ctx.roundRect(panelX + 10, rowY + 8, barW, 8, 4);
            ctx.fill();

            ctx.fillStyle = iso.isMajor ? '#10b981' : '#64748b';
            ctx.beginPath();
            ctx.roundRect(panelX + 10, rowY + 8, barW * (iso.pct / 100), 8, 4);
            ctx.fill();
          });
        }
      }

      // ---------------------------------------------------------
      // RENDER MODE 5: FISCHER ESTERIFICATION & SAPONIFICATION
      // ---------------------------------------------------------
      else if (params.subTab === 'esterification') {
        const leftCenterX = width < 768 ? width / 2 : width * 0.32;
        const leftCenterY = height / 2 + 10;

        // 1. Heating Mantle at bottom
        const mantleW = 140;
        const mantleH = 65;
        const mantleX = leftCenterX - mantleW / 2;
        const mantleY = leftCenterY + 45;

        ctx.fillStyle = isLight ? '#cbd5e1' : '#1e293b';
        ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(mantleX, mantleY, mantleW, mantleH, [8, 8, 16, 16]);
        ctx.fill();
        ctx.stroke();

        // Heating element warm amber glow inside mantle
        const heatPulse = 0.5 + 0.3 * Math.sin(t * 5);
        ctx.fillStyle = `rgba(245, 158, 11, ${heatPulse})`;
        ctx.beginPath();
        ctx.arc(leftCenterX, mantleY + 20, 50, Math.PI, 0);
        ctx.fill();

        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`HEATING MANTLE: ${params.esterTemperature}°C`, leftCenterX, mantleY + mantleH - 12);

        // 2. Round-bottom Flask containing two-phase liquid
        const flaskR = 52;
        const flaskCX = leftCenterX;
        const flaskCY = leftCenterY + 30;

        // Flask outline
        ctx.save();
        ctx.beginPath();
        ctx.arc(flaskCX, flaskCY, flaskR, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.4)' : 'rgba(15, 23, 42, 0.6)';
        ctx.fill();
        ctx.clip();

        // Liquid Layer 1: Lower Aqueous Phase (water / acid / base)
        const aqLevel = flaskCY + 10;
        ctx.fillStyle = params.saponificationActive ? 'rgba(56, 189, 248, 0.5)' : 'rgba(56, 189, 248, 0.35)';
        ctx.fillRect(flaskCX - flaskR, aqLevel, flaskR * 2, flaskR);

        // Liquid Layer 2: Upper Organic Ester Phase (floating on top)
        const esterLevel = aqLevel - 28;
        ctx.fillStyle = params.saponificationActive
          ? 'rgba(255, 255, 255, 0.85)' // Creamy soap lather
          : 'rgba(245, 158, 11, 0.45)'; // Golden fruit ester
        ctx.fillRect(flaskCX - flaskR, esterLevel, flaskR * 2, 28);

        // Meniscus boundary wave
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(flaskCX - flaskR, aqLevel);
        for (let x = flaskCX - flaskR; x <= flaskCX + flaskR; x += 5) {
          const wy = aqLevel + Math.sin(t * 4 + x * 0.08) * 2;
          ctx.lineTo(x, wy);
        }
        ctx.stroke();

        // Micro-bubbles rising
        for (let b = 0; b < 6; b++) {
          const bProgress = (t * 1.2 + b * 0.18) % 1;
          const bx = flaskCX - 30 + ((b * 12) % 60);
          const by = flaskCY + flaskR - 12 - bProgress * (flaskR * 1.5);
          drawGlowingParticle(ctx, bx, by, 1.8, '#ffffff', 4);
        }
        ctx.restore();

        // Flask glass rim & neck
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(flaskCX, flaskCY, flaskR, 0, Math.PI * 2);
        ctx.stroke();

        // Flask neck
        const neckW = 24;
        const neckH = 40;
        ctx.strokeRect(flaskCX - neckW / 2, flaskCY - flaskR - neckH + 4, neckW, neckH);

        // 3. Vertical Condenser Tube (Reflux Condenser)
        const condX = flaskCX - 18;
        const condY = flaskCY - flaskR - neckH - 85;
        const condW = 36;
        const condH = 85;

        // Outer water jacket
        ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(condX, condY, condW, condH);
        ctx.fillRect(condX, condY, condW, condH);

        // Inner vapor tube
        ctx.strokeRect(flaskCX - 7, condY - 10, 14, condH + 10);

        // Water circulation indicators
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 9px Inter, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('H₂O Out ➔', condX + condW + 6, condY + 20);
        ctx.fillText('H₂O In ➔', condX + condW + 6, condY + condH - 10);

        // Rising fragrance aroma vapors at condenser top
        for (let a = 0; a < 4; a++) {
          const aProg = (t * 0.8 + a * 0.25) % 1;
          const ax = flaskCX + Math.sin(t * 3 + a) * 14;
          const ay = condY - 10 - aProg * 35;
          drawGlowingParticle(ctx, ax, ay, 3, params.saponificationActive ? '#ffffff' : '#fbbf24', 8);
        }

        // Aroma banner above glassware
        ctx.fillStyle = params.saponificationActive ? '#38bdf8' : '#f59e0b';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          params.saponificationActive
            ? isArabic
              ? '🧼 طبقة صابون متصبن (أملاح الصوديوم)'
              : '🧼 Soap Lather (Sodium Carboxylate)'
            : isArabic
            ? `✨ ${esterProduct.fragranceAr}`
            : `✨ ${esterProduct.fragranceEn}`,
          flaskCX,
          condY - 26
        );

        // 4. Dynamic Equilibrium Progress Graph (Right half)
        if (width >= 768) {
          const graphL = width * 0.54;
          const graphR = width - 40;
          const graphT = height / 2 - 110;
          const graphB = height / 2 + 100;
          const graphW = graphR - graphL;
          const graphH = graphB - graphT;

          // Box
          ctx.fillStyle = isLight ? '#ffffff' : '#0f172a';
          ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(graphL - 10, graphT - 25, graphW + 20, graphH + 60, 14);
          ctx.fill();
          ctx.stroke();

          // Title
          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 12px Inter, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(
            isArabic
              ? 'منحنى تقدم الاتزان العضوي [القسطرة / التصبن]:'
              : 'Organic Reaction Equilibrium Dynamic Kinetics:',
            graphL + 10,
            graphT - 5
          );

          // Axes
          ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(graphL + 30, graphT + 15);
          ctx.lineTo(graphL + 30, graphB);
          ctx.lineTo(graphR - 10, graphB);
          ctx.stroke();

          // Axis labels
          ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
          ctx.font = '10px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(isArabic ? 'الزمن (دقيقة)' : 'Time (min)', (graphL + graphR) / 2, graphB + 20);

          // Kc = 4 asymptote without H2SO4 (66.7%)
          const y66 = graphB - (graphH * 0.667 * 0.85);
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(graphL + 30, y66);
          ctx.lineTo(graphR - 10, y66);
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 9px monospace';
          ctx.textAlign = 'right';
          ctx.fillText(
            isArabic ? 'حد الاتزان العكوس (Kc = 4) ➔ 66.7%' : 'Kc = 4 Reversible Limit ➔ 66.7%',
            graphR - 15,
            y66 - 5
          );

          // Equilibrium curve for ester product rising
          const targetPct = simState.esterEquilibriumYield;
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(graphL + 30, graphB);

          const pts = 30;
          for (let p = 0; p <= pts; p++) {
            const frac = p / pts;
            const px = graphL + 30 + frac * (graphW - 40);
            const pyVal = targetPct * (1 - Math.exp(-frac * 4));
            const py = graphB - (graphH * (pyVal / 100) * 0.85);
            ctx.lineTo(px, py);
          }
          ctx.stroke();

          // Current operating point
          const timeFrac = params.esterTimeMinutes / 60;
          const curOpX = graphL + 30 + timeFrac * (graphW - 40);
          const curOpYVal = targetPct * (1 - Math.exp(-timeFrac * 4));
          const curOpY = graphB - (graphH * (curOpYVal / 100) * 0.85);
          drawGlowingParticle(ctx, curOpX, curOpY, 6, '#34d399', 8);

          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 11px Inter, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(
            `${isArabic ? 'نسبة التحول الحالية:' : 'Current Conversion:'} ${simState.reactionYieldPercent}%`,
            curOpX + 10,
            curOpY - 8
          );
        }
      }

      // ---------------------------------------------------------
      // RENDER MODE 3: IUPAC SYSTEMATIC NOMENCLATURE
      // ---------------------------------------------------------
      else if (params.subTab === 'nomenclature') {
        const currentQ = IUPAC_QUIZ[params.currentQuizIndex % IUPAC_QUIZ.length];
        const centerX = width / 2;
        const centerY = height / 2 - 30;

        const boxW = Math.min(width - 60, 620);
        const boxH = 150;
        ctx.fillStyle = isLight ? '#f8fafc' : '#0f172a';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(centerX - boxW / 2, centerY - boxH / 2, boxW, boxH, 16);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(centerX - 60, centerY - boxH / 2 - 14, 120, 24, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(currentQ.category, centerX, centerY - boxH / 2 + 3);

        ctx.fillStyle = '#f59e0b';
        ctx.font = '900 22px "JetBrains Mono", monospace';
        ctx.fillText(currentQ.structure, centerX, centerY + 8);

        const numMarkers = 4;
        const startMarkerX = centerX - 75;
        for (let m = 0; m < numMarkers; m++) {
          const mx = startMarkerX + m * 50;
          const my = centerY + 32;
          const isActive = (Math.floor(t * 2) % numMarkers) === m;
          ctx.fillStyle = isActive ? '#10b981' : '#64748b';
          ctx.font = 'bold 10px monospace';
          ctx.fillText(`C${m + 1}`, mx, my);
          if (isActive) {
            drawGlowingParticle(ctx, mx, my - 4, 8, 'rgba(16, 185, 129, 0.6)', 6);
          }
        }

        ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
        ctx.font = '12px Inter, sans-serif';
        ctx.fillText(
          isArabic
            ? 'تحديد أطول سلسلة كربونية متصلة وترقيمها من الطرف الأقرب للمجموعة الوظيفية'
            : 'Find longest continuous chain; number from the end nearest functional group',
          centerX,
          centerY + 55
        );
      }
    },
    [
      params.subTab,
      params.carbocationEnergyView,
      params.alkeneType,
      params.reagent,
      params.currentQuizIndex,
      activeStepData,
      activePathway,
      isLight,
      isArabic,
      simState.activationEnergyEa,
      simState.boilingPointC,
      simState.irPeakWavenumber,
      simState.reactionYieldPercent,
      simState.esterEquilibriumYield,
      activeSubstituent,
      activeElectrophile,
      benzeneDirectingRatios,
      params.esterTemperature,
      params.saponificationActive,
      params.esterTimeMinutes,
      esterProduct,
    ]
  );

  // -------------------------------------------------------------
  // HANDLERS FOR QUIZ AND ROADMAP INTERACTION
  // -------------------------------------------------------------
  const handleQuizAnswer = (idx: number) => {
    if (params.selectedOption !== null) return;
    updateParams({
      selectedOption: idx,
      showExplanation: true,
    });
  };

  const handleNextQuizQuestion = () => {
    updateParams({
      currentQuizIndex: (params.currentQuizIndex + 1) % IUPAC_QUIZ.length,
      selectedOption: null,
      showExplanation: false,
    });
  };

  const currentQuizItem = IUPAC_QUIZ[params.currentQuizIndex % IUPAC_QUIZ.length];

  return (
    <VirtualLabShell
      definition={ORGANIC_LAB_DEF}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      oscilloscopeCh1={oscilloscopeCh1}
      oscilloscopeCh2={oscilloscopeCh2}
      currentXValue={params.subTab === 'esterification' ? params.esterTimeMinutes : params.temperature}
      currentYValue={simState.boilingPointC}
      onResetSimulation={resetParams}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* Main SubTab Selector */}
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-400 block">
              {isArabic ? 'نمط عمل المختبر العضوي:' : 'Organic Lab Workbench Mode:'}
            </label>
            <div className="relative">
              <select
                aria-label={isArabic ? 'نمط عمل المختبر العضوي' : 'Organic Lab Workbench Mode'}
                value={params.subTab}
                onChange={(e) => updateParam('subTab', e.target.value as OrganicSubTab)}
                className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-black text-emerald-400 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="roadmap">
                  {isArabic ? 'خريطة التحويلات العضوية الشاملة' : 'Synthetic Roadmaps & Conversions'}
                </option>
                <option value="markovnikov">
                  {isArabic ? 'قاعدة ماركونيكوف وآلية التفاعل' : "Markovnikov's Regioselectivity & Ea"}
                </option>
                <option value="benzene_directing">
                  {isArabic ? 'توجيه المجموعات في حلقة البنزين' : 'Aromatic Directing Groups'}
                </option>
                <option value="esterification">
                  {isArabic ? 'تفاعل القسطرة والتحلل المائي للصابون' : 'Fischer Esterification & Saponification'}
                </option>
                <option value="nomenclature">
                  {isArabic ? 'تحدي التسمية النظامية IUPAC' : 'IUPAC Nomenclature Challenge'}
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* CONTROLS FOR MODE 1: ROADMAP */}
          {params.subTab === 'roadmap' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'اختر مسار التحويل العضوي:' : 'Select Organic Synthesis Pathway:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'مسار التحويل العضوي' : 'Organic Synthesis Pathway'}
                    value={params.pathwayId}
                    onChange={(e) =>
                      updateParams({
                        pathwayId: e.target.value,
                        activeStep: 0,
                      })
                    }
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    {ORGANIC_PATHWAYS.map((path) => (
                      <option key={path.id} value={path.id}>
                        {isArabic ? path.titleAr : path.titleEn}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Step Navigation */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-400">
                    {isArabic ? 'مرحلة التحويل الحالية:' : 'Active Synthesis Stage:'}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {params.activeStep + 1} / {activePathway.steps.length}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    disabled={params.activeStep === 0}
                    onClick={() => updateParam('activeStep', Math.max(0, params.activeStep - 1))}
                    className="p-2 rounded-xl text-xs font-black border border-slate-700 bg-slate-900 text-slate-300 disabled:opacity-30 cursor-pointer hover:bg-slate-800 transition-all"
                  >
                    {isArabic ? 'السابق ➔' : 'Previous'}
                  </button>
                  <button
                    type="button"
                    disabled={params.activeStep >= activePathway.steps.length - 1}
                    onClick={() =>
                      updateParam(
                        'activeStep',
                        Math.min(activePathway.steps.length - 1, params.activeStep + 1)
                      )
                    }
                    className="p-2 rounded-xl text-xs font-black bg-emerald-600 text-white disabled:opacity-30 cursor-pointer hover:bg-emerald-500 transition-all"
                  >
                    {isArabic ? '➔ التالي' : 'Next'}
                  </button>
                </div>
              </div>

              {/* Reaction Temperature Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-400">{isArabic ? 'درجة الحرارة:' : 'Temperature:'}</span>
                  <span className="text-amber-400 font-mono">{params.temperature}°C</span>
                </div>
                <input
                  type="range"
                  aria-label={isArabic ? 'درجة حرارة التفاعل' : 'Reaction Temperature'}
                  min={20}
                  max={1500}
                  step={10}
                  value={params.temperature}
                  onChange={(e) => updateParam('temperature', Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* CONTROLS FOR MODE 2: MARKOVNIKOV */}
          {params.subTab === 'markovnikov' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'الألكين غير المتماثل:' : 'Asymmetric Alkene:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'الألكين غير المتماثل' : 'Asymmetric Alkene'}
                    value={params.alkeneType}
                    onChange={(e) => updateParam('alkeneType', e.target.value as AlkeneType)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="propene">
                      {isArabic ? 'البروبين (CH₃-CH=CH₂)' : 'Propene (CH₃-CH=CH₂)'}
                    </option>
                    <option value="methylpropene">
                      {isArabic ? '٢- ميثيل بروبين ((CH₃)₂C=CH₂)' : '2-Methylpropene ((CH₃)₂C=CH₂)'}
                    </option>
                    <option value="but1ene">
                      {isArabic ? 'بيوت-١-ين (CH₃-CH₂-CH=CH₂)' : 'But-1-ene (CH₃-CH₂-CH=CH₂)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'الكاشف غير المتماثل:' : 'Asymmetric Reagent:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'الكاشف غير المتماثل' : 'Asymmetric Reagent'}
                    value={params.reagent}
                    onChange={(e) => updateParam('reagent', e.target.value as ReagentType)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="HBr">
                      {isArabic ? 'بروميد الهيدروجين (H⁺-Br⁻)' : 'Hydrogen Bromide (H⁺-Br⁻)'}
                    </option>
                    <option value="HCl">
                      {isArabic ? 'كلوريد الهيدروجين (H⁺-Cl⁻)' : 'Hydrogen Chloride (H⁺-Cl⁻)'}
                    </option>
                    <option value="H2O">
                      {isArabic ? 'هيدرة حفزية بالماء (H⁺-OH⁻)' : 'Catalytic Hydration (H⁺-OH⁻)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Toggle Energy Profile Curve */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() =>
                    updateParam('carbocationEnergyView', !params.carbocationEnergyView)
                  }
                  className={`w-full p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    params.carbocationEnergyView
                      ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>
                    {params.carbocationEnergyView
                      ? isArabic
                        ? 'عرض منحنى طاقة التنشيط Ea (نشط)'
                        : 'Potential Energy Curve Active'
                      : isArabic
                      ? 'عرض الهيكل الميكانيكي للجزيئات'
                      : 'Switch to Molecular Mechanism View'}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* CONTROLS FOR MODE 4: BENZENE DIRECTING */}
          {params.subTab === 'benzene_directing' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'المجموعة المتصلة بالحلقة (الموجهة):' : 'Aromatic Ring Substituent:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'المجموعة المتصلة بالحلقة' : 'Aromatic Ring Substituent'}
                    value={params.benzeneSubstituent}
                    onChange={(e) => updateParam('benzeneSubstituent', e.target.value as BenzeneSubstituent)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="CH3">
                      {isArabic ? '-CH₃ ميثيل (تولوين، دافعة، أورثو وبارا)' : '-CH₃ Methyl (Toluene, Activator, o/p)'}
                    </option>
                    <option value="OH">
                      {isArabic ? '-OH هيدروكسيل (فينول، منشطة قوية، أورثو وبارا)' : '-OH Hydroxyl (Phenol, Strong Activator, o/p)'}
                    </option>
                    <option value="NH2">
                      {isArabic ? '-NH₂ أمينو (أنيلين، منشطة قوية، أورثو وبارا)' : '-NH₂ Amino (Aniline, Strong Activator, o/p)'}
                    </option>
                    <option value="Cl">
                      {isArabic ? '-Cl كلورو (كلوروبنزين، مثبطة ساحبة، أورثو وبارا)' : '-Cl Chloro (Chlorobenzene, Deactivator, o/p)'}
                    </option>
                    <option value="NO2">
                      {isArabic ? '-NO₂ نيترو (نيتروبنزين، ساحبة قوية، ميتا)' : '-NO₂ Nitro (Nitrobenzene, Deactivator, meta)'}
                    </option>
                    <option value="COOH">
                      {isArabic ? '-COOH كربوكسيل (حمض بنزويك، ساحبة، ميتا)' : '-COOH Carboxyl (Benzoic acid, Deactivator, meta)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'الكاشف الإلكتروفيلي القادم (التفاعل):' : 'Incoming Electrophile (Reaction):'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'الكاشف الإلكتروفيلي القادم' : 'Incoming Electrophile'}
                    value={params.benzeneElectrophile}
                    onChange={(e) => updateParam('benzeneElectrophile', e.target.value as BenzeneElectrophile)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="nitration">
                      {isArabic ? 'نيترة (HNO₃ + H₂SO₄ ➔ NO₂⁺)' : 'Nitration (HNO₃ + H₂SO₄ ➔ NO₂⁺)'}
                    </option>
                    <option value="chlorination">
                      {isArabic ? 'هلجنة بالكلور (Cl₂ + FeCl₃ ➔ Cl⁺)' : 'Chlorination (Cl₂ + FeCl₃ ➔ Cl⁺)'}
                    </option>
                    <option value="alkylation">
                      {isArabic ? 'ألكلة فريدل-كرافتس (CH₃Cl + AlCl₃)' : 'Friedel-Crafts Alkylation (CH₃Cl + AlCl₃)'}
                    </option>
                    <option value="sulfonation">
                      {isArabic ? 'سلفنة بحمض كبريتيك مدخن (SO₃)' : 'Sulfonation with Oleum (SO₃)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => updateParam('showWhelandResonance', !params.showWhelandResonance)}
                  className={`w-full p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    params.showWhelandResonance
                      ? 'bg-cyan-600/30 border-cyan-500 text-cyan-300'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  <span>
                    {params.showWhelandResonance
                      ? isArabic
                        ? 'إخفاء وسيط أيون الأرينيوم'
                        : 'Hide Arenium Resonance View'
                      : isArabic
                      ? 'عرض وسيط أيون الأرينيوم (فيلاند)'
                      : 'Show Arenium (Wheland) Intermediate'}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* CONTROLS FOR MODE 5: ESTERIFICATION */}
          {params.subTab === 'esterification' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'الحمض الكربوكسيلي المتفاعل:' : 'Carboxylic Acid Reactant:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'الحمض الكربوكسيلي' : 'Carboxylic Acid'}
                    value={params.esterAcid}
                    onChange={(e) => updateParam('esterAcid', e.target.value as EsterAcid)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="acetic">
                      {isArabic ? 'حمض الأسيتيك (الخل - CH₃COOH)' : 'Acetic Acid (CH₃COOH)'}
                    </option>
                    <option value="salicylic">
                      {isArabic ? 'حمض الساليسيليك (C₆H₄(OH)COOH)' : 'Salicylic Acid (Phenolic)'}
                    </option>
                    <option value="benzoic">
                      {isArabic ? 'حمض البنزويك (C₆H₅COOH)' : 'Benzoic Acid (Aromatic)'}
                    </option>
                    <option value="butyric">
                      {isArabic ? 'حمض البيوتيريك (الزبدة - C₃H₇COOH)' : 'Butyric Acid (C₃H₇COOH)'}
                    </option>
                    <option value="formic">
                      {isArabic ? 'حمض الفورميك (النمليك - HCOOH)' : 'Formic Acid (HCOOH)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">
                  {isArabic ? 'المركب الكحولي المتفاعل:' : 'Alcohol Component:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'المركب الكحولي' : 'Alcohol Component'}
                    value={params.esterAlcohol}
                    onChange={(e) => updateParam('esterAlcohol', e.target.value as EsterAlcohol)}
                    className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="ethanol">
                      {isArabic ? 'الإيثانول (كحول إيثيلي - C₂H₅OH)' : 'Ethanol (C₂H₅OH)'}
                    </option>
                    <option value="methanol">
                      {isArabic ? 'الميثانول (كحول الخشب - CH₃OH)' : 'Methanol (CH₃OH)'}
                    </option>
                    <option value="isopentyl">
                      {isArabic ? 'كحول أيزوبنتيل (زيت الموز - C₅H₁₁OH)' : 'Isopentyl Alcohol (C₅H₁₁OH)'}
                    </option>
                    <option value="benzyl">
                      {isArabic ? 'كحول البنزيل (C₆H₅CH₂OH)' : 'Benzyl Alcohol (C₆H₅CH₂OH)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Toggle H2SO4 Catalyst */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div>
                  <span className="text-xs font-bold text-slate-200 block">
                    {isArabic ? 'حمض كبريتيك مركز (نازع للماء):' : 'Conc. H₂SO₄ Dehydrating Agent:'}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {params.isCatalystH2SO4Present
                      ? isArabic
                        ? 'يمتص الماء ويمنع التفاعل العكسي (> ٩٥٪)'
                        : 'Pushes equilibrium forward (>95% yield)'
                      : isArabic
                      ? 'تفاعل عكوس متزن (Kc = 4) ➔ أقصاه ٦٦.٧٪'
                      : 'Reversible equilibrium limited to 66.7%'}
                  </span>
                </div>
                <input
                  type="checkbox"
                  aria-label={isArabic ? 'حمض كبريتيك مركز نازع للماء' : 'Conc. H2SO4 Dehydrating Agent'}
                  checked={params.isCatalystH2SO4Present}
                  onChange={(e) => updateParam('isCatalystH2SO4Present', e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Reaction Time Duration Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-400">{isArabic ? 'زمن التفاعل:' : 'Reaction Duration:'}</span>
                  <span className="text-emerald-400 font-mono">{params.esterTimeMinutes} min</span>
                </div>
                <input
                  type="range"
                  aria-label={isArabic ? 'زمن التفاعل' : 'Reaction Duration'}
                  min={0}
                  max={60}
                  step={5}
                  value={params.esterTimeMinutes}
                  onChange={(e) => updateParam('esterTimeMinutes', Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Alkaline Saponification Toggle */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => updateParam('saponificationActive', !params.saponificationActive)}
                  className={`w-full p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    params.saponificationActive
                      ? 'bg-amber-600/30 border-amber-500 text-amber-300'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Droplet className="w-4 h-4" />
                  <span>
                    {params.saponificationActive
                      ? isArabic
                        ? 'التحلل القاعدي والتصبن نشط (+ NaOH)'
                        : 'Alkaline Saponification Active'
                      : isArabic
                      ? 'تفعيل التحلل القاعدي للإستر والتصبن'
                      : 'Activate Alkaline Saponification'}
                  </span>
                </button>
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
            id="organic-workbench-viewport"
            lang={lang ?? 'ar'}
            theme={theme}
            aspectRatio="aspect-[16/10]"
            minHeight={420}
            animated={true}
            onRender={renderSimulation}
          >
            {/* Real-time Status Overlay Badge */}
            <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono font-bold text-cyan-300 flex items-center gap-2 pointer-events-none select-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {params.subTab === 'roadmap'
                  ? `${activeStepData.productFormula} (${activeStepData.productNameEn})`
                  : params.subTab === 'markovnikov'
                  ? isArabic
                    ? 'قاعدة ماركونيكوف: الناتج الرئيسي > ٩٩٪'
                    : 'Markovnikov Regioselectivity: Major Product >99%'
                  : params.subTab === 'benzene_directing'
                  ? `${activeSubstituent.parentCompoundEn} ➔ ${activeElectrophile.reactionTypeEn}`
                  : params.subTab === 'esterification'
                  ? params.saponificationActive
                    ? isArabic
                      ? 'تحلل قاعدي وتصبن (+ NaOH)'
                      : 'Alkaline Saponification (+ NaOH)'
                    : `${esterProduct.commonNameEn} (${esterProduct.esterFormula})`
                  : isArabic
                  ? 'تحدي التسمية النظامية IUPAC'
                  : 'IUPAC Systematic Nomenclature'}
              </span>
            </div>

            {/* Quick action button for energy curve toggle in Markovnikov mode */}
            {params.subTab === 'markovnikov' && (
              <div className="absolute bottom-3 right-3">
                <button
                  type="button"
                  onClick={() => updateParam('carbocationEnergyView', !params.carbocationEnergyView)}
                  className="px-3 py-1.5 rounded-xl text-xs font-black bg-slate-900/90 border border-emerald-500/50 text-emerald-300 hover:bg-slate-800 shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>
                    {params.carbocationEnergyView
                      ? isArabic
                        ? 'عرض الهيكل الجزيئي'
                        : 'Show Molecular View'
                      : isArabic
                      ? 'عرض منحنى طاقة التنشيط Ea'
                      : 'Show Energy Profile'}
                  </span>
                </button>
              </div>
            )}

            {/* Quick toggle for Wheland intermediate in benzene mode */}
            {params.subTab === 'benzene_directing' && (
              <div className="absolute bottom-3 right-3">
                <button
                  type="button"
                  onClick={() => updateParam('showWhelandResonance', !params.showWhelandResonance)}
                  className="px-3 py-1.5 rounded-xl text-xs font-black bg-slate-900/90 border border-cyan-500/50 text-cyan-300 hover:bg-slate-800 shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>
                    {params.showWhelandResonance
                      ? isArabic
                        ? 'عرض الحلقة البسيطة'
                        : 'Standard View'
                      : isArabic
                      ? 'وسيط أيون الأرينيوم'
                      : 'Arenium Intermediate'}
                  </span>
                </button>
              </div>
            )}
          </CanvasSimulationViewport>
        </div>

        {/* MODE 3: IUPAC INTERACTIVE QUIZ CARD BELOW VIEWPORT */}
        {params.subTab === 'nomenclature' && (
          <div
            className={`p-5 rounded-2xl border transition-all ${
              isContrast
                ? 'bg-black border-cyan-400 text-white'
                : isLight
                ? 'bg-white border-slate-300 shadow-lg text-slate-900'
                : 'bg-slate-900/90 border-slate-800 text-slate-100'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-black tracking-tight">
                  {isArabic ? 'سؤال التسمية النظامية IUPAC:' : 'IUPAC Nomenclature Question:'}
                </h4>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {params.currentQuizIndex + 1} / {IUPAC_QUIZ.length}
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-3">
              {isArabic
                ? 'اختر الاسم الصحيح للمركب المعروض وفق قواعد منظمة الكيمياء البحتة والتطبيقية (IUPAC):'
                : 'Select the correct systematic IUPAC name based on longest chain, functional priority, and locants:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQuizItem.optionsEn.map((optEn, idx) => {
                const optAr = currentQuizItem.optionsAr[idx];
                const isSelected = params.selectedOption === idx;
                const isCorrect = idx === currentQuizItem.correctIndex;
                let btnStyle = isLight
                  ? 'bg-slate-50 border-slate-300 hover:border-emerald-500 text-slate-800'
                  : 'bg-slate-950 border-slate-800 hover:border-emerald-500 text-slate-200';

                if (params.selectedOption !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-300 font-bold';
                  } else {
                    btnStyle = 'opacity-40 border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={params.selectedOption !== null}
                    onClick={() => handleQuizAnswer(idx)}
                    className={`p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{isArabic ? optAr : optEn}</span>
                    {params.selectedOption !== null && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                    {params.selectedOption !== null && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card & next button */}
            {params.showExplanation && (
              <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-emerald-400 block mb-1">
                    {isArabic ? '💡 التفسير وقواعد الأيوباك:' : '💡 Explanation & IUPAC Rules:'}
                  </span>
                  {isArabic ? currentQuizItem.explanationAr : currentQuizItem.explanationEn}
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={handleNextQuizQuestion}
                    className="px-4 py-2 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                  >
                    {isArabic ? 'السؤال التالي ➔' : 'Next Question ➔'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* MODE 4: BENZENE DIRECTING EDUCATIONAL CARD */}
        {params.subTab === 'benzene_directing' && (
          <div
            className={`p-5 rounded-2xl border ${
              isLight ? 'bg-white border-slate-300 shadow-md' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-4">
              <h4 className="text-sm font-black text-cyan-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>
                  {isArabic
                    ? `قواعد التوجيه الإلكتروفيلي في حلقة البنزين: ${activeSubstituent.parentCompoundAr}`
                    : `Aromatic Electrophilic Directing Rules: ${activeSubstituent.parentCompoundEn}`}
                </span>
              </h4>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {activeSubstituent.directingClass === 'ortho_para' ? 'Ortho/Para' : 'Meta'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isArabic ? 'طبيعة المجموعة الموجهة:' : 'Substituent Effect:'}
                </span>
                <div className="text-xs font-black text-emerald-300">
                  {isArabic ? activeSubstituent.electronEffectAr : activeSubstituent.electronEffectEn}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isArabic ? 'الكاشف الإلكتروفيلي الفعّال:' : 'Active Electrophilic Species:'}
                </span>
                <div className="text-xs font-black text-cyan-300">
                  {isArabic ? activeElectrophile.activeSpeciesAr : activeElectrophile.activeSpeciesEn}
                </div>
                <div className="text-[10px] text-slate-400">
                  {isArabic ? activeElectrophile.catalystAr : activeElectrophile.catalystEn}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isArabic ? 'توزيع النواتج المتكونة:' : 'Product Distribution:'}
                </span>
                <div className="text-xs font-mono font-black text-amber-300">
                  {isArabic
                    ? `أورثو: ${benzeneDirectingRatios.ortho}٪ | بارا: ${benzeneDirectingRatios.para}٪ | ميتا: ${benzeneDirectingRatios.meta}٪`
                    : `Ortho: ${benzeneDirectingRatios.ortho}% | Para: ${benzeneDirectingRatios.para}% | Meta: ${benzeneDirectingRatios.meta}%`}
                </div>
              </div>
            </div>

            {params.showWhelandResonance && (
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-cyan-300 block mb-1">
                  {isArabic ? '🔬 استقرار وسيط أيون الأرينيوم (Arenium Intermediate):' : '🔬 Arenium Ion (Wheland Intermediate) Stability:'}
                </span>
                {isArabic
                  ? 'عند هجوم الإلكتروفيل على موضعي أورثو وبارا في وجود مجموعة معطية للإلكترونات، تكتمل ثمانيات جميع الذرات في صورة رنينية رابعة فائقة الاستقرار، مما يقلل طاقة التنشيط ويسرع التفاعل.'
                  : 'Electrophilic attack at ortho and para positions in the presence of electron-donating groups yields a fourth exceptionally stable resonance contributor with complete octets, lowering activation energy and increasing rate.'}
              </div>
            )}
          </div>
        )}

        {/* MODE 5: ESTERIFICATION EDUCATIONAL CARD */}
        {params.subTab === 'esterification' && (
          <div
            className={`p-5 rounded-2xl border ${
              isLight ? 'bg-white border-slate-300 shadow-md' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-4">
              <h4 className="text-sm font-black text-amber-400 flex items-center gap-2">
                <Droplet className="w-4 h-4" />
                <span>
                  {params.saponificationActive
                    ? isArabic
                      ? 'التحلل المائي القاعدي للإستر (تفاعل التصبن)'
                      : 'Alkaline Ester Hydrolysis (Saponification Reaction)'
                    : isArabic
                    ? `تفاعل القسطرة العضوي: ${esterProduct.commonNameAr}`
                    : `Fischer Esterification: ${esterProduct.commonNameEn}`}
                </span>
              </h4>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {esterProduct.esterFormula}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isArabic ? 'الرائحة العطرية المميزة للإستر:' : 'Ester Fragrance & Aroma:'}
                </span>
                <div className="text-xs font-black text-amber-300">
                  {isArabic ? esterProduct.fragranceAr : esterProduct.fragranceEn}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isArabic ? 'تأثير قاعدة لوشاتيليه والوسط النازع للماء:' : 'Le Chatelier Dehydration Shift:'}
                </span>
                <div className="text-xs font-black text-emerald-300">
                  {params.isCatalystH2SO4Present
                    ? isArabic
                      ? 'حمض الكبريتيك المركز يمتص الماء ويزيح الاتزان طردياً (> ٩٥٪)'
                      : 'Conc. H₂SO₄ absorbs water, driving yield >95%'
                    : isArabic
                    ? 'اتزان عكوس محدود (Kc = 4) ➔ نسبة التحول ٦٦.٧٪'
                    : 'Reversible equilibrium without H₂SO₄ limited to 66.7%'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isArabic ? 'درجة الغليان وقمة امتصاص IR:' : 'Boiling Point & Diagnostic IR:'}
                </span>
                <div className="text-xs font-mono font-black text-cyan-300">
                  {`Tb = ${esterProduct.boilingPointC}°C | IR = ${esterProduct.primaryIrPeak} cm⁻¹`}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-slate-200">
              <span className="font-bold text-amber-300 block mb-1">
                {isArabic ? '🔬 تتبع نظير الأكسجين ١٨ في القسطرة (منهج الثانوية العامة):' : '🔬 Oxygen-18 Isotopic Tracing Mechanism:'}
              </span>
              {isArabic
                ? 'أثبتت تجربة تتبع نظير الأكسجين ١٨ أن مجموعة الهيدروكسيل (-OH) تنفصل من الحمض الكربوكسيلي، بينما تنفصل ذرة الهيدروجين (-H) من الكحول لتكوين الماء، ويدخل نظير الأكسجين ١٨ في تركيب جزيء الإستر الناتج.'
                : 'Oxygen-18 isotopic tracing proved that the -OH group is eliminated from the carboxylic acid, while -H is eliminated from the alcohol, incorporating the labeled ¹⁸O into the ester.'}
            </div>
          </div>
        )}

        {/* ROADMAP STEP DEEP-DIVE CARD */}
        {params.subTab === 'roadmap' && (
          <div
            className={`p-5 rounded-2xl border ${
              isLight ? 'bg-white border-slate-300 shadow-md' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-4">
              <h4 className="text-sm font-black text-emerald-400 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>
                  {isArabic
                    ? `تفاصيل التفاعل الكيميائي - المرحلة ${activeStepData.stepNumber}: ${activeStepData.reactionTypeAr}`
                    : `Reaction Mechanism - Step ${activeStepData.stepNumber}: ${activeStepData.reactionTypeEn}`}
                </span>
              </h4>
              <span className="text-xs font-bold text-slate-400">{activeStepData.productFormula}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isArabic ? 'الكاشف والمواد المضافة:' : 'Reagents & Reactants:'}
                </span>
                <div className="text-xs font-black text-cyan-300">
                  {isArabic ? activeStepData.reagentAr : activeStepData.reagentEn}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isArabic ? 'شروط التفاعل والعوامل الحفازة:' : 'Reaction Conditions & Catalysts:'}
                </span>
                <div className="text-xs font-black text-amber-300">
                  {isArabic ? activeStepData.conditionsAr : activeStepData.conditionsEn}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-300 block">
                  {isArabic ? 'المركب الناتج في هذه الخطوة:' : 'Resulting Product at this Step:'}
                </span>
                <div className="text-sm font-black text-white font-mono mt-0.5">
                  {activeStepData.productFormula}{' '}
                  <span className="text-xs font-sans text-emerald-300 font-normal">
                    ({isArabic ? activeStepData.productNameAr : activeStepData.productNameEn})
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={params.activeStep === 0}
                  onClick={() => updateParam('activeStep', Math.max(0, params.activeStep - 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-700 bg-slate-900 text-slate-300 disabled:opacity-30 cursor-pointer"
                >
                  {isArabic ? 'السابق' : 'Previous'}
                </button>
                <button
                  type="button"
                  disabled={params.activeStep >= activePathway.steps.length - 1}
                  onClick={() =>
                    updateParam('activeStep', Math.min(activePathway.steps.length - 1, params.activeStep + 1))
                  }
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white disabled:opacity-30 cursor-pointer"
                >
                  {isArabic ? 'التالي' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </VirtualLabShell>
  );
};
