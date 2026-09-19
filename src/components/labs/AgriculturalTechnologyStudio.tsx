import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import {
  SOIL_TYPE_PRESETS,
  STRATEGIC_CROPS,
  IRRIGATION_METHODS,
  EGYPTIAN_MEGA_PROJECTS,
  IPM_DIAGNOSTICS_CATALOG,
  type SoilTypePreset,
  type StrategicCropData,
  type IrrigationMethod,
  type EgyptianMegaProject,
  type PlantPathologyDiagnostic,
} from '../../data/agricultureLab/agricultureLabData';
import {
  Sprout,
  Droplets,
  Sun,
  Wind,
  Layers,
  Thermometer,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Maximize2,
  Minimize2,
  RotateCcw,
  Compass,
  MapPin,
  Bug,
  ShieldCheck,
  Zap,
  Info,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialStation?: AgriStation;
}

export type AgriStation =
  | 'soil_chemistry'
  | 'irrigation_budgeting'
  | 'hydroponics_greenhouse'
  | 'egyptian_megaprojects'
  | 'ipm_pathology';

export const AgriculturalTechnologyStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialStation = 'soil_chemistry',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  const [activeStation, setActiveStation] = useState<AgriStation>(initialStation);

  // -------------------------------------------------------------
  // STATION 1: Soil Chemistry & Fertigation State
  // -------------------------------------------------------------
  const [selectedSoilPreset, setSelectedSoilPreset] = useState<SoilTypePreset>(SOIL_TYPE_PRESETS[1]); // Toshka sand default
  const [soilSand, setSoilSand] = useState<number>(selectedSoilPreset.sandPct);
  const [soilSilt, setSoilSilt] = useState<number>(selectedSoilPreset.siltPct);
  const [soilClay, setSoilClay] = useState<number>(selectedSoilPreset.clayPct);
  const [soilPh, setSoilPh] = useState<number>(selectedSoilPreset.defaultPh);
  const [soilEc, setSoilEc] = useState<number>(selectedSoilPreset.defaultEc);
  const [soilCec, setSoilCec] = useState<number>(selectedSoilPreset.defaultCec);
  const [soilEsp, setSoilEsp] = useState<number>(8.5); // Exchangeable Sodium Percentage (%)
  const targetEsp = 5.0;

  const handleSoilPresetChange = (preset: SoilTypePreset) => {
    setSelectedSoilPreset(preset);
    setSoilSand(preset.sandPct);
    setSoilSilt(preset.siltPct);
    setSoilClay(preset.clayPct);
    setSoilPh(preset.defaultPh);
    setSoilEc(preset.defaultEc);
    setSoilCec(preset.defaultCec);
  };

  // Gypsum Requirement (tons of CaSO4.2H2O per feddan to reduce ESP to target)
  const gypsumRequirementTons = useMemo(() => {
    if (soilEsp <= targetEsp) return 0;
    // Formula: GR = (ESP - targetESP)/100 * CEC * 0.086 * 4.2 * 10 (approx tons/feddan)
    // MoE Standard: GR = (ESP - targetESP) * CEC * 0.086
    const gr = (soilEsp - targetEsp) * soilCec * 0.086;
    return Math.max(0, parseFloat(gr.toFixed(2)));
  }, [soilEsp, targetEsp, soilCec]);

  // SAR estimation
  const sarEstimate = useMemo(() => {
    // SAR ≈ ESP / (1.475 - 0.01475 * ESP) empirical US Salinity Lab
    const denom = 1.475 - 0.01475 * soilEsp;
    return denom > 0 ? (soilEsp / denom).toFixed(1) : (soilEsp * 0.8).toFixed(1);
  }, [soilEsp]);

  // -------------------------------------------------------------
  // STATION 2: Evapotranspiration & Irrigation Budgeting State
  // -------------------------------------------------------------
  const [selectedCrop, setSelectedCrop] = useState<StrategicCropData>(STRATEGIC_CROPS[0]);
  const [selectedCropStageIdx, setSelectedCropStageIdx] = useState<number>(2); // Mid-season
  const [selectedIrrigation, setSelectedIrrigation] = useState<IrrigationMethod>(IRRIGATION_METHODS[1]); // Center pivot default
  const [ambientTemp, setAmbientTemp] = useState<number>(32); // °C
  const [solarRadiation, setSolarRadiation] = useState<number>(24); // MJ/m2/day
  const [windSpeed, setWindSpeed] = useState<number>(3.2); // m/s
  const [relativeHumidity, setRelativeHumidity] = useState<number>(35); // %
  const [irrigationWaterEc, setIrrigationWaterEc] = useState<number>(1.2); // dS/m
  const [fieldAreaFeddan, setFieldAreaFeddan] = useState<number>(125); // Standard Toshka/New Delta pivot area

  // Reference Evapotranspiration ET0 (FAO-56 Penman-Monteith approximation)
  const et0 = useMemo(() => {
    // Simplified radiation term and aerodynamic term
    const t = ambientTemp;
    const rs = solarRadiation;
    const u2 = windSpeed;
    const rh = relativeHumidity;
    // Saturation vapor pressure
    const es = 0.6108 * Math.exp((17.27 * t) / (t + 237.3));
    const ea = es * (rh / 100);
    const vpd = Math.max(0.1, es - ea);
    const delta = (4098 * es) / Math.pow(t + 237.3, 2);
    const gamma = 0.067; // Psychrometric constant at sea level / low elevation

    const radTerm = (0.408 * delta * (rs * 0.6)) / (delta + gamma * (1 + 0.34 * u2));
    const aeroTerm = ((gamma * (900 / (t + 273)) * u2 * vpd) / (delta + gamma * (1 + 0.34 * u2)));
    const val = radTerm + aeroTerm;
    return Math.max(1.5, Math.min(14.0, parseFloat(val.toFixed(2))));
  }, [ambientTemp, solarRadiation, windSpeed, relativeHumidity]);

  const currentKc = selectedCrop.growthStages[selectedCropStageIdx].kc;
  const etc = parseFloat((et0 * currentKc).toFixed(2)); // mm/day

  // Leaching Requirement LR = ECw / (5 * ECe - ECw)
  const leachingRequirement = useMemo(() => {
    const denom = 5 * selectedCrop.baseEcThreshold - irrigationWaterEc;
    if (denom <= 0) return 0.25;
    const lr = irrigationWaterEc / denom;
    return Math.min(0.4, Math.max(0.05, parseFloat(lr.toFixed(3))));
  }, [irrigationWaterEc, selectedCrop]);

  // Gross Irrigation Requirement (m3 / feddan / day)
  // 1 mm water depth over 1 feddan (4200.83 m2) = 4.20083 m3
  const girM3PerFeddanDay = useMemo(() => {
    const netM3 = etc * 4.2;
    const eff = selectedIrrigation.efficiencyPct / 100;
    const gross = (netM3 * (1 + leachingRequirement)) / eff;
    return parseFloat(gross.toFixed(1));
  }, [etc, selectedIrrigation, leachingRequirement]);

  const totalDailyPivotDemandM3 = parseFloat((girM3PerFeddanDay * fieldAreaFeddan).toFixed(0));

  // -------------------------------------------------------------
  // STATION 3: Hydroponics & Controlled Greenhouse State
  // -------------------------------------------------------------
  const [ghTemp, setGhTemp] = useState<number>(24);
  const [ghHumidity, setGhHumidity] = useState<number>(65);
  const [ghCo2Ppm, setGhCo2Ppm] = useState<number>(850);
  const [ghParLight, setGhParLight] = useState<number>(450); // umol/m2/s
  const [hydroponicEc, setHydroponicEc] = useState<number>(1.8); // dS/m
  const [hydroponicPh, setHydroponicPh] = useState<number>(6.0);
  const [hydroponicSystem, setHydroponicSystem] = useState<'nft' | 'dwc' | 'dutch_bucket'>('nft');

  // VPD calculation inside greenhouse
  const ghVpd = useMemo(() => {
    const es = 0.6108 * Math.exp((17.27 * ghTemp) / (ghTemp + 237.3));
    const ea = es * (ghHumidity / 100);
    return parseFloat((es - ea).toFixed(2));
  }, [ghTemp, ghHumidity]);

  const vpdStatus = useMemo(() => {
    if (ghVpd < 0.4) return { labelAr: 'رطوبة مفرطة (خطر الفطريات والبياض)', labelEn: 'Too Humid (Fungal Risk)', color: 'text-amber-500' };
    if (ghVpd >= 0.8 && ghVpd <= 1.2) return { labelAr: 'المعدل المثالي للنتح والنمو (0.8 - 1.2 kPa)', labelEn: 'Optimal Transpiration Zone', color: 'text-emerald-500' };
    if (ghVpd > 1.2 && ghVpd <= 1.6) return { labelAr: 'جفاف طفيف (زيادة تهوية وتبريد)', labelEn: 'Moderate Stress', color: 'text-blue-500' };
    return { labelAr: 'إجهاد جفاف شديد (إغلاق الثغور)', labelEn: 'Severe Drought Stress', color: 'text-red-500' };
  }, [ghVpd]);

  // -------------------------------------------------------------
  // STATION 4: Egyptian Mega-Projects Reclamation State
  // -------------------------------------------------------------
  const [activeProject, setActiveProject] = useState<EgyptianMegaProject>(EGYPTIAN_MEGA_PROJECTS[0]);

  // -------------------------------------------------------------
  // STATION 5: IPM & Pathology Diagnostic State
  // -------------------------------------------------------------
  const [activeDiagnostic, setActiveDiagnostic] = useState<PlantPathologyDiagnostic>(IPM_DIAGNOSTICS_CATALOG[0]);
  const [observedIncidencePct, setObservedIncidencePct] = useState<number>(3.5);

  const isThresholdExceeded = useMemo(() => {
    if (activeDiagnostic.id === 'red_palm_weevil') return observedIncidencePct > 0;
    if (activeDiagnostic.id === 'wheat_stripe_rust') return observedIncidencePct >= 1.5;
    if (activeDiagnostic.id === 'fall_armyworm') return observedIncidencePct >= 10.0;
    if (activeDiagnostic.id === 'tomato_late_blight') return observedIncidencePct >= 1.0;
    return observedIncidencePct >= 5.0;
  }, [activeDiagnostic, observedIncidencePct]);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'relative w-full my-6'
      } ${
        isContrast
          ? 'bg-black text-white border-white'
          : isLight
          ? 'bg-slate-50 text-slate-900 border-slate-200 shadow-xl'
          : 'bg-[#0D1117] text-slate-100 border-slate-800 shadow-2xl'
      }`}
    >
      {/* ------------------------------------------------------------- */}
      {/* Studio Header */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
          isContrast
            ? 'border-white bg-black'
            : isLight
            ? 'border-slate-200 bg-white'
            : 'border-slate-800 bg-[#161B22]'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Sprout className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                {isArabic
                  ? 'مختبر التكنولوجيا والعلوم الزراعية الحديثة'
                  : 'Agricultural Sciences & Agrotechnology Studio'}
              </h2>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {isArabic ? 'معتمد رسمياً' : 'MoE Certified'}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isArabic
                ? 'نمذجة كيمياء التربة والري المحوري والتسميد والمشروعات القومية الكبرى والمكافحة المتكاملة'
                : 'Soil Chemistry, Precision Fertigation, FAO-56 Water Budgeting, Mega-Projects & IPM'}
            </p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className={`p-2 rounded-lg border transition-colors ${
              isLight
                ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Navigation Station Tabs */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`flex items-center gap-1 px-4 py-2 border-b overflow-x-auto ${
          isContrast
            ? 'border-white bg-black'
            : isLight
            ? 'border-slate-200 bg-slate-100/70'
            : 'border-slate-800 bg-[#0d1117]'
        }`}
      >
        {[
          {
            id: 'soil_chemistry' as AgriStation,
            nameAr: 'كيمياء التربة والتسميد NPK',
            nameEn: 'Soil & Fertigation',
            icon: Layers,
          },
          {
            id: 'irrigation_budgeting' as AgriStation,
            nameAr: 'الموازنة المائية والري الذكي',
            nameEn: 'Water Budget & Irrigation',
            icon: Droplets,
          },
          {
            id: 'hydroponics_greenhouse' as AgriStation,
            nameAr: 'البيوت المحمية والهيدروبونيك',
            nameEn: 'Greenhouse & Hydroponics',
            icon: Thermometer,
          },
          {
            id: 'egyptian_megaprojects' as AgriStation,
            nameAr: 'المشروعات القومية الزراعية',
            nameEn: 'National Mega-Projects',
            icon: Compass,
          },
          {
            id: 'ipm_pathology' as AgriStation,
            nameAr: 'المكافحة المتكاملة وتشخيص الآفات',
            nameEn: 'IPM & Plant Clinic',
            icon: Bug,
          },
        ].map((station) => {
          const Icon = station.icon;
          const isActive = activeStation === station.id;
          return (
            <button
              key={station.id}
              onClick={() => setActiveStation(station.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-md'
                  : isLight
                  ? 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{isArabic ? station.nameAr : station.nameEn}</span>
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Studio Workspace Content */}
      {/* ------------------------------------------------------------- */}
      <div className="flex-1 p-5 overflow-y-auto">
        {/* ========================================================= */}
        {/* STATION 1: Soil Chemistry & Fertigation */}
        {/* ========================================================= */}
        {activeStation === 'soil_chemistry' && (
          <div className="space-y-6">
            {/* Preset Selector */}
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-500">
                {isArabic ? 'نماذج التربة المصرية:' : 'Egyptian Soil Presets:'}
              </span>
              {SOIL_TYPE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSoilPresetChange(preset)}
                  className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                    selectedSoilPreset.id === preset.id
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold'
                      : isLight
                      ? 'border-slate-200 hover:bg-slate-100 text-slate-600'
                      : 'border-slate-800 hover:bg-slate-800 text-slate-400'
                  }`}
                >
                  {isArabic ? preset.nameAr : preset.nameEn}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Controls Column */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <Activity className="w-4 h-4" />
                  {isArabic ? 'المحددات الفيزيائية والكيميائية' : 'Physicochemical Parameters'}
                </h3>

                {/* Soil Texture Fraction */}
                <div className="p-3 rounded-lg bg-slate-500/10 border border-slate-500/20 text-xs">
                  <div className="flex items-center justify-between mb-1.5 font-medium">
                    <span>{isArabic ? 'تكوين حبيبات التربة' : 'Soil Texture Composition'}</span>
                    <button
                      onClick={() => handleSoilPresetChange(selectedSoilPreset)}
                      className="flex items-center gap-1 text-[11px] text-emerald-500 hover:underline"
                    >
                      <RotateCcw className="w-3 h-3" />
                      {isArabic ? 'إعادة تعيين' : 'Reset'}
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="p-1.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <div>{isArabic ? 'رمل' : 'Sand'}</div>
                      <div className="tabular-mono font-bold text-xs">{soilSand}%</div>
                    </div>
                    <div className="p-1.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <div>{isArabic ? 'غرين' : 'Silt'}</div>
                      <div className="tabular-mono font-bold text-xs">{soilSilt}%</div>
                    </div>
                    <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <div>{isArabic ? 'طين' : 'Clay'}</div>
                      <div className="tabular-mono font-bold text-xs">{soilClay}%</div>
                    </div>
                  </div>
                </div>

                {/* pH Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'درجة حموضة التربة (pH)' : 'Soil pH'}</span>
                    <span className="tabular-mono font-bold text-emerald-500">{soilPh.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="5.0"
                    max="9.5"
                    step="0.1"
                    value={soilPh}
                    onChange={(e) => setSoilPh(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>5.0 (حامضي)</span>
                    <span>7.0 (متعادل)</span>
                    <span>9.5 (قلوي صودي)</span>
                  </div>
                </div>

                {/* EC Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الملوحة الكلية ECe (dS/m)' : 'Salinity ECe (dS/m)'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{soilEc.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="20.0"
                    step="0.1"
                    value={soilEc}
                    onChange={(e) => setSoilEc(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>0.5 (عذبة خالية)</span>
                    <span>4.0 (حد الملوحة)</span>
                    <span>20.0 (ملحية شديدة)</span>
                  </div>
                </div>

                {/* CEC Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'السعة التبادلية الكاتيونية CEC' : 'Cation Exchange Capacity (CEC)'}</span>
                    <span className="tabular-mono font-bold text-blue-500">{soilCec.toFixed(1)} meq/100g</span>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="50.0"
                    step="0.5"
                    value={soilCec}
                    onChange={(e) => setSoilCec(parseFloat(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                {/* ESP Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'نسبة الصوديوم المتبادل (ESP %)' : 'Exch. Sodium Pct (ESP %)'}</span>
                    <span className="tabular-mono font-bold text-red-500">{soilEsp.toFixed(1)} %</span>
                  </div>
                  <input
                    type="range"
                    min="2.0"
                    max="35.0"
                    step="0.5"
                    value={soilEsp}
                    onChange={(e) => setSoilEsp(parseFloat(e.target.value))}
                    className="w-full accent-red-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>&lt; 5% (طبيعي)</span>
                    <span>&gt; 15% (تربة صودية قلوية)</span>
                  </div>
                </div>
              </div>

              {/* Analysis & Gypsum Calculation */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-amber-500">
                  <Zap className="w-4 h-4" />
                  {isArabic ? 'حساب الاحتياج الجبسي واستصلاح القلوية' : 'Gypsum Requirement & Sodic Reclamation'}
                </h3>

                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {isArabic ? 'كمية الجبس الزراعي المطلوبة:' : 'Calculated Agricultural Gypsum:'}
                  </div>
                  <div className="text-2xl font-black tabular-mono text-emerald-500 mt-1">
                    {gypsumRequirementTons}{' '}
                    <span className="text-xs font-normal text-slate-400">
                      {isArabic ? 'طن جبس نقي / فدان' : 'tons / feddan'}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {isArabic
                      ? `بناءً على خفض نسبة الصوديوم من ${soilEsp}% إلى ${targetEsp}% في عمق 30 سم.`
                      : `To lower soil ESP from ${soilEsp}% to target ${targetEsp}% in root zone.`}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">{isArabic ? 'معامل ادمصاص الصوديوم (SAR):' : 'Sodium Adsorption Ratio (SAR):'}</span>
                    <span className="tabular-mono font-bold">{sarEstimate}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">{isArabic ? 'تصنيف التربة القومي:' : 'Soil Classification:'}</span>
                    <span className="font-semibold text-emerald-500">
                      {soilEc > 4.0 && soilEsp > 15
                        ? (isArabic ? 'ملحية صودية (Saline-Sodic)' : 'Saline-Sodic')
                        : soilEc > 4.0
                        ? (isArabic ? 'ملحية غير صودية (Saline)' : 'Saline')
                        : soilEsp > 15
                        ? (isArabic ? 'قلوية صودية (Sodic)' : 'Sodic')
                        : (isArabic ? 'طبيعية خالية من الأملاح (Normal)' : 'Normal Productive')}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">{isArabic ? 'معدل الصرف والتهوية:' : 'Drainage Rating:'}</span>
                    <span className="font-medium uppercase">{selectedSoilPreset.drainageRate}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">{isArabic ? 'النطاق الجغرافي الشائع:' : 'Geographic Region:'}</span>
                    <span className="text-right text-[11px] max-w-[180px] font-medium text-slate-700 dark:text-slate-300">
                      {isArabic ? selectedSoilPreset.egyptianRegionAr : selectedSoilPreset.egyptianRegionEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Fertigation NPK Recommendation */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-blue-500">
                  <Sprout className="w-4 h-4" />
                  {isArabic ? 'برنامج التسميد NPK الموصى به' : 'Fertigation NPK Prescription'}
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-500 block mb-1">
                      {isArabic ? 'المحصول المستهدف:' : 'Target Crop:'}
                    </label>
                    <select
                      value={selectedCrop.id}
                      onChange={(e) => {
                        const c = STRATEGIC_CROPS.find((cr) => cr.id === e.target.value);
                        if (c) setSelectedCrop(c);
                      }}
                      className={`w-full p-2 text-xs rounded-lg border ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800 border-slate-700'
                      }`}
                    >
                      {STRATEGIC_CROPS.map((cr) => (
                        <option key={cr.id} value={cr.id}>
                          {isArabic ? cr.nameAr : cr.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1">
                      {isArabic ? 'الطور الفسيولوجي للنمو:' : 'Phenological Growth Stage:'}
                    </label>
                    <select
                      value={selectedCropStageIdx}
                      onChange={(e) => setSelectedCropStageIdx(parseInt(e.target.value, 10))}
                      className={`w-full p-2 text-xs rounded-lg border ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800 border-slate-700'
                      }`}
                    >
                      {selectedCrop.growthStages.map((stg, idx) => (
                        <option key={stg.stage} value={idx}>
                          {isArabic ? stg.nameAr : stg.nameEn} (Kc = {stg.kc})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* NPK Ratio Badges */}
                  <div className="pt-2">
                    <div className="text-xs font-semibold mb-2 text-slate-600 dark:text-slate-300">
                      {isArabic ? 'جرعات العناصر الكبرى الموصى بها (كجم/فدان/أسبوع):' : 'Recommended Dosing (kg/feddan/week):'}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <div className="text-[10px] text-blue-500 font-bold">N (نيتروجين)</div>
                        <div className="text-lg font-black tabular-mono text-blue-600 dark:text-blue-400">
                          {selectedCrop.growthStages[selectedCropStageIdx].npkRatio.n}
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <div className="text-[10px] text-amber-500 font-bold">P₂O₅ (فوسفور)</div>
                        <div className="text-lg font-black tabular-mono text-amber-600 dark:text-amber-400">
                          {selectedCrop.growthStages[selectedCropStageIdx].npkRatio.p}
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <div className="text-[10px] text-emerald-500 font-bold">K₂O (بوتاسيوم)</div>
                        <div className="text-lg font-black tabular-mono text-emerald-600 dark:text-emerald-400">
                          {selectedCrop.growthStages[selectedCropStageIdx].npkRatio.k}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 2: Evapotranspiration & Irrigation Budgeting */}
        {/* ========================================================= */}
        {activeStation === 'irrigation_budgeting' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Climate inputs */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-blue-500">
                  <Sun className="w-4 h-4" />
                  {isArabic ? 'العوامل المناخية ومحطة الأرصاد' : 'Agro-Meteorological Drivers'}
                </h3>

                {/* Temperature */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'درجة الحرارة العظمى (°م)' : 'Air Temperature (°C)'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{ambientTemp} °C</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="46"
                    value={ambientTemp}
                    onChange={(e) => setAmbientTemp(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Solar Radiation */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الإشعاع الشمسي (MJ/m²/day)' : 'Solar Radiation (MJ/m²/day)'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{solarRadiation}</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="32"
                    value={solarRadiation}
                    onChange={(e) => setSolarRadiation(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Wind Speed */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-blue-400" />
                      {isArabic ? 'سرعة الرياح على ارتفاع 2م (m/s)' : 'Wind Speed @ 2m (m/s)'}
                    </span>
                    <span className="tabular-mono font-bold text-blue-500">{windSpeed.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="8.0"
                    step="0.2"
                    value={windSpeed}
                    onChange={(e) => setWindSpeed(parseFloat(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                {/* Humidity */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الرطوبة النسبية (% RH)' : 'Relative Humidity (% RH)'}</span>
                    <span className="tabular-mono font-bold text-blue-500">{relativeHumidity} %</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="85"
                    value={relativeHumidity}
                    onChange={(e) => setRelativeHumidity(parseInt(e.target.value, 10))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                {/* Irrigation Water Salinity */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'ملوحة مياه الري ECw (dS/m)' : 'Water Salinity ECw (dS/m)'}</span>
                    <span className="tabular-mono font-bold text-emerald-500">{irrigationWaterEc.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.4"
                    max="5.0"
                    step="0.1"
                    value={irrigationWaterEc}
                    onChange={(e) => setIrrigationWaterEc(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Crop & System selection */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <Sprout className="w-4 h-4" />
                  {isArabic ? 'نظام الري والمحصول' : 'Crop & Irrigation Hardware'}
                </h3>

                <div>
                  <label className="text-xs text-slate-500 block mb-1">
                    {isArabic ? 'نظام الري المطبق:' : 'Applied Irrigation Method:'}
                  </label>
                  <select
                    value={selectedIrrigation.id}
                    onChange={(e) => {
                      const m = IRRIGATION_METHODS.find((ir) => ir.id === e.target.value);
                      if (m) setSelectedIrrigation(m);
                    }}
                    className={`w-full p-2 text-xs rounded-lg border ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800 border-slate-700'
                    }`}
                  >
                    {IRRIGATION_METHODS.map((ir) => (
                      <option key={ir.id} value={ir.id}>
                        {isArabic ? ir.nameAr : ir.nameEn} ({ir.efficiencyPct}% كفاءة)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-500 block mb-1">
                    {isArabic ? 'مساحة الحقل / جهاز الري المحوري (فدان):' : 'Field / Pivot Area (Feddans):'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={fieldAreaFeddan}
                    onChange={(e) => setFieldAreaFeddan(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className={`w-full p-2 text-xs rounded-lg border tabular-mono ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800 border-slate-700'
                    }`}
                  />
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'معامل المحصول (Kc):' : 'Crop Coeff (Kc):'}</span>
                    <span className="tabular-mono font-bold text-emerald-500">{currentKc}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'عمق المجموع الجذري:' : 'Rooting Depth:'}</span>
                    <span className="tabular-mono font-bold">
                      {selectedCrop.growthStages[selectedCropStageIdx].rootDepthM} م
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'كفاءة التطبيق الحقلية:' : 'Application Efficiency:'}</span>
                    <span className="tabular-mono font-bold text-blue-500">
                      {selectedIrrigation.efficiencyPct}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'الاحتياج الغسيلي (LR):' : 'Leaching Fraction (LR):'}</span>
                    <span className="tabular-mono font-bold text-amber-500">
                      {(leachingRequirement * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Water Budgeting Outputs */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <Droplets className="w-4 h-4" />
                  {isArabic ? 'المقننات والموازنة المائية اليومية' : 'Calculated Water Budget (FAO-56)'}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                    <div className="text-[10px] text-blue-500 font-semibold">{isArabic ? 'البخر-نتح المرجعي ET₀' : 'Reference ET₀'}</div>
                    <div className="text-xl font-black tabular-mono text-blue-600 dark:text-blue-400 mt-1">
                      {et0} <span className="text-xs font-normal">mm/day</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <div className="text-[10px] text-emerald-500 font-semibold">{isArabic ? 'البخر-نتح الفعلي ETc' : 'Crop ETc'}</div>
                    <div className="text-xl font-black tabular-mono text-emerald-600 dark:text-emerald-400 mt-1">
                      {etc} <span className="text-xs font-normal">mm/day</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 space-y-3">
                  <div>
                    <div className="text-xs text-slate-500">
                      {isArabic ? 'المقنن المائي الإجمالي للفدان (GIR):' : 'Gross Irrigation Requirement:'}
                    </div>
                    <div className="text-2xl font-black tabular-mono text-emerald-500">
                      {girM3PerFeddanDay}{' '}
                      <span className="text-xs font-normal text-slate-400">
                        {isArabic ? 'م³ / فدان / يوم' : 'm³ / feddan / day'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <div className="text-xs text-slate-500">
                      {isArabic ? `إجمالي ضخ الحقل (${fieldAreaFeddan} فدان):` : `Total Pivot Discharge (${fieldAreaFeddan} fed):`}
                    </div>
                    <div className="text-2xl font-black tabular-mono text-blue-500">
                      {totalDailyPivotDemandM3.toLocaleString()}{' '}
                      <span className="text-xs font-normal text-slate-400">
                        {isArabic ? 'م³ / يوم' : 'm³ / day'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 3: Hydroponics & Controlled Greenhouse */}
        {/* ========================================================= */}
        {activeStation === 'hydroponics_greenhouse' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Climate controls */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <Thermometer className="w-4 h-4" />
                  {isArabic ? 'التحكم البيئي داخل الصوبة' : 'Greenhouse Microclimate'}
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الحرارة الداخلية (°م)' : 'Air Temp (°C)'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{ghTemp} °C</span>
                  </div>
                  <input
                    type="range"
                    min="16"
                    max="38"
                    value={ghTemp}
                    onChange={(e) => setGhTemp(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الرطوبة النسبية (% RH)' : 'Relative Humidity (% RH)'}</span>
                    <span className="tabular-mono font-bold text-blue-500">{ghHumidity} %</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="95"
                    value={ghHumidity}
                    onChange={(e) => setGhHumidity(parseInt(e.target.value, 10))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'حقن غاز ثاني أكسيد الكربون CO₂ (ppm)' : 'CO₂ Enrichment (ppm)'}</span>
                    <span className="tabular-mono font-bold text-emerald-500">{ghCo2Ppm} ppm</span>
                  </div>
                  <input
                    type="range"
                    min="400"
                    max="1400"
                    step="50"
                    value={ghCo2Ppm}
                    onChange={(e) => setGhCo2Ppm(parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الإضاءة التكميلية PAR (μmol/m²/s)' : 'Supplemental PAR LED'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{ghParLight}</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="900"
                    step="25"
                    value={ghParLight}
                    onChange={(e) => setGhParLight(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Solution Chemistry */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-blue-500">
                  <Droplets className="w-4 h-4" />
                  {isArabic ? 'محلول التغذية الهيدروبونيك' : 'Nutrient Solution Chemistry'}
                </h3>

                <div className="flex gap-2">
                  {[
                    { id: 'nft' as const, labelAr: 'تقنية الفيلم المغذي (NFT)', labelEn: 'NFT System' },
                    { id: 'dwc' as const, labelAr: 'الزراعة المائية العميقة (DWC)', labelEn: 'DWC Raft' },
                    { id: 'dutch_bucket' as const, labelAr: 'الدلو الهولندي (Dutch Bucket)', labelEn: 'Dutch Bucket' },
                  ].map((sys) => (
                    <button
                      key={sys.id}
                      onClick={() => setHydroponicSystem(sys.id)}
                      className={`flex-1 py-1.5 px-2 text-xs rounded-lg border transition-all ${
                        hydroponicSystem === sys.id
                          ? 'bg-blue-600 text-white font-bold border-blue-500'
                          : isLight
                          ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                          : 'border-slate-700 hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      {isArabic ? sys.labelAr : sys.labelEn}
                    </button>
                  ))}
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'ملوحة المحلول المغذي EC (dS/m)' : 'Solution EC (dS/m)'}</span>
                    <span className="tabular-mono font-bold text-emerald-500">{hydroponicEc.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="3.5"
                    step="0.1"
                    value={hydroponicEc}
                    onChange={(e) => setHydroponicEc(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>1.0 (خضر ورقية)</span>
                    <span>2.2 (طماطم وفلفل)</span>
                    <span>3.5 (ملوحة مرتفعة)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'حموضة المحلول (pH)' : 'Solution pH'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{hydroponicPh.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="4.5"
                    max="8.0"
                    step="0.1"
                    value={hydroponicPh}
                    onChange={(e) => setHydroponicPh(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>5.5 (مثالي)</span>
                    <span>6.5 (الحد الأقصى)</span>
                    <span>&gt; 7.0 (ترسيب الحديد والفوسفور)</span>
                  </div>
                </div>
              </div>

              {/* Telemetry and VPD Gauge */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <Activity className="w-4 h-4" />
                  {isArabic ? 'مؤشر عجز ضغط البخار (VPD)' : 'Vapor Pressure Deficit (VPD)'}
                </h3>

                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-center space-y-2">
                  <div className="text-xs text-slate-500 font-medium">
                    {isArabic ? 'عجز ضغط البخار المحسوب (VPD):' : 'Calculated VPD:'}
                  </div>
                  <div className="text-3xl font-black tabular-mono text-emerald-500">
                    {ghVpd}{' '}
                    <span className="text-sm font-normal text-slate-400">kPa</span>
                  </div>
                  <div className={`text-xs font-bold ${vpdStatus.color}`}>
                    {isArabic ? vpdStatus.labelAr : vpdStatus.labelEn}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {isArabic ? 'ميزة التخصيب بثاني أكسيد الكربون:' : 'CO₂ Injection Benefit:'}
                      </span>
                      <p className="text-slate-500 text-[11px] mt-0.5">
                        {isArabic
                          ? `رفع مستوى CO₂ إلى ${ghCo2Ppm} ppm يرفع معدل البناء الضوئي بنسبة ${(
                              ((ghCo2Ppm - 400) / 400) *
                              18
                            ).toFixed(0)}% ويوفر 15% من استهلاك الماء.`
                          : `Enrichment to ${ghCo2Ppm} ppm elevates photosynthesis while increasing water use efficiency.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 4: Egyptian National Mega-Projects */}
        {/* ========================================================= */}
        {activeStation === 'egyptian_megaprojects' && (
          <div className="space-y-6">
            {/* Project Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {EGYPTIAN_MEGA_PROJECTS.map((proj) => {
                const isSelected = activeProject.id === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProject(proj)}
                    className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-500/15 border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                        : isLight
                        ? 'bg-white border-slate-200 hover:bg-slate-50'
                        : 'bg-[#161B22] border-slate-800 hover:bg-slate-800/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="tabular-mono text-[10px]">
                          {proj.latitude.toFixed(1)}°N, {proj.longitude.toFixed(1)}°E
                        </span>
                      </div>
                      <div className="font-bold text-xs text-slate-900 dark:text-slate-100">
                        {isArabic ? proj.nameAr : proj.nameEn}
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      {isArabic ? proj.achievementMetricAr : proj.achievementMetricEn}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Project Profile */}
            <div
              className={`p-6 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-emerald-500">
                    {isArabic ? activeProject.nameAr : activeProject.nameEn}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
                    <span>
                      {isArabic ? 'المساحة الإجمالية المخططة:' : 'Target Reclamation Area:'}{' '}
                      <strong className="tabular-mono text-slate-700 dark:text-slate-300">
                        {activeProject.targetAreaFeddan.toLocaleString()} {isArabic ? 'فدان' : 'feddans'}
                      </strong>
                    </span>
                    <span>
                      {isArabic ? 'المنزرع حالياً:' : 'Cultivated to date:'}{' '}
                      <strong className="tabular-mono text-emerald-500">
                        {activeProject.currentAreaFeddan.toLocaleString()} {isArabic ? 'فدان' : 'feddans'}
                      </strong>
                    </span>
                  </div>
                </div>

                {activeProject.waterTreatmentCapacityM3PerDay && (
                  <div className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold flex items-center gap-2">
                    <Droplets className="w-4 h-4" />
                    <span>
                      {isArabic ? 'طاقة المعالجة الثلاثية:' : 'Tertiary Capacity:'}{' '}
                      <strong className="tabular-mono">
                        {(activeProject.waterTreatmentCapacityM3PerDay / 1000000).toFixed(1)} مليون م³/يوم
                      </strong>
                    </span>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="my-4">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{isArabic ? 'نسبة الإنجاز والاستصلاح الفعلي:' : 'Reclamation Progress:'}</span>
                  <span className="tabular-mono font-bold text-emerald-500">
                    {((activeProject.currentAreaFeddan / activeProject.targetAreaFeddan) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                    style={{
                      width: `${(activeProject.currentAreaFeddan / activeProject.targetAreaFeddan) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {isArabic ? 'مصادر المياه ومنظومة الإمداد:' : 'Water Infrastructure & Sources:'}
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {(isArabic ? activeProject.waterSourcesAr : activeProject.waterSourcesEn).map((src, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{src}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-5 mb-3">
                    {isArabic ? 'أهم المحاصيل الاستراتيجية والتصديرية:' : 'Primary Strategic Crops:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(isArabic ? activeProject.mainCropsAr : activeProject.mainCropsEn).map((cr, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-medium"
                      >
                        {cr}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {isArabic ? 'أبرز الإنجازات الهندسية والزراعية:' : 'Engineering & Agricultural Milestones:'}
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {(isArabic ? activeProject.keyFeaturesAr : activeProject.keyFeaturesEn).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <Zap className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 5: IPM & Pathology Diagnostic Clinic */}
        {/* ========================================================= */}
        {activeStation === 'ipm_pathology' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Problem Selector */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-red-500">
                  <Bug className="w-4 h-4" />
                  {isArabic ? 'سجل الآفات والأمراض الوبائية' : 'Epidemic Pests & Pathology'}
                </h3>

                <div className="space-y-2">
                  {IPM_DIAGNOSTICS_CATALOG.map((diag) => {
                    const isSelected = activeDiagnostic.id === diag.id;
                    return (
                      <button
                        key={diag.id}
                        onClick={() => setActiveDiagnostic(diag)}
                        className={`w-full p-3 rounded-xl border text-right transition-all flex flex-col gap-1 ${
                          isSelected
                            ? 'bg-red-500/15 border-red-500 text-slate-900 dark:text-slate-100 font-bold'
                            : isLight
                            ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                            : 'border-slate-800 hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-red-500 text-[11px] font-semibold">
                            {isArabic ? diag.cropNameAr : diag.cropNameEn}
                          </span>
                          <span className="text-[10px] uppercase font-mono text-slate-400">
                            {diag.category}
                          </span>
                        </div>
                        <div className="text-xs">
                          {isArabic ? diag.problemNameAr : diag.problemNameEn}
                        </div>
                        <div className="text-[10px] text-slate-400 italic font-mono">
                          {diag.causalAgent}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Symptoms and Economic Threshold */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-amber-500">
                  <AlertTriangle className="w-4 h-4" />
                  {isArabic ? 'التشخيص والعتبة الاقتصادية للضرر' : 'Symptomology & Economic Threshold'}
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                      {isArabic ? 'الأعراض المورفولوجية والتشريحية:' : 'Diagnostic Symptoms:'}
                    </span>
                    <p className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isArabic ? activeDiagnostic.symptomsAr : activeDiagnostic.symptomsEn}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                      {isArabic ? 'الحد الاقتصادي الحرج للتدخل (ET):' : 'Economic Action Threshold:'}
                    </span>
                    <p className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold leading-relaxed">
                      {isArabic ? activeDiagnostic.economicThresholdAr : activeDiagnostic.economicThresholdEn}
                    </p>
                  </div>

                  {/* Interactive Incidence Slider */}
                  <div className="pt-2">
                    <div className="flex justify-between mb-1">
                      <span>{isArabic ? 'نسبة الإصابة المرصودة في الحقل:' : 'Observed Field Incidence:'}</span>
                      <span className="tabular-mono font-bold text-red-500">{observedIncidencePct}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      step="0.5"
                      value={observedIncidencePct}
                      onChange={(e) => setObservedIncidencePct(parseFloat(e.target.value))}
                      className="w-full accent-red-500 cursor-pointer"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      {isThresholdExceeded ? (
                        <div className="p-2 w-full rounded-lg bg-red-500/15 border border-red-500/30 text-red-500 flex items-center gap-2 font-bold text-xs">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>{isArabic ? 'تجاوز العتبة الاقتصادية! تدخل علاجي فوري مطلوب' : 'Threshold Exceeded! Action Mandated'}</span>
                        </div>
                      ) : (
                        <div className="p-2 w-full rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center gap-2 font-bold text-xs">
                          <ShieldCheck className="w-4 h-4 shrink-0" />
                          <span>{isArabic ? 'دون الحد الحرج — تكفي المراقبة والمكافحة الحيوية' : 'Sub-Threshold: Bio-Control Sufficient'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* IPM Control Matrix */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <ShieldCheck className="w-4 h-4" />
                  {isArabic ? 'بروتوكول المكافحة المتكاملة (IPM)' : 'IPM Integrated Management Prescription'}
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                      {isArabic ? '1. المكافحة الحيوية والطبيعية:' : '1. Biological & Bio-Pesticide Control:'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">
                      {isArabic ? activeDiagnostic.biologicalControlAr : activeDiagnostic.biologicalControlEn}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">
                      {isArabic ? '2. الممارسات الزراعية والوقائية:' : '2. Preventive Cultural Practices:'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">
                      {isArabic ? activeDiagnostic.preventiveCulturalAr : activeDiagnostic.preventiveCulturalEn}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <span className="font-bold text-red-600 dark:text-red-400 block mb-1">
                      {isArabic ? '3. التدخل الكيميائي المرشد:' : '3. Targeted Chemical Control:'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">
                      {isArabic ? activeDiagnostic.chemicalControlAr : activeDiagnostic.chemicalControlEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgriculturalTechnologyStudio;
