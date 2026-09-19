import React, { useState, useMemo, useEffect } from 'react';
import type { Language } from '../../i18n/translations';
import {
  ENGINEERING_MATERIALS,
  HEAT_TREATMENT_PROCESSES,
  PLC_PROGRAM_PRESETS,
  FLUID_POWER_PRESETS,
  CNC_TOOL_CATALOG,
  GCODE_PROGRAM_PRESETS,
  QUALITY_SPC_DATASETS,
  SHEWHART_CONSTANTS_N5,
  type EngineeringMaterialPreset,
  type HeatTreatmentProcess,
  type PlcProgramPreset,
  type FluidPowerCircuitPreset,
  type CncToolPreset,
  type GCodeProgramPreset,
  type QualityDatasetPreset,
} from '../../data/industrialLab/industrialLabData';
import {
  Wrench,
  Cpu,
  Gauge,
  BarChart3,
  Play,
  RotateCcw,
  Pause,
  Maximize2,
  Minimize2,
  Zap,
  Activity,
  Flame,
  FileCode,
  Sliders,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialStation?: IndustrialStation;
}

export type IndustrialStation =
  | 'materials_testing'
  | 'plc_automation'
  | 'fluid_power'
  | 'cnc_machining'
  | 'quality_spc';

export const IndustrialEngineeringStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialStation = 'materials_testing',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  const [activeStation, setActiveStation] = useState<IndustrialStation>(initialStation);

  // -------------------------------------------------------------
  // STATION 1: Materials Testing & Metallurgy State
  // -------------------------------------------------------------
  const [selectedMaterial, setSelectedMaterial] = useState<EngineeringMaterialPreset>(ENGINEERING_MATERIALS[0]);
  const [appliedForceKn, setAppliedForceKn] = useState<number>(35); // kN
  const [specimenDiameterMm, setSpecimenDiameterMm] = useState<number>(12.5); // Standard ASTM E8 d0 = 12.5 mm
  const [gaugeLengthMm, setGaugeLengthMm] = useState<number>(50); // L0 = 50 mm
  const [selectedHeatTreatment, setSelectedHeatTreatment] = useState<HeatTreatmentProcess>(HEAT_TREATMENT_PROCESSES[0]);

  // Calculations for Tensile Test
  const originalAreaMm2 = useMemo(() => (Math.PI * Math.pow(specimenDiameterMm, 2)) / 4, [specimenDiameterMm]);
  const engineeringStressMpa = useMemo(() => (appliedForceKn * 1000) / originalAreaMm2, [appliedForceKn, originalAreaMm2]);

  // Deformation regime
  const materialRegime = useMemo(() => {
    const sigma = engineeringStressMpa;
    const sy = selectedMaterial.yieldStrength;
    const uts = selectedMaterial.tensileStrengthUTS;

    if (sy === 0) {
      // Brittle material
      if (sigma >= uts) return { regime: 'fractured', labelEn: 'Brittle Fracture', labelAr: 'انهيار قصفي مفاجئ', color: 'text-red-500' };
      return { regime: 'elastic', labelEn: 'Linear Elastic (Hooke)', labelAr: 'مرونة خطية (قانون هوك)', color: 'text-emerald-500' };
    }

    if (sigma < sy) return { regime: 'elastic', labelEn: 'Linear Elastic (Hooke)', labelAr: 'مرونة خطية (قانون هوك)', color: 'text-emerald-500' };
    if (sigma < uts) return { regime: 'yielding', labelEn: 'Plastic Uniform Strain', labelAr: 'خضوع لدن منتظم', color: 'text-amber-500' };
    if (sigma <= uts * 1.05) return { regime: 'necking', labelEn: 'Severe Necking Localized', labelAr: 'تخصر موضعي متقدم', color: 'text-orange-500' };
    return { regime: 'fractured', labelEn: 'Tensile Rupture / Fracture', labelAr: 'كسر وانفصال نهائي', color: 'text-red-500' };
  }, [engineeringStressMpa, selectedMaterial]);

  const strainEstimate = useMemo(() => {
    const sigma = engineeringStressMpa;
    const E_mpa = selectedMaterial.elasticModulusE * 1000;
    if (sigma < selectedMaterial.yieldStrength) {
      return (sigma / E_mpa);
    }
    // plastic strain approximation
    const plasticRatio = Math.min(1.0, (sigma - selectedMaterial.yieldStrength) / (selectedMaterial.tensileStrengthUTS - selectedMaterial.yieldStrength + 1));
    return (selectedMaterial.yieldStrength / E_mpa) + plasticRatio * (selectedMaterial.fractureStrainPct / 100);
  }, [engineeringStressMpa, selectedMaterial]);

  const elongatedLengthMm = useMemo(() => gaugeLengthMm * (1 + strainEstimate), [gaugeLengthMm, strainEstimate]);

  // -------------------------------------------------------------
  // STATION 2: PLC Automation & Ladder Logic State
  // -------------------------------------------------------------
  const [selectedPlcPreset, setSelectedPlcPreset] = useState<PlcProgramPreset>(PLC_PROGRAM_PRESETS[0]);
  const [startBtnPressed, setStartBtnPressed] = useState<boolean>(false);
  const [stopBtnPressed, setStopBtnPressed] = useState<boolean>(false);
  const [overloadTripped, setOverloadTripped] = useState<boolean>(false);
  const [motorLatched, setMotorLatched] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [starDeltaState, setStarDeltaState] = useState<'IDLE' | 'STAR' | 'DELTA'>('IDLE');
  const [counterCurrent, setCounterCurrent] = useState<number>(0);

  // PLC Simulation Logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (selectedPlcPreset.id === 'dol_motor_starter') {
      if (overloadTripped || stopBtnPressed) {
        setMotorLatched(false);
      } else if (startBtnPressed) {
        setMotorLatched(true);
      }
    } else if (selectedPlcPreset.id === 'star_delta_transition') {
      if (startBtnPressed && !motorLatched && !stopBtnPressed) {
        setMotorLatched(true);
        setStarDeltaState('STAR');
        setTimerSeconds(0);
      }
      if (stopBtnPressed) {
        setMotorLatched(false);
        setStarDeltaState('IDLE');
        setTimerSeconds(0);
      }
      if (motorLatched && starDeltaState === 'STAR') {
        interval = setInterval(() => {
          setTimerSeconds((prev) => {
            if (prev >= 5) {
              setStarDeltaState('DELTA');
              return 5;
            }
            return parseFloat((prev + 0.5).toFixed(1));
          });
        }, 500);
      }
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [selectedPlcPreset, startBtnPressed, stopBtnPressed, overloadTripped, motorLatched, starDeltaState]);

  // -------------------------------------------------------------
  // STATION 3: Fluid Power: Hydraulics & Pneumatics State
  // -------------------------------------------------------------
  const [selectedFluidPreset, setSelectedFluidPreset] = useState<FluidPowerCircuitPreset>(FLUID_POWER_PRESETS[0]);
  const [dcvPosition, setDcvPosition] = useState<'extend' | 'neutral' | 'retract'>('neutral');
  const [systemPressureBar, setSystemPressureBar] = useState<number>(selectedFluidPreset.supplyPressureBar);
  const [flowThrottlePct, setFlowThrottlePct] = useState<number>(selectedFluidPreset.throttlePct);
  const [pistonPositionPct, setPistonPositionPct] = useState<number>(10); // 0 to 100%

  // Update defaults on preset change
  const handleFluidPresetChange = (preset: FluidPowerCircuitPreset) => {
    setSelectedFluidPreset(preset);
    setSystemPressureBar(preset.supplyPressureBar);
    setFlowThrottlePct(preset.throttlePct);
    setPistonPositionPct(10);
    setDcvPosition('neutral');
  };

  // Cylinder Force & Flow Computations
  const D_m = selectedFluidPreset.cylinderBoreMm / 1000;
  const d_m = selectedFluidPreset.cylinderRodMm / 1000;
  const areaPistonM2 = (Math.PI * Math.pow(D_m, 2)) / 4;
  const areaAnnularM2 = (Math.PI * (Math.pow(D_m, 2) - Math.pow(d_m, 2))) / 4;

  const extendForceKn = useMemo(() => {
    const p_pa = systemPressureBar * 1e5;
    return parseFloat(((p_pa * areaPistonM2) / 1000).toFixed(1));
  }, [systemPressureBar, areaPistonM2]);

  const retractForceKn = useMemo(() => {
    const p_pa = systemPressureBar * 1e5;
    return parseFloat(((p_pa * areaAnnularM2) / 1000).toFixed(1));
  }, [systemPressureBar, areaAnnularM2]);

  const effectiveFlowLpm = useMemo(() => {
    return selectedFluidPreset.pumpFlowRateLpm * (flowThrottlePct / 100);
  }, [selectedFluidPreset, flowThrottlePct]);

  const extendVelocityMmS = useMemo(() => {
    const q_m3_s = (effectiveFlowLpm / 60) / 1000;
    return parseFloat(((q_m3_s / areaPistonM2) * 1000).toFixed(1));
  }, [effectiveFlowLpm, areaPistonM2]);

  const hydraulicPowerKw = useMemo(() => {
    // P_kW = (p_bar * Q_Lpm) / 600
    return parseFloat(((systemPressureBar * effectiveFlowLpm) / 600).toFixed(2));
  }, [systemPressureBar, effectiveFlowLpm]);

  // Cylinder animation loop
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (dcvPosition === 'extend') {
      interval = setInterval(() => {
        setPistonPositionPct((prev) => Math.min(100, prev + 2.5));
      }, 50);
    } else if (dcvPosition === 'retract') {
      interval = setInterval(() => {
        setPistonPositionPct((prev) => Math.max(0, prev - 3.5));
      }, 50);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [dcvPosition]);

  // -------------------------------------------------------------
  // STATION 4: CNC Toolpath & G-Code Workspace State
  // -------------------------------------------------------------
  const [selectedGCodePreset, setSelectedGCodePreset] = useState<GCodeProgramPreset>(GCODE_PROGRAM_PRESETS[0]);
  const [selectedTool, setSelectedTool] = useState<CncToolPreset>(CNC_TOOL_CATALOG[0]);
  const [cuttingSpeedVc, setCuttingSpeedVc] = useState<number>(selectedTool.recommendedVc);
  const [feedPerToothFz, setFeedPerToothFz] = useState<number>(selectedTool.feedPerToothFz);
  const [depthOfCutAp, setDepthOfCutAp] = useState<number>(2.0); // mm
  const [cncSimRunning, setCncSimRunning] = useState<boolean>(false);
  const [activeGCodeLine, setActiveGCodeLine] = useState<number>(0);

  // CNC calculations
  const spindleRpm = useMemo(() => {
    // N = (1000 * Vc) / (pi * D)
    const rpm = (1000 * cuttingSpeedVc) / (Math.PI * selectedTool.diameterMm);
    return Math.min(selectedTool.maxRpm, Math.round(rpm));
  }, [cuttingSpeedVc, selectedTool]);

  const feedRateF = useMemo(() => {
    // F = N * fz * z
    return Math.round(spindleRpm * feedPerToothFz * selectedTool.fluteCount);
  }, [spindleRpm, feedPerToothFz, selectedTool]);

  const mrrCm3Min = useMemo(() => {
    // MRR = ap * ae * F / 1000
    const ae = selectedTool.diameterMm * 0.75;
    return parseFloat(((depthOfCutAp * ae * feedRateF) / 1000).toFixed(1));
  }, [depthOfCutAp, selectedTool, feedRateF]);

  // CNC Simulation ticker
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (cncSimRunning) {
      interval = setInterval(() => {
        setActiveGCodeLine((prev) => {
          if (prev >= selectedGCodePreset.gcodeLines.length - 1) {
            setCncSimRunning(false);
            return 0;
          }
          return prev + 1;
        });
      }, 350);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [cncSimRunning, selectedGCodePreset]);

  // -------------------------------------------------------------
  // STATION 5: Quality Engineering & Statistical Process Control (SPC)
  // -------------------------------------------------------------
  const [selectedSpcDataset, setSelectedSpcDataset] = useState<QualityDatasetPreset>(QUALITY_SPC_DATASETS[0]);
  const [meanShiftDelta, setMeanShiftDelta] = useState<number>(0);

  // SPC Computations
  const spcMetrics = useMemo(() => {
    const k = selectedSpcDataset.subgroups.length;
    let sumMeans = 0;
    let sumRanges = 0;

    selectedSpcDataset.subgroups.forEach((sg) => {
      sumMeans += sg.mean + meanShiftDelta;
      sumRanges += sg.range;
    });

    const xDoubleBar = sumMeans / k;
    const rBar = sumRanges / k;

    // Control limits for n = 5
    const uclX = xDoubleBar + SHEWHART_CONSTANTS_N5.A2 * rBar;
    const lclX = xDoubleBar - SHEWHART_CONSTANTS_N5.A2 * rBar;
    const uclR = SHEWHART_CONSTANTS_N5.D4 * rBar;
    const lclR = SHEWHART_CONSTANTS_N5.D3 * rBar;

    // Sigma estimate
    const sigmaHat = rBar / SHEWHART_CONSTANTS_N5.d2;

    // Process Capability
    const usl = selectedSpcDataset.upperSpecLimitUSL;
    const lsl = selectedSpcDataset.lowerSpecLimitLSL;
    const cp = (usl - lsl) / (6 * sigmaHat);
    const cpkUpper = (usl - xDoubleBar) / (3 * sigmaHat);
    const cpkLower = (xDoubleBar - lsl) / (3 * sigmaHat);
    const cpk = Math.min(cpkUpper, cpkLower);

    // Sigma level approx
    const sigmaLevel = cpk * 3;

    return {
      xDoubleBar: parseFloat(xDoubleBar.toFixed(4)),
      rBar: parseFloat(rBar.toFixed(4)),
      uclX: parseFloat(uclX.toFixed(4)),
      lclX: parseFloat(lclX.toFixed(4)),
      uclR: parseFloat(uclR.toFixed(4)),
      lclR: parseFloat(lclR.toFixed(4)),
      sigmaHat: parseFloat(sigmaHat.toFixed(4)),
      cp: parseFloat(cp.toFixed(2)),
      cpk: parseFloat(cpk.toFixed(2)),
      sigmaLevel: parseFloat(sigmaLevel.toFixed(1)),
    };
  }, [selectedSpcDataset, meanShiftDelta]);

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
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Wrench className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                {isArabic
                  ? 'مختبر التكنولوجيا الصناعية والأنظمة الهندسية التطبيقية'
                  : 'Industrial Technology & Applied Engineering Studio'}
              </h2>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                {isArabic ? 'معتمد رسمياً' : 'MoE Certified'}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isArabic
                ? 'اختبارات المواد والمعادن، منطق السلم PLC، الهيدروليك والنيوماتيك، مسارات تشغيل CNC، والتحكم الإحصائي للجودة'
                : 'Materials Metallurgy, PLC Ladder Logic, Industrial Fluid Power, CNC Toolpaths & Quality SPC'}
            </p>
          </div>
        </div>

        {/* Global Controls: Fullscreen Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className={`p-2 rounded-lg border transition-colors ${
              isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isFullscreen ? (isArabic ? 'تصغير الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Station Navigation Tabs */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`flex border-b overflow-x-auto scrollbar-none px-4 ${
          isLight ? 'bg-slate-100/70 border-slate-200' : 'bg-slate-900/50 border-slate-800'
        }`}
      >
        {[
          {
            id: 'materials_testing' as IndustrialStation,
            labelEn: '1. Materials Testing & Metallurgy',
            labelAr: '١. اختبارات المواد والميتالورجيا',
            icon: Activity,
          },
          {
            id: 'plc_automation' as IndustrialStation,
            labelEn: '2. PLC Automation & Ladder Logic',
            labelAr: '٢. برمجة الـ PLC ومخطط السلم',
            icon: Cpu,
          },
          {
            id: 'fluid_power' as IndustrialStation,
            labelEn: '3. Hydraulics & Pneumatics',
            labelAr: '٣. القدرة المائعية والهيدروليك',
            icon: Gauge,
          },
          {
            id: 'cnc_machining' as IndustrialStation,
            labelEn: '4. CNC Toolpaths & G-Code',
            labelAr: '٤. ماكينات CNC وأكواد G-Code',
            icon: FileCode,
          },
          {
            id: 'quality_spc' as IndustrialStation,
            labelEn: '5. Quality Engineering & SPC',
            labelAr: '٥. هندسة الجودة والتحكم الإحصائي',
            icon: BarChart3,
          },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeStation === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveStation(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${
                isActive
                  ? 'border-amber-500 text-amber-500 bg-amber-500/5'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STATION 1: Materials Testing & Metallurgy */}
      {/* ------------------------------------------------------------- */}
      {activeStation === 'materials_testing' && (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-amber-500">
                <Sliders className="w-4 h-4" />
                {isArabic ? 'اختيار العينة والمعاملات الميكانيكية' : 'Material & Tensile Parameters'}
              </h3>

              {/* Material Dropdown */}
              <div className="space-y-2">
                <label className="text-xs text-slate-400">
                  {isArabic ? 'سبيكة الاختبار القياسية (ASTM)' : 'Standard Test Alloy'}
                </label>
                <select
                  value={selectedMaterial.id}
                  onChange={(e) => {
                    const m = ENGINEERING_MATERIALS.find((mat) => mat.id === e.target.value);
                    if (m) setSelectedMaterial(m);
                  }}
                  className={`w-full text-xs p-2.5 rounded-lg border font-mono ${
                    isLight ? 'bg-slate-50 border-slate-300 text-slate-800' : 'bg-slate-800 border-slate-700 text-slate-200'
                  }`}
                >
                  {ENGINEERING_MATERIALS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {isArabic ? m.nameAr : m.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Applied Tensile Force Slider */}
              <div className="mt-4 space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">{isArabic ? 'قوة الشد المطبقة (F)' : 'Applied Tensile Force (F)'}</span>
                  <span className="font-bold text-amber-500 tabular-mono">{appliedForceKn} kN</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="1"
                  value={appliedForceKn}
                  onChange={(e) => setAppliedForceKn(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Specimen Dimensions */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-400">{isArabic ? 'قطر العينة d₀ (مم)' : 'Diameter d₀ (mm)'}</label>
                  <input
                    type="number"
                    value={specimenDiameterMm}
                    onChange={(e) => setSpecimenDiameterMm(Math.max(5, parseFloat(e.target.value) || 12.5))}
                    className={`w-full text-xs p-2 rounded-lg border font-mono tabular-mono ${
                      isLight ? 'bg-slate-50 border-slate-300' : 'bg-slate-800 border-slate-700'
                    }`}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] text-slate-400">{isArabic ? 'طول القياس L₀ (مم)' : 'Gauge L₀ (mm)'}</label>
                  <input
                    type="number"
                    value={gaugeLengthMm}
                    onChange={(e) => setGaugeLengthMm(Math.max(25, parseFloat(e.target.value) || 50))}
                    className={`w-full text-xs p-2 rounded-lg border font-mono tabular-mono ${
                      isLight ? 'bg-slate-50 border-slate-300' : 'bg-slate-800 border-slate-700'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Heat Treatment Selector */}
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-orange-500">
                <Flame className="w-4 h-4" />
                {isArabic ? 'المعاملات الحرارية للصلب' : 'Steel Heat Treatment'}
              </h3>
              <div className="space-y-2">
                {HEAT_TREATMENT_PROCESSES.map((ht) => (
                  <button
                    key={ht.id}
                    onClick={() => setSelectedHeatTreatment(ht)}
                    className={`w-full text-left rtl:text-right p-2.5 rounded-lg text-xs transition-all border ${
                      selectedHeatTreatment.id === ht.id
                        ? 'border-orange-500 bg-orange-500/10 text-orange-400 font-bold'
                        : isLight
                        ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                        : 'border-slate-800 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <div>{isArabic ? ht.nameAr : ht.nameEn}</div>
                    <div className="text-[10px] font-mono text-slate-500 mt-0.5">{ht.tempRangeC}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column: Tensile Test Rig Visualizer */}
          <div className={`p-4 rounded-xl border flex flex-col items-center justify-between ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
            <div className="w-full flex items-center justify-between border-b pb-2 mb-4 border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {isArabic ? 'ماكينة اختبار الشد الهيدروليكية (ASTM E8)' : 'Hydraulic Tensile Test Frame'}
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${materialRegime.color} bg-slate-800 border border-slate-700`}>
                {isArabic ? materialRegime.labelAr : materialRegime.labelEn}
              </span>
            </div>

            {/* Specimen SVG Simulation */}
            <div className="w-full h-64 flex items-center justify-center relative">
              <svg viewBox="0 0 200 240" className="w-full h-full max-h-60">
                {/* Upper Crosshead Grippers */}
                <rect x="50" y="10" width="100" height="25" fill="#475569" rx="3" stroke="#94A3B8" strokeWidth="1.5" />
                <rect x="75" y="35" width="50" height="15" fill="#334155" />
                <text x="100" y="27" textAnchor="middle" fill="#CBD5E1" fontSize="9" fontWeight="bold">HYDRAULIC GRIP</text>

                {/* Tensile Specimen Dogbone */}
                {/* Upper shoulder */}
                <path d="M 75 50 L 125 50 L 115 80 L 85 80 Z" fill={selectedMaterial.color} opacity="0.85" />
                
                {/* Gauge Section with necking calculation */}
                {materialRegime.regime === 'fractured' ? (
                  <>
                    <path d="M 85 80 L 115 80 L 105 110 L 95 110 Z" fill={selectedMaterial.color} opacity="0.85" />
                    <path d="M 93 125 L 107 125 L 115 155 L 85 155 Z" fill={selectedMaterial.color} opacity="0.85" />
                    <line x1="88" y1="117" x2="112" y2="117" stroke="#EF4444" strokeWidth="2" strokeDasharray="3,3" />
                  </>
                ) : (
                  <path
                    d={`M 85 80 L 115 80 Q ${100 + (materialRegime.regime === 'necking' ? 8 : 12)} 117.5 115 155 L 85 155 Q ${100 - (materialRegime.regime === 'necking' ? 8 : 12)} 117.5 85 80 Z`}
                    fill={selectedMaterial.color}
                    opacity="0.9"
                  />
                )}

                {/* Lower shoulder */}
                <path d="M 85 155 L 115 155 L 125 185 L 75 185 Z" fill={selectedMaterial.color} opacity="0.85" />

                {/* Lower Fixed Crosshead */}
                <rect x="75" y="185" width="50" height="15" fill="#334155" />
                <rect x="50" y="200" width="100" height="25" fill="#475569" rx="3" stroke="#94A3B8" strokeWidth="1.5" />
                <text x="100" y="217" textAnchor="middle" fill="#CBD5E1" fontSize="9" fontWeight="bold">FIXED BASE</text>

                {/* Dynamic Tension Arrows */}
                <g stroke="#F59E0B" strokeWidth="2" fill="#F59E0B">
                  <line x1="100" y1="5" x2="100" y2="0" />
                  <polygon points="96,2 104,2 100,-4" />
                </g>
              </svg>
            </div>

            {/* Specimen Live Telemetry */}
            <div className="w-full grid grid-cols-3 gap-2 text-center text-xs font-mono pt-3 border-t border-slate-800">
              <div className="p-2 rounded bg-slate-800/60">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'الإجهاد (σ)' : 'Stress (σ)'}</span>
                <span className="font-bold text-amber-400 tabular-mono text-sm">{engineeringStressMpa.toFixed(1)} MPa</span>
              </div>
              <div className="p-2 rounded bg-slate-800/60">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'الانفعال (ε)' : 'Strain (ε)'}</span>
                <span className="font-bold text-amber-400 tabular-mono text-sm">{(strainEstimate * 100).toFixed(2)} %</span>
              </div>
              <div className="p-2 rounded bg-slate-800/60">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'الطول (L)' : 'Length (L)'}</span>
                <span className="font-bold text-emerald-400 tabular-mono text-sm">{elongatedLengthMm.toFixed(2)} mm</span>
              </div>
            </div>
          </div>

          {/* Right Column: Material Properties & Microstructure Card */}
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-cyan-500">
                <Activity className="w-4 h-4" />
                {isArabic ? 'الخواص الميكانيكية المرجعية' : 'Certified Mechanical Datasheet'}
              </h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">{isArabic ? 'معامل المرونة (E)' : 'Young\'s Modulus (E)'}</span>
                  <span className="font-bold text-slate-200 tabular-mono">{selectedMaterial.elasticModulusE} GPa</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">{isArabic ? 'إجهاد الخضوع (σ_y)' : 'Yield Strength (σ_y)'}</span>
                  <span className="font-bold text-slate-200 tabular-mono">
                    {selectedMaterial.yieldStrength > 0 ? `${selectedMaterial.yieldStrength} MPa` : (isArabic ? 'قصفي (بدون خضوع)' : 'Brittle (No yield)')}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">{isArabic ? 'مقاومة الشد القصوى (UTS)' : 'Ultimate Tensile (UTS)'}</span>
                  <span className="font-bold text-slate-200 tabular-mono">{selectedMaterial.tensileStrengthUTS} MPa</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">{isArabic ? 'استطالة الكسر (%ε_f)' : 'Elongation at Break'}</span>
                  <span className="font-bold text-slate-200 tabular-mono">{selectedMaterial.fractureStrainPct} %</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">{isArabic ? 'صلادة برينل (HB)' : 'Brinell Hardness (HB)'}</span>
                  <span className="font-bold text-slate-200 tabular-mono">{selectedMaterial.hardnessBrinell} HB</span>
                </div>
              </div>
            </div>

            {/* Heat Treatment Detail */}
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
                {isArabic ? selectedHeatTreatment.nameAr : selectedHeatTreatment.nameEn}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {isArabic ? selectedHeatTreatment.summaryAr : selectedHeatTreatment.summaryEn}
              </p>
              <div className="text-[11px] font-mono space-y-1 text-slate-300">
                <div><strong className="text-orange-400">{isArabic ? 'الطور المستهدف:' : 'Phase:'}</strong> {isArabic ? selectedHeatTreatment.targetMicrostructureAr : selectedHeatTreatment.targetMicrostructureEn}</div>
                <div><strong className="text-orange-400">{isArabic ? 'وسط التبريد:' : 'Cooling:'}</strong> {isArabic ? selectedHeatTreatment.coolingMediumAr : selectedHeatTreatment.coolingMediumEn}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STATION 2: PLC Automation & Ladder Logic Simulator */}
      {/* ------------------------------------------------------------- */}
      {activeStation === 'plc_automation' && (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-amber-500">
                <Cpu className="w-4 h-4" />
                {isArabic ? 'برامج التحكم المبرمج PLC' : 'PLC Program Presets'}
              </h3>
              <div className="space-y-2">
                {PLC_PROGRAM_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedPlcPreset(p);
                      setMotorLatched(false);
                      setStarDeltaState('IDLE');
                      setTimerSeconds(0);
                      setCounterCurrent(0);
                    }}
                    className={`w-full text-left rtl:text-right p-3 rounded-lg text-xs transition-all border ${
                      selectedPlcPreset.id === p.id
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold'
                        : isLight
                        ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                        : 'border-slate-800 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <div>{isArabic ? p.nameAr : p.nameEn}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{isArabic ? p.applicationAr : p.applicationEn}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Operator Control Pendant Pushbuttons */}
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold mb-3 text-emerald-500 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                {isArabic ? 'أزرار لوحة التشغيل (Field Inputs)' : 'Operator Pendant (Field Inputs)'}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onMouseDown={() => setStartBtnPressed(true)}
                  onMouseUp={() => setStartBtnPressed(false)}
                  onTouchStart={() => setStartBtnPressed(true)}
                  onTouchEnd={() => setStartBtnPressed(false)}
                  className="p-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex flex-col items-center gap-1 active:scale-95 transition-transform shadow-lg shadow-emerald-900/30"
                >
                  <Play className="w-4 h-4" />
                  <span>{isArabic ? 'زر بدء START (NO)' : 'START PB (NO)'}</span>
                  <span className="text-[10px] opacity-75 font-mono">%I0.1</span>
                </button>

                <button
                  onMouseDown={() => setStopBtnPressed(true)}
                  onMouseUp={() => setStopBtnPressed(false)}
                  onTouchStart={() => setStopBtnPressed(true)}
                  onTouchEnd={() => setStopBtnPressed(false)}
                  className="p-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex flex-col items-center gap-1 active:scale-95 transition-transform shadow-lg shadow-rose-900/30"
                >
                  <Pause className="w-4 h-4" />
                  <span>{isArabic ? 'زر إيقاف STOP (NC)' : 'STOP PB (NC)'}</span>
                  <span className="text-[10px] opacity-75 font-mono">%I0.0</span>
                </button>
              </div>

              {/* Auxiliary Toggles */}
              <div className="mt-3 space-y-2">
                <button
                  onClick={() => setOverloadTripped(!overloadTripped)}
                  className={`w-full p-2.5 rounded-lg border text-xs font-semibold flex items-center justify-between ${
                    overloadTripped
                      ? 'border-red-500 bg-red-500/20 text-red-400 animate-pulse'
                      : isLight
                      ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                      : 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <span>{isArabic ? 'محاكاة عطل الأوفرلود الحراري' : 'Trip Thermal Overload 95-96'}</span>
                  <span className="font-mono text-[10px]">{overloadTripped ? 'TRIPPED' : 'NORMAL'}</span>
                </button>

                {selectedPlcPreset.id === 'conveyor_counter' && (
                  <button
                    onClick={() => setCounterCurrent((c) => Math.min(10, c + 1))}
                    className="w-full p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-between"
                  >
                    <span>{isArabic ? 'مرور قطعة أمام الحساس الضوئي' : 'Pulse Photoelectric Sensor'}</span>
                    <span className="font-mono tabular-mono">{counterCurrent} / 10</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Center & Right Columns: Interactive Ladder Logic Diagram */}
          <div className={`lg:col-span-2 p-6 rounded-xl border flex flex-col justify-between ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
            <div>
              <div className="flex items-center justify-between border-b pb-3 mb-4 border-slate-800">
                <h3 className="text-sm font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {isArabic ? 'مخطط السلم التفاعلي (IEC 61131-3 Ladder Diagram)' : 'IEC 61131-3 Ladder Diagram Execution'}
                </h3>
                <span className="text-xs font-mono text-slate-400">Scan Cycle: 2.4 ms</span>
              </div>

              {/* Ladder Rungs Canvas */}
              <div className="space-y-6 font-mono">
                {selectedPlcPreset.rungs.map((rung) => {
                  const isPowerFlowing =
                    selectedPlcPreset.id === 'dol_motor_starter'
                      ? rung.rungIndex === 0
                        ? (startBtnPressed || motorLatched) && !stopBtnPressed && !overloadTripped
                        : overloadTripped
                      : selectedPlcPreset.id === 'star_delta_transition'
                      ? rung.rungIndex === 0
                        ? motorLatched && !stopBtnPressed
                        : rung.rungIndex === 1
                        ? motorLatched && starDeltaState === 'STAR'
                        : motorLatched && starDeltaState === 'DELTA'
                      : rung.rungIndex === 0
                      ? true
                      : counterCurrent >= 10;

                  return (
                    <div
                      key={rung.rungIndex}
                      className={`p-4 rounded-xl border transition-colors ${
                        isPowerFlowing
                          ? 'border-emerald-500/50 bg-emerald-500/5'
                          : isLight
                          ? 'border-slate-200 bg-slate-50'
                          : 'border-slate-800 bg-slate-950/40'
                      }`}
                    >
                      <div className="flex justify-between items-center text-[11px] text-slate-400 mb-2 border-b border-slate-800/40 pb-1">
                        <span className="font-bold text-amber-400">RUNG {rung.rungIndex}: {isArabic ? rung.titleAr : rung.titleEn}</span>
                        <span>{rung.output.address}</span>
                      </div>

                      {/* Rung Graphic Circuit */}
                      <div className="flex items-center justify-between gap-2 overflow-x-auto py-3">
                        {/* Power Rail L+ */}
                        <div className={`w-2 h-16 rounded ${isPowerFlowing ? 'bg-emerald-400 shadow-[0_0_12px_#34D399]' : 'bg-slate-700'}`} />

                        {/* Series Contacts */}
                        <div className="flex items-center gap-4 flex-1 px-4">
                          {rung.inputs.map((inp) => {
                            const isClosed =
                              inp.id === 'in_stop' || inp.id === 'sd_stop'
                                ? !stopBtnPressed
                                : inp.id === 'in_ol'
                                ? !overloadTripped
                                : inp.id === 'in_start' || inp.id === 'sd_start'
                                ? startBtnPressed
                                : inp.id === 'in_ol_fault'
                                ? overloadTripped
                                : inp.id === 'sd_km1_run' || inp.id === 'sd_km1_on'
                                ? motorLatched
                                : inp.id === 'sd_t1_done'
                                ? timerSeconds < 5
                                : inp.id === 'sd_km3_lock'
                                ? starDeltaState !== 'DELTA'
                                : inp.id === 'sd_t1_contact'
                                ? timerSeconds >= 5
                                : inp.id === 'sd_km2_lock'
                                ? starDeltaState !== 'STAR'
                                : inp.id === 'cnt_done'
                                ? counterCurrent >= 10
                                : true;

                            return (
                              <div key={inp.id} className="flex flex-col items-center">
                                <span className="text-[10px] text-slate-400 font-bold mb-1">{inp.tag}</span>
                                <div
                                  className={`w-12 h-10 rounded border flex items-center justify-center text-xs font-bold transition-colors ${
                                    isClosed
                                      ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300'
                                      : 'border-slate-600 bg-slate-800 text-slate-400'
                                  }`}
                                >
                                  {inp.type === 'NO' ? (isClosed ? '|/|' : '| |') : (isClosed ? '| |' : '|/|')}
                                </div>
                                <span className="text-[9px] text-slate-500 mt-1">{inp.address}</span>
                              </div>
                            );
                          })}

                          {/* Parallel Latch Branch if exists */}
                          {rung.parallelBranch && (
                            <div className="border-l-2 border-slate-700 pl-3 flex flex-col items-center">
                              <span className="text-[9px] text-amber-400 mb-0.5">LATCH</span>
                              <div
                                className={`w-10 h-8 rounded border flex items-center justify-center text-[10px] font-bold ${
                                  motorLatched
                                    ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300'
                                    : 'border-slate-600 bg-slate-800 text-slate-400'
                                }`}
                              >
                                {motorLatched ? '|/|' : '| |'}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Output Coil */}
                        <div className="flex flex-col items-center pr-2">
                          <span className="text-[10px] text-slate-400 font-bold mb-1">{rung.output.tag}</span>
                          <div
                            className={`w-12 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                              isPowerFlowing
                                ? 'border-amber-400 bg-amber-500/20 text-amber-300 shadow-[0_0_12px_#F59E0B]'
                                : 'border-slate-600 bg-slate-800 text-slate-500'
                            }`}
                          >
                            ( )
                          </div>
                          <span className="text-[9px] text-slate-500 mt-1">{rung.output.address}</span>
                        </div>

                        {/* Power Rail Neutral N */}
                        <div className="w-2 h-16 rounded bg-slate-700" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actuator Status Display */}
            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full ${
                    motorLatched
                      ? 'bg-emerald-400 animate-pulse shadow-[0_0_10px_#34D399]'
                      : overloadTripped
                      ? 'bg-red-500 animate-ping'
                      : 'bg-slate-600'
                  }`}
                />
                <div>
                  <div className="text-xs font-bold text-slate-200">
                    {overloadTripped
                      ? (isArabic ? 'عطل حراري - المحرك متوقف' : 'THERMAL OVERLOAD FAULT - MOTOR HALTED')
                      : motorLatched
                      ? (isArabic ? 'المحرك قيد الدوران' : 'MOTOR ENERGIZED & RUNNING')
                      : (isArabic ? 'المحرك متوقف' : 'MOTOR STOPPED')}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    {selectedPlcPreset.id === 'star_delta_transition' && (
                      <span>Mode: {starDeltaState} | Timer: {timerSeconds.toFixed(1)}s / 5.0s</span>
                    )}
                    {selectedPlcPreset.id === 'conveyor_counter' && (
                      <span>Batch: {counterCurrent} / 10 parts | Diverter: {counterCurrent >= 10 ? 'ACTIVE' : 'IDLE'}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STATION 3: Fluid Power: Hydraulics & Pneumatics Engineering */}
      {/* ------------------------------------------------------------- */}
      {activeStation === 'fluid_power' && (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-amber-500">
                <Gauge className="w-4 h-4" />
                {isArabic ? 'المنظومة الهيدروليكية / النيوماتيكية' : 'Fluid Power Circuit Selection'}
              </h3>
              <div className="space-y-2">
                {FLUID_POWER_PRESETS.map((fp) => (
                  <button
                    key={fp.id}
                    onClick={() => handleFluidPresetChange(fp)}
                    className={`w-full text-left rtl:text-right p-3 rounded-lg text-xs transition-all border ${
                      selectedFluidPreset.id === fp.id
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold'
                        : isLight
                        ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                        : 'border-slate-800 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <div>{isArabic ? fp.nameAr : fp.nameEn}</div>
                    <div className="text-[10px] text-slate-500 mt-1 font-mono">
                      {fp.supplyPressureBar} bar | Bore: ø{fp.cylinderBoreMm}mm | Stroke: {fp.cylinderStrokeMm}mm
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* DCV Valve Lever */}
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold mb-3 text-cyan-500 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                {isArabic ? 'صمام التحكم التوجيهي (DCV Spool)' : 'Directional Control Valve Spool'}
              </h3>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                <button
                  onClick={() => setDcvPosition('extend')}
                  className={`p-3 rounded-lg border font-bold flex flex-col items-center gap-1 transition-all ${
                    dcvPosition === 'extend'
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-950/50'
                      : 'border-slate-700 hover:bg-slate-800 text-slate-400'
                  }`}
                >
                  <span>EXTEND</span>
                  <span className="text-[9px] text-slate-400">P → A, B → T</span>
                </button>
                <button
                  onClick={() => setDcvPosition('neutral')}
                  className={`p-3 rounded-lg border font-bold flex flex-col items-center gap-1 transition-all ${
                    dcvPosition === 'neutral'
                      ? 'border-amber-500 bg-amber-500/20 text-amber-400'
                      : 'border-slate-700 hover:bg-slate-800 text-slate-400'
                  }`}
                >
                  <span>HOLD</span>
                  <span className="text-[9px] text-slate-400">Center</span>
                </button>
                <button
                  onClick={() => setDcvPosition('retract')}
                  className={`p-3 rounded-lg border font-bold flex flex-col items-center gap-1 transition-all ${
                    dcvPosition === 'retract'
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400 shadow-lg shadow-blue-950/50'
                      : 'border-slate-700 hover:bg-slate-800 text-slate-400'
                  }`}
                >
                  <span>RETRACT</span>
                  <span className="text-[9px] text-slate-400">P → B, A → T</span>
                </button>
              </div>

              {/* Throttle slider */}
              <div className="mt-4 space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">{isArabic ? 'خانق التحكم في السرعة' : 'Flow Throttle Valve'}</span>
                  <span className="font-bold text-amber-500 tabular-mono">{flowThrottlePct} %</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={flowThrottlePct}
                  onChange={(e) => setFlowThrottlePct(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Center & Right Column: Hydraulic Circuit & Cylinder Animation */}
          <div className={`lg:col-span-2 p-6 rounded-xl border flex flex-col justify-between ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
            <div className="w-full flex items-center justify-between border-b pb-3 mb-4 border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {isArabic ? 'محاكاة حركة الأسطوانة الهيدروليكية مزدوجة الفعل' : 'Double-Acting Cylinder Stroke Simulation'}
              </span>
              <span className="text-xs font-mono text-amber-400 tabular-mono">
                Position: {pistonPositionPct.toFixed(1)}% ({((pistonPositionPct / 100) * selectedFluidPreset.cylinderStrokeMm).toFixed(0)} mm)
              </span>
            </div>

            {/* Live SVG Cylinder Visualizer */}
            <div className="w-full h-48 flex items-center justify-center">
              <svg viewBox="0 0 450 140" className="w-full h-full">
                {/* Cylinder Barrel */}
                <rect x="50" y="30" width="220" height="80" rx="4" fill="#1E293B" stroke="#64748B" strokeWidth="3" />

                {/* Ports A and B */}
                <rect x="70" y="15" width="16" height="15" fill={dcvPosition === 'extend' ? '#EF4444' : '#3B82F6'} />
                <text x="78" y="10" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="bold">A</text>

                <rect x="234" y="15" width="16" height="15" fill={dcvPosition === 'retract' ? '#EF4444' : '#3B82F6'} />
                <text x="242" y="10" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="bold">B</text>

                {/* Piston & Rod (animated by pistonPositionPct) */}
                {/* Piston Head */}
                <rect
                  x={60 + (pistonPositionPct / 100) * 150}
                  y="34"
                  width="22"
                  height="72"
                  fill="#F59E0B"
                  stroke="#D97706"
                  strokeWidth="2"
                  rx="2"
                />

                {/* Piston Rod */}
                <rect
                  x={82 + (pistonPositionPct / 100) * 150}
                  y="55"
                  width="200"
                  height="30"
                  fill="#94A3B8"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                />

                {/* Front Rod Bushing */}
                <rect x="270" y="45" width="15" height="50" fill="#475569" />

                {/* Tooling Load at rod tip */}
                <rect
                  x={275 + (pistonPositionPct / 100) * 150}
                  y="40"
                  width="25"
                  height="60"
                  fill="#E2E8F0"
                  stroke="#64748B"
                  strokeWidth="2"
                  rx="4"
                />
              </svg>
            </div>

            {/* Pascal Fluid Telemetry Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs font-mono">
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'قوة الدفع F_ext' : 'Extend Force (F_ext)'}</span>
                <span className="font-bold text-amber-400 text-sm tabular-mono">{extendForceKn} kN</span>
              </div>
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'قوة السحب F_ret' : 'Retract Force (F_ret)'}</span>
                <span className="font-bold text-blue-400 text-sm tabular-mono">{retractForceKn} kN</span>
              </div>
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'سرعة المشغل' : 'Piston Speed (v)'}</span>
                <span className="font-bold text-emerald-400 text-sm tabular-mono">{extendVelocityMmS} mm/s</span>
              </div>
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'قدرة المضخة الحركية' : 'Hydraulic Power'}</span>
                <span className="font-bold text-purple-400 text-sm tabular-mono">{hydraulicPowerKw} kW</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STATION 4: CNC Toolpath & G-Code Workspace */}
      {/* ------------------------------------------------------------- */}
      {activeStation === 'cnc_machining' && (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-amber-500">
                <FileCode className="w-4 h-4" />
                {isArabic ? 'برامج التشغيل وأكواد G-Code' : 'CNC Machining Program'}
              </h3>
              <div className="space-y-2">
                {GCODE_PROGRAM_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedGCodePreset(p);
                      const t = CNC_TOOL_CATALOG.find((tool) => tool.id === p.toolId);
                      if (t) setSelectedTool(t);
                      setCncSimRunning(false);
                      setActiveGCodeLine(0);
                    }}
                    className={`w-full text-left rtl:text-right p-3 rounded-lg text-xs transition-all border ${
                      selectedGCodePreset.id === p.id
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold'
                        : isLight
                        ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                        : 'border-slate-800 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <div>{isArabic ? p.titleAr : p.titleEn}</div>
                    <div className="text-[10px] text-slate-500 mt-1 font-mono">
                      Billet: {p.workpieceDims.x}×{p.workpieceDims.y}×{p.workpieceDims.z} mm
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Cutting Parameters */}
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold mb-3 text-emerald-500 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                {isArabic ? 'معادلات وسرعات القطع' : 'Cutting Speed Parameters'}
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>{isArabic ? 'سرعة القطع السطحية (Vc)' : 'Surface Speed (Vc)'}</span>
                    <span className="text-amber-400 font-bold tabular-mono">{cuttingSpeedVc} m/min</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="250"
                    step="5"
                    value={cuttingSpeedVc}
                    onChange={(e) => setCuttingSpeedVc(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>{isArabic ? 'التغذية لكل سن (fz)' : 'Feed per Tooth (fz)'}</span>
                    <span className="text-amber-400 font-bold tabular-mono">{feedPerToothFz.toFixed(2)} mm/th</span>
                  </div>
                  <input
                    type="range"
                    min="0.02"
                    max="0.25"
                    step="0.01"
                    value={feedPerToothFz}
                    onChange={(e) => setFeedPerToothFz(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>{isArabic ? 'عمق القطع المحوري (ap)' : 'Axial Depth of Cut (ap)'}</span>
                    <span className="text-amber-400 font-bold tabular-mono">{depthOfCutAp.toFixed(1)} mm</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.5"
                    value={depthOfCutAp}
                    onChange={(e) => setDepthOfCutAp(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Run Controls */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setCncSimRunning(!cncSimRunning)}
                  className={`flex-1 p-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 ${
                    cncSimRunning ? 'bg-amber-600 text-white' : 'bg-emerald-600 text-white hover:bg-emerald-500'
                  }`}
                >
                  {cncSimRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{cncSimRunning ? (isArabic ? 'إيقاف مؤقت' : 'Pause') : (isArabic ? 'تشغيل المحاكاة' : 'Cycle Start')}</span>
                </button>
                <button
                  onClick={() => {
                    setCncSimRunning(false);
                    setActiveGCodeLine(0);
                  }}
                  className="p-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Column: G-Code Scroll View */}
          <div className={`p-4 rounded-xl border flex flex-col font-mono text-xs ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
            <div className="border-b pb-2 mb-2 border-slate-800 font-bold text-slate-400 flex justify-between">
              <span>NC PROGRAM CODE</span>
              <span className="text-amber-400">LINE {activeGCodeLine + 1} / {selectedGCodePreset.gcodeLines.length}</span>
            </div>
            <div className="flex-1 overflow-y-auto max-h-80 space-y-1 scrollbar-thin">
              {selectedGCodePreset.gcodeLines.map((line, idx) => (
                <div
                  key={idx}
                  className={`px-2 py-1 rounded text-[11px] ${
                    idx === activeGCodeLine
                      ? 'bg-amber-500/20 text-amber-300 border-l-2 border-amber-500 font-bold'
                      : 'text-slate-400 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="text-slate-600 w-8 inline-block select-none">{idx + 1}</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 2D Toolpath Vector Simulation & Telemetry */}
          <div className={`p-4 rounded-xl border flex flex-col justify-between ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
            <div>
              <div className="border-b pb-2 mb-3 border-slate-800 flex justify-between text-xs font-mono">
                <span className="font-bold text-slate-300">{isArabic ? 'مسار أداة القطع 2D' : '2D Toolpath Simulation'}</span>
                <span className="text-cyan-400">G17 (XY Plane)</span>
              </div>

              {/* 2D Toolpath SVG */}
              <div className="w-full h-48 flex items-center justify-center bg-slate-950 rounded-lg border border-slate-800">
                <svg viewBox="0 0 200 160" className="w-full h-full p-2">
                  {/* Workpiece boundary */}
                  <rect x="30" y="20" width="140" height="120" fill="#1E293B" stroke="#475569" strokeWidth="1.5" strokeDasharray="3,3" />

                  {/* Cut Profile (Rectangular Pocket with fillets) */}
                  <rect x="50" y="40" width="100" height="80" rx="15" fill="none" stroke="#06B6D4" strokeWidth="2.5" />

                  {/* Rapid approach */}
                  <line x1="30" y1="20" x2="50" y2="40" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />

                  {/* Cutter circle moving with line */}
                  <circle
                    cx={50 + (activeGCodeLine / selectedGCodePreset.gcodeLines.length) * 100}
                    cy={40 + (activeGCodeLine % 2 === 0 ? 0 : 40)}
                    r="8"
                    fill="#F59E0B"
                    opacity="0.8"
                    stroke="#FBBF24"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

            {/* Telemetry Numbers */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800 text-center font-mono text-xs">
              <div className="p-2 rounded bg-slate-800/50">
                <span className="text-[10px] text-slate-400 block">RPM (N)</span>
                <span className="font-bold text-amber-400 tabular-mono">{spindleRpm}</span>
              </div>
              <div className="p-2 rounded bg-slate-800/50">
                <span className="text-[10px] text-slate-400 block">Feed (F)</span>
                <span className="font-bold text-blue-400 tabular-mono">{feedRateF} mm/min</span>
              </div>
              <div className="p-2 rounded bg-slate-800/50">
                <span className="text-[10px] text-slate-400 block">MRR</span>
                <span className="font-bold text-emerald-400 tabular-mono">{mrrCm3Min} cm³/min</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STATION 5: Quality Engineering & Statistical Process Control */}
      {/* ------------------------------------------------------------- */}
      {activeStation === 'quality_spc' && (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-amber-500">
                <BarChart3 className="w-4 h-4" />
                {isArabic ? 'عينات الجودة وخرائط شيوارت' : 'Quality Inspection Sample'}
              </h3>
              <div className="space-y-2">
                {QUALITY_SPC_DATASETS.map((ds) => (
                  <button
                    key={ds.id}
                    onClick={() => {
                      setSelectedSpcDataset(ds);
                      setMeanShiftDelta(0);
                    }}
                    className={`w-full text-left rtl:text-right p-3 rounded-lg text-xs transition-all border ${
                      selectedSpcDataset.id === ds.id
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold'
                        : isLight
                        ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                        : 'border-slate-800 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <div>{isArabic ? ds.nameAr : ds.nameEn}</div>
                    <div className="text-[10px] text-slate-500 mt-1 font-mono">
                      Nominal: {ds.nominalValue} {ds.unit} (USL: {ds.upperSpecLimitUSL} / LSL: {ds.lowerSpecLimitLSL})
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mean Shift Perturbation Slider */}
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
              <h3 className="text-sm font-bold mb-3 text-cyan-500 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                {isArabic ? 'إزاحة متوسط العملية (Process Drift)' : 'Process Mean Shift (μ Drift)'}
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Shift (Δμ)</span>
                  <span className="font-bold text-amber-400 tabular-mono">{meanShiftDelta.toFixed(4)} mm</span>
                </div>
                <input
                  type="range"
                  min="-0.015"
                  max="0.015"
                  step="0.001"
                  value={meanShiftDelta}
                  onChange={(e) => setMeanShiftDelta(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Center & Right Columns: Shewhart X-Bar and R Charts */}
          <div className={`lg:col-span-2 p-6 rounded-xl border flex flex-col justify-between ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
            <div>
              <div className="flex items-center justify-between border-b pb-3 mb-4 border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isArabic ? 'خريطة مراقبة المتوسطات شيوارت (X̄ Control Chart)' : 'Shewhart X-Bar Control Chart (n=5)'}
                </span>
                <span className="text-xs font-mono text-amber-400">
                  UCL: {spcMetrics.uclX} | X̄̄: {spcMetrics.xDoubleBar} | LCL: {spcMetrics.lclX}
                </span>
              </div>

              {/* X-Bar SVG Chart */}
              <div className="w-full h-44 bg-slate-950 rounded-lg p-2 border border-slate-800">
                <svg viewBox="0 0 400 120" className="w-full h-full">
                  {/* UCL, Centerline, LCL */}
                  <line x1="20" y1="25" x2="380" y2="25" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4,4" />
                  <text x="385" y="28" fill="#EF4444" fontSize="8" fontWeight="bold">UCL</text>

                  <line x1="20" y1="60" x2="380" y2="60" stroke="#10B981" strokeWidth="1.5" />
                  <text x="385" y="63" fill="#10B981" fontSize="8" fontWeight="bold">X̄̄</text>

                  <line x1="20" y1="95" x2="380" y2="95" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4,4" />
                  <text x="385" y="98" fill="#EF4444" fontSize="8" fontWeight="bold">LCL</text>

                  {/* Subgroup Points & Connecting Polyline */}
                  {selectedSpcDataset.subgroups.map((sg, idx) => {
                    const cx = 30 + idx * 23;
                    const yOffset = (sg.mean + meanShiftDelta - spcMetrics.xDoubleBar) * 2000;
                    const cy = Math.max(10, Math.min(110, 60 - yOffset));
                    const isOOC = cy <= 25 || cy >= 95;

                    return (
                      <g key={sg.subgroupId}>
                        <circle cx={cx} cy={cy} r={isOOC ? 4 : 2.5} fill={isOOC ? '#EF4444' : '#F59E0B'} />
                        {idx > 0 && (
                          <line
                            x1={30 + (idx - 1) * 23}
                            y1={Math.max(10, Math.min(110, 60 - (selectedSpcDataset.subgroups[idx - 1].mean + meanShiftDelta - spcMetrics.xDoubleBar) * 2000))}
                            x2={cx}
                            y2={cy}
                            stroke="#F59E0B"
                            strokeWidth="1"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Capability Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs font-mono">
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'مؤشر مقدرة العملية (Cp)' : 'Process Potential (Cp)'}</span>
                <span className={`font-bold text-sm tabular-mono ${spcMetrics.cp >= 1.33 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {spcMetrics.cp}
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'مؤشر أداء العملية (Cpk)' : 'Process Index (Cpk)'}</span>
                <span className={`font-bold text-sm tabular-mono ${spcMetrics.cpk >= 1.33 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {spcMetrics.cpk}
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'الانحراف المعياري (σ̂)' : 'Sigma Estimate (σ̂)'}</span>
                <span className="font-bold text-cyan-400 text-sm tabular-mono">{spcMetrics.sigmaHat}</span>
              </div>
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">{isArabic ? 'مستوى ستة سيجما' : 'Sigma Quality Level'}</span>
                <span className="font-bold text-purple-400 text-sm tabular-mono">{spcMetrics.sigmaLevel} σ</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
