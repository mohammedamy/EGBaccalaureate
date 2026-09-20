import React, { useState, useMemo } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Orbit,
  Globe,
  Sun,
  Rocket,
  Satellite,
  Compass,
  Sparkles,
  Sliders,
  Layers,
  TrendingUp,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialMode?: 'orbital_sim' | 'planet_explorer' | 'hr_diagram' | 'hohmann_transfer' | 'remote_sensing';
}

export type SpaceStudioMode =
  | 'orbital_sim'
  | 'planet_explorer'
  | 'hr_diagram'
  | 'hohmann_transfer'
  | 'remote_sensing';

interface PlanetData {
  id: string;
  nameEn: string;
  nameAr: string;
  distAU: number;
  radiusKm: number;
  massEarth: number;
  orbitalPeriodDays: number;
  atmosphereEn: string;
  atmosphereAr: string;
  tempC: number;
  typeEn: 'Terrestrial' | 'Gas Giant' | 'Ice Giant';
  typeAr: 'صخري أرضي' | 'عملاق غازي' | 'عملاق جليدي';
  color: string;
}

const PLANETS: PlanetData[] = [
  { id: 'mercury', nameEn: 'Mercury', nameAr: 'عطارد', distAU: 0.387, radiusKm: 2439.7, massEarth: 0.055, orbitalPeriodDays: 87.97, atmosphereEn: 'Trace exosphere (Na, He)', atmosphereAr: 'غلاف خارجي ضئيل (صوديوم وهيديوم)', tempC: 167, typeEn: 'Terrestrial', typeAr: 'صخري أرضي', color: '#94A3B8' },
  { id: 'venus', nameEn: 'Venus', nameAr: 'الزهرة', distAU: 0.723, radiusKm: 6051.8, massEarth: 0.815, orbitalPeriodDays: 224.7, atmosphereEn: '96.5% CO2, 92 atm runaway greenhouse', atmosphereAr: '96.5% CO2، ضغط 92 ضغط جوي، احتباس جامح', tempC: 464, typeEn: 'Terrestrial', typeAr: 'صخري أرضي', color: '#F59E0B' },
  { id: 'earth', nameEn: 'Earth', nameAr: 'الأرض', distAU: 1.000, radiusKm: 6371.0, massEarth: 1.000, orbitalPeriodDays: 365.26, atmosphereEn: '78% N2, 21% O2, 1 atm, liquid water oceans', atmosphereAr: '78% نيتروجين، 21% أكسجين، 1 ضغط جوي، ماء سائل', tempC: 15, typeEn: 'Terrestrial', typeAr: 'صخري أرضي', color: '#3B82F6' },
  { id: 'mars', nameEn: 'Mars', nameAr: 'المريخ', distAU: 1.524, radiusKm: 3389.5, massEarth: 0.107, orbitalPeriodDays: 686.98, atmosphereEn: '95% CO2, 6 mbar, desiccated riverbeds', atmosphereAr: '95% CO2، ضغط 6 مليبار، قنوات مائية قديمة', tempC: -65, typeEn: 'Terrestrial', typeAr: 'صخري أرضي', color: '#EF4444' },
  { id: 'jupiter', nameEn: 'Jupiter', nameAr: 'المشتري', distAU: 5.204, radiusKm: 69911, massEarth: 317.8, orbitalPeriodDays: 4332.6, atmosphereEn: '89% H2, 10% He, metallic hydrogen interior', atmosphereAr: '89% H2، 10% He، وشاح هيدروجين فلزي', tempC: -110, typeEn: 'Gas Giant', typeAr: 'عملاق غازي', color: '#F97316' },
  { id: 'saturn', nameEn: 'Saturn', nameAr: 'زحل', distAU: 9.582, radiusKm: 58232, massEarth: 95.2, orbitalPeriodDays: 10759, atmosphereEn: '96% H2, 3% He, extensive icy ring system', atmosphereAr: '96% H2، 3% He، حلقات جليدية واسعة', tempC: -140, typeEn: 'Gas Giant', typeAr: 'عملاق غازي', color: '#EAB308' },
  { id: 'uranus', nameEn: 'Uranus', nameAr: 'أورانوس', distAU: 19.22, radiusKm: 25362, massEarth: 14.5, orbitalPeriodDays: 30685, atmosphereEn: 'H2, He, methane ice, 97.8° extreme axial tilt', atmosphereAr: 'H2، He، جليد ميثان، ميل محوري 97.8°', tempC: -195, typeEn: 'Ice Giant', typeAr: 'عملاق جليدي', color: '#06B6D4' },
  { id: 'neptune', nameEn: 'Neptune', nameAr: 'نبتون', distAU: 30.05, radiusKm: 24622, massEarth: 17.1, orbitalPeriodDays: 60190, atmosphereEn: 'Water, ammonia, methane ices, supersonic winds', atmosphereAr: 'جليد ماء وأمونيا وميثان، رياح تفوق سرعة الصوت', tempC: -200, typeEn: 'Ice Giant', typeAr: 'عملاق جليدي', color: '#6366F1' },
];

