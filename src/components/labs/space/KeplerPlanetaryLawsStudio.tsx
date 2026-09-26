import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  RotateCcw,
  Orbit,
  Activity,
} from 'lucide-react';
import keplerPhoto from '../../../assets/space/kepler_astronomia_nova_1609.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface KeplerHotspot {
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

export const KEPLER_HOTSPOTS: KeplerHotspot[] = [
  {
    id: 'elliptical_orbit_mars',
    xPct: 50.0,
    yPct: 48.0,
    titleAr: 'قانون كبلر الأول: المدارات الإهليلجية والشمس في إحدى البؤرتين',
    titleEn: 'Kepler’s First Law: Elliptical Orbits with Sun at One Focus',
    categoryAr: 'الهندسة المدارية الكبلرية',
    categoryEn: 'Keplerian Orbital Geometry',
    descAr:
      'المخطط التاريخي في الفصل 59 من كتاب "الفلك الجديد" (Astronomia nova)؛ حيث أثبت كبلر أن مسار كوكب المريخ إهليلج تام (قطع ناقص) تقع الشمس في إحدى بؤرتيه (F₁)، محطماً قداسة الدوائر الأرسطية التي استمرت ألفي عام.',
    descEn:
      'The landmark diagram from Chapter 59 of Astronomia nova; establishing that the orbit of Mars is a true ellipse with the Sun situated at one focus (F₁), dismantling two millennia of Aristotelian devotion to circular celestial motion.',
    scientificInsightAr:
      'تحدد معادلة القطع الناقص القطبية المسافة بدقة: r(θ) = a(1 - e²) / (1 + e·cos θ)، حيث يمثل a نصف المحور الأكبر و e معامل الاختلاف المركزي.',
    scientificInsightEn:
      'Polar ellipse equation: r(θ) = a(1 - e²) / (1 + e·cos θ), where a is the semi-major axis and e is orbital eccentricity.',
  },
  {
    id: 'equal_areas_equal_times',
    xPct: 44.0,
    yPct: 42.0,
    titleAr: 'قانون كبلر الثاني: المساحات المتساوية في أزمنة متساوية',
    titleEn: 'Kepler’s Second Law: Law of Equal Areas in Equal Times',
    categoryAr: 'حفظ الزخم الزاوي',
    categoryEn: 'Angular Momentum Conservation',
    descAr:
      'القطاعات المظللة في المخطط (Area ABF₁ = Area CDF₁)؛ حيث يمسح الخط الواصل بين الشمس والكوكب مساحات متساوية خلال فترات زمنية متساوية (dA/dt = ثابت)، مما يعني تسارع الكوكب عند اقترابه من الحضيض وتباطؤه عند الأوج.',
    descEn:
      'The shaded orbital sectors in the diagram demonstrating that the radius vector sweeps out equal areas in equal intervals of time (dA/dt = const), proving the planet accelerates near perihelion and decelerates near aphelion.',
    scientificInsightAr:
      'قاد هذا القانون نيوتن مباشرة لاستنتاج قانون الجذب العام؛ حيث يعبر ثبات معدل المساحة عن حفظ كمية الحركة الزاوية (L = m·r·v = ثابت) في وجود قوة جذب مركزية نحو الشمس.',
    scientificInsightEn:
      'The constant areal velocity (dA/dt = L / 2m) directly guided Newton to deduce universal gravitation, physically manifesting conservation of angular momentum under central forces.',
  },
  {
    id: 'perihelion_aphelion_velocities',
    xPct: 37.0,
    yPct: 52.0,
    titleAr: 'نقطتا الحضيض والأوج وتفاوت السرعات المدارية',
    titleEn: 'Perihelion & Aphelion Extremes & Orbital Velocities',
    categoryAr: 'السرعات الكوكبية',
    categoryEn: 'Orbital Velocity Bounds',
    descAr:
      'توضح النقطتان المتطرفتان على المحور الأكبر: الحضيض (Perihelion) عند النقطة A حيث المسافة أقل ما يمكن r_p = a(1-e) والسرعة أقصى ما يمكن، والأوج (Aphelion) عند النقطة M حيث المسافة أبعد ما يمكن r_a = a(1+e) والسرعة أدنى ما يمكن.',
    descEn:
      'The major axis extrema: perihelion at point A where distance is minimal (r_p = a(1-e)) and velocity peaks, and aphelion at point M where distance reaches maximum (r_a = a(1+e)) and speed drops to its lowest.',
    scientificInsightAr:
      'تخضع السرعة لمعادلة الطاقة المدارية (Vis-Viva): v² = GM(2/r - 1/a)، مما يجعل نسبة السرعتين v_p / v_a = (1+e) / (1-e).',
    scientificInsightEn:
      'Velocities obey the vis-viva equation: v² = GM(2/r - 1/a), giving the exact speed ratio v_p / v_a = (1+e) / (1-e).',
  },
  {
    id: 'tycho_brahe_observational_data',
    xPct: 62.0,
    yPct: 22.0,
    titleAr: 'أرصاد تيخو براهي وفارق الـ 8 دقائق قوسية الحاسم',
    titleEn: 'Tycho Brahe’s Empirical Astrometry & The 8 Arc-Minute Climax',
    categoryAr: 'الدقة الرصدية التجريبية',
    categoryEn: 'Empirical Precision',
    descAr:
      'النص اللاتيني الذي يصف كفاح كبلر الحسابي الشاق مع أرصاد أستاذه تيخو براهي لمدار المريخ؛ حيث وجد فارقاً ضئيلاً قدره 8 دقائق قوسية (8′) بين النموذج الدائري وأرصاد براهي الدقيقة، فرفض كبلر إهماله واعتبره مفتاح الحقيقة الذي قاده لاكتشاف البيضاوي.',
    descEn:
      'Kepler’s famous testimony: had he believed he could ignore 8 minutes of arc (8′) in Tycho Brahe’s Mars observations, he would have retained circular orbits. But because Tycho’s instruments were precise to within 2′, those 8′ alone rebuilt celestial physics.',
    scientificInsightAr:
      '8 دقائق قوسية تعادل ربع قطر قرص القمر الظاهري فقط، لكنها كفت لهدم فيزياء أرسطو وبطليموس وبناء علم الفلك الحديث.',
    scientificInsightEn:
      '8 arcminutes is barely a quarter of the Moon’s apparent disc, yet it was empirically sufficient to overturn millennia of circular cosmology.',
  },
  {
    id: 'proportional_compass_hourglass',
    xPct: 88.0,
    yPct: 58.0,
    titleAr: 'الفرجار التناسبي والساعة الرملية الحسابية',
    titleEn: '17th-Century Proportional Compass & Sand Hourglass',
    categoryAr: 'الأدوات الهندسية التاريخية',
    categoryEn: 'Mathematical Instrumentation',
    descAr:
      'الأدوات الأصلية الموضوعة بجانب المجلد: الفرجار المعدني المفصلي المستخدم في رسم القطوع المخروطية وإجراء العمليات الحسابية التناسبية للقطاعات المدارية، والساعة الرملية لمراقبة دقة أزمنة المسح المساحي المداري.',
    descEn:
      'The authentic 17th-century brass proportional dividers used to calculate conic sections and sweep area proportions, accompanied by a sand hourglass symbolizing chronometric precision in orbital transit measurements.',
    scientificInsightAr:
      'أجرى كبلر آلاف العمليات الحسابية اليدوية المضنية قبل اختراع اللوغاريتمات على يد جون نابير بعامين.',
    scientificInsightEn:
      'Kepler manually executed hundreds of thousands of tedious trigonometric calculations two years before Napier’s invention of logarithms.',
  },
];

