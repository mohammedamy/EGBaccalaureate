import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  RotateCcw,
  Orbit,
  Activity,
} from 'lucide-react';
import ptolemyPhoto from '../../../assets/space/ptolemy_almagest_geocentric_150ad.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface PtolemyHotspot {
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

export const PTOLEMY_HOTSPOTS: PtolemyHotspot[] = [
  {
    id: 'geocentric_crystalline_spheres',
    xPct: 52.0,
    yPct: 48.0,
    titleAr: 'الأرض الثابتة في مركز الكون والكرات البلورية',
    titleEn: 'Stationary Central Earth & Crystalline Celestial Spheres',
    categoryAr: 'النموذج الكوني البطلمي',
    categoryEn: 'Ptolemaic Geocentric Cosmology',
    descAr:
      'تمثيل كوكب الأرض (Terra) ككرة ثابتة ساكنة في المركز الهندسي والفيزيائي الدقيق للكون، تحيط بها كرات سماوية شفافة متحدة أو متباعدة المراكز تحمل القمر وعطارد والزهرة والشمس والمريخ والمشتري وزحل.',
    descEn:
      'The spherical Earth (Terra) positioned motionless at the precise geometric and gravitational hub of the cosmos, encapsulated by concentric crystalline shells carrying the Moon, Mercury, Venus, Sun, Mars, Jupiter, and Saturn.',
    scientificInsightAr:
      'استند بطليموس في ثبات الأرض إلى انعدام الشعور بالرياح الكونية العاتية وعدم رصد أي اختلاف في المنظر النجمي (Stellar Parallax) بالعين المجردة.',
    scientificInsightEn:
      'Ptolemy argued for Earth’s immobility based on the physical lack of centrifugal winds and the absence of any naked-eye detectable stellar parallax.',
  },
  {
    id: 'deferent_circle_epicycle',
    xPct: 58.0,
    yPct: 32.0,
    titleAr: 'آلية فلك التدوير وفلك الحامل (Epicycle & Deferent)',
    titleEn: 'Epicycle & Deferent Kinematic Mechanism',
    categoryAr: 'الحركيات الكوكبية',
    categoryEn: 'Planetary Kinematics',
    descAr:
      'الابتكار الهندسي الرياضي الذي وضعه أبولونيوس وطوره بطليموس لتفسير الحركة الرجعية الظاهرية للكواكب؛ حيث يدور الكوكب في دائرة صغيرة (فلك التدوير) يدور مركزها بدوره على مدار دائري كبير (فلك الحامل) حول الأرض.',
    descEn:
      'The geometric mechanism devised to explain apparent retrograde planetary loops: a planet moves uniformly upon a small circle (the epicycle), whose center concurrently rotates along a larger primary circular orbit (the deferent) encircling Earth.',
    scientificInsightAr:
      'يفسر فلك التدوير التغير الكبير في لمعان الكواكب وقربها من الأرض أثناء مرحلة الانعكاس والتقهقر الظاهري.',
    scientificInsightEn:
      'Epicycles kinematically accounted for why planets appear significantly brighter and closer to Earth during retrograde motion episodes.',
  },
  {
    id: 'equant_point_uniform_motion',
    xPct: 46.0,
    yPct: 42.0,
    titleAr: 'نقطة معدل المسير (نقطة المحاذاة - Equant)',
    titleEn: 'The Equant Point (Center of Uniform Angular Velocity)',
    categoryAr: 'الديناميكا الفلكية القديمة',
    categoryEn: 'Ancient Celestial Dynamics',
    descAr:
      'النقطة الافتراضية المقابلة لمركز فلك الحامل التي يبدو منها مركز فلك التدوير متحركاً بسرعة زاوية ثابتة ومنتظمة. يعد الإيكوانت إنجاز بطليموس الرياضي الفذ لضبط التغير غير المنتظم في السرعات المدارية، على حساب إسقاط مبدأ الدوران المنتظم حول المركز الحقيقي.',
    descEn:
      'Ptolemy’s groundbreaking kinematic invention: a point offset from the deferent center from which the epicycle center appears to sweep out equal angles in equal times. While predicting speeds with high accuracy, it broke pure Aristotlean concentric circular symmetry.',
    scientificInsightAr:
      'شكلت نقطة الإيكوانت دافعاً أساسياً لانتقادات علماء فلك الحضارة الإسلامية (ابن الهيثم في "الشكوك على بطليموس"، ونصير الدين الطوسي، وابن الشاطر) وصولاً إلى كوبرنيكوس.',
    scientificInsightEn:
      'The equant’s geometric contrivance provoked deep scholastic critique from Islamic astronomers (Ibn al-Haytham’s Doubts Concerning Ptolemy, al-Tusi, Ibn al-Shatir), inspiring the Copernican revolution.',
  },
  {
    id: 'alexandrian_astronomical_tables',
    xPct: 62.0,
    yPct: 82.0,
    titleAr: 'جداول الإسكندرية الفلكية وكتالوج النجوم الـ 1022',
    titleEn: 'Alexandrian Astrometric Tables & 1,022-Star Catalog',
    categoryAr: 'الأرصاد الفلكية السكندرية',
    categoryEn: 'Observational Astrometry',
    descAr:
      'الجداول الرياضية الدقيقة في كتاب المجسطي التي وثقت 48 كوكبة نجمية و1022 نجماً مع مقادير لمعانها وإحداثياتها الكسوفية، والتي شكلت مرجع الفلك العالمي لمدة تزيد عن 1400 عام.',
    descEn:
      'The mathematical ephemerides and comprehensive catalog in the Almagest recording 48 classical constellations and 1,022 fixed stars with ecliptic longitudes, latitudes, and brightness magnitudes, serving as civilization’s premier astronomical atlas for 1,400 years.',
    scientificInsightAr:
      'ترجم الكتاب في عصر الخليفة العباسي المأمون باسم "المجسطي" (من اليونانية Megiste بمعنى الأعظم) مع تدقيق أرصاد حركة المبادرة المحورية (Precession).',
    scientificInsightEn:
      'Translated into Arabic under Caliph al-Ma’mun as "Al-Kitab al-Majisti" (from Greek Megiste "The Greatest"), refining axial precession constants.',
  },
  {
    id: 'ancient_armillary_astrolabe',
    xPct: 15.0,
    yPct: 52.0,
    titleAr: 'الأسطرلاب الحلقي وذات الحلق السكندرية',
    titleEn: 'Hellenistic Armillary Sphere & Astrolabic Reticle',
    categoryAr: 'الأجهزة الرصدية الكلاسيكية',
    categoryEn: 'Observational Instrumentation',
    descAr:
      'الأجهزة البرونزية المعقدة الموضحة بجوار المخطوط: ذات الحلق (Armillary Sphere) لقياس خطوط الطول والعرض السماوية في مرصد الإسكندرية، والأسطرلاب المسطح بحلقاته المدرجة لحساب شروق وغروب الأجرام وحركة فلك البروج.',
    descEn:
      'The monumental bronze armillary sphere and astrolabe shown beside the manuscript, utilized at the Alexandria Observatory to measure celestial latitude and longitude and calibrate ecliptic ring orientations.',
    scientificInsightAr:
      'اعتمد بطليموس على ذات الحلق لتحديد الميل الكلي لمسار الشمس ومقارنته بأرصاد هيبارخوس السابقة قبل ثلاثة قرون.',
    scientificInsightEn:
      'Ptolemy employed armillary rings to precisely measure the obliquity of the ecliptic (~23°51′) and verify axial precession against Hipparchus’s historic benchmarks.',
  },
];

