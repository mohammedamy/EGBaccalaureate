import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Droplets,
  Clock,
  Flag,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import barLevPhoto from '../../../assets/historyLab/october_crossing_barlev_1973.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface BarLevHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  tacticalImpactAr: string;
  tacticalImpactEn: string;
}

export const BARLEV_HOTSPOTS: BarLevHotspot[] = [
  {
    id: 'water_cannons',
    xPct: 35,
    yPct: 42,
    titleAr: 'خراطيم ومضخات المياه التوربينية (ابتكار اللواء باقي زكي يوسف)',
    titleEn: 'High-Pressure Water Cannons (Eng. Baqi Zaki Youssef Innovation)',
    categoryAr: 'سلاح المهندسين العسكريين',
    categoryEn: 'Military Engineers Corps',
    descAr:
      'استخدم الجيش المصري مضخات مياه ألمانية وبريطانية فائقة الضغط تعمل بمحركات ديزل قوية لتصويب نفاثات مائية جبارة تجرف رمال الساتر وتذيبها نحو مياه القناة.',
    descEn:
      'The Egyptian Army deployed high-pressure German and British turbine water pumps mounted on rafts, blasting high-velocity water jets that liquefied and washed the sand into the canal.',
    tacticalImpactAr:
      'نجحت المضخات في إسقاط 3 ملايين متر مكعب من رمال الساتر الترابي في نحو 5 ساعات فقط، مقارنة بتقديرات الخبراء الدوليين التي توقعت 12 إلى 15 ساعة بالمتفجرات.',
    tacticalImpactEn:
      'Displaced 3 million cubic meters of sand in merely 5 hours, baffling international experts who projected 12 to 15 hours using high explosives.',
  },
  {
    id: 'sand_breach',
    xPct: 62,
    yPct: 32,
    titleAr: 'فتحة الساتر الترابي (ارتفاع 20 متراً بزاوية ميل 65 درجة)',
    titleEn: 'Breach Gap in Bar Lev Sand Rampart (20m Height, 65° Slope)',
    categoryAr: 'التحصينات الميدانية لخط بارليف',
    categoryEn: 'Bar Lev Defensive Fortifications',
    descAr:
      'أنشأ الجيش الإسرائيلي ساترًا رملياً جباراً بارتفاع يتراوح بين 18 و22 متراً على طول 160 كم على الضفة الشرقية لمنع خروج أي مركبة مدرعة برمائية.',
    descEn:
      'Israeli forces built a massive continuous sand wall 18–22 meters high along the 160 km eastern bank, designed to prevent amphibious armored vehicles from climbing out.',
    tacticalImpactAr:
      'تم فتح 81 ثغرة في الساتر الترابي على طول الجبهة، مما أتاح فتح ممرات هبوط لصعود الدبابات والمصفحات.',
    tacticalImpactEn:
      'Egyptian engineers carved 81 breaches across the front, creating gentle vehicle access ramps for tanks and armored fighting vehicles.',
  },
  {
    id: 'assault_boats',
    xPct: 58,
    yPct: 78,
    titleAr: 'قوارب الاقتحام المطاطية وموجات المشاة الأولى',
    titleEn: 'Assault Dinghies & First Infantry Wave',
    categoryAr: 'المشاة البواسل (ساعة الصفر)',
    categoryEn: 'Infantry Shock Waves (H-Hour)',
    descAr:
      'عبرت الموجة الأولى المكونة من 8000 جندي قناة السويس في قوارب مطاطية خلال أول 20 دقيقة (14:20) تحت هدير 2000 مدفع مصري يدك خط بارليف.',
    descEn:
      'The first wave of 8,000 soldiers crossed the Suez Canal in rubber dinghies within 20 minutes of H-Hour (14:20), covered by an unprecedented barrage from 2,000 Egyptian artillery guns.',
    tacticalImpactAr:
      'تسلق الجنود الساتر الترابي بسلالم الحبال حاملين الصواريخ المضادة للدروع (ماليوتكا وفاجوت) وصواريخ سام 7، وصمدوا في وجه هجمات المدرعات الإسرائيلية المضادة.',
    tacticalImpactEn:
      'Infantry scaled the rampart on rope ladders carrying Malyutka anti-tank guided missiles and SA-7 air-defense systems, shattering initial Israeli armor counter-attacks.',
  },
  {
    id: 'pontoon_bridges',
    xPct: 40,
    yPct: 62,
    titleAr: 'الجسور والكباري الثقيلة (كباري العبور PMP)',
    titleEn: 'Heavy Pontoon Bridges & Tank Crossings',
    categoryAr: 'الجسور العائمة والوصلات التكتيكية',
    categoryEn: 'Floating Tactical Bridges',
    descAr:
      'بناء 10 كباري ثقيلة و10 كباري للمشاة و31 معدية عائمة في زمن قياسي تحت قصف الطيران المعادي، مستخدمين ستائر دخان كثيفة.',
    descEn:
      'Assembled 10 heavy tank pontoon bridges, 10 infantry footbridges, and 31 ferries in record time under air assault, utilizing dense chemical smoke screens.',
    tacticalImpactAr:
      'مكنت الكباري الجيش الثاني والثالث الميدانيين من نقل 100 ألف مقاتل و1000 دبابة إلى قلب سيناء خلال الـ 24 ساعة الأولى من الحرب.',
    tacticalImpactEn:
      'Enabled the 2nd and 3rd Field Armies to transfer 100,000 troops and 1,000 main battle tanks into Sinai within the first 24 hours of combat.',
  },
  {
    id: 'egyptian_flag',
    xPct: 84,
    yPct: 26,
    titleAr: 'رفع العلم المصري على قمة الساتر بشرق القناة',
    titleEn: 'Raising the Egyptian National Flag on Sinai Rampart',
    categoryAr: 'النصر والسيادة الوطنية',
    categoryEn: 'National Sovereignty & Victory',
    descAr:
      'لحظة تاريخية خالدة حين صعد أبطال القوات المسلحة قمة الساتر الترابي وغرسوا علم مصر بألوانه الثلاثة ونسره الذهبي على أرض سيناء المحررة.',
    descEn:
      'The iconic historical moment when Egyptian soldiers planted the tricolor flag on the summit of the shattered Bar Lev rampart on liberated Sinai soil.',
    tacticalImpactAr:
      'تحطيم أسطورة "الجيش الذي لا يقهر" ونظرية الأمن الإسرائيلي، واستعادة الثقة والشرف الوطني للأمة العربية.',
    tacticalImpactEn:
      'Shattered the myth of the "invincible army" and the Israeli strategic defense doctrine, restoring Arab national dignity.',
  },
];

