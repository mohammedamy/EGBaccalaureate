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
  Flame,
  Layers,
  ChevronDown,
  CheckCircle2,
  XCircle,
  TrendingUp,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type OrganicSubTab = 'roadmap' | 'markovnikov' | 'nomenclature';
export type AlkeneType = 'propene' | 'methylpropene' | 'but1ene';
export type ReagentType = 'HBr' | 'HCl' | 'H2O';

export interface OrganicParams {
  subTab: OrganicSubTab;
  pathwayId: string;
  activeStep: number;
  alkeneType: AlkeneType;
  reagent: ReagentType;
  carbocationEnergyView: boolean;
  reactionProgress: number; // 0 to 100%
  temperature: number; // in Celsius
  catalystActive: boolean;
  currentQuizIndex: number;
  selectedOption: number | null;
  showExplanation: boolean;
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
  structureType: 'alkyne' | 'arene' | 'alkylarene' | 'nitroarene' | 'aldehyde' | 'acid' | 'ester' | 'alcohol' | 'haloalkane' | 'diol';
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
    curriculumContextEn: 'Industrial synthetic route combining inorganic carbide hydrolysis with cyclic trimerization, Friedel-Crafts alkylation, and multi-step electrophilic nitration.',
    curriculumContextAr: 'مخطط تحويل صناعي يجمع بين تنقيط الماء على كاربيد الكالسيوم، البلمرة الحلقية الثلاثية، ألكلة فريدل-كرافتس، والنيترة الثلاثية للتولوين.',
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
    curriculumContextEn: 'Transforming the primary component of natural gas into a sweet-smelling organic ester via thermal cracking, catalytic hydration, oxidation, and Fischer esterification.',
    curriculumContextAr: 'تحويل المكون الرئيسي للغاز الطبيعي إلى إستر عضوي ذكي الرائحة عبر التكسير الحراري والتبريد السريع، الهيدرة الحفزية، الأكسدة، وتفاعل القسطرة.',
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
    curriculumContextEn: 'Pharmaceutical synthesis demonstrating total oxidation of a primary alcohol followed by esterification of the phenolic OH group of salicylic acid.',
    curriculumContextAr: 'تخليق دوائي صيدلاني يوضح الأكسدة التامة لكحول أولي تليه أسترة مجموعة الهيدروكسيل الفينولية لحمض الساليسيليك.',
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
    curriculumContextEn: 'High-yield aromatic cycle in Egyptian curriculum: reduction with Zn powder, halogenation, alkaline hydrolysis, and triple nitration to synthesize picric acid.',
    curriculumContextAr: 'دورة أروماتية هامة: اختزال الفينول بمسحوق الخارصين، هلجنة، تحلل مائي قاعدي تحت ضغط وحرارة، ونيترة ثلاثية لإنتاج حمض البيكريك.',
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
    curriculumContextEn: 'Industrial alkene preparation via sulfuric acid dehydration at 180°C followed by Baeyer oxidation test producing dihydric alcohol.',
    curriculumContextAr: 'تحضير الألكينات في المختبر بنزع الماء عند ١٨٠°س يليها كشف باير بالأكسدة لتكوين كحول ثنائي الهيدروكسيل يزيل لون البرمنجنات.',
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
    explanationEn: 'Rule 1: Number from the end closer to the double bond (C=C takes strict priority over alkyl branches). C1 is the double bond, and the methyl branch is located at C3 -> 3-Methylbut-1-ene.',
    explanationAr: 'القاعدة الأولى: يبدأ الترقيم من الطرف الأقرب للرابطة المزدوجة بغض النظر عن موقع التفرعات؛ الرابطة المزدوجة عند C1 ومجموعة الميثيل عند C3 -> ٣- ميثيل بيوت-١-ين.',
    category: 'Alkenes',
  },
  {
    id: 'q2',
    structure: 'CH₃ - C(CH₃)₂ - CH₂ - CH(Cl) - CH₃',
    optionsEn: ['4-Chloro-2,2-dimethylpentane', '2-Chloro-4,4-dimethylpentane', '2,2-Dimethyl-4-chloropentane', '4-Chloropentane'],
    optionsAr: ['٤- كلورو-٢،٢- ثنائي ميثيل بنتان', '٢- كلورو-٤،٤- ثنائي ميثيل بنتان', '٢،٢- ثنائي ميثيل-٤- كلوروبنتان', '٤- كلوروبنتان'],
    correctIndex: 0,
    explanationEn: 'Number from the side that gives the lowest sum of locants: numbering from left gives 2,2-dimethyl and 4-chloro (sum = 2+2+4 = 8), while numbering from right gives 2-chloro and 4,4-dimethyl (sum = 2+4+4 = 10). Alphabetically, "Chloro" precedes "Methyl" -> 4-Chloro-2,2-dimethylpentane.',
    explanationAr: 'الترقيم من الطرف الذي يعطي أقل مجموع لأرقام ذرات الكربون البديلة (من اليسار: ٢+٢+٤ = ٨). وعند كتابة الاسم ترتب المجموعات أبجدياً باللاتينية: Chloro يسبق Methyl -> ٤- كلورو-٢،٢- ثنائي ميثيل بنتان.',
    category: 'Haloalkanes',
  },
  {
    id: 'q3',
    structure: 'CH₃ - CH(OH) - CH₂ - CH₃',
    optionsEn: ['Butan-2-ol (Secondary alcohol)', 'Butan-1-ol (Primary alcohol)', '2-Methylpropan-2-ol', 'sec-Butyl ether'],
    optionsAr: ['بيوتان-٢-ول (كحول ثانوي)', 'بيوتان-١-ول (كحول أولي)', '٢- ميثيل بروبان-٢-ول', 'إيثر ثنائي الإيثيل'],
    correctIndex: 0,
    explanationEn: 'The longest continuous carbon chain containing -OH has 4 carbons (butane). The -OH is on C2. The carbinol carbon is bonded to 1 hydrogen and 2 alkyl carbons -> Secondary Alcohol (Butan-2-ol).',
    explanationAr: 'أطول سلسلة متصلة تحوي مجموعة الهيدروكسيل ٤ ذرات كربون (بيوتان). تقع -OH على الكربون ٢. ذرة الكاربينول متصلة بذرة هيدروجين واحدة ومجموعتي ألكيل -> كحول ثانوي (بيوتان-٢-ول).',
    category: 'Alcohols',
  },
  {
    id: 'q4',
    structure: 'HC ≡ C - CH(C₂H₅) - CH₃',
    optionsEn: ['3-Methylpent-1-yne', '3-Ethylbut-1-yne', '2-Ethylbut-3-yne', 'Hex-1-yne'],
    optionsAr: ['٣- ميثيل بنت-١-ين', '٣- إيثيل بيوت-١-ين', '٢- إيثيل بيوت-٣-ين', 'هكس-١-ين'],
    correctIndex: 0,
    explanationEn: 'Selecting the longest chain containing the triple bond: C1≡C2 - C3(CH₃) - C4H₂ - C5H₃ has 5 carbons (pentyne)! The methyl group is at C3 -> 3-Methylpent-1-yne.',
    explanationAr: 'اختيار أطول سلسلة كربونية متصلة تحوي الرابطة الثلاثية: فك مجموعة الإيثيل C₂H₅ إلى -CH₂-CH₃ يجعل أطول سلسلة ٥ ذرات كربون (بنتـاين)، وتصبح مجموعة الميثيل تفرعاً عند C3 -> ٣- ميثيل بنت-١-ين.',
    category: 'Alkynes',
  },
  {
    id: 'q5',
    structure: 'CH₃ - CH(CH₃) - CHO',
    optionsEn: ['2-Methylpropanal', 'Isobutyric acid', '2-Methylpropan-1-one', 'Butanal'],
    optionsAr: ['٢- ميثيل بروبانال', 'حمض أيزوبيوتيريك', '٢- ميثيل بروبان-١-أون', 'بيوتانال'],
    correctIndex: 0,
    explanationEn: 'The carbonyl carbon of the aldehyde group (-CHO) is always designated as C1. A 3-carbon chain with a methyl branch at C2 -> 2-Methylpropanal.',
    explanationAr: 'ذرة كربون مجموعة الألدهيد (-CHO) تأخذ دائماً الرقم ١ في السلسلة. السلسلة ٣ ذرات (بروبانال) مع تفرع ميثيل على ذرة الكربون ٢ -> ٢- ميثيل بروبانال.',
    category: 'Aldehydes',
  },
  {
    id: 'q6',
    structure: 'CH₃ - CH₂ - CH(CH₃) - COOH',
    optionsEn: ['2-Methylbutanoic acid', '3-Methylbutanoic acid', '2-Ethylpropanoic acid', 'Pentanoic acid'],
    optionsAr: ['حمض ٢- ميثيل بيوتانويك', 'حمض ٣- ميثيل بيوتانويك', 'حمض ٢- إيثيل بروبانويك', 'حمض البنتانويك'],
    correctIndex: 0,
    explanationEn: 'The carboxyl group (-COOH) is numbered C1. The longest chain has 4 carbons (butanoic acid). Methyl branch is at C2 -> 2-Methylbutanoic acid.',
    explanationAr: 'تأخذ ذرة كربون مجموعة الكربوكسيل (-COOH) دائماً الرقم ١، وأطول سلسلة ٤ ذرات كربون (حمض بيوتانويك)، والميثيل عند الكربون ٢ -> حمض ٢- ميثيل بيوتانويك.',
    category: 'Carboxylic Acids',
  },
  {
    id: 'q7',
    structure: 'CH₃ - COO - CH(CH₃)₂',
    optionsEn: ['Isopropyl ethanoate (Isopropyl acetate)', 'Propyl ethanoate', 'Ethyl propanoate', 'Methyl isobutyrate'],
    optionsAr: ['إيثانوات الأيزوبروبيل (أسيتات الأيزوبروبيل)', 'إيثانوات البروبيل', 'بروبانوات الإيثيل', 'أيزوبيوتيرات الميثيل'],
    correctIndex: 0,
    explanationEn: 'Esters are named as Alkyl alkanoate: The acid portion (CH₃COO-) is ethanoate/acetate, and the alkyl group attached to oxygen (-CH(CH₃)₂) is isopropyl -> Isopropyl ethanoate.',
    explanationAr: 'تسمى الإسترات بنظام ألكانوات الألكيل: الشق الحامضي (CH₃COO-) مشتق من حمض الإيثانويك (إيثانوات)، والشق الكحولي المتصل بالأكسجين هو الأيزوبروبيل -> إيثانوات الأيزوبروبيل.',
    category: 'Esters',
  },
  {
    id: 'q8',
    structure: '1,4-Substituted Benzene: p-O₂N - C₆H₄ - CH₃',
    optionsEn: ['1-Methyl-4-nitrobenzene (p-Nitrotoluene)', '4-Methylnitrobenzene', '1-Nitro-4-methylbenzene', 'p-Nitroaniline'],
    optionsAr: ['١- ميثيل-٤- نيتروبنزين (بارا- نيتروتولوين)', '٤- ميثيل نيتروبنزين', '١- نيترو-٤- ميثيل بنزين', 'بارا- نيتروأنيلين'],
    correctIndex: 0,
    explanationEn: 'Derivatives of toluene: Toluene is the parent hydrocarbon (C1 = methyl). The nitro substituent is located at the para position (C4) -> 1-Methyl-4-nitrobenzene or p-Nitrotoluene.',
    explanationAr: 'تنسيب المركب إلى التولوين: ذرة الكربون المتصلة بمجموعة الميثيل تأخذ الرقم ١، ومجموعة النيترو تقع في الموضع ٤ (الموضع بارا) -> ١- ميثيل-٤- نيتروبنزين (بارا- نيتروتولوين).',
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
      { labelEn: 'IUPAC Systematic Nomenclature', labelAr: 'تسمية الأيوباك وتحدي الهياكل', value: 'nomenclature' },
    ],
    category: 'primary',
  },
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
  },
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
  },
  carbocationEnergyView: {
    key: 'carbocationEnergyView',
    labelEn: 'Energy Profile View',
    labelAr: 'عرض منحنى طاقة التنشيط',
    type: 'boolean',
    defaultValue: false,
    category: 'secondary',
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
  },
  catalystActive: {
    key: 'catalystActive',
    labelEn: 'Catalyst Active',
    labelAr: 'تشغيل العامل الحفاز',
    type: 'boolean',
    defaultValue: true,
    category: 'secondary',
  },
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
  },
  selectedOption: {
    key: 'selectedOption',
    labelEn: 'Selected Option',
    labelAr: 'الخيار المحدد',
    type: 'number',
    defaultValue: null as any,
    category: 'advanced',
  },
  showExplanation: {
    key: 'showExplanation',
    labelEn: 'Show Explanation',
    labelAr: 'عرض التفسير',
    type: 'boolean',
    defaultValue: false,
    category: 'advanced',
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
    id: 'ester_route',
    nameEn: 'Fischer Esterification Route',
    nameAr: 'تخليق إستر أسيتات الإيثيل (ميثان ➔ إستر)',
    descriptionEn: 'Methane cracking to acetylene, hydration to acetaldehyde, oxidation, and esterification.',
    descriptionAr: 'تكسير الميثان إلى أسيتيلين، هيدرة حفزية، أكسدة تامة، وقسطرة مع الإيثانول.',
    badge: 'Esterification',
    params: {
      subTab: 'roadmap',
      pathwayId: 'methane_to_ester',
      activeStep: 3,
      reactionProgress: 100,
      temperature: 80,
      catalystActive: true,
    },
  },
  {
    id: 'aspirin_route',
    nameEn: 'Aspirin Pharmaceutical Route',
    nameAr: 'التخليق الدوائي للأسبرين (إيثانول ➔ أسبرين)',
    descriptionEn: 'Ethanol complete oxidation to acetic acid and phenolic esterification with salicylic acid.',
    descriptionAr: 'أكسدة الإيثانول إلى حمض الأسيتيك وتفاعله مع حمض الساليسيليك لإنتاج الأسبرين.',
    badge: 'Pharmaceutical',
    params: {
      subTab: 'roadmap',
      pathwayId: 'ethanol_to_aspirin',
      activeStep: 1,
      reactionProgress: 100,
      temperature: 70,
      catalystActive: true,
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
  {
    id: 'baeyer_glycol',
    nameEn: "Baeyer's Test & Ethylene Glycol",
    nameAr: 'كشف باير وتحضير الإيثيلين جليكول',
    descriptionEn: 'Ethanol dehydration to ethylene and alkaline KMnO₄ oxidation discharging purple color.',
    descriptionAr: 'نزع ماء من الإيثانول للإيثين وتفاعل باير مع برمنجنات البوتاسيوم القلوية.',
    badge: 'Oxidation',
    params: {
      subTab: 'roadmap',
      pathwayId: 'alkane_alkene_glycol',
      activeStep: 1,
      reactionProgress: 100,
      temperature: 25,
      catalystActive: true,
    },
  },
];

// -------------------------------------------------------------
// POE PROMPTS: 3 CURRICULUM CHALLENGES
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
];

