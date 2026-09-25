import React, { useState } from 'react';
import {
  Sparkles,
  Maximize2,
  Info,
  Layers,
  Calculator,
  Dna,
} from 'lucide-react';
import mendelPhoto from '../../../assets/biology/mendel_pea_hybridization_1866.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface MendelHotspot {
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

export const MENDEL_HOTSPOTS: MendelHotspot[] = [
  {
    id: 'mendel_manuscript_heading',
    xPct: 35.0,
    yPct: 28.0,
    titleAr: 'مخطوطة برنو التاريخية لتجارب تهجين النبات (1866 م)',
    titleEn: 'Brno Original Manuscript: Versuche über Pflanzen-Hybriden (1866)',
    categoryAr: 'تأسيس علم الوراثة الكلاسيكي',
    categoryEn: 'Foundational Mendelian Genetics',
    descAr:
      'نص الورقة العلمية التاريخية التي قدمها الراهب النمساوي جريجور مندل لجمعية التاريخ الطبيعي في برنو عام 1865 ونشرها عام 1866، متضمنة المبادئ الحاكمة لانتقال الصفات الوراثية عبر الأجيال.',
    descEn:
      'Original paper presented by Gregor Mendel to the Natural History Society of Brno in 1865 and published in 1866, establishing quantitative particulate inheritance.',
    scientificProofAr:
      'اعتمد مندل على نبات بسلة الزهور (Pisum sativum) لسهولة زراعته وسرعة دورة حياته واحتوائه على أزهار خنثى تلقح ذاتياً ويسهل تلقيحها خلطياً.',
    scientificProofEn:
      'Mendel selected garden peas (Pisum sativum) due to their bisexual flowers, self-pollination facility, short generation time, and sharply contrasting dual traits.',
  },
  {
    id: 'pea_contrasting_traits',
    xPct: 65.0,
    yPct: 40.0,
    titleAr: 'الصفات الوراثية السبع المتضادة لنبات البسلة (Contrasting Traits)',
    titleEn: 'Pisum sativum: Seven Dichotomous Contrasting Traits',
    categoryAr: 'الأشكال الظاهرية والجينات المتقابلة',
    categoryEn: 'Phenotypic Allelomorphic Characterization',
    descAr:
      'تتبع مندل 7 صفات متضادة نقية: شكل البذرة (أملس سائد / مجعد متنحي)، لون البذرة (أصفر سائد / أخضر متنحي)، لون الزهرة (قرمزي سائد / أبيض متنحي)، وضع الزهرة (إبطي سائد / طرفي متنحي)، طول الساق (طويل سائد / قصير متنحي).',
    descEn:
      'Mendel rigorously tracked 7 distinct trait pairs: seed shape (round/wrinkled), cotyledon color (yellow/green), flower color (purple/white), pod shape (inflated/constricted), and stem height (tall/dwarf).',
    scientificProofAr:
      'وقوع كل صفة من الصفات السبع على كروموسوم منفصل (أو تباعدها مسافياً على نفس الكروموسوم) جنب مندل ظاهرة الارتباط الجيني المعقدة.',
    scientificProofEn:
      'The genes encoding these 7 traits reside on separate chromosomes (or far apart on chromosomes 1, 4, 5, 7), precluding linkage disequilibrium anomalies.',
  },
  {
    id: 'law_of_segregation',
    xPct: 38.0,
    yPct: 65.0,
    titleAr: 'قانون مندل الأول: انعزال العوامل الوراثية (Law of Segregation)',
    titleEn: 'First Law: Principle of Segregation & Complete Dominance',
    categoryAr: 'الوراثة أحادية الهجين (Monohybrid)',
    categoryEn: 'Monohybrid Inheritance & Allele Segregation',
    descAr:
      'عند تهجين فردين نقيين يحملان صفتين متضادتين، تسود إحدى الصفتين بنسبة 100% في الجيل الأول (F1)، وتنعزل الصفة المتنحية لتظهر في الجيل الثاني (F2) بنسبة 3 سائد : 1 متنحي (1 نقي : 2 هجين : 1 متنحي).',
    descEn:
      'Alleles for each trait segregate during gamete formation so that each gamete carries only one allele. In F2, monohybrid crosses yield a 3:1 phenotypic and 1:2:1 genotypic ratio.',
    scientificProofAr:
      'انعزال الكروموسومات المتماثلة في الطور الانفصالي الأول من الانقسام الميوزي يفسر مادياً كيفية انفصال زوج الأليلات إلى أمشاج مختلفة.',
    scientificProofEn:
      'Meiotic anaphase I disjunction of homologous chromosome pairs provides the physical cytological mechanism for allele segregation.',
  },
  {
    id: 'law_of_independent_assortment',
    xPct: 62.0,
    yPct: 75.0,
    titleAr: 'قانون مندل الثاني: التوزيع الحر للعوامل (Independent Assortment)',
    titleEn: 'Second Law: Law of Independent Assortment (9:3:3:1)',
    categoryAr: 'الوراثة ثنائية الهجين (Dihybrid)',
    categoryEn: 'Dihybrid Crosses & Polygenic Segregation',
    descAr:
      'عند تهجين فردين يختلفان في زوجين أو أكثر من الصفات المتضادة؛ يورث كل زوج من الجينات بشكل مستقل تماماً عن الآخر، لتظهر في الجيل الثاني بنسبة 9 سائد-سائد : 3 سائد-متنحي : 3 متنحي-سائد : 1 متنحي-متنحي.',
    descEn:
      'Alleles of two or more different genes assort independently of one another during meiotic gamete formation, producing classical 9:3:3:1 phenotypic distributions in dihybrid F2 generations.',
    scientificProofAr:
      'الاصطفاف العشوائي لأزواج الكروموسومات على خط استواء الخلية في الطور الاستوائي الأول يولد توليفات جينية جديدة تزيد التنوع الوراثي.',
    scientificProofEn:
      'Random alignment of maternal/paternal bivalents at the metaphase I equatorial plate produces 2^n diverse chromosomal gametic permutations.',
  },
  {
    id: 'empirical_counts_stats',
    xPct: 35.0,
    yPct: 82.0,
    titleAr: 'الإحصاء التجريبي الدقيق واختبار كاي تربيع (Empirical Telemetry)',
    titleEn: 'Quantitative Empirical Dataset & Chi-Square (χ²) Goodness-of-Fit',
    categoryAr: 'التحليل الرياضي والإحصائي للبيانات',
    categoryEn: 'Biostatistical Validation & Empirical Ratios',
    descAr:
      'أحصى مندل يدوياً 19,959 نباتاً وبذرة عبر 8 سنوات؛ ففي تجربة لون الأزهار حصل على 705 نبات قرمزي و224 نبات أبيض (نسبة 3.15 : 1)، مما أثبت صحة نموذجه الرياضي بدقة تفوق 99%.',
    descEn:
      'Mendel tallied 19,959 individual pea specimens over 8 years: his purple/white flower trial yielded 705 purple to 224 white (3.15:1), confirmed by modern chi-square tests (p > 0.05).',
    scientificProofAr:
      'تطبيق اختبار كاي تربيع χ² على بيانات مندل يعطي قيمة p > 0.5 مما يدل على التوافق التام بين التوزيع المشاهد والنسبة النظرية 3:1.',
    scientificProofEn:
      'Chi-square statistical verification χ² = Σ(O - E)²/E rigorously confirms no statistically significant discrepancy between empirical data and expected ratios.',
  },
];

