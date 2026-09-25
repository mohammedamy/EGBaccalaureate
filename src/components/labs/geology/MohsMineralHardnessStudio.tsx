import React, { useState } from 'react';
import {
  Gem,
  Maximize2,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import mohsPhoto from '../../../assets/geology/mohs_hardness_minerals_1812.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface MohsHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  chemicalFormula: string;
  hardness: number;
}

export const MOHS_HOTSPOTS: MohsHotspot[] = [
  {
    id: 'talc_gypsum',
    xPct: 18.0,
    yPct: 25.0,
    titleAr: 'التلك (1) والجبس (2) — أنعم المعادن رسوبياً',
    titleEn: 'Talc (1) & Gypsum (2) - Basal Cleavage Soft Minerals',
    categoryAr: 'معادن الصلادة المتدنية والملمس الصابوني',
    categoryEn: 'Low-Hardness Silicates & Sulfates',
    descAr:
      'التلك هو ألين المعادن على مقياس موهس بصلادة (1)، يمتاز بملمس دهني صابوني وبريق لؤلؤي؛ يليه الجبس بصلادة (2) وهو كبريتات كالسيوم مائية ينخدش بظفر الإنسان (2.5).',
    descEn:
      'Talc is the softest mineral with Mohs hardness 1, possessing a soapy feel and pearly luster; Gypsum (hardness 2, hydrous calcium sulfate) is easily scratched by the human fingernail (2.5).',
    chemicalFormula: 'Mg3Si4O10(OH)2 / CaSO4·2H2O',
    hardness: 1.5,
  },
  {
    id: 'calcite_fluorite',
    xPct: 40.0,
    yPct: 30.0,
    titleAr: 'الكالسيت (3) والفلوريت (4) — بريق زجاجي وانفصام متقن',
    titleEn: 'Calcite (3) & Fluorite (4) - Vitreous Rhombohedral & Octahedral',
    categoryAr: 'الكربونات والهاليدات الزجاجية',
    categoryEn: 'Carbonates & Halides',
    descAr:
      'الكالسيت (3) كربونات كالسيوم يمتاز بانفصام معيني الأوجه في ثلاثة اتجاهات وبريق زجاجي وينخدش بالعملة النحاسية (3.5) ويتفاعل بفوران مع حمض الهيدروكلوريك المخفف؛ يليه الفلوريت (4) بهاليدات الكالسيوم.',
    descEn:
      'Calcite (3, CaCO3) displays perfect rhombohedral 3-directional cleavage, vitreous luster, effervesces with dilute HCl, and is scratched by copper coins (3.5); Fluorite (4, CaF2) cleaves octahedrally.',
    chemicalFormula: 'CaCO3 / CaF2',
    hardness: 3.5,
  },
  {
    id: 'apatite_orthoclase',
    xPct: 62.0,
    yPct: 35.0,
    titleAr: 'الأباتيت (5) والأرثوكليز (6) — الحد الفاصل للزجاج',
    titleEn: 'Apatite (5) & Orthoclase Feldspar (6) - Silicate Transition',
    categoryAr: 'الفوسفات وفلدسبار السيليكات الخزفية',
    categoryEn: 'Phosphates & Potassium Tectosilicates',
    descAr:
      'الأباتيت (5) ينخدش بزجاج النافذة (5.5) والسكين الفولاذي، بينما الأرثوكليز (الفلدسبار البوتاسي 6) يخدش زجاج النافذة وله بريق لؤلؤي على أسطح الانفصام وخزفي على المكسر.',
    descEn:
      'Apatite (5) is scratched by window glass (5.5); Orthoclase potassium feldspar (6, KAlSi3O8) scratches window glass and displays pearly cleavage planes.',
    chemicalFormula: 'Ca5(PO4)3(F,Cl,OH) / KAlSi3O8',
    hardness: 5.5,
  },
  {
    id: 'quartz_topaz',
    xPct: 30.0,
    yPct: 75.0,
    titleAr: 'الكوارتز (7) والتوباز (8) — صلادة سيليكاتية فائقة',
    titleEn: 'Quartz (7) & Topaz (8) - Hard Framework Silicates',
    categoryAr: 'السيليكات المتماسكة عديمة الانفصام',
    categoryEn: 'Framework & Nesosilicates',
    descAr:
      'الكوارتز (المرو 7) ثاني أكسيد السيليكون النقي، عديم الانفصام، مكسره محاري ومخدشه أبيض وبريقه زجاجي يخدش لوح المخدش الخزفي (6.5)؛ يليه التوباز (8) من أصلب الأحجار الكريمة.',
    descEn:
      'Quartz (7, SiO2) is devoid of cleavage, exhibits conchoidal fracture, white streak, vitreous luster, and scratches streak plates (6.5); Topaz (8) represents superior gem hardness.',
    chemicalFormula: 'SiO2 / Al2SiO4(F,OH)2',
    hardness: 7.5,
  },
  {
    id: 'corundum_diamond',
    xPct: 78.0,
    yPct: 72.0,
    titleAr: 'الكوراندوم (9) والماس (10) — قمة مقياس الصلادة الذري',
    titleEn: 'Corundum (9) & Diamond (10) - Ultimate Covalent Hardness',
    categoryAr: 'الأكاسيد المتبلورة وروابط الكربون التساهمية',
    categoryEn: 'High-Lattice Oxides & Pure Tetrahedral Carbon',
    descAr:
      'الكوراندوم (9) أكسيد ألومنيوم صلد (الياقوت والصفير)؛ والماس (10) أصلد مادة طبيعية في الكون، يتكون من ذرات كربون نقية بروابط تساهمية رباعية محكمة يقطع ويصقل جميع المعادن الأخرى.',
    descEn:
      'Corundum (9, Al2O3, sapphire/ruby) and Diamond (10, pure carbon tetrahedral covalent lattice) are the apex minerals cutting and abrading all natural matter.',
    chemicalFormula: 'Al2O3 / C',
    hardness: 9.5,
  },
];

