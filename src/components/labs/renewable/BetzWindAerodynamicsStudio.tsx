import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Wind,
  Gauge,
  Sliders,
  Sparkles,
  Layers,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import betzPhoto from '../../../assets/renewable/betz_wind_aerodynamics_1919.jpg';
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
  aerodynamicInsightAr?: string;
  aerodynamicInsightEn?: string;
  technicalInsightAr?: string;
  technicalInsightEn?: string;
}

export const BETZ_1919_HOTSPOTS: Hotspot[] = [
  {
    id: 'axial_momentum_streamline',
    x: 42,
    y: 42,
    titleAr: 'أنبوب السريان ومخطط كمية الحركة المحورية',
    titleEn: 'Axial Momentum Streamtube Diagram',
    categoryAr: 'ديناميكا الهواء والتدفق',
    categoryEn: 'Aerodynamic Flow Dynamics',
    descAr:
      'رسم هندسي توضيحي لألبرت بيتز يوضح تمدد أنبوب سريان الرياح قبل التوربين وبعده: سرعة الهواء الحرة v1 تتباطأ عند قرص الدوار إلى v، وتصل في الأثر البعيد (Wake) إلى v2، مما يولد فرق ضغط يستخلص الطاقة الحركية.',
    descEn:
      'Albert Betz’s hand-drawn streamtube schematic illustrating air mass flow expanding through the rotor disc: free-stream wind v1 decelerates at the rotor plane to v, and further slows to wake velocity v2, inducing a pressure differential that extracts kinetic energy.',
    technicalInsightAr:
      'معادلة الاستمرارية وحفظ كمية الحركة: سرعة الرياح عند القرص هي المتوسط الحسابي الدقيق لسرعتي الدخول والخروج: v = (v1 + v2) / 2.',
    technicalInsightEn:
      'Continuity and momentum balance: the wind velocity at the rotor plane is the exact arithmetic mean of free-stream and wake velocities: v = (v1 + v2) / 2.',
  },
  {
    id: 'betz_limit_derivation_equation',
    x: 65,
    y: 52,
    titleAr: 'اشتقاق حد بيتز النظري (Cp = 16/27 ≈ 59.3%)',
    titleEn: 'Betz Limit Theoretical Derivation (Cp = 16/27)',
    categoryAr: 'الفيزياء الرياضية للدوارات',
    categoryEn: 'Mathematical Physics of Rotors',
    descAr:
      'المعادلة الرياضية التاريخية لمعامل القدرة: Cp = 4a(1-a)²، حيث (a) هو معامل الحث المحوري. بإجراء التفاضل dCp/da = 0، يثبت بيتز رياضياً أن أقصى كفاءة استخلاص ممكنة لأي توربين رياح هي 16/27 (59.26%).',
    descEn:
      'The landmark mathematical equation for power coefficient: Cp = 4a(1-a)², where (a) is the axial induction factor. Differentiating dCp/da = 0 yields the absolute theoretical ceiling for wind kinetic extraction: 16/27 (59.26%).',
    technicalInsightAr:
      'لا يمكن لأي توربين رياح في الكون أن يستخرج 100% من طاقة الرياح، لأن الهواء المستنفد طاقته بالكامل سيتوقف تماماً خلف الدوار (v2 = 0) مانعاً تدفق أي هواء جديد.',
    technicalInsightEn:
      'No wind machine can extract 100% of kinetic energy, as fully depleted wind would stagnate completely behind the rotor (v2 = 0), choking subsequent airflow.',
  },
  {
    id: 'optimal_induction_factor',
    x: 63,
    y: 35,
    titleAr: 'معامل الحث المحوري الأمثل (a = 1/3)',
    titleEn: 'Optimal Axial Induction Factor (a = 1/3)',
    categoryAr: 'نقطة التشغيل المثلى',
    categoryEn: 'Optimal Operating Point',
    descAr:
      'يتحقق الحد الأقصى النظري لبيتز عندما يخفض الدوار سرعة الرياح بنسبة الثلث تماماً (v = 2/3 v1)، لتكون سرعة الرياح في الأثر الخلفي ثلث السرعة الأصلية (v2 = 1/3 v1)، محققاً معامل دفع محوري CT = 8/9.',
    descEn:
      'The Betz maximum is achieved precisely when the rotor decelerates the upstream wind by one-third (v = 2/3 v1), causing wake velocity to drop to one-third (v2 = 1/3 v1), yielding an axial thrust coefficient CT = 8/9.',
    technicalInsightAr:
      'معامل الدفع المحوري: CT = 4a(1-a) = 8/9 ≈ 0.889. تمثل هذه القيمة أقصى حمل دفع ديناميكي هوائي تتحمله أبراج وقواعد توربينات الرياح.',
    technicalInsightEn:
      'Thrust coefficient: CT = 4a(1-a) = 8/9 ≈ 0.889. This represents the peak aerodynamic axial load that structural towers and foundations must withstand.',
  },
  {
    id: 'gottingen_aerodynamic_wind_tunnel',
    x: 16,
    y: 45,
    titleAr: 'مانوميترات نفق غوتنغن الهوائي ونماذج الأجنحة',
    titleEn: 'Göttingen Wind Tunnel Manometers & Aerofoils',
    categoryAr: 'التجريب المعملي البصري',
    categoryEn: 'Empirical Wind Tunnel Testing',
    descAr:
      'أجهزة قياس الضغط متعددة الأنابيب (U-Tube Manometers) وأنابيب براندتل النحاسية ونماذج خشبية لمقاطع الأجنحة الانسيابية (Göttingen 387, 436, 487) المستخدمة لقياس قوى الرفع والسحب (Lift & Drag).',
    descEn:
      'Multi-tube liquid manometers, Prandtl pitot probes, and precision hand-carved wooden aerofoil sections (Göttingen 387, 436, 487) used to measure lift and drag polars inside the pioneering Göttingen wind tunnel.',
    technicalInsightAr:
      'أسس معهد غوتنغن بإشراف لودفيغ براندتل وألبرت بيتز الديناميكا الهوائية الحديثة، وحول تصميم الشفرات من ألواح خشبية مسطحة غير فعالة إلى مقاطع انسيابية ذات رفع إيروديناميكي فائق.',
    technicalInsightEn:
      'The Göttingen aerodynamic institute under Ludwig Prandtl and Albert Betz founded modern aerodynamics, transforming blades from crude flat paddles into high-lift, low-drag cambered profiles.',
  },
  {
    id: 'modern_blade_element_momentum_bem',
    x: 88,
    y: 42,
    titleAr: 'دوار الاختبار المصغر ونظرية عنصر الشفرة (BEM)',
    titleEn: 'Scale Test Rotor & Blade Element Momentum (BEM)',
    categoryAr: 'الهندسة التوربينية الحديثة',
    categoryEn: 'Modern Turbine Engineering',
    descAr:
      'نموذج مصغر لدوار ثلاثي الشفرات منحوت من الخشب، يجسد تطبيق نظرية عنصر الشفرة (BEM) التي تجمع بين ديناميكا كمية الحركة لبيتز والديناميكا الهوائية الموضعية للمقاطع على طول امتداد الشفرة.',
    descEn:
      'A miniature three-bladed test rotor carved from wood, demonstrating Blade Element Momentum (BEM) theory, which integrates Betz’s global momentum theory with sectional aerofoil aerodynamics along the blade radius.',
    technicalInsightAr:
      'تصحيح فقد الأطراف لغلاورت (Prandtl-Glauert Tip Loss Factor F) يحاكي الدوامات المتكونة عند أطراف الشفرات، مما يجعل كفاءة التوربينات الحديثة واقعياً بين 45% و50%.',
    technicalInsightEn:
      'Prandtl-Glauert tip-loss factor (F) accounts for radial vortex shedding at blade tips, bounding real modern multi-megawatt wind turbines between 45% and 50% power coefficient.',
  },
];

export const BetzWindAerodynamicsStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(BETZ_1919_HOTSPOTS[0]);
  const [showHiResModal, setShowHiResModal] = useState<boolean>(false);

  // Simulator Inputs
  const [windSpeedV1, setWindSpeedV1] = useState<number>(10.5); // m/s free-stream (Egypt Gulf of Suez average)
  const [rotorDiameterM, setRotorDiameterM] = useState<number>(110); // meters (standard 3 MW turbine)
  const [inductionFactorA, setInductionFactorA] = useState<number>(0.333); // axial induction factor a (0.05 to 0.50)
  const [airDensityKgM3, setAirDensityKgM3] = useState<number>(1.225); // kg/m³
  const [generatorEfficiencyPct, setGeneratorEfficiencyPct] = useState<number>(93); // % electrical conversion

  // Calculations
  const metrics = useMemo(() => {
    const radiusM = rotorDiameterM / 2;
    const sweptAreaM2 = Math.PI * radiusM * radiusM;

    // Upstream wind velocity
    const v1 = windSpeedV1;
    // Velocity at rotor plane: v = v1 * (1 - a)
    const vRotor = v1 * (1 - inductionFactorA);
    // Far wake velocity: v2 = v1 * (1 - 2a)
    const vWake = Math.max(0, v1 * (1 - 2 * inductionFactorA));

    // Power in the wind: P_wind = 0.5 * rho * A * v1^3
    const totalWindPowerWatts = 0.5 * airDensityKgM3 * sweptAreaM2 * Math.pow(v1, 3);
    const totalWindPowerKw = totalWindPowerWatts / 1000;

    // Theoretical Betz Power Coefficient: Cp = 4 * a * (1 - a)^2
    const cpTheoretical = 4 * inductionFactorA * Math.pow(1 - inductionFactorA, 2);

    // Thrust Coefficient: CT = 4 * a * (1 - a)
    const ctTheoretical = 4 * inductionFactorA * (1 - inductionFactorA);

    // Aerodynamic Thrust Force: T = 0.5 * rho * A * v1^2 * CT (kN)
    const thrustForceKn = (0.5 * airDensityKgM3 * sweptAreaM2 * Math.pow(v1, 2) * ctTheoretical) / 1000;

    // Aerodynamic Power Extracted: P_mech = P_wind * Cp
    const mechanicalPowerKw = totalWindPowerKw * cpTheoretical;

    // Real-world aerodynamic losses (tip losses, wake rotation, profile drag: ~82% of Betz)
    const realAerodynamicFactor = 0.82;
    const realCp = cpTheoretical * realAerodynamicFactor;
    const electricalPowerKw = totalWindPowerKw * realCp * (generatorEfficiencyPct / 100);
    const electricalPowerMw = electricalPowerKw / 1000;

    return {
      sweptAreaM2: Math.round(sweptAreaM2),
      vRotor: Number(vRotor.toFixed(2)),
      vWake: Number(vWake.toFixed(2)),
      totalWindPowerKw: Math.round(totalWindPowerKw),
      cpTheoreticalPct: Number((cpTheoretical * 100).toFixed(2)),
      ctTheoretical: Number(ctTheoretical.toFixed(3)),
      thrustForceKn: Number(thrustForceKn.toFixed(1)),
      mechanicalPowerKw: Math.round(mechanicalPowerKw),
      realCpPct: Number((realCp * 100).toFixed(2)),
      electricalPowerKw: Math.round(electricalPowerKw),
      electricalPowerMw: Number(electricalPowerMw.toFixed(2)),
    };
  }, [windSpeedV1, rotorDiameterM, inductionFactorA, airDensityKgM3, generatorEfficiencyPct]);

  const modalData: HiResImageModalData = {
    imageUrl: betzPhoto,
    titleAr: 'مخطوطة ألبرت بيتز ونظرية الحد الأقصى لطاقة الرياح (غوتنغن ۱۹۱۹)',
    titleEn: 'Albert Betz Aerodynamic Wind Laboratory & Betz Limit Treatise (Göttingen 1919)',
    subtitleAr: 'الاشتقاق الفيزيائي للحد النظري الأقصى لتوربينات الرياح (Cp = 16/27 ≈ 59.3%)',
    subtitleEn: 'The Physical Derivation of the Maximum Theoretical Efficiency for Wind Turbines',
    descriptionAr:
      'لوحة أرشيفية متحفية بالغة الندرة تسجل معمل أبحاث الديناميكا الهوائية بجامعة غوتنغن الألمانية تحت إشراف لودفيغ براندتل وألبرت بيتز. تعرض مجلد بيتز الأصلي لعام 1926 "Das Maximum der theoretisch möglichen Ausnützung des Windes durch Windmotoren" مفتوحاً على صفحة اشتقاق حد الـ 59.3%، بجانبه مانوميترات الزئبق ونماذج الأجنحة الانسيابية ومسطرة الحساب الهندسية.',
    descriptionEn:
      'Museum archival plate of the Göttingen University aerodynamic research laboratory under Ludwig Prandtl and Albert Betz. It displays Betz’s original 1926 treatise open to the derivation of the 59.3% Betz Limit, accompanied by U-tube manometers, precision aerofoil profiles, and slide rule on an oak laboratory bench.',
    locationAr: 'مكتبة جامعة غوتنغن ومتحف المركز الألماني للفضاء والطيران (DLR)، ألمانيا',
    locationEn: 'Göttingen University Library & DLR Aerodynamic Archive, Germany',
    dateOrEraAr: '۱۹۱۹ - ۱۹۲٦ ميلادية (عصر تأسيس الديناميكا الهوائية الحديثة)',
    dateOrEraEn: '1919 - 1926 CE (Golden Age of Theoretical Aerodynamics)',
  };

  return (
    <div
      className={`space-y-8 p-4 md:p-6 rounded-2xl border transition-all ${
        isContrast
          ? 'bg-black text-cyan-300 border-cyan-400'
          : isLight
          ? 'bg-slate-50 text-slate-900 border-slate-200'
          : 'bg-slate-950 text-slate-100 border-slate-800'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b pb-6 border-sky-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2">
            <Wind className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الديناميكا الهوائية لطاقة الرياح (۱۹۱۹)' : 'Father of Wind Aerodynamics & Betz Limit'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {isArabic ? 'استوديو ألبرت بيتز وحد الطاقة الأيروديناميكي (۱۹۱۹)' : 'Albert Betz Wind Aerodynamics Studio'}
          </h2>
          <p className="text-sm opacity-80 mt-1 max-w-3xl">
            {isArabic
              ? 'دراسة فيزيائية رياضية لحد بيتز النظري (59.3%) ومعامل الحث المحوري وتمدد أنبوب السريان لتوربينات الرياح.'
              : 'Mathematical and physical investigation of the Betz limit (59.3%), axial streamtube expansion, and rotor thrust mechanics.'}
          </p>
        </div>

        <button
          onClick={() => setShowHiResModal(true)}
          className="min-h-[44px] min-w-[44px] px-4 py-2.5 rounded-xl font-medium flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-lg hover:brightness-110 active:scale-95 transition-all text-sm"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'استعراض المخطوطة بدقة 4K' : 'View 4K Archival Plate'}</span>
        </button>
      </div>

      {/* Main Archival Canvas with Hotspots */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl bg-black aspect-[4/3] group">
            <img
              src={betzPhoto}
              alt="Albert Betz Wind Laboratory 1919"
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Hotspot Markers */}
            {BETZ_1919_HOTSPOTS.map((spot) => {
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
                        ? 'bg-sky-500 border-white text-black shadow-lg shadow-sky-500/80 ring-4 ring-sky-500/40'
                        : 'bg-slate-900/90 border-sky-400 text-sky-300 backdrop-blur-sm'
                    }`}
                  >
                    <Wind className="w-4 h-4" />
                  </span>
                </button>
              );
            })}

            {/* Live Overlay Caption */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-slate-900/80 border border-slate-700/60 text-xs md:text-sm">
              <span className="font-semibold text-sky-400 block mb-1">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </span>
              <p className="line-clamp-2 opacity-90">
                {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
              </p>
            </div>
          </div>

          {/* Hotspots Selector Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {BETZ_1919_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  className={`min-h-[44px] p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                    isArabic ? 'text-right' : 'text-left'
                  } ${
                    isSelected
                      ? 'bg-sky-500/20 border-sky-500 text-sky-400 shadow-sm'
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
            <div className="flex items-center gap-2 text-sky-400">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-bold text-base">
                {isArabic ? 'الدليل الإيروديناميكي والفيزيائي' : 'Aerodynamic & Physics Dossier'}
              </h3>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
              </span>
              <h4 className="text-lg font-bold">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </h4>
            </div>

            <p className="text-sm leading-relaxed opacity-90">
              {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
            </p>

            <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/20 space-y-1.5">
              <span className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                <Gauge className="w-4 h-4" />
                {isArabic ? 'المبدأ الديناميكي لألبرت بيتز (۱۹۱۹)' : 'Betz Aerodynamic Law'}
              </span>
              <p className="text-xs font-mono opacity-90 leading-relaxed">
                {isArabic
                  ? (selectedHotspot.technicalInsightAr || selectedHotspot.aerodynamicInsightAr)
                  : (selectedHotspot.technicalInsightEn || selectedHotspot.aerodynamicInsightEn)}
              </p>
            </div>
          </div>

          {/* Quick Aerodynamic Stats */}
          <div
            className={`p-5 rounded-2xl border grid grid-cols-2 gap-3 text-center ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
            }`}
          >
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'مساحة المسح' : 'Rotor Swept Area'}</span>
              <span className="text-lg font-bold text-sky-400 font-mono">{metrics.sweptAreaM2} m²</span>
            </div>
            <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'حد بيتز النظري' : 'Theoretical Cp'}</span>
              <span className="text-lg font-bold text-teal-400 font-mono">{metrics.cpTheoreticalPct}%</span>
            </div>
            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'قوة الدفع المحورية' : 'Rotor Thrust'}</span>
              <span className="text-lg font-bold text-indigo-400 font-mono">{metrics.thrustForceKn} kN</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'القدرة الكهربية' : 'Electric Output'}</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">{metrics.electricalPowerMw} MW</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Aerodynamic Momentum Simulator */}
      <div
        className={`p-6 rounded-2xl border space-y-6 ${
          isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/60 border-slate-800'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-sky-500/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                {isArabic
                  ? 'محاكي نظرية كمية الحركة المحورية وحد بيتز (Betz Limit Simulator)'
                  : 'Axial Momentum Theory & Betz Limit Simulator'}
              </h3>
              <p className="text-xs opacity-75">
                {isArabic
                  ? 'تعديل معامل الحث المحوري (a) وسرعة الرياح لدراسة تباطؤ الهواء وقوة الدفع ومعامل الاستخلاص'
                  : 'Modulate axial induction factor (a) and wind speed to examine streamtube deceleration and extraction ceiling'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
            <TrendingUp className="w-4 h-4 text-sky-400" />
            <span>Optimal: a = 1/3 (Cp = 59.26%)</span>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Axial Induction Factor (a) */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-sky-400 flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5" />
                {isArabic ? 'معامل الحث المحوري (a)' : 'Axial Induction Factor (a)'}
              </span>
              <span className="font-mono font-bold">{inductionFactorA.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="0.48"
              step="0.005"
              value={inductionFactorA}
              onChange={(e) => setInductionFactorA(Number(e.target.value))}
              className="w-full accent-sky-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>0.05 (دوران طفيف)</span>
              <span>0.333 (قمة بيتز)</span>
              <span>0.48 (اضطراب الأثر)</span>
            </div>
          </div>

          {/* Wind Speed v1 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-sky-400 flex items-center gap-1">
                <Wind className="w-3.5 h-3.5" />
                {isArabic ? 'سرعة الرياح الحرة (v1)' : 'Free-stream Velocity (v1)'}
              </span>
              <span className="font-mono font-bold">{windSpeedV1} m/s</span>
            </div>
            <input
              type="range"
              min="3.0"
              max="25.0"
              step="0.5"
              value={windSpeedV1}
              onChange={(e) => setWindSpeedV1(Number(e.target.value))}
              className="w-full accent-sky-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>3 m/s (سرعة البدء)</span>
              <span>10.5 m/s (خليج السويس)</span>
              <span>25 m/s (فصل العواصف)</span>
            </div>
          </div>

          {/* Rotor Diameter */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-sky-400 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                {isArabic ? 'قطر دوار التوربين (D)' : 'Rotor Diameter (D)'}
              </span>
              <span className="font-mono font-bold">{rotorDiameterM} m</span>
            </div>
            <input
              type="range"
              min="30"
              max="160"
              step="5"
              value={rotorDiameterM}
              onChange={(e) => setRotorDiameterM(Number(e.target.value))}
              className="w-full accent-sky-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>30 m (الزعفرانة قديم)</span>
              <span>110 m (3.0 MW قياسي)</span>
              <span>160 m (بحري عملاق)</span>
            </div>
          </div>

          {/* Air Density */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-sky-400 flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5" />
                {isArabic ? 'كثافة الهواء (ρ)' : 'Air Density (ρ)'}
              </span>
              <span className="font-mono font-bold">{airDensityKgM3} kg/m³</span>
            </div>
            <input
              type="range"
              min="1.10"
              max="1.28"
              step="0.01"
              value={airDensityKgM3}
              onChange={(e) => setAirDensityKgM3(Number(e.target.value))}
              className="w-full accent-sky-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>1.10 (صحراء حارة 40°C)</span>
              <span>1.225 (مستوى البحر 15°C)</span>
              <span>1.28 (شتاء بارد)</span>
            </div>
          </div>

          {/* Generator Efficiency */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-sky-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {isArabic ? 'كفاءة المولد الكهروميكانيكي' : 'Generator Electrical Efficiency'}
              </span>
              <span className="font-mono font-bold">{generatorEfficiencyPct}%</span>
            </div>
            <input
              type="range"
              min="80"
              max="98"
              step="1"
              value={generatorEfficiencyPct}
              onChange={(e) => setGeneratorEfficiencyPct(Number(e.target.value))}
              className="w-full accent-sky-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>80% (توربين تقليدي)</span>
              <span>93% (قياسي مغناطيس دائم)</span>
              <span>98% (فائق التوصيل)</span>
            </div>
          </div>
        </div>

        {/* Vector SVG Diagram of Streamtube Deceleration and Cp Curve */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Streamtube Vector Visualizer */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs text-slate-400">
              <span className="font-semibold text-sky-400">
                {isArabic ? 'تمدد أنبوب السريان الهوائي (Streamtube Expansion)' : 'Expanding Wind Streamtube'}
              </span>
              <span>CT = {metrics.ctTheoretical}</span>
            </div>

            <div className="w-full aspect-[16/9] relative flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <defs>
                  <linearGradient id="windStream" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#0284c7" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Expanding Streamtube Envelope */}
                {/* Upstream width: 60px, Disc width: 120px, Wake width: 120 / (1 - 2a) */}
                <path
                  d={`M 20 ${100 - 30} Q 180 ${100 - 60} 380 ${Math.max(10, 100 - 60 * (1 / Math.max(0.2, 1 - 2 * inductionFactorA)) * 0.4)} L 380 ${Math.min(190, 100 + 60 * (1 / Math.max(0.2, 1 - 2 * inductionFactorA)) * 0.4)} Q 180 ${100 + 60} 20 ${100 + 30} Z`}
                  fill="url(#windStream)"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />

                {/* Center Rotor Line */}
                <line x1="200" y1="35" x2="200" y2="165" stroke="#f8fafc" strokeWidth="4" />
                <circle cx="200" cy="100" r="7" fill="#f59e0b" />

                {/* Velocity Indicators */}
                {/* v1 upstream */}
                <text x="60" y="85" fill="#bae6fd" fontSize="11" fontWeight="bold">
                  v₁ = {windSpeedV1} m/s
                </text>
                <line x1="40" y1="100" x2="90" y2="100" stroke="#bae6fd" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* v at disc */}
                <text x="175" y="25" fill="#fde047" fontSize="11" fontWeight="bold">
                  v = {metrics.vRotor} m/s
                </text>
                <text x="170" y="185" fill="#94a3b8" fontSize="10">
                  Rotor Disc
                </text>

                {/* v2 wake */}
                <text x="300" y="85" fill="#7dd3fc" fontSize="11" fontWeight="bold">
                  v₂ = {metrics.vWake} m/s
                </text>
                <line x1="280" y1="100" x2="330" y2="100" stroke="#7dd3fc" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>Upstream: v₁</span>
              <span>Disc Plane: v₁·(1-a) = {metrics.vRotor} m/s</span>
              <span>Far Wake: v₁·(1-2a) = {metrics.vWake} m/s</span>
            </div>
          </div>

          {/* Cp vs Induction Factor Curve */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs text-slate-400">
              <span className="font-semibold text-teal-400">
                {isArabic ? 'منحنى معامل القدرة Cp مقابل معامل الحث a' : 'Betz Power Curve Cp vs. Induction a'}
              </span>
              <span className="text-amber-400 font-mono">Current Cp: {metrics.cpTheoreticalPct}%</span>
            </div>

            <div className="w-full aspect-[16/9] relative flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Axes */}
                <line x1="40" y1="170" x2="380" y2="170" stroke="#64748b" strokeWidth="1.5" />
                <line x1="40" y1="170" x2="40" y2="20" stroke="#64748b" strokeWidth="1.5" />

                {/* Horizontal Betz Limit Guideline (16/27 = 59.26% -> y approx 50) */}
                <line x1="40" y1="51" x2="380" y2="51" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
                <text x="240" y="44" fill="#ef4444" fontSize="10">
                  Betz Limit: 16/27 = 59.26%
                </text>

                {/* Theoretical Curve Cp = 4a(1-a)^2 */}
                {/* a ranges from 0 to 0.5. Plot points scaled: x = 40 + a * 640, y = 170 - Cp * 200 */}
                <path
                  d="M 40 170 C 90 140, 160 51, 253 51 C 290 51, 330 90, 360 170"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                />

                {/* Current Operating Point Marker */}
                {/* x marker = 40 + (inductionFactorA / 0.5) * 320 */}
                {/* y marker = 170 - (cpTheoretical / 0.6) * 120 */}
                <circle
                  cx={40 + (inductionFactorA / 0.5) * 320}
                  cy={170 - (metrics.cpTheoreticalPct / 60) * 120}
                  r="6"
                  fill="#f59e0b"
                  stroke="#fff"
                  strokeWidth="2"
                />

                {/* Real-World Turbine Range (45-50%) */}
                <rect x="220" y="70" width="60" height="25" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1" />
                <text x="224" y="86" fill="#10b981" fontSize="9">
                  Real Turbines (45-50%)
                </text>

                <text x="40" y="185" fill="#94a3b8" fontSize="10">0.0</text>
                <text x="245" y="185" fill="#fde047" fontSize="10" fontWeight="bold">a = 1/3</text>
                <text x="350" y="185" fill="#94a3b8" fontSize="10">0.5</text>
                <text x="15" y="55" fill="#ef4444" fontSize="10">59%</text>
                <text x="15" y="170" fill="#94a3b8" fontSize="10">0%</text>
              </svg>
            </div>
            <div className="text-[11px] text-center text-slate-400">
              {isArabic
                ? 'ذروة المنحنى الرياضي تتحقق بدقة عندما a = 1/3 حيث dCp/da = 0'
                : 'Peak mathematically occurs precisely at a = 1/3 where dCp/da = 0'}
            </div>
          </div>
        </div>

        {/* Live Calculation Outcomes Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-sky-500/20 bg-sky-500/5 space-y-1">
            <span className="text-xs text-sky-400 font-medium block">
              {isArabic ? 'طاقة الرياح الحركية الكلية' : 'Total Wind Kinetic Power'}
            </span>
            <span className="text-xl font-bold font-mono text-sky-300">
              {metrics.totalWindPowerKw} kW
            </span>
            <span className="text-[10px] opacity-60 block">P_wind = 0.5·ρ·A·v₁³</span>
          </div>

          <div className="p-4 rounded-xl border border-teal-500/20 bg-teal-500/5 space-y-1">
            <span className="text-xs text-teal-400 font-medium block">
              {isArabic ? 'معامل استخلاص بيتز' : 'Betz Extraction Coeff.'}
            </span>
            <span className="text-xl font-bold font-mono text-teal-300">
              {metrics.cpTheoreticalPct}%
            </span>
            <span className="text-[10px] opacity-60 block">Limit: 16/27 = 59.26%</span>
          </div>

          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-1">
            <span className="text-xs text-amber-400 font-medium block">
              {isArabic ? 'قوة الدفع على البرج' : 'Aerodynamic Tower Thrust'}
            </span>
            <span className="text-xl font-bold font-mono text-amber-300">
              {metrics.thrustForceKn} kN
            </span>
            <span className="text-[10px] opacity-60 block">CT = {metrics.ctTheoretical}</span>
          </div>

          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-1">
            <span className="text-xs text-emerald-400 font-medium block">
              {isArabic ? 'التوليد الكهربائي الفعلي' : 'Net Electric Output'}
            </span>
            <span className="text-xl font-bold font-mono text-emerald-300">
              {metrics.electricalPowerMw} MW
            </span>
            <span className="text-[10px] opacity-60 block">Real Cp: {metrics.realCpPct}%</span>
          </div>
        </div>

        {/* Historical Context Callout */}
        <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-start gap-3 text-xs md:text-sm">
          <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-sky-300">
              {isArabic ? 'أهمية قانون بيتز في مزارع رياح الزعفرانة وخليج السويس بمصر:' : 'Betz Law Applied to Egypt Zafarana & Gulf of Suez Wind Corridors:'}
            </span>
            <p className="opacity-90 leading-relaxed text-xs">
              {isArabic
                ? 'يعد ممر رياح خليج السويس في مصر من أغنى ممرات الرياح البرية في العالم بسرعة متوسطة تفوق ۱۰.۵ م/ث. وبفضل تطبيق قانون بيتز والتصميم الإيروديناميكي الحديث للشفرات وتفادي تداخل أثر الرياح (Wake Deficit) بين التوربينات على مسافات ٧ إلى ٩ أضعاف القطر، تحقق مزارع الزعفرانة ورأس غارب معامل سعة يفوق ٥٠%.'
                : 'The Gulf of Suez wind corridor in Egypt is among the richest onshore sites worldwide with mean wind speeds exceeding 10.5 m/s. Applying Betz law with modern BEM aerofoil design and inter-turbine wake spacing of 7-9 diameters yields exceptional capacity factors exceeding 50% across Zafarana and Ras Ghareb complexes.'}
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