interface PlanetPreset {
  nameAr: string;
  nameEn: string;
  deferentR: number;
  epicycleR: number;
  speedRatio: number;
  color: string;
}

const PLANET_PRESETS: Record<string, PlanetPreset> = {
  mars: {
    nameAr: 'المريخ (Retrograde Loop واسع)',
    nameEn: 'Mars (Broad Retrograde Loop)',
    deferentR: 150,
    epicycleR: 65,
    speedRatio: 2.14,
    color: '#EF4444',
  },
  jupiter: {
    nameAr: 'المشتري (Loops متقاربة)',
    nameEn: 'Jupiter (Frequent Tight Loops)',
    deferentR: 170,
    epicycleR: 35,
    speedRatio: 11.86,
    color: '#F59E0B',
  },
  saturn: {
    nameAr: 'زحل (أبطأ حركة تدويرية)',
    nameEn: 'Saturn (Slowest Outer Cycle)',
    deferentR: 185,
    epicycleR: 22,
    speedRatio: 29.45,
    color: '#EAB308',
  },
  venus: {
    nameAr: 'الزهرة (كوكب داخلي مقيد بالشمس)',
    nameEn: 'Venus (Sun-Bound Inner Epicycle)',
    deferentR: 120,
    epicycleR: 85,
    speedRatio: 1.62,
    color: '#06B6D4',
  },
};

