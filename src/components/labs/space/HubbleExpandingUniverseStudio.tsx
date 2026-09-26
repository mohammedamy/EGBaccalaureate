import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  RotateCcw,
  TrendingUp,
  Activity,
  Radio,
} from 'lucide-react';
import hubblePhoto from '../../../assets/space/hubble_expanding_universe_1929.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface HubbleHotspot {
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

export const HUBBLE_HOTSPOTS: HubbleHotspot[] = [
  {
    id: 'linear_velocity_distance_plot',
    xPct: 32.0,
    yPct: 48.0,
    titleAr: 'مخطط هابل الخطي وقانون تمدد الكون (Figure 1: v = H₀·d)',
    titleEn: 'Figure 1 Hubble Diagram & Velocity-Distance Law (v = H₀·d)',
    categoryAr: 'علم الكونيات الرصدي',
    categoryEn: 'Observational Cosmology',
    descAr:
      'الرسم البياني التاريخي الشهير المنشور في ورقة هابل عام 1929 في PNAS؛ حيث يمثل المحور الأفقي المسافة بالميجافرسخ (Mpc) والمحور الرأسي سرعة التراجع (km/s). يثبت الخط المستقيم انحداراً طردياً صريحاً يؤكد أن الكون يتمدد بانتظام وأن المجرات الأكثر بعداً تبتعد عنا بسرعة أكبر.',
    descEn:
      'The seminal 1929 PNAS Figure 1 plot establishing the linear correlation between extra-galactic recessional velocity and distance (v = H₀·d), providing humanity’s first direct empirical proof that the universe is physically expanding.',
    scientificInsightAr:
      'أدى اكتشاف هابل إلى اعتراف ألبرت أينشتاين بأن الثابت الكوني (Cosmological Constant) الذي وضعه لمنع تمدد الكون كان "أكبر حماقة في حياته العلمية".',
    scientificInsightEn:
      'Hubble’s empirical proof led Albert Einstein to formally discard his static cosmological constant, famously dubbing it his "biggest blunder".',
  },
  {
    id: 'doppler_spectral_redshift',
    xPct: 75.0,
    yPct: 32.0,
    titleAr: 'الألواح الزجاجية الطيفية والانزياح الدوبلري نحو الأحمر (Redshift)',
    titleEn: 'Spectrographic Glass Plates & Doppler Redshift of Calcium Lines',
    categoryAr: 'التحليل الطيفي الفلكي',
    categoryEn: 'Astronomical Spectroscopy',
    descAr:
      'اللوحان الفوتوغرافيان الزجاجيان من مرصد ماونت ويلسون يوضحان خطوط امتصاص الكالسيوم (H & K lines) لمجرات بعيدة مقارنة بطيف المقارنة المخبري الثابت. يظهر بوضوح انزياح الخطوط نحو الأطوال الموجية الأطول (الطرف الأحمر من الطيف) بتأثير دوبلر النسبي.',
    descEn:
      'The Mount Wilson glass photographic spectrographic plates comparing laboratory emission benchmarks against distant galaxy absorption spectra, visibly exhibiting systematic Doppler displacement of Fraunhofer H and K lines toward longer red wavelengths.',
    scientificInsightAr:
      'يحسب معامل الانزياح الكوني بالعلاقة z = Δλ / λ₀، ويرتبط بالسرعة النسبية v = c·z للسرعات غير الفائقة.',
    scientificInsightEn:
      'Redshift parameter z = (λ_obs - λ_0) / λ_0 directly quantifies cosmic expansion, scaling as v = c·z in non-relativistic regimes.',
  },
  {
    id: 'cepheid_variable_distance',
    xPct: 90.0,
    yPct: 28.0,
    titleAr: 'سلم المسافات الكونية ونجوم القيفاويات المتغيرة (Cepheids)',
    titleEn: 'Cosmic Distance Ladder & Leavitt’s Cepheid Period-Luminosity Law',
    categoryAr: 'القياسات الفلكية للمسافات',
    categoryEn: 'Cosmic Distance Measurement',
    descAr:
      'الجدول الرصدي الذي يحدد مسافات المجرات؛ حيث استند هابل إلى اكتشاف هينريتا ليفيت للعلاقة بين دورة النبض واللمعان الحقيقي لنجوم القيفاويات المتغيرة (Cepheid Variables) في مجرة المرأة المسلسلة (M31) ومجرات أخرى لحساب أبعادها الشاسعة بدقة.',
    descEn:
      'The observational data register relying on Henrietta Swan Leavitt’s Period-Luminosity relation for Cepheid variable stars, which allowed Hubble to calibrate standard candles and calculate definitive mega-parsec distances to extra-galactic nebulae.',
    scientificInsightAr:
      'أثبت رصد القيفاويات في مجرة أندروميدا عام 1924 أن "السدم الحلزونية" ليست سحباً داخل درب التبانة، بل "أكوان جزرية" ومجرات مستقلة هائلة تبعد ملايين السنين الضوئية.',
    scientificInsightEn:
      'Resolving Cepheids in M31 in 1924 proved spiral nebulae are vast independent "island universes" far beyond the borders of our Milky Way galaxy.',
  },
  {
    id: 'mount_wilson_hooker_telescope',
    xPct: 82.0,
    yPct: 68.0,
    titleAr: 'تلسكوب هوكر 100 بوصة وعدسة الرصد المكبرة',
    titleEn: '100-Inch Hooker Reflector Telescope & Optical Loupe',
    categoryAr: 'المراصد العملاقة',
    categoryEn: 'Observatory Instrumentation',
    descAr:
      'أكبر تلسكوب عاكس في العالم في ذلك الوقت (مرصد ماونت ويلسون، كاليفورنيا بمرآة قطرها 2.5 متر)، الذي مكن هابل ومساعده ملتون همايسون من تصوير أطياف المجرات الباهتة للغاية، بجانب عدسة الفحص البصرية وقلم الحبر الأصلي وسجلات الرصد.',
    descEn:
      'The 100-inch (2.5m) Hooker telescope on Mount Wilson, California—the world’s largest aperture at the time—which enabled Edwin Hubble and Milton Humason to resolve individual stars and capture spectra of faint distant galaxies.',
    scientificInsightAr:
      'تطلبت عملية تعريض الألواح الطيفية الزجاجية للمجرات البعيدة توجيه التلسكوب لساعات متواصلة على مدار عدة ليالٍ باردة متتالية.',
    scientificInsightEn:
      'Photographing faint nebular spectra required grueling multi-night exposures manually tracking the telescope across freezing Californian winter nights.',
  },
  {
    id: 'hubble_time_age_universe',
    xPct: 20.0,
    yPct: 78.0,
    titleAr: 'زمن هابل والتقدير الفيزيائي لعمر الكون (t₀ ≈ 1/H₀)',
    titleEn: 'Hubble Time & The Physical Age of the Expanding Cosmos (t₀ ≈ 1/H₀)',
    categoryAr: 'فيزياء الكونيات والزمن',
    categoryEn: 'Cosmic Chronology',
    descAr:
      'الاستنتاج الفيزيائي الفلسفي الثوري المترتب على قانون التمدد: إذا كان الكون يتمدد حالياً، فإن إرجاع شريط الزمن إلى الوراء يعني أن المادة كلها كانت متجمعة في نقطة ابتدائية فائقة الكثافة والحرارة قبل زمن محدد (الانفجار العظيم Big Bang).',
    descEn:
      'The revolutionary cosmological implication of cosmic expansion: extrapolating backward in time dictates that all cosmic matter converged at an initial ultra-dense singularity (the Big Bang), with expansion age approximated by Hubble time t_H = 1/H₀.',
    scientificInsightAr:
      'قدّر هابل الثابت قديماً بـ 500 km/s/Mpc (بسبب خلطه بين نوعين من القيفاويات)، مما أعطى عمراً ظاهرياً قدره مليارا عام فقط، قبل أن تصححه الأرصاد الحديثة إلى ~70 km/s/Mpc ليعطي عمراً حقيقياً يقارب 13.8 مليار عام.',
    scientificInsightEn:
      'Hubble’s initial estimate of H₀ ~ 500 km/s/Mpc (due to Cepheid population confusion) implied a young universe (~2 Gyr), later refined by modern satellite astrometry to H₀ ≈ 70 km/s/Mpc (age ≈ 13.8 Gyr).',
  },
];

