import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Maximize2,
  RotateCcw,
  Activity,
  Layers,
} from 'lucide-react';
import descartesPhoto from '../../../assets/math/descartes_la_geometrie_1637.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface DescartesHotspot {
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

export const DESCARTES_HOTSPOTS: DescartesHotspot[] = [
  {
    id: 'cartesian_orthogonal_axes',
    xPct: 53.0,
    yPct: 44.0,
    titleAr: 'المحاور الإحداثية الديكارتية المتعامدة (الشكل 1)',
    titleEn: 'Orthogonal Cartesian Coordinate Axes (Fig. 1)',
    categoryAr: 'الهندسة التحليلية',
    categoryEn: 'Analytic Geometry',
    descAr:
      'الرسم التاريخي الأول في كتاب "الهندسة" لديكارت الذي أرسى شبكة الإحداثيات المتعامدة؛ حيث يُعين موقع أي نقطة في المستوى بزوج مرتب من الأعداد (س، ص) يمثل مسافتها عن خطين متعامدين، موحداً علمي الجبر والهندسة في كينونة واحدة.',
    descEn:
      'The foundational Fig. 1 in Descartes’ 1637 "La Géométrie" introducing the orthogonal coordinate system. For the first time, geometric points are uniquely mapped to ordered number pairs (x, y), fusing algebra and geometry into analytic geometry.',
    scientificProofAr:
      'يمثل النظام الإحداثي الديكارتي الأساس الرياضي الشامل لكافة فروع الرياضيات التطبيقية، والتفاضل، والجرافيك الحاسوبي ثلاثي الأبعاد.',
    scientificProofEn:
      'Forms the foundational framework for multivariable calculus, coordinate kinematics, and modern 2D/3D computer graphics.',
  },
  {
    id: 'algebraic_curve_representation',
    xPct: 35.0,
    yPct: 48.0,
    titleAr: 'تمثيل المنحنيات بالمعادلات الجبرية (ص = د(س))',
    titleEn: 'Algebraic Representation of Geometric Curves (f(x, y) = 0)',
    categoryAr: 'الجبر الهندسي',
    categoryEn: 'Algebraic Curves',
    descAr:
      'أثبت ديكارت أن كل منحنى هندسي مستمر يمكن التعبير عنه بمعادلة جبرية بين س و ص، والعكس صحيح؛ فالمعادلة الخطية تمثل خطاً مستقيماً، والتربيعية تمثل قطوعاً مخروطية (دائرة، قطع مكافئ، ناقص، زائد)، مما أتاح حل المسائل الهندسية المعقدة بالمعادلات الجبرية.',
    descEn:
      'Descartes established the bijection between continuous planar curves and polynomial equations. Linear equations define straight lines, quadratics yield conics (circles, ellipses, parabolas, hyperbolas), allowing geometric challenges to be solved via algebraic manipulation.',
    scientificProofAr:
      'يشكل هذا التكافؤ جوهر منهاج الهندسة الفراغية والتحليلية بالثانوية العامة (معادلة المستقيم، ومستوى الفراغ، ومعادلة الكرة).',
    scientificProofEn:
      'Directly underpins secondary school 2D & 3D analytic geometry: straight-line vectors, planar equations, and sphere surfaces.',
  },
  {
    id: 'descartes_rule_of_signs',
    xPct: 28.0,
    yPct: 28.0,
    titleAr: 'قاعدة إشارات ديكارت لجذور كثيرات الحدود',
    titleEn: 'Descartes’ Rule of Signs for Polynomial Roots',
    categoryAr: 'نظرية المعادلات',
    categoryEn: 'Theory of Equations',
    descAr:
      'قاعدة ديكارت الشهيرة التي تنص على أن عدد الجذور الحقيقية الموجبة لكثيرة حدود لا يزيد عن عدد تغيرات إشارة معاملاتها المتتالية، وينقص عنه بعدد زوجي؛ مما وفر وسيلة تحليلية سريعة لمعرفة عدد جذور المعادلات التكعيبية والرباعية.',
    descEn:
      'Descartes’ celebrated theorem stating that the number of positive real roots of a polynomial P(x) cannot exceed the number of sign variations between consecutive non-zero coefficients, differing from it by an even integer.',
    scientificProofAr:
      'تعتمد خوارزميات إيجاد الجذور العددية في الحاسبات الحديثة وبرمجيات الهندسة الجبرية على قاعدة الإشارات لتحديد نطاقات البحث.',
    scientificProofEn:
      'Fundamental algorithm in numeric root isolation and symbolic computation solvers across modern computer algebra systems.',
  },
  {
    id: 'folium_of_descartes',
    xPct: 62.0,
    yPct: 22.0,
    titleAr: 'ورقة ديكارت (Folium of Descartes: س³ + ص³ = ٣أ س ص)',
    titleEn: 'The Folium of Descartes (x³ + y³ - 3axy = 0)',
    categoryAr: 'المنحنيات الجبرية التكعيبية',
    categoryEn: 'Cubic Curves & Asymptotes',
    descAr:
      'منحنى جبري تكعيبي صممه ديكارت في عام 1638م كمسألة تحدٍ لبيير دي فيرما لاختبار طريقته في حساب المماسات قبل اختراع التفاضل، ويتميز بعقدة عروية عند نقطة الأصل وخط تقارب مائل ص = -س - أ.',
    descEn:
      'A classical cubic algebraic curve formulated in 1638 by Descartes to challenge Pierre de Fermat’s proto-calculus method for tangents. It exhibits an internal loop in the first quadrant, a node at the origin, and an oblique asymptote y = -x - a.',
    scientificProofAr:
      'مسألة قياسية في منهج التفاضل والتكامل بالثانوية العامة لإيجاد مشتقة الدوال الضمنية (Implicit Differentiation dy/dx) ومعادلة المماس والعمودي.',
    scientificProofEn:
      'Archetypal exam problem in high-school calculus for implicit differentiation dy/dx and computing tangent and normal line vectors.',
  },
  {
    id: 'compass_sector_instruments',
    xPct: 82.0,
    yPct: 68.0,
    titleAr: 'أدوات الرسم والقطاع الدائري التناسبي في القرن 17',
    titleEn: '17th-Century Proportional Sector & Precision Dividers',
    categoryAr: 'الأدوات العلمية التاريخية',
    categoryEn: 'Historical Instruments',
    descAr:
      'القطاع الدائري النحاسي (Proportional Sector) والفرجار التناسبي المقسم الذي كان يستخدمه الرياضيون والمهندسون في عهد ديكارت لحساب النسب المثلثية واللوغاريتمية وتحديد أطوال القطع المستقيمة بدقة قبل اختراع الآلات الحاسبة.',
    descEn:
      'The 17th-century brass proportional sector and precision dividers. Used by early modern mathematicians and cartographers to mechanically compute trigonometric ratios, proportional segments, and square roots without decimal electronics.',
    scientificProofAr:
      'يرتبط بمفهوم التناسب الهندسي وتشابه المثلثات في الهندسة المستوية للثانوية العامة.',
    scientificProofEn:
      'Direct physical manifestation of geometric proportionality and similar triangles in plane Euclidean geometry.',
  },
];

