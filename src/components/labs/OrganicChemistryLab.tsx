import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  FlaskConical,
  GitBranch,
  Atom,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Flame,
  Layers,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface SynthesisStep {
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
}

interface Pathway {
  id: string;
  titleEn: string;
  titleAr: string;
  startMaterialEn: string;
  startMaterialAr: string;
  targetProductEn: string;
  targetProductAr: string;
  steps: SynthesisStep[];
}

const ORGANIC_PATHWAYS: Pathway[] = [
  {
    id: 'carbide_to_tnt',
    titleEn: 'From Calcium Carbide to TNT Explosive',
    titleAr: 'من كاربيد الكالسيوم إلى مادة TNT المتفجرة',
    startMaterialEn: 'Calcium Carbide (CaC₂)',
    startMaterialAr: 'كاربيد الكالسيوم (CaC₂)',
    targetProductEn: '2,4,6-Trinitrotoluene (TNT)',
    targetProductAr: 'ثلاثي نيتروتولوين (TNT)',
    steps: [
      {
        stepNumber: 1,
        reagentEn: 'Water (H₂O) dropwise',
        reagentAr: 'تنقيط الماء البارد (H₂O)',
        conditionsEn: 'Through acidified CuSO₄ wash bottle',
        conditionsAr: 'المرور على كبريتات نحاس في حمض كبريتيك لإزالة الشوائب',
        reactionTypeEn: 'Hydrolysis',
        reactionTypeAr: 'تنقيط ماء (تحلل مائي)',
        productFormula: 'HC≡CH',
        productNameEn: 'Ethyne (Acetylene)',
        productNameAr: 'الإيثاين (الأسيتيلين)',
      },
      {
        stepNumber: 2,
        reagentEn: 'Cyclic Trimerization',
        reagentAr: 'بلمرة ثلاثية حلقية',
        conditionsEn: 'Red-hot nickel tube (Heat)',
        conditionsAr: 'أنبوبة نيكل مسخنة لدرجة الاحمرار',
        reactionTypeEn: 'Cyclic Polymerization',
        reactionTypeAr: 'بلمرة حلقية',
        productFormula: 'C₆H₆',
        productNameEn: 'Benzene',
        productNameAr: 'البنزين العطري',
      },
      {
        stepNumber: 3,
        reagentEn: 'Chloromethane (CH₃Cl)',
        reagentAr: 'كلوريد الميثيل (CH₃Cl)',
        conditionsEn: 'Anhydrous AlCl₃ (Friedel-Crafts)',
        conditionsAr: 'كلوريد ألومنيوم لامائي (تفاعل فريدل-كرافتس)',
        reactionTypeEn: 'Electrophilic Alkylation',
        reactionTypeAr: 'ألكلة أوروماتية',
        productFormula: 'C₆H₅-CH₃',
        productNameEn: 'Toluene (Methylbenzene)',
        productNameAr: 'التولوين (ميثيل بنزين)',
      },
      {
        stepNumber: 4,
        reagentEn: 'Nitrating Mixture: 3 HNO₃ + conc. H₂SO₄',
        reagentAr: 'خليط النيترة: ٣ حمض نيتريك + كبريتيك مركز',
        conditionsEn: 'Heating at 50°C',
        conditionsAr: 'تسخين عند ٥٠°س',
        reactionTypeEn: 'Electrophilic Nitration',
        reactionTypeAr: 'نيترة ثلاثية (مواقع أورثو وبارا)',
        productFormula: 'C₆H₂(CH₃)(NO₂)₃',
        productNameEn: '2,4,6-Trinitrotoluene (TNT)',
        productNameAr: 'ثلاثي نيتروتولوين (TNT شديد الانفجار)',
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
    steps: [
      {
        stepNumber: 1,
        reagentEn: 'Thermal Cracking & Rapid Quenching',
        reagentAr: 'تسخين شديد وتبريد سريع',
        conditionsEn: '1500°C followed by rapid quenching in water',
        conditionsAr: '١٥٠٠°س ثم تبريد فوري سريع بالماء',
        reactionTypeEn: 'Pyrolysis',
        reactionTypeAr: 'تكسير حراري وتبريد',
        productFormula: 'HC≡CH',
        productNameEn: 'Acetylene (Ethyne)',
        productNameAr: 'الإيثاين',
      },
      {
        stepNumber: 2,
        reagentEn: 'Catalytic Hydration: H₂O',
        reagentAr: 'هيدرة حفزية: إضافة الماء',
        conditionsEn: '40% H₂SO₄, 1% HgSO₄ at 60°C',
        conditionsAr: 'حمض كبريتيك ٤٠٪ وكبريتات زئبقيك HgSO₄ عند ٦٠°س',
        reactionTypeEn: 'Electrophilic Addition & Tautomerization',
        reactionTypeAr: 'هيدرة حفزية وتطاير كحول الفاينيل',
        productFormula: 'CH₃-CHO',
        productNameEn: 'Acetaldehyde (Ethanal)',
        productNameAr: 'الأسيتالدهيد (إيثانال)',
      },
      {
        stepNumber: 3,
        reagentEn: 'Oxidation: acidified KMnO₄ or K₂Cr₂O₇',
        reagentAr: 'أكسدة: برمنجنات بوتاسيوم محمضة بحمض الكبريتيك',
        conditionsEn: 'Room temperature oxidation',
        conditionsAr: 'أكسدة الألدهيد إلى حمض كربوكسيلي',
        reactionTypeEn: 'Oxidation',
        reactionTypeAr: 'أكسدة تامة',
        productFormula: 'CH₃-COOH',
        productNameEn: 'Acetic Acid (Ethanoic acid)',
        productNameAr: 'حمض الأسيتيك (الخل)',
      },
      {
        stepNumber: 4,
        reagentEn: 'Ethanol (C₂H₅OH) + conc. H₂SO₄',
        reagentAr: 'كحول إيثيلي (إيثانول) + حمض كبريتيك مركز',
        conditionsEn: 'Boiling water bath with dehydrating agent',
        conditionsAr: 'حمام مائي ووسط نازع للماء لمنع التفاعل العكسي',
        reactionTypeEn: 'Fischer Esterification',
        reactionTypeAr: 'قسطرة ونزع ماء',
        productFormula: 'CH₃COOC₂H₅',
        productNameEn: 'Ethyl Acetate (Fruity aroma)',
        productNameAr: 'إستر أسيتات الإيثيل (رائحة الفواكه)',
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
    steps: [
      {
        stepNumber: 1,
        reagentEn: 'Controlled Oxidation [O]',
        reagentAr: 'أكسدة تامة بمحلول ثاني كرومات البوتاسيوم المحمضة',
        conditionsEn: 'Acidified K₂Cr₂O₇ with heating (orange to green)',
        conditionsAr: 'تحول اللون البرتقالي إلى الأخضر لتكون Cr³⁺',
        reactionTypeEn: 'Oxidation',
        reactionTypeAr: 'أكسدة الكحول الأولي إلى حمض',
        productFormula: 'CH₃-COOH',
        productNameEn: 'Acetic Acid (Ethanoic Acid)',
        productNameAr: 'حمض الأسيتيك',
      },
      {
        stepNumber: 2,
        reagentEn: 'Salicylic Acid (o-hydroxybenzoic acid)',
        reagentAr: 'حمض الساليسيليك (أورثو هيدروكسي حمض البنزويك)',
        conditionsEn: 'Drops of conc. H₂SO₄ as catalyst',
        conditionsAr: 'تفاعل مجموعة الهيدروكسيل الفينولية مع حمض الأسيتيك',
        reactionTypeEn: 'Phenolic Esterification',
        reactionTypeAr: 'أسترة فينولية',
        productFormula: 'C₆H₄(COOH)(OCOCH₃)',
        productNameEn: 'Acetylsalicylic Acid (Aspirin)',
        productNameAr: 'حمض أسيتيل ساليسيليك (الأسبرين)',
      },
    ],
  },
];

interface QuizQuestion {
  id: string;
  structure: string;
  optionsEn: string[];
  optionsAr: string[];
  correctIndex: number;
  explanationEn: string;
  explanationAr: string;
  category: string;
}

const IUPAC_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    structure: 'CH₃ - CH(CH₃) - CH = CH₂',
    optionsEn: ['3-Methylbut-1-ene', '2-Methylbut-3-ene', '3-Methylbutene', 'Pent-1-ene'],
    optionsAr: ['٣- ميثيل بيوت-١-ين', '٢- ميثيل بيوت-٣-ين', '٣- ميثيل بيوتين', 'بنت-١-ين'],
    correctIndex: 0,
    explanationEn: 'Number from the side nearest to the double bond (C=C takes priority over alkyl branch): C1 is the double bond, methyl branch at C3.',
    explanationAr: 'يبدأ الترقيم من الطرف الأقرب للرابطة المزدوجة بغض النظر عن موقع التفرع: الرابطة عند ذرة الكربون ١، ومجموعة الميثيل عند ذرة الكربون ٣.',
    category: 'Alkenes',
  },
  {
    id: 'q2',
    structure: 'CH₃ - C(CH₃)₂ - CH₂ - CH(Cl) - CH₃',
    optionsEn: ['4-Chloro-2,2-dimethylpentane', '2-Chloro-4,4-dimethylpentane', '2,2-Dimethyl-4-chloropentane', '4-Chloropentane'],
    optionsAr: ['٤- كلورو-٢،٢- ثنائي ميثيل بنتان', '٢- كلورو-٤،٤- ثنائي ميثيل بنتان', '٢،٢- ثنائي ميثيل-٤- كلوروبنتان', '٤- كلوروبنتان'],
    correctIndex: 1,
    explanationEn: 'Number from left or right to give the lowest sum of locants: numbering from right gives 2-chloro and 4,4-dimethyl (sum = 2+4+4 = 10). From left: 2,2-dimethyl and 4-chloro (sum = 2+2+4 = 8). Alphabetically: 4-chloro comes before dimethyl!',
    explanationAr: 'الترقيم من الطرف الذي يعطي أقل مجموع لأرقام التفرعات (٢+٢+٤ = ٨ من اليسار). وعند الكتابة ترتب المجموعات أبجدياً باللاتينية: الكلورو (Chloro) قبل الميثيل (Methyl): ٤- كلورو-٢،٢- ثنائي ميثيل بنتان.',
    category: 'Alkanes',
  },
  {
    id: 'q3',
    structure: 'CH₃ - CH(OH) - CH₂ - CH₃',
    optionsEn: ['Butan-2-ol (Secondary alcohol)', 'Butan-1-ol (Primary alcohol)', '2-Methylpropan-2-ol', 'sec-Butyl ether'],
    optionsAr: ['بيوتان-٢-ول (كحول ثانوي)', 'بيوتان-١-ول (كحول أولي)', '٢- ميثيل بروبان-٢-ول', 'إيثر ثنائي الإيثيل'],
    correctIndex: 0,
    explanationEn: 'Longest continuous carbon chain containing -OH has 4 carbons (butane). -OH is at C2. The carbinol carbon is attached to 1 hydrogen and 2 carbons -> Secondary Alcohol.',
    explanationAr: 'أطول سلسلة كربونية تحوي مجموعة الهيدروكسيل ٤ ذرات كربون (بيوتان). تقع -OH على الكربون ٢. ذرة الكاربينول متصلة بذرتي كربون وهيدروجينة واحدة -> كحول ثانوي.',
    category: 'Alcohols',
  },
];

export const OrganicChemistryLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [subTab, setSubTab] = useState<'roadmap' | 'markovnikov' | 'nomenclature'>('roadmap');

  // Roadmap State
  const [selectedPathway, setSelectedPathway] = useState<Pathway>(ORGANIC_PATHWAYS[0]);
  const [activeStep, setActiveStep] = useState<number>(0);

  // Markovnikov State
  const [alkeneType, setAlkeneType] = useState<'propene' | 'methylpropene'>('propene');
  const [reagent, setReagent] = useState<'HBr' | 'H2O'>('HBr');

  // Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleQuizAnswer = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === IUPAC_QUIZ[currentQuizIndex].correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setCurrentQuizIndex((prev) => (prev + 1) % IUPAC_QUIZ.length);
  };

  return (
    <div
      className={`p-6 rounded-2xl border transition-all ${
        isContrast
          ? 'bg-black border-cyan-400 text-white'
          : isLight
          ? 'bg-white border-slate-300 shadow-xl text-slate-900'
          : 'bg-slate-900/90 border-slate-800 text-slate-100'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-700/60 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
            <FlaskConical className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black tracking-tight">
                {isArabic ? 'معمل الكيمياء العضوية ومسارات التخليق الذكية' : 'Organic Chemistry & Reaction Synthesis Lab'}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {isArabic ? 'الوحدة الخامسة (٣٥٪ من الامتحان)' : 'High-Yield Unit 5'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'خريطة التحويلات والتفاعلات العضوية، محاكي قاعدة ماركونيكوف، ومختبر التسمية النظامية IUPAC'
                : 'Synthetic roadmap visualizer, Markovnikov addition simulator, and IUPAC nomenclature analyzer'}
            </p>
          </div>
        </div>

        {/* Sub-Tabs */}
        <div
          className={`flex items-center p-1 rounded-xl border ${
            isContrast
              ? 'bg-black border-cyan-400'
              : isLight
              ? 'bg-slate-100 border-slate-300'
              : 'bg-slate-950 border-slate-800'
          }`}
        >
          <button
            onClick={() => setSubTab('roadmap')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              subTab === 'roadmap'
                ? 'bg-emerald-600 text-white shadow-sm font-black'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>{isArabic ? 'خريطة التحويلات' : 'Reaction Roadmap'}</span>
          </button>

          <button
            onClick={() => setSubTab('markovnikov')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              subTab === 'markovnikov'
                ? 'bg-emerald-600 text-white shadow-sm font-black'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Atom className="w-3.5 h-3.5" />
            <span>{isArabic ? 'قاعدة ماركونيكوف' : 'Markovnikov Rule'}</span>
          </button>

          <button
            onClick={() => setSubTab('nomenclature')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              subTab === 'nomenclature'
                ? 'bg-emerald-600 text-white shadow-sm font-black'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isArabic ? 'تسمية IUPAC' : 'IUPAC Naming'}</span>
          </button>
        </div>
      </div>

      {/* SUBTAB 1: SYNTHETIC REACTION ROADMAP */}
      {subTab === 'roadmap' && (
        <div className="space-y-6">
          {/* Pathway Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400">
              {isArabic ? 'اختر مسار التحويل:' : 'Select Synthesis Pathway:'}
            </span>
            {ORGANIC_PATHWAYS.map((pathway) => (
              <button
                key={pathway.id}
                onClick={() => {
                  setSelectedPathway(pathway);
                  setActiveStep(0);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  selectedPathway.id === pathway.id
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm'
                    : isLight
                    ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                    : 'border-slate-800 hover:bg-slate-800 text-slate-400'
                }`}
              >
                {isArabic ? pathway.titleAr : pathway.titleEn}
              </button>
            ))}
          </div>

          {/* Overview Banner */}
          <div
            className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/60 border-slate-700/70'
            }`}
          >
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                {isArabic ? 'المادة البادئة ➔ الناتج النهائي المستهدف:' : 'Starting Reactant ➔ Target Product:'}
              </span>
              <div className="flex items-center gap-2 mt-1 font-mono text-sm font-black">
                <span className="text-cyan-400">
                  {isArabic ? selectedPathway.startMaterialAr : selectedPathway.startMaterialEn}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-500 rtl:rotate-180" />
                <span className="text-emerald-400">
                  {isArabic ? selectedPathway.targetProductAr : selectedPathway.targetProductEn}
                </span>
              </div>
            </div>

            <div className="text-xs font-bold text-slate-400">
              <span>{isArabic ? `عدد المراحل: ${selectedPathway.steps.length}` : `Stages: ${selectedPathway.steps.length}`}</span>
            </div>
          </div>

          {/* Stepper Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {selectedPathway.steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border text-start transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-emerald-950/50 border-emerald-500 shadow-md ring-1 ring-emerald-500/40'
                      : isLight
                      ? 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      : 'bg-slate-800/40 border-slate-700/80 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {isArabic ? `المرحلة ${step.stepNumber}` : `Step ${step.stepNumber}`}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      {isArabic ? step.reactionTypeAr : step.reactionTypeEn}
                    </span>
                  </div>

                  <div className="font-mono text-xs font-black text-amber-400 mb-1">
                    {step.productFormula}
                  </div>
                  <div className="text-xs font-bold text-slate-200 line-clamp-1">
                    {isArabic ? step.productNameAr : step.productNameEn}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          {selectedPathway.steps[activeStep] && (
            <div
              className={`p-5 rounded-2xl border ${
                isLight ? 'bg-slate-50 border-slate-300' : 'bg-slate-800/80 border-emerald-800/50'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-4">
                <h4 className="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  <span>
                    {isArabic
                      ? `تفاصيل التفاعل الكيميائي - المرحلة ${selectedPathway.steps[activeStep].stepNumber}:`
                      : `Reaction Mechanism - Step ${selectedPathway.steps[activeStep].stepNumber}:`}
                  </span>
                </h4>
                <span className="text-xs font-bold text-slate-400">
                  {isArabic
                    ? selectedPathway.steps[activeStep].reactionTypeAr
                    : selectedPathway.steps[activeStep].reactionTypeEn}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 block">
                    {isArabic ? 'الكاشف والمواد المضافة:' : 'Reagents & Reactants:'}
                  </span>
                  <div className="text-xs font-black text-cyan-300">
                    {isArabic
                      ? selectedPathway.steps[activeStep].reagentAr
                      : selectedPathway.steps[activeStep].reagentEn}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 block">
                    {isArabic ? 'شروط التفاعل والعوامل الحفازة:' : 'Reaction Conditions & Catalysts:'}
                  </span>
                  <div className="text-xs font-black text-amber-300">
                    {isArabic
                      ? selectedPathway.steps[activeStep].conditionsAr
                      : selectedPathway.steps[activeStep].conditionsEn}
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-emerald-300 block">
                    {isArabic ? 'المركب الناتج في هذه الخطوة:' : 'Resulting Product at this Step:'}
                  </span>
                  <div className="text-sm font-black text-white font-mono mt-0.5">
                    {selectedPathway.steps[activeStep].productFormula}{' '}
                    <span className="text-xs font-sans text-emerald-300 font-normal">
                      ({isArabic
                        ? selectedPathway.steps[activeStep].productNameAr
                        : selectedPathway.steps[activeStep].productNameEn})
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-700 disabled:opacity-30 cursor-pointer"
                  >
                    {isArabic ? 'السابق' : 'Previous'}
                  </button>
                  <button
                    disabled={activeStep === selectedPathway.steps.length - 1}
                    onClick={() =>
                      setActiveStep((prev) => Math.min(selectedPathway.steps.length - 1, prev + 1))
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
      )}

      {/* SUBTAB 2: MARKOVNIKOV RULE INTERACTIVE MECHANISM */}
      {subTab === 'markovnikov' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Controls (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/70 border-slate-700/80'
                }`}
              >
                <label className="text-xs font-bold text-slate-400 block mb-2">
                  {isArabic ? '١. اختر الألكين غير المتماثل:' : '1. Choose Asymmetric Alkene:'}
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setAlkeneType('propene')}
                    className={`w-full p-2.5 rounded-lg text-xs font-bold border text-start cursor-pointer transition-all ${
                      alkeneType === 'propene'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className="font-mono font-black text-amber-300">CH₃ - CH = CH₂</div>
                    <div className="text-[11px] mt-0.5">
                      {isArabic ? 'البروبين (ذرة بها H واحدة وأخرى بها H₂)' : 'Propene (1 H vs 2 H)'}
                    </div>
                  </button>

                  <button
                    onClick={() => setAlkeneType('methylpropene')}
                    className={`w-full p-2.5 rounded-lg text-xs font-bold border text-start cursor-pointer transition-all ${
                      alkeneType === 'methylpropene'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className="font-mono font-black text-amber-300">(CH₃)₂C = CH₂</div>
                    <div className="text-[11px] mt-0.5">
                      {isArabic ? '٢- ميثيل بروبين (ذرة خالية من H وأخرى بها H₂)' : '2-Methylpropene (0 H vs 2 H)'}
                    </div>
                  </button>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/70 border-slate-700/80'
                }`}
              >
                <label className="text-xs font-bold text-slate-400 block mb-2">
                  {isArabic ? '٢. اختر الكاشف غير المتماثل:' : '2. Choose Asymmetric Reagent:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setReagent('HBr')}
                    className={`p-2.5 rounded-lg text-xs font-bold border text-center cursor-pointer transition-all ${
                      reagent === 'HBr'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className="font-mono font-black text-cyan-300">H⁺ - Br⁻</div>
                    <div className="text-[10px] mt-0.5">
                      {isArabic ? 'بروميد الهيدروجين' : 'Hydrogen Bromide'}
                    </div>
                  </button>

                  <button
                    onClick={() => setReagent('H2O')}
                    className={`p-2.5 rounded-lg text-xs font-bold border text-center cursor-pointer transition-all ${
                      reagent === 'H2O'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className="font-mono font-black text-cyan-300">H⁺ - OH⁻</div>
                    <div className="text-[10px] mt-0.5">
                      {isArabic ? 'هيدرة حفزية (ماء)' : 'Hydration (H₂O)'}
                    </div>
                  </button>
                </div>
              </div>

              {/* Rule Summary */}
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200">
                <div className="font-black mb-1 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isArabic ? 'نص قاعدة ماركونيكوف:' : "Markovnikov's Rule:"}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {isArabic
                    ? 'عند إضافة كاشف غير متماثل (HX) إلى ألكين غير متماثل، فإن الشق الموجب (H⁺) يُضاف إلى ذرة الكربون غير المشبعة الحاملة لعدد أكبر من ذرات الهيدروجين (الغني يزداد غنى)، بينما يُضاف الشق السالب (X⁻) إلى ذرة الكربون الحاملة لعدد أقل من الهيدروجين.'
                    : 'When an unsymmetrical reagent adds to an unsymmetrical alkene, the positive hydrogen ion attaches to the double-bonded carbon bearing the greater number of hydrogen atoms ("the rich get richer"), while the negative group adds to the carbon with fewer hydrogens.'}
                </p>
              </div>
            </div>

            {/* Visualizer (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div
                className={`p-5 rounded-2xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/80 border-slate-700/80'
                }`}
              >
                <h4 className="text-xs font-black uppercase text-emerald-400 mb-3 flex items-center gap-1.5">
                  <Atom className="w-4 h-4" />
                  <span>
                    {isArabic
                      ? 'آلية الإضافة الموجهة ونواتج التفاعل:'
                      : 'Regioselective Addition Mechanism & Products:'}
                  </span>
                </h4>

                {/* Addition Diagram */}
                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
                  <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-base font-black">
                    <span className="p-2 rounded-lg bg-amber-950/60 border border-amber-600/50 text-amber-300">
                      {alkeneType === 'propene' ? 'CH₃ - CH = CH₂' : '(CH₃)₂C = CH₂'}
                    </span>
                    <span className="text-slate-500">+</span>
                    <span className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-600/50 text-cyan-300">
                      {reagent === 'HBr' ? 'H⁺ - Br⁻' : 'H⁺ - OH⁻'}
                    </span>
                    <span className="text-emerald-400 font-bold">➔</span>
                  </div>

                  {/* Major Product */}
                  <div className="mt-5 w-full p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/60 text-start">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{isArabic ? 'الناتج الرئيسي الفعلي (٩٩٪ - ماركونيكوف):' : 'Major Product (99% - Markovnikov):'}</span>
                      </span>
                      <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                        {isArabic ? 'كاتيون كربوني ثابت' : 'Stable Carbocation'}
                      </span>
                    </div>

                    <div className="font-mono text-sm font-black text-white mt-1">
                      {alkeneType === 'propene'
                        ? reagent === 'HBr'
                          ? 'CH₃ - CH(Br) - CH₃  [2-Bromopropane / ٢- بروموبروبان]'
                          : 'CH₃ - CH(OH) - CH₃  [Propan-2-ol / كحول أيزوبروبيلي]'
                        : reagent === 'HBr'
                        ? '(CH₃)₂C(Br) - CH₃  [2-Bromo-2-methylpropane / ٢- برومو-٢- ميثيل بروبان]'
                        : '(CH₃)₂C(OH) - CH₃  [2-Methylpropan-2-ol / كحول بيوتيلي ثالثي]'}
                    </div>

                    <p className="text-[11px] text-slate-300 mt-2">
                      {isArabic
                        ? 'تُضاف ذرة الهيدروجين إلى ذرة الكربون الطرفية (CH₂) لتكوين الكاتيون الكربوني الأكثر ثباتاً (ثانوي أو ثالثي)، ثم يهاجم الشق السالب ذرة الكربون المركزية.'
                        : 'The H⁺ electrophile protonates the terminal =CH₂ group creating the more stable secondary or tertiary carbocation, followed by rapid nucleophilic capture.'}
                    </p>
                  </div>

                  {/* Minor Product (Disallowed) */}
                  <div className="mt-3 w-full p-3 rounded-xl bg-rose-950/30 border border-rose-800/40 text-start opacity-70">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                      <XCircle className="w-3.5 h-3.5 text-rose-400" />
                      <span>{isArabic ? 'الناتج غير المتكون (مخالف لماركونيكوف):' : 'Minor / Non-Occurring Product (Anti-Markovnikov):'}</span>
                    </div>
                    <div className="font-mono text-xs font-bold text-slate-400 mt-1">
                      {alkeneType === 'propene'
                        ? reagent === 'HBr'
                          ? 'CH₃ - CH₂ - CH₂Br  [1-Bromopropane (غير متكون)]'
                          : 'CH₃ - CH₂ - CH₂OH  [Propan-1-ol (غير متكون)]'
                        : reagent === 'HBr'
                        ? '(CH₃)₂CH - CH₂Br  [1-Bromo-2-methylpropane (غير متكون)]'
                        : '(CH₃)₂CH - CH₂OH  [2-Methylpropan-1-ol (غير متكون)]'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: IUPAC SYSTEMATIC NOMENCLATURE QUIZ */}
      {subTab === 'nomenclature' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
            <div>
              <h4 className="text-sm font-black text-emerald-400">
                {isArabic ? 'تحدي التسمية النظامية IUPAC للمركبات العضوية' : 'IUPAC Systematic Nomenclature Challenge'}
              </h4>
              <span className="text-xs text-slate-400">
                {isArabic
                  ? `السؤال ${currentQuizIndex + 1} من ${IUPAC_QUIZ.length}`
                  : `Question ${currentQuizIndex + 1} of ${IUPAC_QUIZ.length}`}
              </span>
            </div>

            <div className="px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold">
              {isArabic ? `النقاط: ${score} / ${IUPAC_QUIZ.length}` : `Score: ${score} / ${IUPAC_QUIZ.length}`}
            </div>
          </div>

          {/* Question Card */}
          <div
            className={`p-6 rounded-2xl border text-center ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/80 border-slate-700/80'
            }`}
          >
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 inline-block mb-3">
              {IUPAC_QUIZ[currentQuizIndex].category}
            </span>

            <h5 className="text-xs text-slate-400 mb-2">
              {isArabic ? 'ما هو الاسم الصحيح بنظام الأيوباك للمركب التالي؟' : 'What is the correct IUPAC name for:'}
            </h5>

            {/* Chemical Structure Box */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-lg sm:text-xl font-black text-amber-300 tracking-wide my-4 select-all">
              {IUPAC_QUIZ[currentQuizIndex].structure}
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-start">
              {IUPAC_QUIZ[currentQuizIndex].optionsEn.map((optEn, idx) => {
                const optAr = IUPAC_QUIZ[currentQuizIndex].optionsAr[idx];
                const isSelected = selectedOption === idx;
                const isCorrect = idx === IUPAC_QUIZ[currentQuizIndex].correctIndex;
                let btnStyle = isLight
                  ? 'bg-white border-slate-300 hover:border-emerald-500 text-slate-800'
                  : 'bg-slate-900 border-slate-700 hover:border-emerald-500 text-slate-200';

                if (selectedOption !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-300';
                  } else {
                    btnStyle = 'opacity-40 border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedOption !== null}
                    onClick={() => handleQuizAnswer(idx)}
                    className={`p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{isArabic ? optAr : optEn}</span>
                    {selectedOption !== null && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                    {selectedOption !== null && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next */}
            {showExplanation && (
              <div className="mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-700 text-start space-y-3">
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-emerald-400 block mb-1">
                    {isArabic ? '💡 التفسير وقواعد الأيوباك:' : '💡 Explanation & IUPAC Priority Rules:'}
                  </span>
                  {isArabic
                    ? IUPAC_QUIZ[currentQuizIndex].explanationAr
                    : IUPAC_QUIZ[currentQuizIndex].explanationEn}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNextQuestion}
                    className="px-4 py-2 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                  >
                    {isArabic ? 'السؤال التالي ➔' : 'Next Question ➔'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