interface GalaxyPreset {
  nameAr: string;
  nameEn: string;
  distMpc: number;
  cluster: string;
}

const GALAXY_PRESETS: Record<string, GalaxyPreset> = {
  virgo: { nameAr: 'عنقود العذراء (Virgo Cluster)', nameEn: 'Virgo Cluster', distMpc: 16.5, cluster: 'Virgo' },
  ursa_major: { nameAr: 'عنقود الدب الأكبر (Ursa Major)', nameEn: 'Ursa Major Cluster', distMpc: 300, cluster: 'Ursa Major' },
  corona_borealis: { nameAr: 'عنقود الإكليل الشمالي (Corona)', nameEn: 'Corona Borealis', distMpc: 420, cluster: 'Corona Borealis' },
  bootes: { nameAr: 'عنقود العواء (Bootes Cluster)', nameEn: 'Bootes Cluster', distMpc: 770, cluster: 'Bootes' },
  hydra: { nameAr: 'عنقود الشجاع فائق البعد (Hydra)', nameEn: 'Hydra Cluster', distMpc: 1200, cluster: 'Hydra' },
};

export const HubbleExpandingUniverseStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<HubbleHotspot>(HUBBLE_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Redshift & Expansion Simulator
  const [selectedGalaxyKey, setSelectedGalaxyKey] = useState<string>('ursa_major');
  const [distanceMpc, setDistanceMpc] = useState<number>(300);
  const [hubbleConstantH0, setHubbleConstantH0] = useState<number>(70); // km/s/Mpc

  const applyPreset = (key: string) => {
    setSelectedGalaxyKey(key);
    const g = GALAXY_PRESETS[key];
    if (g) {
      setDistanceMpc(g.distMpc);
    }
  };

  // Speed of light c = 299,792 km/s
  const c = 299792;
  const recessionalVelocity = hubbleConstantH0 * distanceMpc; // km/s
  const beta = recessionalVelocity / c;

  // Relativistic Redshift: z = sqrt((1 + beta)/(1 - beta)) - 1
  const z = beta < 0.99 ? Math.sqrt((1 + beta) / (1 - beta)) - 1 : beta;

  // Calcium K absorption line at rest (deep violet):
  const restLambdaK = 393.37;

  const obsLambdaK = restLambdaK * (1 + z);
  const deltaLambdaK = obsLambdaK - restLambdaK;

  // Hubble Time: t_H = 1 / H0
  // 1 Mpc = 3.0857e19 km, 1 yr = 3.1557e7 s -> conversion factor = 977.8
  const ageGyr = 977.8 / hubbleConstantH0;

  // Cosmic Scale Factor a(t) = 1 / (1 + z)
  const cosmicScaleFactor = 1 / (1 + z);

  const modalData: HiResImageModalData = {
    imageUrl: hubblePhoto,
    titleAr: 'ورقة إدوين هابل الأثرية: تمدد الكون والانزياح نحو الأحمر (١٩٢٩ ميلادية) - ماونت ويلسون',
    titleEn: 'Edwin Hubble PNAS Landmark Paper: The Expanding Universe (1929) - Mount Wilson',
    subtitleAr: 'مخطط هابل الخطي (v = H₀·d)، والانزياح الدوبلري لخطوط الكالسيوم، وتقدير عمر الكون',
    subtitleEn: 'Hubble Linear Plot (v = H₀·d), Calcium Doppler Redshift, and Cosmic Age Estimation',
    descriptionAr:
      'الورقة العلمية التاريخية الأصلية المنشورة في PNAS عام 1929 لإدوين هابل؛ تعرض المخطط الخطي للعلاقة بين المسافة وسرعة التراجع (v = H₀·d)، مع الألواح الزجاجية الفوتوغرافية الطيفية لانزياح خطوط الكالسيوم نحو الأحمر، وعدسة الرصد وسجلات مرصد ماونت ويلسون.',
    descriptionEn:
      'Edwin Hubble’s landmark March 1929 PNAS publication demonstrating cosmic expansion; displaying Figure 1 linear velocity-distance plot (v = H₀·d), spectrographic glass plates showing Doppler redshift of calcium H & K lines, and Mount Wilson 100-inch observation logs.',
    dateOrEraAr: '١٩٢٩ ميلادية (مرصد ماونت ويلسون، كاليفورنيا)',
    dateOrEraEn: '1929 AD (Mount Wilson Observatory, California)',
    locationAr: 'أرشيف معهد كارنيغي للعلوم / مرصد ماونت ويلسون، كاليفورنيا',
    locationEn: 'Carnegie Institution for Science Archives / Mount Wilson Observatory, CA',
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
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-indigo-900/40">
            <Radio className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-semibold text-blue-400">
                {isArabic ? 'ماونت ويلسون • ١٩٢٩ ميلادية' : 'Mount Wilson • 1929 AD'}
              </span>
              <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-medium text-indigo-400">
                {isArabic ? 'قانون هابل لتمدد الكون' : 'Hubble’s Law (v = H₀·d)'}
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">
              {isArabic
                ? 'استوديو هابل: تمدد الكون والانزياح الطيفي نحو الأحمر'
                : 'Hubble Expanding Universe Studio: Doppler Redshift & Cosmic Expansion'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-amber-500 active:scale-95"
        >
          <Maximize2 className="h-4 w-4" />
          {isArabic ? 'فحص الوثيقة بدقة 4K' : 'Inspect 4K Document'}
        </button>
      </div>

      {/* Main Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: 4K Image Canvas with Hotspots */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-xl border border-amber-800/30 bg-black/60 shadow-inner">
            <img
              src={hubblePhoto}
              alt="Hubble 1929 Paper"
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Hotspot Pins */}
            {HUBBLE_HOTSPOTS.map((hotspot) => {
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
                {isArabic ? 'علم الكونيات الرصدي' : 'Cosmological Discovery'}
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
                {isArabic ? 'الدلالة الفيزيائية والرصدية:' : 'Observational & Physical Significance:'}
              </div>
              <p className="mt-1 text-xs leading-normal opacity-95">
                {isArabic ? activeHotspot.scientificInsightAr : activeHotspot.scientificInsightEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Hubble Redshift Simulator */}
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
                <TrendingUp className="h-5 w-5" />
                <span>{isArabic ? 'محاكي الانزياح نحو الأحمر وقانون هابل' : 'Hubble Law & Redshift Simulator'}</span>
              </div>
              <button
                onClick={() => {
                  applyPreset('ursa_major');
                  setHubbleConstantH0(70);
                }}
                className="flex items-center gap-1 text-xs text-amber-400 hover:underline"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                {isArabic ? 'إعادة ضبط' : 'Reset'}
              </button>
            </div>

            {/* Presets */}
            <div className="mt-3">
              <label className="text-xs font-medium text-amber-400">
                {isArabic ? 'عناقيد المجرات النموذجية:' : 'Benchmark Galaxy Clusters:'}
              </label>
              <div className="mt-1.5 grid grid-cols-2 gap-2">
                {Object.entries(GALAXY_PRESETS).map(([key, g]) => (
                  <button
                    key={key}
                    onClick={() => applyPreset(key)}
                    className={`rounded-lg border px-2 py-1.5 text-left text-xs font-medium transition-all ${
                      selectedGalaxyKey === key
                        ? 'border-amber-500 bg-amber-500/20 text-amber-400 font-bold'
                        : 'border-stone-700 text-stone-300 hover:border-amber-500/50'
                    }`}
                  >
                    {isArabic ? g.nameAr : g.nameEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-xs">
                  <span>{isArabic ? 'مسافة المجرة عن الأرض (d):' : 'Galaxy Distance (d):'}</span>
                  <span className="font-mono text-amber-400">{distanceMpc} Mpc ({(distanceMpc * 3.26).toFixed(0)} M ly)</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1500"
                  step="10"
                  value={distanceMpc}
                  onChange={(e) => setDistanceMpc(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs">
                  <span>{isArabic ? 'ثابت هابل (H₀):' : 'Hubble Constant (H₀):'}</span>
                  <span className="font-mono text-amber-400">{hubbleConstantH0} km/s/Mpc</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  step="1"
                  value={hubbleConstantH0}
                  onChange={(e) => setHubbleConstantH0(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>

            {/* Interactive Spectral Shift SVG */}
            <div className="mt-4 rounded-xl bg-stone-950 p-3 border border-stone-800">
              <span className="text-xs font-semibold text-stone-300 block mb-2">
                {isArabic ? 'مقارنة خطوط طيف الكالسيوم (Rest vs Observed):' : 'Calcium H & K Spectral Line Comparison:'}
              </span>

              {/* Rest Spectrum */}
              <div className="text-2xs text-stone-400 mb-1 flex justify-between">
                <span>{isArabic ? 'طيف المقارنة المخبري الثابت (Rest λ₀):' : 'Laboratory Rest Spectrum (λ₀):'}</span>
                <span className="font-mono text-violet-400">393.4 nm (K) & 396.9 nm (H)</span>
              </div>
              <div className="relative h-7 w-full rounded bg-gradient-to-r from-violet-600 via-blue-500 to-red-600 border border-stone-700">
                {/* Rest Line Markers around 393-397 nm (mapped to ~15% width) */}
                <div className="absolute top-0 bottom-0 w-0.5 bg-black" style={{ left: '15%' }} />
                <div className="absolute top-0 bottom-0 w-0.5 bg-black" style={{ left: '17%' }} />
              </div>

              {/* Observed Galaxy Spectrum */}
              <div className="text-2xs text-stone-400 mt-3 mb-1 flex justify-between">
                <span>{isArabic ? 'طيف المجرة المرصود المنزاح (Observed λ):' : 'Observed Redshifted Spectrum (λ):'}</span>
                <span className="font-mono text-red-400">{obsLambdaK.toFixed(1)} nm (+{deltaLambdaK.toFixed(1)} nm)</span>
              </div>
              <div className="relative h-7 w-full rounded bg-gradient-to-r from-violet-600 via-blue-500 to-red-600 border border-stone-700">
                {/* Shifted Line Marker (mapped proportionally: 15% + (z * 65%)) */}
                {(() => {
                  const shiftedPct = Math.min(92, 15 + z * 100);
                  return (
                    <>
                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: `${shiftedPct}%` }} />
                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: `${shiftedPct + 2}%` }} />
                    </>
                  );
                })()}
              </div>
            </div>

            {/* Calculations Dashboard */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'سرعة التراجع (v = H₀·d):' : 'Recessional Velocity (v):'}</span>
                <div className="font-mono text-base font-bold text-red-400">{recessionalVelocity.toLocaleString()} km/s</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'معامل الانزياح الكوني (z):' : 'Redshift Parameter (z):'}</span>
                <div className="font-mono text-base font-bold text-amber-400">{z.toFixed(4)}</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'عمر الكون المقدر (t₀ ≈ 1/H₀):' : 'Estimated Cosmic Age (1/H₀):'}</span>
                <div className="font-mono text-sm text-stone-200">{ageGyr.toFixed(1)} {isArabic ? 'مليار سنة' : 'Billion Years'}</div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-stone-900/70 p-2">
                <span className="text-stone-400">{isArabic ? 'عامل التحجيم الكوني (a):' : 'Cosmic Scale Factor a(t):'}</span>
                <div className="font-mono text-sm text-stone-200">{cosmicScaleFactor.toFixed(3)}</div>
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
export default HubbleExpandingUniverseStudio;
