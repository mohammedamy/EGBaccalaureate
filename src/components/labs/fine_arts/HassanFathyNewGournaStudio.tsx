import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  Building2,
  Wind,
  Thermometer,
  Compass,
} from 'lucide-react';
import hassanFathyPhoto from '../../../assets/fine_arts/hassan_fathy_new_gourna_1945.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface FathyHotspot {
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

export const FATHY_HOTSPOTS: FathyHotspot[] = [
  {
    id: 'adobe_mud_brick_materiality',
    xPct: 82.0,
    yPct: 24.0,
    titleAr: 'طوب الطين النيلي والتبن (المادة البيئية المستدامة)',
    titleEn: 'Adobe Mud Brick & Straw (Zero-Carbon Earth Masonry)',
    categoryAr: 'علم المواد والكتلة الحرارية',
    categoryEn: 'Material Science & Thermal Mass',
    descAr:
      'اعتمد حسن فتحي في بناء قرية القرنة الجديدة على قالب الطين النيلي الطبيعي المجفف بالشمس والمقوّى بألياف التبن (القش المفروم) والرمل. يتميز الطين بسعة حرارية مرتفعة جداً وموصلية حرارية منخفضة، مما يمنع انتقال حرارة الصيف اللافحة (تتجاوز 45°م في الأقصر) إلى داخل المنازل نهاراً، ويُطلق الدفء تدريجياً خلال ليالي الشتاء الباردة.',
    descEn:
      'Hassan Fathy based the construction of New Gourna on sun-dried Nile silt adobe bricks tempered with chopped straw (tibn) and sand. Mud brick boasts extraordinary thermal inertia and low thermal conductivity, blocking oppressive desert heat (exceeding 45°C in Luxor) by day while radiating absorbed warmth into rooms during chilly winter nights.',
    scientificInsightAr:
      'يبلغ التأخير الحراري (Thermal Lag) لجدار من الطوب النيئ بسماكة 50 سم حوالي 10 إلى 12 ساعة، ما يعني أن ذروة الحرارة الخارجية وقت الظهيرة لا تصل للداخل إلا بعد منتصف الليل حين تكون النوافذ مفتوحة للتهوية.',
    scientificInsightEn:
      'A 50 cm thick adobe mud wall provides a thermal lag of 10-12 hours, ensuring that peak midday solar radiation only penetrates indoors around midnight when night breezes flush the interior.',
  },
  {
    id: 'nubian_vault_without_centering',
    xPct: 18.0,
    yPct: 65.0,
    titleAr: 'القبو النوبي الإهليلجي دون شدات خشبية (Nubian Vault)',
    titleEn: 'Nubian Vault Construction Without Timber Centering',
    categoryAr: 'الهندسة الإنشائية ونظم التسقيف',
    categoryEn: 'Structural Engineering & Masonry Vaulting',
    descAr:
      'استلهم فتحي تقنية تسقيف نوبية عبقرية تعود لآلاف السنين في قرى غرب أسوان: بناء عقود وقباب إهليلجية عبر رص الطوب بميل مائل بزاوية 68° مسنوداً على جدار قائم في النهاية. تتيح هذه الطريقة تشييد سقوف حجرية متينة دون الحاجة إلى شدات أو سقالات خشبية باهظة التكلفة، مما حرر الفلاحين من استيراد الأخشاب والحديد.',
    descEn:
      'Fathy revived an ancient Nubian vaulting technique from villages west of Aswan: parabolic masonry vaults built by leaning sun-dried bricks at an inclined angle of 68 degrees against an end gabled wall. This eliminated the need for costly imported timber formwork or centering scaffolding, liberating rural builders from industrial dependencies.',
    scientificInsightAr:
      'يتبع منحنى القبو خط السلسلة المعكوس (Inverted Catenary Curve: y = a·cosh(x/a))، حيث تكون كافة القوى الإنشائية قوى ضغط صافية (Pure Compression) دون أي قوى شد (Tension) تعجز مونة الطين عن تحملها.',
    scientificInsightEn:
      'The vault follows an inverted catenary curve ($y = a \cosh(x/a)$), ensuring that all structural loads resolve into pure axial compressive thrust with zero tensile stress upon unreinforced adobe.',
  },
  {
    id: 'malqaf_windcatcher_passive_cooling',
    xPct: 82.0,
    yPct: 52.0,
    titleAr: 'الملقف الهوائي والتبريد التبخيري السلبي (Al-Malqaf)',
    titleEn: 'The Malqaf Windcatcher & Evaporative Passive Cooling',
    categoryAr: 'الديناميكا الحرارية والتهوية الطبيعية',
    categoryEn: 'Thermodynamics & Bioclimatic Airflow',
    descAr:
      'الملقف هو برج تهوية تقليدي يعلو سقف المنزل، وظيفته التقاط نسائم الهواء الشمالية الغربية العليلة النقية من المستويات المرتفعة، وتوجيهها لأسفل عبر مسار هوائي يمر فوق أوانٍ فخارية مسامية ممتلئة بالماء (*الأزيار*) أو نافورة رطبة. يؤدي التبخير إلى خفض درجة حرارة الهواء الداخل بما يصل إلى 10 درجات مئوية وزيادة رطوبته النسبية.',
    descEn:
      'The Malqaf is an elevated rooftop ventilation scoop oriented northwest to capture cool, dust-free prevailing breezes. The descending air passes over porous earthenware water jars (zir) or a wet fountain basin, triggering natural evaporative cooling that drops incoming air temperatures by up to 10°C while augmenting humidity.',
    scientificInsightAr:
      'يعمل الملقف بالتكامل مع الشخشيخة (Shukhsheikha) المقببة في منتصف السقف؛ إذ يدخل الهواء البارد الثقيل من الملقف ويهبط للأسفل، بينما يُطرد الهواء الساخن الخفيف للأعلى بفعل تأثير المدخنة الحرارية (Thermal Stack Effect).',
    scientificInsightEn:
      'The windcatcher operates synergistically with a central ceiling lantern dome (shukhsheikha): cool dense air sinks into living spaces, displacing hot buoyant air upward via the thermal stack effect.',
  },
  {
    id: 'courtyard_fina_microclimate',
    xPct: 52.0,
    yPct: 48.0,
    titleAr: 'الفناء الداخلي المنظم للمناخ المصغر (Al-Fina’ Courtyard)',
    titleEn: 'Central Courtyard & Microclimatic Thermal Buffer',
    categoryAr: 'التصميم البيئي وتخطيط الفراغات',
    categoryEn: 'Environmental Planning & Spatial Microclimate',
    descAr:
      'الفناء السماوي المفتوح هو قلب البيت في عمارة حسن فتحي؛ إذ يعمل كخزان حراري ومضخة هواء طبيعية. خلال الليل، يُشع الفناء حرارته نحو السماء الصافية فيمتلئ بالهواء البارد الثقيل الذي يتسلل إلى الغرف المجاورة. وفي ساعات النهار الحارة، تظل أرضية الفناء المظللة بالجدران العالية محتفظة بالبرودة، كاسرة حدة الجفاف الصحراوي.',
    descEn:
      'The open-air courtyard is the functional nucleus of Fathy’s residential design, acting as a microclimatic thermal reservoir. At night, the courtyard radiates absorbed heat into the clear sky, filling with cool dense air that settles into adjacent rooms. During scorching days, tall perimeter walls shield the courtyard from direct sun, preserving cool pockets.',
    scientificInsightAr:
      'النسبة الهندسية بين عرض الفناء وارتفاع جدرانه (H/W > 1.5) تحجب ما يزيد عن 70% من الإشعاع الشمسي المباشر عن أرضية الفناء خلال ساعات النهار الأكثر قيظاً.',
    scientificInsightEn:
      'An aspect ratio where perimeter wall height exceeds courtyard width (H/W > 1.5) blocks over 70% of direct solar radiation from striking the courtyard floor during peak summer sun.',
  },
  {
    id: 'architecture_for_the_poor_philosophy',
    xPct: 48.0,
    yPct: 78.0,
    titleAr: 'فلسفة عمارة الفقراء والبناء التشاركي (Architecture for the Poor)',
    titleEn: 'Architecture for the Poor & Cooperative Self-Building',
    categoryAr: 'الفلسفة المعمارية والعدالة الاجتماعية',
    categoryEn: 'Architectural Philosophy & Social Justice',
    descAr:
      'نشر فتحي كتابه العالمي "عمارة الفقراء" عام 1969، وثّق فيه تجربة بناء قرية القرنة بالتعاون مع السكان المحليين لتهجيرهم من مقابر وادي الملوك. وضع فتحي نموذجاً عالمياً للعدالة الإسكانية: تمكين الفلاحين من تشييد مساكنهم بأنفسهم باستخدام خامات بيئتهم دون تكلفة رأسمالية، مؤكداً أن العمارة يجب أن تكون مرآة لكرامة الإنسان وهويته الثقافية.',
    descEn:
      'In his landmark 1969 treatise *Architecture for the Poor*, Fathy documented the planning of New Gourna in collaboration with local artisans. He established an internationally acclaimed manifesto for housing equity: empowering communities to construct their own homes using indigenous earth materials without foreign debt, proving that architecture must express human dignity and cultural roots.',
    scientificInsightAr:
      'كرمت الأمم المتحدة ومنظمة اليونسكو وجائزة الآغا خان حسن فتحي بمنحه أول جائزة نوبل بديلة (Right Livelihood Award) عام 1980 لريادته في العمارة البيئية المستدامة.',
    scientificInsightEn:
      'The United Nations and Aga Khan Award honored Fathy with the inaugural Right Livelihood Award in 1980, recognizing his visionary leadership in vernacular ecological sustainability.',
  },
];

