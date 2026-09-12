import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  Zap,
  Gauge,
  Sun,
  Activity,
  Sparkles,
  Info,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

type PhysicsTab = 'circuits' | 'photoelectric';

interface Metal {
  id: string;
  nameEn: string;
  nameAr: string;
  workFunctionEV: number; // eV
  symbol: string;
}

const METALS: Metal[] = [
  { id: 'cs', nameEn: 'Cesium (Cs)', nameAr: 'السيزيوم (Cs)', workFunctionEV: 2.14, symbol: 'Cs' },
  { id: 'k', nameEn: 'Potassium (K)', nameAr: 'البوتاسيوم (K)', workFunctionEV: 2.30, symbol: 'K' },
  { id: 'na', nameEn: 'Sodium (Na)', nameAr: 'الصوديوم (Na)', workFunctionEV: 2.75, symbol: 'Na' },
  { id: 'zn', nameEn: 'Zinc (Zn)', nameAr: 'الخارصين (Zn)', workFunctionEV: 4.31, symbol: 'Zn' },
  { id: 'pt', nameEn: 'Platinum (Pt)', nameAr: 'البلاتين (Pt)', workFunctionEV: 6.35, symbol: 'Pt' },
];

export const PhysicsLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<PhysicsTab>('circuits');

  // DC Circuit State
  const [vb, setVb] = useState<number>(12); // Battery EMF in Volts
  const [rInternal, setRInternal] = useState<number>(1.0); // Internal resistance in Ohms
  const [r1, setR1] = useState<number>(6.0); // Resistor 1
  const [r2, setR2] = useState<number>(12.0); // Resistor 2
  const [circuitMode, setCircuitMode] = useState<'series' | 'parallel' | 'compound'>('compound');
  const [isSwitchClosed, setIsSwitchClosed] = useState<boolean>(true);
  const [multimeterProbe, setMultimeterProbe] = useState<'battery' | 'r1' | 'r2' | 'total'>('battery');
  const [electronAnimOffset, setElectronAnimOffset] = useState<number>(0);

  // Photoelectric Effect State
  const [selectedMetal, setSelectedMetal] = useState<Metal>(METALS[0]);
  const [wavelengthNm, setWavelengthNm] = useState<number>(450); // Wavelength in nm (blue)
  const [lightIntensity, setLightIntensity] = useState<number>(80); // %
  const [retardingVoltage, setRetardingVoltage] = useState<number>(0.0); // Volts

  // Electron Flow Animation for Circuit
  useEffect(() => {
    if (!isSwitchClosed) return;
    const interval = setInterval(() => {
      setElectronAnimOffset((prev) => (prev + 2) % 60);
    }, 50);
    return () => clearInterval(interval);
  }, [isSwitchClosed]);

  // Circuit Calculations
  let rEq = 0;
  let iTotal = 0;
  let vTerminal = 0;
  let i1 = 0;
  let i2 = 0;
  let v1 = 0;
  let v2 = 0;

  if (isSwitchClosed) {
    if (circuitMode === 'series') {
      rEq = r1 + r2;
      iTotal = vb / (rEq + rInternal);
      i1 = iTotal;
      i2 = iTotal;
      v1 = i1 * r1;
      v2 = i2 * r2;
    } else if (circuitMode === 'parallel') {
      rEq = (r1 * r2) / (r1 + r2);
      iTotal = vb / (rEq + rInternal);
      vTerminal = vb - iTotal * rInternal;
      v1 = vTerminal;
      v2 = vTerminal;
      i1 = v1 / r1;
      i2 = v2 / r2;
    } else {
      // Compound: R1 in series with R2
      // Let's do R1 in series with (R2 parallel with R3 of 12)
      const rParallel = (r2 * 12) / (r2 + 12);
      rEq = r1 + rParallel;
      iTotal = vb / (rEq + rInternal);
      v1 = iTotal * r1;
      v2 = iTotal * rParallel;
      i1 = iTotal;
      i2 = v2 / r2;
    }
    vTerminal = vb - iTotal * rInternal;
  }

  // Selected Multimeter Reading
  let measuredVoltage = 0;
  let measuredCurrent = 0;
  if (isSwitchClosed) {
    if (multimeterProbe === 'battery') {
      measuredVoltage = vTerminal;
      measuredCurrent = iTotal;
    } else if (multimeterProbe === 'r1') {
      measuredVoltage = v1;
      measuredCurrent = i1;
    } else if (multimeterProbe === 'r2') {
      measuredVoltage = v2;
      measuredCurrent = i2;
    } else {
      measuredVoltage = vb;
      measuredCurrent = iTotal;
    }
  }

  // Photoelectric Calculations
  // h*c in eV*nm = 1239.84
  const photonEnergyEV = 1239.84 / wavelengthNm;
  const thresholdWavelengthNm = 1239.84 / selectedMetal.workFunctionEV;
  const thresholdFreqHz = (selectedMetal.workFunctionEV * 1.602e-19) / 6.626e-34;
  const photonFreqHz = (3e8 / (wavelengthNm * 1e-9));
  const isEmission = photonEnergyEV > selectedMetal.workFunctionEV;
  const maxKineticEnergyEV = isEmission ? photonEnergyEV - selectedMetal.workFunctionEV : 0;
  const stoppingPotentialV = maxKineticEnergyEV; // in Volts
  // Net effective current taking into account retarding voltage:
  const isStopped = retardingVoltage >= stoppingPotentialV;
  const measuredPhotocurrentUA = isEmission && !isStopped
    ? parseFloat(((lightIntensity * 1.2) * (1 - retardingVoltage / (stoppingPotentialV || 1))).toFixed(1))
    : 0;
  const electronSpeedKms = isEmission
    ? Math.sqrt((2 * maxKineticEnergyEV * 1.602e-19) / 9.109e-31) / 1000
    : 0;

  // Photon color by wavelength
  const getWavelengthColor = (nm: number) => {
    if (nm < 380) return '#a855f7'; // UV / violet
    if (nm < 440) return '#8b5cf6'; // Indigo
    if (nm < 490) return '#3b82f6'; // Blue
    if (nm < 560) return '#10b981'; // Green
    if (nm < 590) return '#facc15'; // Yellow
    if (nm < 650) return '#f97316'; // Orange
    return '#ef4444'; // Red
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-cyan-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Lab Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-cyan-400 text-cyan-400'
                : 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-cyan-400/40 shadow-cyan-500/20'
            }`}
          >
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic ? 'مختبر الفيزياء والدوائر الكهربية والكم التفاعلي' : 'Virtual Physics & Quantum Circuits Lab'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-cyan-400 text-black border-cyan-300'
                    : isLight
                    ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                    : 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60'
                }`}
              >
                Kirchhoff & Quantum Engine
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'محاكي دوائر التيار المستمر وقانون أوم وكيرشوف، ومحاكي الظاهرة الكهروضوئية والازدواجية الموجية الجسيمية'
                : 'DC circuit solver, Ohm & Kirchhoff analyzer, and Photoelectric quantum emission simulator'}
            </p>
          </div>
        </div>

        {/* Subtabs */}
        <div
          className={`flex items-center p-1 rounded-xl border self-stretch md:self-auto overflow-x-auto ${
            isContrast
              ? 'bg-black border-cyan-400'
              : isLight
              ? 'bg-slate-100 border-slate-300'
              : 'bg-slate-900 border-slate-800'
          }`}
        >
          <button
            onClick={() => setActiveTab('circuits')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'circuits'
                ? isContrast
                  ? 'bg-cyan-400 text-black font-black'
                  : 'bg-cyan-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>{isArabic ? 'دوائر أوم وكيرشوف' : 'DC Circuits & Kirchhoff'}</span>
          </button>

          <button
            onClick={() => setActiveTab('photoelectric')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'photoelectric'
                ? isContrast
                  ? 'bg-cyan-400 text-black font-black'
                  : 'bg-cyan-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الظاهرة الكهروضوئية والكم' : 'Photoelectric Effect'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: DC CIRCUITS & KIRCHHOFF */}
      {activeTab === 'circuits' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Schematic Canvas */}
          <div className="lg:col-span-8 space-y-4">
            <div
              className={`p-5 rounded-2xl border flex flex-col justify-between ${
                isContrast
                  ? 'bg-black border-cyan-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-black flex items-center gap-1.5 text-cyan-400">
                    <Activity className="w-4 h-4" />
                    <span>{isArabic ? 'مخطط الدائرة الكهربية وحركة الإلكترونات الحية:' : 'Live Circuit Schematic & Electron Drift:'}</span>
                  </h4>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isSwitchClosed
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-red-500/20 text-red-400 border border-red-500/40'
                    }`}
                  >
                    {isSwitchClosed ? (isArabic ? 'الدائرة مغلقة (تيار يمر)' : 'Circuit Closed') : (isArabic ? 'الدائرة مفتوحة' : 'Open')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center p-0.5 rounded-lg bg-slate-950 border border-slate-800">
                    {(['series', 'parallel', 'compound'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setCircuitMode(mode)}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition-all ${
                          circuitMode === mode
                            ? 'bg-cyan-600 text-white font-black'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {mode === 'series'
                          ? (isArabic ? 'توالي' : 'Series')
                          : mode === 'parallel'
                          ? (isArabic ? 'توازي' : 'Parallel')
                          : (isArabic ? 'مختلط' : 'Compound')}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsSwitchClosed((prev) => !prev)}
                    className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      isSwitchClosed
                        ? 'bg-red-600 hover:bg-red-500 text-white'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    }`}
                  >
                    {isSwitchClosed ? (isArabic ? 'فتح المفتاح K' : 'Open Switch') : (isArabic ? 'غلق المفتاح K' : 'Close Switch')}
                  </button>
                </div>
              </div>

              {/* Dynamic SVG Schematic */}
              <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 shadow-inner flex items-center justify-center">
                <svg viewBox="0 0 540 220" className="w-full max-w-[520px] h-48 sm:h-56">
                  {/* Outer Circuit Rect Wire */}
                  <rect
                    x="50"
                    y="30"
                    width="440"
                    height="160"
                    fill="none"
                    stroke={isSwitchClosed ? '#38bdf8' : '#64748b'}
                    strokeWidth="3"
                    rx="12"
                  />

                  {/* Electron Flow Dots (Moving) */}
                  {isSwitchClosed && iTotal > 0 && (
                    <g>
                      {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900].map((pos) => {
                        const totalPerim = 2 * (440 + 160);
                        const cur = (pos + electronAnimOffset * (iTotal * 3)) % totalPerim;
                        let cx = 50;
                        let cy = 30;
                        if (cur <= 440) {
                          cx = 50 + cur;
                          cy = 30;
                        } else if (cur <= 440 + 160) {
                          cx = 490;
                          cy = 30 + (cur - 440);
                        } else if (cur <= 440 + 160 + 440) {
                          cx = 490 - (cur - 440 - 160);
                          cy = 190;
                        } else {
                          cx = 50;
                          cy = 190 - (cur - 440 - 160 - 440);
                        }
                        return (
                          <circle
                            key={`e-${pos}`}
                            cx={cx}
                            cy={cy}
                            r="3"
                            fill="#facc15"
                            className="animate-pulse"
                          />
                        );
                      })}
                    </g>
                  )}

                  {/* Left: Battery Component */}
                  <rect x="35" y="80" width="30" height="60" fill="#0f172a" />
                  {/* Long plate (+) */}
                  <line x1="40" y1="95" x2="60" y2="95" stroke="#ef4444" strokeWidth="4" />
                  <text x="25" y="98" fill="#ef4444" fontSize="12" fontWeight="black">+</text>
                  {/* Short plate (-) */}
                  <line x1="45" y1="115" x2="55" y2="115" stroke="#3b82f6" strokeWidth="6" />
                  <text x="27" y="120" fill="#3b82f6" fontSize="14" fontWeight="black">-</text>
                  {/* Internal Resistance box */}
                  <rect x="42" y="130" width="16" height="20" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
                  <text x="15" y="145" fill="#94a3b8" fontSize="9" fontWeight="bold">r={rInternal}Ω</text>
                  <text x="8" y="80" fill="#f8fafc" fontSize="11" fontWeight="black">VB={vb}V</text>

                  {/* Top Wire: Resistor R1 */}
                  <rect x="180" y="20" width="90" height="20" fill="#0f172a" />
                  <path
                    d="M 180 30 L 195 22 L 210 38 L 225 22 L 240 38 L 255 22 L 270 30"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                  <text x="225" y="15" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">
                    R₁ = {r1} Ω
                  </text>
                  {isSwitchClosed && (
                    <text x="225" y="55" textAnchor="middle" fill="#67e8f9" fontSize="10" fontWeight="bold">
                      V₁={v1.toFixed(1)}V | I₁={i1.toFixed(2)}A
                    </text>
                  )}

                  {/* Right Side / Switch Component */}
                  <rect x="480" y="80" width="20" height="50" fill="#0f172a" />
                  <circle cx="490" cy="85" r="4" fill="#94a3b8" />
                  <circle cx="490" cy="125" r="4" fill="#94a3b8" />
                  {isSwitchClosed ? (
                    <line x1="490" y1="85" x2="490" y2="125" stroke="#10b981" strokeWidth="3" />
                  ) : (
                    <line x1="490" y1="85" x2="470" y2="115" stroke="#ef4444" strokeWidth="3" />
                  )}
                  <text x="505" y="110" fill="#cbd5e1" fontSize="11" fontWeight="bold">Switch K</text>

                  {/* Bottom Wire: Resistor R2 or Parallel Branch */}
                  <rect x="180" y="180" width="90" height="20" fill="#0f172a" />
                  <path
                    d="M 180 190 L 195 182 L 210 198 L 225 182 L 240 198 L 255 182 L 270 190"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="3"
                  />
                  <text x="225" y="215" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="bold">
                    R₂ = {r2} Ω
                  </text>
                  {isSwitchClosed && (
                    <text x="225" y="175" textAnchor="middle" fill="#67e8f9" fontSize="10" fontWeight="bold">
                      V₂={v2.toFixed(1)}V | I₂={i2.toFixed(2)}A
                    </text>
                  )}

                  {/* Center Digital Multimeter Screen Overlay */}
                  <rect
                    x="170"
                    y="75"
                    width="140"
                    height="65"
                    rx="8"
                    fill="#020617"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                  />
                  <text x="240" y="93" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
                    DIGITAL MULTIMETER
                  </text>
                  <text x="240" y="116" textAnchor="middle" fill="#4ade80" fontSize="17" fontWeight="black" fontFamily="monospace">
                    {measuredVoltage.toFixed(2)} V
                  </text>
                  <text x="240" y="132" textAnchor="middle" fill="#facc15" fontSize="11" fontWeight="bold" fontFamily="monospace">
                    {measuredCurrent.toFixed(3)} A
                  </text>
                </svg>
              </div>

              {/* Multimeter Probe Target Switcher */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isArabic ? 'نقطة قياس الملتيميتر:' : 'Multimeter Probe:'}</span>
                </span>

                <div className="flex items-center gap-1.5">
                  {[
                    { id: 'battery', labelEn: 'Battery Terminals (V)', labelAr: 'بين قطبي العمود (V)' },
                    { id: 'r1', labelEn: 'Across R1 (V1)', labelAr: 'طرفي R1' },
                    { id: 'r2', labelEn: 'Across R2 (V2)', labelAr: 'طرفي R2' },
                  ].map((probe) => (
                    <button
                      key={probe.id}
                      onClick={() => setMultimeterProbe(probe.id as any)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                        multimeterProbe === probe.id
                          ? 'bg-cyan-600 text-white font-extrabold shadow-sm'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {isArabic ? probe.labelAr : probe.labelEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sliders Control Panel */}
            <div
              className={`p-4 rounded-2xl border space-y-4 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* EMF Vb */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">{isArabic ? 'القوة الدافعة VB:' : 'EMF (VB):'}</span>
                    <span className="font-mono font-black text-cyan-400">{vb} V</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="24"
                    step="1"
                    value={vb}
                    onChange={(e) => setVb(parseInt(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>

                {/* Internal Resistance r */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">{isArabic ? 'المقاومة الداخلية r:' : 'Internal (r):'}</span>
                    <span className="font-mono font-black text-rose-400">{rInternal.toFixed(1)} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="4"
                    step="0.2"
                    value={rInternal}
                    onChange={(e) => setRInternal(parseFloat(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>

                {/* Resistor R1 */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">R₁:</span>
                    <span className="font-mono font-black text-amber-400">{r1} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={r1}
                    onChange={(e) => setR1(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>

                {/* Resistor R2 */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">R₂:</span>
                    <span className="font-mono font-black text-purple-400">{r2} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={r2}
                    onChange={(e) => setR2(parseInt(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Kirchhoff & Closed-Circuit Verification */}
          <div className="lg:col-span-4 space-y-4">
            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-black text-cyan-400 mb-3 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>{isArabic ? 'قانون أوم للدائرة المغلقة وتحليل الطاقة:' : 'Ohm\'s Law for Closed Circuits Analysis:'}</span>
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'المقاومة الكلية المكافئة (Req):' : 'Equivalent Resistance:'}</span>
                  <span className="font-mono font-black text-purple-400">{rEq.toFixed(2)} Ω</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'شدة التيار الكلي (I):' : 'Total Current (I):'}</span>
                  <span className="font-mono font-black text-emerald-400">{iTotal.toFixed(3)} A</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'فرق الجهد بين قطبي العمود (V):' : 'Terminal Voltage (V):'}</span>
                  <span className="font-mono font-black text-cyan-400">{vTerminal.toFixed(2)} V</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'الجهد المفقود داخل المصدر (Ir):' : 'Lost Voltage (Ir):'}</span>
                  <span className="font-mono font-black text-rose-400">{(iTotal * rInternal).toFixed(2)} V</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'كفاءة البطارية الكهربية:' : 'Battery Efficiency:'}</span>
                  <span className="font-mono font-black text-amber-400">
                    {vb > 0 ? `${((vTerminal / vb) * 100).toFixed(1)}%` : '0%'}
                  </span>
                </div>
              </div>

              {/* Ministerial Exam Law Card */}
              <div className="mt-4 p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs space-y-1 text-cyan-200">
                <p className="font-black flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'قوانين الامتحان الوزاري:' : 'Core Ministerial Formulas:'}</span>
                </p>
                <div className="font-mono text-[11px] space-y-1 text-slate-300">
                  <p>I = VB / (Req + r)</p>
                  <p>V = VB - I·r (علاقة تناقصية بميل = -r)</p>
                  <p>∑ I_in = ∑ I_out (قانون كيرشوف الأول - حفظ الشحنة)</p>
                  <p>∑ VB = ∑ I·R (قانون كيرشوف الثاني - حفظ الطاقة)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PHOTOELECTRIC EFFECT */}
      {activeTab === 'photoelectric' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Photoelectric Chamber Animation */}
          <div className="lg:col-span-8 space-y-4">
            <div
              className={`p-5 rounded-2xl border ${
                isContrast
                  ? 'bg-black border-cyan-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-black flex items-center gap-2 text-cyan-400">
                  <Sun className="w-4 h-4" />
                  <span>{isArabic ? 'أنبوبة الظاهرة الكهروضوئية المفرغة وانبعاث الإلكترونات:' : 'Vacuum Phototube & Photoelectron Emission Plane:'}</span>
                </h4>
                <span
                  className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                    isEmission && !isStopped
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-red-500/20 text-red-300 border-red-500/40'
                  }`}
                >
                  {isEmission
                    ? isStopped
                      ? isArabic
                        ? 'انبعاث متوقف بجهد الإيقاف'
                        : 'Stopped by Retarding Bias'
                      : isArabic
                      ? 'انبعاث كهروضوئي نشط'
                      : 'Active Photoemission'
                    : isArabic
                    ? 'طاقة الضوء أقل من دالة الشغل (لا انبعاث)'
                    : 'E < Work Function (No Emission)'}
                </span>
              </div>

              {/* Phototube Visualizer SVG */}
              <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 shadow-inner flex items-center justify-center">
                <svg viewBox="0 0 540 220" className="w-full max-w-[520px] h-48 sm:h-56">
                  {/* Glass Bulb Chamber */}
                  <rect
                    x="80"
                    y="30"
                    width="380"
                    height="160"
                    rx="80"
                    fill="#0f172a"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    strokeDasharray="6 3"
                  />

                  {/* Incident Monochromatic Light Rays */}
                  <g>
                    {[-30, -10, 10, 30].map((dy) => (
                      <line
                        key={`ray-${dy}`}
                        x1="30"
                        y1={60 + dy}
                        x2="150"
                        y2={110 + dy}
                        stroke={getWavelengthColor(wavelengthNm)}
                        strokeWidth="3.5"
                        strokeDasharray="8 4"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                    ))}
                    <text x="50" y="45" fill={getWavelengthColor(wavelengthNm)} fontSize="11" fontWeight="bold">
                      λ = {wavelengthNm} nm
                    </text>
                  </g>

                  {/* Cathode Plate (Metal) */}
                  <rect x="150" y="60" width="16" height="100" rx="4" fill="#64748b" stroke="#cbd5e1" strokeWidth="2" />
                  <text x="145" y="175" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">
                    Cathode ({selectedMetal.symbol})
                  </text>

                  {/* Anode Plate (Collector) */}
                  <rect x="380" y="60" width="16" height="100" rx="4" fill="#475569" stroke="#cbd5e1" strokeWidth="2" />
                  <text x="390" y="175" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">
                    Anode
                  </text>

                  {/* Emitted Flying Photoelectrons */}
                  {isEmission && !isStopped && (
                    <g>
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                        const px = 180 + (i * 28);
                        const py = 75 + (i * 12);
                        return (
                          <g key={`pe-${i}`}>
                            <circle cx={px} cy={py} r="4" fill="#38bdf8" className="animate-ping" />
                            <circle cx={px} cy={py} r="3" fill="#67e8f9" />
                          </g>
                        );
                      })}
                    </g>
                  )}

                  {/* Center Digital Ammeter */}
                  <rect x="230" y="80" width="90" height="45" rx="6" fill="#020617" stroke="#38bdf8" strokeWidth="1" />
                  <text x="275" y="96" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">
                    PHOTOCURRENT
                  </text>
                  <text x="275" y="115" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="black" fontFamily="monospace">
                    {measuredPhotocurrentUA} µA
                  </text>
                </svg>
              </div>

              {/* Controls Grid */}
              <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Wavelength Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">{isArabic ? 'الطول الموجي λ:' : 'Wavelength (λ):'}</span>
                    <span className="font-mono font-black" style={{ color: getWavelengthColor(wavelengthNm) }}>
                      {wavelengthNm} nm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="750"
                    step="5"
                    value={wavelengthNm}
                    onChange={(e) => setWavelengthNm(parseInt(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    {wavelengthNm < 380 ? 'UV (فوق بنفسجي)' : wavelengthNm > 700 ? 'IR (تحت حمراء)' : 'Visible (ضوء مرئي)'}
                  </p>
                </div>

                {/* Intensity Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">{isArabic ? 'شدة الإضاءة:' : 'Light Intensity:'}</span>
                    <span className="font-mono font-black text-amber-400">{lightIntensity}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={lightIntensity}
                    onChange={(e) => setLightIntensity(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isArabic ? 'تحدد عدد الفوتونات والتيار' : 'Controls photon count & current'}
                  </p>
                </div>

                {/* Retarding Potential Vs */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">{isArabic ? 'جهد الإيقاف العكسي:' : 'Stopping Bias (Vs):'}</span>
                    <span className="font-mono font-black text-rose-400">{retardingVoltage.toFixed(2)} V</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="4"
                    step="0.05"
                    value={retardingVoltage}
                    onChange={(e) => setRetardingVoltage(parseFloat(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    {retardingVoltage >= stoppingPotentialV && isEmission ? 'انعدم التيار (eVs = KEmax)' : 'Reverse electric field'}
                  </p>
                </div>
              </div>

              {/* Target Metal Selector */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-300 mr-2">
                  {isArabic ? 'معدن المهبط (الكاثود):' : 'Cathode Metal:'}
                </span>
                {METALS.map((metal) => (
                  <button
                    key={metal.id}
                    onClick={() => setSelectedMetal(metal)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      selectedMetal.id === metal.id
                        ? 'bg-cyan-600 text-white border-cyan-500 font-extrabold shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {isArabic ? metal.nameAr : metal.nameEn} ({metal.workFunctionEV} eV)
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quantitative Einstein Analysis */}
          <div className="lg:col-span-4 space-y-4">
            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-black text-cyan-400 mb-3 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>{isArabic ? 'معادلة آينشتاين الكهروضوئية:' : 'Einstein Photoelectric Equation:'}</span>
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'طاقة الفوتون الساقط (E):' : 'Photon Energy (E):'}</span>
                  <span className="font-mono font-black text-cyan-400">{photonEnergyEV.toFixed(2)} eV</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'دالة الشغل للمعدن (W₀ / Φ):' : 'Work Function (Φ):'}</span>
                  <span className="font-mono font-black text-amber-400">{selectedMetal.workFunctionEV.toFixed(2)} eV</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'طاقة الحركة العظمى (KEmax):' : 'Max Kinetic Energy:'}</span>
                  <span className={`font-mono font-black ${isEmission ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {maxKineticEnergyEV.toFixed(2)} eV
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'جهد الإيقاف النظري (Vs):' : 'Stopping Potential (Vs):'}</span>
                  <span className="font-mono font-black text-rose-400">{stoppingPotentialV.toFixed(2)} V</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'سرعة أسرع إلكترون منبعث:' : 'Max Electron Velocity:'}</span>
                  <span className="font-mono font-black text-purple-400">
                    {isEmission ? `${toHindiDigits(Math.round(electronSpeedKms))} km/s` : '0 km/s'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'الطول الموجي الحرج للمعدن (λ₀):' : 'Threshold Wavelength (λ₀):'}</span>
                  <span className="font-mono font-black text-cyan-400">{thresholdWavelengthNm.toFixed(1)} nm</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'التردد الحرج (ν₀):' : 'Threshold Frequency (ν₀):'}</span>
                  <span className="font-mono font-black text-indigo-400">{(thresholdFreqHz / 1e14).toFixed(2)} × 10¹⁴ Hz</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'تردد الفوتون الساقط (ν):' : 'Incident Frequency (ν):'}</span>
                  <span className="font-mono font-black text-amber-400">{(photonFreqHz / 1e14).toFixed(2)} × 10¹⁴ Hz</span>
                </div>
              </div>

              {/* Ministerial Distinction Alert */}
              <div className="mt-4 p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs space-y-1.5 text-cyan-200">
                <p className="font-black flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isArabic ? 'فروق الفيزياء الكلاسيكية والحديثة:' : 'Classical vs Quantum Differences:'}</span>
                </p>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {isArabic
                    ? 'وفق الفيزياء الكلاسيكية: انبعاث الإلكترون يعتمد على شدة الضوء وليس تردده! بينما وفق فيزياء الكم: انبعاث الإلكترون يعتمد كلياً على التردد (E ≥ Φ)، وزيادة الشدة تزيد عدد الإلكترونات المنبعثة فقط دون زيادة طاقتها الحركية.'
                    : 'Classical physics incorrectly predicted emission depends on intensity. Quantum physics proves emission requires frequency ν ≥ ν₀, while intensity only affects photoelectron count.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
