import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Droplets,
  Zap,
  Gauge,
  Sliders,
  Sparkles,
  Activity,
  Layers,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';
import grovePhoto from '../../../assets/renewable/grove_hydrogen_fuel_cell_1839.jpg';
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
  electrochemicalInsightAr: string;
  electrochemicalInsightEn: string;
}

export const GROVE_1839_HOTSPOTS: Hotspot[] = [
  {
    id: 'gas_battery_series_tubes',
    x: 50,
    y: 38,
    titleAr: 'مصفوفة أنابيب الغاز المقلوبة (الهيدروجين والأكسجين)',
    titleEn: 'Inverted Gas Battery Tubes Array (H₂ & O₂)',
    categoryAr: 'التكوين الكهروكيميائي',
    categoryEn: 'Electrochemical Architecture',
    descAr:
      'مصفوفة أنابيب اختبار زجاجية مدرجة مقلوبة فوق حوض زجاجي يحتوي على حمض كبريتيك مخفف كإلكتروليت. نصف الأنابيب مملوء بغاز الهيدروجين النقي (الأنود/المصعد) والنصف الآخر بغاز الأكسجين (الكاثود/المهبط)، موصولة على التوالي لرفع فرق الجهد الكلي.',
    descEn:
      'An array of graduated glass test tubes inverted over a trough of dilute sulfuric acid electrolyte. Half the tubes contain pure hydrogen gas (anode), and the other half contain oxygen gas (cathode), linked in series to build cumulative cell potential.',
    electrochemicalInsightAr:
      'أول إثبات عملي لأن الغازات يمكنها توليد تيار كهربائي مستمر عبر التفاعل الكيميائي السطحي البارد دون الحاجة إلى احتراق حراري تقليدي.',
    electrochemicalInsightEn:
      'The first empirical proof that gases can sustain continuous electric current via cold surface electrochemical reaction without thermal combustion.',
  },
  {
    id: 'platinized_platinum_electrodes',
    x: 37,
    y: 42,
    titleAr: 'أقطاب رقائق البلاتين المطلي بالأسود البلاتيني',
    titleEn: 'Platinized Platinum Foil Catalytic Electrodes',
    categoryAr: 'الحفز السطحي والتحفيز',
    categoryEn: 'Heterogeneous Catalysis',
    descAr:
      'شرائح دقيقة من البلاتين تم تغطيتها كهربائياً بطبقة مجهرية مسامية من أسود البلاتين (Platinized Platinum) لزيادة مساحة السطح التفاعلي آلاف المرات، مما يسهل الامتزاز الكيميائي وتفكيك جزيئات الهيدروجين والأكسجين.',
    descEn:
      'Delicate platinum foil strips electroplated with a porous microscopic layer of platinum black to amplify catalytic surface area by thousands of times, enabling dissociative chemisorption of H₂ and O₂ molecules.',
    electrochemicalInsightAr:
      'تفاعل أكسدة الهيدروجين (HOR): H₂ → 2H⁺ + 2e⁻، وتفاعل اختزال الأكسجين (ORR): ½O₂ + 2H⁺ + 2e⁻ → H₂O. يمثل البلاتين المحفز الأمثل لكلا التفاعلين حتى يومنا هذا.',
    electrochemicalInsightEn:
      'Hydrogen Oxidation Reaction (HOR): H₂ → 2H⁺ + 2e⁻, and Oxygen Reduction Reaction (ORR): ½O₂ + 2H⁺ + 2e⁻ → H₂O. Platinum remains the benchmark catalyst to this day.',
  },
  {
    id: 'reversible_electrolysis_thermodynamics',
    x: 25,
    y: 65,
    titleAr: 'الجلفانوميتر الحساس وإثبات عكس التحليل الكهربي',
    titleEn: 'Sensitive Galvanometer & Reversible Electrolysis',
    categoryAr: 'الديناميكا الحرارية العكوسة',
    categoryEn: 'Reversible Thermodynamics',
    descAr:
      'جلفانوميتر ذو إبرة مغناطيسية حساسة متصل بدارة أنابيب الغاز، انحرفت إبرته بوضوح لتثبت توليد تيار كهربائي حقيقي من تفاعل اتحاد الهيدروجين بالأكسجين لإنتاج الماء، عاكساً بدقة تجربة التحليل الكهربي للماء التي أجراها نيكولسون وكارلايل عام 1800.',
    descEn:
      'A sensitive galvanometer wired across the gas tubes whose needle deflected vigorously, confirming spontaneous electric current generation from hydrogen-oxygen recombination into water—precisely reversing Nicholson & Carlisle’s 1800 water electrolysis.',
    electrochemicalInsightAr:
      'جهد الدارة المفتوحة النظري عند 25° مئوية: E° = -ΔG° / (nF) = 237,200 / (2 × 96,485) = 1.229 فولت لكل خلية.',
    electrochemicalInsightEn:
      'Theoretical Open Circuit Voltage (OCV) at 25°C: E° = -ΔG° / (nF) = 237,200 / (2 × 96,485) = 1.229 V per individual cell.',
  },
  {
    id: 'philosophical_magazine_letter_1839',
    x: 64,
    y: 72,
    titleAr: 'مجلد المجلة الفلسفية لعام ۱۸۳۹ ورسالة غروف',
    titleEn: '1839 Philosophical Magazine Folio & Grove’s Paper',
    categoryAr: 'التوثيق العلمي الأصيل',
    categoryEn: 'Archival Scientific Record',
    descAr:
      'المجلد الأصلي الصادر في لندن عام 1839 من "Philosophical Magazine and Journal of Science" مفتوحاً على مقال السير ويليام روبرت غروف بعنوان "On the Voltaic Polarisation and the Gas Battery"، متضمناً الرسم الهندسي التفصيلي للخلية.',
    descEn:
      'The original 1839 volume of the Philosophical Magazine open to Sir William Robert Grove’s landmark publication "On the Voltaic Polarisation and the Gas Battery", featuring his hand-drafted engineering schematic of the gas battery.',
    electrochemicalInsightAr:
      'كتب غروف إلى مايكل فاراداي في يناير 1839 واصفاً اكتشافه بأنه "وسيلة لتحويل الطاقة الكيميائية للغازات مباشرة إلى مغناطيسية وكهرباء دون احتراق"، مما جعل فاراداي يشيد بالابتكار في الجمعية الملكية.',
    electrochemicalInsightEn:
      'Grove wrote to Michael Faraday in January 1839 describing his discovery as "a method of converting gaseous chemical energy directly into electricity without fire", prompting Faraday’s glowing endorsement.',
  },
  {
    id: 'green_hydrogen_power_to_x_vision',
    x: 82,
    y: 50,
    titleAr: 'أسطوانة غاز الهيدروجين وأفق الاقتصاد الهيدروجيني',
    titleEn: 'Hydrogen Gas Vessel & Power-to-X Future',
    categoryAr: 'اقتصاد الهيدروجين الأخضر',
    categoryEn: 'Green Hydrogen Economy',
    descAr:
      'أسطوانة نحاسية كيميائية مخصصة لإنتاج وتخزين غاز الهيدروجين النقي عبر تفاعل الزنك مع الحمض، والتي تجسد الجذور الأولى لتقنيات تخزين الهيدروجين الأخضر وإنتاج الأمونيا الخضراء والوقود الصناعي المستدام (e-Fuels).',
    descEn:
      'A chemical brass gasometer apparatus used to generate and store pure hydrogen gas via zinc-acid reaction, representing the earliest ancestor of today’s green hydrogen storage, green ammonia, and e-fuels.',
    electrochemicalInsightAr:
      'تمثل خلية غروف الأساس العلمي المباشر لخلايا وقود غشاء التبادل البروتوني (PEMFC) التي تشغل قطارات وسيارات الهيدروجين وتخزن فائض طاقة الرياح والشمس في مصر والشرق الأوسط اليوم.',
    electrochemicalInsightEn:
      'Grove’s gas battery is the direct scientific precursor to Proton Exchange Membrane (PEM) fuel cells powering zero-emission transit and balancing solar/wind grids across modern green hydrogen hubs.',
  },
];

export const GroveHydrogenFuelCellStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(GROVE_1839_HOTSPOTS[0]);
  const [showHiResModal, setShowHiResModal] = useState<boolean>(false);

  // Operating Mode: Fuel Cell (Power Generation) vs Electrolyzer (Hydrogen Production)
  const [mode, setMode] = useState<'fuel_cell' | 'electrolyzer'>('fuel_cell');

  // Simulator Inputs
  const [cellTempC, setCellTempC] = useState<number>(65); // Operating temperature °C
  const [currentDensityAcm2, setCurrentDensityAcm2] = useState<number>(0.65); // Current density A/cm²
  const [activeAreaCm2, setActiveAreaCm2] = useState<number>(120); // Active area cm²
  const [cellCount, setCellCount] = useState<number>(24); // Number of cells in stack
  const [pressureAtm, setPressureAtm] = useState<number>(2.0); // Gas pressure atm

  // Polarization & Stack Calculations
  const metrics = useMemo(() => {
    const tempK = cellTempC + 273.15;

    // Nernst theoretical reversible potential: E_Nernst = 1.229 - 0.000845 * (T - 298.15) + (R*T / 2F) * ln(P_H2 * P_O2^0.5)
    const nernstBase = 1.229 - 0.000845 * (tempK - 298.15);
    const nernstPressureTerm = (8.314 * tempK) / (2 * 96485) * Math.log(pressureAtm * Math.sqrt(pressureAtm));
    const eNernst = nernstBase + nernstPressureTerm;

    // Activation loss (Tafel equation): eta_act = a + b * ln(j)
    const j = Math.max(0.01, currentDensityAcm2);
    const etaAct = 0.06 + 0.045 * Math.log(j / 0.001);

    // Ohmic resistance loss: eta_ohm = j * R_area
    const rOhm = 0.16; // Ohm*cm² (membrane + contact resistance)
    const etaOhm = j * rOhm;

    // Concentration / Mass Transport loss: eta_conc = - (R*T / 2F) * ln(1 - j / j_limit)
    const jLimit = 1.8; // limiting current density A/cm²
    const concTerm = Math.max(0.02, 1 - j / jLimit);
    const etaConc = -((8.314 * tempK) / (2 * 96485)) * Math.log(concTerm);

    // Single Cell Voltage
    let vCell = 0;
    let stackVoltage = 0;
    let stackPowerKw = 0;
    let gasRateGramsPerHour = 0;
    let waterProductionRateGramsPerHour = 0;

    const totalCurrentAmps = j * activeAreaCm2;

    if (mode === 'fuel_cell') {
      vCell = Math.max(0.4, eNernst - etaAct - etaOhm - etaConc);
      stackVoltage = vCell * cellCount;
      stackPowerKw = (stackVoltage * totalCurrentAmps) / 1000;

      // Hydrogen consumption: 1 mole H2 = 2 grams. n_dot = I / (2 * F) moles/sec
      const molesH2PerSec = (totalCurrentAmps * cellCount) / (2 * 96485);
      gasRateGramsPerHour = molesH2PerSec * 2.016 * 3600; // grams H2/hr consumed
      waterProductionRateGramsPerHour = molesH2PerSec * 18.015 * 3600; // grams H2O/hr produced
    } else {
      // Electrolyzer Mode: Requires overcoming reversible potential + overpotentials
      vCell = eNernst + etaAct + etaOhm + etaConc + 0.15; // Overpotential penalty
      stackVoltage = vCell * cellCount;
      stackPowerKw = (stackVoltage * totalCurrentAmps) / 1000;

      // Hydrogen production rate via Faraday's Law
      const molesH2PerSec = (totalCurrentAmps * cellCount) / (2 * 96485);
      gasRateGramsPerHour = molesH2PerSec * 2.016 * 3600; // grams H2/hr produced
      waterProductionRateGramsPerHour = molesH2PerSec * 18.015 * 3600; // grams H2O/hr consumed
    }

    // Efficiency based on Lower Heating Value (LHV) of H2 = 1.253 V equivalent
    const cellEfficiencyPct = mode === 'fuel_cell'
      ? (vCell / 1.253) * 100
      : (1.253 / vCell) * 100;

    return {
      eNernst: Number(eNernst.toFixed(3)),
      etaAct: Number(etaAct.toFixed(3)),
      etaOhm: Number(etaOhm.toFixed(3)),
      etaConc: Number(etaConc.toFixed(3)),
      vCell: Number(vCell.toFixed(3)),
      stackVoltage: Number(stackVoltage.toFixed(1)),
      totalCurrentAmps: Number(totalCurrentAmps.toFixed(1)),
      stackPowerKw: Number(stackPowerKw.toFixed(2)),
      gasRateGramsPerHour: Number(gasRateGramsPerHour.toFixed(1)),
      waterProductionRateGramsPerHour: Number(waterProductionRateGramsPerHour.toFixed(1)),
      cellEfficiencyPct: Number(cellEfficiencyPct.toFixed(1)),
    };
  }, [cellTempC, currentDensityAcm2, activeAreaCm2, cellCount, pressureAtm, mode]);

  const modalData: HiResImageModalData = {
    imageUrl: grovePhoto,
    titleAr: 'بطارية ويليام روبرت غروف الغازية وميلاد خلية الوقود الهيدروجينية (۱۸۳۹)',
    titleEn: 'Sir William Robert Grove Gas Voltaic Battery (Royal Institution 1839)',
    subtitleAr: 'أول خلية وقود هيدروجينية وتوليد كيميائي مباشر للكهرباء من الغازات',
    subtitleEn: 'The Earliest Hydrogen Fuel Cell & Cold Electrochemical Power Generation',
    descriptionAr:
      'لوحة أرشيفية متحفية بالغة الدقة توثق جهاز بطارية الغاز الفولتية الأصلي الذي ابتكره السير ويليام روبرت غروف عام 1839 في المعهد الملكي ببريطانيا. تُظهر أنابيب الغاز المقلوبة المحتوية على الهيدروجين والأكسجين وشرائح البلاتين المنغمسة في الحمض، والجلفانوميتر الحساس المنحرف لإثبات سريان التيار، بجانب المجلد الأصلي للمجلة الفلسفية البريطانية لعام 1839.',
    descriptionEn:
      'Museum archival plate documenting Sir William Robert Grove’s 1839 gas voltaic battery at the Royal Institution of Great Britain. It displays the inverted tubes containing hydrogen and oxygen, platinized platinum foil electrodes, sulfuric acid bath, reflecting galvanometer, and the original 1839 Philosophical Magazine volume.',
    locationAr: 'المعهد الملكي لبريطانيا العظمى ومتحف العلوم، لندن، المملكة المتحدة',
    locationEn: 'The Royal Institution of Great Britain & Science Museum, London, UK',
    dateOrEraAr: '۱۸۳۹ ميلادية (عصر الاكتشافات الكهروكيميائية الفيكتورية)',
    dateOrEraEn: '1839 CE (Victorian Era of Electrochemical Discoveries)',
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
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b pb-6 border-cyan-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
            <Droplets className="w-3.5 h-3.5" />
            <span>{isArabic ? 'مبتكر خلية الوقود الهيدروجينية (۱۸۳۹)' : 'Inventor of the Hydrogen Fuel Cell (1839)'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {isArabic ? 'استوديو بطارية غروف الغازية وخلايا الهيدروجين (۱۸۳۹)' : 'William Robert Grove Hydrogen Fuel Cell Studio'}
          </h2>
          <p className="text-sm opacity-80 mt-1 max-w-3xl">
            {isArabic
              ? 'دراسة كهروكيميائية تفاعلية لأول خلية وقود هيدروجينية في التاريخ والتحليل الكهربائي العكوس للماء.'
              : 'Interactive electrochemical investigation of the 1839 Grove gas battery, reversible water electrolysis, and polarization kinetics.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Toggle Button */}
          <button
            onClick={() => setMode(mode === 'fuel_cell' ? 'electrolyzer' : 'fuel_cell')}
            className={`min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
              mode === 'fuel_cell'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                : 'bg-sky-500/20 text-sky-300 border-sky-500/40 hover:bg-sky-500/30'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>
              {mode === 'fuel_cell'
                ? isArabic ? 'نمط: خلية الوقود (توليد كهرباء)' : 'Mode: Fuel Cell (Power Gen)'
                : isArabic ? 'نمط: التحليل الكهربائي (إنتاج H₂)' : 'Mode: Electrolyzer (H₂ Gen)'}
            </span>
          </button>

          <button
            onClick={() => setShowHiResModal(true)}
            className="min-h-[44px] min-w-[44px] px-4 py-2.5 rounded-xl font-medium flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg hover:brightness-110 active:scale-95 transition-all text-sm"
          >
            <Maximize2 className="w-4 h-4" />
            <span>{isArabic ? 'استعراض اللوحة بدقة 4K' : 'View 4K Archival Plate'}</span>
          </button>
        </div>
      </div>

      {/* Main Archival Canvas with Hotspots */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-black aspect-[4/3] group">
            <img
              src={grovePhoto}
              alt="William Robert Grove Gas Battery 1839"
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Hotspot Markers */}
            {GROVE_1839_HOTSPOTS.map((spot) => {
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
                        ? 'bg-cyan-500 border-white text-black shadow-lg shadow-cyan-500/80 ring-4 ring-cyan-500/40'
                        : 'bg-slate-900/90 border-cyan-400 text-cyan-300 backdrop-blur-sm'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                  </span>
                </button>
              );
            })}

            {/* Live Overlay Caption */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-slate-900/80 border border-slate-700/60 text-xs md:text-sm">
              <span className="font-semibold text-cyan-400 block mb-1">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </span>
              <p className="line-clamp-2 opacity-90">
                {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
              </p>
            </div>
          </div>

          {/* Hotspots Selector Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {GROVE_1839_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  className={`min-h-[44px] p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                    isArabic ? 'text-right' : 'text-left'
                  } ${
                    isSelected
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-sm'
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
            <div className="flex items-center gap-2 text-cyan-400">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-bold text-base">
                {isArabic ? 'الملف الكهروكيميائي والثروديناميكي' : 'Electrochemical & Thermodynamic Dossier'}
              </h3>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
              </span>
              <h4 className="text-lg font-bold">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </h4>
            </div>

            <p className="text-sm leading-relaxed opacity-90">
              {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
            </p>

            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 space-y-1.5">
              <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                <Gauge className="w-4 h-4" />
                {isArabic ? 'المعادلة الكهروكيميائية لغروف (۱۸۳۹)' : 'Grove Reaction Principle'}
              </span>
              <p className="text-xs font-mono opacity-90 leading-relaxed">
                {isArabic ? selectedHotspot.electrochemicalInsightAr : selectedHotspot.electrochemicalInsightEn}
              </p>
            </div>
          </div>

          {/* Quick Electrochemical Stats */}
          <div
            className={`p-5 rounded-2xl border grid grid-cols-2 gap-3 text-center ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
            }`}
          >
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'جهد الخلية الفردية' : 'Single Cell Volts'}</span>
              <span className="text-lg font-bold text-cyan-400 font-mono">{metrics.vCell} V</span>
            </div>
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'جهد المكدس الكلي' : 'Stack Voltage'}</span>
              <span className="text-lg font-bold text-blue-400 font-mono">{metrics.stackVoltage} V</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-xs opacity-75 block">{isArabic ? 'كفاءة التحويل LHV' : 'LHV Efficiency'}</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">{metrics.cellEfficiencyPct}%</span>
            </div>
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
              <span className="text-xs opacity-75 block">
                {mode === 'fuel_cell'
                  ? isArabic ? 'إنتاج الماء النقي' : 'Water Produced'
                  : isArabic ? 'إنتاج الهيدروجين' : 'H₂ Produced'}
              </span>
              <span className="text-lg font-bold text-sky-400 font-mono">
                {mode === 'fuel_cell'
                  ? `${metrics.waterProductionRateGramsPerHour} g/h`
                  : `${metrics.gasRateGramsPerHour} g/h`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Fuel Cell Polarization & Stack Simulator */}
      <div
        className={`p-6 rounded-2xl border space-y-6 ${
          isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/60 border-slate-800'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-cyan-500/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                {isArabic
                  ? 'محاكي الاستقطاب الكهروكيميائي لخلية غروف (Polarization Curve Simulator)'
                  : 'Electrochemical Polarization Curve & Fuel Cell Stack Simulator'}
              </h3>
              <p className="text-xs opacity-75">
                {isArabic
                  ? 'تعديل كثافة التيار، حرارة التشغيل، الضغط، ومساحة الخلية لدراسة هبوط الجهد الفولتامي وإنتاج الطاقة'
                  : 'Modulate current density, temperature, pressure and active cell area to observe overpotentials and stack power'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>E_Nernst: {metrics.eNernst} V</span>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Current Density */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-cyan-400 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                {isArabic ? 'كثافة التيار (j)' : 'Current Density (j)'}
              </span>
              <span className="font-mono font-bold">{currentDensityAcm2.toFixed(2)} A/cm²</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="1.50"
              step="0.05"
              value={currentDensityAcm2}
              onChange={(e) => setCurrentDensityAcm2(Number(e.target.value))}
              className="w-full accent-cyan-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>0.05 (دارة شبه مفتوحة)</span>
              <span>0.65 (نقطة تشغيل مثلى)</span>
              <span>1.50 (حمل أقصى)</span>
            </div>
          </div>

          {/* Operating Temperature */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-cyan-400 flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5" />
                {isArabic ? 'حرارة الخلية' : 'Cell Operating Temp'}
              </span>
              <span className="font-mono font-bold">{cellTempC}°C</span>
            </div>
            <input
              type="range"
              min="20"
              max="85"
              step="1"
              value={cellTempC}
              onChange={(e) => setCellTempC(Number(e.target.value))}
              className="w-full accent-cyan-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>20°C (غرفة غروف 1839)</span>
              <span>65°C (PEMFC مثالي)</span>
              <span>85°C (حرارة قصوى)</span>
            </div>
          </div>

          {/* Active Area */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-cyan-400 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                {isArabic ? 'مساحة القطب النشطة' : 'Active Area (A)'}
              </span>
              <span className="font-mono font-bold">{activeAreaCm2} cm²</span>
            </div>
            <input
              type="range"
              min="20"
              max="300"
              step="10"
              value={activeAreaCm2}
              onChange={(e) => setActiveAreaCm2(Number(e.target.value))}
              className="w-full accent-cyan-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>20 cm² (مخبري مصغر)</span>
              <span>120 cm² (تجاري قياسي)</span>
              <span>300 cm² (محطات كبرى)</span>
            </div>
          </div>

          {/* Cell Count in Stack */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-cyan-400 flex items-center gap-1">
                <Activity className="w-3.5 h-3.5" />
                {isArabic ? 'عدد الخلايا في المكدس' : 'Stack Cell Count'}
              </span>
              <span className="font-mono font-bold">{cellCount} cells</span>
            </div>
            <input
              type="range"
              min="1"
              max="60"
              step="1"
              value={cellCount}
              onChange={(e) => setCellCount(Number(e.target.value))}
              className="w-full accent-cyan-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>1 (خلية مفردة)</span>
              <span>24 (مكدس سيارة)</span>
              <span>60 (تخزين شبكي)</span>
            </div>
          </div>

          {/* Gas Pressure */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-cyan-400 flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5" />
                {isArabic ? 'ضغط غازات الإمداد (P)' : 'Gas Supply Pressure'}
              </span>
              <span className="font-mono font-bold">{pressureAtm} atm</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="5.0"
              step="0.1"
              value={pressureAtm}
              onChange={(e) => setPressureAtm(Number(e.target.value))}
              className="w-full accent-cyan-500 min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] opacity-60">
              <span>1.0 atm (ضغط جوي عادي)</span>
              <span>2.0 atm (تشغيل قياسي)</span>
              <span>5.0 atm (ضغط مرتفع)</span>
            </div>
          </div>
        </div>

        {/* Vector SVG Diagram of Electrochemical Polarization Curve */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 font-semibold text-cyan-400">
              <Activity className="w-3.5 h-3.5" />
              {isArabic
                ? 'منحنى استقطاب خلية الوقود ومناطق هبوط الجهد الثلاث'
                : 'Fuel Cell Polarization Curve & Three Loss Regimes'}
            </span>
            <span>Pressure: {pressureAtm} atm</span>
          </div>

          <div className="w-full aspect-[21/9] max-h-56 relative flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 800 240" className="w-full h-full">
              {/* Axes */}
              <line x1="60" y1="200" x2="740" y2="200" stroke="#64748b" strokeWidth="1.5" />
              <line x1="60" y1="200" x2="60" y2="30" stroke="#64748b" strokeWidth="1.5" />

              {/* Guidelines */}
              <line x1="60" y1="45" x2="740" y2="45" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
              <text x="650" y="40" fill="#38bdf8" fontSize="10">
                E_Nernst = {metrics.eNernst} V
              </text>

              {/* Three Regimes Labels */}
              <rect x="70" y="55" width="120" height="20" fill="#ef4444" fillOpacity="0.2" rx="4" />
              <text x="75" y="69" fill="#ef4444" fontSize="9">
                1. Activation (Tafel)
              </text>

              <rect x="230" y="55" width="140" height="20" fill="#f59e0b" fillOpacity="0.2" rx="4" />
              <text x="235" y="69" fill="#f59e0b" fontSize="9">
                2. Ohmic Loss (Linear)
              </text>

              <rect x="440" y="55" width="160" height="20" fill="#a855f7" fillOpacity="0.2" rx="4" />
              <text x="445" y="69" fill="#a855f7" fontSize="9">
                3. Mass Transport (Conc.)
              </text>

              {/* Polarization Curve: steep initial drop, linear region, steep final cliff */}
              <path
                d="M 60 45 C 90 100, 140 115, 300 135 C 500 155, 620 170, 710 200"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="3"
              />

              {/* Current Operating Point Marker */}
              {/* Scale: x from 60 (j=0) to 700 (j=1.5). y from 200 (V=0) to 45 (V=1.23) */}
              <circle
                cx={60 + (currentDensityAcm2 / 1.5) * 640}
                cy={200 - (metrics.vCell / 1.25) * 155}
                r="7"
                fill="#f59e0b"
                stroke="#fff"
                strokeWidth="2"
              />

              {/* Labels on Axes */}
              <text x="60" y="215" fill="#94a3b8" fontSize="10">0.0 A/cm²</text>
              <text x="380" y="225" fill="#94a3b8" fontSize="11" textAnchor="middle">Current Density j (A/cm²)</text>
              <text x="700" y="215" fill="#94a3b8" fontSize="10">1.5 A/cm²</text>

              <text x="25" y="50" fill="#38bdf8" fontSize="10">1.2 V</text>
              <text x="25" y="125" fill="#94a3b8" fontSize="10">0.8 V</text>
              <text x="25" y="200" fill="#94a3b8" fontSize="10">0.0 V</text>
            </svg>
          </div>
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>فقد التنشيط: η_act = {metrics.etaAct} V</span>
            <span>الفقد الأومي: η_ohm = {metrics.etaOhm} V</span>
            <span>فقد التركيز: η_conc = {metrics.etaConc} V</span>
            <span className="text-cyan-400 font-bold">جهد التشغيل: V_cell = {metrics.vCell} V</span>
          </div>
        </div>

        {/* Live Calculation Outcomes Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 space-y-1">
            <span className="text-xs text-cyan-400 font-medium block">
              {isArabic ? 'التيار الكهربائي الكلي' : 'Total Stack Current'}
            </span>
            <span className="text-xl font-bold font-mono text-cyan-300">
              {metrics.totalCurrentAmps} A
            </span>
            <span className="text-[10px] opacity-60 block">I = j · A_cell</span>
          </div>

          <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 space-y-1">
            <span className="text-xs text-blue-400 font-medium block">
              {isArabic ? 'جهد المكدس الكلي' : 'Stack Output Voltage'}
            </span>
            <span className="text-xl font-bold font-mono text-blue-300">
              {metrics.stackVoltage} V
            </span>
            <span className="text-[10px] opacity-60 block">{cellCount} cells in series</span>
          </div>

          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-1">
            <span className="text-xs text-emerald-400 font-medium block">
              {isArabic ? 'القدرة الكهربائية للمكدس' : 'Stack Net Power'}
            </span>
            <span className="text-xl font-bold font-mono text-emerald-300">
              {metrics.stackPowerKw} kW
            </span>
            <span className="text-[10px] opacity-60 block">P = V_stack · I</span>
          </div>

          <div className="p-4 rounded-xl border border-sky-500/20 bg-sky-500/5 space-y-1">
            <span className="text-xs text-sky-400 font-medium block flex items-center gap-1">
              <Droplets className="w-3.5 h-3.5" />
              {mode === 'fuel_cell'
                ? isArabic ? 'استهلاك غاز H₂' : 'H₂ Gas Consumed'
                : isArabic ? 'إنتاج غاز H₂ الأخضر' : 'Green H₂ Produced'}
            </span>
            <span className="text-xl font-bold font-mono text-sky-300">
              {metrics.gasRateGramsPerHour} g/h
            </span>
            <span className="text-[10px] opacity-60 block">Faraday: ṅ = I·N / (z·F)</span>
          </div>
        </div>

        {/* Historical Context Callout */}
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-start gap-3 text-xs md:text-sm">
          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-cyan-300">
              {isArabic ? 'من خلية غروف ۱۸۳۹ إلى مشروعات الهيدروجين الأخضر بالمنطقة الاقتصادية لقناة السويس (SCZONE):' : 'From Grove’s 1839 Cell to Egypt SCZONE Green Hydrogen Hub:'}
            </span>
            <p className="opacity-90 leading-relaxed text-xs">
              {isArabic
                ? 'تعتبر مصر اليوم مركزاً عالمياً رائداً لإنتاج الهيدروجين والأمونيا الخضراء بتدشين أول مصنع متكامل في العين السخنة بقدرة ۱۰۰ ميجاوات من محللات المياه بالتحليل الكهربائي، مستنداً بدقة متناهية إلى نفس التفاعلات الكهروكيميائية العكوسة التي صاغها غروف لأول مرة قبل قرابة مائتي عام.'
                : 'Egypt is currently a global powerhouse in green hydrogen and green ammonia, inaugurating its first 100 MW integrated water electrolyzer facility in Ain Sokhna (SCZONE), founded directly on the reversible electrochemical laws first demonstrated by Sir William Grove nearly two centuries ago.'}
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
