import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Timer,
  TrendingDown,
} from 'lucide-react';
import galileoPhoto from '../../../assets/physics/galileo_discorsi_kinematics_1638.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface GalileoHotspot {
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

export const GALILEO_HOTSPOTS: GalileoHotspot[] = [
  {
    id: 'inclined_plane_apparatus',
    xPct: 62.0,
    yPct: 54.0,
    titleAr: 'المستوى المائل الخشبي والكرات البرونزية (إبطاء حركة الجاذبية)',
    titleEn: 'Inclined Plane Apparatus & Rolling Bronze Spheres',
    categoryAr: 'علم الحركة والتسارع المنتظم',
    categoryEn: 'Kinematics & Diluted Gravity',
    descAr:
      'نظراً لعدم توفر ساعات دقيقة في القرن السابع عشر لقياس أجزاء الثانية أثناء السقوط الحر الرأسي السريع، ابتكر جاليليو فكرة عبقرية بإبطاء تسارع الجاذبية عن طريق دحرجة كرات برونزية مصقولة داخل مجرى مائل مبطن بالرق الأملس بزاوية ميل صغيرة (a = g · sin θ).',
    descEn:
      'Because seventeenth-century timers could not measure split-seconds during free vertical fall, Galileo devised a brilliant technique: "diluting" gravity by rolling highly polished bronze spheres down a grooved vellum-lined inclined plane at gentle angles (a = g · sin θ).',
    scientificProofAr:
      'معادلة التسارع المنتظم على المستوى المائل هي الأساس الذي بُنيت عليه قوانين الحركة بعجلة منتظمة في منهج الفيزياء (v = v₀ + at, d = v₀t + ½at²).',
    scientificProofEn:
      'Direct foundation of standard kinematic equations under uniform acceleration: v = v₀ + at, s = v₀t + ½at², and v² = v₀² + 2as.',
  },
  {
    id: 'water_clock_chronometry',
    xPct: 75.0,
    yPct: 48.0,
    titleAr: 'الساعة المائية الكليبسيدرا (Clepsydra) وقياس أجزاء الثانية بالأوزان',
    titleEn: 'Clepsydra Water Clock & Precision Weight Chronometry',
    categoryAr: 'أجهزة القياس المعملية التاريخية',
    categoryEn: 'Historical Chronometry',
    descAr:
      'لقياس أزمنة التدحرج بدقة فائقة، استخدم جاليليو وعاء ماء مرتفعاً به صنبور دقيق؛ يفتح الصنبور لحظة إطلاق الكرة ويغلق لحظة وصولها إلى علامة معينة. وبوزن كمية الماء المجمعة في ميزان حساس، استطاع تحويل الكتلة مباشرة إلى زمن دقيق.',
    descEn:
      'To measure roll times accurately without mechanical clocks, Galileo used a large elevated water reservoir with a fine nozzle. Opening the tap upon release and closing it upon arrival, the discharged water weight yielded precise proportional time intervals.',
    scientificProofAr:
      'أثبت جاليليو أن نسبة وزني الماء المجمع لكرتين تتدحرجان لمسافتين مختلفتين تساوي تماماً نسبة زمني التدحرج.',
    scientificProofEn:
      'Proved that the ratio of collected water weights precisely matched the ratio of elapsed travel times.',
  },
  {
    id: 'law_odd_numbers_distances',
    xPct: 24.0,
    yPct: 53.0,
    titleAr: 'قانون الأعداد الفردية (1 : 3 : 5 : 7) وتناسب المسافة مع مربع الزمن (d ∝ t²)',
    titleEn: 'Galileo’s Law of Odd Numbers & Quadratic Time Metric (s ∝ t²)',
    categoryAr: 'النسب الهندسية والفيزياء الرياضية',
    categoryEn: 'Mathematical Proportions in Nature',
    descAr:
      'اكتشف جاليليو أن المسافات المقطوعة خلال فترات زمنية متتالية متساوية تتبع متتالية الأعداد الفردية: 1، 3، 5، 7، 9... وبالتالي، تكون المسافة الكلية المقطوعة من السكون متناسبة طردياً مع مربع الزمن الكلي المنقضي: s ∝ t² (أي ½a·t²).',
    descEn:
      'Galileo discovered that distances traversed during successive equal time intervals follow the sequence of consecutive odd numbers: 1, 3, 5, 7, 9... Consequently, cumulative distance from rest grows quadratically with elapsed time: s ∝ t² (s = ½at²).',
    scientificProofAr:
      'التناسب التربيعي d = ½·a·t² يلغي الفكرة الأرسطية الخاطئة التي كانت تزعم أن سرعة السقوط ثابتة طوال المسار.',
    scientificProofEn:
      'Overthrew the Aristotelian doctrine that velocity during fall remains constant, proving continuous uniform acceleration.',
  },
  {
    id: 'free_fall_mass_invariance',
    xPct: 44.0,
    yPct: 40.0,
    titleAr: 'استقلالية تسارع السقوط الحر عن كتلة الجسم في غياب مقاومة الهواء',
    titleEn: 'Free Fall Mass Invariance in Vacuum (Independence of Mass)',
    categoryAr: 'السقوط الحر والجاذبية',
    categoryEn: 'Free Fall & Equivalence Principle',
    descAr:
      'دحض جاليليو أرسطو الذي ادعى أن الجسم الثقيل يسقط أسرع من الخفيف بنسبة كتلتهما. وأثبت نظرياً وتجريبياً أنه في غياب مقاومة الهواء تسقط جميع الأجسام بنفس العجلة الأرضية g = 9.8 م/ث² مهما كانت كتلتها أو كثافتها.',
    descEn:
      'Disproved Aristotle’s claim that heavier bodies fall faster in direct proportion to their mass. Proved both logically (thought experiment of joined masses) and experimentally that in vacuum, all bodies accelerate downward at the identical gravitational rate g.',
    scientificProofAr:
      'أكدت تجربة أبولو 15 الشهيرة على سطح القمر عام 1971 بإسقاط ريشة ومطرقة معاً وصولهما في نفس اللحظة تماماً.',
    scientificProofEn:
      'Famously demonstrated on the Moon during Apollo 15 (1971) by Commander David Scott dropping a falcon feather and a geology hammer simultaneously.',
  },
  {
    id: 'parabolic_projectile_kinematics',
    xPct: 44.0,
    yPct: 24.0,
    titleAr: 'حركة المقذوفات في بعدين وتحليل المسار المكافئ (Parabolic Trajectory)',
    titleEn: 'Two-Dimensional Projectile Motion & Parabolic Trajectory',
    categoryAr: 'المقذوفات والحركة المركبة',
    categoryEn: 'Compound Projectile Kinematics',
    descAr:
      'أول من أثبت أن حركة القذيفة هي حركة مركبة تتألف من حركتين مستقلتين متعامدتين: حركة أفقية منتظمة السرعة (v_x = ثابتة، a_x = 0) وحركة رأسية بعجلة جاذبية منتظمة (a_y = -g)، وتركيب الحركتين معاً يعطي مساراً منحنياً على شكل قطع مكافئ (Parabola).',
    descEn:
      'First to prove that projectile motion decomposes into two mutually independent orthogonal components: horizontal uniform velocity (v_x = const, a_x = 0) and vertical uniformly accelerated motion (a_y = -g), combining to form a mathematical parabola.',
    scientificProofAr:
      'يمثل جوهر درس حركة المقذوفات بزاوية في منهج الفيزياء: المدى الأفقي R = (v₀² · sin 2θ) / g، وأقصى ارتفاع H = (v₀ · sin θ)² / (2g).',
    scientificProofEn:
      'Core foundation of 2D kinematics: horizontal range R = (v₀² · sin 2θ) / g and peak height H = (v₀ · sin θ)² / (2g).',
  },
];

