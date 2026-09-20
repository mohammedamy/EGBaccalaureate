import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import {
  SOLAR_FARM_PRESETS,
  WIND_TURBINE_PRESETS,
  HYDROGEN_ELECTROLYZER_PRESETS,
  GRID_STORAGE_PRESETS,
  INDUSTRIAL_DECARBONIZATION_PRESETS,
  type SolarFarmPreset,
  type WindTurbinePreset,
  type HydrogenElectrolyzerPreset,
  type GridStoragePreset,
  type IndustrialDecarbonizationPreset,
} from '../../data/renewableLab/renewableLabData';
import {
  Sun,
  Wind,
  Droplets,
  Zap,
  Leaf,
  Sliders,
  Maximize2,
  Minimize2,
  Factory,
  Activity,
  Gauge,
  Info,
  Scale,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

export type RenewableStation =
  | 'solar_pv_csp'
  | 'wind_aerodynamics'
  | 'green_hydrogen_ptx'
  | 'smart_grid_storage'
  | 'carbon_accounting_cbam';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialStation?: RenewableStation;
}

export const RenewableEnergyStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialStation = 'solar_pv_csp',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  const [activeStation, setActiveStation] = useState<RenewableStation>(initialStation);

  // -------------------------------------------------------------
  // STATION 1: Solar PV & CSP Yield Simulator State
  // -------------------------------------------------------------
  const [selectedSolarPreset, setSelectedSolarPreset] = useState<SolarFarmPreset>(SOLAR_FARM_PRESETS[0]);
  const [solarIrradiance, setSolarIrradiance] = useState<number>(SOLAR_FARM_PRESETS[0].irradianceWm2);
  const [solarAmbientTemp, setSolarAmbientTemp] = useState<number>(SOLAR_FARM_PRESETS[0].ambientTempC);
  const [pvSoilingLossPercent, setPvSoilingLossPercent] = useState<number>(3.5); // desert dust deposition

  // Solar PV Calculations
  const solarCalculations = useMemo(() => {
    // Cell operating temperature: Tcell = Tamb + (NOCT - 20) * (G / 800), approx NOCT=45C
    const cellTempC = solarAmbientTemp + (45 - 20) * (solarIrradiance / 800);
    const deltaT = cellTempC - 25; // standard test condition (STC) = 25 C

    // Temperature derating factor
    const tempDeratingFactor = 1 + (selectedSolarPreset.tempCoefficientPercentPerC / 100) * deltaT;
    const cleanFactor = 1 - pvSoilingLossPercent / 100;
    
    // Tracking optical multiplier
    let trackingMultiplier = 1.0;
    if (selectedSolarPreset.trackingType === 'single_axis') trackingMultiplier = 1.22;
    if (selectedSolarPreset.trackingType === 'dual_axis') trackingMultiplier = 1.34;

    // Bifacial albedo boost (if bifacial)
    const bifacialBoost = selectedSolarPreset.type === 'pv_bifacial' ? (1 + selectedSolarPreset.albedoCoefficient * 0.7) : 1.0;

    // Effective system efficiency
    const effectiveEfficiency = selectedSolarPreset.nominalCellEfficiency * Math.max(0.65, tempDeratingFactor) * cleanFactor;
    
    // Total Instantaneous Electrical Power Output (MW)
    // P = P_rated * (G / 1000) * tempFactor * cleanFactor * trackingMultiplier * bifacialBoost
    const instantaneousPowerMw = Number(
      (selectedSolarPreset.capacityMw * (solarIrradiance / 1000) * tempDeratingFactor * cleanFactor * trackingMultiplier * bifacialBoost).toFixed(2)
    );

    // Daily Energy Yield (MWh) - assuming 6.8 equivalent peak sun hours in Upper Egypt
    const dailyYieldMwh = Number((instantaneousPowerMw * 7.2).toFixed(1));
    const annualCo2AvoidedTons = Number((dailyYieldMwh * 365 * 0.48).toFixed(0)); // 0.48 tCO2/MWh Egypt grid baseline

    return {
      cellTempC: Number(cellTempC.toFixed(1)),
      tempDeratingFactor: Number(tempDeratingFactor.toFixed(3)),
      effectiveEfficiencyPercent: Number((effectiveEfficiency * 100).toFixed(2)),
      instantaneousPowerMw,
      dailyYieldMwh,
      annualCo2AvoidedTons,
      trackingMultiplier,
    };
  }, [selectedSolarPreset, solarIrradiance, solarAmbientTemp, pvSoilingLossPercent]);

  // -------------------------------------------------------------
  // STATION 2: Wind Turbine Aerodynamics & Betz Limit State
  // -------------------------------------------------------------
  const [selectedWindPreset, setSelectedWindPreset] = useState<WindTurbinePreset>(WIND_TURBINE_PRESETS[0]);
  const [windSpeedMs, setWindSpeedMs] = useState<number>(WIND_TURBINE_PRESETS[0].avgSiteWindSpeedMs);
  const [airDensityKgM3, setAirDensityKgM3] = useState<number>(1.225); // sea level standard
  const [bladePitchDeg, setBladePitchDeg] = useState<number>(0); // 0 to 25 degrees pitch control

  // Wind Turbine Calculations
  const windCalculations = useMemo(() => {
    const radiusM = selectedWindPreset.rotorDiameterM / 2;
    const sweptAreaM2 = Math.PI * Math.pow(radiusM, 2);

    // Betz limit max theoretical: Cp_max = 16/27 = 0.5926
    const betzLimitCp = 16 / 27;

    // Actual Power in the wind: P_wind = 0.5 * rho * A * v^3
    const theoreticalWindPowerWatts = 0.5 * airDensityKgM3 * sweptAreaM2 * Math.pow(windSpeedMs, 3);
    const theoreticalWindPowerKw = theoreticalWindPowerWatts / 1000;

    // Pitch control derating effect on Cp
    const pitchPenalty = Math.max(0.1, 1 - Math.sin((bladePitchDeg * Math.PI) / 180) * 0.85);
    const actualCp = selectedWindPreset.powerCoefficientCp * pitchPenalty;

    let electricalOutputKw = 0;
    let statusTextEn = 'Normal Generation';
    let statusTextAr = 'توليد طبيعي مستقر';
    let statusColor = 'text-emerald-400';

    if (windSpeedMs < selectedWindPreset.cutInWindSpeedMs) {
      electricalOutputKw = 0;
      statusTextEn = 'Below Cut-In (Stationary / Idle)';
      statusTextAr = 'أقل من سرعة البدء (سكون المحرك)';
      statusColor = 'text-amber-400';
    } else if (windSpeedMs > selectedWindPreset.cutOutWindSpeedMs) {
      electricalOutputKw = 0;
      statusTextEn = 'Cut-Out Triggered (Storm Brake Engaged)';
      statusTextAr = 'تفعيل فرملة الطوارئ ضد العواصف (حماية)';
      statusColor = 'text-red-400';
    } else if (windSpeedMs >= selectedWindPreset.ratedWindSpeedMs) {
      // Governed rated output
      electricalOutputKw = selectedWindPreset.ratedPowerKw;
      statusTextEn = 'Rated Nominal Output (Active Pitch Regulated)';
      statusTextAr = 'القدرة القصوى الاسمية (تنظيم زاوية الريشة)';
      statusColor = 'text-teal-400';
    } else {
      // Partial load generation
      electricalOutputKw = Math.min(selectedWindPreset.ratedPowerKw, theoreticalWindPowerKw * actualCp * 0.94); // 94% drivetrain/generator eff
      statusTextEn = 'Optimal Aerodynamic Tracking (MPPT)';
      statusTextAr = 'تتبع نقطة القدرة القصوى للمروحة (MPPT)';
      statusColor = 'text-emerald-400';
    }

    const capacityFactor = Number(((electricalOutputKw / selectedWindPreset.ratedPowerKw) * 100).toFixed(1));

    return {
      sweptAreaM2: Math.round(sweptAreaM2),
      betzLimitCp: Number(betzLimitCp.toFixed(3)),
      actualCp: Number(actualCp.toFixed(3)),
      theoreticalWindPowerKw: Math.round(theoreticalWindPowerKw),
      electricalOutputKw: Number(electricalOutputKw.toFixed(1)),
      electricalOutputMw: Number((electricalOutputKw / 1000).toFixed(2)),
      capacityFactor,
      statusTextEn,
      statusTextAr,
      statusColor,
    };
  }, [selectedWindPreset, windSpeedMs, airDensityKgM3, bladePitchDeg]);

  // -------------------------------------------------------------
  // STATION 3: Green Hydrogen Electrolysis & PtX Reactor State
  // -------------------------------------------------------------
  const [selectedH2Preset, setSelectedH2Preset] = useState<HydrogenElectrolyzerPreset>(HYDROGEN_ELECTROLYZER_PRESETS[0]);
  const [inputRenewablePowerMw, setInputRenewablePowerMw] = useState<number>(selectedH2Preset.electrolyzerPowerMw);
  const [ptxMode, setPtxMode] = useState<'h2_pure' | 'green_ammonia' | 'saf_synfuel'>('green_ammonia');

  // Green Hydrogen Calculations
  const h2Calculations = useMemo(() => {
    // Specific energy consumption: kWh per kg H2
    const secKwhKg = selectedH2Preset.specificEnergyKwhPerKg;
    // H2 Production Rate (kg/hour) = (MW * 1000 kW) / (SEC kWh/kg)
    const h2ProductionKgPerHour = (inputRenewablePowerMw * 1000) / secKwhKg;
    const h2DailyTons = (h2ProductionKgPerHour * 24) / 1000;

    // Stoichiometric water consumption: 2 H2O -> 2 H2 + O2 (molecular weights: 36 g H2O -> 4 g H2 => 9 kg water per kg H2)
    const pureWaterDemandLitersPerHour = h2ProductionKgPerHour * selectedH2Preset.waterConsumptionLitersPerKg;
    const o2CoProductKgPerHour = h2ProductionKgPerHour * 8.0; // 8 kg O2 per kg H2

    // Downstream PtX synthesis
    // Haber-Bosch green ammonia synthesis: N2 + 3 H2 -> 2 NH3 (17.7 kg H2 per 100 kg NH3)
    const ammoniaTonsDaily = h2DailyTons * 5.66; // approx 5.66 tons NH3 per ton H2
    // Synthetic aviation fuel (Fischer-Tropsch): approx 0.38 tons SAF per ton H2 + captured CO2
    const safBarrelsDaily = h2DailyTons * 18.5;

    // Equivalent natural gas displacement & CO2 reduction
    // 1 kg green H2 avoids ~9.5 kg CO2 compared to gray hydrogen (steam methane reforming SMR)
    const co2AvoidedDailyTons = (h2ProductionKgPerHour * 24 * 9.5) / 1000;

    return {
      h2ProductionKgPerHour: Number(h2ProductionKgPerHour.toFixed(1)),
      h2DailyTons: Number(h2DailyTons.toFixed(2)),
      pureWaterDemandLitersPerHour: Math.round(pureWaterDemandLitersPerHour),
      o2CoProductKgPerHour: Number(o2CoProductKgPerHour.toFixed(1)),
      ammoniaTonsDaily: Number(ammoniaTonsDaily.toFixed(1)),
      safBarrelsDaily: Number(safBarrelsDaily.toFixed(1)),
      co2AvoidedDailyTons: Number(co2AvoidedDailyTons.toFixed(1)),
    };
  }, [selectedH2Preset, inputRenewablePowerMw]);

  // -------------------------------------------------------------
  // STATION 4: Smart Grids, BESS Storage & Regional Interconnection
  // -------------------------------------------------------------
  const [selectedGridPreset, setSelectedGridPreset] = useState<GridStoragePreset>(GRID_STORAGE_PRESETS[0]);
  const [gridFrequencyHz, setGridFrequencyHz] = useState<number>(50.0); // nominal 50.00 Hz
  const [bessStateOfChargePercent, setBessStateOfChargePercent] = useState<number>(68);

  // Grid Simulation Calculations
  const gridCalculations = useMemo(() => {
    // Frequency deviation from 50.00 Hz
    const deltaF = gridFrequencyHz - 50.0;
    
    // Automatic frequency droop response
    let autoDispatchMw = 0;
    let gridStatusEn = 'Grid Synchronized at 50.00 Hz';
    let gridStatusAr = 'الشبكة متزامنة تماماً عند ٥٠.٠٠ هرتز';
    let statusColor = 'text-emerald-400';

    if (deltaF < -0.15) {
      // Under-frequency event (loss of generation / sudden load peak) -> Storage must inject power
      autoDispatchMw = Math.min(selectedGridPreset.ratedPowerMw, Math.abs(deltaF) * 4000);
      gridStatusEn = 'Under-Frequency Alert: Primary Fast Injection Activated';
      gridStatusAr = 'انخفاض التردد: ضخ طاقة فوري لإنقاذ استقرار الشبكة';
      statusColor = 'text-red-400';
    } else if (deltaF > 0.15) {
      // Over-frequency event (excess solar/wind surplus) -> Storage charges / absorbs power
      autoDispatchMw = -Math.min(selectedGridPreset.ratedPowerMw, deltaF * 3500);
      gridStatusEn = 'Over-Frequency Alert: Storage Absorbing Surplus Energy';
      gridStatusAr = 'ارتفاع التردد: امتصاص الفائض لحماية الشبكة من الانهيار';
      statusColor = 'text-amber-400';
    }

    // Response time benchmark
    const responseSeconds = selectedGridPreset.responseLatencyMs / 1000;
    const availableCapacityMwh = (selectedGridPreset.storageCapacityMwh * (bessStateOfChargePercent / 100)).toFixed(0);

    return {
      deltaF: Number(deltaF.toFixed(3)),
      autoDispatchMw: Number(autoDispatchMw.toFixed(1)),
      gridStatusEn,
      gridStatusAr,
      statusColor,
      responseSeconds,
      availableCapacityMwh,
    };
  }, [selectedGridPreset, gridFrequencyHz, bessStateOfChargePercent]);

  // -------------------------------------------------------------
  // STATION 5: Carbon Accounting & Life Cycle Emissions (LCA / CBAM)
  // -------------------------------------------------------------
  const [selectedDecarbPreset, setSelectedDecarbPreset] = useState<IndustrialDecarbonizationPreset>(INDUSTRIAL_DECARBONIZATION_PRESETS[0]);
  const [hydrogenReplacementPercent, setHydrogenReplacementPercent] = useState<number>(25); // 25% clean fuel swap
  const [cleanPowerPpaPercent, setCleanPowerPpaPercent] = useState<number>(45); // 45% renewable electricity PPA

  // Decarbonization & CBAM Calculations
  const carbonCalculations = useMemo(() => {
    const prodTons = selectedDecarbPreset.annualProductionTons;
    
    // Baseline emissions
    const baseScope1 = selectedDecarbPreset.scope1EmissionsTonsCo2e;
    const baseScope2 = selectedDecarbPreset.scope2EmissionsTonsCo2e;
    const baseScope3 = selectedDecarbPreset.scope3EmissionsTonsCo2e;
    const baseTotal = baseScope1 + baseScope2 + baseScope3;
    const baseIntensity = baseTotal / prodTons; // tCO2e per ton product

    // Abated emissions with interventions
    const abatedScope1 = baseScope1 * (1 - (hydrogenReplacementPercent / 100) * 0.75); // H2 cuts direct fuel CO2
    const abatedScope2 = baseScope2 * (1 - cleanPowerPpaPercent / 100); // Solar PPA cuts grid electricity CO2
    const abatedScope3 = baseScope3 * 0.95; // modest logistics optimization
    const abatedTotal = abatedScope1 + abatedScope2 + abatedScope3;
    const abatedIntensity = abatedTotal / prodTons;

    // EU CBAM Border Carbon Tariff calculation
    // Tax applies to embedded emissions exceeding the EU benchmark:
    // Tariff (€) = (Carbon_Intensity - EU_Benchmark) * Production_Export_Tons * EU_ETS_Price
    const excessBaselineIntensity = Math.max(0, baseIntensity - selectedDecarbPreset.euCbamBenchmarkTonsPerTon);
    const excessAbatedIntensity = Math.max(0, abatedIntensity - selectedDecarbPreset.euCbamBenchmarkTonsPerTon);

    const annualBaselineCbamCostEur = excessBaselineIntensity * prodTons * selectedDecarbPreset.euEtsCarbonPriceEurPerTon;
    const annualAbatedCbamCostEur = excessAbatedIntensity * prodTons * selectedDecarbPreset.euEtsCarbonPriceEurPerTon;
    const annualFinancialSavingsEur = annualBaselineCbamCostEur - annualAbatedCbamCostEur;

    return {
      baseIntensity: Number(baseIntensity.toFixed(3)),
      abatedIntensity: Number(abatedIntensity.toFixed(3)),
      benchmarkIntensity: selectedDecarbPreset.euCbamBenchmarkTonsPerTon,
      baseTotalEmissionsMtons: Number((baseTotal / 1000000).toFixed(3)),
      abatedTotalEmissionsMtons: Number((abatedTotal / 1000000).toFixed(3)),
      annualBaselineCbamCostMEur: Number((annualBaselineCbamCostEur / 1000000).toFixed(2)),
      annualAbatedCbamCostMEur: Number((annualAbatedCbamCostEur / 1000000).toFixed(2)),
      annualFinancialSavingsMEur: Number((annualFinancialSavingsEur / 1000000).toFixed(2)),
      abatementPercentage: Number((((baseTotal - abatedTotal) / baseTotal) * 100).toFixed(1)),
    };
  }, [selectedDecarbPreset, hydrogenReplacementPercent, cleanPowerPpaPercent]);

  return (
    <div
      className={`flex flex-col transition-colors duration-200 ${
        isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto' : 'rounded-2xl border shadow-xl'
      } ${
        isContrast
          ? 'bg-black text-white border-white'
          : isLight
          ? 'bg-slate-50 text-slate-900 border-slate-200'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 border-emerald-900/40'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Studio Header Bar */}
      <div
        className={`px-5 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
          isLight ? 'bg-white border-slate-200' : 'bg-slate-900/90 border-slate-800'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/20">
            <Leaf className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight">
                {isArabic
                  ? 'استوديو محاكاة الطاقة المتجددة والاستدامة البيئية'
                  : 'Renewable Energy & Environmental Sustainability Studio'}
              </h1>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {isArabic ? 'معتمد رسمياً' : 'Official Ministry Suite'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'محاكاة تفاعلية شاملة: الطاقة الشمسية، طاقة الرياح، الهيدروجين الأخضر، الشبكات الذكية، وحساب البصمة الكربونية CBAM'
                : 'Interactive Simulation: Solar PV/CSP, Wind Aerodynamics, Green Hydrogen PtX, Smart Grids & Carbon Accounting'}
            </p>
          </div>
        </div>

        {/* Fullscreen & Reset Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className={`p-2 rounded-lg border transition-colors ${
              isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isFullscreen ? (isArabic ? 'إنهاء ملء الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Station Navigation Tabs */}
      <div
        className={`px-4 py-2.5 border-b overflow-x-auto flex items-center gap-2 ${
          isLight ? 'bg-slate-100/80 border-slate-200' : 'bg-slate-900/60 border-slate-800'
        }`}
      >
        {[
          {
            id: 'solar_pv_csp' as RenewableStation,
            labelEn: '1. Solar PV & CSP Yield',
            labelAr: '١. محاكي الطاقة الشمسية وبنبان',
            icon: Sun,
            color: 'from-amber-500 to-orange-500',
          },
          {
            id: 'wind_aerodynamics' as RenewableStation,
            labelEn: '2. Wind Aerodynamics & Betz',
            labelAr: '٢. ديناميكا الرياح وحد بيتز (جبل الزيت)',
            icon: Wind,
            color: 'from-teal-500 to-cyan-500',
          },
          {
            id: 'green_hydrogen_ptx' as RenewableStation,
            labelEn: '3. Green Hydrogen & PtX',
            labelAr: '٣. مفاعل الهيدروجين الأخضر ومشتقاته',
            icon: Droplets,
            color: 'from-blue-500 to-indigo-500',
          },
          {
            id: 'smart_grid_storage' as RenewableStation,
            labelEn: '4. Smart Grids & BESS',
            labelAr: '٤. الشبكات الذكية وضخ عتاقة والبطاريات',
            icon: Zap,
            color: 'from-purple-500 to-emerald-500',
          },
          {
            id: 'carbon_accounting_cbam' as RenewableStation,
            labelEn: '5. Carbon Accounting & CBAM',
            labelAr: '٥. المحاسبة الكربونية وضريبة CBAM',
            icon: Scale,
            color: 'from-emerald-500 to-lime-500',
          },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeStation === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveStation(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                isActive
                  ? 'bg-gradient-to-r text-white shadow-md shadow-emerald-500/10 ' + tab.color
                  : isLight
                  ? 'bg-white hover:bg-slate-200/70 text-slate-700 border border-slate-200'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-750'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Main Simulation Viewport */}
      <div className="p-5 flex-1 space-y-6">
        {/* ============================================================== */}
        {/* STATION 1: SOLAR PV & CSP YIELD SIMULATOR                      */}
        {/* ============================================================== */}
        {activeStation === 'solar_pv_csp' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left/Top Parameters & Presets Panel */}
            <div className="lg:col-span-4 space-y-5">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold flex items-center gap-2 text-amber-400">
                    <Sun className="w-4 h-4" />
                    {isArabic ? 'الموقع والمشروع المرجعي' : 'Facility & Site Preset'}
                  </h3>
                </div>
                <div className="space-y-2">
                  {SOLAR_FARM_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedSolarPreset(preset);
                        setSolarIrradiance(preset.irradianceWm2);
                        setSolarAmbientTemp(preset.ambientTempC);
                      }}
                      className={`w-full text-start p-3 rounded-lg text-xs transition-all border ${
                        selectedSolarPreset.id === preset.id
                          ? 'bg-amber-500/15 border-amber-500/50 text-amber-300 font-semibold'
                          : isLight
                          ? 'border-slate-200 hover:bg-slate-50 text-slate-700'
                          : 'border-slate-800 hover:bg-slate-800/60 text-slate-300'
                      }`}
                    >
                      <div className="font-bold">{isArabic ? preset.nameAr : preset.nameEn}</div>
                      <div className="text-[11px] opacity-75 mt-0.5">
                        {isArabic ? preset.locationAr : preset.locationEn} • {preset.capacityMw} MW
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Environmental Controls */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-slate-200">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  {isArabic ? 'المعاملات المناخية والتشغيلية' : 'Climatic & Operating Controls'}
                </h3>

                {/* Irradiance Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'الإشعاع الشمسي المباشر (G)' : 'Solar Irradiance (G)'}
                    </span>
                    <span className="font-mono text-amber-400 font-bold">{solarIrradiance} W/m²</span>
                  </div>
                  <input
                    type="range"
                    min={200}
                    max={1200}
                    step={10}
                    value={solarIrradiance}
                    onChange={(e) => setSolarIrradiance(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>200 W/m² (غائم)</span>
                    <span>1000 W/m² (STC القياسي)</span>
                    <span>1200 W/m² (ذروة صيفية)</span>
                  </div>
                </div>

                {/* Ambient Temperature Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'درجة الحرارة المحيطة (Tamb)' : 'Ambient Temperature (Tamb)'}
                    </span>
                    <span className="font-mono text-rose-400 font-bold">{solarAmbientTemp} °C</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={1}
                    value={solarAmbientTemp}
                    onChange={(e) => setSolarAmbientTemp(Number(e.target.value))}
                    className="w-full accent-rose-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>10°C (شتاء)</span>
                    <span>25°C (معياري)</span>
                    <span>50°C (صيف أسوان)</span>
                  </div>
                </div>

                {/* Dust Soiling Loss Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'فاقد تراكم الغبار الصحراوي (Soiling)' : 'Desert Soiling Loss'}
                    </span>
                    <span className="font-mono text-amber-300 font-bold">{pvSoilingLossPercent} %</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={15}
                    step={0.5}
                    value={pvSoilingLossPercent}
                    onChange={(e) => setPvSoilingLossPercent(Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>0% (تنظيف آلي روبوتي)</span>
                    <span>7% (متوسط صحراوي)</span>
                    <span>15% (عاصفة ترابية خماسين)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Simulation Display & Graphs */}
            <div className="lg:col-span-8 space-y-5">
              {/* Telemetry Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'القدرة الفورية' : 'Instant Power'}
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400">
                    {solarCalculations.instantaneousPowerMw}{' '}
                    <span className="text-xs font-normal text-slate-400">MW</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {isArabic ? 'من سعة ' : 'of '}{selectedSolarPreset.capacityMw} MW
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'حرارة الخلية الكهروضوئية' : 'PV Cell Temp'}
                  </div>
                  <div className="text-xl font-bold font-mono text-orange-400">
                    {solarCalculations.cellTempC}{' '}
                    <span className="text-xs font-normal text-slate-400">°C</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    ΔT = {(solarCalculations.cellTempC - 25).toFixed(1)}°C فوق القياسي
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'الإنتاجية اليومية المتوقعة' : 'Daily Yield'}
                  </div>
                  <div className="text-xl font-bold font-mono text-teal-400">
                    {solarCalculations.dailyYieldMwh}{' '}
                    <span className="text-xs font-normal text-slate-400">MWh</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {isArabic ? 'تكفي ~' : '~'}{Math.round(solarCalculations.dailyYieldMwh * 75)}{' '}
                    {isArabic ? 'منزل يومياً' : 'homes/day'}
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'الانبعاثات المتفادية سنوياً' : 'CO2 Avoided'}
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400">
                    {solarCalculations.annualCo2AvoidedTons.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-slate-400">tCO₂</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {isArabic ? 'مكافئ لزراعة غابات' : 'Carbon offset equivalent'}
                  </div>
                </div>
              </div>

              {/* Graphical I-V & P-V Solar Characteristic Curve Visualizer */}
              <div
                className={`p-5 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">
                      {isArabic
                        ? 'منحنى الخواص الكهروضوئية (I-V & P-V) ونقطة القدرة القصوى (MPPT)'
                        : 'Photovoltaic I-V & P-V Characteristic Curve and MPPT'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isArabic
                        ? 'توضيح تأثير الإشعاع والحرارة على تيار الدائرة القصيرة Isc وجهد الدائرة المفتوحة Voc'
                        : 'Impact of solar irradiance on Isc and cell temperature degradation on Voc'}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 text-xs rounded-md bg-amber-500/20 text-amber-300 font-mono">
                    Voc = 48.6 V | Isc = 13.8 A | Pmax = {(solarCalculations.instantaneousPowerMw).toFixed(1)} MW
                  </span>
                </div>

                {/* SVG Solar Curve Diagram */}
                <div className="h-64 w-full bg-slate-950/80 rounded-xl p-4 flex items-center justify-center border border-slate-800/80 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 500 220" preserveAspectRatio="none">
                    {/* Background Grid */}
                    <line x1="40" y1="20" x2="40" y2="190" stroke="#334155" strokeWidth="1" />
                    <line x1="40" y1="190" x2="480" y2="190" stroke="#334155" strokeWidth="1" />
                    {[50, 90, 130, 170].map((y) => (
                      <line key={y} x1="40" y1={y} x2="480" y2={y} stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                    ))}
                    {[120, 200, 280, 360, 440].map((x) => (
                      <line key={x} x1={x} y1="20" x2={x} y2="190" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                    ))}

                    {/* I-V Curve (Blue) */}
                    <path
                      d={`M 40 40 Q 340 45 370 110 T 420 190`}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="3"
                    />

                    {/* P-V Curve (Amber) */}
                    <path
                      d={`M 40 190 Q 240 110 340 45 T 420 190`}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3"
                    />

                    {/* MPPT Point */}
                    <circle cx="340" cy="45" r="6" fill="#10b981" className="animate-pulse" />
                    <line x1="340" y1="45" x2="340" y2="190" stroke="#10b981" strokeDasharray="3 3" strokeWidth="1.5" />
                    <text x="348" y="42" fill="#10b981" fontSize="11" fontWeight="bold">
                      MPPT (نقطة القدرة العظمى)
                    </text>

                    {/* Axis Labels */}
                    <text x="45" y="32" fill="#38bdf8" fontSize="10">
                      التيار I (A)
                    </text>
                    <text x="440" y="205" fill="#94a3b8" fontSize="10">
                      الجهد V (Volt)
                    </text>
                    <text x="400" y="110" fill="#f59e0b" fontSize="10">
                      القدرة P (Watt)
                    </text>
                  </svg>
                </div>

                {/* Scientific Educational Takeaway */}
                <div className="mt-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                  <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">
                      {isArabic ? 'الرؤية الهندسية لمنهج الثانوية والبكالوريا:' : 'Curriculum Engineering Insight:'}
                    </span>{' '}
                    {isArabic
                      ? 'زيادة درجة الحرارة فوق ۲٥°C تسبب انخفاضاً حاداً في جهد الدائرة المفتوحة (Voc) بمعدل -0.38%/°C، ولذلك تعتمد محطة بنبان على تبريد الهواء الطبيعي وزوايا تتبع أحادية المحور (Single-Axis Tracking) لتعويض فواقد الإجهاد الحراري في صعيد مصر.'
                      : 'Higher ambient temperatures degrade Voc at -0.38%/°C. Benban Solar Park mitigates this with single-axis tracking and desert airflow designs to maintain high capacity factors.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* STATION 2: WIND TURBINE AERODYNAMICS & BETZ LIMIT              */}
        {/* ============================================================== */}
        {activeStation === 'wind_aerodynamics' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls & Turbine Presets */}
            <div className="lg:col-span-4 space-y-5">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold flex items-center gap-2 text-teal-400">
                    <Wind className="w-4 h-4" />
                    {isArabic ? 'مزرعة وتوربينة الرياح المرجعية' : 'Wind Turbine Station Preset'}
                  </h3>
                </div>
                <div className="space-y-2">
                  {WIND_TURBINE_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedWindPreset(preset);
                        setWindSpeedMs(preset.avgSiteWindSpeedMs);
                      }}
                      className={`w-full text-start p-3 rounded-lg text-xs transition-all border ${
                        selectedWindPreset.id === preset.id
                          ? 'bg-teal-500/15 border-teal-500/50 text-teal-300 font-semibold'
                          : isLight
                          ? 'border-slate-200 hover:bg-slate-50 text-slate-700'
                          : 'border-slate-800 hover:bg-slate-800/60 text-slate-300'
                      }`}
                    >
                      <div className="font-bold">{isArabic ? preset.nameAr : preset.nameEn}</div>
                      <div className="text-[11px] opacity-75 mt-0.5">
                        {preset.turbineModel} • Ø {preset.rotorDiameterM}m • {preset.ratedPowerKw / 1000} MW
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Aerodynamic Controls */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-slate-200">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  {isArabic ? 'محددات الرياح وزاوية الريشة (Pitch)' : 'Aerodynamic & Pitch Controls'}
                </h3>

                {/* Wind Speed Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'سرعة الرياح اللحظية (v)' : 'Wind Velocity (v)'}
                    </span>
                    <span className="font-mono text-teal-400 font-bold">{windSpeedMs} m/s</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={30}
                    step={0.5}
                    value={windSpeedMs}
                    onChange={(e) => setWindSpeedMs(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>0 m/s</span>
                    <span>{selectedWindPreset.ratedWindSpeedMs} m/s (الاسمية)</span>
                    <span>{selectedWindPreset.cutOutWindSpeedMs} m/s (القطع)</span>
                  </div>
                </div>

                {/* Blade Pitch Angle Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'زاوية انحراف الريشة (Pitch Angle β)' : 'Blade Pitch Angle (β)'}
                    </span>
                    <span className="font-mono text-cyan-400 font-bold">{bladePitchDeg}°</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={25}
                    step={1}
                    value={bladePitchDeg}
                    onChange={(e) => setBladePitchDeg(Number(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>0° (أقصى عزم دوران)</span>
                    <span>12° (تخفيف حمل)</span>
                    <span>25° (إيقاف ريشي Feathering)</span>
                  </div>
                </div>

                {/* Air Density Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'كثافة الهواء (ρ)' : 'Air Density (ρ)'}
                    </span>
                    <span className="font-mono text-slate-300 font-bold">{airDensityKgM3} kg/m³</span>
                  </div>
                  <input
                    type="range"
                    min={1.1}
                    max={1.3}
                    step={0.01}
                    value={airDensityKgM3}
                    onChange={(e) => setAirDensityKgM3(Number(e.target.value))}
                    className="w-full accent-slate-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>1.15 (هواء ساخن صيفاً)</span>
                    <span>1.225 (مستوى البحر القياسي)</span>
                    <span>1.29 (شتاء بارد)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Display & Betz Limit Visualizer */}
            <div className="lg:col-span-8 space-y-5">
              {/* Telemetry Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'القدرة الكهربائية الناتجة' : 'Electrical Output'}
                  </div>
                  <div className="text-xl font-bold font-mono text-teal-400">
                    {windCalculations.electricalOutputMw}{' '}
                    <span className="text-xs font-normal text-slate-400">MW</span>
                  </div>
                  <div className={`text-[10px] font-semibold mt-1 ${windCalculations.statusColor}`}>
                    {isArabic ? windCalculations.statusTextAr : windCalculations.statusTextEn}
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'معامل القدرة الفعلي (Cp)' : 'Power Coeff (Cp)'}
                  </div>
                  <div className="text-xl font-bold font-mono text-cyan-400">
                    {windCalculations.actualCp}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    حد بيتز الأقصى = {windCalculations.betzLimitCp} (59.3%)
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'المساحة الكاسحة للدوار' : 'Rotor Swept Area'}
                  </div>
                  <div className="text-xl font-bold font-mono text-slate-200">
                    {windCalculations.sweptAreaM2.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-slate-400">m²</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    قطر الدوار: {selectedWindPreset.rotorDiameterM} متر
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'معامل السعة اللحظي' : 'Capacity Factor'}
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400">
                    {windCalculations.capacityFactor} %
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {isArabic ? 'مقارنة بالقدرة الاسمية القصوى' : 'of rated maximum capacity'}
                  </div>
                </div>
              </div>

              {/* Graphical Wind Power Curve vs Betz Limit Visualizer */}
              <div
                className={`p-5 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">
                      {isArabic
                        ? 'منحنى قدرة الرياح، حد بيتز الفيزيائي (Betz Limit = 16/27)، والتحكم بالزاوية'
                        : 'Wind Power Curve, Theoretical Betz Limit (59.3%), and Pitch Control'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isArabic
                        ? 'P = 0.5 · ρ · A · v³ · Cp — تناسب مكعب السرعة يوضح أهمية سرعة الرياح الفائقة بخليج السويس'
                        : 'P = 0.5 · ρ · A · v³ · Cp — cubic dependency demonstrates why Gulf of Suez is prime wind terrain'}
                    </p>
                  </div>
                </div>

                {/* SVG Wind Simulation Animation */}
                <div className="h-72 w-full bg-slate-950/90 rounded-xl p-3 flex items-center justify-center border border-slate-800/80 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 540 220">
                    <defs>
                      {/* Tower Steel Gradient */}
                      <linearGradient id="windTowerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#475569" />
                        <stop offset="35%" stopColor="#e2e8f0" />
                        <stop offset="70%" stopColor="#94a3b8" />
                        <stop offset="100%" stopColor="#334155" />
                      </linearGradient>

                      {/* Blade Carbon Fiber Gradient */}
                      <linearGradient id="windBladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f8fafc" />
                        <stop offset="60%" stopColor="#cbd5e1" />
                        <stop offset="100%" stopColor="#64748b" />
                      </linearGradient>

                      {/* Wind Streamline Cyan Gradient */}
                      <linearGradient id="windStreamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Left Pane: Aerodynamic Turbine & Flow Streamlines */}
                    <g transform="translate(10, 0)">
                      {/* Horizon & Desert Base */}
                      <line x1="5" y1="205" x2="160" y2="205" stroke="#475569" strokeWidth="1.5" />
                      <rect x="5" y="205" width="155" height="12" fill="#0f172a" />
                      
                      {/* Foundation Concrete Plinth */}
                      <rect x="68" y="200" width="28" height="6" rx="1" fill="#334155" stroke="#64748b" strokeWidth="0.8" />

                      {/* Tapered Monopole Tower (Height ~140m scale) */}
                      <polygon points="78,75 86,75 92,200 72,200" fill="url(#windTowerGrad)" stroke="#475569" strokeWidth="0.8" />

                      {/* Nacelle Machine Housing */}
                      <rect x="68" y="68" width="32" height="14" rx="3" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
                      {/* Rear Anemometer & Warning Light */}
                      <line x1="94" y1="68" x2="94" y2="62" stroke="#64748b" strokeWidth="1" />
                      <circle cx="94" cy="62" r="1.8" fill="#ef4444" className="animate-ping" />
                      <circle cx="94" cy="62" r="1.5" fill="#ef4444" />

                      {/* Rotor Hub Spinner Cone (Facing Left into the wind) */}
                      <path d="M 68 70 Q 58 75 68 80 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
                      <circle cx="67" cy="75" r="3.5" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />

                      {/* 3 Aerodynamic Blades with Rotation based on speed */}
                      {(() => {
                        const isRotating = windSpeedMs >= selectedWindPreset.cutInWindSpeedMs && windSpeedMs <= selectedWindPreset.cutOutWindSpeedMs;
                        const baseAngle = isRotating ? (windSpeedMs * 18) % 360 : 0;
                        return (
                          <g transform={`rotate(${baseAngle} 67 75)`}>
                            {/* Blade 1 */}
                            <path d="M 67 75 Q 63 45 65 18 Q 67 15 69 18 Q 71 45 67 75 Z" fill="url(#windBladeGrad)" stroke="#64748b" strokeWidth="0.8" />
                            {/* Red tip warning marking */}
                            <path d="M 65 24 L 69 24 L 68 17 L 66 17 Z" fill="#ef4444" />

                            {/* Blade 2 (120 deg) */}
                            <g transform="rotate(120 67 75)">
                              <path d="M 67 75 Q 63 45 65 18 Q 67 15 69 18 Q 71 45 67 75 Z" fill="url(#windBladeGrad)" stroke="#64748b" strokeWidth="0.8" />
                              <path d="M 65 24 L 69 24 L 68 17 L 66 17 Z" fill="#ef4444" />
                            </g>

                            {/* Blade 3 (240 deg) */}
                            <g transform="rotate(240 67 75)">
                              <path d="M 67 75 Q 63 45 65 18 Q 67 15 69 18 Q 71 45 67 75 Z" fill="url(#windBladeGrad)" stroke="#64748b" strokeWidth="0.8" />
                              <path d="M 65 24 L 69 24 L 68 17 L 66 17 Z" fill="#ef4444" />
                            </g>
                          </g>
                        );
                      })()}

                      {/* Aerodynamic Wind Streamlines Decelerating through Rotor Plane */}
                      <path d="M 10 50 C 35 50, 55 60, 100 65" fill="none" stroke="url(#windStreamGrad)" strokeWidth="1.5" strokeDasharray="3,3" />
                      <path d="M 10 75 C 35 75, 55 75, 100 75" fill="none" stroke="url(#windStreamGrad)" strokeWidth="2" strokeDasharray="4,2" />
                      <path d="M 10 100 C 35 100, 55 90, 100 85" fill="none" stroke="url(#windStreamGrad)" strokeWidth="1.5" strokeDasharray="3,3" />

                      {/* Wind Speed Vector Badge */}
                      <rect x="10" y="15" width="62" height="18" rx="3" fill="#0f172a" stroke="#0284c7" strokeWidth="1" opacity="0.9" />
                      <text x="41" y="27" textAnchor="middle" fill="#38bdf8" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                        v = {windSpeedMs.toFixed(1)} m/s
                      </text>
                    </g>

                    {/* Divider between Turbine Visual and Power Chart */}
                    <line x1="175" y1="15" x2="175" y2="205" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />

                    {/* Right Pane: Betz Law Power Curve & Operating Point */}
                    <g transform="translate(180, 0)">
                      {/* Background Chart Grid */}
                      <line x1="30" y1="20" x2="30" y2="185" stroke="#334155" strokeWidth="1" />
                      <line x1="30" y1="185" x2="350" y2="185" stroke="#334155" strokeWidth="1" />
                      {[50, 95, 140].map((gy) => (
                        <line key={gy} x1="30" y1={gy} x2="350" y2={gy} stroke="#1e293b" strokeDasharray="3 3" strokeWidth="1" />
                      ))}
                      {[100, 170, 240, 310].map((gx) => (
                        <line key={gx} x1={gx} y1="20" x2={gx} y2="185" stroke="#1e293b" strokeDasharray="3 3" strokeWidth="1" />
                      ))}

                      {/* Theoretical Betz Limit Envelope (Cp = 16/27 = 0.593) */}
                      <path
                        d="M 30 185 Q 160 170 260 25"
                        fill="none"
                        stroke="#06b6d4"
                        strokeDasharray="4 4"
                        strokeWidth="1.8"
                      />
                      <text x="245" y="22" fill="#06b6d4" fontSize="8" fontWeight="bold">
                        Betz Limit (Cp = 59.3%)
                      </text>

                      {/* Actual Wind Turbine 4-Regime Power Curve */}
                      <path
                        d="M 30 185 L 75 185 Q 165 178 225 65 L 305 65 L 305 185 L 345 185"
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="3.2"
                      />

                      {/* Operational Regime Zones Text & Shading */}
                      <text x="45" y="198" fill="#64748b" fontSize="7.5">I: Calm</text>
                      <text x="120" y="198" fill="#14b8a6" fontSize="7.5">II: v³ MPPT</text>
                      <text x="240" y="198" fill="#38bdf8" fontSize="7.5">III: Pitch Rated</text>
                      <text x="315" y="198" fill="#ef4444" fontSize="7.5">IV: Cut-Out</text>

                      {/* Live Operating Point Marker */}
                      {(() => {
                        const curX = Math.min(345, Math.max(30, 30 + (windSpeedMs / 30) * 315));
                        let curY = 185;
                        if (windSpeedMs >= selectedWindPreset.cutInWindSpeedMs && windSpeedMs < selectedWindPreset.ratedWindSpeedMs) {
                          const ratio = (windSpeedMs - selectedWindPreset.cutInWindSpeedMs) / (selectedWindPreset.ratedWindSpeedMs - selectedWindPreset.cutInWindSpeedMs);
                          curY = 185 - Math.pow(ratio, 2.5) * 120;
                        } else if (windSpeedMs >= selectedWindPreset.ratedWindSpeedMs && windSpeedMs <= selectedWindPreset.cutOutWindSpeedMs) {
                          curY = 65;
                        }
                        return (
                          <g>
                            <circle cx={curX} cy={curY} r="7" fill="#f43f5e" className="animate-ping" opacity="0.6" />
                            <circle cx={curX} cy={curY} r="4.5" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.2" />
                            <line x1={curX} y1={curY} x2={curX} y2="185" stroke="#f43f5e" strokeDasharray="2 2" strokeWidth="1.2" />
                            <rect x={Math.max(32, curX - 35)} y={Math.max(8, curY - 22)} width="70" height="15" rx="2" fill="#0f172a" stroke="#f43f5e" strokeWidth="0.8" />
                            <text x={Math.max(32, curX - 35) + 35} y={Math.max(8, curY - 22) + 11} textAnchor="middle" fill="#fb7185" fontSize="8" fontWeight="bold" fontFamily="monospace">
                              {windCalculations.electricalOutputMw.toFixed(1)} MW
                            </text>
                          </g>
                        );
                      })()}

                      {/* Axes Labels */}
                      <text x="35" y="15" fill="#14b8a6" fontSize="8">Power P (MW)</text>
                      <text x="315" y="180" fill="#94a3b8" fontSize="8">v (m/s)</text>
                    </g>
                  </svg>
                </div>

                {/* Educational Highlight */}
                <div className="mt-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                  <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">
                      {isArabic ? 'قاعدة فيزيائية منهجية (قانون بيتز الألماني):' : 'Betz Law Physical Principle:'}
                    </span>{' '}
                    {isArabic
                      ? 'أثبت ألبرت بيتز عام ۱۹۱۹ أنه يستحيل لأي توربينة استخلاص أكثر من ۱٦/۲۷ (٥۹.۳٪) من الطاقة الحركية للرياح؛ لأن إيقاف الهواء تماماً يمنع تدفق كتل هوائية جديدة عبر القرص الدوار. في جبل الزيت بمصر، تصل الكفاءة الديناميكية إلى ٤٦٪، وهي من أعلى المعدلات عالمياً.'
                      : 'Albert Betz proved that no turbine can capture more than 16/27 (59.3%) of wind kinetic energy. Gabal El-Zeit operates at an impressive 46% aerodynamic Cp in the high-velocity Gulf of Suez wind tunnel.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* STATION 3: GREEN HYDROGEN & POWERT-TO-X REACTOR               */}
        {/* ============================================================== */}
        {activeStation === 'green_hydrogen_ptx' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Parameters Panel */}
            <div className="lg:col-span-4 space-y-5">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold flex items-center gap-2 text-blue-400">
                    <Droplets className="w-4 h-4" />
                    {isArabic ? 'تقنية المحلل الكهربائي وموقع المشروع' : 'Electrolyzer Tech & Project Site'}
                  </h3>
                </div>
                <div className="space-y-2">
                  {HYDROGEN_ELECTROLYZER_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedH2Preset(preset);
                        setInputRenewablePowerMw(preset.electrolyzerPowerMw);
                      }}
                      className={`w-full text-start p-3 rounded-lg text-xs transition-all border ${
                        selectedH2Preset.id === preset.id
                          ? 'bg-blue-500/15 border-blue-500/50 text-blue-300 font-semibold'
                          : isLight
                          ? 'border-slate-200 hover:bg-slate-50 text-slate-700'
                          : 'border-slate-800 hover:bg-slate-800/60 text-slate-300'
                      }`}
                    >
                      <div className="font-bold">{isArabic ? preset.nameAr : preset.nameEn}</div>
                      <div className="text-[11px] opacity-75 mt-0.5">
                        {preset.technology.toUpperCase()} • {preset.electrolyzerPowerMw} MW • {preset.specificEnergyKwhPerKg} kWh/kg H₂
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-slate-200">
                  <Sliders className="w-4 h-4 text-blue-400" />
                  {isArabic ? 'الطاقة الخضراء المغذية ومسار التحويل' : 'Power Feed & PtX Pathway'}
                </h3>

                {/* Power Input Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'القدرة المتجددة المخصصة للمحلل' : 'Dedicated Renewable Power'}
                    </span>
                    <span className="font-mono text-blue-400 font-bold">{inputRenewablePowerMw} MW</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={10}
                    value={inputRenewablePowerMw}
                    onChange={(e) => setInputRenewablePowerMw(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>10 MW (تجريبي)</span>
                    <span>100 MW (محطة السخنة)</span>
                    <span>500 MW (مجمع عملاق)</span>
                  </div>
                </div>

                {/* PtX Target Product Radio */}
                <div>
                  <label className="text-xs text-slate-400 block mb-2">
                    {isArabic ? 'المنتج النهائي المشتق (Power-to-X):' : 'Downstream PtX Chemical Product:'}
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <button
                      onClick={() => setPtxMode('h2_pure')}
                      className={`p-2 rounded-lg border font-semibold transition-all ${
                        ptxMode === 'h2_pure'
                          ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                          : 'border-slate-800 bg-slate-800/40 text-slate-400'
                      }`}
                    >
                      {isArabic ? 'H₂ نقي مضغوط' : 'Pure H2 Gas'}
                    </button>
                    <button
                      onClick={() => setPtxMode('green_ammonia')}
                      className={`p-2 rounded-lg border font-semibold transition-all ${
                        ptxMode === 'green_ammonia'
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                          : 'border-slate-800 bg-slate-800/40 text-slate-400'
                      }`}
                    >
                      {isArabic ? 'أمونيا خضراء (NH₃)' : 'Green Ammonia'}
                    </button>
                    <button
                      onClick={() => setPtxMode('saf_synfuel')}
                      className={`p-2 rounded-lg border font-semibold transition-all ${
                        ptxMode === 'saf_synfuel'
                          ? 'bg-purple-500/20 border-purple-500 text-purple-300'
                          : 'border-slate-800 bg-slate-800/40 text-slate-400'
                      }`}
                    >
                      {isArabic ? 'وقود طيران SAF' : 'E-Kerosene SAF'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Display & Reaction Flow */}
            <div className="lg:col-span-8 space-y-5">
              {/* Telemetry Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'إنتاج الهيدروجين الأخضر' : 'H2 Production Rate'}
                  </div>
                  <div className="text-xl font-bold font-mono text-blue-400">
                    {h2Calculations.h2ProductionKgPerHour.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-slate-400">kg/h</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {h2Calculations.h2DailyTons} {isArabic ? 'طن هيدروجين يومياً' : 'tons/day'}
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'استهلاك المياه المحلاة فائقة النقاوة' : 'Demineralized Water Feed'}
                  </div>
                  <div className="text-xl font-bold font-mono text-cyan-400">
                    {h2Calculations.pureWaterDemandLitersPerHour.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-slate-400">L/h</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    ~{(h2Calculations.pureWaterDemandLitersPerHour * 24 / 1000).toFixed(0)} m³/day RO تحلية
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {ptxMode === 'green_ammonia'
                      ? (isArabic ? 'إنتاج الأمونيا الخضراء' : 'Green NH3 Yield')
                      : ptxMode === 'saf_synfuel'
                      ? (isArabic ? 'إنتاج وقود الطيران SAF' : 'SAF Aviation Fuel')
                      : (isArabic ? 'الأكسجين النقي الثانوي' : 'O2 Co-product')}
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400">
                    {ptxMode === 'green_ammonia'
                      ? `${h2Calculations.ammoniaTonsDaily} t/d`
                      : ptxMode === 'saf_synfuel'
                      ? `${h2Calculations.safBarrelsDaily} bpd`
                      : `${(h2Calculations.o2CoProductKgPerHour / 1000).toFixed(1)} t/h`}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {ptxMode === 'green_ammonia'
                      ? (isArabic ? 'لتزويد سفن قناة السويس' : 'Maritime bunkering export')
                      : (isArabic ? 'لإزالة كربون الطيران' : 'Aviation decarbonization')}
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'انبعاثات CO2 المتفادية يومياً' : 'Daily CO2 Abatement'}
                  </div>
                  <div className="text-xl font-bold font-mono text-teal-400">
                    {h2Calculations.co2AvoidedDailyTons.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-slate-400">tCO₂</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {isArabic ? 'مقارنة بالهيدروجين الرمادي SMR' : 'vs. gray SMR fossil hydrogen'}
                  </div>
                </div>
              </div>

              {/* Chemical Reactor Flowchart SVG */}
              <div
                className={`p-5 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <h4 className="text-sm font-bold text-slate-200 mb-3">
                  {isArabic
                    ? 'المخطط الهندسي لتدفق الطاقة والكتلة: من المحلل الكهربائي إلى مشتقات Power-to-X'
                    : 'Process Flow Diagram: Water Electrolysis to Power-to-X Derivatives'}
                </h4>

                <div className="h-72 w-full bg-slate-950/90 rounded-xl p-3 flex items-center justify-center border border-slate-800/80 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 560 210">
                    <defs>
                      {/* Flow Arrowheads */}
                      <marker id="arrowCyan" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#38bdf8" />
                      </marker>
                      <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#60a5fa" />
                      </marker>
                      <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#34d399" />
                      </marker>

                      {/* Stack Bipolar Plate Texture */}
                      <linearGradient id="stackPlatesGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="20%" stopColor="#475569" />
                        <stop offset="40%" stopColor="#334155" />
                        <stop offset="60%" stopColor="#1e293b" />
                        <stop offset="80%" stopColor="#475569" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>

                      {/* Chemical Reactor Gradient */}
                      <linearGradient id="reactorBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#065f46" />
                        <stop offset="50%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#064e3b" />
                      </linearGradient>
                    </defs>

                    {/* --- MODULE 1: RENEWABLE POWER & RECTIFIER --- */}
                    <g transform="translate(10, 20)">
                      <rect x="0" y="0" width="85" height="65" rx="5" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
                      {/* Transformer Coils Symbol */}
                      <circle cx="28" cy="24" r="10" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                      <circle cx="42" cy="24" r="10" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                      <text x="65" y="28" fill="#38bdf8" fontSize="8" fontWeight="bold">AC/DC</text>
                      <text x="42" y="47" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontWeight="bold">
                        {isArabic ? 'محول وتقويم DC' : 'Rectifier Substation'}
                      </text>
                      <text x="42" y="58" textAnchor="middle" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">
                        {inputRenewablePowerMw} MW
                      </text>
                    </g>

                    {/* --- MODULE 2: RO SEAWATER DESALINATION --- */}
                    <g transform="translate(10, 115)">
                      <rect x="0" y="0" width="85" height="65" rx="5" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
                      {/* RO Pressure Vessel Cylinder */}
                      <rect x="12" y="14" width="45" height="15" rx="7.5" fill="#1e293b" stroke="#06b6d4" strokeWidth="1" />
                      <line x1="26" y1="14" x2="26" y2="29" stroke="#06b6d4" strokeWidth="1" strokeDasharray="1,1" />
                      <line x1="42" y1="14" x2="42" y2="29" stroke="#06b6d4" strokeWidth="1" strokeDasharray="1,1" />
                      <text x="65" y="25" fill="#06b6d4" fontSize="7" fontWeight="bold">RO</text>
                      <text x="42" y="45" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontWeight="bold">
                        {isArabic ? 'تحلية فائقة النقاوة' : 'Ultra-Pure RO'}
                      </text>
                      <text x="42" y="56" textAnchor="middle" fill="#22d3ee" fontSize="7" fontFamily="monospace">
                        &lt;0.1 µS/cm | H₂O
                      </text>
                    </g>

                    {/* Feed Conduits to Electrolyzer */}
                    <path d="M 95 52 L 140 75" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />
                    <text x="110" y="56" fill="#38bdf8" fontSize="6.5" fontWeight="bold">DC BUS</text>

                    <path d="M 95 147 L 140 120" stroke="#06b6d4" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />
                    <text x="105" y="140" fill="#22d3ee" fontSize="6.5" fontWeight="bold">H₂O PUMP</text>

                    {/* --- MODULE 3: MULTI-CELL INDUSTRIAL ELECTROLYZER STACK --- */}
                    <g transform="translate(145, 45)">
                      {/* Stack Outer Compression Shell */}
                      <rect x="0" y="0" width="135" height="105" rx="6" fill="#0b1329" stroke="#3b82f6" strokeWidth="2" />
                      
                      {/* Left & Right Heavy Stainless End Plates with Tie-Rods */}
                      <rect x="4" y="8" width="10" height="89" rx="2" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
                      <rect x="121" y="8" width="10" height="89" rx="2" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="4" y1="15" x2="131" y2="15" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="4" y1="90" x2="131" y2="90" stroke="#94a3b8" strokeWidth="1.5" />

                      {/* Internal Repeating Bipolar Plates & Catalyst Membrane */}
                      <rect x="18" y="20" width="99" height="65" fill="url(#stackPlatesGrad)" />

                      {/* Anode (+) and Cathode (-) Zones */}
                      <rect x="22" y="24" width="42" height="57" fill="#047857" opacity="0.3" />
                      <text x="43" y="38" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">ANODE (+)</text>
                      <text x="43" y="52" textAnchor="middle" fill="#a7f3d0" fontSize="6.5">2H₂O → O₂</text>
                      <text x="43" y="62" textAnchor="middle" fill="#a7f3d0" fontSize="6.5">+ 4H⁺ + 4e⁻</text>

                      {/* Center Proton Exchange Membrane (PEM / Diaphragm) */}
                      <line x1="67" y1="20" x2="67" y2="85" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3,2" />
                      <text x="67" y="16" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">PEM (H⁺)</text>

                      <rect x="71" y="24" width="42" height="57" fill="#1d4ed8" opacity="0.3" />
                      <text x="92" y="38" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="bold">CATHODE (-)</text>
                      <text x="92" y="52" textAnchor="middle" fill="#93c5fd" fontSize="6.5">4H⁺ + 4e⁻</text>
                      <text x="92" y="62" textAnchor="middle" fill="#93c5fd" fontSize="6.5">→ 2H₂ ↑</text>

                      {/* Stack Spec Badge */}
                      <rect x="18" y="87" width="99" height="15" fill="#0f172a" rx="2" />
                      <text x="67" y="98" textAnchor="middle" fill="#93c5fd" fontSize="7" fontWeight="bold" fontFamily="monospace">
                        {selectedH2Preset.technology.toUpperCase()} | {selectedH2Preset.operatingPressureBar} bar | η={selectedH2Preset.cellEfficiencyPercent}%
                      </text>
                    </g>

                    {/* --- MODULE 4: GAS SEPARATION & DEOXO DRYING --- */}
                    {/* Top O2 Stream to Knockout Separator */}
                    <path d="M 188 45 L 188 18 L 310 18" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />
                    {/* O2 Separator Tank */}
                    <rect x="310" y="8" width="22" height="36" rx="6" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
                    <text x="321" y="28" textAnchor="middle" fill="#34d399" fontSize="6.5" fontWeight="bold">O₂</text>
                    <path d="M 332 26 L 360 26" stroke="#10b981" strokeWidth="1.5" fill="none" markerEnd="url(#arrowGreen)" />
                    <text x="365" y="24" fill="#34d399" fontSize="7.5" fontWeight="bold">
                      {isArabic ? 'أكسجين نقي' : 'Pure O₂'}
                    </text>
                    <text x="365" y="33" fill="#a7f3d0" fontSize="6.5" fontFamily="monospace">
                      {h2Calculations.o2CoProductKgPerHour} kg/h
                    </text>

                    {/* Cathode H2 Stream to H2 Separator & DeOxo Unit */}
                    <path d="M 280 97 L 315 97" stroke="#3b82f6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowBlue)" />
                    
                    {/* H2 Knock-out Drum */}
                    <rect x="315" y="78" width="22" height="38" rx="6" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1" />
                    <text x="326" y="100" textAnchor="middle" fill="#93c5fd" fontSize="7" fontWeight="bold">H₂</text>

                    {/* DeOxo Catalytic Purifier & Dual Desiccant Towers */}
                    <path d="M 337 97 L 352 97" stroke="#3b82f6" strokeWidth="2" fill="none" />
                    <rect x="352" y="82" width="16" height="30" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                    <text x="360" y="99" textAnchor="middle" fill="#38bdf8" fontSize="5.5" fontWeight="bold">TSA</text>
                    <rect x="371" y="82" width="16" height="30" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                    <text x="379" y="99" textAnchor="middle" fill="#38bdf8" fontSize="5.5" fontWeight="bold">DeOxo</text>
                    <text x="369" y="122" textAnchor="middle" fill="#38bdf8" fontSize="6.5" fontWeight="bold">99.999% H₂</text>

                    {/* H2 Conduit from DeOxo to Downstream PtX */}
                    <path d="M 387 97 L 420 97" stroke="#3b82f6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowBlue)" />

                    {/* --- MODULE 5: DOWNSTREAM SYNTHESIS UNIT (HABER-BOSCH / SAF / STORAGE) --- */}
                    <g transform="translate(425, 45)">
                      <rect x="0" y="0" width="125" height="120" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.8" />
                      
                      {/* Synthesis Reactor Vessel Graphic */}
                      {ptxMode === 'green_ammonia' && (
                        <g>
                          {/* Haber-Bosch Converter Column */}
                          <rect x="14" y="18" width="34" height="60" rx="10" fill="url(#reactorBodyGrad)" stroke="#34d399" strokeWidth="1.2" />
                          <line x1="14" y1="38" x2="48" y2="38" stroke="#34d399" strokeWidth="0.8" strokeDasharray="2,2" />
                          <line x1="14" y1="58" x2="48" y2="58" stroke="#34d399" strokeWidth="0.8" strokeDasharray="2,2" />
                          <text x="31" y="50" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">Fe/Ru</text>
                          {/* Refrigerated Spherical Bullet Tank */}
                          <circle cx="85" cy="48" r="22" fill="#1e293b" stroke="#34d399" strokeWidth="1.2" />
                          <line x1="85" y1="26" x2="85" y2="70" stroke="#34d399" strokeWidth="0.8" opacity="0.6" />
                          <text x="85" y="51" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">NH₃</text>
                        </g>
                      )}

                      {ptxMode === 'saf_synfuel' && (
                        <g>
                          {/* Fischer-Tropsch Reactor Column */}
                          <rect x="18" y="16" width="30" height="64" rx="4" fill="url(#reactorBodyGrad)" stroke="#10b981" strokeWidth="1.2" />
                          <text x="33" y="50" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">FT</text>
                          {/* Fractionator Column */}
                          <rect x="62" y="24" width="22" height="56" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                          <text x="73" y="54" textAnchor="middle" fill="#38bdf8" fontSize="6.5" fontWeight="bold">JET</text>
                        </g>
                      )}

                      {ptxMode === 'h2_pure' && (
                        <g>
                          {/* 4 Multi-Stage Compression Cylinders */}
                          {[16, 40, 64, 88].map((cx) => (
                            <rect key={cx} x={cx} y="22" width="18" height="54" rx="4" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1" />
                          ))}
                          <text x="61" y="52" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">700 BAR</text>
                        </g>
                      )}

                      {/* Header Title */}
                      <text x="62" y="14" textAnchor="middle" fill="#34d399" fontSize="7.5" fontWeight="bold">
                        {ptxMode === 'green_ammonia'
                          ? (isArabic ? 'مفاعل هابر-بوش (NH₃)' : 'Haber-Bosch Loop')
                          : ptxMode === 'saf_synfuel'
                          ? (isArabic ? 'تفاعل فيشر-تروبش (SAF)' : 'Fischer-Tropsch (SAF)')
                          : (isArabic ? 'محطة ضغط وتخزين H₂' : 'High-Pressure Buffer')}
                      </text>

                      {/* Quantitative Output Badge */}
                      <rect x="10" y="86" width="105" height="24" rx="3" fill="#022c22" stroke="#059669" strokeWidth="1" />
                      <text x="62" y="98" textAnchor="middle" fill="#6ee7b7" fontSize="7.5" fontWeight="bold">
                        {ptxMode === 'green_ammonia'
                          ? `${h2Calculations.ammoniaTonsDaily} t/day Green NH₃`
                          : ptxMode === 'saf_synfuel'
                          ? `${h2Calculations.safBarrelsDaily} bbl/day SAF`
                          : `${h2Calculations.h2DailyTons} t/day Compressed H₂`}
                      </text>
                      <text x="62" y="106" textAnchor="middle" fill="#a7f3d0" fontSize="6.5">
                        SCZONE Ain Sokhna Export Hub
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Educational Insight */}
                <div className="mt-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                  <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">
                      {isArabic ? 'محور استراتيجية مصر الوطنية للهيدروجين الأخضر:' : 'Egypt National Green Hydrogen Strategy:'}
                    </span>{' '}
                    {isArabic
                      ? 'تمتلك منطقة قناة السويس الاقتصادية (SCZone) ميزة لوجستية فريدة بمرور ۱۲٪ من التجارة البحرية الدولية، مما يجعل تحويل الهيدروجين الأخضر إلى أمونيا خضراء (NH₃) ووقود سفن مستدام أحد أسرع القطاعات الاستثمارية نمواً لخدمة التصدير إلى أوروبا وموانئ المتوسط.'
                      : 'The SCZone leverages Suez Canal maritime traffic to export green ammonia (NH3) for container ship bunker fuel and supply European heavy industry.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* STATION 4: SMART GRIDS, BESS & INTERCONNECTION                 */}
        {/* ============================================================== */}
        {activeStation === 'smart_grid_storage' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls */}
            <div className="lg:col-span-4 space-y-5">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold flex items-center gap-2 text-purple-400">
                    <Zap className="w-4 h-4" />
                    {isArabic ? 'منظومة التخزين والربط الشبكي' : 'Grid Storage & Interconnection'}
                  </h3>
                </div>
                <div className="space-y-2">
                  {GRID_STORAGE_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedGridPreset(preset);
                      }}
                      className={`w-full text-start p-3 rounded-lg text-xs transition-all border ${
                        selectedGridPreset.id === preset.id
                          ? 'bg-purple-500/15 border-purple-500/50 text-purple-300 font-semibold'
                          : isLight
                          ? 'border-slate-200 hover:bg-slate-50 text-slate-700'
                          : 'border-slate-800 hover:bg-slate-800/60 text-slate-300'
                      }`}
                    >
                      <div className="font-bold">{isArabic ? preset.nameAr : preset.nameEn}</div>
                      <div className="text-[11px] opacity-75 mt-0.5">
                        {isArabic ? preset.categoryAr : preset.categoryEn} • {preset.ratedPowerMw} MW / {preset.storageCapacityMwh} MWh
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Disturbance & Frequency Simulator */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-slate-200">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  {isArabic ? 'محاكاة تردد الشبكة واختلال التوازن' : 'Grid Frequency & Disturbance'}
                </h3>

                {/* Grid Frequency Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'تردد الشبكة القومية الموحدة (f)' : 'Unified Grid Frequency (f)'}
                    </span>
                    <span
                      className={`font-mono font-bold ${
                        Math.abs(gridFrequencyHz - 50) > 0.15 ? 'text-red-400 animate-pulse' : 'text-emerald-400'
                      }`}
                    >
                      {gridFrequencyHz.toFixed(2)} Hz
                    </span>
                  </div>
                  <input
                    type="range"
                    min={49.4}
                    max={50.6}
                    step={0.02}
                    value={gridFrequencyHz}
                    onChange={(e) => setGridFrequencyHz(Number(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>49.40 Hz (هبوط حرج)</span>
                    <span>50.00 Hz (المعيار الاسمي)</span>
                    <span>50.60 Hz (فائض توليد)</span>
                  </div>
                </div>

                {/* Quick Event Trigger Buttons */}
                <div className="space-y-1.5">
                  <span className="text-xs text-slate-400 block">
                    {isArabic ? 'سيناريوهات الطوارئ السريعة:' : 'Quick Disturbance Scenarios:'}
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button
                      onClick={() => setGridFrequencyHz(49.65)}
                      className="p-1.5 rounded-lg border border-red-500/40 bg-red-500/10 text-red-300 hover:bg-red-500/20 text-center"
                    >
                      {isArabic ? 'خروج محطة فجأة' : 'Trip Event'}
                    </button>
                    <button
                      onClick={() => setGridFrequencyHz(50.0)}
                      className="p-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 text-center"
                    >
                      {isArabic ? 'استقرار تام' : 'Stable 50Hz'}
                    </button>
                    <button
                      onClick={() => setGridFrequencyHz(50.35)}
                      className="p-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 text-center"
                    >
                      {isArabic ? 'فائض طاقة شمسية' : 'Solar Surge'}
                    </button>
                  </div>
                </div>

                {/* Battery State of Charge (SOC) */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'حالة شحن الخزان / البطارية (SOC)' : 'Storage State of Charge (SOC)'}
                    </span>
                    <span className="font-mono text-purple-300 font-bold">{bessStateOfChargePercent} %</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    step={1}
                    value={bessStateOfChargePercent}
                    onChange={(e) => setBessStateOfChargePercent(Number(e.target.value))}
                    className="w-full accent-purple-400"
                  />
                </div>
              </div>
            </div>

            {/* Right Display */}
            <div className="lg:col-span-8 space-y-5">
              {/* Telemetry Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'استجابة الضخ / التفريغ التلقائي' : 'Auto Dispatch Power'}
                  </div>
                  <div className="text-xl font-bold font-mono text-purple-400">
                    {gridCalculations.autoDispatchMw > 0 ? `+${gridCalculations.autoDispatchMw}` : gridCalculations.autoDispatchMw}{' '}
                    <span className="text-xs font-normal text-slate-400">MW</span>
                  </div>
                  <div className={`text-[10px] font-semibold mt-1 ${gridCalculations.statusColor}`}>
                    {gridCalculations.autoDispatchMw > 0
                      ? (isArabic ? 'حقن فوري بالشبكة' : 'Discharging into grid')
                      : gridCalculations.autoDispatchMw < 0
                      ? (isArabic ? 'امتصاص وشحن الفائض' : 'Absorbing surplus energy')
                      : (isArabic ? 'في وضع الاستعداد' : 'Spinning reserve')}
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'زمن الاستجابة الحركي' : 'Reaction Latency'}
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400">
                    {gridCalculations.responseSeconds}{' '}
                    <span className="text-xs font-normal text-slate-400">sec</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {selectedGridPreset.responseLatencyMs} ms زمن القصور الصناعي
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'السعة التخزينية المتاحة' : 'Stored Energy Available'}
                  </div>
                  <div className="text-xl font-bold font-mono text-cyan-400">
                    {Number(gridCalculations.availableCapacityMwh).toLocaleString()}{' '}
                    <span className="text-xs font-normal text-slate-400">MWh</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    كفاءة الدورة الكاملة: {selectedGridPreset.roundTripEfficiencyPercent}%
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'حالة استقرار الشبكة' : 'Grid State'}
                  </div>
                  <div className={`text-base font-bold truncate mt-1 ${gridCalculations.statusColor}`}>
                    {isArabic ? gridCalculations.gridStatusAr : gridCalculations.gridStatusEn}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    انحراف Δf = {gridCalculations.deltaF > 0 ? `+${gridCalculations.deltaF}` : gridCalculations.deltaF} Hz
                  </div>
                </div>
              </div>

              {/* Grid Frequency Waveform & Droop Characteristic */}
              <div
                className={`p-5 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <h4 className="text-sm font-bold text-slate-200 mb-3">
                  {isArabic
                    ? 'منحنى استجابة التردد اللحظي (Frequency Droop Response Curve)'
                    : 'Grid Frequency Droop Response & Synthetic Inertia Simulation'}
                </h4>

                <div className="h-64 w-full bg-slate-950/80 rounded-xl p-4 flex items-center justify-center border border-slate-800/80 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 500 200">
                    {/* Grid Nominal 50.00 Hz Line */}
                    <line x1="40" y1="100" x2="460" y2="100" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                    <text x="465" y="104" fill="#10b981" fontSize="10">50.00 Hz</text>

                    {/* Thresholds */}
                    <line x1="40" y1="40" x2="460" y2="40" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="465" y="44" fill="#f59e0b" fontSize="9">+0.20 Hz</text>

                    <line x1="40" y1="160" x2="460" y2="160" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="465" y="164" fill="#ef4444" fontSize="9">-0.20 Hz</text>

                    {/* Simulated Transient Waveform */}
                    {(() => {
                      const offset = (50.0 - gridFrequencyHz) * 250; // visual scale
                      const targetY = 100 + offset;
                      return (
                        <path
                          d={`M 40 100 Q 120 ${100 + offset * 1.5} 200 ${targetY} T 360 ${targetY} L 460 ${targetY}`}
                          fill="none"
                          stroke="#a855f7"
                          strokeWidth="3.5"
                        />
                      );
                    })()}

                    <text x="50" y="30" fill="#a855f7" fontSize="11" fontWeight="bold">
                      {isArabic
                        ? `استجابة ${selectedGridPreset.nameAr}`
                        : `Dynamic Response: ${selectedGridPreset.nameEn}`}
                    </text>
                  </svg>
                </div>

                {/* Educational Insight */}
                <div className="mt-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                  <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">
                      {isArabic ? 'البنية التحتية الاستراتيجية للطاقة في مصر:' : 'Egypt Strategic Energy Infrastructure:'}
                    </span>{' '}
                    {isArabic
                      ? 'يعد مشروع جبل عتاقة بالسويس (٢٤٠٠ ميجاوات) أضخم مشروع ضخ وتخزين مائي في إفريقيا والشرق الأوسط، حيث يستغل فائض التوليد الشمسي والرياح لضخ المياه إلى قمة الجبل، ثم يعيد إطلاقها في ثوانٍ معدودة خلال ساعات الذروة المسائية، مما يمنع انقطاعات الشبكة دون حرق وقود أحفوري.'
                      : 'Ataka Mountain 2,400 MW Pumped-Storage Hydro is the largest in the MENA region, pumping water using daytime solar surplus and releasing it in seconds during evening peaks.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* STATION 5: CARBON ACCOUNTING & CBAM TARIFFS                    */}
        {/* ============================================================== */}
        {activeStation === 'carbon_accounting_cbam' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls */}
            <div className="lg:col-span-4 space-y-5">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-400">
                    <Factory className="w-4 h-4" />
                    {isArabic ? 'المنشأة الصناعية الخاضعة لضريبة CBAM' : 'Industrial Facility Subject to CBAM'}
                  </h3>
                </div>
                <div className="space-y-2">
                  {INDUSTRIAL_DECARBONIZATION_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedDecarbPreset(preset);
                      }}
                      className={`w-full text-start p-3 rounded-lg text-xs transition-all border ${
                        selectedDecarbPreset.id === preset.id
                          ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 font-semibold'
                          : isLight
                          ? 'border-slate-200 hover:bg-slate-50 text-slate-700'
                          : 'border-slate-800 hover:bg-slate-800/60 text-slate-300'
                      }`}
                    >
                      <div className="font-bold">{isArabic ? preset.facilityNameAr : preset.facilityNameEn}</div>
                      <div className="text-[11px] opacity-75 mt-0.5">
                        {isArabic ? preset.sectorAr : preset.sectorEn} • {(preset.annualProductionTons / 1000).toFixed(0)}k t/yr
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Decarbonization Levers */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-slate-200">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  {isArabic ? 'روافع خفض الانبعاثات والتحول الأخضر' : 'Decarbonization Interventions'}
                </h3>

                {/* Hydrogen Replacement Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'استبدال الغاز بهيدروجين أخضر (Scope 1)' : 'Green H2 Fuel Swap (Scope 1)'}
                    </span>
                    <span className="font-mono text-emerald-400 font-bold">{hydrogenReplacementPercent} %</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={hydrogenReplacementPercent}
                    onChange={(e) => setHydrogenReplacementPercent(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>0% (غاز أحفوري ۱۰۰٪)</span>
                    <span>50% (خليط هجين)</span>
                    <span>100% (أفران خضراء تامة)</span>
                  </div>
                </div>

                {/* Clean Power PPA Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">
                      {isArabic ? 'كهرباء شمسية ورياح PPA (Scope 2)' : 'Renewable Power PPA (Scope 2)'}
                    </span>
                    <span className="font-mono text-teal-400 font-bold">{cleanPowerPpaPercent} %</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={cleanPowerPpaPercent}
                    onChange={(e) => setCleanPowerPpaPercent(Number(e.target.value))}
                    className="w-full accent-teal-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>0% (شبكة اعتيادية)</span>
                    <span>50% (عقد توريد نظيف)</span>
                    <span>100% (صفر انبعاثات نطاق ٢)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Display */}
            <div className="lg:col-span-8 space-y-5">
              {/* Telemetry Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'كثافة الكربون للمنتج' : 'Product Carbon Intensity'}
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400">
                    {carbonCalculations.abatedIntensity}{' '}
                    <span className="text-xs font-normal text-slate-400">tCO₂/t</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {isArabic ? 'كانت ' : 'from '}{carbonCalculations.baseIntensity} tCO₂/t ({carbonCalculations.abatementPercentage}% خفض)
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'المعيار المرجعي الأوروبي (CBAM)' : 'EU CBAM Benchmark'}
                  </div>
                  <div className="text-xl font-bold font-mono text-slate-200">
                    {carbonCalculations.benchmarkIntensity}{' '}
                    <span className="text-xs font-normal text-slate-400">tCO₂/t</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {carbonCalculations.abatedIntensity <= carbonCalculations.benchmarkIntensity
                      ? (isArabic ? 'معفى تماماً من الضريبة ✅' : 'Exempt from Tariff ✅')
                      : (isArabic ? 'خاضع لضريبة على الفائض ⚠️' : 'Subject to Tariff on Excess ⚠️')}
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'فاتورة الضريبة الأوروبية السنوية' : 'Annual CBAM Tariff'}
                  </div>
                  <div className="text-xl font-bold font-mono text-amber-400">
                    €{carbonCalculations.annualAbatedCbamCostMEur}{' '}
                    <span className="text-xs font-normal text-slate-400">Million</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {isArabic ? 'كانت ' : 'was '}€{carbonCalculations.annualBaselineCbamCostMEur}M
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="text-[11px] text-slate-400 mb-1">
                    {isArabic ? 'الوفر المالي الصافي المحقق' : 'Net Tariff Savings'}
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400">
                    €{carbonCalculations.annualFinancialSavingsMEur}{' '}
                    <span className="text-xs font-normal text-slate-400">Million</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {isArabic ? 'سنوياً تحمي تنافسية الصادرات المصرية' : 'Annual export margin saved'}
                  </div>
                </div>
              </div>

              {/* Emissions Breakdown Scope 1, 2, 3 Visualizer */}
              <div
                className={`p-5 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <h4 className="text-sm font-bold text-slate-200 mb-3">
                  {isArabic
                    ? 'هيكل البصمة الكربونية (بروتوكول GHG: النطاق ١ المباشر، النطاق ٢ غير المباشر، النطاق ٣ سلاسل الإمداد)'
                    : 'GHG Protocol Carbon Footprint: Scope 1 (Direct), Scope 2 (Grid Electricity), Scope 3 (Supply Chain)'}
                </h4>

                <div className="h-64 w-full bg-slate-950/80 rounded-xl p-4 flex items-center justify-center border border-slate-800/80 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 500 200">
                    {/* Baseline Bar */}
                    <text x="60" y="30" fill="#94a3b8" fontSize="12" fontWeight="bold">
                      {isArabic ? 'الوضع الأساسي (Baseline)' : 'Baseline'}
                    </text>
                    <rect x="60" y="45" width="160" height="24" rx="4" fill="#ef4444" />
                    <rect x="220" y="45" width="90" height="24" rx="4" fill="#f59e0b" />
                    <rect x="310" y="45" width="60" height="24" rx="4" fill="#64748b" />
                    <text x="380" y="62" fill="#ef4444" fontSize="11" fontWeight="bold">
                      {carbonCalculations.baseTotalEmissionsMtons} Mt CO₂e
                    </text>

                    {/* Abated Bar */}
                    <text x="60" y="110" fill="#34d399" fontSize="12" fontWeight="bold">
                      {isArabic ? 'بعد التحول الأخضر (Decarbonized)' : 'Decarbonized'}
                    </text>
                    <rect
                      x="60"
                      y="125"
                      width={Math.max(10, 160 * (1 - (hydrogenReplacementPercent / 100) * 0.75))}
                      height="24"
                      rx="4"
                      fill="#10b981"
                    />
                    <rect
                      x={60 + Math.max(10, 160 * (1 - (hydrogenReplacementPercent / 100) * 0.75))}
                      y="125"
                      width={Math.max(5, 90 * (1 - cleanPowerPpaPercent / 100))}
                      height="24"
                      rx="4"
                      fill="#06b6d4"
                    />
                    <rect
                      x={
                        60 +
                        Math.max(10, 160 * (1 - (hydrogenReplacementPercent / 100) * 0.75)) +
                        Math.max(5, 90 * (1 - cleanPowerPpaPercent / 100))
                      }
                      y="125"
                      width="55"
                      height="24"
                      rx="4"
                      fill="#64748b"
                    />
                    <text
                      x={
                        125 +
                        Math.max(10, 160 * (1 - (hydrogenReplacementPercent / 100) * 0.75)) +
                        Math.max(5, 90 * (1 - cleanPowerPpaPercent / 100))
                      }
                      y="142"
                      fill="#10b981"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      {carbonCalculations.abatedTotalEmissionsMtons} Mt CO₂e
                    </text>

                    {/* Legend */}
                    <rect x="60" y="175" width="12" height="12" rx="2" fill="#ef4444" />
                    <text x="78" y="185" fill="#cbd5e1" fontSize="10">النطاق ١ (احتراق مباشر)</text>

                    <rect x="200" y="175" width="12" height="12" rx="2" fill="#06b6d4" />
                    <text x="218" y="185" fill="#cbd5e1" fontSize="10">النطاق ٢ (كهرباء مستوردة)</text>

                    <rect x="340" y="175" width="12" height="12" rx="2" fill="#64748b" />
                    <text x="358" y="185" fill="#cbd5e1" fontSize="10">النطاق ٣ (سلاسل التوريد)</text>
                  </svg>
                </div>

                {/* Educational Takeaway */}
                <div className="mt-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                  <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">
                      {isArabic ? 'أهمية ضريبة CBAM للمنهج والاقتصاد المصري:' : 'Significance of EU CBAM for Egypt:'}
                    </span>{' '}
                    {isArabic
                      ? 'بدأت آلية تعديل حدود الكربون للاتحاد الأوروبي (CBAM) فرض تقارير إلزامية على صادرات الحديد والصلب، والأسمدة، والأسمنت، والألومنيوم. خفض كثافة الانبعاثات عبر الهيدروجين الأخضر ومزارع الطاقة الشمسية يحمي أكثر من ٥ مليارات دولار من الصادرات الصناعية المصرية سنوياً.'
                      : 'The EU Carbon Border Adjustment Mechanism (CBAM) imposes carbon tariffs on steel, fertilizers, and aluminum. Clean energy adoption protects Egyptian export competitiveness.'}
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
