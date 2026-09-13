import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  Zap,
  Sliders,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Compass,
  Radio,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

export const RLCResonanceLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // RLC Component Parameters
  const [resistanceR, setResistanceR] = useState<number>(50); // Ohms
  const [inductanceMh, setInductanceMh] = useState<number>(100); // mH
  const [capacitanceUf, setCapacitanceUf] = useState<number>(20); // uF
  const [vSourceRms, setVSourceRms] = useState<number>(100); // Volts RMS
  const [frequencyF, setFrequencyF] = useState<number>(112.5); // Hz

  // Unit conversions
  const L = inductanceMh * 1e-3; // Henries
  const C = capacitanceUf * 1e-6; // Farads

  // Natural resonant frequency: f0 = 1 / (2 * pi * sqrt(L * C))
  const resonantFreqF0 = 1 / (2 * Math.PI * Math.sqrt(L * C));

  // Angular frequency omega = 2 * pi * f
  const omega = 2 * Math.PI * frequencyF;

  // Reactances
  const xL = omega * L; // Inductive Reactance (Ohms)
  const xC = 1 / (omega * C); // Capacitive Reactance (Ohms)

  // Total Impedance: Z = sqrt(R^2 + (xL - xC)^2)
  const netReactance = xL - xC;
  const impedanceZ = Math.sqrt(resistanceR * resistanceR + netReactance * netReactance);

  // Current amplitude: I = V / Z
  const currentRms = vSourceRms / impedanceZ;

  // Maximum current at resonance: I_max = V / R
  const currentAtResonance = vSourceRms / resistanceR;

  // Phase angle: phi = arctan((xL - xC) / R) in degrees
  const phaseAngleRad = Math.atan2(netReactance, resistanceR);
  const phaseAngleDeg = (phaseAngleRad * 180) / Math.PI;

  // Component RMS Voltages
  const vR = currentRms * resistanceR;
  const vL = currentRms * xL;
  const vC = currentRms * xC;

  // Quality Factor: Q = (1 / R) * sqrt(L / C) = (2 * pi * f0 * L) / R
  const qualityFactor = (1 / resistanceR) * Math.sqrt(L / C);

  // Bandwidth: Delta_f = R / (2 * pi * L)
  const bandwidthDeltaF = resistanceR / (2 * Math.PI * L);

  // Circuit state classification
  const isResonant = Math.abs(xL - xC) < 1.0;
  const isInductive = xL - xC >= 1.0;

  // Format numbers
  const formatNum = (val: number, decimals = 1) => {
    const formatted = val.toFixed(decimals);
    return isArabic ? toHindiDigits(formatted) : formatted;
  };

  // Helper to snap frequency to resonant frequency
  const snapToResonance = () => {
    setFrequencyF(parseFloat(resonantFreqF0.toFixed(1)));
  };

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-gradient-to-r from-sky-500/10 via-cyan-500/5 to-transparent p-4 rounded-xl border border-sky-500/20">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-black text-sky-400">
              {isArabic
                ? 'دوائر التيار المتردد والرنين الكهرومغناطيسي (RLC)'
                : 'RLC Alternating Current Circuits & Resonance Lab'}
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 font-bold uppercase">
              Impedance & Phasors
            </span>
          </div>
          <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {isArabic
              ? 'دراسة المعاوقة الكلية، المفاعلة الحثية والسعوية، متجه الجهد، ومنحنى الرنين مع حساب أقصى شدة تيار'
              : 'Analyze series RLC impedance Z, reactive vectors XL and XC, phasor diagrams, and resonance curve response'}
          </p>
        </div>

        {/* Snap to Resonance Action Button */}
        <button
          onClick={snapToResonance}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-400 hover:to-cyan-500 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer shrink-0"
        >
          <Radio className="w-4 h-4 animate-pulse" />
          <span>{isArabic ? 'ضبط تردد الرنين f₀' : 'Snap to Resonant f₀'}</span>
          <span className="font-mono bg-slate-950/20 px-1.5 py-0.5 rounded text-[11px]">
            {formatNum(resonantFreqF0, 1)} Hz
          </span>
        </button>
      </div>

      {/* State Status Banner */}
      <div
        className={`p-3 rounded-xl border flex items-center justify-between gap-4 text-xs font-bold transition-all ${
          isResonant
            ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
            : isInductive
            ? 'bg-amber-950/60 border-amber-500/50 text-amber-300'
            : 'bg-purple-950/60 border-purple-500/50 text-purple-300'
        }`}
      >
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 shrink-0" />
          <span>
            {isArabic
              ? isResonant
                ? '⚡ حالة رنين تام (X_L = X_C): المعاوقة أقل ما يمكن (Z = R)، شدة التيار قيمة عظمى، فرق الجهد متفق في الطور مع التيار (θ = 0°).'
                : isInductive
                ? '📈 دائرة حثية (X_L > X_C): الجهد الكلي يسبق التيار بزاوية طور موجبة (+θ).'
                : '📉 دائرة سعوية (X_C > X_L): التيار يسبق الجهد الكلي بزاوية طور سالبة (-θ).'
              : isResonant
              ? '⚡ Resonance State (X_L = X_C): Minimum impedance Z = R, maximum current I_max, voltage in phase with current (θ = 0°).'
              : isInductive
              ? '📈 Inductive Circuit (X_L > X_C): Total voltage leads current by positive phase angle (+θ).'
              : '📉 Capacitive Circuit (X_C > X_L): Current leads total voltage by negative phase angle (-θ).'}
          </span>
        </div>
        <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700/60 shrink-0">
          φ = {formatNum(phaseAngleDeg, 1)}°
        </span>
      </div>

      {/* Main Two Visualizer Columns: Phasor Diagram + Resonance Curve */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Phasor Diagram (SVG) */}
        <div
          className={`lg:col-span-6 rounded-xl border p-4 sm:p-5 flex flex-col justify-between ${
            isContrast
              ? 'bg-black border-sky-400'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-900/70 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="text-xs font-black uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              {isArabic ? 'مخطط متجهات الجهد في دائرة RLC' : 'Phasor Voltage Diagram'}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              V_net = {formatNum(vSourceRms, 1)} V
            </span>
          </div>

          {/* Phasor SVG Canvas */}
          <div className="relative w-full h-[250px] sm:h-[280px] my-2 select-none overflow-hidden rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center justify-center">
            <svg viewBox="0 0 320 260" className="w-full h-full">
              <defs>
                <marker id="arrow-sky" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
                </marker>
                <marker id="arrow-amber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
                </marker>
                <marker id="arrow-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#c084fc" />
                </marker>
                <marker id="arrow-emerald" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
                </marker>
              </defs>

              {/* Grid Lines */}
              <line x1="40" y1="130" x2="280" y2="130" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="120" y1="20" x2="120" y2="240" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

              {/* Origin (120, 130) */}
              {(() => {
                const ox = 120;
                const oy = 130;
                // Scale voltage vectors so max fits in ~90px
                const maxV = Math.max(vR, vL, vC, vSourceRms, 1);
                const scale = 80 / maxV;

                const vrLen = vR * scale;
                const vlLen = vL * scale;
                const vcLen = vC * scale;
                const netReactLen = (vL - vC) * scale;

                return (
                  <g>
                    {/* VR Vector (Horizontal Right along +X) */}
                    <line
                      x1={ox}
                      y1={oy}
                      x2={ox + vrLen}
                      y2={oy}
                      stroke="#38bdf8"
                      strokeWidth="3"
                      markerEnd="url(#arrow-sky)"
                    />
                    <text x={ox + vrLen + 8} y={oy + 4} fill="#38bdf8" fontSize="11" fontWeight="bold">
                      V_R ({formatNum(vR, 0)}V)
                    </text>

                    {/* VL Vector (Vertical Up along +Y) */}
                    <line
                      x1={ox}
                      y1={oy}
                      x2={ox}
                      y2={oy - vlLen}
                      stroke="#fbbf24"
                      strokeWidth="2.5"
                      markerEnd="url(#arrow-amber)"
                    />
                    <text x={ox - 10} y={oy - vlLen - 6} fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="end">
                      V_L ({formatNum(vL, 0)}V)
                    </text>

                    {/* VC Vector (Vertical Down along -Y) */}
                    <line
                      x1={ox}
                      y1={oy}
                      x2={ox}
                      y2={oy + vcLen}
                      stroke="#c084fc"
                      strokeWidth="2.5"
                      markerEnd="url(#arrow-purple)"
                    />
                    <text x={ox - 10} y={oy + vcLen + 14} fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="end">
                      V_C ({formatNum(vC, 0)}V)
                    </text>

                    {/* Resultant Net Reactance Line (V_L - V_C) */}
                    <line
                      x1={ox + vrLen}
                      y1={oy}
                      x2={ox + vrLen}
                      y2={oy - netReactLen}
                      stroke="#64748b"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />

                    {/* Resultant Total Voltage Phasor V_net */}
                    <line
                      x1={ox}
                      y1={oy}
                      x2={ox + vrLen}
                      y2={oy - netReactLen}
                      stroke="#10b981"
                      strokeWidth="3.5"
                      markerEnd="url(#arrow-emerald)"
                    />
                    <text
                      x={ox + vrLen + 10}
                      y={oy - netReactLen}
                      fill="#10b981"
                      fontSize="12"
                      fontWeight="black"
                    >
                      V_total ({formatNum(vSourceRms, 0)}V)
                    </text>

                    {/* Phase Angle Arc */}
                    <path
                      d={`M ${ox + 28} ${oy} A 28 28 0 0 ${phaseAngleDeg > 0 ? 0 : 1} ${
                        ox + 28 * Math.cos(phaseAngleRad)
                      } ${oy - 28 * Math.sin(phaseAngleRad)}`}
                      fill="none"
                      stroke="#facc15"
                      strokeWidth="1.5"
                    />
                    <text x={ox + 35} y={oy - (phaseAngleDeg > 0 ? 10 : -14)} fill="#facc15" fontSize="10" fontWeight="bold">
                      φ = {formatNum(phaseAngleDeg, 0)}°
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span className="text-sky-400 font-bold">V_R = I·R</span>
            <span className="text-amber-400 font-bold">V_L = I·X_L</span>
            <span className="text-purple-400 font-bold">V_C = I·X_C</span>
            <span className="text-emerald-400 font-bold">V = √(V_R² + (V_L - V_C)²)</span>
          </div>
        </div>

        {/* Right Column: Resonance Curve I vs f (SVG) */}
        <div
          className={`lg:col-span-6 rounded-xl border p-4 sm:p-5 flex flex-col justify-between ${
            isContrast
              ? 'bg-black border-emerald-400'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-900/70 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              {isArabic ? 'منحنى الرنين وتغير شدة التيار مع التردد' : 'Resonance Response Curve I(f)'}
            </span>
            <span className="text-[11px] font-mono text-emerald-300 font-bold">
              I_max = {formatNum(currentAtResonance, 2)} A
            </span>
          </div>

          {/* Resonance Curve SVG */}
          <div className="relative w-full h-[250px] sm:h-[280px] my-2 select-none overflow-hidden rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center justify-center">
            <svg viewBox="0 0 340 240" className="w-full h-full">
              {/* Axes */}
              <line x1="40" y1="200" x2="320" y2="200" stroke="#475569" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="200" stroke="#475569" strokeWidth="1.5" />

              {/* Axis Labels */}
              <text x="320" y="215" fill="#94a3b8" fontSize="10" textAnchor="end">
                {isArabic ? 'التردد f (Hz)' : 'Frequency f (Hz)'}
              </text>
              <text x="45" y="30" fill="#94a3b8" fontSize="10">
                {isArabic ? 'التيار I (A)' : 'Current I (A)'}
              </text>

              {/* Peak Resonance Line */}
              {(() => {
                // Plot frequency from 10Hz to 3 * f0
                const fMin = 10;
                const fMax = Math.max(300, resonantFreqF0 * 2.5);

                const getX = (f: number) => 40 + ((f - fMin) / (fMax - fMin)) * 260;
                const getY = (iVal: number) => 200 - (iVal / currentAtResonance) * 160;

                // Build curve path
                let pathPoints = '';
                const steps = 60;
                for (let i = 0; i <= steps; i++) {
                  const fCur = fMin + (i / steps) * (fMax - fMin);
                  const wCur = 2 * Math.PI * fCur;
                  const xlCur = wCur * L;
                  const xcCur = 1 / (wCur * C);
                  const zCur = Math.sqrt(resistanceR * resistanceR + Math.pow(xlCur - xcCur, 2));
                  const iCur = vSourceRms / zCur;
                  const x = getX(fCur);
                  const y = getY(iCur);
                  pathPoints += (i === 0 ? 'M ' : 'L ') + `${x.toFixed(1)} ${y.toFixed(1)} `;
                }

                const resX = getX(resonantFreqF0);
                const curX = getX(Math.min(fMax, Math.max(fMin, frequencyF)));
                const curY = getY(currentRms);

                return (
                  <g>
                    {/* Resonant Vertical Guideline */}
                    <line
                      x1={resX}
                      y1="40"
                      x2={resX}
                      y2="200"
                      stroke="rgba(16, 185, 129, 0.4)"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <text x={resX} y="215" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">
                      f₀ ({formatNum(resonantFreqF0, 0)}Hz)
                    </text>

                    {/* Resonance Curve Path */}
                    <path
                      d={pathPoints}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                    />

                    {/* Operating Point */}
                    <line
                      x1={curX}
                      y1={curY}
                      x2={curX}
                      y2="200"
                      stroke="rgba(251, 191, 36, 0.6)"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />
                    <circle cx={curX} cy={curY} r="6" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />

                    {/* Operating Point Readout */}
                    <text x={Math.min(270, curX + 10)} y={Math.max(45, curY - 10)} fill="#fbbf24" fontSize="11" fontWeight="black">
                      I = {formatNum(currentRms, 2)} A
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span className="text-emerald-400 font-bold">f₀ = 1 / (2π√LC)</span>
            <span className="text-sky-400 font-bold">Z_min = R ({formatNum(resistanceR, 0)} Ω)</span>
            <span className="text-amber-400 font-bold">I_max = V / R ({formatNum(currentAtResonance, 2)} A)</span>
          </div>
        </div>
      </div>

      {/* Numerical Metrics Deck */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">
            {isArabic ? 'المعاوقة الكلية (Z)' : 'Impedance (Z)'}
          </span>
          <span className="text-base sm:text-lg font-black text-sky-400 font-mono">
            {formatNum(impedanceZ, 1)} Ω
          </span>
          <span className="text-[10px] text-slate-500 block font-mono">
            = √(R² + (X_L - X_C)²)
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">
            {isArabic ? 'المفاعلة الحثية (X_L)' : 'Inductive (X_L)'}
          </span>
          <span className="text-base sm:text-lg font-black text-amber-400 font-mono">
            {formatNum(xL, 1)} Ω
          </span>
          <span className="text-[10px] text-slate-500 block font-mono">
            = 2πfL
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">
            {isArabic ? 'المفاعلة السعوية (X_C)' : 'Capacitive (X_C)'}
          </span>
          <span className="text-base sm:text-lg font-black text-purple-400 font-mono">
            {formatNum(xC, 1)} Ω
          </span>
          <span className="text-[10px] text-slate-500 block font-mono">
            = 1 / (2πfC)
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">
            {isArabic ? 'شدة التيار (I_rms)' : 'Current (I_rms)'}
          </span>
          <span className="text-base sm:text-lg font-black text-emerald-400 font-mono">
            {formatNum(currentRms, 2)} A
          </span>
          <span className="text-[10px] text-slate-500 block font-mono">
            = V / Z
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">
            {isArabic ? 'معامل الجودة (Q)' : 'Quality Factor (Q)'}
          </span>
          <span className="text-base sm:text-lg font-black text-pink-400 font-mono">
            {formatNum(qualityFactor, 2)}
          </span>
          <span className="text-[10px] text-slate-500 block font-mono">
            = (1/R)·√(L/C)
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-[11px] text-slate-400 block font-medium">
            {isArabic ? 'عرض النطاق (Δf)' : 'Bandwidth (Δf)'}
          </span>
          <span className="text-base sm:text-lg font-black text-cyan-400 font-mono">
            {formatNum(bandwidthDeltaF, 1)} Hz
          </span>
          <span className="text-[10px] text-slate-500 block font-mono">
            = R / (2πL)
          </span>
        </div>
      </div>

      {/* Sliders Control Deck */}
      <div
        className={`rounded-xl border p-4 sm:p-5 ${
          isContrast
            ? 'bg-black border-sky-400'
            : isLight
            ? 'bg-slate-50 border-slate-200'
            : 'bg-slate-900/80 border-slate-800'
        }`}
      >
        <h4 className="text-xs font-black uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5" />
          {isArabic ? 'لوحة التحكم في عناصر الدائرة والتردد' : 'RLC Circuit Controls & Frequency Deck'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Frequency f */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-slate-300">
                {isArabic ? 'تردد المصدر (f)' : 'Frequency (f)'}
              </span>
              <span className="font-mono font-bold text-emerald-400">{formatNum(frequencyF, 1)} Hz</span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="1"
              value={frequencyF}
              onChange={(e) => setFrequencyF(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>20 Hz</span>
              <span>Resonant f₀</span>
              <span>500 Hz</span>
            </div>
          </div>

          {/* Resistance R */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-slate-300">
                {isArabic ? 'المقاومة (R)' : 'Resistance (R)'}
              </span>
              <span className="font-mono font-bold text-sky-400">{formatNum(resistanceR, 0)} Ω</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={resistanceR}
              onChange={(e) => setResistanceR(parseInt(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>10 Ω</span>
              <span>200 Ω</span>
            </div>
          </div>

          {/* Inductance L */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-slate-300">
                {isArabic ? 'معامل الحث (L)' : 'Inductance (L)'}
              </span>
              <span className="font-mono font-bold text-amber-400">{formatNum(inductanceMh, 0)} mH</span>
            </div>
            <input
              type="range"
              min="10"
              max="300"
              step="5"
              value={inductanceMh}
              onChange={(e) => setInductanceMh(parseInt(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>10 mH</span>
              <span>300 mH</span>
            </div>
          </div>

          {/* Capacitance C */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-slate-300">
                {isArabic ? 'سعة المكثف (C)' : 'Capacitance (C)'}
              </span>
              <span className="font-mono font-bold text-purple-400">{formatNum(capacitanceUf, 0)} µF</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="1"
              value={capacitanceUf}
              onChange={(e) => setCapacitanceUf(parseInt(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>5 µF</span>
              <span>100 µF</span>
            </div>
          </div>

          {/* Source Voltage V_rms */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-slate-300">
                {isArabic ? 'جهد المصدر (V)' : 'Voltage (V_rms)'}
              </span>
              <span className="font-mono font-bold text-pink-400">{formatNum(vSourceRms, 0)} V</span>
            </div>
            <input
              type="range"
              min="20"
              max="240"
              step="10"
              value={vSourceRms}
              onChange={(e) => setVSourceRms(parseInt(e.target.value))}
              className="w-full accent-pink-500 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>20 V</span>
              <span>240 V</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ministry Exam Questions & Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <h5 className="text-xs font-bold text-slate-200">
              {isArabic ? 'شروط حالة الرنين في دائرة RLC' : 'Resonance Conditions'}
            </h5>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-400">
            {isArabic
              ? 'تتساوى المفاعلة الحثية مع السعوية (X_L = X_C)، وتلغي كل منهما تأثير الأخرى لأن زاوية الطور بينهما 180°. تصبح المعاوقة أقل ما يمكن (Z = R) والتيار أكبر ما يمكن (I = V/R).'
              : 'X_L = X_C cancel each other out due to 180° phase opposition. Impedance is minimized to Z = R and current is maximized to I = V/R with zero phase angle.'}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <Radio className="w-4 h-4 text-sky-400" />
            <h5 className="text-xs font-bold text-slate-200">
              {isArabic ? 'تطبيقات الرنين: دوائر التوليف (الاستقبال)' : 'Tuning & Receiver Circuits'}
            </h5>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-400">
            {isArabic
              ? 'في أجهزة الراديو والاستقبال اللاسلكي، نغير سعة المكثف المتغير C حتى يتساوى تردد الدائرة f₀ مع تردد المحطة الإذاعية المراد التقاطها، فيمر تيار المحطة فقط بأقصى شدة.'
              : 'In radio receivers, variable capacitance C is adjusted until the resonant frequency f0 matches the incoming broadcast frequency, allowing only that station signal to pass at peak amplitude.'}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <h5 className="text-xs font-bold text-slate-200">
              {isArabic ? 'معامل الجودة وحدّة الرنين' : 'Quality Factor & Selectivity'}
            </h5>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-400">
            {isArabic
              ? 'معامل الجودة Q يعبر عن قدرة الدائرة على الانتقاء والتوليف الحاد. كلما قلت المقاومة R، زاد معامل الجودة وأصبح منحنى الرنين أكثر حدة وارتفاعاً وضاق عرض النطاق Δf.'
              : 'Quality factor Q represents tuning sharpness. Smaller resistance R leads to higher Q, sharper peak resonance, and narrower bandwidth Δf for crisp station separation.'}
          </p>
        </div>
      </div>
    </div>
  );
};
