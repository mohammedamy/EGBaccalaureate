import React, { useState } from 'react';
import type { Language } from '../../../i18n/translations';
import { MathRenderer } from '../../MathRenderer';
import {
  Zap,
  Activity,
  Sparkles,
  Bookmark,
  CheckCircle2,
  Flame,
  Layers,
} from 'lucide-react';

export interface XRayTargetConfig {
  id: 'tungsten' | 'molybdenum' | 'copper';
  symbol: string;
  nameAr: string;
  nameEn: string;
  atomicNumberZ: number;
  kEdgeThresholdKv: number; // minimum voltage required to excite K-shell
  kAlphaWavelengthNm: number; // L -> K transition
  kBetaWavelengthNm: number;  // M -> K transition
  colorHex: string;
  metalColor3D: number;
  meltingPointC: number;
}

export const XRAY_TARGETS: Record<'tungsten' | 'molybdenum' | 'copper', XRayTargetConfig> = {
  tungsten: {
    id: 'tungsten',
    symbol: 'W',
    nameAr: 'تنجستين',
    nameEn: 'Tungsten',
    atomicNumberZ: 74,
    kEdgeThresholdKv: 69.5,
    kAlphaWavelengthNm: 0.0213,
    kBetaWavelengthNm: 0.0185,
    colorHex: '#94a3b8',
    metalColor3D: 0x94a3b8,
    meltingPointC: 3422,
  },
  molybdenum: {
    id: 'molybdenum',
    symbol: 'Mo',
    nameAr: 'موليبدنوم',
    nameEn: 'Molybdenum',
    atomicNumberZ: 42,
    kEdgeThresholdKv: 20.0,
    kAlphaWavelengthNm: 0.0710,
    kBetaWavelengthNm: 0.0632,
    colorHex: '#38bdf8',
    metalColor3D: 0x64748b,
    meltingPointC: 2623,
  },
  copper: {
    id: 'copper',
    symbol: 'Cu',
    nameAr: 'نحاس',
    nameEn: 'Copper',
    atomicNumberZ: 29,
    kEdgeThresholdKv: 8.98,
    kAlphaWavelengthNm: 0.1542,
    kBetaWavelengthNm: 0.1392,
    colorHex: '#f97316',
    metalColor3D: 0xd97706,
    meltingPointC: 1085,
  },
};