export interface MineralSpecimen {
  rank: number;
  nameAr: string;
  nameEn: string;
  formula: string;
  lusterAr: string;
  lusterEn: string;
  streakAr: string;
  streakEn: string;
  cleavageAr: string;
  cleavageEn: string;
  fractureAr: string;
  fractureEn: string;
  specificGravity: number;
  colorNoteAr: string;
}

export const MINERALS_10: MineralSpecimen[] = [
  { rank: 1, nameAr: 'تَلْك (Talc)', nameEn: 'Talc', formula: 'Mg3Si4O10(OH)2', lusterAr: 'لؤلؤي/شحمي', lusterEn: 'Pearly to greasy', streakAr: 'أبيض', streakEn: 'White', cleavageAr: 'صفائحي في اتجاه واحد', cleavageEn: 'Perfect basal (1 dir)', fractureAr: 'غير مستوٍ', fractureEn: 'Uneven', specificGravity: 2.7, colorNoteAr: 'رمادي أو أخضر باهت صابوني' },
  { rank: 2, nameAr: 'جِبْس (Gypsum)', nameEn: 'Gypsum', formula: 'CaSO4·2H2O', lusterAr: 'لؤلؤي أو زجاجي', lusterEn: 'Pearly to vitreous', streakAr: 'أبيض', streakEn: 'White', cleavageAr: 'صفائحي جيد جداً', cleavageEn: 'Micaceous (1 dir)', fractureAr: 'شظوي', fractureEn: 'Splintery', specificGravity: 2.3, colorNoteAr: 'شفاف أو أبيض رمادي ناعم' },
  { rank: 3, nameAr: 'كالْسِيت (Calcite)', nameEn: 'Calcite', formula: 'CaCO3', lusterAr: 'زجاجي', lusterEn: 'Vitreous', streakAr: 'أبيض', streakEn: 'White', cleavageAr: 'معيني في ثلاثة اتجاهات', cleavageEn: 'Rhombohedral (3 dir)', fractureAr: 'غير مستوٍ', fractureEn: 'Uneven', specificGravity: 2.71, colorNoteAr: 'فوران مع حمض الهيدروكلوريك المخفف' },
  { rank: 4, nameAr: 'فلورِيت (Fluorite)', nameEn: 'Fluorite', formula: 'CaF2', lusterAr: 'زجاجي', lusterEn: 'Vitreous', streakAr: 'أبيض', streakEn: 'White', cleavageAr: 'ثماني الأوجه في أربعة اتجاهات', cleavageEn: 'Octahedral (4 dir)', fractureAr: 'محاري إلى غير مستوٍ', fractureEn: 'Sub-conchoidal', specificGravity: 3.18, colorNoteAr: 'متعدد الألوان فلوري (بنفسجي، أخضر، أصفر)' },
  { rank: 5, nameAr: 'أباتِيت (Apatite)', nameEn: 'Apatite', formula: 'Ca5(PO4)3(F,Cl,OH)', lusterAr: 'زجاجي مائل للصمغي', lusterEn: 'Vitreous to resinous', streakAr: 'أبيض', streakEn: 'White', cleavageAr: 'قاعدي ضعيف', cleavageEn: 'Indistinct basal', fractureAr: 'محاري', fractureEn: 'Conchoidal', specificGravity: 3.2, colorNoteAr: 'أخضر مزرق أو بني' },
  { rank: 6, nameAr: 'أرثوكْلِيز (Orthoclase)', nameEn: 'Orthoclase', formula: 'KAlSi3O8', lusterAr: 'لؤلؤي أو زجاجي', lusterEn: 'Pearly on cleavage', streakAr: 'أبيض', streakEn: 'White', cleavageAr: 'في اتجاهين متعامدين (90°)', cleavageEn: 'Two directions at 90°', fractureAr: 'غير مستوٍ', fractureEn: 'Uneven', specificGravity: 2.56, colorNoteAr: 'فلدسبار بوتاسي وردي أو أبيض' },
  { rank: 7, nameAr: 'كوارْتْز / مَرْو (Quartz)', nameEn: 'Quartz', formula: 'SiO2', lusterAr: 'زجاجي ناصع', lusterEn: 'Brilliant vitreous', streakAr: 'أبيض (دائماً)', streakEn: 'Always white', cleavageAr: 'لا ينفصم (عديم الانفصام)', cleavageEn: 'None (no cleavage)', fractureAr: 'محاري واضح', fractureEn: 'Conchoidal', specificGravity: 2.65, colorNoteAr: 'نقي بلوري صخري، بنفسجي جمشت، وردي، دخاني' },
  { rank: 8, nameAr: 'توباز (Topaz)', nameEn: 'Topaz', formula: 'Al2SiO4(F,OH)2', lusterAr: 'زجاجي براق', lusterEn: 'Vitreous', streakAr: 'أبيض', streakEn: 'White', cleavageAr: 'قاعدي تام (اتجاه واحد)', cleavageEn: 'Perfect basal (1 dir)', fractureAr: 'محاري', fractureEn: 'Sub-conchoidal', specificGravity: 3.5, colorNoteAr: 'حجر كريم أصفر ذهبي أو أزرق أو شفاف' },
  { rank: 9, nameAr: 'كوراندوم (Corundum)', nameEn: 'Corundum', formula: 'Al2O3', lusterAr: 'ماسي إلى زجاجي', lusterEn: 'Adamantine to vitreous', streakAr: 'أبيض', streakEn: 'White', cleavageAr: 'عديم الانفصام (انفصال كاذب)', cleavageEn: 'None (parting)', fractureAr: 'غير مستوٍ', fractureEn: 'Uneven', specificGravity: 4.02, colorNoteAr: 'ياقوت أحمر (Ruby) وصفير أزرق (Sapphire)' },
  { rank: 10, nameAr: 'ماس (Diamond)', nameEn: 'Diamond', formula: 'C', lusterAr: 'ماسي استثنائي', lusterEn: 'Adamantine', streakAr: 'لا يوجد (لا يُخدش)', streakEn: 'Colorless / none', cleavageAr: 'ثماني الأوجه تام (4 اتجاهات)', cleavageEn: 'Perfect octahedral (4 dir)', fractureAr: 'محاري', fractureEn: 'Conchoidal', specificGravity: 3.52, colorNoteAr: 'أصلد المعادن الطبيعية على الإطلاق' },
];

