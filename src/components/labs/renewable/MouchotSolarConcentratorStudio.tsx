import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sun,
  Flame,
  Gauge,
  Sliders,
  Sparkles,
  Snowflake,
  Activity,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import mouchotPhoto from '../../../assets/renewable/mouchot_solar_concentrator_1878.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  technicalInsightAr: string;
  technicalInsightEn: string;
}

export const MOUCHOT_1878_HOTSPOTS: Hotspot[] = [
  {
    id: 'parabolic_solar_reflector',
    x: 52,
    y: 35,
    titleAr: 'العاكس المخروطي المكافئ المطلي بالفضة',
    titleEn: 'Silver-Plated Parabolic Truncated Concentrator',
    categoryAr: 'البصريات المركزة',
    categoryEn: 'Concentrating Optics',
    descAr:
      'عاكس مخروطي شمسي عملاق بقطر يزيد عن 5 أمتار ومساحة فتحة 20 متراً مربعاً، مبطن بصفائح فضية مصقولة ذات انعكاسية بصرية فائقة تعكس وتركز الإشعاع الشمسي المباشر نحو المحور البؤري المركزي بمعدل تركيز يتجاوز 100 ضعف.',
    descEn:
      'A monumental truncated conical solar reflector over 5 meters in diameter with a 20 m² aperture, lined with burnished silver plates exhibiting high optical reflectivity that concentrates direct normal irradiance toward the central focal axis by over 100x.',
    technicalInsightAr:
      'معامل التركيز الهندسي: C = A_aperture / A_receiver. أثبت موشو أن تجميع الأشعة يرفع كثافة التدفق الحراري من 1 كيلوواط/م² إلى درجات كافية لتوليد بخار محمص عالي الضغط.',
    technicalInsightEn:
      'Geometric concentration ratio: C = A_aperture / A_receiver. Mouchot proved that concentrating rays elevates heat flux density from 1 kW/m² to thresholds capable of producing high-pressure superheated steam.',
  },
  {
    id: 'focal_boiler_steam_generator',
    x: 58,
    y: 28,
    titleAr: 'مرجل الامتصاص النحاسي المغلف بالزجاج',
    titleEn: 'Glass-Jacketted Copper Focal Boiler',
    categoryAr: 'الديناميكا الحرارية والامتصاص',
    categoryEn: 'Thermodynamics & Absorption',
    descAr:
      'أنبوب مرجل أسطواني مصنوع من النحاس المطلي بأسود الكربون عالي الامتصاص الحراري، محاط بغلاف زجاجي مزدوج لإنشاء ظاهرة الاحتباس الحراري ومنع فقدان الحرارة بالحمل الحراري والإشعاع تحت حرارة باريس.',
    descEn:
      'A cylindrical boiler tube constructed of copper coated with high-absorptivity carbon black, surrounded by a double concentric glass jacket creating an intense greenhouse trap that curtails convective and radiative thermal dissipation.',
    technicalInsightAr:
      'كفاءة المستقبل الحراري: η_th = α - [ε·σ·(T_rec⁴ - T_amb⁴) + U_conv·(T_rec - T_amb)] / (C · DNI). نجح الغلاف الزجاجي في عزل المرجل ورفع درجة الحرارة إلى 260° مئوية.',
    technicalInsightEn:
      'Receiver thermal efficiency: η_th = α - [ε·σ·(T_rec⁴ - T_amb⁴) + U_conv·(T_rec - T_amb)] / (C · DNI). The glass jacket insulated the boiler, driving steam temperatures to 260°C.',
  },
  {
    id: 'steam_engine_direct_drive',
    x: 37,
    y: 74,
    titleAr: 'محرك البخار المتردد المدار شمسياً',
    titleEn: 'Solar-Driven Reciprocating Steam Engine',
    categoryAr: 'القدرة الميكانيكية',
    categoryEn: 'Mechanical Power',
    descAr:
      'محرك بخاري صناعي متردد بقدرة نصف حصان يعمل بضغط 5 بار تم توليده مباشرة من غليان الماء بواسطة أشعة الشمس في معرض باريس الدولي عام 1878، مستخدماً البخار لتدوير حذافة وضخ مياه النافورة.',
    descEn:
      'An industrial reciprocating steam engine delivering 0.5 horsepower at 5 atmospheres of pressure, generated purely through solar water vaporization at the 1878 Paris Exposition to drive a flywheel and power a decorative water fountain.',
    technicalInsightAr:
      'أول تحويل ميكانيكي صناعي ناجح للطاقة الشمسية إلى حركة دورانية متصلة، متغلباً على الاعتماد المطلق على الفحم الحجري الذي حذر موشو من نضوبه الحتمي.',
    technicalInsightEn:
      'The first historically documented conversion of concentrated solar heat into continuous mechanical rotary motion, mitigating reliance on fossil coal whose exhaustion Mouchot presciently predicted.',
  },
  {
    id: 'carre_ammonia_ice_machine',
    x: 14,
    y: 71,
    titleAr: 'مكثف كاري ومصنع الثلج الشمسي',
    titleEn: 'Carré Absorption Chiller & Solar Ice Machine',
    categoryAr: 'التبريد الشمسي بالامتصاص',
    categoryEn: 'Absorption Solar Refrigeration',
    descAr:
      'جهاز تبريد كيميائي بالامتصاص المطور بواسطة فرديناند كاري وموصل بالمرجل الشمسي. استخدم حرارة الشمس المركزة لتبخير غاز الأمونيا السائل وتبريد حجرة التجميد، مما أنتج قوالب ثلج صلبة وسط شمس الصيف الحارقة.',
    descEn:
      'An absorption refrigeration apparatus developed by Ferdinand Carré coupled directly to the solar boiler. It harnessed concentrated solar heat to distill ammonia refrigerant, freezing water into solid blocks of ice beneath the blazing summer sun.',
    technicalInsightAr:
      'المفارقة الفيزيائية المذهلة: "صنع الجليد بنيران الشمس". يمثل هذا الجهاز الجد الأكبر لأنظمة التبريد الشمسي الحديثة (Solar Thermal Cooling) المستخدمة في المنشآت المستدامة اليوم.',
    technicalInsightEn:
      'The poetic thermodynamic paradox: "making ice from solar fire". This apparatus stands as the direct ancestor of modern solar absorption chillers deployed across modern net-zero buildings.',
  },
  {
    id: 'mouchot_solar_treatise',
    x: 62,
    y: 80,
    titleAr: 'مخطوطة كتاب موشو (حرارة الشمس وتطبيقاتها)',
    titleEn: 'Mouchot 1869 Treatise on Solar Heat',
    categoryAr: 'التاريخ العلمي والتوثيق',
    categoryEn: 'Scientific Treatise',
    descAr:
      'كتاب أوغسطين موشو المؤسس الصادر في باريس عام 1869 بعنوان "La Chaleur Solaire et ses Applications Industrielles"، ويظهر مفتوحاً على رسومات القطوع المكافئة والعدسات الحرارية وبراءات الاختراع المعتمدة.',
    descEn:
      'Augustin Mouchot’s foundational 1869 monograph "La Chaleur Solaire et ses Applications Industrielles", open to mathematical drafts of parabolic geometries, solar tracking axes, and approved French imperial patents.',
    technicalInsightAr:
      'وثّق موشو في كتابه أن كمية الحرارة التي تسقطها الشمس على كوكب الأرض في أسبوع واحد تعادل كل ما أنتجه البشر من فحم عبر التاريخ، واضعاً أول مسودة لعصر الطاقة المتجددة.',
    technicalInsightEn:
      'Mouchot documented that the solar heat incident on Earth in a single week exceeds all coal combustion throughout human history, formulating the earliest scientific blueprint for the renewable energy era.',
  },
];

export const MouchotSolarConcentratorStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(MOUCHOT_1878_HOTSPOTS[0]);
  const [showHiResModal, setShowHiResModal] = useState<boolean>(false);

  // Simulator Inputs
  const [dniWm2, setDniWm2] = useState<number>(850); // W/m² (Direct Normal Irradiance)
  const [apertureDiameterM, setApertureDiameterM] = useState<number>(5.4); // meters diameter
  const [opticalEfficiencyPct, setOpticalEfficiencyPct] = useState<number>(76); // % optical reflectance & intercept
  const [operatingTempC, setOperatingTempC] = useState<number>(220); // steam temperature °C
  const [ambientTempC, setAmbientTempC] = useState<number>(28); // ambient temperature °C

  // Calculations
  const metrics = useMemo(() => {
    const radius = apertureDiameterM / 2;
    const apertureAreaM2 = Math.PI * radius * radius;
    const solarIncidentKw = (apertureAreaM2 * dniWm2) / 1000;
    const opticalEff = opticalEfficiencyPct / 100;

    // Thermal loss coefficient modeling
    const deltaT = operatingTempC - ambientTempC;
    const thermalLossFactor = Math.min(0.35, (deltaT * 0.0012));
    const thermalEfficiency = Math.max(0.2, opticalEff * (1 - thermalLossFactor));
    const thermalPowerOutputKw = solarIncidentKw * thermalEfficiency;

    // Carnot limit
    const tHotK = operatingTempC + 273.15;
    const tColdK = ambientTempC + 273.15;
    const carnotEfficiency = 1 - tColdK / tHotK;
    const actualMechanicalEff = carnotEfficiency * 0.42; // Real reciprocating engine efficiency ratio
    const mechanicalPowerHp = (thermalPowerOutputKw * actualMechanicalEff * 1.34102); // 1 kW = 1.34102 HP

    // Steam production: Latent heat of vaporization h_fg approx 1940 kJ/kg at 220°C
    const enthalpyKjKg = 2100;
    const steamKgPerHour = (thermalPowerOutputKw * 3600) / enthalpyKjKg;

    // Solar ice production: approx 3.2 kg ice per kWh of thermal input in Carré system
    const iceKgPerHour = thermalPowerOutputKw * 2.8;

    return {
      apertureAreaM2: Number(apertureAreaM2.toFixed(1)),
      solarIncidentKw: Number(solarIncidentKw.toFixed(1)),
      thermalEfficiencyPct: Number((thermalEfficiency * 100).toFixed(1)),
      thermalPowerOutputKw: Number(thermalPowerOutputKw.toFixed(2)),
      carnotEfficiencyPct: Number((carnotEfficiency * 100).toFixed(1)),
      mechanicalPowerHp: Number(mechanicalPowerHp.toFixed(2)),
      steamKgPerHour: Number(steamKgPerHour.toFixed(1)),
      iceKgPerHour: Number(iceKgPerHour.toFixed(1)),
    };
  }, [dniWm2, apertureDiameterM, opticalEfficiencyPct, operatingTempC, ambientTempC]);

  const modalData: HiResImageModalData = {
    imageUrl: mouchotPhoto,
    titleAr: 'مجمع أوغسطين موشو الشمسي ومحرك البخار (معرض باريس ۱۸۷۸)',
    titleEn: 'Augustin Mouchot Solar Concentrator & Steam Engine (Paris 1878)',
    subtitleAr: 'أول محطة توليد طاقة شمسية مركزة صناعية في التاريخ البشري',
    subtitleEn: 'The First Industrial Concentrated Solar Power (CSP) Generator in Human History',
    descriptionAr:
      'لوحة أصلية وثائقية نادرة توثق العاكس الشمسي الفضي الرائد الذي بناه العالم الفرنسي أوغسطين موشو وعرضه في حديقة تروكاديرو في معرض باريس الدولي عام 1878. قاد المرجل الشمسي محركاً بخارياً وشغل مصنعاً لإنتاج قوالب الجليد بحرارة الشمس مباشرة، مما أذهل العالم وأسس علم الطاقة الشمسية الحرارية.',
    descriptionEn:
      'Archival plate documenting the pioneering silver-plated parabolic solar concentrator constructed by Augustin Mouchot, exhibited at the 1878 Paris Exposition Universelle. It generated high-pressure steam driving a mechanical engine and an ammonia absorption ice maker, establishing concentrated solar thermal engineering.',
    locationAr: 'معرض باريس العالمي (حديقة تروكاديرو) / معهد كونسرفتوار الفنون والحرف، فرنسا',
    locationEn: 'Exposition Universelle de Paris (Trocadéro Gardens) / CNAM Museum, France',
    dateOrEraAr: '۱۸۷۸ ميلادية (عصر الثورة الصناعية والطاقة البديلة الأولى)',
    dateOrEraEn: '1878 CE (Industrial Revolution & First Solar Power Era)',
  };

  return (
    <div
      className={`space-y-8 p-4 md:p-6 rounded-2xl border transition-all ${
        isContrast
          ? 'bg-black text-yellow-300 border-yellow-400'
          : isLight
          ? 'bg-slate-50 text-slate-900 border-slate-200'
          : 'bg-slate-950 text-slate-100 border-slate-800'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b pb-6 border-amber-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-2">
            <Sun className="w-3.5 h-3.5" />
            <span>{isArabic ? 'رائد الطاقة الشمسية الحرارية (CSP)' : 'Father of Concentrated Solar Power (1878)'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {isArabic ? 'مجمع موشو الشمسي ومحرك البخار (۱۸۷۸)' : 'Augustin Mouchot Solar Concentrator Studio'}
          </h2>
          <p className="text-sm opacity-80 mt-1 max-w-3xl">
            {isArabic
              ? 'دراسة فيزيائية تفاعلية لأول محرك بخاري ومصنع ثلج مدار بتركيز أشعة الشمس في معرض باريس الدولي عام ۱۸۷۸.'
              : 'Interactive engineering analysis of the 1878 Paris Exposition parabolic solar concentrator, steam boiler, and absorption ice chiller.'}
          </p>
        </div>

        <button
          onClick={() => setShowHiResModal(true)}
          className="min-h-[44px] min-w-[44px] px-4 py-2.5 rounded-xl font-medium flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg hover:brightness-110 active:scale-95 transition-all text-sm"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'استعراض اللوحة بدقة 4K' : 'View 4K Archival Plate'}</span>
        </button>
      </div>

      {/* Main Archival Canvas with Hotspots */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black aspect-[4/3] group">
            <img
              src={mouchotPhoto}
              alt="Mouchot Solar Concentrator 1878"
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Hotspot Markers */}
            {MOUCHOT_1878_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  aria-label={isArabic ? spot.titleAr : spot.titleEn}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-all z-10 ${
                    isSelected ? 'scale-125 z-20' : 'hover:scale-110 opacity-90'
                  }`}
                >
                  <span
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all ${
                      isSelected
                        ? 'bg-amber-500 border-white text-black shadow-lg shadow-amber-500/80 ring-4 ring-amber-500/40'
                        : 'bg-slate-900/90 border-amber-400 text-amber-300 backdrop-blur-sm'
                    }`}
                  >
                    <Sun className="w-4 h-4" />
                  </span>
                </button>
              );
            })}

            {/* Live Overlay Caption */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-slate-900/80 border border-slate-700/60 text-xs md:text-sm">
              <span className="font-semibold text-amber-400 block mb-1">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </span>
              <p className="line-clamp-2 opacity-90">
                {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
              </p>
            </div>
          </div>

          {/* Hotspots Selector Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {MOUCHOT_1878_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  className={`min-h-[44px] p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                    isArabic ? 'text-right' : 'text-left'
                  } ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-sm'
                      : isLight
                      ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                  }`}
                >
                  <span className="line-clamp-1 block font-semibold">{isArabic ? spot.titleAr : spot.titleEn}</span>
                  <span className="text-[10px] opacity-70 block">{isArabic ? spot.categoryAr : spot.categoryEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Hotspot Deep-Dive Inspector */}
        <div className="lg:col-span-4 space-y-4">
          <div
            className={`p-5 rounded-2xl border space-y-4 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
            }`}
          >
            <div className="flex items-center gap-2 text-amber-500">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-bold text-base">
                {isArabic ? 'التفاصيل الفيزيائية والهندسية' : 'Engineering & Thermodynamic Dossier'}
              </h3>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold block mb-1">
                {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
              </span>
              <h4 className="text-lg font-bold">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </h4>
            </div>

            <p className="text-sm leading-relaxed opacity-90">
              {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
            </p>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
              <span className="text-xs font-bold text-amber-500 flex items-center gap-1.5">
                <Gauge className="w-4 h-4" />
                {isArabic ? 'الرؤية الهندسية لموشو (۱۸۷۸)' : 'Mouchot Thermodynamic Principle'}
              </span>
              <p className="text-xs font-mono opacity-90 leading-relaxed">
                {isArabic ? selectedHotspot.technicalInsightAr : selectedHotspot.technicalInsightEn}
              </p>
            </div>
          </div>

          {/* Quick Thermodynamic Stats */}
          <div
            className={`p-5 rounded-2xl border grid grid-cols-2 gap-3 text-center ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
            }`}
          >
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'مساحة الفتحة' : 'Aperture Area'}</span>
              <span className="text-lg font-bold text-amber-400 font-mono">{metrics.apertureAreaM2} m²</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'القدرة الحرارية' : 'Thermal Output'}</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">{metrics.thermalPowerOutputKw} kW</span>
            </div>
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'إنتاج البخار' : 'Steam Flow'}</span>
              <span className="text-lg font-bold text-sky-400 font-mono">{metrics.steamKgPerHour} kg/h</span>
            </div>
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'صنع الثلج' : 'Solar Ice Yield'}</span>
              <span className="text-lg font-bold text-cyan-400 font-mono">{metrics.iceKgPerHour} kg/h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Thermodynamic Concentrator & Engine Simulator */}
      <div
        className={`p-6 rounded-2xl border space-y-6 ${
          isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/60 border-slate-800'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                {isArabic
                  ? 'محاكي الديناميكا الحرارية لمجمع موشو وتوليد البخار'
                  : 'Mouchot Parabolic Solar Thermal & Steam Engine Simulator'}
              </h3>
              <p className="text-xs opacity-75">
                {isArabic
                  ? 'تعديل الإشعاع الشمسي، قطر الفتحة، ودرجة حرارة البخار لحساب القدرة الحرارية والميكانيكية وإنتاج الجليد'
                  : 'Adjust DNI irradiance, aperture geometry, and steam conditions to calculate thermal, mechanical & refrigeration yields'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>η_Carnot: {metrics.carnotEfficiencyPct}%</span>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* DNI Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-amber-400 flex items-center gap-1">
                <Sun className="w-3.5 h-3.5" />
                {isArabic ? 'الإشعاع المباشر (DNI)' : 'Direct Normal Irradiance (DNI)'}
              </span>
              <span className="font-mono font-bold">{dniWm2} W/m²</span>
            </div>
            <input
              type="range"
              min="400"
              max="1100"
              step="25"
              value={dniWm2}
              onChange={(e) => setDniWm2(Number(e.target.value))}
              className="w-full accent-amber-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>400 (غائم جزئياً)</span>
              <span>850 (شمس باريس)</span>
              <span>1100 (صحراء مصر)</span>
            </div>
          </div>

          {/* Aperture Diameter */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-amber-400 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                {isArabic ? 'قطر العاكس الشمسي' : 'Reflector Aperture Diameter'}
              </span>
              <span className="font-mono font-bold">{apertureDiameterM} m</span>
            </div>
            <input
              type="range"
              min="2.0"
              max="10.0"
              step="0.2"
              value={apertureDiameterM}
              onChange={(e) => setApertureDiameterM(Number(e.target.value))}
              className="w-full accent-amber-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>2.0 m</span>
              <span>5.4 m (موشو 1878)</span>
              <span>10.0 m</span>
            </div>
          </div>

          {/* Optical Efficiency */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {isArabic ? 'الكفاءة البصرية للعاكس' : 'Optical Mirror Reflectance'}
              </span>
              <span className="font-mono font-bold">{opticalEfficiencyPct}%</span>
            </div>
            <input
              type="range"
              min="55"
              max="92"
              step="1"
              value={opticalEfficiencyPct}
              onChange={(e) => setOpticalEfficiencyPct(Number(e.target.value))}
              className="w-full accent-amber-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>55% (فضة متأكسدة)</span>
              <span>76% (موشو 1878)</span>
              <span>92% (مرايا حديثة)</span>
            </div>
          </div>

          {/* Operating Steam Temp */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-amber-400 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" />
                {isArabic ? 'حرارة البخار في المرجل' : 'Boiler Steam Temperature'}
              </span>
              <span className="font-mono font-bold">{operatingTempC}°C</span>
            </div>
            <input
              type="range"
              min="110"
              max="280"
              step="5"
              value={operatingTempC}
              onChange={(e) => setOperatingTempC(Number(e.target.value))}
              className="w-full accent-amber-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>110°C (1.4 bar)</span>
              <span>220°C (23 bar)</span>
              <span>280°C (محمص)</span>
            </div>
          </div>

          {/* Ambient Temperature */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-amber-400 flex items-center gap-1">
                <Sun className="w-3.5 h-3.5" />
                {isArabic ? 'درجة الحرارة المحيطة' : 'Ambient Air Temperature'}
              </span>
              <span className="font-mono font-bold">{ambientTempC}°C</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="1"
              value={ambientTempC}
              onChange={(e) => setAmbientTempC(Number(e.target.value))}
              className="w-full accent-amber-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>10°C (أوروبا شتاءً)</span>
              <span>28°C (باريس ربيعاً)</span>
              <span>45°C (مصر صيفاً)</span>
            </div>
          </div>
        </div>

        {/* Live Vector SVG Diagram of Mouchot Solar Concentrator */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 font-semibold text-amber-400">
              <Activity className="w-3.5 h-3.5" />
              {isArabic ? 'مخطط التدفق البصري والبخاري لعاكس موشو' : 'Optical Ray Trace & Steam Cycle Vector Schematic'}
            </span>
            <span>Ambient: {ambientTempC}°C</span>
          </div>

          <div className="w-full aspect-[21/9] max-h-56 relative flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 800 240" className="w-full h-full">
              <defs>
                <linearGradient id="sunbeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="silverDish" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="50%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
              </defs>

              {/* Sun Position */}
              <circle cx="60" cy="50" r="28" fill="#f59e0b" />
              <text x="60" y="55" textAnchor="middle" fill="#000" fontSize="11" fontWeight="bold">
                SOLAR
              </text>

              {/* Sun Rays */}
              <line x1="88" y1="50" x2="300" y2="70" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
              <line x1="88" y1="58" x2="300" y2="120" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
              <line x1="88" y1="65" x2="300" y2="170" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />

              {/* Parabolic / Conical Dish Profile */}
              <path
                d="M 280 40 Q 380 120 280 200 L 330 200 Q 420 120 330 40 Z"
                fill="url(#silverDish)"
                stroke="#cbd5e1"
                strokeWidth="2"
              />

              {/* Focused Rays to Focal Absorber */}
              <line x1="300" y1="60" x2="410" y2="120" stroke="#ef4444" strokeWidth="2.5" />
              <line x1="300" y1="180" x2="410" y2="120" stroke="#ef4444" strokeWidth="2.5" />

              {/* Focal Boiler Cylinder */}
              <rect x="405" y="105" width="45" height="30" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="427" y="124" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">
                BOILER
              </text>

              {/* Steam Pipe to Engine */}
              <path d="M 450 120 L 530 120 L 530 160" fill="none" stroke="#38bdf8" strokeWidth="3" />
              <text x="490" y="112" textAnchor="middle" fill="#38bdf8" fontSize="10">
                Steam {operatingTempC}°C
              </text>

              {/* Steam Engine Box */}
              <rect x="510" y="160" width="80" height="50" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="550" y="185" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">
                ENGINE
              </text>
              <text x="550" y="200" textAnchor="middle" fill="#4ade80" fontSize="9">
                {metrics.mechanicalPowerHp} HP
              </text>

              {/* Flywheel */}
              <circle cx="615" cy="185" r="22" fill="none" stroke="#94a3b8" strokeWidth="3" />
              <line x1="590" y1="185" x2="640" y2="185" stroke="#94a3b8" strokeWidth="2" />
              <line x1="615" y1="160" x2="615" y2="210" stroke="#94a3b8" strokeWidth="2" />

              {/* Refrigeration Branch */}
              <path d="M 530 120 L 670 120 L 670 160" fill="none" stroke="#a855f7" strokeWidth="3" strokeDasharray="3 3" />
              <rect x="650" y="160" width="75" height="50" rx="6" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
              <text x="687" y="185" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">
                ICE MAKER
              </text>
              <text x="687" y="200" textAnchor="middle" fill="#22d3ee" fontSize="9">
                {metrics.iceKgPerHour} kg/h
              </text>
            </svg>
          </div>
        </div>

        {/* Live Calculation Outcomes Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-1">
            <span className="text-xs text-amber-400 font-medium block">
              {isArabic ? 'الطاقة الشمسية الساقطة' : 'Incident Solar Power'}
            </span>
            <span className="text-xl font-bold font-mono text-amber-300">
              {metrics.solarIncidentKw} kW
            </span>
            <span className="text-[10px] opacity-60 block">P_solar = A · DNI</span>
          </div>

          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-1">
            <span className="text-xs text-emerald-400 font-medium block">
              {isArabic ? 'القدرة الحرارية الممتصة' : 'Net Thermal Power'}
            </span>
            <span className="text-xl font-bold font-mono text-emerald-300">
              {metrics.thermalPowerOutputKw} kW
            </span>
            <span className="text-[10px] opacity-60 block">η_th = {metrics.thermalEfficiencyPct}%</span>
          </div>

          <div className="p-4 rounded-xl border border-sky-500/20 bg-sky-500/5 space-y-1">
            <span className="text-xs text-sky-400 font-medium block">
              {isArabic ? 'القدرة الميكانيكية للمحرك' : 'Engine Power Output'}
            </span>
            <span className="text-xl font-bold font-mono text-sky-300">
              {metrics.mechanicalPowerHp} HP
            </span>
            <span className="text-[10px] opacity-60 block">Reciprocating Piston Work</span>
          </div>

          <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 space-y-1">
            <span className="text-xs text-cyan-400 font-medium block flex items-center gap-1">
              <Snowflake className="w-3.5 h-3.5" />
              {isArabic ? 'إنتاج الثلج الشمسي' : 'Carré Ice Yield'}
            </span>
            <span className="text-xl font-bold font-mono text-cyan-300">
              {metrics.iceKgPerHour} kg/h
            </span>
            <span className="text-[10px] opacity-60 block">Ammonia Absorption Cycle</span>
          </div>
        </div>

        {/* Historical Context Callout */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs md:text-sm">
          <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-400">
              {isArabic ? 'الأثر التاريخي في مصر ومحطة المعادي ۱۹۱۳:' : 'Historical Legacy & Egypt Maadi Solar Plant (1913):'}
            </span>
            <p className="opacity-90 leading-relaxed text-xs">
              {isArabic
                ? 'مهدت ابتكارات أوغسطين موشو لإنشاء أول محطة ري شمسية تجارية في العالم في ضاحية المعادي جنوب القاهرة عام ۱۹۱۳ بواسطة المخترع الأمريكي فرانك شومان، حيث قامت مجمعات شومان الشمسية بضخ ۲۳,۰۰۰ لتر ماء في الدقيقة لري حقول القطن المصرية.'
                : 'Mouchot’s discoveries directly inspired Frank Shuman in 1913 to build the world’s first commercial solar irrigation plant in Maadi, south of Cairo, utilizing parabolic troughs to pump 23,000 liters of Nile water per minute to irrigate Egyptian cotton fields.'}
            </p>
          </div>
        </div>
      </div>

      {/* 4K Modal */}
      <HiResImageModal
        isOpen={showHiResModal}
        onClose={() => setShowHiResModal(false)}
        data={modalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};
