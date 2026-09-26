import React, { useState } from 'react';
import {
  Sun,
  Maximize2,
  Sparkles,
  RotateCcw,
  Eye,
  Activity,
} from 'lucide-react';
import copernicusPhoto from '../../../assets/space/copernicus_heliocentric_1543.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface CopernicusHotspot {
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

export const COPERNICUS_HOTSPOTS: CopernicusHotspot[] = [
  {
    id: 'sol_stationary_center',
    xPct: 64.0,
    yPct: 45.0,
    titleAr: 'الشمس الثابتة في قلب الكون (Sol)',
    titleEn: 'The Stationary Sun at the Cosmological Core (Sol)',
    categoryAr: 'الثورة الكوبرنيكية',
    categoryEn: 'Copernican Heliocentrism',
    descAr:
      'الرسم التوضيحي الأيقوني في الفصل العاشر من الكتاب الأول؛ حيث وضع كوبرنيكوس الشمس الساكنة المشعة في مركز الكون، كملكة تجلس على عرشها الملكي تضيء وتدير عائلة الكواكب التي تطوف حولها بانتظام.',
    descEn:
      'The iconic woodcut diagram from Book I, Chapter 10 of De revolutionibus; placing the stationary radiant Sun at the absolute hub of the universe, described by Copernicus as a monarch enthroned upon a royal seat illuminating the circling planetary family.',
    scientificInsightAr:
      'أسقط كوبرنيكوس فكرة أن الأرض مركز الوجود الفيزيائي، مما مهد الطريق لنشأة الفيزياء الكونية الموحدة على يد غاليليو ونيوتن.',
    scientificInsightEn:
      'Overturned anthropocentric geocentrism, paving the theoretical foundation for universal gravitational physics under Galileo and Newton.',
  },
  {
    id: 'concentric_planetary_order',
    xPct: 64.0,
    yPct: 35.0,
    titleAr: 'الترتيب الحقيقي للكواكب وسرعاتها المدارية',
    titleEn: 'Physical Ordering of Planetary Orbits & Velocities',
    categoryAr: 'الميكانيكا السماوية',
    categoryEn: 'Celestial Mechanics',
    descAr:
      'استنتج كوبرنيكوس لأول مرة في التاريخ الترتيب الحقيقي لمدارات الكواكب بناءً على أزمنتها الدورية: عطارد (88 يوماً)، الزهرة (225 يوماً)، الأرض (سنة واحدة)، المريخ (سنتان)، المشتري (12 سنة)، وزحل (30 سنة). كلما ابتعد الكوكب عن الشمس، بطأت سرعته المدارية.',
    descEn:
      'Copernicus deduced the definitive physical order of the planets directly from their sidereal periods: Mercury (88 days), Venus (225 days), Earth (1 yr), Mars (2 yrs), Jupiter (12 yrs), and Saturn (30 yrs). Orbital speed strictly decreases with radial distance.',
    scientificInsightAr:
      'أزال هذا الترتيب الفوضى العشوائية في أحجام أفلاك التدوير البطلمية، وكشف عن تناغم فيزيائي صارم يربط المسافة بالزمن المداري.',
    scientificInsightEn:
      'Harmonized the arbitrary ad-hoc sizing of Ptolemy’s epicycles into a single coherent system directly foreshadowing Kepler’s Third Law.',
  },
  {
    id: 'telluris_lunar_orbit',
    xPct: 66.0,
    yPct: 38.0,
    titleAr: 'مدار الأرض التابع وحركة القمر التابع لها (Telluris cum orbe lunari)',
    titleEn: 'Orbital Earth Accompanied by the Moon (Telluris cum orbe lunari)',
    categoryAr: 'مدار الأرض والقمر',
    categoryEn: 'Terrestrial & Lunar Orbits',
    descAr:
      'تمثيل كوكب الأرض كواحد من الكواكب السيارة يدور في فلك دائري سنوي حول الشمس، بينما يدور القمر وحده في فلك خاص به حول الأرض، ليصبح أول مثال لتابع كوكبي مداري في الفكر الفلكي الحديث.',
    descEn:
      'Earth depicted as a moving planet traversing an annual circular orbit around the Sun, while the Moon uniquely orbits Earth, representing history’s first recognized secondary satellite system.',
    scientificInsightAr:
      'فسر كوبرنيكوس تعاقب الفصول بميلان محور دوران الأرض حول نفسها بـ 23.5 درجة أثناء دورانها السنوي حول الشمس.',
    scientificInsightEn:
      'Copernicus naturally explained the terrestrial seasons by the 23.5° axial tilt of Earth preserved throughout its annual revolution.',
  },
  {
    id: 'stellarum_fixarum_immabilis',
    xPct: 64.0,
    yPct: 15.0,
    titleAr: 'كرة النجوم الثوابت الساكنة (Stellarum Fixarum Sphaera Immobilis)',
    titleEn: 'Immobile Sphere of the Fixed Stars (Stellarum Fixarum Sphaera Immobilis)',
    categoryAr: 'الفضاء النجمي السحيق',
    categoryEn: 'Sidereal Immensity',
    descAr:
      'الدائرة الخارجية الكبرى التي جعلها كوبرنيكوس ساكنة تماماً؛ مفسراً الحركة الظاهرية اليومية لقبة السماء ودوران النجوم حول الأرض بأنه مجرد انعكاس بصري لدوران الأرض اليومي حول محورها من الغرب إلى الشرق كل 24 ساعة.',
    descEn:
      'The outermost boundary sphere containing the fixed stars rendered entirely motionless; proving that the apparent 24-hour diurnal rotation of the night sky is purely an optical consequence of Earth rotating on its own polar axis from west to east.',
    scientificInsightAr:
      'استلزم عدم رصد اختلاف منظر النجوم (Parallax) أن تكون المسافة إلى النجوم الثوابت شاسعة وهائلة بما يفوق كل تصورات القدماء.',
    scientificInsightEn:
      'The lack of detectable stellar parallax forced Copernicus to conclude that stellar distances are unimaginably vast compared to the solar system radius.',
  },
  {
    id: 'renaissance_quadrant_astrolabe',
    xPct: 12.0,
    yPct: 35.0,
    titleAr: 'الربع المجيب والمسطرة العاجية الرصدية',
    titleEn: 'Renaissance Brass Quadrant & Observational Ivory Rule',
    categoryAr: 'الأدوات الرصدية النهضوية',
    categoryEn: 'Renaissance Instrumentation',
    descAr:
      'الأجهزة الرصدية لعصر النهضة الموضحة بجانب الكتاب: الربع الخشبي النحاسي المزود بكتلة شاقولية لقياس الارتفاعات الزاوية للأجرام السماوية، ومسطرة القياس المفصلية لحساب الزوايا والأبعاد.',
    descEn:
      'The authentic 16th-century brass plumb-bob quadrant and folding bone rule resting beside the folio, utilized by Renaissance astronomers to take meridian transit altitudes and calibrate solar ecliptic angles.',
    scientificInsightAr:
      'أجرى كوبرنيكوس أرصاده في برج مرصده بفرومبورك (بولندا) باستخدام الربع وثلاثي الشعب (Triquetrum) بدون أي تلسكوب قبل اختراعه بـ 66 عاماً.',
    scientificInsightEn:
      'Copernicus collected all his empirical data at Frombork using naked-eye quadrants and triquetrums, 66 years prior to the telescope’s invention.',
  },
];