export const GalileoKinematicsStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<GalileoHotspot>(GALILEO_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Inclined Plane Kinematics Simulator
  const [inclineAngleDeg, setInclineAngleDeg] = useState<number>(20); // 5 to 60 deg
  const [rampLengthM, setRampLengthM] = useState<number>(4.0); // 1.0 to 10.0 meters
  const [motionType, setMotionType] = useState<'sliding' | 'rolling'>('rolling');

  const g = 9.80665; // m/s²
  const angleRad = (inclineAngleDeg * Math.PI) / 180;

  // Acceleration:
  // Frictionless sliding: a = g * sin(theta)
  // Rolling solid sphere: a = (5/7) * g * sin(theta) because I = (2/5)mr^2 => a = g*sin(theta) / (1 + I/(mr^2))
  const rawAcceleration =
    motionType === 'rolling'
      ? (5 / 7) * g * Math.sin(angleRad)
      : g * Math.sin(angleRad);
  const acceleration = Number(rawAcceleration.toFixed(3));

  // Time to traverse ramp length L: s = 0.5 * a * t^2 => t = sqrt(2*L / a)
  const totalTimeSec = Number(Math.sqrt((2 * rampLengthM) / acceleration).toFixed(3));

  // Terminal velocity at ramp bottom: v = sqrt(2 * a * L)
  const terminalSpeedMS = Number(Math.sqrt(2 * acceleration * rampLengthM).toFixed(2));
  const terminalSpeedKmH = Number((terminalSpeedMS * 3.6).toFixed(1));

  // Odd Numbers Distance Splits (Divide time into 4 equal segments)
  const timeStep = totalTimeSec / 4;
  const oddIntervals = [1, 2, 3, 4].map((step) => {
    const tCurrent = step * timeStep;
    const tPrev = (step - 1) * timeStep;
    const cumulativeDist = Number((0.5 * acceleration * tCurrent * tCurrent).toFixed(3));
    const intervalDist = Number((cumulativeDist - 0.5 * acceleration * tPrev * tPrev).toFixed(3));
    return {
      step,
      timeElapsed: Number(tCurrent.toFixed(2)),
      cumulativeDist,
      intervalDist,
      oddRatio: 2 * step - 1,
    };
  });

  const modalData: HiResImageModalData = {
    imageUrl: galileoPhoto,
    titleAr: 'الطبعة الأصلية لكتاب حوار حول علمين جديدين (جاليليو جاليلي 1638م)',
    titleEn: 'Galileo Galilei’s Discorsi e Dimostrazioni Matematiche intorno a due nuove scienze (1638 CE)',
    subtitleAr: 'المستوى المائل الخشبي، كرات البرونز، الساعة المائية، وقانون تناسب المسافة مع مربع الزمن',
    subtitleEn: 'Inclined Plane, Rolling Bronze Spheres, Clepsydra Water Clock & Quadratic Time Kinematics',
    descriptionAr:
      'نُشر هذا الكتاب الثوري التاريخي في ليدن بهولندا عام 1638م بعد أن هُرّبت مخطوطته سراً من إيطاليا أثناء إقامة جاليليو الجبرية. يعد الكتاب حجر الزاوية للفيزياء التجريبية الحديثة، حيث صاغ فيه جاليليو براهين السقوط الحر، والمستوى المائل، وتفكيك مسار المقذوفات في بعدين.',
    descriptionEn:
      'Smuggled out of Italy and published in Leiden in 1638 while Galileo was under house arrest, this monumental work established mathematical kinematics. Through the inclined plane and clepsydra water-clock balance, Galileo proved s = ½at² and founded empirical modern physics.',
    dateOrEraAr: 'عصر الثورة العلمية ونشأة الميكانيكا (1638م)',
    dateOrEraEn: 'Scientific Revolution & Dawn of Kinematics (1638 CE)',
    locationAr: 'متحف جاليليو ومكتبة فلورنسا الوطنية، فلورنسا، إيطاليا',
    locationEn: 'Museo Galileo & National Central Library of Florence, Italy',
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-amber-400 text-white'
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
                ? 'bg-black border-amber-400 text-amber-400'
                : 'bg-gradient-to-br from-amber-600 to-orange-700 text-white border-amber-400/40 shadow-amber-500/20'
            }`}
          >
            <TrendingDown className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic
                  ? 'استوديو جاليليو الأرشيفي 1638: المستوى المائل والتسارع المنتظم (4K)'
                  : 'Galileo 1638 Kinematics: Inclined Plane & Uniform Acceleration Studio (4K)'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-amber-400 text-black border-amber-300'
                    : isLight
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                }`}
              >
                1638 CE · Leiden Folio 4K
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'فحص المخطوطة الأصلية لكتاب العلمين الجديدين وتجربة المستوى المائل والساعة المائية مع محاكي السقوط والتسارع'
                : 'Interactive inspection of Galileo’s 1638 Discorsi with inclined plane mechanics, clepsydra timing & odd-numbers ratio engine'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
            isContrast
              ? 'bg-amber-400 text-black border-amber-300 hover:bg-amber-300'
              : 'bg-amber-600 hover:bg-amber-500 text-white border-amber-500/40'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'عرض اللوحة الأصلية بدقة 4K' : 'View 4K Master Folio'}</span>
        </button>
      </div>

      {/* Main Interactive Stage: Image with Pulse Hotspots */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
        <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-black">
          <img
            src={galileoPhoto}
            alt="Galileo Galilei 1638 Discorsi Kinematics"
            className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.01]"
          />

          {/* Interactive Pulsing Hotspots */}
          {GALILEO_HOTSPOTS.map((spot) => {
            const isSelected = activeHotspot.id === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                style={{ top: `${spot.yPct}%`, left: `${spot.xPct}%` }}
                aria-label={isArabic ? spot.titleAr : spot.titleEn}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center z-10 ${
                  isSelected
                    ? 'bg-amber-400 text-black border-white scale-125 shadow-lg shadow-amber-400/50 ring-4 ring-amber-400/30'
                    : 'bg-orange-600/90 text-white border-orange-300 hover:scale-110 hover:bg-orange-500 shadow-md'
                }`}
              >
                <span className="relative flex h-3 w-3 items-center justify-center">
                  {!isSelected && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  )}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
              </button>
            );
          })}

          {/* Hotspot Badge Overlay */}
          <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md p-2.5 rounded-xl border border-slate-800 text-[11px] flex items-center justify-between gap-2 text-slate-300">
            <span className="flex items-center gap-1.5 font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}</span>
            </span>
            <span className="text-[10px] text-slate-400">
              {isArabic ? 'انقر على الدوائر التفاعلية لفحص تفاصيل تجربة جاليليو' : 'Click pulsing pins for deep historical inspection'}
            </span>
          </div>
        </div>

        {/* Hotspot Details Inspector Drawer */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div
            className={`p-4 rounded-2xl border transition-all ${
              isLight ? 'bg-slate-50 border-slate-200 shadow-xs' : 'bg-slate-900/90 border-slate-800 shadow-md'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Timer className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
                <h3 className="text-sm font-black text-slate-100">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h3>
              </div>
            </div>

            <p className={`text-xs leading-relaxed mt-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>

            <div className="mt-3 pt-3 border-t border-slate-800/80">
              <h4 className="text-[11px] font-bold text-amber-400 flex items-center gap-1 mb-1">
                <Info className="w-3.5 h-3.5" />
                <span>{isArabic ? 'البرهان العلمي وقوانين الحركة بالمنهج:' : 'Kinematic Derivation & Curriculum Principles:'}</span>
              </h4>
              <p className={`text-[11px] leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
              </p>
            </div>
          </div>

          {/* Quick Hotspot Selectors */}
          <div className="flex flex-wrap gap-1.5">
            {GALILEO_HOTSPOTS.map((h, i) => (
              <button
                key={h.id}
                onClick={() => setActiveHotspot(h)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                  activeHotspot.id === h.id
                    ? 'bg-amber-600 text-white border-amber-400 shadow-xs'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {i + 1}. {isArabic ? h.titleAr.split('(')[0] : h.titleEn.split('&')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Inclined Plane & Uniform Acceleration Engine */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-amber-400'
            : isLight
            ? 'bg-slate-50 border-slate-200 shadow-xs'
            : 'bg-slate-900/60 border-slate-800'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Layers className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-sm font-black text-slate-100">
              {isArabic
                ? 'محاكي تجربة المستوى المائل وقانون الأعداد الفردية (s = ½ a t²)'
                : 'Galileo Inclined Plane & Odd-Numbers Kinematics Simulator'}
            </h3>
            <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'غيّر زاوية ميل المستوى وطول المسار وتحقق من تناسب المسافات المقطوعة مع متتالية الأعداد الفردية (1: 3: 5: 7)'
                : 'Adjust ramp angle and length to verify uniform acceleration and the 1:3:5:7 odd-numbers distance ratios'}
            </p>
          </div>
        </div>

        {/* Physics Controls: Motion Type, Angle, Length */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Motion Type Selection */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-xs font-bold block mb-2 text-slate-300">
              {isArabic ? 'نموذج الجسم المتحرك:' : 'Motion Model:'}
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setMotionType('rolling')}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  motionType === 'rolling'
                    ? 'bg-amber-600 text-white border-amber-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {isArabic ? 'كرة تتدحرج (⅐5 g sin θ)' : 'Rolling Sphere (⁵/₇)'}
              </button>
              <button
                onClick={() => setMotionType('sliding')}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  motionType === 'sliding'
                    ? 'bg-amber-600 text-white border-amber-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {isArabic ? 'انزلاق أملس (g sin θ)' : 'Frictionless Slide'}
              </button>
            </div>
          </div>

          {/* Incline Angle Slider */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold mb-1.5">
              <span>{isArabic ? 'زاوية ميل المستوى (θ):' : 'Incline Angle (θ):'}</span>
              <span className="text-amber-400 font-mono text-sm">{inclineAngleDeg}°</span>
            </div>
            <input
              type="range"
              min={5}
              max={60}
              step={1}
              value={inclineAngleDeg}
              onChange={(e) => setInclineAngleDeg(parseInt(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
              <span>5° (انحدار بطيء)</span>
              <span>60° (شديد الانحدار)</span>
            </div>
          </div>

          {/* Ramp Length Slider */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold mb-1.5">
              <span>{isArabic ? 'طول المستوى المائل (L):' : 'Ramp Length (L):'}</span>
              <span className="text-amber-400 font-mono text-sm">{rampLengthM.toFixed(1)} m</span>
            </div>
            <input
              type="range"
              min={1.0}
              max={10.0}
              step={0.5}
              value={rampLengthM}
              onChange={(e) => setRampLengthM(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
              <span>1.0 m</span>
              <span>10.0 m</span>
            </div>
          </div>
        </div>

        {/* Calculated Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'عجلة الحركة (a):' : 'Acceleration (a):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-amber-400">
              {acceleration} m/s²
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
              {motionType === 'rolling' ? 'a = ⁵/₇ · g · sin(θ)' : 'a = g · sin(θ)'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'زمن التدحرج الكلي (t):' : 'Total Roll Time (t):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-cyan-400">
              {totalTimeSec} s
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">t = √(2L / a)</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'السرعة النهائية (v_final):' : 'Final Velocity (v):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-emerald-400">
              {terminalSpeedMS} m/s
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
              {terminalSpeedKmH} km/h
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'معدل تسارع الجاذبية المخفف:' : 'Effective Gravity:'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-purple-400">
              {((acceleration / g) * 100).toFixed(1)}% of g
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">g = 9.807 m/s²</span>
          </div>
        </div>

        {/* Galileo's Odd-Numbers Distance Splits Table */}
        <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h4 className="text-xs font-bold text-slate-200">
              {isArabic
                ? 'برهان جاليليو التجريبي: جدول فواصل المسافات وفق الأعداد الفردية (1 : 3 : 5 : 7)'
                : 'Galileo’s Empirical Proof: Odd-Numbers Interval Distance Breakdown'}
            </h4>
            <span className="text-[10px] font-mono text-amber-400 font-bold">
              Δt = {(totalTimeSec / 4).toFixed(3)} s per quarter
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            {oddIntervals.map((row) => (
              <div
                key={row.step}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800"
              >
                <div className="text-[10px] font-bold text-amber-400 mb-0.5">
                  {isArabic ? `الربع ${row.step}` : `Quarter ${row.step}`} (t = {row.timeElapsed}s)
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-100 font-mono">
                  Δs = {row.intervalDist} m
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {isArabic ? 'النسبة الفردية:' : 'Ratio:'} <strong className="text-emerald-400">{row.oddRatio}x</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HiRes Image Lightbox Modal */}
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
