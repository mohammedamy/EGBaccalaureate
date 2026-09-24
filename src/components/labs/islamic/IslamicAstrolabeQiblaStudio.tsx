import React, { useState, useMemo } from 'react';
import {
  Compass,
  Maximize2,
  Sparkles,
  Info,
  Sun,
  Volume2,
  Navigation,
} from 'lucide-react';
import astrolabePhoto from '../../../assets/islamicLab/classical_islamic_astrolabe.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

interface AstrolabeHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  technicalDetailsAr: string;
  technicalDetailsEn: string;
}

const ASTROLABE_HOTSPOTS: AstrolabeHotspot[] = [
  {
    id: 'shackle_ring',
    xPct: 50.0,
    yPct: 8.0,
    titleAr: 'العروة والحلقة والكرسي (Suspension Shackle & Throne)',
    titleEn: 'Suspension Ring, Shackle & Throne (Al-Kursi)',
    categoryAr: 'ميكانيكا الإسطرلاب والجاذبية',
    categoryEn: 'Instrument Mechanics & Gravity Plummet',
    descAr:
      'الحلقة النحاسية العلوية التي يُعلق منها الإسطرلاب بإبهام الفلكي لضمان اتزانه الرأسي التام بتأثير الجاذبية الأرضية أثناء رصد النجوم والشمس، ويسمى الجزء المزخرف الذي يربطها بجسم الإسطرلاب بـ «الكرسي».',
    descEn:
      'Brass shackle and suspension ring enabling the astrolabe to hang plumb under gravity from the astronomer’s thumb during solar or stellar altitude readings.',
    technicalDetailsAr: 'تثبيت حر في مستويين (Cardanic freedom) يمنع انحراف زاوية السمت عن خط الشاقول الرأسي.',
    technicalDetailsEn: 'Two-degree-of-freedom pivot ensuring the instrument remains perpendicular to the local horizon.',
  },
  {
    id: 'rete_stars',
    xPct: 50.0,
    yPct: 44.0,
    titleAr: 'شبكة العنكبوت والنجوم الثابتة (The Rete / Spider)',
    titleEn: 'The Reticulated Rete & Fixed Star Pointers',
    categoryAr: 'خريطة القبة السماوية المجسمة',
    categoryEn: 'Stereographic Celestial Projection',
    descAr:
      'الهيكل النحاسي المفرغ فائق البراعة الذي يدور حراً فوق الصفائح؛ يحمل مؤشرات مسننة لألمع النجوم الملاحية (كالنسر الواقع، والدبران، والشعرى اليمانية، وقلب العقرب)، بالإضافة إلى دائرة البروج المائلة التي تمثل مسار الشمس الظاهري.',
    descEn:
      'Openwork pierced brass plate rotating freely over the tympan, bearing sharp pointers for primary navigational guide stars and an eccentric ecliptic ring divided into 12 zodiac signs.',
    technicalDetailsAr: 'إسقاط إستريوغرافي من القطب الجنوبي السماوي على مستوي خط الاستواء، يحافظ على صحة الزوايا والدوائر.',
    technicalDetailsEn: 'Conformal stereographic projection from the south celestial pole preserving all circular trajectories.',
  },
  {
    id: 'mater_limb',
    xPct: 15.0,
    yPct: 50.0,
    titleAr: 'حجرة الأم والطوق المدرج (The Mater & Graduated Limb)',
    titleEn: 'The Mater Cavity & Graduated Degree Limb',
    categoryAr: 'تدريج الزوايا الفلكية والزمن',
    categoryEn: 'Angle Graduations & Hours Scale',
    descAr:
      'الجسم النحاسي القرصي الثقيل المجوف الذي يحتضن بداخله الصفائح المناخية؛ وتتدرج حافته الخارجية بدقة متناهية من صفر إلى 360 درجة، وتُقسم إلى ساعات نهارية وزوايا ميل لقياس الارتفاع بدقة تصل لربع درجة قوسية.',
    descEn:
      'Heavy cast brass base disc housing the climate plates; its raised circular rim (limb) is engraved with 360 degree graduations and 24-hour equal hour marks.',
    technicalDetailsAr: 'سبك من سبيكة البرونز والنحاس الأصفر المعالج حرارياً لمقاومة التمدد والالتواء في ظروف الصحراء.',
    technicalDetailsEn: 'Cast from high-density leaded brass alloy annealed to resist thermal warping across arid climates.',
  },
  {
    id: 'tympan_plate',
    xPct: 50.0,
    yPct: 68.0,
    titleAr: 'الصفيحة المقنطرة للبلدان (The Tympan / Climate Plate)',
    titleEn: 'The Almucantar Tympan (Latitude Plate)',
    categoryAr: 'خطوط المقنطرات والسموت',
    categoryEn: 'Almucantars & Horizon Circles',
    descAr:
      'صفيحة نحاسية محفورة خصيصاً لخط عرض جغرافي محدد (كالقاهرة 30°، أو مكة 21.5°، أو الإسكندرية 31.2°)؛ وتشتمل على دائرة الأفق، ودوائر الارتفاع المتوازية (المقنطرات)، وخطوط السمت لتحديد أوقات الصلوات واتجاه القبلة.',
    descEn:
      'Interchangeable brass disc engraved for a specific geographic latitude, inscribed with almucantar altitude curves, azimuth circles, and twilight lines.',
    technicalDetailsAr: 'تحتوي على خطي الشفق الصباحي والشفق المسائي لتحديد وقتي الفجر والعشاء الفلكيين بدقة 18 درجة.',
    technicalDetailsEn: 'Inscribed with 18° astronomical twilight curves for determining Fajr and Isha prayer thresholds.',
  },
  {
    id: 'alidade_shadow',
    xPct: 84.0,
    yPct: 70.0,
    titleAr: 'العضادة والمربع الظلي (The Alidade & Shadow Square)',
    titleEn: 'The Sighting Alidade & Cotangent Shadow Square',
    categoryAr: 'الرصد البصري وحساب المثلثات',
    categoryEn: 'Optical Sighting & Trigonometry',
    descAr:
      'المسطرة الدوارة المزودة بثقبين دقيقين (الهدفتين) للرصد البصري للشمس أو النجوم؛ ويتوسط ظهر الإسطرلاب "مربع الظل" الذي يحسب ظل القامة وظل الأصابع لحساب أطوال المآذن والجبال ووقت صلاة العصر بحساب المثلثات.',
    descEn:
      'Reversible sighting rule with dual pinhole vanes; works with the reverse "shadow square" (Umbra Recta and Umbra Versa) for cotangent trigonometric surveying.',
    technicalDetailsAr: 'تحسب ظل القامة (ظل أصابع 12 أو أقدام 7) لتحديد دخول وقت صلاة العصر الشرعي: ظل الشيء مثله.',
    technicalDetailsEn: 'Solves $s = h \cot(\theta)$ to directly compute Asr entry when object shadow equals object length.',
  },
];