export const FIELD_TOOLS = [
  { id: 'fingernail', nameAr: 'ظفر الإنسان', nameEn: 'Human Fingernail', hardness: 2.5, color: 'text-rose-400' },
  { id: 'copper_coin', nameAr: 'عملة نحاسية قديمة', nameEn: 'Copper Coin', hardness: 3.5, color: 'text-amber-400' },
  { id: 'iron_nail', nameAr: 'مسمار حديدي صلب', nameEn: 'Iron Nail', hardness: 4.5, color: 'text-slate-400' },
  { id: 'window_glass', nameAr: 'قطعة زجاج نافذة', nameEn: 'Window Glass Plate', hardness: 5.5, color: 'text-cyan-400' },
  { id: 'porcelain_streak', nameAr: 'لوح مخدش خزفي', nameEn: 'Porcelain Streak Plate', hardness: 6.5, color: 'text-purple-400' },
];

export const MohsMineralHardnessStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<MohsHotspot>(MOHS_HOTSPOTS[3]);
  const [selectedMineral, setSelectedMineral] = useState<MineralSpecimen>(MINERALS_10[6]); // Quartz (7)
  const [selectedTool, setSelectedTool] = useState(FIELD_TOOLS[4]); // Streak plate (6.5)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Scratch test comparator
  const doesMineralScratchTool = selectedMineral.rank > selectedTool.hardness;
  const isToolHarder = selectedTool.hardness > selectedMineral.rank;

  const modalData: HiResImageModalData = {
    imageUrl: mohsPhoto,
    titleAr: 'طقم عينات مقياس موهس للصلادة الأصلي (فريدريش موهس 1812 م)',
    titleEn: 'Friedrich Mohs Original Hardness Scale Mineral Collection (1812 CE)',
    subtitleAr: 'المعادن المرجعية العشرة من التلك 1 إلى الماس 10 وأدوات الفحص الفيزيائي والتماسكي',
    subtitleEn: 'Ten benchmark mineralogical specimens (Talc to Diamond) with diagnostic scratch kit',
    dateOrEraAr: '1812 م (جامعة غراتس / معهد التعدين النمساوي، فيينا)',
    dateOrEraEn: '1812 CE (University of Graz / Austrian Mineralogical Collection, Vienna)',
    locationAr: 'متحف التاريخ الطبيعي في فيينا / قسم علم المعادن والصخور',
    locationEn: 'Natural History Museum Vienna / Mineralogy & Petrology Division',
    descriptionAr:
      'صورة فائقة الدقة (4K) لعلبة العينات التاريخية الأصلية التي ابتكرها الجيولوجي وعالم المعادن الألماني النمساوي فريدريش موهس عام 1812 لتدريج الصلادة النسبية للمعادن من 1 إلى 10. تشتمل على العينات النموذجية الأصلية مرتبة تصاعدياً، مع أدوات الخدش الميدانية (قلم الصلادة، لوح المخدش الخزفي 6.5، والزجاج 5.5، والعملة النحاسية 3.5).',
    descriptionEn:
      'Museum-grade 4K archival photograph of Friedrich Mohs’ original 1812 comparative hardness test box. Features calibrated natural specimens for all 10 scale steps from talc to diamond, accompanied by historical scratch styluses, unglazed porcelain streak plates, and mineralogical cleavage reference charts.',
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black text-amber-300 border-amber-400'
          : isLight
          ? 'bg-gradient-to-br from-amber-50/70 via-stone-50 to-orange-50/50 text-stone-900 border-amber-200/80 shadow-md'
          : 'bg-gradient-to-br from-stone-950 via-neutral-900 to-amber-950/30 text-stone-100 border-amber-900/50 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
            <Gem className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {isArabic ? 'مقياس موهس للصلادة 1812 م' : 'Mohs Hardness Scale 1812 CE'}
              </span>
              <span className="text-xs text-amber-500/80 font-mono">4K Archival Specimen Box</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو موهس: الخواص البصرية والتماسكية وفحص المعادن'
                : 'Mohs Mineralogy Studio: Physical & Optical Mineral Testing'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-amber-500 text-stone-950 hover:bg-amber-400 transition-all shadow-md cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير عينات موهس 4K' : 'Inspect 4K Mohs Box'}</span>
        </button>
      </div>

      {/* 4K Archival Viewport with Interactive Hotspots */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden mt-6 border border-amber-500/30 shadow-2xl bg-black select-none group">
        <img
          src={mohsPhoto}
          alt="Mohs Hardness Scale Minerals"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.05]"
        />

        {/* Pulsating Hotspot Markers */}
        {MOHS_HOTSPOTS.map((spot) => {
          const isActive = spot.id === activeHotspot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/btn cursor-pointer focus:outline-none"
              title={isArabic ? spot.titleAr : spot.titleEn}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                    isActive ? 'bg-amber-400' : 'bg-amber-500/50'
                  }`}
                />
                <span
                  className={`absolute w-6 h-6 rounded-full border-2 ${
                    isActive
                      ? 'border-amber-300 bg-amber-400/30'
                      : 'border-white/80 bg-black/40 group-hover/btn:border-amber-400'
                  }`}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-amber-400 scale-125 ring-2 ring-white text-black'
                      : 'bg-white group-hover/btn:bg-amber-300'
                  }`}
                >
                  <Sparkles className="w-2 h-2 text-black" />
                </div>

                <div
                  className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-black border-white opacity-100 scale-100'
                      : 'bg-black/85 text-amber-300 border-amber-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Bottom Metadata Bar */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-amber-300">
            <span>{isArabic ? '💎 الصلادة: مقاومة المعدن للخدش أو البري' : '💎 Hardness: Resistance to scratching'}</span>
            <span>•</span>
            <span>{isArabic ? '🧪 المخدش: لون مسحوق المعدن الناتج من حكه' : '🧪 Streak: Powder color on unglazed porcelain'}</span>
            <span>•</span>
            <span>{isArabic ? '✨ البريق: كيفية تفاعل سطح المعدن مع الضوء' : '✨ Luster: Surface light reflectance'}</span>
          </div>
          <span className="text-[11px] font-mono text-amber-400 font-bold">
            MINERALOGICAL-DIAGNOSTIC-SPECIMEN
          </span>
        </div>
      </div>

      {/* Selected Hotspot Detailed Diagnostic Drawer */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-amber-400 text-amber-300'
            : isLight
            ? 'bg-gradient-to-r from-amber-50 via-white to-orange-50/70 border-amber-300 text-stone-900 shadow-sm'
            : 'bg-gradient-to-r from-stone-900 via-neutral-900 to-amber-950/40 border-amber-800/40 text-stone-100 shadow-xl'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 shrink-0">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-400">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
                <h3 className="text-base sm:text-lg font-bold">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h3>
              </div>

              <p className="text-xs sm:text-sm mt-2 leading-relaxed opacity-90">
                {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-amber-400">
                <span className="px-2 py-0.5 rounded bg-black/40 border border-amber-500/30">
                  Formula: {activeHotspot.chemicalFormula}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-xs font-bold text-amber-500">
              {isArabic ? 'مجموعات الصلادة المرجعية:' : 'Reference Hardness Pairs:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {MOHS_HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveHotspot(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    s.id === activeHotspot.id
                      ? 'bg-amber-500 text-black shadow-md font-black'
                      : isLight
                      ? 'bg-amber-100 text-stone-800 hover:bg-amber-200'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {isArabic ? s.titleAr.split(' ')[0] : s.titleEn.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 10 Mohs Minerals Master Grid */}
      <div className="mt-6">
        <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 mb-3">
          <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>{isArabic ? 'سلسلة معادن مقياس موهس العشرة المقررة وزارياً' : 'Official Mohs 10 Minerals Registry'}</span>
          </h4>
          <span className="text-xs font-mono text-stone-400">1 (Softest) → 10 (Hardest)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
          {MINERALS_10.map((m) => {
            const isSelected = selectedMineral.rank === m.rank;
            return (
              <button
                key={m.rank}
                onClick={() => setSelectedMineral(m)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 font-black shadow-lg scale-105 border-amber-300'
                    : isLight
                    ? 'bg-white border-amber-200 hover:bg-amber-100/50 text-stone-900'
                    : 'bg-stone-900/60 border-amber-900/40 hover:bg-stone-800/80 text-stone-200'
                }`}
              >
                <span className="text-xs font-mono font-black">{m.rank}</span>
                <span className="text-xs font-bold mt-1 line-clamp-1">{isArabic ? m.nameAr.split(' ')[0] : m.nameEn}</span>
                <span className={`text-[10px] font-mono mt-1 ${isSelected ? 'text-stone-900 font-bold' : 'text-stone-400'}`}>
                  G={m.specificGravity}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Scratch Comparator Lab */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Selected Mineral Physical Deep-Dive */}
        <div
          className={`p-4 sm:p-5 rounded-2xl border ${
            isLight ? 'bg-white border-amber-200' : 'bg-stone-900/60 border-amber-900/40'
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-amber-500/20 mb-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {isArabic ? 'البطاقة الجيولوجية للمعدن المختار:' : 'Selected Mineral Telemetry:'}
            </span>
            <span className="text-xs font-mono font-black text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
              Hardness = {selectedMineral.rank}
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between p-2 rounded-lg bg-black/20">
              <span className="text-stone-400">{isArabic ? 'الاسم والصيغة الكيميائية:' : 'Name & Formula:'}</span>
              <span className="font-bold text-amber-300">{isArabic ? selectedMineral.nameAr : selectedMineral.nameEn} ({selectedMineral.formula})</span>
            </div>

            <div className="flex justify-between p-2 rounded-lg bg-black/20">
              <span className="text-stone-400">{isArabic ? 'البريق (Luster):' : 'Luster:'}</span>
              <span className="font-bold">{isArabic ? selectedMineral.lusterAr : selectedMineral.lusterEn}</span>
            </div>

            <div className="flex justify-between p-2 rounded-lg bg-black/20">
              <span className="text-stone-400">{isArabic ? 'المخدش (Streak):' : 'Streak:'}</span>
              <span className="font-bold text-amber-400">{isArabic ? selectedMineral.streakAr : selectedMineral.streakEn}</span>
            </div>

            <div className="flex justify-between p-2 rounded-lg bg-black/20">
              <span className="text-stone-400">{isArabic ? 'الانفصام (Cleavage):' : 'Cleavage:'}</span>
              <span className="font-bold">{isArabic ? selectedMineral.cleavageAr : selectedMineral.cleavageEn}</span>
            </div>

            <div className="flex justify-between p-2 rounded-lg bg-black/20">
              <span className="text-stone-400">{isArabic ? 'المكسر (Fracture):' : 'Fracture:'}</span>
              <span className="font-bold">{isArabic ? selectedMineral.fractureAr : selectedMineral.fractureEn}</span>
            </div>

            <p className="text-[11px] text-amber-300/80 italic mt-2">
              💡 {selectedMineral.colorNoteAr}
            </p>
          </div>
        </div>

        {/* Scratch Test Against Field Tools */}
        <div
          className={`p-4 sm:p-5 rounded-2xl border ${
            isLight ? 'bg-white border-amber-200' : 'bg-stone-900/60 border-amber-900/40'
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-amber-500/20 mb-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {isArabic ? 'محاكي اختبار الخدش الحقلي بالأدوات الميدانية' : 'Field Scratch Test Simulator'}
            </span>
            <span className="text-[11px] font-mono text-stone-400">Exam Trap Solver</span>
          </div>

          <div className="text-xs space-y-3">
            <div>
              <label className="block text-stone-400 mb-1.5 font-bold">
                {isArabic ? 'اختر أداة الخدش الحقلية:' : 'Select Field Scratch Tool:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {FIELD_TOOLS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTool(t)}
                    className={`p-2 rounded-lg border text-start transition-all cursor-pointer ${
                      selectedTool.id === t.id
                        ? 'bg-amber-500 text-stone-950 font-bold border-amber-300'
                        : isLight
                        ? 'bg-stone-100 hover:bg-stone-200 border-stone-200'
                        : 'bg-black/40 hover:bg-black/70 border-stone-800'
                    }`}
                  >
                    <div className="font-bold line-clamp-1">{isArabic ? t.nameAr : t.nameEn}</div>
                    <div className="text-[10px] font-mono mt-0.5 opacity-80">Hardness: {t.hardness}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Test Result Outcome Banner */}
            <div
              className={`p-3.5 rounded-xl border mt-3 ${
                doesMineralScratchTool
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : isToolHarder
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm">
                {doesMineralScratchTool ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>
                      {isArabic
                        ? `المعدن (${selectedMineral.nameAr.split(' ')[0]}) يخدش أداة (${selectedTool.nameAr})!`
                        : `${selectedMineral.nameEn} (H=${selectedMineral.rank}) scratches ${selectedTool.nameEn} (H=${selectedTool.hardness})!`}
                    </span>
                  </>
                ) : isToolHarder ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <span>
                      {isArabic
                        ? `أداة (${selectedTool.nameAr}) تخدش المعدن (${selectedMineral.nameAr.split(' ')[0]})!`
                        : `${selectedTool.nameEn} (H=${selectedTool.hardness}) scratches ${selectedMineral.nameEn} (H=${selectedMineral.rank})!`}
                    </span>
                  </>
                ) : (
                  <span>{isArabic ? 'صلادة متقاربة جداً' : 'Close hardness threshold'}</span>
                )}
              </div>

              <p className="text-[11px] mt-1.5 opacity-90 leading-relaxed">
                {doesMineralScratchTool
                  ? isArabic
                    ? `لأن صلادة المعدن (${selectedMineral.rank}) أعلى من صلادة الأداة (${selectedTool.hardness})، فيستطيع ترك خدش واضح على سطحها دون أن يتأثر هو.`
                    : `Because mineral hardness (${selectedMineral.rank}) > tool hardness (${selectedTool.hardness}), leaving an etched scratch.`
                  : isArabic
                  ? `لأن صلادة الأداة (${selectedTool.hardness}) تفوق صلادة المعدن (${selectedMineral.rank})، فيترك أثراً واضحاً على المعدن وينتج مسحوق المخدش.`
                  : `Because tool hardness (${selectedTool.hardness}) > mineral hardness (${selectedMineral.rank}), leaving an abraded powder scratch.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4K Lightbox Modal */}
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
