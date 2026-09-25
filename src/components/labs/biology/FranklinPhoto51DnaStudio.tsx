import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Activity,
  Dna,
} from 'lucide-react';
import photo51Img from '../../../assets/biology/rosalind_franklin_photo_51_dna_1952.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface FranklinHotspot {
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

export const FRANKLIN_HOTSPOTS: FranklinHotspot[] = [
  {
    id: 'central_cross',
    xPct: 50.0,
    yPct: 45.0,
    titleAr: 'صليب الحيود المركزي ونمط الحلزون (Central "X" Helical Cross)',
    titleEn: 'Central "X" Diffraction Pattern Confirming Helical Symmetry',
    categoryAr: 'البلورات بالأشعة السينية (Crystallography)',
    categoryEn: 'X-Ray Crystallographic Telemetry',
    descAr:
      'النمط الدائري المتصالب على شكل حرف "X" في مركز الصورة رقم 51؛ هو البصمة الفيزيائية القاطعة على أن جزيء DNA يلتف في شكل حلزوني منتظم وليس شريطاً مستقيماً.',
    descEn:
      'The unmistakable cross-shaped "X" diffraction pattern produced by destructive/constructive interference of X-rays passing through crystallized B-DNA fibers, definitively proving a continuous helical geometry.',
    scientificProofAr:
      'تحويل فورييه (Fourier Transform) للحلزون الأسطواني ينتج رياضياً تقاطعاً متعامداً من نقاط الحيود تعكس زاوية ميل الحلزون.',
    scientificProofEn:
      'Fourier transform mathematics of a continuous cylindrical helix mathematically predicts an orthogonal cross of diffraction intensities matching Photo 51.',
  },
  {
    id: 'layer_lines_pitch',
    xPct: 65.0,
    yPct: 38.0,
    titleAr: 'خطوط الطبقات وخطوة الحلزون (Layer Lines & 3.4 nm Pitch)',
    titleEn: 'Meridional Layer Lines & 3.4 nm Helical Pitch Repeat',
    categoryAr: 'الأبعاد الجزيئية ومسافات التكرار',
    categoryEn: 'Macromolecular Dimensions & Pitch Repeat',
    descAr:
      'المسافة الرأسية بين خطوط الحيود الأفقية المتتالية (Layer Lines 0 to 10) تدل على أن خطوة اللفة الكاملة للحلزون (Helical Pitch) تبلغ تماماً 3.4 نانومتر، وتحتوي اللفة الواحدة على 10 أزواج من القواعد النيتروجينية.',
    descEn:
      'Vertical spacing between horizontal layer lines (L0 to L10) precisely measures a 3.4 nm axial helical pitch, establishing exactly 10 base-pair rungs per complete 360-degree helical turn.',
    scientificProofAr:
      'المسافة بين كل درجتين متعاقبتين من القواعد هي 0.34 نانومتر (3.4 نانومتر مقسومة على 10)، مما يسمح برص القواعد أفقياً دون إجهاد فراغي.',
    scientificProofEn:
      'Axial spacing of 0.34 nm per nucleotide rung (3.4 nm / 10 bp) ensures optimal thermodynamic van der Waals base-stacking stabilization.',
  },
  {
    id: 'missing_fourth_layer',
    xPct: 38.0,
    yPct: 52.0,
    titleAr: 'غياب خط الطبقة الرابعة والثلمان (Missing 4th Layer Line)',
    titleEn: 'Extinction of the 4th Layer Line: Major & Minor Grooves',
    categoryAr: 'التماثل الفراغي وحلزون ثنائي الشريط',
    categoryEn: 'Groove Geometry & Double-Stranded Topology',
    descAr:
      'الانعدام التام لنقاط الحيود على خط الطبقة الرابع (Layer 4) كان اللغز الذي حلته روزاليند فرانكلين: إنه يثبت أن شريطي السكر والفوسفات ليسا متقابلين بزاوية 180° بل تفصلهما إزاحة نسبية قدرها 3/8 اللفة، مولداً الثلم الكبير (Major Groove) والثلم الصغير (Minor Groove).',
    descEn:
      'The systematic extinction of diffraction intensity on the 4th layer line provided the critical mathematical proof that the two sugar-phosphate backbones are offset by 3/8 of the pitch, generating alternating major and minor grooves.',
    scientificProofAr:
      'الثلم الكبير هو الموقع الرئيسي الذي تتعرف فيه الإنزيمات (مثل إنزيمات القصر وتضاعف DNA وبلمرة RNA) على تتابعات القواعد النيتروجينية.',
    scientificProofEn:
      'The major groove exposes unique hydrogen-bonding donor/acceptor patterns vital for sequence-specific recognition by restriction enzymes and transcription factors.',
  },
  {
    id: 'axial_rise_distance',
    xPct: 62.0,
    yPct: 65.0,
    titleAr: 'انعكاس القواعد على المحور وقطر الجزيء (0.34 nm Reflection)',
    titleEn: 'Outer Meridional Reflection: 0.34 nm Stacking & 2.0 nm Width',
    categoryAr: 'الثوابت البيوفيزيائية المعتمدة وزارياً',
    categoryEn: 'Biophysical Constants & Hydration States',
    descAr:
      'أثبتت فرانكلين أن هيكل السكر والفوسفات يقع في الخارج معرضاً للماء (محب للماء)، بينما القواعد النيتروجينية النيتروجينية كارهة للماء ومكدسة في الداخل بشكل عمودي على محور الجزيء، والقطر الكلي الثابت يبلغ 2.0 نانومتر.',
    descEn:
      'Franklin’s humidity-controlled cameras proved the polar sugar-phosphate backbones face outward into solvent, while hydrophobic nitrogenous bases orient inward perpendicular to the helical axis with a uniform 2.0 nm diameter.',
    scientificProofAr:
      'ثبات قطر اللولب عند 2.0 نانومتر استلزم اقتران قاعدة بيورينية ثنائية الحلقة (A أو G) بقاعدة بريميدينية أحادية الحلقة (T أو C) دوماً.',
    scientificProofEn:
      'Constant 2.0 nm helical diameter geometrically dictates that a two-ring purine (A/G) must pair strictly with a single-ring pyrimidine (T/C).',
  },
  {
    id: 'chargaff_watson_crick',
    xPct: 25.0,
    yPct: 20.0,
    titleAr: 'تكامل واطسون وكريك وقواعد شارجاف (Complementary Base Pairing)',
    titleEn: 'Watson-Crick Model & Chargaff’s Equivalence (A=T, G≡C)',
    categoryAr: 'الكيمياء الحيوية للروابط الهيدروجينية',
    categoryEn: 'Hydrogen Bonding & Thermodynamic Equilibrium',
    descAr:
      'الربط العبقري بين صورة فرانكلين وقواعد إروين شارجاف الكيميائية (كمية A تساوي T برابطتين هيدروجينيتين، وكمية G تساوي C بثلاث روابط)؛ كشف النموذج الحلزوني المزدوج المتعاكس (Antiparallel 5\' to 3\') الحائز على نوبل 1962.',
    descEn:
      'Synthesis of Franklin’s diffraction metrics with Chargaff’s stoichiometric ratios (A=T with 2 hydrogen bonds, G≡C with 3 hydrogen bonds) unraveled the antiparallel double-helix model of Watson and Crick (1953).',
    scientificProofAr:
      'ثلاث روابط هيدروجينية بين G وC تجعل جزيئات DNA الغنية بـ G-C أعلى في درجة الانصهار والحرارة اللازمة لفصل شريطيها (Tm).',
    scientificProofEn:
      'Triple hydrogen bonding in G≡C pairs confers significantly higher thermodynamic thermal denaturation stability (Tm) compared to double-bonded A=T.',
  },
];

