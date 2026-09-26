import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  Compass,
  Sliders,
  Scale,
  Columns,
} from 'lucide-react';
import vitruvianPhoto from '../../../assets/fine_arts/da_vinci_vitruvian_man_1490.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface VitruvianHotspot {
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

export const VITRUVIAN_HOTSPOTS: VitruvianHotspot[] = [
  {
    id: 'circle_and_square_squaring',
    xPct: 49.0,
    yPct: 47.0,
    titleAr: 'تربيع الدائرة والتوافق الهندسي الكوني',
    titleEn: 'Squaring the Circle & Cosmic Geometric Harmony',
    categoryAr: 'الهندسة المقدسة وفلسفة العمارة',
    categoryEn: 'Sacred Geometry & Architectural Philosophy',
    descAr:
      'استطاع ليوناردو دافنشي في هذا الرسم الإعجازي حل المعضلة الفلسفية والهندسية لتربيع الدائرة (Squaring the Circle) عبر جسد الإنسان؛ حيث يرمز المربع إلى الأرض والعالم المادي القائم على الأبعاد الأربعة والزوايا القائمة، بينما ترمز الدائرة إلى السماء والكمال اللانهائي الإلهي. يُثبت دافنشي أن الإنسان هو المقياس المشترك الجامع بين المادة والروح.',
    descEn:
      'In this iconic master drawing, Leonardo da Vinci resolved the ancient philosophical enigma of squaring the circle using the human form. The square embodies terrestrial reality, stability, and the four cardinal elements, while the circumscribed circle symbolizes celestial perfection and the divine cosmos. Man is established as the harmonic bridge uniting earth and sky.',
    scientificInsightAr:
      'مساحة المربع ومساحة الدائرة في رسم دافنشي متقاربتان بدرجة مدهشة؛ مما عكس فهماً رياضياً عميقاً لكتابات المعماري الروماني ماركوس فيتروفيوس بوليو (القرن الأول قبل الميلاد).',
    scientificInsightEn:
      'The surface area of the inscribed square and circumscribed circle in Leonardo’s schema exhibit mathematical proximity, directly reflecting Marcus Vitruvius Pollio’s architectural canons.',
  },
  {
    id: 'navel_and_pubis_geometric_centers',
    xPct: 48.0,
    yPct: 53.0,
    titleAr: 'السرة وعظم العانة (المركزان الهندسيان المزدوجان)',
    titleEn: 'The Navel & Pubis (Dual Geometric Centers)',
    categoryAr: 'التشريح الهندسي والنسب النسبية',
    categoryEn: 'Geometric Anatomy & Focal Centers',
    descAr:
      'اكتشف فيتروفيوس وطبقه دافنشي ببراعة: أن الجسد البشري له مركزان هندسيان مختلفان باختلاف وضعية الحركة: فحين يمد الإنسان ذراعيه وساقيه منفرجة، تصبح "السرة" هي المركز الهندسي التام للدائرة المحيطة. أما حين يقف منتصباً مستقيماً وذراعاه مفرودتان أفقياً، يصبح "عظم العانة" هو المركز الدقيق للمربع المحيط.',
    descEn:
      'Vitruvius observed, and Leonardo meticulously proved, that the human anatomy possesses two distinct geometric center points depending on posture: when the limbs are splayed diagonally, the navel forms the exact center of the circumscribed circle; when standing erect with arms horizontal, the pubis forms the exact center of the square.',
    scientificInsightAr:
      'المسافة بين السرة وعظم العانة تمثل المفتاح الهندسي لانتقال مركز الثقل الديناميكي أثناء المشي والقفز، وهو ما وظفه دافنشي لاحقاً في تصميم الآلات الميكانيكية الرافعة.',
    scientificInsightEn:
      'The vertical span between the navel and pubis constitutes the kinematic pivot that balances the body’s dynamic center of mass, a principle Leonardo later applied to biomechanical lifting engines.',
  },
  {
    id: 'eight_heads_canonical_height',
    xPct: 48.0,
    yPct: 35.0,
    titleAr: 'كانون الرؤوس الثمانية ومقاييس القامة (8-Heads Canon)',
    titleEn: 'The Eight-Heads Canon & Classical Modular Units',
    categoryAr: 'النظم القياسية والوحدات المعمارية',
    categoryEn: 'Modular Anthropometry & Building Orders',
    descAr:
      'يُبنى كانون فيتروفيوس على نسب كسرية صارمة: يبلغ طول قامة الإنسان البالغ بالضبط 8 أضعاف طول رأسه (من الذقن إلى قمة الرأس). كما يبلغ طول كف اليد عُشر (1/10) طول الجسد، وطول القدم سُدس (1/6) القامة، بينما يساوي طول الذراع المفرود من الكتف إلى أطراف الأصابع ربع (1/4) طول الجسد (الذراع الملكي).',
    descEn:
      'Vitruvian anthropometry is calibrated upon precise rational fractions: standing human height equals exactly 8 times the length of the head (from chin to crown). The hand from wrist to fingertip is 1/10th of height, the foot is 1/6th, and the forearm equals 1/4th (the classical cubit).',
    scientificInsightAr:
      'المسافة بين طرفي الذراعين الممدودتين أفقياً تساوي تماماً طول القامة من الرأس إلى القدمين، مما يجعل محيط جسد الإنسان مربعاً متساوي الأضلاع بنسبة 1:1.',
    scientificInsightEn:
      'The horizontal wingspan between outstretched fingertips precisely equals total standing height, bounding the human envelope inside a perfect 1:1 square.',
  },
  {
    id: 'golden_ratio_phi_harmonics',
    xPct: 56.0,
    yPct: 62.0,
    titleAr: 'النسبة الذهبية فاي (Golden Ratio Φ = 1.618)',
    titleEn: 'The Golden Ratio (Divine Proportion Φ = 1.618)',
    categoryAr: 'الرياضيات والجمال التناسبي',
    categoryEn: 'Harmonic Mathematics & Aesthetic Geometry',
    descAr:
      'يتجلى الرقم الذهبي فاي (Φ ≈ 1.618) في كل مفصل من مفاصل رجل فيتروفيان؛ إذ تُقسم السرة إجمالي طول الجسد إلى نسبة ذهبية (طول القامة الإجمالي مقسوماً على الارتفاع من القدم إلى السرة = 1.618). وتتكرر هذه النسبة بين عظام الأصابع، ومن المرفق إلى راحة اليد، وتوزيع ملامح الوجه، وهي النسبة ذاتها التي استُخدمت في بناء معبد البارثينون وأهرامات الجيزة.',
    descEn:
      'The Golden Ratio ($\phi \approx 1.618$) resonates through every articulation of the Vitruvian Man. The navel divides total standing height into a golden section: total height divided by foot-to-navel height equals 1.618. This divine harmonic reappears in finger phalanges, facial thirds, and the Parthenon.',
    scientificInsightAr:
      'رسم دافنشي هذه الرسوم لتوضيح كتاب صديقه الراهب عالم الرياضيات لوكا باتشولي الشهير "النسبة الإلهية" (De Divina Proportione) عام 1509.',
    scientificInsightEn:
      'Leonardo produced these studies in collaborative dialogue with Franciscan mathematician Luca Pacioli for his definitive 1509 treatise *De Divina Proportione*.',
  },
  {
    id: 'vitruvian_triad_firmitas_utilitas_venustas',
    xPct: 15.0,
    yPct: 52.0,
    titleAr: 'الثالوث الفيتروفي: المتانة والمنفعة والجمال',
    titleEn: 'The Vitruvian Triad: Firmitas, Utilitas, Venustas',
    categoryAr: 'دستور العمارة الكلاسيكية والنظريات',
    categoryEn: 'Architectural Doctrine & Triadic Principles',
    descAr:
      'يُلخص النص المكتوب بخط يد دافنشي العكسي في أسفل وأعلى اللوحة دستور العمارة الخالد لفيتروفيوس، المرتكز على ثلاثة أركان لا غنى عنها لأي مبنى: المتانة الإنشائية (Firmitas)، والمنفعة الوظيفية (Utilitas)، والجمال البصري التناسبي (Venustas). استلهم المعماريون نسب الأعمدة الكلاسيكية (الدوري والأيوني والكورنثي) من نسب جسد الرجل والمرأة والعذراء.',
    descEn:
      'Leonardo’s mirrored handwriting text frames the enduring foundation of architectural theory formulated by Vitruvius: Firmitas (structural durability), Utilitas (functional utility), and Venustas (proportional delight). Classical column orders derived directly from human anatomy: Doric from robust male stature, Ionic from maternal grace, Corinthian from maiden slender proportions.',
    scientificInsightAr:
      'كتب دافنشي النص بخط المرآة (Mirror Writing) من اليمين إلى اليسار بيده اليسرى لحماية أفكاره وملاحظاته التشريحية والفيزيائية من النسخ غير المصرح به.',
    scientificInsightEn:
      'Leonardo inscribed the explanatory text in his characteristic left-handed mirror script (scritto a specchio) from right to left, preserving his anatomical inquiries.',
  },
];