interface QiblaCity {
  id: string;
  nameAr: string;
  nameEn: string;
  lat: number;
  lng: number;
  countryAr: string;
  countryEn: string;
}

export const QIBLA_CITIES: QiblaCity[] = [
  { id: 'cairo', nameAr: 'القاهرة', nameEn: 'Cairo', lat: 30.0444, lng: 31.2357, countryAr: 'مصر', countryEn: 'Egypt' },
  { id: 'alexandria', nameAr: 'الإسكندرية', nameEn: 'Alexandria', lat: 31.2001, lng: 29.9187, countryAr: 'مصر', countryEn: 'Egypt' },
  { id: 'aswan', nameAr: 'أسوان', nameEn: 'Aswan', lat: 24.0889, lng: 32.8998, countryAr: 'مصر', countryEn: 'Egypt' },
  { id: 'portsaid', nameAr: 'بورسعيد', nameEn: 'Port Said', lat: 31.2653, lng: 32.3019, countryAr: 'مصر', countryEn: 'Egypt' },
  { id: 'tanta', nameAr: 'طنطا', nameEn: 'Tanta', lat: 30.7865, lng: 31.0004, countryAr: 'مصر', countryEn: 'Egypt' },
  { id: 'sohag', nameAr: 'سوهاج', nameEn: 'Sohag', lat: 26.5569, lng: 31.6948, countryAr: 'مصر', countryEn: 'Egypt' },
  { id: 'jerusalem', nameAr: 'القدس الشريف', nameEn: 'Jerusalem', lat: 31.7683, lng: 35.2137, countryAr: 'فلسطين', countryEn: 'Palestine' },
  { id: 'medina', nameAr: 'المدينة المنورة', nameEn: 'Medina', lat: 24.4672, lng: 39.6111, countryAr: 'السعودية', countryEn: 'Saudi Arabia' },
  { id: 'baghdad', nameAr: 'بغداد', nameEn: 'Baghdad', lat: 33.3152, lng: 44.3661, countryAr: 'العراق', countryEn: 'Iraq' },
  { id: 'cordoba', nameAr: 'قرطبة', nameEn: 'Cordoba', lat: 37.8882, lng: -4.7794, countryAr: 'الأندلس / إسبانيا', countryEn: 'Spain' },
  { id: 'istanbul', nameAr: 'إسطنبول', nameEn: 'Istanbul', lat: 41.0082, lng: 28.9784, countryAr: 'تركيا', countryEn: 'Turkey' },
  { id: 'london', nameAr: 'لندن', nameEn: 'London', lat: 51.5074, lng: -0.1278, countryAr: 'بريطانيا', countryEn: 'UK' },
];

