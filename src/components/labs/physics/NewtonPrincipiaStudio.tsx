import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Globe2,
  Compass,
} from 'lucide-react';
import newtonPhoto from '../../../assets/physics/newton_principia_gravitation_1687.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface NewtonHotspot {
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

export const NEWTON_HOTSPOTS: NewtonHotspot[] = [
  {
    id: 'universal_gravitation',
    xPct: 49.0,
    yPct: 37.0,
    titleAr: 'قانون الجذب العام الكوني وتناسب التربيع العكسي (F = G · M·m / r²)',
    titleEn: 'Law of Universal Gravitation & Inverse-Square Metric',
    categoryAr: 'الجاذبية الكونية والميكانيكا السماوية',
    categoryEn: 'Celestial Mechanics & Gravitation',
    descAr:
      'صاغ نيوتن القانون الموحد الذي يحكم حركة الأجسام على الأرض وحركة الأجرام في السماء: كل جسيم في الكون يجذب أي جسيم آخر بقوة تتناسب طردياً مع حاصل ضرب كتلتيهما وعكسياً مع مربع المسافة بين مركزيهما.',
    descEn:
      'Newton unified terrestrial and celestial mechanics with a single universal law: every particle attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the squared distance between their centers.',
    scientificProofAr:
      'برهن نيوتن على قانون التربيع العكسي بمقارنة تسارع سقوط التفاحة على الأرض (9.8 م/ث²) بتسارع القمر في مداره نحو الأرض (0.00272 م/ث²)، ووجد أن النسبة تساوي تماماً مربع نسبة المسافتين (60² = 3600).',
    scientificProofEn:
      'Empirically proven by Newton’s "Moon Test", comparing lunar centripetal acceleration (0.00272 m/s²) to surface gravity (9.8 m/s²), matching the inverse square of the Moon’s distance in Earth radii (1/60² = 1/3600).',
  },
  {
    id: 'newton_three_laws',
    xPct: 24.0,
    yPct: 34.0,
    titleAr: 'قوانين الحركة الكلاسيكية الثلاثة (القصور الذاتي، F = m·a، والفعل ورد الفعل)',
    titleEn: 'Newton’s Three Fundamental Axioms of Motion',
    categoryAr: 'ديناميكا الحركة الكلاسيكية',
    categoryEn: 'Classical Dynamics',
    descAr:
      'القواعد التأسيسية للميكانيكا الكلاسيكية: القانون الأول (القصور الذاتي)، القانون الثاني (القوة هي المعدل الزمني لتغير كمية التحرك F = dp/dt = m·a)، والقانون الثالث (لكل فعل رد فعل مساوٍ له في المقدار ومضاد له في الاتجاه).',
    descEn:
      'The foundational axioms of classical mechanics: First Law (Inertia, bodies persist in uniform motion unless acted upon), Second Law (F = dp/dt = m·a), and Third Law (Mutual interactions are equal and opposite, F₁₂ = -F₂₁).',
    scientificProofAr:
      'القانون الثاني يمثل الأساس الرياضي لمنهج الفيزياء بالثانوية العامة لدراسة القوى والحركة الدائرية وكمية التحرك الخطي (p = m·v).',
    scientificProofEn:
      'Underpins the Egyptian Baccalaureate physics curriculum for linear momentum conservation, centripetal acceleration, and dynamic equilibrium.',
  },
  {
    id: 'orbital_velocity_escape',
    xPct: 53.0,
    yPct: 24.0,
    titleAr: 'السرعة المدارية وسرعة الإفلات الصاروخي (مدفع نيوتن الفكري)',
    titleEn: 'Orbital Speed & Escape Velocity (Newton’s Mountain Cannon)',
    categoryAr: 'الميكانيكا المدارية والفضاء',
    categoryEn: 'Orbital Mechanics & Escape Dynamics',
    descAr:
      'في التجربة الفكرية الشهيرة (مدفع نيوتن)، افترض قذف قذيفة أفقياً من قمة جبل شاهق فوق الغلاف الجوي؛ مع زيادة السرعة، ينحني مسار القذيفة بنفس معدل انحناء سطح الأرض لتصبح قمراً صناعياً مدارياً عند v = √(GM/r)، وتفلت تماماً عند v_esc = √(2GM/r).',
    descEn:
      'Newton’s Mountain thought experiment: a projectile launched horizontally fast enough curves toward Earth at the exact curvature rate of the planetary surface, becoming an artificial satellite at v_orbit = √(GM/r), and escapes into hyperbolic trajectory at v_esc = √(2GM/r).',
    scientificProofAr:
      'العلاقة المباشرة v_escape = √2 · v_orbit تفسر سرعات إطلاق الأقمار الصناعية المصرية (نايل سات وطيبة-1) ومركبات استكشاف الفضاء العميق.',
    scientificProofEn:
      'Direct derivation: v_escape = √2 · v_orbit explains satellite injection velocities into Geostationary Transfer Orbits (GTO).',
  },
  {
    id: 'kepler_planetary_laws',
    xPct: 50.0,
    yPct: 53.0,
    titleAr: 'الاشتقاق الرياضي لقوانين كبلر الفلكية (T² ∝ r³)',
    titleEn: 'Mathematical Derivation of Kepler’s Planetary Laws',
    categoryAr: 'الفلك والفيزياء الفلكية',
    categoryEn: 'Keplerian Harmonical Laws',
    descAr:
      'نجح نيوتن في إثبات أن قوانين يوهانس كبلر التجريبية الثلاثة لحركة الكواكب هي نتائج حتمية لقانون الجذب العام؛ حيث تتساوى قوة التجاذب مع القوة الجاذبة المركزية (G·M·m/r² = m·v²/r = m·4π²r/T²)، مما ينتج قانون التوافق T² = (4π²/GM)·r³.',
    descEn:
      'Newton proved that Johannes Kepler’s three empirical laws are direct mathematical consequences of universal gravitation: equating gravitational attraction to centripetal force yields Kepler’s Third Law T² = (4π²/GM)·r³.',
    scientificProofAr:
      'يتطابق ثابت كبلر المحسوب نظرياً (4π²/GM) مع القياسات الفلكية لمدارات كواكب المجموعة الشمسية بدقة 99.99%.',
    scientificProofEn:
      'The calculated constant (4π²/GM_sun) precisely matches the empirical planetary orbital periods across all solar system bodies within 99.99%.',
  },
  {
    id: 'newton_reflecting_telescope',
    xPct: 83.0,
    yPct: 35.0,
    titleAr: 'تلسكوب نيوتن العاكس 1668 وحل مشكلة الزيغ اللوني للعدسات',
    titleEn: 'Newton’s 1668 Reflecting Telescope & Chromatic Aberration Solution',
    categoryAr: 'البصريات والأجهزة الفلكية',
    categoryEn: 'Optical Instrumentation',
    descAr:
      'اخترع نيوتن التلسكوب العاكس باستخدام مرآة مقعرة معدنية (Speculum metal) لعكس الضوء وتجميعه في بؤرة دون أن يمر عبر زجاج العدسات، مما تخلص نهائياً من عيب الزيغ اللوني (Chromatic Aberration) الذي كان يعاني منه تلسكوب جاليليو الكاسر.',
    descEn:
      'Newton designed and ground the first practical reflecting telescope in 1668 using a concave primary mirror. By utilizing reflection rather than refraction, he completely eliminated chromatic aberration, paving the way for modern giant telescopes (Hubble, James Webb).',
    scientificProofAr:
      'يرتبط هذا الاختراع مباشرة بوحدة البصريات والانعكاس في منهج الفيزياء، حيث تتبع جميع التلسكوبات الفلكية الحديثة المبدأ النيوتوني.',
    scientificProofEn:
      'Connects directly to curriculum ray optics: reflection angle invariance across all wavelengths prevents wavelength dispersion.',
  },
];