export const FranklinPhoto51DnaStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<FranklinHotspot>(FRANKLIN_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // DNA Helical Geometry Calculator
  const [basePairsCount, setBasePairsCount] = useState<number>(30); // 30 bp default
  const [gcPercent, setGcPercent] = useState<number>(50); // 50% GC

  const atPercent = 100 - gcPercent;
  const turnsCount = (basePairsCount / 10).toFixed(1);
  const physicalLengthNm = (basePairsCount * 0.34).toFixed(2);

  // Estimated Hydrogen bonds: GC has 3, AT has 2
  const gcPairs = Math.round(basePairsCount * (gcPercent / 100));
  const atPairs = basePairsCount - gcPairs;
  const totalHydrogenBonds = gcPairs * 3 + atPairs * 2;

  // Approximate Melting Temperature Tm = 64.9 + 41 * (gcPairs - 16.4) / basePairsCount (Wallace rule approx)
  const estimatedTmC =
    basePairsCount >= 10
      ? (64.9 + 41 * ((gcPairs - 16.4) / basePairsCount)).toFixed(1)
      : 'N/A';

  const modalData: HiResImageModalData = {
    imageUrl: photo51Img,
    titleAr: 'الصورة رقم 51 الأصلية لروزاليند فرانكلين: حيود الأشعة السينية لـ DNA (مايو 1952 م)',
    titleEn: 'Rosalind Franklin’s Original Photo 51: B-DNA X-Ray Diffraction (May 1952)',
    subtitleAr: 'كلية كينجز لندن (King’s College London) - الصورة التي كشفت البنية الحلزونية المزدوجة للحياة',
    subtitleEn: 'King’s College London Archive - The pivotal diffraction plate establishing the double-helix geometry',
    dateOrEraAr: 'مايو 1952 م (معمل كينجز كوليدج، لندن، المملكة المتحدة)',
    dateOrEraEn: 'May 1952 CE (Biophysics Laboratory, King’s College London)',
    locationAr: 'أرشيف كلية كينجز لندن ومتحف العلوم البريطاني',
    locationEn: 'King’s College London Archives & Science Museum London',
    descriptionAr:
      'صورة متحفية فائقة الجودة (4K) للوح حيود الأشعة السينية الشهير باسم "الصورة 51" (Photo 51)، الذي التقطته عالمة الفيزياء الحيوية والبلورات البريطانية روزاليند فرانكلين وطالب أبحاثها ريموند جوسلينج في مايو 1952 باستخدام ألياف DNA عالية النقاوة ومرطبة (B-form). يظهر في الصورة بوضوح صليب الحيود المركزي ونقاط الطبقات العشر، والمسافة المحورية (0.34 نانومتر) وخطوة الحلزون (3.4 نانومتر) التي كانت المفتاح الحاسم لصياغة نموذج واطسون وكريك عام 1953.',
    descriptionEn:
      'Museum-grade 4K archival photograph of the legendary Photo 51 X-ray diffraction plate taken by biophysicist Rosalind Franklin and Raymond Gosling in May 1952 at King’s College London. Highlights the definitive cross diffraction spots, missing 4th layer line, 3.4 nm helical repeat, and 0.34 nm base stacking that unlocked the molecular double helix.',
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black text-cyan-300 border-cyan-400'
          : isLight
          ? 'bg-gradient-to-br from-cyan-50/70 via-stone-50 to-sky-50/50 text-stone-900 border-cyan-200/80 shadow-md'
          : 'bg-gradient-to-br from-stone-950 via-neutral-900 to-cyan-950/30 text-stone-100 border-cyan-900/50 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-cyan-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-500">
            <Dna className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                {isArabic ? 'حيود الأشعة السينية 1952 م' : 'X-Ray Crystallography 1952 CE'}
              </span>
              <span className="text-xs text-cyan-500/80 font-mono">4K Archival Plate</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو روزاليند فرانكلين: الصورة 51 واللولب المزدوج لـ DNA'
                : 'Rosalind Franklin Studio: Photo 51 & DNA Double Helix Architecture'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-cyan-500 text-stone-950 hover:bg-cyan-400 transition-all shadow-md cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير صورة فرانكلين 4K' : 'Inspect 4K Photo 51'}</span>
        </button>
      </div>

      {/* 4K Archival Viewport with Interactive Hotspots */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden mt-6 border border-cyan-500/30 shadow-2xl bg-black select-none group">
        <img
          src={photo51Img}
          alt="Rosalind Franklin Photo 51 DNA X-Ray Diffraction"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.08]"
        />

        {/* Pulsating Interactive Hotspots */}
        {FRANKLIN_HOTSPOTS.map((spot) => {
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
                    isActive ? 'bg-cyan-400' : 'bg-cyan-500/50'
                  }`}
                />
                <span
                  className={`absolute w-6 h-6 rounded-full border-2 ${
                    isActive
                      ? 'border-cyan-300 bg-cyan-400/30'
                      : 'border-white/80 bg-black/40 group-hover/btn:border-cyan-400'
                  }`}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-cyan-400 scale-125 ring-2 ring-white text-black'
                      : 'bg-white group-hover/btn:bg-cyan-300'
                  }`}
                >
                  <Sparkles className="w-2 h-2 text-black" />
                </div>

                <div
                  className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500 text-black border-white opacity-100 scale-100'
                      : 'bg-black/85 text-cyan-300 border-cyan-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Bottom Metadata Bar */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-cyan-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-cyan-300">
            <span>{isArabic ? '🔬 المرجع: الصورة 51 لكينجز كوليدج (1952)' : '🔬 Source: Photo 51 (Franklin & Gosling, 1952)'}</span>
            <span>•</span>
            <span>{isArabic ? '🧬 اللولب B-DNA: القطر 2.0 نانومتر' : '🧬 B-DNA: 2.0 nm Diameter'}</span>
            <span>•</span>
            <span>{isArabic ? '📏 خطوة الحلزون: 3.4 نانومتر (10 أزواج قواعد)' : '📏 Pitch: 3.4 nm (10 bp/turn)'}</span>
          </div>
          <span className="text-[11px] font-mono text-cyan-400 font-bold">
            MOLECULAR-GENETICS-ARCHIVE
          </span>
        </div>
      </div>

      {/* Selected Hotspot Detailed Diagnostic Drawer */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-cyan-400 text-cyan-300'
            : isLight
            ? 'bg-gradient-to-r from-cyan-50 via-white to-sky-50/70 border-cyan-300 text-stone-900 shadow-sm'
            : 'bg-gradient-to-r from-stone-900 via-neutral-900 to-cyan-950/40 border-cyan-800/40 text-stone-100 shadow-xl'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
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
                    ? 'bg-cyan-100/70 border-cyan-300 text-stone-950'
                    : 'bg-black/40 border-cyan-500/30 text-cyan-200'
                }`}
              >
                <Info className="w-4 h-4 shrink-0 text-cyan-500" />
                <span>
                  <strong>{isArabic ? 'البرهان البيوفيزيائي والبلوري: ' : 'Crystallographic Telemetry: '}</strong>
                  {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-xs font-bold text-cyan-500">
              {isArabic ? 'شواهد فرانكلين الخمسة:' : 'Photo 51 Evidences:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {FRANKLIN_HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveHotspot(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    s.id === activeHotspot.id
                      ? 'bg-cyan-500 text-black shadow-md font-black'
                      : isLight
                      ? 'bg-cyan-100 text-stone-800 hover:bg-cyan-200'
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

      {/* Interactive DNA Helical Geometry & Hydrogen Bonding Calculator */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isLight ? 'bg-white border-cyan-200' : 'bg-stone-900/60 border-cyan-900/40'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-500" />
            <h4 className="text-sm font-bold">
              {isArabic
                ? 'حاسبة القياسات الهندسية للولب المزدوج والروابط الهيدروجينية وطاقة الانصهار'
                : 'DNA Helical Geometry, Hydrogen Bonding & Thermal Stability Engine'}
            </h4>
          </div>
          <span className="text-xs font-mono font-bold text-cyan-400">
            Franklin-Watson-Crick Model
          </span>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-bold text-cyan-400">{isArabic ? 'عدد أزواج القواعد النيتروجينية (Base Pairs):' : 'Number of Base Pairs:'}</span>
              <span className="font-mono font-bold text-cyan-300">{basePairsCount} bp</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={basePairsCount}
              onChange={(e) => setBasePairsCount(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-bold text-cyan-400">{isArabic ? 'نسبة القواعد ثلاثية الروابط (G-C %):' : 'G-C Content Ratio:'}</span>
              <span className="font-mono font-bold text-cyan-300">{gcPercent}% (A-T: {atPercent}%)</span>
            </div>
            <input
              type="range"
              min="20"
              max="80"
              step="5"
              value={gcPercent}
              onChange={(e) => setGcPercent(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Output Metrics Grid */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
            <span className="text-[10px] text-stone-400 block">{isArabic ? 'عدد اللفات الكاملة:' : 'Helical Turns:'}</span>
            <span className="text-sm font-mono font-black text-cyan-400">{turnsCount} {isArabic ? 'لفة' : 'turns'}</span>
          </div>

          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
            <span className="text-[10px] text-stone-400 block">{isArabic ? 'الطول الفيزيائي للجزيء:' : 'Physical Length:'}</span>
            <span className="text-sm font-mono font-black text-cyan-400">{physicalLengthNm} nm (نانومتر)</span>
          </div>

          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
            <span className="text-[10px] text-stone-400 block">{isArabic ? 'إجمالي الروابط الهيدروجينية:' : 'Hydrogen Bonds Total:'}</span>
            <span className="text-sm font-mono font-black text-cyan-400">{totalHydrogenBonds} bonds</span>
          </div>

          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
            <span className="text-[10px] text-stone-400 block">{isArabic ? 'درجة الانصهار المتوقعة (Tm):' : 'Estimated Melting (Tm):'}</span>
            <span className="text-sm font-mono font-black text-cyan-400">{estimatedTmC} °C</span>
          </div>
        </div>

        {/* Ministerial Complementary Base Pairing Rule */}
        <div className="mt-4 p-3 rounded-xl bg-black/40 border border-cyan-500/20 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold">A = T (2 H-Bonds)</span>
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono font-bold">G ≡ C (3 H-Bonds)</span>
          </div>
          <span className="text-stone-300 text-[11px]">
            {isArabic
              ? 'التعاكس القطبي للشريطين (5\' إلى 3\' يقابله 3\' إلى 5\') يتيح تكوين روابط هيدروجينية صحيحة هندسياً.'
              : 'Antiparallel strand orientation (5\'→3\' vs 3\'→5\') allows sterically optimized hydrogen bonding.'}
          </span>
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

export default FranklinPhoto51DnaStudio;