export const SpacePlanetaryStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialMode = 'orbital_sim',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeMode, setActiveMode] = useState<SpaceStudioMode>(initialMode);

  // =========================================================================
  // Engine 1: Keplerian Orbit & Planetary Mechanics Simulator
  // =========================================================================
  const [semiMajorAxisAU, setSemiMajorAxisAU] = useState<number>(1.5);
  const [eccentricity, setEccentricity] = useState<number>(0.35);

  const keplerCalc = useMemo(() => {
    const a = Math.max(0.2, semiMajorAxisAU);
    const e = Math.min(0.9, Math.max(0, eccentricity));
    const b = a * Math.sqrt(1 - e * e);
    const perihelion = a * (1 - e);
    const aphelion = a * (1 + e);
    const periodYears = Math.pow(a, 1.5);
    // Earth orbital speed ~ 29.78 km/s at 1 AU
    const meanSpeed = 29.78 / Math.sqrt(a);
    const periSpeed = meanSpeed * Math.sqrt((1 + e) / (1 - e));
    const aphSpeed = meanSpeed * Math.sqrt((1 - e) / (1 + e));

    return {
      a,
      e,
      b: Number(b.toFixed(3)),
      perihelion: Number(perihelion.toFixed(3)),
      aphelion: Number(aphelion.toFixed(3)),
      periodYears: Number(periodYears.toFixed(2)),
      periSpeed: Number(periSpeed.toFixed(1)),
      aphSpeed: Number(aphSpeed.toFixed(1)),
      c: Number((a * e).toFixed(3)),
    };
  }, [semiMajorAxisAU, eccentricity]);

  // =========================================================================
  // Engine 2: Solar System & Comparative Planetology Explorer
  // =========================================================================
  const [selectedPlanetId, setSelectedPlanetId] = useState<string>('mars');

  const activePlanet = useMemo(() => {
    return PLANETS.find((p) => p.id === selectedPlanetId) || PLANETS[3];
  }, [selectedPlanetId]);

  const planetPhysics = useMemo(() => {
    const G = 6.6743e-11;
    const M_earth = 5.972e24;

    const M = activePlanet.massEarth * M_earth;
    const R = activePlanet.radiusKm * 1000;

    const g = (G * M) / (R * R);
    const v_esc = Math.sqrt((2 * G * M) / R) / 1000; // km/s
    const g_rel = g / 9.80665;

    return {
      g: Number(g.toFixed(2)),
      v_esc: Number(v_esc.toFixed(2)),
      g_rel: Number(g_rel.toFixed(2)),
    };
  }, [activePlanet]);

  // =========================================================================
  // Engine 3: Hertzsprung-Russell (H-R) Stellar Evolution Explorer
  // =========================================================================
  const [stellarMass, setStellarMass] = useState<number>(1.0); // in solar masses

  const stellarMetrics = useMemo(() => {
    const M = Math.max(0.1, Math.min(50, stellarMass));
    const L = Math.pow(M, 3.5);
    const lifetimeYears = 1e10 * Math.pow(1 / M, 2.5);

    let spectralClass = 'G';
    let tempK = 5780;
    let endpointEn = 'White Dwarf';
    let endpointAr = 'قزم أبيض كربوني-أكسجيني';

    if (M >= 20) {
      spectralClass = 'O';
      tempK = 35000;
      endpointEn = 'Black Hole (Core Collapse)';
      endpointAr = 'ثقب أسود ناتج عن انهيار قلبي';
    } else if (M >= 10) {
      spectralClass = 'B';
      tempK = 20000;
      endpointEn = 'Neutron Star / Pulsar (Supernova Type II)';
      endpointAr = 'نجم نيوتروني / نابض فلكي';
    } else if (M >= 2.5) {
      spectralClass = 'A';
      tempK = 9500;
      endpointEn = 'White Dwarf (Massive O-Ne-Mg)';
      endpointAr = 'قزم أبيض عالي الكتلة';
    } else if (M >= 1.4) {
      spectralClass = 'F';
      tempK = 7200;
      endpointEn = 'Carbon-Oxygen White Dwarf';
      endpointAr = 'قزم أبيض من الكربون والأكسجين';
    } else if (M >= 0.8) {
      spectralClass = 'G';
      tempK = 5780;
      endpointEn = 'Helium/Carbon-Oxygen White Dwarf';
      endpointAr = 'قزم أبيض وسديم كوكبي';
    } else if (M >= 0.45) {
      spectralClass = 'K';
      tempK = 4400;
      endpointEn = 'Helium White Dwarf';
      endpointAr = 'قزم أبيض من الهيليوم';
    } else {
      spectralClass = 'M';
      tempK = 3100;
      endpointEn = 'Long-lived Red Dwarf';
      endpointAr = 'قزم أحمر فائق العمر';
    }

    return {
      M,
      L: Number(L.toFixed(2)),
      logL: Number(Math.log10(L).toFixed(2)),
      lifetimeYears,
      spectralClass,
      tempK,
      endpointEn,
      endpointAr,
    };
  }, [stellarMass]);

  // =========================================================================
  // Engine 4: Hohmann Orbit Transfer & Rocket Dynamics
  // =========================================================================
  const [missionTarget, setMissionTarget] = useState<'leo_to_geo' | 'earth_to_mars' | 'earth_to_venus'>('earth_to_mars');
  const [ispSeconds, setIspSeconds] = useState<number>(380); // Cryogenic hydrolox

  const hohmannCalc = useMemo(() => {
    let r1 = 1.0; // AU or Earth radii
    let r2 = 1.524;
    let mu = 1.327e11; // GM_sun in km^3/s^2 or normalized
    let isInterplanetary = true;
    let labelEn = 'Earth to Mars Transfer';
    let labelAr = 'مسار الانتقال من الأرض إلى المريخ';

    if (missionTarget === 'leo_to_geo') {
      isInterplanetary = false;
      r1 = 6678; // LEO 300 km
      r2 = 42164; // GEO
      mu = 3.986e5; // GM_earth in km^3/s^2
      labelEn = 'LEO (300 km) to GEO Transfer';
      labelAr = 'الانتقال من المدار المنخفض LEO إلى المدار الثابت GEO';
    } else if (missionTarget === 'earth_to_venus') {
      r1 = 1.0;
      r2 = 0.723;
      labelEn = 'Earth to Venus Transfer';
      labelAr = 'مسار الانتقال من الأرض إلى الزهرة';
    }

    const a_trans = (r1 + r2) / 2;
    let deltaV1 = 0;
    let deltaV2 = 0;
    let transferDays = 0;

    if (isInterplanetary) {
      // Speeds in km/s (Earth orbital speed ~29.78 km/s)
      const v1 = 29.78 / Math.sqrt(r1);
      const v2 = 29.78 / Math.sqrt(r2);
      const vt1 = 29.78 * Math.sqrt((2 * r2) / (r1 + r2));
      const vt2 = 29.78 * Math.sqrt((2 * r1) / (r1 + r2));
      deltaV1 = Math.abs(vt1 - v1);
      deltaV2 = Math.abs(v2 - vt2);
      // Transfer time T/2 = 0.5 * a^(1.5) in years -> days
      transferDays = 0.5 * Math.pow(a_trans, 1.5) * 365.25;
    } else {
      const v1 = Math.sqrt(mu / r1);
      const v2 = Math.sqrt(mu / r2);
      const vt1 = Math.sqrt(mu * (2 / r1 - 1 / a_trans));
      const vt2 = Math.sqrt(mu * (2 / r2 - 1 / a_trans));
      deltaV1 = Math.abs(vt1 - v1);
      deltaV2 = Math.abs(v2 - vt2);
      // Half orbital period in seconds -> hours
      const tSec = Math.PI * Math.sqrt(Math.pow(a_trans, 3) / mu);
      transferDays = tSec / 86400;
    }

    const totalDeltaV = deltaV1 + deltaV2;
    // Mass ratio m0/mf = exp(deltaV / (Isp * g0))
    const g0 = 9.80665e-3; // km/s^2
    const massRatio = Math.exp(totalDeltaV / (ispSeconds * g0));

    return {
      labelEn,
      labelAr,
      r1,
      r2,
      a_trans: Number(a_trans.toFixed(3)),
      deltaV1: Number(deltaV1.toFixed(2)),
      deltaV2: Number(deltaV2.toFixed(2)),
      totalDeltaV: Number(totalDeltaV.toFixed(2)),
      transferDays: Number(transferDays.toFixed(1)),
      massRatio: Number(massRatio.toFixed(2)),
      isInterplanetary,
    };
  }, [missionTarget, ispSeconds]);

  // =========================================================================
  // Engine 5: Satellite Remote Sensing & NDVI Spectrogram
  // =========================================================================
  const [surfaceType, setSurfaceType] = useState<'forest' | 'desert' | 'water' | 'urban'>('forest');

  const spectralData = useMemo(() => {
    switch (surfaceType) {
      case 'forest':
        return { redReflect: 0.08, nirReflect: 0.72, nameEn: 'Dense Chlorophyll Forest', nameAr: 'غابات كثيفة ذات نشاط بيولوجي عالي', statusEn: 'Thriving Vegetation', statusAr: 'غطاء نباتي صحي ومزدهر' };
      case 'desert':
        return { redReflect: 0.42, nirReflect: 0.48, nameEn: 'Arid Sand & Desert Soil', nameAr: 'تربة رملية صحراوية قاحلة', statusEn: 'Bare Soil / Arid', statusAr: 'تربة مكشوفة بدون غطاء' };
      case 'water':
        return { redReflect: 0.04, nirReflect: 0.01, nameEn: 'Deep Ocean / Freshwater Lake', nameAr: 'مسطح مائي عميق ومحيطات', statusEn: 'Open Water Body', statusAr: 'مسطح مائي مفتوح' };
      case 'urban':
        return { redReflect: 0.28, nirReflect: 0.32, nameEn: 'Urban Concrete & Built Environment', nameAr: 'منطقة حضرية ومبانٍ خرسانية', statusEn: 'Urban Infrastructure', statusAr: 'بنية عمرانية وبشرية' };
    }
  }, [surfaceType]);

  const ndviValue = useMemo(() => {
    const { nirReflect, redReflect } = spectralData;
    const val = (nirReflect - redReflect) / (nirReflect + redReflect);
    return Number(val.toFixed(3));
  }, [spectralData]);

  return (
    <div
      className={`w-full border ${
        isFullscreen
          ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0'
          : 'rounded-2xl shadow-2xl overflow-hidden'
      } ${
        isLight
          ? 'bg-white border-slate-200 text-slate-900'
          : isContrast
          ? 'bg-black border-yellow-400 text-white'
          : 'bg-slate-900/95 border-indigo-800/40 text-slate-100'
      }`}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Header Bar */}
      <div className="p-4 border-b border-indigo-700/30 bg-gradient-to-r from-blue-950/80 via-indigo-950/70 to-slate-900/90 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
            <Orbit className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-bold flex items-center gap-2">
              <span>{isArabic ? 'استوديو علوم الأرض والفلك وعلوم الفضاء' : 'Earth & Planetary Space Sciences Virtual Studio'}</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                v3.0 Space-Lab
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'محاكاة ديناميكا المدارات الكبلرية، المقارنة الكوكبية، تطور النجوم، مدارات هوهمان والاستشعار الفضائي'
                : 'Interactive Keplerian Mechanics, Solar System Planetology, H-R Evolution, Hohmann Astrodynamics & NDVI Remote Sensing'}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveMode('orbital_sim')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
              activeMode === 'orbital_sim'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>{isArabic ? 'مدارات كبلر' : 'Keplerian Orbits'}</span>
          </button>

          <button
            onClick={() => setActiveMode('planet_explorer')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
              activeMode === 'planet_explorer'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isArabic ? 'المقارنة الكوكبية' : 'Solar Planetology'}</span>
          </button>

          <button
            onClick={() => setActiveMode('hr_diagram')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
              activeMode === 'hr_diagram'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>{isArabic ? 'مخطط H-R للنجوم' : 'H-R Diagram'}</span>
          </button>

          <button
            onClick={() => setActiveMode('hohmann_transfer')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
              activeMode === 'hohmann_transfer'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>{isArabic ? 'مدار هوهمان الصاروخي' : 'Hohmann Transfer'}</span>
          </button>

          <button
            onClick={() => setActiveMode('remote_sensing')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
              activeMode === 'remote_sensing'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Satellite className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الاستشعار عن بعد NDVI' : 'Remote Sensing'}</span>
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors border border-slate-700/50"
            title={isFullscreen ? (isArabic ? 'خروج من ملء الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-cyan-400" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className="p-6 space-y-6">
        {/* ================================================================= */}
        {/* Engine 1: Keplerian Orbit & Planetary Mechanics Simulator */}
        {/* ================================================================= */}
        {activeMode === 'orbital_sim' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Controls Column */}
              <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-indigo-400">
                  <Sliders className="w-4 h-4" />
                  <span>{isArabic ? 'معاملات المدار الكبلري' : 'Keplerian Orbital Parameters'}</span>
                </h3>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>{isArabic ? 'نصف المحور الأكبر (a):' : 'Semi-major Axis (a):'}</span>
                    <span className="font-mono text-cyan-400 font-bold">{keplerCalc.a} AU</span>
                  </div>
                  <input
                    type="range"
                    min={0.3}
                    max={5.2}
                    step={0.1}
                    value={semiMajorAxisAU}
                    onChange={(e) => setSemiMajorAxisAU(Number(e.target.value))}
                    className="w-full accent-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>{isArabic ? 'معامل الاختلاف المركزي (e):' : 'Eccentricity (e):'}</span>
                    <span className="font-mono text-amber-400 font-bold">{keplerCalc.e}</span>
                  </div>
                  <input
                    type="range"
                    min={0.0}
                    max={0.8}
                    step={0.02}
                    value={eccentricity}
                    onChange={(e) => setEccentricity(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="pt-2 border-t border-slate-700/60 space-y-2 text-xs font-mono">
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'نصف المحور الأصغر (b):' : 'Semi-minor Axis (b):'}</span>
                    <span className="text-indigo-300 font-bold">{keplerCalc.b} AU</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'مسافة الحضيض (Perihelion):' : 'Perihelion Distance:'}</span>
                    <span className="text-emerald-400 font-bold">{keplerCalc.perihelion} AU</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'مسافة الأوج (Aphelion):' : 'Aphelion Distance:'}</span>
                    <span className="text-rose-400 font-bold">{keplerCalc.aphelion} AU</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'زمن الدورة الفلكية (T):' : 'Orbital Period (T):'}</span>
                    <span className="text-cyan-400 font-bold">{keplerCalc.periodYears} Years</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'السرعة عند الحضيض:' : 'Perihelion Speed:'}</span>
                    <span className="text-emerald-400 font-bold">{keplerCalc.periSpeed} km/s</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'السرعة عند الأوج:' : 'Aphelion Speed:'}</span>
                    <span className="text-rose-400 font-bold">{keplerCalc.aphSpeed} km/s</span>
                  </div>
                </div>
              </div>

              {/* Graphical Orbit Canvas */}
              <div className="lg:col-span-2 p-5 rounded-xl border border-slate-700/60 bg-slate-950/80 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold flex items-center justify-between text-slate-200 mb-4">
                    <span className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-cyan-400" />
                      <span>{isArabic ? 'المخطط الإهليلجي التفاعلي لمسار الجرم والسرعات' : 'Keplerian Elliptical Orbit & Velocity Vectors'}</span>
                    </span>
                    <span className="text-xs font-mono text-emerald-400">Kepler II: dA/dt = const</span>
                  </h3>

                  {/* High-Resolution Realistic Keplerian Orbital Viewport */}
                  <div className="h-72 rounded-xl bg-slate-950 border border-slate-800 p-4 flex items-center justify-center relative overflow-hidden shadow-2xl">
                    <svg viewBox="-260 -140 520 280" className="w-full h-full">
                      <defs>
                        {/* Deep Space Background Glow */}
                        <radialGradient id="spaceBackdrop" cx="50%" cy="50%" r="70%">
                          <stop offset="0%" stopColor="#0f172a" />
                          <stop offset="60%" stopColor="#020617" />
                          <stop offset="100%" stopColor="#000000" />
                        </radialGradient>

                        {/* Solar Core & Corona Radial Gradient */}
                        <radialGradient id="sunCoronaGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="25%" stopColor="#fef08a" />
                          <stop offset="55%" stopColor="#f59e0b" />
                          <stop offset="85%" stopColor="#d97706" />
                          <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
                        </radialGradient>

                        {/* Planet Sphere Shading */}
                        <radialGradient id="planetShading" cx="35%" cy="35%" r="65%">
                          <stop offset="0%" stopColor="#67e8f9" />
                          <stop offset="45%" stopColor="#06b6d4" />
                          <stop offset="80%" stopColor="#0891b2" />
                          <stop offset="100%" stopColor="#164e63" />
                        </radialGradient>

                        {/* Swept Area Gradient */}
                        <linearGradient id="sectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
                        </linearGradient>

                        {/* Glow Filter */}
                        <filter id="solarGlow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="3.5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Backdrop */}
                      <rect x="-260" y="-140" width="520" height="280" fill="url(#spaceBackdrop)" rx="10" />

                      {/* Distant Starfield Background */}
                      {[
                        [-220, -100, 1], [-190, 80, 1.2], [-140, -115, 0.8], [-90, 110, 1],
                        [-30, -90, 1.4], [50, 115, 0.9], [120, -105, 1.1], [180, 85, 1.3],
                        [220, -80, 0.7], [230, 95, 1.2], [-70, -40, 0.9], [140, 40, 0.8]
                      ].map(([sx, sy, sr], i) => (
                        <circle key={i} cx={sx} cy={sy} r={sr} fill="#ffffff" opacity={0.4 + (i % 5) * 0.12} />
                      ))}

                      {/* Coordinate Axes & Grid Lines */}
                      <line x1="-240" y1="0" x2="240" y2="0" stroke="#334155" strokeDasharray="3,3" strokeWidth="0.8" opacity="0.6" />
                      <line x1="0" y1="-125" x2="0" y2="125" stroke="#334155" strokeDasharray="3,3" strokeWidth="0.8" opacity="0.6" />

                      {(() => {
                        const a = 170;
                        const b = a * Math.sqrt(Math.max(0.01, 1 - Math.pow(keplerCalc.e, 2)));
                        const c = a * keplerCalc.e; // Distance from center to focus
                        const sunX = -c;

                        // Perihelion Sector Path (Swept Area A1 over time interval dt)
                        const periAngleRad = (28 * Math.PI) / 180;
                        const p1X = -a * Math.cos(periAngleRad);
                        const p1Y = -b * Math.sin(periAngleRad);

                        // Aphelion Sector Path (Swept Area A2 over same dt, smaller angular sweep)
                        const aphAngleRad = (13 * Math.PI) / 180;
                        const a1X = a * Math.cos(aphAngleRad);
                        const a1Y = b * Math.sin(aphAngleRad);

                        return (
                          <g>
                            {/* Kepler II: Equal Swept Area Sector at Perihelion */}
                            <path
                              d={`M ${sunX} 0 L -${a} 0 A ${a} ${b} 0 0 1 ${p1X} ${p1Y} Z`}
                              fill="url(#sectorGrad)"
                              stroke="#10b981"
                              strokeWidth="1.2"
                              strokeDasharray="2,2"
                            />
                            <text x={(-a + sunX) / 2} y="-12" fill="#34d399" fontSize="9" fontWeight="bold" fontFamily="monospace">
                              Area A₁
                            </text>

                            {/* Kepler II: Equal Swept Area Sector at Aphelion */}
                            <path
                              d={`M ${sunX} 0 L ${a} 0 A ${a} ${b} 0 0 1 ${a1X} ${a1Y} Z`}
                              fill="url(#sectorGrad)"
                              stroke="#10b981"
                              strokeWidth="1.2"
                              strokeDasharray="2,2"
                            />
                            <text x={(a + sunX) / 2 + 10} y="16" fill="#34d399" fontSize="9" fontWeight="bold" fontFamily="monospace">
                              Area A₂
                            </text>

                            {/* Elliptical Orbit Path */}
                            <ellipse
                              cx="0"
                              cy="0"
                              rx={a}
                              ry={b}
                              fill="none"
                              stroke="#6366f1"
                              strokeWidth="2.5"
                              strokeDasharray="6,4"
                            />

                            {/* Semi-Major Axis Dimension Marker */}
                            <line x1="0" y1="0" x2={a} y2="0" stroke="#818cf8" strokeWidth="1.5" opacity="0.7" />
                            <text x={a / 2} y="-6" fill="#a5b4fc" fontSize="9" textAnchor="middle" fontFamily="monospace">
                              a = {keplerCalc.a} AU
                            </text>

                            {/* Empty Secondary Focus at (+c, 0) */}
                            <circle cx={c} cy="0" r="3.5" fill="#64748b" />
                            <text x={c} y="14" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">
                              F₂
                            </text>

                            {/* Primary Focus (Sun with High-Res Corona) at (-c, 0) */}
                            <circle cx={sunX} cy="0" r="28" fill="url(#sunCoronaGrad)" opacity="0.4" />
                            <circle cx={sunX} cy="0" r="16" fill="url(#sunCoronaGrad)" opacity="0.8" />
                            <circle cx={sunX} cy="0" r="10" fill="#fef08a" filter="url(#solarGlow)" />
                            {/* Solar Flare Spikes */}
                            {[-45, 0, 45, 90, 135, 180, 225, 270].map((deg, i) => {
                              const rad = (deg * Math.PI) / 180;
                              return (
                                <line
                                  key={i}
                                  x1={sunX + 11 * Math.cos(rad)}
                                  y1={11 * Math.sin(rad)}
                                  x2={sunX + 17 * Math.cos(rad)}
                                  y2={17 * Math.sin(rad)}
                                  stroke="#f59e0b"
                                  strokeWidth="1.5"
                                  opacity="0.75"
                                />
                              );
                            })}
                            <text x={sunX} y="32" fill="#fef08a" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                              {isArabic ? 'الشمس (البؤرة F₁)' : 'Sun Focus (F₁)'}
                            </text>

                            {/* Perihelion Planet with Realistic 3D Atmosphere & Velocity Vector */}
                            <g transform={`translate(-${a}, 0)`}>
                              {/* Velocity Vector Arrow pointing downward */}
                              <line x1="0" y1="0" x2="0" y2="42" stroke="#10b981" strokeWidth="2.5" />
                              <polygon points="0,46 -4,38 4,38" fill="#10b981" />
                              <text x="-8" y="28" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="end" fontFamily="monospace">
                                v_max
                              </text>
                              {/* Planet Body */}
                              <circle cx="0" cy="0" r="9.5" fill="url(#planetShading)" />
                              <circle cx="0" cy="0" r="11" fill="none" stroke="#67e8f9" strokeWidth="1" opacity="0.6" />
                              <text x="0" y="-16" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                                Perihelion ({keplerCalc.periSpeed} km/s)
                              </text>
                            </g>

                            {/* Aphelion Planet with Velocity Vector */}
                            <g transform={`translate(${a}, 0)`}>
                              {/* Velocity Vector Arrow pointing upward */}
                              <line x1="0" y1="0" x2="0" y2="-24" stroke="#f43f5e" strokeWidth="2" />
                              <polygon points="0,-28 -3.5,-21 3.5,-21" fill="#f43f5e" />
                              <text x="8" y="-14" fill="#fb7185" fontSize="8" fontWeight="bold" textAnchor="start" fontFamily="monospace">
                                v_min
                              </text>
                              {/* Planet Body */}
                              <circle cx="0" cy="0" r="7.5" fill="url(#planetShading)" opacity="0.9" />
                              <text x="0" y="24" fill="#fb7185" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                                Aphelion ({keplerCalc.aphSpeed} km/s)
                              </text>
                            </g>
                          </g>
                        );
                      })()}
                    </svg>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-xs text-slate-300">
                  <span className="text-indigo-300 font-semibold">{isArabic ? 'التحليل الفيزيائي:' : 'Astrophysical Insight:'} </span>
                  {isArabic
                    ? 'يتحقق قانون كبلر الثاني بوضوح؛ إذ تتساوى المساحات الممسوحة A₁ = A₂ في الأزمنة المتساوية dt، وتتسارع سرعة الكوكب لذروتها عند الحضيض للحفاظ على بقاء كمية التحرك الزاوي المدارية (L = m·r·v = ثابت).'
                    : 'Kepler’s Second Law manifests as equal orbital areas (A₁ = A₂) are swept in equal time intervals; the orbiting body accelerates to maximum velocity at perihelion to strictly conserve angular momentum (L = m·r·v = const).'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Engine 2: Solar System & Comparative Planetology Explorer */}
        {/* ================================================================= */}
        {activeMode === 'planet_explorer' && (
          <div className="space-y-6">
            {/* Planet selector tabs */}
            <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl bg-slate-800/40 border border-slate-700/60">
              {PLANETS.map((planet) => (
                <button
                  key={planet.id}
                  onClick={() => setSelectedPlanetId(planet.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                    selectedPlanetId === planet.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900/60 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: planet.color }} />
                  <span>{isArabic ? planet.nameAr : planet.nameEn}</span>
                </button>
              ))}
            </div>

            {/* Planet Details Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400">{isArabic ? 'التصنيف البنيوي:' : 'Planetary Classification:'}</span>
                <div className="text-sm font-bold text-indigo-400">{isArabic ? activePlanet.typeAr : activePlanet.typeEn}</div>
                <p className="text-[11px] text-slate-500 font-mono">r = {activePlanet.radiusKm.toLocaleString()} km</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400">{isArabic ? 'تسارع جاذبية السطح (g):' : 'Surface Gravity (g):'}</span>
                <div className="text-sm font-bold text-emerald-400 font-mono">{planetPhysics.g} m/s²</div>
                <p className="text-[11px] text-slate-500 font-mono">{planetPhysics.g_rel} × Earth Gravity</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400">{isArabic ? 'سرعة الإفلات التثاقلية:' : 'Escape Velocity (v_esc):'}</span>
                <div className="text-sm font-bold text-cyan-400 font-mono">{planetPhysics.v_esc} km/s</div>
                <p className="text-[11px] text-slate-500 font-mono">d = {activePlanet.distAU} AU from Sun</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400">{isArabic ? 'درجة الحرارة والغلاف:' : 'Surface Temp & Atmosphere:'}</span>
                <div className="text-sm font-bold text-amber-400 font-mono">{activePlanet.tempC}°C</div>
                <p className="text-[11px] text-slate-400 truncate">{isArabic ? activePlanet.atmosphereAr : activePlanet.atmosphereEn}</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>{isArabic ? 'الخصائص الجيوفيزيائية والغلافية المقارنة:' : 'Planetary Geophysics & Atmosphere Summary:'}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block mb-1">{isArabic ? 'الكتلة مقارنة بالأرض:' : 'Mass Ratio:'}</span>
                  <span className="text-indigo-300 font-bold">{activePlanet.massEarth} M⊕</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block mb-1">{isArabic ? 'زمن الدورة المدارية:' : 'Orbital Period:'}</span>
                  <span className="text-indigo-300 font-bold">{activePlanet.orbitalPeriodDays.toLocaleString()} Earth Days</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Engine 3: Hertzsprung-Russell (H-R) Stellar Evolution Explorer */}
        {/* ================================================================= */}
        {activeMode === 'hr_diagram' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Slider & Metrics Column */}
              <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-indigo-400">
                  <Sun className="w-4 h-4" />
                  <span>{isArabic ? 'كتلة النجم الأولية والتطور' : 'Stellar Initial Mass & Evolution'}</span>
                </h3>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>{isArabic ? 'كتلة النجم (بالنسبة للشمس M☉):' : 'Stellar Mass (M☉):'}</span>
                    <span className="font-mono text-cyan-400 font-bold">{stellarMetrics.M} M☉</span>
                  </div>
                  <input
                    type="range"
                    min={0.1}
                    max={40}
                    step={0.1}
                    value={stellarMass}
                    onChange={(e) => setStellarMass(Number(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-700/60 text-xs font-mono">
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'الفئة الطيفية (Spectral Type):' : 'Spectral Class:'}</span>
                    <span className="text-amber-400 font-bold text-sm">Class {stellarMetrics.spectralClass}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'درجة الحرارة السطحية:' : 'Surface Temp:'}</span>
                    <span className="text-indigo-300 font-bold">~{stellarMetrics.tempK} K</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'اللمعان النجمي (L/L☉):' : 'Luminosity (L/L☉):'}</span>
                    <span className="text-emerald-400 font-bold">{stellarMetrics.L} L☉</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'العمر المتوقع بالتتابع:' : 'Main-Sequence Lifetime:'}</span>
                    <span className="text-rose-400 font-bold">
                      {stellarMetrics.lifetimeYears > 1e9
                        ? `${(stellarMetrics.lifetimeYears / 1e9).toFixed(1)} Billion Yrs`
                        : `${(stellarMetrics.lifetimeYears / 1e6).toFixed(1)} Million Yrs`}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-xs space-y-1">
                  <span className="text-indigo-300 font-semibold">{isArabic ? 'المصير التطوري النهائي:' : 'Final Remnant Endpoint:'}</span>
                  <div className="text-slate-200 font-bold">{isArabic ? stellarMetrics.endpointAr : stellarMetrics.endpointEn}</div>
                </div>
              </div>

              {/* H-R Diagram Canvas View */}
              <div className="lg:col-span-2 p-5 rounded-xl border border-slate-700/60 bg-slate-950/80 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold flex items-center justify-between text-slate-200 mb-4">
                    <span className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-amber-400" />
                      <span>{isArabic ? 'مخطط هرتزبرونغ-راسل التفاعلي (H-R Diagram)' : 'Interactive Hertzsprung-Russell (H-R) Plane'}</span>
                    </span>
                    <span className="text-xs font-mono text-cyan-400">L ∝ M^3.5</span>
                  </h3>

                  <div className="h-72 rounded-xl bg-slate-950 border border-slate-800 p-3 relative overflow-hidden flex items-center justify-center shadow-2xl">
                    <svg viewBox="0 0 540 290" className="w-full h-full">
                      <defs>
                        {/* Spectral Classification Background Thermal Bar */}
                        <linearGradient id="spectralTempGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="18%" stopColor="#818cf8" />
                          <stop offset="35%" stopColor="#e0e7ff" />
                          <stop offset="52%" stopColor="#fef08a" />
                          <stop offset="68%" stopColor="#facc15" />
                          <stop offset="84%" stopColor="#fb923c" />
                          <stop offset="100%" stopColor="#ef4444" />
                        </linearGradient>

                        {/* Main Sequence Gradient Ribbon */}
                        <linearGradient id="mainSeqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                          <stop offset="40%" stopColor="#e0e7ff" stopOpacity="0.4" />
                          <stop offset="70%" stopColor="#facc15" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
                        </linearGradient>

                        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="40%" stopColor="#fef08a" />
                          <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                        </radialGradient>
                      </defs>

                      {/* Chart Area Boundary */}
                      <rect x="55" y="25" width="425" height="215" fill="#030712" stroke="#1e293b" strokeWidth="1" />

                      {/* Horizontal Luminosity Grid Lines (L / L_sun) */}
                      {[
                        { y: 35, label: '10⁶', mag: '-8' },
                        { y: 70, label: '10⁴', mag: '-3' },
                        { y: 105, label: '10²', mag: '+2' },
                        { y: 140, label: '1', mag: '+5' },
                        { y: 175, label: '10⁻²', mag: '+10' },
                        { y: 210, label: '10⁻⁴', mag: '+15' },
                      ].map((grid, i) => (
                        <g key={i}>
                          <line x1="55" y1={grid.y} x2="480" y2={grid.y} stroke="#1e293b" strokeDasharray="3,3" strokeWidth="0.8" />
                          {/* Left Axis: L / L_sun */}
                          <text x="48" y={grid.y + 3} fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="monospace">
                            {grid.label}
                          </text>
                          {/* Right Axis: Absolute Magnitude M_V */}
                          <text x="487" y={grid.y + 3} fill="#64748b" fontSize="8" textAnchor="start" fontFamily="monospace">
                            {grid.mag}
                          </text>
                        </g>
                      ))}

                      {/* Axis Titles */}
                      <text x="18" y="130" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace" transform="rotate(-90, 18, 130)" textAnchor="middle">
                        Luminosity (L / L☉)
                      </text>
                      <text x="518" y="130" fill="#64748b" fontSize="8" fontFamily="monospace" transform="rotate(90, 518, 130)" textAnchor="middle">
                        Abs. Magnitude (M_V)
                      </text>

                      {/* Supergiants Region (Ia / Ib) */}
                      <path d="M 75 32 Q 260 30 465 48 L 465 72 Q 260 55 75 58 Z" fill="#ef4444" fillOpacity="0.12" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,2" />
                      <text x="270" y="44" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        SUPERGIANTS (العمالقة الفائقة)
                      </text>

                      {/* Red Giants Region (III) */}
                      <path d="M 330 65 Q 410 70 465 85 L 465 130 Q 400 115 330 100 Z" fill="#f97316" fillOpacity="0.14" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" />
                      <text x="400" y="98" fill="#fb923c" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        RED GIANTS (العمالقة الحمر)
                      </text>

                      {/* White Dwarfs Region (VII) */}
                      <path d="M 75 170 Q 150 178 210 190 L 210 230 Q 140 220 75 210 Z" fill="#38bdf8" fillOpacity="0.14" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,2" />
                      <text x="140" y="202" fill="#7dd3fc" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        WHITE DWARFS (الأقزام البيضاء)
                      </text>

                      {/* Main Sequence (V) S-Curve Ribbon */}
                      <path
                        d="M 70 45 C 130 65, 230 115, 290 140 C 350 165, 420 205, 465 225"
                        fill="none"
                        stroke="url(#mainSeqGrad)"
                        strokeWidth="24"
                        strokeLinecap="round"
                      />
                      <text x="210" y="116" fill="#e0e7ff" fontSize="10" fontWeight="bold" fontFamily="monospace" transform="rotate(22, 210, 116)">
                        MAIN SEQUENCE • التتابع الرئيسي (V)
                      </text>

                      {/* Benchmark Canonical Stars */}
                      {/* Betelgeuse (M2I) */}
                      <circle cx="430" cy="52" r="5" fill="#ef4444" />
                      <text x="430" y="44" fill="#fca5a5" fontSize="7.5" textAnchor="middle" fontFamily="monospace">Betelgeuse</text>

                      {/* Rigel (B8I) */}
                      <circle cx="130" cy="40" r="5" fill="#38bdf8" />
                      <text x="130" y="32" fill="#bae6fd" fontSize="7.5" textAnchor="middle" fontFamily="monospace">Rigel</text>

                      {/* Aldebaran (K5III) */}
                      <circle cx="390" cy="90" r="4" fill="#fb923c" />
                      <text x="390" y="82" fill="#fed7aa" fontSize="7.5" textAnchor="middle" fontFamily="monospace">Aldebaran</text>

                      {/* Vega (A0V) */}
                      <circle cx="180" cy="92" r="3.5" fill="#e0e7ff" />
                      <text x="180" y="84" fill="#f1f5f9" fontSize="7.5" textAnchor="middle" fontFamily="monospace">Vega</text>

                      {/* The SUN (G2V, L=1, T=5778K, center of diagram) */}
                      <circle cx="290" cy="140" r="7" fill="url(#sunGlow)" />
                      <circle cx="290" cy="140" r="3.5" fill="#facc15" />
                      <circle cx="290" cy="140" r="5.5" fill="none" stroke="#fef08a" strokeWidth="1" />
                      <text x="290" y="156" fill="#fde047" fontSize="8.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        ☉ Sun (شمسنا 1L)
                      </text>

                      {/* Sirius B (White Dwarf) */}
                      <circle cx="120" cy="195" r="2.5" fill="#7dd3fc" />
                      <text x="120" y="188" fill="#bae6fd" fontSize="7" textAnchor="middle" fontFamily="monospace">Sirius B</text>

                      {/* Proxima Centauri (M5V) */}
                      <circle cx="450" cy="220" r="2.5" fill="#f87171" />
                      <text x="450" y="213" fill="#fca5a5" fontSize="7" textAnchor="middle" fontFamily="monospace">Proxima Cen</text>

                      {/* Active Dynamic Star Position Marker */}
                      {(() => {
                        const clampedLogL = Math.max(-3.5, Math.min(5.5, stellarMetrics.logL));
                        // Horizontal map from TempK (40,000K -> x=70, 3,000K -> x=460)
                        const normT = Math.max(0, Math.min(1, (stellarMetrics.tempK - 2800) / (38000 - 2800)));
                        const posX = 460 - normT * 390;
                        // Vertical map from LogL (-4 -> y=210, 6 -> y=35)
                        const normL = Math.max(0, Math.min(1, (clampedLogL - (-4)) / (6 - (-4))));
                        const posY = 210 - normL * 175;

                        return (
                          <g>
                            {/* Pulsing Target Radar Rings */}
                            <circle cx={posX} cy={posY} r="18" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.4" className="animate-ping" />
                            <circle cx={posX} cy={posY} r="10" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3,2" />
                            <circle cx={posX} cy={posY} r="5" fill="#10b981" />
                            <circle cx={posX} cy={posY} r="2" fill="#ffffff" />
                            {/* Crosshairs */}
                            <line x1={posX - 14} y1={posY} x2={posX + 14} y2={posY} stroke="#34d399" strokeWidth="1" opacity="0.8" />
                            <line x1={posX} y1={posY - 14} x2={posX} y2={posY + 14} stroke="#34d399" strokeWidth="1" opacity="0.8" />
                            {/* Tag */}
                            <rect x={posX - 38} y={posY - 28} width="76" height="15" rx="3" fill="#022c22" stroke="#059669" strokeWidth="1" />
                            <text x={posX} y={posY - 18} fill="#a7f3d0" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                              M={stellarMetrics.M}M☉ ({Math.round(stellarMetrics.tempK)}K)
                            </text>
                          </g>
                        );
                      })()}

                      {/* Bottom Spectral Class Banner Bar */}
                      <rect x="55" y="244" width="425" height="10" rx="2" fill="url(#spectralTempGrad)" />
                      {/* Spectral Type Ticks & Labels */}
                      {[
                        { x: 80, class: 'O', temp: '40,000K' },
                        { x: 135, class: 'B', temp: '20,000K' },
                        { x: 195, class: 'A', temp: '10,000K' },
                        { x: 250, class: 'F', temp: '7,500K' },
                        { x: 305, class: 'G', temp: '5,800K' },
                        { x: 365, class: 'K', temp: '4,500K' },
                        { x: 440, class: 'M', temp: '3,000K' },
                      ].map((spec, i) => (
                        <g key={i}>
                          <line x1={spec.x} y1="240" x2={spec.x} y2="244" stroke="#94a3b8" strokeWidth="1" />
                          <text x={spec.x} y="265" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                            {spec.class}
                          </text>
                          <text x={spec.x} y="277" fill="#64748b" fontSize="7" textAnchor="middle" fontFamily="monospace">
                            {spec.temp}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                  {isArabic
                    ? 'كلما زادت كتلة النجم، زادت حرارته ولمعانه بشكل أسي (L ∝ M^3.5)، وقصرت فترة بقائه على التتابع الرئيسي حتى ينتهي في مستعر أعظم أو ثقب أسود.'
                    : 'Higher mass stars radiate drastically higher luminosities (L ∝ M^3.5), exhausting core hydrogen at exponential rates before collapsing into supernovae or black holes.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Engine 4: Hohmann Orbit Transfer & Rocket Dynamics */}
        {/* ================================================================= */}
        {activeMode === 'hohmann_transfer' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Mission Config Column */}
              <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-indigo-400">
                  <Rocket className="w-4 h-4" />
                  <span>{isArabic ? 'إعدادات المهمة ومحرك الصاروخ' : 'Mission & Rocket Parameters'}</span>
                </h3>

                <div>
                  <label className="text-xs text-slate-400 mb-1 block">{isArabic ? 'مسار المهمة الانتقالية:' : 'Mission Scenario:'}</label>
                  <select
                    value={missionTarget}
                    onChange={(e) => setMissionTarget(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="earth_to_mars">Earth to Mars (الأرض إلى المريخ)</option>
                    <option value="earth_to_venus">Earth to Venus (الأرض إلى الزهرة)</option>
                    <option value="leo_to_geo">LEO to GEO (المدار المنخفض إلى الثابت)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>{isArabic ? 'الدفع النوعي للمحرك (Isp):' : 'Specific Impulse (Isp):'}</span>
                    <span className="font-mono text-indigo-400 font-bold">{ispSeconds} s</span>
                  </div>
                  <input
                    type="range"
                    min={250}
                    max={850}
                    step={10}
                    value={ispSeconds}
                    onChange={(e) => setIspSeconds(Number(e.target.value))}
                    className="w-full accent-indigo-500"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">Chemical Hydrolox (380s) to Nuclear Thermal (850s)</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-700/60 text-xs font-mono">
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Δv Burn 1:</span>
                    <span className="text-cyan-400 font-bold">{hohmannCalc.deltaV1} km/s</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Δv Burn 2:</span>
                    <span className="text-cyan-400 font-bold">{hohmannCalc.deltaV2} km/s</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'إجمالي السرعة المطلوبة (Total Δv):' : 'Total Required Δv:'}</span>
                    <span className="text-emerald-400 font-bold">{hohmannCalc.totalDeltaV} km/s</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'زمن الرحلة الانتقالية:' : 'Transfer Transit Time:'}</span>
                    <span className="text-amber-400 font-bold">
                      {hohmannCalc.isInterplanetary ? `${hohmannCalc.transferDays} Days` : `${(hohmannCalc.transferDays * 24).toFixed(1)} Hours`}
                    </span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'نسبة كتلة الإطلاق (m0/mf):' : 'Mass Ratio (m0/mf):'}</span>
                    <span className="text-rose-400 font-bold">{hohmannCalc.massRatio}</span>
                  </div>
                </div>
              </div>

              {/* Trajectory Display */}
              <div className="lg:col-span-2 p-5 rounded-xl border border-slate-700/60 bg-slate-950/80 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold flex items-center justify-between text-slate-200 mb-4">
                    <span className="flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-cyan-400" />
                      <span>{isArabic ? 'مخطط مدار هوهمان الإهليلجي الانتقالي' : 'Hohmann Elliptical Transfer Trajectory'}</span>
                    </span>
                    <span className="text-xs font-mono text-emerald-400">Two-Impulse Minimum Energy</span>
                  </h3>

                  <div className="h-72 rounded-xl bg-slate-950 border border-slate-800 p-4 flex items-center justify-center relative overflow-hidden shadow-2xl">
                    <svg viewBox="-230 -140 460 280" className="w-full h-full">
                      <defs>
                        <radialGradient id="hohmannBackdrop" cx="50%" cy="50%" r="70%">
                          <stop offset="0%" stopColor="#0f172a" />
                          <stop offset="60%" stopColor="#020617" />
                          <stop offset="100%" stopColor="#000000" />
                        </radialGradient>

                        {/* Earth Texture Radial Gradient */}
                        <radialGradient id="earthGrad" cx="35%" cy="35%" r="65%">
                          <stop offset="0%" stopColor="#93c5fd" />
                          <stop offset="40%" stopColor="#3b82f6" />
                          <stop offset="75%" stopColor="#1d4ed8" />
                          <stop offset="100%" stopColor="#1e3a8a" />
                        </radialGradient>

                        {/* Mars Texture Radial Gradient */}
                        <radialGradient id="marsGrad" cx="35%" cy="35%" r="65%">
                          <stop offset="0%" stopColor="#fca5a5" />
                          <stop offset="40%" stopColor="#ef4444" />
                          <stop offset="75%" stopColor="#b91c1c" />
                          <stop offset="100%" stopColor="#7f1d1d" />
                        </radialGradient>

                        {/* Rocket Exhaust Plume Fire */}
                        <linearGradient id="rocketFire" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="30%" stopColor="#fde047" />
                          <stop offset="70%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Space Backdrop */}
                      <rect x="-230" y="-140" width="460" height="280" fill="url(#hohmannBackdrop)" rx="10" />

                      {/* Distant Stars */}
                      {[
                        [-200, -90], [-170, 70], [-120, -110], [-50, 105], [40, -100],
                        [110, 80], [170, -95], [195, 60], [-80, -40], [130, 30]
                      ].map(([sx, sy], i) => (
                        <circle key={i} cx={sx} cy={sy} r="1" fill="#ffffff" opacity={0.35 + (i % 4) * 0.15} />
                      ))}

                      {/* Central Primary (The Sun) */}
                      <circle cx="0" cy="0" r="22" fill="#f59e0b" opacity="0.25" />
                      <circle cx="0" cy="0" r="14" fill="#fef08a" />
                      <circle cx="0" cy="0" r="10" fill="#facc15" />
                      <text x="0" y="24" fill="#fde047" fontSize="8.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        ☉ Sun
                      </text>

                      {/* Departure Orbit (Earth Orbit r1 = 60 AU-scaled) */}
                      <circle cx="0" cy="0" r="60" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeDasharray="5,4" opacity="0.8" />
                      {/* Orbit direction arrow */}
                      <polygon points="0,-60 -5,-57 -5,-63" fill="#60a5fa" />
                      <text x="0" y="-65" fill="#93c5fd" fontSize="8" textAnchor="middle" fontFamily="monospace">
                        Departure Orbit (r₁ = 1.00 AU)
                      </text>

                      {/* Arrival Orbit (Target Planet Orbit r2 = 135 AU-scaled) */}
                      <circle cx="0" cy="0" r="135" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="6,4" opacity="0.8" />
                      {/* Orbit direction arrow */}
                      <polygon points="0,135 5,132 5,138" fill="#f87171" />
                      <text x="0" y="148" fill="#fca5a5" fontSize="8" textAnchor="middle" fontFamily="monospace">
                        Target Orbit (r₂ = 1.52 AU)
                      </text>

                      {/* Hohmann Semi-Elliptical Transfer Trajectory Path */}
                      {/* Semi-major axis a_t = (r1 + r2) / 2 = 97.5, c_t = (r2 - r1)/2 = 37.5, center = (-37.5, 0) */}
                      <path
                        d="M 60 0 C 60 -75, -135 -75, -135 0"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2.8"
                        strokeDasharray="6,3"
                      />
                      {/* Mid-trajectory velocity vector */}
                      <polygon points="-37.5,-55 -30,-50 -30,-60" fill="#34d399" />
                      <text x="-37.5" y="-63" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        Hohmann Trajectory (Δv_total = Δv₁ + Δv₂)
                      </text>

                      {/* Earth at Departure (r1 = 60, 0) */}
                      <g transform="translate(60, 0)">
                        {/* Atmospheric glow ring */}
                        <circle cx="0" cy="0" r="11" fill="none" stroke="#60a5fa" strokeWidth="1.2" opacity="0.6" />
                        <circle cx="0" cy="0" r="9" fill="url(#earthGrad)" />
                        {/* Prograde Tangential Burn 1 (Δv1) Exhaust Plume */}
                        <polygon points="0,0 20,-4 20,4" fill="url(#rocketFire)" />
                        <line x1="0" y1="0" x2="-22" y2="0" stroke="#10b981" strokeWidth="2.2" />
                        <polygon points="-26,0 -20,-3 -20,3" fill="#10b981" />
                        <text x="-12" y="-12" fill="#34d399" fontSize="8" fontWeight="bold" fontFamily="monospace">
                          Δv₁ (+2.94 km/s)
                        </text>
                        <text x="0" y="20" fill="#93c5fd" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                          Earth (الانطلاق)
                        </text>
                      </g>

                      {/* Target Planet (Mars) at Arrival (-135, 0) */}
                      <g transform="translate(-135, 0)">
                        {/* Atmospheric glow ring */}
                        <circle cx="0" cy="0" r="10" fill="none" stroke="#f87171" strokeWidth="1" opacity="0.6" />
                        <circle cx="0" cy="0" r="8" fill="url(#marsGrad)" />
                        {/* Polar ice cap */}
                        <circle cx="0" cy="-6" r="2.5" fill="#f8fafc" opacity="0.85" />
                        {/* Retro-Burn 2 (Δv2) Capture Insertion Plume */}
                        <polygon points="0,0 -18,-3.5 -18,3.5" fill="url(#rocketFire)" />
                        <line x1="0" y1="0" x2="20" y2="0" stroke="#10b981" strokeWidth="2.2" />
                        <polygon points="24,0 18,-3 18,3" fill="#10b981" />
                        <text x="14" y="-10" fill="#34d399" fontSize="8" fontWeight="bold" fontFamily="monospace">
                          Δv₂ (+2.65 km/s)
                        </text>
                        <text x="0" y="20" fill="#fca5a5" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                          Mars (الالتقاء المداري)
                        </text>
                      </g>

                      {/* Planetary Launch Window Phase Angle (44°) */}
                      <path
                        d="M 28 0 A 28 28 0 0 0 20 -20"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        strokeDasharray="2,2"
                      />
                      <text x="36" y="-14" fill="#fbbf24" fontSize="8" fontWeight="bold" fontFamily="monospace">
                        Phase Angle φ ≈ 44°
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                  {isArabic
                    ? 'يمثل مدار هوهمان الحل الأمثل لنقل المركبات الفضائية بين كوكبين أو مدارين؛ حيث تتم مناورة الدفع الأولى عند الحضيض، والدفع الثاني للتثبيت عند الأوج.'
                    : 'The Hohmann transfer optimizes fuel expenditure by tangent burn impulses at periapsis and apoapsis, connecting two concentric planetary orbits.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Engine 5: Satellite Remote Sensing & NDVI Spectrogram */}
        {/* ================================================================= */}
        {activeMode === 'remote_sensing' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Controls Column */}
              <div className="p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-indigo-400">
                  <Satellite className="w-4 h-4" />
                  <span>{isArabic ? 'هدف الرصد الفضائي الطيفي' : 'Remote Sensing Target'}</span>
                </h3>

                <div>
                  <label className="text-xs text-slate-400 mb-1.5 block">{isArabic ? 'نوع الغطاء السطحي للأرض:' : 'Surface Land Cover:'}</label>
                  <select
                    value={surfaceType}
                    onChange={(e) => setSurfaceType(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="forest">Dense Vegetation Forest (غابات كثيفة)</option>
                    <option value="desert">Arid Desert Sand (صحراء وتربة مكشوفة)</option>
                    <option value="water">Deep Water / Ocean (مسطح مائي عميق)</option>
                    <option value="urban">Urban Concrete Settlement (منطقة عمرانية)</option>
                  </select>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-700/60 text-xs font-mono">
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'انعكاسية الضوء الأحمر (Red):' : 'Red Band Reflectance:'}</span>
                    <span className="text-rose-400 font-bold">{spectralData.redReflect * 100}%</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">{isArabic ? 'انعكاسية تحت الحمراء (NIR):' : 'NIR Band Reflectance:'}</span>
                    <span className="text-emerald-400 font-bold">{spectralData.nirReflect * 100}%</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded bg-indigo-950/60 border border-indigo-500/40">
                    <span className="text-indigo-300 font-semibold">{isArabic ? 'مؤشر الغطاء النباتي (NDVI):' : 'Calculated NDVI:'}</span>
                    <span className="text-cyan-300 font-black text-sm">{ndviValue}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                  <span className="text-slate-400 block mb-1">{isArabic ? 'التصنيف البيئي المستنتج:' : 'Environmental Interpretation:'}</span>
                  <div className="text-emerald-400 font-bold">{isArabic ? spectralData.statusAr : spectralData.statusEn}</div>
                </div>
              </div>

              {/* Spectral Reflectance Graph View */}
              <div className="lg:col-span-2 p-5 rounded-xl border border-slate-700/60 bg-slate-950/80 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold flex items-center justify-between text-slate-200 mb-4">
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-400" />
                      <span>{isArabic ? 'منحنى البصمة الطيفية متعددة الأطياف (Spectral Signature)' : 'Multispectral Spectral Reflectance Signature'}</span>
                    </span>
                    <span className="text-xs font-mono text-indigo-400">NDVI = (NIR - Red) / (NIR + Red)</span>
                  </h3>

                  <div className="h-64 rounded-xl bg-slate-900 border border-slate-800 p-6 flex items-end justify-around relative">
                    {/* Blue Band Bar */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400">~5%</span>
                      <div style={{ height: '30px' }} className="w-14 rounded-t-lg bg-blue-500/80 shadow-md shadow-blue-500/30" />
                      <span className="text-[10px] font-mono text-slate-400">Blue (480nm)</span>
                    </div>

                    {/* Green Band Bar */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400">~12%</span>
                      <div style={{ height: '55px' }} className="w-14 rounded-t-lg bg-emerald-500/80 shadow-md shadow-emerald-500/30" />
                      <span className="text-[10px] font-mono text-slate-400">Green (560nm)</span>
                    </div>

                    {/* Red Band Bar */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[11px] font-mono text-rose-400 font-bold">{spectralData.redReflect * 100}%</span>
                      <div style={{ height: `${spectralData.redReflect * 180}px` }} className="w-14 rounded-t-lg bg-rose-500 shadow-lg shadow-rose-500/40" />
                      <span className="text-[10px] font-mono text-slate-400">Red (660nm)</span>
                    </div>

                    {/* NIR Band Bar */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[11px] font-mono text-emerald-300 font-bold">{spectralData.nirReflect * 100}%</span>
                      <div style={{ height: `${spectralData.nirReflect * 180}px` }} className="w-14 rounded-t-lg bg-gradient-to-t from-emerald-600 to-teal-400 shadow-lg shadow-emerald-500/50" />
                      <span className="text-[10px] font-mono text-slate-400">NIR (840nm)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                  {isArabic
                    ? 'يمتص الكلوروفيل الضوء الأحمر بشدة لعملية البناء الضوئي ويعكس الأشعة تحت الحمراء القريبة (NIR)، مما يجعل مؤشر NDVI حاسماً لمراقبة الغطاء النباتي والتصحر من الفضاء.'
                    : 'Active chlorophyll absorbs visible red photons for photosynthesis while cellular structures reflect near-infrared (NIR), creating high NDVI values for healthy biomass.'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