export const NewtonPrincipiaStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<NewtonHotspot>(NEWTON_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Gravitational & Orbital Kinematics Simulator
  const [selectedPreset, setSelectedPreset] = useState<'leo' | 'geo' | 'moon' | 'earth_sun'>('leo');
  const [customAltitudeKm, setCustomAltitudeKm] = useState<number>(400); // ISS altitude default

  const celestialPresets = {
    leo: {
      nameAr: 'محطة الفضاء الدولية / قمر مدار منخفض (LEO, Alt: 400 km)',
      nameEn: 'Low Earth Orbit (ISS / LEO, Alt: 400 km)',
      centralNameAr: 'كوكب الأرض',
      centralNameEn: 'Planet Earth',
      centralMassKg: 5.972e24,
      centralRadiusKm: 6371,
      orbitingMassKg: 420000, // ISS mass
      defaultAltKm: 400,
      minAltKm: 200,
      maxAltKm: 2000,
      stepKm: 20,
    },
    geo: {
      nameAr: 'قمر صناعي ثابت مدارياً (نايل سات / Geostationary GEO)',
      nameEn: 'Geostationary Orbit (Nilesat / GEO, Alt: 35,786 km)',
      centralNameAr: 'كوكب الأرض',
      centralNameEn: 'Planet Earth',
      centralMassKg: 5.972e24,
      centralRadiusKm: 6371,
      orbitingMassKg: 3500,
      defaultAltKm: 35786,
      minAltKm: 30000,
      maxAltKm: 40000,
      stepKm: 100,
    },
    moon: {
      nameAr: 'القمر الطبيعي حول كوكب الأرض',
      nameEn: 'Moon Orbiting Earth',
      centralNameAr: 'كوكب الأرض',
      centralNameEn: 'Planet Earth',
      centralMassKg: 5.972e24,
      centralRadiusKm: 6371,
      orbitingMassKg: 7.342e22,
      defaultAltKm: 384400,
      minAltKm: 360000,
      maxAltKm: 405000,
      stepKm: 1000,
    },
    earth_sun: {
      nameAr: 'مدار كوكب الأرض حول الشمس (1 AU)',
      nameEn: 'Earth Orbiting the Sun (1 AU)',
      centralNameAr: 'الشمس',
      centralNameEn: 'The Sun',
      centralMassKg: 1.989e30,
      centralRadiusKm: 696340,
      orbitingMassKg: 5.972e24,
      defaultAltKm: 149597870,
      minAltKm: 147000000,
      maxAltKm: 152000000,
      stepKm: 50000,
    },
  };

  const currentPreset = celestialPresets[selectedPreset];
  const G = 6.6743e-11; // N·m²/kg²

  // Orbital Radius in meters
  const orbitalRadiusM = (currentPreset.centralRadiusKm + customAltitudeKm) * 1000;
  const centralMass = currentPreset.centralMassKg;
  const satMass = currentPreset.orbitingMassKg;

  // Local gravitational field g = G*M / r^2 (m/s²)
  const localGravField = Number(((G * centralMass) / (orbitalRadiusM * orbitalRadiusM)).toFixed(3));

  // Gravitational Attraction Force F = G*M*m / r^2 (N)
  const gravForceN = (G * centralMass * satMass) / (orbitalRadiusM * orbitalRadiusM);

  // Orbital Speed v = sqrt(G*M / r) (m/s) -> km/s
  const orbitalSpeedKmS = Number((Math.sqrt((G * centralMass) / orbitalRadiusM) / 1000).toFixed(2));

  // Escape Speed v_esc = sqrt(2*G*M / r) = v * sqrt(2) (km/s)
  const escapeSpeedKmS = Number((orbitalSpeedKmS * Math.SQRT2).toFixed(2));

  // Period T = 2*pi*sqrt(r^3 / (G*M)) in seconds
  const orbitalPeriodSec = 2 * Math.PI * Math.sqrt(Math.pow(orbitalRadiusM, 3) / (G * centralMass));
  const orbitalPeriodMin = Number((orbitalPeriodSec / 60).toFixed(1));
  const orbitalPeriodHours = Number((orbitalPeriodSec / 3600).toFixed(2));
  const orbitalPeriodDays = Number((orbitalPeriodSec / 86400).toFixed(2));

  const modalData: HiResImageModalData = {
    imageUrl: newtonPhoto,
    titleAr: 'الطبعة الملكية الأولى لكتاب الأصول الرياضية للفلسفة الطبيعية (نيوتن 1687م)',
    titleEn: 'Sir Isaac Newton’s Philosophiae Naturalis Principia Mathematica: First Edition (1687 CE)',
    subtitleAr: 'قانون الجذب العام، الميكانيكا المدارية، قوانين الحركة، وتلسكوب نيوتن العاكس 1668',
    subtitleEn: 'Universal Gravitation, Three Laws of Motion, Celestial Dynamics & 1668 Reflecting Telescope',
    descriptionAr:
      'وثيقة تاريخية خالدة طُبعت في لندن عام 1687 برعاية الجمعية الملكية البريطانية وبتمويل من عالم الفلك إدموند هالي. تعد أعظم كتاب علمي في تاريخ البشرية، حيث استبدل نيوتن النظريات الأرسطية القديمة بصياغة رياضية هندسية دقيقة لقوانين الجاذبية والحركة الكونية.',
    descriptionEn:
      'An iconic monumental artifact published in London in July 1687 under the presidency of Samuel Pepys and funded by Edmond Halley. Widely regarded as the most influential science book in history, it formulated the laws of motion and universal gravitation that governed physical science for over two centuries.',
    dateOrEraAr: 'عصر النهضة والثورة العلمية الأوروبية (1687م)',
    dateOrEraEn: 'Scientific Revolution & Age of Enlightenment (1687 CE)',
    locationAr: 'مكتبة ومتحف الجمعية الملكية، لندن، المملكة المتحدة',
    locationEn: 'The Royal Society Library & Archives, London, United Kingdom',
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
                : 'bg-gradient-to-br from-indigo-600 to-sky-700 text-white border-indigo-400/40 shadow-indigo-500/20'
            }`}
          >
            <Globe2 className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic
                  ? 'استوديو نيوتن الأرشيفي 1687: قانون الجذب العام والميكانيكا المدارية (4K)'
                  : 'Newton 1687 Principia: Universal Gravitation & Orbital Studio (4K)'}
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
                1687 CE · Folio 4K
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'فحص المخطوطة الأصلية لكتاب البرنسيبيا (Philosophiae Naturalis Principia Mathematica) وتلسكوب 1668 مع محاكي الجاذبية والسرعة المدارية'
                : 'Interactive inspection of Newton’s 1687 masterpiece with universal gravitation, orbital velocity & escape simulator'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
            isContrast
              ? 'bg-indigo-400 text-black border-indigo-300 hover:bg-indigo-300'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500/40'
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
            src={newtonPhoto}
            alt="Isaac Newton 1687 Principia Mathematica"
            className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.01]"
          />

          {/* Interactive Pulsing Hotspots */}
          {NEWTON_HOTSPOTS.map((spot) => {
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
                    : 'bg-indigo-600/90 text-white border-indigo-300 hover:scale-110 hover:bg-indigo-500 shadow-md'
                }`}
              >
                <span className="relative flex h-3 w-3 items-center justify-center">
                  {!isSelected && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
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
              {isArabic ? 'انقر على الدوائر التفاعلية لفحص تفاصيل الوثيقة' : 'Click pulsing pins for deep historical inspection'}
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
              <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Compass className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-400 font-bold block">
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
              <h4 className="text-[11px] font-bold text-indigo-400 flex items-center gap-1 mb-1">
                <Info className="w-3.5 h-3.5" />
                <span>{isArabic ? 'البرهان العلمي ومعادلات المنهج المصري:' : 'Curriculum Derivation & Scientific Proof:'}</span>
              </h4>
              <p className={`text-[11px] leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
              </p>
            </div>
          </div>

          {/* Quick Hotspot Selectors */}
          <div className="flex flex-wrap gap-1.5">
            {NEWTON_HOTSPOTS.map((h, i) => (
              <button
                key={h.id}
                onClick={() => setActiveHotspot(h)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                  activeHotspot.id === h.id
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-xs'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {i + 1}. {isArabic ? h.titleAr.split(':')[0] : h.titleEn.split('&')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Universal Gravitation & Orbital Kinematics Simulator */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-indigo-400'
            : isLight
            ? 'bg-slate-50 border-slate-200 shadow-xs'
            : 'bg-slate-900/60 border-slate-800'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Layers className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-sm font-black text-slate-100">
              {isArabic
                ? 'محاكي قانون الجذب العام والسرعة المدارية وسرعة الإفلات'
                : 'Universal Gravitation, Orbital Velocity & Escape Kinematics Simulator'}
            </h3>
            <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'اختر النظام الفلكي وعدّل الارتفاع لحساب قوة التجاذب وشدة مجال الجاذبية والسرعة المدارية وزمن الدورة الفلكية'
                : 'Adjust orbital altitude to compute real-time gravitational attraction, field strength, orbital speed and period'}
            </p>
          </div>
        </div>

        {/* Preset Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {(Object.keys(celestialPresets) as Array<keyof typeof celestialPresets>).map((key) => {
            const p = celestialPresets[key];
            const isSel = selectedPreset === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedPreset(key);
                  setCustomAltitudeKm(p.defaultAltKm);
                }}
                className={`p-2.5 rounded-xl border text-xs font-bold text-start transition-all cursor-pointer ${
                  isSel
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : isLight
                    ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800'
                    : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300'
                }`}
              >
                <div className="text-[10px] text-indigo-300 font-mono mb-0.5">
                  {key.toUpperCase()}
                </div>
                <div className="line-clamp-1">{isArabic ? p.nameAr : p.nameEn}</div>
              </button>
            );
          })}
        </div>

        {/* Altitude Range Slider */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-xs font-bold mb-1.5">
            <span>
              {isArabic
                ? `ارتفاع المدار عن سطح ${currentPreset.centralNameAr} (h):`
                : `Orbital Altitude above ${currentPreset.centralNameEn} (h):`}
            </span>
            <span className="text-indigo-400 font-mono text-sm">
              {customAltitudeKm.toLocaleString()} km
            </span>
          </div>
          <input
            type="range"
            min={currentPreset.minAltKm}
            max={currentPreset.maxAltKm}
            step={currentPreset.stepKm}
            value={customAltitudeKm}
            onChange={(e) => setCustomAltitudeKm(parseFloat(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
            <span>{currentPreset.minAltKm.toLocaleString()} km</span>
            <span>نصف القطر المداري الكلي r = {(currentPreset.centralRadiusKm + customAltitudeKm).toLocaleString()} km</span>
            <span>{currentPreset.maxAltKm.toLocaleString()} km</span>
          </div>
        </div>

        {/* Calculated Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'شدة مجال الجاذبية (g):' : 'Gravitational Field (g):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-amber-400">
              {localGravField} m/s²
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">g = GM / r²</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'السرعة المدارية (v_orbit):' : 'Orbital Speed (v_orbit):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-cyan-400">
              {orbitalSpeedKmS} km/s
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">v = √(GM / r)</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'سرعة الإفلات (v_escape):' : 'Escape Speed (v_escape):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-emerald-400">
              {escapeSpeedKmS} km/s
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">v_esc = √2 · v_orbit</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
              {isArabic ? 'زمن الدورة المدارية (T):' : 'Orbital Period (T):'}
            </span>
            <span className="text-base sm:text-lg font-black font-mono text-purple-400">
              {orbitalPeriodHours < 48 ? `${orbitalPeriodHours} hrs` : `${orbitalPeriodDays} days`}
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
              ({orbitalPeriodMin} min)
            </span>
          </div>
        </div>

        {/* Force readout summary bar */}
        <div className="mt-3 p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs flex flex-wrap items-center justify-between gap-2 text-indigo-300">
          <span className="flex items-center gap-1.5 font-mono">
            <strong>F_gravitation = </strong> {gravForceN.toExponential(3)} N
          </span>
          <span className="text-[11px] text-slate-400">
            {isArabic ? '⚖️ قانون الجذب العام لنيوتن متحقق بدقة متناهية' : '⚖️ Newton’s Universal Gravitation Law Fully Verified'}
          </span>
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
