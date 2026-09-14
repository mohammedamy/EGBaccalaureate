import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import { MathRenderer } from '../MathRenderer';
import {
  Compass,
  Sliders,
  Sparkles,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

export const MagnetismLab: React.FC<Props> = ({ lang, theme: _theme = 'dark' }) => {
  const isAr = lang === 'ar';

  // Mode: straight wire, solenoid, or lorentz force
  const [mode, setMode] = useState<'wire' | 'solenoid' | 'force'>('force');

  // Straight Wire State
  const [wireCurrent, setWireCurrent] = useState<number>(10); // Amperes
  const [wireDistanceCm, setWireDistanceCm] = useState<number>(5); // cm
  const [currentDirection, setCurrentDirection] = useState<'out' | 'in'>('out'); // out of page vs into page

  // Solenoid State
  const [solenoidCurrent, setSolenoidCurrent] = useState<number>(4); // Amperes
  const [solenoidTurns, setSolenoidTurns] = useState<number>(200); // Turns N
  const [solenoidLengthM, setSolenoidLengthM] = useState<number>(0.2); // meters
  const [hasIronCore, setHasIronCore] = useState<boolean>(true);

  // Lorentz Force State
  const [fieldB, setFieldB] = useState<number>(0.8); // Tesla
  const [forceCurrent, setForceCurrent] = useState<number>(5); // Amperes
  const [forceLengthM, setForceLengthM] = useState<number>(0.4); // meters
  const [forceAngleDeg, setForceAngleDeg] = useState<number>(90); // degrees (0 - 180)

  // Calculations
  // 1. Straight wire field: B = (mu0 * I) / (2 * pi * d) = (2e-7 * I) / d
  const wireDistM = wireDistanceCm / 100;
  const wireB_Tesla = (2e-7 * wireCurrent) / wireDistM;
  const wireB_MicroTesla = wireB_Tesla * 1e6;

  // 2. Solenoid: B = mu * (N/L) * I
  // mu_air = 4pi * 1e-7 ~ 1.257e-6. Iron permeability ~ 1500 * mu_air
  const mu_eff = hasIronCore ? 4 * Math.PI * 1e-7 * 1500 : 4 * Math.PI * 1e-7;
  const solenoidB_Tesla = (mu_eff * solenoidTurns * solenoidCurrent) / solenoidLengthM;

  // 3. Lorentz Force: F = B * I * L * sin(theta)
  const angleRad = (forceAngleDeg * Math.PI) / 180;
  const sinVal = Math.sin(angleRad);
  const lorentzForceN = fieldB * forceCurrent * forceLengthM * sinVal;

  return (
    <div className="space-y-6">
      {/* Sub-mode selector bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-black text-slate-100">
            {isAr ? 'مختبر التأثير المغناطيسي والقوة المغناطيسية' : 'Magnetism & Lorentz Force Virtual Laboratory'}
          </span>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
          <button
            onClick={() => setMode('wire')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              mode === 'wire' ? 'bg-cyan-500 text-slate-950 font-black' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isAr ? 'السلك المستقيم وأمبير' : 'Straight Wire (Ampère)'}
          </button>
          <button
            onClick={() => setMode('solenoid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              mode === 'solenoid' ? 'bg-cyan-500 text-slate-950 font-black' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isAr ? 'الملف اللولبي والفيض' : 'Solenoid Core'}
          </button>
          <button
            onClick={() => setMode('force')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              mode === 'force' ? 'bg-cyan-500 text-slate-950 font-black' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isAr ? 'قوة لورنتز (F = BIL sin θ)' : 'Lorentz Force (F = BIL sin θ)'}
          </button>
        </div>
      </div>

      {/* MODE 1: STRAIGHT WIRE & AMPERE'S LAW */}
      {mode === 'wire' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Schematic Canvas */}
          <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col items-center justify-center relative min-h-[380px]">
            <svg viewBox="0 0 450 320" className="w-full max-w-[420px] h-auto overflow-visible select-none">
              {/* Concentric Magnetic Field Rings */}
              {[40, 75, 110, 145].map((r, i) => (
                <g key={i}>
                  <circle cx="225" cy="160" r={r} fill="none" stroke="#0ea5e9" strokeWidth="1.8" strokeDasharray="5,4" className="opacity-70" />
                  {/* Direction Arrow on Ring */}
                  <polygon
                    points={
                      currentDirection === 'out'
                        ? `${225 - r},156 ${225 - r - 4},166 ${225 - r + 4},166`
                        : `${225 - r},166 ${225 - r - 4},156 ${225 - r + 4},156`
                    }
                    className="fill-cyan-400"
                  />
                  <polygon
                    points={
                      currentDirection === 'out'
                        ? `${225 + r},164 ${225 + r - 4},154 ${225 + r + 4},154`
                        : `${225 + r},154 ${225 + r - 4},164 ${225 + r + 4},164`
                    }
                    className="fill-cyan-400"
                  />
                </g>
              ))}

              {/* Wire Cross-Section in Center */}
              <circle cx="225" cy="160" r="18" className="fill-slate-800 stroke-amber-400" strokeWidth="3" />
              {currentDirection === 'out' ? (
                // Dot for current coming out
                <circle cx="225" cy="160" r="5" className="fill-amber-400" />
              ) : (
                // Cross for current going in
                <g stroke="#f59e0b" strokeWidth="2.5">
                  <line x1="217" y1="152" x2="233" y2="168" />
                  <line x1="233" y1="152" x2="217" y2="168" />
                </g>
              )}
              <text x="225" y="195" textAnchor="middle" className="text-[11px] font-black fill-amber-300">
                {currentDirection === 'out' ? (isAr ? 'تيار عمودي لخارج الصفحة ⊙' : 'Current Out ⊙') : (isAr ? 'تيار عمودي لداخل الصفحة ⊗' : 'Current In ⊗')}
              </text>

              {/* Probe Line representing distance d */}
              <line x1="225" y1="160" x2={225 + wireDistanceCm * 7} y2="160" stroke="#f43f5e" strokeWidth="2.5" />
              <circle cx={225 + wireDistanceCm * 7} cy="160" r="6" className="fill-rose-500 stroke-white" strokeWidth="2" />
              <text x={225 + (wireDistanceCm * 7) / 2} y="152" textAnchor="middle" className="text-[10px] font-extrabold fill-rose-300">
                d = {isAr ? toHindiDigits(wireDistanceCm) : wireDistanceCm} cm
              </text>
              <text x={225 + wireDistanceCm * 7 + 10} y="164" className="text-[11px] font-black fill-cyan-300">
                B
              </text>
            </svg>

            <div className="absolute bottom-3 left-4 text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isAr ? 'قاعدة اليد اليمنى لأمبير: الإبهام مع التيار، والأصابع تدور مع اتجاه الفيض B' : 'Right-Hand Grip Rule: Thumb follows current, fingers curl with B'}</span>
            </div>
          </div>

          {/* Controls & Numerical Readouts */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                <span>{isAr ? 'محددات السلك المستقيم' : 'Straight Conductor Controls'}</span>
              </h4>

              {/* Current Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'شدة التيار (I):' : 'Current (I):'}</span>
                  <span className="font-mono text-cyan-400">{wireCurrent} A</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={wireCurrent}
                  onChange={(e) => setWireCurrent(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Distance Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'البعد العمودي (d):' : 'Distance (d):'}</span>
                  <span className="font-mono text-cyan-400">{wireDistanceCm} cm</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={wireDistanceCm}
                  onChange={(e) => setWireDistanceCm(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Direction Toggle */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-300">{isAr ? 'اتجاه التيار بالنسبة للمستوى:' : 'Current Vector:'}</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCurrentDirection('out')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      currentDirection === 'out' ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {isAr ? 'خارج الصفحة (⊙)' : 'Out of Page (⊙)'}
                  </button>
                  <button
                    onClick={() => setCurrentDirection('in')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      currentDirection === 'in' ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {isAr ? 'داخل الصفحة (⊗)' : 'Into Page (⊗)'}
                  </button>
                </div>
              </div>

              {/* Calculation Result Badge */}
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-800/60 space-y-2">
                <span className="text-[10px] uppercase font-black text-cyan-400 tracking-wider">
                  {isAr ? 'كثافة الفيض المغناطيسي المحسوبة' : 'Calculated Magnetic Flux Density'}
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black font-mono text-emerald-400">
                    {wireB_MicroTesla.toFixed(1)} <span className="text-xs text-slate-400 font-sans">μT</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    ({wireB_Tesla.toExponential(2)} T)
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-800 text-center">
                  <MathRenderer math="B = \frac{\mu_0 I}{2\pi d} = \frac{2 \times 10^{-7} \cdot I}{d}" lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: SOLENOID & CORE */}
      {mode === 'solenoid' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col items-center justify-center relative min-h-[380px]">
            <svg viewBox="0 0 460 280" className="w-full max-w-[440px] h-auto overflow-visible select-none">
              {/* Core Cylinder */}
              <rect
                x="80"
                y="100"
                width="300"
                height="70"
                rx="6"
                className={hasIronCore ? 'fill-slate-700 stroke-slate-500' : 'fill-slate-950/40 stroke-slate-800'}
                strokeWidth="2"
              />
              <text x="230" y="140" textAnchor="middle" className="text-[12px] font-black fill-slate-300">
                {hasIronCore ? (isAr ? 'قلب من الحديد المطاوع (μ عالي)' : 'Soft Iron Core (High μ)') : (isAr ? 'قلب هوائي (μ_air)' : 'Air Core')}
              </text>

              {/* Helical Solenoid Windings */}
              {[100, 130, 160, 190, 220, 250, 280, 310, 340].map((x, i) => (
                <path key={i} d={`M ${x} 90 C ${x+15} 80, ${x+15} 180, ${x+30} 175`} fill="none" stroke="#f59e0b" strokeWidth="4.5" strokeLinecap="round" />
              ))}

              {/* Axial Magnetic Field Vectors */}
              <g stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="5,4">
                <line x1="50" y1="125" x2="410" y2="125" />
                <line x1="50" y1="145" x2="410" y2="145" />
              </g>
              <polygon points="415,125 405,120 405,130" className="fill-sky-400" />
              <polygon points="415,145 405,140 405,150" className="fill-sky-400" />

              {/* Magnetic Poles */}
              <rect x="40" y="95" width="30" height="80" rx="4" className="fill-blue-600/30 stroke-blue-500" strokeWidth="2" />
              <text x="55" y="142" textAnchor="middle" className="text-[18px] font-black fill-blue-300">S</text>
              <rect x="390" y="95" width="30" height="80" rx="4" className="fill-red-600/30 stroke-red-500" strokeWidth="2" />
              <text x="405" y="142" textAnchor="middle" className="text-[18px] font-black fill-red-300">N</text>
            </svg>

            <div className="mt-4 flex items-center justify-between w-full px-4 text-xs font-bold text-slate-400">
              <span>{isAr ? 'القطب الشمالي N: تخرج منه خطوط الفيض للخارج' : 'N-Pole: Field lines emerge outwards'}</span>
              <span>{isAr ? 'القطب الجنوبي S: تدخل فيه خطوط الفيض' : 'S-Pole: Field lines enter inwards'}</span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                <span>{isAr ? 'محددات الملف اللولبي' : 'Solenoid Parameters'}</span>
              </h4>

              {/* Current */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'شدة التيار (I):' : 'Current (I):'}</span>
                  <span className="font-mono text-cyan-400">{solenoidCurrent} A</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="15"
                  step="0.5"
                  value={solenoidCurrent}
                  onChange={(e) => setSolenoidCurrent(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Turns N */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'عدد اللفات (N):' : 'Turns (N):'}</span>
                  <span className="font-mono text-cyan-400">{solenoidTurns}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="25"
                  value={solenoidTurns}
                  onChange={(e) => setSolenoidTurns(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Length L */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'طول الملف (L):' : 'Length (L):'}</span>
                  <span className="font-mono text-cyan-400">{solenoidLengthM} m</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.8"
                  step="0.05"
                  value={solenoidLengthM}
                  onChange={(e) => setSolenoidLengthM(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Core material toggle */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-bold text-slate-300">{isAr ? 'قلب حديدي عالي النفاذية:' : 'Iron Core:'}</span>
                <button
                  onClick={() => setHasIronCore(!hasIronCore)}
                  className={`px-3 py-1 rounded-lg text-xs font-black cursor-pointer transition-all ${
                    hasIronCore ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {hasIronCore ? (isAr ? 'مفعل (حديد)' : 'Active (Iron)') : (isAr ? 'هواء' : 'Air')}
                </button>
              </div>

              {/* Result Readout */}
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-800/60 space-y-2">
                <span className="text-[10px] uppercase font-black text-cyan-400 tracking-wider">
                  {isAr ? 'كثافة الفيض عند محور الملف' : 'Axial Magnetic Flux Density'}
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black font-mono text-emerald-400">
                    {solenoidB_Tesla >= 0.01 ? solenoidB_Tesla.toFixed(3) : (solenoidB_Tesla * 1e3).toFixed(2)}{' '}
                    <span className="text-xs text-slate-400 font-sans">{solenoidB_Tesla >= 0.01 ? 'T' : 'mT'}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    n = {(solenoidTurns / solenoidLengthM).toFixed(0)} turns/m
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-800 text-center">
                  <MathRenderer math="B = \frac{\mu N I}{L} = \mu n I" lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: LORENTZ FORCE F = BIL sin(theta) */}
      {mode === 'force' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col items-center justify-center relative min-h-[380px]">
            <svg viewBox="0 0 460 300" className="w-full max-w-[440px] h-auto overflow-visible select-none">
              <defs>
                <marker id="arrMagB" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-sky-400" />
                </marker>
                <marker id="arrForce" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-emerald-400" />
                </marker>
              </defs>

              {/* Uniform Magnetic Field B (horizontal rightwards arrows) */}
              {[60, 110, 160, 210, 260].map((y, i) => (
                <line key={i} x1="80" y1={y} x2="380" y2={y} stroke="#0284c7" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arrMagB)" className="opacity-60" />
              ))}
              <text x="390" y="65" className="text-[13px] font-black fill-sky-300">B</text>

              {/* Center Wire Pivot at (230, 160) */}
              {(() => {
                const cx = 230;
                const cy = 160;
                const len = 110;
                const rad = (forceAngleDeg * Math.PI) / 180;
                const x2 = cx + len * Math.cos(rad);
                const y2 = cy - len * Math.sin(rad);
                const x1 = cx - len * Math.cos(rad);
                const y1 = cy + len * Math.sin(rad);

                return (
                  <g>
                    {/* Angle Arc */}
                    <path
                      d={`M ${cx + 40} ${cy} A 40 40 0 0 0 ${cx + 40 * Math.cos(rad)} ${cy - 40 * Math.sin(rad)}`}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2.5"
                    />
                    <text x={cx + 50} y={cy - 12} className="text-[11px] font-black fill-amber-300">
                      θ = {forceAngleDeg}°
                    </text>

                    {/* Conductor Wire */}
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
                    <circle cx={cx} cy={cy} r="5" className="fill-white" />

                    {/* Resulting Lorentz Force Vector (Perpendicular to plane, pointing Up) */}
                    {sinVal > 0.05 && (
                      <g>
                        <line x1={cx} y1={cy} x2={cx} y2={cy - 40 - sinVal * 60} stroke="#10b981" strokeWidth="4.5" markerEnd="url(#arrForce)" />
                        <text x={cx + 12} y={cy - 50 - sinVal * 40} className="text-[13px] font-black fill-emerald-300">
                          F = {lorentzForceN.toFixed(2)} N
                        </text>
                      </g>
                    )}
                  </g>
                );
              })()}
            </svg>

            <div className="mt-2 text-xs font-bold text-slate-300 flex items-center gap-2">
              <span className="text-amber-400">
                {forceAngleDeg === 90 ? (isAr ? 'أقصى قوة مغناطيسية (تعامد كامل sin 90° = 1)' : 'Maximum Force: Wire is perpendicular (sin 90° = 1)') : ''}
              </span>
              <span className="text-rose-400">
                {forceAngleDeg === 0 || forceAngleDeg === 180 ? (isAr ? 'تنعدم القوة تماماً (سلك موازٍ لخطوط الفيض sin 0° = 0)' : 'Zero Force: Wire is parallel to B field (sin 0° = 0)') : ''}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                <span>{isAr ? 'محددات قوة لورنتز' : 'Lorentz Force Controls'}</span>
              </h4>

              {/* Angle Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'زاوية الميل (θ):' : 'Angle (θ):'}</span>
                  <span className="font-mono text-cyan-400">{forceAngleDeg}° (sin θ = {sinVal.toFixed(3)})</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="180"
                  step="5"
                  value={forceAngleDeg}
                  onChange={(e) => setForceAngleDeg(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Magnetic Field B */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'كثافة الفيض (B):' : 'Magnetic Field (B):'}</span>
                  <span className="font-mono text-cyan-400">{fieldB} T</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2.5"
                  step="0.1"
                  value={fieldB}
                  onChange={(e) => setFieldB(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Current I */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'شدة التيار (I):' : 'Current (I):'}</span>
                  <span className="font-mono text-cyan-400">{forceCurrent} A</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={forceCurrent}
                  onChange={(e) => setForceCurrent(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Wire Length L */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'طول السلك (L):' : 'Wire Length (L):'}</span>
                  <span className="font-mono text-cyan-400">{forceLengthM} m</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.5"
                  step="0.1"
                  value={forceLengthM}
                  onChange={(e) => setForceLengthM(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Result Readout */}
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-800/60 space-y-2">
                <span className="text-[10px] uppercase font-black text-cyan-400 tracking-wider">
                  {isAr ? 'القوة المغناطيسية المؤثرة' : 'Magnetic Force (Fleming Left Hand)'}
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black font-mono text-emerald-400">
                    {lorentzForceN.toFixed(3)} <span className="text-sm text-slate-400 font-sans">N</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    F_max = {(fieldB * forceCurrent * forceLengthM).toFixed(3)} N
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-800 text-center">
                  <MathRenderer math="F = B \cdot I \cdot L \cdot \sin\theta" lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