interface OrbitPreset {
  nameAr: string;
  nameEn: string;
  a: number; // AU
  e: number;
  color: string;
}

const ORBIT_PRESETS: Record<string, OrbitPreset> = {
  mars: { nameAr: 'المريخ (اكتشاف كبلر الحاسم)', nameEn: 'Mars (Kepler’s Breakthrough)', a: 1.524, e: 0.093, color: '#EF4444' },
  earth: { nameAr: 'الأرض (شبه دائري)', nameEn: 'Earth (Nearly Circular)', a: 1.000, e: 0.017, color: '#3B82F6' },
  mercury: { nameAr: 'عطارد (اختلاف مركزي مرتفع)', nameEn: 'Mercury (High Eccentricity)', a: 0.387, e: 0.206, color: '#F59E0B' },
  halley: { nameAr: 'مذنب هالي (مدار متطرف)', nameEn: 'Halley’s Comet (Extreme Orbit)', a: 2.800, e: 0.750, color: '#A855F7' },
};

export const KeplerPlanetaryLawsStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<KeplerHotspot>(KEPLER_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Orbital Parameters
  const [selectedOrbitKey, setSelectedOrbitKey] = useState<string>('mars');
  const [semiMajorAxisA, setSemiMajorAxisA] = useState<number>(1.524);
  const [eccentricityE, setEccentricityE] = useState<number>(0.093);
  const [trueAnomalyDeg, setTrueAnomalyDeg] = useState<number>(60); // 0 to 360

  const applyPreset = (key: string) => {
    setSelectedOrbitKey(key);
    const p = ORBIT_PRESETS[key];
    if (p) {
      setSemiMajorAxisA(p.a);
      setEccentricityE(p.e);
    }
  };

  // Calculations
  const a = semiMajorAxisA;
  const e = eccentricityE;
  const b = a * Math.sqrt(Math.max(0.001, 1 - e * e)); // semi-minor axis
  const c = a * e; // focal distance from center

  const thetaRad = (trueAnomalyDeg * Math.PI) / 180;
  // Radius r from focus F1: r = a(1-e^2) / (1 + e*cos(theta))
  const r = (a * (1 - e * e)) / (1 + e * Math.cos(thetaRad));

  // Velocities: v = sqrt(GM * (2/r - 1/a))
  // For Earth at 1 AU, v0 ~ 29.78 km/s
  const vOrbitKmS = 29.78 * Math.sqrt(Math.max(0, 2 / r - 1 / a));
  const rPerihelion = a * (1 - e);
  const rAphelion = a * (1 + e);
  const vPerihelion = 29.78 * Math.sqrt(2 / rPerihelion - 1 / a);
  const vAphelion = 29.78 * Math.sqrt(2 / rAphelion - 1 / a);

  // Third Law: T^2 = a^3 -> T = a^(1.5) years
  const periodYears = Math.pow(a, 1.5);
  const periodDays = periodYears * 365.25;

  // Ellipse SVG Scale
  // Width 400, Height 280, Center of ellipse at (200, 140)
  // Scaling: semi-major axis visual radius ~ 120px
  const scale = 120 / a;
  const svgA = a * scale;
  const svgB = b * scale;
  const svgC = c * scale;

  // Sun is at Focus 1: (200 - svgC, 140)
  const sunX = 200 - svgC;
  const sunY = 140;

  // Position of Planet in SVG:
  // Relative to Focus 1:
  const planetSvgX = sunX + r * scale * Math.cos(thetaRad);
  const planetSvgY = sunY - r * scale * Math.sin(thetaRad);

  // Equal area wedge: arc between theta and theta + 25 deg
  const wedgeEndTheta = thetaRad + (25 * Math.PI) / 180;
  const rEnd = (a * (1 - e * e)) / (1 + e * Math.cos(wedgeEndTheta));
  const wedgeEndX = sunX + rEnd * scale * Math.cos(wedgeEndTheta);
  const wedgeEndY = sunY - rEnd * scale * Math.sin(wedgeEndTheta);

  const modalData: HiResImageModalData = {
    imageUrl: keplerPhoto,
    titleAr: 'مخطوط يوهانس كبلر: الفلك الجديد (١٦٠٩ ميلادية) - هايدلبرغ',
    titleEn: 'Johannes Kepler: Astronomia nova (1609) - Heidelberg',
    subtitleAr: 'المدارات الإهليلجية، والشمس في إحدى البؤرتين، وقانون المساحات المتساوية وحفظ الزخم',
    subtitleEn: 'Elliptical Orbits, Solar Focal Position, Equal Areas Law, and Angular Momentum',
    descriptionAr:
      'الصفحة المرجعية التاريخية من كتاب كبلر "Astronomia nova" (الفصل 59)؛ تعرض الإثبات الهندسي لمدار المريخ الإهليلجي مع الشمس في إحدى البؤرتين، وقانون المساحات المتساوية في أزمنة متساوية، بجانب الفرجار التناسبي والساعة الرملية الأثرية.',
    descriptionEn:
      'The foundational master page from Kepler’s 1609 Astronomia nova (Chapter 59); demonstrating the geometric proof of Mars’s elliptical orbit with the Sun at one focus, the equal areas law (dA/dt = const), proportional dividers, and antique hourglass.',
    dateOrEraAr: '١٦٠٩ ميلادية (الثورة العلمية، براغ وهايدلبرغ)',
    dateOrEraEn: '1609 AD (Scientific Revolution, Heidelberg)',
    locationAr: 'مكتبة جامعة هايدلبرغ، ألمانيا / الأرشيف الفلكي لبراج',
    locationEn: 'Heidelberg University Library / Prague Astronomical Archive',
  };

  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 ${
        isContrast
          ? 'border-yellow-400 bg-black text-yellow-300'
          : isLight
          ? 'border-amber-200 bg-gradient-to-br from-amber-50/70 via-stone-50 to-orange-50/50 text-stone-900 shadow-xl'
          : 'border-amber-900/40 bg-gradient-to-br from-stone-950 via-amber-950/20 to-stone-900 text-stone-100 shadow-2xl'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/30 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-red-700 text-white shadow-lg shadow-amber-900/40">
            <Orbit className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-500">
                {isArabic ? 'هايدلبرغ • ١٦٠٩ ميلادية' : 'Heidelberg • 1609 AD'}
              </span>
              <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-400">
                {isArabic ? 'الفلك الجديد (Astronomia nova)' : 'Astronomia nova'}
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">
              {isArabic
                ? 'استوديو كبلر: القوانين الكوكبية الثلاثة وهندسة المدارات الإهليلجية'
                : 'Kepler Orbital Studio: Three Planetary Laws & Elliptical Kinematics'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-amber-500 active:scale-95"
        >
          <Maximize2 className="h-4 w-4" />
          {isArabic ? 'فحص المخطوط بدقة 4K' : 'Inspect 4K Manuscript'}
        </button>
      </div>

      {/* Main Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: 4K Image Canvas with Hotspots */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-xl border border-amber-800/30 bg-black/60 shadow-inner">
            <img
              src={keplerPhoto}
              alt="Kepler 1609 Folio"
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Hotspot Pins */}
            {KEPLER_HOTSPOTS.map((hotspot) => {
              const isActive = activeHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot)}
                  style={{ left: `${hotspot.xPct}%`, top: `${hotspot.yPct}%` }}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 transition-all duration-300 ${
                    isActive
                      ? 'scale-125 bg-amber-500 text-stone-950 ring-4 ring-amber-300/60'
                      : 'bg-stone-900/90 text-amber-300 hover:scale-110 hover:bg-amber-600 hover:text-white'
                  }`}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <span className="pointer-events-none absolute bottom-full mb-1.5 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-stone-900/95 px-2 py-1 text-xs text-amber-200 shadow-md group-hover:block">
                    {isArabic ? hotspot.titleAr : hotspot.titleEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Hotspot Deep Dive Card */}
          <div
            className={`mt-4 rounded-xl border p-4 transition-all ${
              isContrast
                ? 'border-yellow-400 bg-stone-900 text-yellow-300'
                : isLight
                ? 'border-amber-200 bg-amber-50/80 text-stone-900'
                : 'border-amber-800/30 bg-stone-900/80 text-stone-200'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
              </span>
              <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400">
                {isArabic ? 'قانون كبلري' : 'Keplerian Law'}
              </span>
            </div>
            <h3 className="mt-1 text-lg font-bold text-amber-400">
              {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
            </h3>
            <p className="mt-2 text-sm leading-relaxed opacity-90">
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>
            <div className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500">
                <Activity className="h-3.5 w-3.5" />
                {isArabic ? 'البرهان الفيزيائي والرياضي:' : 'Mathematical & Physical Formulation:'}
              </div>
              <p className="mt-1 text-xs leading-normal opacity-95">
                {isArabic ? activeHotspot.scientificInsightAr : activeHotspot.scientificInsightEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Keplerian 3-Laws Orbital Simulator */}
        <div className="flex flex-col gap-5 lg:col-span-5">
          <div
            className={`flex flex-col rounded-xl border p-5 ${
              isContrast
                ? 'border-yellow-400 bg-stone-900'
                : isLight
                ? 'border-amber-200 bg-white/90 shadow-md'
                : 'border-amber-900/30 bg-stone-900/90 shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between border-b border-amber-800/20 pb-3">
              <div className="flex items-center gap-2 font-bold text-amber-500">
                <Orbit className="h-5 w-5" />
                <span>{isArabic ? 'محاكي قوانين كبلر الثلاثة' : 'Kepler’s 3 Laws Orbital Engine'}</span>
              </div>
              <button
                onClick={() => applyPreset('mars')}
                className="flex items-center gap-1 text-xs text-amber-400 hover:underline"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                {isArabic ? 'إعادة ضبط' : 'Reset'}
              </button>
            </div>

            {/* Presets */}
            <div className="mt-3">
              <label className="text-xs font-medium text-amber-400">
                {isArabic ? 'نماذج المدارات الكوكبية:' : 'Planetary Orbit Presets:'}
              </label>
              <div className="mt-1.5 grid grid-cols-2 gap-2">
                {Object.entries(ORBIT_PRESETS).map(([key, p]) => (
                  <button
                    key={key}
                    onClick={() => applyPreset(key)}
                    className={`rounded-lg border px-2 py-1.5 text-left text-xs font-medium transition-all ${
                      selectedOrbitKey === key
                        ? 'border-amber-500 bg-amber-500/20 text-amber-400 font-bold'
                        : 'border-stone-700 text-stone-300 hover:border-amber-500/50'
                    }`}
                  >
                    {isArabic ? p.nameAr : p.nameEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-xs">
                  <span>{isArabic ? 'نصف المحور الأكبر (a):' : 'Semi-Major Axis (a):'}</span>
                  <span className="font-mono text-amber-400">{semiMajorAxisA.toFixed(3)} AU</span>
                </div>
                <input
                  type="range"
                  min="0.3"
                  max="3.5"
                  step="0.05"
                  value={semiMajorAxisA}
                  onChange={(e) => setSemiMajorAxisA(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs">
                  <span>{isArabic ? 'معامل الاختلاف المركزي (e):' : 'Orbital Eccentricity (e):'}</span>
                  <span className="font-mono text-amber-400">{eccentricityE.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="0.85"
                  step="0.01"
                  value={eccentricityE}
                  onChange={(e) => setEccentricityE(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs">
                  <span>{isArabic ? 'الموقع الزاوي للكوكب (True Anomaly θ):' : 'True Anomaly Angle (θ):'}</span>
                  <span className="font-mono text-amber-400">{trueAnomalyDeg}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="2"
                  value={trueAnomalyDeg}
                  onChange={(e) => setTrueAnomalyDeg(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>

            {/* Interactive SVG Orbital Diagram */}
            <div className="mt-4 flex flex-col items-center justify-center rounded-xl bg-stone-950 p-2 border border-stone-800">
              <svg width="340" height="240" viewBox="0 0 400 280" className="max-w-full">
                {/* Major & Minor Axes */}
                <line x1="200 - svgA - 20" y1="140" x2="200 + svgA + 20" y2="140" stroke="#3f3f46" strokeDasharray="3 3" />
                <line x1="200" y1="140 - svgB - 15" x2="200" y2="140 + svgB + 15" stroke="#3f3f46" strokeDasharray="3 3" />

                {/* Ellipse Orbit */}
                <ellipse cx="200" cy="140" rx={svgA} ry={svgB} fill="none" stroke="#d97706" strokeWidth="2" />

                {/* Equal Area Sector Wedge (Second Law) */}
                <path
                  d={`M ${sunX},${sunY} L ${planetSvgX},${planetSvgY} A ${svgA} ${svgB} 0 0 0 ${wedgeEndX},${wedgeEndY} Z`}
                  fill="#f59e0b"
                  fillOpacity="0.25"
                  stroke="#f59e0b"
                  strokeWidth="1"
                />

                {/* Foci */}
                {/* Focus 1: Sun */}
                <circle cx={sunX} cy={sunY} r="8" fill="#f59e0b" />
                <text x={sunX} y={sunY - 12} textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">
                  {isArabic ? 'الشمس (F₁)' : 'Sun (F₁)'}
                </text>

                {/* Focus 2: Empty Focus */}
                <circle cx={200 + svgC} cy={140} r="3" fill="#71717a" />
                <text x={200 + svgC} y={155} textAnchor="middle" fill="#71717a" fontSize="8">
                  F₂
                </text>

                {/* Perihelion & Aphelion Markers */}
                <circle cx={200 - svgA} cy="140" r="4" fill="#ef4444" />
                <text x={200 - svgA} y="160" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">
                  {isArabic ? 'الحضيض' : 'Perihelion'}
                </text>

                <circle cx={200 + svgA} cy="140" r="4" fill="#3b82f6" />
                <text x={200 + svgA} y="160" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">
                  {isArabic ? 'الأوج' : 'Aphelion'}
                </text>

                {/* Radius Vector Line */}
                <line x1={sunX} y1={sunY} x2={planetSvgX} y2={planetSvgY} stroke="#fbbf24" strokeWidth="1.5" />

                {/* Planet Marker */}
                <circle cx={planetSvgX} cy={planetSvgY} r="7" fill="#10b981" />
                <text x={planetSvgX} y={planetSvgY - 12} textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">
                  {isArabic ? 'الكوكب' : 'Planet'}
                </text>
              </svg>
            </div>

            {/* Calculations Dashboard */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'المسافة الحالية عن الشمس (r):' : 'Current Solar Distance (r):'}</span>
                <div className="font-mono text-base font-bold text-amber-400">{r.toFixed(3)} AU</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'السرعة المدارية اللحظية (v):' : 'Instantaneous Velocity (v):'}</span>
                <div className="font-mono text-base font-bold text-emerald-400">{vOrbitKmS.toFixed(2)} km/s</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'الزمن الدوري (قانون كبلر الثالث):' : 'Orbital Period (3rd Law T):'}</span>
                <div className="font-mono text-sm text-stone-200">{periodYears.toFixed(2)} yr ({periodDays.toFixed(0)} {isArabic ? 'يوماً' : 'days'})</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'سرعة الحضيض / الأوج:' : 'Perihelion / Aphelion Speeds:'}</span>
                <div className="font-mono text-sm text-stone-200">{vPerihelion.toFixed(1)} / {vAphelion.toFixed(1)} km/s</div>
              </div>
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
export default KeplerPlanetaryLawsStudio;