interface Props {
  voltageKv: number;
  onVoltageChange: (v: number) => void;
  filamentCurrentMa: number;
  onCurrentChange: (i: number) => void;
  targetElement: 'tungsten' | 'molybdenum' | 'copper';
  onTargetChange: (t: 'tungsten' | 'molybdenum' | 'copper') => void;
  showCharacteristicPeaks: boolean;
  onToggleCharacteristic: (show: boolean) => void;
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const CoolidgeXRaySpectrometer: React.FC<Props> = ({
  voltageKv,
  onVoltageChange,
  filamentCurrentMa,
  onCurrentChange,
  targetElement,
  onTargetChange,
  showCharacteristicPeaks,
  onToggleCharacteristic,
  lang,
  theme = 'dark',
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeSubTab, setActiveSubTab] = useState<'spectrometer' | 'exam_solver' | 'applications'>('spectrometer');

  // Comparison Reference Curve Snapshot
  const [referenceCurve, setReferenceCurve] = useState<{
    voltageKv: number;
    currentMa: number;
    target: 'tungsten' | 'molybdenum' | 'copper';
    lambdaMinNm: number;
  } | null>(null);

  // Selected Exam Problem for Step-by-Step Solver
  const [selectedExamProblem, setSelectedExamProblem] = useState<number>(1);

  // Physical calculations
  // Duane-Hunt: lambda_min = 1.23984 / V_kV (in nm)
  const lambdaMinNm = 1.23984193 / voltageKv;
  const nuMaxHz = (1.602176634e-19 * (voltageKv * 1000)) / 6.62607015e-34;
  const vMaxMps = Math.sqrt((2 * 1.602176634e-19 * (voltageKv * 1000)) / 9.1093837e-31);
  const inputPowerW = voltageKv * filamentCurrentMa; // V(kV) * I(mA) = Watts
  const heatPowerW = inputPowerW * 0.99;
  const xrayPowerW = inputPowerW * 0.01;

  const targetConfig = XRAY_TARGETS[targetElement];
  const hasCharacteristicSpikes = voltageKv >= targetConfig.kEdgeThresholdKv && showCharacteristicPeaks;

  // Handler to freeze/clear comparison reference
  const handleToggleReference = () => {
    if (referenceCurve) {
      setReferenceCurve(null);
    } else {
      setReferenceCurve({
        voltageKv,
        currentMa: filamentCurrentMa,
        target: targetElement,
        lambdaMinNm,
      });
    }
  };

  // Helper to generate SVG path for Bremsstrahlung continuous curve
  const generateSpectrumPoints = (
    vKv: number,
    iMa: number,
    svgWidth: number,
    svgHeight: number,
    maxLambdaNm = 0.22
  ) => {
    const lMin = 1.23984193 / vKv;
    const lPeak = lMin * 1.5;
    const points: Array<[number, number]> = [];

    // Scale factors
    const xScale = svgWidth / maxLambdaNm;
    // Intensity scales with current I and V^2
    const intensityScale = (iMa / 5.0) * Math.pow(vKv / 50.0, 1.8);
    const maxCurveHeight = svgHeight * 0.72;

    const steps = 140;
    for (let i = 0; i <= steps; i++) {
      const lambda = (i / steps) * maxLambdaNm;
      if (lambda < lMin) {
        points.push([lambda * xScale, svgHeight]);
      } else {
        // Kramers' Law approximation: I(lambda) ~ (1/lambda^2) * (1/lambda_min - 1/lambda)
        const diff = (1 / lMin) - (1 / lambda);
        const rawIntensity = Math.max(0, diff / Math.pow(lambda / lPeak, 1.7));
        const normalized = Math.min(1.0, rawIntensity * 0.22);
        const y = svgHeight - normalized * maxCurveHeight * intensityScale;
        points.push([lambda * xScale, Math.max(15, y)]);
      }
    }
    return points;
  };

  const svgWidth = 600;
  const svgHeight = 220;
  const currentPoints = generateSpectrumPoints(voltageKv, filamentCurrentMa, svgWidth, svgHeight);
  const currentPathD = currentPoints.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt[0]} ${pt[1]}` : `${acc} L ${pt[0]} ${pt[1]}`;
  }, '');

  const refPoints = referenceCurve
    ? generateSpectrumPoints(referenceCurve.voltageKv, referenceCurve.currentMa, svgWidth, svgHeight)
    : [];
  const refPathD = refPoints.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt[0]} ${pt[1]}` : `${acc} L ${pt[0]} ${pt[1]}`;
  }, '');

  // Characteristic Line Spike Positions in SVG Coordinates
  const maxLambdaGraph = 0.22;
  const kAlphaX = (targetConfig.kAlphaWavelengthNm / maxLambdaGraph) * svgWidth;
  const kBetaX = (targetConfig.kBetaWavelengthNm / maxLambdaGraph) * svgWidth;
  const spikeHeightScale = Math.min(1.0, (voltageKv - targetConfig.kEdgeThresholdKv) / 30.0) * (filamentCurrentMa / 5.0);

  return (
    <div className={`space-y-5 ${isContrast ? 'text-white' : ''}`}>
      {/* Sub-Tabs Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className={`flex items-center gap-1.5 p-1 rounded-xl border text-xs font-bold ${
          isLight ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-slate-950/70 border-slate-800'
        }`}>
          <button
            onClick={() => setActiveSubTab('spectrometer')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'spectrometer'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-purple-300" />
            <span>{isAr ? 'مطياف الأشعة السينية التفاعلي' : 'Dual-Spectrum Spectrometer'}</span>
          </button>
          <button
            onClick={() => setActiveSubTab('exam_solver')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'exam_solver'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span>{isAr ? 'محلل المسائل والامتحانات الوزارية' : 'Ministerial Exam Solvers'}</span>
          </button>
          <button
            onClick={() => setActiveSubTab('applications')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'applications'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>{isAr ? 'التطبيقات الطبية والصناعية' : 'Clinical & Industrial Uses'}</span>
          </button>
        </div>

        {/* Reference Curve Freeze Button */}
        <button
          onClick={handleToggleReference}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
            referenceCurve
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30 shadow-md'
              : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {referenceCurve
              ? (isAr ? 'إلغاء المنحنى المرجعي المتبوع' : 'Clear Reference Curve')
              : (isAr ? 'حفظ المنحنى كمرجع للمقارنة 📌' : 'Freeze Curve as Reference 📌')}
          </span>
        </button>
      </div>

      {/* =================================================================== */}
      {/* VIEW 1: DUAL-SPECTRUM LIVE SPECTROMETER                             */}
      {/* =================================================================== */}
      {activeSubTab === 'spectrometer' && (
        <div className="space-y-5">
          {/* Hardware Parameters Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Tube Voltage (kV) */}
            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-purple-400" />
                  <span>{isAr ? 'فرق الجهد بين المصعد والمهبط (V):' : 'Tube Voltage (V):'}</span>
                </span>
                <span className="text-purple-400 font-mono font-black text-sm">{voltageKv.toFixed(1)} kV</span>
              </div>
              <input
                type="range"
                min="20.0"
                max="100.0"
                step="1.0"
                value={voltageKv}
                onChange={(e) => onVoltageChange(parseFloat(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>20 kV</span>
                <span>{isAr ? 'يحدد λ_min حصراً' : 'Dictates λ_min solely'}</span>
                <span>100 kV</span>
              </div>
            </div>

            {/* 2. Filament Heating Current (mA) */}
            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? 'تيار تسخين الفتيلة (I):' : 'Filament Current (I):'}</span>
                </span>
                <span className="text-amber-400 font-mono font-black text-sm">{filamentCurrentMa.toFixed(1)} mA</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="10.0"
                step="0.5"
                value={filamentCurrentMa}
                onChange={(e) => onCurrentChange(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>1 mA</span>
                <span>{isAr ? 'يحدد عدد الإلكترونات والشدة' : 'Controls Electron Flux & Intensity'}</span>
                <span>10 mA</span>
              </div>
            </div>

            {/* 3. Target Anode Element Selection */}
            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isAr ? 'مادة الهدف (المصعد الأنود):' : 'Target Material (Anode):'}</span>
                </span>
                <span className="text-cyan-400 font-mono font-bold">
                  {targetConfig.symbol} (Z = {targetConfig.atomicNumberZ})
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {(['tungsten', 'molybdenum', 'copper'] as const).map((elem) => {
                  const cfg = XRAY_TARGETS[elem];
                  const isSel = targetElement === elem;
                  return (
                    <button
                      key={elem}
                      onClick={() => onTargetChange(elem)}
                      className={`p-1.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center ${
                        isSel
                          ? 'bg-purple-600/30 border-purple-400 text-white shadow-md shadow-purple-600/20'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                      }`}
                    >
                      <span className="font-mono font-black text-xs">{cfg.symbol}</span>
                      <span className="text-[10px] leading-tight">{isAr ? cfg.nameAr : cfg.nameEn}</span>
                      <span className="text-[9px] font-mono text-slate-500">Z={cfg.atomicNumberZ}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live Continuous & Characteristic Spectrum Plot (SVG Canvas) */}
          <div className="bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-purple-400" />
                  <span>
                    {isAr
                      ? `منحنى طيف الأشعة السينية (الفرملة المستمر + الخطي المميز لـ ${targetConfig.nameAr})`
                      : `X-Ray Spectrum Plot (Continuous Bremsstrahlung + ${targetConfig.nameEn} Peaks)`}
                  </span>
                </span>
              </div>

              {/* Toggle Characteristic Peaks */}
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-300">
                  <input
                    type="checkbox"
                    checked={showCharacteristicPeaks}
                    onChange={(e) => onToggleCharacteristic(e.target.checked)}
                    className="w-4 h-4 rounded-sm accent-purple-500 cursor-pointer"
                  />
                  <span>{isAr ? 'إظهار الطيف الخطي المميز' : 'Show Characteristic Peaks'}</span>
                </label>
              </div>
            </div>

            {/* SVG Graph Viewport */}
            <div className="relative w-full overflow-hidden bg-slate-900/90 rounded-xl border border-slate-800 p-2 sm:p-4 select-none">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight + 30}`} className="w-full h-auto max-h-[260px]">
                {/* Grid Lines */}
                {[0.25, 0.5, 0.75].map((frac, idx) => (
                  <line
                    key={idx}
                    x1="0"
                    y1={svgHeight * frac}
                    x2={svgWidth}
                    y2={svgHeight * frac}
                    stroke="#1e293b"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                  />
                ))}

                {/* Reference Curve (Dashed Gray) */}
                {referenceCurve && refPathD && (
                  <g>
                    <path
                      d={refPathD}
                      fill="none"
                      stroke="#64748b"
                      strokeWidth="2"
                      strokeDasharray="6,4"
                      opacity="0.8"
                    />
                    {/* Reference Cutoff marker */}
                    <line
                      x1={(referenceCurve.lambdaMinNm / maxLambdaGraph) * svgWidth}
                      y1="0"
                      x2={(referenceCurve.lambdaMinNm / maxLambdaGraph) * svgWidth}
                      y2={svgHeight}
                      stroke="#64748b"
                      strokeWidth="1.5"
                      strokeDasharray="2,2"
                    />
                  </g>
                )}

                {/* Active Continuous Bremsstrahlung Curve (Filled gradient + Stroke) */}
                <defs>
                  <linearGradient id="bremsstrahlungGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                <path
                  d={`${currentPathD} L ${svgWidth} ${svgHeight} Z`}
                  fill="url(#bremsstrahlungGrad)"
                />
                <path
                  d={currentPathD}
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="2.5"
                />

                {/* Cutoff λ_min Vertical Marker Line */}
                <line
                  x1={(lambdaMinNm / maxLambdaGraph) * svgWidth}
                  y1="20"
                  x2={(lambdaMinNm / maxLambdaGraph) * svgWidth}
                  y2={svgHeight}
                  stroke="#ec4899"
                  strokeWidth="2"
                  strokeDasharray="3,3"
                />
                <circle
                  cx={(lambdaMinNm / maxLambdaGraph) * svgWidth}
                  cy={svgHeight}
                  r="4"
                  fill="#ec4899"
                />
                <text
                  x={(lambdaMinNm / maxLambdaGraph) * svgWidth + 4}
                  y="35"
                  fill="#ec4899"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  λ_min = {lambdaMinNm.toFixed(3)} nm
                </text>

                {/* Characteristic Sharp Spikes (Kα and Kβ) */}
                {hasCharacteristicSpikes && (
                  <g>
                    {/* K-beta Spike (Higher energy, shorter wavelength) */}
                    <line
                      x1={kBetaX}
                      y1={svgHeight}
                      x2={kBetaX}
                      y2={Math.max(25, svgHeight - 160 * spikeHeightScale)}
                      stroke="#38bdf8"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <polygon
                      points={`${kBetaX - 3.5},${Math.max(25, svgHeight - 160 * spikeHeightScale) + 6} ${kBetaX + 3.5},${Math.max(25, svgHeight - 160 * spikeHeightScale) + 6} ${kBetaX},${Math.max(25, svgHeight - 160 * spikeHeightScale)}`}
                      fill="#38bdf8"
                    />
                    <text
                      x={kBetaX}
                      y={Math.max(20, svgHeight - 160 * spikeHeightScale) - 4}
                      fill="#38bdf8"
                      fontSize="9.5"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      K_β
                    </text>

                    {/* K-alpha Spike (Lower energy, longer wavelength, higher probability/intensity) */}
                    <line
                      x1={kAlphaX}
                      y1={svgHeight}
                      x2={kAlphaX}
                      y2={Math.max(15, svgHeight - 195 * spikeHeightScale)}
                      stroke="#f59e0b"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <polygon
                      points={`${kAlphaX - 4},${Math.max(15, svgHeight - 195 * spikeHeightScale) + 8} ${kAlphaX + 4},${Math.max(15, svgHeight - 195 * spikeHeightScale) + 8} ${kAlphaX},${Math.max(15, svgHeight - 195 * spikeHeightScale)}`}
                      fill="#f59e0b"
                    />
                    <text
                      x={kAlphaX}
                      y={Math.max(12, svgHeight - 195 * spikeHeightScale) - 4}
                      fill="#f59e0b"
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      K_α ({targetConfig.kAlphaWavelengthNm.toFixed(3)} nm)
                    </text>
                  </g>
                )}

                {/* Sub-Threshold Warning (if V < VK) */}
                {!hasCharacteristicSpikes && showCharacteristicPeaks && (
                  <text
                    x={svgWidth * 0.65}
                    y={svgHeight * 0.35}
                    fill="#f43f5e"
                    fontSize="11"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {isAr
                      ? `⚠️ الطيف الخطي غائب (V = ${voltageKv} kV < V_K = ${targetConfig.kEdgeThresholdKv} kV)`
                      : `⚠️ Characteristic Peaks Absent (V < ${targetConfig.kEdgeThresholdKv} kV)`}
                  </text>
                )}

                {/* X-Axis Baseline & Scale Ticks */}
                <line x1="0" y1={svgHeight} x2={svgWidth} y2={svgHeight} stroke="#475569" strokeWidth="1.5" />
                {[0.0, 0.05, 0.10, 0.15, 0.20].map((val) => {
                  const tx = (val / maxLambdaGraph) * svgWidth;
                  return (
                    <g key={val}>
                      <line x1={tx} y1={svgHeight} x2={tx} y2={svgHeight + 5} stroke="#64748b" strokeWidth="1.5" />
                      <text x={tx} y={svgHeight + 18} fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="monospace">
                        {val.toFixed(2)} nm
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Comparison Analysis Banner (When reference curve is active) */}
            {referenceCurve && (
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs flex flex-wrap items-center justify-between gap-3 text-purple-200">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>{isAr ? 'المرجع المحفوظ:' : 'Saved Reference:'}</strong>{' '}
                    {referenceCurve.voltageKv} kV • {referenceCurve.currentMa} mA • {XRAY_TARGETS[referenceCurve.target].nameAr}{' '}
                    (λ_min = {referenceCurve.lambdaMinNm.toFixed(3)} nm)
                  </span>
                </div>
                <div className="font-bold text-amber-300">
                  {voltageKv > referenceCurve.voltageKv
                    ? (isAr ? '⬅️ أزاح زيادة الجهد نقطة λ_min لليسار (أقصر)' : '⬅️ Voltage increase shifted λ_min to the left')
                    : voltageKv < referenceCurve.voltageKv
                    ? (isAr ? '➡️ أزاح خفض الجهد نقطة λ_min لليمين (أطول)' : '➡️ Voltage drop shifted λ_min to the right')
                    : filamentCurrentMa !== referenceCurve.currentMa
                    ? (isAr ? '↕️ تغيّر تيار الفتيلة غيّر شدة الإشعاع فقط دون زحزحة λ_min' : '↕️ Filament current scaled intensity only with zero λ_min shift')
                    : (isAr ? 'المنحنيان متطابقان تماماً' : 'Curves are identical')}
                </div>
              </div>
            )}
          </div>

          {/* Key Ministerial Physical Telemetry Gauges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
              <span className="text-slate-400 block text-[11px] mb-0.5">{isAr ? 'أقصر طول موجي (λ_min):' : 'Cutoff Wavelength (λ_min):'}</span>
              <span className="font-mono font-black text-rose-400 text-sm">{lambdaMinNm.toFixed(4)} nm</span>
              <span className="text-[10px] text-slate-500 block font-mono">{(lambdaMinNm * 10).toFixed(2)} Å</span>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
              <span className="text-slate-400 block text-[11px] mb-0.5">{isAr ? 'أقصى تردد للفوتونات (ν_max):' : 'Max Frequency (ν_max):'}</span>
              <span className="font-mono font-black text-purple-400 text-sm">{(nuMaxHz / 1e18).toFixed(2)} × 10¹⁸ Hz</span>
              <span className="text-[10px] text-slate-500 block font-mono">E_max = {voltageKv.toFixed(1)} keV</span>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
              <span className="text-slate-400 block text-[11px] mb-0.5">{isAr ? 'أقصى سرعة للإلكترونات (v_max):' : 'Max Electron Speed (v_max):'}</span>
              <span className="font-mono font-black text-cyan-400 text-sm">{Math.round(vMaxMps / 1000).toLocaleString()} km/s</span>
              <span className="text-[10px] text-slate-500 block font-mono">~{((vMaxMps / 3e8) * 100).toFixed(1)}% c</span>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
              <span className="text-slate-400 block text-[11px] mb-0.5">{isAr ? 'القدرة والحرارة المشتتة:' : 'Input Power & Heat:'}</span>
              <span className="font-mono font-black text-amber-400 text-sm">{inputPowerW.toFixed(1)} W</span>
              <span className="text-[10px] text-rose-400 block font-mono">Heat: {heatPowerW.toFixed(1)} W (99%) • X-rays: {xrayPowerW.toFixed(1)} W (1%)</span>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* VIEW 2: MINISTERIAL EXAM SOLVERS (KaTeX STEP-BY-STEP)                */}
      {/* =================================================================== */}
      {activeSubTab === 'exam_solver' && (
        <div className="space-y-4">
          {/* Exam Questions Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 1, year: '2024', titleAr: 'حساب λ_min وأقصى تردد لطاقة 60 kV', titleEn: 'Calculate λ_min & ν_max at 60 kV' },
              { id: 2, year: '2023', titleAr: 'استبدال الهدف من موليبدنوم إلى تنجستين', titleEn: 'Replacing Mo Target with Tungsten' },
              { id: 3, year: '2022', titleAr: 'مضاعفة الجهد ومضاعفة تيار الفتيلة معاً', titleEn: 'Doubling Voltage vs Doubling Current' },
            ].map((prob) => (
              <button
                key={prob.id}
                onClick={() => setSelectedExamProblem(prob.id)}
                className={`p-3 rounded-xl border text-left rtl:text-right transition-all cursor-pointer flex flex-col justify-between ${
                  selectedExamProblem === prob.id
                    ? 'bg-purple-900/40 border-purple-400 text-white shadow-lg shadow-purple-900/20'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-purple-300">
                    {isAr ? `امتحان ثانوية عامة ${prob.year}` : `Thanawya Amma ${prob.year}`}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                </div>
                <span className="text-xs font-bold text-slate-200">{isAr ? prob.titleAr : prob.titleEn}</span>
              </button>
            ))}
          </div>

          {/* Problem 1: 2024 Exam Calculation */}
          {selectedExamProblem === 1 && (
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block">
                  {isAr ? 'مسألة امتحان الدور الأول 2024' : 'Ministerial Exam 2024 Question'}
                </span>
                <p className="text-sm font-bold text-white mt-1 leading-relaxed">
                  {isAr
                    ? 'أنبوبة كولدج تعمل بفرق جهد V = 60 kV، وشاحنة تيار فتيلة I = 5 mA. احسب: (1) أقصى طاقة حركة للإلكترونات المصطدمة، (2) أقصر طول موجي للأشعة السينية المنبعثة، (3) عدد الإلكترونات التي تصطدم بالهدف في الثانية الواحدة.'
                    : 'A Coolidge tube operates at V = 60 kV and filament current I = 5 mA. Calculate: (1) Maximum electron kinetic energy, (2) Cutoff wavelength λ_min, (3) Number of electrons striking the target per second.'}
                </p>
              </div>

              {/* Step-by-Step KaTeX Derivations */}
              <div className="space-y-3 text-xs md:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="font-bold text-purple-300">
                    {isAr ? '١. حساب أقصى طاقة حركة (KE_max):' : '1. Maximum Kinetic Energy:'}
                  </div>
                  <MathRenderer math="KE_{\max} = e \cdot V = (1.6 \times 10^{-19}\text{ C}) \times (60 \times 10^3\text{ V}) = 9.6 \times 10^{-15}\text{ J} = 60\text{ keV}" />
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="font-bold text-purple-300">
                    {isAr ? '٢. حساب أقصر طول موجي لطيف الكبح (قانون دوين-هنت):' : '2. Minimum Cutoff Wavelength (Duane-Hunt Law):'}
                  </div>
                  <MathRenderer math="\lambda_{\min} = \frac{hc}{eV} = \frac{6.625 \times 10^{-34} \times 3 \times 10^8}{1.6 \times 10^{-19} \times 60 \times 10^3} \approx 2.07 \times 10^{-11}\text{ m} = 0.0207\text{ nm} = 0.207\text{ \AA}" />
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="font-bold text-purple-300">
                    {isAr ? '٣. حساب عدد الإلكترونات المصطدمة في الثانية (n):' : '3. Electron Impact Rate per Second:'}
                  </div>
                  <MathRenderer math="I = \frac{q}{t} = \frac{n \cdot e}{t} \implies n = \frac{I}{e} = \frac{5 \times 10^{-3}\text{ A}}{1.6 \times 10^{-19}\text{ C}} = 3.125 \times 10^{16}\text{ electron/s}" />
                </div>
              </div>
            </div>
          )}

          {/* Problem 2: 2023 Exam Target Substitution */}
          {selectedExamProblem === 2 && (
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block">
                  {isAr ? 'سؤال امتحان الدور الثاني 2023' : 'Ministerial Exam 2023 Question'}
                </span>
                <p className="text-sm font-bold text-white mt-1 leading-relaxed">
                  {isAr
                    ? 'في أنبوبة كولدج، تم استبدال مادة الهدف من عنصر الموليبدنوم (Z = 42) إلى عنصر التنجستين (Z = 74) مع ثبات فرق الجهد V وتيار الفتيلة I. وضح ماذا يحدث لكل من: (1) أقصر طول موجي لطيف الكبح λ_min، (2) الأطوال الموجية للأشعة السينية المميزة K_α و K_β.'
                    : 'In a Coolidge tube, the anode target is replaced from Molybdenum (Z = 42) to Tungsten (Z = 74) while maintaining constant voltage V and filament current I. Explain the effect on: (1) Continuous cutoff λ_min, (2) Characteristic wavelengths K_α and K_β.'}
                </p>
              </div>

              <div className="space-y-3 text-xs md:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isAr ? '١. أقصر طول موجي (λ_min) يظل ثابتاً لا يتغير:' : '1. Cutoff λ_min Remains Constant:'}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {isAr
                      ? 'لأن λ_min يتوقف حصراً على فرق الجهد المطبق بين المصعد والمهبط (λ_min = hc/eV) ولا يعتمد على نوع مادة الهدف إطلاقاً.'
                      : 'Because λ_min depends strictly on the applied tube potential difference (λ_min = hc/eV) and is completely independent of the target material.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-purple-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>{isAr ? '٢. الأطوال الموجية المميزة (K_α, K_β) تقل وتزاح نحو اليسار:' : '2. Characteristic Peaks Shift to Shorter Wavelengths:'}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {isAr
                      ? 'بزيادة العدد الذري لمادة الهدف (Z)، تزداد طاقة المستويات الذرية الداخلية ويزداد فرق الطاقة بين المستويات (ΔE). وبما أن λ = hc/ΔE، فإن الطول الموجي الخطي المميز يقل وتزاح القمم الحادة لليسار.'
                      : 'Higher atomic number Z increases nuclear charge and energy spacing ΔE between inner shells. Since λ = hc/ΔE, characteristic wavelengths decrease, shifting spikes to the left.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Problem 3: 2022 Exam Doubling Voltage vs Current */}
          {selectedExamProblem === 3 && (
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block">
                  {isAr ? 'سؤال امتحان 2022 (مقارنة المنحنيات)' : 'Ministerial Exam 2022 Question'}
                </span>
                <p className="text-sm font-bold text-white mt-1 leading-relaxed">
                  {isAr
                    ? 'وضح بالرسم والبيان المقارن أثر: (أ) مضاعفة فرق الجهد V فقط، (ب) مضاعفة تيار الفتيلة I فقط على منحنى طيف الأشعة السينية.'
                    : 'Compare the graphical transformation of the X-ray spectrum curve when: (A) Doubling voltage V only, (B) Doubling filament current I only.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-2">
                  <span className="font-bold text-purple-300 block">{isAr ? '(أ) مضاعفة فرق الجهد (2V):' : '(A) Doubling Voltage (2V):'}</span>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                    <li>{isAr ? 'يقل أقصر طول موجي إلى النصف: λ_min\' = λ_min / 2' : 'Cutoff λ_min is halved: λ_min\' = λ_min / 2'}</li>
                    <li>{isAr ? 'تزداد شدة الإشعاع الكلية وتزداد المساحة تحت المنحنى' : 'Overall continuous intensity and area scale up'}</li>
                    <li>{isAr ? 'مواضع القمم الخطية المميزة تظل ثابتة في مكانها' : 'Characteristic line spike positions remain unchanged'}</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-2">
                  <span className="font-bold text-amber-300 block">{isAr ? '(ب) مضاعفة تيار الفتيلة (2I):' : '(B) Doubling Filament Current (2I):'}</span>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                    <li>{isAr ? 'نقطة البداية λ_min تظل ثابتة تماماً دون أي زحزحة' : 'Cutoff λ_min remains strictly in place'}</li>
                    <li>{isAr ? 'يتضاعف ارتفاع المنحنى وقمم الإشعاع رأسياً' : 'Curve height and peak intensities double vertically'}</li>
                    <li>{isAr ? 'مواضع الأطوال الموجية المميزة تظل ثابتة' : 'Characteristic peak positions remain unchanged'}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* VIEW 3: CLINICAL & INDUSTRIAL APPLICATIONS                           */}
      {/* =================================================================== */}
      {activeSubTab === 'applications' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
          {/* 1. Medical Radiography */}
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">1</span>
              <h4 className="font-black text-white text-sm">
                {isAr ? 'التصوير الطبي وتشخيص الكسور' : 'Medical Diagnostic Radiography'}
              </h4>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {isAr
                ? 'تتميز الأشعة السينية بقدرة فائقة على النفاذ عبر الأنسجة الرخوة وامتصاصها الشديد في العظام لاحتوائها على الكالسيوم (Z عالٍ)، مما يظهر العظام باللون الأبيض على اللوح الفوتوغرافي الحساس.'
                : 'High penetration through soft tissue with dense absorption by calcium-rich bones (high Z), yielding clear radiographic contrast of fractures and internal organ pathology.'}
            </p>
          </div>

          {/* 2. X-Ray Crystallography */}
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">2</span>
              <h4 className="font-black text-white text-sm">
                {isAr ? 'حيود البلورات واكتشاف DNA' : 'Bragg Crystallography & DNA Helix'}
              </h4>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {isAr
                ? 'نظراً لأن الطول الموجي للأشعة السينية مقارباً للمسافات البينية بين ذرات البلورة (~1 Å)، فإنها تحيد مكونة أنماط تداخل دقيقة، وهي التقنية التي استخدمتها روزاليند فرانكلين لاكتشاف لولب DNA.'
                : 'Wavelengths (~1 Å) match interatomic lattice spacing, producing Bragg diffraction interference patterns famously utilized by Rosalind Franklin to decipher the DNA double helix.'}
            </p>
          </div>

          {/* 3. Industrial Metal Casting Inspection */}
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">3</span>
              <h4 className="font-black text-white text-sm">
                {isAr ? 'فحص عيوب المسبوكات واللحام' : 'Non-Destructive Casting Flaw Inspection'}
              </h4>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {isAr
                ? 'فحص غير مدمر (NDT) للكشف عن الشقوق الداخلية، والفقاعات الهوائية، ومسامية اللحام في هياكل الطائرات، وخطوط أنابيب البترول، والمسبوكات الهندسية دون إتلافها.'
                : 'Non-Destructive Testing (NDT) detecting subsurface microcracks, void porosity, and weld fissures in aerospace hulls, petroleum pipelines, and turbine engine castings.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