export const VitruvianManArchitectureStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<VitruvianHotspot>(VITRUVIAN_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Engine Mode: 'poses_proportions' | 'golden_spiral_orders'
  const [engineMode, setEngineMode] = useState<'poses_proportions' | 'golden_spiral_orders'>('poses_proportions');

  // Poses State: 'pose_a_square' | 'pose_b_circle' | 'superimposed'
  const [activePose, setActivePose] = useState<'pose_a_square' | 'pose_b_circle' | 'superimposed'>('superimposed');

  // User Stature Scaling Slider (cm)
  const [statureCm, setStatureCm] = useState<number>(176);

  // Derived Vitruvian Units
  const vitruvianMetrics = useMemo(() => {
    const headLength = Math.round((statureCm / 8) * 10) / 10;
    const handLength = Math.round((statureCm / 10) * 10) / 10;
    const footLength = Math.round((statureCm / 6) * 10) / 10;
    const cubitLength = Math.round((statureCm / 4) * 10) / 10;
    const navelHeight = Math.round((statureCm / 1.618) * 10) / 10;
    const goldenRatioCheck = Math.round((statureCm / navelHeight) * 1000) / 1000;

    return {
      headLength,
      handLength,
      footLength,
      cubitLength,
      navelHeight,
      goldenRatioCheck,
    };
  }, [statureCm]);

  const modalData: HiResImageModalData = useMemo(
    () => ({
      imageUrl: vitruvianPhoto,
      titleAr: 'رجل فيتروفيان ونسب العمارة — ليوناردو دافنشي c. 1490',
      titleEn: 'The Vitruvian Man & Classical Architectural Proportions — Leonardo da Vinci c. 1490',
      subtitleAr: 'حبر سيبيا وأقلام رصاص وقلم ريشة وفرجار ومخططات الأعمدة الكلاسيكية',
      subtitleEn: 'Sepia Ink on Paper with Classical Proportional Dividers & Order Drafts',
      descriptionAr:
        'أشهر رسم دياجرامي في تاريخ الإنسانية يجمع بين الفن والهندسة والتشريح وعلم الكونيات. وضعه ليوناردو دافنشي في ميلانو عام 1490 تأكيداً لنظرية فيتروفيوس بأن جسد الإنسان هو النموذج الكوني المتكامل لتربيع الدائرة، والأساس الرياضي لاشتقاق نسب الأعمدة والمعابد المعمارية الخالدة.',
      descriptionEn:
        'The most celebrated graphic synthesis of art, geometry, anatomy, and cosmology in human history. Executed by Leonardo da Vinci in Milan circa 1490, demonstrating Vitruvius’s canon that human anatomy is the microcosm of the universe, resolving the squaring of the circle and providing the mathematical blueprint for classical architecture.',
      locationAr: 'غاليريا ديل أكاديميا، البندقية، إيطاليا',
      locationEn: 'Gallerie dell’Accademia, Venice, Italy',
      dateOrEraAr: 'عصر النهضة الإيطالية (حوالي عام 1490 م)',
      dateOrEraEn: 'Italian High Renaissance (circa 1490 CE)',
    }),
    []
  );

  const containerBg = isLight
    ? 'bg-amber-50/70 border-amber-200 text-slate-900'
    : isContrast
    ? 'bg-black border-amber-400 text-amber-300'
    : 'bg-slate-950 border-amber-900/40 text-slate-100';

  const cardBg = isLight
    ? 'bg-white border-slate-200 shadow-sm'
    : isContrast
    ? 'bg-black border-amber-500'
    : 'bg-slate-900/80 border-amber-500/20 backdrop-blur-sm';

  return (
    <div className={`rounded-2xl border p-4 sm:p-6 space-y-6 ${containerBg}`}>
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-amber-700 via-yellow-600 to-amber-800 text-white shadow-lg shadow-amber-700/20">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
                c. 1490 CE • Venice
              </span>
              <span className="text-xs font-mono text-slate-400">Canone di Vitruvio</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              {isArabic ? 'رجل فيتروفيان والنسبة الذهبية 4K' : 'Leonardo da Vinci: Vitruvian Man 4K'}
            </h2>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 border border-amber-500/30 rounded-xl text-xs">
          <button
            onClick={() => setEngineMode('poses_proportions')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'poses_proportions'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'الوضعيات والمقاييس' : 'Poses & Measurements'}
          </button>
          <button
            onClick={() => setEngineMode('golden_spiral_orders')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'golden_spiral_orders'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'النسبة الذهبية والأعمدة' : 'Golden Section & Orders'}
          </button>
        </div>
      </div>

      {/* 4K Archival Canvas with Hotspots */}
      <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
        <img
          src={vitruvianPhoto}
          alt="Leonardo da Vinci Vitruvian Man 1490"
          className="w-full h-auto max-h-[560px] object-contain mx-auto select-none"
        />

        {/* Hotspots */}
        {VITRUVIAN_HOTSPOTS.map((h, idx) => {
          const isSelected = selectedHotspot.id === h.id;
          return (
            <button
              key={h.id}
              onClick={() => setSelectedHotspot(h)}
              style={{ left: `${h.xPct}%`, top: `${h.yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all cursor-pointer group z-20"
              title={isArabic ? h.titleAr : h.titleEn}
            >
              <span
                className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 font-mono text-xs font-black transition-all ${
                  isSelected
                    ? 'bg-amber-500 border-white text-black scale-125 shadow-lg shadow-amber-500/50'
                    : 'bg-black/80 border-amber-400 text-amber-300 hover:scale-110 hover:border-white'
                }`}
              >
                {idx + 1}
              </span>
            </button>
          );
        })}

        {/* Fullscreen HD Modal Trigger */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-3 left-3 z-30 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/80 hover:bg-black text-amber-300 border border-amber-500/40 text-xs font-semibold backdrop-blur transition-all cursor-pointer min-h-[44px]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص اللوحة الأرشيفية بدقة 4K' : 'Inspect 4K Master Folio'}</span>
        </button>

        {/* Badge */}
        <div className="absolute top-3 right-3 z-30 px-3 py-1.5 rounded-xl bg-black/80 text-amber-300 border border-amber-500/40 text-xs font-mono backdrop-blur flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{isArabic ? 'أكاديمية البندقية • Gallerie dell’Accademia' : 'Gallerie dell’Accademia • Venice'}</span>
        </div>
      </div>

      {/* Selected Hotspot Card */}
      <div className={`p-4 rounded-xl border ${cardBg} space-y-2`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-amber-400">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30">
            {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
        </p>
        <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-start gap-2">
          <BookOpen className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <p className="text-xs font-mono text-amber-300/90 leading-relaxed">
            <strong className="text-amber-400">
              {isArabic ? 'التحليل الهندسي والتناسبي: ' : 'Geometric & Proportional Analysis: '}
            </strong>
            {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
          </p>
        </div>
      </div>

      {/* Interactive Simulator Engine */}
      {engineMode === 'poses_proportions' ? (
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'محلل وضعيات المربع والدائرة والكانون الفيتروفي' : 'Square, Circle Poses & Vitruvian Anthropometry Analyzer'}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <button
                onClick={() => setActivePose('pose_a_square')}
                className={`px-2.5 py-1 rounded-lg border transition-all ${
                  activePose === 'pose_a_square'
                    ? 'bg-amber-500/30 border-amber-400 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {isArabic ? 'المربع (العانة)' : 'Square (Pubis)'}
              </button>
              <button
                onClick={() => setActivePose('pose_b_circle')}
                className={`px-2.5 py-1 rounded-lg border transition-all ${
                  activePose === 'pose_b_circle'
                    ? 'bg-amber-500/30 border-amber-400 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {isArabic ? 'الدائرة (السرة)' : 'Circle (Navel)'}
              </button>
              <button
                onClick={() => setActivePose('superimposed')}
                className={`px-2.5 py-1 rounded-lg border transition-all ${
                  activePose === 'superimposed'
                    ? 'bg-amber-500/30 border-amber-400 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {isArabic ? 'الوضعان معاً' : 'Superimposed'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* SVG Visualizer */}
            <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
              <svg viewBox="0 0 320 320" className="w-full max-w-[300px] h-auto overflow-visible">
                {/* Circumscribed Circle (Navel Center at 160, 168) */}
                {(activePose === 'pose_b_circle' || activePose === 'superimposed') && (
                  <g>
                    <circle cx="160" cy="168" r="125" fill="#0284c7" fillOpacity="0.08" stroke="#38bdf8" strokeWidth="2" />
                    {/* Circle Center: Navel */}
                    <circle cx="160" cy="168" r="4.5" fill="#38bdf8" />
                    <text x="160" y="182" fill="#bae6fd" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      Navel Center (السرة)
                    </text>
                  </g>
                )}

                {/* Bounding Square (Pubis Center at 160, 185) */}
                {(activePose === 'pose_a_square' || activePose === 'superimposed') && (
                  <g>
                    <rect x="40" y="65" width="240" height="240" fill="#d97706" fillOpacity="0.06" stroke="#f59e0b" strokeWidth="2" />
                    {/* Square Center: Pubis */}
                    <circle cx="160" cy="185" r="4.5" fill="#f59e0b" />
                    <text x="160" y="198" fill="#fef3c7" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      Pubis Center (العانة)
                    </text>
                  </g>
                )}

                {/* Head */}
                <circle cx="160" cy="85" r="16" fill="#78350f" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1.5" />

                {/* Torso Spine */}
                <line x1="160" y1="101" x2="160" y2="185" stroke="#fbbf24" strokeWidth="2.5" />

                {/* Pose A (Square): Horizontal Arms & Straight Legs */}
                {(activePose === 'pose_a_square' || activePose === 'superimposed') && (
                  <g opacity={activePose === 'pose_a_square' ? '1' : '0.65'}>
                    <line x1="40" y1="118" x2="280" y2="118" stroke="#f59e0b" strokeWidth="2.5" />
                    <line x1="150" y1="185" x2="148" y2="305" stroke="#f59e0b" strokeWidth="2.5" />
                    <line x1="170" y1="185" x2="172" y2="305" stroke="#f59e0b" strokeWidth="2.5" />
                  </g>
                )}

                {/* Pose B (Circle): Splayed Arms & Spread Legs */}
                {(activePose === 'pose_b_circle' || activePose === 'superimposed') && (
                  <g opacity={activePose === 'pose_b_circle' ? '1' : '0.85'}>
                    <line x1="160" y1="118" x2="60" y2="65" stroke="#38bdf8" strokeWidth="2.5" />
                    <line x1="160" y1="118" x2="260" y2="65" stroke="#38bdf8" strokeWidth="2.5" />
                    <line x1="160" y1="185" x2="85" y2="280" stroke="#38bdf8" strokeWidth="2.5" />
                    <line x1="160" y1="185" x2="235" y2="280" stroke="#38bdf8" strokeWidth="2.5" />
                  </g>
                )}
              </svg>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 mt-2">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-amber-500" /> Square (Earth • Pubis Center)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-sky-500" /> Circle (Heaven • Navel Center)
                </span>
              </div>
            </div>

            {/* Proportions Controller & Modular Units */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1">
                    <Sliders className="w-4 h-4 text-amber-400" />
                    {isArabic ? 'طول القامة الإجمالي (Stature Height)' : 'Standing Total Stature'}
                  </span>
                  <span className="font-mono text-amber-400">{statureCm} cm</span>
                </label>
                <input
                  type="range"
                  min="155"
                  max="200"
                  step="1"
                  value={statureCm}
                  onChange={(e) => setStatureCm(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Vitruvian Units Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'طول الرأس (1/8)' : 'Head Length (1/8)'}</div>
                  <div className="text-amber-400 font-bold mt-0.5">{vitruvianMetrics.headLength} cm</div>
                  <div className="text-[10px] text-slate-400">8 heads = 1 height</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'طول الكف (1/10)' : 'Hand Palm (1/10)'}</div>
                  <div className="text-amber-400 font-bold mt-0.5">{vitruvianMetrics.handLength} cm</div>
                  <div className="text-[10px] text-slate-400">Wrist to middle finger</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'طول القدم (1/6)' : 'Foot Length (1/6)'}</div>
                  <div className="text-amber-400 font-bold mt-0.5">{vitruvianMetrics.footLength} cm</div>
                  <div className="text-[10px] text-slate-400">Heel to toe unit</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'الذراع الملكي (1/4)' : 'Cubit Forearm (1/4)'}</div>
                  <div className="text-amber-400 font-bold mt-0.5">{vitruvianMetrics.cubitLength} cm</div>
                  <div className="text-[10px] text-slate-400">Elbow to fingertip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Engine Mode 2: Golden Ratio & Classical Orders */
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Columns className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'النسبة الذهبية في الجسد ونظم الأعمدة الكلاسيكية الثلاثة' : 'Golden Section Body Harmonics & Three Classical Architectural Orders'}
              </h3>
            </div>
            <div className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Φ = 1.6180339887...
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Doric Order */}
            <div className="p-4 rounded-xl bg-slate-950 border border-amber-800/40 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Columns className="w-4 h-4" />
                <span>{isArabic ? 'النظام الدوري (Doric)' : 'Doric Order'}</span>
              </div>
              <div className="text-xs font-mono text-slate-300">
                {isArabic ? 'النسبة النمطية: 1 : 6 إلى 1 : 8' : 'Standard Ratio: 1:6 to 1:8'}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {isArabic
                  ? 'مستوحى من جسد الرجل القوي المكتنز؛ يتميز بالقوة والصلابة والبساطة وخلو تاجه من الزخارف المعقدة.'
                  : 'Derived from robust male anatomy; characterizes solid strength, austere capitals, and martial dignity.'}
              </p>
            </div>

            {/* Ionic Order */}
            <div className="p-4 rounded-xl bg-slate-950 border border-amber-800/40 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                <Columns className="w-4 h-4" />
                <span>{isArabic ? 'النظام الأيوني (Ionic)' : 'Ionic Order'}</span>
              </div>
              <div className="text-xs font-mono text-slate-300">
                {isArabic ? 'النسبة النمطية: 1 : 8 إلى 1 : 9' : 'Standard Ratio: 1:8 to 1:9'}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {isArabic
                  ? 'مستوحى من رشاقة المرأة الناضجة؛ تاجه مزدان بحليات حلزونية حلزونية (Volutes) تشبه خصلات الشعر المصفف.'
                  : 'Derived from maternal female proportions; features delicate scrolling volutes resembling braided coiffures.'}
              </p>
            </div>

            {/* Corinthian Order */}
            <div className="p-4 rounded-xl bg-slate-950 border border-amber-800/40 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Columns className="w-4 h-4" />
                <span>{isArabic ? 'النظام الكورنثي (Corinthian)' : 'Corinthian Order'}</span>
              </div>
              <div className="text-xs font-mono text-slate-300">
                {isArabic ? 'النسبة النمطية: 1 : 10' : 'Standard Ratio: 1:10'}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {isArabic
                  ? 'مستوحى من نحافة الفتاة العذراء الفتية؛ تاجه غني بزخارف أوراق نبات الأكانتس وشديد الرشاقة والارتفاع.'
                  : 'Derived from the slender grace of a youthful maiden; features luxuriant acanthus leaves and lofty elegance.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hi-Res 4K Modal */}
      {isModalOpen && (
        <HiResImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={modalData}
          lang={isArabic ? 'ar' : 'en'}
          theme={isLight ? 'light' : isContrast ? 'high-contrast' : 'dark'}
        />
      )}
    </div>
  );
};
