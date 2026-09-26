import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  Scale,
  TrendingUp,
  Coins,
  Factory,
} from 'lucide-react';
import adamSmithPhoto from '../../../assets/economics/adam_smith_wealth_of_nations_1776.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface SmithHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  scientificInsightAr: string;
  scientificInsightEn: string;
}

export const SMITH_HOTSPOTS: SmithHotspot[] = [
  {
    id: 'division_of_labour_pin_factory',
    xPct: 28.0,
    yPct: 55.0,
    titleAr: 'تقسيم العمل ومصنع الدبابيس الشهير (The Pin Factory)',
    titleEn: 'Division of Labour & The Iconic Pin Factory Example',
    categoryAr: 'نظرية الإنتاج والإنتاجية',
    categoryEn: 'Theory of Production & Specialization',
    descAr:
      'الفصل الأول الخالد من الكتاب الأول: يصف آدم سميث مصنع دبابيس صغيراً حيث يقوم عامل بمفرده بصنع 20 دبوساً يومياً على الأكثر. ولكن عندما تم تقسيم عملية التصنيع إلى 18 عملية منفصلة ومتخصصة (سحب السلك، تقويمه، قطعه، شحذ طرفه، تركيب الرأس...)، استطاع 10 عمال إنتاج أكثر من 48,000 دبوس يومياً؛ أي 4,800 دبوس للعامل الواحد بمضاعف إنتاجية يبلغ 2400 ضعفاً!',
    descEn:
      'In Book I, Chapter 1, Adam Smith introduces his famous pin factory: a single untrained artisan could scarcely make 20 pins a day. But by subdividing production into 18 distinct specialized operations (drawing wire, straightening, cutting, pointing, grinding, heading, etc.), 10 workers produced over 48,000 pins daily—a stunning 2400-fold surge in productivity.',
    scientificInsightAr:
      'أرجع سميث هذه القفزة الإنتاجية الهائلة إلى ثلاثة أسباب جوهرية: زيادة مهارة وحذاقة كل عامل، توفير الوقت الضائع في الانتقال بين المهام، واختراع الآلات المتخصصة الميسرة للعمل.',
    scientificInsightEn:
      'Smith attributed this staggering productivity surge to three causes: increased dexterity in each task, eliminating time lost moving between workstations, and the invention of labor-saving specialized machinery.',
  },
  {
    id: 'invisible_hand_market_harmony',
    xPct: 52.0,
    yPct: 38.0,
    titleAr: 'اليد الخفية وتوازن الأسواق التلقائي (The Invisible Hand)',
    titleEn: 'The Invisible Hand & Spontaneous Market Harmony',
    categoryAr: 'فلسفة الأسواق وآلية الأسعار',
    categoryEn: 'Price Mechanism & Market Allocation',
    descAr:
      'المفهوم الفلسفي الأشهر في تاريخ الاقتصاد السياسي (الكتاب الرابع): عندما يسعى كل فرد لتحقيق مصلحته الذاتية الرشيدة بأقصى كفاءة ممكنة، فإنه يُقاد بـ "يد خفية" (Invisible Hand) لتعظيم المصلحة الاقتصادية العامة للمجتمع بأسره دون أن يقصد ذلك مباشرة وبشكل أكثر فاعلية مما لو كان يقصده عمداً.',
    descEn:
      'Smith’s most celebrated insight in Book IV: an individual pursuing solely private rational gain is led by an "invisible hand" to promote an end which was no part of his intention—maximizing social welfare and optimal resource allocation far more effectively than state planning.',
    scientificInsightAr:
      'تعد آلية الأسعار الحرة وإشارات العرض والطلب التلقائية هي الترجمة الرياضية الدقيقة لليد الخفية؛ حيث تقود تلقائياً لتصفية الأسواق وتفادي العجز والفائض.',
    scientificInsightEn:
      'The price mechanism and free equilibrium between supply and demand represent the mathematical realization of the invisible hand, clearing markets without centralized command.',
  },
  {
    id: 'scottish_enlightenment_folio',
    xPct: 65.0,
    yPct: 32.0,
    titleAr: 'طبعة لندن الأولى 1776 والتنوير الاسكتلندي (Strahan & Cadell 1776)',
    titleEn: 'London 1776 First Edition Quarto & Scottish Enlightenment',
    categoryAr: 'الوثائق الأرشيفية ونشأة علم الاقتصاد',
    categoryEn: 'Archival Publishing & Economic History',
    descAr:
      'المجلد التذكاري المفتوح من الطبعة الأولى الصادرة في لندن بتاريخ 9 مارس 1776 عن دار النشر "ويليام سترهان وتوماس كاديل"، والذي دشن ميلاد علم الاقتصاد كعلم تجريبي مستقل عن الفلسفة الأخلاقية التقليدية.',
    descEn:
      'The landmark first edition published in London on March 9, 1776, by William Strahan and Thomas Cadell in two quarto volumes, crystallizing the birth of economics as an autonomous empirical science.',
    scientificInsightAr:
      'تزامن صدور كتاب ثروة الأمم عام 1776 مع إعلان استقلال الولايات المتحدة الأمريكية، ليمثلا معاً نقطة التحول الكبرى نحو الحرية السياسية والاقتصادية في العالم الحديث.',
    scientificInsightEn:
      'The Wealth of Nations coincided with the American Declaration of Independence in 1776, jointly forging the twin pillars of modern political and economic liberty.',
  },
  {
    id: 'quill_balance_scale_georgian_coins',
    xPct: 82.0,
    yPct: 52.0,
    titleAr: 'ميزان الصائغ والعملات الفضية ومفارقة القيمة (Value Paradox)',
    titleEn: 'Apothecary Balance, Georgian Coinage & The Paradox of Value',
    categoryAr: 'نظرية القيمة والأسعار',
    categoryEn: 'Theory of Value & Relative Prices',
    descAr:
      'الميزان النحاسي الدقيق والشلنات الفضية الجورجية على منضدة سميث تجسد تمييزه الشهير بين "القيمة الاستعمالية" (Value in Use) و"القيمة التبادلية" (Value in Exchange)، والمعروف بـ "مفارقة الماء والماس": فالماء عظيم النفع لكنه زهيد الثمن، بينما الماس قليل النفع لكنه باهظ الثمن.',
    descEn:
      'The precision brass apothecary scale and silver shillings illuminate Smith’s distinction between "value in use" and "value in exchange"—the celebrated Diamond-Water Paradox: nothing is more useful than water yet it commands low price, while a diamond has scarce utility yet enormous exchange value.',
    scientificInsightAr:
      'وضع سميث بذور نظرية العمل في القيمة (Labor Theory of Value) التي طورها لاحقاً ديفيد ريكاردو، قبل أن تحلها المدرسة الحدية (Marginalism) بالمنفعة الحدية.',
    scientificInsightEn:
      'Smith planted the roots of the labor theory of value, which anticipated David Ricardo and was later resolved by the Marginalist Revolution via marginal utility.',
  },
  {
    id: 'absolute_advantage_free_trade',
    xPct: 78.0,
    yPct: 82.0,
    titleAr: 'الميزة المطلقة والتجارة الدولية الحرة (Absolute Advantage)',
    titleEn: 'Absolute Advantage & Commercial Freedom',
    categoryAr: 'التجارة الدولية ونقد المذهب التجاري',
    categoryEn: 'International Trade & Anti-Mercantilism',
    descAr:
      'الأساس النظري لدحض سياسات الحماية الجمركية والمذهب التجاري (المركنتلية)؛ برهن سميث أن الدول لا تغتني بتكديس الذهب والفضة وفرض القيود الجمركية، بل بالتخصص فيما تملكه من "ميزة مطلقة" في تكاليف الإنتاج والتبادل التجاري الحر مع الأمم الأخرى.',
    descEn:
      'Smith’s definitive refutation of mercantilist protectionism: nations do not grow rich by hoarding gold and imposing tariffs, but by specializing according to Absolute Advantage in production costs and engaging in unfettered multilateral trade.',
    scientificInsightAr:
      'تعتمد الميزة المطلقة لآدم سميث على فارق تكلفة الساعات الإنتاجية بين بلدين، والتي طورها تلميذه ديفيد ريكاردو إلى نظرية "الميزة النسبية" (Comparative Advantage).',
    scientificInsightEn:
      'Absolute advantage demonstrates that if Country A produces grain cheaper and Country B produces cloth cheaper, mutual trade yields higher aggregate wealth for both.',
  },
];

export const AdamSmithWealthOfNationsStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<SmithHotspot>(SMITH_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Studio Mode: 'pin_factory' vs 'invisible_hand'
  const [studioMode, setStudioMode] = useState<'pin_factory' | 'invisible_hand'>('pin_factory');

  // Mode 1: Pin Factory Simulator State
  const [workerCount, setWorkerCount] = useState<number>(10);
  const [isSpecialized, setIsSpecialized] = useState<boolean>(true);

  // Productivity calculation
  const factoryMetrics = useMemo(() => {
    if (!isSpecialized) {
      // Craft worker alone: ~20 pins/worker/day
      const perWorker = 20;
      const total = workerCount * perWorker;
      return {
        perWorkerDaily: perWorker,
        totalFactoryDaily: total,
        multiplier: 1,
        efficiencyPct: 1,
      };
    } else {
      // Specialized Smithian division: ~4,800 pins/worker/day with 18 distinct steps
      const perWorker = 4800;
      const total = workerCount * perWorker;
      const multiplier = Math.round(perWorker / 20); // 240x to 2400x
      return {
        perWorkerDaily: perWorker,
        totalFactoryDaily: total,
        multiplier,
        efficiencyPct: 100,
      };
    }
  }, [workerCount, isSpecialized]);

  // Mode 2: Invisible Hand Equilibrium State
  const [marketPrice, setMarketPrice] = useState<number>(50);
  const equilibriumPrice = 50;

  const marketCondition = useMemo(() => {
    if (marketPrice > equilibriumPrice) {
      const surplusUnits = (marketPrice - equilibriumPrice) * 15;
      return {
        statusAr: 'فائض في المعروض (Surplus) — الأسعار مرتفعة عن التوازن',
        statusEn: 'Market Surplus — Price is above equilibrium',
        color: 'rose',
        actionAr: 'اليد الخفية تضغط على البائعين لخفض الأسعار تلقائياً حتى يعود التوازن.',
        actionEn: 'The invisible hand exerts downward price pressure until supply equals demand.',
        surplus: surplusUnits,
        shortage: 0,
      };
    } else if (marketPrice < equilibriumPrice) {
      const shortageUnits = (equilibriumPrice - marketPrice) * 15;
      return {
        statusAr: 'عجز في المعروض (Shortage) — الأسعار منخفضة والطلب يتجاوز العرض',
        statusEn: 'Market Shortage — Excess demand drives prices upward',
        color: 'amber',
        actionAr: 'اليد الخفية تدفع المشترين للتنافس ورفع الأسعار تلقائياً حتى يعود التوازن.',
        actionEn: 'The invisible hand drives competitive bidding upward until market clears.',
        surplus: 0,
        shortage: shortageUnits,
      };
    } else {
      return {
        statusAr: 'توازن تام للسوق (Market Equilibrium) — العرض يطابق الطلب بدقة',
        statusEn: 'Perfect Market Equilibrium — Supply equals Demand',
        color: 'emerald',
        actionAr: 'توازن مستقر وكفاءة باريتو قصوى في توزيع الموارد الاقتصادية.',
        actionEn: 'Stable equilibrium with maximal consumer and producer surplus.',
        surplus: 0,
        shortage: 0,
      };
    }
  }, [marketPrice, equilibriumPrice]);

  const modalData: HiResImageModalData = {
    imageUrl: adamSmithPhoto,
    titleAr: 'الطبعة الأولى لكتاب ثروة الأمم 1776 — آدم سميث',
    titleEn: 'Adam Smith’s The Wealth of Nations 1776 First Edition Master Folio',
    subtitleAr: 'ميلاد علم الاقتصاد السياسي واليد الخفية ومضاعف تقسيم العمل',
    subtitleEn: 'The Birth of Classical Political Economy & The Division of Labour',
    descriptionAr:
      'لوحة أرشيفية نادرة بدقة 4K للمجلد الأول من الطبعة الأصلية لكتاب "ثروة الأمم" الصادر في لندن عام 1776 عن دار النشر سترهان وكاديل. تعرض الصفحة المفتوحة بداية الفصل الأول الشهير "عن تقسيم العمل" ومصنع الدبابيس، وتستند بجوارها ريشة الإوزة التنويرية، وميزان الصائغ النحاسي بوزناته الدقيقة، وشلنات فضية جورجية، ومكبرة كلاسيكية من القرن الثامن عشر.',
    descriptionEn:
      'Museum-grade 4K archival photography of the authentic 1776 first edition of Adam Smith’s An Inquiry into the Nature and Causes of the Wealth of Nations, published in London by Strahan & Cadell. The volume lies open to Chapter 1 "Of the Division of Labour" describing the iconic pin factory, accompanied by an 18th-century goose quill, brass apothecary balance, Georgian silver shillings, and turned-horn magnifying glass.',
    locationAr: 'مكتبة الفلسفة والاقتصاد / المجموعات الأرشيفية بجامعة غلاسكو',
    locationEn: 'University of Glasgow Special Collections / Scottish Enlightenment Archives',
    dateOrEraAr: '1776 م (عصر التنوير الاسكتلندي / بريطانيا)',
    dateOrEraEn: '1776 CE (Scottish Enlightenment / Edinburgh & London)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/40 border-amber-900/40 text-slate-100 shadow-2xl'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* 4K Archival Viewer Modal */}
      {isModalOpen && (
        <HiResImageModal
          data={modalData}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          lang={isArabic ? 'ar' : 'en'}
          theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
        />
      )}

      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-yellow-600 to-stone-800 flex items-center justify-center shadow-lg shadow-amber-600/30 text-white">
            <Coins className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                1776 CE • London & Glasgow
              </span>
              <span className="text-xs font-mono text-amber-400 font-bold">
                {isArabic ? 'ثروة الأمم • الطبعة الأولى' : 'The Wealth of Nations • First Edition'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-stone-200">
              {isArabic
                ? 'استوديو آدم سميث: تقسيم العمل ومصنع الدبابيس واليد الخفية'
                : 'Adam Smith Studio: Division of Labour & The Invisible Hand'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white shadow-lg shadow-amber-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص طبعة 1776 بدقة 4K' : 'Inspect 4K Smith 1776 Folio'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left Column: 4K Plate with Interactive Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-amber-900/40 bg-slate-950 shadow-2xl group">
            <img
              src={adamSmithPhoto}
              alt="Adam Smith Wealth of Nations 1776 Master Folio"
              className="w-full h-auto object-cover max-h-[500px] select-none transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Hotspot Markers Overlay */}
            {SMITH_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  style={{
                    left: `${hotspot.xPct}%`,
                    top: `${hotspot.yPct}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer group/btn ${
                    isSelected
                      ? 'scale-125 ring-4 ring-amber-400 bg-amber-500 text-white shadow-lg shadow-amber-500/50'
                      : 'bg-slate-900/80 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 shadow-md backdrop-blur-sm'
                  }`}
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/95 text-amber-200 border border-amber-700/60 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-20">
                    {isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}
                  </span>
                </button>
              );
            })}

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between text-xs text-amber-200/90 font-mono">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'لندن • 9 مارس 1776 م' : 'London • March 9, 1776'}
              </span>
              <span className="text-[11px] text-amber-300 font-bold">
                {isArabic ? '5 نقاط أرشيفية تفاعلية' : '5 Interactive Archival Hotspots'}
              </span>
            </div>
          </div>

          {/* Hotspot Quick Selector Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {SMITH_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                      : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Hotspot Educational Deep Dive */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-900/90 border border-amber-900/40 shadow-xl space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-amber-800/30 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/40">
                {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                X: {selectedHotspot.xPct}% | Y: {selectedHotspot.yPct}%
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black text-white leading-snug">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/50 space-y-1.5 mt-2">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-black">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{isArabic ? 'الأثر التاريخي في علم الاقتصاد الحديث:' : 'Foundational Economic Insight:'}</span>
            </div>
            <p className="text-xs text-amber-200/90 leading-relaxed">
              {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
            </p>
          </div>
        </div>
      </div>

      {/* Simulator Switcher Navigation Tabs */}
      <div className="border-t border-amber-800/30 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-black text-white">
              {isArabic ? 'المختبر الاقتصادي الكلاسيكي لآدم سميث' : 'Adam Smith Classical Economic Laboratory'}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setStudioMode('pin_factory')}
              className={`min-h-[44px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                studioMode === 'pin_factory'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Factory className="w-3.5 h-3.5" />
              <span>{isArabic ? 'محاكي مصنع الدبابيس ومضاعف التخصص' : 'Pin Factory Specialization'}</span>
            </button>
            <button
              onClick={() => setStudioMode('invisible_hand')}
              className={`min-h-[44px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                studioMode === 'invisible_hand'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{isArabic ? 'اليد الخفية وتوازن الأسعار التلقائي' : 'The Invisible Hand Engine'}</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Pin Factory Simulator */}
        {studioMode === 'pin_factory' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Controls Column */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
                <div>
                  <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                    <span>{isArabic ? 'عدد العمال في المصنع (N):' : 'Number of Factory Workers (N):'}</span>
                    <span className="text-amber-400 font-mono text-sm font-black">{workerCount} {isArabic ? 'عمال' : 'workers'}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={workerCount}
                    onChange={(e) => setWorkerCount(Number(e.target.value))}
                    className="w-full accent-amber-500 mt-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>1</span>
                    <span>10 (Smith's Case)</span>
                    <span>50</span>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <span className="text-xs font-bold text-slate-300 block mb-2">
                    {isArabic ? 'نمط تنظيم العمل الإنتاجي:' : 'Work Organization Mode:'}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setIsSpecialized(false)}
                      className={`min-h-[44px] p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        !isSpecialized
                          ? 'bg-rose-950/60 border-rose-500 text-white shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isArabic ? 'حرفي فردي (غير متخصص)' : 'Isolated Craftsman'}
                      <span className="block text-[10px] font-normal opacity-80 mt-0.5">20 دبوس/يوم</span>
                    </button>

                    <button
                      onClick={() => setIsSpecialized(true)}
                      className={`min-h-[44px] p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        isSpecialized
                          ? 'bg-amber-600 border-amber-400 text-white shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isArabic ? 'تقسيم العمل السميثي' : 'Smithian Specialization'}
                      <span className="block text-[10px] font-normal opacity-80 mt-0.5">4,800 دبوس/يوم</span>
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono space-y-1">
                  <div className="text-amber-400 font-bold">{isArabic ? 'قاعدة آدم سميث الإنتاجية:' : 'Smithian Production Law:'}</div>
                  <p className="text-[11px] leading-relaxed text-slate-400">
                    {isArabic
                      ? 'إن أعظم تحسين في القوى الإنتاجية للعمل يكمن في تقسيم العمل؛ حيث يحول العامل من صانع بطيء إلى حلقة فائقة السرعة.'
                      : 'The greatest improvement in the productive powers of labour seems to have been the effects of the division of labour.'}
                  </p>
                </div>
              </div>

              {/* Telemetry & Output Column */}
              <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {isArabic ? 'إنتاج العامل الواحد يومياً' : 'Daily Output / Worker'}
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-amber-300 font-mono mt-1">
                      {factoryMetrics.perWorkerDaily.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{isArabic ? 'دبوس / عامل' : 'pins / worker'}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {isArabic ? 'إجمالي إنتاج المصنع يومياً' : 'Total Factory Output'}
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-1">
                      {factoryMetrics.totalFactoryDaily.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{isArabic ? 'دبوس يومياً' : 'pins / day'}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {isArabic ? 'مضاعف قفزة الإنتاجية' : 'Productivity Multiplier'}
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-yellow-300 font-mono mt-1">
                      {factoryMetrics.multiplier}x
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{isArabic ? 'أضعاف العمل الفردي' : 'vs unspecialized'}</span>
                  </div>
                </div>

                {/* Assembly Line 6 Key Steps SVG Illustration */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 font-bold block">
                    {isArabic ? 'المراحل المتخصصة لصناعة الدبابيس (18 عملية مقسمة إلى 6 محطات):' : 'The 18 Operations Subdivided into Key Stations:'}
                  </span>

                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-1.5 text-center font-mono text-[10px]">
                    <div className={`p-2 rounded-lg border ${isSpecialized ? 'bg-amber-950/40 border-amber-600/40 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                      <div className="font-bold">1. سحب السلك</div>
                      <div className="text-[9px] opacity-75">Drawing Wire</div>
                    </div>
                    <div className={`p-2 rounded-lg border ${isSpecialized ? 'bg-amber-950/40 border-amber-600/40 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                      <div className="font-bold">2. تقويم السلك</div>
                      <div className="text-[9px] opacity-75">Straightening</div>
                    </div>
                    <div className={`p-2 rounded-lg border ${isSpecialized ? 'bg-amber-950/40 border-amber-600/40 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                      <div className="font-bold">3. قطع الأطوال</div>
                      <div className="text-[9px] opacity-75">Cutting Lengths</div>
                    </div>
                    <div className={`p-2 rounded-lg border ${isSpecialized ? 'bg-amber-950/40 border-amber-600/40 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                      <div className="font-bold">4. شحذ الطرف</div>
                      <div className="text-[9px] opacity-75">Pointing Tip</div>
                    </div>
                    <div className={`p-2 rounded-lg border ${isSpecialized ? 'bg-amber-950/40 border-amber-600/40 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                      <div className="font-bold">5. تركيب الرأس</div>
                      <div className="text-[9px] opacity-75">Heading Pin</div>
                    </div>
                    <div className={`p-2 rounded-lg border ${isSpecialized ? 'bg-amber-950/40 border-amber-600/40 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                      <div className="font-bold">6. الطلاء والتعبئة</div>
                      <div className="text-[9px] opacity-75">Packaging</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mode 2: Invisible Hand Simulator */}
        {studioMode === 'invisible_hand' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Controls Column */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
                <div>
                  <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                    <span>{isArabic ? 'سعر السوق السائد (P):' : 'Current Market Price (P):'}</span>
                    <span className="text-amber-400 font-mono text-sm font-black">${marketPrice}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    step="5"
                    value={marketPrice}
                    onChange={(e) => setMarketPrice(Number(e.target.value))}
                    className="w-full accent-amber-500 mt-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>$10 (عجز حاد)</span>
                    <span>$50 (سعر التوازن P*)</span>
                    <span>$90 (فائض حاد)</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setMarketPrice(30)}
                    className="flex-1 min-h-[44px] px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 text-xs font-bold text-slate-300"
                  >
                    {isArabic ? 'اختبار العجز ($30)' : 'Test Shortage ($30)'}
                  </button>
                  <button
                    onClick={() => setMarketPrice(50)}
                    className="flex-1 min-h-[44px] px-3 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 text-xs font-bold text-emerald-300"
                  >
                    {isArabic ? 'نقطة التوازن ($50)' : 'Equilibrium ($50)'}
                  </button>
                  <button
                    onClick={() => setMarketPrice(70)}
                    className="flex-1 min-h-[44px] px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 text-xs font-bold text-slate-300"
                  >
                    {isArabic ? 'اختبار الفائض ($70)' : 'Test Surplus ($70)'}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 font-mono text-xs">
                  <div className="text-amber-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'فعل اليد الخفية التلقائي:' : 'Invisible Hand Automatic Response:'}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300 font-sans">
                    {isArabic ? marketCondition.actionAr : marketCondition.actionEn}
                  </p>
                </div>
              </div>

              {/* Market Status Dashboard & Supply-Demand Diagram */}
              <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                    {isArabic ? 'حالة التوازن الاقتصادي في السوق' : 'Market Equilibrium Condition'}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${
                      marketCondition.color === 'emerald'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : marketCondition.color === 'rose'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}
                  >
                    {isArabic ? marketCondition.statusAr.split('—')[0] : marketCondition.statusEn}
                  </span>
                </div>

                {/* Supply & Demand Vector SVG Diagram */}
                <div className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 flex justify-center">
                  <svg viewBox="0 0 340 180" className="w-full max-w-[340px] h-[180px] overflow-visible">
                    {/* Axes */}
                    <line x1="40" y1="20" x2="40" y2="150" stroke="#64748b" strokeWidth="1.5" />
                    <line x1="40" y1="150" x2="310" y2="150" stroke="#64748b" strokeWidth="1.5" />
                    <text x="35" y="15" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="end">P</text>
                    <text x="315" y="155" fill="#94a3b8" fontSize="10" fontFamily="monospace">Q</text>

                    {/* Demand Curve (Downsloping) */}
                    <line x1="60" y1="35" x2="280" y2="135" stroke="#38bdf8" strokeWidth="2.5" />
                    <text x="285" y="140" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">D</text>

                    {/* Supply Curve (Upsloping) */}
                    <line x1="60" y1="135" x2="280" y2="35" stroke="#f59e0b" strokeWidth="2.5" />
                    <text x="285" y="35" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">S</text>

                    {/* Equilibrium Point E* (P=50, Q=170) */}
                    <circle cx="170" cy="85" r="4" fill="#10b981" />
                    <text x="175" y="80" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">E*</text>

                    {/* Live Market Price Horizontal Line */}
                    {(() => {
                      const currentY = 150 - (marketPrice / 100) * 130;
                      return (
                        <g>
                          <line x1="40" y1={currentY} x2="300" y2={currentY} stroke="#e11d48" strokeWidth="1.5" strokeDasharray="4,3" />
                          <circle cx="40" cy={currentY} r="3" fill="#e11d48" />
                          <text x="45" y={currentY - 4} fill="#fda4af" fontSize="9" fontWeight="bold" fontFamily="monospace">
                            P = ${marketPrice}
                          </text>
                        </g>
                      );
                    })()}
                  </svg>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono text-center">
                  <span className="text-amber-400 font-bold">{isArabic ? 'مقولة سميث الخالدة في ثروة الأمم:' : 'Adam Smith’s Immortal Maxim:'} </span>
                  "{isArabic
                    ? 'ليس من كرم الجزار أو الخباز نتوقع طعام غدائنا، بل من سعيهم لتحقيق مصالحهم الخاصة.'
                    : 'It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.'}"
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