export const PtolemyAlmagestStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<PtolemyHotspot>(PTOLEMY_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Epicycle Simulator State
  const [selectedPlanetKey, setSelectedPlanetKey] = useState<string>('mars');
  const [deferentR, setDeferentR] = useState<number>(150);
  const [epicycleR, setEpicycleR] = useState<number>(65);
  const [timeStep, setTimeStep] = useState<number>(45); // degrees
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(2.14);

  const applyPlanetPreset = (key: string) => {
    setSelectedPlanetKey(key);
    const p = PLANET_PRESETS[key];
    if (p) {
      setDeferentR(p.deferentR);
      setEpicycleR(p.epicycleR);
      setSpeedMultiplier(p.speedRatio);
    }
  };

  // Calculations
  const tRad = (timeStep * Math.PI) / 180;
  const epicycleAngleRad = tRad * speedMultiplier;

  // Center of epicycle
  const cX = deferentR * Math.cos(tRad);
  const cY = deferentR * Math.sin(tRad);

  // Position of planet
  const planetX = cX + epicycleR * Math.cos(epicycleAngleRad);
  const planetY = cY + epicycleR * Math.sin(epicycleAngleRad);

  const distFromEarth = Math.sqrt(planetX * planetX + planetY * planetY);

  // Velocity vectors to check retrograde
  // dX/dt = -R*sin(t) - r*omega*sin(omega*t)
  // dY/dt = R*cos(t) + r*omega*cos(omega*t)
  // Angular velocity dtheta/dt = (X*dY - Y*dX) / (X^2 + Y^2)
  const vX = -deferentR * Math.sin(tRad) - epicycleR * speedMultiplier * Math.sin(epicycleAngleRad);
  const vY = deferentR * Math.cos(tRad) + epicycleR * speedMultiplier * Math.cos(epicycleAngleRad);
  const angularSpeed = (planetX * vY - planetY * vX) / (distFromEarth * distFromEarth || 1);
  const isRetrograde = angularSpeed < 0;

  // Generate trajectory path points for one full cycle (0 to 360 deg)
  const trajectoryPoints: string[] = [];
  for (let deg = 0; deg <= 360; deg += 3) {
    const r = (deg * Math.PI) / 180;
    const epiR = r * speedMultiplier;
    const px = deferentR * Math.cos(r) + epicycleR * Math.cos(epiR);
    const py = deferentR * Math.sin(r) + epicycleR * Math.sin(epiR);
    trajectoryPoints.push(`${200 + px},${200 - py}`);
  }
  const trajectoryD = trajectoryPoints.length > 0 ? `M ${trajectoryPoints.join(' L ')}` : '';

  const modalData: HiResImageModalData = {
    imageUrl: ptolemyPhoto,
    titleAr: 'مخطوط كتاب المجسطي لبطليموس (١٥٠ ميلادية) - مكتبة الإسكندرية',
    titleEn: 'Claudius Ptolemy Almagest Codex (c. 150 AD) - Alexandria Library',
    subtitleAr: 'النموذج الكوني لمركزية الأرض، وأفلاك التدوير، ونقطة الإيكوانت، وكتالوج النجوم السكندري',
    subtitleEn: 'Geocentric Cosmology, Deferent & Epicycles, Equant Point, and Alexandrian Star Catalog',
    descriptionAr:
      'لوحة أرشيفية نادرة من كتاب "المجسطي" (السsyntax الرياضية) لكلوديوس بطليموس؛ تُظهر المخطط الهندسي لمركزية الأرض، مع أفلاك التدوير والأفلاك الحاملة ونقطة الإيكوانت، مع شروح يونانية وجداول فلكية وذات الحلق والأسطرلاب السكندري.',
    descriptionEn:
      'Rare archival museum plate from Claudius Ptolemy’s Almagest (Mathematical Syntaxis); illustrating the geocentric cosmological architecture with deferent circles, epicyclic retrograde loops, the equant point, Greek constellation tables, and Alexandrian armillary sphere.',
    dateOrEraAr: '١٥٠ ميلادية (العصر الهيلينستي، الإسكندرية، مصر الرومانية)',
    dateOrEraEn: 'c. 150 AD (Alexandria, Roman Egypt)',
    locationAr: 'مكتبة الإسكندرية القديمة / الخزانة البابوية بالفاتيكان',
    locationEn: 'Ancient Library of Alexandria / Vatican Apostolic Library',
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
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-yellow-700 text-white shadow-lg shadow-amber-900/40">
            <Orbit className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-500">
                {isArabic ? 'الإسكندرية • ١٥٠ ميلادية' : 'Alexandria • c. 150 AD'}
              </span>
              <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-600">
                {isArabic ? 'كتاب المجسطي' : 'The Almagest'}
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">
              {isArabic
                ? 'استوديو بطليموس: مجسطي الإسكندرية وأفلاك التدوير الهندسية'
                : 'Ptolemy Almagest Studio: Geocentric Epicycles & Retrograde Kinematics'}
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

      {/* Main Grid: Interactive Canvas + Hotspots */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: 4K Image Canvas with Hotspot Overlays */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-xl border border-amber-800/30 bg-black/60 shadow-inner">
            <img
              src={ptolemyPhoto}
              alt="Ptolemy Almagest 150 AD Folio"
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Hotspot Pins */}
            {PTOLEMY_HOTSPOTS.map((hotspot) => {
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
                {isArabic ? 'عنصر بطلمي تحليلي' : 'Ptolemaic Analysis'}
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
                {isArabic ? 'الرؤية المعرفية والفيزيائية:' : 'Epistemological & Physical Insight:'}
              </div>
              <p className="mt-1 text-xs leading-normal opacity-95">
                {isArabic ? activeHotspot.scientificInsightAr : activeHotspot.scientificInsightEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Epicycle & Retrograde Motion Simulator */}
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
                <span>{isArabic ? 'محاكي فلك التدوير والحركة الرجعية' : 'Epicycle & Retrograde Kinematics Engine'}</span>
              </div>
              <button
                onClick={() => applyPlanetPreset('mars')}
                className="flex items-center gap-1 text-xs text-amber-400 hover:underline"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                {isArabic ? 'إعادة ضبط' : 'Reset'}
              </button>
            </div>

            {/* Presets */}
            <div className="mt-3">
              <label className="text-xs font-medium text-amber-400">
                {isArabic ? 'نماذج الكواكب البطلمية:' : 'Ptolemaic Planetary Models:'}
              </label>
              <div className="mt-1.5 grid grid-cols-2 gap-2">
                {Object.entries(PLANET_PRESETS).map(([key, p]) => (
                  <button
                    key={key}
                    onClick={() => applyPlanetPreset(key)}
                    className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-medium transition-all ${
                      selectedPlanetKey === key
                        ? 'border-amber-500 bg-amber-500/20 text-amber-400 font-bold'
                        : 'border-stone-700 hover:border-amber-500/50 text-stone-300'
                    }`}
                  >
                    {isArabic ? p.nameAr : p.nameEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter Sliders */}
            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-xs">
                  <span>{isArabic ? 'نصف قطر فلك الحامل (R):' : 'Deferent Radius (R):'}</span>
                  <span className="font-mono text-amber-400">{deferentR} px</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="180"
                  step="5"
                  value={deferentR}
                  onChange={(e) => setDeferentR(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs">
                  <span>{isArabic ? 'نصف قطر فلك التدوير (r):' : 'Epicycle Radius (r):'}</span>
                  <span className="font-mono text-amber-400">{epicycleR} px</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="90"
                  step="5"
                  value={epicycleR}
                  onChange={(e) => setEpicycleR(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs">
                  <span>{isArabic ? 'موقع الفلك الحامل (زاوية t):' : 'Deferent Position Angle (t):'}</span>
                  <span className="font-mono text-amber-400">{timeStep}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="2"
                  value={timeStep}
                  onChange={(e) => setTimeStep(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>

            {/* Interactive SVG Diagram */}
            <div className="mt-4 flex flex-col items-center justify-center rounded-xl bg-stone-950 p-2 border border-stone-800">
              <svg width="340" height="260" viewBox="0 0 400 400" className="max-w-full">
                {/* Background Grid */}
                <circle cx="200" cy="200" r={deferentR} fill="none" stroke="#52525b" strokeDasharray="4 4" strokeWidth="1.5" />

                {/* Trajectory Loop Path */}
                <path d={trajectoryD} fill="none" stroke="#d97706" strokeWidth="1.5" opacity="0.6" />

                {/* Central Earth */}
                <circle cx="200" cy="200" r="14" fill="#0284c7" />
                <text x="200" y="204" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                  {isArabic ? 'الأرض' : 'Earth'}
                </text>

                {/* Line from Earth to Epicycle Center */}
                <line x1="200" y1="200" x2={200 + cX} y2={200 - cY} stroke="#71717a" strokeWidth="1" />

                {/* Epicycle Center Circle */}
                <circle cx={200 + cX} cy={200 - cY} r={epicycleR} fill="none" stroke="#f59e0b" strokeWidth="1.5" />
                <circle cx={200 + cX} cy={200 - cY} r="3" fill="#f59e0b" />

                {/* Radius vector inside epicycle */}
                <line x1={200 + cX} y1={200 - cY} x2={200 + planetX} y2={200 - planetY} stroke="#f97316" strokeWidth="1.5" />

                {/* Planet Body */}
                <circle cx={200 + planetX} cy={200 - planetY} r="7" fill={isRetrograde ? '#ef4444' : '#10b981'} />
                <text
                  x={200 + planetX}
                  y={200 - planetY - 10}
                  textAnchor="middle"
                  fill={isRetrograde ? '#ef4444' : '#10b981'}
                  fontSize="11"
                  fontWeight="bold"
                >
                  {isRetrograde ? (isArabic ? 'تراجع! (Retrograde)' : 'Retrograde!') : (isArabic ? 'تقدم' : 'Direct')}
                </text>
              </svg>
            </div>

            {/* Telemetry Dashboard */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'المسافة عن الأرض:' : 'Distance from Earth:'}</span>
                <div className="font-mono text-base font-bold text-amber-400">{distFromEarth.toFixed(1)} px</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'الحالة الحركية:' : 'Kinematic State:'}</span>
                <div className={`font-mono text-base font-bold ${isRetrograde ? 'text-red-400' : 'text-emerald-400'}`}>
                  {isRetrograde ? (isArabic ? 'حركة تقهقرية (رجعية)' : 'Retrograde Motion') : (isArabic ? 'حركة مستقيمة مباشرة' : 'Direct Forward Motion')}
                </div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'السرعة الزاوية الظاهرية:' : 'Apparent Angular Velocity:'}</span>
                <div className="font-mono text-sm text-stone-200">{angularSpeed.toFixed(4)} rad/step</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'نسبة الدوران (r/R):' : 'Epicycle Ratio (r/R):'}</span>
                <div className="font-mono text-sm text-stone-200">{(epicycleR / deferentR).toFixed(3)}</div>
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
export default PtolemyAlmagestStudio;