export const BarLevCrossingStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<BarLevHotspot>(BARLEV_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  // Hydraulic Simulator Controls
  const [pumpPressureBar, setPumpPressureBar] = useState<number>(15); // kg/cm2
  const [flowRateGpm, setFlowRateGpm] = useState<number>(2000); // gallons per minute
  // Hydraulic Calculations (Fluid Physics: Torricelli / Bernoulli)
  const exitVelocityMs = useMemo(() => {
    // v = sqrt(2 * P / rho), where P in Pa (1 bar = 100,000 Pa), rho_water = 1000 kg/m3
    const pressurePa = pumpPressureBar * 100000;
    return Math.sqrt((2 * pressurePa) / 1000);
  }, [pumpPressureBar]);

  const flowRateM3Hr = useMemo(() => {
    // 1 gpm = 0.227124 m3/hr
    return flowRateGpm * 0.227124;
  }, [flowRateGpm]);

  const sandErosionRateM3Hr = useMemo(() => {
    // Empirical dredging formula: rate proportional to dynamic pressure * flow
    // At 15 bar and 2000 gpm, rate is ~ 350 m3/hr
    const factor = (pumpPressureBar / 15) * (flowRateGpm / 2000) * 350;
    return Math.round(factor);
  }, [pumpPressureBar, flowRateGpm]);

  // Target standard breach volume is 1,500 m3 of sand for a single ramp opening
  const breachTimeHours = useMemo(() => {
    const hours = 1500 / Math.max(sandErosionRateM3Hr, 1);
    return Math.max(0.5, Number(hours.toFixed(1)));
  }, [sandErosionRateM3Hr]);

  const openFullModal = () => {
    setModalData({
      imageUrl: barLevPhoto,
      titleAr: 'ملحمة العبور وإسقاط خط بارليف — 6 أكتوبر 1973م (العاشر من رمضان 1393هـ)',
      titleEn: 'The Crossing of the Suez Canal & Collapse of the Bar Lev Line (Oct 6, 1973)',
      subtitleAr: 'ملحمة عبور قناة السويس وتجريف الساتر الترابي بالمضخات الهيدروليكية العالية',
      subtitleEn: 'The Historic Assault Crossing & Hydraulic Demolition of Bar Lev',
      dateOrEraAr: 'حرب أكتوبر المجيدة (1973م) — العاشر من رمضان 1393هـ',
      dateOrEraEn: 'October 1973 War (Yom Kippur War) — 10th of Ramadan 1393 AH',
      locationAr: 'قناة السويس — خط بارليف وشبه جزيرة سيناء (مصر)',
      locationEn: 'Suez Canal — Bar Lev Fortifications, Sinai Peninsula (Egypt)',
      descriptionAr:
        'صورة وثائقية تاريخية تسجل اللحظات المجيدة لاقتحام الجيش المصري لقناة السويس في تمام الساعة الثانية وخمس دقائق ظهراً يوم 6 أكتوبر 1973. تُظهر الصورة مضخات المياه التوربينية عالية الضغط التي ابتكرها اللواء باقي زكي يوسف وهي تذيب الساتر الترابي البالغ ارتفاعه 20 متراً، وتدفق زوارق المشاة والجسور العائمة لمرور الدبابات ورفع العلم المصري خفاقاً في سيناء.',
      descriptionEn:
        'Historical documentary photograph recording the heroic assault crossing of the Suez Canal by the Egyptian Armed Forces at 14:05 hours on October 6, 1973. Depicts high-pressure water turbines (engineered by Gen. Baqi Zaki Youssef) pulverizing the 20-meter sand rampart of the Bar Lev Line, assault infantry dinghies, pontoon bridges, and the raising of the Egyptian flag in Sinai.',
    });
  };

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-gradient-to-b from-slate-50 via-emerald-50/20 to-slate-100 border-emerald-200 shadow-sm text-slate-900'
          : 'bg-gradient-to-b from-slate-950 via-stone-900 to-emerald-950/20 border-emerald-500/20 shadow-xl text-stone-100'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-emerald-500/20 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 via-stone-800 to-emerald-900 flex items-center justify-center text-white shadow-lg border border-red-500/30">
            <Flag className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-black tracking-tight">
                {isArabic ? 'استوديو ملحمة العبور وهندسة إسقاط خط بارليف (1973م)' : 'Bar Lev Crossing & Hydraulic Engineering Studio (1973)'}
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                🇪🇬 6th October 1973
              </span>
            </div>
            <p className="text-xs text-emerald-400/80">
              {isArabic
                ? 'فحص ملحمة العبور، فيزياء نفاثات المياه لتجريف الساتر الترابي، والجدول التكتيكي لساعة الصفر'
                : 'Interactive military crossing inspection, water-cannon fluid physics, and H-Hour tactical timeline'}
            </p>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="min-h-[44px] flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs shadow-md transition-all border border-emerald-400/30"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'صورة العبور الأصلية 4K' : 'Original 4K Crossing Photo'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 4K Panoramic Image with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-black group max-h-[500px]">
            <img
              src={barLevPhoto}
              alt="October Crossing 1973"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Pulsing Hotspots */}
            {BARLEV_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{ top: `${spot.yPct}%`, left: `${spot.xPct}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'bg-red-500 text-white scale-125 ring-4 ring-red-400/60 shadow-lg shadow-red-500/50 z-20'
                      : 'bg-stone-900/80 text-emerald-300 hover:bg-emerald-500 hover:text-white border border-emerald-400/60 shadow-md z-10'
                  }`}
                  title={isArabic ? spot.titleAr : spot.titleEn}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-current animate-ping opacity-60 absolute" />
                  <Sparkles className="w-4 h-4" />
                </button>
              );
            })}

            {/* Bottom Overlay Pill */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="line-clamp-1 font-semibold">
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-300 shrink-0">
                14:05 H-Hour
              </span>
            </div>
          </div>

          {/* Hotspot Selector Carousel Pills */}
          <div className="flex flex-wrap gap-1.5">
            {BARLEV_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                      : 'bg-black/30 border-emerald-500/20 text-emerald-200/80 hover:bg-emerald-900/20'
                  }`}
                >
                  {isArabic ? spot.titleAr.split('(')[0] : spot.titleEn.split('(')[0]}
                </button>
              );
            })}
          </div>

          {/* Active Hotspot Deep Card */}
          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-stone-900/60 border-emerald-500/20'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
              </span>
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {isArabic ? 'عنصر استراتيجي' : 'Strategic Element'}
              </span>
            </div>
            <h4 className="text-base font-black mb-1.5 text-emerald-300">
              {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
            </h4>
            <p className="text-xs leading-relaxed mb-3 text-stone-300">
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>
            <div
              className={`p-3 rounded-lg border text-xs leading-relaxed ${
                isLight ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' : 'bg-black/40 border-emerald-500/30 text-emerald-200'
              }`}
            >
              <span className="font-bold block mb-1 text-emerald-400">
                {isArabic ? '🎖️ الأثر التكتيكي والنتيجة الميدانية:' : '🎖️ Tactical Battlefield Impact:'}
              </span>
              {isArabic ? activeHotspot.tacticalImpactAr : activeHotspot.tacticalImpactEn}
            </div>
          </div>
        </div>

        {/* Right Column: Hydraulic Engineering Physics Simulator & Tactical Timeline */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Hydraulic Physics Engine Card */}
          <div
            className={`p-4 rounded-xl border space-y-4 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-black/40 border-emerald-500/20'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                <Droplets className="w-4 h-4 text-emerald-400" />
                <h4>{isArabic ? 'محاكي هيدروليكا تجريف الساتر الترابي:' : 'Hydraulic Sand Breach Simulator:'}</h4>
              </div>
              <span className="font-mono text-[10px] text-emerald-400/80 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                Fluid Mechanics
              </span>
            </div>

            {/* Slider 1: Pump Pressure */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-300 font-medium">
                  {isArabic ? 'ضغط مضخة المياه (Pump Pressure P):' : 'Pump Pressure P:'}
                </span>
                <span className="font-mono font-bold text-emerald-300 text-sm">
                  {pumpPressureBar} bar ({pumpPressureBar} kg/cm²)
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="1"
                value={pumpPressureBar}
                onChange={(e) => setPumpPressureBar(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Slider 2: Flow Rate */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-300 font-medium">
                  {isArabic ? 'معدل تدفق المياه (Flow Rate Q):' : 'Water Flow Rate Q:'}
                </span>
                <span className="font-mono font-bold text-emerald-300 text-sm">
                  {flowRateGpm} GPM (~{Math.round(flowRateM3Hr)} m³/hr)
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="3000"
                step="100"
                value={flowRateGpm}
                onChange={(e) => setFlowRateGpm(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Dynamic Physics Telemetry Grid */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-black/50 border border-emerald-500/20">
                <span className="text-[10px] text-stone-400 block font-bold">
                  {isArabic ? 'سرعة الاندفاع:' : 'Jet Velocity v:'}
                </span>
                <span className="font-mono font-bold text-emerald-300 text-sm">{exitVelocityMs.toFixed(1)} m/s</span>
                <span className="text-[9px] text-stone-400 block">v = √(2P/ρ)</span>
              </div>
              <div className="p-2 rounded-lg bg-black/50 border border-emerald-500/20">
                <span className="text-[10px] text-stone-400 block font-bold">
                  {isArabic ? 'معدل تجريف الرمال:' : 'Erosion Rate:'}
                </span>
                <span className="font-mono font-bold text-emerald-300 text-sm">{sandErosionRateM3Hr} m³/h</span>
                <span className="text-[9px] text-stone-400 block">{isArabic ? 'إذابة الرمال' : 'Liquefaction'}</span>
              </div>
              <div className="p-2 rounded-lg bg-black/50 border border-emerald-500/20">
                <span className="text-[10px] text-stone-400 block font-bold">
                  {isArabic ? 'زمن فتح الثغرة:' : 'Breach Time:'}
                </span>
                <span className="font-mono font-bold text-amber-300 text-sm">{breachTimeHours} hrs</span>
                <span className="text-[9px] text-stone-400 block">per 1500 m³</span>
              </div>
            </div>

            {/* Baqi Zaki Youssef Innovation Quote */}
            <div className="p-2.5 rounded-lg border border-emerald-500/20 bg-emerald-950/20 text-[11px] leading-relaxed text-emerald-300/90 flex items-start gap-2">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                {isArabic
                  ? 'فكرة العبقري اللواء باقي زكي يوسف: استلهم فكرة تجريف الساتر الترابي بمدافع المياه من خبرته أثناء عمله مهندساً في بناء السد العالي بأسوان وتجريف جبال الجرانيت والرمال بقوة خراطيم المياه!'
                  : 'Gen. Baqi Zaki Youssef’s brilliant insight was adapted from his civilian engineering experience building the Aswan High Dam, where pressurized water was used for massive earthmoving.'}
              </span>
            </div>
          </div>

          {/* Tactical H-Hour Timeline Card */}
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-black/40 border-emerald-500/20'
            }`}
          >
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
              <Clock className="w-4 h-4 text-emerald-400" />
              <h4>{isArabic ? 'الجدول الزمني التكتيكي لساعة الصفر (6 أكتوبر 1973):' : 'Tactical H-Hour Timeline (Oct 6, 1973):'}</h4>
            </div>

            <div className="space-y-2 text-xs">
              {[
                { time: '14:05', titleAr: 'الضربة الجوية الشاملة (220 طائرة مقاتلة تدك مطارات ومراكز قيادة العدو)', titleEn: 'Air Strike (220 jets hit command nodes)' },
                { time: '14:15', titleAr: 'التمهيد النيراني لأكبر حشد مدفعي في التاريخ الحديث (2000 مدفع)', titleEn: 'Artillery Barrage (2,000 guns hit Bar Lev)' },
                { time: '14:20', titleAr: 'نزول قوارب المشاة الأولى واقتحام الساتر الترابي بسلالم الحبال', titleEn: 'Infantry dinghies launch & scale wall' },
                { time: '18:00', titleAr: 'تشغيل مدافع المياه وفتح أولى الثغرات في الساتر الترابي', titleEn: 'Water pumps open first 81 sand breaches' },
                { time: '20:30', titleAr: 'تركيب الكباري الثقيلة وبدء تدفق الدبابات والأسلحة الثقيلة لسيناء', titleEn: 'Pontoon bridges assembled; armor crosses' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-stone-900/50 border border-emerald-500/10">
                  <span className="font-mono font-bold text-amber-400 text-[11px] bg-black/60 px-1.5 py-0.5 rounded border border-amber-500/30 shrink-0">
                    {item.time}
                  </span>
                  <span className="text-stone-300 leading-tight">
                    {isArabic ? item.titleAr : item.titleEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <HiResImageModal
        isOpen={!!modalData}
        data={modalData}
        onClose={() => setModalData(null)}
        lang={isArabic ? 'ar' : 'en'}
        theme={isLight ? 'light' : isContrast ? 'high-contrast' : 'dark'}
      />
    </div>
  );
};