interface PlanetOrbitData {
  key: string;
  nameAr: string;
  nameEn: string;
  radiusAU: number;
  periodYr: number;
  color: string;
}

const PLANETS_COPERNICUS: PlanetOrbitData[] = [
  { key: 'mercury', nameAr: 'عطارد', nameEn: 'Mercury', radiusAU: 0.387, periodYr: 0.241, color: '#94A3B8' },
  { key: 'venus', nameAr: 'الزهرة', nameEn: 'Venus', radiusAU: 0.723, periodYr: 0.615, color: '#FBBF24' },
  { key: 'mars', nameAr: 'المريخ', nameEn: 'Mars', radiusAU: 1.524, periodYr: 1.881, color: '#EF4444' },
  { key: 'jupiter', nameAr: 'المشتري', nameEn: 'Jupiter', radiusAU: 5.204, periodYr: 11.86, color: '#F97316' },
];

export const CopernicusHeliocentricStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<CopernicusHotspot>(COPERNICUS_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Heliocentric vs Retrograde Engine
  const [targetPlanetKey, setTargetPlanetKey] = useState<string>('mars');
  const [orbitTimeYears, setOrbitTimeYears] = useState<number>(0.75); // 0 to 2 years
  const [viewPerspective, setViewPerspective] = useState<'heliocentric' | 'geocentric'>('heliocentric');

  const targetPlanet = PLANETS_COPERNICUS.find((p) => p.key === targetPlanetKey) || PLANETS_COPERNICUS[2];

  // Earth coordinates (1 AU)
  const earthRadiusAU = 1.0;
  const earthAngleRad = (orbitTimeYears / 1.0) * 2 * Math.PI;
  const earthX = earthRadiusAU * Math.cos(earthAngleRad);
  const earthY = earthRadiusAU * Math.sin(earthAngleRad);

  // Target Planet coordinates
  const planetAngleRad = (orbitTimeYears / targetPlanet.periodYr) * 2 * Math.PI;
  const planetX = targetPlanet.radiusAU * Math.cos(planetAngleRad);
  const planetY = targetPlanet.radiusAU * Math.sin(planetAngleRad);

  // Line of sight vector from Earth to Planet
  const dx = planetX - earthX;
  const dy = planetY - earthY;
  const distanceEarthPlanet = Math.sqrt(dx * dx + dy * dy);

  // Apparent geocentric angle on the sky (ecliptic longitude)
  const apparentEclipticDeg = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;

  // Synodic period S: 1/S = |1/P_E - 1/P_P|
  const synodicPeriodYears = 1 / Math.abs(1 / 1.0 - 1 / targetPlanet.periodYr);

  // Check if Earth is currently overtaking the outer planet (apparent retrograde window)
  // For outer planets, retrograde occurs near opposition (elongation ~ 180 deg)
  const dotProduct = earthX * dx + earthY * dy;
  const cosElongation = dotProduct / (earthRadiusAU * distanceEarthPlanet);
  const elongationDeg = (Math.acos(Math.max(-1, Math.min(1, cosElongation))) * 180) / Math.PI;
  const isOvertakingRetrograde = targetPlanet.radiusAU > 1.0 ? elongationDeg > 140 : elongationDeg < 25;

  const modalData: HiResImageModalData = {
    imageUrl: copernicusPhoto,
    titleAr: 'مخطوط كوبرنيكوس: في ثورات الأجرام السماوية (١٥٤٣ ميلادية) - نورنبرغ',
    titleEn: 'Nicolaus Copernicus: De revolutionibus orbium coelestium (1543) - Nuremberg',
    subtitleAr: 'مركزية الشمس الثابتة، والترتيب المداري للكواكب، وتفسير التراجع بالتجاوز الحركي',
    subtitleEn: 'Heliocentric Cosmology, Physical Planetary Order, and Overtaking Retrograde Kinematics',
    descriptionAr:
      'الصفحة الأيقونية التاريخية من كتاب كوبرنيكوس الصادر عام 1543؛ تُظهر المخطط الدائري الخشبي الشهير للشمس الثابتة في المركز وتحيط بها مدارات عطارد، الزهرة، الأرض مع القمر، المريخ، المشتري، زحل، وقبة النجوم الثابتة، بجانب أدوات الرصد والقياس النهضوية.',
    descriptionEn:
      'The foundational master page from Copernicus’s 1543 landmark work De revolutionibus orbium coelestium; displaying the iconic woodcut diagram with the stationary Sun (Sol) at the center orbited by Mercury, Venus, Earth with Moon, Mars, Jupiter, Saturn, and the fixed star sphere.',
    dateOrEraAr: '١٥٤٣ ميلادية (عصر النهضة الأوروبية، نورنبرغ)',
    dateOrEraEn: '1543 AD (European Renaissance, Nuremberg)',
    locationAr: 'مكتبة ياغيلونيا، كراكوف / المتحف الوطني في نورنبرغ',
    locationEn: 'Jagiellonian Library, Kraków / Germanisches Nationalmuseum, Nuremberg',
  };

  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 ${
        isContrast
          ? 'border-yellow-400 bg-black text-yellow-300'
          : isLight
          ? 'border-amber-200 bg-gradient-to-br from-amber-50/70 via-stone-50 to-yellow-50/50 text-stone-900 shadow-xl'
          : 'border-amber-900/40 bg-gradient-to-br from-stone-950 via-amber-950/20 to-stone-900 text-stone-100 shadow-2xl'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/30 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-stone-950 shadow-lg shadow-amber-900/40">
            <Sun className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-500">
                {isArabic ? 'نورنبرغ • ١٥٤٣ ميلادية' : 'Nuremberg • 1543 AD'}
              </span>
              <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-600">
                {isArabic ? 'في ثورات الأجرام السماوية' : 'De revolutionibus'}
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">
              {isArabic
                ? 'استوديو كوبرنيكوس: ثورة مركزية الشمس وتفسير تراجع الكواكب'
                : 'Copernicus Heliocentric Studio: Solar Hub & Geometric Retrograde Solution'}
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
              src={copernicusPhoto}
              alt="Copernicus 1543 Folio"
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Hotspot Pins */}
            {COPERNICUS_HOTSPOTS.map((hotspot) => {
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
                {isArabic ? 'المبدأ الكوبرنيكي' : 'Copernican Principle'}
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
                {isArabic ? 'الأثر المعرفي والفيزيائي:' : 'Epistemological Impact:'}
              </div>
              <p className="mt-1 text-xs leading-normal opacity-95">
                {isArabic ? activeHotspot.scientificInsightAr : activeHotspot.scientificInsightEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Heliocentric Perspective & Retrograde Engine */}
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
                <Eye className="h-5 w-5" />
                <span>{isArabic ? 'محرك التجاوز المداري وتفسير الحركة الرجعية' : 'Orbital Overtaking & Retrograde Engine'}</span>
              </div>
              <button
                onClick={() => {
                  setTargetPlanetKey('mars');
                  setOrbitTimeYears(0.75);
                }}
                className="flex items-center gap-1 text-xs text-amber-400 hover:underline"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                {isArabic ? 'إعادة ضبط' : 'Reset'}
              </button>
            </div>

            {/* Target Planet Selector */}
            <div className="mt-3">
              <label className="text-xs font-medium text-amber-400">
                {isArabic ? 'الكوكب المرصود:' : 'Target Observed Planet:'}
              </label>
              <div className="mt-1.5 grid grid-cols-4 gap-1.5">
                {PLANETS_COPERNICUS.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => setTargetPlanetKey(p.key)}
                    className={`rounded-lg border px-2 py-1 text-center text-xs font-medium transition-all ${
                      targetPlanetKey === p.key
                        ? 'border-amber-500 bg-amber-500/20 text-amber-400 font-bold'
                        : 'border-stone-700 text-stone-300 hover:border-amber-500/50'
                    }`}
                  >
                    {isArabic ? p.nameAr : p.nameEn}
                  </button>
                ))}
              </div>
            </div>

            {/* View Perspective Toggle */}
            <div className="mt-3 flex rounded-lg border border-stone-700 p-1">
              <button
                onClick={() => setViewPerspective('heliocentric')}
                className={`flex-1 rounded-md py-1 text-xs font-medium transition-all ${
                  viewPerspective === 'heliocentric'
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {isArabic ? 'منظور الشمس (الواقع الفيزيائي)' : 'Sun View (Heliocentric)'}
              </button>
              <button
                onClick={() => setViewPerspective('geocentric')}
                className={`flex-1 rounded-md py-1 text-xs font-medium transition-all ${
                  viewPerspective === 'geocentric'
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {isArabic ? 'منظور الأرض (الرؤية الظاهرية)' : 'Earth View (Geocentric)'}
              </button>
            </div>

            {/* Timeline Slider */}
            <div className="mt-4">
              <div className="flex justify-between text-xs">
                <span>{isArabic ? 'الزمن المداري (بالسنوات الأرضية):' : 'Elapsed Time (Earth Years):'}</span>
                <span className="font-mono text-amber-400">{orbitTimeYears.toFixed(2)} yr</span>
              </div>
              <input
                type="range"
                min="0"
                max="2.5"
                step="0.01"
                value={orbitTimeYears}
                onChange={(e) => setOrbitTimeYears(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            {/* Interactive SVG Diagram */}
            <div className="mt-4 flex flex-col items-center justify-center rounded-xl bg-stone-950 p-2 border border-stone-800">
              <svg width="340" height="260" viewBox="0 0 400 300" className="max-w-full">
                {/* Scale factor: 1 AU = 45px */}
                {/* Center of Sun at (200, 150) */}
                <circle cx="200" cy="150" r="1.0 * 45" fill="none" stroke="#3b82f6" strokeDasharray="3 3" opacity="0.5" />
                <circle cx="200" cy="150" r={targetPlanet.radiusAU * 45} fill="none" stroke={targetPlanet.color} strokeDasharray="3 3" opacity="0.5" />

                {/* Central Sun */}
                <circle cx="200" cy="150" r="10" fill="#f59e0b" />
                <text x="200" y="154" textAnchor="middle" fill="#000000" fontSize="8" fontWeight="bold">
                  Sol
                </text>

                {/* Earth Position */}
                {(() => {
                  const ex = 200 + earthX * 45;
                  const ey = 150 - earthY * 45;
                  const px = 200 + planetX * 45;
                  const py = 150 - planetY * 45;

                  return (
                    <>
                      {/* Line of sight from Earth through Planet */}
                      <line x1={ex} y1={ey} x2={px} y2={py} stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 2" />

                      {/* Earth */}
                      <circle cx={ex} cy={ey} r="7" fill="#0284c7" />
                      <text x={ex} y={ey - 10} textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
                        {isArabic ? 'الأرض' : 'Earth'}
                      </text>

                      {/* Target Planet */}
                      <circle cx={px} cy={py} r="8" fill={targetPlanet.color} />
                      <text x={px} y={py - 12} textAnchor="middle" fill={targetPlanet.color} fontSize="10" fontWeight="bold">
                        {isArabic ? targetPlanet.nameAr : targetPlanet.nameEn}
                      </text>
                    </>
                  );
                })()}

                {/* Status indicator badge */}
                <rect x="15" y="15" width="220" height="28" rx="6" fill="#18181b" opacity="0.85" />
                <text x="25" y="33" fill={isOvertakingRetrograde ? '#ef4444' : '#10b981'} fontSize="11" fontWeight="bold">
                  {isOvertakingRetrograde
                    ? (isArabic ? '⚠️ تراجع ظاهري (الأرض تتجاوز الكوكب!)' : '⚠️ Apparent Retrograde (Earth Overtaking!)')
                    : (isArabic ? '✓ حركة أمامية اعتيادية' : '✓ Normal Direct Motion')}
                </text>
              </svg>
            </div>

            {/* Calculations Dashboard */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'المسافة بين الأرض والكوكب:' : 'Earth-Planet Distance:'}</span>
                <div className="font-mono text-base font-bold text-amber-400">{distanceEarthPlanet.toFixed(3)} AU</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'زاوية الاستطالة (Elongation):' : 'Elongation Angle:'}</span>
                <div className="font-mono text-base font-bold text-amber-400">{elongationDeg.toFixed(1)}°</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'الدورة الاقترانية (Synodic Period):' : 'Synodic Period:'}</span>
                <div className="font-mono text-sm text-stone-200">{(synodicPeriodYears * 365.25).toFixed(0)} {isArabic ? 'يوماً' : 'days'} ({synodicPeriodYears.toFixed(2)} yr)</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'خط الطول الكسوفي الظاهري:' : 'Apparent Ecliptic Longitude:'}</span>
                <div className="font-mono text-sm text-stone-200">{apparentEclipticDeg.toFixed(1)}°</div>
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
export default CopernicusHeliocentricStudio;
