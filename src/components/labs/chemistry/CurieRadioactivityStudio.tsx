import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Radio,
  Zap,
} from 'lucide-react';
import curiePhoto from '../../../assets/chemistry/curie_radioactivity_notebook_1898.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface CurieHotspot {
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

export const CURIE_HOTSPOTS: CurieHotspot[] = [
  {
    id: 'piezoelectric_electrometer',
    xPct: 32.0,
    yPct: 38.0,
    titleAr: 'مخطط إلكترومتر الكوارتز الكهروضغطي لبيير كوري (Piezoelectric Quartz)',
    titleEn: 'Pierre Curie’s Piezoelectric Quartz Electrometer & Ionization Chamber',
    categoryAr: 'الأجهزة الفيزيائية القياسية',
    categoryEn: 'Physical Ionization Instrumentation',
    descAr:
      'رسم بيير كوري في دفتر المختبر جهازه المبتكر: صفيحة كوارتز مشدودة بأثقال معروفة تولد شحنة كهروإجهادية تعادل بدقة تيار التأين الناتج عن الإشعاع في غرفة الهواء المعزولة، متصلة بإلكترومتر ذي أرباع.',
    descEn:
      'Pierre Curie sketched his invention: a piezoelectric quartz lamina tensioned with calibrated weights generating a piezo-charge that precisely cancels the radiation-induced ionization current in an air chamber, measured by a quadrant electrometer.',
    scientificProofAr:
      'مكن هذا الجهاز الحساس كوري من تحويل دراسة النشاط الإشعاعي من مجرد ملاحظات بصرية على ألواح فوتوغرافية إلى قياسات كمية تيارية دقيقة للغاية (تيار بيكو أمبير 10⁻¹² A).',
    scientificProofEn:
      'Transformed radioactivity from qualitative photographic fogging into rigorous quantitative electrical current measurements (down to picoamperes, 10⁻¹² A).',
  },
  {
    id: 'pitchblende_fractionation',
    xPct: 65.0,
    yPct: 30.0,
    titleAr: 'جدول ترسيب خام البيتشبلند (Separation de la Pechblende)',
    titleEn: 'Fractional Precipitation Tables of Joachimsthal Pitchblende Ore',
    categoryAr: 'الفصل الكيميائي الإشعاعي',
    categoryEn: 'Radiochemical Fractional Separation',
    descAr:
      'جدول معملي بخط يد ماري كوري يسجل معالجة أطنان من خام أكسيد اليورانيوم (البيتشبلند) من مناجم يواخيمستال بالبوهيميا، عبر إذابته في الأحماض والترسيب التجزيئي لكبريتيدات البزموت وكلوريدات الباريوم.',
    descEn:
      'Laboratory log penned by Marie Curie detailing manual chemical processing of tons of pitchblende uranium ore from Joachimsthal, Bohemia, via acid dissolution and fractional precipitation of bismuth sulfides and barium chlorides.',
    scientificProofAr:
      'لاحظت ماري كوري أن النشاط الإشعاعي لخام البيتشبلند الخام يزيد بأربعة أضعاف عن اليورانيوم النقي (Activité ~ 400x Urane)، مما كان دليلاً قاطعاً على احتوائه على عناصر جديدة شديدة الإشعاع.',
    scientificProofEn:
      'Observed raw pitchblende had 4x the radioactivity of pure uranium, conclusively proving the presence of unknown, hyper-radioactive trace elements.',
  },
  {
    id: 'polonium_radium_discovery',
    xPct: 65.0,
    yPct: 60.0,
    titleAr: 'إعلان اكتشاف البولونيوم والراديوم (Po = 84, Ra = 88)',
    titleEn: 'Formal Identification of Polonium (July 1898) & Radium (Dec 1898)',
    categoryAr: 'العناصر المشعة الجديدة',
    categoryEn: 'New Radioactive Element Discoveries',
    descAr:
      'الملاحظة التاريخية المؤرخة 18 يوليو 1898: تأكيد اكتشاف عنصر البولونيوم (الذي سمته تيمناً بوطنها بولندا) مرافقاً للبزموت، ثم اكتشاف الراديوم في ديسمبر 1898 مرافقاً للباريوم بنشاط إشعاعي أكبر بملايين المرات.',
    descEn:
      'Historical entry dated 18 July 1898: confirmation of Polonium (named after Poland) co-precipitating with Bismuth, followed in December 1898 by Radium co-crystallizing with Barium at millions of times higher activity.',
    scientificProofAr:
      'إثبات أن الإشعاع خاصية ذرية تنبع من داخل نواة الذرة ذاتها ولا تعتمد على الحالة الفيزيائية أو التركيب الجزيئي أو درجة الحرارة.',
    scientificProofEn:
      'Established that radioactivity is an intrinsic atomic property emanating from atomic nuclei, unaffected by chemical bonding, physical state, or temperature.',
  },
  {
    id: 'radiation_decay_half_life',
    xPct: 65.0,
    yPct: 78.0,
    titleAr: 'حركية التحلل الإشعاعي وقانون عمر النصف (Radioactive Half-Life)',
    titleEn: 'Kinetics of Nuclear Decay & Radioactive Half-Life Formulation',
    categoryAr: 'الفيزياء والكيمياء النووية',
    categoryEn: 'Nuclear Kinetics & Half-Life Physics',
    descAr:
      'سجلت كوري تضاؤل النشاط الإشعاعي للبولونيوم عبر الزمن (عمر نصف 138 يوماً) وثبات الراديوم (عمر نصف 1600 سنة)، ممهدة الطريق لروثرفورد وسودي لصياغة قانون التحلل الأسي N = N₀ e^(-λt).',
    descEn:
      'Logged the decay of Polonium activity over time (half-life 138.4 days) contrasted with Radium’s long persistence (half-life 1600 years), leading directly to the exponential decay law N(t) = N₀ e^(-λt).',
    scientificProofAr:
      'قانون عمر النصف t₁/₂ = ln(2) / λ يحدد الزمن اللازم لتحلل نصف عدد الأنوية المشعة، وهو الأساس الوزاري للثانوية العامة في حسابات التأريخ الإشعاعي وتطبيقات النظائر المشعة في الطب والصناعة.',
    scientificProofEn:
      'Half-life equation t₁/₂ = ln(2)/λ determines the time required for half the radioactive nuclei in a sample to decay, governing isotope dating and radiotherapy.',
  },
  {
    id: 'curie_notebook_contamination',
    xPct: 82.0,
    yPct: 70.0,
    titleAr: 'التلوث الإشعاعي الدائم للدفتر ومأساة التضحية العلمية',
    titleEn: 'Permanent Radium Contamination & Scientific Martyrdom Legacy',
    categoryAr: 'تاريخ العلوم والتضحية',
    categoryEn: 'History of Science & Radiation Safety',
    descAr:
      'لا يزال هذا الدفتر الأصلي مشعاً حتى اليوم بنظير الراديوم-226 (عمر النصف 1600 سنة)، ويحفظ في المكتبة الوطنية الفرنسية داخل صناديق رصاصية محكمة لا يمكن للباحثين لمسها إلا بارتداء بزات واقية من الإشعاع.',
    descEn:
      'This original laboratory notebook remains radioactive today with Radium-226 (half-life 1,600 years) and is stored in lead-lined vaults at the Bibliothèque Nationale de France, requiring protective suits for handling.',
    scientificProofAr:
      'نالت ماري كوري جائزتي نوبل (في الفيزياء 1903، وفي الكيمياء 1911)، لتكون أول إنسان في التاريخ يحقق هذا الإنجاز، وقد توفيت بفقر الدم اللاتنسجي جراء التعرض الطويل للإشعاع غير المحمي.',
    scientificProofEn:
      'Marie Curie won two Nobel Prizes (Physics 1903, Chemistry 1911), pioneering nuclear science before succumbing to aplastic anemia from prolonged unshielded radiation exposure.',
  },
];