const ORGANIC_LAB_DEF: LabDefinition<OrganicParams, OrganicSimState> = {
  id: 'organic-chemistry-lab',
  subject: 'chemistry',
  chapterRef: 'Chapter 5: Organic Chemistry (الكيمياء العضوية)',
  titleEn: 'Organic Chemistry & Reaction Synthesis Workbench',
  titleAr: 'معمل الكيمياء العضوية ومسارات التخليق والتسمية النظامية',
  subtitleEn: 'Comprehensive Synthetic Roadmaps, Markovnikov Regioselectivity & IUPAC Systematic Nomenclature',
  subtitleAr: 'المخططات التخليقية الشاملة، قاعدة ماركونيكوف، وبنك تحدي التسمية النظامية للأيوباك',
  taglineEn: 'Tier-1 Organic Synthesis & Reaction Mechanism Workbench',
  taglineAr: 'المختبر العضوي التفاعلي الشامل وفق منهج الثانوية العامة',

  objectives: [
    {
      id: 'obj-roadmaps',
      textEn: 'Master multi-step conversions from inorganic/simple precursors to high-value aromatic and aliphatic products.',
      textAr: 'إتقان التحويلات العضوية متعددة المراحل من المركبات البسيطة إلى المنتجات الدوائية والمتفجرة والإسترات.',
      bloomLevel: 'apply',
    },
    {
      id: 'obj-markovnikov',
      textEn: 'Analyze carbocation stability (3° > 2° > 1°) governing Markovnikov addition to asymmetric alkenes.',
      textAr: 'تحليل استقرار الكاتيونات الكربونية الموجهة لقاعدة ماركونيكوف عند إضافة كواشف غير متماثلة.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj-iupac',
      textEn: 'Systematically deduce correct IUPAC nomenclature applying priority rules, locant sums, and alphabetical order.',
      textAr: 'تطبيق قواعد الأيوباك لتسمية المركبات العضوية واختيار أطول سلسلة وترتيب التفرعات أبجدياً.',
      bloomLevel: 'evaluate',
    },
  ],

  safetyWarnings: [
    {
      id: 'warn-explosive-tnt',
      titleEn: 'High Explosive & Flammable Reagents',
      titleAr: 'مركبات شديدة الانفجار ومواد سريعة الاشتعال',
      messageEn: 'TNT and picric acid are shock-sensitive high explosives. Acetylene and methane are highly flammable gases.',
      messageAr: 'مادتا TNT وحمض البيكريك من المتفجرات الحساسة، وغازات الأسيتيلين والميثان شديدة الاشتعال.',
      severity: 'danger',
    },
    {
      id: 'warn-conc-acids',
      titleEn: 'Corrosive Nitrating & Sulfuric Acids',
      titleAr: 'أحماض كاوية وخليط النيترة',
      messageEn: 'Concentrated HNO₃ and H₂SO₄ cause severe burns. Wear acid-resistant gloves and face shield.',
      messageAr: 'حمض الكبريتيك وحمض النيتريك المركز كاوية للجلد وتتطلب ارتداء القفازات الواقية.',
      severity: 'warning',
    },
  ],

  keyFormulas: [
    {
      id: 'eq-markovnikov',
      labelEn: "Markovnikov's Addition Formula",
      labelAr: 'قاعدة ماركونيكوف للإضافة غير المتماثلة',
      tex: '\\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{HBr} \\to \\text{CH}_3\\text{CH(Br)CH}_3',
      descriptionEn: 'The electrophile H⁺ attaches to the carbon with more hydrogen atoms to yield a stable secondary carbocation.',
      descriptionAr: 'يضاف الهيدروجين إلى ذرة الكربون غير المشبعة الأكثر هيدروجيناً لتكوين الكاتيون الكربوني الثانوي الأكثر ثباتاً.',
    },
    {
      id: 'eq-esterification',
      labelEn: 'Fischer Esterification Equilibrium',
      labelAr: 'اتزان تفاعل القسطرة العضوي',
      tex: '\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{\\text{H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}',
      descriptionEn: 'Reversible condensation between carboxylic acid and alcohol using conc. H₂SO₄ as dehydrating agent.',
      descriptionAr: 'تفاعل تكاثف عكوس بين حمض كربوكسيلي وكحول في وجود حمض كبريتيك مركز نازع للماء لمنع التفاعل العكسي.',
    },
    {
      id: 'eq-trimerization',
      labelEn: 'Cyclic Trimerization of Ethyne',
      labelAr: 'البلمرة الثلاثية الحلقية للأسيتيلين',
      tex: '3\\text{C}_2\\text{H}_2 \\xrightarrow{\\text{Ni / Red heat}} \\text{C}_6\\text{H}_6',
      descriptionEn: 'Trimerization of three ethyne molecules into an aromatic benzene ring in a red-hot nickel tube.',
      descriptionAr: 'بلمرة حلقية لثلاثة جزيئات من الإيثاين لتكوين حلقة البنزين العطري في أنبوبة نيكل مسخنة للاحمرار.',
    },
  ],

  defaultParams: INITIAL_PARAMS,
  paramSchema: ORGANIC_PARAM_SCHEMA,
  presets: ORGANIC_PRESETS,
  poePrompts: ORGANIC_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Reaction Coordinate',
    xLabelAr: 'مسار التفاعل',
    xUnit: 'Step',
    yLabelEn: 'Potential Energy',
    yLabelAr: 'طاقة الوضع',
    yUnit: 'kJ/mol',
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
      };
    }

    if (params.subTab === 'markovnikov') {
      const isTertiary = params.alkeneType === 'methylpropene';
      const bp = params.alkeneType === 'propene'
        ? (params.reagent === 'HBr' ? 59.4 : params.reagent === 'HCl' ? 35.7 : 82.6)
        : params.alkeneType === 'methylpropene'
        ? (params.reagent === 'HBr' ? 73.3 : params.reagent === 'HCl' ? 51.0 : 82.4)
        : (params.reagent === 'HBr' ? 91.2 : params.reagent === 'HCl' ? 68.3 : 99.5);

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
        activationEnergyEa: isTertiary ? 38 : 46, // Tertiary carbocation has lower Ea than secondary
        reactionEnthalpyDeltaH: -82,
        isMajorPathway: true,
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
    };
  }, [params.subTab, activeStepData, params.alkeneType, params.reagent, params.reactionProgress]);

  // Telemetry metrics
  const telemetry = useMemo<LabTelemetryMetric[]>(() => {
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
  }, [simState]);

  // Multimeter reading for digital thermometer / physical properties
  const multimeterReading: DMMReading = useMemo(() => ({
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
  }), [simState]);

  // Dual-trace oscilloscope
  const oscilloscopeCh1: WaveformSignal = useMemo(() => ({
    id: 'ch1',
    label: isArabic ? `طيف امتصاص IR (${simState.irPeakWavenumber} سم⁻¹)` : `IR Absorbance (${simState.irPeakWavenumber} cm⁻¹)`,
    color: '#38bdf8',
    amplitude: 3.5,
    frequency: 2.0,
    phase: 0,
    phaseDeg: 0,
    type: 'triangle',
  }), [simState.irPeakWavenumber, isArabic]);

  const oscilloscopeCh2: WaveformSignal = useMemo(() => ({
    id: 'ch2',
    label: isArabic ? `منحنى طاقة التنشيط (Ea = ${simState.activationEnergyEa} kJ/mol)` : `Potential Energy (Ea = ${simState.activationEnergyEa} kJ/mol)`,
    color: '#f59e0b',
    amplitude: 2.5,
    frequency: 1.0,
    phase: 0,
    phaseDeg: 0,
    type: 'sine',
  }), [simState.activationEnergyEa, isArabic]);

  // -------------------------------------------------------------
  // CANVAS 2D RENDERING ENGINE (60 - 120 FPS HIGH DPI)
  // -------------------------------------------------------------
  const renderSimulation = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _viewport: LabViewportState,
      _dpr: number
    ) => {
      // Clear viewport
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

        // Card container for reaction stage
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

        // Reactant -> Reagents/Catalyst -> Product representation
        const reactantBoxX = cardX + 30;
        const reactantBoxY = cardY + 70;
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

        // Product Box
        ctx.fillStyle = isLight ? '#ecfdf5' : 'rgba(6, 78, 59, 0.25)';
        ctx.strokeStyle = '#10b981';
        ctx.beginPath();
        ctx.roundRect(productBoxX, productBoxY, reactantBoxW, reactantBoxH, 12);
        ctx.fill();
        ctx.stroke();

        // Draw Reactant Label
        ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic ? 'المادة البادئة / المتفاعلات' : 'Reactant Precursor',
          reactantBoxX + reactantBoxW / 2,
          reactantBoxY + 30
        );

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = '900 18px "JetBrains Mono", monospace';
        const startFormula = activeStepData.stepNumber === 1
          ? (activePathway.id === 'carbide_to_tnt' ? 'CaC₂' : activePathway.id === 'methane_to_ester' ? 'CH₄' : 'C₂H₅OH')
          : activePathway.steps[activeStepData.stepNumber - 2].productFormula;
        ctx.fillText(startFormula, reactantBoxX + reactantBoxW / 2, reactantBoxY + 75);

        // Draw Product Label
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillText(
          isArabic ? 'المركب الناتج في هذه المرحلة' : 'Stage Resulting Product',
          productBoxX + reactantBoxW / 2,
          productBoxY + 30
        );

        ctx.fillStyle = '#38bdf8';
        ctx.font = '900 20px "JetBrains Mono", monospace';
        ctx.fillText(activeStepData.productFormula, productBoxX + reactantBoxW / 2, productBoxY + 75);

        ctx.fillStyle = isLight ? '#334155' : '#cbd5e1';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.fillText(
          isArabic ? activeStepData.productNameAr : activeStepData.productNameEn,
          productBoxX + reactantBoxW / 2,
          productBoxY + 110
        );

        // Central Reaction Arrow & Catalyst/Conditions
        const arrowStartX = reactantBoxX + reactantBoxW + 15;
        const arrowEndX = productBoxX - 15;
        const arrowY = reactantBoxY + reactantBoxH / 2;

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(arrowStartX, arrowY);
        ctx.lineTo(arrowEndX, arrowY);
        ctx.stroke();

        // Arrowhead
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.moveTo(arrowEndX, arrowY);
        ctx.lineTo(arrowEndX - 10, arrowY - 6);
        ctx.lineTo(arrowEndX - 10, arrowY + 6);
        ctx.closePath();
        ctx.fill();

        // Conditions above and below arrow
        ctx.fillStyle = '#f59e0b'; // Amber
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        const reagentLabel = isArabic ? activeStepData.reagentAr : activeStepData.reagentEn;
        ctx.fillText(reagentLabel, (arrowStartX + arrowEndX) / 2, arrowY - 14);

        ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
        ctx.font = '10px Inter, sans-serif';
        const conditionsLabel = isArabic ? activeStepData.conditionsAr : activeStepData.conditionsEn;
        ctx.fillText(conditionsLabel.substring(0, 36) + (conditionsLabel.length > 36 ? '...' : ''), (arrowStartX + arrowEndX) / 2, arrowY + 20);

        // Balanced equation at bottom of card
        ctx.fillStyle = isLight ? '#0f172a' : '#f1f5f9';
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(
          `[Tb = ${activeStepData.boilingPointC}°C]  |  [IR = ${activeStepData.primaryIrPeak} cm⁻¹: ${isArabic ? activeStepData.irLabelAr : activeStepData.irLabelEn}]`,
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
          // Potential Energy Coordinate Curve (Major vs Minor Pathways)
          const marginL = 80;
          const marginR = width - 60;
          const marginB = height - 60;
          const marginT = 70;

          // Axes
          ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(marginL, marginT);
          ctx.lineTo(marginL, marginB);
          ctx.lineTo(marginR, marginB);
          ctx.stroke();

          // Axis Labels
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
          ctx.fillText(
            isArabic ? 'طاقة الوضع (kJ/mol)' : 'Potential Energy (kJ/mol)',
            0,
            0
          );
          ctx.restore();

          // Reactants baseline
          const rY = marginB - 60;
          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 12px "JetBrains Mono", monospace';
          ctx.textAlign = 'left';
          ctx.fillText(
            params.alkeneType === 'propene' ? 'CH₃-CH=CH₂ + HX' : '(CH₃)₂C=CH₂ + HX',
            marginL + 15,
            rY - 10
          );

          // Major Pathway (Markovnikov, 2° or 3° carbocation): Lower barrier
          const majorPeakY = marginT + (isTertiary ? 45 : 70);
          const majorValleyY = majorPeakY + 35;
          const majorProductY = rY + 40; // Exothermic (-82 kJ/mol)

          ctx.strokeStyle = '#10b981'; // Green major
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(marginL + 20, rY);
          ctx.bezierCurveTo(
            marginL + 120, rY,
            marginL + 160, majorPeakY,
            marginL + 220, majorPeakY
          );
          ctx.bezierCurveTo(
            marginL + 260, majorPeakY,
            marginL + 280, majorValleyY,
            marginL + 330, majorValleyY
          );
          ctx.bezierCurveTo(
            marginL + 370, majorValleyY,
            marginL + 400, majorPeakY + 20,
            marginL + 450, majorPeakY + 20
          );
          ctx.bezierCurveTo(
            marginL + 480, majorPeakY + 20,
            marginL + 520, majorProductY,
            marginR - 20, majorProductY
          );
          ctx.stroke();

          // Minor Pathway (Anti-Markovnikov, 1° carbocation): Much higher barrier
          const minorPeakY = marginT + 15; // Higher Ea
          const minorValleyY = minorPeakY + 30;
          const minorProductY = majorProductY + 15;

          ctx.strokeStyle = '#f43f5e'; // Red dashed minor
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(marginL + 20, rY);
          ctx.bezierCurveTo(
            marginL + 120, rY,
            marginL + 160, minorPeakY,
            marginL + 220, minorPeakY
          );
          ctx.bezierCurveTo(
            marginL + 260, minorPeakY,
            marginL + 280, minorValleyY,
            marginL + 330, minorValleyY
          );
          ctx.bezierCurveTo(
            marginL + 370, minorValleyY,
            marginL + 400, minorPeakY + 20,
            marginL + 450, minorPeakY + 20
          );
          ctx.bezierCurveTo(
            marginL + 480, minorPeakY + 20,
            marginL + 520, minorProductY,
            marginR - 20, minorProductY
          );
          ctx.stroke();
          ctx.setLineDash([]); // Reset line dash

          // Annotations on curve
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

          // Activation energy legend
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
          // Molecular Mechanism View (Atoms, Bonds, and Curved Arrow Attack)
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

          // Alkene formula box
          ctx.fillStyle = '#1e293b';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(centerX - 180, centerY - 50, 360, 100, 16);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#f59e0b';
          ctx.font = '900 22px "JetBrains Mono", monospace';
          const alkeneDisplay = params.alkeneType === 'propene'
            ? 'CH₃ - CH = CH₂'
            : params.alkeneType === 'methylpropene'
            ? '(CH₃)₂C = CH₂'
            : 'CH₃ - CH₂ - CH = CH₂';
          ctx.fillText(alkeneDisplay, centerX, centerY + 8);

          // Arrow indicating H+ attaching to CH2
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
      // RENDER MODE 3: IUPAC SYSTEMATIC NOMENCLATURE
      // ---------------------------------------------------------
      else if (params.subTab === 'nomenclature') {
        const currentQ = IUPAC_QUIZ[params.currentQuizIndex % IUPAC_QUIZ.length];
        const centerX = width / 2;
        const centerY = height / 2 - 30;

        // Structure highlight box
        const boxW = Math.min(width - 60, 620);
        const boxH = 140;
        ctx.fillStyle = isLight ? '#f8fafc' : '#0f172a';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(centerX - boxW / 2, centerY - boxH / 2, boxW, boxH, 16);
        ctx.fill();
        ctx.stroke();

        // Category pill
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

        // Chemical formula
        ctx.fillStyle = '#f59e0b';
        ctx.font = '900 22px "JetBrains Mono", monospace';
        ctx.fillText(currentQ.structure, centerX, centerY + 8);

        // Longest chain guidance hint
        ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
        ctx.font = '12px Inter, sans-serif';
        ctx.fillText(
          isArabic
            ? 'تحديد أطول سلسلة كربونية متصلة وترقيمها من الطرف الأقرب للمجموعة الوظيفية'
            : 'Find longest continuous chain; number from the end nearest functional group',
          centerX,
          centerY + 45
        );
      }
    },
    [params.subTab, params.carbocationEnergyView, params.alkeneType, params.reagent, params.currentQuizIndex, activeStepData, activePathway, isLight, isArabic, simState.activationEnergyEa, simState.boilingPointC, simState.irPeakWavenumber]
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
      currentXValue={params.temperature}
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
                  {isArabic ? 'قاعدة ماركونيكوف ومسار طاقة التنشيط' : "Markovnikov's Regioselectivity & Ea"}
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
        </div>
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Dynamic Canvas Simulation Viewport */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg bg-slate-950">
          <CanvasSimulationViewport
            id="organic-workbench-viewport"
            lang={lang ?? 'ar'}
            aspectRatio="aspect-[16/10]"
            minHeight={420}
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
                  onClick={() =>
                    updateParam('carbocationEnergyView', !params.carbocationEnergyView)
                  }
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
              <span className="text-xs font-bold text-slate-400">
                {activeStepData.productFormula}
              </span>
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
                    updateParam(
                      'activeStep',
                      Math.min(activePathway.steps.length - 1, params.activeStep + 1)
                    )
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