const KAABA_LAT = 21.4225;
const KAABA_LNG = 39.8262;

// Spherical Trigonometry Qibla Formula (Al-Biruni / Ibn Yunus Formulation)
export function calculateQiblaAzimuth(lat: number, lng: number): number {
  const phi1 = (lat * Math.PI) / 180;
  const phi2 = (KAABA_LAT * Math.PI) / 180;
  const deltaLambda = ((KAABA_LNG - lng) * Math.PI) / 180;

  const y = Math.sin(deltaLambda);
  const x = Math.cos(phi1) * Math.tan(phi2) - Math.sin(phi1) * Math.cos(deltaLambda);

  let qiblaRad = Math.atan2(y, x);
  let qiblaDeg = (qiblaRad * 180) / Math.PI;
  if (qiblaDeg < 0) {
    qiblaDeg += 360;
  }
  return Math.round(qiblaDeg * 10) / 10;
}

// Great Circle Distance to Kaaba in Kilometers
export function calculateDistanceToKaabaKm(lat: number, lng: number): number {
  const R = 6371; // Earth radius in km
  const phi1 = (lat * Math.PI) / 180;
  const phi2 = (KAABA_LAT * Math.PI) / 180;
  const deltaPhi = ((KAABA_LAT - lat) * Math.PI) / 180;
  const deltaLambda = ((KAABA_LNG - lng) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export const IslamicAstrolabeQiblaStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<AstrolabeHotspot>(ASTROLABE_HOTSPOTS[1]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [selectedCity, setSelectedCity] = useState<QiblaCity>(QIBLA_CITIES[0]);
  const [reteRotation, setReteRotation] = useState<number>(45);
  const [alidadeAngle, setAlidadeAngle] = useState<number>(38);
  const [isChiming, setIsChiming] = useState<boolean>(false);

  // Computed Qibla azimuth & distance
  const qiblaAzimuth = useMemo(
    () => calculateQiblaAzimuth(selectedCity.lat, selectedCity.lng),
    [selectedCity]
  );
  const distanceKm = useMemo(
    () => calculateDistanceToKaabaKm(selectedCity.lat, selectedCity.lng),
    [selectedCity]
  );

  // Solar Altitude calculations from Alidade Angle
  const solarZenith = 90 - alidadeAngle;
  const shadowRatio = useMemo(() => {
    if (alidadeAngle <= 0) return 99.9;
    const rad = (alidadeAngle * Math.PI) / 180;
    return Math.round((1 / Math.tan(rad)) * 100) / 100;
  }, [alidadeAngle]);

  // Audio Takbir / Adhan Harmonic Acoustic Generator
  const playSacredAdhanChord = () => {
    setIsChiming(true);
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        // Rast / Bayati authentic maqam notes: D4 (293.66Hz), G4 (392Hz), A4 (440Hz), D5 (587.33Hz)
        [293.66, 349.23, 392.0, 440.0, 587.33].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.14);

          gain.gain.setValueAtTime(0.01, ctx.currentTime + idx * 0.14);
          gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + idx * 0.14 + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.14 + 1.2);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime + idx * 0.14);
          osc.stop(ctx.currentTime + idx * 0.14 + 1.25);
        });
      }
    } catch {
      // AudioContext fallback
    }
    setTimeout(() => setIsChiming(false), 1200);
  };

  const handleOpenModal = () => {
    setModalData({
      imageUrl: astrolabePhoto,
      titleAr: 'إسطرلاب فلكي إسلامي نحاسي أندلسي أثري (4K Masterpiece)',
      titleEn: 'Classical Islamic Brass Planispheric Astrolabe (10th Century)',
      subtitleAr: 'تحفة علم الفلك الإسلامي لحساب المواقيت وارتفاعات الكواكب وتحديد القبلة',
      subtitleEn: 'Masterwork of Medieval Islamic Astronomy, Qibla Cartography & Trigonometry',
      descriptionAr:
        'إسطرلاب كروي ومسطح من النحاس الأصفر المصبوب، من صناعة فلكيي الأندلس وبغداد في العصر الذهبي للحضارة الإسلامية. يتميز بشبكة العنكبوت المفرغة التي تحمل أسماء النجوم العربية الأصيلة ودائرة البروج الاثني عشر، والصفيحة المقنطرة المنقوشة بدوائر الارتفاع والسموت، والعضادة الخلفية لحساب الظل وظل القامة بدقة حساب المثلثات الكروية.',
      descriptionEn:
        'Museum-grade 4K photographic view of an authentic 10th-century Islamic planispheric astrolabe. Featuring a conformal stereographic projection plate, reticulated zodiac star rete, graduated limb, and trigonometric shadow square alidade engineered to compute prayer times and geographic Qibla vectors.',
      locationAr: 'متحف تاريخ العلوم والتكنولوجيا في الإسلام',
      locationEn: 'Museum of the History of Science & Technology in Islam',
      dateOrEraAr: 'القرن الرابع الهجري / العاشر الميلادي (العصر الذهبي للفلك)',
      dateOrEraEn: '4th Century AH / 10th Century CE (Islamic Golden Age)',
    });
  };

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fbfbf8] via-[#f5f4ed] to-[#ebe8db] border-amber-300 shadow-amber-950/15'
          : 'bg-gradient-to-b from-[#121008] via-[#1a170c] to-[#14120a] border-amber-500/30 shadow-black/80'
      }`}
    >
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-amber-100 border-amber-400 text-amber-900'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}
          >
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {isArabic
                ? 'الإسطرلاب الفلكي الإسلامي ومحدد القبلة الكروي (Astrolabe & Qibla Lab)'
                : 'Classical Islamic Astrolabe & Spherical Trigonometry Qibla Studio'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'محاكاة تفاعلية للإسطرلاب النحاسي الأندلسي، وحساب سمت القبلة بالمثلثات الكروية ومواقيت الصلاة الفلكية'
                : 'Interactive planispheric astrolabe, spherical trigonometry Qibla vector & astronomical solar physics'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={playSacredAdhanChord}
            className={`px-3 py-1.5 rounded-xl border text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
              isChiming
                ? 'bg-amber-400 text-black border-amber-300 scale-102 ring-2 ring-white'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-black'
            }`}
            title={isArabic ? 'نغمة مقام الرصد الفلكي' : 'Play Astronomical Adhan Chord'}
          >
            <Volume2 className={`w-3.5 h-3.5 ${isChiming ? 'animate-bounce' : ''}`} />
            <span>{isArabic ? 'صوت المقام' : 'Maqam Chime'}</span>
          </button>

          <button
            onClick={handleOpenModal}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{isArabic ? 'فحص الإسطرلاب 4K' : 'Inspect 4K Astrolabe'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Astrolabe Visual & Hotspots vs Qibla Vector Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5 items-stretch">
        {/* Left Column: 4K Astrolabe Photo with Hotspots */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black select-none group">
            <img
              src={astrolabePhoto}
              alt="Classical Islamic Astrolabe"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.05]"
            />

            {/* Interactive Hotspot Markers */}
            {ASTROLABE_HOTSPOTS.map((spot) => {
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
                        isActive ? 'bg-amber-400' : 'bg-amber-500/50'
                      }`}
                    />
                    <span
                      className={`absolute w-6 h-6 rounded-full border-2 ${
                        isActive
                          ? 'border-amber-300 bg-amber-400/30'
                          : 'border-white/80 bg-black/40 group-hover/btn:border-amber-400'
                      }`}
                    />
                    <div
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                        isActive
                          ? 'bg-amber-400 scale-125 ring-2 ring-white text-black'
                          : 'bg-white group-hover/btn:bg-amber-300'
                      }`}
                    >
                      <Sparkles className="w-2 h-2 text-black" />
                    </div>

                    <div
                      className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                        isActive
                          ? 'bg-amber-500 text-black border-white opacity-100 scale-100'
                          : 'bg-black/85 text-amber-300 border-amber-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                      }`}
                    >
                      {isArabic ? spot.titleAr : spot.titleEn}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Bottom Metadata Bar */}
            <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/40 text-white z-10">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'إسطرلاب قرطبة النحاسي المذهب' : 'Cordoba Brass Astrolabe'}
              </span>
              <span className="text-[10px] font-mono text-amber-400 font-bold">
                ANDALUSIAN-ASTROLABE-357H
              </span>
            </div>
          </div>

          {/* Hotspot Drawer */}
          <div
            className={`mt-4 p-4 rounded-xl border text-xs transition-all ${
              isLight
                ? 'bg-amber-100/70 border-amber-300 text-amber-950'
                : 'bg-black/40 border-amber-500/25 text-amber-200/90'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-400">
                {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
              </span>
              <h5 className="font-black text-sm text-amber-300">
                {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
              </h5>
            </div>
            <p className="mt-1.5 leading-relaxed text-slate-300">
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>
            <div className="mt-2 text-[11px] font-medium text-amber-400/90 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 shrink-0 text-amber-500" />
              <span>
                <strong>{isArabic ? 'التحليل الفيزيائي والفلكي: ' : 'Astronomical Mechanism: '}</strong>
                {isArabic ? activeHotspot.technicalDetailsAr : activeHotspot.technicalDetailsEn}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Qibla Vector & Spherical Trigonometry */}
        <div
          className={`lg:col-span-6 p-5 rounded-2xl border flex flex-col justify-between ${
            isLight
              ? 'bg-white/90 border-amber-300 shadow-sm'
              : 'bg-black/50 border-amber-500/30 shadow-xl'
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
              <h4 className="text-xs md:text-sm font-black text-amber-400 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-500" />
                {isArabic ? 'حاسبة اتجاه القبلة بالمثلثات الكروية (Qibla Trigonometry)' : 'Spherical Trigonometry Qibla Vector'}
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 font-bold">
                AL-BIRUNI-FORMULA
              </span>
            </div>

            {/* City Preset Buttons */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                {isArabic ? 'اختر المدينة لحساب سمت القبلة والمسافة للكعبة:' : 'Select City for Qibla Bearing & Distance:'}
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                {QIBLA_CITIES.map((c) => {
                  const isSelected = selectedCity.id === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCity(c);
                        playSacredAdhanChord();
                      }}
                      className={`p-2 rounded-xl text-center border text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500 text-black border-amber-400 font-black shadow-md'
                          : isLight
                          ? 'bg-amber-50 border-amber-200 text-amber-950 hover:bg-amber-100'
                          : 'bg-stone-900 border-amber-500/20 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div>{isArabic ? c.nameAr : c.nameEn}</div>
                      <div className="text-[9px] opacity-75 font-mono">
                        {isArabic ? c.countryAr : c.countryEn}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visual Dynamic Rotating Compass Dial */}
            <div className="flex flex-col sm:flex-row items-center justify-around gap-4 p-4 rounded-xl border border-amber-500/20 bg-black/40">
              {/* Compass SVG with Qibla Needle */}
              <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Outer Dial Circle */}
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#d97706" strokeWidth="1.5" strokeDasharray="2,2" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#f59e0b" strokeWidth="0.8" opacity="0.6" />

                  {/* Cardinal Points */}
                  <text x="50" y="12" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">N</text>
                  <text x="90" y="53" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">E</text>
                  <text x="50" y="94" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle">S</text>
                  <text x="10" y="53" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle">W</text>

                  {/* Rotating Qibla Needle */}
                  <g
                    transform={`rotate(${qiblaAzimuth}, 50, 50)`}
                    className="transition-transform duration-700 ease-out"
                  >
                    {/* Golden Arrow towards Qibla */}
                    <polygon points="50,15 54,50 46,50" fill="#f59e0b" filter="drop-shadow(0 0 4px #fbbf24)" />
                    {/* Counter Balance towards opposite */}
                    <polygon points="50,75 53,50 47,50" fill="#475569" />
                    <circle cx="50" cy="50" r="3.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
                    {/* Kaaba Symbol at tip */}
                    <rect x="47.5" y="11" width="5" height="5" fill="#000000" stroke="#fef08a" strokeWidth="0.8" />
                  </g>
                </svg>
              </div>

              {/* Bearing Telemetry */}
              <div className="space-y-2 text-center sm:text-start">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                    {isArabic ? 'زاوية سمت القبلة من الشمال الحقيقي:' : 'Qibla Azimuth Bearing from True North:'}
                  </span>
                  <div className="text-3xl font-mono font-black text-amber-400">
                    {qiblaAzimuth}°
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-amber-500/20">
                  <div>
                    <span className="text-[9px] text-slate-400 block font-bold">
                      {isArabic ? 'المسافة إلى مكة:' : 'Distance to Kaaba:'}
                    </span>
                    <span className="font-mono font-bold text-amber-300">
                      {distanceKm.toLocaleString()} km
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block font-bold">
                      {isArabic ? 'إحداثيات المدينة:' : 'Coordinates:'}
                    </span>
                    <span className="font-mono text-slate-300 text-[10px]">
                      {selectedCity.lat.toFixed(1)}°N, {selectedCity.lng.toFixed(1)}°E
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Astrolabe Alidade & Solar Altitude Controls */}
            <div className="p-3.5 rounded-xl border border-amber-500/20 bg-black/30 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  {isArabic ? 'زاوية العضادة وارتفاع الشمس (Solar Altitude h):' : 'Alidade Sighting Altitude h:'}
                </span>
                <span className="font-mono font-black text-amber-300 text-sm">
                  {alidadeAngle}°
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="85"
                value={alidadeAngle}
                onChange={(e) => setAlidadeAngle(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />

              <div className="pt-2 border-t border-amber-500/10">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-amber-500" />
                    {isArabic ? 'دوران صفيحة العنكبوت والنجوم (Rete Celestial Spin):' : 'Rete Celestial Star Spin:'}
                  </span>
                  <span className="font-mono font-black text-amber-300 text-sm">
                    {reteRotation}°
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={reteRotation}
                  onChange={(e) => setReteRotation(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-black/40 border border-amber-500/20">
                  <span className="text-[9px] text-slate-400 block font-bold">
                    {isArabic ? 'زاوية سمت الرأس (Zenith z):' : 'Zenith Angle z:'}
                  </span>
                  <span className="font-mono font-bold text-amber-300">{solarZenith}°</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-amber-500/20">
                  <span className="text-[9px] text-slate-400 block font-bold">
                    {isArabic ? 'نسبة ظل القامة (Cotangent):' : 'Shadow Ratio cot(h):'}
                  </span>
                  <span className="font-mono font-bold text-amber-300">{shadowRatio}</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-amber-500/20">
                  <span className="text-[9px] text-slate-400 block font-bold">
                    {isArabic ? 'دوران العنكبوت (Rete):' : 'Rete Spin:'}
                  </span>
                  <span className="font-mono font-bold text-amber-300">{reteRotation}°</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mathematical Formula Quote */}
          <div
            className={`mt-4 p-2.5 rounded-xl border text-[11px] font-mono leading-relaxed text-center ${
              isLight
                ? 'bg-amber-50 border-amber-200 text-amber-950'
                : 'bg-black/60 border-amber-500/20 text-amber-300/90'
            }`}
          >
            tan(q) = sin(Δλ) / [cos(φ₁)·tan(φ₂) - sin(φ₁)·cos(Δλ)]
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <HiResImageModal
        isOpen={Boolean(modalData)}
        onClose={() => setModalData(null)}
        data={modalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};