export const CurieRadioactivityStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<CurieHotspot>(CURIE_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Radioactive Decay & Half-Life Simulator
  const [selectedIsotope, setSelectedIsotope] = useState<'Ra226' | 'Po210' | 'C14' | 'I131'>('Ra226');
  const [elapsedPeriods, setElapsedPeriods] = useState<number>(1.0); // 0.0 to 5.0 half-lives

  const isotopesData = {
    Ra226: {
      nameAr: 'الراديوم-226 (²²⁶Ra)',
      nameEn: 'Radium-226 (²²⁶Ra)',
      halfLifeValue: 1600,
      halfLifeUnitAr: 'سنة',
      halfLifeUnitEn: 'years',
      decayTypeAr: 'تحلل ألفا (α) مصحوب بأشعة جاما (γ)',
      decayTypeEn: 'Alpha (α) decay accompanied by Gamma (γ)',
      daughterAr: 'الرادون-222 (²²²Rn) + جسيم ألفا (⁴He)',
      daughterEn: 'Radon-222 (²²²Rn) + Alpha particle (⁴He)',
    },
    Po210: {
      nameAr: 'البولونيوم-210 (²¹⁰Po)',
      nameEn: 'Polonium-210 (²¹⁰Po)',
      halfLifeValue: 138.4,
      halfLifeUnitAr: 'يوم',
      halfLifeUnitEn: 'days',
      decayTypeAr: 'تحلل ألفا نقي عالي الطاقة (α)',
      decayTypeEn: 'High-energy pure Alpha (α) decay',
      daughterAr: 'الرصاص-206 المستقر (²⁰⁶Pb) + جسيم ألفا',
      daughterEn: 'Stable Lead-206 (²⁰⁶Pb) + Alpha particle',
    },
    C14: {
      nameAr: 'الكربون-14 (¹⁴C)',
      nameEn: 'Carbon-14 (¹⁴C)',
      halfLifeValue: 5730,
      halfLifeUnitAr: 'سنة',
      halfLifeUnitEn: 'years',
      decayTypeAr: 'تحلل بيتا السالبة (β⁻) للتأريخ الحفري',
      decayTypeEn: 'Beta-minus (β⁻) decay for radiocarbon dating',
      daughterAr: 'النيتروجين-14 المستقر (¹⁴N) + إلكترون',
      daughterEn: 'Stable Nitrogen-14 (¹⁴N) + Beta electron',
    },
    I131: {
      nameAr: 'اليود-131 (¹³¹I)',
      nameEn: 'Iodine-131 (¹³¹I)',
      halfLifeValue: 8.02,
      halfLifeUnitAr: 'أيام',
      halfLifeUnitEn: 'days',
      decayTypeAr: 'تحلل بيتا وجاما لعلاج الغدة الدرقية',
      decayTypeEn: 'Beta and Gamma decay for thyroid therapy',
      daughterAr: 'الزينون-131 المستقر (¹³¹Xe) + إلكترون',
      daughterEn: 'Stable Xenon-131 (¹³¹Xe) + Beta electron',
    },
  };

  const currentIso = isotopesData[selectedIsotope];
  const remainingFraction = Math.pow(0.5, elapsedPeriods);
  const remainingPercent = Number((remainingFraction * 100).toFixed(2));
  const decayedPercent = Number((100 - remainingPercent).toFixed(2));
  const totalTimeElapsed = Number((elapsedPeriods * currentIso.halfLifeValue).toFixed(1));

  const modalData: HiResImageModalData = {
    imageUrl: curiePhoto,
    titleAr: 'دفتر أبحاث بيير وماري كوري المعملي (يوليو 1898م)',
    titleEn: 'Pierre & Marie Curie’s Laboratory Notebook No. 2 (July 1898 CE)',
    subtitleAr: 'اكتشاف البولونيوم والراديوم، إلكترومتر الكوارتز الكهروإجهادي، وحسابات النشاط الإشعاعي',
    subtitleEn: 'Discovery of Polonium & Radium, Piezoelectric Quartz Electrometer, and Nuclear Ionization Tables',
    descriptionAr:
      'وثيقة تاريخية بالغة الأهمية خُطت في مختبر باريس عام 1898م، تسجل أول قياسات كمية للنشاط الإشعاعي واستخلاص عنصرين جديدين من خامات البيتشبلند. لا يزال الدفتر يبعث إشعاعات الراديوم حتى يومنا هذا.',
    descriptionEn:
      'An iconic artifact penned in Paris in July 1898, documenting the chemical separation of Polonium and Radium from Joachimsthal pitchblende ore. To this day, the paper remains radioactive with Radium-226 and is conserved in lead vaults.',
    dateOrEraAr: 'بدايات الفيزياء والكيمياء النووية (1898م)',
    dateOrEraEn: 'Dawn of Nuclear Physics & Chemistry (1898 CE)',
    locationAr: 'المكتبة الوطنية الفرنسية ومتحف كوري، باريس، فرنسا',
    locationEn: 'Bibliothèque Nationale de France & Musée Curie, Paris, France',
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
            <Radio className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                1898 CE • Radioactivity Notebook
              </span>
              <span className="text-xs text-emerald-500/80 font-mono">4K Archival Exhibit</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو ماري كوري ودفتر اكتشاف البولونيوم والراديوم (1898م)'
                : 'Marie Curie 1898: Radioactivity & Nuclear Transmutation Studio'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير دفتر ماري كوري 4K' : 'Inspect 4K Notebook'}</span>
        </button>
      </div>

      {/* 4K Archival Canvas with Hotspot Markers */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden mt-6 border border-emerald-500/30 shadow-2xl bg-black select-none group">
        <img
          src={curiePhoto}
          alt="Marie Curie 1898 Radioactivity Lab Notebook"
          className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Pulsing Hotspots */}
        {CURIE_HOTSPOTS.map((h) => {
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
            <span>{isArabic ? '📜 المخطوطة الأصلية: دفتر مختبر بيير وماري كوري (يوليو 1898)' : '📜 Original Folio: Pierre & Marie Curie Lab Notebook (July 1898)'}</span>
            <span>•</span>
            <span>{isArabic ? '☢️ البولونيوم ²¹⁰Po • الراديوم ²²⁶Ra • الكوارتز الكهروإجهادي' : '☢️ Polonium ²¹⁰Po • Radium ²²⁶Ra • Piezoelectric Quartz'}</span>
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
            <span>{isArabic ? 'البرهان النووي والاستنتاج الوزاري:' : 'Nuclear Proof & MoE Curriculum Focus:'}</span>
          </span>
          <p className={isLight ? 'text-slate-800 font-medium' : 'text-slate-200'}>
            {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
          </p>
        </div>
      </div>

      {/* Interactive Radioactive Decay & Half-Life Kinetics Engine */}
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
            <Zap className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm sm:text-base font-bold text-emerald-400">
              {isArabic
                ? 'محاكي قانون التحلل الإشعاعي وحركية عمر النصف (Radioactive Half-Life Simulator)'
                : 'Radioactive Decay Kinetics & Half-Life Simulator'}
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            N(t) = N₀ · (1/2)^(t / t₁/₂)
          </span>
        </div>

        {/* Isotope Selection Toggle */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
          {(['Ra226', 'Po210', 'C14', 'I131'] as const).map((iso) => (
            <button
              key={iso}
              onClick={() => setSelectedIsotope(iso)}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                selectedIsotope === iso
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md ring-1 ring-emerald-400'
                  : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-300'
              }`}
            >
              {iso === 'Ra226' && '²²⁶Ra (1600 yr)'}
              {iso === 'Po210' && '²¹⁰Po (138.4 d)'}
              {iso === 'C14' && '¹⁴C (5730 yr)'}
              {iso === 'I131' && '¹³¹I (8.02 d)'}
            </button>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs flex-wrap gap-2">
          <span className="font-bold text-emerald-300">{isArabic ? currentIso.nameAr : currentIso.nameEn}</span>
          <span className="text-[11px] text-slate-400 font-mono">
            {isArabic
              ? `عمر النصف (t₁/₂): ${currentIso.halfLifeValue} ${currentIso.halfLifeUnitAr} • ${currentIso.decayTypeAr}`
              : `Half-Life (t₁/₂): ${currentIso.halfLifeValue} ${currentIso.halfLifeUnitEn} • ${currentIso.decayTypeEn}`}
          </span>
        </div>

        {/* Half-Life Slider */}
        <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-slate-300">
              {isArabic ? 'عدد فترات عمر النصف المنقضية (n = t / t₁/₂):' : 'Elapsed Half-Life Multiples (n = t / t₁/₂):'}
            </span>
            <span className="text-emerald-400 font-mono text-sm">
              {elapsedPeriods.toFixed(1)} {isArabic ? 'فترة' : 'half-lives'} ({totalTimeElapsed} {isArabic ? currentIso.halfLifeUnitAr : currentIso.halfLifeUnitEn})
            </span>
          </div>
          <input
            type="range"
            min="0.0"
            max="5.0"
            step="0.1"
            value={elapsedPeriods}
            onChange={(e) => setElapsedPeriods(parseFloat(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        {/* Live Decay Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 block mb-1">
              {isArabic ? 'النسبة المتبقية من الأنوية المشعة:' : 'Remaining Radioactive Fraction:'}
            </span>
            <span className="text-xl font-black text-emerald-400">{remainingPercent}%</span>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${remainingPercent}%` }}
              />
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 block mb-1">
              {isArabic ? 'النسبة المتحللة إلى نواتج مستقرة:' : 'Decayed Fraction (Stable Daughter):'}
            </span>
            <span className="text-xl font-black text-amber-400">{decayedPercent}%</span>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${decayedPercent}%` }}
              />
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 block mb-1">
              {isArabic ? 'النواة الوليدة الناتجة من التحلل:' : 'Daughter Nucleus Product:'}
            </span>
            <span className="text-xs font-sans font-bold text-cyan-300">
              {isArabic ? currentIso.daughterAr : currentIso.daughterEn}
            </span>
            <span className="text-[10px] text-slate-500 mt-1 font-mono">
              λ = {(0.693 / currentIso.halfLifeValue).toExponential(3)} {isArabic ? `1/${currentIso.halfLifeUnitAr}` : `1/${currentIso.halfLifeUnitEn}`}
            </span>
          </div>
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