export const HassanFathyNewGournaStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<FathyHotspot>(FATHY_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Engine Mode: 'passive_cooling' | 'catenary_vault'
  const [engineMode, setEngineMode] = useState<'passive_cooling' | 'catenary_vault'>('passive_cooling');

  // Passive Cooling Parameters
  const [ambientTemp, setAmbientTemp] = useState<number>(44); // °C outdoor Luxor
  const [windSpeed, setWindSpeed] = useState<number>(5); // m/s
  const [isZirActive, setIsZirActive] = useState<boolean>(true); // Evaporative clay jars active

  // Catenary Vault Parameters
  const [vaultSpanMeters, setVaultSpanMeters] = useState<number>(3.6); // m
  const [vaultRiseMeters, setVaultRiseMeters] = useState<number>(2.4); // m

  // Cooling Calculation Engine
  const coolingMetrics = useMemo(() => {
    // Thermal lag reduction from 50cm adobe wall
    const adobeDamping = 8.5; // °C drop from high thermal mass
    // Evaporative drop from water jars (zir) & airflow
    const evaporativeDrop = isZirActive ? Math.min(6.5, 2.5 + windSpeed * 0.4) : 0.8;
    const internalTemp = Math.round((ambientTemp - adobeDamping - evaporativeDrop) * 10) / 10;
    const totalReduction = Math.round((ambientTemp - internalTemp) * 10) / 10;

    let comfortStatusAr = 'مريح حرارياً وطبيعي';
    let comfortStatusEn = 'Bioclimatically Comfortable';

    if (internalTemp > 32) {
      comfortStatusAr = 'مقبول صحراوياً مع تهوية مستمرة';
      comfortStatusEn = 'Acceptable Desert Buffer';
    } else if (internalTemp <= 28) {
      comfortStatusAr = 'بيئة مثالية ورطوبة منعشة';
      comfortStatusEn = 'Optimal Fresh Indoor Comfort';
    }

    return {
      adobeDamping,
      evaporativeDrop,
      internalTemp,
      totalReduction,
      comfortStatusAr,
      comfortStatusEn,
    };
  }, [ambientTemp, windSpeed, isZirActive]);

  const modalData: HiResImageModalData = useMemo(
    () => ({
      imageUrl: hassanFathyPhoto,
      titleAr: 'مخطط عمارة الفقراء وقرية القرنة الجديدة — حسن فتحي 1945',
      titleEn: 'Architecture for the Poor & New Gourna Folio — Hassan Fathy 1945',
      subtitleAr: 'لوحات معمارية مرسومة يدوياً وقالب طين نيلي نوبي ومسطرة ومقاييس هندسية',
      subtitleEn: 'Hand-drafted Watercolor Elevation Plates, Adobe Brick & Architectural Tools',
      descriptionAr:
        'المشروع المعماري الأكثر تأثيراً في تاريخ العمارة البيئية المستدامة بالشرق الأوسط. وضع حسن فتحي في قرية القرنة الجديدة (الأقصر 1945) أصول العمارة الطينية المستدامة بالقبو النوبي والملقف الهوائي والفناء الداخلي، محرراً البناء من الأسمنت المستورد ومحققاً تكييفاً طبيعياً رائعاً في قلب صحراء الصعيد.',
      descriptionEn:
        'The most influential architectural masterwork in Middle Eastern bioclimatic sustainability. At New Gourna (Luxor, 1945), Hassan Fathy demonstrated how vernacular Nubian mud vaults, rooftop malqaf windcatchers, and shaded courtyards produce natural climate control with zero electrical energy or imported concrete.',
      locationAr: 'قرية القرنة الجديدة، البر الغربي، الأقصر، مصر',
      locationEn: 'New Gourna Village, West Bank, Luxor, Egypt',
      dateOrEraAr: '1945 — 1948 (تخطيط وتشييد القرنة الجديدة)',
      dateOrEraEn: '1945 — 1948 (New Gourna Village Master Plan & Construction)',
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
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
                1945 CE • New Gourna, Luxor
              </span>
              <span className="text-xs font-mono text-slate-400">Architecture for the Poor</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              {isArabic ? 'حسن فتحي وعمارة القرنة البيئية 4K' : 'Hassan Fathy: New Gourna Vernacular Architecture 4K'}
            </h2>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 border border-amber-500/30 rounded-xl text-xs">
          <button
            onClick={() => setEngineMode('passive_cooling')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'passive_cooling'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'محاكي الملقف والتبريد' : 'Malqaf Bioclimatic Lab'}
          </button>
          <button
            onClick={() => setEngineMode('catenary_vault')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'catenary_vault'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'القبو النوبي الإهليلجي' : 'Nubian Catenary Vault'}
          </button>
        </div>
      </div>

      {/* 4K Archival Canvas with Hotspots */}
      <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
        <img
          src={hassanFathyPhoto}
          alt="Hassan Fathy New Gourna Architecture 1945"
          className="w-full h-auto max-h-[560px] object-contain mx-auto select-none"
        />

        {/* Hotspots */}
        {FATHY_HOTSPOTS.map((h, idx) => {
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
          <span>{isArabic ? 'جائزة نوبل البديلة 1980' : 'Right Livelihood Award 1980'}</span>
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
              {isArabic ? 'التحليل البيئي والإنشائي: ' : 'Ecological & Structural Analysis: '}
            </strong>
            {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
          </p>
        </div>
      </div>

      {/* Interactive Simulator Engine */}
      {engineMode === 'passive_cooling' ? (
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'محاكي الديناميكا الحرارية للملقف والفناء والأواني الخزفية' : 'Malqaf & Courtyard Bioclimatic Thermodynamics Simulator'}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">Outdoor: {ambientTemp}°C</span>
              <span className="text-emerald-400 font-bold">Indoor: {coolingMetrics.internalTemp}°C</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 font-bold">
                -{coolingMetrics.totalReduction}°C drop
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Airflow Schematic SVG */}
            <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
              <svg viewBox="0 0 340 240" className="w-full max-w-[340px] h-auto overflow-visible">
                {/* House Walls & Dome */}
                <rect x="20" y="100" width="100" height="120" fill="#78350f" fillOpacity="0.3" stroke="#b45309" strokeWidth="1.5" />
                <rect x="220" y="100" width="100" height="120" fill="#78350f" fillOpacity="0.3" stroke="#b45309" strokeWidth="1.5" />

                {/* Central Courtyard Fina' */}
                <rect x="120" y="130" width="100" height="90" fill="#0f172a" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                <text x="170" y="180" fill="#94a3b8" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  Courtyard (الفناء)
                </text>

                {/* High Malqaf Windcatcher Scoop */}
                <polygon points="30,40 75,20 75,100 30,100" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
                <text x="52" y="32" fill="#bae6fd" fontSize="8" fontFamily="monospace" textAnchor="middle">
                  Malqaf (الملقف)
                </text>

                {/* Incoming Wind Arrows */}
                <path d="M10,25 Q30,25 45,45 Q55,75 55,120" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="5 3" />

                {/* Porous Water Jar (Zir) Indicator */}
                {isZirActive && (
                  <g transform="translate(55, 135)">
                    <ellipse cx="0" cy="0" rx="9" ry="12" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="0" y="2" fill="#ffffff" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      ZIR
                    </text>
                  </g>
                )}

                {/* Cooled Air Expanding into Living Area */}
                <path d="M55,150 Q110,170 170,170" fill="none" stroke="#10b981" strokeWidth="2.5" />
                <path d="M170,170 Q240,170 270,140" fill="none" stroke="#10b981" strokeWidth="2.5" />

                {/* Warm Air Evacuating via Central Lantern Shukhsheikha */}
                <path d="M170,150 Q170,95 170,70" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 2" />
                <polygon points="150,70 190,70 170,50" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="170" y="44" fill="#fecdd3" fontSize="8" fontFamily="monospace" textAnchor="middle">
                  Exhaust (الشخشيخة)
                </text>
              </svg>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 mt-2">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-sky-500" /> Incoming Northwest Breeze
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-500" /> Evaporative Cooled Air
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-rose-500" /> Thermal Stack Exhaust
                </span>
              </div>
            </div>

            {/* Controls Side */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-rose-400" />
                    {isArabic ? 'حرارة الجو الخارجي بالأقصر' : 'Outdoor Luxor Ambient Temp'}
                  </span>
                  <span className="font-mono text-rose-400">{ambientTemp}°C</span>
                </label>
                <input
                  type="range"
                  min="32"
                  max="48"
                  step="1"
                  value={ambientTemp}
                  onChange={(e) => setAmbientTemp(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Wind className="w-4 h-4 text-sky-400" />
                    {isArabic ? 'سرعة الرياح الشمالية الغربية' : 'Northwest Wind Velocity'}
                  </span>
                  <span className="font-mono text-sky-400">{windSpeed} m/s</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={windSpeed}
                  onChange={(e) => setWindSpeed(Number(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer"
                />
              </div>

              {/* Water Jar Toggle */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="text-xs font-semibold text-slate-300">
                  {isArabic ? 'تفعيل الأواني الفخارية المسامية (الأزيار)' : 'Enable Evaporative Clay Jars (Al-Zir)'}
                </span>
                <button
                  onClick={() => setIsZirActive(!isZirActive)}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                    isZirActive
                      ? 'bg-sky-600 text-white shadow'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {isZirActive ? (isArabic ? 'مفعل' : 'Active') : (isArabic ? 'معطل' : 'Off')}
                </button>
              </div>

              {/* Comfort Status */}
              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-mono space-y-1">
                <div className="text-slate-400 text-[10px]">{isArabic ? 'حالة التوازن الحراري' : 'Bioclimatic Verdict'}</div>
                <div className="text-emerald-400 font-bold">{isArabic ? coolingMetrics.comfortStatusAr : coolingMetrics.comfortStatusEn}</div>
                <div className="text-[10px] text-slate-400">
                  {isArabic
                    ? `تخفيض الطوب: -${coolingMetrics.adobeDamping}°C | تخفيض التبخير: -${coolingMetrics.evaporativeDrop.toFixed(1)}°C`
                    : `Adobe lag: -${coolingMetrics.adobeDamping}°C | Evaporation: -${coolingMetrics.evaporativeDrop.toFixed(1)}°C`}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Engine Mode 2: Nubian Vault Catenary Inversion Calculator */
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'حاسبة القبو النوبي ومنحنى السلسلة المعكوسة (Catenary Arch)' : 'Nubian Vault Inverted Catenary Arch Calculator'}
              </h3>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {isArabic ? 'زاوية الرص: 68° دون خشب' : '68° Incline • Zero Centering'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Catenary Curve SVG */}
            <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
              <svg viewBox="0 0 340 220" className="w-full max-w-[340px] h-auto overflow-visible">
                {/* Abutment Walls */}
                <rect x="30" y="140" width="35" height="70" fill="#78350f" stroke="#b45309" strokeWidth="1.5" />
                <rect x="275" y="140" width="35" height="70" fill="#78350f" stroke="#b45309" strokeWidth="1.5" />

                {/* Ground */}
                <line x1="10" y1="210" x2="330" y2="210" stroke="#64748b" strokeWidth="1.5" />

                {/* Catenary Arch Curve: y = a * cosh(x/a) */}
                <path
                  d="M65,140 Q170,25 275,140"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3.5"
                />

                {/* Bricks along curve showing 68 deg inclination */}
                {Array.from({ length: 9 }).map((_, i) => {
                  const t = (i + 1) / 10;
                  const x = 65 + t * 210;
                  const y = 140 - Math.sin(t * Math.PI) * 105;
                  return (
                    <circle key={i} cx={x} cy={y} r="3" fill="#facc15" stroke="#78350f" strokeWidth="1" />
                  );
                })}

                {/* Span Dimension */}
                <line x1="65" y1="170" x2="275" y2="170" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
                <text x="170" y="185" fill="#bae6fd" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  Span L = {vaultSpanMeters}m
                </text>

                {/* Rise Dimension */}
                <line x1="170" y1="35" x2="170" y2="140" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
                <text x="180" y="90" fill="#fecdd3" fontSize="9" fontFamily="monospace">
                  H = {vaultRiseMeters}m
                </text>
              </svg>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-2">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-amber-500" /> Pure Compressive Catenary Line
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-yellow-400" /> Adobe Mud Brick Interlock
                </span>
              </div>
            </div>

            {/* Sliders Side */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span>{isArabic ? 'بحر القبو (Vault Span)' : 'Vault Span (Width)'}</span>
                  <span className="font-mono text-amber-400">{vaultSpanMeters} m</span>
                </label>
                <input
                  type="range"
                  min="2.4"
                  max="5.0"
                  step="0.2"
                  value={vaultSpanMeters}
                  onChange={(e) => setVaultSpanMeters(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span>{isArabic ? 'ارتفاع السهم (Vault Rise)' : 'Vault Rise (Height)'}</span>
                  <span className="font-mono text-rose-400">{vaultRiseMeters} m</span>
                </label>
                <input
                  type="range"
                  min="1.6"
                  max="3.2"
                  step="0.1"
                  value={vaultRiseMeters}
                  onChange={(e) => setVaultRiseMeters(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-mono space-y-1">
                <div className="text-slate-400 text-[10px]">{isArabic ? 'القانون الميكانيكي' : 'Mechanics Formula'}</div>
                <div className="text-amber-300 font-bold">y = a · cosh(x / a)</div>
                <p className="text-[11px] text-slate-400 font-sans mt-1">
                  {isArabic
                    ? 'يحقق الشكل الإهليلجي توزيعاً انضغاطياً تاماً للأحمال، ملغياً أي إجهاد شد لا يحتمله الطين.'
                    : 'The catenary curve eliminates tensile stress, converting all gravity loads into safe axial compression.'}
                </p>
              </div>
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
