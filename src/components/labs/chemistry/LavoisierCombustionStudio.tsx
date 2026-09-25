import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Scale,
  Flame,
} from 'lucide-react';
import lavoisierPhoto from '../../../assets/chemistry/lavoisier_traite_elementaire_1789.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface LavoisierHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  scientificProofAr: string;
  scientificProofEn: string;
}

export const LAVOISIER_HOTSPOTS: LavoisierHotspot[] = [
  {
    id: 'sealed_retort_mercury',
    xPct: 28.0,
    yPct: 32.0,
    titleAr: 'الأنبيق الزجاجي المحكم لتكليس الزئبق (Sealed Retort 2Hg + O₂)',
    titleEn: 'Sealed Long-Neck Glass Retort for Mercury Calcination (2Hg + O₂ ⇌ 2HgO)',
    categoryAr: 'الأجهزة التجريبية المعايرة',
    categoryEn: 'Calibrated Quantitative Apparatus',
    descAr:
      'أنبيق زجاجي كروي ذو عنق طويل مقوس غمره لافوازييه في حمام رملي فوق موقد حراري لمدة 12 يوماً عند درجة حرارة قريبة من الغليان (350°م). تفاعل الزئبق السائل مع خمس حجم الهواء مكوناً قشوراً حمراء من أكسيد الزئبق (II) دون أي تسرب للكتلة.',
    descEn:
      'A spherical long-neck glass retort immersed in a sand bath above a charcoal furnace for 12 consecutive days at ~350°C. Liquid mercury reacted with exactly one-fifth of the enclosed air volume to form red mercuric oxide (HgO) calx with zero mass leakage.',
    scientificProofAr:
      'عند تسخين القشور الحمراء لدرجة حرارة أعلى (450°م) تفككت منتجة نفس حجم الأكسجين الممتص تماماً ونفس كتلة الزئبق الأصلي، مما أثبت أن الاحتراق اتحاد كيميائي وليس فقداً لمادة وهمية.',
    scientificProofEn:
      'Thermal decomposition of HgO at 450°C released the exact absorbed volume of pure oxygen and regenerated the original mercury mass, proving combustion is chemical combination with oxygen.',
  },
  {
    id: 'gasometer_pneumatic_trough',
    xPct: 54.0,
    yPct: 46.0,
    titleAr: 'الحوض الهوائي وناقوس جمع الغازات (Pneumatic Trough & Bell Jars)',
    titleEn: 'Pneumatic Water/Mercury Trough & Calibrated Gas Bell Jars',
    categoryAr: 'فيزياء وحجم الغازات',
    categoryEn: 'Pneumatic Gas Collection & Volumetrics',
    descAr:
      'حوض مائي وزئبقي مزود بنواقيس زجاجية مقلوبة مدرجة لاحتجاز الغازات الناتجة وقياس انخفاض الضغط وحجم الغاز المتبقي (أكسجين ونيتروجين/آزوت)، متصلاً بجهاز قياس الغازات الأوتوماتيكي (Gazomètre).',
    descEn:
      'Water and mercury trough with inverted graduated bell jars for isolating product gases, measuring partial pressure drops and volumetric fractions (oxygen vs. azote/nitrogen), coupled to Lavoisier’s precision gasometer.',
    scientificProofAr:
      'حدد لافوازييه بدقة أن الهواء الجوي يتكون بنسبة تقريبية من 21% غاز صالح للتنفس والاحتراق (أكسجين) و79% غاز خامل خانق لا يدعم الحياة (آزوت/نيتروجين).',
    scientificProofEn:
      'Empirically demonstrated atmospheric air composition as ~21% respirable oxygen and ~79% non-respirable inert azote (nitrogen).',
  },
  {
    id: 'law_conservation_mass',
    xPct: 72.0,
    yPct: 68.0,
    titleAr: 'ميزان ميموار فائق الدقة وقانون بقاء المادة (Conservation of Mass)',
    titleEn: 'Precision Analytical Beam Balance & Law of Conservation of Mass',
    categoryAr: 'القوانين الكيميائية الأساسية',
    categoryEn: 'Fundamental Stoichiometric Conservation',
    descAr:
      'ميزان تحليلي ذراع هيدروليكي فائق الحساسية صنعه فورتان (Fortin) بدقة ملغرامية، استخدمه لافوازييه لوزن الأواني قبل وبعد التفاعل ليصيغ قاعدته الذهبية: "لا شيء يُخلق، ولا شيء يفنى، بل كل شيء يتحول".',
    descEn:
      'High-precision analytical beam balance crafted by Fortin sensitive to fractions of a milligram, enabling Lavoisier to weigh closed reaction vessels before and after chemical transformations, establishing: "Nothing is lost, nothing is created, everything is transformed."',
    scientificProofAr:
      'مجموع كتل المواد المتفاعلة يساوي تماماً مجموع كتل المواد الناتجة من التفاعل في أي نظام مغلق (Σm المتفاعلات = Σm النواتج)، وهو الركيزة الأولى لوزن المعادلات الكيميائية والحساب الكيميائي.',
    scientificProofEn:
      'The sum of reactant masses rigorously equals the sum of product masses in any closed thermodynamic system (Σm_reactants = Σm_products), the fundamental basis of stoichiometry.',
  },
  {
    id: 'overthrow_phlogiston',
    xPct: 24.0,
    yPct: 76.0,
    titleAr: 'إسقاط فرضية الفلوجستون الوهمية (Overthrow of Phlogiston)',
    titleEn: 'Definitive Demolition of the Phlogiston Hypothesis',
    categoryAr: 'الثورة الكيميائية الحديثة',
    categoryEn: 'Chemical Revolution & Paradigm Shift',
    descAr:
      'كانت نظرية الفلوجستون تفترض أن المواد القابلة للاشتعال تفقد مادة خفية تسمى "فلوجستون". لكن وزن لافوازييه للمعادن بعد تكليسها أظهر زيادة في كتلتها بدلاً من نقصها، مما أطاح بالنظرية كلياً.',
    descEn:
      'Pre-modern phlogiston theory assumed combusting materials expelled an elusive weightless fluid. Lavoisier demonstrated calcinated metals gain mass by absorbing oxygen from air, destroying the phlogiston doctrine.',
    scientificProofAr:
      'احتراق الفوسفور والكبريت يزيد من كتلتهما بمقدار يعادل تماماً كتلة الأكسجين المستهلك من الهواء المحيط، مؤكداً أن النار عملية أكسدة حقيقية وليست تحرراً لمادة سالبة الوزن.',
    scientificProofEn:
      'Combustion of phosphorus and sulfur increases their mass by the exact weight of oxygen absorbed from air, confirming combustion as exothermal oxidation.',
  },
  {
    id: 'chemical_nomenclature_table',
    xPct: 52.0,
    yPct: 74.0,
    titleAr: 'تسمية المركبات وجدول العناصر الـ 33 (Modern Nomenclature)',
    titleEn: 'Rational Chemical Nomenclature & Table of 33 Elementary Substances',
    categoryAr: 'قواعد التسمية الكيميائية',
    categoryEn: 'Systematic Nomenclature & Element Classification',
    descAr:
      'نشر لافوازييه مع بيرتوليه وفوركروي نظاماً ثورياً لتسمية المركبات بناءً على تركيبها الذري، مستبدلاً الأسماء الخيميائية الغامضة بأسماء علمية منهجية (مثل: أكسيد، كبريتات، نترات)، واضعاً جدولاً لـ 33 عنصراً حقيقياً.',
    descEn:
      'Co-authored with Berthollet and Fourcroy a revolutionary chemical nomenclature system based on elemental composition, replacing alchemical jargon with systematic terms (oxides, sulfates, nitrates) and tabulating 33 verified chemical elements.',
    scientificProofAr:
      'المركبات الكيميائية تُسمى وفق عناصرها ومجموعاتها الذرية وتكافؤها، وهو النظام المعتمد دولياً حتى اليوم في مناهج الكيمياء للثانوية العامة عبر قواعد IUPAC الحديثة.',
    scientificProofEn:
      'Chemical compounds are named according to constituent elements and oxidation states, underpinning modern IUPAC stoichiometric nomenclature.',
  },
];