export const DescartesGeometryStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<DescartesHotspot>(DESCARTES_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Curve Mode: 'line' | 'circle' | 'parabola'
  const [curveMode, setCurveMode] = useState<'line' | 'circle' | 'parabola'>('parabola');

  // Curve Parameters
  const [slopeM, setSlopeM] = useState<number>(1.5); // line slope
  const [interceptC, setInterceptC] = useState<number>(2.0); // line y-intercept
  const [radiusR, setRadiusR] = useState<number>(4.0); // circle radius
  const [parabolaA, setParabolaA] = useState<number>(0.5); // parabola curvature y = ax^2 + c
  const [probeX, setProbeX] = useState<number>(2.0); // evaluation point x0

  // Calculations for Line: y = mx + c
  const lineXIntercept = slopeM !== 0 ? Number((-interceptC / slopeM).toFixed(2)) : 0;
  const lineAngleDeg = Number(((Math.atan(slopeM) * 180) / Math.PI).toFixed(1));
  const lineProbeY = Number((slopeM * probeX + interceptC).toFixed(2));

  // Calculations for Circle: x² + y² = r²
  const circleArea = Number((Math.PI * radiusR * radiusR).toFixed(2));
  const circleCircumference = Number((2 * Math.PI * radiusR).toFixed(2));
  const circleProbeY = Math.abs(probeX) <= radiusR ? Number(Math.sqrt(radiusR * radiusR - probeX * probeX).toFixed(2)) : 0;

  // Calculations for Parabola: y = a*x² + c
  const parabolaFocalLength = parabolaA !== 0 ? Number((1 / (4 * parabolaA)).toFixed(3)) : 0;
  const parabolaProbeY = Number((parabolaA * probeX * probeX + interceptC).toFixed(2));
  const parabolaTangentSlope = Number((2 * parabolaA * probeX).toFixed(2)); // dy/dx = 2ax

  const modalData: HiResImageModalData = {
    imageUrl: descartesPhoto,
    titleAr: 'الطبعة الأصلية لكتاب الهندسة - رينيه ديكارت (ليدن 1637م)',
    titleEn: 'René Descartes’ La Géométrie: First Edition (Leiden, 1637 CE)',
    subtitleAr: 'ولادة الهندسة التحليلية، المحاور الإحداثية (س، ص)، وتوحيد الجبر والهندسة',
    subtitleEn: 'The Birth of Analytic Geometry, Cartesian Coordinates & Algebraic Curve Equations',
    descriptionAr:
      'معروضة متحفية رفيعة المستوى لطبعة ليدن الأولى عام 1637 من كتاب الهندسة لديكارت، وهو الملحق الذي أحدث ثورة كبرى في تاريخ العلم بابتكار الهندسة الإحداثية. تظهر الصفحة المفتوحة الشكل (1) للمحاور المتعامدة، والقطاع التناسبي النحاسي وفرجار الرسم الكلاسيكي.',
    descriptionEn:
      'A monumental first edition artifact published in Leiden in 1637 as an appendix to Descartes’ Discourse on the Method. This historic text single-handedly founded analytic coordinate geometry, linking geometric figures to algebraic equations, displayed with a period brass sector and dividers.',
    dateOrEraAr: 'عصر الثورة العلمية والفلسفة الحديثة (1637 ميلادية)',
    dateOrEraEn: 'Scientific Revolution & Dawn of Modern Philosophy (1637 CE)',
    locationAr: 'مكتبة جامعة ليدن، هولندا / المكتبة الوطنية الفرنسية، باريس',
    locationEn: 'Leiden University Library, Netherlands / Bibliothèque nationale de France, Paris',
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-indigo-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-indigo-400 text-indigo-400'
                : 'bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-indigo-400/40 shadow-indigo-500/20'
            }`}
          >
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic
                  ? 'استوديو ديكارت وكتاب الهندسة التحليلية (1637م) - 4K'
                  : 'Descartes’ La Géométrie & Analytic Coordinate Studio (1637 CE) - 4K'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-indigo-400 text-black border-indigo-300'
                    : isLight
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    : 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60'
                }`}
              >
                Archival 4K Studio
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'طبعة ليدن الأصلية 1637، نشأة المحاور الإحداثية، ربط المنحنيات بالمعادلات الجبرية، والقطاع التناسبي'
                : 'Original 1637 Leiden folio, orthogonal coordinates, polynomial curve equations, and proportional sector'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
            isContrast
              ? 'bg-indigo-400 text-black border-indigo-300 hover:bg-indigo-300'
              : 'bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border-indigo-500/40'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'عرض المخطوطة بدقة 4K' : 'View 4K Archival Folio'}</span>
        </button>
      </div>

      {/* Main Studio Interactive Layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 4K Archival Plate with Pulsating Hotspots (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900 group">
            <img
              src={descartesPhoto}
              alt="Descartes La Geometrie 1637 4K Archival Folio"
              className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Interactive Hotspots Overlaid */}
            {DESCARTES_HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot)}
                  style={{ top: `${hotspot.yPct}%`, left: `${hotspot.xPct}%` }}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer z-10 ${
                    isSelected
                      ? 'bg-indigo-500 text-white ring-4 ring-indigo-400/50 scale-125 shadow-lg shadow-indigo-500/50'
                      : 'bg-slate-900/80 text-indigo-300 border border-indigo-400/60 hover:scale-110 hover:bg-indigo-600 hover:text-white'
                  }`}
                >
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span className="absolute -bottom-6 whitespace-nowrap text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-950/90 text-slate-200 border border-slate-700/80 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    {isArabic ? hotspot.titleAr.split(' ')[0] : hotspot.titleEn.split(' ')[0]}
                  </span>
                </button>
              );
            })}

            {/* Bottom Caption on Canvas */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-300 font-medium">
                {isArabic
                  ? '📍 اضغط على النقاط التفاعلية لفحص نصوص ومحاور كتاب الهندسة لديكارت'
                  : '📍 Click glowing coordinate pins to inspect Descartes’ analytic geometry plates'}
              </span>
              <span className="text-indigo-400 font-mono font-bold text-[11px]">
                Leiden • 1637 CE
              </span>
            </div>
          </div>

          {/* Active Hotspot Deep Inspection Card */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              isContrast
                ? 'bg-black border-indigo-400 text-white'
                : isLight
                ? 'bg-indigo-50/60 border-indigo-200 text-slate-900'
                : 'bg-slate-900/90 border-indigo-500/30 text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                {activeHotspot.id}
              </span>
            </div>

            <h3 className="text-sm font-black mb-1.5 text-indigo-400">
              {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
            </h3>

            <p className="text-xs leading-relaxed mb-3">
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-indigo-500/20 text-xs">
              <span className="font-bold text-indigo-300 block mb-1">
                {isArabic ? 'الأثر الرياضي والمنهجي:' : 'Mathematical Significance & Curriculum Anchor:'}
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Cartesian Curve & Coordinate Simulator (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div
            className={`p-4 rounded-xl border flex flex-col gap-4 ${
              isContrast
                ? 'bg-black border-indigo-400 text-white'
                : isLight
                ? 'bg-slate-50 border-slate-200 text-slate-900'
                : 'bg-slate-900/90 border-slate-800 text-slate-100'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <h3 className="text-xs sm:text-sm font-black">
                  {isArabic
                    ? 'محاكي المنحنيات والمحاور الديكارتية التحليلية'
                    : 'Cartesian Coordinate Curve Engine'}
                </h3>
              </div>
              <button
                onClick={() => {
                  setCurveMode('parabola');
                  setSlopeM(1.5);
                  setInterceptC(2.0);
                  setRadiusR(4.0);
                  setParabolaA(0.5);
                  setProbeX(2.0);
                }}
                className="text-[11px] font-bold text-slate-400 hover:text-indigo-400 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isArabic ? 'إعادة ضبط' : 'Reset'}</span>
              </button>
            </div>

            {/* Curve Mode Selector */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                {isArabic ? 'اختر المنحنى الجبري الديكارتي:' : 'Select Analytic Curve Locus:'}
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { mode: 'line' as const, labelAr: 'خط مستقيم (y=mx+c)', labelEn: 'Line' },
                  { mode: 'parabola' as const, labelAr: 'قطع مكافئ (y=ax²+c)', labelEn: 'Parabola' },
                  { mode: 'circle' as const, labelAr: 'دائرة (x²+y²=r²)', labelEn: 'Circle' },
                ].map((item) => (
                  <button
                    key={item.mode}
                    onClick={() => setCurveMode(item.mode)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      curveMode === item.mode
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-300'
                    }`}
                  >
                    {isArabic ? item.labelAr : item.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Controls based on selected curve */}
            <div className="space-y-3">
              {curveMode === 'line' && (
                <>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-indigo-400">{isArabic ? 'ميل الخط المستقيم (m):' : 'Slope (m):'}</span>
                      <span className="font-mono">{slopeM}</span>
                    </div>
                    <input
                      type="range"
                      min="-4"
                      max="4"
                      step="0.25"
                      value={slopeM}
                      onChange={(e) => setSlopeM(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-cyan-400">{isArabic ? 'الجزء المقطوع من محور الصادات (c):' : 'Y-Intercept (c):'}</span>
                      <span className="font-mono">{interceptC}</span>
                    </div>
                    <input
                      type="range"
                      min="-5"
                      max="5"
                      step="0.5"
                      value={interceptC}
                      onChange={(e) => setInterceptC(Number(e.target.value))}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>
                </>
              )}

              {curveMode === 'parabola' && (
                <>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-indigo-400">{isArabic ? 'معامل الانحناء (a):' : 'Curvature (a):'}</span>
                      <span className="font-mono">{parabolaA}</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="2.0"
                      step="0.1"
                      value={parabolaA}
                      onChange={(e) => setParabolaA(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-cyan-400">{isArabic ? 'إزاحة رأس القطع (c):' : 'Vertex Offset (c):'}</span>
                      <span className="font-mono">{interceptC}</span>
                    </div>
                    <input
                      type="range"
                      min="-4"
                      max="4"
                      step="0.5"
                      value={interceptC}
                      onChange={(e) => setInterceptC(Number(e.target.value))}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>
                </>
              )}

              {curveMode === 'circle' && (
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-indigo-400">{isArabic ? 'نصف القطر (r):' : 'Radius (r):'}</span>
                    <span className="font-mono">{radiusR} وحدات</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="0.5"
                    value={radiusR}
                    onChange={(e) => setRadiusR(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>
              )}

              {/* Probe Point x0 Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-amber-400">{isArabic ? 'نقطة الفحص الإحداثية (x₀):' : 'Probe Coordinate (x₀):'}</span>
                  <span className="font-mono">{probeX}</span>
                </div>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  step="0.5"
                  value={probeX}
                  onChange={(e) => setProbeX(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Mathematical Equation & Metrics Display */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-center space-y-1.5">
              <span className="text-[11px] text-slate-400 font-bold block">
                {isArabic ? 'معادلة المنحنى الديكارتية وقيم النقطة (x₀, y₀):' : 'Cartesian Locus Equation & Point Value:'}
              </span>
              <div className="text-base sm:text-lg font-black text-indigo-400">
                {curveMode === 'line' && `y = ${slopeM}x ${interceptC >= 0 ? '+ ' + interceptC : '- ' + Math.abs(interceptC)}`}
                {curveMode === 'parabola' && `y = ${parabolaA}x² ${interceptC >= 0 ? '+ ' + interceptC : '- ' + Math.abs(interceptC)}`}
                {curveMode === 'circle' && `x² + y² = ${radiusR}² = ${radiusR * radiusR}`}
              </div>

              <div className="text-xs text-amber-300 font-semibold">
                {curveMode === 'line' && `P(${probeX}, ${lineProbeY}) • θ = ${lineAngleDeg}° • x-int = ${lineXIntercept}`}
                {curveMode === 'parabola' && `P(${probeX}, ${parabolaProbeY}) • Tangent Slope m_tan = ${parabolaTangentSlope} • Focus(0, ${(interceptC + parabolaFocalLength).toFixed(2)})`}
                {curveMode === 'circle' && `P(${probeX}, ${circleProbeY}) • Area = ${circleArea} • Circ = ${circleCircumference}`}
              </div>
            </div>

            {/* Dynamic Cartesian SVG Plane */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
              <span className="text-[10px] font-mono text-slate-400 mb-2">
                {isArabic ? 'مستوى ديكارت الإحداثي المتعامد والشكل الهندسي' : 'Orthogonal Cartesian Coordinate Plane'}
              </span>
              <svg viewBox="-120 -100 240 200" className="w-full max-w-[260px] h-auto">
                {/* Coordinate Grid Lines */}
                {[-80, -40, 40, 80].map((coord) => (
                  <g key={coord}>
                    <line x1={coord} y1="-90" x2={coord} y2="90" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-110" y1={coord} x2={110} y2={coord} stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />
                  </g>
                ))}

                {/* Primary Axes */}
                <line x1="-115" y1="0" x2="115" y2="0" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="0" y1="95" x2="0" y2="-95" stroke="#94a3b8" strokeWidth="1.5" />
                <text x="110" y="12" fill="#94a3b8" fontSize="9" fontWeight="bold">x</text>
                <text x="5" y="-88" fill="#94a3b8" fontSize="9" fontWeight="bold">y</text>

                {/* Curve Rendering */}
                {curveMode === 'line' && (
                  <line
                    x1="-100"
                    y1={-(slopeM * -5 + interceptC) * 16}
                    x2="100"
                    y2={-(slopeM * 5 + interceptC) * 16}
                    stroke="#818cf8"
                    strokeWidth="2.5"
                  />
                )}

                {curveMode === 'parabola' && (
                  <path
                    d={`M -80 ${-(parabolaA * 16 + interceptC) * 12} Q 0 ${-interceptC * 12 + 10} 80 ${-(parabolaA * 16 + interceptC) * 12}`}
                    fill="none"
                    stroke="#818cf8"
                    strokeWidth="2.5"
                  />
                )}

                {curveMode === 'circle' && (
                  <circle
                    cx="0"
                    cy="0"
                    r={radiusR * 16}
                    fill="rgba(99, 102, 241, 0.15)"
                    stroke="#818cf8"
                    strokeWidth="2"
                  />
                )}

                {/* Probe Point */}
                <circle
                  cx={probeX * 16}
                  cy={curveMode === 'line' ? -lineProbeY * 16 : curveMode === 'parabola' ? -parabolaProbeY * 12 : -circleProbeY * 16}
                  r="4.5"
                  fill="#f59e0b"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Curricular Note */}
            <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-[11px] text-slate-300">
              <span className="font-bold text-indigo-400 flex items-center gap-1.5 mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isArabic ? 'ربط وثيق بمنهج الهندسة الفراغية والتفاضل:' : 'Egyptian Curriculum Integration:'}</span>
              </span>
              <span>
                {isArabic
                  ? 'الهندسة التحليلية الديكارتية هي لغة التفاضل والتكامل والهندسة الفراغية؛ حيث تمثل المشتقة الأولى ميل المماس لمنحنى الدالة ص = د(س) عند أي نقطة.'
                  : 'Descartes’ analytic coordinates form the foundation of calculus and 3D vectors: the first derivative represents the tangent slope m = dy/dx at any point.'}
              </span>
            </div>
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