export const MendelGeneticsStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<MendelHotspot>(MENDEL_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Monohybrid Parent Genotypes
  const [parent1Mono, setParent1Mono] = useState<'RR' | 'Rr' | 'rr'>('Rr');
  const [parent2Mono, setParent2Mono] = useState<'RR' | 'Rr' | 'rr'>('Rr');

  // Calculate Monohybrid Punnett Matrix
  const getGametesMono = (genotype: string) => {
    if (genotype === 'RR') return ['R', 'R'];
    if (genotype === 'rr') return ['r', 'r'];
    return ['R', 'r'];
  };

  const g1 = getGametesMono(parent1Mono);
  const g2 = getGametesMono(parent2Mono);

  const punnettCells = [
    { cell: g1[0] + g2[0], r1: g1[0], r2: g2[0] },
    { cell: g1[0] + g2[1], r1: g1[0], r2: g2[1] },
    { cell: g1[1] + g2[0], r1: g1[1], r2: g2[0] },
    { cell: g1[1] + g2[1], r1: g1[1], r2: g2[1] },
  ].map((c) => {
    const sorted = c.cell.split('').sort().join('');
    // Normalise 'rR' to 'Rr'
    const clean = sorted === 'Rr' ? 'Rr' : sorted;
    const isDominant = clean.includes('R');
    return {
      genotype: clean,
      phenotypeAr: isDominant ? 'قرمزي السائد (Purple)' : 'أبيض المتنحي (White)',
      phenotypeEn: isDominant ? 'Dominant Purple' : 'Recessive White',
      isDominant,
    };
  });

  const dominantCount = punnettCells.filter((c) => c.isDominant).length;
  const recessiveCount = 4 - dominantCount;

  const modalData: HiResImageModalData = {
    imageUrl: mendelPhoto,
    titleAr: 'مخطوطة جريجور مندل الأصلية: تجارب تهجين النبات (1866 م)',
    titleEn: 'Gregor Mendel’s Versuche über Pflanzen-Hybriden Manuscript (1866 CE)',
    subtitleAr: 'دير القديس توماس بمدينة برنو (Brno) - أسس قوانين الوراثة المندلية ومربع بانيت',
    subtitleEn: 'St. Thomas’s Abbey, Brno - Original foundational paper on Mendelian segregation & independent assortment',
    dateOrEraAr: '1866 م (برنو، جمهورية التشيك / الإمبراطورية النمساوية)',
    dateOrEraEn: '1866 CE (Brno, Austrian Empire / Czech Republic)',
    locationAr: 'متحف مندل بجامعة ماساريك، برنو',
    locationEn: 'Mendel Museum of Masaryk University, Brno',
    descriptionAr:
      'صورة متحفية فائقة الجودة (4K) للمخطوطة الأصلية للعالم والراهب النمساوي جريجور مندل، المنشورة عام 1866 تحت عنوان "تجارب على هجناء النباتات" (Versuche über Pflanzen-Hybriden). تتضمن المخطوطة جداول إحصائية دقيقة لنتائج التهجين لنبات بسلة الزهور (Pisum sativum)، مع الرسوم التوضيحية النباتية للأزهار القرمزية والبيضاء والبذور الملساء والمجعدة، وتوثيق النسب التجريبية (3:1 و 9:3:3:1) التي غيرت مسار علم الأحياء الحديث.',
    descriptionEn:
      'Museum-grade 4K archival photograph of Gregor Mendel’s historic 1866 monograph on plant hybridization from the Mendel Museum in Brno. Shows empirical tallies of 19,959 pea plants across generational crosses, outlining the universal laws of dominant/recessive factors and statistical segregation.',
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black text-lime-300 border-lime-400'
          : isLight
          ? 'bg-gradient-to-br from-lime-50/70 via-stone-50 to-emerald-50/50 text-stone-900 border-lime-200/80 shadow-md'
          : 'bg-gradient-to-br from-stone-950 via-neutral-900 to-lime-950/30 text-stone-100 border-lime-900/50 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-lime-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-500">
            <Dna className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-lime-500/20 text-lime-400 border border-lime-500/30">
                {isArabic ? 'الوراثة المندلية 1866 م' : 'Mendelian Genetics 1866 CE'}
              </span>
              <span className="text-xs text-lime-500/80 font-mono">4K Archival Plate</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو جريجور مندل: تجارب تهجين النبات وقوانين الوراثة'
                : 'Gregor Mendel Studio: Plant Hybridization & Laws of Inheritance'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-lime-500 text-stone-950 hover:bg-lime-400 transition-all shadow-md cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير مخطوطة مندل 4K' : 'Inspect 4K Mendel Manuscript'}</span>
        </button>
      </div>

      {/* 4K Archival Viewport with Interactive Hotspots */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden mt-6 border border-lime-500/30 shadow-2xl bg-black select-none group">
        <img
          src={mendelPhoto}
          alt="Gregor Mendel 1866 Pea Hybridization Manuscript"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.04]"
        />

        {/* Pulsating Interactive Hotspots */}
        {MENDEL_HOTSPOTS.map((spot) => {
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
                    isActive ? 'bg-lime-400' : 'bg-lime-500/50'
                  }`}
                />
                <span
                  className={`absolute w-6 h-6 rounded-full border-2 ${
                    isActive
                      ? 'border-lime-300 bg-lime-400/30'
                      : 'border-white/80 bg-black/40 group-hover/btn:border-lime-400'
                  }`}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-lime-400 scale-125 ring-2 ring-white text-black'
                      : 'bg-white group-hover/btn:bg-lime-300'
                  }`}
                >
                  <Sparkles className="w-2 h-2 text-black" />
                </div>

                <div
                  className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                    isActive
                      ? 'bg-lime-500 text-black border-white opacity-100 scale-100'
                      : 'bg-black/85 text-lime-300 border-lime-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Bottom Metadata Bar */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-lime-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-lime-300">
            <span>{isArabic ? '🌱 نبات التجربة: بسلة الزهور (Pisum sativum)' : '🌱 Organism: Pisum sativum'}</span>
            <span>•</span>
            <span>{isArabic ? '📜 المبدأ الأول: انعزال العوامل (3:1)' : '📜 Law I: Segregation (3:1)'}</span>
            <span>•</span>
            <span>{isArabic ? '🎲 المبدأ الثاني: التوزيع الحر (9:3:3:1)' : '🎲 Law II: Independent Assortment (9:3:3:1)'}</span>
          </div>
          <span className="text-[11px] font-mono text-lime-400 font-bold">
            CLASSICAL-GENETICS-ARCHIVE
          </span>
        </div>
      </div>

      {/* Selected Hotspot Detailed Diagnostic Drawer */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-lime-400 text-lime-300'
            : isLight
            ? 'bg-gradient-to-r from-lime-50 via-white to-emerald-50/70 border-lime-300 text-stone-900 shadow-sm'
            : 'bg-gradient-to-r from-stone-900 via-neutral-900 to-lime-950/40 border-lime-800/40 text-stone-100 shadow-xl'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="p-3 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-500 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-lime-500/20 border border-lime-500/40 text-lime-400">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
                <h3 className="text-base sm:text-lg font-bold">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h3>
              </div>

              <p className="text-xs sm:text-sm mt-2 leading-relaxed opacity-90">
                {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
              </p>

              <div
                className={`mt-3 p-3 rounded-xl border text-xs font-medium flex items-center gap-2.5 ${
                  isLight
                    ? 'bg-lime-100/70 border-lime-300 text-stone-950'
                    : 'bg-black/40 border-lime-500/30 text-lime-200'
                }`}
              >
                <Info className="w-4 h-4 shrink-0 text-lime-500" />
                <span>
                  <strong>{isArabic ? 'البرهان الوراثي والميوزي: ' : 'Genetic Evidence: '}</strong>
                  {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-xs font-bold text-lime-500">
              {isArabic ? 'محطات الوراثة المندلية:' : 'Mendelian Stations:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {MENDEL_HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveHotspot(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    s.id === activeHotspot.id
                      ? 'bg-lime-500 text-black shadow-md font-black'
                      : isLight
                      ? 'bg-lime-100 text-stone-800 hover:bg-lime-200'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {isArabic ? s.titleAr.split(' ')[0] + ' ' + (s.titleAr.split(' ')[1] || '') : s.titleEn.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Punnett Square Cross Engine */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isLight ? 'bg-white border-lime-200' : 'bg-stone-900/60 border-lime-900/40'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-lime-500/20">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-lime-500" />
            <h4 className="text-sm font-bold">
              {isArabic
                ? 'محاكي مربع بانيت الرياضي لحساب نسب الجيلين الأول والثاني (F1 & F2)'
                : 'Real-Time Punnett Square Cross & Gamete Segregation Engine'}
            </h4>
          </div>
          <span className="text-xs font-mono font-bold text-lime-400">
            Punnett Probability Model
          </span>
        </div>

        {/* Parent Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="p-3 rounded-xl bg-lime-500/10 border border-lime-500/30">
            <label className="text-xs font-bold text-lime-400 block mb-1.5">
              {isArabic ? 'التركيب الجيني للأب (Parent 1 ♂):' : 'Parent 1 Genotype (♂):'}
            </label>
            <div className="flex gap-2">
              {(['RR', 'Rr', 'rr'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setParent1Mono(g)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-black transition-all ${
                    parent1Mono === g
                      ? 'bg-lime-500 text-black shadow-md'
                      : 'bg-black/30 text-stone-300 hover:bg-black/50 border border-stone-700'
                  }`}
                >
                  {g} {g === 'RR' ? '(قرمزي نقي)' : g === 'Rr' ? '(قرمزي هجين)' : '(أبيض متنحي)'}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-lime-500/10 border border-lime-500/30">
            <label className="text-xs font-bold text-lime-400 block mb-1.5">
              {isArabic ? 'التركيب الجيني للأم (Parent 2 ♀):' : 'Parent 2 Genotype (♀):'}
            </label>
            <div className="flex gap-2">
              {(['RR', 'Rr', 'rr'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setParent2Mono(g)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-black transition-all ${
                    parent2Mono === g
                      ? 'bg-lime-500 text-black shadow-md'
                      : 'bg-black/30 text-stone-300 hover:bg-black/50 border border-stone-700'
                  }`}
                >
                  {g} {g === 'RR' ? '(قرمزي نقي)' : g === 'Rr' ? '(قرمزي هجين)' : '(أبيض متنحي)'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Punnett Table */}
        <div className="mt-4 p-4 rounded-xl bg-black/40 border border-lime-500/30 overflow-x-auto">
          <div className="min-w-[320px] max-w-md mx-auto grid grid-cols-3 gap-2 text-center text-xs font-bold">
            <div className="p-2 rounded bg-stone-800 text-stone-400">♀ \ ♂</div>
            <div className="p-2 rounded bg-lime-500/20 text-lime-400 font-mono text-sm">{g1[0]}</div>
            <div className="p-2 rounded bg-lime-500/20 text-lime-400 font-mono text-sm">{g1[1]}</div>

            <div className="p-2 rounded bg-lime-500/20 text-lime-400 font-mono text-sm flex items-center justify-center">{g2[0]}</div>
            <div className={`p-3 rounded-lg border font-mono font-black text-sm flex flex-col justify-center ${punnettCells[0].isDominant ? 'bg-purple-900/60 border-purple-500 text-purple-200' : 'bg-stone-800 border-stone-600 text-white'}`}>
              <span>{punnettCells[0].genotype}</span>
              <span className="text-[10px] font-sans font-normal opacity-75">{punnettCells[0].isDominant ? 'قرمزي' : 'أبيض'}</span>
            </div>
            <div className={`p-3 rounded-lg border font-mono font-black text-sm flex flex-col justify-center ${punnettCells[1].isDominant ? 'bg-purple-900/60 border-purple-500 text-purple-200' : 'bg-stone-800 border-stone-600 text-white'}`}>
              <span>{punnettCells[1].genotype}</span>
              <span className="text-[10px] font-sans font-normal opacity-75">{punnettCells[1].isDominant ? 'قرمزي' : 'أبيض'}</span>
            </div>

            <div className="p-2 rounded bg-lime-500/20 text-lime-400 font-mono text-sm flex items-center justify-center">{g2[1]}</div>
            <div className={`p-3 rounded-lg border font-mono font-black text-sm flex flex-col justify-center ${punnettCells[2].isDominant ? 'bg-purple-900/60 border-purple-500 text-purple-200' : 'bg-stone-800 border-stone-600 text-white'}`}>
              <span>{punnettCells[2].genotype}</span>
              <span className="text-[10px] font-sans font-normal opacity-75">{punnettCells[2].isDominant ? 'قرمزي' : 'أبيض'}</span>
            </div>
            <div className={`p-3 rounded-lg border font-mono font-black text-sm flex flex-col justify-center ${punnettCells[3].isDominant ? 'bg-purple-900/60 border-purple-500 text-purple-200' : 'bg-stone-800 border-stone-600 text-white'}`}>
              <span>{punnettCells[3].genotype}</span>
              <span className="text-[10px] font-sans font-normal opacity-75">{punnettCells[3].isDominant ? 'قرمزي' : 'أبيض'}</span>
            </div>
          </div>
        </div>

        {/* Results Telemetry Bar */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/40 flex items-center justify-between">
            <span className="text-xs text-purple-200 font-bold">
              {isArabic ? 'الصفة السائدة (أزهار قرمزية):' : 'Dominant Phenotype (Purple):'}
            </span>
            <span className="text-sm font-mono font-black text-purple-300">
              {dominantCount} / 4 ({((dominantCount / 4) * 100).toFixed(0)}%)
            </span>
          </div>

          <div className="p-3 rounded-xl bg-stone-900 border border-stone-700 flex items-center justify-between">
            <span className="text-xs text-stone-300 font-bold">
              {isArabic ? 'الصفة المتنحية (أزهار بيضاء):' : 'Recessive Phenotype (White):'}
            </span>
            <span className="text-sm font-mono font-black text-stone-100">
              {recessiveCount} / 4 ({((recessiveCount / 4) * 100).toFixed(0)}%)
            </span>
          </div>
        </div>
      </div>

      {/* 4K Modal */}
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

export default MendelGeneticsStudio;