export const LavoisierCombustionStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<LavoisierHotspot>(LAVOISIER_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Stoichiometry & Mass Conservation Simulator
  const [selectedReaction, setSelectedReaction] = useState<'Mg' | 'Hg' | 'CH4' | 'Fe'>('Mg');
  const [reactantMass, setReactantMass] = useState<number>(24.3); // grams

  const reactionsData = {
    Mg: {
      nameAr: 'احتراق المغنيسيوم بالأكسجين: 2Mg + O₂ → 2MgO',
      nameEn: 'Magnesium Combustion: 2Mg + O₂ → 2MgO',
      r1NameAr: 'المغنيسيوم (2Mg)',
      r1NameEn: 'Magnesium (2Mg)',
      r1Molar: 48.6,
      r2NameAr: 'غاز الأكسجين (O₂)',
      r2NameEn: 'Oxygen Gas (O₂)',
      r2Molar: 32.0,
      pNameAr: 'أكسيد المغنيسيوم (2MgO)',
      pNameEn: 'Magnesium Oxide (2MgO)',
      pMolar: 80.6,
    },
    Hg: {
      nameAr: 'تكليس الزئبق التاريخي (لافوازييه): 2Hg + O₂ → 2HgO',
      nameEn: 'Lavoisier Mercury Calcination: 2Hg + O₂ → 2HgO',
      r1NameAr: 'الزئبق السائل (2Hg)',
      r1NameEn: 'Liquid Mercury (2Hg)',
      r1Molar: 401.2,
      r2NameAr: 'غاز الأكسجين (O₂)',
      r2NameEn: 'Oxygen Gas (O₂)',
      r2Molar: 32.0,
      pNameAr: 'أكسيد الزئبق الأحمر (2HgO)',
      pNameEn: 'Red Mercuric Oxide (2HgO)',
      pMolar: 433.2,
    },
    Fe: {
      nameAr: 'اتحاد الحديد مع الكبريت: Fe + S → FeS',
      nameEn: 'Iron and Sulfur Combination: Fe + S → FeS',
      r1NameAr: 'برادة الحديد (Fe)',
      r1NameEn: 'Iron Powder (Fe)',
      r1Molar: 55.8,
      r2NameAr: 'مسحوق الكبريت (S)',
      r2NameEn: 'Sulfur Powder (S)',
      r2Molar: 32.1,
      pNameAr: 'كبريتيد الحديد (II) (FeS)',
      pNameEn: 'Iron(II) Sulfide (FeS)',
      pMolar: 87.9,
    },
    CH4: {
      nameAr: 'احتراق الميثان التام: CH₄ + 2O₂ → CO₂ + 2H₂O',
      nameEn: 'Methane Complete Combustion: CH₄ + 2O₂ → CO₂ + 2H₂O',
      r1NameAr: 'غاز الميثان (CH₄)',
      r1NameEn: 'Methane Gas (CH₄)',
      r1Molar: 16.0,
      r2NameAr: 'غاز الأكسجين (2O₂)',
      r2NameEn: 'Oxygen Gas (2O₂)',
      r2Molar: 64.0,
      pNameAr: 'ثاني أكسيد الكربون والماء (CO₂ + 2H₂O)',
      pNameEn: 'Carbon Dioxide & Water (CO₂ + 2H₂O)',
      pMolar: 80.0,
    },
  };

  const currentRx = reactionsData[selectedReaction];
  const requiredR2Mass = Number(((reactantMass * currentRx.r2Molar) / currentRx.r1Molar).toFixed(2));
  const totalReactantMass = Number((reactantMass + requiredR2Mass).toFixed(2));
  const productMass = totalReactantMass; // Strict mass conservation

  const modalData: HiResImageModalData = {
    imageUrl: lavoisierPhoto,
    titleAr: 'لوحة الأجهزة الكيميائية: كتاب مبادئ الكيمياء الأولي (لافوازييه 1789م)',
    titleEn: 'Antoine Lavoisier’s Traité Élémentaire de Chimie: Plate V (1789 CE)',
    subtitleAr: 'الأنبيق الزجاجي المحكم، الحوض الهوائي، ميزان الدقة، وقانون بقاء المادة',
    subtitleEn: 'Mercury Calcination Retort, Pneumatic Trough, Precision Balance & Mass Conservation',
    descriptionAr:
      'نُشرت هذه اللوحة التاريخية المحفورة على النحاس بريشة ماري-آن لافوازييه عام 1789 في باريس، معلنة ميلاد الكيمياء الكمية الحديثة، وإسقاط نظرية الفلوجستون عبر التجربة المعملية المحكمة للميزان المغلق.',
    descriptionEn:
      'Drawn and engraved on copperplates by Marie-Anne Pierrette Paulze-Lavoisier in Paris (1789), this masterpiece signaled the Chemical Revolution by establishing quantitative stoichiometry, pneumatic isolation, and closed-system mass invariance.',
    dateOrEraAr: 'عصر التنوير والثورة الكيميائية (1789م)',
    dateOrEraEn: 'Age of Enlightenment & Chemical Revolution (1789 CE)',
    locationAr: 'الأكاديمية الملكية للعلوم، باريس، فرنسا',
    locationEn: 'Académie Royale des Sciences, Paris, France',
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-emerald-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Studio Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
            <Scale className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                1789 CE • Traité Élémentaire
              </span>
              <span className="text-xs text-emerald-500/80 font-mono">4K Archival Plate</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو أنطوان لافوازييه وقانون بقاء المادة واحتراق الأكسجين (1789م)'
                : 'Lavoisier 1789: Combustion, Stoichiometry & Mass Conservation'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير لوحة لافوازييه 4K' : 'Inspect 4K Plate'}</span>
        </button>
      </div>

      {/* 4K Archival Canvas with Hotspot Markers */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden mt-6 border border-emerald-500/30 shadow-2xl bg-black select-none group">
        <img
          src={lavoisierPhoto}
          alt="Antoine Lavoisier 1789 Traite Elementaire Plate"
          className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Pulsing Hotspots */}
        {LAVOISIER_HOTSPOTS.map((h) => {
          const isActive = activeHotspot.id === h.id;
          return (
            <button
              key={h.id}
              onClick={() => setActiveHotspot(h)}
              style={{ left: `${h.xPct}%`, top: `${h.yPct}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 transition-transform ${
                isActive ? 'scale-125' : 'hover:scale-110'
              }`}
              title={isArabic ? h.titleAr : h.titleEn}
              aria-label={isArabic ? h.titleAr : h.titleEn}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                    isActive ? 'bg-emerald-400' : 'bg-emerald-500/50'
                  }`}
                />
                <span
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-emerald-400 border-white text-black'
                      : 'bg-black/80 border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                </span>
              </div>
            </button>
          );
        })}

        {/* Bottom Metadata Ribbon */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-emerald-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-emerald-300">
            <span>{isArabic ? '📜 النقش النحاسي الأصلي: ماري-آن بولز لافوازييه (1789)' : '📜 Copperplate Engraving: Marie-Anne Lavoisier (1789)'}</span>
            <span>•</span>
            <span>{isArabic ? '⚖️ قانون بقاء المادة: Σm المتفاعلات = Σm النواتج' : '⚖️ Mass Invariance: Σm_reactants = Σm_products'}</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 font-bold">
            {isArabic ? 'انقر على النقاط الذهبية للفحص' : 'Click pulsing markers for deep analysis'}
          </span>
        </div>
      </div>

      {/* Active Hotspot Deep Inspection Drawer */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-emerald-400'
            : isLight
            ? 'bg-emerald-50/60 border-emerald-200 shadow-xs'
            : 'bg-emerald-950/20 border-emerald-800/40'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-emerald-500/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Layers className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block font-mono">
                {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-emerald-400">
                {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
              </h3>
            </div>
          </div>
        </div>

        <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
        </p>

        <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs">
          <span className="font-black text-emerald-400 flex items-center gap-1.5 mb-1">
            <Info className="w-4 h-4 shrink-0" />
            <span>{isArabic ? 'البرهان الكيميائي والاستنتاج الوزاري:' : 'Stoichiometric Proof & MoE Curriculum Focus:'}</span>
          </span>
          <p className={isLight ? 'text-slate-800 font-medium' : 'text-slate-200'}>
            {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
          </p>
        </div>
      </div>

      {/* Interactive Mass Conservation & Reaction Stoichiometry Engine */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-emerald-400'
            : isLight
            ? 'bg-white border-slate-200 shadow-sm'
            : 'bg-slate-900/90 border-slate-800 shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-emerald-500/20 flex-wrap">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm sm:text-base font-bold text-emerald-400">
              {isArabic
                ? 'محاكي قانون بقاء المادة والحساب الكيميائي المغلق (Closed-System Stoichiometry)'
                : 'Closed-System Stoichiometry & Mass Conservation Engine'}
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            Σm (Reactants) = Σm (Products)
          </span>
        </div>

        {/* Reaction Selection Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
          {(['Mg', 'Hg', 'Fe', 'CH4'] as const).map((rx) => (
            <button
              key={rx}
              onClick={() => setSelectedReaction(rx)}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                selectedReaction === rx
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md ring-1 ring-emerald-400'
                  : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-300'
              }`}
            >
              {rx === 'Mg' && '2Mg + O₂ → 2MgO'}
              {rx === 'Hg' && '2Hg + O₂ → 2HgO'}
              {rx === 'Fe' && 'Fe + S → FeS'}
              {rx === 'CH4' && 'CH₄ + 2O₂ → CO₂ + 2H₂O'}
            </button>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-center text-emerald-300 font-bold">
          {isArabic ? currentRx.nameAr : currentRx.nameEn}
        </div>

        {/* Reactant 1 Mass Slider */}
        <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-slate-300">
              {isArabic ? `كتلة ${currentRx.r1NameAr}:` : `Mass of ${currentRx.r1NameEn}:`}
            </span>
            <span className="text-emerald-400 font-mono text-sm">{reactantMass.toFixed(2)} g</span>
          </div>
          <input
            type="range"
            min="1.0"
            max="100.0"
            step="0.5"
            value={reactantMass}
            onChange={(e) => setReactantMass(parseFloat(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        {/* Quantitative Conservation Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 block mb-1">
              {isArabic ? 'كتلة المتفاعل الأول (m₁):' : 'Reactant 1 Mass (m₁):'}
            </span>
            <span className="text-lg font-black text-slate-200">{reactantMass.toFixed(2)} g</span>
            <span className="text-[10px] text-slate-500 mt-1">{isArabic ? currentRx.r1NameAr : currentRx.r1NameEn}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 block mb-1">
              {isArabic ? 'كتلة المتفاعل الثاني المكافئة (m₂):' : 'Required Reactant 2 Mass (m₂):'}
            </span>
            <span className="text-lg font-black text-cyan-400">{requiredR2Mass.toFixed(2)} g</span>
            <span className="text-[10px] text-slate-500 mt-1">{isArabic ? currentRx.r2NameAr : currentRx.r2NameEn}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/50 flex flex-col justify-between">
            <span className="text-[10px] text-emerald-300 block mb-1">
              {isArabic ? 'كتلة النواتج الكلية (Σm_products):' : 'Total Product Mass (Σm_products):'}
            </span>
            <span className="text-lg font-black text-emerald-400">{productMass.toFixed(2)} g</span>
            <span className="text-[10px] text-emerald-400/80 mt-1 font-bold">
              {isArabic ? 'متطابقة 100% (Δm = 0.00 g)' : '100% Invariant (Δm = 0.00 g)'}
            </span>
          </div>
        </div>

        {/* Sealed Chamber Invariance Banner */}
        <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-slate-200">
              {isArabic
                ? 'إجمالي كتلة المتفاعلات:'
                : 'Total Reactants Mass:'}
            </span>
            <span className="font-mono text-emerald-400 font-bold">
              {reactantMass.toFixed(2)} + {requiredR2Mass.toFixed(2)} = {totalReactantMass.toFixed(2)} g
            </span>
          </div>
          <span className="font-bold text-emerald-400">
            {isArabic ? '⚖️ قانون بقاء المادة متحقق بدقة تامة' : '⚖️ Law of Conservation of Mass Fully Verified'}
          </span>
        </div>
      </div>

      {/* 4K Modal Integration */}
      <HiResImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};
